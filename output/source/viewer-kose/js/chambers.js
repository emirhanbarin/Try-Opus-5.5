// Kamara sayacı: kasanın 14, kanadın 11 kapalı kamarası (s.9 çizimi) serbest uçta sırayla renklenir ve numaralanır.
// Dolgu, alt kolun (X = 300) ve yan kolun (Y = 300) uç yüzünün 0,25 mm içinde tek mesh'tir (1 çizim çağrısı);
// kesit düzlemi x / y ekseninde açıksa dolgu kesit yüzünün hemen arkasına kayar. Isı haritası (thermal.js) aynı
// dolguyu sıcaklığa göre boyar.
import { CHAMBERS } from './chambers-data.js';

const EPS = 0.25;           // uç yüzden içeri (mm)
const X0 = 52.25;           // Z = sx - 52,25 (build_corner.py)

export class Chambers {
  constructor(app) {
    const { THREE } = app;
    this.app = app;
    this.n = { frame: CHAMBERS.frame.length, sash: CHAMBERS.sash.length };
    this.total = this.n.frame + this.n.sash;
    const pos = [], idx = [], ord = [], sec = [], leg = [], col = [];
    this.centers = [];
    const col3 = new THREE.Color();
    let k = 0;
    for (const key of ['frame', 'sash']) {
      CHAMBERS[key].forEach((ring, j) => {
        const pts = [];
        for (let i = 0; i < ring.length; i += 2) pts.push(new THREE.Vector2(ring[i], ring[i + 1]));
        const tris = THREE.ShapeUtils.triangulateShape(pts, []);
        // renk: kasa soğuk mavi, kanat turkuaz; komşular ayırt edilsin diye açıklık dönüşümlü
        const t = j / Math.max(1, CHAMBERS[key].length - 1);
        // ShaderMaterial çıkışı dönüştürülmez: HSL değerleri doğrudan ekran (sRGB) rengi olarak yazılır
        if (key === 'frame') col3.setHSL((196 + 26 * t) / 360, 0.85, j % 2 ? 0.56 : 0.66, THREE.LinearSRGBColorSpace);
        else col3.setHSL((152 + 22 * t) / 360, 0.7, j % 2 ? 0.5 : 0.6, THREE.LinearSRGBColorSpace);
        let cx = 0, cy = 0; for (const p of pts) { cx += p.x; cy += p.y; } cx /= pts.length; cy /= pts.length;
        this.centers.push({ key, num: j + 1, sx: cx, sy: cy });
        for (const L of [0, 1]) {
          const base = pos.length / 3;
          for (const p of pts) {
            if (L === 0) pos.push(300 - EPS, p.y, p.x - X0); else pos.push(p.y, 300 - EPS, p.x - X0);
            ord.push(k); sec.push(p.x, p.y); leg.push(L); col.push(col3.r, col3.g, col3.b);
          }
          for (const tr of tris) idx.push(base + tr[0], base + tr[1], base + tr[2]);
        }
        k++;
      });
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute('aOrd', new THREE.Float32BufferAttribute(ord, 1));
    g.setAttribute('aSec', new THREE.Float32BufferAttribute(sec, 2));
    g.setAttribute('aLeg', new THREE.Float32BufferAttribute(leg, 1));
    g.setAttribute('aCol', new THREE.Float32BufferAttribute(col, 3));
    g.setIndex(idx);
    this.uniforms = {
      uCount: { value: this.total }, uOff: { value: new THREE.Vector2() }, uMode: { value: 0 },
      uTemp: { value: null }, uTempBox: { value: new THREE.Vector4(0, 0, 1, 1) },
    };
    this.mat = new THREE.ShaderMaterial({
      uniforms: this.uniforms, side: THREE.DoubleSide, clipping: true, toneMapped: false,
      vertexShader: `
        attribute float aOrd; attribute vec2 aSec; attribute float aLeg; attribute vec3 aCol;
        uniform vec2 uOff;
        varying float vOrd; varying vec2 vSec; varying vec3 vCol;
        #include <clipping_planes_pars_vertex>
        void main() {
          vec3 p = position;
          p.x += aLeg < 0.5 ? uOff.x : 0.0;
          p.y += aLeg > 0.5 ? uOff.y : 0.0;
          vOrd = aOrd; vSec = aSec; vCol = aCol;
          vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);
          #include <clipping_planes_vertex>
          gl_Position = projectionMatrix * mvPosition;
        }`,
      fragmentShader: `
        uniform float uCount; uniform float uMode; uniform sampler2D uTemp; uniform vec4 uTempBox;
        varying float vOrd; varying vec2 vSec; varying vec3 vCol;
        #include <clipping_planes_pars_fragment>
        vec3 thermalRamp(float t);
        void main() {
          #include <clipping_planes_fragment>
          float age = uCount - vOrd;                  // 0..1: yeni açılan kamara parlar
          if (age <= 0.0) discard;
          vec3 c = vCol;
          c = mix(c, vec3(1.0), (1.0 - clamp(age, 0.0, 1.0)) * 0.7);
          if (uMode > 0.5) {
            vec2 uv = (vSec - uTempBox.xy) / uTempBox.zw;
            c = thermalRamp(texture2D(uTemp, uv).r);
          }
          gl_FragColor = vec4(c, 1.0);
        }
        // ısı haritası renk rampası (0 = dış 0 °C, 1 = iç 20 °C); thermal.js ile aynı
        vec3 thermalRamp(float t) {
          t = clamp(t, 0.0, 1.0);
          vec3 a = vec3(0.08, 0.05, 0.35), b = vec3(0.1, 0.45, 0.95), c = vec3(0.1, 0.8, 0.75), d = vec3(0.98, 0.85, 0.2), e = vec3(0.95, 0.25, 0.12);
          if (t < 0.25) return mix(a, b, t / 0.25);
          if (t < 0.5) return mix(b, c, (t - 0.25) / 0.25);
          if (t < 0.75) return mix(c, d, (t - 0.5) / 0.25);
          return mix(d, e, (t - 0.75) / 0.25);
        }`,
    });
    this.mesh = new THREE.Mesh(g, this.mat);
    this.mesh.scale.setScalar(app.MM); this.mesh.visible = false; this.mesh.renderOrder = 1;
    this.mesh.frustumCulled = false;
    app.model.add(this.mesh);
    app.addClipMaterial(this.mat);
    // sayaç ve numara etiketleri
    this.counter = app.$('chamberCount');
    this.cF = this.counter.querySelector('[data-c="frame"]');
    this.cS = this.counter.querySelector('[data-c="sash"]');
    this.layer = app.$('chamberLabels');
    this.labels = this.centers.map((c) => {
      const el = document.createElement('span'); el.className = 'ch-num ' + c.key; el.textContent = c.num;
      this.layer.appendChild(el); return el;
    });
    this.anim = null; this.showLabels = false; this.thermal = false;
    this.v = new THREE.Vector3();
    app.onFrame((now, dt) => this.step(dt));
  }
  get active() { return this.mesh.visible; }
  // run: sayarak aç (kamara modu); show: hepsi açık (ısı haritası dolgusu)
  run() {
    this.mesh.visible = true; this.showLabels = true; this.uniforms.uCount.value = 0;
    this.anim = { t: 0, dur: 7.5 };
    this.counter.hidden = false; this.layer.hidden = false;
    this.app.requestRender();
  }
  show(on, { labels = false } = {}) {
    this.mesh.visible = on; this.anim = null; this.showLabels = on && labels;
    this.uniforms.uCount.value = this.total;
    this.counter.hidden = !(on && labels); this.layer.hidden = !this.showLabels;
    if (on && labels) this.setCounts(this.n.frame, this.n.sash);
    this.app.requestRender();
  }
  stop() { this.show(false); }
  setCounts(f, s) { this.cF.textContent = f; this.cS.textContent = s; }
  step(dt) {
    if (!this.mesh.visible) return false;
    const app = this.app, c = app.state.clip;
    // kesit düzlemi x / y ekseninde: dolgu kesit yüzünün hemen arkasında
    const ox = c.on && c.axis === 'x' ? c.pos - 300 + (c.flip ? 2 * EPS : 0) : 0;
    const oy = c.on && c.axis === 'y' ? c.pos - 300 + (c.flip ? 2 * EPS : 0) : 0;
    this.uniforms.uOff.value.set(ox, oy);
    let active = false;
    if (this.anim) {
      this.anim.t += dt;
      const k = Math.min(1, this.anim.t / this.anim.dur);
      const cnt = k * this.total;
      this.uniforms.uCount.value = cnt;
      this.setCounts(Math.min(this.n.frame, Math.floor(cnt + 0.001)), Math.max(0, Math.min(this.n.sash, Math.floor(cnt + 0.001) - this.n.frame)));
      if (k >= 1) this.anim = null;
      active = true;
    }
    if (this.showLabels) this.placeLabels(ox);
    return active;
  }
  placeLabels(ox) {
    const app = this.app, cam = app.camera, w = innerWidth, h = innerHeight;
    const cnt = this.uniforms.uCount.value;
    const dir = new app.THREE.Vector3(); cam.getWorldDirection(dir);
    const facing = dir.x < -0.2;                        // alt kolun uç yüzü görünüyor mu
    this.centers.forEach((c, i) => {
      const el = this.labels[i];
      if (!facing || cnt <= i) { el.style.opacity = 0; return; }
      this.v.copy(app.toWorld(300 + ox + 0.6, c.sy, c.sx - X0)).project(cam);
      el.style.opacity = 1;
      el.style.transform = `translate(${((this.v.x + 1) / 2) * w}px, ${((1 - this.v.y) / 2) * h}px) translate(-50%, -50%)`;
    });
  }
}
