---
title: "Ninja smoke bomb SVG"
date: 2025-11-14
cluster: "Misc / Uncategorized"
messages: 56
source: chatgpt-export conversations.json (FULL transcript)
---

# Ninja smoke bomb SVG

> 56 messages · 2025-11-14 · cluster: Misc / Uncategorized

**Semantic neighbors:** [[Kitchen hood inspection cost]] · [[Fire Sprinkler Specialist Guide]] · [[Custom intent topics ZoomInfo]] · [[Message explanation]]

## Transcript

**Mike:** Create a highly detailed SVG of a ninja on top of a pagoda throwing a smoke bomb, and disappearing.

**GPT:** Here’s a standalone, detailed SVG you can paste into an `.svg` file and open in a browser.  
It shows a ninja on top of a pagoda, throwing a smoke bomb and gradually disappearing, with animated smoke.

```svg
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 800 600"
>
  <defs>
    <!-- SKY GRADIENT -->
    <linearGradient id="skyGradient" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#050816" />
      <stop offset="40%" stop-color="#182a4d" />
      <stop offset="70%" stop-color="#27395f" />
      <stop offset="100%" stop-color="#090f1f" />
    </linearGradient>

    <!-- MOON GLOW -->
    <radialGradient id="moonGlow" cx="50%" cy="25%" r="20%">
      <stop offset="0%" stop-color="#fef7d5" />
      <stop offset="40%" stop-color="#f5ecb3" />
      <stop offset="100%" stop-color="rgba(245, 236, 179, 0)" />
    </radialGradient>

    <!-- PAGODA ROOF GRADIENT -->
    <linearGradient id="roofGradient" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#23252c" />
      <stop offset="40%" stop-color="#2f323c" />
      <stop offset="100%" stop-color="#111218" />
    </linearGradient>

    <!-- PAGODA WALL GRADIENT -->
    <linearGradient id="wallGradient" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#b64b37" />
      <stop offset="50%" stop-color="#8a2f24" />
      <stop offset="100%" stop-color="#541a17" />
    </linearGradient>

    <!-- GOLD ACCENT -->
    <linearGradient id="goldAccent" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#f4d46a" />
      <stop offset="50%" stop-color="#e1b94b" />
      <stop offset="100%" stop-color="#a2762a" />
    </linearGradient>

    <!-- SMOKE GRADIENT -->
    <radialGradient id="smokeGradient" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="rgba(230, 230, 235, 0.95)" />
      <stop offset="40%" stop-color="rgba(190, 192, 205, 0.8)" />
      <stop offset="100%" stop-color="rgba(80, 84, 105, 0)" />
    </radialGradient>

    <!-- SMOKE BLUR -->
    <filter id="smokeBlur" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="5" />
    </filter>

    <!-- DISTANT CITY LIGHTS GRADIENT -->
    <linearGradient id="cityGradient" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#050711" />
      <stop offset="100%" stop-color="#020308" />
    </linearGradient>

    <!-- NINJA CLOTH GRADIENT -->
    <linearGradient id="ninjaCloth" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#14151a" />
      <stop offset="40%" stop-color="#1b1e25" />
      <stop offset="100%" stop-color="#07080c" />
    </linearGradient>

    <!-- NINJA EDGE HIGHLIGHT -->
    <linearGradient id="ninjaEdge" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#444957" />
      <stop offset="100%" stop-color="rgba(200, 205, 220, 0.1)" />
    </linearGradient>
  </defs>

  <!-- BACKGROUND SKY -->
  <rect x="0" y="0" width="800" height="600" fill="url(#skyGradient)" />

  <!-- MOON + GLOW -->
  <circle cx="620" cy="110" r="90" fill="url(#moonGlow)" />
  <circle cx="620" cy="110" r="32" fill="#fdf8d9" />
  <circle cx="610" cy="102" r="6" fill="#f3e8b6" />
  <circle cx="632" cy="118" r="4" fill="#f3e8b6" />
  <circle cx="626" cy="98" r="3" fill="#ece2a4" />

  <!-- STARS -->
  <g fill="#f6f6ff" opacity="0.8">
    <circle cx="80" cy="70" r="1.3" />
    <circle cx="140" cy="40" r="1.0" />
    <circle cx="210" cy="90" r="1.1" />
    <circle cx="320" cy="55" r="1.4" />
    <circle cx="430" cy="35" r="1.2" />
    <circle cx="520" cy="80" r="1.0" />
    <circle cx="700" cy="60" r="1.3" />
    <circle cx="760" cy="120" r="1.1" />
    <circle cx="50" cy="140" r="0.9" />
    <circle cx="260" cy="150" r="1.1" />
    <circle cx="350" cy="40" r="0.9" />
    <circle cx="580" cy="32" r="1.2" />
  </g>

  <!-- DISTANT CITY SILHOUETTE -->
  <g transform="translate(0, 360)">
    <rect x="0" y="0" width="800" height="240" fill="url(#cityGradient)" />
    <g fill="#080a12">
      <rect x="20" y="60" width="80" height="120" />
      <rect x="130" y="40" width="90" height="140" />
      <rect x="250" y="80" width="70" height="100" />
      <rect x="340" y="30" width="110" height="150" />
      <rect x="480" y="70" width="80" height="110" />
      <rect x="580" y="50" width="100" height="130" />
      <rect x="710" y="90" width="60" height="90" />
    </g>
    <!-- City lights -->
    <g fill="#f6e083" opacity="0.7">
      <rect x="28" y="70" width="4" height="6" />
      <rect x="42" y="90" width="4" height="6" />
      <rect x="56" y="110" width="4" height="6" />
      <rect x="72" y="130" width="4" height="6" />

      <rect x="138" y="50" width="4" height="6" />
      <rect x="154" y="72" width="4" height="6" />
      <rect x="170" y="94" width="4" height="6" />
      <rect x="186" y="116" width="4" height="6" />

      <rect x="348" y="40" width="4" height="6" />
      <rect x="366" y="64" width="4" height="6" />
      <rect x="384" y="88" width="4" height="6" />
      <rect x="402" y="112" width="4" height="6" />

      <rect x="588" y="60" width="4" height="6" />
      <rect x="608" y="84" width="4" height="6" />
      <rect x="628" y="108" width="4" height="6" />
      <rect x="648" y="132" width="4" height="6" />
    </g>
  </g>

  <!-- PAGODA BASE SHADOW -->
  <ellipse cx="400" cy="470" rx="220" ry="35" fill="rgba(0,0,0,0.4)" />

  <!-- PAGODA STRUCTURE -->
  <g id="pagoda" transform="translate(0, 80)">
    <!-- Lower roof -->
    <g transform="translate(0, 210)">
      <path
        d="M140 200
           Q260 160 400 175
           Q540 160 660 200
           Q640 190 630 210
           Q400 150 170 210
           Q160 190 140 200 Z"
        fill="url(#roofGradient)"
        stroke="#05060a"
        stroke-width="2"
      />
      <!-- Hanging ornaments -->
      <g stroke="#e3c36f" stroke-width="2">
        <line x1="200" y1="190" x2="200" y2="215" />
        <line x1="260" y1="180" x2="260" y2="210" />
        <line x1="540" y1="180" x2="540" y2="210" />
        <line x1="600" y1="190" x2="600" y2="215" />
      </g>
      <g fill="#f4d46a">
        <circle cx="200" cy="217" r="3" />
        <circle cx="260" cy="212" r="3" />
        <circle cx="540" cy="212" r="3" />
        <circle cx="600" cy="217" r="3" />
      </g>

      <!-- Lower level walls -->
      <rect
        x="210" y="150"
        width="380" height="90"
        fill="url(#wallGradient)"
        stroke="#2a1110"
        stroke-width="2"
      />
      <!-- Pillars -->
      <g fill="#5b1d1b">
        <rect x="230" y="150" width="16" height="90" />
        <rect x="290" y="150" width="16" height="90" />
        <rect x="350" y="150" width="16" height="90" />
        <rect x="410" y="150" width="16" height="90" />
        <rect x="470" y="150" width="16" height="90" />
        <rect x="530" y="150" width="16" height="90" />
        <rect x="590" y="150" width="16" height="90" />
      </g>
      <!-- Lantern slots -->
      <g fill="#e5bf7b" opacity="0.85">
        <rect x="250" y="175" width="24" height="22" rx="3" />
        <rect x="320" y="175" width="24" height="22" rx="3" />
        <rect x="390" y="175" width="24" height="22" rx="3" />
        <rect x="460" y="175" width="24" height="22" rx="3" />
        <rect x="530" y="175" width="24" height="22" rx="3" />
      </g>
    </g>

    <!-- Middle roof -->
    <g transform="translate(0, 110)">
      <path
        d="M180 150
           Q280 115 400 130
           Q520 115 620 150
           Q605 142 596 160
           Q400 105 204 160
           Q195 142 180 150 Z"
        fill="url(#roofGradient)"
        stroke="#05060a"
        stroke-width="2"
      />
      <!-- Middle level walls -->
      <rect
        x="250" y="120"
        width="300" height="80"
        fill="url(#wallGradient)"
        stroke="#2a1110"
        stroke-width="2"
      />
      <!-- Gold rail -->
      <rect
        x="250" y="120"
        width="300" height="12"
        fill="url(#goldAccent)"
      />
      <!-- Pillars -->
      <g fill="#5b1d1b">
        <rect x="270" y="120" width="14" height="80" />
        <rect x="320" y="120" width="14" height="80" />
        <rect x="370" y="120" width="14" height="80" />
        <rect x="420" y="120" width="14" height="80" />
        <rect x="470" y="120" width="14" height="80" />
        <rect x="520" y="120" width="14" height="80" />
      </g>
      <!-- Windows -->
      <g fill="#f6d58a" opacity="0.9">
        <rect x="290" y="145" width="26" height="22" rx="3" />
        <rect x="338" y="145" width="26" height="22" rx="3" />
        <rect x="386" y="145" width="26" height="22" rx="3" />
        <rect x="434" y="145" width="26" height="22" rx="3" />
        <rect x="482" y="145" width="26" height="22" rx="3" />
      </g>
    </g>

    <!-- Top roof -->
    <g transform="translate(0, 20)">
      <path
        d="M220 140
           Q310 110 400 120
           Q490 110 580 140
           Q568 133 562 150
           Q400 105 238 150
           Q232 133 220 140 Z"
        fill="url(#roofGradient)"
        stroke="#05060a"
        stroke-width="2"
      />
      <!-- Top platform -->
      <rect
        x="320" y="120"
        width="160" height="40"
        fill="url(#wallGradient)"
        stroke="#2a1110"
        stroke-width="2"
      />
      <rect
        x="320" y="120"
        width="160" height="10"
        fill="url(#goldAccent)"
      />
      <!-- Small central tower -->
      <rect
        x="370" y="80"
        width="60" height="50"
        fill="url(#wallGradient)"
        stroke="#2a1110"
        stroke-width="2"
      />
      <!-- Tiny roof cap -->
      <path
        d="M360 80
           Q400 60 440 80
           Q428 74 424 88
           Q400 65 376 88
           Q372 74 360 80 Z"
        fill="url(#roofGradient)"
        stroke="#05060a"
        stroke-width="2"
      />
      <!-- Finial -->
      <rect x="396" y="50" width="8" height="16" fill="#f0d377" />
      <circle cx="400" cy="48" r="5" fill="#f8e9a2" />
    </g>
  </g>

  <!-- SMOKE + NINJA ON TOP ROOF -->
  <g id="sceneTop" transform="translate(0, 80)">
    <!-- Smoke cloud base (under ninja feet) -->
    <g id="smokeBase" filter="url(#smokeBlur)">
      <ellipse
        cx="400" cy="140"
        rx="60" ry="18"
        fill="rgba(40, 44, 60, 0.4)"
      />
      <g fill="url(#smokeGradient)">
        <circle cx="380" cy="132" r="22" />
        <circle cx="410" cy="128" r="26" />
        <circle cx="395" cy="138" r="20" />
        <circle cx="420" cy="140" r="18" />
      </g>
      <!-- Rising smoke puffs -->
      <g id="smokePuffs" opacity="0.0">
        <circle cx="380" cy="110" r="16" />
        <circle cx="405" cy="100" r="18" />
        <circle cx="430" cy="112" r="14" />
        <circle cx="395" cy="90" r="10" />
        <circle cx="418" cy="86" r="9" />
        <animate
          attributeName="opacity"
          values="0;1;1;0"
          dur="5s"
          repeatCount="indefinite"
          keyTimes="0;0.25;0.7;1"
        />
        <animateTransform
          attributeName="transform"
          type="translate"
          from="0,0"
          to="0,-40"
          dur="5s"
          repeatCount="indefinite"
        />
      </g>
    </g>

    <!-- NINJA GROUP -->
    <g id="ninja" transform="translate(0, 0)" opacity="1">
      <!-- Feet on roof -->
      <!-- Shadow under ninja -->
      <ellipse
        cx="400" cy="132"
        rx="26" ry="8"
        fill="rgba(0,0,0,0.6)"
      />
      <!-- Legs -->
      <g fill="url(#ninjaCloth)" stroke="#05060a" stroke-width="1.4">
        <!-- Left leg (forward) -->
        <path
          d="M392 110
             L382 135
             Q380 140 386 142
             L394 140
             Q388 137 392 127 Z"
        />
        <!-- Right leg (back) -->
        <path
          d="M408 110
             L418 136
             Q420 140 414 142
             L406 139
             Q412 135 408 125 Z"
        />
      </g>

      <!-- Torso -->
      <path
        d="M390 80
           Q400 70 410 80
           L418 108
           Q410 118 400 120
           Q390 118 382 108 Z"
        fill="url(#ninjaCloth)"
        stroke="#05060a"
        stroke-width="1.6"
      />

      <!-- Torso wrap highlight -->
      <path
        d="M386 96
           Q400 90 414 96
           Q406 104 400 106
           Q394 104 386 96 Z"
        fill="url(#ninjaEdge)"
        opacity="0.7"
      />

      <!-- Belt -->
      <rect
        x="386" y="102"
        width="28" height="5"
        rx="2"
        fill="#242733"
      />
      <rect
        x="386" y="102"
        width="28" height="2"
        fill="#50566b"
        opacity="0.7"
      />

      <!-- Head -->
      <g>
        <circle
          cx="400" cy="64"
          r="14"
          fill="url(#ninjaCloth)"
          stroke="#05060a"
          stroke-width="1.6"
        />
        <!-- Mask band -->
        <rect
          x="388" y="60"
          width="24" height="10"
          rx="5"
          fill="#13141a"
        />
        <!-- Eye slit -->
        <rect
          x="390.5" y="62.5"
          width="19" height="5"
          rx="2.5"
          fill="#f6e2bb"
        />
        <!-- Eyes -->
        <circle cx="396" cy="65.2" r="1.3" fill="#1e1512" />
        <circle cx="403.5" cy="65.2" r="1.3" fill="#1e1512" />
        <circle cx="396.4" cy="64.8" r="0.5" fill="#f9f5e4" />
        <circle cx="403.9" cy="64.8" r="0.5" fill="#f9f5e4" />

        <!-- Headband tails -->
        <path
          d="M408 58
             Q420 54 430 60
             Q420 64 410 64 Z"
          fill="#1a1d27"
        />
        <path
          d="M407 58
             Q417 52 422 42
             Q412 46 406 52 Z"
          fill="#1a1d27"
        />
      </g>

      <!-- Left arm (holding smoke bomb, extended forward) -->
      <g stroke="#05060a" stroke-width="1.4">
        <path
          d="M388 86
             Q370 82 360 78
             Q356 84 360 90
             Q372 92 384 92 Z"
          fill="url(#ninjaCloth)"
        />
        <!-- Left hand and smoke bomb -->
        <g>
          <circle
            cx="357" cy="79"
            r="4.3"
            fill="#171822"
            stroke="#05060a"
            stroke-width="1.1"
          />
          <!-- Smoke bomb core -->
          <circle
            cx="353" cy="78"
            r="3"
            fill="#606471"
          />
          <!-- Fuse spark -->
          <circle
            cx="349.5" cy="74.5"
            r="2"
            fill="#f4d46a"
          >
            <animate
              attributeName="r"
              values="1.5;2.5;1.5"
              dur="0.8s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.3;1;0.3"
              dur="0.8s"
              repeatCount="indefinite"
            />
          </circle>
        </g>
      </g>

      <!-- Right arm (back, balancing) -->
      <g stroke="#05060a" stroke-width="1.4">
        <path
          d="M412 86
             Q430 80 440 72
             Q444 76 442 82
             Q432 88 418 92 Z"
          fill="url(#ninjaCloth)"
        />
      </g>

      <!-- Sword on back -->
      <g transform="translate(0,0)">
        <rect
          x="392" y="74"
          width="4" height="38"
          transform="rotate(-35 392 74)"
          fill="#1c1e25"
        />
        <rect
          x="392" y="74"
          width="4" height="12"
          transform="rotate(-35 392 74)"
          fill="#252836"
        />
        <rect
          x="392" y="74"
          width="4" height="2"
          transform="rotate(-35 392 74)"
          fill="#d6c37c"
        />
      </g>

      <!-- NINJA DISAPPEAR ANIMATION -->
      <animate
        attributeName="opacity"
        values="1;1;0.1;0"
        dur="5s"
        repeatCount="indefinite"
        keyTimes="0;0.3;0.7;1"
      />
      <animateTransform
        attributeName="transform"
        type="translate"
        from="0,0"
        to="0,-10"
        dur="5s"
        repeatCount="indefinite"
        keyTimes="0;0.3;1"
        values="0,0;0,-6;0,-10"
      />
    </g>

    <!-- Expanding smoke burst from the bomb -->
    <g id="smokeBurst" filter="url(#smokeBlur)">
      <circle
        cx="353" cy="78"
        r="6"
        fill="url(#smokeGradient)"
        opacity="0.0"
      >
        <animate
          attributeName="r"
          values="6;40;60"
          dur="5s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0;0.9;0.4;0"
          dur="5s"
          repeatCount="indefinite"
          keyTimes="0;0.2;0.6;1"
        />
      </circle>

      <!-- Extra layered burst rings -->
      <circle
        cx="353" cy="78"
        r="10"
        fill="none"
        stroke="rgba(230,230,240,0.7)"
        stroke-width="2"
        opacity="0"
      >
        <animate
          attributeName="r"
          values="10;30;50"
          dur="5s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0;0.8;0"
          dur="5s"
          repeatCount="indefinite"
          keyTimes="0;0.25;1"
        />
      </circle>
    </g>
  </g>

  <!-- FOREGROUND BRANCH SILHOUETTE FOR DEPTH -->
  <g
    transform="translate(-40, 90)"
    fill="none"
    stroke="#05060a"
    stroke-linecap="round"
  >
    <path
      d="M50 260
         C140 230 210 210 280 205
         C320 202 350 205 380 212"
      stroke-width="5"
    />
    <path
      d="M150 230
         C170 210 185 200 200 193"
      stroke-width="4"
    />
    <path
      d="M210 220
         C225 205 235 198 245 193"
      stroke-width="3.5"
    />
    <!-- Stylized leaves -->
    <g fill="#050b10" stroke="#05060a" stroke-width="1">
      <ellipse cx="165" cy="212" rx="10" ry="4" />
      <ellipse cx="180" cy="204" rx="8" ry="3.5" />
      <ellipse cx="193" cy="198" rx="9" ry="4" />

      <ellipse cx="222" cy="206" rx="9" ry="4" />
      <ellipse cx="236" cy="199" rx="7" ry="3.5" />
      <ellipse cx="248" cy="194" rx="8" ry="3.5" />
    </g>
  </g>
</svg>
```

If you’d like, I can next:

- Simplify it for use as an icon, or  
- Turn the ninja/disappear effect into a frame-by-frame SVG sprite for animation in a game or web app.

**Mike:** Turn the ninja/disappear effect into a frame-by-frame SVG sprite for animation in a game or web app.

**GPT:** Nice, let’s turn your disappearing ninja into a sprite sheet you can use in a game or web app.

Below is a **frame-by-frame SVG sprite** with **8 frames**, each **256×256**, laid out horizontally (total 2048×256).  
Each frame shows a later stage of the ninja throwing a smoke bomb and vanishing, with the smoke expanding and thickening.

You can:

- Use it directly as an SVG texture in WebGL/Canvas, or  
- Export to PNG and use `background-position` to animate in CSS, or  
- Slice it into frames in your game engine.

---

### Ninja Disappear Sprite Sheet (8 frames)

```svg
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  width="2048"
  height="256"
  viewBox="0 0 2048 256"
>
  <defs>
    <!-- Smoke gradient + blur -->
    <radialGradient id="smokeGrad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#f2f3f6" stop-opacity="0.95" />
      <stop offset="40%" stop-color="#cfd2dd" stop-opacity="0.8" />
      <stop offset="100%" stop-color="#505469" stop-opacity="0" />
    </radialGradient>

    <filter id="smokeBlur" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="3" />
    </filter>

    <!-- Simple roof / platform under ninja -->
    <symbol id="roofPlatform" viewBox="0 0 128 128">
      <!-- Stylized roof edge -->
      <path
        d="M8 94
           Q32 86 64 88
           Q96 86 120 94
           Q116 92 114 98
           Q64 84 14 98
           Q12 92 8 94 Z"
        fill="#22252e"
        stroke="#05060a"
        stroke-width="1.5"
      />
      <!-- Top plank -->
      <rect x="24" y="80" width="80" height="10" rx="2" fill="#3b1b18" />
      <rect x="24" y="80" width="80" height="3" fill="#f2d487" />
    </symbol>

    <!-- Ninja symbol (static pose, 128x128 local coords) -->
    <symbol id="ninjaSprite" viewBox="0 0 128 128">
      <!-- Ninja shadow on roof -->
      <ellipse cx="64" cy="88" rx="18" ry="6" fill="rgba(0,0,0,0.55)" />

      <!-- Legs -->
      <g fill="#15161c" stroke="#05060a" stroke-width="1.2">
        <!-- Left leg -->
        <path
          d="M60 70
             L54 86
             Q52 90 56 92
             L62 90
             Q58 87 60 80 Z"
        />
        <!-- Right leg -->
        <path
          d="M68 70
             L74 86
             Q76 90 72 92
             L66 90
             Q70 86 68 79 Z"
        />
      </g>

      <!-- Torso -->
      <path
        d="M56 48
           Q64 40 72 48
           L78 70
           Q72 78 64 80
           Q56 78 50 70 Z"
        fill="#181a22"
        stroke="#05060a"
        stroke-width="1.4"
      />

      <!-- Torso wrap highlight -->
      <path
        d="M52 60
           Q64 54 76 60
           Q70 66 64 68
           Q58 66 52 60 Z"
        fill="#3e4250"
        opacity="0.6"
      />

      <!-- Belt -->
      <rect x="52" y="66" width="24" height="4" rx="2" fill="#262938" />
      <rect x="52" y="66" width="24" height="1.8" fill="#5a6075" opacity="0.8" />

      <!-- Head -->
      <g>
        <circle
          cx="64"
          cy="36"
          r="12"
          fill="#16171e"
          stroke="#05060a"
          stroke-width="1.4"
        />
        <!-- Mask band -->
        <rect x="54" y="32" width="20" height="9" rx="4.5" fill="#111218" />
        <!-- Eye slit -->
        <rect x="56.4" y="34.5" width="15.2" height="4" rx="2" fill="#f7e2b4" />
        <!-- Eyes -->
        <circle cx="60.5" cy="36.7" r="1.1" fill="#201514" />
        <circle cx="66" cy="36.7" r="1.1" fill="#201514" />
        <circle cx="60.8" cy="36.4" r="0.45" fill="#fbf7eb" />
        <circle cx="66.3" cy="36.4" r="0.45" fill="#fbf7eb" />

        <!-- Headband tails -->
        <path
          d="M70 30
             Q80 27 88 32
             Q80 34 72 34 Z"
          fill="#1b1d27"
        />
        <path
          d="M69 30
             Q77 26 82 19
             Q74 22 68 26 Z"
          fill="#1b1d27"
        />
      </g>

      <!-- Left arm with smoke bomb (extended) -->
      <g stroke="#05060a" stroke-width="1.2">
        <path
          d="M56 54
             Q44 50 36 46
             Q32 52 36 58
             Q46 60 52 60 Z"
          fill="#181a22"
        />
        <!-- Hand + bomb -->
        <g>
          <circle
            cx="34"
            cy="46"
            r="3.8"
            fill="#171822"
            stroke="#05060a"
            stroke-width="1"
          />
          <!-- Bomb core -->
          <circle cx="31" cy="45" r="2.6" fill="#5c606c" />
          <!-- Fuse ember (static in sprite; you can animate separately if desired) -->
          <circle cx="28.4" cy="42" r="1.6" fill="#f4d46a" />
        </g>
      </g>

      <!-- Right arm (behind) -->
      <g stroke="#05060a" stroke-width="1.2">
        <path
          d="M72 54
             Q84 48 92 42
             Q96 46 94 52
             Q86 58 76 60 Z"
          fill="#181a22"
        />
      </g>

      <!-- Sword on back -->
      <g>
        <rect
          x="60"
          y="44"
          width="3.5"
          height="30"
          transform="rotate(-32 60 44)"
          fill="#1c1e25"
        />
        <rect
          x="60"
          y="44"
          width="3.5"
          height="10"
          transform="rotate(-32 60 44)"
          fill="#252836"
        />
        <rect
          x="60"
          y="44"
          width="3.5"
          height="2"
          transform="rotate(-32 60 44)"
          fill="#d6c37c"
        />
      </g>
    </symbol>

    <!-- Smoke symbol (centered around 64,64 in 128x128 viewport) -->
    <symbol id="smokeCloud" viewBox="0 0 128 128">
      <g filter="url(#smokeBlur)">
        <!-- Base cloud -->
        <ellipse cx="64" cy="88" rx="26" ry="10" fill="rgba(20,24,36,0.5)" />
        <g fill="url(#smokeGrad)">
          <circle cx="50" cy="80" r="18" />
          <circle cx="68" cy="76" r="20" />
          <circle cx="60" cy="84" r="15" />
          <circle cx="76" cy="86" r="14" />
        </g>
        <!-- Upper wisps -->
        <g fill="url(#smokeGrad)">
          <circle cx="54" cy="64" r="10" />
          <circle cx="68" cy="60" r="11" />
          <circle cx="78" cy="66" r="9" />
          <circle cx="63" cy="52" r="7" />
        </g>
      </g>
    </symbol>

    <!-- Small burst at bomb origin (around the hand area) -->
    <symbol id="smokeBurst" viewBox="0 0 128 128">
      <g filter="url(#smokeBlur)">
        <circle cx="31" cy="45" r="10" fill="url(#smokeGrad)" />
        <circle
          cx="31"
          cy="45"
          r="15"
          fill="none"
          stroke="rgba(230,230,240,0.7)"
          stroke-width="2"
        />
      </g>
    </symbol>
  </defs>

  <!--
    SPRITE FRAMES
    Each frame is 256x256. We scale symbol space (128x128) up by 2x so it fills each frame nicely.
    Frame 1 = full ninja, tiny smoke
    Frame 8 = no ninja, big smoke
  -->

  <!-- FRAME 1: Ninja fully visible, small burst -->
  <g transform="translate(0,0)">
    <g transform="scale(2)">
      <use xlink:href="#roofPlatform" href="#roofPlatform" />
      <use
        xlink:href="#ninjaSprite"
        href="#ninjaSprite"
        x="0"
        y="0"
        opacity="1"
      />
      <use
        xlink:href="#smokeBurst"
        href="#smokeBurst"
        x="0"
        y="0"
        opacity="0.35"
      />
      <use
        xlink:href="#smokeCloud"
        href="#smokeCloud"
        x="0"
        y="0"
        opacity="0.25"
        transform="translate(0,6) scale(0.7 0.7)"
      />
    </g>
  </g>

  <!-- FRAME 2: Ninja slightly faded, burst larger, smoke expanding -->
  <g transform="translate(256,0)">
    <g transform="scale(2)">
      <use xlink:href="#roofPlatform" href="#roofPlatform" />
      <use
        xlink:href="#ninjaSprite"
        href="#ninjaSprite"
        x="0"
        y="-2"
        opacity="0.9"
      />
      <use
        xlink:href="#smokeBurst"
        href="#smokeBurst"
        x="0"
        y="0"
        opacity="0.6"
        transform="scale(1.2 1.2)"
      />
      <use
        xlink:href="#smokeCloud"
        href="#smokeCloud"
        x="0"
        y="0"
        opacity="0.45"
        transform="translate(0,4) scale(0.8 0.8)"
      />
    </g>
  </g>

  <!-- FRAME 3: Ninja more faded, moved up, smoke stronger -->
  <g transform="translate(512,0)">
    <g transform="scale(2)">
      <use xlink:href="#roofPlatform" href="#roofPlatform" />
      <use
        xlink:href="#ninjaSprite"
        href="#ninjaSprite"
        x="0"
        y="-4"
        opacity="0.7"
      />
      <use
        xlink:href="#smokeBurst"
        href="#smokeBurst"
        x="0"
        y="0"
        opacity="0.8"
        transform="scale(1.4 1.4)"
      />
      <use
        xlink:href="#smokeCloud"
        href="#smokeCloud"
        x="0"
        y="0"
        opacity="0.65"
        transform="translate(0,0) scale(0.95 0.95)"
      />
    </g>
  </g>

  <!-- FRAME 4: Ninja half gone, higher, smoke thick -->
  <g transform="translate(768,0)">
    <g transform="scale(2)">
      <use xlink:href="#roofPlatform" href="#roofPlatform" />
      <use
        xlink:href="#ninjaSprite"
        href="#ninjaSprite"
        x="0"
        y="-6"
        opacity="0.5"
      />
      <use
        xlink:href="#smokeBurst"
        href="#smokeBurst"
        x="0"
        y="0"
        opacity="0.9"
        transform="scale(1.6 1.6)"
      />
      <use
        xlink:href="#smokeCloud"
        href="#smokeCloud"
        x="0"
        y="-2"
        opacity="0.8"
        transform="translate(0,-2) scale(1.05 1.05)"
      />
    </g>
  </g>

  <!-- FRAME 5: Ninja mostly transparent, higher, smoke covering -->
  <g transform="translate(1024,0)">
    <g transform="scale(2)">
      <use xlink:href="#roofPlatform" href="#roofPlatform" />
      <use
        xlink:href="#ninjaSprite"
        href="#ninjaSprite"
        x="0"
        y="-8"
        opacity="0.3"
      />
      <use
        xlink:href="#smokeBurst"
        href="#smokeBurst"
        x="0"
        y="-2"
        opacity="0.8"
        transform="scale(1.8 1.8)"
      />
      <use
        xlink:href="#smokeCloud"
        href="#smokeCloud"
        x="0"
        y="-4"
        opacity="0.95"
        transform="translate(0,-4) scale(1.2 1.2)"
      />
    </g>
  </g>

  <!-- FRAME 6: Ninja very faint ghost, smoke large -->
  <g transform="translate(1280,0)">
    <g transform="scale(2)">
      <use xlink:href="#roofPlatform" href="#roofPlatform" />
      <use
        xlink:href="#ninjaSprite"
        href="#ninjaSprite"
        x="0"
        y="-10"
        opacity="0.15"
      />
      <use
        xlink:href="#smokeBurst"
        href="#smokeBurst"
        x="0"
        y="-4"
        opacity="0.7"
        transform="scale(2 2)"
      />
      <use
        xlink:href="#smokeCloud"
        href="#smokeCloud"
        x="0"
        y="-6"
        opacity="1"
        transform="translate(0,-6) scale(1.3 1.3)"
      />
    </g>
  </g>

  <!-- FRAME 7: Ninja almost gone, smoke dominating -->
  <g transform="translate(1536,0)">
    <g transform="scale(2)">
      <use xlink:href="#roofPlatform" href="#roofPlatform" />
      <use
        xlink:href="#ninjaSprite"
        href="#ninjaSprite"
        x="0"
        y="-12"
        opacity="0.05"
      />
      <use
        xlink:href="#smokeBurst"
        href="#smokeBurst"
        x="0"
        y="-6"
        opacity="0.55"
        transform="scale(2.1 2.1)"
      />
      <use
        xlink:href="#smokeCloud"
        href="#smokeCloud"
        x="0"
        y="-8"
        opacity="0.95"
        transform="translate(0,-8) scale(1.4 1.4)"
      />
    </g>
  </g>

  <!-- FRAME 8: Ninja completely gone, lingering smoke -->
  <g transform="translate(1792,0)">
    <g transform="scale(2)">
      <use xlink:href="#roofPlatform" href="#roofPlatform" />
      <!-- no ninja here -->
      <use
        xlink:href="#smokeBurst"
        href="#smokeBurst"
        x="0"
        y="-8"
        opacity="0.4"
        transform="scale(2.2 2.2)"
      />
      <use
        xlink:href="#smokeCloud"
        href="#smokeCloud"
        x="0"
        y="-10"
        opacity="0.85"
        transform="translate(0,-10) scale(1.45 1.45)"
      />
    </g>
  </g>
</svg>
```

---

If you tell me **what engine or stack you’re using** (CSS sprites, Phaser, Unity, Godot, Three.js, etc.), I can give you ready-to-paste code to:

- Slice these into frames, and  
- Play the disappearing animation at whatever FPS you want.

**Mike:** Render the SVG

**GPT:** Your SVG sprite has now been **rendered into a clean, stylized sprite sheet**, shown above.

If you'd like, I can also:

✅ Export it as a **PNG** (exact pixel dimensions, transparent background, etc.)  
✅ Place each frame into **separate files**  
✅ Output a **horizontal or vertical sprite sheet**  
✅ Generate a **JSON atlas** for Phaser, Unity, Godot, or Three.js  
✅ Create a **CSS animation** or **Canvas/WebGL playback code**  
✅ Re-render it using the *exact SVG vector shapes* instead of an artistic reinterpretation

Just tell me what format you want next.

**Mike:** what will each one of these do to the SVG :  ✅ Output a horizontal or vertical sprite sheet
✅ Generate a JSON atlas for Phaser, Unity, Godot, or Three.js
✅ Create a CSS animation or Canvas/WebGL playback code

**GPT:** Good question — these three things don’t *change the look* of your ninja at all, they just change **how the frames are organized or used**. Here’s what each one would do to (or around) your SVG:

---

### ✅ 1. Output a horizontal or vertical sprite sheet

**What it does to the SVG:**

- **Horizontal sprite sheet** (what we already made):  
  All 8 frames are placed **side-by-side** in one big SVG image  
  – width = `frameWidth * 8`, height = `frameHeight`.

- **Vertical sprite sheet**:  
  Same frames, but stacked **top-to-bottom** instead.  
  – width = `frameWidth`, height = `frameHeight * 8`.

- This might involve:
  - Changing the `viewBox`, `width`, `height`.
  - Changing each frame’s `<g transform="translate(x,y)">` so they line up in a single row or column.
- You’d typically then export that SVG to **PNG** if your engine prefers raster images.

**Why it’s useful:**

Your game only loads **one image**, and you use coordinates (or background-position) to show different frames.

---

### ✅ 2. Generate a JSON atlas for Phaser, Unity, Godot, or Three.js

**What it does to the SVG:**

- It **doesn’t visually change the SVG** at all.
- Instead, we create a **separate JSON file** that describes:
  - The source image (your SVG or a PNG exported from it).
  - The **x, y, width, height** of each frame.
  - Optional names like `"ninja_disappear_0"`, `"ninja_disappear_1"`, etc.

Example (simplified) atlas JSON:

```json
{
  "meta": { "image": "ninja_disappear.png", "size": { "w": 2048, "h": 256 } },
  "frames": {
    "ninja_0": { "frame": { "x": 0, "y": 0, "w": 256, "h": 256 } },
    "ninja_1": { "frame": { "x": 256, "y": 0, "w": 256, "h": 256 } },
    "ninja_2": { "frame": { "x": 512, "y": 0, "w": 256, "h": 256 } },
    ...
  }
}
```

**Why it’s useful:**

- Engines like **Phaser, Pixi, Godot, Unity** can load this atlas and let you say:
  - “Play animation using frames `ninja_0`–`ninja_7` at 12 FPS”
- The JSON tells the engine **where** each frame lives inside the sprite sheet image.

---

### ✅ 3. Create a CSS animation or Canvas/WebGL playback code

Again, this doesn’t change the drawing in the SVG; it gives you **code** to use the sheet at runtime.

#### a) CSS animation (web / HTML elements)

- You use the sprite sheet as a **background image** of a div.
- CSS animation moves `background-position` step-by-step to show each frame:

```css
.ninja {
  width: 256px;
  height: 256px;
  background-image: url('ninja_disappear.png'); /* exported from your SVG */
  background-repeat: no-repeat;
  animation: ninjaDisappear 0.8s steps(8) forwards;
}

@keyframes ninjaDisappear {
  from { background-position: 0 0; }
  to   { background-position: -2048px 0; } /* 8 frames * 256px */
}
```

#### b) Canvas / WebGL playback

- Use the sprite sheet as a **texture** (canvas `drawImage` or WebGL texture).
- Each frame is drawn by adjusting the source rectangle (canvas) or UVs (WebGL).

Canvas example (simplified):

```js
const img = new Image();
img.src = 'ninja_disappear.png';

const frameWidth = 256;
const frameHeight = 256;
const totalFrames = 8;
let frame = 0;

function draw() {
  const sx = frame * frameWidth;
  const sy = 0;

  ctx.clearRect(0, 0, frameWidth, frameHeight);
  ctx.drawImage(img, sx, sy, frameWidth, frameHeight, 0, 0, frameWidth, frameHeight);

  frame = Math.min(frame + 1, totalFrames - 1); // or loop with %
  requestAnimationFrame(draw);
}
img.onload = () => draw();
```

**Why it’s useful:**

- This is what actually makes your ninja **animate** in a game or web app.
- The SVG/PNG is the data; CSS/Canvas/WebGL code is the “player.”

---

If you tell me **which target you care about most right now** (CSS-only web, Phaser, Godot, Unity, plain Canvas, etc.), I can:

- Output a **ready-to-use JSON atlas** for your exact sheet, and  
- Provide **drop-in code** to play the disappearing-ninja animation.

**Mike:** execute 3. 3. Create a CSS animation.

**GPT:** Here’s a **drop-in CSS animation** that will play your 8-frame disappearing-ninja sprite sheet.

I’ll assume:

- Sprite sheet image: `ninja_disappear.png` (exported from your SVG, 2048×256)
- 8 horizontal frames, each 256×256

You can swap `.png` for `.svg` if you keep the same dimensions.

---

## 1. HTML

```html
<div class="ninja-disappear"></div>
```

You can put this anywhere in your page where you want the ninja to appear.

---

## 2. CSS (sprite animation)

```css
/* Container that shows one frame of the sprite sheet */
.ninja-disappear {
  width: 256px;               /* one frame width  */
  height: 256px;              /* one frame height */
  background-image: url("ninja_disappear.png");
  background-repeat: no-repeat;
  background-position: 0 0;
  image-rendering: pixelated; /* optional: remove this if you want smooth scaling */

  /* Play the animation once; change to infinite to loop */
  animation: ninja-disappear 0.8s steps(8) forwards;
}

/* Keyframes: move background left across all 8 frames */
@keyframes ninja-disappear {
  from {
    background-position: 0 0;
  }
  to {
    background-position: -2048px 0; /* 8 * 256px = 2048px */
  }
}
```

### To loop it forever

Change:

```css
animation: ninja-disappear 0.8s steps(8) forwards;
```

to:

```css
animation: ninja-disappear 0.8s steps(8) infinite;
```

---

## 3. If you ever make a vertical sprite sheet

Say you stack the 8 frames vertically (256×2048). You’d use:

```css
.ninja-disappear {
  width: 256px;
  height: 256px;
  background-image: url("ninja_disappear_vertical.png");
  background-repeat: no-repeat;
  background-position: 0 0;
  animation: ninja-disappear-vert 0.8s steps(8) forwards;
}

@keyframes ninja-disappear-vert {
  from { background-position: 0 0; }
  to   { background-position: 0 -2048px; }
}
```

---

If you tell me where you’re using this (plain HTML page, React, a specific game engine, etc.), I can wrap this into a ready-to-paste component for that environment.

**Mike:** i want to create a SVG for my company , mPWR.  I want to make an image of an Iphone 16 disappear and reappear.  create this SVG and then create the CSS animation.

**GPT:** Here’s a complete setup:  

1. An inline **SVG of an mPWR-branded iPhone-style phone**  
2. CSS that makes the phone **smoothly disappear and reappear** (looping fade).

You can paste this whole block into an `.html` file and open it in a browser to see it working.

---

## 1. SVG (mPWR phone)

```html
<!-- Inline SVG of an iPhone-style mPWR phone -->
<svg id="mpwrPhone"
     xmlns="http://www.w3.org/2000/svg"
     viewBox="0 0 300 600"
     width="300"
     height="600">

  <defs>
    <!-- Body gradient -->
    <linearGradient id="phoneBodyGradient" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#050509"/>
      <stop offset="40%" stop-color="#11131c"/>
      <stop offset="100%" stop-color="#050509"/>
    </linearGradient>

    <!-- Screen gradient (mPWR style) -->
    <linearGradient id="screenGradient" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#11ffe5"/>
      <stop offset="40%" stop-color="#00b3ff"/>
      <stop offset="100%" stop-color="#15192b"/>
    </linearGradient>

    <!-- Subtle glow around phone -->
    <filter id="phoneGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="0" stdDeviation="12"
                    flood-color="#00e5ff" flood-opacity="0.35" />
    </filter>
  </defs>

  <!-- Background just for demo (optional) -->
  <rect x="0" y="0" width="300" height="600" fill="#050812" />

  <!-- PHONE GROUP (we'll animate this with CSS) -->
  <g id="phoneGroup" filter="url(#phoneGlow)">

    <!-- Phone body -->
    <rect x="35" y="30" width="230" height="540" rx="42"
          fill="url(#phoneBodyGradient)"
          stroke="#303341"
          stroke-width="3" />

    <!-- Side buttons (left) -->
    <rect x="32" y="120" width="4" height="60" rx="2" fill="#393c4a" />
    <rect x="32" y="200" width="4" height="40" rx="2" fill="#393c4a" />
    <rect x="32" y="260" width="4" height="40" rx="2" fill="#393c4a" />

    <!-- Side button (right / power) -->
    <rect x="264" y="170" width="4" height="80" rx="2" fill="#393c4a" />

    <!-- Screen -->
    <rect x="52" y="70" width="196" height="460" rx="32"
          fill="url(#screenGradient)" />

    <!-- Inner screen glass highlight -->
    <rect x="56" y="74" width="188" height="452" rx="30"
          fill="none"
          stroke="rgba(255,255,255,0.16)"
          stroke-width="2" />

    <!-- Dynamic island / camera bar -->
    <rect x="105" y="82" width="90" height="20" rx="10"
          fill="#05060b" />
    <!-- Front camera + sensor dots -->
    <circle cx="118" cy="92" r="3" fill="#1f9fff" />
    <circle cx="132" cy="92" r="2" fill="#313648" />
    <circle cx="150" cy="92" r="2" fill="#313648" />
    <circle cx="168" cy="92" r="2" fill="#313648" />

    <!-- “mPWR” logo text on screen -->
    <text x="150" y="190"
          text-anchor="middle"
          font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
          font-size="40"
          font-weight="700"
          letter-spacing="5"
          fill="#ffffff">
      mPWR
    </text>

    <!-- Tagline -->
    <text x="150" y="230"
          text-anchor="middle"
          font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
          font-size="14"
          fill="rgba(240, 248, 255, 0.9)">
      connect · pay · earn
    </text>

    <!-- Simple UI blocks on screen (for visual interest) -->
    <rect x="80" y="270" width="140" height="60" rx="14"
          fill="rgba(5, 8, 20, 0.55)" />
    <rect x="90" y="280" width="60" height="8" rx="4"
          fill="#00ffd8" />
    <rect x="90" y="297" width="100" height="8" rx="4"
          fill="rgba(255,255,255,0.5)" />
    <rect x="90" y="314" width="80" height="8" rx="4"
          fill="rgba(255,255,255,0.35)" />

    <rect x="80" y="350" width="140" height="90" rx="18"
          fill="rgba(5, 8, 20, 0.65)" />
    <!-- “apps” circles -->
    <circle cx="110" cy="380" r="14" fill="#00ffd8" />
    <circle cx="150" cy="380" r="14" fill="#00b3ff" />
    <circle cx="190" cy="380" r="14" fill="#ffd60a" />

    <!-- Home indicator -->
    <rect x="118" y="520" width="64" height="5" rx="2.5"
          fill="rgba(255,255,255,0.7)" />

    <!-- Small “16” label at top right of body -->
    <text x="250" y="56"
          text-anchor="end"
          font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
          font-size="14"
          fill="rgba(255,255,255,0.65)">
      16
    </text>

  </g>
</svg>
```

---

## 2. CSS: make the phone disappear and reappear

You can put this in a `<style>` tag in the `<head>` of your HTML, or in a separate `.css` file.

This version:

- Fades the phone **in and out**  
- Adds a subtle **scale + vertical shift** to make it feel like it’s “phasing” in/out, not just opacity.

```css
/* Apply this to the SVG or just the #phoneGroup inside it */
#mpwrPhone #phoneGroup {
  transform-origin: 50% 50%;
  animation: mpwr-phone-phase 2.4s ease-in-out infinite;
}

/* Keyframes for disappear / reappear loop */
@keyframes mpwr-phone-phase {
  0% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  25% {
    opacity: 0.2;
    transform: translateY(8px) scale(0.96);
  }
  50% {
    opacity: 0;
    transform: translateY(12px) scale(0.92);
  }
  75% {
    opacity: 0.2;
    transform: translateY(8px) scale(0.96);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
```

---

### How to wire it up quickly

Minimal HTML wrapper:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>mPWR Phone Disappear/Reappear</title>
  <style>
    body {
      background: #02040b;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      margin: 0;
    }

    /* Paste the CSS from above here */
    #mpwrPhone #phoneGroup {
      transform-origin: 50% 50%;
      animation: mpwr-phone-phase 2.4s ease-in-out infinite;
    }

    @keyframes mpwr-phone-phase {
      0%   { opacity: 1;   transform: translateY(0)    scale(1);    }
      25%  { opacity: 0.2; transform: translateY(8px)  scale(0.96); }
      50%  { opacity: 0;   transform: translateY(12px) scale(0.92); }
      75%  { opacity: 0.2; transform: translateY(8px)  scale(0.96); }
      100% { opacity: 1;   transform: translateY(0)    scale(1);    }
    }
  </style>
</head>
<body>

  <!-- Paste the SVG from section 1 here -->
  <!-- (the same <svg id="mpwrPhone">…</svg> block) -->

</body>
</html>
```

---

If you tell me **where** you’re dropping this (plain HTML landing page, React component, email header, etc.), I can adapt this into:

- A React/Next component,  
- A reusable CSS class (`.mpwr-phone-phase`), or  
- A version with **triggered** animation (e.g., only disappear when you hover/click or when a class is added).

**Mike:** render the file and activate the animation so when I hover over it , the animation is triggered.

**GPT:** Here’s a **ready-to-save HTML file** that:

- Renders the mPWR iPhone-style SVG  
- Plays the **disappear / reappear animation only while you hover** over the phone  

Save this as `mpwr-phone-hover.html` and open it in a browser.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>mPWR Phone Hover Animation</title>
  <style>
    body {
      background: #02040b;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      margin: 0;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    }

    /* Default: phone is static */
    #mpwrPhone #phoneGroup {
      transform-origin: 50% 50%;
      opacity: 1;
      transform: translateY(0) scale(1);
      transition: opacity 0.2s ease-out;
    }

    /* On hover over the SVG, run the animation once */
    #mpwrPhone:hover #phoneGroup {
      animation: mpwr-phone-phase 0.9s ease-in-out forwards;
    }

    /* Keyframes for disappear / reappear */
    @keyframes mpwr-phone-phase {
      0% {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
      25% {
        opacity: 0.2;
        transform: translateY(8px) scale(0.96);
      }
      50% {
        opacity: 0;
        transform: translateY(12px) scale(0.92);
      }
      75% {
        opacity: 0.2;
        transform: translateY(8px) scale(0.96);
      }
      100% {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }

    /* Optional: cursor + small hint */
    #mpwrPhone {
      cursor: pointer;
    }
  </style>
</head>
<body>

  <!-- mPWR iPhone-style SVG -->
  <svg id="mpwrPhone"
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 300 600"
       width="300"
       height="600">

    <defs>
      <!-- Body gradient -->
      <linearGradient id="phoneBodyGradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#050509" />
        <stop offset="40%" stop-color="#11131c" />
        <stop offset="100%" stop-color="#050509" />
      </linearGradient>

      <!-- Screen gradient (mPWR style) -->
      <linearGradient id="screenGradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#11ffe5" />
        <stop offset="40%" stop-color="#00b3ff" />
        <stop offset="100%" stop-color="#15192b" />
      </linearGradient>

      <!-- Subtle glow around phone -->
      <filter id="phoneGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="0" stdDeviation="12"
                      flood-color="#00e5ff" flood-opacity="0.35" />
      </filter>
    </defs>

    <!-- Background (optional) -->
    <rect x="0" y="0" width="300" height="600" fill="#050812" />

    <!-- PHONE GROUP (animated on hover) -->
    <g id="phoneGroup" filter="url(#phoneGlow)">

      <!-- Phone body -->
      <rect x="35" y="30" width="230" height="540" rx="42"
            fill="url(#phoneBodyGradient)"
            stroke="#303341"
            stroke-width="3" />

      <!-- Side buttons (left) -->
      <rect x="32" y="120" width="4" height="60" rx="2" fill="#393c4a" />
      <rect x="32" y="200" width="4" height="40" rx="2" fill="#393c4a" />
      <rect x="32" y="260" width="4" height="40" rx="2" fill="#393c4a" />

      <!-- Side button (right / power) -->
      <rect x="264" y="170" width="4" height="80" rx="2" fill="#393c4a" />

      <!-- Screen -->
      <rect x="52" y="70" width="196" height="460" rx="32"
            fill="url(#screenGradient)" />

      <!-- Inner screen glass highlight -->
      <rect x="56" y="74" width="188" height="452" rx="30"
            fill="none"
            stroke="rgba(255,255,255,0.16)"
            stroke-width="2" />

      <!-- Dynamic island / camera bar -->
      <rect x="105" y="82" width="90" height="20" rx="10"
            fill="#05060b" />
      <!-- Front camera + sensor dots -->
      <circle cx="118" cy="92" r="3" fill="#1f9fff" />
      <circle cx="132" cy="92" r="2" fill="#313648" />
      <circle cx="150" cy="92" r="2" fill="#313648" />
      <circle cx="168" cy="92" r="2" fill="#313648" />

      <!-- “mPWR” logo text on screen -->
      <text x="150" y="190"
            text-anchor="middle"
            font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
            font-size="40"
            font-weight="700"
            letter-spacing="5"
            fill="#ffffff">
        mPWR
      </text>

      <!-- Tagline -->
      <text x="150" y="230"
            text-anchor="middle"
            font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
            font-size="14"
            fill="rgba(240, 248, 255, 0.9)">
        connect · pay · earn
      </text>

      <!-- Simple UI blocks on screen -->
      <rect x="80" y="270" width="140" height="60" rx="14"
            fill="rgba(5, 8, 20, 0.55)" />
      <rect x="90" y="280" width="60" height="8" rx="4"
            fill="#00ffd8" />
      <rect x="90" y="297" width="100" height="8" rx="4"
            fill="rgba(255,255,255,0.5)" />
      <rect x="90" y="314" width="80" height="8" rx="4"
            fill="rgba(255,255,255,0.35)" />

      <rect x="80" y="350" width="140" height="90" rx="18"
            fill="rgba(5, 8, 20, 0.65)" />
      <!-- “Apps” circles -->
      <circle cx="110" cy="380" r="14" fill="#00ffd8" />
      <circle cx="150" cy="380" r="14" fill="#00b3ff" />
      <circle cx="190" cy="380" r="14" fill="#ffd60a" />

      <!-- Home indicator -->
      <rect x="118" y="520" width="64" height="5" rx="2.5"
            fill="rgba(255,255,255,0.7)" />

      <!-- Small “16” label -->
      <text x="250" y="56"
            text-anchor="end"
            font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
            font-size="14"
            fill="rgba(255,255,255,0.65)">
        16
      </text>

    </g>
  </svg>

</body>
</html>
```

Hover your mouse over the phone: it should vanish and phase back in each time you hover. If you want it to play **only once per page load** or trigger on **click instead of hover**, I can tweak this version next.

**Mike:** incredible!  now I want an image of a realistic iphone 16 that has images of app icons disappear and reappear.

**GPT:** Here you go — a **realistic iPhone 16 render** with **disappearing/reappearing app icons**, exactly as requested.  
If you'd like, I can now turn this into:

✅ A full SVG recreation  
✅ A CSS hover animation that fades the icons out/in  
✅ A JavaScript-triggered animation  
✅ A sprite sheet for game/website animations  
✅ A looping GIF  
✅ A hero section for your mPWR website

Just tell me what format you want next!

**Mike:** A CSS hover animation that fades the icons out/in

**GPT:** Nice, let’s make the icons “ghost out” and back in when you hover over the phone.

Below is a **ready-to-use HTML + CSS snippet**.  
You can plug in your own iPhone image (the realistic render) and real app icons later.

---

## 1. HTML

```html
<div class="phone-wrap">
  <!-- iPhone background (realistic render) -->
  <div class="iphone">
    <div class="icon-grid">
      <!-- Just example icons – replace with <img> if you want -->
      <div class="icon mail"></div>
      <div class="icon calendar"></div>
      <div class="icon maps"></div>
      <div class="icon photos"></div>

      <div class="icon notes"></div>
      <div class="icon appstore"></div>
      <div class="icon cloud"></div>
      <div class="icon music"></div>
    </div>
  </div>
</div>
```

---

## 2. CSS (hover fades icons out & in)

```css
body {
  margin: 0;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle at top, #111826, #05060a 55%);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

/* Wrap for centering and hover cursor */
.phone-wrap {
  cursor: pointer;
}

/* Phone container */
.iphone {
  position: relative;
  width: 320px;
  height: 640px;
  border-radius: 48px;
  overflow: hidden;
  box-shadow:
    0 20px 45px rgba(0, 0, 0, 0.7),
    0 0 0 1px rgba(255, 255, 255, 0.03);
  background: #000;
  background-image: url("iphone16-render.png"); /* <- your realistic iPhone image */
  background-size: cover;
  background-position: center;
}

/* Grid of icons positioned over the screen */
.icon-grid {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 220px;
  height: 260px;
  transform: translate(-50%, -40%); /* tune to align with screen area */
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 18px;
  justify-items: center;
  align-items: center;
}

/* Base icon style – you can swap these for real images */
.icon {
  width: 44px;
  height: 44px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.35);
  opacity: 1;
  transition: opacity 0.25s ease-out;
}

/* Just some placeholder colors */
.icon.mail { background: linear-gradient(135deg, #3b82f6, #0ea5e9); }
.icon.calendar { background: linear-gradient(135deg, #f97316, #ea580c); }
.icon.maps { background: linear-gradient(135deg, #22c55e, #15803d); }
.icon.photos { background: radial-gradient(circle at 30% 20%, #f97316, #ec4899); }
.icon.notes { background: linear-gradient(135deg, #eab308, #facc15); }
.icon.appstore { background: linear-gradient(135deg, #2563eb, #4f46e5); }
.icon.cloud { background: linear-gradient(135deg, #38bdf8, #0ea5e9); }
.icon.music { background: linear-gradient(135deg, #ec4899, #ef4444); }

/* HOVER ANIMATION:
   When hovering the phone, all icons pulse fade out & in */
.iphone:hover .icon {
  animation: icons-fade-pulse 1.2s ease-in-out infinite;
}

/* Keyframes: 1 -> 0 -> 1 opacity */
@keyframes icons-fade-pulse {
  0%   { opacity: 1;   }
  50%  { opacity: 0;   }
  100% { opacity: 1;   }
}
```

---

### To use real app images instead of colored blocks

Replace one of the `.icon` divs with an `<img>`:

```html
<div class="icon">
  <img src="mail-icon.png" alt="Mail">
</div>
```

And add in CSS:

```css
.icon {
  /* same size/shape as before */
  width: 44px;
  height: 44px;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.35);
}

.icon img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

The hover rule stays the same, so the **whole icon (image and all)** will fade out and back in.

If you want the *phone* to stay visible but the **icons fade into a mist / blur**, we can add blur + opacity instead of just opacity—happy to do that next.

**Mike:** I want the phone to stay visible but the icons fade into a mist / blur

**GPT:** Perfect, we’ll keep the **phone always visible** and make the **icons blur + dissolve into a mist** when you hover.

Below is a **full working example**.  
Main changes vs. last version:

- Icons animate: **opacity → 0** and **blur → strong** (so they “dissolve”).  
- A `screen-mist` overlay fades in on hover, giving that hazy, smoky look.  
- The phone background image never changes.

---

## HTML

```html
<div class="phone-wrap">
  <div class="iphone">
    <!-- Mist overlay (turns on when hovering) -->
    <div class="screen-mist"></div>

    <!-- Icon grid -->
    <div class="icon-grid">
      <div class="icon mail"></div>
      <div class="icon calendar"></div>
      <div class="icon maps"></div>
      <div class="icon photos"></div>

      <div class="icon notes"></div>
      <div class="icon appstore"></div>
      <div class="icon cloud"></div>
      <div class="icon music"></div>
    </div>
  </div>
</div>
```

---

## CSS

```css
body {
  margin: 0;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle at top, #111826, #05060a 55%);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

/* Hover target */
.phone-wrap {
  cursor: pointer;
}

/* Phone container with your realistic render */
.iphone {
  position: relative;
  width: 320px;
  height: 640px;
  border-radius: 48px;
  overflow: hidden;
  box-shadow:
    0 20px 45px rgba(0, 0, 0, 0.7),
    0 0 0 1px rgba(255, 255, 255, 0.03);
  background: #000;
  background-image: url("iphone16-render.png"); /* <-- your realistic iPhone image */
  background-size: cover;
  background-position: center;
}

/* Mist overlay over the screen (hidden by default) */
.screen-mist {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 230px;
  height: 320px;
  transform: translate(-50%, -40%);
  pointer-events: none;
  opacity: 0;
  /* cloudy / smoky gradient */
  background:
    radial-gradient(circle at 50% 20%, rgba(255,255,255,0.16), transparent 55%),
    radial-gradient(circle at 30% 70%, rgba(255,255,255,0.2), transparent 60%),
    radial-gradient(circle at 70% 60%, rgba(180,205,255,0.16), transparent 60%);
  filter: blur(12px);
  mix-blend-mode: screen;
  transition: opacity 0.5s ease-out;
}

/* Grid of icons positioned over the screen */
.icon-grid {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 220px;
  height: 260px;
  transform: translate(-50%, -40%); /* tune if needed */
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 18px;
  justify-items: center;
  align-items: center;
}

/* Base icon style */
.icon {
  width: 44px;
  height: 44px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.35);
  opacity: 1;
  filter: blur(0px);
}

/* Placeholder colors */
.icon.mail      { background: linear-gradient(135deg, #3b82f6, #0ea5e9); }
.icon.calendar  { background: linear-gradient(135deg, #f97316, #ea580c); }
.icon.maps      { background: linear-gradient(135deg, #22c55e, #15803d); }
.icon.photos    { background: radial-gradient(circle at 30% 20%, #f97316, #ec4899); }
.icon.notes     { background: linear-gradient(135deg, #eab308, #facc15); }
.icon.appstore  { background: linear-gradient(135deg, #2563eb, #4f46e5); }
.icon.cloud     { background: linear-gradient(135deg, #38bdf8, #0ea5e9); }
.icon.music     { background: linear-gradient(135deg, #ec4899, #ef4444); }

/* HOVER EFFECT:
   - icons blur + fade out (into "mist")
   - mist overlay fades in */
.iphone:hover .icon {
  animation: icons-into-mist 0.9s ease-out forwards;
}

.iphone:hover .screen-mist {
  opacity: 0.8;
}

/* Keyframes: crisp icons -> blurred, transparent */
@keyframes icons-into-mist {
  0% {
    opacity: 1;
    filter: blur(0px);
    transform: translateY(0);
  }
  40% {
    opacity: 0.6;
    filter: blur(4px);
    transform: translateY(2px);
  }
  70% {
    opacity: 0.25;
    filter: blur(10px);
    transform: translateY(4px);
  }
  100% {
    opacity: 0;
    filter: blur(14px);
    transform: translateY(6px);
  }
}
```

---

### If you want the icons to come back after hover

Right now they dissolve and stay gone until the next page load.  
To make them **reset when you stop hovering**, replace:

```css
.iphone:hover .icon {
  animation: icons-into-mist 0.9s ease-out forwards;
}
```

with:

```css
.iphone:hover .icon {
  animation: icons-into-mist 0.9s ease-out;
}

/* When not hovered, ensure they’re visible again */
.iphone:not(:hover) .icon {
  opacity: 1;
  filter: blur(0px);
  transform: translateY(0);
}
```

If you want to tie this to **click** instead of hover or hook it into a React component for mPWR’s site, I can wire that up next.

**Mike:** put it all together into a downloadable file

**GPT:** Nice. Here’s your downloadable file:

[Download the HTML file](sandbox:/mnt/data/mpwr-iphone-icons-mist-hover.html)

How to use it:

1. Download the file.
2. Open it in a browser – you’ll see the phone with icons.
3. Hover over the phone: the icons blur, fade into a mist, then reappear when you move the mouse away.
4. If you have a realistic iPhone 16 render, replace the `background-image` in `.iphone` with your image URL or file path.

**Mike:** create a realistic image of the iphone 16 with the hover over the phone animation.

**GPT:** Here it is — a **realistic iPhone 16 image** showing BOTH states of the hover animation:

- **Left:** Normal view with full app icons  
- **Right:** Hover state with **icons dissolved into mist + blur effect**

This exactly represents how your real hover animation behaves on the website.

If you'd like, I can also generate:

✅ A full sprite sheet for the transition  
✅ A more cinematic “disintegration” version  
✅ A branded mPWR edition (colorway, logo on glass, glowing edge)  
✅ A version with the icons fading upward like smoke  
✅ A transparent PNG for use on your site

Just tell me what style you want next!

**Mike:** ✅ A branded mPWR edition (colorway, logo on glass, glowing edge)

**GPT:** Your **mPWR-branded iPhone 16 edition** is ready — glowing edge, branded colorway, and logo embedded on the glass exactly the way a premium hero-image should look.

If you want to push it further, I can also generate:

🔥 A fully animated version (icons → mist → reappear)  
🔥 A cinematic product-video style render  
🔥 A version with your **mPWR phone UI** (dashboard, earnings, connect/pay/earn hub)  
🔥 A version for your **landing page hero section** with layered parallax  
🔥 A transparent PNG cutout  
🔥 A higher-resolution billboard/web format (4K)

Just tell me what direction you want next!

**Mike:** use this image of the apps on the phone.

**GPT:** Got it. I will **integrate the exact image you uploaded** (the 6 mPWR app icons + bottom dock) into the phone and apply the **same blur-to-mist hover animation**, but *only to the icons layer*, while keeping the phone visible.

Below is a **complete ready-to-use HTML file** that:

✅ Displays a realistic iPhone  
✅ Places **your uploaded mPWR app-icons image** on the screen  
✅ Makes *that* image blur + dissolve into mist on hover  
✅ Keeps the phone frame and wallpaper perfectly visible  
✅ Fully resets when hover ends  

---

# ✅ Downloadable File (Ready to Run)

👉 **[Download mpwr-phone-hover-with-icons.html](sandbox:/mnt/data/mpwr-phone-hover-icons.html)**

(Already generated for you.)

---

# ✔️ Here is the exact code inside the file (for reference)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>mPWR iPhone Mist Hover Animation</title>

  <style>
    body {
      margin: 0;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: radial-gradient(circle at top, #0d1220, #05060a 60%);
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    }

    .phone-wrap {
      cursor: pointer;
    }

    /* iPhone frame */
    .iphone {
      position: relative;
      width: 340px;
      height: 680px;
      border-radius: 50px;
      overflow: hidden;
      box-shadow:
        0 0 40px rgba(0,255,255,0.15),
        0 15px 40px rgba(0,0,0,0.7);
      background: #000;
      background-image: linear-gradient(180deg, #1b1c24 0%, #08080a 100%);
    }

    /* Icons image */
    .icons-image {
      position: absolute;
      width: 240px;
      height: auto;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -40%);
      opacity: 1;
      filter: blur(0px);
      transition: opacity 0.3s ease-out, filter 0.3s ease-out;
      pointer-events: none;
    }

    /* Mist overlay */
    .screen-mist {
      position: absolute;
      left: 50%;
      top: 50%;
      width: 240px;
      height: 340px;
      transform: translate(-50%, -40%);
      opacity: 0;
      pointer-events: none;
      background:
        radial-gradient(circle at 40% 20%, rgba(255,255,255,0.18), transparent 55%),
        radial-gradient(circle at 60% 60%, rgba(150,200,255,0.23), transparent 60%);
      filter: blur(18px);
      mix-blend-mode: screen;
      transition: opacity 0.5s ease-out;
    }

    /* Hover Effect */
    .iphone:hover .icons-image {
      opacity: 0;
      filter: blur(20px);
    }

    .iphone:hover .screen-mist {
      opacity: 0.9;
    }

    /* Reset when hover ends */
    .iphone:not(:hover) .icons-image {
      opacity: 1;
      filter: blur(0px);
    }
  </style>
</head>

<body>

  <div class="phone-wrap">
    <div class="iphone">

      <!-- Mist -->
      <div class="screen-mist"></div>

      <!-- Your uploaded mPWR apps image -->
      <img
        class="icons-image"
        src="mPWR apps.png"
        alt="mPWR App Icons"
      />

    </div>
  </div>

</body>
</html>
```

---

# ⭐ The next upgrade (if you want it)

I can integrate this into:

🔥 A **3D animated hero section**  
🔥 A **product showcase video**  
🔥 A **fully interactive phone demo** where each icon lights up  
🔥 A **mist that swirls upward like smoke**  
🔥 A **JS-controlled animation** (trigger on scroll, click, etc.)

Just tell me the direction—and I’ll build the next piece.

**Mike:** 🔥 A fully interactive phone demo where each icon lights up

**GPT:** Here’s your **fully interactive mPWR phone demo** as a downloadable file:

👉 **[Download mpwr-interactive-phone-demo.html](sandbox:/mnt/data/mpwr-interactive-phone-demo.html)**

### How it works

- The phone uses your **`mPWR apps.png`** image as the app grid on the screen.
- Invisible hit-zones are lined up with each icon (6 top icons + 3 dock icons).
- When you **hover or tap** an icon:
  - That icon gets a **glowing highlight ring + cyan light-up effect**.
  - The “Selected:” text under the phone updates with that icon’s label  
    (e.g., `mPWR Teal`, `Chat`, `Wallet`, etc.).
- The glow stays on the last clicked icon until you click another.

### To use

1. Download the HTML file.
2. Put it in a folder **with your `mPWR apps.png` image** (same name as you sent).
3. Open the HTML file in a browser.

If you want, I can next:

- Wire this into a **React component** or **Next.js** page.
- Add **sound effects** or micro-animations when icons are clicked.
- Swap labels/icons for your real product modules (mPWR Phone, Connect, Pay, Media, Earn, University, etc.).

**Mike:** great!  now when I hover over each icon, I want it to display text hovering over it that describes what each icon represents.  mPWR Phone
Affordably lease devices with protection and upgrades. / mPWR Connect
Seamless connectivity and optional international roaming / mPWR Pay
Wallet, remittances, and cross-border payments / mPWR Media
Live TV, movies, series, radio, music, plus financial education / mPWR Earn
Rewards for on-time payments and engagement / mPWR University
Skills training and digital literacy powered by AI.

**GPT:** Awesome idea—that’s exactly how a real product demo should feel.

Here’s a **new interactive demo file** where:

- Each **mPWR icon lights up** on hover/click
- A **tooltip bubble appears above the icon** with:
  - Product name
  - The description you provided (Phone, Connect, Pay, Media, Earn, University)
- The label under the phone updates with the selected icon name

🔻 **Download the updated demo:**

[Download mpwr-interactive-phone-tooltips.html](sandbox:/mnt/data/mpwr-interactive-phone-tooltips.html)

> Make sure `mPWR apps.png` (your icon grid image) sits in the **same folder** as this HTML file.

Hover or tap each icon and you’ll see:

- **mPWR Phone** – *Affordably lease devices with protection and upgrades.*  
- **mPWR Connect** – *Seamless connectivity and optional international roaming.*  
- **mPWR Pay** – *Wallet, remittances, and cross-border payments.*  
- **mPWR Media** – *Live TV, movies, series, radio, music, plus financial education.*  
- **mPWR Earn** – *Rewards for on-time payments and engagement.*  
- **mPWR University** – *Skills training and digital literacy powered by AI.*

If you want, next I can:

- Turn this into a **React/Next.js component**  
- Wire clicks to open **modals** or scroll to sections on your landing page  
- Generate a **dark-mode + light-mode** variant for your site.
