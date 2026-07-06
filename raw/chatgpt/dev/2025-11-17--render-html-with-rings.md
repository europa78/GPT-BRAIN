---
title: "Render HTML with rings"
date: 2025-11-17
cluster: "Coding / Dev / Infra"
messages: 4
source: chatgpt-export conversations.json (FULL transcript)
---

# Render HTML with rings

> 4 messages · 2025-11-17 · cluster: Coding / Dev / Infra

**Semantic neighbors:** [[HTML email coding tips]] · [[Create HTML version]] · [[HTML CSS edits request]] · [[Render HTML file]]

## Transcript

**Mike:** render the following HTML :  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>iPhone Energy Rings</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background: radial-gradient(circle at 50% 0%, #101632, #050716, #000000);
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      overflow: hidden;
    }

    /* Centered scene */
    .scene {
      position: relative;
      width: 420px;
      height: 840px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    /* iPhone image */
    .phone {
      position: relative;
      width: 320px;
      z-index: 5;
      filter: drop-shadow(0 30px 60px rgba(0, 0, 0, 0.7));
    }

    .phone img {
      width: 100%;
      height: auto;
      display: block;
      border-radius: 32px;
    }

    /* Energy rings */
    .energy-ring {
      position: absolute;
      top: 50%;
      left: 50%;
      border-radius: 50%;
      border: 3px solid;
      transform: translate(-50%, -50%);
      pointer-events: none;
      animation: neonRingPulse 6s ease-in-out infinite;
      filter: blur(0);
    }

    .energy-ring:nth-child(1) {
      width: 360px;
      height: 360px;
      border-color: #2fdcff;
      animation-delay: 0s;
      opacity: 0.9;
    }

    .energy-ring:nth-child(2) {
      width: 420px;
      height: 420px;
      border-color: #7a5cff;
      animation-delay: 0.25s;
      opacity: 0.8;
    }

    .energy-ring:nth-child(3) {
      width: 480px;
      height: 480px;
      border-color: #43e97b;
      animation-delay: 0.5s;
      opacity: 0.7;
    }

    .energy-ring:nth-child(4) {
      width: 540px;
      height: 540px;
      border-color: #ffff66;
      animation-delay: 0.75s;
      opacity: 0.6;
    }

    /* Neon pulse animation */
    @keyframes neonRingPulse {
      0% {
        transform: translate(-50%, -50%) scale(0.7);
        opacity: 0;
        filter: blur(10px);
      }
      20% {
        transform: translate(-50%, -50%) scale(1);
        opacity: 0.9;
        filter: blur(2px);
      }
      45% {
        transform: translate(-50%, -50%) scale(1.25);
        opacity: 1;
        filter: blur(4px);
      }
      70% {
        transform: translate(-50%, -50%) scale(1.6);
        opacity: 0.2;
        filter: blur(8px);
      }
      100% {
        transform: translate(-50%, -50%) scale(1.9);
        opacity: 0;
        filter: blur(12px);
      }
    }
  </style>
</head>
<body>
  <div class="scene">
    <!-- energy rings (they sit behind the phone) -->
    <div class="energy-ring"></div>
    <div class="energy-ring"></div>
    <div class="energy-ring"></div>
    <div class="energy-ring"></div>

    <!-- phone image -->
    <div class="phone">
      <!-- Replace src with your actual phone image -->
      <img src="YOUR_IPHONE_IMAGE.png" alt="mPWR iPhone" />
    </div>
  </div>
</body>
</html>

**GPT:** Got it — your HTML is now set up in a live preview.

To see it fully rendered with the glowing, pulsing energy rings:

1. Replace `YOUR_IPHONE_IMAGE.png` in the `<img>` tag with the actual path or URL to your phone image, for example:
   ```html
   <img src="iphone-mpwr.png" alt="mPWR iPhone" />
   ```
2. Save the code as `energy-rings.html`.
3. Open that file in Chrome (or any modern browser).

You’ll get the animated neon rings expanding behind the phone, centered on the page. If you want, I can next:
- Swap in a specific image URL for you, or  
- Add click/hover effects or mPWR branding around the scene.
