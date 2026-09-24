# -*- coding: utf-8 -*-
"""file:// (index.html'e çift tıklama) için ikili dosyaları tek bir klasik betiğe gömer.
Çıktı: <site>/assets/assets-embedded.js  ->  window.SUPREMO85_EMBEDDED = { 'göreli yol': 'data:...;base64,...' }"""
import base64, json, os, sys
site = os.path.abspath(sys.argv[1] if len(sys.argv) > 1 else os.path.join(os.path.dirname(__file__), '..', '..', 'site'))
files = {
    'assets/supremo85.glb': 'application/octet-stream',
    'assets/ao.ktx2': 'application/octet-stream',
    'assets/studio.ktx2': 'application/octet-stream',
    'assets/spangle.ktx2': 'application/octet-stream',
    'vendor/basis/basis_transcoder.js': 'text/javascript',
    'vendor/basis/basis_transcoder.wasm': 'application/wasm',
}
parts = []
for rel, mime in files.items():
    data = open(os.path.join(site, rel), 'rb').read()
    parts.append('%s:"data:%s;base64,%s"' % (json.dumps(rel), mime, base64.b64encode(data).decode('ascii')))
out = os.path.join(site, 'assets', 'assets-embedded.js')
with open(out, 'w') as f:
    f.write('/* Supremo 85 - file:// ile açılış için gömülü varlıklar (otomatik üretildi: embed_assets.py) */\n')
    f.write('window.SUPREMO85_EMBEDDED={' + ',\n'.join(parts) + '};\n')
print('yazıldı', out, os.path.getsize(out), 'bayt')
