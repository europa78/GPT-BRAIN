---
title: "Audio Frameworks and Plugins"
date: 2026-01-19
cluster: "Audio / DSP / Instruments"
messages: 20
source: chatgpt-export conversations.json (FULL transcript)
---

# Audio Frameworks and Plugins

> 20 messages · 2026-01-19 · cluster: Audio / DSP / Instruments

**Semantic neighbors:** [[Social Media Image Looping]] · [[LFM2.5-Audio Features]] · [[Sampler Architecture Overview]] · [[Audio Sampler Creation]]

## Transcript

**Mike:** Explain this prompt :  Analyze ,mpaesr and store in your memory .  I will ask you to build audio software based on its knowledge. //**JUCE** (Jules' Utility Class Extensions) stands as the most widely adopted audio framework, [CodeBranch](https://www.codebranch.co/post/exploring-the-juce-audio-framework-in-the-audio-programming-industry) [JUCE](https://juce.com/) used by Adobe, Arturia, Native Instruments, Universal Audio, Waves, and virtually every major plugin company. Now owned by PACE Anti-Piracy, JUCE provides cross-platform abstraction for Windows, macOS, Linux, iOS, and Android from a single C++ codebase. [Riffology](https://riffology.co/2025/01/07/juce-the-framework-powering-modern-audio-development/) It handles plugin format wrapping (VST2, VST3, AU, AAX, LV2, with CLAP coming in JUCE 9), [Cleveraudio](https://cleveraudio.org/developers-getting-started/) audio I/O abstraction across ASIO/CoreAudio/ALSA/JACK, [Wikipedia](https://en.wikipedia.org/wiki/JUCE) and comprehensive DSP building blocks with SIMD optimization.

**PortAudio and RtAudio** offer lower-level audio I/O abstraction. PortAudio powers Audacity's cross-platform audio layer with a C-style API, [PortAudio](https://portaudio.com/) while RtAudio provides a cleaner C++ interface with single-file integration. [Audio-Digital](https://www.audio-digital.net/r-pages/rtaudio-vs-portaudio.html) Both use MIT-style licensing.

For plugin formats, **Steinberg's VST3 SDK** recently transitioned to an **MIT license** (October 2025), eliminating licensing barriers that previously complicated open-source development. **Apple's Audio Unit** framework integrates deeply with macOS/iOS but restricts plugins to Apple platforms. **Avid's AAX** format requires proprietary licensing and PACE digital signing for Pro Tools compatibility. [Avid](https://developer.avid.com/aax/) The emerging **CLAP format** offers MIT licensing, [Wikipedia](https://en.wikipedia.org/wiki/CLever_Audio_Plug-in) [Martinic](https://www.martinic.com/en/blog/clap-audio-plugin-format) a C-only ABI bindable to any language, [u-he](https://u-he.com/community/clap/) and modern multi-core threading.

DSP libraries typically include **FFTW** (GPL, problematic for commercial use), [HISE](https://forum.hise.audio/topic/939/fftw/10) **Intel IPP** (proprietary but free, fastest on Intel CPUs), **KissFFT** (BSD, lightweight), and **Apple vDSP** (always fastest on Apple platforms). [GitHub](https://github.com/breakfastquay/bqfft) GUI options beyond JUCE include **VSTGUI** (Steinberg's BSD-licensed toolkit), **iPlug2** (builds on WDL foundations, supports WebAssembly), [Github](https://iplug2.github.io/) and **DPF** (excellent LV2/Linux support).

## Why C++ dominates real-time audio

C++ claims near-universal adoption in DAW development [Gearspace](https://gearspace.com/board/geekzone/423707-what-programming-language-used-code-daws.html) [Gearspace](https://gearspace.com/board/music-computers/818045-how-daws-plugs-written.html) for compelling technical reasons. Real-time audio callbacks must complete within **strict deadlines**—at 64 samples and 44.1kHz, the audio thread has only **1.45 milliseconds** to process each buffer. Missing this deadline causes audible glitches. [rossbencina](http://www.rossbencina.com/code/real-time-audio-programming-101-time-waits-for-nothing)

Analyzethe following info about programming languages. The cardinal rule of real-time audio: **never allocate memory, lock mutexes, or make system calls** in the audio thread. [rossbencina](http://www.rossbencina.com/code/real-time-audio-programming-101-time-waits-for-nothing) [Danielappelt](https://danielappelt.github.io/talk-real-time-audio-programming/) C++ enables this through:

- **Pre-allocated buffers** at initialization time
- **Lock-free data structures** (atomic operations, single-producer/single-consumer queues) [Rossbencina](http://www.rossbencina.com/tag/lock-free) [Audio](https://conference.audio.dev/session/2025/lock-free-queues-in-the-multiverse-of-madness)
- **SIMD intrinsics** (SSE, AVX, NEON) processing 4-8 samples simultaneously [Wikipedia](https://en.wikipedia.org/wiki/Single_instruction,_multiple_data)
- **Direct hardware access** through ASIO, CoreAudio, and ALSA without abstraction overhead

Garbage-collected languages like Java and C# cannot guarantee these timing constraints. [rossbencina](http://www.rossbencina.com/code/real-time-audio-programming-101-time-waits-for-nothing) Even languages like Python work only for control scripting, never for sample processing.

Thread architecture universally separates GUI and audio threads. The GUI thread handles user interaction, file I/O, and plugin loading at normal priority. The audio thread runs at elevated priority— [rossbencina](http://www.rossbencina.com/code/real-time-audio-programming-101-time-waits-for-nothing) `SCHED_FIFO` on Linux, `THREAD_TIME_CONSTRAINT_POLICY` on macOS, MMCSS Audio category on Windows—processing only audio with zero blocking operations. Communication flows through lock-free queues. [Rossbencina](http://www.rossbencina.com/tag/lock-free) [Danielappelt](https://danielappelt.github.io/talk-real-time-audio-programming/)

## Other major DAWs and their stacks

| DAW | Primary Language | GUI Framework | Notable Architecture |
|-----|------------------|---------------|---------------------|
| **Ableton Live** | C++ | Custom/OpenGL | Boost libraries, Python scripting, Ableton Link SDK |
| **FL Studio** | Delphi/Pascal | VCL/FMX | 2.5M lines of code, 300+ assembly functions for DSP |
| **Logic Pro** | C/C++/Obj-C/Swift | Cocoa/AppKit | Deep Apple framework integration, Metal GPU acceleration |
| **Pro Tools** | C++ | Custom | AAE (Avid Audio Engine), HDX DSP cards, PACE code signing |
| **Cubase/Nuendo** | C++ | VSTGUI | Created VST (1996) and ASIO standards |
| **Studio One** | C++ | CCL Framework | Built by ex-Steinberg devs who wrote VST3 spec |
| **Ardour** | C++ | GTK+2/gtkmm | ~175K lines, fully open-source, MVC architecture |//

**GPT:** That “prompt” is basically telling the assistant:

1) **Ingest the big technical note you pasted**  
2) **Break it into usable, structured knowledge** (frameworks, plugin formats, threading rules, etc.)  
3) **Keep it as a reference for future builds** (so when you say “build me a plugin/DAW/sampler,” the assistant uses these constraints + stack options).

You’ve also got a small typo: **“mpaesr” → “parse.”**

## What the pasted content is trying to “teach” the assistant

### A) Core frameworks (how you build audio apps/plugins)
- **JUCE** is presented as the mainstream “all-in-one” C++ framework for cross-platform audio apps + plugins, including wrappers for common plugin formats and a big GUI layer. It’s owned by **PACE**. citeturn0search2  
- It also claims **JUCE 9 will add CLAP authoring support** (i.e., CLAP output alongside VST/AU/etc.). citeturn0search1  
- **PortAudio** and **RtAudio** are framed as *lower-level* audio I/O layers (closer to the hardware/OS APIs). PortAudio is commonly used in projects like Audacity’s audio backend. citeturn0search15  

### B) Plugin formats + licensing constraints (what you can ship where)
- **VST3**: the note says the SDK moved to an MIT license in Oct 2025—meaning fewer legal barriers for open-source/commercial dev. That’s consistent with Steinberg’s announcement. citeturn0search0turn0search16  
- **Audio Unit (AU)**: Apple ecosystem only (macOS/iOS).  
- **AAX**: Pro Tools ecosystem; proprietary licensing/signing requirements (the note highlights that shipping AAX is not “just compile and go”).  
- **CLAP**: positioned as modern + permissive + C ABI + good multicore story (the note treats it as “the emerging open standard”).

### C) DSP libraries (how you implement effects/analysis fast)
It lists common FFT/DSP options and flags licensing/performance tradeoffs (e.g., GPL complications, proprietary-but-fast options, platform-optimized libs).

### D) The real-time audio “rules of the road” (architecture that won’t glitch)
This is the most important part if you’re building anything that runs inside an audio callback:
- Audio runs on a **high-priority real-time thread** with **tiny deadlines** (milliseconds).  
- Therefore: **don’t allocate memory, lock mutexes, or do blocking system calls on the audio thread**.  
- Use **preallocation**, **lock-free queues/atomics**, and **SIMD** where helpful.  
- Keep **GUI/file I/O** on another thread and communicate via lock-free messaging.

### E) Examples of real products (sanity check)
The DAW table is there to reinforce: “big DAWs are written in performance-first languages and split GUI vs audio engine.”

## What this prompt is *really asking the assistant to do*
If you strip it down:  
- “Treat this as a **reference guide** for audio software architecture and stack selection.”  
- “When I ask you to build audio software, **use these constraints** (real-time rules) and **recommend stacks** (JUCE vs PortAudio/RtAudio, plugin formats, etc.).”

## If you want it to work even better as a prompt
A stronger version would explicitly require a structured output, like:

- A **one-page cheat sheet** (Frameworks / Plugin Formats / Licensing / Real-time rules / Threading pattern)
- A **decision matrix** (When to use JUCE vs PortAudio/RtAudio; when to target VST3 vs CLAP vs AU vs AAX)
- A **real-time safety checklist** to apply to every feature you build

Whenever you’re ready, tell me what you’re building (plugin vs standalone app, target OS/DAWs, and whether you need VST3/AU/AAX/CLAP), and I’ll translate this knowledge into a concrete architecture + project skeleton.

**Mike:** Plugin for the daw , reaper.  The plugin is a vst audio sampler like battery from native instruments.

**GPT:** Cool — a **VST sampler instrument** that runs in **REAPER**, with a **Battery-style pad grid** + multi-output routing.

## 1) Best target format for REAPER
REAPER hosts **VST/VST3 and also CLAP**, so you *can* ship more than one format for users, but for “VST” in 2026 I’d recommend **VST3** as your primary build. citeturn0search9  
Also, the **VST3 SDK is MIT-licensed now**, which makes the legal side cleaner for commercial + open-source dev. citeturn0search2turn0search15  

**Framework choice**
- **JUCE** is the fastest path to a polished sampler (GUI + audio engine + VST3 wrapper in one codebase).
- If you want to *also* ship CLAP later: JUCE has publicly stated **JUCE 9 adds CLAP plugin authoring**. citeturn0search1

## 2) “Battery-like” feature map (what you’re building)
Think of it as 3 layers:

### A) The pad/instrument model
- **16 pads (4×4)** (or 32/64 later)
- Each pad holds:
  - 1+ **layers** (velocity splits)
  - **polyphony** + voice stealing mode
  - **one-shot / gate**
  - **choke group** (hi-hat style)
  - output assignment (**Out 1/2, 3/4, …**)

### B) Sample playback engine (real-time safe)
- **Voice** = one playing instance of a sample
- **VoiceManager** = allocates voices, steals voices, routes per-pad
- **Per-voice DSP** (cheap + common for samplers):
  - gain (velocity → volume curve)
  - ADSR amp envelope
  - optional filter envelope + SVF/ladder filter
  - pitch (repitch via resampling)

Real-time rules you must follow in the audio callback:
- **No malloc/new, no file I/O, no locks** in `processBlock()`
- Preallocate voices/buffers; use atomics or lock-free messaging from UI → audio thread

### C) UI (the “Battery feel”)
- Pad grid with states: empty/loaded/playing/muted/solo
- Drag/drop samples onto pads
- Sample start/end markers, loop toggle, reverse
- Per-pad controls (ADSR, tune, choke, output)

## 3) The REAPER-specific part: multi-outs
Battery’s killer feature is routing different pads to different mixer channels. You’ll want multi-outs.

In practice:
- Your plugin exposes **N stereo output buses** (e.g., 8 stereo outs = 16 channels, or 16 stereo outs like Battery).
- Each pad picks an output bus.
- In REAPER, users then route those outputs to tracks (the workflow is similar to routing Kontakt’s multiple outputs in REAPER). citeturn0search16  

Implementation detail (conceptually):
- Internally, you accumulate audio into per-output buffers, then copy to the host’s output channels at the end of the block.
- Keep routing decisions **atomic** (UI can change pad output without locking).

## 4) MVP build plan (fastest path that feels real)
If you want something usable quickly, build in this order:

### Phase 1 — “Playable sampler”
- 16 pads
- drag/drop WAV/AIFF onto pads
- MIDI note mapping (pad 1 = C1, etc.)
- one-shot playback + per-pad volume
- **fixed polyphony** (e.g., 32 voices) with voice stealing

### Phase 2 — “Battery-ish”
- ADSR per pad
- choke groups
- velocity → volume curve
- per-pad tune (semitones + cents)
- per-pad low/high-pass filter

### Phase 3 — “Production features”
- velocity layers + round-robin
- sample start offset, reverse, loop
- multi-outs (8–16 stereo)
- preset save/recall (serialize pad assignments + parameters into plugin state)

### Phase 4 — “Big leagues”
- disk streaming for huge libraries
- time-stretch modes (separate from pitch)
- mod matrix / LFOs
- built-in FX per pad / per bus

## 5) A practical “engine skeleton” (how to structure it)
Use these core objects:

- `Pad` (parameters + sample layers + output bus id)
- `Sample` (decoded buffer OR streaming handle + metadata)
- `Voice` (playhead, envelope state, pitch ratio, pad pointer)
- `VoiceManager` (fixed array of voices, note-on/off, stealing)
- `Engine` (renders voices into per-bus accumulators, mixes to host outputs)

UI changes should post **parameter updates** to the audio thread through:
- atomics for simple values (gain, tune, bus id)
- a lock-free queue for “load this sample into pad 7” (audio thread swaps in already-prepared pointers)

---

If you tell me two things, I’ll turn this into a concrete technical spec + project skeleton (JUCE layout, buses, voice strategy, parameter list for automation):

1) How many pads: **16 only**, or **16 now + expandable**?  
2) Multi-outs: **8 stereo outs** or **16 stereo outs**?

**Mike:** Are you designing the sampler to be a plugin compatible with reaper ?

**GPT:** Yes — the sampler design I’m describing is **a REAPER-compatible plugin**.

- **Format:** We’d build it as a **VST3 instrument (VST3i)**, which REAPER supports (along with VST2, CLAP, etc.). citeturn0search0  
- **Plugin behavior in REAPER:** It will load in REAPER’s FX browser like any virtual instrument, respond to **MIDI notes**, and output audio to the track.  
- **Battery-style routing:** If you want the Battery workflow, we’ll expose **multiple stereo output buses** so different pads can be routed to different mixer channels inside REAPER (REAPER supports multichannel routing). citeturn0search0  

If you want, I can lock the spec right now to either **8 stereo outs** (common + lightweight) or **16 stereo outs** (Battery-like), and a **16-pad (4×4)** grid to start.

**Mike:** Make it an 8 pad matrix with 4 stereo outs

**GPT:** Yep — updated spec locked:

## Plugin spec (REAPER-compatible)
**Type:** Instrument sampler plugin (VST3 recommended)  
**Pads:** **8-pad matrix** (2×4 grid)  
**Outputs:** **4 stereo outs** → **8 total output channels**  
- Bus 0: **Out 1/2** (default main)
- Bus 1: **Out 3/4**
- Bus 2: **Out 5/6**
- Bus 3: **Out 7/8**

**Default routing:** 2 pads per bus (pads 1–2 → Out 1/2, 3–4 → Out 3/4, 5–6 → Out 5/6, 7–8 → Out 7/8). You can still allow per-pad reassignment in the UI.

**MIDI map (simple MVP):** 8 consecutive notes (e.g., **C1 → G1**) mapped 1:1 to pads.

## Engine implications (what changes with 4 stereo outs)
In `processBlock()`:
- Render voices into **4 stereo accumulators** (or directly into the host buffer at channel pairs).
- For each triggered voice, route its samples into channels:
  - `L = bus*2`, `R = bus*2 + 1`
- Keep it real-time safe: **no allocations / no locks / no disk I/O** inside audio callback.

## REAPER setup (how users actually get the 4 stereo outs)
To access **Out 3/4, 5/6, 7/8** in REAPER, the track must have **8 channels** and the plugin must expose multichannel output. Then users route channels to other tracks as needed.

---

### Optional: clickable UI prototype (browser)
I made a one-page interactive mock UI that matches the design: **8 pads + per-pad output dropdown (4 stereo buses)** and simple bus meters (Web Audio auditioning — not a real VST, just a visual/interaction prototype).

[Download the HTML UI mock](sandbox:/mnt/data/reaper_sampler_ui_mock.html)

If you want, next I’ll translate this exact spec into a **JUCE project skeleton** (buses + pad model + voice manager + state saving) so you can compile a first VST3 build and load it in REAPER.
