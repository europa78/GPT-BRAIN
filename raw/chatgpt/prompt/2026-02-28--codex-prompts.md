---
title: "Codex prompts"
date: 2026-02-28
cluster: "Prompt Eng / GPT Building"
messages: 166
source: chatgpt-history (globe snapshot — previews truncated ~280 chars; full text lives in conversations.json export)
---

# Codex prompts

> 166 messages · 2026-02-28 · cluster: Prompt Eng / GPT Building

**Semantic neighbors:** [[PROMPT TEMPLATE]] · [[Sell Side Analyst Investor Prompt]] · [[Prompt optimization for demo]] · [[Discord Strategy for ALBT PROMPT]]

## Transcript preview

**Mike:** check the code that represents the pre verb and reverb modules . they are not working. identify and fix the errors in the code.

**GPT:** I dug into the **Pre-Verb** + **Reverb** signal path and found the main reason they “don’t work”: ### What was broken - **Pre-Verb = “Kill” was hard-muting the entire reverb path**, not just “taming” it. - In `applyModuleModesToAudio()`, `preVerbSendGain` was being set to **0**…

**Mike:** optimize this prompt to add additional features : next let's add some more features to sample browsers A and B. 1. add a play head that follows audio playback so I know what part of the waveform playback is currently at. 2. add hitpoint detection to both samplers with a…

**GPT:** Here’s an optimized **Codex-ready prompt** that will reliably add both features without blowing up the codebase. It’s structured as a tight spec + step-by-step tasks + acceptance tests. --- ## Optimized Prompt (for Codex) You are a senior Web Audio + front-end engineer. Your…

**Mike:** optimize the prompt for this chat

**GPT:** Got it — here’s a **ChatGPT-in-this-chat optimized prompt** (shorter, more directive, fewer Codex-specific assumptions) that still prevents the common failure modes. --- ### Optimized Prompt (for THIS chat) You are a senior Web Audio + UI engineer. We have **two waveform sample…

**Mike:** execute the prompt . I attached the most recent version of the html file

**GPT:** Done — I added both features to **Sample Browsers A + B** in your latest HTML: - **Playhead** that tracks transport playback (Play/Stop) across the waveform - **Hitpoint-based slicing** with: - **Threshold slider** (higher = fewer hitpoints / slices) - **Gap slider** (minimum…

**Mike:** great! next, optimize this prompt : add zoom in and out functionality to the sample browsers. add plus and minus signs to the right side of the waveform , just outside of the display (frame). do not have them overlap with the master volume control and do not place the plus and…

**GPT:** Here’s an optimized, **implementation-ready prompt** to add zoom controls to **Sample Browsers A + B** exactly where you want them, without interfering with the master volume. --- ## Optimized Prompt (Zoom +/− for Sample Browsers A & B) You are a senior UI + Web Audio engineer.…
