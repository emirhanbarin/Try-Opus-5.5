# -*- coding: utf-8 -*-
"""Teknik çizim bindirmesi: PDF s.9 kesit çiziminin vektörleri -> görüntüleyici için çizgi parçaları.

Kalibrasyon final2d.py / overlay_3d.py ile aynıdır (S = 1/3,0082 mm/pt, X0 = 138,44 pt, Y0 = 675,0 pt).
Ölçü çizgileri (yeşil) ve su okları (ayrı katman: extract_water_path.py) dışarıda bırakılır; profil
çizgileri, contalar, çelik, cam ve ara çıta çizgileri alınır. Eğriler 8 parçaya bölünür.
Çıktı: ../viewer-kose/js/drawing-data.js  (0,02 mm adımlı Int16 kesit koordinatları, base64)
"""
import base64, json, os, collections
import numpy as np
import pymupdf

HERE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.dirname(HERE)
S = 1 / 3.0082; X0, Y0 = 138.44, 675.0
Q = 0.02                                     # nicemleme adımı (mm)
WIN = (-12.0, 118.0, -6.0, 141.0)            # sx0, sx1, sy0, sy1 (mm)

doc = pymupdf.open(os.path.join(SRC, 'reference', 'Supremo85_teknik_dokuman.pdf'))
page = doc[8]
key = lambda c: tuple(round(v, 2) for v in c) if c else None
GREEN = (0.42, 0.74, 0.27)
BLACK = (0.01, 0.02, 0.02)
# ekranda koyu zemin üzerinde okunur renkler (kaynak renk -> görüntü rengi)
PALETTE = {BLACK: '#8fe0ff', (0.93, 0.13, 0.14): '#ff7a7a', (0.25, 0.73, 0.92): '#7fd0ff', (0.84, 0.84, 0.84): '#d8dde3',
           (0.99, 0.87, 0.5): '#ffd98a', (0.2, 0.2, 0.2): '#b8bec6', (0.73, 0.32, 0.62): '#e59bd5'}


def bez(p0, p1, p2, p3, n=8):
    t = np.linspace(0, 1, n + 1)[:, None]
    return ((1 - t) ** 3) * p0 + 3 * ((1 - t) ** 2) * t * p1 + 3 * (1 - t) * t * t * p2 + t ** 3 * p3


def to_mm(q):
    return np.array([(q.x - X0) * S, (Y0 - q.y) * S])


# su oku glifleri (kısa siyah çizgiler, uçta üçlü buluşma) -> dışarıda bırak
short = []
for p in page.get_drawings():
    if key(p.get('color')) == BLACK and p['type'] == 's' and len(p['items']) == 1 and p['items'][0][0] == 'l':
        a, b = to_mm(p['items'][0][1]), to_mm(p['items'][0][2])
        if np.linalg.norm(b - a) < 4.5: short.append((a, b))
idx = collections.defaultdict(list)
for si, (a, b) in enumerate(short):
    idx[(round(a[0] / 0.05), round(a[1] / 0.05))].append(si); idx[(round(b[0] / 0.05), round(b[1] / 0.05))].append(si)
arrow_segs = set()
for lst in idx.values():
    if len(lst) >= 3:
        L = [np.linalg.norm(short[i][1] - short[i][0]) for i in lst]
        if sum(0.8 < x < 1.7 for x in L) >= 2 and any(2.0 < x < 4.5 for x in L):
            arrow_segs.update(lst)
arrow_keys = {tuple(np.round(np.concatenate(short[i]), 3)) for i in arrow_segs}

segs, cols = [], []
colors = list(dict.fromkeys(PALETTE.values()))
for p in page.get_drawings():
    col = key(p.get('color')) if p['type'] in ('s', 'fs') else key(p.get('fill'))
    if col is None or col == GREEN or col not in PALETTE:
        continue
    ci = colors.index(PALETTE[col])
    for it in p['items']:
        if it[0] == 'l':
            pts = [to_mm(it[1]), to_mm(it[2])]
            if tuple(np.round(np.concatenate(pts), 3)) in arrow_keys:
                continue
        elif it[0] == 'c':
            pts = list(bez(*[to_mm(q) for q in it[1:5]]))
        elif it[0] == 're':
            r = it[1]; c = [pymupdf.Point(r.x0, r.y0), pymupdf.Point(r.x1, r.y0), pymupdf.Point(r.x1, r.y1), pymupdf.Point(r.x0, r.y1)]
            pts = [to_mm(q) for q in c + c[:1]]
        elif it[0] == 'qu':
            q = it[1]; c = [q.ul, q.ur, q.lr, q.ll]
            pts = [to_mm(v) for v in c + c[:1]]
        else:
            continue
        for a, b in zip(pts[:-1], pts[1:]):
            if np.linalg.norm(b - a) < 0.01:
                continue
            if not (WIN[0] <= min(a[0], b[0]) and max(a[0], b[0]) <= WIN[1] and WIN[2] <= min(a[1], b[1]) and max(a[1], b[1]) <= WIN[3]):
                continue
            segs.append([a[0], a[1], b[0], b[1]]); cols.append(ci)
arr = np.round(np.array(segs) / Q).astype(np.int16)
cl = np.array(cols, np.uint8)
print('çizgi parçası', len(arr), 'renk', collections.Counter(cols), 'ok parçası dışlandı', len(arrow_segs))
js = ('// Otomatik üretildi: scripts/extract_drawing_lines.py (PDF s.9 kesit çizimi, kalibre edilmiş mm)\n'
      'export const DRAWING = ' + json.dumps(dict(
          q=Q, count=int(len(arr)), colors=colors,
          segs=base64.b64encode(arr.tobytes()).decode('ascii'),
          cols=base64.b64encode(cl.tobytes()).decode('ascii'),
          source='PDF s.9 — Su tahliye görünümü (Supremo 85, üretim çizimleri)')) + ';\n')
out = os.path.join(SRC, 'viewer-kose', 'js', 'drawing-data.js')
open(out, 'w').write(js)
print('yazıldı', out, os.path.getsize(out), 'bayt')
