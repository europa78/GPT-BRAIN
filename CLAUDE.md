# Vault — Mike's Second Brain

This folder is a knowledge base compiled from Mike's full ChatGPT history
(1,244 conversations / 44,227 messages, Dec 2022 – Jun 2026) plus ongoing work.
Treat it like a codebase: raw/ is source data, entities/ and concepts/ are
compiled output, INDEX.md is the front door.

## The four rules (never violate)
1. One lesson per file, with a one-line summary at the top.
2. Update the existing page — never create a duplicate.
3. Delete notes that turn out to be wrong.
4. NEVER rewrite anything in raw/. It is read-only ground truth.

## Structure
- `raw/chatgpt/<cluster>/` — one file per ChatGPT conversation, dated,
  with frontmatter + truncated transcript preview. Each cluster has a `_INDEX.md`.
- `raw/` (other subfolders) — anything else captured verbatim: call notes,
  transcripts, competitor pages, session-hook notes.
- `entities/` — one page per concrete thing: client, company, product, tool, person.
- `concepts/` — one page per idea: strategy, pattern, lesson, workflow.
- `INDEX.md` — every compiled page, one line each. Check it before opening anything.

## Reading rules (cost control)
- Start from INDEX.md. Follow [[wikilinks]]. Grep for keywords.
- Never sweep the whole vault. Open only pages the trail points at.
- For big cross-vault questions, dispatch a subagent to read and return
  one paragraph of conclusions.
- raw/chatgpt previews are truncated at ~280 chars/message. If a compiled
  claim needs more than the preview shows, mark it `confidence: preview-only`
  rather than inventing detail.

## Writing rules
- Every compiled page carries a `sources:` list of raw/ paths. A page
  without a source link gets flagged, not trusted.
- Every change ships as a diff (exact before/after), never as a claim.
- Date every lesson. Add `expires:` on anything time-sensitive (AI tooling
  advice older than ~6 months is suspect).
- Link generously: [[Entity]] and [[Concept]] names, exact page titles.

## Mike's context (orientation only — details live in entities/)
Ventures: [[STB Digital]] (marketing agency), [[mPWR]] (telecom-fintech,
fundraising), [[GB Iron Solutions]] (structural welding, PR). Technical
practice: browser-based audio software ([[WebSamplOmatic5000]] etc.),
multi-agent Claude Code automation ([[Antigravity]], [[Trinity]]).
