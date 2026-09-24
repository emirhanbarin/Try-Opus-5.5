# Supremo 85 — 3B Profil Görüntüleyici

Supremo 85 (8500 serisi) uPVC pencere sisteminin kasa + kanat + üçlü cam kesit numunesini (300 mm) gösteren etkileşimli 3B görüntüleyici. Kesit geometrisi teknik dökümanın 9. sayfasındaki (Su tahliye görünümü) vektör çizimden birebir çıkarılmıştır. İnternet bağlantısı gerektirmez; three.js dahil tüm dosyalar bu klasördedir.

## Başlatma

| Sistem | Yapılacak |
|---|---|
| **Windows** | `başlat.bat` dosyasına çift tıklayın. |
| **macOS** | `başlat.command` dosyasına çift tıklayın. İlk açılışta "tanımlanamayan geliştirici" uyarısı çıkarsa dosyaya sağ tıklayıp **Aç**'ı seçin. |
| **Linux** | Klasörde `python3 sunucu.py` çalıştırın. |

Yerel sunucu açılır ve tarayıcı otomatik olarak `http://localhost:8080` adresine gider (port doluysa sıradaki boş port kullanılır). Kapatmak için açılan terminal penceresini kapatın.

**Python veya Node yoksa:** bir şey yapmanız gerekmez; başlat dosyası Windows'ta PowerShell'i, macOS'ta Perl'i yedek sunucu olarak kullanır. O da açılmazsa [python.org](https://www.python.org/downloads/) adresinden Python 3 kurup başlat dosyasına yeniden çift tıklayın.

> `index.html` dosyası doğrudan (çift tıklayarak) açılırsa tarayıcı güvenlik nedeniyle yerel model dosyalarını engeller; bu yüzden başlat dosyasını kullanın.

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
index.html, css/, js/          arayüz ve uygulama (derleme gerektirmez)
assets/                        model (.glb) ve KTX2 dokular
vendor/                        three.js r186 paketi, basis dönüştürücü
fonts/                         Inter (OFL)
başlat.bat / başlat.command    çift tıklayarak başlatma
sunucu.py / .js / .ps1 / .pl   yerel statik sunucular (Python / Node / PowerShell / Perl)
```

Lisanslar: three.js ve three-mesh-bvh MIT (`vendor/LICENSE-*`), Inter SIL OFL (`fonts/`), Basis Universal dönüştürücü Apache-2.0.
