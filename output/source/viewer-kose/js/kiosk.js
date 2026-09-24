// Kiosk modu (?kiosk=1): fuar ekranında gözetimsiz çalışma.
//  - Boşta kalınca (varsayılan 90 sn, &idle=saniye) görünüm sıfırlanır, tur döngüde oynar, 360° döner;
//    "Dokunun ve keşfedin" çağrısı görünür. İlk dokunuş tanıtımı bitirir ve seçim sayılmaz.
//  - Dokunmatik: büyük hedefler, sağ tık / metin seçimi / sayfa yakınlaştırma engelli, imleç gizlenir.
//  - Dayanıklılık: ilk dokunuşta tam ekran; isteğe bağlı &reload=saat (boştayken yeniden yükleme).
//  - Operatör: sağ üst köşeye 3 sn içinde 5 dokunuş performans panelini açar; çıkış Alt+F4 / ⌘Q.
export class Kiosk {
  constructor(app, enabled) {
    this.app = app; this.enabled = enabled;
    const p = new URLSearchParams(location.search);
    this.idleMs = Math.max(15, Number(p.get('idle')) || 90) * 1000;
    this.reloadMs = (Number(p.get('reload')) || 0) * 3600 * 1000;
    this.bootAt = performance.now();
    // tam ekran: tarayıcı zaten kiosk/tam ekran modundaysa ya da &fs=0 verildiyse istenmez
    this.wantFs = p.get('fs') !== '0';
    this.last = performance.now();
    this.attract = false; this.swallow = false;
    this.overlay = app.$('attract');
    if (!enabled) return;
    document.body.classList.add('kiosk');
    const wake = (e) => this.onInput(e);
    for (const ev of ['pointerdown', 'keydown', 'wheel']) window.addEventListener(ev, wake, { capture: true, passive: true });
    window.addEventListener('pointermove', (e) => { if (e.pointerType === 'mouse') this.showCursor(); }, { passive: true });
    window.addEventListener('contextmenu', (e) => e.preventDefault());
    window.addEventListener('dragstart', (e) => e.preventDefault());
    document.addEventListener('gesturestart', (e) => e.preventDefault());
    window.addEventListener('wheel', (e) => { if (e.ctrlKey) e.preventDefault(); }, { passive: false });
    window.addEventListener('keydown', (e) => { if ((e.ctrlKey || e.metaKey) && ['+', '-', '=', '0'].includes(e.key)) e.preventDefault(); });
    this.taps = [];
    window.addEventListener('pointerdown', (e) => {
      if (e.clientX > window.innerWidth - 90 && e.clientY < 90) {
        const now = performance.now(); this.taps = this.taps.filter((t) => now - t < 3000); this.taps.push(now);
        if (this.taps.length >= 5) { this.taps = []; app.$('perfModal').hidden = false; }
      }
    }, { capture: true });
    this.cursorTimer = 0;
    app.onFrame((now) => this.step(now));
    this.overlay.onclick = () => this.exitAttract();
  }
  showCursor() {
    document.body.classList.remove('no-cursor');
    clearTimeout(this.cursorTimer);
    this.cursorTimer = setTimeout(() => document.body.classList.add('no-cursor'), 3000);
  }
  onInput(e) {
    this.last = performance.now();
    const alreadyFull = document.fullscreenElement || (window.innerHeight >= screen.height - 2 && window.innerWidth >= screen.width - 2);
    if (this.wantFs && !alreadyFull && e.type === 'pointerdown') document.documentElement.requestFullscreen?.().catch(() => {});
    if (this.attract) { this.exitAttract(); if (e.type === 'pointerdown') this.swallow = true; }
  }
  poke() { this.last = performance.now(); }
  swallowTap() { const s = this.swallow; this.swallow = false; return s; }
  enterAttract() {
    const app = this.app;
    this.attract = true;
    app.resetAll();
    app.setFinish('beyaz');
    this.overlay.hidden = false;
    document.body.classList.add('attract-on');
    setTimeout(() => { if (this.attract) app.modules.tour.start({ loop: true, attract: true }); }, 1400);
  }
  exitAttract() {
    if (!this.attract) return;
    const app = this.app;
    this.attract = false;
    this.overlay.hidden = true;
    document.body.classList.remove('attract-on');
    app.modules.tour.stop(false);
    app.resetAll();
    app.setTurntable(true); app.turn.pausedUntil = performance.now() + 6000;
    this.last = performance.now();
  }
  step(now) {
    if (!this.enabled) return false;
    if (!this.attract && now - this.last > this.idleMs && !this.app.state.intro) this.enterAttract();
    if (this.attract && this.reloadMs && now - this.bootAt > this.reloadMs) location.reload();
    return false;
  }
}
