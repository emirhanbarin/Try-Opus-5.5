# Supremo 85 — kaynak dosyalar

Siteyi (`../site`) üreten ham dosyalar ve betikler. Sunulmaz; yeniden üretim için saklanır.

| Dosya | İçerik |
|---|---|
| `supremo85.blend` | Düz kesit numunesi: Blender 5.0 montajı (22 obje, AO UV'leri ile) |
| `supremo85_kose.blend` | 45° kaynaklı köşe numunesi (26 obje, AO + folyo UV'leri ile) |
| `section_mm.json` | PDF s.9'dan çıkarılan kesit poligonları (mm, delikli) |
| `kose_info.json` | Köşedeki yarık, vida ve takviye konumları (mm) |
| `thermal_check.json` | Isı haritası hesabının denetimi: enerji dengesi, ızgara yakınsaması, iç denetim Uf'si (arayüzde gösterilmez) |
| `water_path.json` | PDF s.9 su oklarından (42 ok) çıkarılan 3B su tahliye yolu |
| `montaj_denetimi.md`, `assembly_check.json` | Düz numune: 2B/3B çakışma–boşluk denetimi |
| `montaj_denetimi_kose.md`, `assembly_check_kose.json` | Köşe numunesi: aynı denetim |
| `reference/kesit_2d_bindirme.png`, `kesit_3d_bindirme.png` | Kesitlerin ve 3B uç kesitin çizim üzerine bindirmesi |
| `bake/` | AO bake çıktıları (16 bit PNG), paketlenmiş AO, sıkıştırılmamış GLB (`kose_*`: köşe numunesi) |
| `env/` | Stüdyo HDRI: v1 prosedürel (`studio.ktx2`, düz kesit), v2 Blender/Cycles (`studio2.ktx2`, köşe) |
| `tex/` | Galvaniz deseni, ahşap folyo deseni (KTX2 + önizleme) |
| `viewer/` | Düz kesit görüntüleyicisi: ES modül kaynakları, three.js paketi, derleme betiği |
| `viewer-kose/` | Köşe görüntüleyicisi (fuar sürümü): tur, işaretler, su animasyonu, kiosk, çizim bindirme, üretim hikâyesi (`story.js`), röntgen merceği (`lens.js`), kamara sayacı (`chambers.js`), ısı haritası (`thermal.js`), canlı 2B kesit (`section-inset.js`), ölçüm (`measure.js`), köşeden pencereye (`configurator.js`, `window.js`; hesaplar `configurator-data.js`) modülleri |

Yeniden üretim (Python 3.11 + `pip install bpy pymupdf shapely scipy pillow`, KTX-Software 4.3, Node + `@gltf-transform/cli`, `esbuild`, `playwright-core`):

**Düz kesit**
1. `scripts/final2d.py`: PDF vektörlerinden `section_mm.json` üretir. Ölçek 3,0082 pt/mm; dökümandaki 85 / 104,5 / 124 / 74 / 84 / 40 / 32 ölçüleriyle kalibre edilir.
2. `scripts/build_model.py`: ekstrüzyon, pah, drenaj yarıkları, vida delikleri, vidalar ve rüzgarlık → `supremo85.blend`.
3. `scripts/check_assembly.py` ve `scripts/assembly_report.py`: montaj denetimi.
4. `scripts/bake_ao.py`: UV atlası, Cycles AO (montaj + parça) ve `bake/supremo85_raw.glb`.
5. Sıkıştırma: `gltf-transform meshopt bake/supremo85_raw.glb ../site/assets/supremo85.glb --quantization-volume scene --quantize-position 16 --quantize-normal 12 --quantize-texcoord 14`.
6. Dokular: `ktx create --encode basis-lz ... bake/ao_packed.png ../site/assets/ao.ktx2`; ardından `scripts/make_studio_hdri.py` ve `scripts/make_spangle.py`.
7. `viewer/build.sh`: kaynakları `../site/js/app.js`'e derler ve `assets/assets-embedded.js`'i üretir.

**Köşe numunesi**
1. `scripts/build_corner.py` → `supremo85_kose.blend` ve `kose_info.json`.
   - Gönye boolean kullanılmadan kurulur: her kesit noktası için kol `u = sy`'den başlar (gönye düzlemi X = Y).
   - Yarık düzeni s.8 ve s.11'den: iç köşeden 10 mm, sonra 32 mm yarık, 70 mm ara, 32 mm yarık. Eğik yarık açısı kasada 50°, kanatta 60° (düşey referansa göre).
   - Takviye boyu s.10 ve s.11'den: kasa A − 153, kanat A − 160 mm. Vidalar: kasada 3,9 × 19 YSB silindir baş, uçtan 150 mm (s.10); kanatta 3,9 × 19 YHB havşa baş, iç köşeden 120 mm (s.11). `build_model.screw_mesh(head='pan')` silindir başı üretir (DIN 7504-N ölçüleri; varsayılan havşa baş değişmez).
2. Montaj denetimi:
   - `BLEND=supremo85_kose.blend OUT=assembly_check_kose.json python3 scripts/check_assembly.py`
   - `CHECK=assembly_check_kose.json OUT=montaj_denetimi_kose.md python3 scripts/assembly_report.py` (`TITLE`, `NOTE` ve `SCREWS` ile başlık, not ve vida paragrafı verilir)
3. AO: `CORNER=1 BLEND=supremo85_kose.blend PREFIX=kose_ GLB_OUT=supremo85_kose_raw.glb python3 scripts/bake_ao.py`.
   - Gönye düzleminde UV dikişi açılır; her kol kendi ekseninde ×0,25 sıkıştırılır.
   - Folyo maskesi ikinci UV'ye (`FOIL`) yazılır: dış kontur yan yüzleri folyo, uç kesit ve kamara duvarları beyaz çekirdek.
4. Sıkıştırma ve dokular (düz kesitle aynı ayarlar):
   - `gltf-transform meshopt` → `../site/assets/kose/supremo85_kose.glb`
   - `ktx create --encode basis-lz` → `ao_kose.ktx2`
5. `scripts/render_studio_hdri.py env/studio2.ktx2`: Blender/Cycles'ta modellenmiş stüdyonun panoraması.
   - Yön işaretleriyle three.js eşdikdörtgen eksenine otomatik hizalanır.
   - Float16 mantisi 7 bite indirilir.
6. `scripts/make_wood_decor.py tex/ahsap.png`: döşenebilir prosedürel ahşap deseni, ardından `ktx create` → `ahsap.ktx2`.
7. Görüntüleyiciye gömülen PDF verileri:
   - `scripts/extract_drawing_lines.py`: s.9 çizim bindirmesi → `viewer-kose/js/drawing-data.js`.
   - `scripts/extract_water_path.py`: s.9 su okları + yarık konumları → `viewer-kose/js/water-path.js`. Yol, kesit poligonlarına göre denetlenir.
   - `scripts/extract_rings.py`: `section_mm.json` → `viewer-kose/js/rings-data.js` (0,05 mm sadeleştirilmiş dış konturlar: profiller, contalar, çıta dudakları, ısıcam ara çıtası ve sızdırmazlık; kaynak taşıntısı ve tam pencere bunları süpürür) ve `chambers-data.js` (kasa 14, kanat 11 kamara).
8. Isı haritası: `KTX=<ktx yolu> python3 scripts/thermal_section.py` (yaklaşık 1 dk).
   - `section_mm.json` kesiti 0,1 mm ızgarada sonlu farklarla çözülür (EN ISO 10077-2 yöntemi): iç 20 °C / Rsi 0,13, dış 0 °C / Rse 0,04; PVC 0,17 · EPDM 0,25 · çelik 50 W/(m·K); ısıcam 0,035 W/(m·K) yalıtım paneliyle temsil edilir; kapalı boşluklar §6.4.2 eşdeğer iletkenliğiyle.
   - Çıktılar: `../site/assets/kose/isi.ktx2` (R16F, 0,2 mm/piksel, T / 20 °C; 1/1024 basamak), `viewer-kose/js/thermal-data.js` (doku kutusu), `thermal_check.json`.
   - Denetim: iç ve dış ısı akısı farkı ~0; 0,1 → 0,2 mm ızgarada akı farkı %0,15; hesaplanan Uf ≈ 1,03, resmi değer 1,0 (ift). Hesaplanan Uf arayüzde gösterilmez; renkler "gösterim amaçlı" etiketlidir.
9. `viewer-kose/build.sh`: kaynakları `../site/js/kose.js`'e derler ve `assets/kose/assets-embedded.js`'i üretir. three.js alt kümesi değişirse önce `viewer-kose/build-vendor.sh` (`vendor-entry.js` → `vendor/three-bundle.min.js`).

**Denetim ve testler**
- `scripts/preview_corner.py`: Cycles geometri önizlemeleri.
- `scripts/overlay_3d.py`: düz numunede 3B/çizim bindirmesi.
- Tarayıcı testleri (Xvfb + yazılımsal GL):
  - `scripts/interaction_test.mjs <url>/kesit.html`: düz kesit.
  - `scripts/interaction_test_kose.mjs <url>/index.html`: köşe; http ve `file://` için ayrı ayrı çalıştırılır.
  - `scripts/test_configurator.mjs` (tarayıcısız, Node): köşeden pencereye hesapları; s.5, s.8, s.10, s.11, s.17 ve s.24 tabloları, sınır değerler (500, 1000, 1100, 1400 mm…), aralık dışı uyarılar ve yarık yerlerinin `kose_info.json` ile tutarlılığı.
  - `scripts/kiosk_soak.mjs <url> 30 1920x1080`: kiosk dayanıklılığı.
  - `scripts/bench.mjs`: performans.

**Teknik dokümantasyon (PDF)**
- `../docs/dokuman.html` → `../docs/Supremo85_3B_teknik_dokumantasyon.pdf`: `node ../docs/build_pdf.mjs` (Chromium + PyMuPDF; playwright-core başka klasördeyse `PW_MODULES=<klasör>`).
  - Boyut, satır sayısı, sürüm ve commit listesi derleme sırasında dosyalardan ve git'ten doldurulur; içindekiler iki geçişte sayfalanır.
- Ekran görüntüleri `../docs/shots.mjs` (→ `docs/img/`), bütçe tablosu `../docs/budget.mjs` ile alınır; ikisi de yerel sunucudaki siteye bağlanır.

Not: Teknik dökümanın (`reference/Supremo85_teknik_dokuman.pdf`) ve ift Rosenheim Uf test belgesinin (`reference/Supremo8500_ift_Uf_sertifika.pdf`) kopyaları yalnızca yerelde tutulur, depoya eklenmez. Görüntüleyicideki performans değerleri (`viewer-kose/js/parts-data.js` → `PERFORMANCE`) yalnızca bu belgeden alınır.
