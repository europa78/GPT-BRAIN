---
type: concept
status: compiled
compiled: 2026-07-06
sources:
  - raw/chatgpt/audio/2025-11-27--audio-software-development.md
  - raw/chatgpt/audio/2026-02-17--able-doom-sampler-build.md
  - raw/chatgpt/audio/2025-11-24--drum-sampler-frameworks.md
  - raw/chatgpt/audio/2026-02-26--midi-channel-routing-update.md
---
# Browser Audio Architecture
> One-liner: recurring patterns across Mike's browser instruments — Web Audio API core, single-file/no-build HTML deliverables, manuals-as-parameter-specs, hardware-emulation UI, role-primed dev prompts.

## Patterns that repeated (corpus-evidenced)
1. **Single-file deliverable.** "Fully functioning, all-inclusive in one HTML file" is the standing constraint (Battery-style sampler, 2025-11). Ship one file, open in Chrome, iterate.
2. **No Kontakt-in-a-box framework exists** — the accepted stack is layered: Web Audio API engine (+Tone.js/Howler-class helpers) / HTML-CSS-JS UI / optional extras (2025-11-27).
3. **Manual-as-spec.** Real hardware/software manuals (NI Battery 4, Ableton Move) get parsed page-by-page into a "parameter spec + mapping layer" before implementation — architecture commit before feature commits (2026-02-17).
4. **Hardware-emulation UI.** Dark controller skins, pad grids, banked encoders, hold-pad+encoder modifier gestures (pad+VOLUME = per-pad gain, [[DOOM Sampler]]).
5. **MIDI routing** work sits at the edges (2026-02-26 MIDI channel routing update).
6. **Escalation path:** browser single-file → Electron standalone ([[DOOM Sampler]]) → JUCE plugin (lineage note in [[WebSamplOmatic5000]], Claude-side).

## What broke / limits hit
- Preview truncation hides the failure details (timing, voice pooling, worklet limits flagged in stub). `confidence: preview-only` — upgrade after full-transcript ingest.

## Links
[[WebSamplOmatic5000]] · [[DOOM Sampler]] · [[Stable Audio]] (content side) · [[REAPER]] (DAW side) · [[Role-Task Prompting]] (how dev prompts are framed).
