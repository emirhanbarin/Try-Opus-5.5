# Montaj denetimi — 45° kaynaklı köşe numunesi

Kesit geometrisi PDF s.9 vektörlerinden çıkarılmıştır. Temas eden tüm parça çiftleri (aralık ≤ 0,05 mm):

| Parça A | Parça B | Aralık (mm) | Kesişim alanı (mm²) | En büyük gömülme (mm) |
|---|---|---:|---:|---:|
| Kanat iç contası | Kanat profili | 0.0000 | 0.0147 | 0.0508 |
| Kasa profili | Kanat iç contası | 0.0000 | 0.0305 | 0.0053 |
| Kasa dış contası | Kanat profili | 0.0000 | 0.0237 | 0.0053 |
| Dış cam contası | Kanat profili | 0.0000 | 0.0003 | 0.0044 |
| Orta conta | Kanat profili | 0.0000 | 0.0076 | 0.0042 |
| Kasa profili | Orta conta | 0.0000 | 0.0029 | 0.0022 |
| İkincil sızdırmazlık 2 | Ara çıta 2 | 0.0000 | 0.0010 | 0.0021 |
| İkincil sızdırmazlık 1 | Ara çıta 1 | 0.0000 | 0.0010 | 0.0021 |
| Çıta dudağı (üst) | Cam (iç) | 0.0000 | 0.0004 | 0.0017 |
| Cam çıtası | Çıta dudağı (üst) | 0.0000 | 0.0001 | 0.0012 |
| Çıta dudağı (alt) | Cam (iç) | 0.0000 | 0.0001 | 0.0011 |
| Kasa profili | Kasa dış contası | 0.0000 | 0.0000 | 0.0007 |
| Cam takoz köprüsü | Kanat profili | 0.0000 | 0.0003 | 0.0006 |
| Cam (iç) | İkincil sızdırmazlık 2 | 0.0000 | 0.0025 | 0.0005 |
| Cam (iç) | Ara çıta 2 | 0.0000 | 0.0016 | 0.0003 |
| Cam (dış) | Ara çıta 1 | 0.0000 | 0.0005 | 0.0001 |
| Cam (dış) | İkincil sızdırmazlık 1 | 0.0000 | 0.0005 | 0.0001 |
| Dış cam contası | Cam (dış) | 0.0000 | 0.0006 | 0.0001 |
| Cam çıtası | Çıta dudağı (alt) | 0.0000 | 0.0000 | 0.0000 |
| Cam çıtası | Kanat profili | 0.0011 | 0.0000 | 0.0000 |
| Cam takoz köprüsü | Cam (dış) | 0.0000 | 0.0000 | 0.0000 |
| Cam takoz köprüsü | Cam (orta) | 0.0000 | 0.0000 | 0.0000 |
| Cam takoz köprüsü | Cam (iç) | 0.0000 | 0.0000 | 0.0000 |
| Cam takoz köprüsü | İkincil sızdırmazlık 1 | 0.0001 | 0.0000 | 0.0000 |
| Cam takoz köprüsü | İkincil sızdırmazlık 2 | 0.0001 | 0.0000 | 0.0000 |
| Cam (orta) | İkincil sızdırmazlık 1 | 0.0001 | 0.0000 | 0.0000 |
| Cam (orta) | İkincil sızdırmazlık 2 | 0.0005 | 0.0000 | 0.0000 |
| Cam (orta) | Ara çıta 1 | 0.0003 | 0.0000 | 0.0000 |
| Cam (orta) | Ara çıta 2 | 0.0004 | 0.0000 | 0.0000 |

**En büyük gömülme derinliği: 0.051 mm** — kanat iç contasının ok (tırnak) ayağının yuva duvarına sıkı geçmesi; tırnaklı conta ayağının çalışma şekli budur ve çizimdeki çizgi kalınlığının (0,17 mm) altındadır. Diğer tüm temaslar ≤ 0.005 mm (sayısal gürültü).
Çelik takviyeler kamaralarına 0,5 mm (kasa) / ≥ 0,5 mm (kanat) montaj boşluğuyla oturur; bu boşluk dökümandaki çizimde de vardır.

## 3B denetim (Blender, BVH + boolean kesişim)

| Parça A | Parça B | Üçgen kesişimi | En yakın mesafe (mm) | Kesişim hacmi (mm³) |
|---|---|---:|---:|---:|
| cam_citasi | kanat_vidasi_alt | 0 | None | None |
| cam_citasi | kanat_vidasi_yan | 0 | None | None |
| cam_takoz_koprusu | kanat_drenaj_kanallari | 0 | None | None |
| drenaj_kapagi | kasa_drenaj_kanallari | 0 | 0.0013 | None |
| drenaj_kapagi | kasa_profili | 0 | 0.0013 | None |
| kanat_celik_takviye_alt | kanat_vidasi_alt | 0 | 0.0116 | None |
| kanat_celik_takviye_yan | kanat_vidasi_yan | 0 | 0.0116 | None |
| kanat_drenaj_kanallari | kanat_profili | 13 | 0.0 | None |
| kanat_drenaj_kanallari | kasa_profili | 0 | None | None |
| kanat_drenaj_kanallari | orta_conta | 0 | None | None |
| kanat_profili | kanat_vidasi_alt | 0 | 0.0035 | None |
| kanat_profili | kanat_vidasi_yan | 0 | 0.0035 | None |
| kanat_vidasi_alt | kasa_profili | 0 | None | None |
| kanat_vidasi_yan | kasa_profili | 0 | None | None |
| kasa_celik_takviye_alt | kasa_vidasi_alt | 0 | 0.0116 | None |
| kasa_celik_takviye_yan | kasa_vidasi_yan | 0 | 0.0116 | None |
| kasa_drenaj_kanallari | kasa_profili | 17 | 0.0 | None |
| kasa_profili | kasa_vidasi_alt | 0 | 0.0005 | None |
| kasa_profili | kasa_vidasi_yan | 0 | 0.0005 | None |

Kasa vidaları (3,9×19 YSB, s.10) silindir başla kasa alt yüzeyine oturur; kanat vidaları (3,9×19 YHB, s.11) yüzeyle sıfır havşalıdır. Delikler vida zarfıyla açıldığından PVC ve çelikle kesişim yoktur (0,0005–0,0116 mm aralık). Silindir baş ölçüsü (Ø7,5 × 2,8 mm) DIN 7504-N'den alınmıştır; döküman baş ölçüsü vermez.
Rüzgarlık pimleri 4 mm yarıkta 0,15 mm boşlukla durur, tırnak yakası dış duvarın arkasına geçer.

Gönye: iki kol her kesit noktasında gönye düzleminde (X = Y) aynı köşe noktasını paylaşır; boolean kullanılmaz, kaynaklı profiller tek parça kapalı katıdır. Köşedeki temas çiftleri düz numunedekilerle aynıdır; gönyeden kaynaklanan yeni çakışma yoktur.
