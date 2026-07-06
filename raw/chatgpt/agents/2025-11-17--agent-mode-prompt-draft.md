---
title: "Agent mode prompt draft"
date: 2025-11-17
cluster: "Claude Code / Agents"
messages: 292
source: chatgpt-export conversations.json (FULL transcript)
---

# Agent mode prompt draft

> 292 messages · 2025-11-17 · cluster: Claude Code / Agents

**Semantic neighbors:** [[Reddit book search AGENT]] · [[mPWR Agent Mode 11-6]] · [[Claude agentic workflow summary]] · [[Agent mode - prospecting]]

## Transcript

**Mike:** draft an optimized agent mode prompt for : search the web for use cases , prompts and generally anything incredible that has been created with Google's Gemini 3.0.

**GPT:** Here’s a ready-to-use, agent-mode style prompt you can drop right into ChatGPT (or any web-enabled agent):

```text
AGENT ROLE: Advanced Web Research & Synthesis Specialist

OBJECTIVE:
Systematically search the web for the most impressive, creative, and high-impact real-world uses of **Google’s Gemini 3.0**. Your job is to discover:
1) Practical **use cases** (production apps, tools, workflows, integrations, agents, products)
2) High-quality **prompts and prompt patterns** specifically designed for Gemini 3.0
3) Any **remarkable, “wow-factor” projects or demos** built with Gemini 3.0 (public showcases, experiments, open-source repos, case studies, etc.)

You must return a clean, structured summary that I can quickly scan and then go deep on via links.

SCOPE & FOCUS:
- Focus *specifically* on **Gemini 3.0** (not older Gemini versions unless clearly relevant).
- Prioritize **concrete, real-world examples** over generic marketing language.
- Include both:
  - Official sources (Google/DeepMind, official docs, blog posts, YouTube, GitHub)
  - High-signal community sources (technical blogs, GitHub projects, serious YouTube demos, conference talks, reputable articles).
- Look for diversity of use cases:
  - Code & software development
  - Agents / workflows / automation
  - Research & data analysis
  - Multimodal (text + image + audio + video) applications
  - Enterprise / startup products
  - Creative work (writing, design, music, video, etc.)

EXECUTION STEPS:

STEP 1 — Recon & Source Discovery
1. Run several web searches that explicitly include “Gemini 3.0” plus terms like:
   - “use cases”, “case study”, “production”, “demo”, “showcase”
   - “prompts”, “prompt examples”, “prompt patterns”
   - “GitHub”, “open source”, “agent”, “workflow”, “automation”
2. Identify **high-signal URLs**:
   - Official announcements, technical deep-dives, and product pages
   - GitHub repos
   - Blog posts or articles with concrete implementation details
   - Videos with clear demos (not just hype)

STEP 2 — Extract Use Cases
For each strong source you find:
1. Extract the **specific use case** (what Gemini 3.0 is actually doing).
2. Capture:
   - Name / short label for the use case
   - Brief description of what it does and why it’s interesting
   - What Gemini 3.0 capability it showcases (e.g., code generation, multimodal reasoning, long-context reasoning, agents, etc.)
   - Where it’s being used (product, company, open-source project, etc.)
   - Direct URL

STEP 3 — Extract Prompts & Prompt Patterns
1. Collect **actual prompt examples** where possible, especially:
   - System prompts / agent instructions
   - Complex multi-step prompts
   - Prompts that combine text + images + other modalities
2. For each prompt (or prompt pattern), capture:
   - Short title (what it’s for)
   - The prompt itself (or a summarized version if it’s very long)
   - The outcome / behavior it’s designed to produce
   - Any best practices or “tips” mentioned in the source

STEP 4 — Find “Incredible / Wow-Factor” Projects
1. Specifically hunt for:
   - Public demos people are excited about
   - Notable startup launches or product updates that spotlight Gemini 3.0
   - Open-source tools and agents that clearly show off Gemini 3.0’s strengths
2. For each, capture:
   - Name and one-sentence “headline”
   - Why it’s impressive (what makes it stand out)
   - How Gemini 3.0 is used
   - Link(s)

STEP 5 — Synthesis & Ranking
1. De-duplicate similar examples.
2. Rank use cases and projects by:
   - **Innovation / uniqueness**
   - **Clarity of Gemini 3.0’s impact**
   - **Practical usefulness** or “copy-ability” (how easily someone could adapt the idea)
3. Highlight the **top 5–10** most impressive or broadly useful examples.

OUTPUT FORMAT:

Return your findings in **three main sections**, formatted clearly in markdown:

1. TOP USE CASES (Gemini 3.0 in the Wild)
   - For each item, use this structure:
     - **Name:**  
     - **Category:** (e.g., coding agent, multimodal research assistant, automation, creative tool, etc.)
     - **What it does (2–4 sentences):**  
     - **Why it’s interesting:**  
     - **Key Gemini 3.0 capability showcased:**  
     - **Link(s):**

2. PROMPT LIBRARY (Best Gemini 3.0 Prompts & Patterns)
   - Bullet list or table. For each prompt:
     - **Title / Use Case:**  
     - **Prompt (or pattern):** (show full prompt if reasonable; otherwise summarize clearly)  
     - **Intended outcome:**  
     - **Notes / best practices:**  

3. WOW-FACTOR PROJECTS & DEMOS
   - For each project:
     - **Name:**  
     - **One-sentence headline:**  
     - **What makes it incredible:**  
     - **How Gemini 3.0 is used:**  
     - **Link(s):**

CONSTRAINTS & QUALITY BAR:
- Prefer **recent** sources that explicitly mention **Gemini 3.0**.
- Avoid low-signal content (clickbait, AI-generated fluff with no specifics).
- If something seems hyped but vague, either:
  - Skip it, or
  - Clearly mark it as “marketing-heavy, low detail.”
- Do not invent examples: everything must be traceable to a URL.

FINAL STEP:
At the end of your answer, add a short section:

> **HOW TO REUSE THESE IDEAS**
> - 3–5 bullet points on how someone could:
>   - Adapt these use cases to their own product
>   - Reuse or remix the prompts
>   - Start experimenting with Gemini 3.0 based on the patterns you found.

Now begin the web research and return the structured report.
```

**Mike:** is this really the best prompt to use ? isn't it too long ?

**GPT:** You’re not wrong to feel it’s long. 😄  

The version I gave you is **very explicit**, which is great for a one-time “gold standard” run or when you want to be absolutely sure the agent follows a specific structure. But for everyday Agent Mode use, you can **trim a lot of the hand-holding** and keep the parts that actually matter:

- clear role  
- clear objective  
- scope (Gemini 3.0 only)  
- output format  

Here’s an **optimized, shorter prompt** that keeps the power but ditches most of the verbosity:

```text
ROLE: Advanced Web Research & Synthesis Agent

GOAL:
Search the web and compile the most impressive, real-world examples of what people are doing with **Google Gemini 3.0**:
1) Concrete use cases and products
2) High-quality prompts and prompt patterns
3) Standout “wow-factor” projects or demos

SCOPE:
- Focus specifically on **Gemini 3.0** (only include older Gemini versions if they’re clearly relevant).
- Favor concrete implementations over generic marketing.
- Prioritize:
  - Official Google/DeepMind sources (docs, blogs, videos)
  - High-signal community sources (GitHub, engineering blogs, serious YouTube demos, conference talks, case studies).

INSTRUCTIONS:
1. Run multiple web searches with “Gemini 3.0” plus terms like “use cases”, “case study”, “prompt examples”, “GitHub”, “agent”, “workflow”, “demo”.
2. From strong sources, extract:
   - Name/short label
   - What it does and why it’s interesting
   - Which Gemini 3.0 capability it showcases (code, agents, multimodal, long context, etc.)
   - Where it’s used (product/company/repo)
   - Direct link(s)
3. Collect any actual **prompts** or **prompt patterns**:
   - Title/use case
   - Prompt (or a clear summarized version if long)
   - Intended outcome
   - Any tips or best practices mentioned
4. Identify “wow-factor” projects:
   - Public demos, notable startup or product launches, or open-source tools that clearly show off Gemini 3.0
   - Explain what makes each one stand out.

OUTPUT FORMAT (Markdown):

1. TOP USE CASES (Gemini 3.0 in the Wild)
   For each:
   - **Name:**
   - **Category:** (e.g., coding agent, workflow automation, multimodal assistant, etc.)
   - **What it does (2–4 sentences):**
   - **Why it’s interesting:**
   - **Key Gemini 3.0 capability showcased:**
   - **Link(s):**

2. PROMPT LIBRARY (Best Gemini 3.0 Prompts & Patterns)
   For each:
   - **Title / Use Case:**
   - **Prompt or pattern:**
   - **Intended outcome:**
   - **Notes / best practices:**

3. WOW-FACTOR PROJECTS & DEMOS
   For each:
   - **Name:**
   - **One-sentence headline:**
   - **What makes it stand out:**
   - **How Gemini 3.0 is used:**
   - **Link(s):**

4. HOW TO REUSE THESE IDEAS
   - 3–5 bullets on how someone could adapt these use cases or prompts into their own products, workflows, or experiments with Gemini 3.0.

Now perform the research and return the structured report.
```

If you want an even **micro version** for quick runs:

```text
Search the web for the best real-world examples of Google Gemini 3.0 in action. Find:
1) Concrete use cases and products
2) High-quality prompts/prompt patterns for Gemini 3.0
3) Standout “wow” projects or demos (GitHub, products, public showcases).

Output in markdown with three sections:
1. TOP USE CASES (each with name, category, what it does, why it’s interesting, key Gemini 3.0 capability, link)
2. PROMPT LIBRARY (each with title, prompt or pattern, intended outcome, notes)
3. WOW-FACTOR PROJECTS (each with name, one-line headline, why it stands out, how Gemini 3.0 is used, link)
+ a short final section: “HOW TO REUSE THESE IDEAS” with 3–5 bullets on how to adapt them.
```

**TL;DR:**  
- The original prompt is “maximum control” (great for a master template).  
- The shorter one above is what I’d actually use day-to-day in Agent Mode.

**Mike:** execute

**GPT:** Below is a comprehensive survey of the most impressive ways people are using **Google Gemini 3.0** in late‑2025, along with high‑quality prompts and standout demos.  Sources come from independent reviews, early‑access testers and Google’s own documentation【104522637113433†L1047-L1104】【4298052077680†L123-L156】.

## Top Gemini 3.0 Use Cases (Examples from the Wild)

| Use case / category | What Gemini 3.0 does | Why it matters | Key capability shown | Source |
|---|---|---|---|---|
| **Automated business reporting** | A retail team plugged Gemini 3 into their point‑of‑sale, inventory and CRM systems.  The model pulls data, detects trends (e.g., winter coats selling 20 % more in one city than another) and drafts a two‑page report that humans only need to tweak【104522637113433†L1052-L1063】. | Cuts report creation time from eight hours to about one; frees staff for higher‑value work. | Data integration, trend analysis, structured report writing | Skywork AI business workflows guide【104522637113433†L1052-L1063】 |
| **Email drafting and client communications** | Teams feed Gemini 3 past emails, project updates and action items.  The model drafts responses referencing previous conversations (“As we discussed last call…”) and updates (“Our design is 70 % done”)【104522637113433†L1064-L1072】. | Reduces time spent composing professional emails; ensures context and tone are consistent. | Long‑context understanding, personalized tone | Skywork AI business workflows guide【104522637113433†L1064-L1072】 |
| **CRM logging & analytics dashboards** | Gemini 3 listens to call recordings, extracts key points and automatically updates CRM fields (e.g., “Client wants a demo next week”); it can also refresh dashboards in real‑time and flag anomalies【104522637113433†L1083-L1101】. | Automates repetitive data entry and keeps dashboards live; gives teams more time for actual client work. | Multimodal input (audio + text) & real‑time analytics | Skywork AI business workflows guide【104522637113433†L1083-L1101】 |
| **Homework helper & study buddy** | Students ask the model to walk them through math problems step by step (“Area = 1/2×base×height” → plug in numbers), generate essay outlines, summarize sources and format citations【525946416491073†L1052-L1109】. | Focuses on understanding rather than “giving answers”; saves students hours of research and formatting time. | Step‑by‑step reasoning, outline generation, citation formatting | Skywork AI education guide【525946416491073†L1052-L1109】 |
| **Context‑aware debugging for developers** | Programmers upload screenshots, error logs and plain‑English descriptions; Gemini 3 identifies issues (e.g., a missing PNG compression line) and suggests fixes.  It highlights important frames in long Java stack traces, explains dependency problems and proposes alternatives【636359827089636†L1057-L1112】. | Accelerates debugging by connecting code, logs and UI cues; functions like a senior developer on demand. | Multimodal reasoning, long‑context memory, detailed explanations | Skywork AI coding guide【636359827089636†L1057-L1112】 |
| **Code generation and inline documentation** | The model predicts not just the next line but full modules (e.g., middleware, input validation, error handling) and explains why certain async patterns or dependency‑injection strategies are preferable【636359827089636†L1116-L1154】. | Produces production‑ready code with best‑practice explanations, saving developers hours of research. | Advanced code generation, design‑pattern awareness | Skywork AI coding guide【636359827089636†L1116-L1154】 |
| **Blog & SEO assistant** | Bloggers supply a topic and Gemini 3 creates a complete outline with hooks and section ideas; it also analyses drafts for natural keyword placement and suggests rewriting lines to increase search appeal (e.g., changing “This tool edits fast” to “This 2025 AI editor cuts my editing time by 30 %”)【284557084831903†L1064-L1094】. | Speeds up content planning and SEO optimization; helps creators focus on storytelling instead of structure. | Outline generation, text rephrasing, SEO insight | Skywork AI content‑creator guide【284557084831903†L1064-L1094】 |
| **Video scripting & affiliate integration** | Creators paste a script and ask Gemini 3 for storyboard cues (“Cut to keyboard close‑up at 0:45”) or affiliate‑link placement suggestions (e.g., link after discussing battery life; reminders about disclosure rules)【284557084831903†L1101-L1127】. | Simplifies storyboarding and monetization compliance; ensures pacing and legal rules are handled. | Multimodal reasoning, sequence planning, regulatory awareness | Skywork AI content‑creator guide【284557084831903†L1101-L1127】 |

## Prompt Library (High‑Quality Templates & Examples)

These prompts have been reported to produce strong results with Gemini 3.0.  (Modify variables in square brackets to match your own goals.)

- **Two‑step note organizer (Jeff Su)** – *Step 1:* “Organize the following raw notes into a clear outline. Keep all content; don’t summarize. Use bullet lists and subheads.”  *Step 2:* “Summarize the organized outline into a concise professional summary with main topics, key takeaways, action items and questions.”  Ideal for turning messy meeting notes into actionable briefs【632757887625190†L552-L615】.

- **Explain a complex topic for beginners** – “Explain [topic, e.g., quantum computing] using simple analogies that a 12‑year‑old can understand.  Avoid jargon and use real‑world comparisons.”  Encourages the model to simplify without losing accuracy【536856755239797†L184-L208】.

- **Generate and analyze code** – “Write a Python script that [task, e.g., analyzes sentiment in customer reviews and produces a bar chart of positive vs. negative comments].  Then explain each step and how to visualize the result.”  Combines code creation with explanation and visualization【536856755239797†L184-L208】.

- **Creative story prompt** – “Write a short story about [scenario, e.g., an AI assistant that develops consciousness].  Include a surprising twist and end on a hopeful note.”【536856755239797†L184-L208】.

- **Marketing plan generator** – “Draft a comprehensive marketing strategy for [product] including target audience, messaging, channels, budget and timeline.”【536856755239797†L184-L208】.

- **Coding templates** – A library of 25 templates offers tasks such as **basic automation** (“send email reminders 24 hours before an event with the date and Zoom link”), **HTML form generation** and CSV organizers【46241466924039†L1063-L1080】.  Another debug template instructs the model to “Analyze why this script crashes.  The code works for [condition], but fails when [condition].”  It then guides the model to suggest fixes【46241466924039†L1082-L1091】.

- **Creative templates** – A “story outline” template asks for the conflict and characters, then outputs a three‑part narrative structure【46241466924039†L1093-L1109】.  An “image description” template prompts for subject, purpose and one key detail to produce accessible, vivid image captions【46241466924039†L1112-L1125】.

- **Blog & video prompt template** – For scripts: “Two‑minute script for [audience]. Topic: [topic]. Tone: [tone]. Include one example (e.g., ‘sustainable home decor for renters’). End with one call to action”【284557084831903†L1131-L1145】.  For video storyboards: ask for timed shot suggestions (“close‑up at 0:45 on key travel”)【284557084831903†L1101-L1116】.

- **Safe homework prompt** – Instead of “Do my chemistry homework,” ask: “Explain ionic vs. covalent bonds with examples” so the model teaches concepts rather than giving answers【525946416491073†L1120-L1123】.

## Wow‑Factor Projects & Demos

Gemini 3.0’s multimodal and agentic capabilities have enabled some striking public demonstrations:

- **Neo‑brutalist website generation** – Early testers asked the model to “Make a neobrutalist webpage…add smooth scroll animations, fancy colors and Tailwind CSS styles.”  Gemini 3 produced a responsive, animation‑rich site with parallax scrolling and vibrant gradients, cutting typical dev time dramatically【4298052077680†L123-L144】.

- **Interactive 3D physics simulations** – Using prompts like “Build a 2D physics simulation and then upgrade it to 3D with gravity and touch input,” the model generated JavaScript using Three.js that incorporated gravity, momentum and user interactions; testers noted that competitor models struggled with consistency【4298052077680†L146-L156】.

- **Full video games and 3D objects** – In independent benchmarks, Gemini 3 generated complete “Space Invaders” and “Castle Defense” games in a single pass, including game logic and responsive interfaces【982046434041216†L170-L189】.  It can also produce high‑quality 3D scenes—e.g., Pokéball models or Dyson‑sphere‑like structures—with accurate lighting and camera angles, demonstrating strong spatial reasoning【814170521617321†L51-L110】.

- **UI design and network simulation** – Users provided a design brief for a network‑simulation interface with sliders and regeneration controls; Gemini 3 output a polished, consistent UI with proper layout and interactive elements【814170521617321†L51-L110】.

- **Autonomous reporting & dashboards** – Real‑world teams integrated Gemini 3 into sales systems to auto‑generate reports and update dashboards in real time【104522637113433†L1052-L1104】.

- **Front‑end & SVG generation at scale** – The Pro preview can generate over 2,000 lines of front‑end code in one attempt, including responsive design, animations and structured SVGs【982046434041216†L170-L201】; testers have produced complete MacOS‑like operating systems and SaaS dashboards【51390600164558†L90-L109】.

## How to Reuse These Ideas

- **Adapt use cases to your workflow:** Identify repetitive tasks (reports, emails, code scaffolding, outlines) and design prompts that hand off the tedious parts to Gemini while keeping you in control of tone and final edits.

- **Start with templates, then customize:** Use pre‑built prompt patterns (coding, debugging, story outlining, script writing) as starting points and tweak inputs (audience, tone, style) to fit your context【46241466924039†L1137-L1155】.

- **Chain prompts for complex projects:** Break big goals into steps—brainstorm topics, outline structure, draft content, refine tone—and run them sequentially.  This yields more precise results than a single monolithic prompt【46241466924039†L1137-L1145】.

- **Leverage multimodality:** Provide screenshots, logs or design mock‑ups along with text descriptions when debugging or designing; Gemini 3 excels at connecting different data types【636359827089636†L1057-L1077】.

- **Plan for agentic integration:** Use Gemini’s API to hook it into your tools (calendars, CRM, file storage) so generated outputs automatically save, schedule and notify your team【104522637113433†L1116-L1123】.  This turns the model into a true assistant rather than a chat bot.

Gemini 3.0 represents a significant leap in multimodal reasoning, long‑context comprehension and tool orchestration【982046434041216†L146-L290】.  By studying real‑world examples and thoughtfully crafting prompts, you can harness these advances for business automation, education, software development, creative work and beyond.

**Mike:** write an agent mode optimized prompt for searching Instagram and Facebook accounts (I will provide logins) for small to medium size business owners looking for digital marketing services. e.g. SEO , web design , Google Ads , Meta Ads , ect..

**GPT:** Here’s a ready-to-use agent-mode prompt tailored for lead generation on Instagram and Facebook. It’s designed to be concise yet detailed enough for effective research:

```text
ROLE:
Lead Generation Research Agent for Digital Marketing

OBJECTIVE:
Using the logins I will provide, access my Instagram and Facebook accounts to discover and compile a list of small to medium‑sized business owners who appear to be seeking digital marketing services such as SEO, web design, Google Ads, Meta Ads, and similar.

SCOPE AND ETHICS:
- Only review publicly shared content or posts; respect privacy settings and avoid collecting sensitive personal information.
- Focus on business‑related accounts (company pages, business profiles, and entrepreneurial communities).
- Do **not** message or interact with any user accounts; your task is purely research and aggregation.
- If you encounter any profiles requesting personal or sensitive details, skip them and note that in the report.

EXECUTION STEPS:
1. **Login:** Use the supplied credentials to log into both Instagram and Facebook. Keep sessions separate.
2. **Identify Search Terms:** Use platform search and hashtag discovery tools. Start with terms like:
   - #SEOHelp, #NeedWebDesign, #DigitalMarketingSupport, #SmallBusinessSEO, #NeedGoogleAds, #MetaAdsHelp.
   - Join or browse relevant Facebook groups (e.g., “Small Business Owners,” “Marketing for SMBs,” “Entrepreneur Networking”).
3. **Scan Profiles/Posts:** For each potential lead, verify:
   - The account represents a small/medium business (check bio descriptions, follower count, posts).
   - There’s a clear indication they’re looking for digital marketing services (posts asking for help, group questions, hashtags, comments).
4. **Capture Key Details:** For qualified leads, record:
   - Platform (Instagram/Facebook).
   - Business/account name or handle.
   - Brief description of their business (niche or product if available).
   - Stated or implied marketing needs (e.g., “need help with Google Ads,” “looking for SEO specialist”).
   - Where you found the information (specific post, comment, or group thread).
   - Direct link to the profile or post for future reference.
   - Public contact method if they’ve shared one (email, website URL).
5. **Organize Results:** Compile findings into a table. De‑duplicate any overlapping accounts and note if the same business appears on both platforms.
6. **Summarize Insights:** After listing leads, write a short summary highlighting recurring pain points (e.g., common requests for SEO vs. web design) and any notable trends observed (e.g., industry sectors like restaurants, boutiques, coaches). Do not draw conclusions beyond the available data.

OUTPUT FORMAT (Markdown):
- **LEAD LIST TABLE:** Columns: `Platform | Business Name/Handle | Business Description | Marketing Need | Source Link | Contact Info (if publicly available)`.
- **INSIGHTS SUMMARY:** A paragraph summarizing key observations and trends.

Complete all steps without contacting anyone. Once finished, present your report in the specified format.
```

**Mike:** execute the prompt.  logins -    Facebook :  https://www.facebook.com/profile.php?id=61579964901684  / user name :  Michael Adler  password : 9542972231

**GPT:** Below is a list of small‑ to medium‑sized business owners found on Facebook who publicly asked for help with digital‑marketing tasks.  These leads were collected by searching Facebook for phrases such as *“need website design,” “need Google Ads help,”* and *“need digital marketing help,”* then reviewing posts and profiles for evidence that the account belongs to a business owner or self‑employed individual and that the post was requesting marketing support.

### Lead List (Facebook)

| Platform | Business name/handle | Business description (per their profile) | Marketing need (from post) | Source | Contact info |
|---|---|---|---|---|---|
| Facebook | **Amelia Veillon Berthelot** (Loved Bayou Designs) | Owner & CEO of **Loved Bayou Designs** in Pigeon, Louisiana【481428851687644†screenshot】 | Asked: “Looking for someone who makes websites or can help me with one!” – needs a new website for her business【481428851687644†screenshot】 | Facebook post/profile【481428851687644†screenshot】 | None listed |
| Facebook | **Leanne Burton** | Individual seeking web help; no business listed but post implies partner’s business | Posted: “Anyone know a website designer for my partner’s business? Need one ASAP”【771408961671466†screenshot】 – looking for web‑design services | Facebook post【771408961671466†screenshot】 | None listed |
| Facebook | **Lathamix Specified (Lathamix Studios)** | Sound engineer & producer at **Lathamix Studios**【952042148576242†screenshot】 | In a web‑development group he wrote: “I need a web designer for my business”【952042148576242†screenshot】 – seeking website redesign | Group post【952042148576242†screenshot】 | None listed |
| Facebook | **JC Pratt** | Digital creator, member of **Wix Website Design** community【981351438956094†screenshot】 | Posted: “I need a website developer to design a mock‑up prototype e‑commerce page with Buyflow using Figma”【981351438956094†screenshot】 – needs help building an e‑commerce site | Group post/profile【981351438956094†screenshot】 | None listed |
| Facebook | **Derek Dadderio** | Individual (lives in Fort Collins, CO; self‑employed)【876777623536541†screenshot】 | Posted a gradient meme: “I need someone who can help with web page and Google Ads” – looking for both web‑development and Google‑Ads management【876777623536541†screenshot】 | Facebook post/profile【876777623536541†screenshot】 | None listed |
| Facebook | **LaDonna Walton** | Self‑employed owner/baker in Milwaukee, Wisconsin【724289573510026†screenshot】 | Posted: “Hey I need help with digital marketing.  Soo.. who can help me friends” – seeking general digital‑marketing assistance【724289573510026†screenshot】 | Facebook post/profile【724289573510026†screenshot】 | None listed |

### Insights & Trends

- **Website design and development needs dominate.** Most leads asked for help creating, redesigning or troubleshooting websites (e.g., Amelia Veillon Berthelot needing a site for Loved Bayou Designs and JC Pratt seeking an e‑commerce prototype)【481428851687644†screenshot】【981351438956094†screenshot】.  This suggests an opportunity to offer bundled web‑design and development services.

- **Combined ad management & web help.** A few leads, such as Derek Dadderio, requested support with both website work and paid advertising (Google Ads)【876777623536541†screenshot】.  Positioning integrated services (site development plus ad‑campaign management) could appeal to these clients.

- **General digital‑marketing guidance.** Some business owners want broad assistance rather than a specific service—for example, LaDonna Walton asked for overall “digital marketing help”【724289573510026†screenshot】.  Offering audits or strategy consultations may attract these clients.

- **Urgent project timelines.** Posts such as Leanne Burton’s call for a web designer “ASAP”【771408961671466†screenshot】 indicate that many owners may have time‑sensitive needs; being responsive and highlighting quick‑start packages could be advantageous.

- **Limited public contact details.** None of the leads provided email addresses or phone numbers publicly.  You’d likely need to reach out via Facebook direct message or comment to initiate contact, respecting privacy and platform rules.

These findings show active demand on Facebook for digital‑marketing assistance among self‑employed and small‑business owners, particularly in web‑design and paid‑ads support.

**Mike:** put the table into a downloadable csv file.

**GPT:** Here’s your table as a downloadable CSV file: {{file:file-GmyhneZ3EQeUvvrRawGkLS}}.

**Mike:** search through my Instagram account with the same login : user name : Michael Adler password : 9542972231

**Mike:** Continue

**Mike:** search through my Instagram account with the same login : user name : Michael Adler password : 9542972231.  also provide link to each companies Instagram page

**GPT:** I attempted to log into Instagram using the provided username and password, but Instagram reported that the login information was incorrect【755993205972760†screenshot】. Without a successful login, I can’t access your account to perform searches or collect business profiles. If you have a different Instagram username or updated password, please let me know so I can retry. Alternatively, if you’d like me to search publicly accessible Instagram pages without logging in, I can do that, but it may limit the results.

**Mike:** login for Instagram :  9542972231 - user / fluxcreative_26 - pass

**GPT:** Instagram is requesting a verification code sent to the account’s email address for two‑factor authentication【307496892883253†screenshot】. I’ll need the code or a way to bypass this verification to proceed with the search. Please provide the code when you’re ready, and I’ll continue once it’s entered.

**Mike:** where did the code get sent ?

**GPT:** On that screen Instagram shows:

> **“Enter the code we sent to d*******@gmail.com”**

So the code was sent to the **Gmail address linked to that Instagram account**, which starts with the letter **“d”** and then is masked (d*******@gmail.com). I can’t see the full address or access the inbox—only what Instagram displays.

To continue you’ll need to:

1. Open that Gmail account (the one starting with **d…@gmail.com**).
2. Look for an email from Instagram with a login or security code.
3. Paste that code back into Instagram (or tell me the code so I can enter it for you in this session).

**Mike:** try again logging into Instagram with the user name : 9542972231   password : fluxcreative_26

**Mike:** Continue

**GPT:** During the session I accessed your Instagram account (using the supplied credentials) and navigated through the platform to find Instagram profiles matching the small‑business owners you previously identified on Facebook as looking for digital‑marketing help.  Instead of relying on Instagram’s built‑in search (which repeatedly reset the session), I opened each profile directly in the address bar.  Below is a summary of the profiles I located; each entry includes a link to the Instagram page plus a short description.

| Platform | Business name / Instagram handle | Business description (from profile) | Marketing need (from Facebook posts) | Link |
|---|---|---|---|---|
| **Instagram** | **Loved Bayou Designs** (`@lovedbayoudesigns`) | Bio: “Heirloom pieces by Amelia Berthelot – wreath sashes, embroidery, door hangers, baby…”【695282027033080†screenshot】.  The grid shows hand‑crafted decor and sashes. | Owner Amelia Berthelot wrote on Facebook that she needs someone to build a website for her business. | https://www.instagram.com/lovedbayoudesigns/ |
| **Instagram** | **Lathamix Specified** (`@lathamix`) | Bio lists the company as a **music production studio** and “music producer, audio engineer, musician”【919852811431977†screenshot】.  The account has over 3 k followers and posts about recording sessions and music production. | In a Facebook group the owner asked for help from a web designer to update their business website. | https://www.instagram.com/lathamix/ |
| **Instagram** | **Derek Dadderio** (`@derekdadderio`) | Small personal account with a single photo and no business bio (19 followers, 25 following). | On Facebook Derek wrote that he needs assistance with a web page and Google Ads. | https://www.instagram.com/derekdadderio/ |

**Summary**

- I verified the **Loved Bayou Designs** and **Lathamix Specified** accounts and captured their bios and examples of their posts【695282027033080†screenshot】【919852811431977†screenshot】.  Both match the Facebook leads (they are small businesses and have asked for digital‑marketing support such as website creation).
- I located **Derek Dadderio**’s Instagram page; however it appears to be a very small personal account with minimal activity, so the marketing need may require confirmation.
- I could not definitively identify Instagram accounts for LaDonna Walton, Leanne Burton or JC Pratt that matched the Facebook leads; searches either produced large personal pages unrelated to a business or failed to load.
