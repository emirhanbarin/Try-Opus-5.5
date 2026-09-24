// Teknik çizim bindirmesi: PDF s.9 kesit çizimi, alt kolun serbest ucundaki kesit yüzüne 1:1 yerleşir.
// Ziyaretçi 3B kesitin dökümandaki çizimle birebir örtüştüğünü görür. Tek çizim çağrısı (LineSegments).
import { DRAWING } from './drawing-data.js';

const XE = 300.35;   // uç yüzün (X = 300 mm) hemen önü

function b64(str) {
  const bin = atob(str); const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

export class DrawingOverlay {
  constructor(app) {
    const { THREE } = app;
    this.app = app;
    const seg = new Int16Array(b64(DRAWING.segs).buffer);
    const cid = b64(DRAWING.cols);
    const n = DRAWING.count, q = DRAWING.q;
    const pos = new Float32Array(n * 6), col = new Float32Array(n * 6);
    const pal = DRAWING.colors.map((c) => new THREE.Color(c));
    const off = app.MODEL_OFFSET;
    for (let i = 0; i < n; i++) {
      for (let e = 0; e < 2; e++) {
        const sx = seg[i * 4 + e * 2] * q, sy = seg[i * 4 + e * 2 + 1] * q;
        const k = i * 6 + e * 3;
        pos[k] = XE * app.MM + off.x; pos[k + 1] = sy * app.MM + off.y; pos[k + 2] = (sx - 52.25) * app.MM + off.z;
        const c = pal[cid[i]];
        col[k] = c.r; col[k + 1] = c.g; col[k + 2] = c.b;
      }
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
    this.mat = new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, opacity: 0, toneMapped: false, depthWrite: false });
    this.obj = new THREE.LineSegments(g, this.mat);
    this.obj.visible = false; this.obj.renderOrder = 4; this.obj.frustumCulled = false;
    app.scene.add(this.obj);
    this.on = false; this.a = 0;
    app.onFrame((now, dt) => this.step(dt));
  }
  setVisible(on) { this.on = on; this.app.requestRender(); }
  step(dt) {
    const want = this.on && this.app.state.explode < 0.02 ? 1 : 0;
    if (Math.abs(this.a - want) < 1e-3) { this.a = want; this.obj.visible = want > 0; return false; }
    this.a += (want - this.a) * (1 - Math.exp(-dt * 6));
    this.mat.opacity = 0.95 * this.a;
    this.obj.visible = this.a > 0.01;
    return true;
  }
}
