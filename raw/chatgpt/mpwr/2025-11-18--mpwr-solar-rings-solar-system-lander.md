---
title: "mPWR solar rings & solar system lander"
date: 2025-11-18
cluster: "mPWR / Fintech / Investor"
messages: 189
source: chatgpt-export conversations.json (FULL transcript)
---

# mPWR solar rings & solar system lander

> 189 messages · 2025-11-18 · cluster: mPWR / Fintech / Investor

**Semantic neighbors:** [[mPWR ALT Emails 1-3 (11-13)]] · [[Blend HTML with mPWR]] · [[mPWR solar system and phone lander]] · [[Family office LATAM Fintech 2-10-26]]

## Transcript

**Mike:** make the icons visible on the phone when the image is rendered for the "mpwr_hologram_phone_blended.html" file.   take the solar rings effect from the "mpwr_hologram_phone_blended.html " and add it to the "mpwr_hologram_phone_blended.html" file.

**GPT:** You’ve already got everything you need in those two files – we just have to tweak the CSS and (optionally) copy the ring effect over.

---

## 1️⃣ Keep the icons visible in `mpwr_hologram_phone_blended.html`

Right now the icons are animated with the `spiralTransform` keyframes, which throw them off the screen and fade them out. To keep them visible on the phone when you render/capture the image, just remove that animation from `.app-icon`.

In **`mpwr_hologram_phone_blended.html`**, find this block: fileciteturn0file1

```css
/* UNIQUE ANIMATION: Spiral Implosion/Explosion Pattern */
.app-icon {
    animation: spiralTransform 10s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
    transform-origin: center;
}
```

Replace it with:

```css
/* UNIQUE ANIMATION: Spiral Implosion/Explosion Pattern */
/* Icons stay pinned to the screen so they're always visible when you capture the image. */
.app-icon {
    transform-origin: center;
}
```

That’s it. All the SVG icons will remain in their grid on the screen, and the rest of the hologram (liquid background, particles, **energy/solar rings**, scan line, etc.) will still animate normally. fileciteturn0file1  

You don’t need to change any JS for this.

---

## 2️⃣ (Optional) Put the solar/energy rings around the interactive phone

If what you also wanted was to **reuse the same neon “solar rings” from the hologram file on the interactive tooltips phone**, here’s how to wire that up.

### a) Add the ring CSS to `mpwr-interactive-phone-tooltips.html`

In **`mpwr-interactive-phone-tooltips.html`**, add this near the bottom of your `<style>` block (before the `@media` query is fine): fileciteturn0file0turn0file1

```css
/* Neon energy rings borrowed from the hologram demo */
.phone-demo {
  position: relative; /* so rings center around the phone/demo */
}

.energy-ring {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  border: 3px solid;
  animation: neonRingPulse 10s ease-in-out infinite;
  opacity: 0;
  pointer-events: none;
}

/* Sizes, colors, and delays for the four rings */
.energy-ring:nth-child(1) {
  width: 350px;
  height: 350px;
  border-color: #00ffff;
  animation-delay: 0s;
}

.energy-ring:nth-child(2) {
  width: 400px;
  height: 400px;
  border-color: #ff00ff;
  animation-delay: 0.3s;
}

.energy-ring:nth-child(3) {
  width: 450px;
  height: 450px;
  border-color: #00ff00;
  animation-delay: 0.6s;
}

.energy-ring:nth-child(4) {
  width: 500px;
  height: 500px;
  border-color: #ffff00;
  animation-delay: 0.9s;
}

@keyframes neonRingPulse {
  0%, 20% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.5);
    filter: blur(0px);
  }
  35% {
    opacity: 0.8;
    transform: translate(-50%, -50%) scale(1);
    filter: blur(2px);
  }
  45% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.3);
    filter: blur(4px);
  }
  55% {
    opacity: 0.8;
    transform: translate(-50%, -50%) scale(1.5);
    filter: blur(6px);
  }
  70%, 100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(2);
    filter: blur(10px);
  }
}
```

### b) Add the ring elements around the phone

Still in `mpwr-interactive-phone-tooltips.html`, inside the `<div class="phone-demo">` wrapper, add the four ring divs **before** the `.iphone` div, like this: fileciteturn0file0  

```html
<div class="phone-demo">
  <!-- Neon solar/energy rings -->
  <div class="energy-ring"></div>
  <div class="energy-ring"></div>
  <div class="energy-ring"></div>
  <div class="energy-ring"></div>

  <div class="iphone" aria-label="Interactive mPWR phone demo">
    <!-- existing screen + icons + tooltips here -->
  </div>

  <div class="readout">
    <!-- existing readout content -->
  </div>
</div>
```

That will give you the same pulsing neon “solar rings” orbiting the interactive phone, while the icons on the hologram file stay perfectly visible on the screen for any rendered image.

---

If you’d like, next step I can spit out a complete updated version of either file so you can just drop it in as-is.

**Mike:** give me a preview

**GPT:** I dropped a live preview file into the canvas called:

> **`mpwr-hologram-phone-preview`**

What it shows:

- The **phone** in the center  
- **Icons fixed and visible** on the screen (no spiral animation)  
- The **4 pulsing neon/solar rings** orbiting around the phone  

You can:

1. Click into that file in the right-hand panel.
2. Hit **“Preview”** (or open it in your browser if your UI shows that option).
3. If you like how it looks, copy the relevant pieces:
   - The `.energy-ring` CSS + `@keyframes neonRingPulse`
   - The four `<div class="energy-ring"></div>` elements
   - The adjusted `.app-icon` rule (no `animation:` line)

If you want, I can now merge this *exact* structure back into your existing `mpwr_hologram_phone_blended.html` so you have a final, ready-to-use file.

**Mike:** replace the apps on the phone with the real images from the mPWR website.

**GPT:** Got you — let’s swap those placeholder icons for the **real mPWR app icons** from the site so your phone matches the screenshot.

Below is a drop-in **icon grid** you can use in your phone screen (whether in `mpwr_hologram_phone_blended.html` or your preview file).

---

### 1️⃣ HTML – real mPWR app icons

Replace your current app grid with this:

```html
<div class="icon-grid">
  <!-- Row 1: Connect · Pay · Media -->
  <div class="app-icon">
    <img src="https://thempwr.com/wp-content/uploads/2025/08/mPWR-Connect-Icon.png"
         alt="mPWR Connect">
  </div>
  <div class="app-icon">
    <img src="https://thempwr.com/wp-content/uploads/2025/08/mPWR-Pay-Icon.png"
         alt="mPWR Pay">
  </div>
  <div class="app-icon">
    <img src="https://thempwr.com/wp-content/uploads/2025/08/mPWR-Media-Icon.png"
         alt="mPWR Media">
  </div>

  <!-- Row 2: Phone · Earn · University -->
  <div class="app-icon">
    <img src="https://thempwr.com/wp-content/uploads/2025/08/mPWR-Phone-Icon.png"
         alt="mPWR Phone">
  </div>
  <div class="app-icon">
    <img src="https://thempwr.com/wp-content/uploads/2025/08/mPWR-Earn-Icon.png"
         alt="mPWR Earn">
  </div>
  <div class="app-icon">
    <img src="https://thempwr.com/wp-content/uploads/2025/08/mPWR-University-Icon.png"
         alt="mPWR University">
  </div>
</div>
```

Those image URLs are the **official app icons** from the mPWR site. citeturn3view1turn3view0turn5view0turn4view3turn3view3turn3view4  

---

### 2️⃣ CSS – make them look like real app tiles

Add / update these styles in the same file (or merge into your existing `.icon-grid` / `.app-icon` rules):

```css
.icon-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  justify-items: center;
}

.app-icon {
  width: 60px;
  height: 60px;
  border-radius: 16px;
  background: #ffffff;
  box-shadow:
    0 6px 18px rgba(0, 0, 0, 0.35),
    0 0 12px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.app-icon img {
  width: 80%;
  height: 80%;
  object-fit: contain;
  display: block;
}
```

---

### Where to paste this

- In your **preview HTML**:  
  Drop the new `<div class="icon-grid">…</div>` where the old icons were inside `.screen`, and replace the old `.app-icon` styles with the ones above.

- In **`mpwr_hologram_phone_blended.html`** (SVG version):  
  - The easiest path is to wrap a `<foreignObject>` inside the phone screen area and put this same HTML grid inside it.  
  - Or, if you’re comfortable editing the SVG, you can remove the existing `<g class="app-icon">…</g>` blocks and recreate six of them with `<image>` tags using the same icon URLs.

If you tell me which file you want to finalize (the SVG hologram or the HTML/CSS phone preview), I can spit out a full, ready-to-paste version for that specific file.

**Mike:** next, give the apps a hover effect which displays information about each one .   use the screenshot to get the info.

**GPT:** Here’s a clean way to give each app a hover tooltip with the real copy from the screenshot.

---

### 1️⃣ Updated icon grid HTML (drop this inside your `.screen`)

Replace your current app grid with:

```html
<div class="icon-grid">
  <!-- mPWR Phone -->
  <div class="app-icon">
    <img src="https://thempwr.com/wp-content/uploads/2025/08/mPWR-Phone-Icon.png"
         alt="mPWR Phone">
    <div class="app-tooltip">
      <div class="app-tooltip-title">mPWR Phone</div>
      <div class="app-tooltip-body">
        Affordably lease devices with protection and upgrades.
      </div>
    </div>
  </div>

  <!-- mPWR Connect -->
  <div class="app-icon">
    <img src="https://thempwr.com/wp-content/uploads/2025/08/mPWR-Connect-Icon.png"
         alt="mPWR Connect">
    <div class="app-tooltip">
      <div class="app-tooltip-title">mPWR Connect</div>
      <div class="app-tooltip-body">
        Seamless connectivity and optional international roaming.
      </div>
    </div>
  </div>

  <!-- mPWR Media -->
  <div class="app-icon">
    <img src="https://thempwr.com/wp-content/uploads/2025/08/mPWR-Media-Icon.png"
         alt="mPWR Media">
    <div class="app-tooltip">
      <div class="app-tooltip-title">mPWR Media</div>
      <div class="app-tooltip-body">
        Live TV, movies, series, radio, music, plus financial education.
      </div>
    </div>
  </div>

  <!-- mPWR Pay -->
  <div class="app-icon">
    <img src="https://thempwr.com/wp-content/uploads/2025/08/mPWR-Pay-Icon.png"
         alt="mPWR Pay">
    <div class="app-tooltip">
      <div class="app-tooltip-title">mPWR Pay</div>
      <div class="app-tooltip-body">
        Wallet, remittances, and cross-border payments.
      </div>
    </div>
  </div>

  <!-- mPWR Earn -->
  <div class="app-icon">
    <img src="https://thempwr.com/wp-content/uploads/2025/08/mPWR-Earn-Icon.png"
         alt="mPWR Earn">
    <div class="app-tooltip">
      <div class="app-tooltip-title">mPWR Earn</div>
      <div class="app-tooltip-body">
        Rewards for on-time payments and engagement.
      </div>
    </div>
  </div>

  <!-- mPWR University -->
  <div class="app-icon">
    <img src="https://thempwr.com/wp-content/uploads/2025/08/mPWR-University-Icon.png"
         alt="mPWR University">
    <div class="app-tooltip">
      <div class="app-tooltip-title">mPWR University</div>
      <div class="app-tooltip-body">
        Skills training and digital literacy powered by AI.
      </div>
    </div>
  </div>
</div>
```

(You can reorder them if you want to match the exact layout of your phone mock.)

---

### 2️⃣ Tooltip styles (add to your `<style>` block)

Keep your existing `.icon-grid`, `.app-icon`, and `.app-icon img` styles, but update/extend them like this:

```css
.icon-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  justify-items: center;
}

.app-icon {
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 16px;
  background: #ffffff;
  box-shadow:
    0 6px 18px rgba(0, 0, 0, 0.35),
    0 0 12px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible; /* let tooltip escape the tile */
  cursor: pointer;
}

.app-icon img {
  width: 80%;
  height: 80%;
  object-fit: contain;
  display: block;
}

/* Tooltip bubble */
.app-tooltip {
  position: absolute;
  left: 50%;
  bottom: 110%;
  transform: translate(-50%, 8px);
  background: rgba(6, 10, 28, 0.96);
  color: #f5f7ff;
  padding: 8px 12px;
  border-radius: 12px;
  min-width: 190px;
  max-width: 220px;
  box-shadow:
    0 12px 30px rgba(0, 0, 0, 0.6),
    0 0 16px rgba(0, 255, 255, 0.35);
  font-size: 11px;
  line-height: 1.35;
  opacity: 0;
  pointer-events: none;
  z-index: 10;
  transition: opacity 0.18s ease-out, transform 0.18s ease-out;
}

.app-tooltip::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 100%;
  transform: translateX(-50%);
  border-width: 6px;
  border-style: solid;
  border-color: rgba(6, 10, 28, 0.96) transparent transparent transparent;
}

.app-tooltip-title {
  font-weight: 600;
  margin-bottom: 3px;
}

.app-tooltip-body {
  opacity: 0.9;
}

/* Show tooltip on hover / keyboard focus */
.app-icon:hover .app-tooltip,
.app-icon:focus-visible .app-tooltip {
  opacity: 1;
  transform: translate(-50%, -4px);
}
```

That gives you:

- **On hover:** a glowing dark tooltip above each icon  
- **Title + description** pulled from the screenshot copy  
- **Keyboard-friendly:** focusing an icon (tab key) shows the tooltip too  

If you want, I can now merge this into a **full HTML file** based on your existing `mpwr-interactive-phone-tooltips.html` or `mpwr_hologram_phone_blended.html` so you can download and open it directly.

**Mike:** yes.  merge

**GPT:** All set — the file is merged and updated.  

Here’s your downloadable HTML with the real mPWR app icons + hover info tooltips:

**[Download the merged file](sandbox:/mnt/data/mpwr-interactive-phone-tooltips-merged.html)**

Open that in your browser and you’ll see:

- The six mPWR apps on the phone using the *real* icons from the mPWR site  
- On hover (or tap), each icon shows its description from the screenshot  
- The existing glow and tooltip effects are preserved and tied to the new icons.

**Mike:** take the solar rings effect from the "mpwr_hologram_phone_blended.html" and add to the phone.

**GPT:** Done — the solar rings are now wrapped around the interactive phone.  

Here’s your updated file with:

- The **neon energy/solar rings** from `mpwr_hologram_phone_blended.html`
- Rings centered around the **entire phone**, pulsing behind it
- All your **real mPWR icons + hover tooltips** still working

👉 **[Download the updated HTML](sandbox:/mnt/data/mpwr-interactive-phone-tooltips-merged-rings.html)**

Open it in your browser and you’ll see the holographic rings orbiting the phone while you hover over each app.

**Mike:** build a modern sleek landing page using , "mpwr-interactive-phone-tooltips-merged-rings.html" as the centerpiece.

**Mike:** build a modern sleek landing page using , "mpwr-interactive-phone-tooltips-merged-rings.html" as the centerpiece.

**Mike:** great!  now create hyperlinks for each app that point to , "https://thempwr.com/services"

**GPT:** Nice upgrade. Let’s turn everything into real clickable links.

Below are **exact edits** you can drop into your existing `mpwr-landing-phone-demo.html`:

---

## 1️⃣ Make the phone icons clickable

### a) Add this CSS (near your other `.icon-hit` rules)

Right after your `.icon-hit { ... }` block, add:

```css
.icon-hit a {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: inherit;
}
```

This makes the anchor fill the tile and keeps the tooltip behavior intact.

---

### b) Wrap each icon in a link

In the **hero phone** section, replace each `.icon-hit` block with these versions.

#### mPWR Phone

```html
<div class="icon-hit" data-label="mPWR Phone">
  <a href="https://thempwr.com/services" target="_blank" rel="noopener noreferrer">
    <img src="https://thempwr.com/wp-content/uploads/2025/09/mPWR-gray-gradient-icon-150x150.png" alt="mPWR Phone" />
    <div class="tooltip">
      <strong>mPWR Phone</strong>
      Affordably lease devices with protection and upgrades.
    </div>
  </a>
</div>
```

#### mPWR Connect

```html
<div class="icon-hit" data-label="mPWR Connect">
  <a href="https://thempwr.com/services" target="_blank" rel="noopener noreferrer">
    <img src="https://thempwr.com/wp-content/uploads/2025/08/mPWR-Connect-Icon-150x150.png" alt="mPWR Connect" />
    <div class="tooltip">
      <strong>mPWR Connect</strong>
      Seamless connectivity and optional international roaming.
    </div>
  </a>
</div>
```

#### mPWR Pay

```html
<div class="icon-hit" data-label="mPWR Pay">
  <a href="https://thempwr.com/services" target="_blank" rel="noopener noreferrer">
    <img src="https://thempwr.com/wp-content/uploads/2025/08/mPWR-Pay-Icon-150x150.png" alt="mPWR Pay" />
    <div class="tooltip">
      <strong>mPWR Pay</strong>
      Wallet, remittances, and cross-border payments.
    </div>
  </a>
</div>
```

#### mPWR Media

```html
<div class="icon-hit" data-label="mPWR Media">
  <a href="https://thempwr.com/services" target="_blank" rel="noopener noreferrer">
    <img src="https://thempwr.com/wp-content/uploads/2025/08/mPWR-Media-Icon-150x150.png" alt="mPWR Media" />
    <div class="tooltip">
      <strong>mPWR Media</strong>
      Live TV, movies, series, radio, music, plus financial education.
    </div>
  </a>
</div>
```

#### mPWR Earn

```html
<div class="icon-hit" data-label="mPWR Earn">
  <a href="https://thempwr.com/services" target="_blank" rel="noopener noreferrer">
    <img src="https://thempwr.com/wp-content/uploads/2025/08/mPWR-Earn-Icon-150x150.png" alt="mPWR Earn" />
    <div class="tooltip">
      <strong>mPWR Earn</strong>
      Rewards for on-time repayments, referrals, and engagement.
    </div>
  </a>
</div>
```

#### mPWR University

```html
<div class="icon-hit" data-label="mPWR University">
  <a href="https://thempwr.com/services" target="_blank" rel="noopener noreferrer">
    <img src="https://thempwr.com/wp-content/uploads/2025/08/mPWR-University-Icon-150x150.png" alt="mPWR University" />
    <div class="tooltip">
      <strong>mPWR University</strong>
      Skills training and digital literacy powered by AI.
    </div>
  </a>
</div>
```

The JS that listens on `.icon-hit` still works; click events bubble up through the `<a>`.

---

## 2️⃣ Make the feature cards clickable too

So the lower **Apps overview** cards also deep-link to the same page.

### a) Add this CSS (under your `.app-card` styles)

```css
.app-card a {
  display: grid;
  grid-template-rows: auto auto 1fr;
  gap: 8px;
  text-decoration: none;
  color: inherit;
}

.app-card:hover {
  border-color: rgba(191, 219, 254, 0.75);
  box-shadow:
    0 18px 40px rgba(15, 23, 42, 0.96),
    0 0 24px rgba(56, 189, 248, 0.35);
  transform: translateY(-2px);
}
```

### b) Wrap each card’s inner content in an `<a>`

For each `article.app-card` in the Apps section, wrap the icon/title/body like this.

#### Example for mPWR Phone card

Replace the current block:

```html
<article class="app-card">
  <div class="app-card-icon">
    <img src="https://thempwr.com/wp-content/uploads/2025/09/mPWR-gray-gradient-icon-150x150.png" alt="mPWR Phone" />
  </div>
  <h3 class="app-card-title">mPWR Phone</h3>
  <p class="app-card-body">
    Affordably lease smartphones with embedded device protection and upgrade
    paths. mPWR Phone is the starting point for the entire relationship.
  </p>
</article>
```

with:

```html
<article class="app-card">
  <a href="https://thempwr.com/services" target="_blank" rel="noopener noreferrer">
    <div class="app-card-icon">
      <img src="https://thempwr.com/wp-content/uploads/2025/09/mPWR-gray-gradient-icon-150x150.png" alt="mPWR Phone" />
    </div>
    <h3 class="app-card-title">mPWR Phone</h3>
    <p class="app-card-body">
      Affordably lease smartphones with embedded device protection and upgrade
      paths. mPWR Phone is the starting point for the entire relationship.
    </p>
  </a>
</article>
```

Do the same pattern for:

- **mPWR Connect**
- **mPWR Pay**
- **mPWR Media**
- **mPWR Earn**
- **mPWR University**

(just keep the same inner content, wrapped in the `<a href="https://thempwr.com/services" ...>`).

---

If you want, I can next generate a **fresh full HTML file** with all of these link changes already baked in so you can just drop it into VS Code and open in Chrome.

**Mike:** yes, generate the entire HTML

**GPT:** Here’s the full landing page HTML with:

- Your **interactive mPWR phone + solar rings** as the centerpiece  
- **Hover tooltips** on each app icon  
- **Clickable links** for every app (phone icons + feature cards) → `https://thempwr.com/services`  

You can save this as `mpwr-landing-phone-demo-links.html` and open it in Chrome.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>mPWR – Connect · Pay · Earn</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style>
    :root {
      --mpwr-cyan: #00f0ff;
      --mpwr-purple: #7c3aed;
      --mpwr-deep: #020617;
      --mpwr-text: #e5e7eb;
      --mpwr-muted: #9ca3af;
      --mpwr-accent: #facc15;
    }

    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      min-height: 100vh;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      background:
        radial-gradient(circle at top, #111827, #020617 55%, #000000 100%);
      color: var(--mpwr-text);
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    img {
      max-width: 100%;
      display: block;
    }

    .page-wrap {
      max-width: 1120px;
      margin: 0 auto;
      padding: 28px 20px 72px;
    }

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 18px;
      padding-bottom: 18px;
      border-bottom: 1px solid rgba(148, 163, 184, 0.3);
      backdrop-filter: blur(10px);
    }

    .brand-lockup {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .brand-mark {
      width: 32px;
      height: 32px;
      border-radius: 12px;
      background:
        radial-gradient(circle at 20% 0%, rgba(255, 255, 255, 0.32), transparent 55%),
        linear-gradient(135deg, #06b6d4, #22c55e);
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow:
        0 0 18px rgba(34, 211, 238, 0.55),
        0 0 32px rgba(59, 130, 246, 0.45);
    }

    .brand-mark span {
      font-weight: 800;
      font-size: 18px;
      letter-spacing: 0.04em;
    }

    .brand-text-main {
      font-weight: 700;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      font-size: 13px;
    }

    .brand-text-sub {
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.2em;
      color: rgba(156, 163, 175, 0.9);
    }

    nav {
      display: flex;
      align-items: center;
      gap: 18px;
      font-size: 13px;
      color: var(--mpwr-muted);
    }

    nav a {
      position: relative;
      padding: 4px 0;
    }

    nav a::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -2px;
      width: 0;
      height: 2px;
      border-radius: 999px;
      background: linear-gradient(90deg, var(--mpwr-cyan), var(--mpwr-purple));
      transition: width 0.18s ease-out;
    }

    nav a:hover {
      color: #f9fafb;
    }

    nav a:hover::after {
      width: 100%;
    }

    .primary-cta {
      padding: 9px 16px;
      border-radius: 999px;
      border: none;
      font-size: 13px;
      font-weight: 600;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      color: #020617;
      background: linear-gradient(135deg, var(--mpwr-cyan), var(--mpwr-accent));
      box-shadow:
        0 10px 26px rgba(15, 118, 110, 0.55),
        0 0 22px rgba(14, 165, 233, 0.75);
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 8px;
    }

    .primary-cta span {
      font-size: 14px;
    }

    .primary-cta:hover {
      transform: translateY(-1px);
      box-shadow:
        0 12px 32px rgba(15, 118, 110, 0.75),
        0 0 30px rgba(14, 165, 233, 0.9);
    }

    .primary-cta:active {
      transform: translateY(0);
      box-shadow:
        0 8px 20px rgba(15, 118, 110, 0.55),
        0 0 18px rgba(14, 165, 233, 0.75);
    }

    main {
      padding-top: 42px;
      display: flex;
      flex-direction: column;
      gap: 72px;
    }

    /* Hero layout */
    .hero {
      display: grid;
      grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
      align-items: center;
      gap: 40px;
    }

    .hero-copy-eyebrow {
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 0.22em;
      color: var(--mpwr-muted);
      margin-bottom: 10px;
    }

    .hero-title {
      font-size: clamp(32px, 4vw, 40px);
      line-height: 1.05;
      letter-spacing: 0.02em;
      margin-bottom: 14px;
    }

    .hero-title span.accent {
      background: linear-gradient(120deg, var(--mpwr-cyan), var(--mpwr-purple));
      -webkit-background-clip: text;
      color: transparent;
    }

    .hero-subtitle {
      font-size: 15px;
      line-height: 1.6;
      color: var(--mpwr-muted);
      max-width: 34rem;
      margin-bottom: 20px;
    }

    .hero-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 14px;
      align-items: center;
      font-size: 12px;
      color: rgba(148, 163, 184, 0.95);
      margin-top: 18px;
    }

    .hero-pill {
      padding: 5px 10px;
      border-radius: 999px;
      border: 1px solid rgba(148, 163, 184, 0.6);
      background: radial-gradient(circle at top, rgba(15, 23, 42, 0.98), rgba(15, 23, 42, 0.88));
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }

    .hero-pill-dot {
      width: 7px;
      height: 7px;
      border-radius: 999px;
      background: radial-gradient(circle at 30% 0%, #22c55e, #16a34a);
      box-shadow: 0 0 12px rgba(34, 197, 94, 0.9);
    }

    .hero-secondary-link {
      font-size: 12px;
      color: rgba(191, 219, 254, 0.9);
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }

    .hero-secondary-link svg {
      width: 13px;
      height: 13px;
    }

    /* Phone demo region (centerpiece) */
    .hero-phone {
      display: flex;
      justify-content: center;
    }

    .phone-demo {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 18px;
      padding: 20px;
    }

    .iphone {
      position: relative;
      width: 340px;
      height: 680px;
      border-radius: 50px;
      overflow: hidden;
      background: radial-gradient(circle at 20% 0%, #1f2937, #020617 60%);
      box-shadow:
        0 0 40px rgba(0, 240, 255, 0.18),
        0 20px 45px rgba(0, 0, 0, 0.85);
      border: 1px solid rgba(148, 163, 184, 0.25);
      cursor: pointer;
      transition: box-shadow 0.3s ease-out, transform 0.3s ease-out;
    }

    .iphone:hover {
      box-shadow:
        0 0 60px rgba(0, 240, 255, 0.35),
        0 24px 60px rgba(0, 0, 0, 0.9);
      transform: translateY(-4px);
    }

    .screen {
      position: absolute;
      inset: 28px 18px 40px 18px;
      border-radius: 36px;
      background: radial-gradient(circle at 20% 0%, #1d2340, #020617 80%);
      overflow: hidden;
    }

    .dynamic-island {
      position: absolute;
      top: 14px;
      left: 50%;
      transform: translateX(-50%);
      width: 110px;
      height: 26px;
      border-radius: 16px;
      background: #020617;
    }

    .logo-wrap {
      position: absolute;
      top: 60px;
      left: 50%;
      transform: translateX(-50%);
      text-align: center;
      color: #f9fafb;
    }

    .logo-wrap .brand {
      font-weight: 700;
      font-size: 32px;
      letter-spacing: 4px;
    }

    .logo-wrap .tagline {
      margin-top: 4px;
      font-size: 13px;
      letter-spacing: 1.2px;
      text-transform: lowercase;
      color: rgba(226, 232, 240, 0.86);
    }

    .icons-layer {
      position: absolute;
      left: 50%;
      top: 56%;
      width: 230px;
      height: 210px;
      transform: translate(-50%, -50%);
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-auto-rows: minmax(0, 1fr);
      padding: 8px 10px;
      gap: 14px;
      justify-items: center;
      align-items: center;
      pointer-events: auto;
    }

    .icon-hit {
      position: relative;
      pointer-events: auto;
      width: 60px;
      height: 60px;
      border-radius: 16px;
      background: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: visible;
      cursor: pointer;
      box-shadow:
        0 6px 18px rgba(0, 0, 0, 0.35),
        0 0 12px rgba(0, 0, 0, 0.25);
    }

    .icon-hit a {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      text-decoration: none;
      color: inherit;
    }

    .icon-hit img {
      width: 78%;
      height: 78%;
      object-fit: contain;
      display: block;
    }

    .icon-hit::before {
      content: "";
      position: absolute;
      inset: 18%;
      border-radius: 18px;
      background:
        radial-gradient(circle at 50% 30%, rgba(255, 255, 255, 0.22), transparent 60%),
        radial-gradient(circle at 50% 100%, rgba(90, 255, 220, 0.2), transparent 70%);
      opacity: 0;
      transform: scale(0.9);
      box-shadow: 0 0 0 rgba(0, 240, 255, 0);
      transition:
        opacity 0.18s ease-out,
        transform 0.18s ease-out,
        box-shadow 0.18s ease-out;
    }

    .icon-hit::after {
      content: "";
      position: absolute;
      inset: 32%;
      border-radius: 50%;
      border: 1px solid rgba(255, 255, 255, 0.35);
      opacity: 0;
      transform: scale(0.8);
      transition:
        opacity 0.18s ease-out,
        transform 0.18s ease-out;
    }

    .icon-hit:hover::before,
    .icon-hit.active::before {
      opacity: 1;
      transform: scale(1.05);
      box-shadow:
        0 0 12px rgba(0, 240, 255, 0.85),
        0 0 32px rgba(0, 240, 255, 0.35);
    }

    .icon-hit:hover::after,
    .icon-hit.active::after {
      opacity: 1;
      transform: scale(1);
    }

    .tooltip {
      position: absolute;
      left: 50%;
      bottom: 108%;
      transform: translateX(-50%) translateY(4px);
      min-width: 180px;
      max-width: 220px;
      padding: 8px 10px;
      border-radius: 10px;
      background: rgba(15, 23, 42, 0.96);
      border: 1px solid rgba(148, 163, 184, 0.7);
      box-shadow: 0 8px 18px rgba(0, 0, 0, 0.75);
      font-size: 11px;
      line-height: 1.3;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.18s ease-out, transform 0.18s ease-out;
      z-index: 5;
      text-align: left;
    }

    .tooltip strong {
      display: block;
      margin-bottom: 2px;
      font-size: 11.5px;
      color: #e5e7ff;
    }

    .icon-hit:hover .tooltip,
    .icon-hit.active .tooltip {
      opacity: 1;
      transform: translateX(-50%) translateY(-2px);
    }

    .readout {
      margin-top: 8px;
      padding: 10px 16px;
      border-radius: 999px;
      background: radial-gradient(circle at top, rgba(15, 23, 42, 0.96), rgba(15, 23, 42, 0.9));
      border: 1px solid rgba(148, 163, 184, 0.4);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.65);
      display: flex;
      gap: 6px;
      align-items: center;
      font-size: 13px;
      color: #cbd5f5;
    }

    .readout-label {
      opacity: 0.8;
    }

    .readout-value {
      font-weight: 600;
      color: #e5e7ff;
    }

    /* Neon energy rings */
    .energy-ring {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      border: 3px solid;
      animation: neonRingPulse 10s ease-in-out infinite;
      opacity: 0;
      pointer-events: none;
    }

    .energy-ring:nth-child(1) {
      width: 350px;
      height: 350px;
      border-color: #00ffff;
      animation-delay: 0s;
    }

    .energy-ring:nth-child(2) {
      width: 400px;
      height: 400px;
      border-color: #ff00ff;
      animation-delay: 0.3s;
    }

    .energy-ring:nth-child(3) {
      width: 450px;
      height: 450px;
      border-color: #00ff00;
      animation-delay: 0.6s;
    }

    .energy-ring:nth-child(4) {
      width: 500px;
      height: 500px;
      border-color: #ffff00;
      animation-delay: 0.9s;
    }

    @keyframes neonRingPulse {
      0%, 20% {
        opacity: 0;
        transform: translate(-50%, -50%) scale(0.5);
        filter: blur(0px);
      }
      35% {
        opacity: 0.8;
        transform: translate(-50%, -50%) scale(1);
        filter: blur(2px);
      }
      45% {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1.3);
        filter: blur(4px);
      }
      55% {
        opacity: 0.8;
        transform: translate(-50%, -50%) scale(1.5);
        filter: blur(6px);
      }
      70%, 100% {
        opacity: 0;
        transform: translate(-50%, -50%) scale(2);
        filter: blur(10px);
      }
    }

    /* Apps grid section */
    .section {
      display: grid;
      gap: 18px;
    }

    .section-header {
      display: flex;
      flex-direction: column;
      gap: 6px;
      max-width: 40rem;
    }

    .section-kicker {
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 0.2em;
      color: var(--mpwr-muted);
    }

    .section-title {
      font-size: 22px;
      letter-spacing: 0.03em;
    }

    .section-body {
      font-size: 14px;
      color: var(--mpwr-muted);
      line-height: 1.6;
    }

    .apps-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 18px;
    }

    .app-card {
      border-radius: 18px;
      padding: 14px 14px 16px;
      background: radial-gradient(circle at top, rgba(15, 23, 42, 0.96), rgba(15, 23, 42, 0.92));
      border: 1px solid rgba(148, 163, 184, 0.45);
      box-shadow: 0 18px 40px rgba(15, 23, 42, 0.9);
      display: grid;
      grid-template-rows: auto auto 1fr;
      gap: 8px;
      transition: transform 0.18s ease-out, box-shadow 0.18s ease-out, border-color 0.18s ease-out;
    }

    .app-card a {
      display: grid;
      grid-template-rows: auto auto 1fr;
      gap: 8px;
      text-decoration: none;
      color: inherit;
    }

    .app-card:hover {
      border-color: rgba(191, 219, 254, 0.75);
      box-shadow:
        0 18px 40px rgba(15, 23, 42, 0.96),
        0 0 24px rgba(56, 189, 248, 0.35);
      transform: translateY(-2px);
    }

    .app-card-icon {
      width: 40px;
      height: 40px;
      border-radius: 14px;
      background: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow:
        0 6px 18px rgba(0, 0, 0, 0.35),
        0 0 12px rgba(0, 0, 0, 0.25);
    }

    .app-card-icon img {
      width: 72%;
      height: 72%;
      object-fit: contain;
    }

    .app-card-title {
      font-size: 14px;
      font-weight: 600;
    }

    .app-card-body {
      font-size: 13px;
      color: var(--mpwr-muted);
      line-height: 1.5;
    }

    /* CTA strip */
    .cta-strip {
      margin-top: 8px;
      padding: 18px 20px;
      border-radius: 22px;
      background: radial-gradient(circle at 0 0, rgba(34, 211, 238, 0.18), rgba(30, 64, 175, 0.92));
      border: 1px solid rgba(191, 219, 254, 0.4);
      box-shadow:
        0 16px 40px rgba(15, 23, 42, 0.96),
        0 0 40px rgba(56, 189, 248, 0.3);
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 16px;
      justify-content: space-between;
      font-size: 14px;
    }

    .cta-strip span {
      max-width: 28rem;
    }

    /* Footer */
    footer {
      margin-top: 40px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 10px;
      font-size: 12px;
      color: rgba(148, 163, 184, 0.8);
    }

    footer a {
      color: rgba(191, 219, 254, 0.9);
    }

    @media (max-width: 960px) {
      header {
        flex-direction: column;
        align-items: flex-start;
      }

      nav {
        flex-wrap: wrap;
        justify-content: flex-start;
      }

      .hero {
        grid-template-columns: minmax(0, 1fr);
      }

      .hero-phone {
        order: -1;
      }

      .hero-copy {
        text-align: left;
      }
    }

    @media (max-width: 720px) {
      .apps-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    }

    @media (max-width: 520px) {
      .apps-grid {
        grid-template-columns: minmax(0, 1fr);
      }

      .iphone {
        transform: scale(0.86);
      }
    }
  </style>
</head>
<body>
  <div class="page-wrap">
    <header>
      <div class="brand-lockup">
        <div class="brand-mark"><span>M</span></div>
        <div>
          <div class="brand-text-main">mPWR</div>
          <div class="brand-text-sub">connect · pay · earn</div>
        </div>
      </div>
      <nav>
        <a href="#apps">Apps</a>
        <a href="#how">How it works</a>
        <a href="#investors">For investors</a>
        <a href="#cta">Get early access</a>
        <button class="primary-cta" onclick="document.getElementById('cta').scrollIntoView({behavior:'smooth'})">
          <span>Request early access</span>
          <span>→</span>
        </button>
      </nav>
    </header>

    <main>
      <!-- Hero with interactive phone centerpiece -->
      <section class="hero" id="top">
        <div class="hero-copy">
          <div class="hero-copy-eyebrow">Device-led digital inclusion</div>
          <h1 class="hero-title">
            One phone. <span class="accent">Six rails</span> for connection, money, media & skills.
          </h1>
          <p class="hero-subtitle">
            mPWR bundles an affordable smartphone with always-on connectivity, embedded financial services,
            entertainment, rewards, and upskilling — all orchestrated from the device home screen.
          </p>
          <button class="primary-cta" onclick="document.getElementById('cta').scrollIntoView({behavior:'smooth'})">
            <span>See how mPWR works</span>
            <span>→</span>
          </button>
          <div class="hero-meta">
            <div class="hero-pill">
              <span class="hero-pill-dot"></span>
              <span>Built for underconnected & underbanked customers</span>
            </div>
            <a href="#investors" class="hero-secondary-link">
              Investor overview
              <svg viewBox="0 0 16 16" aria-hidden="true">
                <path d="M3 8h7.2L7.1 4.9 8.5 3.5 13 8l-4.5 4.5-1.4-1.4L10.2 9H3z"
                      fill="currentColor" />
              </svg>
            </a>
          </div>
        </div>

        <div class="hero-phone">
          <div class="phone-demo" aria-label="mPWR phone demo">
            <div class="energy-ring"></div>
            <div class="energy-ring"></div>
            <div class="energy-ring"></div>
            <div class="energy-ring"></div>

            <div class="iphone">
              <div class="screen">
                <div class="dynamic-island"></div>

                <div class="logo-wrap">
                  <div class="brand">mPWR</div>
                  <div class="tagline">connect · pay · earn</div>
                </div>

                <div class="icons-layer">
                  <!-- Top row: Phone, Connect, Pay -->
                  <div class="icon-hit" data-label="mPWR Phone">
                    <a href="https://thempwr.com/services" target="_blank" rel="noopener noreferrer">
                      <img src="https://thempwr.com/wp-content/uploads/2025/09/mPWR-gray-gradient-icon-150x150.png" alt="mPWR Phone" />
                      <div class="tooltip">
                        <strong>mPWR Phone</strong>
                        Affordably lease devices with protection and upgrades.
                      </div>
                    </a>
                  </div>
                  <div class="icon-hit" data-label="mPWR Connect">
                    <a href="https://thempwr.com/services" target="_blank" rel="noopener noreferrer">
                      <img src="https://thempwr.com/wp-content/uploads/2025/08/mPWR-Connect-Icon-150x150.png" alt="mPWR Connect" />
                      <div class="tooltip">
                        <strong>mPWR Connect</strong>
                        Seamless connectivity and optional international roaming.
                      </div>
                    </a>
                  </div>
                  <div class="icon-hit" data-label="mPWR Pay">
                    <a href="https://thempwr.com/services" target="_blank" rel="noopener noreferrer">
                      <img src="https://thempwr.com/wp-content/uploads/2025/08/mPWR-Pay-Icon-150x150.png" alt="mPWR Pay" />
                      <div class="tooltip">
                        <strong>mPWR Pay</strong>
                        Wallet, remittances, and cross-border payments.
                      </div>
                    </a>
                  </div>

                  <!-- Bottom row: Media, Earn, University -->
                  <div class="icon-hit" data-label="mPWR Media">
                    <a href="https://thempwr.com/services" target="_blank" rel="noopener noreferrer">
                      <img src="https://thempwr.com/wp-content/uploads/2025/08/mPWR-Media-Icon-150x150.png" alt="mPWR Media" />
                      <div class="tooltip">
                        <strong>mPWR Media</strong>
                        Live TV, movies, series, radio, music, plus financial education.
                      </div>
                    </a>
                  </div>
                  <div class="icon-hit" data-label="mPWR Earn">
                    <a href="https://thempwr.com/services" target="_blank" rel="noopener noreferrer">
                      <img src="https://thempwr.com/wp-content/uploads/2025/08/mPWR-Earn-Icon-150x150.png" alt="mPWR Earn" />
                      <div class="tooltip">
                        <strong>mPWR Earn</strong>
                        Rewards for on-time repayments, referrals, and engagement.
                      </div>
                    </a>
                  </div>
                  <div class="icon-hit" data-label="mPWR University">
                    <a href="https://thempwr.com/services" target="_blank" rel="noopener noreferrer">
                      <img src="https://thempwr.com/wp-content/uploads/2025/08/mPWR-University-Icon-150x150.png" alt="mPWR University" />
                      <div class="tooltip">
                        <strong>mPWR University</strong>
                        Skills training and digital literacy powered by AI.
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="readout">
              <span class="readout-label">Selected:</span>
              <span class="readout-value" id="iconLabel">Hover or tap an icon</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Apps overview -->
      <section class="section" id="apps">
        <div class="section-header">
          <div class="section-kicker">Six apps, one relationship</div>
          <h2 class="section-title">Everything important lives on the home screen.</h2>
          <p class="section-body">
            Each mPWR app is a distribution rail: from first device financing to
            everyday payments, content, rewards, and upskilling. The phone demo
            above mirrors how customers experience the bundle in their hand.
          </p>
        </div>

        <div class="apps-grid">
          <article class="app-card">
            <a href="https://thempwr.com/services" target="_blank" rel="noopener noreferrer">
              <div class="app-card-icon">
                <img src="https://thempwr.com/wp-content/uploads/2025/09/mPWR-gray-gradient-icon-150x150.png" alt="mPWR Phone" />
              </div>
              <h3 class="app-card-title">mPWR Phone</h3>
              <p class="app-card-body">
                Affordably lease smartphones with embedded device protection and upgrade
                paths. mPWR Phone is the starting point for the entire relationship.
              </p>
            </a>
          </article>

          <article class="app-card">
            <a href="https://thempwr.com/services" target="_blank" rel="noopener noreferrer">
              <div class="app-card-icon">
                <img src="https://thempwr.com/wp-content/uploads/2025/08/mPWR-Connect-Icon-150x150.png" alt="mPWR Connect" />
              </div>
              <h3 class="app-card-title">mPWR Connect</h3>
              <p class="app-card-body">
                Seamless connectivity with optional international roaming, tuned for
                streaming, payments, and daily communication — not just raw GBs.
              </p>
            </a>
          </article>

          <article class="app-card">
            <a href="https://thempwr.com/services" target="_blank" rel="noopener noreferrer">
              <div class="app-card-icon">
                <img src="https://thempwr.com/wp-content/uploads/2025/08/mPWR-Pay-Icon-150x150.png" alt="mPWR Pay" />
              </div>
              <h3 class="app-card-title">mPWR Pay</h3>
              <p class="app-card-body">
                Wallet, remittances, and cross-border payments with contextual offers.
                Pay is where device repayments and daily spend intersect.
              </p>
            </a>
          </article>

          <article class="app-card">
            <a href="https://thempwr.com/services" target="_blank" rel="noopener noreferrer">
              <div class="app-card-icon">
                <img src="https://thempwr.com/wp-content/uploads/2025/08/mPWR-Media-Icon-150x150.png" alt="mPWR Media" />
              </div>
              <h3 class="app-card-title">mPWR Media</h3>
              <p class="app-card-body">
                Live TV, movies, series, radio, music, and financial education modules.
                Media keeps engagement high while teaching better money behaviors.
              </p>
            </a>
          </article>

          <article class="app-card">
            <a href="https://thempwr.com/services" target="_blank" rel="noopener noreferrer">
              <div class="app-card-icon">
                <img src="https://thempwr.com/wp-content/uploads/2025/08/mPWR-Earn-Icon-150x150.png" alt="mPWR Earn" />
              </div>
              <h3 class="app-card-title">mPWR Earn</h3>
              <p class="app-card-body">
                Rewards for on-time repayments, referrals, and engagement across the
                ecosystem, turning good behavior into real, liquid value.
              </p>
            </a>
          </article>

          <article class="app-card">
            <a href="https://thempwr.com/services" target="_blank" rel="noopener noreferrer">
              <div class="app-card-icon">
                <img src="https://thempwr.com/wp-content/uploads/2025/08/mPWR-University-Icon-150x150.png" alt="mPWR University" />
              </div>
              <h3 class="app-card-title">mPWR University</h3>
              <p class="app-card-body">
                Skills training and digital literacy powered by AI, designed to raise
                earning power over time — not just screen time.
              </p>
            </a>
          </article>
        </div>
      </section>

      <!-- How it works / investor hook -->
      <section class="section" id="investors">
        <div class="section-header" id="how">
          <div class="section-kicker">From device to full-stack revenue</div>
          <h2 class="section-title">A distribution-first model with stacked economics.</h2>
          <p class="section-body">
            mPWR starts with a financed device where traditional channels struggle,
            then layers connectivity, financial services, media, and rewards on top.
            Because the phone is the entry point, each rail compounds the others.
          </p>
        </div>

        <div class="cta-strip" id="cta">
          <span>
            Interested in the model, markets, or pipeline? Request the full investor
            materials, including deck, unit economics, and projected rollout.
          </span>
          <button class="primary-cta">
            <span>Request investor brief</span>
            <span>→</span>
          </button>
        </div>
      </section>
    </main>

    <footer>
      <span>© <span id="year"></span> mPWR. All rights reserved.</span>
      <span>
        Prototype landing experience for demonstration only.
      </span>
    </footer>
  </div>

  <script>
    // Icon hover / click behavior
    (function() {
      const hits = document.querySelectorAll('.icon-hit');
      const labelEl = document.getElementById('iconLabel');

      hits.forEach(hit => {
        hit.addEventListener('click', () => {
          const label = hit.dataset.label || 'Icon';
          labelEl.textContent = label;
          hits.forEach(h => h.classList.remove('active'));
          hit.classList.add('active');
        });

        hit.addEventListener('mouseenter', () => {
          const label = hit.dataset.label || 'Icon';
          labelEl.textContent = label;
        });
      });

      const phone = document.querySelector('.iphone');
      phone.addEventListener('mouseleave', () => {
        if (![...hits].some(h => h.classList.contains('active'))) {
          labelEl.textContent = 'Hover or tap an icon';
        }
      });
    })();

    // Footer year
    document.getElementById('year').textContent = new Date().getFullYear();
  </script>
</body>
</html>
```

If you want, next step we can:

- Swap the **“Request investor brief”** button to open a real Calendly / Typeform link.
- Or create a **stripped-down, email-safe HTML** version of just the hero + phone for an investor drip.

**Mike:** provide the downloadable HTML file

**GPT:** Here you go — your landing page HTML is ready to download:

[Download the mPWR landing page HTML](sandbox:/mnt/data/mpwr-landing-phone-demo-links.html)

Open it in Chrome and you should see:

- The hologram phone with solar energy rings  
- Real mPWR app icons on the screen  
- Hover tooltips on each icon  
- Clickable icons and app cards linking to `https://thempwr.com/services`

**GPT:** Hey there!

**Mike:** Great. Almost there. Remove the links from the apps on the phone. Leave them on the icons underneath.

**GPT:** Done — phone icons are now just interactive (hover / tap + tooltip + readout) with **no links**, while the **cards underneath still link** to `https://thempwr.com/services`.

Download the updated file here:

[Download the HTML](sandbox:/mnt/data/mpwr-landing-phone-demo-no-phone-links.html)

**Mike:** great! create an animation using expert CSS styling of the solar system.  it should be visible as a background effect only, so the images and text on the page have the solar system as a background effect.  think stars, planets , moons , asteroids , shooting star (that darts across the screen).   the page should feel like it is floating around in space with vivid images of stars , and planets.

**GPT:** This is going to look sick.

I’ve added a **full animated solar-system background** behind your existing page:

- Layered **twinkling starfields**
- Three **orbiting planets** on dashed orbits
- A soft **asteroid belt** drifting around the center
- Two **shooting stars** that streak across the screen on a loop  
- All of it runs **behind** your content only (`pointer-events: none; z-index` handled), so the phone demo, text, and CTAs stay crisp and readable.

Download the new version here:

[Download the space-background mPWR landing page](sandbox:/mnt/data/mpwr-landing-phone-demo-space-bg.html)

Open it in your browser and you’ll have the whole page floating in space 🚀

**Mike:** reduce the amount of padding between the mPWR phone and the header .   on a mobile device it is too far down the screen.  move it up almost flush with the container that displays , " REQUEST EARLY ACCESS".

**GPT:** Got it — I tightened up the spacing on mobile so the **mPWR phone sits much closer to the header/“REQUEST EARLY ACCESS” bar**:

- Reduced `main` top padding on screens under 960px  
- Reduced the hero grid gap on mobile  
- Slightly scaled the phone up and pulled the `.phone-demo` padding down so it rides higher on small screens

Download the updated version here:

[Download the tighter-hero space landing page](sandbox:/mnt/data/mpwr-landing-phone-demo-space-bg-tight-hero.html)

**Mike:** reduce the padding a lot more

**GPT:** Done — I’ve pulled the phone up a lot more on mobile:

- `main` top padding cut to `4px`
- `header` bottom padding reduced to `8px`
- `.hero` gap tightened
- `.phone-demo` now has `padding-top: 0` and a slight negative `margin-top` on small screens so the phone sits almost flush under the header/CTA bar.

Grab the new file here:

[Download the extra-tight hero version](sandbox:/mnt/data/mpwr-landing-phone-demo-space-bg-extra-tight-hero.html)

**Mike:** what is the current padding set to ?

**GPT:** Right now on the **extra-tight** version, the key spacing values are:

- **`main` (overall content)**
  - Desktop: `padding-top: 42px;`
  - Mobile (`max-width: 960px`): `padding-top: 4px;`

- **`header`**
  - Base: `padding-bottom: 18px;`
  - Mobile (`max-width: 960px`): overridden to `padding-bottom: 8px;`

- **`.phone-demo` (wrapper around the phone)**
  - Base: `padding: 20px;`
  - Small mobile (`max-width: 520px`):  
    - `padding-top: 0;`  
    - `margin-top: -10px;`  

So on a small phone, the vertical space between the header CTA and the phone is basically:

> header bottom padding (8px) + main top padding (4px) + a tiny negative shift from `.phone-demo` (`margin-top: -10px`)  

…which nets out to just a few pixels of gap visually.

**Mike:** reduce the padding -top on mobile to 1px

**GPT:** Done — on mobile (`max-width: 960px`) the `main` element now has:

```css
main {
  padding-top: 1px;
}
```

Everything else is unchanged.

Here’s the updated file:

[Download the ultra-tight mobile hero version](sandbox:/mnt/data/mpwr-landing-phone-demo-space-bg-ultra-tight-hero.html)

**Mike:** push the phone up flush with the header.  I need the 6 apps seen in the phone to be visible on the home page when it first loads.

**GPT:** Nice — I pushed it right up.

Changes on mobile:

- `header` bottom padding → `0`
- `.hero` gap → `4px`
- `.phone-demo` on small screens (`max-width: 520px`) now has `margin-top: -24px` so the **phone sits essentially flush under the header**, making the 6 apps visible as soon as the page loads.

Grab this version:

[Download the flush-phone landing page](sandbox:/mnt/data/mpwr-landing-phone-demo-space-bg-flush-phone.html)

**Mike:** generate a separate mpwr phone , I need the screen to display different images , changing from app to app.  e.g. mpwr phone will entirely display "Affordably lease devices with protection and upgrades." images.  the mpwr connect , "Seamless connectivity and optional international roaming" displays images of people talking on phones , ect.

**GPT:** Got you. Here’s a **separate mPWR phone component** where the **entire screen changes per app** (Phone / Connect / Pay / Media / Earn / University). Each app gets its own “full-screen” visual + copy:

- **mPWR Phone** → “Affordably lease devices with protection and upgrades.”
- **mPWR Connect** → “Seamless connectivity and optional international roaming.”
- etc., all mapped to their own screen.

You can use this as its own page or drop the `.phone-wrapper` block into your existing landing.

---

### Full HTML – mPWR Story Phone (screen changes by app)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>mPWR Story Phone</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style>
    :root {
      --mpwr-cyan: #00f0ff;
      --mpwr-purple: #7c3aed;
      --mpwr-deep: #020617;
      --mpwr-text: #e5e7eb;
      --mpwr-muted: #9ca3af;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background:
        radial-gradient(circle at top, #020617, #020617 55%, #000000 100%);
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      color: var(--mpwr-text);
    }

    .phone-wrapper {
      width: 100%;
      max-width: 420px;
      padding: 20px;
    }

    .phone-title {
      font-size: 14px;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: var(--mpwr-muted);
      margin-bottom: 10px;
      text-align: center;
    }

    .phone-subtitle {
      font-size: 18px;
      text-align: center;
      margin-bottom: 18px;
    }

    .phone-shell {
      position: relative;
      width: 320px;
      height: 640px;
      margin: 0 auto;
      border-radius: 40px;
      padding: 14px;
      background: radial-gradient(circle at 10% 0%, #1f2937, #020617 70%);
      box-shadow:
        0 0 40px rgba(0, 240, 255, 0.25),
        0 24px 60px rgba(0, 0, 0, 0.9);
      border: 1px solid rgba(148, 163, 184, 0.35);
    }

    .phone-shell::before {
      /* side highlight */
      content: "";
      position: absolute;
      inset: 6px;
      border-radius: 36px;
      border: 1px solid rgba(148, 163, 184, 0.4);
      pointer-events: none;
    }

    .screen {
      position: relative;
      width: 100%;
      height: 100%;
      border-radius: 30px;
      overflow: hidden;
      background: radial-gradient(circle at 20% 0%, #020617, #020617 85%);
    }

    .dynamic-island {
      position: absolute;
      top: 10px;
      left: 50%;
      transform: translateX(-50%);
      width: 90px;
      height: 24px;
      border-radius: 14px;
      background: #020617;
      z-index: 5;
    }

    .screen-slide {
      position: absolute;
      inset: 32px 16px 20px 16px;
      border-radius: 24px;
      padding: 18px 18px 20px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      gap: 10px;
      color: #f9fafb;
      opacity: 0;
      transform: translateY(10px) scale(0.98);
      transition: opacity 0.35s ease-out, transform 0.35s ease-out;
      box-shadow: 0 18px 40px rgba(15, 23, 42, 0.9);
      overflow: hidden;
    }

    .screen-slide::before {
      content: "";
      position: absolute;
      inset: -30%;
      opacity: 0.75;
      mix-blend-mode: screen;
    }

    .screen-slide.active {
      opacity: 1;
      transform: translateY(0) scale(1);
    }

    .slide-label {
      font-size: 11px;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: rgba(226, 232, 240, 0.9);
    }

    .slide-title {
      font-size: 18px;
      font-weight: 600;
      max-width: 16rem;
    }

    .slide-body {
      font-size: 13px;
      color: rgba(241, 245, 249, 0.95);
      max-width: 19rem;
    }

    /* Individual "image" looks per app */

    .screen-slide.phone {
      background:
        radial-gradient(circle at 15% 0%, #22c55e, transparent 58%),
        radial-gradient(circle at 80% 120%, #0ea5e9, #020617 70%);
    }
    .screen-slide.phone::before {
      background:
        radial-gradient(circle at 20% 0%, rgba(248, 250, 252, 0.5), transparent 60%),
        radial-gradient(circle at 85% 40%, rgba(34, 211, 238, 0.5), transparent 65%);
    }

    .screen-slide.connect {
      background:
        radial-gradient(circle at 8% 0%, #38bdf8, transparent 55%),
        radial-gradient(circle at 90% 110%, #1d4ed8, #020617 70%);
    }
    .screen-slide.connect::before {
      background:
        radial-gradient(circle at 20% 15%, rgba(248, 250, 252, 0.55), transparent 55%),
        conic-gradient(from 130deg at 50% 50%, rgba(96, 165, 250, 0.8), rgba(56, 189, 248, 0.15), transparent 70%);
    }

    .screen-slide.pay {
      background:
        radial-gradient(circle at 12% 0%, #facc15, transparent 55%),
        radial-gradient(circle at 90% 110%, #f97316, #020617 70%);
    }
    .screen-slide.pay::before {
      background:
        radial-gradient(circle at 0% 40%, rgba(253, 224, 71, 0.6), transparent 60%),
        radial-gradient(circle at 100% 60%, rgba(251, 146, 60, 0.6), transparent 65%);
    }

    .screen-slide.media {
      background:
        radial-gradient(circle at 12% 0%, #a855f7, transparent 55%),
        radial-gradient(circle at 90% 110%, #ec4899, #020617 70%);
    }
    .screen-slide.media::before {
      background:
        radial-gradient(circle at 20% 10%, rgba(244, 244, 245, 0.45), transparent 60%),
        conic-gradient(from 180deg at 50% 110%, rgba(251, 113, 133, 0.8), rgba(129, 140, 248, 0.2), transparent 60%);
    }

    .screen-slide.earn {
      background:
        radial-gradient(circle at 15% 0%, #22c55e, transparent 55%),
        radial-gradient(circle at 90% 110%, #16a34a, #020617 70%);
    }
    .screen-slide.earn::before {
      background:
        radial-gradient(circle at 10% 20%, rgba(190, 242, 100, 0.55), transparent 55%),
        radial-gradient(circle at 85% 70%, rgba(52, 211, 153, 0.6), transparent 65%);
    }

    .screen-slide.university {
      background:
        radial-gradient(circle at 16% 0%, #38bdf8, transparent 55%),
        radial-gradient(circle at 90% 120%, #7c3aed, #020617 70%);
    }
    .screen-slide.university::before {
      background:
        radial-gradient(circle at 20% 10%, rgba(248, 250, 252, 0.5), transparent 60%),
        conic-gradient(from 210deg at 40% 120%, rgba(59, 130, 246, 0.8), rgba(56, 189, 248, 0.2), transparent 65%);
    }

    /* App selector pills */

    .app-toggle-row {
      margin-top: 18px;
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      justify-content: center;
    }

    .app-toggle {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 5px 10px;
      border-radius: 999px;
      border: 1px solid rgba(148, 163, 184, 0.6);
      background: radial-gradient(circle at top, rgba(15, 23, 42, 0.96), rgba(15, 23, 42, 0.92));
      font-size: 12px;
      color: rgba(226, 232, 240, 0.95);
      cursor: pointer;
      transition:
        border-color 0.18s ease-out,
        box-shadow 0.18s ease-out,
        background-color 0.18s ease-out,
        transform 0.12s ease-out;
    }

    .app-toggle:hover {
      transform: translateY(-1px);
    }

    .app-toggle-icon {
      width: 16px;
      height: 16px;
      border-radius: 5px;
      background: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }

    .app-toggle-icon img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    .app-toggle.active {
      border-color: rgba(56, 189, 248, 0.9);
      box-shadow:
        0 0 14px rgba(56, 189, 248, 0.5),
        0 10px 22px rgba(15, 23, 42, 0.95);
      background: radial-gradient(circle at top, rgba(15, 23, 42, 0.98), rgba(15, 23, 42, 1));
    }

    @media (max-width: 480px) {
      .phone-shell {
        transform: scale(0.92);
        transform-origin: top center;
      }
    }
  </style>
</head>
<body>
  <div class="phone-wrapper">
    <div class="phone-title">mPWR Story Phone</div>
    <div class="phone-subtitle">
      Tap an app to see the full-screen story for that rail.
    </div>

    <div class="phone-shell">
      <div class="screen">
        <div class="dynamic-island"></div>

        <!-- mPWR Phone -->
        <div class="screen-slide phone active" data-app="phone">
          <div class="slide-label">mPWR Phone</div>
          <div class="slide-title">
            Affordably lease devices with protection and upgrades.
          </div>
          <div class="slide-body">
            Start with the device: a smartphone that comes with built-in protection,
            upgrade paths, and a clear way to step into the digital economy.
          </div>
        </div>

        <!-- mPWR Connect -->
        <div class="screen-slide connect" data-app="connect">
          <div class="slide-label">mPWR Connect</div>
          <div class="slide-title">
            Seamless connectivity and optional international roaming.
          </div>
          <div class="slide-body">
            Always-on data for calls, messaging, streaming, and payments — with optional
            roaming so families can stay close even when they&apos;re apart.
          </div>
        </div>

        <!-- mPWR Pay -->
        <div class="screen-slide pay" data-app="pay">
          <div class="slide-label">mPWR Pay</div>
          <div class="slide-title">
            Wallet, remittances, and cross-border payments.
          </div>
          <div class="slide-body">
            One wallet for device repayments, everyday spend, and cross-border transfers,
            built for speed, safety, and real-world use cases.
          </div>
        </div>

        <!-- mPWR Media -->
        <div class="screen-slide media" data-app="media">
          <div class="slide-label">mPWR Media</div>
          <div class="slide-title">
            Live TV, movies, radio, music, and financial education.
          </div>
          <div class="slide-body">
            Entertainment plus learning: live sports, movies, series, music, and
            bite-sized lessons that teach better money and digital habits.
          </div>
        </div>

        <!-- mPWR Earn -->
        <div class="screen-slide earn" data-app="earn">
          <div class="slide-label">mPWR Earn</div>
          <div class="slide-title">
            Rewards for on-time repayments and engagement.
          </div>
          <div class="slide-body">
            Every on-time payment, referral, and product action becomes a way to earn —
            with rewards designed to feel real, useful, and habit-forming.
          </div>
        </div>

        <!-- mPWR University -->
        <div class="screen-slide university" data-app="university">
          <div class="slide-label">mPWR University</div>
          <div class="slide-title">
            Skills training and digital literacy powered by AI.
          </div>
          <div class="slide-body">
            Short, practical modules that build skills, confidence, and earning power —
            all delivered directly on the same device customers use every day.
          </div>
        </div>
      </div>
    </div>

    <!-- App selector pills -->
    <div class="app-toggle-row">
      <button class="app-toggle active" data-app="phone" type="button">
        <span class="app-toggle-icon">
          <img src="https://thempwr.com/wp-content/uploads/2025/09/mPWR-gray-gradient-icon-150x150.png" alt="mPWR Phone" />
        </span>
        <span>Phone</span>
      </button>

      <button class="app-toggle" data-app="connect" type="button">
        <span class="app-toggle-icon">
          <img src="https://thempwr.com/wp-content/uploads/2025/08/mPWR-Connect-Icon-150x150.png" alt="mPWR Connect" />
        </span>
        <span>Connect</span>
      </button>

      <button class="app-toggle" data-app="pay" type="button">
        <span class="app-toggle-icon">
          <img src="https://thempwr.com/wp-content/uploads/2025/08/mPWR-Pay-Icon-150x150.png" alt="mPWR Pay" />
        </span>
        <span>Pay</span>
      </button>

      <button class="app-toggle" data-app="media" type="button">
        <span class="app-toggle-icon">
          <img src="https://thempwr.com/wp-content/uploads/2025/08/mPWR-Media-Icon-150x150.png" alt="mPWR Media" />
        </span>
        <span>Media</span>
      </button>

      <button class="app-toggle" data-app="earn" type="button">
        <span class="app-toggle-icon">
          <img src="https://thempwr.com/wp-content/uploads/2025/08/mPWR-Earn-Icon-150x150.png" alt="mPWR Earn" />
        </span>
        <span>Earn</span>
      </button>

      <button class="app-toggle" data-app="university" type="button">
        <span class="app-toggle-icon">
          <img src="https://thempwr.com/wp-content/uploads/2025/08/mPWR-University-Icon-150x150.png" alt="mPWR University" />
        </span>
        <span>University</span>
      </button>
    </div>
  </div>

  <script>
    (function () {
      const slides = document.querySelectorAll(".screen-slide");
      const toggles = document.querySelectorAll(".app-toggle");

      function setActive(appKey) {
        slides.forEach((slide) => {
          slide.classList.toggle("active", slide.dataset.app === appKey);
        });

        toggles.forEach((btn) => {
          btn.classList.toggle("active", btn.dataset.app === appKey);
        });
      }

      toggles.forEach((btn) => {
        btn.addEventListener("click", () => {
          const appKey = btn.dataset.app;
          if (appKey) setActive(appKey);
        });
      });

      // default
      setActive("phone");
    })();
  </script>
</body>
</html>
```

---

If you want, next step I can:

- Match this phone’s styling 1:1 to the **space/solar-rings landing page** you already have, or  
- Package this as a downloadable HTML file ready to drop into your project.

**Mike:** both

**GPT:** Perfect — I did both:

1. **Full solar-system landing page with BOTH phones**  
   - Hero phone with 6 icons and tooltips (unchanged behavior).  
   - New **“story phone”** below that takes over the whole screen per app (Phone, Connect, Pay, Media, Earn, University).  
   - All styling matches the cosmic/solar-rings look you’ve been building.

   👉 [Download full landing page (hero + story phone)](sandbox:/mnt/data/mpwr-landing-solar-story-phone.html)

2. **Standalone story phone file**  
   - Just the full-screen app-switching phone, clean and self-contained.  
   - Same look/feel as the landing page, easy to embed in other layouts or decks.

   👉 [Download standalone mPWR story phone](sandbox:/mnt/data/mpwr-story-phone-standalone.html)

Load the first one in your browser to see everything together; use the second when you just want the “screen changes from app to app” demo by itself.

**Mike:** generate a fade in / fade out animation of the mPWR logo, text and phone image on the screenshot

**GPT:** Here’s a ready-to-use HTML file that recreates that section and adds a **looping fade-in / fade-out animation** for:

- the mPWR logo row  
- the “Affordable Smartphones Smarter Access.” heading  
- the body copy  
- the phone image (your uploaded PNG)

Each element fades in, holds, then fades out in sequence, then repeats.

🔽 Download the file:

[Download `mpwr-phone-fade-hero.html`](sandbox:/mnt/data/mpwr-phone-fade-hero.html)

> ⚙️ To see the phone image:  
> Put `mpwr-phone-fade-hero.html` **in the same folder** as your image file and make sure the image is named exactly:
> `mPWR phone image .png`  
> (or adjust the `<img src="...">` path inside the HTML if you rename it).

**Mike:** place the, "mpwr-phone-fade-hero.html" on the screen of the , "mpwr-story-phone-standalone.html" image.  reduce the pixel size to fit the screen , and use the fade animation.

**GPT:** Done. I’ve merged the **fade hero** into a phone shell so it now lives **on the phone screen**, scaled to fit and still using the fade-in / fade-out animation.

You can grab it here:

👉 [Download `mpwr-story-phone-fade-screen.html`](sandbox:/mnt/data/mpwr-story-phone-fade-screen.html)

> Put this HTML file in the same folder as your image file  
> `mPWR phone image .png`  
> then open it in a browser—the phone on screen will show the animated mPWR Phone hero fading in and out.

**Mike:** repeat my instructions using mPWR media.  generate a transform effect that morphs the phone to landscape mode.   also, place the media icon at the bottom of the screen.

**GPT:** Here’s the mPWR **Media** version with everything you asked for:

- Logo, headline, body, and media screenshot **fade in / fade out** in sequence.  
- The entire phone **morphs from portrait to landscape and back** via a transform animation.  
- The **mPWR Media icon is docked at the bottom** of the phone screen.

🔽 Download the HTML:

[Download `mpwr-media-story-phone-fade-landscape.html`](sandbox:/mnt/data/mpwr-media-story-phone-fade-landscape.html)

> To see the screenshot inside the phone, put this HTML file in the same folder as your Media screenshot and name it:
> `mpwr-media-hero.png`  
> (or update the `<img src="mpwr-media-hero.png">` line in the file to match your actual filename).
