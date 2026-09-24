# Supremo 85 — kaynak dosyalar

Siteyi (`../site`) üreten ham dosyalar ve betikler. Sunulmaz; yeniden üretim için saklanır.

| Dosya | İçerik |
|---|---|
| `supremo85.blend` | Blender 5.0 montajı (22 obje, AO UV'leri ile) |
| `section_mm.json` | PDF s.9'dan çıkarılan kesit poligonları (mm, delikli) |
| `montaj_denetimi.md`, `assembly_check.json` | 2B/3B çakışma–boşluk denetimi |
| `reference/kesit_2d_bindirme.png` | Çıkarılan kesitlerin çizim üzerine bindirmesi |
| `reference/kesit_3d_bindirme.png` | 3B modelin uç kesiti (ortografik, 12 px/mm) çizim üzerine |
| `bake/` | AO bake çıktıları (16 bit PNG), paketlenmiş AO, sıkıştırılmamış GLB |
| `env/`, `tex/` | Stüdyo HDRI ve galvaniz deseni (KTX2 + önizleme) |

Yeniden üretim (Python 3.11 + `pip install bpy pymupdf shapely scipy pillow`, KTX-Software 4.3, Node + `@gltf-transform/cli`):

1. `scripts/final2d.py` — PDF vektörlerinden `section_mm.json` (ölçek: 3,0082 pt/mm, dökümandaki 85/104,5/124/74/84/40/32 ölçüleriyle kalibre)
2. `scripts/build_model.py` — ekstrüzyon, pah, drenaj yarıkları, vida delikleri, vidalar, rüzgarlık → `supremo85.blend`
3. `scripts/check_assembly.py`, `scripts/assembly_report.py` — montaj denetimi
4. `scripts/bake_ao.py` — UV atlası + Cycles AO (montaj + parça) + `bake/supremo85_raw.glb`
5. `gltf-transform meshopt bake/supremo85_raw.glb ../site/assets/supremo85.glb --quantization-volume scene --quantize-position 16 --quantize-normal 12 --quantize-texcoord 14`
6. `ktx create --encode basis-lz ... bake/ao_packed.png ../site/assets/ao.ktx2`; `scripts/make_studio_hdri.py`, `scripts/make_spangle.py`
7. `scripts/overlay_3d.py` — 3B/çizim bindirme doğrulaması; `scripts/interaction_test.mjs`, `scripts/bench.mjs` — tarayıcı testleri

Not: Teknik dökümanın kopyası (`reference/Supremo85_teknik_dokuman.pdf`) yalnızca yerelde tutulur, depoya eklenmez.
