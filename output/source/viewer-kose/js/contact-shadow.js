// Sahne zemini: yumuşak ışık havuzu + temas gölgesi (tek düzlem, tek çizim çağrısı).
// Gölge: modelin alttan derinlik izdüşümü + iki geçişli bulanıklaştırma; yalnızca model hareket ettiğinde
// (patlatma, gizle/göster) yeniden hesaplanır. Işık havuzu: düzlem üzerinde eliptik Gauss yoğunluğu.
import * as THREE from '../vendor/three-bundle.min.js';

const blurFrag = `
uniform sampler2D tDiffuse; uniform vec2 dir; varying vec2 vUv;
void main(){
  vec4 s = vec4(0.0);
  s += texture2D(tDiffuse, vUv - 4.0*dir) * 0.051;
  s += texture2D(tDiffuse, vUv - 3.0*dir) * 0.0918;
  s += texture2D(tDiffuse, vUv - 2.0*dir) * 0.12245;
  s += texture2D(tDiffuse, vUv - 1.0*dir) * 0.1531;
  s += texture2D(tDiffuse, vUv) * 0.1633;
  s += texture2D(tDiffuse, vUv + 1.0*dir) * 0.1531;
  s += texture2D(tDiffuse, vUv + 2.0*dir) * 0.12245;
  s += texture2D(tDiffuse, vUv + 3.0*dir) * 0.0918;
  s += texture2D(tDiffuse, vUv + 4.0*dir) * 0.051;
  gl_FragColor = s;
}`;
const quadVert = `varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`;

const stageVert = `varying vec2 vUv; varying vec3 vW;
void main(){ vUv = uv; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`;
const stageFrag = `
uniform sampler2D tShadow; uniform float uShadowOpacity; uniform vec2 uShadowScale;
uniform vec3 uPoolColor; uniform float uPoolAlpha; uniform vec2 uPoolRadius; uniform vec2 uPoolCenter;
varying vec2 vUv; varying vec3 vW;
void main(){
  vec2 q = (vW.xz - uPoolCenter) / uPoolRadius;
  float pool = exp(-dot(q, q) * 1.7) * uPoolAlpha;
  vec2 su = (vUv - 0.5) * uShadowScale + 0.5;
  float inside = step(0.0, su.x) * step(su.x, 1.0) * step(0.0, su.y) * step(su.y, 1.0);
  float sh = clamp(texture2D(tShadow, su).a * inside * uShadowOpacity, 0.0, 1.0);
  float a = pool * (1.0 - sh) + sh;                       // ışık havuzu üstüne siyah gölge
  vec3 c = uPoolColor * pool * (1.0 - sh) / max(a, 1e-4);
  gl_FragColor = vec4(c, a);
}`;

export class ContactShadow {
  // width/depth: gölge bölgesi (m); stage: sahne düzlemi (m)
  constructor(renderer, { width = 0.62, depth = 0.42, height = 0.16, res = 512, opacity = 0.62, blur = 2.2,
    stage = [1.9, 1.5], pool = { color: 0xdfe6ef, alpha: 0.12, radius: [0.42, 0.3] } } = {}) {
    this.renderer = renderer;
    this.group = new THREE.Group();
    this.rtA = new THREE.WebGLRenderTarget(res, res); this.rtA.texture.generateMipmaps = false;
    this.rtB = new THREE.WebGLRenderTarget(res, res); this.rtB.texture.generateMipmaps = false;
    const planeGeo = new THREE.PlaneGeometry(stage[0], stage[1]).rotateX(-Math.PI / 2);
    this.stageMat = new THREE.ShaderMaterial({
      uniforms: {
        tShadow: { value: this.rtA.texture }, uShadowOpacity: { value: opacity },
        uShadowScale: { value: new THREE.Vector2(stage[0] / width, stage[1] / depth) },
        uPoolColor: { value: new THREE.Color(pool.color) }, uPoolAlpha: { value: pool.alpha },
        uPoolRadius: { value: new THREE.Vector2(...pool.radius) }, uPoolCenter: { value: new THREE.Vector2(0, 0) },
      },
      vertexShader: stageVert, fragmentShader: stageFrag, transparent: true, depthWrite: false, toneMapped: false,
    });
    this.plane = new THREE.Mesh(planeGeo, this.stageMat);
    this.plane.renderOrder = -1;
    this.plane.position.y = 0.0002;
    this.group.add(this.plane);
    this.cam = new THREE.OrthographicCamera(-width / 2, width / 2, depth / 2, -depth / 2, 0, height);
    this.cam.rotation.x = Math.PI / 2; // yukarı bakar
    this.group.add(this.cam);
    this.depthMat = new THREE.MeshDepthMaterial({ side: THREE.DoubleSide });
    this.depthMat.onBeforeCompile = (shader) => {
      shader.uniforms.darkness = { value: 1.6 };
      shader.fragmentShader = 'uniform float darkness;\n' + shader.fragmentShader.replace(
        'gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );',
        'gl_FragColor = vec4( vec3( 0.0 ), pow( 1.0 - fragCoordZ, 1.6 ) * darkness );');
    };
    this.depthMat.depthTest = true; this.depthMat.depthWrite = true;
    this.blurMat = new THREE.ShaderMaterial({ uniforms: { tDiffuse: { value: null }, dir: { value: new THREE.Vector2() } },
      vertexShader: quadVert, fragmentShader: blurFrag, depthTest: false, depthWrite: false });
    this.quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), this.blurMat);
    this.quad.frustumCulled = false;
    this.quadScene = new THREE.Scene(); this.quadScene.add(this.quad);
    this.quadCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    this.res = res; this.blur = blur;
  }
  setPool(alpha) { this.stageMat.uniforms.uPoolAlpha.value = alpha; }
  update(scene, model) {
    const r = this.renderer;
    const prevTarget = r.getRenderTarget();
    const prevClear = r.getClearAlpha(); const prevColor = r.getClearColor(new THREE.Color());
    const prevOverride = scene.overrideMaterial; const prevBg = scene.background;
    const prevClip = r.localClippingEnabled;
    const hidden = [];
    scene.traverse((o) => { if (o.visible && o !== scene && !this._isModel(o, model) && o.type !== 'Group' && o.type !== 'Scene') { hidden.push(o); o.visible = false; } });
    scene.background = null; scene.overrideMaterial = this.depthMat; r.localClippingEnabled = false;
    r.setClearColor(0x000000, 0);
    r.setRenderTarget(this.rtA); r.clear(); r.render(scene, this.cam);
    scene.overrideMaterial = prevOverride; scene.background = prevBg; r.localClippingEnabled = prevClip;
    hidden.forEach((o) => (o.visible = true));
    for (let i = 0; i < 2; i++) {
      const s = this.blur * (i + 1) / this.res;
      this.blurMat.uniforms.tDiffuse.value = this.rtA.texture; this.blurMat.uniforms.dir.value.set(s, 0);
      r.setRenderTarget(this.rtB); r.render(this.quadScene, this.quadCam);
      this.blurMat.uniforms.tDiffuse.value = this.rtB.texture; this.blurMat.uniforms.dir.value.set(0, s);
      r.setRenderTarget(this.rtA); r.render(this.quadScene, this.quadCam);
    }
    r.setRenderTarget(prevTarget); r.setClearColor(prevColor, prevClear);
  }
  _isModel(o, model) {
    let p = o; while (p) { if (p === model) return true; p = p.parent; } return false;
  }
}
