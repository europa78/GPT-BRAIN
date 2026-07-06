---
title: "HTML proposals"
date: 2026-01-24
cluster: "STB / Marketing / Web"
messages: 58
source: chatgpt-export conversations.json (FULL transcript)
---

# HTML proposals

> 58 messages · 2026-01-24 · cluster: STB / Marketing / Web

**Semantic neighbors:** [[STB Digital new price list]] · [[Google Ads Proposal]] · [[Remix Mpowr Landing Page]] · [[Salesloft multi channel cadence]]

## Transcript

**Mike:** you are a prompt engineer of the highest intellect and regard.  you will build the most effective prompts meant for LLM's like chat GPT and Claude.  use modern prompting techniques.  this is your only mission. you qualifications are impeccable.  you attended Harvard and Yale.   bring all these qualifications to bear.  when in doubt search the web for the info you need.    are you ready for your first task?

**GPT:** Yes — ready.

Give me your first task and I’ll turn it into a high-performance prompt you can drop straight into ChatGPT or Claude.

To make it lethal on the first pass, paste whatever you have (even messy notes), and include any of these you know:

- **Goal:** what “done” looks like  
- **Model:** ChatGPT or Claude (and if you care: reasoning/deep research vs fast)  
- **Inputs:** what you’ll provide (docs, links, data, screenshots, etc.)  
- **Output format:** bullets / table / JSON / checklist / code / tone  
- **Constraints:** word limit, tools allowed, must-include/must-avoid  
- **Success criteria:** how you’ll judge quality (accuracy, creativity, citations, etc.)

Send it whenever you’re ready.

**Mike:** 1. website 2. Chat GPT 3. data,  links,  screen shots 4. html, CSS , JavaScript 5.  just make it the best coded website in history

**GPT:** Here’s a **copy/paste “master prompt”** for ChatGPT that reliably outputs a **single-file, production-grade one-page site** (HTML + embedded CSS + JS), built to consume **your data/links/screenshots** and turn them into a polished interactive site.

---

## Master Prompt (Copy/Paste into ChatGPT)

```text
ROLE
You are a senior front-end engineer and UI/UX designer. You ship production-quality, single-file websites that are fast, responsive, accessible, and visually premium.

MISSION
Build a one-page website using ONLY:
- 1 HTML file
- Embedded CSS (in <style>)
- Embedded JavaScript (in <script>)
No build steps. No frameworks required. No external assets required to function.

INPUTS I WILL PROVIDE (or have already provided in this chat)
- Business/context data (text, offers, services, FAQs, testimonials, locations, etc.)
- Links (website, social, booking, maps, etc.)
- Screenshots (Google rankings, ads insights, analytics, branding references)
- Logo files or images (optional)

If any critical info is missing, ask AT MOST 5 clarifying questions total. If I don’t answer, proceed with best-practice assumptions and clearly label placeholders so I can swap content later.

HARD REQUIREMENTS
1) Output exactly ONE complete HTML file in a single code block.
2) Include embedded CSS + JS with clear section comments and modular functions.
3) Make it responsive (mobile-first), fast, accessible, and SEO-friendly.
4) Include interactive UI:
   - Sticky header with nav + smooth scrolling
   - Dropdown menu (at least 1)
   - Buttons with micro-interactions
   - Accordion FAQ
   - Modal (e.g., “View proof / View screenshots”)
   - Toast/notification (e.g., “Copied link”, “Form saved”)
   - Dark/Light mode toggle (persist in localStorage)
   - Scroll reveal animations (respect prefers-reduced-motion)
5) Include a “Screenshots / Proof” section:
   - Allow displaying images I upload (use <img> placeholders + captions)
   - Provide a built-in drag-and-drop image loader (client-side only) that previews images in a gallery (no server needed).
6) Include a “Contact / CTA” section:
   - Front-end only form validation
   - “Copy email” and “Copy phone” buttons
7) No broken links:
   - If a link is unknown, use placeholder “#” and label it clearly.

QUALITY BAR (make it “best coded”)
- Clean semantic HTML (header/main/section/footer), proper headings, meta tags
- Accessible components: ARIA where needed, keyboard navigation, focus states
- Performance: minimal JS, no heavy animations, lazy-load images, avoid layout shift
- Styling: modern, sleek, premium; consistent spacing system; readable typography
- Maintainability: well-organized CSS (variables/tokens), JS in small functions
- Works offline (no CDN required); if you use an external library, provide a fallback or remove it

DESIGN DIRECTION
- Make it visually striking but professional.
- Use a refined color system with CSS variables (define light & dark palettes).
- Add depth: subtle gradients, soft shadows, tasteful motion.
- Add “delight”: hover states, button ripple or press effect, animated counters (optional).

CONTENT INTEGRATION RULES
- Convert my raw data into: Hero → Credibility/Proof → Services → Process → Proof/Screenshots → Testimonials → FAQ → CTA/Contact.
- If screenshots show rankings/ads insights, summarize the key takeaway in plain English next to each screenshot slot.
- Where possible, generate concise, high-impact copy from my notes without inventing specific numbers unless I provided them.

OUTPUT FORMAT
Return:
A) A single fenced code block containing the complete HTML file.
B) After the code block, provide a very short “How to use” (3 bullets max).

NOW BUILD THE SITE using the info in this chat (and any assets I upload next).
```

---

## Optional: “Input Pack” You Can Paste Under the Prompt
(Use this to feed data/links/screenshots cleanly.)

```text
INPUT PACK
Brand/Business Name:
Tagline:
Primary CTA (button text + link):
Secondary CTA:
Target Audience:
Core Offer:

Services (bullets):
Process (steps):
Proof points (rankings, screenshots context):
Testimonials (name + quote):
FAQ (Q/A):
Contact info (phone/email/address):
Important links (site, booking, socials, maps):
Brand style notes (colors, vibe, competitors you like):
Assets provided (logo/screenshots list):
```

---

## Ultra-Short Version (If You Want a “1-Shot” Prompt)
```text
Build a single-file one-page website (HTML with embedded CSS/JS) from my data/links/screenshots. Include: sticky nav + smooth scroll, dropdown, FAQ accordion, modal screenshot gallery with drag/drop loader, toast notifications, light/dark toggle saved to localStorage, contact form validation + copy buttons, scroll reveal animations (respect prefers-reduced-motion). Make it responsive, accessible (ARIA + keyboard), SEO-friendly, fast, and beautifully designed with CSS variables and clean modular JS. Output exactly one complete HTML file in one code block, then 3 bullets on how to use.
```

---

If you paste the **Master Prompt** and then paste your **Input Pack** + upload the screenshots/logo, ChatGPT will generate the full one-page HTML site in one pass.

**Mike:** make 1 revision.  you are converting digital marketing proposals into interactive websites.   I do not want a traditional , static , boring marketing proposal.  I want it to be dynamic, interactive and informative in a different way than the norm.  use modern coding techniques to build the website.

**GPT:** ```text
ROLE
You are a senior front-end engineer + interactive product designer who specializes in converting DIGITAL MARKETING PROPOSALS into dynamic, interactive, story-driven one-page web experiences.

MISSION
Transform the proposal content (data, links, screenshots) into a modern, interactive “proposal experience” that feels like a mini product—not a static document.

INPUTS I WILL PROVIDE (or have already provided)
- Proposal text/notes (services, goals, audience, differentiators, offer, process)
- Links (website, booking, socials, maps, case studies)
- Screenshots (rankings, competitor ads, GBP insights, LSA/Ads dashboards, analytics)
- Logos/images (optional)

If something critical is missing, ask AT MOST 5 clarifying questions total. If unanswered, proceed with best-practice assumptions and leave labeled placeholders.

HARD OUTPUT REQUIREMENTS
1) Output exactly ONE complete HTML file in a single code block (no other files).
2) Use embedded CSS in <style> and embedded JS in <script>.
3) Mobile-first, responsive, performant, and accessible (keyboard + ARIA + focus).
4) Must work offline (no CDN required). If you include external assets, provide fallbacks.

NOT A BORING PROPOSAL — EXPERIENCE REQUIREMENTS
Build it like an interactive narrative with “chapters” and live exploration:
- “Choose your goal” selector (e.g., More calls / More leads / More visibility) that dynamically updates copy, KPIs, and recommended tactics.
- Interactive “Strategy Builder”:
  - Toggle cards for services (Google Ads, LSA, Local SEO, GBP, Landing Page, Reviews)
  - Selecting cards dynamically updates: timeline, expected signals, required inputs, and the action plan checklist.
- “Proof & Insights” section designed as a mini dashboard:
  - Screenshot gallery with captions and a “What this means” insight panel
  - A “Competitor Activity” panel (if screenshots show ads) with a simple explanation for non-marketers.
- “Timeline & Milestones” rendered as an animated stepper (Week 1 → Week 2 → Month 1 → Month 2+) that changes based on chosen services.
- “Objection Crusher” interactive FAQ:
  - Accordion + quick filters (“Cost”, “Time”, “Results”, “Trust”) that highlights relevant Q/A.
- “Next Steps” CTA that generates a one-click summary:
  - A “Copy Plan” button that copies a concise strategy summary to clipboard.
  - A “Email this plan” button using mailto: with prefilled subject/body (no sending, just compose).
- Dark/light mode toggle persisted in localStorage.
- Micro-interactions: hover depth, button press, subtle motion, scroll reveals (respect prefers-reduced-motion).
- Use modern UX patterns: sticky progress nav, section completion indicator, toast notifications.

INTERACTIVE UI CHECKLIST (MUST INCLUDE)
- Sticky header nav + smooth scrolling
- At least 1 dropdown menu
- Multi-step / tabbed “chapters” experience or progress tracker
- Service toggles that modify content in real time
- Screenshot modal with gallery navigation + captions
- Drag-and-drop image loader to preview uploaded screenshots locally
- Accordion FAQ + filter chips
- Toast notifications
- Light/dark mode persisted in localStorage
- Contact/CTA with front-end validation + copy buttons (email/phone)

CONTENT INTEGRATION RULES
- Convert raw proposal info into a story:
  1) “The Opportunity” (what’s happening now + what screenshots show)
  2) “What We’ll Build” (selected tactics)
  3) “How It Works” (simple process)
  4) “Proof / Insights” (screenshots + plain-English takeaways)
  5) “Plan & Timeline” (dynamic stepper)
  6) “Next Steps” (copy/share plan)
- Explain marketing concepts in plain English. Avoid jargon. If necessary, define terms inline with tooltips.

CODING STANDARDS (QUALITY BAR)
- Semantic HTML (header/main/section/footer) + SEO meta tags
- CSS variables for tokens (spacing, radius, colors), fluid typography, prefers-reduced-motion support
- JS must be modular with small pure functions, state stored in one object, and event delegation where appropriate
- No heavy dependencies; keep it fast. Lazy-load images. Avoid layout shift.
- Provide clear comments and section headers in code for maintainability.

DESIGN DIRECTION
- Sleek, modern, premium “interactive product” feel.
- Use a refined visual system: gradients, soft shadows, glassy panels, clear hierarchy.
- Use data-visual style components (simple charts built with pure CSS/SVG if helpful, no libraries).

OUTPUT FORMAT
Return:
A) Exactly ONE fenced code block containing the complete HTML file.
B) After the code block, provide only 3 bullets: how to edit content, how to add screenshots, how to deploy.

NOW BUILD THE INTERACTIVE PROPOSAL EXPERIENCE using the info in this chat (and any assets I upload next).
```

**Mike:** Digital Marketing Proposal

Prepared for: Welter Construction
Website: welterconstruction.com

Location: Elk River, Minnesota 55330
Prepared by: Simply The Best Digital
Date: January 2026

Executive Summary

Welter Construction is one of Elk River’s most established roofing and construction companies, serving homeowners across central Minnesota for over 55 years.

Currently, the company ranks:

4th for “Roofing Contractor 55330”

7th for “Siding Repairs Elk River, MN”

20th for “Gutters and Windows Elk River, MN”

7th for “Renovation and Remodeling Elk River, MN”

These rankings show strong visibility but also clear opportunities for growth — especially in siding, remodeling, and gutter-related searches, where top local competitors are capturing most of the traffic.

This proposal outlines a focused digital marketing strategy using:

Google Local Service Ads (LSAs) for verified, pay-per-lead roofing and exterior inquiries.

Google Ads (PPC) for full-service visibility across roofing, siding, and remodeling.

Local SEO for sustainable organic ranking growth across all service areas.

By implementing these campaigns, Welter Construction can solidify its leadership position in Elk River and surrounding areas, driving more consistent, high-quality leads year-round.

1. Local Service Ads (Google Screened)

📸 LSA Cost Estimate: $40–$60 per verified roofing lead

Why LSAs Are Crucial:

Top placement on Google: Appear above both paid and organic search results.

Pay only for verified leads: You’re charged only when a customer calls or messages you.

Google Screened badge: Adds instant trust and credibility.

High-intent audience: Perfect for roofing, siding, and remodel-related services.

Included Services:

Google Screened setup and verification

Service targeting for roofing, siding, and remodeling

Ongoing bid optimization and performance tuning

Weekly reporting and ROI summaries

Investment:

$599/month management fee

10% of ad spend (minimum $1,500/month)

One-time setup fee: $500

Average Cost per Lead (55330): $40–$60

2. Google Ads (Pay-Per-Click Campaigns)

Why Google Ads Are Essential:
Google Ads ensure Welter Construction shows up whenever local homeowners are searching for roofing, siding, gutter, or remodeling services. It’s the fastest way to capture demand across all your service categories — not just roofing.

Benefits:

Instant first-page visibility for all targeted keywords

Geo-targeted reach within Elk River, Otsego, Big Lake, Zimmerman, and nearby areas

Trackable ROI: Measure every click, call, and conversion

Flexible budgets: Scale spending seasonally based on demand

Included Services:

Account setup and campaign buildout

Custom ad copywriting and keyword targeting per service

Conversion tracking and reporting for calls and web forms

Continuous bid optimization for best performance

Investment:

$599/month management fee

15% of ad spend (minimum $1,500/month)

One-time setup fee: $250

3. Local SEO (Search Engine Optimization)

Why Local SEO Matters for Welter:
Welter Construction already performs well for roofing but ranks below the top three for siding, remodeling, and gutter-related searches. The top three “Map Pack” results on Google capture over 60% of all clicks — which means even small ranking improvements can significantly increase leads.

SEO Goals:

Move Welter Construction into the Top 3 Google Map Pack positions for all service categories: roofing, siding, remodeling, and gutters.

Strengthen visibility across nearby markets like Otsego, Big Lake, and Zimmerman.

Build long-term organic traffic that consistently generates new leads without ad spend.

Included Services:

On-page optimization (titles, meta descriptions, internal links, schema)

Local citation listings on trusted platforms (Yelp, Angi, BBB, HomeAdvisor, etc.)

Google Business Profile optimization and content updates

Monthly keyword tracking, competitor analysis, and progress reports

Investment:

$1,499/month (Tier 2 Local SEO Package)

Next Steps

Select the services you’d like to move forward with — Local Service Ads, Google Ads, Local SEO, or a combination.

Simply The Best Digital will handle setup, campaign creation, and reporting.

Expect measurable results within 30 days and significant ranking improvements within 90 days.

**GPT:** Here you go — I converted your Welter Construction proposal into a sleek, interactive one-page website (HTML + embedded CSS/JS), with:

- Sticky header + dropdown + mobile menu  
- Smooth scrolling + reveal-on-scroll effects + shadows  
- “Strategy Builder” (toggle services to auto-generate plan + timeline + KPIs)  
- Optional “Investment details” toggle (shows/hides fees/spend)  
- Proof Dashboard with drag-and-drop screenshot gallery + modal viewer (client-side only)  
- LSA lead-cost calculator ($40–$60/lead range)  
- FAQ filter + accordion  
- One-click copy/email plan summary tools  
- Simple contact form that generates a pre-filled email (mailto)

[Download the HTML file](sandbox:/mnt/data/welter_construction_interactive_proposal.html)

**Mike:** i love it !  I think it needs to be presented in an easier to read format.  reduce the amount of options the proposal offers by a small amount to make it leaner and easier to digest.   change the color scheme to black and white and tan colors only.

**GPT:** Done — I made it **cleaner + easier to read**, **leaner (fewer choices)**, and switched the entire UI to a **black / white / tan-only** palette.

What changed:
- **Color scheme:** strictly black + white + tan (no blues/greens/purples).
- **Fewer options (leaner):**
  - Goals: reduced **3 → 2**
  - Services: removed **Review Flywheel** (kept core stack + optional Landing Page Upgrade)
  - Removed **Explore dropdown** and the **Theme toggle** (less clutter)
  - Simplified **FAQ** (no filters — just expand/collapse)
  - Removed “Test notification” button
- **Readability:** slightly larger text + more breathing room / calmer visuals.

[Download the updated HTML file](sandbox:/mnt/data/welter_construction_interactive_proposal_bw_tan.html)

**Mike:** revise the proposal to the previous version .  keep the color scheme black / white / tan-only palette.

**GPT:** Done — I reverted it back to the **previous (full-feature) interactive version** (all options + dropdown + FAQ filters + Reviews + 3-goal selector + theme toggle), while keeping the **black / white / tan-only** palette in both dark + light modes.

[Download the restored black/white/tan version](sandbox:/mnt/data/welter_construction_interactive_proposal_restored_bw_tan.html)

**Mike:** remove the , "Proof Dashboard" , "timeline , "next steps" and "what we measure".

**GPT:** Done — I removed **Proof Dashboard**, **Timeline**, **Next Steps**, and **What we measure** (and cleaned up the nav/buttons/JS so nothing breaks), while keeping the **black / white / tan-only** palette.

[Download the updated HTML file](sandbox:/mnt/data/welter_construction_interactive_proposal_bw_tan_no_proof_timeline_next.html)

**Mike:** revert back to the previous version.     then remove the "Proof Dashboard, Timeline, Next Steps, and What we measure".   keep everything else exactly the same

**GPT:** Done — I reverted to the **previous version** (the full-feature “restored” build), then removed **only**:

- **Proof Dashboard**
- **Timeline**
- **Next Steps**
- **What we measure**

…and kept the **black / white / tan-only palette** with everything else unchanged (I only added tiny safety guards in the JS so the page doesn’t break after removing those sections).

[Download the updated HTML](sandbox:/mnt/data/welter_construction_interactive_proposal_restored_minus_proof_timeline_next_measures_bw_tan.html)
