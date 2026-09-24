// Supremo 85 — 45° kaynaklı köşe numunesi: parça bilgileri, patlatma, kesit ön ayarları, renkler, özellikler
// Kesitler: teknik döküman s.9 vektör çiziminden birebir. Köşe düzeni: s.6 (45° kesim), s.8 ve s.11 (drenaj),
// s.10 ve s.11 (takviye boyu, vida aralığı), s.14 (kaynak).
// Koordinatlar (mm, dünya ekseni): X = alt kol boyu (dış köşe 0), Y = yukarı / yan kol boyu, Z = iç taraf (+) / dış (-)

export const MATERIALS = {
  pvc:      { label: 'Sert PVC (uPVC), beyaz',                    swatch: '#f2f2ee' },
  steel:    { label: 'Galvaniz çelik sac',                        swatch: '#aeb4ba' },
  epdm:     { label: 'EPDM kauçuk, siyah',                        swatch: '#1c1c1c' },
  tpe:      { label: 'Yumuşak PVC / TPE (ko-ekstrüzyon), siyah',  swatch: '#222222' },
  glass:    { label: 'Float cam, 4 mm',                           swatch: '#bfe1d9' },
  alu:      { label: 'Alüminyum ara çıta',                        swatch: '#b9bec4' },
  desic:    { label: 'Moleküler elek granülü',                    swatch: '#d7c49b' },
  sealant:  { label: 'Polisülfür / butil',                        swatch: '#2a2a2a' },
  plastic:  { label: 'Sert plastik (PP/PE)',                      swatch: '#5a7da6' },
  screw:    { label: 'Çinko kaplı çelik',                         swatch: '#d3d7db' },
  cover:    { label: 'PVC, beyaz',                                swatch: '#f2f2ee' },
};

export const GROUPS = [
  { id: 'profil',  label: 'Profiller' },
  { id: 'conta',   label: 'Contalar' },
  { id: 'takviye', label: 'Takviye ve bağlantı' },
  { id: 'cam',     label: 'Cam sistemi' },
  { id: 'drenaj',  label: 'Drenaj' },
];

// S: kanat grubunun (kanat + camlama + kanat contaları) köşe açıortayı boyunca ve içe doğru ayrılması
const S = { v: [67, 67, 34], t: [0.30, 0.68] };
const GLASS_OUT = { v: [83, 83, 0], t: [0.12, 0.48] };

export const PARTS = [
  {
    id: 'kasa_profili', name: 'Kasa profili (45° kaynaklı)', group: 'profil', mat: 'pvc', foil: true, seam: 1,
    info: 'İki kasa kolu 45° kesilip ısıtıcı plakayla birbirine kaynatılmıştır; köşe tek parça, kapalı bir profil olur. Kesitte 14 kapalı kamara, ana kamarada galvaniz takviye, dış tarafta drenaj kamaraları bulunur.',
    dims: [['Profil kodu', 'BF 8581 · 74 × 85 mm (ift belgesi)'], ['Sistem derinliği', '85 mm (s.9)'], ['Dış görünür yükseklik', '74 mm (s.9)'], ['İç görünür yükseklik', '40 mm (s.9)'], ['Köşe kesimi', '45° (s.6)'], ['Kamara sayısı', '14 (s.9 çizimi)']],
    assembly: 'Kaynak plakası 240–280 °C; profilleri sabitlemek için kaynak destek plakaları kullanılır (s.14). Kaynak sonrası köşe temizlenir.',
    source: 'PDF s.6 Profil kesimi · s.9 Su tahliye görünümü · s.14 Kaynak kuralları · ift test belgesi 25-002770-PR01',
    explode: [],
  },
  {
    id: 'kanat_profili', name: 'Kanat profili (45° kaynaklı)', group: 'profil', mat: 'pvc', foil: true, seam: 1,
    info: 'Kanat da köşede 45° kaynaklıdır. 11 kamara; cam yuvası tabanında takoz köprüsü yeri, dış cam dudağında conta yuvası ve cam çıtası klips kanalı bulunur.',
    dims: [['Profil kodu', 'BF 8582 · 84 × 85 mm (ift belgesi)'], ['Profil yüksekliği', '84 mm (s.9)'], ['Kasa ile kaçıklık', '19,5 mm; toplam 104,5 mm (s.9)'], ['Köşe kesimi', '45° (s.6)'], ['Kamara sayısı', '11 (s.9 çizimi)']],
    assembly: 'Kasaya kapanırken dış, orta ve iç olmak üzere üç conta hattına basar.',
    source: 'PDF s.6 · s.9 · s.14 · ift test belgesi 25-002770-PR01',
    explode: [S],
  },
  {
    id: 'cam_citasi', name: 'Cam çıtası (45° birleşim)', group: 'profil', mat: 'pvc', foil: true, seam: 2,
    info: 'Kanat profilindeki klips kanalına iç taraftan geçen boşluklu çıta. Köşede kaynak yapılmaz; iki çıta 45° kesilip alın alına gelir.',
    dims: [['Derinlik', '30 mm (s.9)'], ['Yükseklik', '32,5 mm (s.9)'], ['Cam kalınlığı', '32 mm, 4-10-4-10-4 (s.9)'], ['Köşe kesimi', '45° (s.7)']],
    assembly: 'Cam yerleştirildikten sonra iç taraftan klipsle takılır.',
    source: 'PDF s.7 Çıta kesimi · s.9',
    explode: [S, { v: [18, 18, 70], t: [0.0, 0.32] }],
  },
  {
    id: 'cam_citasi_contasi', name: 'Cam çıtası contası', group: 'conta', mat: 'tpe',
    info: 'Çıtaya ortak ekstrüzyonla eklenmiş iki yumuşak dudak; iç cam yüzeyine basar.',
    dims: [['Dudak sayısı', '2 (s.9)'], ['Temas yüzeyi', 'İç cam yüzeyi']],
    assembly: 'Çıta ile birlikte gelir; ayrı montajı yoktur.',
    source: 'PDF s.9',
    explode: [S, { v: [18, 18, 70], t: [0.0, 0.32] }],
  },
  {
    id: 'kasa_dis_contasi', name: 'Kasa dış contası', group: 'conta', mat: 'epdm',
    info: 'Kasanın dış dudağındaki yuvaya ok ayağıyla geçer; kanadın dış yüzüne basarak birinci sızdırmazlık hattını oluşturur. Köşede gönyeli birleşim gösterilmiştir (görsel varsayım).',
    dims: [['Kesit', '7,3 × 11,5 mm (s.9)'], ['Boşluklu kesit', '3 hücre']],
    assembly: 'Yuvaya bastırılarak takılır.',
    source: 'PDF s.9',
    explode: [{ v: [9, 9, 18], t: [0.50, 0.80] }],
  },
  {
    id: 'orta_conta', name: 'Orta conta', group: 'conta', mat: 'epdm',
    info: 'Kasanın orta yuvasına takılan yüksek kanatlı merkez conta; dış drenaj bölmesini iç bölmeden ayırır.',
    dims: [['Kesit', '9 × 17,9 mm (s.9)']],
    assembly: 'Kasa yuvasına ayağıyla bastırılarak takılır.',
    source: 'PDF s.9',
    explode: [{ v: [25, 25, 0], t: [0.50, 0.80] }],
  },
  {
    id: 'kanat_ic_contasi', name: 'Kanat iç contası', group: 'conta', mat: 'epdm',
    info: 'Kanadın iç bacağındaki yuvaya geçer ve kasanın iç yüzüne basar (üçüncü hat).',
    dims: [['Kesit', '7,3 × 11,5 mm (s.9)']],
    assembly: 'Kanat yuvasına bastırılarak takılır.',
    source: 'PDF s.9',
    explode: [S, { v: [-3, -3, -16], t: [0.52, 0.82] }],
  },
  {
    id: 'kanat_dis_cam_contasi', name: 'Dış cam contası', group: 'conta', mat: 'epdm',
    info: 'Kanadın dış cam dudağındaki yuvaya geçer; ısıcamın dış yüzeyini sızdırmaz yapar.',
    dims: [['Kesit', '7,3 × 11,5 mm (s.9)']],
    assembly: 'Cam takılmadan önce kanat yuvasına bastırılır.',
    source: 'PDF s.9',
    explode: [S, { v: [7, 7, 16], t: [0.46, 0.76] }],
  },
  {
    id: 'kasa_celik_takviye_alt', name: 'Kasa takviyesi (alt kol)', group: 'takviye', mat: 'steel',
    info: 'Kasa ana kamarasına boyuna sürülen galvaniz U profil. Kaynak bölgesine girmez: takviye boyu kasa boyundan 153 mm kısadır (s.10). Modelde iki uçta eşit, köşeden 76,5 mm geride başlar; s.10 çiziminde uçtan 68 mm ölçüsü de görülür.',
    dims: [['Profil', 'BF 409-15 galvaniz U (ift belgesi)'], ['Kesit', '30 × 27 mm (ift belgesi)'], ['Et kalınlığı', '1,5 mm (s.9 çiziminden ölçüldü)'], ['Kesim boyu', 'Kasa boyu − 153 mm (s.10)']],
    assembly: 'Profile boyuna sürülür, kasa altından 3,9 × 19 YSB vidayla bağlanır (s.10).',
    source: 'PDF s.9 · s.10 Kasa ve kayıt hazırlığı · ift belgesi',
    explode: [{ v: [190, 0, 0], t: [0.62, 1.0] }],
  },
  {
    id: 'kasa_celik_takviye_yan', name: 'Kasa takviyesi (yan kol)', group: 'takviye', mat: 'steel',
    info: 'Yan kasa kolundaki galvaniz takviye; alt koldaki gibi köşeden 76,5 mm geride başlar (A − 153, iki uçta eşit varsayımı).',
    dims: [['Profil', 'BF 409-15 (ift belgesi)'], ['Kesit', '30 × 27 mm U (ift belgesi)'], ['Kesim boyu', 'Kasa boyu − 153 mm (s.10)']],
    assembly: 'Profile boyuna sürülür ve vidalanır.',
    source: 'PDF s.10',
    explode: [{ v: [0, 190, 0], t: [0.62, 1.0] }],
  },
  {
    id: 'kanat_celik_takviye_alt', name: 'Kanat takviyesi (alt kol)', group: 'takviye', mat: 'steel',
    info: 'Kanat ana kamarasındaki galvaniz U profil. Kesim boyu kanat boyundan 160 mm kısadır; köşeden 80 mm geride başlar.',
    dims: [['Profil', 'BF 409-15 galvaniz U (ift belgesi)'], ['Kesit', '30 × 27 mm (ift belgesi)'], ['Et kalınlığı', '1,5 mm (s.9 çiziminden ölçüldü)'], ['Kesim boyu', 'Kanat boyu − 160 mm (s.11)']],
    assembly: 'Profile boyuna sürülür, cam yuvası tabanından vidalanır.',
    source: 'PDF s.9 · s.11',
    explode: [S, { v: [190, 0, 0], t: [0.62, 1.0] }],
  },
  {
    id: 'kanat_celik_takviye_yan', name: 'Kanat takviyesi (yan kol)', group: 'takviye', mat: 'steel',
    info: 'Yan kanat kolundaki galvaniz takviye.',
    dims: [['Profil', 'BF 409-15 (ift belgesi)'], ['Kesit', '30 × 27 mm U (ift belgesi)'], ['Kesim boyu', 'Kanat boyu − 160 mm (s.11)']],
    assembly: 'Profile boyuna sürülür ve vidalanır.',
    source: 'PDF s.11',
    explode: [S, { v: [0, 190, 0], t: [0.62, 1.0] }],
  },
  {
    id: 'kasa_vidasi_alt', name: 'Kasa takviye vidası (alt)', group: 'takviye', mat: 'screw',
    info: 'Silindir başlı yıldız (YSB) matkap uçlu vida; kasa altındaki kılavuz kanalından takviyeyi bağlar. İlk vida kasa ucundan 150 mm içeride.',
    dims: [['Ölçü', '3,9 × 19 mm YSB (s.10)'], ['Konum', 'Uçtan 150 mm, sonra 300–400 mm arayla (s.10)'], ['Döküman içi fark', 's.32 vida tablosunda kasa takviyesi için 3,9 × 22 YSB']],
    assembly: 'Silindir başı kasa alt yüzeyine oturur, ucu takviye içinde kalır. Baş ölçüsü Ø7,5 × 2,8 mm (DIN 7504-N; varsayım).',
    source: 'PDF s.9 · s.10',
    explode: [{ v: [0, -36, 0], t: [0.55, 0.85] }],
  },
  {
    id: 'kasa_vidasi_yan', name: 'Kasa takviye vidası (yan)', group: 'takviye', mat: 'screw',
    info: 'Yan kasa kolunda, dış yüzden takviyeye giren 3,9 × 19 YSB silindir başlı vida.',
    dims: [['Ölçü', '3,9 × 19 mm YSB (s.10)'], ['Konum', 'Uçtan 150 mm (s.10)']],
    assembly: 'Silindir başı yüzeye oturur.',
    source: 'PDF s.10',
    explode: [{ v: [-36, 0, 0], t: [0.55, 0.85] }],
  },
  {
    id: 'kanat_vidasi_alt', name: 'Kanat takviye vidası (alt)', group: 'takviye', mat: 'screw',
    info: 'Cam yuvası tabanından takviyeye giren 3,9 × 19 mm YHB vida; iç köşeden 120 mm içeride.',
    dims: [['Ölçü', '3,9 × 19 mm YHB (s.11)'], ['Konum', 'İç köşeden 120 mm, sonra 300–400 mm arayla (s.11)'], ['Döküman içi fark', 's.32 vida tablosunda kanat takviyesi için 3,9 × 25 YHB']],
    assembly: 'Camlamadan önce takılır.',
    source: 'PDF s.9 · s.11',
    explode: [S, { v: [0, 24, 0], t: [0.56, 0.86] }],
  },
  {
    id: 'kanat_vidasi_yan', name: 'Kanat takviye vidası (yan)', group: 'takviye', mat: 'screw',
    info: 'Yan kanat kolunda cam yuvası tabanından giren 3,9 × 19 YHB vida.',
    dims: [['Ölçü', '3,9 × 19 mm YHB (s.11)'], ['Konum', 'İç köşeden 120 mm (s.11)']],
    assembly: 'Camlamadan önce takılır.',
    source: 'PDF s.11',
    explode: [S, { v: [24, 0, 0], t: [0.56, 0.86] }],
  },
  {
    id: 'cam_1', name: 'Cam — dış panel', group: 'cam', mat: 'glass',
    info: 'Üçlü ısıcam ünitesinin dış paneli.', dims: [['Kalınlık', '4 mm (s.9)'], ['Ünite', '4-10-4-10-4 = 32 mm (s.9)']],
    assembly: 'Isıcam fabrikada birleşik gelir; takoz köprüsü üzerine oturtulur.', source: 'PDF s.9',
    explode: [S, GLASS_OUT, { v: [0, 0, -16], t: [0.36, 0.64] }],
  },
  {
    id: 'cam_2', name: 'Cam — orta panel', group: 'cam', mat: 'glass',
    info: 'Üçlü ısıcam ünitesinin orta paneli.', dims: [['Kalınlık', '4 mm (s.9)']],
    assembly: 'Isıcam ünitesinin parçası.', source: 'PDF s.9',
    explode: [S, GLASS_OUT],
  },
  {
    id: 'cam_3', name: 'Cam — iç panel', group: 'cam', mat: 'glass',
    info: 'Üçlü ısıcam ünitesinin iç paneli; cam çıtası dudakları bu yüze basar.', dims: [['Kalınlık', '4 mm (s.9)']],
    assembly: 'Isıcam ünitesinin parçası.', source: 'PDF s.9',
    explode: [S, GLASS_OUT, { v: [0, 0, 16], t: [0.36, 0.64] }],
  },
  {
    id: 'isicam_citasi', name: 'Isıcam ara çıtası', group: 'cam', mat: 'alu',
    info: 'Panelleri 10 mm aralıkta tutan boşluklu ara çıta (2 adet). Köşede gönyeli gösterilmiştir.',
    dims: [['Genişlik', '10 mm (s.9)'], ['Yükseklik', '7 mm (s.9)']],
    assembly: 'Isıcam ünitesinin parçası.', source: 'PDF s.9',
    explode: [S, GLASS_OUT],
  },
  {
    id: 'nem_alici', name: 'Nem alıcı (desikant)', group: 'cam', mat: 'desic',
    info: 'Ara çıta içindeki granül dolgu; panel arası boşluktaki nemi tutarak buğulanmayı önler.',
    dims: [['Kesit', '8 × 5 mm (her çıta)']], assembly: 'Isıcam ünitesinin parçası.', source: 'PDF s.9',
    explode: [S, GLASS_OUT],
  },
  {
    id: 'ikincil_sizdirmazlik', name: 'İkincil sızdırmazlık', group: 'cam', mat: 'sealant',
    info: 'Ara çıtanın altındaki kenar bağı dolgusu; panelleri kalıcı olarak birbirine bağlar.',
    dims: [['Yükseklik', '5,1 mm (s.9)']], assembly: 'Isıcam ünitesinin parçası.', source: 'PDF s.9',
    explode: [S, GLASS_OUT],
  },
  {
    id: 'cam_takoz_koprusu', name: 'Cam takoz köprüsü', group: 'cam', mat: 'plastic',
    info: 'Cam yükünü kanat tabanına aktaran köprü takozu. Alt yüzündeki kanallar cam yuvasındaki suyun drenaja akmasına izin verir.',
    dims: [['Kalınlık', '3,8 mm (s.9)'], ['Genişlik', '57 mm (s.9)'], ['Boy ve konum', '70 mm (varsayım)']],
    assembly: 'Camdan önce cam yuvası tabanına yerleştirilir.', source: 'PDF s.9',
    explode: [S, { v: [0, 44, 0], t: [0.40, 0.72] }],
  },
  {
    id: 'kasa_drenaj_kanallari', name: 'Kasa drenaj yarıkları (C, D-E)', group: 'drenaj', mat: 'pvc',
    info: 'Alt kasada iki yarık: dış yüzden kamaraya D-E ve lambadan dış kamaraya C. İç köşeden 10 mm, 32 mm yarık, 70 mm ara, 32 mm yarık düzeni; iç ve dış kanallar 7 cm aralıklıdır. C yarığı düşeyle 50° açılır.',
    dims: [['Yarık', '32 × Ø4 mm (s.8)'], ['Düzen', '10 · 32 · 70 · 32 mm (s.8)'], ['Eğik yarık açısı', '50° (s.8)'], ['Adet', 'C < 500 mm: 1 · 500–1000: 2 · 1000–2000: 3 · > 2000: 4 (s.8)']],
    assembly: 'Profil kesiminden sonra drenaj makinesiyle açılır.',
    source: 'PDF s.8 Su tahliyesi · s.9',
    explode: [],
  },
  {
    id: 'kanat_drenaj_kanallari', name: 'Kanat drenaj yarıkları (A, B)', group: 'drenaj', mat: 'pvc',
    info: 'Cam yuvasından kanat dış kamarasına A (düşeyle 60°) ve kanat altından kasa lambasına B yarığı; 70 mm aralıkla kaydırılmıştır.',
    dims: [['Yarık', '32 × Ø4 mm (s.11)'], ['Düzen', '10 · 32 · 70 · 32 mm (s.11)'], ['Eğik yarık açısı', '60° (s.11)']],
    assembly: 'Profil kesiminden sonra açılır.', source: 'PDF s.8 · s.11',
    explode: [S],
  },
  {
    id: 'drenaj_kapagi', name: 'Drenaj kapağı (rüzgarlık)', group: 'drenaj', mat: 'cover',
    info: 'Dış drenaj yarığına iki tırnaklı pimle takılan, alttan açık kapak. Suyu dışarı bırakırken rüzgârın yarığa girmesini engeller.',
    dims: [['Boyut', '40 × 11 × 6,5 mm (varsayım)']],
    assembly: 'Montajın sonunda dış yüzden takılır (s.8, madde 4).', source: 'PDF s.4 · s.8',
    explode: [{ v: [0, 0, -32], t: [0.60, 0.90] }],
  },
];

// Kesit ön ayarları: eksen x (alt kolu enine keser), y (yan kolu enine keser), z (boyuna), d (gönye düzlemi)
export const SECTION_PRESETS = [
  { label: 'Gönye (kaynak yüzü)', axis: 'd', pos: 0 },
  { label: 'Vida ekseni', axis: 'x', pos: 150 },
  { label: 'D-E yarığı', axis: 'x', pos: 100 },
  { label: 'C yarığı', axis: 'x', pos: 202 },
  { label: 'A yarığı', axis: 'x', pos: 230 },
  { label: 'Yan kol', axis: 'y', pos: 200 },
];

// Renk / folyo seçenekleri (görsel amaçlı; üretici kartelası ile teyit edilmelidir)
export const FINISHES = [
  { id: 'beyaz',   label: 'Beyaz',        mode: 0, a: '#f3f3f0', b: '#f3f3f0', rough: 0.34, coat: 1.0, bump: 0 },
  { id: 'antrasit', label: 'Antrasit gri', mode: 1, a: '#3b4045', b: '#3b4045', rough: 0.5,  coat: 0.35, bump: 0 },
  { id: 'siyah',   label: 'Siyah',        mode: 1, a: '#202124', b: '#202124', rough: 0.48, coat: 0.35, bump: 0 },
  { id: 'altinmese', label: 'Altın meşe', mode: 2, a: '#bd8a55', b: '#8b5b31', rough: 0.55, coat: 0.2, bump: 0.5 },
  { id: 'ceviz',   label: 'Ceviz',        mode: 2, a: '#6f4b31', b: '#3e291b', rough: 0.55, coat: 0.2, bump: 0.5 },
];

// Teknik özellikler kartı: yalnızca dökümandaki değerler
export const SPECS = [
  ['Sistem derinliği', '85 mm; kasa + kanat 104,5 mm', 's.9'],
  ['Görünür yükseklikler', 'Kasa dış 74 mm · iç 40 mm · kanat 84 mm', 's.9'],
  ['Camlama', '32 mm üçlü ısıcam, 4-10-4-10-4', 's.9'],
  ['Kamara sayısı', 'Kasa 14 · kanat 11 (kesit çiziminden)', 's.9'],
  ['Conta hatları', 'Dış, orta ve iç: üç sızdırmazlık hattı', 's.9'],
  ['Profil kodları', 'Kasa BF 8581 (74 × 85) · kanat BF 8582 (84 × 85) · takviye BF 409-15', 'ift belgesi'],
  ['Çelik takviye', 'Galvaniz U 30 × 27 mm (ift belgesi), et 1,5 mm (s.9 çiziminden); boy: kasa A − 153, kanat A − 160 mm', 's.9 · s.10 · s.11'],
  ['Takviye vidası', 'Kasa 3,9 × 19 YSB, uçtan 150 mm; kanat 3,9 × 19 YHB, iç köşeden 120 mm; sonra 300–400 mm arayla. s.32 tablosunda 3,9 × 22 / 3,9 × 25 geçer', 's.10 · s.11 · s.32'],
  ['Drenaj yarığı', '32 × Ø4 mm; iç ve dış kanal 70 mm aralıklı; eğik yarık kasa 50°, kanat 60° (s.8 metninde 60° yazar, kasa çizimi 50° gösterir)', 's.8 · s.11'],
  ['Yarık adedi (kasa boyu C)', 'C < 500: 1 · 500–1000: 2 · 1000–2000: 3 · > 2000: 4', 's.8'],
  ['Köşe', 'Profiller 45° kesilir; kaynak plakası 240–280 °C, destek plakalarıyla', 's.6 · s.14'],
];

// Resmi performans değerleri: yalnızca kullanıcının verdiği test belgesinden
export const PERFORMANCE = {
  uf: { value: '1,0', unit: 'W/(m²K)', label: 'Profil ısı geçirgenliği Uf', basis: 'EN 12412-2 · ift Rosenheim' },
  rows: [
    ['Isı geçirgenliği Uf', '1,0 W/(m²K), EN 12412-2:2003-07 (sıcak kutu ölçümü)', 'ift belgesi'],
    ['Test numunesi', 'Kasa BF 8581 + kanat BF 8582, galvaniz takviye BF 409-15; cam yerine 44 mm dolgu paneli, kenar örtmesi 26 mm', 'ift belgesi'],
    ['Görünür genişlik · derinlik', '124 mm · 85 mm', 'ift belgesi'],
  ],
  source: 'ift Rosenheim test belgesi 25-002770-PR01 (NW-K20-06-en-01), 28.11.2025. Sonuç yalnızca test edilen numuneye ilişkindir; bu numunede s.9 çizimindeki 32 mm üçlü cam gösterilir.',
};

export const ASSUMPTIONS = [
  'Numune kolları dış köşeden 300 mm (düz numunedeki gibi).',
  'Contalar ve ısıcam ara çıtası köşede gönyeli gösterilmiştir.',
  'Takoz köprüsü 70 mm, konumu varsayım; rüzgarlık ölçüsü varsayım.',
  'Yarık konumları için iç köşe referansı dış görünüş çizgisi alınmıştır (kasa 74, kanat 102 mm).',
  'Kaynak dikişi ve renk seçenekleri görsel amaçlıdır.',
  'Kasa takviyesi iki uçta eşit geri çekilmiştir (A − 153 → 76,5 mm); s.10 çiziminde uçtan 68 mm ölçüsü de vardır.',
  'Vida baş ölçüleri standart değerlerdir (DIN 7504; kasa silindir, kanat havşa baş); döküman baş ölçüsü vermez.',
];
