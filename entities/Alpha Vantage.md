---
type: entity
status: compiled
compiled: 2026-07-06
sources:
  - raw/chatgpt/dev/2023-12-16--create-pynance-script.md
  - raw/chatgpt/stock/2023-10-06--alpha-vantage-stock-data.md
---
# Alpha Vantage
> One-liner: stock-market data API powering Mike's price-data library (open/close/high/low per ticker) and, later, the Claude-side news-sentiment pipeline.

## How it's used in practice
- **2023:** Python scripts pull per-ticker OHLC series into a local "library of stock price data" (AAPL, MSFT…), feeding Statsmodels/Prophet/Scikit-learn/TensorFlow experiments — see [[Prediction Model Prompting]].
- **Claude-side:** data source for the [[Antigravity]] news-sentiment scraper (repo `europa78/Google-News-Sentiment-Loop`). `confidence: preview-only` (Claude-side, not in this corpus)

## Links
[[Prediction Model Prompting]] · [[Sports Betting Frameworks]] · [[Antigravity]].
