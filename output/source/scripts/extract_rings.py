# -*- coding: utf-8 -*-
"""Kesit dış konturları ve kamaraları -> görüntüleyici veri dosyaları (s.9 poligonları, section_mm.json).

rings-data.js    : profil / çıta / conta / çıta dudağı / ısıcam ara çıtası ve sızdırmazlık dış konturları (0,05 mm
                   sadeleştirilmiş) ve cam panelleri.
                   Kaynak taşıntısı (üretim hikâyesi) ve tam pencere görünümü bu konturları süpürür.
chambers-data.js : kasa (14) ve kanat (11) kapalı kamaraları; dıştan içe (sx) sıralı. Kamara sayacı ve ısı
                   haritası dolgusu bu poligonlardan üçgenlenir.
Koordinatlar mm: sx derinlik (0 = kasa dış yüzü), sy yükseklik (0 = kasa dış kenarı). Dış halkalar saat yönü
tersine, kamara halkaları saat yönündedir (section_mm.json ile aynı).
kullanım: python3 extract_rings.py   (çıktı: ../viewer-kose/js/)
"""
import json, os
from shapely.geometry import Polygon
from shapely.geometry.polygon import orient

HERE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(HERE, '..')
OUT = os.path.join(SRC, 'viewer-kose', 'js')
TOL = 0.05
sec = json.load(open(os.path.join(SRC, 'section_mm.json')))


def flat(coords):
    return [round(v, 2) for p in coords for v in p]


def ring_ext(key):
    p = Polygon(sec[key]['exterior']).simplify(TOL, preserve_topology=True)
    p = orient(p, 1.0)                         # dış halka saat yönü tersine
    return list(p.exterior.coords)[:-1]


rings = {}
for key in ('frame', 'sash', 'bead', 'gasket_frame_ext', 'gasket_middle', 'gasket_interior', 'gasket_glazing_ext',
            'bead_lip_top', 'bead_lip_bot', 'sealant1', 'sealant2', 'spacer1', 'spacer2'):
    rings[key] = flat(ring_ext(key))
glass = []
for i in (1, 2, 3):
    xs = [p[0] for p in sec['glass%d' % i]['exterior']]; ys = [p[1] for p in sec['glass%d' % i]['exterior']]
    glass.append([round(min(xs), 3), round(max(xs), 3), round(min(ys), 3), round(max(ys), 3)])

chambers = {}
for key in ('frame', 'sash'):
    hs = []
    for h in sec[key]['holes']:
        p = orient(Polygon(h).simplify(TOL, preserve_topology=True), 1.0)
        c = p.centroid
        hs.append((c.x, c.y, list(p.exterior.coords)[:-1], p.area))
    hs.sort(key=lambda t: (round(t[0] / 4), t[1]))      # dıştan içe, sonra aşağıdan yukarı
    chambers[key] = [flat(t[2]) for t in hs]
    print(key, len(hs), 'kamara, alanlar mm²:', [round(t[3], 1) for t in hs])

head = '// Otomatik üretildi: scripts/extract_rings.py (kaynak: section_mm.json, PDF s.9). Elle düzenlemeyin.\n'
with open(os.path.join(OUT, 'rings-data.js'), 'w') as f:
    f.write(head + '// Dış konturlar [sx0, sy0, sx1, sy1, ...] mm, 0,05 mm sadeleştirilmiş; cam: [sx0, sx1, sy0, sy1]\n')
    f.write('export const RINGS = ' + json.dumps(rings, separators=(',', ':')) + ';\n')
    f.write('export const GLASS = ' + json.dumps(glass, separators=(',', ':')) + ';\n')
with open(os.path.join(OUT, 'chambers-data.js'), 'w') as f:
    f.write(head + '// Kapalı kamaralar (kasa 14, kanat 11), dıştan içe sıralı; halkalar [sx0, sy0, ...] mm\n')
    f.write('export const CHAMBERS = ' + json.dumps(chambers, separators=(',', ':')) + ';\n')
for k, v in rings.items():
    print('%-20s %4d nokta' % (k, len(v) // 2))
print('yazıldı', os.path.getsize(os.path.join(OUT, 'rings-data.js')), os.path.getsize(os.path.join(OUT, 'chambers-data.js')), 'bayt')
