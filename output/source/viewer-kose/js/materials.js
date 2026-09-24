// PBR malzemeler + shader eklemeleri (köşe numunesi)
//  - AO atlası: R = montaj AO, A = parça AO (patlatma/gizleme durumunda karışır)
//  - Kesit kapağı: kırpma düzleminde görünen arka yüzler düz renk + tarama ile boyanır
//  - Vurgu: üzerine gelme / seçim için fresnel kenar parlaması
//  - Mikro yüzey: PVC'de ekstrüzyon kalıp izleri (kol ekseni boyunca), EPDM'de mat gren (yakın planda)
//  - Kaynak dikişi: gönye düzleminde (x = y, nesne uzayı) ince çizgi; çıtada alın birleşimi aralığı
//  - Folyo / renk: ikinci UV'deki folyo maskesi (dış kontur yüzleri) + ahşap desen (kol boyunca damar);
//    dört renk seti: renk perdesinin solu/sağı × dış/iç yüz (iki renkli folyo)
//  - Röntgen merceği (SUP_LENS): ekrandaki dairenin içinde PVC çizilmez
//  - Üretim hikâyesi: gönye yüzü ısınması (uHeat) ve kesit yüzü renk katmanı (uCapTint)
//  - Isı haritası (uThermal): kesit yüzleri ve kolların serbest uç yüzleri 2B sıcaklık dokusuyla boyanır, diğerleri sönük
//  - Tam pencere (SUP_WIN, window.js): numune bölgesi (x, y < 300 mm) atılır, sınırı ince çizgiyle belirtilir; kol ekseni
//    süpürme özniteliğinden (aAxis) gelir; uWinGrow ile köşeden büyüyerek açılır
import * as THREE from '../vendor/three-bundle.min.js';

export const shared = {
  uClip: { value: new THREE.Vector4(1, 0, 0, 1e6) },   // xyz = normal, w = constant (three.js Plane)
  uClipOn: { value: 0 },
  uAoMix: { value: 0 },
  uAoStrength: { value: 1 },
  uMicro: { value: 1 },                                   // mikro yüzey şiddeti (düşük kademede 0)
  uSeam: { value: 1 },                                    // kaynak dikişi görünürlüğü
  // renk setleri [sol dış, sol iç, sağ dış, sağ iç]; x: 0 yok · 1 düz renk · 2 ahşap; y: pürüzlülük; z: vernik çarpanı; w: kabartma
  uFin: { value: [0, 1, 2, 3].map(() => new THREE.Vector4(0, 0.34, 1, 0)) },
  uFinA: { value: [0, 1, 2, 3].map(() => new THREE.Color(1, 1, 1)) },
  uFinB: { value: [0, 1, 2, 3].map(() => new THREE.Color(1, 1, 1)) },
  uSplit: { value: new THREE.Vector2(0, 0) },             // renk perdesi: x = ayırma çizgisi (cihaz pikseli), y = açık
  uLens: { value: new THREE.Vector4(0, 0, 0, 0) },        // röntgen merceği: xy merkez (gl_FragCoord), z yarıçap, w açık
  uHeat: { value: 0 },                                    // kaynak: gönye yüzü ısınması (0..1)
  uCapTint: { value: new THREE.Vector4(1, 0.5, 0.15, 0) }, // kesit yüzüne renk katmanı (rgb, miktar): ekstrüzyon parıltısı
  uThermal: { value: 0 },                                 // ısı haritası geçişi (0..1)
  uWinGrow: { value: 100 },                               // tam pencere: köşeden gösterilen yarıçap (m)
  uTemp: { value: null },                                 // sıcaklık dokusu (R = T / 20 °C), kesit koordinatı (sx, sy) mm
  uTempBox: { value: new THREE.Vector4(0, 0, 1, 1) },     // uv = ((sx, sy) - xy) / zw
  uWood: { value: null },
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

const NOISE = `
float supH(float n){ return fract(sin(n) * 43758.5453123); }
float supVN(float x){ float i = floor(x); float f = fract(x); f = f * f * (3.0 - 2.0 * f); return mix(supH(i), supH(i + 1.0), f); }
float supVN3(vec3 p){
  vec3 i = floor(p); vec3 f = fract(p); f = f * f * (3.0 - 2.0 * f);
  float n = dot(i, vec3(1.0, 57.0, 113.0));
  return mix(mix(mix(supH(n), supH(n + 1.0), f.x), mix(supH(n + 57.0), supH(n + 58.0), f.x), f.y),
             mix(mix(supH(n + 113.0), supH(n + 114.0), f.x), mix(supH(n + 170.0), supH(n + 171.0), f.x), f.y), f.z);
}`;

// Isı haritası renk rampası (t = T / 20 °C: 0 dış, 1 iç) ve eş sıcaklık çizgileri; chambers.js ve açıklama
// (kose.css .tl-bar) aynı durakları kullanır. Çıkış doğrudan ekran rengidir (ton eşleme yok).
export const THERMAL_GLSL = `
vec3 thermalRamp(float t) {
  t = clamp(t, 0.0, 1.0);
  vec3 a = vec3(0.08, 0.05, 0.35), b = vec3(0.1, 0.45, 0.95), c = vec3(0.1, 0.8, 0.75), d = vec3(0.98, 0.85, 0.2), e = vec3(0.95, 0.25, 0.12);
  if (t < 0.25) return mix(a, b, t / 0.25);
  if (t < 0.5) return mix(b, c, (t - 0.25) / 0.25);
  if (t < 0.75) return mix(c, d, (t - 0.5) / 0.25);
  return mix(d, e, (t - 0.75) / 0.25);
}
// 2 °C'de bir ince (koyu), 10 °C'de kalın (beyaz) çizgi; kalınlık ekranda sabit. Süreksiz kenarlarda (fwidth büyük)
// çizgi taşmasın diye türev sınırlanır.
vec3 thermalShade(float t) {
  vec3 col = thermalRamp(t);
  float q = t * 10.0;
  float fq = clamp(fwidth(q), 1e-5, 0.25);
  float thin = 1.0 - smoothstep(0.55, 1.3, abs(fract(q + 0.5) - 0.5) / fq);
  float bold = 1.0 - smoothstep(1.1, 2.1, abs(q - 5.0) / fq);
  col = mix(col, col * 0.45, thin * 0.75);
  return mix(col, vec3(1.0), bold * 0.92);
}`;

function patch(material, key, opts = {}) {
  const cap = CAP[key] || CAP.pvc;
  material.userData.u = {
    uHi: { value: 0 },
    uHiColor: { value: srgb(0x5cc8ff) },
    uCapColor: { value: srgb(cap.c) },
    uCapHatch: { value: srgb(cap.h) },
    uHatch: { value: new THREE.Vector2(cap.s, cap.a) },
    uSeamK: { value: opts.seam || 0 },
    uODeq: { value: new THREE.Vector4(0, 0, 0, 1) },       // GLB nicemleme: nesne uzayı -> metre (xyz öteleme, w ölçek)
    uThK: { value: opts.thermal ? 1 : 0 },                 // ısı haritasında boyanır mı (ısıcam bileşenleri hesapta yok)
  };
  const defs = {};
  if (opts.foil) defs.SUP_FOIL = '';
  if (opts.seam) defs.SUP_SEAM = '';
  if (opts.die) defs.SUP_DIE = '';
  if (opts.grain) defs.SUP_GRAIN = '';
  if (opts.triplanarMap) defs.SUP_TRI = '';
  if (opts.win) defs.SUP_WIN = '';
  material.defines = Object.assign(material.defines || {}, defs);
  material.userData.lensable = !!opts.lens;             // röntgen merceğinde görünmez olan malzemeler (PVC)

  material.onBeforeCompile = (shader) => {
    Object.assign(shader.uniforms, shared, material.userData.u);
    if (opts.triplanarMap) shader.uniforms.uSpangle = { value: opts.triplanarMap };
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', `#include <common>
varying vec3 vWPos; varying vec3 vWNrm; varying vec3 vOPos; varying vec3 vONrm;
uniform vec4 uODeq;
#ifdef SUP_FOIL
#ifndef USE_UV1
attribute vec2 uv1;
#endif
varying float vFoil;
#endif
#ifdef SUP_WIN
attribute float aAxis; varying float vAxis;
#endif`)
      .replace('#include <fog_vertex>', `#include <fog_vertex>
vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;
vWNrm = normalize(mat3(modelMatrix) * objectNormal);
vOPos = transformed * uODeq.w + uODeq.xyz; vONrm = objectNormal;   // numunenin durağan konumu (m)
#ifdef SUP_FOIL
vFoil = uv1.x;
#endif
#ifdef SUP_WIN
vAxis = aAxis;
#endif`);

    let fs = shader.fragmentShader;
    fs = fs.replace('#include <common>', `#include <common>
varying vec3 vWPos; varying vec3 vWNrm; varying vec3 vOPos; varying vec3 vONrm;
#ifdef SUP_FOIL
varying float vFoil;
uniform sampler2D uWood;
#endif
uniform vec4 uClip; uniform float uClipOn; uniform float uAoMix; uniform float uAoStrength;
uniform float uHi; uniform vec3 uHiColor; uniform vec3 uCapColor; uniform vec3 uCapHatch; uniform vec2 uHatch;
uniform float uMicro; uniform float uSeam; uniform float uSeamK;
uniform vec4 uFin[4]; uniform vec3 uFinA[4]; uniform vec3 uFinB[4]; uniform vec2 uSplit;
uniform float uHeat; uniform vec4 uCapTint;
uniform float uThermal; uniform sampler2D uTemp; uniform vec4 uTempBox; uniform float uThK;
${THERMAL_GLSL}
#ifdef SUP_LENS
uniform vec4 uLens;
#endif
#ifdef SUP_WIN
varying float vAxis; uniform float uWinGrow;
#endif
#ifdef SUP_TRI
uniform sampler2D uSpangle;
#endif
${NOISE}
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

    // renk: kol ekseni, kalıp izi, folyo, kaynak dikişi, galvaniz deseni
    fs = fs.replace('#include <color_fragment>', `#include <color_fragment>
      vec3 supN0 = normalize(vONrm);
#ifdef SUP_WIN
      bool supLegX = vAxis < 0.5;                              // pencere: yatay / düşey profil (süpürme özniteliği)
#else
      bool supLegX = vOPos.x >= vOPos.y;                       // alt kol: X, yan kol: Y ekseni
#endif
      vec3 supAx = supLegX ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 1.0, 0.0);
      float supSide = 1.0 - smoothstep(0.35, 0.6, abs(dot(supN0, supAx)));
      float supPx = length(fwidth(vOPos));                     // piksel başına nesne boyu (m)
      float supDie = 0.5; vec3 supT = vec3(0.0); float supAmp = 0.0;
#ifdef SUP_DIE
      supT = cross(supAx, supN0); float supTl = length(supT); supT = supTl > 1e-4 ? supT / supTl : vec3(0.0);
      float supC = dot(vOPos, supT) * 1000.0;                  // mm
      // her bileşen, hücresi ekranda ~2 pikselden küçülmeden söner (döndürürken kıpırtı olmaz)
      float supA1 = 1.0 - smoothstep(0.4, 0.8, supPx * 2300.0);
      float supA2 = 1.0 - smoothstep(0.4, 0.8, supPx * 9100.0);
      supDie = 0.5 + (supVN(supC * 2.3) - 0.5) * 0.65 * supA1 + (supVN(supC * 9.1 + 17.0) - 0.5) * 0.35 * supA2;
      supAmp = supA1 * uMicro * supSide;
#endif
      float supFoil = 0.0; float supGrain = 0.5; float supHeatGlow = 0.0;
      vec4 supF = uFin[0]; vec3 supFA = uFinA[0]; vec3 supFB = uFinB[0];
#ifdef SUP_FOIL
      {
        // renk seti: perdenin sağı/solu ve iç (oda tarafı) / dış yüz; iç: +Z'ye bakan ya da camın iç yarısındaki
        // yan yüzler (sx > 55 mm, cam ortası; görsel ayrım)
        bool supIn = supN0.z > 0.5 || (abs(supN0.z) <= 0.5 && vOPos.z * 1000.0 + 52.25 > 55.0);
        bool supR = uSplit.y > 0.5 && gl_FragCoord.x > uSplit.x;
        if (supR) { supF = supIn ? uFin[3] : uFin[2]; supFA = supIn ? uFinA[3] : uFinA[2]; supFB = supIn ? uFinB[3] : uFinB[2]; }
        else { supF = supIn ? uFin[1] : uFin[0]; supFA = supIn ? uFinA[1] : uFinA[0]; supFB = supIn ? uFinB[1] : uFinB[0]; }
      }
      supFoil = step(0.5, vFoil) * step(0.5, supF.x);
      if (supFoil > 0.5) {
        vec3 fc = supFA;
        if (supF.x > 1.5) {
          float along = supLegX ? vOPos.x : vOPos.y;
          float across = supLegX ? (abs(supN0.y) > abs(supN0.z) ? vOPos.z : vOPos.y)
                                 : (abs(supN0.x) > abs(supN0.z) ? vOPos.z : vOPos.x);
          supGrain = texture2D(uWood, vec2(along * 2.0, across * 8.0)).r;     // 0,5 m × 0,125 m döşeme
          fc = mix(supFB, supFA, supGrain);
        }
        diffuseColor.rgb = fc;
      }
#endif
      float supSeam = 0.0;
#ifdef SUP_SEAM
      {
        float d = abs(vOPos.x - vOPos.y) * 0.70710678;         // gönye düzlemine uzaklık (m)
        float px = fwidth(d);
        float w = max(0.000018, px * 1.25);                    // en az ~1 piksel: çizgi kesintisiz kalır
        supSeam = (1.0 - smoothstep(0.0, w, d)) * uSeam * clamp(5.25e-5 / max(px, 1e-9), 0.35, 1.0);   // uzakta %35'e söner
        diffuseColor.rgb *= 1.0 - supSeam * (uSeamK > 1.5 ? 0.6 : 0.3);
      }
#endif
#ifdef SUP_TRI
      // galvaniz çiçeklenme deseni (üçlü düzlem, dünya uzayı; baskın iki düzlem, tek örnek)
      vec3 tw = abs(vWNrm);
      vec3 sp = vWPos * (1000.0 / 56.0);
      vec2 uvA = tw.x > tw.y ? (tw.x > tw.z ? sp.yz : sp.xy) : (tw.y > tw.z ? sp.xz : sp.xy);
      float spg = texture2D(uSpangle, uvA).r;
      diffuseColor.rgb *= 0.86 + 0.2 * spg;
#endif`)
      .replace('#include <roughnessmap_fragment>', `#include <roughnessmap_fragment>
      roughnessFactor = mix(roughnessFactor, supF.y, supFoil);
#ifdef SUP_DIE
      roughnessFactor *= 1.0 + (supDie - 0.5) * 0.18 * supAmp;
#endif
#ifdef SUP_GRAIN
      roughnessFactor *= 0.9 + 0.2 * supVN3(vOPos * 2600.0) * (1.0 - smoothstep(0.4, 0.8, supPx * 2600.0)) * uMicro;   // 0,38 mm gren
#endif
#ifdef SUP_TRI
      roughnessFactor = clamp(roughnessFactor * (1.35 - 0.7 * spg), 0.12, 1.0);
#endif
      roughnessFactor = clamp(roughnessFactor + supSeam * 0.22, 0.04, 1.0);`)
      .replace('#include <normal_fragment_maps>', `#include <normal_fragment_maps>
#ifdef SUP_DIE
      if (supAmp > 0.001) {
        vec3 tv = (viewMatrix * vec4(supT, 0.0)).xyz;          // nesne ekseni = dünya ekseni (model yalnızca ötelenir)
        normal = normalize(normal + tv * (supDie - 0.5) * 0.06 * supAmp);
      }
#endif
#ifdef SUP_FOIL
      // folyo kabartması: yükseklik = desen × w × 0,1 mm (w 0,5 -> 50 µm); doku 4096 texel/m, texel ~2 pikselden küçülünce söner
      float supBumpK = supF.w * (1.0 - smoothstep(0.4, 0.8, supPx * 4096.0));
      if (supFoil > 0.5 && supBumpK > 0.001) {
        vec2 dHdxy = vec2(dFdx(supGrain), dFdy(supGrain)) * supBumpK * 0.0001;
        vec3 vSigmaX = dFdx(-vViewPosition); vec3 vSigmaY = dFdy(-vViewPosition);
        vec3 vNb = normal;
        vec3 R1 = cross(vSigmaY, vNb); vec3 R2 = cross(vNb, vSigmaX);
        float fDet = dot(vSigmaX, R1) * faceDirection;
        vec3 vGrad = sign(fDet) * (dHdxy.x * R1 + dHdxy.y * R2);
        normal = normalize(abs(fDet) * vNb - vGrad);
      }
#endif`)
      .replace('#include <lights_physical_fragment>', `#include <lights_physical_fragment>
#ifdef USE_CLEARCOAT
      material.clearcoat *= mix(1.0, supF.z, supFoil);
#endif`);

    fs = fs.replace('#include <clipping_planes_fragment>', `#ifdef SUP_LENS
  if ( uLens.w > 0.5 && distance( gl_FragCoord.xy, uLens.xy ) < uLens.z ) discard;
#endif
#ifdef SUP_WIN
  if ( ( vOPos.x < 0.3 && vOPos.y < 0.3 ) || length( vOPos.xy ) > uWinGrow ) discard;   // numune bölgesi / büyüme
#endif
#include <clipping_planes_fragment>`);
    fs = fs.replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
#ifdef SUP_SEAM
      // kaynak: ısıtıcı plakaya değen gönye yüzleri turuncu parlar (nesne uzayında x = y düzlemine uzaklık)
      supHeatGlow = uHeat * (1.0 - smoothstep(0.0, 0.005, abs(vOPos.x - vOPos.y) * 0.70710678));
      totalEmissiveRadiance += vec3(1.0, 0.34, 0.06) * supHeatGlow * 2.2;
#endif`);
    fs = fs.replace('#include <dithering_fragment>', `#include <dithering_fragment>
  // ısı haritası: kesit yüzünde görünen arka yüzün değil, bakış ışınının kesit düzlemini deldiği noktanın kesit
  // koordinatı kullanılır. 2B alan kol ekseni boyunca uzatılır: alt kolda (sx, sy) = (Z + 52,25, Y), yan kolda (…, X).
  // Doku örneği ve türevler yalnızca tekdüze (uniform) dalda alınır.
  float supThOn = 0.0; vec3 supThCol = vec3(0.0);
  if ( uThermal > 0.001 ) {
    vec3 rd = vWPos - cameraPosition;
    float den = dot( uClip.xyz, rd );
    float tt = abs( den ) > 1e-9 ? -( dot( uClip.xyz, cameraPosition ) + uClip.w ) / den : 1.0;
    vec3 po = gl_FrontFacing ? vOPos : vOPos + rd * ( tt - 1.0 );
    vec2 sxy = vec2( po.z * 1000.0 + 52.25, ( po.x >= po.y ? po.y : po.x ) * 1000.0 );
    supThCol = thermalShade( texture2D( uTemp, ( sxy - uTempBox.xy ) / uTempBox.zw ).r );
    bool endFace = ( abs( supN0.x ) > 0.92 && vOPos.x > 0.2985 ) || ( abs( supN0.y ) > 0.92 && vOPos.y > 0.2985 );
    supThOn = uThK > 0.5 && ( gl_FrontFacing ? endFace : uClipOn > 0.5 ) ? 1.0 : 0.0;
  }
  if ( !gl_FrontFacing ) {
    vec3 cc = mix( uCapColor, uCapHatch, capHatch( vWPos ) );
    cc = mix( cc, vec3( 1.0, 0.42, 0.1 ), supHeatGlow );
    cc = mix( cc, uCapTint.rgb, uCapTint.a );
    if ( uThermal > 0.001 ) cc = supThOn > 0.5 ? mix( cc, supThCol, uThermal ) : mix( cc, vec3( dot( cc, vec3( 0.2126, 0.7152, 0.0722 ) ) * 0.3 + 0.02 ), uThermal * 0.85 );
    cc = mix( cc, uHiColor, uHi * 0.35 );
    gl_FragColor = vec4( cc, 1.0 );
  } else if ( uThermal > 0.001 ) {
    vec3 dim = vec3( dot( gl_FragColor.rgb, vec3( 0.2126, 0.7152, 0.0722 ) ) * 0.32 + 0.02 );
    gl_FragColor.rgb = supThOn > 0.5 ? mix( gl_FragColor.rgb, supThCol, uThermal ) : mix( gl_FragColor.rgb, dim, uThermal * 0.85 );
    gl_FragColor.rgb = mix( gl_FragColor.rgb, uHiColor, uHi * 0.3 );
  } else if ( uHi > 0.0 ) {
    vec3 vdir = normalize( vViewPosition );
    float fr = pow( 1.0 - clamp( abs( dot( normalize( normal ), vdir ) ), 0.0, 1.0 ), 2.2 );
    gl_FragColor.rgb = mix( gl_FragColor.rgb, uHiColor, uHi * ( 0.08 + 0.5 * fr ) );
  }
#ifdef SUP_WIN
  {   // numune sınırı: ince turuncu çizgi (ekranda en az ~1,5 piksel)
    float w = max( 0.0015, fwidth( vOPos.x + vOPos.y ) * 1.5 );
    float ln = ( vOPos.y < 0.3 && vOPos.x - 0.3 < w ) || ( vOPos.x < 0.3 && vOPos.y - 0.3 < w ) ? 1.0 : 0.0;
    gl_FragColor.rgb = mix( gl_FragColor.rgb, vec3( 1.0, 0.69, 0.23 ), ln * 0.9 );
  }
#endif`);
    shader.fragmentShader = fs;
  };
  const cacheKey = 'kose-' + key + Object.keys(defs).join('');
  material.customProgramCacheKey = () => cacheKey;
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
      .replace('#include <common>', '#include <common>\nvarying vec3 vWNrmG;\nuniform float uHi; uniform vec3 uHiColor; uniform float uThermal;')
      .replace('#include <dithering_fragment>', `#include <dithering_fragment>
  // Low-E kaplama: eğik bakışta hafif yeşil-mavi yansıma tonu
  float fres = pow( 1.0 - abs( dot( normalize( vNormal ), normalize( vViewPosition ) ) ), 3.0 );
  gl_FragColor.rgb = mix( gl_FragColor.rgb, gl_FragColor.rgb * vec3( 0.86, 1.0, 0.97 ), 0.5 + 0.5 * fres );
  // cam kenarları (kesim yüzleri) yeşilimsi ve daha opak
  float edge = 1.0 - abs( vWNrmG.z );
  gl_FragColor.rgb = mix( gl_FragColor.rgb, vec3( 0.36, 0.55, 0.48 ), edge * 0.75 );
  gl_FragColor.a = mix( gl_FragColor.a, 0.9, edge );
  gl_FragColor.rgb = mix( gl_FragColor.rgb, vec3( dot( gl_FragColor.rgb, vec3( 0.2126, 0.7152, 0.0722 ) ) * 0.35 ), uThermal * 0.85 );   // ısı haritasında sönük
  gl_FragColor.rgb = mix( gl_FragColor.rgb, uHiColor, uHi * 0.35 );
  gl_FragColor.a = max( gl_FragColor.a, uHi * 0.35 );`);
  };
  material.customProgramCacheKey = () => 'kose-glass';
  return material;
}

// tier: 'high' (gerçek GPU: EPDM sheen) | 'low'; extra.win: tam pencere malzemesi (window.js)
export function createMaterial(key, tex, def = {}, tier = 'high', extra = {}) {
  const win = !!extra.win;
  const common = { aoMap: tex.ao, aoMapIntensity: 1.0, side: THREE.DoubleSide };
  let m;
  switch (key) {
    case 'pvc':
    case 'cover':
      m = new THREE.MeshPhysicalMaterial({ ...common, color: 0xf3f3f0, roughness: 0.34, metalness: 0,
        clearcoat: 0.35, clearcoatRoughness: 0.28, specularIntensity: 0.6 });
      return patch(m, key, { foil: !!def.foil, seam: def.seam || 0, die: key === 'pvc', lens: true, thermal: true, win });
    case 'steel':
      m = new THREE.MeshStandardMaterial({ ...common, color: 0xc2c7cc, roughness: 0.36, metalness: 1.0 });
      return patch(m, key, { triplanarMap: tex.spangle, thermal: true });
    case 'epdm':
    case 'tpe':
      if (tier === 'high') {
        m = new THREE.MeshPhysicalMaterial({ ...common, color: key === 'epdm' ? 0x171717 : 0x1b1b1b, roughness: key === 'epdm' ? 0.74 : 0.58,
          metalness: 0, sheen: 0.35, sheenRoughness: 0.7, sheenColor: 0x3a3d42, specularIntensity: 0.5 });
      } else {
        m = new THREE.MeshStandardMaterial({ ...common, color: key === 'epdm' ? 0x171717 : 0x1b1b1b, roughness: key === 'epdm' ? 0.74 : 0.58, metalness: 0 });
      }
      return patch(m, key, { grain: true, thermal: true, win });
    case 'alu':
      m = new THREE.MeshStandardMaterial({ ...common, color: 0xbfc4ca, roughness: 0.42, metalness: 1.0 });
      return patch(m, key, { win });
    case 'desic':
      m = new THREE.MeshStandardMaterial({ ...common, color: 0xd6c296, roughness: 0.95, metalness: 0 });
      return patch(m, key, { grain: true });
    case 'sealant':
      m = new THREE.MeshStandardMaterial({ ...common, color: 0x1f1f1f, roughness: 0.55, metalness: 0 });
      return patch(m, key);
    case 'plastic':
      m = new THREE.MeshStandardMaterial({ ...common, color: 0x4b6f98, roughness: 0.46, metalness: 0 });
      return patch(m, key, { thermal: true });
    case 'screw':
      m = new THREE.MeshStandardMaterial({ ...common, color: 0xd9dde2, roughness: 0.24, metalness: 1.0 });
      return patch(m, key, { thermal: true });
    case 'glass':
      m = new THREE.MeshPhysicalMaterial({ color: 0xeef6f3, roughness: 0.03, metalness: 0, transparent: true, opacity: 0.14,
        side: THREE.DoubleSide, depthWrite: false, specularIntensity: 1.0, ior: 1.52, envMapIntensity: 1.4 });
      m.forceSinglePass = true;
      return patchGlass(m);
    default:
      return patch(new THREE.MeshStandardMaterial({ ...common, color: 0xcccccc }), 'pvc');
  }
}

// Hayalet (x-ray) görünüm: bağlam parçaları için paylaşılan tek malzeme (fresnel kenar parlaması)
export function createGhostMaterial() {
  return new THREE.ShaderMaterial({
    uniforms: { uColor: { value: new THREE.Color(0xa8dcff) }, uOpacity: { value: 0.07 }, uEdge: { value: 0.9 } },
    vertexShader: `varying vec3 vN; varying vec3 vV;
      void main(){ vec4 mv = modelViewMatrix * vec4(position, 1.0); vN = normalize(normalMatrix * normal); vV = -mv.xyz; gl_Position = projectionMatrix * mv; }`,
    fragmentShader: `uniform vec3 uColor; uniform float uOpacity; uniform float uEdge; varying vec3 vN; varying vec3 vV;
      void main(){ float f = pow(1.0 - abs(dot(normalize(vN), normalize(vV))), 2.4);
        gl_FragColor = vec4(uColor * (0.55 + 0.6 * f), clamp(uOpacity + uEdge * f * 0.32, 0.0, 0.85)); }`,
    transparent: true, depthWrite: false, side: THREE.DoubleSide, blending: THREE.NormalBlending, toneMapped: false,
    forceSinglePass: true,                                // saydam + çift yüz: tek geçiş (aksi halde her parça iki kez çizilir)
  });
}

// Renk / folyo seçimi: dış ve iç yüz için FINISHES girdileri; slot 0 = perdenin solu (ya da tek renk), 1 = sağı
export function applyFinish(outer, inner = outer, slot = 0) {
  const set = (i, f) => {
    shared.uFin.value[i].set(f.mode, f.rough, f.coat, f.bump);
    shared.uFinA.value[i].set(f.a);   // onaltılık sRGB -> doğrusal çalışma uzayı (renk yönetimi)
    shared.uFinB.value[i].set(f.b);
  };
  set(slot * 2, outer); set(slot * 2 + 1, inner);
}
// Röntgen merceği: PVC malzemelerinde SUP_LENS define'ı (açıkken discard; kapalıyken erken derinlik testi korunur)
export function setLensDefine(materials, on) {
  for (const m of materials) {
    if (!m.userData.lensable || ('SUP_LENS' in m.defines) === on) continue;
    if (on) m.defines.SUP_LENS = ''; else delete m.defines.SUP_LENS;
    m.needsUpdate = true;
  }
}
