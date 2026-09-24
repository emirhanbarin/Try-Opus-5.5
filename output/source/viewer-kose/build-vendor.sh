#!/bin/bash
# three.js r186 alt kümesini (vendor-entry.js) vendor/three-bundle.min.js'e paketler.
# node_modules (three@0.186.0, three-mesh-bvh@0.9, esbuild) bulunan klasörde çalıştırın; giriş stdin'den okunur,
# böylece modüller o klasörden çözülür.
set -e
HERE="$(cd "$(dirname "$0")" && pwd)"
npx esbuild --bundle --format=esm --minify --target=es2020 --legal-comments=eof --sourcefile=vendor-entry.js \
  --outfile="$HERE/vendor/three-bundle.min.js" < "$HERE/vendor-entry.js"
