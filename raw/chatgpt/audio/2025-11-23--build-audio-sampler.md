---
title: "Build audio sampler"
date: 2025-11-23
cluster: "Audio / DSP / Instruments"
messages: 50
source: chatgpt-history (globe snapshot — previews truncated ~280 chars; full text lives in conversations.json export)
---

# Build audio sampler

> 50 messages · 2025-11-23 · cluster: Audio / DSP / Instruments

**Semantic neighbors:** [[New samples - AGENT]] · [[Agent mode - sample packs and synths]] · [[Tech stack for soft synth]] · [[Render sampler UI]]

## Transcript preview

**Mike:** I want to create an audio sampler like battery or kontakt . Features should include sample loading browser, pitch control, tune parameter, eq, 32 note key board, effects like delay and lo-fi , ADSR envelope. Use the best audio libraries like Javascript.

**GPT:** You can 100% build this in the browser with modern JS – think “mini-Kontakt” powered by Web Audio / Tone.js. I’ll give you: 1. **A clean architecture** for your sampler 2. **A working starter project (HTML + JS)** with: - Sample loader - 32-note keyboard - Pitch & fine tune -…

**Mike:** Multi-pad design (e.g., 16 pads × multiple layers). Multiple samples / velocity layers per key. Per-pad FX vs. global FX. Preset save/load (JSON describing all your parameters + sample file names). Computer keyboard / MIDI input (via Web MIDI or libraries).

**GPT:** Here’s a full multi-pad “mini-Kontakt/Battery” prototype that hits everything you asked for: - **16 pads** (4×4 grid) - **Multiple samples / velocity layers per pad** - **Per-pad FX** (bitcrusher + 3-band EQ + ADSR) - **Global FX** (delay + master EQ) - **Preset save/load** to…

**Mike:** Proceed

**GPT:** Done — the sampler just got a serious upgrade. Here’s your updated build with: - **Per-pad delay send** (true send FX into global delay) - **Gate-style envelopes** for: - Mouse (mousedown/ mouseup) - Computer keys (keydown/ keyup) - MIDI (note on / note off) - **Velocity meter…

**Mike:** Add one shot and looping capabilities to each sample . Create a 16 step sequencer like the one in the software program reason .

**GPT:** Alright, your sampler is now leveled up with: - **Per-pad playback mode:** One-shot vs Loop - **Reason-style 16-step sequencer:** Per-pad patterns, 16 steps, synced to BPM, driven by Tone.Transport ### 🔻 Download the new build **👉 [Download the sampler + sequencer…

**Mike:** There is no sound when loading a sample. Check the audio engine to make sure it us working

**GPT:** Nice catch—let’s make sure this thing actually *makes noise*. 🎧 I refactored the audio engine so each velocity layer now has its own persistent `Tone.Player`, the routing is cleaner, and the audio context is auto-started on first interaction. ### ✅ Fixed build (download this)…
