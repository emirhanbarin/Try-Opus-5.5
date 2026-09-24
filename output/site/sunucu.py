#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Supremo 85 3B görüntüleyici - yerel statik sunucu (Python 3, ek paket gerektirmez).
Boş bir port bulur (8080'den başlayarak), tarayıcıyı açar ve klasörü sunar."""
import http.server, socketserver, sys, os, socket, threading, webbrowser

ROOT = os.path.dirname(os.path.abspath(__file__))
KIOSK = '--kiosk' in sys.argv          # fuar/kiosk: Edge veya Chrome kiosk modunda, ?kiosk=1 ile açılır
ARGS = [a for a in sys.argv[1:] if not a.startswith('--')]
START_PORT = int(ARGS[0]) if ARGS else 8080
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

def open_kiosk(url):
    """Edge / Chrome'u ayrı profille kiosk (tam ekran, adres çubuksuz) modunda açar; bulunamazsa False."""
    import subprocess, shutil, tempfile
    flags = ['--kiosk', url, '--no-first-run', '--no-default-browser-check', '--overscroll-history-navigation=0',
             '--disable-pinch', '--user-data-dir=' + os.path.join(tempfile.gettempdir(), 'supremo85-kiosk')]
    cands = []
    if sys.platform.startswith('win'):
        for env in ('PROGRAMFILES(X86)', 'PROGRAMFILES', 'LOCALAPPDATA'):
            base = os.environ.get(env)
            if base:
                cands += [(os.path.join(base, 'Microsoft', 'Edge', 'Application', 'msedge.exe'), ['--edge-kiosk-type=fullscreen']),
                          (os.path.join(base, 'Google', 'Chrome', 'Application', 'chrome.exe'), [])]
    elif sys.platform == 'darwin':
        cands += [('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', []),
                  ('/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge', ['--edge-kiosk-type=fullscreen'])]
    else:
        cands += [(shutil.which(n) or '', []) for n in ('google-chrome', 'chromium', 'chromium-browser', 'microsoft-edge')]
    for exe, extra in cands:
        if exe and os.path.exists(exe):
            subprocess.Popen([exe] + flags + extra, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
            return True
    return False

port = free_port(START_PORT)
httpd = Server(('127.0.0.1', port), Handler)
url = 'http://localhost:%d/' % port + ('?kiosk=1' if KIOSK else '')
print('Supremo 85 3B görüntüleyici çalışıyor: ' + url)
print('Kapatmak için bu pencereyi kapatın (veya Ctrl+C).')
if KIOSK: print('Kiosk modu: çıkmak için Alt+F4 (Windows) veya ⌘Q (macOS).')
threading.Timer(0.6, lambda: (KIOSK and open_kiosk(url)) or webbrowser.open(url)).start()
try:
    httpd.serve_forever()
except KeyboardInterrupt:
    pass
