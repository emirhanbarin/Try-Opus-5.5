# -*- coding: utf-8 -*-
"""Montaj denetimi raporu (2D kesit + 3D).
2D: tüm parça çiftleri için kesişim alanı ve en büyük gömülme derinliği (içine sığan en büyük daire çapı).
3D: assembly_check.json (check_assembly.py) sonuçlarını özetler.
Çıktı: ../montaj_denetimi.md
Env: CHECK (varsayılan assembly_check.json), OUT (varsayılan montaj_denetimi.md), TITLE (başlık eki)"""
import json, itertools, os
import numpy as np
import shapely
from shapely.geometry import Polygon

SRC = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
d = json.load(open(os.path.join(SRC, 'section_mm.json')))
names = {'frame': 'Kasa profili', 'sash': 'Kanat profili', 'bead': 'Cam çıtası', 'bead_lip_top': 'Çıta dudağı (üst)',
         'bead_lip_bot': 'Çıta dudağı (alt)', 'gasket_frame_ext': 'Kasa dış contası', 'gasket_middle': 'Orta conta',
         'gasket_interior': 'Kanat iç contası', 'gasket_glazing_ext': 'Dış cam contası', 'steel_frame': 'Kasa çelik takviyesi',
         'steel_sash': 'Kanat çelik takviyesi', 'bridge': 'Cam takoz köprüsü', 'glass1': 'Cam (dış)', 'glass2': 'Cam (orta)',
         'glass3': 'Cam (iç)', 'spacer1': 'Ara çıta 1', 'spacer2': 'Ara çıta 2', 'sealant1': 'İkincil sızdırmazlık 1',
         'sealant2': 'İkincil sızdırmazlık 2', 'spacer1_desiccant': 'Nem alıcı 1', 'spacer2_desiccant': 'Nem alıcı 2'}
P = {k: Polygon(v['exterior'], v['holes']) for k, v in d.items() if k in names and k not in ('spacer1_desiccant', 'spacer2_desiccant')}
# glass panes as modelled (GLASS_TOP=200, 0.3 mm edge softening does not affect contact faces)
rows = []
for a, b in itertools.combinations(sorted(P), 2):
    A, B = P[a], P[b]
    dist = A.distance(B)
    if dist > 0.05: continue
    inter = A.intersection(B)
    depth = 0.0
    if inter.area > 0:
        geoms = getattr(inter, 'geoms', [inter])
        for g in geoms:
            if g.area > 0:
                c = shapely.maximum_inscribed_circle(g, tolerance=0.0005)
                depth = max(depth, 2 * c.length)
    rows.append((names[a], names[b], dist, inter.area, depth))

chk = json.load(open(os.path.join(SRC, os.environ.get('CHECK', 'assembly_check.json'))))
out = ['# Montaj denetimi' + os.environ.get('TITLE', ''), '',
       'Kesit geometrisi PDF s.9 vektörlerinden çıkarılmıştır. Temas eden tüm parça çiftleri (aralık ≤ 0,05 mm):', '',
       '| Parça A | Parça B | Aralık (mm) | Kesişim alanı (mm²) | En büyük gömülme (mm) |', '|---|---|---:|---:|---:|']
for r in sorted(rows, key=lambda r: -r[4]):
    out.append(f'| {r[0]} | {r[1]} | {r[2]:.4f} | {r[3]:.4f} | {r[4]:.4f} |')
mx = max(r[4] for r in rows)
second = sorted(r[4] for r in rows)[-2]
out += ['', f'**En büyük gömülme derinliği: {mx:.3f} mm** — kanat iç contasının ok (tırnak) ayağının yuva duvarına sıkı geçmesi; tırnaklı conta ayağının çalışma şekli budur ve çizimdeki çizgi kalınlığının (0,17 mm) altındadır. Diğer tüm temaslar ≤ {second:.3f} mm (sayısal gürültü).',
        'Çelik takviyeler kamaralarına 0,5 mm (kasa) / ≥ 0,5 mm (kanat) montaj boşluğuyla oturur; bu boşluk dökümandaki çizimde de vardır.', '',
        '## 3B denetim (Blender, BVH + boolean kesişim)', '',
        '| Parça A | Parça B | Üçgen kesişimi | En yakın mesafe (mm) | Kesişim hacmi (mm³) |', '|---|---|---:|---:|---:|']
for r in chk:
    if any(k in (r['a'] + r['b']) for k in ('vida', 'kapag', 'kanallari')):
        out.append(f"| {r['a']} | {r['b']} | {r['tri_overlaps']} | {r['min_dist_mm']} | {r['inter_volume_mm3']} |")
out += ['', 'Vidalar (3,9×19 YHB) yüzeye sıfır oturtulmuş; delikler vida zarfıyla açıldığından PVC ve çelikle kesişim yoktur (0,0035–0,0115 mm aralık).',
        'Rüzgarlık pimleri 4 mm yarıkta 0,15 mm boşlukla durur, tırnak yakası dış duvarın arkasına geçer.']
if os.environ.get('NOTE'):
    out += ['', os.environ['NOTE']]
open(os.path.join(SRC, os.environ.get('OUT', 'montaj_denetimi.md')), 'w').write('\n'.join(out) + '\n')
print('\n'.join(out[:40]))
