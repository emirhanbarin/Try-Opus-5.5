# -*- coding: utf-8 -*-
"""Su tahliye yolu: PDF s.9'daki kesikli su okları + köşe numunesindeki yarık konumları -> 3B yol.

1) s.9'daki ok glifleri (≈3 mm şaft + iki ≈1,26 mm baş çizgisi, siyah) ayıklanır; her okun ucu ve yönü
   kesit koordinatlarında (sx, sy, mm) bulunur. Oklar kolonlar (düşey akış) ve çaprazlar (yarık geçişi) oluşturur.
2) Kesit düzlemindeki akış bu oklardan, boyuna (X) ilerleme köşe numunesindeki yarık konumlarından
   (kose_info.json: A 230, B 128, C 202, D-E 100 mm) alınır: su kamara içinde bir yarıktan diğerine akar.
3) Her ara nokta kesit poligonlarına göre denetlenir: katı içinde kalan nokta yalnızca kendi yarığının
   bandında olabilir.
Çıktı: ../viewer-kose/js/water-path.js (three.js, mm: X, Y = sy, Z = sx - 52,25) + ../water_path.json
"""
import json, math, os, collections
import numpy as np
import pymupdf
from shapely.geometry import Polygon, Point

HERE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.dirname(HERE)
S = 1 / 3.0082; X0, Y0 = 138.44, 675.0       # s.9 kalibrasyonu (final2d.py / overlay_3d.py ile aynı)
BLACK = (0.01, 0.02, 0.02)

doc = pymupdf.open(os.path.join(SRC, 'reference', 'Supremo85_teknik_dokuman.pdf'))
page = doc[8]
segs = []
for p in page.get_drawings():
    col = tuple(round(c, 2) for c in p['color']) if p.get('color') else None
    if col != BLACK or p['type'] != 's' or len(p['items']) != 1 or p['items'][0][0] != 'l':
        continue
    it = p['items'][0]
    a = np.array([(it[1].x - X0) * S, (Y0 - it[1].y) * S]); b = np.array([(it[2].x - X0) * S, (Y0 - it[2].y) * S])
    if np.linalg.norm(b - a) < 4.5:
        segs.append((a, b))
idx = collections.defaultdict(list)
for si, (a, b) in enumerate(segs):
    for e, q in ((0, a), (1, b)):
        idx[(round(q[0] / 0.05), round(q[1] / 0.05))].append((si, e))
arrows = []
for lst in idx.values():
    if len(lst) < 3:
        continue
    L = [(si, e, float(np.linalg.norm(segs[si][1] - segs[si][0]))) for si, e in lst]
    heads = [x for x in L if 0.8 < x[2] < 1.7]; shafts = [x for x in L if 2.0 < x[2] < 4.5]
    if len(heads) >= 2 and shafts:
        si, e, ln = shafts[0]
        tip, tail = segs[si][e], segs[si][1 - e]
        arrows.append(dict(tip=tip.round(3).tolist(), dir=((tip - tail) / ln).round(4).tolist()))
print('s.9 su okları:', len(arrows))


def column(sx_near, sy_min=-1e9, sy_max=1e9, tol=1.0):
    xs = [a['tip'][0] for a in arrows if abs(a['dir'][0]) < 0.05 and a['dir'][1] < 0 and abs(a['tip'][0] - sx_near) < tol
          and sy_min <= a['tip'][1] <= sy_max]
    assert xs, sx_near
    return float(np.median(xs))


def diag_tips(sx0, sx1, sy0, sy1):
    return sorted([a['tip'] for a in arrows if a['dir'][0] < -0.5 and sx0 <= a['tip'][0] <= sx1 and sy0 <= a['tip'][1] <= sy1],
                  key=lambda t: -t[1])


COL_GLASS = column(37.2, 95, 150)       # cam ile cam dudağı arası
COL_B = column(25.0, 50, 82)            # B yarığı ve kasa lambası
COL_C = column(14.2, 30, 42)            # kasa dış kamarası
COL_OUT = column(-3.7, 0, 26)           # dış yüz, rüzgarlık altı
DIAG_A = diag_tips(24, 37, 82, 96)      # A yarığından kanat kamarasına (4 ok)
DIAG_C = diag_tips(15, 24, 43, 52)      # lambadan C yarığına (3 ok)
HORIZ_DE = sorted([a['tip'] for a in arrows if a['dir'][0] < -0.9 and abs(a['dir'][1]) < 0.3], key=lambda t: -t[0])
SY_DE = float(np.mean([t[1] for t in HORIZ_DE]))
print(f'kolonlar sx: cam {COL_GLASS:.2f}, B {COL_B:.2f}, C {COL_C:.2f}, dış {COL_OUT:.2f}; D-E akış sy {SY_DE:.2f}')

info = json.load(open(os.path.join(SRC, 'kose_info.json')))
XA, XB, XC, XDE = info['X_A'], info['X_B'], info['X_C'], info['X_DE']

# ara noktalar: (X, sx, sy, etiket). Etiket, noktadan başlayan kesimi adlandırır.
P = [
    (XA + 28, COL_GLASS, 113.0, 'Cam ile cam dudağı arası'),
    (XA + 28, COL_GLASS, 94.3, 'Cam yuvası tabanı'),
    (XA + 2, COL_GLASS - 0.5, 94.2, 'A yarığı (düşeyle 60°)'),
    (XA, 34.9, 93.9, None),
    (XA, 31.6, 92.0, 'Kanat dış kamarası'),
    (XA, DIAG_A[-1][0] + 2.5, DIAG_A[-1][1] + 2.8, None),
    (XA, COL_B + 0.7, 75.2, None),
    (XB, COL_B + 0.3, 75.1, 'B yarığı'),
    (XB, COL_B + 0.3, 72.0, 'Kasa lambası'),
    (XB, COL_B, 55.0, None),
    (XB, DIAG_C[1][0] + 0.8, DIAG_C[1][1] - 0.6, None),
    (XB + 4, 19.6, 45.4, None),
    (XC - 2, 18.4, 45.3, 'C yarığı (düşeyle 50°)'),
    (XC, 16.6, 44.9, None),
    (XC, 13.1, 41.6, 'Kasa dış kamarası'),
    (XC, COL_C, 33.0, None),
    (XC, COL_C - 0.4, SY_DE, None),
    (XDE + 2, 13.0, SY_DE, 'D-E yarığı'),
    (XDE, 8.5, SY_DE, None),
    (XDE, 3.4, SY_DE - 0.4, None),
    (XDE, -1.4, SY_DE - 0.5, 'Rüzgarlık'),
    (XDE, COL_OUT, SY_DE - 2.6, None),
    (XDE, COL_OUT, 3.0, None),
]

# ---- denetim: her ara nokta ve kesim ortası havada mı (yarık bandları hariç)
sec = json.load(open(os.path.join(SRC, 'section_mm.json')))
solids = {k: Polygon(v['exterior'], v['holes']) for k, v in sec.items() if not k.endswith('_desiccant')}


def band(c, ang, d0, d1, w=4.0):
    a = np.array([math.cos(math.radians(ang)), math.sin(math.radians(ang))]); n = np.array([-a[1], a[0]])
    c = np.array(c)
    return Polygon([c + a * d0 + n * w / 2, c + a * d1 + n * w / 2, c + a * d1 - n * w / 2, c + a * d0 - n * w / 2])


SLOTS = {  # yarık: (X merkezi, kesit bandı, kesilen parça)
    'A': (XA, band((34.18, 93.51), 30, -3.0, 3.0), 'sash'),
    'B': (XB, band((25.36, 73.11), 90, -3.0, 2.2), 'sash'),
    'C': (XC, band((14.68, 43.52), 40, -3.0, 3.0), 'frame'),
    'DE': (XDE, band((0.0, 30.22), 0, -2.0, 11.9), 'frame'),
}


XRANGE = {'bridge': (110.0, 180.0), 'steel_frame': (info['steel_frame_start'], 300.0),
          'steel_sash': (info['steel_sash_start'], 300.0)}   # köşede yalnızca bu X aralığında bulunan parçalar


def blocked(X, sx, sy):
    pt = Point(sx, sy)
    for k, poly in solids.items():
        r = XRANGE.get(k)
        if r and not (r[0] <= X <= r[1]):
            continue
        if poly.buffer(-0.05).contains(pt):
            open_ = any(abs(X - xs) <= 16.0 and k == part and b.buffer(-0.05).contains(pt) for xs, b, part in SLOTS.values())
            if not open_:
                return k
    return None


bad = []
for i in range(len(P)):
    X, sx, sy, _ = P[i]
    k = blocked(X, sx, sy)
    if k: bad.append((i, 'nokta', k, (X, sx, sy)))
    if i + 1 < len(P):
        X2, sx2, sy2, _ = P[i + 1]
        for t in np.linspace(0.1, 0.9, 9):
            Xm, sxm, sym = X + (X2 - X) * t, sx + (sx2 - sx) * t, sy + (sy2 - sy) * t
            k = blocked(Xm, sxm, sym)
            if k: bad.append((i, 'kesim %.1f' % t, k, (round(Xm, 1), round(sxm, 2), round(sym, 2)))); break
for b in bad: print('ENGEL', b)
assert not bad, 'su yolu katı parçalardan geçiyor'

pts3 = [[round(X, 2), round(sy, 2), round(sx - 52.25, 2)] for X, sx, sy, _ in P]
labels = [(i, lab) for i, (_, _, _, lab) in enumerate(P) if lab]
length = sum(float(np.linalg.norm(np.subtract(pts3[i + 1], pts3[i]))) for i in range(len(pts3) - 1))
out = dict(source='PDF s.9 kesikli su okları (%d ok) + s.8/s.11 yarık düzeni' % len(arrows), units='mm',
           frame='three.js köşe: X alt kol, Y yukarı (sy), Z = sx - 52,25', points=pts3, labels=labels,
           length_mm=round(length, 1), arrows=arrows)
json.dump(out, open(os.path.join(SRC, 'water_path.json'), 'w'), ensure_ascii=False, indent=1)
js = ('// Otomatik üretildi: scripts/extract_water_path.py (PDF s.9 su okları + köşe yarık konumları)\n'
      'export const WATER_PATH = ' + json.dumps(dict(points=pts3, labels=labels, length_mm=out['length_mm']), ensure_ascii=False) + ';\n')
os.makedirs(os.path.join(SRC, 'viewer-kose', 'js'), exist_ok=True)
open(os.path.join(SRC, 'viewer-kose', 'js', 'water-path.js'), 'w').write(js)
print('yol noktası', len(pts3), 'uzunluk %.0f mm' % length)
