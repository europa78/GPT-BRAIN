---
title: "Automated marketing prospecting"
date: 2025-08-01
cluster: "Finance / Trading / Markets"
messages: 18
source: chatgpt-export conversations.json (FULL transcript)
---

# Automated marketing prospecting

> 18 messages · 2025-08-01 · cluster: Finance / Trading / Markets

**Semantic neighbors:** [[Digital marketing proposal]] · [[Marketing proposal strategy]] · [[Flow chart conversion]] · [[FB Marketplace arbitrage analysis]]

## Transcript

**Mike:** provide a list of digital marketing prospecting that requires little to know human intervention.  the goal is to fully automate the process using agents mode.   find the prospect by accessing the web , email the contact that is the decision maker , agree to have them set up an appointment for a 15 minute phone to discuss selling them marketing services.   use my gmail account , google calendar to set the appointments.

**GPT:** To help design a fully automated prospecting process for digital marketing, could you clarify the following: Are you looking for specific tools or platforms (like automation services or CRMs) to automate the search for prospects and scheduling? Or are you primarily interested in the high-level steps and best practices that can be automated?

**Mike:** Please proceed. Do not ask any additional follow-up questions.

**GPT:** Here is a list of fully automated digital marketing prospecting methods designed to operate in agent mode with minimal to no human intervention. The goal is to find prospects, identify the decision-maker, email them, and schedule a 15-minute sales appointment using your Gmail and Google Calendar.

---

### 🔁 Fully Automated Prospecting Workflows (Agent Mode)

| Step | Description | Tools/Tech |
|------|-------------|------------|
| 1. **Scrape Web for Leads** | Continuously search business directories, Google Maps, and LinkedIn for SMBs in target verticals. | Clay + PhantomBuster or Bardeen |
| 2. **Enrich Contacts Automatically** | Append email, name, phone, and role of decision makers (owners, founders, CMOs). | Clay + Apollo or ZoomInfo API |
| 3. **Verify Email Validity** | Remove bad or spam-trap emails from the pipeline to improve deliverability. | NeverBounce or ZeroBounce |
| 4. **Generate Personalized Emails with AI** | Auto-write tailored emails referencing company websites, reviews, or pain points. | OpenAI API (via agent) or Instantly.ai |
| 5. **Auto-Send Cold Emails** | Schedule & throttle daily emails via your Gmail using safe warm-up strategies. | Instantly, Salesloft, Smartlead.ai |
| 6. **Track Link Clicks (Websights)** | Include links to your service page; use web tracking to detect interest. | ZoomInfo WebSights or Clearbit Reveal |
| 7. **Auto-Follow-Up Sequences** | Trigger a sequence if no reply, using behavior-based triggers (opens, clicks). | Lemlist, Instantly.ai, or Mailshake |
| 8. **Auto-Detect Positive Replies** | Use AI to detect replies indicating interest (e.g., “Sure,” “Let’s talk”). | Smartlead.ai + GPT tagging |
| 9. **Book Call on Your Calendar** | Send a dynamic booking link auto-connected to your Gmail + Google Calendar. | Calendly or Google App Script |
| 10. **Push Data to CRM or Sheet** | Store all touchpoints, contact history, and call bookings in a dashboard. | Airtable, Notion, or GoHighLevel |

---

### 📌 Bonus Agent Tasks You Can Deploy

| Task | Function |
|------|----------|
| 💡 Agent: “Lead Qualifier” | Scores each lead based on revenue, Google reviews, website quality, or ad spend. |
| 📧 Agent: “Email Personalizer” | Uses ChatGPT to craft personalized first lines from scraped data. |
| 📞 Agent: “Intent Detector” | Monitors reply inbox and flags responses indicating high purchase intent. |
| 📅 Agent: “Meeting Scheduler” | Auto-sends Calendly link upon reply and confirms via Gmail API. |
| 🔄 Agent: “Database Updater” | Refreshes stale leads monthly and removes bounced or unengaged contacts. |

---

### 🎯 Sample Workflow (Home Services Example)

1. Scrape all non-Google-Guaranteed roofers in cities under 30k population.
2. Enrich with ZoomInfo to find owner emails.
3. Auto-email with a personalized message referencing their poor Google visibility.
4. Follow-up 2–3x over 5 days.
5. On reply, auto-send a link to book a 15-min call via Google Calendar.

---

If you'd like, I can generate agent prompts/scripts or build the automation sequence for Clay, Bardeen, or another platform you use.

**Mike:** The tools and applications I have are zoom info, LinkedIn, salesloft .

**GPT:** Thanks—here's a fully automated prospecting workflow using **only** ZoomInfo, LinkedIn, and Salesloft, along with your Gmail and Google Calendar.

---

### 🔁 Fully Automated Prospecting Workflow (ZoomInfo + LinkedIn + Salesloft + Gmail)

| Step | Task | Tool |
|------|------|------|
| 1. **Find In-Market Prospects** | Use ZoomInfo’s **Streaming Intent** or **WebSights** to find SMBs actively researching services like SEO, PPC, or web design. | **ZoomInfo** |
| 2. **Pull Decision-Maker Info** | Auto-enrich company profiles with owner/founder emails, job titles, and direct dials. | **ZoomInfo** |
| 3. **Sync to Salesloft** | Automatically push leads into a Salesloft cadence. | **ZoomInfo → Salesloft Integration** |
| 4. **Auto-Send Email Sequences** | Schedule daily emails from your Gmail through Salesloft, throttled to 25–50/day to protect deliverability. | **Salesloft** |
| 5. **Track Opens, Clicks, Replies** | Use built-in tracking to monitor engagement. | **Salesloft** |
| 6. **Use Conditional Logic in Cadence** | If prospect replies with interest, automatically send your **Calendly link** or booking link tied to Google Calendar. | **Salesloft (Automation Rules)** |
| 7. **Auto-Book Meetings** | Let them book directly into your calendar—no manual handling. | **Calendly linked to Gmail + Google Calendar** |
| 8. **Update CRM or Sheet** | Export booked calls from Salesloft to Google Sheets or CRM for tracking. | **Salesloft → Google Sheets** |

---

### 🧠 Agent-Like Enhancements You Can Set Up

| Agent | Function |
|-------|----------|
| 🧲 ZoomInfo Intent Agent | Monitors for companies showing fresh buying intent weekly (e.g. "Website Design"). |
| 📩 Salesloft Auto-Responder | Detects positive replies and sends booking link instantly (via step logic). |
| 🧑‍💼 LinkedIn Connector | Sync ZoomInfo contacts to LinkedIn → Auto-connect with Salesloft snippet. |
| 🗓️ Booking Automation Agent | If “Yes” reply, push Calendly link → Confirm booking → Set reminder. |

---

### 📧 Example Email Template (Injected Automatically)

**Subject**: {FirstName}, noticed something about your online presence

Hi {FirstName},

I came across {CompanyName} while reviewing businesses in the area not yet taking advantage of Local Service Ads or enhanced SEO.

We help home service businesses like yours bring in 20–40 more calls a month from real local buyers.

Would you be open to a quick 15-minute call this week to see how this could work for you?

[Schedule Your Call](https://calendly.com/your-link)

— [Your Name]  
Simply The Best Digital

---

Let me know if you want help configuring ZoomInfo intent filters or a cadence in Salesloft—I can walk you through a real setup.

**Mike:** Automate the entire process with chat gpt agent mode.

**GPT:** Here is a fully automated **ChatGPT Agent Mode** prospecting system using only your existing tools: **ZoomInfo, LinkedIn, Salesloft, Gmail, Google Calendar**. This setup requires minimal to no human intervention once deployed.

---

## ⚙️ ChatGPT Agent Mode – Fully Automated Prospecting Workflow

| Stage | Agent Name | Function | Tools Used |
|-------|------------|----------|------------|
| 1. **Lead Discovery** | 🛰️ **Intent Scanner Agent** | Scans ZoomInfo for SMBs showing intent for "SEO", "Web Development", or "Digital Ads" weekly | ZoomInfo (Intent + WebSights) |
| 2. **Contact Puller** | 🧠 **Decision-Maker Extractor** | Pulls verified owner/founder info (email, phone, LinkedIn) | ZoomInfo |
| 3. **CRM Sync** | 🔁 **Salesloft Sync Agent** | Adds enriched contacts into a specific Salesloft cadence | ZoomInfo ↔ Salesloft |
| 4. **Email Automation** | 📨 **Smart Emailer Agent** | Uses custom ChatGPT prompt to generate personalized cold emails at scale inside Salesloft | Salesloft + GPT (API via Webhook or integrated prompt field) |
| 5. **Engagement Tracking** | 👁️ **Interaction Watcher Agent** | Tracks opens, clicks, and replies. Tags “Interested” responses with a label. | Salesloft (automation rules) |
| 6. **Auto-Booker** | 📅 **Meeting Scheduler Agent** | On reply → auto-sends Calendly link and confirms time on your Google Calendar | Gmail + Calendly + Google Calendar |
| 7. **LinkedIn Connector** | 🔗 **LinkedIn Sync Agent** | Auto-sends a LinkedIn connection request referencing their company site + email follow-up | LinkedIn (via Bardeen or Zapier with message logic) |
| 8. **Lead Tracker** | 🗂️ **Logger Agent** | Logs all successful engagements (opens, replies, bookings) into a Google Sheet or Notion DB | Salesloft → Zapier → Google Sheets |

---

## 🔁 Full Agent Flow Overview (Zero-Touch Example)

1. **ChatGPT Agent** logs into ZoomInfo weekly and searches for SMBs showing intent for SEO/digital ads.
2. For each match:
   - Pulls decision-maker info
   - Pushes data into Salesloft
3. **Agent auto-generates personalized emails** using website and industry keywords (GPT prompt)
4. Prospect receives the email and opens/clicks
5. If they reply positively, a GPT-triggered Salesloft rule:
   - Replies instantly with a personalized follow-up and a **Calendly link**
   - Adds booking to your Google Calendar (via Zapier or Calendly webhook)
6. Contact is logged and tagged as **Booked**

---

## 🧠 Example ChatGPT Agent Prompts

### 🔹 Email Writer Agent Prompt (used inside Salesloft webhook or field)

```plaintext
Act as a cold email copywriter. Write a brief, punchy email to a business owner of {CompanyName} in the {Industry} niche. Focus on how our agency helps businesses like theirs improve Google rankings, boost call volume, and generate more revenue. End with a clear CTA to book a 15-minute call via Calendly.
```

### 🔹 Response Filter Agent Prompt

```plaintext
Analyze this reply and return a label: “Interested”, “Neutral”, “Not Interested”, or “Out of Office”. Reply: {Insert Email Text}
```

---

## 🛠️ Tools for Automation Wiring

| Tool | Role |
|------|------|
| **Zapier or Make.com** | Trigger Salesloft reply → Send Gmail/Calendly → Update Google Sheet |
| **Calendly** | Auto-schedule meeting with Google Calendar sync |
| **Bardeen / Clay** *(optional)* | Automate LinkedIn actions, URL scraping, or webhooks |
| **OpenAI API** | Power GPT agents for email, classification, personalization |

---

Would you like the actual agent-mode YAML blueprint, webhook steps, or Zapier configuration to launch this flow live? I can generate that next.

**Mike:** What are the minimal requirements for agent mode to complete this task

**GPT:** To run the full **agent-mode prospecting automation** you've described (finding prospects, emailing them, and booking calls) with minimal human involvement, here are the **core requirements**—broken down into infrastructure, tools, integrations, and permissions.

---

## ✅ Minimal Requirements to Run Agent Mode Prospecting

### 1. **Access & Permissions**
| Requirement | Why It’s Needed |
|-------------|------------------|
| ✅ ZoomInfo Account with Intent Data & Enrichment | To identify high-intent leads and extract decision-maker contact details |
| ✅ Salesloft Account with Cadence + API/Webhook Access | For automating cold outreach, follow-ups, and reply detection |
| ✅ Gmail Account with API Access Enabled | To send/track emails via automation and confirm meeting notifications |
| ✅ Google Calendar API Enabled | To auto-schedule meetings from replies |
| ✅ Calendly Account (Pro or above recommended) | To generate booking links and trigger Google Calendar updates |
| ✅ LinkedIn Account | For connecting/following leads via automation (optional but useful) |

---

### 2. **System Capabilities & Integrations**
| Component | Minimal Capability Needed |
|----------|----------------------------|
| ⚙️ ChatGPT Agent Mode or API + Long-term Memory | To personalize emails, interpret replies, and manage logic between steps |
| 🔄 Workflow Engine (e.g. Zapier, Make.com, n8n) | To connect Gmail, Salesloft, Calendly, and ZoomInfo together via triggers/actions |
| 📤 Email Warm-Up or Deliverability Guard | Use a warmed domain or deliverability management to avoid Gmail throttling |
| 📊 Data Logging (Google Sheets, Notion, or CRM) | To track open/click/reply/book status per lead |

---

### 3. **Key Automations & Triggers**
| Automation Task | Tool/Trigger |
|------------------|--------------|
| Auto-import high-intent leads weekly | ZoomInfo Workflow or API |
| Auto-enrich with contact info | ZoomInfo or Clay |
| Add lead to Salesloft cadence | Zapier, ZoomInfo CRM push |
| Send AI-personalized cold email | Salesloft + OpenAI agent or native personalization |
| Monitor replies and detect interest | Salesloft automation rules + GPT |
| Send Calendly link on "interested" reply | Zapier trigger → Gmail or Salesloft reply step |
| Confirm call and book in Google Calendar | Calendly webhook or Gmail script |
| Update tracking sheet | Zapier → Google Sheets |

---

### 4. **OpenAI Agent Mode Deployment Option (Optional but Ideal)**
You can run this in **OpenAI Agent Mode** via:
- **Custom GPT** with memory + APIs enabled
- Embedded into Clay or Bardeen as a reasoning layer
- Triggered by webhook events (e.g. reply classification, email writing, schedule routing)

---

### 🔒 Minimum Security/Compliance Safeguards
- **OAuth2 Auth** for Gmail, Calendar, LinkedIn APIs
- **Token rotation and API key encryption**
- **Email opt-out/unsubscribe compliance** managed via Salesloft

---

## 🧩 Optional (But Powerful) Add-ons
| Tool | Enhancement |
|------|-------------|
| Clay | Scrape + enrich + sync across ZoomInfo and LinkedIn |
| Bardeen | Visual workflow agent for LinkedIn and calendaring |
| Instantly.ai | Alternative to Salesloft if wanting more AI-native flows |

---

Would you like a visual architecture map of how these systems interact, or a Zapier/Make blueprint for this workflow?

**Mike:** Yes

**GPT:** Here's the architecture diagram for your fully automated prospecting system using **Agent Mode**. It shows how ZoomInfo, ChatGPT, Salesloft, Gmail, Calendly, and Google Calendar interact through Zapier/Make, enabling minimal-touch lead generation, outreach, and appointment booking.

Let me know if you'd like:
- The actual **Zapier workflows**
- A **Custom GPT agent prompt setup**
- A **step-by-step deployment guide** for your stack

**Mike:** Can I prompt agent mode to access my subscription to zoom info , download a list into a csv file , push it to a cadence in  salesloft to send out automated emails ?

**GPT:** In theory, yes — you can use **Agent Mode** (via a custom GPT or orchestrator like AutoGen, CrewAI, or LangChain) to automate this workflow. However, **direct access to ZoomInfo’s interface via GPT alone is not currently possible**, because:

### ❌ Limitations of ChatGPT Agent Mode Alone
| Limitation | Reason |
|------------|--------|
| 🔐 **ZoomInfo has no public API for full access** | Their API is limited, and bulk list exports typically require manual interaction unless integrated into a partner CRM |
| 🖱️ **No browser automation natively in Agent Mode** | GPT can’t click, scroll, or log in unless connected to tools like Puppeteer or Bardeen |
| 🔌 **Salesloft Cadence Push needs authentication** | Salesloft API is gated and requires OAuth and API token management |

---

## ✅ But You *Can* Do This with Agent Mode + Tool Integration

Here’s how you can automate it end-to-end using GPT agents **plus third-party tools**:

---

### 🔁 Full Workflow via ChatGPT Agent Mode + Tooling

| Step | Task | How to Automate |
|------|------|------------------|
| 1. **Search ZoomInfo using filters** | Agent writes search logic based on ICP | ✅ Use Zapier/Clay if API access is granted via ZoomInfo |
| 2. **Export CSV** | Pull company + contact list | ✅ Via ZoomInfo → CRM → CSV export |
| 3. **Push to Salesloft Cadence** | Assign prospects to cadence | ✅ Salesloft API (Zapier / Custom Script) |
| 4. **Auto-send emails** | Salesloft sequences execute | ✅ Natively in Salesloft |
| 5. **Monitor replies** | GPT classifies tone/intent | ✅ Salesloft + GPT webhook |
| 6. **Send Calendly link if interested** | Auto-respond via Gmail | ✅ Zapier → Gmail → Calendly link |
| 7. **Book meeting** | Show on Google Calendar | ✅ Calendly → Google Calendar webhook |
| 8. **Log activity** | Add lead & status to sheet | ✅ Zapier → Google Sheets |

---

### 🔧 Tool Stack You Need to Make It Work

| Tool | Role |
|------|------|
| **ZoomInfo CRM Connector** | Exporting prospects with contact data |
| **Zapier or Make.com** | Automate ZoomInfo → Salesloft push |
| **OpenAI GPT (via API)** | Write cold email text, classify replies |
| **Salesloft API** | Trigger cadences & tag replies |
| **Calendly + Gmail** | Send & confirm booking |
| **Google Sheets** | Lead database / status tracking |

---

### 🧠 GPT Agent Prompt to Start This Flow

If embedded in a tool (like Clay, Zapier, or Make), here’s how you'd prompt Agent Mode:

```plaintext
Search ZoomInfo for small business owners in the roofing industry in Florida with company sizes 1–50 and revenue under $10M. Export the top 100 with verified emails and push them into Salesloft cadence “Home Services SEO.”

Use custom email copy below for cold outreach. If a reply is detected and indicates interest, send the following Calendly link: https://calendly.com/yourname/15min

Log each step in a Google Sheet with columns: Company Name, Contact Name, Email, City, Status, Last Contact Date.
```

---

### ✅ Bottom Line

You **can** accomplish this workflow using GPT Agent Mode **with tool integration** (Zapier, Salesloft API, Gmail, Calendly). You’ll just need to:
- Set up secure access to each platform
- Use automation bridges like Zapier or Clay
- Let GPT handle copywriting, logic, classification

Want me to help set up the Zapier or Clay workflows and provide the code/prompt logic?

**Mike:** What is an effective way to use agent mode for lead generation and outreach ?

**GPT:** An effective way to use **ChatGPT Agent Mode** for lead generation and outreach is to combine it with automation tools like **ZoomInfo**, **Salesloft**, **Zapier**, and **LinkedIn**, and assign each agent a specific role within the pipeline. This creates a self-operating system where agents discover leads, qualify them, write outreach, and book appointments — all without human intervention.

---

## ⚙️ High-Performance Agent Mode System for Lead Generation & Outreach

### 🧠 Agent-Based Architecture

| Agent | Function | Goal |
|-------|----------|------|
| 🔍 **Prospector Agent** | Finds leads based on ICP (industry, size, geography, intent, etc.) | Identify high-fit prospects |
| 🧬 **Enricher Agent** | Adds decision-maker data (name, email, role, LinkedIn) | Get accurate contact info |
| ✍️ **Copywriter Agent** | Writes highly personalized cold emails using website or LinkedIn data | Boost open/reply rates |
| 📨 **Outreach Agent** | Schedules and sends emails/follow-ups using Salesloft | Automate outreach |
| 🧠 **Reply Analyzer Agent** | Analyzes responses and classifies intent | Route hot leads instantly |
| 📅 **Scheduler Agent** | Sends Calendly link and confirms meetings on Google Calendar | Book appointments |
| 🗂️ **CRM Logger Agent** | Updates a Google Sheet or CRM with status, activity, and follow-up steps | Maintain pipeline visibility |

---

## 🔁 End-to-End Workflow Overview

1. **Trigger Agent Mode**: Activate workflow on a schedule (e.g., daily search for new intent signals).
2. **Find Leads**: Prospector Agent pulls new businesses from ZoomInfo that match your ICP.
3. **Enrich Contacts**: Enricher Agent pulls verified emails, phone numbers, and LinkedIn URLs.
4. **Auto-Write Emails**: Copywriter Agent uses ChatGPT to personalize cold emails at scale.
5. **Send Emails via Salesloft**: Outreach Agent pushes prospects into a cadence (Gmail-based).
6. **Analyze Replies**: Reply Analyzer Agent classifies responses as Interested / Not Interested / OOO.
7. **Book Meetings**: Scheduler Agent sends your Calendly link and confirms call via Google Calendar.
8. **Log Everything**: CRM Logger Agent updates a Google Sheet with lead details + stage.

---

## 💡 Prompt Templates for Each Agent

### 🔍 Prospector Agent
```plaintext
Find roofing companies in Florida with under 50 employees and revenue under $10M. Only include companies with websites and Google reviews under 4.0.
```

### ✍️ Copywriter Agent
```plaintext
Write a cold email to {Name}, the owner of {Company}, referencing their outdated website and lack of Google reviews. Offer a 15-minute consultation to show how we can help them get more calls.
```

### 🧠 Reply Analyzer Agent
```plaintext
Classify this email reply as: Interested, Not Interested, Out of Office, or Needs More Info.
Reply: “I’m curious, but want to see some examples of results first.”
```

---

## 🛠️ Tools That Enhance This System

| Tool | Use |
|------|-----|
| **ZoomInfo** | Intent signals + decision-maker data |
| **Salesloft** | Email sequences, reply tracking |
| **Zapier / Make** | Connect GPT agents to Gmail, Calendar, Sheets |
| **Calendly** | Meeting scheduling |
| **Google Sheets** | Track prospect stages, notes, and booking status |
| **Clay / Bardeen** | Visual workflows + LinkedIn automation |

---

## ✅ Key Advantages of Using Agent Mode

- 24/7 autonomous outreach engine
- Hyper-personalized messages at scale
- Lead scoring and filtering built in
- Multi-touch follow-up without human input
- Appointments booked directly to your calendar

---

Would you like me to generate the YAML blueprint or a working Zapier/Clay scenario that puts this into practice with your ZoomInfo + Salesloft stack?
