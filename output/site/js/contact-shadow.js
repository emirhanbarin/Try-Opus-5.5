// Yumuşak temas gölgesi: modelin alttan derinlik izdüşümü + iki geçişli bulanıklaştırma.
// Yalnızca model hareket ettiğinde (patlatma, gizle/göster) yeniden hesaplanır.
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

export class ContactShadow {
  constructor(renderer, { width = 0.62, depth = 0.42, height = 0.16, res = 512, opacity = 0.62, blur = 2.2 } = {}) {
    this.renderer = renderer;
    this.group = new THREE.Group();
    this.rtA = new THREE.WebGLRenderTarget(res, res); this.rtA.texture.generateMipmaps = false;
    this.rtB = new THREE.WebGLRenderTarget(res, res); this.rtB.texture.generateMipmaps = false;
    const planeGeo = new THREE.PlaneGeometry(width, depth).rotateX(-Math.PI / 2);
    this.plane = new THREE.Mesh(planeGeo, new THREE.MeshBasicMaterial({
      map: this.rtA.texture, transparent: true, opacity, depthWrite: false, toneMapped: false }));
    this.plane.renderOrder = -1;
    this.plane.position.y = 0.0002;
    this.plane.material.map.flipY = false;
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
