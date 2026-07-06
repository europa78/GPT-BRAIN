# INDEX — front door to the vault

One line per page. The agent reads this first, then follows links.
Backfill status: **compiled 2026-07-06** (preview-only corpus — re-run after full-transcript ingest).

## Raw (read-only ground truth)
- `raw/chatgpt/` — 1,304 ChatGPT conversations, Dec 2022 – Jun 2026, clustered. Per-cluster `_INDEX.md` files:
  - `raw/chatgpt/audio/_INDEX.md` — Audio / DSP / Instruments (96 convos, 4,777 msgs)
  - `raw/chatgpt/agents/_INDEX.md` — Claude Code / Agents (31 convos, 3,648 msgs)
  - `raw/chatgpt/prompt/_INDEX.md` — Prompt Eng / GPT Building (137 convos, 4,664 msgs)
  - `raw/chatgpt/stock/_INDEX.md` — Stock / Equity Analysis (61 convos, 1,427 msgs)
  - `raw/chatgpt/finance/_INDEX.md` — Finance / Trading / Markets (122 convos, 3,396 msgs)
  - `raw/chatgpt/mpwr/_INDEX.md` — mPWR / Fintech / Investor (15 convos, 823 msgs)
  - `raw/chatgpt/stb/_INDEX.md` — STB / Marketing / Web (144 convos, 2,805 msgs)
  - `raw/chatgpt/prospect/_INDEX.md` — Prospecting / Lead Gen (49 convos, 1,438 msgs)
  - `raw/chatgpt/dev/_INDEX.md` — Coding / Dev / Infra (84 convos, 2,591 msgs)
  - `raw/chatgpt/writing/_INDEX.md` — Writing / Research / General (120 convos, 3,093 msgs)
  - `raw/chatgpt/misc/_INDEX.md` — Misc / Uncategorized + Export Assets (445 convos, 15,565 msgs)

## Entities (one page per concrete thing)
### Ventures & clients
- `entities/STB Digital.md` — Mike's agency (Simply The Best Digital): LSA/PPC/SEO for local businesses; 2026 pricing; client roster.
- `entities/mPWR.md` — telecom-fintech startup; Mike books virtual investor meetings with the Nasdaq-listed CEO.
- `entities/ALBT.md` — small-cap Nasdaq IR engagement; lesson: right-size investor lists to smaller RIAs.
- `entities/BeeSearchable.md` — "Be Googleable" Fort Lauderdale venture: GBP + enrichment services sold via 8 commissioned agents (2025).
- `entities/Mr. Hood Repair.md` — hood-cleaning certification LLC + tech-brokerage model (NFPA 96, 2025).
- `entities/NexCore.md` — consulting + field-ops company (nexcoreserv.com); MSA + invoicing relationship.
- `entities/The Rucco Group.md` — Mark Rucco / Compass realtor; LSA+PPC+social proposal (2026-03).
- `entities/Datasys.md` — 2023-era engagement; the fossil record of Mike's first LLM work pipeline.
- `entities/GB Iron Solutions.md` — PR structural welding; STB client. ⚠️ no-raw-evidence (Claude-side).
- `entities/Modern Exteriors.md` — roofing contractor, trademap partner. ⚠️ no-raw-evidence (Claude-side).

### Products & projects
- `entities/WebSamplOmatic5000.md` — flagship browser sampler; Battery/Kontakt-lineage builds evidenced 2025-11 → 2026-02.
- `entities/DOOM Sampler.md` — "Able Doom" Electron recreation of the Ableton Move; manual-as-spec build (2026-02).
- `entities/ChatGPT Brain Globe.md` — WebGL globe of this very corpus; its dataset seeded raw/.
- `entities/Antigravity.md` — multi-agent Claude Code stack; ChatGPT-side research trail compiled here.
- `entities/Trinity.md` — planned 24/7 orchestration runtime above Antigravity; vault loops are its first jobs.

### Tools
- `entities/ZoomInfo.md` — B2B contact data: ICP lists, scrape-upload target, agent connector.
- `entities/SalesLoft.md` — cadence/delivery layer for agency + investor outreach.
- `entities/Clay.md` — enrichment platform; Claygents, Finnhub Nasdaq look-alike prospecting (2025-06).
- `entities/GoHighLevel.md` — agency CRM/automation; lead routing to sales agents.
- `entities/Alpha Vantage.md` — stock data API behind the price-data library + news-sentiment pipeline.
- `entities/Stable Audio.md` — generative audio: manual-as-reference, prompt libraries, generation pipeline.
- `entities/REAPER.md` — Mike's DAW; role-primed expert sessions + ReaScript automation.

## Concepts (one page per idea)
- `concepts/Browser Audio Architecture.md` — single-file Web Audio builds, manual-as-spec, hardware-emulation UI.
- `concepts/Agent Loop Design.md` — AutoGPT→Agent Mode→Claude Code arc; hybrid doctrine; Ralph Wiggum failure.
- `concepts/Cold Outreach Playbook.md` — ZoomInfo lists + competitor-fear hook + SalesLoft cadences; one engine, two ICPs.
- `concepts/Proposal Factory.md` — proposals as interactive single-file HTML sites from a master prompt; leaner wins.
- `concepts/Prediction Model Prompting.md` — versioned frameworks + forced JSON output across stocks and sports.
- `concepts/Agent Mode Prospecting.md` — scrape→filter→extract→CSV→upload; Sunbiz/LSA/social recipes.
- `concepts/Lead Enrichment Pipeline.md` — source→enrich→CSV→distribute; the invariant across every tooling era.
- `concepts/Investor Meeting Pipeline.md` — right-sized list → compliant cadence → CEO's calendar; simple-plan lesson.
- `concepts/Sports Betting Frameworks.md` — 11 versioned frameworks (`0629T11…K`) run per game, JSON verdicts.
- `concepts/Role-Task Prompting.md` — `role: X. task: Y` session opener, consciously adopted Dec 2024.

## Operations
- `GOAL-BACKFILL.md` — the /goal prompt that compiled entities/concepts from raw/ (completed 2026-07-06).
- `.claude/commands/` — compile, lint, synthesis slash commands.
- `scripts/ingest-chatgpt-export.js` — upgrade raw/ to FULL transcripts from conversations.json.
