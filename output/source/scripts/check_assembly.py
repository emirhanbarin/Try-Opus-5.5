# -*- coding: utf-8 -*-
"""3D assembly check: interference volume and clearance between all part pairs.
Env: BLEND (default supremo85.blend), OUT (default assembly_check.json)"""
import bpy, bmesh, os, sys, json, itertools
from mathutils.bvhtree import BVHTree
from mathutils import Vector

SRC = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
bpy.ops.wm.open_mainfile(filepath=os.path.join(SRC, os.environ.get('BLEND', 'supremo85.blend')))
obs = [o for o in bpy.context.scene.objects if o.type == 'MESH']
MM = 1000.0

def bm_of(o):
    bm = bmesh.new(); bm.from_mesh(o.data); bm.transform(o.matrix_world)
    bmesh.ops.triangulate(bm, faces=bm.faces[:])
    return bm

data = {o.name: bm_of(o) for o in obs}
bvh = {n: BVHTree.FromBMesh(b) for n, b in data.items()}
bbox = {}
for n, b in data.items():
    xs = [v.co for v in b.verts]
    bbox[n] = (Vector((min(v.x for v in xs), min(v.y for v in xs), min(v.z for v in xs))),
               Vector((max(v.x for v in xs), max(v.y for v in xs), max(v.z for v in xs))))

def bbox_gap(a, b):
    (a0, a1), (b0, b1) = bbox[a], bbox[b]
    g = 0.0
    for i in range(3):
        g = max(g, b0[i] - a1[i], a0[i] - b1[i])
    return g

def min_dist(a, b, cap=0.002):
    best = 1e9
    for src, dst in ((a, b), (b, a)):
        t = bvh[dst]
        for v in data[src].verts:
            hit = t.find_nearest(v.co, cap)
            if hit[0] is not None and hit[3] < best:
                best = hit[3]
    return best

def closed(bm):
    return all(e.is_manifold for e in bm.edges)

def inter_volume(a, b):
    """Exact boolean intersection volume (mm3) of two closed meshes."""
    oa = bpy.data.objects[a]; ob_ = bpy.data.objects[b]
    tmp = oa.copy(); tmp.data = oa.data.copy(); bpy.context.scene.collection.objects.link(tmp)
    m = tmp.modifiers.new('i', 'BOOLEAN'); m.operation = 'INTERSECT'; m.solver = 'EXACT'; m.object = ob_
    bpy.context.view_layer.objects.active = tmp
    bpy.ops.object.modifier_apply(modifier=m.name)
    bm = bmesh.new(); bm.from_mesh(tmp.data); bm.transform(tmp.matrix_world)
    vol = abs(bm.calc_volume(signed=False)) * 1e9
    bm.free(); bpy.data.objects.remove(tmp, do_unlink=True)
    return vol

report = []
for a, b in itertools.combinations(sorted(data), 2):
    if bbox_gap(a, b) > 0.001:
        continue
    pairs = bvh[a].overlap(bvh[b])
    d = min_dist(a, b)
    vol = None
    if pairs and closed(data[a]) and closed(data[b]):
        vol = inter_volume(a, b)
    report.append(dict(a=a, b=b, tri_overlaps=len(pairs), min_dist_mm=round(d * MM, 4) if d < 1e8 else None,
                       inter_volume_mm3=None if vol is None else round(vol, 4)))
for r in report:
    print('{a:26s} {b:26s} tri_ov={tri_overlaps:5d} dist={min_dist_mm} vol={inter_volume_mm3}'.format(**r))
json.dump(report, open(os.path.join(SRC, os.environ.get('OUT', 'assembly_check.json')), 'w'), indent=1)
print('closed meshes:', {n: closed(b) for n, b in data.items()})
