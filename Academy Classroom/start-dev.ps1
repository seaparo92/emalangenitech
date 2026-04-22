param(
  [switch]$Install
)

$ErrorActionPreference = 'Stop'
Set-Location -Path $PSScriptRoot

if ($Install -or -not (Test-Path 'node_modules')) {
  Write-Host 'Installing dependencies...'
  npm install
}

Write-Host 'Starting Vite dev server on http://localhost:3000 ...'
npm run dev -- --host 0.0.0.0 --port 3000


