// Tam pencere: numune, girilen ölçüdeki (W × H, kasa dış ölçüsü) pencerenin sol alt köşesi olur.
// s.9 kesitinin dış konturları (rings-data.js) dikdörtgen boyunca süpürülür: kesit noktası (sx, sy), köşeleri
// (sy, sy), (W − sy, sy), (W − sy, H − sy), (sy, H − sy) olan halkaya gider (gönye birleşimi). Numune bölgesi
// (x < 300, y < 300 mm) shader'da atılır (SUP_WIN); sınırında ince bir çizgi numuneyi belirtir. Cam: 3 tam panel
// (numunenin cam parçaları bu modda gizlenir). İşaretler: menteşe ve kol (temsili biçim, konumları dökümandan),
// drenaj yarıkları ve çift açılım donanımı (derinlik testi olmadan üstte çizilen bilgi işaretleri).
// Çizim çağrısı: PVC, contalar (+ çıta dudağı, sızdırmazlık), ısıcam ara çıtası, cam, işaretler, menteşeler, kol = 7.
import { RINGS, GLASS } from './rings-data.js';
import { createMaterial, shared } from './materials.js';
import { SASH_INSET } from './configurator-data.js';

const Z0 = 52.25;                 // Z = sx − 52,25 (build_corner.py)
const PVC_KEYS = ['frame', 'sash', 'bead'];
const GASKET_KEYS = ['gasket_frame_ext', 'gasket_middle', 'gasket_interior', 'gasket_glazing_ext', 'bead_lip_top', 'bead_lip_bot', 'sealant1', 'sealant2'];
const SPACER_KEYS = ['spacer1', 'spacer2'];
const HINGE_AT = { sx: 93, sy: 33, r: 7.5, len: 90 };   // menteşe gövdesi: iç yüzde kasa–kanat birleşimi (s.17 A-A kesiti)

export class WindowModel {
  constructor(app, tier) {
    const { THREE } = app;
    this.app = app; this.THREE = THREE;
    this.group = new THREE.Group(); this.group.visible = false; this.group.scale.setScalar(app.MM);
    app.model.add(this.group);
    const def = { foil: true, seam: 0 };
    this.matPvc = createMaterial('pvc', { ao: null }, def, tier, { win: true });
    this.matGasket = createMaterial('epdm', { ao: null }, {}, tier, { win: true });
    this.matSpacer = createMaterial('alu', { ao: null }, {}, tier, { win: true });
    this.matGlass = createMaterial('glass', {}, {}, tier);
    for (const m of [this.matPvc, this.matGasket, this.matSpacer]) m.userData.u.uODeq.value.set(0, 0, 0, 0.001);   // mm -> m
    this.pvc = new THREE.Mesh(new THREE.BufferGeometry(), this.matPvc);
    this.gasket = new THREE.Mesh(new THREE.BufferGeometry(), this.matGasket);
    this.spacer = new THREE.Mesh(new THREE.BufferGeometry(), this.matSpacer);
    this.glass = new THREE.Mesh(new THREE.BufferGeometry(), this.matGlass); this.glass.renderOrder = 2;
    // bilgi işaretleri: yarıklar ve donanım çubukları (örneklenmiş kutular, her zaman görünür)
    this.info = new THREE.InstancedMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.9,
      depthTest: false, depthWrite: false, toneMapped: false }), 64);
    this.info.renderOrder = 8; this.info.count = 0;
    this.info.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(64 * 3), 3);
    const metal = new THREE.MeshStandardMaterial({ color: 0xdadde1, metalness: 0.65, roughness: 0.32 });
    const hg = new THREE.CylinderGeometry(HINGE_AT.r, HINGE_AT.r, HINGE_AT.len, 20);
    this.hinges = new THREE.InstancedMesh(hg, metal, 4); this.hinges.count = 0;
    this.handle = new THREE.Mesh(handleGeometry(THREE), metal);
    for (const o of [this.pvc, this.gasket, this.spacer, this.glass, this.info, this.hinges, this.handle]) { o.frustumCulled = false; this.group.add(o); }
    this.m4 = new THREE.Matrix4(); this.col = new THREE.Color();
  }
  // W, H (mm), c: computeWindow sonucu
  build(W, H, c) {
    const THREE = this.THREE;
    for (const o of [this.pvc, this.gasket, this.spacer, this.glass]) o.geometry.dispose();
    this.pvc.geometry = sweep(THREE, PVC_KEYS.map((k) => RINGS[k]), W, H);
    this.gasket.geometry = sweep(THREE, GASKET_KEYS.map((k) => RINGS[k]), W, H);
    this.spacer.geometry = sweep(THREE, SPACER_KEYS.map((k) => RINGS[k]), W, H);
    this.glass.geometry = panes(THREE, W, H);
    // menteşeler (içe açılır): sağ düşey, kanat alt kenarından c.hinges.pos
    const m = this.m4;
    if (c.hinges) {
      c.hinges.pos.forEach((p, i) => { m.makeTranslation(W - HINGE_AT.sy, SASH_INSET + p, HINGE_AT.sx - Z0); this.hinges.setMatrixAt(i, m); });
      this.hinges.count = c.hinges.pos.length;
    } else this.hinges.count = 0;
    this.hinges.instanceMatrix.needsUpdate = true;
    // kol: sol düşey, kanat dış kenarından 33 mm, A/2
    this.handle.position.set(c.handle.x, c.handle.y, 104.5 - Z0);
    // bilgi işaretleri
    let n = 0;
    const box = (x, y, z, sx, sy, sz, hex) => {
      m.makeScale(sx, sy, sz).setPosition(x, y, z); this.info.setMatrixAt(n, m); this.info.setColorAt(n, this.col.set(hex)); n++;
    };
    // drenaj yarıkları (pencere x koordinatı; numunedeki yarıklar da işaretlenir): kasada dış yüzün önünde (sx −1,5,
    // sy 12), kanatta kanat dış yüzünün önünde (sx 18, sy 52); 32 × 4 mm
    for (const [a, b] of c.drain.frame.pairs) for (const x of [a, b]) box(x, 12, -Z0 - 1.5, 32, 4, 2, 0xffb03a);
    for (const [a, b] of c.drain.sash.pairs) for (const x of [a, b]) box(x, 52, 19.5 - Z0 - 1.5, 32, 4, 2, 0x5ee0b4);
    if (c.type === 'cift') {
      // çift açılım: ispanyolet (sol düşey, kanat boyunca) ve makas (üst yatay, kanat genişliğinin yarısı) — temsili
      box(SASH_INSET + 12, H / 2, 70 - Z0, 6, c.sashH - 120, 6, 0x5cc8ff);
      box(W - SASH_INSET - c.sashW / 4 - 20, H - SASH_INSET - 12, 70 - Z0, c.sashW / 2, 6, 6, 0x5cc8ff);
      box(W - SASH_INSET - 14, SASH_INSET + 14, 70 - Z0, 26, 26, 8, 0x5cc8ff);   // köşe yatağı
    }
    this.info.count = n; this.info.instanceMatrix.needsUpdate = true; if (this.info.instanceColor) this.info.instanceColor.needsUpdate = true;
    this.W = W; this.H = H;
  }
  setVisible(on) { this.group.visible = on; }
  // menteşe, kol ve bilgi işaretleri (büyüme / küçülme sürerken gizli: çerçeve henüz oraya ulaşmamıştır)
  setMarkers(on) { this.info.visible = this.hinges.visible = this.handle.visible = on; }
  // büyüme: numune köşesinden (m) itibaren gösterilen yarıçap
  setGrow(r) { shared.uWinGrow.value = r; }
}

// halkaları dikdörtgen boyunca süpürür: köşe başına düz normal (yüz başına), uv1 = folyo
function sweep(THREE, rings, W, H) {
  let nq = 0;
  for (const r of rings) nq += r.length / 2;
  const pos = new Float32Array(nq * 4 * 6 * 3), nor = new Float32Array(nq * 4 * 6 * 3), uv1 = new Float32Array(nq * 4 * 6 * 2), ax = new Float32Array(nq * 4 * 6);
  let v = 0;
  // kenar k: köşe k -> k+1; köşe(s): (s, s), (W − s, s), (W − s, H − s), (s, H − s)
  const cx = (k, s) => (k === 0 || k === 3 ? s : W - s), cy = (k, s) => (k < 2 ? s : H - s);
  const put = (x, y, z, nx, ny, nz, a) => { pos.set([x, y, z], v * 3); nor.set([nx, ny, nz], v * 3); uv1.set([1, 0], v * 2); ax[v] = a; v++; };
  for (const r of rings) {
    const n = r.length / 2;
    for (let i = 0; i < n; i++) {
      const j = (i + 1) % n;
      const sxP = r[i * 2], syP = r[i * 2 + 1], sxQ = r[j * 2], syQ = r[j * 2 + 1];
      const dsx = sxQ - sxP, dsy = syQ - syP, L = Math.hypot(dsx, dsy) || 1;
      const ns = -dsx / L, nz = dsy / L;           // kesitte dış normal (saat yönü tersi halka): içe doğru bileşen, z
      const zP = sxP - Z0, zQ = sxQ - Z0;
      for (let k = 0; k < 4; k++) {
        const k1 = (k + 1) % 4;
        // içe doğru birim vektör: alt +y, sağ −x, üst −y, sol +x
        const ix = k === 1 ? -1 : k === 3 ? 1 : 0, iy = k === 0 ? 1 : k === 2 ? -1 : 0;
        const nx = ix * ns, ny = iy * ns, a = k % 2 === 0 ? 0 : 1;
        const A0 = [cx(k, syP), cy(k, syP), zP], A1 = [cx(k1, syP), cy(k1, syP), zP];
        const B0 = [cx(k, syQ), cy(k, syQ), zQ], B1 = [cx(k1, syQ), cy(k1, syQ), zQ];
        for (const p of [A0, A1, B1, A0, B1, B0]) put(p[0], p[1], p[2], nx, ny, nz, a);
      }
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setAttribute('normal', new THREE.BufferAttribute(nor, 3));
  g.setAttribute('uv1', new THREE.BufferAttribute(uv1, 2));
  g.setAttribute('aAxis', new THREE.BufferAttribute(ax, 1));
  return g;
}
// üç cam paneli: s.9 kesitindeki cam kenarı (sy0) her dört kenarda
function panes(THREE, W, H) {
  const geos = GLASS.map(([sx0, sx1, sy0]) => {
    const g = new THREE.BoxGeometry(W - 2 * sy0, H - 2 * sy0, sx1 - sx0);
    g.translate(W / 2, H / 2, (sx0 + sx1) / 2 - Z0);
    return g;
  });
  return merge(THREE, geos);
}
// kol: taban plakası, boyun ve aşağı bakan tutamak (kapalı konum; temsili)
function handleGeometry(THREE) {
  const parts = [
    [30, 78, 8, 0, 0, 4],
    [14, 14, 16, 0, 0, 14],
    [17, 118, 13, 0, -52, 26],
  ].map(([w, h, d, x, y, z]) => new THREE.BoxGeometry(w, h, d).translate(x, y, z));
  return merge(THREE, parts);
}
function merge(THREE, geos) {
  let n = 0, ni = 0;
  for (const g of geos) { n += g.attributes.position.count; ni += g.index.count; }
  const pos = new Float32Array(n * 3), nor = new Float32Array(n * 3), idx = new Uint32Array(ni);
  let o = 0, oi = 0;
  for (const g of geos) {
    pos.set(g.attributes.position.array, o * 3); nor.set(g.attributes.normal.array, o * 3);
    for (let i = 0; i < g.index.count; i++) idx[oi + i] = g.index.array[i] + o;
    o += g.attributes.position.count; oi += g.index.count; g.dispose();
  }
  const out = new THREE.BufferGeometry();
  out.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  out.setAttribute('normal', new THREE.BufferAttribute(nor, 3));
  out.setIndex(new THREE.BufferAttribute(idx, 1));
  return out;
}
