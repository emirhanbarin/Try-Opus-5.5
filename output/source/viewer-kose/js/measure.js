// Ölçüm aracı: iki noktaya dokunulunca aradaki mesafe mm cinsinden (0,1 hassasiyet) gösterilir; en fazla 3 ölçü
// (dördüncüsü en eskinin yerine geçer). Nokta, ekranda 10 px (dokunmatikte 18 px) içindeki en yakın kenar ya da köşeye
// yapışır; köşe, dokunuşa çok yakınsa (yarıçapın %35'i) önceliklidir.
// Kesit açıkken kesit yüzüne (kapak) dokunulursa nokta kesit düzlemine alınır ve kesitin dış hattına yapışır
// (section-inset.js ile aynı düzlem × mesh kesişimi). Çizgiler tek LineSegments (+1 çizim çağrısı), etiketler DOM.
// Modelden ölçümdür; döküman ölçüleri s.9'dadır.
import { makeCutter } from './section-inset.js';

const SNAP = { mouse: 10, touch: 18 };
const MAX = 3;
const fmt = (m) => (m * 1000).toFixed(1).replace('.', ',') + ' mm';

export class Measure {
  constructor(app) {
    const { THREE } = app;
    this.app = app; this.THREE = THREE;
    this.on = false; this.items = []; this.first = null; this.hover = null;
    this.cut = makeCutter(THREE);
    this.ray = new THREE.Raycaster(); this.ray.firstHitOnly = false;
    this.ndc = new THREE.Vector2(); this.v = new THREE.Vector3();
    const g = new THREE.BufferGeometry();
    this.pos = new Float32Array((MAX + 1) * 6);
    g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage));
    g.setDrawRange(0, 0);
    this.line = new THREE.LineSegments(g, new THREE.LineBasicMaterial({ color: 0xffb03a, transparent: true, opacity: 0.95, depthTest: false, toneMapped: false }));
    this.line.renderOrder = 10; this.line.frustumCulled = false; this.line.visible = false;
    app.scene.add(this.line);
    this.bar = app.$('measureBar'); this.layer = app.$('measureLayer'); this.snapEl = app.$('measureSnap');
    this.hintEl = app.$('measureHint');
    app.$('measureClear').onclick = () => { this.clear(); app.userActive(); };
    app.$('measureDone').onclick = () => { this.setOn(false); app.userActive(); };
    app.onFrame(() => this.step());
  }
  setOn(on) {
    if (on === this.on) return;
    const app = this.app;
    this.on = on;
    this.bar.hidden = !on;
    app.$('tMeasure')?.setAttribute('aria-pressed', String(on));
    document.body.classList.toggle('measuring', on);
    if (on) app.select(null);
    else { this.clear(); }
    this.snapEl.hidden = true;
    app.markLayout(); app.requestRender();
  }
  toggle() { this.setOn(!this.on); }
  clear() {
    this.items = []; this.first = null; this.hover = null;
    this.layer.replaceChildren();
    this.rebuild();
  }
  // ekrandaki (x, y) için yapışmış nokta: { p: Vector3 (dünya), kind: 'köşe' | 'kenar' | 'yüzey' | 'kesit' }
  snap(x, y, type = 'mouse') {
    const SNAP_PX = type === 'touch' ? SNAP.touch : SNAP.mouse, NEAR = SNAP_PX * 0.35;
    const app = this.app, THREE = this.THREE, cam = app.camera, el = app.renderer.domElement;
    const r = el.getBoundingClientRect();
    this.ndc.set(((x - r.left) / r.width) * 2 - 1, -((y - r.top) / r.height) * 2 + 1);
    this.ray.setFromCamera(this.ndc, cam);
    const meshes = []; app.parts.forEach((p) => { if (p.mesh.visible && !p.ghost) meshes.push(p.mesh); });
    const c = app.state.clip, plane = app.clipPlane;
    let hits = this.ray.intersectObjects(meshes, false).filter((h) => !c.on || plane.distanceToPoint(h.point) >= -1e-5);
    if (app.modules.lens?.contains(x, y)) hits = hits.filter((h) => !app.parts.get(h.object.userData.partId).mat.userData.lensable);
    if (!hits.length) return null;
    let h = hits[0];
    const partOf = (hit) => app.parts.get(hit.object.userData.partId);
    if (partOf(h).def.mat === 'glass') {      // saydam camın ardındaki katı parça öncelikli (seçimdeki gibi)
      const solid = hits.find((k) => partOf(k).def.mat !== 'glass' && k.distance - h.distance < 0.12);
      if (solid) h = solid;
    }
    const toScreen = (p) => { this.v.copy(p).project(cam); return [((this.v.x + 1) / 2) * r.width + r.left, ((1 - this.v.y) / 2) * r.height + r.top]; };
    const ray = this.ray.ray, A = new THREE.Vector3(), B = new THREE.Vector3(), Q = new THREE.Vector3();
    // parça listesinden (dünya uzayı) en yakın aday; kenar noktası ışına en yakın nokta (perspektif doğru);
    // yarıçap içinde aday yoksa null
    const snapSegs = (segs, ok = () => true) => {
      let best = null, bs = Infinity;
      for (let i = 0; i < segs.length; i += 6) for (const o of [0, 3]) {
        A.set(segs[i + o], segs[i + o + 1], segs[i + o + 2]);
        const [sx, sy] = toScreen(A), d = Math.hypot(sx - x, sy - y);
        const sc = d <= NEAR ? d - SNAP_PX : d;           // çok yakın köşe her zaman kazanır
        if (d < SNAP_PX && sc < bs) { bs = sc; best = { p: A.clone(), kind: 'köşe' }; }
      }
      for (let i = 0; i < segs.length; i += 6) {
        A.set(segs[i], segs[i + 1], segs[i + 2]); B.set(segs[i + 3], segs[i + 4], segs[i + 5]);
        if (!ok(A, B)) continue;
        ray.distanceSqToSegment(A, B, null, Q);
        const [sx, sy] = toScreen(Q), d = Math.hypot(sx - x, sy - y);
        if (d < SNAP_PX && d < bs) { bs = d; best = { p: Q.clone(), kind: 'kenar' }; }
      }
      return best;
    };
    const cutOf = (pl) => { const segs = []; this.cut(h.object, pl, (ax, ay, az, bx, by, bz) => segs.push(ax, ay, az, bx, by, bz)); return segs; };
    const n = h.face ? h.face.normal : null;                  // yerel = dünya yönü (numune yalnızca ötelenir, eşit ölçek)
    if (n && n.dot(ray.direction) > 0 && c.on) {
      // kesit yüzü (kapak): ışın ∩ kesit düzlemi; kesitin dış hattına yapış
      const p = ray.intersectPlane(plane, new THREE.Vector3());
      if (!p) return null;
      return snapSegs(cutOf(plane)) || { p, kind: 'kesit' };
    }
    const o = h.point.clone().sub(app.MODEL_OFFSET).multiplyScalar(1000);   // numune koordinatı (mm)
    if (n && ((Math.abs(n.x) > 0.99 && o.x > 299) || (Math.abs(n.y) > 0.99 && o.y > 299))) {
      // kolun serbest uç yüzü: yüzün 0,01 mm içinden kesit alınır (üçgenleme köşegenlerine değil, profil hattına yapışır)
      const nw = n.clone().normalize();
      const pl = new THREE.Plane().setFromNormalAndCoplanarPoint(nw, h.point.clone().addScaledVector(nw, -1e-5));
      const s = snapSegs(cutOf(pl));
      if (s) { s.p.addScaledVector(nw, 1e-5); return s; }
      return { p: h.point.clone(), kind: 'yüzey' };
    }
    // diğer yüzeyler: isabet üçgeninin köşeleri; kenarlardan yalnızca kol eksenine paralel ya da dik olanlar
    // (ekstrüzyon hatları; dörtgenlerin üçgenleme köşegenleri atlanır)
    const pa = h.object.geometry.attributes.position, f = h.face;
    const V = [f.a, f.b, f.c].map((i) => new THREE.Vector3().fromBufferAttribute(pa, i).applyMatrix4(h.object.matrixWorld));
    const segs = [];
    for (let k = 0; k < 3; k++) { const P = V[k], R = V[(k + 1) % 3]; segs.push(P.x, P.y, P.z, R.x, R.y, R.z); }
    const axis = o.x >= o.y ? 0 : 1;
    const feature = (P, R) => {
      const d = R.clone().sub(P).normalize(), a = Math.abs(axis === 0 ? d.x : d.y);
      return a > 0.999 || a < 0.001;
    };
    return snapSegs(segs, feature) || { p: h.point.clone(), kind: 'yüzey' };
  }
  tap(x, y, type) {
    const s = this.snap(x, y, type);
    if (!s) return;
    if (!this.first) { this.first = s; }
    else {
      if (this.items.length >= MAX) { const old = this.items.shift(); old.el.remove(); old.a.remove(); old.b.remove(); }
      const it = { p0: this.first.p, p1: s.p, el: this.label(), a: this.dot(), b: this.dot() };
      it.el.textContent = fmt(it.p0.distanceTo(it.p1));
      this.items.push(it); this.first = null;
    }
    this.hover = null;
    this.rebuild();
  }
  move(x, y) { this.hover = this.snap(x, y); this.rebuild(); }
  label() { const e = document.createElement('span'); e.className = 'ms-label'; this.layer.append(e); return e; }
  dot() { const e = document.createElement('span'); e.className = 'ms-dot'; this.layer.append(e); return e; }
  rebuild() {
    let n = 0;
    const put = (a, b) => { this.pos.set([a.x, a.y, a.z, b.x, b.y, b.z], n * 6); n++; };
    for (const it of this.items) put(it.p0, it.p1);
    if (this.first && this.hover) put(this.first.p, this.hover.p);
    const g = this.line.geometry;
    g.attributes.position.needsUpdate = true; g.setDrawRange(0, n * 2);
    this.line.visible = n > 0;
    // ilk nokta ve canlı ölçü
    if (this.first && !this.firstDot) this.firstDot = this.dot();
    if (!this.first && this.firstDot) { this.firstDot.remove(); this.firstDot = null; }
    if (this.first && this.hover) { if (!this.live) this.live = this.label(); this.live.textContent = fmt(this.first.p.distanceTo(this.hover.p)); }
    else if (this.live) { this.live.remove(); this.live = null; }
    this.hintEl.textContent = this.first ? 'İkinci noktaya dokunun' : this.items.length ? 'Yeni ölçü için iki noktaya dokunun' : 'İki noktaya dokunun: köşe ve kenarlara yapışır';
    this.app.requestRender();
  }
  step() {
    if (!this.on) return false;
    const app = this.app, cam = app.camera, el = app.renderer.domElement, r = el.getBoundingClientRect();
    const place = (e, p) => {
      this.v.copy(p).project(cam);
      if (this.v.z > 1) { e.style.opacity = 0; return; }
      e.style.opacity = 1;
      e.style.transform = `translate(${((this.v.x + 1) / 2) * r.width + r.left}px, ${((1 - this.v.y) / 2) * r.height + r.top}px) translate(-50%, -50%)`;
    };
    const mid = (a, b) => this.v.copy(a).add(b).multiplyScalar(0.5).clone();
    for (const it of this.items) { place(it.a, it.p0); place(it.b, it.p1); place(it.el, mid(it.p0, it.p1)); }
    if (this.firstDot) place(this.firstDot, this.first.p);
    if (this.live && this.hover) place(this.live, mid(this.first.p, this.hover.p));
    // yapışma göstergesi (fare ile gezinirken)
    if (this.hover) { this.snapEl.hidden = false; this.snapEl.dataset.kind = this.hover.kind; place(this.snapEl, this.hover.p); }
    else this.snapEl.hidden = true;
    return false;
  }
}

// ekran uzayında (x, y) noktasının [A, B] parçasına en yakın noktası: t (0..1) ve uzaklık (px)
function closestOnSegment2D(A, B, x, y) {
  const dx = B[0] - A[0], dy = B[1] - A[1], L = dx * dx + dy * dy;
  const t = L > 1e-9 ? Math.min(1, Math.max(0, ((x - A[0]) * dx + (y - A[1]) * dy) / L)) : 0;
  return { t, d: Math.hypot(A[0] + dx * t - x, A[1] + dy * t - y) };
}
