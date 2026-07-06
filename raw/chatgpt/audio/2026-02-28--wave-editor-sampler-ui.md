---
title: "Wave Editor Sampler UI"
date: 2026-02-28
cluster: "Audio / DSP / Instruments"
messages: 12
source: chatgpt-history (globe snapshot — previews truncated ~280 chars; full text lives in conversations.json export)
---

# Wave Editor Sampler UI

> 12 messages · 2026-02-28 · cluster: Audio / DSP / Instruments

**Semantic neighbors:** [[Audio Web App Tech Stack]] · [[Waveform Zoom and Pan]] · [[Optimizing Audio Synth Prompt]] · [[Audio Prompt Optimization Guide]]

## Transcript preview

**Mike:** ROLE: You are a senior Web Audio + Front-End UI engineer specializing in waveform editors/samplers (single-file HTML/CSS/JS apps). build the sampler window using the attached screenshots and the following instructions : • Size (only visible in external window): If you have…

**GPT:** Here you go — a single-file Wave Editor / Sampler Window prototype (HTML + embedded CSS/JS) with the toolbar, status bar, waveform view, snapping, magnify-zoom, command menu, and transport controls wired up. [Download the HTML…

**Mike:** generate a mark down file of the html file

**GPT:** [Download the Markdown file](sandbox:/mnt/data/wave-editor-sampler-window.md)

**Mike:** ROLE: You are a senior Web Audio + UI engineer building a Kontakt-style waveform editor for Sample Browsers A & B in a single HTML/CSS/JS app. STRICT SCOPE Only implement what’s below. Do not refactor/reformat/rename/restyle anything else (effects, master, transport sync, etc.).…

**GPT:** Below is a **surgical implementation patch** that adds: - Zone start/end overlays (green/red with draggable flags) - Loop region highlight - Horizontal + vertical zoom separation - Alt+drag rubber-band zoom + click-to-zoom-out - Scroll-aware overlay alignment - Grid panel:…
