// Köşeden pencereye: genişlik × yükseklik (kasa dış ölçüsü) ve açılım tipi girilir; kamera geri çekilir ve numune o
// ölçüdeki tam pencerenin sol alt köşesi olur (pencere köşeden büyüyerek açılır). Kart: kesim listesi, drenaj,
// menteşe, kol ve donanım; her satır sayfa referanslı (configurator-data.js). "Köşeye dön" ile geri gelinir.
// Pencere kipinde patlatma, kesit ve ölçüler kapalıdır; diğer araçlar önce köşeye döner.
import { computeWindow, LIMITS, fmtMM, SASH_INSET } from './configurator-data.js';
import { WindowModel } from './window.js';

const HIDE = ['cam_1', 'cam_2', 'cam_3'];        // numunenin cam parçaları: pencerede tam paneller çizilir
const STEP = 10;                                  // kaydırıcı adımı (mm)

export class Configurator {
  constructor(app) {
    this.app = app;
    this.on = false; this.W = 1200; this.H = 1400; this.type = 'ice';
    this.win = new WindowModel(app, app.tier);
    this.hide = new Set(HIDE);
    const $ = app.$;
    this.panel = $('cfgPanel'); this.body = $('cfgBody'); this.tagsEl = $('cfgTags');
    this.inW = $('cfgW'); this.inH = $('cfgH');
    for (const [el, k, max] of [[this.inW, 'W', LIMITS.maxW], [this.inH, 'H', LIMITS.maxH]]) {
      el.min = LIMITS.min; el.max = max; el.step = STEP;
      el.addEventListener('input', () => { this[k] = Number(el.value); this.queue(); app.userActive(); });
    }
    document.querySelectorAll('[data-cfg-step]').forEach((b) => (b.onclick = () => {
      const [k, d] = b.dataset.cfgStep.split(':'), max = k === 'W' ? LIMITS.maxW : LIMITS.maxH;
      this[k] = Math.min(max, Math.max(LIMITS.min, this[k] + Number(d))); this.queue(); app.userActive();
    }));
    document.querySelectorAll('[data-wtype]').forEach((b) => (b.onclick = () => { this.type = b.dataset.wtype; this.queue(); app.userActive(); }));
    $('cfgClose').onclick = () => { this.exit(); app.userActive(); };
    $('cfgBack').onclick = () => { this.exit(); app.userActive(); };
    this.tags = ['handle', 'hinge', 'drain', 'sample'].map((k) => { const e = document.createElement('span'); e.className = 'cfg-tag ' + k; this.tagsEl.append(e); return { k, e }; });
    this.v = new app.THREE.Vector3();
    this.grow = null; this.pending = false; this.lastBuild = 0;
    app.onFrame((now, dt) => this.step(now, dt));
  }
  get active() { return this.on; }
  isHidden(id) { return this.on && this.hide.has(id); }
  // açılışta gölgelendiricileri önceden derlemek için pencere geçici olarak görünür yapılır (ilk açılışta takılma olmasın)
  prewarm(on) {
    if (on) { this.build(); this.win.setGrow(100); }
    this.win.setVisible(on || this.on);
  }
  open({ W, H, type, view = true } = {}) {
    const app = this.app, m = app.modules, s = app.state;
    if (W) this.W = W; if (H) this.H = H; if (type) this.type = type;
    if (!this.on) {
      m.thermal?.setOn(false, { view: false }); m.measure?.setOn(false); m.chambers?.stop(); m.water?.stop();
      if (m.lens?.on) { m.lens.setOn(false); app.$('tLens').setAttribute('aria-pressed', 'false'); }
      if (s.clip.on) { s.clip.on = false; app.updateClip(); }
      if (s.dims) app.setDims(false);
      if (s.drawing) app.setDrawing(false);
      if (s.hotspots) app.setHotspots(false);            // işaret kartları kesit açabilir; pencere kesitlenmez
      app.select(null); app.setGhost(null);
      app.setExplodeTarget(0, false); s.explode = 0; app.applyExplode();
      this.on = true; s.windowMode = true;
      document.body.classList.add('window-mode');
      this.panel.hidden = false; this.tagsEl.hidden = false;
      app.$('tWindow')?.setAttribute('aria-pressed', 'true');
      app.setStage(false);
      app.controls.maxDistance = 10;
      app.refreshVisibility();
      this.win.setVisible(true);
      this.win.growR = 0.3; this.win.setGrow(0.3);
    }
    this.grow = { t: 0, dur: 1.6, from: this.win.growR, to: Math.hypot(this.W, this.H) * app.MM + 0.05 };
    this.build();
    if (view) this.frame();
    app.markLayout(); app.requestRender();
  }
  exit({ instant = false } = {}) {
    if (!this.on) return;
    const app = this.app;
    if (instant) { this.finishExit(); return; }
    this.grow = { t: 0, dur: 0.9, from: this.win.growR, to: 0.3, exit: true };
    app.setView('hero');
  }
  finishExit() {
    const app = this.app, s = app.state;
    this.on = false; s.windowMode = false; this.grow = null;
    document.body.classList.remove('window-mode');
    this.panel.hidden = true; this.tagsEl.hidden = true;
    app.$('tWindow')?.setAttribute('aria-pressed', 'false');
    this.win.setVisible(false);
    app.setStage(true);
    app.controls.maxDistance = 4;
    app.refreshVisibility();
    app.markLayout(); app.requestRender();
  }
  queue() { this.pending = true; }
  build() {
    const c = computeWindow({ W: this.W, H: this.H, type: this.type });
    this.c = c;
    this.win.build(this.W, this.H, c);
    this.inW.value = this.W; this.inH.value = this.H;
    this.app.$('cfgWVal').textContent = fmtMM(this.W); this.app.$('cfgHVal').textContent = fmtMM(this.H);
    document.querySelectorAll('[data-wtype]').forEach((b) => { const a = b.dataset.wtype === this.type; b.classList.toggle('active', a); b.setAttribute('aria-checked', String(a)); });
    this.renderCard(c);
    // büyüme sürerken ölçü değişirse hedef yeni köşegene taşınır (büyük pencere yarım kalmasın)
    const full = Math.hypot(this.W, this.H) * this.app.MM + 0.05;
    if (this.grow) { if (!this.grow.exit) this.grow.to = full; } else this.win.setGrow(this.win.growR = full);
    this.app.requestRender();
  }
  frame(dur = 1500) {
    const app = this.app, MM = app.MM, o = app.MODEL_OFFSET;
    const r = 0.5 * Math.hypot(this.W, this.H) * MM * 1.04;
    app.setView({ dir: [0.3, 0.14, 1], r, target: [o.x + (this.W / 2) * MM, (this.H / 2) * MM, 0] }, false, dur);
  }
  renderCard(c) {
    const el = (tag, cls, text) => { const e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; };
    const sec = (title, src) => { const h = el('div', 'cfg-sec'); h.append(el('b', null, title)); if (src) h.append(el('span', 'src', src)); return h; };
    const rows = (list) => {                            // üç sütun: etiket · değer · kaynak
      const dl = el('dl', 'cfg-list');
      for (const [k, v, src] of list) {
        const dd = el('dd');
        if (Array.isArray(v)) for (const line of v) dd.append(el('span', 'opt', line)); else dd.textContent = v;
        dl.append(el('dt', null, k), dd, el('span', src ? 'src' : 'nosrc', src || ''));
      }
      return dl;
    };
    const out = [];
    out.push(sec('Kesim listesi', 's.5, s.10, s.11'));
    out.push(rows([
      ...c.cut.map((r) => [r.label, `${fmtMM(r.len)} × ${r.count}`, r.src.split(' ')[0]]),
      ['Kanat içi cam', `${Math.round(c.glass.w).toLocaleString('tr-TR')} × ${fmtMM(c.glass.h)}`, c.glass.src],
    ]));
    out.push(el('p', 'cfg-formula', 'D kasa dış ölçüsü: kasa D + 6, kanat D − 74, cam D − 202 (s.5). A profil kesim boyu: takviye kasada A − 153 (s.10), kanatta A − 160 (s.11).'));
    out.push(sec('Drenaj kanalı', 's.8, s.11'));
    out.push(rows([
      ['Kasa (alt)', `${c.drain.frame.n} kanal · C = ${fmtMM(c.drain.frame.L)}`],
      ['Kanat (alt)', `${c.drain.sash.n} kanal · C = ${fmtMM(c.drain.sash.L)}`],
    ]));
    if (c.hinges) {
      out.push(sec('Menteşe', c.hinges.src));
      out.push(rows([
        ['Adet', `${c.hinges.n} · kanat yüksekliği A = ${fmtMM(c.sashH)}`],
        ['Konum', 'kanat alt kenarından ' + c.hinges.pos.slice().reverse().map((p) => Math.round(p)).join(' · ') + ' mm'],
      ]));
    } else {
      out.push(sec('Çift açılım donanımı', 's.24'));
      const opt = (list) => (list.length ? list.map((x) => `${x.name} · ${x.min}–${x.max} · ${x.code}`) : 'uygun ürün yok');
      out.push(rows([
        [`İspanyolet (GRM) · A = ${fmtMM(c.sashH)}`, opt(c.grm)],
        [`Makas (OR) · B = ${fmtMM(c.sashW)}`, opt(c.or)],
      ]));
      out.push(el('p', 'cfg-formula', 'Uygun ürünler: ölçüsü s.24 aralığına giren tüm seçenekler (ad · aralık mm · kod, dökümandaki haliyle). Aralıklar kanat ölçüsüyle karşılaştırılır; döküman ölçü tanımını vermez.'));
    }
    out.push(sec('Kol', 's.17, s.11'));
    out.push(rows([['Konum', `kanat alt kenarından A/2 = ${fmtMM(c.sashH / 2)}; kanat kenarından 33 mm`]]));
    if (c.warn.length) { const w = el('div', 'cfg-warn'); for (const t of c.warn) w.append(el('p', null, t)); out.push(w); }
    out.push(el('p', 'cfg-note', 'Kanat ölçüsü W − 80 × H − 80 (s.9: kanat dış kenarı kasa kenarından 40 mm içeride). Sınır değerlerde üst sınıf alınır. Uçlardaki drenaj düzeni s.8\'den; ara kanalların yeri varsayım (eşit aralık). Menteşe, kol ve donanım biçimleri temsilidir, konumları dökümandandır. Sabit cam, kayıt ve kapı tipleri bu sürümde yok; çıta ve conta boyu dökümanda verilmez.'));
    this.body.replaceChildren(...out);
    // 3B etiket metinleri
    const T = Object.fromEntries(this.tags.map((t) => [t.k, t.e]));
    T.handle.textContent = `Kol · A/2 = ${fmtMM(c.sashH / 2)}`;
    T.hinge.textContent = c.hinges ? `Menteşe × ${c.hinges.n}` : 'Makas (OR) · köşe yatağı';
    T.drain.textContent = `Drenaj · kasa ${c.drain.frame.n} · kanat ${c.drain.sash.n} kanal`;
    T.sample.textContent = 'Numune köşesi · 300 × 300 mm';
  }
  step(now, dt) {
    if (!this.on) return false;
    const app = this.app;
    let active = false;
    if (this.pending && now - this.lastBuild > 60) { this.pending = false; this.lastBuild = now; this.build(); this.frame(700); active = true; }
    if (this.grow) {
      const g = this.grow;
      g.t += dt;
      const k = Math.min(1, g.t / g.dur), e = k < 0.5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2;
      this.win.growR = g.from + (g.to - g.from) * e; this.win.setGrow(this.win.growR);
      if (k >= 1) { this.grow = null; if (g.exit) { this.finishExit(); return true; } }
      active = true;
    }
    const mv = !this.grow;
    if (this.win.info.visible !== mv) { this.win.setMarkers(mv); active = true; }
    this.placeTags();
    return active;
  }
  placeTags() {
    const app = this.app, c = this.c, cam = app.camera, w = innerWidth, h = innerHeight, show = !this.grow;
    const at = { handle: [c.handle.x + 30, c.handle.y, 70], hinge: [this.W - 20, SASH_INSET + (c.hinges ? c.hinges.pos[0] : c.sashH - 20), 60],
      drain: [this.W / 2, 0, -52], sample: [150, 300, 60] };
    for (const { k, e } of this.tags) {
      const p = at[k];
      this.v.copy(app.toWorld(p[0], p[1], p[2])).project(cam);
      if (!show || this.v.z > 1) { e.style.opacity = 0; continue; }
      e.style.opacity = 1;
      e.style.transform = `translate(${((this.v.x + 1) / 2) * w}px, ${((1 - this.v.y) / 2) * h}px)`;
    }
  }
}
