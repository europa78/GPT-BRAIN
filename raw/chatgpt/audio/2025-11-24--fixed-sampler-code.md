---
title: "Fixed sampler code"
date: 2025-11-24
cluster: "Audio / DSP / Instruments"
messages: 14
source: chatgpt-export conversations.json (FULL transcript)
---

# Fixed sampler code

> 14 messages · 2025-11-24 · cluster: Audio / DSP / Instruments

**Semantic neighbors:** [[Tech stack for soft synth]] · [[Render sampler UI]] · [[Drum sampler frameworks]] · [[Optimize audio sampler prompt]]

## Transcript

**Mike:** <!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>WebSampler Pro | Tone.js Engine</title> <script src="https://cdn.tailwindcss.com"></script> <script src="https://cdnjs.cloudflare.com/ajax/libs/tone/14.8.49/Tone.js"></script> <style> @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&family=Share+Tech+Mono&display=swap'); :root { --bg-dark: #1a1a1d; --panel-gray: #2b2b2e; --accent-orange: #ff9900; --accent-blue: #00d2ff; --pad-off: #3a3a3e; --pad-on: #ff9900; --pad-playing: #ffcc00; } body { background-color: #0f0f10; font-family: 'Inter', sans-serif; user-select: none; overflow: hidden; } /* Rack Panel Texture */ .rack-panel { background: linear-gradient(180deg, #323236 0%, #252528 100%); border-top: 1px solid #4a4a4f; border-bottom: 1px solid #111; box-shadow: inset 0 0 20px rgba(0,0,0,0.5); } /* Standard Knob Styles */ .knob-container { position: relative; display: flex; flex-direction: column; align-items: center; justify-content: center; cursor: ns-resize; } .knob-circle { width: 48px; height: 48px; border-radius: 50%; background: radial-gradient(circle at 30% 30%, #4a4a4f, #1a1a1d); border: 2px solid #111; box-shadow: 0 4px 6px rgba(0,0,0,0.4); position: relative; transition: transform 0.05s linear; } /* Mini Knob for Pads */ .mini-knob .knob-circle { width: 28px; height: 28px; border-width: 1px; } .mini-knob .knob-indicator { width: 1.5px; height: 50%; } .mini-knob .knob-label { font-size: 0.5rem; margin-top: 2px; } .mini-knob .knob-value { font-size: 0.5rem; margin-bottom: 1px; height: 10px; } .knob-indicator { position: absolute; top: 50%; left: 50%; width: 2px; height: 50%; background: transparent; transform-origin: top center; } .knob-indicator::after { content: ''; position: absolute; top: 4px; left: -1px; width: 2px; height: 12px; background-color: var(--accent-orange); box-shadow: 0 0 5px var(--accent-orange); } .mini-knob .knob-indicator::after { height: 6px; top: 2px; } .knob-label { font-family: 'Share Tech Mono', monospace; font-size: 0.65rem; color: #888; margin-top: 6px; letter-spacing: 0.05em; } .knob-value { font-family: 'Share Tech Mono', monospace; font-size: 0.7rem; color: var(--accent-blue); margin-bottom: 4px; opacity: 0; transition: opacity 0.2s; } .knob-container:hover .knob-value { opacity: 1; } /* Keyboard */ .piano-container { perspective: 600px; } .key { transition: background-color 0.05s, transform 0.05s; border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; } .white-key { background: linear-gradient(to bottom, #f0f0f0, #e0e0e0); height: 160px; z-index: 1; border: 1px solid #000; box-shadow: inset 0 -5px 10px rgba(0,0,0,0.1); } .white-key.active { transform: translateY(2px) rotateX(-2deg); background: #ccc; } .black-key { background: #111; height: 100px; z-index: 2; width: 60%; position: absolute; left: 70%; border: 1px solid #000; box-shadow: 2px 2px 5px rgba(0,0,0,0.5); border-bottom-left-radius: 2px; border-bottom-right-radius: 2px; } .black-key.active { background: #333; transform: translateY(2px) rotateX(-2deg); } /* MPC Pads */ .pad-grid { display: grid; grid-template-columns: repeat(4, 1fr); grid-template-rows: repeat(4, 1fr); gap: 6px; padding: 8px; background: #111; border-radius: 4px; box-shadow: inset 0 0 10px #000; height: 100%; overflow-y: auto; } .mpc-pad { background-color: var(--pad-off); border-radius: 4px; box-shadow: inset 0 0 5px rgba(0,0,0,0.5), 0 2px 4px rgba(0,0,0,0.5); cursor: pointer; transition: background-color 0.05s, transform 0.05s; position: relative; display: flex; flex-direction: column; justify-content: space-between; padding: 4px; min-height: 90px; } .mpc-pad:active, .mpc-pad.active { background-color: var(--pad-on); box-shadow: 0 0 15px var(--accent-orange); transform: scale(0.99); } .mpc-pad.looping { background-color: var(--pad-playing); border-color: #fff; box-shadow: 0 0 10px rgba(255, 204, 0, 0.5); } .mpc-pad.has-sample { background-color: #4a4a4f; border: 1px solid #555; } .pad-top-row { display: flex; justify-content: space-between; align-items: center; } .pad-controls { display: flex; align-items: center; justify-content: space-between; margin-top: auto; background: rgba(0,0,0,0.3); border-radius: 4px; padding: 2px 4px; gap: 4px; } /* Pad Slider */ input[type=range].pad-slider { -webkit-appearance: none; width: 100%; height: 3px; background: #222; border-radius: 2px; outline: none; } input[type=range].pad-slider::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: 8px; height: 8px; border-radius: 50%; background: var(--accent-orange); cursor: pointer; } .pad-label { font-family: 'Share Tech Mono', monospace; font-size: 0.6rem; color: rgba(255,255,255,0.4); pointer-events: none; } /* Control Button Styles */ .pad-btn { pointer-events: auto; font-size: 9px; background: #222; color: #888; border: 1px solid #444; border-radius: 2px; padding: 1px 3px; font-family: monospace; z-index: 10; cursor: pointer; margin-left: 4px; } .pad-btn:hover { color: #fff; border-color: #666; } .pad-btn.loop-active { color: var(--accent-orange); border-color: var(--accent-orange); } .pad-filename { font-size: 0.55rem; color: #fff; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; text-align: center; pointer-events: none; margin: 2px 0; font-weight: 600; } .tiny-label { font-size: 0.45rem; color: #aaa; font-family: 'Share Tech Mono', monospace; margin-bottom: 1px; display: block; } /* Sample Editor Modal */ .modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.8); z-index: 100; display: flex; justify-content: center; align-items: center; backdrop-filter: blur(5px); } .modal-content { background: #1a1a1d; border: 1px solid #444; border-radius: 8px; width: 90%; max-width: 800px; padding: 20px; box-shadow: 0 0 30px rgba(0,0,0,0.8); display: flex; flex-direction: column; gap: 15px; } .waveform-wrapper { position: relative; height: 150px; background: #000; border: 1px solid #333; border-radius: 4px; cursor: crosshair; } #waveform-canvas { width: 100%; height: 100%; display: block; } /* Markers */ .marker { position: absolute; top: 0; bottom: 0; width: 2px; cursor: ew-resize; z-index: 10; } .marker-handle { position: absolute; top: 0; width: 0; height: 0; border-left: 6px solid transparent; border-right: 6px solid transparent; cursor: ew-resize; } .marker-start { background: #0f0; left: 0; } .marker-start .marker-handle { border-top: 8px solid #0f0; left: -5px; } .marker-end { background: #f00; left: 100%; } .marker-end .marker-handle { border-top: 8px solid #f00; left: -5px; } .region-dim { position: absolute; top: 0; bottom: 0; background: rgba(0,0,0,0.6); pointer-events: none; } /* Screen/Header */ .info-screen { background: #111; border: 1px solid #333; box-shadow: inset 0 0 10px rgba(0,0,0,0.8); font-family: 'Share Tech Mono', monospace; } .led-indicator { width: 8px; height: 8px; border-radius: 50%; background-color: #333; transition: background-color 0.1s; } .led-indicator.on { background-color: var(--accent-orange); box-shadow: 0 0 8px var(--accent-orange); } /* Tabs */ .nav-tab { color: #666; border-bottom: 2px solid transparent; cursor: pointer; transition: all 0.2s; } .nav-tab.active { color: var(--accent-orange); border-bottom: 2px solid var(--accent-orange); } .drag-over { border: 2px dashed var(--accent-orange) !important; background: #222 !important; } .hidden { display: none !important; } #overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(15,15,16,0.95); z-index: 50; display: flex; flex-direction: column; justify-content: center; align-items: center; } .sample-list-item { font-family: 'Share Tech Mono', monospace; font-size: 0.75rem; transition: background 0.1s; } .sample-list-item:hover { background-color: #333; } </style> </head> <body class="text-white h-screen flex flex-col"> <!-- Initialization Overlay --> <div id="overlay"> <h1 class="text-3xl font-bold mb-4 tracking-widest text-gray-200">K-SAMPLER <span class="text-orange-500">PRO</span></h1> <p class="text-gray-400 mb-8 font-mono text-sm">Powered by Tone.js</p> <button id="start-btn" class="px-8 py-3 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded shadow-[0_0_15px_rgba(255,153,0,0.3)] transition border border-orange-400"> INITIALIZE SYSTEM </button> <p id="loading-text" class="mt-4 text-xs text-gray-500 font-mono hidden">Loading Core Library...</p> </div> <!-- Sample Editor Modal --> <div id="editor-modal" class="modal-overlay hidden"> <div class="modal-content"> <div class="flex justify-between items-center border-b border-[#333] pb-2"> <h2 class="text-lg font-bold font-mono text-gray-200">SAMPLE EDITOR: <span id="editor-title" class="text-orange-500">PAD 1</span></h2> <button onclick="closeEditor()" class="text-gray-400 hover:text-white font-bold text-xl">&times;</button> </div> <div class="waveform-wrapper" id="waveform-container"> <canvas id="waveform-canvas"></canvas> <!-- Overlays --> <div id="dim-start" class="region-dim" style="left:0; width:0;"></div> <div id="dim-end" class="region-dim" style="left:100%; right:0;"></div> <div id="marker-start" class="marker marker-start"> <div class="marker-handle"></div> </div> <div id="marker-end" class="marker marker-end"> <div class="marker-handle"></div> </div> </div> <div class="flex gap-4 justify-between items-center bg-[#111] p-3 rounded font-mono text-xs"> <div class="flex gap-4"> <div class="flex flex-col"> <span class="text-gray-500">START</span> <span id="lbl-start" class="text-green-400">0.000s</span> </div> <div class="flex flex-col"> <span class="text-gray-500">END</span> <span id="lbl-end" class="text-red-400">1.000s</span> </div> <div class="flex flex-col"> <span class="text-gray-500">DURATION</span> <span id="lbl-dur" class="text-white">1.000s</span> </div> </div> <div class="flex gap-2"> <button onclick="previewPadSample()" class="px-4 py-2 bg-[#333] hover:bg-[#444] rounded text-white flex items-center gap-2"> <span>▶</span> PREVIEW </button> <button onclick="closeEditor()" class="px-4 py-2 bg-orange-700 hover:bg-orange-600 rounded text-white font-bold">DONE</button> </div> </div> <p class="text-[10px] text-gray-600 font-mono">DRAG MARKERS TO SET PLAYBACK REGION. CHANGES ARE AUTO-SAVED.</p> </div> </div> <!-- Main Interface --> <div class="flex-1 flex flex-col max-w-6xl mx-auto w-full p-2 lg:p-6 gap-4 h-full"> <!-- Header --> <header class="bg-[#222] border border-[#333] p-4 rounded-t-lg flex justify-between items-center shadow-lg shrink-0"> <div class="flex items-center gap-4"> <div class="w-12 h-12 bg-orange-600 rounded flex items-center justify-center font-bold text-2xl shadow-inner">K</div> <div> <h1 class="text-lg font-bold tracking-wider">WORKSTATION</h1> <p class="text-xs text-gray-500 font-mono">HYBRID ENGINE</p> </div> </div> <div class="info-screen h-12 w-48 rounded hidden md:flex items-center justify-center relative overflow-hidden"> <canvas id="visualizer" width="190" height="46"></canvas> </div> <div class="flex items-center gap-6"> <div class="flex flex-col items-center gap-1"> <div id="midi-led" class="led-indicator"></div> <span class="text-[10px] text-gray-500 font-mono">MIDI</span> </div> <div class="knob-wrapper" data-param="master" data-min="-60" data-max="6" data-value="-6" data-suffix="dB"></div> </div> </header> <!-- Main Rack (Global FX) --> <div class="rack-panel rounded-b-lg border border-[#333] p-4 lg:p-6 flex flex-wrap content-start gap-4 lg:gap-8 shrink-0 overflow-x-auto"> <!-- Envelope --> <div class="bg-[#1e1e20] border border-[#333] rounded p-3 lg:p-4 flex flex-col gap-2 shadow-xl min-w-[280px]"> <div class="border-b border-[#333] pb-2 mb-2 flex justify-between"> <span class="text-xs font-bold text-gray-400">AMP ENVELOPE (KEYS)</span> </div> <div class="flex gap-2 lg:gap-4 justify-center"> <div class="knob-wrapper" data-param="attack" data-min="0" data-max="2" data-value="0.05" data-suffix="s" data-label="ATTACK"></div> <div class="knob-wrapper" data-param="decay" data-min="0" data-max="2" data-value="0.3" data-suffix="s" data-label="DECAY"></div> <div class="knob-wrapper" data-param="sustain" data-min="0" data-max="1" data-value="0.8" data-suffix="" data-label="SUSTAIN"></div> <div class="knob-wrapper" data-param="release" data-min="0" data-max="5" data-value="1.5" data-suffix="s" data-label="RELEASE"></div> </div> </div> <!-- Filter --> <div class="bg-[#1e1e20] border border-[#333] rounded p-3 lg:p-4 flex flex-col gap-2 shadow-xl min-w-[150px]"> <div class="border-b border-[#333] pb-2 mb-2 flex justify-between"> <span class="text-xs font-bold text-gray-400">FILTER (GLOBAL)</span> </div> <div class="flex gap-2 lg:gap-4 justify-center"> <div class="knob-wrapper" data-param="cutoff" data-min="20" data-max="20000" data-value="20000" data-suffix="Hz" data-label="CUTOFF" data-log="true"></div> <div class="knob-wrapper" data-param="resonance" data-min="0" data-max="20" data-value="1" data-suffix="" data-label="RESO"></div> </div> </div> <!-- FX --> <div class="bg-[#1e1e20] border border-[#333] rounded p-3 lg:p-4 flex flex-col gap-2 shadow-xl min-w-[220px]"> <div class="border-b border-[#333] pb-2 mb-2 flex justify-between"> <span class="text-xs font-bold text-gray-400">FX CHAIN</span> </div> <div class="flex gap-2 lg:gap-4 justify-center"> <div class="knob-wrapper" data-param="delayTime" data-min="0" data-max="1" data-value="0.25" data-suffix="s" data-label="TIME"></div> <div class="knob-wrapper" data-param="delayMix" data-min="0" data-max="1" data-value="0.1" data-suffix="" data-label="DLY"></div> <div class="knob-wrapper" data-param="reverbMix" data-min="0" data-max="1" data-value="0.3" data-suffix="" data-label="RVB"></div> </div> </div> </div> <!-- Navigation Tabs --> <div class="flex gap-6 px-4 border-b border-[#333]"> <button class="nav-tab active font-mono text-sm py-2" onclick="switchTab('keys')">PIANO KEYS</button> <button class="nav-tab font-mono text-sm py-2" onclick="switchTab('mpc')">MPC PADS</button> </div> <!-- Tab Content Area --> <div class="flex-1 relative overflow-hidden bg-[#0a0a0a] rounded-lg border border-[#333] shadow-2xl"> <!-- VIEW: PIANO --> <div id="view-keys" class="absolute inset-0 flex flex-col justify-end pb-0 transition-opacity duration-300"> <div class="h-48 piano-container w-full border-t-4 border-orange-600"> <div id="keyboard" class="flex relative h-full justify-center bg-[#0a0a0a]"></div> </div> </div> <!-- VIEW: MPC --> <div id="view-mpc" class="absolute inset-0 flex opacity-0 pointer-events-none transition-opacity duration-300 bg-[#151515]"> <div class="flex-1 p-4 flex flex-col h-full"> <div class="flex justify-between items-end mb-2 shrink-0"> <span class="text-xs text-gray-400 font-mono">DRUM RACK 1</span> <span class="text-[10px] text-gray-600 font-mono">DRAG SAMPLES ONTO PADS</span> </div> <div class="flex-1 min-h-0 pad-grid" id="pad-grid"></div> </div> <div class="w-64 bg-[#111] border-l border-[#333] flex flex-col shrink-0"> <div class="p-3 border-b border-[#333] bg-[#1a1a1d]"> <span class="text-xs font-bold text-gray-300 tracking-wider">SAMPLE LOADER</span> </div> <div class="flex-1 overflow-y-auto p-2 space-y-1" id="sample-list"></div> </div> </div> </div> </div> <input type="file" id="file-input" accept="audio/*" class="hidden"> <script> // --- Global State --- let toneStarted = false; let activeTab = 'keys'; let pianoSampler, drumPlayers; let filter, delay, reverb, limiter, analyser; const params = { attack: 0.05, decay: 0.3, sustain: 0.8, release: 1.5, cutoff: 20000, resonance: 1, delayTime: 0.25, delayMix: 0.1, reverbMix: 0.3, master: -6 }; const padCount = 16; // Extended Pad Settings to include Playback Region const padSettings = new Array(padCount).fill(null).map(() => ({ isLoop: false, pitch: 0, rate: 1.0, startTime: 0, // In seconds endTime: null // null = end of buffer })); // --- Editor State --- let currentEditPadIndex = null; let isDraggingMarker = null; // 'start' or 'end' // --- 1. Audio Initialization --- async function initAudio() { document.getElementById('start-btn').classList.add('hidden'); document.getElementById('loading-text').classList.remove('hidden'); document.getElementById('loading-text').style.display = 'block'; await Tone.start(); toneStarted = true; limiter = new Tone.Limiter(-1).toDestination(); reverb = new Tone.Reverb({ decay: 4, wet: params.reverbMix }).connect(limiter); await reverb.generate(); delay = new Tone.FeedbackDelay({ delayTime: params.delayTime, feedback: 0.4, wet: params.delayMix }).connect(reverb); filter = new Tone.Filter({ type: "lowpass", frequency: params.cutoff, Q: params.resonance }).connect(delay); analyser = new Tone.Analyser("waveform", 256); limiter.connect(analyser); pianoSampler = new Tone.Sampler({ urls: { "C4": "C4.mp3", "D#4": "Ds4.mp3", "F#4": "Fs4.mp3", "A4": "A4.mp3" }, release: 1, baseUrl: "https://tonejs.github.io/audio/salamander/", onload: () => onAudioLoaded() }).connect(filter); drumPlayers = new Tone.Players({ urls: {}, fadeOut: 0.01 }).connect(filter); } function onAudioLoaded() { document.getElementById('overlay').style.opacity = 0; setTimeout(() => document.getElementById('overlay').remove(), 500); updateParams(); drawVisualizer(); setupMIDI(); } function updateParams() { if (!pianoSampler) return; pianoSampler.attack = params.attack; pianoSampler.decay = params.decay; pianoSampler.sustain = params.sustain; pianoSampler.release = params.release; filter.frequency.rampTo(params.cutoff, 0.1); filter.Q.value = params.resonance; delay.delayTime.rampTo(params.delayTime, 0.1); delay.wet.value = params.delayMix; reverb.wet.value = params.reverbMix; Tone.Destination.volume.rampTo(params.master, 0.1); } // --- 2. UI Knob Logic --- class Knob { constructor(element, isMini = false) { this.element = element; this.param = element.dataset.param; this.min = parseFloat(element.dataset.min); this.max = parseFloat(element.dataset.max); this.value = parseFloat(element.dataset.value); this.suffix = element.dataset.suffix || ""; this.label = element.dataset.label || "VOL"; this.isLog = element.dataset.log === "true"; this.isMini = isMini; this.render(); this.addListeners(); } render() { const miniClass = this.isMini ? 'mini-knob' : ''; this.element.className = knob-wrapper ${miniClass}; this.element.innerHTML = <div class="knob-value">${this.formatValue(this.value)}${this.suffix}</div><div class="knob-container"><div class="knob-circle" style="transform: rotate(${this.valToDeg()}deg)"><div class="knob-indicator"></div></div><div class="knob-label">${this.label}</div></div>; } formatValue(val) { return Math.abs(val) < 10 ? val.toFixed(this.isMini ? 1 : 2) : Math.round(val); } valToDeg() { let pct; if (this.isLog) { const minLog = Math.log(this.min), maxLog = Math.log(this.max); pct = (Math.log(this.value) - minLog) / (maxLog - minLog); } else { pct = (this.value - this.min) / (this.max - this.min); } return (pct * 290) - 145; } updateValueFromDy(dy) { const sensitivity = 0.005; if (this.isLog) { const currentPct = (Math.log(this.value) - Math.log(this.min)) / (Math.log(this.max) - Math.log(this.min)); let newPct = Math.max(0, Math.min(1, currentPct + (dy * sensitivity))); this.value = Math.exp(newPct * (Math.log(this.max) - Math.log(this.min)) + Math.log(this.min)); } else { this.value = Math.max(this.min, Math.min(this.max, this.value + (dy * (this.max - this.min) * sensitivity))); } this.updateVisuals(); if(params.hasOwnProperty(this.param)) { params[this.param] = this.value; updateParams(); } else if(this.element.onValueChange) this.element.onValueChange(this.value); } updateVisuals() { const circle = this.element.querySelector('.knob-circle'); const valDisplay = this.element.querySelector('.knob-value'); circle.style.transform = rotate(${this.valToDeg()}deg); valDisplay.textContent = ${this.formatValue(this.value)}${this.suffix}; } addListeners() { const container = this.element.querySelector('.knob-container'); const startDrag = (e) => { e.stopPropagation(); const startY = e.clientY || e.touches[0].clientY; const onMove = (me) => { me.preventDefault(); this.updateValueFromDy(startY - (me.clientY || me.touches[0].clientY)); }; const onUp = () => { window.removeEventListener('mousemove', onMove); window.removeEventListener('mouseup', onUp); window.removeEventListener('touchmove', onMove); window.removeEventListener('touchend', onUp); }; window.addEventListener('mousemove', onMove); window.addEventListener('mouseup', onUp); window.addEventListener('touchmove', onMove); window.addEventListener('touchend', onUp); }; container.addEventListener('mousedown', startDrag); container.addEventListener('touchstart', (e) => startDrag(e)); container.addEventListener('click', (e) => e.stopPropagation()); } } document.querySelectorAll('.knob-wrapper').forEach(el => new Knob(el)); // --- 3. View Logic --- window.switchTab = (tab) => { activeTab = tab; document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active')); event.target.classList.add('active'); const keysView = document.getElementById('view-keys'); const mpcView = document.getElementById('view-mpc'); if (tab === 'keys') { keysView.style.opacity = '1'; keysView.style.pointerEvents = 'all'; mpcView.style.opacity = '0'; mpcView.style.pointerEvents = 'none'; } else { keysView.style.opacity = '0'; keysView.style.pointerEvents = 'none'; mpcView.style.opacity = '1'; mpcView.style.pointerEvents = 'all'; } }; // --- 4. Piano Logic --- const keyboardEl = document.getElementById('keyboard'); const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']; const keyMap = {}; function createKeyboard() { for (let oct = 2; oct <= 5; oct++) { notes.forEach(note => { const noteName = ${note}${oct}; const isBlack = note.includes('#'); const key = document.createElement('div'); key.className = key ${isBlack ? 'black-key' : 'white-key'}; key.dataset.note = noteName; if (isBlack) { key.style.marginLeft = "-1.5rem"; key.style.marginRight = "-1.5rem"; } const play = () => { if(activeTab === 'keys') triggerAttack(noteName); }; const stop = () => { if(activeTab === 'keys') triggerRelease(noteName); }; key.addEventListener('mousedown', play); key.addEventListener('mouseup', stop); key.addEventListener('mouseleave', stop); key.addEventListener('touchstart', (e) => { e.preventDefault(); play(); }); key.addEventListener('touchend', stop); keyboardEl.appendChild(key); keyMap[noteName] = key; }); } } createKeyboard(); function triggerAttack(note) { if (toneStarted) { pianoSampler.triggerAttack(note); if(keyMap[note]) keyMap[note].classList.add('active'); blinkMidiLed(); } } function triggerRelease(note) { if (toneStarted) { pianoSampler.triggerRelease(note); if(keyMap[note]) keyMap[note].classList.remove('active'); } } // --- 5. MPC UI --- const padGrid = document.getElementById('pad-grid'); const sampleList = document.getElementById('sample-list'); let selectedPadIndex = null; for(let i=0; i<padCount; i++) { const pad = document.createElement('div'); pad.className = 'mpc-pad'; pad.id = pad-${i}; pad.dataset.index = i; pad.innerHTML = <div class="pad-top-row"> <span class="pad-label">PAD ${i+1}</span> <div class="flex gap-1"> <button class="pad-btn" id="edit-${i}" title="Edit Sample">✎</button> <button class="pad-btn" id="toggle-${i}" title="Toggle One-Shot / Loop">➝</button> </div> </div> <span class="pad-filename" id="pad-name-${i}">Empty</span> <div class="pad-controls" id="controls-${i}"> <div class="mini-knob-wrapper" data-index="${i}" data-param="tune" data-min="-12" data-max="12" data-value="0" data-label="TUNE"></div> <div class="flex-1 ml-2 flex flex-col justify-end pb-1"> <div class="flex justify-between w-full"><span class="tiny-label">RATE</span><span class="tiny-label text-blue-400" id="rate-val-${i}">1.0x</span></div> <input type="range" class="pad-slider" min="0.5" max="2.0" step="0.1" value="1.0" id="rate-${i}"> </div> </div> ; // Edit Button pad.querySelector(#edit-${i}).addEventListener('click', (e) => { e.stopPropagation(); openEditor(i); }); // Loop Button pad.querySelector(#toggle-${i}).addEventListener('click', (e) => { e.stopPropagation(); togglePadMode(i); }); // Interactions pad.addEventListener('mousedown', (e) => { if(isControlElement(e.target)) return; triggerPad(i); }); pad.addEventListener('touchstart', (e) => { e.preventDefault(); if(isControlElement(e.target)) return; triggerPad(i); }); // Drag Drop pad.addEventListener('dragover', (e) => { e.preventDefault(); pad.classList.add('drag-over'); }); pad.addEventListener('dragleave', () => pad.classList.remove('drag-over')); pad.addEventListener('drop', (e) => { e.preventDefault(); pad.classList.remove('drag-over'); const file = e.dataTransfer.files[0]; if (file && file.type.startsWith('audio')) loadSampleToPad(i, file); }); padGrid.appendChild(pad); // Init mini components const knobEl = pad.querySelector('.mini-knob-wrapper'); const tuneKnob = new Knob(knobEl, true); tuneKnob.element.onValueChange = (val) => { padSettings[i].pitch = val; if(drumPlayers.has(i.toString())) drumPlayers.player(i.toString()).detune = val * 100; }; const rateSlider = pad.querySelector(#rate-${i}); rateSlider.addEventListener('input', (e) => { const val = parseFloat(e.target.value); document.getElementById(rate-val-${i}).textContent = val.toFixed(1) + "x"; padSettings[i].rate = val; if(drumPlayers.has(i.toString())) drumPlayers.player(i.toString()).playbackRate = val; }); rateSlider.addEventListener('mousedown', e=>e.stopPropagation()); rateSlider.addEventListener('touchstart', e=>e.stopPropagation()); // Browser List const li = document.createElement('div'); li.className = 'sample-list-item flex justify-between items-center p-2 rounded border border-transparent hover:border-[#333] mb-1'; li.innerHTML = <span class="text-gray-400">PAD ${i+1}</span><div class="flex items-center gap-2"><span class="text-[10px] text-gray-500 w-20 truncate text-right" id="list-name-${i}">-</span><button class="text-orange-500 hover:text-white" onclick="openFileBrowser(${i})">📂</button></div>; sampleList.appendChild(li); } function isControlElement(target) { return target.tagName === 'BUTTON' || target.tagName === 'INPUT' || target.closest('.knob-wrapper'); } // --- 6. Playback Logic --- function togglePadMode(index) { padSettings[index].isLoop = !padSettings[index].isLoop; const btn = document.getElementById(toggle-${index}); const pad = document.getElementById(pad-${index}); if (padSettings[index].isLoop) { btn.textContent = "⟳"; btn.classList.add('loop-active'); } else { btn.textContent = "➝"; btn.classList.remove('loop-active'); if (drumPlayers.has(index.toString()) && drumPlayers.player(index.toString()).state === 'started') { drumPlayers.player(index.toString()).stop(); pad.classList.remove('looping'); } } } function triggerPad(index) { if(!toneStarted || !drumPlayers) return; const padEl = document.getElementById(pad-${index}); if (!drumPlayers.has(index.toString())) { padEl.classList.add('active'); setTimeout(() => padEl.classList.remove('active'), 100); return; } const player = drumPlayers.player(index.toString()); const settings = padSettings[index]; const bufferDuration = player.buffer.duration; // Region Logic const start = settings.startTime; const end = settings.endTime !== null ? settings.endTime : bufferDuration; const duration = Math.max(0, end - start); player.detune = settings.pitch * 100; player.playbackRate = settings.rate; if (settings.isLoop) { // Loop Mode: Loops between start and end player.loop = true; player.loopStart = start; player.loopEnd = end; if (player.state === 'started') { player.stop(); padEl.classList.remove('looping', 'active'); } else { player.start(undefined, start); // Start at beginning of region padEl.classList.add('looping'); } } else { // One-Shot: Plays from start to end once player.loop = false; player.stop(); // Tone.Player.start(time, offset, duration) player.start(undefined, start, duration); padEl.classList.remove('active'); void padEl.offsetWidth; padEl.classList.add('active'); setTimeout(() => padEl.classList.remove('active'), 100); } blinkMidiLed(); } // --- 7. Sample Editor Logic --- const editorModal = document.getElementById('editor-modal'); const waveformCanvas = document.getElementById('waveform-canvas'); const waveformCtx = waveformCanvas.getContext('2d'); const markerStart = document.getElementById('marker-start'); const markerEnd = document.getElementById('marker-end'); function openEditor(index) { if (!drumPlayers.has(index.toString())) return; // No sample to edit currentEditPadIndex = index; const player = drumPlayers.player(index.toString()); // Set title document.getElementById('editor-title').innerText = PAD ${index + 1}; editorModal.classList.remove('hidden'); // Initialize markers based on existing settings const settings = padSettings[index]; const duration = player.buffer.duration; if (settings.endTime === null) settings.endTime = duration; drawWaveform(player.buffer); updateMarkerPositions(); } function closeEditor() { editorModal.classList.add('hidden'); currentEditPadIndex = null; } function drawWaveform(buffer) { // Get raw audio data const channelData = buffer.getChannelData(0); // Left channel const step = Math.ceil(channelData.length / waveformCanvas.width); const amp = waveformCanvas.height / 2; // Resize canvas resolution waveformCanvas.width = waveformCanvas.parentElement.clientWidth; waveformCanvas.height = waveformCanvas.parentElement.clientHeight; waveformCtx.fillStyle = "#000"; waveformCtx.fillRect(0, 0, waveformCanvas.width, waveformCanvas.height); waveformCtx.beginPath(); waveformCtx.strokeStyle = "#00d2ff"; waveformCtx.lineWidth = 1; for(let i = 0; i < waveformCanvas.width; i++){ let min = 1.0; let max = -1.0; for(let j = 0; j < step; j++) { const datum = channelData[(i * step) + j]; if (datum < min) min = datum; if (datum > max) max = datum; } waveformCtx.moveTo(i, (1 + min) * amp); waveformCtx.lineTo(i, (1 + max) * amp); } waveformCtx.stroke(); } function updateMarkerPositions() { if (currentEditPadIndex === null) return; const settings = padSettings[currentEditPadIndex]; const player = drumPlayers.player(currentEditPadIndex.toString()); const totalDur = player.buffer.duration; // Calculate % positions const startPct = (settings.startTime / totalDur) * 100; const endPct = (settings.endTime / totalDur) * 100; // Update DOM markerStart.style.left = ${startPct}%; document.getElementById('dim-start').style.width = ${startPct}%; markerEnd.style.left = ${endPct}%; document.getElementById('dim-end').style.left = ${endPct}%; // Update Labels document.getElementById('lbl-start').innerText = settings.startTime.toFixed(3) + 's'; document.getElementById('lbl-end').innerText = settings.endTime.toFixed(3) + 's'; document.getElementById('lbl-dur').innerText = (settings.endTime - settings.startTime).toFixed(3) + 's'; } function moveMarker(clientX) { if (currentEditPadIndex === null || !isDraggingMarker) return; const rect = document.getElementById('waveform-container').getBoundingClientRect(); let x = clientX - rect.left; x = Math.max(0, Math.min(x, rect.width)); // clamp const pct = x / rect.width; const player = drumPlayers.player(currentEditPadIndex.toString()); const totalDur = player.buffer.duration; const newTime = pct * totalDur; const settings = padSettings[currentEditPadIndex]; if (isDraggingMarker === 'start') { settings.startTime = Math.min(newTime, settings.endTime - 0.01); } else { settings.endTime = Math.max(newTime, settings.startTime + 0.01); } updateMarkerPositions(); } // Marker Interactions document.getElementById('marker-start').addEventListener('mousedown', (e) => { isDraggingMarker = 'start'; e.preventDefault(); }); document.getElementById('marker-end').addEventListener('mousedown', (e) => { isDraggingMarker = 'end'; e.preventDefault(); }); window.addEventListener('mouseup', () => { isDraggingMarker = null; }); window.addEventListener('mousemove', (e) => { if(isDraggingMarker) moveMarker(e.clientX); }); function previewPadSample() { if(currentEditPadIndex !== null) triggerPad(currentEditPadIndex); } // --- 8. File Loading --- const fileInput = document.getElementById('file-input'); window.openFileBrowser = (index) => { selectedPadIndex = index; fileInput.click(); }; fileInput.addEventListener('change', (e) => { if (e.target.files.length > 0 && selectedPadIndex !== null) { loadSampleToPad(selectedPadIndex, e.target.files[0]); e.target.value = ''; } }); function loadSampleToPad(index, file) { const url = URL.createObjectURL(file); drumPlayers.add(index.toString(), url, () => { // Reset region on load padSettings[index].startTime = 0; padSettings[index].endTime = drumPlayers.player(index.toString()).buffer.duration; }); // Persist UI const player = drumPlayers.player(index.toString()); // Note: Might be async loaded, but URL obj is fast player.loop = padSettings[index].isLoop; player.detune = padSettings[index].pitch * 100; player.playbackRate = padSettings[index].rate; document.getElementById(pad-name-${index}).textContent = file.name; document.getElementById(list-name-${index}).textContent = file.name; document.getElementById(pad-${index}).classList.add('has-sample'); } // --- 9. Input & Utilities --- function blinkMidiLed() { const led = document.getElementById('midi-led'); led.classList.add('on'); setTimeout(() => led.classList.remove('on'), 100); } const pianoKeys = { 'a':'C3', 'w':'C#3', 's':'D3', 'e':'D#3', 'd':'E3', 'f':'F3', 't':'F#3', 'g':'G3' }; const mpcKeys = { '1':0, '2':1, '3':2, '4':3, 'q':4, 'w':5, 'e':6, 'r':7, 'a':8, 's':9, 'd':10, 'f':11, 'z':12, 'x':13, 'c':14, 'v':15 }; window.addEventListener('keydown', (e) => { if (e.repeat) return; const key = e.key.toLowerCase(); if (activeTab === 'keys' && pianoKeys[key]) triggerAttack(pianoKeys[key]); else if (activeTab === 'mpc' && mpcKeys.hasOwnProperty(key)) triggerPad(mpcKeys[key]); }); window.addEventListener('keyup', (e) => { if (activeTab === 'keys' && pianoKeys[e.key.toLowerCase()]) triggerRelease(pianoKeys[e.key.toLowerCase()]); }); function setupMIDI() { if (navigator.requestMIDIAccess) { navigator.requestMIDIAccess().then(access => { for (let input of access.inputs.values()) input.onmidimessage = handleMIDIMessage; access.onstatechange = (e) => { if (e.port.type === "input" && e.port.state === "connected") e.port.onmidimessage = handleMIDIMessage; }; }).catch(e => console.warn("MIDI fail", e)); } } function handleMIDIMessage(msg) { const [cmd, note, vel] = msg.data; const isNoteOn = (cmd & 0xf0) === 144 && vel > 0; const isNoteOff = (cmd & 0xf0) === 128 || ((cmd & 0xf0) === 144 && vel === 0); if (activeTab === 'keys') { const noteName = Tone.Frequency(note, "midi").toNote(); if (isNoteOn) triggerAttack(noteName); if (isNoteOff) triggerRelease(noteName); } else { if (isNoteOn && note >= 36 && note <= 51) triggerPad(note - 36); } } function drawVisualizer() { const canvas = document.getElementById('visualizer'); const ctx = canvas.getContext('2d'); function loop() { requestAnimationFrame(loop); if (!toneStarted) return; const values = analyser.getValue(); ctx.fillStyle = '#111'; ctx.fillRect(0,0,canvas.width,canvas.height); ctx.beginPath(); ctx.lineWidth = 2; ctx.strokeStyle = '#00d2ff'; const sliceW = canvas.width * 1.0 / values.length; let x = 0; for(let i=0; i<values.length; i++) { const v = (values[i] + 1) / 2; const y = v * canvas.height; i===0 ? ctx.moveTo(x,y) : ctx.lineTo(x,y); x += sliceW; } ctx.stroke(); } loop(); } document.getElementById('start-btn').addEventListener('click', initAudio); </script> </body> </html>

**GPT:** Here’s a **fixed, working** single-file version of your sampler.  
The main issues in your original snippet were:

- Template strings/backticks stripped (e.g. `pad-${i}`, `rotate(${...}deg)`).
- `switchTab` using `event.target` without receiving `event`.
- Some DOM/JS ordering issues.

I rebuilt the JS logic cleanly while keeping your UI, pads, editor, and MIDI behavior.

Save this as `websampler-pro.html` and open it in a modern browser (Chrome recommended):

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>WebSampler Pro | Tone.js Engine</title>

  <!-- Tailwind & Tone.js -->
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
      top: 50%;
      left: 50%;
      width: 2px;
      height: 50%;
      background: transparent;
      transform-origin: top center;
    }

    .knob-indicator::after {
      content: '';
      position: absolute;
      top: 4px;
      left: -1px;
      width: 2px;
      height: 12px;
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

    .knob-container:hover .knob-value {
      opacity: 1;
    }

    /* Keyboard */
    .piano-container {
      perspective: 600px;
    }

    .key {
      transition: background-color 0.05s, transform 0.05s;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
    }

    .white-key {
      background: linear-gradient(to bottom, #f0f0f0, #e0e0e0);
      height: 160px;
      z-index: 1;
      border: 1px solid #000;
      box-shadow: inset 0 -5px 10px rgba(0,0,0,0.1);
    }

    .white-key.active {
      transform: translateY(2px) rotateX(-2deg);
      background: #ccc;
    }

    .black-key {
      background: #111;
      height: 100px;
      z-index: 2;
      width: 60%;
      position: absolute;
      left: 70%;
      border: 1px solid #000;
      box-shadow: 2px 2px 5px rgba(0,0,0,0.5);
      border-bottom-left-radius: 2px;
      border-bottom-right-radius: 2px;
    }

    .black-key.active {
      background: #333;
      transform: translateY(2px) rotateX(-2deg);
    }

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

    .mpc-pad:active,
    .mpc-pad.active {
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

    .pad-btn:hover {
      color: #fff;
      border-color: #666;
    }

    .pad-btn.loop-active {
      color: var(--accent-orange);
      border-color: var(--accent-orange);
    }

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
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.8);
      z-index: 100;
      display: flex;
      justify-content: center;
      align-items: center;
      backdrop-filter: blur(5px);
    }

    .modal-content {
      background: #1a1a1d;
      border: 1px solid #444;
      border-radius: 8px;
      width: 90%;
      max-width: 800px;
      padding: 20px;
      box-shadow: 0 0 30px rgba(0,0,0,0.8);
      display: flex;
      flex-direction: column;
      gap: 15px;
    }

    .waveform-wrapper {
      position: relative;
      height: 150px;
      background: #000;
      border: 1px solid #333;
      border-radius: 4px;
      cursor: crosshair;
    }

    #waveform-canvas {
      width: 100%;
      height: 100%;
      display: block;
    }

    /* Markers */
    .marker {
      position: absolute;
      top: 0;
      bottom: 0;
      width: 2px;
      cursor: ew-resize;
      z-index: 10;
    }

    .marker-handle {
      position: absolute;
      top: 0;
      width: 0;
      height: 0;
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      cursor: ew-resize;
    }

    .marker-start {
      background: #0f0;
      left: 0;
    }

    .marker-start .marker-handle {
      border-top: 8px solid #0f0;
      left: -5px;
    }

    .marker-end {
      background: #f00;
      left: 100%;
    }

    .marker-end .marker-handle {
      border-top: 8px solid #f00;
      left: -5px;
    }

    .region-dim {
      position: absolute;
      top: 0;
      bottom: 0;
      background: rgba(0,0,0,0.6);
      pointer-events: none;
    }

    /* Screen/Header */
    .info-screen {
      background: #111;
      border: 1px solid #333;
      box-shadow: inset 0 0 10px rgba(0,0,0,0.8);
      font-family: 'Share Tech Mono', monospace;
    }

    .led-indicator {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: #333;
      transition: background-color 0.1s;
    }

    .led-indicator.on {
      background-color: var(--accent-orange);
      box-shadow: 0 0 8px var(--accent-orange);
    }

    /* Tabs */
    .nav-tab {
      color: #666;
      border-bottom: 2px solid transparent;
      cursor: pointer;
      transition: all 0.2s;
    }

    .nav-tab.active {
      color: var(--accent-orange);
      border-bottom: 2px solid var(--accent-orange);
    }

    .drag-over {
      border: 2px dashed var(--accent-orange) !important;
      background: #222 !important;
    }

    .hidden {
      display: none !important;
    }

    #overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(15,15,16,0.95);
      z-index: 50;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .sample-list-item {
      font-family: 'Share Tech Mono', monospace;
      font-size: 0.75rem;
      transition: background 0.1s;
    }

    .sample-list-item:hover {
      background-color: #333;
    }
  </style>
</head>

<body class="text-white h-screen flex flex-col">
  <!-- Initialization Overlay -->
  <div id="overlay">
    <h1 class="text-3xl font-bold mb-4 tracking-widest text-gray-200">
      K-SAMPLER <span class="text-orange-500">PRO</span>
    </h1>
    <p class="text-gray-400 mb-8 font-mono text-sm">Powered by Tone.js</p>
    <button
      id="start-btn"
      class="px-8 py-3 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded shadow-[0_0_15px_rgba(255,153,0,0.3)] transition border border-orange-400"
    >
      INITIALIZE SYSTEM
    </button>
    <p
      id="loading-text"
      class="mt-4 text-xs text-gray-500 font-mono hidden"
    >
      Loading Core Library...
    </p>
  </div>

  <!-- Sample Editor Modal -->
  <div id="editor-modal" class="modal-overlay hidden">
    <div class="modal-content">
      <div class="flex justify-between items-center border-b border-[#333] pb-2">
        <h2 class="text-lg font-bold font-mono text-gray-200">
          SAMPLE EDITOR: <span id="editor-title" class="text-orange-500">PAD 1</span>
        </h2>
        <button onclick="closeEditor()" class="text-gray-400 hover:text-white font-bold text-xl">&times;</button>
      </div>

      <div class="waveform-wrapper" id="waveform-container">
        <canvas id="waveform-canvas"></canvas>
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
          <button
            onclick="previewPadSample()"
            class="px-4 py-2 bg-[#333] hover:bg-[#444] rounded text-white flex items-center gap-2"
          >
            <span>▶</span> PREVIEW
          </button>
          <button
            onclick="closeEditor()"
            class="px-4 py-2 bg-orange-700 hover:bg-orange-600 rounded text-white font-bold"
          >
            DONE
          </button>
        </div>
      </div>

      <p class="text-[10px] text-gray-600 font-mono">
        DRAG MARKERS TO SET PLAYBACK REGION. CHANGES ARE AUTO-SAVED.
      </p>
    </div>
  </div>

  <!-- Main Interface -->
  <div class="flex-1 flex flex-col max-w-6xl mx-auto w-full p-2 lg:p-6 gap-4 h-full">
    <!-- Header -->
    <header class="bg-[#222] border border-[#333] p-4 rounded-t-lg flex justify-between items-center shadow-lg shrink-0">
      <div class="flex items-center gap-4">
        <div class="w-12 h-12 bg-orange-600 rounded flex items-center justify-center font-bold text-2xl shadow-inner">
          K
        </div>
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
        <div
          class="knob-wrapper"
          data-param="master"
          data-min="-60"
          data-max="6"
          data-value="-6"
          data-suffix="dB"
          data-label="MASTER"
        ></div>
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
          <div
            class="knob-wrapper"
            data-param="attack"
            data-min="0"
            data-max="2"
            data-value="0.05"
            data-suffix="s"
            data-label="ATTACK"
          ></div>
          <div
            class="knob-wrapper"
            data-param="decay"
            data-min="0"
            data-max="2"
            data-value="0.3"
            data-suffix="s"
            data-label="DECAY"
          ></div>
          <div
            class="knob-wrapper"
            data-param="sustain"
            data-min="0"
            data-max="1"
            data-value="0.8"
            data-suffix=""
            data-label="SUSTAIN"
          ></div>
          <div
            class="knob-wrapper"
            data-param="release"
            data-min="0"
            data-max="5"
            data-value="1.5"
            data-suffix="s"
            data-label="RELEASE"
          ></div>
        </div>
      </div>

      <!-- Filter -->
      <div class="bg-[#1e1e20] border border-[#333] rounded p-3 lg:p-4 flex flex-col gap-2 shadow-xl min-w-[150px]">
        <div class="border-b border-[#333] pb-2 mb-2 flex justify-between">
          <span class="text-xs font-bold text-gray-400">FILTER (GLOBAL)</span>
        </div>
        <div class="flex gap-2 lg:gap-4 justify-center">
          <div
            class="knob-wrapper"
            data-param="cutoff"
            data-min="20"
            data-max="20000"
            data-value="20000"
            data-suffix="Hz"
            data-label="CUTOFF"
            data-log="true"
          ></div>
          <div
            class="knob-wrapper"
            data-param="resonance"
            data-min="0"
            data-max="20"
            data-value="1"
            data-suffix=""
            data-label="RESO"
          ></div>
        </div>
      </div>

      <!-- FX -->
      <div class="bg-[#1e1e20] border border-[#333] rounded p-3 lg:p-4 flex flex-col gap-2 shadow-xl min-w-[220px]">
        <div class="border-b border-[#333] pb-2 mb-2 flex justify-between">
          <span class="text-xs font-bold text-gray-400">FX CHAIN</span>
        </div>
        <div class="flex gap-2 lg:gap-4 justify-center">
          <div
            class="knob-wrapper"
            data-param="delayTime"
            data-min="0"
            data-max="1"
            data-value="0.25"
            data-suffix="s"
            data-label="TIME"
          ></div>
          <div
            class="knob-wrapper"
            data-param="delayMix"
            data-min="0"
            data-max="1"
            data-value="0.1"
            data-suffix=""
            data-label="DLY"
          ></div>
          <div
            class="knob-wrapper"
            data-param="reverbMix"
            data-min="0"
            data-max="1"
            data-value="0.3"
            data-suffix=""
            data-label="RVB"
          ></div>
        </div>
      </div>
    </div>

    <!-- Navigation Tabs -->
    <div class="flex gap-6 px-4 border-b border-[#333]">
      <button
        class="nav-tab active font-mono text-sm py-2"
        onclick="switchTab('keys', this)"
      >
        PIANO KEYS
      </button>
      <button
        class="nav-tab font-mono text-sm py-2"
        onclick="switchTab('mpc', this)"
      >
        MPC PADS
      </button>
    </div>

    <!-- Tab Content Area -->
    <div class="flex-1 relative overflow-hidden bg-[#0a0a0a] rounded-lg border border-[#333] shadow-2xl">
      <!-- VIEW: PIANO -->
      <div
        id="view-keys"
        class="absolute inset-0 flex flex-col justify-end pb-0 transition-opacity duration-300"
      >
        <div class="h-48 piano-container w-full border-t-4 border-orange-600">
          <div
            id="keyboard"
            class="flex relative h-full justify-center bg-[#0a0a0a]"
          ></div>
        </div>
      </div>

      <!-- VIEW: MPC -->
      <div
        id="view-mpc"
        class="absolute inset-0 flex opacity-0 pointer-events-none transition-opacity duration-300 bg-[#151515]"
      >
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

  <input type="file" id="file-input" accept="audio/*" class="hidden" />

  <script>
    // --- Global State ---
    let toneStarted = false;
    let activeTab = 'keys';

    let pianoSampler = null;
    let drumPlayers = null;
    let filter = null;
    let delay = null;
    let reverb = null;
    let limiter = null;
    let analyser = null;

    const params = {
      attack: 0.05,
      decay: 0.3,
      sustain: 0.8,
      release: 1.5,
      cutoff: 20000,
      resonance: 1,
      delayTime: 0.25,
      delayMix: 0.1,
      reverbMix: 0.3,
      master: -6
    };

    const padCount = 16;
    const padSettings = Array.from({ length: padCount }, () => ({
      isLoop: false,
      pitch: 0,
      rate: 1,
      startTime: 0,
      endTime: null
    }));

    let selectedPadIndex = null;
    let currentEditPadIndex = null;
    let isDraggingMarker = null;

    // --- Knob Class ---
    class Knob {
      constructor(element, options = {}) {
        this.element = element;
        this.param = element.dataset.param || null;
        this.min = parseFloat(element.dataset.min ?? options.min ?? 0);
        this.max = parseFloat(element.dataset.max ?? options.max ?? 1);
        this.value = parseFloat(element.dataset.value ?? options.value ?? 0);
        this.suffix = element.dataset.suffix || options.suffix || '';
        this.label = element.dataset.label || options.label || 'PARAM';
        this.isLog = (element.dataset.log === 'true') || options.isLog || false;
        this.isMini = options.isMini || false;
        this.onChange = options.onChange || null;
        this.render();
        this.addListeners();
      }

      render() {
        const classes = ['knob-wrapper'];
        if (this.isMini) classes.push('mini-knob');
        this.element.className = classes.join(' ');
        this.element.innerHTML = `
          <div class="knob-value">${this.formatValue(this.value)}${this.suffix}</div>
          <div class="knob-container">
            <div class="knob-circle" style="transform: rotate(${this.valToDeg()}deg)">
              <div class="knob-indicator"></div>
            </div>
            <div class="knob-label">${this.label}</div>
          </div>
        `;
      }

      formatValue(val) {
        if (isNaN(val)) return '0';
        const abs = Math.abs(val);
        if (abs < 10) return val.toFixed(this.isMini ? 1 : 2);
        return Math.round(val);
      }

      valToDeg() {
        let pct;
        if (this.isLog) {
          const minLog = Math.log(this.min);
          const maxLog = Math.log(this.max);
          const valueLog = Math.log(this.value);
          pct = (valueLog - minLog) / (maxLog - minLog);
        } else {
          pct = (this.value - this.min) / (this.max - this.min);
        }
        pct = Math.max(0, Math.min(1, pct));
        return (pct * 290) - 145;
      }

      updateValueFromDy(dy) {
        const sensitivity = 0.005;
        if (this.isLog) {
          const minLog = Math.log(this.min);
          const maxLog = Math.log(this.max);
          const valueLog = Math.log(this.value);
          let currentPct = (valueLog - minLog) / (maxLog - minLog);
          let newPct = currentPct + (dy * sensitivity);
          newPct = Math.max(0, Math.min(1, newPct));
          this.value = Math.exp(minLog + newPct * (maxLog - minLog));
        } else {
          const range = this.max - this.min;
          this.value += (dy * range * sensitivity);
          this.value = Math.max(this.min, Math.min(this.max, this.value));
        }
        this.updateVisuals();
        if (this.param && Object.prototype.hasOwnProperty.call(params, this.param)) {
          params[this.param] = this.value;
          updateParams();
        }
        if (typeof this.onChange === 'function') {
          this.onChange(this.value);
        }
      }

      updateVisuals() {
        const circle = this.element.querySelector('.knob-circle');
        const valDisplay = this.element.querySelector('.knob-value');
        if (circle) {
          circle.style.transform = `rotate(${this.valToDeg()}deg)`;
        }
        if (valDisplay) {
          valDisplay.textContent = `${this.formatValue(this.value)}${this.suffix}`;
        }
      }

      addListeners() {
        const container = this.element.querySelector('.knob-container');
        if (!container) return;

        const startDrag = (startEvent) => {
          startEvent.stopPropagation();
          const startY = (startEvent.touches ? startEvent.touches[0].clientY : startEvent.clientY);
          const onMove = (moveEvent) => {
            moveEvent.preventDefault();
            const currentY = (moveEvent.touches ? moveEvent.touches[0].clientY : moveEvent.clientY);
            const dy = startY - currentY;
            this.updateValueFromDy(dy);
          };
          const endDrag = () => {
            window.removeEventListener('mousemove', onMove);
            window.removeEventListener('mouseup', endDrag);
            window.removeEventListener('touchmove', onMove);
            window.removeEventListener('touchend', endDrag);
          };
          window.addEventListener('mousemove', onMove);
          window.addEventListener('mouseup', endDrag);
          window.addEventListener('touchmove', onMove, { passive: false });
          window.addEventListener('touchend', endDrag);
        };

        container.addEventListener('mousedown', startDrag);
        container.addEventListener('touchstart', (e) => startDrag(e), { passive: false });
      }
    }

    // --- Audio Init ---
    async function initAudio() {
      const startBtn = document.getElementById('start-btn');
      const loadingText = document.getElementById('loading-text');
      if (startBtn) startBtn.classList.add('hidden');
      if (loadingText) {
        loadingText.classList.remove('hidden');
        loadingText.style.display = 'block';
      }

      await Tone.start();
      toneStarted = true;

      limiter = new Tone.Limiter(-1).toDestination();
      analyser = new Tone.Analyser('waveform', 256);
      limiter.connect(analyser);

      reverb = new Tone.Reverb({
        decay: 4,
        wet: params.reverbMix
      }).connect(limiter);
      await reverb.generate();

      delay = new Tone.FeedbackDelay({
        delayTime: params.delayTime,
        feedback: 0.4,
        wet: params.delayMix
      }).connect(reverb);

      filter = new Tone.Filter({
        type: 'lowpass',
        frequency: params.cutoff,
        Q: params.resonance
      }).connect(delay);

      pianoSampler = new Tone.Sampler({
        urls: {
          'C4': 'C4.mp3',
          'D#4': 'Ds4.mp3',
          'F#4': 'Fs4.mp3',
          'A4': 'A4.mp3'
        },
        release: 1,
        baseUrl: 'https://tonejs.github.io/audio/salamander/',
        onload: onAudioLoaded
      }).connect(filter);

      drumPlayers = new Tone.Players({}).connect(filter);
    }

    function onAudioLoaded() {
      const overlay = document.getElementById('overlay');
      const loadingText = document.getElementById('loading-text');
      if (loadingText) loadingText.textContent = 'Ready. Happy sampling!';
      if (overlay) {
        overlay.style.transition = 'opacity 0.5s';
        overlay.style.opacity = '0';
        setTimeout(() => overlay.remove(), 500);
      }
      updateParams();
      drawVisualizer();
      setupMIDI();
    }

    function updateParams() {
      if (!toneStarted) return;
      if (pianoSampler) {
        pianoSampler.attack = params.attack;
        pianoSampler.decay = params.decay;
        pianoSampler.sustain = params.sustain;
        pianoSampler.release = params.release;
      }
      if (filter) {
        filter.frequency.rampTo(params.cutoff, 0.1);
        filter.Q.value = params.resonance;
      }
      if (delay) {
        delay.delayTime.rampTo(params.delayTime, 0.1);
        delay.wet.rampTo(params.delayMix, 0.1);
      }
      if (reverb) {
        reverb.wet.rampTo(params.reverbMix, 0.1);
      }
      Tone.Destination.volume.rampTo(params.master, 0.1);
    }

    // --- Tabs ---
    function switchTab(tab, btn) {
      activeTab = tab;
      document.querySelectorAll('.nav-tab').forEach(el => el.classList.remove('active'));
      if (btn) btn.classList.add('active');

      const keysView = document.getElementById('view-keys');
      const mpcView = document.getElementById('view-mpc');

      if (tab === 'keys') {
        if (keysView) {
          keysView.style.opacity = '1';
          keysView.style.pointerEvents = 'all';
        }
        if (mpcView) {
          mpcView.style.opacity = '0';
          mpcView.style.pointerEvents = 'none';
        }
      } else {
        if (keysView) {
          keysView.style.opacity = '0';
          keysView.style.pointerEvents = 'none';
        }
        if (mpcView) {
          mpcView.style.opacity = '1';
          mpcView.style.pointerEvents = 'all';
        }
      }
    }
    window.switchTab = switchTab;

    // --- Keyboard ---
    const keyboardEl = document.getElementById('keyboard');

    function buildKeyboard() {
      if (!keyboardEl) return;
      const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

      for (let oct = 2; oct <= 5; oct++) {
        notes.forEach(note => {
          const noteName = `${note}${oct}`;
          const isBlack = note.includes('#');
          const key = document.createElement('div');
          key.className = `key ${isBlack ? 'black-key' : 'white-key'}`;
          key.dataset.note = noteName;

          if (isBlack) {
            key.style.marginLeft = '-1.5rem';
            key.style.marginRight = '-1.5rem';
          }

          const play = () => {
            if (activeTab === 'keys') triggerAttack(noteName);
          };
          const stop = () => {
            if (activeTab === 'keys') triggerRelease(noteName);
          };

          key.addEventListener('mousedown', play);
          key.addEventListener('mouseup', stop);
          key.addEventListener('mouseleave', stop);
          key.addEventListener('touchstart', (e) => {
            e.preventDefault();
            play();
          }, { passive: false });
          key.addEventListener('touchend', stop);

          keyboardEl.appendChild(key);
        });
      }
    }

    function triggerAttack(note) {
      if (!toneStarted || !pianoSampler) return;
      pianoSampler.triggerAttack(note);
      const key = document.querySelector(`.key[data-note="${note}"]`);
      if (key) key.classList.add('active');
      blinkMidiLed();
    }

    function triggerRelease(note) {
      if (!toneStarted || !pianoSampler) return;
      pianoSampler.triggerRelease(note);
      const key = document.querySelector(`.key[data-note="${note}"]`);
      if (key) key.classList.remove('active');
    }

    // --- Pads ---
    const padGrid = document.getElementById('pad-grid');
    const sampleList = document.getElementById('sample-list');

    function isControlElement(target) {
      return (
        target.tagName === 'BUTTON' ||
        target.tagName === 'INPUT' ||
        target.closest('.knob-wrapper') ||
        target.closest('.mini-knob')
      );
    }

    function buildPads() {
      if (!padGrid || !sampleList) return;

      for (let i = 0; i < padCount; i++) {
        const pad = document.createElement('div');
        pad.className = 'mpc-pad';
        pad.id = `pad-${i}`;
        pad.dataset.index = i.toString();
        pad.innerHTML = `
          <div class="pad-top-row">
            <span class="pad-label">PAD ${i + 1}</span>
            <div class="flex gap-1">
              <button class="pad-btn" data-role="edit" title="Edit Sample">✎</button>
              <button class="pad-btn" data-role="mode" title="Toggle One-Shot / Loop">➝</button>
            </div>
          </div>
          <span class="pad-filename" id="pad-name-${i}">Empty</span>
          <div class="pad-controls" id="controls-${i}">
            <div
              class="mini-knob-wrapper"
              data-index="${i}"
              data-param="tune"
              data-min="-12"
              data-max="12"
              data-value="0"
              data-label="TUNE"
            ></div>
            <div class="flex-1 ml-2 flex flex-col justify-end pb-1">
              <div class="flex justify-between w-full">
                <span class="tiny-label">RATE</span>
                <span class="tiny-label text-blue-400" id="rate-val-${i}">1.0x</span>
              </div>
              <input
                type="range"
                class="pad-slider"
                min="0.5"
                max="2.0"
                step="0.1"
                value="1.0"
                id="rate-${i}"
              />
            </div>
          </div>
        `;

        const editBtn = pad.querySelector('button[data-role="edit"]');
        const modeBtn = pad.querySelector('button[data-role="mode"]');

        if (editBtn) {
          editBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            openEditor(i);
          });
        }

        if (modeBtn) {
          modeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            togglePadMode(i);
          });
        }

        // Pad play interaction
        pad.addEventListener('mousedown', (e) => {
          if (isControlElement(e.target)) return;
          triggerPad(i);
        });

        pad.addEventListener('touchstart', (e) => {
          e.preventDefault();
          if (isControlElement(e.target)) return;
          triggerPad(i);
        }, { passive: false });

        // Drag / Drop
        pad.addEventListener('dragover', (e) => {
          e.preventDefault();
          pad.classList.add('drag-over');
        });

        pad.addEventListener('dragleave', () => pad.classList.remove('drag-over'));

        pad.addEventListener('drop', (e) => {
          e.preventDefault();
          pad.classList.remove('drag-over');
          const file = e.dataTransfer.files[0];
          if (file && file.type.startsWith('audio')) {
            loadSampleToPad(i, file);
          }
        });

        padGrid.appendChild(pad);

        // Mini knob for pitch
        const miniKnobEl = pad.querySelector('.mini-knob-wrapper');
        if (miniKnobEl) {
          new Knob(miniKnobEl, {
            isMini: true,
            onChange: (val) => {
              padSettings[i].pitch = val;
              if (drumPlayers && drumPlayers.has(i.toString())) {
                drumPlayers.player(i.toString()).detune = val * 100;
              }
            }
          });
        }

        // Rate slider
        const rateSlider = pad.querySelector(`#rate-${i}`);
        const rateLabel = pad.querySelector(`#rate-val-${i}`);
        if (rateSlider && rateLabel) {
          rateSlider.addEventListener('input', (e) => {
            const val = parseFloat(e.target.value);
            rateLabel.textContent = `${val.toFixed(1)}x`;
            padSettings[i].rate = val;
            if (drumPlayers && drumPlayers.has(i.toString())) {
              drumPlayers.player(i.toString()).playbackRate = val;
            }
          });
          rateSlider.addEventListener('mousedown', (e) => e.stopPropagation());
          rateSlider.addEventListener('touchstart', (e) => e.stopPropagation(), { passive: true });
        }

        // Browser list entry
        const li = document.createElement('div');
        li.className = 'sample-list-item flex justify-between items-center p-2 rounded border border-transparent hover:border-[#333] mb-1';
        li.innerHTML = `
          <span class="text-gray-400">PAD ${i + 1}</span>
          <div class="flex items-center gap-2">
            <span class="text-[10px] text-gray-500 w-20 truncate text-right" id="list-name-${i}">-</span>
            <button class="text-orange-500 hover:text-white" data-index="${i}">📂</button>
          </div>
        `;
        const browseBtn = li.querySelector('button');
        if (browseBtn) {
          browseBtn.addEventListener('click', () => openFileBrowser(i));
        }
        sampleList.appendChild(li);
      }
    }

    function togglePadMode(index) {
      const settings = padSettings[index];
      settings.isLoop = !settings.isLoop;

      const pad = document.getElementById(`pad-${index}`);
      const btn = pad ? pad.querySelector('button[data-role="mode"]') : null;

      if (settings.isLoop) {
        if (btn) {
          btn.textContent = '⟳';
          btn.classList.add('loop-active');
        }
      } else {
        if (btn) {
          btn.textContent = '➝';
          btn.classList.remove('loop-active');
        }
        if (drumPlayers && drumPlayers.has(index.toString())) {
          const player = drumPlayers.player(index.toString());
          if (player.state === 'started') player.stop();
        }
        if (pad) pad.classList.remove('looping');
      }
    }

    function triggerPad(index) {
      if (!toneStarted || !drumPlayers) return;
      const padEl = document.getElementById(`pad-${index}`);
      const name = index.toString();

      if (!drumPlayers.has(name)) {
        if (padEl) {
          padEl.classList.add('active');
          setTimeout(() => padEl.classList.remove('active'), 120);
        }
        return;
      }

      const player = drumPlayers.player(name);
      const settings = padSettings[index];
      const totalDur = player.buffer && player.buffer.duration ? player.buffer.duration : 0;
      if (!totalDur) return;

      const start = Math.max(0, Math.min(settings.startTime, totalDur));
      const end = settings.endTime != null ? Math.min(settings.endTime, totalDur) : totalDur;
      const duration = Math.max(0.01, end - start);

      player.detune = settings.pitch * 100;
      player.playbackRate = settings.rate || 1;
      player.fadeOut = 0.01;

      if (settings.isLoop) {
        player.loop = true;
        player.loopStart = start;
        player.loopEnd = end;
        if (player.state === 'started') {
          player.stop();
          if (padEl) {
            padEl.classList.remove('looping');
            padEl.classList.remove('active');
          }
        } else {
          player.start('+0', start);
          if (padEl) {
            padEl.classList.add('looping');
            padEl.classList.add('active');
          }
        }
      } else {
        player.loop = false;
        player.stop();
        player.start('+0', start, duration);
        if (padEl) {
          padEl.classList.add('active');
          padEl.classList.remove('looping');
          setTimeout(() => padEl.classList.remove('active'), duration * 1000 + 100);
        }
      }

      blinkMidiLed();
    }

    // --- Sample Loading ---
    const fileInput = document.getElementById('file-input');

    function openFileBrowser(index) {
      selectedPadIndex = index;
      if (fileInput) fileInput.click();
    }
    window.openFileBrowser = openFileBrowser;

    if (fileInput) {
      fileInput.addEventListener('change', (e) => {
        const files = e.target.files;
        if (files && files.length > 0 && selectedPadIndex != null) {
          loadSampleToPad(selectedPadIndex, files[0]);
        }
        e.target.value = '';
      });
    }

    function loadSampleToPad(index, file) {
      if (!drumPlayers) return;
      const url = URL.createObjectURL(file);
      const name = index.toString();

      drumPlayers.add(name, url, () => {
        const player = drumPlayers.player(name);
        const duration = player.buffer.duration || 0;
        padSettings[index].startTime = 0;
        padSettings[index].endTime = duration;
      });

      const padNameEl = document.getElementById(`pad-name-${index}`);
      const listNameEl = document.getElementById(`list-name-${index}`);
      if (padNameEl) padNameEl.textContent = file.name;
      if (listNameEl) listNameEl.textContent = file.name;
      const padEl = document.getElementById(`pad-${index}`);
      if (padEl) padEl.classList.add('has-sample');
    }

    // --- Editor Logic ---
    const editorModal = document.getElementById('editor-modal');
    const waveformCanvas = document.getElementById('waveform-canvas');
    const waveformCtx = waveformCanvas ? waveformCanvas.getContext('2d') : null;
    const markerStartEl = document.getElementById('marker-start');
    const markerEndEl = document.getElementById('marker-end');
    const dimStartEl = document.getElementById('dim-start');
    const dimEndEl = document.getElementById('dim-end');

    function openEditor(index) {
      if (!drumPlayers || !drumPlayers.has(index.toString())) return;
      currentEditPadIndex = index;
      const player = drumPlayers.player(index.toString());
      if (!player.buffer) return;

      const titleEl = document.getElementById('editor-title');
      if (titleEl) titleEl.textContent = `PAD ${index + 1}`;

      if (editorModal) editorModal.classList.remove('hidden');

      const settings = padSettings[index];
      const duration = player.buffer.duration || 0;
      if (!duration) return;

      if (settings.endTime == null || settings.endTime <= settings.startTime) {
        settings.startTime = 0;
        settings.endTime = duration;
      }

      drawWaveform(player.buffer);
      updateMarkerPositions();
    }
    window.openEditor = openEditor;

    function closeEditor() {
      if (editorModal) editorModal.classList.add('hidden');
      currentEditPadIndex = null;
      isDraggingMarker = null;
    }
    window.closeEditor = closeEditor;

    function drawWaveform(buffer) {
      if (!waveformCanvas || !waveformCtx) return;
      const container = document.getElementById('waveform-container');
      if (!container) return;

      const width = container.clientWidth || 600;
      const height = container.clientHeight || 150;
      waveformCanvas.width = width;
      waveformCanvas.height = height;

      waveformCtx.fillStyle = '#000';
      waveformCtx.fillRect(0, 0, width, height);

      const data = buffer.getChannelData(0);
      const step = Math.ceil(data.length / width) || 1;
      const amp = height / 2;

      waveformCtx.beginPath();
      waveformCtx.strokeStyle = '#00d2ff';
      waveformCtx.lineWidth = 1;

      for (let i = 0; i < width; i++) {
        let min = 1.0;
        let max = -1.0;
        for (let j = 0; j < step; j++) {
          const datum = data[(i * step) + j];
          if (datum < min) min = datum;
          if (datum > max) max = datum;
        }
        waveformCtx.moveTo(i, (1 + min) * amp);
        waveformCtx.lineTo(i, (1 + max) * amp);
      }
      waveformCtx.stroke();
    }

    function updateMarkerPositions() {
      if (currentEditPadIndex == null || !drumPlayers) return;
      const name = currentEditPadIndex.toString();
      if (!drumPlayers.has(name)) return;
      const player = drumPlayers.player(name);
      if (!player.buffer) return;

      const duration = player.buffer.duration || 0;
      if (!duration) return;

      const settings = padSettings[currentEditPadIndex];
      const startPct = (settings.startTime / duration) * 100;
      const endPct = (settings.endTime / duration) * 100;

      if (markerStartEl) markerStartEl.style.left = `${startPct}%`;
      if (markerEndEl) markerEndEl.style.left = `${endPct}%`;
      if (dimStartEl) dimStartEl.style.width = `${startPct}%`;
      if (dimEndEl) dimEndEl.style.left = `${endPct}%`;

      const lblStart = document.getElementById('lbl-start');
      const lblEnd = document.getElementById('lbl-end');
      const lblDur = document.getElementById('lbl-dur');

      if (lblStart) lblStart.textContent = `${settings.startTime.toFixed(3)}s`;
      if (lblEnd) lblEnd.textContent = `${settings.endTime.toFixed(3)}s`;
      if (lblDur) lblDur.textContent = `${(settings.endTime - settings.startTime).toFixed(3)}s`;
    }

    function moveMarker(clientX) {
      if (currentEditPadIndex == null || !isDraggingMarker || !drumPlayers) return;
      const container = document.getElementById('waveform-container');
      if (!container) return;

      const rect = container.getBoundingClientRect();
      let x = clientX - rect.left;
      x = Math.max(0, Math.min(rect.width, x));

      const name = currentEditPadIndex.toString();
      const player = drumPlayers.player(name);
      if (!player.buffer) return;

      const duration = player.buffer.duration || 0;
      if (!duration) return;

      const pct = x / rect.width;
      const newTime = pct * duration;
      const settings = padSettings[currentEditPadIndex];

      if (isDraggingMarker === 'start') {
        settings.startTime = Math.min(newTime, settings.endTime - 0.01);
      } else if (isDraggingMarker === 'end') {
        settings.endTime = Math.max(newTime, settings.startTime + 0.01);
      }

      updateMarkerPositions();
    }

    function previewPadSample() {
      if (currentEditPadIndex != null) triggerPad(currentEditPadIndex);
    }
    window.previewPadSample = previewPadSample;

    function setupEditorEvents() {
      if (markerStartEl) {
        markerStartEl.addEventListener('mousedown', (e) => {
          isDraggingMarker = 'start';
          e.preventDefault();
        });
        markerStartEl.addEventListener('touchstart', (e) => {
          isDraggingMarker = 'start';
          e.preventDefault();
        }, { passive: false });
      }

      if (markerEndEl) {
        markerEndEl.addEventListener('mousedown', (e) => {
          isDraggingMarker = 'end';
          e.preventDefault();
        });
        markerEndEl.addEventListener('touchstart', (e) => {
          isDraggingMarker = 'end';
          e.preventDefault();
        }, { passive: false });
      }

      window.addEventListener('mouseup', () => {
        isDraggingMarker = null;
      });
      window.addEventListener('touchend', () => {
        isDraggingMarker = null;
      });

      window.addEventListener('mousemove', (e) => {
        if (isDraggingMarker) moveMarker(e.clientX);
      });

      window.addEventListener('touchmove', (e) => {
        if (isDraggingMarker && e.touches && e.touches.length) {
          moveMarker(e.touches[0].clientX);
        }
      }, { passive: false });
    }

    // --- MIDI, Keyboard Shortcuts, Visualizer ---
    function blinkMidiLed() {
      const led = document.getElementById('midi-led');
      if (!led) return;
      led.classList.add('on');
      setTimeout(() => led.classList.remove('on'), 100);
    }

    const pianoKeysMap = {
      'a': 'C3',
      'w': 'C#3',
      's': 'D3',
      'e': 'D#3',
      'd': 'E3',
      'f': 'F3',
      't': 'F#3',
      'g': 'G3',
      'y': 'G#3',
      'h': 'A3',
      'u': 'A#3',
      'j': 'B3',
      'k': 'C4'
    };

    const mpcKeysMap = {
      '1': 0, '2': 1, '3': 2, '4': 3,
      'q': 4, 'w': 5, 'e': 6, 'r': 7,
      'a': 8, 's': 9, 'd': 10, 'f': 11,
      'z': 12, 'x': 13, 'c': 14, 'v': 15
    };

    window.addEventListener('keydown', (e) => {
      if (e.repeat) return;
      const key = e.key.toLowerCase();
      if (activeTab === 'keys' && pianoKeysMap[key]) {
        triggerAttack(pianoKeysMap[key]);
      } else if (activeTab === 'mpc' && Object.prototype.hasOwnProperty.call(mpcKeysMap, key)) {
        triggerPad(mpcKeysMap[key]);
      }
    });

    window.addEventListener('keyup', (e) => {
      if (activeTab !== 'keys') return;
      const note = pianoKeysMap[e.key.toLowerCase()];
      if (note) triggerRelease(note);
    });

    function setupMIDI() {
      if (!navigator.requestMIDIAccess) return;
      navigator.requestMIDIAccess().then(access => {
        const onMessage = (msg) => {
          const [cmd, note, vel] = msg.data;
          const isNoteOn = ((cmd & 0xf0) === 0x90) && vel > 0;
          const isNoteOff = ((cmd & 0xf0) === 0x80) || (((cmd & 0xf0) === 0x90) && vel === 0);

          if (activeTab === 'keys') {
            const noteName = Tone.Frequency(note, 'midi').toNote();
            if (isNoteOn) triggerAttack(noteName);
            if (isNoteOff) triggerRelease(noteName);
          } else if (activeTab === 'mpc') {
            if (isNoteOn && note >= 36 && note < 36 + padCount) {
              triggerPad(note - 36);
            }
          }
        };

        for (const input of access.inputs.values()) {
          input.onmidimessage = onMessage;
        }
        access.onstatechange = (e) => {
          if (e.port.type === 'input' && e.port.state === 'connected') {
            e.port.onmidimessage = onMessage;
          }
        };
      }).catch(err => console.warn('MIDI access failed', err));
    }

    function drawVisualizer() {
      const canvas = document.getElementById('visualizer');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');

      function loop() {
        requestAnimationFrame(loop);
        if (!toneStarted || !analyser) return;

        const values = analyser.getValue();
        if (!values || !values.length) return;

        const width = canvas.width;
        const height = canvas.height;

        ctx.fillStyle = '#111';
        ctx.fillRect(0, 0, width, height);

        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#00d2ff';

        const sliceWidth = width / values.length;
        let x = 0;

        for (let i = 0; i < values.length; i++) {
          const v = (values[i] + 1) / 2;
          const y = v * height;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
          x += sliceWidth;
        }
        ctx.stroke();
      }
      loop();
    }

    // --- Boot ---
    buildKeyboard();
    buildPads();
    setupEditorEvents();
    switchTab('keys');

    // Global (non-mini) knobs
    document.querySelectorAll('.knob-wrapper').forEach(el => {
      if (!el.closest('.pad-controls')) new Knob(el);
    });

    const startBtn = document.getElementById('start-btn');
    if (startBtn) {
      startBtn.addEventListener('click', () => {
        if (!toneStarted) initAudio();
      });
    }
  </script>
</body>
</html>
```

If something still doesn’t fire (e.g., audio blocked), make sure:

- You load it via `file:///` or a simple local server (Chrome might block some MIDI in iframes).
- You click **INITIALIZE SYSTEM** before touching keys/pads (browser audio policy).

If you want, next step we can add:  
- pad preset loader,  
- a basic pattern/step sequencer, or  
- sample save/export flow.

**Mike:** give me a downloadable HTML file

**GPT:** Done — I’ve put your sampler code into an HTML file called **`websampler-pro.html`** on the canvas.

You can now:

1. Click into the file in the right-hand pane.
2. Use the download option there to save it as an `.html` file.
3. Open it in your browser (double-click or drag into Chrome) to run K-Sampler Pro.

**Mike:** when I click on "initialize system" nothing happens.  check the code for errors.

**GPT:** Short version: the **button is fine** — the problem is that your JavaScript never even loads because of a bunch of **syntax errors** (mostly missing backticks / quotes around template literals). Since the script fails to parse, the line

```js
document.getElementById('start-btn').addEventListener('click', initAudio);
```

never runs, so clicking **“INITIALIZE SYSTEM”** does nothing.

Below I’ll show you **exactly what’s wrong** and give fixed snippets you can paste in.

---

## 1. First fatal error: `Knob` class (missing backticks)

Your current `render()` method looks like this (I’m copying from your code):

```js
render() {
    const miniClass = this.isMini ? 'mini-knob' : '';
    this.element.className = knob-wrapper ${miniClass};
    this.element.innerHTML = <div class="knob-value">${this.formatValue(this.value)}${this.suffix}</div><div class="knob-container"><div class="knob-circle" style="transform: rotate(${this.valToDeg()}deg)"><div class="knob-indicator"></div></div><div class="knob-label">${this.label}</div></div>;
}
```

This is invalid JS because:

- `knob-wrapper ${miniClass}` is not in quotes or backticks.
- The big `innerHTML = <div ...>` is also not inside quotes/backticks.

### ✅ Fixed `render()` method

Replace your `render()` with this:

```js
render() {
    const miniClass = this.isMini ? 'mini-knob' : '';
    this.element.className = `knob-wrapper ${miniClass}`.trim();
    this.element.innerHTML = `
        <div class="knob-value">${this.formatValue(this.value)}${this.suffix}</div>
        <div class="knob-container">
            <div class="knob-circle" style="transform: rotate(${this.valToDeg()}deg)">
                <div class="knob-indicator"></div>
            </div>
            <div class="knob-label">${this.label}</div>
        </div>
    `;
}
```

---

## 2. `updateVisuals()` also missing template-string quotes

You have:

```js
updateVisuals() {
    const circle = this.element.querySelector('.knob-circle');
    const valDisplay = this.element.querySelector('.knob-value');
    circle.style.transform = rotate(${this.valToDeg()}deg);
    valDisplay.textContent = ${this.formatValue(this.value)}${this.suffix};
}
```

Needs backticks:

```js
updateVisuals() {
    const circle = this.element.querySelector('.knob-circle');
    const valDisplay = this.element.querySelector('.knob-value');
    circle.style.transform = `rotate(${this.valToDeg()}deg)`;
    valDisplay.textContent = `${this.formatValue(this.value)}${this.suffix}`;
}
```

---

## 3. Keyboard creation: more missing backticks

You’ve got:

```js
const noteName = ${note}${oct};
...
key.className = key ${isBlack ? 'black-key' : 'white-key'};
```

These need to be template strings:

```js
const noteName = `${note}${oct}`;
const isBlack = note.includes('#');
const key = document.createElement('div');
key.className = `key ${isBlack ? 'black-key' : 'white-key'}`;
```

---

## 4. Pad grid: IDs / selectors need backticks & quotes

You have a bunch of places like:

```js
pad.id = pad-${i};

pad.innerHTML = <div class="pad-top-row"> ... id="rate-${i}"> ... </div>;

pad.querySelector(#edit-${i}).addEventListener(...);

const rateSlider = pad.querySelector(#rate-${i});
document.getElementById(rate-val-${i}).textContent = ...
...
document.getElementById(list-name-${i}).textContent = file.name;
document.getElementById(pad-${index}).classList.add('has-sample');
```

All of those need proper strings. Example fixes:

```js
pad.id = `pad-${i}`;

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
      <div class="flex justify-between w-full">
        <span class="tiny-label">RATE</span>
        <span class="tiny-label text-blue-400" id="rate-val-${i}">1.0x</span>
      </div>
      <input type="range" class="pad-slider" min="0.5" max="2.0" step="0.1" value="1.0" id="rate-${i}">
    </div>
  </div>
`;

pad.querySelector(`#edit-${i}`).addEventListener('click', ...);
pad.querySelector(`#toggle-${i}`).addEventListener('click', ...);

const rateSlider = pad.querySelector(`#rate-${i}`);
document.getElementById(`rate-val-${i}`).textContent = val.toFixed(1) + "x";

document.getElementById(`pad-name-${index}`).textContent = file.name;
document.getElementById(`list-name-${index}`).textContent = file.name;
document.getElementById(`pad-${index}`).classList.add('has-sample');
```

---

## 5. Sample editor: same template issue

For example:

```js
document.getElementById('editor-title').innerText = PAD ${index + 1};
...
markerStart.style.left = ${startPct}%;
document.getElementById('dim-start').style.width = ${startPct}%;
markerEnd.style.left = ${endPct}%;
document.getElementById('dim-end').style.left = ${endPct}%;
```

Need backticks:

```js
document.getElementById('editor-title').innerText = `PAD ${index + 1}`;

markerStart.style.left = `${startPct}%`;
document.getElementById('dim-start').style.width = `${startPct}%`;
markerEnd.style.left = `${endPct}%`;
document.getElementById('dim-end').style.left = `${endPct}%`;
```

The label updates are actually fine (you used `+ 's'` there).

---

## 6. `switchTab` uses `event` but never gets it

Right now:

```js
window.switchTab = (tab) => {
    activeTab = tab;
    document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
    event.target.classList.add('active');
    ...
};
```

Called from HTML like:

```html
<button class="nav-tab active ..." onclick="switchTab('keys')">
```

There’s no `event` parameter, so when you click you’ll get `ReferenceError: event is not defined`.

### ✅ Fix `switchTab` and HTML calls

Change the function to accept the clicked element:

```js
window.switchTab = (tab, el) => {
  activeTab = tab;
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
  if (el) el.classList.add('active');

  const keysView = document.getElementById('view-keys');
  const mpcView  = document.getElementById('view-mpc');

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
```

And update the buttons:

```html
<button class="nav-tab active font-mono text-sm py-2" onclick="switchTab('keys', this)">PIANO KEYS</button>
<button class="nav-tab font-mono text-sm py-2" onclick="switchTab('mpc', this)">MPC PADS</button>
```

---

## 7. Why the “Initialize system” button does nothing

Putting it all together:

- The **last line** of your script correctly wires the button:

  ```js
  document.getElementById('start-btn').addEventListener('click', initAudio);
  ```

- But the browser **never gets there**, because it hits a syntax error earlier (first one likely in the `Knob` class) and aborts parsing the entire `<script>` block.

Once you:

1. Wrap every `... ${something} ...` in **backticks** (`` ` ... ${} ... ` ``), and  
2. Fix `switchTab` to not rely on an undefined `event`,

the script will parse, the event listener will attach, and clicking **“INITIALIZE SYSTEM”** will actually call `initAudio()` and start Tone.js.

---

## What I’d do next (quick checklist)

1. Open DevTools (F12) → **Console** in your browser.
2. Reload the page and look at the **first** error line & file/line number.
3. Fix that error (it will be one of the patterns above).
4. Reload → repeat until no red errors are left.
5. Then click **“INITIALIZE SYSTEM”** again — it should now bring Tone online and remove the overlay.

If you’d like, I can take your script section and rewrite the whole `<script>…</script>` block into a single “known-good” version you can just paste in.
