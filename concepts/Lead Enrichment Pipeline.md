---
type: concept
status: compiled
compiled: 2026-07-06
sources:
  - raw/chatgpt/agents/2025-08-03--sunbiz-agent-mode.md
  - raw/chatgpt/misc/2025-06-25--clay-enrichment-assistance.md
  - raw/chatgpt/prospect/2023-07-14--lead-distribution-tech-stack.md
  - raw/chatgpt/stb/2025-01-12--bee-searchable-business-plan-website.md
---
# Lead Enrichment Pipeline
> One-liner: Mike's standing data pipeline — scrape/list-build → enrich (contacts, firmographics) → CSV → distribute to sellers or load into cadence tools; the tooling changed every era, the shape never did.

## The invariant shape
**Source → Enrich → CSV → Distribute/Deliver**

## Era by era
- **2023 (manual/Python):** paste-a-website-into-ChatGPT contact extraction ([[Datasys]]); scraping scripts (Apify actors, Flippa, Craigslist); "lead distribution tech stack" thread (2023-07-14).
- **2025-01 (productized):** [[BeeSearchable]] — Google Sheets dispersal to 8 sales agents, Endato API + Colab enrichment.
- **2025-06 ([[Clay]]):** Claygents + custom tables; Finnhub-powered Nasdaq look-alike prospecting; PhantomBuster Instagram collectors feeding tables.
- **2025-08 (agents):** [[Agent Mode Prospecting]] runs the whole pipeline autonomously → CSV → [[ZoomInfo]] upload.

## Rules of thumb
1. CSV is the universal joint between stages — every era converges on it.
2. Enrichment tool of the moment matters less than clean ICP filters upstream.
3. Distribution = [[SalesLoft]] cadences ([[Cold Outreach Playbook]]) or sales-agent sheets ([[BeeSearchable]]).

## Links
[[GoHighLevel]] · [[STB Digital]] · [[Investor Meeting Pipeline]].
