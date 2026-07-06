---
type: concept
status: compiled
compiled: 2026-07-06
sources:
  - raw/chatgpt/agents/2025-12-06--claude-agentic-workflow-summary.md
  - raw/chatgpt/agents/2026-02-09--building-multi-agent-llm-system.md
  - raw/chatgpt/agents/2025-08-02--agent-mode-deep.md
  - raw/chatgpt/misc/2023-04-23--autogpt-4-23.md
---
# Agent Loop Design
> One-liner: lessons on agent orchestration accumulated from AutoGPT (2023) through ChatGPT Agent Mode (2025) to Claude Code spec-driven workflow (2025-12) — including the "Ralph Wiggum failure" (a loop that confirms its own work instead of progressing).

## The arc in the corpus
- **2023-04:** AutoGPT experiments — first exposure to autonomous loops.
- **2023-05:** LangChain 101 (models, chains) — building blocks era.
- **2025-08:** ChatGPT Agent Mode deep-dive — architecture analysis + first production use for lead gen (connector wiring: ZoomInfo → Salesloft → Gmail). Practical constraint discovered: **monthly Agent Mode usage limits** interrupt mid-workflow ("You've reached your monthly limit for agent mode").
- **2025-12:** Claude Code goes spec-driven — doctrine settles: **Claude = architect, ChatGPT = fast implementer, GitHub = house/blueprint/construction log**.
- **2026-02:** multi-agent LLM system design; OpenClaw runtime experiments.

## Distilled lessons
1. **Hybrid beats monoculture** — assign each model the role it's best at (2025-12).
2. **Spec/architecture commit first**, feature commits after — same pattern as manual-as-spec in [[Browser Audio Architecture]].
3. **The Ralph Wiggum failure:** loops that verify their own output instead of advancing state. Countermeasure: external ground truth (the judge only sees the conversation → demand pasted proof; this vault's GOAL-BACKFILL.md format). `confidence: preview-only` (named on Claude side)
4. Platform rate/usage limits are a first-class design constraint for agent workflows.

## Links
[[Antigravity]] · [[Trinity]] · [[Agent Mode Prospecting]] · [[ChatGPT Brain Globe]].
