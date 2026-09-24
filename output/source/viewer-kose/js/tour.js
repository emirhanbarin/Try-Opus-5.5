// Keşif turu: veri güdümlü bölümler (kamera, patlatma, kesit, hayalet görünüm, izolasyon, işaretler, su, renk,
// üretim hikâyesi, röntgen merceği, kamara sayacı, ısı haritası, köşeden pencereye). Normal kullanımda ileri/geri/duraklat; kiosk tanıtım modunda
// döngüde oynar; start({ only }) tek bir bölümü oynatıp biter (Araçlar'dan üretim hikâyesi).
import { TOUR } from './tour-data.js';

export class Tour {
  constructor(app) {
    this.app = app;
    const $ = app.$;
    this.card = $('tourCard');
    this.el = {
      count: this.card.querySelector('.tc-count'), title: this.card.querySelector('.tc-title'), text: this.card.querySelector('.tc-text'),
      bar: this.card.querySelector('.tc-progress span'), dots: this.card.querySelector('.tc-dots'), pause: $('tcPause'),
    };
    TOUR.forEach((ch, i) => {
      const d = document.createElement('button'); d.className = 'tc-dot'; d.title = ch.title; d.setAttribute('aria-label', `${i + 1}. bölüm: ${ch.title}`);
      d.onclick = () => { this.goTo(i); this.app.userActive(); };
      this.el.dots.append(d);
    });
    $('tcPrev').onclick = () => { this.prev(); app.userActive(); };
    $('tcNext').onclick = () => { this.next(); app.userActive(); };
    $('tcPause').onclick = () => { this.pause(); app.userActive(); };
    $('tcClose').onclick = () => this.stop();
    this.active = false; this.paused = false; this.i = 0; this.t = 0; this.loop = false; this.attract = false;
    this.ids = TOUR.map((c) => c.id);
    this.finishTimer = 0;
    app.onFrame((now, dt) => this.step(dt));
    // turda sahneye dokunmak turu duraklatır (kiosk tanıtımında kiosk modülü yönetir)
    app.renderer.domElement.addEventListener('pointerdown', () => { if (this.active && !this.attract && !this.paused) this.pause(true); });
  }
  toggle() { if (this.active) this.stop(); else this.start(); }
  start({ loop = false, attract = false, only = null } = {}) {
    const app = this.app, s = app.state;
    this.only = only != null ? Math.max(0, TOUR.findIndex((c) => c.id === only)) : null;
    if (!this.active) {
      // patlatma animasyonu sürüyorsa ara değer değil hedef kaydedilir; gizle/izole durumu da korunur
      this.saved = { explode: s.explodeAnim ? s.explodeAnim.to : s.explodeTarget, finish: s.finish, turn: app.turn.on,
        pos: app.camera.position.clone(), target: app.controls.target.clone(), fov: app.camera.fov,
        hidden: [...app.parts.values()].filter((p) => !p.visible).map((p) => p.def.id), solo: s.soloSet ? [...s.soloSet] : null };
    }
    this.active = true; this.loop = loop; this.attract = attract; this.paused = false;
    document.body.classList.add('touring'); document.body.classList.toggle('attract', attract);
    this.card.hidden = false;
    app.$('btnTour').classList.add('active'); app.$('btnTour').querySelector('span').textContent = 'Turu bitir';
    app.select(null); app.closePopovers();
    this.card.classList.toggle('single', this.only != null);
    this.goTo(this.only ?? 0);
  }
  cleanup() {
    const app = this.app, m = app.modules;
    m.story?.stop(); m.thermal?.setOn(false, { view: false }); m.measure?.setOn(false); m.config?.exit({ instant: true }); m.chambers?.stop();
    if (m.lens?.on) { m.lens.setOn(false); app.$('tLens')?.setAttribute('aria-pressed', 'false'); }
    m.water.stop(); m.hotspots.setVisible(false); m.hotspots.setCallouts(false);
    app.setGhost(null);
    app.state.soloSet = null; app.parts.forEach((p) => (p.visible = true)); app.refreshVisibility();
    if (app.state.dims) app.setDims(false);
    if (app.state.drawing) app.setDrawing(false);
    if (app.state.clip.on) { app.state.clip.on = false; app.updateClip(); app.$('btnSection').setAttribute('aria-pressed', 'false'); }
    this.finishSeq = null;
  }
  goTo(i) {
    const app = this.app, m = app.modules;
    this.i = (i + TOUR.length) % TOUR.length; this.t = 0;
    const ch = TOUR[this.i];
    this.cleanup();
    app.setExplodeTarget(ch.explode || 0, true, 1600);
    if (ch.clip) app.setClip(ch.clip.axis, ch.clip.pos);
    if (ch.ghost) app.setGhost(ch.ghost);
    if (ch.solo) { app.state.soloSet = new Set(ch.solo); app.refreshVisibility(); }
    if (ch.dims) app.setDims(true);
    if (ch.water) m.water.start();
    if (ch.hotspots) m.hotspots.setVisible(true, ch.hotspots);
    if (ch.callouts) m.hotspots.setCallouts(true);
    if (ch.finishes) { this.finishSeq = ch.finishes; this.finishIdx = 0; this.finishTimer = 0; app.setFinish(ch.finishes[0]); }
    else if (app.state.finish !== 'beyaz' && this.attract) app.setFinish('beyaz');
    app.setTurntable(!!ch.turn);
    // kamera: patlatma hedefine göre sığdırılmış poz (pencere bölümünde yapılandırıcı kendini çerçeveler)
    if (ch.window) m.config.open(ch.window);
    else { const pose = app.viewPose(ch.view, ch.explode || 0); app.animateCamera(pose.pos, pose.target, 1500, pose.fov); }
    if (ch.lens) m.lens.setOn(true, { auto: true });
    if (ch.chambers) m.chambers.run();
    if (ch.thermal) m.thermal.setOn(true, { view: false });
    if (ch.story) m.story.start({ caption: (t, x) => this.setCaption(t, x) });
    // kart
    this.el.count.textContent = `${this.i + 1} / ${TOUR.length}`;
    this.el.title.textContent = ch.title;
    this.el.text.textContent = ch.text;
    this.card.classList.remove('swap'); void this.card.offsetWidth; this.card.classList.add('swap');
    [...this.el.dots.children].forEach((d, k) => d.classList.toggle('on', k === this.i));
    this.el.bar.style.width = '0%';
    app.requestRender();
  }
  next() {
    if (this.only != null || (this.i + 1 >= TOUR.length && !this.loop)) { this.stop(); return; }
    this.goTo(this.i + 1);
  }
  // bölüm içinde değişen başlık (üretim hikâyesi adımları)
  setCaption(title, text) {
    this.el.title.textContent = title; this.el.text.textContent = text;
    this.card.classList.remove('swap'); void this.card.offsetWidth; this.card.classList.add('swap');
  }
  prev() { this.goTo(this.i - 1); }
  pause(force) {
    this.paused = force === true ? true : !this.paused;
    this.card.classList.toggle('paused', this.paused);
    this.el.pause.setAttribute('aria-label', this.paused ? 'Devam et' : 'Duraklat');
    this.el.pause.title = this.paused ? 'Devam et (boşluk)' : 'Duraklat (boşluk)';
  }
  stop(restore = true) {
    if (!this.active) return;
    const app = this.app;
    this.active = false; this.paused = false; this.card.classList.remove('paused');
    document.body.classList.remove('touring', 'attract');
    this.card.hidden = true; this.card.classList.remove('single'); this.only = null;
    app.$('btnTour').classList.remove('active'); app.$('btnTour').querySelector('span').textContent = 'Keşif turu';
    this.cleanup();
    if (restore && this.saved) {
      app.setExplodeTarget(this.saved.explode || 0, true);
      for (const id of this.saved.hidden) { const p = app.parts.get(id); if (p) p.visible = false; }
      app.state.soloSet = this.saved.solo ? new Set(this.saved.solo) : null;
      app.refreshVisibility();
      app.setFinish(this.saved.finish);
      app.animateCamera(this.saved.pos, this.saved.target, 1100, this.saved.fov);
      app.setTurntable(this.saved.turn);
    }
    app.requestRender();
  }
  step(dt) {
    if (!this.active) return false;
    const ch = TOUR[this.i];
    if (!this.paused) {
      this.t += dt * 1000;
      if (this.finishSeq) {
        this.finishTimer += dt * 1000;
        const per = ch.dur / this.finishSeq.length;
        const k = Math.min(this.finishSeq.length - 1, Math.floor(this.finishTimer / per));
        if (k !== this.finishIdx) { this.finishIdx = k; this.app.setFinish(this.finishSeq[k]); }
      }
      this.el.bar.style.width = Math.min(100, (this.t / ch.dur) * 100) + '%';
      if (this.t >= ch.dur) this.next();
    }
    return false;
  }
}
