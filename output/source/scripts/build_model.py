# -*- coding: utf-8 -*-
"""
Supremo 85 - uPVC pencere kesit numunesi: 3B montaj üretimi (Blender / bpy)

Girdi : section_mm.json  (PDF sayfa 9 vektörlerinden birebir çıkarılmış kesitler, mm)
Çıktı : supremo85.blend, supremo85_raw.glb

Koordinatlar
  Kesit (sx, sy) [mm]: sx = dış yüz (0) -> iç yüz (104.5), sy = kasa altı (0) -> yukarı
  Blender [m]: X = profil boyu (numune ortalanmış), Y = 52.25 - sx (iç taraf -Y), Z = sy
  glTF'e Y-up dönüşümü ile three.js: X = boy, Y = yukarı, Z = sx - 52.25 (iç taraf +Z)
"""
import bpy, bmesh, json, math, os, sys
import numpy as np
from mathutils import Vector, Matrix
import shapely
from shapely.geometry import Polygon, Point
from shapely.ops import unary_union

HERE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.dirname(HERE)
SEC = json.load(open(os.path.join(SRC, 'section_mm.json')))

L = 300.0          # numune boyu [mm]
MM = 0.001         # mm -> m
DC = 52.25         # derinlik merkezi (104.5 / 2)
GLASS_TOP = 200.0  # cam üst kenarı [mm]

# ---------------------------------------------------------------- helpers
def B(u, sx, sy):
    return Vector(((u - L / 2) * MM, (DC - sx) * MM, sy * MM))

def poly_of(key):
    d = SEC[key]
    return shapely.geometry.polygon.orient(Polygon(d['exterior'], d['holes']), 1.0)

def clear_scene():
    bpy.ops.wm.read_factory_settings(use_empty=True)

def new_object(name, bm, collection=None):
    me = bpy.data.meshes.new(name)
    bm.to_mesh(me)
    bm.free()
    ob = bpy.data.objects.new(name, me)
    (collection or bpy.context.scene.collection).objects.link(ob)
    return ob

def extrude_bm(poly, u0, u1, bm=None, bevel_caps=True):
    """Extrude a shapely polygon (with holes) along U between u0..u1 into bmesh."""
    bm = bm or bmesh.new()
    bw = bm.edges.layers.float.get('bevel_weight_edge') or bm.edges.layers.float.new('bevel_weight_edge')
    rings = [np.array(poly.exterior.coords)[:-1]] + [np.array(h.coords)[:-1] for h in poly.interiors]
    lut = {}
    cap0, cap1 = [], []
    for r in rings:
        v0 = [bm.verts.new(B(u0, x, y)) for x, y in r]
        v1 = [bm.verts.new(B(u1, x, y)) for x, y in r]
        n = len(r)
        for i in range(n):
            j = (i + 1) % n
            bm.faces.new((v0[i], v0[j], v1[j], v1[i]))
        for k, (x, y) in enumerate(r):
            lut[(round(x, 4), round(y, 4))] = (v0[k], v1[k])
        cap0.append(v0); cap1.append(v1)
    tris = shapely.constrained_delaunay_triangles(poly)
    for t in tris.geoms:
        if not poly.buffer(1e-6).contains(t.representative_point()):
            continue
        c = [(round(x, 4), round(y, 4)) for x, y in list(t.exterior.coords)[:3]]
        try:
            a = [lut[k] for k in c]
        except KeyError:
            continue
        try:
            bm.faces.new((a[0][0], a[1][0], a[2][0]))
            bm.faces.new((a[2][1], a[1][1], a[0][1]))
        except ValueError:
            pass
    bm.normal_update()
    bmesh.ops.recalc_face_normals(bm, faces=bm.faces[:])
    if bevel_caps:
        for ring in cap0 + cap1:
            n = len(ring)
            for i in range(n):
                e = bm.edges.get((ring[i], ring[(i + 1) % n]))
                if e: e[bw] = 1.0
    return bm

def shade(ob, angle=32):
    me = ob.data
    for p in me.polygons: p.use_smooth = True
    me.set_sharp_from_angle(angle=math.radians(angle))

def add_bevel(ob, width_mm=0.15, segments=2):
    m = ob.modifiers.new('Bevel', 'BEVEL')
    m.width = width_mm * MM
    m.segments = segments
    m.limit_method = 'WEIGHT'
    m.use_clamp_overlap = True
    m.harden_normals = False
    m.miter_outer = 'MITER_ARC'
    return m

def apply_mods(ob):
    bpy.context.view_layer.objects.active = ob
    for m in list(ob.modifiers):
        bpy.ops.object.modifier_apply(modifier=m.name)

def boolean(ob, cutter, op='DIFFERENCE'):
    m = ob.modifiers.new('Bool_' + cutter.name, 'BOOLEAN')
    m.operation = op
    m.solver = 'EXACT'
    m.object = cutter
    m.use_self = False
    m.material_mode = 'TRANSFER'
    bpy.context.view_layer.objects.active = ob
    bpy.ops.object.modifier_apply(modifier=m.name)

def delete(ob):
    me = ob.data
    bpy.data.objects.remove(ob, do_unlink=True)
    if me and me.users == 0: bpy.data.meshes.remove(me)

# ---------------------------------------------------------------- cutters
def stadium_prism(name, center_sxsy, axis2d, width_dir2d, u_c, length, width, d0, d1, seg=12):
    """Oblong slot (milling cutter volume). axis2d = milling axis in section plane,
    width_dir2d = slot width direction in section plane, U = slot length direction."""
    bm = bmesh.new()
    cx, cy = center_sxsy
    a = np.array(axis2d, float); a /= np.linalg.norm(a)
    w = np.array(width_dir2d, float); w /= np.linalg.norm(w)
    r = width / 2
    half = length / 2 - r
    outline = []
    for i in range(seg + 1):  # right semicircle
        t = -math.pi / 2 + math.pi * i / seg
        outline.append((half + r * math.cos(t), r * math.sin(t)))
    for i in range(seg + 1):  # left semicircle
        t = math.pi / 2 + math.pi * i / seg
        outline.append((-half + r * math.cos(t), r * math.sin(t)))
    rows = []
    for d in (d0, d1):
        row = []
        for (du, dw) in outline:
            p = np.array([cx, cy]) + a * d + w * dw
            row.append(bm.verts.new(B(u_c + du, p[0], p[1])))
        rows.append(row)
    n = len(outline)
    for i in range(n):
        j = (i + 1) % n
        bm.faces.new((rows[0][i], rows[0][j], rows[1][j], rows[1][i]))
    bm.faces.new(rows[0][::-1]); bm.faces.new(rows[1])
    bmesh.ops.recalc_face_normals(bm, faces=bm.faces[:])
    return new_object(name, bm)

# ---------------------------------------------------------------- screw
SCREW = dict(d_head=7.0, rim=0.25, d_major=3.9, d_minor=2.9, pitch=1.3, length=19.0, point=3.4)

def lathe(bm, prof, seg=24, axis_origin=Vector((0, 0, 0))):
    """prof: list of (r, z) from top to bottom; r=0 end points collapse. Closed solid, outward normals."""
    rings = []
    nf0 = len(bm.faces)
    for r, z in prof:
        if r < 1e-6:
            rings.append([bm.verts.new((0, 0, z))])
        else:
            rings.append([bm.verts.new((r * math.cos(2 * math.pi * i / seg), r * math.sin(2 * math.pi * i / seg), z)) for i in range(seg)])
    for a, b in zip(rings[:-1], rings[1:]):
        if len(a) == 1 and len(b) == 1: continue
        if len(a) == 1:
            for i in range(seg): bm.faces.new((a[0], b[(i + 1) % seg], b[i]))
        elif len(b) == 1:
            for i in range(seg): bm.faces.new((a[i], a[(i + 1) % seg], b[0]))
        else:
            for i in range(seg): bm.faces.new((a[i], a[(i + 1) % seg], b[(i + 1) % seg], b[i]))
    bm.faces.ensure_lookup_table()
    new_faces = [bm.faces[i] for i in range(nf0, len(bm.faces))]
    bmesh.ops.recalc_face_normals(bm, faces=new_faces)
    return rings

def screw_mesh(name, seg=24):
    """Countersunk self-drilling screw 3.9x19 (PH2), head top at z=0, tip at z=-19 (local, mm -> m)."""
    s = SCREW
    rH, rM, rm, p = s['d_head'] / 2, s['d_major'] / 2, s['d_minor'] / 2, s['pitch']
    z_cone = -(s['rim'] + (rH - rM))          # end of countersink cone (r = rM)
    z_thr0, z_thr1 = z_cone - 0.25, -(s['length'] - s['point'])
    # --- head + core + drill point (closed lathe solid)
    bm = bmesh.new()
    prof = [(0.0, 0.0), (rH - 0.12, 0.0), (rH, -0.12), (rH, -s['rim']), (rM, z_cone),
            (rm - 0.03, z_cone - 0.12), (rm - 0.03, z_thr1), (rm * 0.88, z_thr1 - 0.7), (0.2, -s['length'] + 0.1), (0.0, -s['length'])]
    lathe(bm, prof, seg)
    bmesh.ops.scale(bm, vec=(MM, MM, MM), verts=bm.verts[:])
    ob = new_object(name, bm)
    # Phillips recess
    for ang in (0, 90):   # two separate cutters (crossing boxes in one cutter break the exact solver)
        rec = bmesh.new()
        bmesh.ops.create_cube(rec, size=1.0, matrix=Matrix.Rotation(math.radians(ang), 4, 'Z') @ Matrix.Diagonal((3.6 * MM, 0.9 * MM, 3.0 * MM, 1)))
        bmesh.ops.translate(rec, vec=(0, 0, 0.1 * MM), verts=rec.verts[:])
        rec_ob = new_object(name + '_rec1', rec)
        boolean(ob, rec_ob); delete(rec_ob)
        assert len(ob.data.vertices) > 0, 'recess boolean failed'
    
    rec = bmesh.new()
    cone = bmesh.ops.create_cone(rec, cap_ends=True, segments=16, radius1=0.0, radius2=1.6 * MM, depth=1.8 * MM)
    bmesh.ops.translate(rec, vec=(0, 0, -0.35 * MM), verts=rec.verts[:])
    rec_ob = new_object(name + '_rec2', rec)
    boolean(ob, rec_ob); delete(rec_ob)
    # --- helical thread surface (rows follow the helix, outward normals)
    bm = bmesh.new(); bm.from_mesh(ob.data)
    samples = [(0.00, rm), (0.30, rm), (0.50, rM), (0.70, rm)]
    ns, Nt = len(samples), seg
    def zof(i, k):
        t, j = divmod(k, ns)
        return z_thr0 - p * (t + samples[j][0] + i / Nt)
    kmax = 0
    while zof(Nt - 1, kmax + 1) >= z_thr1:
        kmax += 1
    verts = {}
    for k in range(kmax + 1):
        for i in range(Nt):
            zz = zof(i, k)
            fade = max(0.0, min(1.0, (z_thr0 - zz) / (0.8 * p), (zz - z_thr1) / (0.8 * p)))
            rr = (rm + (samples[k % ns][1] - rm) * fade) * MM
            ang = 2 * math.pi * i / Nt
            verts[(i, k)] = bm.verts.new((rr * math.cos(ang), rr * math.sin(ang), zz * MM))
    for k in range(kmax):
        for i in range(Nt):
            a = verts[(i, k)]; d = verts[(i, k + 1)]
            if i < Nt - 1:
                b = verts[(i + 1, k)]; c = verts[(i + 1, k + 1)]
            else:
                if (0, k + ns + 1) not in verts: continue
                b = verts[(0, k + ns)]; c = verts[(0, k + ns + 1)]
            f = bm.faces.new((a, d, c, b))
            f.normal_update()
            cen = f.calc_center_median()
            if f.normal.dot(Vector((cen.x, cen.y, 0))) < 0: f.normal_flip()
    bm.to_mesh(ob.data); bm.free()
    return ob

def screw_envelope(name):
    """Hole volume for a seated screw (countersink + major diameter), local mm like screw."""
    s = SCREW
    rH, rM = s['d_head'] / 2 + 0.02, s['d_major'] / 2 + 0.02
    z_cone = -(s['rim'] + (rH - rM))
    bm = bmesh.new()
    prof = [(0.0, 3.0), (rH, 3.0), (rH, -s['rim']), (rM, z_cone), (rM, -s['length'] - 0.3), (0.0, -s['length'] - 0.3)]
    lathe(bm, prof, 32)
    bmesh.ops.remove_doubles(bm, verts=bm.verts[:], dist=1e-6)
    bmesh.ops.recalc_face_normals(bm, faces=bm.faces[:])
    bmesh.ops.scale(bm, vec=(MM, MM, MM), verts=bm.verts[:])
    return new_object(name, bm)

def place_local(ob, u, sx, sy, direction):
    """Place local screw (axis -Z, head at origin) at section point with direction 'down'/'up'."""
    M = Matrix.Translation(B(u, sx, sy))
    if direction == 'up':  # tip pointing +Z (screw driven from below)
        M = M @ Matrix.Rotation(math.pi, 4, 'X')
    ob.matrix_world = M

# ---------------------------------------------------------------- drain cover (rüzgarlık)
def drain_cover(name, u_c, y_c):
    """Water drain cover (windbreaker) clipped onto exterior slot. Exterior face is sx=0."""
    Lc, H, D = 40.0, 11.0, 6.5
    bm = bmesh.new()
    # outer shell as section polygon (sx<0 outside) extruded along U, then cavity boolean
    sec = Polygon([(0.0, y_c - H / 2), (0.0, y_c + H / 2), (-D + 2.2, y_c + H / 2), (-D, y_c + H / 2 - 2.2),
                   (-D, y_c - H / 2), (-D + 1.0, y_c - H / 2)]).buffer(0.35, join_style='round', quad_segs=3).buffer(-0.35, quad_segs=3)
    sec = sec.buffer(-0.3, quad_segs=3).buffer(0.3, quad_segs=3)
    sec = shapely.geometry.polygon.orient(Polygon(np.array(sec.exterior.coords)), 1.0)
    extrude_bm(sec, u_c - Lc / 2, u_c + Lc / 2, bm, bevel_caps=True)
    ob = new_object(name, bm)
    add_bevel(ob, 0.3, 2); apply_mods(ob)
    # cavity open at bottom
    cav = bmesh.new()
    cs = Polygon([(-0.9, y_c - H / 2 - 3), (-0.9, y_c + H / 2 - 1.1), (-D + 2.0, y_c + H / 2 - 1.1), (-D + 1.1, y_c + H / 2 - 2.4), (-D + 1.1, y_c - H / 2 - 3)])
    extrude_bm(shapely.geometry.polygon.orient(cs, 1.0), u_c - Lc / 2 + 1.2, u_c + Lc / 2 - 1.2, cav, bevel_caps=False)
    cav_ob = new_object(name + '_cav', cav)
    boolean(ob, cav_ob); delete(cav_ob)
    # two snap pins into the slot
    for du in (-11.0, 11.0):
        pb = bmesh.new()
        prof = [(0.0, 0.05), (1.85, 0.05), (1.85, -3.85), (2.15, -4.05), (2.15, -4.3), (1.45, -4.9), (0.0, -4.9)]
        lathe(pb, prof, 16)
        bmesh.ops.remove_doubles(pb, verts=pb.verts[:], dist=1e-6)
        bmesh.ops.recalc_face_normals(pb, faces=pb.faces[:])
        bmesh.ops.scale(pb, vec=(MM, MM, MM), verts=pb.verts[:])
        # local -Z -> section +sx (into wall): Blender -Y
        R = Matrix.Rotation(-math.pi / 2, 4, 'X')  # local -Z -> -Y
        bmesh.ops.transform(pb, matrix=Matrix.Translation(B(u_c + du, -0.9, y_c)) @ R, verts=pb.verts[:])
        pin = new_object(name + '_pin', pb)
        boolean(ob, pin, 'UNION'); delete(pin)
    return ob

# ================================================================= BUILD
def build():
    clear_scene()
    sc = bpy.context.scene
    sc.unit_settings.system = 'METRIC'
    parts = {}

    def extrude_part(name, key_or_poly, u0=0.0, u1=L, bevel=0.15, seg=2):
        poly = poly_of(key_or_poly) if isinstance(key_or_poly, str) else key_or_poly
        bm = extrude_bm(poly, u0, u1, bevel_caps=bevel > 0)
        ob = new_object(name, bm)
        if bevel > 0:
            add_bevel(ob, bevel, seg)
        parts[name] = ob
        return ob

    # --- profiles
    frame = extrude_part('kasa_profili', 'frame')
    sash = extrude_part('kanat_profili', 'sash')
    bead = extrude_part('cam_citasi', 'bead')
    # co-extruded bead lips (one object)
    lips = unary_union([poly_of('bead_lip_top'), poly_of('bead_lip_bot')])
    bm = bmesh.new()
    for g in lips.geoms: extrude_bm(shapely.geometry.polygon.orient(g, 1.0), 0, L, bm)
    parts['cam_citasi_contasi'] = new_object('cam_citasi_contasi', bm); add_bevel(parts['cam_citasi_contasi'], 0.08, 1)
    # --- gaskets
    extrude_part('kasa_dis_contasi', 'gasket_frame_ext', bevel=0.08, seg=1)
    extrude_part('orta_conta', 'gasket_middle', bevel=0.08, seg=1)
    extrude_part('kanat_ic_contasi', 'gasket_interior', bevel=0.08, seg=1)
    extrude_part('kanat_dis_cam_contasi', 'gasket_glazing_ext', bevel=0.08, seg=1)
    # --- steel
    extrude_part('kasa_celik_takviye', 'steel_frame', bevel=0.12, seg=1)
    extrude_part('kanat_celik_takviye', 'steel_sash', bevel=0.12, seg=1)
    # --- glazing bridges (2 pcs, 100 mm)
    bm = bmesh.new()
    for (a, b) in ((0.0, 100.0), (200.0, 300.0)):
        extrude_bm(poly_of('bridge'), a, b, bm)
    parts['cam_takoz_koprusu'] = new_object('cam_takoz_koprusu', bm); add_bevel(parts['cam_takoz_koprusu'], 0.2, 2)
    # --- insulating glass unit
    for i in (1, 2, 3):
        g = SEC['glass%d' % i]
        xs = [p[0] for p in g['exterior']]
        rect = Polygon([(min(xs), 97.807), (max(xs), 97.807), (max(xs), GLASS_TOP), (min(xs), GLASS_TOP)])
        rect = rect.buffer(-0.3, quad_segs=4).buffer(0.3, quad_segs=4)
        rect = shapely.geometry.polygon.orient(rect, 1.0)
        extrude_part('cam_%d' % i, rect, bevel=0.15, seg=1)
    bm = bmesh.new()
    for k in ('spacer1', 'spacer2'): extrude_bm(poly_of(k), 0, L, bm)
    parts['isicam_citasi'] = new_object('isicam_citasi', bm); add_bevel(parts['isicam_citasi'], 0.06, 1)
    bm = bmesh.new()
    for k in ('spacer1', 'spacer2'):   # desiccant fills the spacer cavity exactly
        cav = shapely.geometry.polygon.orient(Polygon(poly_of(k).interiors[0].coords), 1.0)
        extrude_bm(cav, 0, L, bm, bevel_caps=False)
    parts['nem_alici'] = new_object('nem_alici', bm)
    bm = bmesh.new()
    for k in ('sealant1', 'sealant2'): extrude_bm(poly_of(k), 0, L, bm, bevel_caps=False)
    parts['ikincil_sizdirmazlik'] = new_object('ikincil_sizdirmazlik', bm)

    for ob in list(parts.values()):
        apply_mods(ob)

    # --- drainage slots (32 x Ø4, per document p.8; positions per section p.9 markers)
    SLOT_L, SLOT_W = 32.0, 4.0
    U_IN, U_OUT = 76.0, 178.0            # inner/outer channel centres: 70 mm clear gap
    s2 = math.sqrt(0.5)
    cutters = {
        'kasa_profili': [
            # C: 45° slot through frame rebate slope into chamber (marker fill 63)
            stadium_prism('cut_C', (14.68, 43.52), (s2, s2), (s2, -s2), U_IN, SLOT_L, SLOT_W, -2.2, 3.5),
            # D+E: horizontal slot from exterior face through outer wall and inner web (fill 64)
            stadium_prism('cut_DE', (0.0, 30.22), (1, 0), (0, 1), U_OUT, SLOT_L, SLOT_W, -2.0, 11.9),
        ],
        'kanat_profili': [
            # A: 45° slot from glass rebate into sash exterior chamber (fill 66)
            stadium_prism('cut_A', (34.18, 93.51), (s2, s2), (s2, -s2), U_OUT, SLOT_L, SLOT_W, -2.2, 3.6),
            # B: vertical slot through bottom wall of sash exterior chamber (fill 67)
            stadium_prism('cut_B', (25.36, 73.11), (0, 1), (1, 0), U_IN, SLOT_L, SLOT_W, -3.0, 2.2),
        ],
    }
    slot_mat = bpy.data.materials.new('SLOT')
    for tgt, cl in cutters.items():
        ob = parts[tgt]
        base_mat = bpy.data.materials.new('M_' + tgt)
        ob.data.materials.append(base_mat)
        for c in cl:
            c.data.materials.append(slot_mat)
            boolean(ob, c)
            delete(c)

    # --- screws: 3.9x19 countersunk self-drilling, seated flush (drawing shows them ~1 mm proud)
    hole_mat = bpy.data.materials.get('HOLE') or bpy.data.materials.new('HOLE')
    screw_proto = screw_mesh('vida_proto')
    placements = {
        'kasa_takviye_vidalari': [(u, 53.0, 7.015, 'up') for u in (40.0, 260.0)],
        'kanat_takviye_vidalari': [(u, 72.39, 94.007, 'down') for u in (40.0, 260.0)],
    }
    hole_targets = {'kasa_takviye_vidalari': ['kasa_profili', 'kasa_celik_takviye'],
                    'kanat_takviye_vidalari': ['kanat_profili', 'kanat_celik_takviye']}
    for gname, pl in placements.items():
        objs = []
        for (u, sx, sy, d) in pl:
            s = screw_proto.copy(); s.data = screw_proto.data.copy()
            bpy.context.scene.collection.objects.link(s)
            place_local(s, u, sx, sy, d)
            env = screw_envelope('env'); place_local(env, u, sx, sy, d)
            env.data.materials.append(hole_mat)
            for t in hole_targets[gname]:
                boolean(parts[t], env)
            delete(env)
            objs.append(s)
        for s in objs:
            bpy.context.view_layer.objects.active = s
            bpy.ops.object.transform_apply(location=True, rotation=True, scale=True)
        bpy.ops.object.select_all(action='DESELECT')
        for s in objs: s.select_set(True)
        bpy.context.view_layer.objects.active = objs[0]
        bpy.ops.object.join()
        objs[0].name = gname; objs[0].data.name = gname
        parts[gname] = objs[0]
    delete(screw_proto)

    # --- drain cover on exterior slot
    parts['drenaj_kapagi'] = drain_cover('drenaj_kapagi', U_OUT, 30.22)

    # --- separate slot walls into their own objects ("drenaj kanalı")
    for tgt, newname in (('kasa_profili', 'kasa_drenaj_kanallari'), ('kanat_profili', 'kanat_drenaj_kanallari')):
        ob = parts[tgt]
        bpy.ops.object.select_all(action='DESELECT')
        ob.select_set(True); bpy.context.view_layer.objects.active = ob
        slot_idx = [i for i, m in enumerate(ob.data.materials) if m and m.name.startswith('SLOT')]
        bpy.ops.object.mode_set(mode='EDIT')
        bpy.ops.mesh.select_all(action='DESELECT')
        for si in slot_idx:
            ob.active_material_index = si
            bpy.ops.object.material_slot_select()
        bpy.ops.mesh.separate(type='SELECTED')
        bpy.ops.object.mode_set(mode='OBJECT')
        new = [o for o in bpy.context.selected_objects if o != ob][0]
        new.name = newname; new.data.name = newname
        parts[newname] = new

    for name, ob in parts.items():
        shade(ob, 32 if not name.startswith('cam_') else 10)
    return parts

if __name__ == '__main__':
    parts = build()
    out = os.path.join(SRC, 'supremo85.blend')
    bpy.ops.wm.save_as_mainfile(filepath=out, compress=True)
    tot = 0
    for n, ob in sorted(parts.items()):
        me = ob.data
        me.calc_loop_triangles()
        nt = len(me.loop_triangles); tot += nt
        print(f'{n:28s} verts={len(me.vertices):7d} tris={nt:7d}')
    print('TOTAL tris', tot)
