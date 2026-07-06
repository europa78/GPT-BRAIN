---
title: "HTML Wrapper for App"
date: 2026-02-15
cluster: "Coding / Dev / Infra"
messages: 10
source: chatgpt-export conversations.json (FULL transcript)
---

# HTML Wrapper for App

> 10 messages · 2026-02-15 · cluster: Coding / Dev / Infra

**Semantic neighbors:** [[Packaging Electron App]] · [[Node.js Vite Setup Explanation]] · [[2025 Nonfiction Calendar]] · [[Three.js React Globe]]

## Transcript

**Mike:** wrap this app in an html file

**GPT:** Here you go — I wrapped your Vite + React + Tone app into a **single standalone HTML file** (with embedded app code + CSS). It runs without Vite (uses CDN scripts for React/Tone).

[Download the standalone HTML](sandbox:/mnt/data/doom-stepmother-standalone.html)

**How to run it**
- You *can* double-click/open it, but **WebMIDI won’t work from `file://`** in most browsers.
- For MIDI support, serve it from **`http://localhost`** (any tiny local server) or deploy to **https**.
