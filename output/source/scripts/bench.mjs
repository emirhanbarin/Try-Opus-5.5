// Yerleşik performans testini (6 sn: döndürme + patlatma + kesit taraması) koşturur ve sonucu yazdırır.
import { chromium } from 'playwright-core';
const url = process.argv[2] || 'http://localhost:8080/';
const [w, h] = (process.argv[3] || '1280x720').split('x').map(Number);
const soft = process.env.SOFT_GL || 'llvmpipe';
const args = soft === 'swiftshader' ? ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] : ['--use-gl=angle', '--use-angle=gl', '--ignore-gpu-blocklist'];
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium', headless: soft === 'swiftshader', args });
const page = await browser.newPage({ viewport: { width: w, height: h }, deviceScaleFactor: 1 });
await page.goto(url);
await page.waitForSelector('#loader.done', { timeout: 240000, state: 'attached' });
await page.waitForTimeout(3000);
await page.evaluate(() => { window.__benchResult = null; window.__viewer.runBenchmark(); });
let res = null;
for (let i = 0; i < 240 && !res; i++) { await page.waitForTimeout(1000); res = await page.evaluate(() => window.__benchResult); }
const gpu = await page.evaluate(() => { const gl = window.__viewer.renderer.getContext(); const d = gl.getExtension('WEBGL_debug_renderer_info'); return d ? gl.getParameter(d.UNMASKED_RENDERER_WEBGL) : ''; });
// senkron (readPixels) tek kare süresi: gerçek çizim maliyeti
const sync = await page.evaluate(() => {
  const v = window.__viewer; const R = v.renderer; const gl = R.getContext(); const px = new Uint8Array(4);
  const scene = v.parts.get('kasa_profili').mesh.parent.parent; const ts = [];
  for (let i = 0; i < 3; i++) { const t = performance.now(); R.render(scene, v.camera); gl.readPixels(1, 1, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, px); ts.push(performance.now() - t); }
  return Math.min(...ts);
});
console.log(JSON.stringify({ soft, viewport: `${w}x${h}`, url, gpu, ...res, syncFrameMs: +sync.toFixed(1), syncFps: +(1000 / sync).toFixed(2) }));
await browser.close();
