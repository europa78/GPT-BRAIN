---
title: "PROMPT TEMPLATE"
date: 2026-02-20
cluster: "Prompt Eng / GPT Building"
messages: 38
source: chatgpt-export conversations.json (FULL transcript)
---

# PROMPT TEMPLATE

> 38 messages · 2026-02-20 · cluster: Prompt Eng / GPT Building

**Semantic neighbors:** [[LLM Autograd Explanation]] · [[Codex Prompt Templates]] · [[Sell Side Analyst Investor Prompt]] · [[Codex prompts]]

## Transcript

**Mike:** Save this prompt template in your memory  for later use : `[ROLE]: You are a [specific expert type] who specializes in [specific niche]. Your communication style is [direct/conversational/technical/etc.].  [DIRECTIVE]: [Clear, specific instruction — what exactly do you want done]  [CONTEXT]: Here is the background you need to complete this task: [Paste relevant information, background, or details here]  [FORMAT]: Respond with the following structure:  Length: [word count or length guidance]  Style: [tone and voice guidance]  Structure: [headers/bullets/paragraphs/etc.]  [EXAMPLES]: Here is an example of what I want the output to look like: [Paste a sample or describe the exact result you're looking for]`

**GPT:** Done — I’ve saved that prompt template for you and can use it anytime you ask.

**Mike:** Fill in the prompt template with this information:

Role: You are a financial stock expert, an expert researcher specializing in identifying investable and trending stocks, including options. There is no specific niche. Focus on technology, in fact. Communicate the style in technical, jargon, expert level. I want research done on each stock. Respond with 300 words each stock in bullet points mixed with paragraphs.

**GPT:** [ROLE]: You are a **financial stock expert** and **expert researcher** specializing in identifying **investable and trending stocks**, including **options**. You focus primarily on the **technology sector**.

Your communication style is **technical, jargon-heavy, and expert-level**.

[DIRECTIVE]: Conduct deep, actionable **research on each stock** I provide (or that you surface from screening, if I ask you to propose candidates). For every stock, identify why it’s trending/investable, key catalysts, risks, technical context, and an options-oriented angle.

[CONTEXT]: The goal is to evaluate technology names for potential **stock and options setups**. Research should cover fundamentals, narrative/catalysts, positioning/sentiment, and trade structure thinking (without making guarantees). Assume the audience understands professional market terminology.

[FORMAT]: Respond with the following structure:  
- **Length:** ~300 words **per stock**  
- **Style:** Technical, expert-level, jargon-heavy  
- **Structure:** Bullet points mixed with short paragraphs. Use clear headings per stock (Ticker — Company). Include:  
  - **Thesis / Why it’s trending** (bullets)  
  - **Catalyst map (30–90 days / 3–12 months)** (bullets)  
  - **Key fundamentals snapshot** (short paragraph + bullets)  
  - **Technical read / levels** (bullets; support/resistance, trend, vol regime)  
  - **Options lens** (bullets; IV/RV, skew, structures like calls, call spreads, collars, put spreads, calendars/diagonals as appropriate)  
  - **Risks / bear case** (bullets)  
  - **What would change my mind** (bullets)

[EXAMPLES]: Here is an example of what I want the output to look like:  
- **AAPL — Apple Inc.**  
  Short paragraph summarizing the thesis and why the tape is paying attention.  
  - **Why trending:** bullet, bullet, bullet  
  - **Catalysts (near-term):** bullet, bullet  
  - **Catalysts (medium-term):** bullet, bullet  
  - **Fundamentals:** short paragraph + bullet metrics (rev growth, margins, FCF, valuation)  
  - **Technical:** bullet levels + trend notes  
  - **Options lens:** bullet structure ideas + IV commentary  
  - **Risks:** bullet list  
  - **Change-my-mind:** bullet triggers

**Mike:** run the prompt for the stock , TRON

**GPT:** ### TRON — Tron Inc. (Nasdaq: TRON)

Tron Inc. is a **high-volatility, event-driven microcap** whose “why now” is tightly tied to the **reverse-merger / crypto-treasury narrative** around the TRON ecosystem (Justin Sun) and a strategy that echoes the “public wrapper + crypto reserves” playbook that markets have rewarded at times. citeturn0news39turn0news41turn0search6

- **Thesis / Why it’s trending**
  - Rebrand + ticker change to **TRON** (from SRM) on Nasdaq increased attention/flow from retail and crypto-adjacent traders. citeturn0search6turn0search18
  - “Public vehicle holding crypto/token reserves” angle can create **reflexive price action** (momentum + narrative) independent of near-term fundamentals. citeturn0news39turn0news41

- **Catalyst map**
  - **30–90 days:** deal/structure updates, token-reserve disclosures, financing terms, and any regulatory headlines around involved parties/entities. citeturn0news39turn0news41
  - **3–12 months:** execution credibility—evidence the vehicle can sustain treasury strategy, improve liquidity, and avoid dilution spirals common in story microcaps. citeturn0news39turn0news41

- **Key fundamentals snapshot**
  - Market cap has been cited around the **low-$300M range**; reported EPS/valuation metrics vary by data vendor—treat as **low-confidence** until verified in filings. citeturn0search9turn0search10

- **Technical read / levels**
  - Last-traded price references cluster around **$1.27**; given the regime, prioritize **liquidity pockets and round-number magnets** over classic MA-based systems. citeturn0search9turn0search19

- **Options lens**
  - Options market is signaling **extreme implied volatility** (example: IV ~**248%** with meaningful contract volume on a recent snapshot), implying **expensive optionality** and strong gap risk. citeturn0search15
  - In high-IV microcaps, consider structures that **sell vol** only if you can tolerate tail risk (e.g., defined-risk credit spreads) or **defined-risk bullish** structures (call spreads) if you want upside without paying for far OTM convexity.

- **Risks / bear case**
  - **Dilution/financing risk**, thin liquidity, headline/regulatory risk, and “story breaks” that can compress multiples overnight. citeturn0news39turn0news41

- **What would change my mind**
  - Clear, recurring disclosures showing **treasury strategy transparency**, improving liquidity/float dynamics, and fewer “one-off” catalysts driving the tape. citeturn0news39turn0news41

**Mike:** short term is TRON bullish or bearish ? search sites like stock twits , finance blogs , finance articles from lesser known companies (not yahoo finance)

**GPT:** Deep research has started on short-term sentiment and positioning for TRON using StockTwits, finance blogs, and lesser-known financial commentary sources.

You’ll receive a structured sentiment breakdown (bullish vs. bearish bias, volume tone, catalyst discussion, and positioning signals) once the analysis completes.

**Mike:** write a prompt optimized for deep research mode.  Electra(https://www.electravehicles.com/), needs a bridge loan.   do analysis on Electra and identify similar companies.  also identify companies that have received funding and bridge loans for similar companies to Electra.

**Mike:** write a prompt optimized for deep research mode.  Electra(https://www.electravehicles.com/), needs a bridge loan.   do analysis on Electra and identify similar companies.  also identify companies that have received funding and bridge loans for similar companies to Electra.

**GPT:** ```text
[ROLE]
You are an institutional-grade venture/credit research analyst specializing in private-company diligence and structured financing (venture debt, convertible notes, SAFEs, bridge rounds, and interim financing) in capital-intensive mobility and climate-tech.

[DIRECTIVE]
Electra (https://www.electravehicles.com/) needs a bridge loan. 
1) Produce a rigorous diligence-style analysis of Electra and its near-term financing need.
2) Identify a set of truly comparable “similar companies” (same segment, stage, capital intensity, and go-to-market).
3) Identify real-world precedents: companies in similar segments that received bridge loans / interim financing, including the deal structure, investors/lenders, and context.

[CRITICAL DISAMBIGUATION FIRST]
- Confirm the exact company identity behind electravehicles.com (legal entity name, HQ, founders/exec team, what they sell, and which “Electra” it is NOT).
- Explicitly rule out confusion with similarly named entities (e.g., Electra.aero, ElectraMeccanica, or unrelated “Electra” brands).
- If brand ambiguity exists, show evidence from primary sources and proceed only with the matched identity.

[RESEARCH SCOPE]
A) Electra Deep Dive (diligence memo depth)
- Company overview: product(s), customers, pricing model, deployments, partnerships, traction metrics (contracts, pilots, backlog) with citations.
- Technology & moat: core tech, IP/patents (if any), differentiation vs incumbents/startups.
- Market: TAM/SAM/SOM, key customer segments, procurement cycles, regulatory tailwinds/headwinds.
- Competitive landscape: direct and adjacent competitors; why Electra wins/loses.
- Funding & cap table (as available): all known rounds, investors, grants, venture debt, strategic financing; identify gaps/unknowns.
- Financial context: estimate burn/runway ONLY from disclosed info; if not disclosed, build 2–3 realistic scenarios (low/med/high burn) and clearly label assumptions.
- Bridge-loan rationale: why a bridge is needed now, what milestone it bridges to (priced round, revenue inflection, certification, manufacturing step, key contract).
- Risks: technology risk, customer concentration, regulatory risk, execution, dilution, refinancing risk, legal/PR risk.
- “Bridge readiness”: what diligence artifacts a lender/investor will demand (data room checklist).

B) Similar Companies (Comparable Set)
Build 10–15 comps that are genuinely similar by:
- Segment (mobility/EV stack or adjacent), business model, stage, and capital intensity
- Customer type (OEMs/fleets/utilities/consumers), deployment model, and revenue motion
For each comp, provide:
- Company name + URL
- What they do (1–2 sentences)
- Stage & last known funding
- Why it’s comparable to Electra (explicit comparability thesis)
- Key investors/strategics (if available)
- Any known interim/bridge financing history (if any)

C) Bridge Loan / Interim Financing Precedents (Most Important Output)
Identify 15–25 precedent deals for similar companies/segments that raised:
- Bridge rounds, convertible notes, SAFE bridge, venture debt, structured notes, PIPE-like private financings, interim facilities, or “pre-Series X bridge”
For EACH precedent, capture in a table:
- Company
- Date (month/year)
- Amount
- Instrument/structure (convertible note, SAFE, venture debt, secured loan, etc.)
- Key terms if disclosed (discount, cap, maturity, interest, warrants, security/collateral)
- Lenders/investors involved
- Context: what triggered the bridge (runway, milestone, delayed priced round, manufacturing ramp, certification, supply chain, etc.)
- Outcome: next round, acquisition, restructuring, or unknown (clearly labeled)
- Primary source links (press release, SEC filing if public, lender announcement, reputable industry coverage)

D) Bridge Capital Provider Landscape (Actionable)
- List the most likely bridge providers for this type of company:
  - venture debt funds, specialty finance, strategics, and climate/mobility-focused investors
- For each provider: why they fit, typical check size, preferred structure, and 2–3 example deals (with citations).

[SOURCES & QUALITY RULES]
- Prioritize primary/credible sources: company website, press releases, regulatory filings (SEC/SEDAR where relevant), lender announcements, government grant databases, patents, court/UCC liens where accessible, reputable industry publications, and credible financing databases when available.
- Avoid generic quote-scraper portals and do NOT rely on Yahoo Finance-style summaries.
- Every material claim must have a citation link.
- If something can’t be verified, label it “Unconfirmed” and explain what would verify it.

[OUTPUT FORMAT]
Deliver a structured report with:
1) Executive Summary (Electra + bridge thesis + key risks)
2) Electra Diligence Memo (sections A above)
3) Comparable Companies (table + short notes)
4) Bridge/Interim Financing Precedents (main table + 5–8 “most analogous” highlighted)
5) Capital Provider Shortlist (with rationale + cited examples)
6) Data Room Checklist for Bridge Financing
7) Appendix: Sources list + open questions

[OPTIONAL BUT VALUABLE]
- If you find any signals of financial distress (liens, layoffs, going-concern language, missed milestones), document carefully with primary evidence.
- Provide 2–3 bridge structure templates that match Electra’s situation (e.g., SAFE bridge, convertible note, venture debt + warrants), and explain pros/cons.

[FINAL INSTRUCTION]
Be precise, skeptical, and citation-heavy. Optimize for actionable fundraising/bridge-loan execution, not hype.
```

If you want, tell me the **target bridge size** (e.g., $1–3M vs $5–10M) and **runway goal** (3 months vs 9 months), and I’ll tailor the prompt to force the research to output structures and provider lists in that exact range.

**Mike:** should the prompt be more concise to be more effective ? or is the current length the most effective ?

**GPT:** It should usually be **shorter**, but not “minimal.”

In deep research mode, the best-performing prompts tend to be:

- **Tight directive + tight output schema** (so the agent doesn’t wander)
- **A few “hard constraints”** (sources to use/avoid, disambiguation, number of comps/precedents)
- **One clear definition of “done”** (tables + memo + provider shortlist)

Your current prompt is very good for **thoroughness**, but it’s longer than it needs to be. Length itself doesn’t make it better; **clarity and constraints** do. Past a certain point, extra text can:
- dilute focus,
- cause the model to spend tokens “restating rules,”
- reduce the chance it completes every requested artifact (tables + highlights + providers + checklist) in one pass.

### My recommendation
Use a **two-tier prompt**:

1) **Concise “Core Prompt”** (most effective baseline; high completion rate)  
2) **Optional “Add-ons”** you paste only if you want extra depth (liens/UCC, templates, burn scenarios, etc.)

Below is a **more concise version** that keeps the power but cuts the fat:

```text
ROLE: Institutional venture/credit research analyst (mobility/climate-tech) focused on bridge financing.

TASK:
Electra (https://www.electravehicles.com/) needs a bridge loan. 
1) Confirm company identity (legal entity, HQ, product, leadership) and rule out similarly named “Electra” companies with evidence.
2) Produce a diligence-style memo on Electra: business model, traction, tech/moat, market, competition, funding history, plausible burn/runway scenarios (label assumptions), and why a bridge is needed now + what milestone it bridges to.
3) Build a comparable set of 10–15 truly similar companies (segment + stage + capital intensity). For each: URL, what they do, stage/last funding, why comparable, key investors.
4) Find 15–25 precedent bridge / interim financings for similar companies: amount, date, structure (convertible/SAFE/venture debt/secured), investors/lenders, disclosed terms, reason for bridge, and outcome (next round/acquired/distress/unknown). Provide sources.
5) Create a shortlist of likely bridge capital providers for Electra (venture debt + specialty finance + strategics): typical check size, preferred structure, and 2–3 cited example deals each.

RULES:
- Cite every material claim with links. Prefer primary sources (filings, press releases, lender announcements, grant databases). Avoid generic finance portals.
- If not verifiable, mark “Unconfirmed” + what would verify it.

OUTPUT:
1) Executive Summary (bridge thesis + key risks)
2) Electra Diligence Memo
3) Comparable Companies table
4) Bridge/Interim Financing Precedents table (highlight 5–8 closest analogs)
5) Provider Shortlist table + rationale
6) Bridge Data Room Checklist
7) Appendix: Sources + open questions
```

### When your long version is better
Keep the long version if you **must** enforce:
- very strict disambiguation,
- distress signal hunting (liens/UCC/court),
- multiple bridge structure templates with pros/cons,
- a “compliance-like” diligence standard.

### Bottom line
For effectiveness: **concise core prompt wins** most of the time. Your long prompt is “max coverage,” but it’s not automatically “max effective.”

If you tell me whether you’re optimizing for **speed** (fast answer) or **completeness** (investment memo quality), I’ll tune the prompt to that goal.

**Mike:** write a prompt optimized for an awareness campaign for a stock , ALBT that trades on the NASDAQ.    here are the instructions from one of the stock holders :  I want a digital market analysis like LinkedIn management - Nurturing emails extra - Investor Relations Landing Page - Driving traffic using Google Ads. - Stock Twits - Reddit - Wallstreet Bets & Discord - How can we utilize these platforms to provide this ALBT more eyeballs or some other campaigns we can leverage.

**GPT:** ```text
[ROLE]
You are a senior, SEC/FINRA-aware Investor Relations (IR) + Growth Marketing strategist for U.S.-listed public companies (NASDAQ), with deep expertise in micro/small-cap awareness campaigns, paid media, community channels, and compliance-first communications.

[DIRECTIVE]
Build a compliant “Awareness + Investor Engagement” campaign plan for ALBT (NASDAQ: ALBT) to increase qualified investor attention and traffic—WITHOUT hype, manipulation, brigading, or misleading claims.

You must produce:
1) A digital market + audience analysis (who to target, where they are, what they respond to)
2) A multi-channel campaign strategy using:
   - LinkedIn company page management (content + community)
   - Nurture emails/newsletter (opt-in + segmentation)
   - Investor Relations landing page (conversion-focused)
   - Google Ads (Search + Display + YouTube if appropriate)
   - StockTwits
   - Reddit + r/wallstreetbets (platform-appropriate approach)
   - Discord (community ops + moderation)
3) Additional high-leverage campaigns we can layer in (PR, webinars/AMA, X/Twitter, influencer compliance, investor communities, conference calendars, etc.)

[CONTEXT]
Stakeholder goal: “more eyeballs” on ALBT via digital channels.
You must assume ALBT is a NASDAQ-listed stock and your plan must be designed for real-world execution by an IR/marketing team and reviewed by legal/compliance.

[NON-NEGOTIABLE COMPLIANCE RULES]
- No price targets, no “buy” calls, no guaranteed returns, no “pump” tactics.
- No coordinated brigading or manipulating online communities; do NOT recommend mass-posting, astroturfing, bots, fake accounts, paid shills, vote/engagement rings, or “raid” language.
- Always require disclosure of affiliation/compensation where relevant (SEC Rule 17(b) style concerns).
- Respect Reg FD principles: don’t selectively disclose material nonpublic info; prefer public filings/press releases/investor deck links.
- Include CAN-SPAM / consent best practices for email.
- Include platform-specific rules guardrails (Reddit/WSB/StockTwits/Google Ads).

[RESEARCH REQUIREMENTS]
Use publicly available sources to ground the plan:
- ALBT IR website, investor deck, press releases
- SEC filings (10-K/10-Q/8-K), earnings call transcripts if available
- Peer/competitor set and sector sentiment
If a key fact can’t be verified, label it “Unknown” and proceed with clear assumptions.

[OUTPUT FORMAT]
Deliver the plan in the following sections:

1) Executive Summary (what we’ll do in 30/60/90 days + expected measurable outcomes)
2) Market & Audience Analysis
   - Investor personas (retail growth, value, thematic tech, small-cap traders, etc.)
   - Channel fit by persona (why each platform matters)
   - Messaging angles that are factual and compliant (no hype)
3) Core Messaging Framework
   - 5–7 message pillars (traction, product, partnerships, TAM, milestones, governance, etc.)
   - “Do / Don’t” language examples
   - Required disclaimers/safe-harbor blocks
4) Channel Playbooks (MOST IMPORTANT)
   A) LinkedIn Management
      - Posting cadence, formats, content themes, engagement tactics, employee advocacy
      - 4 weeks of example posts (compliant tone) + KPI targets
   B) Nurture Emails / Newsletter
      - List-building plan (opt-in), segmentation, cadence, 5-email sequence templates
      - A/B tests + deliverability checklist
   C) Investor Relations Landing Page
      - Page sections/wireframe, conversion CTAs, lead magnets (deck, milestones, updates)
      - Tracking plan (UTMs, events, pixel setup), SEO basics
   D) Google Ads
      - Campaign structure (Search/Display/YouTube), keyword themes, negatives, sample ad copy
      - Targeting rules (avoid misleading “get rich” copy), landing page alignment
      - Budget ranges + expected benchmarks (CTR/CPC/CPA ranges as assumptions)
   E) StockTwits
      - Content style, cadence, compliance, what NOT to do, community engagement
   F) Reddit + r/wallstreetbets
      - Platform-appropriate approach: education-first, transparent affiliation, avoid promotion
      - “If posting is not allowed, do this instead” alternatives (AMAs on permitted subs, IR Q&A threads)
   G) Discord
      - Server structure, channels, moderation policy, verification, announcement cadence
      - Rules to prevent misinformation and hype cycles
5) Amplifiers & “Extra” Campaigns
   - PR calendar + newsworthiness rubric
   - Webinars/AMA investor updates (structure + script outline)
   - Partnerships, conferences, podcasts, creator collaborations (with disclosures)
6) Measurement & Analytics
   - North Star metrics and weekly dashboard
   - Funnel: Impressions → Clicks → Time-on-site → Email opt-in → Returning visitors
7) Risk Controls
   - Compliance checklist
   - Escalation policy for rumors/misinformation
   - Crisis comms quick plan
8) 90-Day Execution Plan
   - Week-by-week schedule, owners (IR/marketing/legal), asset checklist

[STYLE]
Write like an expert operator: specific, tactical, and realistic. Use bullets + short paragraphs. Provide templates, examples, and checklists, not generic advice.

[FINAL INSTRUCTION]
Optimize for credibility and qualified investor attention. The plan must be ethical, compliant, and sustainable—focused on transparency, education, and measurable growth in awareness/engagement.
```

If you want, I can also tailor this prompt to a specific **budget range** (e.g., $5k/mo vs $50k/mo) and a **primary goal** (email list growth vs trading liquidity vs institutional discovery), but this version is already runnable as-is.

**Mike:** is this prompt best used for deep research mode or agent mode

**GPT:** This prompt is **better for Agent Mode**.

- **Agent Mode** shines when you want **execution artifacts**: a 30/60/90 plan, channel playbooks, post calendars, ad groups + copy, email sequences, landing page wireframe, KPI dashboard spec, compliance checklists—i.e., **build the campaign kit**.

- **Deep Research Mode** is best when the main bottleneck is **ground-truthing**: pulling ALBT’s latest filings/press releases/IR materials, mapping peers, extracting verifiable message pillars, and citing platform policy constraints. It’s “research-first, citation-heavy.”

**Best workflow (most effective):**
1) Run a **Deep Research** version first to produce a *cited factual brief* (ALBT narrative, catalysts, risks, approved claims, peer set, what you can/can’t say).
2) Feed that brief into **Agent Mode** to generate the *full campaign package* and execution plan.

If you want to use it in **Deep Research Mode**, tweak the prompt to emphasize:
- “Must cite every material claim”  
- “Extract only verifiable message pillars from filings/PR”  
- “Summarize platform rules with sources”  

If you want it in **Agent Mode**, tweak it to emphasize:
- “Produce ready-to-publish assets” (copy blocks, calendars, wireframe, ad groups, email templates, tracking plan)  
- “Deliver as a structured campaign kit”  

So: **Agent Mode for the prompt you wrote**, and **Deep Research as a precursor** when you need the facts locked down.

**Mike:** optimize the prompt for agent mode

**GPT:** ```text
[ROLE]
You are a senior Investor Relations (IR) + Growth Marketing operator for NASDAQ-listed companies. You build compliant, execution-ready awareness campaigns across paid media, owned media, and community channels. Your style is tactical, operator-grade, and compliance-first.

[OBJECTIVE]
Create a complete, ready-to-execute “ALBT Awareness Campaign Kit” to increase qualified investor attention and traffic for ALBT (NASDAQ: ALBT).

You are in AGENT MODE: produce deliverables, templates, calendars, copy, and implementation steps that a team can execute immediately.

[NON-NEGOTIABLE COMPLIANCE RULES]
- No price predictions, no “buy” language, no hype/urgency manipulation, no guaranteed returns.
- No brigading/raids, bots, fake accounts, paid shills, engagement rings, or vote manipulation.
- Always disclose affiliation/compensation when posting or collaborating (include disclosure templates).
- Assume Reg FD sensitivity: only reference public info; do not suggest selective disclosure of material nonpublic info.
- Email must be opt-in and CAN-SPAM compliant.
- Follow platform rules for Google Ads, Reddit/WSB, StockTwits, Discord (include guardrails).

[INPUTS YOU SHOULD REQUEST IF MISSING — BUT DO NOT BLOCK]
If details are missing, proceed with reasonable assumptions and clearly label them “ASSUMPTION,” while producing everything. Use placeholders where needed.
Needed inputs (use placeholders if unknown): ALBT IR URL, investor deck link, core thesis, upcoming catalysts, approved claims, target budget, geo, compliance contact, brand guidelines.

[TASKS / DELIVERABLES]
Build the campaign kit in the exact structure below.

1) EXECUTIVE PLAN (30/60/90)
- Goals (awareness + traffic + opt-in list growth)
- KPIs + numeric targets (assumption-based ranges)
- Budget model: “Lean” (5–10k/mo), “Standard” (15–30k/mo), “Aggressive” (50k+/mo)

2) POSITIONING + MESSAGE HOUSE (COMPLIANT)
- 5–7 message pillars (fact-based categories, not hype)
- “Say/Don’t Say” language examples (include forbidden phrases)
- Required disclaimers: Safe Harbor + Reg FD note + Affiliation disclosure snippets (copy/paste ready)

3) INVESTOR RELATIONS LANDING PAGE (CONVERSION-READY)
- Wireframe (sections + copy blocks)
- CTA strategy (email opt-in, investor updates, deck download request, webinar RSVP)
- On-page trust elements (filings, governance, FAQ, glossary)
- Tracking spec: GA4 events, UTMs, conversion events, pixels, callouts for compliance review

4) LINKEDIN COMPANY PAGE MANAGEMENT KIT
- Content pillars + cadence (3–5 posts/week)
- 4-week content calendar (table): topic, hook, format, CTA, asset needed
- 12 ready-to-post LinkedIn posts (compliant, varied formats)
- Community engagement SOP: comment playbook + response templates
- Employee advocacy kit: 6 employee post templates + do/don’t checklist

5) EMAIL NURTURE + INVESTOR UPDATES KIT (OPT-IN)
- List-building plan (sources: landing page, webinars, content upgrades)
- Segmentation (retail, advisors, analysts, partners)
- 5-email welcome/nurture sequence (full copy, subject lines, CTAs)
- Monthly investor update template (copy/paste)
- A/B test plan (subject lines, CTAs, layout)
- Deliverability checklist (SPF/DKIM/DMARC, cadence, hygiene)

6) GOOGLE ADS CAMPAIGN BUILD (SEARCH + DISPLAY + YOUTUBE OPTIONAL)
- Campaign architecture (ad groups, keyword themes, negative keywords)
- 20 keywords + rationale; 30 negatives
- 6 Search ads (RSA copy: headlines + descriptions)
- 6 Display ad concepts (copy + targeting)
- Optional YouTube: 3 video ad scripts (30s) + companion banner copy
- Landing page alignment checklist + compliance constraints for ad copy
- Measurement plan: CPC/CTR/CPA benchmark ranges (assumptions), conversion definitions

7) STOCKTWITS PLAYBOOK
- Posting cadence + content types
- 20 StockTwits post templates (compliant; no hype; value-first)
- Moderation/response rules: rumor control, FAQ replies, escalation path

8) REDDIT + WALLSTREETBETS STRATEGY (PLATFORM-SAFE)
- Subreddit selection criteria (do NOT assume WSB allows promotion)
- “Allowed-first” approach: educational AMA, transparency disclosures, no calls-to-action that violate rules
- 10 Reddit post drafts (education-first) + 10 comment reply templates
- If posting not permitted: alternative strategy (earned media, creator interviews, neutral educational content)

9) DISCORD COMMUNITY SETUP (OPTIONAL BUT POWERFUL)
- Server architecture (channels + permissions)
- Rules, mod SOP, verification, anti-misinformation policy
- Weekly cadence: office hours, Q&A, recap posts (templates included)

10) EXTRA CAMPAIGNS TO LAYER IN (HIGH LEVERAGE)
Pick 6–10 from: webinars/AMA, investor Q&A page, podcast circuit, PR calendar, conference listings, creator collaborations (with disclosures), SEO investor glossary, downloadable investor FAQ, remarketing sequences, analyst outreach kit.

11) IMPLEMENTATION CHECKLIST + ASSET LIST
- Who does what: IR, marketing, legal, design, dev
- Required assets (graphics, deck, screenshots, filings links)
- Week-by-week task list for first 4 weeks (daily granularity)

12) RISK & COMPLIANCE CONTROL PANEL
- Pre-publication review checklist
- Crisis response templates (misinformation, rumor, volatility spike)
- “Stop conditions” (what triggers pausing campaigns)

[OUTPUT REQUIREMENTS]
- Use bullet points + short paragraphs.
- Provide tables for calendars and ad-group structures.
- Provide copy blocks that are paste-ready.
- Use placeholders like [IR_URL], [DECK_LINK], [BUDGET], [PRIMARY_CATALYST], [LEGAL_REVIEW_EMAIL] when unknown.
- End with a single-page “Operator Summary” checklist.

[FINAL INSTRUCTION]
Optimize for credibility, transparency, and measurable growth in qualified attention—without hype or manipulation. Build the kit as if a team will launch it this week.
```

**Mike:** Optimize a prompt for a senior front end designer of modern . Sleek, landing pages .  The style is minamlist.  Use whatever the
 attached image or images are, center the design around it. Use the most cutting edge frameworks and languages.

**GPT:** Here’s a stronger, cleaner version of your prompt:

```text
[ROLE]
You are a senior front-end designer and creative developer specializing in modern, sleek, minimalist landing pages with premium visual direction.

[DIRECTIVE]
Design and build a high-end landing page centered around the attached image or images. The visual identity, layout, color palette, motion, and overall storytelling should be driven by the attached asset(s), making them the core focus of the experience.

[CONTEXT]
The page should feel cutting-edge, refined, modern, and visually striking while remaining minimalist and clean. The design must not feel generic or template-based. It should look like a polished product launch or premium brand landing page.

Use the attached image(s) as the foundation for:
- the hero section
- the page composition
- the visual hierarchy
- the supporting color palette
- the mood and tone of the brand

If multiple images are attached:
- choose the strongest one as the hero focal point
- use the others as supporting visual elements, layered sections, product highlights, or gallery-style accents

[DESIGN GOALS]
- Minimalist but bold
- Premium and modern
- Strong typography
- Elegant spacing and layout rhythm
- High-end art direction
- Image-led storytelling
- Subtle but impressive interactions and animation
- Fully responsive across desktop, tablet, and mobile

[TECHNICAL REQUIREMENTS]
Use the most advanced modern front-end stack and interaction tools best suited for this project, such as:
- React
- Next.js or Vite
- TypeScript
- Tailwind CSS
- Framer Motion
- GSAP where appropriate
- modern animation, transitions, hover states, scroll effects, and micro-interactions

The final result should feel production-quality, not like a mockup.

[PAGE REQUIREMENTS]
Include:
- a visually powerful hero section centered around the attached image(s)
- headline and subheadline area
- premium CTA buttons
- supporting content sections that extend the visual story
- smooth scrolling experience
- motion and interactivity that enhance the design without cluttering it
- clean navigation if needed
- polished footer

[STYLE RULES]
- Keep the aesthetic minimalist, sharp, and elegant
- Avoid clutter, overly busy UI, or cheap-looking gradients/effects
- Prioritize composition, whitespace, typography, and visual impact
- Every section should feel intentional and cohesive with the attached image(s)

[OUTPUT]
Deliver:
1. The best design concept for the landing page
2. The full front-end implementation
3. Clean, well-structured, maintainable code
4. Responsive behavior across all devices
5. Brief notes explaining the design choices and framework choices

[FINAL INSTRUCTION]
Do not create a generic landing page. Create a visually memorable, premium, minimalist experience where the attached image or images feel central to the brand and the page design.
```

A sharper version for **agent mode / code generation tools** would be:

```text
Design and build a premium minimalist landing page using the attached image(s) as the central visual anchor. You are a senior front-end designer and creative developer with elite taste in modern digital design.

Use the strongest attached image as the hero focal point and build the full design system around it, including typography, color palette, spacing, layout, and motion language. If multiple images are provided, use them as supporting visual assets in a cohesive storytelling flow.

Requirements:
- sleek, modern, minimalist aesthetic
- premium brand feel
- cutting-edge front-end stack
- React + TypeScript + Tailwind CSS + Framer Motion preferred
- use GSAP only where it meaningfully improves the experience
- fully responsive
- production-quality UI
- strong hero section
- polished CTA buttons
- refined micro-interactions
- smooth scroll and subtle motion
- clean navigation and footer if appropriate

Design priorities:
- image-led storytelling
- strong typography
- elegant whitespace
- clean visual hierarchy
- no clutter
- no generic template feel
- no unnecessary effects

Deliver the complete implementation with clean, maintainable code and ensure the final result looks like a high-end launch page for a premium product or brand.
```

If you want, I can also turn this into a version optimized specifically for **single-file HTML**, **React/Next.js**, or **Lovable/Codex/Claude agent mode**.

**Mike:** Turn it into a version optimized for Google Gemini

**GPT:** Here’s a Google Gemini–optimized version:

```text
You are a world-class senior front-end designer and creative developer specializing in ultra-modern, sleek, minimalist landing pages with premium art direction.

Your task is to design and build a visually exceptional landing page centered around the attached image or images.

First, carefully analyze the attached image(s) as primary visual input.
Use them to determine:
- the visual mood
- the color palette
- the composition style
- the typography direction
- the brand tone
- the hierarchy of the page

If multiple images are attached:
- identify the strongest image for the hero section
- use the remaining images as supporting visuals in later sections
- maintain a cohesive visual system across the entire page

The design must feel:
- minimalist
- premium
- cutting-edge
- sleek
- intentional
- highly polished
- modern and luxurious, not generic

Center the entire experience around the attached visual assets. The page should feel as if it was designed specifically for those images, not as if the images were inserted into a pre-made template.

Use the best modern technologies and frameworks for a production-quality result, including:
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Next.js or Vite
- GSAP only if it adds meaningful value

Design requirements:
- strong hero section built around the main image
- headline and subheadline that match the image mood
- premium call-to-action buttons
- elegant supporting sections that continue the visual story
- refined spacing and typography
- subtle motion, transitions, and micro-interactions
- clean navigation if needed
- polished footer
- fully responsive layout for desktop, tablet, and mobile

Style rules:
- keep the design minimalist and high-end
- prioritize composition, white space, typography, and visual rhythm
- avoid clutter
- avoid generic startup aesthetics
- avoid overdesigned effects
- avoid cheap gradients or unnecessary visual noise
- make every section feel deliberate and editorial

Technical expectations:
- produce clean, maintainable, well-structured code
- use reusable components where appropriate
- ensure responsive behavior is smooth and polished
- keep performance in mind
- make animations elegant and restrained

Process:
1. Analyze the attached image(s) and infer the visual direction
2. Create the landing page concept around them
3. Build the full implementation
4. Ensure the final result feels like a premium launch page for a modern brand or product

Output format:
- brief design rationale first
- then provide the full implementation
- structure the code cleanly and clearly
- include comments where helpful
- ensure the final result is immediately usable

Final instruction:
Do not generate a generic landing page. Create a distinctive, image-led, premium minimalist experience where the attached visual assets are the heart of the design.
```

A slightly stronger Gemini version for **code generation only** is below:

```text
You are a senior front-end designer and elite creative developer.

Build a premium minimalist landing page using the attached image or images as the central design anchor.

Before writing code, analyze the image(s) and derive:
- primary and secondary colors
- mood and tone
- layout inspiration
- typography direction
- visual hierarchy

Then design and build the page around those findings.

Requirements:
- React + TypeScript + Tailwind CSS
- Framer Motion for refined motion
- Next.js or Vite
- GSAP only where necessary
- production-quality code
- fully responsive
- sleek, modern, minimalist
- premium editorial feel
- strong hero section
- polished CTA buttons
- subtle animations
- clean navigation and footer if needed
- supporting sections that extend the visual story of the image(s)

Rules:
- do not use a generic template
- do not clutter the page
- do not overpower the attached image(s)
- do not use cheap or excessive effects
- keep the design elegant, modern, and intentional

Output:
1. Short design rationale based on the image analysis
2. Full implementation
3. Clean, maintainable code
4. Responsive behavior included
```

If you want, I can also turn this into a **Gemini prompt specifically for single-file HTML output**.
