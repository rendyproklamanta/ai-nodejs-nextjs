#!/bin/bash

# === Backend ===
cd backend || exit 1
echo "📦 Installing backend dependencies..."
npm install

echo "🚀 Running backend script..."
npm run start &

# === Frontend ===
cd ../frontend || exit 1
echo "📦 Installing frontend dependencies..."
npm install

echo "🚀 Running frontend script..."
npm run dev &

echo "✅ All tasks completed successfully."
