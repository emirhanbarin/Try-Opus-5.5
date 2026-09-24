# -*- coding: utf-8 -*-
"""Quick Cycles preview renders of supremo85.blend (geometry check)."""
import bpy, math, os, sys
from mathutils import Vector

SRC = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = sys.argv[sys.argv.index('--out') + 1] if '--out' in sys.argv else os.path.join(SRC, 'renders')
os.makedirs(OUT, exist_ok=True)
bpy.ops.wm.open_mainfile(filepath=os.path.join(SRC, 'supremo85.blend'))
sc = bpy.context.scene

def mat(name, col, rough=0.5, metal=0.0, alpha=1.0, trans=0.0):
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
    'pvc': mat('pvc', (0.86, 0.86, 0.84), 0.38),
    'steel': mat('steel', (0.62, 0.64, 0.66), 0.35, 1.0),
    'epdm': mat('epdm', (0.02, 0.02, 0.02), 0.8),
    'glass': mat('glass', (0.9, 0.97, 0.95), 0.02, 0.0, 1, 1.0),
    'alu': mat('alu', (0.7, 0.72, 0.74), 0.4, 1.0),
    'des': mat('des', (0.75, 0.62, 0.38), 0.9),
    'seal': mat('seal', (0.05, 0.05, 0.05), 0.6),
    'bridge': mat('bridge', (0.12, 0.2, 0.32), 0.5),
    'screw': mat('screw', (0.8, 0.82, 0.85), 0.25, 1.0),
    'slot': mat('slot', (0.2, 0.55, 0.95), 0.4),
}
assign = {'kasa_profili': 'pvc', 'kanat_profili': 'pvc', 'cam_citasi': 'pvc', 'drenaj_kapagi': 'pvc',
          'kasa_drenaj_kanallari': 'slot', 'kanat_drenaj_kanallari': 'slot',
          'cam_citasi_contasi': 'epdm', 'kasa_dis_contasi': 'epdm', 'orta_conta': 'epdm', 'kanat_ic_contasi': 'epdm', 'kanat_dis_cam_contasi': 'epdm',
          'kasa_celik_takviye': 'steel', 'kanat_celik_takviye': 'steel', 'cam_1': 'glass', 'cam_2': 'glass', 'cam_3': 'glass',
          'isicam_citasi': 'alu', 'nem_alici': 'des', 'ikincil_sizdirmazlik': 'seal', 'cam_takoz_koprusu': 'bridge',
          'kasa_takviye_vidalari': 'screw', 'kanat_takviye_vidalari': 'screw'}
for ob in sc.objects:
    if ob.type == 'MESH':
        ob.data.materials.clear(); ob.data.materials.append(M[assign.get(ob.name, 'pvc')])

world = bpy.data.worlds.new('w'); sc.world = world; world.use_nodes = True
bg = world.node_tree.nodes['Background']; bg.inputs[0].default_value = (0.55, 0.57, 0.6, 1); bg.inputs[1].default_value = 0.8
sun = bpy.data.lights.new('sun', 'SUN'); sun.energy = 3.0; sun.angle = math.radians(8)
so = bpy.data.objects.new('sun', sun); sc.collection.objects.link(so); so.rotation_euler = (math.radians(50), math.radians(-20), math.radians(-35))

cam = bpy.data.cameras.new('cam'); cam.lens = 60
co = bpy.data.objects.new('cam', cam); sc.collection.objects.link(co); sc.camera = co
sc.render.engine = 'CYCLES'; sc.cycles.samples = int(os.environ.get('SAMPLES', 48)); sc.cycles.use_denoising = True
sc.cycles.device = 'CPU'
sc.render.resolution_x = int(os.environ.get('RX', 1400)); sc.render.resolution_y = int(os.environ.get('RY', 900))
sc.view_settings.view_transform = 'AgX'

def look(loc, target, lens=60, ortho=None):
    co.location = Vector(loc)
    d = Vector(target) - co.location
    co.rotation_euler = d.to_track_quat('-Z', 'Y').to_euler()
    if ortho:
        cam.type = 'ORTHO'; cam.ortho_scale = ortho
    else:
        cam.type = 'PERSP'; cam.lens = lens

views = {
    'v1_persp': ((-0.42, -0.36, 0.30), (-0.06, 0.0, 0.08), 50, None),
    'v2_end': ((-0.6, 0.0, 0.075), (0.0, 0.0, 0.075), 60, 0.2),
    'v3_ext': ((0.25, 0.42, 0.22), (0.02, 0.0, 0.06), 50, None),
    'v4_under': ((0.1, -0.35, -0.2), (0.0, 0.0, 0.04), 50, None),
    'v5_cover': ((0.07, 0.16, 0.07), (0.028, 0.052, 0.03), 60, None),
    'v6_rebate': ((0.06, -0.10, 0.26), (0.03, 0.0, 0.09), 45, None),
    'v7_sashB': ((-0.02, 0.10, -0.03), (-0.074, 0.027, 0.07), 45, None),
}
for n in os.environ.get('HIDE', '').split(','):
    if n and n in bpy.data.objects: bpy.data.objects[n].hide_render = True
sel = os.environ.get('VIEWS', ','.join(views)).split(',')
for k in sel:
    loc, tgt, lens, ortho = views[k]
    look(loc, tgt, lens, ortho)
    sc.render.filepath = os.path.join(OUT, k + '.png')
    bpy.ops.render.render(write_still=True)
    print('rendered', k)
