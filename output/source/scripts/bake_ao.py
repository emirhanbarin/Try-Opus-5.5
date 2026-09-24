# -*- coding: utf-8 -*-
"""UV atlas + ambient occlusion bake (Cycles) and glTF export.

AO atlas (2048^2), two bakes:
  - montaj AO  : all parts occlude each other (glass excluded: transparent)
  - parça AO   : only_local (self occlusion) -> stays correct in exploded view
Extruded parts are UV-projected with the profile axis compressed x0.25, giving
~4x finer texels across the section than along the 300 mm length.

Env: BLEND (default supremo85.blend), PREFIX (bake/<PREFIX>ao_*.exr), GLB_OUT (bake/<GLB_OUT>)
CORNER=1: 45° köşe numunesi (build_corner.py). Alt kol x, yan kol z ekseni boyunca; gönye düzleminde
(x = z) UV dikişi, her kol kendi ekseninde x0,25 sıkıştırılır; folyo yüz maskesi ikinci UV'ye (FOIL) yazılır.
"""
import bpy, bmesh, os, sys, math, time
from mathutils import Matrix

SRC = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
RES = int(os.environ.get('AO_RES', 2048))
SAMPLES = int(os.environ.get('AO_SAMPLES', 32))
AO_DIST = float(os.environ.get('AO_DIST', 0.015))
CORNER = os.environ.get('CORNER') == '1'
BLEND = os.environ.get('BLEND', 'supremo85.blend')
PREFIX = os.environ.get('PREFIX', '')
GLB_OUT = os.environ.get('GLB_OUT', 'supremo85_raw.glb')
bpy.ops.wm.open_mainfile(filepath=os.path.join(SRC, BLEND))
sc = bpy.context.scene
obs = [o for o in sc.objects if o.type == 'MESH']
GLASS = {'cam_1', 'cam_2', 'cam_3'}
NON_EXTRUDED = {'kasa_takviye_vidalari', 'kanat_takviye_vidalari', 'drenaj_kapagi',
                'kasa_vidasi_alt', 'kasa_vidasi_yan', 'kanat_vidasi_alt', 'kanat_vidasi_yan'}
targets = [o for o in obs if o.name not in GLASS]

# ---------------------------------------------------------------- UV atlas
t0 = time.time()
SQ = Matrix.Diagonal((0.25, 1, 1, 1)); UNSQ = Matrix.Diagonal((4.0, 1, 1, 1))
SMART = NON_EXTRUDED | {'kasa_drenaj_kanallari', 'kanat_drenaj_kanallari'}
L_HALF = 0.150
# 2D features (section mm) the longitudinal seam should avoid: slots + screw axes
FEAT = [(14.68, 43.52), (0.0, 30.22), (5.0, 30.22), (10.5, 30.22), (34.18, 93.51), (25.36, 73.11)] + \
       [(53.0, y) for y in range(7, 27, 2)] + [(72.39, y) for y in range(75, 95, 2)]

def sec2d(co, ax=0):  # blender coords (m) -> section mm (yan kolda kesit yüksekliği x'tir)
    return (52.25 - co.y * 1000.0, (co.x if ax == 2 else co.z) * 1000.0)

def mark_seams(o):
    bm = bmesh.new(); bm.from_mesh(o.data)
    bm.faces.ensure_lookup_table(); bm.edges.ensure_lookup_table()
    hole_idx = {i for i, m in enumerate(o.data.materials) if m and m.name.startswith('HOLE')}
    def cls(f):
        if f.material_index in hole_idx: return 2
        if CORNER:   # 0/1: alt kol yan/kapak, 10/11: yan kol yan/kapak (gönye düzlemi dikiş olur)
            c = f.calc_center_median()
            if c.x >= c.z: return 1 if abs(f.normal.x) > 0.35 else 0
            return 11 if abs(f.normal.z) > 0.35 else 10
        return 1 if abs(f.normal.x) > 0.35 else 0
    fc = {f.index: cls(f) for f in bm.faces}
    for e in bm.edges:
        lf = e.link_faces
        e.seam = (len(lf) != 2) or (fc[lf[0].index] != fc[lf[1].index])
    # connected components of side faces (class 0) through non-seam edges
    seen = set(); ncut = 0
    for f0 in bm.faces:
        if fc[f0.index] not in (0, 10) or f0.index in seen: continue
        c0 = fc[f0.index]; ax = 0 if c0 == 0 else 2
        comp = []; stack = [f0]; seen.add(f0.index)
        while stack:
            f = stack.pop(); comp.append(f)
            for e in f.edges:
                if e.seam: continue
                for g in e.link_faces:
                    if g.index not in seen and fc[g.index] == c0:
                        seen.add(g.index); stack.append(g)
        verts = {v for f in comp for v in f.verts}
        edges = {e for f in comp for e in f.edges}
        xmin = min(v.co[ax] for v in verts); xmax = max(v.co[ax] for v in verts)
        miter = [v for v in verts if abs(v.co.x - v.co.z) < 1e-7] if CORNER else []
        cand = miter or [v for v in verts if v.co[ax] < xmin + 1e-6]
        goal = {v for v in verts if v.co[ax] > xmax - 1e-6}
        def score(v):
            p = sec2d(v.co, ax)
            return min((p[0] - a) ** 2 + (p[1] - b) ** 2 for a, b in FEAT)
        start_v = max(cand, key=score)
        # Dijkstra along component edges, preferring X-aligned edges
        import heapq
        adj = {}
        for e in edges:
            a, b = e.verts
            d = (a.co - b.co); ln = d.length
            if ln <= 0: continue
            cost = ln * (1.0 + 20.0 * (1.0 - abs(d[ax]) / ln))
            adj.setdefault(a, []).append((b, e, cost)); adj.setdefault(b, []).append((a, e, cost))
        dist = {start_v: 0.0}; prev = {}; pq = [(0.0, id(start_v), start_v)]; hit = None
        while pq:
            dcur, _, v = heapq.heappop(pq)
            if dcur > dist.get(v, 1e18): continue
            if v in goal: hit = v; break
            for (w, e, c) in adj.get(v, []):
                nd = dcur + c
                if nd < dist.get(w, 1e18):
                    dist[w] = nd; prev[w] = (v, e); heapq.heappush(pq, (nd, id(w), w))
        v = hit
        while v is not None and v in prev:
            u, e = prev[v]; e.seam = True; ncut += 1; v = u
    bm.to_mesh(o.data); bm.free()
    return ncut

def squash(me, k):
    """Köşe: alt kolda (x >= z) x, yan kolda z ekseni gönyeden itibaren k ile ölçeklenir (x = z sabit)."""
    import numpy as np
    co = np.empty(len(me.vertices) * 3); me.vertices.foreach_get('co', co); co = co.reshape(-1, 3)
    x, z = co[:, 0].copy(), co[:, 2].copy(); s = x >= z
    co[s, 0] = z[s] + k * (x[s] - z[s]); co[~s, 2] = x[~s] + k * (z[~s] - x[~s])
    me.vertices.foreach_set('co', co.ravel()); me.update()

for o in targets:
    me = o.data
    while me.uv_layers: me.uv_layers.remove(me.uv_layers[0])
    me.uv_layers.new(name='AO')
    if o.name not in SMART:
        mark_seams(o)
    if o.name not in NON_EXTRUDED:
        squash(me, 0.25) if CORNER else me.transform(SQ)

def edit_select(objs):
    bpy.ops.object.mode_set(mode='OBJECT') if bpy.context.object and bpy.context.object.mode != 'OBJECT' else None
    bpy.ops.object.select_all(action='DESELECT')
    for o in objs: o.select_set(True)
    bpy.context.view_layer.objects.active = objs[0]
    bpy.ops.object.mode_set(mode='EDIT')
    bpy.ops.mesh.select_all(action='SELECT')

ext = [o for o in targets if o.name not in SMART]
edit_select(ext)
bpy.ops.uv.unwrap(method='ANGLE_BASED', fill_holes=True, correct_aspect=True, margin=0.0)
bpy.ops.object.mode_set(mode='OBJECT')
edit_select([o for o in targets if o.name in SMART])
bpy.ops.uv.smart_project(angle_limit=math.radians(60), island_margin=0.0, area_weight=0.0, correct_aspect=True, scale_to_bounds=False)
bpy.ops.object.mode_set(mode='OBJECT')
edit_select(targets)
bpy.ops.uv.select_all(action='SELECT')
bpy.ops.uv.average_islands_scale()
bpy.ops.uv.pack_islands(udim_source='CLOSEST_UDIM', rotate=True, rotate_method='ANY', scale=True,
                        merge_overlap=False, margin_method='FRACTION', margin=3.0 / RES, shape_method='CONCAVE')
bpy.ops.object.mode_set(mode='OBJECT')
for o in targets:
    if o.name not in NON_EXTRUDED:
        squash(o.data, 4.0) if CORNER else o.data.transform(UNSQ)
print('uv done %.1fs' % (time.time() - t0))

# UV utilisation
import numpy as np
cov = 0.0
for o in targets:
    uv = o.data.uv_layers['AO'].data
    for p in o.data.polygons:
        pts = [uv[i].uv for i in p.loop_indices]
        a = 0.0
        for k in range(1, len(pts) - 1):
            a += abs((pts[k].x - pts[0].x) * (pts[k + 1].y - pts[0].y) - (pts[k + 1].x - pts[0].x) * (pts[k].y - pts[0].y)) / 2
        cov += a
print('uv coverage %.1f%%' % (cov * 100))

# ---------------------------------------------------------------- bake setup
sc.render.engine = 'CYCLES'
sc.cycles.device = 'CPU'
sc.cycles.samples = SAMPLES
sc.cycles.use_denoising = False
sc.render.bake.margin = 6
sc.render.bake.margin_type = 'EXTEND'
sc.render.bake.use_clear = True
world = bpy.data.worlds.new('w'); sc.world = world; world.use_nodes = True
world.node_tree.nodes['Background'].inputs[1].default_value = 0.0

imgs = {}
for key in ('assembly', 'self'):
    im = bpy.data.images.new('AO_' + key, RES, RES, alpha=False, float_buffer=True)
    im.generated_color = (1, 1, 1, 1)
    imgs[key] = im

def setup_material(o, local):
    m = bpy.data.materials.new('bake_' + o.name); m.use_nodes = True
    nt = m.node_tree; nt.nodes.clear()
    out = nt.nodes.new('ShaderNodeOutputMaterial')
    em = nt.nodes.new('ShaderNodeEmission')
    ao = nt.nodes.new('ShaderNodeAmbientOcclusion')
    ao.samples = int(os.environ.get('AO_NODE_SAMPLES', 16)); ao.only_local = local; ao.inside = False
    ao.inputs['Distance'].default_value = AO_DIST
    ao.inputs['Color'].default_value = (1, 1, 1, 1)
    nt.links.new(ao.outputs['Color'], em.inputs['Color'])
    nt.links.new(em.outputs['Emission'], out.inputs['Surface'])
    tex = nt.nodes.new('ShaderNodeTexImage')
    nt.nodes.active = tex
    o.data.materials.clear(); o.data.materials.append(m)
    return m, ao, tex

mats = {o.name: setup_material(o, False) for o in targets}
for o in obs:
    o.hide_render = o.name in GLASS   # glass transmits light: no occlusion

def bake(key, local):
    for n, (m, ao, tex) in mats.items():
        ao.only_local = local
        tex.image = imgs[key]
    bpy.ops.object.select_all(action='DESELECT')
    for o in targets: o.select_set(True)
    bpy.context.view_layer.objects.active = targets[0]
    t = time.time()
    bpy.ops.object.bake(type='EMIT', margin=6, use_clear=True)
    print('baked', key, '%.1fs' % (time.time() - t))
    im = imgs[key]
    im.filepath_raw = os.path.join(SRC, 'bake', '%sao_%s.exr' % (PREFIX, key))
    im.file_format = 'OPEN_EXR'
    im.save()

os.makedirs(os.path.join(SRC, 'bake'), exist_ok=True)
bake('assembly', False)
bake('self', True)

# restore: remove bake materials, keep UVs
for o in obs:
    o.hide_render = False
    o.data.materials.clear()
bpy.ops.wm.save_as_mainfile(filepath=os.path.join(SRC, BLEND), compress=True)

# folyo maskesi (köşe): yüz özniteliği 'foil' -> ikinci UV (u = 1 folyo, 0 çekirdek)
if CORNER:
    for o in obs:
        me = o.data; att = me.attributes.get('foil')
        if att is None or att.domain != 'FACE': continue
        vals = [0] * len(me.polygons); att.data.foreach_get('value', vals)
        if not any(vals): continue
        uvl = me.uv_layers.new(name='FOIL')
        for p in me.polygons:
            f = float(vals[p.index])
            for li in p.loop_indices: uvl.data[li].uv = (f, 0.0)
        print('foil uv', o.name, sum(vals), '/', len(vals))

# ---------------------------------------------------------------- glTF export (geometry + AO UVs)
bpy.ops.object.select_all(action='DESELECT')
bpy.ops.export_scene.gltf(filepath=os.path.join(SRC, 'bake', GLB_OUT), export_format='GLB',
                          export_apply=True, export_texcoords=True, export_normals=True, export_materials='NONE',
                          export_yup=True, export_extras=False, export_cameras=False, export_lights=False)
print('exported')
