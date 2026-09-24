#!/bin/bash
# Görüntüleyiciyi derler: ES modül kaynakları (js/) -> site/js/app.js (tek klasik betik; http ve file:// uyumlu)
# Gerekenler: Node + esbuild (npm i esbuild), Python 3
set -e
HERE="$(cd "$(dirname "$0")" && pwd)"
SITE="$HERE/../../site"
npx esbuild "$HERE/js/main.js" --bundle --format=iife --minify --target=es2019 --legal-comments=eof --define:import.meta.url=document.baseURI --outfile="$SITE/js/app.js"
python3 "$HERE/embed_assets.py" "$SITE"
