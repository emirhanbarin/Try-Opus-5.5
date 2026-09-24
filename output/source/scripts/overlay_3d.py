# -*- coding: utf-8 -*-
"""3B modelin uç kesitini (ortografik, 12 px/mm) PDF s.9 çizimiyle aynı ölçekte bindirir.
Çıktı: reference/kesit_3d_bindirme.png  (renkli dolgular = 3B model, çizgiler = PDF vektörleri)"""
import bpy, os, math, sys
import numpy as np
from mathutils import Vector

SRC = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PDF = os.path.join(SRC, 'reference', 'Supremo85_teknik_dokuman.pdf')
PX_PER_MM = 12.0
SX0, SX1, SY0, SY1 = -10.0, 115.0, -10.0, 140.0   # kesit penceresi (mm)
W, H = int((SX1 - SX0) * PX_PER_MM), int((SY1 - SY0) * PX_PER_MM)

bpy.ops.wm.open_mainfile(filepath=os.path.join(SRC, 'supremo85.blend'))
sc = bpy.context.scene
COL = {'pvc': (0.35, 0.62, 1.0), 'sash': (0.2, 0.85, 0.45), 'bead': (1.0, 0.6, 0.1), 'epdm': (0.95, 0.2, 0.75), 'steel': (0.55, 0.55, 0.6),
       'glass': (0.3, 0.85, 1.0), 'alu': (0.6, 0.6, 0.6), 'des': (0.95, 0.85, 0.5), 'seal': (0.25, 0.25, 0.25), 'bridge': (1.0, 0.9, 0.0),
       'screw': (0.9, 0.3, 0.2)}
assign = {'kasa_profili': 'pvc', 'kanat_profili': 'sash', 'cam_citasi': 'bead', 'cam_citasi_contasi': 'epdm', 'kasa_dis_contasi': 'epdm',
          'orta_conta': 'epdm', 'kanat_ic_contasi': 'epdm', 'kanat_dis_cam_contasi': 'epdm', 'kasa_celik_takviye': 'steel',
          'kanat_celik_takviye': 'steel', 'cam_1': 'glass', 'cam_2': 'glass', 'cam_3': 'glass', 'isicam_citasi': 'alu', 'nem_alici': 'des',
          'ikincil_sizdirmazlik': 'seal', 'cam_takoz_koprusu': 'bridge', 'kasa_takviye_vidalari': 'screw', 'kanat_takviye_vidalari': 'screw'}
mats = {}
for k, c in COL.items():
    m = bpy.data.materials.new('ov_' + k); m.use_nodes = True
    nt = m.node_tree; nt.nodes.clear()
    em = nt.nodes.new('ShaderNodeEmission'); em.inputs['Color'].default_value = (*c, 1); em.inputs['Strength'].default_value = 1.0
    out = nt.nodes.new('ShaderNodeOutputMaterial'); nt.links.new(em.outputs[0], out.inputs[0])
    mats[k] = m
for o in sc.objects:
    if o.type != 'MESH': continue
    o.data.materials.clear()
    if o.name in assign: o.data.materials.append(mats[assign[o.name]])
    else: o.hide_render = True

cam = bpy.data.cameras.new('ov'); cam.type = 'ORTHO'; cam.sensor_fit = 'VERTICAL'; cam.ortho_scale = (SY1 - SY0) / 1000.0
cam.clip_start = 0.0095; cam.clip_end = 0.0106
co = bpy.data.objects.new('ov', cam); sc.collection.objects.link(co); sc.camera = co
sxc, syc = (SX0 + SX1) / 2, (SY0 + SY1) / 2
co.location = Vector((-0.160, (52.25 - sxc) / 1000.0, syc / 1000.0))
co.rotation_euler = Vector((1, 0, 0)).to_track_quat('-Z', 'Y').to_euler()
sc.render.engine = 'CYCLES'; sc.cycles.samples = 8; sc.cycles.use_denoising = False
sc.render.resolution_x, sc.render.resolution_y = W, H
sc.render.film_transparent = True
sc.view_settings.view_transform = 'Standard'
world = bpy.data.worlds.new('w'); sc.world = world
out_render = os.path.join(SRC, 'reference', '_ov_render.png')
sc.render.filepath = out_render
bpy.ops.render.render(write_still=True)

# PDF'i aynı ölçekte raster et ve bindir
import pymupdf as fitz
from PIL import Image, ImageChops
S = 1 / 3.0082; X0, Y0 = 138.44, 675.0
z = PX_PER_MM * S * 72.0 / 72.0  # px per pt
rect = fitz.Rect(X0 + SX0 / S, Y0 - SY1 / S, X0 + SX1 / S, Y0 - SY0 / S)
pg = fitz.open(PDF)[8]
pix = pg.get_pixmap(matrix=fitz.Matrix(z, z), clip=rect, alpha=False)
drawing = Image.frombytes('RGB', (pix.width, pix.height), pix.samples).resize((W, H), Image.LANCZOS)
ren = Image.open(out_render).convert('RGBA')
base = Image.new('RGBA', (W, H), (255, 255, 255, 255))
fill = Image.alpha_composite(base, Image.blend(Image.new('RGBA', (W, H), (255, 255, 255, 0)), ren, 0.55))
comp = ImageChops.multiply(fill.convert('RGB'), drawing)
comp.save(os.path.join(SRC, 'reference', 'kesit_3d_bindirme.png'))
os.remove(out_render)
print('saved', W, H)
