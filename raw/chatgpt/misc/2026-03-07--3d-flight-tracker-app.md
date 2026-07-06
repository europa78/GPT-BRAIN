---
title: "3D Flight Tracker App"
date: 2026-03-07
cluster: "Misc / Uncategorized"
messages: 48
source: chatgpt-export conversations.json (FULL transcript)
---

# 3D Flight Tracker App

> 48 messages · 2026-03-07 · cluster: Misc / Uncategorized

**Semantic neighbors:** [[LinkedIn post creation]] · [[Discord best use cases ALBT]] · [[Lesser-Known Nonfiction Gems]] · [[Lesser-Known Nonfiction Gems#2]]

## Transcript

**Mike:** : Build a production-quality 3D flight-tracking web app using React + Vite + Three.js (react-three-fiber + drei) that visualizes live OpenSky aircraft data on a rotatable 3D Earth, with real-time plane motion, smooth interpolation, altitude-accurate positioning, and polished lighting/post-processing.

**GPT:** I’m putting together a Vite-ready React app structure with a polished 3D globe scene, live OpenSky polling, and smooth aircraft interpolation. I’m also checking the current OpenSky API details so the data layer matches how the service works today.

**GPT:** The rendering stack is straightforward; the tricky part is the data layer. OpenSky now prefers OAuth2 clients for programmatic access, so I’m shaping this as a production frontend plus a small proxy/service layer instead of hard-coding secrets into the browser.

**GPT:** The main build decision is made: I’m treating aircraft as an instanced mesh cloud instead of thousands of separate React components. That keeps the globe smooth even with a large live state set, while still allowing click selection and animated interpolation.

**GPT:** Built it as a Vite-ready React project with a 3D Earth scene, instanced aircraft rendering, region filters, search, selection HUD, smooth dead-reckoned motion between polls, and a small Node proxy so OpenSky credentials stay server-side. I structured it this way because OpenSky now recommends OAuth2 client-credentials for programmatic access, `/states/all` is rate-limited, anonymous access is limited to 10-second resolution, and authenticated users get 5-second resolution. citeturn1view1turn2view0

The package versions in `package.json` are aligned with current releases for React, Vite, React Three Fiber, drei, and three.js, and the README notes that recent Vite requires Node 20.19+ or 22.12+. citeturn3search0turn3search1turn3search2turn3search3turn4search0turn3search5turn5search0

Files:
[Download the project ZIP](sandbox:/mnt/data/opensky-flight-tracker.zip)

[Browse the project folder](sandbox:/mnt/data/opensky-flight-tracker)

I wasn’t able to run `npm install` and launch the app inside this environment, so the code is prepared carefully but not live-validated in a browser here.

**Mike:** how do I launch this project ?

**GPT:** I’m checking the project’s scripts and config so I can give you exact launch steps instead of generic Vite instructions.

**GPT:** Here’s the fastest way to launch it on your computer.

### 1) Extract the ZIP
Unzip `opensky-flight-tracker.zip` to a folder you can access easily, such as your Desktop.

### 2) Open a terminal in that folder
On Windows PowerShell, run:

```powershell
cd "C:\path\to\opensky-flight-tracker"
```

### 3) Install dependencies
```powershell
npm install
```

### 4) Create the environment file
```powershell
copy .env.example .env
```

If `copy` does not work in your shell, use:

```powershell
Copy-Item .env.example .env
```

### 5) Start the app
```powershell
npm run dev
```

That starts both:
- the React front end at `http://localhost:5173`
- the proxy/API at `http://localhost:8787`

### 6) Open it in your browser
Go to:

```text
http://localhost:5173
```

You can also check the proxy health here:

```text
http://localhost:8787/health
```

---

## Important note about live aircraft data
The app will still run without OpenSky credentials, but it will fall back to the public endpoint, which is more limited.

If you have OpenSky API credentials, put them in `.env`:

```env
OPENSKY_CLIENT_ID=your_client_id
OPENSKY_CLIENT_SECRET=your_client_secret
VITE_API_BASE_URL=
```

---

## If `npm run dev` fails
The most common reasons are:

### Node is too old
Check your version:

```powershell
node -v
npm -v
```

If needed, install a newer Node.js version, then run:

```powershell
npm install
npm run dev
```

### Port already in use
If port `5173` or `8787` is busy, stop the other app using it, then rerun `npm run dev`.

---

## Production build
When you want the optimized build:

```powershell
npm run build
npm run start:api
```

That builds the front end into `dist/`. For local preview of the built front end:

```powershell
npm run preview
```

---

## One-command recap
From inside the project folder:

```powershell
npm install
copy .env.example .env
npm run dev
```

Then open:

```text
http://localhost:5173
```

A Windows `.bat` launcher for this project would make startup even easier.
