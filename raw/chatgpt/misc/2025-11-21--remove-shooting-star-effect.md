---
title: "Remove shooting star effect"
date: 2025-11-21
cluster: "Misc / Uncategorized"
messages: 8
source: chatgpt-export conversations.json (FULL transcript)
---

# Remove shooting star effect

> 8 messages · 2025-11-21 · cluster: Misc / Uncategorized

**Semantic neighbors:** [[Custom intent topics ZoomInfo]] · [[Message explanation]] · [[Nonfiction 2025 deep dive]] · [[Convert data to CSV]]

## Transcript

**Mike:** make one revision in the following HTML and CSS code :  remove the "shooting star" effect.   //from pathlib import Path

# 1) Full landing page with hero phone + story phone, styled like solar-space version
landing_html = """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>mPWR · Device-led digital inclusion</title>
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
      background: radial-gradient(circle at top, #020617, #020617 55%, #000000 100%);
      color: var(--mpwr-text);
      overflow-x: hidden;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    img {
      max-width: 100%;
      display: block;
    }

    /* Cosmic background layer */
    .space-scene {
      position: fixed;
      inset: 0;
      overflow: hidden;
      z-index: 0;
      pointer-events: none;
      background:
        radial-gradient(circle at 15% 10%, rgba(56, 189, 248, 0.18), transparent 55%),
        radial-gradient(circle at 80% 80%, rgba(129, 140, 248, 0.18), transparent 55%);
      mix-blend-mode: screen;
    }

    .star-field {
      position: absolute;
      inset: -10%;
      background-image:
        radial-gradient(circle, rgba(248, 250, 252, 0.9) 1px, transparent 0),
        radial-gradient(circle, rgba(148, 163, 184, 0.7) 1px, transparent 0);
      background-size: 140px 140px, 220px 220px;
      background-position: 0 0, 70px 70px;
      opacity: 0.28;
      animation: starDrift 80s linear infinite;
    }

    .star-field.layer-2 {
      background-size: 90px 90px, 180px 180px;
      background-position: 40px 20px, 120px 90px;
      opacity: 0.4;
      animation-duration: 130s;
      animation-direction: reverse;
      filter: blur(0.3px);
    }

    .orbit {
      position: absolute;
      top: 50%;
      left: 50%;
      border-radius: 50%;
      border: 1px dashed rgba(148, 163, 184, 0.35);
      transform-origin: center;
      animation: orbitRotate 70s linear infinite;
      opacity: 0.45;
    }

    .orbit-1 { width: 360px; height: 360px; }
    .orbit-2 { width: 520px; height: 520px; animation-duration: 100s; }
    .orbit-3 { width: 680px; height: 680px; animation-duration: 145s; animation-direction: reverse; }

    .planet {
      position: absolute;
      top: -14px;
      left: 50%;
      transform: translateX(-50%);
      border-radius: 50%;
      box-shadow:
        0 0 22px rgba(59, 130, 246, 0.9),
        0 0 60px rgba(12, 148, 136, 0.7);
    }

    .planet-1 {
      width: 24px;
      height: 24px;
      background:
        radial-gradient(circle at 30% 25%, #f9fafb, #60a5fa 45%, #1d4ed8 70%, #020617 100%);
    }

    .planet-2 {
      width: 30px;
      height: 30px;
      background:
        radial-gradient(circle at 25% 20%, #fef9c3, #fb7185 40%, #7c3aed 70%, #020617 100%);
      box-shadow:
        0 0 26px rgba(251, 113, 133, 0.9),
        0 0 70px rgba(129, 140, 248, 0.8);
    }

    .planet-3 {
      width: 34px;
      height: 34px;
      background:
        radial-gradient(circle at 30% 15%, #fef3c7, #f97316 40%, #b45309 70%, #111827 100%);
      box-shadow:
        0 0 26px rgba(251, 146, 60, 0.9),
        0 0 70px rgba(251, 191, 36, 0.7);
    }

    .planet-3::after {
      content: "";
      position: absolute;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: radial-gradient(circle at 30% 20%, #e5e7eb, #6b7280);
      top: -18px;
      right: -8px;
      box-shadow: 0 0 10px rgba(229, 231, 235, 0.9);
    }

    .asteroid-belt {
      position: absolute;
      top: 55%;
      left: 50%;
      width: 900px;
      height: 320px;
      transform: translate(-50%, -50%) rotate(-18deg);
      border-radius: 50%;
      background-image:
        radial-gradient(circle at 15% 30%, rgba(148, 163, 184, 0.45) 0, transparent 60%),
        radial-gradient(circle at 45% 65%, rgba(148, 163, 184, 0.4) 0, transparent 60%),
        radial-gradient(circle at 80% 40%, rgba(148, 163, 184, 0.35) 0, transparent 60%);
      filter: blur(3px);
      opacity: 0.32;
      animation: beltDrift 90s linear infinite;
      mix-blend-mode: screen;
    }

    .shooting-star {
      position: absolute;
      width: 190px;
      height: 2px;
      background: linear-gradient(90deg, rgba(248, 250, 252, 0.95), rgba(148, 163, 184, 0.1), transparent);
      opacity: 0;
      filter: drop-shadow(0 0 14px rgba(248, 250, 252, 0.9));
      animation: shoot 9s linear infinite;
    }

    .shooting-star::after {
      content: "";
      position: absolute;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      right: 0;
      top: -2px;
      background: #e5e7eb;
      box-shadow: 0 0 14px rgba(248, 250, 252, 0.95);
    }

    .shooting-star-1 { top: 18%; left: -25%; animation-delay: 2.3s; }
    .shooting-star-2 { top: 68%; left: -30%; animation-delay: 5.7s; animation-duration: 12s; }

    @keyframes starDrift {
      0% { transform: translate3d(0, 0, 0); }
      100% { transform: translate3d(-220px, -260px, 0); }
    }

    @keyframes orbitRotate {
      0% { transform: translate(-50%, -50%) rotate(0deg); }
      100% { transform: translate(-50%, -50%) rotate(360deg); }
    }

    @keyframes beltDrift {
      0% { transform: translate(-50%, -50%) rotate(-18deg); }
      100% { transform: translate(-50%, -50%) rotate(-378deg); }
    }

    @keyframes shoot {
      0% {
        opacity: 0;
        transform: translate3d(0, 0, 0) rotate(14deg);
      }
      6% { opacity: 1; }
      30% {
        opacity: 0.9;
        transform: translate3d(135vw, 40vh, 0) rotate(14deg);
      }
      100% {
        opacity: 0;
        transform: translate3d(160vw, 60vh, 0) rotate(14deg);
      }
    }

    .page-wrap {
      max-width: 1120px;
      margin: 0 auto;
      padding: 24px 20px 72px;
      position: relative;
      z-index: 2;
    }

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 18px;
      padding: 10px 18px 10px;
      border-radius: 20px;
      border: 1px solid rgba(148, 163, 184, 0.3);
      backdrop-filter: blur(10px);
      background: radial-gradient(circle at top, rgba(15, 23, 42, 0.96), rgba(15, 23, 42, 0.92));
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

    .primary-cta span:last-child {
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
      padding-top: 28px;
      display: flex;
      flex-direction: column;
      gap: 72px;
    }

    /* Neon energy rings around hero phone */
    .energy-ring {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      border: 2px solid;
      opacity: 0;
      pointer-events: none;
      animation: neonRingPulse 12s ease-in-out infinite;
    }

    .energy-ring.r1 { width: 360px; height: 360px; border-color: #00ffff; animation-delay: 0s; }
    .energy-ring.r2 { width: 420px; height: 420px; border-color: #ff00ff; animation-delay: 0.4s; }
    .energy-ring.r3 { width: 480px; height: 480px; border-color: #00ff7f; animation-delay: 0.8s; }

    @keyframes neonRingPulse {
      0%, 15% {
        opacity: 0;
        transform: translate(-50%, -50%) scale(0.6);
        filter: blur(0px);
      }
      30% {
        opacity: 0.8;
        transform: translate(-50%, -50%) scale(1);
        filter: blur(2px);
      }
      45% {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1.25);
        filter: blur(4px);
      }
      65% {
        opacity: 0.3;
        transform: translate(-50%, -50%) scale(1.6);
        filter: blur(6px);
      }
      100% {
        opacity: 0;
        transform: translate(-50%, -50%) scale(2.1);
        filter: blur(10px);
      }
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

    .hero-title .accent {
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
      z-index: 2;
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

    .readout-label { opacity: 0.8; }
    .readout-value { font-weight: 600; color: #e5e7ff; }

    /* Apps overview section */
    .section {
      display: grid;
      gap: 18px;
    }

    .section-header {
      display: flex;
      flex-direction: column;
      gap: 6px;
      max-width: 40rem;
      background: radial-gradient(circle at top, rgba(15, 23, 42, 0.96), rgba(15, 23, 42, 0.92));
      border-radius: 20px;
      padding: 16px 18px 18px;
      border: 1px solid rgba(148, 163, 184, 0.4);
      box-shadow: 0 16px 40px rgba(15, 23, 42, 0.9);
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

    /* Story phone section */
    .phone-showcase-section {
      margin-top: 52px;
      display: grid;
      grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
      gap: 40px;
      align-items: center;
    }

    .phone-showcase-copy {
      display: flex;
      flex-direction: column;
      gap: 14px;
      max-width: 32rem;
    }

    .phone-showcase-eyebrow {
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 0.22em;
      color: var(--mpwr-muted);
    }

    .phone-showcase-title {
      font-size: 22px;
      letter-spacing: 0.03em;
    }

    .phone-showcase-body {
      font-size: 14px;
      color: var(--mpwr-muted);
      line-height: 1.6;
    }

    .phone-showcase-phone {
      display: flex;
      justify-content: center;
    }

    .phone-demo--story {
      padding: 10px 10px 6px;
      gap: 12px;
    }

    .iphone--story {
      background: radial-gradient(circle at 15% 0%, #1f2937, #020617 65%);
    }

    .screen--story {
      background: radial-gradient(circle at 20% 0%, #020617, #020617 80%);
    }

    .screen-stage {
      position: absolute;
      inset: 22px 18px 32px 18px;
      border-radius: 28px;
      padding: 18px 18px 20px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      gap: 10px;
      color: #e5e7eb;
      overflow: hidden;
      box-shadow: 0 18px 40px rgba(15, 23, 42, 0.9);
      opacity: 0;
      transform: translateY(8px) scale(0.98);
      transition: opacity 0.35s ease-out, transform 0.35s ease-out;
    }

    .screen-stage::before {
      content: "";
      position: absolute;
      inset: -25%;
      opacity: 0.7;
      mix-blend-mode: screen;
    }

    .screen-stage.active {
      opacity: 1;
      transform: translateY(0) scale(1);
    }

    .screen-stage-label {
      font-size: 11px;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: rgba(226, 232, 240, 0.9);
      opacity: 0.9;
    }

    .screen-stage-title {
      font-size: 18px;
      font-weight: 600;
      max-width: 17rem;
    }

    .screen-stage-body {
      font-size: 13px;
      opacity: 0.95;
      max-width: 19rem;
    }

    .screen-stage--phone {
      background:
        radial-gradient(circle at 15% 0%, #22c55e, transparent 60%),
        radial-gradient(circle at 80% 120%, #0ea5e9, #020617 70%);
    }

    .screen-stage--phone::before {
      background:
        radial-gradient(circle at 20% 0%, rgba(226, 232, 240, 0.4), transparent 60%),
        radial-gradient(circle at 80% 40%, rgba(34, 211, 238, 0.45), transparent 65%);
    }

    .screen-stage--connect {
      background:
        radial-gradient(circle at 10% 0%, #38bdf8, transparent 55%),
        radial-gradient(circle at 80% 110%, #1e3a8a, #020617 70%);
    }

    .screen-stage--connect::before {
      background:
        radial-gradient(circle at 15% 15%, rgba(248, 250, 252, 0.5), transparent 55%),
        conic-gradient(from 120deg at 50% 50%, rgba(96, 165, 250, 0.8), rgba(56, 189, 248, 0.2), transparent 70%);
    }

    .screen-stage--pay {
      background:
        radial-gradient(circle at 12% 0%, #facc15, transparent 55%),
        radial-gradient(circle at 90% 110%, #f97316, #020617 70%);
    }

    .screen-stage--pay::before {
      background:
        radial-gradient(circle at 0% 40%, rgba(253, 224, 71, 0.5), transparent 60%),
        radial-gradient(circle at 100% 60%, rgba(251, 146, 60, 0.6), transparent 65%);
    }

    .screen-stage--media {
      background:
        radial-gradient(circle at 15% 0%, #a855f7, transparent 55%),
        radial-gradient(circle at 90% 110%, #ec4899, #020617 70%);
    }

    .screen-stage--media::before {
      background:
        radial-gradient(circle at 20% 10%, rgba(244, 244, 245, 0.45), transparent 60%),
        conic-gradient(from 160deg at 50% 110%, rgba(251, 113, 133, 0.7), rgba(129, 140, 248, 0.2), transparent 60%);
    }

    .screen-stage--earn {
      background:
        radial-gradient(circle at 18% 0%, #22c55e, transparent 55%),
        radial-gradient(circle at 90% 110%, #16a34a, #020617 70%);
    }

    .screen-stage--earn::before {
      background:
        radial-gradient(circle at 10% 20%, rgba(190, 242, 100, 0.5), transparent 55%),
        radial-gradient(circle at 85% 70%, rgba(52, 211, 153, 0.5), transparent 65%);
    }

    .screen-stage--university {
      background:
        radial-gradient(circle at 16% 0%, #38bdf8, transparent 55%),
        radial-gradient(circle at 90% 120%, #1d4ed8, #020617 70%);
    }

    .screen-stage--university::before {
      background:
        radial-gradient(circle at 20% 10%, rgba(248, 250, 252, 0.5), transparent 60%),
        conic-gradient(from 200deg at 40% 120%, rgba(59, 130, 246, 0.8), rgba(56, 189, 248, 0.2), transparent 65%);
    }

    .app-toggle-row {
      margin-top: 10px;
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }

    .app-toggle {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 6px 10px;
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
      width: 18px;
      height: 18px;
      border-radius: 6px;
      background: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      box-shadow:
        0 4px 10px rgba(0, 0, 0, 0.35),
        0 0 8px rgba(15, 23, 42, 0.7);
    }

    .app-toggle-icon img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    .app-toggle-label { white-space: nowrap; }

    .app-toggle.active {
      border-color: rgba(56, 189, 248, 0.9);
      box-shadow:
        0 0 16px rgba(56, 189, 248, 0.5),
        0 12px 26px rgba(15, 23, 42, 0.9);
      background: radial-gradient(circle at top, rgba(15, 23, 42, 0.98), rgba(15, 23, 42, 1));
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

    /* Responsive tweaks */
    @media (max-width: 960px) {
      main {
        padding-top: 12px;
      }

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
        gap: 18px;
      }

      .hero-phone {
        order: -1;
      }

      .hero-copy {
        text-align: left;
      }

      .phone-showcase-section {
        grid-template-columns: minmax(0, 1fr);
        gap: 28px;
      }

      .phone-showcase-phone {
        order: -1;
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
        transform: scale(0.9);
      }

      .phone-demo {
        padding-top: 0;
        margin-top: -10px;
      }
    }
  </style>
</head>
<body>
  <div class="space-scene" aria-hidden="true">
    <div class="star-field layer-1"></div>
    <div class="star-field layer-2"></div>
    <div class="orbit orbit-1"><div class="planet planet-1"></div></div>
    <div class="orbit orbit-2"><div class="planet planet-2"></div></div>
    <div class="orbit orbit-3"><div class="planet planet-3"></div></div>
    <div class="asteroid-belt"></div>
    <div class="shooting-star shooting-star-1"></div>
    <div class="shooting-star shooting-star-2"></div>
  </div>

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
        <a href="#phone-showcase">Screens</a>
        <a href="#investors">For investors</a>
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
            mPWR bundles an affordable smartphone with connectivity, embedded financial services,
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
                <path d="M3 8h7.2L7.1 4.9 8.5 3.5 13 8l-4.5 4.5-1.4-1.4L10.2 9H3z" fill="currentColor" />
              </svg>
            </a>
          </div>
        </div>

        <div class="hero-phone">
          <div class="phone-demo" aria-label="mPWR phone demo">
            <div class="energy-ring r1"></div>
            <div class="energy-ring r2"></div>
            <div class="energy-ring r3"></div>

            <div class="iphone">
              <div class="screen">
                <div class="dynamic-island"></div>

                <div class="logo-wrap">
                  <div class="brand">mPWR</div>
                  <div class="tagline">connect · pay · earn</div>
                </div>

                <div class="icons-layer">
                  <div class="icon-hit" data-label="mPWR Phone">
                    <img src="https://thempwr.com/wp-content/uploads/2025/09/mPWR-gray-gradient-icon-150x150.png" alt="mPWR Phone" />
                    <div class="tooltip">
                      <strong>mPWR Phone</strong>
                      Affordably lease devices with protection and upgrades.
                    </div>
                  </div>
                  <div class="icon-hit" data-label="mPWR Connect">
                    <img src="https://thempwr.com/wp-content/uploads/2025/08/mPWR-Connect-Icon-150x150.png" alt="mPWR Connect" />
                    <div class="tooltip">
                      <strong>mPWR Connect</strong>
                      Seamless connectivity and optional international roaming.
                    </div>
                  </div>
                  <div class="icon-hit" data-label="mPWR Pay">
                    <img src="https://thempwr.com/wp-content/uploads/2025/08/mPWR-Pay-Icon-150x150.png" alt="mPWR Pay" />
                    <div class="tooltip">
                      <strong>mPWR Pay</strong>
                      Wallet, remittances, and cross-border payments.
                    </div>
                  </div>
                  <div class="icon-hit" data-label="mPWR Media">
                    <img src="https://thempwr.com/wp-content/uploads/2025/08/mPWR-Media-Icon-150x150.png" alt="mPWR Media" />
                    <div class="tooltip">
                      <strong>mPWR Media</strong>
                      Live TV, movies, series, radio, music, plus financial education.
                    </div>
                  </div>
                  <div class="icon-hit" data-label="mPWR Earn">
                    <img src="https://thempwr.com/wp-content/uploads/2025/08/mPWR-Earn-Icon-150x150.png" alt="mPWR Earn" />
                    <div class="tooltip">
                      <strong>mPWR Earn</strong>
                      Rewards for on-time repayments, referrals, and engagement.
                    </div>
                  </div>
                  <div class="icon-hit" data-label="mPWR University">
                    <img src="https://thempwr.com/wp-content/uploads/2025/08/mPWR-University-Icon-150x150.png" alt="mPWR University" />
                    <div class="tooltip">
                      <strong>mPWR University</strong>
                      Skills training and digital literacy powered by AI.
                    </div>
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

      <!-- Story phone: full-screen app views -->
      <section class="section phone-showcase-section" id="phone-showcase">
        <div class="phone-showcase-phone">
          <div class="phone-demo phone-demo--story" aria-label="mPWR app story phone">
            <div class="iphone iphone--story">
              <div class="screen screen--story">
                <div class="dynamic-island"></div>

                <div class="screen-stage screen-stage--phone active" data-app="phone">
                  <div class="screen-stage-label">mPWR Phone</div>
                  <div class="screen-stage-title">Affordably lease devices with protection and upgrades.</div>
                  <div class="screen-stage-body">
                    Start with the device: a smartphone that comes with built-in protection,
                    upgrade paths, and a clear way to step into the digital economy.
                  </div>
                </div>

                <div class="screen-stage screen-stage--connect" data-app="connect">
                  <div class="screen-stage-label">mPWR Connect</div>
                  <div class="screen-stage-title">Seamless connectivity and optional international roaming.</div>
                  <div class="screen-stage-body">
                    Always-on mobile data tuned for messaging, calls, streaming, and payments —
                    with optional roaming so families can stay close even when they&apos;re apart.
                  </div>
                </div>

                <div class="screen-stage screen-stage--pay" data-app="pay">
                  <div class="screen-stage-label">mPWR Pay</div>
                  <div class="screen-stage-title">Wallet, remittances, and cross-border payments.</div>
                  <div class="screen-stage-body">
                    A single wallet for repayments, local spend, and cross-border transfers,
                    built to move money quickly, safely, and with full context from the device.
                  </div>
                </div>

                <div class="screen-stage screen-stage--media" data-app="media">
                  <div class="screen-stage-label">mPWR Media</div>
                  <div class="screen-stage-title">Live TV, movies, radio, music, and financial education.</div>
                  <div class="screen-stage-body">
                    Entertainment plus education in one place — from live sports to series,
                    music, and bite-sized content that teaches people how money really works.
                  </div>
                </div>

                <div class="screen-stage screen-stage--earn" data-app="earn">
                  <div class="screen-stage-label">mPWR Earn</div>
                  <div class="screen-stage-title">Rewards for on-time repayments and engagement.</div>
                  <div class="screen-stage-body">
                    Every on-time payment, referral, and product action becomes a way to earn.
                    Rewards are designed to be tangible, liquid, and habit-forming.
                  </div>
                </div>

                <div class="screen-stage screen-stage--university" data-app="university">
                  <div class="screen-stage-label">mPWR University</div>
                  <div class="screen-stage-title">Skills training and digital literacy powered by AI.</div>
                  <div class="screen-stage-body">
                    Short, practical modules that build skills, confidence, and earning power —
                    all accessible directly on the same device the customer already uses daily.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="phone-showcase-copy">
          <div class="phone-showcase-eyebrow">See each rail in full-screen</div>
          <h2 class="phone-showcase-title">Tap between apps to see how the experience shifts.</h2>
          <p class="phone-showcase-body">
            This second phone focuses on storytelling. Each app takes over the entire screen
            with its own visual identity and copy, so investors and partners can see how
            the bundle feels when you go deep on one rail at a time.
          </p>

          <div class="app-toggle-row" aria-label="Switch app story on phone">
            <button class="app-toggle active" data-app="phone" type="button">
              <span class="app-toggle-icon">
                <img src="https://thempwr.com/wp-content/uploads/2025/09/mPWR-gray-gradient-icon-150x150.png" alt="mPWR Phone icon">
              </span>
              <span class="app-toggle-label">mPWR Phone</span>
            </button>

            <button class="app-toggle" data-app="connect" type="button">
              <span class="app-toggle-icon">
                <img src="https://thempwr.com/wp-content/uploads/2025/08/mPWR-Connect-Icon-150x150.png" alt="mPWR Connect icon">
              </span>
              <span class="app-toggle-label">mPWR Connect</span>
            </button>

            <button class="app-toggle" data-app="pay" type="button">
              <span class="app-toggle-icon">
                <img src="https://thempwr.com/wp-content/uploads/2025/08/mPWR-Pay-Icon-150x150.png" alt="mPWR Pay icon">
              </span>
              <span class="app-toggle-label">mPWR Pay</span>
            </button>

            <button class="app-toggle" data-app="media" type="button">
              <span class="app-toggle-icon">
                <img src="https://thempwr.com/wp-content/uploads/2025/08/mPWR-Media-Icon-150x150.png" alt="mPWR Media icon">
              </span>
              <span class="app-toggle-label">mPWR Media</span>
            </button>

            <button class="app-toggle" data-app="earn" type="button">
              <span class="app-toggle-icon">
                <img src="https://thempwr.com/wp-content/uploads/2025/08/mPWR-Earn-Icon-150x150.png" alt="mPWR Earn icon">
              </span>
              <span class="app-toggle-label">mPWR Earn</span>
            </button>

            <button class="app-toggle" data-app="university" type="button">
              <span class="app-toggle-icon">
                <img src="https://thempwr.com/wp-content/uploads/2025/08/mPWR-University-Icon-150x150.png" alt="mPWR University icon">
              </span>
              <span class="app-toggle-label">mPWR University</span>
            </button>
          </div>
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
      <span>Prototype landing experience for demonstration only.</span>
    </footer>
  </div>

  <script>
    // Icon hover / click behavior for hero phone
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
      if (phone) {
        phone.addEventListener('mouseleave', () => {
          if (![...hits].some(h => h.classList.contains('active'))) {
            labelEl.textContent = 'Hover or tap an icon';
          }
        });
      }
    })();

    // Story phone app switching
    (function() {
      const stages = document.querySelectorAll('.screen-stage');
      const toggles = document.querySelectorAll('.app-toggle');

      if (!stages.length || !toggles.length) return;

      function setActive(appKey) {
        stages.forEach(stage => {
          stage.classList.toggle('active', stage.dataset.app === appKey);
        });
        toggles.forEach(btn => {
          btn.classList.toggle('active', btn.dataset.app === appKey);
        });
      }

      toggles.forEach(btn => {
        btn.addEventListener('click', () => {
          const appKey = btn.dataset.app;
          if (appKey) setActive(appKey);
        });
      });

      setActive('phone');
    })();

    // Footer year
    document.getElementById('year').textContent = new Date().getFullYear();
  </script>
</body>
</html>
"""

landing_path = Path("/mnt/data/mpwr-landing-solar-story-phone.html")
landing_path.write_text(landing_html, encoding="utf-8")


# 2) Standalone story-phone-only page (same style but minimal)
story_only_html = """<!DOCTYPE html>
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

    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      background: radial-gradient(circle at top, #020617, #020617 55%, #000000 100%);
      color: var(--mpwr-text);
      overflow-x: hidden;
    }

    .phone-wrapper {
      width: 100%;
      max-width: 420px;
      padding: 20px;
      position: relative;
      z-index: 1;
    }

    .phone-title {
      font-size: 14px;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: var(--mpwr-muted);
      margin-bottom: 6px;
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

      setActive("phone");
    })();
  </script>
</body>
</html>
"""

story_only_path = Path("/mnt/data/mpwr-story-phone-standalone.html")
story_only_path.write_text(story_only_html, encoding="utf-8")

landing_path, story_only_path //

**GPT:** Here’s the minimal change you need to remove the **shooting star** effect.

---

### 1. Delete the shooting-star CSS and keyframes

In the `<style>` block of the **landing page**, remove this entire chunk:

```css
    .shooting-star {
      position: absolute;
      width: 190px;
      height: 2px;
      background: linear-gradient(90deg, rgba(248, 250, 252, 0.95), rgba(148, 163, 184, 0.1), transparent);
      opacity: 0;
      filter: drop-shadow(0 0 14px rgba(248, 250, 252, 0.9));
      animation: shoot 9s linear infinite;
    }

    .shooting-star::after {
      content: "";
      position: absolute;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      right: 0;
      top: -2px;
      background: #e5e7eb;
      box-shadow: 0 0 14px rgba(248, 250, 252, 0.95);
    }

    .shooting-star-1 { top: 18%; left: -25%; animation-delay: 2.3s; }
    .shooting-star-2 { top: 68%; left: -30%; animation-delay: 5.7s; animation-duration: 12s; }
```

And also remove the `@keyframes shoot` block:

```css
    @keyframes shoot {
      0% {
        opacity: 0;
        transform: translate3d(0, 0, 0) rotate(14deg);
      }
      6% { opacity: 1; }
      30% {
        opacity: 0.9;
        transform: translate3d(135vw, 40vh, 0) rotate(14deg);
      }
      100% {
        opacity: 0;
        transform: translate3d(160vw, 60vh, 0) rotate(14deg);
      }
    }
```

---

### 2. Remove the shooting-star elements from the HTML

In the `.space-scene` container, change this:

```html
  <div class="space-scene" aria-hidden="true">
    <div class="star-field layer-1"></div>
    <div class="star-field layer-2"></div>
    <div class="orbit orbit-1"><div class="planet planet-1"></div></div>
    <div class="orbit orbit-2"><div class="planet planet-2"></div></div>
    <div class="orbit orbit-3"><div class="planet planet-3"></div></div>
    <div class="asteroid-belt"></div>
    <div class="shooting-star shooting-star-1"></div>
    <div class="shooting-star shooting-star-2"></div>
  </div>
```

to this:

```html
  <div class="space-scene" aria-hidden="true">
    <div class="star-field layer-1"></div>
    <div class="star-field layer-2"></div>
    <div class="orbit orbit-1"><div class="planet planet-1"></div></div>
    <div class="orbit orbit-2"><div class="planet planet-2"></div></div>
    <div class="orbit orbit-3"><div class="planet planet-3"></div></div>
    <div class="asteroid-belt"></div>
  </div>
```

---

No other changes are needed. The **story-only** HTML already has no shooting star effect, so you can leave that part exactly as-is.

**Mike:** great !  provide the entire HTML file as downloadable.

**GPT:** Here you go — this is the updated landing page **without** the shooting-star effect:

[Download the HTML file](sandbox:/mnt/data/mpwr-landing-no-shooting-star.html)

You can open it directly in your browser or drop it into your builder as-is.
