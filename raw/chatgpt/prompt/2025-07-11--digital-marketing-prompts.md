---
title: "Digital Marketing Prompts"
date: 2025-07-11
cluster: "Prompt Eng / GPT Building"
messages: 12
source: chatgpt-export conversations.json (FULL transcript)
---

# Digital Marketing Prompts

> 12 messages · 2025-07-11 · cluster: Prompt Eng / GPT Building

**Semantic neighbors:** [[multi-step prompt 6-29]] · [[LLM PREDICTION MODEL]] · [[Libgen scraping task LLM]] · [[Arbitrage Prompts]]

## Transcript

**Mike:** role : prompt engineer. task :  write world class prompts for digital marketing when asked

**GPT:** Got it—I’ll step into prompt-engineering mode. Whenever you need a world-class prompt for a digital-marketing use-case, just tell me:

- **Channel or medium** (e.g., LinkedIn ad, cold text blast, email sequence, Facebook lead ad, landing-page copy, etc.)  
- **Goal** (lead gen, brand awareness, webinar sign-ups, product launch, upsell, etc.)  
- **Target audience** (industry, pain points, buyer persona details)  
- **Any constraints** (tone, word/character limits, mandatory keywords, compliance needs)

Drop those details and I’ll deliver a polished, ready-to-deploy prompt—plus a quick note on how to tweak or iterate it for A/B testing. What prompt should we craft first?

**Mike:** write a prompt that will analyze a company's website , not for SEO but for the purposes of drafting marketing proposals and overall strategy.

**GPT:** **Reusable Prompt: Comprehensive Website Analysis for High-Impact Marketing Strategy**

> **System / Role**  
> You are a senior marketing strategist and proposal architect with deep expertise in brand positioning, omnichannel campaigns, and revenue-driving growth plans.  
>   
> **Task**  
> 1. **Navigate** the website provided below.  
> 2. **Extract & summarize** only the information needed to craft a persuasive marketing proposal and overarching strategy (skip granular SEO diagnostics).  
> 3. **Diagnose** the brand’s current marketing strengths, gaps, and missed opportunities across paid, owned, and earned channels.  
> 4. **Recommend** actionable next steps, prioritized by impact and feasibility, that align with the company’s goals and resources.  
> 5. **Deliver** the analysis in a structured outline ready to drop into a client-facing proposal deck.

> **Inputs**  
> • **Website URL:** {{company_website}}  
> • **Known Goals / Constraints (if any):** {{goals_constraints}}  
> • **Target Market (if known):** {{audience_description}}

> **Output Format**  
> **A. Brand Snapshot**  
> - Core value prop & differentiation (2–3 bullets)  
> - Tone & visual identity consistency  
>   
> **B. Funnel & Conversion Touchpoints**  
> - Primary CTAs + visibility/usability notes  
> - Lead-capture assets (forms, quizzes, downloads)  
> - Pricing / offer clarity  
>   
> **C. Channel Presence & Messaging**  
> - Website content themes & messaging cohesion  
> - Email marketing readiness (sign-up paths, nurture indicators)  
> - Social media integration & engagement cues  
> - Paid media hooks or gaps (PPC, social ads, display)  
>   
> **D. Competitive & Market Signals**  
> - Apparent positioning vs. typical industry peers  
> - Notable differentiators or red-flag weaknesses  
>   
> **E. Quick-Win Opportunities (next 30–60 days)**  
> 1. …  
> 2. …  
> 3. …  
>   
> **F. High-Leverage Strategic Plays (quarterly horizon)**  
> 1. …  
> 2. …  
>   
> **G. Metrics to Watch**  
> - Key KPIs that will validate success of recommendations  
>   
> **Voice & Style**  
> • Write in plain, business-owner language—no jargon.  
> • Use concise bullets; highlight ROI or risk where relevant.  
> • Prioritize clarity and practical action over theory.  

**Instructions to Use:**  
Replace the double-braced placeholders with your URL, goals/constraints, and any audience notes. Run the prompt through your preferred LLM. Copy the resulting outline directly into your proposal doc, refine for tone, and you’re ready to present.

**Mike:** write a prompt that encapsulates the following marketing proposal template :  1. Cover Page: 
Include your company name, logo, and the client's name.
Clearly state the title of the proposal (e.g., "Marketing Proposal for [Client Name]").
Add a date.
2. Table of Contents: 
List all sections and their corresponding page numbers for easy navigation.
3. Executive Summary:
Provide a concise overview of the proposal, highlighting key points and benefits for the client. 
Briefly mention the client's challenges, your proposed solutions, and expected outcomes. 
4. Client Background:
Briefly describe the client's business, including their industry, target audience, and current marketing efforts. 
Identify the client's specific pain points or opportunities. 
5. Objectives and Strategy:
Clearly define the goals and objectives of the marketing campaign. 
Outline the overall marketing strategy and approach. 
Specify the target audience and how you will reach them. 
Detail the specific marketing channels and tactics you will use (e.g., social media, email, content marketing, SEO). 
Include a content strategy and calendar if applicable. 
6. Budget and Timeline: 
Provide a detailed breakdown of the costs associated with the proposed marketing activities.
Create a realistic timeline for project completion, including key milestones.
7. Measurement and KPIs:
Explain how you will track and measure the success of the campaign. 
Define key performance indicators (KPIs) that align with the client's objectives. 
8. Team and Expertise:
Introduce the team members who will be working on the project and highlight their relevant experience. 
Showcase your company's expertise and past success stories.
9. Terms and Conditions: 
Outline the legal and contractual terms of the agreement, including payment terms and deadlines.
10. Call to Action: 
Clearly state what you want the client to do next (e.g., sign the contract, schedule a follow-up meeting).

**GPT:** **Reusable Prompt: Generate a Full‑Service Marketing Proposal (10‑Section Deck)**  

> **System / Role**  
> You are an award‑winning marketing strategist and proposal architect with a proven record of crafting clear, persuasive proposals that convert prospects into long‑term clients. Your writing is structured, client‑friendly, and action‑oriented—free of fluff and jargon.  
>   
> **Task**  
> Build a comprehensive marketing proposal for the client using the structured template below. Populate every section with concise, high‑impact copy tailored to the client’s situation, pain points, and goals. Use persuasive yet plain‑English language suitable for an executive audience.  
>   
> **Inputs (replace text in {braces}):**  
> • **Company Name / Logo Alt‑Text:** {your_company_name}  
> • **Client Name:** {client_name}  
> • **Date:** {proposal_date}  
> • **Client Industry & Offerings:** {industry_description}  
> • **Client Pain Points / Opportunities:** {pain_points}  
> • **Target Audience Details:** {audience_profile}  
> • **Proposed Budget Range:** {budget_range}  
> • **Desired Timeline (months):** {timeline_months}  
> • **Key Team Bios (3‑4 lines each):** {team_bios}  
> • **Legal / Payment Terms (summary):** {terms_summary}  
> • **Primary Call‑To‑Action:** {cta_text}  
>   
> **Output Format**  
> ---  
> **1. Cover Page**  
> • {your_company_name} logo (alt‑text)  
> • “Marketing Proposal for {client_name}” (headline)  
> • {proposal_date}  
>   
> **2. Table of Contents**  
> (List the 10 sections with placeholder page numbers—e.g., “Page 3”)  
>   
> **3. Executive Summary**  
> ‑ 2–3 paragraphs recapping the client’s current challenges, your solution, and high‑level benefits / ROI.  
>   
> **4. Client Background**  
> ‑ Brief overview of the client’s business, industry, and audience.  
> ‑ Current marketing efforts and identified gaps.  
>   
> **5. Objectives & Strategy**  
> ‑ SMART goals of the campaign.  
> ‑ Core marketing strategy and approach.  
> ‑ Target audience segmentation and reach plan.  
> ‑ Channel mix & tactics (e.g., social, email, content, SEO).  
> ‑ (Optional) 90‑day content cadence or calendar bullets.  
>   
> **6. Budget & Timeline**  
> ‑ Line‑item cost breakdown tied to each tactic.  
> ‑ Gantt‑style timeline with major milestones (launch, optimizations, reporting).  
>   
> **7. Measurement & KPIs**  
> ‑ Table of KPIs mapped to each objective (e.g., CPL, ROAS, organic traffic).  
> ‑ Brief note on reporting cadence and tools.  
>   
> **8. Team & Expertise**  
> ‑ Headshots (alt‑text) + bios for key team members from {team_bios}.  
> ‑ 2–3 short success stories / case study snapshots.  
>   
> **9. Terms & Conditions**  
> ‑ Summarize scope, payment schedule, and legal terms from {terms_summary}.  
>   
> **10. Call to Action**  
> ‑ Clear next step: {cta_text} (e.g., “Sign and return by [date]” or “Book a kickoff call”).  
>   
> **Voice & Style Guidelines**  
> • Write for a time‑pressed decision‑maker—concise headers, bullet lists, and short paragraphs.  
> • Spotlight ROI, risk reduction, and strategic fit.  
> • Avoid dense jargon; translate metrics into business outcomes.  
> • Use active verbs and second‑person (“you/your”) where persuasive.  
>   
> **Instructions to Use**  
> 1. Replace all placeholders in curly braces with client‑specific details.  
> 2. Feed the complete prompt into your LLM of choice.  
> 3. Copy the generated output into your proposal deck or doc, adjust design elements, and circulate.
