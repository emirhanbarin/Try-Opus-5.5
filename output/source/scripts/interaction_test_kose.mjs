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
// yazılımsal GL'de tek kare (özellikle büyük ekran görüntüsü) saniyeler sürer; GPU gözetçisi bağlamı öldürmesin (gerçek GPU'da gerekmez)
args.push('--disable-gpu-watchdog');
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
// tur bölümü sırası kimlikle bulunur (bölüm eklenince test kaymasın)
const chIdx = (id) => ev((id) => window.__viewer.modules.tour.ids.indexOf(id), id);
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
await page.locator('.finish-btn[data-finish="dis_antrasit"]').click(); await page.waitForTimeout(1500);
const bi = await ev(() => ({ f: window.__viewer.app.state.finish, label: document.getElementById('finishName').textContent }));
check('iki renkli folyo (dış antrasit · iç beyaz)', bi.f === 'dis_antrasit' && bi.label === 'Dış antrasit', JSON.stringify(bi));
await page.locator('.finish-btn[data-finish="beyaz"]').click(); await page.waitForTimeout(600);
await page.locator('label.toggle', { has: page.locator('#tglCompare') }).click(); await page.waitForTimeout(600);
await page.locator('.finish-btn[data-finish="altinmese"]').click(); await page.waitForTimeout(2000);
const cmp = await ev(() => ({ on: window.__viewer.app.state.compare.on, right: window.__viewer.app.state.compare.right, left: window.__viewer.app.state.finish,
  bar: !document.getElementById('splitBar').hidden, labels: [document.getElementById('splitL').textContent, document.getElementById('splitR').textContent] }));
check('renk perdesi: sol beyaz, sağ altın meşe', cmp.on && cmp.bar && cmp.left === 'beyaz' && cmp.right === 'altinmese', JSON.stringify(cmp));
await shot(page, '05b_perde', 1200);
await ev(() => { window.__viewer.app.setCompare(false); window.__viewer.app.closePopovers(); });

// teknik özellikler
await page.click('#btnSpecs'); await page.waitForTimeout(600);
const nSpecs = await page.locator('#specsList dt').count();
check('teknik özellikler kartı', nSpecs >= 10 && !(await page.locator('#specsModal').isHidden()), nSpecs + ' satır');
const cert = await ev(() => ({ block: !document.getElementById('certBlock').hidden, uf: document.getElementById('certValue').textContent,
  badge: !document.getElementById('certBadge').hidden, rows: document.querySelectorAll('#certList dt').length }));
check('resmi test (ift): Uf kartı ve rozet', cert.block && cert.uf === '1,0' && cert.badge && cert.rows >= 3, JSON.stringify(cert));
await shot(page, '06_ozellikler', 800);
await page.keyboard.press('Escape'); await page.waitForTimeout(400);

// klavye: Ctrl+C kısayol tetiklemez; Türkçe Q'daki "ı" (KeyI) izole eder
await page.keyboard.press('Control+KeyC'); await page.waitForTimeout(300);
const kbClip = await ev(() => window.__viewer.state.clip.on);
await ev(() => window.__viewer.select('orta_conta'));
await ev(() => window.dispatchEvent(new KeyboardEvent('keydown', { key: 'ı', code: 'KeyI', bubbles: true })));
await page.waitForTimeout(600);
const kbSolo = await ev(() => { const s = window.__viewer.state.soloSet; return !!s && s.size === 1 && s.has('orta_conta'); });
await ev(() => window.dispatchEvent(new KeyboardEvent('keydown', { key: 'ı', code: 'KeyI', bubbles: true })));
await ev(() => window.__viewer.select(null));
check('klavye: Ctrl+C serbest, Türkçe Q\'da ı ile izole', !kbClip && kbSolo, JSON.stringify({ kbClip, kbSolo }));

// işaretin açtığı kesit: Kesit düğmesi yanar, kart kapanınca kesit kapanır
await ev(() => { const hs = window.__viewer.modules.hotspots; hs.open(hs.items.find((i) => i.h.id === 'kaynak').h); });
await page.waitForTimeout(1500);
const hsOn = await ev(() => ({ clip: window.__viewer.state.clip.on, btn: document.getElementById('btnSection').getAttribute('aria-pressed') }));
await page.click('#hotCardClose'); await page.waitForTimeout(800);
const hsOff = await ev(() => ({ clip: window.__viewer.state.clip.on, btn: document.getElementById('btnSection').getAttribute('aria-pressed') }));
check('işaret kesiti: düğme senkron, kartla kapanır', hsOn.clip && hsOn.btn === 'true' && !hsOff.clip && hsOff.btn === 'false', JSON.stringify({ hsOn, hsOff }));

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
const I = { su: await chIdx('su'), uretim: await chIdx('uretim'), kamara: await chIdx('kamara'), celik: await chIdx('celik'), isi: await chIdx('isi') };
await ev((i) => { window.__viewer.modules.tour.goTo(i); window.__viewer.modules.tour.pause(true); }, I.su); await page.waitForTimeout(5000);
const wat = await ev(() => ({ water: window.__viewer.modules.water.active, ghost: window.__viewer.state.ghostSet ? window.__viewer.state.ghostSet.size : 0, info: { ...window.__viewer.lastInfo } }));
check('tur: su tahliyesi animasyonu + hayalet görünüm', wat.water && wat.ghost >= 2, JSON.stringify(wat));
await shot(page, '08_su_tahliyesi', 1500);
// üretim hikâyesi: kaynak adımı (kollar ayrı mesh, ısıtıcı plaka, gönye ısınması) ve montaj adımı
await ev((i) => { const v = window.__viewer; v.modules.tour.goTo(i); v.modules.tour.pause(true); }, I.uretim);
await page.waitForTimeout(2500);
await ev(() => { window.__viewer.modules.story.t = 23; });
await page.waitForTimeout(3500);
const st = await ev(() => { const s = window.__viewer.modules.story; return { active: s.active, step: s.stepIdx, legs: !!s.legs && s.legs.sill.visible && s.legs.jamb.visible,
  plate: s.plate.visible, glow: s.glow.visible, kasa: window.__viewer.parts.get('kasa_profili').mesh.visible, title: document.querySelector('#tourCard .tc-title').textContent }; });
check('tur: üretim hikâyesi (kaynak adımı)', st.active && st.step === 3 && st.legs && st.plate && st.glow && !st.kasa, JSON.stringify(st));
await shot(page, '09_uretim_kaynak', 1500);
await ev(() => { window.__viewer.modules.story.t = 40; });
await page.waitForTimeout(3500);
const st2 = await ev(() => { const s = window.__viewer.modules.story; return { step: s.stepIdx, legs: s.legs.sill.visible, parts: [...window.__viewer.parts.values()].filter((p) => p.mesh.visible).length }; });
check('tur: üretim hikâyesi (montaj adımı, tüm parçalar)', st2.step === 5 && !st2.legs && st2.parts === 26, JSON.stringify(st2));
await page.click('#tcClose');
// geri dönüş patlatması 2,4 sn sürer; yazılımsal GL'de kare ~1 sn olduğundan sabit bekleme yerine bitişini bekle
await page.waitForFunction(() => !window.__viewer.state.explodeAnim, null, { timeout: 30000 }).catch(() => {});
await page.waitForTimeout(500);
const rest = await ev(() => ({ active: window.__viewer.modules.tour.active, clip: window.__viewer.state.clip.on, ghost: window.__viewer.state.ghostSet, water: window.__viewer.modules.water.active, tgt: window.__viewer.state.explodeTarget }));
check('turdan çık: durum geri yüklendi', !rest.active && !rest.clip && !rest.ghost && !rest.water && rest.tgt === 0, JSON.stringify(rest));
// tur bölümleri: kamara sayacı ve röntgen merceği
await ev((i) => { const v = window.__viewer; v.modules.tour.start(); v.modules.tour.goTo(i); v.modules.tour.pause(true); }, I.kamara);
await page.waitForFunction(() => !window.__viewer.modules.chambers.anim, null, { timeout: 60000 }).catch(() => {});
await page.waitForTimeout(1500);
const chs = await ev(() => { const c = window.__viewer.modules.chambers; return { vis: c.mesh.visible, f: document.querySelector('#chamberCount [data-c="frame"]').textContent,
  s: document.querySelector('#chamberCount [data-c="sash"]').textContent, labels: [...document.querySelectorAll('#chamberLabels .ch-num')].filter((e) => e.style.opacity === '1').length }; });
check('tur: kamara sayacı (kasa 14, kanat 11)', chs.vis && chs.f === '14' && chs.s === '11' && chs.labels >= 20, JSON.stringify(chs));
await shot(page, '09a_kamara', 800);
await ev((i) => { const v = window.__viewer; v.modules.tour.goTo(i); v.modules.tour.pause(true); }, I.isi);
await page.waitForFunction(() => window.__viewer.modules.thermal.k === 1, null, { timeout: 30000 }).catch(() => {});   // geçiş 1'e oturur
const thc = await ev(() => { const v = window.__viewer, c = v.modules.chambers; return { on: v.modules.thermal.on, k: +v.modules.thermal.k.toFixed(2),
  legend: !document.getElementById('thermLegend').hidden, fill: c.mesh.visible && c.uniforms.uMode.value === 1, uf: document.getElementById('thermUf').textContent }; });
check('tur: ısı haritası (kesit sıcaklık renginde, resmi Uf açıklamada)', thc.on && thc.k === 1 && thc.legend && thc.fill && /1,0/.test(thc.uf), JSON.stringify(thc));
await shot(page, '09c_isi', 800);
await ev((i) => { const v = window.__viewer; v.modules.tour.goTo(i); v.modules.tour.pause(true); }, I.celik);
await page.waitForTimeout(3000);
const lns = await ev(() => ({ on: window.__viewer.modules.lens.on, def: 'SUP_LENS' in window.__viewer.parts.get('kasa_profili').mat.defines,
  ring: !document.getElementById('lensRing').hidden }));
check('tur: röntgen merceği (PVC gizlenir)', lns.on && lns.def && lns.ring, JSON.stringify(lns));
await shot(page, '09b_rontgen', 800);
await ev(() => window.__viewer.modules.tour.stop(false));
await page.waitForTimeout(1000);
const offs = await ev(() => ({ lens: window.__viewer.modules.lens.on, ch: window.__viewer.modules.chambers.mesh.visible,
  def: 'SUP_LENS' in window.__viewer.parts.get('kasa_profili').mat.defines, tour: window.__viewer.modules.tour.active, th: window.__viewer.modules.thermal.on }));
check('turdan çıkınca mercek, sayaç ve ısı haritası kapanır', !offs.lens && !offs.ch && !offs.def && !offs.tour && !offs.th, JSON.stringify(offs));

// araçlar: ısı haritası (döşeme + S tuşu), canlı 2B kesit (yarık / vida etiketleri), ölçüm (bilinen 85 mm)
await page.click('#btnTools'); await page.click('#tThermal');
await page.waitForFunction(() => window.__viewer.modules.thermal.k === 1, null, { timeout: 30000 }).catch(() => {});
const th1 = await ev(() => ({ on: window.__viewer.modules.thermal.on, pressed: document.getElementById('tThermal').getAttribute('aria-pressed'), legend: !document.getElementById('thermLegend').hidden }));
await page.keyboard.press('s');
await page.waitForFunction(() => window.__viewer.modules.thermal.k < 0.01, null, { timeout: 30000 }).catch(() => {});
const th2 = await ev(() => ({ on: window.__viewer.modules.thermal.on, k: window.__viewer.modules.thermal.k, fill: window.__viewer.modules.chambers.mesh.visible, legend: !document.getElementById('thermLegend').hidden }));
check('ısı haritası: Araçlar ile açılır, S ile kapanır', th1.on && th1.pressed === 'true' && th1.legend && !th2.on && th2.k === 0 && !th2.fill && !th2.legend, JSON.stringify({ th1, th2 }));
const insetAt = async (pos) => {
  await ev((pos) => window.__viewer.app.setClip('x', pos), pos);
  await page.waitForFunction((pos) => { const i = window.__viewer.modules.inset; return i.visible && i.sig.startsWith('x|' + pos.toFixed(2)); }, pos, { timeout: 30000 }).catch(() => {});
  return ev(() => ({ vis: !document.getElementById('secInset').hidden, tags: window.__viewer.modules.inset.last?.tags || [], parts: window.__viewer.modules.inset.last?.parts.length }));
};
const in230 = await insetAt(230), in150 = await insetAt(150);
check('canlı 2B kesit: A yarığı (X 230) ve kasa vidası (X 150) etiketleri', in230.vis && in230.tags.some((t) => t.startsWith('A yarığı')) && in150.tags.some((t) => /Kasa takviye vidası/.test(t)) && in150.parts >= 15,
  JSON.stringify({ a: in230.tags, b: in150.tags, parts: in150.parts }));
await shot(page, '10a_canli_kesit', 800);
await ev(() => { const t = document.getElementById('tglInset'); t.checked = false; t.dispatchEvent(new Event('change')); });
await page.waitForTimeout(800);
const inOff = await ev(() => document.getElementById('secInset').hidden);
await ev(() => { const t = document.getElementById('tglInset'); t.checked = true; t.dispatchEvent(new Event('change')); window.__viewer.app.state.clip.on = false; window.__viewer.app.updateClip(); });
check('canlı 2B kesit: anahtarla gizlenir', inOff);
// ölçüm: uç yüzde ve X = 150 kesit yüzünde kasa genişliği (s.9: 85 mm); kamera oturduktan sonra aynı karede hesaplanıp dokunulur
await page.click('#btnTools'); await page.click('#tMeasure');
const measureAcross = async (X) => {
  await page.waitForFunction(() => !window.__viewer.state.camAnim, null, { timeout: 30000 }).catch(() => {});
  await page.waitForTimeout(2500);
  return ev((X) => { const a = window.__viewer.app, m = a.modules.measure; m.clear();
    const at = (sx) => { const v = a.toWorld(X, 20, sx - 52.25).project(a.camera); return [((v.x + 1) / 2) * innerWidth, ((1 - v.y) / 2) * innerHeight]; };
    const p = at(0), q = at(85);
    m.tap(p[0] - 3, p[1], 'mouse'); m.tap(q[0] + 3, q[1], 'mouse');
    return m.items.map((i) => i.el.textContent); }, X);
};
await ev(() => window.__viewer.app.setView('end', true));
const mEnd = await measureAcross(300);
await ev(() => { const a = window.__viewer.app; a.setClip('x', 150); a.setView('end', true); });
const mCap = await measureAcross(150);
const mOn = await ev(() => ({ on: window.__viewer.modules.measure.on, bar: !document.getElementById('measureBar').hidden, line: window.__viewer.modules.measure.line.visible, info: { ...window.__viewer.lastInfo } }));
check('ölçüm: kasa genişliği 85,0 mm (uç yüz ve kesit yüzü, s.9)', mEnd[0] === '85,0 mm' && mCap[0] === '85,0 mm' && mOn.on && mOn.bar && mOn.line, JSON.stringify({ mEnd, mCap }));
await shot(page, '10b_olcum', 800);
await page.keyboard.press('m');
await page.waitForTimeout(500);
const mOff = await ev(() => ({ on: window.__viewer.modules.measure.on, labels: document.querySelectorAll('#measureLayer .ms-label').length }));
check('ölçüm: M ile kapanır, etiketler temizlenir', !mOff.on && mOff.labels === 0, JSON.stringify(mOff));
// ısı haritası + kesit + ölçüm birlikte: bütçe
await ev(() => { const v = window.__viewer; v.lastInfo.maxTris = 0; v.lastInfo.maxCalls = 0; v.modules.thermal.setOn(true, { view: false }); v.modules.measure.setOn(true); });
await page.waitForFunction(() => window.__viewer.modules.thermal.k === 1, null, { timeout: 30000 }).catch(() => {});
await measureAcross(150);
await page.waitForTimeout(1500);
const bTh = await ev(() => ({ ...window.__viewer.lastInfo }));
check('bütçe: ısı haritası + kesit + ölçüm < 150K üçgen, < 50 çağrı', bTh.maxTris < 150000 && bTh.maxCalls < 50, `${bTh.maxTris} üçgen, ${bTh.maxCalls} çağrı`);
await shot(page, '10c_isi_kesit_olcum', 800);
await ev(() => window.__viewer.app.resetAll());
await page.waitForTimeout(1500);

// köşeden pencereye: Araçlar ile 1200 × 1400 içe açılır; ölçü / açılım değişimi; bütçe; köşeye dönüş; P tuşu; tur bölümü
await page.click('#btnTools'); await page.click('#tWindow');
await page.waitForFunction(() => { const c = window.__viewer.modules.config; return c.on && !c.grow; }, null, { timeout: 60000 }).catch(() => {});
await page.waitForTimeout(1500);
const w1 = await ev(() => { const v = window.__viewer, c = v.modules.config;
  return { on: c.on, wm: v.state.windowMode, panel: !document.getElementById('cfgPanel').hidden, win: c.win.group.visible,
    glassHidden: ['cam_1', 'cam_2', 'cam_3'].every((id) => !v.parts.get(id).mesh.visible), hinges: c.win.hinges.count,
    card: document.getElementById('cfgBody').textContent, tags: [...document.querySelectorAll('#cfgTags .cfg-tag')].filter((e) => e.style.opacity === '1').length }; });
check('pencere: Araçlar ile açılır (1200 × 1400, içe açılır: kesim listesi, 3 menteşe)',
  w1.on && w1.wm && w1.panel && w1.win && w1.glassHidden && w1.hinges === 3 && w1.card.includes('1.206 mm × 2') && w1.card.includes('998 × 1.198 mm') && w1.card.includes('3 kanal') && w1.tags >= 3,
  JSON.stringify({ ...w1, card: w1.card.length }));
await shot(page, '11_pencere', 800);
await ev(() => { const set = (id, v) => { const e = document.getElementById(id); e.value = v; e.dispatchEvent(new Event('input')); }; set('cfgW', 800); set('cfgH', 1000);
  document.querySelector('[data-wtype="cift"]').click(); });
await page.waitForFunction(() => { const c = window.__viewer.modules.config; return c.W === 800 && c.H === 1000 && c.type === 'cift' && !c.pending; }, null, { timeout: 30000 }).catch(() => {});
await page.waitForTimeout(2500);
const w2 = await ev(() => { const c = window.__viewer.modules.config; return { W: c.win.W, H: c.win.H, hinges: c.win.hinges.count, info: c.win.info.count,
  card: document.getElementById('cfgBody').textContent, lastInfo: { ...window.__viewer.lastInfo } }; });
check('pencere: 800 × 1000 çift açılım (s.24: GRM 920 S / 1050 / 1300/1, OR 800/0)',
  w2.W === 800 && w2.H === 1000 && w2.hinges === 0 && w2.info >= 8 && w2.card.includes('GRM 920 S') && w2.card.includes('OR 800/0') && w2.card.includes('2 kanal'),
  JSON.stringify({ W: w2.W, H: w2.H, hinges: w2.hinges, info: w2.info }));
check('bütçe: pencere kipi < 150K üçgen, < 50 çağrı', w2.lastInfo.maxTris < 150000 && w2.lastInfo.maxCalls < 50, `${w2.lastInfo.maxTris} üçgen, ${w2.lastInfo.maxCalls} çağrı`);
await shot(page, '11b_pencere_cift', 800);
await page.click('#cfgBack');
await page.waitForFunction(() => !window.__viewer.modules.config.on, null, { timeout: 30000 }).catch(() => {});
await page.waitForTimeout(1000);
const w3 = await ev(() => { const v = window.__viewer; return { on: v.modules.config.on, wm: v.state.windowMode, win: v.modules.config.win.group.visible,
  parts: [...v.parts.values()].filter((p) => p.mesh.visible).length, maxD: v.controls.maxDistance, panel: document.getElementById('cfgPanel').hidden }; });
check('pencere: köşeye dönüş (cam geri gelir, pencere gizlenir)', !w3.on && !w3.wm && !w3.win && w3.parts === 26 && w3.maxD === 4 && w3.panel, JSON.stringify(w3));
await page.keyboard.press('p');
await page.waitForFunction(() => window.__viewer.modules.config.on, null, { timeout: 30000 }).catch(() => {});
const pKey = await ev(() => window.__viewer.modules.config.on);
await ev(() => window.__viewer.app.resetAll());
await page.waitForTimeout(1500);
const kr = await ev(() => ({ on: window.__viewer.modules.config.on, parts: [...window.__viewer.parts.values()].filter((p) => p.mesh.visible).length }));
check('pencere: P ile açılır, Sıfırla ile kapanır', pKey && !kr.on && kr.parts === 26, JSON.stringify({ pKey, kr }));
const iWin = await chIdx('pencere');
await ev((i) => { const v = window.__viewer; v.modules.tour.start(); v.modules.tour.goTo(i); v.modules.tour.pause(true); }, iWin);
await page.waitForTimeout(3000);
const tw = await ev(() => ({ on: window.__viewer.modules.config.on, W: window.__viewer.modules.config.W, type: window.__viewer.modules.config.type }));
await ev(() => window.__viewer.modules.tour.stop(false));
await page.waitForTimeout(1000);
const tw2 = await ev(() => window.__viewer.modules.config.on);
check('tur: köşeden pencereye bölümü (1200 mm, içe açılır), turdan çıkınca kapanır', tw.on && tw.W === 1200 && tw.type === 'ice' && !tw2, JSON.stringify({ tw, tw2 }));

// tüm tur bölümleri: her bölümün en yoğun karesi bütçe içinde (x-ray bölümleri dahil)
const perCh = [];
await ev(() => window.__viewer.modules.tour.start());
const nCh = await ev(() => document.querySelectorAll('.tc-dot').length);
for (let i = 0; i < nCh; i++) {
  await ev((i) => { const v = window.__viewer; v.modules.tour.goTo(i); v.modules.tour.pause(true); v.lastInfo.maxTris = 0; v.lastInfo.maxCalls = 0; }, i);
  await page.waitForFunction(() => !window.__viewer.state.explodeAnim && !window.__viewer.state.camAnim, null, { timeout: 60000 }).catch(() => {});
  await page.waitForTimeout(1500);
  perCh.push(await ev(() => ({ i: window.__viewer.modules.tour.i, t: window.__viewer.lastInfo.maxTris, c: window.__viewer.lastInfo.maxCalls })));
}
await ev(() => window.__viewer.modules.tour.stop(false));
const worst = perCh.reduce((a, b) => (b.t > a.t ? b : a), perCh[0]);
check('bütçe: tüm tur bölümleri < 150K üçgen, < 50 çağrı', perCh.every((r) => r.t < 150000 && r.c < 50),
  perCh.map((r) => `${r.i + 1}:${Math.round(r.t / 1000)}K/${r.c}`).join(' ') + ` · en yoğun ${worst.t}`);
const maxInfo = await ev(() => ({ ...window.__viewer.lastInfo }));
check('bütçe (en yoğun durum): < 150K üçgen, < 50 çağrı', maxInfo.maxTris < 150000 && maxInfo.maxCalls < 50, `${maxInfo.maxTris} üçgen, ${maxInfo.maxCalls} çağrı`);

// tur çıkışı kullanıcının durumunu korur: patlatma %50 ve gizli parça
await ev(() => { const v = window.__viewer; v.app.resetAll(); });
await page.waitForFunction(() => !window.__viewer.state.explodeAnim, null, { timeout: 30000 }).catch(() => {});
await ev(() => { const v = window.__viewer; v.setExplodeTarget(0.5, false); v.toggleVisible('cam_2'); v.modules.tour.start(); });
await page.waitForTimeout(2500);
await ev(() => window.__viewer.modules.tour.stop());
await page.waitForFunction(() => !window.__viewer.state.explodeAnim, null, { timeout: 30000 }).catch(() => {});
const kept = await ev(() => ({ ex: window.__viewer.state.explodeTarget, cam2: window.__viewer.parts.get('cam_2').visible }));
check('turdan çık: patlatma ve gizli parça geri gelir', Math.abs(kept.ex - 0.5) < 0.01 && kept.cam2 === false, JSON.stringify(kept));
await ev(() => { const v = window.__viewer; v.toggleVisible('cam_2'); v.app.resetAll(); });

// sayfa geçişi bağlantısı
const href = await page.locator('.page-switch a:not(.active)').getAttribute('href');
check('düz kesit sayfasına geçiş bağlantısı', href === 'kesit.html', href);
const external = [...origins].filter((o) => !/localhost|127\.0\.0\.1/.test(o));
check('harici ağ isteği yok (çevrimdışı)', external.length === 0, [...origins].join(', ') || 'file://');
await ctx.close();

// ------------------------------------------------------------------ kiosk
const k = await openPage(q(url0, 'kiosk=1&idle=15&fs=0&aa=0&spin=0'), { viewport: { width: 1080, height: 1920 }, touch: true });
const kp = k.page;
check('kiosk modu: dokunmatik arayüz', await kp.evaluate(() => document.body.classList.contains('kiosk') && getComputedStyle(document.querySelector('.perf-chip')).display === 'none'));
// açılış animasyonu sürerken sürükleme: tanıtım biter, kiosk kilitlenmez
const introAt = await kp.evaluate(() => window.__viewer.state.intro);
await kp.mouse.move(540, 800); await kp.mouse.down(); await kp.mouse.move(640, 820, { steps: 4 }); await kp.mouse.up();
await kp.waitForFunction(() => !window.__viewer.state.intro, null, { timeout: 20000 }).catch(() => {});
check('kiosk: açılış animasyonunda dokunma kilitlemez', introAt === true && !(await kp.evaluate(() => window.__viewer.state.intro)), 'intro başta ' + introAt);
// yardım penceresi açıkken boşta kalınca tanıtım başlar ve pencere kapanır
await kp.evaluate(() => { document.getElementById('helpModal').hidden = false; });
await kp.evaluate(() => { window.__viewer.modules.kiosk.last = performance.now() - 20000; });
await kp.waitForFunction(() => window.__viewer.modules.kiosk.attract && window.__viewer.modules.tour.active, null, { timeout: 180000 }).catch(() => {});
const at = await kp.evaluate(() => ({ attract: window.__viewer.modules.kiosk.attract, tour: window.__viewer.modules.tour.active, loop: window.__viewer.modules.tour.loop }));
check('kiosk: boşta → tanıtım (döngülü tur)', at.attract && at.tour && at.loop, JSON.stringify(at));
check('kiosk: tanıtımda açık pencere kapanır', await kp.evaluate(() => document.getElementById('helpModal').hidden));
// tanıtım ekranı gerçekten görünür: body konumlandırılmamış, sahne tüm ekranı kaplıyor, tur kartı ve çağrı ekranda
// (body'ye eklenen "attract" sınıfı bir sınıf seçicisine takılıp sayfayı boş gösteriyordu)
const vis = await kp.evaluate(() => {
  const r = (id) => { const b = document.getElementById(id).getBoundingClientRect(); return { w: Math.round(b.width), h: Math.round(b.height), x: Math.round(b.left), y: Math.round(b.top) }; };
  const inView = (b) => b.w > 0 && b.h > 0 && b.x >= 0 && b.y >= 0 && b.x + b.w <= innerWidth && b.y + b.h <= innerHeight;
  const cs = getComputedStyle(document.body);
  const sc = r('scene'), tc = r('tourCard'), ap = r('attract');
  return { pos: cs.position, transform: cs.transform, scene: sc.w === innerWidth && sc.h === innerHeight, tour: inView(tc), call: inView(ap) };
});
check('kiosk: tanıtım ekranı görünür (sahne tam ekran, tur kartı ve çağrı ekranda)', vis.pos === 'static' && vis.transform === 'none' && vis.scene && vis.tour && vis.call, JSON.stringify(vis));
await shot(kp, '10_kiosk_tanitim', 2500);
await kp.touchscreen.tap(540, 700); await kp.waitForTimeout(3000);
const af = await kp.evaluate(() => ({ attract: window.__viewer.modules.kiosk.attract, tour: window.__viewer.modules.tour.active, sel: window.__viewer.state.selected }));
check('kiosk: dokunuş tanıtımı bitirir (seçim sayılmaz)', !af.attract && !af.tour && !af.sel, JSON.stringify(af));
await shot(kp, '11_kiosk_etkilesim', 1500);
// düz kesite geçişte kiosk ayarları korunur (ekran görüntüsü sırasında boşta süresi dolmuş olabilir: sayacı sıfırla)
await kp.evaluate(() => { const k = window.__viewer.modules.kiosk; if (k.attract) k.exitAttract(); k.poke(); });
await kp.waitForTimeout(800);
const kState = await kp.evaluate(() => ({ body: document.body.className, fatal: !!document.querySelector('.fatal'), url: location.search }));
// bağlantının kendi tıklama işleyicisi (parametre aktarımı); isabet testi yazılımsal GL'de uzun ekran görüntüsünden etkilenebilir
await kp.evaluate(() => document.querySelector('.page-switch a:not(.active)').click());
await kp.waitForURL(/kesit\.html/, { timeout: 30000, waitUntil: 'commit' }).catch(() => {});
const kUrl = new URL(kp.url());
check('kiosk: sayfa geçişinde ayarlar korunur', kUrl.pathname.endsWith('kesit.html') && ['kiosk', 'idle', 'fs', 'aa'].every((x) => kUrl.searchParams.has(x)), kUrl.search + ' · ' + JSON.stringify(kState));
await k.ctx.close();

const errors = logs.filter((l) => /\[(pageerror|error)\]|requestfailed/.test(l));
check('konsol hatası yok', errors.length === 0, errors.slice(0, 5).join(' | '));
fs.writeFileSync(path.join(out, 'sonuc.json'), JSON.stringify({ url: url0, results, logs }, null, 1));
console.log(`\n${results.filter((r) => r.ok).length}/${results.length} kontrol geçti`);
await browser.close();
process.exit(results.every((r) => r.ok) ? 0 : 1);
