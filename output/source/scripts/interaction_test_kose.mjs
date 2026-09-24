// Köşe numunesi etkileşim testi: tüm arayüz işlevlerini sırayla dener, ekran görüntüsü alır, hataları toplar.
// kullanım: xvfb-run node interaction_test_kose.mjs <url> <çıktı klasörü>
//   url: http://localhost:8080/index.html  veya  file:///.../site/index.html
import { chromium } from 'playwright-core';
import fs from 'node:fs';
import path from 'node:path';
const url0 = process.argv[2] || 'http://localhost:8080/index.html';
const out = process.argv[3] || './shots_kose';
fs.mkdirSync(out, { recursive: true });
const soft = process.env.SOFT_GL || 'llvmpipe';
const args = soft === 'swiftshader' ? ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] : ['--use-gl=angle', '--use-angle=gl', '--ignore-gpu-blocklist'];
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium', headless: soft === 'swiftshader', args });
const results = []; const logs = [];
const check = (name, ok, detail = '') => { results.push({ name, ok, detail }); console.log((ok ? 'PASS ' : 'FAIL ') + name + (detail ? ' — ' + detail : '')); };
const q = (u, p) => u + (u.includes('?') ? '&' : '?') + p;

async function openPage(url, opts = {}) {
  const ctx = await browser.newContext({ viewport: opts.viewport || { width: 1280, height: 720 }, deviceScaleFactor: 1, hasTouch: !!opts.touch });
  const page = await ctx.newPage();
  page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') logs.push(`[${m.type()}] ${m.text()}`); });
  page.on('pageerror', (e) => logs.push(`[pageerror] ${e.message}`));
  page.on('requestfailed', (r) => logs.push(`[requestfailed] ${r.url()}`));
  const origins = new Set();
  page.on('request', (r) => { const u = new URL(r.url()); if (u.protocol.startsWith('http')) origins.add(u.origin); });
  const t0 = Date.now();
  await page.goto(url, { waitUntil: 'load' });
  await page.waitForSelector('#loader.done', { timeout: 300000, state: 'attached' });
  return { page, ctx, origins, loadS: (Date.now() - t0) / 1000 };
}
const shot = async (page, name, wait = 3500) => { await page.waitForTimeout(wait); await page.screenshot({ path: path.join(out, name + '.png'), timeout: 240000 }); };

// ------------------------------------------------------------------ ana test
const { page, ctx, origins, loadS } = await openPage(q(url0, 'intro=0&spin=0&aa=0'));
const ev = (fn, a) => page.evaluate(fn, a);
check('yükleme tamamlandı', true, loadS.toFixed(1) + ' sn');
await shot(page, '01_acilis');
const nRows = await page.locator('.part-row').count();
check('parça listesi 26 satır', nRows === 26, String(nRows));
const info0 = await ev(() => ({ ...window.__viewer.lastInfo }));
check('bütçe (duruş): < 150K üçgen, < 50 çağrı', info0.tris < 150000 && info0.calls < 50, `${info0.tris} üçgen, ${info0.calls} çağrı`);

// hover + tıklama
async function screenPointOf(id) {
  return ev((id) => {
    const v = window.__viewer; const mesh = v.parts.get(id).mesh;
    mesh.geometry.computeBoundingBox();
    const bb = mesh.geometry.boundingBox.clone().applyMatrix4(mesh.matrixWorld);
    // yüzeydeki bir nokta: kutunun merkezinden kameraya doğru ışın
    const THREE = v.app.THREE; const c = bb.getCenter(new THREE.Vector3());
    const ray = new THREE.Raycaster(); const cam = v.camera;
    const p = c.clone().project(cam);
    return { x: (p.x + 1) / 2 * innerWidth, y: (1 - p.y) / 2 * innerHeight };
  }, id);
}
let pt = await ev(() => { const v = window.__viewer, a = v.app, T = a.THREE; const p = a.toWorld(150, 20, 32.8).project(v.camera); return { x: (p.x + 1) / 2 * innerWidth, y: (1 - p.y) / 2 * innerHeight }; });
await page.mouse.move(pt.x, pt.y); await page.waitForTimeout(2500);
const tip = await page.locator('#tooltip').innerText().catch(() => '');
check('üzerine gelme: ipucu', /Kasa|Kanat|conta|Cam/i.test(tip), tip.replace(/\n/g, ' / '));
await page.mouse.click(pt.x, pt.y); await page.waitForTimeout(2500);
check('tıklayınca seçim + bilgi paneli', !(await page.locator('#infoPanel').isHidden()), await page.locator('#infoName').innerText());
await page.locator('.part-row[data-id="kanat_profili"] .part-name').click(); await page.waitForTimeout(1000);
check('listeden seçim', (await page.locator('#infoName').innerText()).startsWith('Kanat profili'));
await page.click('#btnSolo'); await page.waitForTimeout(1500);
const vis1 = await ev(() => [...window.__viewer.parts.values()].filter((p) => p.mesh.visible).map((p) => p.def.id));
check('izole et', vis1.length === 1 && vis1[0] === 'kanat_profili', vis1.join(','));
await page.click('#btnSolo'); await page.waitForTimeout(1000);
check('izolasyondan çık', (await ev(() => [...window.__viewer.parts.values()].filter((p) => p.mesh.visible).length)) === 26);
await page.locator('.part-row[data-id="cam_2"] .vis').click(); await page.waitForTimeout(800);
check('parça gizle', await ev(() => !window.__viewer.parts.get('cam_2').mesh.visible));
await page.click('#btnShowAll'); await page.waitForTimeout(800);
await page.keyboard.press('Escape'); await page.waitForTimeout(800);
check('Esc ile seçimi kaldır', await page.locator('#infoPanel').isHidden());

// patlatma
await page.click('#btnExplodePlay');
await page.waitForFunction(() => window.__viewer.state.explode > 0.99, null, { timeout: 120000 }).catch(() => {});
check('patlatma 0 → 1', (await ev(() => window.__viewer.state.explode)) > 0.99);
await shot(page, '02_patlatma', 2500);
await page.click('#btnExplodePlay');
await page.waitForFunction(() => window.__viewer.state.explode < 0.01, null, { timeout: 120000 }).catch(() => {});
check('birleştirme 1 → 0', (await ev(() => window.__viewer.state.explode)) < 0.01);
await page.locator('#explode').evaluate((el) => { el.value = 450; el.dispatchEvent(new Event('input')); });
await page.waitForTimeout(2500);
check('patlatma kaydırıcısı %45', Math.abs((await ev(() => window.__viewer.state.explode)) - 0.45) < 0.03);
await page.locator('#explode').evaluate((el) => { el.value = 0; el.dispatchEvent(new Event('input')); });
await page.waitForTimeout(1500);

// kesit: gönye ön ayarı + kaydırıcı + kapat
await page.click('#btnSection'); await page.waitForTimeout(1000);
check('kesit açıldı', await ev(() => window.__viewer.state.clip.on));
await page.locator('#clipPresets button', { hasText: 'Gönye' }).click(); await page.waitForTimeout(1000);
check('gönye (kaynak yüzü) kesiti', await ev(() => window.__viewer.state.clip.axis === 'd'));
await shot(page, '03_gonye_kesiti');
await page.locator('.seg-btn[data-axis="x"]').click();
await page.locator('#clipPos').evaluate((el) => { el.value = 870; el.dispatchEvent(new Event('input')); });
await page.waitForTimeout(800);
const cpos = await ev(() => window.__viewer.state.clip.pos);
check('kesit kaydırıcısı (alt kol)', Math.abs(cpos - 261) < 2, cpos.toFixed(1) + ' mm');
if (await page.locator('#sectionPop').isHidden()) { await page.click('#btnSection'); await page.waitForTimeout(600); }
await page.click('#btnSection'); await page.waitForTimeout(600);   // açık panelde ikinci tık kesiti kapatır
check('kesit kapandı', !(await ev(() => window.__viewer.state.clip.on)));

// ölçüler + teknik çizim bindirme
await page.click('#btnDims'); await page.waitForTimeout(600);
await page.locator('label.toggle', { has: page.locator('#tglDrawing') }).click(); await page.waitForTimeout(4000);
const nLabels = await page.locator('.dim-label').evaluateAll((els) => els.filter((e) => getComputedStyle(e).opacity === '1').length);
const drawVis = await ev(() => window.__viewer.modules.drawing.obj.visible);
check('döküman ölçüleri + çizim bindirme', nLabels >= 8 && drawVis, `${nLabels} etiket, çizim ${drawVis}`);
await shot(page, '04_olculer_cizim', 1500);
await ev(() => { window.__viewer.app.setDims(false); window.__viewer.app.setDrawing(false); window.__viewer.app.closePopovers(); });

// 360°
await ev(() => window.__viewer.app.setView('hero', true));
const az0 = await ev(() => { const c = window.__viewer.camera, t = window.__viewer.controls.target; return Math.atan2(c.position.x - t.x, c.position.z - t.z); });
await page.click('#btnTurn'); await page.waitForTimeout(9000);
const az1 = await ev(() => { const c = window.__viewer.camera, t = window.__viewer.controls.target; return Math.atan2(c.position.x - t.x, c.position.z - t.z); });
const envRot = await ev(() => window.__viewer.app.scene.environmentRotation.y);
check('360° döndürme + ışık kamerayla döner', Math.abs(az1 - az0) > 0.02 && Math.abs(envRot) > 0.01, `Δaz ${(az1 - az0).toFixed(3)} rad, ortam ${envRot.toFixed(3)} rad`);
await page.click('#btnTurn'); await page.waitForTimeout(500);

// renk / folyo
await page.click('#btnFinish'); await page.waitForTimeout(500);
await page.locator('.finish-btn[data-finish="altinmese"]').click(); await page.waitForTimeout(3000);
const fin = await ev(() => ({ mode: window.__viewer.app.state.finish, label: document.getElementById('finishName').textContent }));
check('renk seçimi (Altın meşe)', fin.mode === 'altinmese' && fin.label === 'Altın meşe', JSON.stringify(fin));
await shot(page, '05_altin_mese', 1500);
await page.locator('.finish-btn[data-finish="beyaz"]').click(); await page.waitForTimeout(600);
await ev(() => window.__viewer.app.closePopovers());

// teknik özellikler
await page.click('#btnSpecs'); await page.waitForTimeout(600);
const nSpecs = await page.locator('#specsList dt').count();
check('teknik özellikler kartı', nSpecs >= 10 && !(await page.locator('#specsModal').isHidden()), nSpecs + ' satır');
await shot(page, '06_ozellikler', 800);
await page.keyboard.press('Escape'); await page.waitForTimeout(400);

// bilgi işaretleri
await ev(() => window.__viewer.app.setHotspots(true)); await page.waitForTimeout(3000);
const nHs = await page.locator('.hotspot').evaluateAll((els) => els.filter((e) => e.style.display !== 'none').length);
check('bilgi işaretleri', nHs >= 5, nHs + ' işaret');
await page.locator('.hotspot').first().click(); await page.waitForTimeout(2500);
check('işarete dokununca bilgi kartı', !(await page.locator('#hotCard').isHidden()), await page.locator('#hotCard .hc-title').innerText());
await shot(page, '07_isaretler', 1500);
await ev(() => { window.__viewer.app.setHotspots(false); window.__viewer.app.resetAll(); });
await page.waitForTimeout(2000);

// keşif turu
await page.click('#btnTour'); await page.waitForTimeout(2500);
check('tur başladı', await ev(() => window.__viewer.modules.tour.active && !document.getElementById('tourCard').hidden));
await page.click('#tcNext'); await page.waitForTimeout(3000);
check('tur: kaynak bölümü (gönye kesiti)', await ev(() => window.__viewer.modules.tour.i === 1 && window.__viewer.state.clip.on && window.__viewer.state.clip.axis === 'd'));
await ev(() => { window.__viewer.modules.tour.goTo(5); window.__viewer.modules.tour.pause(true); }); await page.waitForTimeout(5000);
const wat = await ev(() => ({ water: window.__viewer.modules.water.active, ghost: window.__viewer.state.ghostSet ? window.__viewer.state.ghostSet.size : 0, info: { ...window.__viewer.lastInfo } }));
check('tur: su tahliyesi animasyonu + hayalet görünüm', wat.water && wat.ghost >= 2, JSON.stringify(wat));
await shot(page, '08_su_tahliyesi', 1500);
await ev(() => { window.__viewer.modules.tour.goTo(7); window.__viewer.modules.tour.pause(true); });
await page.waitForFunction(() => window.__viewer.state.explode > 0.98, null, { timeout: 120000 }).catch(() => {});
await page.waitForTimeout(2500);
const nCall = await page.locator('.callout').evaluateAll((els) => els.filter((e) => e.style.display !== 'none').length);
check('tur: montaj sırası (patlatma etiketleri)', nCall >= 8, nCall + ' etiket');
await shot(page, '09_montaj', 1500);
await page.click('#tcClose'); await page.waitForTimeout(3000);
const rest = await ev(() => ({ active: window.__viewer.modules.tour.active, clip: window.__viewer.state.clip.on, ghost: window.__viewer.state.ghostSet, water: window.__viewer.modules.water.active, tgt: window.__viewer.state.explodeTarget }));
check('turdan çık: durum geri yüklendi', !rest.active && !rest.clip && !rest.ghost && !rest.water && rest.tgt === 0, JSON.stringify(rest));
const maxInfo = await ev(() => ({ ...window.__viewer.lastInfo }));
check('bütçe (en yoğun durum): < 150K üçgen, < 50 çağrı', maxInfo.maxTris < 150000 && maxInfo.maxCalls < 50, `${maxInfo.maxTris} üçgen, ${maxInfo.maxCalls} çağrı`);

// sayfa geçişi bağlantısı
const href = await page.locator('.page-switch a:not(.active)').getAttribute('href');
check('düz kesit sayfasına geçiş bağlantısı', href === 'kesit.html', href);
const external = [...origins].filter((o) => !/localhost|127\.0\.0\.1/.test(o));
check('harici ağ isteği yok (çevrimdışı)', external.length === 0, [...origins].join(', ') || 'file://');
await ctx.close();

// ------------------------------------------------------------------ kiosk
const k = await openPage(q(url0, 'kiosk=1&intro=0&idle=15&fs=0&aa=0'), { viewport: { width: 1080, height: 1920 }, touch: true });
const kp = k.page;
check('kiosk modu: dokunmatik arayüz', await kp.evaluate(() => document.body.classList.contains('kiosk') && getComputedStyle(document.querySelector('.perf-chip')).display === 'none'));
await kp.evaluate(() => { window.__viewer.modules.kiosk.last = performance.now() - 20000; });
await kp.waitForFunction(() => window.__viewer.modules.kiosk.attract && window.__viewer.modules.tour.active, null, { timeout: 180000 }).catch(() => {});
const at = await kp.evaluate(() => ({ attract: window.__viewer.modules.kiosk.attract, tour: window.__viewer.modules.tour.active, loop: window.__viewer.modules.tour.loop }));
check('kiosk: boşta → tanıtım (döngülü tur)', at.attract && at.tour && at.loop, JSON.stringify(at));
await shot(kp, '10_kiosk_tanitim', 2500);
await kp.touchscreen.tap(540, 700); await kp.waitForTimeout(3000);
const af = await kp.evaluate(() => ({ attract: window.__viewer.modules.kiosk.attract, tour: window.__viewer.modules.tour.active, sel: window.__viewer.state.selected }));
check('kiosk: dokunuş tanıtımı bitirir (seçim sayılmaz)', !af.attract && !af.tour && !af.sel, JSON.stringify(af));
await shot(kp, '11_kiosk_etkilesim', 1500);
await k.ctx.close();

const errors = logs.filter((l) => /\[(pageerror|error)\]|requestfailed/.test(l));
check('konsol hatası yok', errors.length === 0, errors.slice(0, 5).join(' | '));
fs.writeFileSync(path.join(out, 'sonuc.json'), JSON.stringify({ url: url0, results, logs }, null, 1));
console.log(`\n${results.filter((r) => r.ok).length}/${results.length} kontrol geçti`);
await browser.close();
process.exit(results.every((r) => r.ok) ? 0 : 1);
