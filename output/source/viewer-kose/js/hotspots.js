// 3B işaretler (numaralı noktalar) ve patlatılmış görünümde kılavuz çizgili parça etiketleri.
// İşaret konumları köşe koordinatlarında (mm): X alt kol, Y yukarı, Z = sx - 52,25. Görünürlük BVH ışın testiyle.

export const HOTSPOTS = [
  { id: 'kaynak', pos: [20, 20, 32.8], title: '45° kaynak dikişi', view: 'weld', clip: { axis: 'd', pos: 0 },
    text: 'Kasa ve kanat köşede 45° kesilip ısıtıcı plakayla kaynatılır (240–280 °C, s.14). Kaynak sonrası taşan malzeme temizlenir; köşe tek parça, kapalı bir profil olur.' },
  { id: 'cita', pos: [110, 110, 52.3], title: 'Cam çıtası gönyesi', part: 'cam_citasi',
    text: 'Çıtalar kaynatılmaz: 45° kesilip (s.7) alın alına gelir ve klipsle kanada takılır.' },
  { id: 'kapak', pos: [100, 30.2, -58.8], title: 'Rüzgarlık ve D-E yarığı', part: 'drenaj_kapagi', view: 'exterior',
    text: 'Dış yarık iç köşeden 10 mm sonra başlar, 32 × Ø4 mm (s.8). Alttan açık kapak suyu bırakır, rüzgârı keser.' },
  { id: 'celik', pos: [300, 10.9, 1.75], title: 'Galvaniz takviye', part: 'kasa_celik_takviye_alt', view: 'end',
    text: 'BF 409-15 galvaniz U, 30 × 27 mm (ift belgesi). Kaynak bölgesine girmez: kasa takviyesi A − 153, kanat takviyesi A − 160 mm (s.10, s.11).' },
  { id: 'conta', pos: [300, 56, -19.25], title: 'Üç conta hattı', part: 'orta_conta', view: 'end',
    text: 'Dış, orta ve iç conta kanadı kasaya üç hatta sızdırmaz kapatır; orta conta dış drenaj bölmesini iç bölmeden ayırır (s.9).' },
  { id: 'cam', pos: [300, 118, 2.75], title: 'Üçlü ısıcam', part: 'cam_2', view: 'end',
    text: '4-10-4-10-4 = 32 mm (s.9). Ara çıta, nem alıcı ve ikincil sızdırmazlık panelleri birbirine bağlar.' },
  { id: 'kamara', pos: [300, 50, 7.75], title: 'Çok odacıklı kesit', part: 'kasa_profili', view: 'end',
    text: 'Kasa kesitinde 14, kanatta 11 kapalı kamara (s.9 çizimi); sistem derinliği 85 mm, kasa + kanat 104,5 mm.' },
  { id: 'yarikC', pos: [202, 46.5, -35.5], title: 'C yarığı (düşeyle 50°)', part: 'kasa_drenaj_kanallari',
    text: 'Kasa lambasındaki su, 50° eğimli Ø4 yarıktan dış kamaraya geçer (s.8). İç ve dış kanallar 7 cm aralıklıdır.' },
];

// patlatılmış görünüm etiketleri (okunaklılık için ana parçalar)
const CALLOUT_PARTS = ['kasa_profili', 'kanat_profili', 'cam_citasi', 'kasa_dis_contasi', 'orta_conta', 'kanat_ic_contasi',
  'kanat_dis_cam_contasi', 'kasa_celik_takviye_alt', 'kanat_celik_takviye_yan', 'kasa_vidasi_alt', 'cam_1', 'isicam_citasi',
  'cam_takoz_koprusu', 'drenaj_kapagi'];

export class Hotspots {
  constructor(app) {
    const { THREE, $ } = app;
    this.app = app;
    this.layer = $('hotspotLayer');
    this.svg = $('calloutSvg');
    this.clayer = $('calloutLayer');
    this.card = $('hotCard');
    this.on = false; this.only = null; this.callouts = false;
    this.ray = new THREE.Raycaster(); this.ray.firstHitOnly = true;
    this.v = new THREE.Vector3(); this.tmp = new THREE.Vector3();
    this.items = HOTSPOTS.map((h, i) => {
      const el = document.createElement('button');
      el.className = 'hotspot'; el.type = 'button';
      el.innerHTML = `<span class="hs-dot">${i + 1}</span><span class="hs-label">${h.title}</span>`;
      el.setAttribute('aria-label', h.title);
      el.onclick = (e) => { e.stopPropagation(); this.open(h); };
      this.layer.appendChild(el);
      return { h, el, world: app.toWorld(...h.pos), occl: false, lastTest: 0 };
    });
    $('hotCardClose').onclick = () => this.close();
    this.cl = CALLOUT_PARTS.map((id) => {
      const el = document.createElement('div'); el.className = 'callout';
      const p = app.parts.get(id); el.textContent = p ? p.def.name.replace(/ \(.*\)$/, '') : id;
      this.clayer.appendChild(el);
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'polyline'); this.svg.appendChild(line);
      const dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle'); dot.setAttribute('r', '2.6'); this.svg.appendChild(dot);
      return { id, el, line, dot, a: 0 };
    });
    this.calloutA = 0;
  }
  setVisible(on, only = null) {
    this.on = on; this.only = only ? new Set(only) : null;
    this.layer.classList.toggle('on', on);
    if (!on) this.close();
    this.app.requestRender();
  }
  setCallouts(on) { this.callouts = on; this.app.requestRender(); }
  // etiket geçişi sürerken çizim döngüsü boşa geçmesin (yarı saydam etiket ekranda kalmasın)
  animating() {
    const wantC = this.callouts && this.app.state.explode > 0.55;
    return wantC ? this.calloutA < 0.99 : this.calloutA >= 0.01;
  }
  open(h) {
    const app = this.app;
    this.card.querySelector('.hc-title').textContent = h.title;
    this.card.querySelector('.hc-text').textContent = h.text;
    this.card.hidden = false;
    this.card.style.animation = 'none'; void this.card.offsetWidth; this.card.style.animation = '';
    app.select(null);                                   // bilgi kartı, parça panelinin yerini alır
    const tour = app.modules.tour;
    if (tour?.active && !tour.attract) tour.pause(true);  // ziyaretçi turunda işaret açılınca tur bekler
    if (h.clip) { if (!app.state.clip.on) this.clipOwned = true; app.setClip(h.clip.axis, h.clip.pos); }
    if (h.view) app.setView(h.view);
    else if (h.part) app.focusPart(h.part);
    app.userActive();
  }
  close() {
    this.card.hidden = true;
    // işaretin açtığı kesit, kart kapanınca kapanır (kullanıcının kendi kesitine dokunulmaz)
    if (this.clipOwned) { this.clipOwned = false; if (this.app.state.clip.on) { this.app.state.clip.on = false; this.app.updateClip(); } }
  }
  update() {
    const app = this.app, cam = app.camera;
    const w = window.innerWidth, h = window.innerHeight;
    const now = performance.now();
    if (this.on) {
      const meshes = [];
      app.parts.forEach((p) => { if (p.mesh.visible && !p.ghost && p.def.mat !== 'glass') meshes.push(p.mesh); });
      for (const it of this.items) {
        const show = !this.only || this.only.has(it.h.id);
        this.v.copy(it.world).project(cam);
        const vis = show && this.v.z < 1 && Math.abs(this.v.x) < 1.05 && Math.abs(this.v.y) < 1.05;
        if (vis && now - it.lastTest > 120) {           // örtülme testi (seyrek)
          it.lastTest = now;
          const origin = cam.position; const dist = origin.distanceTo(it.world);
          this.ray.set(origin, this.tmp.copy(it.world).sub(origin).normalize()); this.ray.far = dist;
          const hit = this.ray.intersectObjects(meshes, false)[0];
          it.occl = !!hit && hit.distance < dist - 0.0025;
        }
        it.el.style.display = vis ? '' : 'none';
        if (vis) {
          it.el.style.transform = `translate(${((this.v.x + 1) / 2) * w}px, ${((1 - this.v.y) / 2) * h}px)`;
          it.el.classList.toggle('occluded', it.occl);
        }
      }
    }
    // patlatma etiketleri
    const wantC = this.callouts && app.state.explode > 0.55;
    const dt = Math.min(0.1, (now - (this.lastT ?? now)) / 1000); this.lastT = now;   // kare hızından bağımsız geçiş
    this.calloutA += ((wantC ? 1 : 0) - this.calloutA) * (1 - Math.exp(-dt * 12));
    if (this.calloutA < 0.01 && !wantC) { this.clayer.style.opacity = 0; this.svg.style.opacity = 0; return; }
    this.clayer.style.opacity = this.calloutA; this.svg.style.opacity = this.calloutA;
    const pts = [];
    const box = new app.THREE.Box3();
    let minX = Infinity, maxX = -Infinity;
    for (const c of this.cl) {
      const p = app.parts.get(c.id);
      if (!p || !p.mesh.visible) { c.el.style.display = 'none'; c.line.setAttribute('points', ''); c.dot.setAttribute('r', 0); continue; }
      box.setFromObject(p.mesh); box.getCenter(this.v);
      this.v.project(cam);
      const sx = ((this.v.x + 1) / 2) * w, sy = ((1 - this.v.y) / 2) * h;
      pts.push({ c, sx, sy });
      minX = Math.min(minX, sx); maxX = Math.max(maxX, sx);
    }
    const mid = (minX + maxX) / 2;
    const left = pts.filter((p) => p.sx < mid).sort((a, b) => a.sy - b.sy);
    const right = pts.filter((p) => p.sx >= mid).sort((a, b) => a.sy - b.sy);
    const gap = 30;
    const place = (arr, side) => {
      let y = -Infinity;
      const xCol = side < 0 ? Math.max(24, minX - 150) : Math.min(w - 24, maxX + 150);
      for (const p of arr) {
        y = Math.max(p.sy, y + gap);
        const ly = Math.min(h - 120, Math.max(90, y));
        p.c.el.style.display = '';
        p.c.el.style.transform = `translate(${side < 0 ? xCol : xCol}px, ${ly}px) translate(${side < 0 ? '-100%' : '0'}, -50%)`;
        const ex = xCol + (side < 0 ? 6 : -6);
        const kx = (ex + p.sx) / 2;
        p.c.line.setAttribute('points', `${ex},${ly} ${kx},${ly} ${p.sx},${p.sy}`);
        p.c.dot.setAttribute('cx', p.sx); p.c.dot.setAttribute('cy', p.sy); p.c.dot.setAttribute('r', 2.6);
      }
    };
    place(left, -1); place(right, 1);
  }
}
