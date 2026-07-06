---
title: "3D Flight Tracker App"
date: 2026-03-07
cluster: "Misc / Uncategorized"
messages: 48
source: chatgpt-history (globe snapshot — previews truncated ~280 chars; full text lives in conversations.json export)
---

# 3D Flight Tracker App

> 48 messages · 2026-03-07 · cluster: Misc / Uncategorized

**Semantic neighbors:** [[LinkedIn post creation]] · [[Discord best use cases ALBT]] · [[Lesser-Known Nonfiction Gems]] · [[Lesser-Known Nonfiction Gems#2]]

## Transcript preview

**Mike:** : Build a production-quality 3D flight-tracking web app using React + Vite + Three.js (react-three-fiber + drei) that visualizes live OpenSky aircraft data on a rotatable 3D Earth, with real-time plane motion, smooth interpolation, altitude-accurate positioning, and polished…

**GPT:** I’m putting together a Vite-ready React app structure with a polished 3D globe scene, live OpenSky polling, and smooth aircraft interpolation. I’m also checking the current OpenSky API details so the data layer matches how the service works today.

**GPT:** The rendering stack is straightforward; the tricky part is the data layer. OpenSky now prefers OAuth2 clients for programmatic access, so I’m shaping this as a production frontend plus a small proxy/service layer instead of hard-coding secrets into the browser.

**GPT:** The main build decision is made: I’m treating aircraft as an instanced mesh cloud instead of thousands of separate React components. That keeps the globe smooth even with a large live state set, while still allowing click selection and animated interpolation.

**GPT:** Built it as a Vite-ready React project with a 3D Earth scene, instanced aircraft rendering, region filters, search, selection HUD, smooth dead-reckoned motion between polls, and a small Node proxy so OpenSky credentials stay server-side. I structured it this way because OpenSky…

**Mike:** how do I launch this project ?

**GPT:** I’m checking the project’s scripts and config so I can give you exact launch steps instead of generic Vite instructions.

**GPT:** Here’s the fastest way to launch it on your computer. ### 1) Extract the ZIP Unzip `opensky-flight-tracker.zip` to a folder you can access easily, such as your Desktop. ### 2) Open a terminal in that folder On Windows PowerShell, run: ```powershell cd…
