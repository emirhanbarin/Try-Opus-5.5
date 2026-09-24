// Köşeden pencereye: dökümandan hesaplanan imalat bilgileri. Her kural sayfa referanslıdır; saf işlevler (DOM ve
// three.js yok): scripts/test_configurator.mjs Node ile doğrudan dener.
// Ölçüler mm. W × H = kasa dış ölçüsü (s.5 "kasadan kasaya"). Kanat dış ölçüsü W − 80 × H − 80: s.9 kesitinde kanat
// dış kenarı kasa dış kenarından 40 mm içeride (kesim boyu D − 74, köşe başına 3 mm kaynak payıyla).

export const LIMITS = { min: 620, maxW: 2000, maxH: 2400 };   // arayüz sınırı: numune köşesi (300 × 300) sığmalı
export const SASH_INSET = 40;                             // s.9: kanat dış kenarı, kasa dış kenarından

// s.5 kesim tablosu, "kasadan kasaya" sütunu (D = kasa dış ölçüsü)
export const CUT = [
  { key: 'frame', label: 'Kasa profili', add: 6, count: 2, src: 's.5' },
  { key: 'sash', label: 'Kanat profili', add: -74, count: 2, src: 's.5' },
  { key: 'glass', label: 'Kanat içi cam', add: -202, src: 's.5' },
];
// takviye (destek sacı) kesim boyu: A = profil kesim boyu (s.10 kasa, s.11 kanat)
export const STEEL = { frame: { sub: 153, src: 's.10' }, sash: { sub: 160, src: 's.11' } };
// drenaj kanalı adedi, C = yatay profil boyu; sınır değerde üst sınıf alınır (döküman sınırı tanımlamaz)
export const DRAIN = {
  frame: { steps: [[500, 1], [1000, 2], [2000, 3]], max: 4, src: 's.8' },
  sash: { steps: [[500, 1], [1000, 2]], max: 3, src: 's.11' },
  layout: [10, 32, 70, 32],                               // iç köşeden: 10 · yarık 32 · 70 · yarık 32 (s.8, s.11)
  ref: { frame: 74, sash: 102 },                          // iç köşe referansı: dış görünüş çizgisi (numunedeki varsayım)
};
// menteşe (içe açılır, s.17): A = kanat yüksekliği; üstten ve alttan 165 mm, ikinci menteşe ilkinin 350 mm altında,
// kalanlar eşit aralıklı
export const HINGE = { steps: [[1100, 2], [1400, 3]], max: 4, edge: 165, second: 350, src: 's.17' };
export const HANDLE = { frac: 0.5, axis: 33, src: 's.17 (A/2), s.11 (kanat kenarından 33 mm)' };
// çift açılım donanımı (s.24): aralıklar kanat ölçüsüyle karşılaştırılır (döküman ölçü tanımını vermez)
export const GRM = [
  { name: 'GRM 920 S', code: '5011113067', min: 460, max: 920 },
  { name: 'GRM 1050', code: '5011110360', min: 550, max: 1050 },
  { name: 'GRM 1300/1', code: '5011110386', min: 800, max: 1300 },
  { name: 'GRM 1600/1', code: '5011110394', min: 1100, max: 1600 },
  { name: 'GRM 1800/2', code: '5011110402', min: 1300, max: 1800 },
  { name: 'GRM 2300/2', code: '5011110410', min: 1800, max: 2300 },
];
export const OR = [
  { name: 'OR 625/0', code: '5031110147', min: 420, max: 600 },
  { name: 'OR 800/0', code: '501110154', min: 600, max: 800 },    // kod dökümanda bu haliyle (bir basamak eksik görünür)
  { name: 'OR 1025/1', code: '5031110188', min: 775, max: 1025 },
  { name: 'OR 1250/1', code: '5031110196', min: 1000, max: 1250 },
  { name: 'OR 1450/1', code: '5031110204', min: 1225, max: 1475 },
];
export const TYPES = {
  ice: { label: 'İçe açılır', src: 's.17' },
  cift: { label: 'Çift açılım', src: 's.24' },
};

const classify = (v, t) => { for (const [lim, n] of t.steps) if (v < lim) return n; return t.max; };
export const drainCount = (kind, C) => classify(C, DRAIN[kind]);
export const hingeCount = (A) => classify(A, HINGE);

// menteşe merkezleri: kanat alt kenarından yükseklik (mm), yukarıdan aşağı
export function hingePositions(A) {
  const n = hingeCount(A), top = A - HINGE.edge, bottom = HINGE.edge;
  if (n === 2) return [top, bottom];
  const second = top - HINGE.second;
  if (n === 3) return [top, second, bottom];
  return [top, second, (second + bottom) / 2, bottom];
}
// drenaj yarıkları: pencere x koordinatında (kasa dış köşesinden, mm) yarık merkezleri. Adet profil boyuna göre
// (kasa W, kanat W − 80); uçlarda s.8 düzeni (iç köşe referansından 10 · 32 · 70 · 32, numunedeki gibi), aradaki
// kanallar eşit aralıklı (varsayım). Her kanal iki yarıktır (iç ve dış, 102 mm merkezden merkeze).
export function drainSlots(kind, W) {
  const L = kind === 'frame' ? W : W - 2 * SASH_INSET;
  const n = drainCount(kind, L), [a, s, g] = DRAIN.layout, ref = DRAIN.ref[kind];
  const first = ref + a + s / 2, step = s + g;               // sol uçtaki iç köşe yarığı ve 102 mm ötesi
  const pairs = [];
  if (n === 1) pairs.push([W / 2 - step / 2, W / 2 + step / 2]);
  else {
    pairs.push([first, first + step], [W - first - step, W - first]);
    for (let i = 1; i < n - 1; i++) { const c = first + ((W - 2 * first) * i) / (n - 1); pairs.push([c - step / 2, c + step / 2]); }
  }
  return { n, L, pairs: pairs.sort((p, q) => p[0] - q[0]) };
}
const fits = (list, v) => list.filter((x) => v >= x.min && v <= x.max);

export function computeWindow({ W, H, type = 'ice' }) {
  const warn = [];
  if (W < LIMITS.min || H < LIMITS.min) warn.push(`En küçük ölçü ${LIMITS.min} mm (numune köşesi 300 × 300 mm).`);
  const sashW = W - 2 * SASH_INSET, sashH = H - 2 * SASH_INSET;
  const cut = [
    { label: 'Kasa · yatay', len: W + 6, count: 2, src: 's.5' },
    { label: 'Kasa · düşey', len: H + 6, count: 2, src: 's.5' },
    { label: 'Kanat · yatay', len: W - 74, count: 2, src: 's.5' },
    { label: 'Kanat · düşey', len: H - 74, count: 2, src: 's.5' },
    { label: 'Kasa takviyesi · yatay', len: W + 6 - STEEL.frame.sub, count: 2, src: 's.10 (A − 153)' },
    { label: 'Kasa takviyesi · düşey', len: H + 6 - STEEL.frame.sub, count: 2, src: 's.10 (A − 153)' },
    { label: 'Kanat takviyesi · yatay', len: W - 74 - STEEL.sash.sub, count: 2, src: 's.11 (A − 160)' },
    { label: 'Kanat takviyesi · düşey', len: H - 74 - STEEL.sash.sub, count: 2, src: 's.11 (A − 160)' },
  ];
  const glass = { w: W - 202, h: H - 202, src: 's.5' };
  const drain = { frame: drainSlots('frame', W), sash: drainSlots('sash', W) };
  const out = { W, H, type, sashW, sashH, cut, glass, drain, warn };
  if (type === 'ice') {
    out.hinges = { n: hingeCount(sashH), pos: hingePositions(sashH), src: HINGE.src };
  } else {
    const g = fits(GRM, sashH), o = fits(OR, sashW);
    out.grm = g; out.or = o;
    if (!g.length) warn.push(`Kanat yüksekliği ${sashH} mm için s.24'te ispanyolet yok (460–2300 mm).`);
    if (!o.length) warn.push(`Kanat genişliği ${sashW} mm için s.24'te makas yok (420–1475 mm).`);
  }
  out.handle = { y: SASH_INSET + sashH * HANDLE.frac, x: SASH_INSET + HANDLE.axis, src: HANDLE.src };
  return out;
}

export const fmtMM = (v) => Math.round(v).toLocaleString('tr-TR') + ' mm';
