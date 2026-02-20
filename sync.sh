#!/usr/bin/env python3
"""
sync.sh — Sync skills/ to .claude/commands/

Reads every skill file in skills/, strips the "Input I Will Provide" /
"Output Instructions" trailing section, appends $ARGUMENTS, and writes
the result to the matching file in .claude/commands/.

Usage:
    python3 sync.sh
    # or make it executable and run directly:
    # chmod +x sync.sh && ./sync.sh
"""

import os
import re

SKILLS_DIR = os.path.join(os.path.dirname(__file__), "skills")
COMMANDS_DIR = os.path.join(os.path.dirname(__file__), ".claude", "commands")

TRAILING_MARKERS = [
    r"^Input I Will Provide:",
    r"^Input I will Provide:",
    r"^Input:",
]

def build_skill_to_command():
    mapping = {}
    for category in os.listdir(SKILLS_DIR):
        cat_path = os.path.join(SKILLS_DIR, category)
        if not os.path.isdir(cat_path):
            continue
        for fname in os.listdir(cat_path):
            if fname.endswith(".md"):
                mapping[f"{category}/{fname}"] = fname
    return mapping

SKILL_TO_COMMAND = build_skill_to_command()


def sync():
    updated = []
    skipped = []

    for skill_rel, cmd_name in SKILL_TO_COMMAND.items():
        skill_path = os.path.join(SKILLS_DIR, skill_rel)
        cmd_path = os.path.join(COMMANDS_DIR, cmd_name)

        if not os.path.exists(skill_path):
            skipped.append(f"  MISSING: {skill_rel}")
            continue

        with open(skill_path, "r") as f:
            lines = f.readlines()

        cut_idx = None
        for i, line in enumerate(lines):
            for marker in TRAILING_MARKERS:
                if re.match(marker, line.strip()):
                    cut_idx = i
                    while cut_idx > 0 and lines[cut_idx - 1].strip() == "":
                        cut_idx -= 1
                    break
            if cut_idx is not None:
                break

        body = "\n".join(l.rstrip("\n") for l in lines[:cut_idx]) if cut_idx else "".join(lines).rstrip()
        new_content = (
            body.rstrip()
            + "\n\n---\n\n"
            + "$ARGUMENTS\n\n"
            + "If no input is provided above, respond with a short bullet list of exactly "
            + "what this command needs from the user, then stop. Do not run the analysis.\n"
        )

        # Only write if content changed
        existing = open(cmd_path).read() if os.path.exists(cmd_path) else None
        if new_content != existing:
            with open(cmd_path, "w") as f:
                f.write(new_content)
            updated.append(f"  updated: {skill_rel} -> {cmd_name}")
        else:
            updated.append(f"  ok:      {skill_rel} -> {cmd_name}")

    print("\n=== Sync complete ===\n")
    for line in updated:
        print(line)
    for line in skipped:
        print(line)
    print(f"\n{len(updated)} processed, {len(skipped)} skipped.")


if __name__ == "__main__":
    sync()
