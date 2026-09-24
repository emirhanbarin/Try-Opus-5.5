// Teknik dokümantasyonu PDF'e derler: dokuman.html → Supremo85_3B_teknik_dokumantasyon.pdf
// kullanım: node build_pdf.mjs              (git, python3 + PyMuPDF, playwright-core ve Chromium gerekir)
//   playwright-core başka bir klasörde kuruluysa: PW_MODULES=<node_modules'u içeren klasör> node build_pdf.mjs
//   Chromium yolu: CHROMIUM (varsayılan /opt/pw-browsers/chromium)
// Adımlar:
//   1. {{…}} yer tutucuları dosyalardan doldurulur: yazı tipi (site/css/style.css içindeki gömülü Inter), sürüm ve tarih
//      (site/ ya da source/'ta .md dışı bir dosyaya dokunan son commit), commit listesi, dosya boyutları ({{KB:yol}}) ve
//      satır sayıları ({{LINES:yol,…}}); yollar output/'a göredir.
//   2. İçindekiler h1/h2 başlıklarından kurulur. Gövde iki kez basılır: ilk baskının PDF ana hattından her başlığın sayfası
//      okunur, ikinci baskıda içindekilere yazılır ve sayfaların değişmediği denetlenir.
//   3. Kapak ayrı basılır (kenar boşluğu ve alt bilgi yok); pdf_post.py kapağı gövdenin önüne ekler, yer imlerini,
//      sayfa etiketlerini ve belge bilgilerini yazar.
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { createRequire } from 'node:module';
import { fileURLToPath, pathToFileURL } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const out = path.resolve(here, '..');                                   // output/
const PDF = path.join(here, 'Supremo85_3B_teknik_dokumantasyon.pdf');
const TITLE = 'Supremo 85 3B Görüntüleyici — Teknik Dokümantasyon';
const FOOTER = 'Supremo 85 3B Görüntüleyici · Teknik dokümantasyon';

async function loadChromium() {
  try { return (await import('playwright-core')).chromium; } catch { /* aşağıda PW_MODULES denenir */ }
  if (!process.env.PW_MODULES) throw new Error('playwright-core bulunamadı: PW_MODULES=<node_modules içeren klasör> verin');
  return createRequire(path.join(path.resolve(process.env.PW_MODULES), 'x.js'))('playwright-core').chromium;
}
const git = (...a) => execFileSync('git', a, { cwd: here, encoding: 'utf8' }).trim();
const py = (...a) => execFileSync('python3', [path.join(here, 'pdf_post.py'), ...a], { encoding: 'utf8' }).trim();
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const decode = (s) => s.replace(/&(lt|gt|quot|#39|amp);/g, (m, e) => ({ lt: '<', gt: '>', quot: '"', '#39': "'", amp: '&' })[e]);
const num = (n, d = 0) => n.toLocaleString('tr-TR', { minimumFractionDigits: d, maximumFractionDigits: d });

// ---- 1. yer tutucular
const css = fs.readFileSync(path.join(out, 'site/css/style.css'), 'utf8');
const fontFaces = css.match(/@font-face\s*\{[^}]*\}/g);
if (!fontFaces?.length) throw new Error('style.css içinde @font-face yok');
const latinFace = fontFaces.find((f) => /U\+0000-00FF/.test(f));       // alt bilgi yalnız Latin alt kümesini kullanır

// sürüm: sitenin ya da üretim hattının son değiştiği commit (belgeler ve README'ler sayılmaz; belge yeniden derlenince sürüm kaymaz)
const top = git('rev-parse', '--show-toplevel');
const spec = ['site', 'source'].map((d) => path.relative(top, path.join(out, d))).concat(':(exclude,glob)**/*.md');
const log = (fmt, a, paths = []) => execFileSync('git', ['log', ...a, `--format=${fmt}`, '--', ...paths], { cwd: top, encoding: 'utf8' }).trim();
const VERSION = log('%h', ['-1'], spec);
const DATE = log('%ad', ['-1', '--date=format:%d.%m.%Y'], spec);
const PDF_DATE = log('%ad', ['-1', '--date=format:D:%Y%m%d%H%M%S%z'], spec).replace(/([+-]\d\d)(\d\d)$/, "$1'$2'");
const COMMITS = log('%h%x09%ad%x09%s', ['--date=format:%d.%m.%Y']).split('\n').map((l) => {
  const [h, d, s] = l.split('\t');
  return `    <tr><td><code>${h}</code></td><td class="c">${d}</td><td>${esc(s)}</td></tr>`;
}).join('\n');

function size(p) {
  const b = fs.statSync(path.join(out, p)).size;
  if (b >= 1048576) return num(b / 1048576, 2) + ' MB';
  return num(b / 1024, b < 102400 ? 1 : 0) + ' KB';
}
const lines = (list) => num(list.split(',').reduce((s, p) => s + (fs.readFileSync(path.join(out, p.trim()), 'utf8').match(/\n/g) || []).length, 0));

let html = fs.readFileSync(path.join(here, 'dokuman.html'), 'utf8')
  .replace('{{FONTS}}', () => fontFaces.join('\n'))
  .replace(/\{\{VERSION\}\}/g, VERSION).replace(/\{\{DATE\}\}/g, DATE).replace('{{COMMITS}}', () => COMMITS)
  .replace(/\{\{KB:([^}]+)\}\}/g, (m, p) => size(p))
  .replace(/\{\{LINES:([^}]+)\}\}/g, (m, l) => lines(l));
const left = html.match(/\{\{(?!\.\.\.)[^}]*\}\}/g);
if (left) throw new Error('doldurulmamış yer tutucu: ' + left.join(', '));

// ---- 2. içindekiler
const heads = [...html.matchAll(/<h([12]) id="(s\d+(?:-\d+)?)">([\s\S]*?)<\/h\1>/g)].map(([, lv, id, inner]) => {
  const n = lv === '1' ? inner.match(/<span class="num">([^<]*)<\/span>/)[1] : null;
  const text = decode(inner.replace(/<span class="num">[^<]*<\/span>/, '').replace(/<[^>]+>/g, '')).replace(/\s+/g, ' ').trim();
  const [, no, title] = lv === '1' ? [null, n, text] : text.match(/^(\d+\.\d+)\s+(.*)$/);
  return { level: +lv, id, no, title };
});
const tocHtml = (pages) => heads.map((h, i) =>
  `<li class="l${h.level}"><a href="#${h.id}"><span class="tn">${h.no}</span>${esc(h.title)}</a><span class="pg">${pages ? pages[i] : '00'}</span></li>`).join('\n');
const withToc = (pages) => html.replace('<ol id="tocList"></ol>', `<ol id="tocList">\n${tocHtml(pages)}\n</ol>`);
const inject = (h, style) => h.replace('</head>', `<style>${style}</style>\n</head>`);

const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'dokuman-'));
const page_html = path.join(here, '_build.html');                        // göreli görsel yolları (img/) için docs/ içinde
const chromium = await loadChromium();
const browser = await chromium.launch({ executablePath: process.env.CHROMIUM || '/opt/pw-browsers/chromium' });
const page = await browser.newPage();
async function render(doc, file, opts) {
  fs.writeFileSync(page_html, doc);
  await page.goto(pathToFileURL(page_html).href, { waitUntil: 'load' });
  await page.evaluate(async () => { await document.fonts.ready; await Promise.all([...document.images].map((i) => i.decode().catch(() => {}))); });
  await page.pdf({ path: file, preferCSSPageSize: true, printBackground: true, ...opts });
}
const footer = `<style>${latinFace}
  .f { box-sizing: border-box; width: 100%; padding: 0 16mm 6mm; display: flex; justify-content: space-between; align-items: flex-end;
       font-family: 'Inter', sans-serif; font-size: 7.2pt; color: #8a95a4; -webkit-print-color-adjust: exact; }
  .f b { font-weight: 600; color: #566273; }
</style><div class="f"><span>${FOOTER}</span><span><b class="pageNumber"></b> / <span class="totalPages"></span></span></div>`;
const bodyOpts = { tagged: true, outline: true, displayHeaderFooter: true, headerTemplate: '<span></span>', footerTemplate: footer };
const norm = (s) => s.replace(/\s+/g, '');

// gövdeyi basar ve Chromium'un ana hattından her başlığın gövde sayfasını okur
async function body(pages, file) {
  await render(inject(withToc(pages), '#kapak { display: none !important; }'), file, bodyOpts);
  const ol = JSON.parse(py('outline', file)).filter(([lv]) => lv <= 2);
  if (norm(ol[0][1]) !== 'İçindekiler') throw new Error('ana hat İçindekiler ile başlamıyor: ' + ol[0][1]);
  const got = ol.slice(1);
  if (got.length !== heads.length) throw new Error(`ana hatta ${got.length} başlık var, beklenen ${heads.length}`);
  heads.forEach((h, i) => { if (norm(got[i][1]) !== norm(h.no + h.title)) throw new Error(`başlık eşleşmedi: "${got[i][1]}" ≠ "${h.no} ${h.title}"`); });
  return got.map(([, , p]) => p);
}
const pages1 = await body(null, path.join(tmp, 'body1.pdf'));
const pages = await body(pages1, path.join(tmp, 'body.pdf'));
if (pages.join() !== pages1.join()) throw new Error('içindekiler yazılınca sayfalar kaydı: ' + pages1 + ' → ' + pages);
await render(inject(html, 'body > :not(#kapak) { display: none !important; } @page { margin: 0; }'), path.join(tmp, 'cover.pdf'), { pageRanges: '1' });
await browser.close();
fs.rmSync(page_html);

// ---- 3. kapak + gövde, yer imleri ve belge bilgileri (kapak 1. sayfa olduğu için gövde sayfaları +1)
const info = {
  title: TITLE, date: PDF_DATE,
  subject: 'Geliştirici kılavuzu: veri hattı, görüntüleyici mimarisi, gölgelendiriciler, mühendislik modülleri, test ve yeniden üretim',
  keywords: 'Supremo 85, uPVC, three.js, WebGL, Blender, KTX2, kiosk, EN ISO 10077-2',
  creator: `dokuman.html (${VERSION}) → build_pdf.mjs`,
  toc: [[1, 'Kapak', 1], [1, 'İçindekiler', 2], ...heads.map((h, i) => [h.level, `${h.no} ${h.title}`, pages[i] + 1])],
};
fs.writeFileSync(path.join(tmp, 'info.json'), JSON.stringify(info));
console.log(py('finish', path.join(tmp, 'cover.pdf'), path.join(tmp, 'body.pdf'), PDF, path.join(tmp, 'info.json')));
console.log(`sürüm ${VERSION} · ${DATE} · ${heads.length} başlık · içindekiler: ${heads.filter((h) => h.level === 1).map((h, i) => h.no + '→' + pages[heads.indexOf(h)]).join(' ')}`);
fs.rmSync(tmp, { recursive: true, force: true });
