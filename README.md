# Mike's Second Brain — built from the ChatGPT Brain Globe corpus

The architecture from the "second brain with Fable 5" playbook, pre-loaded with
your entire ChatGPT history (1,244 conversations / 44,227 messages, Dec 2022 –
Jun 2026), extracted from the globe HTML's embedded dataset — clusters, dates,
and semantic-neighbor links included.

## What's here
- raw/chatgpt/<cluster>/     1,304 dated conversation files + per-cluster _INDEX.md   [ground truth, read-only]
- entities/ + concepts/      13 seeded stub pages the backfill will compile
- INDEX.md                   the front door
- CLAUDE.md                  the four rules + reading rules (the always-paid tax, kept small)
- GOAL-BACKFILL.md           the /goal prompt — run this first
- .claude/commands/          /compile (nightly, cheap), /lint (weekly, cheap), /synthesis (weekly, premium)
- .claude/hooks/             SessionEnd hook that mines finished sessions into raw/sessions/
- scripts/ingest-chatgpt-export.js   upgrades previews → full transcripts from conversations.json
- PROJECT-SNIPPET.md         3 lines to paste into every other project's CLAUDE.md

## Setup order (≈15 min of your time, then walk away)
1. Drop this folder somewhere permanent, e.g. ~/vault. Open it in Obsidian — graph view already lights up.
2. `git init && git add -A && git commit -m "vault: initial backfill"` — git is the only sync layer; keep iCloud/Drive off this folder.
3. Wire the SessionEnd hook (instructions inside the script).
4. IMPORTANT UPGRADE: export your ChatGPT data (Settings → Data Controls → Export) and run
   `node scripts/ingest-chatgpt-export.js ~/Downloads/conversations.json`
   The globe snapshot truncates messages at ~280 chars; this replaces every preview with the full transcript.
5. In Claude Code from the vault root, run the /goal in GOAL-BACKFILL.md. Come back to a compiled brain.
6. Schedule the loops (cron, or Trinity when it exists):
   - nightly:  claude -p "/compile"   (cheap tier)
   - weekly:   claude -p "/lint"      (cheap tier)
   - weekly:   claude -p "/synthesis" (premium tier — the only pass that earns it)
7. Paste PROJECT-SNIPPET.md's three lines into every project's CLAUDE.md.

## Notes specific to this corpus
- Previews are truncated until step 4 — compiled pages made before that should carry `confidence: preview-only`.
- The "misc" cluster (445 convos) includes the globe's "Export Assets" hub; expect the backfill to promote a lot of it into real entities (Datasys, NexCore, Mr. Hood Repair, betting models…).
- Semantic-neighbor wikilinks in raw files come from the globe's mesh links — they're hints for the compiler, not verified relationships.
