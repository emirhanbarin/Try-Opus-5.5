# Supremo 85 — kaynak dosyalar

Siteyi (`../site`) üreten ham dosyalar ve betikler. Sunulmaz; yeniden üretim için saklanır.

| Dosya | İçerik |
|---|---|
| `supremo85.blend` | Düz kesit numunesi: Blender 5.0 montajı (22 obje, AO UV'leri ile) |
| `supremo85_kose.blend` | 45° kaynaklı köşe numunesi (26 obje, AO + folyo UV'leri ile) |
| `section_mm.json` | PDF s.9'dan çıkarılan kesit poligonları (mm, delikli) |
| `kose_info.json` | Köşedeki yarık, vida ve takviye konumları (mm) |
| `water_path.json` | PDF s.9 su oklarından (42 ok) çıkarılan 3B su tahliye yolu |
| `montaj_denetimi.md`, `assembly_check.json` | Düz numune: 2B/3B çakışma–boşluk denetimi |
| `montaj_denetimi_kose.md`, `assembly_check_kose.json` | Köşe numunesi: aynı denetim |
| `reference/kesit_2d_bindirme.png`, `kesit_3d_bindirme.png` | Kesitlerin ve 3B uç kesitin çizim üzerine bindirmesi |
| `bake/` | AO bake çıktıları (16 bit PNG), paketlenmiş AO, sıkıştırılmamış GLB (`kose_*`: köşe numunesi) |
| `env/` | Stüdyo HDRI: v1 prosedürel (`studio.ktx2`, düz kesit), v2 Blender/Cycles (`studio2.ktx2`, köşe) |
| `tex/` | Galvaniz deseni, ahşap folyo deseni (KTX2 + önizleme) |
| `viewer/` | Düz kesit görüntüleyicisi: ES modül kaynakları, three.js paketi, derleme betiği |
| `viewer-kose/` | Köşe görüntüleyicisi (fuar sürümü): tur, işaretler, su animasyonu, kiosk, çizim bindirme modülleri |

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
   - Takviye boyu s.10 ve s.11'den: kasa A − 153, kanat A − 160 mm. Vida konumu kasada uçtan 150 mm (s.10), kanatta iç köşeden 120 mm (s.11).
2. Montaj denetimi:
   - `BLEND=supremo85_kose.blend OUT=assembly_check_kose.json python3 scripts/check_assembly.py`
   - `CHECK=assembly_check_kose.json OUT=montaj_denetimi_kose.md python3 scripts/assembly_report.py`
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
8. `viewer-kose/build.sh`: kaynakları `../site/js/kose.js`'e derler ve `assets/kose/assets-embedded.js`'i üretir.

**Denetim ve testler**
- `scripts/preview_corner.py`: Cycles geometri önizlemeleri.
- `scripts/overlay_3d.py`: düz numunede 3B/çizim bindirmesi.
- Tarayıcı testleri (Xvfb + yazılımsal GL):
  - `scripts/interaction_test.mjs <url>/kesit.html`: düz kesit.
  - `scripts/interaction_test_kose.mjs <url>/index.html`: köşe; http ve `file://` için ayrı ayrı çalıştırılır.
  - `scripts/kiosk_soak.mjs <url> 30 1920x1080`: kiosk dayanıklılığı.
  - `scripts/bench.mjs`: performans.

Not: Teknik dökümanın kopyası (`reference/Supremo85_teknik_dokuman.pdf`) yalnızca yerelde tutulur, depoya eklenmez.
