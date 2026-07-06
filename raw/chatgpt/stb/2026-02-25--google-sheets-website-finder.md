---
title: "Google Sheets Website Finder"
date: 2026-02-25
cluster: "STB / Marketing / Web"
messages: 4
source: chatgpt-export conversations.json (FULL transcript)
---

# Google Sheets Website Finder

> 4 messages · 2026-02-25 · cluster: STB / Marketing / Web

**Semantic neighbors:** [[MPOWR Outreach - Mark]] · [[Advise Wisely website]] · [[SEO Growth and PPC]] · [[Website Service Analysis]]

## Transcript

**Mike:** Write an Apps Script meant for Google Sheets to take one column filled with businesses, search the web for each one individually, and identify their website.

**GPT:** Below is a **Google Apps Script for Google Sheets** that:

- Reads business names from **one column** (default: **Column A**)
- Uses the **Google Custom Search JSON API** to search the web **one business at a time**
- Writes the **best-guess official website** into another column (default: **Column B**)
- Skips common directory/social sites (Yelp/Facebook/etc.)
- Caches results + rate-limits requests to avoid quotas/errors

> Why Custom Search API? Apps Script can’t legally/consistently scrape Google search result pages. The Custom Search API is the supported way to “search the web” from code.

---

## 1) What you need first (one-time setup)

1. Create a Custom Search Engine (CSE) and set it to search the **entire web**.
2. Get:
   - **API Key** (Google Cloud project)
   - **CX** (Custom Search Engine ID)

Then in your Sheet:
- **Extensions → Apps Script**
- Paste the code below
- Set your API Key + CX via the included menu command

---

## 2) Apps Script (paste all of this)

```javascript
/***********************
 * Business → Website Finder (Google Sheets)
 * Uses Google Custom Search JSON API
 *
 * Default:
 *   Input businesses: Column A (A2:A)
 *   Output websites:  Column B
 ***********************/

const CONFIG = {
  sheetName: null,        // null = active sheet
  headerRows: 1,          // first row is header
  inputCol: 1,            // 1 = Column A
  outputCol: 2,           // 2 = Column B
  maxRowsPerRun: 400,     // safety limit per run
  resultsPerQuery: 5,     // how many search results to examine
  delayMs: 350,           // polite pacing (reduce errors/quotas)
  skipIfOutputExists: true
};

// Common non-official domains to ignore
const BLOCKED_HOST_SNIPPETS = [
  "facebook.com",
  "instagram.com",
  "linkedin.com",
  "twitter.com",
  "x.com",
  "yelp.com",
  "yellowpages.com",
  "mapquest.com",
  "bbb.org",
  "chamberofcommerce.com",
  "angi.com",
  "homeadvisor.com",
  "thumbtack.com",
  "tripadvisor.com",
  "opencorporates.com",
  "dnb.com",
  "bloomberg.com",
  "crunchbase.com",
  "google.com",
  "g.page",
  "goo.gl",
  "maps.app.goo.gl",
  "wikipedia.org"
];

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu("Biz Tools")
    .addItem("Set API Key + CX", "setCseCredentials")
    .addItem("Find Websites (Column A → B)", "findWebsitesForBusinesses")
    .addToUi();
}

/**
 * Prompts user to store API credentials in Script Properties.
 */
function setCseCredentials() {
  const ui = SpreadsheetApp.getUi();
  const props = PropertiesService.getScriptProperties();

  const apiKeyResp = ui.prompt("Google Custom Search API Key", "Paste your API key:", ui.ButtonSet.OK_CANCEL);
  if (apiKeyResp.getSelectedButton() !== ui.Button.OK) return;

  const cxResp = ui.prompt("Custom Search Engine (CX)", "Paste your CX (Search Engine ID):", ui.ButtonSet.OK_CANCEL);
  if (cxResp.getSelectedButton() !== ui.Button.OK) return;

  props.setProperty("CSE_API_KEY", apiKeyResp.getResponseText().trim());
  props.setProperty("CSE_CX", cxResp.getResponseText().trim());

  ui.alert("Saved! Now run: Biz Tools → Find Websites (Column A → B)");
}

/**
 * Main entry: reads businesses from CONFIG.inputCol and writes websites to CONFIG.outputCol.
 */
function findWebsitesForBusinesses() {
  const sheet = CONFIG.sheetName
    ? SpreadsheetApp.getActive().getSheetByName(CONFIG.sheetName)
    : SpreadsheetApp.getActiveSheet();

  if (!sheet) throw new Error("Sheet not found. Check CONFIG.sheetName.");

  const { apiKey, cx } = getCseCreds_();

  const lastRow = sheet.getLastRow();
  const startRow = CONFIG.headerRows + 1;
  const numRows = Math.min(CONFIG.maxRowsPerRun, Math.max(0, lastRow - CONFIG.headerRows));

  if (numRows <= 0) return;

  const inputRange = sheet.getRange(startRow, CONFIG.inputCol, numRows, 1);
  const outputRange = sheet.getRange(startRow, CONFIG.outputCol, numRows, 1);

  const businesses = inputRange.getValues().map(r => (r[0] || "").toString().trim());
  const existingOut = outputRange.getValues().map(r => (r[0] || "").toString().trim());

  const cache = CacheService.getScriptCache();
  const out = [];

  for (let i = 0; i < businesses.length; i++) {
    const name = businesses[i];
    const already = existingOut[i];

    if (!name) {
      out.push([already || ""]);
      continue;
    }
    if (CONFIG.skipIfOutputExists && already) {
      out.push([already]);
      continue;
    }

    const cacheKey = "bizsite:" + name.toLowerCase();
    const cached = cache.get(cacheKey);
    if (cached !== null) {
      out.push([cached]);
      continue;
    }

    // Query: business name + "official site" helps reduce directory results
    const query = `${name} official website`;
    let website = "";

    try {
      website = findBestWebsiteViaCse_(apiKey, cx, query, CONFIG.resultsPerQuery);
    } catch (err) {
      // If something fails, record blank but keep going
      website = "";
    }

    cache.put(cacheKey, website, 21600); // 6 hours
    out.push([website]);

    Utilities.sleep(CONFIG.delayMs);
  }

  outputRange.setValues(out);
}

/**
 * Calls Google Custom Search and selects the best likely official website.
 */
function findBestWebsiteViaCse_(apiKey, cx, query, numResults) {
  const url =
    "https://www.googleapis.com/customsearch/v1" +
    `?key=${encodeURIComponent(apiKey)}` +
    `&cx=${encodeURIComponent(cx)}` +
    `&q=${encodeURIComponent(query)}` +
    `&num=${encodeURIComponent(Math.min(Math.max(numResults, 1), 10))}`;

  const res = UrlFetchApp.fetch(url, {
    muteHttpExceptions: true,
    followRedirects: true,
    headers: { "Accept": "application/json" }
  });

  const code = res.getResponseCode();
  if (code !== 200) {
    // Helpful debug info (view in Apps Script logs)
    console.warn("CSE error", code, res.getContentText());
    return "";
  }

  const data = JSON.parse(res.getContentText());
  const items = (data && data.items) ? data.items : [];
  if (!items.length) return "";

  // Score candidates and pick best
  let best = { url: "", score: -999 };

  for (const it of items) {
    const link = (it.link || "").toString().trim();
    if (!link) continue;

    const host = getHost_(link);
    if (!host) continue;

    const normalizedHost = host.toLowerCase();
    if (isBlockedHost_(normalizedHost)) continue;

    // Basic scoring:
    // - prefer root domains over deep paths
    // - prefer HTTPS
    // - slight boost if snippet/title contains "official"
    const title = (it.title || "").toString().toLowerCase();
    const snippet = (it.snippet || "").toString().toLowerCase();

    let score = 0;
    if (link.startsWith("https://")) score += 2;
    if (link.startsWith("http://")) score += 1;

    // root-ish URL gets a boost
    const path = getPath_(link);
    if (!path || path === "/" ) score += 3;
    if (path && path.length > 30) score -= 1;

    if (title.includes("official")) score += 2;
    if (snippet.includes("official")) score += 1;

    // penalize obvious directory-like patterns even if domain isn't blocked
    if (normalizedHost.includes("directory") || normalizedHost.includes("listings")) score -= 2;

    if (score > best.score) {
      best = { url: canonicalizeToSite_(link), score };
    }
  }

  return best.url || "";
}

/** Reads API key + CX from Script Properties. */
function getCseCreds_() {
  const props = PropertiesService.getScriptProperties();
  const apiKey = (props.getProperty("CSE_API_KEY") || "").trim();
  const cx = (props.getProperty("CSE_CX") || "").trim();

  if (!apiKey || !cx) {
    throw new Error('Missing CSE credentials. Run: Biz Tools → "Set API Key + CX"');
  }
  return { apiKey, cx };
}

/** Returns true if the host is in the blocked list. */
function isBlockedHost_(host) {
  return BLOCKED_HOST_SNIPPETS.some(b => host.includes(b));
}

/** Extract host from a URL. */
function getHost_(url) {
  try {
    const u = new URL(url);
    return u.hostname || "";
  } catch (e) {
    return "";
  }
}

/** Extract path from a URL. */
function getPath_(url) {
  try {
    const u = new URL(url);
    return u.pathname || "";
  } catch (e) {
    return "";
  }
}

/**
 * Canonicalize to the site root (scheme + host).
 * Keeps https if possible.
 */
function canonicalizeToSite_(url) {
  try {
    const u = new URL(url);
    const scheme = u.protocol === "http:" || u.protocol === "https:" ? u.protocol : "https:";
    return `${scheme}//${u.hostname}/`;
  } catch (e) {
    return "";
  }
}
```

---

## 3) How to use it

1. Put business names in **Column A**, starting at **A2** (A1 can be a header like “Business”).
2. Reload the sheet (so the menu appears).
3. Go to **Biz Tools → Set API Key + CX**
4. Then run **Biz Tools → Find Websites (Column A → B)**

It will fill Column B with the most likely official site.

---

## Notes / upgrades (optional)

- If you also have **addresses/cities**, you can make accuracy much higher by using the **Google Places API** (it returns the official website field for many businesses). If you want, tell me what columns you have (Name / City / Address), and I’ll give you a Places-based version too.
