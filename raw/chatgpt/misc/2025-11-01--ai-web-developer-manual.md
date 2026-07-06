---
title: "AI web developer manual"
date: 2025-11-01
cluster: "Misc / Uncategorized"
messages: 2
source: chatgpt-export conversations.json (FULL transcript)
---

# AI web developer manual

> 2 messages · 2025-11-01 · cluster: Misc / Uncategorized

**Semantic neighbors:** [[Dilla Donuts identity production]] · [[Merge snippets into file]] · [[Edit email header color]] · [[Entrepreneur biography search]]

## Transcript

**Mike:** Create a manual for the AI web developer, Lovable.  Fill it with tips and tricks , lesser know features .  I am building a kitchen hood cleaning website .  What do you recommend?

**GPT:** Here’s a **manual** for your AI-web-developer “Lovable” (an alias for your AI assistant). This manual is built with *you* in mind — since you’re building a kitchen-hood-cleaning website. It is structured in two parts:

- **Part A: “Lovable” Usage Manual** — how to get the best out of your AI assistant: prompts, workflows, lesser-known features, tips & tricks.  
- **Part B: Website Strategy for your Kitchen Hood Cleaning Business** — specific recommendations (content, structure, SEO, UX) tailored to a service-business website (kitchen hood cleaning) so “Lovable” (and you) can build it right.

---

## Part A – “Lovable” Usage Manual  
*(How to best work with the AI web-developer)*

### 1. Setup & Workflow  
- Start with a **clear project plan**: Ask Lovable to produce a markdown file (e.g., `project-plan.md`) that lists all pages, components, user flows, data needs, SEO goals, and tech stack decisions.  
- Break the work down into **modules/components**. Instead of “build the entire site,” do “build header/nav component,” “build service-page template,” “build contact form”, etc. This aligns with best practices for AI-assisted dev. citeturn0search4turn0search2  
- Use version control (Git) from the start. For each major change, ask Lovable to generate a **commit message** automatically. (As one tip suggests: auto-generate commit messages with AI.) citeturn0search0  
- After code generation, run a code review prompt: ask Lovable (or your AI tool) to review the code, enumerate areas for improvement, refactor suggestions. citeturn0search1turn0search4  
- Use branching: Keep your “production” stable and do experiments in feature branches with the AI. This helps avoid “layering bad code” over time.  

### 2. Prompting Lovable — Tips & Tricks  
- **Be explicit**: When you request code, specify input/output, error handling, UI behaviour, styling, responsive breakpoints. Clear prompts = better results. citeturn0search1turn0search2  
- **Contextual memory**: Provide Lovable with the project plan, tech stack details (e.g., you’re using WordPress + Elementor, or React + Next.js), CSS framework, branding colours, fonts. This helps consistency.  
- **Parameterise**: Ask for “variables” (e.g., site colours, typography scale) and reuse them so global changes become easy.  
- **Ask for inline comments + documentation**: After generating code, ask Lovable to add comments, a readme, and summarise logic. This makes future maintenance easier. citeturn0search1  
- **Use tests and validation**: Ask for unit/integration tests (if applicable) or ask for QA checklists. For web front-end, ask for cross-browser, mobile responsiveness, accessibility checklist.  
- **Refactoring prompts**: Periodically ask “Can you refactor this component to improve readability, reduce duplication, and use best practices?”  
- **Error handling & edge-cases**: Ask Lovable to include error states (form validation errors, empty results, network failure) and graceful fallback behaviour.  
- **CSS/performance optimisations**: Ask for suggestions on lazy-loading images, compressing CSS/JS, critical-path rendering, caching.  
- **SEO & structured data prompts**: Ask Lovable to generate meta tags, schema markup (JSON-LD) for service-business pages (which you’ll need).  
- **Accessibility prompts**: Ask for alt text, ARIA attributes, keyboard navigation, contrast levels, skip-links.  
- **Responsive & mobile-first**: Ensure prompts include mobile breakpoints, fluid layouts, and check behaviour on small screens.  
- **Iterative improvement**: After deployment, collect user metrics (bounce rate, page speed, conversions) and feed insight back in to ask Lovable for tweaks (“page load is slow — optimise hero image and defer non-critical JS”).

### 3. Lesser-Known / Underused Features  
- **Live prompt chaining**: Use Lovable to generate one part of the site, then ask it to generate the next part, passing along variables (e.g., header variant, colour theme) so there’s cohesion.  
- **Template generation for variations**: Ask Lovable to produce three layout variations for a page (A/B/C) so you can pick best UX or test later.  
- **Content wizard**: Beyond code, ask Lovable to generate real-world content: service descriptions, FAQs, blog post outlines, customer testimonials (fictionalised sample to replace with real ones).  
- **Structured data generation**: For local-business SEO, ask Lovable to produce JSON-LD markup for your business (e.g., `@type: LocalBusiness`, `serviceType`, `areaServed`, `logo`, `priceRange`).  
- **Meta-optimisation prompts**: For every new page ask: “Generate the meta title (<= 60 chars), meta description (<= 155 chars), keyword suggestions, H1/H2 outline, internal links to other pages.”  
- **Performance audit prompts**: After building pages ask: “What are the critical render-blocking resources? Suggest how to optimise (e.g., preload, defer, inline CSS, compress images)”.  
- **Accessibility audit prompts**: “Scan this component for accessibility issues; provide a checklist and suggested fixes (color contrast, keyboard nav, screen-reader labels)”.  
- **Content personalisation prompts**: If you plan to serve different audiences (commercial kitchens vs restaurants vs residential), ask Lovable to generate variant copy/templates for each.  
- **Monitoring & analytics integration**: Ask Lovable to generate code snippets for Google Analytics 4, Tag Manager, conversion tracking, and configure events (e.g., contact form submission, phone-clicks, quote-request).  
- **Backup & CI/CD prompts**: Ask Lovable to generate a GitHub Actions or other CI pipeline script: linting, testing, deployment to staging, then production.  
- **Prompt for “unknowns”**: When you’re unsure about a decision (choice of framework, performance trade-off) ask Lovable for a “pro/con” matrix to help decide.  

### 4. Best Practices and Pitfalls to Avoid  
- Don’t treat Lovable as a **black box**: Always review generated code for security, performance, maintainability. AI can produce bugs or non-optimal code. citeturn0search5turn0search2  
- Avoid **context drift**: When the AI accumulates too many changes without proper cleanup, quality can degrade. Regularly prune, refactor, reset context.  
- Keep the user-experience & business goals front and centre: Don’t build fancy features just because AI can—build those that align with your kitchen-hood-cleaning service, your customer’s pain-points, and your SEO goals.  
- Watch for **vendor lock-in** or overly clever code that your future self can’t maintain. Simpler, clean code often wins in service-business sites.  
- Ensure **responsiveness and performance**: Many service-business users are on mobile. Prioritise mobile design, fast load times, clear CTA (call, quote, contact).  
- Don’t overlook **accessibility and SEO foundations**: Even a small service business site benefits enormously from good SEO and accessible code (faster indexing, better ranking, trust).  
- Keep it **local-business friendly**: Since you’re in kitchen hood cleaning, your target audience is local. Ensure NAP (name, address, phone) consistency, Google Business Profile integration (you mentioned you’re setting one up), review schema, area served details.  
- Use analytics, test, iterate. Build the minimum viable site, launch, collect data, then use Lovable to refine.

---

## Part B – Website Strategy for Your Kitchen Hood Cleaning Business  
*(How to apply the manual and site-specific recommendations)*

### 1. Site Structure & Content Outline  
Here’s a recommended structure for your service-business website (kitchen hood cleaning). You’ll ask Lovable to generate templates and copy for each.

- Home Page  
  - Hero section: strong headline (“Commercial Kitchen Hood Cleaning Experts in [City/Area]”) + sub-headline + CTA (Get a Free Quote)  
  - Brief overview of services  
  - Why choose us (3-4 bullets: certified technicians, fast turnaround, compliance, local & reliable)  
  - Service areas (list cities/neighborhoods)  
  - Testimonials / before-&-after images  
  - Contact form + phone click-to-call  
- Services Page (could be one page or a landing list):  
  - Kitchen Hood & Exhaust Cleaning  
  - Grease Trap Cleaning  
  - Fire Suppression System Washdown  
  - Duct Cleaning & Fire Damper Service  
  - Maintenance Plans (recurring cleaning)  
- Service Detail Pages (one per service) – good for SEO:  
  - Example: “Kitchen Hood Cleaning” – what we do, process, compliance (NFPA 96 for commercial kitchens in the U.S.), benefits, FAQs, service area, CTA.  
- About Us / Why Choose Us Page  
  - Company story, certifications, insurance, technicians, service guarantee  
- Gallery / Before & After  
  - High-quality photos of cleaned hoods/ducts/grease trap etc.  
- Blog / Resources  
  - Content that helps target keywords plus build authority: e.g., “How Often Should You Clean Your Kitchen Hood?”, “Kitchen Hood Fire Prevention Tips for Restaurant Owners”, “What Happens If You Don’t Clean Your Exhaust Hood?”, etc.  
- Contact / Quote Request Page  
  - Form (name, business name, phone, email, service required, location, preferred date/time)  
  - Google Map embed showing your location (Pompano Beach / Fort Lauderdale area)  
  - Phone number (click-to-call), email link  
- Footer (global)  
  - NAP (name, address, phone) visible  
  - Service areas list  
  - Social links (if any)  
  - Certifications, trust badges  

### 2. SEO & Local-Business Optimization  
- Ensure you include **schema markup** (JSON-LD) for your business: `LocalBusiness`, `Service`, `AreaServed`. Use Lovable to generate a JSON-LD template.  
- Use local keywords: “Pompano Beach commercial kitchen hood cleaning”, “Fort Lauderdale restaurant hood cleaning service”, “South Florida kitchen exhaust cleaning”.  
- Add service-area pages or sections (e.g., “We serve Fort Lauderdale, Pompano Beach, Boca Raton, Deerfield Beach”) so you rank locally.  
- Encourage customer reviews. Make sure you link to your Google Business Profile. Use review schema for your site.  
- Load-speed matters. Use image compression (before/after photos), lazy-load images, minimize JS/CSS (ask Lovable for suggestions).  
- Mobile-first design: majority of users will use mobile when searching for “hood cleaning near me”.  
- Blog regularly: educational content builds trust and helps with long-tail keywords.  
- Internal linking: Have blog posts link to service pages and contact page.  
- Use H1/H2 properly: e.g., H1 “Commercial Kitchen Hood Cleaning in Pompano Beach” then H2s for benefits, process, FAQs.  
- Optimize meta titles and descriptions: ask Lovable to generate for each page.  
- Use alt text for all images: ask Lovable to generate descriptive alt text (e.g., “before and after kitchen hood cleaning in a Pompano Beach restaurant”).  
- Use structured headings for FAQs, use schema for FAQ.  
- Make sure each service detail page has a clear CTA (quote request or phone call).

### 3. UX & Conversion Tips for a Service Site  
- Hero section with high-impact image (clean kitchen hood, technician in uniform) + visible CTA.  
- Trust signals: certifications, years in business, testimonials (include names if permitted), logos of clients (restaurants/hospitality).  
- Show process step-by-step: e.g., “1. Inspection 2. Degreasing 3. Hood & Duct Cleaning 4. Final Inspection & Report”. This builds transparency.  
- Use real-life images not stock (before/after).  
- Make phone number clickable for mobile.  
- Keep form simple: fewer fields = more conversions.  
- Use urgency/time-sensitivity: “Slots filling fast for Q4 restaurant inspections – call now!”  
- Use chat or bot (optional) for quick enquiries — ask Lovable to integrate a simple chatbot widget.  
- Show service areas clearly — helps user see you serve them and helps local SEO.  
- Use “Why Choose Us” section with differentiators (licensed, insured, NFPA 96 compliant, quick service).  
- Load testimonials and case studies — maybe a short video or carousel.  
- Add FAQs (especially around compliance, fire codes, frequencies, pricing).  
- Use a clear pricing or at least “call for free estimate” language.  
- Use a blog to funnel in traffic, then convert: at bottom of blog posts, insert CTA to get a free inspection/quote.  
- Use contact/tracking: Google Analytics + Tag Manager + track phone clicks, form submits. Ask Lovable for tracking code.  
- Provide a map with service zone and maybe “serving Fort Lauderdale, Broward County & Palm Beach County”.

### 4. Tech & Performance Considerations  
- Choose a CMS or site-stack that you’re comfortable maintaining. If you’ll update blog and content, WordPress is good. If you prefer faster, static site + headless, consider Next.js + headless CMS.  
- Ensure you use caching and a CDN (especially for images).  
- Image optimisation: compress images, use WebP where possible, lazy-load below the fold.  
- Minimise render-blocking CSS/JS. Ask Lovable to identify and inline critical CSS for above-the-fold content.  
- Use semantic HTML and ensure page content loads even if JS is slow (progressive enhancement) — this benefits SEO & accessibility. citeturn0search19  
- Ensure form submissions are secure (HTTPS, spam protection e.g. honeypot or reCAPTCHA).  
- Monitor page speed (Google Lighthouse, WebPageTest) and ask Lovable to suggest improvements.  
- Ensure backups, updates (especially if WordPress) — use version control for theme/templates.  
- Ensure mobile responsiveness: test on various devices, check touch targets, readability.  
- Ensure accessibility: use proper contrast, alt text, labels, skip links, keyboard nav. Ask Lovable to audit and list issues.

### 5. Content & Blog Ideas  
Here are some content ideas to feed to Lovable to generate outlines or full posts:

- “Why Commercial Kitchen Hood Cleaning Matters for Fire Safety”  
- “How Often Should You Clean Your Kitchen Hood & Exhaust?”  
- “Top 5 Mistakes Restaurants Make in Kitchen Hood Maintenance”  
- “What Restaurant Owners Need to Know About NFPA 96 Compliance”  
- “Before & After: Real Kitchen Hood Cleaning Project in Fort Lauderdale”  
- “Signs Your Kitchen Hood Needs Professional Cleaning Now”  
- “Grease Trap Cleaning vs Hood Cleaning: What’s the Difference?”  
- “Reducing Fire Risk & Insurance Premiums Through Regular Kitchen Vent Maintenance”  

For each blog post, ask Lovable to generate:  
- Meta title/description  
- Suggested header structure (H1, H2s)  
- Intro + conclusion  
- Internal links (to service pages)  
- CTA at end (“Schedule your free inspection”).

### 6. Analytics & Ongoing Improvement  
- Set up GA4 + Tag Manager. Track key events: phone click, form submit, chat widget open.  
- After 30-60 days, review metrics: bounce rate, average time on page, conversions. Identify pages with high exit rate.  
- Ask Lovable: “Based on analytics, suggest 3 improvements for the Home page – content, layout, call to action.”  
- A/B test: Try different hero images, CTA wording (“Get a free quote” vs “Schedule your inspection”) and measure which performs better. Ask Lovable to generate variation templates.  
- Monitor keyword rankings monthly for your local keywords. Ask Lovable for suggestions if you drop.  
- Use testimonials and case studies to update site every quarter: keep site “fresh”.

---

## Summary  
By combining a strong process for working with your AI assistant (Lovable) and a focused website strategy for your kitchen hood cleaning business, you’ll maximize your chances of building a website that is: **well-coded**, **SEO-ready**, **conversion-optimised**, and **maintainable** over time.

If you like, I can **generate a full starter template (HTML/CSS/React or WordPress theme)** for the site, including all the pages above, and also craft sample content (home page copy, service page copy) for you. Would you like me to do that now?
