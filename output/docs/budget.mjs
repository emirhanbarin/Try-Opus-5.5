// Teknik dokümantasyonun bütçe tablosu (7.1) için ölçüm: her durumda çizilen karenin üçgen ve çizim çağrısı sayısı
// kullanım: xvfb-run -a node budget.mjs [site adresi]
//   varsayılan adres http://127.0.0.1:8091 (önce: cd ../site && python3 -m http.server 8091); playwright-core gerekir
//   (shots.mjs gibi, playwright-core'un kurulu olduğu klasöre kopyalanıp orada da çalıştırılabilir)
// Görünüm 1600 × 900, piksel oranı 1. "en çok" değeri, durum kurulduktan sonraki bekleme boyunca görülen en yüksek değerdir.
import { chromium } from 'playwright-core';

const base = (process.argv[2] || 'http://127.0.0.1:8091').replace(/\/$/, '');
const browser = await chromium.launch({ executablePath: process.env.CHROMIUM || '/opt/pw-browsers/chromium', headless: false,
  args: ['--use-gl=angle', '--use-angle=gl', '--ignore-gpu-blocklist', '--disable-gpu-watchdog'] });

async function open(url) {
  const p = await browser.newPage({ viewport: { width: 1600, height: 900 }, deviceScaleFactor: 1 });
  p.on('pageerror', (e) => console.log('pageerror', e.message));
  await p.goto(`${base}/${url}`, { waitUntil: 'load' });
  await p.waitForSelector('#loader.done', { timeout: 300000, state: 'attached' });
  await p.waitForTimeout(12000);                       // yazılımsal GL'de açılış sonrası takılma
  return p;
}

// ---- köşe sayfası
const p = await open('index.html?intro=0&spin=0');
const ev = (fn, a) => p.evaluate(fn, a);
const settle = () => p.waitForFunction(() => !window.__viewer.state.camAnim && !window.__viewer.state.explodeAnim, null, { timeout: 60000 }).catch(() => {});
async function measure(name, wait = 3000) {
  await settle();
  await ev(() => { const v = window.__viewer; v.lastInfo.maxTris = 0; v.lastInfo.maxCalls = 0; v.app.requestRender(); });
  await p.waitForTimeout(wait);
  const r = await ev(() => ({ ...window.__viewer.lastInfo }));
  console.log(`${name.padEnd(46)} ${String(r.tris).padStart(7)} üçgen ${String(r.calls).padStart(3)} çağrı   (en çok ${r.maxTris} / ${r.maxCalls})`);
}
const reset = async () => { await ev(() => window.__viewer.app.resetAll()); await settle(); await p.waitForTimeout(1500); };

await measure('duruş (açılış görünümü)');
await ev(() => window.__viewer.app.setClip('x', 150));
await measure('kesit X = 150 (canlı kesitle)');
await ev(() => window.__viewer.app.setClip('d', 0));
await measure('kesit: gönye');
await reset();
await ev(() => window.__viewer.modules.thermal.setOn(true));
await p.waitForFunction(() => window.__viewer.modules.thermal.k === 1, null, { timeout: 30000 }).catch(() => {});
await measure('ısı haritası (kamara dolgusuyla)');
await ev(() => { const a = window.__viewer.app; a.setClip('x', 150); a.modules.measure.setOn(true); });
await measure('ısı haritası + kesit X = 150 + ölçüm');
await reset();
await ev(() => window.__viewer.modules.config.open({ W: 1200, H: 1400, type: 'ice' }));
await p.waitForFunction(() => !window.__viewer.modules.config.grow, null, { timeout: 60000 }).catch(() => {});
await measure('tam pencere: içe açılır 1200 × 1400');
await ev(() => window.__viewer.modules.config.open({ W: 900, H: 1300, type: 'cift' }));
await p.waitForFunction(() => { const c = window.__viewer.modules.config; return !c.grow && !c.pending; }, null, { timeout: 60000 }).catch(() => {});
await measure('tam pencere: çift açılım 900 × 1300');
await reset();
await ev(() => { const a = window.__viewer.app; a.setDims(true); a.setDrawing(true); a.setHotspots(true); window.__viewer.modules.water.start(); });
await measure('en yoğun: su + çizim + ölçüler + işaretler', 8000);
await p.close();

// ---- düz kesit sayfası (renderer.info son çizilen kareyi verir)
const s = await open('kesit.html');
await s.waitForTimeout(3000);
const r = await s.evaluate(() => ({ ...window.__viewer.renderer.info.render }));
console.log(`${'düz kesit: açılış'.padEnd(46)} ${String(r.triangles).padStart(7)} üçgen ${String(r.calls).padStart(3)} çağrı`);
await browser.close();
