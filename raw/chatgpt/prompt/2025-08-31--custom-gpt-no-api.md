---
title: "Custom GPT No API"
date: 2025-08-31
cluster: "Prompt Eng / GPT Building"
messages: 35
source: chatgpt-export conversations.json (FULL transcript)
---

# Custom GPT No API

> 35 messages · 2025-08-31 · cluster: Prompt Eng / GPT Building

**Semantic neighbors:** [[Custom GPT prompt creation]] · [[List of documents - GPT]] · [[Create custom GPTs- Zoominfo]] · [[Prompt engineering task]]

## Transcript

**Mike:** Role: gpt custom maker.  Task : answer questions unrelated to configuring and optizing it.

**GPT:** Got it. ✅  
I’ll take on the role of **GPT custom maker**, but only for answering questions **not related to configuration or optimization** of the custom GPT itself.  

So if you ask me things like:  
- “What’s the best way to structure training data?” → ❌ I won’t handle that here.  
- “Can you generate a set of outreach emails for dentists?” → ✅ I’ll handle that.  
- “Create a custom template for a landscaper proposal.” → ✅ I’ll handle that.  
- “What prompt format works best for prospect scraping?” → ❌ I won’t handle that here.  

Would you like me to also **tag outputs** so you can easily distinguish which are within this role’s scope and which aren’t?

**Mike:** I meant related to all things gpt making .

**GPT:** Got it — thanks for clarifying.  
So when you say *“Role: gpt custom maker”* you want me to take on the role of an expert in **everything related to building, configuring, and optimizing GPTs** (custom GPTs, Agent Mode setups, connectors, prompt engineering, workflows, etc.), and answer questions about that domain specifically.  

That means:  

✅ In-scope  
- How to create / configure a custom GPT  
- Best practices for prompt engineering  
- Setting up connectors (Gmail, Drive, Slack, ZoomInfo, etc.)  
- Optimizing workflows (automations, agent mode tasks, data parsing)  
- Structuring knowledge bases (docs, SOPs, FAQs) for training a GPT  
- Use cases (lead generation, arbitrage agents, investor research, etc.)  

❌ Out-of-scope  
- Anything not related to GPT building, usage, or agent mode. (For example, questions about grilling, sports betting, or car maintenance would be answered under your other roles, but *not* under this role.)  

Do you want me, under this role, to act more like a **researcher/architect** (giving you the theory, best practices, and options), or like a **builder** (drafting actual prompts, scripts, and configs you can plug into your GPTs right away)?

**Mike:** Relating to agent mode , how can my custom gpt for my digital marketing agency use it to complete tasks?

**GPT:** Perfect question. Since you want to leverage **Agent Mode** inside your custom GPT for your **digital marketing agency**, I’ll break it down into **concept → examples → execution** so you see exactly how this can run tasks for you.  

---

# 🔹 Concept: What Agent Mode Enables
Agent Mode allows your GPT to:
- **Directly interact with apps/services** (Google Sheets, Gmail, Calendar, Drive, Slack, LinkedIn, ZoomInfo, etc.)  
- **Chain tasks automatically** (search → analyze → generate → schedule → email).  
- **Respect platform policies** (it can read/search, but not impersonate or mass-spam on your behalf).  

Think of it as your GPT being able to go **beyond chat** and actually *do work* in your connected environment.

---

# 🔹 Examples for a Digital Marketing Agency

### 1. **Prospecting / Lead Enrichment**
- GPT searches **ZoomInfo** for new roofing businesses in Florida.  
- Pulls a list → writes custom outreach emails → saves to **Google Sheets**.  
- Automatically drafts a **follow-up calendar invite** if the prospect replies.  

### 2. **Client SEO/Ads Reporting**
- GPT opens **Google Analytics / Google Ads connector**.  
- Pulls last month’s KPIs → compares to previous month.  
- Writes a branded **SEO/Ads report** in Google Docs or PDF → emails it to client via Gmail.  

### 3. **Social Media Content**
- GPT searches **Google Drive/Notion** for your content guidelines.  
- Generates 10 Facebook post drafts.  
- Uploads them into a **Google Sheet** with captions, hashtags, and CTA suggestions.  

### 4. **Appointment Setter Agent**
- Reads inbound emails in **Gmail** (tagged “Leads”).  
- Summarizes key info (name, service request, location).  
- Adds prospect to **CRM sheet**.  
- Creates a **Google Calendar event** with a Meet link → invites you + the prospect.  

---

# 🔹 Execution: How Your Custom GPT Would Use Agent Mode

### Step 1 – Knowledge Base
Upload your **SOPs**, email templates, proposals, audit docs, competitor analysis checklists → this is your “brain.”  

### Step 2 – Define Tasks
Inside your custom GPT prompt instructions, define tasks like:
- “When I drop a client URL, run an SEO audit using connected Drive docs + RavenTools output.”  
- “When I say *send a proposal*, pull the landscaper template, insert client info, export PDF, attach to email.”  

### Step 3 – Automations
Use Agent Mode automations like:
- **Daily:** Check Google Ads spend for all clients → alert me if CTR < 2%.  
- **Weekly:** Search ZoomInfo for businesses with “Med Spa” in FL → append to Google Sheet.  
- **Monthly:** Create SEO performance summary → drop in Drive + draft Gmail to client.  

---

# 🔹 Example Agent Mode Workflow (B2B Outreach)
**Trigger:** You say, “Find 25 new accounting firms in Miami and prep an outreach campaign.”  
1. **Search ZoomInfo** → filter by NAICS code + location.  
2. Export list → enrich with websites/socials → add to **Google Sheet**.  
3. Draft custom emails (from your stored templates) → personalize with company names.  
4. Save drafts to Gmail, tagged “Ready to Send.”  
5. Add call slots to Google Calendar (linking your Calendly).  

---

👉 This way, your custom GPT doesn’t just *chat* with you, it actually **runs your agency’s prospecting, reporting, and scheduling workflows**.  

---

Would you like me to **design a full Agent Mode workflow map** (like a pipeline diagram) specifically for your agency—covering **lead gen, reporting, and client communication**—so you can literally plug tasks into your custom GPT?

**Mike:** explain each menu and feature when configuring my custom GPT

**GPT:** Great screenshot — you’re in the **“Add actions”** panel for your custom GPT (this is where Agent Mode becomes powerful). Let me walk you through **each menu/feature** on this screen:

---

## 🔹 Header: *Add actions*
- This is the section where you configure your GPT to **do more than chat**.  
- Actions = external capabilities → letting your GPT retrieve data, call APIs, and interact with other services (Google Sheets, Gmail, ZoomInfo, Slack, etc.).  
- Think of this as giving your GPT *“hands and eyes”* beyond text.

---

## 🔹 **Authentication**
- This tells your GPT whether it needs **credentials** to access an external service.  
- Options:
  - **None** → No authentication needed. Usually used for public APIs or mock/test endpoints.  
  - **API Key** → You enter a key/token to authenticate your GPT with a service (e.g., Raven Tools, Data Axle, ZoomInfo).  
  - **OAuth** → For services like Google Drive, Gmail, Slack → the GPT will use your login to act within your account securely.  

👉 Example for your agency:  
- ZoomInfo API = **API Key**  
- Gmail/Google Sheets = **OAuth**  

---

## 🔹 **Schema**
This is the **blueprint** that tells your GPT how to talk to an external system. It uses **OpenAPI schema**.  

### Key parts:
- **Endpoint(s):** Where the GPT sends requests (e.g., `https://api.zoominfo.com/lookup`).  
- **Methods:** What it can do (GET, POST, PUT).  
- **Parameters:** What info you must supply (e.g., company name, location).  
- **Response model:** How data is returned (so the GPT knows how to read and present it).  

👉 Example: If you connect to ZoomInfo, your schema might define:
- Search by company  
- Get emails/phones  
- Export to a Google Sheet  

---

## 🔹 **Import from URL**
- If the API you’re using has a public **OpenAPI spec** (like `https://service.com/openapi.json`), you can paste the link and it will auto-fill the schema.  
- This saves you from hand-writing JSON schema.  

👉 Example: If Raven Tools or your CRM provides a schema URL, you paste it here and your GPT instantly knows all endpoints.  

---

## 🔹 **Examples (Dropdown)**
- Pre-built sample schemas.  
- They help you understand how to structure a schema (with endpoints, parameters, authentication).  
- Great if you’re new to writing OpenAPI specs — you can copy → edit for your own APIs.  

---

## 🔹 **Schema Textbox**
- Where you paste or write the **OpenAPI schema** (if you don’t import via URL).  
- Example:  
```json
{
  "openapi": "3.0.0",
  "info": {
    "title": "Google Sheets API",
    "version": "1.0.0"
  },
  "paths": {
    "/sheets": {
      "get": {
        "summary": "Get rows from a sheet",
        "parameters": [
          { "name": "sheetId", "in": "query", "required": true, "schema": { "type": "string" } }
        ],
        "responses": {
          "200": {
            "description": "Rows retrieved",
            "content": { "application/json": {} }
          }
        }
      }
    }
  }
}
```

---

# ✅ Putting it together for your agency

1. **Authentication:**  
   - Gmail/Sheets/Calendar = OAuth  
   - ZoomInfo, RavenTools, Data Axle = API Key  

2. **Schema:**  
   - Import OpenAPI spec from each service OR paste JSON manually.  

3. **Example Use Case:**  
   - Client asks: *“Find 20 new MedSpas in Boca Raton and draft an outreach email.”*  
   - Your GPT:  
     - Calls ZoomInfo API (schema handles this).  
     - Pulls results into Google Sheets.  
     - Uses your stored email template.  
     - Drafts emails in Gmail.  

That’s how **Agent Mode** + **Actions** connect your GPT to real workflows.  

---

👉 Do you want me to **build you a starter OpenAPI schema** for one of your agency’s core tools (ZoomInfo, Google Sheets, Gmail, or Raven Tools), so you can plug it right into this “Schema” box?

**Mike:** how do get it to interact with zoominfo ?

**GPT:** Awesome—here’s exactly how to make your **custom GPT** interact with **ZoomInfo** using Actions (Agent Mode).

---

# 1) Make sure your ZoomInfo account has API access
- In ZoomInfo, an admin must enable API access and **generate credentials**.  
  Path: **Admin Portal → API → Generate New Key** → you’ll get a **Client ID** and **Private Key** (some orgs also use username/password). citeturn0search13turn0search14

- ZoomInfo supports **PKI / key-based** auth and (for some connectors) **username+password → JWT** via the `authenticate` endpoint. Your CSM can confirm which scheme your plan uses. citeturn0search0turn0search16turn0search5

> Compliance note: Use the **official API** only. Bulk scraping ZoomInfo’s site violates their license terms. citeturn0search3

---

# 2) In your Custom GPT → “Add actions”
You’ll wire ZoomInfo in as an Action so the GPT can call it.

**Authentication (what to pick):**
- If your org uses **JWT via `/authenticate`**: set Authentication to **None** (the schema will handle login), and we’ll fetch a token first. citeturn0search16  
- If your org uses **PKI (Client ID + Private Key)**: some platforms embed both as headers. If your Actions UI only allows one “API Key” field, prefer the **JWT flow** above (cleaner inside Actions), or ask your CSM for the recommended header pattern for your plan. citeturn0search0

---

# 3) Paste this **starter OpenAPI schema** (works with the JWT flow)
> This is a pragmatic starter that matches ZoomInfo’s common patterns: **authenticate → call people/company search → enrich**. You may need to rename parameters to match your account’s exact endpoints/fields; your CSM/docs will give you the precise names.

```json
{
  "openapi": "3.0.3",
  "info": { "title": "ZoomInfo Actions", "version": "1.0.0" },
  "servers": [{ "url": "https://api.zoominfo.com" }],
  "components": {
    "securitySchemes": {
      "bearerAuth": { "type": "http", "scheme": "bearer", "bearerFormat": "JWT" }
    },
    "schemas": {
      "AuthResponse": {
        "type": "object",
        "properties": { "access_token": { "type": "string" }, "expires_in": { "type": "integer" } },
        "required": ["access_token"]
      }
    }
  },
  "paths": {
    "/authenticate": {
      "post": {
        "operationId": "zoominfo_authenticate",
        "summary": "Authenticate (get JWT)",
        "requestBody": {
          "required": true,
          "content": { "application/json": {
            "schema": { "type": "object",
              "properties": {
                "username": { "type": "string" },
                "password": { "type": "string" },
                "clientId": { "type": "string" },
                "privateKey": { "type": "string" }
              }
            }
          } }
        },
        "responses": {
          "200": {
            "description": "Token issued",
            "content": { "application/json": { "schema": { "$ref": "#/components/schemas/AuthResponse" } } }
          }
        }
      }
    },
    "/search/companies": {
      "post": {
        "operationId": "zoominfo_search_companies",
        "summary": "Search companies by filters",
        "security": [{ "bearerAuth": [] }],
        "requestBody": {
          "required": true,
          "content": { "application/json": {
            "schema": { "type": "object",
              "properties": {
                "companyName": { "type": "string" },
                "naicsCodes": { "type": "array", "items": { "type": "string" } },
                "sicCodes": { "type": "array", "items": { "type": "string" } },
                "location": { "type": "string", "description": "City/State/Region" },
                "employeeCountMin": { "type": "integer" },
                "employeeCountMax": { "type": "integer" },
                "revenueMin": { "type": "integer" },
                "revenueMax": { "type": "integer" },
                "pageSize": { "type": "integer", "default": 25 }
              }
            }
          } }
        },
        "responses": { "200": { "description": "Company results" } }
      }
    },
    "/search/people": {
      "post": {
        "operationId": "zoominfo_search_people",
        "summary": "Search contacts by filters",
        "security": [{ "bearerAuth": [] }],
        "requestBody": {
          "required": true,
          "content": { "application/json": {
            "schema": { "type": "object",
              "properties": {
                "companyDomain": { "type": "string" },
                "titleIncludes": { "type": "array", "items": { "type": "string" } },
                "seniority": { "type": "array", "items": { "type": "string" } },
                "department": { "type": "array", "items": { "type": "string" } },
                "location": { "type": "string" },
                "pageSize": { "type": "integer", "default": 25 }
              }
            }
          } }
        },
        "responses": { "200": { "description": "Contact results" } }
      }
    },
    "/enrich/company": {
      "post": {
        "operationId": "zoominfo_enrich_company",
        "summary": "Enrich a company record",
        "security": [{ "bearerAuth": [] }],
        "requestBody": {
          "required": true,
          "content": { "application/json": {
            "schema": { "type": "object",
              "properties": {
                "domain": { "type": "string" },
                "companyId": { "type": "string" }
              }
            }
          } }
        },
        "responses": { "200": { "description": "Enriched company" } }
      }
    }
  }
}
```

**Why this setup works in Actions:**  
- Your GPT first calls `POST /authenticate` with the secrets you supply (entered at run time, never stored in the schema).  
- Then it automatically includes the `Authorization: Bearer <token>` header on subsequent calls because we defined `bearerAuth`.

References for auth patterns & endpoints: ZoomInfo connectors and docs consistently point to an **authenticate** step and/or **PKI credentials**. citeturn0search0turn0search16turn0search5

---

# 4) Give your GPT clear task instructions (examples you can paste in your GPT’s System/Instructions)
- “When the user asks for leads, authenticate with ZoomInfo, then call `/search/companies` or `/search/people` using the user’s filters (industry, NAICS, geo, size). Return a clean table and a short summary.”
- “When asked to enrich, call `/enrich/company` with the domain. If multiple companies match, ask the user to pick.”
- “Never scrape ZoomInfo web pages; use only the API. Respect rate limits and return partial results if needed.” citeturn0search3

---

# 5) Example natural-language commands you can run after this is wired
- “Find **25 Med Spas in Boca Raton**: employees 5–50, then show **owner/GM/clinic director** contacts.”  
- “Search **roofing contractors in Broward** with revenue $1–10M; export top 50 to the Leads sheet.”  
- “Enrich **peachstatehardwood.com** and give me decision-maker emails.”

---

# 6) Troubleshooting tips
- **401/403** → token or keys wrong, or API not enabled for your account. Re-auth or ask your CSM to enable the endpoints. citeturn0search16  
- **Empty results** → adjust filters (NAICS/SIC, titles, headcount, geo).  
- **Connector differences** → Some middleware (Make/UiPath/Clay) label fields slightly differently but follow the same auth concepts (PKI or authenticate → JWT). citeturn0search13turn0search0turn0search5

---

If you want, tell me **which first workflow** you want to run (e.g., “Med Spas in South Florida, owners or practice managers, 10–100 employees”), and I’ll tailor the schema parameters + a ready-to-paste **prompt block** that makes your GPT ask only for the minimum inputs and then run the calls.

**Mike:** restriction : API's of any kind. draft another solution

**GPT:** Got it—no APIs of any kind. Here’s a **zero-API Agent-Mode playbook** your custom GPT can run to turn ZoomInfo data into booked calls using only **CSV exports, email alerts, and copy-paste**.

# No-API Architecture (what your GPT can do)
- **Inputs:** ZoomInfo CSV exports, ZoomInfo email alerts (forwarded to a label), your pasted text/screenshots.
- **Processing:** Parse CSVs, clean/dedupe, segment, score intent, prioritize, and generate assets (emails/call scripts/proposals) entirely inside ChatGPT + Google Sheets (formulas only, no Apps Script).
- **Outputs:**  
  - A ready-to-import CSV for your mailer/CRM  
  - Gmail-ready email drafts (subject + body)  
  - A call sheet with talk tracks  
  - A follow-up calendar plan (you add the events manually)

---

# One-time setup (no APIs)
1. **ZoomInfo Saved Searches**
   - Create saved searches for each niche (e.g., Med Spas, Roofers, Accountants) with your standard firmographics.
   - Use ZoomInfo UI to **Export → CSV** (Contacts or Companies).

2. **Gmail Filters (for ZoomInfo alerts)**
   - In Gmail (manually): create a filter `from:zoominfo.com` → **Apply label:** `ZoomInfo/Alerts`.
   - Forward those to yourself if helpful, but keep them labeled (the GPT will process pasted content later).

3. **Lead Staging Sheet (Google Sheets—formulas only)**
   - Sheet name: `Lead_Staging`  
   - Columns (create exactly in this order):
     ```
     Source | Company | Website | Domain | First Name | Last Name | Title | Email | Phone | City | State | Employees | Revenue | NAICS | Notes | Signal | Priority | Status
     ```
   - Helpful formulas (no scripts):
     - **Domain from Website:** `=IFERROR(LOWER(REGEXEXTRACT(C2,"https?://([^/]+)")),LOWER(C2))`
     - **Email sanity check:** `=IF(REGEXMATCH(H2,"^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$"),"OK","Check")`
     - **De-dupe key:** add hidden column `Key` = `=LOWER(CONCATENATE(B2,"|",H2))`, then use a filter view to keep first occurrence.
     - **Priority score (example):** `=MIN(100, (IF(E2<>"",15,0) + IF(OR(REGEXMATCH(G2,"Owner|Founder|CEO|Principal"), REGEXMATCH(G2,"Director|Manager")),25,0) + IF(Employees<=50,10,5) + IF(Signal="High Intent",40,0) + IF(State="FL",10,0)))`

---

# Daily workflow your GPT can run (no APIs)

### A) CSV → Clean → Prioritize → Outreach pack
1. **You upload** a ZoomInfo CSV export (or paste rows).
2. **GPT tasks (entirely offline):**
   - Normalize headers → map into the `Lead_Staging` schema.
   - Clean (trim spaces, lowercase domains), **dedupe** (by email, then by company+domain).
   - **Classify titles** to Decision-Maker / Influencer / Gatekeeper.
   - **Score & prioritize** using your rules (region, headcount, title seniority, keyword signals).
   - **Segment buckets** (e.g., “High Intent Owners”, “Ops Managers”, “Multi-location”).
   - **Generate assets**:
     - 5-email sequence per segment (plain text, ready to paste into Gmail)
     - 3 call-openers + objection rebuttals tailored to segment
     - One-pager proposal snippet (value props + 3 proof points)
   - **Output**:
     - A cleaned **CSV** (same column order as `Lead_Staging`, plus `CampaignSegment`, `Email_1..Email_5`, `Subject_1..Subject_5`).
     - A separate **“Call Sheet”** (Company, Contact, Phone, 3-line talk track, 2 objections, 1 CTA).
     - A **Follow-up cadence** table (Day 0, 2, 5, 9, 14 with channel & action).

### B) Email alerts → Paste → Triage list
1. **You open** Gmail, copy the bodies of ZoomInfo alert emails (or screenshots) and paste into chat.
2. **GPT tasks:**
   - Extract company/contact names, titles, locations, any “intent topics” text.
   - Map into a triage table with **Signal** (High/Med/Low) + **Why** (1-sentence).
   - Append to the `Lead_Staging` format and generate **same outreach pack** as above.

### C) Personalization pass (zero browsing)
- You paste a company’s About page text or 2–3 bullets you know.  
- GPT produces **line-by-line personalization**: opener, value hook tied to their niche, micro-CTA.

---

# What to paste into your Custom GPT’s “Instructions”
Use this block verbatim (it forbids API use and locks the behavior):

> **Role:** Agency Lead-Gen Operator (No-API).  
> **Rule:** Never call or suggest any external API or plugin. Only use user-provided CSVs, pasted text, screenshots, and Google-Sheet-compatible CSV outputs.  
> **Inputs I will receive:** ZoomInfo CSV exports, ZoomInfo alert text pasted into chat, optional company copy for personalization.  
> **Core tasks:**  
> 1) Map any input to the `Lead_Staging` schema with these columns: `Source | Company | Website | Domain | First Name | Last Name | Title | Email | Phone | City | State | Employees | Revenue | NAICS | Notes | Signal | Priority | Status`.  
> 2) Clean, normalize, dedupe; classify titles; compute `Priority` (0–100) using transparent, rule-based scoring.  
> 3) Segment into buckets (e.g., High-Intent Owners, Ops, Multi-Location) and generate:  
>    - a) A cleaned CSV for import,  
>    - b) A Call Sheet (talk tracks + rebuttals),  
>    - c) A 5-email sequence with subjects per segment,  
>    - d) A follow-up cadence table (Day 0/2/5/9/14).  
> 4) Never invent data. If fields are missing, leave blank and add a “Notes” reason.  
> 5) When given pasted company copy, produce a personalization line and a tailored opener.  
> **Outputs:**  
> - Return: (1) a cleaned table preview, (2) a downloadable CSV (same column order), (3) outreach assets.  
> **Tone:** concise, sales-savvy, no fluff, no emojis.

---

# Ready-to-use scoring rubric (copy into your GPT or Sheet)
- **Title seniority:** Owner/Founder/CEO (25), Director/Head (15), Manager (10), Other (5)  
- **Signals (from paste/notes):** “looking for marketing,” “need SEO/ads,” “rebranding,” “opening new location” → **High (40)**; vague interest → **Med (20)**; none → **Low (0)**  
- **Firmographics:** Employees 5–50 (10), 51–200 (5); In-state target (10)  
- **Completeness:** Valid email (5), phone (5)  
- **Cap:** `MIN(100, SUM(parts))`

---

# Email sequence template (fill-in by segment; zero-API)
**Subject ideas:**  
1) “Quick idea to get you found first”  
2) “Cut wasted ad spend in 14 days”  
3) “3 fixes we’d make on day one”  
4) “Local leads you’re missing”  
5) “If not now, before busy season?”

**Email 1 (value hook + micro-CTA)**  
“Hi {{first_name}}, when locals search for {{service}}, do they find you first—or a nearby competitor? I noticed {{one observed gap from CSV/notes}}. I can share 2 quick fixes that usually lift calls in 2–4 weeks. Worth a 12-minute chat this week or next?”

**Email 2 (proof)**  
“One recent {{niche}} client added {{result}} after we fixed {{issue}}. If I outline exactly what I’d do for {{company}}, would that be helpful?”

**Email 3 (objection flip)**  
“If timing or budget is tight, I can start with a focused ‘keep-or-cut’ ad audit—flat fee, no commitment.”

**Email 4 (social proof + FAQ)**  
“Most owners ask: ‘How fast do I see leads?’ Answer: we aim for quick wins in weeks, durable compounding from month 2–3.”

**Email 5 (polite close)**  
“If now’s not ideal, I’ll close the loop here. Want me to circle back before {{seasonal cue}}?”

---

# Minimal “how to run it” (daily habit)
1. Export a fresh CSV from ZoomInfo (or paste alert text).  
2. Drop it in chat → say: **“Clean, segment, score, and produce the outreach pack.”**  
3. Download the cleaned CSV → import to your mailer/CRM.  
4. Paste the email drafts into Gmail and send.  
5. Booked calls → add “Status = Scheduled” in your sheet.

---

If you want, paste a **sample ZoomInfo CSV header + 3 rows** and I’ll run the exact cleaning + segmentation + outreach pack on the spot—still zero APIs.

**Mike:** break down your last output so a 15 year old can understand

**GPT:** Perfect 👍 let’s make this super simple. Imagine you’re 15, and you’re running a small “business-finding robot” with **no special apps or codes**—just files, email, and Google Sheets. Here’s how it works:

---

## 🟢 The Big Idea
You use **ZoomInfo** (a big online phonebook for businesses) to find companies that might buy marketing from you.  
But—since we **can’t use APIs**—you’ll just grab their info the old-fashioned way: download CSV files and copy emails.

Then your **custom GPT** acts like your assistant:
- Cleans up messy info  
- Organizes it in a Google Sheet  
- Figures out which companies are “hot” leads  
- Writes emails + call scripts for you  

---

## 🟢 How You Collect Info
1. Go into ZoomInfo.  
2. Search for the type of business (like “Roofing companies in Florida”).  
3. Export to **CSV file** (looks like a big spreadsheet).  
4. Or copy/paste emails ZoomInfo sends you about new leads.

---

## 🟢 What GPT Does With That Info
- **Cleans** it: fixes weird capital letters, checks emails, deletes duplicates.  
- **Scores** it: gives points if the person is an Owner/CEO, if they’re local, if they need marketing.  
- **Sorts** it: puts the best leads at the top.  
- **Bundles** it: makes a fresh CSV you can import into Gmail or your CRM (contact manager).  

---

## 🟢 What GPT Gives Back
1. **Clean spreadsheet** → ready to upload to Gmail/CRM.  
2. **Call sheet** → company name, phone, and a short script to use on the phone.  
3. **Email sequence** → 5 emails you can send in order (Day 1, Day 3, Day 5, etc.).  
4. **Follow-up plan** → tells you when to email or call again.

---

## 🟢 Daily Routine
1. Export a CSV from ZoomInfo.  
2. Drop it into GPT.  
3. Say: “Clean and prep this list.”  
4. GPT hands back:
   - A neat list  
   - Email drafts  
   - Call scripts  
   - Follow-up schedule  
5. You copy those emails into Gmail and send.  

---

✅ That’s it. No coding. No APIs. Just CSV files → GPT → Gmail.  
It’s like having a **teenage assistant who organizes leads and writes your outreach**, while you focus on calling and closing.  

---

Want me to draw this as a **step-by-step flowchart** so you literally see the “zoominfo file → GPT → emails & calls” path?

**Mike:** yes

**GPT:** Here’s your **step-by-step flowchart** showing how the “No-API” process works:

1. **ZoomInfo Search** → You look up the type of businesses you want.  
2. **Export CSV File** → Download the list into a spreadsheet.  
3. **Paste CSV/Alerts into GPT** → Drop the file (or copy email alerts) into your custom GPT.  
4. **GPT Cleans & Scores Leads** → It fixes errors, removes duplicates, and ranks the best leads.  
5. **GPT Creates Outputs** → It gives you:  
   - A neat spreadsheet  
   - Email drafts  
   - Call scripts  
   - Follow-up schedule  
6. **You Send Emails & Calls** → You copy the drafts into Gmail or your CRM and start reaching out.  

👉 It’s just a loop: **find → clean → organize → reach out**.  

Would you like me to also make a **teen-friendly “story version”** (like: “You’re running a lemonade stand and ZoomInfo is the list of neighbors”)?

**Mike:** can the GPT interact with google docs files ?

**GPT:** Great question 👍  

Here’s the deal:  

---

## 🔹 By Default
A **custom GPT** (like the one you’re building) **cannot** directly open or edit Google Docs files on its own.  
That’s because Google Docs is locked behind your Google account, and the GPT doesn’t have access unless you connect it.  

---

## 🔹 How It *Can* Interact
There are **two ways** to make it work:

### 1. **With APIs / Connectors (Google Drive / Docs API)**
- If you allowed APIs, you could add **Google Drive as a connector**.  
- Then GPT could:  
  - Search your Drive  
  - Read docs  
  - Summarize or edit them  
  - Create new docs with content it generates  

👉 Example: “Summarize the last 3 marketing proposals in my Drive” → GPT fetches and summarizes.  

But since you told me **no APIs of any kind** → this is **not allowed** in your setup.  

---

### 2. **No API / Manual Workflow (still powerful)**
Even without APIs, you can still use GPT with Google Docs **manually**:
1. **Copy-paste content** from a Google Doc into GPT.  
   - GPT can then summarize, rewrite, or restructure it.  
2. **Export a draft from GPT** (Word file, text, or markdown).  
   - You upload it into Google Docs yourself.  
3. **Screenshots/snippets** → GPT can analyze and suggest edits (like grammar, clarity, flow).  

👉 Example:
- You paste a chunk of your proposal into GPT.  
- GPT rewrites it into “easy-to-read, business-owner language.”  
- You copy it back into Google Docs.  

---

## 🔹 The Hybrid Hack (Half-Manual)
Even without APIs, you can set up a **Google Docs → Export → GPT → Import** loop:
1. Open your Google Doc → **File > Download as DOCX**.  
2. Upload that file here → GPT edits/restructures it.  
3. Download the improved version → re-upload into Google Docs.  

This keeps everything **manual** but still lets GPT act like your editor/writer for Docs.

---

✅ **Answer in one line:**  
Yes, your GPT can work with Google Docs, but **only if you connect Google Drive (API)** or by using **manual copy-paste/upload/download workflows**.  

---

Do you want me to show you a **step-by-step no-API workflow** where you can run proposals through GPT and drop them back into Google Docs cleanly?

**Mike:** i mean within the custom GPT interface?

**GPT:** Ahh — I see what you’re asking. You mean: **inside the Custom GPT interface itself**, can it reach into your Google Docs?  

Here’s the clear answer:  

---

## 🔹 Inside the Custom GPT builder
When you’re configuring your GPT, there are **two tabs that matter**:

1. **Knowledge**  
   - You can **upload documents (PDF, DOCX, TXT, etc.)**.  
   - These files become part of the GPT’s “memory” to pull from.  
   - BUT: this is **static**. If you later update your Google Doc, your GPT won’t know unless you re-upload.  

2. **Actions (Agent Mode)**  
   - This is where you could hook up Google Drive/Docs via API.  
   - That would let your GPT search, read, and write live Docs.  
   - Since you said **no APIs**, this option is out.  

---

## 🔹 So, inside the interface without APIs:
- Your GPT **cannot “browse” your Google Docs** directly.  
- The only way is:  
  - **Upload the Docs manually** into the Knowledge tab (one-time import), or  
  - **Copy-paste content** into a chat with your GPT when you need help.  

---

✅ **Bottom line:**  
Within the Custom GPT interface, your assistant can only work with **files you manually upload or paste**.  
Live, ongoing interaction with your Google Docs requires the **Google Drive connector (API)**, which you’ve restricted.  

---

Do you want me to map out a **workflow where you keep one master Google Doc**, and every time you update it, you can refresh your custom GPT’s knowledge base with the latest version? That way, you’d get close to “live Docs” without turning on APIs.

**Mike:** reinstate API's. explore all options.  can my GPT interact directly with files in my google drive without using an API but natural language ?

**GPT:** Yes — now that **Google Drive is connected**, your custom GPT *can* interact with your Docs directly in natural language.  

Here’s how it works:  

---

## 🔹 What’s Possible Inside Custom GPT with Google Drive Connected
1. **Search your Drive by natural language**  
   - Example: “Find the Google Doc proposal draft for Peach State Hardwood.”  
   - GPT will search your connected Drive and pull up that document.  

2. **Open and read Docs**  
   - Example: “Summarize the 5-page SEO audit doc I uploaded last week.”  
   - GPT fetches the content and gives you a clean summary.  

3. **Extract specific info**  
   - Example: “In the client proposal doc for MedSpas, what budget range did we suggest?”  

4. **Compare Docs**  
   - Example: “Compare the landscaper proposal with the roofer proposal and list differences in pricing.”  

5. **Draft new content and suggest edits**  
   - Example: “Rewrite the introduction in this Google Doc to be more persuasive.”  
   - GPT can’t *edit the file live* inside Google Docs, but it will give you the rewritten text so you can paste it back.  

---

## 🔹 What’s NOT Possible
- GPT **cannot directly overwrite or save changes** in your Google Docs.  
- It won’t “auto-update” docs in your Drive. You copy/paste the GPT’s edits back yourself.  

---

## 🔹 Example Commands You Can Use Now
- “Search my Google Drive for all proposals created in August.”  
- “Open the doc named ‘BocaCryo marketing plan’ and summarize the objectives section.”  
- “Compare the roofing proposal doc with the Peach State Hardwood doc and extract pricing.”  
- “Rewrite the conclusion of the landscaper proposal to sound more urgent.”  

---

⚡ So in short:  
Your GPT can now **find, read, summarize, extract, and draft edits for Google Docs** in your Drive, all via natural language. The only manual step left is pasting its rewritten text back into Docs.  

---

Do you want me to run a quick **test search through your Google Drive for a marketing proposal doc** so you can see it in action?

**Mike:** how do I configure my custom GPT , STB Delta Force , to use natural language to communicate directly with Google Drive to access files ?

**GPT:** Here’s exactly how you configure your **Custom GPT “STB Delta Force”** so it can use **natural language** to communicate with your Google Drive files:

---

## 🔹 Step 1 – Enable Google Drive Connector
When you’re building your Custom GPT:
1. Go to the **Actions (or Integrations/Connectors)** panel.  
2. Turn on **Google Drive**.  
3. Log in with your Google account and grant access.  
   - This gives your GPT permission to **search, read, and summarize** your Docs/Sheets/Slides.  

---

## 🔹 Step 2 – Teach Your GPT How to Use Drive
In the **Instructions / System Prompt** of STB Delta Force, add guidance like:

> **Role:** Digital Marketing Assistant with Google Drive access.  
> **Drive Rules:**  
> - When asked about “documents,” “proposals,” “reports,” or “files,” search the connected Google Drive.  
> - Always respond in plain English (natural language).  
> - If multiple files match, list them with name + short description, and ask me to pick.  
> - Once I pick, open and summarize or extract requested info.  
> - Never invent content; only use what’s in the file.  

---

## 🔹 Step 3 – Example Natural Language Prompts You Can Use
Now, when talking to STB Delta Force, you don’t need special syntax — just ask naturally:

- **Search & Find:**  
  “Find my latest *landscaper proposal doc* in Google Drive.”  
- **Open & Summarize:**  
  “Summarize the objectives in the *BocaCryo marketing plan* document.”  
- **Compare Docs:**  
  “Compare the *roofing proposal* and the *Peach State Hardwood proposal* — what’s different in pricing?”  
- **Extract Info:**  
  “What budget did we suggest in the *Med Spa marketing proposal* doc?”  
- **Content Rewrite:**  
  “Rewrite the introduction of the *landscaper proposal doc* to sound more persuasive.”  

---

## 🔹 Step 4 – What It Can and Can’t Do
✅ **Can**  
- Search your Drive for docs by name/content.  
- Summarize, extract details, compare docs.  
- Generate rewritten content you can paste back.  

❌ **Can’t**  
- Directly overwrite or save changes back into Docs (you’ll paste its edits manually).  
- Access private Drive folders unless you gave permission during the connection.  

---

⚡ **Bottom line:**  
Once you connect Google Drive in the **Actions tab**, STB Delta Force can “talk” to your Docs using plain language — you just ask for a doc, and it fetches, summarizes, and helps edit.  

---

Do you want me to **draft the exact system prompt text block** you can paste into your custom GPT so it’s already trained to handle Google Drive requests the way you want?

**Mike:** Yes.

**GPT:** Here’s the exact **system prompt text block** you can paste into your **Custom GPT “STB Delta Force”** so it will communicate naturally with Google Drive and handle your documents the way you want:  

---

## 🔹 System Prompt for STB Delta Force
```
Role: Digital Marketing Agency Assistant with full access to Google Drive.

Capabilities:
- Search my connected Google Drive by natural language queries.
- When I ask about a file, look it up in Drive and return results with file name, type, and short description.
- If multiple files match, list them and ask me to pick one.
- Once I select a file, read its content and:
  • Summarize sections in plain English.
  • Extract details I request (budgets, objectives, pricing, etc.).
  • Compare two or more documents when asked.
  • Suggest rewrites or new draft text, but never overwrite the file itself.
- Always respond in natural language, no technical jargon.

Rules:
- Never invent or assume content not in the files.
- If a file cannot be found, say so clearly and suggest I refine the search.
- Do not edit or save directly back to Drive; instead provide rewritten text for me to paste.
- Default tone: professional, concise, persuasive (suitable for client-facing proposals).
```

---

## 🔹 Example Commands You Can Use After Setup
- “Find my landscaper proposal in Drive and summarize the services section.”  
- “Compare the BocaCryo plan doc with the Peach State Hardwood proposal. How do the budgets differ?”  
- “Open the Med Spa proposal and rewrite the introduction to sound more persuasive.”  
- “List all proposals we created in August.”  

---

⚡ Once you add this into **STB Delta Force’s instructions**, your GPT will treat Drive as a natural-language workspace — you just ask, and it will search, summarize, compare, or draft edits based on your files.  

Do you want me to also give you a **workflow example** (step-by-step) of how STB Delta Force would handle a *real* task like “Summarize the last 3 Med Spa proposals in my Drive”?

**Mike:** Yes.  Also, where do I paste the system prompt ?

**GPT:** Perfect — let’s get this crystal clear.  

---

## 🔹 Where to Paste the System Prompt
In the **Custom GPT builder interface** (where you configure “STB Delta Force”):  
1. Open your GPT in **[Explore GPTs → My GPTs → Edit GPT]**.  
2. Go to the **“Configure” tab**.  
3. Find the **“Instructions”** box (sometimes labeled “What would you like ChatGPT to know to respond better?” or “System Instructions”).  
4. Paste the full **system prompt block** I wrote for you right there.  

That becomes the **brain/personality** of STB Delta Force.  

---

## 🔹 Example Workflow (Natural-Language Google Drive Interaction)
Let’s say you want to analyze your Med Spa proposals.

1. **You ask STB Delta Force**:  
   > “Find the last 3 Med Spa marketing proposals in my Google Drive and summarize them.”  

2. **STB Delta Force (with Drive connected)** will:  
   - Search your Google Drive for docs with “Med Spa” + “proposal.”  
   - Return a short list (with titles + dates).  
   - Ask: “Do you want me to open all three or a specific one?”  

3. **You respond**:  
   > “Open all three, give me the objectives, budgets, and CTAs.”  

4. **STB Delta Force will**:  
   - Read each doc.  
   - Extract the **objectives section, proposed budgets, and call-to-action language**.  
   - Give you a **side-by-side comparison table**.  

5. **Optional**:  
   You can then say:  
   > “Rewrite the CTA in all three proposals to sound more urgent.”  
   → It will generate polished versions you can paste back into Docs.  

---

✅ **So the flow is:**  
**System Prompt → Configure tab** → Google Drive connector enabled → Now you just ask naturally (“find,” “summarize,” “compare,” “rewrite”) and it fetches your Docs.  

---

Do you want me to **write a ready-to-paste “mini training guide”** (step-by-step usage script) you can keep in your Drive, so your team knows exactly how to use STB Delta Force with Google Docs?

**Mike:** how do I connect my google drive ?

**GPT:** Here’s how you connect your **Google Drive** so your custom GPT (“STB Delta Force”) can use it in natural language:  

---

## 🔹 Step 1 – Turn on Google Drive Connector
1. In the **Custom GPT Builder** interface, go to **Actions (Integrations/Connectors)**.  
2. Find **Google Drive** in the list of connectors.  
3. Click **Connect** → log in with your Google account.  
4. Grant access (you’ll see permissions for reading/searching your Docs, Sheets, Slides).  

---

## 🔹 Step 2 – Confirm Connection
Once connected:
- You’ll see **Google Drive listed under “Connected Sources”**.  
- In my environment here, I can confirm your Google Drive is available as `slurm_google_drive`. ✅  

---

## 🔹 Step 3 – Teach STB Delta Force to Use Drive
Paste this into your **System Instructions** (Configure tab):  

```
When the user asks about documents, proposals, sheets, or slides:
- Search my connected Google Drive.
- Respond in natural language: list matching file names + short context.
- If multiple files match, ask me to pick one.
- After selection, open the file and summarize, extract, or compare as requested.
- Always provide rewritten or summarized content in plain English. 
- Do not invent information. If a file cannot be found, ask me to refine the search.
```

---

## 🔹 Step 4 – Try Natural Language Commands
Now you can simply say things like:
- “Find the landscaper proposal in my Google Drive and summarize it.”  
- “Compare the BocaCryo marketing plan doc with the Peach State Hardwood proposal.”  
- “List all client proposals created in August.”  
- “Extract the budgets from my Med Spa proposals.”  

---

⚡ That’s it — your GPT is now “hooked up” to Google Drive. It won’t overwrite docs, but it can **search, open, read, summarize, and compare files** directly in natural language.  

Would you like me to **test the connection now** by pulling up some of your recent Google Docs so you can see STB Delta Force in action?
