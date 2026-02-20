#!/bin/bash
# new-client.sh — Create a new SEO client project folder
# Usage: ./new-client.sh <client-name> [path]
#
# Examples:
#   ./new-client.sh acme-corp              → creates ./acme-corp/
#   ./new-client.sh acme-corp ~/projects   → creates ~/projects/acme-corp/

set -e

REPO_DIR="$(cd "$(dirname "$0")" && pwd)"

# --- Validate input ---
if [ -z "$1" ]; then
  echo ""
  echo "Usage: ./new-client.sh <client-name> [path]"
  echo "Example: ./new-client.sh acme-corp"
  echo "Example: ./new-client.sh acme-corp ~/projects"
  echo ""
  exit 1
fi

CLIENT_NAME="$1"
BASE_PATH="${2:-.}"
CLIENT_DIR="$BASE_PATH/$CLIENT_NAME"

if [ -d "$CLIENT_DIR" ]; then
  echo ""
  echo "✗ Folder '$CLIENT_DIR' already exists. Choose a different name or path."
  echo ""
  exit 1
fi

# --- Create folder structure ---
mkdir -p "$CLIENT_DIR/data"
mkdir -p "$CLIENT_DIR/outputs"

# --- Copy brand voice template ---
cp "$REPO_DIR/brand-voice.md" "$CLIENT_DIR/brand-voice.md"

echo ""
echo "=== Client project created ==="
echo ""
echo "  $CLIENT_DIR/"
echo "  ├── brand-voice.md   ← fill this in before running content prompts"
echo "  ├── data/            ← drop CSV exports, screenshots, and logs here"
echo "  └── outputs/         ← AI outputs are saved here automatically"
echo ""
echo "Next steps:"
echo "  1. Fill in $CLIENT_DIR/brand-voice.md"
echo "  2. cd $CLIENT_DIR"
echo "  3. claude"
echo ""
