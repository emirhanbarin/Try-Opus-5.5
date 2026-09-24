// Kiosk dayanıklılık testi: tanıtım (döngülü tur + 360°) modunda uzun süre çalıştırır, bellek ve kaynakları izler.
// kullanım: xvfb-run node kiosk_soak.mjs <url> <dakika> <GxY>
//   ör.: node kiosk_soak.mjs http://localhost:8080/index.html 30 1920x1080
// Geçme koşulu: sayfa hatası yok; GPU kaynakları (geometri, doku, program) ısınmadan sonra sabit;
// JS yığını ve DOM düğüm sayısı sınırlı (ısınma sonrası büyüme < %25 ve < 8 MB).
import { chromium } from 'playwright-core';
const url = process.argv[2] || 'http://localhost:8080/index.html';
const minutes = Number(process.argv[3] || 30);
const [w, h] = (process.argv[4] || '1920x1080').split('x').map(Number);
const soft = process.env.SOFT_GL || 'llvmpipe';
const args = soft === 'swiftshader' ? ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] : ['--use-gl=angle', '--use-angle=gl', '--ignore-gpu-blocklist'];
args.push('--enable-precise-memory-info', '--js-flags=--expose-gc');
// yazılımsal GL'de tek kare saniyeler sürer; GPU gözetçisi bağlamı öldürmesin (gerçek GPU'da gerekmez)
if (soft !== 'none') args.push('--disable-gpu-watchdog');
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium', headless: soft === 'swiftshader', args });
const ctx = await browser.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1, hasTouch: true });
const page = await ctx.newPage();
const errs = []; let navs = 0;
page.on('pageerror', (e) => errs.push(e.message));
page.on('console', (m) => { if (m.type() === 'error') errs.push(m.text()); });
page.on('framenavigated', (f) => { if (f === page.mainFrame()) navs++; });
await page.addInitScript(() => {
  window.__ctxLost = 0;
  addEventListener('webglcontextlost', () => { window.__ctxLost++; console.error('webglcontextlost'); }, true);
});
await page.goto(url + (url.includes('?') ? '&' : '?') + 'kiosk=1&idle=15&fs=0&intro=0&aa=0', { waitUntil: 'load' });
await page.waitForSelector('#loader.done', { timeout: 300000, state: 'attached' });
await page.evaluate(() => { window.__viewer.modules.kiosk.last = performance.now() - 60000; });
const sample = () => page.evaluate(() => {
  if (window.gc) window.gc();
  const v = window.__viewer;
  if (!v || !v.modules.kiosk) return { t: Math.round(performance.now() / 1000), reloading: true };   // sayfa yeniden yükleniyor
  const r = v.renderer.info;
  return { t: Math.round(performance.now() / 1000), ctxLost: window.__ctxLost, heapMB: +(performance.memory.usedJSHeapSize / 1048576).toFixed(2),
    geo: r.memory.geometries, tex: r.memory.textures, prog: r.programs ? r.programs.length : null,
    dom: document.getElementsByTagName('*').length, attract: v.modules.kiosk.attract, ch: v.modules.tour.i,
    tris: v.lastInfo.maxTris, calls: v.lastInfo.maxCalls };
});
const rows = [];
const t0 = Date.now();
while ((Date.now() - t0) / 60000 < minutes) {
  await page.waitForTimeout(60000);
  const s = await sample().catch((e) => ({ t: null, reloading: true, err: String(e.message).slice(0, 80) })); rows.push(s);
  console.log(JSON.stringify(s));
}
const ok0 = rows.filter((r) => !r.reloading);
const warm = ok0[Math.min(2, ok0.length - 1)] || rows[0], last = ok0[ok0.length - 1] || rows[rows.length - 1];
const heapGrowth = last.heapMB - warm.heapMB;
const ok = errs.length === 0 && navs === 1 && last.geo === warm.geo && last.tex === warm.tex && last.prog === warm.prog
  && heapGrowth < Math.max(8, warm.heapMB * 0.25) && last.dom - warm.dom < 50 && rows.every((r) => r.attract && !r.ctxLost);
console.log(JSON.stringify({ viewport: `${w}x${h}`, minutes, samples: rows.length, warm, last, heapGrowthMB: +heapGrowth.toFixed(2), navigations: navs, errors: errs.slice(0, 5), pass: ok }));
await browser.close();
process.exit(ok ? 0 : 1);
