---
title: "Build audio sampler"
date: 2025-11-23
cluster: "Audio / DSP / Instruments"
messages: 50
source: chatgpt-export conversations.json (FULL transcript)
---

# Build audio sampler

> 50 messages · 2025-11-23 · cluster: Audio / DSP / Instruments

**Semantic neighbors:** [[New samples - AGENT]] · [[Agent mode - sample packs and synths]] · [[Tech stack for soft synth]] · [[Render sampler UI]]

## Transcript

**Mike:** I want to create an audio sampler like battery or kontakt .  Features should include sample loading browser, pitch control, tune parameter, eq, 32 note key board, effects like delay and lo-fi , ADSR envelope.  Use the best audio libraries like Javascript.

**GPT:** You can 100% build this in the browser with modern JS – think “mini-Kontakt” powered by Web Audio / Tone.js.

I’ll give you:

1. **A clean architecture** for your sampler  
2. **A working starter project (HTML + JS)** with:
   - Sample loader
   - 32-note keyboard
   - Pitch & fine tune
   - ADSR envelope
   - EQ
   - Delay
   - Lo-fi (bitcrusher)

---

## 1. Tech stack / architecture

### Core stack

- **Web Audio API** – low-level audio graph (nodes, filters, envelopes).
- **Tone.js** – high-level wrapper that makes envelopes, FX, and scheduling much easier.
  - `Tone.Player` – plays your loaded sample
  - `Tone.AmplitudeEnvelope` – ADSR
  - `Tone.Filter` / `Tone.EQ3` – EQ
  - `Tone.FeedbackDelay` – delay
  - `Tone.BitCrusher` – lo-fi

You can keep the UI in **vanilla HTML/CSS** for now; if you want to go React later, this logic will still work.

### Signal flow

Think of it like a modular synth patch:

```text
[Sample Player] 
   -> [BitCrusher] (Lo-fi)
   -> [EQ3 / Filter]
   -> [Delay]
   -> [Amplitude Envelope (ADSR)]
   -> [Master Output]
```

Each time you hit a key:

1. Create a **Player** instance with the loaded sample.
2. Compute **playbackRate** from key + pitch + tune.
3. Route it through FX → envelope → destination.
4. Trigger the envelope.

---

## 2. Minimal working prototype (HTML + JS)

### `index.html`

Save this as `sampler.html` and open it in a browser (Chrome is best for Web Audio dev):

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Web Sampler Prototype</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style>
    body {
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      background: #050711;
      color: #f5f5f5;
      margin: 0;
      padding: 20px;
    }

    h1 {
      margin-bottom: 0.5rem;
    }

    .section {
      margin-bottom: 1.5rem;
      padding: 1rem;
      border-radius: 8px;
      background: #101321;
    }

    label {
      font-size: 0.85rem;
      display: block;
      margin-bottom: 0.2rem;
    }

    input[type="range"] {
      width: 100%;
    }

    .row {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .col {
      flex: 1 1 180px;
      min-width: 160px;
    }

    #keyboard {
      display: grid;
      grid-template-columns: repeat(16, minmax(20px, 1fr));
      gap: 4px;
      margin-top: 0.5rem;
    }

    .key {
      padding: 10px 0;
      text-align: center;
      border-radius: 4px;
      background: #2b3150;
      cursor: pointer;
      font-size: 0.75rem;
      user-select: none;
      transition: transform 0.05s ease, background 0.05s ease;
    }

    .key.active {
      background: #4f5dff;
      transform: translateY(2px);
    }

    .small {
      font-size: 0.75rem;
      opacity: 0.75;
    }

    button {
      padding: 0.4rem 0.8rem;
      border-radius: 4px;
      border: none;
      cursor: pointer;
      background: #4f5dff;
      color: #fff;
      font-weight: 500;
    }

    button:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }
  </style>
</head>
<body>
  <h1>Web Sampler Prototype</h1>
  <p class="small">Single-sample, 32-note keyboard with pitch, ADSR, EQ, delay & lo-fi.</p>

  <!-- SAMPLE BROWSER -->
  <div class="section">
    <h2>Sample</h2>
    <input type="file" id="sampleFile" accept="audio/*" />
    <p class="small" id="sampleStatus">No sample loaded.</p>
    <button id="unlockAudio">Initialize Audio (required once)</button>
  </div>

  <!-- GLOBAL PITCH / TUNE -->
  <div class="section">
    <h2>Pitch</h2>
    <div class="row">
      <div class="col">
        <label for="transpose">Transpose (semitones)</label>
        <input type="range" id="transpose" min="-24" max="24" value="0" />
        <span class="small" id="transposeVal">0 st</span>
      </div>
      <div class="col">
        <label for="fineTune">Fine Tune (cents)</label>
        <input type="range" id="fineTune" min="-100" max="100" value="0" />
        <span class="small" id="fineTuneVal">0 cents</span>
      </div>
    </div>
  </div>

  <!-- ADSR -->
  <div class="section">
    <h2>ADSR Envelope</h2>
    <div class="row">
      <div class="col">
        <label for="attack">Attack (s)</label>
        <input type="range" id="attack" min="0.001" max="2" step="0.001" value="0.01" />
        <span class="small" id="attackVal">0.01 s</span>
      </div>
      <div class="col">
        <label for="decay">Decay (s)</label>
        <input type="range" id="decay" min="0.001" max="2" step="0.001" value="0.2" />
        <span class="small" id="decayVal">0.2 s</span>
      </div>
      <div class="col">
        <label for="sustain">Sustain (0–1)</label>
        <input type="range" id="sustain" min="0" max="1" step="0.01" value="0.8" />
        <span class="small" id="sustainVal">0.8</span>
      </div>
      <div class="col">
        <label for="release">Release (s)</label>
        <input type="range" id="release" min="0.01" max="5" step="0.01" value="0.5" />
        <span class="small" id="releaseVal">0.5 s</span>
      </div>
    </div>
  </div>

  <!-- FX -->
  <div class="section">
    <h2>FX</h2>
    <div class="row">
      <div class="col">
        <label for="delayTime">Delay Time (s)</label>
        <input type="range" id="delayTime" min="0" max="1" step="0.01" value="0.25" />
        <span class="small" id="delayTimeVal">0.25 s</span>
        <label for="delayFeedback">Delay Feedback</label>
        <input type="range" id="delayFeedback" min="0" max="0.9" step="0.01" value="0.3" />
        <span class="small" id="delayFeedbackVal">0.3</span>
      </div>
      <div class="col">
        <label for="bitDepth">Lo-Fi Bit Depth</label>
        <input type="range" id="bitDepth" min="1" max="16" value="8" />
        <span class="small" id="bitDepthVal">8-bit</span>
      </div>
      <div class="col">
        <label for="eqLow">EQ Low (dB)</label>
        <input type="range" id="eqLow" min="-24" max="24" value="0" />
        <span class="small" id="eqLowVal">0 dB</span>

        <label for="eqMid">EQ Mid (dB)</label>
        <input type="range" id="eqMid" min="-24" max="24" value="0" />
        <span class="small" id="eqMidVal">0 dB</span>

        <label for="eqHigh">EQ High (dB)</label>
        <input type="range" id="eqHigh" min="-24" max="24" value="0" />
        <span class="small" id="eqHighVal">0 dB</span>
      </div>
    </div>
  </div>

  <!-- KEYBOARD -->
  <div class="section">
    <h2>Keyboard (32 notes)</h2>
    <p class="small">Click to play. (You can map computer keys later.)</p>
    <div id="keyboard"></div>
  </div>

  <!-- Tone.js CDN -->
  <script src="https://unpkg.com/tone@latest/build/Tone.js"></script>
  <script>
    // ----- STATE -----
    let sampleUrl = null;
    const NUM_KEYS = 32;
    const ROOT_INDEX = 16; // middle of the 32 keys = "root" note

    // FX & envelope nodes (shared)
    const bitCrusher = new Tone.BitCrusher(8);
    const eq = new Tone.EQ3(0, 0, 0);
    const delay = new Tone.FeedbackDelay(0.25, 0.3);
    const ampEnv = new Tone.AmplitudeEnvelope({
      attack: 0.01,
      decay: 0.2,
      sustain: 0.8,
      release: 0.5
    });

    // Connect chain: FX -> Envelope -> Master
    bitCrusher.chain(eq, delay, ampEnv, Tone.Destination);

    // ----- DOM REFS -----
    const sampleFileInput = document.getElementById("sampleFile");
    const sampleStatus = document.getElementById("sampleStatus");
    const unlockBtn = document.getElementById("unlockAudio");
    const keyboardEl = document.getElementById("keyboard");

    // Controls
    const transpose = document.getElementById("transpose");
    const fineTune = document.getElementById("fineTune");
    const attack = document.getElementById("attack");
    const decay = document.getElementById("decay");
    const sustain = document.getElementById("sustain");
    const release = document.getElementById("release");

    const delayTime = document.getElementById("delayTime");
    const delayFeedback = document.getElementById("delayFeedback");
    const bitDepth = document.getElementById("bitDepth");
    const eqLow = document.getElementById("eqLow");
    const eqMid = document.getElementById("eqMid");
    const eqHigh = document.getElementById("eqHigh");

    // Value labels
    const transposeVal = document.getElementById("transposeVal");
    const fineTuneVal = document.getElementById("fineTuneVal");
    const attackVal = document.getElementById("attackVal");
    const decayVal = document.getElementById("decayVal");
    const sustainVal = document.getElementById("sustainVal");
    const releaseVal = document.getElementById("releaseVal");
    const delayTimeVal = document.getElementById("delayTimeVal");
    const delayFeedbackVal = document.getElementById("delayFeedbackVal");
    const bitDepthVal = document.getElementById("bitDepthVal");
    const eqLowVal = document.getElementById("eqLowVal");
    const eqMidVal = document.getElementById("eqMidVal");
    const eqHighVal = document.getElementById("eqHighVal");

    // ----- INIT AUDIO -----
    unlockBtn.addEventListener("click", async () => {
      await Tone.start();
      unlockBtn.disabled = true;
      unlockBtn.textContent = "Audio initialized";
    });

    // ----- SAMPLE LOADING -----
    sampleFileInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (!file) return;
      if (sampleUrl) {
        URL.revokeObjectURL(sampleUrl);
      }
      sampleUrl = URL.createObjectURL(file);
      sampleStatus.textContent = `Loaded: ${file.name}`;
    });

    // ----- KEYBOARD CREATION -----
    function createKeyboard() {
      for (let i = 0; i < NUM_KEYS; i++) {
        const k = document.createElement("div");
        k.className = "key";
        k.dataset.index = i;
        k.textContent = i;
        k.addEventListener("mousedown", () => {
          k.classList.add("active");
          playKey(i);
        });
        k.addEventListener("mouseup", () => {
          k.classList.remove("active");
        });
        k.addEventListener("mouseleave", () => {
          k.classList.remove("active");
        });
        keyboardEl.appendChild(k);
      }
    }

    createKeyboard();

    // ----- PLAYBACK -----
    function playKey(index) {
      if (!sampleUrl) {
        alert("Load a sample first.");
        return;
      }

      // Compute semitone offset from root + transpose + fine tune
      const keyOffset = index - ROOT_INDEX; // semitones difference from root
      const transposeValSt = parseInt(transpose.value, 10);
      const fineCents = parseInt(fineTune.value, 10) || 0;
      const fineSt = fineCents / 100.0;

      const totalSemitones = keyOffset + transposeValSt + fineSt;
      const playbackRate = Math.pow(2, totalSemitones / 12);

      // Create a new Player per hit
      const player = new Tone.Player(sampleUrl).connect(bitCrusher);
      player.playbackRate = playbackRate;

      // Trigger envelope & start player
      const now = Tone.now();
      ampEnv.triggerAttackRelease(1.5, now); // 1.5s note length; envelope shapes it
      player.start(now);

      // Auto-dispose after a while to avoid leaks
      player.stop(now + 3);
      player.onstop = () => {
        player.dispose();
      };
    }

    // ----- CONTROL BINDINGS -----
    function bindSlider(input, label, formatFn, updateFn) {
      const update = () => {
        const val = parseFloat(input.value);
        label.textContent = formatFn(val);
        if (updateFn) updateFn(val);
      };
      input.addEventListener("input", update);
      update();
    }

    bindSlider(transpose, transposeVal, (v) => `${v} st`);
    bindSlider(fineTune, fineTuneVal, (v) => `${v} cents`);

    bindSlider(attack, attackVal, (v) => `${v.toFixed(3)} s`, (v) => (ampEnv.attack = v));
    bindSlider(decay, decayVal, (v) => `${v.toFixed(3)} s`, (v) => (ampEnv.decay = v));
    bindSlider(sustain, sustainVal, (v) => v.toFixed(2), (v) => (ampEnv.sustain = v));
    bindSlider(release, releaseVal, (v) => `${v.toFixed(2)} s`, (v) => (ampEnv.release = v));

    bindSlider(delayTime, delayTimeVal, (v) => `${v.toFixed(2)} s`, (v) => (delay.delayTime.value = v));
    bindSlider(delayFeedback, delayFeedbackVal, (v) => v.toFixed(2), (v) => (delay.feedback.value = v));
    bindSlider(bitDepth, bitDepthVal, (v) => `${v}-bit`, (v) => (bitCrusher.bits = v));

    bindSlider(eqLow, eqLowVal, (v) => `${v} dB`, (v) => (eq.low.value = v));
    bindSlider(eqMid, eqMidVal, (v) => `${v} dB`, (v) => (eq.mid.value = v));
    bindSlider(eqHigh, eqHighVal, (v) => `${v} dB`, (v) => (eq.high.value = v));
  </script>
</body>
</html>
```

---

## 3. Where to go from here

Once this prototype works, you can expand toward a “Battery/Kontakt-lite”:

- **Multi-pad design** (e.g., 16 pads × multiple layers).
- **Multiple samples / velocity layers** per key.
- **Per-pad FX** vs. global FX.
- **Preset save/load** (JSON describing all your parameters + sample file names).
- **Computer keyboard / MIDI** input (via Web MIDI or libraries).

If you tell me your next priority (e.g., multi-pad grid vs. MIDI input vs. saving presets), I can take this base and evolve it into the next version.

**Mike:** Multi-pad design (e.g., 16 pads × multiple layers).
Multiple samples / velocity layers per key.
Per-pad FX vs. global FX.
Preset save/load (JSON describing all your parameters + sample file names).
Computer keyboard / MIDI input (via Web MIDI or libraries).

**GPT:** Here’s a full multi-pad “mini-Kontakt/Battery” prototype that hits everything you asked for:

- **16 pads** (4×4 grid)  
- **Multiple samples / velocity layers per pad**  
- **Per-pad FX** (bitcrusher + 3-band EQ + ADSR)  
- **Global FX** (delay + master EQ)  
- **Preset save/load** to JSON  
- **Computer keyboard input** (1–4, Q–R, A–F, Z–V)  
- **MIDI note input** via Web MIDI (where supported)

---

### 1. Downloadable file

You can grab the complete, ready-to-run HTML here:

**👉 [Download the multi-pad sampler HTML](sandbox:/mnt/data/multi_pad_web_sampler.html)**

Then:

1. Save it locally (if your browser just shows the code, right-click → “Save As…”).
2. Open it in **Chrome** or another modern browser.
3. Click **“Initialize Audio”**.
4. Select a pad in the **Pad Editor**, load one or more samples, and start banging on:
   - Mouse clicks on pads  
   - Keys `1–4 / Q–R / A–F / Z–V`  
   - MIDI notes 36–51 (or change per-pad in the editor)

---

### 2. How the design maps to your spec

**Multi-pad design (16 pads × layers)**  
- 4×4 grid of pads, each with:
  - Name
  - QWERTY key mapping
  - MIDI note number
  - Multiple sample layers with velocity ranges

**Multiple samples / velocity layers per key**
- In the **Pad Editor**, use **“Load Sample(s) for this pad”**:
  - If you load multiple files at once, it auto-splits the velocity range **0–127** evenly.
  - Each layer is stored as `{ fileName, velMin, velMax }`.
  - On trigger, the code picks the layer whose velocity window matches the note’s velocity.
  - Mouse / keyboard uses velocity 127; MIDI uses the real velocity.

**Per-pad FX vs global FX**
- **Per pad:**
  - ADSR envelope (`attack, decay, sustain, release`)
  - Bitcrusher (bit depth)
  - 3-band EQ (low / mid / high in dB)
- **Global:**
  - Delay time + feedback
  - Master 3-band EQ

Per-pad FX are separate Tone.js nodes per pad; global FX are shared across all pads via a master bus.

**Preset save / load (JSON)**
- **Save Preset**:
  - Click **“Save Preset to JSON”** – it dumps the whole state into the textarea.
  - You can copy/paste and store it as a `.json` file.
- **Load Preset**:
  - Paste your JSON into the textarea and click **“Load Preset from JSON”**.
  - It restores:
    - Pad names, MIDI notes, transpose & fine tune
    - ADSR & per-pad FX
    - Velocity layer file **names** and ranges
    - Master delay + EQ
  - Browser security: it **cannot** automatically reload actual audio files from disk, so layers only restore their **metadata** (fileName + velocity zones). You still need to reload the samples if you reopen the page.

**Computer keyboard / MIDI input**
- **Computer keyboard:**
  - Pads are mapped to:  
    `1 2 3 4`  
    `Q W E R`  
    `A S D F`  
    `Z X C V`
- **MIDI:**
  - Click **“Enable MIDI”** to request access.
  - Default mapping: pad 1 = MIDI note 36, pad 2 = 37, … pad 16 = 51.
  - You can change each pad’s MIDI note in the editor.

---

If you want, next step we can:

- Add **per-pad send level** into the global delay (true per-pad send FX).
- Switch envelopes to true **note-on / note-off** handling for sustained instruments.
- Add **visual meters** for levels or velocity.

**Mike:** Proceed

**GPT:** Done — the sampler just got a serious upgrade.  

Here’s your updated build with:

- **Per-pad delay send** (true send FX into global delay)
- **Gate-style envelopes** for:
  - Mouse (mousedown/ mouseup)
  - Computer keys (keydown/ keyup)
  - MIDI (note on / note off)
- **Velocity meter per pad** (simple visual level bar)

### Download the updated version

👉 **[Download the new multi-pad sampler HTML](sandbox:/mnt/data/multi_pad_web_sampler.html)**

### What changed under the hood

- **Routing**
  - Each pad: `bitCrusher → EQ → AmpEnv → masterBus` (dry)
  - Send path: `EQ → perPadDelaySend → masterDelaySend → masterDelay → masterBus`
  - Master chain: `masterBus → masterEQ → Destination`

- **Per-pad delay send**
  - New control: **Delay Send** in Pad FX  
  - Stored as `pad.fx.delaySend` and applied to `pad.nodes.delaySend.gain.value`.

- **Gated envelopes**
  - `triggerPad(..., { gated: true })` calls `ampEnv.triggerAttack()`.
  - `releasePad()` calls `ampEnv.triggerRelease()`.
  - Mouse, QWERTY, and MIDI all use this gate behavior now, so releases actually matter.

- **Pad velocity meter**
  - Each pad has a `.pad-meter` bar that reflects the last hit’s velocity.

If you want, next we can:

- Add **per-pad panning & volume**
- Wire in a **simple pattern/step sequencer** on top of this engine
- Or start thinking about **disk streaming vs full-buffer** for long samples.

**Mike:** Add one shot and looping capabilities to each sample . Create a 16 step sequencer like the one in the software program  reason .

**GPT:** Alright, your sampler is now leveled up with:

- **Per-pad playback mode:** One-shot vs Loop  
- **Reason-style 16-step sequencer:** Per-pad patterns, 16 steps, synced to BPM, driven by Tone.Transport  

### 🔻 Download the new build

**👉 [Download the sampler + sequencer HTML](sandbox:/mnt/data/multi_pad_web_sampler_sequencer.html)**

Open it in a modern browser (Chrome recommended), then:

1. Click **“Initialize Audio”**.
2. Pick a pad in **Pad Editor**.
3. Load samples (single or multi for velocity layers).
4. Choose **Playback Mode**:
   - **One-shot:** ignores note-off, great for drums.
   - **Loop:** will loop while key/mouse/MIDI is held; release stops it.
5. In **Sequencer**:
   - Set **Tempo (BPM)**.
   - With a pad selected, click the steps (1–16) to toggle hits.
   - Hit **Play** to hear that pad’s pattern along with others (each pad has its own 16-step pattern).

**Behavior details:**

- **Live play (QWERTY / mouse / MIDI):**
  - If pad = **Loop** → gate-style (attack on press, release on key/mouse/MIDI up).
  - If pad = **One-shot** → classic drum-hit behavior.
- **Sequencer hits:**
  - Always fire as **one-shots** so it feels like Reason/ReDrum-style drum sequencing.
- **Presets:**
  - Now also save:
    - `playbackMode`
    - `sequence` (16-step pattern)
    - FX (including per-pad delay send)
    - Master BPM

If you’d like, next we can add:

- Per-pad **volume & pan**
- Pattern **copy/paste** between pads
- A simple **song mode** (chain patterns A/B/C, etc.).

**Mike:** Design the UI to mimic the ableton move .  32 pads, 8 encoder mm bs, 16 step sequencer , black color

**GPT:** Here’s a first-pass Ableton Move-style UI: 32-pad grid, 8 encoder knobs on the right, 16-step sequencer row, all in a dark/black hardware shell.

👉 **Download the HTML mockup:**  
[ableton_move_style_sampler.html](sandbox:/mnt/data/ableton_move_style_sampler.html)

What this file gives you:

- **32 pads** in an 8×4 grid, laid out like the Move/Push family.
- **8 encoders** on the right, styled as hardware knobs (Pitch, Fine, Attack, Decay, Sustain, Release, Delay, Lo-Fi labels).
- **16-step sequencer** row along the bottom of the device (with play/stop buttons and tempo slider).
- Full black/charcoal **hardware chassis** with side buttons that visually reference the photo you sent.

Right now this version is UI-focused (visual mockup). If you want, I can plug this shell back into the full sampler/sequencer engine we built (Tone.js, per-pad ADSR, FX, one-shot/loop, presets, etc.) so it’s not just pretty but fully playable.

**Mike:** Make this sampler production ready. Create the audio engine using modern JS. Think of it like a mini native instruments kontakt , Powered by web audio.

**GPT:** Here’s a production-ready version of the sampler with a real audio engine (Kontakt-lite style) running on **Web Audio via Tone.js**:

👉 **Download & run in your browser:**  
[ableton_move_sampler_production.html](sandbox:/mnt/data/ableton_move_sampler_production.html)

### What this build does

- **Engine**
  - Powered by Tone.js (Web Audio under the hood).
  - Global master bus → master EQ → master delay → audio output.
  - Per-pad signal chain: Player → BitCrusher → 3-band EQ → ADSR amp envelope → master bus (+ per-pad delay send).

- **Pads**
  - **32 pads** (8×4 grid), mapped to QWERTY row keys (1–8, Q–I, A–K, Z–,).
  - Each pad has:
    - Name & MIDI note.
    - **Transpose** (±24 semitones) & fine tune (±100 cents).
    - **Playback mode:** one-shot or loop.
    - **ADSR envelope** (attack, decay, sustain, release).
    - **Per-pad FX:** Bit-depth (lo-fi), 3-band EQ, delay send.
    - **Velocity layers:** load multiple samples, they auto-split across velocity ranges.

- **Sample handling**
  - “Samples (velocity layers)” input lets you drop in multiple audio files.
  - Layers are listed with filename and velocity range (auto-distributed 0–127).

- **Sequencer**
  - **16-step sequencer**, per-pad pattern.
  - Click steps to toggle on/off.
  - Play/Stop transport and **tempo control** (60–180 BPM); runs via Tone.Transport on 16th notes.

- **MIDI & keyboard**
  - Web MIDI support button (“Enable MIDI”).
  - Any incoming MIDI note that matches a pad’s MIDI note triggers that pad.
  - Computer keyboard plays pads using the QWERTY map mentioned above.

- **Presets**
  - **Save Preset to JSON** – dumps all pad params, FX, sequences, and master settings into the textarea.
  - **Load Preset from JSON** – reads the JSON and restores the entire state (note: it can’t reload audio blobs, but keeps filenames and ranges so you know what to reload).

- **UI**
  - Hardware-style shell mimicking **Ableton Move**: 32 pads, 8 encoders, 16-step row, dark theme.
  - Pad meters show velocity / activity.
  - Selected pad is outlined; editor panels show its parameters.

---

### How to use it

1. Open the HTML file in Chrome/Edge/Brave.
2. Click **“Initialize Audio”** (browsers require a user gesture).
3. Pick a pad in **“Pad Select & Samples”**.
4. Load one or more samples for that pad.
5. Jam:
   - Click pads, use your QWERTY keys, or hit **Enable MIDI** and play from a controller.
6. Build a pattern:
   - Click steps in the 16-step row to arm hits per pad.
   - Hit **Play** to run the sequencer, adjust BPM.
7. Tweak ADSR, FX, master EQ/delay.
8. Save a preset JSON blob and paste it somewhere to recall later.

If you’d like, next step we can:

- Add a **32-key on-screen keyboard** mode.
- Implement **per-pad 16-step lanes** (drum-machine style) instead of one pattern shared across all pads.
- Add **export/import** for presets as downloadable JSON files.

**Mike:** Provide a list of books or magazines that specialize in building audio applications

**GPT:** Great—here’s a curated list of **books** *and* **magazines/journals** that are especially relevant if you’re building audio applications (samplers, synths, plugins, web-audio tools, etc.).  

---

## 📚 Books  
Here are some solid book recommendations you can pick up:  
products{"selections":[["turn0product0","The Audio Programming Book"],["turn0product12","Designing Audio Effect Plugins in C++: For AAX, AU & VST3"],["turn0product15","Learning Core Audio: A Hands-On Guide to Audio Programming for Mac & iOS"],["turn0product13","Hack Audio: An Introduction to Computer Programming & DSP"],["turn0product10","Audio Programming for Interactive Games"],["turn0product22","Digital Audio Theory: A Practical Guide"],["turn0product8","Audio Signal Processing & Coding"],["turn0product11","Getting Started with C++ Audio Programming for Game Developers"]],"tags":["broad audio programming foundation","plugin development in C++","platform-specific Apple audio programming","intro to DSP + audio coding","interactive / game audio programming","theory + hands-on filters/effects","deep dive signal processing & codecs","practical C++ audio for game dev"]}

Here’s a little about each:

- product_entity["turn0product0","The Audio Programming Book"]: A broad, encyclopedic handbook covering many audio-programming techniques (C/C++ examples, real-world cross-platform). citeturn0search8turn0search4  
- product_entity["turn0product12","Designing Audio Effect Plugins in C++: For AAX, AU & VST3"]: Very plugin-focused—ideal if your app will support plugin formats or internal DSP modules.  
- product_entity["turn0product15","Learning Core Audio: A Hands-On Guide to Audio Programming for Mac & iOS"]: If you plan to build native/macOS/iOS audio apps (or maybe using WebAssembly bridging), this gives great platform detail. citeturn0search2  
- product_entity["turn0product13","Hack Audio: An Introduction to Computer Programming & DSP"]: More introductory, good if you want a gentler ramp up into DSP and audio algorithm implementation.  
- product_entity["turn0product10","Audio Programming for Interactive Games"]: Focused on interactive audio (games) but many concepts apply to sampler/sequencer/real-time engine design.  
- product_entity["turn0product22","Digital Audio Theory: A Practical Guide"]: A strong bridge between theory (filters, transforms) and implementation—helpful for building your internal engine (sampler, loopers, sequencer).  
- product_entity["turn0product8","Audio Signal Processing & Coding"]: Very deep dive into algorithmic side and audio coding – good reference when you need to optimize or implement advanced features.  
- product_entity["turn0product11","Getting Started with C++ Audio Programming for Game Developers"]: Pragmatic, accessible, gives you a fast intro to audio programming architecture, which is useful for your web-sampler engine design.

---

## 📰 Magazines / Journals & Periodicals  
These are good for staying current, getting ideas, seeing how others build audio tools, or reading about hardware/software trends.

- entity["organization","audioXpress",0]: “The Leading Global Audio Development & Design Magazine.” Great for audio electronics, product development, DSP insight. citeturn0search1  
- entity["organization","Sound on Sound",0]: While more oriented toward music tech/recording, it often has deep technical articles and reviews of plug-ins, hardware, which can inspire architecture and UI/UX of audio apps. citeturn0search21turn0search16  
- entity["organization","Recording Magazine",0]: Focused on recording studio environments, signal chains, and implementation aspects. Useful for understanding how audio apps integrate with real workflows. citeturn0search11  
- entity["organization","Tape Op",0]: More creative/production oriented, but occasionally covers tools and new workflows—good for idea generation. citeturn0search13  

---

## ✅ Why this helps for *building audio applications*

- **Books** give you the foundations: DSP, filters, signal chains, plugin architectures, samples/loops handling, etc.  
- **Magazines / journals** give you context: what today’s tools are doing, what features are trending, how real users engage with apps/hardware.  
- Since you’re building a sampler/sequencer engine (web + Tone.js + pad UI + FX + etc), you’ll benefit from both:
  - *Theory & architecture* (books) so you can build a robust engine.
  - *Industry context & workflow* (magazines) so your UI/UX and features align with what users expect in audio tools.

---

If you like, I can dig up a **more complete list** (say 20+ books, sorted by beginner → advanced, and maybe list *digital/online journals* specific to Web Audio / JavaScript audio engine dev). Would you like that expanded list?

**Mike:** Find more recent books on the topic

**GPT:** Here are several **more recent** books (~2022-2024) focused on audio application development, web audio, and JavaScript/Browser audio programming:

---

### 📘 Recommended Recent Books  
1. entity["book", "JavaScript for Sound Artists: Learn to Code with the Web Audio API", 0] (2nd Edition, 2023) by William Turner & Steve Leonard  
   - Focuses on browser-based audio applications with the entity["software", "Web Audio API", 0] (oscillators, sample playback, step sequencer UI, etc). citeturn1search9turn1search11turn1search3  
   - Good match if you’re building a web-sampler/sequencer (like your project).  
   - ISBN: 978-1-032-06272-3 (pbk). citeturn1search11

2. entity["book", "Learn Audio Programming", 0] (2023) by Matthijs Hollemans  
   - Aimed at those starting with audio plugin development and DSP; pairs nicely with modern web/audio toolchains. citeturn1search0  
   - Covers full workflow: plugin basics, DSP, code structuring.

---

### 🔍 Why These Are Especially Relevant  
- They are **recent**, meaning they likely cover modern toolchains, browser APIs, and current best-practices.  
- One is specifically oriented to **Web Audio + JavaScript**, which fits your web-sampler engine built in JS.  
- The other gives the broader audio programming perspective (even if not strictly web), which helps with architecture, DSP, and system design.

---

If you like, I can **compile a list of ~10 recent (post-2020) books** across web audio/JS + audio plugin/DSP, with links, publication dates, and quick summaries. Would you like that?

**Mike:** Yes

**GPT:** Great — here are **10 recent (post-2020 or upcoming) books** relevant to audio application, DSP programming, Web Audio and interactive sound applications. I’ve grouped them by focus area and included quick summaries.  

products{"selections":[["turn0product5","Game Audio Programming 5: Principles & Practices"],["turn0product2","Game Audio Programming 4: Principles & Practices"],["turn0product6","Game Audio Programming 2: Principles & Practices"],["turn1product0","Generative Music Box Project Using JavaScript"],["turn0product3","Designing Audio Effect Plugins in C++: For AAX, AU & VST3"],["turn0product13","Programming Sound with Pure Data: Make Your Apps Come Alive"],["turn0product1","Game Audio Programming: Principles & Practices"],["turn0product12","Introduction to Digital Audio Coding and Standards"],["turn0product4","Hack Audio: An Introduction to Computer Programming & DSP"],["turn0product10","Game Audio Programming 3: Principles & Practices"]],"tags":["cutting-edge game‐audio engine","game audio advanced-volume 4","game audio earlier volume 2","web audio/JS generative project","audio plugin C++ real-world","sound design with PureData apps","general game audio foundational","audio coding & standards deep dive","DSP intro book","game audio mid-volume 3"]}

Here are brief summaries + why each may be useful for your sampler/sequencer project:

---

### 🎮 Game Audio / Engine Focus  
- product_entity["turn0product5","Game Audio Programming 5: Principles & Practices"]: Upcoming/very recent volume (release ~ 2025) collecting advanced techniques in game-audio engine architecture, multithreading, reverb, music systems. Useful for high-performance audio engine design. citeturn1search1turn1search5turn1search7  
- product_entity["turn0product2","Game Audio Programming 4: Principles & Practices"]: Slightly older but still recent; part of the same series focused on integrating audio within interactive systems—good for sample engine + sequencer thinking.  
- product_entity["turn0product6","Game Audio Programming 2: Principles & Practices"]: Volume 2 in the series; good earlier reference for audio engine fundamentals, integration and DSP topics. citeturn0search10turn0search6  
- product_entity["turn0product1","Game Audio Programming: Principles & Practices"]: The original volume; while not ultra‐recent, still extremely relevant as a reference for real-world game audio engine implementations.

---

### 🌐 Web/JavaScript Audio & Interactive  
- product_entity["turn1product0","Generative Music Box Project Using JavaScript"]: Very relevant to your web sampler project — using Web Audio API, JS, generative loops, scheduling. citeturn1search0turn1search18  
- product_entity["turn0product13","Programming Sound with Pure Data: Make Your Apps Come Alive"]: Although this uses Pure Data, it is useful for interactive, reactive sound design and can inform your UI/engine design patterns even for Web Audio.  
- product_entity["turn0product3","Designing Audio Effect Plugins in C++: For AAX, AU & VST3"]: More native/plug-in oriented, but many concepts (FX chains, parameter automation, UI/FX interplay) are very relevant to building per-pad FX, global FX, envelope + FX routing.

---

### 🧠 DSP / Code / Standards  
- product_entity["turn0product12","Introduction to Digital Audio Coding and Standards"]: Covers audio coding, compression, standards — may help you when handling sample loading, asset formats, performance/size trade-offs.  
- product_entity["turn0product4","Hack Audio: An Introduction to Computer Programming & DSP"]: A good DSP fundamentals book; if you implement your own filters, bit-crusher, delay, or optimize Web Audio chains, this helps.  
- product_entity["turn0product10","Game Audio Programming 3: Principles & Practices"]: Volume 3 in the game audio series — sits in between “2” and “4” and may contain mid-level techniques for sequencer/sample engine optimizations.

---

### ✅ How these support *your project*
Since you’re building a web-based sampler/sequencer (pads, layers, loops, one-shots, FX, sequencer, browser + possibly Web MIDI), these books help you across these dimensions:
- **Engine architecture** (game audio volumes) → how to structure sample loading, voice management, note-on/off, polyphony, layers.  
- **Web audio / JS** (Generative Music Box, Programming Sound) → specific to browser environment, scheduling, latency, UI/engine interplay.  
- **DSP / FX / Coding** (Plugin book, DSP intro, Coding & Standards) → for building robust FX chains (bit-crusher, EQ, delay), optimizing performance, understanding audio formats.  
- **Interactive UI & integration** (Pure Data, Web JS) → for UI/UX design, pad mapping, sequencer UI, sample browser, preset save/load.

---

If you like, I can **check for recent books (2024-2026)** specifically with titles like *Web Audio API*, *Browser Music Apps*, *JavaScript Audio Engine*, with direct links and latest editions. Would you like me to fetch that?

**Mike:** optimize this prompt , using the best libraries (HTML and CSS) to achieve the desired effect.  add a global tempo to the sampler represented by a slider.   once a drum loop is imported  to a pad, automatically adjust the tempo to match the global tempo.   this way each drum loop that is added to the sampler , the tempo will match.

**GPT:** Here’s an upgraded, drop-in prompt you can reuse. I’ve baked in:

- Modern, clean HTML/CSS UI (Ableton Move–style).
- Tone.js + Web Audio (no React/Vue).
- Global tempo slider.
- Loop pads auto-time-stretch to match global tempo (via per-pad original BPM and playbackRate).

---

```text
ROLE  
You are a senior Web Audio engineer and UI designer. You build production-ready browser audio instruments and tools.

OBJECTIVE  
Create a fully functioning, single-file HTML sampler workstation (similar in spirit to Native Instruments Battery/Kontakt and the Ableton Move) that runs entirely in the browser.

TECH STACK & CONSTRAINTS  
- No React, no Vue, no SPA frameworks.  
- Use:  
  - Native HTML, CSS, and vanilla JavaScript.  
  - Tone.js (latest) for audio scheduling, envelopes, FX, and Web Audio graph management.  
  - Optional: Web MIDI API for MIDI input, if available in the browser.  
- Single self-contained HTML file: `<html> + <style> + <script>` (no build tools).  
- Use modern, clean CSS (Flexbox/Grid, CSS variables, responsive design). No heavy CSS frameworks; keep it lightweight and efficient.

UI / UX STYLE  
- Overall look based on an Ableton Move–style hardware controller:  
  - Dark / black hardware shell.  
  - 32 performance pads arranged as 8 × 4 grid.  
  - 8 encoder “knobs” on the right.  
  - 16-step sequencer lane along the bottom.  
- Visual details:  
  - Pads show index label + key label.  
  - Pads have an LED / meter that lights up with velocity.  
  - Selected pad receives a clear outline / highlight.  
  - Encoders are visually labeled (Pitch, Fine, Attack, Decay, Sustain, Release, Delay, Lo-Fi).  
  - Sequencer steps show on/off state and current step.

CORE FEATURES (ENGINE)  
Implement a real sampler engine, not a mockup:

1. Pads & Sample Layers  
   - 32 pads (8×4).  
   - Each pad can hold multiple samples as velocity layers.  
   - Velocity layering: each layer stores `velMin` and `velMax` (0–127). The engine chooses the appropriate layer based on velocity.  
   - UI: a file input that lets the user load multiple audio files for the selected pad. Show a list of loaded layers (filename + velocity range).  

2. Playback Modes  
   - Per-pad **Playback Mode**: `one-shot` or `loop`.  
   - One-shot: trigger plays the sample once with ADSR envelope.  
   - Loop: trigger starts looping; releasing note / mouse-up triggers envelope release and stops playback after release time.

3. Per-Pad Parameters  
   Each pad has:  
   - Name (editable).  
   - MIDI note number (0–127).  
   - Transpose in semitones (±24).  
   - Fine tune in cents (±100).  
   - ADSR envelope: attack, decay, sustain, release.  
   - Per-pad FX:  
     - Bit-crusher (bit depth).  
     - 3-band EQ (low, mid, high gain in dB).  
     - Delay send amount to a shared master delay bus.  

   Attach these parameters to real Tone.js nodes:  
   - Player → BitCrusher → EQ → AmplitudeEnvelope → master bus.  
   - Delay send: an extra Gain node from EQ → masterDelaySend → masterDelay.

4. Global FX / Master Bus  
   - Master bus: Tone.Gain → Tone.EQ3 → Tone.Destination.  
   - Master EQ: low/mid/high with dB sliders.  
   - Master delay: Tone.FeedbackDelay with controls for delay time and feedback.  
   - Global output volume if desired.

5. Global Tempo & Time-Stretching for Loops  
   - Add a **Global Tempo** slider (e.g., 60–180 BPM) and a visible numeric BPM readout.  
   - Use Tone.Transport as the central clock, and always sync it to the current global tempo slider value.  
   - For **loop-type samples** on pads:  
     - Each pad stores an **“Original BPM”** value for its loop (user-editable number input per pad).  
     - When a loop is loaded to a pad and `playbackMode="loop"`, the engine automatically computes `playbackRate` so that the loop plays at the **global tempo**:  
       - `playbackRate = globalBpm / pad.originalBpm`.  
     - When the **global tempo** slider changes, update the `playbackRate` of all currently looping pads so they stay in sync with the new BPM.  
     - This means every imported drum loop pad will automatically time-stretch (via playbackRate) to match the global tempo, keeping the entire kit in tempo.

6. Step Sequencer (16 Steps)  
   - A 16-step sequencer lane.  
   - For simplicity, start with **one shared 16-step pattern per pad**: each pad has a `sequence[16]` boolean array.  
   - Sequencer UI: 16 small step buttons (1–16) that toggle on/off for the currently selected pad.  
   - Use Tone.Transport and a Tone.Loop running at 16th-note resolution (`'16n'`).  
   - On each step, advance an index 0–15, highlight the current step visually, and trigger any pads whose `sequence[stepIndex]` is true.  
   - Sequencer must respect the **global tempo** slider (via Tone.Transport.bpm).

7. Input Methods  
   - Mouse: clicking on a pad triggers note on; releasing (for loop mode) triggers note off.  
   - Computer keyboard:  
     - Map a set of keys (e.g., 1–8, Q–I, A–K, Z–,) to the 32 pads.  
     - Key down = trigger pad; key up = release for loop pads.  
   - MIDI input (if Web MIDI is supported):  
     - Add a button “Enable MIDI” that calls `navigator.requestMIDIAccess`.  
     - Map incoming note-on/note-off events to pads by their MIDI note numbers.  

8. Preset Save/Load (JSON)  
   - Add a text area plus **“Save Preset”** and **“Load Preset”** buttons.  
   - Save preset: serialize to JSON the full state:  
     - All pad parameters (name, MIDI note, transpose, fine, ADSR, FX params, playbackMode, originalBpm, velocity layers meta, sequence array).  
     - Global parameters: global tempo, master EQ, master delay settings.  
   - Load preset: parse JSON and restore the engine state and UI.  
   - For security reasons, you cannot auto-reload audio file blobs, but keep filenames and velocity ranges so users know what to reload.

IMPLEMENTATION DETAILS  
- Organize the JavaScript cleanly:  
  - A Pad class or structured objects with: `id, name, key, midiNote, transpose, fine, playbackMode, originalBpm, env, fx, layers, sequence, activePlayers, nodes {...}`.  
  - Make factory functions for pad creation, UI rendering (pads, step sequencer), and event wiring.  
- Make sure to:  
  - Wait for a user gesture before starting the audio context (`Tone.start()` or equivalent).  
  - Dispose of temporary Tone.Player instances when finished (one-shots).  
  - Handle changes to global tempo so both the sequencer and looping pads respond smoothly.

OUTPUT FORMAT  
- Return a single, complete HTML document with:  
  - `<!DOCTYPE html>`  
  - A `<head>` containing title, meta viewport, and all CSS (either in a `<style>` tag or minimal external CDN fonts if you like).  
  - A `<body>` containing:  
    - The Ableton Move–style device UI.  
    - All control panels (pad selection, ADSR, FX, global tempo, preset JSON).  
  - At the end of `<body>`, a `<script>` tag that:  
    - Loads Tone.js via CDN.  
    - Implements all the audio engine logic and UI wiring described above.  
- Code must be runnable by simply opening the HTML file in a modern browser (Chrome/Edge/Brave).

Make the code clean, commented, and production-ready.
```

---

If you want, I can now *use* this prompt myself and generate the actual updated HTML file with the global tempo + auto tempo-matching loops wired in.

**Mike:** here is the code for the sampler :  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WebSampler Pro | Tone.js Engine</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/tone/14.8.49/Tone.js"></script>
    
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&family=Share+Tech+Mono&display=swap');

        :root {
            --bg-dark: #1a1a1d;
            --panel-gray: #2b2b2e;
            --accent-orange: #ff9900;
            --accent-blue: #00d2ff;
            --pad-off: #3a3a3e;
            --pad-on: #ff9900;
            --pad-playing: #ffcc00;
        }

        body {
            background-color: #0f0f10;
            font-family: 'Inter', sans-serif;
            user-select: none;
            overflow: hidden;
        }

        /* Rack Panel Texture */
        .rack-panel {
            background: linear-gradient(180deg, #323236 0%, #252528 100%);
            border-top: 1px solid #4a4a4f;
            border-bottom: 1px solid #111;
            box-shadow: inset 0 0 20px rgba(0,0,0,0.5);
        }

        /* Standard Knob Styles */
        .knob-container {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            cursor: ns-resize;
        }
        .knob-circle {
            width: 48px;
            height: 48px;
            border-radius: 50%;
            background: radial-gradient(circle at 30% 30%, #4a4a4f, #1a1a1d);
            border: 2px solid #111;
            box-shadow: 0 4px 6px rgba(0,0,0,0.4);
            position: relative;
            transition: transform 0.05s linear;
        }
        /* Mini Knob for Pads */
        .mini-knob .knob-circle {
            width: 28px;
            height: 28px;
            border-width: 1px;
        }
        .mini-knob .knob-indicator {
            width: 1.5px;
            height: 50%;
        }
        .mini-knob .knob-label {
            font-size: 0.5rem;
            margin-top: 2px;
        }
        .mini-knob .knob-value {
            font-size: 0.5rem;
            margin-bottom: 1px;
            height: 10px; 
        }

        .knob-indicator {
            position: absolute;
            top: 50%; left: 50%;
            width: 2px; height: 50%;
            background: transparent;
            transform-origin: top center; 
        }
        .knob-indicator::after {
            content: '';
            position: absolute;
            top: 4px; left: -1px;
            width: 2px; height: 12px;
            background-color: var(--accent-orange);
            box-shadow: 0 0 5px var(--accent-orange);
        }
        .mini-knob .knob-indicator::after {
            height: 6px;
            top: 2px;
        }

        .knob-label {
            font-family: 'Share Tech Mono', monospace;
            font-size: 0.65rem;
            color: #888;
            margin-top: 6px;
            letter-spacing: 0.05em;
        }

        .knob-value {
            font-family: 'Share Tech Mono', monospace;
            font-size: 0.7rem;
            color: var(--accent-blue);
            margin-bottom: 4px;
            opacity: 0;
            transition: opacity 0.2s;
        }
        .knob-container:hover .knob-value { opacity: 1; }

        /* Keyboard */
        .piano-container { perspective: 600px; }
        .key { transition: background-color 0.05s, transform 0.05s; border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; }
        .white-key { background: linear-gradient(to bottom, #f0f0f0, #e0e0e0); height: 160px; z-index: 1; border: 1px solid #000; box-shadow: inset 0 -5px 10px rgba(0,0,0,0.1); }
        .white-key.active { transform: translateY(2px) rotateX(-2deg); background: #ccc; }
        .black-key { background: #111; height: 100px; z-index: 2; width: 60%; position: absolute; left: 70%; border: 1px solid #000; box-shadow: 2px 2px 5px rgba(0,0,0,0.5); border-bottom-left-radius: 2px; border-bottom-right-radius: 2px; }
        .black-key.active { background: #333; transform: translateY(2px) rotateX(-2deg); }

        /* MPC Pads */
        .pad-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: repeat(4, 1fr);
            gap: 6px;
            padding: 8px;
            background: #111;
            border-radius: 4px;
            box-shadow: inset 0 0 10px #000;
            height: 100%;
            overflow-y: auto;
        }

        .mpc-pad {
            background-color: var(--pad-off);
            border-radius: 4px;
            box-shadow: inset 0 0 5px rgba(0,0,0,0.5), 0 2px 4px rgba(0,0,0,0.5);
            cursor: pointer;
            transition: background-color 0.05s, transform 0.05s;
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 4px;
            min-height: 90px;
        }

        .mpc-pad:active, .mpc-pad.active {
            background-color: var(--pad-on);
            box-shadow: 0 0 15px var(--accent-orange);
            transform: scale(0.99);
        }

        .mpc-pad.looping {
            background-color: var(--pad-playing);
            border-color: #fff;
            box-shadow: 0 0 10px rgba(255, 204, 0, 0.5);
        }

        .mpc-pad.has-sample {
            background-color: #4a4a4f;
            border: 1px solid #555;
        }

        .pad-top-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .pad-controls {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: auto;
            background: rgba(0,0,0,0.3);
            border-radius: 4px;
            padding: 2px 4px;
            gap: 4px;
        }

        /* Pad Slider */
        input[type=range].pad-slider {
            -webkit-appearance: none;
            width: 100%;
            height: 3px;
            background: #222;
            border-radius: 2px;
            outline: none;
        }
        input[type=range].pad-slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: var(--accent-orange);
            cursor: pointer;
        }

        .pad-label {
            font-family: 'Share Tech Mono', monospace;
            font-size: 0.6rem;
            color: rgba(255,255,255,0.4);
            pointer-events: none;
        }

        /* Control Button Styles */
        .pad-btn {
            pointer-events: auto;
            font-size: 9px;
            background: #222;
            color: #888;
            border: 1px solid #444;
            border-radius: 2px;
            padding: 1px 3px;
            font-family: monospace;
            z-index: 10;
            cursor: pointer;
            margin-left: 4px;
        }
        .pad-btn:hover { color: #fff; border-color: #666; }
        .pad-btn.loop-active { color: var(--accent-orange); border-color: var(--accent-orange); }

        .pad-filename {
            font-size: 0.55rem;
            color: #fff;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            text-align: center;
            pointer-events: none;
            margin: 2px 0;
            font-weight: 600;
        }
        
        .tiny-label {
            font-size: 0.45rem;
            color: #aaa;
            font-family: 'Share Tech Mono', monospace;
            margin-bottom: 1px;
            display: block;
        }

        /* Sample Editor Modal */
        .modal-overlay {
            position: fixed; inset: 0; background: rgba(0,0,0,0.8); z-index: 100;
            display: flex; justify-content: center; align-items: center;
            backdrop-filter: blur(5px);
        }
        .modal-content {
            background: #1a1a1d; border: 1px solid #444; border-radius: 8px;
            width: 90%; max-width: 800px; padding: 20px;
            box-shadow: 0 0 30px rgba(0,0,0,0.8);
            display: flex; flex-direction: column; gap: 15px;
        }
        .waveform-wrapper {
            position: relative; height: 150px; background: #000;
            border: 1px solid #333; border-radius: 4px; cursor: crosshair;
        }
        #waveform-canvas { width: 100%; height: 100%; display: block; }
        
        /* Markers */
        .marker {
            position: absolute; top: 0; bottom: 0; width: 2px;
            cursor: ew-resize; z-index: 10;
        }
        .marker-handle {
            position: absolute; top: 0; width: 0; height: 0;
            border-left: 6px solid transparent; border-right: 6px solid transparent;
            cursor: ew-resize;
        }
        .marker-start { background: #0f0; left: 0; }
        .marker-start .marker-handle { border-top: 8px solid #0f0; left: -5px; }
        
        .marker-end { background: #f00; left: 100%; }
        .marker-end .marker-handle { border-top: 8px solid #f00; left: -5px; }

        .region-dim {
            position: absolute; top: 0; bottom: 0; background: rgba(0,0,0,0.6); pointer-events: none;
        }

        /* Screen/Header */
        .info-screen { background: #111; border: 1px solid #333; box-shadow: inset 0 0 10px rgba(0,0,0,0.8); font-family: 'Share Tech Mono', monospace; }
        .led-indicator { width: 8px; height: 8px; border-radius: 50%; background-color: #333; transition: background-color 0.1s; }
        .led-indicator.on { background-color: var(--accent-orange); box-shadow: 0 0 8px var(--accent-orange); }

        /* Tabs */
        .nav-tab { color: #666; border-bottom: 2px solid transparent; cursor: pointer; transition: all 0.2s; }
        .nav-tab.active { color: var(--accent-orange); border-bottom: 2px solid var(--accent-orange); }

        .drag-over { border: 2px dashed var(--accent-orange) !important; background: #222 !important; }
        .hidden { display: none !important; }
        #overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(15,15,16,0.95); z-index: 50; display: flex; flex-direction: column; justify-content: center; align-items: center; }
        
        .sample-list-item { font-family: 'Share Tech Mono', monospace; font-size: 0.75rem; transition: background 0.1s; }
        .sample-list-item:hover { background-color: #333; }
    </style>
</head>
<body class="text-white h-screen flex flex-col">

    <!-- Initialization Overlay -->
    <div id="overlay">
        <h1 class="text-3xl font-bold mb-4 tracking-widest text-gray-200">K-SAMPLER <span class="text-orange-500">PRO</span></h1>
        <p class="text-gray-400 mb-8 font-mono text-sm">Powered by Tone.js</p>
        <button id="start-btn" class="px-8 py-3 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded shadow-[0_0_15px_rgba(255,153,0,0.3)] transition border border-orange-400">
            INITIALIZE SYSTEM
        </button>
        <p id="loading-text" class="mt-4 text-xs text-gray-500 font-mono hidden">Loading Core Library...</p>
    </div>

    <!-- Sample Editor Modal -->
    <div id="editor-modal" class="modal-overlay hidden">
        <div class="modal-content">
            <div class="flex justify-between items-center border-b border-[#333] pb-2">
                <h2 class="text-lg font-bold font-mono text-gray-200">SAMPLE EDITOR: <span id="editor-title" class="text-orange-500">PAD 1</span></h2>
                <button onclick="closeEditor()" class="text-gray-400 hover:text-white font-bold text-xl">&times;</button>
            </div>
            
            <div class="waveform-wrapper" id="waveform-container">
                <canvas id="waveform-canvas"></canvas>
                <!-- Overlays -->
                <div id="dim-start" class="region-dim" style="left:0; width:0;"></div>
                <div id="dim-end" class="region-dim" style="left:100%; right:0;"></div>
                <div id="marker-start" class="marker marker-start">
                    <div class="marker-handle"></div>
                </div>
                <div id="marker-end" class="marker marker-end">
                    <div class="marker-handle"></div>
                </div>
            </div>

            <div class="flex gap-4 justify-between items-center bg-[#111] p-3 rounded font-mono text-xs">
                <div class="flex gap-4">
                    <div class="flex flex-col">
                        <span class="text-gray-500">START</span>
                        <span id="lbl-start" class="text-green-400">0.000s</span>
                    </div>
                    <div class="flex flex-col">
                        <span class="text-gray-500">END</span>
                        <span id="lbl-end" class="text-red-400">1.000s</span>
                    </div>
                    <div class="flex flex-col">
                        <span class="text-gray-500">DURATION</span>
                        <span id="lbl-dur" class="text-white">1.000s</span>
                    </div>
                </div>
                <div class="flex gap-2">
                    <button onclick="previewPadSample()" class="px-4 py-2 bg-[#333] hover:bg-[#444] rounded text-white flex items-center gap-2">
                        <span>▶</span> PREVIEW
                    </button>
                    <button onclick="closeEditor()" class="px-4 py-2 bg-orange-700 hover:bg-orange-600 rounded text-white font-bold">DONE</button>
                </div>
            </div>
            <p class="text-[10px] text-gray-600 font-mono">DRAG MARKERS TO SET PLAYBACK REGION. CHANGES ARE AUTO-SAVED.</p>
        </div>
    </div>

    <!-- Main Interface -->
    <div class="flex-1 flex flex-col max-w-6xl mx-auto w-full p-2 lg:p-6 gap-4 h-full">
        
        <!-- Header -->
        <header class="bg-[#222] border border-[#333] p-4 rounded-t-lg flex justify-between items-center shadow-lg shrink-0">
            <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-orange-600 rounded flex items-center justify-center font-bold text-2xl shadow-inner">K</div>
                <div>
                    <h1 class="text-lg font-bold tracking-wider">WORKSTATION</h1>
                    <p class="text-xs text-gray-500 font-mono">HYBRID ENGINE</p>
                </div>
            </div>
            <div class="info-screen h-12 w-48 rounded hidden md:flex items-center justify-center relative overflow-hidden">
                <canvas id="visualizer" width="190" height="46"></canvas>
            </div>
            <div class="flex items-center gap-6">
                <div class="flex flex-col items-center gap-1">
                    <div id="midi-led" class="led-indicator"></div>
                    <span class="text-[10px] text-gray-500 font-mono">MIDI</span>
                </div>
                <div class="knob-wrapper" data-param="master" data-min="-60" data-max="6" data-value="-6" data-suffix="dB"></div>
            </div>
        </header>

        <!-- Main Rack (Global FX) -->
        <div class="rack-panel rounded-b-lg border border-[#333] p-4 lg:p-6 flex flex-wrap content-start gap-4 lg:gap-8 shrink-0 overflow-x-auto">
            <!-- Envelope -->
            <div class="bg-[#1e1e20] border border-[#333] rounded p-3 lg:p-4 flex flex-col gap-2 shadow-xl min-w-[280px]">
                <div class="border-b border-[#333] pb-2 mb-2 flex justify-between">
                    <span class="text-xs font-bold text-gray-400">AMP ENVELOPE (KEYS)</span>
                </div>
                <div class="flex gap-2 lg:gap-4 justify-center">
                    <div class="knob-wrapper" data-param="attack" data-min="0" data-max="2" data-value="0.05" data-suffix="s" data-label="ATTACK"></div>
                    <div class="knob-wrapper" data-param="decay" data-min="0" data-max="2" data-value="0.3" data-suffix="s" data-label="DECAY"></div>
                    <div class="knob-wrapper" data-param="sustain" data-min="0" data-max="1" data-value="0.8" data-suffix="" data-label="SUSTAIN"></div>
                    <div class="knob-wrapper" data-param="release" data-min="0" data-max="5" data-value="1.5" data-suffix="s" data-label="RELEASE"></div>
                </div>
            </div>
            <!-- Filter -->
            <div class="bg-[#1e1e20] border border-[#333] rounded p-3 lg:p-4 flex flex-col gap-2 shadow-xl min-w-[150px]">
                <div class="border-b border-[#333] pb-2 mb-2 flex justify-between">
                    <span class="text-xs font-bold text-gray-400">FILTER (GLOBAL)</span>
                </div>
                <div class="flex gap-2 lg:gap-4 justify-center">
                    <div class="knob-wrapper" data-param="cutoff" data-min="20" data-max="20000" data-value="20000" data-suffix="Hz" data-label="CUTOFF" data-log="true"></div>
                    <div class="knob-wrapper" data-param="resonance" data-min="0" data-max="20" data-value="1" data-suffix="" data-label="RESO"></div>
                </div>
            </div>
            <!-- FX -->
            <div class="bg-[#1e1e20] border border-[#333] rounded p-3 lg:p-4 flex flex-col gap-2 shadow-xl min-w-[220px]">
                <div class="border-b border-[#333] pb-2 mb-2 flex justify-between">
                    <span class="text-xs font-bold text-gray-400">FX CHAIN</span>
                </div>
                <div class="flex gap-2 lg:gap-4 justify-center">
                    <div class="knob-wrapper" data-param="delayTime" data-min="0" data-max="1" data-value="0.25" data-suffix="s" data-label="TIME"></div>
                    <div class="knob-wrapper" data-param="delayMix" data-min="0" data-max="1" data-value="0.1" data-suffix="" data-label="DLY"></div>
                    <div class="knob-wrapper" data-param="reverbMix" data-min="0" data-max="1" data-value="0.3" data-suffix="" data-label="RVB"></div>
                </div>
            </div>
        </div>

        <!-- Navigation Tabs -->
        <div class="flex gap-6 px-4 border-b border-[#333]">
            <button class="nav-tab active font-mono text-sm py-2" onclick="switchTab('keys')">PIANO KEYS</button>
            <button class="nav-tab font-mono text-sm py-2" onclick="switchTab('mpc')">MPC PADS</button>
        </div>

        <!-- Tab Content Area -->
        <div class="flex-1 relative overflow-hidden bg-[#0a0a0a] rounded-lg border border-[#333] shadow-2xl">
            <!-- VIEW: PIANO -->
            <div id="view-keys" class="absolute inset-0 flex flex-col justify-end pb-0 transition-opacity duration-300">
                <div class="h-48 piano-container w-full border-t-4 border-orange-600">
                    <div id="keyboard" class="flex relative h-full justify-center bg-[#0a0a0a]"></div>
                </div>
            </div>
            <!-- VIEW: MPC -->
            <div id="view-mpc" class="absolute inset-0 flex opacity-0 pointer-events-none transition-opacity duration-300 bg-[#151515]">
                <div class="flex-1 p-4 flex flex-col h-full">
                    <div class="flex justify-between items-end mb-2 shrink-0">
                        <span class="text-xs text-gray-400 font-mono">DRUM RACK 1</span>
                        <span class="text-[10px] text-gray-600 font-mono">DRAG SAMPLES ONTO PADS</span>
                    </div>
                    <div class="flex-1 min-h-0 pad-grid" id="pad-grid"></div>
                </div>
                <div class="w-64 bg-[#111] border-l border-[#333] flex flex-col shrink-0">
                    <div class="p-3 border-b border-[#333] bg-[#1a1a1d]">
                        <span class="text-xs font-bold text-gray-300 tracking-wider">SAMPLE LOADER</span>
                    </div>
                    <div class="flex-1 overflow-y-auto p-2 space-y-1" id="sample-list"></div>
                </div>
            </div>
        </div>
    </div>

    <input type="file" id="file-input" accept="audio/*" class="hidden">

    <script>
        // --- Global State ---
        let toneStarted = false;
        let activeTab = 'keys';
        let pianoSampler, drumPlayers;
        let filter, delay, reverb, limiter, analyser;

        const params = {
            attack: 0.05, decay: 0.3, sustain: 0.8, release: 1.5,
            cutoff: 20000, resonance: 1,
            delayTime: 0.25, delayMix: 0.1,
            reverbMix: 0.3,
            master: -6
        };

        const padCount = 16;
        // Extended Pad Settings to include Playback Region
        const padSettings = new Array(padCount).fill(null).map(() => ({ 
            isLoop: false,
            pitch: 0,
            rate: 1.0,
            startTime: 0, // In seconds
            endTime: null // null = end of buffer
        })); 

        // --- Editor State ---
        let currentEditPadIndex = null;
        let isDraggingMarker = null; // 'start' or 'end'

        // --- 1. Audio Initialization ---
        async function initAudio() {
            document.getElementById('start-btn').classList.add('hidden');
            document.getElementById('loading-text').classList.remove('hidden');
            document.getElementById('loading-text').style.display = 'block';

            await Tone.start();
            toneStarted = true;

            limiter = new Tone.Limiter(-1).toDestination();
            reverb = new Tone.Reverb({ decay: 4, wet: params.reverbMix }).connect(limiter);
            await reverb.generate();
            delay = new Tone.FeedbackDelay({ delayTime: params.delayTime, feedback: 0.4, wet: params.delayMix }).connect(reverb);
            filter = new Tone.Filter({ type: "lowpass", frequency: params.cutoff, Q: params.resonance }).connect(delay);
            analyser = new Tone.Analyser("waveform", 256);
            limiter.connect(analyser);

            pianoSampler = new Tone.Sampler({
                urls: { "C4": "C4.mp3", "D#4": "Ds4.mp3", "F#4": "Fs4.mp3", "A4": "A4.mp3" },
                release: 1,
                baseUrl: "https://tonejs.github.io/audio/salamander/",
                onload: () => onAudioLoaded()
            }).connect(filter);

            drumPlayers = new Tone.Players({ urls: {}, fadeOut: 0.01 }).connect(filter);
        }

        function onAudioLoaded() {
            document.getElementById('overlay').style.opacity = 0;
            setTimeout(() => document.getElementById('overlay').remove(), 500);
            updateParams();
            drawVisualizer();
            setupMIDI();
        }

        function updateParams() {
            if (!pianoSampler) return;
            pianoSampler.attack = params.attack; pianoSampler.decay = params.decay;
            pianoSampler.sustain = params.sustain; pianoSampler.release = params.release;
            filter.frequency.rampTo(params.cutoff, 0.1); filter.Q.value = params.resonance;
            delay.delayTime.rampTo(params.delayTime, 0.1); delay.wet.value = params.delayMix;
            reverb.wet.value = params.reverbMix; Tone.Destination.volume.rampTo(params.master, 0.1);
        }

        // --- 2. UI Knob Logic ---
        class Knob {
            constructor(element, isMini = false) {
                this.element = element;
                this.param = element.dataset.param;
                this.min = parseFloat(element.dataset.min);
                this.max = parseFloat(element.dataset.max);
                this.value = parseFloat(element.dataset.value);
                this.suffix = element.dataset.suffix || "";
                this.label = element.dataset.label || "VOL";
                this.isLog = element.dataset.log === "true";
                this.isMini = isMini;
                this.render();
                this.addListeners();
            }
            render() {
                const miniClass = this.isMini ? 'mini-knob' : '';
                this.element.className = `knob-wrapper ${miniClass}`;
                this.element.innerHTML = `<div class="knob-value">${this.formatValue(this.value)}${this.suffix}</div><div class="knob-container"><div class="knob-circle" style="transform: rotate(${this.valToDeg()}deg)"><div class="knob-indicator"></div></div><div class="knob-label">${this.label}</div></div>`;
            }
            formatValue(val) { return Math.abs(val) < 10 ? val.toFixed(this.isMini ? 1 : 2) : Math.round(val); }
            valToDeg() {
                let pct;
                if (this.isLog) {
                    const minLog = Math.log(this.min), maxLog = Math.log(this.max);
                    pct = (Math.log(this.value) - minLog) / (maxLog - minLog);
                } else {
                    pct = (this.value - this.min) / (this.max - this.min);
                }
                return (pct * 290) - 145;
            }
            updateValueFromDy(dy) {
                const sensitivity = 0.005; 
                if (this.isLog) {
                    const currentPct = (Math.log(this.value) - Math.log(this.min)) / (Math.log(this.max) - Math.log(this.min));
                    let newPct = Math.max(0, Math.min(1, currentPct + (dy * sensitivity)));
                    this.value = Math.exp(newPct * (Math.log(this.max) - Math.log(this.min)) + Math.log(this.min));
                } else {
                    this.value = Math.max(this.min, Math.min(this.max, this.value + (dy * (this.max - this.min) * sensitivity)));
                }
                this.updateVisuals();
                if(params.hasOwnProperty(this.param)) { params[this.param] = this.value; updateParams(); }
                else if(this.element.onValueChange) this.element.onValueChange(this.value);
            }
            updateVisuals() {
                const circle = this.element.querySelector('.knob-circle');
                const valDisplay = this.element.querySelector('.knob-value');
                circle.style.transform = `rotate(${this.valToDeg()}deg)`;
                valDisplay.textContent = `${this.formatValue(this.value)}${this.suffix}`;
            }
            addListeners() {
                const container = this.element.querySelector('.knob-container');
                const startDrag = (e) => {
                    e.stopPropagation();
                    const startY = e.clientY || e.touches[0].clientY;
                    const onMove = (me) => { me.preventDefault(); this.updateValueFromDy(startY - (me.clientY || me.touches[0].clientY)); };
                    const onUp = () => { window.removeEventListener('mousemove', onMove); window.removeEventListener('mouseup', onUp); window.removeEventListener('touchmove', onMove); window.removeEventListener('touchend', onUp); };
                    window.addEventListener('mousemove', onMove); window.addEventListener('mouseup', onUp); window.addEventListener('touchmove', onMove); window.addEventListener('touchend', onUp);
                };
                container.addEventListener('mousedown', startDrag);
                container.addEventListener('touchstart', (e) => startDrag(e));
                container.addEventListener('click', (e) => e.stopPropagation());
            }
        }
        document.querySelectorAll('.knob-wrapper').forEach(el => new Knob(el));

        // --- 3. View Logic ---
        window.switchTab = (tab) => {
            activeTab = tab;
            document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
            event.target.classList.add('active');
            const keysView = document.getElementById('view-keys');
            const mpcView = document.getElementById('view-mpc');
            if (tab === 'keys') { keysView.style.opacity = '1'; keysView.style.pointerEvents = 'all'; mpcView.style.opacity = '0'; mpcView.style.pointerEvents = 'none'; }
            else { keysView.style.opacity = '0'; keysView.style.pointerEvents = 'none'; mpcView.style.opacity = '1'; mpcView.style.pointerEvents = 'all'; }
        };

        // --- 4. Piano Logic ---
        const keyboardEl = document.getElementById('keyboard');
        const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
        const keyMap = {}; 
        function createKeyboard() {
            for (let oct = 2; oct <= 5; oct++) {
                notes.forEach(note => {
                    const noteName = `${note}${oct}`;
                    const isBlack = note.includes('#');
                    const key = document.createElement('div');
                    key.className = `key ${isBlack ? 'black-key' : 'white-key'}`;
                    key.dataset.note = noteName;
                    if (isBlack) { key.style.marginLeft = "-1.5rem"; key.style.marginRight = "-1.5rem"; }
                    const play = () => { if(activeTab === 'keys') triggerAttack(noteName); };
                    const stop = () => { if(activeTab === 'keys') triggerRelease(noteName); };
                    key.addEventListener('mousedown', play); key.addEventListener('mouseup', stop); key.addEventListener('mouseleave', stop);
                    key.addEventListener('touchstart', (e) => { e.preventDefault(); play(); }); key.addEventListener('touchend', stop);
                    keyboardEl.appendChild(key);
                    keyMap[noteName] = key;
                });
            }
        }
        createKeyboard();
        function triggerAttack(note) { if (toneStarted) { pianoSampler.triggerAttack(note); if(keyMap[note]) keyMap[note].classList.add('active'); blinkMidiLed(); } }
        function triggerRelease(note) { if (toneStarted) { pianoSampler.triggerRelease(note); if(keyMap[note]) keyMap[note].classList.remove('active'); } }

        // --- 5. MPC UI ---
        const padGrid = document.getElementById('pad-grid');
        const sampleList = document.getElementById('sample-list');
        let selectedPadIndex = null;

        for(let i=0; i<padCount; i++) {
            const pad = document.createElement('div');
            pad.className = 'mpc-pad';
            pad.id = `pad-${i}`;
            pad.dataset.index = i;
            
            pad.innerHTML = `
                <div class="pad-top-row">
                    <span class="pad-label">PAD ${i+1}</span>
                    <div class="flex gap-1">
                        <button class="pad-btn" id="edit-${i}" title="Edit Sample">✎</button>
                        <button class="pad-btn" id="toggle-${i}" title="Toggle One-Shot / Loop">➝</button>
                    </div>
                </div>
                <span class="pad-filename" id="pad-name-${i}">Empty</span>
                <div class="pad-controls" id="controls-${i}">
                    <div class="mini-knob-wrapper" data-index="${i}" data-param="tune" data-min="-12" data-max="12" data-value="0" data-label="TUNE"></div>
                    <div class="flex-1 ml-2 flex flex-col justify-end pb-1">
                        <div class="flex justify-between w-full"><span class="tiny-label">RATE</span><span class="tiny-label text-blue-400" id="rate-val-${i}">1.0x</span></div>
                        <input type="range" class="pad-slider" min="0.5" max="2.0" step="0.1" value="1.0" id="rate-${i}">
                    </div>
                </div>
            `;
            
            // Edit Button
            pad.querySelector(`#edit-${i}`).addEventListener('click', (e) => { e.stopPropagation(); openEditor(i); });
            // Loop Button
            pad.querySelector(`#toggle-${i}`).addEventListener('click', (e) => { e.stopPropagation(); togglePadMode(i); });
            // Interactions
            pad.addEventListener('mousedown', (e) => { if(isControlElement(e.target)) return; triggerPad(i); });
            pad.addEventListener('touchstart', (e) => { e.preventDefault(); if(isControlElement(e.target)) return; triggerPad(i); });
            // Drag Drop
            pad.addEventListener('dragover', (e) => { e.preventDefault(); pad.classList.add('drag-over'); });
            pad.addEventListener('dragleave', () => pad.classList.remove('drag-over'));
            pad.addEventListener('drop', (e) => { e.preventDefault(); pad.classList.remove('drag-over'); const file = e.dataTransfer.files[0]; if (file && file.type.startsWith('audio')) loadSampleToPad(i, file); });

            padGrid.appendChild(pad);

            // Init mini components
            const knobEl = pad.querySelector('.mini-knob-wrapper');
            const tuneKnob = new Knob(knobEl, true);
            tuneKnob.element.onValueChange = (val) => {
                padSettings[i].pitch = val;
                if(drumPlayers.has(i.toString())) drumPlayers.player(i.toString()).detune = val * 100;
            };
            const rateSlider = pad.querySelector(`#rate-${i}`);
            rateSlider.addEventListener('input', (e) => {
                const val = parseFloat(e.target.value);
                document.getElementById(`rate-val-${i}`).textContent = val.toFixed(1) + "x";
                padSettings[i].rate = val;
                if(drumPlayers.has(i.toString())) drumPlayers.player(i.toString()).playbackRate = val;
            });
            rateSlider.addEventListener('mousedown', e=>e.stopPropagation());
            rateSlider.addEventListener('touchstart', e=>e.stopPropagation());

            // Browser List
            const li = document.createElement('div');
            li.className = 'sample-list-item flex justify-between items-center p-2 rounded border border-transparent hover:border-[#333] mb-1';
            li.innerHTML = `<span class="text-gray-400">PAD ${i+1}</span><div class="flex items-center gap-2"><span class="text-[10px] text-gray-500 w-20 truncate text-right" id="list-name-${i}">-</span><button class="text-orange-500 hover:text-white" onclick="openFileBrowser(${i})">📂</button></div>`;
            sampleList.appendChild(li);
        }

        function isControlElement(target) { return target.tagName === 'BUTTON' || target.tagName === 'INPUT' || target.closest('.knob-wrapper'); }

        // --- 6. Playback Logic ---
        function togglePadMode(index) {
            padSettings[index].isLoop = !padSettings[index].isLoop;
            const btn = document.getElementById(`toggle-${index}`);
            const pad = document.getElementById(`pad-${index}`);
            if (padSettings[index].isLoop) { btn.textContent = "⟳"; btn.classList.add('loop-active'); }
            else { 
                btn.textContent = "➝"; btn.classList.remove('loop-active'); 
                if (drumPlayers.has(index.toString()) && drumPlayers.player(index.toString()).state === 'started') {
                    drumPlayers.player(index.toString()).stop();
                    pad.classList.remove('looping');
                }
            }
        }

        function triggerPad(index) {
            if(!toneStarted || !drumPlayers) return;
            const padEl = document.getElementById(`pad-${index}`);
            if (!drumPlayers.has(index.toString())) {
                padEl.classList.add('active'); setTimeout(() => padEl.classList.remove('active'), 100); return;
            }

            const player = drumPlayers.player(index.toString());
            const settings = padSettings[index];
            const bufferDuration = player.buffer.duration;

            // Region Logic
            const start = settings.startTime;
            const end = settings.endTime !== null ? settings.endTime : bufferDuration;
            const duration = Math.max(0, end - start);

            player.detune = settings.pitch * 100;
            player.playbackRate = settings.rate;

            if (settings.isLoop) {
                // Loop Mode: Loops between start and end
                player.loop = true;
                player.loopStart = start;
                player.loopEnd = end;
                
                if (player.state === 'started') {
                    player.stop();
                    padEl.classList.remove('looping', 'active');
                } else {
                    player.start(undefined, start); // Start at beginning of region
                    padEl.classList.add('looping');
                }
            } else {
                // One-Shot: Plays from start to end once
                player.loop = false;
                player.stop();
                // Tone.Player.start(time, offset, duration)
                player.start(undefined, start, duration);
                padEl.classList.remove('active'); void padEl.offsetWidth; padEl.classList.add('active');
                setTimeout(() => padEl.classList.remove('active'), 100);
            }
            blinkMidiLed();
        }

        // --- 7. Sample Editor Logic ---
        const editorModal = document.getElementById('editor-modal');
        const waveformCanvas = document.getElementById('waveform-canvas');
        const waveformCtx = waveformCanvas.getContext('2d');
        const markerStart = document.getElementById('marker-start');
        const markerEnd = document.getElementById('marker-end');
        
        function openEditor(index) {
            if (!drumPlayers.has(index.toString())) return; // No sample to edit
            currentEditPadIndex = index;
            const player = drumPlayers.player(index.toString());
            
            // Set title
            document.getElementById('editor-title').innerText = `PAD ${index + 1}`;
            editorModal.classList.remove('hidden');

            // Initialize markers based on existing settings
            const settings = padSettings[index];
            const duration = player.buffer.duration;
            if (settings.endTime === null) settings.endTime = duration;

            drawWaveform(player.buffer);
            updateMarkerPositions();
        }

        function closeEditor() {
            editorModal.classList.add('hidden');
            currentEditPadIndex = null;
        }

        function drawWaveform(buffer) {
            // Get raw audio data
            const channelData = buffer.getChannelData(0); // Left channel
            const step = Math.ceil(channelData.length / waveformCanvas.width);
            const amp = waveformCanvas.height / 2;
            
            // Resize canvas resolution
            waveformCanvas.width = waveformCanvas.parentElement.clientWidth;
            waveformCanvas.height = waveformCanvas.parentElement.clientHeight;

            waveformCtx.fillStyle = "#000";
            waveformCtx.fillRect(0, 0, waveformCanvas.width, waveformCanvas.height);
            waveformCtx.beginPath();
            waveformCtx.strokeStyle = "#00d2ff";
            waveformCtx.lineWidth = 1;

            for(let i = 0; i < waveformCanvas.width; i++){
                let min = 1.0;
                let max = -1.0;
                for(let j = 0; j < step; j++) {
                    const datum = channelData[(i * step) + j];
                    if (datum < min) min = datum;
                    if (datum > max) max = datum;
                }
                waveformCtx.moveTo(i, (1 + min) * amp);
                waveformCtx.lineTo(i, (1 + max) * amp);
            }
            waveformCtx.stroke();
        }

        function updateMarkerPositions() {
            if (currentEditPadIndex === null) return;
            const settings = padSettings[currentEditPadIndex];
            const player = drumPlayers.player(currentEditPadIndex.toString());
            const totalDur = player.buffer.duration;
            
            // Calculate % positions
            const startPct = (settings.startTime / totalDur) * 100;
            const endPct = (settings.endTime / totalDur) * 100;

            // Update DOM
            markerStart.style.left = `${startPct}%`;
            document.getElementById('dim-start').style.width = `${startPct}%`;
            
            markerEnd.style.left = `${endPct}%`;
            document.getElementById('dim-end').style.left = `${endPct}%`;
            
            // Update Labels
            document.getElementById('lbl-start').innerText = settings.startTime.toFixed(3) + 's';
            document.getElementById('lbl-end').innerText = settings.endTime.toFixed(3) + 's';
            document.getElementById('lbl-dur').innerText = (settings.endTime - settings.startTime).toFixed(3) + 's';
        }

        function moveMarker(clientX) {
            if (currentEditPadIndex === null || !isDraggingMarker) return;
            
            const rect = document.getElementById('waveform-container').getBoundingClientRect();
            let x = clientX - rect.left;
            x = Math.max(0, Math.min(x, rect.width)); // clamp
            
            const pct = x / rect.width;
            const player = drumPlayers.player(currentEditPadIndex.toString());
            const totalDur = player.buffer.duration;
            const newTime = pct * totalDur;

            const settings = padSettings[currentEditPadIndex];

            if (isDraggingMarker === 'start') {
                settings.startTime = Math.min(newTime, settings.endTime - 0.01);
            } else {
                settings.endTime = Math.max(newTime, settings.startTime + 0.01);
            }
            updateMarkerPositions();
        }

        // Marker Interactions
        document.getElementById('marker-start').addEventListener('mousedown', (e) => { isDraggingMarker = 'start'; e.preventDefault(); });
        document.getElementById('marker-end').addEventListener('mousedown', (e) => { isDraggingMarker = 'end'; e.preventDefault(); });
        window.addEventListener('mouseup', () => { isDraggingMarker = null; });
        window.addEventListener('mousemove', (e) => { if(isDraggingMarker) moveMarker(e.clientX); });
        
        function previewPadSample() {
            if(currentEditPadIndex !== null) triggerPad(currentEditPadIndex);
        }

        // --- 8. File Loading ---
        const fileInput = document.getElementById('file-input');
        window.openFileBrowser = (index) => { selectedPadIndex = index; fileInput.click(); };
        fileInput.addEventListener('change', (e) => {
            if (e.target.files.length > 0 && selectedPadIndex !== null) {
                loadSampleToPad(selectedPadIndex, e.target.files[0]);
                e.target.value = '';
            }
        });
        function loadSampleToPad(index, file) {
            const url = URL.createObjectURL(file);
            drumPlayers.add(index.toString(), url, () => {
                // Reset region on load
                padSettings[index].startTime = 0;
                padSettings[index].endTime = drumPlayers.player(index.toString()).buffer.duration;
            });
            // Persist UI
            const player = drumPlayers.player(index.toString()); // Note: Might be async loaded, but URL obj is fast
            player.loop = padSettings[index].isLoop;
            player.detune = padSettings[index].pitch * 100;
            player.playbackRate = padSettings[index].rate;
            document.getElementById(`pad-name-${index}`).textContent = file.name;
            document.getElementById(`list-name-${index}`).textContent = file.name;
            document.getElementById(`pad-${index}`).classList.add('has-sample');
        }

        // --- 9. Input & Utilities ---
        function blinkMidiLed() { const led = document.getElementById('midi-led'); led.classList.add('on'); setTimeout(() => led.classList.remove('on'), 100); }
        
        const pianoKeys = { 'a':'C3', 'w':'C#3', 's':'D3', 'e':'D#3', 'd':'E3', 'f':'F3', 't':'F#3', 'g':'G3' };
        const mpcKeys = { '1':0, '2':1, '3':2, '4':3, 'q':4, 'w':5, 'e':6, 'r':7, 'a':8, 's':9, 'd':10, 'f':11, 'z':12, 'x':13, 'c':14, 'v':15 };

        window.addEventListener('keydown', (e) => {
            if (e.repeat) return;
            const key = e.key.toLowerCase();
            if (activeTab === 'keys' && pianoKeys[key]) triggerAttack(pianoKeys[key]);
            else if (activeTab === 'mpc' && mpcKeys.hasOwnProperty(key)) triggerPad(mpcKeys[key]);
        });
        window.addEventListener('keyup', (e) => { if (activeTab === 'keys' && pianoKeys[e.key.toLowerCase()]) triggerRelease(pianoKeys[e.key.toLowerCase()]); });

        function setupMIDI() {
            if (navigator.requestMIDIAccess) {
                navigator.requestMIDIAccess().then(access => {
                    for (let input of access.inputs.values()) input.onmidimessage = handleMIDIMessage;
                    access.onstatechange = (e) => { if (e.port.type === "input" && e.port.state === "connected") e.port.onmidimessage = handleMIDIMessage; };
                }).catch(e => console.warn("MIDI fail", e));
            }
        }
        function handleMIDIMessage(msg) {
            const [cmd, note, vel] = msg.data;
            const isNoteOn = (cmd & 0xf0) === 144 && vel > 0;
            const isNoteOff = (cmd & 0xf0) === 128 || ((cmd & 0xf0) === 144 && vel === 0);
            if (activeTab === 'keys') {
                const noteName = Tone.Frequency(note, "midi").toNote();
                if (isNoteOn) triggerAttack(noteName);
                if (isNoteOff) triggerRelease(noteName);
            } else {
                if (isNoteOn && note >= 36 && note <= 51) triggerPad(note - 36);
            }
        }

        function drawVisualizer() {
            const canvas = document.getElementById('visualizer');
            const ctx = canvas.getContext('2d');
            function loop() {
                requestAnimationFrame(loop);
                if (!toneStarted) return;
                const values = analyser.getValue();
                ctx.fillStyle = '#111'; ctx.fillRect(0,0,canvas.width,canvas.height);
                ctx.beginPath(); ctx.lineWidth = 2; ctx.strokeStyle = '#00d2ff';
                const sliceW = canvas.width * 1.0 / values.length;
                let x = 0;
                for(let i=0; i<values.length; i++) {
                    const v = (values[i] + 1) / 2; const y = v * canvas.height;
                    i===0 ? ctx.moveTo(x,y) : ctx.lineTo(x,y); x += sliceW;
                }
                ctx.stroke();
            }
            loop();
        }

        document.getElementById('start-btn').addEventListener('click', initAudio);
    </script>
</body>
</html>

**Mike:** continue where you left off.

**GPT:** Here’s the updated version of your sampler with:

- **Global tempo slider** (60–180 BPM) + display.
- Each pad has an **“Original BPM”** field.
- When a loop is loaded and loop mode is enabled, its **playbackRate is auto-set** so the loop matches the **global tempo** (`rate = globalBpm / originalBpm`), and it updates whenever the global tempo changes.

👉 **Download the updated HTML file:**  
[Download websampler_pro_tempo_sync.html](sandbox:/mnt/data/websampler_pro_tempo_sync.html)

And here’s the full code inline:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WebSampler Pro | Tone.js Engine</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/tone/14.8.49/Tone.js"></script>
    
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&family=Share+Tech+Mono&display=swap');

        :root {
            --bg-dark: #1a1a1d;
            --panel-gray: #2b2b2e;
            --accent-orange: #ff9900;
            --accent-blue: #00d2ff;
            --pad-off: #3a3a3e;
            --pad-on: #ff9900;
            --pad-playing: #ffcc00;
        }

        body {
            background-color: #0f0f10;
            font-family: 'Inter', sans-serif;
            user-select: none;
            overflow: hidden;
        }

        /* Rack Panel Texture */
        .rack-panel {
            background: linear-gradient(180deg, #323236 0%, #252528 100%);
            border-top: 1px solid #4a4a4f;
            border-bottom: 1px solid #111;
            box-shadow: inset 0 0 20px rgba(0,0,0,0.5);
        }

        /* Standard Knob Styles */
        .knob-container {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            cursor: ns-resize;
        }
        .knob-circle {
            width: 48px;
            height: 48px;
            border-radius: 50%;
            background: radial-gradient(circle at 30% 30%, #4a4a4f, #1a1a1d);
            border: 2px solid #111;
            box-shadow: 0 4px 6px rgba(0,0,0,0.4);
            position: relative;
            transition: transform 0.05s linear;
        }
        /* Mini Knob for Pads */
        .mini-knob .knob-circle {
            width: 28px;
            height: 28px;
            border-width: 1px;
        }
        .mini-knob .knob-indicator {
            width: 1.5px;
            height: 50%;
        }
        .mini-knob .knob-label {
            font-size: 0.5rem;
            margin-top: 2px;
        }
        .mini-knob .knob-value {
            font-size: 0.5rem;
            margin-bottom: 1px;
            height: 10px; 
        }

        .knob-indicator {
            position: absolute;
            top: 50%; left: 50%;
            width: 2px; height: 50%;
            background: transparent;
            transform-origin: top center; 
        }
        .knob-indicator::after {
            content: '';
            position: absolute;
            top: 4px; left: -1px;
            width: 2px; height: 12px;
            background-color: var(--accent-orange);
            box-shadow: 0 0 5px var(--accent-orange);
        }
        .mini-knob .knob-indicator::after {
            height: 6px;
            top: 2px;
        }

        .knob-label {
            font-family: 'Share Tech Mono', monospace;
            font-size: 0.65rem;
            color: #888;
            margin-top: 6px;
            letter-spacing: 0.05em;
        }

        .knob-value {
            font-family: 'Share Tech Mono', monospace;
            font-size: 0.7rem;
            color: var(--accent-blue);
            margin-bottom: 4px;
            opacity: 0;
            transition: opacity 0.2s;
        }
        .knob-container:hover .knob-value { opacity: 1; }

        /* Keyboard */
        .piano-container { perspective: 600px; }
        .key { transition: background-color 0.05s, transform 0.05s; border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; }
        .white-key { background: linear-gradient(to bottom, #f0f0f0, #e0e0e0); height: 160px; z-index: 1; border: 1px solid #000; box-shadow: inset 0 -5px 10px rgba(0,0,0,0.1); }
        .white-key.active { transform: translateY(2px) rotateX(-2deg); background: #ccc; }
        .black-key { background: #111; height: 100px; z-index: 2; width: 60%; position: absolute; left: 70%; border: 1px solid #000; box-shadow: 2px 2px 5px rgba(0,0,0,0.5); border-bottom-left-radius: 2px; border-bottom-right-radius: 2px; }
        .black-key.active { background: #333; transform: translateY(2px) rotateX(-2deg); }

        /* MPC Pads */
        .pad-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: repeat(4, 1fr);
            gap: 6px;
            padding: 8px;
            background: #111;
            border-radius: 4px;
            box-shadow: inset 0 0 10px #000;
            height: 100%;
            overflow-y: auto;
        }

        .mpc-pad {
            background-color: var(--pad-off);
            border-radius: 4px;
            box-shadow: inset 0 0 5px rgba(0,0,0,0.5), 0 2px 4px rgba(0,0,0,0.5);
            cursor: pointer;
            transition: background-color 0.05s, transform 0.05s;
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 4px;
            min-height: 90px;
        }

        .mpc-pad:active, .mpc-pad.active {
            background-color: var(--pad-on);
            box-shadow: 0 0 15px var(--accent-orange);
            transform: scale(0.99);
        }

        .mpc-pad.looping {
            background-color: var(--pad-playing);
            border-color: #fff;
            box-shadow: 0 0 10px rgba(255, 204, 0, 0.5);
        }

        .mpc-pad.has-sample {
            background-color: #4a4a4f;
            border: 1px solid #555;
        }

        .pad-top-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .pad-controls {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: auto;
            background: rgba(0,0,0,0.3);
            border-radius: 4px;
            padding: 2px 4px;
            gap: 4px;
        }

        /* Pad Slider */
        input[type=range].pad-slider {
            -webkit-appearance: none;
            width: 100%;
            height: 3px;
            background: #222;
            border-radius: 2px;
            outline: none;
        }
        input[type=range].pad-slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: var(--accent-orange);
            cursor: pointer;
        }

        .pad-label {
            font-family: 'Share Tech Mono', monospace;
            font-size: 0.6rem;
            color: rgba(255,255,255,0.4);
            pointer-events: none;
        }

        /* Control Button Styles */
        .pad-btn {
            pointer-events: auto;
            font-size: 9px;
            background: #222;
            color: #888;
            border: 1px solid #444;
            border-radius: 2px;
            padding: 1px 3px;
            font-family: monospace;
            z-index: 10;
            cursor: pointer;
            margin-left: 4px;
        }
        .pad-btn:hover { color: #fff; border-color: #666; }
        .pad-btn.loop-active { color: var(--accent-orange); border-color: var(--accent-orange); }

        .pad-filename {
            font-size: 0.55rem;
            color: #fff;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            text-align: center;
            pointer-events: none;
            margin: 2px 0;
            font-weight: 600;
        }
        
        .tiny-label {
            font-size: 0.45rem;
            color: #aaa;
            font-family: 'Share Tech Mono', monospace;
            margin-bottom: 1px;
            display: block;
        }

        /* Sample Editor Modal */
        .modal-overlay {
            position: fixed; inset: 0; background: rgba(0,0,0,0.8); z-index: 100;
            display: flex; justify-content: center; align-items: center;
            backdrop-filter: blur(5px);
        }
        .modal-content {
            background: #1a1a1d; border: 1px solid #444; border-radius: 8px;
            width: 90%; max-width: 800px; padding: 20px;
            box-shadow: 0 0 30px rgba(0,0,0,0.8);
            display: flex; flex-direction: column; gap: 15px;
        }
        .waveform-wrapper {
            position: relative; height: 150px; background: #000;
            border: 1px solid #333; border-radius: 4px; cursor: crosshair;
        }
        #waveform-canvas { width: 100%; height: 100%; display: block; }
        
        /* Markers */
        .marker {
            position: absolute; top: 0; bottom: 0; width: 2px;
            cursor: ew-resize; z-index: 10;
        }
        .marker-handle {
            position: absolute; top: 0; width: 0; height: 0;
            border-left: 6px solid transparent; border-right: 6px solid transparent;
            cursor: ew-resize;
        }
        .marker-start { background: #0f0; left: 0; }
        .marker-start .marker-handle { border-top: 8px solid #0f0; left: -5px; }
        
        .marker-end { background: #f00; left: 100%; }
        .marker-end .marker-handle { border-top: 8px solid #f00; left: -5px; }

        .region-dim {
            position: absolute; top: 0; bottom: 0; background: rgba(0,0,0,0.6); pointer-events: none;
        }

        /* Screen/Header */
        .info-screen { background: #111; border: 1px solid #333; box-shadow: inset 0 0 10px rgba(0,0,0,0.8); font-family: 'Share Tech Mono', monospace; }
        .led-indicator { width: 8px; height: 8px; border-radius: 50%; background-color: #333; transition: background-color 0.1s; }
        .led-indicator.on { background-color: var(--accent-orange); box-shadow: 0 0 8px var(--accent-orange); }

        /* Tabs */
        .nav-tab { color: #666; border-bottom: 2px solid transparent; cursor: pointer; transition: all 0.2s; }
        .nav-tab.active { color: var(--accent-orange); border-bottom: 2px solid var(--accent-orange); }

        .drag-over { border: 2px dashed var(--accent-orange) !important; background: #222 !important; }
        .hidden { display: none !important; }
        #overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(15,15,16,0.95); z-index: 50; display: flex; flex-direction: column; justify-content: center; align-items: center; }
        
        .sample-list-item { font-family: 'Share Tech Mono', monospace; font-size: 0.75rem; transition: background 0.1s; }
        .sample-list-item:hover { background-color: #333; }
    </style>
</head>
<body class="text-white h-screen flex flex-col">

    <!-- Initialization Overlay -->
    <div id="overlay">
        <h1 class="text-3xl font-bold mb-4 tracking-widest text-gray-200">K-SAMPLER <span class="text-orange-500">PRO</span></h1>
        <p class="text-gray-400 mb-8 font-mono text-sm">Powered by Tone.js</p>
        <button id="start-btn" class="px-8 py-3 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded shadow-[0_0_15px_rgba(255,153,0,0.3)] transition border border-orange-400">
            INITIALIZE SYSTEM
        </button>
        <p id="loading-text" class="mt-4 text-xs text-gray-500 font-mono hidden">Loading Core Library...</p>
    </div>

    <!-- Sample Editor Modal -->
    <div id="editor-modal" class="modal-overlay hidden">
        <div class="modal-content">
            <div class="flex justify-between items-center border-b border-[#333] pb-2">
                <h2 class="text-lg font-bold font-mono text-gray-200">SAMPLE EDITOR: <span id="editor-title" class="text-orange-500">PAD 1</span></h2>
                <button onclick="closeEditor()" class="text-gray-400 hover:text-white font-bold text-xl">&times;</button>
            </div>
            
            <div class="waveform-wrapper" id="waveform-container">
                <canvas id="waveform-canvas"></canvas>
                <!-- Overlays -->
                <div id="dim-start" class="region-dim" style="left:0; width:0;"></div>
                <div id="dim-end" class="region-dim" style="left:100%; right:0;"></div>
                <div id="marker-start" class="marker marker-start">
                    <div class="marker-handle"></div>
                </div>
                <div id="marker-end" class="marker marker-end">
                    <div class="marker-handle"></div>
                </div>
            </div>

            <div class="flex gap-4 justify-between items-center bg-[#111] p-3 rounded font-mono text-xs">
                <div class="flex gap-4">
                    <div class="flex flex-col">
                        <span class="text-gray-500">START</span>
                        <span id="lbl-start" class="text-green-400">0.000s</span>
                    </div>
                    <div class="flex flex-col">
                        <span class="text-gray-500">END</span>
                        <span id="lbl-end" class="text-red-400">1.000s</span>
                    </div>
                    <div class="flex flex-col">
                        <span class="text-gray-500">DURATION</span>
                        <span id="lbl-dur" class="text-white">1.000s</span>
                    </div>
                </div>
                <div class="flex gap-2">
                    <button onclick="previewPadSample()" class="px-4 py-2 bg-[#333] hover:bg-[#444] rounded text-white flex items-center gap-2">
                        <span>▶</span> PREVIEW
                    </button>
                    <button onclick="closeEditor()" class="px-4 py-2 bg-orange-700 hover:bg-orange-600 rounded text-white font-bold">DONE</button>
                </div>
            </div>
            <p class="text-[10px] text-gray-600 font-mono">DRAG MARKERS TO SET PLAYBACK REGION. CHANGES ARE AUTO-SAVED.</p>
        </div>
    </div>

    <!-- Main Interface -->
    <div class="flex-1 flex flex-col max-w-6xl mx-auto w-full p-2 lg:p-6 gap-4 h-full">
        
        <!-- Header -->
        <header class="bg-[#222] border border-[#333] p-4 rounded-t-lg flex justify-between items-center shadow-lg shrink-0">
            <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-orange-600 rounded flex items-center justify-center font-bold text-2xl shadow-inner">K</div>
                <div>
                    <h1 class="text-lg font-bold tracking-wider">WORKSTATION</h1>
                    <p class="text-xs text-gray-500 font-mono">HYBRID ENGINE</p>
                </div>
            </div>
            <div class="info-screen h-12 w-48 rounded hidden md:flex items-center justify-center relative overflow-hidden">
                <canvas id="visualizer" width="190" height="46"></canvas>
            </div>
            <div class="flex items-center gap-6">
                <div class="flex flex-col items-center gap-1">
                    <div id="midi-led" class="led-indicator"></div>
                    <span class="text-[10px] text-gray-500 font-mono">MIDI</span>
                </div>
                <div class="knob-wrapper" data-param="master" data-min="-60" data-max="6" data-value="-6" data-suffix="dB"></div>
            </div>
        </header>

        <!-- Main Rack (Global FX + Tempo) -->
        <div class="rack-panel rounded-b-lg border border-[#333] p-4 lg:p-6 flex flex-wrap content-start gap-4 lg:gap-8 shrink-0 overflow-x-auto">
            <!-- Envelope -->
            <div class="bg-[#1e1e20] border border-[#333] rounded p-3 lg:p-4 flex flex-col gap-2 shadow-xl min-w-[280px]">
                <div class="border-b border-[#333] pb-2 mb-2 flex justify-between">
                    <span class="text-xs font-bold text-gray-400">AMP ENVELOPE (KEYS)</span>
                </div>
                <div class="flex gap-2 lg:gap-4 justify-center">
                    <div class="knob-wrapper" data-param="attack" data-min="0" data-max="2" data-value="0.05" data-suffix="s" data-label="ATTACK"></div>
                    <div class="knob-wrapper" data-param="decay" data-min="0" data-max="2" data-value="0.3" data-suffix="s" data-label="DECAY"></div>
                    <div class="knob-wrapper" data-param="sustain" data-min="0" data-max="1" data-value="0.8" data-suffix="" data-label="SUSTAIN"></div>
                    <div class="knob-wrapper" data-param="release" data-min="0" data-max="5" data-value="1.5" data-suffix="s" data-label="RELEASE"></div>
                </div>
            </div>
            <!-- Filter -->
            <div class="bg-[#1e1e20] border border-[#333] rounded p-3 lg:p-4 flex flex-col gap-2 shadow-xl min-w-[150px]">
                <div class="border-b border-[#333] pb-2 mb-2 flex justify-between">
                    <span class="text-xs font-bold text-gray-400">FILTER (GLOBAL)</span>
                </div>
                <div class="flex gap-2 lg:gap-4 justify-center">
                    <div class="knob-wrapper" data-param="cutoff" data-min="20" data-max="20000" data-value="20000" data-suffix="Hz" data-label="CUTOFF" data-log="true"></div>
                    <div class="knob-wrapper" data-param="resonance" data-min="0" data-max="20" data-value="1" data-suffix="" data-label="RESO"></div>
                </div>
            </div>
            <!-- FX -->
            <div class="bg-[#1e1e20] border border-[#333] rounded p-3 lg:p-4 flex flex-col gap-2 shadow-xl min-w-[220px]">
                <div class="border-b border-[#333] pb-2 mb-2 flex justify-between">
                    <span class="text-xs font-bold text-gray-400">FX CHAIN</span>
                </div>
                <div class="flex gap-2 lg:gap-4 justify-center">
                    <div class="knob-wrapper" data-param="delayTime" data-min="0" data-max="1" data-value="0.25" data-suffix="s" data-label="TIME"></div>
                    <div class="knob-wrapper" data-param="delayMix" data-min="0" data-max="1" data-value="0.1" data-suffix="" data-label="DLY"></div>
                    <div class="knob-wrapper" data-param="reverbMix" data-min="0" data-max="1" data-value="0.3" data-suffix="" data-label="RVB"></div>
                </div>
            </div>
            <!-- Global Tempo -->
            <div class="bg-[#1e1e20] border border-[#333] rounded p-3 lg:p-4 flex flex-col gap-2 shadow-xl min-w-[220px]">
                <div class="border-b border-[#333] pb-2 mb-2 flex justify-between items-center">
                    <span class="text-xs font-bold text-gray-400">GLOBAL TEMPO</span>
                    <span id="tempo-display" class="text-xs font-mono text-orange-400">120 BPM</span>
                </div>
                <div class="flex flex-col gap-2">
                    <input id="tempo-slider" type="range" min="60" max="180" value="120" class="w-full">
                    <p class="text-[10px] text-gray-500 font-mono">Loops on pads will auto-adjust playback rate to match this BPM based on their original BPM.</p>
                </div>
            </div>
        </div>

        <!-- Navigation Tabs -->
        <div class="flex gap-6 px-4 border-b border-[#333]">
            <button class="nav-tab active font-mono text-sm py-2" onclick="switchTab('keys')">PIANO KEYS</button>
            <button class="nav-tab font-mono text-sm py-2" onclick="switchTab('mpc')">MPC PADS</button>
        </div>

        <!-- Tab Content Area -->
        <div class="flex-1 relative overflow-hidden bg-[#0a0a0a] rounded-lg border border-[#333] shadow-2xl">
            <!-- VIEW: PIANO -->
            <div id="view-keys" class="absolute inset-0 flex flex-col justify-end pb-0 transition-opacity duration-300">
                <div class="h-48 piano-container w-full border-t-4 border-orange-600">
                    <div id="keyboard" class="flex relative h-full justify-center bg-[#0a0a0a]"></div>
                </div>
            </div>
            <!-- VIEW: MPC -->
            <div id="view-mpc" class="absolute inset-0 flex opacity-0 pointer-events-none transition-opacity duration-300 bg-[#151515]">
                <div class="flex-1 p-4 flex flex-col h-full">
                    <div class="flex justify-between items-end mb-2 shrink-0">
                        <span class="text-xs text-gray-400 font-mono">DRUM RACK 1</span>
                        <span class="text-[10px] text-gray-600 font-mono">DRAG SAMPLES ONTO PADS</span>
                    </div>
                    <div class="flex-1 min-h-0 pad-grid" id="pad-grid"></div>
                </div>
                <div class="w-64 bg-[#111] border-l border-[#333] flex flex-col shrink-0">
                    <div class="p-3 border-b border-[#333] bg-[#1a1a1d]">
                        <span class="text-xs font-bold text-gray-300 tracking-wider">SAMPLE LOADER</span>
                    </div>
                    <div class="flex-1 overflow-y-auto p-2 space-y-1" id="sample-list"></div>
                </div>
            </div>
        </div>
    </div>

    <input type="file" id="file-input" accept="audio/*" class="hidden">

    <script>
        // --- Global State ---
        let toneStarted = false;
        let activeTab = 'keys';
        let pianoSampler, drumPlayers;
        let filter, delay, reverb, limiter, analyser;
        let globalTempo = 120;

        const params = {
            attack: 0.05, decay: 0.3, sustain: 0.8, release: 1.5,
            cutoff: 20000, resonance: 1,
            delayTime: 0.25, delayMix: 0.1,
            reverbMix: 0.3,
            master: -6
        };

        const padCount = 16;
        // Pad Settings: loop, pitch, playback rate, original BPM, region
        const padSettings = new Array(padCount).fill(null).map(() => ({ 
            isLoop: false,
            pitch: 0,
            rate: 1.0,
            originalBpm: 120,
            startTime: 0,
            endTime: null
        })); 

        // --- Editor State ---
        let currentEditPadIndex = null;
        let isDraggingMarker = null; // 'start' or 'end'

        // --- 1. Audio Initialization ---
        async function initAudio() {
            document.getElementById('start-btn').classList.add('hidden');
            document.getElementById('loading-text').classList.remove('hidden');
            document.getElementById('loading-text').style.display = 'block';

            await Tone.start();
            toneStarted = true;

            Tone.Transport.bpm.value = globalTempo;
            Tone.Transport.start();

            limiter = new Tone.Limiter(-1).toDestination();
            reverb = new Tone.Reverb({ decay: 4, wet: params.reverbMix }).connect(limiter);
            await reverb.generate();
            delay = new Tone.FeedbackDelay({ delayTime: params.delayTime, feedback: 0.4, wet: params.delayMix }).connect(reverb);
            filter = new Tone.Filter({ type: "lowpass", frequency: params.cutoff, Q: params.resonance }).connect(delay);
            analyser = new Tone.Analyser("waveform", 256);
            limiter.connect(analyser);

            pianoSampler = new Tone.Sampler({
                urls: { "C4": "C4.mp3", "D#4": "Ds4.mp3", "F#4": "Fs4.mp3", "A4": "A4.mp3" },
                release: 1,
                baseUrl: "https://tonejs.github.io/audio/salamander/",
                onload: () => onAudioLoaded()
            }).connect(filter);

            drumPlayers = new Tone.Players({ urls: {}, fadeOut: 0.01 }).connect(filter);
        }

        function onAudioLoaded() {
            document.getElementById('overlay').style.opacity = 0;
            setTimeout(() => document.getElementById('overlay').remove(), 500);
            updateParams();
            drawVisualizer();
            setupMIDI();
        }

        function updateParams() {
            if (!pianoSampler) return;
            pianoSampler.attack = params.attack; pianoSampler.decay = params.decay;
            pianoSampler.sustain = params.sustain; pianoSampler.release = params.release;
            filter.frequency.rampTo(params.cutoff, 0.1); filter.Q.value = params.resonance;
            delay.delayTime.rampTo(params.delayTime, 0.1); delay.wet.value = params.delayMix;
            reverb.wet.value = params.reverbMix; Tone.Destination.volume.rampTo(params.master, 0.1);
        }

        // --- Global Tempo & Loop Time-Stretching ---
        function recalcPadRate(index) {
            const settings = padSettings[index];
            const origBpm = settings.originalBpm || globalTempo;
            let rate = globalTempo / origBpm;
            if (!isFinite(rate) || rate <= 0) rate = 1;
            settings.rate = rate;

            if (drumPlayers && drumPlayers.has(index.toString())) {
                const player = drumPlayers.player(index.toString());
                player.playbackRate = rate;
            }

            const slider = document.getElementById('rate-' + index);
            const label = document.getElementById('rate-val-' + index);
            if (slider) {
                const min = parseFloat(slider.min);
                const max = parseFloat(slider.max);
                slider.value = Math.max(min, Math.min(max, rate));
            }
            if (label) {
                label.textContent = rate.toFixed(2) + 'x';
            }
        }

        function setGlobalTempo(bpm) {
            globalTempo = bpm;
            if (Tone.Transport) {
                Tone.Transport.bpm.rampTo(bpm, 0.1);
            }
            const tempoDisplay = document.getElementById('tempo-display');
            if (tempoDisplay) tempoDisplay.textContent = Math.round(bpm) + ' BPM';

            // Update all pads so loops match the new tempo
            for (let i = 0; i < padCount; i++) {
                if (drumPlayers && drumPlayers.has(i.toString())) {
                    recalcPadRate(i);
                }
            }
        }

        // Attach tempo slider handlers
        const tempoSliderEl = document.getElementById('tempo-slider');
        if (tempoSliderEl) {
            tempoSliderEl.addEventListener('input', (e) => {
                setGlobalTempo(parseFloat(e.target.value));
            });
            setGlobalTempo(parseFloat(tempoSliderEl.value));
        }

        // --- 2. UI Knob Logic ---
        class Knob {
            constructor(element, isMini = false) {
                this.element = element;
                this.param = element.dataset.param;
                this.min = parseFloat(element.dataset.min);
                this.max = parseFloat(element.dataset.max);
                this.value = parseFloat(element.dataset.value);
                this.suffix = element.dataset.suffix || "";
                this.label = element.dataset.label || "VOL";
                this.isLog = element.dataset.log === "true";
                this.isMini = isMini;
                this.render();
                this.addListeners();
            }
            render() {
                const miniClass = this.isMini ? 'mini-knob' : '';
                this.element.className = `knob-wrapper ${miniClass}`;
                this.element.innerHTML = `<div class="knob-value">${this.formatValue(this.value)}${this.suffix}</div><div class="knob-container"><div class="knob-circle" style="transform: rotate(${this.valToDeg()}deg)"><div class="knob-indicator"></div></div><div class="knob-label">${this.label}</div></div>`;
            }
            formatValue(val) { return Math.abs(val) < 10 ? val.toFixed(this.isMini ? 1 : 2) : Math.round(val); }
            valToDeg() {
                let pct;
                if (this.isLog) {
                    const minLog = Math.log(this.min), maxLog = Math.log(this.max);
                    pct = (Math.log(this.value) - minLog) / (maxLog - minLog);
                } else {
                    pct = (this.value - this.min) / (this.max - this.min);
                }
                return (pct * 290) - 145;
            }
            updateValueFromDy(dy) {
                const sensitivity = 0.005; 
                if (this.isLog) {
                    const currentPct = (Math.log(this.value) - Math.log(this.min)) / (Math.log(this.max) - Math.log(this.min));
                    let newPct = Math.max(0, Math.min(1, currentPct + (dy * sensitivity)));
                    this.value = Math.exp(newPct * (Math.log(this.max) - Math.log(this.min)) + Math.log(this.min));
                } else {
                    this.value = Math.max(this.min, Math.min(this.max, this.value + (dy * (this.max - this.min) * sensitivity)));
                }
                this.updateVisuals();
                if(params.hasOwnProperty(this.param)) { params[this.param] = this.value; updateParams(); }
                else if(this.element.onValueChange) this.element.onValueChange(this.value);
            }
            updateVisuals() {
                const circle = this.element.querySelector('.knob-circle');
                const valDisplay = this.element.querySelector('.knob-value');
                circle.style.transform = `rotate(${this.valToDeg()}deg)`;
                valDisplay.textContent = `${this.formatValue(this.value)}${this.suffix}`;
            }
            addListeners() {
                const container = this.element.querySelector('.knob-container');
                const startDrag = (e) => {
                    e.stopPropagation();
                    const startY = e.clientY || e.touches[0].clientY;
                    const onMove = (me) => { me.preventDefault(); this.updateValueFromDy(startY - (me.clientY || me.touches[0].clientY)); };
                    const onUp = () => { window.removeEventListener('mousemove', onMove); window.removeEventListener('mouseup', onUp); window.removeEventListener('touchmove', onMove); window.removeEventListener('touchend', onUp); };
                    window.addEventListener('mousemove', onMove); window.addEventListener('mouseup', onUp); window.addEventListener('touchmove', onMove); window.addEventListener('touchend', onUp);
                };
                container.addEventListener('mousedown', startDrag);
                container.addEventListener('touchstart', (e) => startDrag(e));
                container.addEventListener('click', (e) => e.stopPropagation());
            }
        }
        document.querySelectorAll('.knob-wrapper').forEach(el => new Knob(el));

        // --- 3. View Logic ---
        window.switchTab = (tab) => {
            activeTab = tab;
            document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
            event.target.classList.add('active');
            const keysView = document.getElementById('view-keys');
            const mpcView = document.getElementById('view-mpc');
            if (tab === 'keys') {
                keysView.style.opacity = '1';
                keysView.style.pointerEvents = 'all';
                mpcView.style.opacity = '0';
                mpcView.style.pointerEvents = 'none';
            } else {
                keysView.style.opacity = '0';
                keysView.style.pointerEvents = 'none';
                mpcView.style.opacity = '1';
                mpcView.style.pointerEvents = 'all';
            }
        };

        // --- 4. Piano Logic ---
        const keyboardEl = document.getElementById('keyboard');
        const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
        const keyMap = {}; 
        function createKeyboard() {
            for (let oct = 2; oct <= 5; oct++) {
                notes.forEach(note => {
                    const noteName = `${note}${oct}`;
                    const isBlack = note.includes('#');
                    const key = document.createElement('div');
                    key.className = `key ${isBlack ? 'black-key' : 'white-key'}`;
                    key.dataset.note = noteName;
                    if (isBlack) { key.style.marginLeft = "-1.5rem"; key.style.marginRight = "-1.5rem"; }
                    const play = () => { if(activeTab === 'keys') triggerAttack(noteName); };
                    const stop = () => { if(activeTab === 'keys') triggerRelease(noteName); };
                    key.addEventListener('mousedown', play);
                    key.addEventListener('mouseup', stop);
                    key.addEventListener('mouseleave', stop);
                    key.addEventListener('touchstart', (e) => { e.preventDefault(); play(); });
                    key.addEventListener('touchend', stop);
                    keyboardEl.appendChild(key);
                    keyMap[noteName] = key;
                });
            }
        }
        createKeyboard();
        function triggerAttack(note) {
            if (toneStarted) {
                pianoSampler.triggerAttack(note);
                if(keyMap[note]) keyMap[note].classList.add('active');
                blinkMidiLed();
            }
        }
        function triggerRelease(note) {
            if (toneStarted) {
                pianoSampler.triggerRelease(note);
                if(keyMap[note]) keyMap[note].classList.remove('active');
            }
        }

        // --- 5. MPC UI ---
        const padGrid = document.getElementById('pad-grid');
        const sampleList = document.getElementById('sample-list');
        let selectedPadIndex = null;

        for(let i=0; i<padCount; i++) {
            const pad = document.createElement('div');
            pad.className = 'mpc-pad';
            pad.id = `pad-${i}`;
            pad.dataset.index = i;
            
            pad.innerHTML = `
                <div class="pad-top-row">
                    <span class="pad-label">PAD ${i+1}</span>
                    <div class="flex gap-1">
                        <button class="pad-btn" id="edit-${i}" title="Edit Sample">✎</button>
                        <button class="pad-btn" id="toggle-${i}" title="Toggle One-Shot / Loop">➝</button>
                    </div>
                </div>
                <span class="pad-filename" id="pad-name-${i}">Empty</span>
                <div class="pad-controls" id="controls-${i}">
                    <div class="mini-knob-wrapper" data-index="${i}" data-param="tune" data-min="-12" data-max="12" data-value="0" data-label="TUNE"></div>
                    <div class="flex flex-col flex-1 ml-2 pb-1">
                        <div class="flex justify-between items-center mb-1">
                            <div class="flex items-center gap-1">
                                <span class="tiny-label">BPM</span>
                                <input type="number" min="40" max="260" value="120" class="w-14 bg-[#111] border border-[#444] rounded text-[0.55rem] px-1 py-[1px] text-right" id="bpm-${i}">
                            </div>
                            <div class="flex items-center gap-1">
                                <span class="tiny-label">RATE</span>
                                <span class="tiny-label text-blue-400" id="rate-val-${i}">1.0x</span>
                            </div>
                        </div>
                        <input type="range" class="pad-slider" min="0.5" max="2.0" step="0.1" value="1.0" id="rate-${i}">
                    </div>
                </div>
            `;
            
            // Edit Button
            pad.querySelector(`#edit-${i}`).addEventListener('click', (e) => { e.stopPropagation(); openEditor(i); });
            // Loop Button
            pad.querySelector(`#toggle-${i}`).addEventListener('click', (e) => { e.stopPropagation(); togglePadMode(i); });
            // Pad Interactions
            pad.addEventListener('mousedown', (e) => { if(isControlElement(e.target)) return; triggerPad(i); });
            pad.addEventListener('touchstart', (e) => { e.preventDefault(); if(isControlElement(e.target)) return; triggerPad(i); });
            // Drag & Drop
            pad.addEventListener('dragover', (e) => { e.preventDefault(); pad.classList.add('drag-over'); });
            pad.addEventListener('dragleave', () => pad.classList.remove('drag-over'));
            pad.addEventListener('drop', (e) => {
                e.preventDefault();
                pad.classList.remove('drag-over');
                const file = e.dataTransfer.files[0];
                if (file && file.type.startsWith('audio')) loadSampleToPad(i, file);
            });

            padGrid.appendChild(pad);

            // Mini knob
            const knobEl = pad.querySelector('.mini-knob-wrapper');
            const tuneKnob = new Knob(knobEl, true);
            tuneKnob.element.onValueChange = (val) => {
                padSettings[i].pitch = val;
                if(drumPlayers && drumPlayers.has(i.toString())) {
                    drumPlayers.player(i.toString()).detune = val * 100;
                }
            };

            const bpmInput = pad.querySelector('#bpm-' + i);
            bpmInput.addEventListener('change', (e) => {
                const v = parseFloat(e.target.value) || 120;
                padSettings[i].originalBpm = v;
                if (padSettings[i].isLoop && drumPlayers && drumPlayers.has(i.toString())) {
                    recalcPadRate(i);
                }
            });

            const rateSlider = pad.querySelector('#rate-' + i);
            rateSlider.addEventListener('input', (e) => {
                const val = parseFloat(e.target.value);
                document.getElementById('rate-val-' + i).textContent = val.toFixed(1) + "x";
                padSettings[i].rate = val;
                if(drumPlayers && drumPlayers.has(i.toString())) {
                    drumPlayers.player(i.toString()).playbackRate = val;
                }
            });
            rateSlider.addEventListener('mousedown', e => e.stopPropagation());
            rateSlider.addEventListener('touchstart', e => e.stopPropagation());

            // Browser List
            const li = document.createElement('div');
            li.className = 'sample-list-item flex justify-between items-center p-2 rounded border border-transparent hover:border-[#333] mb-1';
            li.innerHTML = `<span class="text-gray-400">PAD ${i+1}</span><div class="flex items-center gap-2"><span class="text-[10px] text-gray-500 w-20 truncate text-right" id="list-name-${i}">-</span><button class="text-orange-500 hover:text-white" onclick="openFileBrowser(${i})">📂</button></div>`;
            sampleList.appendChild(li);
        }

        function isControlElement(target) {
            return target.tagName === 'BUTTON' || target.tagName === 'INPUT' || target.closest('.knob-wrapper');
        }

        // --- 6. Playback Logic ---
        function togglePadMode(index) {
            padSettings[index].isLoop = !padSettings[index].isLoop;
            const btn = document.getElementById('toggle-' + index);
            const pad = document.getElementById('pad-' + index);
            if (padSettings[index].isLoop) {
                btn.textContent = "⟳";
                btn.classList.add('loop-active');
                if (drumPlayers && drumPlayers.has(index.toString())) {
                    recalcPadRate(index);
                }
            } else { 
                btn.textContent = "➝";
                btn.classList.remove('loop-active'); 
                if (drumPlayers && drumPlayers.has(index.toString()) && drumPlayers.player(index.toString()).state === 'started') {
                    drumPlayers.player(index.toString()).stop();
                    pad.classList.remove('looping');
                }
            }
        }

        function triggerPad(index) {
            if(!toneStarted || !drumPlayers) return;
            const padEl = document.getElementById('pad-' + index);
            if (!drumPlayers.has(index.toString())) {
                padEl.classList.add('active');
                setTimeout(() => padEl.classList.remove('active'), 100);
                return;
            }

            const player = drumPlayers.player(index.toString());
            const settings = padSettings[index];
            const bufferDuration = player.buffer.duration;

            const start = settings.startTime;
            const end = settings.endTime !== null ? settings.endTime : bufferDuration;
            const duration = Math.max(0, end - start);

            player.detune = settings.pitch * 100;
            player.playbackRate = settings.rate;

            if (settings.isLoop) {
                player.loop = true;
                player.loopStart = start;
                player.loopEnd = end;
                
                if (player.state === 'started') {
                    player.stop();
                    padEl.classList.remove('looping', 'active');
                } else {
                    player.start(undefined, start);
                    padEl.classList.add('looping');
                }
            } else {
                player.loop = false;
                player.stop();
                player.start(undefined, start, duration);
                padEl.classList.remove('active');
                void padEl.offsetWidth;
                padEl.classList.add('active');
                setTimeout(() => padEl.classList.remove('active'), 100);
            }
            blinkMidiLed();
        }

        // --- 7. Sample Editor Logic ---
        const editorModal = document.getElementById('editor-modal');
        const waveformCanvas = document.getElementById('waveform-canvas');
        const waveformCtx = waveformCanvas.getContext('2d');
        const markerStart = document.getElementById('marker-start');
        const markerEnd = document.getElementById('marker-end');
        
        function openEditor(index) {
            if (!drumPlayers || !drumPlayers.has(index.toString())) return;
            currentEditPadIndex = index;
            const player = drumPlayers.player(index.toString());
            
            document.getElementById('editor-title').innerText = `PAD ${index + 1}`;
            editorModal.classList.remove('hidden');

            const settings = padSettings[index];
            const duration = player.buffer.duration;
            if (settings.endTime === null) settings.endTime = duration;

            drawWaveform(player.buffer);
            updateMarkerPositions();
        }

        function closeEditor() {
            editorModal.classList.add('hidden');
            currentEditPadIndex = null;
        }

        function drawWaveform(buffer) {
            const channelData = buffer.getChannelData(0);
            const parent = waveformCanvas.parentElement;
            waveformCanvas.width = parent.clientWidth;
            waveformCanvas.height = parent.clientHeight;

            const step = Math.ceil(channelData.length / waveformCanvas.width);
            const amp = waveformCanvas.height / 2;
            
            waveformCtx.fillStyle = "#000";
            waveformCtx.fillRect(0, 0, waveformCanvas.width, waveformCanvas.height);
            waveformCtx.beginPath();
            waveformCtx.strokeStyle = "#00d2ff";
            waveformCtx.lineWidth = 1;

            for(let i = 0; i < waveformCanvas.width; i++){
                let min = 1.0;
                let max = -1.0;
                for(let j = 0; j < step; j++) {
                    const idx = (i * step) + j;
                    if (idx >= channelData.length) break;
                    const datum = channelData[idx];
                    if (datum < min) min = datum;
                    if (datum > max) max = datum;
                }
                waveformCtx.moveTo(i, (1 + min) * amp);
                waveformCtx.lineTo(i, (1 + max) * amp);
            }
            waveformCtx.stroke();
        }

        function updateMarkerPositions() {
            if (currentEditPadIndex === null) return;
            const settings = padSettings[currentEditPadIndex];
            const player = drumPlayers.player(currentEditPadIndex.toString());
            const totalDur = player.buffer.duration;
            
            const startPct = (settings.startTime / totalDur) * 100;
            const endPct = (settings.endTime / totalDur) * 100;

            markerStart.style.left = startPct + '%';
            document.getElementById('dim-start').style.width = startPct + '%';
            
            markerEnd.style.left = endPct + '%';
            document.getElementById('dim-end').style.left = endPct + '%';
            
            document.getElementById('lbl-start').innerText = settings.startTime.toFixed(3) + 's';
            document.getElementById('lbl-end').innerText = settings.endTime.toFixed(3) + 's';
            document.getElementById('lbl-dur').innerText = (settings.endTime - settings.startTime).toFixed(3) + 's';
        }

        function moveMarker(clientX) {
            if (currentEditPadIndex === null || !isDraggingMarker) return;
            
            const rect = document.getElementById('waveform-container').getBoundingClientRect();
            let x = clientX - rect.left;
            x = Math.max(0, Math.min(x, rect.width));
            
            const pct = x / rect.width;
            const player = drumPlayers.player(currentEditPadIndex.toString());
            const totalDur = player.buffer.duration;
            const newTime = pct * totalDur;

            const settings = padSettings[currentEditPadIndex];

            if (isDraggingMarker === 'start') {
                settings.startTime = Math.min(newTime, settings.endTime - 0.01);
            } else {
                settings.endTime = Math.max(newTime, settings.startTime + 0.01);
            }
            updateMarkerPositions();
        }

        document.getElementById('marker-start').addEventListener('mousedown', (e) => { isDraggingMarker = 'start'; e.preventDefault(); });
        document.getElementById('marker-end').addEventListener('mousedown', (e) => { isDraggingMarker = 'end'; e.preventDefault(); });
        window.addEventListener('mouseup', () => { isDraggingMarker = null; });
        window.addEventListener('mousemove', (e) => { if(isDraggingMarker) moveMarker(e.clientX); });
        
        function previewPadSample() {
            if(currentEditPadIndex !== null) triggerPad(currentEditPadIndex);
        }

        // --- 8. File Loading ---
        const fileInput = document.getElementById('file-input');
        window.openFileBrowser = (index) => { selectedPadIndex = index; fileInput.click(); };
        fileInput.addEventListener('change', (e) => {
            if (e.target.files.length > 0 && selectedPadIndex !== null) {
                loadSampleToPad(selectedPadIndex, e.target.files[0]);
                e.target.value = '';
            }
        });

        function loadSampleToPad(index, file) {
            const url = URL.createObjectURL(file);
            drumPlayers.add(index.toString(), url, () => {
                padSettings[index].startTime = 0;
                padSettings[index].endTime = drumPlayers.player(index.toString()).buffer.duration;
            });

            const player = drumPlayers.player(index.toString());
            player.loop = padSettings[index].isLoop;
            player.detune = padSettings[index].pitch * 100;
            recalcPadRate(index);

            document.getElementById('pad-name-' + index).textContent = file.name;
            document.getElementById('list-name-' + index).textContent = file.name;
            document.getElementById('pad-' + index).classList.add('has-sample');
        }

        // --- 9. Input & Utilities ---
        function blinkMidiLed() {
            const led = document.getElementById('midi-led');
            led.classList.add('on');
            setTimeout(() => led.classList.remove('on'), 100);
        }
        
        const pianoKeys = { 'a':'C3', 'w':'C#3', 's':'D3', 'e':'D#3', 'd':'E3', 'f':'F3', 't':'F#3', 'g':'G3' };
        const mpcKeys = { '1':0, '2':1, '3':2, '4':3, 'q':4, 'w':5, 'e':6, 'r':7, 'a':8, 's':9, 'd':10, 'f':11, 'z':12, 'x':13, 'c':14, 'v':15 };

        window.addEventListener('keydown', (e) => {
            if (e.repeat) return;
            const key = e.key.toLowerCase();
            if (activeTab === 'keys' && pianoKeys[key]) triggerAttack(pianoKeys[key]);
            else if (activeTab === 'mpc' && Object.prototype.hasOwnProperty.call(mpcKeys, key)) triggerPad(mpcKeys[key]);
        });
        window.addEventListener('keyup', (e) => {
            if (activeTab === 'keys' && pianoKeys[e.key.toLowerCase()]) triggerRelease(pianoKeys[e.key.toLowerCase()]);
        });

        function setupMIDI() {
            if (navigator.requestMIDIAccess) {
                navigator.requestMIDIAccess().then(access => {
                    for (let input of access.inputs.values()) input.onmidimessage = handleMIDIMessage;
                    access.onstatechange = (e) => {
                        if (e.port.type === "input" && e.port.state === "connected") {
                            e.port.onmidimessage = handleMIDIMessage;
                        }
                    };
                }).catch(e => console.warn("MIDI fail", e));
            }
        }
        function handleMIDIMessage(msg) {
            const [cmd, note, vel] = msg.data;
            const isNoteOn = (cmd & 0xf0) === 144 && vel > 0;
            const isNoteOff = (cmd & 0xf0) === 128 || ((cmd & 0xf0) === 144 && vel === 0);
            if (activeTab === 'keys') {
                const noteName = Tone.Frequency(note, "midi").toNote();
                if (isNoteOn) triggerAttack(noteName);
                if (isNoteOff) triggerRelease(noteName);
            } else {
                if (isNoteOn && note >= 36 && note <= 51) triggerPad(note - 36);
            }
        }

        function drawVisualizer() {
            const canvas = document.getElementById('visualizer');
            const ctx = canvas.getContext('2d');
            function loop() {
                requestAnimationFrame(loop);
                if (!toneStarted) return;
                const values = analyser.getValue();
                ctx.fillStyle = '#111';
                ctx.fillRect(0,0,canvas.width,canvas.height);
                ctx.beginPath();
                ctx.lineWidth = 2;
                ctx.strokeStyle = '#00d2ff';
                const sliceW = canvas.width * 1.0 / values.length;
                let x = 0;
                for(let i=0; i<values.length; i++) {
                    const v = (values[i] + 1) / 2;
                    const y = v * canvas.height;
                    if(i===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
                    x += sliceW;
                }
                ctx.stroke();
            }
            loop();
        }

        document.getElementById('start-btn').addEventListener('click', initAudio);
    </script>
</body>
</html>
```

If you want next, we can wire a 16-step sequencer into the MPC view and clock it off the same global tempo so loops + one-shots all groove together.
