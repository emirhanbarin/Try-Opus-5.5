// Etkileşim testi: tüm arayüz işlevlerini sırayla dener, ekran görüntüsü alır, hataları toplar.
// kullanım: xvfb-run node interaction_test.mjs <url> <outdir>
import { chromium } from 'playwright-core';
import fs from 'node:fs';
import path from 'node:path';
const url = process.argv[2] || 'http://localhost:8080/?aa=0';
const out = process.argv[3] || './shots';
fs.mkdirSync(out, { recursive: true });
const soft = process.env.SOFT_GL || 'llvmpipe';
const args = soft === 'swiftshader' ? ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] : ['--use-gl=angle', '--use-angle=gl', '--ignore-gpu-blocklist'];
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium', headless: soft === 'swiftshader', args });
const page = await browser.newPage({ viewport: { width: 1280, height: 720 }, deviceScaleFactor: 1 });
const logs = []; const results = [];
page.on('console', (m) => { if (m.type() !== 'debug') logs.push(`[${m.type()}] ${m.text()}`); });
page.on('pageerror', (e) => logs.push(`[pageerror] ${e.message}`));
page.on('requestfailed', (r) => logs.push(`[requestfailed] ${r.url()}`));
const requested = new Set();
page.on('request', (r) => requested.add(new URL(r.url()).origin));
const shot = async (name, wait = 4500) => { await page.waitForTimeout(wait); await page.screenshot({ path: path.join(out, name + '.png'), timeout: 120000 }); };
const check = (name, ok, detail = '') => { results.push({ name, ok, detail }); console.log((ok ? 'PASS ' : 'FAIL ') + name + (detail ? ' — ' + detail : '')); };
const ev = (fn, a) => page.evaluate(fn, a);

const t0 = Date.now();
await page.goto(url, { waitUntil: 'load' });
await page.waitForSelector('#loader.done', { timeout: 180000, state: 'attached' });
check('yükleme tamamlandı', true, ((Date.now() - t0) / 1000).toFixed(1) + ' sn');
await shot('01_ilk_gorunum', 6000);

// parça listesi
const nRows = await page.locator('.part-row').count();
check('parça listesi 22 satır', nRows === 22, String(nRows));

// hover: kanat profili üzerine gel -> tooltip
async function screenPointOf(id, local = [0, 0, 0]) {
  return ev(({ id, local }) => {
    const v = window.__viewer; const mesh = v.parts.get(id).mesh;
    mesh.geometry.computeBoundingBox();
    const bb = mesh.geometry.boundingBox.clone().applyMatrix4(mesh.matrixWorld);
    const c = bb.getCenter(bb.min.clone());
    c.x += local[0]; c.y += local[1]; c.z += local[2];
    const cam = window.__viewer.camera; c.project(cam);
    return { x: (c.x + 1) / 2 * innerWidth, y: (1 - c.y) / 2 * innerHeight };
  }, { id, local });
}
const cursor = await screenPointOf('kanat_profili', [0.02, 0.012, 0.03]);
await page.mouse.move(cursor.x, cursor.y);
await page.waitForTimeout(3500);
const tip = await page.locator('#tooltip').innerText().catch(() => '');
check('hover vurgulama + ipucu', /Kanat|Cam|Kasa|conta/i.test(tip), tip.replace(/\n/g, ' / '));
await shot('02_hover', 2500);

// tıklayarak seçim
await page.mouse.click(cursor.x, cursor.y);
await page.waitForTimeout(3000);
const infoName = await page.locator('#infoName').innerText();
check('tıklayınca seçim + bilgi paneli', !(await page.locator('#infoPanel').isHidden()), infoName);
await shot('03_secim_bilgi', 3000);

// listeden seçim: kasa profili
await page.locator('.part-row[data-id="kasa_profili"] .part-name').click();
await page.waitForTimeout(2500);
check('listeden seçim', (await page.locator('#infoName').innerText()) === 'Kasa profili');

// izole et
await page.locator('#btnSolo').click();
await page.waitForTimeout(1500);
const vis1 = await ev(() => [...window.__viewer.parts.values()].filter((p) => p.mesh.visible).map((p) => p.def.id));
check('izole et (solo)', vis1.length === 1 && vis1[0] === 'kasa_profili', vis1.join(','));
await shot('04_izole_kasa', 4000);
await page.locator('#btnSolo').click();
await page.waitForTimeout(1000);
const vis2 = await ev(() => [...window.__viewer.parts.values()].filter((p) => p.mesh.visible).length);
check('izolasyondan çık', vis2 === 22, String(vis2));

// gizle/göster: cam grubu
await page.locator('.part-row[data-id="cam_1"] .vis').click();
await page.locator('.part-row[data-id="cam_2"] .vis').click();
await page.locator('.part-row[data-id="cam_3"] .vis').click();
await page.waitForTimeout(1500);
const glassHidden = await ev(() => ['cam_1', 'cam_2', 'cam_3'].every((i) => !window.__viewer.parts.get(i).mesh.visible));
check('parça gizle (camlar)', glassHidden);
await shot('05_camlar_gizli', 4000);
await page.locator('#btnShowAll').click();
await page.waitForTimeout(1000);
check('tümünü göster', await ev(() => [...window.__viewer.parts.values()].every((p) => p.mesh.visible)));

// seçimi kaldır (Esc)
await page.keyboard.press('Escape');
await page.waitForTimeout(800);
check('Esc ile seçimi kaldır', await page.locator('#infoPanel').isHidden());

// patlatma: animasyonlu
await page.locator('#btnExplodePlay').click();
await page.waitForTimeout(4500);
const ex = await ev(() => window.__viewer.state.explode);
check('patlatma animasyonu (0→1)', ex > 0.99, ex.toFixed(3));
await shot('06_patlatilmis', 5000);
// ara değer: kaydırıcı %45
await page.locator('#explode').fill('450');
await page.waitForTimeout(4000);
const ex2 = await ev(() => window.__viewer.state.explode);
check('patlatma kaydırıcısı (%45)', Math.abs(ex2 - 0.45) < 0.03, ex2.toFixed(3));
await shot('07_patlatma_45', 3000);
// %45'teyken oynat -> 1'e tamamlar; ikinci basış -> 0
await page.locator('#btnExplodePlay').click();
await page.waitForTimeout(4500);
check('oynat: %45 → %100', (await ev(() => window.__viewer.state.explode)) > 0.99);
await page.locator('#btnExplodePlay').click();
await page.waitForTimeout(5000);
check('birleştirme (1→0)', (await ev(() => window.__viewer.state.explode)) < 0.01);
await shot('07b_birlesik', 2500);

// kesit: enine
await page.locator('#btnSection').click();
await page.waitForTimeout(1500);
check('kesit açıldı', await ev(() => window.__viewer.state.clip.on));
await page.locator('.presets .btn', { hasText: 'İç drenaj yarığı' }).click();
await shot('08_kesit_enine_drenaj', 6000);
await page.locator('.presets .btn', { hasText: 'Vida ekseni' }).click();
await shot('09_kesit_vida_ekseni', 6000);
// boyuna
await page.locator('.seg-btn[data-axis="z"]').click();
await page.locator('#clipPos').fill('470');
await page.locator('#sectionPop').evaluate(() => {});
await ev(() => window.__viewer.setView('interior'));
await shot('10_kesit_boyuna', 6000);
// yatay
await page.locator('.seg-btn[data-axis="y"]').click();
await page.locator('#clipPos').fill('300');
await ev(() => window.__viewer.setView('top'));
await shot('11_kesit_yatay', 6000);
// kesiti kapat
await page.locator('#btnSection').click(); await page.waitForTimeout(500);
if (await ev(() => window.__viewer.state.clip.on)) { await page.locator('#btnSection').click(); await page.waitForTimeout(500); }
check('kesit kapandı', !(await ev(() => window.__viewer.state.clip.on)));

// ölçüler
await page.locator('#btnDims').click();
await shot('12_olculer', 6000);
const nLabels = await ev(() => [...document.querySelectorAll('.dim-label')].filter((e) => e.style.opacity === '1').length);
check('döküman ölçüleri görünür', nLabels >= 9, String(nLabels));
await page.locator('#btnDims').click();

// görünümler
await page.locator('#btnViews').click();
await page.locator('[data-view="exterior"]').click();
await shot('13_dis_cephe', 5000);
await page.locator('#btnViews').click();
await page.locator('[data-view="bottom"]').click();
await shot('14_alttan', 5000);

// sıfırla
await page.locator('#btnReset').click();
await shot('15_sifirla', 5000);

// çift tıkla odaklan (rüzgarlık)
await ev(() => window.__viewer.setView('exterior', true));
await page.waitForTimeout(3000);
const cp = await screenPointOf('drenaj_kapagi');
await page.mouse.dblclick(cp.x, cp.y);
await page.waitForTimeout(2500);
check('çift tıkla odaklan', (await page.locator('#infoName').innerText()).includes('Drenaj'), await page.locator('#infoName').innerText());
await shot('16_odak_ruzgarlik', 4000);

const external = [...requested].filter((o) => !/^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(o) && !o.startsWith('blob:') && !o.startsWith('data:') && o !== 'null');
check('harici ağ isteği yok (çevrimdışı)', external.length === 0, [...requested].join(', '));
fs.writeFileSync(path.join(out, 'results.json'), JSON.stringify({ results, logs, origins: [...requested] }, null, 1));
const errors = logs.filter((l) => /error|failed/i.test(l));
check('konsol hatası yok', errors.length === 0, errors.slice(0, 5).join(' | '));
await browser.close();
