# -*- coding: utf-8 -*-
"""Kesitte 2B kararlı ısı iletimi (EN ISO 10077-2 yöntemi) -> ısı haritası dokusu + iç doğrulama.

Gösterim amaçlıdır: resmi değer, ift Rosenheim test belgesindeki Uf = 1,0 W/(m²K)'dir (EN 12412-2).
Bu hesabın Uf sonucu arayüzde gösterilmez; yalnızca modelin tutarlılığı için resmi değerle karşılaştırılır.

Yöntem:
- Kesit poligonları: section_mm.json (PDF s.9). Izgara 0,1 mm (gösterim) / 0,25 mm (Uf denetimi), sonlu farklar,
  hücreler arası harmonik ortalama iletkenlik, scipy spsolve.
- Malzemeler (W/(m·K), EN ISO 10077-2 tablo değerleri): sert PVC 0,17 · EPDM 0,25 · yumuşak PVC (çıta dudağı) 0,14 ·
  çelik 50 · PP (takoz köprüsü) 0,22. Isıcam, standarttaki gibi λ = 0,035 yalıtım paneliyle değiştirilir (32 mm).
- Kapalı hava boşlukları: havalandırmasız boşluk eşdeğer iletkenliği (§6.4.2): λ_eq = b (h_a + h_r);
  h_a = C1/b (b < 5 mm) ya da max(C1/b, C2 ΔT^(1/3)), C1 = 0,025, C2 = 0,73, ΔT = 10 K;
  h_r = 4 σ Tm³ E F, E = 1/(2/ε - 1), ε = 0,9, F = ½ (1 + √(1 + d²/b²) - d/b), Tm = 283 K.
  b: ısı akışı (sx) yönündeki boyut, d: dik boyut (sınırlayıcı dikdörtgen, alan korunarak).
- Sınırlar: iç 20 °C, Rsi 0,13; dış 0 °C, Rse 0,04; duvar tarafı (kasa altı) ve panelin üst kesimi adyabatik.
Çıktılar:
- ../site/assets/kose/isi.ktx2 (R16 yarım kayan nokta, zstd): T/20 °C, 0,2 mm/piksel; kenar pikselleri komşu katı
  sıcaklığıyla doldurulur. 8 bit yerine 16 bit (1/1024 basamak): eş sıcaklık çizgileri bayt basamaklarına denk gelip tırtıklanmaz.
  bake/isi.png yalnızca 8 bit önizlemedir.
- ../viewer-kose/js/thermal-data.js: doku kutusu (mm) ve açıklama bilgisi.
- thermal_check.json: enerji dengesi, ızgara yakınsaması, hesaplanan Uf (yalnızca denetim).
kullanım: python3 thermal_section.py [--no-ktx]
"""
import json, os, subprocess, sys, time
import numpy as np
from scipy import sparse, ndimage
from scipy.sparse.linalg import spsolve
import shapely
from shapely.geometry import Polygon, box
from PIL import Image

HERE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(HERE, '..')
SITE = os.path.join(SRC, '..', 'site')
sec = json.load(open(os.path.join(SRC, 'section_mm.json')))

LAM = {'pvc': 0.17, 'epdm': 0.25, 'tpe': 0.14, 'steel': 50.0, 'pp': 0.22, 'panel': 0.035}
KEYS = [  # öncelik sırası: sonraki öncekinin üzerine yazar
    ('frame', 'pvc'), ('sash', 'pvc'), ('bead', 'pvc'),
    ('gasket_frame_ext', 'epdm'), ('gasket_middle', 'epdm'), ('gasket_interior', 'epdm'), ('gasket_glazing_ext', 'epdm'),
    ('bead_lip_top', 'tpe'), ('bead_lip_bot', 'tpe'), ('bridge', 'pp'),
    ('steel_frame', 'steel'), ('steel_sash', 'steel'),
]
T_IN, T_OUT, RSI, RSE = 20.0, 0.0, 0.13, 0.04
GLZ = (min(sec['glass1']['exterior'], key=lambda p: p[0])[0], max(sec['glass3']['exterior'], key=lambda p: p[0])[0],
       min(p[1] for p in sec['glass1']['exterior']))          # ısıcam: sx0, sx1, alt kenar sy
SIGHT = 124.0                                                  # görünür yükseklik (s.9): kasa + kanat üst kenarı


def cavity_lambda(b_mm, d_mm):
    """EN ISO 10077-2 §6.4.2 havalandırmasız boşluk, yatay ısı akışı."""
    b, d = max(b_mm, 0.05) / 1000.0, max(d_mm, 0.05) / 1000.0
    C1, C2, dT, sigma, Tm, eps = 0.025, 0.73, 10.0, 5.67e-8, 283.0, 0.9
    ha = C1 / b if b < 0.005 else max(C1 / b, C2 * dT ** (1 / 3))
    E = 1.0 / (2.0 / eps - 1.0)
    F = 0.5 * (1 + np.sqrt(1 + (d / b) ** 2) - d / b)
    hr = 4 * sigma * Tm ** 3 * E * F
    return b * (ha + hr)


def build(h, sy_top, x0=-1.0, x1=106.0, y0=-1.0):
    nx, ny = int(round((x1 - x0) / h)), int(round((sy_top - y0) / h))
    xs = x0 + (np.arange(nx) + 0.5) * h; ys = y0 + (np.arange(ny) + 0.5) * h
    X, Y = np.meshgrid(xs, ys)                                 # satır: sy, sütun: sx
    lam = np.zeros((ny, nx)); kind = np.zeros((ny, nx), np.int8)   # 0 hava, 1 katı
    for key, mat in KEYS:
        poly = Polygon(sec[key]['exterior'], sec[key]['holes'])
        m = shapely.contains_xy(poly, X, Y)
        lam[m] = LAM[mat]; kind[m] = 1
    # ısıcam yerine yalıtım paneli (EN ISO 10077-2)
    pm = (X >= GLZ[0]) & (X <= GLZ[1]) & (Y >= GLZ[2])
    lam[pm] = LAM['panel']; kind[pm] = 1
    # hava bölgeleri; kasa altındaki montaj derzi (sy < 0,5 mm) adyabatik duvar sayılır: dış ve iç hava alttan birleşmez
    wall = (kind == 0) & (Y < 0.5)
    air = (kind == 0) & ~wall
    lab, n = ndimage.label(air)
    ext = lab[ny // 2, 0]; inn = lab[ny // 2, nx - 1]
    assert ext and inn and ext != inn, 'dış ve iç hava ayrılamadı'
    role = {}                                                  # etiket -> 'ext' | 'int' | 'adi' | 'cav'
    for L in range(1, n + 1):
        if L == ext: role[L] = 'ext'; continue
        if L == inn: role[L] = 'int'; continue
        ys_, xs_ = np.nonzero(lab == L)
        if y0 + (ys_.min() + 0.5) * h < 0.5 + 2 * h: role[L] = 'adi'; continue   # montaj derzine açık (kasa altı)
        if ys_.max() == ny - 1: role[L] = 'ext' if xs_.mean() * h + x0 < (GLZ[0] + GLZ[1]) / 2 else 'int'; continue
        role[L] = 'cav'
    cav_info = []
    for L, r in role.items():
        if r != 'cav': continue
        m = lab == L
        ys_, xs_ = np.nonzero(m)
        bw, dh = (xs_.max() - xs_.min() + 1) * h, (ys_.max() - ys_.min() + 1) * h
        area = m.sum() * h * h
        s = np.sqrt(area / (bw * dh)) if bw * dh > 0 else 1.0    # alanı koruyan eşdeğer dikdörtgen
        lam[m] = cavity_lambda(bw * s, dh * s); kind[m] = 2
        cav_info.append(round(area, 2))
    ambient = np.zeros((ny, nx), np.int8)                      # 1 dış, 2 iç (yalnızca hava hücreleri)
    for L, r in role.items():
        if r == 'ext': ambient[lab == L] = 1
        elif r == 'int': ambient[lab == L] = 2
    return dict(h=h, x0=x0, y0=y0, nx=nx, ny=ny, lam=lam, kind=kind, ambient=ambient, ncav=len(cav_info), cav=cav_info)


def solve(G):
    h, lam, kind, amb = G['h'] / 1000.0, G['lam'], G['kind'], G['ambient']
    ny, nx = lam.shape
    act = kind > 0
    idx = -np.ones((ny, nx), np.int64); idx[act] = np.arange(act.sum())
    N = int(act.sum())
    rows, cols, vals = [], [], []
    diag = np.zeros(N); rhs = np.zeros(N)
    gin = np.zeros(N); gout = np.zeros(N)
    for dy, dx in ((0, 1), (1, 0)):
        a = act[:ny - dy, :nx - dx]; b = act[dy:, dx:]
        la = lam[:ny - dy, :nx - dx]; lb = lam[dy:, dx:]
        ia = idx[:ny - dy, :nx - dx]; ib = idx[dy:, dx:]
        both = a & b
        k = 2 * la[both] * lb[both] / (la[both] + lb[both])   # harmonik ortalama; hücre yüzü h, mesafe h
        rows += [ia[both], ib[both]]; cols += [ib[both], ia[both]]; vals += [-k, -k]
        np.add.at(diag, ia[both], k); np.add.at(diag, ib[both], k)
        # katı / boşluk - ortam yüzeyleri
        for src_act, src_idx, src_lam, oth_amb in ((a & ~b, ia, la, amb[dy:, dx:]), (b & ~a, ib, lb, amb[:ny - dy, :nx - dx])):
            for code, Tamb, Rs, acc in ((1, T_OUT, RSE, gout), (2, T_IN, RSI, gin)):
                m = src_act & (oth_amb == code)
                i = src_idx[m]; g = h / (Rs + (h / 2) / src_lam[m])
                np.add.at(diag, i, g); np.add.at(rhs, i, g * Tamb); np.add.at(acc, i, g)
    A = sparse.coo_matrix((np.concatenate(vals + [diag]), (np.concatenate(rows + [np.arange(N)]), np.concatenate(cols + [np.arange(N)]))), shape=(N, N)).tocsr()
    T = spsolve(A, rhs)
    q_in = float(np.sum(gin * (T_IN - T))); q_out = float(np.sum(gout * (T - T_OUT)))
    field = np.full((ny, nx), np.nan); field[act] = T
    return field, q_in, q_out


def main():
    t0 = time.time()
    # --- gösterim: 0,1 mm, panel üst kesimi 140 mm (adyabatik)
    G = build(0.1, 140.0)
    T, qi, qo = solve(G)
    print('gösterim: %d x %d, %d kamara/boşluk, çözüm %.1f sn, Q_iç %.4f Q_dış %.4f W/m (fark %.2f%%)' %
          (G['nx'], G['ny'], G['ncav'], time.time() - t0, qi, qo, 100 * abs(qi - qo) / qi))
    # yakınsama: 0,2 mm
    G2 = build(0.2, 140.0); T2, qi2, qo2 = solve(G2)
    # --- Uf denetimi: panel görünür kenardan 190 mm (EN ISO 10077-2), 0,25 mm
    top = SIGHT + 190.0
    G3 = build(0.25, top); T3, qi3, qo3 = solve(G3)
    L2D = qi3 / (T_IN - T_OUT)
    Up = 1.0 / (RSI + 0.032 / LAM['panel'] + RSE)
    Uf = (L2D - Up * 0.190) / (SIGHT / 1000.0)
    print('Uf denetimi (yalnızca iç karşılaştırma): L2D %.4f W/(m·K), Up %.3f, Uf ≈ %.2f W/(m²K); resmi (ift) 1,0' % (L2D, Up, Uf))
    # --- doku: 0,2 mm, T/20; katı olmayan pikseller en yakın katı sıcaklığıyla doldurulur (süzmede kenar halkası olmasın)
    f = T.reshape(G['ny'] // 2, 2, G['nx'] // 2, 2)
    with np.errstate(invalid='ignore'):
        Td = np.nanmean(f, axis=(1, 3))
    miss = np.isnan(Td)
    if miss.any():
        _, (iy, ix) = ndimage.distance_transform_edt(miss, return_indices=True)
        Td = Td[iy, ix]
    tn = np.clip(Td / (T_IN - T_OUT), 0, 1)[::-1]                    # üst satır = en büyük sy
    img = np.round(tn * 255).astype(np.uint8)
    tex_png = os.path.join(SRC, 'bake', 'isi.png')
    Image.fromarray(img, 'L').save(tex_png)
    # 1/1024 basamak (≈0,02 °C), yarım basamak kaydırılmış: 2 °C / 10 °C eş sıcaklık değerleri hiçbir düzleme denk gelmez
    # (düzlükte çizgi yayılmaz); anlamsız alt bitler sıfırlandığı için zstd ~75 KB'a sıkıştırır
    tq = np.minimum(np.floor(tn * 1024) + 0.5, 1023.5) / 1024
    tex_raw = os.path.join(SRC, 'bake', 'isi_r16f.raw')
    np.ascontiguousarray(tq.astype('<f2')).tofile(tex_raw)
    hpx = 0.2
    box_mm = [G['x0'], G['y0'], img.shape[1] * hpx, img.shape[0] * hpx]
    # 10 °C eş sıcaklık konumu (kontrol): kasa iç yüzüne yakın en düşük yüzey sıcaklığı
    act = G['kind'] > 0
    near_in = ndimage.binary_dilation(G['ambient'] == 2) & act
    tmin_in = float(np.nanmin(T[near_in]))
    report = dict(grid_mm=0.1, cells=[G['nx'], G['ny']], cavities=G['ncav'], q_in=qi, q_out=qo,
                  energy_balance_pct=100 * abs(qi - qo) / qi, q_in_0_2mm=qi2, grid_change_pct=100 * abs(qi - qi2) / qi,
                  uf_check=dict(L2D=L2D, Up=Up, Uf=Uf, official_Uf=1.0, note='yalnızca iç denetim; arayüzde gösterilmez'),
                  min_interior_surface_C=tmin_in, texture=dict(file='assets/kose/isi.ktx2', box_mm=box_mm, px_mm=hpx, size=list(img.shape[::-1])))
    json.dump(report, open(os.path.join(SRC, 'thermal_check.json'), 'w'), indent=1)
    print('ızgara 0,1 → 0,2 mm akı farkı %.2f%%; iç yüzey en düşük %.1f °C; doku %s' % (report['grid_change_pct'], tmin_in, img.shape[::-1]))
    with open(os.path.join(SRC, 'viewer-kose', 'js', 'thermal-data.js'), 'w') as fh:
        fh.write('// Otomatik üretildi: scripts/thermal_section.py. Isı haritası dokusu (assets/kose/isi.ktx2) için kesit kutusu (mm).\n')
        fh.write('// Değer = T / 20 °C (iç 20 °C, dış 0 °C). EN ISO 10077-2 yöntemi, gösterim amaçlı 2B hesap.\n')
        fh.write('export const THERMAL = ' + json.dumps(dict(box=[round(v, 3) for v in box_mm], tIn=T_IN, tOut=T_OUT, minInC=round(tmin_in, 1))) + ';\n')
    if '--no-ktx' not in sys.argv:
        ktx = os.environ.get('KTX', 'ktx')
        out = os.path.join(SITE, 'assets', 'kose', 'isi.ktx2')
        subprocess.check_call([ktx, 'create', '--format', 'R16_SFLOAT', '--raw', '--width', str(img.shape[1]), '--height', str(img.shape[0]),
                               '--assign-oetf', 'linear', '--zstd', '20', tex_raw, out])
        print('yazıldı', out, os.path.getsize(out), 'bayt')


if __name__ == '__main__':
    main()
