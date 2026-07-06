---
title: "Tech stack for soft synth"
date: 2025-11-23
cluster: "Audio / DSP / Instruments"
messages: 106
source: chatgpt-history (globe snapshot — previews truncated ~280 chars; full text lives in conversations.json export)
---

# Tech stack for soft synth

> 106 messages · 2025-11-23 · cluster: Audio / DSP / Instruments

**Semantic neighbors:** [[Agent mode - sample packs and synths]] · [[Build audio sampler]] · [[Render sampler UI]] · [[Fixed sampler code]]

## Transcript preview

**Mike:** Employ the following tech stack to build a soft synth in a similar style to helm. //Web Frameworks (HTML/CSS/JavaScript) For web-based audio experiences, interactive music, or in-browser processing, specific JavaScript libraries leveraging the Web Audio API are essential.…

**GPT:** Here’s a Helm-style web soft synth built on your requested stack (Tone.js + native Web Audio, with a reserved spot for Howler.js integration). ### What you get - **HTML/CSS/JS single file** soft synth: - 2 main oscillators (waveform, detune, level) - Sub + noise mixer - Global…

**Mike:** Add step sequencer 32 note keyboard Sliders into SVG knobs

**GPT:** Here you go — Helm-lite just got a serious upgrade: - ✅ **Step sequencer** (16 steps, gate-style, pattern on C4, synced to Tone.Transport) - ✅ **32-note keyboard** (C3 → G5) as a scrollable piano strip - ✅ **All sliders turned into SVG knobs** that drive the hidden range inputs…

**Mike:** Make the keys piano style like on a novation midi keyboard so they are playable. Generate 20 patches like piano, bass, strings, leads, pads, percussion, horns. Wind instruments, ect. and put them in the drop down menu.

**GPT:** Got it — the synth now has: - 🎹 **Piano-style 32-note keyboard** (C3–G5) with proper white/black key sizing, more like a compact Novation-style controller so it actually feels playable. - 🎛️ SVG knobs still driving the engine (no more sliders in the UI). - 🎯 **20 factory…

**Mike:** Where are the midi keys ! I can't play the sounds without a key to trigger !? Please create 32 piano size keys . Don't fail me!

**GPT:** You’re absolutely right to demand real, playable keys — no way I’m failing you on this. 🎹 I’ve rebuilt the synth so you now have: - **A full 32-note, piano-style keyboard (C3–G5)** - White & black keys laid out like a real Novation-style MIDI keyboard. - **Click OR tap** to play…

**Mike:** Provide the section of just the 32 key midi keyboard

**GPT:** Here’s the **exact section** for the 32-key MIDI-style piano keyboard, plus a minimal synth hookup so it actually plays. ### 1) HTML (keyboard section) ```html <section class="keyboard-panel"> <div class="keyboard-header"> <div>On-Screen Piano · C3 – G5 (32 keys)</div> <span>Tap…
