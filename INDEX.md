# INDEX — front door to the vault

One line per page. The agent reads this first, then follows links.
Backfill status: raw/ populated · entities/concepts are STUBS awaiting the /goal compile pass.

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
- `entities/STB Digital.md` — digital marketing agency; clients, pricing, proposal history. STUB
- `entities/mPWR.md` — telecom-fintech startup; investor outreach, pitch assets. STUB
- `entities/GB Iron Solutions.md` — structural welding / fabrication, Puerto Rico. STUB
- `entities/WebSamplOmatic5000.md` — flagship browser sampler; granular engine, FX. STUB
- `entities/Antigravity.md` — multi-agent Claude Code stack; pipelines and agents. STUB
- `entities/Trinity.md` — planned 24/7 orchestration runtime. STUB
- `entities/Modern Exteriors.md` — roofing design partner; trademap + cold-call op. STUB
- `entities/ChatGPT Brain Globe.md` — WebGL visualization of this very corpus. STUB

## Concepts (one page per idea)
- `concepts/Browser Audio Architecture.md` — patterns for Web Audio instruments. STUB
- `concepts/Agent Loop Design.md` — subagent orchestration lessons incl. Ralph Wiggum failure. STUB
- `concepts/Cold Outreach Playbook.md` — email/LinkedIn/call patterns across clients. STUB
- `concepts/Proposal Factory.md` — the recurring digital-marketing proposal workflow. STUB
- `concepts/Prediction Model Prompting.md` — sports/stock prediction prompt patterns. STUB

## Operations
- `GOAL-BACKFILL.md` — the /goal prompt that compiles entities/concepts from raw/.
- `.claude/commands/` — compile, lint, synthesis slash commands.
- `scripts/ingest-chatgpt-export.js` — upgrade raw/ to FULL transcripts from conversations.json.
