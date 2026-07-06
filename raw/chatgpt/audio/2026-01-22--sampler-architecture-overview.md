---
title: "Sampler Architecture Overview"
date: 2026-01-22
cluster: "Audio / DSP / Instruments"
messages: 134
source: chatgpt-export conversations.json (FULL transcript)
---

# Sampler Architecture Overview

> 134 messages · 2026-01-22 · cluster: Audio / DSP / Instruments

**Semantic neighbors:** [[LFM2.5-Audio Features]] · [[Audio Frameworks and Plugins]] · [[Audio Sampler Creation]] · [[DOOM Step Mother synth]]

## Transcript

**Mike:** analyze this sampler and get ready to make edits.

**GPT:** Here’s the current sampler’s architecture + what’s wired vs. stubbed, so we can make clean edits fast.

## 1) What this app is (and how it boots)
- `main.js` initializes **AudioContext**, then constructs **Sampler**, **WaveformRenderer**, **MIDIHandler**, and **UIController**, and sets up the “resume audio on first user interaction” behavior. fileciteturn53file0L15-L56 fileciteturn53file5L19-L35  
- It also exports a debug handle on `window.WebSamplOmatic5000` (sampler/waveform/midi/ui). fileciteturn53file5L82-L88  

## 2) Playback engine (Sampler) — what it actually does today
**Voice model**
- Polyphonic playback via `voices: Map()`, with `maxVoices` and voice-stealing when the limit is reached. fileciteturn53file3L14-L18 fileciteturn53file13L34-L37  
- `noteOn()` checks: sample loaded, probability, note range, velocity range, then creates and starts a voice. fileciteturn53file13L12-L57  

**Pitch + bend**
- Playback rate is computed from `(note - pitchAtStart + pitchOffset + pitchBend*bendRange)` and applied to `BufferSource.playbackRate`. fileciteturn53file13L81-L84  

**Sample region**
- Uses normalized `sampleStart/sampleEnd` (0–1) to compute `startTime/endTime` in seconds, and plays only that region. fileciteturn53file13L85-L90  

**Looping**
- If `params.loop` is enabled, the voice sets `source.loop = true`, with `loopStart = startTime + params.loopStart` and `loopEnd = endTime`. fileciteturn53file13L105-L109  
- There are params for `loopCrossfade`, `portamento`, and `resampleMode`, but (right now) they’re just stored—no engine behavior uses them. fileciteturn53file3L49-L59  

**Note-off behavior**
- `noteOff()` only does anything when `params.obeyNoteOffs` is true. That’s your current “gate vs one-shot” switch. fileciteturn53file13L63-L72  

**Playback position (for visuals)**
- `getPlaybackPosition()` returns progress based on the **first active voice**, using `elapsed` and that voice’s playback rate. (If multiple notes are playing, the playhead is essentially “whichever voice is first in the Map iterator.”) fileciteturn53file12L22-L35  

## 3) UI wiring — what controls are truly connected
**Connected (functional)**
- Marker drag updates waveform markers AND the sampler’s `sampleStart/sampleEnd`. fileciteturn53file6L28-L45  
- MIDI note on/off/pitch-bend routes directly into sampler playback. fileciteturn53file4L20-L36  
- Waveform click emits a seek callback; UI currently only logs it (no preview/transport yet). fileciteturn53file9L61-L72 fileciteturn53file2L50-L55  

**Present in UI, but currently “stubby / not driving audio”**
- `playMode` exists in the DOM cache, but there’s no behavior tied to it yet (no play-mode param in `Sampler`, and no UI mapping). fileciteturn53file1L53-L57 fileciteturn53file3L19-L59  
- Advanced params exist in `Sampler` (`loopCrossfade`, `portamento`, `resampleMode`) but are not implemented in voice creation/playback. fileciteturn53file15L1-L9  

## 4) Waveform renderer — what it supports
- Canvas waveform rendering, zoom/scroll, markers, playhead position, and a click-to-seek signal (`onSeek(position)`). fileciteturn53file9L54-L84  
- `loadAudioBuffer()` regenerates peaks and redraws. fileciteturn53file9L100-L105  

## 5) Export path (already working)
- `Sampler.exportWAV(startPos,endPos,filename)` creates a WAV buffer and triggers a download via a Blob URL. fileciteturn53file12L55-L97  

## 6) “Ready to edit” map (where changes should go)
If you tell me the first edit you want, here’s exactly where it lands:

- **New playback behaviors (play modes, note-off override, choke groups, portamento, loop crossfade, multi-outs)** → `sampler.js` (voice lifecycle + routing) fileciteturn53file13L12-L57  
- **Hook UI controls to real behavior** → `ui.js` (bind events → `sampler.setParam()` or new sampler methods) fileciteturn53file7L21-L49  
- **Waveform interactions (click-to-preview, slice audition, drag-to-select)** → `waveform.js` + `ui.js` callback wiring fileciteturn53file2L47-L55 fileciteturn53file9L61-L72  
- **MIDI mapping / filtering** → `midi.js` + `ui.js` midi callbacks fileciteturn53file4L20-L36  

## 7) A couple of fast “high impact” edits that fit this design well
These are the cleanest next steps given how the code is structured:
- **Add a real Transport (Play/Stop) for previewing the current region**, using the existing waveform click + playhead plumbing. fileciteturn53file2L50-L55 fileciteturn53file12L22-L35  
- **Make `playMode` actually do something** by mapping it onto existing concepts (`loop`, `obeyNoteOffs`, and/or a “toggle voice” mode). fileciteturn53file1L53-L57 fileciteturn53file13L63-L72  
- **Implement “note-off override” (auto-release after N ms)** by scheduling a release/stop at noteOn-time (instead of relying on noteOff). (Right now, noteOff is the only release trigger when `obeyNoteOffs` is on.) fileciteturn53file13L63-L72  

Say the first edit you want (e.g., “transport + click-to-preview”, “play modes”, “loop crossfade”, “note-off override”), and I’ll implement it cleanly across the right files.

**Mike:** will the current sampler change functionality in any way?

**GPT:** Not unless we change code.

Right now, **everything it can do is defined by those JS/CSS/HTML files** you uploaded. Just “analyzing” it doesn’t alter behavior.

If you mean *from edits we’re about to make*: **yes, the sampler’s functionality will change**, but only in the specific areas we modify. For example:

- If we add a **Transport (Play/Stop)**, you’ll gain preview playback controls (new functionality), but pad/MIDI playback stays the same unless we touch it.
- If we wire up **Play Mode**, that can change how notes behave (one-shot vs gated vs toggle), depending on how we implement it.
- If we implement **loop crossfade / portamento**, that changes how the engine plays notes (smoother loops/glides), but again only in that subsystem.

If you tell me the exact change you want first (Transport, Play Mode, loop behavior, etc.), I’ll keep it **surgical**: minimal diffs, and I’ll call out exactly what will and won’t change before I show you the patch.

**Mike:** make sure the edits stay surgical.

**GPT:** Got it — we’ll keep every change **surgical and non-breaking by default**.

Here’s how I’ll handle edits so nothing “mysteriously” changes:

### Guardrails for surgical edits
- **No refactors / no renaming / no moving files** unless it’s absolutely required.
- **Preserve current defaults**: any new behavior ships **off by default** (feature-flagged) or matches existing behavior 1:1.
- **Additive-only API**: new params/methods get safe defaults; existing calls keep working unchanged.
- **Touch the minimum surface area**:
  - audio behavior → `sampler.js` only
  - UI bindings → `ui.js` only
  - MIDI mapping → `midi.js` only
  - visuals → `waveform.js` only
- **Small diffs**: I’ll present changes as a tight patch (what lines changed and why).
- **Regression checklist after each edit** (quick sanity matrix):
  - load sample → play via UI/MIDI → stop/reload → export WAV → loop on/off → obeyNoteOffs on/off.

### How I’ll deliver each edit
1. **State the exact behavioral delta** in one sentence (what changes / what doesn’t).
2. Provide a **minimal patch** (only the files/lines necessary).
3. Include a **rollback switch** if the change affects playback (feature flag or param).
4. Confirm the same test steps still pass.

When you’re ready, tell me the *first* surgical edit you want (e.g., Transport Play/Stop preview, playMode wiring, loop improvements, etc.), and I’ll implement it with those rules.

**Mike:** 1. add a Transport (Play/Stop).   2. add one-shot vs gated sample play back for each slice region.

**GPT:** Perfect. Both of these can be added **surgically**, without changing existing pad/MIDI behavior unless explicitly enabled.

Below is the **exact plan**, what changes, what does *not* change, and where code will be touched.

---

# ✅ Goal Summary (Surgical Scope)

### 1️⃣ Transport (Play / Stop)
- **Purpose**: preview the currently selected slice/region
- **Scope**: UI + Sampler (preview-only voice)
- **Default behavior**: OFF / idle → does nothing unless user clicks Play

### 2️⃣ One-Shot vs Gated playback (per slice region)
- **Purpose**: Battery/MPC-style behavior
- **Scope**: Sampler voice lifecycle
- **Default behavior**: **UNCHANGED**
  - If you do nothing, pads behave exactly as they do now

---

# 1️⃣ Transport (Play / Stop) — Surgical Design

### What it WILL do
- Play the **currently selected region** (`sampleStart → sampleEnd`)
- Use **same pitch = original**, no MIDI note mapping
- Update waveform playhead
- Stop cleanly on Stop or second Play

### What it will NOT do
- Will **not** interfere with MIDI notes
- Will **not** steal voices from pads
- Will **not** change existing `noteOn / noteOff` logic

### Implementation (minimal)

#### A. `sampler.js` (additive only)
Add a **preview voice**, separate from normal voices:

```js
// new, isolated preview state
this.previewSource = null;
this.isPreviewPlaying = false;
```

New methods:
- `playPreview()`
- `stopPreview()`

These:
- create a `BufferSource`
- play exactly the current region
- no velocity, no pitch bend
- no Map storage
- no MIDI interaction

👉 **No changes to `noteOn()` / `noteOff()`**

---

#### B. `ui.js`
- Bind Play / Stop buttons
- Call `sampler.playPreview()` / `sampler.stopPreview()`

If waveform click already exists → optional follow-up to seek preview (can stay logged for now).

---

#### C. `waveform.js`
- Already supports playhead drawing
- We’ll just feed it time when preview is active

---

# 2️⃣ One-Shot vs Gated Playback (Per Slice)

### Definitions (industry-standard)
- **One-Shot**: note plays full slice even if noteOff happens
- **Gated**: note stops when noteOff occurs

### Current behavior (baseline)
- Controlled globally by `obeyNoteOffs`
- No per-slice control

### Surgical extension
We **do NOT remove or change** `obeyNoteOffs`.

Instead we add:

```js
slicePlayMode: 'oneshot' | 'gated'
```

Default:
```js
slicePlayMode = 'oneshot'
```

Which maps cleanly to existing logic:

| Mode     | Behavior |
|--------|----------|
| one-shot | ignore noteOff |
| gated    | obey noteOff |

---

### Where this lives

#### A. `sampler.js`
Minimal change inside `noteOff()`:

```js
if (this.params.slicePlayMode === 'gated') {
  // existing obeyNoteOff logic
}
```

No timing changes  
No envelope changes  
No loop changes  

> This keeps **existing patches identical** unless slicePlayMode is switched.

---

#### B. `ui.js`
- Add a simple toggle / dropdown per slice:
  - One-Shot
  - Gated
- Map directly to:
```js
sampler.setParam('slicePlayMode', value);
```

---

# 🔒 Safety Guarantees

✅ Existing projects behave the same  
✅ MIDI playback unchanged  
✅ No refactors  
✅ No timing drift  
✅ No voice stealing changes  
✅ Export still works  

If you never touch:
- Transport buttons
- Slice play mode toggle  

→ **nothing changes**

---

# Next Step (Execution Order)

I recommend we implement in this order:

1. **Transport Play/Stop** (preview only)
2. **slicePlayMode flag** (one-shot vs gated)
3. Optional: waveform click → preview seek (later)

👉 Say **“Implement step 1”** and I’ll give you the exact patch for:
- `sampler.js`
- `ui.js`

tight diff, commented, rollback-safe.

**Mike:** What are the next logical functionality updates to this sampler?

**GPT:** Here are the **next logical functionality upgrades** for this sampler, in the order that typically gives the biggest “Battery-style” jump in usefulness, while still staying **surgical** (small, additive changes; defaults unchanged).

## Quick wins (high impact, low risk)
1. **Save/Load “Kit” (preset)**
   - Persist: sample URL/name, slice start/end, loop settings, play mode (one-shot/gated), tuning, volume/pan.
   - Implementation: JSON export/import + `localStorage` (and optional “download .json”).

2. **Per-slice volume + pan + mute/solo**
   - Adds immediate “mixer feel” without reworking the engine.
   - Implementation: per-slice gain node + stereo panner node.

3. **Choke groups (aka “mute groups”)**
   - Essential for hi-hats, open/closed behavior, vinyl chops, etc.
   - Implementation: on noteOn, stop any active voices in the same choke group.

4. **Attack/Release (mini envelope)**
   - Makes clicks disappear and makes gated mode feel musical.
   - Implementation: gain ramp on voice start/stop (still lightweight).

5. **Better playhead logic**
   - Right now visuals track “first active voice.” Better is: track preview voice separately + optional “most recent voice.”
   - Pure UX improvement.

## Next tier (real sampler workflow)
6. **Multi-slice “pad bank”**
   - Instead of one global slice region, store **N slices**, each with its own region + settings.
   - UI: pads list/grid; click a pad selects its slice (updates markers).

7. **MIDI mapping per slice**
   - Assign slice → MIDI note (and optionally velocity range).
   - Unlocks actual drum-pad behavior.

8. **Round-robin / randomization (per slice)**
   - For humanized drums or varied chops (multiple samples per pad).
   - Implementation: sample list per slice + selection strategy.

9. **Resample / “Render slice to WAV”**
   - Offline bounce each slice (or full kit) for quick export workflows.

10. **Reverse + Normalize + Trim Silence**
   - Fast sound-design tools that users expect.
   - Reverse is trivial; normalize/trim require offline buffer processing but still straightforward.

## Advanced (bigger sound + complexity)
11. **Loop crossfade (you already have the param)**
   - Makes loops seamless.
   - Requires either (a) dual sources with crossfade, or (b) an AudioWorklet solution for truly clean crossfades.

12. **Portamento / glide (you already have the param)**
   - Musical for pitched chops.
   - Implementation depends on whether you treat pads as monophonic per slice or per MIDI note.

13. **Time-stretch / warping**
   - “Play slice at project tempo” is a major upgrade, but it’s the hardest:
   - Options:
     - Quick/cheap: playbackRate-only (changes pitch)
     - Better: granular stretch (AudioWorklet)

14. **Built-in sequencer + metronome + quantize/swing**
   - Turns it into a groove tool.
   - Transport becomes “real,” with step input + MIDI record.

15. **Effects per slice / bus FX**
   - Filter + drive + delay/reverb sends.
   - Keep it surgical by starting with: one biquad filter + one send reverb bus.

## If you want the cleanest roadmap for *your* current edits
Since you’re already adding **Transport + one-shot/gated**, the most logical follow-ups are:

1) **Kit Save/Load** (so you don’t lose slice settings)  
2) **Per-slice gain/pan + choke groups** (instantly feels “real”)  
3) **Pad bank with per-pad slice regions** (turns it into an actual multi-pad sampler)

If you say “pick the next 3,” I’ll turn that into a **surgical implementation plan** (exact files touched, new params, UI elements, and how we keep defaults unchanged).
