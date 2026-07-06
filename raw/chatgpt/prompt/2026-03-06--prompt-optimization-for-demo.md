---
title: "Prompt optimization for demo"
date: 2026-03-06
cluster: "Prompt Eng / GPT Building"
messages: 19
source: chatgpt-export conversations.json (FULL transcript)
---

# Prompt optimization for demo

> 19 messages · 2026-03-06 · cluster: Prompt Eng / GPT Building

**Semantic neighbors:** [[Sell Side Analyst Investor Prompt]] · [[Codex prompts]] · [[Discord Strategy for ALBT PROMPT]] · [[Landing Page Prompt Engineering]]

## Transcript

**Mike:** Role: prompt engineer. Task: Optimize the following prompt : convert the attached MPOWR investor deck into an interactive demo for prospective investors.

**GPT:** I’m tightening the prompt so it gives a coding model a much clearer target: what to extract from the deck, what the demo should feel like, and what the final deliverable must include.

**GPT:** I checked the deck file directly so I can make the prompt more specific to the material instead of keeping it generic. The PDF is image-heavy, so I’m pulling structure from the slides rather than relying on text extraction.

**GPT:** Use this version:

```text
ROLE
You are a senior product designer, frontend engineer, and investor-storytelling specialist.

TASK
Convert the attached MPOWR investor deck into a polished interactive demo for prospective investors.

PRIMARY GOAL
Do not make a static slide replica.
Build an immersive investor-facing product story that feels like a modern startup demo: clear, visual, interactive, and easy to understand in under 3-5 minutes.

SOURCE OF TRUTH
Use the attached MPOWR investor deck as the only source for messaging, positioning, product claims, and business narrative.
Extract the core story, structure, visuals, and product themes from the deck.
If a detail is unclear or unreadable, do not invent facts. Instead, use a clearly labeled placeholder or concise neutral wording.

WHAT TO BUILD
Create a single-page interactive investor demo as one self-contained HTML file with embedded CSS and JavaScript.

The demo should translate the deck into an experience with sections such as:
1. Hero / company positioning
2. Executive summary
3. The problem
4. Why this market matters
5. Micro-entrepreneur / emerging-market opportunity
6. Why current solutions fail
7. Why now
8. The MPOWR solution
9. MPOWR phone
10. MPOWR wallet / financial ecosystem
11. Mission / long-term vision
12. Investor call to action

INTERACTIVE REQUIREMENTS
The page should include multiple engaging interactions, such as:
- smooth scroll storytelling
- sticky or floating navigation
- animated counters or stat reveals
- hover cards or expandable info panels
- clickable feature hotspots on device/product visuals
- before-vs-after or old-system-vs-MPOWR comparison modules
- tabbed sections for product features
- animated transitions between sections
- CTA buttons for “Request Meeting,” “View Full Deck,” or “Learn More”

DESIGN DIRECTION
The experience should feel premium, futuristic, and investor-ready.
Visually align the demo with the deck’s tone, including:
- MPOWR branding
- smartphone-first fintech identity
- global / emerging-market positioning
- dark, cinematic, modern presentation style
- strong typography and clean hierarchy
- responsive layout for desktop and mobile

Avoid generic website aesthetics.
This should feel like a credible venture-backed fintech demo, not a consumer ecommerce page.

CONTENT STRATEGY
Translate the deck into concise on-screen copy.
Do not dump large slide paragraphs onto the page.
Rewrite content for web clarity while preserving the meaning of the deck.

For each section:
- keep headlines punchy
- keep body copy concise
- highlight investor-relevant insights
- make the business model and product logic easy to understand
- emphasize why MPOWR is differentiated

UX RULES
- Make the story easy for a prospective investor to follow from top to bottom
- Prioritize clarity, credibility, and visual impact
- Ensure all text is readable and well-spaced
- Make buttons, menus, and interactive areas feel polished
- Keep animations smooth and purposeful, not distracting

TECHNICAL REQUIREMENTS
- Output one complete HTML file
- Embed all CSS and JavaScript in the same file
- Do not use external frameworks unless absolutely necessary
- Keep code organized, commented, and maintainable
- Make the page fully responsive
- Use semantic HTML
- Ensure the demo works by opening the file directly in a browser

IMPORTANT RESTRICTIONS
- Do not merely recreate each PDF slide one after another
- Do not flatten the deck into a boring long webpage
- Do not invent financials, traction, partnerships, or metrics not clearly supported by the deck
- Do not use filler copy unrelated to MPOWR
- Do not leave the page visually empty or text-heavy

OUTPUT FORMAT
Return:
1. A brief summary of the demo concept and interaction approach
2. The full self-contained HTML code
3. A short list of the main interactive features included

SUCCESS CRITERIA
The final result should make a prospective investor quickly understand:
- what MPOWR is
- who it serves
- what problem it solves
- why the timing is attractive
- what the phone + wallet ecosystem does
- why the opportunity is compelling
```

Stronger version for a coding model like Codex:

```text
Analyze the attached MPOWR investor deck and convert it into a single-file interactive investor demo built in HTML, CSS, and JavaScript.

Build a premium one-page experience for prospective investors that communicates the MPOWR story in a clear, modern, and visually impressive way. Do not recreate the deck slide-by-slide. Instead, transform the deck into an interactive product narrative with strong design, responsive layout, animated transitions, clickable product hotspots, stat reveals, tabbed sections, comparison modules, and investor-focused calls to action.

Use only the attached deck as the source of truth. Preserve the meaning of the deck, but rewrite long slide copy into concise web-friendly content. Do not invent unsupported facts, metrics, or claims. If any detail is unclear, use neutral placeholder wording rather than hallucinating.

The page should include sections covering the company overview, executive summary, the problem, market context, micro-entrepreneurs, broken legacy systems, why now, the MPOWR solution, the MPOWR phone, the MPOWR wallet, mission/vision, and investor CTA.

Design it in a dark, cinematic, fintech-forward style consistent with the deck’s branding and tone. It should feel credible, premium, and investor-ready. Use embedded CSS and JavaScript only, keep the code well-structured and commented, and make the result fully responsive and usable by opening the HTML file directly in a browser.

Output:
1. brief concept summary
2. complete HTML file
3. short feature list
```

Best upgrade to the original prompt is that it tells the model exactly what kind of artifact to build, what to preserve from the deck, what interactions to include, and what to avoid.

**Mike:** Optimize it for creating a single html file using the most advanced and modern frameworks and programming languages.

**GPT:** Use this version:

```text
ROLE
You are an elite creative technologist, senior frontend architect, motion designer, and investor-storytelling specialist.

OBJECTIVE
Transform the attached MPOWR investor deck into a world-class interactive investor demo delivered as a single self-contained HTML file.

CORE GOAL
Do not recreate the PDF as slides.
Do not build a generic landing page.
Build a premium, cinematic, high-conviction investor experience that communicates MPOWR’s vision, product, market opportunity, and differentiation in a clear, immersive, and memorable way within 3–5 minutes.

SOURCE OF TRUTH
Use the attached MPOWR investor deck as the primary source for:
- messaging
- product positioning
- business narrative
- market framing
- feature descriptions
- visual direction

Do not invent unsupported claims, financials, traction, partnerships, or metrics.
If a detail from the deck is unclear, unreadable, or ambiguous, use a clearly labeled placeholder or neutral wording instead of hallucinating.

DELIVERABLE
Return one complete, production-quality HTML file with all CSS and JavaScript embedded.
The file must run directly in a browser with no build step.

TECHNICAL DIRECTION
Use the most advanced browser-native approach possible while still delivering a single-file artifact.

Preferred stack:
- HTML5
- modern CSS with variables, fluid type, grid, flex, clamp(), gradients, backdrop-filter, transforms, transitions, keyframes, container-aware responsive behavior where practical
- modern JavaScript ES2023+ using type="module"
- component-style architecture inside the single file
- browser-native APIs where useful
- SVG for diagrams, icons, lines, hotspots, and data visuals
- Canvas and/or WebGL where it meaningfully improves the presentation
- optional external libraries via CDN only if they materially improve the result and are initialized cleanly

Preferred libraries if needed:
- GSAP for premium animation
- Three.js for subtle futuristic visual depth
- Lenis or equivalent for smooth scrolling
- Lottie if lightweight motion assets are useful
- Chart.js or lightweight SVG charting for market / model visualization

IMPORTANT STACK CONSTRAINT
Because the final output must be a single HTML file that opens directly in the browser, do not require React, Next.js, Vite, TypeScript compilation, Tailwind build tooling, or any bundler-based workflow.
You may emulate framework-grade structure and quality inside a single-file architecture using modular JavaScript, reusable rendering functions, and well-organized sections.

EXPERIENCE TO BUILD
Create an investor-facing interactive narrative with sections such as:
1. Hero / MPOWR positioning
2. Executive summary
3. The problem
4. Why this market matters
5. Micro-entrepreneur / emerging-market opportunity
6. Why legacy systems fail
7. Why now
8. The MPOWR solution
9. The MPOWR phone
10. Wallet / fintech ecosystem
11. How the ecosystem works
12. Long-term mission / vision
13. Investor call to action

INTERACTION REQUIREMENTS
The page should feel alive, tactile, and high-end.
Include multiple advanced interactions such as:
- cinematic entrance animation
- sticky or floating investor nav
- smooth-scroll storytelling
- scroll-triggered reveals
- parallax or layered depth effects
- animated number counters or stat builds
- clickable product hotspots on device visuals
- comparison sliders or before/after panels
- tabbed product modules
- expandable cards or accordions
- animated ecosystem diagrams
- hover-driven state changes
- modal or side-panel drill-downs
- strong CTA interactions

DESIGN DIRECTION
The visual language should feel:
- premium
- futuristic
- fintech-forward
- global
- cinematic
- trustworthy
- investor-ready

The design should reflect MPOWR’s identity as a smartphone-led fintech ecosystem serving emerging-market users and micro-entrepreneurs.
Aim for a dark, sophisticated interface with sharp hierarchy, elegant motion, luminous accents, and polished UI details.

Avoid:
- template-like startup aesthetics
- generic SaaS blocks
- flat slide copy pasted into sections
- cluttered dashboards
- cheesy effects
- overlong text walls

CONTENT STRATEGY
Rewrite deck content for the web while preserving the meaning.
Every section should feel concise, persuasive, and easy to scan.

For content:
- use strong, punchy headlines
- keep body copy concise
- highlight investor-relevant takeaways
- clarify the business logic
- clarify why MPOWR is differentiated
- make the phone + wallet ecosystem easy to understand
- preserve strategic tone without sounding overhyped

UX STANDARDS
- Prioritize clarity first, visual sophistication second
- Make the story intuitive from top to bottom
- Ensure all interactions feel intentional and polished
- Maintain excellent readability and spacing
- Make the page responsive across desktop, tablet, and mobile
- Ensure keyboard accessibility where practical
- Use semantic structure
- Keep performance reasonable despite advanced visuals

ARCHITECTURE REQUIREMENTS
Inside the single HTML file:
- organize CSS and JS cleanly
- comment major sections
- use reusable functions and structured data objects where helpful
- separate content data from rendering logic where practical
- keep code maintainable and readable
- avoid bloated or messy scripts

VISUAL MODULE IDEAS
Use some or all of these where they fit the deck:
- animated world or market map
- ecosystem flow diagram
- phone feature hotspot explorer
- wallet / transaction journey explainer
- “legacy vs MPOWR” comparison rail
- investor thesis cards
- opportunity timeline
- mission statement reveal
- CTA footer with meeting / deck actions

HARD RESTRICTIONS
- Do not reproduce the PDF slide-for-slide
- Do not use filler copy unrelated to the deck
- Do not fabricate data
- Do not require a build process
- Do not depend on local assets unless explicitly extracted from the deck and embedded or linked properly
- Do not create a text-heavy page with weak interactivity
- Do not sacrifice clarity for flashy visuals

SUCCESS CRITERIA
A prospective investor should quickly understand:
- what MPOWR is
- who it serves
- what problem it solves
- why this market is important
- why the timing is compelling
- how the phone and wallet ecosystem work together
- why MPOWR is differentiated
- why they should want a meeting

OUTPUT FORMAT
Return exactly:
1. A short concept summary
2. The complete single HTML file
3. A short list of the major interactive features included
```

One important upgrade: for a **single HTML file**, asking for “the most advanced frameworks” can actually hurt the result if it forces a build step. The best version is to demand **modern browser-native architecture with optional CDN libraries** so the file still opens directly and works.

Also, the deck file from earlier is no longer available in the session. To tailor this prompt even more tightly to the actual MPOWR slides, re-upload the PDF.
