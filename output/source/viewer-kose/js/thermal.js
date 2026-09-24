// Isı akışı haritası: iç 20 °C / dış 0 °C koşulunda kesitteki sıcaklık dağılımı (scripts/thermal_section.py,
// EN ISO 10077-2 yöntemiyle, varsayılan malzeme değerleriyle yapılmış gösterim amaçlı 2B hesap).
// Kesit yüzleri, kolların serbest uç yüzleri ve kamara dolgusu sıcaklık rengine boyanır (2 °C'de bir eş sıcaklık
// çizgisi, 10 °C kalın); diğer yüzeyler sönükleşir. Açıklamada hesaplanan Uf değil, resmi Uf (ift belgesi) yazılır.
// Ek çizim çağrısı: yalnızca kamara dolgusu (+1).
import { shared } from './materials.js';
import { THERMAL } from './thermal-data.js';
import { PERFORMANCE } from './parts-data.js';

// alt kolun serbest ucu, hafif açıyla: renkli kesit ve sönük gövde birlikte görünür
export const THERMAL_VIEW = { dir: [1, 0.2, 0.42], r: 0.1, target: [0.15, 0.068, -0.004], fov: 20 };

export class Thermal {
  constructor(app, tex) {
    this.app = app; this.tex = tex;
    this.on = false;
    const [x0, y0, w, h] = THERMAL.box;
    shared.uTemp.value = tex;
    shared.uTempBox.value.set(x0, y0 + h, w, -h);       // dokunun ilk satırı kesitin üst kenarı (en büyük sy)
    this.legend = app.$('thermLegend');
    if (PERFORMANCE) app.$('thermUf').textContent = `${PERFORMANCE.uf.label}: ${PERFORMANCE.uf.value} ${PERFORMANCE.uf.unit} · ${PERFORMANCE.uf.basis}`;
    app.$('thermClose').onclick = () => { this.setOn(false); app.userActive(); };
    app.onFrame((now, dt) => this.step(dt));
  }
  setOn(on, { view = true } = {}) {
    const app = this.app, ch = app.modules.chambers;
    if (on === this.on) return;
    this.on = on;
    this.legend.hidden = !on;
    app.$('tThermal')?.setAttribute('aria-pressed', String(on));
    if (on) {
      ch.show(true, { thermal: true });
      if (view) { app.setExplodeTarget(0, true); app.setView(THERMAL_VIEW); app.setTurntable(false); }
    }
    app.markLayout();
    app.requestRender();
  }
  toggle() { this.setOn(!this.on); }
  get k() { return shared.uThermal.value; }             // geçiş durumu (0..1)
  step(dt) {
    const u = shared.uThermal, target = this.on ? 1 : 0;
    if (u.value === target) return false;
    u.value += (target - u.value) * (1 - Math.exp(-dt * 8));
    if (Math.abs(u.value - target) < 0.004) {
      u.value = target;
      // kapanış geçişi bitti: dolgu gizlenir (kamara sayacı bu arada başlatıldıysa dokunulmaz)
      const ch = this.app.modules.chambers;
      if (!this.on && ch.uniforms.uMode.value > 0.5) ch.show(false);
    }
    return true;
  }
}
