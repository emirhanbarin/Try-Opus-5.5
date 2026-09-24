#!/bin/bash
# Supremo 85 - 3B profil görüntüleyici (macOS: çift tıklayın)
cd "$(dirname "$0")" || exit 1
echo ""
echo "  Supremo 85 - 3B profil görüntüleyici başlatılıyor..."
echo ""
PY=""
if command -v python3 >/dev/null 2>&1; then
  P="$(command -v python3)"
  # /usr/bin/python3 yalnızca Xcode komut satırı araçları kuruluysa gerçek Python'dur
  if [ "$P" != "/usr/bin/python3" ] || xcode-select -p >/dev/null 2>&1; then PY="$P"; fi
fi
if [ -n "$PY" ]; then exec "$PY" sunucu.py 8080
elif command -v node >/dev/null 2>&1; then exec node sunucu.js 8080
else
  echo "  Python/Node bulunamadı - Perl yedek sunucusu kullanılıyor."
  exec perl sunucu.pl 8080
fi
