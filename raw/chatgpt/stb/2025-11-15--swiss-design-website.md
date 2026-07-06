---
title: "Swiss design website"
date: 2025-11-15
cluster: "STB / Marketing / Web"
messages: 13
source: chatgpt-export conversations.json (FULL transcript)
---

# Swiss design website

> 13 messages · 2025-11-15 · cluster: STB / Marketing / Web

**Semantic neighbors:** [[Dall-e email template design]] · [[Salesloft HTML template]] · [[3D pixel art website]] · [[Proposal introduction paragraph]]

## Transcript

**Mike:** Make a swiss design inspired website

**GPT:** Here’s a complete, **Swiss design–inspired one-page website** you can drop into an `index.html` and open in your browser.

It’s built around:
- Bold typography  
- Strong grid & alignment  
- Lots of white space  
- Minimal color (black / white / red accent)  

You can adapt the text for any brand.

---

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Grid Studio — Swiss Design</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <style>
    :root {
      --bg: #f5f5f5;
      --fg: #111111;
      --accent: #e4002b; /* Swiss red */
      --muted: #909090;
      --max-width: 1120px;
      --gutter: 32px;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    html, body {
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Helvetica Neue",
        Arial, sans-serif;
      background: var(--bg);
      color: var(--fg);
      line-height: 1.4;
    }

    body {
      display: flex;
      justify-content: center;
    }

    .page {
      width: 100%;
      max-width: var(--max-width);
      padding: 32px 20px 64px;
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      column-gap: var(--gutter);
      row-gap: 40px;
    }

    /* UTILS */
    .col-3 { grid-column: span 3; }
    .col-4 { grid-column: span 4; }
    .col-5 { grid-column: span 5; }
    .col-6 { grid-column: span 6; }
    .col-7 { grid-column: span 7; }
    .col-8 { grid-column: span 8; }
    .col-12 { grid-column: 1 / -1; }

    @media (max-width: 768px) {
      .page {
        grid-template-columns: repeat(4, 1fr);
        row-gap: 28px;
      }
      .col-3,
      .col-4,
      .col-5,
      .col-6,
      .col-7,
      .col-8,
      .col-12 {
        grid-column: 1 / -1;
      }
    }

    /* HEADER */
    header {
      border-bottom: 2px solid var(--fg);
      padding-bottom: 12px;
      margin-bottom: 4px;
    }

    .brand {
      font-size: 14px;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      font-weight: 600;
    }

    .top-row {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      gap: 16px;
      margin-top: 8px;
    }

    nav {
      display: flex;
      gap: 18px;
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 0.12em;
    }

    nav a {
      text-decoration: none;
      color: inherit;
      position: relative;
    }

    nav a::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -4px;
      width: 0;
      height: 1px;
      background: var(--fg);
      transition: width 0.18s ease-out;
    }

    nav a:hover::after {
      width: 100%;
    }

    .tagline {
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.16em;
      color: var(--muted);
      text-align: right;
      max-width: 260px;
    }

    /* HERO */
    .hero {
      margin-top: 24px;
      border-top: 4px solid var(--fg);
      padding-top: 40px;
    }

    .hero-kicker {
      font-size: 13px;
      text-transform: uppercase;
      letter-spacing: 0.18em;
      margin-bottom: 10px;
    }

    .hero-title {
      font-size: clamp(36px, 5vw, 64px);
      font-weight: 800;
      line-height: 0.98;
      text-transform: uppercase;
    }

    .hero-title span {
      display: inline-block;
    }

    .hero-title .accent {
      color: var(--accent);
    }

    .hero-meta {
      margin-top: 28px;
      font-size: 13px;
      text-transform: uppercase;
      letter-spacing: 0.14em;
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
    }

    .hero-meta span {
      border-top: 1px solid var(--fg);
      padding-top: 6px;
    }

    .hero-aside {
      border-left: 2px solid var(--fg);
      padding-left: 18px;
      font-size: 14px;
    }

    .hero-aside h2 {
      font-size: 12px;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      margin-bottom: 12px;
    }

    .hero-aside p {
      margin-bottom: 12px;
    }

    .hero-cta {
      margin-top: 16px;
    }

    .btn-primary {
      display: inline-block;
      padding: 10px 20px;
      border: 2px solid var(--fg);
      background: var(--accent);
      color: #ffffff;
      font-size: 12px;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      text-decoration: none;
      font-weight: 600;
    }

    .btn-primary:hover {
      background: #ffffff;
      color: var(--fg);
    }

    .btn-ghost {
      display: inline-block;
      padding: 10px 18px;
      border: 2px solid var(--fg);
      background: transparent;
      color: var(--fg);
      font-size: 12px;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      text-decoration: none;
      font-weight: 600;
      margin-left: 10px;
    }

    .btn-ghost:hover {
      background: var(--fg);
      color: #ffffff;
    }

    /* GRID SECTIONS */
    .section-label {
      font-size: 11px;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--muted);
      border-top: 1px solid var(--muted);
      padding-top: 6px;
      margin-bottom: 10px;
    }

    .section-title {
      font-size: 20px;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      margin-bottom: 16px;
    }

    .body-text {
      font-size: 14px;
      max-width: 420px;
    }

    .spec-list {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 14px 24px;
      font-size: 13px;
      text-transform: uppercase;
      letter-spacing: 0.12em;
    }

    .spec-list span {
      border-top: 1px solid var(--fg);
      padding-top: 4px;
    }

    @media (max-width: 768px) {
      .spec-list {
        grid-template-columns: 1fr;
      }
    }

    /* PROJECT LIST */
    .projects {
      border-top: 2px solid var(--fg);
      padding-top: 20px;
      margin-top: 10px;
    }

    .project-row {
      display: grid;
      grid-template-columns: 3fr 1fr 1fr;
      font-size: 13px;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      padding: 10px 0;
      border-bottom: 1px solid #d0d0d0;
    }

    .project-row.header {
      border-bottom: 2px solid var(--fg);
      font-weight: 600;
    }

    .project-row span {
      align-self: center;
    }

    .project-row .project-name {
      font-weight: 500;
    }

    .project-row .project-name strong {
      font-weight: 700;
    }

    .project-row:hover {
      background: #ebebeb;
    }

    @media (max-width: 720px) {
      .project-row {
        grid-template-columns: 1.6fr 1fr;
        grid-template-rows: auto auto;
        row-gap: 4px;
      }
      .project-row span:nth-child(3) {
        grid-column: 1 / -1;
      }
    }

    /* CONTACT STRIP */
    .contact-strip {
      border-top: 4px solid var(--accent);
      padding-top: 18px;
      margin-top: 28px;
      display: flex;
      flex-wrap: wrap;
      align-items: baseline;
      gap: 14px 32px;
      font-size: 13px;
      text-transform: uppercase;
      letter-spacing: 0.14em;
    }

    .contact-strip a {
      text-decoration: none;
      color: inherit;
      border-bottom: 1px solid transparent;
    }

    .contact-strip a:hover {
      border-bottom-color: var(--fg);
    }

    /* FOOTER */
    footer {
      margin-top: 32px;
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.16em;
      color: var(--muted);
      border-top: 1px solid #cfcfcf;
      padding-top: 10px;
      display: flex;
      justify-content: space-between;
      gap: 12px;
    }

    footer span {
      white-space: nowrap;
    }

    @media (max-width: 640px) {
      footer {
        flex-direction: column;
      }
      footer span {
        white-space: normal;
      }
    }
  </style>
</head>
<body>
  <main class="page">
    <!-- HEADER -->
    <header class="col-12">
      <div class="brand">Grid Studio</div>
      <div class="top-row">
        <nav>
          <a href="#work">Work</a>
          <a href="#approach">Approach</a>
          <a href="#contact">Contact</a>
        </nav>
        <div class="tagline">
          Visual systems, typographic rigor, and Swiss-inspired digital identities.
        </div>
      </div>
    </header>

    <!-- HERO LEFT -->
    <section class="hero col-7">
      <div class="hero-kicker">Swiss-Inspired Visual Systems</div>
      <h1 class="hero-title">
        <span>We design</span><br />
        <span class="accent">order</span> <span>into</span><br />
        <span>your brand.</span>
      </h1>

      <div class="hero-meta">
        <span>Identity &amp; Web</span>
        <span>Editorial Systems</span>
        <span>Design Manuals</span>
      </div>

      <div class="hero-cta">
        <a href="#contact" class="btn-primary">Start a project</a>
        <a href="#work" class="btn-ghost">View selected work</a>
      </div>
    </section>

    <!-- HERO RIGHT -->
    <aside class="hero-aside col-5">
      <h2>Design Principle</h2>
      <p>
        We work with a strict grid, restrained palettes, and typographic contrast
        to create clear, timeless communication. Every line, weight, and margin
        is intentional.
      </p>
      <p>
        From digital products to printed systems, we build frameworks—so your
        brand stays coherent as it grows.
      </p>
    </aside>

    <!-- APPROACH -->
    <section id="approach" class="col-6">
      <div class="section-label">Approach</div>
      <div class="section-title">Radical clarity</div>
      <p class="body-text">
        We strip away decoration until only the essential structure remains.
        Grids, rhythm, and hierarchy guide every decision, making complex
        information instantly readable.
      </p>
    </section>

    <section class="col-6">
      <div class="section-label">Capabilities</div>
      <div class="spec-list">
        <span>Brand Identity Systems</span>
        <span>Web &amp; Interface Design</span>
        <span>Design Manuals &amp; Guidelines</span>
        <span>Editorial &amp; Layout Grids</span>
        <span>Information Architecture</span>
        <span>Typography &amp; Type Pairing</span>
      </div>
    </section>

    <!-- PROJECT LIST -->
    <section id="work" class="projects col-12">
      <div class="section-label">Selected Work</div>
      <div class="project-row header">
        <span>Project</span>
        <span>Discipline</span>
        <span>Year</span>
      </div>

      <div class="project-row">
        <span class="project-name">
          <strong>Transit Atlas</strong> &mdash; wayfinding system
        </span>
        <span>Identity / Signage</span>
        <span>2024</span>
      </div>

      <div class="project-row">
        <span class="project-name">
          <strong>Baseline Journal</strong> &mdash; print grid &amp; masthead
        </span>
        <span>Editorial Design</span>
        <span>2023</span>
      </div>

      <div class="project-row">
        <span class="project-name">
          <strong>Linearity</strong> &mdash; minimalist product website
        </span>
        <span>Web / UI</span>
        <span>2023</span>
      </div>

      <div class="project-row">
        <span class="project-name">
          <strong>Helvetica North</strong> &mdash; identity &amp; signage
        </span>
        <span>Brand System</span>
        <span>2022</span>
      </div>
    </section>

    <!-- CONTACT -->
    <section id="contact" class="contact-strip col-12">
      <span>Studio: Zürich · Remote-first</span>
      <span>Email:
        <a href="mailto:hello@grid-studio.ch">hello@grid-studio.ch</a>
      </span>
      <span>Portfolio PDF on request</span>
      <span>Instagram / Behance / Are.na</span>
    </section>

    <!-- FOOTER -->
    <footer class="col-12">
      <span>© 2025 Grid Studio</span>
      <span>Swiss-inspired visual communication</span>
    </footer>
  </main>
</body>
</html>
```

---

If you tell me what the site is *for* (your agency, a product, mPWR, etc.), I can swap in your real content, colors, and logo while keeping the Swiss-style layout.

**Mike:** https://invest.thempwr.com/

**GPT:** Nice—let’s give mPWR a Swiss-style investor landing page.

Below is a **complete one-page Swiss design–inspired site for mPWR**, using content adapted from your current investor materials (business model, token, raise terms, etc.), but laid out in a strict grid, minimalistic, and typography-forward.

You can save this as `index.html` and open it in your browser. Swap in real logos/images later as needed.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>mPWR Investments — Swiss Grid Layout</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <style>
    :root {
      --bg: #f5f5f5;
      --fg: #101013;
      --accent: #0f62fe; /* mPWR-ish electric blue accent */
      --muted: #848484;
      --max-width: 1180px;
      --gutter: 32px;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    html, body {
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Helvetica Neue",
        Arial, sans-serif;
      background: var(--bg);
      color: var(--fg);
      line-height: 1.4;
    }

    body {
      display: flex;
      justify-content: center;
    }

    .page {
      width: 100%;
      max-width: var(--max-width);
      padding: 32px 20px 64px;
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      column-gap: var(--gutter);
      row-gap: 40px;
    }

    /* GRID UTILS */
    .col-3 { grid-column: span 3; }
    .col-4 { grid-column: span 4; }
    .col-5 { grid-column: span 5; }
    .col-6 { grid-column: span 6; }
    .col-7 { grid-column: span 7; }
    .col-8 { grid-column: span 8; }
    .col-12 { grid-column: 1 / -1; }

    @media (max-width: 900px) {
      .page {
        grid-template-columns: repeat(4, 1fr);
        row-gap: 28px;
      }
      .col-3,
      .col-4,
      .col-5,
      .col-6,
      .col-7,
      .col-8,
      .col-12 {
        grid-column: 1 / -1;
      }
    }

    /* HEADER */
    header {
      border-bottom: 2px solid var(--fg);
      padding-bottom: 12px;
      margin-bottom: 4px;
    }

    .brand {
      font-size: 14px;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      font-weight: 700;
    }

    .brand span {
      font-weight: 800;
    }

    .top-row {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      gap: 16px;
      margin-top: 8px;
    }

    nav {
      display: flex;
      gap: 18px;
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 0.12em;
    }

    nav a {
      text-decoration: none;
      color: inherit;
      position: relative;
    }

    nav a::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -4px;
      width: 0;
      height: 1px;
      background: var(--fg);
      transition: width 0.18s ease-out;
    }

    nav a:hover::after {
      width: 100%;
    }

    .tagline {
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.16em;
      color: var(--muted);
      text-align: right;
      max-width: 280px;
    }

    @media (max-width: 700px) {
      .top-row {
        flex-direction: column;
        align-items: flex-start;
      }
      .tagline {
        text-align: left;
      }
    }

    /* HERO */
    .hero {
      margin-top: 24px;
      border-top: 4px solid var(--fg);
      padding-top: 40px;
    }

    .hero-kicker {
      font-size: 13px;
      text-transform: uppercase;
      letter-spacing: 0.18em;
      margin-bottom: 10px;
    }

    .hero-title {
      font-size: clamp(34px, 5vw, 60px);
      font-weight: 800;
      line-height: 1;
      text-transform: uppercase;
    }

    .hero-title span {
      display: inline-block;
    }

    .hero-title .accent {
      color: var(--accent);
    }

    .hero-subline {
      margin-top: 18px;
      max-width: 520px;
      font-size: 14px;
    }

    .hero-meta {
      margin-top: 28px;
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.16em;
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
    }

    .hero-meta span {
      border-top: 1px solid var(--fg);
      padding-top: 6px;
    }

    .hero-aside {
      border-left: 2px solid var(--fg);
      padding-left: 18px;
      font-size: 14px;
    }

    .hero-aside h2 {
      font-size: 12px;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      margin-bottom: 12px;
    }

    .hero-aside p {
      margin-bottom: 12px;
    }

    .hero-badge {
      margin-top: 18px;
      font-size: 11px;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      border-top: 1px solid var(--muted);
      padding-top: 8px;
      color: var(--muted);
    }

    .hero-cta {
      margin-top: 24px;
    }

    .btn-primary {
      display: inline-block;
      padding: 10px 22px;
      border: 2px solid var(--fg);
      background: var(--accent);
      color: #ffffff;
      font-size: 12px;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      text-decoration: none;
      font-weight: 600;
    }

    .btn-primary:hover {
      background: #ffffff;
      color: var(--fg);
    }

    .btn-ghost {
      display: inline-block;
      padding: 10px 18px;
      border: 2px solid var(--fg);
      background: transparent;
      color: var(--fg);
      font-size: 12px;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      text-decoration: none;
      font-weight: 600;
      margin-left: 10px;
    }

    .btn-ghost:hover {
      background: var(--fg);
      color: #ffffff;
    }

    /* SECTION BASICS */
    .section-label {
      font-size: 11px;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--muted);
      border-top: 1px solid var(--muted);
      padding-top: 6px;
      margin-bottom: 10px;
    }

    .section-title {
      font-size: 20px;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      margin-bottom: 16px;
    }

    .body-text {
      font-size: 14px;
      max-width: 460px;
    }

    /* KEY METRICS */
    .metric-blocks {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 18px;
      font-size: 13px;
      text-transform: uppercase;
      letter-spacing: 0.12em;
    }

    .metric {
      border-top: 2px solid var(--fg);
      padding-top: 8px;
    }

    .metric strong {
      display: block;
      font-size: 20px;
      margin-bottom: 4px;
    }

    @media (max-width: 800px) {
      .metric-blocks {
        grid-template-columns: 1fr;
      }
    }

    /* SPLIT GRID (BUSINESS MODEL / TOKEN / EDGE etc) */
    .spec-list {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 12px 24px;
      font-size: 13px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }

    .spec-list span {
      border-top: 1px solid var(--fg);
      padding-top: 4px;
    }

    @media (max-width: 800px) {
      .spec-list {
        grid-template-columns: 1fr;
      }
    }

    /* PROJECT-LIKE TABLE FOR OFFERING / HIGHLIGHTS */
    .table-block {
      border-top: 2px solid var(--fg);
      margin-top: 12px;
    }

    .table-row {
      display: grid;
      grid-template-columns: 2.2fr 3.8fr;
      font-size: 13px;
      padding: 8px 0;
      border-bottom: 1px solid #d0d0d0;
    }

    .table-row.header {
      font-weight: 600;
      border-bottom: 2px solid var(--fg);
      text-transform: uppercase;
      letter-spacing: 0.14em;
      font-size: 11px;
    }

    .table-row span:nth-child(1) {
      text-transform: uppercase;
      letter-spacing: 0.12em;
      font-size: 11px;
      color: var(--muted);
    }

    .table-row strong {
      font-weight: 600;
    }

    @media (max-width: 720px) {
      .table-row {
        grid-template-columns: 1fr;
        row-gap: 2px;
      }
    }

    /* CONTACT / FOOTER STRIPS */
    .contact-strip {
      border-top: 4px solid var(--accent);
      padding-top: 18px;
      margin-top: 28px;
      display: flex;
      flex-wrap: wrap;
      align-items: baseline;
      gap: 14px 32px;
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 0.14em;
    }

    .contact-strip a {
      text-decoration: none;
      color: inherit;
      border-bottom: 1px solid transparent;
    }

    .contact-strip a:hover {
      border-bottom-color: var(--fg);
    }

    footer {
      margin-top: 32px;
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.16em;
      color: var(--muted);
      border-top: 1px solid #cfcfcf;
      padding-top: 10px;
      display: flex;
      justify-content: space-between;
      gap: 12px;
    }

    footer span {
      white-space: nowrap;
    }

    @media (max-width: 640px) {
      footer {
        flex-direction: column;
      }
      footer span {
        white-space: normal;
      }
    }

    /* DISCLAIMER STRIP */
    .disclaimer {
      margin-top: 18px;
      font-size: 11px;
      line-height: 1.5;
      color: var(--muted);
      max-width: 680px;
    }
  </style>
</head>
<body>
  <main class="page">
    <!-- HEADER -->
    <header class="col-12">
      <div class="brand">
        <span>mPWR</span> Investments
      </div>
      <div class="top-row">
        <nav>
          <a href="#thesis">Thesis</a>
          <a href="#model">Business Model</a>
          <a href="#token">mPWR Token</a>
          <a href="#terms">Offering Terms</a>
          <a href="#contact">Contact</a>
        </nav>
        <div class="tagline">
          Device-led fintech super-app uniting phones, finance, media, and education.
        </div>
      </div>
    </header>

    <!-- HERO LEFT -->
    <section class="hero col-7">
      <div class="hero-kicker">Pre-IPO Access · Reg D 506(c)</div>
      <h1 class="hero-title">
        <span>Empowering</span><br />
        <span class="accent">the next</span><br />
        <span>billion users.</span>
      </h1>
      <p class="hero-subline">
        mPWR bundles affordable smartphone leasing, connectivity, digital finance,
        media, and education into one integrated, high-engagement platform focused
        on emerging markets.
      </p>

      <div class="hero-meta">
        <span>Fintech super-app ecosystem</span>
        <span>Device-led distribution</span>
        <span>AI-driven risk &amp; fraud controls</span>
      </div>

      <div class="hero-cta">
        <a href="https://invest.thempwr.com/invest/" class="btn-primary">Invest now</a>
        <a href="#model" class="btn-ghost">View business model</a>
      </div>
    </section>

    <!-- HERO RIGHT -->
    <aside class="hero-aside col-5">
      <h2>Investment Thesis</h2>
      <p>
        Billions remain underconnected and underbanked. mPWR’s strategy starts with
        the device itself—an affordable smartphone with bundled connectivity that
        becomes the gateway into digital wallets, micro-credit, remittances, media,
        and AI-powered education.
      </p>
      <p>
        This device-led approach builds a direct, recurring relationship with users,
        enabling multi-layer monetization across leases, financial services, and
        digital content inside a single platform.
      </p>
      <div class="hero-badge">
        Focus: Emerging markets · Youth &amp; micro-entrepreneurs · Remittance corridors
      </div>
    </aside>

    <!-- THESIS / MARKET -->
    <section id="thesis" class="col-6">
      <div class="section-label">Market Scale</div>
      <div class="section-title">High-growth digital finance</div>
      <p class="body-text">
        mPWR targets a structurally underserved opportunity at the intersection of
        smartphones, financial inclusion, and digital media. The addressable market
        spans over a billion underbanked consumers and more than a billion
        micro-entrepreneurs in emerging economies.
      </p>
    </section>

    <section class="col-6">
      <div class="section-label">Key Metrics</div>
      <div class="metric-blocks">
        <div class="metric">
          <strong>1.1B+</strong>
          Underbanked &amp; unbanked adults
        </div>
        <div class="metric">
          <strong>1.4B+</strong>
          Micro-entrepreneurs in target regions
        </div>
        <div class="metric">
          <strong>$1T+</strong>
          Digital finance market with resilient margins
        </div>
      </div>
    </section>

    <!-- BUSINESS MODEL & EDGE -->
    <section id="model" class="col-6">
      <div class="section-label">Business Model</div>
      <div class="section-title">Fintech super-app ecosystem</div>
      <p class="body-text">
        Affordable smartphone leasing with embedded connectivity is the entry
        point. Once onboarded, members access mPWR’s suite of apps spanning
        payments, remittances, credit, media, rewards, and AI-led education.
      </p>
      <p class="body-text" style="margin-top: 10px;">
        Revenue layers build over time: device repayments, financial services
        usage, and digital content bundles. AI-driven credit and risk engines
        support scalable, compliant growth.
      </p>
    </section>

    <section class="col-6">
      <div class="section-label">Competitive Edge</div>
      <div class="spec-list">
        <span>Device-led onboarding &amp; relationship</span>
        <span>Wallet + micro-credit + token + insurance + media in one stack</span>
        <span>Monthly payments 30–50% below comparable options</span>
        <span>Proprietary AI scoring, fraud detection, and device security</span>
        <span>Global team with 300+ years combined cross-industry experience</span>
        <span>Partnerships with financial and telecom operators in key markets</span>
      </div>
    </section>

    <!-- MPWR SUITE / SOLUTION -->
    <section class="col-6">
      <div class="section-label">Holistic Solution</div>
      <div class="section-title">The mPWR Suite</div>
      <div class="spec-list">
        <span>mPWR Phone — leased device, bundled insurance, upgrades</span>
        <span>mPWR Pay — digital wallet, micro-credit, cross-border payments</span>
        <span>mPWR Connect — mobile service + on-demand roaming</span>
        <span>mPWR Media — live TV, series, movies, education content</span>
        <span>mPWR Earn — on-time payment &amp; engagement rewards</span>
        <span>mPWR University — AI-powered skills &amp; digital literacy</span>
      </div>
    </section>

    <!-- TOKEN -->
    <section id="token" class="col-6">
      <div class="section-label">mPWR Token</div>
      <div class="section-title">Embedded utility at scale</div>
      <p class="body-text">
        Built on Solana, the mPWR Token is designed as a high-throughput utility
        token for payments, rewards, and benefits across the super-app: leases,
        connectivity, remittances, content bundles, and loyalty tiers.
      </p>
      <div class="table-block" style="margin-top: 14px;">
        <div class="table-row header">
          <span>Token usage</span>
          <span>Highlights</span>
        </div>
        <div class="table-row">
          <span>Core payments</span>
          <span>Pay for leases, plans, and bundles with fast confirmations and a
          gasless user experience for small transactions.</span>
        </div>
        <div class="table-row">
          <span>Financial benefits</span>
          <span>Repayment discounts, collateralized access to more credit, and
          tiered memberships (e.g. Bronze / Silver / Gold) for perks.</span>
        </div>
        <div class="table-row">
          <span>Engagement &amp; rewards</span>
          <span>Earn tokens via mPWR University, content engagement, surveys,
          and on-time payments—feeding back into the ecosystem.</span>
        </div>
      </div>
    </section>

    <!-- TEAM / EXECUTION -->
    <section class="col-6">
      <div class="section-label">Team &amp; Execution</div>
      <div class="section-title">Global, cross-industry leadership</div>
      <p class="body-text">
        mPWR’s leadership spans telecom, financial services, insurance,
        manufacturing, logistics, customer service, and media—supported by a
        globally distributed team across the U.S., Latin America, Europe, and
        the Middle East.
      </p>
      <p class="body-text" style="margin-top: 10px;">
        Key executives include CEO Oscar Rojas, COO Claudia Rodriguez, and CSO
        Luis Cobo, alongside senior operators and advisors in connectivity,
        fintech, tokenization, and distribution.
      </p>
    </section>

    <!-- OFFERING TERMS -->
    <section id="terms" class="col-6">
      <div class="section-label">Reg D 506(c) Raise</div>
      <div class="section-title">Offering snapshot</div>
      <div class="table-block">
        <div class="table-row header">
          <span>Category</span>
          <span>Details</span>
        </div>
        <div class="table-row">
          <span>Securities</span>
          <span>
            <strong>SAFE (Pre-Money)</strong> with 30% discount to next equity
            round, subject to a valuation cap (see full term sheet). Pro-rata
            rights for major investors.
          </span>
        </div>
        <div class="table-row">
          <span>Structure</span>
          <span>
            Reg D 506(c) offering to accredited investors only. Speculative and
            illiquid; investors should be prepared to hold for an indefinite
            period and review the full risk factors.
          </span>
        </div>
        <div class="table-row">
          <span>Use of proceeds</span>
          <span>
            Device inventory, market entry and distribution, regulatory and
            licensing, product and token development, and growth initiatives.
          </span>
        </div>
        <div class="table-row">
          <span>Next steps</span>
          <span>
            Review the full offering details and documents on the official
            investment portal, then connect with the team for a deeper
            diligence conversation.
          </span>
        </div>
      </div>
      <div style="margin-top: 18px;">
        <a href="https://invest.thempwr.com/invest/" class="btn-primary">View full offering</a>
      </div>
    </section>

    <!-- CONTACT / ACTION STRIP -->
    <section id="contact" class="contact-strip col-12">
      <span>mPWR · Miami, FL · Global operations</span>
      <span>Email:
        <a href="mailto:support@thempwr.com">support@thempwr.com</a>
      </span>
      <span>
        Main site:
        <a href="https://thempwr.com/" target="_blank" rel="noopener noreferrer">
          thempwr.com
        </a>
      </span>
      <span>
        Investor portal:
        <a href="https://invest.thempwr.com/" target="_blank" rel="noopener noreferrer">
          invest.thempwr.com
        </a>
      </span>
    </section>

    <!-- DISCLAIMER -->
    <section class="col-12 disclaimer">
      This summary is for informational purposes only and does not constitute an
      offer to sell or a solicitation of an offer to buy any securities. Any
      offer will be made solely through official offering documents, which
      should be reviewed carefully, including all risk factors. Investments in
      early-stage companies are speculative, illiquid, and involve a high degree
      of risk. Only accredited investors who can afford to lose their entire
      investment should consider participating.
    </section>

    <!-- FOOTER -->
    <footer class="col-12">
      <span>© 2025 mPWR. All rights reserved.</span>
      <span>Powered by Simply The Best Digital</span>
    </footer>
  </main>
</body>
</html>
```

If you want, I can:

- Swap in **exact copy** from specific sections of the current site (Holistic Solution, Token page, etc.) for 1:1 continuity, or  
- Break this into multiple pages (e.g. `/suite`, `/token`, `/team`) while keeping the same Swiss grid system.

**Mike:** Provide a downloadable html file

**GPT:** Here you go — your Swiss-design mPWR investor landing page as a downloadable file:

[Download the HTML file](sandbox:/mnt/data/mpwr-swiss-investor-landing.html)

You can:

1. Download it  
2. Rename it to `index.html` if you like  
3. Open it in your browser or drop it into your hosting stack / Lovable / etc.

If you want the next step to be adding your hero phone image + logo into this layout, I can wire that in next.
