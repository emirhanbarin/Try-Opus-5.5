# -*- coding: utf-8 -*-
"""Köşe numunesi için hızlı Cycles önizlemeleri (geometri denetimi).
kullanım: python3 preview_corner.py --out <klasör>   (VIEWS=v1,v2 ... HIDE=cam_1,cam_2 ...)"""
import bpy, math, os, sys
from mathutils import Vector

SRC = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = sys.argv[sys.argv.index('--out') + 1] if '--out' in sys.argv else os.path.join(SRC, 'renders')
os.makedirs(OUT, exist_ok=True)
bpy.ops.wm.open_mainfile(filepath=os.path.join(SRC, os.environ.get('BLEND', 'supremo85_kose.blend')))
sc = bpy.context.scene


def mat(name, col, rough=0.5, metal=0.0, trans=0.0):
    m = bpy.data.materials.new(name); m.use_nodes = True
    b = m.node_tree.nodes['Principled BSDF']
    b.inputs['Base Color'].default_value = (*col, 1)
    b.inputs['Roughness'].default_value = rough
    b.inputs['Metallic'].default_value = metal
    if trans > 0:
        b.inputs['Transmission Weight'].default_value = trans
        b.inputs['IOR'].default_value = 1.52
    return m


M = {
    'pvc': mat('pvc', (0.86, 0.86, 0.84), 0.38), 'steel': mat('steel', (0.62, 0.64, 0.66), 0.35, 1.0),
    'epdm': mat('epdm', (0.02, 0.02, 0.02), 0.8), 'glass': mat('glass', (0.9, 0.97, 0.95), 0.02, 0.0, 1.0),
    'alu': mat('alu', (0.7, 0.72, 0.74), 0.4, 1.0), 'des': mat('des', (0.75, 0.62, 0.38), 0.9),
    'seal': mat('seal', (0.05, 0.05, 0.05), 0.6), 'bridge': mat('bridge', (0.12, 0.2, 0.32), 0.5),
    'screw': mat('screw', (0.8, 0.82, 0.85), 0.25, 1.0), 'slot': mat('slot', (0.2, 0.55, 0.95), 0.4),
}
rules = [('drenaj_kanallari', 'slot'), ('conta', 'epdm'), ('celik', 'steel'), ('cam_', 'glass'), ('isicam', 'alu'),
         ('nem', 'des'), ('sizdirmazlik', 'seal'), ('takoz', 'bridge'), ('vida', 'screw')]
for ob in sc.objects:
    if ob.type == 'MESH':
        key = next((m for k, m in rules if k in ob.name), 'pvc')
        ob.data.materials.clear(); ob.data.materials.append(M[key])

world = bpy.data.worlds.new('w'); sc.world = world; world.use_nodes = True
bg = world.node_tree.nodes['Background']; bg.inputs[0].default_value = (0.55, 0.57, 0.6, 1); bg.inputs[1].default_value = 0.8
sun = bpy.data.lights.new('sun', 'SUN'); sun.energy = 3.0; sun.angle = math.radians(8)
so = bpy.data.objects.new('sun', sun); sc.collection.objects.link(so)
so.rotation_euler = (math.radians(50), math.radians(-20), math.radians(-35))
cam = bpy.data.cameras.new('cam')
co = bpy.data.objects.new('cam', cam); sc.collection.objects.link(co); sc.camera = co
sc.render.engine = 'CYCLES'; sc.cycles.samples = int(os.environ.get('SAMPLES', 32)); sc.cycles.use_denoising = True
sc.cycles.device = 'CPU'
sc.render.resolution_x = int(os.environ.get('RX', 1100)); sc.render.resolution_y = int(os.environ.get('RY', 760))
sc.view_settings.view_transform = 'AgX'

# Blender: x = X (alt kol), y = 52,25 - sx (dış +y), z = Y (yan kol)
views = {
    'k1_ic_34': ((0.62, -0.52, 0.42), (0.16, 0.0, 0.13), 45),
    'k2_dis_34': ((0.55, 0.62, 0.30), (0.15, 0.0, 0.10), 45),
    'k3_uc_kesit': ((0.80, -0.10, 0.10), (0.30, 0.0, 0.07), 70),
    'k4_gonye': ((0.20, -0.30, 0.20), (0.06, 0.0, 0.06), 55),
    'k5_drenaj_dis': ((0.25, 0.30, 0.06), (0.15, 0.05, 0.035), 55),
    'k6_ust_lamba': ((0.20, 0.05, 0.40), (0.18, 0.0, 0.07), 50),
    'k7_ust_orto': ((0.165, 0.0, 0.60), (0.165, 0.0, 0.0), 'O0.23'),
}
for n in os.environ.get('HIDE', '').split(','):
    if n and n in bpy.data.objects: bpy.data.objects[n].hide_render = True
only = [n for n in os.environ.get('ONLY', '').split(',') if n]
if only:
    for ob in sc.objects:
        if ob.type == 'MESH': ob.hide_render = ob.name not in only
tag = os.environ.get('TAG', '')
for k in os.environ.get('VIEWS', ','.join(views)).split(','):
    loc, tgt, lens = views[k]
    co.location = Vector(loc)
    co.rotation_euler = (Vector(tgt) - co.location).to_track_quat('-Z', 'Y').to_euler()
    if isinstance(lens, str):
        cam.type = 'ORTHO'; cam.ortho_scale = float(lens[1:])
    else:
        cam.type = 'PERSP'; cam.lens = lens
    sc.render.filepath = os.path.join(OUT, k + tag + '.png')
    bpy.ops.render.render(write_still=True)
    print('rendered', k)
