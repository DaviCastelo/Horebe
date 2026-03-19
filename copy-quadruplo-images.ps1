# Script para copiar as fotos dos quartos para public/images/
# Execute este script na pasta do projeto (duplo clique ou: powershell -ExecutionPolicy Bypass -File copy-quadruplo-images.ps1)

$projectRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $projectRoot

$destDir = Join-Path $projectRoot "public\images"
if (-not (Test-Path $destDir)) {
    New-Item -ItemType Directory -Force -Path $destDir | Out-Null
}

$copies = @(
    # Quarto Quádruplo
    @{ From = "image\MUlungu QUadruplo.jpg"; To = "public\images\mulungu-quadruplo.jpg" },
    @{ From = "image\quad.jpg"; To = "public\images\quad.jpg" },
    @{ From = "image\Quadruyplo.jpg"; To = "public\images\quadruplo.jpg" },
    # Quarto Triplo
    @{ From = "image\tri.jpg"; To = "public\images\tri.jpg" }
)

foreach ($c in $copies) {
    $src = Join-Path $projectRoot $c.From
    $dst = Join-Path $projectRoot $c.To
    if (Test-Path $src) {
        Copy-Item $src $dst -Force
        Write-Host "OK: $($c.From) -> $($c.To)"
    } else {
        Write-Host "ARQUIVO NAO ENCONTRADO: $src"
    }
}

Write-Host ""
Write-Host "Concluido. Verifique public\images\"
