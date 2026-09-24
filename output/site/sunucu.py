#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Supremo 85 3B görüntüleyici - yerel statik sunucu (Python 3, ek paket gerektirmez).
Boş bir port bulur (8080'den başlayarak), tarayıcıyı açar ve klasörü sunar."""
import http.server, socketserver, sys, os, socket, threading, webbrowser

ROOT = os.path.dirname(os.path.abspath(__file__))
START_PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8080
TYPES = {
    '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.mjs': 'text/javascript; charset=utf-8',
    '.css': 'text/css; charset=utf-8', '.json': 'application/json', '.wasm': 'application/wasm', '.glb': 'model/gltf-binary',
    '.ktx2': 'image/ktx2', '.woff2': 'font/woff2', '.png': 'image/png', '.svg': 'image/svg+xml', '.txt': 'text/plain; charset=utf-8',
    '.md': 'text/markdown; charset=utf-8',
}

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *a, **kw):
        super().__init__(*a, directory=ROOT, **kw)
    def guess_type(self, path):
        return TYPES.get(os.path.splitext(path)[1].lower(), 'application/octet-stream')
    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache')
        super().end_headers()
    def log_message(self, *a):
        pass

class Server(socketserver.ThreadingMixIn, http.server.HTTPServer):
    daemon_threads = True
    allow_reuse_address = False

def free_port(start):
    for p in range(start, start + 40):
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
            try:
                s.bind(('127.0.0.1', p)); return p
            except OSError:
                continue
    raise SystemExit('Boş port bulunamadı.')

port = free_port(START_PORT)
httpd = Server(('127.0.0.1', port), Handler)
url = 'http://localhost:%d/' % port
print('Supremo 85 3B görüntüleyici çalışıyor: ' + url)
print('Kapatmak için bu pencereyi kapatın (veya Ctrl+C).')
threading.Timer(0.6, lambda: webbrowser.open(url)).start()
try:
    httpd.serve_forever()
except KeyboardInterrupt:
    pass
