// Su tahliyesi animasyonu: PDF s.9'daki kesikli su oklarından çıkarılan yol + köşedeki yarık konumları
// (scripts/extract_water_path.py). Damlalar tek InstancedMesh, akış şeridi tek Mesh: +2 çizim çağrısı.
import { WATER_PATH } from './water-path.js';

const N_DROPS = 46;
const SPEED = 0.062;          // m/s

export class Water {
  constructor(app) {
    const { THREE } = app;
    this.app = app;
    const pts = WATER_PATH.points.map((p) => app.toWorld(p[0], p[1], p[2]));
    this.curve = new THREE.CatmullRomCurve3(pts, false, 'centripetal', 0.35);
    this.curve.arcLengthDivisions = 1200;
    this.len = this.curve.getLength();
    this.group = new THREE.Group(); this.group.visible = false;
    app.scene.add(this.group);

    // akış şeridi: yol boyunca kayan kesikli parlak çizgi
    const tube = new THREE.TubeGeometry(this.curve, 520, 0.00042, 6, false);
    this.ribbonMat = new THREE.ShaderMaterial({
      uniforms: { uTime: { value: 0 }, uLen: { value: this.len * 1000 }, uA: { value: 0 } },
      vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
      fragmentShader: `uniform float uTime; uniform float uLen; uniform float uA; varying vec2 vUv;
        void main(){
          float s = vUv.x * uLen / 7.0 - uTime * ${(SPEED * 1000 / 7).toFixed(3)};
          float d = fract(s);
          float a = smoothstep(0.0, 0.25, d) * (1.0 - smoothstep(0.55, 0.8, d));
          float ends = smoothstep(0.0, 0.03, vUv.x) * (1.0 - smoothstep(0.96, 1.0, vUv.x));
          gl_FragColor = vec4(vec3(0.35, 0.78, 1.0) * (0.55 + 0.9 * a), (0.18 + 0.62 * a) * ends * uA);
        }`,
      transparent: true, depthWrite: false, toneMapped: false, blending: THREE.AdditiveBlending,
    });
    this.ribbon = new THREE.Mesh(tube, this.ribbonMat); this.ribbon.renderOrder = 6;
    this.group.add(this.ribbon);

    // damlalar
    const geo = new THREE.IcosahedronGeometry(0.00125, 1);
    this.dropMat = new THREE.MeshPhysicalMaterial({ color: 0x2f8fff, roughness: 0.05, metalness: 0, clearcoat: 1, clearcoatRoughness: 0.05,
      emissive: 0x0b4fa8, emissiveIntensity: 0.55, envMapIntensity: 1.6, transparent: true, opacity: 0.95, depthWrite: false });
    this.drops = new THREE.InstancedMesh(geo, this.dropMat, N_DROPS);
    this.drops.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.drops.frustumCulled = false; this.drops.renderOrder = 7;
    this.group.add(this.drops);
    this.m = new THREE.Matrix4(); this.q = new THREE.Quaternion(); this.s = new THREE.Vector3(); this.p = new THREE.Vector3();
    this.tan = new THREE.Vector3(); this.up = new THREE.Vector3(0, 0, 1);

    // yarık etiketleri (A, B, C, D-E)
    this.tags = [];
    const tagLayer = app.$('waterTags');
    for (const [i, lab] of WATER_PATH.labels) {
      const short = (lab.match(/^([A-D](-E)?) yarığı/) || [])[1];
      if (!short) continue;
      const el = document.createElement('div'); el.className = 'water-tag'; el.textContent = short;
      tagLayer.appendChild(el);
      this.tags.push({ el, world: pts[Math.min(pts.length - 1, i + 1)] });
    }
    this.active = false; this.t = 0; this.a = 0;
    app.onFrame((now, dt) => this.step(dt));
  }
  setVisible(on) { this.group.visible = on; if (on) this.layout(0); }
  start() { this.active = true; this.group.visible = true; this.app.$('waterTags').classList.add('on'); this.app.requestRender(); }
  stop() { this.active = false; this.app.$('waterTags').classList.remove('on'); }
  layout(t) {
    for (let i = 0; i < N_DROPS; i++) {
      const u = ((t * SPEED) / this.len + i / N_DROPS) % 1;
      this.curve.getPointAt(u, this.p);
      this.curve.getTangentAt(u, this.tan);
      const fadeIn = Math.min(1, u / 0.03), fadeOut = Math.min(1, (1 - u) / 0.05);
      const k = Math.max(0.001, Math.min(fadeIn, fadeOut)) * this.a;
      this.q.setFromUnitVectors(this.up, this.tan);
      this.s.set(k * 0.85, k * 0.85, k * 1.6);                  // akış yönünde uzamış damla
      this.m.compose(this.p, this.q, this.s);
      this.drops.setMatrixAt(i, this.m);
    }
    this.drops.instanceMatrix.needsUpdate = true;
  }
  step(dt) {
    const want = this.active ? 1 : 0;
    if (!this.active && this.a < 0.005) { if (this.group.visible && this.a <= 0.005) { this.group.visible = false; this.a = 0; } return false; }
    this.a += (want - this.a) * (1 - Math.exp(-dt * 4));
    this.t += dt;
    this.ribbonMat.uniforms.uTime.value = this.t;
    this.ribbonMat.uniforms.uA.value = this.a;
    this.layout(this.t);
    // yarık etiketleri
    const cam = this.app.camera, w = window.innerWidth, h = window.innerHeight;
    for (const tg of this.tags) {
      this.p.copy(tg.world).project(cam);
      const vis = this.p.z < 1;
      tg.el.style.display = vis ? '' : 'none';
      if (vis) tg.el.style.transform = `translate(${((this.p.x + 1) / 2) * w}px, ${((1 - this.p.y) / 2) * h}px)`;
    }
    return true;
  }
}
