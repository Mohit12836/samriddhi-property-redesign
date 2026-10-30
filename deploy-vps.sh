#!/bin/bash
# ============================================================
# VPS DEPLOY SCRIPT FOR PROPERTY BROKER NEXT.JS WEBSITE
# Run on VPS: bash deploy-vps.sh
# ============================================================

set -e

echo "🚀 Starting Property Broker Next.js VPS Deployment..."

# 1. Install PM2 if not present
if ! command -v pm2 &> /dev/null; then
    echo "📦 Installing PM2 globally..."
    sudo npm install -g pm2
fi

# 2. Install dependencies & build
echo "📦 Installing dependencies..."
npm install --production=false

echo "🏗️ Building Next.js production build..."
npm run build

# 3. Start or restart with PM2 on port 3009
echo "🔄 Managing PM2 service..."
pm2 stop broker-website || true
pm2 delete broker-website || true
pm2 start npm --name "broker-website" -- start -- -p 3009

# 4. Save PM2 state
pm2 save

echo ""
echo "============================================================"
echo "✅ PROPERTY BROKER WEBSITE DEPLOYED TO VPS SUCCESSFULLY!"
echo "🌐 App is running on: http://127.0.0.1:3009"
echo "⚙️ Check status with:  pm2 status"
echo "📜 View live logs:     pm2 logs broker-website"
echo "============================================================"
