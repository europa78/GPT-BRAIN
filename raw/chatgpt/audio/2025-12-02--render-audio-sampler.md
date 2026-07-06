---
title: "Render audio sampler"
date: 2025-12-02
cluster: "Audio / DSP / Instruments"
messages: 6
source: chatgpt-export conversations.json (FULL transcript)
---

# Render audio sampler

> 6 messages · 2025-12-02 · cluster: Audio / DSP / Instruments

**Semantic neighbors:** [[Codex Audio Sampler Working]] · [[Audio sampler build]] · [[Audio software questions]] · [[React Audio App Conversion]]

## Transcript

**Mike:** render this audio sampler file.  //<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Battery-Style Sampler FX + Dual LFO</title>
  <style>
    :root {
      color-scheme: dark;
      --bg: #020617;
      --panel: #020617;
      --accent: #22d3ee;
      --accent-strong: #06b6d4;
      --text: #e5e7eb;
      --muted: #9ca3af;
      --danger: #ef4444;
      --pad-bg: #e5e7eb;
      --pad-border: #facc15;
    }

    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "SF Pro Text",
        "Segoe UI", sans-serif;
      background: radial-gradient(circle at 20% 20%, #111827, #020617 60%);
      color: var(--text);
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 16px;
    }

    .app {
      width: min(1200px, 100%);
      background: radial-gradient(circle at 0% 0%, #111827, #020617 60%);
      border-radius: 18px;
      border: 1px solid #1f2937;
      box-shadow:
        0 32px 80px rgba(0, 0, 0, 0.6),
        inset 0 1px 0 rgba(255, 255, 255, 0.04);
      padding: 16px 18px 18px;
    }

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      margin-bottom: 10px;
    }

    h1 {
      margin: 0;
      font-size: 1.1rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #e5e7eb;
    }

    .header-right {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 0.75rem;
      color: var(--muted);
    }

    .header-dot {
      width: 8px;
      height: 8px;
      border-radius: 999px;
      background: radial-gradient(circle at 30% 30%, #22c55e, #166534);
      box-shadow: 0 0 6px rgba(34, 197, 94, 0.85);
    }

    .controls {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
      gap: 10px;
      margin-bottom: 12px;
    }

    .panel {
      background: rgba(15, 23, 42, 0.9);
      border-radius: 12px;
      border: 1px solid #1f2937;
      padding: 10px 12px;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.03);
    }

    .panel h2 {
      margin: 0 0 6px;
      font-size: 0.8rem;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: #cbd5f5;
    }

    .field {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 6px;
      font-size: 0.8rem;
    }

    .field label {
      min-width: 70px;
      color: var(--muted);
    }

    .field input[type="range"],
    .field select {
      flex: 1;
    }

    .value-pill {
      padding: 4px 8px;
      border-radius: 999px;
      background: rgba(15, 23, 42, 0.9);
      border: 1px solid rgba(148, 163, 184, 0.35);
      font-variant-numeric: tabular-nums;
      font-size: 0.75rem;
      color: #e5e7eb;
      white-space: nowrap;
    }

    .muted {
      color: var(--muted);
    }

    .pads {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 10px;
    }

    .pad {
      background: rgba(15, 23, 42, 0.9);
      border-radius: 12px;
      border: 1px solid #111827;
      padding: 8px;
      display: grid;
      grid-template-rows: auto auto 1fr;
      gap: 6px;
      box-shadow: 0 14px 36px rgba(0, 0, 0, 0.45);
    }

    .pad-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 6px;
    }

    .pad-title-wrap {
      display: flex;
      align-items: center;
      gap: 6px;
      min-width: 0;
    }

    .pad-title {
      font-size: 0.76rem;
      font-weight: 500;
      color: #e5e7eb;
      white-space: nowrap;
    }

    .file-chip {
      font-size: 0.7rem;
      padding: 2px 6px;
      border-radius: 999px;
      border: 1px solid rgba(148, 163, 184, 0.45);
      color: var(--muted);
      max-width: 110px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .pad-header-right {
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .pad-midi-light {
      width: 10px;
      height: 10px;
      border-radius: 999px;
      background: radial-gradient(circle at 30% 30%, #22c55e, #14532d);
      box-shadow: 0 0 4px rgba(34, 197, 94, 0.9);
      opacity: 0.18;
      transition: opacity 120ms ease, box-shadow 120ms ease, transform 120ms ease;
      flex-shrink: 0;
    }

    .pad-midi-light.active {
      opacity: 1;
      box-shadow: 0 0 10px rgba(34, 197, 94, 1);
      transform: scale(1.15);
    }

    .pad-top {
      display: grid;
      gap: 4px;
    }

    .pad-details {
      display: grid;
      gap: 4px;
      grid-template-rows: auto auto auto auto;
    }

    .pad-trigger {
      width: 100%;
      aspect-ratio: 4 / 3;
      border-radius: 10px;
      background: var(--pad-bg);
      border: 1px solid var(--pad-border);
      color: #111827;
      font-weight: 600;
      font-size: 0.8rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 6px;
      box-shadow: 0 4px 10px rgba(15, 23, 42, 0.35);
      transition:
        transform 120ms ease,
        box-shadow 120ms ease,
        border-color 120ms ease,
        background 120ms ease;
    }

    .pad-trigger span {
      display: block;
    }

    .pad-trigger:hover {
      transform: translateY(-1px);
      box-shadow: 0 8px 18px rgba(15, 23, 42, 0.5);
    }

    .pad-trigger:active {
      transform: translateY(0);
      box-shadow: 0 3px 8px rgba(15, 23, 42, 0.6);
    }

    .pad-trigger.empty {
      color: #6b7280;
      background: #f3f4f6;
      box-shadow: 0 2px 6px rgba(15, 23, 42, 0.45);
    }

    .pad-trigger.playing {
      background: #fef3c7;
      border-color: #facc15;
      box-shadow:
        0 0 0 1px rgba(250, 204, 21, 0.7),
        0 10px 24px rgba(250, 204, 21, 0.5);
    }

    .pad-file-wrap {
      text-align: center;
    }

    .pad-file-wrap input[type="file"] {
      font-size: 0.7rem;
      max-width: 100%;
      color: var(--muted);
    }

    .wave-editor {
      margin-top: 4px;
      background: rgba(15, 23, 42, 0.96);
      border-radius: 8px;
      border: 1px solid #111827;
      padding: 3px 4px 4px;
    }

    .wave-canvas {
      width: 100%;
      height: 46px;
      display: block;
      cursor: crosshair;
    }

    .wave-info {
      margin-top: 2px;
      font-size: 0.7rem;
      color: var(--muted);
      display: flex;
      justify-content: space-between;
      gap: 6px;
      white-space: nowrap;
    }

    .pad-meta-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 6px;
      margin-top: 2px;
    }

    .tag {
      padding: 2px 6px;
      border-radius: 999px;
      background: rgba(15, 23, 42, 0.9);
      border: 1px solid rgba(148, 163, 184, 0.5);
      color: #e5e7eb;
      font-size: 0.68rem;
      font-variant-numeric: tabular-nums;
      white-space: nowrap;
    }

    .tag-muted {
      color: var(--muted);
    }

    .mini-btn {
      background: rgba(15, 23, 42, 0.9);
      border-radius: 999px;
      border: 1px solid rgba(148, 163, 184, 0.7);
      color: #e5e7eb;
      padding: 2px 8px;
      font-size: 0.68rem;
      cursor: pointer;
      white-space: nowrap;
      transition:
        background 120ms ease,
        border-color 120ms ease,
        transform 120ms ease;
    }

    .mini-btn:hover {
      background: rgba(24, 36, 56, 1);
      border-color: rgba(148, 163, 184, 1);
      transform: translateY(-0.5px);
    }

    .stop-btn {
      background: rgba(239, 68, 68, 0.1);
      border: 1px solid rgba(239, 68, 68, 0.65);
      color: #fecdd3;
    }

    .pad-param-strip {
      margin-top: 2px;
      padding: 2px 4px;
      border-radius: 8px;
      background: rgba(15, 23, 42, 0.95);
      border: 1px solid rgba(15, 23, 42, 1);
      font-size: 0.64rem;
      color: var(--muted);
    }

    .pad-param-row {
      display: flex;
      flex-wrap: wrap;
      gap: 3px;
      justify-content: space-between;
    }

    .pad-param {
      white-space: nowrap;
    }

    .pad-controls {
      margin-top: 2px;
      display: grid;
      gap: 4px;
    }

    .pad-controls label {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 6px;
      font-size: 0.68rem;
      color: var(--muted);
    }

    .pad-controls input[type="range"],
    .pad-controls select {
      flex: 1;
    }

    .adsr-block {
      margin-top: 4px;
      padding: 4px;
      border-radius: 8px;
      background: rgba(15, 23, 42, 0.98);
      border: 1px solid #111827;
    }

    .adsr-title-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 0.7rem;
      color: var(--muted);
      margin-bottom: 2px;
    }

    .adsr-canvas {
      width: 100%;
      height: 40px;
      display: block;
      cursor: crosshair;
    }

    .footer {
      margin-top: 10px;
      font-size: 0.7rem;
      text-align: right;
      color: var(--muted);
    }

    button {
      font-family: inherit;
    }

    @media (max-width: 1024px) {
      .pads {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    }

    @media (max-width: 700px) {
      body {
        padding: 8px;
      }
      .pads {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
      .pad {
        padding: 7px;
      }
      .pad-trigger {
        aspect-ratio: 3 / 2;
      }
    }
  </style>
</head>
<body>
  <div class="app">
    <header>
      <h1>Battery-Style Sampler</h1>
      <div class="header-right">
        <div class="header-dot"></div>
        <span>MIDI, FX & Dual LFO</span>
      </div>
    </header>

    <section class="controls">
      <div class="panel">
        <h2>Master</h2>
        <div class="field">
          <label for="tempo">Tempo</label>
          <input id="tempo" type="range" min="60" max="180" step="1" value="120" />
          <span class="value-pill" id="tempoValue">120 BPM</span>
        </div>
        <div class="field">
          <label for="gain">Volume</label>
          <input id="gain" type="range" min="0" max="1.2" step="0.01" value="0.9" />
          <span class="value-pill" id="gainValue">0.90</span>
        </div>
      </div>

      <div class="panel">
        <h2>MIDI</h2>
        <p id="midiStatus" class="muted" style="margin:0 0 4px;font-size:0.74rem;">
          MIDI not initialized.
        </p>
        <p id="midiActivity" class="muted" style="margin:0 0 6px;font-size:0.7rem;">
          Last MIDI: —
        </p>

        <div class="field">
          <label for="midiInputSelect">Input</label>
          <select id="midiInputSelect">
            <option value="">None</option>
          </select>
        </div>
        <div class="field">
          <label for="midiOutputSelect">Output</label>
          <select id="midiOutputSelect">
            <option value="">None</option>
          </select>
        </div>
        <div class="field" style="margin-top:4px;">
          <button id="midiEnableBtn" class="mini-btn" style="flex:1;">
            Enable Web MIDI
          </button>
          <button id="midiRescanBtn" class="mini-btn">
            Rescan
          </button>
        </div>
      </div>
    </section>

    <section class="pads" id="pads"></section>

    <div class="footer">
      Drag files to pads, trim with the waveform, detect BPM & sync groups, modulate pitch / filters with LFO1 and FX amounts with LFO2.
    </div>
  </div>

  <script>
    const padCount = 16;
    const padsContainer = document.getElementById("pads");
    const tempoSlider = document.getElementById("tempo");
    const tempoValue = document.getElementById("tempoValue");
    const gainSlider = document.getElementById("gain");
    const gainValue = document.getElementById("gainValue");

    const midiStatus = document.getElementById("midiStatus");
    const midiInputSelect = document.getElementById("midiInputSelect");
    const midiOutputSelect = document.getElementById("midiOutputSelect");
    const midiEnableBtn = document.getElementById("midiEnableBtn");
    const midiRescanBtn = document.getElementById("midiRescanBtn");
    const midiActivity = document.getElementById("midiActivity");

    // Sync groups A/B/C each track their own master tempo (set by a group's master pad).
    const groupTempos = [null, null, null, null]; // indexes 1..3 used

    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const masterGain = audioCtx.createGain();
    masterGain.gain.value = parseFloat(gainSlider.value);
    masterGain.connect(audioCtx.destination);

    const impulseCache = new Map();

    function createImpulseResponse(ctx, duration = 2.5, decay = 2.5) {
      const cacheKey = `${ctx.sampleRate}:${duration}:${decay}`;
      const cached = impulseCache.get(cacheKey);
      if (cached) return cached;

      const rate = ctx.sampleRate;
      const length = rate * duration;
      const impulse = ctx.createBuffer(2, length, rate);
      for (let c = 0; c < 2; c++) {
        const ch = impulse.getChannelData(c);
        for (let i = 0; i < length; i++) {
          const t = i / length;
          ch[i] = (Math.random() * 2 - 1) * Math.pow(1 - t, decay);
        }
      }

      impulseCache.set(cacheKey, impulse);
      return impulse;
    }

    const reverbConvolver = audioCtx.createConvolver();
    reverbConvolver.buffer = createImpulseResponse(audioCtx, 2.4, 2.8);
    const reverbOut = audioCtx.createGain();
    reverbOut.gain.value = 0.9;
    reverbConvolver.connect(reverbOut);
    reverbOut.connect(masterGain);

    let midiAccess = null;
    let midiInput = null;
    let midiOutput = null;
    const midiBaseNote = 36;
    const midiNoteMap = Array.from({ length: padCount }, (_, i) => midiBaseNote + i);

    const pads = Array.from({ length: padCount }, (_, index) => {
      const gainNode = audioCtx.createGain();
      gainNode.gain.value = 1;

      const filterNode = audioCtx.createBiquadFilter();
      filterNode.type = "allpass";
      filterNode.frequency.value = 8000;
      filterNode.Q.value = 0.707;

      const delayNode = audioCtx.createDelay(2.0);
      delayNode.delayTime.value = 0.25;
      const delayFeedback = audioCtx.createGain();
      delayFeedback.gain.value = 0.3;
      const delaySend = audioCtx.createGain();
      delaySend.gain.value = 1.0;
      const delayMix = audioCtx.createGain();
      delayMix.gain.value = 0.0;

      const reverbSend = audioCtx.createGain();
      reverbSend.gain.value = 0.0;

      const chorusDelay = audioCtx.createDelay(0.05);
      chorusDelay.delayTime.value = 0.02;
      const chorusMix = audioCtx.createGain();
      chorusMix.gain.value = 0.0;

      filterNode.connect(gainNode);
      gainNode.connect(masterGain);

      filterNode.connect(delaySend);
      delaySend.connect(delayNode);
      delayNode.connect(delayFeedback);
      delayFeedback.connect(delayNode);
      delayNode.connect(delayMix);
      delayMix.connect(masterGain);

      filterNode.connect(reverbSend);
      reverbSend.connect(reverbConvolver);

      filterNode.connect(chorusDelay);
      chorusDelay.connect(chorusMix);
      chorusMix.connect(masterGain);

      return {
        index,
        buffer: null,
        source: null,
        gainNode,
        filterNode,
        delayNode,
        delayFeedback,
        delayMix,
        reverbSend,
        chorusDelay,
        chorusMix,
        name: `Pad ${index + 1}`,
        loop: false,
        stretch: 1,
        detectedBpm: null,
        fileName: "Empty",
        loadToken: 0,

        filterType: "off",
        filterCutoff: 8000,
        filterResonance: 0.7,

        envAttack: 0.01,
        envDecay: 0.08,
        envSustain: 0.85,
        envRelease: 0.18,

        startNorm: 0,
        endNorm: 1,

        pitchSemis: 0,
        basePlaybackRate: 1,
        syncGroup: 0,

        delayTime: 0.25,
        delayAmount: 0.0,
        reverbAmount: 0.0,
        chorusAmount: 0.0,

        lfoRate: 2,
        lfoDepth: 0,
        lfoTarget: "off",
        lfoPhase: 0,

        lfo2Rate: 0.7,
        lfo2Depth: 0,
        lfo2Target: "off",
        lfo2Waveform: "sine",
        lfo2Phase: 0,
        lfo2Random: 0,
        _lfo2LastStepPhase: 0
      };
    });

    let padElements = [];

    function validateFile(file) {
      const supportedType = /^audio\//i;
      const supportedName = /\.(wav|mp3|flac|ogg|aif|aiff)$/i;
      if (!supportedType.test(file.type) && !supportedName.test(file.name)) {
        throw new Error("Unsupported file type. Load WAV, MP3, FLAC, OGG or AIFF.");
      }
      const maxSizeMb = 50;
      if (file.size > maxSizeMb * 1024 * 1024) {
        throw new Error(`File is too large (> ${maxSizeMb}MB).`);
      }
    }

    function formatFileName(name) {
      if (!name || name === "Empty") return "Empty";
      return name.length > 16 ? `${name.slice(0, 13)}…` : name;
    }

    function formatHz(freq) {
      if (freq >= 1000) return (freq / 1000).toFixed(1) + " kHz";
      return Math.round(freq) + " Hz";
    }

    function updateTempoDisplay(value) {
      tempoValue.textContent = `${value} BPM`;
    }

    function updateGainDisplay(value) {
      gainValue.textContent = value.toFixed(2);
    }

    function drawWaveformForPad(index) {
      const el = padElements[index];
      if (!el || !el.waveCanvas) return;
      const canvas = el.waveCanvas;
      const ctx = canvas.getContext("2d");
      const width = canvas.width;
      const height = canvas.height;
      if (!width || !height) return;

      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "#020617";
      ctx.fillRect(0, 0, width, height);

      const pad = pads[index];

      if (!pad.buffer) {
        ctx.fillStyle = "rgba(148,163,184,0.85)";
        ctx.font =
          "10px system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Segoe UI', sans-serif";
        ctx.textBaseline = "middle";
        ctx.fillText("Load a sample to see waveform", 8, height / 2);
        if (el.waveInfo) el.waveInfo.textContent = "Start: 0.00s   End: —";
        return;
      }

      const data = pad.buffer.getChannelData(0);
      const step = Math.max(1, Math.floor(data.length / width));

      ctx.strokeStyle = "rgba(51,65,85,0.9)";
      ctx.beginPath();
      ctx.moveTo(0, height / 2);
      ctx.lineTo(width, height / 2);
      ctx.stroke();

      ctx.strokeStyle = "rgba(56,189,248,0.9)";
      ctx.beginPath();
      for (let x = 0; x < width; x++) {
        let min = 1.0;
        let max = -1.0;
        const start = x * step;
        const end = Math.min(start + step, data.length);
        for (let i = start; i < end; i++) {
          const v = data[i];
          if (v < min) min = v;
          if (v > max) max = v;
        }
        const y1 = ((1 - max) * 0.5) * height;
        const y2 = ((1 - min) * 0.5) * height;
        ctx.moveTo(x, y1);
        ctx.lineTo(x, y2);
      }
      ctx.stroke();

      const startX = pad.startNorm * width;
      const endX = pad.endNorm * width;

      ctx.fillStyle = "rgba(34,211,238,0.14)";
      ctx.fillRect(startX, 0, Math.max(1, endX - startX), height);

      ctx.strokeStyle = "rgba(56,189,248,0.95)";
      ctx.beginPath();
      ctx.moveTo(startX, 0);
      ctx.lineTo(startX, height);
      ctx.moveTo(endX, 0);
      ctx.lineTo(endX, height);
      ctx.stroke();

      if (el.waveInfo) {
        const dur = pad.buffer.duration || 0;
        const startSec = pad.startNorm * dur;
        const endSec = pad.endNorm * dur;
        el.waveInfo.textContent = `Start: ${startSec.toFixed(2)}s   End: ${endSec.toFixed(2)}s`;
      }
    }

    function resizeAllWaveforms() {
      if (!padElements || !padElements.length) return;
      padElements.forEach((el, index) => {
        const canvas = el.waveCanvas;
        if (!canvas) return;
        const rect = canvas.getBoundingClientRect();
        const width = Math.max(160, Math.floor(rect.width || 0));
        const height = 46;
        if (!width) return;
        if (canvas.width !== width || canvas.height !== height) {
          canvas.width = width;
          canvas.height = height;
        }
        drawWaveformForPad(index);
      });
    }

    function drawAdsr(pad, canvas) {
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      const w = canvas.width || canvas.getBoundingClientRect().width || 200;
      const h = canvas.height || 40;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }

      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "#020617";
      ctx.fillRect(0, 0, w, h);

      const a = Math.max(0.001, pad.envAttack);
      const d = Math.max(0.001, pad.envDecay);
      const s = Math.max(0, Math.min(1, pad.envSustain));
      const r = Math.max(0.001, pad.envRelease);

      const total = a + d + r + 0.0001;
      const atX = (a / total) * w;
      const decX = ((a + d) / total) * w;
      const relX = w;

      const baseY = h - 4;
      const maxY = 4;
      const susY = maxY + (1 - s) * (baseY - maxY);

      ctx.strokeStyle = "rgba(75,85,99,0.9)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, baseY);
      ctx.lineTo(atX, maxY);
      ctx.lineTo(decX, susY);
      ctx.lineTo(w - r * (w / total), susY);
      ctx.lineTo(relX, baseY);
      ctx.stroke();
    }

    function createPadElement(pad) {
      const el = document.createElement("div");
      el.className = "pad";
      el.dataset.index = pad.index;

      const header = document.createElement("div");
      header.className = "pad-header";

      const leftHeader = document.createElement("div");
      leftHeader.className = "pad-title-wrap";

      const title = document.createElement("div");
      title.className = "pad-title";
      title.textContent = pad.name;

      const fileTag = document.createElement("span");
      fileTag.className = "file-chip";
      fileTag.textContent = formatFileName(pad.fileName);

      leftHeader.appendChild(title);
      leftHeader.appendChild(fileTag);

      const rightHeader = document.createElement("div");
      rightHeader.className = "pad-header-right";

      const midiLight = document.createElement("div");
      midiLight.className = "pad-midi-light";
      midiLight.title = "MIDI In";

      rightHeader.appendChild(midiLight);

      header.appendChild(leftHeader);
      header.appendChild(rightHeader);

      const top = document.createElement("div");
      top.className = "pad-top";

      const trigger = document.createElement("button");
      trigger.className = "pad-trigger empty";
      trigger.dataset.index = pad.index;
      trigger.innerHTML = `<span>Drop File or Click</span>`;
      trigger.addEventListener("click", () => {
        triggerPad(pad.index, 1, "ui");
      });

      const fileWrap = document.createElement("div");
      fileWrap.className = "pad-file-wrap";
      const fileInput = document.createElement("input");
      fileInput.type = "file";
      fileInput.accept = "audio/*";
      fileInput.addEventListener("change", async (e) => {
        const file = e.target.files?.[0];
        if (file) {
          setPadLoading({ trigger }, true);
          await loadSample(pad.index, file, {
            triggerElement: trigger,
            fileTag,
            bpmTag
          });
          setPadLoading({ trigger }, false);
        }
      });
      fileWrap.appendChild(fileInput);

      top.appendChild(trigger);
      top.appendChild(fileWrap);

      const waveEditor = document.createElement("div");
      waveEditor.className = "wave-editor";

      const waveCanvas = document.createElement("canvas");
      waveCanvas.className = "wave-canvas";
      waveEditor.appendChild(waveCanvas);

      const waveInfo = document.createElement("div");
      waveInfo.className = "wave-info";
      waveInfo.textContent = "Start: 0.00s   End: —";
      waveEditor.appendChild(waveInfo);

      let isDragging = false;
      let dragTarget = null;

      function updateSelectionFromClientX(clientX) {
        const rect = waveCanvas.getBoundingClientRect();
        const displayWidth = rect.width || 0;
        if (!displayWidth) return;
        const width = waveCanvas.width || displayWidth;
        const x = clientX - rect.left;
        const normRaw = x / width;
        const norm = Math.min(1, Math.max(0, normRaw));
        const p = pads[pad.index];
        if (dragTarget === "start") {
          p.startNorm = Math.min(norm, p.endNorm - 0.01);
        } else if (dragTarget === "end") {
          p.endNorm = Math.max(norm, p.startNorm + 0.01);
        }
        drawWaveformForPad(pad.index);
      }

      function onMove(e) {
        if (!isDragging) return;
        updateSelectionFromClientX(e.clientX);
      }

      function onUp() {
        isDragging = false;
        dragTarget = null;
        window.removeEventListener("mousemove", onMove);
        window.removeEventListener("mouseup", onUp);
      }

      waveCanvas.addEventListener("mousedown", (e) => {
        const p = pads[pad.index];
        if (!p.buffer) return;
        const rect = waveCanvas.getBoundingClientRect();
        const displayWidth = rect.width || 0;
        const width = waveCanvas.width || displayWidth || 1;
        const x = e.clientX - rect.left;

        const startX = p.startNorm * width;
        const endX = p.endNorm * width;
        const distToStart = Math.abs(x - startX);
        const distToEnd = Math.abs(x - endX);

        dragTarget = distToStart <= distToEnd ? "start" : "end";
        isDragging = true;

        updateSelectionFromClientX(e.clientX);

        window.addEventListener("mousemove", onMove);
        window.addEventListener("mouseup", onUp);
      });

      const metaRow = document.createElement("div");
      metaRow.className = "pad-meta-row";

      const bpmWrap = document.createElement("div");
      bpmWrap.style.display = "flex";
      bpmWrap.style.alignItems = "center";
      bpmWrap.style.gap = "4px";

      const bpmTag = document.createElement("span");
      bpmTag.className = "tag";
      bpmTag.textContent = "BPM —";

      const groupTag = document.createElement("span");
      groupTag.className = "tag";
      groupTag.textContent = "Grp —";

      const detectBtn = document.createElement("button");
      detectBtn.className = "mini-btn";
      detectBtn.textContent = "Detect";
      detectBtn.addEventListener("click", () => {
        const p = pads[pad.index];
        if (!p.buffer) {
          flashPadEmpty(pad.index);
          return;
        }
        bpmTag.textContent = "BPM …";
        setTimeout(() => {
          const bpm = detectTempo(p.buffer);
          p.detectedBpm = bpm;
          bpmTag.textContent = bpm ? `${Math.round(bpm)} BPM` : "BPM —";
        }, 10);
      });

      const setMasterBtn = document.createElement("button");
      setMasterBtn.className = "mini-btn";
      setMasterBtn.textContent = "Use as Master";
      setMasterBtn.addEventListener("click", () => {
        const p = pads[pad.index];
        if (!p.detectedBpm) return;
        const newTempo = Math.round(p.detectedBpm);
        if (p.syncGroup) {
          setGroupTempo(p.syncGroup, newTempo);
        } else {
          tempoSlider.value = String(newTempo);
          updateTempoDisplay(newTempo);
          pads.forEach((padObj) => {
            if (padObj.source) {
              padObj.source.playbackRate.value = computePlaybackRate(padObj);
            }
          });
        }
      });

      bpmWrap.appendChild(bpmTag);
      bpmWrap.appendChild(groupTag);
      bpmWrap.appendChild(detectBtn);
      bpmWrap.appendChild(setMasterBtn);

      const stopBtn = document.createElement("button");
      stopBtn.className = "mini-btn stop-btn";
      stopBtn.textContent = "Stop";
      stopBtn.addEventListener("click", () => stopPad(pad.index));

      metaRow.appendChild(bpmWrap);
      metaRow.appendChild(stopBtn);

      const paramStrip = document.createElement("div");
      paramStrip.className = "pad-param-strip";

      const paramRow1 = document.createElement("div");
      paramRow1.className = "pad-param-row";
      const paramRow2 = document.createElement("div");
      paramRow2.className = "pad-param-row";

      const modeText = document.createElement("span");
      modeText.className = "pad-param";
      modeText.textContent = "Mode: One-shot";

      const stretchText = document.createElement("span");
      stretchText.className = "pad-param";
      stretchText.textContent = "Stretch: 100%";

      const pitchText = document.createElement("span");
      pitchText.className = "pad-param";
      pitchText.textContent = "Pitch: 0.0 st";

      const syncText = document.createElement("span");
      syncText.className = "pad-param";
      syncText.textContent = "Sync: None";

      const filterText = document.createElement("span");
      filterText.className = "pad-param";
      filterText.textContent = "Filter: Off";

      const cutoffText = document.createElement("span");
      cutoffText.className = "pad-param";
      cutoffText.textContent = "Cutoff: " + formatHz(pad.filterCutoff);

      const resText = document.createElement("span");
      resText.className = "pad-param";
      resText.textContent = "Res: " + pad.filterResonance.toFixed(1);

      const lfoText = document.createElement("span");
      lfoText.className = "pad-param";
      lfoText.textContent = "LFO1: Off";

      paramRow1.appendChild(modeText);
      paramRow1.appendChild(stretchText);
      paramRow1.appendChild(pitchText);

      paramRow2.appendChild(syncText);
      paramRow2.appendChild(filterText);
      paramRow2.appendChild(cutoffText);
      paramRow2.appendChild(resText);
      paramRow2.appendChild(lfoText);

      paramStrip.appendChild(paramRow1);
      paramStrip.appendChild(paramRow2);

      const adsrBlock = document.createElement("div");
      adsrBlock.className = "adsr-block";

      const adsrTitleRow = document.createElement("div");
      adsrTitleRow.className = "adsr-title-row";
      const adsrTitle = document.createElement("span");
      adsrTitle.textContent = "Envelope";
      const adsrHint = document.createElement("span");
      adsrHint.textContent = "Drag shape";
      adsrHint.className = "tag-muted";
      adsrHint.style.fontSize = "0.65rem";
      adsrTitleRow.appendChild(adsrTitle);
      adsrTitleRow.appendChild(adsrHint);

      const adsrCanvas = document.createElement("canvas");
      adsrCanvas.className = "adsr-canvas";

      adsrBlock.appendChild(adsrTitleRow);
      adsrBlock.appendChild(adsrCanvas);

      let adsrDragging = false;
      let adsrDragStage = null;

      function updateAdsrFromPoint(clientX, clientY) {
        const rect = adsrCanvas.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;
        const w = rect.width || 1;
        const h = rect.height || 1;
        const nx = Math.min(1, Math.max(0, x / w));
        const ny = Math.min(1, Math.max(0, y / h));

        const padRef = pads[pad.index];
        const total = padRef.envAttack + padRef.envDecay + padRef.envRelease + 0.0001;

        const attackEndX = padRef.envAttack / total;
        const decayEndX = (padRef.envAttack + padRef.envDecay) / total;
        const releaseStartX = (total - padRef.envRelease) / total;

        if (!adsrDragStage) {
          const dA = Math.abs(nx - attackEndX);
          const dD = Math.abs(nx - decayEndX);
          const dR = Math.abs(nx - releaseStartX);
          const dS = Math.abs(ny - (1 - padRef.envSustain) * 0.7);

          const minX = Math.min(dA, dD, dR);
          if (dS < minX * 0.7) {
            adsrDragStage = "sustain";
          } else if (minX === dA) {
            adsrDragStage = "attack";
          } else if (minX === dD) {
            adsrDragStage = "decay";
          } else {
            adsrDragStage = "release";
          }
        }

        if (adsrDragStage === "sustain") {
          const s = 1 - ny;
          padRef.envSustain = Math.min(1, Math.max(0.05, s));
        } else {
          if (adsrDragStage === "attack") {
            padRef.envAttack = Math.max(0.005, nx * 0.5);
          } else if (adsrDragStage === "decay") {
            const relNx = Math.min(0.8, Math.max(0.1, nx));
            padRef.envDecay = Math.max(0.01, relNx * 0.5);
          } else if (adsrDragStage === "release") {
            const rel = 1 - nx;
            padRef.envRelease = Math.max(0.01, rel * 0.6);
          }
        }
        drawAdsr(padRef, adsrCanvas);
      }

      adsrCanvas.addEventListener("mousedown", (e) => {
        adsrDragging = true;
        adsrDragStage = null;
        updateAdsrFromPoint(e.clientX, e.clientY);
      });
      window.addEventListener("mousemove", (e) => {
        if (!adsrDragging) return;
        updateAdsrFromPoint(e.clientX, e.clientY);
      });
      window.addEventListener("mouseup", () => {
        adsrDragging = false;
        adsrDragStage = null;
      });

      const controls = document.createElement("div");
      controls.className = "pad-controls";

      const modeLabel = document.createElement("label");
      modeLabel.textContent = "Mode";
      const modeSelect = document.createElement("select");
      [
        { value: "oneshot", text: "One-shot" },
        { value: "loop", text: "Loop" }
      ].forEach((opt) => {
        const o = document.createElement("option");
        o.value = opt.value;
        o.textContent = opt.text;
        modeSelect.appendChild(o);
      });
      modeSelect.value = "oneshot";
      modeSelect.addEventListener("change", (e) => {
        pads[pad.index].loop = e.target.value === "loop";
        if (pads[pad.index].source) {
          pads[pad.index].source.loop = pads[pad.index].loop;
        }
        modeText.textContent = `Mode: ${pads[pad.index].loop ? "Loop" : "One-shot"}`;
      });
      modeLabel.appendChild(modeSelect);

      const stretchLabel = document.createElement("label");
      stretchLabel.textContent = "Stretch";
      const stretchRange = document.createElement("input");
      stretchRange.type = "range";
      stretchRange.min = 50;
      stretchRange.max = 200;
      stretchRange.value = 100;
      stretchRange.step = 1;
      const stretchValue = document.createElement("span");
      stretchValue.className = "value-pill";
      stretchValue.textContent = "100%";
      stretchRange.addEventListener("input", (e) => {
        const ratio = Number(e.target.value) / 100;
        pads[pad.index].stretch = ratio;
        stretchValue.textContent = `${e.target.value}%`;
        stretchText.textContent = `Stretch: ${e.target.value}%`;
        if (pads[pad.index].source) {
          pads[pad.index].source.playbackRate.value =
            computePlaybackRate(pads[pad.index]);
        }
      });
      stretchLabel.appendChild(stretchRange);
      stretchLabel.appendChild(stretchValue);

      const pitchLabel = document.createElement("label");
      pitchLabel.textContent = "Pitch";
      const pitchRange = document.createElement("input");
      pitchRange.type = "range";
      pitchRange.min = -24;
      pitchRange.max = 24;
      pitchRange.step = 0.1;
      pitchRange.value = pad.pitchSemis;
      const pitchValue = document.createElement("span");
      pitchValue.className = "value-pill";
      pitchValue.textContent = `${pad.pitchSemis.toFixed(1)} st`;
      pitchRange.addEventListener("input", (e) => {
        const v = parseFloat(e.target.value);
        pads[pad.index].pitchSemis = v;
        pitchValue.textContent = `${v.toFixed(1)} st`;
        pitchText.textContent = `Pitch: ${v.toFixed(1)} st`;
        if (pads[pad.index].source) {
          pads[pad.index].source.playbackRate.value =
            computePlaybackRate(pads[pad.index]);
        }
      });
      pitchLabel.appendChild(pitchRange);
      pitchLabel.appendChild(pitchValue);

      const syncLabel = document.createElement("label");
      syncLabel.textContent = "Sync";
      const syncSelect = document.createElement("select");
      [
        { value: "none", text: "None" },
        { value: "a", text: "Group A" },
        { value: "b", text: "Group B" },
        { value: "c", text: "Group C" }
      ].forEach((opt) => {
        const o = document.createElement("option");
        o.value = opt.value;
        o.textContent = opt.text;
        syncSelect.appendChild(o);
      });
      syncSelect.value = "none";
      syncSelect.addEventListener("change", (e) => {
        const v = e.target.value;
        const p = pads[pad.index];
        if (v === "none") p.syncGroup = 0;
        else if (v === "a") p.syncGroup = 1;
        else if (v === "b") p.syncGroup = 2;
        else if (v === "c") p.syncGroup = 3;
        let label = "None";
        if (p.syncGroup === 1) label = "A";
        else if (p.syncGroup === 2) label = "B";
        else if (p.syncGroup === 3) label = "C";
        syncText.textContent = `Sync: ${label}`;
        refreshGroupTagForPad(pad.index);
        if (p.source) {
          p.source.playbackRate.value = computePlaybackRate(p);
        }
      });
      syncLabel.appendChild(syncSelect);

      const filterLabel = document.createElement("label");
      filterLabel.textContent = "Filter";
      const filterSelect = document.createElement("select");
      [
        { value: "off", text: "Off" },
        { value: "lowpass", text: "Low-pass" },
        { value: "highpass", text: "High-pass" },
        { value: "bandpass", text: "Band-pass" }
      ].forEach((opt) => {
        const o = document.createElement("option");
        o.value = opt.value;
        o.textContent = opt.text;
        filterSelect.appendChild(o);
      });
      filterSelect.value = pad.filterType;
      filterSelect.addEventListener("change", (e) => {
        const val = e.target.value;
        const p = pads[pad.index];
        p.filterType = val;
        p.filterNode.type = val === "off" ? "allpass" : val;
        let label;
        if (val === "off") label = "Off";
        else if (val === "lowpass") label = "Low-pass";
        else if (val === "highpass") label = "High-pass";
        else label = "Band-pass";
        filterText.textContent = `Filter: ${label}`;
      });
      filterLabel.appendChild(filterSelect);

      const cutoffLabel = document.createElement("label");
      cutoffLabel.textContent = "Cutoff";
      const cutoffRange = document.createElement("input");
      cutoffRange.type = "range";
      cutoffRange.min = 100;
      cutoffRange.max = 18000;
      cutoffRange.value = pad.filterCutoff;
      cutoffRange.step = 1;
      const cutoffValue = document.createElement("span");
      cutoffValue.className = "value-pill";
      cutoffValue.textContent = formatHz(pad.filterCutoff);
      cutoffRange.addEventListener("input", (e) => {
        const freq = Number(e.target.value);
        const p = pads[pad.index];
        p.filterCutoff = freq;
        p.filterNode.frequency.setValueAtTime(freq, audioCtx.currentTime);
        const label = formatHz(freq);
        cutoffValue.textContent = label;
        cutoffText.textContent = `Cutoff: ${label}`;
      });
      cutoffLabel.appendChild(cutoffRange);
      cutoffLabel.appendChild(cutoffValue);

      const resLabel = document.createElement("label");
      resLabel.textContent = "Resonance";
      const resRange = document.createElement("input");
      resRange.type = "range";
      resRange.min = 0.1;
      resRange.max = 18;
      resRange.step = 0.1;
      resRange.value = pad.filterResonance;
      const resValue = document.createElement("span");
      resValue.className = "value-pill";
      resValue.textContent = pad.filterResonance.toFixed(1);
      resRange.addEventListener("input", (e) => {
        const q = parseFloat(e.target.value);
        const p = pads[pad.index];
        p.filterResonance = q;
        p.filterNode.Q.setValueAtTime(q, audioCtx.currentTime);
        resValue.textContent = q.toFixed(1);
        resText.textContent = `Res: ${q.toFixed(1)}`;
      });
      resLabel.appendChild(resRange);
      resLabel.appendChild(resValue);

      const lfoRateLabel = document.createElement("label");
      lfoRateLabel.textContent = "LFO1 Rate";
      const lfoRateRange = document.createElement("input");
      lfoRateRange.type = "range";
      lfoRateRange.min = 0.1;
      lfoRateRange.max = 10;
      lfoRateRange.step = 0.1;
      lfoRateRange.value = pads[pad.index].lfoRate;
      const lfoRateValue = document.createElement("span");
      lfoRateValue.className = "value-pill";
      lfoRateValue.textContent = `${pads[pad.index].lfoRate.toFixed(1)} Hz`;
      lfoRateRange.addEventListener("input", (e) => {
        const v = parseFloat(e.target.value);
        pads[pad.index].lfoRate = v;
        lfoRateValue.textContent = `${v.toFixed(1)} Hz`;
      });
      lfoRateLabel.appendChild(lfoRateRange);
      lfoRateLabel.appendChild(lfoRateValue);

      const lfoDepthLabel = document.createElement("label");
      lfoDepthLabel.textContent = "LFO1 Depth";
      const lfoDepthRange = document.createElement("input");
      lfoDepthRange.type = "range";
      lfoDepthRange.min = 0;
      lfoDepthRange.max = 1;
      lfoDepthRange.step = 0.01;
      lfoDepthRange.value = pads[pad.index].lfoDepth;
      const lfoDepthValue = document.createElement("span");
      lfoDepthValue.className = "value-pill";
      lfoDepthValue.textContent = pads[pad.index].lfoDepth.toFixed(2);
      lfoDepthRange.addEventListener("input", (e) => {
        const v = parseFloat(e.target.value);
        pads[pad.index].lfoDepth = v;
        lfoDepthValue.textContent = v.toFixed(2);
      });
      lfoDepthLabel.appendChild(lfoDepthRange);
      lfoDepthLabel.appendChild(lfoDepthValue);

      const lfoTargetLabel = document.createElement("label");
      lfoTargetLabel.textContent = "LFO1 Target";
      const lfoTargetSelect = document.createElement("select");
      [
        { value: "off", text: "Off" },
        { value: "pitch", text: "Pitch" },
        { value: "cutoff", text: "Cutoff" }
      ].forEach((opt) => {
        const o = document.createElement("option");
        o.value = opt.value;
        o.textContent = opt.text;
        lfoTargetSelect.appendChild(o);
      });
      lfoTargetSelect.value = pads[pad.index].lfoTarget;
      lfoTargetSelect.addEventListener("change", (e) => {
        const v = e.target.value;
        pads[pad.index].lfoTarget = v;
        let label = "Off";
        if (v === "pitch") label = "Pitch";
        else if (v === "cutoff") label = "Cutoff";
        lfoText.textContent = `LFO1: ${label}`;
      });
      lfoTargetLabel.appendChild(lfoTargetSelect);

      const fxLfoRateLabel = document.createElement("label");
      fxLfoRateLabel.textContent = "LFO2 Rate";
      const fxLfoRateRange = document.createElement("input");
      fxLfoRateRange.type = "range";
      fxLfoRateRange.min = 0.1;
      fxLfoRateRange.max = 10;
      fxLfoRateRange.step = 0.1;
      fxLfoRateRange.value = pads[pad.index].lfo2Rate;
      const fxLfoRateValue = document.createElement("span");
      fxLfoRateValue.className = "value-pill";
      fxLfoRateValue.textContent = `${pads[pad.index].lfo2Rate.toFixed(1)} Hz`;
      fxLfoRateRange.addEventListener("input", (e) => {
        const v = parseFloat(e.target.value);
        pads[pad.index].lfo2Rate = v;
        fxLfoRateValue.textContent = `${v.toFixed(1)} Hz`;
      });
      fxLfoRateLabel.appendChild(fxLfoRateRange);
      fxLfoRateLabel.appendChild(fxLfoRateValue);

      const fxLfoDepthLabel = document.createElement("label");
      fxLfoDepthLabel.textContent = "LFO2 Depth";
      const fxLfoDepthRange = document.createElement("input");
      fxLfoDepthRange.type = "range";
      fxLfoDepthRange.min = 0;
      fxLfoDepthRange.max = 1;
      fxLfoDepthRange.step = 0.01;
      fxLfoDepthRange.value = pads[pad.index].lfo2Depth;
      const fxLfoDepthValue = document.createElement("span");
      fxLfoDepthValue.className = "value-pill";
      fxLfoDepthValue.textContent = pads[pad.index].lfo2Depth.toFixed(2);
      fxLfoDepthRange.addEventListener("input", (e) => {
        const v = parseFloat(e.target.value);
        pads[pad.index].lfo2Depth = v;
        fxLfoDepthValue.textContent = v.toFixed(2);
      });
      fxLfoDepthLabel.appendChild(fxLfoDepthRange);
      fxLfoDepthLabel.appendChild(fxLfoDepthValue);

      const fxLfoWaveLabel = document.createElement("label");
      fxLfoWaveLabel.textContent = "LFO2 Wave";
      const fxLfoWaveSelect = document.createElement("select");
      [
        { value: "sine", text: "Sine" },
        { value: "triangle", text: "Triangle" },
        { value: "square", text: "Square" },
        { value: "random", text: "Random" }
      ].forEach((opt) => {
        const o = document.createElement("option");
        o.value = opt.value;
        o.textContent = opt.text;
        fxLfoWaveSelect.appendChild(o);
      });
      fxLfoWaveSelect.value = pads[pad.index].lfo2Waveform;
      fxLfoWaveSelect.addEventListener("change", (e) => {
        pads[pad.index].lfo2Waveform = e.target.value;
      });
      fxLfoWaveLabel.appendChild(fxLfoWaveSelect);

      const fxLfoTargetLabel = document.createElement("label");
      fxLfoTargetLabel.textContent = "LFO2 Target";
      const fxLfoTargetSelect = document.createElement("select");
      [
        { value: "off", text: "Off" },
        { value: "delay", text: "Delay Mix" },
        { value: "reverb", text: "Reverb Mix" },
        { value: "chorus", text: "Chorus Mix" }
      ].forEach((opt) => {
        const o = document.createElement("option");
        o.value = opt.value;
        o.textContent = opt.text;
        fxLfoTargetSelect.appendChild(o);
      });
      fxLfoTargetSelect.value = pads[pad.index].lfo2Target;
      fxLfoTargetSelect.addEventListener("change", (e) => {
        pads[pad.index].lfo2Target = e.target.value;
      });
      fxLfoTargetLabel.appendChild(fxLfoTargetSelect);

      const delayTimeLabel = document.createElement("label");
      delayTimeLabel.textContent = "Delay Time";
      const delayTimeRange = document.createElement("input");
      delayTimeRange.type = "range";
      delayTimeRange.min = 0;
      delayTimeRange.max = 1000;
      delayTimeRange.step = 10;
      delayTimeRange.value = pads[pad.index].delayTime * 1000;
      const delayTimeValue = document.createElement("span");
      delayTimeValue.className = "value-pill";
      delayTimeValue.textContent = `${delayTimeRange.value} ms`;
      delayTimeRange.addEventListener("input", (e) => {
        const ms = parseFloat(e.target.value);
        const p = pads[pad.index];
        p.delayTime = ms / 1000;
        delayTimeValue.textContent = `${ms.toFixed(0)} ms`;
        p.delayNode.delayTime.setValueAtTime(p.delayTime, audioCtx.currentTime);
      });
      delayTimeLabel.appendChild(delayTimeRange);
      delayTimeLabel.appendChild(delayTimeValue);

      const delayMixLabel = document.createElement("label");
      delayMixLabel.textContent = "Delay Mix";
      const delayMixRange = document.createElement("input");
      delayMixRange.type = "range";
      delayMixRange.min = 0;
      delayMixRange.max = 1;
      delayMixRange.step = 0.01;
      delayMixRange.value = pads[pad.index].delayAmount;
      const delayMixValue = document.createElement("span");
      delayMixValue.className = "value-pill";
      delayMixValue.textContent = pads[pad.index].delayAmount.toFixed(2);
      delayMixRange.addEventListener("input", (e) => {
        const v = parseFloat(e.target.value);
        const p = pads[pad.index];
        p.delayAmount = v;
        delayMixValue.textContent = v.toFixed(2);
        if (p.delayMix) p.delayMix.gain.setValueAtTime(v, audioCtx.currentTime);
      });
      delayMixLabel.appendChild(delayMixRange);
      delayMixLabel.appendChild(delayMixValue);

      const reverbMixLabel = document.createElement("label");
      reverbMixLabel.textContent = "Reverb Mix";
      const reverbMixRange = document.createElement("input");
      reverbMixRange.type = "range";
      reverbMixRange.min = 0;
      reverbMixRange.max = 1;
      reverbMixRange.step = 0.01;
      reverbMixRange.value = pads[pad.index].reverbAmount;
      const reverbMixValue = document.createElement("span");
      reverbMixValue.className = "value-pill";
      reverbMixValue.textContent = pads[pad.index].reverbAmount.toFixed(2);
      reverbMixRange.addEventListener("input", (e) => {
        const v = parseFloat(e.target.value);
        const p = pads[pad.index];
        p.reverbAmount = v;
        reverbMixValue.textContent = v.toFixed(2);
        if (p.reverbSend) p.reverbSend.gain.setValueAtTime(v, audioCtx.currentTime);
      });
      reverbMixLabel.appendChild(reverbMixRange);
      reverbMixLabel.appendChild(reverbMixValue);

      const chorusMixLabel = document.createElement("label");
      chorusMixLabel.textContent = "Chorus Mix";
      const chorusMixRange = document.createElement("input");
      chorusMixRange.type = "range";
      chorusMixRange.min = 0;
      chorusMixRange.max = 1;
      chorusMixRange.step = 0.01;
      chorusMixRange.value = pads[pad.index].chorusAmount;
      const chorusMixValue = document.createElement("span");
      chorusMixValue.className = "value-pill";
      chorusMixValue.textContent = pads[pad.index].chorusAmount.toFixed(2);
      chorusMixRange.addEventListener("input", (e) => {
        const v = parseFloat(e.target.value);
        const p = pads[pad.index];
        p.chorusAmount = v;
        chorusMixValue.textContent = v.toFixed(2);
        if (p.chorusMix) p.chorusMix.gain.setValueAtTime(v, audioCtx.currentTime);
      });
      chorusMixLabel.appendChild(chorusMixRange);
      chorusMixLabel.appendChild(chorusMixValue);

      controls.appendChild(modeLabel);
      controls.appendChild(stretchLabel);
      controls.appendChild(pitchLabel);
      controls.appendChild(syncLabel);
      controls.appendChild(filterLabel);
      controls.appendChild(cutoffLabel);
      controls.appendChild(resLabel);
      controls.appendChild(lfoRateLabel);
      controls.appendChild(lfoDepthLabel);
      controls.appendChild(lfoTargetLabel);
      controls.appendChild(fxLfoRateLabel);
      controls.appendChild(fxLfoDepthLabel);
      controls.appendChild(fxLfoWaveLabel);
      controls.appendChild(fxLfoTargetLabel);
      controls.appendChild(delayTimeLabel);
      controls.appendChild(delayMixLabel);
      controls.appendChild(reverbMixLabel);
      controls.appendChild(chorusMixLabel);

      [trigger, el].forEach((dropTarget) => {
        dropTarget.addEventListener("dragover", (event) => {
          event.preventDefault();
          dropTarget.style.outline = "1px dashed var(--accent)";
        });
        dropTarget.addEventListener("dragleave", () => {
          dropTarget.style.outline = "none";
        });
        dropTarget.addEventListener("drop", async (event) => {
          event.preventDefault();
          dropTarget.style.outline = "none";
          const file = event.dataTransfer?.files?.[0];
          if (file) {
            setPadLoading({ trigger }, true);
            await loadSample(pad.index, file, {
              triggerElement: trigger,
              bpmTag,
              fileTag
            });
            setPadLoading({ trigger }, false);
          }
        });
      });

      const details = document.createElement("div");
      details.className = "pad-details";
      details.appendChild(waveEditor);
      details.appendChild(metaRow);
      details.appendChild(paramStrip);
      details.appendChild(adsrBlock);
      details.appendChild(controls);

      el.appendChild(header);
      el.appendChild(top);
      el.appendChild(details);

      setTimeout(() => {
        drawAdsr(pads[pad.index], adsrCanvas);
      }, 0);

      return {
        el,
        trigger,
        fileTag,
        bpmTag,
        groupTag,
        waveCanvas,
        waveInfo,
        midiLight,
        adsrCanvas,
        details
      };
    }

    padElements = pads.map(createPadElement);
    padElements.forEach(({ el }) => padsContainer.appendChild(el));
    pads.forEach((_, idx) => refreshGroupTagForPad(idx));

    function resolveTrigger(uiRefs) {
      return uiRefs?.trigger || uiRefs?.triggerElement || null;
    }

    function setPadLoading(uiRefs, isLoading) {
      const trigger = resolveTrigger(uiRefs);
      if (!trigger) return;
      trigger.disabled = isLoading;
      if (isLoading) {
        trigger.innerHTML = "<span>Loading…</span>";
      } else {
        const idx = Number(trigger.dataset.index);
        const pad = pads[idx];
        trigger.innerHTML =
          pad && pad.buffer
            ? `<span>${formatFileName(pad.fileName)}</span>`
            : "<span>Drop File or Click</span>";
        trigger.classList.toggle("empty", !pad.buffer);
      }
    }

    function refreshGroupTagForPad(padIndex) {
      const pad = pads[padIndex];
      const tag = padElements[padIndex]?.groupTag;
      if (!tag) return;
      if (pad.syncGroup) {
        const groupTempo = groupTempos[pad.syncGroup];
        tag.textContent = groupTempo
          ? `Grp ${Math.round(groupTempo)} BPM`
          : "Grp —";
      } else {
        tag.textContent = "Grp —";
      }
    }

    function setGroupTempo(groupIndex, bpm) {
      if (!groupIndex) return;
      groupTempos[groupIndex] = bpm;
      pads.forEach((pad, idx) => {
        if (pad.syncGroup === groupIndex) {
          refreshGroupTagForPad(idx);
          if (pad.source) {
            pad.source.playbackRate.value = computePlaybackRate(pad);
          }
        }
      });
    }

    async function loadSample(index, file, uiRefs) {
      const pad = pads[index];
      const currentToken = ++pad.loadToken;
      const trigger = resolveTrigger(uiRefs);
      try {
        validateFile(file);
        const arrayBuffer = await file.arrayBuffer();
        const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);
        if (pad.loadToken !== currentToken) return;

        pad.buffer = audioBuffer;
        pad.fileName = file.name;
        pad.startNorm = 0;
        pad.endNorm = 1;

        if (trigger) {
          trigger.classList.remove("empty");
          trigger.innerHTML = `<span>${formatFileName(file.name)}</span>`;
        }
        if (uiRefs.fileTag) {
          uiRefs.fileTag.textContent = formatFileName(file.name);
        }

        const detected = detectTempo(audioBuffer);
        pad.detectedBpm = detected;
        if (uiRefs.bpmTag) {
          uiRefs.bpmTag.textContent = detected
            ? `${Math.round(detected)} BPM`
            : "BPM —";
        }

        refreshGroupTagForPad(index);

        drawWaveformForPad(index);
      } catch (error) {
        console.error("Failed to load sample", error);
        alert(error.message || "Unable to load this audio file. Try another file.");
      }
    }

    function computePlaybackRate(pad) {
      const masterTempo = Number(tempoSlider.value);
      const groupTempo = pad.syncGroup ? groupTempos[pad.syncGroup] : null;
      const targetTempo = groupTempo || masterTempo;
      const sourceTempo = pad.detectedBpm || targetTempo;
      const tempoRatio = sourceTempo && targetTempo ? targetTempo / sourceTempo : 1;
      const pitchRatio = Math.pow(2, (pad.pitchSemis || 0) / 12);
      const base = Math.max(0.25, Math.min(4, tempoRatio * pad.stretch * pitchRatio));
      pad.basePlaybackRate = base;
      return base;
    }

    function getQuantizedStartTime(pad) {
      const masterTempo = Number(tempoSlider.value);
      const secondsPerBeat = 60 / masterTempo;
      const subdivisionBeats = pad.loop ? 1 : 0.25;
      const interval = Math.max(0.0625, secondsPerBeat * subdivisionBeats);
      const now = audioCtx.currentTime + 0.01;
      return Math.max(now, Math.ceil(now / interval) * interval);
    }

    function applyEnvelopeOnStart(pad, startTime, velocity = 1) {
      const g = pad.gainNode.gain;
      const now = audioCtx.currentTime;
      const t0 = Math.max(now, startTime);

      const a = Math.max(0.001, pad.envAttack);
      const d = Math.max(0.001, pad.envDecay);
      const s = Math.max(0, Math.min(1, pad.envSustain));
      const vel = Math.max(0, Math.min(1, velocity || 1));

      const attackEnd = t0 + a;
      const decayEnd = attackEnd + d;

      g.cancelScheduledValues(t0);
      g.setValueAtTime(0, t0);
      g.linearRampToValueAtTime(vel, attackEnd);
      g.linearRampToValueAtTime(vel * s, decayEnd);
    }

    function applyEnvelopeRelease(pad) {
      const g = pad.gainNode.gain;
      const now = audioCtx.currentTime;
      const r = Math.max(0.001, pad.envRelease);
      const current = g.value;

      g.cancelScheduledValues(now);
      g.setValueAtTime(current, now);
      g.linearRampToValueAtTime(0, now + r);

      return now + r;
    }

    function triggerPadRaw(index, velocity = 1, source = "ui", startTimeOverride = null) {
      const pad = pads[index];
      if (!pad.buffer) {
        flashPadEmpty(index);
        return;
      }

      if (audioCtx.state === "suspended") {
        audioCtx.resume();
      }

      if (pad.source) {
        try {
          pad.source.stop();
        } catch {}
        pad.source = null;
      }

      const buffer = pad.buffer;
      const bufferDuration = buffer.duration;
      const startOffset = pad.startNorm * bufferDuration;
      const endOffset = pad.endNorm * bufferDuration;
      const segmentDuration = Math.max(0.01, endOffset - startOffset);

      const playbackRate = computePlaybackRate(pad);

      const sourceNode = audioCtx.createBufferSource();
      sourceNode.buffer = buffer;
      sourceNode.loop = pad.loop;
      sourceNode.playbackRate.value = playbackRate;
      sourceNode.connect(pad.filterNode);

      const startTime =
        startTimeOverride != null ? startTimeOverride : getQuantizedStartTime(pad);

      applyEnvelopeOnStart(pad, startTime, velocity);

      if (pad.loop) {
        sourceNode.loopStart = startOffset;
        sourceNode.loopEnd = endOffset;
        sourceNode.start(startTime, startOffset);
      } else {
        sourceNode.start(startTime, startOffset, segmentDuration);
      }

      padElements[index].trigger.classList.add("playing");

      sourceNode.onended = () => {
        if (pad.source === sourceNode) {
          pad.source = null;
          padElements[index].trigger.classList.remove("playing");
        }
      };

      pad.source = sourceNode;

      if (source === "ui" && midiOutput && midiNoteMap[index] != null) {
        const note = midiNoteMap[index];
        const velByte = Math.max(
          1,
          Math.min(127, Math.round((velocity || 1) * 127))
        );
        midiOutput.send([0x90, note, velByte]);
        setTimeout(() => {
          midiOutput.send([0x80, note, 0]);
        }, 150);
      }
    }

    function triggerPad(index, velocity = 1, source = "ui") {
      const pad = pads[index];
      if (!pad.buffer) {
        flashPadEmpty(index);
        return;
      }

      if (pad.syncGroup && pad.syncGroup > 0) {
        const group = pad.syncGroup;
        const groupIndices = pads
          .filter((p) => p.syncGroup === group && p.buffer)
          .map((p) => p.index);
        if (groupIndices.length > 1) {
          const startTime = getQuantizedStartTime(pad);
          groupIndices.forEach((idx) => {
            const v = idx === index ? velocity : 1;
            triggerPadRaw(idx, v, source, startTime);
          });
          return;
        }
      }

      triggerPadRaw(index, velocity, source, null);
    }

    function stopPad(index) {
      const pad = pads[index];
      const source = pad.source;
      if (!source) return;

      let stopTime = audioCtx.currentTime;
      if (pad.envRelease > 0.005) {
        stopTime = applyEnvelopeRelease(pad);
      }

      try {
        source.stop(stopTime);
      } catch {}

      pad.source = null;
      padElements[index].trigger.classList.remove("playing");
    }

    function flashPadEmpty(index) {
      const trigger = padElements[index].trigger;
      trigger.classList.add("empty");
      trigger.innerHTML = "<span>Load a sample</span>";
      setTimeout(() => {
        const pad = pads[index];
        trigger.innerHTML =
          pad && pad.buffer
            ? `<span>${formatFileName(pad.fileName)}</span>`
            : "<span>Drop File or Click</span>";
      }, 1200);
    }

    function flashPadMidiLight(padIndex) {
      const el = padElements[padIndex];
      if (!el || !el.midiLight) return;
      const light = el.midiLight;
      light.classList.add("active");
      clearTimeout(light._midiTimeout);
      light._midiTimeout = setTimeout(() => {
        light.classList.remove("active");
      }, 120);
    }

    function getPadIndexFromNote(note) {
      const idx = note - midiBaseNote;
      if (idx < 0 || idx >= padCount) return null;
      return idx;
    }

    function handleMIDIMessage(event) {
      const [status, data1, data2] = event.data;
      const cmd = status & 0xf0;
      const note = data1;
      const velocity = data2;

      const padIndex = getPadIndexFromNote(note);
      if (padIndex == null) return;

      const velNorm = Math.max(0, Math.min(1, velocity / 127));

      midiActivity.textContent = `Last MIDI: note ${note} vel ${velocity}`;
      flashPadMidiLight(padIndex);

      if (audioCtx.state === "suspended") {
        audioCtx.resume();
      }

      if (cmd === 0x90 && velocity > 0) {
        triggerPad(padIndex, velNorm, "midi");
      } else if (cmd === 0x80 || (cmd === 0x90 && velocity === 0)) {
        stopPad(padIndex);
      }
    }

    function refreshMIDIPorts() {
      if (!midiAccess) {
        initMIDI();
        return;
      }
      const inputs = Array.from(midiAccess.inputs.values());
      const outputs = Array.from(midiAccess.outputs.values());

      const currentInputId = midiInput?.id || "";
      const currentOutputId = midiOutput?.id || "";

      midiInputSelect.innerHTML = '<option value="">None</option>';
      inputs.forEach((input) => {
        const opt = document.createElement("option");
        opt.value = input.id;
        opt.textContent = input.name || `Input ${input.id}`;
        if (input.id === currentInputId) opt.selected = true;
        midiInputSelect.appendChild(opt);
      });

      midiOutputSelect.innerHTML = '<option value="">None</option>';
      outputs.forEach((output) => {
        const opt = document.createElement("option");
        opt.value = output.id;
        opt.textContent = output.name || `Output ${output.id}`;
        if (output.id === currentOutputId) opt.selected = true;
        midiOutputSelect.appendChild(opt);
      });

      if (!inputs.length) {
        midiStatus.textContent =
          "No MIDI inputs detected. Connect a controller via USB.";
      } else {
        midiStatus.textContent = "MIDI ready. Select an input and output.";
        if (!midiInput && inputs[0]) {
          midiInputSelect.value = inputs[0].id;
          midiInput = inputs[0];
          midiInput.onmidimessage = handleMIDIMessage;
          midiStatus.textContent = `MIDI input: ${midiInput.name}`;
        }
        if (!midiOutput && outputs[0]) {
          midiOutputSelect.value = outputs[0].id;
          midiOutput = outputs[0];
        }
      }
    }

    function onMIDISuccess(access) {
      midiAccess = access;
      midiStatus.textContent = "MIDI access granted.";
      midiAccess.onstatechange = refreshMIDIPorts;
      refreshMIDIPorts();
    }

    function onMIDIFailure(err) {
      console.error("MIDI init failed", err);
      midiStatus.textContent = "Unable to access MIDI devices.";
    }

    function initMIDI() {
      if (!navigator.requestMIDIAccess) {
        midiStatus.textContent =
          "Web MIDI not supported. Use Chrome / Edge.";
        return;
      }
      midiStatus.textContent = "Requesting MIDI access…";
      audioCtx.resume();
      navigator
        .requestMIDIAccess({ sysex: false })
        .then(onMIDISuccess)
        .catch(onMIDIFailure);
    }

    midiEnableBtn.addEventListener("click", initMIDI);
    midiRescanBtn.addEventListener("click", refreshMIDIPorts);

    midiInputSelect.addEventListener("change", () => {
      if (!midiAccess) return;
      const id = midiInputSelect.value;
      if (midiInput) {
        midiInput.onmidimessage = null;
      }
      midiInput = id ? midiAccess.inputs.get(id) : null;
      if (midiInput) {
        midiInput.onmidimessage = handleMIDIMessage;
        midiStatus.textContent = `MIDI input: ${midiInput.name}`;
      } else {
        midiStatus.textContent = "MIDI input disconnected.";
      }
    });

    midiOutputSelect.addEventListener("change", () => {
      if (!midiAccess) return;
      const id = midiOutputSelect.value;
      midiOutput = id ? midiAccess.outputs.get(id) : null;
    });

    function detectTempo(audioBuffer) {
      const channelData = audioBuffer.getChannelData(0);
      const sampleRate = audioBuffer.sampleRate;
      const maxSeconds = 45;
      const maxSamples = Math.min(channelData.length, sampleRate * maxSeconds);

      if (maxSamples < sampleRate * 2) return null;

      const targetRate = 4410;
      const downsampleFactor = Math.max(1, Math.floor(sampleRate / targetRate));
      const effectiveRate = sampleRate / downsampleFactor;
      const length = Math.floor(maxSamples / downsampleFactor);

      const data = new Float32Array(length);
      let writeIndex = 0;
      for (let i = 0; i < maxSamples && writeIndex < length; i += downsampleFactor) {
        data[writeIndex++] = Math.abs(channelData[i]);
      }
      if (writeIndex < length) data.fill(0, writeIndex);

      let max = 0;
      for (let i = 0; i < length; i++) {
        const v = data[i];
        if (v > max) max = v;
      }
      if (!max) return null;
      const invMax = 1 / max;
      for (let i = 0; i < length; i++) data[i] *= invMax;

      const minPeaks = 15;
      const minThreshold = 0.3;
      let threshold = 0.9;
      let peaks = [];

      function findPeaksAt(thr) {
        const out = [];
        const skip = Math.round(effectiveRate * 0.25);
        for (let i = 0; i < length; i++) {
          if (data[i] > thr) {
            out.push(i);
            i += skip;
          }
        }
        return out;
      }

      while (peaks.length < minPeaks && threshold >= minThreshold) {
        peaks = findPeaksAt(threshold);
        threshold -= 0.05;
      }

      if (peaks.length < 4) return null;

      const intervalCounts = [];
      for (let i = 0; i < peaks.length; i++) {
        for (let j = 1; j <= 10 && i + j < peaks.length; j++) {
          const interval = peaks[i + j] - peaks[i];
          if (interval <= 0) continue;
          const existing = intervalCounts.find((ic) => ic.interval === interval);
          if (existing) existing.count += 1;
          else intervalCounts.push({ interval, count: 1 });
        }
      }

      if (!intervalCounts.length) return null;

      const tempoCounts = [];
      intervalCounts.forEach((ic) => {
        let tempo = (60 * effectiveRate) / ic.interval;
        if (!isFinite(tempo) || !tempo) return;
        while (tempo < 90) tempo *= 2;
        while (tempo > 180) tempo /= 2;
        tempo = Math.round(tempo);
        const existing = tempoCounts.find((tc) => tc.tempo === tempo);
        if (existing) existing.count += ic.count;
        else tempoCounts.push({ tempo, count: ic.count });
      });

      if (!tempoCounts.length) return null;
      tempoCounts.sort((a, b) => b.count - a.count);
      return tempoCounts[0].tempo;
    }

    tempoSlider.addEventListener("input", (e) => {
      const val = Number(e.target.value);
      updateTempoDisplay(val);
      pads.forEach((pad) => {
        if (pad.source) {
          pad.source.playbackRate.value = computePlaybackRate(pad);
        }
      });
    });

    gainSlider.addEventListener("input", (e) => {
      const value = parseFloat(e.target.value);
      masterGain.gain.value = value;
      updateGainDisplay(value);
    });

    updateTempoDisplay(Number(tempoSlider.value));
    updateGainDisplay(parseFloat(gainSlider.value));

    window.addEventListener("resize", resizeAllWaveforms);
    setTimeout(resizeAllWaveforms, 0);

    function clamp01(x) {
      return x < 0 ? 0 : x > 1 ? 1 : x;
    }

    function computeLfo2Step(pad, dt) {
      const twoPi = Math.PI * 2;
      pad.lfo2Phase += dt * pad.lfo2Rate * twoPi;
      if (pad.lfo2Phase > twoPi) {
        pad.lfo2Phase = pad.lfo2Phase % twoPi;
      }
      const phaseNorm = pad.lfo2Phase / twoPi;
      const wave = pad.lfo2Waveform || "sine";

      if (wave === "triangle") {
        const x = phaseNorm;
        return x < 0.5 ? 4 * x - 1 : -4 * x + 3;
      }
      if (wave === "square") {
        return phaseNorm < 0.5 ? 1 : -1;
      }
      if (wave === "random") {
        if (pad._lfo2LastStepPhase == null) {
          pad._lfo2LastStepPhase = 0;
        }
        if (pad.lfo2Phase < pad._lfo2LastStepPhase) {
          pad.lfo2Random = Math.random() * 2 - 1;
        }
        pad._lfo2LastStepPhase = pad.lfo2Phase;
        return pad.lfo2Random;
      }
      return Math.sin(pad.lfo2Phase);
    }

    let lastLfoTime = performance.now() / 1000;

    function lfoLoop(nowMs) {
      const now = nowMs / 1000;
      const dt = now - lastLfoTime;
      lastLfoTime = now;
      const audioNow = audioCtx.currentTime;

      pads.forEach((pad) => {
        if (
          pad.source &&
          pad.lfoTarget !== "off" &&
          pad.lfoDepth > 0 &&
          pad.lfoRate > 0
        ) {
          pad.lfoPhase += dt * pad.lfoRate * 2 * Math.PI;
          const y = Math.sin(pad.lfoPhase);

          if (pad.lfoTarget === "pitch") {
            const base = pad.basePlaybackRate || computePlaybackRate(pad);
            const depth = pad.lfoDepth * 0.2;
            const rate = base * (1 + y * depth);
            pad.source.playbackRate.value = Math.max(0.25, Math.min(4, rate));
          } else if (pad.lfoTarget === "cutoff") {
            const baseCutoff = pad.filterCutoff || 8000;
            const depthHz = baseCutoff * pad.lfoDepth;
            let freq = baseCutoff + y * depthHz;
            freq = Math.max(100, Math.min(18000, freq));
            pad.filterNode.frequency.setValueAtTime(freq, audioNow);
          }
        }

        const fxActive =
          pad.lfo2Target !== "off" &&
          pad.lfo2Depth > 0 &&
          pad.lfo2Rate > 0;

        let lfo2 = 0;
        if (fxActive) {
          lfo2 = computeLfo2Step(pad, dt) * pad.lfo2Depth;
        }

        const baseDelay = pad.delayAmount ?? 0;
        const baseRev = pad.reverbAmount ?? 0;
        const baseChorus = pad.chorusAmount ?? 0;

        if (pad.delayMix) {
          if (pad.lfo2Target === "delay" && fxActive) {
            const swing = Math.max(0.1, baseDelay) * 0.8;
            const v = clamp01(baseDelay + lfo2 * swing);
            pad.delayMix.gain.setValueAtTime(v, audioNow);
          } else {
            pad.delayMix.gain.setValueAtTime(baseDelay, audioNow);
          }
        }

        if (pad.reverbSend) {
          if (pad.lfo2Target === "reverb" && fxActive) {
            const swing = Math.max(0.1, baseRev) * 0.8;
            const v = clamp01(baseRev + lfo2 * swing);
            pad.reverbSend.gain.setValueAtTime(v, audioNow);
          } else {
            pad.reverbSend.gain.setValueAtTime(baseRev, audioNow);
          }
        }

        if (pad.chorusMix) {
          if (pad.lfo2Target === "chorus" && fxActive) {
            const swing = Math.max(0.1, baseChorus) * 0.8;
            const v = clamp01(baseChorus + lfo2 * swing);
            pad.chorusMix.gain.setValueAtTime(v, audioNow);
          } else {
            pad.chorusMix.gain.setValueAtTime(baseChorus, audioNow);
          }
        }
      });

      requestAnimationFrame(lfoLoop);
    }

    requestAnimationFrame(lfoLoop);
  </script>
</body>
</html>//

**GPT:** Here’s how to actually *see* and use this sampler — your file is already complete and self-contained:

1. **Copy everything** from  
   `<!DOCTYPE html>` down to the final `</html>` (ignore the `//` you put before and after in the chat — those are just comments).

2. **Save it as a file** on your computer, for example:
   - `battery-sampler.html`

3. **Open it in a modern browser**:
   - Use **Chrome** or **Edge** (they have the best Web Audio + Web MIDI support).
   - Double-click the file, or right-click → “Open with” → Chrome.

4. **Use the sampler:**
   - You’ll see:
     - Top bar with **Master** (Tempo + Volume) and **MIDI** panel  
     - A **4×4 grid of pads** (16 total), each with:
       - Big pad button (“Drop File or Click”)
       - File input to load audio
       - Waveform editor with draggable **start/end** points
       - **BPM Detect**, **Use as Master**, **Stop**
       - Mode (One-shot / Loop), Stretch, Pitch, Sync groups (A/B/C)
       - Filter (LP/HP/BP), cutoff, resonance
       - **LFO1** (Pitch/Cutoff), **LFO2** (Delay/Reverb/Chorus mix)
       - Delay, Reverb, Chorus controls
   - Drop a **WAV/MP3/OGG/AIFF** file on a pad (or use the file input).
   - Click the pad to **play**; hit **“Detect”** for tempo; assign **Sync group** to quantize with other pads.

5. **For MIDI:**
   - Click **“Enable Web MIDI”** in the MIDI panel.
   - Choose your **MIDI input** from the dropdown.
   - The pads are mapped starting at **MIDI note 36** (C1 upward).

If you want, I can also lightly tweak this into a “clean” version (no chat artifacts, no comments) and reorganize the script into modules, but as-is this file will render and run once you save it as an `.html` and open it in the browser.
