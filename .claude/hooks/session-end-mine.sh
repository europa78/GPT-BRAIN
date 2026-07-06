#!/usr/bin/env bash
# SessionEnd hook: mine the session that just ended into the vault as a dated raw note.
# Wire in ~/.claude/settings.json:
# { "hooks": { "SessionEnd": [ { "hooks": [ { "type": "command",
#   "command": "bash /path/to/vault/.claude/hooks/session-end-mine.sh" } ] } ] } }
VAULT="$(cd "$(dirname "$0")/../.." && pwd)"
OUT="$VAULT/raw/sessions"
mkdir -p "$OUT"
STAMP="$(date +%Y-%m-%d--%H%M)"
# Claude Code pipes hook input (incl. transcript_path) on stdin as JSON
INPUT="$(cat)"
TRANSCRIPT="$(echo "$INPUT" | grep -o '"transcript_path":"[^"]*"' | cut -d'"' -f4)"
{
  echo "---"
  echo "date: $(date +%Y-%m-%d)"
  echo "source: claude-code session hook"
  echo "transcript: ${TRANSCRIPT:-unknown}"
  echo "---"
  echo
  echo "# Session $STAMP"
  echo
  echo "TODO (nightly compile fills this): decisions made, mistakes caught, patterns confirmed."
  if [ -n "$TRANSCRIPT" ] && [ -f "$TRANSCRIPT" ]; then
    echo
    echo "## Last exchanges (raw)"
    tail -c 8000 "$TRANSCRIPT"
  fi
} > "$OUT/$STAMP.md"
