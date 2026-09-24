// Supremo 85 — etkileşimli 3B kesit numunesi görüntüleyici
// three.js r186 (yerel paket), meshopt geometri, KTX2 dokular, önceden pişirilmiş AO
import * as THREE from '../vendor/three-bundle.min.js';
import { PARTS, GROUPS, MATERIALS, SECTION_PRESETS } from './parts-data.js';
import { createMaterial, shared } from './materials.js';
import { ContactShadow } from './contact-shadow.js';

const { OrbitControls, GLTFLoader, KTX2Loader, MeshoptDecoder, computeBoundsTree, disposeBoundsTree, acceleratedRaycast } = THREE;
THREE.BufferGeometry.prototype.computeBoundsTree = computeBoundsTree;
THREE.BufferGeometry.prototype.disposeBoundsTree = disposeBoundsTree;
THREE.Mesh.prototype.raycast = acceleratedRaycast;

const $ = (id) => document.getElementById(id);
const MM = 0.001;
const ease = (p) => (p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2);
const clamp01 = (x) => Math.min(1, Math.max(0, x));

// ------------------------------------------------------------------ state
const state = {
  selected: null, hovered: null,
  soloSet: null,                     // izole edilen parça id'leri (Set) veya null
  explode: 0, explodeTarget: 0, explodeAnim: null,
  clip: { on: false, axis: 'x', pos: -74, flip: false },
  dims: false, rotate: false,
  needsRender: 2, shadowDirty: true,
  camAnim: null,
};
const parts = new Map();              // id -> { def, mesh, mat, base, hi, visible }
const LENGTH = 300;                   // numune boyu, mm
const BOUNDS_MM = { x: [-150, 150], y: [0, 200], z: [-58.8, 52.3] };

// ------------------------------------------------------------------ renderer
const canvas = $('scene');
const params = new URLSearchParams(location.search);
const AA = params.get('aa') !== '0';
let renderer;
try {
  renderer = new THREE.WebGLRenderer({ canvas, antialias: AA, alpha: true, powerPreference: 'high-performance' });
} catch (e) {
  fatal('Tarayıcınız WebGL 2 desteklemiyor veya grafik hızlandırma kapalı. Lütfen güncel bir Chrome, Edge, Firefox ya da Safari ile açın.');
  throw e;
}
const DPR_MAX = Math.min(window.devicePixelRatio || 1, Number(params.get('dpr')) || 2);
let dpr = DPR_MAX;
renderer.setPixelRatio(dpr);
renderer.setSize(window.innerWidth, window.innerHeight, false);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;
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
controls.minDistance = 0.09;
controls.maxDistance = 5;
controls.screenSpacePanning = true;
controls.autoRotateSpeed = 0.9;
controls.addEventListener('change', () => { state.needsRender = Math.max(state.needsRender, 1); });
controls.addEventListener('start', () => { state.camAnim = null; exFrame.active = false; });

const model = new THREE.Group();
scene.add(model);
const MODEL_CENTER = new THREE.Vector3(0, 0.095, -0.003);

// kesit düzlemi (her zaman atanır; kapalıyken uzağa taşınır -> shader yeniden derlenmez)
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
const EXPECTED = { model: 560560, ao: 1008947, env: 304166, spangle: 195010, basis: 584862 };
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

async function boot() {
  loader.text.textContent = 'Model ve dokular yükleniyor…';
  // basis transcoder boyutu yaklaşık takip
  manager.onProgress = (url) => { if (/basis_transcoder/.test(url)) progress('basis', EXPECTED.basis, EXPECTED.basis); };
  const [gltf, aoTex, envTex, spangleTex] = await Promise.all([
    new Promise((res, rej) => gltfLoader.load('assets/supremo85.glb', res, (e) => progress('model', e.loaded, e.total), rej)),
    loadKTX('assets/ao.ktx2', 'ao'),
    loadKTX('assets/studio.ktx2', 'env'),
    loadKTX('assets/spangle.ktx2', 'spangle'),
  ]);
  progress('basis', EXPECTED.basis, EXPECTED.basis);
  loader.text.textContent = 'Stüdyo aydınlatması hazırlanıyor…';
  await frame();

  // ortam: stüdyo HDRI (KTX2, RGBA16F) -> PMREM
  envTex.mapping = THREE.EquirectangularReflectionMapping;
  envTex.colorSpace = THREE.LinearSRGBColorSpace;
  envTex.minFilter = THREE.LinearFilter; envTex.magFilter = THREE.LinearFilter; envTex.generateMipmaps = false;
  const pmrem = new THREE.PMREMGenerator(renderer);
  const envRT = pmrem.fromEquirectangular(envTex);
  scene.environment = envRT.texture;
  scene.environmentIntensity = 1.0;
  envTex.dispose(); pmrem.dispose();

  aoTex.colorSpace = THREE.NoColorSpace; aoTex.channel = 0; aoTex.flipY = false;
  aoTex.anisotropy = 1;   // düşük frekanslı AO: trilineer yeterli
  spangleTex.colorSpace = THREE.NoColorSpace; spangleTex.wrapS = spangleTex.wrapT = THREE.RepeatWrapping;
  spangleTex.anisotropy = Math.min(2, renderer.capabilities.getMaxAnisotropy());

  loader.text.textContent = 'Parçalar oluşturuluyor…';
  $('progressBar').style.width = '93%'; $('loaderPct').textContent = '93%';
  await frame();
  buildModel(gltf.scene, { ao: aoTex, spangle: spangleTex });
  buildUI();
  setupLights();
  setupShadow();
  setupDims();
  updateViewOffsetTarget(); viewOffset.x = viewOffset.tx; viewOffset.y = viewOffset.ty;
  camera.setViewOffset(window.innerWidth, window.innerHeight, -viewOffset.x, -viewOffset.y, window.innerWidth, window.innerHeight);
  setView('persp', true);

  loader.text.textContent = 'Gölgelendiriciler derleniyor…';
  $('progressBar').style.width = '97%'; $('loaderPct').textContent = '97%';
  await frame();
  // kesit açık/kapalı iki shader varyantını da önceden derle (geçişte takılma olmasın)
  for (const on of [true, false]) {
    attachClipping(on);
    try { await renderer.compileAsync(scene, camera); } catch (e) { renderer.compile(scene, camera); }
  }
  attachClipping(state.clip.on);
  $('progressBar').style.width = '100%'; $('loaderPct').textContent = '100%';
  loader.text.textContent = 'Hazır';
  state.needsRender = 3;
  renderLoop.start();
  await new Promise((r) => setTimeout(r, 250));
  $('loader').classList.add('done');
  introAnimation();
}
const frame = () => new Promise((r) => requestAnimationFrame(() => r()));

// ------------------------------------------------------------------ model
function buildModel(root, tex) {
  const byName = new Map();
  root.traverse((o) => { if (o.isMesh) byName.set(o.name, o); });
  for (const def of PARTS) {
    const mesh = byName.get(def.id);
    if (!mesh) { console.warn('Eksik parça:', def.id); continue; }
    const mat = createMaterial(def.mat, tex);
    mat.clippingPlanes = null;   // kesit kapalıyken 'discard' içermeyen varyant (erken derinlik testi korunur)
    mesh.material = mat;
    mesh.userData.partId = def.id;
    mesh.matrixAutoUpdate = true;
    mesh.geometry.computeBoundsTree();
    if (!mesh.geometry.attributes.normal) mesh.geometry.computeVertexNormals();
    if (def.mat === 'glass') mesh.renderOrder = 2;
    model.add(mesh);
    parts.set(def.id, { def, mesh, mat, base: mesh.position.clone(), hi: 0, visible: true });
  }
  $('partsCount').textContent = `${parts.size} parça · ${formatTris(countTris())} üçgen`;
}
function countTris() {
  let n = 0;
  parts.forEach((p) => { const g = p.mesh.geometry; n += (g.index ? g.index.count : g.attributes.position.count) / 3; });
  return n;
}
const formatTris = (n) => (n >= 1000 ? (n / 1000).toFixed(1).replace('.', ',') + 'K' : String(n));

function setupLights() {
  // ortam HDRI'ya ek olarak yalnızca parlama için gölgesiz tek yönlü ışık
  const key = new THREE.DirectionalLight(0xfff6ec, 0.55);
  key.position.set(-0.55, 0.75, 0.6);
  scene.add(key);
}

// ------------------------------------------------------------------ contact shadow
let shadow;
function setupShadow() {
  shadow = new ContactShadow(renderer, { width: 0.64, depth: 0.42, height: 0.18, res: 512, opacity: 0.7, blur: 2.4 });
  shadow.group.position.set(0, 0, -0.003);
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
// patlatma sırasında kadrajı koru: kullanıcının yakınlaştırma oranı ve hedef kayması sabit tutulur
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

function setExplodeTarget(v, animate) {
  v = clamp01(v);
  if (animate) {
    state.explodeAnim = { from: state.explode, to: v, t0: performance.now(), dur: 900 + 1500 * Math.abs(v - state.explode) };
  } else {
    state.explodeAnim = null;
    state.explodeTarget = v;
  }
  state.needsRender = Math.max(state.needsRender, 1);
}

// ------------------------------------------------------------------ visibility / selection
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
  const anyHidden = [...parts.values()].some((p) => !isShown(p));
  aoMixTarget = anyHidden ? 1 : 0;
  if (state.selected) updateInfoButtons();
  state.shadowDirty = true;
  state.needsRender = 2;
}
let aoMixTarget = 0;

function select(id, { focus = false } = {}) {
  if (state.selected === id && !focus) return;
  state.selected = id;
  document.querySelectorAll('.part-row').forEach((r) => r.classList.toggle('selected', r.dataset.id === id));
  const panel = $('infoPanel');
  if (!id) { panel.hidden = true; state.needsRender = 2; return; }
  const p = parts.get(id); const def = p.def;
  $('infoGroup').textContent = GROUPS.find((g) => g.id === def.group).label;
  $('infoName').textContent = def.name;
  $('infoSwatch').style.background = MATERIALS[def.mat].swatch;
  $('infoMat').textContent = MATERIALS[def.mat].label;
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
  const meshes = []; parts.forEach((p) => { if (p.mesh.visible) meshes.push(p.mesh); });
  const hits = raycaster.intersectObjects(meshes, false).filter((h) => !state.clip.on || clipPlane.distanceToPoint(h.point) >= -1e-5);
  if (!hits.length) return null;
  const first = hits[0];
  if (parts.get(first.object.userData.partId).def.mat === 'glass') {
    const solid = hits.find((h) => parts.get(h.object.userData.partId).def.mat !== 'glass' && h.distance - first.distance < 0.12);
    if (solid) return solid.object.userData.partId;
  }
  return first.object.userData.partId;
}
let pointer = { x: 0, y: 0, down: null, moved: false, pending: false };
canvas.addEventListener('pointermove', (e) => {
  pointer.x = e.clientX; pointer.y = e.clientY;
  if (pointer.down && Math.hypot(e.clientX - pointer.down.x, e.clientY - pointer.down.y) > 4) pointer.moved = true;
  if (e.pointerType === 'mouse') pointer.pending = true;
});
canvas.addEventListener('pointerleave', () => setHover(null));
canvas.addEventListener('pointerdown', (e) => { pointer.down = { x: e.clientX, y: e.clientY }; pointer.moved = false; $('viewsPop').hidden = true; $('btnViews').setAttribute('aria-pressed', 'false'); });
canvas.addEventListener('pointerup', (e) => {
  if (pointer.down && !pointer.moved && e.button === 0) {
    const id = pick(e.clientX, e.clientY);
    select(id);
  }
  pointer.down = null;
});
canvas.addEventListener('dblclick', (e) => {
  const id = pick(e.clientX, e.clientY);
  if (id) select(id, { focus: true }); else setView('persp');
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
const AXES = { x: new THREE.Vector3(1, 0, 0), y: new THREE.Vector3(0, -1, 0), z: new THREE.Vector3(0, 0, -1) };
let planeHelper, planeHelperFade = 0;
let clipAttached = false;
function attachClipping(on) {
  if (clipAttached === on) return;
  clipAttached = on;
  parts.forEach((p) => { p.mat.clippingPlanes = on ? clipPlanes : null; });
}
function updateClip() {
  const c = state.clip;
  attachClipping(c.on);
  if (!c.on) {
    clipPlane.set(AXES.x, 1e6);
    shared.uClipOn.value = 0;
  } else {
    const n = AXES[c.axis].clone().multiplyScalar(c.flip ? -1 : 1);
    const p = new THREE.Vector3(); p[c.axis] = c.pos * MM;
    clipPlane.setFromNormalAndCoplanarPoint(n, p);
    shared.uClipOn.value = 1;
  }
  shared.uClip.value.set(clipPlane.normal.x, clipPlane.normal.y, clipPlane.normal.z, clipPlane.constant);
  const r = BOUNDS_MM[c.axis];
  $('clipVal').textContent = `${c.axis === 'x' ? 'X' : c.axis === 'y' ? 'Y' : 'Z'} = ${Math.round(c.pos)} mm`;
  $('clipPos').value = Math.round(((c.pos - r[0]) / (r[1] - r[0])) * 1000);
  setRangeFill($('clipPos'));
  // düzlem göstergesi
  if (!planeHelper) {
    const g = new THREE.PlaneGeometry(1, 1);
    planeHelper = new THREE.Group();
    const fill = new THREE.Mesh(g, new THREE.MeshBasicMaterial({ color: 0x5cc8ff, transparent: true, opacity: 0.07, side: THREE.DoubleSide, depthWrite: false, toneMapped: false }));
    const edge = new THREE.LineSegments(new THREE.EdgesGeometry(g), new THREE.LineBasicMaterial({ color: 0x5cc8ff, transparent: true, opacity: 0.8, toneMapped: false }));
    planeHelper.add(fill, edge); planeHelper.renderOrder = 5;
    scene.add(planeHelper);
  }
  if (c.on) {
    const B = BOUNDS_MM, pad = 14;
    const w = { x: [B.z[1] - B.z[0] + pad, B.y[1] + pad], y: [B.x[1] - B.x[0] + pad, B.z[1] - B.z[0] + pad], z: [B.x[1] - B.x[0] + pad, B.y[1] + pad] }[c.axis];
    planeHelper.scale.set(w[0] * MM, w[1] * MM, 1);
    planeHelper.position.set(0, 0.1, (B.z[0] + B.z[1]) / 2 * MM);
    planeHelper.position[c.axis] = c.pos * MM;
    planeHelper.rotation.set(0, 0, 0);
    if (c.axis === 'x') planeHelper.rotation.y = Math.PI / 2;
    if (c.axis === 'y') planeHelper.rotation.x = -Math.PI / 2;
    planeHelperFade = 1.6;
  }
  planeHelper.visible = c.on && planeHelperFade > 0;
  state.needsRender = 2;
}
function setRangeFill(el) { el.style.setProperty('--fill', (el.value / el.max) * 100 + '%'); }

// ------------------------------------------------------------------ dimension overlay (döküman ölçüleri)
let dimGroup; const dimLabels = [];
function setupDims() {
  dimGroup = new THREE.Group(); dimGroup.visible = false; scene.add(dimGroup);
  const X = -0.1508;
  const P = (sx, sy) => new THREE.Vector3(X, sy * MM, (sx - 52.25) * MM);
  const mat = new THREE.LineBasicMaterial({ color: 0x7fd66a, transparent: true, opacity: 0.95, toneMapped: false, depthTest: true });
  const pts = [];
  const tick = 1.6;
  function hdim(x0, x1, y, yRef0, yRef1, label) {        // yatay ölçü
    pts.push(P(x0, y), P(x1, y));
    pts.push(P(x0, yRef0), P(x0, y + tick), P(x1, yRef1), P(x1, y + tick));
    pts.push(P(x0 - 1, y - 1), P(x0 + 1, y + 1), P(x1 - 1, y - 1), P(x1 + 1, y + 1));
    addLabel(P((x0 + x1) / 2, y), label);
  }
  function vdim(x, y0, y1, xRef0, xRef1, label) {        // dikey ölçü
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
  hdim(39, 71, 206, 200, 200, '32');
  vdim(-14, 0, 124, 0, 19.5, '124');
  vdim(-6, 0, 74, 0, 0, '74');
  vdim(114, 40, 124, 104.5, 104.5, '84');
  vdim(114, 0, 40, 85, 104.5, '40');
  vdim(124, 0, 124, 104.5, 104.5, '124');
  const g = new THREE.BufferGeometry().setFromPoints(pts);
  dimGroup.add(new THREE.LineSegments(g, mat));
  // cam kalınlıkları
  for (const [x0, x1] of [[39, 43], [53, 57], [67, 71]]) addLabel(P((x0 + x1) / 2, 214), '4');
  dimLabels.forEach((d) => (d.el.style.opacity = 0));
}
const projV = new THREE.Vector3();
function updateDimLabels() {
  const show = state.dims && state.explode < 0.02;
  dimGroup.visible = show;
  const w = canvas.clientWidth, h = canvas.clientHeight;
  const camDir = new THREE.Vector3(); camera.getWorldDirection(camDir);
  const facing = camDir.x > 0.15;  // uç yüzü (-X) görülebiliyor mu
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
// r: görünümde sığdırılacak yarıçap (m)
const VIEWS = {
  persp:    { dir: [-1.18, 0.58, 0.9], r: 0.138, target: [0.004, 0.092, 0] },
  end:      { dir: [-1, 0.06, 0.03], r: 0.104, target: [-0.15, 0.1, 0.0], fov: 12 },
  dims:     { dir: [-1, 0.04, 0.02], r: 0.132, target: [-0.15, 0.1, 0.0], fov: 12 },
  interior: { dir: [0.08, 0.18, 1], r: 0.165, target: [0, 0.094, 0] },
  exterior: { dir: [-0.12, 0.2, -1], r: 0.165, target: [0, 0.094, 0] },
  top:      { dir: [0.001, 1, 0.12], r: 0.158, target: [0, 0.09, 0] },
  bottom:   { dir: [-0.25, -0.9, 0.45], r: 0.16, target: [0, 0.07, 0] },
};
// arayüz panelleri dışında kalan serbest ekran alanı
function freeArea() {
  const W = window.innerWidth, H = window.innerHeight;
  const narrow = W < 820;
  const left = !narrow && !$('partsPanel').classList.contains('collapsed') ? 332 : 0;
  const right = !narrow && (!$('infoPanel').hidden || !$('sectionPop').hidden) ? 380 : 0;
  const top = narrow ? 70 : 84, bottom = narrow ? 170 : 100;
  return { x0: left, x1: W - right, y0: top, y1: H - bottom, W, H };
}
function fitDistance(r, fovDeg = camera.fov) {
  const f = freeArea();
  const vfov = THREE.MathUtils.degToRad(fovDeg);
  const th = Math.tan(vfov / 2);
  const vf = 2 * Math.atan(th * (f.y1 - f.y0) / f.H);
  const hf = 2 * Math.atan(th * camera.aspect * (f.x1 - f.x0) / f.W);
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
function setView(name, instant = false) {
  const v = VIEWS[name];
  const fov = v.fov || BASE_FOV;
  const target = new THREE.Vector3(...v.target);
  const portrait = camera.aspect < 1 ? 1.2 : 1;   // dikey ekranlarda yatay taşmayı önle
  const pos = new THREE.Vector3(...v.dir).normalize().multiplyScalar(fitDistance(v.r * portrait * (1 + 0.7 * state.explode), fov)).add(target);
  animateCamera(pos, target, instant ? 0 : 950, fov);
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
  // küresel ara değerleme: hedef çevresinde yay çizerek geçiş
  const tgt = a.t0.clone().lerp(a.t1, k);
  const d0 = a.p0.clone().sub(a.t0), d1 = a.p1.clone().sub(a.t1);
  const r = THREE.MathUtils.lerp(d0.length(), d1.length(), k);
  const dir = d0.normalize().lerp(d1.normalize(), k);
  if (dir.lengthSq() < 1e-6) dir.set(0, 1, 0);
  camera.position.copy(tgt).add(dir.normalize().multiplyScalar(r));
  controls.target.copy(tgt);
  controls.update();
  if (k >= 1) state.camAnim = null;
  return true;
}
function focusPart(id) {
  const p = parts.get(id);
  const box = new THREE.Box3().setFromObject(p.mesh);
  const sphere = box.getBoundingSphere(new THREE.Sphere());
  const dir = camera.position.clone().sub(controls.target).normalize();
  const dist = Math.max(0.1, fitDistance(sphere.radius * 1.15));
  animateCamera(sphere.center.clone().add(dir.multiplyScalar(dist)), sphere.center.clone(), 850);
}
function introAnimation() {
  const v = VIEWS.persp;
  const target = new THREE.Vector3(...v.target);
  setFov(BASE_FOV);
  const d = fitDistance(v.r * (camera.aspect < 1 ? 1.2 : 1));
  const endPos = new THREE.Vector3(...v.dir).normalize().multiplyScalar(d).add(target);
  const startPos = new THREE.Vector3(-0.35, 0.28, 1.05).normalize().multiplyScalar(d * 1.35).add(target);
  camera.position.copy(startPos); controls.target.copy(target); controls.update();
  animateCamera(endPos, target, 1900);
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
  if (window.innerWidth < 820) { $('partsPanel').classList.add('collapsed'); $('btnPartsOpen').hidden = false; }

  $('btnInfoClose').onclick = () => select(null);
  $('btnFocus').onclick = () => state.selected && focusPart(state.selected);
  $('btnSolo').onclick = () => state.selected && toggleSolo(state.selected);
  $('btnHide').onclick = () => state.selected && toggleVisible(state.selected);

  // patlatma
  const ex = $('explode');
  ex.addEventListener('input', () => { setExplodeTarget(ex.value / 1000, false); setRangeFill(ex); });
  $('btnExplodePlay').onclick = () => setExplodeTarget(state.explodeTarget > 0.5 || state.explode > 0.5 ? 0 : 1, true);

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
  document.querySelectorAll('.seg-btn').forEach((b) => (b.onclick = () => {
    document.querySelectorAll('.seg-btn').forEach((x) => { x.classList.toggle('active', x === b); x.setAttribute('aria-checked', String(x === b)); });
    const axis = b.dataset.axis; state.clip.axis = axis; state.clip.flip = false;
    state.clip.pos = axis === 'x' ? -74 : axis === 'y' ? 60 : -8;
    updateClip();
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
    b.onclick = () => {
      state.clip.axis = pr.axis; state.clip.pos = pr.pos; state.clip.flip = false;
      document.querySelectorAll('.seg-btn').forEach((x) => x.classList.toggle('active', x.dataset.axis === pr.axis));
      updateClip();
      if (pr.axis === 'x') setView('end');
    };
    pres.append(b);
  }

  // ölçüler, görünümler, döndür, sıfırla
  $('btnDims').onclick = () => {
    state.dims = !state.dims; $('btnDims').setAttribute('aria-pressed', String(state.dims));
    if (state.dims) { setExplodeTarget(0, true); setView('dims'); }
    state.needsRender = 2;
  };
  $('btnViews').onclick = () => { const pop = $('viewsPop'); const o = pop.hidden; closePopovers(); pop.hidden = !o; $('btnViews').setAttribute('aria-pressed', String(o)); };
  document.querySelectorAll('[data-view]').forEach((b) => (b.onclick = () => { setView(b.dataset.view); closePopovers(); }));
  $('btnRotate').onclick = () => { state.rotate = !state.rotate; controls.autoRotate = state.rotate; $('btnRotate').setAttribute('aria-pressed', String(state.rotate)); };
  $('btnReset').onclick = resetAll;

  // üst sağ
  $('btnHelp').onclick = () => ($('helpModal').hidden = false);
  $('btnFull').onclick = () => { if (!document.fullscreenElement) document.documentElement.requestFullscreen?.(); else document.exitFullscreen?.(); };
  $('perfChip').onclick = () => { fillPerfStats(); $('perfModal').hidden = false; };
  $('btnBench').onclick = runBenchmark;
  document.querySelectorAll('.modal').forEach((m) => m.addEventListener('click', (e) => { if (e.target === m || e.target.closest('[data-close]')) m.hidden = true; }));

  window.addEventListener('keydown', onKey);
  updateClip();
  setRangeFill(ex);
}
function closePopovers() {
  $('sectionPop').hidden = true; $('viewsPop').hidden = true;
  document.body.classList.remove('sec-open');
  $('btnViews').setAttribute('aria-pressed', 'false');
}
function resetAll() {
  parts.forEach((p) => (p.visible = true)); state.soloSet = null; refreshVisibility();
  select(null);
  state.clip.on = false; updateClip(); $('btnSection').setAttribute('aria-pressed', 'false');
  setExplodeTarget(0, true); $('explode').value = 0; setRangeFill($('explode'));
  closePopovers();
  setView('persp');
}
function onKey(e) {
  if (e.target.tagName === 'INPUT' && e.key !== 'Escape') return;
  const k = e.key.toLowerCase();
  if (k === 'escape') {
    if (!$('helpModal').hidden || !$('perfModal').hidden) { $('helpModal').hidden = true; $('perfModal').hidden = true; return; }
    closePopovers();
    if (state.selected) select(null); else if (state.soloSet) { state.soloSet = null; refreshVisibility(); }
  } else if (k === 'h' && state.selected) toggleVisible(state.selected);
  else if (k === 'i' && state.selected) toggleSolo(state.selected);
  else if (k === 'f' && state.selected) focusPart(state.selected);
  else if (k === 'e') $('btnExplodePlay').click();
  else if (k === 'c') $('btnSection').click();
  else if (k === 'd') $('btnDims').click();
  else if (k === 'r') resetAll();
  else if (k === '?') $('helpModal').hidden = false;
}

// ------------------------------------------------------------------ performance
const perf = { frames: [], lastRender: 0, gpuExt: null, gpuQueries: [], gpuMs: [], adaptive: true };
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
  // GPU zamanlayıcısı varsa, gerçek GPU süresi kare hızını sınırlar (yazılımsal GL'de yanıltıcı değerleri önler)
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
  // uyarlanabilir çözünürlük: süreklilikte < 45 FPS ise piksel oranını düşür
  if (perf.adaptive && s && recent.length >= 60 && s.fps < 45 && dpr > 1) {
    dpr = Math.max(1, dpr - 0.25); renderer.setPixelRatio(dpr); perf.frames.length = 0;
  }
}
const lastInfo = { calls: 0, tris: 0 };
function fillPerfStats(result) {
  const s = result || perfSummary();
  const gl = renderer.getContext();
  const dbg = gl.getExtension('WEBGL_debug_renderer_info');
  const gpu = dbg ? gl.getParameter(dbg.UNMASKED_RENDERER_WEBGL) : gl.getParameter(gl.RENDERER);
  const rows = [
    ['Ortalama FPS', s ? Math.round(s.fps) : '—'],
    ['%1 düşük FPS', s ? Math.round(s.low1) : '—'],
    ['Ortalama kare süresi', s ? s.avgMs.toFixed(2) + ' ms' : '—'],
    ['GPU süresi (ölçülebiliyorsa)', perf.gpuMs.length ? (perf.gpuMs.reduce((a, b) => a + b, 0) / perf.gpuMs.length).toFixed(2) + ' ms' : 'desteklenmiyor'],
    ['Çizim çağrısı / kare', lastInfo.calls],
    ['Üçgen / kare', lastInfo.tris.toLocaleString('tr-TR')],
    ['Piksel oranı', dpr.toFixed(2) + (dpr < DPR_MAX ? ' (uyarlandı)' : '')],
    ['Çözünürlük', `${renderer.domElement.width} × ${renderer.domElement.height}`],
    ['Grafik birimi', gpu],
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
  const saved = { explode: state.explode, clip: { ...state.clip }, rotate: controls.autoRotate };
  bench = { t0: performance.now(), dur: 6000, frames: [], last: 0, saved };
  controls.autoRotate = true; controls.autoRotateSpeed = 6;
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
  state.clip.pos = -150 + 300 * (0.5 - 0.5 * Math.cos(t * Math.PI * 3));
  updateClip();
  if (t >= 1) {
    const s = perfSummary(bench.frames.slice(Math.min(5, Math.floor(bench.frames.length / 4))));
    const b = bench; bench = null;
    controls.autoRotate = b.saved.rotate; controls.autoRotateSpeed = 0.9;
    Object.assign(state.clip, b.saved.clip); updateClip();
    state.explodeTarget = state.explode = b.saved.explode;
    perf.adaptive = true;
    const gpuMs = perf.gpuMs.length ? perf.gpuMs.reduce((a, c) => a + c, 0) / perf.gpuMs.length : null;
    window.__benchResult = { ...s, calls: lastInfo.calls, tris: lastInfo.tris, dpr, width: renderer.domElement.width, height: renderer.domElement.height,
      gpuMs, gpuBoundFps: gpuMs ? Math.min(s ? s.fps : Infinity, 1000 / gpuMs) : null };
    $('btnBench').disabled = false; $('btnBench').textContent = 'Performans testini tekrarla';
    fillPerfStats(s); $('perfModal').hidden = false;
    $('perfNote').textContent = s ? `Son test: ${s.n} kare, ortalama ${s.fps.toFixed(1)} FPS, %1 düşük ${s.low1.toFixed(1)} FPS.`
      : 'Test süresince yeterli kare çizilemedi (cihaz çok yavaş).';
    b.resolve?.(window.__benchResult);
  }
  return true;
}
window.__viewer = { runBenchmark, select, setView, parts, state, setExplodeTarget, toggleSolo, toggleVisible, updateClip, renderer, camera };

// ------------------------------------------------------------------ render loop
let lastT = performance.now();
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
    $('explodeVal').textContent = Math.round(state.explode * 100) + '%';

    // AO karışımı: patlatma veya gizli parça varsa parça-içi AO'ya geç
    const aoT = Math.max(aoMixTarget, clamp01(state.explode * 2.2));
    if (Math.abs(shared.uAoMix.value - aoT) > 1e-3) { shared.uAoMix.value += (aoT - shared.uAoMix.value) * (1 - Math.exp(-dt * 8)); active = true; }

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

    if (controls.autoRotate) active = true;
    if (controls.update()) active = true;

    if (!active && state.needsRender <= 0) { updatePerfUI(now, false); return; }
    if (state.needsRender > 0) state.needsRender--;

    if (state.shadowDirty && shadow) { shadow.update(scene, model); state.shadowDirty = false; }
    updateDimLabels();

    let q = null;
    const gl = renderer.getContext();
    if (perf.gpuExt && perf.gpuQueries.length < 3) { q = gl.createQuery(); gl.beginQuery(perf.gpuExt.TIME_ELAPSED_EXT, q); }
    renderer.render(scene, camera);
    if (q) { gl.endQuery(perf.gpuExt.TIME_ELAPSED_EXT); perf.gpuQueries.push(q); }
    pollGpuQueries(gl);
    lastInfo.calls = renderer.info.render.calls; lastInfo.tris = renderer.info.render.triangles;
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
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.setViewOffset(window.innerWidth, window.innerHeight, -viewOffset.x, -viewOffset.y, window.innerWidth, window.innerHeight);
  camera.updateProjectionMatrix();
  dpr = DPR_MAX; renderer.setPixelRatio(dpr);
  renderer.setSize(window.innerWidth, window.innerHeight, false);
  state.needsRender = 2;
});
document.addEventListener('visibilitychange', () => { perf.frames.length = 0; });

boot().catch((e) => {
  console.error(e);
  $('loaderText').textContent = 'Yükleme hatası: ' + (e && e.message ? e.message : e);
  $('loaderText').style.color = '#ff8a80';
  if (location.protocol === 'file:') $('loaderText').textContent = 'Lütfen klasördeki "başlat" dosyasıyla açın (dosya doğrudan açıldığında tarayıcı yerel dosyaları engeller).';
});
