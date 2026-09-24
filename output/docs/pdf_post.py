"""Belge PDF'lerinin (teknik dokümantasyon, yeniden yapım kılavuzu) son işlemi (PyMuPDF). build_pdf.mjs çağırır.

  pdf_post.py outline <gövde.pdf>
      Chromium'un başlıklardan kurduğu ana hattı yazar (JSON: [[düzey, başlık, sayfa], …]); build_pdf.mjs içindekiler
      sayfa numaralarını buradan alır.
  pdf_post.py finish <kapak.pdf> <gövde.pdf> <çıktı.pdf> <bilgi.json>
      Kapağı gövdenin önüne ekler; yer imlerini, sayfa etiketlerini (Kapak, 1…n: alt bilgideki numaralarla aynı) ve belge
      bilgilerini yazar. Gövde temel alınır: Chromium'un etiket ağacı (tagged PDF), dil ve iç bağlantılar korunur.
"""
import json
import sys

import pymupdf


def outline(path):
    with pymupdf.open(path) as doc:
        print(json.dumps(doc.get_toc(simple=True), ensure_ascii=False))


def finish(cover, body, out, info_path):
    with open(info_path, encoding='utf-8') as f:
        info = json.load(f)
    doc = pymupdf.open(body)
    with pymupdf.open(cover) as c:
        assert c.page_count == 1, 'kapak tek sayfa olmalı'
        doc.insert_pdf(c, start_at=0)
    doc.set_toc(info['toc'])
    doc.set_page_labels([
        {'startpage': 0, 'prefix': 'Kapak', 'style': '', 'firstpagenum': 1},
        {'startpage': 1, 'prefix': '', 'style': 'D', 'firstpagenum': 1},
    ])
    doc.set_metadata({
        'title': info['title'], 'subject': info['subject'], 'keywords': info['keywords'], 'author': '',
        'creator': info['creator'], 'producer': 'Chromium · PyMuPDF ' + pymupdf.VersionBind,
        'creationDate': info['date'], 'modDate': info['date'],
    })
    doc.set_language('tr')
    doc.set_pagemode('UseOutlines')
    doc.save(out, garbage=4, deflate=True)
    print(f'{out}: {doc.page_count} sayfa')


if __name__ == '__main__':
    cmd, *args = sys.argv[1:]
    {'outline': outline, 'finish': finish}[cmd](*args)
