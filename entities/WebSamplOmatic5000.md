---
type: entity
status: compiled
compiled: 2026-07-06
sources:
  - raw/chatgpt/audio/2025-11-27--audio-software-development.md
  - raw/chatgpt/audio/2025-11-26--optimize-audio-sampler-prompt.md
  - raw/chatgpt/audio/2026-02-28--wave-editor-sampler-ui.md
  - raw/chatgpt/audio/2025-11-24--drum-sampler-frameworks.md
---
# WebSamplOmatic5000
> One-liner: flagship browser-based polyphonic sampler — ADSR, filters, LFO, slice mode, hit-point detection, granular time-stretch/BPM detection, delay+reverb FX, WAV export; heading toward a Kontakt/LEAP-style instrument.

## Development history in the corpus
The name "WebSamplOmatic5000" itself never appears in ChatGPT previews (it's the Claude-side name), but the sampler lineage is unmistakably here:
- **2025-11-24 → 11-27:** "best libraries for building an audio sampler like Kontakt" → Battery-style drum sampler in one HTML file → "pro version" with per-pad ADSR + start/end trim → feature-mining the BATTERY 4 manual page by page.
- **2025-11-26:** prompt-optimization pass for the sampler build prompt itself.
- **2026-02-28:** wave-editor sampler UI work (Kontakt-class editing surface).
- Sibling build: [[DOOM Sampler]] (Ableton Move clone, Electron).

## Established stack decisions
- Web Audio API core; single-file HTML/CSS/JS deliverables ("all-inclusive in one HTML file") — see [[Browser Audio Architecture]].
- Hardware-emulation aesthetic: NI Battery / Kontakt / Ableton Move as visual + parameter references; manuals used as the parameter spec source-of-truth.
- Role-primed dev prompts ("senior audio software developer…") — see [[Role-Task Prompting]].

## Related lineage
[[DOOM Sampler]] · LEAP browser sampler · SessionMix · WebRig (Guitar Rig 7 emulator) · KR-106 Juno clone · OB-Xd port · TR-909 sequencer · JUCE hybrid sampler plugin. `confidence: preview-only` (lineage names are Claude-side; only sampler threads above are corpus-evidenced)
