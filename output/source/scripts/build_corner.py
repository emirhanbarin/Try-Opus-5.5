# -*- coding: utf-8 -*-
"""
Supremo 85 - 45° kaynaklı köşe numunesi (L): 3B montaj üretimi (Blender / bpy)

Girdi : section_mm.json  (PDF s.9 vektörlerinden çıkarılmış kesitler, mm)
Çıktı : supremo85_kose.blend

Köşe koordinatları (three.js, mm): dış köşe (0, 0); alt kol (denizlik tarafı) +X, yan kol +Y,
Z = sx - 52,25 (iç taraf +Z).
  alt kol : X = u,  Y = sy          yan kol : X = sy, Y = u          gönye düzlemi: X = Y
Blender (Z yukarı): x = X, y = 52,25 - sx, z = Y.

Gönye boolean kullanmadan kurulur: her kesit noktası için kol u = sy'den başlar; iki kol aynı
köşe noktalarını paylaşır, gönye kapağı oluşmaz (kaynaklı profil tek kapalı katı).

Dökümandan alınan ölçüler
  s.6   profiller 45° kesilir (kasa, kanat); s.7 cam çıtası 45°
  s.8   drenaj yarığı 32 × Ø4, iç köşeden 10 mm, 32 mm yarık, 70 mm ara, 32 mm yarık;
        kasa eğik yarığı düşeyle 50° (s.8 kesitleri)
  s.11  kanat eğik yarığı düşeyle 60°; kanat vidası iç köşeden 120 mm; takviye boyu A - 160
  s.10  kasa vidası uçtan 150 mm, 300-400 mm arayla; kasa takviyesi A - 153
Varsayımlar: kol boyu 300 mm (dış köşeden), takoz köprüsü 70 mm ve konumu, contaların gönyeli
birleşimi, iç köşe referansı = dış görünüş çizgisi (kasa sy 74, kanat sy 102).
"""
import bpy, bmesh, json, math, os, sys
import numpy as np
from mathutils import Vector, Matrix
import shapely
from shapely.geometry import Polygon
from shapely.ops import unary_union

HERE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.dirname(HERE)
sys.path.insert(0, HERE)
import build_model as bmod   # yardımcılar: screw_mesh, drain_cover, stadium_prism, add_bevel, boolean, ...
from build_model import (MM, DC, poly_of, new_object, add_bevel, apply_mods, boolean, delete, shade,
                         stadium_prism, screw_mesh, screw_envelope, place_local, drain_cover, SEC)

LEG = 300.0                 # kol boyu, dış köşeden [mm] (varsayım)
UOFF = bmod.L / 2           # build_model yardımcıları u'yu numune ortasına göre alır: X = u - 150
GLASS_EDGE = 97.807         # cam alt kenarı (sy), s.9
REF_FRAME = 74.0            # kasa iç köşe referansı (dış görünüş çizgisi, sy)
REF_SASH = 102.0            # kanat iç köşe referansı (cam dudağı üstü, sy)
ROT_JAMB = Matrix.Rotation(math.radians(90), 4, 'Y')   # alt kol çerçevesi -> yan kol (x' = z, z' = -x)


def V_sill(X, sx, sy):
    return Vector((X * MM, (DC - sx) * MM, sy * MM))


def V_jamb(Y, sx, sy):
    return Vector((sy * MM, (DC - sx) * MM, Y * MM))


def rings_of(poly):
    return [np.array(poly.exterior.coords)[:-1]] + [np.array(h.coords)[:-1] for h in poly.interiors]


def miter_L(poly, bm=None, foil=False, bevel_caps=True, leg=LEG):
    """Gönyeli L ekstrüzyon: alt kol X = sy..leg, yan kol Y = sy..leg; serbest uçlarda kapak."""
    bm = bm or bmesh.new()
    bw = bm.edges.layers.float.get('bevel_weight_edge') or bm.edges.layers.float.new('bevel_weight_edge')
    fl = bm.faces.layers.int.get('foil') or bm.faces.layers.int.new('foil')
    poly = shapely.geometry.polygon.orient(poly, 1.0)
    lutS, lutJ, capS, capJ = {}, {}, [], []
    for ri, r in enumerate(rings_of(poly)):
        n = len(r)
        M = [bm.verts.new(V_sill(y, x, y)) for x, y in r]          # gönye düzlemindeki ortak nokta
        S = [bm.verts.new(V_sill(leg, x, y)) for x, y in r]
        J = [bm.verts.new(V_jamb(leg, x, y)) for x, y in r]
        for i in range(n):
            j = (i + 1) % n
            f1 = bm.faces.new((M[i], M[j], S[j], S[i]))
            f2 = bm.faces.new((M[j], M[i], J[i], J[j]))
            if foil and ri == 0:
                f1[fl] = 1; f2[fl] = 1
        for k, (x, y) in enumerate(r):
            key = (round(x, 4), round(y, 4))
            lutS[key] = S[k]; lutJ[key] = J[k]
        capS.append(S); capJ.append(J)
    tris = shapely.constrained_delaunay_triangles(poly)
    inside = poly.buffer(1e-6)
    for t in tris.geoms:
        if not inside.contains(t.representative_point()):
            continue
        c = [(round(x, 4), round(y, 4)) for x, y in list(t.exterior.coords)[:3]]
        try:
            a = [lutS[k] for k in c]; b = [lutJ[k] for k in c]
        except KeyError:
            continue
        for tri in (a, b):
            try: bm.faces.new(tri)
            except ValueError: pass
    bm.normal_update()
    bmesh.ops.recalc_face_normals(bm, faces=bm.faces[:])
    if bevel_caps:
        for ring in capS + capJ:
            n = len(ring)
            for i in range(n):
                e = bm.edges.get((ring[i], ring[(i + 1) % n]))
                if e: e[bw] = 1.0
    return bm


def prism(poly, axis, a0, a1, bm=None, bevel_caps=True):
    """Düz (gönyesiz) ekstrüzyon: axis 'x' (alt kol, X = a) veya 'y' (yan kol, Y = a)."""
    bm = bm or bmesh.new()
    bw = bm.edges.layers.float.get('bevel_weight_edge') or bm.edges.layers.float.new('bevel_weight_edge')
    bm.faces.layers.int.get('foil') or bm.faces.layers.int.new('foil')
    V = V_sill if axis == 'x' else V_jamb
    poly = shapely.geometry.polygon.orient(poly, 1.0)
    lut, caps = {}, []
    for r in rings_of(poly):
        v0 = [bm.verts.new(V(a0, x, y)) for x, y in r]
        v1 = [bm.verts.new(V(a1, x, y)) for x, y in r]
        n = len(r)
        for i in range(n):
            j = (i + 1) % n
            bm.faces.new((v0[i], v0[j], v1[j], v1[i]))
        for k, (x, y) in enumerate(r):
            lut[(round(x, 4), round(y, 4))] = (v0[k], v1[k])
        caps += [v0, v1]
    inside = poly.buffer(1e-6)
    for t in shapely.constrained_delaunay_triangles(poly).geoms:
        if not inside.contains(t.representative_point()):
            continue
        c = [(round(x, 4), round(y, 4)) for x, y in list(t.exterior.coords)[:3]]
        try:
            a = [lut[k] for k in c]
        except KeyError:
            continue
        for tri in ((a[0][0], a[1][0], a[2][0]), (a[2][1], a[1][1], a[0][1])):
            try: bm.faces.new(tri)
            except ValueError: pass
    bm.normal_update()
    bmesh.ops.recalc_face_normals(bm, faces=bm.faces[:])
    if bevel_caps:
        for ring in caps:
            n = len(ring)
            for i in range(n):
                e = bm.edges.get((ring[i], ring[(i + 1) % n]))
                if e: e[bw] = 1.0
    return bm


def glass_plate(name, sx0, sx1, r=0.3):
    """Cam paneli: köşe bölgesinde kare plaka X, Y ∈ [cam kenarı, kol ucu], kalınlık sx0..sx1."""
    bm = bmesh.new()
    x0, x1 = GLASS_EDGE * MM, LEG * MM
    y0, y1 = (DC - sx1) * MM, (DC - sx0) * MM
    bmesh.ops.create_cube(bm, size=1.0)
    for v in bm.verts:
        v.co = Vector((x0 if v.co.x < 0 else x1, y0 if v.co.y < 0 else y1, x0 if v.co.z < 0 else x1))
    bm.faces.layers.int.new('foil')
    ob = new_object(name, bm)
    m = ob.modifiers.new('Bevel', 'BEVEL'); m.width = r * MM; m.segments = 2; m.limit_method = 'NONE'
    apply_mods(ob)
    return ob


def to_jamb(ob):
    """Alt kol çerçevesinde kurulmuş objeyi yan kola taşı (Y ekseni etrafında 90°, yansıma yok)."""
    ob.matrix_world = ROT_JAMB @ ob.matrix_world


# ================================================================= BUILD
def build():
    bmod.clear_scene()
    bpy.context.scene.unit_settings.system = 'METRIC'
    parts = {}

    def L_part(name, key_or_poly, bevel=0.15, seg=2, foil=False):
        poly = poly_of(key_or_poly) if isinstance(key_or_poly, str) else key_or_poly
        ob = new_object(name, miter_L(poly, foil=foil, bevel_caps=bevel > 0))
        if bevel > 0: add_bevel(ob, bevel, seg)
        parts[name] = ob
        return ob

    # --- kaynaklı profiller ve çıta (dış kontur yan yüzleri = folyo yüzeyi)
    L_part('kasa_profili', 'frame', foil=True)
    L_part('kanat_profili', 'sash', foil=True)
    L_part('cam_citasi', 'bead', foil=True)
    lips = unary_union([poly_of('bead_lip_top'), poly_of('bead_lip_bot')])
    bm = bmesh.new()
    for g in lips.geoms: miter_L(g, bm)
    parts['cam_citasi_contasi'] = new_object('cam_citasi_contasi', bm); add_bevel(parts['cam_citasi_contasi'], 0.08, 1)
    # --- contalar
    L_part('kasa_dis_contasi', 'gasket_frame_ext', bevel=0.08, seg=1)
    L_part('orta_conta', 'gasket_middle', bevel=0.08, seg=1)
    L_part('kanat_ic_contasi', 'gasket_interior', bevel=0.08, seg=1)
    L_part('kanat_dis_cam_contasi', 'gasket_glazing_ext', bevel=0.08, seg=1)
    # --- çelik takviyeler: kaynak bölgesine girmez (kasa A-153 -> uçtan 76,5; kanat A-160 -> uçtan 80)
    frame_out = min(p[1] for p in SEC['frame']['exterior'])      # kasa dış kenarı (sy ≈ 0)
    sash_out = min(p[1] for p in SEC['sash']['exterior'])        # kanat dış kenarı (sy ≈ 40)
    st = {'kasa': (poly_of('steel_frame'), frame_out + 153 / 2), 'kanat': (poly_of('steel_sash'), sash_out + 160 / 2)}
    for k, (poly, a0) in st.items():
        for leg, axis in (('alt', 'x'), ('yan', 'y')):
            name = f'{k}_celik_takviye_{leg}'
            ob = new_object(name, prism(poly, axis, a0, LEG)); add_bevel(ob, 0.12, 1); parts[name] = ob
    # --- takoz köprüsü (alt kolda, 70 mm; konum/boy varsayım)
    ob = new_object('cam_takoz_koprusu', prism(poly_of('bridge'), 'x', 110.0, 180.0)); add_bevel(ob, 0.2, 2)
    parts['cam_takoz_koprusu'] = ob
    # --- ısıcam
    for i in (1, 2, 3):
        xs = [p[0] for p in SEC['glass%d' % i]['exterior']]
        parts['cam_%d' % i] = glass_plate('cam_%d' % i, min(xs), max(xs))
    bm = bmesh.new()
    for k in ('spacer1', 'spacer2'): miter_L(poly_of(k), bm)
    parts['isicam_citasi'] = new_object('isicam_citasi', bm); add_bevel(parts['isicam_citasi'], 0.06, 1)
    bm = bmesh.new()
    for k in ('spacer1', 'spacer2'):
        miter_L(Polygon(poly_of(k).interiors[0].coords), bm, bevel_caps=False)
    parts['nem_alici'] = new_object('nem_alici', bm)
    bm = bmesh.new()
    for k in ('sealant1', 'sealant2'): miter_L(poly_of(k), bm, bevel_caps=False)
    parts['ikincil_sizdirmazlik'] = new_object('ikincil_sizdirmazlik', bm)

    for ob in list(parts.values()):
        apply_mods(ob)

    # --- drenaj yarıkları (alt kol). Konumlar iç köşeden: 10 | 32 | 70 | 32 (s.8, s.11)
    #     dış/alt yarık köşeye yakın, lamba yarığı 70 mm ötede (s.8 görünüş: görünen yarık köşede)
    SLOT_L, SLOT_W = 32.0, 4.0
    xc = lambda ref, k: ref + 10.0 + SLOT_L / 2 + k * (SLOT_L + 70.0)
    X_DE, X_C = xc(REF_FRAME, 0), xc(REF_FRAME, 1)     # 100, 202
    X_B, X_A = xc(REF_SASH, 0), xc(REF_SASH, 1)        # 128, 230
    ax = lambda deg: (math.cos(math.radians(deg)), math.sin(math.radians(deg)))
    wd = lambda deg: (math.sin(math.radians(deg)), -math.cos(math.radians(deg)))
    cutters = {
        'kasa_profili': [
            # C: kasa lambası -> dış alt kamara, düşeyle 50° (yatayla 40°)
            stadium_prism('cut_C', (14.68, 43.52), ax(40), wd(40), X_C + UOFF, SLOT_L, SLOT_W, -3.0, 3.0),
            # D+E: dış yüzden dış duvar ve iç perdeden yatay
            stadium_prism('cut_DE', (0.0, 30.22), (1, 0), (0, 1), X_DE + UOFF, SLOT_L, SLOT_W, -2.0, 11.9),
        ],
        'kanat_profili': [
            # A: cam yuvası -> kanat dış kamarası, düşeyle 60° (yatayla 30°)
            stadium_prism('cut_A', (34.18, 93.51), ax(30), wd(30), X_A + UOFF, SLOT_L, SLOT_W, -3.0, 3.0),
            # B: kanat dış kamarasının alt duvarından düşey
            stadium_prism('cut_B', (25.36, 73.11), (0, 1), (1, 0), X_B + UOFF, SLOT_L, SLOT_W, -3.0, 2.2),
        ],
    }
    slot_mat = bpy.data.materials.new('SLOT')
    for tgt, cl in cutters.items():
        ob = parts[tgt]
        ob.data.materials.append(bpy.data.materials.new('M_' + tgt))
        for c in cl:
            c.data.materials.append(slot_mat)
            boolean(ob, c)
            delete(c)

    # --- vidalar (3,9 × 19 YHB). Kasa: dış uçtan 150 mm (s.10); kanat: iç köşeden 120 mm (s.11)
    hole_mat = bpy.data.materials.get('HOLE') or bpy.data.materials.new('HOLE')
    proto = screw_mesh('vida_proto')
    X_SF, X_SS = 150.0, REF_SASH + 120.0
    placements = [
        ('kasa_vidasi_alt', X_SF, 53.0, 7.015, 'up', False, ['kasa_profili', 'kasa_celik_takviye_alt']),
        ('kasa_vidasi_yan', X_SF, 53.0, 7.015, 'up', True, ['kasa_profili', 'kasa_celik_takviye_yan']),
        ('kanat_vidasi_alt', X_SS, 72.39, 94.007, 'down', False, ['kanat_profili', 'kanat_celik_takviye_alt']),
        ('kanat_vidasi_yan', X_SS, 72.39, 94.007, 'down', True, ['kanat_profili', 'kanat_celik_takviye_yan']),
    ]
    for name, pos, sx, sy, d, jamb, targets in placements:
        u = (-pos if jamb else pos) + UOFF
        s = proto.copy(); s.data = proto.data.copy(); bpy.context.scene.collection.objects.link(s)
        place_local(s, u, sx, sy, d)
        env = screw_envelope('env'); place_local(env, u, sx, sy, d)
        if jamb:
            to_jamb(s); to_jamb(env)
        env.data.materials.append(hole_mat)
        for t in targets:
            boolean(parts[t], env)
        delete(env)
        bpy.context.view_layer.objects.active = s
        bpy.ops.object.select_all(action='DESELECT'); s.select_set(True)
        bpy.ops.object.transform_apply(location=True, rotation=True, scale=True)
        s.name = name; s.data.name = name
        parts[name] = s
    delete(proto)

    # --- rüzgarlık (dış yarık D-E üzerinde)
    parts['drenaj_kapagi'] = drain_cover('drenaj_kapagi', X_DE + UOFF, 30.22)

    # --- yarık duvarlarını ayrı objeye al ("drenaj kanalı")
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
    info = dict(X_DE=X_DE, X_C=X_C, X_B=X_B, X_A=X_A, X_screw_frame=X_SF, X_screw_sash=X_SS,
                steel_frame_start=st['kasa'][1], steel_sash_start=st['kanat'][1], leg=LEG)
    return parts, info


def miter_gap_check(parts):
    """Gönye düzlemindeki köşe noktaları iki kolda birebir aynı mı (en büyük sapma, mm)."""
    worst = 0.0
    for name in ('kasa_profili', 'kanat_profili', 'cam_citasi'):
        me = parts[name].data
        co = np.empty(len(me.vertices) * 3); me.vertices.foreach_get('co', co); co = co.reshape(-1, 3)
        on = np.abs(co[:, 0] - co[:, 2]) < 1e-7
        worst = max(worst, float(np.max(np.abs(co[on, 0] - co[on, 2])) * 1000) if on.any() else 0.0)
    return worst


if __name__ == '__main__':
    parts, info = build()
    out = os.path.join(SRC, 'supremo85_kose.blend')
    bpy.ops.wm.save_as_mainfile(filepath=out, compress=True)
    tot = 0
    for n, ob in sorted(parts.items()):
        me = ob.data; me.calc_loop_triangles()
        nt = len(me.loop_triangles); tot += nt
        b = bmesh.new(); b.from_mesh(me)
        closed = all(e.is_manifold for e in b.edges); b.free()
        print(f'{n:28s} verts={len(me.vertices):7d} tris={nt:7d} closed={closed}')
    print('TOTAL tris', tot)
    print('INFO', json.dumps(info))
    json.dump(info, open(os.path.join(SRC, 'kose_info.json'), 'w'), indent=1)
