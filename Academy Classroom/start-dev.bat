@echo off
setlocal
cd /d "%~dp0"

if not exist node_modules (
  echo Installing dependencies...
  call npm install
)

echo Starting Vite dev server on http://localhost:3000 ...
call npm run dev -- --host 0.0.0.0 --port 3000


