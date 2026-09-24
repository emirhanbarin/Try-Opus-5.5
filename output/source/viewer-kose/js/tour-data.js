// Keşif turu bölümleri. Metinlerdeki her sayı dökümandan (sayfa numarasıyla); görsel seçimler belirtilir.
// view: main.js görünüm adı ya da { dir, r, target, fov } nesnesi (dünya ekseni, m)
const PROFILES = ['kasa_profili', 'kanat_profili', 'cam_citasi', 'kasa_drenaj_kanallari', 'kanat_drenaj_kanallari'];
const GASKETS = ['kasa_dis_contasi', 'orta_conta', 'kanat_ic_contasi', 'kanat_dis_cam_contasi', 'cam_citasi_contasi'];
const GLASS = ['cam_1', 'cam_2', 'cam_3', 'isicam_citasi', 'nem_alici', 'ikincil_sizdirmazlik', 'cam_takoz_koprusu'];
const STEEL = ['kasa_celik_takviye_alt', 'kasa_celik_takviye_yan', 'kanat_celik_takviye_alt', 'kanat_celik_takviye_yan',
  'kasa_vidasi_alt', 'kasa_vidasi_yan', 'kanat_vidasi_alt', 'kanat_vidasi_yan'];

export const TOUR = [
  { id: 'genel', title: 'Supremo 85 · 45° kaynaklı köşe',
    text: 'Kasa, kanat ve 32 mm üçlü ısıcamdan oluşan 85 mm derinliğinde uPVC pencere sisteminin gerçek ölçülü köşe numunesi. Kesitler teknik dökümanın 9. sayfasından birebir alınmıştır. Profil ısı geçirgenliği Uf = 1,0 W/(m²K) (ift Rosenheim, EN 12412-2).',
    view: 'hero', turn: true, dur: 10000 },
  { id: 'kaynak', title: 'Kaynak yüzü',
    text: 'Profiller 45° kesilir (s.6) ve 240–280 °C ısıtıcı plakada eritilip bastırılarak kaynatılır; destek plakaları profili sabitler (s.14). Kesit düzlemi tam gönyeden geçiyor.',
    view: 'weld', clip: { axis: 'd', pos: 0 }, hotspots: ['kaynak'], dur: 12000 },
  { id: 'kamara', title: 'Çok odacıklı kesit',
    text: 'Kasada 14, kanatta 11 kapalı kamara (s.9 çizimi). Kasa dış görünür yüksekliği 74 mm, kanat 84 mm; kasa ile kanat birlikte 104,5 mm derinlik.',
    view: 'dims', clip: { axis: 'x', pos: 296 }, dims: true, dur: 12000 },
  { id: 'celik', title: 'Galvaniz çelik takviye',
    text: 'BF 409-15 galvaniz U takviyeler (30 × 27 mm) kaynak bölgesine girmez: boyları kasada A − 153, kanatta A − 160 mm (s.10, s.11). Kasa vidaları 3,9 × 19 YSB uçtan 150 mm, kanat vidaları 3,9 × 19 YHB iç köşeden 120 mm içeride.',
    view: { dir: [0.72, 0.5, 0.95], r: 0.2, target: [0.0, 0.1, 0.0] }, ghost: [...PROFILES, ...GASKETS, ...GLASS, 'drenaj_kapagi'], dur: 13000 },
  { id: 'conta', title: 'Üç conta hattı',
    text: 'Kasa dış contası, orta conta ve kanat iç contası kanadı kasaya üç hatta sızdırmaz kapatır. Orta conta dış drenaj bölmesini iç bölmeden ayırır (s.9).',
    view: { dir: [0.95, 0.42, 0.7], r: 0.2, target: [0.0, 0.12, 0.0] }, ghost: [...PROFILES, ...GLASS, ...STEEL, 'drenaj_kapagi'], hotspots: ['conta'], dur: 12000 },
  { id: 'su', title: 'Su tahliyesi',
    text: 'Cam yuvasına sızan su A yarığından kanat kamarasına, B yarığından kasa lambasına, C yarığından kasa dış kamarasına geçer ve D-E yarığından rüzgarlığın altından dışarı akar. Yarıklar 32 × Ø4 mm, iç ve dış kanallar 7 cm kaydırılmıştır (s.8, s.9, s.11).',
    view: { dir: [0.5, 0.62, -1], r: 0.1, target: [0.03, 0.056, -0.034] },
    solo: ['kasa_profili', 'kanat_profili', 'kasa_drenaj_kanallari', 'kanat_drenaj_kanallari', 'drenaj_kapagi', 'orta_conta', 'kasa_dis_contasi', 'kanat_dis_cam_contasi'],
    ghost: ['kasa_profili', 'kanat_profili', 'orta_conta', 'kasa_dis_contasi', 'kanat_dis_cam_contasi'],
    water: true, dur: 18000 },
  { id: 'cam', title: 'Üçlü ısıcam',
    text: '4-10-4-10-4 = 32 mm (s.9). Alüminyum ara çıtalar içindeki nem alıcı buğulanmayı önler; ikincil sızdırmazlık panelleri kalıcı bağlar. Takoz köprüsü cam yükünü kanada aktarır.',
    view: { dir: [0.7, 0.45, 1.0], r: 0.19, target: [0.02, 0.15, 0.0] }, solo: GLASS, explode: 0.5, dur: 12000 },
  { id: 'montaj', title: 'Montaj sırası',
    text: 'Kasa referans parçadır. Contalar yuvalarına bastırılır, takviyeler profillere sürülüp vidalanır, cam takozlar üzerine oturtulur ve cam çıtası iç taraftan klipslenir.',
    view: 'hero', explode: 1, callouts: true, dur: 14000 },
  { id: 'renk', title: 'Renk seçenekleri',
    text: 'Folyo yalnızca dış yüzeyleri kaplar; kesit yüzünde beyaz PVC çekirdek görünür. Renkler görsel amaçlıdır, kartela üreticiden teyit edilmelidir.',
    view: { dir: [1, 0.42, 0.85], r: 0.14, target: [0.09, 0.08, 0.0] }, finishes: ['antrasit', 'altinmese', 'ceviz', 'siyah', 'beyaz'], dur: 15000 },
  { id: 'final', title: 'Keşfetmeye hazır',
    text: 'Numuneyi parmağınızla çevirin; parçalara dokunarak bilgi alın, patlatma ve kesit araçlarıyla içini inceleyin.',
    view: 'hero', turn: true, dur: 9000 },
];
