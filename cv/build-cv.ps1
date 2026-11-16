# يولّد ملفَّي السيرة الذاتية (عربي وإنجليزي) من cv/cv.html باستخدام Microsoft Edge
# Generates both CV PDFs (Arabic & English) from cv/cv.html using headless Microsoft Edge:
#   assets/cv/ar/ADNAN_BISEYRINI_CV.pdf
#   assets/cv/en/ADNAN_BISEYRINI_CV.pdf
# الاستخدام / Usage:  powershell -ExecutionPolicy Bypass -File cv/build-cv.ps1
# يتطلب تشغيل الخادم المحلي أولاً / Requires the local server:  npx http-server -p 5500

$root = Split-Path -Parent $PSScriptRoot

$edge = @(
  "${env:ProgramFiles(x86)}\Microsoft\Edge\Application\msedge.exe",
  "$env:ProgramFiles\Microsoft\Edge\Application\msedge.exe"
) | Where-Object { Test-Path $_ } | Select-Object -First 1
if (-not $edge) { throw "Microsoft Edge not found" }

$profileDir = Join-Path $env:TEMP "cv-edge-profile"

foreach ($lang in @("ar", "en")) {
  $dir = Join-Path $root "assets\cv\$lang"
  New-Item -ItemType Directory -Force $dir | Out-Null
  $out = Join-Path $dir "ADNAN_BISEYRINI_CV.pdf"
  if (Test-Path $out) { Remove-Item $out -Force }

  & $edge --headless=new --disable-gpu --no-first-run --user-data-dir="$profileDir" `
    --no-pdf-header-footer --virtual-time-budget=8000 `
    --print-to-pdf="$out" "http://localhost:5500/cv/cv.html?lang=$lang" 2>$null | Out-Null

  Start-Sleep -Milliseconds 500
  if (Test-Path $out) { "Saved [$lang]: $out ($([math]::Round((Get-Item $out).Length/1KB)) KB)" } else { throw "PDF for '$lang' was not created" }
}
