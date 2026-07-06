---
title: "Sell Side Analyst Investor Prompt"
date: 2026-02-23
cluster: "Prompt Eng / GPT Building"
messages: 29
source: chatgpt-export conversations.json (FULL transcript)
---

# Sell Side Analyst Investor Prompt

> 29 messages · 2026-02-23 · cluster: Prompt Eng / GPT Building

**Semantic neighbors:** [[Codex Prompt Templates]] · [[PROMPT TEMPLATE]] · [[Codex prompts]] · [[Prompt optimization for demo]]

## Transcript

**Mike:** optimize this prompt :  find everything you can on "Avalon Quantum AI" and "Avalon GloboCare"(ALBT). ALBT is acquiring the company. the goal is to find qualified investors for ALBT and where to locate them. here are some press releases that can aid in your research // https://www.avalon-globocare.com/investors/news-events/press-releases/detail/148/avalon-globocares-subsidiary-files-third-u-s // https://www.avalon-globocare.com/investors/news-events/press-releases/detail/147/avalon-globocare-eliminates-majority-of-debentures-through//

**GPT:** ```text
[ROLE]
You are a sell-side equity research + investor-targeting analyst specializing in microcaps and special situations. You can browse the web, pull SEC filings, and build a ranked investor target list with sourcing routes (“where to find them”) and outreach-ready contact paths.

[MISSION]
Research Avalon GloboCare (NASDAQ: ALBT) and “Avalon Quantum AI” end-to-end, then identify *qualified* investors most likely to buy ALBT (institutions, microcap/AI funds, event-driven funds, PIPE / convert players, family offices, strategic tech/media investors). Produce (1) a fact-checked deal/company snapshot and (2) a ranked investor map showing exactly where to locate these investors and how to contact them using only public/professional info.

[STARTING MATERIALS (must read first)]
- https://www.avalon-globocare.com/investors/news-events/press-releases/detail/148/avalon-globocares-subsidiary-files-third-u-s
- https://www.avalon-globocare.com/investors/news-events/press-releases/detail/147/avalon-globocare-eliminates-majority-of-debentures-through
Also find and read the press release and/or SEC filing covering ALBT’s acquisition/formation of “Avalon Quantum AI” (and any related subsidiary/acquisition details).

[NON-NEGOTIABLE RULES]
- No guessing. Every key claim must be sourced with a link (press release, SEC filing, reputable outlet, official database).
- Separate facts vs. interpretation. Label assumptions clearly.
- Use only public/professional contact info (firm websites, IR emails, LinkedIn, conference attendee lists, broker contact pages). No personal data.
- Use the most recent filings/releases available; include “as-of” dates for every dataset (holders, float, filings, etc.).

[WHAT TO FIGURE OUT]
A) “Avalon Quantum AI” clarity
- What is it legally (subsidiary? acquired entity? brand?), what assets/IP/products it holds, any patents/filings, product positioning, customers/traction (if disclosed), and how it connects to ALBT strategy.

B) ALBT investability snapshot (microcap diligence)
- Business lines, near-term catalysts, risks, dilution/overhang (convertibles/preferred/debt), Nasdaq compliance history/issues, liquidity/float considerations, and any pending corporate actions (mergers, S-4, votes, etc.).
- Build a timeline of major events over the last 12–18 months.

C) Investor discovery (two layers)
1) “Known universe” (already involved)
- Current institutional holders, recent 13F changes, funds that own similar microcap AI/healthtech names, recent PIPE/convert participants (where identifiable from filings), and any banker/broker/advisor ecosystem around the company.

2) “Likely new buyers” (best-fit targets)
- Microcap funds (market cap/volume compatible)
- AI / software thematic funds willing to go small-cap
- Event-driven / special sits (reverse mergers, compliance turns, restructurings)
- Family offices active in small public equities
- Strategic investors in media/content automation, ad-tech, creator economy tooling (if relevant)

D) “Where to locate them” (actionable sourcing map)
For each investor category, specify:
- Best databases/platforms to use (e.g., SEC EDGAR, 13F tools, institutional ownership trackers, conference lists, broker research portals, IR networks, LinkedIn/Sales Nav filters, niche communities).
- Exact search terms + filters (AUM ranges, strategy tags, sector focus, microcap/PIPE keywords, prior holdings screens).
- 5–10 concrete “hunting grounds” (named conferences, newsletters, investor networks, microcap-focused communities, broker events) with links.

[RESEARCH WORKFLOW (do in this order)]
1) Collect primary sources:
   - ALBT IR press releases, SEC filings (10-K/10-Q/8-K, S-4 if relevant), and any exhibits describing the acquisition/structure.
2) Extract and tabulate:
   - Cap structure items (common, preferred, convert terms, maturity/lockups, vote requirements), float/volume notes, and any stated compliance thresholds.
3) Build comps and investor-fit logic:
   - Identify 10–20 comparable public companies (microcap AI software / AI publishing / adjacent) and list who owns them (13F, public holders).
4) Generate investor universe:
   - Start with holders and “adjacent owners,” then expand via strategy/sector screens.
5) Rank and score investors:
   - Score 0–100 using: size fit, strategy fit, history with microcaps, AI/software appetite, event-driven behavior, holding periods, and evidence strength.
6) Produce outreach-ready output:
   - Provide firm-level contact path and best approach angle (1–2 sentences) per target.

[DELIVERABLES (FORMAT EXACTLY)]
1) Executive Snapshot (1 page max)
- What ALBT is today + what “Avalon Quantum AI” is
- Key catalysts (next 3–6 months)
- Key risks/overhang
- 5 bullet “why investors might care” (sourced)

2) Deal/Corporate Timeline (table)
Columns: Date | Event | Source link | Why it matters (1 line)

3) Capital Structure & Overhang (table)
Columns: Instrument | Amount/Terms | Conversion triggers | Potential dilution | Source link | Notes

4) Ranked Investor Target List (minimum 40, aim 80–120 if data supports)
Columns:
Rank | Investor/Firm | Type (microcap fund/FO/PIPE/event-driven/strategic) | Est. AUM | Geo | Strategy fit reason | Evidence (prior holdings/deals) | Public contact path | Confidence (H/M/L) | Sources

5) “Where to Find Them” Sourcing Map
- By category: tools + exact filters + search strings + top venues/communities (with links)

6) Source Appendix
- Grouped: Press releases, SEC filings, databases, articles, patents/IP sources

[QUALITY CHECK BEFORE FINAL]
- Confirm that “Avalon Quantum AI” naming/structure is consistent across SEC + IR.
- Ensure every table row has at least one credible source link.
- Add a short “What we still can’t verify yet” section if any gaps remain.

[OUTPUT STYLE]
- Clear, punchy, investor-grade writing.
- No fluff. Prioritize actionable lists and ranked targets.
- Use bullet points and tables heavily.
```

If you want, I can also compress this into a *short* “one-shot” version (under ~1500 characters) for tools that have smaller prompt windows.

**Mike:** optimize it for research mode

**GPT:** Here’s a **Research Mode–optimized** version you can paste in as-is (built around clear objectives, source-first workflow, and citation-heavy outputs). This structure follows OpenAI’s prompt best practices for clarity, specificity, and structured outputs. citeturn0search0turn0search2turn0search4turn0search12

```text
RESEARCH MODE PROMPT — ALBT / AVALON QUANTUM AI (INVESTOR TARGETING)

Role:
You are a sell-side microcap equity research analyst + investor-targeting specialist. Your job is to produce a source-backed diligence report and a ranked investor target list for ALBT, including where and how to locate/contact those investors using public/professional channels.

Mission:
Find everything material on:
1) “Avalon Quantum AI” (what it is legally + what it does + what assets/IP it holds)
2) Avalon GloboCare (NASDAQ: ALBT)
3) The acquisition/transaction linking ALBT and Avalon Quantum AI
Then build a ranked map of qualified investors most likely to buy ALBT and specify exactly where to find them.

Starting sources (read first):
- https://www.avalon-globocare.com/investors/news-events/press-releases/detail/148/avalon-globocares-subsidiary-files-third-u-s
- https://www.avalon-globocare.com/investors/news-events/press-releases/detail/147/avalon-globocare-eliminates-majority-of-debentures-through
Also locate and read ALL primary documents related to the deal (ALBT press releases + SEC filings + exhibits), including any 8-K, 10-Q/10-K references, S-4/proxy materials (if any), and transaction agreements/exhibits.

Hard rules:
- No guessing. Every key statement must have a clickable source link.
- Separate FACTS vs INFERENCES (label inferences clearly).
- Prefer primary sources (SEC filings, official press releases, court docs, patent databases) over blogs.
- Use most recent data available and stamp “as-of” dates for: cap table, float, volume, holders, compliance status, etc.
- Use only public/professional contact paths (firm websites, IR emails, LinkedIn, conference attendee lists). No personal data.

Research questions to answer (in order):

A) Transaction clarity (the deal)
- What exactly is “Avalon Quantum AI” (subsidiary/acquired entity/brand/JV)? Legal structure + jurisdiction.
- Transaction type and terms: purchase price, consideration (cash/stock/earnout), closing conditions, timelines, required votes, lockups, termination rights.
- What changes operationally/financially for ALBT post-transaction?

B) ALBT investability + overhang (microcap diligence)
- Current business lines and strategy pivot (if any).
- Capital structure + dilution/overhang: convertibles, preferred, warrants, debt, maturity dates, conversion prices, reset features, registration rights.
- Liquidity profile: float, volume, borrow (if available), volatility, historical financing behavior.
- Nasdaq compliance / listing risk (if relevant) and any pending corporate actions.
- 12–18 month catalyst + risk timeline.

C) Avalon Quantum AI substance
- Products/tech claims: what it does, differentiation, target customers, partnerships, traction (only if disclosed).
- IP footprint: patents/trademarks, key personnel, prior entities, related-party links (if any).
- Competitive landscape and realistic TAM framing (source-backed where possible).

D) Investor discovery + “where to locate them”
Build TWO investor universes:

1) Known universe (already involved / adjacent)
- Institutional holders and changes (13F), 13D/13G, insiders, major noteholders if disclosed.
- Any PIPE/convert players or placement agents/advisors connected to ALBT (from filings/exhibits).
- Identify funds holding similar microcap AI/healthtech special situations.

2) Likely new buyers (best-fit targets)
- Microcap/small-cap funds compatible with ALBT liquidity
- Event-driven/special sits funds
- PIPE/convert specialists
- Family offices active in microcap public equities
- Strategic investors aligned with AI/software themes (only if it fits the actual business)

For each category, include “Where to find them” with:
- The exact tools and paths (SEC EDGAR queries, institutional ownership trackers, conference lists, broker event rosters, LinkedIn/Sales Nav filters, microcap newsletters/communities)
- Exact search strings + filters (AUM range, strategy tags, microcap/PIPE keywords, prior holdings screens)
- 5–10 named hunting grounds (conferences, networks, directories) with links

Scoring / ranking:
Create a 0–100 score for each target based on:
- Size/liquidity fit (can they buy/hold ALBT?)
- Strategy fit (microcap, AI, event-driven, PIPE, etc.)
- Evidence (similar holdings, prior PIPEs, microcap track record)
- Recency (recent activity in similar names)
Label confidence: High / Medium / Low.

Deliverables (format exactly):

1) Executive Brief (≤ 1 page)
- What ALBT is today + what Avalon Quantum AI is
- Deal summary in 6–10 bullets
- 3–6 month catalysts
- Key risks/overhang (dilution, compliance, financing needs)
- “Why an investor might care” (5 bullets, sourced)

2) Deal & Corporate Timeline (table)
Date | Event | Why it matters (1 line) | Source link

3) Capital Structure & Dilution/Overhang (table)
Instrument | Key terms | Conversion/warrant mechanics | Potential dilution | As-of date | Source link | Notes

4) Ranked Investor Target List (minimum 50; aim 100+ if data supports)
Rank | Investor/Firm | Type | Est. AUM | Geo | Fit rationale | Evidence (similar holdings/deals) | Public contact path | Score | Confidence | Sources
Also output this table as a CSV block for easy copy/paste.

5) “Where to Find Them” Sourcing Map
Category-by-category playbook with: tools + filters + search strings + top venues (with links)

6) Source Appendix
Press releases | SEC filings | Patents/IP sources | Ownership sources | Articles (reputable only)

7) Gaps / What can’t be verified yet
Short bullet list of unresolved items + what source would confirm them.

If anything critical is ambiguous, ask up to 5 targeted clarifying questions ONLY at the start; otherwise proceed.
```

If you want a shorter “Research Mode mini-prompt” for smaller prompt windows, paste this:

```text
Research Mode: Use primary sources (SEC filings + ALBT IR) to fully map (1) what “Avalon Quantum AI” is legally/operationally and (2) ALBT’s acquisition terms + cap structure/dilution/overhang. Then build a ranked investor target list (50–100+) for ALBT with a 0–100 fit score and confidence rating. For each investor, include evidence (similar holdings/PIPE history), and a public contact path + “where to find them” playbook (EDGAR queries, ownership trackers, conferences, LinkedIn filters, microcap networks). Provide: 1-page exec brief, timeline table, cap structure table, ranked investor CSV, sourcing map, and a gaps section. Start by reading:
https://www.avalon-globocare.com/investors/news-events/press-releases/detail/148/...
https://www.avalon-globocare.com/investors/news-events/press-releases/detail/147/...
Then locate all deal-related 8-K/10-Q/10-K/S-4/exhibits and cite every key claim.
```

**Mike:** write another expert level prompt like you did for the role of a sell-side microcap equity research analyst.    this time optimize it for an audio plugin that is an effects unit and audio sampler.   I am using Codex to work on the project.   see the attached html file for reference. the goal of the prompt is to analyze and debug the existing code , which is already in Codex via GitHub and add additional functionality and features like a delay unit , midi keyboard , etcetera.

**GPT:** Below is an **expert-level Research Mode prompt** you can paste into **Codex** to have it **analyze + debug your existing GitHub codebase** and then **add new features** (Delay unit, MIDI keyboard, sampler upgrades, etc.), using your attached UI prototype as the functional/UX reference fileciteturn0file0.

```text
RESEARCH MODE — AUDIO PLUGIN DEBUG + FEATURE BUILD (FX UNIT + SAMPLER)

Role
You are a senior audio-software engineer (DSP + plugin architecture + UI) and a debugging specialist. You work like a production engineer: reproduce issues, isolate root causes, fix with minimal diffs, add tests, and document changes.

Project Context
- The repo in GitHub (already loaded in Codex) contains an effects unit + audio sampler plugin/app.
- Use the attached HTML prototype as UI/UX + signal-flow reference (modules, knobs, transport, sample browser, region loop, waveform view): futzverb_wired_loop.html.
- Goal: stabilize the code (bugs, audio glitches, state issues), then extend functionality (Delay module, MIDI keyboard, sampler features, routing/presets).

Non-Negotiable Engineering Rules
- Real-time safety: NO heap allocations, locks, blocking I/O, or logging inside audio callback / render thread.
- Parameter updates must be smoothed (zipper-noise prevention) and thread-safe (atomic/lock-free messaging).
- Every fix must include: (a) repro steps, (b) root cause, (c) patch, (d) validation method.
- Prefer small PR-sized commits. Keep code readable and well-commented.

Phase 0 — Identify Stack + Build Health (do this first)
1) Detect project type(s):
   - JUCE (VST3/AU/AAX), CLAP, AudioUnit, standalone app, WebAudio/AudioWorklet, or hybrid.
2) Build + run using repo’s canonical commands (read README / scripts):
   - Install deps, run build, run tests/lints if present.
3) Produce a short “Build Health Report”:
   - OS/toolchain assumptions, build steps, current failures, warnings, failing tests.

Phase 1 — Codebase Recon + Architecture Map
Create a concise architecture map with file paths:
- Audio engine graph: input → FX chain → sampler/voices → output
- Parameter system: how UI params reach DSP (APVTS, param tree, atomics, message queues, etc.)
- Sampler: buffer loading, sample management, voice allocation, pitch/time handling
- MIDI: event ingestion, scheduling, note on/off, velocity, sustain
- UI layer: components, bindings, state persistence (presets)

Deliverable: ARCHITECTURE.md (or a markdown section in your response) with:
- Module list
- Data flow diagram (ASCII ok)
- Threading model (UI thread vs audio thread)
- Known hotspots for RT violations

Phase 2 — Debugging (stabilize before adding features)
A) Reproduce + catalog issues
- Run the app/plugin and capture:
  - Crashes, audio dropouts, denormals, excessive CPU, clicks/pops, parameter desync, stuck notes, memory growth.
- Create an ISSUE MATRIX table:
  - Symptom | Repro steps | Suspected area | Files | Severity | Fix plan

B) High-probability bug classes to check
- Race conditions between UI and audio thread
- Buffer lifetime issues (use-after-free) in sampler/voice playback
- Incorrect sample rate / block size handling
- Parameter smoothing missing or incorrect
- Convolver/IR regen or delay line resizing occurring on audio thread
- MIDI timestamp scheduling mistakes (late/early notes)
- State restore/save bugs (presets not restoring DSP correctly)

C) Fix strategy
- Apply the smallest safe fix first.
- Add unit/regression tests where feasible (DSP tests offline, golden output checks, or deterministic renders).
- Add runtime asserts/diagnostics that are AUDIO-THREAD SAFE (ring-buffered logs or counters read on UI thread).

Phase 3 — Feature Additions (after stability baseline)
Implement these features in this order, each as a clean, reviewable change set.

1) Delay Unit (new FX module)
Requirements:
- Stereo delay with:
  - Time (ms + tempo sync: 1/1, 1/2, 1/4, 1/8, dotted, triplet)
  - Feedback (0–95% with safe limiting)
  - Mix (dry/wet)
  - Filter (HP/LP in feedback path)
  - Optional ping-pong mode
- Must be RT-safe:
  - Pre-allocated delay buffers, no resizing on audio thread
  - Smooth time changes (crossfade or dual-read heads to avoid pitchy artifacts)
- UI:
  - Add a module panel matching the prototype’s knob/button style (like “Distortion / Reverb / Dynamics” blocks)
  - Add bypass + LED state

2) MIDI Keyboard (input + UI)
Requirements:
- MIDI input support for plugin/app:
  - Note on/off, velocity, pitch bend (optional), mod wheel (optional), sustain pedal
- On-screen keyboard UI:
  - Click/touch to trigger notes
  - Octave shift, velocity control
  - Visual feedback for active notes
- Sampler integration:
  - Each note triggers sample playback (mapped or pitched)
  - Polyphony + voice stealing (configurable)
  - Envelope (ADSR) per voice (basic at minimum)

3) Sampler Upgrades
Requirements:
- Sample browser improvements:
  - Drag/drop import, multi-sample support
  - Assign samples to key ranges/velocity layers (basic mapping UI)
- Playback controls:
  - Start/end region (already in prototype concept), loop toggle, crossfade loop
  - Reverse, normalize, gain
  - Pitch + fine tune + root note
- Performance:
  - Background decode/load (non-audio thread), then atomically swap ready buffers

4) Presets + State Management
Requirements:
- Save/recall full state:
  - FX params, delay settings, sampler mappings, last loaded samples (if allowed), UI state
- Provide:
  - Factory presets (at least 8)
  - “Init” preset
- Ensure deterministic restore:
  - After restore, DSP graph matches stored state exactly

Phase 4 — Validation + Acceptance Criteria
For each feature/fix provide:
- Manual test checklist
- CPU usage notes
- Audio quality notes (no clicks on parameter moves; no runaway feedback)
- Automated tests (where feasible):
  - Offline render tests for delay feedback stability
  - MIDI event scheduling tests (note length correctness)
  - State roundtrip tests (save→load equality)

Output Format (respond with these sections)
1) Build Health Report
2) Architecture Map (with paths)
3) Issue Matrix + Fixes (with diffs/commit summaries)
4) Feature Implementation Plan (ordered)
5) Patch Set Summary (what changed + where)
6) Test Plan + Results
7) Next Improvements (optional backlog)

Important: Use the attached HTML prototype as UI/interaction reference (module layout, knob behaviors, transport/loop, waveform region editing). Port the best patterns into the plugin UI and keep the same “hardware module” feel.
```

If you tell me whether the GitHub project is **JUCE/C++** or **WebAudio/JS (AudioWorklet)** (or both), I can tailor the prompt even harder (exact build commands, exact param plumbing, best delay implementation for that stack) — but the above will still work as a Research Mode “first pass” in Codex.

**Mike:** optimize the prompt for Codex , not research mode. the screenshot are the list of files so you can identify the software stack.

**GPT:** Codex tends to work best when the prompt is **explicit about files to open, what to change, and what “done” looks like**. citeturn0search3turn0search0turn0search14  
Since your stack is a **vanilla HTML/CSS/JS Web Audio app** (`index.html`, `css/styles.css`, `js/audio.js`, `js/sampler.js`, etc.), the prompt below is tuned for that. For MIDI, make sure Codex handles **secure-context + user permission gating** for Web MIDI. citeturn0search2turn0search9  
(Delay implementation can use `createDelay()` / `DelayNode` cleanly in Web Audio.) citeturn0search4turn0search21

---

## Paste this into Codex (full “do the work” prompt)

```text
You are working inside my GitHub repo for a Web Audio effects unit + sampler (vanilla HTML/CSS/JS). 
Project files:
- /index.html
- /css/styles.css
- /js/app.js
- /js/audio.js
- /js/sampler.js
- /js/knobs.js
- /js/utils.js

GOALS
1) Analyze + debug the existing codebase (audio stability, UI-state sync, performance, edge cases).
2) Add new functionality:
   - Delay effect module (stereo, feedback, mix, filter in feedback path, optional ping-pong, optional tempo sync)
   - MIDI input support (Web MIDI) + an on-screen MIDI keyboard
   - Sampler upgrades needed to support MIDI note triggering + polyphony

CONSTRAINTS / STYLE
- No external frameworks. Keep the same vanilla structure and coding style.
- Keep changes modular (prefer new small modules/files over giant app.js edits when appropriate).
- Avoid breaking current features. Minimal diffs where possible.
- Audio must be stable: no clicks/pops on parameter changes, no runaway feedback, no CPU spikes.
- Use smooth parameter updates (ramping) for audio params.

STEP 1 — UNDERSTAND CURRENT STATE (DO FIRST)
- Open and read: js/audio.js, js/sampler.js, js/app.js, js/knobs.js, index.html.
- Produce a short internal plan: current audio graph, where FX are connected, how params flow from UI → audio, and how the sampler triggers playback.
- Identify likely bugs:
  - double-connecting nodes, stale references, AudioContext lifecycle issues
  - parameter updates causing zipper noise
  - sampler buffer lifecycle or scheduling issues
  - UI state not matching audio state (bypass toggles, knob resets)
Then FIX the highest-impact issues first.

STEP 2 — ADD DELAY MODULE (WEB AUDIO)
Implement a “Delay” FX block that integrates into the existing FX chain.

Requirements:
- Controls:
  - Time (ms) + optional tempo-sync mode (note values: 1/1, 1/2, 1/4, 1/8, dotted, triplet)
  - Feedback (0–0.95 with safety clamp)
  - Mix (dry/wet)
  - HP/LP filters in the feedback loop
  - Ping-pong toggle (optional)
  - Bypass toggle with visual state
- Implementation details:
  - Build a reusable createDelayModule(audioCtx) that returns:
    { input, output, setParam(name,value), setBypass(bool), getState(), setState(state) }
  - Use smooth automation for time/feedback/mix (e.g., setTargetAtTime / linear ramps).
  - Prevent runaway feedback (hard clamp + optional limiter/saturation in loop).
- UI:
  - Update index.html + styles.css to add a module panel consistent with existing modules.
  - Wire knobs using the existing knobs.js conventions (data-param mapping, etc.).

STEP 3 — ADD MIDI (WEB MIDI) + ON-SCREEN KEYBOARD
A) Web MIDI input:
- Create /js/midi.js (or similar) to:
  - request MIDI access from a user gesture (button click)
  - list MIDI inputs
  - select an input (dropdown)
  - handle noteOn/noteOff, velocity, sustain pedal (CC64), optionally pitch bend
- Route MIDI events to the sampler in a clean interface, e.g. sampler.noteOn(note, vel), sampler.noteOff(note).

B) On-screen keyboard UI:
- Add a compact keyboard to index.html:
  - clickable keys
  - octave +/- buttons
  - velocity slider (or fixed velocity toggle)
  - visual “active note” highlight
- Hook it to the same sampler.noteOn/noteOff path as Web MIDI.

STEP 4 — SAMPLER UPGRADES (MINIMUM VIABLE FOR MIDI)
Enhance js/sampler.js to support:
- Polyphony (configurable max voices, voice stealing)
- Pitching by MIDI note (playbackRate based on root note)
- Simple ADSR (even a lightweight gain envelope is fine)
- If the app already supports regions/looping, ensure MIDI-triggered playback respects region/loop settings.
- Ensure sample loading is safe and doesn’t break playback if a sample is reloaded mid-audio.

STEP 5 — STATE / PRESETS (LIGHTWEIGHT)
- Ensure delay + midi settings can be saved/restored the same way existing params are.
- Add getState()/setState() plumbing for the new modules so app.js can persist them.

HOW TO EDIT (IMPORTANT)
- Keep responsibility separated:
  - audio.js: audio graph + FX modules + param smoothing utilities
  - sampler.js: sample loading + voices + scheduling + MIDI note interface
  - app.js: UI wiring + event listeners + state persistence
  - knobs.js: knob UI only (don’t put DSP logic here)
- If you add new files, update index.html script tags accordingly.

DELIVERABLES
1) A concise summary of what you changed and WHY (grouped by file).
2) A “quick manual test checklist” I can run in the browser:
   - delay on/off, adjust time/feedback/mix without clicks
   - ping-pong works (if implemented)
   - MIDI permission + input selection works
   - on-screen keyboard triggers notes
   - polyphony works, no stuck notes, sustain works
3) Code changes committed as clean logical commits (or clearly separated patches).

START NOW:
- Read the files.
- Fix the top stability bugs.
- Implement Delay → MIDI → Sampler upgrades in that order.
```

---

## Shorter Codex prompt (if you want “one shot”)

```text
Repo is vanilla Web Audio app: index.html, css/styles.css, js/app.js, js/audio.js, js/sampler.js, js/knobs.js, js/utils.js. 
Task: debug current audio/UI issues, then add (1) Delay FX module (stereo, feedback, mix, HP/LP in feedback, optional ping-pong + tempo sync, smooth params, bypass), (2) Web MIDI input + dropdown device selector + permission button, (3) on-screen MIDI keyboard UI, (4) sampler upgrades for MIDI: polyphony + voice stealing, pitch by note, simple ADSR, sustain pedal. 
Keep no frameworks, modular code, clean state persistence. Provide summary by file + manual test checklist.
```

If you want, paste (or upload) your current `audio.js` and `sampler.js` here and I’ll tailor the prompt even tighter to your *actual* function names, param IDs, and existing audio graph so Codex can patch with fewer surprises.

**GPT:** Here’s a **Codex-optimized “do-the-work” prompt** tailored to your **vanilla HTML/CSS/JS + Web Audio** stack (the file tree you showed: `index.html`, `css/styles.css`, `js/app.js`, `js/audio.js`, `js/knobs.js`, `js/sampler.js`, `js/utils.js`). It explicitly tells Codex what to open, where to implement, and what “done” looks like—using your attached UI prototype as the feature/UX reference. fileciteturn1file0

```text
CODEX TASK PROMPT — FUTZVERB (WEB AUDIO FX + SAMPLER) DEBUG + UPGRADE

You are inside my GitHub repo for a vanilla Web Audio effects unit + audio sampler.
File structure:
- /index.html
- /css/styles.css
- /js/app.js
- /js/audio.js
- /js/knobs.js
- /js/sampler.js
- /js/utils.js
Reference UI/spec: futzverb_wired_loop.html (use it as the authoritative UX + control layout reference: knob behavior, module panels, sample browser, waveform region markers, transport play/stop/loop).

PRIMARY OBJECTIVES
1) Stabilize and debug the existing app (audio routing, state sync, performance, edge cases).
2) Add new functionality:
   A) Delay FX module (stereo, feedback, mix, filters in feedback path, optional ping-pong, optional tempo sync).
   B) MIDI input (Web MIDI) + MIDI device selector UI + on-screen MIDI keyboard.
   C) Sampler upgrades needed for MIDI: polyphony, voice stealing, pitch by note, ADSR, sustain pedal.

CONSTRAINTS
- No external frameworks/libraries.
- Keep code modular: DSP/graph in audio.js, sampler engine in sampler.js, UI wiring in app.js, knob UI mechanics in knobs.js, general helpers in utils.js.
- No “giant refactor” unless required—prefer small, safe patches.
- Smooth parameter changes to avoid zipper noise (use AudioParam automation with ramps).
- Web MIDI must be gated by a user gesture and should show a clear message if unsupported or not in a secure context.

=== STEP 0: QUICK REPO RECON (DO THIS FIRST) ===
Open and read these files in this order:
1) js/audio.js  (current audio graph, FX nodes, param setters)
2) js/sampler.js (buffer loading, playback, any voice mgmt)
3) js/app.js     (DOM wiring, events, state/presets if any)
4) js/knobs.js   (how knobs map data-param -> callbacks)
5) index.html + css/styles.css

Write a short internal plan (bullet list) BEFORE coding:
- current audio graph (where source connects, where master gain is, how FX chain is built)
- current sampler trigger path (how play is scheduled, looping, region markers if any)
- how UI params flow into DSP (events → knob handler → audio setters)
- top 3 stability risks you see

=== STEP 1: DEBUG + STABILIZE (PATCH FIRST) ===
Find and fix the highest-impact issues (examples to check):
- AudioContext lifecycle bugs (resume/suspend, multiple contexts, user gesture gating)
- Node connection issues (double-connect, leaks, stale nodes after stop/play)
- Parameter updates causing clicks (no smoothing, abrupt delayTime/filter jumps)
- Sampler buffer lifecycle issues (switching samples mid-playback, broken stop, dangling refs)
- UI state desync (knob value not matching audio param, bypass buttons not reflected)

For each fix:
- add a brief comment “FIX: <problem> <reason>”
- keep changes minimal
- verify with a quick manual test you can run in browser

=== STEP 2: IMPLEMENT DELAY MODULE (AUDIO.JS) ===
Add a reusable delay module in js/audio.js (or new js/delay.js if the project already uses modular imports).
API contract (REQUIRED):
createDelayModule(audioCtx, opts?) returns:
  {
    input: AudioNode,
    output: AudioNode,
    setParam(name, value),
    setBypass(bool),
    getState(),
    setState(state)
  }

Delay requirements:
- Stereo delay (DelayNode per channel or channel splitter/merger)
- Controls:
  - timeMs (1–2000ms) AND optional tempo sync mode
  - feedback (0–0.95 hard clamp; never allow runaway)
  - mix (0–1)
  - hpHz + lpHz inside feedback loop (BiquadFilterNodes)
  - pingPong boolean (optional)
  - bypass boolean
- Must be click-free:
  - use AudioParam automation (setTargetAtTime / linearRampToValueAtTime)
  - time changes: ramp delayTime smoothly; if audible artifacts persist, implement a dual-delay crossfade strategy (two delay lines A/B swapping on big changes)
- Integrate into existing FX chain at a sensible point:
  default: after reverb (or before reverb if that matches current architecture) but make it easy to reorder later.

=== STEP 3: UI FOR DELAY (INDEX.HTML + STYLES.CSS + APP.JS) ===
Add a new module panel “Delay” matching existing module UI conventions (knobs + buttons).
- Add knobs: Time, Feedback, Mix, HP, LP
- Add toggles: Sync, PingPong, Bypass
- Wire knob events through existing knobs.js mechanism (data-param) WITHOUT embedding DSP logic in the DOM layer.

Implementation wiring rules:
- app.js should map UI params -> audio.js module setParam calls.
- knobs.js remains generic (turn drag/wheel into numeric values and fire callbacks).
- Store current values in a central state object (in app.js or a dedicated state module) so state restore is easy.

Tempo sync:
- If project has BPM already: use it.
- If no BPM exists: add a simple BPM control in UI (default 120) and compute delayTime from note value.

=== STEP 4: MIDI (WEB MIDI) + ON-SCREEN KEYBOARD ===
Create /js/midi.js (recommended) with:
- initMIDI() triggered by user gesture (button click)
- listInputs() and select input (dropdown)
- event handlers:
  - noteOn(note, velocity)
  - noteOff(note)
  - cc64 sustain pedal (hold notes until released)
  - optionally pitch bend (nice-to-have)
- Expose a clean interface used by app.js:
  midi.onNoteOn = (note, vel)=>...
  midi.onNoteOff = (note)=>...
  midi.onSustain = (down)=>...

On-screen keyboard UI:
- Add a compact keyboard in index.html:
  - octave - / + buttons
  - velocity slider
  - clickable keys (mouse/touch)
  - highlight active notes
- On-screen keyboard must call the same sampler.noteOn/noteOff path as Web MIDI.

Secure context note:
- If Web MIDI not available, show an inline warning in UI (“Web MIDI not supported / requires HTTPS or localhost”).

=== STEP 5: SAMPLER UPGRADES (SAMPLER.JS) ===
Upgrade sampler.js to support MIDI-triggered polyphonic playback.

Minimum required sampler API:
- sampler.setOutput(node) or sampler.connect(node)
- sampler.loadSample(file|url|arrayBuffer)  (use existing loader)
- sampler.noteOn(midiNote, velocity=0..1)
- sampler.noteOff(midiNote)
- sampler.setRegion(startNorm, endNorm) and sampler.setLoop(bool) if the UI has region markers/loop
- sampler.setRootNote(midiNote) (default 60) for pitch mapping
- sampler.setPolyphony(maxVoices)

Voice model (required):
- Each voice uses:
  AudioBufferSourceNode -> GainNode (envelope) -> sampler output
- ADSR:
  - attack/decay/sustain/release (simple but real)
  - implement release on noteOff; if sustain pedal held, defer release until CC64 up
- Voice stealing:
  - if max voices exceeded, steal oldest or quietest voice cleanly (fast release)

Pitching:
- playbackRate = 2^((note-rootNote)/12)
- ensure region start/end and looping behave correctly per voice

=== STEP 6: STATE / PRESETS (LIGHTWEIGHT) ===
Add getState()/setState() wiring so new Delay + MIDI settings + sampler settings can be persisted.
- Use localStorage if project already does; otherwise add:
  - saveState() / loadState()
- Persist:
  - delay params
  - bpm + sync note value
  - selected MIDI input id (best-effort; may change between sessions)
  - sampler root note, polyphony, ADSR
  - region markers + loop toggle

=== DEFINITION OF DONE (MUST PASS) ===
Manual tests in browser:
1) Load/import sample, play/stop works, no leaks or broken UI.
2) Loop region: dragging region handles updates loop points live without clicks/glitches.
3) Delay on/off: no clicks; time/feedback/mix changes are smooth.
4) Ping-pong (if implemented) clearly swaps echoes L/R.
5) Tempo sync: delay time updates correctly for note values at BPM.
6) MIDI:
   - “Enable MIDI” button requests permission
   - selecting device works
   - note on/off triggers sampler with correct pitch
   - no stuck notes; sustain pedal works
7) On-screen keyboard triggers same behavior as MIDI device.

OUTPUT REQUIRED
- Provide a concise “Changes by file” summary:
  - index.html:
  - css/styles.css:
  - js/audio.js:
  - js/sampler.js:
  - js/app.js:
  - js/knobs.js:
  - js/utils.js:
  - new files (if any):
- Provide a short manual test checklist (7–10 bullets).
- Keep commits/patches logically separated:
  1) stability fixes
  2) delay module
  3) MIDI + keyboard
  4) sampler polyphony/ADSR
  5) state persistence

Start now:
- Read the repo files
- Apply stability fixes first
- Implement Delay → MIDI/Keyboard → Sampler upgrades in that order
```

If you want, I can also give you an **even tighter** Codex prompt that references your repo’s *actual* function names (e.g., whatever `audio.js` currently exports), but I’d need you to paste the current contents of `js/audio.js` and `js/sampler.js` (or let Codex surface them in its response).

**Mike:** break the prompt into individual tasks, as not to overload each session and reduce the chance for errors

**GPT:** Below are **bite-sized Codex task prompts** you can run one per session. Each is scoped to a clean milestone, with “done” criteria and exactly what files to touch—so you don’t overload Codex and reduce risk.

---

## Task 1 — Repo Recon + Audio Graph Map (no code changes yet)
```text
Open and read: js/audio.js, js/sampler.js, js/app.js, js/knobs.js, index.html, css/styles.css.

Output:
1) Audio graph diagram (text/ASCII) showing node order: sampler/source → FX → master → destination.
2) List of modules/effects that exist today and where they’re created.
3) How UI params reach DSP (knobs/buttons → which functions → which AudioParams).
4) Sampler trigger path: how play starts/stops, loop/region handling, scheduling strategy.
5) Top 5 likely bug risks (cracks/clicks, double-connect, context lifecycle, buffer lifetime, state desync) with file+line references.

Do NOT modify files in this task.
```

---

## Task 2 — Fix AudioContext Lifecycle + “Double Connect” Class Bugs
```text
Goal: eliminate the most common Web Audio stability failures (context lifecycle + node connection issues).

Do:
1) In js/audio.js + js/app.js, ensure AudioContext is created once and resumed only from user gesture.
2) Prevent duplicate node connections (double-connect) on repeated Play/Stop or sample reload.
3) Ensure Stop properly disconnects/cleans sources without breaking the graph.

Requirements:
- No audible clicks on play/stop.
- No escalating volume/CPU after repeated play/stop (10 cycles).
- Add minimal comments: “FIX: <what>”.

Deliver:
- Patch summary by file.
- Manual test: steps to reproduce previous issue and confirm fixed.
```

---

## Task 3 — Parameter Smoothing Pass (remove zipper noise)
```text
Goal: make knob/button parameter changes click-free by smoothing all relevant AudioParams.

Do:
1) Identify all param setters (filters, gains, distortion amount, reverb mix, etc.) in js/audio.js.
2) Replace abrupt assignments with ramped automation:
   - audioParam.setTargetAtTime(value, now, timeConstant) OR linearRampToValueAtTime
3) For non-AudioParam values (custom DSP math), implement a lightweight smoothing strategy updated per animation frame or per audio block (if applicable).

Constraints:
- No external libs.
- Keep changes local to audio.js (and minimal wiring in app.js if needed).

Deliver:
- List of smoothed params + chosen ramp method.
- Quick test checklist: sweep knobs fast → no pops.
```

---

## Task 4 — Add Delay FX Module (DSP only, no UI yet)
```text
Implement a reusable Delay module integrated into the existing FX chain.

Files: js/audio.js (and optionally new js/delay.js if repo already uses module pattern)

Required API:
createDelayModule(audioCtx) returns:
{ input, output, setParam(name,value), setBypass(bool), getState(), setState(state) }

Required params:
- timeMs (1–2000ms)
- feedback (0–0.95 clamp)
- mix (0–1)
- hpHz, lpHz (filters in feedback loop)
- pingPong (optional)
- bypass

Implementation notes:
- Stereo delay (split/merge) or dual DelayNodes.
- Smooth delayTime changes (automation). Clamp feedback hard.
- Integrate module into FX chain at a sensible point and expose it to app.js.

Deliver:
- Minimal integration points (how app.js can call it).
- A simple console-free dev test method (e.g., temporary UI stub or default params) to confirm audio passes and delay is audible.
```

---

## Task 5 — Delay UI Panel + Wiring (no MIDI yet)
```text
Add a “Delay” module panel to the UI and wire controls to the Delay module.

Files: index.html, css/styles.css, js/app.js, js/knobs.js (only if needed)

UI requirements:
- Knobs: Time, Feedback, Mix, HP, LP
- Toggles: Sync (can be stub for now), PingPong, Bypass
- Visual style consistent with existing modules.

Wiring requirements:
- Use existing knobs.js pattern (data-param mapping).
- app.js maps UI events → delay.setParam / delay.setBypass
- Ensure UI state reflects actual audio state on load/reload.

Deliver:
- “Changes by file” summary
- Manual tests: adjust delay knobs rapidly → no clicks; bypass works.
```

---

## Task 6 — Add BPM + Tempo Sync for Delay (small, contained)
```text
Implement tempo sync for the Delay module.

Files: js/app.js + js/audio.js (and UI in index.html if BPM control not present)

Do:
1) Add BPM control (default 120) if none exists.
2) Add note value selector (1/1, 1/2, 1/4, 1/8, dotted, triplet).
3) When Sync is enabled, compute timeMs from BPM + note value and drive delay time smoothly.

Deliver:
- Exact formula used and where it lives.
- Manual tests: change BPM and note value → delay time follows smoothly.
```

---

## Task 7 — Add Web MIDI Support (input + device dropdown, no on-screen keyboard yet)
```text
Add Web MIDI input support.

Files: new js/midi.js, plus wiring in js/app.js, small UI additions in index.html

Do:
1) Add “Enable MIDI” button (must be user gesture).
2) Request MIDI access, list MIDI inputs into a dropdown.
3) On selection, listen to that input.
4) Decode:
   - Note On/Off (with velocity)
   - Sustain pedal CC64 (down/up)
5) Expose callbacks:
   midi.onNoteOn(note, vel)
   midi.onNoteOff(note)
   midi.onSustain(isDown)

Deliver:
- Graceful fallback message if MIDI unsupported or not secure context.
- Manual tests: see device list, play notes → events logged to UI (not console) or visibly increment a counter.
(No sampler triggering yet in this task.)
```

---

## Task 8 — Sampler: Add MIDI NoteOn/Off + Polyphony + Voice Stealing
```text
Upgrade sampler.js to support MIDI note triggering and polyphony.

Files: js/sampler.js (minimal glue in js/app.js)

Required sampler API:
- noteOn(midiNote, velocity 0..1)
- noteOff(midiNote)
- setRootNote(midiNote default 60)
- setPolyphony(maxVoices default e.g. 8)

Implementation:
- Each voice: AudioBufferSourceNode → GainNode → output
- Pitch: playbackRate = 2^((note-root)/12)
- Voice stealing: when full, steal oldest (fast release).

Deliver:
- Manual test: with MIDI input, multiple keys produce overlapping notes; no stuck notes.
```

---

## Task 9 — Add ADSR + Sustain Pedal Behavior
```text
Add ADSR envelope and proper sustain pedal handling.

Files: js/sampler.js (+ small UI in index.html/app.js optional)

Do:
1) Implement ADSR per voice using GainNode automation:
   attack, decay, sustain, release (reasonable defaults + optional UI)
2) Sustain pedal:
   - if CC64 down, noteOff does not release immediately
   - when CC64 up, release all sustained voices that have been released logically

Deliver:
- Manual test: hold sustain, tap notes, release keys, then release sustain → notes fade out.
```

---

## Task 10 — On-Screen Keyboard UI (uses same sampler path)
```text
Add an on-screen MIDI keyboard UI.

Files: index.html, css/styles.css, js/app.js (avoid DSP logic changes)

Requirements:
- Click/touch keys trigger sampler.noteOn/noteOff
- Octave +/- buttons
- Velocity slider (or fixed velocity option)
- Highlight active notes

Deliver:
- Manual test: mouse-only playability + visual feedback.
```

---

## Task 11 — State Persistence for Delay + MIDI + Sampler
```text
Implement save/load state (localStorage) for the new modules.

Files: js/app.js (+ module getState/setState in audio.js + sampler.js)

Persist:
- Delay params + bypass + sync settings + BPM/note value
- Sampler: root note, polyphony, ADSR, loop/region if applicable
- MIDI: selected input id (best-effort)

Deliver:
- saveState()/loadState() behavior verified:
  reload page → settings restore correctly
- “State schema” object example in comments.
```

---

### If you want the “lowest error rate” sequence
Run tasks in this order:
1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → 9 → 10 → 11

If you tell me what’s currently **most broken** (e.g., clicks, stop/play glitch, loop markers, sample load), I’ll reorder the tasks to fix the pain fastest.
