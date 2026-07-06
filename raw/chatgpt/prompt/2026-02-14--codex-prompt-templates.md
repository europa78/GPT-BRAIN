---
title: "Codex Prompt Templates"
date: 2026-02-14
cluster: "Prompt Eng / GPT Building"
messages: 19
source: chatgpt-export conversations.json (FULL transcript)
---

# Codex Prompt Templates

> 19 messages · 2026-02-14 · cluster: Prompt Eng / GPT Building

**Semantic neighbors:** [[Nonfiction Release Prompt]] · [[LLM Autograd Explanation]] · [[PROMPT TEMPLATE]] · [[Sell Side Analyst Investor Prompt]]

## Transcript

**Mike:** role : prompt engineer.  task:  draft expert level prompts related to codex.   ready ?

**GPT:** Yep — here are **expert-level, copy/paste prompt templates for Codex** (CLI or IDE). They’re built around how Codex works best: **issue-style specs + explicit file paths + clear acceptance criteria + “run tests” instructions**. citeturn1view4turn1view1turn1view3

---

## Universal “Codex Prompt Blueprint” (paste, then fill in)
```text
GOAL
- <What you want done in 1–2 sentences>

CONTEXT
- Repo area: <e.g., backend/api, web/app>
- Relevant files (include exact paths): 
  - `path/to/file1`
  - `path/to/file2`
- Related patterns to copy: “Do it like it’s done in `path/to/similar_module`”
- Constraints: <perf, style, architecture, backwards compatibility, etc.>

ACCEPTANCE CRITERIA
- [ ] <User-visible behavior / output>
- [ ] <Edge cases handled>
- [ ] <Tests updated/added>
- [ ] <No breaking changes to X>

TASKS
1) Inspect relevant code paths and summarize what you found (brief).
2) Implement the change with minimal diff.
3) Add/adjust tests.
4) Run: <commands to run> and fix failures.
5) Provide a final summary + list of changed files.
```
Codex responds better when the prompt mirrors a GitHub issue/PR description and references concrete modules/files. citeturn1view4turn1view1

---

## 1) Feature implementation (safe + minimal diff)
```text
Implement: <feature>

Use these files as primary context:
- `...`
- `...`

Match existing patterns from:
- `...` (mirror approach + naming)

Constraints:
- Keep changes localized; avoid broad refactors.
- Follow existing conventions (lint, formatting, error handling).

Acceptance criteria:
- [ ] <...>
- [ ] <...>

After coding:
- Add/adjust tests in `...`
- Run: `...` (tests), `...` (lint/build)
- Final output: summary + checklist + changed files.
```

---

## 2) Bug reproduction → fix → regression test
```text
Bug: <what’s wrong>

Repro steps:
1) ...
2) ...
Expected: ...
Actual: ...

Start by locating the root cause (point to exact code path and why).
Then implement the smallest fix that resolves the bug.
Add a regression test that fails before your change and passes after.

Files likely involved:
- `...`
- `...`

Run:
- `...` (test command)
- `...` (build/lint)
Return: root cause + fix summary + changed files.
```

---

## 3) Refactor without breaking behavior (guardrails)
```text
Refactor goal: <e.g., simplify module X, reduce duplication, improve readability>

Hard rules:
- Do NOT change external behavior.
- Keep the public API identical.
- Changes must be covered by tests (add any missing).

Scope:
- Only touch files under `path/...`
- Do not modify unrelated modules.

Plan:
1) Identify duplication / pain points and propose a refactor approach.
2) Apply refactor in small commits (or small diffs) with tests staying green.
3) Run: `...`

Deliver:
- Before/after summary, risks, and changed files list.
```

---

## 4) Add tests only (no product changes)
```text
Task: Increase coverage for `path/to/module` without changing production behavior.

Requirements:
- Focus on tricky branches + edge cases.
- Prefer table-driven tests where appropriate.
- Keep tests readable; avoid brittle mocks unless necessary.

Target functions / behaviors:
- ...
- ...

Run: `...`
Return: what you tested + where + changed files.
```

---

## 5) “PR-ready” change (branch, commit, PR description)
```text
Make the following change: <...>

When done:
- Ensure the branch name is `dev/<short-feature-name>`
- Commit with a clear message
- Provide a PR description that includes:
  - Problem
  - Solution
  - How tested
  - Screenshots/logs if relevant
Also list the exact files changed.
```
(If you use Codex CLI prompts/skills, Codex supports reusable commands for workflows like draft PR prep. citeturn1view2)

---

## 6) Code review prompt (focused reviewer)
```text
Review this diff / these files:
- `...`
- `...`

Review criteria (prioritize):
1) Correctness + edge cases
2) Security risks
3) Performance traps
4) Readability + maintainability
5) Test quality

Output format:
- Must-fix issues (bulleted)
- Nice-to-have improvements
- Suggested test cases
- Any “gotchas” to watch in production
```
Codex CLI supports running review as a separate agent and can take custom review instructions. citeturn1view3turn0search13

---

## 7) Security audit + fixes (practical)
```text
Security pass on: `path/to/area`

Do:
- Identify top risks (authz/authn, injection, secrets, SSRF, unsafe deserialization, dependency risks)
- Point to concrete lines/files (with paths)
- Propose fixes that align with existing patterns
- Implement fixes + add tests

Constraints:
- Avoid “rewrite everything” solutions.
- Prefer defense-in-depth and least-privilege.

Run: `...`
Return: risk list + mitigations + changed files.
```

---

## 8) Performance profiling + optimization
```text
Optimize: <hot path / slow endpoint / UI lag>

Metrics:
- Current baseline: <numbers if you have them>
- Target: <numbers>

Steps:
1) Identify likely bottlenecks in `...`
2) Add lightweight instrumentation if needed
3) Implement optimizations with minimal complexity
4) Confirm improvements via: `...` (bench/tests)

Constraints:
- No behavior regressions
- Keep readability reasonable

Return: what changed, why it helps, and how to measure.
```

---

## 9) Generate / improve `AGENTS.md` (persistent repo guidance)
```text
Create or update `AGENTS.md` for this repo to make future Codex work more consistent.

Include:
- Naming conventions
- Preferred patterns (state mgmt, error handling, logging)
- “Do/Don’t” rules
- How to run tests/build
- Any known quirks / gotchas
Keep it concise, skimmable, and accurate to the repo.
```
Codex CLI can automatically inject `AGENTS.md` instructions into context; it’s specifically recommended for persistent project rules. citeturn1view0turn1view4

---

## 10) “Best-of-N” solution exploration (pick the best approach fast)
```text
Propose 3 different implementation approaches for: <task>

For each approach:
- Pros/cons
- Risk level
- Estimated diff size (small/medium/large)
- Which files would change

Then recommend one approach and implement it.
```
(OpenAI notes “Best of N” as a way to explore multiple solutions and combine the best parts. citeturn1view4)

---

### Tiny-but-important Codex prompting tip
When you reference files, use **standalone clickable paths** like `src/app.ts:42` (no URI schemes, no line ranges). citeturn1view0

If you tell me what you’re using (Codex CLI vs IDE, language/framework, and the kind of tasks you run most), I’ll tailor these into a **personal prompt pack** (plus reusable skills/commands).

**Mike:** I am using Codex. I am running tasks that optimize the codebase , make upgrades and revisions. I develop audio programs like samplers , sequencers and effects.  1st task is optimize this prompt :  analyze the 4 files that comprise the MOOGERFOOGER application.    it is operating properly, but check for bugs in the code.   afterwards , make recommendations on how to make the application function better

**GPT:** Here’s an optimized Codex prompt that’s **audio-app aware** (real-time safe, performance + correctness) and gives Codex a **clear workflow + deliverables** while keeping changes low-risk.

```text
TASK
You are working inside the MOOGERFOOGER application codebase. There are exactly 4 primary source files that comprise the app:

1) `path/to/file1`
2) `path/to/file2`
3) `path/to/file3`
4) `path/to/file4`

GOAL
The app is currently operating properly. Your job is to:
1) Audit these 4 files for bugs, correctness issues, edge cases, and real-time audio risks.
2) Provide prioritized recommendations to improve stability, audio quality, performance, and maintainability.
3) ONLY make code changes if you find clear bugs or “high-confidence” improvements with minimal risk.

NON-NEGOTIABLE RULES (REAL-TIME AUDIO)
- Treat the audio callback / process block as real-time: no memory allocations, no mutexes/locks, no file I/O, no blocking calls, no logging, no unbounded loops.
- Avoid denormals / subnormal performance traps.
- Any parameter changes must be smoothed (no zipper noise), and must not cause clicks/pops.
- Do not change the core sound character unless fixing a bug.

WHAT TO CHECK (BE EXPLICIT)
Correctness & Bugs
- Null/invalid pointers, out-of-bounds access, incorrect buffer indexing
- Off-by-one in circular buffers, ring buffers, delay lines
- Incorrect sample-rate or buffer-size assumptions
- Parameter range handling (clamping, mapping, units)
- Race conditions between UI thread and audio thread
- State reset / initialization errors (startup, stop/start, sample-rate change)

Audio Quality
- Clicks/pops on parameter changes or bypass
- Parameter smoothing / ramping correctness
- DC offset, denormal protection, filter stability, resonance blow-ups
- Gain staging / clipping risks and limiter behavior (if any)

Performance
- Hot loops in process block
- Avoid repeated expensive ops per sample (pow, exp, trig) if can be precomputed
- SIMD opportunities only if low risk
- Any heap allocations or vector growth during audio processing

Maintainability
- Duplicated code patterns
- Confusing ownership/lifetime
- Missing invariants/assertions in non-audio thread code
- Improve naming and structure only if small, targeted, and safe

WORKFLOW
1) Read the 4 files fully and produce a short “architecture map” (what each file does, main data flow).
2) Identify issues and label each as:
   - BUG (definite)
   - RISK (likely problem in certain conditions)
   - IMPROVEMENT (safe enhancement)
3) For each item, include:
   - Where: exact file + function name (and line numbers if available)
   - Why it matters (impact in audio terms: crash, glitch, CPU spike, incorrect behavior)
   - Fix recommendation (minimal diff approach)
4) If there are BUG items, implement fixes with minimal changes.
5) After fixes, run the project’s standard build/test commands (if present). If no tests exist, at least build successfully and do a quick sanity check pass in code.

DELIVERABLES (FORMAT EXACTLY)
A) Architecture Map (5–10 bullets)
B) Findings (prioritized table):
   - Severity: Critical / High / Medium / Low
   - Type: BUG / RISK / IMPROVEMENT
   - Location: file::function
   - Summary
   - Proposed fix
C) Changes Made (if any):
   - List of files changed
   - Brief explanation per change
D) Recommendations Roadmap:
   - Quick wins (≤1 hour)
   - Medium (half-day)
   - Larger (1–3 days)
E) “Real-time Safety Checklist” confirmation:
   - allocations? locks? logging? denormals? smoothing? (yes/no + notes)

IMPORTANT
If you believe a change might alter the sound, propose it as a recommendation first rather than implementing it.
```

If you paste your 4 actual file paths (or names) plus your build command (even just `npm run build` / `cmake --build` / `xcodebuild` / etc.), I’ll tighten this prompt further so Codex can run it “like a checklist” with fewer assumptions.

**Mike:** is this prompt optimized for codex?

**GPT:** Yes — it’s **close** to Codex-optimized (it has clear goals, constraints, workflow, and structured deliverables). That matches the way Codex is intended to be used: **issue-style tasks + explicit acceptance criteria + run checks + small diffs**. citeturn0search0turn0search1turn0search4

That said, you can make it **more** optimized for Codex by tightening 4 things:

1) **Name the exact files + paths** (Codex performs better when scope is concrete)  
   Your repo’s “4 files” are: `main.js`, `preload.js`, `mf104m-preview.html`, `package.json`. fileciteturn0file1 fileciteturn0file0 fileciteturn0file2 fileciteturn0file3

2) **Split “audit” from “changes” with a gate**  
   Tell Codex: “Report first; only implement Critical/High-confidence fixes.”

3) **Tell it what “better” means** (measurable)  
   For this Electron/WebAudio app: stability, fewer UI/audio glitches, safer IPC, no blocking I/O on hot paths, better error handling, etc. (For example, you currently use `fs.readFileSync` when loading samples, which can block the main process event loop. fileciteturn0file1)

4) **Give runnable checks that won’t hang**  
   Electron GUIs can be hard to launch in headless CI/sandboxes. Give Codex fallback checks (syntax checks, minimal node runs) if `npm run start` can’t run.

---

## A more Codex-optimized version of your prompt (copy/paste)

```text
TASK
Audit and improve the MOOGERFOOGER (MF-104M) Electron/WebAudio app. The app works today; focus on bug hunting and targeted improvements.

SCOPE (ONLY these 4 files unless a fix requires otherwise)
- `main.js`
- `preload.js`
- `mf104m-preview.html`
- `package.json`

GOALS
1) Find bugs, edge cases, and reliability risks.
2) Recommend improvements (prioritized) for stability, performance, and maintainability.
3) Implement ONLY high-confidence fixes (Critical/High) with minimal diffs. Do not change UI or sound behavior unless fixing a bug.

AUDIO / REAL-TIME SAFETY (WebAudio)
- If you find AudioWorklet or any per-sample/per-block audio processing code: treat it as real-time.
  - No allocations in hot loops, no synchronous I/O, no excessive logging, no unbounded loops.
- Avoid clicks/pops: parameter changes should be smoothed where needed.
- Do not change the “character” of the effect unless required to fix an issue.

WHAT TO CHECK
- Electron security & IPC: contextIsolation, nodeIntegration, ipc channels, input validation, exposed APIs.
- Main process responsiveness: avoid sync file ops or heavy work on the main thread.
- UI thread performance: expensive DOM ops, event handlers, leaks.
- Sample loading & memory: large files, base64 handling, cleanup.
- State handling: defaults, reset, persistence, edge cases.

WORKFLOW
1) Read all 4 files and write a brief architecture map (what each file does + data flow).
2) Produce a prioritized findings table:
   - Severity: Critical / High / Medium / Low
   - Type: BUG / RISK / IMPROVEMENT
   - Location: file::function (and line numbers if possible)
   - Why it matters
   - Proposed fix
3) STOP and ensure the plan is minimal and safe.
4) Implement only Critical/High BUG fixes (minimal diff).
5) Run verification:
   - `npm install` (or `npm ci` if lockfile exists)
   - `node -c main.js`
   - `node -c preload.js`
   - If environment supports Electron UI: `npm run start`
6) Output:
   A) Architecture Map
   B) Findings Table (prioritized)
   C) Changes Made (files + why)
   D) Recommendations Roadmap (quick wins / medium / larger)
```

If you want, the next “level up” is adding an **AGENTS.md** with your permanent rules (audio safety, no sound changes unless necessary, how to run checks). Codex is designed to follow those repo-specific instructions automatically. citeturn0search0turn0search4

**Mike:** I am building the Pioneer DJM mixer with Codex.  I am using Serato with it , the audio app is standalone.  I cannot get the waveform to display when playing back an audio file.   write a prompt optimized for Codex that will generate the code to build this into the functionality.

**GPT:** Copy/paste this into Codex (CLI or IDE). It’s optimized to: **find where playback happens**, **decode the loaded audio**, **precompute waveform peaks**, and **render a Serato-style waveform + playhead** in your standalone Pioneer DJM mixer UI.

```text
TASK
Implement a working waveform display (like Serato’s “Waveform screen”) for the standalone Pioneer DJM mixer app. The app can already play an audio file, but the waveform does not appear.

SCOPE
Primary files to inspect/edit (stay within these unless absolutely required):
- `mf104m-preview.html`  (UI)
- `preload.js`           (renderer <-> main bridge)
- `main.js`              (Electron main / file loading)
- `package.json`         (scripts/deps)

GOAL
When an audio file is loaded and playback starts, a waveform must render reliably and update with a moving playhead in sync with the audio’s currentTime.

IMPORTANT CONSTRAINTS
- This is a standalone app using Serato externally; do NOT rely on any Serato APIs or internals.
- Keep changes minimal and localized. No refactors unrelated to waveform or playback.
- Rendering must be performant: precompute peaks once per track; do NOT re-scan the entire buffer every animation frame.

WHAT TO BUILD (MVP)
1) Waveform UI
- Add or wire up a dedicated waveform container in `mf104m-preview.html`.
- Use a `<canvas>` for waveform rendering (supports HiDPI scaling and resize).
- Show:
  - Overall waveform (peaks)
  - A playhead marker (vertical line) that moves during playback

2) Audio Analysis Pipeline
- On file load (wherever audio is loaded/decoded today), obtain decoded PCM:
  - Prefer Web Audio: `AudioContext.decodeAudioData(arrayBuffer)` -> `AudioBuffer`
- Compute waveform “peaks” data once:
  - Create a function like `computePeaks(audioBuffer, pixelsPerSecond | targetWidth)`
  - Use channel max(abs(samples)) per bucket for speed
  - Store peaks arrays in memory for redraw
- Redraw waveform on:
  - track load / decode complete
  - window resize
  - zoom changes (optional; add later if easy)
- Animate playhead with `requestAnimationFrame` using the actual playback clock:
  - If using `<audio>` element: use `audio.currentTime / audio.duration`
  - If using WebAudio BufferSource: track startTime and paused offsets

3) Robustness / Edge Cases
- Handle mp3/wav/flac decode failures gracefully (show message, don’t crash).
- Handle very long files:
  - Downsample peaks to canvas width (don’t allocate enormous arrays).
  - If needed, compute peaks asynchronously (setTimeout chunking is acceptable; Web Worker optional but only if easy).
- Stop old RAF loops when loading a new track or stopping playback.
- Ensure canvas scaling for devicePixelRatio (no blurry waveform).

WHERE TO START (DISCOVERY)
1) Find where audio files are loaded and playback begins:
   - Search for: `AudioContext`, `decodeAudioData`, `new Audio()`, `play()`, `ipcRenderer`, `ipcMain`, `dialog.showOpenDialog`, `fs.readFile*`.
2) Identify the “source of truth” for playback time and duration.
3) Identify (or create) the waveform canvas element and its container.

DELIVERABLES
A) Brief architecture map (5–10 bullets): how file load -> decode -> playback -> render works
B) Implementation:
   - Waveform canvas in the UI
   - Peaks computation utility (pure function)
   - Render function(s): draw waveform + draw playhead
   - Hooked into: track load, play, pause, stop, resize
C) Minimal verification steps:
   - Update `package.json` scripts if needed for running
   - Confirm waveform draws for at least one file type already supported by the app
   - Confirm playhead stays in sync during play/pause/seek

ACCEPTANCE CRITERIA (MUST PASS)
- [ ] Loading an audio file produces a visible waveform within 1–2 seconds for typical tracks.
- [ ] Starting playback moves the playhead smoothly and correctly across the waveform.
- [ ] Pausing stops the playhead; resuming continues from the correct position.
- [ ] Loading a new track clears the old waveform and draws the new one (no ghosting, no multiple RAF loops).
- [ ] Resizing the window keeps waveform visible and correctly scaled (HiDPI safe).

OUTPUT FORMAT
Return:
1) “Findings” (what you found + where playback happens)
2) “Changes made” (files changed + why)
3) “How it works” (short)
4) “Next upgrades” (optional: colored frequency bands, beatgrid markers, hot cues, zoom/scroll)
```

If you want, I can also write a **Phase 2 Codex prompt** that adds the Serato-like extras from your screenshot: **BPM display + beatgrid ticks + hot cue markers + zoom/scroll + multi-deck stacked waveform lanes**—but the above is the clean MVP that gets the waveform rendering working first.
