---
title: "Ableton Move Emulator"
date: 2026-03-01
cluster: "Misc / Uncategorized"
messages: 47
source: chatgpt-export conversations.json (FULL transcript)
---

# Ableton Move Emulator

> 47 messages · 2026-03-01 · cluster: Misc / Uncategorized

**Semantic neighbors:** [[Refresh Miami]] · [[Larry recorded from Ray]] · [[Ableton Move Emulator markdown file]] · [[ZoomInfo Targeting Method]]

## Transcript

**Mike:** Render the following code of an Emulation of the ableton Move  //<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hardware Sequencer Emulator</title>
    <style>
        :root {
            --bg-color: #121212;
            --chassis-dark: #27282b;
            --chassis-light: #323337;
            --chassis-border: #1a1a1c;
            --pad-off: #e6edf2;
            --pad-glow-cyan: #4bf0ff;
            --pad-glow-blue: #4b8cff;
            --pad-glow-purple: #b44bff;
            --pad-glow-green: #4bff8c;
            --text-color: #7d8086;
            --screen-bg: #0a0a0c;
            --screen-text: #a87b51;
            --knob-base: #141517;
            --knob-top: #1f2023;
        }

        body {
            margin: 0;
            padding: 0;
            background-color: var(--bg-color);
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            overflow: hidden;
            user-select: none;
        }

        /* Responsive Scaling Wrapper */
        #scale-wrapper {
            transform-origin: center center;
            transition: transform 0.1s;
        }

        /* Main Hardware Chassis */
        .hardware-chassis {
            width: 1000px;
            height: 480px;
            background: linear-gradient(180deg, var(--chassis-light) 0%, var(--chassis-dark) 100%);
            border-radius: 12px;
            box-shadow: 
                0 30px 60px rgba(0,0,0,0.6),
                inset 0 2px 2px rgba(255,255,255,0.05),
                inset 0 -4px 10px rgba(0,0,0,0.4),
                0 0 0 2px var(--chassis-border);
            position: relative;
            padding: 24px;
            box-sizing: border-box;
            display: grid;
            grid-template-rows: 60px 1fr 50px;
            gap: 20px;
        }

        /* Top Row: Screen & Knobs */
        .top-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .screen {
            width: 80px;
            height: 45px;
            background: var(--screen-bg);
            border-radius: 4px;
            box-shadow: inset 0 2px 5px rgba(0,0,0,0.8);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: var(--screen-text);
            font-size: 10px;
            font-family: monospace;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            position: relative;
            overflow: hidden;
        }

        .screen::after {
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            background: linear-gradient(rgba(255,255,255,0.05) 50%, transparent 50%);
            background-size: 100% 4px;
            pointer-events: none;
        }

        .knob-group {
            display: flex;
            gap: 26px;
            margin-left: 30px;
        }

        .knob {
            width: 28px;
            height: 28px;
            border-radius: 50%;
            background: radial-gradient(circle at 30% 30%, var(--knob-top), var(--knob-base));
            box-shadow: 
                0 6px 8px rgba(0,0,0,0.4),
                inset 0 1px 1px rgba(255,255,255,0.1);
            position: relative;
            cursor: pointer;
        }

        .knob::after {
            content: '';
            position: absolute;
            top: 4px;
            left: 50%;
            width: 2px;
            height: 8px;
            background: rgba(255,255,255,0.3);
            transform: translateX(-50%);
            border-radius: 1px;
        }

        .knob-large {
            width: 50px;
            height: 50px;
        }
        .knob-large::after { height: 14px; top: 6px; }

        .master-vol { margin-left: auto; }

        /* Middle Row: Controls & Grid */
        .mid-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 100%;
        }

        /* Left Side Controls */
        .left-controls {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 15px;
            width: 80px;
        }

        .control-btn {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            background: var(--chassis-dark);
            box-shadow: 
                0 2px 4px rgba(0,0,0,0.3),
                inset 0 1px 1px rgba(255,255,255,0.05);
            display: flex;
            justify-content: center;
            align-items: center;
            color: var(--text-color);
            font-size: 14px;
            cursor: pointer;
            border: 1px solid #1a1b1e;
        }
        .control-btn:active {
            transform: translateY(1px);
            box-shadow: inset 0 2px 4px rgba(0,0,0,0.4);
        }

        .btn-row { display: flex; gap: 8px; }

        /* Track Pill Buttons */
        .track-pills {
            display: flex;
            flex-direction: column;
            gap: 12px;
            margin-right: 15px;
        }

        .pill {
            width: 14px;
            height: 42px;
            border-radius: 7px;
            background: var(--chassis-dark);
            box-shadow: inset 0 1px 3px rgba(0,0,0,0.5), 0 1px 1px rgba(255,255,255,0.05);
            position: relative;
            cursor: pointer;
            border: 1px solid #1a1a1c;
        }
        .pill-indicator {
            position: absolute;
            top: 8px; bottom: 8px; left: 4px; right: 4px;
            border-radius: 3px;
            background: #333;
            transition: all 0.2s;
        }
        .pill.active:nth-child(1) .pill-indicator { background: var(--pad-glow-cyan); box-shadow: 0 0 8px var(--pad-glow-cyan); }
        .pill.active:nth-child(2) .pill-indicator { background: var(--pad-glow-blue); box-shadow: 0 0 8px var(--pad-glow-blue); }
        .pill.active:nth-child(3) .pill-indicator { background: var(--pad-glow-green); box-shadow: 0 0 8px var(--pad-glow-green); }
        .pill.active:nth-child(4) .pill-indicator { background: var(--pad-glow-purple); box-shadow: 0 0 8px var(--pad-glow-purple); }

        /* Main 4x8 Pad Grid */
        .pad-grid {
            display: grid;
            grid-template-columns: repeat(8, 64px);
            grid-template-rows: repeat(4, 42px);
            gap: 8px;
        }

        .pad {
            background: var(--pad-off);
            border-radius: 4px;
            box-shadow: 
                inset 0 1px 3px rgba(255,255,255,0.8),
                inset 0 -2px 5px rgba(0,0,0,0.1),
                0 3px 5px rgba(0,0,0,0.3);
            cursor: pointer;
            transition: transform 0.05s, box-shadow 0.05s, background 0.1s;
            position: relative;
        }
        
        .pad:active, .pad.playing {
            transform: translateY(2px);
            box-shadow: 
                inset 0 1px 3px rgba(255,255,255,0.4),
                inset 0 -1px 2px rgba(0,0,0,0.1),
                0 1px 2px rgba(0,0,0,0.2);
        }

        /* Pad Colors per row */
        .pad.row-0.playing { background: var(--pad-glow-cyan); box-shadow: 0 0 15px var(--pad-glow-cyan); }
        .pad.row-1.playing { background: var(--pad-glow-blue); box-shadow: 0 0 15px var(--pad-glow-blue); }
        .pad.row-2.playing { background: var(--pad-glow-green); box-shadow: 0 0 15px var(--pad-glow-green); }
        .pad.row-3.playing { background: var(--pad-glow-purple); box-shadow: 0 0 15px var(--pad-glow-purple); }

        /* Right Side Controls */
        .right-controls {
            display: grid;
            grid-template-columns: repeat(2, 32px);
            grid-template-rows: repeat(4, 32px);
            gap: 12px;
            margin-left: 20px;
        }

        /* Bottom Row: Sequencer */
        .bottom-row {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            gap: 12px;
            position: relative;
        }

        .transport {
            display: flex;
            gap: 10px;
            margin-right: 30px;
        }

        .step-sequencer {
            display: flex;
            gap: 12px;
            position: relative;
        }

        .step-btn-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 4px;
        }

        .step-led {
            width: 4px;
            height: 4px;
            border-radius: 50%;
            background: #222;
        }
        .step-led.active {
            background: var(--pad-glow-cyan);
            box-shadow: 0 0 6px var(--pad-glow-cyan);
        }

        .step-btn {
            width: 22px;
            height: 22px;
            border-radius: 50%;
            background: var(--chassis-dark);
            box-shadow: 
                0 2px 4px rgba(0,0,0,0.4),
                inset 0 1px 1px rgba(255,255,255,0.05);
            border: 1px solid #1a1b1e;
            cursor: pointer;
            position: relative;
        }
        .step-btn:active { transform: translateY(1px); }
        .step-btn.on { background: #3a3b40; }
        .step-btn.on::after {
            content: '';
            position: absolute;
            top: 50%; left: 50%;
            transform: translate(-50%, -50%);
            width: 8px; height: 8px;
            border-radius: 50%;
            background: var(--pad-glow-cyan);
            box-shadow: 0 0 8px var(--pad-glow-cyan);
        }
        
        .track-color-1 .step-btn.on::after, .track-color-1 .step-led.active { background: var(--pad-glow-cyan); box-shadow: 0 0 8px var(--pad-glow-cyan); }
        .track-color-2 .step-btn.on::after, .track-color-2 .step-led.active { background: var(--pad-glow-blue); box-shadow: 0 0 8px var(--pad-glow-blue); }
        .track-color-3 .step-btn.on::after, .track-color-3 .step-led.active { background: var(--pad-glow-green); box-shadow: 0 0 8px var(--pad-glow-green); }
        .track-color-4 .step-btn.on::after, .track-color-4 .step-led.active { background: var(--pad-glow-purple); box-shadow: 0 0 8px var(--pad-glow-purple); }

        .d-pad {
            display: flex;
            align-items: center;
            gap: 6px;
            margin-left: auto;
        }
        .d-pad .control-btn { width: 26px; height: 26px; font-size: 12px;}
        .d-pad-vert { display: flex; flex-direction: column; gap: 4px; }

        /* Overlay for Audio Context Unlock */
        #start-overlay {
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0,0,0,0.85);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 100;
            border-radius: 12px;
            backdrop-filter: blur(4px);
            color: white;
            flex-direction: column;
            cursor: pointer;
        }
        #start-overlay h1 { font-weight: 300; letter-spacing: 2px; }
        #start-overlay p { color: #aaa; }
    </style>
</head>
<body>

<div id="scale-wrapper">
    <div class="hardware-chassis">
        <!-- Unlock Overlay -->
        <div id="start-overlay" onclick="initAudio()">
            <h1>HARDWARE EMULATOR</h1>
            <p>Click anywhere to start Web Audio API</p>
        </div>

        <!-- Top Row -->
        <div class="top-row">
            <div class="screen" id="main-screen">
                <span style="font-size: 14px;">≈</span>
                <span id="screen-title" style="margin: 4px 0;">Track 1</span>
                <span id="screen-bpm" style="font-size: 8px;">120 BPM</span>
            </div>
            
            <div class="knob-group">
                <div class="knob" title="Parameter 1"></div>
                <div class="knob" title="Parameter 2"></div>
                <div class="knob" title="Parameter 3"></div>
                <div class="knob" title="Parameter 4"></div>
                <div class="knob" title="Parameter 5"></div>
                <div class="knob" title="Parameter 6"></div>
                <div class="knob" title="Parameter 7"></div>
                <div class="knob" title="Parameter 8"></div>
            </div>

            <div class="knob master-vol" title="Master Volume"></div>
        </div>

        <!-- Middle Row -->
        <div class="mid-row">
            <!-- Left Side Controls -->
            <div class="left-controls">
                <div class="knob knob-large" style="margin-bottom: 20px;"></div>
                <div class="btn-row">
                    <div class="control-btn">&lt;</div>
                    <div class="control-btn">≡</div>
                </div>
            </div>

            <!-- Track Selectors -->
            <div class="track-pills">
                <div class="pill active" onclick="selectTrack(0)"><div class="pill-indicator"></div></div>
                <div class="pill" onclick="selectTrack(1)"><div class="pill-indicator"></div></div>
                <div class="pill" onclick="selectTrack(2)"><div class="pill-indicator"></div></div>
                <div class="pill" onclick="selectTrack(3)"><div class="pill-indicator"></div></div>
            </div>

            <!-- 4x8 Pad Grid -->
            <div class="pad-grid" id="pad-grid">
                <!-- Generated by JS -->
            </div>

            <!-- Right Side Controls -->
            <div class="right-controls">
                <div class="control-btn">⛶</div>
                <div class="control-btn">•</div>
                <div class="control-btn">⟳</div>
                <div class="control-btn">M</div>
                <div class="control-btn">✂</div>
                <div class="control-btn">❐</div>
                <div class="control-btn">↩</div>
                <div class="control-btn">...</div>
            </div>
        </div>

        <!-- Bottom Row -->
        <div class="bottom-row">
            <div class="transport">
                <div class="control-btn" id="play-btn" onclick="togglePlay()" style="border-radius: 8px;">▶</div>
                <div class="control-btn" style="border-radius: 8px;">⏺</div>
            </div>

            <div class="step-sequencer" id="step-sequencer">
                <!-- Generated by JS -->
            </div>

            <div class="d-pad">
                <div class="control-btn">&lt;</div>
                <div class="d-pad-vert">
                    <div class="control-btn">+</div>
                    <div class="control-btn">-</div>
                </div>
                <div class="control-btn">&gt;</div>
            </div>
        </div>
    </div>
</div>

<script>
    // --- Scale Wrapper to fit screens ---
    function resize() {
        const wrapper = document.getElementById('scale-wrapper');
        const scale = Math.min(window.innerWidth / 1050, window.innerHeight / 520);
        wrapper.style.transform = scale < 1 ? `scale(${scale})` : 'scale(1)';
    }
    window.addEventListener('resize', resize);
    resize();

    // --- State Management ---
    const state = {
        bpm: 120,
        isPlaying: false,
        currentStep: 0,
        activeTrack: 0, // 0 to 3
        sequence: [
            // Track 0 (HiHat)
            [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,1],
            // Track 1 (Snare)
            [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
            // Track 2 (Perc/Tom)
            [0,0,0,1, 0,0,1,0, 0,0,0,0, 0,1,0,0],
            // Track 3 (Kick)
            [1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0]
        ]
    };

    const trackNames = ["Hi-Hats", "Snare/Clap", "Percussion", "Kick Drum"];

    // --- UI Generation ---
    const padGrid = document.getElementById('pad-grid');
    const stepSequencer = document.getElementById('step-sequencer');
    const pads = [];
    const stepBtns = [];
    const stepLeds = [];

    // Generate 4x8 Pads
    for (let r = 0; r < 4; r++) {
        pads[r] = [];
        for (let c = 0; c < 8; c++) {
            const pad = document.createElement('div');
            pad.className = `pad row-${r}`;
            // Add slight pitch variation across columns just for fun
            pad.onmousedown = () => playSound(r, c);
            padGrid.appendChild(pad);
            pads[r].push(pad);
        }
    }

    // Generate 16 Step Buttons
    for (let i = 0; i < 16; i++) {
        const container = document.createElement('div');
        container.className = 'step-btn-container';
        
        const led = document.createElement('div');
        led.className = 'step-led';
        
        const btn = document.createElement('div');
        btn.className = 'step-btn';
        btn.onclick = () => toggleStep(i);

        container.appendChild(led);
        container.appendChild(btn);
        stepSequencer.appendChild(container);
        
        stepLeds.push(led);
        stepBtns.push(btn);
    }

    // --- Interaction Logic ---
    function selectTrack(trackIndex) {
        state.activeTrack = trackIndex;
        
        // Update Screen
        document.getElementById('screen-title').innerText = trackNames[trackIndex];
        
        // Update Pills
        document.querySelectorAll('.pill').forEach((p, i) => {
            p.classList.toggle('active', i === trackIndex);
        });

        // Update Step Sequencer Colors
        stepSequencer.className = `step-sequencer track-color-${trackIndex + 1}`;

        // Render steps for new track
        renderSteps();
    }

    function toggleStep(stepIndex) {
        const trk = state.activeTrack;
        state.sequence[trk][stepIndex] = state.sequence[trk][stepIndex] ? 0 : 1;
        renderSteps();
    }

    function renderSteps() {
        const trk = state.activeTrack;
        for (let i = 0; i < 16; i++) {
            stepBtns[i].classList.toggle('on', state.sequence[trk][i] === 1);
        }
    }

    // Initialize UI
    selectTrack(0);

    // --- Web Audio API Engine ---
    let audioCtx;
    let masterGain;
    
    // Synthesizer Functions
    const synths = {
        // 0: Hi-hat
        0: (time, pitchOffset) => {
            if(!audioCtx) return;
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            const filter = audioCtx.createBiquadFilter();

            osc.type = 'square';
            osc.frequency.value = 400 + (pitchOffset * 50);
            
            filter.type = 'highpass';
            filter.frequency.value = 7000;

            osc.connect(filter);
            filter.connect(gain);
            gain.connect(masterGain);

            gain.gain.setValueAtTime(0, time);
            gain.gain.linearRampToValueAtTime(0.5, time + 0.01);
            gain.gain.exponentialRampToValueAtTime(0.01, time + 0.1);

            osc.start(time);
            osc.stop(time + 0.1);
        },
        // 1: Snare
        1: (time, pitchOffset) => {
            if(!audioCtx) return;
            // Tone
            const osc = audioCtx.createOscillator();
            const oscGain = audioCtx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(200 + (pitchOffset*10), time);
            osc.connect(oscGain);
            oscGain.connect(masterGain);
            
            oscGain.gain.setValueAtTime(0, time);
            oscGain.gain.linearRampToValueAtTime(0.6, time + 0.01);
            oscGain.gain.exponentialRampToValueAtTime(0.01, time + 0.2);

            // Noise
            const bufferSize = audioCtx.sampleRate * 0.2; 
            const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
            const data = buffer.getChannelData(0);
            for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;
            
            const noise = audioCtx.createBufferSource();
            noise.buffer = buffer;
            const noiseFilter = audioCtx.createBiquadFilter();
            const noiseGain = audioCtx.createGain();

            noiseFilter.type = 'highpass';
            noiseFilter.frequency.value = 1000;
            noise.connect(noiseFilter);
            noiseFilter.connect(noiseGain);
            noiseGain.connect(masterGain);

            noiseGain.gain.setValueAtTime(0, time);
            noiseGain.gain.linearRampToValueAtTime(0.5, time + 0.01);
            noiseGain.gain.exponentialRampToValueAtTime(0.01, time + 0.2);

            osc.start(time);
            osc.stop(time + 0.2);
            noise.start(time);
        },
        // 2: Perc/Tom
        2: (time, pitchOffset) => {
            if(!audioCtx) return;
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            
            osc.connect(gain);
            gain.connect(masterGain);

            const baseFreq = 150 + (pitchOffset * 30);
            osc.frequency.setValueAtTime(baseFreq, time);
            osc.frequency.exponentialRampToValueAtTime(baseFreq/2, time + 0.3);

            gain.gain.setValueAtTime(0, time);
            gain.gain.linearRampToValueAtTime(0.8, time + 0.01);
            gain.gain.exponentialRampToValueAtTime(0.01, time + 0.3);

            osc.start(time);
            osc.stop(time + 0.3);
        },
        // 3: Kick
        3: (time, pitchOffset) => {
            if(!audioCtx) return;
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            
            osc.connect(gain);
            gain.connect(masterGain);

            osc.frequency.setValueAtTime(150 + (pitchOffset*5), time);
            osc.frequency.exponentialRampToValueAtTime(0.01, time + 0.5);

            gain.gain.setValueAtTime(0, time);
            gain.gain.linearRampToValueAtTime(1, time + 0.01);
            gain.gain.exponentialRampToValueAtTime(0.01, time + 0.5);

            osc.start(time);
            osc.stop(time + 0.5);
        }
    };

    function playSound(trackIdx, padCol = 0, time = 0) {
        if(!audioCtx) return;
        const playTime = time || audioCtx.currentTime;
        synths[trackIdx](playTime, padCol);
        
        // Visual feedback
        if(!time) { // Only animate pad if played manually
            selectTrack(trackIdx);
            const pad = pads[trackIdx][padCol];
            pad.classList.add('playing');
            setTimeout(() => pad.classList.remove('playing'), 100);
        }
    }

    function initAudio() {
        if (audioCtx) return;
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        masterGain = audioCtx.createGain();
        masterGain.gain.value = 0.8;
        masterGain.connect(audioCtx.destination);
        document.getElementById('start-overlay').style.display = 'none';
    }

    // --- Sequencer Logic (Lookahead Scheduler) ---
    let nextNoteTime = 0.0;
    let timerID;
    const lookahead = 25.0; // ms
    const scheduleAheadTime = 0.1; // s

    function nextNote() {
        const secondsPerBeat = 60.0 / state.bpm;
        // 16th notes = 0.25 of a beat
        nextNoteTime += 0.25 * secondsPerBeat;
        state.currentStep = (state.currentStep + 1) % 16;
    }

    function scheduleNote(stepNumber, time) {
        // Play scheduled sounds
        for (let trk = 0; trk < 4; trk++) {
            if (state.sequence[trk][stepNumber]) {
                playSound(trk, 0, time);
                
                // Visual feedback for pads during playback
                setTimeout(() => {
                    const pad = pads[trk][0]; // light up the first pad of the row
                    pad.classList.add('playing');
                    setTimeout(() => pad.classList.remove('playing'), 100);
                }, (time - audioCtx.currentTime) * 1000);
            }
        }

        // Draw UI updates (LED chasing) synced approximately to playback
        setTimeout(() => {
            // Clear all LEDs
            stepLeds.forEach(led => led.classList.remove('active'));
            // Light up current step
            stepLeds[stepNumber].classList.add('active');
        }, (time - audioCtx.currentTime) * 1000);
    }

    function scheduler() {
        while (nextNoteTime < audioCtx.currentTime + scheduleAheadTime) {
            scheduleNote(state.currentStep, nextNoteTime);
            nextNote();
        }
        timerID = setTimeout(scheduler, lookahead);
    }

    function togglePlay() {
        if(!audioCtx) initAudio();
        
        state.isPlaying = !state.isPlaying;
        const playBtn = document.getElementById('play-btn');
        
        if (state.isPlaying) {
            if (audioCtx.state === 'suspended') audioCtx.resume();
            state.currentStep = 0;
            nextNoteTime = audioCtx.currentTime + 0.05;
            scheduler();
            playBtn.style.color = 'var(--pad-glow-cyan)';
            playBtn.style.textShadow = '0 0 8px var(--pad-glow-cyan)';
        } else {
            clearTimeout(timerID);
            playBtn.style.color = '';
            playBtn.style.textShadow = '';
            stepLeds.forEach(led => led.classList.remove('active'));
        }
    }
</script>

</body>
</html>

//

**GPT:** Here you go — I packaged your Ableton Move-style emulator into a runnable single-file HTML so you can open it instantly in any modern browser:

[Download the HTML file](sandbox:/mnt/data/ableton-move-emulator.html)

**How to run it**
1. Download the file
2. Open it in Chrome / Edge (recommended)
3. Click the overlay to unlock audio, then hit **▶** and/or tap pads to play sounds

**Mike:** If I upload the manual for the ableton Move, will this help build out the functionality?

**GPT:** Yes — a lot. If you upload the Ableton Move manual, it can directly drive the feature list and behavior so the emulator matches the real workflow instead of guessing.

Here’s what it helps with most:

- **Exact button + mode behaviors**  
  What each button does (tap vs hold), shift combos, how screens change, what the encoders control per page.

- **Sequencer rules**  
  Step length, page/loop behavior, record/overdub logic, quantize settings, swing, per-track length/polymeter, follow actions (if any), and how patterns are stored.

- **Pad modes**  
  Drum vs melodic layouts, scale mode, note repeat, velocity behavior, fixed velocity, mute/solo, selection rules.

- **Transport + timing**  
  Clock behavior, metronome, count-in, tempo ranges, how start/stop interacts with record, and sync expectations.

- **Project structure**  
  How tracks, patterns, clips/scenes, and devices are organized and saved—this is huge for building the right state model.

- **Edge cases you only learn from the manual**  
  “What happens if you do X while Y is active” type stuff that makes an emulator feel authentic.

If you upload it, I can:
- extract a **feature checklist** (MVP → advanced),
- map the manual to **UI states + state machine** (what screen you’re on, what controls do),
- and turn that into **incremental implementation tasks** (so you can build without breaking things).

Upload the PDF/manual whenever you’re ready (even screenshots of key pages works).

**Mike:** - [Live](https://www.ableton.com/en/live/)
- [Push](https://www.ableton.com/en/push/)
- [Move](https://www.ableton.com/en/move/)
- [Note](https://www.ableton.com/en/note/)
- [Link](https://www.ableton.com/en/link/)
- [Shop](https://www.ableton.com/en/shop/)
- [Packs](https://www.ableton.com/en/packs/)
- [Help](https://www.ableton.com/en/help/)
- [Try Live 12 for free](https://www.ableton.com/en/trial/)
- [Log in or register](https://www.ableton.com/en/login/?next=/en/move/manual/)

### More on Ableton.com:
- [Blog](https://www.ableton.com/en/blog/)
- [Ableton for the Classroom](https://www.ableton.com/en/classroom/)
- [Ableton for Colleges and Universities](https://www.ableton.com/en/colleges-universities/)
- [Certified Training](https://www.ableton.com/en/certified-training/)
- [About Ableton](https://www.ableton.com/en/about/)
- [Jobs](https://www.ableton.com/en/jobs/)
- [Apprenticeships](https://www.ableton.com/en/ausbildung/)

### More from Ableton:
- [#### Loop
Watch Talks, Performances and Features from Ableton's Summit for Music Makers](https://www.ableton.com/en/blog/categories/loop/)
- [#### Learning Music
Learn the fundamentals of music making right in your browser.](https://learningmusic.ableton.com/)
- [#### Learning Synths
Get started with synthesis using a web-based synth and accompanying lessons.](https://learningsynths.ableton.com/)
- [#### Making Music
Some tips from 74 Creative Strategies for Electronic Producers.](https://makingmusic.ableton.com/)

# 1. Introduction
Ableton Move is a compact and portable standalone instrument that can be used to capture and perform spontaneous compositions on the go, making it the ideal tool for quick and intuitive music creation.
Move is designed to easily integrate with other Ableton products, which means that you can start a Set on Move and continue working on it whether you are using Note, Live, or Push. You can also use Move as a control surface for Live or connect it to class-compliant MIDI devices in order to send or receive MIDI data.
This manual will help you become familiar with Move’s features and workflows and will also serve as a reference for Move’s controls. There are also a number of videos that can help you get started with Move available here: [https://www.ableton.com/learn-move/](https://www.ableton.com/learn-move/)
## 1.1 What’s in the Box?
Move comes with a USB-C power supply, USB-C cable, getting started guide, safety and warranty information booklet, and controls overview.
## 1.2 Hardware Overview
- 32 velocity-sensitive, backlit soft silicone pads
- Touch-sensitive, clickable wheel
- 9 high-resolution, touch-sensitive encoders
- 16 backlit multifunctional buttons for sequencing and accessing secondary features
- 20 backlit buttons for accessing primary features such as navigation, recording or looping
- 1.3” white OLED display (128×64)
- Stereo line out (3.5 mm jack)
- Stereo line in (3.5 mm jack)
- Built-in microphone
- Built-in speaker
- Wi-Fi module
- Quad-core ARM Cortex-A72 processor with 2 GB RAM
- 64 GB built-in SD Card
- USB-A port
- USB-C port
- Rechargeable battery

### 1.2.1 Controls
Move’s Controls.
### 1.2.2 Connections
Move’s Connections.
1. Power Button: Press to turn Move on and off.
2. Audio Output: Connect Move to active speakers/monitors or headphones with a 3.5 mm stereo jack connector.
3. Audio Input: Connect an external sound source to Move for sampling using a 3.5 mm stereo jack connector.
4. USB-A: Connect an external MIDI device using a USB-A cable.
5. USB-C: Connect Move to the power supply or your computer using the USB-C cable.

# 2. Setup
Move is designed primarily for use as a standalone instrument, but can also be connected to a computer for use as a [control surface for Live](https://www.ableton.com/en/move/manual/#control-live-mode) or as an [audio interface](https://www.ableton.com/en/move/manual/#using-move-as-an-audio-interface). You can use the options in the Setup menu to configure various settings for the hardware.
Press the yellow power button on the back of the device to turn Move on. You can use the included power supply or connect Move to a computer via the included USB-C cable to charge the unit. A message will briefly appear on the display to indicate that Move is charging. If you connect Move to a power source when the hardware is turned off, a battery icon will briefly appear on the display.
The first time you turn it on, Move will boot up in Standalone Mode. A short onboarding tutorial will guide you through a basic setup process, allowing you to [connect to Wi-Fi](https://www.ableton.com/en/move/manual/#connect-to-wi-fi), [enable error reporting](https://www.ableton.com/en/move/manual/#error-reporting), or [install the latest update](https://www.ableton.com/en/move/manual/#update-moves-software). You can skip these steps by selecting the Skip option with the wheel. Doing so takes you to the [Set Overview](https://www.ableton.com/en/move/manual/#set-overview), where you can open one of the four demo Sets or [create a new Set](https://www.ableton.com/en/move/manual/#creating-new-sets).
To turn Move off, first press the power button, then press the wheel. You can press the Back button to cancel.
If you encounter any issues with Move, press and hold the power button for ten seconds to force Move to turn off.
## 2.1 Setup Menu
The Setup menu allows you to manage Move’s connectivity, update its software, switch to Control Live Mode, reset Move, and more.
Open the Setup menu by pressing Shift and then the Step 2 button. Once the menu is open, the Setup menu icon can be seen flashing under the Step 2 button.
The Setup Menu Icon.
Turn the wheel to scroll through the available entries, then press the wheel to open the currently highlighted entry. Entries that include submenus are indicated by an arrow icon, while entries that toggle between states are indicated by a dash. To return to a previous level, press the Back button or select the Back option (available in submenus) and press the wheel.
To exit the Setup menu, press the Back button from an entry or press it twice from a submenu. Alternatively, you can hold the Back button to exit.
### 2.1.1 Battery Status
You can check Move’s battery level and status through the Battery submenu entry.
The current battery level is displayed next to the entry name. Pressing the wheel when the entry is selected will also show the current battery status, for example, “Charging.”
The Current Battery Status.
Generally, the battery will last for up to four hours of music making. When the battery is running low, a warning message, including the current battery level, will be shown on Move’s display. If the battery runs out when you are using Move, the current Set will be automatically saved and the hardware will shut down safely.
### 2.1.2 Connect to Wi-Fi
When Move is connected to Wi-Fi, you can update Move’s software directly from the hardware, access Move Manager without plugging Move into a computer, and use Move with [Ableton Cloud](https://www.ableton.com/en/move/manual/#using-ableton-cloud-on-move), as well as enable [Link](https://www.ableton.com/en/move/manual/#using-ableton-link-on-move) for wireless use.
To connect Move to Wi-Fi, select the Wi-Fi submenu entry and open it by pressing the wheel. Select the Wi-Fi Off entry with the wheel and then press the wheel to switch to Wi-Fi On. You will then see a list of available Wi-Fi networks. Turn the wheel to scroll through the list, then press the wheel to select a network.
If the Wi-Fi network is password-protected, you will be prompted to enter the password. Turn the wheel to navigate between characters and press it to enter a character. Press the wheel again to add the same character, or turn it to navigate to a different character. Holding the Shift button temporarily switches the characters to uppercase letters. You can also navigate to the ellipsis menu icon on the left of the Space bar and press the wheel to switch from lowercase to uppercase letters, or press the wheel one or two more times to access numbers and special characters. You can hold Shift to toggle between the available character pages.
Access Additional Characters with the Ellipsis Menu Icon.
Use the Backspace icon or the Back button to delete characters you have already entered. To confirm and submit the password, select the Enter icon, represented by a check mark icon in the bottom right corner of the display, and press the wheel.
The Backspace and Enter Icons.
Once the Wi-Fi connection is established, the active network will be indicated by a check mark icon next to its name. As long as Wi-Fi is enabled in the Wi-Fi submenu, the connection will be established automatically whenever Move is switched on.
You can forget a connected Wi-Fi network by selecting it from the list, then pressing the wheel and choosing “Forget.”
Note: It is not possible to access the Wi-Fi submenu when Move is in [Control Live Mode](https://www.ableton.com/en/move/manual/#control-live-mode). If Move was already connected to Wi-Fi before you switched to Control Live Mode, the connection will remain active. If not, you will need to [switch back to Standalone Mode](https://www.ableton.com/en/move/manual/#switch-to-control-live-mode) if you want to connect Move to Wi-Fi.
### 2.1.3 Update Move’s Software
You can update Move’s software to the latest version directly from the hardware. An asterisk is displayed next to the *Update* entry name whenever a new software update is available.
To install an update, connect Move to Wi-Fi and open the Update submenu entry. You will see the *Install* option followed by the latest available software version. Select Install, press the wheel to confirm, then follow the instructions on the display to complete the update.
An Asterisk Indicates an Update Is Available.
By default, you will be notified when a new software update is available. If you prefer to manually check for updates, navigate to the *Notify On* entry in the Update submenu and press the wheel to toggle the notifications off. You can then use the Check Update entry to see if an update is available.
You can check the current version of software installed on Move through the *Current Version* entry in the Update submenu.
It is also possible to [update Move’s software through Move Manager](https://www.ableton.com/en/move/manual/#update-moves-software-from-move-manager).
### 2.1.4 Ableton Cloud Status
Enabling Ableton Cloud on Move lets you sync Sets to Note, Live, or Push.
The *Cloud* entry indicates whether Ableton Cloud is currently active.
Ableton Cloud Is Inactive.
Open the entry to view the hostname for accessing [Move Manager](https://www.ableton.com/en/move/manual/#move-manager), where you can [activate](https://www.ableton.com/en/move/manual/#activating-ableton-cloud-on-move) or deactivate Cloud as needed.
Note: The Cloud entry is not available when Move is in [Control Live Mode](https://www.ableton.com/en/move/manual/#control-live-mode).
Learn more about using Ableton Cloud on Move in [the dedicated section of this manual](https://www.ableton.com/en/move/manual/#using-ableton-cloud-on-move).
### 2.1.5 Switch to Control Live Mode
To use Move as a control surface for Live, select and open the *Control Live* entry using the wheel, connect Move to your computer via the USB-C cable, and then open Live.
Once Move is in Control Live Mode, the Control Live entry is replaced by the Standalone entry. Select the entry and press the wheel to switch Move back to Standalone Mode.
Note that Control Live Mode is supported for use with Live 12, version 12.1 or later, as well as Live 11, version 11.3.35 or later.
Read more about using Control Live Mode in [the dedicated chapter](https://www.ableton.com/en/move/manual/#control-live-mode) of this manual.
### 2.1.6 Link
You can enable Link on Move to stay in sync with other Link-connected devices on the same network. Select and open the *Link* entry to choose between three options: Off, Tempo and Start/Stop. The entry also displays the current Link status.
Ableton Link Is Switched Off.
Note: This entry is not available when Move is in [Control Live Mode](https://www.ableton.com/en/move/manual/#control-live-mode).
Learn more about Ableton Link and how to use it with Move in the [Using Ableton Link on Move](https://www.ableton.com/en/move/manual/#using-ableton-link-on-move) section of this manual.
### 2.1.7 MIDI
Use the *MIDI* entry to configure how Move sends or receives MIDI data to and from class-compliant MIDI devices.
The MIDI Submenu.
Note: This entry is not available when Move is in [Control Live Mode](https://www.ableton.com/en/move/manual/#control-live-mode).
Find out more about using Move with MIDI devices in the [Connecting MIDI Devices](https://www.ableton.com/en/move/manual/#connecting-midi-devices) section of the Connectivity chapter.
### 2.1.8 USB-C Audio
You can use Move’s USB-C connection to output audio to a computer, smartphone, or tablet. This allows you to sample audio from Move into another application, such as Note. When connected to a computer via USB-C, Move functions as an [audio interface](https://www.ableton.com/en/move/manual/#using-move-as-an-audio-interface) and allows you to record Move’s audio output directly into Live.
Select and open the *USB-C Audio* entry to choose which of Move’s audio channels to send out. You can choose to send the signal from Move’s built-in microphone or audio input, or the signal from Move’s main output.
By default, Move’s audio output is set to *Mic*, and the signal will be sent from Move’s microphone or line in. Select *Main Out* to send the signal from Move’s main channel. When Main Out is selected, Move’s speakers will be disabled.
Main Out Selected as Move’s Output.
Note: This entry is not available when Move is in [Control Live Mode](https://www.ableton.com/en/move/manual/#control-live-mode).
Find out more about using Move as an audio interface in the [dedicated](https://www.ableton.com/en/move/manual/#using-move-as-an-audio-interface) section of the Connectivity chapter.
### 2.1.9 Accessing Move Manager
In the Move Manager submenu, you can access and configure the hostname used for establishing a connection between Move and Move Manager.
When you open the *How to access?* entry, the current hostname for accessing Move Manager will be shown on Move’s display.
Enter the Hostname in a Browser to Access Move Manager.
Each Move unit requires a unique name to distinguish it from other units connected to the same Wi-Fi network. If there are multiple units on the same network, the name for each unit may be updated to a unique one to ensure that each unit is connected to its corresponding Move Manager. An asterisk next to the Move Manager submenu entry indicates that the name has changed.
You can use the *move.local* entry to manually change the name. Open the entry and turn the wheel to select a name from the available variations, for example “move4.local.”
Selecting a Name for Move.
Once you select a name, confirm your choice by pressing the wheel. A *“Requesting name…”* message will be briefly shown on the display, followed by a message confirming that the name was set to your chosen option. If the name you selected is already assigned to another unit, a message will be shown informing you that the name is taken and that another name has been assigned instead.
The Name Is Already Taken.
Once you update Move’s name, the hostname displayed in the *How to access?* entry will also be updated to reflect the new name.
Note: The Move Manager submenu is not available when Move is in [Control Live Mode](https://www.ableton.com/en/move/manual/#control-live-mode).
To learn about all the ways in which you can manage Move’s content using Move Manager from within a web browser, please refer to [the dedicated chapter](https://www.ableton.com/en/move/manual/#move-manager) of this manual.
### 2.1.10 Advanced Settings
In the Advanced submenu you can enable anonymous error reporting, as well as reset Move to its factory settings.
#### 2.1.10.1 Error Reporting
By default, Move sends crash and error reports to Ableton. This data is anonymous and does not contain any personal information regarding your hardware or user account.
If you would like to disable error reporting, select the *Send Errors On* entry and press the wheel to switch this option to Off.
Error Reporting Switched Off.
#### 2.1.10.2 Reset Move
Resetting Move will delete all of the Sets, samples, recordings, and settings stored on the unit. Note that this action cannot be undone.
To reset Move, select the *Factory Reset* entry and press the wheel. A warning message will be shown on the display:
The Warning Message Displayed When Resetting Move.
Long press the wheel to confirm and reset Move. The hardware will then reboot to its factory settings, with all demo Sets reinstalled. Note that the software version installed before the reset will not be reverted. Additionally, any Move Sets stored in Ableton Cloud will not be affected by the reset.
Note: The Advanced Settings submenu is not available when Move is in [Control Live Mode](https://www.ableton.com/en/move/manual/#control-live-mode).
### 2.1.11 Adjust Brightness
You can change the brightness of Move’s button and pad LEDs through the Setup menu’s *Brightness* entry. Turn the wheel to switch between four levels of brightness.
The Pad and Button Brightness Level Set to Mid.
Setting the brightness to Max only boosts the brightness of the pad LEDs when compared to the High setting, while all the other settings affect the brightness of both the pad and button LEDs. Note that this setting does not affect the brightness of the display.
# 3. Move Manager
Move Manager is a web-based file management tool for Move. It allows you to manage the content stored on the hardware: Sets, samples, recordings, and presets, as well as Sets stored in [Ableton Cloud](https://www.ableton.com/en/move/manual/#using-ableton-cloud-on-move). You can also use Move Manager to update Move’s software or quickly access the [Learn Move website](https://www.ableton.com/learn-move) and the Move manual.
## 3.1 Connecting to Move Manager
To access Move Manager, first turn Move on and either [connect it to the same Wi-Fi network as your computer or mobile device](https://www.ableton.com/en/move/manual/#connect-to-wi-fi), or connect it to your computer via the USB-C port on the back of the unit.
Use the USB-C Port to Connect Move to Your Computer.
Note: On Windows 10, if you want to use USB-C to connect to Move Manager, you will first need to update Move to version 1.1 or higher via Wi-Fi. If you cannot connect to Wi-Fi, please refer to [this troubleshooting article](https://help.ableton.com/hc/en-us/articles/14645140037788) in our Knowledge Base.
To use Move Manager, you will need Move’s hostname and a supported web browser: Chrome, Firefox, Safari, or Edge. You can find the hostname in the Setup’s Move Manager submenu by opening the [How to access?](https://www.ableton.com/en/move/manual/#accessing-move-manager) entry.
If there are multiple Move units on the same Wi-Fi network, each one will use a different name. You can check the name and change it to a different one using the *move.local* entry in the Move Manager submenu.
## 3.2 Authenticating Move Manager
Enter the hostname in a web browser on your computer or mobile device to connect to Move Manager. When you first open Move Manager, a confirmation code will appear on Move’s display, which must be entered in the browser to authenticate the connection. This process helps to distinguish between devices when there are multiple Move units connected to the same network.
The Confirmation Code Prompt Displayed in a Web Browser.
Type in the code shown on Move’s display to access Move Manager.
The Confirmation Code Displayed on Move.
Note that Move Manager can only be authenticated in Standalone Mode. If Move is in [Control Live Mode](https://www.ableton.com/en/move/manual/#control-live-mode), you will need to temporarily switch back to Standalone Mode to authenticate Move Manager. To do so, open the Setup menu on Move, then select the Standalone entry and press the wheel. Once Move Manager is authenticated, you will be able to use it even when Move is in Control Live Mode.
## 3.3 Using Move Manager
After you complete the authentication process, the home page will be displayed. From there, you can access several pages where you can manage Move’s content, as well as links to Learn Move videos and the Move manual.
Move Manager’s Home Page.
At the top of the home page you will find a Move icon, which links back to the home page from other pages, as well as a menu. The menu contains entries for accessing the Sets, Recordings, Samples, Presets, and Settings pages, and a language chooser. The Move icon and the menu are shared between Move Manager’s pages, so you can easily access any location no matter which page is currently open.
Note that when you access Move Manager from your phone, the menu is slightly different: instead of listing menu entries as tabs, all the entries are contained within a collapsible menu.
## 3.4 Sets Page
The Sets page contains all the Sets that are available on Move, listed with the Set name, last modified date, and size. At the right of each entry on the list you will find options to download, rename, delete, or export a Set as an audio file.
Sets Available on Move.
### 3.4.1 Sorting Sets
You can sort Sets in ascending or descending order by name, date, or size. To do so, click the field that you want to sort by, and an arrow will appear to the right of the field name. Click on the arrow to toggle between ascending and descending order, or click a different field name to sort by that field instead.
Note that when using Move Manager on your phone, you can sort Sets via the drop-down menu in the upper-right corner.
### 3.4.2 Downloading a Set
To download a Set, click on the download icon on the right.
The Download Icon.
The Set will then be downloaded as an .ablbundle file to the Downloads folder on your computer or mobile device.
Note that on Chrome, when you attempt to download a Move Set, an “Insecure download blocked” message will be displayed, and you will be [prevented from downloading the Set](https://help.ableton.com/hc/en-us/articles/15423702082972). This warning appears because Move Manager uses a .local domain. In order to bypass the warning and download the Set, select the “Keep” option when the warning is displayed.
#### 3.4.2.1 Open Move Sets in Live
It is possible to load Move Sets in Live after downloading them. The .ablbundle file is supported in Live 12 or in Live 11 when using version 11.2 or later.
To open a Move Set in Live, double-click the .ablbundle file to open it in the latest supported version of Live installed on your machine. Alternatively, you can move the Set to a folder that has been added to Live’s Places, and then double-click or drag the .ablbundle file into Live, or you can drag and drop the Set into Live from a folder on your computer.
Once opened in Live, the .ablbundle file is loaded as a new Live Set, which you can then save as a separate .als file.
Note: Drum Racks in Move contain the Drum Sampler instrument, introduced in Live 12.1. If you open a Move Set that contains Drums presets in Live 11 or a version of Live 12 earlier than 12.1, Drum Sampler will be converted to Simpler. This can cause Sets to sound different in Live, especially if Drum Sampler’s playback effects were used in the Move Set.
#### 3.4.2.2 Open Move Sets in Note
You can also open Move Sets in Note. To do so, open Move Manager in a web browser on your iOS or iPadOS device, download a Set, locate it in the Downloads folder of the Files application, then tap on the Set to open it in Note.
If you are [using Ableton Cloud on Move](https://www.ableton.com/en/move/manual/#using-ableton-cloud-on-move) and in Note, any Move Sets uploaded to Cloud will be automatically available in Note.
#### 3.4.2.3 Sharing Move Sets via AirDrop
If you use Apple devices, you can use AirDrop to quickly share Move Sets between them. You can send a Set you downloaded on your Mac to a nearby iPhone or iPad, or vice versa.
Let’s say you want to share a Set you [downloaded from Move Manager](https://www.ableton.com/en/move/manual/#downloading-a-set) on your Mac to your iPhone, for example. You can do this by opening the Share option on your computer, then using AirDrop to send it to your phone. You can then navigate to the Files app on your phone, locate the Set and tap on it to [open the Set in Note](https://www.ableton.com/en/move/manual/#open-move-sets-in-note). This works the other way around, too, so you can download the Set to your iPhone, use AirDrop to send it to your Mac, then [open the Set in Live](https://www.ableton.com/en/move/manual/#open-move-sets-in-live).
### 3.4.3 Renaming a Set
To rename a Set, click on the rename icon.
The Rename Icon.
A dialog will open where you can enter the new name. Click Rename to confirm the change, or click Cancel to exit.
### 3.4.4 Additional Set Options in Move Manager
Click on the ellipsis icon to access additional Set options: deleting Sets or exporting them as audio files.
Additional Set Options.
#### 3.4.4.1 Exporting a Set as an Audio File
To export your Set as an audio file in the WAV or MP3 format, select the *Export as Audio* option in the additional options menu. A dialog will be displayed where you can choose the file format for the export. You can then click on the Export button and a progress bar will appear as the Set is rendered to audio. Once the export is complete, the resulting audio file will be saved to your Downloads folder.
Note that all clips in the Set will be exported, ordered from left to right. If you want to render a Set to audio as a complete song, but the Set includes multiple clips with different versions of a beat for example, you may want to first create a copy of the Set, remove the clips that you do not wish to be included in the audio file, then export the copied Set as an audio file instead.
#### 3.4.4.2 Deleting a Set from Move Manager
If you would like to delete a Set from Move through Move Manager, choose the Delete option from the additional options menu, and a confirmation dialog will appear.
Note that it is not possible to undo this action. If you are certain you want to delete the Set, press the Delete button to proceed; otherwise, press Cancel.
## 3.5 Recordings Page
The Recordings page gives you an overview of all the audio files you have recorded on Move, listed by name, recording date, and size. At the right of each entry on the list you will find options to download, rename, or delete a recording.
Recordings Available on Move.
You can sort your recordings by name, date, and size in ascending or descending order in the same way that you can [sort Sets](https://www.ableton.com/en/move/manual/#sorting-sets).
To play back a recording, press the play button to the left of the recording’s name.
Press the Play Button to Listen to a Recording.
You can download, rename, or delete a recording using the dedicated icons on the right.
The Download, Rename, and Delete Icons.
These options function in the same way as they do in the [Sets page](https://www.ableton.com/en/move/manual/#sets-page). Note that deleting a recording cannot be undone, so proceed with caution.
## 3.6 Samples Page
The Samples page allows you to upload samples to Move, view all the samples you already uploaded, and organize them into folders. Samples are listed by name, upload date, size, and file type. Each sample includes options to download, rename, or delete the sample.
The Samples Page.
You can sort your samples by name, date, size, and type in ascending or descending order in the same way that you can [sort Sets](https://www.ableton.com/en/move/manual/#sorting-sets) or recordings.
To play back a sample, click the play button to the left of the sample’s name. Sample folders do not have a play button and instead feature a folder icon.
You can download, rename, or delete a sample using the dedicated icons on the right. You can also rename or delete sample folders. These options work in the same way as they do in other pages. Deleting samples cannot be undone, so proceed with caution.
Note that each Move Set can use up to 400 MB of samples. Move stores samples in memory as 32-bit — even if the sample files are only 24- or 16-bit. This means that the 400 MB limit corresponds to a total of approximately 20 minutes of stereo or 40 minutes of mono sample time.
### 3.6.1 Uploading Samples and Sample Folders
You can upload individual samples to Move Manager in the following ways:
- Click the Upload button and select files from your computer or mobile device.
- Open the Upload button’s drop-down menu, if available, select the “Upload files” option, then choose files from your computer or mobile device.
- Drag and drop files onto the Samples page.

You can import WAV, AIF, or AIFF files that are 100 MB or less. Note that while Live Packs cannot be installed on Move, you can upload individual samples from Packs to Move Manager.
When you add samples using the Upload button, the process starts immediately and an upload progress bar is displayed. If you drag and drop files or folders onto the Samples page, a confirmation dialog will appear before the upload starts.
The Confirmation Dialog Displayed When Uploading Files.
Apart from uploading individual samples, you can also upload entire sample folders:
- Through the “Upload folder” option in the Upload button’s drop-down menu.
- By dragging and dropping folders onto the Samples page.

To upload a folder using the Upload button, press the button’s drop-down menu, choose the “Upload folder” option and select a folder on your computer or mobile device. Note that it is only possible to select one folder at a time. You can upload one or more folders at a time by dragging and dropping them onto the Samples page.
Note: Uploading folders with the Upload button only works in the latest version of Chrome, Firefox, or Edge, which is why the Upload button in Safari does not include the drop-down menu.
The Upload Button in Safari.
If a folder contains a mix of supported and unsupported files, the folder will be uploaded, but will only include files in the supported file formats. If the folder only contains unsupported files, the upload will fail.
When you upload a sample or folder with the same name as a previously uploaded item, a warning message will be displayed to prevent you from accidentally overwriting the existing items.
Confirm You Want to Overwrite Existing Samples.
You can access uploaded samples on Move via the User Samples folder in the [browser](https://www.ableton.com/en/move/manual/#browsing-and-swapping-presets).
### 3.6.2 Organizing Samples
You can create folders in the Samples page and then upload samples into them. This is useful for organizing samples into specific categories.
Note that it is not possible to reorganize existing content by dragging and dropping within the Samples page. In order to add content to an existing sample folder, you must first open the folder and then upload the content into the folder directly, either through the Upload button or by dragging and dropping from your computer or mobile device.
To create a sample folder, click the New Folder button and type in a name for your folder in the pop-up window. Confirm your choice by clicking Create, or click Cancel to abandon the changes.
It is also possible to create or upload folders inside existing folders. To do so, open a folder by clicking on it, then create another folder using the New Folder button, or upload a folder from your computer or mobile device by dragging and dropping it into the existing folder. The name of the currently open folder is displayed on top of the samples list. You can use the arrow next to the name to navigate back up the folder level.
Folder Navigation in Move Manager.
## 3.7 Presets Page
The Presets page allows you to upload [Track Presets](https://www.ableton.com/en/move/manual/#track-presets) to Move, view all the presets you already uploaded through Move Manager or saved directly on Move, and create folders for your presets. Presets are listed by name, upload date, and size. Note that you can only upload presets that use the .ablpresetbundle extension.
The Presets Page.
You can sort your presets in [ascending or descending order](https://www.ableton.com/en/move/manual/#sorting-sets).
Use the dedicated icons on the right to rename or delete a preset or preset folder. Note that deleting presets cannot be undone, so proceed with caution.
You can upload both individual presets and preset folders, which works like [uploading samples or sample folders](https://www.ableton.com/en/move/manual/#uploading-samples-and-sample-folders).
When you upload a Drum Rack preset, all of the samples included in the Rack will be automatically added to the Samples page in a dedicated Preset Samples folder.
It is possible to organize your presets into folders in the same way as you can [organize samples](https://www.ableton.com/en/move/manual/#organizing-samples).
Note: It is not possible to reorganize existing content by dragging and dropping within the Presets page. In order to add content to a preset folder, you must first open the folder and then upload the content into the folder directly, either through the Upload button or by dragging and dropping from your computer or mobile device.
## 3.8 Settings Page
The Settings page includes information about the storage space available on Move and the software version installed, as well as the option to activate Ableton Cloud or update Move’s software.
The Settings Page.
### 3.8.1 Update Move’s Software from Move Manager
You can update Move to the latest software version directly from Move Manager. Whenever a new version is available, an asterisk will appear next to the Settings menu item, and a banner informing you about the latest version will be displayed when you open the Settings page.
An Update for Move Is Available.
To update Move, click on the *Update Now* button in the banner. A dialog window will be displayed, showing a progress bar for each of the three stages of the process: downloading the new software, installing it, and then restarting Move. Once the process is completed and the hardware has restarted, click “Done” to dismiss the successful update message in Move Manager.
Note that when updating the software from Move Manager via USB-C, it is not required for Move to be connected to Wi-Fi.
### 3.8.2 Activating Ableton Cloud on Move
You can transfer Move Sets to Note, Live, or Push using Ableton Cloud.
To enable Cloud on Move, click the *Activate Cloud* button in the Ableton Cloud section of the Settings page. You will be redirected to [ableton.com](https://www.ableton.com/), where you can enter the login details for your Ableton user account, in case you are not logged in yet. After you log in, a page will be displayed asking you to accept the [Ableton Cloud Terms of Service](https://www.ableton.com/en/ableton-cloud-terms-of-service/) and the [Privacy Policy](https://www.ableton.com/en/privacy/).
Enable Ableton Cloud.
Check both of the boxes and press Accept. This will redirect you back to the Settings page, which will now display Cloud’s status as active. If you are not automatically redirected, click on the “Return to application” button on the *Connect to Ableton Cloud* page to reopen Move Manager.
Once Ableton Cloud is activated, any Sets previously synced with Cloud will automatically appear on Move and in Move Manager’s Sets page.
To disable Cloud on Move, click Deactivate Cloud in the Ableton Cloud section of the Settings page. Note that this will not remove any previously synced Sets from the Set Overview.
You can read more about using Ableton Cloud on Move in [the dedicated section](https://www.ableton.com/en/move/manual/#using-ableton-cloud-on-move) of this manual.
## 3.9 Advanced Page
The Advanced page contains device logs that can provide useful information for troubleshooting issues with Move. There is no direct link to the Advanced page from Move Manager, but you can access it via [move.local/advanced](http://move.local/advanced).
Move Manager’s Advanced Page.
Note that if you changed Move’s name, the exact hostname for accessing the Advanced page will depend on what is specified in the [How to access?](https://www.ableton.com/en/move/manual/#accessing-move-manager) entry.
To download the device log files, open the Logs tab and press the Download Full Log button. It is also possible to select a log for a specific date and time by selecting it from the drop-down menu to the left of the Download button.
You can then send the log file to [Ableton Technical Support](https://www.ableton.com/help/#techsupport) alongside a description of the issues you experienced.
# 4. Connectivity
Move is designed as a portable instrument you can use on its own to quickly create a musical piece, but its connectivity features also let you expand your setup beyond standalone use. You can sample your environment, connect MIDI devices, jam with other musicians via Link-enabled apps and devices, or upload your Sets to Cloud to continue developing them in Note, Live, or on Push.
## 4.1 Hardware Connectivity
Move comes with a built-in speaker, an audio output for connecting headphones, powered speakers, or external audio interfaces, as well as a built-in microphone and audio input, both of which allow you to sample external audio sources. Move also supports sampling via USB-C and can be used as an audio interface with Live (also via USB-C), or connected to MIDI devices through its USB-A port.
### 4.1.1 Connecting to External Sound Sources
Move’s audio output port is both a line out and a headphone out. This means you can connect active monitors or an external audio interface to Move using an audio cable, or use Move with headphones.
Aside from using Move’s built-in microphone for [sampling](https://www.ableton.com/en/move/manual/#sampling), you can also sample sound from external sources with Move’s audio input or USB-C port. Note that the audio input works with line-level signals sent via an analog cable from audio or mobile devices. In order to connect, for example, a microphone or guitar pickup to Move you will need to use an external preamp with line-level output.
The input and output port are both 3.5 mm.
### 4.1.2 Using Move as an Audio Interface
When Move is connected to a computer via the USB-C cable, it can function as an audio interface by routing audio over the USB connection. The exact functionality differs depending on whether you are using Move in Standalone Mode or [Control Live Mode](https://www.ableton.com/en/move/manual/#control-live-mode).
To use Move as an audio interface on Windows, you first need to download Live 12.1 from your [ableton.com user account](https://www.ableton.com/account/) and then install it, which will also install the latest audio driver for Move. Alternatively, you can download the driver directly from the [Download Archive](https://www.ableton.com/download/archive/).
#### 4.1.2.1 Using Move as an Audio Interface in Standalone Mode
In Standalone Mode, you can send and receive audio between Move and a connected computer. This means that you can record the signal from any of Move’s audio output channels directly into Live, or use Move to monitor or sample audio coming from Live.
To record Move’s audio output into Live, first select the output through [the USB-C Audio entry](https://www.ableton.com/en/move/manual/#usb-c-audio) in the Setup menu. Then, connect Move to your computer using the USB-C cable, open Live’s Audio Settings, and select Move as an input device.
Select Move in the Audio Input Device Chooser.
Move uses a 44,100 Hz sample rate in Standalone Mode. If a different sample rate is selected in Live, no audio signal will be sent.
Once you set Move as the audio input, arm an audio track in Live. Next, press the Record button in Live, then play Move’s pads, launch a clip or Set, sing into Move’s microphone, or make a sound with a connected audio source to record the audio into Live.
You can also send audio from Live to Move’s main output for monitoring or sampling. To route audio to Move, select Move as the audio output device in Live’s Audio Settings.
Select Move as the Audio Output Device.
Once you set Move as the audio output, enter [Sampling Mode](https://www.ableton.com/en/move/manual/#sampling-mode) and select USB-C as the [sampling input source](https://www.ableton.com/en/move/manual/#selecting-a-sampling-input-source). You can choose to switch on [monitoring](https://www.ableton.com/en/move/manual/#turning-monitoring-on-or-off); when on, Move will output audio as soon as you start playback on a track in Live.
Move can also receive audio from other devices such as smartphones and tablets. You can find out more about monitoring and sampling other devices via USB-C in [the dedicated section of the manual](https://www.ableton.com/en/move/manual/#sampling-audio-via-usb-c).
#### 4.1.2.2 Using Move as an Audio Interface in Control Live Mode
In Control Live Mode, while you can still route audio signals to and from Move, only Move’s audio input can be sent to a computer. This means you can record audio either from Move’s built-in microphone or audio input into Live, but not the audio from Move’s main channel.
You can also select Move as an audio output in Live and send the audio signal from Live to Move’s main output.
### 4.1.3 Connecting MIDI Devices
Move can send and receive MIDI notes to and from class-compliant USB-powered MIDI devices. Low-speed and full-speed USB devices are supported, but not hi-speed USB devices such as Push. You can connect a MIDI device via the USB-A port on the back of the unit. When a MIDI device is connected, Move can supply it with up to 500 mA of power.
Use the USB-A Port to Connect MIDI Devices.
You can use the MIDI entry in the Setup menu to toggle between the *MIDI In Only* and *MIDI Out Only* options. If MIDI In Only is active, the currently selected track on Move will receive incoming MIDI. If MIDI Out Only is selected, you can set which of Move’s tracks will send out MIDI data.
Track 3 Set Up for Sending MIDI Out.
Move can receive polyphonic aftertouch messages; monophonic aftertouch, MIDI CC, and MIDI mapping are not supported. Note that sending and receiving MIDI data does not work when Move is in Control Live Mode. For more information, please refer to the [USB Operation Modes](https://www.ableton.com/en/move/manual/#usb-operation-modes) section of this manual.
## 4.2 Using Ableton Link on Move
Ableton Link is a technology that keeps devices in time over a wired or wireless network. Link is built into Move, Note, Live and Push, as well as a growing number of iOS applications. Any Link-enabled software can play in time with any other Link-enabled software simply by joining the same network.
To activate Link on Move, make sure that your unit is connected to the same network as any other devices that you want to sync with. This can be achieved either by connecting Move to the same Wi-Fi network as those devices, or by connecting Move via USB-C to a computer that is on the same network as those devices.
Open the Link entry in the Setup menu and use the wheel to choose between three options: Off, Tempo and Start/Stop.
Link Is Set to Tempo.
*Tempo* syncs Move’s tempo to the tempo of the Link session. *Start/Stop* syncs the playback position as well as the tempo. Any start and stop commands triggered on another Link-connected device will cause playback on Move to start or stop at the specified point in time. *Off* disables Link on Move.
The first device to join a Link session sets the initial tempo for the other ones. Any Link-enabled apps, devices, or instances of Live can then change their tempo at any time and all others will follow. If multiple participants try to change the tempo simultaneously, everyone else will try to follow, but the last one who changes the tempo will “win.”
Note that a [count-in](https://www.ableton.com/en/move/manual/#count-in-and-autoload) cannot be used for recording when Link is enabled.
In most cases, Link will work without issues as soon as it is enabled and will provide reliable synchronization under all conditions. If you run into any issues, we recommend checking out [the Link Troubleshooting article](https://help.ableton.com/hc/en-us/articles/209073069) in our Knowledge Base.
## 4.3 Using Ableton Cloud on Move
Ableton Cloud is a service that lets you store up to eight Sets from Move and Note, which you can access across all Ableton products. You can enable Cloud for use with Move via [Move Manager](https://www.ableton.com/en/move/manual/#activating-ableton-cloud-on-move).
Once enabled, any Sets that are already stored in Cloud — for example, from Note — will appear in the [Set Overview](https://www.ableton.com/en/move/manual/#set-overview). On Move’s display, each synced Set features a small cloud as part of the Set icon.
A Synced Set on Move.
### 4.3.1 Uploading a Set to Cloud
You can upload a Set to Cloud from the Set Overview. To do so, hold the Shift button and press the pad containing the Set you want to upload. This will open the Set’s options.
Available Options for a Set.
Select the *Upload to Cloud* entry from the menu, then press the wheel to confirm. The entry will temporarily change to “Uploading.” Once the upload is complete, a confirmation message will appear on the display.
If eight Sets are already stored in Cloud, a message will appear to inform you that the upload limit has been reached. To proceed with new uploads, [remove one or more Sets from Cloud](https://www.ableton.com/en/move/manual/#removing-a-set-from-cloud).
The Upload Limit Has Been Reached.
Move must be connected to Wi-Fi to upload Sets. If Wi-Fi is turned off, uploads will begin automatically once a connection is available. If you later disconnect from Wi-Fi or deactivate Cloud, any Sets that have already been synced will remain in the Set Overview.
### 4.3.2 Removing a Set from Cloud
To remove a Set from Cloud, hold the Shift button, press the pad for the Set, select *Make Local* from the menu, and press the wheel to confirm.
Remove a Set from Cloud.
This removes the Set from other Cloud-enabled devices, but retains a local copy in the Set Overview.
Alternatively, you can make a synced Set local by holding the Delete button and pressing the Set’s pad. A confirmation message will appear on the display.
Press a Set’s Pad Again to Remove the Set from Cloud.
Press the pad again to confirm and remove the Set from Cloud.
### 4.3.3 Working with Synced Sets Across Multiple Devices
Synced Sets stay up to date between Note and Move as you make changes from either product, as long as all Cloud-enabled devices are connected to Wi-Fi. Move supports a maximum of four tracks, so only the first four tracks from synced Note Sets will be available on Move.
Only Four Tracks Can Be Loaded on Move.
If a synced Set is updated on another device while it’s open on Move, the Set will close automatically and a message will appear indicating that it has been updated.
The Currently Open Set Was Updated on Another Device.
If a synced Set is deleted on another device while it’s open on Move, the Set will be closed and removed from the Set Overview. A message will appear informing you that the Set has been deleted.
The Currently Open Set Was Deleted on Another Device.
You can open synced Sets in [Live](https://www.ableton.com/en/live-manual/12/working-with-the-browser/#using-ableton-cloud) (version 11.2.5 and later) or on Push to continue developing them.
# 5. Navigating Between Set Modes
Move has three main modes for working with Sets: the Set Overview, Note Mode, and Session Mode.
The [*Set Overview*](https://www.ableton.com/en/move/manual/#set-overview) contains all of your Sets. Here you can switch between Sets, create a new Set, copy or delete Sets, upload or remove Sets from [Ableton Cloud](https://www.ableton.com/en/move/manual/#using-ableton-cloud-on-move), or change the color for a Set’s corresponding pad.
The Set Overview is opened when Move is first powered on, but you can access it from the other modes by holding Shift and then pressing Step 1.
Hold Shift and Press Step 1 to Access the Set Overview.
[*Note Mode*](https://www.ableton.com/en/move/manual/#note-mode) is where you can build up a Set. In this mode you can record, capture, and edit clips, play and sequence notes, as well as adjust various clip and note settings. You can also browse and adjust Track Presets to customize the devices in a Set.
[*Session Mode*](https://www.ableton.com/en/move/manual/#session-mode) lets you arrange, copy, and launch clips, as well as adjust two global effects for a Set. Session Mode is ideal for sorting clips and performing.
To switch between Note and Session Mode, use the Note/Session toggle to the left of the track buttons. A message on the display will indicate that you have changed modes.
The Note/Session Toggle.
When the Set Overview is open, you can use the toggle to switch to Session Mode for the selected Set, or press any of the track buttons or the Back button to enter Note Mode.
You can hold the Note/Session toggle to briefly preview the other available mode without switching to it.
Press the Back button to return to the previously opened mode from the Set Overview. For example, if Note Mode was opened before you switched to the Set Overview, pressing the Back button will reopen that mode.
The Back Button.
# 6. Set Overview
The *Set Overview* is shown when Move is first powered on and contains all of your Sets, including four Demo Sets and any [Cloud-synced Sets](https://www.ableton.com/en/move/manual/#using-ableton-cloud-on-move).
Sets are Stored in the Set Overview.
You can save up to 32 Sets on Move. Each pad in the Set Overview functions as a slot where a Set can be created and stored.
Sets are automatically saved as you make music, when you enter the Set Overview, and when you shut Move down.
The colors of the pads indicate the following:
- Colored pads represent existing Sets.
- A pulsing pad specifies the currently selected Set.
- Unlit pads indicate an empty slot where a new Set can be created.
- A white pad specifies that an empty slot is selected.

## 6.1 Set Options in the Overview
Press a pad to select a Set. You can then press the Play button to preview the selected Set. To audition all of your Sets, press Play and select each pad in turn.
To adjust the volume of a Set, hold the Set’s pad and turn the Volume encoder located at the top right corner of the hardware.
The Volume Encoder.
When you change the Set volume, all [four track volumes](https://www.ableton.com/en/move/manual/#mixing) within the Set are adjusted simultaneously. This lets you balance the volume between your Sets when previewing them in the Set Overview if needed.
Adjusting the Set Volume.
Alternatively, you can turn the Volume encoder without pressing a pad to adjust the overall output level without affecting a Set’s track volumes.
### 6.1.1 Creating New Sets
To create a new Set, press an empty pad, then press any of the track buttons to the left of the pads to enter [Note Mode](https://www.ableton.com/en/move/manual/#note-mode), where you can start [adding notes](https://www.ableton.com/en/move/manual/#playing-and-sequencing-notes) and [adjusting presets](https://www.ableton.com/en/move/manual/#using-instruments-and-effects).
Press an Empty Pad and Then Enter Note Mode to Create a New Set.Use the Track Buttons to Open Note Mode from the Set Overview.
Newly created Sets are populated with four random [Track Presets](https://www.ableton.com/en/move/manual/#track-presets):
- A Drums preset is added to the top track.
- A Bass preset is added to the second track.
- A Pad, Synth Keys, Plucked, or Rhythmic preset is added to the third track.
- A Synth Lead or Winds preset is added to the bottom track.

These presets can be customized and [swapped out](https://www.ableton.com/en/move/manual/#browsing-and-swapping-presets) as needed.
### 6.1.2 Changing a Pad’s Color
When a new Set is created, its corresponding pad is assigned a random color in the Set Overview. To select a different color, hold the Shift button and press the Set’s pad. On the display, you will see the Color entry. Press the wheel to select the entry, then turn the wheel to choose a color. As you browse through the colors, the pad LED updates instantly, allowing you to see the selected color immediately. Press the Back button to return to the Set Overview.
Changing a Pad’s Color.
### 6.1.3 Ableton Cloud Options in the Overview
You can also hold Shift and press a pad to access the [Ableton Cloud](https://www.ableton.com/en/move/manual/#using-ableton-cloud-on-move) options for the Set.
If Cloud isn’t yet enabled on Move, you can select the Cloud Off entry to view the hostname for Move Manager, where you can [activate Cloud](https://www.ableton.com/en/move/manual/#activating-ableton-cloud-on-move).
Activate Cloud via Move Manager.
If Cloud is enabled, you can use the Upload to Cloud entry to sync a Set, or select the Make Local entry to remove a synced Set from Ableton Cloud while keeping a local copy on Move.
### 6.1.4 Copying Sets
To copy a Set to another pad, hold the Copy button and press the pad you want to duplicate.
The Copy Button.
Then press the pad where you want to paste the Set.
Copying a Set to Another Pad.
If you select a pad that already contains a Set, a confirmation message will appear on the display. Press the pad again to confirm and paste the Set into the new slot. Note that overwriting a Set in this way cannot be undone.
Copied Sets are renamed based on the original Set name. If needed, you can manually [rename Sets in Move Manager](https://www.ableton.com/en/move/manual/#renaming-a-set).
If you start copying a Set and want to cancel the process before pasting, you can press the Copy button again to clear the clipboard.
### 6.1.5 Deleting Sets
You can delete a Set by holding the Delete button and pressing the pad that contains the Set you want to remove.
The Delete Button.
A confirmation message will be shown on the display. Press the pad a second time to confirm and delete the Set. Note that it is not possible to restore deleted Sets.
Deleting a Set.
When deleting synced Sets, a confirmation message appears on the display asking you to first confirm the removal of the Set from Cloud. After pressing the pad to confirm, press the pad again to delete the local copy.
You can also [delete Sets](https://www.ableton.com/en/move/manual/#deleting-a-set-from-move-manager) in Move Manager.
# 7. Using Instruments and Effects
In Note Mode, you can press one of the track buttons to access that track’s devices in the *Device View*. Each track is preloaded with a random [*Track Preset*](https://www.ableton.com/en/move/manual/#track-presets). You can start playing the pads right away or adjust and [swap out presets](https://www.ableton.com/en/move/manual/#browsing-and-swapping-presets) as needed.
A Track Preset in the Device View.
## 7.1 Track Presets
Each Track Preset includes an instrument plus two audio effects. You can create your own personalized sounds by swapping presets and adjusting or [automating](https://www.ableton.com/en/move/manual/#recording-automation) the device parameters with the encoders.
Track Presets contain one of the following instruments:
Instrument Icons on Move.
- Drift — a synthesizer based on subtractive synthesis.
- Drum Rack — offers 16 pads in total. Each pad contains a Drum Sampler instrument, one audio effect send, and one audio effect for the entire Rack.
- Melodic Sampler — repitches a sample across the pads.
- Wavetable — a synthesizer that uses wavetable-based oscillators.

Two of the following effects are also included in Track Presets:
Audio Effect Icons on Move.
- Auto Filter — a classic analog-style filter with LFO and envelope modulation.
- Channel EQ — a basic equalizer.
- Chorus-Ensemble — a chorus effect with Chorus, Ensemble, and Vibrato modes.
- Delay — a delay effect with time and filter modulation.
- Dynamics — a combined compressor and EQ effect.
- Phaser-Flanger — a phaser effect with Doubler, Flanger, and Phaser modes.
- Redux — a bit crusher with jitter and filter modulation.
- Reverb — an algorithmic reverb that simulates how sounds echo in an acoustic space.
- Saturator — a waveshaping effect with several shaper curves and color modulation.

The icons in the Device View represent the devices in the Track Preset. Synthesizer-based Track Presets have three icons, while sampler-based Track Presets have four icons. The extra icon represents the sample.
A Drum Rack Track Preset in the Device View.
The icons can be used to navigate to the browser, where you can [swap out presets](https://www.ableton.com/en/move/manual/#browsing-and-swapping-presets).
To move between the devices within a Track Preset, turn the wheel left or right. The selected device determines which parameters are shown on the display when the encoders are adjusted. The encoders are mapped to essential sound-shaping parameters, which vary between instruments and effects.
The Instrument Parameters for the Dark Poly Pad Track Preset.The Effect Parameters for a Chorus-Ensemble Preset.
In Drum Racks, each pad contains a Drum Sampler instrument, which has two parameter banks: Main Bank and Filter & Setup.
The Main Bank Parameters for Drum Sampler.The Filter & Setup Parameters for Drum Sampler.
Track Presets that use the Melodic Sampler instrument also have two parameter banks: Main Bank and Setup. Like Drum Sampler, the Melodic Sampler’s Main Bank contains eight parameters, while Setup only contains two parameters.
The Main Bank Parameters for the Melodic Sampler.The Setup Parameters for the Melodic Sampler.
By default, Main Bank is shown when a sample is selected in the Parameter Banks View. To access Filter & Setup for Drum Sampler or Setup for the Melodic Sampler, select the sample by navigating to its icon using the wheel. Then hold Shift and press the wheel to access the banks.
You can turn the wheel left or right to switch between banks.
Switching Between Banks for Drum Sampler.
You can read more about the individual sample parameters and their functions in the [Sampling](https://www.ableton.com/en/move/manual/#sampling) chapter.
After you’ve finished adjusting the parameters, use the Back button to the left of the Note/Session toggle to return to the Device View.
The Back Button.
## 7.2 Browsing and Swapping Presets
You can access the browser from the Device View. To do so, select either a Track Preset or one of its individual devices with the wheel. A highlight will indicate your selection as you turn the wheel left or right. For example, when a Track Preset is selected, all icons are highlighted, and the preset name is shown on the display.
A Selected Track Preset.
When a sample or effect is selected, only its corresponding icon is highlighted, and the sample or effect name is displayed.
A Selected Sample and a Selected Effect.
Once an item is selected, press the wheel to access the browser. If a Track Preset is selected, the browser will open to the corresponding preset [category](https://www.ableton.com/en/move/manual/#browser-categories), e.g., Pad, Strings, or Drums. If an effect is selected, the browser will display the effect’s set of presets. If a sample is selected, the browser will open to the corresponding sample category, e.g., Kick, Clap, or Snare.
You can turn the wheel to browse through presets, which will be [automatically loaded](https://www.ableton.com/en/move/manual/#autoload) into the track. This means you can play the pads or a clip when browsing to hear the updated sound.
To view all preset categories, navigate to the top of the current list using the wheel until you see the < Back entry, then press the wheel to go to the main list of categories.
Navigating to the Main List of Categories.
You can also use the Back button to navigate to the main presets list from within a subfolder. Once you reach the main list, pressing the Back button again will return you to the Device View.
There are a few helpful icons next to specific browser items:
- An arrow icon indicates that you can navigate to another folder or subfolder via that entry.
- An instrument icon specifies the type of instrument used in a Track Preset.
- An effect icon shows the effect category you are currently browsing.
- A sample icon signifies that you are browsing a folder of samples.

The pad and encoder LEDs indicate the type of item being browsed:
- All pad LEDs pulse when browsing Track Presets.
- All encoder LEDs pulse when browsing effects.
- The corresponding pad LED pulses when browsing samples in Drum Racks.
- The left and right columns of pad LEDs pulse when browsing samples for Melodic Sampler presets in [In-Key Mode](https://www.ableton.com/en/move/manual/#pad-layouts-keys-and-scales).
- The root note pad LEDs pulse when browsing samples for Melodic Sampler presets in [Chromatic Mode](https://www.ableton.com/en/move/manual/#pad-layouts-keys-and-scales).

To exit the browser and return to the Device View, you can press the wheel when a preset is selected, press or hold the Back button, or press a track button.
Note that Live Packs cannot be installed on Move, therefore it is not possible to access samples or presets from Packs in Move’s browser.
### 7.2.1 Browser Categories
The browser is organized into various instrument and effects categories, along with a few specialized categories:
*Templates*
The Templates folder contains template presets that serve as starting points for creating sounds from scratch. Like Track Presets, template presets contain one instrument and two effects.
Template presets starting with “Analog” are based on the Drift instrument, while presets starting with “FM” and “WT” are based on the Wavetable instrument. The Sampler template preset contains an empty Melodic Sampler.
There are also three Drum Rack template presets:
- Drum Kit — the default empty Drum Rack. This template preset works best for one shot samples.
- Choke Kit — an empty Drum Rack with the Rack’s choke group enabled. A sample will play until the next one is triggered. Use this template preset to cut off long samples by triggering other pads.
- Gate Kit — an empty Drum Rack with the gate envelope mode enabled for all pads. A sample will play for as long as the pad/note is held. This template preset also works well for longer samples.

*User Presets*
The User Presets folder contains all the presets that have been created and saved on Move or [uploaded via Move Manager](https://www.ableton.com/en/move/manual/#presets-page).
*User Recordings*
The User Recordings folder contains all the audio files you have [recorded](https://www.ableton.com/en/move/manual/#sampling) on Move.
*User Samples*
The User Samples folder contains all the samples you have [uploaded](https://www.ableton.com/en/move/manual/#uploading-samples-and-sample-folders) via Move Manager and is accessible when browsing samples for the Melodic or Drum Sampler instruments.
### 7.2.2 Autoload
Autoload is enabled for Sets in the [Workflow Settings](https://www.ableton.com/en/move/manual/#workflow-settings) menu by default. This means that presets are automatically loaded when browsing.
You can move between presets using the wheel while the browser is open, then play the pads or a clip to test out the new sound. If you load a preset but then decide to return to the previous device, use the Undo button.
The Undo Button.
To turn Autoload off, hold Shift and then press Step 3 to access the Workflow Settings.
Hold Shift and Press Step 3 to Access the Workflow Settings.
Use the wheel to navigate to the Autoload On entry and then press the wheel to switch to Autoload Off. When Autoload is off, you can load selected presets in the browser by pressing the wheel.
## 7.3 Saving Presets
If you adjust an instrument or effect preset to your liking and want to reuse those exact settings, you can save the customized device to the User Presets folder within the browser.
To do so, first select the preset you want to save in the Device View using the wheel. Next, press the wheel to enter the browser, then hold Shift to access the Options submenu. Press the wheel to open the submenu, select the *Save Preset* entry using the wheel, and press again to confirm.
Saving a Preset.
The new preset is saved to the User Presets folder, and will also be available in the [Presets page](https://www.ableton.com/en/move/manual/#presets-page) when Move is connected to Move Manager.
The User Presets Folder in the Browser.
User presets are automatically named after the device that was used to create them but can be [renamed](https://www.ableton.com/en/move/manual/#presets-page) in Move Manager as needed, as well as deleted.
# 8. Note Mode
You can build up a Set in Note Mode by [playing and sequencing notes](https://www.ableton.com/en/move/manual/#playing-and-sequencing-notes), [recording and capturing notes](https://www.ableton.com/en/move/manual/#recording-and-capturing), editing [notes](https://www.ableton.com/en/move/manual/#editing-notes-and-steps) and [clips](https://www.ableton.com/en/move/manual/#editing-clips), and more.
To enter Note Mode from another mode, press any of the track buttons to the left of the pads.
Press a Track Button to Enter Note Mode.
You can also press the Note/Session toggle to access Note Mode from Session Mode.
The Note/Session Toggle.
# 9. Playing and Sequencing Notes
You can use different pad layouts depending on which type of Track Preset is loaded onto the selected track.
When using Drums Track Presets, you can use the 16 pads on the left to play or sequence the Drum Rack’s individual samples.
Use the 16 Drum Rack Pads for Drums Track Presets.
Additionally, you can enable the [16 Pitches](https://www.ableton.com/en/move/manual/#16-pitches-layout) layout to play or sequence samples melodically on the 16 pads to the right of the Drum Rack’s pads.
For melodic instrument Track Presets, all 32 pads can be used to play or sequence individual note pitches in either the [In-Key or Chromatic Mode](https://www.ableton.com/en/move/manual/#pad-layouts-keys-and-scales).
Use all 32 Pads for Melodic Instrument Track Presets.
## 9.1 Pad Layouts, Keys, and Scales
When using melodic instruments, there are two modes to choose from: *In-Key* and *Chromatic*. In-Key displays only the notes within the selected scale, while Chromatic displays all notes, regardless of the chosen scale.
By default, the mode is set to In-Key in the C Major scale, with notes arranged by octaves. The Keys & Scales menu offers additional options for customizing the layout. You can arrange notes by 4ths instead of octaves, switch to the Chromatic Mode, or select a different key or scale. To open the Keys & Scales menu, hold Shift and press Step 9.
Hold Shift and Press Step 9 To Access the Keys & Scales Menu.
Use the wheel to scroll through the menu entries, and press the wheel to make or confirm a selection.
You can select the In-Key or Chromatic Mode via the first menu entry.
Press the Wheel to Select a Mode for the Pad Layout.
In-Key Mode arranges notes by octaves or 4ths. Use the corresponding menu entry to toggle between these layouts.
The Octaves and 4ths Layouts.
When Octaves is selected, each row of pads represents an octave, with the root note indicated by pad LEDs in the track’s color. The other notes are indicated by light gray pad LEDs. Only notes within the selected scale are displayed.
In-Key Mode’s Octaves Layout.
If the selected scale contains more than eight notes, it will be truncated, and any notes beyond the eighth will not be shown on the pads. For scales with fewer than eight notes, the following octave will start on the same row as the preceding octave until the row is filled.
The Octaves Layout for a Pentatonic Scale.
When 4ths is selected, each pad directly above another represents a note a perfect fourth higher, while each pad to the right of another represents the next scale degree. Pad LEDs for the root note use the track’s color, while the other notes are indicated by light gray pad LEDs. Only notes within the selected scale are displayed.
In-Key Mode’s 4ths Layout.
Chromatic Mode arranges notes in rows resembling a guitar fretboard. A pad directly above another represents a note five semitones higher, corresponding to a perfect fourth. A pad to the right of another represents a note one semitone higher. Pad LEDs for the root note use the track’s color. Notes within the selected scale are indicated by light gray pad LEDs, while pad LEDs for notes outside the scale are unlit.
The Chromatic Mode.
The second menu entry lets you pick a key, which determines the root note of the scale. You can use the third entry to choose the scale.
Select a Key and Scale Using the Wheel.
When you are done selecting the layout, key, or scale, press the Back button to return to the Device View, or hold Shift and press Step 5.
Note that changing the key or scale will not transpose any existing notes; it will only update the notes available on the pads. The selected scale settings are saved with the Set.
## 9.2 16 Pitches Layout
When using Drums Track Presets, you can enable the *16 Pitches* layout to play a sample melodically across the 16 pads to the right of the Drum Rack pads. Hold Shift and press Step 8 to enable the 16 Pitches layout.
Hold Shift and Press Step 8 to Toggle the 16 Pitches Layout On or Off.
Once enabled, you can select a sample in the Drum Rack by pressing its pad, then press any of the 16 pads on the right to play the sample in various pitches.
The 16 Pitches Layout.
The pitches can be displayed in either the [In-Key or Chromatic Mode](https://www.ableton.com/en/move/manual/#pad-layouts-keys-and-scales).
A sample’s pitch cannot be detected, so all samples are transposed as if their pitch is C. If a sample has a different pitch, the 16 Pitches pads might play notes differently than expected. For example, if a sample’s pitch is E, the root note pads will play that pitch when the key is set to C, not E. If you want to use a different key, you can manually transpose the sample’s pitch accordingly. For example, when the key is set to E, you can lower the sample’s pitch by four semitones using the [transpose parameter](https://www.ableton.com/en/move/manual/#adjusting-sample-parameters). Once transposed, the root note pads will play E, instead of G#, which is the pitch used when the sample is not transposed.
The pad LEDs for the root note use the track’s color, while the pad LEDs for notes within the selected scale use a light gray color. When using Chromatic Mode, pad LEDs for notes outside the selected scale are unlit.
You can use the plus and minus buttons to change the octave range for the pitches.
Use the Plus and Minus Buttons to Change the Octave Range.
Notes from the 16 Pitches layout can be played, sequenced, recorded, and captured just like notes from any other pad layout. You can also sequence notes by holding a step and then pressing any of the pads in the 16 Pitches layout.
To transpose individual notes added from the 16 Pitches layout, hold a step and use the plus and minus buttons.
## 9.3 Full Velocity
Move’s pads are velocity-sensitive, so playing the pads softly results in lower velocity values, while pressing them harder produces higher velocity values. However, you can switch off this behavior to only play notes at the maximum velocity (i.e., a velocity value of 127). To do so, hold Shift and press Step 10.
Hold Shift and Press Step 10 to Toggle Full Velocity On or Off.
## 9.4 Expressive Playing with Polyphonic Aftertouch
All of the pads are independently pressure-sensitive; this behavior is referred to as *Polyphonic Aftertouch*. Drift and Wavetable support this type of aftertouch. This means you can play and hold chords with varying levels of pressure to modulate each note’s sound individually when using certain Track Presets.
Note that Move does not support Channel Aftertouch, where the pressure applied to one pad affects all pads simultaneously.
## 9.5 Sequencing Notes
The step buttons can be used to sequence notes and edit steps. By default, the [step grid resolution](https://www.ableton.com/en/move/manual/#step-grid) is set to 1/16 so that each step button represents a sixteenth note division. The line under the Step 1, 5, 9, and 13 LEDs indicates the start of each beat. This means that Step 1 corresponds to the first beat in a bar.
The Step Buttons.
You can [move between bars](https://www.ableton.com/en/move/manual/#loop-length) using the left and right arrow buttons.
The Left and Right Arrow Buttons.
To sequence notes, press a pad, then press a step button to insert a note within the bar. Alternatively, you can press and hold a step button, then press a pad. If the Play button hasn’t been pressed, transport will begin immediately once a note is added in an empty clip for the first time.
Transport Begins When Notes Are First Sequenced.
To remove a note from a step, briefly press the respective step button.
The step button LEDs indicate the following:
- A white step button LED indicates that the step contains a note or multiple notes.
- A dimly lit step button LED in the track’s color represents an empty step within the bar.
- Dimly lit gray step button LEDs indicate an empty clip or a bar outside of the existing loop length.
- A green step button LED shows the current play position during playback.

When sequencing Drum Rack or 16 Pitches pads, only the notes for the selected sample are shown on the step buttons.
When sequencing melodic instruments, all notes are shown on the step buttons, regardless of pitch. You can add multiple notes to the same step by pressing several pads simultaneously and then pressing a step button. This is useful for sequencing chords.
By default, step sequencing notes [creates a new clip](https://www.ableton.com/en/move/manual/#creating-new-clips) in the track’s first empty clip slot. To add notes to a different clip, press a pad for an existing clip or an empty clip slot in [Session Mode](https://www.ableton.com/en/move/manual/#session-mode) to access the bars for that clip on the step buttons in Note Mode. You can, for example, create a pattern of sequenced notes across multiple clips, which can then be triggered in Session Mode.
Check out the [Editing Notes and Steps](https://www.ableton.com/en/move/manual/#editing-notes-and-steps) chapter to learn about the various ways you can adjust notes and steps.
# 10. Tempo, Groove, and Metronome Settings
You can adjust the tempo and groove for a Set, as well as play or record with a metronome.
## 10.1 Tempo
To set the tempo for a Set, hold the Shift button and press Step 5 to access the Tempo setting.
Hold Shift and Press Step 5 to Access the Tempo Setting.
You can turn the wheel to adjust the tempo. To change the value in fine increments, hold Shift while turning the wheel. When you are done, press the wheel to confirm.
Use the Wheel to Set the Tempo.
Note that if you [capture](https://www.ableton.com/en/move/manual/#capturing-notes-and-automation) a clip while the transport is stopped, the tempo will automatically be set based on the tempo of your playing.
## 10.2 Groove
You can apply a triplet 16th swing groove to the entire Set by holding Shift and pressing Step 7 to access the Groove setting.
Hold Shift and Press Step 7 to Set the Groove Amount.
Use the wheel to adjust the groove amount. You can hold Shift while turning the wheel to change the amount in fine increments. At 0%, no groove is applied; at 100% a perfect triplet 16th swing is applied. Values above 100% exaggerate the timing of the groove beyond a triplet 16th swing.
Once you set the groove amount, press the wheel to confirm the change and return to the Device View. The groove icon will remain displayed beneath the seventh step button to indicate that a groove is being applied to the Set.
## 10.3 Metronome
To play or record with a metronome, hold Shift and press Step 6 to access the Metronome setting.
Hold Shift and Press Step 6 to Access the Metronome Setting.
This also switches the metronome on. When you are done playing or recording, you can hold Shift and press Step 6 again to turn the metronome off.
# 11. Editing Notes and Steps
Different note properties, such as velocity, start position, pitch, and length, can be adjusted in Note Mode. You can press and hold multiple steps to adjust the properties for several notes simultaneously.
## 11.1 Velocity
To change a note’s velocity, hold down the corresponding step button, then turn the Volume encoder located at the top right corner of the hardware.
Hold a Step and Turn the Volume Encoder to Adjust the Velocity.
## 11.2 Note Transposition
When using melodic instruments, you can transpose a note by holding the corresponding step button and pressing the plus or minus button to raise or lower the note’s pitch by a semitone, respectively.
Hold a Step and Use the Plus or Minus Button to Transpose Note Pitches.
To transpose a note by an octave, long press the plus or minus button.
You can hold multiple steps and then use the plus or minus button to transpose several notes at the same time.
## 11.3 Note Length
The length of a note can be adjusted by holding down the corresponding step button and turning the wheel. Turn the wheel to the right to lengthen the note, or to the left to shorten the note. Each click of the wheel changes the note length by 10% of a single step’s duration.
Hold a Step and Turn the Wheel to Adjust the Note Length.
As you lengthen the note, the step button LEDs of any steps now covered by the note will become brighter. If the step contains multiple notes, the length of each note will be adjusted simultaneously.
Note lengths cannot be extended beyond the next step that contains a note when lengthening notes for Drum Rack steps or melodic instrument steps that use the same note.
You can adjust the note length for individual notes, or hold multiple steps to set a new length for several notes simultaneously. When changing the note length for multiple notes, a range will be shown on the display if the selected steps contain notes with different lengths.
A Range is Shown for Varying Note Lengths.
## 11.4 Note Nudge
To nudge notes within a bar or between bars, hold down the corresponding step, then press the left or right arrow button.
Hold a Step and Press the Left or Right Arrow Buttons to Nudge.
Each press of the left or right arrow button nudges the note to the left or right by 10% of a single step’s duration. Hold Shift while pressing an arrow button to nudge the note by 1% of a step’s duration. To nudge the note by a full step, long press the left or right arrow button.
Long Press the Left or Right Arrow Buttons to Nudge by a Full Step.
## 11.5 Adjusting Notes in Loop Mode
In [Loop Mode](https://www.ableton.com/en/move/manual/#loop-length), you can transpose, shorten, lengthen, or nudge all the notes in a bar or clip.
Press the Loop Button to Enter Loop Mode.
Press the Loop button to enter Loop Mode, where each bar in the clip is displayed on the step buttons.
Each Bar is Displayed on the Step Buttons.
Once in Loop Mode, hold the step button for the bar you want to adjust and then:
- Turn the wheel to change the note lengths.
- Turn the Volume encoder to adjust the note velocities.
- Use the plus or minus button to transpose the note pitches.
- Use the left or right arrow button to nudge the notes.

## 11.6 Arpeggiator and Repeat
You can create note repetitions using either Repeat or Arpeggiator. Repeat can be used with both Drum Racks and melodic instruments, while Arpeggiator can only be used with melodic instruments. To access the Repeat menu, hold Shift and press Step 11.
Hold Shift and Press Step 11 to Access the Repeat Menu.
When using Drum Racks, you can turn the wheel to switch between different note repetition rates.
Use the Wheel to Change the Repeat Rate.
When using melodic instruments, you can select the Repeat entry, then press the wheel to access the Repeat Style options. Turn the wheel to select Repeat, Arp Up, Arp Down, or Arp Random, then press the wheel again to confirm your selection.
Use the Wheel to Select a Repeat Style.
You can change the repeat rate via the Rate entry.
Turn the Wheel to Adjust the Repeat Rate.
Once any repeated notes are [recorded](https://www.ableton.com/en/move/manual/#recording-notes) or [captured](https://www.ableton.com/en/move/manual/#capturing-notes-and-automation), they will be added to the respective step buttons.
To exit the Repeat menu, hold Shift and press Step 11.
## 11.7 Quantizing Notes
You can quantize notes to align them with a musical grid by holding Shift and then pressing Step 16. This is useful for correcting notes that were not recorded or captured perfectly on beat.
Hold Shift and Press Step 16 to Quantize Notes.
The notes in the clip will shift according to the quantization amount set in the Workflow Settings’ [Quantize](https://www.ableton.com/en/move/manual/#quantize) entry.
## 11.8 Copying Notes and Step Ranges
You can copy and paste the notes and [automation](https://www.ableton.com/en/move/manual/#recording-automation) from one step to another using the Copy button.
The Copy Button.
To do so, hold the Copy button and press the step button you want to copy. Then, release the Copy button and press the step button where you want to paste the notes.
Use the Copy Button to Copy Notes from One Step to Another.
You can also copy and paste notes from a range of steps. To do so, hold the Copy button, press and hold the step where you want the range to start, then press the step where you want it to end. Next, release the Copy button and the held step, then press the step button where you want the copied notes to start; the notes will then be pasted in sequence, starting with the first copied step. Any empty steps between the copied ones will also be included in the sequence.
Notes can be copied and pasted between tracks, clips, and Sets. It is also possible to copy notes from the steps in Note Mode into the bars in [Loop Mode](https://www.ableton.com/en/move/manual/#loop-length), as well as copy and paste the bars within Loop Mode.
If you start copying notes and want to cancel the process before pasting, you can press the Copy button again to clear the clipboard.
## 11.9 Adding or Removing Multiple Notes from Steps
When editing notes for melodic instruments, you can hold down a step to see the corresponding notes on the pads, indicated by white pad LEDs.
Hold a Step to See its Corresponding Notes on the Pads.
You can add or remove notes from a step by pressing the corresponding pads while holding the step button. This is particularly useful for adjusting chords. To remove all the notes in a step, simply press the respective step button.
In [Loop Mode](https://www.ableton.com/en/move/manual/#loop-length), you can add a note to every step in a bar by holding a step to select the bar, then pressing a pad to add the corresponding note to all steps within that bar. To add multiple notes to each step, press several pads while holding the step button.
# 12. Editing Clips
In Note Mode, you can set the loop length for clips, double the loop, or duplicate clips. Clips can also be deleted as needed.
## 12.1 Loop Length
Once a clip has been [recorded](https://www.ableton.com/en/move/manual/#recording-notes) or [captured](https://www.ableton.com/en/move/manual/#capturing-notes-and-automation), the loop length is shown beneath the Track Preset name at the bottom of the display.
The Loop Length for a Clip.
Each line represents a bar, and its state can vary depending on where it is in the loop:
- A thick line specifies that the bar is selected and part of the loop. Note that if a loop contains only one bar, a thin line is displayed instead.
- A thin line indicates that the bar is part of the loop but not selected.
- A plus icon signifies that the bar is outside of the loop.

During playback, a vertical line moves across the bars to indicate the current play position.
You can use the left and right arrow buttons to navigate between bars. A message will appear on the display to specify which bar you have moved to.
Use the Left and Right Arrow Buttons to Move Between Bars.The Currently Selected Bar Will Be Shown on the Display.
When a bar is selected, its notes are displayed on the step buttons. You can [edit](https://www.ableton.com/en/move/manual/#editing-notes-and-steps) or [remove](https://www.ableton.com/en/move/manual/#deleting-clips-and-notes) notes from a bar as needed.
If you navigate beyond the existing bars in the loop, an empty bar will be displayed, indicated by a plus symbol.
An Empty Bar.
To keep this extra bar as part of the loop, add notes to it using the step buttons. Alternatively, you can use the left arrow button to go back to the original loop length.
You can also change the length of a loop by pressing the Loop button to enter *Loop Mode*.
Press the Loop Button to Enter Loop Mode.
In Loop Mode, each bar in the clip is displayed on the step buttons, with a maximum clip length of 16 bars.
Each Bar is Displayed on the Step Buttons.
The step button LEDs indicate the following:
- White - the bar is selected.
- The track’s color - the bar is within the clip.
- Dimly lit - an empty bar outside of the loop.

To change the loop length, simultaneously press the step buttons where you want the clip to start and to end. Alternatively, you can press and hold the step where you want the clip to start, then press the step where you want the clip to end. To set the loop length to one bar only, quickly press its corresponding step button twice.
You can also adjust the loop length by holding the Loop button and turning the wheel to the left or right to shorten or lengthen the clip, respectively. To adjust the length in fine increments, hold Shift while turning the wheel.
Adjust the Loop Length with the Wheel.
## 12.2 Doubling the Loop
You can double an existing loop, including its notes and automation, using the dedicated *Double Loop* command. Hold Shift and press Step 15 to double the loop.
Hold Shift and Press Step 15 to Double the Loop.A Doubled Loop.
## 12.3 Duplicating Clips
You can duplicate the currently selected clip in a track by pressing the Copy button.
The Copy Button.
A confirmation message is shown on the display to indicate that the clip has been duplicated.
The Confirmation Message for a Duplicated Clip.
The duplicated clip then becomes the currently selected clip.
## 12.4 Deleting Clips and Notes
To delete the currently playing clip in a selected track, press the Delete button.
The Delete Button.
If you want to delete all the notes for a specific Drum Rack pad, hold the Delete button and press the respective pad.
In [Loop Mode](https://www.ableton.com/en/move/manual/#loop-length), you can delete the current clip by pressing the Delete button, or you can hold the Delete button and press a step button to delete all the notes in the corresponding bar.
You can remove individual notes by pressing their corresponding step buttons.
# 13. Workflow Settings
You can hold Shift and press Step 3 to access the *Workflow Settings* menu, where you can adjust the quantization amount and set the step grid resolution, as well as switch the [recording count-in](https://www.ableton.com/en/move/manual/#recording-with-count-in-and-metronome) and [Autoload](https://www.ableton.com/en/move/manual/#autoload) off or on.
Hold Shift and Press Step 3 to Access the Workflow Settings Menu.
## 13.1 Quantize
Press the wheel to select the *Quantize* entry and then turn the wheel to adjust the quantization amount.
Use the Quantize Entry to Adjust the Quantization.
This amount determines how much quantization is applied to notes when they are [quantized](https://www.ableton.com/en/move/manual/#quantizing-notes).
## 13.2 Step Grid
The *Step Grid* entry lets you select a step grid resolution that determines how a bar is divided into steps. You can press the wheel to select the entry, then turn the wheel to set the step grid resolution.
Use the Step Grid Entry to Set the Step Grid Resolution.
The default setting is 1/16, which divides a bar into 16 steps, so that the entire bar can be accessed at once on the step buttons. This means that each step button represents a sixteenth note division.
When the step grid resolution denominator is set to a number above 16, the bar is divided across multiple pages of steps, which you can navigate using the left and right arrow buttons. The current bar and page number will be shown on the display as you move between pages.
Use the Left and Right Arrow Buttons to Move Between Bar Pages.
It is also possible to set the step grid resolution in triplets, so that two “standard” steps are divided into three equal steps, effectively increasing the number of steps by a factor of 1.5. For example, when using a step grid resolution of 1/16t, one bar is divided into 24 steps across two pages, each with 12 steps.
When using triplet step grid resolutions, every fourth step is deactivated to preserve the rhythmic timing.
## 13.3 Count-In and Autoload
By default, a count-in is enabled for [recording](https://www.ableton.com/en/move/manual/#recording-with-count-in-and-metronome) via the *Count-In* entry. You can turn this off by selecting the entry, then pressing the wheel to switch to Count-In Off.
*Autoload* is also enabled by default so that you can immediately hear the changes when [browsing](https://www.ableton.com/en/move/manual/#browsing-and-swapping-presets) Track Presets. However, you can switch this off by pressing the wheel while the entry is selected. When Autoload is off, you can load selected presets in the browser by pressing the wheel.
# 14. Recording and Capturing
You can record the notes that you [play on Move’s pads](https://www.ableton.com/en/move/manual/#playing-and-sequencing-notes) or [receive from external MIDI instruments](https://www.ableton.com/en/move/manual/#connecting-midi-devices) into new clips, or into existing clips via overdubbing. It is also possible to capture notes without recording, and to [sequence notes using the step buttons](https://www.ableton.com/en/move/manual/#sequencing-notes).
Note that recording is only possible in [Note Mode](https://www.ableton.com/en/move/manual/#note-mode). You can [create new clips](https://www.ableton.com/en/move/manual/#creating-new-clips) or select clips to overdub in [Session Mode](https://www.ableton.com/en/move/manual/#session-mode).
## 14.1 Recording Notes
Move’s tracks are automatically armed in Note Mode, so you can start recording at any time. To do so, select a track using a track button, then press the Record button.
The Record Button.
Once the Record button is pressed, recording starts immediately after the [count-in](https://www.ableton.com/en/move/manual/#recording-with-count-in-and-metronome), and the transport begins. The count-in is enabled by default, but you can turn it off in the [Workflow Settings](https://www.ableton.com/en/move/manual/#workflow-settings) menu.
The Record button turns solid red when recording is in progress. When recording is possible, but not in progress, the button is dimly lit. If the Record button is unlit, recording is disabled.
To stop recording, press the Record button or switch to a different track; the transport will continue running, and you will be able to instantly hear the recorded sound. You can also stop recording by pressing the Play button, which will stop the transport as well.
When recording into an empty clip slot, the clip length will continue extending until you stop recording. The length of the clip is indicated through the increasing number of bars in the Loop Overview at the bottom of the display.
The Loop Overview.
If you stop recording during the first half of the last bar, that bar will not be included in the clip. To ensure that the last bar is included, stop recording during the second half of the last bar.
You can also create a fixed-length clip before you start recording. To do so, select an empty clip slot in [Session Mode](https://www.ableton.com/en/move/manual/#session-mode), switch to Note Mode, then press the Loop button and set the [loop length](https://www.ableton.com/en/move/manual/#loop-length) with the wheel.
The Loop Button.
Recorded notes are added to the corresponding step buttons. The step button LEDs indicate the status of the clip and its contents:
- A dimly lit white color indicates an empty clip slot.
- A track color indicates an existing clip with no notes added to the step.
- A brightly lit white color indicates that notes have been added to the step.

You can record another take by selecting an empty pad in Session Mode to [create a new clip](https://www.ableton.com/en/move/manual/#creating-new-clips), or by selecting an existing clip to overdub. Once a clip is selected, switch to Note Mode, press the Record button, and play the pads. When you finish recording, the notes will be added to the new clip or to the existing clip if overdubbing.
You can also overdub a clip by playing the pads and pressing the Capture button, or by sequencing notes using the step buttons.
### 14.1.1 Recording with Count-In and Metronome
By default, the count-in is enabled to provide an auditory cue before recording begins. After pressing the Record button, the metronome will play for one bar, and then recording will start. When recording new clips, the Record button flashes during the count-in and turns red once recording begins. When overdubbing existing clips, the Record button remains red during the count-in.
If needed, you can turn the count-in off. To do so, hold Shift and press Step 3 to open the [Workflow Settings](https://www.ableton.com/en/move/manual/#workflow-settings), then select the Count-In On option and press the wheel to turn the count-in off.
The Count-In Is Switched Off.
You can also record with the metronome. To turn the metronome on, hold Shift and press Step 6. The metronome icon appears beneath the sixth step button whenever the metronome is activated. Hold the Shift button and press Step 6 again to turn off the metronome.
The Metronome Is Enabled.
## 14.2 Recording Automation
In addition to recording notes on Move, you can also record automation, i.e., sound changes resulting from adjustments made to device or effect parameters during playback.
To record automation, select the device or effect whose parameters you want to automate using the wheel in the [Device View](https://www.ableton.com/en/move/manual/#browsing-and-swapping-presets). Then, press the Record button and adjust one or more of the encoders. The value changes are recorded as soon as you turn an encoder, indicated by a filled circle next to the parameter’s value. Additionally, the corresponding encoder’s LED will turn red.
Automation Recorded for the Filter Envelope Parameter in a Wavetable Track Preset.
You can only automate parameters for one device or effect at a time. While recording, you can use the wheel to switch between different devices and effects to automate their respective parameters.
To stop recording automation, press the Record or Play button, or switch to a different track.
### 14.2.1 Deactivating Automation
If needed, you can deactivate the recorded automation for a parameter by holding down the Mute button and tapping the corresponding encoder. A confirmation message will be shown on the display, and the automation’s inactive status will be indicated by an empty circle next to the parameter value.
Automation Has Been Deactivated.
To reactivate automation, hold the Mute button and tap the encoder again.
You can also temporarily override recorded automation by adjusting an encoder during playback. As you turn the encoder, you can freely change the parameter value. Then, release the encoder to resume the recorded automation.
### 14.2.2 Checking Automation Status
You can quickly check the automation status for device or effect parameters by holding the Mute button and looking at the LEDs below each encoder:
- An unlit LED specifies that there is no existing automation for a parameter.
- A red color indicates active automation for a parameter.
- A white color means that a parameter’s automation is deactivated.

### 14.2.3 Deleting Automation
If you want to remove automation for a parameter, hold the Delete button and tap the respective encoder.
Automation Has Been Deleted.
### 14.2.4 Per-Step Automation
You can also save automation per step, which gives you more precise control over the placement of automation in time.
To add per-step automation, select the device or effect whose parameters you want to automate in the Device View, then hold a step button which contains a note and turn one of the encoders.
Once you touch an encoder, the step button LEDs following the step you are holding will turn red, indicating the automation time range. Typically, the automation time range extends to the note in the next step.
The Per-Step Automation Time Range.
It is possible to add per-step automation to several steps at once by pressing and holding multiple step buttons and turning the encoders.
## 14.3 Capturing Notes and Automation
Since tracks are automatically armed in Note Mode, you can capture notes or automation without needing to activate recording beforehand. This is useful for improvising or if you forget to press the Record button.
You can capture material into new clips or into existing clips via overdubbing. When capturing notes, it is assumed that the first played note aligns with the start of the clip, and that all notes are meant to be included in the loop.
To capture notes in a new clip, select an empty clip slot in a track in Session Mode, switch to Note Mode, play the pads, and then press the Capture button.
The Capture Button.
Once you press the button, a new clip is created in the track, and the transport begins, allowing you to hear what was captured immediately.
If you capture notes into a new clip while the transport isn’t running, Move will detect the tempo, generate three BPM estimates, and apply one to the entire Set. The applied tempo will be shown on the display, but you can turn the wheel to choose one of the other suggested tempos if it better represents the tempo of your playing. Note that tempo estimates are not generated when capturing notes during playback or overdubbing.
New Material Was Captured at 85 BPM.
While the tempo estimates may vary, the captured notes will play back at the tempo you played, regardless of which BPM is chosen. Selecting a different tempo estimate may change the loop length, but the playback speed remains the same. This is different from setting the [tempo manually](https://www.ableton.com/en/move/manual/#tempo), which changes the playback speed of the notes but keeps their position in the loop unchanged.
You can apply a different BPM manually by holding Shift and pressing Step 5 to open the Tempo setting. Turn the wheel to adjust the value. You can hold Shift as you turn the wheel to adjust the tempo in fine increments.
The Tempo Setting.
It is also possible to capture automation. This can be done at the same time as capturing new material or when playing back existing clips. To capture automation, adjust the encoders to change the values for a device or effect parameters, then press the Capture button.
Captured notes and automation can be added to existing clips via overdubbing. To do so, play some notes or move the encoders while an existing clip is in focus. The captured material will then be added to the clip.
If you play the pads or turn the encoders but decide you don’t want the notes or parameter changes to be captured, hold Shift and press the Capture button to clear the input.
Capture Input Was Cleared.
You can also clear the input by starting and then stopping transport, or by pressing a track button. When using these methods, no message is shown on the display, but the Capture button pad LED will be unlit once the input has been cleared.
# 15. Sampling
You can use [Sampling Mode](https://www.ableton.com/en/move/manual/#sampling-mode) to sample audio from Move’s built-in microphone, audio input, or USB-C audio source, or to resample its main output to create audio recordings that can be used in Drum Sampler or the Melodic Sampler.
When sampling, the audio is recorded and saved to a pad in a single interaction. You can sample into Drum Rack pads as well as melodic pads.
## 15.1 Sampling Mode
To start sampling, select a track in Note Mode, then press the Sampling button to enter *Sampling Mode*.
The Sampling Button.
Once in Sampling Mode, the Sampling button LED pulses red, and the Sampling menu opens, with a *Press pad* prompt shown on the display. If you touch, turn, or press the wheel at this point, *Sampling* will be displayed instead of the prompt; however, this does not mean that sampling has started — you still need to press a pad to [start recording a sample](https://www.ableton.com/en/move/manual/#recording-samples).
The Sampling Menu.
You can sample into any of the 16 Drum Rack pads or any of the 32 melodic pads. Depending on the selected [Track Preset](https://www.ableton.com/en/move/manual/#track-presets) and [pad layout](https://www.ableton.com/en/move/manual/#pad-layouts-keys-and-scales), certain pad LEDs turn pink to indicate that Sampling Mode is active:
- The Drum Rack pad LEDs turn pink when using a drum-based Track Preset.
- The root note pad LEDs turn pink when using the Melodic Sampler or a synthesizer-based Track Preset with In-Key Mode or Chromatic Mode.

Sampling Mode will close automatically when you finish recording a sample. You can also exit Sampling Mode without having recorded a sample by pressing the Sampling button again, or by pressing the Back button. Sampling Mode will also close automatically if you switch to a different track or [Session Mode](https://www.ableton.com/en/move/manual/#session-mode).
## 15.2 Selecting a Sampling Input Source
Four different input sources can be used for sampling: [*Mic*, *Line in*](https://www.ableton.com/en/move/manual/#mic-and-line-in-sampling) (available when an audio source is connected to Move), [*Resampling*](https://www.ableton.com/en/move/manual/#resampling), or [*USB-C*](https://www.ableton.com/en/move/manual/#sampling-audio-via-usb-c). Move can use only one input source at a time.
You can view the current source by touching the wheel while in Sampling Mode. The source is also indicated with an icon: a microphone, rectangle with an incoming arrow, speaker, or USB-C cable for Mic, Line in, Resampling, or USB-C respectively.
The Mic Input Source Is Selected.
Depending on whether Move is connected to an audio source or not, Line in or Mic will be available as the input source. You can press the wheel to switch the input source to Resampling, which will allow you to sample Move’s main output, or to USB-C, which will let you sample audio coming into Move via USB-C. The last selected input source will be remembered and used the next time you enter Sampling Mode.
## 15.3 Recording Samples
To record a sample, press the Sampling button to enter [Sampling Mode](https://www.ableton.com/en/move/manual/#sampling-mode). Then, press the pad where you want a sample to be recorded. Recording will begin once you press the pad, indicated by the pad LED pulsing red and the *Recording…* message appearing on the display.
Recording a Sample.
Press the same pad, any other pad, or the Sampling button to stop recording and exit Sampling Mode.
Alternatively, you can hold a pad to start recording and then release it to stop recording.
You can record a sample for up to 240 seconds (four minutes). Recording will stop automatically once this limit is reached.
The recorded sample is added to the pad’s Drum Sampler or the Melodic Sampler, depending on which type of Track Preset is selected. You can press the pad you recorded into to play the sample at its original recorded pitch. When using the Melodic Sampler, you can play any of the 32 pads, and the sample will be transposed based on the selected [scale](https://www.ableton.com/en/move/manual/#pad-layouts-keys-and-scales).
Note that when sampling into melodic pads, if you load the recorded sample into a different Melodic Sampler, or reload it into the same Melodic Sampler after swapping samples in the browser, the sample’s original recorded pitch will be accessible through the C3 pad, provided that the sample’s Transpose [parameter](https://www.ableton.com/en/move/manual/#adjusting-sample-parameters) is set to 0. The original pitch of the sample cannot be detected, so all samples are transposed as if their pitch is C.
When using the C Major scale in [Chromatic Mode](https://www.ableton.com/en/move/manual/#pad-layouts-keys-and-scales), the pad that represents C3 by default is the fourth pad from the left in the bottom row.
The C3 Pad for the C Major Scale in Chromatic Mode.
If you sample into a melodic pad on a track that contains a synthesizer Track Preset, the instrument will be swapped to a Melodic Sampler once recording stops. If needed, you can revert this change by pressing the Undo button, without deleting the sample.
You can access all recorded samples in the [browser](https://www.ableton.com/en/move/manual/#browsing-and-swapping-presets) under User Recordings. Samples are named based on the current Set and the number of existing recordings for that Set. For example, if you record a sample for the first time in a Set called “Set 5,” the recording will be saved as “Set 5 Rec 1.” Note that if you [rename the Set](https://www.ableton.com/en/move/manual/#renaming-a-set), this will not update the sample name.
You can rename, download, or delete samples on Move Manager’s [Recordings page](https://www.ableton.com/en/move/manual/#recordings-page).
## 15.4 Mic and Line In Sampling
When you select Mic or Line in as the input source for sampling, there are additional options visible on the display, which allow you to adjust the input gain or turn monitoring on or off.
### 15.4.1 Adjusting Sampling Input Gain
To adjust the input gain for the Mic or Line in input source, turn the wheel to select the input levels icon, then press the wheel to open the *Gain* option and turn the wheel to adjust the level.
Adjusting the Input Gain.
### 15.4.2 Turning Monitoring On or Off
If an audio device is plugged into Move’s audio input or output, an option to turn monitoring on or off, represented by a headphones icon, becomes available in the Sampling menu. Press the wheel to choose between *Monitoring Off* and *Monitoring On*.
Monitoring Is Switched On.
By default, if an audio device is connected to Move’s audio output port, the option is set to Monitoring Off. If an audio device is connected to the input port, the option is set to Monitoring On.
Note: If the option is set to Monitoring On, monitoring will continue to be active even when you exit Sampling Mode, as long as the audio device is still connected.
## 15.5 Resampling
When *Resampling* is selected as the input source, you can sample Move’s overall output.
Resampling.
To start resampling, press the pad where you want a sample to be recorded. If the transport isn’t running, playback will start as soon as you press the pad to start resampling. This allows you to sync the beginning of the recorded sample with the start of playback.
## 15.6 Sampling Audio via USB-C
With USB-C selected as the input source, you can sample audio via USB-C from a connected computer, smartphone, or tablet. For example, you can play a one-shot from a sample library on your computer and record the audio into a drum pad on Move, or you can play a synth on a tablet and record the audio into Move’s Melodic Sampler.
USB-C Selected as the Input Source.
You have the option to switch monitoring on or off when sampling via USB-C. By default, the option is set to Monitoring Off. To switch to Monitoring On, turn the wheel to select the headphones icon, then press the wheel. Note that when the option is set to Monitoring On, monitoring will continue to be active even when you exit Sampling Mode, as long as the audio source is still connected via USB-C.
Devices with USB-C ports typically work with a USB-C cable alone, while phones or tablets with a Lightning port require an adapter and need to be connected to a charger when sampling. Note that sampling into Move via USB-C works only with the USB Audio Class 2.0 protocol, so it might not be possible to sample into Move from some Android devices. You can read more about sampling audio into Move via USB-C in [this Knowledge Base article](https://help.ableton.com/hc/en-us/articles/18425803868316-Sampling-into-Move-via-USB-C).
## 15.7 Multi-pad recording
You can record the same sample onto separate Drum Rack pads, with a different sample start time for each pad. This is useful for triggering different sections of a longer sample across several pads.
To record a sample into multiple pads, select a track containing a Drum Rack, activate Sampling Mode and press a pad to start recording a sample. Then, press a different pad to continue recording the sample onto that pad. You can repeat this for several pads in sequence. As you move to a new pad, the LED of the previous pad, where part of the sample was recorded, will change from pink to the track color to indicate that the pad already contains a sample.
Recording the Same Sample Into Multiple Pads.
To stop recording, press the currently selected pad again or press the Sampling button. After you are finished, each pad you pressed while sampling will contain the same sample, but the sample start time will coincide with the start of each individual recording, i.e., when you pressed the pad.
## 15.8 Sample Slicing
In Slicing Mode, you can non-destructively divide a sample into slices that are then assigned to individual Drum Rack pads. This is ideal for working with drum breaks or creating vocal chops.
To enter Slicing Mode, hold Shift and press the wheel while a sample is in focus on the display to open the Sample Options menu. Then press the wheel again to select the Slice option.
Select Slice in the Sample Options Menu to Enter Slicing Mode.
By default, the sample is sliced into equal parts based on its total length. Turn the wheel to change the number of slices.
Turn the Wheel to Adjust the Number of Slices.
Use the first two encoders to adjust the sample region’s start and end points.
Use the First Two Encoders to Adjust the Sample Region’s Start/End.
You can adjust the start point for an individual slice by pressing the pad that corresponds to the slice you want to edit, then turning the third encoder.
Press the wheel or the Back button to confirm the settings and exit Slicing Mode. This replaces the existing samples with the newly created slices in a new Drum Rack.
Created Sample Slices on the Drum Rack Pads.
Note that any unused Drum Rack pads will remain empty if there are fewer than 16 slices.
To remove the slices and restore the original Drum Rack, press the Undo button.
## 15.9 Adjusting Sample Parameters
You can adjust various sample parameters for recorded samples, as well as for [uploaded samples](https://www.ableton.com/en/move/manual/#uploading-samples-and-sample-folders) or samples from the browser, using the encoders.
To adjust the sample gain, press and hold a pad, then turn the Volume encoder.
Adjusting the Sample Gain.
When you tap an encoder, its corresponding parameter is shown on the display. The available parameters depend on which [parameter bank](https://www.ableton.com/en/move/manual/#track-presets) is selected. Drum Sampler contains two parameter banks: Main Bank and Filter & Setup. The Melodic Sampler also has two parameter banks: Main Bank and Setup. By default, the Main Bank parameters are accessible via the encoders.
As a Drum Sampler instrument is used for each pad in Drum Racks, you can adjust the parameters for a sample per pad. If you select the entire Drum Rack in the Device View, the Main Bank parameters for the selected pad will be shown on the display.
To switch to Filter & Setup in Drum Sampler or Setup in the Melodic Sampler, highlight the instrument or sample with the wheel, hold Shift, then press and turn the wheel to select the second parameter bank.
Accessing the Filter & Setup Parameter Bank for Drum Sampler.Accessing the Setup Parameter Bank for the Melodic Sampler.
You can turn the encoders to adjust the parameter values. Once you finish, press the Back button to close the Parameter Banks View and return to the Device View.
### 15.9.1 Sample Parameters in Drum Sampler
The following parameters are available in the Main Bank, starting with the leftmost encoder:
1. *Transpose/Detune* — transposes the sample’s pitch up or down by semitones. Hold Shift while turning the encoder to detune the sample in cents.
2. *Sample Start* — adjusts the starting point for the sample’s playback. Hold Shift while turning the encoder to zoom in on the waveform for precise adjustments.
3. *Attack* — sets the time needed for the sample to reach the peak level. Hold Shift while turning the encoder to adjust in fine increments.
4. *Hold* — sets how long the sample plays at the peak level once the Attack time is reached. Hold Shift while turning the encoder to adjust in fine increments.
5. *Decay/Length* - *Decay* sets how long it takes for the sample to fade to silence from the peak level after the *Hold* time. Hold Shift and then tap the encoder to access the *Length* parameter, which can be used to adjust the sample’s length.
6. *Playback Effect* — selects which playback effect is used to manipulate the sample: *Stretch*, *Loop*, *Pitch Env*, *Punch*, *8-Bit*, *FM*, *Ring Mod*, *Sub Osc*, or *Noise*. Each playback effect has two unique parameters, which are assigned to encoders 7 and 8.

The following parameters are available in the Filter & Setup bank, starting from the leftmost encoder:
1. *Filter Frequency* — sets the cutoff point for the selected filter type. Hold Shift while turning the encoder to adjust in fine increments.
2. *Filter Resonance* — sets the emphasis of frequencies near the cutoff point. Hold Shift while turning the encoder to adjust in fine increments.
3. *Filter Type* — switches between four filter types: *Low-Pass 12*, *Low-Pass 24*, *High-Pass 24*, and *Peak*. The selected filter type determines how frequencies are processed based on the set cutoff point: the low-pass filters remove frequencies above the cutoff, the high-pass filter removes frequencies below the cutoff, and the peak filter emphasizes frequencies near the cutoff.
4. *Envelope Mode* — switches between two envelope types: *Trigger* and *Gate*. When set to Trigger, the sample plays for the duration set by the Hold parameter, regardless of when the pad is released. When set to Gate, the sample plays only while the pad is held down.
5. *Choke* — turns the choke group for a pad on or off. Pads that are added to the choke group will silence any currently playing samples that also belong to the group when triggered. This is useful for cutting off samples that should not be layered, such as open and closed hi-hats. Note that Drum Racks on Move only have one choke group.
6. *Velocity > …* — selects a target parameter to be modulated by note velocity: *Filter*, *Attack*, *Hold*, *Decay*, *FX 1*, and *FX 2*. The FX1 and FX2 targets correspond to the parameters mapped to encoders 7 and 8 in the Main Bank, and vary depending on the selected playback effect.
7. *Velocity > (target)* or *Velocity > Vol* — The *Velocity > (target)* parameter sets the amount of modulation that is applied to the selected target parameter. Hold Shift and tap the encoder to access the *Velocity > Vol* parameter, which can be used to set how much note velocity modulates the sample’s volume.
8. *Pan* — determines the position of the pad’s sound in the stereo field.

### 15.9.2 Sample Parameters in the Melodic Sampler
The following parameters can be adjusted in the Main Bank, starting from the leftmost encoder:
1. *Transpose/Detune* — transposes the sample’s pitch up or down by semitones. Hold Shift while turning the encoder to detune the sample in cents.
2. *Sample Start* — adjusts the starting point for the sample’s playback. Hold Shift while turning the encoder to zoom in on the waveform for precise adjustments.
3. *Attack* — sets the time needed for the sample to reach the peak level. Hold Shift while turning the encoder to adjust in fine increments.
4. *Decay* — sets how long it takes for the sample to fade to silence from the peak level. Hold Shift while turning the encoder to adjust in fine increments.
5. *Release/Playback Length* — *Release* sets how quickly the sample becomes silent after the pad is released. Hold Shift and tap the encoder to access the *Playback Length* parameter, which can be used to adjust the sample’s length.
6. *Filter Frequency* — sets the cutoff point for the selected filter type. Hold Shift while turning the encoder to adjust in fine increments.
7. *Filter Resonance* — sets the emphasis of frequencies near the cutoff point. Hold Shift while turning the encoder to adjust in fine increments.
8. *Filter LFO/LFO Rate* — *Filter LFO* sets how much the LFO modulates the filter cutoff. Hold Shift and tap the encoder to access the *LFO Rate* parameter, which can be used to set the rate of the LFO in Hertz.

The following parameters are available in the Setup bank, starting with the leftmost encoder:
1. *Filter Type* — switches between three filter types: *Low-Pass*, *Band-Pass*, and *High-Pass*. The selected filter type determines how frequencies are processed based on the set cutoff point: the low-pass filter removes frequencies above the cutoff, the band-pass filter allows frequencies near the cutoff to pass while removing frequencies on either side of that range, and the high-pass filter removes frequencies below the cutoff.
2. *Envelope Mode* — switches between two envelope types: *Trigger* and *Gate*. When set to Trigger, the sample plays for the duration set by the Decay parameter, regardless of when the pad is released. When set to Gate, the sample plays only while the pad is held down.

# 16. Mixing
The Volume encoder located at the top right corner of the hardware can be used to adjust the volume of individual tracks, pads, and Sets, as well as the overall output during playback.
The Volume Encoder.
You can also turn the Volume encoder to adjust levels when playback is not running, but you will not hear any changes.
## 16.1 Output Volume
To adjust the overall output volume, turn the Volume encoder while in the Set Overview, Note Mode, or Session Mode.
The Global Volume Meter.
As you turn the encoder, the VU meter on the display indicates the current output level.
## 16.2 Track Volume
In Note or Session Mode, you can adjust the volume for an individual track by holding the corresponding track button and turning the Volume encoder.
The Track Volume in dB.
The track volume in dB will be shown on the display as you adjust the encoder.
### 16.2.1 Track Volume Activity
During playback, the track button LEDs indicate the current volume levels of the tracks. Each LED displays its corresponding track color for low to medium volumes and turns white when the track output reaches high volume levels.
## 16.3 Soloing Tracks
To solo a track in Note or Session Mode, hold the Shift and Mute buttons, then press a track button.
The Shift, Mute, and Track Buttons Can Be Used Together to Solo Tracks.A Soloed Track.
When a track is soloed, its track button LED uses a blue color.
Use the same steps to unsolo a track: hold Shift and Mute, then press the corresponding track button.
An Unsoloed Track.
## 16.4 Muting Tracks
To mute a track in Note or Session Mode, hold the Mute button, then press a track button.
The Mute Button.
When a track is muted, a confirmation message appears on the display, and the track button’s LED dims.
Hold the Mute Button and Press a Track Button to Mute a Track.
In Note Mode, you can also mute the selected track by simply pressing the Mute button.
To unmute a track, hold the Mute button, then press the respective track button.
Hold the Mute Button Then Press a Muted Track Button to Unmute It.
## 16.5 Muting Drum Rack Pads
You can mute Drum Rack pads by holding the Mute button and pressing the pad you want to mute.
Hold the Mute Button and Press a Drum Rack Pad to Mute It.
When a pad is muted, a confirmation message appears on the display, and the corresponding pad LED changes to a dimly lit white color.
To unmute a Drum Rack pad, hold the Mute button and press the respective pad.
Hold the Mute Button Then Press a Muted Drum Rack Pad to Unmute It.
## 16.6 Sample Gain
In Note Mode, you can adjust the gain for samples in Drum Racks and the Melodic Sampler. To do so, hold the pad that you want to adjust, then turn the Volume encoder.
Adjusting the Gain for a Sample.
On the display, the pad’s waveform expands or contracts as you turn the encoder to the right or left, respectively. A white horizontal line indicates the level of gain being applied.
## 16.7 Set Volume
You can adjust a Set’s volume in the Set Overview by holding the Set’s pad and turning the volume encoder.
Adjusting the Set Volume.
As you turn the encoder, all four track volumes within the Set are adjusted simultaneously, and the Set’s overall output is shown in a VU meter on the display.
This is useful for balancing the volume between your Sets when previewing them in the Set Overview.
## 16.8 Built-in Limiter
Each Set includes a built-in Limiter to prevent clipping and distortion. Note that a Set’s Limiter is hidden and cannot be accessed or adjusted.
When [opening a Move Set in Live](https://www.ableton.com/en/move/manual/#open-move-sets-in-live), you will see the Limiter on Live’s Main track.
# 17. Session Mode
Session Mode lets you view and manage all of the clips in a Set, as well as adjust a Set’s main effects. In this mode, you can also arrange a Set’s clips into scenes and launch the clips during a performance.
You can open Session Mode by pressing the Note/Session toggle to the left of the track buttons.
The Note/Session Toggle.
In Session Mode, each row of pads represents a track’s clip slots and each column represents a scene. Each track can have up to eight clips and each scene up to four.
A Track’s Clip Slots.A Scene.
## 17.1 Working with Clips
You can select empty slots to create new clips, select existing clips to edit them in [Note Mode](https://www.ableton.com/en/move/manual/#note-mode), copy or delete clips, launch clips, or play entire scenes.
The pad LEDs indicate the following:
- Unlit pads represent empty clip slots.
- Pad LEDs lit in the track color indicate existing clips.
- White pad LEDs represent selected empty clip slots.
- Pad LEDs pulsing white represent selected existing clips, both during playback and when the transport is not running.
- Pad LEDs pulsing in the track color indicate clips that are about to stop playing. This happens if another clip in the track is launched, or if an empty clip slot is selected in the track.
- Pad LEDs pulsing green indicate that a clip is lined-up for playback. This happens when a clip is launched when the transport is running.

### 17.1.1 Creating New Clips
To create a new clip, select an empty clip slot by pressing an unlit pad in a track, then open Note Mode either by pressing the track button for the track, or pressing the Note/Session toggle. Then, [record](https://www.ableton.com/en/move/manual/#recording-notes), [capture](https://www.ableton.com/en/move/manual/#capturing-notes-and-automation), or [sequence](https://www.ableton.com/en/move/manual/#sequencing-notes) notes, which will automatically be added to a new clip in the selected slot. When you reopen Session Mode, the pad will be lit in the track color.
### 17.1.2 Launching Clips and Playing Scenes
To launch a clip, press its pad and the playback will start immediately, alongside the other selected clips. You can start playback for all selected clips by pressing the Play button. If the transport is already running, the clips will start playing at the next bar.
The Play Button.
You can play a scene by quickly sliding your finger vertically over a column of pads while the transport is running. Sliding over a column of unlit pads will stop playback on all playing clips, without stopping the transport.
### 17.1.3 Copying Clips
You can copy an existing clip into an empty clip slot or onto another existing clip, thus overriding it. To do so, hold the Copy button, then press the pad containing the clip that you want to copy. A confirmation message will be shown on the display, followed by a prompt to paste the clip. Press a pad where you want to place the copied clip to paste it.
Copying and Pasting a Clip.
You can also [duplicate clips in Note Mode](https://www.ableton.com/en/move/manual/#duplicating-clips).
### 17.1.4 Deleting Clips
To delete a clip, hold the Delete button and press a pad containing a clip. The clip will be deleted immediately.
Deleting a Clip.
You can also [delete the currently selected clip in Note Mode](https://www.ableton.com/en/move/manual/#deleting-clips-and-notes).
### 17.1.5 Retriggering Clips
You can retrigger all currently playing clips while the transport is running by holding Shift and pressing the Play button. Playback will restart immediately, causing the clips to play from the beginning. This can be used when performing to create a chopping or skipping effect.
Note that this feature also works in Note Mode.
## 17.2 Adjusting a Set’s Main Effects
Each Set on Move includes two audio effects with adjustable parameters. The default effects applied to a Set are Dynamics and Saturator, but you can choose different effect presets in Session Mode.
Main Effects in a Set.
A Set’s audio effects can be selected from Move’s [browser](https://www.ableton.com/en/move/manual/#browsing-and-swapping-presets). You can choose from the same effects as those available in [Track Presets](https://www.ableton.com/en/move/manual/#track-presets):
- Auto Filter — a classic analog-style filter with LFO and envelope modulation.
- Channel EQ — a basic equalizer.
- Chorus-Ensemble — a chorus effect with Chorus, Ensemble, and Vibrato modes.
- Delay — a delay effect with time and filter modulation.
- Dynamics — a combined compressor and EQ effect.
- Phaser-Flanger — a phaser effect with Doubler, Flanger, and Phaser modes.
- Redux — a bit crusher with jitter and filter modulation.
- Reverb — an algorithmic reverb that simulates how sounds echo in an acoustic space.
- Saturator — a waveshaping effect with several shaper curves and color modulation.

Each effect comes with different parameters mapped to Move’s encoders. You can adjust these parameters in Session Mode, either while building your Set, or during a performance. To do so, turn the wheel to select the effect whose parameters you want to adjust, then turn the encoders.
Adjusting Saturator’s Color Frequency Parameter for a Set.
# 18. Control Live Mode
In addition to being a standalone instrument, Move also has a dedicated control surface for Live, which you can use via *Control Live Mode*.
To switch to Control Live Mode, connect Move to a computer using the USB-C cable and open Live. Then, open the Setup menu on Move by holding Shift and pressing Step 2.
Hold Shift and Press Step 2 to Open the Setup Menu.
Use the wheel to navigate to the *Control Live* entry, then press the wheel to switch to Control Live Mode.
The Control Live Mode Entry.
Live will automatically detect Move as a control surface. Note that when you select the Control Live entry, a message appears on Move’s display if the USB-C cable isn’t connected or if Live isn’t open, indicating that the hardware must be connected via USB-C.
After the control surface is detected, the *Session Ring* appears in Live’s Session View.
The Session Ring.
The Session Ring surrounds whichever tracks and clips are in focus, as well as the Main track.
As well as control Live, you can also use Move as an [audio interface](https://www.ableton.com/en/move/manual/#using-move-as-an-audio-interface-in-control-live-mode) or access [Move Manager](https://www.ableton.com/en/move/manual/#move-manager) in Control Live Mode. The hardware can be charged as long as the computer supplies at least 7.5W of power.
Control Live Mode is supported for use with Live 12, version 12.1 or later, as well as Live 11, version 11.3.35 or later.
## 18.1 Using Move’s Controls in Control Live Mode
In Control Live Mode, you can use both [Note Mode](https://www.ableton.com/en/move/manual/#note-mode) and [Session Mode](https://www.ableton.com/en/move/manual/#session-mode) on Move to add to, edit, and navigate a Live Set. Some features in Control Live Mode differ from Standalone Mode; however, several controls function the same way in both modes.
The modifier buttons work as follows:
- Hold Shift to modify certain controls, for example, you can hold Shift when changing values to adjust in fine increments.
- Use the Mute button to mute tracks or Drum Rack pads.
- Use the Delete button to delete notes, clips, scenes, and tracks.
- Use the Copy button to duplicate notes, clips, scenes, and tracks.

The transport buttons work as follows:
- Use the Play button to start or stop playback.
- Hold Shift and press Play to re-trigger playback.
- Use the Record button to start or stop recording.

The function buttons work as follows:
- Press the Capture button to capture MIDI. Note that it is not possible to capture automation in Control Live Mode, or clear the Capture input by holding Shift.
- Use the Undo button to undo the last performed action. Hold Shift and press Undo to redo the last performed action.
- Press the Back button to return to the previous menu entry on Move.
- Use the Note/Session toggle to switch between Note and Session Mode.

Use the wheel to navigate between a track’s devices in Live’s Device View, and press the wheel to unfold or fold Racks. You can hold the Mute button and press the wheel to deactivate the selected device.
By default, the Volume encoder adjusts Live’s Main track volume. Hold a track button and turn the Volume encoder to adjust the volume for that track in Note Mode, or hold a track’s step button and turn the encoder to adjust the level in Session Mode. You can hold a Drum Rack pad and turn the Volume encoder to change the chain volume for that pad in the Rack.
Turn the encoders to adjust the parameters for the selected device. Hold the Delete button and tap an encoder to delete the automation for the corresponding parameter.
You can hold the Shift button and press certain step buttons to access specific settings and menus:
- Hold Shift and press Step 3 to access the Workflow Settings menu, where you can adjust the [quantization amount](https://www.ableton.com/en/move/manual/#quantize), set the [step grid resolution](https://www.ableton.com/en/move/manual/#step-grid), and switch automation arm on or off.
- Hold Shift and press Step 5 to access the [Tempo](https://www.ableton.com/en/move/manual/#tempo) setting. Turn the wheel to set the tempo.
- Hold Shift and press Step 6 to toggle the [metronome](https://www.ableton.com/en/move/manual/#metronome) on or off.
- Hold Shift and press Step 7 to access the Groove setting. You can use the wheel to adjust the Global Groove Amount for all loaded grooves in Live’s Groove Pool.
- Hold Shift and press Step 9 to access the [Key and Scale](https://www.ableton.com/en/move/manual/#pad-layouts-keys-and-scales) menu, where you can switch between the In-Key and Chromatic modes, as well as select a key and scale for the Set.
- Hold Shift and press Step 10 to toggle playing with [full velocity](https://www.ableton.com/en/move/manual/#full-velocity) on or off.
- Hold Shift and press Step 14 to prepare the next available clip slot in the selected track for recording in the Session View. Note that this option only appears when the selected slot contains a clip.

Note that the following Standalone Mode features are not accessible in Control Live Mode:
- 16 Pitches layout
- Arpeggiator
- Capturing automation
- Sampling Mode

## 18.2 Selecting Tracks in Control Live Mode
In [Note Mode](https://www.ableton.com/en/move/manual/#note-mode-features-in-control-live-mode), you can select tracks using the track buttons; this means it is only possible to access four tracks at a time. By default, the first four tracks in a Live Set are accessible via the track buttons when you open a Set.
You can select any additional tracks in Live to bring them into focus in Note Mode. The tracks are ordered sequentially in relation to the four track buttons. For example, selecting the fifth track in Live assigns it to the top track button, the sixth track to the second track button, and so on.
In [Session Mode](https://www.ableton.com/en/move/manual/#session-mode-features-in-control-live-mode), you can press the odd-numbered step buttons to select tracks, including return tracks and the Main track. The first seven tracks are shown in vertical columns, the last column represents the Main track. You can use the left and right arrow buttons to navigate between tracks.
When a track is selected, the corresponding track button LED is white. When a track is not selected, the track button LED matches the track’s color. The track button LED turns red when a track is armed.
Tracks can be adjusted in the following ways using the track buttons in Note Mode or the track step buttons in Session Mode:
- Hold a track button and turn the Volume encoder to adjust the track volume.
- Hold the Mute button and press a track button to mute or unmute the track.
- Hold the Delete button and press a track button to delete the track.
- Hold the Copy button and press a track button to duplicate the track.
- Hold the Record button and press a track button to arm or unarm the track. You can also arm a track by pressing the corresponding track button twice.

## 18.3 Note Mode Features in Control Live Mode
You can use Note Mode to play, sequence, record, or capture notes, as well as edit notes and clips.
Note Mode includes three sub-modes: *[Instrument](https://www.ableton.com/en/move/manual/#instrument-sub-mode)*, *[Drum](https://www.ableton.com/en/move/manual/#drum-sub-mode)*, and *[Slicing](https://www.ableton.com/en/move/manual/#slicing-sub-mode)*. The sub-mode is determined by the type of device in the selected track and defines how notes are displayed on the pads. In the Slicing sub-mode, for example, you can play the pads to trigger individual sample slices when using a Simpler device in Slicing Playback Mode.
Many of the controls function the same way across all sub-modes:
- Hold the Mute button and press a track button to mute or unmute a track.
- Press the Delete button to delete the selected clip. You can hold the Delete button and press a pad to delete the corresponding note from the selected clip in the Instrument sub-mode. In the Drums sub-mode, existing notes will be deleted, otherwise, the sample will be deleted. In the Slicing sub-mode, the corresponding slice will be deleted in Simpler.
- Press the Copy button to duplicate the selected clip. You can hold the Copy button to [copy notes](https://www.ableton.com/en/move/manual/#copying-notes-and-step-ranges) within and between bars.
- Press the Loop button to enter [Loop Mode](https://www.ableton.com/en/move/manual/#loop-length), where each step button represents a bar in the clip. Turning the wheel adjusts the loop length in one-bar increments, while holding Shift and turning the wheel adjusts it in sixteenth-note increments. You can also set the loop length by holding the step button where you want the loop to start, then pressing the step button where you want the loop to end. Pressing a step button twice sets the loop to the corresponding bar.
- Use the left and right arrow buttons to navigate between the bars of the selected clip. Hold Shift to navigate in 16-bar increments.

You can hold the Shift button and press certain step buttons to access specific settings and menus in all sub-modes:
- Hold Shift and press Step 11 to access the [repeat rate](https://www.ableton.com/en/move/manual/#arpeggiator-and-repeat) setting. You can turn the wheel to adjust the rate. Note that it is not possible to access Move’s Arpeggiator in Control Live Mode.
- Hold Shift and press Step 15 to [double the loop](https://www.ableton.com/en/move/manual/#doubling-the-loop) for the selected clip.
- Hold Shift and press Step 16 to [quantize](https://www.ableton.com/en/move/manual/#quantize) the selected clip based on the current quantization value.

The step buttons work in the following ways across all sub-modes:
- You can [sequence](https://www.ableton.com/en/move/manual/#sequencing-notes) notes by pressing a pad and then pressing a step button to add the corresponding note to that step. In the Instrument sub-mode, you can press multiple pads simultaneously to add several notes to a step. When using the default [step grid resolution](https://www.ableton.com/en/move/manual/#step-grid) of 1/16, the step buttons represent sixteenth note divisions. To sequence notes in the Arrangement View, first select an existing clip before adding any notes to steps. If no clip is selected, a new clip containing the sequenced notes will be added to an empty clip slot in the Session View.
- Hold a step button and turn the encoders to add [per-step automation](https://www.ableton.com/en/move/manual/#per-step-automation) for all notes in the step. Note that per-step automation can only be added to clips in Live’s Session View.
- Hold a step button and turn the Volume encoder to adjust the [note velocity](https://www.ableton.com/en/move/manual/#velocity) for all notes in the step.
- Hold a step button and turn the wheel to adjust the [note length](https://www.ableton.com/en/move/manual/#note-length) for all notes in the step.
- Hold a step button and use the left or right arrow button to [nudge](https://www.ableton.com/en/move/manual/#note-nudge) all notes in the step.

## 18.4 Instrument Sub-Mode
The Instrument sub-mode is used when the selected track contains any instrument, except for a Drum Rack or Simpler in Slicing Playback Mode.
In this sub-mode, you can use the pads to play, sequence, record, or capture notes in either the [In-Key or Chromatic Mode](https://www.ableton.com/en/move/manual/#pad-layouts-keys-and-scales). The plus and minus buttons shift the octave range up or down, respectively. You can hold Shift and press the plus or minus button to shift the pitch by one scale degree at a time.
To transpose the notes in a step, hold the corresponding step button and press the plus or minus button to transpose by a semitone, or long press them to transpose by an octave.
## 18.5 Drum Sub-Mode
The Drum sub-mode is used when the selected track contains a Drum Rack.
In this sub-mode you can use all 32 pads to play, sequence, record, or capture notes.
Select a Drum Rack pad by holding the Shift button and then pressing a pad. You can hold a Drum Rack pad and turn the Volume encoder to adjust the corresponding chain volume in the Rack. Hold the Mute button and press a Drum Rack pad to [mute or unmute](https://www.ableton.com/en/move/manual/#muting-drum-rack-pads) it. To copy and paste the devices in a Drum Rack pad, hold the Copy button, press the pad you want to copy, then press the pad where you want to paste the devices.
Use the plus and minus buttons to navigate within the Drum Rack. Each press of the plus or minus button moves to the 16 Drum Rack pads above or below the current set of pads, respectively. Hold Shift while pressing the plus or minus button to navigate by four Drum Rack pads at a time.
## 18.6 Slicing Sub-Mode
The Slicing sub-mode is used when the selected track contains a Simpler in Slicing Playback Mode.
In this sub-mode you can use the pads to play, sequence, record, or capture slices. You can hold the Shift button and press a pad to select a slice. Use the plus and minus buttons to navigate between pages of 16 slices by default. Hold Shift while pressing the plus or minus button to scroll by four slices at a time.
## 18.7 Session Mode Features in Control Live Mode
You can use Session Mode to launch clips and scenes, as well as navigate between the tracks in a Set.
Session Mode includes two sub-modes: the default sub-mode and the *Session Overview*. You can switch between these sub-modes by holding Shift and pressing the Note/Session toggle.
In both sub-modes, pressing odd-numbered step buttons selects the corresponding track, while pressing even-numbered step buttons stops the playing clip in the track. For example, you can press Step 1 to select the first track, and press Step 2 to stop the playing clip in that track. Step 15 always selects the Main track, and Step 16 always stops all playing clips.
Use the left and right arrow buttons to move the Session Ring horizontally. By default, the Session Ring shifts by one track each time an arrow button is pressed. Hold the Shift button when using the arrow buttons to navigate by seven tracks at a time.
Use the plus and minus buttons to move the Session Ring vertically. Each press of the plus or minus button shifts the Session Ring by one scene. Hold Shift while using the buttons to navigate by four scenes at a time.
## 18.8 Default Sub-Mode
In the default sub-mode, each vertical column represents a track and each horizontal row represents a scene. You can press pads within a track column to launch the corresponding clip. The eighth vertical column represents the Main track, where you can use the pads to launch scenes. The pad LEDs for the Main track are green.
Hold Shift and press a pad within a track column to select a clip, or press a pad within the Main track column to select a scene.
You can hold the Delete button and press a pad in a track column to delete the clip, or press a pad within the Main track column to delete the scene.
To copy a clip, hold the Copy button, press the pad you want to copy, then press the pad where you want to paste the clip. You can duplicate a scene by holding the Copy button, then pressing the pad in the Main track column that contains the scene you want to duplicate. The duplicated scene will then be added below the original.
## 18.9 Session Overview Sub-Mode
In the Session Overview sub-mode, each pad represents a block of four clips across seven tracks. Pressing a pad moves the Session Ring to the corresponding section of clips. This is useful for navigating larger Live Sets.
A dimly lit pad LED indicates that a pad contains a block of clips. When a pad is selected, the corresponding LED turns white. A pulsing green pad LED indicates an unselected block that contains playing clips.
# 19. USB Operation Modes
Move’s USB connections can carry different kinds of data, as well as power. The connections work differently depending on whether you are using Move in Standalone Mode or in Control Live Mode. The following sections illustrate how USB is used in each of these modes.
## 19.1 USB Connections in Standalone Mode
In Standalone Mode, you can plug in the power supply via the USB-C port to charge Move. You can [connect a MIDI device](https://www.ableton.com/en/move/manual/#connecting-midi-devices) using the USB-A port.
Additionally, you can transfer files between Move and your computer using [Move Manager](https://www.ableton.com/en/move/manual/#move-manager), which is Move’s web-based file management tool. To do so, Move and your computer must be [connected to the same Wi-Fi network](https://www.ableton.com/en/move/manual/#connect-to-wi-fi). You can then access Move Manager using Move’s [hostname](https://www.ableton.com/en/move/manual/#accessing-move-manager) and an authentication code.
Move in Standalone Mode Without a USB-C Computer Connection.
You can also connect Move to your computer via USB-C. Once connected, you can use Move as an [audio interface](https://www.ableton.com/en/move/manual/#using-move-as-an-audio-interface) or access [Move Manager](https://www.ableton.com/en/move/manual/#accessing-move-manager).
As long as the computer delivers at least 7.5W of power, Move will continue charging when connected. For more details, see [Move Charging FAQ](https://help.ableton.com/hc/en-us/articles/15193509831324).
Move in Standalone Mode Connected to a Computer via USB-C.
## 19.2 USB Connections in Control Live Mode
You can connect Move to your computer via USB-C to use the hardware as a controller for Live via [Control Live Mode](https://www.ableton.com/en/move/manual/#control-live-mode), provided that you are using software version 1.1 or higher on Move.
In Control Live Mode, you can also use Move as an [audio interface](https://www.ableton.com/en/move/manual/#using-move-as-an-audio-interface-in-control-live-mode). You can select Move as an audio input device in Live’s Audio Settings or on your computer. Additionally, you can use Move Manager to transfer files between Move and your computer. Note that it is not possible to send or receive MIDI through the USB-A port in this mode.
Move can be charged in Control Live Mode as long as the computer provides at least 7.5W of power.
Move in Control Live Mode Connected to a Computer via USB-C.
# 20. Move Control Reference
The function of each button and control is explained below, along with definitions for some common terms.
Set — Each piece of music that you make on Move is contained in a Set. A Set has four tracks for creating melodies, basslines, beats, and more. You can store up to 32 Sets on Move. Sets are automatically saved as you make music, when you enter the Set Overview, and when you shut Move down.
Track — Each Set has four tracks, which are populated with random Track Presets. You can switch between tracks using the track buttons to the left of the pads.
Track Preset — A Track Preset includes one instrument and two effects. You can use Track Presets as they are or customize the devices within them to create the exact sound you want for your tracks.
Clip — Each track can have up to eight clips. A clip is a container for notes, which you can add via sequencing, recording, or capturing.
Set Overview — The Set Overview contains all of your Sets. Here you can switch between Sets, create a new Set, copy or delete Sets, upload or remove Sets from Ableton Cloud, or change the color for a Set’s corresponding pad.
Note Mode — You can build up a Set in Note Mode. In this mode you can record, capture, and edit clips, play and sequence notes, as well as adjust various clip and note settings. You can also browse and adjust track presets to customize the devices in a Set.
Session Mode — In Session Mode, you can arrange, copy, and launch clips, as well as adjust two global effects for a Set. Session Mode is ideal for sorting clips and performing.
Wheel — Turn the wheel to navigate and select menu entries, and press the wheel to confirm a selection.
Play — Press the Play button to start/stop playback. In Session Mode, you can hold the Shift button and press the Play button to retrigger all active clips.
Record — Press the Record button to start or stop recording. You can record notes and automation into empty clips, as well as overdub to add additional notes or automation into existing clips. When you press the Record button to start recording, playback will also begin after a count-in if the transport isn’t already running.
Back — Use the Back button to exit menus, the browser, and Sampling Mode, or to navigate from subfolders to folders in the browser and menus. Hold the Back button to exit the current menu or view. You can press the Back button when a Set slot is selected in the Set Overview to switch to Note Mode.
Note/Session Toggle — Use the Note/Session toggle to switch between Note and Session Mode. When in the Set Overview, you can press the Note/Session toggle to enter Session Mode. You can hold the Note/Session toggle to briefly preview the other available mode without switching to it.
Track Buttons — In Note and Session Mode, you can press a track button to select the corresponding track. You can temporarily hold the track button for a track that isn’t selected to momentarily view it without selecting it. When in the Set Overview, you can press a track button to switch to Note Mode.
Encoders — Use the eight encoders above the pads to adjust device parameters for instruments and effects. Changes made to device parameters can be recorded or captured as automation. Use the Volume encoder at the top right corner of the hardware to adjust the volume for individual tracks, pads, and Sets, as well as the overall output. When you touch an encoder, its corresponding parameter is shown on the display.
Pads — Move’s 32 silicone pads are velocity-sensitive, so you can play softly to generate lower velocity values, or press the pads harder to generate higher velocity values. The pads also support Polyphonic Aftertouch, so that the pressure you apply to each pad can be used to modulate Track Presets based on the Drift and Wavetable instruments. Pressure changes are recorded or captured automatically.
Step Buttons — You can step sequence notes in Note Mode by pressing a pad (or multiple pads when using melodic instruments) and then pressing a step button. When using the default step grid resolution of 1/16, the step buttons represent sixteenth note divisions in Note Mode. The line under the Step 1, 5, 9, and 13 LEDs indicates the start of each beat. In Loop Mode, the step buttons represent the bars of the clip. When you hold Shift, icons appear beneath several step buttons. The icons indicate that you can access specific features and menus by pressing one of those step buttons while holding Shift. Features such as Groove, Tempo, or Note Repeat, along with the Workflow Settings and Setup menus, can be accessed this way.
Capture — Press the Capture button to capture any notes you have played while not actively recording. You can also capture automation by adjusting the encoders and then pressing the Capture button. Captured notes and automation can be added to both empty and existing clips. If you press the Capture button while the transport isn’t running, the tempo of your playing will be detected, and the BPM will be set accordingly.
Sampling — Use the Sampling button to sample audio from Move’s built-in microphone or audio input. You can also use the Sampling button to resample Move’s main output. After pressing the Sampling button, you enter Sampling Mode. In this mode, you can choose an input source, select the pad where you want to add a sample, and record audio.
Loop — Press the Loop button to enter Loop Mode, where each bar in the clip is displayed on the step buttons. In Loop Mode, you can duplicate bars, adjust the loop length, and edit all the notes in a clip simultaneously.
Mute — Use the Mute button to mute or unmute tracks or Drum Rack pads.
Delete — Use the Delete button to delete Sets in the Set Overview, clips in Note or Session Mode, or all of the notes in a selected Drum Rack pad. You can delete automation by holding the Delete button and touching an automated encoder.
Copy — Use the Copy button to copy Sets in the Set Overview, notes and step ranges in Note Mode, bars in Loop Mode, or clips in Session Mode. If you start copying and want to cancel the process before pasting, you can press the Copy button again to clear the clipboard.
Undo — Use the Undo button to undo the last performed action. Hold Shift and press the Undo button to redo the last performed action.
Plus and Minus Buttons — Use the plus and minus buttons to change the octave range for a melodic instrument, or use them while holding a step button to transpose note pitches. Both of these options work in Note Mode. You can also transpose all the note pitches for selected bars in Loop Mode.
Left and Right Arrow Buttons — Use the left and right arrow buttons to navigate between the bars of a clip, or use them while holding a step button to nudge notes. Both of these options work in Note Mode and Loop Mode.
# 21. Credits
**Ableton Move Manual**
Reference Manual by Ania Kuźbik, Sara Riegel, Benjamin Weiss, Mark Zadel, Christopher Hyna, Sam Hurley, Johannes Russ, and Victor Mark.
Schönhauser Allee 6-7 | 10119 Berlin, Germany
Contact Support: [https://www.ableton.com/help/contact-support/](https://www.ableton.com/help/contact-support/)
Copyright 2024 Ableton AG. All rights reserved. Made in Germany.
This manual, as well as the product described in it, is furnished under license and may be used or copied only in accordance with the terms of such license. The content of this manual is furnished for informational use only, is subject to change without notice, and should not be construed as a commitment by Ableton. Every effort has been made to ensure that the information in this manual is accurate. Ableton assumes no responsibility or liability for any errors or inaccuracies that may appear in this book.
Except as permitted by such license, no part of this publication may be reproduced, edited, stored in a retrieval system or transmitted, in any form or by any means, electronic, mechanical, recording or otherwise, without the prior written permission of Ableton.
Ableton, the Ableton Logo, the Live logo are trademarks of Ableton AG. Apple, iOS, AirDrop, Mac, macOS, are trademarks of Apple Inc, registered in the U.S. and other countries. Windows is a registered trademark of Microsoft Corporation in the United States and other countries.
## Ableton Move Manual
 
Language           English                    Deutsch                    français                    日本語                    简体中文                    español                    italiano         
1. [1. Introduction](https://www.ableton.com/en/move/manual/#introduction)
  1. [1.1 What’s in the Box?](https://www.ableton.com/en/move/manual/#whats-in-the-box)
  2. [1.2 Hardware Overview](https://www.ableton.com/en/move/manual/#hardware-overview)
    1. [1.2.1 Controls](https://www.ableton.com/en/move/manual/#controls)
    2. [1.2.2 Connections](https://www.ableton.com/en/move/manual/#connections)




2. [2. Setup](https://www.ableton.com/en/move/manual/#setup)
  1. [2.1 Setup Menu](https://www.ableton.com/en/move/manual/#setup-menu)
    1. [2.1.1 Battery Status](https://www.ableton.com/en/move/manual/#battery-status)
    2. [2.1.2 Connect to Wi-Fi](https://www.ableton.com/en/move/manual/#connect-to-wi-fi)
    3. [2.1.3 Update Move’s Software](https://www.ableton.com/en/move/manual/#update-moves-software)
    4. [2.1.4 Ableton Cloud Status](https://www.ableton.com/en/move/manual/#ableton-cloud-status)
    5. [2.1.5 Switch to Control Live Mode](https://www.ableton.com/en/move/manual/#switch-to-control-live-mode)
    6. [2.1.6 Link](https://www.ableton.com/en/move/manual/#link)
    7. [2.1.7 MIDI](https://www.ableton.com/en/move/manual/#midi)
    8. [2.1.8 USB-C Audio](https://www.ableton.com/en/move/manual/#usb-c-audio)
    9. [2.1.9 Accessing Move Manager](https://www.ableton.com/en/move/manual/#accessing-move-manager)
    10. [2.1.10 Advanced Settings](https://www.ableton.com/en/move/manual/#advanced-settings)
    11. [2.1.11 Adjust Brightness](https://www.ableton.com/en/move/manual/#adjust-brightness)




3. [3. Move Manager](https://www.ableton.com/en/move/manual/#move-manager)
  1. [3.1 Connecting to Move Manager](https://www.ableton.com/en/move/manual/#connecting-to-move-manager)
  2. [3.2 Authenticating Move Manager](https://www.ableton.com/en/move/manual/#authenticating-move-manager)
  3. [3.3 Using Move Manager](https://www.ableton.com/en/move/manual/#using-move-manager)
  4. [3.4 Sets Page](https://www.ableton.com/en/move/manual/#sets-page)
    1. [3.4.1 Sorting Sets](https://www.ableton.com/en/move/manual/#sorting-sets)
    2. [3.4.2 Downloading a Set](https://www.ableton.com/en/move/manual/#downloading-a-set)
    3. [3.4.3 Renaming a Set](https://www.ableton.com/en/move/manual/#renaming-a-set)
    4. [3.4.4 Additional Set Options in Move Manager](https://www.ableton.com/en/move/manual/#additional-set-options-in-move-manager)


  5. [3.5 Recordings Page](https://www.ableton.com/en/move/manual/#recordings-page)
  6. [3.6 Samples Page](https://www.ableton.com/en/move/manual/#samples-page)
    1. [3.6.1 Uploading Samples and Sample Folders](https://www.ableton.com/en/move/manual/#uploading-samples-and-sample-folders)
    2. [3.6.2 Organizing Samples](https://www.ableton.com/en/move/manual/#organizing-samples)


  7. [3.7 Presets Page](https://www.ableton.com/en/move/manual/#presets-page)
  8. [3.8 Settings Page](https://www.ableton.com/en/move/manual/#settings-page)
    1. [3.8.1 Update Move’s Software from Move Manager](https://www.ableton.com/en/move/manual/#update-moves-software-from-move-manager)
    2. [3.8.2 Activating Ableton Cloud on Move](https://www.ableton.com/en/move/manual/#activating-ableton-cloud-on-move)


  9. [3.9 Advanced Page](https://www.ableton.com/en/move/manual/#advanced-page)


4. [4. Connectivity](https://www.ableton.com/en/move/manual/#connectivity)
  1. [4.1 Hardware Connectivity](https://www.ableton.com/en/move/manual/#hardware-connectivity)
    1. [4.1.1 Connecting to External Sound Sources](https://www.ableton.com/en/move/manual/#connecting-to-external-sound-sources)
    2. [4.1.2 Using Move as an Audio Interface](https://www.ableton.com/en/move/manual/#using-move-as-an-audio-interface)
    3. [4.1.3 Connecting MIDI Devices](https://www.ableton.com/en/move/manual/#connecting-midi-devices)


  2. [4.2 Using Ableton Link on Move](https://www.ableton.com/en/move/manual/#using-ableton-link-on-move)
  3. [4.3 Using Ableton Cloud on Move](https://www.ableton.com/en/move/manual/#using-ableton-cloud-on-move)
    1. [4.3.1 Uploading a Set to Cloud](https://www.ableton.com/en/move/manual/#uploading-a-set-to-cloud)
    2. [4.3.2 Removing a Set from Cloud](https://www.ableton.com/en/move/manual/#removing-a-set-from-cloud)
    3. [4.3.3 Working with Synced Sets Across Multiple Devices](https://www.ableton.com/en/move/manual/#working-with-synced-sets-across-multiple-devices)




5. [5. Navigating Between Set Modes](https://www.ableton.com/en/move/manual/#navigating-between-set-modes)
6. [6. Set Overview](https://www.ableton.com/en/move/manual/#set-overview)
  1. [6.1 Set Options in the Overview](https://www.ableton.com/en/move/manual/#set-options-in-the-overview)
    1. [6.1.1 Creating New Sets](https://www.ableton.com/en/move/manual/#creating-new-sets)
    2. [6.1.2 Changing a Pad’s Color](https://www.ableton.com/en/move/manual/#changing-a-pads-color)
    3. [6.1.3 Ableton Cloud Options in the Overview](https://www.ableton.com/en/move/manual/#ableton-cloud-options-in-the-overview)
    4. [6.1.4 Copying Sets](https://www.ableton.com/en/move/manual/#copying-sets)
    5. [6.1.5 Deleting Sets](https://www.ableton.com/en/move/manual/#deleting-sets)




7. [7. Using Instruments and Effects](https://www.ableton.com/en/move/manual/#using-instruments-and-effects)
  1. [7.1 Track Presets](https://www.ableton.com/en/move/manual/#track-presets)
  2. [7.2 Browsing and Swapping Presets](https://www.ableton.com/en/move/manual/#browsing-and-swapping-presets)
    1. [7.2.1 Browser Categories](https://www.ableton.com/en/move/manual/#browser-categories)
    2. [7.2.2 Autoload](https://www.ableton.com/en/move/manual/#autoload)


  3. [7.3 Saving Presets](https://www.ableton.com/en/move/manual/#saving-presets)


8. [8. Note Mode](https://www.ableton.com/en/move/manual/#note-mode)
9. [9. Playing and Sequencing Notes](https://www.ableton.com/en/move/manual/#playing-and-sequencing-notes)
  1. [9.1 Pad Layouts, Keys, and Scales](https://www.ableton.com/en/move/manual/#pad-layouts-keys-and-scales)
  2. [9.2 16 Pitches Layout](https://www.ableton.com/en/move/manual/#16-pitches-layout)
  3. [9.3 Full Velocity](https://www.ableton.com/en/move/manual/#full-velocity)
  4. [9.4 Expressive Playing with Polyphonic Aftertouch](https://www.ableton.com/en/move/manual/#expressive-playing-with-polyphonic-aftertouch)
  5. [9.5 Sequencing Notes](https://www.ableton.com/en/move/manual/#sequencing-notes)


10. [10. Tempo, Groove, and Metronome Settings](https://www.ableton.com/en/move/manual/#tempo-groove-and-metronome-settings)
  1. [10.1 Tempo](https://www.ableton.com/en/move/manual/#tempo)
  2. [10.2 Groove](https://www.ableton.com/en/move/manual/#groove)
  3. [10.3 Metronome](https://www.ableton.com/en/move/manual/#metronome)


11. [11. Editing Notes and Steps](https://www.ableton.com/en/move/manual/#editing-notes-and-steps)
  1. [11.1 Velocity](https://www.ableton.com/en/move/manual/#velocity)
  2. [11.2 Note Transposition](https://www.ableton.com/en/move/manual/#note-transposition)
  3. [11.3 Note Length](https://www.ableton.com/en/move/manual/#note-length)
  4. [11.4 Note Nudge](https://www.ableton.com/en/move/manual/#note-nudge)
  5. [11.5 Adjusting Notes in Loop Mode](https://www.ableton.com/en/move/manual/#adjusting-notes-in-loop-mode)
  6. [11.6 Arpeggiator and Repeat](https://www.ableton.com/en/move/manual/#arpeggiator-and-repeat)
  7. [11.7 Quantizing Notes](https://www.ableton.com/en/move/manual/#quantizing-notes)
  8. [11.8 Copying Notes and Step Ranges](https://www.ableton.com/en/move/manual/#copying-notes-and-step-ranges)
  9. [11.9 Adding or Removing Multiple Notes from Steps](https://www.ableton.com/en/move/manual/#adding-or-removing-multiple-notes-from-steps)


12. [12. Editing Clips](https://www.ableton.com/en/move/manual/#editing-clips)
  1. [12.1 Loop Length](https://www.ableton.com/en/move/manual/#loop-length)
  2. [12.2 Doubling the Loop](https://www.ableton.com/en/move/manual/#doubling-the-loop)
  3. [12.3 Duplicating Clips](https://www.ableton.com/en/move/manual/#duplicating-clips)
  4. [12.4 Deleting Clips and Notes](https://www.ableton.com/en/move/manual/#deleting-clips-and-notes)


13. [13. Workflow Settings](https://www.ableton.com/en/move/manual/#workflow-settings)
  1. [13.1 Quantize](https://www.ableton.com/en/move/manual/#quantize)
  2. [13.2 Step Grid](https://www.ableton.com/en/move/manual/#step-grid)
  3. [13.3 Count-In and Autoload](https://www.ableton.com/en/move/manual/#count-in-and-autoload)


14. [14. Recording and Capturing](https://www.ableton.com/en/move/manual/#recording-and-capturing)
  1. [14.1 Recording Notes](https://www.ableton.com/en/move/manual/#recording-notes)
    1. [14.1.1 Recording with Count-In and Metronome](https://www.ableton.com/en/move/manual/#recording-with-count-in-and-metronome)


  2. [14.2 Recording Automation](https://www.ableton.com/en/move/manual/#recording-automation)
    1. [14.2.1 Deactivating Automation](https://www.ableton.com/en/move/manual/#deactivating-automation)
    2. [14.2.2 Checking Automation Status](https://www.ableton.com/en/move/manual/#checking-automation-status)
    3. [14.2.3 Deleting Automation](https://www.ableton.com/en/move/manual/#deleting-automation)
    4. [14.2.4 Per-Step Automation](https://www.ableton.com/en/move/manual/#per-step-automation)


  3. [14.3 Capturing Notes and Automation](https://www.ableton.com/en/move/manual/#capturing-notes-and-automation)


15. [15. Sampling](https://www.ableton.com/en/move/manual/#sampling)
  1. [15.1 Sampling Mode](https://www.ableton.com/en/move/manual/#sampling-mode)
  2. [15.2 Selecting a Sampling Input Source](https://www.ableton.com/en/move/manual/#selecting-a-sampling-input-source)
  3. [15.3 Recording Samples](https://www.ableton.com/en/move/manual/#recording-samples)
  4. [15.4 Mic and Line In Sampling](https://www.ableton.com/en/move/manual/#mic-and-line-in-sampling)
    1. [15.4.1 Adjusting Sampling Input Gain](https://www.ableton.com/en/move/manual/#adjusting-sampling-input-gain)
    2. [15.4.2 Turning Monitoring On or Off](https://www.ableton.com/en/move/manual/#turning-monitoring-on-or-off)


  5. [15.5 Resampling](https://www.ableton.com/en/move/manual/#resampling)
  6. [15.6 Sampling Audio via USB-C](https://www.ableton.com/en/move/manual/#sampling-audio-via-usb-c)
  7. [15.7 Multi-pad recording](https://www.ableton.com/en/move/manual/#multi-pad-recording)
  8. [15.8 Sample Slicing](https://www.ableton.com/en/move/manual/#sample-slicing)
  9. [15.9 Adjusting Sample Parameters](https://www.ableton.com/en/move/manual/#adjusting-sample-parameters)
    1. [15.9.1 Sample Parameters in Drum Sampler](https://www.ableton.com/en/move/manual/#sample-parameters-in-drum-sampler)
    2. [15.9.2 Sample Parameters in the Melodic Sampler](https://www.ableton.com/en/move/manual/#sample-parameters-in-the-melodic-sampler)




16. [16. Mixing](https://www.ableton.com/en/move/manual/#mixing)
  1. [16.1 Output Volume](https://www.ableton.com/en/move/manual/#output-volume)
  2. [16.2 Track Volume](https://www.ableton.com/en/move/manual/#track-volume)
    1. [16.2.1 Track Volume Activity](https://www.ableton.com/en/move/manual/#track-volume-activity)


  3. [16.3 Soloing Tracks](https://www.ableton.com/en/move/manual/#soloing-tracks)
  4. [16.4 Muting Tracks](https://www.ableton.com/en/move/manual/#muting-tracks)
  5. [16.5 Muting Drum Rack Pads](https://www.ableton.com/en/move/manual/#muting-drum-rack-pads)
  6. [16.6 Sample Gain](https://www.ableton.com/en/move/manual/#sample-gain)
  7. [16.7 Set Volume](https://www.ableton.com/en/move/manual/#set-volume)
  8. [16.8 Built-in Limiter](https://www.ableton.com/en/move/manual/#built-in-limiter)


17. [17. Session Mode](https://www.ableton.com/en/move/manual/#session-mode)
  1. [17.1 Working with Clips](https://www.ableton.com/en/move/manual/#working-with-clips)
    1. [17.1.1 Creating New Clips](https://www.ableton.com/en/move/manual/#creating-new-clips)
    2. [17.1.2 Launching Clips and Playing Scenes](https://www.ableton.com/en/move/manual/#launching-clips-and-playing-scenes)
    3. [17.1.3 Copying Clips](https://www.ableton.com/en/move/manual/#copying-clips)
    4. [17.1.4 Deleting Clips](https://www.ableton.com/en/move/manual/#deleting-clips)
    5. [17.1.5 Retriggering Clips](https://www.ableton.com/en/move/manual/#retriggering-clips)


  2. [17.2 Adjusting a Set’s Main Effects](https://www.ableton.com/en/move/manual/#adjusting-a-sets-main-effects)


18. [18. Control Live Mode](https://www.ableton.com/en/move/manual/#control-live-mode)
  1. [18.1 Using Move’s Controls in Control Live Mode](https://www.ableton.com/en/move/manual/#using-moves-controls-in-control-live-mode)
  2. [18.2 Selecting Tracks in Control Live Mode](https://www.ableton.com/en/move/manual/#selecting-tracks-in-control-live-mode)
  3. [18.3 Note Mode Features in Control Live Mode](https://www.ableton.com/en/move/manual/#note-mode-features-in-control-live-mode)
  4. [18.4 Instrument Sub-Mode](https://www.ableton.com/en/move/manual/#instrument-sub-mode)
  5. [18.5 Drum Sub-Mode](https://www.ableton.com/en/move/manual/#drum-sub-mode)
  6. [18.6 Slicing Sub-Mode](https://www.ableton.com/en/move/manual/#slicing-sub-mode)
  7. [18.7 Session Mode Features in Control Live Mode](https://www.ableton.com/en/move/manual/#session-mode-features-in-control-live-mode)
  8. [18.8 Default Sub-Mode](https://www.ableton.com/en/move/manual/#default-sub-mode)
  9. [18.9 Session Overview Sub-Mode](https://www.ableton.com/en/move/manual/#session-overview-sub-mode)


19. [19. USB Operation Modes](https://www.ableton.com/en/move/manual/#usb-operation-modes)
  1. [19.1 USB Connections in Standalone Mode](https://www.ableton.com/en/move/manual/#usb-connections-in-standalone-mode)
  2. [19.2 USB Connections in Control Live Mode](https://www.ableton.com/en/move/manual/#usb-connections-in-control-live-mode)


20. [20. Move Control Reference](https://www.ableton.com/en/move/manual/#move-control-reference)
21. [21. Credits](https://www.ableton.com/en/move/manual/#credits)

Ableton
Sign up to our newsletterEnter your email address to stay up to date with the latest offers, tutorials, downloads, surveys and more.
- [Register Live, Push or Move](https://www.ableton.com/en/account/add_license/)
- [About Ableton](https://www.ableton.com/en/about/)
- [Jobs](https://www.ableton.com/en/jobs/)

- 
- 
- 
- 
- 
- 

### Education
- [Offers for students and teachers](https://www.ableton.com/en/shop/education/)
- [Ableton for the Classroom](https://www.ableton.com/en/classroom/)
- [Ableton for Colleges and Universities](https://www.ableton.com/en/colleges-universities/)

### Community
- [Find Ableton User Groups](https://www.ableton.com/en/community/user-groups/)
- [Find Certified Training](https://www.ableton.com/en/certified-training/)
- [Become a Certified Trainer](https://www.ableton.com/en/education/certification-program/)

### Language and Location
LanguageEnglishDeutschFrançais日本語简体中文Español
Country or RegionPlease chooseUnited StatesUnited KingdomFranceGermanyCanadaJapanChinaAustraliaAfghanistanAland IslandsAlbaniaAlgeriaAmerican SamoaAndorraAngolaAnguillaAntarcticaAntigua And BarbudaArgentinaArmeniaArubaAustraliaAustriaAzerbaijanBahamasBahrainBangladeshBarbadosBelarusBelgiumBelizeBeninBermudaBhutanBoliviaBonaire, Sint Eustatius and SabaBosnia And HerzegovinaBotswanaBouvet IslandBrazilBritish Indian Ocean TerritoryBrunei DarussalamBulgariaBurkina FasoBurundiCambodiaCameroonCanadaCape VerdeCayman IslandsCentral African RepublicChadChileChinaChristmas IslandCocos (Keeling) IslandsColombiaComorosCongoCongo, The Democratic Republic Of TheCook IslandsCosta RicaCote D'IvoireCroatiaCubaCuracaoCyprusCzech RepublicDenmarkDjiboutiDominicaDominican RepublicEcuadorEgyptEl SalvadorEquatorial GuineaEritreaEstoniaEthiopiaFalkland Islands (Malvinas)Faroe IslandsFijiFinlandFranceFrench GuianaFrench PolynesiaGabonGambiaGeorgiaGermanyGhanaGibraltarGreeceGreenlandGrenadaGuadeloupeGuamGuatemalaGuernseyGuineaGuinea-BissauGuyanaHaitiHeard Island And McDonald IslandsHondurasHong Kong SAR, ChinaHungaryIcelandIndiaIndonesiaIran (Islamic Republic Of)IraqIrelandIsle Of ManIsraelItalyJamaicaJapanJerseyJordanKazakhstanKenyaKiribatiKorea, Democratic People's RepublicKorea, Republic OfKuwaitKyrgyzstanLao People's Democratic RepublicLatviaLebanonLesothoLiberiaLibyaLiechtensteinLithuaniaLuxembourgMacao SAR, ChinaMadagascarMalawiMalaysiaMaldivesMaliMaltaMarshall IslandsMartiniqueMauritaniaMauritiusMayotteMexicoMicronesia, Federated States OfMoldova, Republic OfMonacoMongoliaMontenegroMontserratMoroccoMozambiqueMyanmarNamibiaNauruNepalNetherlandsNew CaledoniaNew ZealandNicaraguaNigerNigeriaNiueNorfolk IslandNorth Macedonia, Republic ofNorthern Mariana IslandsNorwayOmanPakistanPalauPalestinian Territory, OccupiedPanamaPapua New GuineaParaguayPeruPhilippinesPitcairnPolandPortugalPuerto RicoQatarReunionRomaniaRussian FederationRwandaSaint HelenaSaint Kitts And NevisSaint LuciaSaint Martin (French Part)Saint Pierre And MiquelonSaint Vincent And The GrenadinesSamoaSan MarinoSao Tome And PrincipeSaudi ArabiaSenegalSerbiaSeychellesSierra LeoneSingaporeSint MaartenSlovakiaSloveniaSolomon IslandsSomaliaSouth AfricaSouth Georgia And The South Sandwich IslandsSouth SudanSpainCanary Islands (Spain)Sri LankaSudanSurinameSvalbard And Jan MayenSwazilandSwedenSwitzerlandSyrian Arab RepublicTaiwanTajikistanTanzania, United Republic OfTerritory of the French Southern and Antarctic LandsThailandTimor-LesteTogoTokelauTongaTrinidad And TobagoTunisiaTurkeyTurkmenistanTurks And Caicos IslandsTuvaluUgandaUkraineUnited Arab EmiratesUnited KingdomUnited StatesUnited States Minor Outlying IslandsUruguayUzbekistanVanuatuVatican City State (Holy See)VenezuelaViet NamVirgin Islands (British)Virgin Islands (U.S.)Wallis And FutunaWestern SaharaYemenZambiaZimbabwe
[Contact Us](https://www.ableton.com/en/contact-us/)[Press Resources](https://www.ableton.com/en/press/)[Legal Info](https://www.ableton.com/en/legal/)[Corporate Information](https://www.ableton.com/en/corporate-information/)[Privacy Policy](https://www.ableton.com/en/privacy-policy/)[Cookie Settings](https://www.ableton.com/en/cookie-settings/)[Imprint](https://www.ableton.com/en/imprint/)
Ableton

**GPT:** Yes — uploading (or pasting) the Ableton Move manual helps **a lot** for building out functionality, especially if we’re emulating Move in a single-file HTML/CSS/JS app.

### Why it helps (practically)
The manual acts like a **behavior spec**. It tells us exactly:

- **What modes exist** and how you move between them (Set Overview → Note Mode → Session Mode → Sampling Mode, plus Setup/Workflow/Keys&Scales/Repeat menus).
- **What every control does** (Shift combos, wheel behavior, encoders, buttons, plus/minus, arrows, etc.).
- **Hard limits and rules** we need to match (4 tracks max, clip/bar/loop behaviors, step grid rules, sample length limits, how capture works, autoload, etc.).
- **Feature boundaries** (e.g., MIDI support limitations, Control Live Mode differences, what’s unavailable in Control Live Mode, etc.).
- **Parameter mapping** (what each encoder controls per device/bank, how to switch banks, how automation is recorded/deactivated/deleted).

You already pasted a huge chunk that contains **very implementable details** (sequencing, sampling, clip handling, parameter banks, link behavior, workflow settings). That’s enough to start making the app behave “Move-like” rather than just “Move-looking.”

### How we’d use the manual to build the app
1. **Build a state machine**
   - States like: `SET_OVERVIEW`, `NOTE_MODE`, `SESSION_MODE`, `SAMPLING_MODE`, `BROWSER`, `WORKFLOW_SETTINGS`, `KEYS_SCALES`, `REPEAT_MENU`, `LOOP_MODE`, etc.
   - The manual tells us the exact transitions (buttons/toggles/Shift combos).

2. **Map controls → actions**
   - Wheel rotate vs wheel press
   - Encoders touch/turn/click behaviors
   - Shift-modified actions (fine adjust, alternate menus, etc.)

3. **Implement the data model to match Move**
   - `Set (≤32)` → `Tracks (4)` → `Clips (≤8 per track)` → `Bars (≤16)` → `Steps/notes/automation`
   - Then UI becomes a reflection of that model.

4. **Implement the workflow rules**
   - “Sequencing creates a clip in first empty slot”
   - “Transport starts when first note is added in empty clip”
   - Capture behavior and tempo estimation rules
   - Loop length & double loop behavior
   - Quantize + step grid paging rules

5. **Audio engine alignment (approximation, but faithful UX)**
   - Web Audio can cover: drum rack sampler, melodic sampler, basic effects chain, per-step playback timing, mute/solo/levels, start/end, slicing assignments, etc.
   - We won’t have Ableton’s proprietary synths/presets exactly, but we *can* match the **workflow + control feel** and use placeholder synth/sampler engines that behave correctly.

### What’s most valuable to upload next
If you upload the **full manual PDF**, the biggest boost usually comes from chapters/sections that include:
- **UI screenshots/diagrams** of screens (so we replicate layout/states precisely)
- **Session + Note mode details** (clip launching rules, selection behavior)
- **Browser/presets details** (autoload, categories, what LEDs do)
- **Sampling + slicing** specifics (start/end, slice counts, per-pad behavior)
- **Transport + sync** (Link start/stop expectations, count-in rules)

### Bottom line
If your goal is “**make this web app behave like Move**,” the manual is basically the blueprint. And since you already pasted large parts, we can start implementing immediately — uploading the PDF just fills in the missing pieces (especially images + any sections you haven’t pasted yet).

**Mike:** I I just uploaded the text

**GPT:** Got it — here’s the downloadable HTML file (single-file site with embedded CSS + JS) so you can preview it:

[Download the HTML](sandbox:/mnt/data/ableton-move-manual-navigator.html)

**Mike:** Keep adding more features in each chat .  Only build the features and functionality in manageable sections.   Continue where you left off

**GPT:** Absolutely — I’m continuing from the current **Ableton Move Manual Navigator** build, and the **next “manageable section” of features** I’m adding is:

## ✅ Next Feature Pack (Manageable + High Impact)
### 1) 📝 **Notes System (per section, saved locally)**
- Add notes to any manual section
- Notes are saved in `localStorage` (persist across refresh)
- Notes panel lets you:
  - Select a section
  - Write/edit a note
  - Clear a note
  - Export notes as JSON
  - Import notes JSON

### 2) 🔎 **Search Match Navigation**
- Adds **Prev/Next match** buttons next to the search bar
- Keyboard support:
  - **Enter** = next match
  - **Shift+Enter** = previous match
  - **F3** = next match
  - **Shift+F3** = previous match
- Active match gets a distinct highlight ring

### 3) ↔️ **Resizable Sidebar Split Pane**
- Drag handle between sidebar and content to resize TOC width
- Width persists in `localStorage`

---

## ⚠️ Status (transparent update)
I began patching your uploaded HTML file, but I hit a **tool execution stop** mid-write (system cut off before the file could be saved). That means:

✅ I have the full plan + code patch logic ready  
❌ The updated HTML file hasn’t been successfully written yet

So in the *next message* I will **immediately finish writing the updated HTML file** and provide the downloadable updated version with all three features included.

---

## What you’ll see right away once it’s saved
- A new **📝 Notes** button in the header
- A new **Notes overlay modal**
- **Note indicators** in the TOC
- Prev/Next buttons near search
- A thin draggable **sidebar resize bar**

---

If you want the Notes system to support **multiple notes per section** (instead of one note per section), tell me and I’ll build that as the next incremental feature pack after this one.
