---
type: concept
status: compiled
compiled: 2026-07-06
sources:
  - raw/chatgpt/misc/2025-06-30--mlb-bet-analysis.md
  - raw/chatgpt/misc/2026-03-05--tennis-betting-edge-analysis.md
  - raw/chatgpt/misc/2025-06-29--betting-edge-analysis.md
---
# Sports Betting Frameworks
> One-liner: a versioned battery of 11 named analysis frameworks (`0629T11` … `0629T11-K`) run against every game — parse matchup + odds, run all frameworks, emit labeled JSON verdicts; applied to MLB, tennis, and NBA through 2025–2026.

## The system (as of 2025-06-30)
- **Input contract:** away/home, date, ET start, money-line odds, O/U total, listed starters.
- **Processing:** run *every one* of the 11 previously-defined frameworks per game — no cherry-picking.
- **Output contract:** 11 clearly-labeled JSON blocks per game (e.g. "0629T11 – Betting Edge Analysis").

## Coverage in the corpus
- **MLB:** daily multi-game runs (2025-06 sprint: Cubs, Mets/Pirates, HOU/PIT, SD@PHI…).
- **Tennis:** edge analysis through 2026-03 (French Open era threads, Fritz match analyses).
- **NBA:** bet-analysis threads (2026-03).
- Related: "Sports Betting Model Guide", "Predictive Model Game Winner" (semantic neighbors in misc).

## Why it matters beyond betting
- The purest expression of Mike's prompting doctrine: versioned frameworks + forced structured output = comparable, auditable model runs. Generalized in [[Prediction Model Prompting]]; same discipline as [[Agent Loop Design]]'s pasted-proof rule.

## Links
[[Prediction Model Prompting]] · [[Alpha Vantage]] · [[Role-Task Prompting]].
