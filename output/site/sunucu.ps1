# Supremo 85 3B görüntüleyici - yedek yerel sunucu (Windows PowerShell, Python/Node gerekmez)
param([int]$Port = 8080)
$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$types = @{
  '.html'='text/html; charset=utf-8'; '.js'='text/javascript; charset=utf-8'; '.mjs'='text/javascript; charset=utf-8';
  '.css'='text/css; charset=utf-8'; '.json'='application/json'; '.wasm'='application/wasm'; '.glb'='model/gltf-binary';
  '.ktx2'='image/ktx2'; '.woff2'='font/woff2'; '.png'='image/png'; '.svg'='image/svg+xml'; '.txt'='text/plain; charset=utf-8'; '.md'='text/markdown; charset=utf-8'
}
$listener = $null
for ($p = $Port; $p -lt $Port + 40; $p++) {
  try {
    $l = New-Object System.Net.HttpListener
    $l.Prefixes.Add("http://localhost:$p/")
    $l.Start(); $listener = $l; $Port = $p; break
  } catch { }
}
if (-not $listener) { Write-Host 'Sunucu başlatılamadı (boş port bulunamadı).'; Read-Host 'Çıkmak için Enter'; exit 1 }
$url = "http://localhost:$Port/"
Write-Host "Supremo 85 3B görüntüleyici çalışıyor: $url"
Write-Host 'Kapatmak için bu pencereyi kapatın.'
try { Start-Process $url } catch { Write-Host "Tarayıcıda şu adresi açın: $url" }
$rootFull = [System.IO.Path]::GetFullPath($root)
while ($listener.IsListening) {
  try {
    $ctx = $listener.GetContext()
    $path = [System.Uri]::UnescapeDataString($ctx.Request.Url.AbsolutePath)
    if ($path.EndsWith('/')) { $path += 'index.html' }
    $rel = $path.TrimStart('/').Replace('/', [System.IO.Path]::DirectorySeparatorChar)
    $file = [System.IO.Path]::GetFullPath((Join-Path $root $rel))
    $res = $ctx.Response
    $res.Headers.Add('Cache-Control', 'no-cache')
    if ($file.StartsWith($rootFull) -and (Test-Path -LiteralPath $file -PathType Leaf)) {
      $ext = [System.IO.Path]::GetExtension($file).ToLower()
      $res.ContentType = $(if ($types.ContainsKey($ext)) { $types[$ext] } else { 'application/octet-stream' })
      $bytes = [System.IO.File]::ReadAllBytes($file)
      $res.ContentLength64 = $bytes.Length
      $res.OutputStream.Write($bytes, 0, $bytes.Length)
    } else {
      $res.StatusCode = 404
    }
    $res.OutputStream.Close()
  } catch { }
}
