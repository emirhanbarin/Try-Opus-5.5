#!/bin/bash
# Köşe görüntüleyicisini derler: viewer-kose/js -> site/js/kose.js (tek klasik betik; http ve file:// uyumlu)
# ve file:// açılışı için site/assets/kose/assets-embedded.js'i üretir.
# Gerekenler: Node + esbuild (npm i esbuild), Python 3
set -e
HERE="$(cd "$(dirname "$0")" && pwd)"
SITE="$HERE/../../site"
npx esbuild "$HERE/js/main.js" --bundle --format=iife --minify --target=es2019 --legal-comments=eof --define:import.meta.url=document.baseURI --outfile="$SITE/js/kose.js"
python3 "$HERE/embed_assets.py" "$SITE"
