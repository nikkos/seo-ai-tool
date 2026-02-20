#!/bin/bash
# setup.sh — One-time global setup for AI SEO Skills
# Run this once to make all slash commands available from any folder on your machine.

set -e

REPO_DIR="$(cd "$(dirname "$0")" && pwd)"
CLAUDE_DIR="$HOME/.claude"

echo ""
echo "=== AI SEO Skills — Global Setup ==="
echo ""

# Create ~/.claude if it doesn't exist
mkdir -p "$CLAUDE_DIR"

# --- Symlink commands ---
if [ -L "$CLAUDE_DIR/commands" ]; then
  echo "✓ Commands already symlinked — skipping."
elif [ -d "$CLAUDE_DIR/commands" ]; then
  echo "→ Backing up existing ~/.claude/commands to ~/.claude/commands.bak"
  mv "$CLAUDE_DIR/commands" "$CLAUDE_DIR/commands.bak"
  ln -s "$REPO_DIR/.claude/commands" "$CLAUDE_DIR/commands"
  echo "✓ Commands symlinked."
else
  ln -s "$REPO_DIR/.claude/commands" "$CLAUDE_DIR/commands"
  echo "✓ Commands symlinked."
fi

# --- Copy CLAUDE.md globally ---
if [ -f "$CLAUDE_DIR/CLAUDE.md" ]; then
  echo "→ Backing up existing ~/.claude/CLAUDE.md to ~/.claude/CLAUDE.md.bak"
  cp "$CLAUDE_DIR/CLAUDE.md" "$CLAUDE_DIR/CLAUDE.md.bak"
fi
cp "$REPO_DIR/CLAUDE.md" "$CLAUDE_DIR/CLAUDE.md"
echo "✓ CLAUDE.md installed globally."

echo ""
echo "=== Setup complete ==="
echo ""
echo "Slash commands are now available from any folder."
echo "Next: create a client project with ./new-client.sh <client-name>"
echo ""
