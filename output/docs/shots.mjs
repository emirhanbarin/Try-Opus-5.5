// Teknik dokümantasyon için ekran görüntüleri: çalışan siteden tutarlı bir set (1600 × 900, JPEG) alır → img/
// kullanım: OUT=<img klasörü> xvfb-run -a node shots.mjs [site adresi]
//   varsayılan adres http://127.0.0.1:8091 (önce: cd ../site && python3 -m http.server 8091); playwright-core gerekir
//   (betik, playwright-core'un kurulu olduğu klasöre kopyalanıp orada da çalıştırılabilir; OUT bu yüzden ayrı verilir)
// Yazılımsal GL'de açılıştan sonra birkaç saniyelik takılma olur; betik bu yüzden her sayfada ısınma süresi bekler.
import { chromium } from 'playwright-core';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const base = (process.argv[2] || 'http://127.0.0.1:8091').replace(/\/$/, '');
const out = process.env.OUT || path.join(here, 'img');
fs.mkdirSync(out, { recursive: true });
const browser = await chromium.launch({ executablePath: process.env.CHROMIUM || '/opt/pw-browsers/chromium', headless: false,
  args: ['--use-gl=angle', '--use-angle=gl', '--ignore-gpu-blocklist', '--disable-gpu-watchdog'] });

async function open(url, viewport = { width: 1600, height: 900 }) {
  const p = await browser.newPage({ viewport, deviceScaleFactor: 1 });
  p.on('pageerror', (e) => console.log('pageerror', e.message));
  await p.goto(`${base}/${url}`, { waitUntil: 'load' });
  await p.waitForSelector('#loader.done', { timeout: 300000, state: 'attached' });
  await p.addStyleTag({ content: '#perfChip{visibility:hidden}' });
  await p.evaluate(() => { const pp = document.getElementById('partsPanel'); if (pp) { pp.classList.add('collapsed'); const b = document.getElementById('btnPartsOpen'); if (b) b.hidden = false; } });
  await p.waitForTimeout(12000);
  return p;
}
const settle = (p) => p.waitForFunction(() => { const v = window.__viewer; return !v.state.camAnim && !v.state.explodeAnim; }, null, { timeout: 60000 }).catch(() => {});
async function shot(p, name, wait = 3000, el = null) {
  await settle(p); await p.waitForTimeout(wait);
  const file = path.join(out, name + '.jpg');
  if (el) await p.locator(el).screenshot({ path: file, type: 'jpeg', quality: 88 });
  else await p.screenshot({ path: file, type: 'jpeg', quality: 82 });
  const info = await p.evaluate(() => window.__viewer?.lastInfo ? { calls: window.__viewer.lastInfo.calls, tris: window.__viewer.lastInfo.tris } : null);
  console.log(name, JSON.stringify(info));
}
const reset = (p) => p.evaluate(() => window.__viewer.app.resetAll()).then(() => settle(p));

// ---- kapak görseli: arayüz gizli, kapaktaki alanın oranında (210 × 150 mm)
const c = await open('index.html?intro=0&spin=0', { width: 1400, height: 1000 });
await c.addStyleTag({ content: 'body > :not(#scene) { visibility: hidden !important; }' });
await c.waitForTimeout(2000);
await c.screenshot({ path: path.join(out, '00_kapak.jpg'), type: 'jpeg', quality: 88 });
console.log('00_kapak');
await c.close();

// ---- köşe sayfası
const p = await open('index.html?intro=0&spin=0');
const ev = (fn, a) => p.evaluate(fn, a);
await shot(p, '01_kose_acilis');
await ev(() => { const a = window.__viewer.app; a.setClip('d', 0); a.setView('weld'); });
await shot(p, '02_gonye_kesit');
await reset(p);
await ev(() => { const a = window.__viewer.app; a.setDims(true); a.setDrawing(true); });
await shot(p, '03_cizim_bindirme');
await reset(p);
await ev(() => window.__viewer.setExplodeTarget(1, true));
await shot(p, '04_patlatma', 4000);
await reset(p);
// tur bölümleri: su tahliyesi ve üretim hikâyesinin kaynak adımı
await ev(() => { const t = window.__viewer.modules.tour; t.start(); t.goTo(t.ids.indexOf('su')); t.pause(true); });
await shot(p, '05_su_tahliyesi', 6000);
await ev(() => { const t = window.__viewer.modules.tour; t.goTo(t.ids.indexOf('uretim')); t.pause(true); });
await p.waitForTimeout(2500);
await ev(() => { window.__viewer.modules.story.t = 23; });
await shot(p, '06_uretim_kaynak', 4000);
await ev(() => window.__viewer.modules.tour.stop(false));
await reset(p);
await ev(() => window.__viewer.modules.lens.setOn(true));
await shot(p, '07_rontgen');
await reset(p);
await ev(() => window.__viewer.app.runChambers());
await p.waitForFunction(() => !window.__viewer.modules.chambers.anim, null, { timeout: 120000 }).catch(() => {});
await shot(p, '08_kamara', 2000);
await reset(p);
await ev(() => { const a = window.__viewer.app; a.setView('hero', true); a.setCompare(true); });
await shot(p, '09_renk_perdesi');
await ev(() => window.__viewer.app.setCompare(false));
await reset(p);
// mühendislik araçları
await ev(() => window.__viewer.modules.thermal.setOn(true));
await p.waitForFunction(() => window.__viewer.modules.thermal.k === 1, null, { timeout: 30000 }).catch(() => {});
await shot(p, '10_isi_haritasi');
await ev(() => { const a = window.__viewer.app; a.setClip('x', 150); a.setView({ dir: [1, 0.35, 0.6], r: 0.12, target: [0.0, 0.07, 0] }); });
await shot(p, '11_isi_kesit_canli', 4000);
await shot(p, '11b_canli_kesit_isi_yakin', 500, '#secInset');
await reset(p);
await ev(() => { const a = window.__viewer.app; a.setClip('x', 230); a.setView('end'); });
await shot(p, '12_canli_kesit', 4000);
await shot(p, '12b_canli_kesit_yakin', 500, '#secInset');
await reset(p);
await ev(() => { const a = window.__viewer.app; a.setView('end', true); a.modules.measure.setOn(true); });
await settle(p); await p.waitForTimeout(2500);
await ev(() => { const a = window.__viewer.app, m = a.modules.measure;
  const at = (sx, sy) => { const v = a.toWorld(300, sy, sx - 52.25).project(a.camera); return [((v.x + 1) / 2) * innerWidth, ((1 - v.y) / 2) * innerHeight]; };
  const p1 = at(0, 20), p2 = at(85, 20); m.tap(p1[0] - 3, p1[1], 'mouse'); m.tap(p2[0] + 3, p2[1], 'mouse'); });
await shot(p, '13_olcum', 2000);
await reset(p);
await ev(() => window.__viewer.modules.config.open({ W: 1200, H: 1400, type: 'ice' }));
await p.waitForFunction(() => !window.__viewer.modules.config.grow, null, { timeout: 60000 }).catch(() => {});
await shot(p, '14_pencere_ice');
await ev(() => window.__viewer.modules.config.open({ W: 900, H: 1300, type: 'cift' }));
await p.waitForFunction(() => { const c = window.__viewer.modules.config; return !c.grow && !c.pending; }, null, { timeout: 60000 }).catch(() => {});
await shot(p, '15_pencere_cift');
await ev(() => window.__viewer.app.setView({ dir: [0.55, 0.3, 1], r: 0.2, target: [0.02, 0.2, 0] }));
await shot(p, '16_pencere_numune_siniri');
await reset(p);
await p.close();

// ---- düz kesit sayfası
const s = await open('kesit.html?intro=0&spin=0');
await shot(s, '17_duz_kesit');
await s.close();

// ---- kiosk tanıtımı (boşta 15 sn sonra)
const k = await open('index.html?kiosk=1&idle=15&fs=0');
await k.waitForFunction(() => window.__viewer.modules.kiosk.attract, null, { timeout: 90000 }).catch(() => {});
await k.waitForTimeout(9000);
await k.screenshot({ path: path.join(out, '18_kiosk_tanitim.jpg'), type: 'jpeg', quality: 82 });
console.log('18_kiosk_tanitim');
await browser.close();
