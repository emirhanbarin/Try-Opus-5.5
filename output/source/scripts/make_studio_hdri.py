# -*- coding: utf-8 -*-
"""Procedural studio HDRI (equirectangular, linear float) -> KTX2 RGBA16F + zstd.

Lights are defined in three.js world space (Y up, product interior faces +Z).
Row 0 of the output = bottom of the sphere (v=0) to match three.js equirect UVs
with flipY=false data textures.
"""
import numpy as np, os, subprocess, sys

W, H = int(os.environ.get('HDRI_W', 1024)), int(os.environ.get('HDRI_H', 512))
OUT = sys.argv[1] if len(sys.argv) > 1 else 'studio.ktx2'
KTX = os.environ.get('KTX_BIN', 'ktx')

u = (np.arange(W) + 0.5) / W
v = (np.arange(H) + 0.5) / H
U, V = np.meshgrid(u, v)
phi = (U - 0.5) * 2 * np.pi
th = (V - 0.5) * np.pi
D = np.stack([np.cos(phi) * np.cos(th), np.sin(th), np.sin(phi) * np.cos(th)], -1)

def nrm(a):
    a = np.asarray(a, float); return a / np.linalg.norm(a)

def smooth(e0, e1, x):
    t = np.clip((x - e0) / (e1 - e0), 0, 1); return t * t * (3 - 2 * t)

def softbox(center, up_hint, half_w, half_h, radiance, color=(1, 1, 1), edge=0.035, hotspot=0.25):
    c = nrm(center); r = nrm(np.cross(up_hint, c)); t = np.cross(c, r)
    dc = D @ c; dr = D @ r; dt = D @ t
    x = np.arctan2(dr, dc); y = np.arctan2(dt, dc)
    m = (1 - smooth(half_w - edge, half_w + edge, np.abs(x))) * (1 - smooth(half_h - edge, half_h + edge, np.abs(y)))
    m *= (dc > 0)
    fall = 1 - hotspot * ((x / half_w) ** 2 + (y / half_h) ** 2) * 0.5
    return m[..., None] * fall[..., None] * radiance * np.array(color)[None, None, :]

y = D[..., 1]
# base studio: dark neutral walls, slightly lit floor, gradient to ceiling
base = np.zeros(D.shape)
wall = 0.055 + 0.035 * smooth(-0.1, 0.6, y)
floor_ = 0.09 * smooth(-0.05, -0.35, y) * (1 - smooth(-0.9, -1.0, y) * 0.3)
base += (wall[..., None] * np.array([1.0, 1.0, 1.02]) + floor_[..., None] * np.array([1.0, 0.99, 0.97]))
horizon = np.exp(-((y + 0.02) / 0.06) ** 2) * 0.05
base += horizon[..., None]

L = np.zeros(D.shape)
# key: large softbox upper front-left (warm)
L += softbox((-0.55, 0.62, 0.56), (0, 1, 0), 0.42, 0.28, 9.0, (1.0, 0.97, 0.93))
# fill: right side, tall, cool and soft
L += softbox((0.85, 0.18, 0.45), (0, 1, 0), 0.30, 0.45, 2.4, (0.93, 0.97, 1.0))
# overhead panel
L += softbox((0.0, 1.0, 0.05), (0, 0, 1), 0.55, 0.35, 3.2, (1.0, 1.0, 1.0))
# rim strip behind
L += softbox((0.15, 0.45, -0.9), (0, 1, 0), 0.75, 0.07, 7.5, (1.0, 0.99, 0.97), edge=0.02)
# vertical strip lights for long specular highlights on extrusions
L += softbox((-0.95, 0.12, -0.25), (0, 1, 0), 0.05, 0.55, 6.0, (1.0, 1.0, 1.0), edge=0.015)
L += softbox((0.55, 0.10, 0.83), (0, 1, 0), 0.04, 0.45, 3.5, (1.0, 1.0, 1.0), edge=0.015)
# floor bounce card in front
L += softbox((0.0, -0.35, 0.94), (0, 1, 0), 0.9, 0.25, 0.35, (1.0, 0.98, 0.95), edge=0.2, hotspot=0.0)

img = (base + L).astype(np.float32)
rgba = np.concatenate([img, np.ones(img.shape[:2] + (1,), np.float32)], -1).astype(np.float16)
raw = OUT + '.raw'
rgba.tofile(raw)
subprocess.check_call([KTX, 'create', '--format', 'R16G16B16A16_SFLOAT', '--raw', '--width', str(W), '--height', str(H),
                       '--assign-oetf', 'linear', '--assign-primaries', 'bt709', '--zstd', '20', raw, OUT])
os.remove(raw)
# tone-mapped preview (top row = up)
pv = img / (1 + img); pv = np.clip(pv ** (1 / 2.2), 0, 1)[::-1]
try:
    from PIL import Image
    Image.fromarray((pv * 255).astype(np.uint8)).save(OUT.replace('.ktx2', '_preview.png'))
except Exception as e:
    print('preview skipped', e)
print('wrote', OUT, os.path.getsize(OUT), 'bytes; mean radiance', float(img.mean()))
