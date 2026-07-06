---
title: "Create HTML version"
date: 2025-11-15
cluster: "Coding / Dev / Infra"
messages: 14
source: chatgpt-export conversations.json (FULL transcript)
---

# Create HTML version

> 14 messages · 2025-11-15 · cluster: Coding / Dev / Infra

**Semantic neighbors:** [[Learn html book]] · [[HTML email coding tips]] · [[Render HTML with rings]] · [[HTML CSS edits request]]

## Transcript

**Mike:** Create your version of this HTML file.

**GPT:** Here’s a refined “v2” of your flywheel HTML — same concept, cleaner layout, slightly different styling, and still fully self-contained and mobile-friendly. fileciteturn0file0L1-L8  

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>mPWR Ecosystem Flywheel – v2</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
  <meta name="apple-mobile-web-app-capable" content="yes" />

  <style>
    :root {
      --bg: #020617;
      --bg-elevated: rgba(15, 23, 42, 0.9);
      --accent: #3b82f6;
      --accent-soft: rgba(59, 130, 246, 0.4);
      --accent-strong: #60a5fa;
      --text-main: #e5e7eb;
      --text-muted: #94a3b8;
      --radius-lg: 18px;
      --radius-xl: 26px;
      --shadow-soft: 0 24px 80px rgba(0, 0, 0, 0.85);
      --blur: 28px;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      -webkit-tap-highlight-color: transparent;
    }

    body {
      min-height: 100vh;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      background: radial-gradient(circle at top, #020617 0%, #020617 30%, #000000 100%);
      color: var(--text-main);
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px 12px;
    }

    .shell {
      width: 100%;
      max-width: 980px;
      margin: 0 auto;
    }

    .card {
      background: radial-gradient(circle at top left, rgba(15, 23, 42, 0.96), rgba(15, 23, 42, 0.9));
      border-radius: var(--radius-xl);
      padding: 22px 18px 20px;
      border: 1px solid rgba(148, 163, 184, 0.18);
      box-shadow: var(--shadow-soft);
      position: relative;
      overflow: hidden;
      backdrop-filter: blur(var(--blur));
    }

    .card::before {
      content: "";
      position: absolute;
      width: 260px;
      height: 260px;
      right: -80px;
      top: -80px;
      background: radial-gradient(circle, rgba(59, 130, 246, 0.35), transparent 60%);
      opacity: 0.7;
      pointer-events: none;
    }

    .card-inner {
      display: flex;
      flex-direction: column;
      gap: 18px;
    }

    @media (min-width: 768px) {
      .card {
        padding: 26px 24px 22px;
      }
      .card-inner {
        flex-direction: row;
        align-items: stretch;
        gap: 26px;
      }
      .left-rail,
      .right-rail {
        flex: 1;
      }
      .right-rail {
        max-width: 520px;
      }
    }

    /* Header / copy */

    .pill {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 4px 10px;
      border-radius: 999px;
      border: 1px solid rgba(148, 163, 184, 0.4);
      background: rgba(15, 23, 42, 0.7);
      font-size: 11px;
      color: var(--text-muted);
      margin-bottom: 10px;
    }

    .pill-dot {
      width: 6px;
      height: 6px;
      border-radius: 999px;
      background: radial-gradient(circle, var(--accent-strong), transparent);
      box-shadow: 0 0 10px rgba(96, 165, 250, 0.8);
    }

    .headline {
      font-size: clamp(22px, 3vw, 28px);
      line-height: 1.1;
      font-weight: 750;
      letter-spacing: 0.02em;
      background: linear-gradient(130deg, #f9fafb, #e5e7eb, #60a5fa);
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
      margin-bottom: 8px;
    }

    .subhead {
      font-size: 13px;
      color: var(--text-muted);
      line-height: 1.6;
      margin-bottom: 14px;
    }

    .meta-row {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-bottom: 14px;
    }

    .meta-chip {
      font-size: 11px;
      padding: 4px 8px;
      border-radius: 999px;
      background: rgba(15, 23, 42, 0.9);
      border: 1px solid rgba(148, 163, 184, 0.4);
      color: var(--text-muted);
      display: inline-flex;
      align-items: center;
      gap: 5px;
      white-space: nowrap;
    }

    .meta-dot {
      width: 4px;
      height: 4px;
      border-radius: 999px;
      background: rgba(148, 163, 184, 0.9);
    }

    .helper {
      font-size: 11px;
      color: var(--text-muted);
      border-radius: var(--radius-lg);
      border: 1px solid rgba(51, 65, 85, 0.9);
      background: radial-gradient(circle at top left, rgba(15, 23, 42, 0.98), rgba(15, 23, 42, 0.92));
      padding: 10px 11px;
      line-height: 1.5;
      margin-bottom: 12px;
    }

    .helper span {
      font-weight: 600;
      color: var(--accent-strong);
    }

    /* Active app details */

    .detail-panel {
      margin-top: 4px;
      padding: 10px 11px;
      border-radius: var(--radius-lg);
      border: 1px solid rgba(51, 65, 85, 0.9);
      background: radial-gradient(circle at top left, rgba(15, 23, 42, 0.95), rgba(15, 23, 42, 0.93));
      min-height: 64px;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .detail-title {
      font-size: 13px;
      font-weight: 650;
      color: #e5e7eb;
    }

    .detail-copy {
      font-size: 12px;
      color: var(--text-muted);
      line-height: 1.5;
    }

    .legend {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-top: 10px;
    }

    .legend-item {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 11px;
      color: var(--text-muted);
      padding: 4px 7px;
      border-radius: 999px;
      border: 1px solid rgba(51, 65, 85, 0.9);
      background: rgba(15, 23, 42, 0.93);
    }

    .legend-color {
      width: 14px;
      height: 14px;
      border-radius: 6px;
    }

    /* Controls */

    .controls {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-top: 12px;
    }

    .btn {
      border-radius: 999px;
      border: 1px solid var(--accent-soft);
      background: radial-gradient(circle at top left, rgba(37, 99, 235, 0.15), rgba(30, 64, 175, 0.3));
      color: #e5e7eb;
      font-size: 12px;
      padding: 7px 14px;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease, background 0.18s ease;
    }

    .btn-icon {
      font-size: 11px;
      opacity: 0.85;
    }

    .btn:hover {
      transform: translateY(-1px);
      box-shadow: 0 18px 45px rgba(37, 99, 235, 0.45);
      border-color: rgba(96, 165, 250, 0.9);
      background: radial-gradient(circle at top left, rgba(37, 99, 235, 0.28), rgba(15, 23, 42, 0.9));
    }

    .btn.secondary {
      border-color: rgba(148, 163, 184, 0.6);
      background: rgba(15, 23, 42, 0.8);
    }

    .btn.secondary:hover {
      box-shadow: 0 16px 40px rgba(15, 23, 42, 0.9);
    }

    /* Flywheel container */

    .flywheel-shell {
      position: relative;
      width: 100%;
      aspect-ratio: 1;
      max-width: 520px;
      margin: 0 auto;
    }

    svg {
      width: 100%;
      height: 100%;
      display: block;
    }

    .flywheel-rotation {
      animation: spin 40s linear infinite;
      transform-origin: 400px 400px;
    }

    .flywheel-rotation.paused {
      animation-play-state: paused;
    }

    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    .app-section {
      cursor: pointer;
      transition: transform 0.25s ease, filter 0.25s ease;
    }

    .app-bg {
      transition: transform 0.25s ease, filter 0.25s ease;
    }

    .app-icon {
      transition: transform 0.25s ease;
    }

    .app-section:hover .app-bg,
    .app-section.active .app-bg {
      filter: brightness(1.35) drop-shadow(0 0 18px rgba(96, 165, 250, 0.7));
      transform: scale(1.05);
    }

    .app-section:hover .app-icon,
    .app-section.active .app-icon {
      transform: scale(1.12);
    }

    .arrow {
      animation: arrowPulse 2.2s ease-in-out infinite;
      transform-origin: center;
    }

    .arrow:nth-child(2) { animation-delay: 0.25s; }
    .arrow:nth-child(3) { animation-delay: 0.5s; }
    .arrow:nth-child(4) { animation-delay: 0.75s; }
    .arrow:nth-child(5) { animation-delay: 1s; }
    .arrow:nth-child(6) { animation-delay: 1.25s; }
    .arrow:nth-child(7) { animation-delay: 1.5s; }
    .arrow:nth-child(8) { animation-delay: 1.75s; }

    @keyframes arrowPulse {
      0%, 100% { opacity: 0.45; }
      50% { opacity: 1; }
    }

    .center-hub {
      filter: drop-shadow(0 0 20px rgba(37, 99, 235, 0.7));
      animation: hubGlow 4.2s ease-in-out infinite;
    }

    @keyframes hubGlow {
      0%, 100% {
        filter: drop-shadow(0 0 14px rgba(37, 99, 235, 0.5));
      }
      50% {
        filter: drop-shadow(0 0 26px rgba(96, 165, 250, 0.85));
      }
    }

    /* Tooltip (mobile-first) */

    .tooltip {
      position: fixed;
      left: 50%;
      bottom: 18px;
      transform: translateX(-50%) translateY(20px);
      max-width: min(420px, calc(100vw - 28px));
      background: radial-gradient(circle at top left, rgba(15, 23, 42, 0.98), rgba(15, 23, 42, 0.96));
      padding: 14px 18px 14px 14px;
      border-radius: 16px;
      border: 1px solid rgba(59, 130, 246, 0.45);
      box-shadow: 0 24px 70px rgba(0, 0, 0, 0.95);
      color: var(--text-main);
      font-size: 12px;
      line-height: 1.6;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.23s ease, transform 0.23s ease;
      z-index: 50;
    }

    .tooltip.show {
      opacity: 1;
      pointer-events: auto;
      transform: translateX(-50%) translateY(0);
    }

    .tooltip-title {
      font-size: 13px;
      font-weight: 650;
      margin-bottom: 4px;
      color: var(--accent-strong);
    }

    .tooltip-close {
      position: absolute;
      top: 7px;
      right: 8px;
      width: 24px;
      height: 24px;
      border-radius: 999px;
      border: 1px solid rgba(148, 163, 184, 0.5);
      background: rgba(15, 23, 42, 0.9);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 15px;
      color: #e5e7eb;
      cursor: pointer;
    }

    .tooltip-body {
      color: var(--text-muted);
    }
  </style>
</head>
<body>
  <!-- Tooltip (for mobile / focused detail) -->
  <div class="tooltip" id="tooltip">
    <button class="tooltip-close" id="tooltipClose" aria-label="Close tooltip">×</button>
    <div class="tooltip-title" id="tooltipTitle"></div>
    <div class="tooltip-body" id="tooltipBody"></div>
  </div>

  <div class="shell">
    <div class="card">
      <div class="card-inner">
        <!-- LEFT RAIL: Text & status -->
        <div class="left-rail">
          <div class="pill">
            <span class="pill-dot"></span>
            Interactive Ecosystem Flywheel
          </div>

          <h1 class="headline">mPWR Ecosystem</h1>
          <p class="subhead">
            A device-led distribution engine that stacks connectivity, financial services, content,
            and education into a single repeatable flywheel.
          </p>

          <div class="meta-row">
            <span class="meta-chip">
              <span class="meta-dot"></span> Tap any node to drill in
            </span>
            <span class="meta-chip">
              <span class="meta-dot"></span> Auto-rotation on by default
            </span>
          </div>

          <div class="helper">
            <span>How to read this:</span> The wheel shows how a single affordable device unlocks
            usage across the entire mPWR stack — from phone and connectivity to payments, media,
            rewards, and skills.
          </div>

          <div class="detail-panel" id="detailPanel">
            <div class="detail-title" id="detailTitle">Start with the device.</div>
            <div class="detail-copy" id="detailCopy">
              Select any product ring in the flywheel to see how it contributes to acquisition,
              revenue, and retention inside the mPWR model.
            </div>
          </div>

          <div class="legend">
            <div class="legend-item">
              <span class="legend-color" style="background: linear-gradient(135deg,#00D9D9,#00B4B4);"></span>
              <span>Device & Connectivity</span>
            </div>
            <div class="legend-item">
              <span class="legend-color" style="background: linear-gradient(135deg,#FF5757,#E63939);"></span>
              <span>Payments & Media</span>
            </div>
            <div class="legend-item">
              <span class="legend-color" style="background: linear-gradient(135deg,#7ED957,#5BB43A);"></span>
              <span>Cashflow & Liquidity</span>
            </div>
            <div class="legend-item">
              <span class="legend-color" style="background: linear-gradient(135deg,#9D5BD2,#7E3FB8);"></span>
              <span>Education & Uplift</span>
            </div>
            <div class="legend-item">
              <span class="legend-color" style="background: linear-gradient(135deg,#CCCCCC,#999999);"></span>
              <span>Rewards & Loyalty</span>
            </div>
          </div>

          <div class="controls">
            <button class="btn" id="toggleRotationBtn" type="button">
              <span class="btn-icon">⏸</span>
              <span>Pause rotation</span>
            </button>
            <button class="btn secondary" id="resetViewBtn" type="button">
              <span class="btn-icon">⟳</span>
              <span>Clear selection</span>
            </button>
          </div>
        </div>

        <!-- RIGHT RAIL: Flywheel -->
        <div class="right-rail">
          <div class="flywheel-shell">
            <svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg" aria-labelledby="title desc" role="img">
              <title id="title">mPWR Ecosystem Flywheel</title>
              <desc id="desc">
                Rotating circular diagram showing how mPWR Phone, Connect, Pay, Cash, Earn, Token,
                Media, and University feed into one central hub.
              </desc>

              <defs>
                <linearGradient id="gradCyan" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#00D9D9" />
                  <stop offset="100%" stop-color="#00B4B4" />
                </linearGradient>
                <linearGradient id="gradGreen" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#7ED957" />
                  <stop offset="100%" stop-color="#5BB43A" />
                </linearGradient>
                <linearGradient id="gradRed" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#FF5757" />
                  <stop offset="100%" stop-color="#E63939" />
                </linearGradient>
                <linearGradient id="gradOrange" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#FFA500" />
                  <stop offset="100%" stop-color="#FF8C00" />
                </linearGradient>
                <linearGradient id="gradPurple" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#9D5BD2" />
                  <stop offset="100%" stop-color="#7E3FB8" />
                </linearGradient>
                <linearGradient id="gradGray" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#CCCCCC" />
                  <stop offset="100%" stop-color="#999999" />
                </linearGradient>
                <linearGradient id="gradWhite" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#ffffff" />
                  <stop offset="100%" stop-color="#cbd5e1" />
                </linearGradient>

                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <!-- Rotating ring -->
              <g class="flywheel-rotation" id="flywheel">
                <!-- Flow arrows -->
                <g class="arrows" fill="#1d4ed8">
                  <path class="arrow" d="M 480 130 L 530 110 L 520 140" opacity="0.5" />
                  <path class="arrow" d="M 620 250 L 650 280 L 625 270" opacity="0.5" />
                  <path class="arrow" d="M 620 450 L 650 480 L 625 470" opacity="0.5" />
                  <path class="arrow" d="M 500 620 L 480 660 L 510 650" opacity="0.5" />
                  <path class="arrow" d="M 320 640 L 280 660 L 300 630" opacity="0.5" />
                  <path class="arrow" d="M 180 500 L 150 480 L 175 490" opacity="0.5" />
                  <path class="arrow" d="M 180 280 L 150 250 L 175 260" opacity="0.5" />
                  <path class="arrow" d="M 300 150 L 320 110 L 310 140" opacity="0.5" />
                </g>

                <!-- Outer rings -->
                <circle cx="400" cy="400" r="280" fill="none" stroke="#1e293b" stroke-width="3" opacity="0.6" />
                <circle cx="400" cy="400" r="290" fill="none" stroke="#0f172a" stroke-width="1" opacity="0.9" />

                <!-- App nodes -->
                <g transform="rotate(0 400 400)">
                  <!-- mPWR Phone -->
                  <g class="app-section" data-app="phone">
                    <circle class="app-bg" cx="400" cy="120" r="45" fill="url(#gradCyan)" filter="url(#glow)" />
                    <g class="app-icon" transform="translate(385, 105)">
                      <rect x="6" y="2" width="18" height="18" rx="5" fill="#0f172a" opacity="0.25" />
                      <rect x="8" y="4" width="14" height="14" rx="4" fill="#e5e7eb" />
                      <circle cx="15" cy="16.5" r="1.4" fill="#0f172a" />
                    </g>
                    <text x="400" y="82" text-anchor="middle" fill="#e5e7eb"
                          font-size="14" font-weight="700">
                      mPWR Phone
                    </text>
                  </g>

                  <!-- mPWR Connect -->
                  <g class="app-section" data-app="connect" transform="rotate(45 400 400)">
                    <circle class="app-bg" cx="400" cy="120" r="45" fill="url(#gradGreen)" filter="url(#glow)" />
                    <g class="app-icon" transform="translate(385, 105) rotate(-45 15 10)">
                      <circle cx="15" cy="10" r="7.5" fill="#e5e7eb" />
                      <path d="M10 10a5 5 0 0 1 10 0" fill="none" stroke="#0f172a" stroke-width="1.3" />
                      <path d="M12 10a3 3 0 0 1 6 0" fill="none" stroke="#0f172a" stroke-width="1.2" />
                    </g>
                    <text x="400" y="82" text-anchor="middle" fill="#e5e7eb"
                          font-size="13" font-weight="700" transform="rotate(-45 400 82)">
                      mPWR Connect
                    </text>
                  </g>

                  <!-- mPWR Pay -->
                  <g class="app-section" data-app="pay" transform="rotate(90 400 400)">
                    <circle class="app-bg" cx="400" cy="120" r="45" fill="url(#gradRed)" filter="url(#glow)" />
                    <g class="app-icon" transform="translate(385, 105) rotate(-90 15 10)">
                      <rect x="7" y="5" width="16" height="11" rx="3" fill="#e5e7eb" />
                      <rect x="9" y="7" width="5" height="2" rx="1" fill="#0f172a" opacity="0.7" />
                      <circle cx="19" cy="11" r="2.6" fill="#0f172a" />
                    </g>
                    <text x="400" y="82" text-anchor="middle" fill="#e5e7eb"
                          font-size="14" font-weight="700" transform="rotate(-90 400 82)">
                      mPWR Pay
                    </text>
                  </g>

                  <!-- mPWR Cash -->
                  <g class="app-section" data-app="cash" transform="rotate(135 400 400)">
                    <circle class="app-bg" cx="400" cy="120" r="45" fill="url(#gradGreen)" filter="url(#glow)" />
                    <g class="app-icon" transform="translate(385, 105) rotate(-135 15 10)">
                      <rect x="7" y="4" width="16" height="12" rx="2.5" fill="#e5e7eb" />
                      <text x="15" y="12" text-anchor="middle" font-size="8" fill="#0f172a" font-weight="700">
                        $
                      </text>
                    </g>
                    <text x="400" y="82" text-anchor="middle" fill="#e5e7eb"
                          font-size="13" font-weight="700" transform="rotate(-135 400 82)">
                      mPWR Cash
                    </text>
                  </g>

                  <!-- mPWR Earn -->
                  <g class="app-section" data-app="earn" transform="rotate(180 400 400)">
                    <circle class="app-bg" cx="400" cy="120" r="45" fill="url(#gradGray)" filter="url(#glow)" />
                    <g class="app-icon" transform="translate(385, 105) rotate(-180 15 10)">
                      <circle cx="15" cy="10" r="7" fill="#e5e7eb" />
                      <path d="M10 13l2.4-3 1.8 2 3.2-4 2.6 5" fill="none" stroke="#16a34a"
                            stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <text x="400" y="82" text-anchor="middle" fill="#e5e7eb"
                          font-size="13" font-weight="700" transform="rotate(-180 400 82)">
                      mPWR Earn
                    </text>
                  </g>

                  <!-- mPWR Token -->
                  <g class="app-section" data-app="token" transform="rotate(225 400 400)">
                    <circle class="app-bg" cx="400" cy="120" r="45" fill="url(#gradGray)" filter="url(#glow)" />
                    <g class="app-icon" transform="translate(385, 105) rotate(-225 15 10)">
                      <circle cx="15" cy="10" r="7.2" fill="#e5e7eb" />
                      <path d="M12 7h6M12 10h6M12 13h6" stroke="#0f172a" stroke-width="1.2"
                            stroke-linecap="round" />
                    </g>
                    <text x="400" y="82" text-anchor="middle" fill="#e5e7eb"
                          font-size="13" font-weight="700" transform="rotate(-225 400 82)">
                      mPWR Token
                    </text>
                  </g>

                  <!-- mPWR Media -->
                  <g class="app-section" data-app="media" transform="rotate(270 400 400)">
                    <circle class="app-bg" cx="400" cy="120" r="45" fill="url(#gradRed)" filter="url(#glow)" />
                    <g class="app-icon" transform="translate(385, 105) rotate(-270 15 10)">
                      <rect x="7" y="4" width="16" height="12" rx="2.5" fill="#e5e7eb" />
                      <polygon points="13,8 18,10 13,12" fill="#0f172a" />
                    </g>
                    <text x="400" y="82" text-anchor="middle" fill="#e5e7eb"
                          font-size="13" font-weight="700" transform="rotate(-270 400 82)">
                      mPWR Media
                    </text>
                  </g>

                  <!-- mPWR University -->
                  <g class="app-section" data-app="university" transform="rotate(315 400 400)">
                    <circle class="app-bg" cx="400" cy="120" r="45" fill="url(#gradPurple)" filter="url(#glow)" />
                    <g class="app-icon" transform="translate(385, 105) rotate(-315 15 10)">
                      <polygon points="15,4 7,8 15,12 23,8" fill="#e5e7eb" />
                      <rect x="9" y="11" width="12" height="5.5" rx="1.4" fill="#e5e7eb" />
                    </g>
                    <text x="400" y="82" text-anchor="middle" fill="#e5e7eb"
                          font-size="11" font-weight="700" transform="rotate(-315 400 82)">
                      mPWR University
                    </text>
                  </g>
                </g>
              </g>

              <!-- Center hub (non-rotating) -->
              <g class="center-hub">
                <circle cx="400" cy="400" r="122"
                        fill="#020617"
                        stroke="#1d4ed8"
                        stroke-width="2.4" />
                <circle cx="400" cy="400" r="88"
                        fill="url(#gradWhite)"
                        opacity="0.03" />

                <text x="400" y="360" text-anchor="middle"
                      fill="#60a5fa" font-size="14" font-weight="700">
                  Device-led acquisition
                </text>
                <text x="400" y="382" text-anchor="middle"
                      fill="#e5e7eb" font-size="13" font-weight="600">
                  Ecosystem engagement
                </text>
                <text x="400" y="404" text-anchor="middle"
                      fill="#e5e7eb" font-size="12">
                  Stacked revenue layers
                </text>
                <text x="400" y="426" text-anchor="middle"
                      fill="#60a5fa" font-size="13" font-weight="700">
                  Rewards, education & retention
                </text>
                <text x="400" y="446" text-anchor="middle"
                      fill="#94a3b8" font-size="11">
                  The stronger each ring turns, the faster the flywheel spins.
                </text>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>

  <script>
    const appData = {
      phone: {
        title: "mPWR Phone",
        description:
          "Affordable smartphone leasing (e.g., ~$99 device, 18-month installments) bundled with device protection and the full mPWR app stack pre-installed. This is the entry point for most customers."
      },
      connect: {
        title: "mPWR Connect",
        description:
          "Local data and voice connectivity, wrapped into the same 18-month plan. Optional international roaming and top-ups keep users active on-net, driving daily engagement on the device."
      },
      pay: {
        title: "mPWR Pay",
        description:
          "A digital wallet and account layer for deposits, P2P transfers, remittances, and everyday payments. This is where transaction velocity and financial behavior start to show up in the ecosystem."
      },
      cash: {
        title: "mPWR Cash",
        description:
          "Short-tenor micro-loans (for example ~$120 over ~12 weeks) to smooth income gaps, fund purchases, and build credit behavior. Underwritten on real device and payment data, not just static credit files."
      },
      earn: {
        title: "mPWR Earn",
        description:
          "Gamified rewards that pay users for doing the right things: on-time repayments, consistent usage, completing surveys, consuming educational content, and engaging with partner offers."
      },
      token: {
        title: "mPWR Token",
        description:
          "A utility and loyalty layer used to denominate rewards, power in-app perks, and create portable value across services. Unlocks referral loops and partner incentive mechanics over time."
      },
      media: {
        title: "mPWR Media",
        description:
          "Streaming video, live TV, music, radio, and financial education channels. Content builds daily habits, keeps mPWR top-of-screen, and creates subscription and advertising revenue slices."
      },
      university: {
        title: "mPWR University",
        description:
          "AI-supported financial literacy and skills training delivered through the device. Better financial decisions and employability lead to higher earnings, lower default risk, and deeper ecosystem usage."
      }
    };

    const flywheel = document.getElementById("flywheel");
    const toggleRotationBtn = document.getElementById("toggleRotationBtn");
    const resetViewBtn = document.getElementById("resetViewBtn");
    const appSections = document.querySelectorAll(".app-section");

    const detailTitle = document.getElementById("detailTitle");
    const detailCopy = document.getElementById("detailCopy");

    const tooltip = document.getElementById("tooltip");
    const tooltipTitle = document.getElementById("tooltipTitle");
    const tooltipBody = document.getElementById("tooltipBody");
    const tooltipClose = document.getElementById("tooltipClose");

    let rotationPaused = false;
    let currentActive = null;

    function setActiveSection(section) {
      const appKey = section.getAttribute("data-app");
      const data = appData[appKey];
      if (!data) return;

      if (currentActive && currentActive !== section) {
        currentActive.classList.remove("active");
      }

      section.classList.add("active");
      currentActive = section;

      // Update side-panel
      detailTitle.textContent = data.title;
      detailCopy.textContent = data.description;

      // Update tooltip for mobile / focused view
      tooltipTitle.textContent = data.title;
      tooltipBody.textContent = data.description;
      tooltip.classList.add("show");

      // Pause rotation while focused
      if (!rotationPaused) {
        toggleRotation(true);
      }
    }

    function clearActiveSection() {
      if (currentActive) {
        currentActive.classList.remove("active");
        currentActive = null;
      }
      tooltip.classList.remove("show");
      detailTitle.textContent = "Start with the device.";
      detailCopy.textContent =
        "Select any product ring in the flywheel to see how it contributes to acquisition, revenue, and retention inside the mPWR model.";

      if (rotationPaused) {
        toggleRotation(false);
      }
    }

    function toggleRotation(forcePause) {
      const shouldPause = typeof forcePause === "boolean" ? forcePause : !rotationPaused;

      rotationPaused = shouldPause;

      if (shouldPause) {
        flywheel.classList.add("paused");
        toggleRotationBtn.querySelector(".btn-icon").textContent = "▶";
        toggleRotationBtn.querySelector("span:last-child").textContent = "Resume rotation";
      } else {
        flywheel.classList.remove("paused");
        toggleRotationBtn.querySelector(".btn-icon").textContent = "⏸";
        toggleRotationBtn.querySelector("span:last-child").textContent = "Pause rotation";
      }
    }

    toggleRotationBtn.addEventListener("click", () => toggleRotation());
    resetViewBtn.addEventListener("click", clearActiveSection);

    appSections.forEach((section) => {
      section.addEventListener("click", (e) => {
        e.stopPropagation();
        setActiveSection(section);
      });

      section.addEventListener(
        "touchstart",
        (e) => {
          e.stopPropagation();
          setActiveSection(section);
        },
        { passive: true }
      );
    });

    tooltipClose.addEventListener("click", (e) => {
      e.stopPropagation();
      tooltip.classList.remove("show");
      if (!currentActive) {
        toggleRotation(false);
      }
    });

    document.addEventListener("click", (e) => {
      if (!tooltip.contains(e.target)) {
        tooltip.classList.remove("show");
      }
    });

    // Optional: start with phone highlighted for quick orientation
    const initial = document.querySelector('.app-section[data-app="phone"]');
    if (initial) {
      setTimeout(() => {
        setActiveSection(initial);
      }, 700);
    }
  </script>
</body>
</html>
```

**Mike:** Provide a downloadable HTML file.

**GPT:** Here you go — here’s the downloadable HTML file of my version:

[Download the mPWR Flywheel HTML](sandbox:/mnt/data/mpwr_flywheel_compact_v2.html)

You can open it directly in Chrome (or any browser), or drop it into VS Code / Lovable if you want to tweak the copy or styling.

**Mike:** Create a version that has the app icons orbiting the sun like the solar system. The mPWR logo is the sun. Make it as interactive as possible and mobile friendly.

**GPT:** Here’s your new solar-system version with the mPWR logo as the sun and the app icons orbiting like planets:

[Download the mPWR Orbit Flywheel – Solar System HTML](sandbox:/mnt/data/mpwr_orbit_flywheel_solar_system.html)

- The sun (center) is the mPWR core device relationship.
- Each product (Phone, Connect, Pay, Media, Earn, University) is a “planet” on its own orbit.
- Tap/click a planet to:
  - Pause the orbits
  - Highlight that orbit
  - Show detailed copy in the left panel and in a mobile-friendly tooltip.
- Tap the sun or hit **Reset view** to go back to the high-level explanation.
- **Pause all orbits** toggles the animations on/off.

You can open this file directly in a browser or drop it into VS Code / Lovable if you want to tweak the copy, colors, or add the actual mPWR logo image in place of the text sun.
