// Röntgen merceği: ekranda gezdirilen dairenin içinde PVC profiller (kasa, kanat, çıta, rüzgarlık) çizilmez;
// çelik takviyeler, vidalar, contalar, takoz ve cam görünür. Daire tutamağından sürüklenir; içi dokunuşları
// geçirir (numune döndürülebilir). Tanıtımda mercek alt kol boyunca kendi kendine gezinir.
import { shared, setLensDefine } from './materials.js';

export class Lens {
  constructor(app) {
    this.app = app;
    this.on = false; this.auto = null; this.drag = null;
    this.el = app.$('lensRing');
    this.grip = app.$('lensGrip');
    this.pos = { x: innerWidth / 2, y: innerHeight / 2 }; this.r = 120;
    this.grip.addEventListener('pointerdown', (e) => {
      e.preventDefault(); e.stopPropagation();
      this.drag = { id: e.pointerId, dx: e.clientX - this.pos.x, dy: e.clientY - this.pos.y };
      this.grip.setPointerCapture(e.pointerId); this.auto = null; app.userActive();
    });
    this.grip.addEventListener('pointermove', (e) => {
      if (!this.drag || e.pointerId !== this.drag.id) return;
      this.pos.x = Math.min(innerWidth - 20, Math.max(20, e.clientX - this.drag.dx));
      this.pos.y = Math.min(innerHeight - 20, Math.max(20, e.clientY - this.drag.dy));
      this.sync(); app.userActive();
    });
    const end = (e) => { if (this.drag && e.pointerId === this.drag.id) this.drag = null; };
    this.grip.addEventListener('pointerup', end); this.grip.addEventListener('pointercancel', end);
    window.addEventListener('resize', () => { if (this.on) { this.r = this.radius(); this.sync(); } });
    app.onFrame((now, dt) => this.step(dt));
  }
  radius() { return Math.round(Math.min(innerWidth, innerHeight) * (this.app.KIOSK ? 0.17 : 0.15)); }
  setOn(on, { auto = false } = {}) {
    const app = this.app;
    this.on = on;
    setLensDefine([...app.parts.values()].map((p) => p.mat), on);
    this.el.hidden = !on;
    this.auto = on && auto ? { t: 0 } : null;
    if (on) {
      this.r = this.radius();
      // başlangıç: alt koldaki kasa takviyesinin ekran konumu
      const p = app.toWorld(170, 25, -6).project(app.camera);
      this.pos.x = ((p.x + 1) / 2) * innerWidth; this.pos.y = ((1 - p.y) / 2) * innerHeight;
    }
    app.$('btnLens')?.setAttribute('aria-pressed', String(on));
    this.sync();
  }
  sync() {
    const app = this.app, dpr = app.renderer.getPixelRatio(), H = app.renderer.domElement.height;
    shared.uLens.value.set(this.pos.x * dpr, H - this.pos.y * dpr, this.r * dpr, this.on ? 1 : 0);
    const d = this.r * 2;
    this.el.style.width = d + 'px'; this.el.style.height = d + 'px';
    this.el.style.transform = `translate(${this.pos.x - this.r}px, ${this.pos.y - this.r}px)`;
    app.requestRender();
  }
  contains(x, y) { return this.on && Math.hypot(x - this.pos.x, y - this.pos.y) < this.r; }
  step(dt) {
    if (!this.on) return false;
    if (this.auto) {
      // tanıtım yolu: kasa takviyesi ve vidası boyunca ileri geri (dünya noktasının ekran izdüşümü)
      this.auto.t += dt;
      const k = 0.5 - 0.5 * Math.cos(this.auto.t * 0.45);
      const p = this.app.toWorld(95 + 180 * k, 22 + 10 * Math.sin(this.auto.t * 0.8), -4).project(this.app.camera);
      this.pos.x = ((p.x + 1) / 2) * innerWidth; this.pos.y = ((1 - p.y) / 2) * innerHeight;
      this.sync();
      return true;
    }
    return false;
  }
}
