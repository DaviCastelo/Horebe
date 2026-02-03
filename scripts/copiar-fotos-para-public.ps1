# Copia a logo mono e o mapa da Rota Verde do Café de FOTOS para public/images
# Execute este script na pasta do projeto: .\scripts\copiar-fotos-para-public.ps1

$base = $PSScriptRoot + "\.."
$fotos = Join-Path $base "FOTOS"
$dest = Join-Path $base "public\images"

if (-not (Test-Path $dest)) {
    New-Item -ItemType Directory -Path $dest -Force
}

$origemLogo = Join-Path $fotos "LOGO PNG mono fundo black.png"
$destLogo = Join-Path $dest "logo-mono.png"
$origemMapa = Join-Path $fotos "Mapa RVC_page-0001.jpg"
$destMapa = Join-Path $dest "mapa-rota-verde-cafe.jpg"

if (Test-Path $origemLogo) {
    Copy-Item -LiteralPath $origemLogo -Destination $destLogo -Force
    Write-Host "OK: Logo mono copiada para public/images/logo-mono.png"
} else {
    Write-Host "AVISO: Arquivo nao encontrado: $origemLogo"
}

if (Test-Path $origemMapa) {
    Copy-Item -LiteralPath $origemMapa -Destination $destMapa -Force
    Write-Host "OK: Mapa RVC copiado para public/images/mapa-rota-verde-cafe.jpg"
} else {
    Write-Host "AVISO: Arquivo nao encontrado: $origemMapa"
}
