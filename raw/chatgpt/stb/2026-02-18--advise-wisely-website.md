---
title: "Advise Wisely website"
date: 2026-02-18
cluster: "STB / Marketing / Web"
messages: 16
source: chatgpt-export conversations.json (FULL transcript)
---

# Advise Wisely website

> 16 messages · 2026-02-18 · cluster: STB / Marketing / Web

**Semantic neighbors:** [[Photorealistic Café Branding Shot]] · [[MPOWR Outreach - Mark]] · [[Google Sheets Website Finder]] · [[SEO Growth and PPC]]

## Transcript

**Mike:** /canvas document

**GPT:** Canvas created. Paste your requirements/code in there and tell me what you want to build or fix.  

**a.** Want a starter template in your target language (Python/Node/Go) with linting + tests?  
**b.** Want me to turn your notes into a clear spec + task breakdown?

**Mike:** I want to make my Advise Wisely website more informative and more appealing visually

**GPT:** According to a document from **2025**, your current one-page layout is strong (Hero → Services → Packages → mPOWR → Regulations → Why Us → Testimonial → CTA), but it’s missing a few “make it obvious + build trust” sections and there’s a **mobile nav bug**: the menu button toggles a `.show` class, but there’s no CSS for `.nav-links.show`, so the menu still stays hidden on small screens.【16:6†advisewisely (2).html†L62-L65】【16:3†advisewisely (2).html†L47-L83】

I made an upgraded version of your page that:
- **Fixes mobile menu** (adds `.nav-links.show` styling + ARIA state + closes on link click/outside click)
- Adds **How It Works** (4-step process) to make the offer instantly clear
- Adds **What You Get / Deliverables** to make value concrete
- Adds an **FAQ** section to handle objections
- Adds **accessibility + polish** (skip-to-content, focus-visible, reduced motion)
- Hardens JS (smooth-scroll ignores `href="#"`, reveal observer unobserves after animation)

**Download the improved HTML:** [advisewisely_improved.html](sandbox:/mnt/data/advisewisely_improved.html)

If you want the page to feel *even more premium*, the biggest next win is performance: move the big embedded base64 images to real `assets/` files (compressed WebP) and lazy-load them.

**a.** Want me to convert the embedded base64 “work sample” images into real `assets/*.webp` files + update the HTML paths?  
**b.** Want a Version 2 with a slide-in mobile drawer + backdrop (more “app-like” than a dropdown)?
