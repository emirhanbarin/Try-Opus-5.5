# Supremo 85 — 3B Profil Görüntüleyici

Supremo 85 (8500 serisi) uPVC pencere sisteminin kasa + kanat + üçlü cam kesit numunesini (300 mm) gösteren etkileşimli 3B görüntüleyici. Kesit geometrisi teknik dökümanın 9. sayfasındaki (Su tahliye görünümü) vektör çizimden birebir çıkarılmıştır. İnternet bağlantısı gerektirmez; three.js dahil tüm dosyalar bu klasördedir.

## Başlatma

| Sistem | Yapılacak |
|---|---|
| **Windows** | `başlat.bat` dosyasına çift tıklayın. |
| **macOS** | `başlat.command` dosyasına çift tıklayın (ilk açılış için aşağıdaki nota bakın). |
| **Linux** | Klasörde `python3 sunucu.py` çalıştırın. |
| **Her sistemde (sunucusuz)** | `index.html` dosyasına çift tıklayın; site tarayıcıda doğrudan açılır. |

Başlat dosyası yerel sunucuyu açar ve tarayıcı otomatik olarak `http://localhost:8080` adresine gider (port doluysa sıradaki boş port kullanılır). Kapatmak için açılan terminal penceresini kapatın. Önce ZIP'i bir klasöre çıkarın; ZIP içinden doğrudan çift tıklanırsa diğer dosyalar bulunamaz.

**macOS "Apple … doğrulayamadı" uyarısı verirse:** İnternetten indirilen imzasız betiklerde macOS bu uyarıyı gösterir. **Sistem Ayarları → Gizlilik ve Güvenlik** bölümünün altındaki **Yine de Aç** düğmesine basıp dosyayı yeniden açın (macOS 14 ve öncesinde: dosyaya sağ tık → **Aç**). Uyarıyla uğraşmak istemezseniz `index.html` dosyasına çift tıklamanız yeterli.

**Python veya Node yoksa:** bir şey yapmanız gerekmez; başlat dosyası Windows'ta PowerShell'i, macOS'ta Perl'i yedek sunucu olarak kullanır. O da açılmazsa [python.org](https://www.python.org/downloads/) adresinden Python 3 kurup başlat dosyasına yeniden çift tıklayın.

Tarayıcı: WebGL 2 destekli güncel Chrome, Edge, Firefox veya Safari (16.4+).

## Kullanım

| Eylem | Kontrol |
|---|---|
| Döndür / kaydır / yakınlaştır | Sol tık sürükle · sağ tık (veya Shift) sürükle · tekerlek |
| Parça seç / bilgi paneli | Parçaya tıklayın (üzerine gelince vurgulanır) |
| Odaklan | Parçaya çift tıklayın · boşluğa çift tık: görünümü sıfırla |
| Gizle / izole et | Listedeki göz ve hedef simgeleri · `H` / `I` |
| Patlatılmış görünüm | Alt çubuktaki kaydırıcı veya oynat düğmesi · `E` |
| Kesit düzlemi | **Kesit** · enine / boyuna / yatay, konum kaydırıcısı, hazır kesitler · `C` |
| Döküman ölçüleri | **Ölçüler** · `D` |
| Sıfırla / seçimi kaldır | `R` / `Esc` |

## Teknik özet

- Parçalar (22 obje): kasa, kanat, cam çıtası (+ ko-ekstrüde dudakları), kasa dış contası, orta conta, kanat iç contası, dış cam contası, kasa ve kanat galvaniz çelik takviyeleri, 4 adet 3,9×19 takviye vidası, 3 cam paneli, ısıcam ara çıtası, nem alıcı, ikincil sızdırmazlık, 2 cam takoz köprüsü, kasa/kanat drenaj kanalları (32 × Ø4 mm yarıklar) ve drenaj kapağı (rüzgarlık).
- Geometri: 74.738 üçgen, 23 çizim çağrısı (kesit düzlemi göstergesi ve ölçü katmanı açıkken en fazla 26), meshopt + 16 bit nicemleme (`assets/supremo85.glb`, 548 KB).
- Dokular (KTX2/Basis): önceden pişirilmiş AO atlası 2048² (montaj AO + parça AO), galvaniz deseni 1024², stüdyo HDRI 1024×512 RGBA16F.
- Aydınlatma: yerel stüdyo HDRI ortamı + gölgesiz tek yönlü ışık; zemin temas gölgesi yalnızca model hareket ettiğinde yeniden hesaplanır; son işlem (post-processing) yoktur.
- Performans: sağ üstteki FPS çipine tıklayıp **Performans testi** ile kendi cihazınızda ölçün. Düşük FPS'te piksel oranı otomatik düşürülür. İsteğe bağlı adres parametreleri: `?aa=0` (kenar yumuşatma kapalı), `?dpr=1` (piksel oranı üst sınırı).

## Klasör yapısı

```
index.html, css/               arayüz (Inter yazı tipi CSS'e gömülü)
js/app.js                      uygulama + three.js r186, tek dosya (kaynak: output/source/viewer)
assets/                        model (.glb) ve KTX2 dokular
assets/assets-embedded.js      aynı dosyaların gömülü kopyası (index.html doğrudan açılınca kullanılır)
vendor/basis/                  KTX2 (Basis) dönüştürücü
başlat.bat / başlat.command    çift tıklayarak başlatma
sunucu.py / .js / .ps1 / .pl   yerel statik sunucular (Python / Node / PowerShell / Perl)
```

Lisanslar: three.js ve three-mesh-bvh MIT (`vendor/LICENSE-*`), Inter SIL OFL (`fonts/`), Basis Universal dönüştürücü Apache-2.0.
