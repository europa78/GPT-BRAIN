---
title: "Optimize audio sampler prompt"
date: 2025-11-26
cluster: "Audio / DSP / Instruments"
messages: 41
source: chatgpt-export conversations.json (FULL transcript)
---

# Optimize audio sampler prompt

> 41 messages · 2025-11-26 · cluster: Audio / DSP / Instruments

**Semantic neighbors:** [[Fixed sampler code]] · [[Drum sampler frameworks]] · [[Build audio sampler#2]] · [[Audio software development]]

## Transcript

**Mike:** optimize this prompt related to creating audio production software like samplers and synthesizers.    "add audio functionality to this web based HTML sampler.  when loading a file, when triggered there is no audio.

**GPT:** Here’s a tightened, higher-power version of your prompt you can use when working on this sampler/synth code (I’ve already dropped the full version into the canvas titled **“Optimized Web Audio Sampler Fix Prompt”** for you to copy and reuse). fileciteturn0file0  

**Optimized prompt (summary version):**

> *“Role: You are a senior Web Audio / DSP engineer and JS developer. I have a web-based HTML sampler (DOOM Sampler) where files load and waveforms update, but the pads produce no sound on trigger. Using my current single-file `doom-sampler.html` code, debug and fully implement audio playback using the Web Audio API (no external audio libs).*  
> *Fix all causes of silent audio: ensure `AudioContext` is created/resumed on first user interaction, audio files are decoded into `AudioBuffer`s, `AudioBufferSourceNode`s are created per play, connected through filter/gain nodes to `audioContext.destination`, and UI state (play/stop, pitch, filter, sync/keylock) actually drives the audio graph. Preserve the UI/visual design, and return a single complete corrected HTML file with concise comments near the main fixes plus a short explanation of what was broken and how you fixed it. I’ll paste my current `doom-sampler.html` below – read it carefully before editing.”*

If you open the canvas on the side, you’ll see the **full, long-form version** with all the detailed requirements, structure, and the `<<<PASTE ENTIRE CURRENT doom-sampler.html HERE>>>` placeholder ready to go.

**Mike:** Role: You are a senior Web Audio / DSP engineer and JS developer. I have a web-based HTML sampler (DOOM Sampler) where files load and waveforms update, but the pads produce no sound on trigger. Using my current single-file doom-sampler.html code, debug and fully implement audio playback using the Web Audio API (no external audio libs).
Fix all causes of silent audio: ensure AudioContext is created/resumed on first user interaction, audio files are decoded into AudioBuffers, AudioBufferSourceNodes are created per play, connected through filter/gain nodes to audioContext.destination, and UI state (play/stop, pitch, filter, sync/keylock) actually drives the audio graph. Preserve the UI/visual design, and return a single complete corrected HTML file with concise comments near the main fixes plus a short explanation of what was broken and how you fixed it. I’ll paste my current doom-sampler.html below – read it carefully before editing.

**GPT:** You’re right on the money: visually this thing is dope, but the audio engine was one step short of actually running.

Below is a **drop-in replacement `<script>` block** that fixes the “no sound when triggering pads” issue and wires the knobs so they actually modulate pitch/filter *while playing*.  

👉 **Keep your existing HTML + CSS exactly as-is** and just replace your current `<script>...</script>` with the one below.

---

```html
<script>
    // Audio Context and Master State
    let audioContext = null;
    let masterTempo = 120;
    
    const pads = {
        pad1: {
            buffer: null,
            source: null,
            gainNode: null,
            filterNode: null,
            isPlaying: false,
            detectedBPM: null,
            keylock: false,
            synced: false,
            stretchRatio: 1.0,
            grainPlayer: null
        },
        pad2: {
            buffer: null,
            source: null,
            gainNode: null,
            filterNode: null,
            isPlaying: false,
            detectedBPM: null,
            keylock: false,
            synced: false,
            stretchRatio: 1.0,
            grainPlayer: null
        }
    };

    // Tap tempo state
    let tapTimes = [];
    const TAP_TIMEOUT = 2000;

    // ============================================
    // AUDIO CONTEXT INIT / AUTOPLAY FIX
    // ============================================
    // FIX: ensure AudioContext is created AND resumed on user gesture,
    // otherwise some browsers stay in "suspended" state and you hear nothing.
    function initAudioContext() {
        if (!audioContext) {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
        }

        if (audioContext.state === 'suspended') {
            audioContext.resume().catch(err => {
                console.warn('AudioContext resume failed:', err);
            });
        }

        return audioContext;
    }

    // ============================================
    // GRANULAR TIME-STRETCH ENGINE
    // ============================================
    class GrainPlayer {
        constructor(ctx, buffer, destination) {
            this.ctx = ctx;
            this.buffer = buffer;
            this.destination = destination;
            this.isPlaying = false;
            this.playbackPosition = 0;
            this.stretchRatio = 1.0;
            this.pitchRatio = 1.0;
            this.grainSize = 0.08; // 80ms grains
            this.overlap = 0.5;
            this.scheduledGrains = [];
            this.intervalId = null;
            this.gainNode = ctx.createGain();
            this.filterNode = ctx.createBiquadFilter();
            this.filterNode.type = 'lowpass';
            this.filterNode.frequency.value = 20000;
            this.gainNode.connect(this.filterNode);
            this.filterNode.connect(destination);
        }

        start() {
            if (this.isPlaying) return;
            this.isPlaying = true;
            this.playbackPosition = 0;
            this.scheduleGrains();
        }

        stop() {
            this.isPlaying = false;
            if (this.intervalId) {
                clearInterval(this.intervalId);
                this.intervalId = null;
            }
            this.scheduledGrains.forEach(grain => {
                try { grain.stop(); } catch(e) {}
            });
            this.scheduledGrains = [];
        }

        setStretchRatio(ratio) {
            this.stretchRatio = Math.max(0.5, Math.min(2.0, ratio));
        }

        setPitchRatio(ratio) {
            this.pitchRatio = ratio;
        }

        setFilterFrequency(freq) {
            this.filterNode.frequency.value = freq;
        }

        scheduleGrains() {
            const grainInterval = this.grainSize * (1 - this.overlap) * 1000;
            
            this.intervalId = setInterval(() => {
                if (!this.isPlaying) return;
                
                const now = this.ctx.currentTime;
                const duration = this.buffer.duration;
                
                // Create grain
                const grain = this.ctx.createBufferSource();
                grain.buffer = this.buffer;
                grain.playbackRate.value = this.pitchRatio;
                
                // Envelope for smooth crossfade
                const envelope = this.ctx.createGain();
                envelope.gain.setValueAtTime(0, now);
                envelope.gain.linearRampToValueAtTime(1, now + this.grainSize * 0.1);
                envelope.gain.setValueAtTime(1, now + this.grainSize * 0.9);
                envelope.gain.linearRampToValueAtTime(0, now + this.grainSize);
                
                grain.connect(envelope);
                envelope.connect(this.gainNode);
                
                // Calculate playback position
                const startOffset = this.playbackPosition * duration;
                const grainDuration = this.grainSize * this.pitchRatio;
                
                grain.start(now, startOffset, grainDuration);
                grain.stop(now + this.grainSize);
                
                this.scheduledGrains.push(grain);
                
                // Clean up old grains
                this.scheduledGrains = this.scheduledGrains.filter(g => {
                    try {
                        return g.context.currentTime < now + this.grainSize * 2;
                    } catch(e) {
                        return false;
                    }
                });
                
                // Advance position based on stretch ratio
                const advancement = (this.grainSize * (1 - this.overlap) * this.pitchRatio) / (duration * this.stretchRatio);
                this.playbackPosition += advancement;
                
                // Loop or stop at end
                if (this.playbackPosition >= 1) {
                    this.playbackPosition = 0;
                    this.stop();
                    // Trigger UI update
                    document.dispatchEvent(new CustomEvent('grainPlayerEnded', { detail: this }));
                }
                
            }, grainInterval);
        }
    }

    // ============================================
    // TEMPO SYNC FUNCTIONS
    // ============================================
    
    function updateMasterTempo(bpm) {
        masterTempo = Math.max(60, Math.min(180, bpm));
        document.getElementById('master-tempo-display').textContent = `${Math.round(masterTempo)} BPM`;
        
        // Update synced pads
        Object.keys(pads).forEach(padId => {
            if (pads[padId].synced && pads[padId].detectedBPM) {
                syncPadToMaster(padId);
            }
        });
    }

    function syncPadToMaster(padId) {
        const pad = pads[padId];
        if (!pad.detectedBPM || !pad.keylock) {
            alert('Please load a sample, detect tempo, and enable Keylock first.');
            return false;
        }
        
        const stretchRatio = masterTempo / pad.detectedBPM;
        pad.stretchRatio = stretchRatio;
        pad.synced = true;
        
        // Update UI
        updateStretchDisplay(padId, stretchRatio);
        document.getElementById(`${padId}-sync`).classList.add('active');
        document.getElementById(`${padId}-sync-led`).classList.add('active');
        
        // If currently playing with granular, update stretch
        if (pad.grainPlayer && pad.isPlaying) {
            pad.grainPlayer.setStretchRatio(stretchRatio);
        }
        
        return true;
    }

    function unsyncPad(padId) {
        const pad = pads[padId];
        pad.synced = false;
        pad.stretchRatio = 1.0;
        
        document.getElementById(`${padId}-sync`).classList.remove('active');
        document.getElementById(`${padId}-sync-led`).classList.remove('active');
        document.getElementById(`${padId}-stretch-display`).classList.remove('visible');
        
        if (pad.grainPlayer) {
            pad.grainPlayer.setStretchRatio(1.0);
        }
    }

    function toggleKeylock(padId) {
        const pad = pads[padId];
        pad.keylock = !pad.keylock;
        
        const btn = document.getElementById(`${padId}-keylock`);
        const stretchDisplay = document.getElementById(`${padId}-stretch-display`);
        
        if (pad.keylock) {
            btn.classList.add('active');
            if (pad.synced) {
                stretchDisplay.classList.add('visible');
            }
        } else {
            btn.classList.remove('active');
            stretchDisplay.classList.remove('visible');
            unsyncPad(padId);
        }
    }

    function updateStretchDisplay(padId, ratio) {
        const display = document.getElementById(`${padId}-stretch-display`);
        const value = document.getElementById(`${padId}-stretch-value`);
        
        display.classList.add('visible');
        const percent = Math.round(ratio * 100);
        value.textContent = `${percent}%`;
        
        // Color coding based on stretch amount
        value.classList.remove('warning', 'extreme');
        if (ratio < 0.75 || ratio > 1.25) {
            value.classList.add('extreme');
        } else if (ratio < 0.9 || ratio > 1.1) {
            value.classList.add('warning');
        }
    }

    // Tap tempo
    function handleTapTempo() {
        const now = Date.now();
        
        // Clear old taps
        tapTimes = tapTimes.filter(t => now - t < TAP_TIMEOUT);
        tapTimes.push(now);
        
        if (tapTimes.length >= 2) {
            const intervals = [];
            for (let i = 1; i < tapTimes.length; i++) {
                intervals.push(tapTimes[i] - tapTimes[i-1]);
            }
            const avgInterval = intervals.reduce((a, b) => a + b, 0) / intervals.length;
            const bpm = 60000 / avgInterval;
            updateMasterTempo(bpm);
        }
        
        // Visual feedback
        const btn = document.getElementById('tap-tempo-btn');
        btn.classList.add('active');
        setTimeout(() => btn.classList.remove('active'), 100);
    }

    // Draw waveform from audio buffer
    function drawBufferWaveform(buffer, container) {
        const canvas = document.createElement('canvas');
        container.innerHTML = '';
        container.appendChild(canvas);
        
        const ctx = canvas.getContext('2d');
        const dpr = window.devicePixelRatio || 1;
        
        canvas.width = container.offsetWidth * dpr;
        canvas.height = container.offsetHeight * dpr;
        canvas.style.width = container.offsetWidth + 'px';
        canvas.style.height = container.offsetHeight + 'px';
        ctx.scale(dpr, dpr);
        
        const width = container.offsetWidth;
        const height = container.offsetHeight;
        const data = buffer.getChannelData(0);
        const step = Math.ceil(data.length / width);
        const amp = height / 2;
        
        // Background
        ctx.fillStyle = '#0a0a0c';
        ctx.fillRect(0, 0, width, height);
        
        // Center line
        ctx.strokeStyle = '#2a2a30';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(0, amp);
        ctx.lineTo(width, amp);
        ctx.stroke();
        
        // Waveform
        ctx.strokeStyle = '#ff6b00';
        ctx.lineWidth = 1;
        ctx.beginPath();
        
        for (let i = 0; i < width; i++) {
            let min = 1.0;
            let max = -1.0;
            
            for (let j = 0; j < step; j++) {
                const datum = data[(i * step) + j];
                if (datum < min) min = datum;
                if (datum > max) max = datum;
            }
            
            const yLow = (1 + min) * amp;
            const yHigh = (1 + max) * amp;
            
            ctx.moveTo(i, yLow);
            ctx.lineTo(i, yHigh);
        }
        ctx.stroke();
    }

    // Simple beat detection for BPM
    function detectBPM(buffer) {
        const data = buffer.getChannelData(0);
        const sampleRate = buffer.sampleRate;
        
        // Low-pass filter simulation - get envelope
        const blockSize = Math.floor(sampleRate / 20); // 50ms blocks
        const blocks = Math.floor(data.length / blockSize);
        const envelope = [];
        
        for (let i = 0; i < blocks; i++) {
            let sum = 0;
            for (let j = 0; j < blockSize; j++) {
                sum += Math.abs(data[i * blockSize + j]);
            }
            envelope.push(sum / blockSize);
        }
        
        // Find peaks in envelope
        const threshold = envelope.reduce((a, b) => a + b, 0) / envelope.length * 1.5;
        const peaks = [];
        
        for (let i = 1; i < envelope.length - 1; i++) {
            if (envelope[i] > threshold && 
                envelope[i] > envelope[i-1] && 
                envelope[i] > envelope[i+1]) {
                peaks.push(i);
            }
        }
        
        // Calculate intervals between peaks
        if (peaks.length < 2) return null;
        
        const intervals = [];
        for (let i = 1; i < peaks.length; i++) {
            intervals.push(peaks[i] - peaks[i-1]);
        }
        
        // Find most common interval
        const avgInterval = intervals.reduce((a, b) => a + b, 0) / intervals.length;
        const secondsPerBeat = (avgInterval * blockSize) / sampleRate;
        const bpm = 60 / secondsPerBeat;
        
        // Constrain to reasonable BPM range
        let finalBPM = bpm;
        while (finalBPM < 60) finalBPM *= 2;
        while (finalBPM > 180) finalBPM /= 2;
        
        return Math.round(finalBPM * 10) / 10;
    }

    // Load sample for a pad
    async function loadSample(padId, file) {
        const ctx = initAudioContext();
        const pad = pads[padId];
        
        try {
            const arrayBuffer = await file.arrayBuffer();
            const audioBuffer = await ctx.decodeAudioData(arrayBuffer);
            
            pad.buffer = audioBuffer;
            
            // Reset sync state on new sample
            unsyncPad(padId);
            pad.keylock = false;
            document.getElementById(`${padId}-keylock`).classList.remove('active');
            
            // Update UI
            document.getElementById(`${padId}-sample-name`).textContent = file.name;
            document.getElementById(`${padId}-sample-name`).classList.add('loaded');
            document.getElementById(`${padId}-indicator`).classList.add('loaded');
            document.getElementById(`${padId}-play`).disabled = false;
            document.getElementById(`${padId}-bpm`).textContent = '—';
            
            // Draw waveform
            const waveformContainer = document.getElementById(`${padId}-waveform`);
            drawBufferWaveform(audioBuffer, waveformContainer);
            
            // Also draw in main waveform display
            drawMainWaveform(audioBuffer);
            
            console.log(`Loaded ${file.name} into ${padId}`);
            
        } catch (error) {
            console.error('Error loading audio:', error);
            alert('Error loading audio file. Please try a different file.');
        }
    }

    // Play/Stop sample
    function togglePlayback(padId) {
        const ctx = initAudioContext();
        const pad = pads[padId];
        
        if (!pad.buffer) return;
        
        if (pad.isPlaying) {
            // Stop
            if (pad.keylock && pad.grainPlayer) {
                pad.grainPlayer.stop();
                pad.grainPlayer = null;
            } else if (pad.source) {
                try {
                    pad.source.stop();
                } catch (e) {
                    console.warn('Error stopping source:', e);
                }
                pad.source = null;
            }
            pad.isPlaying = false;
            updatePlayButton(padId, false);
        } else {
            // Play with keylock (granular) or normal
            if (pad.keylock) {
                // Use granular time-stretch playback
                pad.grainPlayer = new GrainPlayer(ctx, pad.buffer, ctx.destination);
                
                // Apply pitch
                const pitchKnob = document.getElementById(`${padId}-pitch`);
                const pitchValue = parseFloat(pitchKnob.dataset.value);
                pad.grainPlayer.setPitchRatio(Math.pow(2, pitchValue / 12));
                
                // Apply filter
                const filterKnob = document.getElementById(`${padId}-filter`);
                const filterValue = parseFloat(filterKnob.dataset.value);
                pad.grainPlayer.setFilterFrequency(200 + (filterValue / 100) * 19800);
                
                // Apply stretch ratio if synced
                if (pad.synced) {
                    pad.grainPlayer.setStretchRatio(pad.stretchRatio);
                }
                
                pad.grainPlayer.start();
            } else {
                // Normal playback
                pad.source = ctx.createBufferSource();
                pad.gainNode = ctx.createGain();
                pad.filterNode = ctx.createBiquadFilter();
                
                pad.filterNode.type = 'lowpass';
                pad.filterNode.frequency.value = 20000;

                // Ensure full volume unless you want a master level control
                pad.gainNode.gain.value = 1.0;
                
                // Get pitch value
                const pitchKnob = document.getElementById(`${padId}-pitch`);
                const pitchValue = parseFloat(pitchKnob.dataset.value);
                pad.source.playbackRate.value = Math.pow(2, pitchValue / 12);
                
                // Get filter value
                const filterKnob = document.getElementById(`${padId}-filter`);
                const filterValue = parseFloat(filterKnob.dataset.value);
                pad.filterNode.frequency.value = 200 + (filterValue / 100) * 19800;
                
                pad.source.buffer = pad.buffer;
                pad.source.connect(pad.filterNode);
                pad.filterNode.connect(pad.gainNode);
                pad.gainNode.connect(ctx.destination);
                
                pad.source.onended = () => {
                    pad.isPlaying = false;
                    updatePlayButton(padId, false);
                };
                
                pad.source.start();
            }
            
            pad.isPlaying = true;
            updatePlayButton(padId, true);
        }
    }

    function updatePlayButton(padId, isPlaying) {
        const btn = document.getElementById(`${padId}-play`);
        const indicator = document.getElementById(`${padId}-indicator`);
        
        if (isPlaying) {
            btn.classList.add('playing');
            btn.querySelector('.play-icon').style.display = 'none';
            btn.querySelector('.stop-icon').style.display = 'block';
            indicator.classList.add('playing');
        } else {
            btn.classList.remove('playing');
            btn.querySelector('.play-icon').style.display = 'block';
            btn.querySelector('.stop-icon').style.display = 'none';
            indicator.classList.remove('playing');
        }
    }

    // Identify tempo
    function identifyTempo(padId) {
        const pad = pads[padId];
        if (!pad.buffer) {
            alert('Please load a sample first');
            return;
        }
        
        const bpm = detectBPM(pad.buffer);
        pad.detectedBPM = bpm;
        
        const bpmDisplay = document.getElementById(`${padId}-bpm`);
        bpmDisplay.textContent = bpm ? bpm.toFixed(1) : '—';
        
        // Flash effect
        bpmDisplay.style.color = '#00ff88';
        setTimeout(() => {
            bpmDisplay.style.color = '';
        }, 500);
    }

    // Draw main waveform display
    function drawMainWaveform(buffer) {
        const canvas = document.getElementById('waveformCanvas');
        const ctx = canvas.getContext('2d');
        
        canvas.width = canvas.offsetWidth * 2;
        canvas.height = canvas.offsetHeight * 2;
        ctx.scale(2, 2);
        
        const width = canvas.offsetWidth;
        const height = canvas.offsetHeight;
        const data = buffer.getChannelData(0);
        const step = Math.ceil(data.length / width);
        const amp = height / 2;
        
        // Clear
        ctx.fillStyle = '#0a0a0c';
        ctx.fillRect(0, 0, width, height);
        
        // Center line
        ctx.strokeStyle = '#2a2a30';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(0, amp);
        ctx.lineTo(width, amp);
        ctx.stroke();
        
        // Waveform
        ctx.strokeStyle = '#ff6b00';
        ctx.lineWidth = 1;
        ctx.beginPath();
        
        for (let i = 0; i < width; i++) {
            let min = 1.0;
            let max = -1.0;
            
            for (let j = 0; j < step; j++) {
                const datum = data[(i * step) + j];
                if (datum < min) min = datum;
                if (datum > max) max = datum;
            }
            
            ctx.moveTo(i, (1 + min) * amp);
            ctx.lineTo(i, (1 + max) * amp);
        }
        ctx.stroke();
        
        // Selection overlay
        ctx.fillStyle = 'rgba(255, 107, 0, 0.1)';
        ctx.fillRect(width * 0.1, 0, width * 0.7, height);
        
        // Markers
        ctx.strokeStyle = '#00ff88';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(width * 0.1, 0);
        ctx.lineTo(width * 0.1, height);
        ctx.stroke();
        
        ctx.strokeStyle = '#ff3333';
        ctx.beginPath();
        ctx.moveTo(width * 0.8, 0);
        ctx.lineTo(width * 0.8, height);
        ctx.stroke();
    }

    // Initialize placeholder waveform
    function drawPlaceholderWaveform() {
        const canvas = document.getElementById('waveformCanvas');
        const ctx = canvas.getContext('2d');
        
        canvas.width = canvas.offsetWidth * 2;
        canvas.height = canvas.offsetHeight * 2;
        ctx.scale(2, 2);
        
        const width = canvas.offsetWidth;
        const height = canvas.offsetHeight;
        const centerY = height / 2;
        
        ctx.fillStyle = '#0a0a0c';
        ctx.fillRect(0, 0, width, height);
        
        ctx.strokeStyle = '#2a2a30';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(0, centerY);
        ctx.lineTo(width, centerY);
        ctx.stroke();
        
        // Placeholder text
        ctx.fillStyle = '#555';
        ctx.font = '11px "Roboto Condensed", sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('Load a sample to view waveform', width / 2, centerY + 4);
    }

    // Initialize ADSR display
    function drawADSR() {
        const canvas = document.getElementById('adsrCanvas');
        const ctx = canvas.getContext('2d');
        
        canvas.width = canvas.offsetWidth * 2;
        canvas.height = canvas.offsetHeight * 2;
        ctx.scale(2, 2);
        
        const width = canvas.offsetWidth;
        const height = canvas.offsetHeight;
        const padding = 8;
        
        const attack = 0.2;
        const decay = 0.4;
        const sustain = 0.7;
        const release = 0.3;
        
        const attackX = padding + attack * (width - 2 * padding) * 0.25;
        const decayX = attackX + decay * (width - 2 * padding) * 0.25;
        const sustainX = width - padding - release * (width - 2 * padding) * 0.25;
        const releaseX = width - padding;
        
        // Grid
        ctx.strokeStyle = '#1a1a1f';
        ctx.lineWidth = 1;
        for (let i = 0; i <= 4; i++) {
            const y = padding + (height - 2 * padding) * (i / 4);
            ctx.beginPath();
            ctx.moveTo(padding, y);
            ctx.lineTo(width - padding, y);
            ctx.stroke();
        }
        
        // Envelope
        const gradient = ctx.createLinearGradient(0, 0, width, 0);
        gradient.addColorStop(0, '#ff6b00');
        gradient.addColorStop(0.5, '#ffaa00');
        gradient.addColorStop(1, '#ff6b00');
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        
        ctx.beginPath();
        ctx.moveTo(padding, height - padding);
        ctx.lineTo(attackX, padding);
        ctx.lineTo(decayX, padding + (height - 2 * padding) * (1 - sustain));
        ctx.lineTo(sustainX, padding + (height - 2 * padding) * (1 - sustain));
        ctx.lineTo(releaseX, height - padding);
        ctx.stroke();
        
        // Fill
        ctx.fillStyle = 'rgba(255, 107, 0, 0.15)';
        ctx.beginPath();
        ctx.moveTo(padding, height - padding);
        ctx.lineTo(attackX, padding);
        ctx.lineTo(decayX, padding + (height - 2 * padding) * (1 - sustain));
        ctx.lineTo(sustainX, padding + (height - 2 * padding) * (1 - sustain));
        ctx.lineTo(releaseX, height - padding);
        ctx.closePath();
        ctx.fill();
        
        // Points
        const points = [
            { x: padding, y: height - padding },
            { x: attackX, y: padding },
            { x: decayX, y: padding + (height - 2 * padding) * (1 - sustain) },
            { x: sustainX, y: padding + (height - 2 * padding) * (1 - sustain) },
            { x: releaseX, y: height - padding }
        ];
        
        ctx.fillStyle = '#ff6b00';
        points.forEach(point => {
            ctx.beginPath();
            ctx.arc(point.x, point.y, 3, 0, Math.PI * 2);
            ctx.fill();
        });
    }

    // Handle granular player ending
    document.addEventListener('grainPlayerEnded', (e) => {
        Object.keys(pads).forEach(padId => {
            if (pads[padId].grainPlayer === e.detail) {
                pads[padId].isPlaying = false;
                pads[padId].grainPlayer = null;
                updatePlayButton(padId, false);
            }
        });
    });

    // Event Listeners
    document.addEventListener('DOMContentLoaded', () => {
        // Master tempo knob (prevent text-selection on drag)
        const masterKnob = document.getElementById('master-tempo-knob');
        if (masterKnob) {
            masterKnob.addEventListener('mousedown', (e) => {
                e.preventDefault();
            });
        }

        // Tap tempo
        document.getElementById('tap-tempo-btn').addEventListener('click', () => {
            initAudioContext();
            handleTapTempo();
        });
        
        // PAD 1 events
        document.getElementById('pad1-load').addEventListener('click', () => {
            document.getElementById('pad1-file').click();
        });
        
        document.getElementById('pad1-file').addEventListener('change', (e) => {
            if (e.target.files.length > 0) {
                loadSample('pad1', e.target.files[0]);
            }
        });
        
        document.getElementById('pad1-play').addEventListener('click', () => {
            togglePlayback('pad1');
        });
        
        document.getElementById('pad1-identify').addEventListener('click', () => {
            identifyTempo('pad1');
        });

        document.getElementById('pad1-keylock').addEventListener('click', () => {
            toggleKeylock('pad1');
        });

        document.getElementById('pad1-sync').addEventListener('click', () => {
            if (pads.pad1.synced) {
                unsyncPad('pad1');
            } else {
                syncPadToMaster('pad1');
            }
        });
        
        // PAD 2 events
        document.getElementById('pad2-load').addEventListener('click', () => {
            document.getElementById('pad2-file').click();
        });
        
        document.getElementById('pad2-file').addEventListener('change', (e) => {
            if (e.target.files.length > 0) {
                loadSample('pad2', e.target.files[0]);
            }
        });
        
        document.getElementById('pad2-play').addEventListener('click', () => {
            togglePlayback('pad2');
        });
        
        document.getElementById('pad2-identify').addEventListener('click', () => {
            identifyTempo('pad2');
        });

        document.getElementById('pad2-keylock').addEventListener('click', () => {
            toggleKeylock('pad2');
        });

        document.getElementById('pad2-sync').addEventListener('click', () => {
            if (pads.pad2.synced) {
                unsyncPad('pad2');
            } else {
                syncPadToMaster('pad2');
            }
        });
        
        // Reverse button (visual only for now)
        document.getElementById('reverseBtn').addEventListener('click', function() {
            this.classList.toggle('active');
        });
        
        // ============================================
        // KNOB INTERACTION + REALTIME MODULATION
        // ============================================
        document.querySelectorAll('.knob').forEach(knob => {
            let isDragging = false;
            let startY, startValue;
            
            knob.addEventListener('mousedown', (e) => {
                isDragging = true;
                startY = e.clientY;
                startValue = parseFloat(knob.dataset.value);
                document.body.style.cursor = 'grabbing';
                e.preventDefault();
            });
            
            document.addEventListener('mousemove', (e) => {
                if (!isDragging) return;
                
                const diff = (startY - e.clientY) * 0.5;
                const min = parseFloat(knob.dataset.min);
                const max = parseFloat(knob.dataset.max);
                const range = max - min;
                
                let newValue = startValue + (diff / 100) * range;
                newValue = Math.max(min, Math.min(max, newValue));
                
                knob.dataset.value = newValue;
                
                const rotation = ((newValue - min) / range) * 270 - 135;
                knob.querySelector('.knob-inner').style.transform = `rotate(${rotation}deg)`;

                // FIX: realtime audio modulation for pad pitch/filter while playing
                if (knob.id && (knob.id.includes('pitch') || knob.id.includes('filter'))) {
                    const padId = knob.id.split('-')[0]; // "pad1-pitch" -> "pad1"
                    const pad = pads[padId];
                    if (pad) {
                        if (knob.id.includes('pitch')) {
                            const rate = Math.pow(2, newValue / 12);
                            if (pad.source) {
                                try { pad.source.playbackRate.value = rate; } catch (e) {}
                            }
                            if (pad.grainPlayer) {
                                pad.grainPlayer.setPitchRatio(rate);
                            }
                        } else if (knob.id.includes('filter')) {
                            const freq = 200 + (newValue / 100) * 19800;
                            if (pad.filterNode) {
                                pad.filterNode.frequency.value = freq;
                            }
                            if (pad.grainPlayer) {
                                pad.grainPlayer.setFilterFrequency(freq);
                            }
                        }
                    }
                }
                
                // Update value display
                const valueDisplay = knob.parentElement.querySelector('.knob-value');
                if (valueDisplay) {
                    if (knob.id && knob.id.includes('pitch')) {
                        valueDisplay.textContent = `${Math.round(newValue)} st`;
                    } else if (knob.id && knob.id.includes('filter')) {
                        valueDisplay.textContent = `${Math.round(newValue)}%`;
                    } else if (knob.id === 'master-tempo-knob') {
                        updateMasterTempo(newValue);
                    } else {
                        valueDisplay.textContent = `${Math.round(newValue)}`;
                    }
                }
            });
            
            document.addEventListener('mouseup', () => {
                isDragging = false;
                document.body.style.cursor = '';
            });
        });
        
        // Initialize displays
        drawPlaceholderWaveform();
        drawADSR();
    });

    window.addEventListener('resize', () => {
        drawPlaceholderWaveform();
        drawADSR();
    });
</script>
```

---

### What was broken / why there was no sound

Here are the main issues and what the changes fix, based on your original `doom-sampler.html`: fileciteturn1file0  

1. **AudioContext never resumed**  
   - Your `initAudioContext()` constructed an `AudioContext` but never called `audioContext.resume()`.  
   - In modern browsers, the context often starts in **`suspended`** state until resumed inside a user gesture, which means all your `BufferSource.start()` calls were being ignored → silence.

2. **Gain/filter graph was correct, but level was never guaranteed**  
   - You were creating `GainNode` and `BiquadFilterNode` per play, but never explicitly setting gain, relying on default.  
   - I now set `pad.gainNode.gain.value = 1.0` explicitly for clean, predictable output.

3. **Realtime knob moves didn’t affect the running nodes**  
   - Pitch and filter knobs updated `data-value` and UI readout, but **did not touch the active `AudioBufferSourceNode` or `GrainPlayer`**.  
   - I added realtime modulation: moving **Pitch** updates `playbackRate` (and granular `pitchRatio`), moving **Filter** updates the lowpass cutoff on the current pad’s filter node / granular filter.

4. **Granular engine cleanup + UI sync**  
   - When the granular player finished, `pads[padId].grainPlayer` wasn’t cleared and the play button could get out of sync.  
   - The `grainPlayerEnded` handler now also nulls `grainPlayer` and resets the play button state.

5. **Tap tempo & other UI now always wake the audio engine**  
   - Some UI actions (like TAP) could run before any audio call, leaving `AudioContext` uninitialized.  
   - Those now call `initAudioContext()` so the engine is always ready by the time you start playback.

If you paste this script over your existing `<script>` block and open the file in a modern browser, you should be able to:

- Load a sample into Pad 1 or Pad 2  
- Hit **PLAY** and actually hear the sample  
- Twist **Pitch** and **Filter** while it’s playing and hear them respond  
- Use **Keylock + Sync** to flip over to granular, time-stretched playback tied to the master tempo.

**Mike:** update my script with your suggested revisions

**GPT:** Nice, I’ve merged all the audio fixes directly into your uploaded `doom-sampler.html` and produced an updated, ready-to-run file.

### Download the updated file

👉 [Download updated doom-sampler.html](sandbox:/mnt/data/doom-sampler-fixed.html)

Save it somewhere, double-click to open in your browser, then:

1. Load a WAV/MP3 into Pad 1 or Pad 2.  
2. Hit **PLAY** → you should now hear the sample.  
3. Twist **Pitch** and **Filter** while it’s playing → they should modulate in real time.  
4. Enable **Keylock + Sync** to try the granular time-stretching tied to master tempo.

---

### Full updated HTML (with script revisions applied)

Here’s the complete updated file in case you want to diff or copy-paste it manually:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>DOOM Sampler · Tempo-Synced Time-Stretch Engine</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <style>
        :root {
            --bg-dark: #050509;
            --bg-panel: #101018;
            --bg-panel-alt: #0c0c14;
            --accent-orange: #ff6b00;
            --accent-orange-soft: rgba(255, 107, 0, 0.2);
            --accent-cyan: #00f6ff;
            --accent-cyan-soft: rgba(0, 246, 255, 0.15);
            --accent-red: #ff3366;
            --accent-green: #00ff88;
            --border-subtle: #19192a;
            --border-strong: #2a2a3d;
            --text-main: #f5f5f8;
            --text-muted: #8a8aa5;
            --pad-off: #191926;
            --pad-on: #ff6b00;
            --pad-playing: #ffb347;
            --danger: #ff3355;
        }

        * {
            box-sizing: border-box;
        }

        body {
            margin: 0;
            padding: 24px;
            font-family: system-ui, -apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif;
            background: radial-gradient(circle at top, #141427, #040408 55%);
            color: var(--text-main);
        }

        .app-shell {
            max-width: 1120px;
            margin: 0 auto;
            background: radial-gradient(circle at top left, rgba(255, 107, 0, 0.12), transparent 55%),
                        radial-gradient(circle at top right, rgba(0, 246, 255, 0.06), transparent 55%),
                        linear-gradient(145deg, #05050a, #05040c 40%, #05040c);
            border-radius: 24px;
            padding: 24px;
            border: 1px solid rgba(255, 255, 255, 0.04);
            box-shadow:
                0 28px 80px rgba(0, 0, 0, 0.85),
                0 0 0 1px rgba(255, 255, 255, 0.03),
                0 0 60px rgba(255, 107, 0, 0.25);
            position: relative;
            overflow: hidden;
        }

        .app-shell::before {
            content: "";
            position: absolute;
            inset: 0;
            background:
                radial-gradient(circle at 15% 0, rgba(255, 107, 0, 0.2), transparent 50%),
                radial-gradient(circle at 85% 0, rgba(0, 246, 255, 0.15), transparent 50%);
            opacity: 0.35;
            mix-blend-mode: screen;
            pointer-events: none;
        }

        .app-inner {
            position: relative;
            z-index: 1;
        }

        .app-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 20px;
            gap: 16px;
        }

        .app-title-block {
            display: flex;
            align-items: center;
            gap: 14px;
        }

        .doom-badge {
            width: 40px;
            height: 40px;
            border-radius: 14px;
            background:
                radial-gradient(circle at 30% 20%, #ffb347, transparent 60%),
                radial-gradient(circle at 80% 80%, #ff6b00, transparent 65%),
                conic-gradient(from 210deg, #ff6b00, #ffb347, #ff6b00, #ff3366, #ff6b00);
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow:
                0 0 0 1px rgba(0, 0, 0, 0.9),
                0 0 18px rgba(255, 107, 0, 0.5);
            position: relative;
            overflow: hidden;
        }

        .doom-badge-inner {
            width: 26px;
            height: 26px;
            border-radius: 9px;
            background: radial-gradient(circle at 30% 20%, #050508, #080812);
            border: 1px solid rgba(255, 255, 255, 0.09);
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow:
                inset 0 0 12px rgba(0, 0, 0, 0.9),
                0 12px 20px rgba(0, 0, 0, 0.9);
        }

        .doom-badge-inner span {
            font-size: 14px;
            font-weight: 800;
            letter-spacing: 0.14em;
            text-transform: uppercase;
            color: #ffb347;
        }

        .app-title-text h1 {
            font-size: 18px;
            letter-spacing: 0.2em;
            text-transform: uppercase;
            margin: 0 0 4px;
            color: #f7f5ff;
        }

        .app-title-text .subtitle-row {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .app-title-text .subtitle {
            font-size: 11px;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            color: var(--text-muted);
        }

        .badge-chip {
            font-size: 10px;
            text-transform: uppercase;
            letter-spacing: 0.2em;
            padding: 3px 8px;
            border-radius: 999px;
            border: 1px solid rgba(255, 255, 255, 0.12);
            background: linear-gradient(135deg, rgba(255, 107, 0, 0.16), rgba(255, 255, 255, 0.02));
            color: #ffd9a3;
        }

        .app-header-right {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .status-pill {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 4px 10px 4px 4px;
            border-radius: 999px;
            background: rgba(0, 0, 0, 0.6);
            border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .status-pill-dot {
            width: 10px;
            height: 10px;
            border-radius: 999px;
            background: radial-gradient(circle at 30% 30%, #00ff88, #008f4e);
            box-shadow: 0 0 8px rgba(0, 255, 136, 0.7);
        }

        .status-pill span {
            font-size: 11px;
            letter-spacing: 0.14em;
            text-transform: uppercase;
            color: #a7ffcf;
        }

        .profile-chip {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 4px 10px 4px 6px;
            border-radius: 999px;
            background: rgba(10, 10, 18, 0.9);
            border: 1px solid rgba(255, 255, 255, 0.06);
        }

        .profile-avatar {
            width: 22px;
            height: 22px;
            border-radius: 999px;
            background:
                radial-gradient(circle at 30% 20%, #ffb347, transparent 60%),
                radial-gradient(circle at 80% 80%, #ff6b00, transparent 60%);
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow:
                0 0 0 1px rgba(0, 0, 0, 0.95),
                0 0 12px rgba(255, 107, 0, 0.4);
        }

        .profile-avatar span {
            font-size: 11px;
            font-weight: 800;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            color: #050508;
        }

        .profile-label {
            font-size: 11px;
            letter-spacing: 0.14em;
            text-transform: uppercase;
            color: var(--text-muted);
        }

        .app-grid {
            display: grid;
            grid-template-columns: minmax(0, 7fr) minmax(0, 4.5fr);
            gap: 18px;
        }

        .panel {
            background: radial-gradient(circle at top, rgba(255, 255, 255, 0.02), transparent 55%),
                        linear-gradient(145deg, rgba(9, 9, 20, 0.98), rgba(6, 6, 14, 0.98));
            border-radius: 18px;
            padding: 16px 16px 14px;
            border: 1px solid var(--border-subtle);
            box-shadow:
                0 14px 35px rgba(0, 0, 0, 0.75),
                0 0 0 1px rgba(255, 255, 255, 0.02);
            position: relative;
        }

        .panel-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 10px;
        }

        .panel-title {
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.16em;
            color: #c4c4e0;
        }

        .panel-subtitle {
            font-size: 11px;
            color: var(--text-muted);
        }

        .panel-header-right {
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .label-pill {
            font-size: 10px;
            text-transform: uppercase;
            letter-spacing: 0.16em;
            padding: 3px 7px;
            border-radius: 999px;
            border: 1px solid rgba(255, 255, 255, 0.08);
            color: var(--text-muted);
            background: rgba(0, 0, 0, 0.65);
        }

        #waveformCanvas {
            width: 100%;
            height: 140px;
            border-radius: 12px;
            border: 1px solid var(--border-strong);
            background: radial-gradient(circle at top, #121222, #050509);
            display: block;
        }

        .waveform-footer {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 10px;
            font-size: 11px;
            color: var(--text-muted);
        }

        .waveform-tags {
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .tag-chip {
            font-size: 10px;
            text-transform: uppercase;
            letter-spacing: 0.14em;
            padding: 3px 7px;
            border-radius: 999px;
            border: 1px solid rgba(255, 255, 255, 0.08);
            background: rgba(0, 0, 0, 0.7);
            color: #bdbdf5;
        }

        .marker-legend {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .marker-item {
            display: inline-flex;
            align-items: center;
            gap: 4px;
        }

        .marker-dot {
            width: 10px;
            height: 3px;
            border-radius: 999px;
        }

        .marker-dot.start {
            background: var(--accent-green);
        }

        .marker-dot.end {
            background: var(--accent-red);
        }

        .marker-item span {
            font-size: 10px;
            text-transform: uppercase;
            letter-spacing: 0.12em;
        }

        .time-display {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            font-size: 11px;
        }

        .time-display-label {
            color: var(--text-muted);
            text-transform: uppercase;
            letter-spacing: 0.14em;
        }

        .time-display-value {
            padding: 2px 6px;
            border-radius: 999px;
            border: 1px solid rgba(255, 255, 255, 0.09);
            background: rgba(0, 0, 0, 0.7);
            color: #f0f0ff;
            font-family: "SF Mono", Consolas, Menlo, monospace;
            font-size: 11px;
        }

        .browser-row {
            display: grid;
            grid-template-columns: minmax(0, 6.5fr) minmax(0, 4.5fr);
            gap: 14px;
            margin-top: 14px;
        }

        .browser-panel {
            background: radial-gradient(circle at top, rgba(0, 0, 0, 0.7), transparent 55%),
                        linear-gradient(160deg, #0a0a14, #070710);
            border-radius: 14px;
            padding: 10px 10px 8px;
            border: 1px solid var(--border-subtle);
        }

        .browser-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 6px;
        }

        .browser-title {
            font-size: 10px;
            text-transform: uppercase;
            letter-spacing: 0.16em;
            color: #b7b7dd;
        }

        .browser-meta {
            font-size: 10px;
            color: var(--text-muted);
        }

        .sample-list {
            display: flex;
            flex-direction: column;
            gap: 6px;
            margin-top: 4px;
        }

        .sample-row {
            display: grid;
            grid-template-columns: 14px minmax(0, 1fr) auto auto;
            gap: 8px;
            align-items: center;
            font-size: 11px;
            padding: 5px 6px;
            border-radius: 8px;
            background: rgba(255, 255, 255, 0.01);
            border: 1px solid rgba(255, 255, 255, 0.02);
        }

        .sample-row.is-main {
            border-color: rgba(255, 107, 0, 0.5);
            background: radial-gradient(circle at left, rgba(255, 107, 0, 0.18), transparent 60%);
        }

        .sample-row .slot {
            width: 14px;
            height: 14px;
            border-radius: 4px;
            border: 1px solid rgba(255, 255, 255, 0.12);
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .sample-row .slot span {
            font-size: 9px;
            color: rgba(255, 255, 255, 0.75);
        }

        .sample-name {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .sample-name span {
            color: var(--text-main);
        }

        .sample-name .tag {
            color: var(--text-muted);
            text-transform: uppercase;
            letter-spacing: 0.14em;
            margin-left: 8px;
            font-size: 9px;
        }

        .sample-meta {
            font-size: 10px;
            color: var(--text-muted);
            display: flex;
            gap: 8px;
        }

        .sample-meta strong {
            color: #f5f5ff;
            font-weight: 500;
        }

        .sample-actions {
            display: inline-flex;
            gap: 4px;
        }

        .mini-button {
            padding: 3px 7px;
            border-radius: 999px;
            border: 1px solid rgba(255, 255, 255, 0.12);
            background: radial-gradient(circle at top, rgba(255, 255, 255, 0.04), transparent 60%);
            color: #f0f0ff;
            font-size: 10px;
            text-transform: uppercase;
            letter-spacing: 0.14em;
            cursor: pointer;
        }

        .mini-button-ghost {
            padding: 3px 7px;
            border-radius: 999px;
            border: 1px solid rgba(255, 255, 255, 0.05);
            background: transparent;
            color: var(--text-muted);
            font-size: 10px;
            text-transform: uppercase;
            letter-spacing: 0.14em;
            cursor: pointer;
        }

        .sync-panel {
            background: radial-gradient(circle at top, rgba(0, 246, 255, 0.12), transparent 60%);
            border-radius: 12px;
            padding: 8px 10px;
            border: 1px solid rgba(0, 246, 255, 0.25);
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 8px;
            margin-top: 6px;
        }

        .sync-left {
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .sync-dot {
            width: 22px;
            height: 22px;
            border-radius: 999px;
            background: radial-gradient(circle at 30% 30%, #00f6ff, #007a8f);
            box-shadow:
                0 0 0 1px rgba(0, 0, 0, 0.9),
                0 0 16px rgba(0, 246, 255, 0.75);
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .sync-dot-inner {
            width: 10px;
            height: 10px;
            border-radius: 999px;
            background: radial-gradient(circle, #d9ffff, #00a9c4);
        }

        .sync-text {
            font-size: 10px;
            text-transform: uppercase;
            letter-spacing: 0.16em;
            color: #bdf8ff;
        }

        .sync-bpm-display {
            font-size: 11px;
            font-family: "SF Mono", Menlo, Consolas, monospace;
            color: #f3feff;
        }

        .sync-controls {
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .sync-button {
            padding: 3px 9px;
            border-radius: 999px;
            border: 1px solid rgba(0, 246, 255, 0.4);
            background: rgba(0, 0, 0, 0.7);
            color: #c9f9ff;
            font-size: 10px;
            text-transform: uppercase;
            letter-spacing: 0.14em;
            cursor: pointer;
        }

        .sync-button.secondary {
            border-color: rgba(0, 246, 255, 0.15);
            color: #7ed8ea;
        }

        .sync-led {
            width: 8px;
            height: 8px;
            border-radius: 999px;
            border: 1px solid rgba(0, 246, 255, 0.4);
            background: radial-gradient(circle, #002329, #000);
            box-shadow: 0 0 0 0 transparent;
            transition: background 0.2s, box-shadow 0.2s;
        }

        .sync-led.active {
            background: radial-gradient(circle, #c0ffff, #00f6ff);
            box-shadow: 0 0 10px rgba(0, 246, 255, 0.8);
        }

        .macro-grid {
            margin-top: 14px;
            display: grid;
            grid-template-columns: minmax(0, 6fr) minmax(0, 4.2fr);
            gap: 12px;
        }

        .macro-group {
            background: radial-gradient(circle at top, #11111f, #050509);
            border-radius: 14px;
            padding: 10px;
            border: 1px solid var(--border-subtle);
            position: relative;
            overflow: hidden;
        }

        .macro-group::before {
            content: "";
            position: absolute;
            inset: 0;
            background: radial-gradient(circle at 0 0, rgba(255, 107, 0, 0.15), transparent 55%);
            opacity: 0.8;
            pointer-events: none;
        }

        .macro-group-right::before {
            background: radial-gradient(circle at 100% 0, rgba(0, 246, 255, 0.18), transparent 55%);
        }

        .macro-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 8px;
            position: relative;
            z-index: 1;
        }

        .macro-title {
            font-size: 10px;
            text-transform: uppercase;
            letter-spacing: 0.16em;
            color: #cbcbf3;
        }

        .macro-subtitle {
            font-size: 10px;
            color: var(--text-muted);
        }

        .macro-content {
            position: relative;
            z-index: 1;
        }

        .macro-row {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .macro-main {
            flex: 1;
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .macro-labels {
            display: flex;
            flex-direction: column;
            gap: 4px;
            min-width: 80px;
        }

        .macro-label-main {
            font-size: 11px;
            letter-spacing: 0.12em;
            text-transform: uppercase;
        }

        .macro-label-sub {
            font-size: 11px;
            color: var(--text-muted);
        }

        .macro-controls {
            flex: 1;
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }

        .macro-chip {
            font-size: 10px;
            text-transform: uppercase;
            letter-spacing: 0.14em;
            padding: 3px 8px;
            border-radius: 999px;
            border: 1px solid rgba(255, 255, 255, 0.08);
            color: var(--text-muted);
        }

        .macro-chip strong {
            color: #ffe0b8;
            font-weight: 500;
        }

        .macro-knob-block {
            width: 92px;
            text-align: center;
        }

        .macro-knob-label {
            font-size: 10px;
            text-transform: uppercase;
            letter-spacing: 0.14em;
            margin-bottom: 4px;
            color: var(--text-muted);
        }

        .macro-sliders {
            display: flex;
            flex-direction: column;
            gap: 6px;
            flex: 0.95;
        }

        .macro-slider-row {
            display: grid;
            grid-template-columns: 80px minmax(0, 1fr) 50px;
            gap: 8px;
            align-items: center;
        }

        .macro-slider-label {
            font-size: 10px;
            text-transform: uppercase;
            letter-spacing: 0.12em;
            color: #b5b5da;
        }

        .macro-slider-track {
            position: relative;
            height: 8px;
            border-radius: 999px;
            background: radial-gradient(circle at 0 50%, #2b2b40, #121220);
            overflow: hidden;
        }

        .macro-slider-fill {
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            border-radius: 999px;
            background: linear-gradient(90deg, #ff6b00, #ffb347);
            width: 40%;
        }

        .macro-slider-thumb {
            position: absolute;
            top: 50%;
            width: 14px;
            height: 14px;
            border-radius: 999px;
            background: radial-gradient(circle at 30% 30%, #ffe0b8, #ff6b00);
            border: 1px solid rgba(0, 0, 0, 0.9);
            transform: translate(-50%, -50%);
            box-shadow:
                0 0 0 1px rgba(255, 255, 255, 0.12),
                0 0 12px rgba(255, 107, 0, 0.6);
            left: 40%;
        }

        .macro-slider-value {
            font-size: 10px;
            color: #f5f5ff;
            font-family: "SF Mono", Menlo, Consolas, monospace;
        }

        .grid-right-top {
            display: grid;
            grid-template-columns: minmax(0, 1.6fr) minmax(0, 1.4fr);
            gap: 10px;
        }

        .tempo-panel {
            background: radial-gradient(circle at top, rgba(0, 246, 255, 0.15), transparent 55%);
            border-radius: 14px;
            padding: 10px;
            border: 1px solid rgba(0, 246, 255, 0.35);
        }

        .tempo-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 6px;
        }

        .tempo-title {
            font-size: 10px;
            text-transform: uppercase;
            letter-spacing: 0.16em;
            color: #d6fdff;
        }

        .tempo-meta {
            font-size: 10px;
            color: var(--text-muted);
        }

        .tempo-main {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .tempo-knob-block {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .tempo-display {
            display: flex;
            flex-direction: column;
            gap: 4px;
        }

        .tempo-bpm {
            font-size: 20px;
            font-family: "SF Mono", Menlo, Consolas, monospace;
            color: #f4feff;
        }

        .tempo-label {
            font-size: 10px;
            letter-spacing: 0.14em;
            text-transform: uppercase;
            color: var(--text-muted);
        }

        .tempo-buttons {
            display: flex;
            flex-direction: column;
            gap: 4px;
            margin-left: auto;
        }

        .tempo-button {
            padding: 4px 8px;
            border-radius: 999px;
            border: 1px solid rgba(0, 246, 255, 0.3);
            background: rgba(0, 0, 0, 0.7);
            color: #c1f7ff;
            font-size: 10px;
            text-transform: uppercase;
            letter-spacing: 0.14em;
            cursor: pointer;
        }

        .tempo-button.secondary {
            border-color: rgba(0, 246, 255, 0.18);
            color: #8fcfe0;
        }

        .tempo-button:active {
            transform: translateY(1px);
            box-shadow: 0 0 0 0 transparent;
        }

        .tap-active {
            box-shadow: 0 0 12px rgba(0, 246, 255, 0.8);
        }

        .adsr-panel {
            background: radial-gradient(circle at top, rgba(255, 107, 0, 0.18), transparent 55%);
            border-radius: 14px;
            padding: 10px;
            border: 1px solid rgba(255, 107, 0, 0.35);
        }

        .adsr-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 6px;
        }

        .adsr-title {
            font-size: 10px;
            text-transform: uppercase;
            letter-spacing: 0.16em;
            color: #ffe5c7;
        }

        .adsr-meta {
            font-size: 10px;
            color: var(--text-muted);
        }

        #adsrCanvas {
            width: 100%;
            height: 80px;
            border-radius: 10px;
            border: 1px solid rgba(255, 107, 0, 0.4);
            background: radial-gradient(circle at top, #1a1210, #080506);
            display: block;
        }

        .adsr-footer {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 7px;
            font-size: 10px;
            color: var(--text-muted);
        }

        .adsr-tags {
            display: flex;
            gap: 6px;
        }

        .adsr-tag {
            padding: 2px 6px;
            border-radius: 999px;
            border: 1px solid rgba(255, 255, 255, 0.12);
            background: rgba(0, 0, 0, 0.8);
            text-transform: uppercase;
            letter-spacing: 0.14em;
            font-size: 9px;
        }

        .adsr-mode {
            font-size: 10px;
            text-transform: uppercase;
            letter-spacing: 0.12em;
            color: #ffd1a4;
        }

        .pad-section {
            margin-top: 14px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
        }

        .pad-card {
            background: radial-gradient(circle at top, #141420, #050509);
            border-radius: 14px;
            padding: 10px;
            border: 1px solid var(--border-subtle);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7);
            position: relative;
        }

        .pad-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 8px;
        }

        .pad-title {
            font-size: 10px;
            text-transform: uppercase;
            letter-spacing: 0.16em;
            color: #dedff8;
        }

        .pad-meta {
            font-size: 10px;
            color: var(--text-muted);
        }

        .pad-load-row {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 8px;
        }

        .pad-load-button {
            padding: 5px 10px;
            border-radius: 999px;
            border: 1px solid rgba(255, 255, 255, 0.16);
            background: radial-gradient(circle at top, rgba(255, 255, 255, 0.04), transparent 60%);
            color: #f5f5ff;
            font-size: 10px;
            text-transform: uppercase;
            letter-spacing: 0.14em;
            cursor: pointer;
        }

        .pad-load-button span {
            opacity: 0.9;
        }

        .pad-sample-name {
            flex: 1;
            font-size: 11px;
            color: var(--text-muted);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .pad-sample-name.loaded {
            color: #f5f5ff;
        }

        .pad-bpm-chip {
            font-size: 10px;
            text-transform: uppercase;
            letter-spacing: 0.14em;
            padding: 3px 7px;
            border-radius: 999px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            background: rgba(0, 0, 0, 0.8);
            color: #c2c2f4;
        }

        .pad-waveform {
            width: 100%;
            height: 62px;
            border-radius: 10px;
            border: 1px solid var(--border-strong);
            background: radial-gradient(circle at top, #131322, #050509);
            margin-bottom: 8px;
            position: relative;
            overflow: hidden;
        }

        .pad-controls-row {
            display: grid;
            grid-template-columns: minmax(0, 3.4fr) minmax(0, 4.6fr);
            gap: 8px;
            align-items: center;
        }

        .pad-play-block {
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .pad-play-button {
            width: 44px;
            height: 44px;
            border-radius: 14px;
            background: radial-gradient(circle at 30% 20%, #ffe0b8, #ff6b00);
            border: 1px solid rgba(0, 0, 0, 0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            box-shadow:
                0 0 0 1px rgba(255, 255, 255, 0.16),
                0 12px 25px rgba(0, 0, 0, 0.85),
                0 0 18px rgba(255, 107, 0, 0.65);
            position: relative;
        }

        .pad-play-button:disabled {
            opacity: 0.35;
            cursor: default;
            box-shadow: none;
        }

        .pad-play-button .play-icon {
            width: 0;
            height: 0;
            border-top: 7px solid transparent;
            border-bottom: 7px solid transparent;
            border-left: 11px solid #050509;
            margin-left: 3px;
        }

        .pad-play-button .stop-icon {
            width: 11px;
            height: 11px;
            border-radius: 3px;
            background: #050509;
            display: none;
        }

        .pad-play-button.playing .play-icon {
            display: none;
        }

        .pad-play-button.playing .stop-icon {
            display: block;
        }

        .pad-indicator {
            width: 10px;
            height: 34px;
            border-radius: 999px;
            background: radial-gradient(circle at 50% 0, #2f2f42, #11111f);
            border: 1px solid rgba(255, 255, 255, 0.12);
            position: relative;
            overflow: hidden;
        }

        .pad-indicator::before {
            content: "";
            position: absolute;
            inset: 3px;
            border-radius: 999px;
            background: radial-gradient(circle at 50% 0, #26263a, #0b0b14);
            opacity: 0.8;
        }

        .pad-indicator-led {
            position: absolute;
            left: 50%;
            top: 50%;
            width: 6px;
            height: 18px;
            transform: translate(-50%, -50%);
            border-radius: 999px;
            background: radial-gradient(circle at 50% 0, rgba(255, 107, 0, 0.14), rgba(255, 107, 0, 0.02));
            box-shadow: 0 0 0 0 transparent;
        }

        .pad-indicator.loaded .pad-indicator-led {
            background: radial-gradient(circle at 50% 0, rgba(255, 107, 0, 0.4), rgba(255, 107, 0, 0.08));
        }

        .pad-indicator.playing .pad-indicator-led {
            background: radial-gradient(circle at 50% 0, #ffb347, #ff6b00);
            box-shadow: 0 0 12px rgba(255, 107, 0, 0.9);
        }

        .pad-identify-button {
            padding: 4px 8px;
            border-radius: 999px;
            border: 1px solid rgba(255, 255, 255, 0.16);
            background: radial-gradient(circle at top, rgba(255, 255, 255, 0.05), transparent 60%);
            color: #f5f5ff;
            font-size: 10px;
            text-transform: uppercase;
            letter-spacing: 0.14em;
            cursor: pointer;
        }

        .pad-identify-button span {
            opacity: 0.9;
        }

        .pad-second-row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 8px;
        }

        .pad-sync-group {
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .pad-sync-button {
            padding: 3px 8px;
            border-radius: 999px;
            border: 1px solid rgba(0, 246, 255, 0.3);
            background: rgba(0, 0, 0, 0.75);
            color: #b9f4ff;
            font-size: 10px;
            text-transform: uppercase;
            letter-spacing: 0.14em;
            cursor: pointer;
        }

        .pad-sync-button.active {
            background: radial-gradient(circle at 50% 0, rgba(0, 246, 255, 0.3), rgba(0, 0, 0, 0.9));
            box-shadow: 0 0 10px rgba(0, 246, 255, 0.75);
        }

        .pad-keylock-button {
            padding: 3px 8px;
            border-radius: 999px;
            border: 1px solid rgba(255, 255, 255, 0.16);
            background: rgba(0, 0, 0, 0.75);
            color: #d9d9ff;
            font-size: 10px;
            text-transform: uppercase;
            letter-spacing: 0.14em;
            cursor: pointer;
        }

        .pad-keylock-button.active {
            background: radial-gradient(circle at 50% 0, rgba(255, 107, 0, 0.35), rgba(0, 0, 0, 0.9));
            box-shadow: 0 0 10px rgba(255, 107, 0, 0.7);
        }

        .pad-stretch-display {
            font-size: 10px;
            text-transform: uppercase;
            letter-spacing: 0.14em;
            color: var(--text-muted);
            display: flex;
            align-items: center;
            gap: 5px;
            opacity: 0;
            transform: translateY(3px);
            transition: opacity 0.18s ease, transform 0.18s ease;
        }

        .pad-stretch-display.visible {
            opacity: 1;
            transform: translateY(0);
        }

        .pad-stretch-label {
            opacity: 0.7;
        }

        .pad-stretch-value {
            font-family: "SF Mono", Menlo, Consolas, monospace;
            color: #ffe3bd;
        }

        .pad-stretch-value.warning {
            color: #ffd86b;
        }

        .pad-stretch-value.extreme {
            color: #ff6b8b;
        }

        .pad-knobs-row {
            display: grid;
            grid-template-columns: repeat(2, 80px);
            gap: 8px;
            margin-top: 6px;
        }

        .knob-block {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 4px;
        }

        .knob-label {
            font-size: 10px;
            text-transform: uppercase;
            letter-spacing: 0.14em;
            color: var(--text-muted);
        }

        .knob-value {
            font-size: 10px;
            font-family: "SF Mono", Menlo, Consolas, monospace;
            color: #f5f5ff;
        }

        .knob {
            width: 46px;
            height: 46px;
            border-radius: 999px;
            background: radial-gradient(circle at 30% 20%, #1d1d2e, #050509);
            border: 1px solid rgba(255, 255, 255, 0.12);
            box-shadow:
                0 10px 16px rgba(0, 0, 0, 0.9),
                inset 0 0 15px rgba(0, 0, 0, 0.95);
            position: relative;
            cursor: pointer;
        }

        .knob-inner {
            position: absolute;
            inset: 4px;
            border-radius: 999px;
            background: radial-gradient(circle at 30% 20%, #2c2c40, #050509);
            box-shadow:
                0 0 0 1px rgba(255, 255, 255, 0.08),
                inset 0 0 12px rgba(0, 0, 0, 0.95);
        }

        .knob-indicator {
            position: absolute;
            width: 3px;
            height: 12px;
            border-radius: 999px;
            background: linear-gradient(to bottom, #ffe0b8, #ff6b00);
            top: 6px;
            left: 50%;
            transform-origin: 50% 16px;
            transform: translateX(-50%) rotate(0deg);
        }

        .knob-center {
            position: absolute;
            inset: 16px;
            border-radius: 999px;
            background: radial-gradient(circle at 30% 20%, #ffe0b8, #ff6b00);
            box-shadow:
                0 0 0 1px rgba(0, 0, 0, 0.9),
                0 0 8px rgba(255, 107, 0, 0.6);
        }

        .pad-footer-info {
            margin-top: 8px;
            font-size: 10px;
            color: var(--text-muted);
            display: flex;
            justify-content: space-between;
        }

        .pad-footer-tags {
            display: flex;
            gap: 6px;
            flex-wrap: wrap;
        }

        .pad-footer-tag {
            padding: 2px 6px;
            border-radius: 999px;
            border: 1px solid rgba(255, 255, 255, 0.12);
            background: rgba(0, 0, 0, 0.8);
            text-transform: uppercase;
            letter-spacing: 0.14em;
            font-size: 9px;
        }

        .pad-footer-mode {
            font-size: 10px;
            text-transform: uppercase;
            letter-spacing: 0.12em;
            color: #ffb347;
        }

        .transport-bar {
            margin-top: 14px;
            border-radius: 12px;
            padding: 8px 10px;
            background: radial-gradient(circle at 0 100%, rgba(255, 107, 0, 0.2), transparent 55%);
            border: 1px solid rgba(255, 255, 255, 0.08);
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 10px;
            color: var(--text-muted);
        }

        .transport-left {
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .transport-dot {
            width: 14px;
            height: 14px;
            border-radius: 999px;
            background: radial-gradient(circle at 30% 20%, #ffb347, #ff6b00);
            box-shadow:
                0 0 0 1px rgba(0, 0, 0, 0.9),
                0 0 12px rgba(255, 107, 0, 0.75);
        }

        .transport-label {
            text-transform: uppercase;
            letter-spacing: 0.14em;
        }

        .transport-center {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .transport-time {
            font-family: "SF Mono", Menlo, Consolas, monospace;
            color: #f5f5ff;
        }

        .transport-right {
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .transport-btn {
            padding: 3px 8px;
            border-radius: 999px;
            border: 1px solid rgba(255, 255, 255, 0.13);
            background: rgba(0, 0, 0, 0.7);
            color: #f5f5ff;
            font-size: 10px;
            text-transform: uppercase;
            letter-spacing: 0.14em;
            cursor: pointer;
        }

        .transport-btn.secondary {
            border-color: rgba(255, 255, 255, 0.08);
            color: var(--text-muted);
        }

        .transport-btn.danger {
            border-color: rgba(255, 51, 85, 0.45);
            color: #ffbac7;
        }

        .transport-btn.danger .dot {
            width: 6px;
            height: 6px;
            border-radius: 999px;
            background: radial-gradient(circle at 30% 30%, #ffe0e6, #ff3355);
            display: inline-block;
            margin-right: 4px;
            box-shadow: 0 0 8px rgba(255, 51, 85, 0.9);
        }

        .transport-btn span {
            display: inline-block;
            vertical-align: middle;
        }

        .transport-btn:active {
            transform: translateY(1px);
            box-shadow: 0 0 0 0 transparent;
        }

        @media (max-width: 900px) {
            body {
                padding: 16px;
            }

            .app-shell {
                padding: 18px;
            }

            .app-grid {
                grid-template-columns: minmax(0, 1fr);
            }

            .browser-row {
                grid-template-columns: minmax(0, 1fr);
            }

            .macro-grid {
                grid-template-columns: minmax(0, 1fr);
            }

            .grid-right-top {
              grid-template-columns: minmax(0, 1fr);
            }

            .pad-section {
                grid-template-columns: minmax(0, 1fr);
            }
        }

        @media (max-width: 640px) {
            .app-header {
                flex-direction: column;
                align-items: flex-start;
                gap: 10px;
            }

            .app-header-right {
                align-self: stretch;
                justify-content: space-between;
            }

            .transport-bar {
                flex-direction: column;
                align-items: flex-start;
                gap: 8px;
            }

            .transport-center {
                width: 100%;
                justify-content: space-between;
            }

            .transport-right {
                width: 100%;
                justify-content: flex-end;
            }
        }
    </style>
</head>
<body>
<div class="app-shell">
    <div class="app-inner">
        <header class="app-header">
            <div class="app-title-block">
                <div class="doom-badge">
                    <div class="doom-badge-inner">
                        <span>DS</span>
                    </div>
                </div>
                <div class="app-title-text">
                    <h1>DOOM SAMPLER</h1>
                    <div class="subtitle-row">
                        <div class="subtitle">Tempo-Synced Time-Stretch Engine</div>
                        <div class="badge-chip">Granular Lock · Double-Deck</div>
                    </div>
                </div>
            </div>
            <div class="app-header-right">
                <div class="status-pill">
                    <div class="status-pill-dot"></div>
                    <span>Engine Ready</span>
                </div>
                <div class="profile-chip">
                    <div class="profile-avatar">
                        <span>PR</span>
                    </div>
                    <div class="profile-label">Profile: Producer</div>
                </div>
            </div>
        </header>

        <div class="app-grid">
            <div class="panel">
                <div class="panel-header">
                    <div>
                        <div class="panel-title">Waveform Editor</div>
                        <div class="panel-subtitle">Trim, focus and monitor source material</div>
                    </div>
                    <div class="panel-header-right">
                        <div class="label-pill">Source Deck</div>
                        <div class="label-pill">HQ Mode</div>
                    </div>
                </div>

                <canvas id="waveformCanvas"></canvas>

                <div class="waveform-footer">
                    <div class="waveform-tags">
                        <div class="tag-chip">Loop Focus</div>
                        <div class="tag-chip">Transient Map</div>
                        <div class="tag-chip">Phase-Safe</div>
                    </div>
                    <div class="marker-legend">
                        <div class="marker-item">
                            <div class="marker-dot start"></div>
                            <span>Start</span>
                        </div>
                        <div class="marker-item">
                            <div class="marker-dot end"></div>
                            <span>End</span>
                        </div>
                        <div class="time-display">
                            <span class="time-display-label">Window</span>
                            <span class="time-display-value">00.00s – 08.00s</span>
                        </div>
                    </div>
                </div>

                <div class="browser-row">
                    <div class="browser-panel">
                        <div class="browser-header">
                            <div>
                                <div class="browser-title">Sample Browser</div>
                                <div class="browser-meta">Curated loops, breaks and source material</div>
                            </div>
                            <button class="mini-button-ghost">Import Folder</button>
                        </div>

                        <div class="sample-list">
                            <div class="sample-row is-main">
                                <div class="slot"><span>A</span></div>
                                <div class="sample-name">
                                    <span>doom-break_core-loop_172bpm.wav</span>
                                    <span class="tag">active</span>
                                </div>
                                <div class="sample-meta">
                                    <span><strong>172</strong> BPM</span>
                                    <span><strong>4/4</strong></span>
                                </div>
                                <div class="sample-actions">
                                    <button class="mini-button">Focus</button>
                                </div>
                            </div>
                            <div class="sample-row">
                                <div class="slot"><span>B</span></div>
                                <div class="sample-name">
                                    <span>doom-reese_sub-pad_86bpm.wav</span>
                                </div>
                                <div class="sample-meta">
                                    <span><strong>86</strong> BPM</span>
                                    <span><strong>4/4</strong></span>
                                </div>
                                <div class="sample-actions">
                                    <button class="mini-button-ghost">Queue</button>
                                </div>
                            </div>
                            <div class="sample-row">
                                <div class="slot"><span>C</span></div>
                                <div class="sample-name">
                                    <span>doom-vocal-frag_140bpm.wav</span>
                                </div>
                                <div class="sample-meta">
                                    <span><strong>140</strong> BPM</span>
                                    <span><strong>4/4</strong></span>
                                </div>
                                <div class="sample-actions">
                                    <button class="mini-button-ghost">Queue</button>
                                </div>
                            </div>
                        </div>

                        <div class="sync-panel">
                            <div class="sync-left">
                                <div class="sync-dot">
                                    <div class="sync-dot-inner"></div>
                                </div>
                                <div>
                                    <div class="sync-text">Global Tempo Lock</div>
                                    <div class="sync-bpm-display" id="master-tempo-display">120 BPM</div>
                                </div>
                            </div>
                            <div class="sync-controls">
                                <button class="sync-button" id="tap-tempo-btn">Tap Tempo</button>
                                <button class="sync-button secondary">Link External</button>
                                <div class="sync-led" id="sync-led-global"></div>
                            </div>
                        </div>
                    </div>

                    <div class="browser-panel">
                        <div class="browser-header">
                            <div>
                                <div class="browser-title">Analysis & Routing</div>
                                <div class="browser-meta">Transient map, latency and source alignment</div>
                            </div>
                            <div class="label-pill">Scope View</div>
                        </div>

                        <div class="macro-grid">
                            <div class="macro-group">
                                <div class="macro-header">
                                    <div class="macro-title">Transient Radar</div>
                                    <div class="macro-subtitle">Detects, clusters & quantizes on grid</div>
                                </div>
                                <div class="macro-content">
                                    <div class="macro-row">
                                        <div class="macro-main">
                                            <div class="macro-labels">
                                                <div class="macro-label-main">Transient Map</div>
                                                <div class="macro-label-sub">Peaks & density across loop</div>
                                            </div>
                                            <div class="macro-controls">
                                                <div class="macro-chip">Clusters: <strong>4x</strong></div>
                                                <div class="macro-chip">Grid: <strong>1/16</strong></div>
                                                <div class="macro-chip">Sensitivity: <strong>72%</strong></div>
                                            </div>
                                        </div>
                                        <div class="macro-knob-block">
                                            <div class="macro-knob-label">Intensity</div>
                                            <div class="knob" data-min="0" data-max="100" data-value="72">
                                                <div class="knob-inner">
                                                    <div class="knob-indicator"></div>
                                                    <div class="knob-center"></div>
                                                </div>
                                            </div>
                                            <div class="knob-value">72%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="macro-group macro-group-right">
                                <div class="macro-header">
                                    <div class="macro-title">Phase & Alignment</div>
                                    <div class="macro-subtitle">Stereo field and latency compensation</div>
                                </div>
                                <div class="macro-content">
                                    <div class="macro-row">
                                        <div class="macro-sliders">
                                            <div class="macro-slider-row">
                                                <div class="macro-slider-label">Stereo Width</div>
                                                <div class="macro-slider-track">
                                                    <div class="macro-slider-fill" style="width: 68%;"></div>
                                                    <div class="macro-slider-thumb" style="left: 68%;"></div>
                                                </div>
                                                <div class="macro-slider-value">68%</div>
                                            </div>
                                            <div class="macro-slider-row">
                                                <div class="macro-slider-label">Latency</div>
                                                <div class="macro-slider-track">
                                                    <div class="macro-slider-fill" style="width: 22%;"></div>
                                                    <div class="macro-slider-thumb" style="left: 22%;"></div>
                                                </div>
                                                <div class="macro-slider-value">+2.1ms</div>
                                            </div>
                                        </div>
                                        <div class="macro-controls" style="flex: 0.8;">
                                            <div class="macro-chip">Phase: <strong>Coherent</strong></div>
                                            <div class="macro-chip">Polarity: <strong>Normal</strong></div>
                                            <div class="macro-chip">Safe Mode: <strong>On</strong></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="transport-bar">
                    <div class="transport-left">
                        <div class="transport-dot"></div>
                        <div class="transport-label">Session Transport</div>
                    </div>
                    <div class="transport-center">
                        <div class="time-display">
                            <span class="time-display-label">Locator</span>
                            <span class="time-display-value transport-time">01:02.3</span>
                        </div>
                        <div class="time-display">
                            <span class="time-display-label">Loop</span>
                            <span class="time-display-value">4 bars</span>
                        </div>
                    </div>
                    <div class="transport-right">
                        <button class="transport-btn secondary">Metronome</button>
                        <button class="transport-btn">Follow Host</button>
                        <button class="transport-btn danger"><span class="dot"></span><span>Arm Resample</span></button>
                    </div>
                </div>
            </div>

            <div class="panel">
                <div class="grid-right-top">
                    <div class="tempo-panel">
                        <div class="tempo-header">
                            <div>
                                <div class="tempo-title">Global Tempo</div>
                                <div class="tempo-meta">Controls master grid & sync engine</div>
                            </div>
                            <div class="label-pill">Host-Link</div>
                        </div>
                        <div class="tempo-main">
                            <div class="tempo-knob-block">
                                <div class="knob-block">
                                    <div class="knob-label">Master</div>
                                    <div class="knob" id="master-tempo-knob" data-min="60" data-max="180" data-value="120">
                                        <div class="knob-inner">
                                            <div class="knob-indicator"></div>
                                            <div class="knob-center"></div>
                                        </div>
                                    </div>
                                    <div class="knob-value">120 BPM</div>
                                </div>
                            </div>
                            <div class="tempo-display">
                                <div class="tempo-bpm" id="master-tempo-readout">120.0</div>
                                <div class="tempo-label">BPM / GRID</div>
                            </div>
                            <div class="tempo-buttons">
                                <button class="tempo-button" id="tap-tempo-btn-dup">Tap</button>
                                <button class="tempo-button secondary">Nudge ±</button>
                            </div>
                        </div>
                    </div>

                    <div class="adsr-panel">
                        <div class="adsr-header">
                            <div>
                                <div class="adsr-title">Dynamics Envelope</div>
                                <div class="adsr-meta">Shared ADSR across both decks</div>
                            </div>
                            <div class="label-pill">Per-Pad Override</div>
                        </div>
                        <canvas id="adsrCanvas"></canvas>
                        <div class="adsr-footer">
                            <div class="adsr-tags">
                                <div class="adsr-tag">Clickless</div>
                                <div class="adsr-tag">Phase-Aligned</div>
                                <div class="adsr-tag">Zero-Cross</div>
                            </div>
                            <div class="adsr-mode">Mode: Punchy Glue</div>
                        </div>
                    </div>
                </div>

                <div class="pad-section">
                    <div class="pad-card" id="pad1">
                        <div class="pad-header">
                            <div>
                                <div class="pad-title">Pad A · Drum / Break Deck</div>
                                <div class="pad-meta">Ideal for full breaks, rhythmic loops & stabs</div>
                            </div>
                            <div class="pad-bpm-chip"><span id="pad1-bpm">—</span></div>
                        </div>

                        <div class="pad-load-row">
                            <button class="pad-load-button" id="pad1-load"><span>Load Sample</span></button>
                            <input type="file" id="pad1-file" accept="audio/*" style="display: none;">
                            <div class="pad-sample-name" id="pad1-sample-name">Drop a break, loop or stab here…</div>
                        </div>

                        <div class="pad-waveform" id="pad1-waveform"></div>

                        <div class="pad-controls-row">
                            <div class="pad-play-block">
                                <button class="pad-play-button" id="pad1-play" disabled>
                                    <div class="play-icon"></div>
                                    <div class="stop-icon"></div>
                                </button>
                                <div class="pad-indicator" id="pad1-indicator">
                                    <div class="pad-indicator-led"></div>
                                </div>
                                <button class="pad-identify-button" id="pad1-identify"><span>Identify Tempo</span></button>
                            </div>

                            <div>
                                <div class="pad-second-row">
                                    <div class="pad-sync-group">
                                        <button class="pad-sync-button" id="pad1-sync">Sync to Master</button>
                                        <div class="sync-led" id="pad1-sync-led"></div>
                                    </div>
                                    <button class="pad-keylock-button" id="pad1-keylock">Keylock / Stretch</button>
                                </div>
                                <div class="pad-stretch-display" id="pad1-stretch-display">
                                    <span class="pad-stretch-label">Stretch</span>
                                    <span class="pad-stretch-value" id="pad1-stretch-value">100%</span>
                                </div>
                            </div>
                        </div>

                        <div class="pad-knobs-row">
                            <div class="knob-block">
                                <div class="knob-label">Pitch</div>
                                <div class="knob" id="pad1-pitch" data-min="-12" data-max="12" data-value="0">
                                    <div class="knob-inner">
                                        <div class="knob-indicator"></div>
                                        <div class="knob-center"></div>
                                    </div>
                                </div>
                                <div class="knob-value">0 st</div>
                            </div>
                            <div class="knob-block">
                                <div class="knob-label">Filter</div>
                                <div class="knob" id="pad1-filter" data-min="0" data-max="100" data-value="100">
                                    <div class="knob-inner">
                                        <div class="knob-indicator"></div>
                                        <div class="knob-center"></div>
                                    </div>
                                </div>
                                <div class="knob-value">100%</div>
                            </div>
                        </div>

                        <div class="pad-footer-info">
                            <div class="pad-footer-tags">
                                <div class="pad-footer-tag">Break Safe</div>
                                <div class="pad-footer-tag">Transient Locked</div>
                            </div>
                            <div class="pad-footer-mode">Mode: Tight Break</div>
                        </div>
                    </div>

                    <div class="pad-card" id="pad2">
                        <div class="pad-header">
                            <div>
                                <div class="pad-title">Pad B · Tonal / Atmos Deck</div>
                                <div class="pad-meta">Perfect for atmospheres, chords & melodic loops</div>
                            </div>
                            <div class="pad-bpm-chip"><span id="pad2-bpm">—</span></div>
                        </div>

                        <div class="pad-load-row">
                            <button class="pad-load-button" id="pad2-load"><span>Load Sample</span></button>
                            <input type="file" id="pad2-file" accept="audio/*" style="display: none;">
                            <div class="pad-sample-name" id="pad2-sample-name">Drop a pad, reese, vocal or bed here…</div>
                        </div>

                        <div class="pad-waveform" id="pad2-waveform"></div>

                        <div class="pad-controls-row">
                            <div class="pad-play-block">
                                <button class="pad-play-button" id="pad2-play" disabled>
                                    <div class="play-icon"></div>
                                    <div class="stop-icon"></div>
                                </button>
                                <div class="pad-indicator" id="pad2-indicator">
                                    <div class="pad-indicator-led"></div>
                                </div>
                                <button class="pad-identify-button" id="pad2-identify"><span>Identify Tempo</span></button>
                            </div>

                            <div>
                                <div class="pad-second-row">
                                    <div class="pad-sync-group">
                                        <button class="pad-sync-button" id="pad2-sync">Sync to Master</button>
                                        <div class="sync-led" id="pad2-sync-led"></div>
                                    </div>
                                    <button class="pad-keylock-button" id="pad2-keylock">Keylock / Stretch</button>
                                </div>
                                <div class="pad-stretch-display" id="pad2-stretch-display">
                                    <span class="pad-stretch-label">Stretch</span>
                                    <span class="pad-stretch-value" id="pad2-stretch-value">100%</span>
                                </div>
                            </div>
                        </div>

                        <div class="pad-knobs-row">
                            <div class="knob-block">
                                <div class="knob-label">Pitch</div>
                                <div class="knob" id="pad2-pitch" data-min="-12" data-max="12" data-value="0">
                                    <div class="knob-inner">
                                        <div class="knob-indicator"></div>
                                        <div class="knob-center"></div>
                                    </div>
                                </div>
                                <div class="knob-value">0 st</div>
                            </div>
                            <div class="knob-block">
                                <div class="knob-label">Filter</div>
                                <div class="knob" id="pad2-filter" data-min="0" data-max="100" data-value="100">
                                    <div class="knob-inner">
                                        <div class="knob-indicator"></div>
                                        <div class="knob-center"></div>
                                    </div>
                                </div>
                                <div class="knob-value">100%</div>
                            </div>
                        </div>

                        <div class="pad-footer-info">
                            <div class="pad-footer-tags">
                                <div class="pad-footer-tag">Key-Safe</div>
                                <div class="pad-footer-tag">Texture Lock</div>
                            </div>
                            <div class="pad-footer-mode">Mode: Wide Atmos</div>
                        </div>
                    </div>
                </div>

                <div class="transport-bar" style="margin-top: 10px;">
                    <div class="transport-left">
                        <div class="transport-dot"></div>
                        <div class="transport-label">Deck Controls</div>
                    </div>
                    <div class="transport-center">
                        <div class="time-display">
                            <span class="time-display-label">Reverse</span>
                            <span class="time-display-value">Off</span>
                        </div>
                        <div class="time-display">
                            <span class="time-display-label">Crossfade</span>
                            <span class="time-display-value">Neutral</span>
                        </div>
                    </div>
                    <div class="transport-right">
                        <button class="transport-btn" id="reverseBtn">Reverse All</button>
                        <button class="transport-btn secondary">Safe Stop</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
    // Audio Context and Master State
    let audioContext = null;
    let masterTempo = 120;
    
    const pads = {
        pad1: {
            buffer: null,
            source: null,
            gainNode: null,
            filterNode: null,
            isPlaying: false,
            detectedBPM: null,
            keylock: false,
            synced: false,
            stretchRatio: 1.0,
            grainPlayer: null
        },
        pad2: {
            buffer: null,
            source: null,
            gainNode: null,
            filterNode: null,
            isPlaying: false,
            detectedBPM: null,
            keylock: false,
            synced: false,
            stretchRatio: 1.0,
            grainPlayer: null
        }
    };

    // Tap tempo state
    let tapTimes = [];
    const TAP_TIMEOUT = 2000;

    // ============================================
    // AUDIO CONTEXT INIT / AUTOPLAY FIX
    // ============================================
    // FIX: ensure AudioContext is created AND resumed on user gesture,
    // otherwise some browsers stay in "suspended" state and you hear nothing.
    function initAudioContext() {
        if (!audioContext) {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
        }

        if (audioContext.state === 'suspended') {
            audioContext.resume().catch(err => {
                console.warn('AudioContext resume failed:', err);
            });
        }

        return audioContext;
    }

    // ============================================
    // GRANULAR TIME-STRETCH ENGINE
    // ============================================
    class GrainPlayer {
        constructor(ctx, buffer, destination) {
            this.ctx = ctx;
            this.buffer = buffer;
            this.destination = destination;
            this.isPlaying = false;
            this.playbackPosition = 0;
            this.stretchRatio = 1.0;
            this.pitchRatio = 1.0;
            this.grainSize = 0.08; // 80ms grains
            this.overlap = 0.5;
            this.scheduledGrains = [];
            this.intervalId = null;
            this.gainNode = ctx.createGain();
            this.filterNode = ctx.createBiquadFilter();
            this.filterNode.type = 'lowpass';
            this.filterNode.frequency.value = 20000;
            this.gainNode.connect(this.filterNode);
            this.filterNode.connect(destination);
        }

        start() {
            if (this.isPlaying) return;
            this.isPlaying = true;
            this.playbackPosition = 0;
            this.scheduleGrains();
        }

        stop() {
            this.isPlaying = false;
            if (this.intervalId) {
                clearInterval(this.intervalId);
                this.intervalId = null;
            }
            this.scheduledGrains.forEach(grain => {
                try { grain.stop(); } catch(e) {}
            });
            this.scheduledGrains = [];
        }

        setStretchRatio(ratio) {
            this.stretchRatio = Math.max(0.5, Math.min(2.0, ratio));
        }

        setPitchRatio(ratio) {
            this.pitchRatio = ratio;
        }

        setFilterFrequency(freq) {
            this.filterNode.frequency.value = freq;
        }

        scheduleGrains() {
            const grainInterval = this.grainSize * (1 - this.overlap) * 1000;
            
            this.intervalId = setInterval(() => {
                if (!this.isPlaying) return;
                
                const now = this.ctx.currentTime;
                const duration = this.buffer.duration;
                
                // Create grain
                const grain = this.ctx.createBufferSource();
                grain.buffer = this.buffer;
                grain.playbackRate.value = this.pitchRatio;
                
                // Envelope for smooth crossfade
                const envelope = this.ctx.createGain();
                envelope.gain.setValueAtTime(0, now);
                envelope.gain.linearRampToValueAtTime(1, now + this.grainSize * 0.1);
                envelope.gain.setValueAtTime(1, now + this.grainSize * 0.9);
                envelope.gain.linearRampToValueAtTime(0, now + this.grainSize);
                
                grain.connect(envelope);
                envelope.connect(this.gainNode);
                
                // Calculate playback position
                const startOffset = this.playbackPosition * duration;
                const grainDuration = this.grainSize * this.pitchRatio;
                
                grain.start(now, startOffset, grainDuration);
                grain.stop(now + this.grainSize);
                
                this.scheduledGrains.push(grain);
                
                // Clean up old grains
                this.scheduledGrains = this.scheduledGrains.filter(g => {
                    try {
                        return g.context.currentTime < now + this.grainSize * 2;
                    } catch(e) {
                        return false;
                    }
                });
                
                // Advance position based on stretch ratio
                const advancement = (this.grainSize * (1 - this.overlap) * this.pitchRatio) / (duration * this.stretchRatio);
                this.playbackPosition += advancement;
                
                // Loop or stop at end
                if (this.playbackPosition >= 1) {
                    this.playbackPosition = 0;
                    this.stop();
                    // Trigger UI update
                    document.dispatchEvent(new CustomEvent('grainPlayerEnded', { detail: this }));
                }
                
            }, grainInterval);
        }
    }

    // ============================================
    // TEMPO SYNC FUNCTIONS
    // ============================================
    
    function updateMasterTempo(bpm) {
        masterTempo = Math.max(60, Math.min(180, bpm));
        document.getElementById('master-tempo-display').textContent = `${Math.round(masterTempo)} BPM`;
        
        const readout = document.getElementById('master-tempo-readout');
        if (readout) {
            readout.textContent = masterTempo.toFixed(1);
        }

        Object.keys(pads).forEach(padId => {
            if (pads[padId].synced && pads[padId].detectedBPM) {
                syncPadToMaster(padId);
            }
        });
    }

    function syncPadToMaster(padId) {
        const pad = pads[padId];
        if (!pad.detectedBPM || !pad.keylock) {
            alert('Please load a sample, detect tempo, and enable Keylock first.');
            return false;
        }
        
        const stretchRatio = masterTempo / pad.detectedBPM;
        pad.stretchRatio = stretchRatio;
        pad.synced = true;
        
        updateStretchDisplay(padId, stretchRatio);
        document.getElementById(`${padId}-sync`).classList.add('active');
        document.getElementById(`${padId}-sync-led`).classList.add('active');
        
        if (pad.grainPlayer && pad.isPlaying) {
            pad.grainPlayer.setStretchRatio(stretchRatio);
        }
        
        return true;
    }

    function unsyncPad(padId) {
        const pad = pads[padId];
        pad.synced = false;
        pad.stretchRatio = 1.0;
        
        document.getElementById(`${padId}-sync`).classList.remove('active');
        document.getElementById(`${padId}-sync-led`).classList.remove('active');
        document.getElementById(`${padId}-stretch-display`).classList.remove('visible');
        
        if (pad.grainPlayer) {
            pad.grainPlayer.setStretchRatio(1.0);
        }
    }

    function toggleKeylock(padId) {
        const pad = pads[padId];
        pad.keylock = !pad.keylock;
        
        const btn = document.getElementById(`${padId}-keylock`);
        const stretchDisplay = document.getElementById(`${padId}-stretch-display`);
        
        if (pad.keylock) {
            btn.classList.add('active');
            if (pad.synced) {
                stretchDisplay.classList.add('visible');
            }
        } else {
            btn.classList.remove('active');
            stretchDisplay.classList.remove('visible');
            unsyncPad(padId);
        }
    }

    function updateStretchDisplay(padId, ratio) {
        const display = document.getElementById(`${padId}-stretch-display`);
        const value = document.getElementById(`${padId}-stretch-value`);
        
        display.classList.add('visible');
        const percent = Math.round(ratio * 100);
        value.textContent = `${percent}%`;
        
        value.classList.remove('warning', 'extreme');
        if (ratio < 0.75 || ratio > 1.25) {
            value.classList.add('extreme');
        } else if (ratio < 0.9 || ratio > 1.1) {
            value.classList.add('warning');
        }
    }

    function handleTapTempo() {
        const now = Date.now();
        
        tapTimes = tapTimes.filter(t => now - t < TAP_TIMEOUT);
        tapTimes.push(now);
        
        if (tapTimes.length >= 2) {
            const intervals = [];
            for (let i = 1; i < tapTimes.length; i++) {
                intervals.push(tapTimes[i] - tapTimes[i-1]);
            }
            const avgInterval = intervals.reduce((a, b) => a + b, 0) / intervals.length;
            const bpm = 60000 / avgInterval;
            updateMasterTempo(bpm);
        }
        
        const btn = document.getElementById('tap-tempo-btn');
        btn.classList.add('tap-active');
        setTimeout(() => btn.classList.remove('tap-active'), 100);

        const btnDup = document.getElementById('tap-tempo-btn-dup');
        if (btnDup) {
            btnDup.classList.add('tap-active');
            setTimeout(() => btnDup.classList.remove('tap-active'), 100);
        }
    }

    function drawBufferWaveform(buffer, container) {
        const canvas = document.createElement('canvas');
        container.innerHTML = '';
        container.appendChild(canvas);
        
        const ctx = canvas.getContext('2d');
        const dpr = window.devicePixelRatio || 1;
        
        canvas.width = container.offsetWidth * dpr;
        canvas.height = container.offsetHeight * dpr;
        canvas.style.width = container.offsetWidth + 'px';
        canvas.style.height = container.offsetHeight + 'px';
        ctx.scale(dpr, dpr);
        
        const width = container.offsetWidth;
        const height = container.offsetHeight;
        const data = buffer.getChannelData(0);
        const step = Math.ceil(data.length / width);
        const amp = height / 2;
        
        ctx.fillStyle = '#0a0a0c';
        ctx.fillRect(0, 0, width, height);
        
        ctx.strokeStyle = '#2a2a30';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(0, amp);
        ctx.lineTo(width, amp);
        ctx.stroke();
        
        ctx.strokeStyle = '#ff6b00';
        ctx.lineWidth = 1;
        ctx.beginPath();
        
        for (let i = 0; i < width; i++) {
            let min = 1.0;
            let max = -1.0;
            
            for (let j = 0; j < step; j++) {
                const datum = data[(i * step) + j];
                if (datum < min) min = datum;
                if (datum > max) max = datum;
            }
            
            const yLow = (1 + min) * amp;
            const yHigh = (1 + max) * amp;
            
            ctx.moveTo(i, yLow);
            ctx.lineTo(i, yHigh);
        }
        ctx.stroke();
    }

    function detectBPM(buffer) {
        const data = buffer.getChannelData(0);
        const sampleRate = buffer.sampleRate;
        
        const blockSize = Math.floor(sampleRate / 20);
        const blocks = Math.floor(data.length / blockSize);
        const envelope = [];
        
        for (let i = 0; i < blocks; i++) {
            let sum = 0;
            for (let j = 0; j < blockSize; j++) {
                sum += Math.abs(data[i * blockSize + j]);
            }
            envelope.push(sum / blockSize);
        }
        
        const threshold = envelope.reduce((a, b) => a + b, 0) / envelope.length * 1.5;
        const peaks = [];
        
        for (let i = 1; i < envelope.length - 1; i++) {
            if (envelope[i] > threshold && 
                envelope[i] > envelope[i-1] && 
                envelope[i] > envelope[i+1]) {
                peaks.push(i);
            }
        }
        
        if (peaks.length < 2) return null;
        
        const intervals = [];
        for (let i = 1; i < peaks.length; i++) {
            intervals.push(peaks[i] - peaks[i-1]);
        }
        
        const avgInterval = intervals.reduce((a, b) => a + b, 0) / intervals.length;
        const secondsPerBeat = (avgInterval * blockSize) / sampleRate;
        const bpm = 60 / secondsPerBeat;
        
        let finalBPM = bpm;
        while (finalBPM < 60) finalBPM *= 2;
        while (finalBPM > 180) finalBPM /= 2;
        
        return Math.round(finalBPM * 10) / 10;
    }

    async function loadSample(padId, file) {
        const ctx = initAudioContext();
        const pad = pads[padId];
        
        try {
            const arrayBuffer = await file.arrayBuffer();
            const audioBuffer = await ctx.decodeAudioData(arrayBuffer);
            
            pad.buffer = audioBuffer;
            
            unsyncPad(padId);
            pad.keylock = false;
            document.getElementById(`${padId}-keylock`).classList.remove('active');
            
            document.getElementById(`${padId}-sample-name`).textContent = file.name;
            document.getElementById(`${padId}-sample-name`).classList.add('loaded');
            document.getElementById(`${padId}-indicator`).classList.add('loaded');
            document.getElementById(`${padId}-play`).disabled = false;
            document.getElementById(`${padId}-bpm`).textContent = '—';
            
            const waveformContainer = document.getElementById(`${padId}-waveform`);
            drawBufferWaveform(audioBuffer, waveformContainer);
            
            drawMainWaveform(audioBuffer);
            
            console.log(`Loaded ${file.name} into ${padId}`);
        } catch (error) {
            console.error('Error loading audio:', error);
            alert('Error loading audio file. Please try a different file.');
        }
    }

    function togglePlayback(padId) {
        const ctx = initAudioContext();
        const pad = pads[padId];
        
        if (!pad.buffer) return;
        
        if (pad.isPlaying) {
            if (pad.keylock && pad.grainPlayer) {
                pad.grainPlayer.stop();
                pad.grainPlayer = null;
            } else if (pad.source) {
                try {
                    pad.source.stop();
                } catch (e) {
                    console.warn('Error stopping source:', e);
                }
                pad.source = null;
            }
            pad.isPlaying = false;
            updatePlayButton(padId, false);
        } else {
            if (pad.keylock) {
                pad.grainPlayer = new GrainPlayer(ctx, pad.buffer, ctx.destination);
                
                const pitchKnob = document.getElementById(`${padId}-pitch`);
                const pitchValue = parseFloat(pitchKnob.dataset.value);
                pad.grainPlayer.setPitchRatio(Math.pow(2, pitchValue / 12));
                
                const filterKnob = document.getElementById(`${padId}-filter`);
                const filterValue = parseFloat(filterKnob.dataset.value);
                pad.grainPlayer.setFilterFrequency(200 + (filterValue / 100) * 19800);
                
                if (pad.synced) {
                    pad.grainPlayer.setStretchRatio(pad.stretchRatio);
                }
                
                pad.grainPlayer.start();
            } else {
                pad.source = ctx.createBufferSource();
                pad.gainNode = ctx.createGain();
                pad.filterNode = ctx.createBiquadFilter();
                
                pad.filterNode.type = 'lowpass';
                pad.filterNode.frequency.value = 20000;
                pad.gainNode.gain.value = 1.0;
                
                const pitchKnob = document.getElementById(`${padId}-pitch`);
                const pitchValue = parseFloat(pitchKnob.dataset.value);
                pad.source.playbackRate.value = Math.pow(2, pitchValue / 12);
                
                const filterKnob = document.getElementById(`${padId}-filter`);
                const filterValue = parseFloat(filterKnob.dataset.value);
                pad.filterNode.frequency.value = 200 + (filterValue / 100) * 19800;
                
                pad.source.buffer = pad.buffer;
                pad.source.connect(pad.filterNode);
                pad.filterNode.connect(pad.gainNode);
                pad.gainNode.connect(ctx.destination);
                
                pad.source.onended = () => {
                    pad.isPlaying = false;
                    updatePlayButton(padId, false);
                };
                
                pad.source.start();
            }
            
            pad.isPlaying = true;
            updatePlayButton(padId, true);
        }
    }

    function updatePlayButton(padId, isPlaying) {
        const btn = document.getElementById(`${padId}-play`);
        const indicator = document.getElementById(`${padId}-indicator`);
        
        if (isPlaying) {
            btn.classList.add('playing');
            btn.querySelector('.play-icon').style.display = 'none';
            btn.querySelector('.stop-icon').style.display = 'block';
            indicator.classList.add('playing');
        } else {
            btn.classList.remove('playing');
            btn.querySelector('.play-icon').style.display = 'block';
            btn.querySelector('.stop-icon').style.display = 'none';
            indicator.classList.remove('playing');
        }
    }

    function identifyTempo(padId) {
        const pad = pads[padId];
        if (!pad.buffer) {
            alert('Please load a sample first');
            return;
        }
        
        const bpm = detectBPM(pad.buffer);
        pad.detectedBPM = bpm;
        
        const bpmDisplay = document.getElementById(`${padId}-bpm`);
        bpmDisplay.textContent = bpm ? bpm.toFixed(1) : '—';
        
        bpmDisplay.style.color = '#00ff88';
        setTimeout(() => {
            bpmDisplay.style.color = '';
        }, 500);
    }

    function drawMainWaveform(buffer) {
        const canvas = document.getElementById('waveformCanvas');
        const ctx = canvas.getContext('2d');
        
        canvas.width = canvas.offsetWidth * 2;
        canvas.height = canvas.offsetHeight * 2;
        ctx.scale(2, 2);
        
        const width = canvas.offsetWidth;
        const height = canvas.offsetHeight;
        const data = buffer.getChannelData(0);
        const step = Math.ceil(data.length / width);
        const amp = height / 2;
        
        ctx.fillStyle = '#0a0a0c';
        ctx.fillRect(0, 0, width, height);
        
        ctx.strokeStyle = '#2a2a30';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(0, amp);
        ctx.lineTo(width, amp);
        ctx.stroke();
        
        ctx.strokeStyle = '#ff6b00';
        ctx.lineWidth = 1;
        ctx.beginPath();
        
        for (let i = 0; i < width; i++) {
            let min = 1.0;
            let max = -1.0;
            
            for (let j = 0; j < step; j++) {
                const datum = data[(i * step) + j];
                if (datum < min) min = datum;
                if (datum > max) max = datum;
            }
            
            ctx.moveTo(i, (1 + min) * amp);
            ctx.lineTo(i, (1 + max) * amp);
        }
        ctx.stroke();
        
        ctx.fillStyle = 'rgba(255, 107, 0, 0.1)';
        ctx.fillRect(width * 0.1, 0, width * 0.7, height);
        
        ctx.strokeStyle = '#00ff88';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(width * 0.1, 0);
        ctx.lineTo(width * 0.1, height);
        ctx.stroke();
        
        ctx.strokeStyle = '#ff3333';
        ctx.beginPath();
        ctx.moveTo(width * 0.8, 0);
        ctx.lineTo(width * 0.8, height);
        ctx.stroke();
    }

    function drawPlaceholderWaveform() {
        const canvas = document.getElementById('waveformCanvas');
        const ctx = canvas.getContext('2d');
        
        canvas.width = canvas.offsetWidth * 2;
        canvas.height = canvas.offsetHeight * 2;
        ctx.scale(2, 2);
        
        const width = canvas.offsetWidth;
        const height = canvas.offsetHeight;
        const centerY = height / 2;
        
        ctx.fillStyle = '#0a0a0c';
        ctx.fillRect(0, 0, width, height);
        
        ctx.strokeStyle = '#2a2a30';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(0, centerY);
        ctx.lineTo(width, centerY);
        ctx.stroke();
        
        ctx.fillStyle = '#555';
        ctx.font = '11px "SF Mono", monospace';
        ctx.textAlign = 'center';
        ctx.fillText('Load a sample to view waveform', width / 2, centerY + 4);
    }

    function drawADSR() {
        const canvas = document.getElementById('adsrCanvas');
        const ctx = canvas.getContext('2d');
        
        canvas.width = canvas.offsetWidth * 2;
        canvas.height = canvas.offsetHeight * 2;
        ctx.scale(2, 2);
        
        const width = canvas.offsetWidth;
        const height = canvas.offsetHeight;
        const padding = 8;
        
        const attack = 0.2;
        const decay = 0.4;
        const sustain = 0.7;
        const release = 0.3;
        
        const attackX = padding + attack * (width - 2 * padding) * 0.25;
        const decayX = attackX + decay * (width - 2 * padding) * 0.25;
        const sustainX = width - padding - release * (width - 2 * padding) * 0.25;
        const releaseX = width - padding;
        
        ctx.strokeStyle = '#1a1a1f';
        ctx.lineWidth = 1;
        for (let i = 0; i <= 4; i++) {
            const y = padding + (height - 2 * padding) * (i / 4);
            ctx.beginPath();
            ctx.moveTo(padding, y);
            ctx.lineTo(width - padding, y);
            ctx.stroke();
        }
        
        const gradient = ctx.createLinearGradient(0, 0, width, 0);
        gradient.addColorStop(0, '#ff6b00');
        gradient.addColorStop(0.5, '#ffaa00');
        gradient.addColorStop(1, '#ff6b00');
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        
        ctx.beginPath();
        ctx.moveTo(padding, height - padding);
        ctx.lineTo(attackX, padding);
        ctx.lineTo(decayX, padding + (height - 2 * padding) * (1 - sustain));
        ctx.lineTo(sustainX, padding + (height - 2 * padding) * (1 - sustain));
        ctx.lineTo(releaseX, height - padding);
        ctx.stroke();
        
        ctx.fillStyle = 'rgba(255, 107, 0, 0.15)';
        ctx.beginPath();
        ctx.moveTo(padding, height - padding);
        ctx.lineTo(attackX, padding);
        ctx.lineTo(decayX, padding + (height - 2 * padding) * (1 - sustain));
        ctx.lineTo(sustainX, padding + (height - 2 * padding) * (1 - sustain));
        ctx.lineTo(releaseX, height - padding);
        ctx.closePath();
        ctx.fill();
        
        const points = [
            { x: padding, y: height - padding },
            { x: attackX, y: padding },
            { x: decayX, y: padding + (height - 2 * padding) * (1 - sustain) },
            { x: sustainX, y: padding + (height - 2 * padding) * (1 - sustain) },
            { x: releaseX, y: height - padding }
        ];
        
        ctx.fillStyle = '#ff6b00';
        points.forEach(point => {
            ctx.beginPath();
            ctx.arc(point.x, point.y, 3, 0, Math.PI * 2);
            ctx.fill();
        });
    }

    document.addEventListener('grainPlayerEnded', (e) => {
        Object.keys(pads).forEach(padId => {
            if (pads[padId].grainPlayer === e.detail) {
                pads[padId].isPlaying = false;
                pads[padId].grainPlayer = null;
                updatePlayButton(padId, false);
            }
        });
    });

    document.addEventListener('DOMContentLoaded', () => {
        const masterKnob = document.getElementById('master-tempo-knob');
        if (masterKnob) {
            masterKnob.addEventListener('mousedown', (e) => {
                e.preventDefault();
            });
        }

        document.getElementById('tap-tempo-btn').addEventListener('click', () => {
            initAudioContext();
            handleTapTempo();
        });
        
        const tapDup = document.getElementById('tap-tempo-btn-dup');
        if (tapDup) {
            tapDup.addEventListener('click', () => {
                initAudioContext();
                handleTapTempo();
            });
        }
        
        document.getElementById('pad1-load').addEventListener('click', () => {
            document.getElementById('pad1-file').click();
        });
        
        document.getElementById('pad1-file').addEventListener('change', (e) => {
            if (e.target.files.length > 0) {
                loadSample('pad1', e.target.files[0]);
            }
        });
        
        document.getElementById('pad1-play').addEventListener('click', () => {
            togglePlayback('pad1');
        });
        
        document.getElementById('pad1-identify').addEventListener('click', () => {
            identifyTempo('pad1');
        });

        document.getElementById('pad1-keylock').addEventListener('click', () => {
            toggleKeylock('pad1');
        });

        document.getElementById('pad1-sync').addEventListener('click', () => {
            if (pads.pad1.synced) {
                unsyncPad('pad1');
            } else {
                syncPadToMaster('pad1');
            }
        });
        
        document.getElementById('pad2-load').addEventListener('click', () => {
            document.getElementById('pad2-file').click();
        });
        
        document.getElementById('pad2-file').addEventListener('change', (e) => {
            if (e.target.files.length > 0) {
                loadSample('pad2', e.target.files[0]);
            }
        });
        
        document.getElementById('pad2-play').addEventListener('click', () => {
            togglePlayback('pad2');
        });
        
        document.getElementById('pad2-identify').addEventListener('click', () => {
            identifyTempo('pad2');
        });

        document.getElementById('pad2-keylock').addEventListener('click', () => {
            toggleKeylock('pad2');
        });

        document.getElementById('pad2-sync').addEventListener('click', () => {
            if (pads.pad2.synced) {
                unsyncPad('pad2');
            } else {
                syncPadToMaster('pad2');
            }
        });
        
        document.getElementById('reverseBtn').addEventListener('click', function() {
            this.classList.toggle('active');
        });
        
        document.querySelectorAll('.knob').forEach(knob => {
            let isDragging = false;
            let startY, startValue;
            
            knob.addEventListener('mousedown', (e) => {
                isDragging = true;
                startY = e.clientY;
                startValue = parseFloat(knob.dataset.value);
                document.body.style.cursor = 'grabbing';
                e.preventDefault();
            });
            
            document.addEventListener('mousemove', (e) => {
                if (!isDragging) return;
                
                const diff = (startY - e.clientY) * 0.5;
                const min = parseFloat(knob.dataset.min);
                const max = parseFloat(knob.dataset.max);
                const range = max - min;
                
                let newValue = startValue + (diff / 100) * range;
                newValue = Math.max(min, Math.min(max, newValue));
                
                knob.dataset.value = newValue;
                
                const rotation = ((newValue - min) / range) * 270 - 135;
                knob.querySelector('.knob-inner').style.transform = `rotate(${rotation}deg)`;

                if (knob.id && (knob.id.includes('pitch') || knob.id.includes('filter'))) {
                    const padId = knob.id.split('-')[0];
                    const pad = pads[padId];
                    if (pad) {
                        if (knob.id.includes('pitch')) {
                            const rate = Math.pow(2, newValue / 12);
                            if (pad.source) {
                                try { pad.source.playbackRate.value = rate; } catch (e) {}
                            }
                            if (pad.grainPlayer) {
                                pad.grainPlayer.setPitchRatio(rate);
                            }
                        } else if (knob.id.includes('filter')) {
                            const freq = 200 + (newValue / 100) * 19800;
                            if (pad.filterNode) {
                                pad.filterNode.frequency.value = freq;
                            }
                            if (pad.grainPlayer) {
                                pad.grainPlayer.setFilterFrequency(freq);
                            }
                        }
                    }
                }
                
                const valueDisplay = knob.parentElement.querySelector('.knob-value');
                if (valueDisplay) {
                    if (knob.id && knob.id.includes('pitch')) {
                        valueDisplay.textContent = `${Math.round(newValue)} st`;
                    } else if (knob.id && knob.id.includes('filter')) {
                        valueDisplay.textContent = `${Math.round(newValue)}%`;
                    } else if (knob.id === 'master-tempo-knob') {
                        updateMasterTempo(newValue);
                        valueDisplay.textContent = `${Math.round(newValue)} BPM`;
                    } else {
                        valueDisplay.textContent = `${Math.round(newValue)}`;
                    }
                }
            });
            
            document.addEventListener('mouseup', () => {
                isDragging = false;
                document.body.style.cursor = '';
            });
        });
        
        drawPlaceholderWaveform();
        drawADSR();
    });

    window.addEventListener('resize', () => {
        drawPlaceholderWaveform();
        drawADSR();
    });
</script>
</body>
</html>
```

If you want, next step we can:  
- Add per-pad volume, pan, and global limiter; or  
- Add a 16-step trigger sequencer that fires Pad A/B in time with master tempo.

**Mike:** create 2 pads to trigger the loaded sounds, MPC style.   add one-shot and loop mode when performing the samples.

**GPT:** Here you go — I’ve added **two MPC-style performance pads** that trigger the loaded sounds, plus **per-pad One-Shot / Loop modes** wired into the existing audio engine.

- Each deck (Pad A / Pad B) still has its own Load / Play / Keylock / Sync controls.
- At the bottom right you now have a **Performance Pads** section:
  - **PAD A** triggers Pad A’s sample.
  - **PAD B** triggers Pad B’s sample.
  - Each pad has a **mode selector**: One-Shot or Loop.
- Loop mode is implemented at the audio level by setting `source.loop = true` for the Web Audio `AudioBufferSourceNode`; one-shot plays through once and stops.

You can download the updated single-file sampler here:

[Download doom-sampler-mpc.html](sandbox:/mnt/data/doom-sampler-mpc.html)

Just open that file in your browser, load samples into Pad A / Pad B, then bang on the two big pads at the bottom in **One-Shot** or **Loop** mode.

**Mike:** Optimize this prompt: Great! Nice additions to the sampler ! Next, let's add encoder knobs that control certain parameters on each pad.  1. Create a low pass filter for the first encoder knob. 2. Create a High pass filter for the second encoder knob. 3. Create a delay effect for the third encoder and a reverb effect for the forth.

**GPT:** Role: You are a senior Web Audio / DSP engineer and JavaScript developer. You’re working on my DOOM Sampler web app, which is a single-file HTML/JS sampler using the Web Audio API (no external audio libraries).

Task: Extend my existing **doom-sampler-mpc.html** so that each pad (Pad A and Pad B) has **four encoder knobs** that control per-pad effects. Preserve the current UI/visual style and layout, and wire these knobs into a proper Web Audio effects chain per pad.

Requirements:

1. **Encoder UI**
   - Add four rotary encoder knobs for **each** pad (A and B), styled to match the existing knob/encoder visuals.
   - Label them clearly for each pad:  
     - ENC 1: LPF  
     - ENC 2: HPF  
     - ENC 3: Delay  
     - ENC 4: Reverb  

2. **Per-Pad FX Chain (Web Audio API only)**
   - For each pad, build a dedicated FX chain in this order:  
     **BufferSource → LPF → HPF → Delay → Reverb → Gain → audioContext.destination**
   - All nodes should be created **per pad**, not global, so pads can have independent settings.

3. **Encoder–Parameter Mapping**
   - **Encoder 1 (LPF):**  
     - Controls a **low-pass filter** cutoff frequency for that pad.  
     - Map knob range to a musical range, e.g. ~200 Hz → 20 kHz.
   - **Encoder 2 (HPF):**  
     - Controls a **high-pass filter** cutoff frequency for that pad.  
     - Map knob range to ~20 Hz → 5 kHz.
   - **Encoder 3 (Delay):**  
     - Implement a tempo-friendly **feedback delay** per pad using `DelayNode` + `GainNode` for feedback.  
     - Map the knob to control delay time and/or wet mix (e.g. 1/8–1/2 note at the current master tempo, or 50–600 ms if easier).  
   - **Encoder 4 (Reverb):**  
     - Implement a simple **reverb** per pad (e.g. using a ConvolverNode with a small generated impulse, or a simple feedback-based “fake reverb”).  
     - Map the knob to the **reverb wet/dry mix** for that pad.

4. **Integration with Existing Pad Logic**
   - Ensure that **both** trigger methods (Pad Play button and Performance Pad) route audio through the new per-pad FX chain.
   - Respect existing controls:
     - Pitch knob still affects playback rate (and grain player if Keylock is on).
     - Filter knobs and the new LPF/HPF encoders work together predictably (no double-filtering bugs).
     - One-shot vs Loop modes still work correctly with the FX chain attached.
   - Make sure stopping playback properly stops/detaches sources and does not leak nodes.

5. **Implementation Details**
   - Use **only the Web Audio API** and vanilla JavaScript—no external audio libraries.
   - Initialize or resume `AudioContext` on first user interaction as you already do.
   - Keep the code organized: create helper functions (e.g. `createPadFxChain(padId)`, `updatePadFxFromEncoders(padId)`) for clarity.

6. **Output**
   - Return a **single complete, working HTML file** (updated `doom-sampler-mpc.html`) with all changes integrated.
   - Add **short, focused comments** near the main FX chain and encoder logic explaining:
     - Where the FX chain is created per pad.
     - How each encoder maps to its Web Audio parameter.
   - Include a brief explanation at the top or bottom of the file summarizing what you added and how to use the new encoders in the UI.

I’ll paste my current `doom-sampler-mpc.html` after this prompt—read it carefully, then apply these changes.

**Mike:** The doom sampler has an 8x4 pad matrix.  Update the prompt accordingly.  Also, Condense it.

**GPT:** Role: You are a senior Web Audio / DSP engineer and JavaScript developer working on my **DOOM Sampler**: a single-file HTML/JS Web Audio sampler with an **8×4 pad matrix** (32 pads), no external audio libs.

Task: Extend the existing file so that **each pad in the 8×4 matrix** has effect control via four encoder knobs, wired into a proper per-pad FX chain.

Requirements (condensed):

1. **Encoders & Labels**
   - Add four rotary encoders (or one encoder strip that always targets the currently selected pad, if UI is tight) with these labels:  
     - ENC 1: LPF  
     - ENC 2: HPF  
     - ENC 3: Delay  
     - ENC 4: Reverb  

2. **Per-Pad FX Chain (Web Audio API)**
   - For each pad in the 8×4 matrix, route audio through:  
     `BufferSource → LPF → HPF → Delay → Reverb → Gain → audioContext.destination`
   - Nodes must be **per pad** (not global) so pads have independent FX settings.

3. **Encoder Mappings**
   - **ENC 1 (LPF):** Low-pass cutoff, map knob range ≈ 200 Hz → 20 kHz.  
   - **ENC 2 (HPF):** High-pass cutoff, map ≈ 20 Hz → 5 kHz.  
   - **ENC 3 (Delay):** Feedback delay per pad using `DelayNode` + feedback `GainNode`; map knob to delay time and/or wet mix (e.g. 50–600 ms, or musical divisions of master tempo).  
   - **ENC 4 (Reverb):** Simple per-pad reverb (ConvolverNode with generated impulse, or feedback-based “fake reverb”); map knob to wet/dry mix.

4. **Integration**
   - All pad triggers in the 8×4 matrix must play through their pad’s FX chain, whether triggered from:
     - Pad buttons in the matrix, and
     - Any existing performance / play controls.
   - Keep current behavior: pitch knobs still control playback rate; one-shot vs loop still works; Keylock / sync logic remains intact.
   - Ensure proper cleanup of sources and no node leaks when stopping pads.

5. **Implementation & Output**
   - Use only **Web Audio API + vanilla JS**; keep `AudioContext` init/resume on first user interaction.
   - Structure helpers clearly (e.g., `createPadFxChain(padId)`, `updatePadFxFromEncoders(padId)`).
   - Return a **single complete updated HTML file**, with **brief comments** near:
     - FX chain creation per pad.
     - Encoder-to-parameter mappings.
   - Add a short usage note summarizing how to use the four encoders with the 8×4 pad matrix.

**Mike:** Make it even more concise while retaining the detail

**GPT:** Role: You are a senior Web Audio / DSP engineer and JavaScript developer working on my **DOOM Sampler**: a single-file HTML/JS Web Audio sampler with an **8×4 pad matrix (32 pads)**, no external audio libs.

Task: Add **per-pad FX control** via four encoders and wire them into a proper FX chain for every pad.

1. **Encoders / Targeting**
   - Add **4 rotary encoders** that control the **currently selected pad** in the 8×4 matrix (so we don’t need 32×4 knobs).  
   - Clear labels: `ENC 1: LPF`, `ENC 2: HPF`, `ENC 3: Delay`, `ENC 4: Reverb`.  
   - Ensure there is a visible “Selected Pad” state and encoders always edit that pad’s FX.

2. **Per-Pad FX Chain (Web Audio API)**
   - For each pad, create and store a chain:  
     `BufferSource → lowpass (LPF) → highpass (HPF) → Delay → Reverb → Gain → audioContext.destination`.  
   - Nodes are **per pad**, not shared, so each pad can have independent FX settings and wet/dry.

3. **Encoder → Parameter Mapping**
   - **ENC 1 (LPF):** Map 0–100 to low-pass cutoff ≈ **200 Hz → 20 kHz**.  
   - **ENC 2 (HPF):** Map 0–100 to high-pass cutoff ≈ **20 Hz → 5 kHz**.  
   - **ENC 3 (Delay):** Per-pad feedback delay using `DelayNode` + feedback `GainNode`; map 0–100 to **delay time** (≈ 50–600 ms or tempo divisions from master BPM) and/or **wet mix**.  
   - **ENC 4 (Reverb):** Simple per-pad reverb (ConvolverNode with generated impulse or feedback “fake reverb”); map 0–100 to **reverb wet/dry mix**.

4. **Integration with Existing Logic**
   - All pad triggers in the **8×4 matrix** must play through that pad’s FX chain (no dry bypass):  
     - Matrix pad clicks, performance/play buttons, and any existing trigger paths.  
   - Preserve current behavior: pitch still controls playbackRate (and grain engine if Keylock is on); one-shot vs loop works as before; Keylock/sync logic unchanged.  
   - Ensure proper cleanup of `AudioBufferSourceNode`s and no node leaks when stopping pads or retriggering.

5. **Implementation & Output**
   - Use **vanilla JS + Web Audio API only**; keep `AudioContext` create/resume on first user interaction.  
   - Factor helpers like `createPadFxChain(padId)` and `applyEncodersToPadFx(selectedPadId)`.  
   - Return a **single complete updated HTML file** with:  
     - Brief comments where the per-pad FX chain is created and where encoders map to parameters.  
     - A short usage note explaining: select a pad → tweak 4 encoders → hear per-pad LPF/HPF/Delay/Reverb.

**Mike:** Draft a world class prompt that uses images of the native instruments battery's manual to create a sampler in the same style and functionality of battery.  The images contain key aspects of the manual including pad matrix and loading files .

**GPT:** Here’s a polished, ready-to-paste “world class” prompt you can use:

---

**PROMPT START**

Role: You are a senior Web Audio / DSP engineer and front-end developer. You specialize in building professional drum samplers and groove boxes in the browser using HTML, CSS, JavaScript, and the Web Audio API (no external audio libraries unless absolutely necessary).

Context: I want to build a **web-based sampler inspired by Native Instruments Battery** — same *style, workflow, and core functionality*, but not a pixel-perfect clone. You will use the **attached images from the Battery manual** as primary UX and feature references. These images include (at minimum) the pad/cell matrix and file loading/sample management views.

Your first job is to **deeply analyze the images** to understand:

- How the **pad/cell matrix** is laid out (grid size, selected cell state, color coding, labels, meters).
- How **samples are loaded** (file browser sections, drag & drop behavior, “load sample into cell” UX).
- What **essential per-cell controls** are surfaced in the UI (name, mute/solo, output routing, level, basic filter/envelope, etc.).
- Any key **signal flow or routing diagrams** shown in the manual pages.

Do *not* transcribe the text of the manual; instead, extract and generalize the **interaction patterns, layout, and functional concepts**.

---

### Goals

1. Build a **Battery-style sampler UI** with:
   - A **pad matrix** modeled after the one in the images (same general rows/columns and visual hierarchy).
   - A **sample browser / file loading area** that mirrors the workflow shown in the manual (e.g., load into selected pad, drag/drop behavior, clear visual selection).
   - Clear visual indication of:
     - Selected pad
     - Pad name / sample name
     - Level / activity (simple meters or level indicators)

2. Implement a **functional sampler engine** using the Web Audio API:
   - Each pad can load at least one audio file (WAV/AIFF/MP3).
   - Pads trigger **one-shot playback** by clicking or via assigned keyboard shortcuts.
   - Per-pad basic parameters:
     - Gain/volume
     - Pan
     - Simple low-pass filter (cutoff + resonance)
     - Envelope (at least attack + release)
   - A **global output** with master gain and simple metering.

3. Ensure the **user experience and workflow feels like Battery**:
   - Click/select a pad → load/replace a sample into that pad.
   - Visual feedback when a pad is triggered (highlight, meter).
   - Pad matrix and browser behave as a single coherent instrument, not a collection of disconnected widgets.

---

### Technical Requirements

- Use a **single HTML file** with embedded CSS and JavaScript.
- Use **vanilla JS + Web Audio API** for audio (no frameworks; no Tone.js, no React, etc.).
- Audio pipeline per pad (conceptual):
  - `AudioBufferSourceNode → (per-pad filter & gain) → master gain → audioContext.destination`
- Implement robust AudioContext handling:
  - Create / resume `AudioContext` on first user interaction (e.g., first click).
  - Handle repeated triggering safely (new `AudioBufferSourceNode` per trigger).
- Support drag & drop and/or file input for loading samples into pads, taking cues from the Battery manual images.

---

### What to Deliver

1. A **complete, runnable HTML file** that:
   - Renders the Battery-inspired UI (pad matrix + browser + basic controls).
   - Actually loads audio files into pads and plays them back.
   - Uses visual styling clearly influenced by the manual images (layout, hierarchy, color logic) without copying any protected artwork or text verbatim.

2. **Brief inline comments** in the JavaScript explaining:
   - How pads are represented in code.
   - How sample loading and assignment to pads works.
   - How the audio graph is built per pad.

3. A short **usage summary** at the top of the file (in comments) describing:
   - How to load samples into pads.
   - How to trigger pads.
   - Which core Battery-like behaviors are implemented.

Use the images as your design and UX reference, but express everything as your own implementation and wording, not as a reproduction of the original manual text.

**PROMPT END**

---
