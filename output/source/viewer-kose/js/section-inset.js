// Canlı 2B kesit penceresi: kesit düzlemi kaydırılırken düzlemdeki gerçek kesit sol altta çizilir.
// Her görünür parça için düzlem parçanın yerel uzayına alınır; three-mesh-bvh shapecast ile düzlemi kesen üçgenler
// bulunur, kesişim parçaları uç uca eklenip halkalar kurulur ve canvas'a çift-tek (evenodd) kuralıyla dolgu yapılır.
// En çok 100 ms'de bir güncellenir; 3B sahneye çizim çağrısı eklemez. Düzlem bir drenaj yarığını ya da vidayı kesince
// etiket çıkar (yarık konumları kose_info.json / build_corner.py). Isı haritası açıkken kesit sıcaklık renginde çizilir.
import { THERMAL } from './thermal-data.js';

// yarık merkezleri: alt kolda dış köşeden X (mm), boy 32 mm (s.8, s.11)
const SLOTS = [
  { x: 100, part: 'kasa_drenaj_kanallari', text: 'D-E yarığı: kamaradan dışarı, rüzgarlık altı (s.8)' },
  { x: 202, part: 'kasa_drenaj_kanallari', text: 'C yarığı: kasa lambasından dış kamaraya (s.8)' },
  { x: 128, part: 'kanat_drenaj_kanallari', text: 'B yarığı: kanattan kasa lambasına (s.8, s.11)' },
  { x: 230, part: 'kanat_drenaj_kanallari', text: 'A yarığı: cam yuvasından kanat kamarasına (s.8, s.11)' },
];
const PART_TAGS = {
  kasa_vidasi_alt: 'Kasa takviye vidası 3,9 × 19 YSB (s.10)', kasa_vidasi_yan: 'Kasa takviye vidası 3,9 × 19 YSB (s.10)',
  kanat_vidasi_alt: 'Kanat takviye vidası 3,9 × 19 YHB (s.11)', kanat_vidasi_yan: 'Kanat takviye vidası 3,9 × 19 YHB (s.11)',
};
const STEEL = ['kasa_celik_takviye_alt', 'kasa_celik_takviye_yan', 'kanat_celik_takviye_alt', 'kanat_celik_takviye_yan'];
const FILL = { pvc: '#dfe4ea', cover: '#dfe4ea', steel: '#99a2ab', epdm: '#555a62', tpe: '#626870', alu: '#b9c0c8', desic: '#c9b688',
  sealant: '#3c3f45', plastic: '#5b82ad', screw: '#d6dbe0', glass: 'rgba(150, 205, 222, .5)' };
const ORDER = { glass: 0, pvc: 1, cover: 1, alu: 2, desic: 2, sealant: 2, plastic: 2, steel: 3, epdm: 4, tpe: 4, screw: 5 };
const drawOrder = (p) => (DRAIN.has(p.id) ? 9 : ORDER[p.mat] ?? 1);
// çizim penceresi (mm): profil kesitleri için yatay -sx (iç solda, uç görünüşteki gibi), düşey sy; boyuna kesitte plan
const WIN = { prof: { h: [-110, 4], v: [-16, 146] }, plan: { h: [-6, 306], v: [-24, 306] } };   // altta ölçek çubuğu payı
const DRAIN = new Set(['kasa_drenaj_kanallari', 'kanat_drenaj_kanallari']);   // yarık hacmi: dolgu değil vurgu olarak çizilir

// Düzlem × mesh kesişimi (dünya uzayı): her kesişim parçası için cb(ax, ay, az, bx, by, bz). Düzlem mesh'in yerel
// uzayına alınır; BVH shapecast yalnızca düzlemi kesen düğümleri gezer. Ortak kenar iki üçgende de aynı sırayla
// (sözlük sırası) hesaplanır: uç noktalar bit düzeyinde aynı çıkar, halkalar anahtar eşleşmesiyle kapanır.
// Ölçüm aracı (measure.js) kesit yüzüne yapışmak için aynı işlevi kullanır.
export function makeCutter(THREE) {
  const inv = new THREE.Matrix4(), pl = new THREE.Plane(), wa = new THREE.Vector3(), wb = new THREE.Vector3();
  const pts = [];
  const edge = (P, dP, Q, dQ) => {
    if ((dP >= 0) === (dQ >= 0)) return;
    if (Q.x < P.x || (Q.x === P.x && (Q.y < P.y || (Q.y === P.y && Q.z < P.z)))) { const T = P; P = Q; Q = T; const d = dP; dP = dQ; dQ = d; }
    const t = dP / (dP - dQ);
    pts.push(P.x + (Q.x - P.x) * t, P.y + (Q.y - P.y) * t, P.z + (Q.z - P.z) * t);
  };
  return (mesh, plane, cb) => {
    const bvh = mesh.geometry.boundsTree;
    if (!bvh) return;
    inv.copy(mesh.matrixWorld).invert();
    pl.copy(plane).applyMatrix4(inv);
    bvh.shapecast({
      intersectsBounds: (box) => (pl.intersectsBox(box) ? 1 : 0),
      intersectsTriangle: (tri) => {
        const da = pl.distanceToPoint(tri.a), db = pl.distanceToPoint(tri.b), dc = pl.distanceToPoint(tri.c);
        if ((da >= 0) === (db >= 0) && (db >= 0) === (dc >= 0)) return false;
        pts.length = 0;
        edge(tri.a, da, tri.b, db); edge(tri.b, db, tri.c, dc); edge(tri.c, dc, tri.a, da);
        if (pts.length === 6) {
          wa.set(pts[0], pts[1], pts[2]).applyMatrix4(mesh.matrixWorld);
          wb.set(pts[3], pts[4], pts[5]).applyMatrix4(mesh.matrixWorld);
          cb(wa.x, wa.y, wa.z, wb.x, wb.y, wb.z);
        }
        return false;
      },
    });
  };
}

export class SectionInset {
  constructor(app) {
    const { THREE } = app;
    this.app = app; this.THREE = THREE;
    this.enabled = true; this.sig = ''; this.t = 0; this.shown = false;
    this.el = app.$('secInset'); this.canvas = app.$('siCanvas'); this.ctx = this.canvas.getContext('2d');
    this.posEl = app.$('siPos'); this.tagsEl = app.$('siTags');
    this.narrow = window.matchMedia('(max-width: 820px)');
    this.cut = makeCutter(THREE);
    this.heatImg = null;
    app.$('tglInset').onchange = (e) => { this.enabled = e.target.checked; this.sig = ''; app.userActive(); };
    app.onFrame((now) => this.step(now));
  }
  get visible() { return this.shown; }
  step(now) {
    const app = this.app, s = app.state, c = s.clip, m = app.modules;
    const want = this.enabled && c.on && !this.narrow.matches && !m.tour?.active && !m.story?.active;
    if (want !== this.shown) { this.shown = want; this.el.hidden = !want; this.sig = ''; app.markLayout(); }
    if (!want) return false;
    let vis = '';
    app.parts.forEach((p) => { vis += p.mesh.visible && !p.ghost ? '1' : '0'; });
    const th = m.thermal?.on ? 1 : 0;
    const sig = `${c.axis}|${c.pos.toFixed(2)}|${c.flip}|${s.explode.toFixed(3)}|${vis}|${th}`;
    if (sig === this.sig || now - this.t < 100) return false;
    this.sig = sig; this.t = now;
    this.update();
    return false;
  }
  // kesit: parça başına halkalar (mm, çizim koordinatı)
  compute() {
    const app = this.app, plane = app.clipPlane, axis = app.state.clip.axis, off = app.MODEL_OFFSET;
    const out = [];
    const key = (h, v) => Math.round(h * 1000) + ',' + Math.round(v * 1000);
    const toHV = (x, y, z) => {
      x = (x - off.x) * 1000; y = (y - off.y) * 1000; z = (z - off.z) * 1000;
      if (axis === 'z') return [x, y];
      return [-(z + 52.25), axis === 'x' ? y : axis === 'y' ? x : Math.min(x, y)];
    };
    app.parts.forEach((p) => {
      if (!p.mesh.visible || p.ghost) return;
      const segs = [];
      this.cut(p.mesh, plane, (ax, ay, az, bx, by, bz) => {
        const a = toHV(ax, ay, az), b = toHV(bx, by, bz);
        const ka = key(a[0], a[1]), kb = key(b[0], b[1]);
        if (ka !== kb) segs.push({ a, b, ka, kb });
      });
      if (!segs.length) return;
      // uç uca ekleme
      const adj = new Map();
      const add = (k, i) => { const l = adj.get(k); if (l) l.push(i); else adj.set(k, [i]); };
      segs.forEach((s, i) => { add(s.ka, i); add(s.kb, i); });
      const used = new Uint8Array(segs.length), loops = [];
      for (let i = 0; i < segs.length; i++) {
        if (used[i]) continue;
        used[i] = 1;
        const s0 = segs[i], loop = [s0.a, s0.b];
        let k = s0.kb;
        for (;;) {
          const nx = adj.get(k).find((j) => !used[j]);
          if (nx === undefined) break;
          used[nx] = 1;
          const s = segs[nx];
          const fwd = s.ka === k;
          k = fwd ? s.kb : s.ka;
          if (k === s0.ka) break;
          loop.push(fwd ? s.b : s.a);
        }
        if (loop.length >= 3) loops.push(loop);
      }
      out.push({ id: p.def.id, mat: p.def.mat, loops });
    });
    out.sort((a, b) => drawOrder(a) - drawOrder(b));
    return out;
  }
  update() {
    const app = this.app, c = app.state.clip, ctx = this.ctx, cv = this.canvas;
    const cut = this.compute();
    // tuval boyutu (cihaz pikseli)
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    const cw = cv.clientWidth || 230, win = c.axis === 'z' ? WIN.plan : WIN.prof;
    const k = cw / (win.h[1] - win.h[0]), ch = Math.round((win.v[1] - win.v[0]) * k);
    if (cv.width !== Math.round(cw * dpr) || cv.height !== Math.round(ch * dpr)) { cv.width = Math.round(cw * dpr); cv.height = Math.round(ch * dpr); cv.style.height = ch + 'px'; }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, cw, ch);
    const X = (h) => (h - win.h[0]) * k, Y = (v) => (win.v[1] - v) * k;
    const path = (loops) => { const P = new Path2D(); for (const l of loops) { P.moveTo(X(l[0][0]), Y(l[0][1])); for (let i = 1; i < l.length; i++) P.lineTo(X(l[i][0]), Y(l[i][1])); P.closePath(); } return P; };
    const thermal = this.app.modules.thermal?.on && c.axis !== 'z';
    const heat = thermal ? this.heatCanvas() : null;
    for (const part of cut) {
      const P = path(part.loops);
      if (heat && part.mat !== 'glass' && !['alu', 'desic', 'sealant'].includes(part.mat)) {
        // ısı haritası: parçanın dış sınırı içi (kamaralar dahil: tüm halkalar aynı yönde, sıfırdan farklı kuralı)
        // sıcaklık görüntüsüyle boyanır; 2B alan yalnızca kesilen kolun enine kesitinde geçerli (v ≤ düzlem konumu)
        ctx.save(); ctx.clip(path(part.loops.map(ccw)), 'nonzero');
        if (c.axis === 'x' || c.axis === 'y') { ctx.beginPath(); ctx.rect(0, Y(c.pos), cw, ch); ctx.clip(); }
        const [x0, y0, w, h] = THERMAL.box;
        ctx.translate(X(-x0), Y(y0 + h)); ctx.scale(-1, 1);
        ctx.imageSmoothingEnabled = true; ctx.drawImage(heat, 0, 0, w * k, h * k);
        ctx.restore();
        ctx.lineWidth = 0.6; ctx.strokeStyle = 'rgba(0, 0, 0, .45)'; ctx.stroke(P);
      } else if (DRAIN.has(part.id)) {
        ctx.fillStyle = 'rgba(255, 176, 58, .28)'; ctx.fill(P, 'evenodd');
        ctx.lineWidth = 1.2; ctx.strokeStyle = '#ffb03a'; ctx.stroke(P);
      } else {
        ctx.fillStyle = heat && part.mat !== 'glass' ? '#4a4f57' : FILL[part.mat] || FILL.pvc;
        ctx.fill(P, 'evenodd');
        ctx.lineWidth = 0.6; ctx.strokeStyle = part.mat === 'glass' ? 'rgba(170, 225, 240, .8)' : 'rgba(10, 14, 20, .55)'; ctx.stroke(P);
      }
    }
    // iç / dış ve ölçek çubuğu (20 mm)
    ctx.font = '600 11px Inter, system-ui, sans-serif'; ctx.fillStyle = 'rgba(232, 237, 242, .75)';
    if (c.axis !== 'z') { ctx.textAlign = 'left'; ctx.fillText('İç', 6, 14); ctx.textAlign = 'right'; ctx.fillText('Dış', cw - 6, 14); }
    const bar = 20 * k, bx = 8, by = ch - 7;
    ctx.strokeStyle = 'rgba(232, 237, 242, .8)'; ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.moveTo(bx, by); ctx.lineTo(bx + bar, by); ctx.moveTo(bx, by - 4); ctx.lineTo(bx, by + 2); ctx.moveTo(bx + bar, by - 4); ctx.lineTo(bx + bar, by + 2); ctx.stroke();
    ctx.textAlign = 'left'; ctx.fillText('20 mm', bx + bar + 6, by + 4);
    // başlık ve etiketler
    const name = { x: 'Alt kol · X', y: 'Yan kol · Y', z: 'Boyuna · Z', d: 'Gönye' }[c.axis];
    this.posEl.textContent = c.axis === 'd' ? `${name} ${c.pos >= 0 ? '+' : ''}${Math.round(c.pos)} mm` : `${name} = ${Math.round(c.pos)} mm`;
    const ids = new Set(cut.map((p) => p.id));
    const tags = [];
    if (c.axis === 'x') for (const s of SLOTS) if (ids.has(s.part) && Math.abs(c.pos - s.x) <= 17) tags.push(s.text);
    for (const id of Object.keys(PART_TAGS)) if (ids.has(id) && !tags.includes(PART_TAGS[id])) tags.push(PART_TAGS[id]);
    if ((c.axis === 'x' || c.axis === 'y') && (ids.has('kasa_profili') || ids.has('kanat_profili')) && !STEEL.some((id) => ids.has(id)))
      tags.push('Çelik takviye yok: kaynak bölgesi (takviye uçtan geri çekilir, s.10, s.11)');
    this.tagsEl.replaceChildren(...tags.map((t) => { const e = document.createElement('span'); e.textContent = t; return e; }));
    this.last = { parts: cut.map((p) => ({ id: p.id, loops: p.loops.length })), tags };
  }
  // sıcaklık görüntüsü (bir kez): yarım kayan nokta dokudan renk rampası + 2 °C / 10 °C eş sıcaklık çizgileri
  heatCanvas() {
    if (this.heatImg) return this.heatImg;
    const tex = this.app.modules.thermal?.tex;
    const img = tex?.image;
    if (!img?.data) return null;
    const { width: w, height: h, data } = img;
    const f = new Float32Array(w * h);
    for (let i = 0; i < f.length; i++) f[i] = half(data[i]);
    const cv = document.createElement('canvas'); cv.width = w; cv.height = h;
    const cx = cv.getContext('2d'), id = cx.createImageData(w, h), px = id.data;
    for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
      const i = y * w + x, t = f[i];
      let [r, g, b] = ramp(t);
      const q = Math.floor(t * 10), qr = x + 1 < w ? Math.floor(f[i + 1] * 10) : q, qd = y + 1 < h ? Math.floor(f[i + w] * 10) : q;
      if (q !== qr || q !== qd) {
        const bold = Math.min(q, qr, qd) === 4 && Math.max(q, qr, qd) === 5;
        if (bold) { r = g = b = 250; } else { r *= 0.5; g *= 0.5; b *= 0.5; }
      }
      px[i * 4] = r; px[i * 4 + 1] = g; px[i * 4 + 2] = b; px[i * 4 + 3] = 255;
    }
    cx.putImageData(id, 0, 0);
    return (this.heatImg = cv);
  }
}

// halka yönü: saat yönünün tersi (işaretli alan > 0)
function ccw(l) {
  let a = 0;
  for (let i = 0, j = l.length - 1; i < l.length; j = i++) a += (l[j][0] - l[i][0]) * (l[j][1] + l[i][1]);
  return a >= 0 ? l : l.slice().reverse();
}
// materials.js thermalRamp ile aynı duraklar (0..255)
function ramp(t) {
  t = Math.min(1, Math.max(0, t));
  const S = [[20, 13, 89], [26, 115, 242], [26, 204, 191], [250, 217, 51], [242, 64, 31]];
  const u = t * 4, i = Math.min(3, Math.floor(u)), k = u - i;
  return [0, 1, 2].map((j) => S[i][j] + (S[i + 1][j] - S[i][j]) * k);
}
function half(u) {
  const e = (u >> 10) & 31, m = u & 1023, s = u & 32768 ? -1 : 1;
  if (e === 0) return s * m * 5.960464477539063e-8;
  if (e === 31) return m ? NaN : s * Infinity;
  return s * (1 + m / 1024) * 2 ** (e - 15);
}
