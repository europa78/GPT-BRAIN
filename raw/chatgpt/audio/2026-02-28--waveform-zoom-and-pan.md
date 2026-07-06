---
title: "Waveform Zoom and Pan"
date: 2026-02-28
cluster: "Audio / DSP / Instruments"
messages: 34
source: chatgpt-history (globe snapshot — previews truncated ~280 chars; full text lives in conversations.json export)
---

# Waveform Zoom and Pan

> 34 messages · 2026-02-28 · cluster: Audio / DSP / Instruments

**Semantic neighbors:** [[MIDI Channel Routing Update]] · [[Audio Web App Tech Stack]] · [[Wave Editor Sampler UI]] · [[Optimizing Audio Synth Prompt]]

## Transcript preview

**Mike:** ROLE: You are a senior Web Audio + Front-End UI engineer specializing in waveform editors/samplers (single-file HTML/CSS/JS apps). TASK: Add waveform zoom in/out to Sample Browser A and Sample Browser B. Scope (strict) Only change what’s required for zoom: add zoom buttons +…

**GPT:** Implemented **per-browser waveform zoom (+/−) + horizontal pan** for **Sample Browser A** and **B**, with **surgical diffs**: - **Two buttons per browser** (`+` over `−`) placed **to the right of the waveform frame** (not overlaid), stacked vertically and centered to the…
