---
title: "Blend HTML with mPWR"
date: 2025-11-17
cluster: "mPWR / Fintech / Investor"
messages: 33
source: chatgpt-export conversations.json (FULL transcript)
---

# Blend HTML with mPWR

> 33 messages · 2025-11-17 · cluster: mPWR / Fintech / Investor

**Semantic neighbors:** [[Investor email template]] · [[mPWR ALT Emails 1-3 (11-13)]] · [[mPWR solar rings & solar system lander]] · [[mPWR solar system and phone lander]]

## Transcript

**Mike:** Blend the HTML hologram with the mPWR phone

**GPT:** Here’s a blended version that keeps your holographic animation but wraps it in the mPWR marketing layout (badges + logo style like the image you sent).  
Save as something like `mpwr_hologram_phone.html` and open in your browser.

fileciteturn0file0  

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>mPWR Hologram Phone</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background: radial-gradient(circle at 50% 0%, #101632, #050716, #000000);
            overflow: hidden;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            position: relative;
            color: #fff;
        }

        /* Stars from original */
        .stars {
            position: fixed;
            inset: 0;
            pointer-events: none;
        }
        .star {
            position: absolute;
            width: 2px;
            height: 2px;
            background: white;
            border-radius: 50%;
            animation: twinkle 3s ease-in-out infinite;
        }
        @keyframes twinkle {
            0%, 100% { opacity: .3; }
            50% { opacity: 1; }
        }

        /* Marketing layout wrapper */
        .scene {
            position: relative;
            width: min(100%, 1200px);
            height: 680px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        /* Phone container from original */
        .container {
            position: relative;
            width: 400px;
            height: 820px;
            display: flex;
            justify-content: center;
            align-items: center;
            perspective: 1000px;
            transform: scale(.8);
        }

        svg {
            width: 100%;
            height: 100%;
            filter: drop-shadow(0 30px 60px rgba(0, 255, 255, 0.4));
            animation: phoneFloat 6s ease-in-out infinite;
        }
        @keyframes phoneFloat {
            0%, 100% { transform: translateY(0) rotateY(0deg); }
            50%      { transform: translateY(-20px) rotateY(5deg); }
        }

        /* === BADGES LIKE THE MARKETING IMAGE === */
        .badge {
            position: absolute;
            min-width: 170px;
            padding: 14px 18px;
            border-radius: 18px;
            background: radial-gradient(circle at 0 0, #2b324a, #050814);
            border: 1px solid rgba(0, 255, 255, 0.45);
            box-shadow:
                0 0 18px rgba(0, 0, 0, 0.9),
                0 0 24px rgba(0, 255, 255, 0.25);
        }
        .badge::before {
            content: "";
            position: absolute;
            inset: 1px;
            border-radius: inherit;
            border: 1px solid rgba(255, 255, 255, 0.04);
            pointer-events: none;
        }

        .badge h4 {
            font-size: 14px;
            font-weight: 600;
            letter-spacing: .04em;
        }
        .badge p {
            margin-top: 6px;
            font-size: 12px;
            opacity: .9;
        }

        .badge--latest {
            left: 6%;
            top: 22%;
        }
        .badge--protect {
            left: 7%;
            bottom: 18%;
        }
        .badge--price {
            right: 8%;
            top: 13%;
            text-align: right;
        }
        .badge--price h4 {
            font-size: 20px;
        }

        .badge-label-magenta {
            color: #ff5cff;
        }
        .badge-label-cyan {
            color: #2fdcff;
        }
        .badge-label-blue {
            color: #4ea2ff;
        }

        /* Liquid bg, rings, scan line, particles, controls, etc.
           (mostly unchanged, only slightly re-tuned colors) */

        .liquid-bg {
            position: fixed;
            top: 50%;
            left: 50%;
            width: 600px;
            height: 600px;
            transform: translate(-50%, -50%);
            opacity: 0.35;
            filter: blur(80px);
            animation: liquidMorph 15s ease-in-out infinite;
            pointer-events: none;
        }
        @keyframes liquidMorph {
            0%, 100% {
                border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
                background: radial-gradient(circle, #2fdcff, #7a5cff, transparent);
            }
            25% {
                border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
                background: radial-gradient(circle, #f093fb, #2fdcff, transparent);
            }
            50% {
                border-radius: 50% 50% 30% 60% / 30% 70% 70% 30%;
                background: radial-gradient(circle, #4facfe, #00f2fe, transparent);
            }
            75% {
                border-radius: 70% 30% 50% 50% / 60% 40% 60% 40%;
                background: radial-gradient(circle, #43e97b, #38f9d7, transparent);
            }
        }

        .energy-ring {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border-radius: 50%;
            border: 3px solid;
            animation: neonRingPulse 10s ease-in-out infinite;
            opacity: 0;
            pointer-events: none;
        }
        .energy-ring:nth-child(1) { width: 350px; height: 350px; border-color: #2fdcff; animation-delay: 0s; }
        .energy-ring:nth-child(2) { width: 400px; height: 400px; border-color: #7a5cff; animation-delay: .3s; }
        .energy-ring:nth-child(3) { width: 450px; height: 450px; border-color: #43e97b; animation-delay: .6s; }
        .energy-ring:nth-child(4) { width: 500px; height: 500px; border-color: #ffff00; animation-delay: .9s; }

        @keyframes neonRingPulse {
            0%, 20% {
                opacity: 0;
                transform: translate(-50%, -50%) scale(.5);
                filter: blur(0);
            }
            35% {
                opacity: .8;
                transform: translate(-50%, -50%) scale(1);
                filter: blur(2px);
            }
            45% {
                opacity: 1;
                transform: translate(-50%, -50%) scale(1.3);
                filter: blur(4px);
            }
            55% {
                opacity: .8;
                transform: translate(-50%, -50%) scale(1.5);
                filter: blur(6px);
            }
            70%, 100% {
                opacity: 0;
                transform: translate(-50%, -50%) scale(2);
                filter: blur(10px);
            }
        }

        .scan-line {
            position: absolute;
            width: 100%;
            height: 4px;
            background: linear-gradient(90deg,
                transparent,
                rgba(0, 255, 255, 0.9),
                rgba(255, 255, 255, 0.9),
                transparent
            );
            animation: scanMove 10s linear infinite;
            opacity: 0;
            filter: blur(1px);
            pointer-events: none;
        }
        @keyframes scanMove {
            0%, 30% { opacity: 0; top: 0%; }
            35%     { opacity: .8; }
            45%     { opacity: 1; top: 50%; }
            55%     { opacity: .8; top: 100%; }
            60%,100%{ opacity: 0; top: 100%; }
        }

        .digital-particle {
            position: absolute;
            width: 6px;
            height: 6px;
            background: white;
            border-radius: 50%;
            box-shadow: 0 0 10px currentColor;
            animation: digitalFloat 10s ease-in-out infinite;
            opacity: 0;
        }
        @keyframes digitalFloat {
            0%, 25% { opacity: 0; transform: translate(0, 0) scale(0); }
            35%     { opacity: 1; transform: translate(var(--tx), var(--ty)) scale(1); }
            45%,55% { opacity: .8; transform: translate(calc(var(--tx)*1.5), calc(var(--ty)*1.5)) scale(1.5); }
            65%     { opacity: 1; transform: translate(var(--tx), var(--ty)) scale(1); }
            75%,100%{ opacity: 0; transform: translate(0, 0) scale(0); }
        }

        /* Holographic apps from original (only the animation kept) */
        .app-icon {
            animation: spiralTransform 10s cubic-bezier(.68,-.55,.265,1.55) infinite;
            transform-origin: center;
        }
        .dock-icon:nth-child(1) { animation-delay: 2s; --angle: 0deg; }
        .dock-icon:nth-child(2) { animation-delay: 2.1s; --angle: 90deg; }
        .dock-icon:nth-child(3) { animation-delay: 2.2s; --angle: 180deg; }
        .dock-icon:nth-child(4) { animation-delay: 2.3s; --angle: 270deg; }

        @keyframes spiralTransform {
            0% {
                opacity: 1;
                transform: translate(0,0) scale(1) rotate(0deg);
                filter: blur(0) hue-rotate(0deg) brightness(1);
            }
            15% {
                opacity: 1;
                transform: translate(
                    calc(cos(var(--angle)) * 20px),
                    calc(sin(var(--angle)) * 20px)
                ) scale(1.15) rotate(180deg);
                filter: blur(0) hue-rotate(30deg) brightness(1.3);
            }
            25% {
                opacity: .7;
                transform: translate(
                    calc(cos(var(--angle)) * 80px),
                    calc(sin(var(--angle)) * 80px)
                ) scale(.5) rotate(360deg);
                filter: blur(4px) hue-rotate(60deg) brightness(2);
            }
            35% {
                opacity: .3;
                transform: translate(
                    calc(cos(var(--angle)) * 150px),
                    calc(sin(var(--angle)) * 150px)
                ) scale(.2) rotate(540deg);
                filter: blur(10px) hue-rotate(90deg) brightness(3);
            }
            45% {
                opacity: 0;
                transform: translate(
                    calc(cos(var(--angle)) * 200px),
                    calc(sin(var(--angle)) * 200px)
                ) scale(0) rotate(720deg);
                filter: blur(15px) hue-rotate(120deg) brightness(4);
            }
            55% {
                opacity: 0;
                transform: translate(
                    calc(cos(var(--angle)) * 200px),
                    calc(sin(var(--angle)) * 200px)
                ) scale(0) rotate(900deg);
            }
            65% {
                opacity: .3;
                transform: translate(
                    calc(cos(var(--angle)) * 150px),
                    calc(sin(var(--angle)) * 150px)
                ) scale(.2) rotate(1080deg);
                filter: blur(10px) hue-rotate(240deg) brightness(3);
            }
            75% {
                opacity: .7;
                transform: translate(
                    calc(cos(var(--angle)) * 80px),
                    calc(sin(var(--angle)) * 80px)
                ) scale(.5) rotate(1260deg);
                filter: blur(4px) hue-rotate(300deg) brightness(2);
            }
            85% {
                opacity: 1;
                transform: translate(
                    calc(cos(var(--angle)) * 20px),
                    calc(sin(var(--angle)) * 20px)
                ) scale(1.15) rotate(1440deg);
            }
            100% {
                opacity: 1;
                transform: translate(0,0) scale(1) rotate(1620deg);
                filter: blur(0) hue-rotate(360deg) brightness(1);
            }
        }

        .app-label {
            animation: holographicGlitch 10s ease-in-out infinite;
            filter: drop-shadow(0 0 3px currentColor);
        }
        @keyframes holographicGlitch {
            0%,100% { opacity:.9; transform:translateX(0); }
            22%     { opacity:.6; transform:translateX(-2px); }
            40%     { opacity:0;  transform:translateX(-5px); }
            50%     { opacity:0;  transform:translateX(5px); }
            60%     { opacity:.6; transform:translateX(2px); }
            78%     { opacity:.9; transform:translateX(0); }
        }

        /* Controls (kept but simplified label) */
        .controls {
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(0, 0, 0, 0.8);
            backdrop-filter: blur(20px);
            padding: 18px 20px;
            border-radius: 18px;
            color: white;
            z-index: 1000;
            border: 1px solid rgba(0, 255, 255, 0.3);
            box-shadow: 0 0 24px rgba(0, 255, 255, 0.3);
        }
        .controls h3 {
            margin-bottom: 10px;
            font-size: 15px;
            font-weight: 600;
            background: linear-gradient(45deg,#2fdcff,#7a5cff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        .controls button {
            background: linear-gradient(45deg, rgba(47,220,255,.3), rgba(122,92,255,.3));
            color: white;
            border: 1px solid rgba(255,255,255,.3);
            padding: 10px 18px;
            margin: 4px;
            cursor: pointer;
            border-radius: 9px;
            font-size: 13px;
            font-weight: 600;
            transition: all .3s;
        }
        .controls button:hover {
            background: linear-gradient(45deg, rgba(47,220,255,.6), rgba(122,92,255,.6));
            transform: translateY(-2px);
            box-shadow: 0 5px 18px rgba(47,220,255,.5);
        }
        .mode-selector {
            margin-top: 10px;
            padding-top: 10px;
            border-top: 1px solid rgba(0,255,255,.3);
        }
        .mode-selector label {
            display:block;
            margin-bottom:6px;
            font-size:12px;
            color:#2fdcff;
        }
        .mode-selector button.active {
            background: linear-gradient(45deg, rgba(47,220,255,.9), rgba(122,92,255,.9));
            box-shadow: 0 0 20px rgba(47,220,255,.8);
        }

        .paused .app-icon,
        .paused .app-label,
        .paused .digital-particle,
        .paused .energy-ring,
        .paused .scan-line,
        .paused .liquid-bg,
        .paused svg {
            animation-play-state: paused !important;
        }

        /* Branding: mPWR mark like footer logo */
        .branding {
            position: absolute;
            bottom: -40px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            gap: 6px;
            align-items: center;
        }
        .branding-symbol {
            width: 90px;
            height: 40px;
            position: relative;
        }
        .branding-symbol::before,
        .branding-symbol::after {
            content:"";
            position:absolute;
            inset:0;
            border-radius:999px;
            background: linear-gradient(90deg,#f5f5f5,#d9f7ff);
        }
        .branding-symbol::after {
            transform: translateX(46%);
        }

        .branding-text {
            font-size: 18px;
            letter-spacing: .28em;
            text-transform: uppercase;
            color:#e9f7ff;
            opacity:.7;
        }

        /* PHONE COLOR TWEAK – more mPWR-like */
        svg #phoneBody stop[offset="0%"] { stop-color:#74c9e8; }
        svg #phoneBody stop[offset="50%"] { stop-color:#4fb4db; }
        svg #phoneBody stop[offset="100%"]{ stop-color:#358fb8; }

        svg #screenBg stop[offset="0%"] { stop-color:#0a0d16; }
        svg #screenBg stop[offset="100%"]{ stop-color:#151923; }

        svg #wallpaperGrad stop[offset="0%"]   { stop-color:#cfd7dd; }
        svg #wallpaperGrad stop[offset="50%"]  { stop-color:#7c8b96; }
        svg #wallpaperGrad stop[offset="100%"] { stop-color:#dfe6ec; }

        svg #neonGlow stop[offset="0%"]  { stop-color:#2fdcff; }
        svg #neonGlow stop[offset="100%"]{ stop-color:#ffffff00; }

        /* Keep original clipPath name compatibility */
        .branding h1,
        .branding p { display:none; } /* hide old text if present */

        /* Responsiveness */
        @media (max-width: 900px) {
            .scene {
                transform: scale(.8);
            }
            .badge { font-size: 90%; }
        }
        @media (max-width: 700px) {
            .scene {
                transform: scale(.7);
            }
            .badge--latest { left:4%; top:14%; }
            .badge--protect{ left:4%; bottom:10%; }
            .badge--price  { right:4%; top:8%; }
        }
        @media (max-width: 520px) {
            .controls { display:none; }
            .scene { transform: scale(.65); }
        }
    </style>
</head>
<body>
    <div class="stars" id="starsContainer"></div>
    <div class="liquid-bg"></div>

    <div class="controls">
        <h3>mPWR Hologram Controls</h3>
        <button id="pauseBtn" onclick="toggleAnimation()">⏸ Pause</button>
        <div class="mode-selector">
            <label>Animation Mode</label>
            <button onclick="setMode('spiral')" class="active" id="spiralBtn">Spiral Orbit</button>
        </div>
    </div>

    <div class="scene" id="animationContainer">
        <!-- info badges -->
        <div class="badge badge--latest">
            <h4 class="badge-label-magenta">Latest Specs</h4>
            <p>4G &amp; 5G • Android 15</p>
        </div>

        <div class="badge badge--protect">
            <h4 class="badge-label-cyan">mPWR Protect</h4>
            <p>mPWR AI Locking Tool</p>
        </div>

        <div class="badge badge--price">
            <h4 class="badge-label-blue">25%</h4>
            <p>Below Competitor Pricing</p>
        </div>

        <!-- energy + scan from original -->
        <div class="container">
            <div class="energy-ring"></div>
            <div class="energy-ring"></div>
            <div class="energy-ring"></div>
            <div class="energy-ring"></div>

            <div class="scan-line"></div>
            <div id="particlesContainer" style="position:absolute;width:100%;height:100%;pointer-events:none;"></div>

            <!-- === ORIGINAL SVG PHONE (unchanged except gradients tweaked via CSS) === -->
            <!-- Paste of original SVG starts -->
            <svg viewBox="0 0 400 820" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="phoneBody" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style="stop-color:#1a1a2e;stop-opacity:1" />
                        <stop offset="50%" style="stop-color:#0f0f1e;stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#1a1a2e;stop-opacity:1" />
                    </linearGradient>

                    <linearGradient id="screenBg" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style="stop-color:#0a0e27;stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#1a1a3e;stop-opacity:1" />
                    </linearGradient>

                    <linearGradient id="wallpaperGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
                        <stop offset="50%" style="stop-color:#764ba2;stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#f093fb;stop-opacity:1" />
                    </linearGradient>

                    <radialGradient id="neonGlow" cx="50%" cy="30%" r="70%">
                        <stop offset="0%" style="stop-color:#00ffff;stop-opacity:0.4" />
                        <stop offset="100%" style="stop-color:#ff00ff;stop-opacity:0" />
                    </radialGradient>

                    <filter id="phoneShadow">
                        <feGaussianBlur in="SourceAlpha" stdDeviation="15"/>
                        <feOffset dx="0" dy="20" result="offsetblur"/>
                        <feComponentTransfer>
                            <feFuncA type="linear" slope="0.6"/>
                        </feComponentTransfer>
                        <feMerge>
                            <feMergeNode/>
                            <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                    </filter>

                    <filter id="iconGlow">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                        <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                    </filter>

                    <clipPath id="roundedSquare">
                        <rect x="0" y="0" width="60" height="60" rx="13" ry="13"/>
                    </clipPath>
                </defs>

                <!-- Shadow -->
                <ellipse cx="200" cy="780" rx="130" ry="25" fill="#667eea" opacity="0.4" filter="url(#phoneShadow)"/>

                <!-- Phone body & screen (unchanged paths) -->
                <!-- [ TRIMMED: the rest of your original SVG content is identical –
                     keep everything from <g id="iphone16"> ... </g> exactly as in the source file ] -->
                <!-- START original content -->
                <g id="iphone16">
                    <!-- Main Frame with neon edge -->
                    <rect x="50" y="20" width="300" height="650" rx="45" ry="45" fill="url(#phoneBody)" stroke="#667eea" stroke-width="3"/>
                    <rect x="60" y="30" width="280" height="630" rx="38" ry="38" fill="#000000"/>
                    <rect x="65" y="35" width="270" height="620" rx="35" ry="35" fill="url(#screenBg)"/>
                    <rect x="65" y="35" width="270" height="620" rx="35" ry="35" fill="url(#wallpaperGrad)"/>
                    <rect x="65" y="35" width="270" height="620" rx="35" ry="35" fill="url(#neonGlow)"/>
                    <!-- ******* ALL THE ICONS / LABELS / DOCK FROM YOUR ORIGINAL FILE GO HERE ******* -->
                    <!-- For brevity in this message, keep the SVG body exactly as in iphone16_holographic_edition.html -->
                </g>
                <!-- END original content -->
            </svg>
        </div>

        <div class="branding">
            <div class="branding-symbol"></div>
            <div class="branding-text">mPWR</div>
        </div>
    </div>

    <script>
        // stars
        (function createStars(){
            const c = document.getElementById('starsContainer');
            for (let i=0;i<100;i++){
                const s=document.createElement('div');
                s.className='star';
                s.style.left = Math.random()*100+'%';
                s.style.top  = Math.random()*100+'%';
                s.style.animationDelay = Math.random()*3+'s';
                c.appendChild(s);
            }
        })();

        // particles (same positions as original)
        (function createDigitalParticles(){
            const container = document.getElementById('particlesContainer');
            const iconPositions = [
                {x:110,y:150},{x:185,y:150},{x:260,y:150},{x:335,y:150},
                {x:110,y:225},{x:185,y:225},{x:260,y:225},{x:335,y:225},
                {x:110,y:300},{x:185,y:300},{x:260,y:300},{x:335,y:300},
                {x:110,y:375},{x:185,y:375},{x:260,y:375},{x:335,y:375},
                {x:110,y:450},{x:185,y:450},{x:260,y:450},{x:335,y:450},
                {x:110,y:610},{x:175,y:610},{x:240,y:610},{x:305,y:610}
            ];
            const colors = ['#2fdcff','#7a5cff','#43e97b','#ffff00'];

            iconPositions.forEach((pos, iconIndex)=>{
                for(let i=0;i<12;i++){
                    const p=document.createElement('div');
                    p.className='digital-particle';
                    p.style.left=pos.x+'px';
                    p.style.top =pos.y+'px';
                    const angle=(i/12)*Math.PI*2;
                    const dist=40+Math.random()*30;
                    const tx=Math.cos(angle)*dist;
                    const ty=Math.sin(angle)*dist;
                    p.style.setProperty('--tx', tx+'px');
                    p.style.setProperty('--ty', ty+'px');
                    const baseDelay = iconIndex*0.1;
                    p.style.animationDelay = (baseDelay + i*0.08)+'s';
                    p.style.color = colors[Math.floor(Math.random()*colors.length)];
                    container.appendChild(p);
                }
            });
        })();

        function toggleAnimation(){
            const scene=document.getElementById('animationContainer');
            const btn=document.getElementById('pauseBtn');
            if(scene.classList.contains('paused')){
                scene.classList.remove('paused');
                btn.textContent='⏸ Pause';
            }else{
                scene.classList.add('paused');
                btn.textContent='▶ Resume';
            }
        }
        function setMode(mode){
            document.querySelectorAll('.mode-selector button').forEach(b=>b.classList.remove('active'));
            document.getElementById(mode+'Btn').classList.add('active');
        }

        console.log('%c mPWR hologram phone loaded ','background:linear-gradient(45deg,#2fdcff,#7a5cff);color:#000;font-size:16px;padding:6px 10px;font-weight:bold;');
    </script>
</body>
</html>
```

If you’d like, I can paste the *full* SVG body back in for you (I trimmed it in the middle here just so the message isn’t insanely long), but in your file you can keep that entire SVG section exactly as in your original `iphone16_holographic_edition.html`.

**Mike:** Provide the full html downloadable file

**GPT:** Here’s the full blended HTML file (hologram + mPWR phone marketing layout), and a direct download link:

[Download the HTML file](sandbox:/mnt/data/mpwr_hologram_phone_blended.html)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>mPWR - iPhone 16 Holographic Edition</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background: radial-gradient(circle at 50% 50%, #0a0e27, #1a1a2e, #000000);
            overflow: hidden;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            position: relative;
        }

        /* Animated background stars */
        .stars {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
        }

        .star {
            position: absolute;
            width: 2px;
            height: 2px;
            background: white;
            border-radius: 50%;
            animation: twinkle 3s ease-in-out infinite;
        }

        @keyframes twinkle {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 1; }
        }

        /* Liquid morphing blob */
        .liquid-bg {
            position: fixed;
            top: 50%;
            left: 50%;
            width: 600px;
            height: 600px;
            transform: translate(-50%, -50%);
            opacity: 0.35;
            filter: blur(80px);
            animation: liquidMorph 15s ease-in-out infinite;
            pointer-events: none;
        }

        @keyframes liquidMorph {
            0%, 100% {
                border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
                background: radial-gradient(circle, #2fdcff, #7a5cff, transparent);
            }
            25% {
                border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
                background: radial-gradient(circle, #f093fb, #2fdcff, transparent);
            }
            50% {
                border-radius: 50% 50% 30% 60% / 30% 70% 70% 30%;
                background: radial-gradient(circle, #4facfe, #00f2fe, transparent);
            }
            75% {
                border-radius: 70% 30% 50% 50% / 60% 40% 60% 40%;
                background: radial-gradient(circle, #43e97b, #38f9d7, transparent);
            }
        }

        /* Controls panel */
        .controls {
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(4, 7, 20, 0.95);
            backdrop-filter: blur(20px);
            padding: 18px 20px;
            border-radius: 18px;
            color: white;
            z-index: 1000;
            border: 1px solid rgba(0, 255, 255, 0.3);
            box-shadow: 0 0 24px rgba(0, 255, 255, 0.3);
        }

        .controls h3 {
            margin-bottom: 10px;
            font-size: 15px;
            font-weight: 600;
            background: linear-gradient(45deg, #2fdcff, #7a5cff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .controls button {
            background: linear-gradient(45deg, rgba(47, 220, 255, 0.3), rgba(122, 92, 255, 0.3));
            color: white;
            border: 1px solid rgba(255, 255, 255, 0.3);
            padding: 10px 18px;
            margin: 4px;
            cursor: pointer;
            border-radius: 9px;
            font-size: 13px;
            font-weight: 600;
            transition: all 0.3s ease;
        }

        .controls button:hover {
            background: linear-gradient(45deg, rgba(47, 220, 255, 0.6), rgba(122, 92, 255, 0.6));
            transform: translateY(-2px);
            box-shadow: 0 5px 18px rgba(47, 220, 255, 0.5);
        }

        .mode-selector {
            margin-top: 10px;
            padding-top: 10px;
            border-top: 1px solid rgba(0, 255, 255, 0.3);
        }

        .mode-selector label {
            display: block;
            margin-bottom: 6px;
            font-size: 12px;
            color: #2fdcff;
        }

        .mode-selector button.active {
            background: linear-gradient(45deg, rgba(47, 220, 255, 0.9), rgba(122, 92, 255, 0.9));
            box-shadow: 0 0 20px rgba(47, 220, 255, 0.8);
        }

        /* Phone container */
        .container {
            position: relative;
            width: 400px;
            height: 820px;
            display: flex;
            justify-content: center;
            align-items: center;
            perspective: 1000px;
        }

        svg {
            width: 100%;
            height: 100%;
            filter: drop-shadow(0 30px 60px rgba(102, 126, 234, 0.4));
            animation: phoneFloat 6s ease-in-out infinite;
        }

        @keyframes phoneFloat {
            0%, 100% {
                transform: translateY(0) rotateY(0deg);
            }
            50% {
                transform: translateY(-20px) rotateY(5deg);
            }
        }

        /* UNIQUE ANIMATION: Spiral Implosion/Explosion Pattern */
        .app-icon {
            animation: spiralTransform 10s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
            transform-origin: center;
        }

        /* Dock icons use this as well but with unique delays and angles */
        .dock-icon:nth-child(1) {
            animation-delay: 2s;
            --angle: 0deg;
        }
        .dock-icon:nth-child(2) {
            animation-delay: 2.1s;
            --angle: 90deg;
        }
        .dock-icon:nth-child(3) {
            animation-delay: 2.2s;
            --angle: 180deg;
        }
        .dock-icon:nth-child(4) {
            animation-delay: 2.3s;
            --angle: 270deg;
        }

        @keyframes spiralTransform {
            0% {
                opacity: 1;
                transform: translate(0, 0) scale(1) rotate(0deg);
                filter: blur(0) hue-rotate(0deg) brightness(1);
            }
            15% {
                opacity: 1;
                transform: translate(
                    calc(cos(var(--angle)) * 20px),
                    calc(sin(var(--angle)) * 20px)
                ) scale(1.15) rotate(180deg);
                filter: blur(0) hue-rotate(30deg) brightness(1.3);
            }
            25% {
                opacity: 0.7;
                transform: translate(
                    calc(cos(var(--angle)) * 80px),
                    calc(sin(var(--angle)) * 80px)
                ) scale(0.5) rotate(360deg);
                filter: blur(4px) hue-rotate(60deg) brightness(2);
            }
            35% {
                opacity: 0.3;
                transform: translate(
                    calc(cos(var(--angle)) * 150px),
                    calc(sin(var(--angle)) * 150px)
                ) scale(0.2) rotate(540deg);
                filter: blur(10px) hue-rotate(90deg) brightness(3);
            }
            45% {
                opacity: 0;
                transform: translate(
                    calc(cos(var(--angle)) * 200px),
                    calc(sin(var(--angle)) * 200px)
                ) scale(0) rotate(720deg);
                filter: blur(15px) hue-rotate(120deg) brightness(4);
            }
            55% {
                opacity: 0;
                transform: translate(
                    calc(cos(var(--angle)) * 200px),
                    calc(sin(var(--angle)) * 200px)
                ) scale(0) rotate(900deg);
                filter: blur(15px) hue-rotate(240deg) brightness(2);
            }
            65% {
                opacity: 0.3;
                transform: translate(
                    calc(cos(var(--angle)) * 150px),
                    calc(sin(var(--angle)) * 150px)
                ) scale(0.2) rotate(1080deg);
                filter: blur(10px) hue-rotate(240deg) brightness(3);
            }
            75% {
                opacity: 0.7;
                transform: translate(
                    calc(cos(var(--angle)) * 80px),
                    calc(sin(var(--angle)) * 80px)
                ) scale(0.5) rotate(1260deg);
                filter: blur(4px) hue-rotate(300deg) brightness(2);
            }
            85% {
                opacity: 1;
                transform: translate(
                    calc(cos(var(--angle)) * 20px),
                    calc(sin(var(--angle)) * 20px)
                ) scale(1.15) rotate(1440deg);
                filter: blur(0) hue-rotate(320deg) brightness(1.2);
            }
            100% {
                opacity: 1;
                transform: translate(0, 0) scale(1) rotate(1620deg);
                filter: blur(0) hue-rotate(360deg) brightness(1);
            }
        }

        /* Holographic label animation */
        .app-label {
            animation: holographicGlitch 10s ease-in-out infinite;
            filter: drop-shadow(0 0 3px currentColor);
        }

        @keyframes holographicGlitch {
            0%, 100% {
                opacity: 0.9;
                transform: translateX(0);
            }
            22% {
                opacity: 0.6;
                transform: translateX(-2px);
            }
            40% {
                opacity: 0;
                transform: translateX(-5px);
            }
            50% {
                opacity: 0;
                transform: translateX(5px);
            }
            60% {
                opacity: 0.6;
                transform: translateX(2px);
            }
            78% {
                opacity: 0.9;
                transform: translateX(0);
            }
        }

        /* Energy rings */
        .energy-ring {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border-radius: 50%;
            border: 3px solid;
            animation: neonRingPulse 10s ease-in-out infinite;
            opacity: 0;
            pointer-events: none;
        }

        .energy-ring:nth-child(1) {
            width: 350px;
            height: 350px;
            border-color: #2fdcff;
            animation-delay: 0s;
        }

        .energy-ring:nth-child(2) {
            width: 400px;
            height: 400px;
            border-color: #7a5cff;
            animation-delay: 0.3s;
        }

        .energy-ring:nth-child(3) {
            width: 450px;
            height: 450px;
            border-color: #43e97b;
            animation-delay: 0.6s;
        }

        .energy-ring:nth-child(4) {
            width: 500px;
            height: 500px;
            border-color: #ffff00;
            animation-delay: 0.9s;
        }

        @keyframes neonRingPulse {
            0%, 20% {
                opacity: 0;
                transform: translate(-50%, -50%) scale(0.5);
                filter: blur(0);
            }
            35% {
                opacity: 0.8;
                transform: translate(-50%, -50%) scale(1);
                filter: blur(2px);
            }
            45% {
                opacity: 1;
                transform: translate(-50%, -50%) scale(1.3);
                filter: blur(4px);
            }
            55% {
                opacity: 0.8;
                transform: translate(-50%, -50%) scale(1.5);
                filter: blur(6px);
            }
            70%, 100% {
                opacity: 0;
                transform: translate(-50%, -50%) scale(2);
                filter: blur(10px);
            }
        }

        /* Horizontal scanning line */
        .scan-line {
            position: absolute;
            width: 100%;
            height: 4px;
            background: linear-gradient(90deg,
                transparent,
                rgba(0, 255, 255, 0.9),
                rgba(255, 255, 255, 0.9),
                transparent
            );
            animation: scanMove 10s linear infinite;
            opacity: 0;
            filter: blur(1px);
            pointer-events: none;
        }

        @keyframes scanMove {
            0%, 30% {
                opacity: 0;
                top: 0%;
            }
            35% {
                opacity: 0.8;
            }
            45% {
                opacity: 1;
                top: 50%;
            }
            55% {
                opacity: 0.8;
                top: 100%;
            }
            60%, 100% {
                opacity: 0;
                top: 100%;
            }
        }

        /* Digital particles emerging from icons */
        .digital-particle {
            position: absolute;
            width: 6px;
            height: 6px;
            background: white;
            border-radius: 50%;
            box-shadow: 0 0 10px currentColor;
            animation: digitalFloat 10s ease-in-out infinite;
            opacity: 0;
        }

        @keyframes digitalFloat {
            0%, 25% {
                opacity: 0;
                transform: translate(0, 0) scale(0);
            }
            35% {
                opacity: 1;
                transform: translate(var(--tx), var(--ty)) scale(1);
            }
            45%, 55% {
                opacity: 0.8;
                transform: translate(
                    calc(var(--tx) * 1.5),
                    calc(var(--ty) * 1.5)
                ) scale(1.5);
            }
            65% {
                opacity: 1;
                transform: translate(var(--tx), var(--ty)) scale(1);
            }
            75%, 100% {
                opacity: 0;
                transform: translate(0, 0) scale(0);
            }
        }

        /* Branding (original, overridden below) */
        .branding {
            position: fixed;
            bottom: 40px;
            left: 50%;
            transform: translateX(-50%);
            text-align: center;
            color: white;
            z-index: 100;
        }

        .branding h1 {
            font-size: 56px;
            font-weight: 700;
            margin-bottom: 10px;
            letter-spacing: 4px;
            background: linear-gradient(45deg, #00ffff, #ff00ff, #00ff00, #ffff00);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: neonPulse 4s ease-in-out infinite;
        }

        .branding p {
            font-size: 14px;
            font-weight: 300;
            color: #00ffff;
            text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
        }

        @keyframes neonPulse {
            0%, 100% {
                filter: drop-shadow(0 0 20px rgba(102, 126, 234, 0.8));
            }
            50% {
                filter: drop-shadow(0 0 40px rgba(255, 0, 255, 1));
            }
        }

        /* Pause state: stop all animations */
        .paused .app-icon,
        .paused .app-label,
        .paused .digital-particle,
        .paused .energy-ring,
        .paused .scan-line,
        .paused .liquid-bg,
        .paused svg {
            animation-play-state: paused !important;
        }

        /* === mPWR marketing badges + logo blend === */
        .badge {
            position: absolute;
            min-width: 170px;
            padding: 14px 18px;
            border-radius: 18px;
            background: radial-gradient(circle at 0 0, #2b324a, #050814);
            border: 1px solid rgba(0, 255, 255, 0.45);
            box-shadow:
                0 0 18px rgba(0, 0, 0, 0.9),
                0 0 24px rgba(0, 255, 255, 0.25);
            z-index: 150;
        }
        .badge::before {
            content: "";
            position: absolute;
            inset: 1px;
            border-radius: inherit;
            border: 1px solid rgba(255, 255, 255, 0.04);
            pointer-events: none;
        }
        .badge h4 {
            font-size: 14px;
            font-weight: 600;
            letter-spacing: .04em;
        }
        .badge p {
            margin-top: 6px;
            font-size: 12px;
            opacity: .9;
        }
        .badge--latest {
            left: 10%;
            top: 20%;
        }
        .badge--protect {
            left: 11%;
            bottom: 22%;
        }
        .badge--price {
            right: 11%;
            top: 14%;
            text-align: right;
        }
        .badge--price h4 {
            font-size: 20px;
        }
        .badge-label-magenta { color: #ff5cff; }
        .badge-label-cyan    { color: #2fdcff; }
        .badge-label-blue    { color: #4ea2ff; }

        /* Override branding to use mPWR mark */
        .branding {
            position: fixed;
            bottom: 40px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            gap: 8px;
            align-items: center;
            z-index: 120;
        }
        .branding h1,
        .branding p {
            display: none;
        }
        .branding-symbol {
            width: 90px;
            height: 40px;
            position: relative;
        }
        .branding-symbol::before,
        .branding-symbol::after {
            content: "";
            position: absolute;
            inset: 0;
            border-radius: 999px;
            background: linear-gradient(90deg,#f5f5f5,#d9f7ff);
        }
        .branding-symbol::after {
            transform: translateX(46%);
        }
        .branding-text {
            font-size: 18px;
            letter-spacing: .28em;
            text-transform: uppercase;
            color:#e9f7ff;
            opacity:.7;
        }

        @media (max-width: 900px) {
            .badge { font-size: 90%; }
        }
        @media (max-width: 700px) {
            .badge--latest { left:5%; top:14%; }
            .badge--protect{ left:5%; bottom:12%; }
            .badge--price  { right:5%; top:8%; }
        }
        @media (max-width: 520px) {
            .badge { display:none; }
        }
    </style>
</head>
<body>
    <!-- Background stars -->
    <div class="stars" id="starsContainer"></div>

    <!-- Liquid morphing background -->
    <div class="liquid-bg"></div>

    <!-- Marketing-style info badges -->
    <div class="badge badge--latest">
        <h4 class="badge-label-magenta">Latest Specs</h4>
        <p>4G &amp; 5G • Android 15</p>
    </div>

    <div class="badge badge--protect">
        <h4 class="badge-label-cyan">mPWR Protect</h4>
        <p>mPWR AI Locking Tool</p>
    </div>

    <div class="badge badge--price">
        <h4 class="badge-label-blue">25%</h4>
        <p>Below Competitor Pricing</p>
    </div>

    <div class="controls">
        <h3>mPWR Hologram Controls</h3>
        <button id="pauseBtn" onclick="toggleAnimation()">⏸ Pause</button>
        <div class="mode-selector">
            <label>Animation Mode</label>
            <button onclick="setMode('spiral')" class="active" id="spiralBtn">Spiral Orbit</button>
        </div>
    </div>

    <div class="container" id="animationContainer">
        <!-- Energy rings -->
        <div class="energy-ring"></div>
        <div class="energy-ring"></div>
        <div class="energy-ring"></div>
        <div class="energy-ring"></div>
        
        <!-- Horizontal scan line -->
        <div class="scan-line"></div>

        <!-- Digital particles container -->
        <div id="particlesContainer" style="position:absolute;width:100%;height:100%;pointer-events:none;"></div>

        <!-- Phone SVG -->
        <svg viewBox="0 0 400 820" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="phoneBody" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style="stop-color:#1a1a2e;stop-opacity:1" />
                    <stop offset="50%" style="stop-color:#0f0f1e;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#1a1a2e;stop-opacity:1" />
                </linearGradient>
                
                <linearGradient id="screenBg" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style="stop-color:#0a0e27;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#1a1a3e;stop-opacity:1" />
                </linearGradient>
                
                <linearGradient id="wallpaperGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
                    <stop offset="50%" style="stop-color:#764ba2;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#f093fb;stop-opacity:1" />
                </linearGradient>
                
                <radialGradient id="neonGlow" cx="50%" cy="30%" r="70%">
                    <stop offset="0%" style="stop-color:#00ffff;stop-opacity:0.4" />
                    <stop offset="100%" style="stop-color:#ff00ff;stop-opacity:0" />
                </radialGradient>
                
                <filter id="phoneShadow">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="15"/>
                    <feOffset dx="0" dy="20" result="offsetblur"/>
                    <feComponentTransfer>
                        <feFuncA type="linear" slope="0.6"/>
                    </feComponentTransfer>
                    <feMerge>
                        <feMergeNode/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>

                <filter id="iconGlow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
                
                <clipPath id="roundedSquare">
                    <rect x="0" y="0" width="60" height="60" rx="13" ry="13"/>
                </clipPath>
            </defs>
            
            <!-- Phone Shadow -->
            <ellipse cx="200" cy="780" rx="130" ry="25" fill="#667eea" opacity="0.4" filter="url(#phoneShadow)"/>
            
            <!-- Phone Body -->
            <g id="iphone16">
                <!-- Main Frame with neon edge -->
                <rect x="50" y="20" width="300" height="650" rx="45" ry="45" fill="url(#phoneBody)" stroke="#667eea" stroke-width="3"/>
                
                <!-- Bezel -->
                <rect x="60" y="30" width="280" height="630" rx="38" ry="38" fill="#000000"/>
                
                <!-- Inner bezel -->
                <rect x="65" y="35" width="270" height="620" rx="35" ry="35" fill="url(#screenBg)"/>
                
                <!-- Wallpaper base -->
                <rect x="65" y="35" width="270" height="620" rx="35" ry="35" fill="url(#wallpaperGrad)"/>
                
                <!-- Neon glow overlay -->
                <rect x="65" y="35" width="270" height="620" rx="35" ry="35" fill="url(#neonGlow)"/>
                
                <!-- Top notch area -->
                <path d="M160 55 Q200 35 240 55 L260 55 Q265 55 265 60 L265 80 Q265 85 260 85 L140 85 Q135 85 135 80 L135 60 Q135 55 140 55 Z" fill="#050817"/>
                
                <!-- Earpiece -->
                <rect x="185" y="60" width="30" height="6" rx="3" ry="3" fill="#222831"/>
                
                <!-- Front camera -->
                <circle cx="172" cy="63" r="4.5" fill="#050a16"/>
                <circle cx="172" cy="63" r="2.2" fill="#1b6fff"/>
                <circle cx="172" cy="63" r="1.1" fill="#82e9ff"/>
                
                <!-- Status bar icons -->
                <!-- Time -->
                <text x="90" y="80" fill="#ffffff" font-size="16" font-weight="500" font-family="SF Pro, system-ui">15:30</text>
                
                <!-- Signal bars -->
                <g transform="translate(230,65)">
                    <rect x="0" y="4" width="3" height="7" rx="1.5" fill="#ffffff" opacity="0.3"/>
                    <rect x="5" y="2" width="3" height="9" rx="1.5" fill="#ffffff" opacity="0.5"/>
                    <rect x="10" y="0" width="3" height="11" rx="1.5" fill="#ffffff" opacity="0.7"/>
                    <rect x="15" y="-2" width="3" height="13" rx="1.5" fill="#00ffff"/>
                </g>
                
                <!-- WiFi -->
                <g transform="translate(255,66)">
                    <path d="M2 8 Q6 4 10 8" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" fill="none" opacity="0.6"/>
                    <path d="M4 9.5 Q6 7.5 8 9.5" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" fill="none" opacity="0.9"/>
                    <circle cx="6" cy="11" r="1" fill="#00ffff"/>
                </g>
                
                <!-- Battery -->
                <g transform="translate(280,62)">
                    <rect x="0" y="0" width="18" height="10" rx="2" ry="2" fill="none" stroke="#ffffff" stroke-width="1"/>
                    <rect x="2" y="2" width="14" height="6" rx="1.5" ry="1.5" fill="#00ff95"/>
                    <rect x="18" y="2" width="2" height="6" rx="1" ry="1" fill="#ffffff"/>
                </g>
                
                <!-- Wallpaper geometric shards -->
                <g opacity="0.8">
                    <path d="M65 655 L170 35 L230 35 L120 655 Z" fill="rgba(255,255,255,0.06)"/>
                    <path d="M200 35 L335 655 L260 655 L170 35 Z" fill="rgba(0,0,0,0.35)"/>
                    <path d="M130 300 L260 655 L200 655 L110 360 Z" fill="rgba(255,255,255,0.1)"/>
                    <path d="M230 35 L335 480 L335 35 Z" fill="rgba(0,0,0,0.3)"/>
                    <path d="M65 400 L140 655 L65 655 Z" fill="rgba(0,0,0,0.5)"/>
                    
                    <!-- Light streaks -->
                    <path d="M120 150 Q200 250 280 150" stroke="rgba(255,255,255,0.08)" stroke-width="18" stroke-linecap="round" fill="none"/>
                    <path d="M120 550 Q200 450 280 550" stroke="rgba(255,255,255,0.05)" stroke-width="14" stroke-linecap="round" fill="none"/>
                </g>
                
                <!-- Icon grid background -->
                <rect x="80" y="115" width="240" height="415" rx="30" ry="30" fill="rgba(5,10,30,0.85)" stroke="rgba(102,126,234,0.4)" stroke-width="1"/>

                <!-- Subtle top glow -->
                <ellipse cx="200" cy="115" rx="120" ry="18" fill="rgba(255,255,255,0.07)"/>

                <!-- 24 app icon slots with holographic animation -->
                <!-- Row 1 -->
                <g class="app-icon" style="--angle: 0deg;" transform="translate(110,150)">
                    <rect x="-30" y="-30" width="60" height="60" rx="13" ry="13" fill="#141833" stroke="#40c9ff" stroke-width="1.5" filter="url(#iconGlow)"/>
                    <circle cx="0" cy="0" r="16" fill="#40c9ff"/>
                    <path d="M-5 0 L-1 5 L7 -5" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
                    <text x="0" y="26" text-anchor="middle" fill="#40c9ff" font-size="10" class="app-label">Wallet</text>
                </g>
                
                <g class="app-icon" style="--angle: 45deg;" transform="translate(185,150)">
                    <rect x="-30" y="-30" width="60" height="60" rx="13" ry="13" fill="#161a36" stroke="#ff6ec7" stroke-width="1.5" filter="url(#iconGlow)"/>
                    <circle cx="0" cy="0" r="16" fill="#ff6ec7"/>
                    <path d="M-4 -2 L0 -8 L4 -2" stroke="#ffffff" stroke-width="2.2" fill="none" stroke-linecap="round"/>
                    <rect x="-6" y="0" width="12" height="9" rx="2" ry="2" fill="#ffffff"/>
                    <text x="0" y="26" text-anchor="middle" fill="#ff6ec7" font-size="10" class="app-label">Media</text>
                </g>
                
                <g class="app-icon" style="--angle: 90deg;" transform="translate(260,150)">
                    <rect x="-30" y="-30" width="60" height="60" rx="13" ry="13" fill="#141833" stroke="#00ff95" stroke-width="1.5" filter="url(#iconGlow)"/>
                    <rect x="-14" y="-6" width="28" height="18" rx="4" ry="4" fill="#00ff95"/>
                    <circle cx="-7" cy="0" r="3" fill="#ffffff"/>
                    <rect x="0" y="-1" width="8" height="2" fill="#ffffff"/>
                    <rect x="0" y="3" width="10" height="2" fill="rgba(255,255,255,0.8)"/>
                    <text x="0" y="26" text-anchor="middle" fill="#00ff95" font-size="10" class="app-label">Pay</text>
                </g>
                
                <g class="app-icon" style="--angle: 135deg;" transform="translate(335,150)">
                    <rect x="-30" y="-30" width="60" height="60" rx="13" ry="13" fill="#161a36" stroke="#ffd166" stroke-width="1.5" filter="url(#iconGlow)"/>
                    <circle cx="0" cy="-4" r="14" fill="#ffd166"/>
                    <rect x="-10" y="6" width="20" height="6" rx="3" ry="3" fill="#ff9f1c"/>
                    <text x="0" y="26" text-anchor="middle" fill="#ffd166" font-size="10" class="app-label">Learn</text>
                </g>
                
                <!-- Row 2 -->
                <g class="app-icon" style="--angle: 180deg;" transform="translate(110,225)">
                    <rect x="-30" y="-30" width="60" height="60" rx="13" ry="13" fill="#141833" stroke="#ff6ec7" stroke-width="1.5" filter="url(#iconGlow)"/>
                    <circle cx="0" cy="0" r="16" fill="#ff6ec7"/>
                    <path d="M-6 0 L0 -7 L6 0 L0 7 Z" fill="#ffffff"/>
                    <text x="0" y="26" text-anchor="middle" fill="#ff6ec7" font-size="10" class="app-label">Creator</text>
                </g>
                
                <g class="app-icon" style="--angle: 225deg;" transform="translate(185,225)">
                    <rect x="-30" y="-30" width="60" height="60" rx="13" ry="13" fill="#161a36" stroke="#40c9ff" stroke-width="1.5" filter="url(#iconGlow)"/>
                    <path d="M-12 0 L-4 -8 L4 0 L12 -8 L4 8 L-4 0 L-12 8 Z" fill="#40c9ff"/>
                    <text x="0" y="26" text-anchor="middle" fill="#40c9ff" font-size="10" class="app-label">Rewards</text>
                </g>
                
                <g class="app-icon" style="--angle: 270deg;" transform="translate(260,225)">
                    <rect x="-30" y="-30" width="60" height="60" rx="13" ry="13" fill="#141833" stroke="#00ff95" stroke-width="1.5" filter="url(#iconGlow)"/>
                    <rect x="-12" y="-12" width="24" height="24" rx="7" ry="7" fill="#00ff95"/>
                    <path d="M-3 2 L-3 -4 L3 0 L-3 4 Z" fill="#ffffff"/>
                    <text x="0" y="26" text-anchor="middle" fill="#00ff95" font-size="10" class="app-label">Connect</text>
                </g>
                
                <g class="app-icon" style="--angle: 315deg;" transform="translate(335,225)">
                    <rect x="-30" y="-30" width="60" height="60" rx="13" ry="13" fill="#161a36" stroke="#ffd166" stroke-width="1.5" filter="url(#iconGlow)"/>
                    <circle cx="0" cy="0" r="15" fill="#ffd166"/>
                    <path d="M-6 1 L-2 -5 L2 -1 L6 -7" stroke="#ffffff" stroke-width="2.2" stroke-linecap="round" fill="none"/>
                    <text x="0" y="26" text-anchor="middle" fill="#ffd166" font-size="10" class="app-label">Health</text>
                </g>
                
                <!-- Row 3 -->
                <g class="app-icon" style="--angle: 60deg;" transform="translate(110,300)">
                    <rect x="-30" y="-30" width="60" height="60" rx="13" ry="13" fill="#141833" stroke="#40c9ff" stroke-width="1.5" filter="url(#iconGlow)"/>
                    <path d="M-10 4 L-3 -8 L4 4 L11 -8" stroke="#40c9ff" stroke-width="2.5" stroke-linecap="round" fill="none"/>
                    <circle cx="-3" cy="-8" r="2" fill="#ffffff"/>
                    <circle cx="4" cy="4" r="2" fill="#ffffff"/>
                    <text x="0" y="26" text-anchor="middle" fill="#40c9ff" font-size="10" class="app-label">Earn</text>
                </g>
                
                <g class="app-icon" style="--angle: 120deg;" transform="translate(185,300)">
                    <rect x="-30" y="-30" width="60" height="60" rx="13" ry="13" fill="#161a36" stroke="#ff6ec7" stroke-width="1.5" filter="url(#iconGlow)"/>
                    <rect x="-10" y="-10" width="20" height="20" rx="5" ry="5" fill="#ff6ec7"/>
                    <path d="M-5 0 L-1 4 L5 -4" stroke="#ffffff" stroke-width="2" stroke-linecap="round" fill="none"/>
                    <text x="0" y="26" text-anchor="middle" fill="#ff6ec7" font-size="10" class="app-label">Goals</text>
                </g>
                
                <g class="app-icon" style="--angle: 240deg;" transform="translate(260,300)">
                    <rect x="-30" y="-30" width="60" height="60" rx="13" ry="13" fill="#141833" stroke="#00ff95" stroke-width="1.5" filter="url(#iconGlow)"/>
                    <circle cx="0" cy="0" r="16" fill="#00ff95"/>
                    <path d="M-7 0 Q0 -9 7 0 Q0 4 -7 0 Z" fill="#ffffff"/>
                    <text x="0" y="26" text-anchor="middle" fill="#00ff95" font-size="10" class="app-label">Insights</text>
                </g>
                
                <g class="app-icon" style="--angle: 300deg;" transform="translate(335,300)">
                    <rect x="-30" y="-30" width="60" height="60" rx="13" ry="13" fill="#161a36" stroke="#ffd166" stroke-width="1.5" filter="url(#iconGlow)"/>
                    <circle cx="0" cy="-2" r="13" fill="#ffd166"/>
                    <circle cx="-4" cy="-4" r="3" fill="#ffffff"/>
                    <circle cx="4" cy="-4" r="3" fill="#ffffff"/>
                    <path d="M-5 2 Q0 6 5 2" stroke="#ffffff" stroke-width="1.5" fill="none"/>
                    <text x="0" y="26" text-anchor="middle" fill="#ffd166" font-size="10" class="app-label">Family</text>
                </g>
                
                <!-- Row 4 -->
                <g class="app-icon" style="--angle: 20deg;" transform="translate(110,375)">
                    <rect x="-30" y="-30" width="60" height="60" rx="13" ry="13" fill="#141833" stroke="#40c9ff" stroke-width="1.5" filter="url(#iconGlow)"/>
                    <rect x="-14" y="-8" width="28" height="16" rx="4" ry="4" fill="#40c9ff"/>
                    <circle cx="-7" cy="0" r="3" fill="#ffffff"/>
                    <circle cx="0" cy="0" r="3" fill="#ffffff"/>
                    <circle cx="7" cy="0" r="3" fill="#ffffff"/>
                    <text x="0" y="26" text-anchor="middle" fill="#40c9ff" font-size="10" class="app-label">Group</text>
                </g>
                
                <g class="app-icon" style="--angle: 70deg;" transform="translate(185,375)">
                    <rect x="-30" y="-30" width="60" height="60" rx="13" ry="13" fill="#161a36" stroke="#ff6ec7" stroke-width="1.5" filter="url(#iconGlow)"/>
                    <circle cx="-7" cy="-2" r="5" fill="#ff6ec7"/>
                    <circle cx="7" cy="-2" r="5" fill="#ff6ec7"/>
                    <rect x="-10" y="4" width="20" height="8" rx="4" ry="4" fill="#ff9f1c"/>
                    <text x="0" y="26" text-anchor="middle" fill="#ff6ec7" font-size="10" class="app-label">Events</text>
                </g>
                
                <g class="app-icon" style="--angle: 200deg;" transform="translate(260,375)">
                    <rect x="-30" y="-30" width="60" height="60" rx="13" ry="13" fill="#141833" stroke="#00ff95" stroke-width="1.5" filter="url(#iconGlow)"/>
                    <circle cx="0" cy="0" r="15" fill="#00ff95"/>
                    <path d="M0 -8 L7 5 L-7 5 Z" fill="#ffffff"/>
                    <text x="0" y="26" text-anchor="middle" fill="#00ff95" font-size="10" class="app-label">Boost</text>
                </g>
                
                <g class="app-icon" style="--angle: 340deg;" transform="translate(335,375)">
                    <rect x="-30" y="-30" width="60" height="60" rx="13" ry="13" fill="#161a36" stroke="#ffd166" stroke-width="1.5" filter="url(#iconGlow)"/>
                    <rect x="-12" y="-6" width="24" height="12" rx="4" ry="4" fill="#ffd166"/>
                    <circle cx="-6" cy="-6" r="3" fill="#ffffff"/>
                    <circle cx="0" cy="-6" r="3" fill="#ffffff"/>
                    <circle cx="6" cy="-6" r="3" fill="#ffffff"/>
                    <text x="0" y="26" text-anchor="middle" fill="#ffd166" font-size="10" class="app-label">Transit</text>
                </g>
                
                <!-- Row 5 -->
                <g class="app-icon" style="--angle: 160deg;" transform="translate(110,450)">
                    <rect x="-30" y="-30" width="60" height="60" rx="13" ry="13" fill="#141833" stroke="#40c9ff" stroke-width="1.5" filter="url(#iconGlow)"/>
                    <circle cx="0" cy="0" r="16" fill="#40c9ff"/>
                    <path d="M-7 3 L-1 9 L7 -5" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" fill="none"/>
                    <path d="M-7 -5 L-1 1 L7 -11" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" fill="none" opacity="0.7"/>
                    <text x="0" y="26" text-anchor="middle" fill="#40c9ff" font-size="10" class="app-label">Credit</text>
                </g>
                
                <g class="app-icon" style="--angle: 10deg;" transform="translate(185,450)">
                    <rect x="-30" y="-30" width="60" height="60" rx="13" ry="13" fill="#161a36" stroke="#ff6ec7" stroke-width="1.5" filter="url(#iconGlow)"/>
                    <circle cx="-6" cy="-2" r="4" fill="#ffffff"/>
                    <circle cx="6" cy="-2" r="4" fill="#ffffff"/>
                    <rect x="-10" y="4" width="20" height="8" rx="4" ry="4" fill="#ff6ec7"/>
                    <text x="0" y="26" text-anchor="middle" fill="#ff6ec7" font-size="10" class="app-label">Social</text>
                </g>
                
                <g class="app-icon" style="--angle: 140deg;" transform="translate(260,450)">
                    <rect x="-30" y="-30" width="60" height="60" rx="13" ry="13" fill="#141833" stroke="#00ff95" stroke-width="1.5" filter="url(#iconGlow)"/>
                    <rect x="-12" y="-12" width="24" height="24" rx="7" ry="7" fill="#00ff95"/>
                    <circle cx="-5" cy="-3" r="2.5" fill="#ffffff"/>
                    <circle cx="5" cy="-3" r="2.5" fill="#ffffff"/>
                    <path d="M-5 3 Q0 7 5 3" stroke="#ffffff" stroke-width="1.6" fill="none"/>
                    <text x="0" y="26" text-anchor="middle" fill="#00ff95" font-size="10" class="app-label">Guard</text>
                </g>
                
                <g class="app-icon" style="--angle: 260deg;" transform="translate(335,450)">
                    <rect x="-30" y="-30" width="60" height="60" rx="13" ry="13" fill="#161a36" stroke="#ffd166" stroke-width="1.5" filter="url(#iconGlow)"/>
                    <circle cx="0" cy="-4" r="14" fill="#ffd166"/>
                    <path d="M-6 0 L-2 -4 L2 0 L6 -4" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round"/>
                    <rect x="-8" y="2" width="16" height="8" rx="3" ry="3" fill="#ffffff"/>
                    <text x="0" y="26" text-anchor="middle" fill="#ffd166" font-size="10" class="app-label">Bills</text>
                </g>
                
                <!-- Dock area -->
                <rect x="85" y="560" width="230" height="70" rx="28" ry="28" fill="rgba(10,14,40,0.9)" stroke="rgba(102,126,234,0.5)" stroke-width="1.2"/>
                
                <!-- Dock icons (special spiral timing) -->
                <g transform="translate(120,595)">
                    <g class="app-icon dock-icon">
                        <rect x="-22" y="-22" width="44" height="44" rx="14" ry="14" fill="#2d325a" stroke="#40c9ff" stroke-width="1.4" filter="url(#iconGlow)"/>
                        <circle cx="0" cy="0" r="11" fill="#40c9ff"/>
                        <path d="M-4 -1 L0 -5 L4 -1" stroke="#ffffff" stroke-width="1.8" fill="none" stroke-linecap="round"/>
                        <rect x="-5" y="1" width="10" height="6" rx="2" ry="2" fill="#ffffff"/>
                    </g>
                </g>
                
                <g transform="translate(180,595)">
                    <g class="app-icon dock-icon">
                        <rect x="-22" y="-22" width="44" height="44" rx="14" ry="14" fill="#2d325a" stroke="#ff6ec7" stroke-width="1.4" filter="url(#iconGlow)"/>
                        <circle cx="0" cy="-4" r="9" fill="#ff6ec7"/>
                        <path d="M-7 6 Q0 10 7 6" stroke="#ffffff" stroke-width="1.6" fill="none"/>
                    </g>
                </g>
                
                <g transform="translate(240,595)">
                    <g class="app-icon dock-icon">
                        <rect x="-22" y="-22" width="44" height="44" rx="14" ry="14" fill="#2d325a" stroke="#00ff95" stroke-width="1.4" filter="url(#iconGlow)"/>
                        <circle cx="0" cy="0" r="11" fill="#00ff95"/>
                        <path d="M-5 0 L-1 4 L5 -4" stroke="#ffffff" stroke-width="2" stroke-linecap="round" fill="none"/>
                    </g>
                </g>
                
                <g transform="translate(300,595)">
                    <g class="app-icon dock-icon">
                        <rect x="-22" y="-22" width="44" height="44" rx="14" ry="14" fill="#2d325a" stroke="#ffd166" stroke-width="1.4" filter="url(#iconGlow)"/>
                        <circle cx="0" cy="-3" r="9" fill="#ffd166"/>
                        <rect x="-6" y="3" width="12" height="6" rx="3" ry="3" fill="#ffffff"/>
                    </g>
                </g>
                
                <!-- Bottom Home indicator -->
                <rect x="160" y="635" width="80" height="5" rx="2.5" ry="2.5" fill="rgba(255,255,255,0.5)"/>
                
                <!-- Side buttons -->
                <rect x="45" y="140" width="4" height="35" rx="2" fill="#2c2c2e" stroke="#667eea" stroke-width="0.5"/>
                <rect x="45" y="185" width="4" height="35" rx="2" fill="#2c2c2e" stroke="#667eea" stroke-width="0.5"/>
                
                <!-- Power Button -->
                <rect x="351" y="160" width="4" height="55" rx="2" fill="#2c2c2e" stroke="#667eea" stroke-width="0.5"/>
                
                <!-- Frame highlight with subtle gradient -->
                <rect x="52" y="23" width="296" height="644" rx="43" ry="43" stroke="rgba(255,255,255,0.15)" stroke-width="1" fill="none"/>
            </g>
        </svg>
    </div>

    <div class="branding">
        <div class="branding-symbol"></div>
        <div class="branding-text">mPWR</div>
    </div>

    <script>
        // Create background stars
        function createStars() {
            const container = document.getElementById('starsContainer');
            for (let i = 0; i < 100; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                star.style.left = `${Math.random() * 100}%`;
                star.style.top = `${Math.random() * 100}%`;
                star.style.animationDelay = `${Math.random() * 3}s`;
                container.appendChild(star);
            }
        }

        // Create digital particles for app icons
        function createDigitalParticles() {
            const container = document.getElementById('particlesContainer');
            
            const iconPositions = [
                { x: 110, y: 150 }, { x: 185, y: 150 }, { x: 260, y: 150 }, { x: 335, y: 150 },
                { x: 110, y: 225 }, { x: 185, y: 225 }, { x: 260, y: 225 }, { x: 335, y: 225 },
                { x: 110, y: 300 }, { x: 185, y: 300 }, { x: 260, y: 300 }, { x: 335, y: 300 },
                { x: 110, y: 375 }, { x: 185, y: 375 }, { x: 260, y: 375 }, { x: 335, y: 375 },
                { x: 110, y: 450 }, { x: 185, y: 450 }, { x: 260, y: 450 }, { x: 335, y: 450 },
                { x: 110, y: 610 }, { x: 175, y: 610 }, { x: 240, y: 610 }, { x: 305, y: 610 },
            ];
            
            const colors = ['#2fdcff', '#7a5cff', '#43e97b', '#ffff00'];
            
            iconPositions.forEach((pos, iconIndex) => {
                for (let i = 0; i < 12; i++) {
                    const particle = document.createElement('div');
                    particle.className = 'digital-particle';
                    particle.style.left = `${pos.x}px`;
                    particle.style.top = `${pos.y}px`;
                    
                    const angle = (i / 12) * Math.PI * 2;
                    const distance = 40 + Math.random() * 30;
                    const tx = Math.cos(angle) * distance;
                    const ty = Math.sin(angle) * distance;
                    
                    particle.style.setProperty('--tx', `${tx}px`);
                    particle.style.setProperty('--ty', `${ty}px`);
                    
                    const baseDelay = iconIndex * 0.1;
                    particle.style.animationDelay = `${baseDelay + (i * 0.08)}s`;
                    
                    particle.style.color = colors[Math.floor(Math.random() * colors.length)];
                    
                    container.appendChild(particle);
                }
            });
        }

        // Toggle animation (pause/resume)
        function toggleAnimation() {
            const container = document.getElementById('animationContainer');
            const btn = document.getElementById('pauseBtn');
            
            if (container.classList.contains('paused')) {
                container.classList.remove('paused');
                btn.textContent = '⏸ Pause';
            } else {
                container.classList.add('paused');
                btn.textContent = '▶ Resume';
            }
        }

        // Change mode (for future extension)
        function setMode(mode) {
            document.querySelectorAll('.mode-selector button').forEach(btn => {
                btn.classList.remove('active');
            });
            document.getElementById(`${mode}Btn`).classList.add('active');
            // Mode is already spiral by default
        }

        // Initialize
        createStars();
        createDigitalParticles();

        // Add extra visual effects
        console.log('%c mPWR HOLOGRAPHIC INTERFACE LOADED ',
            'background: linear-gradient(45deg, #2fdcff, #7a5cff); color: white; font-size: 20px; padding: 10px; font-weight: bold;');
    </script>
</body>
</html>
```

**Mike:** Generate the energy rings and neon ring pulse effect around the image of the iPhone. Omit the other visuals.

**GPT:** Here’s a **minimal HTML file** that only shows your iPhone image with animated **energy rings / neon ring pulse** around it.  
(No particles, scan lines, badges, or other visuals.)

Just save this as `iphone_energy_rings.html` and replace `YOUR_IPHONE_IMAGE.png` with your actual image file name/path.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>iPhone Energy Rings</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background: radial-gradient(circle at 50% 0%, #101632, #050716, #000000);
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      overflow: hidden;
    }

    /* Centered scene */
    .scene {
      position: relative;
      width: 420px;
      height: 840px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    /* iPhone image */
    .phone {
      position: relative;
      width: 320px;
      z-index: 5;
      filter: drop-shadow(0 30px 60px rgba(0, 0, 0, 0.7));
    }

    .phone img {
      width: 100%;
      height: auto;
      display: block;
      border-radius: 32px;
    }

    /* Energy rings */
    .energy-ring {
      position: absolute;
      top: 50%;
      left: 50%;
      border-radius: 50%;
      border: 3px solid;
      transform: translate(-50%, -50%);
      pointer-events: none;
      animation: neonRingPulse 6s ease-in-out infinite;
      filter: blur(0);
    }

    .energy-ring:nth-child(1) {
      width: 360px;
      height: 360px;
      border-color: #2fdcff;
      animation-delay: 0s;
      opacity: 0.9;
    }

    .energy-ring:nth-child(2) {
      width: 420px;
      height: 420px;
      border-color: #7a5cff;
      animation-delay: 0.25s;
      opacity: 0.8;
    }

    .energy-ring:nth-child(3) {
      width: 480px;
      height: 480px;
      border-color: #43e97b;
      animation-delay: 0.5s;
      opacity: 0.7;
    }

    .energy-ring:nth-child(4) {
      width: 540px;
      height: 540px;
      border-color: #ffff66;
      animation-delay: 0.75s;
      opacity: 0.6;
    }

    /* Neon pulse animation */
    @keyframes neonRingPulse {
      0% {
        transform: translate(-50%, -50%) scale(0.7);
        opacity: 0;
        filter: blur(10px);
      }
      20% {
        transform: translate(-50%, -50%) scale(1);
        opacity: 0.9;
        filter: blur(2px);
      }
      45% {
        transform: translate(-50%, -50%) scale(1.25);
        opacity: 1;
        filter: blur(4px);
      }
      70% {
        transform: translate(-50%, -50%) scale(1.6);
        opacity: 0.2;
        filter: blur(8px);
      }
      100% {
        transform: translate(-50%, -50%) scale(1.9);
        opacity: 0;
        filter: blur(12px);
      }
    }
  </style>
</head>
<body>
  <div class="scene">
    <!-- energy rings (they sit behind the phone) -->
    <div class="energy-ring"></div>
    <div class="energy-ring"></div>
    <div class="energy-ring"></div>
    <div class="energy-ring"></div>

    <!-- phone image -->
    <div class="phone">
      <!-- Replace src with your actual phone image -->
      <img src="YOUR_IPHONE_IMAGE.png" alt="mPWR iPhone" />
    </div>
  </div>
</body>
</html>
```

If you want, I can next wrap this into your existing hologram file so you can toggle between “full hologram mode” and “energy-ring only” with a button.
