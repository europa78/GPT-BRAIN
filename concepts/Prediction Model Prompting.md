---
type: concept
status: compiled
compiled: 2026-07-06
sources:
  - raw/chatgpt/misc/2025-06-30--mlb-bet-analysis.md
  - raw/chatgpt/dev/2023-12-16--create-pynance-script.md
  - raw/chatgpt/stock/2023-10-06--alpha-vantage-stock-data.md
  - raw/chatgpt/stock/2023-04-30--stock-trading-system-spec.md
---
# Prediction Model Prompting
> One-liner: prompt patterns for prediction work across stocks and sports — structured multi-framework prompts with parse→run-N-frameworks→labeled-JSON-output shape, backed by Alpha Vantage data pipelines.

## The two strands
1. **Stocks (2023-era):** Python library of price data via [[Alpha Vantage]] (open/close/high/low per ticker), then predictive modeling with Statsmodels/Prophet/Scikit-learn/TensorFlow (PyNance thread, 2023-12; trading-system spec, 2023-04). Key learned question: how much history is enough for a given model class.
2. **Sports betting (2025–2026):** MLB/tennis/NBA — see [[Sports Betting Frameworks]]. Mature prompt shape (2025-06-30):
   - Parse matchup details (teams, date, odds, O/U, starters)
   - Run **11 previously-defined frameworks** (versioned IDs like `0629T11` … `0629T11-K`)
   - Output each framework's verdict as **clearly-labeled JSON**.

## Recurring prompt patterns
- **Framework versioning by date-code** (`0629T11`) — prompts as versioned artifacts.
- **Structured output demanded up front** (labeled JSON per framework) — makes results comparable across games/days.
- **Objective block first** ("### OBJECTIVE … for each game you will 1. 2. 3.") — numbered contract, not prose.
- Same discipline as [[Agent Loop Design]]'s pasted-proof rule: force the model into checkable output.

## Links
[[Sports Betting Frameworks]] · [[Alpha Vantage]] · [[Role-Task Prompting]].
