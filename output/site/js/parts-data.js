// Supremo 85 kesit numunesi - parça bilgileri
// Ölçüler: teknik döküman s.9 (Su tahliye görünümü) vektör çiziminden birebir çıkarıldı.
// Patlatma vektörleri mm cinsinden, dünya ekseninde: X = profil boyu, Y = yukarı, Z = iç taraf (+) / dış taraf (-)

export const MATERIALS = {
  pvc:      { label: 'Sert PVC (uPVC), beyaz',                swatch: '#f2f2ee' },
  pvcCap:   { label: 'Sert PVC (uPVC), beyaz',                swatch: '#f2f2ee' },
  steel:    { label: 'Galvaniz çelik sac',                    swatch: '#aeb4ba' },
  epdm:     { label: 'EPDM kauçuk, siyah',                    swatch: '#1c1c1c' },
  tpe:      { label: 'Yumuşak PVC / TPE (ko-ekstrüzyon), siyah', swatch: '#222222' },
  glass:    { label: 'Float cam, 4 mm',                       swatch: '#bfe1d9' },
  alu:      { label: 'Alüminyum ara çıta',                    swatch: '#b9bec4' },
  desic:    { label: 'Moleküler elek granülü',                swatch: '#d7c49b' },
  sealant:  { label: 'Polisülfür / butil',                    swatch: '#2a2a2a' },
  plastic:  { label: 'Sert plastik (PP/PE)',                  swatch: '#5a7da6' },
  screw:    { label: 'Çinko kaplı çelik',                     swatch: '#d3d7db' },
  cover:    { label: 'PVC, beyaz',                            swatch: '#f2f2ee' },
};

export const GROUPS = [
  { id: 'profil',  label: 'Profiller' },
  { id: 'conta',   label: 'Contalar' },
  { id: 'takviye', label: 'Takviye ve bağlantı' },
  { id: 'cam',     label: 'Cam sistemi' },
  { id: 'drenaj',  label: 'Drenaj' },
];

// S: kanat grubunun (kanat + camlama + kanat contaları) montaj ekseni boyunca ayrılması
const S = { v: [0, 95, 30], t: [0.30, 0.68] };

export const PARTS = [
  {
    id: 'kasa_profili', name: 'Kasa profili', group: 'profil', mat: 'pvc',
    info: 'Supremo 85 kasa profili. Kesitte 14 kapalı kamara bulunur: ana kamarada galvaniz takviye, dış tarafta drenaj kamaraları, üstte kasa dış contası ve orta conta yuvaları.',
    dims: [['Sistem derinliği', '85 mm'], ['Dış görünür yükseklik', '74 mm'], ['İç görünür yükseklik', '40 mm'], ['Dış duvar kalınlığı', '2,8 mm'], ['Kamara sayısı', '14']],
    assembly: 'Referans parça. Köşeler 45° kesilip kaynakla birleştirilir (PDF s.6, s.14).',
    source: 'PDF s.9 Su tahliye görünümü · s.6 Profil kesimi',
    explode: [],
  },
  {
    id: 'kanat_profili', name: 'Kanat profili', group: 'profil', mat: 'pvc',
    info: 'Supremo 85 kanat profili. 11 kamara; cam yuvası tabanında takoz köprüsü yeri, dış cam dudağında conta yuvası, iç bacağında kanat iç contası yuvası ve cam çıtası klips kanalı bulunur.',
    dims: [['Sistem derinliği', '85 mm (çıta dahil)'], ['Profil yüksekliği', '84 mm'], ['Kasa ile kaçıklık', '19,5 mm (toplam 104,5 mm)'], ['Kamara sayısı', '11']],
    assembly: 'Kasaya kapanırken dış, orta ve iç olmak üzere üç conta hattına basar.',
    source: 'PDF s.9 Su tahliye görünümü',
    explode: [S],
  },
  {
    id: 'cam_citasi', name: 'Cam çıtası (üçlü cam)', group: 'profil', mat: 'pvc',
    info: 'Kanat profilindeki klips kanalına iç taraftan geçen boşluklu çıta. İki yumuşak dudakla ısıcamı içten sıkıştırır.',
    dims: [['Derinlik', '30 mm'], ['Yükseklik', '32,5 mm'], ['Cam kalınlığı', '32 mm (4-10-4-10-4)']],
    assembly: 'Cam yerleştirildikten sonra iç taraftan klipsle takılır; köşelerde 45° kesilir (PDF s.7, no.7).',
    source: 'PDF s.9 · s.7 Çıta kesimi',
    explode: [S, { v: [0, 26, 72], t: [0.0, 0.32] }],
  },
  {
    id: 'cam_citasi_contasi', name: 'Cam çıtası contası', group: 'conta', mat: 'tpe',
    info: 'Çıtaya ortak ekstrüzyonla eklenmiş iki yumuşak dudak. Çizimde çıta üzerinde taralı (farklı malzeme) gösterilmiştir.',
    dims: [['Dudak sayısı', '2'], ['Temas yüzeyi', 'İç cam yüzeyi']],
    assembly: 'Çıta ile birlikte gelir; ayrı montajı yoktur.',
    source: 'PDF s.9',
    explode: [S, { v: [0, 26, 72], t: [0.0, 0.32] }],
  },
  {
    id: 'kasa_dis_contasi', name: 'Kasa dış contası', group: 'conta', mat: 'epdm',
    info: 'Kasanın dış dudağındaki yuvaya ok şeklindeki ayağıyla geçer; kanadın dış yüzüne basarak birinci sızdırmazlık hattını oluşturur. Kanat iç contası ve dış cam contası ile aynı kesittedir.',
    dims: [['Kesit', '7,3 × 11,5 mm'], ['Boşluklu kesit', '3 hücre']],
    assembly: 'Yuvaya bastırılarak takılır.',
    source: 'PDF s.9',
    explode: [{ v: [0, 12, 18], t: [0.50, 0.80] }],
  },
  {
    id: 'orta_conta', name: 'Orta conta', group: 'conta', mat: 'epdm',
    info: 'Kasanın orta yuvasına takılan yüksek kanatlı merkez conta. Kanat gövdesine basarak ikinci hattı oluşturur ve dış drenaj bölmesini iç bölmeden ayırır.',
    dims: [['Kanat yüksekliği', '≈ 18 mm'], ['Kesit', '9 × 17,9 mm']],
    assembly: 'Kasa yuvasına ayağıyla bastırılarak takılır.',
    source: 'PDF s.9',
    explode: [{ v: [0, 36, 0], t: [0.50, 0.80] }],
  },
  {
    id: 'kanat_ic_contasi', name: 'Kanat iç contası', group: 'conta', mat: 'epdm',
    info: 'Kanadın iç bacağındaki yuvaya geçer ve kasanın iç yüzüne basar (üçüncü hat).',
    dims: [['Kesit', '7,3 × 11,5 mm']],
    assembly: 'Kanat yuvasına bastırılarak takılır.',
    source: 'PDF s.9',
    explode: [S, { v: [0, -4, -16], t: [0.52, 0.82] }],
  },
  {
    id: 'kanat_dis_cam_contasi', name: 'Dış cam contası', group: 'conta', mat: 'epdm',
    info: 'Kanadın dış cam dudağındaki yuvaya geçer; ısıcamın dış yüzeyini sızdırmaz hale getirir.',
    dims: [['Kesit', '7,3 × 11,5 mm']],
    assembly: 'Cam takılmadan önce kanat yuvasına bastırılır.',
    source: 'PDF s.9',
    explode: [S, { v: [0, 10, 16], t: [0.46, 0.76] }],
  },
  {
    id: 'kasa_celik_takviye', name: 'Kasa çelik takviyesi', group: 'takviye', mat: 'steel',
    info: 'Kasa ana kamarasına boyuna sürülen galvaniz U profil. Kamaraya 0,5 mm montaj boşluğuyla oturur.',
    dims: [['Kesit', '30 × 27 mm U'], ['Et kalınlığı', '1,5 mm'], ['Kesim boyu', 'Kasa boyu − 153 mm (PDF s.10)']],
    assembly: 'Profile boyuna sürülür, kasa altından vidalanır.',
    source: 'PDF s.9 · s.10 Kasa ve kayıt hazırlığı',
    explode: [{ v: [-190, 0, 0], t: [0.62, 1.0] }],
  },
  {
    id: 'kanat_celik_takviye', name: 'Kanat çelik takviyesi', group: 'takviye', mat: 'steel',
    info: 'Kanat ana kamarasındaki orta dilin üzerine oturan galvaniz U profil.',
    dims: [['Kesit', '30 × 27 mm U'], ['Et kalınlığı', '1,5 mm']],
    assembly: 'Profile boyuna sürülür, cam yuvası tabanından vidalanır.',
    source: 'PDF s.9 · s.11',
    explode: [S, { v: [190, 0, 0], t: [0.62, 1.0] }],
  },
  {
    id: 'kasa_takviye_vidalari', name: 'Kasa takviye vidaları', group: 'takviye', mat: 'screw',
    info: 'Havşa başlı yıldız (YHB) matkap uçlu vida. Kasa altındaki kılavuz kanalından geçerek çelik takviyeyi profile bağlar.',
    dims: [['Ölçü', '3,9 × 19 mm'], ['Adet (numunede)', '2'], ['Aralık (PDF s.10)', 'Uçtan 150 mm, 300–400 mm arayla']],
    assembly: 'Baş yüzeyle aynı hizada; ucu takviye içinde kalır.',
    source: 'PDF s.9 · s.10',
    explode: [{ v: [0, -36, 0], t: [0.55, 0.85] }],
  },
  {
    id: 'kanat_takviye_vidalari', name: 'Kanat takviye vidaları', group: 'takviye', mat: 'screw',
    info: 'Cam yuvası tabanındaki kılavuz kanalından takviyeye giren 3,9 × 19 mm YHB vida. Ucu, orta dildeki merkezleme çentiğinin hemen üstünde kalır.',
    dims: [['Ölçü', '3,9 × 19 mm'], ['Adet (numunede)', '2']],
    assembly: 'Camlamadan önce takılır.',
    source: 'PDF s.9 · s.10',
    explode: [S, { v: [0, 24, 0], t: [0.56, 0.86] }],
  },
  {
    id: 'cam_1', name: 'Cam — dış panel', group: 'cam', mat: 'glass',
    info: 'Üçlü ısıcam ünitesinin dış paneli.', dims: [['Kalınlık', '4 mm'], ['Ünite', '4-10-4-10-4 = 32 mm']],
    assembly: 'Isıcam fabrikada birleşik gelir; takoz köprüsü üzerine oturtulur.', source: 'PDF s.9',
    explode: [S, { v: [0, 118, 0], t: [0.12, 0.48] }, { v: [0, 0, -16], t: [0.36, 0.64] }],
  },
  {
    id: 'cam_2', name: 'Cam — orta panel', group: 'cam', mat: 'glass',
    info: 'Üçlü ısıcam ünitesinin orta paneli.', dims: [['Kalınlık', '4 mm']],
    assembly: 'Isıcam ünitesinin parçası.', source: 'PDF s.9',
    explode: [S, { v: [0, 118, 0], t: [0.12, 0.48] }],
  },
  {
    id: 'cam_3', name: 'Cam — iç panel', group: 'cam', mat: 'glass',
    info: 'Üçlü ısıcam ünitesinin iç paneli; cam çıtası dudakları bu yüze basar.', dims: [['Kalınlık', '4 mm']],
    assembly: 'Isıcam ünitesinin parçası.', source: 'PDF s.9',
    explode: [S, { v: [0, 118, 0], t: [0.12, 0.48] }, { v: [0, 0, 16], t: [0.36, 0.64] }],
  },
  {
    id: 'isicam_citasi', name: 'Isıcam ara çıtası', group: 'cam', mat: 'alu',
    info: 'Panelleri 10 mm aralıkta tutan boşluklu ara çıta (2 adet). İçi nem alıcı ile doludur.',
    dims: [['Genişlik', '10 mm'], ['Yükseklik', '7 mm']],
    assembly: 'Isıcam ünitesinin parçası.', source: 'PDF s.9',
    explode: [S, { v: [0, 118, 0], t: [0.12, 0.48] }],
  },
  {
    id: 'nem_alici', name: 'Nem alıcı (desikant)', group: 'cam', mat: 'desic',
    info: 'Ara çıta içindeki granül dolgu; panel arası boşluktaki nemi tutarak buğulanmayı önler.',
    dims: [['Kesit', '8 × 5 mm (her çıta)']], assembly: 'Isıcam ünitesinin parçası.', source: 'PDF s.9',
    explode: [S, { v: [0, 118, 0], t: [0.12, 0.48] }],
  },
  {
    id: 'ikincil_sizdirmazlik', name: 'İkincil sızdırmazlık', group: 'cam', mat: 'sealant',
    info: 'Ara çıtanın altındaki kenar bağı dolgusu; panelleri kalıcı olarak birbirine bağlar.',
    dims: [['Yükseklik', '5,1 mm']], assembly: 'Isıcam ünitesinin parçası.', source: 'PDF s.9',
    explode: [S, { v: [0, 118, 0], t: [0.12, 0.48] }],
  },
  {
    id: 'cam_takoz_koprusu', name: 'Cam takoz köprüsü', group: 'cam', mat: 'plastic',
    info: 'Cam yükünü kanat tabanına aktaran köprü takozu (2 adet). Alt yüzündeki kanallar cam yuvasındaki suyun drenaja akmasına izin verir.',
    dims: [['Kalınlık', '3,8 mm'], ['Genişlik', '57 mm'], ['Boy (varsayım)', '100 mm']],
    assembly: 'Camdan önce cam yuvası tabanına yerleştirilir.', source: 'PDF s.9',
    explode: [S, { v: [0, 44, 0], t: [0.40, 0.72] }],
  },
  {
    id: 'kasa_drenaj_kanallari', name: 'Kasa drenaj kanalları', group: 'drenaj', mat: 'pvc',
    info: 'Kasada frezelenmiş 32 × Ø4 mm yarıklar: eğimli yüzeyden (45°) dış kamaraya ve 70 mm ötede dış yüzden dışarıya. Su, kamara içinde labirent yol izler.',
    dims: [['Yarık', '32 × 4 mm'], ['İç–dış kanal aralığı', '70 mm'], ['Adet', 'C < 500 mm: 1 · 500–1000: 2 · 1000–2000: 3 · > 2000: 4 (PDF s.8)']],
    assembly: 'Profil kesiminden sonra drenaj makinesiyle açılır.',
    source: 'PDF s.8 Su tahliyesi · s.9',
    explode: [],
  },
  {
    id: 'kanat_drenaj_kanallari', name: 'Kanat drenaj kanalları', group: 'drenaj', mat: 'pvc',
    info: 'Cam yuvasından kanat dış kamarasına 45° yarık ve kanat altından kasa bölmesine dikey yarık (32 × Ø4 mm).',
    dims: [['Yarık', '32 × 4 mm']],
    assembly: 'Profil kesiminden sonra açılır.', source: 'PDF s.8 · s.9',
    explode: [S],
  },
  {
    id: 'drenaj_kapagi', name: 'Drenaj kapağı (rüzgarlık)', group: 'drenaj', mat: 'cover',
    info: 'Dış drenaj yarığına iki tırnaklı pimle takılan, alttan açık kapak. Suyu dışarı bırakırken rüzgarın yarığa girmesini engeller.',
    dims: [['Boyut (varsayım)', '40 × 11 × 6,5 mm']],
    assembly: 'Montajın sonunda dış yüzden takılır (PDF s.8, madde 4).', source: 'PDF s.4 · s.8',
    explode: [{ v: [0, 0, -32], t: [0.60, 0.90] }],
  },
];

// Kesit ön ayarları (X = profil boyu, mm; numune -150..150)
export const SECTION_PRESETS = [
  { label: 'Vida ekseni', axis: 'x', pos: -110 },
  { label: 'İç drenaj yarığı', axis: 'x', pos: -74 },
  { label: 'Dış drenaj yarığı', axis: 'x', pos: 28 },
  { label: 'Orta', axis: 'x', pos: 0 },
];
