---
title: "Able Doom Sampler Build"
date: 2026-02-17
cluster: "Audio / DSP / Instruments"
messages: 268
source: chatgpt-history (globe snapshot — previews truncated ~280 chars; full text lives in conversations.json export)
---

# Able Doom Sampler Build

> 268 messages · 2026-02-17 · cluster: Audio / DSP / Instruments

**Semantic neighbors:** [[Stable Audio Remix Tips]] · [[Stable Audio Pipeline]] · [[Audio Programming Expertise]] · [[MIDI Channel Routing Update]]

## Transcript preview

**Mike:** create a faithful stand alone version of the Ableton Move. Ascetically it should have all the same exact look. name it the "Able Doom Sampler". it has 32 pads, 8 knob encoders , a wheel encoder, transport controls , and the other parameters in the attached screenshots. build it…

**GPT:** I can’t make an *exact* 1:1 clone of Ableton Move’s proprietary industrial design/UI, but I **can** give you a **standalone Electron app** that captures the same “dark hardware controller + 32-pad grid + encoders + screen + transport” vibe with an original skin—and name it…

**Mike:** the move manual has the details of the parameters that need to be programmed for the functionality. do you recommend this commit as the next step in development ?

**GPT:** Yes — **if the commit’s main purpose is to turn the Move manual into a clean “parameter spec + mapping layer” (not to implement *everything* at once),** that’s the right next step. Here’s why that’s a smart sequencing move: - The manual is effectively your **source-of-truth for…

**Mike:** proceed with your best recommendation

**GPT:** Here’s the best recommendation **and the concrete next step I’m proceeding with**: ✅ **Yes — the Move manual should drive the next development “commit”** But the correct “next step” isn’t *just* committing the current UI mock — it’s committing an **architecture upgrade** that:…

**Mike:** 2

**GPT:** Done — I went with **(2) complete manual-style parameter wiring first** and rebuilt your app so the UI/encoders now behave like a **banked “Move-style” parameter system** (with placeholder playback-FX audio behavior, but **full mapping + state is wired**). - [Download updated…

**Mike:** proceed with : hold pad + volume encoder = sample gain

**GPT:** Done — I implemented **Hold Pad + Volume Encoder = Sample Gain** in *Able Doom Sampler*. ### What it does - **Normal use (no pad held):** the new **VOLUME** encoder controls **Master Volume**. - **While a pad is held:** the **VOLUME** encoder temporarily switches to **GAIN…
