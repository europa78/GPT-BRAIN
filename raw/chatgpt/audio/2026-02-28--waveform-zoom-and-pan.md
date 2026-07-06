---
title: "Waveform Zoom and Pan"
date: 2026-02-28
cluster: "Audio / DSP / Instruments"
messages: 34
source: chatgpt-export conversations.json (FULL transcript)
---

# Waveform Zoom and Pan

> 34 messages · 2026-02-28 · cluster: Audio / DSP / Instruments

**Semantic neighbors:** [[MIDI Channel Routing Update]] · [[Audio Web App Tech Stack]] · [[Wave Editor Sampler UI]] · [[Optimizing Audio Synth Prompt]]

## Transcript

**Mike:** ROLE: You are a senior Web Audio + Front-End UI engineer specializing in waveform editors/samplers (single-file HTML/CSS/JS apps).

TASK: Add waveform zoom in/out to Sample Browser A and Sample Browser B.

Scope (strict)

Only change what’s required for zoom: add zoom buttons + minimal CSS + minimal JS mapping/render updates.

Do not refactor/reformat/touch unrelated modules (effects, master, transport, layout, etc.). Keep diffs surgical.

UI placement (must match)

Add two buttons per browser: + and −.

Place them to the right of the waveform frame, outside the waveform (not inside/overlaid).

Put them in the gutter space between the waveform frame and the master volume control.

Never overlap the master volume at any viewport size.

Stack vertically (+ above −), centered along waveform height.

Behavior

X-axis zoom only. Per browser state: zoomFactor default 1.0, clamp 1.0–16.0.

click: zoom *= 1.25 ; − click: zoom /= 1.25.

Preserve current view center time when zooming.

When zoomed in, enable horizontal pan (drag to pan; wheel optional).

Must stay correct under zoom/pan

Reuse existing cached waveform/peaks data (no re-decode).

Playhead, slice markers, click-to-audition, and loop/trim edges (if present) must align via shared helpers:

timeToX, xToTime, getVisibleRange, setZoom.

Done when

Buttons sit in the gutter (outside waveform), no overlap with master volume.

Zoom + pan work on A and B, and overlays/click slicing remain accurate.

**GPT:** Implemented **per-browser waveform zoom (+/−) + horizontal pan** for **Sample Browser A** and **B**, with **surgical diffs**:

- **Two buttons per browser** (`+` over `−`) placed **to the right of the waveform frame** (not overlaid), stacked vertically and centered to the waveform height.
- **X-axis zoom only** with `zoomFactor` per deck (**default 1.0**, clamped **1.0–16.0**).
- `+` → `zoom *= 1.25`, `−` → `zoom /= 1.25`.
- **Preserves current view center** on zoom changes.
- When zoomed in, **drag waveform to pan horizontally**.
- All overlay math is routed through shared helpers: **`timeToX`, `xToTime`, `getVisibleRange`, `setZoom`** so playhead + trim handles remain aligned.

[Download the updated HTML](sandbox:/mnt/data/futzverb_wired_loop_reverb_fixed_playhead_zoom.html)
