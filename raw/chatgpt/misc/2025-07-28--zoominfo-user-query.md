---
title: "ZoomInfo user query"
date: 2025-07-28
cluster: "Misc / Uncategorized"
messages: 54
source: chatgpt-export conversations.json (FULL transcript)
---

# ZoomInfo user query

> 54 messages · 2025-07-28 · cluster: Misc / Uncategorized

**Semantic neighbors:** [[Zoominfo categories]] · [[ZoomInfo workflows deep email]] · [[Diagram generator]] · [[Credit deduction explanation]]

## Transcript

**Mike:** you are a professional zoominfo user.  when asked provide informed answers.

**GPT:** Understood—I’ll answer like an advanced ZoomInfo power user. Just let me know what you need help with.

**Mike:** I want utilize zoom infos data base to find prospects with similar characteristics as my current clients .  How can I do this ?

**GPT:** Here’s the quickest, most effective **ZoomInfo look-alike prospecting playbook**:

---

## 1) Enrich your current client list (to learn the pattern)
**Goal:** turn a raw list of customers into a fully-attributed dataset (firmographics, technographics, intent, hiring signals).

**How**
- Upload your customer domains to **Enrich** (or pipe them through FormComplete/Enrich via CRM).
- Pull: Industry/NAICS, employee count bands, revenue bands, HQ geography, tech stack (CMS, analytics, call tracking, CRM, ad platforms), funding, job postings volume, growth %, intent topics being tracked, and key contacts’ functions/seniority.

**Output:** a clean spreadsheet you can pivot to see what your best customers have in common.

---

## 2) Define your ICP with data (not gut feel)
From that enriched file, quantify:
- **Firmographic sweet spot:** e.g., *US-based, 5–50 employees, $1–10M revenue, Privately held.*
- **Verticals that convert best:** e.g., *Home Services → Roofing, HVAC, Plumbing.*
- **Tech stack overlaps:** e.g., *WordPress + CallRail + Google Ads; no in-house marketing team > 3 people.*
- **Buying committee pattern:** typical titles/functions/seniority that sign (Owner, CEO, Managing Partner).
- **Change signals that precede wins:** recent **hiring in marketing**, **new funding**, **website tech changes**, **domain traffic spike**, **location expansions**.

Document this as your **ICP filter recipe**.

---

## 3) Recreate that ICP inside ZoomInfo’s Advanced Search
Use **Companies** + **Contacts** search with these layers:

**Firmographic filters**
- Industry / NAICS (include + exclude).
- Revenue & Employee bands.
- Geography (country, region, state, DMA).
- Ownership type (private, franchise, PE-backed, etc.).

**Technographics**
- CMS (WordPress, Shopify, Webflow, etc.).
- Ad platforms (Google Ads, Meta Ads Manager).
- Call tracking (CallRail), CRMs, chat widgets, etc.

**Signals & Growth**
- **Job postings** (hiring for “SEO”, “Paid Media”, “Marketing Manager”).
- **Funding events** (past 6–12 months).
- **Website traffic bands** (if available in your package).
- **Technology added/removed** in the last X months.

**Intent (Streaming Intent / Buyer Intent)**
- Topics like **“SEO”, “Digital Marketing”, “Paid Search”, “Web Development”**.
- Minimum **surge score** or **trending up** only.
- Time window (last 7/14/30 days depending on your speed-to-lead SLA).

**Contact-level**
- **Function:** Marketing, Operations, C-Suite, Owner.
- **Seniority:** Owner/Founder/CEO/President/Director.
- **Exclude** current customers, open opps, and do-not-contact lists (via CRM sync or list exclusion).

Save this as a **Dynamic List** so it updates automatically as new companies match.

---

## 4) Use ZoomInfo “Similar Companies” to speed up lookalikes
Open any A+ customer’s company profile → **Related/Similar Companies** (naming varies by UI version). Add those straight into your ICP list (apply same revenue/employee/intent filters to keep quality high).

---

## 5) Automate it with **Workflows**
Create a **Workflow** that:
1. Watches your **intent topics + ICP filters**.
2. **Auto-pushes new matches** to:
   - Salesforce/HubSpot Campaigns,
   - Your sequencing tool (ZoomInfo Engage, Outreach, Apollo, etc.),
   - A Slack/Email alert to reps.
3. Applies **suppression rules** (existing customers, open opps, disqualified reasons).

Tip: Build **two tiers**:
- **Tier 1 (hot):** ICP match **+ active intent surge + hiring/funding signal** → immediate SDR outreach.
- **Tier 2 (warm):** ICP match only → nurture sequence or ads audience.

---

## 6) Layer **WebSights** (reverse-IP) for real-time lookalikes
- Tag every site visitor with **industry + revenue + employee bands + tech stack** using ZoomInfo’s enrichment.
- **Backfill** unknown visitors with contact records that match your ICP and add them to workflows.
- Compare WebSights “frequent visitors” against your customer profile to refine your ICP continuously.

---

## 7) Score & prioritize (simple, fast)
Give each prospect a quick **ICP Fit Score (0–10)**:
- +2 fits revenue band
- +2 fits employee band
- +2 uses key tech stack
- +2 is surging on **your** intent topics
- +2 has a trigger event (funding, hiring, tech change)

Work Tier 1 (8–10) first, then 6–7, etc.

---

## 8) Rinse, measure, tighten
- Track **reply rate / meeting rate / SQL rate by filter**.
- Tighten or loosen bands (e.g., raise minimum employee count if <5 headcount never closes).
- Add/remove intent topics based on actual conversion data.

---

### Want a fast start?
Send me (or list out) 20 of your **best clients** with domains. I’ll show you the exact ICP query to recreate in ZoomInfo and how to wire the workflow so new lookalikes hit your SDRs’ inboxes automatically.

**Mike:** switch your focus to sending out emails.  how do I use the scheduled emails function to automate an email blast ?

**GPT:** Below is a field‑tested workflow for turning ZoomInfo’s **Scheduled Emails** feature (inside **Engage / MarketingOS**) into a hands‑free “email blast” engine—while protecting deliverability and giving you solid analytics.

---

## 1) One‑time set‑up (do this before you ever press “Send”)

| What | Why | How |
|------|-----|-----|
| **Connect each rep’s mailbox** | Engage needs OAuth access to Gmail / M365 so emails come from a real inbox. | *Settings → Email Integrations → Connect*. Grant “Send & read” scope. |
| **Authenticate the domain (SPF, DKIM, DMARC)** | Stops spam filtering & allows higher daily send caps. | Add the TXT records ZoomInfo provides to DNS. |
| **Warm‑up new sending domains** | A fresh domain blasting 1,000 contacts day one will get blacklisted. | Ramp from ~50 → 200 → 500 emails per day over two weeks. |
| **Create Opt‑out footer** | CAN‑SPAM / GDPR compliance. | *Settings → Compliance* → toggle “Mandatory unsubscribe footer”. |

---

## 2) Build the blast list

1. **Advanced Search** → apply your ICP & intent filters → *Save as Dynamic List*.
2. **De‑dupe / suppress**: exclude current customers, open opps, bounces, and “no‑contact” tags.
3. Export that list straight into **Engage** (or MarketingOS **Campaigns** if you have the marketing SKU).

---

## 3) Compose the email once, personalize at scale

- **Tokens**: ‑‑-> FirstName, Company, City, TechStack, etc.  
- **Fallbacks**: `{{first_name | there}}` avoids blanks.
- **Preview 10 contacts** to be sure tokens render correctly.
- **A/B test** subject lines (Engage lets you set Variant A / Variant B at creation).

---

## 4) Schedule the send

1. In the email editor click the **paper‑plane‑with‑clock icon → “Send Later.”** citeturn1view0  
2. Pick *Contact’s Time Zone* so messages land at (say) **8:45 AM local** no matter where the owner is.  
3. **Throttle**: set a daily cap per rep (e.g., 250) and a *batch size* (e.g., 50 every 15 min) to mimic human sending.  
4. Select **Send on** → choose the date (or *weekly cadence* if this is Step 1 of a multi‑step sequence).  
5. **Activate** the sequence / campaign. Engage queues everything automatically.

> **Tip:** For a one‑off blast use a single‑step “Instant” sequence and rely on *Send Later* for timing. For drip campaigns build additional steps (e.g., Day 3 soft bump, Day 7 value add) and each will inherit its own schedule window.

---

## 5) Monitor & iterate

| Metric | Healthy Range | Action if off‑track |
|--------|---------------|---------------------|
| **Bounce Rate** | < 3 % | Pull list, verify emails, slow send speed. |
| **Open Rate** | 35 – 55 % | Tweak subject line, test earlier time. |
| **Click‑through** | 2 – 8 % | Re‑work CTA placement, add Calendly link. |
| **Reply / Meeting Rate** | 1 – 5 % | Tighten targeting, add more personalization. |

Dashboards live under **Engage → Analytics → Email Performance**. Filter by campaign, rep, subject A/B, and time window to see what’s winning.

---

### Quick Troubleshooting Checklist

- **“Email failed to send” alerts** – usually OAuth token expired; re‑authorize mailbox.
- **High Microsoft block rate** – lower daily limit to < 200, add more warm‑up days.
- **Tokens not merging** – your CSV header must match token name exactly (case‑sensitive).

---

## Fast start template

> **Sequence Name:** *Home‑Services Owner Blast – August Promo*  
> **List Source:** Dynamic List: “Home Svcs | 5‑50 Emp | $1‑10M rev | Intent SEO>60”  
> **Step 1:** Scheduled Email – 8:45 AM Contact TZ, Variant A/B subject  
> **Step 2:** Wait 3 business days  
> **Step 3:** Scheduled Email – 10:15 AM Contact TZ, “Just making sure…” bump  
> **Send Limits:** 200/day/rep, 50 batch, 15 min interval  

Clone it, drop in your copy, and Engage will handle the rest—no manual blasts, no calendar reminders.

---

**Bottom line:** once your domain is warmed and the list is dialed in, *Send Later* + batching inside Engage lets you run reliable, rules‑based email campaigns that feel one‑to‑one but scale like a blast. Your SDRs can focus on replies while ZoomInfo keeps the cadence humming.

**Mike:** I am using Salesloft to automate the sending of emails.  I imported a csv file directly into Salesloft.  how do I send out 25 emails at one time ?

**GPT:** ### Quick‑start: blast exactly **25 emails** at once in Salesloft

| Step | What you click | Notes |
|------|----------------|-------|
| **1. Put your 25 prospects in a Cadence email step** | • Create (or reuse) a **1‑step “Email” cadence**.<br>• From **People › Import**, choose your CSV and map the columns.<br>• Select the 25 people you want → **Add to Cadence** → pick the email step. | A single‑step cadence is the safest “bulk‑send” workaround. Multi‑touch steps suppress the *Send All* button citeturn8search2 |
| **2. Open that cadence step** | **Cadences › [Your Cadence] › Step 1 – Email** | You’ll see all 25 queued emails in review mode, arrows to flip through them, and a counter (e.g., “3 of 25 emails”) at the top citeturn8search4 |
| **3. Review tokens & personalize (optional)** | Use the left/right arrows to spot‑check. | Personalizing even 20–25 % of each email helps deliverability. |
| **4. Fire them off** | ‑ If you want them to go **now**: click **Send All** (paper‑plane icon).<br>‑ If you want them to go later: click the **calendar icon › Schedule Send All**, pick date/time, and confirm citeturn8search7 | Salesloft will queue exactly 25 messages and drip them out sequentially behind the scenes (respecting any per‑user send delay). |
| **5. Watch your limits** | Admins: **Settings › Team Email Settings** | If a rep’s **Daily Send Limit** is below 25, Salesloft pops a warning instead of sending citeturn8search1turn0search3 |

---

#### Pro tips & common gotchas

1. **Throttle still applies.** Even though you pressed *Send All*, Salesloft spaces the actual dispatch according to your team’s *Email Delay* (typically 30‑90 s) to keep you off spam radars.

2. **Daily limit logic.** Daily Send Limit is set per mailbox (1‑1,000 messages/day). Keep it ≥ 25 or the batch will be truncated with a warning citeturn0search3.

3. **No Send All?**  
   - Check that the step type is **Email (Manual)**, not “Multi‑touch.”  
   - Verify at least one recipient is selected; the button hides when zero are highlighted.

4. **Need different batch sizes?** Just tick the check‑box in the column header to *select the first 25*, click *Send Selected*, then repeat for the next 25, etc.

5. **Deliverability hygiene.** Warm the domain, verify addresses, and keep bounce‑rate < 3 %. Personalized subject lines & body copy (20 % unique) are an easy win.

That’s it—upload CSV, drop the people into a one‑step cadence, hit **Send All**, and Salesloft handles the rest.

**Mike:** I sent about 600 emails today via salesloft .  Does this comply with email best practices?

**GPT:** ### Is sending 600 emails in a single day “best practice”?

**Short answer:** *It depends on how you sent them.*  
If the 600 messages were — 

| Scenario | Generally OK? | Why / Why not |
|-----------|---------------|---------------|
| **Spread across 3–5 warmed mailboxes** (≈120–200 each) and throttled 1 every 30-60 sec | **Yes** | Keeps per-sender volume under most ESP “bulk” thresholds; staggered cadence looks human; allows natural engagement signals. |
| **All from one mailbox that recently ramped past 200/day** | **Borderline** | Sudden spike can trigger Microsoft/Google bulk filters and throttle future sends; risk of landing in “Promotions” or “Spam.” |
| **From a brand-new domain / IP with no warm-up** | **No** | High-volume first-day traffic typically gets the domain block-listed; recovery is slow and painful. |

---

### Benchmarks & rules of thumb

| Metric | Safe Range | Your checkpoint |
|--------|------------|-----------------|
| **Daily send cap per mailbox** | 150–200 (seasoned domain) <br>50–100 (month-old domain) | How many mailboxes were used? |
| **Bounce rate** | **< 3 %** (hard + soft) | Check *Salesloft Email Analytics › Bounces.* |
| **Spam complaint rate** | **< 0.1 %** (1 per 1,000) | Monitor via ESP postmaster tools. |
| **Open rate** | 35–55 % | Sudden drops → filtering. |
| **Unique reply rate** | 1–5 % | Confirms list quality & relevance. |

---

### 6-point compliance & deliverability checklist

1. **Domain warm-up**  
   - Ramp 50 → 100 → 150/day over ~2 weeks **per mailbox**.  
   - Rotate sends across multiple users where possible.

2. **Throttle**  
   - Salesloft default: 30–90 sec delay between emails; leave this on.  
   - Avoid “Send All” bursts of 200+ instant sends.

3. **List quality**  
   - Run through NeverBounce / ZeroBounce before import.  
   - Remove role accounts (info@, sales@) and obvious spam-traps.

4. **Personalization ratio**  
   - Aim for ≥ 20 % of body copy to be unique (first sentence, CTA framing, PS).  
   - A/B test subjects to keep engagement high.

5. **Compliance footer**  
   - CAN-SPAM: Physical address + unsubscribe link on every template.  
   - GDPR/UK PECR: “Legitimate interest” or prior consent if emailing EU/UK.

6. **Monitor reputation**  
   - **Google Postmaster** for Gmail senders.  
   - **Microsoft SNDS** for Outlook/Hotmail.  
   - Watch for block-list alerts (Spamhaus, Proofpoint, Cisco Talos).

---

### What to do next

1. **Audit today’s send report**  
   - If bounces > 3 % or spam complaints > 0.1 %, pause large sends tomorrow and clean the list.  
   - Check each mailbox’s “Daily Send Limit” (Admin → Team Email Settings).

2. **Segment future blasts**  
   - Split large CSVs into 100-contact chunks.  
   - Assign each chunk to a different rep or send window.

3. **Enable reply-pausing** in your cadence  
   - Stops follow-ups to contacts who engage, reducing unnecessary volume.

4. **Continue warming**  
   - If your average per-mailbox volume will hover near 200/day, spend two more weeks gradually inching toward that number.

---

#### Bottom line
Sending **600 emails per day can be perfectly acceptable** *if* you used multiple warmed mailboxes, proper throttling, and a clean list. If they all went through a single inbox—especially a new one—you’re flirting with spam filters and should dial it back, clean the data, and warm steadily to preserve long-term deliverability.

**Mike:** Does salesloft have an unsubscribe link placed in every sent email ?

**GPT:** **Not by default.**  
Salesloft only inserts an unsubscribe / opt-out link when you or an admin **turn the feature on** (Global Opt-Out) **or** when the template itself contains the **{{Opt Out Link}} dynamic field** or a footer that includes it. If neither of those is present, the platform will send the email exactly as you wrote it—no link, no footer. citeturn4search2turn7search0

---

### How to make sure every email has an unsubscribe link

| Option | Where to enable | Result |
|--------|----------------|--------|
| **Global Opt-Out (best for full compliance)** | *Settings → Email → Deliverability → Global Opt-Out* (admin only) | Salesloft appends its standard “Click here to unsubscribe” link to **all** one-to-many emails sent by your team. citeturn7search0 |
| **Dynamic field inside templates** | Insert **{{Opt Out Link}}** in the body or signature of each template or snippet. | Gives you control over wording/placement on a per-template basis. citeturn4search1 |
| **Custom email footer** | *Settings → Email Footers* → create / auto-include footer and tick **Use Salesloft Opt-Out Link**. | Adds your branded footer plus the unsubscribe link to every cadence email (or all emails, depending on the toggle). citeturn4search3 |

Once a recipient clicks the link, Salesloft marks them **Do Not Contact**, preventing future cadence or “Lofted” sends to that address.

---

### Best-practice checklist

1. **Enable Global Opt-Out** (or add {{Opt Out Link}}) for CAN-SPAM/GDPR compliance.  
2. **Brand your footer** so it looks intentional, not boilerplate.  
3. **Sync Do Not Contact** status back to your CRM so reps don’t email opted-out leads manually.

If your current templates don’t show an unsubscribe line, double-check the settings above—Salesloft won’t slip one in automatically unless you tell it to.

**Mike:** I have a list of current clients.  I want to find similar companies within zoom info .  How can I accomplish this

**GPT:** Below is a **repeatable playbook for turning your client list into a “look-alike” hunting ground inside ZoomInfo**. It works even if you only have a CSV of domains or company names.

---

## 1. Upload & Enrich your client list  
1. Go to **OperationsOS ▸ Match & Enrich** (or SalesOS ▸ Upload) and import the CSV.  
2. Map at least one unique field (domain or company name).  
3. Choose **Add as Tag → “Current Clients”** so you can reference or suppress them later.  
4. Run the enrichment to pull firmographics, technographics, hiring growth, intent topics, etc.  
   *Result: a fully-attributed dataset you can slice and pivot in ZoomInfo Analytics or Excel.*

> Tip: if you don’t own OperationsOS, drop the list into **SalesOS ▸ My Lists ▸ Companies** and click **Enrich** for the same net effect.

---

## 2. Derive your ICP in minutes  
ZoomInfo automatically adds filters for every attribute in that enriched file. Open **Analytics ▸ Insights ▸ Companies** and note the **top industries, revenue & employee bands, HQ regions, and common tech installs**.  
*These patterns become your Ideal Customer Profile recipe.*

---

## 3. Launch a “Similar Companies” search  
### Option  A — One-click look-alike  
*Fastest if you only need a handful of twins.*

1. Open any A-tier customer’s **Company Profile**.  
2. In the right rail, click **Similar Companies** → **View All**.  
3. Select the ones that fit, then **Add to List / Cadence**.

### Option  B — Dynamic look-alike list (recommended)  
*Scales to hundreds and keeps itself fresh.*

1. Go to **Advanced Search ▸ Companies**.  
2. Under **My Tags**, choose **“Current Clients”** → **Find Similar To These Companies** (toggle name varies by UI).  
3. Layer on the ICP filters you uncovered (industry, revenue, employees, tech stack, HQ country, hiring growth, intent surge, etc.).  
4. **Save as Dynamic List → “Client Twins – Tier 1”.**  
   - The list updates nightly; any net-new look-alike that fits your recipe appears automatically.

LinkedIn’s own ZoomInfo tips call this the *“look-alike feature to find more prospects that resemble your best customers.”* citeturn8view0L24-L26

---

## 4. Super-charge with ZoomInfo’s Predictive model (if licensed)  
Inside **Predictive → Next Best Customer**, feed the same “Current Clients” tag as a seed. ZoomInfo’s AI scores the entire database and returns a ranked list of companies with the highest fit probability—no manual filter-twisting required. citeturn10view0L7-L7

---

## 5. Save, route, and automate  
| Task | How to do it |
|------|--------------|
| **Suppress dupes** | Add tags **“Open Opp”** and **“Do-Not-Contact”** to your exclusion list so you never re-prospect existing pipeline. |
| **Push to reps** | Create a **Workflow** that auto-exports any new company in “Client Twins – Tier 1” straight to Salesforce, HubSpot, Outreach, or Salesloft. |
| **Alert the team** | Turn on **Saved Search Alerts** (daily or weekly) so SDRs know when fresh matches hit the list. |

---

## 6. Continually refine  
*Monthly*: compare close/win data against your list filters. Tighten employee or revenue bands that over-produce, drop industries that stall, add new tech-stack filters, etc.  
ZoomInfo’s **Advanced Segmentation** makes iterating fast—just adjust filters and resave the dynamic list. citeturn10view0L5-L5

---

### Key takeaways
1. **Tag & Enrich first**—good data is step zero.  
2. **Use “Find Similar” or Predictive** to clone your best customers instead of guessing.  
3. **Save as dynamic + automate** so your reps always see the newest look-alikes without manual exports.

Follow this flow once and you’ll have a self-refreshing pipe of companies that mirror your highest-value clients—ready for outreach, scoring, or ABM campaigns.

**Mike:** how do I access the look a likes and similar companies once my list of clients is uploaded in Zoominfo ?

**GPT:** ### Where to click after your client CSV is in ZoomInfo

| **Path** | **What you’ll see / do** | **Why it matters** |
|-----------|-------------------------|--------------------|
| **1. Tag upload ➜ _Advanced Search ▸ Companies_**<br>• In the upload wizard tick **“Create Tag → Current Clients”**.<br>• Open **Advanced Search ▸ Companies**.<br>• Left rail ➜ **My Tags ▸ Current Clients**.<br>• Turn on the blue switch **“ Find Similar to these Companies ”** (icon: two arrows in a circle). | ZoomInfo clones the firmographic & technographic pattern of every company carrying that tag and returns a *dynamic* look-alike list. You can still layer extra filters (intent, revenue, tech stack) before you **Save as Dynamic List**. |
| **2. One-off on a single logo**<br>• Search or click into any client’s **Company Profile**.<br>• Right-hand rail ➜ **Similar Companies** → **View All**. | Fast when you only need 10-20 twins for a specific case study or ABM play. |
| **3. Predictive (if licensed)**<br>• _Go To_ **Predictive Analytics ▸ Next Best Customer**.<br>• Choose **Seed List → Tag → Current Clients**.<br>• Run model ➜ Export top-ranked accounts. | ZoomInfo’s ML scores *every* record in the database against your seed companies—no manual filters needed. Great for high-volume or quarterly refreshes. |
| **4. WebSights look-alikes** *(optional)*<br>• In **WebSights ▸ Company Visitors**, pick a visitor that matches your ICP.<br>• Click into its profile ➜ **Similar Companies** (same rail). | Surfaces “people who look like the ones already poking around your site.” Perfect for ad retargeting audiences. |

---

#### Pro-tips so you don’t go hunting for buttons

1. **Blue toggle shows only after a tag is selected.** If you don’t see *Find Similar*, click the tag filter first.  
2. **Dynamic Lists auto-refresh nightly.** New companies that match the similarity engine appear with zero clicks.  
3. **Suppress duplicates** by adding *Exclude → My Tags → Current Clients* to any outbound search or workflow.  
4. **Push to reps automatically** via **Workflows**: trigger on “Added to list = Client-Twins – Tier 1” → export to Salesforce / Outreach / Salesloft.  
5. **Iterate monthly**: tighten or loosen filters (revenue, employee count, tech stack) based on which look-alikes actually convert.

Follow the table row that matches the depth you need—quick right-rail grab, full ICP-driven dynamic list, or AI-ranked predictive model—and you’ll surface companies that mirror your best clients in two clicks.
