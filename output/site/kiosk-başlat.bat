@echo off
chcp 65001 >nul
setlocal
cd /d "%~dp0"
title Supremo 85 - Fuar / kiosk modu
echo.
echo   Supremo 85 - fuar/kiosk modu baslatiliyor...
echo   Tarayici tam ekran (kiosk) acilir. Cikmak icin Alt+F4.
echo.
rem 1) Python (py baslaticisi veya python)
py -3 -c "import sys" >nul 2>nul && (py -3 "%~dp0sunucu.py" 8080 --kiosk & goto :end)
python -c "import sys" >nul 2>nul && (python "%~dp0sunucu.py" 8080 --kiosk & goto :end)
rem 2) Node.js
node -v >nul 2>nul && (node "%~dp0sunucu.js" 8080 --kiosk & goto :end)
rem 3) Yedek: Windows PowerShell (her Windows'ta vardir)
echo   Python/Node bulunamadi - PowerShell yedek sunucusu kullaniliyor.
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0sunucu.ps1" -Port 8080 -Kiosk
:end
if errorlevel 1 pause
