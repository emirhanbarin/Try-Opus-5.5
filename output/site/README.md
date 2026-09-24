# Supremo 85 — 3B Profil Görüntüleyici

Supremo 85 (8500 serisi) uPVC pencere sisteminin iki etkileşimli 3B numunesi. İnternet bağlantısı gerektirmez; three.js dahil tüm dosyalar bu klasördedir.

| Sayfa | İçerik |
|---|---|
| **Köşe kesiti** (`index.html`, ilk açılan) | 45° kaynaklı köşe numunesi (2 × 300 mm kol): keşif turu, 360° otomatik döndürme, su tahliyesi animasyonu, teknik çizim bindirme, renk/folyo seçenekleri (iki renkli ve karşılaştırma perdesi), üretim hikâyesi, röntgen merceği, kamara sayacı, ısı haritası, canlı 2B kesit, ölçüm, köşeden pencereye yapılandırıcı, fuar/kiosk modu |
| **Düz kesit** (`kesit.html`) | 300 mm düz kesit numunesi (önceki sürüm, değiştirilmedi) |

İki sayfa arasında üst ortadaki **Köşe kesiti · Düz kesit** seçicisiyle geçilir. Kesit geometrisi teknik dökümanın 9. sayfasındaki vektör çizimden birebir çıkarılmıştır.

## Başlatma

| Sistem | Yapılacak |
|---|---|
| **Windows** | `başlat.bat` dosyasına çift tıklayın. |
| **macOS** | `başlat.command` dosyasına çift tıklayın (ilk açılış için aşağıdaki nota bakın). |
| **Linux** | Klasörde `python3 sunucu.py` çalıştırın. |
| **Her sistemde (sunucusuz)** | `index.html` dosyasına çift tıklayın; site tarayıcıda doğrudan açılır. |
| **Fuar / kiosk ekranı** | `kiosk-başlat.bat` (Windows) veya `kiosk-başlat.command` (macOS); ayrıntılar aşağıda. |

Başlat dosyası yerel sunucuyu açar ve tarayıcı otomatik olarak `http://localhost:8080` adresine gider (port doluysa sıradaki boş port kullanılır). Kapatmak için açılan terminal penceresini kapatın. Önce ZIP'i bir klasöre çıkarın; ZIP içinden doğrudan çift tıklanırsa diğer dosyalar bulunamaz.

**macOS "Apple … doğrulayamadı" uyarısı verirse:** İnternetten indirilen imzasız betiklerde macOS bu uyarıyı gösterir. **Sistem Ayarları → Gizlilik ve Güvenlik** bölümünün altındaki **Yine de Aç** düğmesine basıp dosyayı yeniden açın (macOS 14 ve öncesinde: dosyaya sağ tık → **Aç**). Uyarıyla uğraşmak istemezseniz `index.html` dosyasına çift tıklamanız yeterli.

**Python veya Node yoksa:** bir şey yapmanız gerekmez; başlat dosyası Windows'ta PowerShell'i, macOS'ta Perl'i yedek sunucu olarak kullanır. O da açılmazsa [python.org](https://www.python.org/downloads/) adresinden Python 3 kurup başlat dosyasına yeniden çift tıklayın.

Tarayıcı: WebGL 2 destekli güncel Chrome, Edge, Firefox veya Safari (16.4+).

## Fuar / kiosk kurulumu

`kiosk-başlat.bat` / `kiosk-başlat.command`, sunucuyu açar ve Edge ya da Chrome'u **tam ekran kiosk modunda** (adres çubuğu yok) köşe sayfasına `?kiosk=1` ile açar. Tarayıcı bulunamazsa varsayılan tarayıcı açılır; sayfa ilk dokunuşta tam ekrana geçer.

- **Tanıtım modu:** 90 sn dokunulmazsa görünüm sıfırlanır; keşif turu döngüde oynar, numune 360° döner ve "Dokunun ve keşfedin" çağrısı görünür. İlk dokunuş tanıtımı bitirir (parça seçimi sayılmaz). Düz kesit sayfasında da boşta kalınca köşe sayfasına dönülür.
- **Dokunmatik:** tek parmakla döndür, iki parmakla yakınlaştır/kaydır, parçaya dokun. Düğmeler büyür; sağ tık, metin seçimi ve sayfa yakınlaştırma kapalıdır; fare imleci 3 sn sonra gizlenir.
- **Operatör:** çıkış Alt+F4 (Windows) / ⌘Q (macOS). Sağ üst köşeye 3 sn içinde 5 kez dokunmak performans panelini açar.
- **Adres seçenekleri:** `&idle=60` (tanıtıma geçiş süresi, sn), `&reload=6` (tanıtımdayken 6 saatte bir yenileme), `&fs=0` (tam ekran isteme), `&q=low` (düşük kalite kademesi), `&dpr=1` (piksel oranı üst sınırı).
- **Windows önerileri:** Ayarlar → Sistem → Güç bölümünde ekran ve uyku için **Hiçbir zaman** seçin. Açılışta otomatik başlatmak için `Win + R` → `shell:startup` klasörüne `kiosk-başlat.bat` kısayolu koyun.
- **Kendini toparlama:** Grafik bağlamı kaybolursa, yükleme başarısız olursa (20 sn sonra) ya da planlı yenilemede sayfa kendini yeniden yükler ve doğrudan tanıtımla açılır. Tanıtıma her girişte görüntü kalitesi yeniden denenir; tanıtımda sabit başlık soluklaşır ve yavaşça kayar (OLED ekran izi). Başlatıcılar tarayıcının çeviri ve "geri yükle" uyarılarını kapatır.

## Kullanım (köşe kesiti)

| Eylem | Kontrol |
|---|---|
| Döndür / kaydır / yakınlaştır | Sol tık veya tek parmak sürükle · sağ tık veya iki parmak · tekerlek veya kıstırma |
| Parça seç / bilgi paneli | Parçaya tıklayın (üzerine gelince vurgulanır) · çift tık: odaklan |
| Keşif turu | **Keşif turu** düğmesi · `T` (←/→ bölüm, boşluk: duraklat) |
| 360° otomatik döndürme | **360°** · `O`; ok simgesinden hız (yavaş / orta / hızlı). Stüdyo ışığı kamerayla döner. |
| Patlatılmış görünüm | Alt çubuktaki kaydırıcı veya oynat düğmesi · `E` |
| Kesit düzlemi | **Kesit** · alt kol / yan kol / boyuna / **gönye (kaynak yüzü)**, hazır kesitler · `C` |
| Döküman ölçüleri ve teknik çizim | **Ölçüler** · ölçü çizgileri ve s.9 çiziminin kesit ucuna bindirilmesi · `D` |
| Renk / folyo | **Renk** düğmesi: beyaz, antrasit gri, siyah, altın meşe, ceviz ve iki renkli (dış renkli, iç beyaz) seçenekler (görsel amaçlı). **Karşılaştır** açıkken ekranı ikiye bölen perdeyi sürükleyin: solda seçili renk, sağda karşılaştırma rengi |
| Üretim hikâyesi | **Araçlar** → Üretim hikâyesi · `U`: ekstrüzyon, 45° kesim (s.6), takviye ve vidalar (s.10), 240–280 °C kaynak (s.14), temizleme, montaj (46 sn) |
| Röntgen merceği | **Araçlar** → Röntgen merceği · `X`: dairenin içinde PVC görünmez, çelik, vida ve contalar görünür; tutamaktan sürükleyin |
| Kamara sayacı | **Araçlar** → Kamaraları say · `K`: kasanın 14, kanadın 11 kamarası sırayla renklenir ve numaralanır (s.9) |
| Isı haritası | **Araçlar** → Isı haritası · `S`: iç 20 °C / dış 0 °C koşulunda kesitteki sıcaklık; kesit yüzleri, kol uçları ve kamaralar renklenir, 10 °C eş sıcaklık çizgisi kalın. EN ISO 10077-2 yöntemiyle yapılmış gösterim amaçlı 2B hesaptır; açıklamada resmi değer yazar (Uf = 1,0 W/(m²K), ift Rosenheim) |
| Canlı 2B kesit | **Kesit** açıkken sol altta: düzlemdeki gerçek kesit, ölçek çubuğu; düzlem drenaj yarığını (A, B, C, D-E) ya da vidayı kesince etiket. Kesit panelindeki anahtarla kapatılır |
| Köşeden pencereye | **Araçlar** → Köşeden pencereye · `P`: genişlik × yükseklik (kasa dış ölçüsü, 620–2000 × 620–2400 mm) ve açılım (içe açılır / çift açılım) seçin; numune, tam pencerenin sol alt köşesi olur. Kart: kesim listesi (s.5, s.10, s.11), drenaj kanalı adedi (s.8, s.11), menteşe adedi ve yerleri (s.17), kol yüksekliği (s.17, s.11), çift açılımda uygun ispanyolet ve makas (s.24). Menteşe, kol ve donanım biçimleri temsilidir; konumları dökümandandır. Sabit cam, kayıt ve kapı tipleri bu sürümde yoktur |
| Ölçüm | **Araçlar** → Ölç · `M`: iki noktaya dokunun; köşe ve kenarlara, kesit açıkken kesit hattına yapışır (0,1 mm). En fazla 3 ölçü. Modelden ölçümdür; döküman ölçüleri s.9'dadır |
| Bilgi işaretleri | **Görünüm** → Bilgi işaretleri |
| Teknik özellikler | Sağ üstte **Özellikler** (döküman değerleri, sayfa numaralarıyla) |
| Gizle / izole et · sıfırla | Listedeki göz ve hedef simgeleri, `H` / `I` · `R` / `Esc` |

## Teknik özet

**Köşe kesiti:**
- **Parçalar:** 26 obje: 45° kaynaklı kasa ve kanat, cam çıtası ve dudakları, 4 conta, 4 galvaniz takviye (kasa A − 153, kanat A − 160 mm), 4 vida: kasada 3,9 × 19 YSB silindir baş (uçtan 150 mm, s.10), kanatta 3,9 × 19 YHB havşa baş (iç köşeden 120 mm, s.11), üç panel ısıcam (ara çıta, nem alıcı, ikincil sızdırmazlık), takoz köprüsü, drenaj yarıkları (A, B, C, D-E: 32 × Ø4 mm; iç köşeden 10 · 32 · 70 · 32 mm, eğik yarıklar kasada 50°, kanatta 60°) ve rüzgarlık.
- **Geometri:** 84.880 üçgen, 27 çizim çağrısı; ısı haritası 86.086 / 28, tam pencere kipi 91.202 / 30; en yoğun durumda (su animasyonu, çizim bindirme, ölçüler ve işaretler birlikte) 94.800 üçgen ve 31 çağrı. Bütçe sınırı 150K üçgen / 50 çağrı. Meshopt + 16 bit nicemleme (`assets/kose/supremo85_kose.glb`, 667 KB).
- **Dokular (KTX2):** AO atlası 2048² (montaj + parça AO), stüdyo HDRI v2 1024 × 512 RGBA16F (Blender/Cycles'ta modellenmiş stüdyo), ahşap folyo deseni 2048 × 512, galvaniz deseni 1024², ısı haritası 535 × 705 R16F (0,2 mm/piksel, 73 KB).
- **Görüntü:** Khronos PBR Neutral ton eşleme, kamerayla dönen stüdyo ışığı, yakın planda ekstrüzyon kalıp izleri ve EPDM greni, gönyede kaynak dikişi çizgisi, zemin ışık havuzu ve temas gölgesi. Son işlem (post-processing) ve gerçek zamanlı gölge yoktur.
- **Kalite kademesi:** Yazılımsal grafikte ya da düşük FPS'te mikro ayrıntılar ve piksel oranı otomatik düşer. `?q=high|low` ile elle seçilebilir.

**Düz kesit:** 22 obje, 74.738 üçgen, 23 çizim çağrısı. Önceki sürümle aynıdır.

**Performans:** Sağ üstteki FPS çipine tıklayıp **Performans testi** ile kendi cihazınızda ölçün.

## Klasör yapısı

```
index.html, css/kose.css, js/kose.js   köşe kesiti (fuar sürümü; kaynak: output/source/viewer-kose)
kesit.html, css/style.css, js/app.js   düz kesit (kaynak: output/source/viewer); style.css ortak yazı tipi ve bileşenler
assets/kose/                           köşe modeli (.glb), AO, stüdyo HDRI v2, ahşap deseni + gömülü kopya (file://)
assets/                                düz kesit modeli ve dokuları + gömülü kopya
vendor/basis/                          KTX2 (Basis) dönüştürücü
başlat.bat / başlat.command            çift tıklayarak başlatma
kiosk-başlat.bat / .command            fuar / kiosk modu
sunucu.py / .js / .ps1 / .pl           yerel statik sunucular (Python / Node / PowerShell / Perl; --kiosk seçeneği)
```

Lisanslar: three.js ve three-mesh-bvh MIT (`vendor/LICENSE-*`), Inter SIL OFL (`fonts/`), Basis Universal dönüştürücü Apache-2.0.
