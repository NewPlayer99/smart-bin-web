@echo off
cd /d "C:\Path\To\Your\SmartBinProject"  :: Change this path

echo === Adding changes ===
git add .

echo === Committing with timestamp ===
git commit -m "Auto update on %date% %time%"

echo === Pulling from GitHub ===
git pull origin main --no-edit

echo === Pushing to GitHub ===
git push origin main

pause
