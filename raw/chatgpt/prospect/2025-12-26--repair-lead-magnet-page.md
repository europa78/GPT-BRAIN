---
title: "Repair Lead Magnet Page"
date: 2025-12-26
cluster: "Prospecting / Lead Gen"
messages: 8
source: chatgpt-export conversations.json (FULL transcript)
---

# Repair Lead Magnet Page

> 8 messages · 2025-12-26 · cluster: Prospecting / Lead Gen

**Semantic neighbors:** [[Automated lead generation]] · [[ZoomInfo lead generation]] · [[Family office prospects]] · [[Google Business Profile Task]]

## Transcript

**Mike:** Build a one-page, high-converting “Repair Lead Magnet” landing page for a commercial kitchen exhaust company. The page must be a single HTML file with embedded CSS + JavaScript (no external frameworks). Make it responsive, modern, and visually bold (industrial stainless + deep navy + safety orange accents).
Core goal
Generate leads for hood repair/service calls by offering a free lead magnet: “Kitchen Hood Repair Readiness Checklist (PDF/Print)” that unlocks after form submission.
Design requirements
Industrial/professional aesthetic: stainless gray, deep navy, subtle gradients, orange CTA accents.
Hero section must feel premium: bold headline, supporting subheadline, trust badges, and one primary CTA.
Use animations subtly: hover states, small transitions, and scroll reveal (no heavy libraries).
Sticky header with:
Logo area (text logo is fine)
Menu items
A dropdown menu labeled “Services” with at least 4 items
A “Call Now” button
Page sections (must include all)
Hero (above the fold)
Headline focused on urgent repairs: “Hood Not Pulling? Fans Loud? We Fix It Fast.”
Subheadline: NFPA-friendly, 24/7 availability optional, fast dispatch
Primary CTA button: “Get My Free Repair Checklist”
Secondary CTA: “Book a Service Call”
Add 3 trust pills: “NFPA 96 Aware”, “Same-Day Options”, “Licensed & Insured”
Interactive Repair Triage Tool (must be dynamic)
User selects:
Issue type (dropdown)
Urgency (radio buttons)
System type (dropdown)
Building type (dropdown)
Based on selections, dynamically display:
“Likely Cause” (text)
“Risk Level” (color-coded label)
“Estimated Service Range” (a realistic range)
“Recommended Next Step”
Include a “Reset” button and a “Text me the results” button that opens the lead form.
Clickable “Common Repair” cards
6 cards (e.g., fan motor, belt replacement, grease leak, make-up air issues, noisy blower, rooftop hinge kit)
Clicking a card should auto-fill triage selections and scroll the user to the triage results.
Before/After interactive slider
A horizontal draggable slider (no external libs) that compares “Before: grease buildup / poor airflow” vs “After: clean + repaired airflow”
Use simple gradient/image placeholders if real images aren’t available.
Social proof
A row of “Trusted by” logos (can be simple placeholders)
3 short testimonials with name + role + city
Lead Magnet Form (conversion-focused)
Fields: Name, Company, Phone, Email, City, “Issue Summary”
Checkbox: “After-hours / Night Service (+15% urgency dispatch)” (updates a small label in the form and updates triage estimate)
On submit:
Do not actually send anywhere; validate inputs and show success state.
Unlock a modal that displays:
A printable “Repair Readiness Checklist”
Buttons: “Print / Save as PDF” and “Copy Checklist to Clipboard”
Add microcopy: “We respond in under 15 minutes during business hours.”
FAQ accordion
6 FAQ items
Expand/collapse with smooth animation
Sticky mobile CTA bar
On small screens only: Call button + Checklist button
Behavior + UX rules
All buttons must be clickable and do something (open modal, scroll to section, toggle content).
Use semantic HTML, clean class names, and add comments throughout the code.
Must include a lightweight “theme switcher” toggle (dark/light) in the header that changes CSS variables.
Must include basic accessibility: focus states, labels, keyboard-friendly accordion and modal.
Deliverable format
Return only:
The full HTML file (with embedded CSS/JS)
A short note at the top stating what to replace to brand it (company name, phone number, colors)
Make it feel like a different landing page than typical templates — keep the same conversion logic but remix the layout, copy, and visual hierarchy so it feels fresh and unique.

**GPT:** **Brand it fast (search `TODO: BRAND` inside the HTML):** replace `COMPANY_NAME`, `PHONE_NUMBER`, `SERVICE_AREA`, and tweak the CSS variables `--navy`, `--steel`, `--orange` for your exact palette. (Reference file available: fileciteturn0file0)

```html
<!doctype html>
<html lang="en" data-theme="light">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <meta name="color-scheme" content="light dark" />
  <title>COMPANY_NAME | Emergency Hood Repair + Free Checklist</title>
  <meta name="description" content="Commercial kitchen exhaust repairs. Fast dispatch for hood fans, belts, make-up air, noise/vibration, grease leaks. Get the free Repair Readiness Checklist (print/PDF) after you submit." />

  <style>
    /* ============================================================
      REPAIR LEAD MAGNET — Single-file Landing Page (CSS + JS)
      TODO: BRAND — Replace COMPANY_NAME / PHONE_NUMBER / SERVICE_AREA
      No external frameworks. Fully responsive. Accessible basics.
    ============================================================ */

    /* ------------------------------
      THEME TOKENS (light/dark switch)
      TODO: BRAND — tweak these 3 to match your palette
    ------------------------------ */
    :root{
      --navy: 214 66% 14%;   /* deep navy */
      --steel: 220 10% 92%;  /* stainless gray */
      --orange: 24 96% 52%;  /* safety orange */

      --bg: 0 0% 100%;
      --fg: 222 22% 12%;
      --muted: 220 14% 96%;
      --muted-fg: 220 10% 42%;
      --card: 0 0% 100%;
      --border: 220 10% 86%;
      --shadow: 220 30% 10%;

      --radius-lg: 22px;
      --radius-md: 16px;
      --radius-sm: 12px;

      --focus: 214 96% 55%;
      --ok: 150 70% 40%;
      --warn: 38 95% 50%;
      --bad: 6 90% 52%;
      --critical: 0 90% 50%;

      --container: 1160px;

      /* premium industrial background */
      --bg-metal:
        radial-gradient(1200px 700px at 10% 10%, hsl(var(--steel) / .95), transparent 60%),
        radial-gradient(900px 600px at 85% 25%, hsl(0 0% 98% / .95), transparent 55%),
        linear-gradient(180deg, hsl(0 0% 100%), hsl(220 18% 98%));
      --texture:
        repeating-linear-gradient(135deg, hsl(220 10% 90% / .25) 0 10px, transparent 10px 20px),
        repeating-linear-gradient(0deg, hsl(0 0% 0% / .02) 0 2px, transparent 2px 6px);

      --grad-accent: linear-gradient(135deg, hsl(var(--orange)) 0%, hsl(var(--orange) / .86) 100%);
      --grad-navy: linear-gradient(135deg, hsl(var(--navy)) 0%, hsl(214 64% 22%) 100%);
      --glass: hsl(0 0% 100% / .72);
      --glass-border: hsl(0 0% 100% / .35);
      --shadow-sm: 0 1px 2px hsl(var(--shadow) / .08);
      --shadow-md: 0 16px 40px -24px hsl(var(--shadow) / .35);
      --shadow-lg: 0 26px 70px -40px hsl(var(--shadow) / .45);

      --ease: cubic-bezier(.2,.8,.2,1);
    }

    /* Dark theme overrides (still “industrial”, not pure black) */
    html[data-theme="dark"]{
      --bg: 220 22% 10%;
      --fg: 0 0% 96%;
      --muted: 220 20% 14%;
      --muted-fg: 220 10% 72%;
      --card: 220 22% 12%;
      --border: 220 16% 22%;
      --shadow: 0 0% 0%;

      --bg-metal:
        radial-gradient(1200px 700px at 10% 10%, hsl(220 24% 16% / .95), transparent 60%),
        radial-gradient(900px 600px at 85% 25%, hsl(220 18% 12% / .95), transparent 55%),
        linear-gradient(180deg, hsl(220 22% 10%), hsl(220 22% 8%));
      --texture:
        repeating-linear-gradient(135deg, hsl(220 10% 70% / .06) 0 10px, transparent 10px 20px),
        repeating-linear-gradient(0deg, hsl(0 0% 100% / .03) 0 2px, transparent 2px 6px);

      --glass: hsl(220 18% 14% / .72);
      --glass-border: hsl(0 0% 100% / .08);
    }

    /* ------------------------------
      BASE
    ------------------------------ */
    *{ box-sizing:border-box; }
    html,body{ height:100%; }
    body{
      margin:0;
      font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji";
      background: var(--bg-metal), var(--texture);
      color: hsl(var(--fg));
      overflow-x:hidden;
    }
    a{ color:inherit; text-decoration:none; }
    img{ max-width:100%; display:block; }
    button, input, select, textarea{ font:inherit; }
    p{ line-height:1.65; margin:0; }
    h1,h2,h3{ margin:0; line-height:1.12; letter-spacing:-.02em; }
    :focus-visible{
      outline: 3px solid hsl(var(--focus) / .7);
      outline-offset: 3px;
      border-radius: 10px;
    }
    .sr-only{
      position:absolute !important;
      width:1px; height:1px;
      padding:0; margin:-1px;
      overflow:hidden; clip: rect(0,0,0,0);
      white-space:nowrap; border:0;
    }

    .container{
      width:min(var(--container), calc(100% - 32px));
      margin:0 auto;
    }

    /* ------------------------------
      UI PRIMITIVES
    ------------------------------ */
    .glass{
      background: hsl(var(--card) / .8);
      border: 1px solid hsl(var(--border));
      box-shadow: var(--shadow-md);
      backdrop-filter: blur(14px);
    }
    .chip{
      display:inline-flex;
      align-items:center;
      gap:10px;
      padding: 10px 12px;
      border-radius: 999px;
      border: 1px solid hsl(var(--border));
      background: hsl(var(--card) / .78);
      box-shadow: var(--shadow-sm);
      font-weight: 700;
      color: hsl(var(--muted-fg));
      white-space: nowrap;
    }
    .chip b{ color: hsl(var(--fg)); }
    .pill{
      display:inline-flex;
      align-items:center;
      gap:8px;
      padding: 8px 10px;
      border-radius: 999px;
      border: 1px solid hsl(var(--border));
      background: hsl(var(--muted));
      color: hsl(var(--muted-fg));
      font-size: 13px;
      font-weight: 800;
    }
    .badge{
      display:inline-flex;
      align-items:center;
      gap:8px;
      padding: 8px 10px;
      border-radius: 999px;
      border: 1px solid hsl(var(--glass-border));
      background: hsl(0 0% 100% / .12);
      color: hsl(0 0% 100% / .92);
      font-size: 12px;
      font-weight: 900;
      letter-spacing: .04em;
      text-transform: uppercase;
    }
    html[data-theme="light"] .badge{
      background: hsl(var(--navy) / .08);
      border-color: hsl(var(--navy) / .20);
      color: hsl(var(--navy));
    }

    .btn{
      display:inline-flex;
      align-items:center;
      justify-content:center;
      gap:10px;
      padding: 12px 14px;
      border-radius: 14px;
      border: 1px solid hsl(var(--border));
      background: hsl(var(--card));
      box-shadow: var(--shadow-sm);
      cursor:pointer;
      font-weight: 900;
      transition: transform .16s var(--ease), box-shadow .16s var(--ease), background .16s var(--ease), border-color .16s var(--ease);
      white-space:nowrap;
      user-select:none;
    }
    .btn:hover{ transform: translateY(-1px); box-shadow: var(--shadow-md); }
    .btn:active{ transform: translateY(0px); box-shadow: var(--shadow-sm); }

    .btn-primary{
      background: var(--grad-accent);
      border-color: hsl(var(--orange) / .55);
      color: hsl(0 0% 100%);
      box-shadow: 0 18px 50px -28px hsl(var(--orange) / .70);
    }
    .btn-primary:hover{ box-shadow: 0 24px 70px -34px hsl(var(--orange) / .80); }

    .btn-navy{
      background: var(--grad-navy);
      border-color: hsl(var(--navy) / .55);
      color: hsl(0 0% 100%);
      box-shadow: 0 18px 50px -28px hsl(var(--navy) / .70);
    }

    .btn-ghost{
      background: transparent;
      border-color: hsl(var(--border));
      color: hsl(var(--fg));
    }
    .btn-small{
      padding: 10px 12px;
      border-radius: 12px;
      font-weight: 900;
      font-size: 14px;
    }

    .icon{
      width:18px; height:18px;
      display:inline-block;
    }
    .sep{
      height:1px;
      background: linear-gradient(90deg, transparent, hsl(var(--border)), transparent);
      margin: 18px 0;
    }

    /* ------------------------------
      STICKY HEADER
    ------------------------------ */
    header{
      position: sticky;
      top:0;
      z-index: 50;
      background: hsl(var(--glass));
      border-bottom: 1px solid hsl(var(--border));
      backdrop-filter: blur(16px);
    }
    .nav{
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap: 14px;
      padding: 12px 0;
    }
    .brand{
      display:flex;
      align-items:center;
      gap:12px;
      min-width: 220px;
    }
    .mark{
      width: 42px;
      height: 42px;
      border-radius: 14px;
      background: radial-gradient(16px 16px at 30% 30%, hsl(0 0% 100% / .25), transparent 60%),
                  linear-gradient(135deg, hsl(var(--navy)) 0%, hsl(var(--navy) / .85) 70%),
                  linear-gradient(135deg, hsl(var(--orange)) 0%, transparent 55%);
      border: 1px solid hsl(var(--border));
      box-shadow: var(--shadow-sm);
      display:grid;
      place-items:center;
      position:relative;
      overflow:hidden;
    }
    .mark::after{
      content:"";
      position:absolute;
      inset:-40%;
      background: conic-gradient(from 120deg, transparent, hsl(var(--orange) / .25), transparent);
      animation: spin 10s linear infinite;
      opacity:.55;
    }
    @keyframes spin{ to{ transform: rotate(360deg); } }
    .mark svg{ position:relative; z-index:1; }
    .brand .name{
      display:flex;
      flex-direction:column;
      line-height:1.05;
    }
    .brand .name strong{
      font-weight: 1000;
      letter-spacing: -.03em;
    }
    .brand .name small{
      color: hsl(var(--muted-fg));
      font-weight: 800;
      font-size: 12px;
    }

    nav ul{
      list-style:none;
      display:flex;
      gap: 8px;
      padding:0;
      margin:0;
      align-items:center;
    }
    .navlink{
      padding: 10px 12px;
      border-radius: 12px;
      border: 1px solid transparent;
      font-weight: 900;
      font-size: 14px;
      color: hsl(var(--fg));
      background: transparent;
      cursor:pointer;
      transition: background .16s var(--ease), border-color .16s var(--ease), transform .16s var(--ease);
    }
    .navlink:hover{
      background: hsl(var(--muted));
      border-color: hsl(var(--border));
      transform: translateY(-1px);
    }

    /* Dropdown */
    .dropdown{ position:relative; }
    .dropdown > button{
      display:inline-flex;
      align-items:center;
      gap:8px;
    }
    .menu{
      position:absolute;
      top: calc(100% + 10px);
      left: 0;
      width: min(360px, calc(100vw - 24px));
      border-radius: 16px;
      padding: 10px;
      background: hsl(var(--card) / .95);
      border: 1px solid hsl(var(--border));
      box-shadow: var(--shadow-lg);
      display:none;
    }
    .menu[data-open="true"]{ display:block; }
    .menu a{
      display:flex;
      gap: 10px;
      padding: 12px;
      border-radius: 14px;
      border: 1px solid transparent;
      transition: background .16s var(--ease), border-color .16s var(--ease);
    }
    .menu a:hover{
      background: hsl(var(--muted));
      border-color: hsl(var(--border));
    }
    .menu a b{ display:block; font-weight: 1000; }
    .menu a span{ display:block; font-size: 13px; color: hsl(var(--muted-fg)); margin-top: 2px; }

    .nav-actions{
      display:flex;
      align-items:center;
      gap:10px;
      min-width: 280px;
      justify-content:flex-end;
    }

    /* Theme switcher */
    .toggle{
      display:flex;
      align-items:center;
      gap:10px;
      padding: 8px 10px;
      border-radius: 999px;
      border: 1px solid hsl(var(--border));
      background: hsl(var(--card));
      box-shadow: var(--shadow-sm);
    }
    .toggle small{ font-weight: 900; color: hsl(var(--muted-fg)); }
    .switch{
      position:relative;
      width: 44px;
      height: 26px;
      border-radius: 999px;
      border: 1px solid hsl(var(--border));
      background: hsl(var(--muted));
      cursor:pointer;
      display:inline-flex;
      align-items:center;
      padding: 2px;
      transition: background .16s var(--ease);
    }
    .knob{
      width: 22px;
      height: 22px;
      border-radius: 999px;
      background: hsl(var(--card));
      border: 1px solid hsl(var(--border));
      box-shadow: var(--shadow-sm);
      transform: translateX(0px);
      transition: transform .18s var(--ease);
    }
    html[data-theme="dark"] .switch{ background: hsl(var(--navy) / .35); }
    html[data-theme="dark"] .knob{ transform: translateX(18px); }

    /* Mobile nav */
    .hamburger{ display:none; }
    .mobile-panel{
      display:none;
      padding: 12px 0 14px;
    }
    .mobile-panel .stack{
      display:grid;
      gap:10px;
    }

    /* ------------------------------
      HERO
    ------------------------------ */
    main{ position:relative; }
    .hero{
      padding: 44px 0 22px;
      position:relative;
    }
    .hero::before{
      content:"";
      position:absolute;
      inset:-80px 0 auto 0;
      height: 340px;
      background:
        radial-gradient(700px 240px at 20% 20%, hsl(var(--orange) / .22), transparent 60%),
        radial-gradient(800px 260px at 80% 15%, hsl(var(--navy) / .28), transparent 55%);
      pointer-events:none;
      filter: blur(0px);
      opacity: .9;
    }

    .hero-grid{
      display:grid;
      grid-template-columns: 1.15fr .85fr;
      gap: 18px;
      align-items: stretch;
      position:relative;
      z-index:1;
    }
    .hero-left{
      border-radius: calc(var(--radius-lg) + 8px);
      overflow:hidden;
      position:relative;
      background:
        radial-gradient(1000px 460px at 15% 10%, hsl(var(--steel) / .55), transparent 55%),
        linear-gradient(135deg, hsl(var(--card) / .86), hsl(var(--card) / .74));
      border: 1px solid hsl(var(--border));
      box-shadow: var(--shadow-lg);
      padding: 22px;
    }
    .hero-left .topline{
      display:flex;
      flex-wrap:wrap;
      gap:10px;
      align-items:center;
      justify-content:space-between;
      margin-bottom: 10px;
    }
    .pulse{
      display:inline-flex;
      align-items:center;
      gap:10px;
      padding: 10px 12px;
      border-radius: 999px;
      border: 1px solid hsl(var(--border));
      background: hsl(var(--card) / .72);
      box-shadow: var(--shadow-sm);
      font-weight: 1000;
    }
    .pulse i{
      width: 10px;
      height: 10px;
      border-radius:999px;
      background: hsl(var(--orange));
      box-shadow: 0 0 0 6px hsl(var(--orange) / .20);
      animation: ping 1.6s var(--ease) infinite;
    }
    @keyframes ping{
      0%{ box-shadow: 0 0 0 0 hsl(var(--orange) / .25); }
      70%{ box-shadow: 0 0 0 10px hsl(var(--orange) / 0); }
      100%{ box-shadow: 0 0 0 0 hsl(var(--orange) / 0); }
    }

    .hero h1{
      font-size: clamp(30px, 3.5vw, 52px);
      font-weight: 1000;
      letter-spacing: -.04em;
      margin: 10px 0 10px;
    }
    .hero h1 .accent{
      background: linear-gradient(135deg, hsl(var(--orange)) 0%, hsl(var(--navy)) 90%);
      -webkit-background-clip:text;
      background-clip:text;
      color:transparent;
    }
    .hero .sub{
      font-size: 16px;
      color: hsl(var(--muted-fg));
      max-width: 70ch;
      margin-bottom: 16px;
    }

    .trust-row{
      display:flex;
      flex-wrap:wrap;
      gap: 10px;
      margin: 10px 0 14px;
    }
    .cta-row{
      display:flex;
      flex-wrap:wrap;
      gap: 10px;
      align-items:center;
      margin-top: 10px;
    }
    .microcopy{
      margin-top: 10px;
      color: hsl(var(--muted-fg));
      font-size: 13px;
      font-weight: 700;
    }
    .microcopy b{ color: hsl(var(--fg)); }

    /* Right “Dispatch Console” */
    .console{
      border-radius: calc(var(--radius-lg) + 8px);
      overflow:hidden;
      border: 1px solid hsl(var(--border));
      box-shadow: var(--shadow-lg);
      background: linear-gradient(180deg, hsl(var(--card) / .88), hsl(var(--card) / .78));
      position:relative;
    }
    .console-head{
      padding: 16px 16px 14px;
      border-bottom: 1px solid hsl(var(--border));
      display:flex;
      align-items:flex-start;
      justify-content:space-between;
      gap: 10px;
      background:
        radial-gradient(420px 200px at 20% 20%, hsl(var(--navy) / .18), transparent 60%),
        linear-gradient(180deg, hsl(var(--muted) / .55), transparent);
    }
    .console-head h3{
      font-size: 16px;
      font-weight: 1000;
    }
    .console-head p{
      margin-top: 4px;
      color: hsl(var(--muted-fg));
      font-size: 13px;
      font-weight: 700;
    }
    .console-body{
      padding: 14px 16px 16px;
      display:grid;
      gap: 12px;
    }
    .mini-preview{
      border-radius: 16px;
      border: 1px dashed hsl(var(--border));
      background: hsl(var(--muted));
      padding: 12px;
    }
    .mini-preview b{ font-weight: 1000; }
    .mini-preview ul{
      margin: 10px 0 0;
      padding-left: 18px;
      color: hsl(var(--muted-fg));
      font-weight: 700;
      font-size: 13px;
      line-height: 1.5;
    }
    .kv{
      display:grid;
      grid-template-columns: 1fr auto;
      gap: 10px;
      align-items:center;
      border-radius: 16px;
      padding: 12px;
      border: 1px solid hsl(var(--border));
      background: hsl(var(--card) / .78);
      box-shadow: var(--shadow-sm);
    }
    .kv span{
      color: hsl(var(--muted-fg));
      font-size: 13px;
      font-weight: 800;
    }
    .kv b{
      font-weight: 1000;
    }

    /* ------------------------------
      SECTIONS
    ------------------------------ */
    section{
      padding: 56px 0;
    }
    .section-head{
      display:flex;
      align-items:flex-end;
      justify-content:space-between;
      gap: 16px;
      margin-bottom: 16px;
    }
    .section-head h2{
      font-size: clamp(22px, 2.5vw, 36px);
      font-weight: 1000;
    }
    .section-head p{
      max-width: 72ch;
      color: hsl(var(--muted-fg));
      font-weight: 700;
    }

    /* ------------------------------
      TRIAGE TOOL
    ------------------------------ */
    .triage-wrap{
      display:grid;
      grid-template-columns: 1fr .92fr;
      gap: 16px;
      align-items:start;
    }
    .panel{
      border-radius: var(--radius-lg);
      border: 1px solid hsl(var(--border));
      background: hsl(var(--card) / .82);
      box-shadow: var(--shadow-lg);
      overflow:hidden;
    }
    .panel-head{
      padding: 16px 16px 14px;
      border-bottom: 1px solid hsl(var(--border));
      background:
        radial-gradient(600px 260px at 20% 20%, hsl(var(--orange) / .14), transparent 60%),
        linear-gradient(180deg, hsl(var(--muted) / .55), transparent);
    }
    .panel-head h3{ font-size: 16px; font-weight: 1000; }
    .panel-head p{ margin-top: 6px; color: hsl(var(--muted-fg)); font-size: 13px; font-weight: 700; }

    .panel-body{ padding: 14px 16px 16px; }

    .grid2{
      display:grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
    }
    .field{
      display:grid;
      gap: 6px;
    }
    label{
      font-size: 12px;
      font-weight: 1000;
      letter-spacing: .06em;
      text-transform: uppercase;
      color: hsl(var(--muted-fg));
    }
    select, input[type="text"], input[type="email"], input[type="tel"], textarea{
      width: 100%;
      border-radius: 14px;
      border: 1px solid hsl(var(--border));
      background: hsl(var(--card));
      color: hsl(var(--fg));
      padding: 12px 12px;
      outline:none;
      transition: box-shadow .16s var(--ease), border-color .16s var(--ease), transform .16s var(--ease);
    }
    textarea{ min-height: 110px; resize: vertical; }
    select:focus, input:focus, textarea:focus{
      border-color: hsl(var(--focus) / .8);
      box-shadow: 0 0 0 4px hsl(var(--focus) / .18);
    }

    .radio-row{
      display:flex;
      gap: 10px;
      flex-wrap:wrap;
    }
    .radio{
      display:inline-flex;
      align-items:center;
      gap: 8px;
      padding: 10px 12px;
      border-radius: 14px;
      border: 1px solid hsl(var(--border));
      background: hsl(var(--card));
      cursor:pointer;
      user-select:none;
      transition: transform .16s var(--ease), box-shadow .16s var(--ease);
      font-weight: 900;
      color: hsl(var(--fg));
    }
    .radio:hover{ transform: translateY(-1px); box-shadow: var(--shadow-sm); }
    .radio input{ accent-color: hsl(var(--orange)); }

    .results{
      border-radius: 18px;
      border: 1px dashed hsl(var(--border));
      background: hsl(var(--muted));
      padding: 14px;
      display:grid;
      gap: 10px;
    }
    .result-row{
      display:grid;
      gap: 6px;
    }
    .result-row span{
      color: hsl(var(--muted-fg));
      font-size: 12px;
      font-weight: 1000;
      letter-spacing: .06em;
      text-transform: uppercase;
    }
    .result-row b{
      font-weight: 1000;
    }
    .risk{
      display:inline-flex;
      align-items:center;
      gap:8px;
      width: fit-content;
      padding: 8px 10px;
      border-radius: 999px;
      border: 1px solid hsl(var(--border));
      font-weight: 1000;
      background: hsl(var(--card));
    }
    .risk i{
      width: 10px; height: 10px;
      border-radius:999px;
      background: hsl(var(--ok));
    }
    .risk[data-level="low"] i{ background: hsl(var(--ok)); }
    .risk[data-level="med"] i{ background: hsl(var(--warn)); }
    .risk[data-level="high"] i{ background: hsl(var(--bad)); }
    .risk[data-level="critical"] i{ background: hsl(var(--critical)); }
    .tiny{
      font-size: 12px;
      color: hsl(var(--muted-fg));
      font-weight: 700;
    }
    .triage-actions{
      display:flex;
      flex-wrap:wrap;
      gap: 10px;
      margin-top: 12px;
    }

    /* ------------------------------
      COMMON REPAIR CARDS
    ------------------------------ */
    .repair-grid{
      display:grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 14px;
    }
    .repair-card{
      border-radius: var(--radius-lg);
      border: 1px solid hsl(var(--border));
      background: hsl(var(--card) / .84);
      box-shadow: var(--shadow-md);
      padding: 16px;
      cursor:pointer;
      transition: transform .16s var(--ease), box-shadow .16s var(--ease), border-color .16s var(--ease);
      position:relative;
      overflow:hidden;
    }
    .repair-card::before{
      content:"";
      position:absolute;
      inset:-40% -40% auto auto;
      width: 160px;
      height: 160px;
      background: radial-gradient(closest-side, hsl(var(--orange) / .22), transparent 70%);
      transform: rotate(25deg);
      opacity:.9;
      pointer-events:none;
    }
    .repair-card:hover{
      transform: translateY(-2px);
      box-shadow: var(--shadow-lg);
      border-color: hsl(var(--orange) / .40);
    }
    .repair-card h3{
      font-size: 16px;
      font-weight: 1000;
      margin-bottom: 8px;
    }
    .repair-card p{
      color: hsl(var(--muted-fg));
      font-weight: 700;
      margin-bottom: 12px;
    }
    .repair-card .tagrow{
      display:flex;
      flex-wrap:wrap;
      gap:8px;
    }

    /* ------------------------------
      BEFORE / AFTER SLIDER
    ------------------------------ */
    .ba{
      border-radius: calc(var(--radius-lg) + 6px);
      border: 1px solid hsl(var(--border));
      box-shadow: var(--shadow-lg);
      overflow:hidden;
      background: hsl(var(--card) / .86);
    }
    .ba-stage{
      position:relative;
      height: clamp(240px, 34vw, 420px);
      user-select:none;
      touch-action: none;
      overflow:hidden;
    }
    .layer{
      position:absolute;
      inset:0;
    }
    .before-layer{
      /* “Grease buildup / poor airflow” texture */
      background:
        radial-gradient(900px 380px at 20% 30%, hsl(40 90% 55% / .10), transparent 60%),
        radial-gradient(700px 360px at 70% 20%, hsl(0 0% 0% / .22), transparent 55%),
        repeating-linear-gradient(115deg, hsl(30 60% 25% / .25) 0 10px, transparent 10px 18px),
        linear-gradient(135deg, hsl(220 16% 22%), hsl(220 18% 14%));
      filter: saturate(1.1) contrast(1.05);
    }
    .after-layer{
      /* “Clean + repaired airflow” */
      background:
        radial-gradient(700px 340px at 30% 30%, hsl(var(--orange) / .14), transparent 60%),
        radial-gradient(900px 420px at 70% 30%, hsl(190 90% 55% / .10), transparent 60%),
        linear-gradient(135deg, hsl(220 16% 92%), hsl(0 0% 100%));
      clip-path: inset(0 0 0 50%);
    }
    .ba-label{
      position:absolute;
      top: 14px;
      padding: 10px 12px;
      border-radius: 999px;
      border: 1px solid hsl(var(--glass-border));
      background: hsl(0 0% 0% / .30);
      color: #fff;
      font-weight: 1000;
      letter-spacing: .02em;
      box-shadow: var(--shadow-sm);
    }
    html[data-theme="light"] .ba-label{
      background: hsl(var(--navy) / .78);
      border-color: hsl(var(--navy) / .25);
    }
    .ba-label.left{ left: 14px; }
    .ba-label.right{ right: 14px; }

    .handle{
      position:absolute;
      top:0; bottom:0;
      left: 50%;
      transform: translateX(-1px);
      width: 0;
      outline:none;
    }
    .handle::before{
      content:"";
      position:absolute;
      left:0;
      top:0; bottom:0;
      width: 2px;
      background: hsl(0 0% 100% / .9);
      box-shadow: 0 0 0 1px hsl(0 0% 0% / .20);
    }
    html[data-theme="light"] .handle::before{
      background: hsl(var(--navy) / .9);
      box-shadow: 0 0 0 1px hsl(var(--navy) / .35);
    }
    .knob-ui{
      position:absolute;
      top: 50%;
      left: 0;
      transform: translate(-50%, -50%);
      width: 46px;
      height: 46px;
      border-radius: 999px;
      border: 1px solid hsl(var(--border));
      background: hsl(var(--card));
      box-shadow: var(--shadow-md);
      display:grid;
      place-items:center;
      cursor: grab;
    }
    .knob-ui:active{ cursor: grabbing; }
    .knob-ui svg{ width: 22px; height: 22px; color: hsl(var(--navy)); }
    html[data-theme="dark"] .knob-ui svg{ color: hsl(0 0% 96%); }

    .ba-foot{
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap: 12px;
      padding: 12px 14px;
      border-top: 1px solid hsl(var(--border));
      color: hsl(var(--muted-fg));
      font-weight: 800;
      font-size: 13px;
    }

    /* ------------------------------
      SOCIAL PROOF
    ------------------------------ */
    .logo-row{
      display:grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 12px;
      align-items:center;
      opacity: .95;
      margin-top: 10px;
    }
    .logo{
      border-radius: 14px;
      border: 1px solid hsl(var(--border));
      background: hsl(var(--card) / .72);
      padding: 12px 10px;
      text-align:center;
      font-weight: 1000;
      color: hsl(var(--muted-fg));
      transition: transform .16s var(--ease), box-shadow .16s var(--ease);
      box-shadow: var(--shadow-sm);
    }
    .logo:hover{ transform: translateY(-1px); box-shadow: var(--shadow-md); color: hsl(var(--fg)); }

    .testimonials{
      margin-top: 14px;
      display:grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 14px;
    }
    .quote{
      border-radius: var(--radius-lg);
      border: 1px solid hsl(var(--border));
      background: hsl(var(--card) / .84);
      box-shadow: var(--shadow-md);
      padding: 16px;
      position:relative;
    }
    .quote::before{
      content:"“";
      position:absolute;
      top: -16px;
      left: 14px;
      font-size: 60px;
      font-weight: 1000;
      color: hsl(var(--orange) / .30);
      line-height: 1;
    }
    .quote p{
      color: hsl(var(--fg));
      font-weight: 750;
      margin-bottom: 12px;
    }
    .quote b{
      display:block;
      font-weight: 1000;
    }
    .quote span{
      display:block;
      color: hsl(var(--muted-fg));
      font-weight: 800;
      font-size: 13px;
      margin-top: 2px;
    }

    /* ------------------------------
      LEAD MAGNET FORM
    ------------------------------ */
    .lead-grid{
      display:grid;
      grid-template-columns: 1fr .95fr;
      gap: 16px;
      align-items:start;
    }
    .offer{
      border-radius: calc(var(--radius-lg) + 6px);
      border: 1px solid hsl(var(--border));
      background: var(--grad-navy);
      color: hsl(0 0% 98%);
      box-shadow: var(--shadow-lg);
      padding: 18px;
      position:relative;
      overflow:hidden;
    }
    .offer::after{
      content:"";
      position:absolute;
      inset:-2px;
      background:
        radial-gradient(700px 320px at 15% 10%, hsl(var(--orange) / .30), transparent 60%),
        radial-gradient(700px 320px at 85% 20%, hsl(0 0% 100% / .10), transparent 60%);
      opacity:.9;
      pointer-events:none;
    }
    .offer > *{ position:relative; z-index:1; }
    .offer h3{
      font-size: 22px;
      font-weight: 1000;
      letter-spacing: -.02em;
      margin-bottom: 8px;
    }
    .offer p{ color: hsl(0 0% 92% / .92); font-weight: 700; }
    .offer .list{
      margin-top: 12px;
      display:grid;
      gap: 10px;
    }
    .li{
      display:grid;
      grid-template-columns: 22px 1fr;
      gap: 10px;
      align-items:start;
      font-weight: 800;
      color: hsl(0 0% 95% / .95);
    }
    .li svg{ width: 18px; height: 18px; color: hsl(var(--orange)); }

    .form-card{
      border-radius: calc(var(--radius-lg) + 6px);
      border: 1px solid hsl(var(--border));
      background: hsl(var(--card) / .86);
      box-shadow: var(--shadow-lg);
      padding: 18px;
    }
    .form-card h3{
      font-size: 18px;
      font-weight: 1000;
      margin-bottom: 6px;
    }
    .form-card .hint{
      color: hsl(var(--muted-fg));
      font-weight: 750;
      font-size: 13px;
      margin-bottom: 14px;
    }
    .note{
      margin-top: 10px;
      font-size: 12px;
      color: hsl(var(--muted-fg));
      font-weight: 750;
    }
    .error{
      color: hsl(var(--bad));
      font-weight: 900;
      font-size: 12px;
      margin-top: 6px;
    }
    .success{
      display:none;
      margin-top: 12px;
      border-radius: 16px;
      border: 1px solid hsl(var(--ok) / .35);
      background: hsl(var(--ok) / .12);
      padding: 12px;
      font-weight: 900;
    }

    .checkbox-row{
      display:flex;
      gap: 10px;
      align-items:flex-start;
      margin-top: 6px;
      padding: 12px;
      border-radius: 16px;
      border: 1px solid hsl(var(--border));
      background: hsl(var(--muted));
    }
    .checkbox-row input{
      margin-top: 4px;
      accent-color: hsl(var(--orange));
    }
    .checkbox-row b{ display:block; font-weight: 1000; }
    .checkbox-row span{ display:block; color: hsl(var(--muted-fg)); font-weight: 750; font-size: 12px; margin-top: 2px; }
    .dispatch-pill{
      margin-top: 8px;
      display:inline-flex;
      align-items:center;
      gap:8px;
      padding: 8px 10px;
      border-radius: 999px;
      border: 1px solid hsl(var(--orange) / .35);
      background: hsl(var(--orange) / .10);
      font-weight: 1000;
      color: hsl(var(--fg));
    }

    /* ------------------------------
      FAQ (button accordion)
    ------------------------------ */
    .faq{
      display:grid;
      gap: 10px;
    }
    .faq-item{
      border-radius: var(--radius-lg);
      border: 1px solid hsl(var(--border));
      background: hsl(var(--card) / .84);
      box-shadow: var(--shadow-md);
      overflow:hidden;
    }
    .faq-q{
      width:100%;
      text-align:left;
      padding: 14px 16px;
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap: 12px;
      border: 0;
      background: transparent;
      cursor:pointer;
      font-weight: 1000;
      color: hsl(var(--fg));
    }
    .chev{
      width: 18px; height: 18px;
      transition: transform .20s var(--ease);
      flex: 0 0 auto;
    }
    .faq-item[data-open="true"] .chev{ transform: rotate(180deg); }

    .faq-a{
      max-height: 0;
      overflow:hidden;
      transition: max-height .26s var(--ease);
      border-top: 1px solid hsl(var(--border));
      background: hsl(var(--muted) / .55);
    }
    .faq-a > div{
      padding: 12px 16px 14px;
      color: hsl(var(--muted-fg));
      font-weight: 750;
    }

    /* ------------------------------
      MODAL (Checklist unlock)
    ------------------------------ */
    .modal{
      position: fixed;
      inset: 0;
      background: hsl(0 0% 0% / .58);
      display:none;
      z-index: 80;
      padding: 16px;
    }
    .modal[data-open="true"]{ display:grid; place-items:center; }
    .modal-card{
      width: min(980px, 100%);
      border-radius: 22px;
      border: 1px solid hsl(var(--border));
      background: hsl(var(--card));
      box-shadow: var(--shadow-lg);
      overflow:hidden;
    }
    .modal-head{
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap: 12px;
      padding: 14px 16px;
      border-bottom: 1px solid hsl(var(--border));
      background:
        radial-gradient(600px 240px at 20% 20%, hsl(var(--orange) / .12), transparent 60%),
        linear-gradient(180deg, hsl(var(--muted) / .6), transparent);
    }
    .modal-head h3{
      font-size: 16px;
      font-weight: 1000;
    }
    .modal-body{
      display:grid;
      grid-template-columns: 1fr 300px;
      gap: 16px;
      padding: 14px 16px 16px;
      align-items:start;
    }
    .xbtn{
      width: 42px;
      height: 42px;
      border-radius: 14px;
      border: 1px solid hsl(var(--border));
      background: hsl(var(--card));
      cursor:pointer;
      box-shadow: var(--shadow-sm);
      display:grid;
      place-items:center;
    }
    .checklist{
      border-radius: 18px;
      border: 1px solid hsl(var(--border));
      background: hsl(var(--muted));
      padding: 14px 14px 10px;
    }
    .checklist h4{ font-size: 15px; font-weight: 1000; margin-bottom: 6px; }
    .checklist .meta{
      color: hsl(var(--muted-fg));
      font-weight: 800;
      font-size: 12px;
      margin-bottom: 10px;
    }
    .checklist ul{
      margin: 0;
      padding-left: 18px;
      color: hsl(var(--fg));
      font-weight: 800;
    }
    .checklist li{ margin: 10px 0; }
    .modal-side{
      border-radius: 18px;
      border: 1px solid hsl(var(--border));
      background: hsl(var(--card));
      box-shadow: var(--shadow-sm);
      padding: 14px;
    }
    .modal-side b{ font-weight: 1000; }
    .modal-side .mini{
      margin-top: 6px;
      color: hsl(var(--muted-fg));
      font-weight: 750;
      font-size: 12px;
    }
    .modal-actions{
      margin-top: 12px;
      display:grid;
      gap: 10px;
    }

    /* Print behavior (save as PDF) */
    @media print{
      header, .mobile-bar, footer, .modal-head, .modal-side, .toast{ display:none !important; }
      body{ background: #fff !important; }
      .modal{ position: static; inset:auto; background: transparent; display:block !important; padding:0; }
      .modal-card{ border:0; box-shadow:none; }
      .modal-body{ grid-template-columns: 1fr; }
    }

    /* ------------------------------
      FOOTER
    ------------------------------ */
    footer{
      padding: 38px 0 96px;
      background: linear-gradient(180deg, hsl(var(--navy) / .08), hsl(var(--navy) / .16));
      border-top: 1px solid hsl(var(--border));
    }
    .foot-grid{
      display:grid;
      grid-template-columns: 1.1fr 1fr 1fr;
      gap: 16px;
    }
    .foot-grid h4{ font-size: 14px; font-weight: 1000; }
    .foot-grid p, .foot-grid a{
      color: hsl(var(--muted-fg));
      font-weight: 750;
      font-size: 13px;
    }
    .fine{
      margin-top: 16px;
      padding-top: 14px;
      border-top: 1px solid hsl(var(--border));
      color: hsl(var(--muted-fg));
      font-weight: 700;
      font-size: 12px;
      display:flex;
      justify-content:space-between;
      flex-wrap:wrap;
      gap: 10px;
    }

    /* ------------------------------
      REVEAL ANIMATION
    ------------------------------ */
    .reveal{
      opacity: 0;
      transform: translateY(14px);
      transition: opacity .7s var(--ease), transform .7s var(--ease);
    }
    .reveal.show{
      opacity: 1;
      transform: translateY(0);
    }

    /* ------------------------------
      MOBILE CTA BAR
    ------------------------------ */
    .mobile-bar{
      position: fixed;
      left:0; right:0; bottom:0;
      z-index: 60;
      display:none;
      padding: 10px 12px;
      background: hsl(var(--glass));
      border-top: 1px solid hsl(var(--border));
      backdrop-filter: blur(16px);
    }
    .mobile-bar .wrap{
      display:grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
    }

    /* ------------------------------
      RESPONSIVE
    ------------------------------ */
    @media (max-width: 980px){
      .hero-grid{ grid-template-columns: 1fr; }
      .triage-wrap{ grid-template-columns: 1fr; }
      .lead-grid{ grid-template-columns: 1fr; }
      .modal-body{ grid-template-columns: 1fr; }
      .foot-grid{ grid-template-columns: 1fr; }
      .logo-row{ grid-template-columns: repeat(3, 1fr); }
      .testimonials{ grid-template-columns: 1fr; }
      .nav-actions{ min-width: auto; }
    }
    @media (max-width: 860px){
      nav ul{ display:none; }
      .hamburger{ display:inline-flex; }
      .mobile-panel{ display:block; }
      .repair-grid{ grid-template-columns: 1fr; }
      .logo-row{ grid-template-columns: repeat(2, 1fr); }
      .mobile-bar{ display:block; }
      footer{ padding-bottom: 130px; }
    }
    @media (max-width: 640px){
      .grid2{ grid-template-columns: 1fr; }
      .brand{ min-width: auto; }
    }

    /* Toast */
    .toast{
      position: fixed;
      left: 50%;
      bottom: 86px;
      transform: translateX(-50%);
      z-index: 90;
      display:none;
      width: min(520px, calc(100% - 28px));
      border-radius: 16px;
      border: 1px solid hsl(var(--border));
      background: hsl(var(--card) / .92);
      box-shadow: var(--shadow-lg);
      padding: 12px 14px;
      font-weight: 900;
    }
    .toast[data-show="true"]{ display:block; }
    .toast small{ display:block; margin-top: 4px; font-weight: 750; color: hsl(var(--muted-fg)); }
  </style>
</head>

<body id="top">
  <!-- ============================================================
    TODO: BRAND — Update these values in JS below too
  ============================================================ -->
  <script>
    // Keep brand values in one place (used across UI + validation copy)
    window.BRAND = {
      COMPANY_NAME: "COMPANY_NAME",
      PHONE_NUMBER: "(000) 000-0000",
      PHONE_TEL: "+10000000000",
      SERVICE_AREA: "SERVICE_AREA"
    };
  </script>

  <!-- ===========================
    STICKY HEADER
  ============================ -->
  <header>
    <div class="container">
      <div class="nav" role="navigation" aria-label="Primary">
        <a class="brand" href="#top" aria-label="Home">
          <div class="mark" aria-hidden="true">
            <!-- Simple “fan + flame” mark -->
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M12 3c1.9 2.2 2.4 4.3 1.7 6.1 2.8-1.2 4.9-.8 6.3 1.2-1.8 1.3-3.9 1.7-6.1 1.1.9 2.9.4 5-1.9 6.6-2.3-1.6-2.8-3.7-1.9-6.6-2.2.6-4.3.2-6.1-1.1 1.4-2 3.5-2.4 6.3-1.2C9.6 7.3 10.1 5.2 12 3Z" stroke="white" stroke-width="1.6" opacity=".9"/>
              <path d="M12 12m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0" fill="white" opacity=".9"/>
            </svg>
          </div>
          <div class="name">
            <strong id="brandName">COMPANY_NAME</strong>
            <small id="brandArea">Commercial Exhaust Repair • SERVICE_AREA</small>
          </div>
        </a>

        <nav aria-label="Menu">
          <ul>
            <li><button class="navlink" data-scroll="#triage">Repair Triage</button></li>
            <li><button class="navlink" data-scroll="#repairs">Common Repairs</button></li>
            <li><button class="navlink" data-scroll="#beforeafter">Before/After</button></li>
            <li><button class="navlink" data-scroll="#proof">Proof</button></li>
            <li><button class="navlink" data-scroll="#faq">FAQ</button></li>

            <li class="dropdown">
              <button class="navlink" id="servicesBtn" aria-haspopup="true" aria-expanded="false">
                Services
                <svg class="icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </button>
              <div class="menu" id="servicesMenu" role="menu" aria-label="Services dropdown" data-open="false">
                <a href="#lead" role="menuitem" data-preset="repair">
                  <div aria-hidden="true">🛠️</div>
                  <div>
                    <b>Hood & Exhaust Fan Repair</b>
                    <span>Motors, belts, bearings, vibration, airflow issues.</span>
                  </div>
                </a>
                <a href="#triage" role="menuitem" data-preset="mua">
                  <div aria-hidden="true">🌀</div>
                  <div>
                    <b>Make-Up Air Diagnosis</b>
                    <span>Negative pressure, drafts, comfort complaints.</span>
                  </div>
                </a>
                <a href="#repairs" role="menuitem" data-preset="hinge">
                  <div aria-hidden="true">🧰</div>
                  <div>
                    <b>Rooftop Hinge Kits / Access</b>
                    <span>Safer fan service + faster cleanings later.</span>
                  </div>
                </a>
                <a href="#faq" role="menuitem" data-preset="nfpa">
                  <div aria-hidden="true">📋</div>
                  <div>
                    <b>NFPA-Aware System Checks</b>
                    <span>Documentation-friendly, code-aware repairs.</span>
                  </div>
                </a>
              </div>
            </li>
          </ul>
        </nav>

        <div class="nav-actions">
          <div class="toggle" title="Toggle theme">
            <small aria-hidden="true">Theme</small>
            <button class="switch" id="themeSwitch" type="button" aria-label="Toggle dark / light mode">
              <span class="knob" aria-hidden="true"></span>
            </button>
          </div>

          <a class="btn btn-navy btn-small" id="callNowBtn" href="tel:+10000000000" aria-label="Call now">
            <svg class="icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M7 3h3l2 5-2 1c1 3 3 5 6 6l1-2 5 2v3c0 1-1 2-2 2C10 20 4 14 4 6c0-1 1-2 3-3Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
            </svg>
            Call Now
          </a>

          <button class="btn btn-ghost btn-small hamburger" id="mobileMenuBtn" aria-label="Open mobile menu" aria-expanded="false">
            <svg class="icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile panel -->
      <div class="mobile-panel" id="mobilePanel" hidden>
        <div class="stack">
          <button class="btn btn-ghost" data-scroll="#triage">Repair Triage</button>
          <button class="btn btn-ghost" data-scroll="#repairs">Common Repairs</button>
          <button class="btn btn-ghost" data-scroll="#beforeafter">Before/After</button>
          <button class="btn btn-ghost" data-scroll="#proof">Proof</button>
          <button class="btn btn-ghost" data-scroll="#faq">FAQ</button>
          <button class="btn btn-ghost" id="mobileServicesBtn" aria-haspopup="true" aria-expanded="false">Services ▾</button>
          <div class="menu" id="mobileServicesMenu" role="menu" aria-label="Services mobile dropdown" data-open="false" style="position:static; width:100%;">
            <!-- cloned by JS for parity -->
          </div>
        </div>
      </div>
    </div>
  </header>

  <main>
    <!-- ===========================
      HERO (Above the fold)
    ============================ -->
    <section class="hero">
      <div class="container">
        <div class="hero-grid">
          <div class="hero-left reveal">
            <div class="topline">
              <div class="pulse"><i aria-hidden="true"></i> <span>Rapid repair dispatch for commercial kitchens</span></div>
              <span class="badge" id="serviceAreaBadge">Serving SERVICE_AREA</span>
            </div>

            <h1>
              Hood Not Pulling? Fans Loud?
              <span class="accent">We Fix It Fast.</span>
            </h1>

            <p class="sub">
              NFPA-friendly, documentation-aware repairs with <b>same-day options</b> and an “arrive-ready” process.
              Want fewer surprises? Grab the <b>Kitchen Hood Repair Readiness Checklist (Print/PDF)</b> and get priority follow-up.
            </p>

            <div class="trust-row" aria-label="Trust badges">
              <span class="pill">✅ NFPA 96 Aware</span>
              <span class="pill">⚡ Same-Day Options</span>
              <span class="pill">🛡️ Licensed & Insured</span>
            </div>

            <div class="cta-row">
              <button class="btn btn-primary" data-scroll="#lead" id="ctaChecklist">
                Get My Free Repair Checklist
                <svg class="icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M14 5l7 7-7 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M3 12h17" stroke="white" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </button>
              <button class="btn btn-ghost" data-scroll="#triage" id="ctaService">
                Book a Service Call
                <svg class="icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M7 11h10M7 15h7" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                  <path d="M8 3h8l3 3v15a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" stroke="currentColor" stroke-width="2"/>
                </svg>
              </button>
            </div>

            <p class="microcopy">
              <b>Micro-promise:</b> We respond in under <b>15 minutes</b> during business hours. After-hours? We’ll confirm dispatch windows.
            </p>
          </div>

          <aside class="console reveal" aria-label="Checklist preview panel">
            <div class="console-head">
              <div>
                <h3>Repair Readiness “Dispatch Console”</h3>
                <p>Submit once → unlock a printable checklist + faster call handling.</p>
              </div>
              <span class="badge">Free</span>
            </div>

            <div class="console-body">
              <div class="kv">
                <div>
                  <b>Fastest path to a fix</b>
                  <span>Send the right details before we roll.</span>
                </div>
                <span class="pill">⏱️ Under 2 min</span>
              </div>

              <div class="mini-preview" aria-label="Checklist mini preview">
                <b>What you’ll print / save:</b>
                <ul>
                  <li>5-minute airflow + fan sanity checks</li>
                  <li>Photos to take (roof + hood + controls)</li>
                  <li>What to ask your staff (symptoms + timing)</li>
                  <li>NFPA-friendly notes to record</li>
                </ul>
              </div>

              <div class="kv">
                <div>
                  <b>Prefer a text follow-up?</b>
                  <span>Run triage → tap “Text me the results.”</span>
                </div>
                <button class="btn btn-primary btn-small" data-scroll="#triage">Start Triage</button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>

    <!-- ===========================
      TRIAGE TOOL
    ============================ -->
    <section id="triage" aria-label="Interactive repair triage">
      <div class="container">
        <div class="section-head reveal">
          <div>
            <h2>Interactive Repair Triage Tool</h2>
            <p>Pick what’s happening. We’ll translate symptoms into <b>likely causes</b>, a <b>risk level</b>, a <b>service range</b>, and the <b>next best step</b>.</p>
          </div>
          <div class="chip" aria-label="Tip">
            <span aria-hidden="true">🧠</span>
            <span><b>Tip:</b> Click a “Common Repair” card below to auto-fill.</span>
          </div>
        </div>

        <div class="triage-wrap">
          <div class="panel reveal">
            <div class="panel-head">
              <h3>Inputs</h3>
              <p>These choices update the results live. Use “Reset” anytime.</p>
            </div>
            <div class="panel-body">
              <div class="grid2">
                <div class="field">
                  <label for="issueType">Issue type</label>
                  <select id="issueType">
                    <option value="">Select an issue…</option>
                    <option value="not_pulling">Not pulling / poor capture</option>
                    <option value="noisy">Fan loud / vibration</option>
                    <option value="not_running">Fan not running</option>
                    <option value="grease_leak">Grease leak / drip</option>
                    <option value="mua">Make-up air issue (negative pressure)</option>
                    <option value="odor_smoke">Smoke/odor spill into kitchen</option>
                    <option value="other">Other / not sure</option>
                  </select>
                </div>

                <div class="field">
                  <label>Urgency</label>
                  <div class="radio-row" role="radiogroup" aria-label="Urgency">
                    <label class="radio"><input type="radio" name="urgency" value="now" /> Now (service down)</label>
                    <label class="radio"><input type="radio" name="urgency" value="today" checked /> Today</label>
                    <label class="radio"><input type="radio" name="urgency" value="week" /> This week</label>
                  </div>
                </div>

                <div class="field">
                  <label for="systemType">System type</label>
                  <select id="systemType">
                    <option value="">Select a system…</option>
                    <option value="upblast">Upblast roof fan</option>
                    <option value="inline">Inline fan</option>
                    <option value="mua_unit">Make-up air unit / supply</option>
                    <option value="pcu">Pollution control unit</option>
                    <option value="utility_set">Utility set / combined</option>
                    <option value="unknown">Unknown</option>
                  </select>
                </div>

                <div class="field">
                  <label for="buildingType">Building type</label>
                  <select id="buildingType">
                    <option value="">Select a building…</option>
                    <option value="restaurant">Restaurant</option>
                    <option value="hotel">Hotel</option>
                    <option value="hospital">Hospital / healthcare</option>
                    <option value="school">School / university</option>
                    <option value="foodhall">Food hall</option>
                    <option value="manufacturing">Manufacturing kitchen</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div class="triage-actions">
                <button class="btn btn-ghost" id="triageReset" type="button">
                  Reset
                  <svg class="icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M3 12a9 9 0 1 0 3-6.7" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    <path d="M3 4v6h6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                  </svg>
                </button>

                <button class="btn btn-primary" id="triageText" type="button">
                  Text me the results
                  <svg class="icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
                    <path d="M8 8h8M8 12h6" stroke="white" stroke-width="2" stroke-linecap="round"/>
                  </svg>
                </button>
              </div>

              <p class="tiny">“Text me the results” opens the form and pre-fills your Issue Summary with this triage output.</p>
            </div>
          </div>

          <div class="panel reveal" id="triageResultsPanel" aria-label="Triage results">
            <div class="panel-head">
              <h3>Results</h3>
              <p>Realistic ranges. Final pricing depends on access, parts, roof conditions, and downtime urgency.</p>
            </div>
            <div class="panel-body">
              <div class="results" aria-live="polite">
                <div class="result-row">
                  <span>Likely Cause</span>
                  <b id="resCause">Choose options to see a likely cause.</b>
                </div>

                <div class="result-row">
                  <span>Risk Level</span>
                  <div class="risk" id="resRisk" data-level="low">
                    <i aria-hidden="true"></i>
                    <span id="resRiskText">Low</span>
                  </div>
                  <div class="tiny" id="resRiskHint">Tip: “Now” urgency increases dispatch priority (and cost).</div>
                </div>

                <div class="result-row">
                  <span>Estimated Service Range</span>
                  <b id="resRange">$—</b>
                  <div class="tiny" id="resRangeNote">Includes typical diagnostics + common labor. Parts vary.</div>
                </div>

                <div class="result-row">
                  <span>Recommended Next Step</span>
                  <b id="resNext">Run triage to get a tailored next step.</b>
                </div>

                <div class="sep"></div>
                <div class="tiny" id="resAfterHoursNote">After-hours dispatch: not selected.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===========================
      COMMON REPAIRS
    ============================ -->
    <section id="repairs" aria-label="Common repairs library">
      <div class="container">
        <div class="section-head reveal">
          <div>
            <h2>Common Repairs (Click to Auto-Fill Triage)</h2>
            <p>These are the calls we see every week. Tap one to auto-select triage inputs and jump to results.</p>
          </div>
          <button class="btn btn-ghost" data-scroll="#triage">Back to Triage</button>
        </div>

        <div class="repair-grid">
          <article class="repair-card reveal" tabindex="0" role="button"
            data-issue="not_running" data-urgency="today" data-system="upblast" data-building="restaurant">
            <h3>Fan Motor Failure</h3>
            <p>Fan stops, trips breaker, or overheats under load.</p>
            <div class="tagrow">
              <span class="pill">⚙️ Motor</span>
              <span class="pill">🔥 Heat</span>
              <span class="pill">⏱️ Downtime</span>
            </div>
          </article>

          <article class="repair-card reveal" tabindex="0" role="button"
            data-issue="noisy" data-urgency="today" data-system="upblast" data-building="restaurant">
            <h3>Belt Replacement / Alignment</h3>
            <p>Squeal, slipping, reduced RPM, burnt belt smell.</p>
            <div class="tagrow">
              <span class="pill">🧷 Belt</span>
              <span class="pill">📉 RPM</span>
              <span class="pill">🔧 Tune</span>
            </div>
          </article>

          <article class="repair-card reveal" tabindex="0" role="button"
            data-issue="grease_leak" data-urgency="now" data-system="upblast" data-building="foodhall">
            <h3>Grease Leak / Drip</h3>
            <p>Pooling grease, drip lines, messy hood/roof area.</p>
            <div class="tagrow">
              <span class="pill">🛢️ Leak</span>
              <span class="pill">⚠️ Fire risk</span>
              <span class="pill">🧼 Cleanup</span>
            </div>
          </article>

          <article class="repair-card reveal" tabindex="0" role="button"
            data-issue="mua" data-urgency="today" data-system="mua_unit" data-building="hotel">
            <h3>Make-Up Air Problems</h3>
            <p>Doors hard to open, drafts, poor capture, comfort issues.</p>
            <div class="tagrow">
              <span class="pill">🌀 Pressure</span>
              <span class="pill">🚪 Doors</span>
              <span class="pill">🌡️ Comfort</span>
            </div>
          </article>

          <article class="repair-card reveal" tabindex="0" role="button"
            data-issue="noisy" data-urgency="week" data-system="inline" data-building="school">
            <h3>Noisy Blower / Bearings</h3>
            <p>Grinding, rattling, vibration through ductwork.</p>
            <div class="tagrow">
              <span class="pill">🎛️ Bearings</span>
              <span class="pill">🔊 Noise</span>
              <span class="pill">🧱 Vibration</span>
            </div>
          </article>

          <article class="repair-card reveal" tabindex="0" role="button"
            data-issue="not_pulling" data-urgency="week" data-system="upblast" data-building="restaurant">
            <h3>Rooftop Hinge Kit / Access</h3>
            <p>Unsafe service access slows repairs and cleanings.</p>
            <div class="tagrow">
              <span class="pill">🧰 Safety</span>
              <span class="pill">🏁 Faster service</span>
              <span class="pill">📋 Compliance</span>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- ===========================
      BEFORE / AFTER
    ============================ -->
    <section id="beforeafter" aria-label="Before and after slider">
      <div class="container">
        <div class="section-head reveal">
          <div>
            <h2>Before / After: Airflow & “Capture” Feel</h2>
            <p>Drag the handle. This is what “restricted + greasy” vs “clean + repaired airflow” typically feels like to staff.</p>
          </div>
          <button class="btn btn-primary" data-scroll="#lead">Get the Checklist</button>
        </div>

        <div class="ba reveal">
          <div class="ba-stage" id="baStage">
            <div class="layer before-layer" aria-hidden="true"></div>
            <div class="layer after-layer" id="afterLayer" aria-hidden="true"></div>

            <div class="ba-label left">Before: grease buildup / poor airflow</div>
            <div class="ba-label right">After: clean + repaired airflow</div>

            <!-- Accessible slider handle -->
            <div class="handle" id="baHandle"
              role="slider"
              tabindex="0"
              aria-label="Before and after comparison slider"
              aria-valuemin="0" aria-valuemax="100" aria-valuenow="50"
              aria-valuetext="50 percent after">
              <div class="knob-ui" id="baKnob" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M10 7l-5 5 5 5M14 7l5 5-5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
          </div>

          <div class="ba-foot">
            <span><b>Pro tip:</b> If odor/smoke shows up “suddenly”, capture may be down due to belts, RPM, or make-up air balance.</span>
            <button class="btn btn-ghost btn-small" data-scroll="#triage">Run Triage</button>
          </div>
        </div>
      </div>
    </section>

    <!-- ===========================
      SOCIAL PROOF
    ============================ -->
    <section id="proof" aria-label="Social proof and testimonials">
      <div class="container">
        <div class="section-head reveal">
          <div>
            <h2>Trusted By Teams Who Can’t Afford Downtime</h2>
            <p>Logos below are placeholders — swap with real client logos anytime.</p>
          </div>
          <span class="chip"><span aria-hidden="true">🔒</span> <span><b>Professional:</b> We document what we touch.</span></span>
        </div>

        <div class="logo-row reveal" aria-label="Trusted by logos">
          <div class="logo">Hotel Group</div>
          <div class="logo">Regional Hospital</div>
          <div class="logo">Campus Dining</div>
          <div class="logo">Food Hall</div>
          <div class="logo">Restaurant Group</div>
        </div>

        <div class="testimonials">
          <div class="quote reveal">
            <p>“They showed up with the right parts and had us back online fast. Clear notes for management.”</p>
            <b>Jordan M.</b>
            <span>GM • Restaurant Group • Miami</span>
          </div>
          <div class="quote reveal">
            <p>“Our fan was shaking the duct. They diagnosed bearings + balance, and the noise disappeared.”</p>
            <b>Elena R.</b>
            <span>Facilities • Hotel • Fort Lauderdale</span>
          </div>
          <div class="quote reveal">
            <p>“Checklist was legit. It helped my team capture the exact symptoms so the tech didn’t waste time.”</p>
            <b>Sam K.</b>
            <span>Kitchen Manager • Campus Dining • Boca Raton</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ===========================
      LEAD MAGNET FORM (Unlocks Modal)
    ============================ -->
    <section id="lead" aria-label="Lead magnet form">
      <div class="container">
        <div class="section-head reveal">
          <div>
            <h2>Get the “Repair Readiness Checklist” (Print/PDF)</h2>
            <p>Submit the form → we validate your details → you instantly unlock a printable checklist. No spam. Just faster help.</p>
          </div>
          <a class="btn btn-navy" href="tel:+10000000000" id="leadCallBtn">Call Dispatch</a>
        </div>

        <div class="lead-grid">
          <aside class="offer reveal" aria-label="Offer details">
            <h3>Your Free Lead Magnet</h3>
            <p>
              The fastest way to reduce back-and-forth is to send the right info the first time.
              This checklist is built for managers and facility teams — <b>simple, fast, and practical</b>.
            </p>

            <div class="list">
              <div class="li">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <div>Spot obvious airflow/fan issues in under 5 minutes.</div>
              </div>
              <div class="li">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <div>Capture the photos techs actually need (roof + hood + controls).</div>
              </div>
              <div class="li">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <div>NFPA-friendly notes so your documentation is cleaner.</div>
              </div>
              <div class="li">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <div>Know when it’s “repair now” vs “schedule this week.”</div>
              </div>
            </div>

            <div class="sep"></div>
            <span class="badge">We respond in under 15 minutes during business hours.</span>
          </aside>

          <div class="form-card reveal">
            <h3>Unlock the Checklist</h3>
            <p class="hint">We’ll use this to confirm access + send your checklist link (and/or a text). <b>No sending</b> happens on this demo page.</p>

            <form id="leadForm" novalidate>
              <div class="grid2">
                <div class="field">
                  <label for="fName">Name</label>
                  <input id="fName" name="name" type="text" autocomplete="name" required />
                  <div class="error" id="eName" hidden>Please enter your name.</div>
                </div>

                <div class="field">
                  <label for="fCompany">Company</label>
                  <input id="fCompany" name="company" type="text" autocomplete="organization" required />
                  <div class="error" id="eCompany" hidden>Please enter your company.</div>
                </div>

                <div class="field">
                  <label for="fPhone">Phone</label>
                  <input id="fPhone" name="phone" type="tel" autocomplete="tel" inputmode="tel" placeholder="(555) 555-5555" required />
                  <div class="error" id="ePhone" hidden>Please enter a valid phone number.</div>
                </div>

                <div class="field">
                  <label for="fEmail">Email</label>
                  <input id="fEmail" name="email" type="email" autocomplete="email" placeholder="name@company.com" required />
                  <div class="error" id="eEmail" hidden>Please enter a valid email.</div>
                </div>

                <div class="field">
                  <label for="fCity">City</label>
                  <input id="fCity" name="city" type="text" autocomplete="address-level2" required />
                  <div class="error" id="eCity" hidden>Please enter your city.</div>
                </div>

                <div class="field">
                  <label for="fIssue">Issue Summary</label>
                  <textarea id="fIssue" name="issue" placeholder="Example: fan loud + hood not pulling since lunch rush; rooftop upblast; restaurant; need today."></textarea>
                  <div class="note">Tip: If you used triage, this box is pre-filled with your results.</div>
                </div>
              </div>

              <div class="checkbox-row">
                <input id="afterHours" type="checkbox" />
                <div>
                  <b>After-hours / Night Service (+15% urgency dispatch)</b>
                  <span id="afterHoursCopy">Not selected — normal dispatch estimate.</span>
                  <div class="dispatch-pill" id="dispatchPill" aria-live="polite">Dispatch: Standard</div>
                </div>
              </div>

              <div class="sep"></div>

              <button class="btn btn-primary" type="submit" id="submitBtn">
                Unlock Checklist Now
                <svg class="icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M14 5l7 7-7 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M3 12h17" stroke="white" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </button>

              <div class="success" id="successBox" role="status" aria-live="polite">
                ✅ Success — Checklist unlocked. You can print/save as PDF in the modal.
                <div class="note">Microcopy: We respond in under 15 minutes during business hours.</div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- ===========================
      FAQ
    ============================ -->
    <section id="faq" aria-label="Frequently asked questions">
      <div class="container">
        <div class="section-head reveal">
          <div>
            <h2>FAQ (Fast Answers)</h2>
            <p>Short, practical, and based on what actually happens during emergency service calls.</p>
          </div>
          <button class="btn btn-ghost" data-scroll="#lead">Get the Checklist</button>
        </div>

        <div class="faq">
          <div class="faq-item reveal" data-open="false">
            <button class="faq-q" aria-expanded="false">
              Do you do same-day repairs?
              <svg class="chev" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
            </button>
            <div class="faq-a" role="region">
              <div>Often, yes — depending on access, parts, and roof conditions. If you select “Now” or “Today” in triage, we’ll guide you on the fastest path.</div>
            </div>
          </div>

          <div class="faq-item reveal" data-open="false">
            <button class="faq-q" aria-expanded="false">
              What’s the most common reason a hood “stops pulling”?
              <svg class="chev" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
            </button>
            <div class="faq-a" role="region">
              <div>Belts slipping, fan RPM dropping, or make-up air imbalance (negative pressure). A quick symptom checklist saves time on-site.</div>
            </div>
          </div>

          <div class="faq-item reveal" data-open="false">
            <button class="faq-q" aria-expanded="false">
              Can you work with NFPA 96 documentation requirements?
              <svg class="chev" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
            </button>
            <div class="faq-a" role="region">
              <div>We’re “NFPA 96 aware” and document what we touch: symptoms, parts changed, and access notes. This helps facility teams keep cleaner records.</div>
            </div>
          </div>

          <div class="faq-item reveal" data-open="false">
            <button class="faq-q" aria-expanded="false">
              Do repairs include parts?
              <svg class="chev" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
            </button>
            <div class="faq-a" role="region">
              <div>Service ranges include typical diagnostics + labor. Parts vary (motor/belt/bearing/control). We confirm before installing whenever possible.</div>
            </div>
          </div>

          <div class="faq-item reveal" data-open="false">
            <button class="faq-q" aria-expanded="false">
              What should I do before the tech arrives?
              <svg class="chev" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
            </button>
            <div class="faq-a" role="region">
              <div>Have roof access ready (keys/escort), locate fan disconnect/switch, and gather timing details (“when did it start?”). The checklist makes this painless.</div>
            </div>
          </div>

          <div class="faq-item reveal" data-open="false">
            <button class="faq-q" aria-expanded="false">
              After-hours service—how does it work?
              <svg class="chev" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
            </button>
            <div class="faq-a" role="region">
              <div>If you check the after-hours box, we prioritize urgency windows and coordinate access. The estimator adds a 15% urgency dispatch factor.</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer aria-label="Footer">
      <div class="container">
        <div class="foot-grid">
          <div>
            <h4 id="footName">COMPANY_NAME</h4>
            <p>Commercial kitchen exhaust repair + service calls. Built for fast dispatch and clean documentation.</p>
          </div>
          <div>
            <h4>Contact</h4>
            <p><a id="footCall" href="tel:+10000000000">Call: (000) 000-0000</a></p>
            <p><a href="#lead" data-scroll="#lead">Get the checklist</a></p>
          </div>
          <div>
            <h4>Service Area</h4>
            <p id="footArea">SERVICE_AREA + surrounding areas</p>
            <p class="note">This is a demo page: form submission is simulated.</p>
          </div>
        </div>
        <div class="fine">
          <span>© <span id="year"></span> <span id="fineName">COMPANY_NAME</span>. All rights reserved.</span>
          <span>Accessibility: keyboard-friendly modal, accordion, focus states.</span>
        </div>
      </div>
    </footer>
  </main>

  <!-- ===========================
    STICKY MOBILE CTA BAR (small screens)
  ============================ -->
  <div class="mobile-bar" aria-label="Mobile call to action bar">
    <div class="container">
      <div class="wrap">
        <a class="btn btn-navy" id="mobileCall" href="tel:+10000000000">Call Now</a>
        <button class="btn btn-primary" data-scroll="#lead">Checklist</button>
      </div>
    </div>
  </div>

  <!-- ===========================
    MODAL: Checklist Unlock
  ============================ -->
  <div class="modal" id="modal" role="dialog" aria-modal="true" aria-labelledby="modalTitle" data-open="false">
    <div class="modal-card" role="document">
      <div class="modal-head">
        <h3 id="modalTitle">Kitchen Hood Repair Readiness Checklist (Print/PDF)</h3>
        <button class="xbtn" id="modalClose" type="button" aria-label="Close checklist modal">
          <svg class="icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
      </div>

      <div class="modal-body">
        <div class="checklist" id="checklistArea">
          <h4>Print this + keep it near your hood controls</h4>
          <div class="meta">
            Use this checklist before a service call. It shortens diagnosis time and helps us arrive ready.
            <br /><b>Microcopy:</b> We respond in under 15 minutes during business hours.
          </div>

          <h4>1) Quick “Is it safe to run?” checks</h4>
          <ul>
            <li>Is smoke or heat spilling into the kitchen during normal cooking?</li>
            <li>Is the fan running continuously, or does it stop / trip?</li>
            <li>Any unusual grinding, squealing, or violent vibration?</li>
            <li>Any visible grease drip, pooling, or strong burnt odor?</li>
          </ul>

          <h4 style="margin-top:14px;">2) Photos to take (60 seconds)</h4>
          <ul>
            <li>Inside hood (filters, grease cups, obvious blockage)</li>
            <li>Controls / switch / disconnect (label if possible)</li>
            <li>Roof fan (if accessible) — overall shot + belt/motor area</li>
            <li>Any grease leak points (duct seams, fan curb, rooftop area)</li>
          </ul>

          <h4 style="margin-top:14px;">3) What to note for dispatch</h4>
          <ul>
            <li>When did it start? (exact time + what changed)</li>
            <li>Is the kitchen in service, partially down, or closed?</li>
            <li>Building type + roof access process (keys/escort/ladder)</li>
            <li>System type (upblast/inline/make-up air/PCU if known)</li>
          </ul>

          <h4 style="margin-top:14px;">4) Optional “NFPA-friendly” notes</h4>
          <ul>
            <li>Any recent cleaning date, filter changes, or fan service?</li>
            <li>Any fire suppression system issues or alarms?</li>
            <li>Any previous recurring symptoms (noise, odor, weak capture)?</li>
          </ul>

          <div class="sep"></div>
          <div class="tiny" id="modalTriageSummary">Triage summary: (run triage to include your results here)</div>
        </div>

        <aside class="modal-side" aria-label="Checklist actions">
          <b>Actions</b>
          <div class="mini">Print / Save as PDF uses your browser’s print dialog.</div>

          <div class="modal-actions">
            <button class="btn btn-primary" id="btnPrint" type="button">Print / Save as PDF</button>
            <button class="btn btn-ghost" id="btnCopy" type="button">Copy Checklist to Clipboard</button>
            <a class="btn btn-navy" id="btnCallFromModal" href="tel:+10000000000">Call Dispatch</a>
          </div>

          <div class="sep"></div>
          <div class="mini">
            <b>What happens next?</b><br/>
            We confirm symptoms + access → then schedule the fastest route to restore capture and keep your kitchen moving.
          </div>
        </aside>
      </div>
    </div>
  </div>

  <!-- Toast -->
  <div class="toast" id="toast" role="status" aria-live="polite" data-show="false"></div>

  <script>
    /* ============================================================
      INTERACTIONS (No external libraries)
      - Smooth scroll
      - Dropdown menu
      - Theme toggle (CSS variables via data-theme)
      - Scroll reveal
      - Triage engine + presets
      - Before/After draggable slider (pointer + keyboard)
      - Accordion (keyboard-friendly)
      - Modal (focus trap + ESC)
      - Form validation + unlock modal
    ============================================================ */

    const $ = (sel, root=document) => root.querySelector(sel);
    const $ = (sel, root=document) => Array.from(root.querySelectorAll(sel));

    const BRAND = window.BRAND || {
      COMPANY_NAME: "COMPANY_NAME",
      PHONE_NUMBER: "(000) 000-0000",
      PHONE_TEL: "+10000000000",
      SERVICE_AREA: "SERVICE_AREA"
    };

    // ---------------------------
    // BRAND INJECTION (TODO: BRAND)
    // ---------------------------
    function applyBrand(){
      $("#brandName").textContent = BRAND.COMPANY_NAME;
      $("#brandArea").textContent = `Commercial Exhaust Repair • ${BRAND.SERVICE_AREA}`;
      $("#serviceAreaBadge").textContent = `Serving ${BRAND.SERVICE_AREA}`;

      $("#footName").textContent = BRAND.COMPANY_NAME;
      $("#fineName").textContent = BRAND.COMPANY_NAME;
      $("#footArea").textContent = `${BRAND.SERVICE_AREA} + surrounding areas`;

      const telLinks = ["#callNowBtn","#leadCallBtn","#footCall","#mobileCall","#btnCallFromModal"];
      telLinks.forEach(sel=>{
        const el = $(sel);
        if(!el) return;
        el.setAttribute("href", `tel:${BRAND.PHONE_TEL}`);
        if(sel === "#footCall") el.textContent = `Call: ${BRAND.PHONE_NUMBER}`;
      });

      $("#year").textContent = new Date().getFullYear();
      document.title = `${BRAND.COMPANY_NAME} | Emergency Hood Repair + Free Checklist`;
    }

    // ---------------------------
    // SMOOTH SCROLL
    // ---------------------------
    function smoothScrollTo(target){
      const el = typeof target === "string" ? $(target) : target;
      if(!el) return;
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    function wireScrollButtons(){
      $("[data-scroll]").forEach(btn=>{
        btn.addEventListener("click", (e)=>{
          const href = btn.getAttribute("data-scroll") || btn.getAttribute("href");
          if(href && href.startsWith("#")){
            e.preventDefault();
            smoothScrollTo(href);
          }
        });
      });
    }

    // ---------------------------
    // DROPDOWN (desktop)
    // ---------------------------
    const servicesBtn = $("#servicesBtn");
    const servicesMenu = $("#servicesMenu");

    function setMenu(open){
      servicesMenu.dataset.open = open ? "true" : "false";
      servicesBtn.setAttribute("aria-expanded", open ? "true" : "false");
    }
    function toggleMenu(){
      setMenu(servicesMenu.dataset.open !== "true");
    }

    function closeMenuOnOutside(){
      document.addEventListener("click", (e)=>{
        const inside = servicesMenu.contains(e.target) || servicesBtn.contains(e.target);
        if(!inside) setMenu(false);
      });
      document.addEventListener("keydown", (e)=>{
        if(e.key === "Escape") setMenu(false);
      });
    }

    servicesBtn?.addEventListener("click", (e)=>{
      e.preventDefault();
      toggleMenu();
    });

    // Make dropdown items “do something” (scroll + optional presets)
    servicesMenu?.addEventListener("click", (e)=>{
      const a = e.target.closest("a");
      if(!a) return;
      setMenu(false);
      const preset = a.getAttribute("data-preset");
      if(preset){
        // quick “soft preset” just to show interactivity
        if(preset === "mua"){
          triageSet({ issue:"mua", urgency:"today", system:"mua_unit", building:"restaurant" });
        } else if(preset === "hinge"){
          triageSet({ issue:"not_pulling", urgency:"week", system:"upblast", building:"restaurant" });
        } else if(preset === "nfpa"){
          // no triage change; just a toast
          toast("NFPA-aware system checks", "We document symptoms, parts, and access notes for cleaner records.");
        } else {
          triageSet({ issue:"noisy", urgency:"today", system:"upblast", building:"restaurant" });
        }
      }
    });

    // ---------------------------
    // MOBILE MENU
    // ---------------------------
    const mobileMenuBtn = $("#mobileMenuBtn");
    const mobilePanel = $("#mobilePanel");
    const mobileServicesBtn = $("#mobileServicesBtn");
    const mobileServicesMenu = $("#mobileServicesMenu");

    function cloneServicesForMobile(){
      // clone services items for mobile dropdown
      mobileServicesMenu.innerHTML = servicesMenu.innerHTML;
    }
    function toggleMobilePanel(){
      const isHidden = mobilePanel.hasAttribute("hidden");
      mobilePanel.toggleAttribute("hidden", !isHidden ? true : false);
      mobileMenuBtn.setAttribute("aria-expanded", isHidden ? "true" : "false");
    }
    function toggleMobileServices(){
      const open = mobileServicesMenu.dataset.open !== "true";
      mobileServicesMenu.dataset.open = open ? "true" : "false";
      mobileServicesBtn.setAttribute("aria-expanded", open ? "true" : "false");
    }

    mobileMenuBtn?.addEventListener("click", toggleMobilePanel);
    mobileServicesBtn?.addEventListener("click", toggleMobileServices);

    mobilePanel?.addEventListener("click", (e)=>{
      const btn = e.target.closest("[data-scroll]");
      if(btn){
        const target = btn.getAttribute("data-scroll");
        smoothScrollTo(target);
        // close mobile panel after navigation
        toggleMobilePanel();
      }
      const a = e.target.closest("a[data-preset]");
      if(a){
        toggleMobilePanel();
        const preset = a.getAttribute("data-preset");
        // mirror desktop dropdown behavior
        if(preset === "mua"){
          triageSet({ issue:"mua", urgency:"today", system:"mua_unit", building:"restaurant" });
        } else if(preset === "hinge"){
          triageSet({ issue:"not_pulling", urgency:"week", system:"upblast", building:"restaurant" });
        } else if(preset === "nfpa"){
          toast("NFPA-aware system checks", "We document symptoms, parts, and access notes for cleaner records.");
        } else {
          triageSet({ issue:"noisy", urgency:"today", system:"upblast", building:"restaurant" });
        }
      }
    });

    // ---------------------------
    // THEME SWITCHER
    // ---------------------------
    const themeSwitch = $("#themeSwitch");
    function setTheme(next){
      document.documentElement.setAttribute("data-theme", next);
      try{ localStorage.setItem("repair_theme", next); }catch(_){}
    }
    function initTheme(){
      let saved = null;
      try{ saved = localStorage.getItem("repair_theme"); }catch(_){}
      if(saved === "dark" || saved === "light"){
        setTheme(saved);
      } else {
        // default: light (but respect OS if user prefers)
        const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
        setTheme(prefersDark ? "dark" : "light");
      }
    }
    themeSwitch?.addEventListener("click", ()=>{
      const cur = document.documentElement.getAttribute("data-theme") || "light";
      setTheme(cur === "light" ? "dark" : "light");
    });

    // ---------------------------
    // SCROLL REVEAL
    // ---------------------------
    function initReveal(){
      const els = $(".reveal");
      const io = new IntersectionObserver((entries)=>{
        entries.forEach(entry=>{
          if(entry.isIntersecting){
            entry.target.classList.add("show");
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
      els.forEach(el=> io.observe(el));
    }

    // ---------------------------
    // TOAST
    // ---------------------------
    let toastTimer = null;
    function toast(title, detail=""){
      const t = $("#toast");
      t.innerHTML = `${title}${detail ? `<small>${detail}</small>` : ""}`;
      t.dataset.show = "true";
      clearTimeout(toastTimer);
      toastTimer = setTimeout(()=>{ t.dataset.show = "false"; }, 3200);
    }

    // ---------------------------
    // TRIAGE ENGINE
    // ---------------------------
    const issueType = $("#issueType");
    const systemType = $("#systemType");
    const buildingType = $("#buildingType");
    const urgencyRadios = $('input[name="urgency"]');

    const resCause = $("#resCause");
    const resRisk = $("#resRisk");
    const resRiskText = $("#resRiskText");
    const resRange = $("#resRange");
    const resNext = $("#resNext");
    const resAfterHoursNote = $("#resAfterHoursNote");
    const modalTriageSummary = $("#modalTriageSummary");

    const afterHours = $("#afterHours");
    const afterHoursCopy = $("#afterHoursCopy");
    const dispatchPill = $("#dispatchPill");

    // Helper: currency range formatting
    function formatRange(min, max){
      const f = n => n.toLocaleString(undefined, { style:"currency", currency:"USD", maximumFractionDigits:0 });
      return `${f(min)} – ${f(max)}`;
    }

    // “Realistic” base ranges by issue/system. You can tweak.
    const TRIAGE_MAP = {
      not_pulling: {
        label: "Not pulling / poor capture",
        cause: "Reduced fan RPM (belt slip, motor stress) or make-up air imbalance causing negative pressure.",
        base: [450, 980],
        next: "Confirm fan is running, check for belt slip, and note whether doors are hard to open (pressure)."
      },
      noisy: {
        label: "Fan loud / vibration",
        cause: "Belt/bearing wear, loose fasteners, or imbalance creating vibration through the curb/duct.",
        base: [350, 850],
        next: "If vibration is severe, reduce operation and schedule service to prevent bearing seizure or fan damage."
      },
      not_running: {
        label: "Fan not running",
        cause: "Tripped breaker, failed motor, bad contactor, or disconnect/controls issue.",
        base: [420, 1250],
        next: "Verify disconnect position, note any breaker trips, and capture a photo of the control/disconnect labels."
      },
      grease_leak: {
        label: "Grease leak / drip",
        cause: "Grease accumulation + bad seals/duct seams, missing cups, or drainage issues near fan/curb.",
        base: [500, 1400],
        next: "Treat as urgent: document leak location and keep ignition sources away until assessed."
      },
      mua: {
        label: "Make-up air issue",
        cause: "Supply air not matching exhaust (filters, belts, controls) causing negative pressure and poor capture.",
        base: [450, 1100],
        next: "Note door pressure, drafts, and whether MUA unit runs when the hood is on."
      },
      odor_smoke: {
        label: "Smoke/odor spill",
        cause: "Capture failure from airflow restriction, fan RPM drop, or pressure imbalance; sometimes grease buildup.",
        base: [500, 1350],
        next: "Run triage and capture photos; if smoke spills into kitchen, treat as high risk and prioritize service."
      },
      other: {
        label: "Other / not sure",
        cause: "Multiple factors possible — we’ll narrow it down based on symptoms + photos + access details.",
        base: [350, 1100],
        next: "Use the checklist to capture the key details. The more precise your notes, the faster the fix."
      }
    };

    const SYSTEM_MOD = {
      upblast: { label:"Upblast roof fan", add:[0, 120] },
      inline: { label:"Inline fan", add:[80, 220] },
      mua_unit: { label:"Make-up air unit", add:[120, 260] },
      pcu: { label:"Pollution control unit", add:[180, 380] },
      utility_set: { label:"Utility set", add:[160, 340] },
      unknown: { label:"Unknown", add:[60, 180] },
      "": { label:"", add:[0, 0] }
    };

    const BUILDING_MOD = {
      restaurant: { label:"Restaurant", mult: 1.00 },
      hotel: { label:"Hotel", mult: 1.05 },
      hospital: { label:"Hospital/Healthcare", mult: 1.12 },
      school: { label:"School/University", mult: 1.08 },
      foodhall: { label:"Food hall", mult: 1.06 },
      manufacturing: { label:"Manufacturing kitchen", mult: 1.10 },
      other: { label:"Other", mult: 1.02 },
      "": { label:"", mult: 1.00 }
    };

    function getUrgency(){
      const found = urgencyRadios.find(r => r.checked);
      return found ? found.value : "today";
    }

    function riskFrom(issue, urgency){
      // Basic risk model (practical, not medical/legal)
      if(urgency === "now"){
        if(issue === "grease_leak" || issue === "odor_smoke" || issue === "not_running") return ["critical","Critical"];
        return ["high","High"];
      }
      if(urgency === "today"){
        if(issue === "grease_leak" || issue === "odor_smoke") return ["high","High"];
        if(issue === "not_pulling" || issue === "not_running" || issue === "noisy") return ["med","Medium"];
        return ["low","Low"];
      }
      // week
      if(issue === "grease_leak") return ["med","Medium"];
      if(issue === "noisy") return ["med","Medium"];
      return ["low","Low"];
    }

    function calcRange(issue, system, building, urgency, night){
      const base = TRIAGE_MAP[issue]?.base || [350, 1100];
      const sysAdd = (SYSTEM_MOD[system] || SYSTEM_MOD[""]).add;
      const bMult = (BUILDING_MOD[building] || BUILDING_MOD[""]).mult;

      let min = (base[0] + sysAdd[0]) * bMult;
      let max = (base[1] + sysAdd[1]) * bMult;

      // Urgency dispatch factor
      if(urgency === "now"){ min *= 1.20; max *= 1.25; }
      else if(urgency === "today"){ min *= 1.05; max *= 1.08; }

      // Night/after-hours dispatch +15%
      if(night){ min *= 1.15; max *= 1.15; }

      // Round to nearest $10 for “real-world” feel
      const round10 = n => Math.round(n / 10) * 10;
      return [round10(min), round10(max)];
    }

    function currentTriage(){
      return {
        issue: issueType.value || "",
        urgency: getUrgency(),
        system: systemType.value || "",
        building: buildingType.value || "",
        night: !!afterHours.checked
      };
    }

    function triageSummaryText(t){
      const issueLabel = TRIAGE_MAP[t.issue]?.label || "—";
      const sysLabel = SYSTEM_MOD[t.system]?.label || "—";
      const bLabel = BUILDING_MOD[t.building]?.label || "—";
      const range = resRange.textContent || "$—";
      const risk = resRiskText.textContent || "—";
      const nightText = t.night ? "After-hours: YES (+15%)" : "After-hours: no";
      return `Triage: Issue="${issueLabel}", Urgency="${t.urgency}", System="${sysLabel}", Building="${bLabel}", Risk="${risk}", Estimate="${range}", ${nightText}.`;
    }

    function updateTriage(){
      const t = currentTriage();

      if(!t.issue || !t.system || !t.building){
        resCause.textContent = "Choose Issue, System, and Building to generate results.";
        resNext.textContent = "Once selected, you’ll see the recommended next step.";
        resRange.textContent = "$—";
        resRisk.dataset.level = "low";
        resRiskText.textContent = "Low";
        resAfterHoursNote.textContent = afterHours.checked ? "After-hours dispatch: selected (+15%)." : "After-hours dispatch: not selected.";
        modalTriageSummary.textContent = "Triage summary: (run triage to include your results here)";
        return;
      }

      const map = TRIAGE_MAP[t.issue] || TRIAGE_MAP.other;

      // Cause
      resCause.textContent = map.cause;

      // Risk
      const [level, label] = riskFrom(t.issue, t.urgency);
      resRisk.dataset.level = level;
      resRiskText.textContent = label;

      // Range
      const [min,max] = calcRange(t.issue, t.system, t.building, t.urgency, t.night);
      resRange.textContent = formatRange(min, max);

      // Next step
      // Make it feel “dynamic” with urgency guidance
      let next = map.next;
      if(t.urgency === "now") next = "Treat as urgent: secure access + send photos + call dispatch for fastest route to restore capture.";
      if(t.issue === "mua" && t.system !== "mua_unit") next = "Likely pressure imbalance: confirm MUA operation alongside exhaust; note door pressure/drafts.";
      if(t.issue === "noisy" && t.urgency !== "week") next = "If vibration increases, reduce runtime. Bearings/belts can escalate quickly under heat load.";
      resNext.textContent = next;

      // After-hours note
      resAfterHoursNote.textContent = t.night ? "After-hours dispatch: selected (+15%)." : "After-hours dispatch: not selected.";

      // Modal summary
      modalTriageSummary.textContent = "Triage summary: " + triageSummaryText(t);
    }

    // Public helper used by presets
    function triageSet({issue, urgency, system, building}){
      if(issue) issueType.value = issue;
      if(system) systemType.value = system;
      if(building) buildingType.value = building;
      if(urgency){
        urgencyRadios.forEach(r => r.checked = (r.value === urgency));
      }
      updateTriage();
      // scroll to results panel for a satisfying “done”
      smoothScrollTo("#triageResultsPanel");
      toast("Triage auto-filled", "Review results → tap “Text me the results” to open the form.");
    }

    // Wire inputs
    [issueType, systemType, buildingType].forEach(el => el?.addEventListener("change", updateTriage));
    urgencyRadios.forEach(r => r.addEventListener("change", updateTriage));

    // Reset
    $("#triageReset")?.addEventListener("click", ()=>{
      issueType.value = "";
      systemType.value = "";
      buildingType.value = "";
      urgencyRadios.forEach(r => r.checked = (r.value === "today"));
      updateTriage();
      toast("Triage reset", "Pick options to generate a fresh estimate.");
    });

    // “Text me the results” -> opens form, focuses phone, and pre-fills Issue Summary
    $("#triageText")?.addEventListener("click", ()=>{
      updateTriage();
      const t = currentTriage();
      const summary = triageSummaryText(t);

      // Pre-fill issue summary
      const issueBox = $("#fIssue");
      const existing = issueBox.value.trim();
      const injected = existing ? (existing + "\n\n" + summary) : summary;
      issueBox.value = injected;

      smoothScrollTo("#lead");
      setTimeout(()=> $("#fPhone").focus(), 420);
    });

    // Common repair cards -> triage preset
    function wireRepairCards(){
      const cards = $(".repair-card");
      const go = (card)=>{
        triageSet({
          issue: card.dataset.issue,
          urgency: card.dataset.urgency,
          system: card.dataset.system,
          building: card.dataset.building
        });
      };
      cards.forEach(card=>{
        card.addEventListener("click", ()=> go(card));
        card.addEventListener("keydown", (e)=>{
          if(e.key === "Enter" || e.key === " "){
            e.preventDefault();
            go(card);
          }
        });
      });
    }

    // ---------------------------
    // AFTER-HOURS TOGGLE ties to triage + form label
    // ---------------------------
    function updateAfterHoursUI(){
      const on = afterHours.checked;
      afterHoursCopy.textContent = on
        ? "Selected — adds +15% urgency dispatch. We’ll confirm an arrival window."
        : "Not selected — normal dispatch estimate.";
      dispatchPill.textContent = on ? "Dispatch: After-hours (+15%)" : "Dispatch: Standard";
      updateTriage();
    }
    afterHours?.addEventListener("change", updateAfterHoursUI);

    // ---------------------------
    // BEFORE/AFTER SLIDER (pointer + keyboard)
    // ---------------------------
    const baStage = $("#baStage");
    const afterLayer = $("#afterLayer");
    const baHandle = $("#baHandle");

    let dragging = false;

    function setBA(pct){
      const clamped = Math.max(0, Math.min(100, pct));
      afterLayer.style.clipPath = `inset(0 0 0 ${clamped}%)`;
      baHandle.style.left = `${clamped}%`;
      baHandle.setAttribute("aria-valuenow", String(Math.round(clamped)));
      baHandle.setAttribute("aria-valuetext", `${Math.round(clamped)} percent after`);
    }

    function pointerPct(clientX){
      const r = baStage.getBoundingClientRect();
      const x = clientX - r.left;
      return (x / r.width) * 100;
    }

    function startDrag(e){
      dragging = true;
      baHandle.focus();
      const x = (e.touches && e.touches[0]) ? e.touches[0].clientX : e.clientX;
      setBA(pointerPct(x));
    }
    function moveDrag(e){
      if(!dragging) return;
      const x = (e.touches && e.touches[0]) ? e.touches[0].clientX : e.clientX;
      setBA(pointerPct(x));
    }
    function endDrag(){ dragging = false; }

    baStage?.addEventListener("pointerdown", (e)=> startDrag(e));
    window.addEventListener("pointermove", (e)=> moveDrag(e));
    window.addEventListener("pointerup", endDrag);

    // Keyboard: arrows adjust slider
    baHandle?.addEventListener("keydown", (e)=>{
      const cur = Number(baHandle.getAttribute("aria-valuenow") || "50");
      if(e.key === "ArrowLeft"){ e.preventDefault(); setBA(cur - 3); }
      if(e.key === "ArrowRight"){ e.preventDefault(); setBA(cur + 3); }
      if(e.key === "Home"){ e.preventDefault(); setBA(0); }
      if(e.key === "End"){ e.preventDefault(); setBA(100); }
    });

    // ---------------------------
    // FAQ ACCORDION (buttons)
    // ---------------------------
    function wireFAQ(){
      $(".faq-item").forEach(item=>{
        const btn = $(".faq-q", item);
        const panel = $(".faq-a", item);

        function setOpen(open){
          item.dataset.open = open ? "true" : "false";
          btn.setAttribute("aria-expanded", open ? "true" : "false");
          // Animate via max-height
          if(open){
            const inner = panel.firstElementChild;
            const h = inner.scrollHeight;
            panel.style.maxHeight = (h + 10) + "px";
          } else {
            panel.style.maxHeight = "0px";
          }
        }

        btn.addEventListener("click", ()=>{
          const open = item.dataset.open === "true";
          // close others for a cleaner UX
          $(".faq-item").forEach(other=>{
            if(other !== item){
              const ob = $(".faq-q", other);
              const op = $(".faq-a", other);
              other.dataset.open = "false";
              ob.setAttribute("aria-expanded","false");
              op.style.maxHeight = "0px";
            }
          });
          setOpen(!open);
        });

        // Initialize closed
        setOpen(false);
      });
    }

    // ---------------------------
    // MODAL (Checklist) + Focus Trap
    // ---------------------------
    const modal = $("#modal");
    const modalClose = $("#modalClose");
    const btnPrint = $("#btnPrint");
    const btnCopy = $("#btnCopy");
    let lastFocus = null;

    function modalFocusable(){
      return $('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])', modal)
        .filter(el => !el.hasAttribute("disabled") && !el.getAttribute("aria-hidden"));
    }

    function openModal(){
      lastFocus = document.activeElement;
      modal.dataset.open = "true";
      document.body.style.overflow = "hidden";
      // focus first actionable element
      setTimeout(()=> modalFocusable()[0]?.focus(), 0);
    }

    function closeModal(){
      modal.dataset.open = "false";
      document.body.style.overflow = "";
      if(lastFocus && lastFocus.focus) lastFocus.focus();
    }

    modalClose?.addEventListener("click", closeModal);
    modal?.addEventListener("click", (e)=>{
      // click outside card closes
      if(e.target === modal) closeModal();
    });

    document.addEventListener("keydown", (e)=>{
      if(modal.dataset.open !== "true") return;
      if(e.key === "Escape"){ e.preventDefault(); closeModal(); return; }
      if(e.key !== "Tab") return;

      const focusables = modalFocusable();
      if(!focusables.length) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if(e.shiftKey && document.activeElement === first){
        e.preventDefault();
        last.focus();
      } else if(!e.shiftKey && document.activeElement === last){
        e.preventDefault();
        first.focus();
      }
    });

    btnPrint?.addEventListener("click", ()=>{
      // Ensure modal open (print CSS uses modal)
      if(modal.dataset.open !== "true") openModal();
      setTimeout(()=> window.print(), 80);
    });

    btnCopy?.addEventListener("click", async ()=>{
      const text = $("#checklistArea").innerText.replace(/\n{3,}/g,"\n\n").trim();
      try{
        await navigator.clipboard.writeText(text);
        toast("Copied to clipboard", "Paste into an email/text or your work order notes.");
      }catch(err){
        // Fallback
        const ta = document.createElement("textarea");
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        try{ document.execCommand("copy"); toast("Copied to clipboard", "Paste anywhere."); }
        catch(_){ toast("Copy failed", "Your browser blocked clipboard access."); }
        finally{ document.body.removeChild(ta); }
      }
    });

    // ---------------------------
    // FORM VALIDATION + UNLOCK MODAL
    // ---------------------------
    const leadForm = $("#leadForm");
    const successBox = $("#successBox");

    const validators = {
      name: v => v.trim().length >= 2,
      company: v => v.trim().length >= 2,
      city: v => v.trim().length >= 2,
      email: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()),
      phone: v => (v.replace(/[^\d]/g,"").length >= 10)
    };

    function setError(id, show){
      const el = $(id);
      if(!el) return;
      el.hidden = !show;
    }

    function validateForm(){
      const name = $("#fName").value;
      const company = $("#fCompany").value;
      const phone = $("#fPhone").value;
      const email = $("#fEmail").value;
      const city = $("#fCity").value;

      const okName = validators.name(name);
      const okCompany = validators.company(company);
      const okPhone = validators.phone(phone);
      const okEmail = validators.email(email);
      const okCity = validators.city(city);

      setError("#eName", !okName);
      setError("#eCompany", !okCompany);
      setError("#ePhone", !okPhone);
      setError("#eEmail", !okEmail);
      setError("#eCity", !okCity);

      return okName && okCompany && okPhone && okEmail && okCity;
    }

    leadForm?.addEventListener("submit", (e)=>{
      e.preventDefault();

      const ok = validateForm();
      if(!ok){
        toast("Missing details", "Please fix the highlighted fields to unlock the checklist.");
        // focus first visible error
        const firstErr = $(".error").find(el => !el.hidden);
        if(firstErr){
          const field = firstErr.previousElementSibling;
          if(field && field.focus) field.focus();
        }
        return;
      }

      // Simulate success state (no network)
      successBox.style.display = "block";
      toast("Checklist unlocked", "Open the modal to print/save as PDF.");
      openModal();
    });

    // ---------------------------
    // “Book a Service Call” CTA — nudges triage
    // ---------------------------
    $("#ctaService")?.addEventListener("click", ()=>{
      // Make it feel action-oriented
      toast("Start with triage", "Then tap “Text me the results” to pre-fill the form.");
    });

    // ---------------------------
    // INIT
    // ---------------------------
    (function init(){
      applyBrand();
      initTheme();
      wireScrollButtons();
      closeMenuOnOutside();
      cloneServicesForMobile();
      initReveal();
      wireRepairCards();
      wireFAQ();
      updateAfterHoursUI();
      setBA(50);
      updateTriage();
    })();
  </script>
</body>
</html>
```

**Mike:** Provide the HTML downloadable file so I can preview it

**GPT:** [Download the HTML file](sandbox:/mnt/data/repair-lead-magnet-landing.html)

**Mike:** what is the hierarchy of the website when packaging it into folders ?

**GPT:** Since this is a **single-file landing page** (embedded CSS + JS), the simplest “production” hierarchy is just one HTML file. But if you want to package it like a real site (clean, scalable), here are the best folder hierarchies:

## Option A — Single-file deployment (fastest)
```
repair-lead-magnet/
└─ index.html
```
Use this if you’re dropping it into a host like Netlify, Vercel static, S3, or a simple web server.

---

## Option B — Recommended “marketing site” packaging (still simple)
Keeps the page single-file **but** gives you a place for images, logos, and a PDF if you later want a real downloadable asset.
```
repair-lead-magnet/
├─ index.html
├─ assets/
│  ├─ img/
│  │  ├─ logos/
│  │  │  ├─ client-01.svg
│  │  │  └─ client-02.svg
│  │  ├─ before.jpg
│  │  └─ after.jpg
│  ├─ icons/
│  │  └─ favicon.svg
│  └─ docs/
│     └─ kitchen-hood-repair-readiness-checklist.pdf
└─ README.md
```
Even though your page *generates* the checklist in a modal right now, this structure lets you swap in a **real PDF** later without reorganizing the site.

---

## Option C — If you eventually split CSS/JS (more maintainable)
Not required for your current spec, but this is the “standard” structure.
```
repair-lead-magnet/
├─ index.html
├─ css/
│  └─ styles.css
├─ js/
│  └─ main.js
├─ assets/
│  ├─ img/
│  └─ docs/
└─ README.md
```

---

### Naming tips
- Use `index.html` at the root (most hosts auto-serve it).
- Put brand images/logos in `assets/img/`.
- If you add a real downloadable checklist PDF later, put it in `assets/docs/`.

If you tell me where you’re hosting (Netlify / Vercel / WordPress / cPanel), I’ll recommend the exact best option and any small changes needed.
