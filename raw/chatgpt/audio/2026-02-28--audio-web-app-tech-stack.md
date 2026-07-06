---
title: "Audio Web App Tech Stack"
date: 2026-02-28
cluster: "Audio / DSP / Instruments"
messages: 198
source: chatgpt-export conversations.json (FULL transcript)
---

# Audio Web App Tech Stack

> 198 messages · 2026-02-28 · cluster: Audio / DSP / Instruments

**Semantic neighbors:** [[Audio Programming Expertise]] · [[MIDI Channel Routing Update]] · [[Waveform Zoom and Pan]] · [[Wave Editor Sampler UI]]

## Transcript

**Mike:** ROLE
You are a senior web-audio engineer + technical writer. You can read code, infer architecture from concrete evidence, and document it clearly for other developers.

INPUT
Attached file: “futzverb_wired_loop (14.html)” (single-file app: HTML + embedded CSS + embedded JS).

OBJECTIVE
1) Thoroughly analyze the file.
2) Produce a detailed Markdown document named TECH_STACK.md that describes:
   - Programming languages + standards used
   - Frameworks/libraries (if any) and external dependencies (if none, explicitly confirm)
   - The runtime/software stack (browser APIs, audio/MIDI stack, rendering stack, file I/O, etc.)
   - A high-level architecture map of the audio engine and UI
   - Any identifying “technology fingerprint” of this audio application

ANALYSIS REQUIREMENTS (NO GUESSING)
- Only claim a technology if you can point to evidence in the file.
- If something is uncertain, label it as “Not confirmed from code.”
- Identify both UI stack and audio engine stack.
- Include “evidence anchors”: for each major claim, include a short code reference with either:
  (a) line numbers, OR
  (b) unique function/identifier names and the exact snippet (keep quotes short).

WHAT TO EXTRACT (CHECKLIST)
A) Languages & standards
- HTML5 structure, CSS3 features, JavaScript level (ES6+ patterns), ARIA usage, etc.

B) External deps / frameworks
- Scan for <script src>, <link rel="stylesheet">, imported modules, CDN calls, fonts, etc.
- If none: explicitly state “No external frameworks; vanilla HTML/CSS/JS.”

C) Browser/Web APIs used (identify + describe their role)
- Web Audio API:
  - AudioContext / OfflineAudioContext
  - Node types used (GainNode, BiquadFilterNode, DelayNode, WaveShaperNode, ConvolverNode, DynamicsCompressorNode, OscillatorNode, BufferSource, etc.)
  - Parameter automation patterns (setValueAtTime, setTargetAtTime, ramps, etc.)
- Web MIDI API:
  - navigator.requestMIDIAccess
  - input selection/routing, channel logic, CC mapping, note on/off handling, “panic” behavior
- Canvas 2D for waveform rendering (and any waveform editing / region selection)
- File APIs for import/export:
  - FileReader + decodeAudioData for loading
  - Blob/URL + download for exporting
  - Any WAV encoder implemented in JS (note the functions)

D) Application feature map (what the app “is”)
- What modules exist (e.g., distortion, delay, reverb, dynamics), how they’re represented in UI, and how they map to audio nodes.
- Sample playback system:
  - How many “decks” / sample browsers
  - Playback and looping behavior
  - Region/slice selection + waveform draw
  - Per-deck volume/mute + mixing topology
  - MIDI-triggered playback (pitch via playbackRate, velocity -> gain, polyphony behavior)
- Internal on-screen keyboard / synth engine (if present): oscillator type, envelope, routing.

E) Signal-flow diagram (text-based)
- Provide a clear “Audio Graph” section that describes the routing from:
  Deck A/B sources -> deck gain -> FX chain -> master -> destination
  Include bypass paths and wet/dry summing if present.
- Provide a second diagram for Offline rendering/export pipeline if implemented.

F) Run / dev workflow notes
- How to run locally (e.g., simple static server)
- Browser requirements (e.g., Web MIDI supported browsers; user gesture requirement for AudioContext)
- Any performance/realtime constraints observed

DELIVERABLE: TECH_STACK.md (REQUIRED STRUCTURE)
1. Executive Summary (what this app is, in 3–6 bullets)
2. Languages & Standards
3. Dependencies / Frameworks
4. Runtime Stack (Browser + Web APIs)
5. Audio Engine Stack
   - Node inventory
   - FX modules mapping
   - Real-time graph routing (diagram)
   - Offline render/export routing (diagram)
6. MIDI Stack
   - Web MIDI usage
   - Routing rules (channels/targets)
   - CC mapping + note behavior
7. UI / Interaction Stack
   - Layout approach (CSS patterns)
   - Input handling (pointer/mouse/keyboard events)
   - Canvas waveform UI
8. File I/O + Asset Handling
9. Technology Fingerprint
   - A concise list of keywords/phrases that uniquely describe the app (for tagging / docs)
10. Notable Engineering Notes
   - Strengths (good practices)
   - Risks/edge cases (e.g., audio context resume, node lifecycle, memory, timing, etc.)
11. “Next refactor candidates” (optional but useful): if you see obvious boundaries for splitting code or modularizing.

OUTPUT RULES
- Output ONLY the full contents of TECH_STACK.md in Markdown.
- Use headings, bullet lists, and code fences.
- Keep any direct quotes/snippets short (just enough to prove the claim).
- Be precise and thorough.

**GPT:** # TECH_STACK.md

## 1. Executive Summary

- **What it is:** A **single-file, in-browser audio workstation** focused on a “FutzVerb” FX chain, with a hardware-style UI and **two sampler decks (A/B)** plus an internal synth keyboard. fileciteturn111file4L14-L47 fileciteturn99file0L1-L48 fileciteturn95file2L31-L68  
- **Core audio stack:** **Web Audio API** realtime graph with **distortion (WaveShaper)**, **delay**, **procedural convolver reverb** (generated IR), **dynamics compressor**, plus **master bypass** implemented as a gain crossfade between FX path and clean path. fileciteturn111file3L10-L75 fileciteturn111file0L61-L68  
- **Sample workflow:** Decks support **looping over a user-selected region** and draw the waveform on a `<canvas>`, with region normalized to `[0..1]` (`regionStart`, `regionEnd`). fileciteturn111file1L59-L68 fileciteturn109file0L25-L62  
- **MIDI control:** Uses **Web MIDI** (`navigator.requestMIDIAccess`) for external device input, routing note events to sampler decks / synth and mapping CCs to parameters. fileciteturn111file0L4-L45 fileciteturn100file2L1-L24  
- **Export:** Implements **offline rendering to WAV** using `OfflineAudioContext` and a **custom PCM WAV encoder** (`encodeWavFromChannels`). fileciteturn87file0L1-L51 fileciteturn111file2L75-L88  

---

## 2. Languages & Standards

### HTML
- **HTML5 single document** with a device-styled layout (header, display area, modules). fileciteturn111file4L1-L49  
- **ARIA used** for toggle states (e.g., `aria-pressed` for bypass, loop). fileciteturn111file0L47-L52 fileciteturn111file1L14-L18  

### CSS
- **CSS custom properties (variables)** used for theming. fileciteturn103file0L1-L31  
- Uses **responsive rules** via `@media` queries. fileciteturn103file4L1-L11  
- Layout uses modern CSS features (e.g., grid in parts of UI). fileciteturn103file2L1-L15  

### JavaScript
- **Vanilla JavaScript** (embedded in the HTML).
- Uses **`async`/`await`** for MIDI enable flow and export flow. fileciteturn111file0L4-L14 fileciteturn109file2L87-L90  
- Uses realtime smoothing/automation patterns such as `setTargetAtTime` for parameter changes. fileciteturn111file0L61-L68 fileciteturn111file1L31-L33  

---

## 3. Dependencies / Frameworks

- **No external frameworks/libraries detected**: no `<script src=...>` or external CSS imports were found in the file (single HTML with embedded CSS/JS).  
  - Evidence anchor: the app’s UI + behavior are implemented directly in the file (e.g., inline module markup and JS wiring). fileciteturn111file4L1-L49 fileciteturn111file3L10-L75  

**Conclusion:** **No external frameworks; vanilla HTML/CSS/JS.**

---

## 4. Runtime Stack (Browser + Web APIs)

### DOM / Rendering
- UI is conventional DOM + CSS (device container, modules, buttons, knob containers). fileciteturn111file4L1-L55  

### Web Audio API (Realtime)
- Uses `AudioContext` creation and resume handling. fileciteturn111file0L81-L88  
- Realtime FX graph uses standard node types and connects them into a processing chain. fileciteturn111file3L10-L65  

### Web Audio API (Offline)
- Uses `OfflineAudioContext` for export rendering. fileciteturn87file0L1-L19  

### Web MIDI API
- Requests MIDI access (`navigator.requestMIDIAccess({ sysex: false })`), listens for state changes, and binds an input selector. fileciteturn111file0L4-L45  

### Canvas 2D
- Each deck draws waveform data using Canvas 2D context scaling for device pixel ratio. fileciteturn111file1L75-L88  

### File APIs
- Uses **`FileReader` + `decodeAudioData`** to load samples. fileciteturn97file0L1-L12  
- Uses **Blob + object URLs** for WAV download. fileciteturn87file0L35-L51  

---

## 5. Audio Engine Stack

### 5.1 Node inventory (confirmed)

**Master / routing**
- `GainNode` for FX path (`fxPathGain`), clean bypass (`cleanBypassGain`), master output (`masterGain`), and summing (`sum`). fileciteturn111file3L11-L65  
- Master bypass crossfade uses `setTargetAtTime` on the FX and clean gains. fileciteturn111file0L61-L68  

**Distortion**
- `GainNode` drive (`driveGain`), `WaveShaperNode` (`shaper`) with oversampling, `BiquadFilterNode` tone filter (`toneFilter`), `GainNode` level (`distLevel`). fileciteturn111file3L15-L20 fileciteturn92file0L21-L33  

**Delay**
- `DelayNode` (`delayNode`) + feedback `GainNode` (`delayFeedback`) + `BiquadFilterNode` (`delayFilter`) + wet `GainNode` (`delayWet`). fileciteturn111file3L24-L30  

**Reverb (Convolution)**
- `ConvolverNode` (`convolver`) with a generated impulse response, preceded by `DelayNode` pre-delay (`preDelay`) and a modulation delay path (`modDelay`). fileciteturn111file3L31-L38 fileciteturn111file3L94-L101  
- Post-reverb EQ uses `BiquadFilterNode` low/high cut (`lowCut`, `highCut`). fileciteturn111file3L36-L38  

**Dynamics**
- `DynamicsCompressorNode` (`compressor`) + makeup `GainNode` (`makeupGain`). fileciteturn111file3L1-L8  

**Modulation**
- LFO infrastructure exists in the node map (`lfo`, `lfoGain`, `modDepth`) and is wired into the FX graph object. fileciteturn111file3L58-L60  
  - (Exact modulation routing details are partially outside the excerpt above; where not explicit, see “Not confirmed” notes below.)

**Sampler playback**
- `AudioBufferSourceNode` for playback (`sourceNode`) and per-deck `GainNode` (`sampleGain`) routed to `fx.input`. fileciteturn109file0L25-L62 fileciteturn111file1L25-L33  

**Synth keyboard**
- Internal synth uses `OscillatorNode` + `GainNode` envelope per voice; oscillator type set to `'sawtooth'`. fileciteturn95file2L31-L51  

---

### 5.2 FX modules mapping (UI → audio nodes)

The UI presents **five modules** (Distortion, Pre-Verb, Delay, Reverb, Dynamics) plus a master FX bypass button. fileciteturn111file4L42-L49 fileciteturn111file4L35-L39  

**Distortion**
- Drive: `driveGain.gain` / waveshaper curve generation. fileciteturn89file1L1-L26  
- Tone: `toneFilter.frequency`. fileciteturn89file2L1-L7  
- Level: `distLevel.gain`. fileciteturn89file2L7-L10  

**Pre-Verb**
- Size/Diffusion trigger **reverb IR regeneration** (procedural impulse response). fileciteturn89file0L31-L37 fileciteturn111file3L94-L101  
- Mod controls LFO frequency/depth (confirmed by parameter targets). fileciteturn90file3L5-L8  

**Delay**
- Time: `delayNode.delayTime` fileciteturn89file3L1-L5  
- Feedback: `delayFeedback.gain` fileciteturn89file3L5-L7  
- Mix: `delayWet.gain` fileciteturn89file3L7-L9  

**Reverb**
- Implemented via `ConvolverNode` fed from pre-delay/mod delay and filtered by low/high cut. fileciteturn111file3L31-L38  
- Low/High cut map to `lowCut.frequency` and `highCut.frequency`. fileciteturn89file4L1-L7  

**Dynamics**
- Threshold/Ratio map to `compressor.threshold` and `compressor.ratio`. fileciteturn89file4L7-L11  
- Gain maps to `makeupGain.gain`. fileciteturn89file4L10-L13  

**Master**
- Master maps to `masterGain.gain`. fileciteturn89file4L12-L14  

---

### 5.3 Real-time graph routing (diagram)

**Confirmed wiring (as implemented):** fileciteturn111file3L10-L51

```text
Deck A/B sampleGain  \
Synth voices (osc)    +--> fx.input (Gain)
                      |
                      +--> cleanBypassGain --------------------------+
                      |                                              |
                      +--> fxPathGain -> driveGain -> shaper -> tone -> distLevel
                                        |              |             |
                                        |              |             +--> dryGain ----+
                                        |              |                              |
                                        |              +--> delayNode -> delayFilter -> delayWet --+
                                        |                              ^                 |         |
                                        |                              |                 +-> delayFeedback -> (back to delayNode)
                                        +--> preVerbSendGain -> preDelay -> modDelay -> convolver -> lowCut -> highCut -> wetGain --+
                                                                                                                             |
SUM: dryGain + wetGain + delayWet  -> compressor -> makeupGain -> masterGain -> destination
cleanBypassGain -------------------------------> masterGain -> destination
```

**Master bypass behavior:**
- Crossfades FX path vs clean path using gain targets (does not bypass master gain stage). fileciteturn111file0L61-L68  

---

### 5.4 Offline render/export routing (diagram)

**Export uses `OfflineAudioContext` and recreates a similar FX chain, then encodes a WAV file.** fileciteturn87file0L1-L51 fileciteturn111file2L75-L88  

```text
OfflineAudioContext
  BufferSource (sliced buffer / region)
    -> deckOutGain (Gain)
    -> offlineFx.input
    -> (offline FX chain)
    -> offline.destination
  startRendering()
  -> encodeWavFromChannels(...)
  -> Blob + URL.createObjectURL + download
```

**Offline parameter application evidence (knob snapshot + node values):**
- The export path reads knob defaults (e.g., Drive/Tone/Level etc) and sets node parameters (including waveshaper curve and delay params). fileciteturn105file0L1-L31  

---

## 6. MIDI Stack

### 6.1 Web MIDI usage
- MIDI enable flow requests access with SYSEX disabled and listens to device state changes. fileciteturn111file0L4-L13  
- Input selection is supported (stores selected input id and applies routing). fileciteturn111file0L29-L35  

### 6.2 Routing rules (channels/targets)
- `routeMidiMessage` computes MIDI channel and routes Note On/Off to targets, including sampler deck triggers and internal synth. fileciteturn100file1L1-L14 fileciteturn100file4L7-L18  
- **Not confirmed from code:** any advanced MIDI learn beyond the fixed CC map (no evidence of dynamic CC assignment in the excerpts shown).

### 6.3 CC mapping + behavior
- Fixed CC → parameter map (`ccMap`) exists, mapping CC numbers to named parameters like `Drive`, `Tone`, `Time`, `Master`, etc. fileciteturn82file2L1-L24  
- CC messages update `knobState[param]` then invoke UI/audio updates. fileciteturn100file2L1-L24  

### 6.4 Panic / All notes off
- MIDI off triggers `panicAllMidiNotes()` and routing reset. fileciteturn111file0L18-L24  
- “Panic” behavior includes responding to CC120/CC123 (All Sound Off / All Notes Off) patterns. fileciteturn100file3L1-L12  

---

## 7. UI / Interaction Stack

### 7.1 Layout & styling approach
- CSS variables for theme and typography. fileciteturn103file0L1-L31  
- Responsive adjustments via media queries. fileciteturn103file4L1-L11  

### 7.2 Knobs & input handling
- Knobs exist as `.knob-container` elements with `data-param`, `data-min`, `data-max`, `data-value`. fileciteturn111file4L49-L59  
- Knob interaction is implemented with pointer events (`setPointerCapture`) plus wheel/keyboard handlers. fileciteturn94file0L1-L39 fileciteturn94file2L12-L33  

### 7.3 Module mode buttons
- Each module has a pair of mode buttons with an internal mapping (e.g., distortion: fuzz/crunch; reverb: hall/plate). fileciteturn111file2L4-L11  
- Clicking a mode updates `moduleModeState` and re-applies modes/knobs to the audio graph. fileciteturn111file2L29-L43  
- The HTML for mode buttons exists per module. fileciteturn81file0L1-L15  

### 7.4 Canvas waveform UI
- Waveform drawing uses DPR-aware canvas sizing and the current decoded buffer. fileciteturn111file1L75-L90  
- Region selection affects looping boundaries (`loopStart`, `loopEnd`) derived from `regionStart`/`regionEnd`. fileciteturn111file1L59-L68  

---

## 8. File I/O + Asset Handling

### 8.1 Import (audio sample loading)
- Uses `<input type="file">` (implied by the JS handler) with `FileReader.readAsArrayBuffer`, then `audioContext.decodeAudioData(...)`. fileciteturn97file0L1-L12  

### 8.2 Procedural assets
- Generates a default procedural audio buffer (noise burst with exponential decay) via `audioContext.createBuffer`. fileciteturn111file2L51-L62  

### 8.3 Export (WAV)
- Offline render path encodes to WAV in JS (`encodeWavFromChannels`) using PCM 16-bit style packing via `DataView`. fileciteturn111file2L75-L88  
- Download uses Blob + object URL and triggers an `<a>` download. fileciteturn87file0L35-L51  

---

## 9. Technology Fingerprint

Use these tags/phrases to uniquely identify this app’s stack:

- **single-file web audio workstation**
- **dual sampler decks A/B**
- **canvas waveform region looping**
- **WaveShaper distortion + tone filter**
- **procedural Convolver IR reverb (generated impulse response)**
- **Delay + feedback loop**
- **DynamicsCompressor + makeup gain**
- **master bypass via gain crossfade**
- **Web MIDI CC mapping + note routing**
- **OfflineAudioContext WAV export + custom WAV encoder**

Evidence anchors: dual deck design and encoder functions are present in code. fileciteturn111file2L51-L88 fileciteturn99file0L1-L48  

---

## 10. Notable Engineering Notes

### Strengths (good practices)
- **Smooth parameter transitions** via `setTargetAtTime` (reduces zipper noise for gains/params). fileciteturn111file0L61-L68 fileciteturn111file1L31-L33  
- **Master bypass implemented as crossfade** (click-safe compared to disconnect/reconnect). fileciteturn111file0L61-L68  
- **Offline export** isolates rendering from realtime glitches by using `OfflineAudioContext`. fileciteturn87file0L1-L19  

### Risks / edge cases
- **AudioContext state gating:** The app calls `resume()` when suspended, but any audio action still depends on a user gesture in many browsers. fileciteturn111file0L81-L88  
- **Convolver IR regeneration cost:** Regenerating a stereo IR buffer can be CPU/memory heavy; repeated changes to Size/Diff/Decay schedule regeneration. fileciteturn111file3L94-L101 fileciteturn110file0L49-L56  
- **MIDI support variability:** The app depends on `navigator.requestMIDIAccess`, which is not universally supported across all browsers (general platform constraint). fileciteturn111file0L4-L13  

**Not confirmed from code (explicitly):**
- Any use of `AudioWorklet` / worklet-based DSP (no evidence shown in the extracted anchors).
- Any persistent storage (IndexedDB/localStorage) for presets (no evidence shown in the extracted anchors).

---

## 11. Next refactor candidates (optional)

Based on how responsibilities appear in the file:

1. **Split audio graph construction from UI**  
   - `ensureFxGraph()` (graph build) is tightly coupled to UI state application (`applyAllKnobsToAudio`, `applyModuleModesToAudio`). fileciteturn111file3L67-L75  
2. **Centralize parameter mapping**  
   - Knob state → node params spans multiple branches (Drive/Tone/Delay/etc). Consider a single declarative map `{param: {node, field, transform}}`. fileciteturn89file1L1-L26 fileciteturn89file3L1-L9  
3. **Unify realtime vs offline FX configuration**  
   - Offline export rebuilds and sets parameters separately; extracting a shared “build graph + apply state” function reduces drift risk. fileciteturn87file0L1-L19 fileciteturn105file0L1-L31  
4. **Encapsulate deck state machine**  
   - `createSamplerDeck` holds state, canvas drawing, region logic, MIDI voice maps; could become a `Deck` class/module. fileciteturn111file1L1-L12 fileciteturn109file0L25-L62
