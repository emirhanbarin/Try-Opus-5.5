# -*- coding: utf-8 -*-
"""Tileable hot-dip galvanized 'spangle' pattern (1024^2, grayscale) for the steel material.
R: brightness / roughness modulation per zinc crystal, with dendritic streaks."""
import numpy as np, sys
from PIL import Image
from scipy.spatial import cKDTree

N = 1024
rng = np.random.default_rng(7)
npts = 160
P = rng.random((npts, 2)) * N
# tile points for wrap-around
off = [(dx, dy) for dx in (-N, 0, N) for dy in (-N, 0, N)]
PP = np.vstack([P + o for o in off]); idx = np.tile(np.arange(npts), 9)
tree = cKDTree(PP)
yy, xx = np.mgrid[0:N, 0:N]
Q = np.column_stack([xx.ravel() + 0.5, yy.ravel() + 0.5])
d, k = tree.query(Q, k=2)
cell = idx[k[:, 0]]
edge = (d[:, 1] - d[:, 0])
base = rng.uniform(0.62, 1.0, npts)[cell]
ang = rng.uniform(0, np.pi, npts)[cell]
# dendritic streaks: directional sinusoid per crystal
vec = Q - PP[k[:, 0]]
proj = vec[:, 0] * np.cos(ang) + vec[:, 1] * np.sin(ang)
proj2 = -vec[:, 0] * np.sin(ang) + vec[:, 1] * np.cos(ang)
streak = 0.5 + 0.5 * np.sin(proj * 0.9 + 0.35 * np.sin(proj2 * 0.23))
val = base * (0.92 + 0.08 * streak)
val *= 0.9 + 0.1 * np.clip(edge / 6.0, 0, 1)   # darker grain boundaries
# fine noise
noise = rng.normal(0, 0.015, N * N)
val = np.clip(val + noise, 0, 1).reshape(N, N)
Image.fromarray((val * 255).astype(np.uint8), 'L').convert('RGB').save(sys.argv[1] if len(sys.argv) > 1 else 'spangle.png')
print('ok', float(val.mean()))
