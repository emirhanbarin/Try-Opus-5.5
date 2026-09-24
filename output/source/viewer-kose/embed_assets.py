# -*- coding: utf-8 -*-
"""file:// (index.html'e çift tıklama) için köşe görüntüleyicisinin ikili dosyalarını tek bir klasik betiğe gömer.
Çıktı: <site>/assets/kose/assets-embedded.js  ->  window.SUPREMO85_KOSE_EMBEDDED = { 'göreli yol': 'data:...;base64,...' }"""
import base64, json, os, sys
site = os.path.abspath(sys.argv[1] if len(sys.argv) > 1 else os.path.join(os.path.dirname(__file__), '..', '..', 'site'))
files = {
    'assets/kose/supremo85_kose.glb': 'application/octet-stream',
    'assets/kose/ao_kose.ktx2': 'application/octet-stream',
    'assets/kose/studio2.ktx2': 'application/octet-stream',
    'assets/kose/ahsap.ktx2': 'application/octet-stream',
    'assets/kose/isi.ktx2': 'application/octet-stream',
    'assets/spangle.ktx2': 'application/octet-stream',
    'vendor/basis/basis_transcoder.js': 'text/javascript',
    'vendor/basis/basis_transcoder.wasm': 'application/wasm',
}
parts = []
for rel, mime in files.items():
    data = open(os.path.join(site, rel), 'rb').read()
    parts.append('%s:"data:%s;base64,%s"' % (json.dumps(rel), mime, base64.b64encode(data).decode('ascii')))
out = os.path.join(site, 'assets', 'kose', 'assets-embedded.js')
with open(out, 'w') as f:
    f.write('/* Supremo 85 köşe numunesi - file:// ile açılış için gömülü varlıklar (otomatik üretildi: embed_assets.py) */\n')
    f.write('window.SUPREMO85_KOSE_EMBEDDED={' + ',\n'.join(parts) + '};\n')
print('yazıldı', out, os.path.getsize(out), 'bayt')
