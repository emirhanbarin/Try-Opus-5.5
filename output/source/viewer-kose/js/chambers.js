// Kamara sayacı: kasanın 14, kanadın 11 kapalı kamarası (s.9 çizimi) serbest uçta sırayla renklenir ve numaralanır.
// Dolgu, alt kolun (X = 300) ve yan kolun (Y = 300) uç yüzünün 0,25 mm içinde tek mesh'tir (1 çizim çağrısı);
// kesit düzlemi x / y ekseninde açıksa dolgu kesit yüzünün hemen arkasına kayar. Isı haritası (thermal.js) aynı
// dolguyu sıcaklığa göre boyar; bu modda gönye kesiti için üçüncü bir dolgu takımı (x - y = sabit düzlemi) açılır.
import { CHAMBERS } from './chambers-data.js';
import { shared, THERMAL_GLSL } from './materials.js';

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
        // 0: alt kol ucu, 1: yan kol ucu, 2: gönye düzlemi (x = y; kaydırma uOffD ile)
        for (const L of [0, 1, 2]) {
          const base = pos.length / 3;
          for (const p of pts) {
            if (L === 0) pos.push(300 - EPS, p.y, p.x - X0); else if (L === 1) pos.push(p.y, 300 - EPS, p.x - X0); else pos.push(p.y, p.y, p.x - X0);
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
      uCount: { value: this.total }, uOff: { value: new THREE.Vector2() }, uOffD: { value: new THREE.Vector3() },
      uMode: { value: 0 },                                  // 0: kamara sayacı renkleri, 1: ısı haritası (koyu taban)
      uThermal: shared.uThermal, uTemp: shared.uTemp, uTempBox: shared.uTempBox,
    };
    this.mat = new THREE.ShaderMaterial({
      uniforms: this.uniforms, side: THREE.DoubleSide, clipping: true, toneMapped: false,
      vertexShader: `
        attribute float aOrd; attribute vec2 aSec; attribute float aLeg; attribute vec3 aCol;
        uniform vec2 uOff; uniform vec3 uOffD;
        varying float vOrd; varying vec2 vSec; varying vec3 vCol; varying vec3 vObj; varying float vLeg;
        #include <clipping_planes_pars_vertex>
        void main() {
          vec3 p = position;
          if (aLeg < 0.5) p.x += uOff.x; else if (aLeg < 1.5) p.y += uOff.y; else p.xy += uOffD.xy;
          vOrd = aOrd; vSec = aSec; vCol = aCol; vObj = p; vLeg = aLeg;
          vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);
          #include <clipping_planes_vertex>
          gl_Position = projectionMatrix * mvPosition;
          if (aLeg > 1.5 && uOffD.z < 0.5) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);   // gönye takımı kapalı: kırpılır
        }`,
      fragmentShader: `
        uniform float uCount; uniform float uMode; uniform float uThermal; uniform sampler2D uTemp; uniform vec4 uTempBox;
        varying float vOrd; varying vec2 vSec; varying vec3 vCol; varying vec3 vObj; varying float vLeg;
        #include <clipping_planes_pars_fragment>
        ${THERMAL_GLSL}
        void main() {
          vec3 th = thermalShade(texture2D(uTemp, (vSec - uTempBox.xy) / uTempBox.zw).r);   // türevler discard'dan önce
          #include <clipping_planes_fragment>
          // yalnızca kendi kolunun malzemesinde: alt kol x ≥ y, yan kol y ≥ x (köşeye yakın kesitte öbür kol başlar);
          // gönye takımı kolların serbest ucunu aşmaz
          if (vLeg < 0.5 ? vObj.y > vObj.x + 0.01 : vLeg < 1.5 ? vObj.x > vObj.y + 0.01 : max(vObj.x, vObj.y) > 300.0) discard;
          float age = uCount - vOrd;                  // 0..1: yeni açılan kamara parlar
          if (age <= 0.0) discard;
          vec3 c = vCol;
          c = mix(c, vec3(1.0), (1.0 - clamp(age, 0.0, 1.0)) * 0.7);
          if (uMode > 0.5) c = mix(vec3(0.05), th, uThermal);
          gl_FragColor = vec4(c, 1.0);
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
    this.anim = null; this.showLabels = false;
    this.v = new THREE.Vector3();
    app.onFrame((now, dt) => this.step(dt));
  }
  get active() { return this.mesh.visible; }
  // run: sayarak aç (kamara modu); show: hepsi açık (ısı haritası dolgusu)
  run() {
    this.mesh.visible = true; this.showLabels = true; this.uniforms.uCount.value = 0; this.uniforms.uMode.value = 0;
    this.anim = { t: 0, dur: 7.5 };
    this.counter.hidden = false; this.layer.hidden = false;
    this.app.requestRender();
  }
  show(on, { labels = false, thermal = false } = {}) {
    this.mesh.visible = on; this.anim = null; this.showLabels = on && labels;
    this.uniforms.uMode.value = on && thermal ? 1 : 0;
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
    // gönye kesiti (yalnızca ısı haritasında): düzlem x - y = k; k ≥ 0 ise alt kolda (X = sy + k), değilse yan kolda
    // (Y = sy - k). Dolgu, kalan tarafa 0,25 mm içeri alınır.
    if (c.on && c.axis === 'd' && this.uniforms.uMode.value > 0.5) {
      const k = c.pos * Math.SQRT2, s = (c.flip ? -1 : 1) * EPS / Math.SQRT2;
      this.uniforms.uOffD.value.set(Math.max(k, 0) + s, -Math.min(k, 0) - s, 1);
    } else this.uniforms.uOffD.value.z = 0;
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
