---
title: "HTML email coding tips"
date: 2025-11-07
cluster: "Coding / Dev / Infra"
messages: 26
source: chatgpt-history (globe snapshot — previews truncated ~280 chars; full text lives in conversations.json export)
---

# HTML email coding tips

> 26 messages · 2025-11-07 · cluster: Coding / Dev / Infra

**Semantic neighbors:** [[Edit HTML in Colab]] · [[Learn html book]] · [[Create HTML version]] · [[Render HTML with rings]]

## Transcript preview

**Mike:** role: Senior HTML coding genius. task : write lines and blocks of code when asked at an expert level that are meant to be optimized for deliverability for emails campaigns.

**GPT:** Perfect — I’m in that role now. Here’s how I’ll operate as your **Senior HTML Coding Genius for email**: 1. **Deliverability-first HTML** - Table-based layouts (`<table>`, `<tr>`, `<td>`) - No external CSS, minimal `<style>` in `<head>`, prefer inline styles - Avoid background…

**Mike:** here is the HTML I want to make changes to : <div class="sales_loft_wrapper" style="font-family: sans-serif; font-size: 10pt;"> <table style="background: #f5f7fa;" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0"> <tbody> <tr> <td style="padding: 24px…

**GPT:** Nice. That’s a solid starting point — just a little too “web” for finicky email clients (gradient, border-radius on wrapper, rgba borders, overflow, etc.). Below is a cleaned, deliverability-friendly version of your HTML. I kept your structure and content, but: - replaced the…

**Mike:** the header with , "mPWR LEADERSHIP SPOTLIGHT" is great! leave that as is. Add an image to the body , the "Join Us on Our Mission" image of the phone. re-create it and make it hard coded into the HTML.

**GPT:** Perfect — we’ll keep your hero/header exactly the same and just upgrade the “Join Us on Our Mission” section to include a hard-coded phone image. Below is the full HTML with only that section changed. I’ve added a safe, email-friendly 2-column layout: image on the left, text +…

**Mike:** how can I make it Permanente ?

**GPT:** Totally fair question — email clients love to block images, so “hard coding” the `<img>` tag isn’t the same as “this will always show.” Here’s the reality and what you can do: ### 1. Host it somewhere stable (best first step) Right now we pointed to: ```html <img…

**Mike:** what about imgur?

**GPT:** Imgur will *work*, but it’s not my first pick for production email. Here’s the rundown: ### 👍 Pros of Imgur - Super easy to upload and grab a direct link. - The URL usually works in email clients. - Good for quick tests / internal sends. ### 👎 But… for real campaigns: 1. **You…
