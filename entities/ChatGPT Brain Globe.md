---
type: entity
status: compiled
compiled: 2026-07-06
confidence: preview-only
sources:
  - raw/chatgpt/misc/_INDEX.md
  - raw/chatgpt/agents/_INDEX.md
---
# ChatGPT Brain Globe
> One-liner: WebGL/Three.js globe visualization of the full ChatGPT history (1,244 conversations / 44,227 messages) — semantic deep-link mining, cluster isolation, inspector panel. Its embedded dataset seeded this vault's entire raw/ layer.

## Relationship to this vault
- Every file under raw/chatgpt/ was extracted from the globe's embedded dataset: clusters, dates, message counts, and the **semantic-neighbor wikilinks** in each raw file come from its mesh links (hints, not verified relationships).
- The "Export Assets" hub the globe surfaced lives inside the misc cluster (445 convos) — the compile pass promotes its contents into real entities ([[Datasys]], [[NexCore]], [[Mr. Hood Repair]]…).
- Previews are truncated ~280 chars until `scripts/ingest-chatgpt-export.js` is run against a full conversations.json export.

## Build (Claude-side, unverified here)
- WebGL/Three.js globe; cluster isolation; inspector panel; semantic deep-link mining. The build itself happened outside ChatGPT.
- Links: [[Antigravity]] · [[Agent Loop Design]].
