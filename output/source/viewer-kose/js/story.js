// Üretim hikâyesi: kasa köşesinin üretimi ~46 sn'lik sinematikle anlatılır (tur bölümü; Araçlar'dan da açılır).
//   0 Ekstrüzyon (görsel) · 1 45° kesim (s.6, s.5) · 2 takviye + vidalar (s.10) · 3 kaynak 240–280 °C (s.14)
//   4 köşe temizleme (görsel) · 5 montaj (s.9)
// Kaynaklı kasa profili yüklemede tek mesh'tir; hikâye sırasında aynı köşe noktası özniteliklerini paylaşan iki
// geçici kol mesh'ine bölünür (üçgen ağırlık merkezi x ≥ y: alt kol; gönyede ortak köşe noktası yok). Açık gönye
// uçları mevcut kesit kapağı gölgelendirmesiyle taralı görünür. Isıtıcı plaka ve kaynak taşıntısı görsel
// temsildir; döküman erime payı vermediği için kollar kısalmaz.
import { RINGS } from './rings-data.js';
import { shared } from './materials.js';

const X0 = 52.25;                       // Z = sx - 52,25 (build_corner.py)
const SQ2 = Math.SQRT2;
const ease = (p) => (p <= 0 ? 0 : p >= 1 ? 1 : p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2);
const seg = (t, a, b) => ease((t - a) / (b - a));

const STEPS = [
  { t: 0, title: 'Ekstrüzyon',
    text: 'Profil, çok odacıklı kesitiyle kalıptan sürekli çekilir; kesit s.9 çizimiyle birebirdir. (Canlandırma gösterim amaçlıdır.)',
    view: { dir: [-0.5, 0.36, 0.95], r: 0.14, target: [0.03, 0.04, -0.01] } },
  { t: 6, title: '45° kesim',
    text: 'Kasa kolları 45° kesilir (s.6). Kesim boyu kaynak payıyla hesaplanır: kasa = pencere dış ölçüsü + 6 mm (s.5).',
    view: { dir: [0.34, 0.5, 1.0], r: 0.225, target: [-0.07, 0.14, 0.0] } },
  { t: 11, title: 'Takviye ve vidalar',
    text: 'BF 409-15 galvaniz takviye kamaraya sürülür; boyu kasa boyundan 153 mm kısadır (s.10). 3,9 × 19 YSB vidalar uçtan 150 mm, sonra 300–400 mm arayla (s.10).',
    view: { dir: [0.75, 0.5, 0.95], r: 0.28, target: [-0.01, 0.15, 0.0] } },
  { t: 19, title: 'Kaynak · 240–280 °C',
    text: 'Gönye yüzleri ısıtıcı plakada eritilir; plaka çekilir ve kollar bastırılarak kaynatılır. Destek plakaları profili sabitler (s.14).',
    view: { dir: [0.42, 0.42, 1.0], r: 0.135, target: [-0.106, 0.042, -0.01] } },
  { t: 31, title: 'Köşe temizleme',
    text: 'Kaynak taşıntısı temizlenir; köşe tek parça, kapalı bir profil olur. (Taşıntı ve temizleme görsel amaçlıdır.)',
    view: { dir: [-0.62, 0.55, 0.62], r: 0.095, target: [-0.088, 0.066, 0.0] } },
  { t: 35, title: 'Montaj',
    text: 'Contalar yuvalarına bastırılır, kanat takılır, cam takoz köprüsüne oturur ve cam çıtası iç taraftan klipslenir (s.9).',
    view: 'hero' },
];
export const STORY_DUR = 46;
const FRAME_PARTS = ['kasa_celik_takviye_alt', 'kasa_celik_takviye_yan', 'kasa_vidasi_alt', 'kasa_vidasi_yan'];

export class Story {
  constructor(app) {
    this.app = app;
    this.active = false; this.t = 0; this.stepIdx = -1;
    const { THREE } = app;
    this.tmp = new THREE.Vector3();
    // --- ısıtıcı plaka (gönye düzleminde, 135 × 110 × 3 mm; görsel)
    const plate = new THREE.Mesh(new THREE.BoxGeometry(135, 3, 110),
      new THREE.MeshStandardMaterial({ color: 0x5a5e64, metalness: 0.85, roughness: 0.3, emissive: 0xff5a14, emissiveIntensity: 0 }));
    plate.rotation.z = Math.PI / 4;
    plate.scale.setScalar(app.MM); plate.visible = false;
    this.plate = plate; app.model.add(plate);
    // ısı parıltısı: plaka merkezinde kameraya dönük yumuşak turuncu hale (toplamalı karışım)
    this.glow = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.ShaderMaterial({
      uniforms: { uA: { value: 0 } }, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false,
      vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
      fragmentShader: 'uniform float uA; varying vec2 vUv; void main(){ float d = length(vUv - 0.5) * 2.0; float a = uA * pow(max(0.0, 1.0 - d), 2.0); gl_FragColor = vec4(vec3(1.0, 0.45, 0.12), a); }',
    }));
    this.glow.scale.setScalar(0.17); this.glow.renderOrder = 6; this.glow.visible = false;
    app.model.add(this.glow);
    this.plateLabel = app.$('storyTag');
    // --- kaynak taşıntısı: kasa dış konturu boyunca gönye düzleminde ince boncuk (uGrow ile büyür)
    this.flashU = { uGrow: { value: 0 }, uHot: { value: 0 } };
    this.flash = this.buildFlash();
    this.flash.visible = false; app.model.add(this.flash);
    this.legs = null;
    app.onFrame((now, dt) => this.step(dt));
  }
  buildFlash() {
    const { THREE } = this.app;
    const ring = RINGS.frame, N = ring.length / 2, RS = 6, R = 0.9;
    const pos = [], ctr = [], nrm = [], idx = [];
    const m = new THREE.Vector3(1, -1, 0).normalize(), w = new THREE.Vector3(), o = new THREE.Vector3();
    for (let i = 0; i < N; i++) {
      const a = (i + N - 1) % N, b = (i + 1) % N;
      const tx = ring[2 * b] - ring[2 * a], ty = ring[2 * b + 1] - ring[2 * a + 1];
      const tl = Math.hypot(tx, ty) || 1;
      const nx = ty / tl, ny = -tx / tl;                 // saat yönü tersine halkada dış normal
      const sx = ring[2 * i], sy = ring[2 * i + 1];
      w.set(ny, ny, nx).normalize();                     // kesit (sx, sy) -> gönye düzlemi (sy, sy, sx)
      for (let j = 0; j < RS; j++) {
        const ang = (2 * Math.PI * j) / RS;
        o.copy(w).multiplyScalar(Math.cos(ang)).addScaledVector(m, Math.sin(ang));
        pos.push(sy + o.x * R, sy + o.y * R, sx - X0 + o.z * R);
        ctr.push(sy, sy, sx - X0); nrm.push(o.x, o.y, o.z);
      }
    }
    for (let i = 0; i < N; i++) for (let j = 0; j < RS; j++) {
      const a = i * RS + j, b = ((i + 1) % N) * RS + j, c = ((i + 1) % N) * RS + ((j + 1) % RS), d = i * RS + ((j + 1) % RS);
      idx.push(a, b, c, a, c, d);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute('normal', new THREE.Float32BufferAttribute(nrm, 3));
    g.setAttribute('aCenter', new THREE.Float32BufferAttribute(ctr, 3));
    g.setIndex(idx);
    const mat = new THREE.MeshStandardMaterial({ color: 0xefefea, roughness: 0.42, metalness: 0 });
    const U = this.flashU;
    mat.onBeforeCompile = (sh) => {
      Object.assign(sh.uniforms, U);
      sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nattribute vec3 aCenter; uniform float uGrow;')
        .replace('#include <begin_vertex>', '#include <begin_vertex>\ntransformed = aCenter + (transformed - aCenter) * uGrow;');
      sh.fragmentShader = sh.fragmentShader.replace('#include <common>', '#include <common>\nuniform float uHot;')
        .replace('#include <emissivemap_fragment>', '#include <emissivemap_fragment>\ntotalEmissiveRadiance += vec3(1.0, 0.36, 0.08) * uHot * 1.8;');
    };
    mat.customProgramCacheKey = () => 'kose-flash';
    const mesh = new THREE.Mesh(g, mat);
    mesh.scale.setScalar(this.app.MM); mesh.frustumCulled = false;
    return mesh;
  }
  // kasa profilini alt / yan kol mesh'lerine böl (öznitelikler ortak, yalnızca index ayrı)
  makeLegs() {
    const { THREE } = this.app;
    const p = this.app.parts.get('kasa_profili');
    const g = p.mesh.geometry, P = g.attributes.position, I = g.index;
    const sill = [], jamb = [];
    for (let t = 0; t < I.count; t += 3) {
      const a = I.getX(t), b = I.getX(t + 1), c = I.getX(t + 2);
      const cx = P.getX(a) + P.getX(b) + P.getX(c), cy = P.getY(a) + P.getY(b) + P.getY(c);
      (cx >= cy ? sill : jamb).push(a, b, c);
    }
    const mk = (list) => {
      const gg = new THREE.BufferGeometry();
      for (const k in g.attributes) gg.setAttribute(k, g.attributes[k]);
      gg.setIndex(list); gg.boundingSphere = g.boundingSphere; gg.boundingBox = g.boundingBox;
      const m = new THREE.Mesh(gg, p.mat);
      m.position.copy(p.base); m.scale.copy(p.mesh.scale); m.quaternion.copy(p.mesh.quaternion);
      m.userData.partId = 'kasa_profili';
      this.app.model.add(m);
      return m;
    };
    return { sill: mk(sill), jamb: mk(jamb) };
  }
  start({ caption } = {}) {
    const app = this.app;
    if (this.active) this.stop();
    this.active = true; this.t = 0; this.stepIdx = -1; this.caption = caption;
    this.saved = { seam: shared.uSeam.value };
    if (!this.legs) this.legs = this.makeLegs();
    this.legs.sill.visible = true; this.legs.jamb.visible = false;
    this.legs.sill.material = this.legs.jamb.material = app.parts.get('kasa_profili').mat;
    app.parts.forEach((q) => { q.mesh.visible = false; });
    app.select(null);
    shared.uSeam.value = 0; shared.uHeat.value = 0; shared.uCapTint.value.set(1.0, 0.64, 0.3, 0);
    app.setClip('x', 300, true, { flip: true, quiet: true });
    this.plate.visible = false; this.flash.visible = false;
    this.flashU.uGrow.value = 0; this.flashU.uHot.value = 0;
    app.setTurntable(false);
    app.requestRender();
  }
  stop() {
    if (!this.active) return;
    const app = this.app;
    this.active = false;
    if (this.legs) { this.legs.sill.visible = false; this.legs.jamb.visible = false; }
    this.plate.visible = false; this.flash.visible = false; this.glow.visible = false; this.plateLabel.hidden = true;
    shared.uSeam.value = this.saved.seam; shared.uHeat.value = 0; shared.uCapTint.value.w = 0;
    if (app.state.clip.on) { app.state.clip.on = false; app.state.clip.flip = false; app.updateClip({ quiet: true }); }
    app.refreshVisibility(); app.applyExplode();
    app.state.shadowDirty = true;
    app.requestRender();
  }
  enterStep(i) {
    const app = this.app, S = STEPS[i];
    this.stepIdx = i;
    this.caption?.(S.title, S.text);
    const pose = app.viewPose(S.view, 0);
    app.animateCamera(pose.pos, pose.target, 1500, pose.fov);
    app.state.shadowDirty = true;
    // adımın durumu baştan kurulur (ileri / geri atlamada da tutarlı)
    const kasaMat = app.parts.get('kasa_profili').mat;
    if (i >= 1 && app.state.clip.on) { app.state.clip.on = false; app.state.clip.flip = false; app.updateClip({ quiet: true }); }
    if (i >= 1) shared.uCapTint.value.w = 0;
    if (i < 5) {
      app.parts.forEach((q) => { q.mesh.visible = i >= 2 && FRAME_PARTS.includes(q.def.id); });
      this.legs.sill.visible = true; this.legs.jamb.visible = i >= 1;
      this.legs.sill.material = this.legs.jamb.material = i === 2 ? app.ghostMat : kasaMat;
      this.plate.visible = i === 3;
    } else {
      this.legs.sill.visible = this.legs.jamb.visible = false; this.flash.visible = false; this.plate.visible = false; this.glow.visible = false;
      this.plateLabel.hidden = true;
      app.refreshVisibility();                            // tüm parçalar (kullanıcının gizledikleri hariç)
    }
  }
  // parça konumu: taban + ek öteleme (mm)
  place(mesh, base, dx, dy, dz) {
    const MM = this.app.MM;
    mesh.position.set(base.x + dx * MM, base.y + dy * MM, base.z + dz * MM);
  }
  step(dt) {
    if (!this.active) return false;
    const app = this.app, tour = app.modules.tour;
    if (!(tour?.active && tour.paused)) this.t += dt;
    const t = Math.min(this.t, STORY_DUR);
    let i = 0; while (i + 1 < STEPS.length && t >= STEPS[i + 1].t) i++;
    if (i !== this.stepIdx) this.enterStep(i);
    const kasa = app.parts.get('kasa_profili');
    // --- 0 ekstrüzyon: kesit düzlemi serbest uçtan köşeye iner, kesit yüzü sıcak (turuncu -> beyaz)
    if (i === 0) {
      const k = seg(t, 0.4, 5.6);
      app.state.clip.pos = 300 - 302 * k; app.updateClip({ quiet: true });
      shared.uCapTint.value.w = 0.85 * (1 - seg(t, 4.8, 6.0));
    }
    // --- kollar arası açıklık G (mm): kesim 0 -> 30, kaynak plakaya 2,1, birleşme 0
    let G = 0;
    if (t < 6) G = 0;
    else if (t < 21.5) G = 30 * seg(t, 6.3, 9.5);
    else if (t < 26.5) G = 30 + (1.5 * SQ2 - 30) * seg(t, 21.5, 22.6);
    else G = 1.5 * SQ2 * (1 - seg(t, 26.5, 27.4));
    if (this.legs) { this.place(this.legs.sill, kasa.base, G, 0, 0); this.place(this.legs.jamb, kasa.base, 0, G, 0); }
    // --- 2 takviye kamaraya sürülür, vidalar alttan / dıştan girer
    if (i >= 2 && i < 5) {
      const ins = 190 * (1 - seg(t, 11.8, 15.5)), scr = 36 * (1 - seg(t, 15.2, 17.8));
      const P = (id) => app.parts.get(id);
      this.place(P('kasa_celik_takviye_alt').mesh, P('kasa_celik_takviye_alt').base, G + ins, 0, 0);
      this.place(P('kasa_celik_takviye_yan').mesh, P('kasa_celik_takviye_yan').base, 0, G + ins, 0);
      this.place(P('kasa_vidasi_alt').mesh, P('kasa_vidasi_alt').base, G, -scr, 0);
      this.place(P('kasa_vidasi_yan').mesh, P('kasa_vidasi_yan').base, -scr, G, 0);
    }
    // --- 3 kaynak: plaka önden girer, yüzler ısınır, plaka çıkar, kollar birleşir, taşıntı oluşur, soğur
    if (i === 3 || i === 4) {
      const zIn = 210 * (1 - seg(t, 19.3, 21.3)) + 210 * seg(t, 25.0, 26.4);
      this.plate.visible = zIn < 205;
      this.plate.position.set(36.8 * app.MM, 36.8 * app.MM, (-10 + zIn) * app.MM);   // model grubu yereli (mm -> m)
      const hot = seg(t, 21.0, 22.8) * (1 - seg(t, 24.8, 26.0));
      this.plate.material.emissiveIntensity = 1.4 * hot;
      this.glow.visible = hot > 0.01;
      this.glow.material.uniforms.uA.value = 0.85 * hot;
      this.glow.position.set(36.8 * app.MM, 36.8 * app.MM, 20 * app.MM);
      this.glow.quaternion.copy(app.camera.quaternion);
      shared.uHeat.value = seg(t, 21.8, 24.2) * (1 - seg(t, 27.8, 31.0));
      const grow = seg(t, 26.9, 28.0) * (1 - seg(t, 31.2, 33.5));
      this.flash.visible = grow > 0.002;
      this.flashU.uGrow.value = grow;
      this.flashU.uHot.value = (1 - seg(t, 27.8, 31.0)) * (t > 26.9 ? 1 : 0);
      shared.uSeam.value = seg(t, 32.0, 35.0);
      this.placeTag(t > 20.6 && t < 25.2);
    }
    // --- 5 montaj: kasa dışındaki parçalar kendi patlatma yollarıyla yerine gelir
    if (i === 5) {
      const e = 1 - seg(t, 35.4, 43.5);
      app.parts.forEach((q) => {
        if (q.def.id === 'kasa_profili' || FRAME_PARTS.includes(q.def.id)) { q.mesh.position.copy(q.base); return; }
        let dx = 0, dy = 0, dz = 0;
        for (const ex of q.def.explode) {
          const k = ease(Math.min(1, Math.max(0, (e - ex.t[0]) / (ex.t[1] - ex.t[0]))));
          dx += ex.v[0] * k; dy += ex.v[1] * k; dz += ex.v[2] * k;
        }
        this.place(q.mesh, q.base, dx, dy, dz);
      });
      if (Math.floor(t * 4) !== this.lastShadow) { this.lastShadow = Math.floor(t * 4); app.state.shadowDirty = true; }
    }
    if (this.t >= STORY_DUR + 0.5 && !tour?.active) this.stop();
    return true;
  }
  placeTag(on) {
    const el = this.plateLabel;
    if (!on) { el.hidden = true; return; }
    const app = this.app;
    this.tmp.copy(app.toWorld(60, 60, 45)).project(app.camera);
    el.hidden = false;
    el.style.transform = `translate(${((this.tmp.x + 1) / 2) * innerWidth}px, ${((1 - this.tmp.y) / 2) * innerHeight}px) translate(-50%, -100%)`;
  }
}
