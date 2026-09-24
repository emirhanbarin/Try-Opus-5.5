// Supremo 85 3B görüntüleyici - yerel statik sunucu (Node.js, ek paket gerektirmez)
const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');
const { exec, spawn } = require('child_process');

const ROOT = __dirname;
const KIOSK = process.argv.includes('--kiosk');   // fuar/kiosk: Edge veya Chrome kiosk modunda, ?kiosk=1 ile açılır
const START = Number(process.argv.slice(2).find((a) => /^\d+$/.test(a))) || 8080;

function openKiosk(url) {
  const flags = ['--kiosk', url, '--no-first-run', '--no-default-browser-check', '--overscroll-history-navigation=0',
    '--disable-pinch', '--user-data-dir=' + path.join(os.tmpdir(), 'supremo85-kiosk')];
  const c = [];
  if (process.platform === 'win32') {
    for (const env of ['PROGRAMFILES(X86)', 'PROGRAMFILES', 'LOCALAPPDATA']) {
      const base = process.env[env]; if (!base) continue;
      c.push([path.join(base, 'Microsoft', 'Edge', 'Application', 'msedge.exe'), ['--edge-kiosk-type=fullscreen']]);
      c.push([path.join(base, 'Google', 'Chrome', 'Application', 'chrome.exe'), []]);
    }
  } else if (process.platform === 'darwin') {
    c.push(['/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', []], ['/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge', ['--edge-kiosk-type=fullscreen']]);
  } else {
    for (const n of ['/usr/bin/google-chrome', '/usr/bin/chromium', '/usr/bin/chromium-browser', '/usr/bin/microsoft-edge']) c.push([n, []]);
  }
  for (const [exe, extra] of c) {
    if (fs.existsSync(exe)) { spawn(exe, [...flags, ...extra], { detached: true, stdio: 'ignore' }).unref(); return true; }
  }
  return false;
}
const TYPES = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8', '.json': 'application/json', '.wasm': 'application/wasm', '.glb': 'model/gltf-binary',
  '.ktx2': 'image/ktx2', '.woff2': 'font/woff2', '.png': 'image/png', '.svg': 'image/svg+xml', '.txt': 'text/plain; charset=utf-8',
  '.md': 'text/markdown; charset=utf-8',
};

const server = http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split('?')[0]);
  if (p.endsWith('/')) p += 'index.html';
  const file = path.normalize(path.join(ROOT, p));
  if (!file.startsWith(ROOT)) { res.writeHead(403); return res.end(); }
  fs.stat(file, (err, st) => {
    if (err || !st.isFile()) { res.writeHead(404); return res.end('Bulunamadı'); }
    res.writeHead(200, { 'Content-Type': TYPES[path.extname(file).toLowerCase()] || 'application/octet-stream', 'Content-Length': st.size, 'Cache-Control': 'no-cache' });
    fs.createReadStream(file).pipe(res);
  });
});

function listen(port) {
  server.once('error', (e) => { if (e.code === 'EADDRINUSE' && port < START + 40) listen(port + 1); else { console.error(e.message); process.exit(1); } });
  server.listen(port, '127.0.0.1', () => {
    const url = `http://localhost:${port}/` + (KIOSK ? '?kiosk=1' : '');
    console.log('Supremo 85 3B görüntüleyici çalışıyor: ' + url);
    console.log('Kapatmak için bu pencereyi kapatın (veya Ctrl+C).');
    if (KIOSK) { console.log('Kiosk modu: çıkmak için Alt+F4 (Windows) veya ⌘Q (macOS).'); if (openKiosk(url)) return; }
    const cmd = process.platform === 'win32' ? `start "" "${url}"` : process.platform === 'darwin' ? `open "${url}"` : `xdg-open "${url}"`;
    exec(cmd, () => {});
  });
}
listen(START);
