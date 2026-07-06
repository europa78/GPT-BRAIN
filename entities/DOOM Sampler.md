---
type: entity
status: compiled
compiled: 2026-07-06
sources:
  - raw/chatgpt/audio/2026-02-17--able-doom-sampler-build.md
  - raw/chatgpt/audio/2026-02-26--midi-channel-routing-update.md
  - raw/chatgpt/audio/2025-12-02--audio-software-questions.md
---
# DOOM Sampler
> One-liner: "Able Doom Sampler" — standalone Electron recreation of the Ableton Move (32 pads, 8 encoders, wheel, transport) built Feb 2026; the Move manual drives the parameter spec.

## Build log (2026-02, 268-msg thread)
- Goal: faithful standalone Ableton Move; GPT declined 1:1 proprietary clone → original dark-hardware skin with same control surface.
- **Architecture decision:** commit the Move manual as a "parameter spec + mapping layer" *before* implementing features — manual-as-spec ([[Browser Audio Architecture]] pattern #3).
- Banked "Move-style" parameter system wired first with placeholder audio; then modifier gestures: **hold pad + VOLUME encoder = per-pad sample gain** (encoder context-switches from master volume).
- **2026-02-26:** MIDI channel routing update.

## Lineage
Sibling of [[WebSamplOmatic5000]] (browser single-file line); fed by [[Stable Audio]] generated content. Escalation step browser → Electron on the path to JUCE.
