// PBR malzemeler + shader eklemeleri
//  - AO atlası: R = montaj AO, A = parça AO (patlatma/gizleme durumunda karışır)
//  - Kesit kapağı: kırpma düzleminde görünen arka yüzler düz renk + tarama ile boyanır
//  - Vurgu: üzerine gelme / seçim için fresnel kenar parlaması
import * as THREE from '../vendor/three-bundle.min.js';

export const shared = {
  uClip: { value: new THREE.Vector4(1, 0, 0, 1e6) },   // xyz = normal, w = constant (three.js Plane)
  uClipOn: { value: 0 },
  uAoMix: { value: 0 },
  uAoStrength: { value: 1 },
};

const srgb = (hex) => new THREE.Color().setHex(hex, THREE.LinearSRGBColorSpace); // ham sRGB (çıkış sonrası)

// kesit kapağı renkleri (ekranda doğrudan sRGB)
const CAP = {
  pvc:     { c: 0xdfe3e8, h: 0x98a1ab, s: 1.6, a: 1 },
  cover:   { c: 0xdfe3e8, h: 0x98a1ab, s: 1.6, a: 1 },
  steel:   { c: 0x8f969d, h: 0x5d646b, s: 0.9, a: -1 },
  epdm:    { c: 0x2b2b2b, h: 0x454545, s: 0.8, a: 1 },
  tpe:     { c: 0x303030, h: 0x4a4a4a, s: 0.8, a: -1 },
  alu:     { c: 0xa9aeb4, h: 0x7d838a, s: 0.7, a: 1 },
  desic:   { c: 0xcdb98e, h: 0xa8966c, s: 0.5, a: -1 },
  sealant: { c: 0x2a2a2a, h: 0x2a2a2a, s: 1, a: 1 },
  plastic: { c: 0x4f739b, h: 0x3b5a7c, s: 1.1, a: -1 },
  screw:   { c: 0xb9bec3, h: 0x8a9096, s: 0.5, a: 1 },
};

function patch(material, key, opts = {}) {
  const cap = CAP[key] || CAP.pvc;
  material.userData.u = {
    uHi: { value: 0 },
    uHiColor: { value: srgb(0x5cc8ff) },
    uCapColor: { value: srgb(cap.c) },
    uCapHatch: { value: srgb(cap.h) },
    uHatch: { value: new THREE.Vector2(cap.s, cap.a) },
    uTri: { value: opts.triplanar ? 1 : 0 },
  };
  material.onBeforeCompile = (shader) => {
    Object.assign(shader.uniforms, shared, material.userData.u);
    if (opts.triplanarMap) shader.uniforms.uSpangle = { value: opts.triplanarMap };
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vWPos;\nvarying vec3 vWNrm;')
      .replace('#include <fog_vertex>', '#include <fog_vertex>\nvWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;\nvWNrm = normalize(mat3(modelMatrix) * objectNormal);');

    let fs = shader.fragmentShader;
    fs = fs.replace('#include <common>', `#include <common>
varying vec3 vWPos;
varying vec3 vWNrm;
uniform vec4 uClip; uniform float uClipOn; uniform float uAoMix; uniform float uAoStrength;
uniform float uHi; uniform vec3 uHiColor; uniform vec3 uCapColor; uniform vec3 uCapHatch; uniform vec2 uHatch;
${opts.triplanarMap ? 'uniform sampler2D uSpangle;' : ''}
float capHatch(vec3 wp){
  vec3 n = abs(uClip.xyz); vec2 p;
  if (n.x >= n.y && n.x >= n.z) p = wp.zy; else if (n.y >= n.z) p = wp.xz; else p = wp.xy;
  p *= 1000.0;
  // ekrandaki piksel boyutuna göre 2'nin katları halinde aralık (yakınlaştırmada kaymadan sıklaşır)
  float mmPerPx = max(fwidth(p.x), fwidth(p.y));
  float spacing = uHatch.x * exp2(max(0.0, ceil(log2(7.0 * mmPerPx / uHatch.x))));
  float s = (p.x + uHatch.y * p.y) / spacing;
  float w = fwidth(s);
  float d = abs(fract(s) - 0.5);
  return 1.0 - smoothstep(0.055 - w, 0.055 + w, 0.5 - d);
}`);
    // iki kanallı AO + kesite yakın yüzeylerde AO gevşetme
    const aoChunk = THREE.ShaderChunk.aomap_fragment.replace(
      'float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r',
      'vec4 aoTexel = texture2D( aoMap, vAoMapUv );\n\tfloat ambientOcclusion = ( ( mix( aoTexel.r, aoTexel.a, uAoMix ) * 0.86 + 0.14 )'
    ).replace('float ambientOcclusion = (', `float clipRelief = uClipOn > 0.5 ? smoothstep( 0.0, 0.018, abs( dot( vWPos, uClip.xyz ) + uClip.w ) ) : 1.0;
	float ambientOcclusion = mix( 1.0, (`).replace('* aoMapIntensity + 1.0;', '* aoMapIntensity + 1.0, clipRelief * uAoStrength );');
    fs = fs.replace('#include <aomap_fragment>', aoChunk);

    if (opts.triplanarMap) {
      // galvaniz çiçeklenme deseni: pürüzlülük ve renk modülasyonu (üçlü düzlem izdüşümü, dünya uzayı)
      // desen bir kez örneklenir (baskın iki düzlem), renk ve pürüzlülükte birlikte kullanılır
      fs = fs.replace('#include <color_fragment>', `#include <color_fragment>
      vec3 tw = abs(vWNrm);
      vec3 sp = vWPos * (1000.0 / 56.0);
      vec2 uvA = tw.x > tw.y ? (tw.x > tw.z ? sp.yz : sp.xy) : (tw.y > tw.z ? sp.xz : sp.xy);
      float spg = texture2D(uSpangle, uvA).r;
      diffuseColor.rgb *= 0.86 + 0.2 * spg;`)
        .replace('#include <roughnessmap_fragment>', `#include <roughnessmap_fragment>
      roughnessFactor = clamp(roughnessFactor * (1.35 - 0.7 * spg), 0.12, 1.0);`);
    }

    fs = fs.replace('#include <dithering_fragment>', `#include <dithering_fragment>
  if ( !gl_FrontFacing ) {
    vec3 cc = mix( uCapColor, uCapHatch, capHatch( vWPos ) );
    cc = mix( cc, uHiColor, uHi * 0.35 );
    gl_FragColor = vec4( cc, 1.0 );
  } else if ( uHi > 0.0 ) {
    vec3 vdir = normalize( vViewPosition );
    float fr = pow( 1.0 - clamp( abs( dot( normalize( normal ), vdir ) ), 0.0, 1.0 ), 2.2 );
    gl_FragColor.rgb = mix( gl_FragColor.rgb, uHiColor, uHi * ( 0.08 + 0.5 * fr ) );
  }`);
    shader.fragmentShader = fs;
  };
  material.customProgramCacheKey = () => 'sup85-' + key + (opts.triplanarMap ? '-tri' : '');
  return material;
}

function patchGlass(material) {
  material.userData.u = { uHi: { value: 0 }, uHiColor: { value: srgb(0x5cc8ff) } };
  material.onBeforeCompile = (shader) => {
    Object.assign(shader.uniforms, shared, material.userData.u);
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vWNrmG;')
      .replace('#include <fog_vertex>', '#include <fog_vertex>\nvWNrmG = normalize(mat3(modelMatrix) * objectNormal);');
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vWNrmG;\nuniform float uHi; uniform vec3 uHiColor;')
      .replace('#include <dithering_fragment>', `#include <dithering_fragment>
  // cam kenarları (kesim yüzleri) yeşilimsi ve daha opak
  float edge = 1.0 - abs( vWNrmG.z );
  gl_FragColor.rgb = mix( gl_FragColor.rgb, vec3( 0.36, 0.55, 0.48 ), edge * 0.75 );
  gl_FragColor.a = mix( gl_FragColor.a, 0.9, edge );
  gl_FragColor.rgb = mix( gl_FragColor.rgb, uHiColor, uHi * 0.35 );
  gl_FragColor.a = max( gl_FragColor.a, uHi * 0.35 );`);
  };
  material.customProgramCacheKey = () => 'sup85-glass';
  return material;
}

export function createMaterial(key, tex) {
  const common = { aoMap: tex.ao, aoMapIntensity: 1.0, side: THREE.DoubleSide };
  let m;
  switch (key) {
    case 'pvc':
    case 'cover':
      m = new THREE.MeshPhysicalMaterial({ ...common, color: 0xf3f3f0, roughness: 0.34, metalness: 0,
        clearcoat: 0.35, clearcoatRoughness: 0.28, specularIntensity: 0.6 });
      return patch(m, key);
    case 'steel':
      m = new THREE.MeshStandardMaterial({ ...common, color: 0xc2c7cc, roughness: 0.36, metalness: 1.0 });
      return patch(m, key, { triplanarMap: tex.spangle });
    case 'epdm':
      m = new THREE.MeshStandardMaterial({ ...common, color: 0x171717, roughness: 0.74, metalness: 0 });
      return patch(m, key);
    case 'tpe':
      m = new THREE.MeshStandardMaterial({ ...common, color: 0x1b1b1b, roughness: 0.58, metalness: 0 });
      return patch(m, key);
    case 'alu':
      m = new THREE.MeshStandardMaterial({ ...common, color: 0xbfc4ca, roughness: 0.42, metalness: 1.0 });
      return patch(m, key);
    case 'desic':
      m = new THREE.MeshStandardMaterial({ ...common, color: 0xd6c296, roughness: 0.95, metalness: 0 });
      return patch(m, key);
    case 'sealant':
      m = new THREE.MeshStandardMaterial({ ...common, color: 0x1f1f1f, roughness: 0.55, metalness: 0 });
      return patch(m, key);
    case 'plastic':
      m = new THREE.MeshStandardMaterial({ ...common, color: 0x4b6f98, roughness: 0.46, metalness: 0 });
      return patch(m, key);
    case 'screw':
      m = new THREE.MeshStandardMaterial({ ...common, color: 0xd9dde2, roughness: 0.24, metalness: 1.0 });
      return patch(m, key);
    case 'glass':
      m = new THREE.MeshPhysicalMaterial({ color: 0xeef6f3, roughness: 0.03, metalness: 0, transparent: true, opacity: 0.14,
        side: THREE.DoubleSide, depthWrite: false, specularIntensity: 1.0, ior: 1.52, envMapIntensity: 1.4 });
      m.forceSinglePass = true;
      return patchGlass(m);
    default:
      return patch(new THREE.MeshStandardMaterial({ ...common, color: 0xcccccc }), 'pvc');
  }
}
