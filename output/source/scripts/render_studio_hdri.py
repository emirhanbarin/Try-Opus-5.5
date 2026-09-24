# -*- coding: utf-8 -*-
"""Stüdyo HDRI v2: Blender/Cycles'ta modellenmiş fotoğraf stüdyosu -> eşdikdörtgen panorama -> KTX2 (RGBA16F + zstd).

Ürün fotoğrafçılığı düzeni (three.js dünya ekseni: Y yukarı, ürünün iç yüzü +Z):
  - ana softbox (üst-ön-sol, sıcak), sağda büyük dolgu perdesi (soğuk, yumuşak)
  - arkada iki dikey şerit (kenar parlaması), önde yatay uzun şerit (profil boyunca parlama çizgisi)
  - tepede difüzör, önde alçak sekme kartı; koyu kömür rengi duvarlar ve orta-koyu gri zemin
Işık yüzeyleri emisyon düzlemleridir; duvarlar ve zemin bu ışıkla Cycles'ta aydınlanır (sekme ışığı).

Eksen doğrulaması: önce ±X, ±Y, ±Z yönlerine renkli işaretler konup küçük bir panorama çizilir;
three.js equirectUv sözleşmesine (u = atan2(z, x)/2π + 0,5, v = asin(y)/π + 0,5, satır 0 = aşağı)
göre piksel eşlemesi otomatik bulunur ve son görüntü buna göre yeniden örneklenir.
kullanım: python3 render_studio_hdri.py <çıktı.ktx2>   (HDRI_W=1024 HDRI_SPP=512)
"""
import bpy, math, os, sys, subprocess
import numpy as np
from mathutils import Vector

OUT = sys.argv[-1] if sys.argv[-1].endswith('.ktx2') else 'studio2.ktx2'
W = int(os.environ.get('HDRI_W', 1024)); H = W // 2
SPP = int(os.environ.get('HDRI_SPP', 512))
HERE = os.path.dirname(os.path.abspath(__file__))
KTX = os.environ.get('KTX_BIN', 'ktx')


def T(x, y, z):
    """three.js (Y yukarı) -> Blender (Z yukarı): (x, y, z) -> (x, -z, y)"""
    return Vector((x, -z, y))


def reset():
    bpy.ops.wm.read_factory_settings(use_empty=True)
    sc = bpy.context.scene
    sc.render.engine = 'CYCLES'; sc.cycles.device = 'CPU'
    sc.view_settings.view_transform = 'Standard'; sc.view_settings.look = 'None'
    sc.render.film_transparent = False
    w = bpy.data.worlds.new('w'); sc.world = w
    w.use_nodes = True; w.node_tree.nodes['Background'].inputs[1].default_value = 0.0
    cam = bpy.data.cameras.new('pano'); cam.type = 'PANO'
    try:
        cam.panorama_type = 'EQUIRECTANGULAR'
    except Exception:
        cam.cycles.panorama_type = 'EQUIRECTANGULAR'
    co = bpy.data.objects.new('pano', cam); sc.collection.objects.link(co); sc.camera = co
    co.location = (0, 0, 0); co.rotation_euler = (math.radians(90), 0, 0)
    return sc


def emissive(name, color, strength):
    m = bpy.data.materials.new(name); m.use_nodes = True
    nt = m.node_tree; nt.nodes.clear()
    out = nt.nodes.new('ShaderNodeOutputMaterial'); em = nt.nodes.new('ShaderNodeEmission')
    em.inputs['Color'].default_value = (*color, 1); em.inputs['Strength'].default_value = strength
    nt.links.new(em.outputs[0], out.inputs[0])
    return m, em, nt


def diffuse(name, color, rough=1.0):
    m = bpy.data.materials.new(name); m.use_nodes = True
    b = m.node_tree.nodes['Principled BSDF']
    b.inputs['Base Color'].default_value = (*color, 1); b.inputs['Roughness'].default_value = rough
    b.inputs['Specular IOR Level'].default_value = 0.2
    return m


def panel(name, center3, size, radiance, color=(1, 1, 1), hotspot=0.25, edge=0.04, frame=True):
    """Softbox: merkezinde hafif sıcak nokta, kenara doğru yumuşak düşüş, ince koyu çerçeve.
    center3: three.js konumu (m); panel ürüne (orijine) bakar."""
    c = T(*center3)
    bpy.ops.mesh.primitive_plane_add(size=1.0, location=c)
    ob = bpy.context.object; ob.name = name
    ob.scale = (size[0], size[1], 1)
    ob.rotation_euler = (-c).to_track_quat('Z', 'Y').to_euler()
    m, em, nt = emissive(name + '_m', color, radiance)
    tc = nt.nodes.new('ShaderNodeTexCoord'); sep = nt.nodes.new('ShaderNodeSeparateXYZ')
    nt.links.new(tc.outputs['Generated'], sep.inputs[0])
    # r² = ((u-.5)/.5)² + ((v-.5)/.5)²  ->  yoğunluk = (1 - hotspot*r²/2) * kenar yumuşatması
    def mathn(op, a, b=None):
        n = nt.nodes.new('ShaderNodeMath'); n.operation = op
        for i, v in enumerate((a, b)):
            if v is None: continue
            if isinstance(v, (int, float)): n.inputs[i].default_value = v
            else: nt.links.new(v, n.inputs[i])
        return n.outputs[0]
    du = mathn('MULTIPLY', mathn('SUBTRACT', sep.outputs[0], 0.5), 2.0)
    dv = mathn('MULTIPLY', mathn('SUBTRACT', sep.outputs[1], 0.5), 2.0)
    r2 = mathn('ADD', mathn('MULTIPLY', du, du), mathn('MULTIPLY', dv, dv))
    fall = mathn('SUBTRACT', 1.0, mathn('MULTIPLY', r2, hotspot * 0.5))
    au = mathn('ABSOLUTE', du); av = mathn('ABSOLUTE', dv)
    eu = mathn('SUBTRACT', 1.0, mathn('POWER', mathn('MAXIMUM', mathn('DIVIDE', mathn('SUBTRACT', au, 1 - edge), edge), 0.0), 1.0))
    ev = mathn('SUBTRACT', 1.0, mathn('POWER', mathn('MAXIMUM', mathn('DIVIDE', mathn('SUBTRACT', av, 1 - edge), edge), 0.0), 1.0))
    k = mathn('MULTIPLY', fall, mathn('MULTIPLY', mathn('MAXIMUM', eu, 0.0), mathn('MAXIMUM', ev, 0.0)))
    stren = mathn('MULTIPLY', k, radiance)
    nt.links.new(stren, em.inputs['Strength'])
    ob.data.materials.append(m)
    if frame:   # softbox gövdesi: arkada ve kenarda koyu çerçeve (yansımada kutu hissi)
        bpy.ops.mesh.primitive_plane_add(size=1.0, location=c + (c.normalized() * 0.02))
        fr = bpy.context.object; fr.name = name + '_cerceve'
        fr.scale = (size[0] * 1.06, size[1] * 1.06, 1); fr.rotation_euler = ob.rotation_euler
        fr.data.materials.append(diffuse(name + '_cm', (0.015, 0.015, 0.016)))
    return ob


def room():
    """Koyu stüdyo: duvarlar/tavan kömür, zemin orta-koyu gri (ürün altına düşen ışığı yansıtır)."""
    bpy.ops.mesh.primitive_cube_add(size=1.0, location=T(0, 2.2, 0))
    r = bpy.context.object; r.name = 'oda'; r.scale = (11.0, 10.0, 5.4)   # Blender x, y(-z3), z(y3)
    bpy.ops.object.mode_set(mode='EDIT'); bpy.ops.mesh.flip_normals(); bpy.ops.object.mode_set(mode='OBJECT')
    r.data.materials.append(diffuse('duvar', (0.045, 0.047, 0.052)))
    bpy.ops.mesh.primitive_plane_add(size=1.0, location=T(0, -0.35, 0))
    f = bpy.context.object; f.name = 'zemin'; f.scale = (10.8, 9.8, 1)
    f.data.materials.append(diffuse('zemin', (0.20, 0.205, 0.21), 0.9))


def render(path, w, h, spp):
    sc = bpy.context.scene
    sc.render.resolution_x, sc.render.resolution_y = w, h; sc.render.resolution_percentage = 100
    sc.cycles.samples = spp
    sc.cycles.use_denoising = spp >= 64
    sc.render.image_settings.file_format = 'OPEN_EXR'; sc.render.image_settings.color_depth = '32'
    sc.render.filepath = path
    bpy.ops.render.render(write_still=True)
    im = bpy.data.images.load(path)
    px = np.array(im.pixels[:], dtype=np.float32).reshape(h, w, 4)   # satır 0 = alt
    bpy.data.images.remove(im)
    return px[..., :3]


# ---------------------------------------------------------------- 1) eksen doğrulaması
sc = reset()
marks = {'+X': ((1, 0, 0), (1, 0, 0)), '+Z': ((0, 0, 1), (0, 0, 1)), '+Y': ((0, 1, 0), (0, 1, 0)), '-X': ((-1, 0, 0), (1, 1, 0))}
for n, (d, col) in marks.items():
    bpy.ops.mesh.primitive_uv_sphere_add(radius=0.9, location=T(*[4 * v for v in d]))
    m, _, _ = emissive('mk' + n, col, 50.0); bpy.context.object.data.materials.append(m)
tmp = os.path.join(os.path.dirname(os.path.abspath(OUT)), '_pano_axes.exr')
img = render(tmp, 128, 64, 4)
os.remove(tmp)


def peak(ch_mask):
    """İşaretin ağırlık merkezi (u için dairesel ortalama; v: satır 0 = alt)."""
    m = np.array(ch_mask, np.float32)
    score = (img * m[None, None, :]).sum(-1) - (img * (1 - m)[None, None, :]).sum(-1) * 2
    sel = score > 0.5 * score.max()
    rows, cols = np.nonzero(sel)
    ang = (cols + 0.5) / img.shape[1] * 2 * np.pi
    u = (math.atan2(np.sin(ang).mean(), np.cos(ang).mean()) / (2 * np.pi)) % 1.0
    v = float(((rows + 0.5) / img.shape[0]).mean())
    return u, v


uX, vX = peak((1, 0, 0)); uZ, vZ = peak((0, 0, 1)); uY, vY = peak((0, 1, 0))
print('işaret +X u=%.3f v=%.3f | +Z u=%.3f v=%.3f | +Y v=%.3f' % (uX, vX, uZ, vZ, vY))
# three.js hedefi: +X -> u .5, +Z -> u .75, +Y -> v 1 (üst satır)
flip_v = vY < 0.5
du = ((uZ - uX + 0.5) % 1.0) - 0.5          # +Z, +X'e göre u'da +0,25 olmalı (işaret ters ise ayna)
mirror_u = du < 0
print('eşleme: dikey ters=%s yatay ayna=%s' % (flip_v, mirror_u))

# ---------------------------------------------------------------- 2) stüdyo
if os.environ.get('RENDER', '1') == '0' and os.path.exists(OUT.replace('.ktx2', '_linear.npy')):
    img = np.load(OUT.replace('.ktx2', '_linear.npy')); flip_v = mirror_u = False; uX = 0.5
else:
    img = None
sc = reset() if img is None else None
if img is None: room()
panel('ana_softbox', (-1.25, 1.45, 1.30), (1.5, 1.1), 9.0, (1.0, 0.965, 0.925), hotspot=0.35)
panel('dolgu_perdesi', (2.05, 0.45, 1.05), (1.3, 2.1), 1.7, (0.93, 0.965, 1.0), hotspot=0.1, frame=False)
panel('tepe_difuzor', (0.0, 2.4, 0.15), (2.2, 1.4), 2.6, (1.0, 1.0, 1.0), hotspot=0.2)
panel('arka_serit_sol', (-1.95, 0.55, -1.05), (0.16, 1.9), 8.0, (1.0, 0.99, 0.97), hotspot=0.05, edge=0.12)
panel('arka_serit_sag', (1.25, 0.9, -1.85), (0.14, 1.7), 7.0, (0.97, 0.99, 1.0), hotspot=0.05, edge=0.12)
panel('on_serit_yatay', (0.25, 0.55, 2.3), (2.4, 0.13), 5.5, (1.0, 1.0, 1.0), hotspot=0.05, edge=0.1)
panel('sag_serit_dikey', (1.55, 0.65, 1.75), (0.12, 1.6), 4.5, (1.0, 1.0, 1.0), hotspot=0.05, edge=0.12)
panel('sekme_karti', (0.1, -0.15, 1.9), (2.0, 0.6), 0.45, (1.0, 0.98, 0.95), hotspot=0.0, frame=False)
if img is None:
    tmp = os.path.join(os.path.dirname(os.path.abspath(OUT)), '_pano.exr')
    img = render(tmp, W, H, SPP)
    os.remove(tmp)
if flip_v: img = img[::-1]
if mirror_u: img = img[:, ::-1]
# u kaydırması: +X yönü u = 0,5'e gelsin (işaret testinden)
uX_fixed = (1 - uX) if mirror_u else uX
shift = int(round((0.5 - uX_fixed) * W)) % W
img = np.roll(img, shift, axis=1)
img = np.clip(img, 0, 60000).astype(np.float32)
print('ortalama ışıma %.4f, en yüksek %.2f' % (float(img.mean()), float(img.max())))

rgba = np.concatenate([img, np.ones(img.shape[:2] + (1,), np.float32)], -1).astype(np.float16)
# yarım duyarlıklı kayan noktanın en düşük 3 mantis bitini sıfırla (≈ %0,8 adım; yansımada fark edilmez, zstd daha iyi sıkıştırır)
rgba = (rgba.view(np.uint16) & np.uint16(0xFFF8)).view(np.float16)
raw = OUT + '.raw'; rgba.tofile(raw)
subprocess.check_call([KTX, 'create', '--format', 'R16G16B16A16_SFLOAT', '--raw', '--width', str(W), '--height', str(H),
                       '--assign-oetf', 'linear', '--assign-primaries', 'bt709', '--zstd', '20', raw, OUT])
os.remove(raw)
pv = img / (1 + img); pv = np.clip(pv ** (1 / 2.2), 0, 1)[::-1]   # önizleme: üst satır = yukarı
from PIL import Image
Image.fromarray((pv * 255).astype(np.uint8)).save(OUT.replace('.ktx2', '_preview.png'))
np.save(OUT.replace('.ktx2', '_linear.npy'), img)
print('yazıldı', OUT, os.path.getsize(OUT), 'bayt')
