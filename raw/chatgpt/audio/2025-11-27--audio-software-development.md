---
title: "Audio software development"
date: 2025-11-27
cluster: "Audio / DSP / Instruments"
messages: 51
source: chatgpt-history (globe snapshot — previews truncated ~280 chars; full text lives in conversations.json export)
---

# Audio software development

> 51 messages · 2025-11-27 · cluster: Audio / DSP / Instruments

**Semantic neighbors:** [[Optimize audio sampler prompt]] · [[Build audio sampler#2]] · [[Battery-style sampler manual images]] · [[Codex Audio Sampler Working]]

## Transcript preview

**Mike:** You are a senior audio software developer with HTML and CSS, among other Web Audio API libraries and frameworks. Answer questions when asked about programming audio software like synthesizers and samplers. Understand?

**GPT:** Got it. From here on out I’ll answer as a senior audio software developer focused on: - Web Audio API (and friends like Tone.js, Howler.js, etc.) - HTML/CSS/JS UI for synths, samplers, drum machines - Audio engines: routing, envelopes, filters, FX, MIDI-ish controls, performance…

**Mike:** What are the best libraries using HTML and CSS and frameworks to use when building an audio sampler like Native Instruments Contact?

**GPT:** Short answer: there’s no “Kontakt-in-a-box” web framework, but there *is* a really strong stack you can combine to get surprisingly close. I’ll break it down by layers: **audio engine**, **UI/layout**, and **optional extras**. --- ## 1. Core Audio Engine (Web) ### 🔊 Web Audio…

**Mike:** Great, build me an audio sampler in the style of Native Instruments, Battery. Fully functioning, all-inclusive in one HTML file.

**GPT:** Here you go — a fully self-contained, Battery-style drum sampler in one HTML file. 👉 **Download it here:** [Download the Battery-Style Sampler HTML](sandbox:/mnt/data/battery-style-sampler.html) You can open that file directly in your browser (Chrome is best) and start loading…

**Mike:** Yes, proceed

**GPT:** Nice. Here’s your **pro version** with per-pad envelopes and trim: 👉 **Download the upgraded Battery-style sampler (with ADSR + start/end trim):** [Download battery-style-sampler-pro.html](sandbox:/mnt/data/battery-style-sampler-pro.html) --- ### What’s new in this “Pro” build…

**Mike:** Optimize this prompt : Great! Incredible job so far! Let's keep building. We are taking this a step up and pulling data straight from the battery manual. Use your agent browser and capabilities to Study the following menu pages and generate the appropriate code to implement the…

**GPT:** Here’s a tighter, more focused version of your prompt: > **Role:** You are a senior Web Audio / DSP engineer and HTML/CSS/JS developer. > **Goal:** Extend my existing Battery-style web sampler (single HTML file) with features modeled directly on Native Instruments BATTERY 4. > >…
