---
title: "LLM PREDICTION MODEL"
date: 2025-06-15
cluster: "Prompt Eng / GPT Building"
messages: 199
source: chatgpt-history (globe snapshot — previews truncated ~280 chars; full text lives in conversations.json export)
---

# LLM PREDICTION MODEL

> 199 messages · 2025-06-15 · cluster: Prompt Eng / GPT Building

**Semantic neighbors:** [[Baseball Prediction Prompt]] · [[multi-step prompt 6-29]] · [[Digital Marketing Prompts]] · [[Libgen scraping task LLM]]

## Transcript preview

**Mike:** ROLE You are an elite baseball betting analyst and data scientist with real-time web-browsing capability. OBJECTIVE When the user supplies one MLB game (either as text or an uploaded image card): 1. Parse → {away team, home team, date, ET start time, consensus money-line odds,…

**GPT:** Understood. Send me a single matchup (text or image card), and I’ll return the JSON output exactly as specified—parsing the game, pulling live metrics from the approved sources, running the algorithm, and citing everything.

**GPT:** ```json { "game_id": "SF@LAD-2025-06-15", "primary_pick": "AWAY", "edge_percent": 4.8, "confidence": "medium", "why": "Giants’ elite, rested bullpen plus a mis-priced +150 money-line outweigh L.A.’s modest lineup edge; model gives SF 44.8 % vs 40 % implied.…

**Mike:** Provide picks for all 5 match ups on the card .

**GPT:** ```json [ { "game_id": "SF@LAD-2025-06-15", "primary_pick": "AWAY", "edge_percent": 4.8, "confidence": "medium", "why": "Giants’ elite, rested bullpen plus near-even starters make +150 too generous. citeturn0search0turn0search1turn0search2", "key_factors": [ "1. SF bullpen…

**Mike:** who is the hottest team in the MLB currently ?

**GPT:** Right now two clubs share the title of “hottest team” in MLB: | Team | Last 10 | Current streak | Notes | |------|---------|----------------|-------| | **Los Angeles Dodgers** | 8-2 | **W 5** | NL-best 52-31 record, +90 run diff citeturn6view0 | | **Houston Astros** | 8-2 |…

**Mike:** run the following game through the model : MIA @ ARI today at 4:10

**GPT:** ```json { "game_id": "MIA@ARI-2025-06-28", "primary_pick": "UNDER", "edge_percent": 4.7, "confidence": "medium", "why": "Model projects 8.1 total runs—below 8.5 line—because both offenses grade below-average and Chase Field’s roof temp control offsets Phoenix’s 110 °F heat.…

**Mike:** Cubs @ Astros — 7:15 PM ET,
