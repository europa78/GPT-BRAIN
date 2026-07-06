---
type: concept
status: compiled
compiled: 2026-07-06
sources:
  - raw/chatgpt/agents/2025-08-02--agent-mode-deep.md
  - raw/chatgpt/agents/2025-08-03--sunbiz-agent-mode.md
  - raw/chatgpt/agents/2025-08-12--prompt-for-agent-mode-for-lsa.md
  - raw/chatgpt/agents/2026-01-12--agent-mode-prospecting.md
---
# Agent Mode Prospecting
> One-liner: the recurring workflow of pointing ChatGPT Agent Mode at lead discovery — scrape public registries/social, filter to an ICP, extract owner+contact, output CSV, upload to the outreach stack.

## Canonical runs (Aug 2025 sprint → Jan 2026)
- **Sunbiz/Broward (2025-08-03, 166 msgs):** scrape county clerk + FL Division of Corporations SFTP daily filings → newly registered Broward LLCs (57 found) → Google for websites → CSV → upload to [[ZoomInfo]]. Fresh-entity prospecting at the source.
- **LSA / Google Screened (2025-08-12):** find home-services businesses with Google Screened badges, weak-to-moderate social presence, extract owner names + phones from public sources → CSV. Also: mining FB/IG threads where SMB owners *ask about* digital marketing (intent-based discovery).
- **Lead-gen agent blueprint (2025-08-02):** full agent with connectors ZoomInfo → [[SalesLoft]] → Gmail, system prompt, automations, safety checks.
- **2026-01-12:** the pattern institutionalized ("Agent mode - prospecting").

## Design rules that emerged
1. Structured prompt blocks (role, objective, filters, output format) — optimized iteratively; see [[Role-Task Prompting]].
2. Always end in **CSV** — the interchange format into [[Lead Enrichment Pipeline]].
3. Expect platform limits mid-run ("monthly limit for agent mode") — see [[Agent Loop Design]].
4. Public-registry scrapes (Sunbiz) beat social scrapes for freshness; social wins for intent.

## Links
[[Cold Outreach Playbook]] · [[STB Digital]] · [[Antigravity]] (Claude-side descendant).
