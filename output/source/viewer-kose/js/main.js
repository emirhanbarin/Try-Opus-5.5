// Supremo 85 — 45° kaynaklı köşe numunesi: premium 3B görüntüleyici (fuar sürümü)
// three.js r186 (yerel paket), meshopt geometri, KTX2 dokular, önceden pişirilmiş AO, stüdyo HDRI v2
import * as THREE from '../vendor/three-bundle.min.js';
import { PARTS, GROUPS, MATERIALS, SECTION_PRESETS, FINISHES, SPECS, ASSUMPTIONS, PERFORMANCE } from './parts-data.js';
import { createMaterial, createGhostMaterial, shared, applyFinish } from './materials.js';
import { ContactShadow } from './contact-shadow.js';
import { Tour } from './tour.js';
import { Hotspots } from './hotspots.js';
import { Water } from './water.js';
import { Kiosk } from './kiosk.js';
import { DrawingOverlay } from './drawing.js';

const { OrbitControls, GLTFLoader, KTX2Loader, MeshoptDecoder, computeBoundsTree, disposeBoundsTree, acceleratedRaycast } = THREE;
THREE.BufferGeometry.prototype.computeBoundsTree = computeBoundsTree;
THREE.BufferGeometry.prototype.disposeBoundsTree = disposeBoundsTree;
THREE.Mesh.prototype.raycast = acceleratedRaycast;

const $ = (id) => document.getElementById(id);
const MM = 0.001;
const ease = (p) => (p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2);
const clamp01 = (x) => Math.min(1, Math.max(0, x));
const params = new URLSearchParams(location.search);

// ------------------------------------------------------------------ state
const state = {
  selected: null, hovered: null,
  soloSet: null,                     // izole edilen parça id'leri (Set) veya null
  ghostSet: null,                    // hayalet (x-ray) gösterilen parça id'leri (Set) veya null
  explode: 0, explodeTarget: 0, explodeAnim: null,
  clip: { on: false, axis: 'x', pos: 150, flip: false },
  dims: false, drawing: false, hotspots: false,
  finish: 'beyaz',
  needsRender: 2, shadowDirty: true,
  camAnim: null, intro: true,
};
const parts = new Map();              // id -> { def, mesh, mat, base, hi, visible, ghost }
// köşe koordinatları (mm): X 0..300 alt kol, Y 0..300 yan kol, Z iç (+) / dış (-); d: gönye düzlemine dik (x - y)/√2
const BOUNDS_MM = { x: [0, 300], y: [0, 300], z: [-60, 54], d: [-150, 150] };
const MODEL_OFFSET = new THREE.Vector3(-0.15, 0, 0);   // numune X ekseninde ortalanır (döner tabla merkezi)
const toWorld = (xmm, ymm, zmm) => new THREE.Vector3(xmm * MM, ymm * MM, zmm * MM).add(MODEL_OFFSET);

// ------------------------------------------------------------------ renderer
const canvas = $('scene');
const AA = params.get('aa') !== '0';
let renderer;
try {
  renderer = new THREE.WebGLRenderer({ canvas, antialias: AA, alpha: true, powerPreference: 'high-performance' });
} catch (e) {
  fatal('Tarayıcınız WebGL 2 desteklemiyor veya grafik hızlandırma kapalı. Lütfen güncel bir Chrome, Edge, Firefox ya da Safari ile açın.');
  throw e;
}
const gl0 = renderer.getContext();
const dbgInfo = gl0.getExtension('WEBGL_debug_renderer_info');
const GPU_NAME = dbgInfo ? gl0.getParameter(dbgInfo.UNMASKED_RENDERER_WEBGL) : gl0.getParameter(gl0.RENDERER);
const SOFTWARE_GL = /swiftshader|llvmpipe|software|basic render|lavapipe/i.test(GPU_NAME);
// kalite kademesi: yüksek (gerçek GPU) / düşük (yazılımsal GL); ?q=high|low ile zorlanabilir
let tier = params.get('q') === 'low' ? 'low' : params.get('q') === 'high' ? 'high' : SOFTWARE_GL ? 'low' : 'high';
const KIOSK = params.get('kiosk') === '1';
const DPR_CAP = Number(params.get('dpr')) || (KIOSK ? 1.5 : 2);
const DPR_MAX = Math.min(window.devicePixelRatio || 1, DPR_CAP);
let dpr = DPR_MAX;
renderer.setPixelRatio(dpr);
renderer.setSize(window.innerWidth, window.innerHeight, false);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.NeutralToneMapping;      // Khronos PBR Neutral: beyaz PVC ve renkler ton kaymasız
renderer.toneMappingExposure = 1.0;
renderer.localClippingEnabled = true;
renderer.setClearColor(0x000000, 0);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.01, 12);
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.dampingFactor = 0.08;
controls.rotateSpeed = 0.8;
controls.zoomSpeed = 0.9;
controls.panSpeed = 0.8;
controls.minDistance = 0.08;
controls.maxDistance = 4;
controls.screenSpacePanning = true;
controls.addEventListener('change', () => { state.needsRender = Math.max(state.needsRender, 1); });
controls.addEventListener('start', () => { state.camAnim = null; exFrame.active = false; if (state.intro) endIntro(); userActive(); });

const model = new THREE.Group();
model.position.copy(MODEL_OFFSET);
scene.add(model);

// kesit düzlemi (yalnızca kesit açıkken malzemelere bağlanır: erken derinlik testi korunur)
const clipPlane = new THREE.Plane(new THREE.Vector3(1, 0, 0), 1e6);
const clipPlanes = [clipPlane];

// ------------------------------------------------------------------ loading
const loader = { items: {}, text: $('loaderText') };
function progress(key, loaded, total) {
  loader.items[key] = { loaded, total: total || loader.items[key]?.total || 1 };
  let l = 0, t = 0;
  for (const k in loader.items) { l += Math.min(loader.items[k].loaded, loader.items[k].total); t += loader.items[k].total; }
  const pct = Math.round((l / t) * 90);
  $('progressBar').style.width = pct + '%';
  $('loaderPct').textContent = pct + '%';
}
const EXPECTED = { model: 682916, ao: 860590, env: 523995, spangle: 195010, wood: 180748, basis: 584862 };
for (const k in EXPECTED) progress(k, 0, EXPECTED[k]);

function fatal(msg) {
  const d = document.createElement('div'); d.className = 'fatal'; d.textContent = msg; document.body.appendChild(d);
}

const manager = new THREE.LoadingManager();
const ktx2 = new KTX2Loader(manager).setTranscoderPath('vendor/basis/').detectSupport(renderer);
const gltfLoader = new GLTFLoader(manager).setMeshoptDecoder(MeshoptDecoder).setKTX2Loader(ktx2);
function loadKTX(url, key) {
  return new Promise((res, rej) => ktx2.load(url, res, (e) => progress(key, e.loaded, e.total), rej));
}

// index.html doğrudan (file://) açıldığında tarayıcı yerel dosya okumayı engeller: ikili dosyalar
// tek bir klasik betikten (data: URL) okunur; sunucu gerekmez.
async function setupFileProtocol() {
  if (location.protocol !== 'file:') return;
  loader.text.textContent = 'Yerel dosyalar hazırlanıyor…';
  await new Promise((res, rej) => {
    const s = document.createElement('script');
    s.src = 'assets/kose/assets-embedded.js';
    s.onload = res;
    s.onerror = () => rej(new Error('assets/kose/assets-embedded.js okunamadı'));
    document.head.appendChild(s);
  });
  const emb = window.SUPREMO85_KOSE_EMBEDDED || {};
  const keys = Object.keys(emb);
  manager.setURLModifier((url) => {
    if (url.startsWith('data:') || url.startsWith('blob:')) return url;
    const clean = url.replace(/^\.\//, '');
    if (emb[clean]) return emb[clean];
    const k = keys.find((key) => clean.endsWith('/' + key) || clean.endsWith(key));
    return k ? emb[k] : url;
  });
}

async function boot() {
  await setupFileProtocol();
  loader.text.textContent = 'Model ve dokular yükleniyor…';
  manager.onProgress = (url) => { if (/basis_transcoder/.test(url)) progress('basis', EXPECTED.basis, EXPECTED.basis); };
  const [gltf, aoTex, envTex, spangleTex, woodTex] = await Promise.all([
    new Promise((res, rej) => gltfLoader.load('assets/kose/supremo85_kose.glb', res, (e) => progress('model', e.loaded, e.total), rej)),
    loadKTX('assets/kose/ao_kose.ktx2', 'ao'),
    loadKTX('assets/kose/studio2.ktx2', 'env'),
    loadKTX('assets/spangle.ktx2', 'spangle'),
    loadKTX('assets/kose/ahsap.ktx2', 'wood'),
  ]);
  progress('basis', EXPECTED.basis, EXPECTED.basis);
  loader.text.textContent = 'Stüdyo aydınlatması hazırlanıyor…';
  await frame();

  // ortam: stüdyo HDRI v2 (Blender/Cycles, KTX2 RGBA16F) -> PMREM
  envTex.mapping = THREE.EquirectangularReflectionMapping;
  envTex.colorSpace = THREE.LinearSRGBColorSpace;
  envTex.minFilter = THREE.LinearFilter; envTex.magFilter = THREE.LinearFilter; envTex.generateMipmaps = false;
  const pmrem = new THREE.PMREMGenerator(renderer);
  const envRT = pmrem.fromEquirectangular(envTex);
  scene.environment = envRT.texture;
  scene.environmentIntensity = 1.0;
  envTex.dispose(); pmrem.dispose();

  aoTex.colorSpace = THREE.NoColorSpace; aoTex.channel = 0; aoTex.flipY = false; aoTex.anisotropy = 1;
  spangleTex.colorSpace = THREE.NoColorSpace; spangleTex.wrapS = spangleTex.wrapT = THREE.RepeatWrapping;
  spangleTex.anisotropy = Math.min(2, renderer.capabilities.getMaxAnisotropy());
  woodTex.colorSpace = THREE.NoColorSpace; woodTex.wrapS = woodTex.wrapT = THREE.RepeatWrapping;
  woodTex.anisotropy = Math.min(4, renderer.capabilities.getMaxAnisotropy());
  shared.uWood.value = woodTex;
  shared.uMicro.value = tier === 'high' ? 1 : 0;

  loader.text.textContent = 'Parçalar oluşturuluyor…';
  $('progressBar').style.width = '93%'; $('loaderPct').textContent = '93%';
  await frame();
  buildModel(gltf.scene, { ao: aoTex, spangle: spangleTex });
  buildUI();
  setupLights();
  setupShadow();
  setupDims();
  modules.drawing = new DrawingOverlay(app);
  modules.hotspots = new Hotspots(app);
  modules.water = new Water(app);
  modules.tour = new Tour(app);
  modules.kiosk = new Kiosk(app, KIOSK);
  updateViewOffsetTarget(); viewOffset.x = viewOffset.tx; viewOffset.y = viewOffset.ty;
  camera.setViewOffset(window.innerWidth, window.innerHeight, -viewOffset.x, -viewOffset.y, window.innerWidth, window.innerHeight);
  setView('hero', true);

  loader.text.textContent = 'Gölgelendiriciler derleniyor…';
  $('progressBar').style.width = '97%'; $('loaderPct').textContent = '97%';
  await frame();
  // kesit açık/kapalı ve hayalet varyantlarını önceden derle (geçişte takılma olmasın)
  const probe = new THREE.Mesh(parts.get('kasa_profili').mesh.geometry, ghostMat); probe.position.copy(MODEL_OFFSET);
  scene.add(probe);
  modules.water.setVisible(true);
  for (const on of [true, false]) {
    attachClipping(on);
    try { await renderer.compileAsync(scene, camera); } catch (e) { renderer.compile(scene, camera); }
  }
  scene.remove(probe); modules.water.setVisible(false);
  attachClipping(state.clip.on);
  $('progressBar').style.width = '100%'; $('loaderPct').textContent = '100%';
  loader.text.textContent = 'Hazır';
  state.needsRender = 3;
  renderLoop.start();
  await new Promise((r) => setTimeout(r, 200));
  $('loader').classList.add('done');
  document.body.classList.add('ready');
  modules.kiosk.poke();
  perf.adaptFrom = performance.now() + 10000;       // açılıştaki derleme/yükleme takılmaları kaliteyi düşürmesin
  if (KIOSK && params.get('attract') === '1') { state.intro = false; setView('hero', true); modules.kiosk.enterAttract(); }
  else if (params.get('intro') === '0') { state.intro = false; setView('hero', true); startTurntableAfterIntro(); }
  else introAnimation();
}
const frame = () => new Promise((r) => requestAnimationFrame(() => r()));

// ------------------------------------------------------------------ model
const ghostMat = createGhostMaterial();
function buildModel(root, tex) {
  const byName = new Map();
  root.traverse((o) => { if (o.isMesh) byName.set(o.name, o); });
  for (const def of PARTS) {
    const mesh = byName.get(def.id);
    if (!mesh) { console.warn('Eksik parça:', def.id); continue; }
    const mat = createMaterial(def.mat, tex, def, tier);
    mat.clippingPlanes = null;
    // KHR_mesh_quantization: köşe noktaları düğüm ölçeğiyle metreye açılır; shader'daki mm/m ölçüleri buna dayanır
    if (mat.userData.u.uODeq) {
      const sc = mesh.scale;
      if (Math.abs(sc.x - sc.y) > 1e-6 || Math.abs(sc.x - sc.z) > 1e-6) console.warn('Eşit olmayan ölçek:', def.id);
      mat.userData.u.uODeq.value.set(mesh.position.x, mesh.position.y, mesh.position.z, sc.x);
    }
    mesh.material = mat;
    mesh.userData.partId = def.id;
    mesh.geometry.computeBoundsTree();
    if (!mesh.geometry.attributes.normal) mesh.geometry.computeVertexNormals();
    if (def.mat === 'glass') mesh.renderOrder = 2;
    model.add(mesh);
    parts.set(def.id, { def, mesh, mat, base: mesh.position.clone(), hi: 0, visible: true, ghost: false });
  }
  $('partsCount').textContent = `${parts.size} parça · ${formatTris(countTris())} üçgen`;
}
function countTris() {
  let n = 0;
  parts.forEach((p) => { const g = p.mesh.geometry; n += (g.index ? g.index.count : g.attributes.position.count) / 3; });
  return n;
}
const formatTris = (n) => (n >= 1000 ? (n / 1000).toFixed(1).replace('.', ',') + 'K' : String(n));

// ana ışık: gölgesiz, yalnızca parlama için; stüdyo ışığı kamerayla birlikte döner (döner tabla aydınlatması)
const KEY_POS = new THREE.Vector3(-0.55, 0.75, 0.6);
let keyLight;
function setupLights() {
  keyLight = new THREE.DirectionalLight(0xfff6ec, 0.5);
  keyLight.position.copy(KEY_POS);
  scene.add(keyLight);
}
const HERO_AZ = Math.atan2(0.78, 0.95);
function updateStudioRotation() {
  const az = Math.atan2(camera.position.x - controls.target.x, camera.position.z - controls.target.z);
  const d = az - HERO_AZ;
  scene.environmentRotation.set(0, d, 0);
  if (keyLight) keyLight.position.copy(KEY_POS).applyAxisAngle(Y_AXIS, d);
}
const Y_AXIS = new THREE.Vector3(0, 1, 0);

// ------------------------------------------------------------------ sahne zemini
let shadow;
function setupShadow() {
  shadow = new ContactShadow(renderer, { width: 0.62, depth: 0.4, height: 0.2, res: 512, opacity: 0.72, blur: 2.4,
    stage: [2.2, 1.6], pool: { color: 0xe4ebf4, alpha: 0.11, radius: [0.46, 0.3] } });
  shadow.group.position.set(0, 0, 0);
  scene.add(shadow.group);
}

// ------------------------------------------------------------------ explode
const tmpV = new THREE.Vector3();
const exFrame = { active: false, zoom: 1, offset: new THREE.Vector3(), idle: 0 };
function visibleSphere() {
  const box = new THREE.Box3();
  parts.forEach((p) => { if (p.mesh.visible) box.expandByObject(p.mesh); });
  return box.getBoundingSphere(new THREE.Sphere());
}
function autoFrameStep() {
  const s = visibleSphere();
  if (!exFrame.active) {
    const dist = camera.position.distanceTo(controls.target);
    exFrame.zoom = dist / fitDistance(s.radius);
    exFrame.offset.copy(controls.target).sub(s.center);
    exFrame.active = true;
  }
  const dir = camera.position.clone().sub(controls.target).normalize();
  const target = s.center.clone().add(exFrame.offset);
  controls.target.copy(target);
  camera.position.copy(target).add(dir.multiplyScalar(fitDistance(s.radius) * exFrame.zoom));
}
function applyExplode() {
  const t = state.explode;
  parts.forEach((p) => {
    tmpV.set(0, 0, 0);
    for (const e of p.def.explode) {
      const k = ease(clamp01((t - e.t[0]) / (e.t[1] - e.t[0])));
      tmpV.x += e.v[0] * k * MM; tmpV.y += e.v[1] * k * MM; tmpV.z += e.v[2] * k * MM;
    }
    p.mesh.position.copy(p.base).add(tmpV);
  });
  state.shadowDirty = true;
}
function setExplodeTarget(v, animate, dur) {
  v = clamp01(v);
  if (animate) {
    state.explodeAnim = { from: state.explode, to: v, t0: performance.now(), dur: dur || 900 + 1500 * Math.abs(v - state.explode) };
  } else {
    state.explodeAnim = null;
    state.explodeTarget = v;
  }
  state.needsRender = Math.max(state.needsRender, 1);
}

// ------------------------------------------------------------------ visibility / selection / ghost
function isShown(p) { return p.visible && (!state.soloSet || state.soloSet.has(p.def.id)); }
function refreshVisibility() {
  parts.forEach((p) => { p.mesh.visible = isShown(p); });
  document.querySelectorAll('.part-row').forEach((row) => {
    const p = parts.get(row.dataset.id);
    row.classList.toggle('hidden-part', !isShown(p));
    row.querySelector('.vis').classList.toggle('on', p.visible);
    row.querySelector('.vis').innerHTML = p.visible ? ICON.eye : ICON.eyeOff;
    row.querySelector('.solo').classList.toggle('on', !!state.soloSet && state.soloSet.size === 1 && state.soloSet.has(p.def.id));
  });
  $('btnUnsolo').disabled = !state.soloSet;
  const anyHidden = [...parts.values()].some((p) => !isShown(p)) || !!state.ghostSet;
  aoMixTarget = anyHidden ? 1 : 0;
  if (state.selected) updateInfoButtons();
  state.shadowDirty = true;
  state.needsRender = 2;
}
let aoMixTarget = 0;
// hayalet görünüm: ids dışındaki (ya da ids içindeki) parçalar x-ray malzemesine geçer
function setGhost(ids) {
  state.ghostSet = ids ? new Set(ids) : null;
  parts.forEach((p) => {
    const g = !!state.ghostSet && state.ghostSet.has(p.def.id);
    if (g === p.ghost) return;
    p.ghost = g;
    p.mesh.material = g ? ghostMat : p.mat;
    p.mesh.renderOrder = g ? 3 : p.def.mat === 'glass' ? 2 : 0;
  });
  ghostFade = state.ghostSet ? 0 : 1;
  refreshVisibility();
}
let ghostFade = 1;

function select(id, { focus = false, refresh = false } = {}) {
  if (state.selected === id && !focus && !refresh) return;
  state.selected = id;
  document.querySelectorAll('.part-row').forEach((r) => r.classList.toggle('selected', r.dataset.id === id));
  const panel = $('infoPanel');
  if (!id) { panel.hidden = true; state.needsRender = 2; return; }
  $('hotCard').hidden = true;
  const p = parts.get(id); const def = p.def;
  $('infoGroup').textContent = GROUPS.find((g) => g.id === def.group).label;
  $('infoName').textContent = def.name;
  $('infoSwatch').style.background = def.foil && state.finish !== 'beyaz' ? FINISHES.find((f) => f.id === state.finish).a : MATERIALS[def.mat].swatch;
  $('infoMat').textContent = MATERIALS[def.mat].label + (def.foil && state.finish !== 'beyaz' ? ' · folyo: ' + FINISHES.find((f) => f.id === state.finish).label : '');
  $('infoText').textContent = def.info;
  const dl = $('infoDims'); dl.innerHTML = '';
  for (const [k, v] of def.dims) {
    const dt = document.createElement('dt'); dt.textContent = k;
    const dd = document.createElement('dd'); dd.textContent = v;
    dl.append(dt, dd);
  }
  $('infoAssembly').textContent = def.assembly;
  $('infoSource').textContent = def.source;
  panel.hidden = false;
  panel.style.animation = 'none'; void panel.offsetWidth; panel.style.animation = '';
  updateInfoButtons();
  const row = document.querySelector(`.part-row[data-id="${id}"]`);
  if (row) row.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  if (focus) focusPart(id);
  state.needsRender = 2;
}
function updateInfoButtons() {
  const p = parts.get(state.selected); if (!p) return;
  $('btnHide').textContent = p.visible ? 'Gizle' : 'Göster';
  const soloOn = state.soloSet && state.soloSet.size === 1 && state.soloSet.has(p.def.id);
  $('btnSolo').textContent = soloOn ? 'İzolasyondan çık' : 'İzole et';
}
function toggleVisible(id) {
  const p = parts.get(id); p.visible = !p.visible;
  if (p.visible && state.soloSet && !state.soloSet.has(id)) state.soloSet.add(id);
  refreshVisibility();
}
function toggleSolo(id) {
  if (state.soloSet && state.soloSet.size === 1 && state.soloSet.has(id)) state.soloSet = null;
  else { state.soloSet = new Set([id]); parts.get(id).visible = true; }
  refreshVisibility();
}
function toggleGroupVisible(gid) {
  const list = PARTS.filter((d) => d.group === gid).map((d) => parts.get(d.id)).filter(Boolean);
  const anyVisible = list.some((p) => p.visible);
  list.forEach((p) => (p.visible = !anyVisible));
  refreshVisibility();
}
function soloGroup(gid) {
  const ids = PARTS.filter((d) => d.group === gid).map((d) => d.id);
  const same = state.soloSet && state.soloSet.size === ids.length && ids.every((i) => state.soloSet.has(i));
  state.soloSet = same ? null : new Set(ids);
  ids.forEach((i) => (parts.get(i).visible = true));
  refreshVisibility();
}

// ------------------------------------------------------------------ picking / hover
const raycaster = new THREE.Raycaster();
raycaster.firstHitOnly = false;
const ndc = new THREE.Vector2();
function pick(x, y) {
  const rect = canvas.getBoundingClientRect();
  ndc.set(((x - rect.left) / rect.width) * 2 - 1, -((y - rect.top) / rect.height) * 2 + 1);
  raycaster.setFromCamera(ndc, camera);
  const meshes = []; parts.forEach((p) => { if (p.mesh.visible && !p.ghost) meshes.push(p.mesh); });
  const hits = raycaster.intersectObjects(meshes, false).filter((h) => !state.clip.on || clipPlane.distanceToPoint(h.point) >= -1e-5);
  if (!hits.length) return null;
  const first = hits[0];
  if (parts.get(first.object.userData.partId).def.mat === 'glass') {
    const solid = hits.find((h) => parts.get(h.object.userData.partId).def.mat !== 'glass' && h.distance - first.distance < 0.12);
    if (solid) return solid.object.userData.partId;
  }
  return first.object.userData.partId;
}
const pointer = { x: 0, y: 0, down: null, moved: false, pending: false };
canvas.addEventListener('pointermove', (e) => {
  pointer.x = e.clientX; pointer.y = e.clientY;
  if (pointer.down && Math.hypot(e.clientX - pointer.down.x, e.clientY - pointer.down.y) > 4) pointer.moved = true;
  if (e.pointerType === 'mouse') pointer.pending = true;
});
canvas.addEventListener('pointerleave', () => setHover(null));
canvas.addEventListener('pointerdown', (e) => { pointer.down = { x: e.clientX, y: e.clientY }; pointer.moved = false; closePopovers(); userActive(); });
canvas.addEventListener('pointerup', (e) => {
  const swallowed = !!modules.kiosk?.swallowTap();   // tanıtımı bitiren dokunuş seçim sayılmaz
  if (pointer.down && !pointer.moved && e.button === 0 && !swallowed) {
    const id = pick(e.clientX, e.clientY);
    select(id);
  }
  pointer.down = null;
});
canvas.addEventListener('dblclick', (e) => {
  const id = pick(e.clientX, e.clientY);
  if (id) select(id, { focus: true }); else setView('hero');
});
function setHover(id) {
  if (state.hovered === id) return;
  state.hovered = id;
  canvas.classList.toggle('hovering', !!id);
  document.querySelectorAll('.part-row').forEach((r) => r.classList.toggle('hover', r.dataset.id === id));
  const tip = $('tooltip');
  if (id) {
    const def = parts.get(id).def;
    tip.innerHTML = '';
    tip.append(def.name);
    const s = document.createElement('small'); s.textContent = MATERIALS[def.mat].label; tip.append(s);
    tip.hidden = false;
  } else tip.hidden = true;
  state.needsRender = Math.max(state.needsRender, 1);
}
function processHover() {
  if (!pointer.pending) return;
  pointer.pending = false;
  if (pointer.down) return;
  const id = pick(pointer.x, pointer.y);
  setHover(id);
  const tip = $('tooltip');
  if (id) { tip.style.left = pointer.x + 'px'; tip.style.top = pointer.y + 'px'; }
}

// ------------------------------------------------------------------ clipping
// normaller: x ve y ekseninde kolun serbest ucu tarafı, z'de iç taraf, d'de yan kol tarafı kesilip atılır
const AXES = { x: new THREE.Vector3(-1, 0, 0), y: new THREE.Vector3(0, -1, 0), z: new THREE.Vector3(0, 0, -1),
  d: new THREE.Vector3(1, -1, 0).normalize() };
let planeHelper, planeHelperFade = 0;
let clipAttached = false;
function attachClipping(on) {
  if (clipAttached === on) return;
  clipAttached = on;
  parts.forEach((p) => { p.mat.clippingPlanes = on ? clipPlanes : null; });
}
function clipPoint(axis, pos) {   // düzlem üzerindeki bir nokta (dünya, m)
  if (axis === 'd') return toWorld(150 + pos / Math.SQRT2, 150 - pos / Math.SQRT2, 0);   // (x - y)/√2 = pos
  const v = { x: 0, y: 0, z: 0 }; v[axis] = pos;
  return toWorld(v.x, v.y, v.z);
}
function setClip(axis, pos, on = true) {
  state.clip.axis = axis; state.clip.pos = pos; state.clip.flip = false; state.clip.on = on;
  document.querySelectorAll('.seg-btn[data-axis]').forEach((x) => { const a = x.dataset.axis === axis; x.classList.toggle('active', a); x.setAttribute('aria-checked', String(a)); });
  updateClip();
}
function updateClip() {
  const c = state.clip;
  attachClipping(c.on);
  $('btnSection').setAttribute('aria-pressed', String(c.on));
  if (!c.on) {
    clipPlane.set(new THREE.Vector3(1, 0, 0), 1e6);
    shared.uClipOn.value = 0;
  } else {
    const n = AXES[c.axis].clone().multiplyScalar(c.flip ? -1 : 1);
    clipPlane.setFromNormalAndCoplanarPoint(n, clipPoint(c.axis, c.pos));
    shared.uClipOn.value = 1;
  }
  shared.uClip.value.set(clipPlane.normal.x, clipPlane.normal.y, clipPlane.normal.z, clipPlane.constant);
  const r = BOUNDS_MM[c.axis];
  const axLabel = { x: 'X', y: 'Y', z: 'Z', d: 'Gönye' }[c.axis];
  $('clipVal').textContent = `${axLabel} ${c.axis === 'd' ? (c.pos >= 0 ? '+' : '') : '= '}${Math.round(c.pos)} mm`;
  $('clipPos').value = Math.round(((c.pos - r[0]) / (r[1] - r[0])) * 1000);
  setRangeFill($('clipPos'));
  if (!planeHelper) {
    const g = new THREE.PlaneGeometry(1, 1);
    planeHelper = new THREE.Group();
    const fill = new THREE.Mesh(g, new THREE.MeshBasicMaterial({ color: 0x5cc8ff, transparent: true, opacity: 0.07, side: THREE.DoubleSide, depthWrite: false, toneMapped: false, forceSinglePass: true }));
    const edge = new THREE.LineSegments(new THREE.EdgesGeometry(g), new THREE.LineBasicMaterial({ color: 0x5cc8ff, transparent: true, opacity: 0.8, toneMapped: false }));
    planeHelper.add(fill, edge); planeHelper.renderOrder = 5;
    scene.add(planeHelper);
  }
  if (c.on) {
    const pad = 16;
    const p = clipPoint(c.axis, c.pos);
    planeHelper.rotation.set(0, 0, 0);
    if (c.axis === 'x') { planeHelper.scale.set(130 * MM, 330 * MM, 1); planeHelper.rotation.y = Math.PI / 2; planeHelper.position.set(p.x, 0.15, -0.003); }
    if (c.axis === 'y') { planeHelper.scale.set(330 * MM, 130 * MM, 1); planeHelper.rotation.x = -Math.PI / 2; planeHelper.position.set(0, p.y, -0.003); }
    if (c.axis === 'z') { planeHelper.scale.set((300 + pad) * MM, (300 + pad) * MM, 1); planeHelper.position.set(0, 0.15, p.z); }
    if (c.axis === 'd') { planeHelper.scale.set(130 * MM, 440 * MM, 1); planeHelper.rotation.set(0, Math.PI / 2, 0); planeHelper.rotateOnWorldAxis(new THREE.Vector3(0, 0, 1), -Math.PI / 4); planeHelper.position.copy(p); planeHelper.position.z = -0.003; }
    planeHelperFade = 1.6;
  }
  planeHelper.visible = c.on && planeHelperFade > 0;
  state.needsRender = 2;
}
function setRangeFill(el) { el.style.setProperty('--fill', (el.value / el.max) * 100 + '%'); }

// ------------------------------------------------------------------ dimension overlay (döküman ölçüleri, alt kolun serbest ucu)
let dimGroup; const dimLabels = [];
function setupDims() {
  dimGroup = new THREE.Group(); dimGroup.visible = false; scene.add(dimGroup);
  const XE = 300.8;   // uç yüzün hemen önü (mm)
  const P = (sx, sy) => toWorld(XE, sy, sx - 52.25);
  const mat = new THREE.LineBasicMaterial({ color: 0x7fd66a, transparent: true, opacity: 0.95, toneMapped: false, depthTest: true });
  const pts = [];
  const tick = 1.6;
  function hdim(x0, x1, y, yRef0, yRef1, label) {
    pts.push(P(x0, y), P(x1, y));
    pts.push(P(x0, yRef0), P(x0, y + tick), P(x1, yRef1), P(x1, y + tick));
    pts.push(P(x0 - 1, y - 1), P(x0 + 1, y + 1), P(x1 - 1, y - 1), P(x1 + 1, y + 1));
    addLabel(P((x0 + x1) / 2, y), label);
  }
  function vdim(x, y0, y1, xRef0, xRef1, label) {
    pts.push(P(x, y0), P(x, y1));
    pts.push(P(xRef0, y0), P(x + tick, y0), P(xRef1, y1), P(x + tick, y1));
    pts.push(P(x - 1, y0 - 1), P(x + 1, y0 + 1), P(x - 1, y1 - 1), P(x + 1, y1 + 1));
    addLabel(P(x, (y0 + y1) / 2), label);
  }
  function addLabel(pos, text) {
    const el = document.createElement('div'); el.className = 'dim-label'; el.textContent = text;
    $('dimLabels').appendChild(el); dimLabels.push({ pos, el });
  }
  hdim(0, 104.5, 162, 124, 124, '104,5');
  hdim(19.5, 104.5, 150, 124, 124, '85');
  hdim(0, 85, -12, 0, 0, '85');
  vdim(-14, 0, 124, 0, 19.5, '124');
  vdim(-6, 0, 74, 0, 0, '74');
  vdim(114, 40, 124, 104.5, 104.5, '84');
  vdim(114, 0, 40, 85, 104.5, '40');
  vdim(124, 0, 124, 104.5, 104.5, '124');
  dimGroup.add(new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(pts), mat));
  dimLabels.forEach((d) => (d.el.style.opacity = 0));
}
const projV = new THREE.Vector3();
function updateDimLabels() {
  const show = state.dims && state.explode < 0.02;
  dimGroup.visible = show;
  const w = canvas.clientWidth, h = canvas.clientHeight;
  const camDir = new THREE.Vector3(); camera.getWorldDirection(camDir);
  const facing = camDir.x < -0.15;  // alt kolun uç yüzü (+X) görülebiliyor mu
  for (const d of dimLabels) {
    if (!show || !facing) { d.el.style.opacity = 0; continue; }
    projV.copy(d.pos).project(camera);
    if (projV.z > 1) { d.el.style.opacity = 0; continue; }
    d.el.style.opacity = 1;
    d.el.style.left = ((projV.x + 1) / 2) * w + 'px';
    d.el.style.top = ((1 - projV.y) / 2) * h + 'px';
  }
}

// ------------------------------------------------------------------ camera views
// r: görünümde sığdırılacak yarıçap (m); hedefler dünya ekseninde (numune X'te ortalı)
const VIEWS = {
  hero:     { dir: [0.78, 0.36, 0.95], r: 0.2, target: [0.0, 0.14, 0.0] },
  corner:   { dir: [0.5, 0.42, 1.0], r: 0.075, target: [-0.1, 0.05, 0.02] },
  end:      { dir: [1, 0.06, 0.03], r: 0.085, target: [0.15, 0.072, -0.003], fov: 14 },
  dims:     { dir: [1, 0.04, 0.02], r: 0.108, target: [0.15, 0.075, -0.003], fov: 14 },
  interior: { dir: [0.06, 0.12, 1], r: 0.22, target: [0, 0.15, 0] },
  exterior: { dir: [-0.12, 0.16, -1], r: 0.22, target: [0, 0.15, 0] },
  top:      { dir: [0.001, 1, 0.14], r: 0.2, target: [0, 0.12, 0] },
  bottom:   { dir: [0.4, -0.75, 0.55], r: 0.2, target: [0, 0.07, 0] },
  weld:     { dir: [-0.62, 0.55, 0.62], r: 0.095, target: [-0.088, 0.066, 0.0] },
};
// serbest alan önbelleği: paneller değişince (gözlemciler) ya da en geç 250 ms'de bir yeniden ölçülür;
// her karede düzen okuması yapılmaz
let faCache = null, faT = 0, layoutDirty = true;
function markLayout() { layoutDirty = true; }
function watchLayout() {
  const mo = new MutationObserver(markLayout);
  const ro = new ResizeObserver(markLayout);
  for (const id of ['partsPanel', 'infoPanel', 'hotCard', 'sectionPop', 'tourCard', 'dock']) {
    const el = $(id); if (!el) continue;
    mo.observe(el, { attributes: true, attributeFilter: ['hidden', 'class'] });
    ro.observe(el);
  }
  const top = document.querySelector('.topbar'); if (top) ro.observe(top);
}
function freeArea() {
  const now = performance.now();
  if (faCache && !layoutDirty && now - faT < 250) return faCache;
  faCache = measureFreeArea(); faT = now; layoutDirty = false;
  return faCache;
}
function measureFreeArea() {
  const W = window.innerWidth, H = window.innerHeight;
  const narrow = W < 820;
  const rectW = (id) => { const el = $(id); if (!el || el.hidden || el.classList.contains('collapsed')) return 0; const r = el.getBoundingClientRect(); return r.width > 0 ? r.right + 16 : 0; };
  const left = narrow ? 0 : rectW('partsPanel');
  const rightEl = ['infoPanel', 'hotCard', 'sectionPop'].map($).find((el) => el && !el.hidden) || null;
  const right = narrow || !rightEl ? 0 : W - rightEl.getBoundingClientRect().left + 16;
  const topEl = document.querySelector('.topbar');
  const top = topEl ? topEl.getBoundingClientRect().bottom + 8 : 84;
  let bottom = H - $('dock').getBoundingClientRect().top + 12;
  const cap = $('tourCard');
  if (cap && !cap.hidden) bottom = Math.max(bottom, H - cap.getBoundingClientRect().top + 12);
  return { x0: left, x1: W - right, y0: top, y1: H - bottom, W, H };
}
function fitDistance(r, fovDeg = camera.fov) {
  const f = freeArea();
  const vfov = THREE.MathUtils.degToRad(fovDeg);
  const th = Math.tan(vfov / 2);
  const vf = 2 * Math.atan(th * Math.max(40, f.y1 - f.y0) / f.H);
  const hf = 2 * Math.atan(th * camera.aspect * Math.max(40, f.x1 - f.x0) / f.W);
  return r / Math.sin(Math.min(vf, hf) / 2);
}
const viewOffset = { x: 0, y: 0, tx: 0, ty: 0 };
function updateViewOffsetTarget() {
  const f = freeArea();
  viewOffset.tx = (f.x0 + f.x1) / 2 - f.W / 2;
  viewOffset.ty = (f.y0 + f.y1) / 2 - f.H / 2;
}
function stepViewOffset(dt) {
  updateViewOffsetTarget();
  const k = 1 - Math.exp(-dt * 10);
  const dx = viewOffset.tx - viewOffset.x, dy = viewOffset.ty - viewOffset.y;
  if (Math.abs(dx) < 0.2 && Math.abs(dy) < 0.2 && camera.view) return false;
  viewOffset.x += dx * k; viewOffset.y += dy * k;
  camera.setViewOffset(window.innerWidth, window.innerHeight, -viewOffset.x, -viewOffset.y, window.innerWidth, window.innerHeight);
  return true;
}
const BASE_FOV = 30;
function viewPose(name, explodeFor = state.explode) {
  markLayout();                                       // kamera çerçevesi güncel panel yerleşimine göre hesaplanır
  const v = typeof name === 'string' ? VIEWS[name] : name;
  const fov = v.fov || BASE_FOV;
  const target = new THREE.Vector3(...v.target);
  const portrait = camera.aspect < 1 ? 1.15 : 1;
  const d = fitDistance(v.r * portrait * (1 + 0.6 * explodeFor), fov);
  const pos = new THREE.Vector3(...v.dir).normalize().multiplyScalar(d).add(target);
  return { pos, target, fov };
}
function setView(name, instant = false, dur = 950) {
  const p = viewPose(name);
  animateCamera(p.pos, p.target, instant ? 0 : dur, p.fov);
}
function setFov(f) { camera.fov = f; camera.updateProjectionMatrix(); }
function animateCamera(pos, target, dur, fov = camera.fov) {
  if (!dur) {
    setFov(fov); camera.position.copy(pos); controls.target.copy(target); controls.update(); state.camAnim = null; state.needsRender = 2; return;
  }
  state.camAnim = { p0: camera.position.clone(), t0: controls.target.clone(), p1: pos, t1: target, start: performance.now(), dur, f0: camera.fov, f1: fov };
}
function stepCamera(now) {
  const a = state.camAnim; if (!a) return false;
  const k = ease(clamp01((now - a.start) / a.dur));
  if (a.f0 !== a.f1) setFov(THREE.MathUtils.lerp(a.f0, a.f1, k));
  const tgt = a.t0.clone().lerp(a.t1, k);
  const d0 = a.p0.clone().sub(a.t0), d1 = a.p1.clone().sub(a.t1);
  const r = THREE.MathUtils.lerp(d0.length(), d1.length(), k);
  const dir = d0.normalize().lerp(d1.normalize(), k);
  if (dir.lengthSq() < 1e-6) dir.set(0, 1, 0);
  camera.position.copy(tgt).add(dir.normalize().multiplyScalar(r));
  controls.target.copy(tgt);
  controls.update();
  if (k >= 1) { state.camAnim = null; a.done?.(); }
  return true;
}
function focusPart(id) {
  markLayout();
  const p = parts.get(id);
  const box = new THREE.Box3().setFromObject(p.mesh);
  const sphere = box.getBoundingSphere(new THREE.Sphere());
  const dir = camera.position.clone().sub(controls.target).normalize();
  const dist = Math.max(0.1, fitDistance(Math.min(sphere.radius, 0.2) * 1.1));
  animateCamera(sphere.center.clone().add(dir.multiplyScalar(dist)), sphere.center.clone(), 850);
}

// ------------------------------------------------------------------ açılış sinematiği + 360° döner tabla
const introState = { t0: 0, anim: null };
function endIntro() {
  if (!state.intro) return;
  state.intro = false; introState.anim = null;
  if (!state.explodeAnim && state.explode > 0.001) setExplodeTarget(0, true, 1200);
  startTurntableAfterIntro();
}
function introAnimation() {
  state.intro = true; introState.t0 = performance.now(); introState.anim = null;
  const hero = viewPose('hero', 0);
  const start = hero.pos.clone().sub(hero.target).applyAxisAngle(Y_AXIS, -1.15);
  start.y += 0.08; start.multiplyScalar(1.45).add(hero.target);
  setFov(BASE_FOV); camera.position.copy(start); controls.target.copy(hero.target); controls.update();
  state.explode = state.explodeTarget = 0.9; applyExplode();
  $('explode').value = 900; setRangeFill($('explode'));
  setTimeout(() => {
    if (!state.intro) return;                          // ziyaretçi bu arada etkileşti
    setExplodeTarget(0, true, 2600);
    animateCamera(hero.pos, hero.target, 3200);
    introState.anim = state.camAnim; state.camAnim.done = endIntro;
  }, 350);
}
const TURN_SPEEDS = [0.45, 0.9, 1.8];    // OrbitControls: 2,0 = 30 sn/tur; 0,9 ≈ 67 sn/tur
const turn = { on: false, speed: 1, k: 0, pausedUntil: 0, auto: params.get('spin') !== '0' };
function startTurntableAfterIntro() { modules.kiosk?.poke(); if (turn.auto) setTurntable(true); }
function setTurntable(on) {
  turn.on = on;
  $('btnTurn').setAttribute('aria-pressed', String(on));
  $('btnTurn').classList.toggle('spinning', on);
  state.needsRender = 2;
}
// kullanıcı etkileşimi: döner tabla kısa süre durur, sonra yavaşça yeniden başlar
function userActive() {
  turn.pausedUntil = performance.now() + (KIOSK ? 6000 : 9000);
  modules.kiosk?.poke();
}

// ------------------------------------------------------------------ renk / folyo
function setFinish(id) {
  const f = FINISHES.find((x) => x.id === id) || FINISHES[0];
  state.finish = f.id;
  applyFinish(f);
  document.querySelectorAll('.finish-btn').forEach((b) => b.classList.toggle('active', b.dataset.finish === f.id));
  $('finishName').textContent = f.label;
  if (state.selected) select(state.selected, { focus: false, refresh: true });
  state.needsRender = 2;
}

// ------------------------------------------------------------------ UI
const ICON = {
  eye: '<svg viewBox="0 0 24 24"><path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="2.8"/></svg>',
  eyeOff: '<svg viewBox="0 0 24 24"><path d="M3 3l18 18M10.6 5.6A10 10 0 0 1 12 5.5c6 0 9.5 6.5 9.5 6.5a17 17 0 0 1-3.2 3.9M6.2 6.9C3.9 8.5 2.5 12 2.5 12S6 18.5 12 18.5c1.4 0 2.7-.3 3.8-.9"/><path d="M9.9 9.9a2.8 2.8 0 0 0 4.2 4.2"/></svg>',
  solo: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/></svg>',
};
function buildUI() {
  const list = $('partsList'); list.innerHTML = '';
  for (const g of GROUPS) {
    const wrap = document.createElement('div'); wrap.className = 'parts-group';
    const head = document.createElement('div'); head.className = 'group-head';
    const t = document.createElement('span'); t.textContent = g.label;
    const acts = document.createElement('span');
    const bVis = document.createElement('button'); bVis.textContent = 'göster/gizle'; bVis.title = 'Grubu göster / gizle';
    bVis.onclick = () => toggleGroupVisible(g.id);
    const bSolo = document.createElement('button'); bSolo.textContent = 'izole'; bSolo.title = 'Yalnızca bu grubu göster';
    bSolo.onclick = () => soloGroup(g.id);
    acts.append(bVis, bSolo); head.append(t, acts); wrap.append(head);
    for (const def of PARTS.filter((d) => d.group === g.id)) {
      if (!parts.has(def.id)) continue;
      const row = document.createElement('div'); row.className = 'part-row'; row.dataset.id = def.id; row.tabIndex = 0;
      row.setAttribute('role', 'button');
      const sw = document.createElement('span'); sw.className = 'swatch'; sw.style.background = MATERIALS[def.mat].swatch;
      const nm = document.createElement('span'); nm.className = 'part-name'; nm.textContent = def.name;
      const vis = document.createElement('button'); vis.className = 'row-btn vis on'; vis.title = 'Göster / gizle'; vis.innerHTML = ICON.eye;
      vis.setAttribute('aria-label', def.name + ' göster/gizle');
      const solo = document.createElement('button'); solo.className = 'row-btn solo'; solo.title = 'İzole et (yalnızca bunu göster)'; solo.innerHTML = ICON.solo;
      solo.setAttribute('aria-label', def.name + ' izole et');
      vis.onclick = (e) => { e.stopPropagation(); toggleVisible(def.id); };
      solo.onclick = (e) => { e.stopPropagation(); toggleSolo(def.id); };
      row.onclick = () => select(state.selected === def.id ? null : def.id);
      row.ondblclick = () => select(def.id, { focus: true });
      row.onkeydown = (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); select(def.id); } };
      row.onmouseenter = () => { if (parts.get(def.id).mesh.visible) setHover(def.id); $('tooltip').hidden = true; };
      row.onmouseleave = () => setHover(null);
      row.append(sw, nm, vis, solo); wrap.append(row);
    }
    list.append(wrap);
  }
  $('btnShowAll').onclick = () => { parts.forEach((p) => (p.visible = true)); state.soloSet = null; refreshVisibility(); };
  $('btnUnsolo').onclick = () => { state.soloSet = null; refreshVisibility(); };
  $('btnPartsCollapse').onclick = () => { $('partsPanel').classList.add('collapsed'); $('btnPartsOpen').hidden = false; };
  $('btnPartsOpen').onclick = () => { $('partsPanel').classList.remove('collapsed'); $('btnPartsOpen').hidden = true; };
  $('btnPartsOpen').hidden = true;
  if (window.innerWidth < 820 || KIOSK) { $('partsPanel').classList.add('collapsed'); $('btnPartsOpen').hidden = false; }

  $('btnInfoClose').onclick = () => select(null);
  $('btnFocus').onclick = () => state.selected && focusPart(state.selected);
  $('btnSolo').onclick = () => state.selected && toggleSolo(state.selected);
  $('btnHide').onclick = () => state.selected && toggleVisible(state.selected);

  // patlatma
  const ex = $('explode');
  ex.addEventListener('input', () => { setExplodeTarget(ex.value / 1000, false); setRangeFill(ex); userActive(); });
  $('btnExplodePlay').onclick = () => { setExplodeTarget(state.explodeTarget > 0.5 || state.explode > 0.5 ? 0 : 1, true); userActive(); };

  // kesit
  $('btnSection').onclick = () => {
    const pop = $('sectionPop');
    const willOpen = pop.hidden;
    closePopovers();
    if (!state.clip.on) { state.clip.on = true; updateClip(); }
    else if (!willOpen) { state.clip.on = false; updateClip(); }
    pop.hidden = !willOpen || !state.clip.on;
    document.body.classList.toggle('sec-open', !pop.hidden);
    $('btnSection').setAttribute('aria-pressed', String(state.clip.on));
  };
  document.querySelectorAll('.seg-btn[data-axis]').forEach((b) => (b.onclick = () => {
    const axis = b.dataset.axis;
    setClip(axis, { x: 150, y: 200, z: -8, d: 0 }[axis]);
    if (axis === 'd') setView('weld');
  }));
  const cp = $('clipPos');
  cp.addEventListener('input', () => {
    const r = BOUNDS_MM[state.clip.axis];
    state.clip.pos = r[0] + (cp.value / 1000) * (r[1] - r[0]);
    updateClip();
  });
  $('btnClipFlip').onclick = () => { state.clip.flip = !state.clip.flip; updateClip(); };
  const pres = $('clipPresets');
  for (const pr of SECTION_PRESETS) {
    const b = document.createElement('button'); b.className = 'btn small'; b.textContent = pr.label;
    b.onclick = () => { setClip(pr.axis, pr.pos); if (pr.axis === 'x') setView('end'); if (pr.axis === 'd') setView('weld'); };
    pres.append(b);
  }

  // ölçüler + çizim bindirme
  $('btnDims').onclick = () => {
    const pop = $('dimsPop'); const o = pop.hidden; closePopovers(); pop.hidden = !o;
    if (o && !state.dims && !state.drawing) setDims(true);
    $('btnDims').setAttribute('aria-pressed', String(state.dims || state.drawing));
  };
  $('tglDims').onchange = (e) => setDims(e.target.checked);
  $('tglDrawing').onchange = (e) => setDrawing(e.target.checked);

  // görünümler
  $('btnViews').onclick = () => { const pop = $('viewsPop'); const o = pop.hidden; closePopovers(); pop.hidden = !o; $('btnViews').setAttribute('aria-pressed', String(o)); };
  document.querySelectorAll('[data-view]').forEach((b) => (b.onclick = () => { setView(b.dataset.view); closePopovers(); userActive(); }));
  $('tglHotspots').onchange = (e) => setHotspots(e.target.checked);

  // 360°
  $('btnTurn').onclick = () => { setTurntable(!turn.on); turn.pausedUntil = 0; };
  $('btnTurnMenu').onclick = (e) => { e.stopPropagation(); const pop = $('turnPop'); const o = pop.hidden; closePopovers(); pop.hidden = !o; };
  document.querySelectorAll('[data-speed]').forEach((b) => (b.onclick = () => {
    turn.speed = Number(b.dataset.speed);
    document.querySelectorAll('[data-speed]').forEach((x) => x.classList.toggle('active', x === b));
    setTurntable(true); turn.pausedUntil = 0;
  }));

  // renk
  const fl = $('finishList');
  for (const f of FINISHES) {
    const b = document.createElement('button'); b.className = 'finish-btn'; b.dataset.finish = f.id; b.title = f.label;
    b.setAttribute('aria-label', f.label);
    const sw = document.createElement('span'); sw.className = 'finish-sw' + (f.mode === 2 ? ' wood' : '');
    sw.style.setProperty('--a', f.a); sw.style.setProperty('--b', f.b);
    const lb = document.createElement('span'); lb.textContent = f.label;
    b.append(sw, lb);
    b.onclick = () => { setFinish(f.id); userActive(); };
    fl.append(b);
  }
  $('btnFinish').onclick = () => { const pop = $('finishPop'); const o = pop.hidden; closePopovers(); pop.hidden = !o; $('btnFinish').setAttribute('aria-pressed', String(o)); };

  $('btnReset').onclick = resetAll;
  $('btnTour').onclick = () => modules.tour.toggle();

  // üst sağ
  $('btnHelp').onclick = () => ($('helpModal').hidden = false);
  $('btnSpecs').onclick = () => ($('specsModal').hidden = false);
  $('btnFull').onclick = () => { if (!document.fullscreenElement) document.documentElement.requestFullscreen?.(); else document.exitFullscreen?.(); };
  $('perfChip').onclick = () => { fillPerfStats(); $('perfModal').hidden = false; };
  $('btnBench').onclick = runBenchmark;
  document.querySelectorAll('.modal').forEach((m) => m.addEventListener('click', (e) => { if (e.target === m || e.target.closest('[data-close]')) m.hidden = true; }));

  // teknik özellikler
  const sl = $('specsList');
  for (const [k, v, src] of SPECS) {
    const dt = document.createElement('dt'); dt.textContent = k;
    const dd = document.createElement('dd'); dd.textContent = v;
    const s = document.createElement('span'); s.className = 'src'; s.textContent = src; dd.append(s);
    sl.append(dt, dd);
  }
  const al = $('assumptionsList');
  for (const a of ASSUMPTIONS) { const li = document.createElement('li'); li.textContent = a; al.append(li); }
  // resmi test (ift belgesi): yalnızca belge verildiyse gösterilir
  if (PERFORMANCE) {
    const P = PERFORMANCE;
    $('certValue').textContent = P.uf.value; $('certUnit').textContent = P.uf.unit;
    $('certLabel').textContent = P.uf.label; $('certBasis').textContent = P.uf.basis;
    const cl = $('certList');
    for (const [k, v, src] of P.rows) {
      const dt = document.createElement('dt'); dt.textContent = k;
      const dd = document.createElement('dd'); dd.textContent = v;
      const sp = document.createElement('span'); sp.className = 'src'; sp.textContent = src; dd.append(sp);
      cl.append(dt, dd);
    }
    $('certSource').textContent = P.source;
    $('certBlock').hidden = false;
    $('certBadgeVal').textContent = `${P.uf.value} ${P.uf.unit}`;
    $('certBadge').hidden = false;
    $('certBadge').onclick = () => ($('specsModal').hidden = false);
  }

  // sayfa geçişi (düz kesit)
  document.querySelectorAll('[data-page]').forEach((a) => a.addEventListener('click', (e) => {
    const href = a.getAttribute('href');
    if (!href || a.classList.contains('active')) { e.preventDefault(); return; }
    e.preventDefault();
    const u = new URL(href, location.href);
    if (KIOSK) for (const k of ['kiosk', 'idle', 'reload', 'fs', 'q', 'dpr', 'aa']) if (params.has(k)) u.searchParams.set(k, params.get(k));
    const url = u.toString();
    document.body.classList.add('leaving');
    setTimeout(() => { location.href = url; }, 260);
  }));

  window.addEventListener('keydown', onKey);
  watchLayout();
  updateClip();
  setRangeFill(ex);
  setFinish('beyaz');
}
function setDims(on) {
  state.dims = on; $('tglDims').checked = on;
  if (on) { setExplodeTarget(0, true); setView('dims'); }
  $('btnDims').setAttribute('aria-pressed', String(state.dims || state.drawing));
  state.needsRender = 2;
}
function setDrawing(on) {
  state.drawing = on; $('tglDrawing').checked = on;
  modules.drawing.setVisible(on);
  if (on) { setExplodeTarget(0, true); setView('dims'); }
  $('btnDims').setAttribute('aria-pressed', String(state.dims || state.drawing));
  state.needsRender = 2;
}
function setHotspots(on) {
  state.hotspots = on; $('tglHotspots').checked = on;
  modules.hotspots.setVisible(on);
  state.needsRender = 2;
}
function closePopovers() {
  for (const id of ['sectionPop', 'viewsPop', 'dimsPop', 'turnPop', 'finishPop']) $(id).hidden = true;
  document.body.classList.remove('sec-open');
  $('btnViews').setAttribute('aria-pressed', 'false');
  $('btnFinish').setAttribute('aria-pressed', 'false');
}
function closeModals() { for (const id of ['helpModal', 'specsModal', 'perfModal']) $(id).hidden = true; }
const anyModalOpen = () => ['helpModal', 'specsModal', 'perfModal'].some((id) => !$(id).hidden);
function resetAll() {
  modules.tour?.stop(false);
  modules.water?.stop();
  closeModals(); modules.hotspots?.close();
  parts.forEach((p) => (p.visible = true)); state.soloSet = null; setGhost(null);
  select(null);
  state.clip.on = false; updateClip(); $('btnSection').setAttribute('aria-pressed', 'false');
  setExplodeTarget(0, true); $('explode').value = 0; setRangeFill($('explode'));
  setDims(false); setDrawing(false); setHotspots(false);
  closePopovers();
  setView('hero');
}
function onKey(e) {
  if (e.target.tagName === 'INPUT' && e.key !== 'Escape') return;
  if (e.ctrlKey || e.metaKey || e.altKey) return;      // Ctrl+C, Ctrl+R vb. tarayıcıya kalır
  const c = e.code;
  userActive();
  if (c === 'Escape') {
    if (anyModalOpen()) { closeModals(); return; }
    if (modules.tour.active) { modules.tour.stop(); return; }
    closePopovers();
    if (state.selected) select(null); else if (state.soloSet) { state.soloSet = null; refreshVisibility(); }
    return;
  }
  if (anyModalOpen()) return;
  if (c === 'KeyH' && state.selected) toggleVisible(state.selected);
  else if (c === 'KeyI' && state.selected) toggleSolo(state.selected);
  else if (c === 'KeyF' && state.selected) focusPart(state.selected);
  else if (c === 'KeyE') $('btnExplodePlay').click();
  else if (c === 'KeyC') $('btnSection').click();
  else if (c === 'KeyD') setDims(!state.dims);
  else if (c === 'KeyT') modules.tour.toggle();
  else if (c === 'Space' && modules.tour.active) { e.preventDefault(); modules.tour.pause(); }
  else if (c === 'ArrowRight' && modules.tour.active) modules.tour.next();
  else if (c === 'ArrowLeft' && modules.tour.active) modules.tour.prev();
  else if (c === 'KeyO') $('btnTurn').click();
  else if (c === 'KeyR') resetAll();
  else if (e.key === '?') $('helpModal').hidden = false;
}

// ------------------------------------------------------------------ performance
const perf = { frames: [], lastRender: 0, gpuExt: null, gpuQueries: [], gpuMs: [], adaptive: true, adaptFrom: Infinity };
const TIER0 = tier;
perf.gpuExt = renderer.getContext().getExtension('EXT_disjoint_timer_query_webgl2');
function perfFrame(now) {
  const dt = now - perf.lastRender;
  perf.lastRender = now;
  if (dt > 0 && dt < 250) { perf.frames.push(dt); if (perf.frames.length > 240) perf.frames.shift(); }
}
function perfSummary(arr = perf.frames) {
  if (!arr.length) return null;
  const s = [...arr].sort((a, b) => a - b);
  const avg = arr.reduce((a, b) => a + b, 0) / arr.length;
  const p99 = s[Math.min(s.length - 1, Math.floor(s.length * 0.99))];
  return { fps: 1000 / avg, avgMs: avg, low1: 1000 / p99, n: arr.length };
}
let perfUiT = 0;
function updatePerfUI(now, active) {
  if (now - perfUiT < 400) return;
  perfUiT = now;
  const recent = perf.frames.slice(-60);
  const s = active && recent.length > 10 ? perfSummary(recent) : null;
  if (s && perf.gpuMs.length) {
    const g = perf.gpuMs.slice(-10).reduce((a, b) => a + b, 0) / Math.min(10, perf.gpuMs.length);
    if (g > s.avgMs) { s.avgMs = g; s.fps = 1000 / g; }
  }
  const dot = $('perfDot');
  if (s) {
    $('perfFps').textContent = `${Math.round(s.fps)} FPS`;
    $('perfMs').textContent = `${s.avgMs.toFixed(1)} ms`;
    dot.className = 'dot ' + (s.fps >= 50 ? 'live' : 'slow');
  } else { dot.className = 'dot'; }
  $('perfCalls').textContent = `${lastInfo.calls} çağrı`;
  $('perfTris').textContent = `${formatTris(lastInfo.tris)} üçgen`;
  // uyarlanabilir çözünürlük ve kalite: süreklilikte < 45 FPS ise önce piksel oranı, sonra mikro ayrıntı düşer
  if (perf.adaptive && s && recent.length >= 60 && s.fps < 45 && now > perf.adaptFrom) {
    if (dpr > 1) { dpr = Math.max(1, dpr - 0.25); renderer.setPixelRatio(dpr); perf.frames.length = 0; }
    else if (tier === 'high') { tier = 'low'; shared.uMicro.value = 0; perf.frames.length = 0; }
  }
}
// kiosk tanıtımına her girişte kalite yeniden denenir: tek bir geçici yavaşlık fuar boyunca düşük kalite bırakmasın
function restoreQuality() {
  if (dpr === DPR_MAX && tier === TIER0) return;
  dpr = DPR_MAX; renderer.setPixelRatio(dpr);
  tier = TIER0; shared.uMicro.value = tier === 'high' ? 1 : 0;
  perf.frames.length = 0; perf.adaptFrom = performance.now() + 10000;
  state.needsRender = 2;
}
const lastInfo = { calls: 0, tris: 0, maxCalls: 0, maxTris: 0 };
function fillPerfStats(result) {
  const s = result || perfSummary();
  const rows = [
    ['Ortalama FPS', s ? Math.round(s.fps) : '—'],
    ['%1 düşük FPS', s ? Math.round(s.low1) : '—'],
    ['Ortalama kare süresi', s ? s.avgMs.toFixed(2) + ' ms' : '—'],
    ['GPU süresi (ölçülebiliyorsa)', perf.gpuMs.length ? (perf.gpuMs.reduce((a, b) => a + b, 0) / perf.gpuMs.length).toFixed(2) + ' ms' : 'desteklenmiyor'],
    ['Çizim çağrısı / kare', lastInfo.calls + ' (en çok ' + lastInfo.maxCalls + ')'],
    ['Üçgen / kare', lastInfo.tris.toLocaleString('tr-TR') + ' (en çok ' + lastInfo.maxTris.toLocaleString('tr-TR') + ')'],
    ['Kalite kademesi', tier === 'high' ? 'Yüksek' : 'Düşük'],
    ['Piksel oranı', dpr.toFixed(2) + (dpr < DPR_MAX ? ' (uyarlandı)' : '')],
    ['Çözünürlük', `${renderer.domElement.width} × ${renderer.domElement.height}`],
    ['Grafik birimi', GPU_NAME],
  ];
  const dl = $('perfStats'); dl.innerHTML = '';
  for (const [k, v] of rows) { const dt = document.createElement('dt'); dt.textContent = k; const dd = document.createElement('dd'); dd.textContent = v; dl.append(dt, dd); }
}
let bench = null;
function runBenchmark() {
  if (bench) return;
  $('btnBench').disabled = true; $('btnBench').textContent = 'Ölçülüyor…';
  $('perfModal').hidden = true;
  perf.adaptive = false;
  const saved = { explode: state.explode, clip: { ...state.clip }, turn: turn.on };
  bench = { t0: performance.now(), dur: 6000, frames: [], last: 0, saved };
  turn.on = false; controls.autoRotate = true; controls.autoRotateSpeed = 6;
  state.clip.on = true; state.clip.axis = 'x';
  return new Promise((res) => (bench.resolve = res));
}
function stepBenchmark(now) {
  if (!bench) return false;
  const t = (now - bench.t0) / bench.dur;
  if (bench.last) bench.frames.push(now - bench.last);
  bench.last = now;
  state.explodeAnim = null;
  state.explodeTarget = state.explode = 0.5 - 0.5 * Math.cos(t * Math.PI * 2);
  state.clip.pos = 300 * (0.5 - 0.5 * Math.cos(t * Math.PI * 3));
  updateClip();
  if (t >= 1) {
    const s = perfSummary(bench.frames.slice(Math.min(5, Math.floor(bench.frames.length / 4))));
    const b = bench; bench = null;
    controls.autoRotate = false;
    Object.assign(state.clip, b.saved.clip); updateClip();
    state.explodeTarget = state.explode = b.saved.explode;
    setTurntable(b.saved.turn);
    perf.adaptive = true;
    const gpuMs = perf.gpuMs.length ? perf.gpuMs.reduce((a, c) => a + c, 0) / perf.gpuMs.length : null;
    window.__benchResult = { ...s, calls: lastInfo.calls, tris: lastInfo.tris, dpr, width: renderer.domElement.width, height: renderer.domElement.height,
      gpuMs, gpuBoundFps: gpuMs ? Math.min(s ? s.fps : Infinity, 1000 / gpuMs) : null, tier };
    $('btnBench').disabled = false; $('btnBench').textContent = 'Performans testini tekrarla';
    fillPerfStats(s); $('perfModal').hidden = false;
    $('perfNote').textContent = s ? `Son test: ${s.n} kare, ortalama ${s.fps.toFixed(1)} FPS, %1 düşük ${s.low1.toFixed(1)} FPS.`
      : 'Test süresince yeterli kare çizilemedi (cihaz çok yavaş).';
    b.resolve?.(window.__benchResult);
  }
  return true;
}

// ------------------------------------------------------------------ uygulama arayüzü (modüller için)
const modules = {};
const frameHooks = [];
const app = {
  THREE, scene, camera, controls, renderer, model, parts, state, turn, MM, MODEL_OFFSET, KIOSK,
  $, toWorld, setView, viewPose, animateCamera, setExplodeTarget, setClip, updateClip, select, setGhost, refreshVisibility,
  setTurntable, setFinish, setDims, setDrawing, setHotspots, resetAll, focusPart, closePopovers, fitDistance, userActive,
  restoreQuality, markLayout: () => markLayout(),
  modules, onFrame: (fn) => frameHooks.push(fn), requestRender: (n = 2) => { state.needsRender = Math.max(state.needsRender, n); },
  get tier() { return tier; },
};
window.__viewer = { app, runBenchmark, select, setView, parts, state, setExplodeTarget, toggleSolo, toggleVisible, updateClip, setClip,
  renderer, camera, controls, turn, setTurntable, setFinish, setGhost, modules, lastInfo, get tier() { return tier; } };

// ------------------------------------------------------------------ render loop
let lastT = performance.now();
let lastExTxt = '';
const renderLoop = {
  start() { requestAnimationFrame(this.tick); },
  tick: (now) => {
    requestAnimationFrame(renderLoop.tick);
    const dt = Math.min(0.5, (now - lastT) / 1000); lastT = now;
    let active = false;

    processHover();
    if (stepViewOffset(dt)) active = true;
    if (stepCamera(now)) active = true;
    if (stepBenchmark(now)) active = true;
    for (const fn of frameHooks) if (fn(now, dt)) active = true;
    if (modules.hotspots?.animating()) active = true;
    // açılış animasyonu kesildiyse, başka bir kamera hareketiyle değiştiyse ya da süresi dolduysa tanıtım biter
    if (state.intro && (now - introState.t0 > 6000 || (introState.anim && state.camAnim !== introState.anim))) endIntro();

    // patlatma
    if (state.explodeAnim) {
      const a = state.explodeAnim;
      const k = clamp01((now - a.t0) / a.dur);
      state.explode = a.from + (a.to - a.from) * (k < 0.5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2);
      state.explodeTarget = state.explode;
      $('explode').value = Math.round(state.explode * 1000); setRangeFill($('explode'));
      if (k >= 1) state.explodeAnim = null;
      applyExplode(); if (!state.camAnim && !bench) autoFrameStep(); active = true; exFrame.idle = 0;
    } else if (Math.abs(state.explodeTarget - state.explode) > 1e-4) {
      state.explode += (state.explodeTarget - state.explode) * (1 - Math.exp(-dt * 14));
      if (Math.abs(state.explodeTarget - state.explode) < 1e-4) state.explode = state.explodeTarget;
      applyExplode(); if (!state.camAnim && !bench) autoFrameStep(); active = true; exFrame.idle = 0;
    } else {
      if (bench) applyExplode();
      if (exFrame.active && (exFrame.idle += dt) > 0.4) exFrame.active = false;
    }
    const exTxt = Math.round(state.explode * 100) + '%';
    if (exTxt !== lastExTxt) { $('explodeVal').textContent = exTxt; lastExTxt = exTxt; }

    // AO karışımı: patlatma, gizli veya hayalet parça varsa parça-içi AO'ya geç
    const aoT = Math.max(aoMixTarget, clamp01(state.explode * 2.2));
    if (Math.abs(shared.uAoMix.value - aoT) > 1e-3) { shared.uAoMix.value += (aoT - shared.uAoMix.value) * (1 - Math.exp(-dt * 8)); active = true; }
    if (ghostFade < 1) { ghostFade = Math.min(1, ghostFade + dt * 3.3); ghostMat.uniforms.uOpacity.value = 0.16 + 0.5 * (1 - ease(ghostFade)); active = true; }

    // vurgu geçişleri
    parts.forEach((p) => {
      const target = p.def.id === state.selected ? 1 : p.def.id === state.hovered ? 0.55 : 0;
      if (Math.abs(p.hi - target) > 1e-3) { p.hi += (target - p.hi) * (1 - Math.exp(-dt * 16)); active = true; }
      else p.hi = target;
      p.mat.userData.u.uHi.value = p.hi;
    });

    if (planeHelper && planeHelper.visible) {
      planeHelperFade -= dt;
      const o = clamp01(planeHelperFade);
      planeHelper.children[0].material.opacity = 0.07 * o; planeHelper.children[1].material.opacity = 0.8 * o;
      if (planeHelperFade <= 0) planeHelper.visible = false;
      active = true;
    }

    // 360° döner tabla: yumuşak hızlanma / yavaşlama; etkileşimden sonra kısa bekleme
    const wantTurn = turn.on && !bench && !state.camAnim && !state.intro && now > turn.pausedUntil && !pointer.down;
    const kT = wantTurn ? 1 : 0;
    if (Math.abs(turn.k - kT) > 1e-3) { turn.k += (kT - turn.k) * (1 - Math.exp(-dt * (kT ? 1.4 : 3.5))); active = true; }
    else turn.k = kT;
    if (!bench) { controls.autoRotate = turn.k > 0.002; controls.autoRotateSpeed = turn.k * TURN_SPEEDS[turn.speed]; }
    if (controls.autoRotate) active = true;
    if (controls.update(dt)) active = true;
    updateStudioRotation();

    if (!active && state.needsRender <= 0) { updatePerfUI(now, false); return; }
    if (state.needsRender > 0) state.needsRender--;

    if (state.shadowDirty && shadow) { shadow.update(scene, model); state.shadowDirty = false; }
    updateDimLabels();
    modules.hotspots?.update();

    let q = null;
    const gl = renderer.getContext();
    if (perf.gpuExt && perf.gpuQueries.length < 3) { q = gl.createQuery(); gl.beginQuery(perf.gpuExt.TIME_ELAPSED_EXT, q); }
    renderer.render(scene, camera);
    if (q) { gl.endQuery(perf.gpuExt.TIME_ELAPSED_EXT); perf.gpuQueries.push(q); }
    pollGpuQueries(gl);
    lastInfo.calls = renderer.info.render.calls; lastInfo.tris = renderer.info.render.triangles;
    lastInfo.maxCalls = Math.max(lastInfo.maxCalls, lastInfo.calls); lastInfo.maxTris = Math.max(lastInfo.maxTris, lastInfo.tris);
    perfFrame(now);
    updatePerfUI(now, true);
  },
};
function pollGpuQueries(gl) {
  if (!perf.gpuExt) return;
  while (perf.gpuQueries.length) {
    const q = perf.gpuQueries[0];
    if (!gl.getQueryParameter(q, gl.QUERY_RESULT_AVAILABLE)) break;
    const disjoint = gl.getParameter(perf.gpuExt.GPU_DISJOINT_EXT);
    if (!disjoint) { perf.gpuMs.push(gl.getQueryParameter(q, gl.QUERY_RESULT) / 1e6); if (perf.gpuMs.length > 120) perf.gpuMs.shift(); }
    gl.deleteQuery(q); perf.gpuQueries.shift();
  }
}

window.addEventListener('resize', () => {
  markLayout();
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.setViewOffset(window.innerWidth, window.innerHeight, -viewOffset.x, -viewOffset.y, window.innerWidth, window.innerHeight);
  camera.updateProjectionMatrix();
  dpr = DPR_MAX; renderer.setPixelRatio(dpr);
  renderer.setSize(window.innerWidth, window.innerHeight, false);
  state.needsRender = 2;
});
document.addEventListener('visibilitychange', () => { perf.frames.length = 0; });
canvas.addEventListener('webglcontextlost', (e) => {
  e.preventDefault();
  fatal('Grafik bağlamı kaybedildi; görüntüleyici yeniden başlatılıyor…');
  setTimeout(() => reloadPage(KIOSK), 2500);
});

// kiosk: kendiliğinden yeniden yüklemede doğrudan tanıtım döngüsüyle açılır
function reloadPage(attract) {
  if (!attract) { location.reload(); return; }
  const u = new URL(location.href); u.searchParams.set('attract', '1'); location.replace(u.toString());
}
boot().catch((e) => {
  console.error(e);
  $('loaderText').textContent = 'Yükleme hatası: ' + (e && e.message ? e.message : e);
  $('loaderText').style.color = '#ff8a80';
  if (location.protocol === 'file:') $('loaderText').textContent += ' — Bu tarayıcı dosyayı doğrudan açmaya izin vermiyorsa klasördeki "başlat" dosyasını kullanın.';
  if (KIOSK) { $('loaderText').textContent += ' — 20 sn sonra yeniden denenecek.'; setTimeout(() => reloadPage(true), 20000); }
});
