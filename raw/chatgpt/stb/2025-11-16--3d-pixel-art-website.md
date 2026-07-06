---
title: "3D pixel art website"
date: 2025-11-16
cluster: "STB / Marketing / Web"
messages: 13
source: chatgpt-export conversations.json (FULL transcript)
---

# 3D pixel art website

> 13 messages · 2025-11-16 · cluster: STB / Marketing / Web

**Semantic neighbors:** [[Salesloft HTML template]] · [[Swiss design website]] · [[Proposal introduction paragraph]] · [[Landing page revisions]]

## Transcript

**Mike:** Make a 3D pixel art/8-bit inspired website, with modern html and css design.

**GPT:** Here’s a complete, single-file 3D pixel/8-bit inspired website using modern HTML + CSS (responsive, no JS needed). You can paste this into a file like `pixel-site.html` and open it in your browser.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Pixelverse — 3D 8-Bit Web</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  <!-- 8-bit vibe font + modern body font -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet">

  <style>
    :root {
      --bg-main: #050714;
      --bg-alt: #0d1024;
      --accent-pink: #ff7be5;
      --accent-cyan: #4ef9ff;
      --accent-yellow: #ffe66b;
      --card-bg: #12152b;
      --text-main: #f5f7ff;
      --text-muted: #a6add6;
      --pixel-border: 4px;
      --radius-soft: 1.5rem;
      --shadow-3d: 0 0 0 var(--pixel-border) #000,
                    0 12px 0 #000,
                    0 18px 24px rgba(0, 0, 0, 0.7);
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: "Space Grotesk", system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
      color: var(--text-main);
      background:
        radial-gradient(circle at top, #252a5a 0, transparent 55%),
        radial-gradient(circle at bottom, #16183a 0, transparent 55%),
        repeating-linear-gradient(
          45deg,
          #060816 0,
          #060816 2px,
          #050714 2px,
          #050714 4px
        );
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: stretch;
      padding: 24px;
    }

    .frame {
      position: relative;
      max-width: 1120px;
      width: 100%;
      margin: 0 auto;
      background: linear-gradient(135deg, #050714, #0d1024);
      border-radius: var(--radius-soft);
      padding: 20px;
      border: var(--pixel-border) solid #000;
      box-shadow:
        0 0 0 2px #2c355b,
        0 24px 40px rgba(0, 0, 0, 0.95);
      overflow: hidden;
      isolation: isolate;
    }

    /* Subtle animated grid overlay */
    .frame::before {
      content: "";
      position: absolute;
      inset: -1px;
      background-image: linear-gradient(
          rgba(255, 255, 255, 0.06) 1px,
          transparent 1px
        ),
        linear-gradient(
          90deg,
          rgba(255, 255, 255, 0.06) 1px,
          transparent 1px
        );
      background-size: 18px 18px;
      mix-blend-mode: soft-light;
      opacity: 0.6;
      pointer-events: none;
      animation: gridScroll 26s linear infinite;
    }

    @keyframes gridScroll {
      from { transform: translate3d(0, 0, 0); }
      to { transform: translate3d(18px, 18px, 0); }
    }

    /* Pixel corners */
    .frame::after {
      content: "";
      position: absolute;
      inset: 12px;
      border: 3px solid rgba(255, 255, 255, 0.08);
      border-radius: 0;
      clip-path: polygon(
        0 12px, 12px 12px, 12px 0,
        calc(100% - 12px) 0, calc(100% - 12px) 12px, 100% 12px,
        100% calc(100% - 12px), calc(100% - 12px) calc(100% - 12px),
        calc(100% - 12px) 100%, 12px 100%, 12px calc(100% - 12px),
        0 calc(100% - 12px)
      );
      opacity: 0.7;
      pointer-events: none;
    }

    main {
      position: relative;
      z-index: 1;
      display: grid;
      grid-template-columns: minmax(0, 3fr) minmax(0, 2.5fr);
      gap: 32px;
      padding: 24px 18px 18px;
    }

    @media (max-width: 900px) {
      main {
        grid-template-columns: 1fr;
        padding-inline: 6px;
      }
    }

    /* HEADER */

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      padding: 4px 12px 16px;
    }

    .logo {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .logo-mark {
      position: relative;
      width: 38px;
      height: 38px;
      background: #12152b;
      border-radius: 6px;
      box-shadow:
        0 0 0 3px #000,
        0 0 32px rgba(78, 249, 255, 0.5);
      display: grid;
      place-items: center;
      overflow: hidden;
    }

    .logo-mark::before,
    .logo-mark::after {
      content: "";
      position: absolute;
      width: 54px;
      height: 54px;
      border-radius: 3px;
      background:
        linear-gradient(135deg, var(--accent-cyan), var(--accent-pink));
      mix-blend-mode: screen;
      opacity: 0.9;
    }

    .logo-mark::before {
      transform: translate(-8px, 8px) rotate(45deg);
    }

    .logo-mark::after {
      transform: translate(8px, -8px) rotate(45deg);
      filter: blur(2px);
      opacity: 0.7;
    }

    .logo-text {
      font-family: "Press Start 2P", system-ui, sans-serif;
      font-size: 0.65rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      line-height: 1.2;
    }

    nav {
      display: flex;
      gap: 14px;
      font-size: 0.8rem;
    }

    nav a {
      position: relative;
      text-decoration: none;
      color: var(--text-muted);
      padding: 6px 10px;
      border-radius: 999px;
      border: 1px solid rgba(255, 255, 255, 0.09);
      backdrop-filter: blur(10px);
      background: linear-gradient(135deg, rgba(12, 19, 43, 0.9), rgba(7, 13, 32, 0.9));
      transition: border-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
    }

    nav a::before {
      content: "";
      position: absolute;
      inset: 0;
      border-radius: inherit;
      border: 1px solid transparent;
      background: linear-gradient(120deg, var(--accent-cyan), var(--accent-pink)) border-box;
      mask: linear-gradient(#000 0 0) padding-box, linear-gradient(#000 0 0);
      mask-composite: exclude;
      opacity: 0;
      transition: opacity 0.2s ease;
    }

    nav a:hover {
      color: var(--accent-cyan);
      border-color: rgba(78, 249, 255, 0.6);
      box-shadow: 0 0 18px rgba(78, 249, 255, 0.45);
      transform: translateY(-1px);
    }

    nav a:hover::before {
      opacity: 1;
    }

    /* HERO LEFT */

    .hero {
      display: flex;
      flex-direction: column;
      gap: 18px;
      padding-right: 12px;
    }

    .hero-label {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-size: 0.7rem;
      text-transform: uppercase;
      letter-spacing: 0.16em;
      color: var(--accent-yellow);
      font-family: "Press Start 2P", system-ui, sans-serif;
      background: rgba(7, 12, 30, 0.85);
      border-radius: 999px;
      border: 2px solid #000;
      padding: 6px 12px;
      box-shadow:
        0 0 0 3px #161a3a,
        0 8px 0 #000;
      width: fit-content;
    }

    .hero-label span.dot {
      width: 8px;
      height: 8px;
      background: var(--accent-cyan);
      box-shadow: 0 0 12px rgba(78, 249, 255, 0.9);
    }

    .hero h1 {
      font-family: "Press Start 2P", system-ui, sans-serif;
      font-size: clamp(1.6rem, 2.4vw, 2rem);
      line-height: 1.5;
      text-transform: uppercase;
      text-shadow:
        0 0 0 #000,
        3px 3px 0 #000,
        -3px 3px 0 #000,
        0 0 22px rgba(78, 249, 255, 0.5);
    }

    .hero h1 span.accent {
      background: linear-gradient(120deg, var(--accent-cyan), var(--accent-pink));
      -webkit-background-clip: text;
      color: transparent;
    }

    .hero p {
      color: var(--text-muted);
      font-size: 0.95rem;
      max-width: 32rem;
    }

    .hero p strong {
      color: var(--accent-cyan);
      font-weight: 600;
    }

    .hero-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-top: 4px;
    }

    .btn {
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      padding: 10px 18px;
      font-size: 0.8rem;
      font-weight: 600;
      border-radius: 12px;
      border: 0;
      cursor: pointer;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      font-family: "Press Start 2P", system-ui, sans-serif;
      transform: translateY(0);
      transition: transform 0.12s ease, box-shadow 0.12s ease, filter 0.12s ease;
    }

    .btn-primary {
      background:
        linear-gradient(135deg, var(--accent-cyan), var(--accent-pink));
      color: #000;
      box-shadow:
        var(--shadow-3d);
    }

    .btn-primary:hover {
      transform: translateY(-4px);
      filter: brightness(1.08);
      box-shadow:
        0 0 0 var(--pixel-border) #000,
        0 16px 0 #000,
        0 24px 36px rgba(0, 0, 0, 0.8);
    }

    .btn-ghost {
      background: #111425;
      color: var(--text-main);
      border: 3px solid #000;
      box-shadow:
        0 0 0 3px #2d325b,
        0 8px 0 #000;
    }

    .btn-ghost:hover {
      transform: translateY(-3px);
      box-shadow:
        0 0 0 3px var(--accent-yellow),
        0 10px 0 #000;
    }

    .hero-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      margin-top: 10px;
      font-size: 0.78rem;
      color: var(--text-muted);
    }

    .hero-meta span {
      display: inline-flex;
      align-items: center;
      gap: 8px;
    }

    .hero-meta span::before {
      content: "";
      width: 10px;
      height: 10px;
      border-radius: 2px;
      background: var(--accent-cyan);
      box-shadow: 0 0 12px rgba(78, 249, 255, 1);
    }

    /* RIGHT COLUMN — 3D PIXEL PANEL */

    .right-column {
      display: flex;
      flex-direction: column;
      gap: 18px;
    }

    .pixel-panel {
      position: relative;
      background: radial-gradient(circle at 20% 0, rgba(255, 230, 107, 0.2), transparent 55%),
                  radial-gradient(circle at 90% 100%, rgba(78, 249, 255, 0.3), transparent 50%),
                  var(--card-bg);
      border-radius: 14px;
      padding: 18px 18px 20px;
      border: 3px solid #000;
      box-shadow:
        0 0 0 3px #282e5c,
        0 20px 0 #000,
        0 28px 40px rgba(0, 0, 0, 0.85);
      transform-style: preserve-3d;
      perspective: 900px;
      overflow: hidden;
    }

    .pixel-panel::before {
      content: "";
      position: absolute;
      inset: 0;
      background:
        linear-gradient(120deg, rgba(255, 255, 255, 0.08), transparent 40%, transparent 70%, rgba(255, 255, 255, 0.16));
      mix-blend-mode: soft-light;
      pointer-events: none;
    }

    .pixel-panel-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 12px;
      margin-bottom: 12px;
      font-size: 0.75rem;
      color: var(--text-muted);
    }

    .pixel-dots {
      display: flex;
      gap: 6px;
    }

    .pixel-dot {
      width: 10px;
      height: 10px;
      border-radius: 3px;
      background: #141730;
      box-shadow: 0 0 0 2px #000;
      position: relative;
      overflow: hidden;
    }

    .pixel-dot:nth-child(1)::after {
      content: "";
      position: absolute;
      inset: 1px;
      background: var(--accent-pink);
    }

    .pixel-dot:nth-child(2)::after {
      content: "";
      position: absolute;
      inset: 1px;
      background: var(--accent-cyan);
    }

    .pixel-dot:nth-child(3)::after {
      content: "";
      position: absolute;
      inset: 1px;
      background: var(--accent-yellow);
    }

    .pixel-title {
      font-family: "Press Start 2P", system-ui, sans-serif;
      font-size: 0.62rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }

    /* Fake “3D pixel scene” */

    .voxel-scene {
      position: relative;
      margin-top: 8px;
      margin-bottom: 14px;
      height: 220px;
      transform-style: preserve-3d;
      transform: rotateX(56deg) rotateZ(-38deg) translate3d(0, 4px, 0);
      transform-origin: 50% 90%;
    }

    @media (max-width: 480px) {
      .voxel-scene {
        transform: scale(0.9) rotateX(56deg) rotateZ(-38deg) translate3d(0, 4px, 0);
      }
    }

    .voxel-plane {
      position: absolute;
      inset: 12% 14%;
      background:
        repeating-linear-gradient(
          0deg,
          #11162e 0,
          #11162e 6px,
          #181d3b 6px,
          #181d3b 12px
        ),
        repeating-linear-gradient(
          90deg,
          #11162e 0,
          #11162e 6px,
          #181d3b 6px,
          #181d3b 12px
        );
      box-shadow:
        0 0 0 3px #000,
        0 0 50px rgba(78, 249, 255, 0.6);
      transform: translateZ(-40px);
    }

    .voxel-cube {
      position: absolute;
      width: 46px;
      height: 46px;
      background: #2b2f63;
      box-shadow:
        0 0 0 3px #000,
        0 0 20px rgba(0, 0, 0, 0.9);
      transform-style: preserve-3d;
    }

    .voxel-cube::before,
    .voxel-cube::after {
      content: "";
      position: absolute;
      inset: 0;
      background: #202557;
      transform-origin: bottom;
    }

    .voxel-cube::before {
      background: linear-gradient(135deg, #3b3f8c, #1b1e4b);
      transform: rotateX(90deg) translateZ(46px);
    }

    .voxel-cube::after {
      background: linear-gradient(135deg, #181b40, #10132b);
      transform-origin: left;
      transform: rotateY(-90deg) translateZ(0);
    }

    .voxel-cube--main {
      left: 50%;
      top: 32%;
      transform: translate(-50%, -50%) translateZ(0);
      background: linear-gradient(135deg, #4ef9ff, #ff7be5);
    }

    .voxel-cube--side {
      left: 65%;
      top: 54%;
      transform: translate(-50%, -50%) translateZ(-10px);
      background: linear-gradient(135deg, #ffe66b, #ff7be5);
    }

    .voxel-cube--tiny {
      width: 30px;
      height: 30px;
      left: 34%;
      top: 58%;
      transform: translate(-50%, -50%) translateZ(8px);
      background: linear-gradient(135deg, #4ef9ff, #ffe66b);
    }

    .voxel-pixel-stars {
      position: absolute;
      inset: 4% 6% 55%;
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      grid-auto-rows: 10px;
      gap: 4px;
      opacity: 0.8;
    }

    .voxel-star {
      width: 6px;
      height: 6px;
      background: #fff;
      box-shadow: 0 0 10px rgba(255, 255, 255, 0.9);
      transform: translateZ(30px);
    }

    .voxel-star:nth-child(odd) {
      background: var(--accent-cyan);
      box-shadow: 0 0 10px rgba(78, 249, 255, 0.9);
    }

    .voxel-star:nth-child(3n) {
      background: var(--accent-pink);
      box-shadow: 0 0 10px rgba(255, 123, 229, 0.9);
    }

    /* Projects list */

    .projects {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 10px;
      margin-top: 8px;
    }

    @media (max-width: 900px) {
      .projects {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    }

    @media (max-width: 620px) {
      .projects {
        grid-template-columns: 1fr;
      }
    }

    .project-card {
      position: relative;
      padding: 10px 10px 12px;
      border-radius: 10px;
      background: #10142b;
      border: 2px solid #000;
      box-shadow:
        0 0 0 2px #242a53,
        0 8px 0 #000;
      font-size: 0.78rem;
      cursor: pointer;
      transition: transform 0.16s ease, box-shadow 0.16s ease, background 0.16s ease;
      overflow: hidden;
    }

    .project-card::before {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(135deg, rgba(78, 249, 255, 0.18), transparent);
      mix-blend-mode: soft-light;
      opacity: 0;
      transition: opacity 0.16s ease;
    }

    .project-card:hover {
      transform: translateY(-6px) translateZ(0);
      box-shadow:
        0 0 0 2px var(--accent-cyan),
        0 12px 0 #000,
        0 16px 22px rgba(0, 0, 0, 0.8);
      background: #151b3a;
    }

    .project-card:hover::before {
      opacity: 1;
    }

    .project-tag {
      display: inline-block;
      font-family: "Press Start 2P", system-ui, sans-serif;
      font-size: 0.52rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--accent-yellow);
      margin-bottom: 7px;
    }

    .project-title {
      font-weight: 600;
      margin-bottom: 5px;
    }

    .project-meta {
      font-size: 0.7rem;
      color: var(--text-muted);
    }

    .project-meta span {
      display: inline-block;
      margin-right: 6px;
    }

    .status-pill {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 3px 8px;
      border-radius: 999px;
      background: rgba(5, 255, 163, 0.1);
      border: 1px solid rgba(5, 255, 163, 0.7);
      font-size: 0.65rem;
      color: #6fffbc;
      font-family: "Press Start 2P", system-ui, sans-serif;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    .status-pill::before {
      content: "";
      width: 6px;
      height: 6px;
      border-radius: 2px;
      background: #6fffbc;
      box-shadow: 0 0 10px rgba(111, 255, 188, 1);
    }

    /* Footer */

    footer {
      margin-top: 6px;
      padding-inline: 12px;
      font-size: 0.7rem;
      color: var(--text-muted);
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
    }

    footer a {
      color: var(--accent-cyan);
      text-decoration: none;
    }

    footer a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <div class="frame">
    <header>
      <div class="logo">
        <div class="logo-mark" aria-hidden="true"></div>
        <div class="logo-text">
          PIXELVERSE<br />
          STUDIO
        </div>
      </div>

      <nav>
        <a href="#hero">Home</a>
        <a href="#projects">Scenes</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>

    <main>
      <!-- LEFT: HERO -->
      <section class="hero" id="hero">
        <div class="hero-label">
          <span class="dot"></span>
          <span>8-Bit • 3D • Web</span>
        </div>

        <h1>
          Build <span class="accent">3D pixel</span> worlds
          <br />right inside your browser.
        </h1>

        <p>
          A modern HTML &amp; CSS playground for <strong>8-bit nostalgia</strong> and
          <strong>3D voxel-style interfaces</strong>. No JavaScript needed — just pure layout
          wizardry and retro flavor.
        </p>

        <div class="hero-actions">
          <button class="btn btn-primary">Start Exploring</button>
          <button class="btn btn-ghost">View the Code</button>
        </div>

        <div class="hero-meta">
          <span>CSS-only 3D scene</span>
          <span>Responsive layout</span>
          <span>Pixel-perfect details</span>
        </div>
      </section>

      <!-- RIGHT: 3D PIXEL PANEL -->
      <section class="right-column">
        <div class="pixel-panel">
          <div class="pixel-panel-header">
            <div class="pixel-dots">
              <span class="pixel-dot"></span>
              <span class="pixel-dot"></span>
              <span class="pixel-dot"></span>
            </div>
            <div class="pixel-title">PIXEL RENDERER v1.0</div>
          </div>

          <div class="voxel-scene" aria-hidden="true">
            <div class="voxel-pixel-stars">
              <!-- just a handful of “stars” -->
              <div class="voxel-star"></div>
              <div class="voxel-star"></div>
              <div class="voxel-star"></div>
              <div class="voxel-star"></div>
              <div class="voxel-star"></div>
              <div class="voxel-star"></div>
            </div>

            <div class="voxel-plane"></div>
            <div class="voxel-cube voxel-cube--main"></div>
            <div class="voxel-cube voxel-cube--side"></div>
            <div class="voxel-cube voxel-cube--tiny"></div>
          </div>

          <div class="status-pill">
            LIVE BUILD
          </div>

          <div class="projects" id="projects">
            <article class="project-card">
              <div class="project-tag">Scene 01</div>
              <div class="project-title">Neon City Grid</div>
              <div class="project-meta">
                <span>Isometric tiles</span><br />
                <span>Gradient neon palette</span>
              </div>
            </article>

            <article class="project-card">
              <div class="project-tag">Scene 02</div>
              <div class="project-title">8-Bit Sky Islands</div>
              <div class="project-meta">
                <span>Floating voxel clouds</span><br />
                <span>Layered parallax planes</span>
              </div>
            </article>

            <article class="project-card">
              <div class="project-tag">Scene 03</div>
              <div class="project-title">CRT Console UI</div>
              <div class="project-meta">
                <span>Pixel HUD overlays</span><br />
                <span>Scanline shaders</span>
              </div>
            </article>
          </div>
        </div>

        <footer id="contact">
          <span>Made with modern HTML &amp; CSS — no JS.</span>
          <span>Fork this layout and make it your own.</span>
        </footer>
      </section>
    </main>
  </div>
</body>
</html>
```

If you tell me what content you want (portfolio, game landing page, SaaS, etc.), I can adapt this layout and copy to fit your exact use case.

**Mike:** Provide the html file

**GPT:** Here you go — here’s the downloadable file:

[Download the HTML file](sandbox:/mnt/data/pixelverse-3d-pixel-site.html)

You can open it directly in your browser, or drop it into VS Code and start tweaking the 3D pixel / 8-bit vibes however you want.

**Mike:** Customize this design to themPWR brand using the website: https://invest.thempwr.com

**GPT:** Nice, here’s the mPWR-branded version of the 3D pixel site.

### Downloadable HTML file

[Download the mPWR 3D Pixel Investor Hub](sandbox:/mnt/data/mpwr-3d-pixel-investor-hub.html)

You can open that in Chrome or drop it into VS Code and tweak.

---

### Quick notes on what I customized

- **Branding**
  - Swapped the logo to `mPWR INVESTMENTS` with a metallic tile + teal glow to echo the token / phone aesthetic. citeturn0search0turn0search3  
  - Updated colors to a dark charcoal / deep navy base with **teal + mint** accents to match the invest/thempwr visual feel.

- **Hero section**
  - New headline: _“Invest in the super-app powering the next billion.”_
  - Copy reflects the real positioning: mobile-first fintech, affordable smartphones + connectivity + wallets + credit + media + education. citeturn0search0turn0search3  
  - Stats grid pulls in the core numbers:
    - **1.1B+ unbanked/underbanked**
    - **1.4B+ micro-entrepreneurs**
    - **$1T+ digital finance market** citeturn0search0turn0search2  

- **CTAs**
  - Primary button → **Invest in mPWR** linking to the invest page. citeturn0search1  
  - Secondary button → **View Full Offering** linking to the main investor site.

- **Right “console” panel**
  - Renamed to **mPWR Investor Console**.
  - Kept the 3D voxel/pixel scene but recolored it to feel like a glowing mPWR phone/token stack.
  - Three highlight cards now map to:
    - **Holistic Solution** (phones + finance + media, device-led distribution)
    - **mPWR Suite** (Phone, Pay, Connect, Media, Earn, University)
    - **mPWR Coin** (embedded in leases/remittances, micro-transactions, rewards) citeturn0search0turn0search2  

- **Footer**
  - Clarifies this is a **concept landing view** and points people back to the official `invest.thempwr.com` for real offering details.

If you’d like, I can next:
- Turn this into a **multi-section landing page** (team, token, terms),
- Or adapt it into an **email-safe HTML** slice for the raise.
