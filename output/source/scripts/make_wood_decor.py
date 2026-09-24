# -*- coding: utf-8 -*-
"""Ahşap desenli folyo dokusu (prosedürel, iki yönde döşenebilir) -> KTX2 (ETC1S).

Görüntü 2048 × 512: yatay eksen damar yönü (0,5 m), dikey eksen damara dik (0,125 m).
Parlaklık (0 koyu, 1 açık) görüntüleyicide iki renk arasında eşlenir (Altın meşe, Ceviz) ve kabartma
(emboss) için de kullanılır. Bileşenler: dalgalı yıllık halkalar (ilkbahar/yaz odunu geçişi), lif
çizgileri (damar boyunca uzamış yüksek frekans gürültü), gözenekler (kısa koyu çizgiler), geniş renk
dalgalanması. Tüm gürültüler periyodik (FFT) olduğundan doku kenarlarda dikişsiz döşenir.
kullanım: python3 make_wood_decor.py <çıktı.png>
"""
import os, sys, subprocess
import numpy as np
from PIL import Image

W, H = 2048, 512
OUT = sys.argv[1] if len(sys.argv) > 1 else 'ahsap.png'
rng = np.random.default_rng(8502)
u = (np.arange(W) + 0.5) / W; v = (np.arange(H) + 0.5) / H
U, V = np.meshgrid(u, v)                    # satır: v, sütun: u


def fft_noise(cu, cv, power=2.0, seed=0):
    """Periyodik gürültü: frekans bandı (cu: damar boyunca, cv: damara dik ölçek)."""
    r = np.random.default_rng(seed)
    fu = np.fft.fftfreq(W) * W; fv = np.fft.fftfreq(H) * H
    FU, FV = np.meshgrid(fu, fv)
    k = np.sqrt((FU / cu) ** 2 + (FV / cv) ** 2) + 1e-6
    amp = 1.0 / (1.0 + k ** power) * np.exp(-(k / 6.0) ** 2)
    ph = np.exp(2j * np.pi * r.random((H, W)))
    n = np.real(np.fft.ifft2(amp * ph))
    return (n - n.mean()) / (n.std() + 1e-9)


# yıllık halkalar: ortalama 2,6 mm aralık (0,125 m / 48), aralık ve yön hafifçe değişir
N = 48
warp = 0.012 * fft_noise(2, 1.2, seed=1) + 0.0012 * fft_noise(6, 3, seed=2)
spacing = V + 0.006 * np.sin(2 * np.pi * (3 * V + 0.3)) + 0.004 * np.sin(2 * np.pi * (7 * V + 1.1))
r = (spacing + warp) * N
ring = np.floor(r).astype(int) % N
f = r - np.floor(r)
ring_amp = 0.35 + 0.65 * rng.random(N) ** 0.7
ring_w = 0.08 + 0.18 * rng.random(N)
late = np.clip((f - (0.88 - ring_w[ring])) / 0.1, 0, 1) * (1 - np.clip((f - 0.965) / 0.035, 0, 1))
late *= ring_amp[ring]

# lifler: damar boyunca uzun, dik yönde ince çizgiler
fib = 0.6 * fft_noise(4, 240, power=1.4, seed=3) + 0.4 * fft_noise(10, 120, power=1.4, seed=4)
fib = np.tanh(fib * 0.8)

# gözenekler: kısa, damar boyunca uzamış koyu çizgiler (ilkbahar odununda daha yoğun)
pores = np.zeros((H, W), np.float32)
npore = 9000
pu = rng.random(npore) * W; pv = rng.random(npore) * H
plen = rng.uniform(5, 14, npore); pw = rng.uniform(0.3, 0.6, npore); pa = rng.uniform(0.5, 1.0, npore)
for x0, y0, L, w, a in zip(pu, pv, plen, pw, pa):
    xs = np.arange(int(x0 - 2 * L), int(x0 + 2 * L) + 1); ys = np.arange(int(y0 - 3 * w) - 1, int(y0 + 3 * w) + 2)
    gx = np.exp(-((xs - x0) / L) ** 2); gy = np.exp(-((ys - y0) / w) ** 2)
    pores[np.ix_(ys % H, xs % W)] += a * np.outer(gy, gx)
early = 1 - np.clip(f / 0.35, 0, 1)
pores = np.clip(pores * (0.35 + 0.65 * early), 0, 1.4)

# geniş renk dalgalanması
blot = fft_noise(2, 2, seed=5)

L = 0.66 - 0.30 * late - 0.11 * fib - 0.30 * pores + 0.07 * blot
L = (L - np.percentile(L, 0.5)) / (np.percentile(L, 99.5) - np.percentile(L, 0.5))
L = np.clip(L, 0, 1) ** 0.95
img = (L * 255 + 0.5).astype(np.uint8)
Image.fromarray(img, 'L').save(OUT)
print('yazıldı', OUT, img.shape, 'ortalama %.3f' % (img.mean() / 255))
# önizleme: iki renk eşlemesi (Altın meşe) + döşeme denetimi (2 × 2)
a = np.array([0xc2, 0x8a, 0x4c], float); b = np.array([0x7a, 0x4a, 0x22], float)
col = (b[None, None, :] + (a - b)[None, None, :] * L[..., None]).astype(np.uint8)
tile = np.block([[col, col], [col, col]]) if False else np.concatenate([np.concatenate([col, col], 1)] * 2, 0)
Image.fromarray(tile).resize((1024, 512)).save(OUT.replace('.png', '_onizleme.png'))
Image.fromarray(col[:256, :512]).save(OUT.replace('.png', '_yakin.png'))
