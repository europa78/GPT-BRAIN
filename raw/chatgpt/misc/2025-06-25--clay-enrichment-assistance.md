---
title: "Clay Enrichment Assistance"
date: 2025-06-25
cluster: "Misc / Uncategorized"
messages: 8
source: chatgpt-export conversations.json (FULL transcript)
---

# Clay Enrichment Assistance

> 8 messages · 2025-06-25 · cluster: Misc / Uncategorized

**Semantic neighbors:** [[OUTSIDE THE BOX 6-29]] · [[CLAY]] · [[Clay Expert Assistance]] · [[CLay Magic / find DATA]]

## Transcript

**Mike:** role : expert in the enrichment platform , Clay.  task :  answer questions related to Clay and create workflows and custom tables when asked.

**GPT:** Understood—consider me your on-call Clay enrichment pro. Whenever you need help configuring Claygents, building multi-step enrichment workflows, or designing custom tables/views, just let me know what you’re aiming to accomplish and the data you’re starting with, and I’ll map out the exact steps (plus any API keys, filters, and formulas) to get it done. What would you like to tackle first?

**Mike:** Create a Claygent using this info:   I run marketing for a Nasdaq listed company with the ticker , SRM.  Since we have been working them , the share price increased to $10 from $0.30.   I want to find similar companies to SRM that we can approach as prospects.

**GPT:** Below is a turnkey **Claygent blueprint** you can drop straight into a Clay table to surface a list of peer-quality Nasdaq prospects to SRM.

---

## 1. One-time setup  
1. **Get a free Finnhub key**  
   • Sign up at finnhub.io → copy the API token.  
2. **Store it in Clay**  
   • *Settings → Credentials → “Add Credential”*  
   • Name: `FINNHUB_API_KEY`&nbsp;&nbsp;Value: `<your token>`  

---

## 2. Table scaffold  
| Column | Purpose | Default / Formula |
|--------|---------|-------------------|
| **Ticker** | seed symbol | `SRM` (first row) |
| Sector | auto-filled | later block |
| Industry | auto-filled | later block |
| Market Cap | auto-filled | later block |
| Peer JSON | Claygent output |  |
| **(New Table)** Once peers expand you’ll add columns like `Company Name`, `Current Price`, `1-Year %`, `Contact Name`, `Email`, etc.

---

## 3. Claygent block (add to the SRM row)  

**Block type:** *Claygent → “Generate Structured Data”*  

**Input variables** (map from columns):  
```text
ticker = {{Ticker}}
apikey = {{FINNHUB_API_KEY}}
```

**Prompt**  
```markdown
You are a capital-markets research assistant.

**Goal:** Given a NASDAQ ticker, return up to 15 peer companies that trade on NASDAQ, operate in the same sector/industry, and have a market-cap between 0.5× and 2× the source company.

### Steps
1. Call `GET https://finnhub.io/api/v1/stock/profile2?symbol={{ticker}}&token={{apikey}}`
   • Extract `name, ipo, marketCapitalization as mc, industry, sector, exchange`.

2. Call `GET https://finnhub.io/api/v1/stock/peers?symbol={{ticker}}&token={{apikey}}`
   • Iterate through the returned tickers.
   • For each, hit `/stock/profile2` again.
   • Keep only rows where  
     – `exchange == "NASDAQ"`  
     – `industry` **OR** `sector` matches the source values  
     – `0.5 × mc ≤ peer.mc ≤ 2 × mc`.

3. For survivors, fetch quote data:  
   `GET https://finnhub.io/api/v1/quote?symbol={peer}&token={{apikey}}`  
   • Capture `c` (current price) and compute 1-year % change using `pc`.

4. Sort peers by **descending 1-year % change** and take the top 15.

### Output
Return a single-line JSON with two keys:

```json
{
  "base_company": {
    "company_name": "<name>",
    "sector": "<sector>",
    "industry": "<industry>",
    "market_cap": <mc>
  },
  "peers": [
    {
      "ticker": "...",
      "company_name": "...",
      "sector": "...",
      "industry": "...",
      "market_cap": ...,
      "current_price": ...,
      "one_year_change_pct": ...
    }
    // up to 15 peers
  ]
}
```
```

**Output mapping**  
*Set “Return type” to “JSON” → map JSON to column **Peer JSON***.  
*Also map `base_company.sector`, `base_company.industry`, `base_company.market_cap` to their respective columns for SRM.*

---

## 4. Expand & enrich  
1. **JSON → Rows**  
   • Add *“Expand JSON”* block on `Peer JSON` → choose `peers` → *Create new rows*.  
2. **Company details** (peer rows)  
   • Add *“Finnhub – Company Profile”* to pull website & HQ.  
3. **Contacts**  
   • Block: *“Find People – Apollo”* → filter *Department = Marketing* → Titles like *CMO, VP Marketing*.  
4. **Qualification / Scoring** *(optional)*  
   • Add formula columns: e.g., `Score = one_year_change_pct > 25 ? 10 : 5`.  
5. **Views**  
   • Create a *Kanban* view grouped by `Score` or a *Table* filtered to contacts with verified email.

---

## 5. Using it  
- **Add more seed tickers:** Insert additional rows, fill `Ticker`, and the Claygent will populate peers automatically.  
- **Outreach export:** Filter rows where `Contact Email` *is not empty* → *Export CSV* → push into your sequencing tool.

---

### Why this Claygent works
* Leveraging Finnhub’s `/stock/peers` keeps API calls minimal and costs low.  
* Market-cap banding ensures look-alike prospects (similar size = similar marketing budgets).  
* Sorting by 1-year performance surfaces companies that may have momentum—and budgets—to invest in marketing.  

Let me know if you need help wiring up any of the downstream enrichment or tweaking the peer-matching logic!
