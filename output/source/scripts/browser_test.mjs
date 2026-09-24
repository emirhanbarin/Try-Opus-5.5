// Headless Chromium smoke test: yükleme, konsol hataları, ekran görüntüsü
// kullanım: node browser_test.mjs <url> <outdir> [senaryo]
import { chromium } from 'playwright-core';
import fs from 'node:fs';
import path from 'node:path';

const url = process.argv[2] || 'http://localhost:8080/';
const out = process.argv[3] || '.';
const scenario = process.argv[4] || 'basic';
fs.mkdirSync(out, { recursive: true });

const exe = fs.existsSync('/opt/pw-browsers/chromium') ? '/opt/pw-browsers/chromium' : undefined;
const browser = await chromium.launch({
  executablePath: exe && fs.statSync(exe).isFile() ? exe : '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
  args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--enable-webgl'],
});
const page = await browser.newPage({ viewport: { width: 1600, height: 900 }, deviceScaleFactor: 1 });
const logs = [];
page.on('console', (m) => logs.push(`[${m.type()}] ${m.text()}`));
page.on('pageerror', (e) => logs.push(`[pageerror] ${e.message}`));
page.on('requestfailed', (r) => logs.push(`[requestfailed] ${r.url()} ${r.failure()?.errorText}`));
const t0 = Date.now();
await page.goto(url, { waitUntil: 'load' });
try {
  await page.waitForSelector('#loader.done', { timeout: 120000, state: 'attached' });
} catch (e) {
  logs.push('[timeout] loader not done: ' + (await page.textContent('#loaderText')));
}
const loadMs = Date.now() - t0;
await page.waitForTimeout(2600);
await page.screenshot({ path: path.join(out, `${scenario}_01_initial.png`) });
fs.writeFileSync(path.join(out, `${scenario}_console.txt`), logs.join('\n') + `\nloadMs=${loadMs}\n`);
console.log('loadMs', loadMs);
console.log(logs.slice(0, 40).join('\n'));
await browser.close();
