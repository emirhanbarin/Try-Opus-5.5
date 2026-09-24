// Köşeden pencereye hesaplarının tarayıcısız denetimi (Node): s.5, s.8, s.10, s.11, s.17 ve s.24 tablolarından örnek
// ölçüler, sınır değerler ve aralık dışı uyarılar. Yarık konumları numunenin kose_info.json değerleriyle karşılaştırılır.
// kullanım: node test_configurator.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { computeWindow, drainCount, hingeCount, hingePositions, drainSlots, GRM, OR } from '../viewer-kose/js/configurator-data.js';

const here = path.dirname(fileURLToPath(import.meta.url));
const info = JSON.parse(fs.readFileSync(path.join(here, '..', 'kose_info.json'), 'utf8'));
const results = [];
const check = (name, ok, detail = '') => { results.push(ok); console.log((ok ? 'PASS ' : 'FAIL ') + name + (detail ? ' — ' + detail : '')); };
const eq = (a, b) => JSON.stringify(a) === JSON.stringify(b);

// s.5 kesim tablosu (kasadan kasaya): kasa D + 6, kanat D − 74, kanat içi cam D − 202; s.10 / s.11 takviye A − 153 / A − 160
const c = computeWindow({ W: 1200, H: 1400, type: 'ice' });
const len = (label) => c.cut.find((r) => r.label === label).len;
check('s.5 kasa D + 6', len('Kasa · yatay') === 1206 && len('Kasa · düşey') === 1406);
check('s.5 kanat D − 74', len('Kanat · yatay') === 1126 && len('Kanat · düşey') === 1326);
check('s.5 kanat içi cam D − 202', c.glass.w === 998 && c.glass.h === 1198);
check('s.10 kasa takviyesi A − 153 (A = kesim boyu)', len('Kasa takviyesi · yatay') === 1206 - 153 && len('Kasa takviyesi · düşey') === 1406 - 153);
check('s.11 kanat takviyesi A − 160', len('Kanat takviyesi · yatay') === 1126 - 160 && len('Kanat takviyesi · düşey') === 1326 - 160);
check('kanat dış ölçüsü W − 80 × H − 80 (s.9 kesiti: 40 mm)', c.sashW === 1120 && c.sashH === 1320);

// s.8 kasa drenaj adedi: C < 500: 1 · 500–1000: 2 · 1000–2000: 3 · > 2000: 4 (sınırda üst sınıf)
const fr = [[499, 1], [500, 2], [999, 2], [1000, 3], [1999, 3], [2000, 4], [2400, 4]].map(([C, n]) => [C, drainCount('frame', C), n]);
check('s.8 kasa drenaj kanalı adedi ve sınırlar', fr.every(([, a, b]) => a === b), fr.map(([C, a]) => `${C}:${a}`).join(' '));
// s.11 kanat: C < 500: 1 · 500–1000: 2 · > 1000: 3
const sa = [[499, 1], [500, 2], [999, 2], [1000, 3], [1920, 3]].map(([C, n]) => [C, drainCount('sash', C), n]);
check('s.11 kanat drenaj kanalı adedi ve sınırlar', sa.every(([, a, b]) => a === b), sa.map(([C, a]) => `${C}:${a}`).join(' '));
// yarık yerleri: sol uç numunedeki yarıklarla aynı (kose_info.json: D-E, C kasada; B, A kanatta)
const df = drainSlots('frame', 1200), ds = drainSlots('sash', 1200);
check('yarık yerleri numuneyle aynı (kasa D-E 100, C 202; kanat B 128, A 230)',
  eq(df.pairs[0], [info.X_DE, info.X_C]) && eq(ds.pairs[0], [info.X_B, info.X_A]), JSON.stringify({ kasa: df.pairs[0], kanat: ds.pairs[0] }));
check('sağ uç ayna düzen (kasa W − 202, W − 100)', eq(df.pairs[df.pairs.length - 1], [1200 - 202, 1200 - 100]));
check('3 kanalda orta kanal ortada', Math.abs((df.pairs[1][0] + df.pairs[1][1]) / 2 - 600) < 1e-9);

// s.17 menteşe adedi: A < 1100: 2 · 1101–1400: 3 · > 1400: 4 (sınırda üst sınıf); konumlar 165 / 350 / eşit / 165
const hg = [[1099, 2], [1100, 3], [1399, 3], [1400, 4], [2000, 4]].map(([A, n]) => [A, hingeCount(A), n]);
check('s.17 menteşe adedi ve sınırlar', hg.every(([, a, b]) => a === b), hg.map(([A, a]) => `${A}:${a}`).join(' '));
check('s.17 iki menteşe: üstten ve alttan 165 mm', eq(hingePositions(900), [735, 165]));
check('s.17 üç menteşe: ikincisi ilkinin 350 mm altında', eq(hingePositions(1320), [1155, 805, 165]));
const h4 = hingePositions(1800);
check('s.17 dört menteşe: kalanlar eşit aralıklı', eq(h4, [1635, 1285, 725, 165]) && Math.abs((h4[1] - h4[2]) - (h4[2] - h4[3])) < 1e-9, JSON.stringify(h4));
check('s.17 / s.11 kol: A/2, kanat kenarından 33 mm', c.handle.y === 40 + 660 && c.handle.x === 40 + 33);

// s.24 çift açılım: ispanyolet (kanat yüksekliği) ve makas (kanat genişliği) aralıkları
const names = (list) => list.map((x) => x.name);
const k1 = computeWindow({ W: 800, H: 1000, type: 'cift' });        // kanat 720 × 920
check('s.24 ispanyolet 920 mm: GRM 920 S, 1050, 1300/1', eq(names(k1.grm), ['GRM 920 S', 'GRM 1050', 'GRM 1300/1']));
check('s.24 makas 720 mm: OR 800/0', eq(names(k1.or), ['OR 800/0']));
const k2 = computeWindow({ W: 1001, H: 1001, type: 'cift' });       // kanat 921: GRM 920 S dışarıda kalır
check('s.24 üst sınır: 921 mm GRM 920 S dışında', !names(k2.grm).includes('GRM 920 S') && names(k2.grm).includes('GRM 1050'));
const k3 = computeWindow({ W: 1555, H: 2380, type: 'cift' });       // kanat 1475 × 2300: son sınıflar
check('s.24 sınırda: 2300 mm GRM 2300/2, 1475 mm OR 1450/1', names(k3.grm).includes('GRM 2300/2') && names(k3.or).includes('OR 1450/1') && !k3.warn.length);
const k4 = computeWindow({ W: 1556, H: 2381, type: 'cift' });       // kanat 1476 × 2301: aralık dışı
check('s.24 aralık dışı uyarıları', !k4.grm.length && !k4.or.length && k4.warn.length === 2, k4.warn.join(' | '));
check('s.24 tablo sürekli (boşluk yok)', GRM.every((g, i) => i === 0 || g.min <= GRM[i - 1].max) && OR.every((o, i) => i === 0 || o.min <= OR[i - 1].max));
const k5 = computeWindow({ W: 600, H: 700 });
check('en küçük ölçü uyarısı (620 mm)', k5.warn.some((w) => w.includes('620')));

const ok = results.filter(Boolean).length;
console.log(`\n${ok}/${results.length} kontrol geçti`);
process.exit(ok === results.length ? 0 : 1);
