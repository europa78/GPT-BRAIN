---
title: "Loveable website prompts / Logo"
date: 2025-10-23
cluster: "Prompt Eng / GPT Building"
messages: 528
source: chatgpt-export conversations.json (FULL transcript)
---

# Loveable website prompts / Logo

> 528 messages · 2025-10-23 · cluster: Prompt Eng / GPT Building

**Semantic neighbors:** [[Create custom GPTs- Zoominfo]] · [[Prompt engineering task]] · [[Draft expert prompts]] · [[Perfect LLM prompt 5.1 - LSA cat]]

## Transcript

**Mike:** I want to build a landing page using the web builder Loveable.  I need you to draft effective prompts that work together to build the landing page as efficiently and quickly as possible.   understand ?

**GPT:** Got it. Here’s a tight, end-to-end prompt stack you can drop into Loveable (or any AI web builder) to crank out a high-converting landing page fast. Use them in order. Each prompt has clear variables you fill in once and then reuse.

---

# 0) One-Shot Turbo Brief (optional: runs the whole build)
**Prompt:**  
“Act as a senior CRO web builder. Create a single-page landing site for **{{Brand}}** targeting **{{Primary Audience}}** to convert **{{Primary Goal}}** (e.g., demo signup, lead form).  
Use the brief below to generate: page structure, hero, features, social proof, offer, pricing, FAQ, lead form, footer, responsive/mobile styles, on-brand visuals, SEO metadata, and schema.  
**Constraints:** above-the-fold speed, skimmable copy, one primary CTA, trust cues early, accessibility AA, mobile-first.  
**Brief:**  
- Brand: {{Brand}}, tagline: {{Tagline}}  
- Value prop: {{Core Value Prop}}  
- Problems solved: {{Top 3 Pains}}  
- Key outcomes: {{Top 3 Outcomes}}  
- Proof: {{Logos/Testimonial/Stats}}  
- Offer: {{Lead Magnet/Trial/Consult}}  
- CTA: {{CTA Label}} → {{Destination (form/modal/URL)}}  
- Objections: {{Top 3 Objections}} (address in FAQ)  
- Visual style: {{Style Keywords}} (e.g., clean fintech, bold editorial)  
- Compliance notes: {{Notes}}  
- Integrations: {{GA4, Pixel, Calendly, Salesloft webhook, CRM}}”

---

# 1) Brand & Audience Intake (sets shared variables for later)
**Prompt:**  
“Store the following as project variables and confirm back:  
{{Brand}}, {{Tagline}}, {{Primary Audience}}, {{ICP details}}, {{Core Value Prop}}, {{Top 3 Pains}}, {{Top 3 Outcomes}}, {{Key Differentiators}}, {{Primary Goal}}, {{Primary CTA}}, {{Secondary CTA}}, {{Offer}}, {{Compliance Notes}}, {{Visual Style}}.”

---

# 2) Site Outline & Section Plan (wireframe first)
**Prompt:**  
“Propose a conversion-focused section outline for a single-page funnel for **{{Brand}}** with jump links:  
1) Hero (problem → promise → proof → CTA),  
2) Credibility strip (logos),  
3) Benefits grid,  
4) How it works (3 steps),  
5) Social proof (testimonial + metric),  
6) Offer snapshot,  
7) Pricing or ‘What you get’,  
8) FAQ (objection handling),  
9) Final CTA,  
10) Footer (contact, legal).  
Return: section IDs, H1/H2s, one-line goals, and the primary KPI per section.”

---

# 3) Hero Block (headline that sells)
**Prompt:**  
“Write a hero block.  
- H1: outcome-driven (≤10 words),  
- Subhead: expand pain → outcome,  
- CTA primary: **{{CTA Label}}**, CTA secondary (ghost): **{{Secondary CTA}}**,  
- Trust row: 3 credibility cues (logos or short stats),  
- Visual: suggest a single hero image or short loop concept consistent with **{{Visual Style}}**.  
Return copy + recommended layout (left/right) + alt text.”

---

# 4) Benefits Grid (3–6 bullets)
**Prompt:**  
“Create a 3–6 card benefits grid mapping **{{Top 3 Pains}}** → **{{Top 3 Outcomes}}**.  
For each card: short title, 15-25 word benefit, micro-icon suggestion, proof hook (metric or quote fragment).”

---

# 5) How It Works (3-Step)
**Prompt:**  
“Write a 3-step ‘How it works’ with action verbs and micro-copy under each step (≤20 words/step). Add one risk-reversal line beneath (e.g., cancel anytime, money-back).”

---

# 6) Social Proof Pack
**Prompt:**  
“Produce:  
- 1 marquee testimonial (≤35 words) with role, company, headshot alt.  
- 3 micro-testimonials (≤20 words).  
- 1 quantified proof metric (e.g., ‘↑{{Metric}} in {{Timeframe}}’, include method note).  
Add a ‘why it worked’ insight line.”

---

# 7) Offer Snapshot (lead magnet / trial / consult)
**Prompt:**  
“Create an offer box for **{{Offer}}** with: title, 3 bullets of value, what happens after signup, trust badge (privacy), and a single CTA **{{CTA Label}}**.”

---

# 8) Pricing / What You Get (or Value Stack if no pricing)
**Prompt:**  
“Draft a 3-tier pricing (Starter / Growth / Pro) OR ‘What you get’ if price is hidden.  
Each tier: who it’s for, 5 bullets, primary CTA. Include a toggle note for monthly/annual if relevant and a money-back line if applicable.”

---

# 9) FAQ as Objection Handler
**Prompt:**  
“Write 6–8 FAQs that directly counter **{{Top 3 Objections}}** plus delivery, support, security, and cancellation. Keep answers ≤60 words, actionable, and link to relevant sections by ID.”

---

# 10) Lead Form + Validation + Routing
**Prompt:**  
“Generate a compact lead form for **{{Primary Goal}}** with fields: name, email, phone (optional), company (optional), notes (optional).  
- Inline validation (email/phone), consent checkbox (GDPR/CCPA wording), spam honey-pot, and reCAPTCHA placeholder.  
- On submit: show success state with next-step expectations; route webhook to **{{Salesloft/CRM Endpoint}}** and send notification to **{{Notification Email}}**.”

---

# 11) Visual System & Assets
**Prompt:**  
“Define a simple design system:  
- Color tokens: Primary, Neutral, Accent (provide hex),  
- Type scale (H1–H6, body, button),  
- Spacing scale (4, 8, 12…),  
- Button styles (primary/secondary), card styles, shadows, radii,  
- Image guidance (subject, angle, background) aligned to **{{Visual Style}}**.  
Return as a compact design spec.”

---

# 12) Accessibility & Mobile-First Adjustments
**Prompt:**  
“List concrete a11y rules applied: semantic headings, labels, 4.5:1 contrast, focus states, skip-to-content, alt text examples, target size ≥44px.  
Then specify mobile-first adjustments for each section (stack order, image crops, font sizes, sticky CTA behavior).”

---

# 13) SEO Metadata & Schema
**Prompt:**  
“Generate:  
- Title tag (≤60 chars) and meta description (≤155 chars),  
- OG title/description/image spec,  
- JSON-LD ‘Organization’ + ‘WebSite’ + ‘BreadcrumbList’ + ‘FAQPage’ using on-page content for **{{Brand}}**.  
Return minified JSON-LD.”

---

# 14) Performance Budget & Checks
**Prompt:**  
“Set a performance budget and actions:  
- Max LCP ≤2.5s, CLS ≤0.1, TBT ≤200ms; image sizes and formats; lazy-load rules; font loading (swap); animation limits.  
Return a checklist mapped to each section.”

---

# 15) Integrations (Analytics, Calendly, Pixels, Salesloft)
**Prompt:**  
“Embed integration placeholders: GA4 (G-ID {{GA4_ID}}), Meta Pixel ({{PIXEL_ID}}), LinkedIn Insight tag, Calendly inline for **{{Calendly Link}}**, and Salesloft webhook URL **{{Webhook}}** on form submit. Provide code/slot placeholders and where each fires.”

---

# 16) A/B Test Variants (quick wins)
**Prompt:**  
“Propose two A/B variants focused on **single-variable** changes:  
- Variant A: Hero headline swap + CTA label change,  
- Variant B: Social proof above the fold + different hero visual.  
Return measurable hypotheses, success metrics, and expected lift rationale.”

---

# 17) Final Polish & Publish Checklist
**Prompt:**  
“Run a pre-publish sweep: typos, link targets, 404s, favicon, OG image, robots/meta, sitemap, cookie notice, legal links, contact info, form test, success state, mobile scroll test, keyboard navigation, and lighthouse goals. Return a tick-box list.”

---

## Power-Ups (use when needed)

### Snappy Copy Rewrite
“Rewrite this section in a tighter, high-signal style for **{{Primary Audience}}**, 6th-grade readability, verbs up front, no fluff:  
```  
{{Paste Section Copy}}  
```”

### Tone Swap
“Keep meaning, swap tone to **{{Choose: authoritative / friendly / luxury / technical / challenger}}**, keep sentences ≤16 words and remove filler.”

### Compliance Pass
“Scan the page for risky claims and add compliant alternatives and required disclaimers based on **{{Compliance Notes}}**. Return a list of edits with rationale.”

### Localization
“Localize copy for **{{Locale}}** with regional terms, currency, decimal formats, and update any examples accordingly. Return only changed lines.”

---

## How to run this quickly

1) Paste **#1 Brand & Audience Intake**, fill variables.  
2) Paste **#2 Outline** → accept/modify.  
3) Run **#3–#11** section-by-section (fast to iterate).  
4) Add **#12–#15** for quality and tracking.  
5) Set tests with **#16**, then **#17** to ship.

If you want, tell me your variables (Brand, audience, offer, CTA, style) and I’ll pre-fill the prompts for your exact use case.

**Mike:** is this the most effective

**GPT:** Short answer: it’s strong, but you can make it **more effective** by forcing stricter outputs, tighter length caps, and reusable tokens so Loveable doesn’t wander. Below is a lean V2 that layers those upgrades without adding friction.

---

## What to upgrade (quick wins)
- **Lock an output schema** (per section) so the builder returns consistent, paste-ready blocks.
- **Set hard length caps** (words/chars) so copy never bloats or wraps poorly on mobile.
- **Define design tokens once** (colors, type scale, spacing) and reuse them everywhere.
- **Single CTA discipline**: one primary action across the page; secondary is ghost.
- **QA gates baked-in**: accessibility, speed, legal/compliance pass before “done.”
- **A/B hooks**: request two single-variable tests with hypotheses and success metrics.
- **Integrations**: require explicit placeholders for GA4/Pixel/Calendly/Salesloft webhook.
- **Determinism**: ask for numbered sections with stable `id`s to avoid broken anchor links.

---

## Controller Prompt (run first, reused variables)
**Prompt:**  
“Act as a senior CRO web builder. Save these project variables for reuse and confirm back as JSON:  
- brand, tagline, audience, ICP, goal, primary_cta, secondary_cta, value_prop, pains[3], outcomes[3], differentiators[3], offer, objections[3], proof (logos|quotes|stats), visual_style, compliance_notes, ga4_id, pixel_id, calendly_url, salesloft_webhook, notification_email.  
Return JSON only.”

---

## Global Design Tokens (one source of truth)
**Prompt:**  
“Create a minimal design system for the landing page. Return JSON only with:  
```
{
  "colors": { "primary":"#...", "accent":"#...", "neutral_900":"#...", "neutral_100":"#..." },
  "typography": { "h1":32, "h2":24, "body":16, "button":16, "lineHeight":1.4 },
  "spacingScale":[4,8,12,16,24,32,48],
  "radii":{"card":"16px","button":"12px"},
  "shadows":{"elev1":"..."},
  "buttons":{"primary":{"bg":"primary","fg":"neutral_100"}, "secondary":{"bg":"transparent","fg":"primary","border":"primary"}}
}
```  
Keep colors AA-contrast compliant.”

---

## Page Outline (IDs + KPI + caps)
**Prompt:**  
“Propose the section outline for a single-page funnel. Return JSON only with ordered sections:  
id, h1/h2, goal, primary_kpi, word_cap (max words for the whole section).  
Sections: hero, logos, benefits, how_it_works, social_proof, offer, pricing_or_value, faq, final_cta, footer. Keep ids kebab-case and stable.”

---

## Section Generator (schema + caps) — reuse per section
**Prompt:**  
“For section **{{section_id}}**, generate copy and UI hints. Respect **word_cap** and these caps:  
- h1 ≤ 10 words, subhead ≤ 24 words, bullet ≤ 16 words.  
Return JSON only:  
```
{
 "id":"{{section_id}}",
 "layout":"left-image|right-image|center",
 "copy": {
   "h1":"…",
   "subhead":"…",
   "bullets":["…","…","…"], 
   "cta":{"primary":"{{primary_cta}}","secondary":"{{secondary_cta}}"}
 },
 "proof":{"logos":["…"], "stat":{"label":"…","value":"…"}},
 "media":{"type":"image|lottie","alt":"…","guidance":"shot angle / subject / background"},
 "a11y":{"alt_text":"…","aria_labels":["…"]}
}
```  
Tie each benefit to a top pain → outcome.”

---

## How-It-Works (3-step microcopy)
**Prompt:**  
“Generate 3 steps, each: verb-first title + ≤14-word line. Add **one** risk-reversal line (≤10 words). Return JSON array:
`[{step:1,title:'',line:''},…], risk_reversal:'…'`.”

---

## Social Proof Pack (tight + quantified)
**Prompt:**  
“Return JSON only:  
```
{
 "marquee":{"quote":"≤35 words","name":"…","role":"…","company":"…","headshot_alt":"…"},
 "micros":[{"quote":"≤20","name":"…"},{"quote":"≤20","name":"…"},{"quote":"≤20","name":"…"}],
 "metric":{"statement":"↑X% in Y days","method_note":"how measured"}
}
```”

---

## Offer Snapshot (lead magnet / consult)
**Prompt:**  
“Return JSON only for an offer card:  
`{ "title":"…","value_bullets":["…","…","…"],"next_steps":"what happens after submit (≤18 words)","trust":"Privacy-safe. No spam.","cta":"{{primary_cta}}" }`”

---

## Pricing or Value Stack
**Prompt:**  
“If pricing: return JSON tiers (Starter/Growth/Pro) with ‘who it’s for’, 5 bullets, CTA.  
If price hidden: return ‘what you get’ value stack. Keep bullets ≤12 words. Return JSON only.”

---

## FAQ (objection handling)
**Prompt:**  
“Create 6–8 FAQs that neutralize the three main objections plus delivery, support, security, cancellation. Each answer ≤60 words. Return JSON array of `{q:'', a:''}`. Link answers to section ids where useful.”

---

## Form + Routing (Salesloft/Calendly)
**Prompt:**  
“Return JSON only for a compact lead form:  
```
{
 "fields":[
   {"name":"name","type":"text","required":true},
   {"name":"email","type":"email","required":true},
   {"name":"phone","type":"tel","required":false},
   {"name":"company","type":"text","required":false},
   {"name":"notes","type":"textarea","required":false}
 ],
 "consent":"I agree to be contacted…",
 "antispam":{"honeypot":true,"recaptcha":true},
 "submit":{"success":"Thanks! Check your email in 2 minutes for next steps."},
 "integrations":{"salesloft_webhook":"{{salesloft_webhook}}","notify":"{{notification_email}}","calendly_inline":"{{calendly_url}}"}
}
```”

---

## SEO + Schema (minified)
**Prompt:**  
“Return JSON only with:  
`{ "title":"≤60 chars", "meta":"≤155 chars", "og":{"title":"…","desc":"…","image_spec":"1200x630 center-safe"}, "schema":{"organization":{…},"website":{…},"breadcrumb":{…},"faqpage":{…}} }`  
Use on-page content; minify schema.”

---

## Accessibility & Performance Gate (pre-publish)
**Prompt:**  
“Return a checklist JSON:  
- a11y: semantic headings, labels, focus states, 4.5:1 contrast, alt examples, target ≥44px, skip link.  
- performance budget: LCP ≤2.5s, CLS ≤0.1, TBT ≤200ms; lazy-load images, font-display:swap, ≤1 hero animation.  
- legal: cookie notice, privacy, terms.  
- QA: links, form submit test, mobile scroll, keyboard nav.”

---

## A/B Tests (single-variable)
**Prompt:**  
“Return two single-variable tests with hypothesis + success metric:  
- A: hero headline variant, CTA label swap.  
- B: move social proof above the fold + alternate hero visual.  
JSON: `[{name:'A',change:'…',hypothesis:'…',metric:'CVR to form'}, {…}]`”

---

### How to run, fast
1) **Controller Prompt** → confirm variables JSON.  
2) **Design Tokens** → lock style.  
3) **Outline** → approve.  
4) Generate each section with the **Section Generator** (plus the specialized prompts above).  
5) Add **Form**, **SEO**, **A11y/Perf**, then **A/B**.

If you share your variables (brand, audience, offer, CTA, style), I’ll prefill the JSON for you so you can paste directly into Loveable.

**Mike:** optimize the prompt for a hood cleaning website.  use this site as a template : https://www.hoodguyz.com/pompano-beach/

**GPT:** Absolutely. Here’s a **Loveable-ready prompt stack** pre-tuned for a **commercial kitchen hood cleaning** landing page, modeled on the Hood Guyz Pompano structure (services grid, NFPA-96 compliance cues, proof, quote form). Drop these in as-is and just swap your variables.

---

# 0) Controller — save variables (run first)
**Prompt:**  
“Act as a senior CRO web builder. Store and reuse these variables:  
```
brand:"{{Your Brand}}",
tagline:"{{e.g., NFPA-96 Certified Hood & Exhaust Cleaning}}",
audience:"Restaurant owners, food trucks, commissary kitchens, facility managers",
goal:"Lead form submissions + quote calls",
primary_cta:"Request a Free Inspection",
secondary_cta:"Call Now",
service_area:"{{Cities/Counties}}",
proof_assets:"{{Before/After photos, logos, testimonials}}",
compliance_notes:"Reference NFPA-96; show certification & inspection logs",
phone:"{{###-###-####}}",
notification_email:"{{leads@...}}"
```
Return JSON echo only.”

---

# 1) Outline — match winning layout
**Prompt:**  
“Create a one-page outline with fixed IDs and word caps, modeled on high-performing hood-cleaning pages:  
- hero (≤60 words)  
- logos (≤10 words)  
- services-grid (8 cards; ≤18 words/card) → *Hood Exhaust Cleaning, Pressure Cleaning, Filter Cleaning, Appliance Cleaning, PCU Cleaning, Conveyor Oven Cleaning, Floor Cleaning, Access Panel Installs*  
- how-it-works (3 steps + risk-reversal)  
- nfpa-compliance (short explainer + inspection frequencies summary)  
- social-proof (1 marquee + 3 micros + 1 metric)  
- offer-snapshot (Free Inspection / Photo Report)  
- service-area (bullet list + map note)  
- faq (6–8 items; objections: downtime, scheduling windows, grease on roof, photos, certifications, pricing)  
- final-cta  
Return JSON with `{id,h1/h2,goal,word_cap}`.”

*(Services list mirrors the Pompano template categories.)* citeturn0search0turn0search4

---

# 2) Design tokens — blueprints
**Prompt:**  
“Return JSON design tokens: AA contrast, industrial/clean feel.  
```
{ "colors":{"primary":"#0E4B8B","accent":"#00A0DC","neutral_900":"#0B1220","neutral_100":"#F6F8FB"},
  "type":{"h1":34,"h2":26,"body":16,"button":16,"lh":1.4},
  "space":[4,8,12,16,24,32,48],
  "radii":{"card":"16px","button":"12px"},
  "buttons":{"primary":{"bg":"primary","fg":"neutral_100"},"secondary":{"bg":"transparent","fg":"primary","border":"primary"}}
}
```  
Return JSON only.”

---

# 3) Hero block — outcome + safety
**Prompt:**  
“Generate `hero` section JSON:  
- h1 ≤10 words (fire-safe, inspection-ready outcome)  
- subhead ≤24 words (grease risk → NFPA-96 compliance)  
- CTAs: `{{primary_cta}}` and ghost `{{secondary_cta}}`  
- trust row: ‘NFPA-96 compliant’, ‘Certified Techs’, ‘Before/After Photo Report’  
- media guidance: crew cleaning hood, ‘bare-metal’ result, no faces prominent.  
Return JSON `{id,layout,copy,proof,media,a11y}`.”

(“Bare-metal” and NFPA-96 compliance are common selling points on top sites.) citeturn0search5turn0search2

---

# 4) Services grid — 8 cards (templated)
**Prompt:**  
“Generate `services-grid` JSON with exactly 8 cards named:  
Hood Exhaust Cleaning; Pressure Cleaning; Filter Cleaning; Appliance Cleaning; PCU Cleaning; Conveyor Oven Cleaning; Floor Cleaning; Access Panel Installs.  
Each: `title`, `benefit` ≤18 words, `micro_icon`, `proof_hook` (e.g., ‘photos included’, ‘roof grease capture’, ‘downtime <2 hrs’).”

*(Matches the Pompano page’s core service set.)* citeturn0search0

---

# 5) How it works — 3 steps
**Prompt:**  
“Return JSON array of 3 steps (verb-first titles + ≤14-word lines) and `risk_reversal` (≤10 words, e.g., ‘Photos before/after. No mess left.’).”

---

# 6) NFPA-96 compliance explainer — concise & credible
**Prompt:**  
“Write `nfpa-compliance` section JSON:  
- 2-sentence overview of NFPA-96 and why it matters (≤45 words)  
- bullet list of typical *inspection* frequencies (monthly → annually; dependent on volume/type)  
- line stating ‘Cleaned by trained, certified personnel’  
- small print disclaimer to verify with local AHJ.  
Return tight copy only.”  
*(Use verified points: inspection cadence varies by volume; cleaning by certified personnel.)* citeturn0search1turn0search3turn0search6turn0search9

---

# 7) Social proof pack — quantified
**Prompt:**  
“Return JSON:  
- marquee testimonial ≤35 words (role + venue type)  
- 3 micro-testimonials ≤20 words  
- 1 metric like ‘↓ grease on roof incidents 90 days post-service’ with method note (photo logs + manager sign-off).”

---

# 8) Offer snapshot — Free Inspection + Photo Report
**Prompt:**  
“Return `offer-snapshot` JSON:  
`{ title:'Free Hood System Inspection',
   value_bullets:['NFPA-96 photo checklist','Roof & fan grease check','Quote with scope & schedule'],
   next_steps:'We inspect, send photo report, schedule service window.',
   trust:'Privacy-safe. No spam.',
   cta:'{{primary_cta}}' }`”

---

# 9) Service area — local SEO block
**Prompt:**  
“Generate `service-area` JSON:  
- short intro (≤18 words)  
- bullet list of cities/neighborhoods within {{service_area}}  
- note: ‘24/7 scheduling windows available’ and ‘Emergency cleanup support’ (if offered).  
Return compact copy only.”

---

# 10) FAQ — objection handling
**Prompt:**  
“Return 8 FAQs (≤60 words each) covering: scheduling windows (overnight/Sun-Mon), downtime, mess containment, roof grease/containment boxes, before/after photos, certification/insurance, pricing transparency (scope-based), compliance logs left on-site.”

---

# 11) Lead form + routing
**Prompt:**  
“Return JSON form spec:  
fields: name (req), email (req), phone (opt), business name (opt), address (opt), notes (opt); consent checkbox; honey-pot + reCAPTCHA.  
Submit success message with next steps; route webhook to Salesloft `{{salesloft_webhook}}`; notify `{{notification_email}}`; click-to-call button `{{phone}}`.”

---

# 12) SEO metadata + schema
**Prompt:**  
“Return JSON: title ≤60 chars, meta ≤155 chars including location; OG spec; minified JSON-LD for `Organization`,`LocalBusiness`,`Service`,`FAQPage` using sections. Emphasize ‘NFPA-96 compliant hood & exhaust cleaning’ and `{{service_area}}`.”

---

# 13) A11y + performance gate
**Prompt:**  
“Return checklist JSON: headings order; labels; 4.5:1 contrast; focus states; 44px targets; skip link; alt text examples. Performance budget: LCP ≤2.5s, CLS ≤0.1, TBT ≤200ms; lazy-load all non-hero images; font-display:swap.”

---

# 14) A/B tests — single variable
**Prompt:**  
“Return two tests JSON:  
A) Hero headline (compliance vs. fire-risk framing) + CTA label swap;  
B) Move social proof above the fold + alternate hero image (team at work vs. sparkling hood).  
Metric: form CVR; hypothesis + expected direction.”

---

### Notes you can keep in the project (for Loveable/context)
- Use “NFPA-96 compliant,” “certified technicians,” and “bare-metal cleaning” in trust cues. citeturn0search2turn0search5  
- Reference inspection frequency variability and certified personnel per NFPA-96 guidance. citeturn0search1turn0search3turn0search9  
- Mirror the **service card taxonomy** shown on the Pompano template for familiarity and SEO intent. citeturn0search0

If you share your brand, phone, cities, and any testimonials, I’ll pre-fill these prompts with your exact variables.

**Mike:** what do I do in this situation ?

**GPT:** You’re in the **Secrets** screen for your Loveable project. Add the keys below so your **lead form** can (1) verify reCAPTCHA, (2) notify you by email, and (3) forward the lead into your Salesloft workflow.

Here’s exactly what to do:

## 1) Decide the submit flow
On form submit →  
**(a)** verify reCAPTCHA → **(b)** send the payload to a **webhook** (Zapier/Make or your own serverless endpoint) → **(c)** that webhook creates/updates the lead in Salesloft and sends you a notification email via Resend.

## 2) Fill each secret (what it is + where to get it)
- **SALESLOFT_WEBHOOK_URL**  
  Use a “catch hook” URL from **Zapier/Make** (recommended) or your own API endpoint.  
  - *Zapier:* Create “Webhook → Catch Hook” → copy the unique URL.  
  - *Make:* “Webhooks → Custom webhook” → copy URL.  
  Paste that URL here.

- **NOTIFICATION_EMAIL**  
  The email address that should receive new-lead alerts (e.g., `leads@yourdomain.com`). Paste the address.

- **RESEND_API_KEY**  
  In **Resend** (resend.com) → *API Keys* → “Create API Key” → copy the key (starts with `re_`). Paste it here.  
  This lets your backend send you a transactional email on each submission.

- **RECAPTCHA_SECRET_KEY**  
  Go to **Google reCAPTCHA Admin** → create a key for your domain (v2 “I’m not a robot” or v3).  
  Copy the **secret key** (server-side) and paste here.  
  > You’ll also need the **Site Key** on the client form (that one is *not* a secret and is usually added in your page settings or form component).

Click **Submit** to save.

## 3) Wire the form to use the secrets
In Loveable, secrets are exposed to your server-side code as environment variables (commonly `process.env.NAME`) or a secrets helper (often `secrets.NAME`). Use whichever your project template supports.

**Server action / API route (pseudo-code):**
```js
export default async function submitLead(req, res) {
  const body = await req.json();

  // a) Verify reCAPTCHA
  const ok = await verifyRecaptcha(body.token, process.env.RECAPTCHA_SECRET_KEY);
  if (!ok) return res.status(400).json({error: 'recaptcha_failed'});

  // b) Forward to your webhook (Zapier/Make) which pushes to Salesloft
  await fetch(process.env.SALESLOFT_WEBHOOK_URL, {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify(body)
  });

  // c) Send notification via Resend
  await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from: 'Leads <no-reply@yourdomain.com>',
      to: [process.env.NOTIFICATION_EMAIL],
      subject: 'New Hood Cleaning Lead',
      html: `<p>Name: ${body.name}<br>Email: ${body.email}<br>Phone: ${body.phone || ''}<br>Notes: ${body.notes || ''}</p>`
    })
  });

  return res.json({ok:true});
}

async function verifyRecaptcha(token, secret) {
  const r = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: {'Content-Type':'application/x-www-form-urlencoded'},
    body: new URLSearchParams({secret, response: token})
  });
  const data = await r.json();
  return data.success === true;
}
```

## 4) Map fields in your webhook scenario
In Zapier/Make, map incoming JSON fields (`name`, `email`, `phone`, `company`, `address`, `notes`) to the **Salesloft “Create/Update Person/Prospect”** action (or use Salesloft API if you built a custom endpoint). Then add a second step to send a confirmation/notification if you prefer to do it there instead of Resend.

## 5) Quick test checklist
- Add the **reCAPTCHA Site Key** to your page’s form widget.  
- Submit a test lead → confirm:
  - reCAPTCHA passes,
  - the hook receives data,
  - contact appears in Salesloft (or your CRM step),
  - notification email lands in your inbox.
- Try a failed reCAPTCHA to see the proper error message.
- Rotate the Resend key if you accidentally expose it anywhere.

---

If you want, tell me which route you prefer (Zapier/Make vs. your own API), and I’ll give you the exact setup steps and the JSON field mapping for Salesloft.

**Mike:** how should I configure it?  I want to create a contact page that has name , company name , phone number , email address , calendar and description of what they are looking for.

**GPT:** Great—here’s a clean, “do-this-then-that” setup for a **Contact** page in Loveable with your fields plus an embedded calendar. I’ll give you (A) what to put in Secrets, (B) the page layout spec, (C) the form payload and validation, (D) the server/API wiring, and (E) the Zapier/Make mapping to Salesloft + email.

---

# A) Secrets (Project → Secrets)
Set these exactly (you already saw the inputs):

- `SALESLOFT_WEBHOOK_URL` → a Zapier/Make **Catch Hook** URL (or your own endpoint).
- `NOTIFICATION_EMAIL` → where alerts land (e.g., `leads@yourdomain.com`).
- `RESEND_API_KEY` → from Resend dashboard.
- `RECAPTCHA_SECRET_KEY` → from Google reCAPTCHA Admin.

> You’ll also need your **reCAPTCHA Site Key** (public) in the page code—not a secret.

---

# B) Contact Page Layout (what to ask Loveable to generate)
Use a two-column layout:

1) **Left:** Contact form  
2) **Right:** Embedded calendar (Calendly)

**Prompt to paste into Loveable:**
```
Create a “Contact” page with a two-column layout.
Left column: a compact lead form with the following fields:
- Full Name (required, text)
- Company Name (optional, text)
- Phone Number (optional, tel, validate US/INT formats)
- Email Address (required, email)
- What are you looking for? (required, textarea)
Include a consent checkbox: “I agree to be contacted and accept the Privacy Policy.”
Include an invisible reCAPTCHA (token) field.
Primary submit button: “Send Request”.

Right column: Inline embed a Calendly calendar at {{CALENDLY_URL}} with heading “Book a Call”.
Show a short line under the heading: “Prefer to talk now? Pick a time.”

Form behavior:
- Client-side validation for email/phone.
- On submit: call /api/contact (POST) with JSON payload, including reCAPTCHA token.
- Show success state: “Thanks — we’ll email you within 2 minutes and confirm next steps.”
- Show error states for: validation failed, recaptcha_failed, network_error.

Accessibility:
- Labels tied to inputs, 44px targets, focus states, ARIA live region for form status.

Performance:
- Defer Calendly script; load only on this route.
```

---

# C) Form Payload + Validation Rules
**JSON body sent to your API route:**
```json
{
  "name": "Jane Smith",
  "company": "Smith Hospitality Group",
  "phone": "+1 954 555 0199",
  "email": "jane@smithhg.com",
  "description": "Monthly NFPA-96 hood cleaning and photo reports for 3 locations.",
  "calendar_opt_in": true,
  "recaptcha_token": "CLIENT_SIDE_TOKEN"
}
```

**Validation (client and server):**
- `name` → 2–80 chars.
- `email` → RFC-compliant email.
- `phone` → optional; accept E.164 or common US formats; normalize on server.
- `description` → 10–1,000 chars.
- `recaptcha_token` → required.

---

# D) Server wiring (API route + secrets usage)
Create an API route like `/api/contact`. In Loveable projects it’s typically available as a server action or API handler and secrets are read from env.

**Pseudocode (Node/Next style):**
```js
export default async function handler(req, res) {
  try {
    if (req.method !== 'POST') return res.status(405).end();

    const { name, company, phone, email, description, recaptcha_token } = await req.json();

    // 1) Basic validation
    if (!name || !email || !description || !recaptcha_token) {
      return res.status(400).json({ error: 'validation_failed' });
    }

    // 2) Verify reCAPTCHA
    const verify = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: new URLSearchParams({
        secret: process.env.RECAPTCHA_SECRET_KEY,
        response: recaptcha_token
      })
    }).then(r => r.json());

    if (!verify.success) return res.status(400).json({ error: 'recaptcha_failed' });

    // 3) Forward to your webhook (Zapier/Make) for Salesloft + CRM handling
    await fetch(process.env.SALESLOFT_WEBHOOK_URL, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ name, company, phone, email, description, source: 'Contact Page' })
    });

    // 4) Send notification via Resend (optional; you can also do this inside Zapier/Make)
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'Leads <no-reply@yourdomain.com>',
        to: [process.env.NOTIFICATION_EMAIL],
        subject: 'New Contact Request',
        html: `<p><b>Name:</b> ${name}<br><b>Company:</b> ${company || ''}<br><b>Email:</b> ${email}<br><b>Phone:</b> ${phone || ''}<br><b>Details:</b> ${description}</p>`
      })
    });

    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: 'server_error' });
  }
}
```

**Client reCAPTCHA (v2 invisible or v3):**
- Add the reCAPTCHA script with your **Site Key**.
- On submit, request a token (`grecaptcha.execute(...)`) and include it as `recaptcha_token` in the payload.

---

# E) Zapier (or Make) configuration to Salesloft + notifications

**Zapier example**
1) **Trigger:** Webhooks by Zapier → **Catch Hook**.  
   - This gives you the URL you put into `SALESLOFT_WEBHOOK_URL`.
2) **Action 1:** Salesloft → **Create or Update Person**  
   - Map fields:  
     - First Name/Last Name (you can split `name` using Zapier’s Formatter)  
     - Email → `email`  
     - Phone → `phone`  
     - Company → `company`  
     - Notes/Custom field → `description`  
     - Person Source / Tag → “Contact Page”
3) **Action 2 (optional):** Salesloft → **Create Cadence Step / Add to Cadence** (if you want them auto-enrolled).
4) **Action 3:** Email by Zapier (or Gmail/Outlook) → send internal alert to `NOTIFICATION_EMAIL` with the same fields.  
   *(If you already send via Resend in code, you can skip this step.)*

**Make.com equivalent**
- **Webhook** → **Salesloft** (Create/Update Person) → **Gmail/SMTP/Resend** for internal alert.  
- Add a **Router** if you want logic (e.g., if `company` empty, route differently).

---

# F) Calendly embed (right column)
Add your **Calendly** inline widget:

```html
<div class="calendly-inline-widget" data-url="https://calendly.com/your-handle/intro-call" style="min-width:320px;height:690px;"></div>
<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
```

**Two good patterns:**
- Always visible in the right column, or
- Show after a successful form submit (swap form for the calendar with a success message).

---

# G) Copy the exact Loveable prompts for the Contact page

**1) Page generator**
```
Act as a senior CRO web builder. Create a “Contact” page with:
- Two-column layout: form (left) + Calendly (right).
- Form fields: full_name*, company, phone, email*, description*.
- Consent checkbox, invisible reCAPTCHA token, spam honeypot.
- POST to /api/contact with JSON.
- Success + error states (aria-live).
- Right column: Calendly inline at {{CALENDLY_URL}}.
- Accessibility: labels/ids, focus rings, 44px targets.
- Style: clean, AA contrast, mobile-first (stack columns).
Return the full component/section with IDs and minimal CSS classes.
```

**2) Form validation helper**
```
Generate client-side validation rules and messages:
- full_name: required (2–80 chars)
- email: required, valid email
- phone: optional, normalize to E.164 if possible
- description: required, 10–1000 chars
Return code ready to drop in the Contact page component.
```

---

## Final checklist
- Secrets saved and test values set.
- reCAPTCHA **Site Key** placed on the page; **Secret Key** in Secrets.
- API route created and deployed.
- Zapier/Make hook URL entered into `SALESLOFT_WEBHOOK_URL`.
- Test a real submission: verify Salesloft person is created and email notification arrives.
- Decide whether the Calendly is always visible or appears after submit.

If you want, tell me your Calendly link and any custom Salesloft fields; I’ll give you the exact Zap field mapping and a minimal code block tailored to your stack.

**Mike:** distill the contact page in Loveable into a prompt

**GPT:** Here’s a **single, paste-ready prompt** for Loveable to build your Contact page exactly as you described—clean, fast, and wired for leads.

---

**Loveable Prompt — “Contact Page (Form + Calendar)”**

> Act as a senior CRO web builder. Create a responsive **Contact** page with a two-column layout (left = form, right = calendar). Use the variables below and follow the functional spec precisely.
>
> **Variables to apply**
> - BRAND: {{Your Brand}}
> - CALENDLY_URL: {{https://calendly.com/your-handle/intro-call}}
> - NOTIFICATION_EMAIL (secret): `NOTIFICATION_EMAIL`
> - SALESLOFT_WEBHOOK_URL (secret): `SALESLOFT_WEBHOOK_URL`
> - RESEND_API_KEY (secret): `RESEND_API_KEY`
> - RECAPTCHA: site key = {{YOUR_SITE_KEY}}, secret key (server) = `RECAPTCHA_SECRET_KEY`
>
> **Page/Section IDs (keep stable)**
> - `contact-hero`, `contact-form`, `contact-calendar`, `contact-success`, `contact-faq` (placeholder), `contact-footer`
>
> **Layout & Style**
> - Two columns on desktop (form 7/12, calendar 5/12), stacked on mobile.
> - AA contrast, 44px tap targets, focus rings, semantic headings/labels.
> - Minimal, clean utility classes; no external CSS frameworks required.
>
> **Left column: Lead form (ID: contact-form)**
> - Fields (labels tied to inputs):
>   - Full Name* (text, 2–80 chars)
>   - Company Name (text, optional)
>   - Phone Number (tel, optional; accept US/E.164; normalize)
>   - Email Address* (email, RFC compliant)
>   - What are you looking for?* (textarea, 10–1000 chars)
>   - Consent checkbox*: “I agree to be contacted and accept the Privacy Policy.”
>   - Hidden honeypot field + reCAPTCHA (v2 invisible or v3): include token handling.
> - Primary button: **“Send Request”**
> - Client-side validation messages:
>   - Name: “Please enter your name.”
>   - Email: “Enter a valid email address.”
>   - Description: “Tell us briefly what you need.”
>   - Consent: “Please accept to proceed.”
> - On submit (POST JSON to `/api/contact`):
>   ```json
>   {
>     "name": "...",
>     "company": "...",
>     "phone": "...",
>     "email": "...",
>     "description": "...",
>     "recaptcha_token": "..."
>   }
>   ```
> - Show ARIA live statuses for `submitting`, `success`, and `error`.
>
> **Server/API wiring (assume server action or /api/contact)**
> - Verify `recaptcha_token` via Google endpoint using secret `RECAPTCHA_SECRET_KEY`.
> - If success:
>   1) `fetch(SALESLOFT_WEBHOOK_URL, { method:'POST', json: body })` to forward the lead for Salesloft/CRM.
>   2) Send internal notification via Resend using `RESEND_API_KEY` to `NOTIFICATION_EMAIL` with the submitted fields.
> - Return `{ ok: true }` or `{ error: 'recaptcha_failed' | 'validation_failed' | 'server_error' }`.
>
> **Right column: Calendar (ID: contact-calendar)**
> - Inline **Calendly** embed pointed at `CALENDLY_URL`.
> - Heading: “Book a Call”
> - Microcopy: “Prefer to talk now? Pick a time that works.”
> - Defer Calendly script; load only on this page.
>
> **Success & Error UX**
> - On success, replace the form with `contact-success` block:
>   - Title: “Thanks — request received.”
>   - Copy: “We’ll email you within 2 minutes with next steps. You can also book a call now.”
>   - Keep the calendar visible; provide a secondary link back to the form.
> - Handle errors gracefully with inline messages; never lose typed input on retry.
>
> **Accessibility**
> - Semantic headings (`h1` in hero, `h2` for columns), `aria-live="polite"` for status, proper `for`/`id` label associations, keyboard navigation ensured, skip-to-content link.
>
> **Performance**
> - LCP ≤2.5s, CLS ≤0.1, TBT ≤200ms.
> - Lazy-load any non-hero images (if used), `font-display: swap`, one script for Calendly deferred.
>
> **Copy (provide default text I can edit)**
> - `contact-hero`:
>   - H1: “Talk to {{BRAND}}”
>   - Sub: “Tell us what you need or book a call. We’ll respond within 2 minutes.”
> - Form placeholders: realistic and concise (e.g., “Full Name”, “Company”, “Phone”, “Email”, “Describe your project or request…”).
> - Button labels: “Send Request” (primary), “Back to form” (secondary in success state).
>
> **Deliverables**
> - Output the complete page (components/markup + minimal CSS-in-file or class names), ready to render.
> - Include a small client helper to fetch the reCAPTCHA token and attach it to the payload.
> - Show where to read secrets (`process.env.NAME` or `secrets.NAME`) and where to paste the Calendly script.
> - Provide a short “Test Steps” list at the end (submit happy path, recaptcha failure, email receipt check, Salesloft webhook receipt).
>
> **Return**
> - Return the full page code and brief test checklist only. No explanations.

---

Want me to prefill it with your brand and Calendly link so you can paste it straight in?

**Mike:** yes

**GPT:** Sweet — here’s your **paste-ready Loveable prompt** prefilled for your hood-cleaning biz.

---

**Loveable Prompt — “Contact Page (Form + Calendar)”**

> Act as a senior CRO web builder. Create a responsive **Contact** page with a two-column layout (left = form, right = calendar). Use the variables below and follow the functional spec precisely.
>
> **Variables to apply**
> - BRAND: **Miami Hood Cleaning LLC**
> - CALENDLY_URL: **https://calendly.com/miami-hood-cleaning/intro-call**
> - NOTIFICATION_EMAIL (secret): `NOTIFICATION_EMAIL`
> - SALESLOFT_WEBHOOK_URL (secret): `SALESLOFT_WEBHOOK_URL`
> - RESEND_API_KEY (secret): `RESEND_API_KEY`
> - RECAPTCHA: site key = **YOUR_SITE_KEY**, secret key (server) = `RECAPTCHA_SECRET_KEY`
>
> **Page/Section IDs (keep stable)**
> - `contact-hero`, `contact-form`, `contact-calendar`, `contact-success`, `contact-faq`, `contact-footer`
>
> **Layout & Style**
> - Two columns on desktop (form 7/12, calendar 5/12), stacked on mobile.
> - AA contrast, 44px tap targets, focus rings, semantic headings/labels.
> - Minimal, clean utility classes; no external CSS frameworks required.
>
> **Left column: Lead form (ID: contact-form)**
> - Fields (labels tied to inputs):
>   - Full Name* (text, 2–80 chars)
>   - Company Name (text, optional)
>   - Phone Number (tel, optional; accept US/E.164; normalize)
>   - Email Address* (email, RFC compliant)
>   - What are you looking for?* (textarea, 10–1000 chars)
>   - Consent checkbox*: “I agree to be contacted and accept the Privacy Policy.”
>   - Hidden honeypot field + reCAPTCHA (v2 invisible or v3): include token handling.
> - Primary button: **“Send Request”**
> - Client-side validation messages:
>   - Name: “Please enter your name.”
>   - Email: “Enter a valid email address.”
>   - Description: “Tell us briefly what you need.”
>   - Consent: “Please accept to proceed.”
> - On submit (POST JSON to `/api/contact`):
>   ```json
>   {
>     "name": "...",
>     "company": "...",
>     "phone": "...",
>     "email": "...",
>     "description": "...",
>     "recaptcha_token": "..."
>   }
>   ```
> - Show ARIA live statuses for `submitting`, `success`, and `error`.
>
> **Server/API wiring (assume server action or /api/contact)**
> - Verify `recaptcha_token` via Google endpoint using secret `RECAPTCHA_SECRET_KEY`.
> - If success:
>   1) `fetch(SALESLOFT_WEBHOOK_URL, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(body) })`
>      to forward the lead for Salesloft/CRM.
>   2) Send internal notification via Resend using `RESEND_API_KEY` to `NOTIFICATION_EMAIL` with the submitted fields.
> - Return `{ ok: true }` or `{ error: 'recaptcha_failed' | 'validation_failed' | 'server_error' }`.
>
> **Right column: Calendar (ID: contact-calendar)**
> - Inline **Calendly** embed pointed at `CALENDLY_URL`.
> - Heading: “Book a Call”
> - Microcopy: “Prefer to talk now? Pick a time that works.”
> - Defer Calendly script; load only on this page.
>
> **Success & Error UX**
> - On success, replace the form with `contact-success` block:
>   - Title: “Thanks — request received.”
>   - Copy: “We’ll email you within 2 minutes with next steps. You can also book a call now.”
>   - Keep the calendar visible; provide a secondary link back to the form.
> - Handle errors with inline messages; never lose typed input on retry.
>
> **Accessibility**
> - Semantic headings (`h1` in hero, `h2` for columns), `aria-live="polite"` for status, proper `for`/`id` label associations, keyboard navigation ensured, skip-to-content link.
>
> **Performance**
> - LCP ≤2.5s, CLS ≤0.1, TBT ≤200ms.
> - Lazy-load any non-hero images, `font-display: swap`, one script for Calendly deferred.
>
> **Copy (default text to edit)**
> - `contact-hero`:
>   - H1: “Talk to Miami Hood Cleaning”
>   - Sub: “Tell us what you need or book a call. We’ll respond within 2 minutes.”
> - Form placeholders: “Full Name”, “Company”, “Phone”, “Email”, “Describe your project or request…”.
> - Button labels: “Send Request” (primary), “Back to form” (secondary in success state).
>
> **Deliverables**
> - Output the complete page (components/markup + minimal CSS classes), ready to render.
> - Include a small client helper to fetch the reCAPTCHA token and attach it to the payload.
> - Show where to read secrets (`process.env.NAME` or `secrets.NAME`) and where to paste the Calendly script.
> - Provide a short “Test Steps” list at the end (submit happy path, recaptcha failure, email receipt check, Salesloft webhook receipt).
>
> **Return**
> - Return the full page code and brief test checklist only. No extra explanations.

---

If you want a different brand name or a specific Calendly link, tell me and I’ll tweak this instantly.

**Mike:** what is a use for a data base ?  I am building a kitchen hood cleaning website.

**GPT:** Short answer: your hood-cleaning site doesn’t *need* a database to show pages—but a DB becomes super useful the moment you want to **store, query, and reuse data** instead of just emailing it away.

## High-value uses for a database (hood cleaning)

1) **Lead vault (not just emails)**
- Save every form submission with status (new → quoted → scheduled → completed).
- De-duplicate by email/phone, track source (SEO, PPC, LSA, referral).

2) **Quotes & jobs**
- Store quote line items, scope (hoods, filters, fan, PCU), price, approvals.
- Turn approved quotes into scheduled jobs with crew + time windows.

3) **Service history & compliance**
- Per location: last clean date, NFPA-96 frequency, AHJ notes, “bare-metal” photo links.
- Generate downloadable **Service Report PDFs** on demand.

4) **Multi-location customers**
- One customer → many sites (kitchen locations); each site has its own cadence and roof-grease notes.

5) **Photo evidence & reports**
- Keep metadata (who/when/where) and storage URLs for before/after images.
- Useful when managers or inspectors ask for proof months later.

6) **Maintenance plans**
- “Quarterly plan” with next-due date, autopopulate reminders, predict capacity.

7) **Admin dashboard**
- Pipeline, win rates, average ticket, overdue services, crew utilization.

> If you’re pushing everything straight to Salesloft or a CRM, the DB can still act as your **internal source of truth** (especially for jobs, photos, and compliance logs that CRMs don’t handle well).

---

## Minimal MVP schema (works great in Loveable/Supabase/Firebase)

- **customers**  
  `id, company_name, contact_name, email, phone, notes, created_at`

- **locations** (one customer → many locations)  
  `id, customer_id, name, address1, city, state, zip, roof_access (bool), notes, nfpa_frequency (enum: monthly/quarterly/biannual/annual), created_at`

- **leads**  
  `id, name, company, email, phone, description, source (seo/ppc/lsa/referral), status (new/qualified/quoted/lost), created_at`

- **quotes**  
  `id, lead_id or location_id, subtotal, tax, total, status (draft/sent/approved/rejected), valid_until, created_at`

- **quote_items**  
  `id, quote_id, item (e.g., “Hood Exhaust Cleaning”), qty, unit_price, notes`

- **jobs**  
  `id, location_id, quote_id (nullable), scheduled_start, scheduled_end, crew_name, status (scheduled/in_progress/completed/failed), created_at`

- **service_reports**  
  `id, job_id, cleaned_by, findings, recommendations, nfpa_compliant (bool), report_pdf_url, created_at`

- **photos**  
  `id, job_id, type (before/after), url, caption, created_at`

- **reminders**  
  `id, location_id, next_due_date, cadence_days, last_service_date, created_at`

This is enough to run real operations, create reports, and power “next due” reminders.

---

## When you can skip a DB (for now)
- Early stage, just a **Contact** form → Salesloft + email.  
- No quoting/scheduling in the site, and you don’t need stored reports.  
You can add the DB later without changing the public pages.

---

## Security & ops tips
- Don’t store secrets in tables (keep API keys in **Secrets**).
- Restrict who can read/write service reports & photos (auth).
- Backups on; enable soft-delete or an `archived_at` column.
- Log consent timestamps for outreach compliance.

---

## Paste-ready prompt to ask Loveable to set up the DB

> “Create database tables for a hood-cleaning operations MVP with the following schema and relationships. Include minimal CRUD API routes or server actions for each, with auth checks. Return the migration/creation code and TypeScript models:
> 
> **customers(id, company_name, contact_name, email, phone, notes, created_at)**  
> **locations(id, customer_id FK→customers.id, name, address1, city, state, zip, roof_access BOOL, notes, nfpa_frequency ENUM('monthly','quarterly','biannual','annual'), created_at)**  
> **leads(id, name, company, email, phone, description, source ENUM('seo','ppc','lsa','referral','other'), status ENUM('new','qualified','quoted','lost'), created_at)**  
> **quotes(id, lead_id FK→leads.id NULL, location_id FK→locations.id, subtotal DECIMAL, tax DECIMAL, total DECIMAL, status ENUM('draft','sent','approved','rejected'), valid_until DATE, created_at)**  
> **quote_items(id, quote_id FK→quotes.id, item TEXT, qty INT, unit_price DECIMAL, notes TEXT)**  
> **jobs(id, location_id FK→locations.id, quote_id FK→quotes.id NULL, scheduled_start TIMESTAMP, scheduled_end TIMESTAMP, crew_name TEXT, status ENUM('scheduled','in_progress','completed','failed'), created_at)**  
> **service_reports(id, job_id FK→jobs.id, cleaned_by TEXT, findings TEXT, recommendations TEXT, nfpa_compliant BOOL, report_pdf_url TEXT, created_at)**  
> **photos(id, job_id FK→jobs.id, type ENUM('before','after'), url TEXT, caption TEXT, created_at)**  
> **reminders(id, location_id FK→locations.id, next_due_date DATE, cadence_days INT, last_service_date DATE, created_at)**
> 
> Provide:
> - API endpoints: POST /leads, PATCH /leads/:id, POST /quotes, POST /jobs, POST /service-reports, POST /photos, POST /reminders.
> - Simple admin pages to list/search leads, customers, jobs, and generate a Service Report PDF from a job (pull photos and fields).
> - Storage integration for photos (return presigned upload URLs).  
> - Role-based access: admin (full), staff (no schema changes), viewer (read-only).  
> - Seed script with sample data for 2 customers, 3 locations, 4 jobs, and 1 service report.”

---

If you want, I can tailor this to the stack you’re actually using in Loveable (e.g., built-in DB vs Supabase) and generate the exact creation scripts.

**Mike:** I will copy every prompt I have inputted into Loveable up to this point .  draft the next best prompt to continue developing the landing page.  OK?

**GPT:** Absolutely. Here’s the **next best single prompt** to move your landing page from “built” to **publish-ready**: it assembles the full page, connects CTAs to your Contact page/Calendly, adds SEO + JSON-LD, analytics pixels, a sticky “Call Now” bar, and a QA/performance gate. Paste this into Loveable as-is and tweak variables.

---

# Loveable Prompt — “Assemble & Ship Landing Page (SEO + Tracking + Sticky CTA)”

**Act as a senior CRO web builder.** Using the variables below and the sections already generated in this project, produce a **publish-ready landing page** with header/footer, section assembly, internal routing, tracking, and SEO/schema. Keep code minimal and deterministic.

**Variables**
- BRAND: **Miami Hood Cleaning LLC**
- PRIMARY_CTA_LABEL: **Request a Free Inspection**
- SECONDARY_CTA_LABEL: **Call Now**
- PHONE_E164: **+19545550199**   (use for tel: link)
- PHONE_DISPLAY: **(954) 555-0199**
- CONTACT_ROUTE: **/contact**       (route you built earlier)
- CALENDLY_URL: **https://calendly.com/miami-hood-cleaning/intro-call**
- SERVICE_AREA_CITIES: **["Miami","Miami Beach","Doral","Hialeah","Aventura","Fort Lauderdale","Hollywood","Pompano Beach"]**
- ADDRESS: **"123 Example Ave, Miami, FL 33101"**  (placeholder)
- GA4_ID: **G-XXXXXXXXXX**  (placeholder)
- META_PIXEL_ID: **000000000000000**  (placeholder)

## Requirements

**1) Page assembly (IDs stable)**
- Sections in this order:  
  `hero`, `logos`, `benefits`, `how-it-works`, `nfpa-compliance`, `social-proof`, `offer`, `service-area`, `faq`, `final-cta`, `footer`.
- Reuse copy from previously generated sections if present; otherwise generate concise defaults (≤ word caps).
- All primary CTAs link to **/contact** and pass a `?src=lp` query param; secondary CTAs are `tel:PHONE_E164`.
- Add a **sticky bottom bar on mobile** with two buttons: “Request Inspection” → **/contact?src=sticky**, and “Call Now” → **tel:PHONE_E164**.

**2) Header & Footer**
- Header: logo/brand left, right-aligned links: *Services*, *How it works*, *Compliance*, *FAQ*, **Contact** (anchor → sections and /contact).
- Footer: address, phone (click-to-call), service area mini-list, links to Privacy/Terms (placeholders), © YEAR BRAND.

**3) Tracking & events**
- GA4: load with `GA4_ID`.
- Meta Pixel: base code with `META_PIXEL_ID`.
- Fire the following events (use data attributes to avoid framework lock-in):
  - `lp_view` on page load,
  - `cta_click_primary` on any PRIMARY CTA,
  - `cta_click_call` on call links,
  - `calendar_view` when an element with `[data-calendly-cta]` is clicked (navigate to CALENDLY_URL in new tab).

**4) SEO & Social**
- Title ≤ 60 chars: include BRAND + “NFPA-96 Hood & Exhaust Cleaning | Miami”
- Meta description ≤ 155 chars: include service + cities.
- Canonical tag for the page.
- OG/Twitter tags (title, description, 1200×630 image placeholder).
- Create/return **robots.txt** (allow all, disallow /api/*) and **sitemap.xml** with `/` and `/contact`.

**5) JSON-LD (minified)**
- `Organization` with BRAND, phone, url, logo (placeholder), sameAs (empty array ok).
- `LocalBusiness` (Restaurant hood cleaning) with ADDRESS, phone, openingHours (24/7 by appt), `areaServed` from SERVICE_AREA_CITIES, `hasOfferCatalog` listing your 8 services.
- `BreadcrumbList` for Home → Hood Cleaning (this page) → Contact.
- `FAQPage` using the on-page FAQ.

**6) Accessibility & Performance**
- a11y: semantic headings, labels for buttons/links (`aria-label` for phone), visible focus, skip-link, 44px targets.
- performance budget: LCP ≤2.5s, CLS ≤0.1, TBT ≤200ms.  
  - Lazy-load non-hero images, compress images, `font-display: swap`, avoid layout shift (reserve heights).

**7) Deliverables**
- Return: a single file (component/markup + lightweight CSS/utility classes + minimal inline JS for events).  
- Include small helpers: `track(eventName, payload)` that no-ops if GA/Pixel not present.  
- Provide plain-text contents for **robots.txt** and **sitemap.xml**.  
- End with a short **Test Checklist** (anchors work, CTAs route, events fire, lighthouse targets, schema validation).

**Return only the code + robots.txt + sitemap.xml and the Test Checklist. No extra commentary.**

**Mike:** here is every prompt and message I have used so far.  draft the next best prompt to make this hood cleaning landing page the best ever!  //Oct 28
at 9:10 PM
“Create a one-page outline with fixed IDs and word caps, modeled on high-performing hood-cleaning pages:

hero (≤60 words)

logos (≤10 words)

services-grid (8 cards; ≤18 words/card) → Hood Exhaust Cleaning, Pressure Cleaning, Filter Cleaning, Appliance Cleaning, PCU Cleaning, Conveyor Oven Cleaning, Floor Cleaning, Access Panel Installs

how-it-works (3 steps + risk-reversal)

nfpa-compliance (sh ...

Show more

Thought for 15s
I'll create a high-converting hood cleaning service page with a professional, trust-building design inspired by top B2B service sites.

Design approach:

Deep blue primary (trust, compliance) + safety orange accents (urgency, fire safety)
Clean gradients and professional typography
Trust signals throughout (NFPA compliance, certifications)
Service-focused imagery with commercial kitchen themes
Clear conversion paths with risk reversal
Implementation plan:

Design system with professional B2B colors and variants
Hero with strong value proposition
Trust logos strip
8-service grid with icons
Process steps with risk reversal CTA
NFPA compliance section (inspection schedules)
Social proof carousel + metrics
Free inspection offer
Service area with map reference
FAQ addressing objections
Final conversion CTA
Let me build this:

Show all
16 edits made
Built a high-converting hood cleaning landing page with professional B2B design system, all 10 sections, and SEO optimization. The JSON outline is also saved in outline.json.

What's next?
Refine & Customize: Adjust colors, service descriptions, contact details, or add real business info via prompts or visual edits
Master Prompting: Use "chat mode" to plan additions like contact forms, booking systems, or image galleries without immediate edits
Add Real Content: Replace placeholder phone numbers, add actual service area details, or integrate real customer testimonials

Restore

Code

feat: Create one-page outline
Preview





Oct 28
at 9:16 PM
“Return JSON design tokens: AA contrast, industrial/clean feel. Return JSON only." { "colors":{"primary":"#0E4B8B","accent":"#00A0DC","neutral_900":"#0B1220","neutral_100":"#F6F8FB"}, "type":{"h1":34,"h2":26,"body":16,"button":16,"lh":1.4}, "space":[4,8,12,16,24,32,48], "radii":{"card":"16px","button":"12px"}, "buttons":{"primary":{"bg":"primary","fg":"neutral_100"},"secondary":{"bg":"tra ...

Show more

Thought for 6s

{
  "colors": {
    "primary": "#0E4B8B",
    "primary_hover": "#0A3A6E",
    "accent": "#00A0DC",
    "accent_hover": "#0088BA",
    "neutral_900": "#0B1220",
    "neutral_800": "#1A2332",
    "neutral_700": "#2D3948",
    "neutral_600": "#4A5568",
    "neutral_500": "#718096",
    "neutral_400": "#A0AEC0",
    "neutral_300": "#CBD5E0",
    "neutral_200": "#E2E8F0",
    "neutral_100": "#F6F8FB",
    "neutral_50": "#FAFBFC",
    "success": "#059669",
    "warning": "#D97706",
    "error": "#DC2626"
  },
  "typography": {
    "h1": {
      "size": "34px",
      "weight": 700,
      "lineHeight": 1.2,
      "letterSpacing": "-0.02em"
    },
    "h2": {
      "size": "26px",
      "weight": 600,
      "lineHeight": 1.3,
      "letterSpacing": "-0.01em"
    },
    "h3": {
      "size": "20px",
      "weight": 600,
      "lineHeight": 1.4
    },
    "body": {
      "size": "16px",
      "weight": 400,
      "lineHeight": 1.6
    },
    "button": {
      "size": "16px",
      "weight": 600,
      "lineHeight": 1.4
    },
    "small": {
      "size": "14px",
      "weight": 400,
      "lineHeight": 1.5
    }
  },
  "spacing": [4, 8, 12, 16, 24, 32, 48, 64, 80, 96],
  "borderRadius": {
    "card": "16px",
    "button": "12px",
    "input": "10px",
    "badge": "8px",
    "full": "9999px"
  },
  "shadows": {
    "sm": "0 1px 3px rgba(11, 18, 32, 0.08)",
    "md": "0 4px 12px rgba(11, 18, 32, 0.12)",
    "lg": "0 12px 24px rgba(11, 18, 32, 0.16)"
  },
  "buttons": {
    "primary": {
      "bg": "#0E4B8B",
      "fg": "#F6F8FB",
      "border": "none",
      "hover_bg": "#0A3A6E"
    },
    "secondary": {
      "bg": "transparent",
      "fg": "#0E4B8B",
      "border": "#0E4B8B",
      "hover_bg": "#F6F8FB"
    },
    "accent": {
      "bg": "#00A0DC",
      "fg": "#FFFFFF",
      "border": "none",
      "hover_bg": "#0088BA"
    }
  }
}




Oct 28
at 9:17 PM
Generate hero section JSON:

h1 ≤10 words (fire-safe, inspection-ready outcome)

subhead ≤24 words (grease risk → NFPA-96 compliance)

CTAs: {{primary_cta}} and ghost {{secondary_cta}}

trust row: ‘NFPA-96 compliant’, ‘Certified Techs’, ‘Before/After Photo Report’

media guidance: crew cleaning hood, ‘bare-metal’ result, no faces prominent. Return JSON {id,layout,copy,proof,media,a11y}.”

(“Bare-m ...

Show more

Thought for 6s

{
  "id": "hero",
  "layout": {
    "type": "split",
    "content_width": "55%",
    "media_width": "45%",
    "vertical_align": "center",
    "padding": {
      "top": "96px",
      "bottom": "80px"
    },
    "background": "gradient-primary"
  },
  "copy": {
    "h1": {
      "text": "NFPA-96 Certified Hood Cleaning That Passes Every Inspection",
      "word_count": 10,
      "color": "neutral_100",
      "max_width": "600px"
    },
    "subhead": {
      "text": "Eliminate fire hazards from grease buildup. Our certified technicians deliver full-system cleaning with documented proof of NFPA-96 compliance—so you stay inspection-ready.",
      "word_count": 24,
      "color": "neutral_100",
      "opacity": 0.9,
      "max_width": "540px"
    },
    "ctas": {
      "primary": {
        "text": "Get Free Inspection",
        "action": "scroll_to_form",
        "icon": "phone",
        "variant": "accent"
      },
      "secondary": {
        "text": "View Services",
        "action": "scroll_to_services",
        "icon": "arrow-down",
        "variant": "ghost",
        "style": {
          "bg": "transparent",
          "fg": "neutral_100",
          "border": "neutral_100"
        }
      }
    }
  },
  "proof": {
    "type": "trust_row",
    "items": [
      {
        "icon": "shield-check",
        "text": "NFPA-96 Compliant",
        "color": "neutral_100"
      },
      {
        "icon": "user-check",
        "text": "Certified Techs",
        "color": "neutral_100"
      },
      {
        "icon": "camera",
        "text": "Before/After Photo Report",
        "color": "neutral_100"
      }
    ],
    "layout": "horizontal_flex",
    "spacing": "32px",
    "margin_top": "48px"
  },
  "media": {
    "type": "image",
    "position": "right",
    "guidance": {
      "subject": "Commercial kitchen hood cleaning in progress",
      "focus": "Technician in work gear cleaning exhaust hood system with visible bare-metal result",
      "details": "Close-up of hood interior showing cleaned stainless steel surface, degreasing equipment visible, professional PPE worn",
      "composition": "Mid-shot, technician partially visible (back or side view, no prominent faces), emphasis on cleaned metal surface and industrial equipment",
      "lighting": "Bright industrial lighting showing metal shine and cleanliness contrast",
      "color_treatment": "Desaturated industrial tones, emphasis on metallic surfaces and professional work environment"
    },
    "alt_text": "Professional technician performing NFPA-compliant hood exhaust cleaning, showing bare-metal degreasing results",
    "aspect_ratio": "4:3",
    "object_fit": "cover",
    "border_radius": "16px",
    "shadow": "strong"
  },
  "a11y": {
    "landmark": "banner",
    "h1_semantic": true,
    "contrast_ratio": "AA_compliant",
    "focus_indicators": "visible",
    "aria_labels": {
      "primary_cta": "Schedule your free kitchen hood inspection",
      "secondary_cta": "Jump to service details section",
      "trust_icons": "Trust indicators showing NFPA compliance, certified technicians, and photo documentation"
    },
    "responsive_breakpoints": {
      "mobile": {
        "layout": "stacked",
        "h1_size": "28px",
        "media_position": "below_content"
      },
      "tablet": {
        "layout": "stacked",
        "h1_size": "32px"
      },
      "desktop": {
        "layout": "split",
        "h1_size": "34px"
      }
    }
  }
}




Oct 28
at 9:19 PM
Generate services-grid JSON with exactly 8 cards named: Hood Exhaust Cleaning; Pressure Cleaning; Filter Cleaning; Appliance Cleaning; PCU Cleaning; Conveyor Oven Cleaning; Floor Cleaning; Access Panel Installs. Each: title, benefit ≤18 words, micro_icon, proof_hook (e.g., ‘photos included’, ‘roof grease capture’, ‘downtime <2 hrs’).”


Thought for 6s

{
  "id": "services-grid",
  "layout": {
    "type": "grid",
    "columns": {
      "mobile": 1,
      "tablet": 2,
      "desktop": 4
    },
    "gap": "24px",
    "padding": {
      "top": "80px",
      "bottom": "80px"
    },
    "background": "neutral_50"
  },
  "header": {
    "h2": "Complete Kitchen Exhaust Services",
    "subhead": "End-to-end cleaning from hood to rooftop. Every component documented.",
    "text_align": "center",
    "margin_bottom": "48px"
  },
  "cards": [
    {
      "id": "hood-exhaust",
      "title": "Hood Exhaust Cleaning",
      "benefit": "Full plenum-to-fan degreasing removes fire hazards and restores airflow to manufacturer specs for NFPA-96 compliance.",
      "word_count": 17,
      "micro_icon": "wind",
      "proof_hook": "Photos included",
      "icon_color": "primary",
      "icon_bg": "neutral_100"
    },
    {
      "id": "pressure-cleaning",
      "title": "Pressure Cleaning",
      "benefit": "High-pressure hot water blast eliminates caked grease from ductwork, fans, and exterior surfaces—no residue left behind.",
      "word_count": 17,
      "micro_icon": "droplets",
      "proof_hook": "Roof grease captured",
      "icon_color": "primary",
      "icon_bg": "neutral_100"
    },
    {
      "id": "filter-cleaning",
      "title": "Filter Cleaning",
      "benefit": "Baffle and mesh filters hand-scrubbed or replaced to restore grease capture efficiency and prevent kitchen smoke backup.",
      "word_count": 17,
      "micro_icon": "filter",
      "proof_hook": "Airflow tested",
      "icon_color": "primary",
      "icon_bg": "neutral_100"
    },
    {
      "id": "appliance-cleaning",
      "title": "Appliance Cleaning",
      "benefit": "Grills, fryers, ovens, and ranges degreased to health department standards—extends equipment life and prevents flare-ups.",
      "word_count": 16,
      "micro_icon": "flame",
      "proof_hook": "Downtime <2 hrs",
      "icon_color": "primary",
      "icon_bg": "neutral_100"
    },
    {
      "id": "pcu-cleaning",
      "title": "PCU Cleaning",
      "benefit": "Pollution control units fully degreased for regulatory compliance and maximum efficiency—prevents costly EPA violations and odor complaints.",
      "word_count": 17,
      "micro_icon": "fan",
      "proof_hook": "EPA compliant",
      "icon_color": "primary",
      "icon_bg": "neutral_100"
    },
    {
      "id": "conveyor-oven",
      "title": "Conveyor Oven Cleaning",
      "benefit": "Chain, belt, and interior surfaces stripped of carbonized grease—eliminates fire risk and improves bake consistency in pizza ovens.",
      "word_count": 18,
      "micro_icon": "move-horizontal",
      "proof_hook": "Fire risk eliminated",
      "icon_color": "primary",
      "icon_bg": "neutral_100"
    },
    {
      "id": "floor-cleaning",
      "title": "Floor Cleaning",
      "benefit": "Industrial-strength degreasing removes slip hazards and meets sanitation codes—includes tile, grout, and drain cleaning for full compliance.",
      "word_count": 18,
      "micro_icon": "layers",
      "proof_hook": "Non-slip certified",
      "icon_color": "primary",
      "icon_bg": "neutral_100"
    },
    {
      "id": "access-panels",
      "title": "Access Panel Installs",
      "benefit": "Code-compliant panels installed in hard-to-reach ductwork sections—simplifies future inspections and cuts cleaning costs by 30%.",
      "word_count": 17,
      "micro_icon": "square-dashed-bottom",
      "proof_hook": "Saves 30% next time",
      "icon_color": "primary",
      "icon_bg": "neutral_100"
    }
  ],
  "card_style": {
    "background": "neutral_100",
    "border": "1px solid neutral_200",
    "border_radius": "16px",
    "padding": "24px",
    "hover_shadow": "md",
    "transition": "all 0.3s ease"
  },
  "typography": {
    "title": {
      "size": "20px",
      "weight": 600,
      "color": "neutral_900",
      "margin_bottom": "12px"
    },
    "benefit": {
      "size": "16px",
      "weight": 400,
      "color": "neutral_700",
      "line_height": 1.6,
      "margin_bottom": "16px"
    },
    "proof_hook": {
      "size": "14px",
      "weight": 600,
      "color": "accent",
      "text_transform": "uppercase",
      "letter_spacing": "0.05em"
    }
  },
  "icon_style": {
    "size": 32,
    "stroke_width": 2,
    "container_size": "56px",
    "border_radius": "12px",
    "margin_bottom": "16px"
  },
  "a11y": {
    "section_label": "Service offerings",
    "card_role": "article",
    "icon_aria_hidden": true,
    "focus_visible": true
  }
}




Oct 28
at 9:27 PM
Service area — local SEO block
Prompt: “Generate service-area JSON:

Tri-County Area

bullet list of cities/neighborhoods within {{Miami,Broward, WPB}}

note: ‘24/7 scheduling windows available’ and ‘Emergency cleanup support’ (if offered). Return compact copy only.”


Thought for 7s
I'll generate the service-area JSON with tri-county coverage and scheduling notes.


{
  "id": "service-area",
  "layout": {
    "type": "centered",
    "max_width": "800px",
    "padding": "80px 16px",
    "background": "secondary"
  },
  "header": {
    "h2": "Serving South Florida's Restaurants",
    "h2_word_count": 4,
    "subhead": "Fast response times throughout the tri-county area. Same-week service available.",
    "subhead_word_count": 12,
    "text_align": "center",
    "margin_bottom": "32px"
  },
  "regions": [
    {
      "name": "Miami-Dade County",
      "cities": [
        "Miami Beach",
        "Downtown Miami",
        "Coral Gables",
        "Kendall",
        "Homestead",
        "Doral"
      ]
    },
    {
      "name": "Broward County",
      "cities": [
        "Fort Lauderdale",
        "Hollywood",
        "Pompano Beach",
        "Plantation",
        "Sunrise",
        "Davie"
      ]
    },
    {
      "name": "Palm Beach County",
      "cities": [
        "West Palm Beach",
        "Boca Raton",
        "Delray Beach",
        "Boynton Beach",
        "Jupiter",
        "Wellington"
      ]
    }
  ],
  "display": {
    "layout": "grid",
    "columns": {
      "mobile": 2,
      "tablet": 3,
      "desktop": 4
    },
    "gap": "16px",
    "icon": "MapPin",
    "icon_size": "16px",
    "icon_color": "primary"
  },
  "notes": {
    "background": "muted",
    "border": "border",
    "border_radius": "12px",
    "padding": "24px",
    "margin_top": "32px",
    "items": [
      {
        "label": "Coverage",
        "text": "From Homestead to Jupiter—full coastal corridor and inland communities."
      },
      {
        "label": "Scheduling",
        "text": "24/7 scheduling windows available for your convenience."
      },
      {
        "label": "Emergency Support",
        "text": "Emergency cleanup support when you need it most."
      }
    ]
  },
  "cta_note": {
    "text": "Don't see your city? Call us—we likely serve your area.",
    "font_weight": "medium",
    "margin_top": "16px"
  },
  "a11y": {
    "landmark": "region",
    "aria_label": "Service Area Coverage",
    "list_semantics": "ul",
    "heading_hierarchy": "h2"
  }
}




Oct 28
at 9:28 PM
Prompt: “Return 8 FAQs (≤60 words each) covering: scheduling windows (overnight/Sun-Mon), downtime, mess containment, roof grease/containment boxes, before/after photos, certification/insurance, pricing transparency (scope-based), compliance logs left on-site.”


Thought for 6s
I'll generate 8 FAQs covering scheduling, downtime, mess control, and compliance documentation.


{
  "id": "faq",
  "layout": {
    "type": "centered",
    "max_width": "900px",
    "padding": "80px 16px",
    "background": "background"
  },
  "header": {
    "h2": "Common Questions Answered",
    "h2_word_count": 3,
    "subhead": "Everything you need to know about our kitchen exhaust cleaning process.",
    "subhead_word_count": 12,
    "text_align": "center",
    "margin_bottom": "48px"
  },
  "faqs": [
    {
      "id": "scheduling",
      "question": "Can you work around our operating hours?",
      "answer": "Absolutely. We offer flexible scheduling including overnight shifts, Sunday-Monday windows, and early morning slots. Our team works when your kitchen is closed so there's zero impact on service hours.",
      "word_count": 32
    },
    {
      "id": "downtime",
      "question": "How long will our kitchen be out of commission?",
      "answer": "Most hood cleanings take 2-4 hours depending on system size. We arrive ready to work and complete the job efficiently. Your kitchen is typically back in operation the same day with no extended downtime.",
      "word_count": 38
    },
    {
      "id": "mess",
      "question": "How do you contain the mess during cleaning?",
      "answer": "We use industrial tarps, floor protection, and containment barriers. All grease waste is captured and removed from your premises. We leave your kitchen cleaner than we found it—guaranteed.",
      "word_count": 32
    },
    {
      "id": "roof-grease",
      "question": "Do you clean the roof grease and containment boxes?",
      "answer": "Yes. Roof fan housings and grease containment boxes are included in our service. We remove accumulated grease safely and check for proper drainage to prevent fire hazards and code violations.",
      "word_count": 32
    },
    {
      "id": "photos",
      "question": "Will I receive before/after documentation?",
      "answer": "Every service includes a comprehensive photo report showing before, during, and after shots of your exhaust system. You'll receive digital copies via email within 24 hours for your compliance records.",
      "word_count": 33
    },
    {
      "id": "certification",
      "question": "Are your technicians certified and insured?",
      "answer": "All technicians are NFPA-96 trained and certified. We carry full liability insurance and workers' compensation coverage. Certificates of insurance are available upon request for your property management or franchise requirements.",
      "word_count": 34
    },
    {
      "id": "pricing",
      "question": "How is pricing determined?",
      "answer": "Pricing is scope-based and depends on hood size, duct length, and cleaning frequency. We provide transparent quotes after a free inspection—no hidden fees. Most restaurants pay between $300-$800 per service.",
      "word_count": 34
    },
    {
      "id": "compliance",
      "question": "Do you provide compliance documentation for inspections?",
      "answer": "Yes. We leave a dated compliance sticker on your hood and provide a detailed service report. These documents satisfy NFPA-96 requirements and are accepted by fire marshals and insurance auditors.",
      "word_count": 33
    }
  ],
  "component": {
    "type": "accordion",
    "allow_multiple": true,
    "icon_position": "right"
  },
  "typography": {
    "question": {
      "size": "18px",
      "weight": "600",
      "color": "foreground"
    },
    "answer": {
      "size": "16px",
      "weight": "400",
      "color": "muted-foreground",
      "line_height": "1.6"
    }
  },
  "a11y": {
    "landmark": "region",
    "aria_label": "Frequently Asked Questions",
    "heading_hierarchy": "h2",
    "accordion_semantics": true
  }
}




Oct 28
at 9:31 PM
fields: name (Mike), email (miamihood.billing@gmail.com), phone (954-847-5237), business name (Mr.Hood), address (123 happy lane), notes (opt); consent checkbox; honey-pot + reCAPTCHA. Submit success message with next steps; route webhook to Salesloft {{salesloft_webhook}}; notify {{notification_email}}; click-to-call button {{phone}}.”


Thought for 12s
I'll create a contact form with security features and backend integration. This requires Lovable Cloud for webhooks and email notifications.

Enable Cloud
Allowed

Complete backend and AI models out of the box.

Built-in backend

Database, storage, authentication, and backend logic—all ready to use.

Add an LLM to your app

Powerful AI models with zero setup. Add chat, image generation, and text analysis instantly.

Free to start, pay as you scale

Free usage included everywhere. Top up on paid plans. Track usage in Settings → Usage.

Note: This can't be undone once enabled.

Ask each time
Cloud




Oct 28
at 9:32 PM
Allowed
Thought for 22s
I'll create a secure contact form with webhooks and email notifications. First, let me set up the required secrets.


Restore

Code

feat: Enable Lovable tool
Preview

Add Secrets
SALESLOFT_WEBHOOK_URL

NOTIFICATION_EMAIL

RESEND_API_KEY

RECAPTCHA_SECRET_KEY


Submit
Secrets




Oct 28
at 10:36 PM
Act as a senior CRO web builder. Create a responsive Contact page with a two-column layout (left = form, right = calendar). Use the variables below and follow the functional spec precisely.

Variables to apply

BRAND: Miami Hood Cleaning LLC

CALENDLY_URL: https://calendly.com/miami-hood-cleaning/intro-call

NOTIFICATION_EMAIL (secret): NOTIFICATION_EMAIL

SALESLOFT_WEBHOOK_URL (secret): SALESLOFT ...

Show more

Thought for 20s
I'll create the complete Contact page with form, calendar embed, edge function, and all integrations.

Show all
12 edits made
Complete Contact page created at /contact with form, Calendly embed, and backend integration. You'll need to configure these secrets:


Restore

Code

feat: Add Contact page
Preview

Add Secrets
NOTIFICATION_EMAIL

SALESLOFT_WEBHOOK_URL

RESEND_API_KEY

RECAPTCHA_SECRET_KEY


Submit
Secrets




Oct 28
at 10:41 PM
can I upload files to loveable , like a logo or photos ?


Yes, absolutely! You can upload files like logos and photos to Lovable. Here's how to do it depending on your device:

On Desktop:

Click the plus (+) button in the bottom-left corner of the chat input area
Select "Attach" from the menu
Choose your image files (logos, photos, etc.)
You can also drag and drop files directly into the chat area on desktop!

On Mobile:

Tap the plus (+) button in the bottom-left corner (make sure you're in Chat mode)
Select "Camera" to take a photo or "Attach" to choose from your gallery
File Upload Limits:

Maximum file size: 20MB per file
Maximum files per message: 10 files
Supported Image Formats:

JPG, PNG, WEBP (can be viewed and used directly)
For HEIC files (common on iPhones), you'll need to convert them to JPG/PNG first
Once you upload your logo or photos, I can help you integrate them into your Miami Hood Cleaning website - whether that's adding your logo to the header, using photos in the gallery sections, or anywhere else you'd like them to appear.

Would you like to upload some files now so we can start working with them?





Oct 28
at 10:43 PM

p
how do I add hyper links to text or images ?


Great question! Let me explain how to add hyperlinks to text and images in your React/TypeScript project.

Adding Hyperlinks to Text
For text, you have a few options:

1. External links (opens in same tab):


<a href="https://example.com" className="text-primary hover:underline">
  Click here
</a>
2. External links (opens in new tab):


<a 
  href="https://example.com" 
  target="_blank" 
  rel="noopener noreferrer"
  className="text-primary hover:underline"
>
  Click here
</a>
3. Internal navigation (to other pages in your app):


import { Link } from "react-router-dom";

<Link to="/contact" className="text-primary hover:underline">
  Contact Us
</Link>
Adding Hyperlinks to Images
External link:


<a href="https://example.com" target="_blank" rel="noopener noreferrer">
  <img 
    src="/path/to/image.jpg" 
    alt="Description" 
    className="hover:opacity-80 transition-opacity"
  />
</a>
Internal navigation:


import { Link } from "react-router-dom";

<Link to="/services">
  <img 
    src="/path/to/image.jpg" 
    alt="Our services" 
    className="hover:opacity-80 transition-opacity"
  />
</Link>
For Your Selected Element
I can see you've selected the text "Restaurants Serviced Since 2010" on line 62 of SocialProof.tsx. Would you like me to make this clickable? If so, let me know:

Where should it link to? (e.g., /about, /contact, or an external URL)
Should it open in a new tab or same tab?
I can then create a plan to implement that change for you!//

**GPT:** Awesome—here’s the **next best single prompt** to take your hood-cleaning landing page from “great” to **unbeatable** by adding the highest-impact conversion proof: **reviews pulled from Google, before/after gallery with lightbox, a 60-second case study, a downloadable sample report, and a map embed**—all performance-optimized and tracked.

---

# Loveable Prompt — “Proof Engine: Reviews + Before/After + Case Study + Map”

**Act as a senior CRO web builder.** Add a conversion **Proof Engine** to the landing page. Keep code minimal, deterministic, and accessible. Implement the modules below and place them **after `social-proof` and before `offer`**. Reuse existing design tokens.

## Variables
- BRAND: **Miami Hood Cleaning LLC**
- PHONE_E164: **+19545550199**
- PHONE_DISPLAY: **(954) 555-0199**
- CONTACT_ROUTE: **/contact?src=proof**
- SAMPLE_REPORT_URL: **/assets/sample-hood-cleaning-report.pdf** *(placeholder)*
- GMB_PLACE_ID: **YOUR_GOOGLE_PLACE_ID**
- GOOGLE_PLACES_API_KEY (secret): `GOOGLE_PLACES_API_KEY` *(read server-side only)*
- STORAGE_PREFIX: **/assets/gallery/** *(folder for images)*
- GALLERY_SET:  
  ```
  [
    {"before":"before_duct_01.jpg","after":"after_duct_01.jpg","caption":"Duct interior — bare-metal finish"},
    {"before":"before_fan_01.jpg","after":"after_fan_01.jpg","caption":"Exhaust fan housing — grease removed"},
    {"before":"before_hood_01.jpg","after":"after_hood_01.jpg","caption":"Hood plenum — restored airflow"},
    {"before":"before_pcu_01.jpg","after":"after_pcu_01.jpg","caption":"PCU cabinet — compliant and clean"}
  ]
  ```

## Modules to build

### 1) **Reviews (Google + manual fallback)**
- **Server function**: `/api/reviews` fetches last 12 Google reviews for `GMB_PLACE_ID` using the `GOOGLE_PLACES_API_KEY`. Cache result for 12h. If API fails, return a **manual list** defined inline (array of `{author, rating, text, time}`).
- **UI component** `reviews-wall`:
  - Show **Aggregate rating** (avg, count), **schema-ready** data attributes.
  - Grid of 6 cards (desktop 3×2; mobile 1×6), each card: stars, 2-line truncated text, author, “Verified on Google” badge.
  - **“Read more”** expands full text in a modal.
- **Events**: `reviews_load` on fetch, `reviews_expand` on modal open.

### 2) **Before / After Gallery (Lightbox & Keyboard nav)**
- Component `before-after-gallery` fed by `GALLERY_SET`.
- Each item: side-by-side thumbnails (Before | After), clicking opens **lightbox** with swipe/arrow keys and captions.
- **A11y**: alt text auto-generated from caption + “before/after”; ESC to close; focus trap.
- **Perf**: use responsive `img` with intrinsic aspect ratio; lazy-load non-first images.

### 3) **60-Second Case Study (Problem → Action → Result)**
- Component `mini-case-study` with fields:
  - **Industry** (e.g., “Fast-Casual Restaurant, Miami Beach”)
  - **Problem** (≤24 words)
  - **Action** (≤24 words)
  - **Result metric** (e.g., “Passed inspection in 24h; roof grease incidents: 0 in 90 days”)
  - CTA button → **CONTACT_ROUTE**
- Variant note: support swapping background image from STORAGE_PREFIX (optional).

### 4) **Sample Report Download (NFPA-96 Photo Report)**
- Component `sample-report-cta`:
  - Title: “See a real NFPA-96 Photo Report”
  - Bullets: “Before/after photos”, “Scope & timestamps”, “Compliance notes”
  - Button: “Download Sample Report” → `SAMPLE_REPORT_URL` (open new tab)
  - Small print: “For illustration—details vary by site.”

### 5) **Map & Service Coverage (GMB Embed)**
- Component `service-map`:
  - Left: Google Map iframe for `GMB_PLACE_ID` (privacy-friendly: `loading="lazy"`, no cookies until click).
  - Right: condensed service-area list (reuse your existing cities), plus “**Call Now**” (`tel:PHONE_E164`) and “**Request Inspection**” (→ CONTACT_ROUTE).
- **Event**: `map_interact` when user clicks to enable the map.

## Placement & Navigation
- Insert section order: `social-proof` → **`reviews-wall`** → **`before-after-gallery`** → **`mini-case-study`** → **`sample-report-cta`** → **`service-map`** → `offer`.
- Add header link **“Reviews”** that anchors to `#reviews-wall`.

## Tracking (reuse your simple `track()` helper)
- Fire:
  - `reviews_load` (count), `reviews_expand` (review_id)
  - `gallery_open` (index), `gallery_next` (index), `gallery_close`
  - `case_study_cta_click`
  - `sample_report_download`
  - `map_interact`
- All events include `{src:'proof', path: location.pathname}`.

## Schema.org (append to existing JSON-LD)
- Extend `LocalBusiness` with:
  - `aggregateRating` (avg, count) from reviews API (fallback to manual if needed).
  - `review` array (first 3 reviews).
- Add a `CreativeWork` for the **Sample Report** with `about` and file format.
- Ensure JSON-LD stays **minified**.

## Accessibility & Performance
- All interactive controls keyboard-accessible; focus rings visible.
- Lightbox uses `aria-modal="true"`, returns focus on close.
- Defer Google Maps until user clicks a poster image (“Enable Map”); only then load iframe.
- Lazy-load gallery images; first row **preloads** low-res placeholders.

## Deliverables
- Components + minimal CSS and necessary server/edge functions.
- Update header nav to include “Reviews”.
- Update sitemap if new routes created (none expected).
- Short **Test Checklist** at end:
  - Reviews load & modal expands
  - Gallery lightbox works (mouse/touch/keyboard)
  - Case-study CTA routes to Contact
  - Sample report downloads
  - Map loads only after click
  - Schema validates (aggregateRating present)
  - Events fire in console

**Return only the code for components/functions and the Test Checklist. No extra commentary.**

**Mike:** write the next best prompt.  add the name of the company , "Mr. Hood Repair".  place the name in the header. under the "trusted by" section , include that Mr. Hood has contracts with "California Pizza Kitchen" and  'Marriott Beach Resort'.

**GPT:** **Loveable Prompt — “Brand & Trust Strip Update for Mr. Hood Repair”**

> Act as a senior CRO web builder. Update the landing page to reflect the new brand and strengthen trust. Make deterministic edits only; reuse existing tokens/styles.

**Variables**
- BRAND: **Mr. Hood Repair**
- PHONE_E164: **+19545550199**
- PHONE_DISPLAY: **(954) 555-0199**
- CONTACT_ROUTE: **/contact?src=header**
- TRUSTED_BRANDS: `["California Pizza Kitchen","Marriott Beach Resort"]`

**Tasks**

1) **Header (site-wide)**
   - Replace current brand in the header with **Mr. Hood Repair** (text lockup; keep logo slot optional).
   - Header left: brand name links to “/”.
   - Header right: anchors to existing sections (*Services*, *How it works*, *Compliance*, *FAQ*, **Contact**), plus a primary button **“Request a Free Inspection”** → `CONTACT_ROUTE`.
   - Add `aria-label="Mr. Hood Repair — Home"` on the brand link.
   - Keep sticky behavior and mobile menu as-is.

2) **Trusted By / Logos section**
   - Locate the `logos` (trust strip) section and update content:
     - H2 (or caption): **“Trusted by leading brands”** (≤5 words).
     - Add two brand items from `TRUSTED_BRANDS` with accessible text logos.  
       - If logo files exist, render logos; else render styled text badges.
       - Each item: `alt="{{Brand}} — Contracted client of Mr. Hood Repair"`.
     - Subtext line beneath the strip:  
       **“Mr. Hood Repair holds active service contracts with California Pizza Kitchen and Marriott Beach Resort.”**
     - Keep grid responsive (mobile 2, desktop 4/6 as needed).
   - Event: fire `trust_impression` on section in-view.

3) **Schema & SEO updates**
   - Update JSON-LD `Organization` and `LocalBusiness` `name` to **Mr. Hood Repair**.
   - Append `knowsAbout`/`hasOfferCatalog` unchanged; add `brand` property with `name: "Mr. Hood Repair"`.
   - In `Organization`, add a `memberOf`-style note using `affiliation` array with `"California Pizza Kitchen"` and `"Marriott Beach Resort"` (names only, no URLs required).
   - Update meta `<title>` and OG/Twitter titles to start with **Mr. Hood Repair**.

4) **Accessibility & Performance**
   - Ensure text logos have sufficient contrast; logos get `aria-hidden="true"` if decorative and text alternative provided.
   - No layout shift when logos load; set fixed width/height or aspect-ratio boxes.

5) **Deliverables**
   - Return updated header component, updated `logos` section, and the merged JSON-LD block (minified).
   - Keep all other sections untouched.
   - End with a short Test Checklist (header brand link, CTA route, trust strip visible on mobile/desktop, schema name updated).

**Return only the updated code and the Test Checklist. No extra commentary.**

**Mike:** great!  what is the next logical prompt ?

**GPT:** Here’s the **next logical prompt** to level up conversions: add a **multi-step Quote Form + Scheduler**, capture UTMs, store leads in your DB, and send confirmations. Paste this into Loveable.

---

# Loveable Prompt — “Multi-Step Quote Form + UTM Capture + DB + Scheduler”

**Act as a senior CRO web builder.** Replace simple CTAs with a high-converting, **3-step quote flow** that (1) captures job details, (2) schedules a call, (3) confirms and routes to CRM. Keep code minimal and deterministic; reuse tokens/styles.

## Variables
- BRAND: **Mr. Hood Repair**
- CONTACT_ROUTE: **/contact**
- CALENDLY_URL: **https://calendly.com/miami-hood-cleaning/intro-call**
- PHONE_E164: **+19545550199**
- PHONE_DISPLAY: **(954) 555-0199**
- SALESLOFT_WEBHOOK_URL (secret): `SALESLOFT_WEBHOOK_URL`
- NOTIFICATION_EMAIL (secret): `NOTIFICATION_EMAIL`
- RESEND_API_KEY (secret): `RESEND_API_KEY`
- RECAPTCHA_SECRET_KEY (secret): `RECAPTCHA_SECRET_KEY`

## What to build

### A) Multi-step form component (`quote-flow`) placed after `hero` and as a modal for all **Request Inspection** CTAs
**Step 1 — Contact**
- Fields: Full Name*, Company, Email*, Phone (optional).
- Hidden capture: `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`, `gclid`, `referrer`, `landing_page`, `anchor_id` (CTA origin).
- Validation: name 2–80, email RFC, phone normalize E.164 if present.

**Step 2 — Site & Scope**
- Fields: Address*, City*, State*, Zip*,  
  Selects: Hood count (1–6+), Cleaning frequency (Monthly/Quarterly/Biannual/Annual), Roof access (Yes/No), Notes (textarea, 20–500).
- Optional upload (1 file, ≤10MB): current compliance sticker or prior report (store URL).

**Step 3 — Schedule & Confirm**
- Left: Inline Calendly embed (from `CALENDLY_URL`) with small help text.
- Right: Summary card of Steps 1–2 + consent checkbox: “I agree to be contacted and accept the Privacy Policy.”*
- Submit button: **“Confirm & Send Request”**.

**Behavior**
- Progress bar with 3 steps, keyboard accessible, `aria-live` for errors.
- reCAPTCHA v3 or invisible v2 token added on submit.
- On submit → POST JSON to `/api/quote-request`.

### B) Server/API (`/api/quote-request`)
- Validate fields; verify reCAPTCHA with `RECAPTCHA_SECRET_KEY`.
- **Persist** into DB tables (create if absent):
  - `leads`: id, name, company, email, phone, description (notes), source fields (utm_*, gclid, referrer, landing_page, anchor_id), created_at.
  - `locations`: id, lead_id, address, city, state, zip, roof_access, hood_count, frequency, created_at.
  - `files`: id, lead_id, url, filename, mime, created_at.
- **Notify** internal:
  - Email via Resend → `NOTIFICATION_EMAIL` (include all fields).
- **Forward** to CRM:
  - POST to `SALESLOFT_WEBHOOK_URL` with normalized payload.
- Return `{ ok: true, lead_id }`.

### C) Storage
- Provide a minimal upload handler creating a presigned URL (or simple /upload route) and save returned `url` into `files`.

### D) Replace primary CTAs site-wide
- All “Request a Free Inspection” buttons open `quote-flow` as modal with `anchor_id` corresponding to section id (e.g., `hero`, `final-cta`).

### E) Thank-you state
- After successful submit:
  - Show confirmation screen: “Thanks — we’ve received your request.”  
    Subtext: “Check your email for details. You can also **call us now** at PHONE_DISPLAY.”
  - Keep Calendly visible to finish scheduling.
  - Provide a “Download Sample Report” link if present (`/assets/sample-hood-cleaning-report.pdf`).

### F) Tracking & Analytics
- Fire events with payload `{path, anchor_id, utm_source,…}`:
  - `quote_step_view` (step 1/2/3),
  - `quote_submit_attempt`,
  - `quote_submit_success`,
  - `quote_upload_file`,
  - `quote_calendly_view` (step 3 render),
  - `cta_open_quote_modal`.
- No-op if GA/Pixel not configured.

### G) Schema.org updates (append to existing JSON-LD)
- Add a `Service` entry for “Hood & Exhaust Cleaning Quote” with `provider.name = "Mr. Hood Repair"`.
- Add a `PotentialAction` (`ReserveAction`) pointing to `CONTACT_ROUTE` with `target` including UTM params.

### H) Accessibility & Performance
- Form fields with labels and `aria-describedby` for errors; focus management between steps; ESC closes modal; trap focus when open.
- Lazy-load Calendly until Step 3 is reached.
- Preserve entered data across step navigation and modal close/reopen.

## Deliverables
- The `quote-flow` component (inline + modal modes), the `/api/quote-request` handler, upload helper, DB migrations (or creation scripts), and CTA wiring updates.
- Minimal CSS/classes reusing your tokens.
- **Test Checklist** at end:
  - Steps validate & persist,
  - reCAPTCHA fail shows error,
  - Lead stored in DB,
  - Email received,
  - Salesloft webhook hit,
  - Events fired,
  - Calendly loads only on Step 3,
  - Modal CTAs pass `anchor_id`.

**Return only the code and the Test Checklist. No extra commentary.**

**GPT:** **Loveable Prompt — “Post-Submit Experience: Thank-You Page + Autoresponder Email (with .ics) + Optional SMS”**

> Act as a senior CRO web builder. Enhance conversions and professionalism by adding a **post-submit experience** for quote requests. Keep code minimal and deterministic, reuse existing tokens/styles, and integrate with the existing `/api/quote-request` flow.

**Variables**
- BRAND: **Mr. Hood Repair**
- FROM_EMAIL: **no-reply@mrhoodrepair.com**  *(sender via Resend)*
- SUPPORT_EMAIL: **support@mrhoodrepair.com**
- PHONE_E164: **+19545550199**
- PHONE_DISPLAY: **(954) 555-0199**
- CALENDLY_URL: **https://calendly.com/miami-hood-cleaning/intro-call**
- SAMPLE_REPORT_URL: **/assets/sample-hood-cleaning-report.pdf**
- COMPANY_ADDRESS: **“123 Example Ave, Miami, FL 33101”**
- RESEND_API_KEY (secret): `RESEND_API_KEY`
- TWILIO_ACCOUNT_SID (secret, optional): `TWILIO_ACCOUNT_SID`
- TWILIO_AUTH_TOKEN (secret, optional): `TWILIO_AUTH_TOKEN`
- TWILIO_FROM (secret, optional): `+1XXXXXXXXXX`

---

## Build the following

### 1) Thank-You page (`/thank-you`)
- Hero: “Thanks — your request is in.”
- Subcopy: “We emailed details and a calendar invite. You can **book a time now** or call **PHONE_DISPLAY**.”
- Buttons:  
  - Primary → “Book a Call” → `CALENDLY_URL` (new tab)  
  - Secondary → “Download Sample Report” → `SAMPLE_REPORT_URL`
- Module: “What happens next” (3 bullets: review request → confirm scope → schedule/clean).
- Keep JSON-LD `BreadcrumbList` updated (Home → Quote → Thank-You).

### 2) Autoresponder email (HTML + text fallback)
- **Email subject:** “We received your hood cleaning request — Next steps”
- **From:** `FROM_EMAIL` (display name **Mr. Hood Repair**)
- **To:** lead email
- Body sections:  
  - Greeting with lead name  
  - Summary of fields (name, company, phone, city, hood count, frequency, notes)  
  - “Book a call” button → `CALENDLY_URL`  
  - “Download sample report” → `SAMPLE_REPORT_URL`  
  - Signature block (brand, phone, address, support email, links)
- Include a calendar **.ics** attachment (“Intro Call – Mr. Hood Repair, 30 minutes”) scheduled 2 business days ahead at 10:00 AM local time (placeholder; editable). Location: `CALENDLY_URL` + phone.
- Provide both **HTML and plain-text** versions.
- Tracking: add `data-event="email_autoresponder_sent"` server-side.

### 3) Optional SMS confirmation (if Twilio secrets exist)
- Message (160 chars safe):  
  “Mr. Hood Repair: we got your request. Book a call: {{shortened CALENDLY_URL}} — or call {{PHONE_DISPLAY}}. Reply STOP to opt out.”
- Fire only if phone present and starts with +1 (or valid E.164).

### 4) Server updates (`/api/quote-request`)
- After successful DB save + Salesloft webhook:
  - Generate `.ics` file buffer (VEVENT; 30-min slot; summary “Intro Call – Mr. Hood Repair”; description includes lead name and phone).
  - Send email via Resend with HTML/text + `.ics` attachment from `FROM_EMAIL` to lead; CC `SUPPORT_EMAIL`.
  - If Twilio secrets present and phone valid → send SMS.
  - Respond `{ ok:true, lead_id, redirect:'/thank-you' }`.

### 5) Front-end wiring
- In `quote-flow` success handler, if API returns `redirect`, route to `/thank-you`.
- Add a **header “Contact” CTA** fallback link to `/contact?src=header`.
- Add lightweight event helper to log `thankyou_view`, `download_sample_report`, `book_call_click`.

### 6) SEO / Compliance
- Add `ContactPage` JSON-LD on `/contact`.  
- Add `WebPage` JSON-LD on `/thank-you`.  
- Footer links to **Privacy** and **Terms** (placeholder routes if not present).

### 7) Deliverables
- New route: `/thank-you` (component + minimal CSS).  
- Email templates (HTML + text) and `.ics` generator utility.  
- Updated `/api/quote-request` logic (email/SMS + redirect).  
- Small tracking helper (`track()` no-ops if GA/Pixel unavailable).  
- Update `sitemap.xml` to include `/thank-you`.

### 8) Test Checklist (return at end)
- Submit a test quote → redirect to `/thank-you`.  
- Lead receives email; `.ics` opens in Google/Outlook/Apple.  
- (If enabled) SMS arrives; STOP opt-out handled by Twilio default.  
- Buttons work: Book Call / Download Report.  
- Schema validates on `/contact` and `/thank-you`.  
- Events visible in console/network.

**Return the updated code (routes/components/server), the email templates, and the Test Checklist only. No extra commentary.**

**Mike:** fill in this info :   Calendly URL : https://calendly.com/michael-simplythebestdigital/30min.  phone : (954)874-5237. contact : Michael Abdo. Address : 4300 Riverside Dr Apt 4, Coral Springs, FL 33065.

**GPT:** Perfect—here’s your **paste-ready Loveable prompt** with your details filled in.

---

**Loveable Prompt — “Post-Submit Experience: Thank-You Page + Autoresponder Email (with .ics) + Optional SMS”**

> Act as a senior CRO web builder. Enhance conversions and professionalism by adding a **post-submit experience** for quote requests. Keep code minimal and deterministic, reuse existing tokens/styles, and integrate with the existing `/api/quote-request` flow.

**Variables**
- BRAND: **Mr. Hood Repair**
- CONTACT_NAME: **Michael Abdo**
- FROM_EMAIL: **no-reply@mrhoodrepair.com**
- SUPPORT_EMAIL: **support@mrhoodrepair.com**
- PHONE_E164: **+19548745237**
- PHONE_DISPLAY: **(954) 874-5237**
- CALENDLY_URL: **https://calendly.com/michael-simplythebestdigital/30min**
- SAMPLE_REPORT_URL: **/assets/sample-hood-cleaning-report.pdf**
- COMPANY_ADDRESS: **4300 Riverside Dr Apt 4, Coral Springs, FL 33065**
- RESEND_API_KEY (secret): `RESEND_API_KEY`
- TWILIO_ACCOUNT_SID (secret, optional): `TWILIO_ACCOUNT_SID`
- TWILIO_AUTH_TOKEN (secret, optional): `TWILIO_AUTH_TOKEN`
- TWILIO_FROM (secret, optional): `+1XXXXXXXXXX`

---

## Build the following

### 1) Thank-You page (`/thank-you`)
- Hero: “Thanks — your request is in.”
- Subcopy: “We emailed details and a calendar invite. You can **book a time now** or call **(954) 874-5237**.”
- Buttons:  
  - Primary → “Book a Call” → `CALENDLY_URL` (new tab)  
  - Secondary → “Download Sample Report” → `SAMPLE_REPORT_URL`
- Module: “What happens next” (3 bullets: review request → confirm scope → schedule/clean).
- JSON-LD `BreadcrumbList` updated (Home → Quote → Thank-You).

### 2) Autoresponder email (HTML + text fallback)
- **Subject:** “We received your hood cleaning request — Next steps”
- **From:** `FROM_EMAIL` (display name **Mr. Hood Repair**)
- **To:** lead email
- Body:
  - Greeting: “Hi {{Lead First Name}},”
  - Short intro from **{{CONTACT_NAME}}**.
  - Summary of submitted fields (name, company, phone, city, hood count, frequency, notes).
  - “Book a call” button → `CALENDLY_URL`
  - “Download sample report” → `SAMPLE_REPORT_URL`
  - Signature: **Mr. Hood Repair** • **(954) 874-5237** • **4300 Riverside Dr Apt 4, Coral Springs, FL 33065** • **support@mrhoodrepair.com**
- Attach calendar **.ics** (“Intro Call – Mr. Hood Repair, 30 minutes”), scheduled **2 business days ahead at 10:00 AM** local time (placeholder; editable). Location: `CALENDLY_URL` + phone. Provide **HTML and plain-text**.
- Track server-side event `email_autoresponder_sent`.

### 3) Optional SMS confirmation (if Twilio secrets exist)
- Message (≤160 chars):  
  “Mr. Hood Repair: we got your request. Book a call: {{short CALENDLY_URL}} or call (954) 874-5237. Reply STOP to opt out.”

### 4) Server updates (`/api/quote-request`)
- After DB save + Salesloft webhook:
  - Generate `.ics` (VEVENT, 30 min, summary “Intro Call – Mr. Hood Repair”, description includes lead name/phone).
  - Send email via Resend from `FROM_EMAIL` to lead; CC `SUPPORT_EMAIL`.
  - If Twilio secrets present and phone valid E.164 → send SMS.
  - Respond `{ ok:true, lead_id, redirect:'/thank-you' }`.

### 5) Front-end wiring
- In `quote-flow` success handler, if API returns `redirect`, navigate to `/thank-you`.
- Add event helper for `thankyou_view`, `download_sample_report`, `book_call_click`.

### 6) SEO / Compliance
- Add `ContactPage` JSON-LD on `/contact`.  
- Add `WebPage` JSON-LD on `/thank-you`.  
- Footer links to **Privacy** and **Terms** (placeholders OK).

### 7) Deliverables
- New route: `/thank-you` (component + minimal CSS).  
- Email templates (HTML + text) and `.ics` generator utility.  
- Updated `/api/quote-request` (email/SMS + redirect).  
- Update `sitemap.xml` to include `/thank-you`.

### 8) Test Checklist (return at end)
- Submit test quote → redirected to `/thank-you`.
- Lead receives email; `.ics` opens properly.
- (If enabled) SMS arrives; STOP handled by Twilio default.
- Buttons work (Book Call / Download Report).
- Schema validates on `/contact` and `/thank-you`.
- Events visible in console/network.

**Return the updated code (routes/components/server), the email templates, and the Test Checklist only. No extra commentary.**

**Mike:** the next prompt should be optimized for using css and styling.  build on the current landing page by making it look sleek and modern.

**GPT:** **Loveable Prompt — “Visual Polish: Modern CSS System + Component Styling Refresh”**

> Act as a senior UI engineer. Apply a sleek, modern visual system to the existing hood-cleaning landing page for **Mr. Hood Repair**. Keep markup changes minimal (class additions are OK). Produce a single, reusable CSS system with tokens, utilities, and component styles that upgrade the look across desktop and mobile. Ensure AA contrast, accessible focus, and smooth-but-subtle motion.

### Variables (design tokens to implement as CSS custom properties)
```
:root {
  /* Brand */
  --color-primary:#0E4B8B; --color-primary-600:#0A3A6E;
  --color-accent:#00A0DC;  --color-accent-600:#0088BA;

  /* Neutrals */
  --neutral-900:#0B1220; --neutral-800:#1A2332; --neutral-700:#2D3948;
  --neutral-600:#4A5568; --neutral-500:#718096; --neutral-400:#A0AEC0;
  --neutral-300:#CBD5E0; --neutral-200:#E2E8F0; --neutral-100:#F6F8FB; --neutral-50:#FAFBFC;

  /* Feedback */
  --success:#059669; --warning:#D97706; --error:#DC2626;

  /* Typography */
  --font-sans: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji";
  --lh:1.5;

  /* Sizing */
  --radius-sm:10px; --radius-md:12px; --radius-lg:16px; --radius-xl:20px; --radius-pill:9999px;
  --shadow-sm:0 1px 3px rgba(11,18,32,.08);
  --shadow-md:0 6px 16px rgba(11,18,32,.12);
  --shadow-lg:0 16px 32px rgba(11,18,32,.16);

  /* Layout */
  --container:1160px;
  --space-2:8px; --space-3:12px; --space-4:16px; --space-6:24px; --space-8:32px; --space-12:48px; --space-16:64px; --space-20:80px;

  /* Motion */
  --easing:cubic-bezier(.2,.6,.2,1);
  --dur-1:120ms; --dur-2:220ms; --dur-3:420ms;
}
@media (prefers-reduced-motion:reduce){ *{animation:none!important;transition:none!important;scroll-behavior:auto!important;} }
```

### Deliverables
1) **One CSS file** (`/styles/site.css`) containing:
   - **Base reset + typography** with modern clamp() scale:
     - `h1{font:700 clamp(28px,5vw,42px)/1.2 var(--font-sans)}`
     - `h2{font:600 clamp(22px,3.5vw,30px)/1.3 var(--font-sans)}`
     - `p,li{font:400 clamp(15px,2.4vw,17px)/var(--lh) var(--font-sans)}`
     - Link styles with visible focus (`outline:2px solid var(--color-accent); outline-offset:2px`).
   - **Layout utilities**:
     - `.container{max-width:var(--container);margin:auto;padding-inline:16px}`
     - `.grid{display:grid;gap:var(--space-6)}`
     - Responsive helpers: `.cols-2-md`, `.cols-3-lg`, `.stack-sm` (mobile vertical spacing).
   - **Surfaces + cards**:
     - `.surface{background:#fff;border:1px solid var(--neutral-200);border-radius:var(--radius-lg);box-shadow:var(--shadow-sm)}`
     - `.card:hover{transform:translateY(-2px);box-shadow:var(--shadow-md);transition:transform var(--dur-2) var(--easing), box-shadow var(--dur-2) var(--easing)}`
   - **Buttons** (consistent across site):
     - `.btn{display:inline-flex;align-items:center;gap:10px;font-weight:600;border-radius:var(--radius-md);padding:12px 18px;transition:background var(--dur-1) var(--easing), transform var(--dur-1) var(--easing)}`
     - `.btn:focus-visible{outline:2px solid var(--color-accent);outline-offset:2px}`
     - `.btn--primary{color:#fff;background:var(--color-primary)} .btn--primary:hover{background:var(--color-primary-600)}`
     - `.btn--accent{color:#fff;background:var(--color-accent)} .btn--accent:hover{background:var(--color-accent-600)}`
     - `.btn--ghost{color:var(--color-primary);border:1px solid var(--color-primary);background:transparent}`
     - `.btn--block{width:100%}`
   - **Badges & logos**:
     - `.badge{border-radius:var(--radius-pill);padding:6px 10px;background:var(--neutral-100);border:1px solid var(--neutral-200);font-weight:600}`
   - **Header / Nav** (sleek, sticky):
     - `.site-header{position:sticky;top:0;background:rgba(255,255,255,.9);backdrop-filter:saturate(1.2) blur(8px);border-bottom:1px solid var(--neutral-200);z-index:50}`
     - Active link underline, mobile drawer panel with focus trap (styles only).
   - **Hero polish**:
     - Gradient background `.hero--gradient{background:linear-gradient(180deg, var(--color-primary) 0%, #0b2f5a 100%);color:#fff}`
     - Media frame: rounded corners + shadow; ensure `img{object-fit:cover;border-radius:var(--radius-lg);box-shadow:var(--shadow-lg)}`
   - **Services grid**:
     - `.service-card .icon{width:56px;height:56px;border-radius:12px;background:var(--neutral-100);display:grid;place-items:center;border:1px solid var(--neutral-200)}`
     - Titles tighter; proof hooks styled as small caps accent.
   - **Process / How-it-works**:
     - Numbered steps with circular counters `.step-num{width:36px;height:36px;border-radius:50%;background:var(--color-accent);color:#fff;display:grid;place-items:center;font-weight:700}`
   - **NFPA compliance strip**:
     - Subtle tinted surface `.strip{background:linear-gradient(180deg,#F6F8FB 0%, #fff 100%);border:1px dashed var(--neutral-200)}`
   - **Testimonials / Reviews wall**:
     - Review cards with line-clamp; star icons `color:#FDB241` on neutral surface.
     - Modal/lightbox chrome (backdrop + focus ring).
   - **Before/After gallery**:
     - Split frame with draggable handle style (if present) & lightbox overlay with dim backdrop.
   - **Forms (Contact + Multi-step Quote)**:
     - `.field{display:grid;gap:8px}`
     - `.input, .textarea, .select{border:1px solid var(--neutral-300);border-radius:var(--radius-sm);padding:12px 14px;background:#fff;transition:border var(--dur-1) var(--easing), box-shadow var(--dur-1) var(--easing)}`
     - `.input:focus, .textarea:focus, .select:focus{border-color:var(--color-accent);box-shadow:0 0 0 3px rgba(0,160,220,.18)}`
     - Error state `.is-error{border-color:var(--error)} .error-text{color:var(--error);font-size:13px}`
     - Progress bar `.progress{height:6px;background:var(--neutral-200);border-radius:6px} .progress__bar{height:100%;background:var(--color-accent);border-radius:6px;transition:width var(--dur-2) var(--easing)}`
   - **Sticky mobile call bar**:
     - `.sticky-cta{position:fixed;bottom:0;left:0;right:0;display:grid;grid-template-columns:1fr 1fr;gap:10px;padding:10px;background:#fff;border-top:1px solid var(--neutral-200);box-shadow:0 -8px 16px rgba(11,18,32,.06)}`
     - Hidden ≥1024px with media query.
   - **Footer**:
     - High-contrast links; subtle top border; small text.

2) **Class wiring updates** (minimal markup edits):
   - Add `.hero hero--gradient` to the hero section wrapper; apply `.container` inside.
   - Add `.grid cols-2-md cols-4-lg` to the services grid wrapper; each card becomes `.card service-card surface`.
   - Add `.strip surface` to NFPA/compliance and service-area info notes.
   - Ensure all CTAs adopt `.btn` variants: primary/accent/ghost; mobile sticky bar uses `.btn--block`.
   - Apply `.container` to `logos`, `how-it-works`, `social-proof`, `offer`, `faq`, `final-cta`, and `footer` sections.

3) **Micro-interactions** (progressive enhancement; no heavy libs):
   - Links, buttons, and cards get `transform:translateY(-2px)` on hover (reduced-motion respects OS setting).
   - Focus-visible ring standardized on focusable elements.
   - Smooth anchor scroll (`html{scroll-behavior:smooth}`; auto-disabled on reduced motion).

4) **AA Contrast check & guardrails**
   - Ensure text on brand backgrounds uses `#fff`; small text never below 15px.
   - Provide `.sr-only` utility for accessible labels:
     - `.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}`

5) **Component-specific finishes**
   - **Header brand** “Mr. Hood Repair” uses a subtle weight 700 and letter-spacing −0.02em; on hover, underline animates from left (border-image gradient from accent).
   - **Trusted by** badges for “California Pizza Kitchen” & “Marriott Beach Resort”: style as `.badge` with neutral background; consistent height, centered text, and `aria-label` on wrapper.

6) **Performance**
   - Add `img{content-visibility:auto}`; lazy attributes on non-hero images.
   - Reserve image aspect-ratios to prevent CLS (use `aspect-ratio`).
   - Inline critical hero CSS at top (optional) and defer non-critical via standard link preload hints (provide comments).

### What to return
- The **complete `/styles/site.css`** file content.
- A short **diff-style snippet** (or list) of the **class additions** per section (hero, header, services grid, forms, sticky bar) so it’s easy to paste into existing components without structural rewrites.
- A **Test Checklist**:
  - Typography scales correctly across breakpoints.
  - Buttons have hover + focus states and pass AA contrast.
  - Cards lift on hover; no layout shift.
  - Forms show clear focus and error states; keyboard nav works.
  - Sticky mobile bar appears <1024px and hides ≥1024px.
  - Lightbox/modal traps focus; ESC closes.
  - Lighthouse: LCP ≤2.5s, CLS ≤0.1, TBT ≤200ms.

**Return only the `/styles/site.css`, the class-wiring list, and the Test Checklist. No extra commentary.**

**Mike:** draft the next prompt with the goal of replacing the text in the header , "NFPA-Certified Hood Cleaning That Keeps Your Kitchen Safe & Compliant" to "NFPA Certified Hood Repairs, Inspections and Cleaning that keeps Your Kitchen Safe & Compliant".

**GPT:** **Loveable Prompt — “Deterministic Header/Headline Text Replacement”**

> Act as a senior UI engineer. Make a **single copy change** everywhere the current header/hero line appears. Keep all markup, classes, and layout **unchanged** other than text content. Use a deterministic search → replace against the exact string below.

**Find (exact text)**
```
NFPA-Certified Hood Cleaning That Keeps Your Kitchen Safe & Compliant
```

**Replace with (exact text)**
```
NFPA Certified Hood Repairs, Inspections and Cleaning that keeps Your Kitchen Safe & Compliant
```

**Scope of replacement (all of the following, if present):**
1) **Site header tagline** (any header/top-bar component).
2) **Hero H1** (section id `hero` or equivalent).
3) **SEO title/meta defaults** only if they mirror this exact string in page-level constants (do not exceed 60 chars; if longer, keep meta description unchanged and only update on-page copy).
4) **ARIA/alt labels** tied to the same string (e.g., `aria-label`, `aria-describedby`, `aria-labelledby`).

**Do NOT change:**
- IDs, routes, classes, or button labels.
- Typography, spacing, or any other content.

**Accessibility**
- If used in an `aria-label`, update to the new text verbatim.

**Deliverables**
- Return a minimal patch/diff or explicit file snippets showing the replaced line(s) for each affected component (header and hero at minimum).
- End with a **Test Checklist**:
  - Header shows new text on desktop & mobile.
  - Hero H1 shows new text and wraps cleanly at common breakpoints.
  - No unintended replacements elsewhere.
  - Lighthouse still passes LCP/CLS targets.
  - Screen readers announce the new line correctly.

**Mike:** include this as the 2nd part of the prompt.  the goal is to write some content explaining why hood cleaning is a necessity.   According to NFPA 96, your hoods should be inspected (not necessarily cleaned) anywhere from every month to every year, depending on the frequency of use.

For example, a restaurant or manufacturing plant will likely need their hoods inspected every 1-3 months, while a nursing home or church may only have to have their hoods inspected every six months or even just once a year.

But NFPA 96 guidelines aren’t the only factor. You may notice grease buildup on your hood filters and determine they need to be cleaned sooner than expected.

To determine if your hoods have become too greasy, you may use a grease gauge (example pictured, used with permission from IKECA) to determine if your buildup is within the acceptable microns level.

Additionally, depending on your city or county, additional local regulations may require more frequent cleaning than the NFPA 96 mandates.?//

**GPT:** **Loveable Prompt — “Headline Replace + ‘Why Hood Cleaning Matters’ Content Section”**

> Act as a senior UI engineer + copywriter. Perform (A) a deterministic headline replacement, then (B) add a new, concise education section that explains why hood cleaning is necessary. Keep the rest of the page unchanged. Reuse existing tokens/styles. Make output deterministic.

---

## A) Deterministic Headline Replacement (exact match)

**Find (exact string)**
```
NFPA-Certified Hood Cleaning That Keeps Your Kitchen Safe & Compliant
```

**Replace with (exact string)**
```
NFPA Certified Hood Repairs, Inspections and Cleaning that keeps Your Kitchen Safe & Compliant
```

**Scope:**  
- Site header tagline (top bar / header component)  
- Hero H1 (section id `hero`)  
- Any ARIA/alt text that uses that exact string  
- Do **not** alter IDs, classes, spacing, or button labels

**Return a minimal patch/diff** for each file changed.

---

## B) Add Education Section: “Why Hood Cleaning Matters” (content + layout)

**Goal:** Insert a new section **after `nfpa-compliance` and before `social-proof`** with accessible, skimmable content that educates visitors. Use the provided source text (below) as inputs and produce polished site copy (plain language, 6th–8th grade readability, actionable). Include an inline CTA to the Contact/Quote flow.

**Provided source (must be reflected in copy):**
> According to NFPA 96, your hoods should be inspected (not necessarily cleaned) anywhere from every month to every year, depending on the frequency of use.  
> For example, a restaurant or manufacturing plant will likely need their hoods inspected every 1–3 months, while a nursing home or church may only have to have their hoods inspected every six months or even just once a year.  
> But NFPA 96 guidelines aren’t the only factor. You may notice grease buildup on your hood filters and determine they need to be cleaned sooner than expected.  
> To determine if your hoods have become too greasy, you may use a grease gauge (example pictured, used with permission from IKECA) to determine if your buildup is within the acceptable microns level.  
> Additionally, depending on your city or county, additional local regulations may require more frequent cleaning than the NFPA 96 mandates.

**Section spec (return concrete markup/data):**
- **id:** `why-cleaning-necessity`
- **Header:** H2 ≤ 7 words (e.g., “Why Hood Cleaning Matters”)
- **Subhead:** ≤ 24 words (plain language benefit)
- **Content layout:** two-column on desktop; stack on mobile  
  - **Left column:** short narrative (≈ 110–140 words) converting the source text into clear guidance:
    - Clarify: *inspection cadence* vs *cleaning need*  
    - Examples: high-use (1–3 months) vs low-use (6–12 months)  
    - Explain grease gauge in simple terms; no brand claims; mention “acceptable microns level” plainly  
    - Note local rules may be stricter than NFPA 96
    - Include one-line disclaimer: “Informational only—always follow your local Authority Having Jurisdiction (AHJ).”
  - **Right column:** “Quick Guide” card with:
    - Title: “Typical Inspection Cadence”
    - Bullets (≤ 8 words each):
      - High-use: every **1–3 months**
      - Moderate: every **3–6 months**
      - Low-use: every **6–12 months**
    - Mini check row: “Clean sooner if filters show visible grease.”
    - Small footnote line: “Cadence varies by volume, fuel, and equipment.”
- **Grease gauge callout (small aside):**
  - Title: “Grease Gauge”
  - One sentence (≤ 22 words) explaining it measures film thickness (microns) to decide if cleaning is due.
  - Placeholder image slot: `grease-gauge.jpg` with `alt="Hand measuring grease film with a gauge (example)"`  
  - Note below image: “Illustrative example.”
- **Inline CTA:** button **“Request a Free Inspection”** → `/contact?src=why-cleaning` (primary style)
- **A11y:** proper headings, list semantics, focusable CTA; alt text present
- **Schema.org:** append a concise `FAQPage` fragment with 2 Q&As derived from this section:
  - “How often should hoods be inspected?” (answer reflects ranges and AHJ note)
  - “Do I need cleaning if inspection passes?” (answer mentions visible grease / gauge)

**Performance & polish:**
- No layout shift; reserve image aspect-ratio
- Keep word counts within caps; AA contrast
- Mobile spacing uses existing spacing tokens

**Deliverables**
1) **Patch/diff** showing the headline replacements (header + hero + any ARIA).  
2) **Complete markup** (or JSON spec if project uses section JSON) for `why-cleaning-necessity` with classes that match existing design system (container, grid, card, btn).  
3) **Minified JSON-LD** snippet for the 2 QA items to merge into existing schema.  
4) **Test Checklist** (end of output):
   - New headline appears in header & hero; wraps cleanly
   - Section renders between compliance and social-proof
   - CTA routes to `/contact?src=why-cleaning`
   - Image has alt + fixed aspect; no CLS
   - Schema validates; a11y headings are sequential (H2 under page H1)

**Mike:** write a prompt that will generate your last reply.

**GPT:** **Loveable Prompt — “Headline Replace + ‘Why Hood Cleaning Matters’ Content Section”**

> Act as a senior UI engineer + copywriter. Perform (A) a deterministic headline replacement, then (B) insert a new education section explaining why hood cleaning is necessary. Keep the rest of the page unchanged. Reuse existing tokens/styles. Make all outputs deterministic.

---

## A) Deterministic Headline Replacement (exact match)

**Find (exact string)**
```
NFPA-Certified Hood Cleaning That Keeps Your Kitchen Safe & Compliant
```

**Replace with (exact string)**
```
NFPA Certified Hood Repairs, Inspections and Cleaning that keeps Your Kitchen Safe & Compliant
```

**Scope:**  
- Site header tagline (top bar / header component)  
- Hero H1 (section id `hero`)  
- Any ARIA/alt text that uses that exact string  

**Do NOT change:** IDs, classes, spacing, or button labels.

**Return:** minimal patch/diff for each file changed.

---

## B) Add Education Section: “Why Hood Cleaning Matters” (content + layout)

**Insert position:** after `nfpa-compliance` and before `social-proof`.

**Source facts to reflect in copy (rewrite for clarity):**
- NFPA 96: hoods should be **inspected** anywhere from monthly to yearly depending on use.  
- High-use (restaurants/manufacturing): **every 1–3 months**.  
- Lower-use (nursing homes/churches): **every 6–12 months**.  
- Visible grease buildup may require **cleaning sooner** than the inspection cadence.  
- A **grease gauge** measures film thickness (microns) to judge when cleaning is due.  
- Local city/county rules may be **stricter** than NFPA 96; follow your AHJ.

**Section spec (produce concrete markup or the project’s section-JSON):**
- **id:** `why-cleaning-necessity`
- **Header (H2 ≤ 7 words):** “Why Hood Cleaning Matters”
- **Subhead (≤ 24 words):** plain-language benefit statement.
- **Two-column layout (stack on mobile):**
  - **Left column (≈110–140 words):**  
    - Explain inspection cadence vs cleaning need; give high/low-use examples.  
    - Mention grease gauge (microns) in simple terms.  
    - Note local regulations may exceed NFPA 96.  
    - Add disclaimer line: “Informational only—always follow your local Authority Having Jurisdiction (AHJ).”
  - **Right column — “Quick Guide” card:**  
    - Title: “Typical Inspection Cadence”  
    - Bullets (≤ 8 words each):
      - High-use: every **1–3 months**
      - Moderate: every **3–6 months**
      - Low-use: every **6–12 months**
    - Mini check row: “Clean sooner if filters show visible grease.”
    - Footnote: “Cadence varies by volume, fuel, and equipment.”
- **Grease gauge callout (aside):**
  - Title: “Grease Gauge”
  - One sentence (≤ 22 words) describing it measures film thickness (microns) to decide if cleaning is due.
  - Placeholder image: `grease-gauge.jpg` with  
    `alt="Hand measuring grease film with a gauge (example)"` and a note “Illustrative example.”
- **Inline CTA:** primary button **“Request a Free Inspection”** → `/contact?src=why-cleaning`
- **A11y:** proper heading order, list semantics, focusable CTA, descriptive alt text.
- **Performance:** reserve image aspect ratio; AA contrast; mobile spacing uses existing tokens.

**Schema.org (append to existing JSON-LD, minified):**
- Add an `FAQPage` fragment with two Q&As:
  1) “How often should hoods be inspected?” (answer includes 1–3, 3–6, 6–12 months and AHJ note)
  2) “Do I need cleaning if inspection passes?” (answer mentions visible grease/gauge and local rules)

---

## Deliverables
1) **Patch/diff** for the headline replacement (header + hero + any ARIA).  
2) **Complete markup/section-JSON** for `why-cleaning-necessity`, using existing classes/tokens (container, grid, card, btn).  
3) **Minified JSON-LD** snippet for the 2 FAQ items, ready to merge.  
4) **Test Checklist**:
   - New headline renders in header & hero; wraps cleanly.
   - Education section appears between compliance and social-proof.
   - CTA routes to `/contact?src=why-cleaning`.
   - Image has alt + fixed aspect; no CLS.
   - Schema validates; heading levels are sequential.

**Mike:** write the prompt in paragraphs so I can copy and paste it into Loveable.

**GPT:** Act as a senior UI engineer and copywriter. Perform two tasks with deterministic outputs while keeping the rest of the page unchanged and reusing the site’s existing design tokens and classes. First, execute a global, exact-match headline replacement: find the exact string “NFPA-Certified Hood Cleaning That Keeps Your Kitchen Safe & Compliant” and replace it with the exact string “NFPA Certified Hood Repairs, Inspections and Cleaning that keeps Your Kitchen Safe & Compliant”. Apply this change everywhere that exact string appears, including the site header tagline, the hero H1 (section id “hero”), and any ARIA/alt text that references the same string. Do not alter IDs, classes, spacing, or button labels. Return a minimal patch or diff for each file changed.

Next, insert a new education section immediately after the “nfpa-compliance” section and before “social-proof”. The section id must be “why-cleaning-necessity”. Write skimmable, plain-language copy that explains why hood cleaning is necessary, based strictly on these source facts (rewrite for clarity and brevity): According to NFPA 96, hoods should be inspected—not necessarily cleaned—anywhere from monthly to yearly depending on use. High-use environments such as restaurants or manufacturing plants typically require inspections every 1–3 months, while lower-use environments such as nursing homes or churches may require inspections every 6–12 months. Visible grease buildup can trigger cleaning sooner than the inspection cadence. A grease gauge measures film thickness in microns to help decide if cleaning is due. Local city or county rules may be stricter than NFPA 96; always follow your Authority Having Jurisdiction (AHJ).

Structure the section as a two-column layout on desktop that stacks on mobile. Use an H2 heading no longer than 7 words (e.g., “Why Hood Cleaning Matters”) and a subhead no longer than 24 words that states the benefit in plain language. In the left column, write approximately 110–140 words that clearly distinguish inspection cadence from cleaning need, give the high/low-use examples, explain in simple terms that a grease gauge checks microns to determine when cleaning is due, and note that local regulations may exceed NFPA 96. End this column with a single-line disclaimer: “Informational only—always follow your local Authority Having Jurisdiction (AHJ).”

In the right column, include a “Quick Guide” card titled “Typical Inspection Cadence” that lists three bullets with short labels: “High-use: every 1–3 months”, “Moderate: every 3–6 months”, and “Low-use: every 6–12 months”. Beneath the bullets, add a one-line check note that reads “Clean sooner if filters show visible grease.” Add a small footnote line that reads “Cadence varies by volume, fuel, and equipment.”

Add a small aside within the section for a grease gauge callout. Title it “Grease Gauge” and write one sentence (no more than 22 words) explaining that it measures grease film thickness (microns) to decide if cleaning is due. Include a placeholder image named “grease-gauge.jpg” with the alt text “Hand measuring grease film with a gauge (example)” and a small note beneath the image that reads “Illustrative example.” Ensure image dimensions are reserved to prevent layout shift.

Include an inline primary CTA button labeled “Request a Free Inspection” that links to “/contact?src=why-cleaning”. Ensure proper heading order, list semantics, descriptive alt text, visible focus, AA contrast, and reserved image aspect ratios. Keep all classes consistent with the project’s existing container, grid, card, and button styles.

Append to the site’s existing JSON-LD a minified FAQPage fragment with exactly two Q&A items derived from this section. The first question is “How often should hoods be inspected?” The answer must include the monthly-to-yearly concept with the specific ranges 1–3, 3–6, and 6–12 months and note that local AHJ rules may override. The second question is “Do I need cleaning if inspection passes?” The answer must state that visible grease or a grease-gauge reading can indicate cleaning is due sooner and that local rules may require more frequent cleaning. Return the minimal patch/diff for the headline replacement, the complete markup (or section-JSON) for “why-cleaning-necessity”, and the minified JSON-LD fragment. End with a short test checklist confirming the new headline renders correctly in header and hero, the education section appears between compliance and social-proof, the CTA routes to “/contact?src=why-cleaning”, the image has alt text and no CLS, schema validates, and heading levels are sequential.

**Mike:** "loveable only changed "NFPA-Certified Hood Cleaning That Keeps Your Kitchen Safe & Compliant".  it did not write the content about "nfpa-compliance".    draft an effective prompt that will instruct loveable to accomplish this.

**GPT:** Act as a senior UI engineer + copywriter. The headline replacement is already complete. Now **insert a new education section** that explains why hood cleaning is necessary. Make the output deterministic, keep all other content unchanged, and **guarantee** the section is created even if a similarly named section already exists.

Create (or update) a section with **id: `why-cleaning-necessity`** and **place it immediately after the section with id `nfpa-compliance` and before `social-proof`**. If `nfpa-compliance` is missing, **create `why-cleaning-necessity` directly before `social-proof`** and report that fallback in the Test Checklist. Use the site’s existing container/grid/card/button classes and tokens. Maintain AA contrast, proper heading order, list semantics, and visible focus states. Reserve image dimensions to prevent CLS.

Write clear, skimmable copy based on these facts (rewrite for clarity; do not invent new claims):  
• NFPA 96: hoods should be **inspected** anywhere from monthly to yearly, depending on use (inspection ≠ cleaning).  
• High-use (e.g., restaurants/manufacturing): inspect **every 1–3 months**.  
• Lower-use (e.g., nursing homes/churches): inspect **every 6–12 months**.  
• Visible grease buildup can require **cleaning sooner** than the inspection cadence.  
• A **grease gauge** measures film thickness (microns) to help decide if cleaning is due.  
• Local city/county rules may be **stricter** than NFPA 96; follow your **Authority Having Jurisdiction (AHJ)**.

Section specification (return concrete markup or section-JSON):
• H2 (≤ 7 words): “Why Hood Cleaning Matters”.  
• Subhead (≤ 24 words): plain-language benefit statement about safety/compliance and avoiding downtime.  
• Two-column layout on desktop, stacked on mobile.  
  – **Left column (~110–140 words):** Explain inspection cadence vs cleaning need, include high-use/low-use examples, mention grease gauge (microns) plainly, and note local rules may exceed NFPA 96. End with this disclaimer line: **“Informational only—always follow your local Authority Having Jurisdiction (AHJ).”**  
  – **Right column — Quick Guide card:** Title “Typical Inspection Cadence” + three bullets (≤ 8 words each):  
    • High-use: every **1–3 months**  
    • Moderate: every **3–6 months**  
    • Low-use: every **6–12 months**  
    Add a one-line check note: **“Clean sooner if filters show visible grease.”**  
    Add a small footnote: **“Cadence varies by volume, fuel, and equipment.”**
• **Grease Gauge callout (aside):** Title “Grease Gauge”; one sentence (≤ 22 words) explaining it measures grease film thickness (microns) to decide if cleaning is due. Include a placeholder image `grease-gauge.jpg` with `alt="Hand measuring grease film with a gauge (example)"` and the small note “Illustrative example.”  
• **Inline primary CTA:** Button **“Request a Free Inspection”** linking to `/contact?src=why-cleaning`.

Append to the site’s existing JSON-LD a **minified `FAQPage` fragment** with exactly two Q&As derived from this section:  
1) **How often should hoods be inspected?** Answer must include the 1–3 / 3–6 / 6–12-month ranges and state that AHJ rules may override.  
2) **Do I need cleaning if inspection passes?** Answer must state that visible grease or a grease-gauge reading can indicate cleaning is due sooner and that local rules may require more frequent cleaning.

**Return only** (1) the new section’s markup/JSON (including classes/hooks), (2) the minified JSON-LD fragment to merge, and (3) a short **Test Checklist** confirming: the section appears between `nfpa-compliance` and `social-proof` (or fallback noted), heading order is correct, CTA routes to `/contact?src=why-cleaning`, the image has alt text and reserves aspect ratio (no CLS), and schema validates.

**Mike:** write an effective prompt that makes a small revision to the company name from ,"Mr. Expert Repairs" to "Mr. Expert Repair". change the color of the text to red.

**GPT:** Act as a senior UI engineer. Make a **single deterministic copy change** everywhere the exact company name string appears: find **“Mr. Expert Repairs”** and replace it with **“Mr. Expert Repair”**. Apply this global exact-match replacement across (1) the header brand lockup, (2) any footer/site-wide brand mentions, (3) hero/metadata constants where the same exact string appears, (4) ARIA/alt attributes that reference the same exact string, and (5) JSON-LD (`Organization`/`LocalBusiness`) name fields. Do **not** alter any other text, classes, spacing, layout, routes, or images. Return a minimal patch/diff for each file changed.

Then update the **visual style of the brand name text in the header only** to red, without affecting other links or headings. Add (or reuse) a specific class on the header brand text (e.g., `.brand-name`) and style it to a red that passes contrast on the existing header background. Use: `color: #D50000;` and ensure hover/focus states keep the same red or a slightly darker red `#B00000`. Do not change button styles, site links, or global color tokens—only the brand text. If the brand in the header is a link, preserve underline/focus styles; add `:focus-visible { outline: 2px solid #D50000; outline-offset: 2px; }`. Return the minimal CSS addition (e.g., in `/styles/site.css`) and the small markup change where the `.brand-name` class is applied.

Keep all outputs deterministic. Do not rename IDs or components. Verify that the update **does not** recolor logo images (SVG/PNG). If the brand is rendered as an SVG wordmark, apply the red color via `currentColor` or a scoped fill only if the SVG uses `currentColor`; otherwise, leave the SVG unchanged and color only the adjacent text node. Finally, return a **Test Checklist** confirming: (1) “Mr. Expert Repair” renders in header, footer, hero, ARIA/alt, and JSON-LD, (2) header brand text is red on desktop and mobile, with consistent hover/focus, (3) no other text changed color, (4) schema now uses “Mr. Expert Repair,” and (5) Lighthouse/contrast checks still pass.

**Mike:** write a prompt for Lovable optimized to create a photos menu in the header. link it to a page that displays the uploaded photos.

**GPT:** Here’s a **paste-ready Loveable prompt** to add a **Photos** menu item in the header and a full **/photos** gallery page (with filters, lightbox, and video support). It’s deterministic and uses your uploaded filenames.

---

Act as a senior UI engineer. Make two changes: (1) add a **Photos** nav item to the site header that routes to a new page at **/photos**, and (2) create the **/photos** page that displays an accessible, fast gallery of our work. Keep all existing styles/tokens; only add classes where needed.

**Header update (site-wide)**
- Insert a nav link labeled **Photos** between “Services” and “How it works”.
- Link target: **/photos**. Add `aria-label="View project photos"` and set active state when on that route.
- Do not alter other links or layout.

**New route: `/photos` (Gallery)**
- Page hero: H1 “Project Photos” and short subcopy “Before/after results, rooftop fan service, inspections.”
- Grid gallery with **filter tabs**: All, **Before/After**, **Ducts**, **Roof Fans**, **On-Site Work**, **Food Truck**, **Inspection**.
- Each tile: reserved aspect ratio (4:3 on desktop, 1:1 on mobile), lazy-loaded `<img>` with meaningful `alt`, caption below, and click opens a **lightbox**.
- **Lightbox**: keyboard/touch navigation, ESC to close, focus trap, captions, and left/right arrows.
- Support **video** tiles for `.mp4` with native controls inside the lightbox.

**Assets (treat these as living at `/public/gallery` and `/public/videos`; create folders if missing)**
- `/public/gallery/20241024_015404_duct_after.jpg` (tags: Before/After, Ducts)  
  alt: “Duct interior after cleaning — bare-metal finish”
- `/public/gallery/20241023_232851_duct_before.jpg` (Before/After, Ducts)  
  alt: “Duct interior before cleaning — heavy grease”
- `/public/gallery/20241019_130454_roof_crew.jpg` (Roof Fans, On-Site Work)  
  alt: “Crew servicing rooftop exhaust fans”
- `/public/gallery/20240604_084917_spray_clean_1.jpg` (Roof Fans)  
  alt: “Pressure washing rooftop exhaust fan housing”
- `/public/gallery/20240604_084917_spray_clean_2.jpg` (Roof Fans)  
  alt: “Rooftop exhaust fan cleaning in progress”
- `/public/gallery/20240305_180649_roof_fan_service.jpg` (Roof Fans, On-Site Work)  
  alt: “Technicians reassembling roof exhaust fan”
- `/public/gallery/20240208_155316_food_truck.jpg` (Food Truck, On-Site Work)  
  alt: “Cleaning exhaust system on food truck roof”
- `/public/gallery/20231028_225716_kitchen_inspection.jpg` (Inspection)  
  alt: “Tech inspecting hood canopy with work light”
- (Optional video) `/public/videos/20241016_014552.mp4` (Roof Fans)  
  title: “High-pressure wash sequence”
- (Optional video) `/public/videos/20241016_221551.mp4` (On-Site Work)  
  title: “Rooftop service timelapse”

**Data source**
- Build a small `gallery-data.ts` that exports an array:
  ```ts
  export type MediaItem = {
    id:string; src:string; kind:'image'|'video'; caption:string; alt?:string; tags:string[];
    thumb?:string; // if you generate thumbs later
  };
  export const GALLERY: MediaItem[] = [ /* populate with the items above */ ];
  ```
- The page filters by tag; default “All”. Keep URL hash in sync (e.g., `/photos#Roof%20Fans`).

**Performance**
- Use `loading="lazy"` on all thumbnails, `decoding="async"`, and `content-visibility:auto`.
- Reserve space via `aspect-ratio` to avoid CLS.
- Only mount the lightbox when first opened.

**Accessibility**
- Buttons/tiles are keyboard focusable with visible focus.
- Lightbox has `role="dialog"`, `aria-modal="true"`, returns focus on close.
- Provide alt text (above) and concise captions.

**Tracking**
- Fire `photos_view` on page load, `photos_filter` with `{tag}`, and `photos_open` with `{id, kind}` when a tile opens.

**SEO / Schema**
- Title: “Photos | Hood Cleaning & Repairs”
- Meta description: “Before/after results, duct and rooftop fan service, inspections.”
- Append minified JSON-LD `ImageGallery` style data listing the image items’ `contentUrl`, `caption`, and `about` tags.
- Update `sitemap.xml` to include `/photos`.

**Deliverables**
1) Updated header component/navigation showing the **Photos** link.  
2) New `/photos` route: markup (or React component), `gallery-data.ts`, minimal CSS classes to match existing tokens, and the lightbox module.  
3) JSON-LD block and sitemap update.  
4) **Test Checklist**: Photos link navigates to `/photos`; filters switch content and update hash; images lazy-load with no layout shift; lightbox opens/closes via mouse, keyboard, and touch; videos play; analytics events fire; schema validates.

**Mike:** revise the prompt to upload these 4 images only.

**GPT:** Here’s a **paste-ready Loveable prompt** revised to add a **Photos** menu and a **/photos** gallery page that uses **only these 4 images**.

---

Act as a senior UI engineer. Make two changes: (1) add a **Photos** nav item to the site header that routes to a new page at **/photos**, and (2) create the **/photos** page that displays an accessible, fast gallery of our work. Keep all existing styles/tokens; only add classes where needed. Use **only the four images listed below**—do not reference any other media.

**Header update (site-wide)**  
• Insert a nav link labeled **Photos** between “Services” and “How it works”.  
• Link target: **/photos** with `aria-label="View project photos"`.  
• Show active state when on `/photos`. Do not alter other links/layout.

**New route: `/photos` (Gallery)**  
• Page hero: H1 “Project Photos” and short subcopy “Before/after results and rooftop fan service.”  
• Grid gallery with simple filter tabs: **All**, **Before/After**, **Ducts**, **Roof Fans**.  
• Each tile uses reserved aspect ratio (4:3 desktop, 1:1 mobile), lazy-loaded `<img>` with meaningful `alt`. Click opens a **lightbox** (keyboard/touch navigation, ESC close, focus trap, captions).

**Assets (use exactly these 4 images; place/copy into `/public/gallery/` and reference the new filenames below)**  
1) `/public/gallery/20241023_232851_duct_before.jpg` — tags: `["Before/After","Ducts"]`  
   alt: **“Duct interior before cleaning — heavy grease buildup”**  
2) `/public/gallery/20241024_015404_duct_after.jpg` — tags: `["Before/After","Ducts"]`  
   alt: **“Duct interior after cleaning — bare-metal finish”**  
3) `/public/gallery/20241019_130454_roof_crew.jpg` — tags: `["Roof Fans"]`  
   alt: **“Crew servicing rooftop exhaust fan assembly”**  
4) `/public/gallery/20240604_084917_rooffan_spray.jpg` — tags: `["Roof Fans"]`  
   alt: **“Pressure washing rooftop exhaust fan housing”**

**Data source**  
Create `gallery-data.ts` that exports:
```ts
export type MediaItem = {
  id: string;
  src: string;
  kind: 'image';
  caption: string;
  alt: string;
  tags: string[];
};
export const GALLERY: MediaItem[] = [
  { id: 'duct_before', src: '/public/gallery/20241023_232851_duct_before.jpg', kind: 'image', caption: 'Duct — before cleaning', alt: 'Duct interior before cleaning — heavy grease buildup', tags: ['Before/After','Ducts'] },
  { id: 'duct_after',  src: '/public/gallery/20241024_015404_duct_after.jpg',  kind: 'image', caption: 'Duct — after cleaning',  alt: 'Duct interior after cleaning — bare-metal finish', tags: ['Before/After','Ducts'] },
  { id: 'roof_crew',   src: '/public/gallery/20241019_130454_roof_crew.jpg',   kind: 'image', caption: 'Rooftop fan service',     alt: 'Crew servicing rooftop exhaust fan assembly', tags: ['Roof Fans'] },
  { id: 'roof_spray',  src: '/public/gallery/20240604_084917_rooffan_spray.jpg',kind: 'image', caption: 'Rooftop fan cleaning',    alt: 'Pressure washing rooftop exhaust fan housing', tags: ['Roof Fans'] }
];
```

**Gallery behavior**  
• Default filter: **All**; filter buttons reduce items by tag.  
• Update URL hash to reflect filter (e.g., `/photos#Ducts`).  
• Lightbox mounts on first open; supports left/right arrows and swipe.

**Performance**  
• Use `loading="lazy"`, `decoding="async"`, and `content-visibility:auto`.  
• Prevent CLS with `aspect-ratio` on tiles.  
• Only import lightbox code when needed.

**Accessibility**  
• Tiles are keyboard focusable with visible focus rings.  
• Lightbox: `role="dialog"`, `aria-modal="true"`, returns focus on close.  
• All images use the provided `alt` text; captions shown below tiles and in the lightbox.

**SEO / Schema**  
• Title: “Photos | Hood Cleaning & Repairs”.  
• Meta description: “Before/after results and rooftop exhaust fan service.”  
• Append a minified JSON-LD block describing an `ImageGallery` with these four images (`contentUrl`, `caption`, `about` tags).  
• Add `/photos` to `sitemap.xml`.

**Tracking**  
• Fire `photos_view` on page load, `photos_filter` with `{tag}`, and `photos_open` with `{id}` when a tile opens.

**Deliverables**  
1) Updated header/navigation with the **Photos** link.  
2) New `/photos` route (component/markup + minimal CSS), `gallery-data.ts`, and lightbox module.  
3) JSON-LD block and sitemap update.  
4) **Test Checklist**: Photos link navigates to `/photos`; filters switch content and update hash; images lazy-load with no layout shift; lightbox opens/closes via mouse/keyboard/touch; analytics events fire; schema validates.

**Mike:** write an optimized prompt that will add these 3 images to the "photos" nav item.

**GPT:** Here’s a paste-ready **Loveable prompt** to add those 3 images to the **Photos** gallery (under the existing **/photos** route and **Photos** nav). It’s deterministic and won’t touch other items.

---

Act as a senior UI engineer. **Append three new items to the /photos gallery only** (do not remove or modify existing items). Keep styles, filters, and lightbox behavior unchanged.

**Files to add (use these exact new paths; copy the uploaded images into `/public/gallery/` and rename):**  
1) `/public/gallery/20240305_180649_roof_fan_service.jpg`  
2) `/public/gallery/20240208_155316_food_truck_roof.jpg`  
3) `/public/gallery/20231028_225716_kitchen_inspection.jpg`

**Gallery data update**  
Open the gallery data source (e.g., `gallery-data.ts`) and append the following objects to the exported array:

```ts
{ id:'roof_fan_service_20240305',
  src:'/public/gallery/20240305_180649_roof_fan_service.jpg',
  kind:'image',
  caption:'Rooftop exhaust fan service',
  alt:'Two technicians servicing a rooftop exhaust fan assembly',
  tags:['Roof Fans','On-Site Work']
},
{ id:'food_truck_roof_20240208',
  src:'/public/gallery/20240208_155316_food_truck_roof.jpg',
  kind:'image',
  caption:'Food truck exhaust cleaning',
  alt:'Techs cleaning the exhaust system on a red food truck roof',
  tags:['Food Truck','On-Site Work']
},
{ id:'kitchen_inspection_20231028',
  src:'/public/gallery/20231028_225716_kitchen_inspection.jpg',
  kind:'image',
  caption:'Hood canopy inspection',
  alt:'Technician inspecting stainless hood canopy with a work light in kitchen',
  tags:['Inspection']
}
```

**Filters & UX**  
- Ensure existing filter tabs **All**, **Before/After**, **Ducts**, **Roof Fans**, **On-Site Work**, **Food Truck**, **Inspection** remain.  
- These three items must appear under **All** and their tagged filters.  
- Lightbox must open with caption and support keyboard/touch; ESC closes; focus returns to the originating tile.

**Accessibility & Performance**  
- Thumbnails: `loading="lazy"`, `decoding="async"`, reserved `aspect-ratio` to avoid CLS.  
- Keep visible focus rings. Use the provided `alt` text exactly.

**SEO / Schema**  
- Extend the existing JSON-LD `ImageGallery` to include these 3 images with `contentUrl`, `caption`, and `about` (use the `tags` array for `about`). Minify the JSON-LD.

**Tracking**  
- No changes required; existing `photos_view`, `photos_filter`, and `photos_open` events should fire for these items.

**Return only**  
1) The updated `gallery-data.ts` diff (showing the appended objects).  
2) The minified JSON-LD additions for the three images.  
3) A brief **Test Checklist**: items visible in **All** and correct filters; lightbox opens/closes with keyboard/touch; captions/alt correct; no layout shift on load; schema validates.

**Mike:** draft an expert , senior level prompt optimized for setting the background of the lovable website to match the design style of the uploaded image of the Atari game , "pac man".

**GPT:** Here’s a **paste-ready Loveable prompt** that will restyle your site background to a sleek, modern theme inspired by the classic Atari **Pac-Man** screen—using deterministic CSS (no external assets), with accessibility, performance, and easy on/off controls.

---

Act as a senior UI engineer. Add a **site-wide “Pac-Man Atari” background theme** that can be toggled on/off without changing page content. Keep markup changes minimal and deterministic. Reuse existing tokens; add only the classes and CSS below.

**1) Theme toggle & scope**  
- Add a body class **`theme-pacman`**. When present, the background styling is active site-wide; when absent, the site uses the default theme.  
- Do not alter existing content styles (cards, forms, headings). Only change the *page background* and safe accent details.  
- Add a helper data attribute to any component that needs a plain background: `data-plain-surface` (forces neutral background under that element).

**2) Design goals (match uploaded Atari Pac-Man screenshot)**  
- Base: deep black canvas.  
- Maze lines: neon **maze-blue** (#1e66ff) thin strokes with a faint glow.  
- Dots: small **pellet yellow** (#ffd60a) evenly spaced; slightly brighter “power pellets”.  
- Accent ghosts/fruit are *not* drawn—keep it abstract/minimal.  
- Overall feel: retro arcade, subtle animated glow, non-distracting behind content.

**3) CSS tokens (extend your variables; safe to paste)**  
```css
:root{
  --pm-bg:#000000;
  --pm-maze:#1e66ff;     /* neon maze blue */
  --pm-maze-glow:rgba(30,102,255,.35);
  --pm-dot:#ffd60a;      /* pellet yellow */
  --pm-dot-glow:rgba(255,214,10,.28);
  --pm-power:#ff7b7b;    /* soft pink for power pellet */
  --pm-power-glow:rgba(255,123,123,.36);
  --pm-grid:28px;        /* pellet grid spacing */
}
```

**4) Background implementation (pure CSS, no assets)**  
- Apply on `body.theme-pacman`.  
- Layer 1: solid black fill.  
- Layer 2: **pellet grid** using multiple radial-gradient backgrounds (fast, GPU friendly).  
- Layer 3: **maze stroke overlay** using a lightweight inline SVG as a data-URI (scales, repeats).  
- Subtle breathing animation on glow at **reduced motion aware**.

```css
/* Respect user preference */
@media (prefers-reduced-motion:reduce){
  .theme-pacman * { animation:none !important; transition:none !important; }
}

/* Page background layers */
body.theme-pacman{
  background-color:var(--pm-bg);
  background-image:
    /* pellet grid (small dots) */
    radial-gradient(circle 2px at 50% 50%, var(--pm-dot) 0 60%, transparent 61%),
    /* pellet glow */
    radial-gradient(circle 3px at 50% 50%, var(--pm-dot-glow) 0 50%, transparent 51%),
    /* power pellet grid (every 8th cell) */
    radial-gradient(circle 4px at 50% 50%, var(--pm-power) 0 60%, transparent 61%),
    radial-gradient(circle 7px at 50% 50%, var(--pm-power-glow) 0 45%, transparent 46%),
    /* maze lines (SVG data URI, thin neon strokes with glow) */
    url("data:image/svg+xml;utf8,\
      <svg xmlns='http://www.w3.org/2000/svg' width='224' height='224' viewBox='0 0 224 224'>\
        <defs>\
          <filter id='g' color-interpolation-filters='sRGB'>\
            <feGaussianBlur stdDeviation='1.6'/>\
          </filter>\
        </defs>\
        <g stroke='%231e66ff' stroke-width='2' fill='none'>\
          <rect x='8' y='8' width='208' height='208' rx='22'/>\
          <path d='M8,56 H216 M8,112 H216 M8,168 H216 M56,8 V216 M112,8 V216 M168,8 V216'/>\
        </g>\
        <g stroke='%231e66ff' stroke-width='2' filter='url(%23g)' opacity='.35'>\
          <rect x='8' y='8' width='208' height='208' rx='22'/>\
          <path d='M8,56 H216 M8,112 H216 M8,168 H216 M56,8 V216 M112,8 V216 M168,8 V216'/>\
        </g>\
      </svg>");
  background-size:
    var(--pm-grid) var(--pm-grid),  /* pellet */
    var(--pm-grid) var(--pm-grid),  /* pellet glow */
    calc(var(--pm-grid)*8) calc(var(--pm-grid)*8), /* power pellet */
    calc(var(--pm-grid)*8) calc(var(--pm-grid)*8), /* power glow */
    640px 640px; /* maze tile */
  background-position:
    0 0, 0 0, 0 0, 0 0, center center;
  background-repeat:
    repeat, repeat, repeat, repeat, repeat;
  animation: pmGlow 6s ease-in-out infinite;
}

@keyframes pmGlow{
  0%,100%{ filter: drop-shadow(0 0 0 var(--pm-maze-glow)); }
  50%   { filter: drop-shadow(0 0 6px var(--pm-maze-glow)); }
}

/* Ensure content stays readable above the busy bg */
[data-plain-surface], .surface, .card, header, footer, .site-header, .modal, .faq, .hero{
  background: var(--neutral-50, #ffffff);
  border-color: color-mix(in oklab, var(--pm-maze) 12%, #dfe3eb);
}

/* Optional: thin neon divider accents */
.theme-pacman .section-divider{
  border-top:2px solid var(--pm-maze);
  box-shadow:0 0 8px var(--pm-maze-glow);
}

/* Focus ring harmonized with theme, preserves AA */
.theme-pacman :focus-visible{
  outline:2px solid var(--pm-dot);
  outline-offset:2px;
}
```

**5) Minimal markup wiring**  
- Add `class="theme-pacman"` to `<body>` to enable.  
- Add `data-plain-surface` to any areas that must remain solid (forms, long text blocks).

**6) Performance & accessibility**  
- The background uses GPU-accelerated gradients; the SVG tile is 224×224 and repeats to avoid large images.  
- Respect `prefers-reduced-motion`.  
- Keep text contrast AA+ on all cards and content surfaces (we keep content on neutral backgrounds).

**7) Deliverables**  
- One CSS file (or module) appended to your global styles.  
- Zero JS required; no external assets.  
- A short Test Checklist at the end of your reply confirming:  
  1) Toggling `theme-pacman` on `<body>` enables/disables the theme.  
  2) No layout shift; CLS ≤ 0.1.  
  3) Forms and long copy remain on neutral surfaces (`data-plain-surface`).  
  4) Focus rings visible; reduced-motion disables animation.  
  5) Background tiles scale cleanly from 360px → 1920px+.

Return only the CSS you added, any tiny markup snippets (body class + example `data-plain-surface`), and the Test Checklist.

**Mike:** I do not see the pac-man theme visible.   in your reply you advise to "enable theme" , <body class="theme-pacman"> .   how do I do this ?>

**GPT:** Got you. You have three easy ways to turn the theme on—pick the one that fits how your Lovable app is set up.

---

# A) Hard-enable it (fastest)
**Edit `index.html`** (or the HTML shell Lovable shows at the project root):

```html
<!doctype html>
<html lang="en">
  <head>…</head>
  <body class="theme-pacman">
    <div id="root"></div>
    <!-- scripts -->
  </body>
</html>
```

Save → hard refresh (Ctrl/Cmd+Shift+R).  
If you see the arcade dots/maze glow behind your sections, it’s on.

---

# B) Enable from React (if you don’t edit the HTML shell)
**In `App.tsx` (or `RootLayout.tsx`)** add this once:

```tsx
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    document.body.classList.add("theme-pacman");
    return () => document.body.classList.remove("theme-pacman");
  }, []);

  return (
    /* your app */
  );
}
```

Deploy/preview → hard refresh.

---

# C) Add a quick toggle (handy for turning it on/off)
Create `ThemeToggle.tsx`:

```tsx
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [on, setOn] = useState(
    () => localStorage.getItem("pmTheme") === "on"
  );

  useEffect(() => {
    document.body.classList.toggle("theme-pacman", on);
    localStorage.setItem("pmTheme", on ? "on" : "off");
  }, [on]);

  return (
    <button
      className="btn btn--ghost"
      onClick={() => setOn(v => !v)}
      aria-pressed={on}
    >
      {on ? "Disable Pac-Man Theme" : "Enable Pac-Man Theme"}
    </button>
  );
}
```

Drop `<ThemeToggle />` into your header/footer. (It remembers the choice.)

---

## If it still doesn’t show
1. Confirm the CSS with `.theme-pacman` is actually loaded (no build errors, file imported in your global styles).
2. Make sure the selector matches: my CSS targets **`body.theme-pacman`**. If your builder wraps content differently, you can loosen it:

```css
html.theme-pacman, body.theme-pacman { /* background layers here */ }
```

3. Hard refresh or clear cache.
4. Temporarily add a visible test:

```css
body.theme-pacman { outline: 4px solid magenta !important; }
```

If you see the outline, the class is applied; if not, the class isn’t being added in the right place.

Want me to tailor this to exactly where your root component lives in your Lovable project? Paste a screenshot of your file tree (the left sidebar with `App.tsx`, `index.html`, etc.), and I’ll point to the precise file/line.

**Mike:** draft a prompt optimized to : change the color scheme from blue and white to black and grey. the style should be a modern and sleek design.

**GPT:** Here’s a paste-ready **Loveable prompt** to restyle the site to a sleek **black & grey** theme with deterministic CSS and minimal markup changes.

---

**Act as a senior UI engineer. Replace the current blue/white palette with a modern black & grey design.** Keep layout/markup unchanged (class additions OK). Apply changes via tokens + one global CSS file. Maintain AA contrast, visible focus, and reduced-motion support. Return only the updated tokens/CSS and a short test checklist.

### 1) Replace/extend design tokens (CSS custom properties)
Update the global token file (or inject at `:root`) with the following values and use them across components:

```css
:root{
  /* Core monochrome */
  --bg-0:#0A0A0B;   /* page background (near black) */
  --bg-1:#111214;   /* section surface */
  --bg-2:#16181B;   /* card surface */
  --line:#24272B;   /* hairline borders */
  --muted:#8B919A;  /* secondary text/icons */
  --fg:#ECEEF1;     /* primary text */
  --fg-inverse:#0B0C0E;

  /* Accent (subtle graphite, not blue) */
  --accent:#9AA0A6;
  --accent-600:#858B92;

  /* Status (keep for forms) */
  --success:#10B981; --warning:#F59E0B; --error:#EF4444;

  /* Radii/shadows tuned for “sleek” */
  --r-sm:10px; --r-md:14px; --r-lg:18px;
  --shadow-sm:0 1px 2px rgba(0,0,0,.35);
  --shadow-md:0 6px 16px rgba(0,0,0,.40);
  --shadow-lg:0 18px 38px rgba(0,0,0,.45);

  /* Motion */
  --easing:cubic-bezier(.2,.6,.2,1); --dur-1:140ms; --dur-2:260ms;
}
```

### 2) Global theme application (single CSS file `styles/mono.css`)
Apply the palette site-wide without changing HTML structure:

```css
/* Base */
html,body{background:var(--bg-0); color:var(--fg);}
a{color:var(--fg); text-decoration:none;}
a:hover{opacity:.88;}
:focus-visible{outline:2px solid var(--accent); outline-offset:2px;}
::selection{background:rgba(154,160,166,.28);}

/* Header / Nav */
.site-header{background:rgba(17,18,20,.8); backdrop-filter:saturate(1.1) blur(8px);
  border-bottom:1px solid var(--line);}
.nav a{color:var(--fg); }
.nav a[aria-current="page"]{color:#fff;}

/* Surfaces */
.surface,.card,[data-plain-surface]{background:var(--bg-2); border:1px solid var(--line);
  border-radius:var(--r-lg); box-shadow:var(--shadow-sm);}
.section-contrast{background:var(--bg-1); border-top:1px solid var(--line);}

/* Typography */
h1,h2,h3{color:#fff;}
.muted, .text-muted{color:var(--muted);}

/* Buttons */
.btn{display:inline-flex; align-items:center; gap:.6rem; font-weight:600;
  border-radius:var(--r-md); padding:.75rem 1rem; transition:transform var(--dur-1) var(--easing), 
  background var(--dur-1) var(--easing), border-color var(--dur-1) var(--easing);}
.btn--primary{background:#1C1F23; color:#fff; border:1px solid var(--line);}
.btn--primary:hover{transform:translateY(-1px); border-color:#2B2F34;}
.btn--accent{background:var(--accent); color:var(--fg-inverse); border:1px solid var(--accent-600);}
.btn--ghost{background:transparent; color:#fff; border:1px solid var(--line);}
.btn--ghost:hover{border-color:#2B2F34;}

/* Inputs / Forms */
.input,.select,.textarea{background:#0F1113; color:#E8EBEF; border:1px solid var(--line);
  border-radius:var(--r-sm); padding:.75rem .9rem; transition:border-color var(--dur-1);}
.input::placeholder{color:#6E747D;}
.input:focus,.select:focus,.textarea:focus{border-color:var(--accent); 
  box-shadow:0 0 0 3px rgba(154,160,166,.18);}

/* Dividers / Tables */
.hr, .divider{border-top:1px solid var(--line);}
table{border-color:var(--line);} thead th{color:#fff;}

/* Media frames */
.img-frame img{border-radius:var(--r-md); box-shadow:var(--shadow-md);}

/* Hero gradient (subtle) – replaces blue */
.hero--gradient{background:linear-gradient(180deg, #0B0C0E 0%, #131519 60%, #0A0A0B 100%);
  color:#fff;}

/* FAQ / Accordion */
.accordion-item{background:var(--bg-2); border:1px solid var(--line);}
.accordion-trigger{color:#fff;}
.accordion-content{color:var(--muted);}

/* Footer */
.site-footer{background:#0B0C0E; border-top:1px solid var(--line); color:var(--muted);}

/* Reduced motion */
@media (prefers-reduced-motion:reduce){ *{animation:none!important; transition:none!important;} }
```

### 3) Remove legacy blue accents
Search & replace in project styles:
- **Find tokens/colors:** any `#0E4B8B`, `#00A0DC`, `primary_hover`, `accent_hover`, etc.
- **Replace with:** `var(--accent)` or neutral greys as used above.
- Keep brand logos unchanged (do not recolor images/SVGs unless they use `currentColor`).

### 4) Optional class wiring (minimal)
- Add `.hero--gradient` to the hero wrapper if not present.
- Ensure containers/cards use `.surface`/`.card` classes already in your project; no structural edits needed.

### 5) Accessibility & contrast guardrails
- Maintain body text ≥ 15px.  
- Ensure any text on `--accent` uses `--fg-inverse`.  
- Preserve visible focus (`:focus-visible`) from this stylesheet.

### 6) Deliverables to return
1. The updated **token block** and the complete `styles/mono.css` contents above.  
2. A brief **diff** (or bullet list) of any color token renames you performed.  
3. **Test Checklist**:  
   - Backgrounds use `--bg-*` tones across pages.  
   - Buttons/links readable on dark surfaces; hover/focus visible.  
   - Forms pass AA contrast; placeholders legible.  
   - No unexpected blue remains (scan computed styles).  
   - Lighthouse: Contrast pass; CLS ≤ 0.1; TBT ≤ 200ms.

**Do not alter routes, copy, or component structure.** Apply only palette and style changes necessary to achieve a sleek black & grey theme.

**Mike:** how do I Link my calendly page to the contact page ?  the placeholder is there but there is no functionality.   it displays , "Page not found
Sorry, but the page you were looking for could not be found".

**GPT:** Sounds like your button/link is being treated as an **internal route** (so your app tries to go to `/calendly.com/...` and hits your router’s 404). Fix it by using a **full https URL** and a normal `<a>` tag (or embed Calendly inline). Here are the two clean options—pick one.

---

# Option A — Button opens Calendly (new tab)

**What to check**
1) Your env/constant has the **full URL** (with `https://`):
```
CALENDLY_URL = "https://calendly.com/michael-simplythebestdigital/30min"
```

2) In your contact page, make the CTA a standard anchor—**not** `Link` from react-router:

```tsx
// Contact.tsx
const CALENDLY_URL = "https://calendly.com/michael-simplythebestdigital/30min";

<a
  href={CALENDLY_URL}
  target="_blank"
  rel="noopener noreferrer"
  className="btn btn--accent"
  aria-label="Open Calendly to schedule a 30-minute call"
>
  Book a Call
</a>
```

> If you previously used `<Link to={CALENDLY_URL}>`, replace it with `<a href=...>`; React Router treats `to` as an **internal** path.

---

# Option B — Embed Calendly on the Contact page

Add the **inline widget**. This doesn’t navigate anywhere, so no 404s.

```tsx
// Contact.tsx
import { useEffect } from "react";

export default function Contact() {
  const CALENDLY_URL = "https://calendly.com/michael-simplythebestdigital/30min";

  useEffect(() => {
    // Load Calendly widget script once
    const id = "calendly-widget";
    if (!document.getElementById(id)) {
      const s = document.createElement("script");
      s.id = id;
      s.src = "https://assets.calendly.com/assets/external/widget.js";
      s.async = true;
      document.body.appendChild(s);
    }
  }, []);

  return (
    <section className="surface">
      {/* ...your form on the left... */}
      <div
        className="calendly-inline-widget"
        data-url={CALENDLY_URL}
        style={{ minWidth: "320px", height: "720px" }}
        aria-label="Calendly scheduling widget"
      />
    </section>
  );
}
```

If you prefer **no external script**, an iframe also works:

```tsx
<iframe
  src="https://calendly.com/michael-simplythebestdigital/30min?hide_event_type_details=1&hide_gdpr_banner=1"
  title="Schedule a 30-minute call"
  style={{ width: "100%", height: "720px", border: 0, background: "transparent" }}
  loading="lazy"
></iframe>
```

---

## Quick Troubleshooter (most common causes of “Page not found”)

- ❌ `Link to="calendly.com/..."`
  - Router interprets as `/calendly.com/...` → your app’s 404.
  - ✅ Use `<a href="https://calendly.com/...">`.

- ❌ Missing protocol: `href="calendly.com/..."`  
  - Browser treats as relative path.  
  - ✅ Use `https://calendly.com/...`.

- ❌ Typo in slug or event type deleted.  
  - ✅ Open the URL directly in a new tab to confirm it loads.

- ❌ CSP or ad/script blockers preventing widget.js.  
  - ✅ Use the iframe version or relax CSP to allow `assets.calendly.com`.

- ❌ Staging env masking env vars.  
  - ✅ Log the value you pass to the button/iframe and confirm it’s the full URL.

If you paste the small block you’re currently using for the Calendly button or embed, I’ll rewrite it precisely.

**Mike:** do I prompt lovable or copy the html into the code editor ?

**GPT:** You can do either. If you want the quickest fix **without touching code**, use the prompt below in Lovable. If you’re comfortable editing, paste the provided HTML/TSX into the code editor.

---

# Paste-ready Lovable Prompt (no coding)

> Act as a senior UI engineer. On the **/contact** page, make the Calendly placeholder functional.  
> 1) Set `CALENDLY_URL` to `https://calendly.com/michael-simplythebestdigital/30min`.  
> 2) Replace any React-Router `<Link to={CALENDLY_URL}>` with a standard anchor button:
> ```html
> <a href="https://calendly.com/michael-simplythebestdigital/30min"
>    target="_blank" rel="noopener noreferrer"
>    class="btn btn--accent"
>    aria-label="Open Calendly to schedule a 30-minute call">Book a Call</a>
> ```
> 3) Also add an **inline Calendly embed** on the right column (keep our two-column layout). Prefer iframe (no external script needed):
> ```html
> <iframe
>   src="https://calendly.com/michael-simplythebestdigital/30min?hide_event_type_details=1&hide_gdpr_banner=1"
>   title="Schedule a 30-minute call"
>   style="width:100%;height:720px;border:0;background:transparent"
>   loading="lazy"></iframe>
> ```
> 4) Remove any broken internal route like `/calendly.com/...` and ensure the CTA points to the full **https** URL.  
> 5) Return a minimal diff for the contact page and confirm the button opens in a new tab and the embed renders.

---

# If you prefer to edit code yourself

**Button (opens new tab):**
```tsx
<a
  href="https://calendly.com/michael-simplythebestdigital/30min"
  target="_blank"
  rel="noopener noreferrer"
  className="btn btn--accent"
  aria-label="Open Calendly to schedule a 30-minute call"
>
  Book a Call
</a>
```

**Inline embed (no script):**
```tsx
<iframe
  src="https://calendly.com/michael-simplythebestdigital/30min?hide_event_type_details=1&hide_gdpr_banner=1"
  title="Schedule a 30-minute call"
  style={{ width: "100%", height: "720px", border: 0, background: "transparent" }}
  loading="lazy"
/>
```

> Replace any `<Link to="…">` versions—those cause the “Page not found” 404 because your router treats it as an internal path.

---

### Quick checklist
- Button uses `<a href="https://…">` (not `<Link>`), and includes `https://`.  
- Opening the raw URL in a new tab works.  
- Embed height ≥ 640–720px so it’s not cut off.  
- Hard refresh after changes (Cmd/Ctrl+Shift+R).

**Mike:** Optimize the following prompt for agent mode: 1. Write a prompt that will revise the services section of the website to be more informative.  The services displayed on the website are "hood exhaust cleaning, pressure cleaning , filter cleaning , appliance cleaning, pcu cleaning , conveyor oven cleaning , floor cleaning and access panel installs.".  2. Access the web for information about each service that is at least 3 paragraphs in length for each one. 3. Search kitchen hood cleaning websites , blogs, articles , ect.. for the best information . 4. Turn each service into a flip card that has the information on the opposite side.  5. Make it clickable , so the service flips over and reveals the information.

**GPT:** Here’s a clear, step‑by‑step agent‑mode prompt you can paste directly into Loveable. It tells the agent exactly what to do—research each service, gather at least three paragraphs of content, then rebuild the services section as interactive flip cards. Citations from authoritative sources are included for the research portion.

---

**Prompt for Agent‑Mode: Revise Services Section with Flip Cards**

1. **Research each service thoroughly.**  
   - Use web search to find up‑to‑date information for the following services: **hood exhaust cleaning**, **pressure cleaning**, **filter cleaning**, **appliance cleaning**, **PCU (pollution control unit) cleaning**, **conveyor oven cleaning**, **floor cleaning**, and **access panel installs**.  
   - Gather **at least three paragraphs** of information for each service. Prioritize authoritative sources such as kitchen hood cleaning blogs, industry articles, and professional service websites.  
   - Example sources for guidance:  
     * Hood exhaust cleaning: Regular hood cleaning reduces grease‑fire risk, improves ventilation and air quality, and extends equipment life【243847148299211†L61-L97】【243847148299211†L106-L115】.  
     * Pressure cleaning: Power washing removes caked grease from hoods, ducts, filters and floors, helping to prevent slip hazards and maintain hygiene【852763034728826†L75-L93】【852763034728826†L97-L116】.  
     * Filter cleaning: Hood filters capture grease vapors; cleaning prevents airflow restriction and fire risk. Frequency depends on kitchen volume and methods include manual washing or soak tanks【470949379484360†L26-L57】【470949379484360†L61-L72】. Replace warped or corroded filters when they can no longer be cleaned【452838546484430†L104-L124】.  
     * Appliance cleaning: Cleaning all cooking equipment daily and scheduling periodic deep cleaning keeps equipment efficient, reduces failures, and preserves food safety【182293924471765†L102-L122】【182293924471765†L127-L139】. Lubricate motors with food‑grade lubricants and clean small appliances like coffee makers and slicers【182293924471765†L146-L154】【182293924471765†L156-L164】.  
     * PCU cleaning: Pollution control units use special filters to remove grease, smoke, odors and volatile organic compounds from exhaust【396144672283306†L112-L122】. Communities use them to meet clean‑air regulations【396144672283306†L129-L139】. PCUs require space for maintenance and regular filter replacement; maintenance should be performed quarterly or monthly by experienced cleaners【190126938487261†L196-L203】【190126938487261†L204-L211】【190126938487261†L223-L228】.  
     * Conveyor oven cleaning: Cleaning reduces downtime and fire risk, maintains food quality and health codes, and involves inspection, disassembly, containment cleaning and careful reassembly【352646605534092†screenshot】.  
     * Floor cleaning: Kitchen floors trap grease and soap, leading to slippery surfaces. Use commercial‑grade degreasers rather than household detergents; follow steps—sweep, apply diluted cleaner, brush, let degreaser sit, rinse, vacuum, and use separate mops for back‑of‑house【552046792944774†screenshot】【874911008009085†screenshot】.  
     * Access panel installs: Grease duct access doors allow easy cleaning and inspection; they are required by NFPA 96 codes, improve safety by providing quick access for maintenance, maintain airflow, extend the system’s life, save costs, and are available in various sizes【966463330314682†screenshot】【143153006025761†screenshot】.  

2. **Summarize each service.**  
   - Distill the information into clear, well‑structured paragraphs (at least three per service). Explain **what** the service is, **why** it’s important, and any specific maintenance or safety guidelines. Ensure every consequential fact or recommendation is supported by a citation (as shown above).

3. **Rebuild the services section using flip cards.**  
   - For each of the eight services, create a **flip card**. The front should show the service name and a concise tagline or icon. The back should reveal the researched paragraphs.  
   - Cards must be **clickable** (or tap‑friendly) to flip and reveal the content.  
   - Use accessible markup—add `aria-label` and `tabindex` to make cards focusable and keyboard friendly. Ensure the flip animation works on mobile and desktop, and that the text on the back remains readable against the site’s background.

4. **Integrate the revised section.**  
   - Replace the current services section with the new set of flip cards. Maintain styling consistent with the rest of the site (spacing, typography, colours).  
   - Ensure all interactive elements meet AA contrast standards and include visible focus indicators.

5. **Citation and SEO notes.**  
   - Embed citations using the format provided (e.g., `【243847148299211†L61-L97】`) to link to the sources used.  
   - Update any meta descriptions or structured data if needed to reflect the new, more informative content.

By following these steps, the services section will be both **informative** and **interactive**, giving visitors a clear understanding of each offering and improving user engagement.

**Mike:** Run the prompt.

**GPT:** The updated **Services** section is now complete. Each service has been thoroughly researched using authoritative sources and distilled into clear, informative paragraphs. These summaries highlight why each service is essential—covering safety, compliance, efficiency, and best practices—while citing reliable references【243847148299211†L61-L97】【470949379484360†L26-L57】. The section has also been redesigned using interactive flip cards: the front displays the service name and a concise tagline, and clicking the card flips it to reveal the detailed information. All cards include keyboard‑accessible controls and visible focus states to ensure accessibility.

You can view or integrate the new section into your site by downloading the HTML file here: {{file:file-Mv4xnMQrTipww7zstHNXqY}}. This file contains the complete flip‑card layout with CSS styling, JavaScript for the flip effect, and the researched content along with citations. Simply replace your current services section with the code in this file.

**Mike:** Is it easier to copy the HTML into the lovable code editor , or prompt it?

**GPT:** Short answer: **copying the HTML into Loveable’s code editor is faster and more reliable** for getting exactly what you want (the flip-card section you already have). **Prompting** is better when you want Loveable to *rebuild* the section using your design tokens, refactor CSS, or make it reusable.

## Pick one

**A) Paste the code (recommended now)**
1. Open **Code** → find your landing page (e.g., `/src/pages/index.tsx` or `/sections/Services.tsx`).  
2. Replace the current services block with the flip-card HTML.  
3. Add the CSS from the file to your global stylesheet (e.g., `src/styles/global.css`) under a `/* Services Flip Cards */` comment.  
4. Save → preview. Check keyboard flip (Enter/Space), mobile, and contrast.

**B) Drive it by prompt (use when you want tokenized, theme-aware CSS)**
Paste this:

> Refactor the **Services** section into 8 **accessible flip cards** (front: title + tagline, back: 3-paragraph summary).  
> - Use our design tokens (spacing, radii, colors) and utility classes; no inline styles.  
> - Keep markup within the existing section wrapper and IDs.  
> - Add keyboard support (`tabindex`, `aria-expanded`, flip on Enter/Space) and preserve AA contrast.  
> - Do **not** modify other sections. Return only the updated TSX/HTML + a small CSS block scoped to `.services-flip`.

If you want me to tailor the exact paste locations (file/line), show me a screenshot of your file tree and the services file name.

**Mike:** I want to rebuild the section using  design tokens, refactor CSS, and make it reusable.  Write the prompt that will be as effective as copying in the HTML.

**GPT:** Here’s a paste-ready **Loveable prompt** that rebuilds the Services section using design tokens, reusable components, and clean, scoped CSS—while keeping it fully accessible and mobile-first.

---

**Act as a senior front-end engineer. Rebuild the “Services” section as reusable, token-driven flip cards.**  
Do not change other sections or routes.

### Goals
- Use **existing design tokens** (CSS variables) for colors, radii, spacing, shadows, and typography. **No hard-coded hex values.**  
- Create a reusable component **`ServiceFlipCard`** and a section wrapper **`ServicesSection`**.  
- Implement **accessible, click/tap flip** behavior (keyboard + screen reader friendly) with **reduced-motion** support.  
- Keep HTML semantic and SSR-safe. No layout shift.

### Data
Use these 8 services in this exact order. Pull long copy from our current Services text if present; otherwise keep the prop ready and place a clear `TODO` marker for each (the UI must still render fine with 1–2 preview sentences):

1) Hood Exhaust Cleaning  
2) Pressure Cleaning  
3) Filter Cleaning  
4) Appliance Cleaning  
5) PCU Cleaning  
6) Conveyor Oven Cleaning  
7) Floor Cleaning  
8) Access Panel Installs

### Files to add/modify
1. **`src/components/ServiceFlipCard.tsx`** – reusable card  
2. **`src/sections/ServicesSection.tsx`** – maps data → cards  
3. **`src/styles/services-flip.css`** – **scoped** styles (CSS modules OK).  
4. Wire up **`ServicesSection`** in the landing page (keep the existing section ID, e.g. `id="services-grid"` for anchors).

### Component API (implement exactly)
```ts
// ServiceFlipCard.tsx
export type ServiceFlipCardProps = {
  id: string;
  title: string;
  tagline?: string;        // short one-liner shown on the front
  paragraphs: string[];    // 3+ paragraphs for the back
  icon?: React.ReactNode;  // optional
};

export default function ServiceFlipCard(props: ServiceFlipCardProps): JSX.Element;
```

### Section contract
```ts
// ServicesSection.tsx
type ServiceItem = {
  id: string;
  title: string;
  tagline: string;
  paragraphs: string[];
  iconName?: string; // optional icon mapping if available
};

export default function ServicesSection({ items }: { items: ServiceItem[] }): JSX.Element;
```

### Styling requirements (tokens, not hex)
- Backgrounds, borders, text use **CSS variables** already defined (e.g., `var(--bg-2)`, `var(--line)`, `var(--fg)`, `var(--muted)`, `var(--accent)`; fall back gracefully if any is missing).  
- Radii: use token like `var(--r-lg)`; Shadows: `var(--shadow-sm|md)`.  
- Grid: 1 col (≤480px), 2 cols (≤1024px), 4 cols (desktop).  
- Card is a 3D flip: wrapper with `perspective`, inner with `transform-style: preserve-3d`, front/back with `backface-visibility: hidden`.  
- **No inline styles**; everything in `services-flip.css`. Namespaced root class: `.services-flip`.  
- Animation: `transition: transform var(--dur-2, 260ms) var(--easing, cubic-bezier(.2,.6,.2,1));`  
- **Reduced motion:** if `prefers-reduced-motion: reduce`, don’t rotate; instead swap front/back via opacity/visibility.

### Accessibility & interaction
- Use a `<button>` to trigger flip; flipping must also work with **Enter/Space** when the card or button is focused.  
- Manage state with a CSS class like `.is-flipped` on the card root.  
- Add `aria-expanded`, `aria-controls`, and unique IDs for the back content.  
- Ensure AA contrast on both sides; keep focus ring visible (use token accent).  
- Hover effects are optional; **do not** rely on hover for core behavior.

### Content placement
- **Front:** icon (optional), `title`, `tagline`, a small “Learn more” affordance.  
- **Back:** render each paragraph in its own `<p>`; allow natural scroll on mobile if content overflows. Include a small “Back” button or the same toggle control.

### Deliverables to return
1) Full code for the three files above.  
2) The import & usage change (diff or snippet) where you mount `<ServicesSection />` inside the landing page, preserving the existing section ID/anchor.  
3) A **typed** `items` array with the 8 services. Use existing long copy if available in the project; if not, include a brief preview line per service and mark with `// TODO: replace with full copy`.  
4) **QA checklist** confirming:
   - Grid responsive at 360px/768px/1024px/1440px.  
   - Keyboard flip works; screen reader announces expanded/collapsed.  
   - `prefers-reduced-motion` disables rotation.  
   - No layout shift (CLS ≤ 0.1) and no inline styles/hard-coded colors.  
   - Cards inherit our current theme (black/grey palette) via tokens.

> Return only the updated/added code and the QA checklist. Do not modify other sections or global tokens.

**Mike:** Optimize the following prompt for agent mode : The following companies are my clients .  Search the web for each companies brand assets and logos.  The objective is to place these companies on my website as case studies to attract future customers.  List the name of the company along with the official company logo(see uploaded screenshot of California pizza kitchen as an example), to make the appearance look formidable. Current clients: Customer Name            (Site Name)
ZIP
City
Address
California Pizza 00143
33414
WELLINGTON
10300 Forest Hill Blvd
Marriott Beach Resort and Mari
34996
STUART
555 Ne Ocean Blvd
Roseaire Retreat
33445
DELRAY BEACH
14281 Gallagher Rd
Futures of the Palm Beaches Treatment Facility
33469
TEQUESTA
701 Old Dixie Hwy
Five Star Premier Residence of Boca Raton - Main
33433
BOCA RATON
22601 Camino Del Mar
St Marks Episcopal Church Staluppi
33410
PALM BEACH GARDENS
St Marks Episcopal Church Staluppi
SSH Palm Beach
33461
LAKE WORTH
3060 MELALEUCA Ln
California Pizza 00062
33410
PALM BEACH GARDENS
3101 Pga Blvd

**GPT:** Here’s a polished, action‑oriented agent‑mode prompt that gives clear, step‑by‑step instructions to gather official logos for your client companies and present them attractively for case studies:

---

**Agent Prompt: Research & Collect Official Client Logos for Case Studies**

1. **Objective**  
   Build a compelling case‑study section for our website by showcasing the official logos of our current clients. The logos must be *authentic*, *high‑resolution*, and sourced from credible locations (official brand/press pages, investor documents, or reputable media). Use the uploaded California Pizza Kitchen logo as a style reference for size and quality.

2. **Client List**  
   Search for the official brand assets of the following companies. For each one, collect the primary logo (PNG or SVG preferred), plus any secondary lockups if available (horizontal/vertical variations).  
   - **California Pizza Kitchen**  
     - Locations: Wellington (10300 Forest Hill Blvd), Palm Beach Gardens (3101 PGA Blvd)  
   - **Marriott Beach Resort** (Marriott Beach Resort & Mari) – Stuart  
   - **Roseaire Retreat** – Delray Beach  
   - **Futures of the Palm Beaches Treatment Facility** – Tequesta  
   - **Five Star Premier Residence of Boca Raton – Main** – Boca Raton  
   - **St. Mark’s Episcopal Church (Staluppi)** – Palm Beach Gardens  
   - **SSH Palm Beach** (St. Mark’s Episcopal Church, Staluppi) – Lake Worth  

3. **Search Guidelines**  
   - Use search engines and image repositories to locate each company’s *official* logo.  
   - Prioritize the company’s own website, official press kits, or brand guideline pages. If unavailable, use well‑known business publications or high‑quality vector/logo sites.  
   - Verify authenticity by cross‑checking sources (e.g., the same logo appears on multiple reputable sites). Avoid fan art or low‑resolution assets.  
   - For logos that exist only as raster images, capture the highest available resolution (minimum 512px on the longest side).  

4. **Deliverables for Each Company**  
   - **Name of the company.**  
   - **Logo file(s).** Download and store the image(s) in a common location accessible to our project. Provide the download path or embed them directly.  
   - **Source citation.** Record the URL of the page where the logo was obtained.  
   - **Notes.** Briefly describe any brand guidelines (e.g., color rules, clearspace requirements) you discovered, to ensure we display the logo appropriately.  

5. **Output Format**  
   - Create a table or list where each entry includes: *Company Name*, *Logo* (embedded image), *Source URL*, and *Notes*.  
   - Organize the assets in a way that can be easily imported into our website.  

6. **Compliance & Quality**  
   - Respect trademark and copyright rules—use logos exactly as provided and do not modify colors or proportions.  
   - Ensure images have transparent backgrounds (if available) for seamless placement on our site.  
   - Perform the task entirely within this session; do not require future confirmation steps or unfinished work.

---

This prompt tells the agent precisely what to do, ensures authentic logos, and frames the task around your goal of creating an attractive case‑study section.

**Mike:** Run it

**GPT:** Below is a curated list of your current client companies with their official or best‑available logos (where accessible).  Logos downloaded from official sites are provided as files; screenshots from official webpages are cited when a direct download wasn’t possible.

| Company | Logo | Notes & Sources |
|---|---|---|
| **California Pizza Kitchen** (Wellington & Palm Beach Gardens) | *Logo from user-provided screenshot* | The user supplied the yellow diamond and palm tree logo for California Pizza Kitchen; this matches the official branding used on their franchise pages. |
| **Marriott Beach Resort & Mari (Stuart)** | ![Marriott logo]({{file:file-NugUvzC2KKNbnQ3u4dvi2x}}) | The logo is the black “Marriott International” wordmark downloaded from the Marriott brand file on Wikimedia Commons. This image is a high‑resolution PNG sourced from the official Marriott logo file【649863238945715†L118-L126】. |
| **Roseaire Retreat** (Delray Beach) | ![Roseaire logo]({{file:file-Ku6WdxPNeE4AD5oDrJxK7c}}) | The Roseaire Conference Center site’s JSON‑LD identified its official logo file (a blue script with a rose). We downloaded the exact image specified there【421616746733641†L24-L25】. |
| **Futures of the Palm Beaches Treatment Facility** (Tequesta) | *Screenshot of site header*【69827326875949†screenshot】 | The Futures Recovery Healthcare website does not provide an easily downloadable logo. A screenshot of the header showing the wordmark “FUTURES Recovery Healthcare” on a dark background is used as a representation. |
| **Five Star Premier Residence of Boca Raton – Main** | ![Five Star Senior Living logo]({{file:file-Dfe1zgoDmVLFJbmUUVsrHt}}) | The logo was downloaded directly from the Five Star Senior Living site (file name `five-star-senior-living-logo.jpg`), depicting the stylized “Five Star” script with star emblem【735993136985203†screenshot】. |
| **St. Mark’s Episcopal Church (Staluppi)** | *Screenshot of church logo*【661685855825858†screenshot】 | Direct image download was blocked by the site, so the logo—an oval crest with cross and blue border—was captured via a screenshot of the church’s home page. The screenshot shows the logo file path `stmarkspbg.org/images/splash/logo.jpg`. |
| **SSH Palm Beach** (Select Specialty Hospital) | *Screenshot of hospital logo*【837111528380907†screenshot】 | Select Specialty Hospitals’ website uses a green tree emblem with “Select SPECIALTY HOSPITAL” text. We captured the logo from the site’s header because the logo file isn’t directly downloadable. |

**How to use these assets:**  
- For the downloaded logos (Marriott, Roseaire Retreat, Five Star Senior Living), use the provided file IDs to embed them directly into your site.  
- For the logos represented by screenshots, consider cropping the images or requesting official brand files from the respective organizations for higher quality.

**Mike:** next task and prompt: write the intro section for kitchen repair similar to the way it is written on this websites home page :  Professional Cleaning
Service You Can Trust
Safeguarding your property and enriching your peace of mind. Hood Guyz is a service one of a kind!

From our team members to our modern equipment, we take every aspect of our business seriously. Recognizing that our customers expect nothing but the best, we are dedicated to delivering on that promise.

With our attention to detail, timely and efficient service, and unparalleled customer support, you can trust that your experience with Hood Guyz will be nothing short of professional.

Ready to elevate your kitchen maintenance? Request an estimate or book your service now. Our tailored solutions address the specific needs and concerns of restaurant owners, setting a new standard for professionalism in the industry.

Certified Professional Technicians
Fully Insured
Professional After-Service Reports
Before and After Pictures
Professional Billing and Payment Options
Book a Service

**GPT:** Absolutely! Below is a ready‑to‑use **agent‑mode prompt** for Lovable to generate a powerful intro section for your **Mr. Hood Repair** homepage—mirroring the warm, trustworthy tone of the Hood Guyz example while focusing on your specialized repair services. The prompt calls for clear copy, modern design elements, accessible structure, and a strong call to action.

---

**Prompt: Build the Intro Section for Mr. Hood Repair**

*Act as a senior UX copywriter and web builder. Create a hero‑style introduction section for **Mr. Hood Repair** that mirrors the tone and structure of the Hood Guyz homepage【342466031492700†L99-L115】. Focus on kitchen repair, inspections, and maintenance, not cleaning. Use our design tokens for colors, spacing, typography, and radii. Keep the section accessible, mobile‑first, and visually aligned with the rest of the site.*

1. **Structure & Layout**
   - Wrap the intro section in a `<section id="intro-repair">` with padding and a dark overlay background.
   - Use a **primary heading (H1)** of ≤ 7 words, e.g., “Professional Repair Service You Can Trust” that captures your service promise【342466031492700†L99-L111】.
   - Follow with a **subheading** of ≤ 20 words that touches on safeguarding property and enriching peace of mind.
   - Include **3 concise paragraphs**, modeled on the sample【342466031492700†L99-L115】:
     - Paragraph 1: Emphasize that you take equipment, team training, and NFPA‑96 standards seriously; customers can expect nothing less than exceptional repair work.
     - Paragraph 2: Describe your attention to detail, timely response, and high‑quality repairs that restore performance and prevent future breakdowns.
     - Paragraph 3: Invite readers to elevate their kitchen maintenance with tailored repair solutions; mention that you understand the unique needs of restaurant owners.
   - Add a **bulleted list** (5–6 items) highlighting:
     1. Certified repair & inspection technicians.
     2. Fully insured service.
     3. Comprehensive after‑service reports.
     4. Before‑and‑after photo documentation.
     5. Transparent billing & payment options.
   - Place a **prominent CTA button**: “Request an Estimate” or “Book a Repair Now,” linking to the contact/quote flow.

2. **Styling & Components**
   - Use design tokens: background `--bg-1` or `--primary`, headings in `--fg`, list items with `--accent` bullets.
   - Ensure text maintains AA contrast; paragraphs should be readable on both light and dark backgrounds.
   - Apply responsive grid or flexbox to stack elements on mobile and align bullets neatly.
   - Use `<ul>` and `<li>` for the bullet list with proper margin/padding; avoid plain `<p>` bullets for accessibility.
   - Include a small decorative icon next to the CTA (e.g., a wrench or checkmark), using our icon library or a simple SVG.

3. **Accessibility & Semantic Notes**
   - All interactive elements (button, link) must have `aria-label` or descriptive text for screen readers.
   - Headings should follow logical order (H1 for main intro, H2 optional for supporting tagline).
   - Use appropriate `tabindex` for elements if needed; ensure keyboard navigation focuses on the CTA.

4. **Copywriting Style**
   - Reflect professionalism and trustworthiness, similar to how Hood Guyz frames their commitment to excellence【342466031492700†L105-L112】.
   - Balance warmth and expertise; avoid jargon but be clear about services (repairs, inspections, maintenance).
   - End with a question or aspirational statement to prompt the reader to act (e.g., “Ready to restore and protect your kitchen? Book now.”).

5. **Deliverables**
   - Return the complete HTML/JSX for the `intro-repair` section, with tokens/classes applied.
   - Include any inline CSS or class names needed (scoped to `.intro-repair`) and comments indicating where to import icons.
   - Provide no explanatory commentary—just the code block ready to drop into the project.

---

This prompt will guide Lovable to generate an intro section that resonates with prospects, reflects your brand’s credibility, and invites them to engage your repair services.

**Mike:** here is the progress I have made so far using Lovable :  https://preview--spark-page-blueprint.lovable.app/?__lovable_token=[REDACTED-JWT]

**GPT:** Nice progress! Here’s a copy-paste **Lovable prompt** that will drop in a polished intro section for **Mr. Hood Repair**, matching the Hood Guyz tone while focusing on repair/inspections. It also wires the CTA to your Calendly + contact page and uses tokens, responsive layout, and a11y.

---

**Prompt to paste into Lovable (Agent Mode):**

Act as a senior UX writer + frontend builder. Add a new intro section for **Mr. Hood Repair** directly **below the hero** on the home page.

**Requirements**
- Section id: `intro-repair`
- Semantics: `<section aria-labelledby="intro-repair-h1">`
- Use existing design tokens (colors, type, spacing, radii, shadows). Maintain AA contrast.
- Mobile-first; stacked on mobile, two-column on ≥md (copy left, highlights right).
- Include primary & secondary CTAs wired to our real endpoints.

**Content (write and insert):**
- **H1 (≤7 words, id=intro-repair-h1):** “Professional Kitchen Repair You Can Trust”
- **Subhead (≤20 words):** “Safeguarding your property and keeping you inspection-ready—Mr. Hood Repair is service you can rely on.”
- **Paragraph 1 (3–4 sentences):** Emphasize certified technicians, NFPA-96 standards, quality parts, and that restaurants expect the best and we deliver.
- **Paragraph 2 (3–4 sentences):** Attention to detail, fast diagnostics, code-compliant repairs (fans, ducting, hinges, access panels, belts, motors, wiring), and prevention of future breakdowns.
- **Paragraph 3 (2–3 sentences + soft CTA):** Invite them to elevate maintenance with tailored repair/inspection plans for restaurants and food service operators.

**Trust list (bulleted `<ul>`):**
- Certified Repair & Inspection Technicians  
- Fully Insured  
- Detailed After-Service Reports  
- Before/After Photo Documentation  
- Transparent Billing & Payment Options  
- Limited Warranty on Repairs  

**CTAs**
- **Primary button:** “Book a Repair” → `https://calendly.com/michael-simplythebestdigital/30min`  
  - `aria-label="Book a repair on Calendly"`  
  - Data attribute: `data-analytics="cta-book-repair"`
- **Secondary button (ghost):** “Request an Estimate” → `/contact`  
  - `aria-label="Open contact form"`

**Styling**
- Background: neutral/ink gradient (`neutral_900 → neutral_800`) with subtle texture; text in `neutral_100`.
- Card on the right for the trust bullets: token shadow `md`, `borderRadius.card`, internal spacing `spacing[6]`.
- Headings use token typography (`h1`, `h2`), body uses `body`; max-widths: copy `~620px`.
- Add small inline icon to list bullets (check/wrench) using our icon set; icons marked `aria-hidden="true"`.

**Accessibility**
- All interactive elements keyboard-focusable with visible focus rings.
- List rendered with semantic `<ul><li>`.
- Buttons include `rel="noopener noreferrer"` for external link and `target="_blank"` on the Calendly CTA.

**Return**
- Provide the complete JSX/HTML for the `intro-repair` section with classes/tokens applied—no commentary, just code.

--- 

If you want, I can also give you an alternate headline/subhead variant for quick A/B testing.

**Mike:** great!  create a new logo.  something similar to the uploaded one for Appliance King.  keep the color scheme consistent with the Hood cleaning landing page.

**Mike:** change the name to "Mr. Expert Repair".   replace the crown with a picture of a kitchen hood.

**Mike:** next, write a prompt to remove the section "Trusted by South Florida Restaurants" and the reviews underneath and "500 +Restaurants Serviced Since 2010".

**GPT:** Here’s a clean, copy-paste **Lovable prompt** to remove those blocks everywhere (markup, styles, and nav).

---

**Prompt (Agent Mode): Remove social-proof sections**

Act as a senior frontend builder. **Delete** all instances of the following sections from the homepage (and any shared layout/partials if present):

- Section titled **“Trusted by South Florida Restaurants”**  
- The **reviews/testimonials** block that sits directly beneath it  
- The social proof line **“500+ Restaurants Serviced Since 2010”** (or any variant like “500 +Restaurants…”)

**Do the following:**
1. Remove the entire components/sections from the DOM/JSX (not just hide).  
   - If they have IDs like `trusted-by`, `reviews`, `social-proof`, remove them completely.  
   - Search by heading text as a fallback and remove the enclosing section/card.
2. Delete any related CSS/classes, images, and icons that are now unused.  
3. Remove associated navigation anchors/links (e.g., header/footer links to `#trusted-by` or `#reviews`).  
4. Ensure spacing closes up cleanly between the surrounding sections (no extra margins).  
5. Run a quick pass to confirm there are **no leftover references** in imports, routes, or section arrays (e.g., `SECTIONS` config).  
6. Keep all other content unchanged.

**Return:**  
- The updated files (JSX/TSX + CSS) with those sections removed—no commentary, just diffs or final code.  
- Confirm which files changed and that no dead styles/imports remain.

**Mike:** remove the grid lines so it a smooth background.

**GPT:** Done! I’ve produced a clean version of the **Mr. Expert Repair** logo with a smooth background (no grid). It’s exported as a transparent PNG so you can drop it onto any color in Lovable without a box.

If you also want a **solid white** or **solid dark** background variant, say the word and I’ll generate them too.

**Mike:** the "R" in "REPAIR" is cut off.  fix this.

**GPT:** Fixed! I regenerated the logo with extra margin so the final “R” is no longer cropped. I also kept the transparent background and the same gear/wrench + swoosh style and color.

Want any of these quick tweaks while we’re here?
- Export sizes (512, 1024, 2048) and a favicon set
- Solid white/charcoal background variants
- A horizontal lockup (icon left, text right) for your site header

**Mike:** create an entire new logo for "Mr. Expert Repair".   draw an image of a man with a wrench and the name displayed in a creative way around the man with a wrench.

**Mike:** great!  fill in the colors using blue , red and black.

**GPT:** ✅ Done — I colored the new **Mr. Expert Repair** logo using **blue, red, and black** as requested.

Want any quick variants while we’re at it?
- Transparent background vs. solid white/charcoal
- Flat (no gradient) version for print
- Horizontal lockup (icon left, name right) for website headers
- Favicon pack + social icons

Say the word and I’ll spin those up.

**GPT:** Looks sharp! I’ve applied **blue, red, and black** to the new **Mr. Expert Repair** logo.

If you want it live on the site, paste this into Lovable:

**Prompt (swap header logo):**
> Replace the site header logo with the latest “Mr. Expert Repair” logo I just uploaded.  
> - Use the transparent PNG.  
> - Size: 36–44px tall on desktop, 28–32px on mobile; preserve aspect ratio.  
> - Alt text: “Mr. Expert Repair—Kitchen Hood Repairs & Inspections”.  
> - Remove any drop-shadows on the image; keep the header background unchanged.  
> - Generate a 32×32 favicon and 180×180 Apple touch icon from the same asset and wire them in `<head>`.

Want variants? I can output:
- flat (no gradients) for print,
- white/charcoal backgrounds,
- horizontal lockup for the navbar,
- full favicon set + social avatar.

**Mike:** I love it!  make a few revisions :  remove the wrench and fold the mans arms.

**Mike:** the following is HTML and CSS code for the landing page.  I want to change the color scheme to match the colors of the new logo, "Red , white and Blue". write a prompt that will accomplish this while following best practices.  //import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import IntroRepair from "@/components/sections/IntroRepair";
import LogosSection from "@/components/sections/LogosSection";
import ServicesGrid from "@/components/sections/ServicesGrid";
import HowItWorks from "@/components/sections/HowItWorks";
import NFPACompliance from "@/components/sections/NFPACompliance";
import SocialProof from "@/components/sections/SocialProof";
import OfferSnapshot from "@/components/sections/OfferSnapshot";
import ServiceArea from "@/components/sections/ServiceArea";
import ProofBlock from "@/components/sections/ProofBlock";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

const Index = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <IntroRepair />
        <LogosSection />
        <ServicesGrid />
        <HowItWorks />
        <NFPACompliance />
        <SocialProof />
        <OfferSnapshot />
        <ServiceArea />
        <ProofBlock />
        <FAQ />
        <FinalCTA />
      </main>

      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Mr. Expert Repair",
          brand: {
            "@type": "Brand",
            name: "Mr. Expert Repair",
          },
          url: window.location.origin,
          telephone: "+19545550199",
          priceRange: "$",
          address: {
            "@type": "PostalAddress",
            addressRegion: "FL",
            addressCountry: "US",
          },
          areaServed: {
            "@type": "State",
            name: "Florida",
          },
          affiliation: [
            { "@type": "Organization", name: "California Pizza Kitchen" },
            { "@type": "Organization", name: "Marriott Beach Resort" },
          ],
          knowsAbout: ["NFPA 96 Compliance", "Commercial Kitchen Hood Cleaning", "Fire Safety"],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Hood Cleaning Services",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "NFPA-Certified Hood Cleaning",
                  description: "Photo-documented commercial kitchen hood exhaust cleaning",
                },
              },
            ],
          },
        })}
      </script>
    </>
  );
};

export default Index;//

**GPT:** Here’s a copy-paste **Lovable (Agent Mode)** prompt that will switch the entire site to a **red/white/blue** theme using tokens + clean CSS, while preserving AA contrast and good states.

---

**Prompt: Convert site theme to Red • White • Blue (tokens + CSS refactor)**

Act as a senior frontend theming engineer. Migrate the project to a **red/white/blue** palette that matches the new “Mr. Expert Repair” logo. Do this via design tokens and global CSS variables—not one-off colors. Then apply the theme across all sections/components listed below.

### 1) Add a new theme token set
Create (or update) a tokens file (e.g., `tokens/theme.patriot.json`) and expose CSS variables in `:root[data-theme="patriot"]`:

```
:root[data-theme="patriot"] {
  /* Core brand */
  --brand-red: #C81E1E;           /* primary */
  --brand-red-600: #B91C1C;       /* hover/active */
  --brand-blue: #0E3A8A;          /* secondary */
  --brand-blue-600: #0B2E6C;      /* hover/active */
  --brand-white: #FFFFFF;

  /* Neutrals & text */
  --ink-900: #0B1220;   /* headings on light */
  --ink-700: #2D3948;   /* body on light */
  --ink-100: #F6F8FB;   /* light surfaces */
  --line-200: #E5E7EB;  /* borders */

  /* Feedback (keep, do not brand) */
  --success-600: #059669;
  --warning-600: #D97706;
  --danger-600:  #DC2626;

  /* Buttons/links */
  --btn-primary-bg: var(--brand-red);
  --btn-primary-bg-hover: var(--brand-red-600);
  --btn-primary-fg: var(--brand-white);

  --btn-secondary-bg: transparent;
  --btn-secondary-border: var(--brand-blue);
  --btn-secondary-bg-hover: rgba(14,58,138,0.08);
  --btn-secondary-fg: var(--brand-blue);

  /* Links */
  --link: var(--brand-blue);
  --link-hover: var(--brand-blue-600);

  /* Backgrounds */
  --bg: #FFFFFF;
  --bg-alt: #F8FAFC;
  --bg-hero: linear-gradient(180deg, rgba(14,58,138,0.08), rgba(200,30,30,0.06));

  /* Shadows & radii */
  --radius-card: 16px;
  --shadow-md: 0 8px 24px rgba(11,18,32,0.12);
}
```

### 2) Wire the theme at app root
- In the app entry (e.g., `App.tsx` or layout), set `<html data-theme="patriot">` or add `document.documentElement.setAttribute('data-theme','patriot')` on load.
- Ensure existing components read from CSS vars (e.g., `color: var(--ink-900)`).

### 3) Replace hard-coded colors
- Grep for any previous blues/accents (e.g., `#0E4B8B`, `#00A0DC`, “accent/primary” names). Replace with the new variables.  
- Do **not** alter success/warning/danger colors.

### 4) Component pass (apply tokens)
Update styles for these components to use the variables above:
- `Header`, `Hero`, `IntroRepair`, `LogosSection`, `ServicesGrid`, `HowItWorks`, `NFPACompliance`, `SocialProof`, `OfferSnapshot`, `ServiceArea`, `ProofBlock`, `FAQ`, `FinalCTA`.
Examples:
- **Hero**: background `var(--bg-hero)`, H1 color `var(--ink-900)`, primary CTA uses `--btn-primary-*`, secondary CTA uses `--btn-secondary-*`.
- **Cards/Sections**: card bg `var(--brand-white)`; borders `var(--line-200)`; headings `var(--ink-900)`; body `var(--ink-700)`.
- **Links**: `color: var(--link)` with `:hover { color: var(--link-hover) }`.

### 5) States, a11y, and contrast
- Ensure focus rings are visible (e.g., `outline: 2px solid var(--brand-blue); outline-offset: 2px;`).
- Hover/active states use the `-600` variants.
- Verify AA contrast for text on all backgrounds (≥ 4.5:1 for body, ≥ 3:1 for large headers).

### 6) Deliverables
- Updated tokens file + `globals.css` (or equivalent) with the `data-theme="patriot"` block.
- Diff or final code for updated components, showing replacement of any hard-coded colors with variables.
- A brief checklist confirming no leftover legacy color refs.
- No extra commentary—return code and changed files only.

**Apply theme now across the entire site.**

--- 

Paste that into Lovable and it will refactor the palette globally while keeping everything accessible and consistent with your new logo.

**Mike:** turn this into a prompt that is optimized for Lovable and will generate the desired output.

**GPT:** Here’s a crisp, copy-paste **Lovable (Agent Mode)** prompt that will refactor your site to a **Red • White • Blue** theme using tokens + clean CSS, then apply it across all sections.

---

**PROMPT (paste into Lovable):**

Act as a senior theming engineer. Convert the entire site to a **Red • White • Blue** palette that matches the new “Mr. Expert Repair” logo using **design tokens + CSS variables** (no hard-coded colors). Apply globally to all sections in `Index.tsx` (Header, Hero, IntroRepair, LogosSection, ServicesGrid, HowItWorks, NFPACompliance, SocialProof, OfferSnapshot, ServiceArea, ProofBlock, FAQ, FinalCTA).

### 1) Create theme tokens + CSS vars
Add a theme file (or extend existing tokens) and expose variables in global CSS:

```css
/* globals.css (or app.css) */
:root[data-theme="patriot"]{
  /* Brand */
  --brand-red: #C81E1E;           /* primary */
  --brand-red-600: #B91C1C;       /* hover/active */
  --brand-blue: #0E3A8A;          /* secondary */
  --brand-blue-600: #0B2E6C;      /* hover/active */
  --brand-white: #FFFFFF;

  /* Neutrals/Text */
  --ink-900:#0B1220;  /* headings on light */
  --ink-700:#2D3948;  /* body on light */
  --ink-100:#F6F8FB;  /* light surfaces */
  --line-200:#E5E7EB; /* borders */

  /* Feedback (unchanged/brand-agnostic) */
  --success-600:#059669;
  --warning-600:#D97706;
  --danger-600:#DC2626;

  /* Buttons/links */
  --btn-primary-bg:var(--brand-red);
  --btn-primary-bg-hover:var(--brand-red-600);
  --btn-primary-fg:var(--brand-white);

  --btn-secondary-bg:transparent;
  --btn-secondary-border:var(--brand-blue);
  --btn-secondary-bg-hover:rgba(14,58,138,.08);
  --btn-secondary-fg:var(--brand-blue);

  --link:var(--brand-blue);
  --link-hover:var(--brand-blue-600);

  /* Backgrounds & effects */
  --bg:#FFFFFF;
  --bg-alt:#F8FAFC;
  --bg-hero:linear-gradient(180deg, rgba(14,58,138,.08), rgba(200,30,30,.06));
  --radius-card:16px;
  --shadow-md:0 8px 24px rgba(11,18,32,.12);
}
```

### 2) Enable theme at app root
In the root layout/entry (e.g., `App.tsx` or `main.tsx`), set the attribute once:

```ts
document.documentElement.setAttribute('data-theme','patriot');
```

### 3) Replace hard-coded colors with tokens
Search the codebase for previous blues/accents (e.g., `#0E4B8B`, `#00A0DC`, “primary/accent”) and replace with vars. Examples:
- Text: `color: var(--ink-900);` (headings), `var(--ink-700)` (body)
- Cards: `background: var(--brand-white); border-color: var(--line-200);`
- Links: `color: var(--link); &:hover{color: var(--link-hover)}`
- Buttons:
  - Primary → `background: var(--btn-primary-bg); color: var(--btn-primary-fg); &:hover{background: var(--btn-primary-bg-hover)}`
  - Secondary → `background: var(--btn-secondary-bg); color: var(--btn-secondary-fg); border:1px solid var(--btn-secondary-border); &:hover{background: var(--btn-secondary-bg-hover)}`
- Hero background: `background: var(--bg-hero);`

### 4) Component pass (apply tokens)
Ensure each of these reads from the new vars: `Header`, `Hero`, `IntroRepair`, `LogosSection`, `ServicesGrid`, `HowItWorks`, `NFPACompliance`, `SocialProof`, `OfferSnapshot`, `ServiceArea`, `ProofBlock`, `FAQ`, `FinalCTA`.  
Use `--radius-card` and `--shadow-md` for cards; keep spacing/typography as is.

### 5) Accessibility & states
- Focus rings visible: `:focus{ outline:2px solid var(--brand-blue); outline-offset:2px; }`
- Use the `-600` variants for hover/active states.
- Verify AA contrast (≥4.5:1 body, ≥3:1 large headings) on all backgrounds.

### 6) Return
- Commit updated CSS + any component diffs (no commentary—**code only**).
- Confirm: no leftover legacy hex values; theme is active across all sections.

**Execute now.**

**Mike:** draft an optimized prompt that will generate with expert styling and skill HTML and CSS for the following :  a contact page that has location details.  We serve the tri county area and beyond.  include the west coast of Florida , central Florida and the pan handle of Florida (Tallahassee , Pensacola, Sarasota).  create a map where the website visitor visualize the tri county area and additional locations (west coast of Florida , central Florida and the pan handle of Florida (Tallahassee , Pensacola, Sarasota)) we serve.

**GPT:** Here’s a copy-paste **Lovable (Agent Mode)** prompt to generate a polished **Contact + Service Areas** page with expert HTML/CSS and an interactive map (Leaflet + OpenStreetMap, no API key required). It uses the site’s red/white/blue tokens, includes location details, and visualizes the **Tri-County area** plus **West Coast, Central FL, and Panhandle (Tallahassee, Pensacola, Sarasota)**.

---

**PROMPT (paste into Lovable):**

Act as a senior frontend engineer + UX writer. Create a new page **/contact** for **Mr. Expert Repair** with a responsive two-column layout (form + details on the left; interactive map on the right). Use our design tokens (red/white/blue “patriot” theme) and AA contrast. Return **code only** (React/TSX or HTML+JS), including CSS scoped to this page.

### Requirements

**1) Layout & Sections**
- `<main id="contact">`
  - **Header block**: H1 “Contact Mr. Expert Repair” (≤6 words), subhead explaining we serve **Tri-County and beyond**.
  - **Grid (≥md: 6/6 split; mobile: stacked)**  
    - **Left column**: Contact card with form + business details.  
    - **Right column**: Map card visualizing all service areas.
  - **Service Area Summary**: region chips + bullet list under the map.

**2) Contact Card (Left)**
- Form fields (accessible labels, required):  
  - Full Name, Company, Email, Phone, Service Location (city), Preferred Date/Time (text), Message.  
- Checkbox: “Send me a copy of this request.”  
- Submit button: Primary style (brand red).  
- Below form: quick details (click-to-call & mailto) and hours.
- Hook up form attributes for future integration:  
  - `data-webhook="SALESLOFT_WEBHOOK_URL"`  
  - `data-notify="NOTIFICATION_EMAIL"`  
  - reCAPTCHA placeholder div with `data-recaptcha="RECAPTCHA_SECRET_KEY"` (do not implement key logic now).
- A11y: `aria-invalid` on errors, visible focus rings, inline validation messages.

**3) Map Card (Right) — Leaflet (no API key)**
- Use **Leaflet** with **OpenStreetMap** tiles via CDN:
  - CSS: `https://unpkg.com/leaflet@1.9.4/dist/leaflet.css`  
  - JS:  `https://unpkg.com/leaflet@1.9.4/dist/leaflet.js`
- Map container height: `min(60vh, 640px)`, rounded corners, token shadow.
- **Initial view** centered on Florida (~ `lat: 28.1, lng: -82.4`, zoom 6).
- **Visualize Tri-County** (Miami-Dade, Broward, Palm Beach) with **translucent blue circles** and labels; use approximate centers + radii:
  - Miami (25.7617, -80.1918), radius 45km  
  - Fort Lauderdale (26.1224, -80.1373), radius 35km  
  - West Palm Beach (26.7153, -80.0534), radius 40km
- **Additional areas** (translucent red circles + markers):  
  - **West Coast**: Sarasota (27.3364, -82.5307), radius 45km  
  - **Central Florida**: Orlando (28.5383, -81.3792), radius 50km  
  - **Panhandle**: Tallahassee (30.4383, -84.2807), radius 45km; Pensacola (30.4213, -87.2169), radius 45km
- Add **markers** with popups listing common services (Repairs, Inspections, Hood Cleaning, Emergency Support) and a “Request Service” link scrolling to the form.
- Map legend (top right): blue = Tri-County core, red = Additional regions.

**4) Styling (tokens)**
- Use CSS variables already defined (brand red/blue/white). Example mapping:
  - Buttons: `--btn-primary-bg`, `--btn-primary-fg`, hover `--btn-primary-bg-hover`
  - Card bg: `var(--brand-white)`; border: `var(--line-200)`; shadow: `var(--shadow-md)`; radius: `var(--radius-card)`
  - Headings: `var(--ink-900)`; body: `var(--ink-700)`; links: `var(--link)`
- Map overlays:
  - Tri-County circle: stroke `var(--brand-blue)`, fill `var(--brand-blue)` @ 0.16 opacity.
  - Additional area circle: stroke `var(--brand-red)`, fill `var(--brand-red)` @ 0.14 opacity.
- Focus state: outline 2px `var(--brand-blue)` with offset.

**5) Copy (concise, professional)**
- Subhead: “We serve the Tri-County area and beyond—West Coast, Central Florida, and the Panhandle.”
- Region bullets below map:
  - **Tri-County (Core):** Miami-Dade, Broward, Palm Beach  
  - **West Coast:** Sarasota & surrounding  
  - **Central Florida:** Orlando metro  
  - **Panhandle:** Tallahassee, Pensacola

**6) Behavior**
- Smooth scroll from map popups “Request Service” to form.  
- Basic client-side validation: email pattern check, phone digits, required fields.  
- On submit: prevent default, show success toast placeholder (“Thanks—our team will contact you shortly.”). (Do not call external APIs.)

**7) Deliverables**
- `/contact` page component (TSX/JSX or HTML) + scoped CSS and the minimal inline JS for Leaflet initialization.  
- No commentary—**return only the final code**.

**Execute now.**

**Mike:** next , draft a prompt for the "how it works" menu.  use this content :  Our Process: From Grimy to Shiny-Clean
Ever wonder how we get commercial kitchen hoods so spotlessly clean, from the visible hood all the way up the ductwork and the rooftop fan? It’s not magic; it’s a meticulous, multi-step system designed to eliminate every trace of grease buildup, ensuring your kitchen runs safely and efficiently.
Here’s how it happens:
1. Preparation is Key (Protecting Your Kitchen)
Before we start the heavy-duty cleaning, we carefully protect your entire kitchen space. Technicians lay down protective sheeting over all appliances, counters, and flooring directly under the hood system. A sealed environment is created to ensure the only thing getting messy is the inside of the exhaust system!
2. The Deep Degrease & Scrub
Cleaning begins by carefully removing filters, access panels, and fan components. Then, using high-powered pressure washers and specialized degreasing agents, the built-up grease is attacked. This isn't a simple wipe-down; the entire system—the hood, all connected ductwork, and the exhaust fan—is cleaned right down to the bare metal, as required by fire safety codes (NFPA 96).
3. The "Bare Metal" Standard
The goal is simple: total elimination of flammable residue. Every inch of the system is cleaned until it meets the "bare metal" standard. This isn't just about making it look good; it's about drastically reducing fire risk and satisfying stringent health and safety inspections.
4. Rinse, Dry, and Reassemble
Once the grease is gone, the entire system is thoroughly rinsed with clean water to remove any chemical residue. All components are properly dried, the fan and filters are reassembled, and all protective coverings are removed.
5. Final Inspection & Certification
The job isn't done until it's certified. A final inspection is performed, detailed before-and-after photos are taken for your records, and a certificate of compliance is provided that can be shown to the Health Department or Fire Marshall. You get peace of mind knowing your system is professionally cleaned and up to code.

**GPT:** Here’s a copy-paste **Lovable (Agent Mode)** prompt to build a polished, token-driven **How It Works** section from your content. It creates a responsive stepper/timeline with icons, AA contrast, and anchors for the menu.

---

**PROMPT (paste into Lovable):**

Act as a senior frontend engineer + UX writer. Create a new section **“How It Works”** using the exact content below. Use our red/white/blue theme tokens (patriot) and return **code only** (TSX/HTML + scoped CSS). Place it after `ServicesGrid` and before `NFPACompliance`.

### Section spec
- Wrapper: `<section id="how-it-works" aria-labelledby="how-it-works-h2">`
- Heading (H2, id=`how-it-works-h2`): “How It Works”
- Intro lead (1–2 sentences) summarizing the process.
- **Step layout:** responsive **5-step horizontal stepper** on desktop; **vertical** stacked timeline on mobile.  
- Each step = icon + title + short body.  
- Add a sticky local nav/anchor target so menu item “How It Works” scrolls here.
- CTA row at end: **Primary:** “Book a Service” → `https://calendly.com/michael-simplythebestdigital/30min` (target `_blank`, rel `noopener`); **Secondary:** “Request an Estimate” → `/contact`.

### Content (use verbatim for titles & paragraphs; you may tighten the lead sentence only)
**Section intro title:** Our Process: From Grimy to Shiny-Clean  
**Lead paragraph (keep tone):**  
Ever wonder how we get commercial kitchen hoods so spotlessly clean, from the visible hood all the way up the ductwork and the rooftop fan? It’s not magic; it’s a meticulous, multi-step system designed to eliminate every trace of grease buildup, ensuring your kitchen runs safely and efficiently.

**Steps (titles + bodies):**
1) **Preparation is Key (Protecting Your Kitchen)**  
Before we start the heavy-duty cleaning, we carefully protect your entire kitchen space. Technicians lay down protective sheeting over all appliances, counters, and flooring directly under the hood system. A sealed environment is created to ensure the only thing getting messy is the inside of the exhaust system!
2) **The Deep Degrease & Scrub**  
Cleaning begins by carefully removing filters, access panels, and fan components. Then, using high-powered pressure washers and specialized degreasing agents, the built-up grease is attacked. This isn't a simple wipe-down; the entire system—the hood, all connected ductwork, and the exhaust fan—is cleaned right down to the bare metal, as required by fire safety codes (NFPA 96).
3) **The "Bare Metal" Standard**  
The goal is simple: total elimination of flammable residue. Every inch of the system is cleaned until it meets the "bare metal" standard. This isn't just about making it look good; it's about drastically reducing fire risk and satisfying stringent health and safety inspections.
4) **Rinse, Dry, and Reassemble**  
Once the grease is gone, the entire system is thoroughly rinsed with clean water to remove any chemical residue. All components are properly dried, the fan and filters are reassembled, and all protective coverings are removed.
5) **Final Inspection & Certification**  
The job isn't done until it's certified. A final inspection is performed, detailed before-and-after photos are taken for your records, and a certificate of compliance is provided that can be shown to the Health Department or Fire Marshall. You get peace of mind knowing your system is professionally cleaned and up to code.

### Icons & visuals
- Use inline SVG or icon set; map suggested icons:  
  1) shield/covering, 2) spray/pressure-wash, 3) check-shield/metal, 4) water-drop/refresh, 5) badge/certificate.  
- Add a thin progress line connecting steps; step number chips use brand colors.

### Styling (tokens only, no hard-coded hex)
- Background: `var(--bg-alt)`; cards: `var(--brand-white)` with `box-shadow: var(--shadow-md)`, `border-radius: var(--radius-card)`.
- Heading: `color: var(--ink-900)`; body: `var(--ink-700)`.
- Primary action: `--btn-primary-*`; secondary: `--btn-secondary-*`.
- Accent elements (step numbers/lines): `var(--brand-blue)`; hovers/active use `-600` variants.
- Respect AA contrast; visible focus ring `outline: 2px solid var(--brand-blue); outline-offset: 2px;`.

### Accessibility
- Each step is an `<article role="group" aria-labelledby="[step-id]-title">`.
- Keyboard focus on each step; icons `aria-hidden="true"`.
- Provide `aria-current="step"` for the active step on desktop when hovered/focused.
- Ensure logical heading hierarchy (H2 section, H3 per step).

### Behavior
- Smooth scroll when the global menu item “How It Works” is clicked.
- On mobile, steps are expandable/collapsible (optional) using `<details>`/`<summary>` while preserving the full content in the DOM.

### Deliverables
- Complete code for the section component and its scoped CSS (e.g., `HowItWorks.tsx` + `how-it-works.css`)—**return code only**.
- Do not modify unrelated sections.  
- Ensure it compiles without additional libraries beyond existing stack.

**Mike:** write a prompt that will eliminate the flip cards under , "Trusted by leading brands".  leave the card itself with the company logo's , but eliminate the card flipping over.

**GPT:** Here’s a tight, copy-paste **Lovable (Agent Mode)** prompt to make the logo cards under **“Trusted by leading brands”** **static** (no flip), while keeping the cards, layout, and logos intact.

---

**PROMPT (paste into Lovable):**

Act as a senior frontend engineer. In the **“Trusted by leading brands”** section (likely `LogosSection` / `TrustedBy`), **remove all flip-card behavior** and keep **static logo cards** only.

### What to change
1) **Markup**
- Keep each logo card’s outer container (card, title/alt, link if present).
- **Delete** the “front/back” structure (e.g., `.card-inner`, `.card-front`, `.card-back`) and any elements used solely for the back face.
- Replace with a **single, simple card** that contains only:
  - Logo image (SVG/PNG)  
  - Optional company name (sr-only or caption)  
  - Optional link to case study (if it already exists)

2) **JS/Interaction**
- **Remove** all event handlers that toggle flip state (click, keydown Enter/Space, hover).
- **Remove** any state like `isFlipped`, `aria-expanded`, `aria-pressed`, `aria-controls` related to flipping.
- Ensure cards are **not** focusable unless they are links or buttons.

3) **CSS**
- **Remove** 3D styles: `perspective`, `transform-style: preserve-3d`, `transform: rotateY(...)`, `backface-visibility`, flip transitions, and flip classes (e.g., `.is-flipped`).
- Keep card visuals (padding, radius, shadow) using tokens:
  - `background: var(--brand-white);`
  - `border: 1px solid var(--line-200);`
  - `border-radius: var(--radius-card);`
  - `box-shadow: var(--shadow-md);`
- Optional gentle hover: `box-shadow` elevate and `transform: translateY(-2px);` (no rotate).
- Ensure images scale responsively (`max-width: 100%; height: auto; object-fit: contain;`).

4) **Accessibility**
- If the card is a link, keep it as `<a>` with descriptive `aria-label` (e.g., “California Pizza Kitchen case study”).
- Remove ARIA intended for flip/toggle states.
- Maintain AA contrast; preserve focus ring on links: `outline: 2px solid var(--brand-blue); outline-offset: 2px;`.

5) **Do not change**
- Section heading text, anchors/IDs, grid layout, or the actual logos.
- Any other sections of the site.

### Return
- Updated component code (TSX/HTML) **and** its CSS with the flip logic removed and static cards styled.  
- **Code only** (no commentary).  
- Confirm in the diff that all flip styles/handlers are gone and that the grid renders static logo cards.

**Execute now.**

**Mike:** write a prompt that will make the , "Mr. Expert Repair" logo bigger and more prominently displayed on the home page.

**GPT:** Here’s a copy-paste **Lovable (Agent Mode)** prompt to make the **“Mr. Expert Repair”** logo bigger and more prominent on the homepage, with responsive sizing, no layout shift, and clean tokens.

---

**PROMPT (paste into Lovable):**

Act as a senior frontend engineer. Increase the visual prominence of the **“Mr. Expert Repair”** logo in the site header (homepage and shared layout). Use design tokens (red/white/blue theme) and **avoid layout shift**. Return **code only** (updated Header component + CSS).

### Requirements
1) **Header / Logo container**
- Make the logo the dominant left element in the header.
- Wrap image/SVG in a link to `/` with `aria-label="Mr. Expert Repair — Home"`.
- Reserve space to avoid CLS (fixed min-height on header and fixed height on logo container).

2) **Responsive logo sizing (height-first, preserve aspect ratio)**
- **Desktop (≥1024px):** target **56–64px** logo height.  
- **Tablet (768–1023px):** target **48–56px**.  
- **Mobile (≤767px):** target **36–40px**.  
- Use `height: var(--logo-h); width: auto; max-width: clamp(160px, 24vw, 320px); object-fit: contain;`.
- Provide CSS vars:  
  ```css
  :root { --logo-h-desk: 60px; --logo-h-tab: 52px; --logo-h-mob: 38px; }
  @media (min-width:1024px){ :root{ --logo-h: var(--logo-h-desk);} }
  @media (min-width:768px) and (max-width:1023.98px){ :root{ --logo-h: var(--logo-h-tab);} }
  @media (max-width:767.98px){ :root{ --logo-h: var(--logo-h-mob);} }
  ```

3) **Header layout & spacing**
- Increase left padding around the logo container (`padding-inline: clamp(8px, 2vw, 16px)`).
- Keep nav items aligned right; if space is tight on mobile, collapse into the existing menu control.
- Maintain header height with tokens (e.g., `min-height: 72px` mobile, `84–92px` desktop) so the larger logo fits without pushing content.

4) **Styling (tokens only)**
- Background: `var(--bg)` or existing header bg; ensure **AA contrast** against the logo.
- Focus ring for the logo link: `outline: 2px solid var(--brand-blue); outline-offset: 3px;`.
- Remove drop shadows on the image itself (keep header’s existing shadow if any).

5) **Asset handling**
- Prefer SVG if available; fallback to transparent PNG already uploaded.
- Add `width`/`height` attributes (intrinsic size) and CSS height override to reduce reflow.
- `decoding="async"` and `loading="eager"` for the header logo only; all other images remain lazy.

6) **Optional (smooth polish)**
- Add a subtle, tokenized hover on the logo link (2px translateY or 1.02 scale, **no** blur).  
  ```
  .logo-link:hover { transform: translateY(-1px); transition: transform 160ms ease; }
  ```
- If a sticky header is enabled, allow a **slight shrink on scroll** (e.g., reduce `--logo-h` by ~10–15%) without changing layout line-height.

### Accessibility
- `alt="Mr. Expert Repair — Kitchen Hood Repairs & Inspections"`.
- Link target `/` only; no role changes.  
- Keep hit area ≥44×44px on all breakpoints.

### Deliverables
- Updated **Header** component (TSX/HTML) using the larger logo with the sizing rules above.
- Scoped CSS (or module) that defines the variables and responsive rules.
- No other section edits; **code only**. Execute now.

**Mike:** your prompt made the logo smaller.  I need it bigger in size.   write the prompt again.  make sure it is optimized for Lovable.

**GPT:** Here’s a copy-paste **Lovable (Agent Mode)** prompt that will make the **“Mr. Expert Repair”** logo clearly **larger** (no accidental downsizing), by removing conflicting constraints and enforcing bigger heights across breakpoints.

---

**PROMPT (paste into Lovable):**

Act as a senior frontend engineer. **Make the site header logo for “Mr. Expert Repair” significantly larger** and more prominent on the homepage (and shared header), ensuring **no conflicting styles** keep it small. **Return code only** (Header component + CSS/module).  

### Do exactly this

**1) Remove conflicting constraints**
- Search the Header and global styles for any classes/props/inline styles limiting the logo, e.g.:  
  - Tailwind classes like `h-6 h-8 h-10 max-h-10 w-24 w-32 max-w-…`, `shrink`, `basis-…`.  
  - CSS like `max-height`, `max-width`, `height:auto` on a constrained container, or `transform scale`.  
  - Flexbox constraints on the logo container (`flex-1`, `overflow-hidden`, `gap` squeezing space).  
- **Delete or override** those so the logo can grow.  

**2) Enforce larger, responsive heights (height-first, keep aspect ratio)**
- Add these CSS variables and rules (Header-scoped or global is fine):
  ```css
  :root {
    --logo-h-desk: 96px;  /* bigger desktop */
    --logo-h-tab:  72px;  /* bigger tablet  */
    --logo-h-mob:  56px;  /* bigger mobile  */
  }
  @media (min-width:1024px){ :root{ --logo-h: var(--logo-h-desk); } }
  @media (min-width:768px) and (max-width:1023.98px){ :root{ --logo-h: var(--logo-h-tab); } }
  @media (max-width:767.98px){ :root{ --logo-h: var(--logo-h-mob); } }

  .site-header { min-height: 96px; } /* prevent CLS; adjust if sticky */
  .logo-wrap   { display:flex; align-items:center; }
  .logo-img, .logo-svg {
    height: var(--logo-h);
    width: auto;              /* preserve aspect */
    object-fit: contain;
    display: block;
  }
  /* Optional hover polish */
  .logo-link:hover { transform: translateY(-1px); transition: transform 160ms ease; }
  ```
- If the asset is **SVG**, ensure it has a proper `viewBox` and **no inline width/height** that conflict (strip them or set `height="1em"` and control via CSS).  
- If **PNG**, keep `width`/`height` HTML attributes for intrinsic size, but **CSS height above must win**.  

**3) Reserve space to avoid layout shift**
- Header container should reserve room for the bigger logo:  
  - Desktop header `min-height: 104–112px` if needed so nav doesn’t wrap.  
  - Keep nav to the right; collapse to hamburger on small screens rather than shrinking the logo.

**4) Accessibility + link**
- Wrap the logo in a link to `/` with:  
  - `aria-label="Mr. Expert Repair — Home"`  
  - `alt="Mr. Expert Repair — Kitchen Hood Repairs & Inspections"`  
- Focus ring (tokens): `outline: 2px solid var(--brand-blue); outline-offset: 3px;`.

**5) Token-safe styling**
- Do **not** hard-code colors; keep existing theme.  
- If any previous header styles set a smaller `--logo-h`, **remove them**.

**6) Deliver**
- Updated Header component (TSX/HTML) using `.logo-wrap` + `.logo-img`/`.logo-svg`.  
- The CSS snippet above integrated (module or global).  
- Confirm in the diff that all restrictive classes/styles were removed and the logo renders at **~96px desktop, 72px tablet, 56px mobile**.

**Execute now.**

**Mike:** write a prompt that adds a new section to the landing page.  I also sell and can repair all the components that comprise a kitchen hood system. I want this written as a section of the landing page.  use the following content :  Comprehensive Kitchen Hood System Services
Keep your commercial kitchen safe, compliant, and efficient with our expert repair, sales, and installation services for all kitchen hood components. Whether you need a quick fix, a full system overhaul, or quality replacement parts, we’ve got you covered.
We service and provide both new and fully reconditioned used components, offering cost-effective solutions tailored to your budget.
The Components We Service and Sell
A fully functional kitchen hood system relies on several critical parts working in harmony. We specialize in the sales, repair, and maintenance of every single one:
Component	Function	New & Used Sales	Repair Services
Hood Canopy	The primary capture area for smoke, heat, and grease above cooking appliances.	✅ Available	✅ Offered
Exhaust Fan (Blower)	The motor unit (typically roof-mounted) that creates the necessary suction and moves air out of the building.	✅ Available	✅ Offered
Baffle Filters	The first line of defense that traps grease at the hood intake to prevent duct buildup.	✅ Available	✅ Offered
Ductwork	The vital pathway that transports contaminated air from the hood to the fan and outside the building.	✅ Available	✅ Offered
Fire Suppression System	Essential safety components designed to quickly extinguish a fire within the hood or ductwork.	✅ Available	✅ Offered
Access Panels	Crucial access points installed in the ductwork to allow for mandatory cleaning and inspection.	✅ Available	✅ Offered
Makeup Air Unit (MUA)	Replaces exhausted air to maintain proper ventilation and air pressure balance in your kitchen.	✅ Available	✅ Offered
Control Panels & Lighting	Electrical controls for fans, lighting, and general system operation.	✅ Available	✅ Offered
Why Choose Our Services?
Expert Repairs: Our certified technicians can troubleshoot and repair any component, quickly restoring your system’s functionality.
New & Used Inventory: Save money with high-quality, inspected used parts, or invest in brand-new components with full manufacturer warranties.
Compliance Guaranteed: We ensure all repairs and installations meet local fire and safety codes (NFPA 96 standards).
Rapid Response: We understand that a broken hood can shut down your business. We offer prompt, reliable service to get you back to cooking.
Don't let a faulty component compromise your kitchen's safety or efficiency.

**GPT:** Here’s a crisp, copy-paste **Lovable (Agent Mode)** prompt that will add a polished, token-driven section for **Comprehensive Kitchen Hood System Services** to your landing page. It keeps your red/white/blue theme, builds an accessible table + cards, and includes clear CTAs.

---

**PROMPT (paste into Lovable):**

Act as a senior frontend engineer + UX writer. Add a new landing-page section for **Comprehensive Kitchen Hood System Services**. Use our red/white/blue token theme (no hard-coded hex), AA contrast, and return **code only** (TSX/HTML + scoped CSS). Place the section **after `HowItWorks` and before `NFPACompliance`**.

### Section spec
- Wrapper:  
  ```html
  <section id="hood-system-services" aria-labelledby="hood-system-services-h2">
  ```
- Heading (H2, id=`hood-system-services-h2`): **Comprehensive Kitchen Hood System Services**
- Intro lead (2–3 sentences) using the copy below.
- Two blocks:
  1) **Overview + CTAs** (left)  
  2) **Components Table** (right on desktop; stacked on mobile)
- Below the table, render a responsive **component card grid** (2–4 columns) mirroring the table content for quick scanning on mobile.

### Copy (use verbatim where provided; tighten only for line length)
**Intro paragraphs (use as two paragraphs):**  
Keep your commercial kitchen safe, compliant, and efficient with our expert repair, sales, and installation services for all kitchen hood components. Whether you need a quick fix, a full system overhaul, or quality replacement parts, we’ve got you covered.  
We service and provide both new and fully reconditioned used components, offering cost-effective solutions tailored to your budget.

**Subheading:** The Components We Service and Sell

**Table rows (exact content):**
- **Hood Canopy** — The primary capture area for smoke, heat, and grease above cooking appliances. — ✅ Available — ✅ Offered  
- **Exhaust Fan (Blower)** — The motor unit (typically roof-mounted) that creates the necessary suction and moves air out of the building. — ✅ Available — ✅ Offered  
- **Baffle Filters** — The first line of defense that traps grease at the hood intake to prevent duct buildup. — ✅ Available — ✅ Offered  
- **Ductwork** — The vital pathway that transports contaminated air from the hood to the fan and outside the building. — ✅ Available — ✅ Offered  
- **Fire Suppression System** — Essential safety components designed to quickly extinguish a fire within the hood or ductwork. — ✅ Available — ✅ Offered  
- **Access Panels** — Crucial access points installed in the ductwork to allow for mandatory cleaning and inspection. — ✅ Available — ✅ Offered  
- **Makeup Air Unit (MUA)** — Replaces exhausted air to maintain proper ventilation and air pressure balance in your kitchen. — ✅ Available — ✅ Offered  
- **Control Panels & Lighting** — Electrical controls for fans, lighting, and general system operation. — ✅ Available — ✅ Offered

**Why Choose Our Services?** (bullet list under the cards)
- **Expert Repairs:** Our certified technicians can troubleshoot and repair any component, quickly restoring your system’s functionality.  
- **New & Used Inventory:** Save money with high-quality, inspected used parts, or invest in brand-new components with full manufacturer warranties.  
- **Compliance Guaranteed:** We ensure all repairs and installations meet local fire and safety codes (NFPA 96 standards).  
- **Rapid Response:** We understand that a broken hood can shut down your business. We offer prompt, reliable service to get you back to cooking.

**Closing line:** Don’t let a faulty component compromise your kitchen’s safety or efficiency.

**CTAs:**  
- Primary: **Get Parts or Schedule Repair** → `https://calendly.com/michael-simplythebestdigital/30min` (target `_blank`, rel `noopener`)  
- Secondary (ghost): **Request a Quote** → `/contact`

### Markup & behavior
- **Table (accessible)**:  
  ```html
  <table aria-describedby="hood-system-services-h2">
    <thead>
      <tr><th scope="col">Component</th><th scope="col">Function</th><th scope="col">New & Used Sales</th><th scope="col">Repair Services</th></tr>
    </thead>
    <tbody>…rows…</tbody>
  </table>
  ```
  - Add `sr-only` captions for mobile and allow horizontal scroll on narrow screens.
- **Cards**: One card per component with name, 1–2 sentence function, two badges (Sales / Repair). Cards link (optional) to `/contact?component=<slug>`.
- Smooth scroll from card “Request” links to top CTAs or contact section if present.

### Styling (tokens only)
- Section bg: `var(--bg-alt)`; inner cards: `var(--brand-white)`; borders `var(--line-200)`; shadow `var(--shadow-md)`; radius `var(--radius-card)`.
- Headings: `var(--ink-900)`; body: `var(--ink-700)`; links `var(--link)`/`var(--link-hover)`.
- Primary button uses `--btn-primary-*`; secondary uses `--btn-secondary-*`.
- Table:
  - Header row bg: `rgba(14,58,138,0.06)` (derive from `--brand-blue`)  
  - Zebra rows using a subtle `rgba(11,18,32,0.025)`; maintain AA contrast.
  - Cell padding responsive; wrap long text; `word-break: break-word`.
- Badges: compact pill style with token colors (blue for Sales, red for Repair).

### Accessibility
- Logical heading hierarchy (H2 section, H3 “The Components We Service and Sell”, H3 “Why Choose Our Services?”).  
- Table uses `<th scope="col">` and readable header contrast.  
- Buttons/links have visible focus rings: `outline: 2px solid var(--brand-blue); outline-offset: 3px;`.  
- Icons (if used on badges) are `aria-hidden="true"`.

### Deliverables
- Component code (e.g., `HoodSystemServices.tsx`) + scoped CSS (or module).  
- No unrelated edits; **return code only**.  
- Ensure it compiles within existing stack (no new packages). Execute now.

**Mike:** write a prompt that will generate the "services" page.   Mr. Expert Repair cleans and inspects Kitchen Hood systems.  (search the web for info about cleaning and repairing hoods and use this for content). We also repair the kitchen hood and can provide any component of the system if needed.  We respond within 24 hours and will take any job in the state of Florida.

**GPT:** Here’s a copy-paste **Lovable (Agent Mode)** prompt to generate a polished **Services** page for **Mr. Expert Repair**. It instructs Lovable to research authoritative sources for copy, use your red/white/blue tokens, and return production-ready code only.

---

**PROMPT (paste into Lovable):**

Act as a senior web builder + UX writer. Create a new page **/services** for **Mr. Expert Repair**. Use our **red/white/blue (patriot)** token theme (no hard-coded hex) and AA contrast. **Return code only** (TSX/HTML + scoped CSS; minimal inline JS if needed).

### 0) Research (summarize into original copy)
Before writing, do a brief web scan of **authoritative sources** (NFPA 96 references, fire safety departments, reputable hood-cleaning providers, IKECA guidance) for best practices on **cleaning, inspections, repairs, and components** of commercial kitchen hood systems. Synthesize into **original** clear copy (no quotes, no brand names, no plagiarism). Tone: professional, practical, confidence-building.

### 1) Page structure
- Wrapper: `<main id="services">`
- Hero block (top):  
  - H1: “Kitchen Hood Cleaning, Inspections & Repairs”  
  - Subhead: “Statewide Florida • 24-hour response • New and reconditioned parts available”  
  - Primary CTA: “Book Service Now” → `https://calendly.com/michael-simplythebestdigital/30min` (target `_blank`, rel `noopener`)  
  - Secondary CTA (ghost): “Request a Quote” → `/contact`
- Sticky local nav (anchors): Cleaning • Inspections • Repairs • Components • Coverage & Response • FAQs

### 2) Sections (content + layout)
**A) Cleaning** (`#cleaning`)  
- 2–3 paragraphs: scope (hood, plenum, ductwork, fan), degreasing to **bare-metal standard** where required, typical cadence (based on usage), mess containment, pre/post documentation.  
- 3-item highlights list (e.g., “Bare-metal where required”, “Photo reports”, “After-hours scheduling”).

**B) Inspections** (`#inspections`)  
- 2–3 paragraphs: inspection scope, NFPA 96 cadence guidance (monthly to annual, depending on use), what inspectors check (accessibility, baffles, fan hinges, grease containment), documentation left on site (sticker + report).  
- Small “What to expect” checklist.

**C) Repairs** (`#repairs`)  
- 2–3 paragraphs: common faults and fixes (fan motors/belts, bearings, vibration, duct integrity, canopy alignment, access panel installs, control/lighting issues), **code-compliant** remediation, parts sourcing, warranty notes.  
- “Emergency & priority service” note with 24-hour response commitment.

**D) Components (Sales & Replacement)** (`#components`)  
Responsive table + cards summarizing the components you **sell (new & reconditioned)** and **repair**:  
- Hood Canopy, Exhaust Fan (Blower), Baffle Filters, Ductwork, Fire Suppression System (note: coordinate with licensed suppression vendor where required), Access Panels, Makeup Air Unit (MUA), Control Panels & Lighting.  
Table columns: Component • Function • New/Used Sales • Repair.  
Cards mirror the table for mobile (badges: “Sales”, “Repair”). Each card has a small “Request Part/Service” link → `/contact?component=<slug>`.

**E) Coverage & Response** (`#coverage`)  
- Copy block: “We take **any job in the State of Florida** with **24-hour response**. Tri-County core service (Miami-Dade, Broward, Palm Beach) plus West Coast (e.g., Sarasota), Central Florida (Orlando), and Panhandle (Tallahassee, Pensacola).”  
- Optional mini map (static image or Leaflet if already included elsewhere).  
- Bullet list of service windows (overnight/Sun–Mon available), documentation delivery (email within 24 hrs).

**F) FAQs** (`#faqs`)  
5–7 items covering: scheduling windows, downtime, mess containment, roof grease/containment boxes, before/after photos, certification/insurance, transparent pricing (scope-based).

**Bottom CTA bar** (sticky or footer): “Book Service Now” + “Request a Quote”.

### 3) Styling (tokens only)
- Backgrounds: `var(--bg)`, section alternates `var(--bg-alt)`.  
- Cards: `background: var(--brand-white)`, `border: 1px solid var(--line-200)`, `border-radius: var(--radius-card)`, `box-shadow: var(--shadow-md)`.  
- Headings: `var(--ink-900)`; body: `var(--ink-700)`; links: `var(--link) / var(--link-hover)`.  
- Buttons: primary → `--btn-primary-*`; secondary → `--btn-secondary-*`.  
- Tables: sticky header, zebra rows (subtle), horizontal scroll on small screens.

### 4) Accessibility
- Landmarks: `<main>`, section headings with `aria-labelledby`.  
- Anchor nav uses in-page links with `aria-current="true"` for active section on scroll.  
- Focus rings visible (`outline: 2px solid var(--brand-blue); outline-offset: 2px`).  
- Images/icons `aria-hidden="true"` unless meaningful.  
- Tables: `<th scope="col">`, caption (sr-only) for screen readers.

### 5) Behavior
- Smooth scroll for local nav.  
- Optional accordions for FAQs (native `<details>`/`<summary>`).  
- Form links scroll to `/contact` or open Calendly in new tab.

### 6) Deliverables
- New page component (e.g., `Services.tsx`) + scoped CSS (module or page CSS).  
- Update routing/nav to include **Services** pointing to `/services`.  
- **Code only**—no commentary or external packages.  
- Ensure it compiles in the existing stack and inherits the global token theme.

**Mike:** write a prompt that puts the navigation bar on the following pages (Services , Photos, Contact) so its easy to navigate back to the home page. place the "Mr. Expert Repair" logo on each of these pages also. create a hyperlink for the Logo so it links back to the home page.

**GPT:** Here’s a clean, copy-paste **Lovable (Agent Mode)** prompt to add a reusable navigation bar on **Services**, **Photos**, and **Contact** pages—with the **Mr. Expert Repair** logo shown on each page and hyperlinked back to the homepage.

---

**PROMPT (paste into Lovable):**

Act as a senior frontend engineer. Add a shared, responsive **Header/Nav** to the following pages so users can easily navigate back to Home: **/services**, **/photos**, **/contact**. Use our red/white/blue token theme (no hard-coded hex). **Return code only** (updated components + CSS).

### Requirements
1) **Reusable Header component**
- If not already present, create/update a shared `Header` (or `SiteHeader`) used by Home and import it on **Services**, **Photos**, **Contact**.
- Left: **Mr. Expert Repair** logo (SVG/PNG) wrapped in a link to `/`  
  - `href="/"`  
  - `aria-label="Mr. Expert Repair — Home"`  
  - `alt="Mr. Expert Repair — Kitchen Hood Repairs & Inspections"`  
  - Intrinsic `width`/`height` and CSS height (e.g., 56–64px desktop, 40–48px mobile) using tokens; `object-fit: contain`.
- Right: primary nav links to `Home`, `Services`, `Photos`, `Contact`.  
  - Use `<NavLink>` or `<a>` with active state.  
  - Mobile: collapse to a hamburger/toggle if the pattern already exists; otherwise a simple stacked menu is fine.

2) **Styling (tokens only)**
- Header bg: `var(--bg)`; border/bottom: `1px solid var(--line-200)`; shadow optional `var(--shadow-md)`.  
- Links: `color: var(--ink-900)`; hover `var(--link-hover)`; active/selected: underline or tokenized pill background (`rgba(14,58,138,.08)`).  
- Focus ring for keyboard nav: `outline: 2px solid var(--brand-blue); outline-offset: 3px;`.  
- Spacing: use token spacing; ensure hit areas ≥44×44px.

3) **Accessibility**
- `<header role="banner">` with `<nav aria-label="Primary">`.  
- Current page link uses `aria-current="page"`.  
- Menu button (if used) is a `<button aria-expanded="[true|false]" aria-controls="primary-nav">`.

4) **Pages to update**
- **/services**: import `Header` at top; ensure main content starts after header.  
- **/photos**: import `Header`; the Photos gallery/grid should sit under the header.  
- **/contact**: import `Header`; ensure calendar or map elements don’t overlap the header (add top padding if sticky).

5) **Routing**
- Ensure nav links route correctly:  
  - **Home** → `/`  
  - **Services** → `/services`  
  - **Photos** → `/photos`  
  - **Contact** → `/contact`

6) **Deliverables**
- Updated `Header` (or new shared header component) and its CSS/module.  
- Updated **Services**, **Photos**, **Contact** pages to render the header.  
- Active state styles for the current route.  
- **Code only**—no commentary.

**Execute now.**

**Mike:** write a prompt that :   does not fix the nav bar to the header.

**GPT:** Here’s a tight, copy-paste **Lovable (Agent Mode)** prompt that makes the nav **non-fixed** (not sticky) across all pages and cleans up any related spacing/JS.

---

**PROMPT (paste into Lovable):**

Act as a senior frontend engineer. **Make the site header/nav non-fixed (not sticky) everywhere.** Return **code only** (updated components + CSS).

### Required changes
1) **Header/Nav positioning**
- In the shared header component (e.g., `Header` / `SiteHeader`) and any page-local headers:
  - **Remove** any `position: fixed` or `position: sticky` (including Tailwind classes like `fixed`, `sticky`, `top-0`, `z-*`).
  - Set the container to **normal document flow**:
    ```css
    .site-header { position: static; inset: auto; z-index: auto; }
    ```
  - Ensure the header wrapper uses standard layout (flex/grid) without absolute positioning.

2) **Global/page CSS cleanup**
- **Delete** any global `body`/`main` top padding/margin that was compensating for a fixed header (e.g., `padding-top: 72px;`).
- Verify first section below the header has appropriate spacing (e.g., `margin-top: 0;` in hero). Use token spacing instead.

3) **JS/behavior**
- **Remove** any scroll listeners or “shrink on scroll” logic tied to sticky/fixed headers.
- Remove classes toggled on scroll (e.g., `is-stuck`, `scrolled`) if they only existed for sticky behavior.

4) **Accessibility**
- Keep semantic structure:
  - `<header role="banner">` → `<nav aria-label="Primary">` inside.
  - Maintain focus rings on links/buttons (tokens):
    ```css
    :where(a,button):focus { outline: 2px solid var(--brand-blue); outline-offset: 3px; }
    ```

5) **Pages to verify**
- **Home**, **/services**, **/photos**, **/contact** all render the non-fixed header at top, followed by content with clean spacing (no overlap).

### Deliverables
- Updated header component + CSS (or module) with **non-fixed** positioning.
- Removal of any sticky/fixed utilities and compensating paddings.
- No other visual regressions; **code only**. Execute now.

**Mike:** write a prompt that employs a "looped video background" on the home page. the loop video should be a short video moving from day break to night that depicts downtown Miami.

**GPT:** Here’s a copy-paste **Lovable (Agent Mode)** prompt to add a looped **day-to-night Miami** video background on the **home page** with proper fallbacks, performance, and accessibility.

---

**PROMPT (paste into Lovable):**

Act as a senior frontend engineer. Add a **looped video background** to the **home page hero** that depicts **downtown Miami transitioning from daybreak to night**. Use our red/white/blue token theme and AA contrast. **Return code only** (updated Hero component + scoped CSS; minimal utility code if needed).

### 0) Assets & placement
- Create a `/public/media/hero/` folder (or project equivalent) and expect these files (add stubs if missing):
  - `miami-day2night.mp4` (H.264, ~8–20s, 1080p max)
  - `miami-day2night.webm` (VP9 or AV1)
  - `miami-day2night-poster.jpg` (high-quality still)
- Place the video **behind** the hero content as a full-bleed background.

### 1) Markup (Hero)
Wrap the hero in a relative container and add a background `<video>` layer:

```html
<section id="hero" class="hero" aria-labelledby="hero-h1">
  <div class="hero__bg" aria-hidden="true">
    <video
      class="hero__video"
      poster="/media/hero/miami-day2night-poster.jpg"
      autoplay
      muted
      playsinline
      loop
      preload="metadata"
    >
      <source src="/media/hero/miami-day2night.webm" type="video/webm" />
      <source src="/media/hero/miami-day2night.mp4" type="video/mp4" />
      <!-- Fallback image for very old browsers -->
      <img src="/media/hero/miami-day2night-poster.jpg" alt="" aria-hidden="true" />
    </video>
    <div class="hero__overlay"></div>
  </div>

  <div class="hero__content">
    <h1 id="hero-h1">NFPA Certified Hood Repairs, Inspections & Cleaning</h1>
    <p class="hero__sub">Florida-wide service • 24-hour response • New & reconditioned parts available</p>
    <div class="hero__cta">
      <a class="btn btn--primary" href="https://calendly.com/michael-simplythebestdigital/30min" target="_blank" rel="noopener">Book Now</a>
      <a class="btn btn--secondary" href="/contact">Request an Estimate</a>
    </div>
  </div>
</section>
```

### 2) Styling (tokens only; no hard-coded hex)
Create/extend a CSS module or scoped stylesheet for the hero:

```css
.hero {
  position: relative;
  isolation: isolate;
  min-height: clamp(72vh, 88vh, 96vh);
  display: grid;
  align-items: center;
  padding-inline: clamp(16px, 4vw, 48px);
  padding-block: clamp(48px, 8vh, 96px);
  color: var(--brand-white);
}

.hero__bg {
  position: absolute;
  inset: 0;
  z-index: -1;
  overflow: hidden;
  background: var(--bg-alt);
}

.hero__video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* cover the viewport */
  filter: saturate(1.05) contrast(1.05);
  transform: translateZ(0);
}

.hero__overlay {
  position: absolute;
  inset: 0;
  /* Top-to-bottom gradient for legibility (blue/red theme mix) */
  background:
    linear-gradient(180deg, rgba(11,18,32,0.50) 0%, rgba(11,18,32,0.30) 35%, rgba(11,18,32,0.50) 100%),
    radial-gradient(60% 60% at 50% 20%, rgba(14,58,138,0.25), transparent 60%),
    radial-gradient(50% 50% at 80% 80%, rgba(200,30,30,0.18), transparent 70%);
  pointer-events: none;
}

.hero__content {
  max-width: 960px;
  z-index: 1;
}

.hero__sub {
  color: var(--ink-100);
  opacity: 0.92;
  margin-block: 12px 24px;
}

.hero__cta {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.btn.btn--primary {
  background: var(--btn-primary-bg);
  color: var(--btn-primary-fg);
  border: none;
  padding: 12px 20px;
  border-radius: var(--radius-card);
  box-shadow: var(--shadow-md);
}
.btn.btn--primary:hover { background: var(--btn-primary-bg-hover); }

.btn.btn--secondary {
  background: var(--btn-secondary-bg);
  color: var(--btn-secondary-fg);
  border: 1px solid var(--btn-secondary-border);
  padding: 12px 20px;
  border-radius: var(--radius-card);
}
.btn.btn--secondary:hover { background: var(--btn-secondary-bg-hover); }

/* Respect reduced motion */
@media (prefers-reduced-motion: reduce) {
  .hero__video { display: none; }
  .hero__bg { background: var(--bg-hero); }
}

/* Mobile optimization: use poster image on very small devices */
@media (max-width: 480px) {
  .hero__video { display: none; }
  .hero__bg { background: url('/media/hero/miami-day2night-poster.jpg') center/cover no-repeat; }
}
```

### 3) Performance & playback rules
- **Autoplay requirements:** keep `muted playsinline autoplay loop` on the `<video>` element.
- Keep `preload="metadata"` to limit bandwidth; the browser will start loading once visible.
- Optimize video files (trim to 8–20 seconds, ~1080p, reasonable bitrate).
- Provide both **WebM** and **MP4** sources; browsers will choose best.
- Ensure the **poster** shows a sharp Miami frame (dawn/dusk skyline).
- Do **not** fix the header; the video should scroll out with the hero.

### 4) Accessibility
- The video is decorative: set the entire background layer `aria-hidden="true"`, and ensure all text content sits in the foreground with adequate contrast (overlay provides legibility).
- Maintain keyboard focus styles on CTAs:  
  ```css
  :where(a,button):focus { outline: 2px solid var(--brand-blue); outline-offset: 3px; }
  ```

### 5) Deliverables
- Updated **Hero** component with the background video markup.
- Scoped CSS as shown (module or page stylesheet).
- Creation of the `/public/media/hero/` asset paths.
- No commentary; **return code only**.

**Execute now.**

**Mike:** how do I get the video of downtown Miami ?

**GPT:** Great question! Here’s the fastest, cleanest way to source a loopable **day-to-night downtown Miami** clip and get it into your Lovable hero.

# Where to get the footage
**Free (royalty-free, commercial-use):**
- Pexels Video, Pixabay, Videvo, Coverr  
  Search terms: `Miami skyline timelapse`, `downtown Miami dusk to night`, `Brickell time lapse`, `Biscayne Bay skyline night`, `Miami drone sunset`.

**Paid / premium (huge selection, easy licensing):**
- Artgrid, Shutterstock, Adobe Stock, Pond5  
  Search terms: same as above + `“time-lapse”`, `“hyperlapse”`, `“dusk”`, `“blue hour”`, `“nightfall”`.

**Tips when choosing:**
- Aim for **10–20s** duration, **4K or 1080p**, landscape (16:9).
- Prefer clips with **steady tripod or smooth timelapse**; minimal camera moves loop better.
- Look for footage with **consistent exposure** (fewer flickers) for a clean loop.

# License checklist (quick)
- Confirm **commercial use allowed** (most above are OK; Artgrid/Shutterstock always OK).
- If a clip shows **recognizable people** (rare for skylines), ensure model releases or pick a clip without people.
- Drone clips: the creator handled airspace rules—you’re fine to use as licensed.

# Make it loop seamlessly (2 quick methods—no fancy tools needed)
**Option A: Trim to a natural cycle**
1) Import into **CapCut (free)** or **DaVinci Resolve (free)**.  
2) Find a start & end frame with similar brightness/sky color; trim to **~12–15s**.

**Option B: Cross-fade loop (perfect loop)**
1) Duplicate the clip back-to-back on the timeline.  
2) Add a **1–2s crossfade** at the junction.  
3) Export just the first clip’s duration—now it loops smoothly.

**Export settings**
- MP4 (H.264), 1080p, 20–30 Mbps.
- Also export WebM (VP9) for better Chrome performance (optional but nice).
- Grab a **poster image**: export a single JPEG frame around “blue hour”.

**Optional compression**
- Use **HandBrake** to reduce size: H.264 `RF 20–22`, WebM `CRF ~24`. Try to keep files **<15–25 MB**.

# Put it into Lovable
1) Name files:  
   - `/public/media/hero/miami-day2night.mp4`  
   - `/public/media/hero/miami-day2night.webm` (optional)  
   - `/public/media/hero/miami-day2night-poster.jpg`
2) Use the hero markup we set earlier. Make sure the `<video>` tag has:  
   `autoplay muted playsinline loop preload="metadata"` and the `poster` attribute.
3) Test on mobile (some phones block autoplay with sound—**muted** is required).

# If you want me to pick a clip
Tell me: **free vs paid**, preferred **length (10–20s)**, and **mood** (sunrise → day, golden hour → night). I’ll suggest exact search results + filenames to grab and the ideal trim points for a perfect loop.

**Mike:** free. 10-20s , sunrise → day.  find the clip already edited if possible.

**GPT:** Got it—free, 10–20s, sunrise → day, and already timelapse-edited if possible. Your best bets:

**Where to grab it (free, commercial-use)**
- **Pexels** – search: `miami sunrise timelapse`, `downtown miami timelapse`, `brickell sunrise`. Filter by **Video** and check durations 10–20s. citeturn0search3turn0search0  
- **Pixabay** – search: `miami sunrise`, `miami beach sunrise timelapse`, then filter by **Time lapse** and duration 10–20s. (Lots of Florida sunrise timelapses; pick one clearly showing downtown/Brickell.) citeturn1search0turn0search7  
- **Vecteezy** (also free tier) – search: `Miami sunrise timelapse` or `Miami skyline sunrise`. citeturn0search8

**How to pick the right clip (60-second check)**
1) **City is identifiable** (Brickell/downtown skyline or Biscayne Bay bridges), not just generic beach.
2) **Duration 10–20s** and already marked as **time-lapse** (no handheld jitter).
3) **Exposure stable** (minimal flicker) so it loops cleanly.
4) License shows **free for commercial use** (Pexels/Pixabay assets are OK—no attribution required, but verify on the clip page). citeturn0search3turn1search0

**Quick loop trick (if the clip isn’t seamless)**
- Drop into **CapCut** or **DaVinci Resolve** → duplicate the clip → add a **1–1.5s crossfade** at the join → export **1080p H.264 (MP4)**. Also export **WebM** if you want smaller Chrome loads.

**Plug into Lovable (after download)**
1) Put files in your project (e.g., `/public/media/hero/miami-day2night.mp4` and optional `.webm`, plus a poster `.jpg`).  
2) Use the `<video autoplay muted playsinline loop poster="...">` markup we set earlier.  
3) Keep `preload="metadata"` and the gradient overlay for legibility.

If you want, I can shortlist **specific Pexels/Pixabay clips** that match exactly (10–20s, skyline, sunrise→day). Say the word and I’ll give you 3–5 direct picks.

**Mike:** do not write this prompt for Lovable.  execute it yourself and find the loopable video first.  search the web.

**GPT:** Here’s what I found that’s (a) free to use commercially and (b) closest to your spec (10–20s, Miami skyline, already timelapse-edited). Exact **sunrise → day** of *Downtown* Miami is scarce in free libraries; **day→night** and generic “city sunrise” are far more common. Best viable picks:

1) **Miami skyline hyperlapse (day → night)** – clean, already edited, looks downtown/Brickell  
Pexels: “Day to Night Hyperlapse of Miami.” This is crisp and loops well with a 1–1.5s crossfade if needed. citeturn2search0

2) **Miami skyline timelapse at twilight** – reads clearly as Miami waterfront; good 10–20s hero background option  
Pexels: “Time Lapse Video of a City” (Miami skyline/twilight). citeturn2search2

3) **Miami Beach sunrise timelapse** – true sunrise; not strictly “downtown,” but free, on-brand vibe for South Florida  
Vecteezy: “Sunrise at Miami Beach. Time Lapse” (multiple resolutions). Note: Vecteezy mixes free and “Pro” assets—check the license card on the clip you pick. citeturn0search18

If you want me to keep **digging specifically for sunrise→day over downtown/Brickell, 10–20s, free**, say the word and I’ll hunt deeper. Otherwise, I recommend we use #1 or #2 (they read unmistakably as *Miami skyline*), then set up a seamless loop (duplicate the clip end-to-end and add a 1–1.5s crossfade at the seam), export MP4/WebM, and drop it into your hero exactly as we outlined.

**Mike:** great! I downloaded it.  what do you need from me to use this as the looped video on the home page ?

**GPT:** Awesome. I just need 3 things from you to wire it up cleanly:

1) **File paths (or filenames)**
- MP4: `/public/media/hero/miami-day2night.mp4`
- (Optional) WEBM: `/public/media/hero/miami-day2night.webm`
- Poster image (JPG): `/public/media/hero/miami-day2night-poster.jpg`
If you used different names/locations, just tell me the exact paths.

2) **Overlay preference**  
Pick one so the text stays readable on top of the video:
- light / **medium** (recommended) / dark

3) **Mobile behavior**  
Choose one:
- **Poster on very small screens** (faster)  
- Play video on all screens

Once you give me those (paths + overlay + mobile choice), I’ll drop in the video background code for the hero and you’re done. If you want, I can also:
- generate a poster frame recommendation,
- add a seamless crossfade loop setting,
- compress/target sizes (<20–25 MB total) guidance.

**Mike:** C:\Users\Dell\Downloads\MiamiSkyLineLooped

**GPT:** Perfect—thanks! Quick heads-up: that path is on your Windows machine, so the site can’t read it directly. Here’s exactly how to get it live on the homepage hero.

# 1) Put the files in your project
- Rename (optional but tidy):  
  - `MiamiSkyLineLooped.mp4` → `miami-day2night.mp4`
- In your project, create (if needed): `/public/media/hero/`
- Upload the file there so it’s served at:  
  `/media/hero/miami-day2night.mp4`

# 2) (Optional but recommended) Add a poster + WebM
- **Poster frame (JPEG):** grab a nice mid-brightness frame.
  - With VLC: play → Video → Take Snapshot.
  - With ffmpeg:  
    `ffmpeg -ss 00:00:05 -i MiamiSkyLineLooped.mp4 -frames:v 1 -q:v 2 miami-day2night-poster.jpg`
  - Save to `/public/media/hero/miami-day2night-poster.jpg`
- **WebM version (smaller for Chrome):**  
  `ffmpeg -i MiamiSkyLineLooped.mp4 -c:v libvpx-vp9 -b:v 0 -crf 32 -an miami-day2night.webm`  
  Save to `/public/media/hero/miami-day2night.webm`

# 3) Drop this into your Hero component (background video)
```html
<section id="hero" class="hero" aria-labelledby="hero-h1">
  <div class="hero__bg" aria-hidden="true">
    <video
      class="hero__video"
      poster="/media/hero/miami-day2night-poster.jpg"
      autoplay
      muted
      playsinline
      loop
      preload="metadata"
    >
      <source src="/media/hero/miami-day2night.webm" type="video/webm" />
      <source src="/media/hero/miami-day2night.mp4" type="video/mp4" />
      <img src="/media/hero/miami-day2night-poster.jpg" alt="" aria-hidden="true" />
    </video>
    <div class="hero__overlay"></div>
  </div>

  <div class="hero__content">
    <h1 id="hero-h1">NFPA Certified Hood Repairs, Inspections & Cleaning</h1>
    <p class="hero__sub">Florida-wide service • 24-hour response • New & reconditioned parts available</p>
    <div class="hero__cta">
      <a class="btn btn--primary" href="https://calendly.com/michael-simplythebestdigital/30min" target="_blank" rel="noopener">Book Now</a>
      <a class="btn btn--secondary" href="/contact">Request an Estimate</a>
    </div>
  </div>
</section>
```

# 4) Add these styles (tokens, no hard-coded colors)
```css
.hero { position: relative; isolation: isolate; min-height: clamp(72vh, 88vh, 96vh);
  display: grid; align-items: center; padding: clamp(48px, 8vh, 96px) clamp(16px, 4vw, 48px);
  color: var(--brand-white);
}
.hero__bg { position: absolute; inset: 0; z-index: -1; overflow: hidden; background: var(--bg-alt); }
.hero__video { position: absolute; inset: 0; width:100%; height:100%; object-fit: cover; }
.hero__overlay { position:absolute; inset:0;
  background:
    linear-gradient(180deg, rgba(11,18,32,.50) 0%, rgba(11,18,32,.30) 35%, rgba(11,18,32,.50) 100%),
    radial-gradient(60% 60% at 50% 20%, rgba(14,58,138,.25), transparent 60%),
    radial-gradient(50% 50% at 80% 80%, rgba(200,30,30,.18), transparent 70%);
  pointer-events:none;
}
.hero__content { max-width: 960px; z-index: 1; }
.hero__sub { color: var(--ink-100); opacity:.92; margin: 12px 0 24px; }
.btn.btn--primary { background: var(--btn-primary-bg); color: var(--btn-primary-fg);
  border:none; padding:12px 20px; border-radius: var(--radius-card); box-shadow: var(--shadow-md);
}
.btn.btn--primary:hover { background: var(--btn-primary-bg-hover); }
.btn.btn--secondary { background: var(--btn-secondary-bg); color: var(--btn-secondary-fg);
  border:1px solid var(--btn-secondary-border); padding:12px 20px; border-radius: var(--radius-card);
}
.btn.btn--secondary:hover { background: var(--btn-secondary-bg-hover); }
@media (prefers-reduced-motion: reduce){ .hero__video{display:none;} .hero__bg{background:var(--bg-hero);} }
@media (max-width:480px){ .hero__video{display:none;} .hero__bg{background:url('/media/hero/miami-day2night-poster.jpg') center/cover no-repeat;} }
```

# 5) Quick checks
- File actually resolves in browser at `/media/hero/miami-day2night.mp4`.
- Video is **muted** (required for autoplay on mobile).
- Poster shows while the video buffers.
- Text remains readable (overlay in place).
- Total video size ideally **<25 MB**; if bigger, run through HandBrake (H.264, RF ~20–22) or use the WebM.

If you want, send me the **exact filenames** you uploaded in `/public/media/hero/`, and I’ll tailor the snippet to match them 1:1.

**Mike:** I uploaded the file into the Lovable chat.  update the prompt accordingly.  the file name is : miami-day2night.mp4

**GPT:** Perfect—here’s a copy-paste **Lovable (Agent Mode)** prompt updated to use your **uploaded file `miami-day2night.mp4`** as the looped hero background.

---

**PROMPT (paste into Lovable):**

Act as a senior frontend engineer. Use the **uploaded video file** named **`miami-day2night.mp4`** as the **looped hero background** on the home page. Move/copy it into the project at **`/public/media/hero/miami-day2night.mp4`** and wire it into the Hero. Keep AA contrast and our red/white/blue token theme. **Return code only** (updated Hero component + scoped CSS; create the poster image if supported).

### 1) Assets
- Use the uploaded file: **`miami-day2night.mp4`**.
- Place it at: **`/public/media/hero/miami-day2night.mp4`**.
- If supported, **generate a poster** from ~5s into the clip and save to:  
  **`/public/media/hero/miami-day2night-poster.jpg`** (fallback: omit `poster` attribute if not generated).

### 2) Hero markup (background video)
Insert/update the hero to use a background `<video>` layer behind content:

```html
<section id="hero" class="hero" aria-labelledby="hero-h1">
  <div class="hero__bg" aria-hidden="true">
    <video
      class="hero__video"
      <!-- If a poster is generated, keep this line; otherwise remove it -->
      poster="/media/hero/miami-day2night-poster.jpg"
      autoplay
      muted
      playsinline
      loop
      preload="metadata"
    >
      <source src="/media/hero/miami-day2night.mp4" type="video/mp4" />
      <!-- Fallback image for very old browsers -->
      <img src="/media/hero/miami-day2night-poster.jpg" alt="" aria-hidden="true" />
    </video>
    <div class="hero__overlay"></div>
  </div>

  <div class="hero__content">
    <h1 id="hero-h1">NFPA Certified Hood Repairs, Inspections &amp; Cleaning</h1>
    <p class="hero__sub">Florida-wide service • 24-hour response • New &amp; reconditioned parts available</p>
    <div class="hero__cta">
      <a class="btn btn--primary" href="https://calendly.com/michael-simplythebestdigital/30min" target="_blank" rel="noopener">Book Now</a>
      <a class="btn btn--secondary" href="/contact">Request an Estimate</a>
    </div>
  </div>
</section>
```

### 3) Scoped CSS (tokens only; no hard-coded hex)
```css
.hero {
  position: relative;
  isolation: isolate;
  min-height: clamp(72vh, 88vh, 96vh);
  display: grid;
  align-items: center;
  padding-inline: clamp(16px, 4vw, 48px);
  padding-block: clamp(48px, 8vh, 96px);
  color: var(--brand-white);
}

.hero__bg {
  position: absolute;
  inset: 0;
  z-index: -1;
  overflow: hidden;
  background: var(--bg-alt);
}

.hero__video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: saturate(1.05) contrast(1.05);
  transform: translateZ(0);
}

.hero__overlay {
  position: absolute;
  inset: 0;
  /* Gradient overlay for legibility */
  background:
    linear-gradient(180deg, rgba(11,18,32,0.50) 0%, rgba(11,18,32,0.30) 35%, rgba(11,18,32,0.50) 100%),
    radial-gradient(60% 60% at 50% 20%, rgba(14,58,138,0.25), transparent 60%),
    radial-gradient(50% 50% at 80% 80%, rgba(200,30,30,0.18), transparent 70%);
  pointer-events: none;
}

.hero__content { max-width: 960px; z-index: 1; }
.hero__sub { color: var(--ink-100); opacity: 0.92; margin-block: 12px 24px; }

.hero__cta { display: flex; gap: 12px; flex-wrap: wrap; }

.btn.btn--primary {
  background: var(--btn-primary-bg);
  color: var(--btn-primary-fg);
  border: none;
  padding: 12px 20px;
  border-radius: var(--radius-card);
  box-shadow: var(--shadow-md);
}
.btn.btn--primary:hover { background: var(--btn-primary-bg-hover); }

.btn.btn--secondary {
  background: var(--btn-secondary-bg);
  color: var(--btn-secondary-fg);
  border: 1px solid var(--btn-secondary-border);
  padding: 12px 20px;
  border-radius: var(--radius-card);
}
.btn.btn--secondary:hover { background: var(--btn-secondary-bg-hover); }

/* Reduce motion: show static background */
@media (prefers-reduced-motion: reduce) {
  .hero__video { display: none; }
  .hero__bg { background: var(--bg-hero); }
}

/* Very small screens: use poster to save bandwidth */
@media (max-width: 480px) {
  .hero__video { display: none; }
  .hero__bg { background: url('/media/hero/miami-day2night-poster.jpg') center/cover no-repeat; }
}
```

### 4) Behavior & a11y
- Keep `autoplay muted playsinline loop` for mobile autoplay.
- Background layer is decorative: `aria-hidden="true"`.
- Ensure focus ring on CTAs remains visible:
```css
:where(a,button):focus { outline: 2px solid var(--brand-blue); outline-offset: 3px; }
```

### 5) Deliverables
- Move the uploaded file to `/public/media/hero/miami-day2night.mp4`.
- If possible, generate `/public/media/hero/miami-day2night-poster.jpg` from ~5s into the video.
- Updated **Hero** component + scoped CSS; **code only**.

**Execute now.**

**Mike:** create an SVG logo of a technician cleaning a kitchen hood.

**GPT:** Here’s a clean, scalable **SVG logo** of a technician cleaning a kitchen hood (red/white/blue). You can paste it directly into HTML/React. Colors and sizes are easy to tweak via the variables at the top.

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 320" role="img" aria-labelledby="title desc">
  <title id="title">Mr. Expert Repair — Technician Cleaning a Kitchen Hood</title>
  <desc id="desc">A stylized technician with a spray wand cleaning a commercial kitchen hood canopy and duct.</desc>

  <!-- Theme (edit these to match your palette) -->
  <defs>
    <style>
      :root {}
      .ink   { stroke:#0E3A8A; }   /* brand blue */
      .hot   { stroke:#C81E1E; }   /* brand red  */
      .lite  { stroke:#FFFFFF; }   /* white      */
      .fg    { fill:#0E3A8A; }     /* blue fill  */
      .bg    { fill:#FFFFFF; }     /* white fill */
      .muted { stroke:#1F2A44; opacity:.55; }
      .thick { stroke-width:10; }
      .mid   { stroke-width:6;  }
      .thin  { stroke-width:4;  }
      .round { stroke-linecap:round; stroke-linejoin:round; }
    </style>
  </defs>

  <!-- Background shield / badge -->
  <g id="badge">
    <path class="fg" d="M320 20c56 0 110 10 160 30v48c0 86-58 164-160 202-102-38-160-116-160-202V50c50-20 104-30 160-30Z"/>
    <path class="bg" d="M320 48c49 0 96 8 140 24v28c0 74-50 141-140 174-90-33-140-100-140-174V72c44-16 91-24 140-24Z"/>
  </g>

  <!-- Hood & duct -->
  <g id="hood" class="round">
    <!-- Overhead duct -->
    <path class="ink thick" d="M120 86H520"/>
    <!-- Canopy outline -->
    <rect x="140" y="96" width="360" height="52" rx="8" class="ink thick" fill="none"/>
    <!-- Baffle filter lines -->
    <g class="muted thin">
      <line x1="170" y1="104" x2="170" y2="148"/>
      <line x1="200" y1="104" x2="200" y2="148"/>
      <line x1="230" y1="104" x2="230" y2="148"/>
      <line x1="260" y1="104" x2="260" y2="148"/>
      <line x1="290" y1="104" x2="290" y2="148"/>
      <line x1="320" y1="104" x2="320" y2="148"/>
      <line x1="350" y1="104" x2="350" y2="148"/>
      <line x1="380" y1="104" x2="380" y2="148"/>
      <line x1="410" y1="104" x2="410" y2="148"/>
      <line x1="440" y1="104" x2="440" y2="148"/>
    </g>
    <!-- Drip rail -->
    <line x1="140" y1="152" x2="500" y2="152" class="ink mid"/>
  </g>

  <!-- Technician -->
  <g id="tech" class="round" transform="translate(0,0)">
    <!-- Head (helmet/cap) -->
    <path d="M116 182c0-16 14-30 30-30s30 14 30 30v6c0 12-10 22-22 22h-16c-12 0-22-10-22-22v-6Z" class="fg"/>
    <!-- Face circle highlight -->
    <circle cx="146" cy="182" r="10" fill="#fff" opacity=".18"/>

    <!-- Torso -->
    <path d="M110 214h72c10 0 18 8 18 18v18h-108v-18c0-10 8-18 18-18Z" class="fg"/>
    <!-- Belt -->
    <line x1="92" y1="250" x2="200" y2="250" class="lite thin round"/>

    <!-- Left arm (holding wand) -->
    <path d="M182 220l40 10" class="ink mid"/>
    <circle cx="182" cy="220" r="10" class="fg"/>
    <!-- Right arm -->
    <path d="M112 220l-20 22" class="ink mid"/>
    <circle cx="112" cy="220" r="10" class="fg"/>

    <!-- Legs -->
    <path d="M120 250v42M184 250v42" class="ink thick"/>
    <!-- Boots -->
    <path d="M104 292h32M168 292h32" class="ink thick"/>
  </g>

  <!-- Wand & hose -->
  <g id="wand" class="round">
    <!-- Hose -->
    <path d="M196 230c40 22 70 28 120 18" class="ink mid"/>
    <!-- Wand body -->
    <path d="M316 246l82-20" class="hot thick"/>
    <!-- Wand tip -->
    <circle cx="400" cy="226" r="6" class="hot" fill="#C81E1E"/>
  </g>

  <!-- Spray / cleaning action -->
  <g id="spray" class="round lite">
    <line x1="404" y1="226" x2="436" y2="182" class="thin"/>
    <line x1="404" y1="226" x2="452" y2="176" class="thin"/>
    <line x1="404" y1="226" x2="472" y2="170" class="thin"/>
    <circle cx="438" cy="184" r="3" fill="#FFFFFF"/>
    <circle cx="452" cy="176" r="2.5" fill="#FFFFFF"/>
    <circle cx="468" cy="172" r="2" fill="#FFFFFF"/>
  </g>

  <!-- Tagline text (optional; remove if you want symbol-only) -->
  <g id="wordmark" font-family="Inter, Segoe UI, Arial, sans-serif" font-weight="800" text-anchor="middle">
    <text x="320" y="36" font-size="22" fill="#0E3A8A" letter-spacing=".06em">MR. EXPERT REPAIR</text>
    <text x="320" y="58" font-size="12" fill="#C81E1E" letter-spacing=".28em">KITCHEN HOOD • CLEAN • INSPECT • REPAIR</text>
  </g>
</svg>
```

### How to use
- **HTML:** paste the SVG directly where your logo goes.  
- **React:** paste into a component; JSX accepts inline SVG as-is.  
- **Size:** control via CSS on the `<svg>` (e.g., `width: 320px; height: auto;`).  
- **Colors:** change `.ink`, `.hot`, `.fg`, `.bg` values in the `<style>` block.

Want this as a **horizontal lockup**, **monochrome version**, or **favicon set**? I can generate those instantly.

**Mike:** make it photo realistic of a real person cleaning a hood

**Mike:** great!  change the name to , "Mr. Hood Repair"

**Mike:** provide the code for this logo

**GPT:** Here are drop-in code snippets to use the **“Mr. Hood Repair”** photorealistic logo image.

---

### 1) Plain HTML (responsive, accessible)
```html
<!-- Brand lockup -->
<a href="/" class="brand" aria-label="Mr. Hood Repair — Home">
  <picture>
    <!-- Optional future WebP/AVIF sources -->
    <!-- <source type="image/avif" srcset="/media/brand/mr-hood-repair.avif"> -->
    <!-- <source type="image/webp" srcset="/media/brand/mr-hood-repair.webp"> -->
    <img
      src="/mnt/data/A_promotional_photograph_photograph_for_%22MR._HOOD_.png"
      alt="Mr. Hood Repair technician cleaning a commercial kitchen hood"
      width="1536"
      height="2304"
      loading="lazy"
      decoding="async"
      class="brand__img"
    />
  </picture>
</a>

<style>
  .brand { display:inline-flex; align-items:center; text-decoration:none; }
  .brand__img {
    display:block;
    height:64px;            /* desktop header height */
    width:auto;
    object-fit:contain;
    border-radius:8px;      /* optional */
    box-shadow: 0 6px 18px rgba(0,0,0,.22); /* optional depth */
  }
  @media (max-width: 640px){ .brand__img { height:48px; } }
</style>
```

---

### 2) React/TypeScript (e.g., in `Header.tsx`)
```tsx
export default function BrandLogo() {
  return (
    <a href="/" aria-label="Mr. Hood Repair — Home" className="inline-flex items-center">
      <img
        src="/mnt/data/A_promotional_photograph_photograph_for_%22MR._HOOD_.png"
        alt="Mr. Hood Repair technician cleaning a commercial kitchen hood"
        width={1536}
        height={2304}
        loading="lazy"
        decoding="async"
        style={{ height: 64, width: "auto", objectFit: "contain", borderRadius: 8 }}
      />
    </a>
  );
}
```

---

### 3) CSS background (hero/banner usage)
```html
<div class="brand-banner" role="img" aria-label="Mr. Hood Repair technician cleaning a commercial kitchen hood"></div>

<style>
  .brand-banner{
    width:100%;
    height:260px;
    background:
      url("/mnt/data/A_promotional_photograph_photograph_for_%22MR._HOOD_.png")
      center/cover no-repeat;
    border-radius:12px;
  }
  @media (min-width:1024px){ .brand-banner{ height:380px; } }
</style>
```

---

### Notes
- The `src` points to your generated file:  
  `/mnt/data/A_promotional_photograph_photograph_for_%22MR._HOOD_.png`  
  (the `"` in the filename is URL-encoded as `%22`).
- For production, consider renaming to something simpler (e.g., `/media/brand/mr-hood-repair.png`) and generating WebP/AVIF variants for faster loads.

**Mike:** put the 3 sections into one block of code

**GPT:** ```html
<!-- Mr. Hood Repair – Photorealistic Logo: 3 ways in one file (HTML <img>, CSS background, and React/TSX snippet) -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>Mr. Hood Repair — Brand Logo Examples</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  <style>
    :root{
      --radius: 12px;
      --shadow: 0 6px 18px rgba(0,0,0,.22);
    }

    /* Shared layout just for this demo page */
    body{font-family:system-ui,-apple-system,Segoe UI,Roboto,Inter,Arial,sans-serif;margin:0;padding:24px;background:#0b0f14;color:#eef2f6}
    h2{margin:24px 0 12px;font-size:20px;color:#e6edf6}
    .wrap{max-width:1000px;margin:auto;display:grid;gap:28px}

    /* 1) Plain HTML <img> logo */
    .brand { display:inline-flex; align-items:center; text-decoration:none; }
    .brand__img {
      display:block;
      height:64px;              /* header-sized logo */
      width:auto;
      object-fit:contain;
      border-radius:8px;
      box-shadow: var(--shadow);
      background:#000;          /* subtle matte behind transparent edges */
    }
    @media (max-width:640px){ .brand__img{ height:48px; } }

    /* 2) CSS background banner (hero/section usage) */
    .brand-banner{
      width:100%;
      height:320px;
      background:
        url("/mnt/data/A_promotional_photograph_photograph_for_%22MR._HOOD_.png")
        center/cover no-repeat;
      border-radius: var(--radius);
      box-shadow: var(--shadow);
      outline: 1px solid rgba(255,255,255,.06);
    }

    /* Optional frame blocks */
    .card{
      background:linear-gradient(180deg,#111723,#0b0f14);
      border:1px solid rgba(255,255,255,.06);
      border-radius: var(--radius);
      padding:18px;
      box-shadow: var(--shadow);
    }

    .note{font-size:13px;color:#aab6c4;line-height:1.5}
    code, pre{font-family:ui-monospace,SFMono-Regular,Consolas,Monaco,"Liberation Mono",Menlo,monospace}
    pre{background:#0d121a;border:1px solid rgba(255,255,255,.06);border-radius:10px;padding:14px;overflow:auto}
  </style>
</head>
<body>
  <div class="wrap">

    <!-- 1) Plain HTML (responsive, accessible, linked to home) -->
    <section class="card">
      <h2>1) Linked HTML Logo</h2>
      <a href="/" class="brand" aria-label="Mr. Hood Repair — Home">
        <picture>
          <!-- (You can add AVIF/WEBP sources later for smaller files) -->
          <img
            src="/mnt/data/A_promotional_photograph_photograph_for_%22MR._HOOD_.png"
            alt="Mr. Hood Repair technician cleaning a commercial kitchen hood"
            width="1536"
            height="2304"
            loading="lazy"
            decoding="async"
            class="brand__img"
          />
        </picture>
      </a>
      <p class="note">Drop this block into your site header to show the photorealistic brand logo and link back to “/”.</p>
    </section>

    <!-- 2) CSS background (hero/banner usage) -->
    <section class="card">
      <h2>2) CSS Background Banner</h2>
      <div class="brand-banner" role="img" aria-label="Mr. Hood Repair technician cleaning a commercial kitchen hood"></div>
      <p class="note">Use this full-width banner in a hero or section background. It scales responsively and keeps a smooth radius/shadow.</p>
    </section>

    <!-- 3) React/TypeScript component (for frameworks) -->
    <section class="card">
      <h2>3) React / TypeScript Component (copy into your codebase)</h2>
      <pre><code>// BrandLogo.tsx
export default function BrandLogo() {
  return (
    &lt;a href="/" aria-label="Mr. Hood Repair — Home" className="inline-flex items-center"&gt;
      &lt;img
        src="/mnt/data/A_promotional_photograph_photograph_for_%22MR._HOOD_.png"
        alt="Mr. Hood Repair technician cleaning a commercial kitchen hood"
        width={1536}
        height={2304}
        loading="lazy"
        decoding="async"
        style={{ height: 64, width: "auto", objectFit: "contain", borderRadius: 8 }}
      /&gt;
    &lt;/a&gt;
  );
}</code></pre>
      <p class="note">Paste the component into your React/Next/Lovable codebase and import it in your header. Adjust the height (e.g., 56–72px) to fit your nav.</p>
    </section>

  </div>
</body>
</html>
```

**Mike:** I love the LOGO.  generate a separate version that has the style of a photo negative.

**Mike:** generate a separate file using the bottom half of the logo with the black background.

**Mike:** draw the image of the man with a hat and pressure gun with "Mr. Hood Repair" surrounding the image.

**Mike:** great!  turn this into a photo negative.
