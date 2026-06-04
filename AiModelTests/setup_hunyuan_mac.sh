#!/bin/bash
set -e

echo "==========================================================="
echo "   Hunyuan3D-MLX Native macOS Installer (Apple Silicon)    "
echo "==========================================================="

# Check if uv is installed
if ! command -v uv &> /dev/null; then
    echo "[*] Installing 'uv' package manager..."
    curl -LsSf https://astral.sh/uv/install.sh | sh
    export PATH="$HOME/.cargo/bin:$PATH"
fi

cd Hunyuan3D-MLX-main

echo "[*] Ensuring Xcode Command Line Tools are available..."
if ! xcode-select -p &> /dev/null; then
    echo "Xcode Command Line Tools are missing. Please run 'xcode-select --install' and try again."
    exit 1
fi

echo "[*] Synchronizing python environment and building Metal extensions..."
echo "    (This will compile C++/Metal libraries like mtldiffrast and may take a few minutes)"
uv sync

echo "[*] Checking Hugging Face login status..."
if ! uv run huggingface-cli whoami &> /dev/null; then
    echo "You are not logged into Hugging Face. The models require a Hugging Face account to download."
    uv run huggingface-cli login
fi

echo "==========================================================="
echo " Installation Complete!"
echo " "
echo " To run the 3D generator (Smoke Test):"
echo "   cd Hunyuan3D-MLX-main"
echo "   uv run python main.py shape"
echo " "
echo " To start the Gradio server to connect with Blender:"
echo "   cd Hunyuan3D-MLX-main"
echo "   uv run python app.py"
echo "==========================================================="
