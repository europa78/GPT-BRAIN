---
title: "Prompt engineering task"
date: 2025-09-06
cluster: "Prompt Eng / GPT Building"
messages: 86
source: chatgpt-export conversations.json (FULL transcript)
---

# Prompt engineering task

> 86 messages · 2025-09-06 · cluster: Prompt Eng / GPT Building

**Semantic neighbors:** [[Custom GPT No API]] · [[Create custom GPTs- Zoominfo]] · [[Loveable website prompts / Logo]] · [[Draft expert prompts]]

## Transcript

**Mike:** Roll prompt engineer task, write prompts when asked.

**GPT:** Understood — I’ll step into the **Prompt Engineer** role.  
Whenever you ask, I’ll draft clear, optimized, and well-structured prompts tailored to your goals (marketing, research, automation, agent mode, outreach, etc.).  

Want me to create a **general-purpose master prompt template** first (that you can adapt across different tasks), or should I wait until you give me a specific prompt request?

**Mike:** Identify musical artists in specified genres. Searching every kind of website, blog, article, white paper, anything on the internet to get the information.

**GPT:** Awesome—here’s a copy-pasteable prompt set you can use to find artists by genre across the entire web. I’m giving you a **fast one-shot prompt**, a **deep research/agent-mode prompt**, plus a **clean output schema** and **refinement add-ons**.

---

# One-Shot (fast)  
**Use this in a normal chat to get a solid first pass.**
```
Role: Web Researcher + Data Curator

Goal: Identify musical artists that match the specified genres using the open web (blogs, magazines, archives, academic PDFs, label sites, Bandcamp tags, etc.). Return a deduped, well-attributed list.

Inputs
- GENRES = [<fill in>]
- REGIONS = [<optional: e.g., Global, USA, Brazil, Japan>]
- ERA/YRS = <optional: e.g., 2015–present>
- DEPTH = <"quick" | "deep"> (default: quick)
- LIMIT_PER_GENRE = <e.g., 50>

Method
1) Expand each genre into subgenres/synonyms and common misspellings.
2) Search broadly (news, blogs, Bandcamp tags, Discogs, AllMusic, RateYourMusic, Resident Advisor, label rosters, radio playlists like KEXP/KCRW/NTS, festival lineups, local press, Wikipedia lists, academic PDFs via filetype:pdf).
3) Extract candidate artists from list-style pages and profile pages. Avoid login-gated sources.
4) Verify each artist’s genre fit with ≥2 independent sources when possible. Resolve aliases/AKAs; normalize diacritics.
5) Score: 
   - genre_confidence (0–1),
   - notability_score (0–100; releases/press/playlists/festival slots),
   - freshness_score (0–100; activity in ERA/YRS).
6) Output the top LIMIT_PER_GENRE per genre plus a long-tail list.

Deliverables
- Table + JSON using the schema below.
- For each artist include 2–5 citation URLs.

Schema (columns/fields)
artist_name, alt_names, primary_genres, subgenres, country, city_or_region, active_years, notable_releases(≤3), label_or_collective, official_site, bandcamp, soundcloud, spotify_profile, instagram, press_link, genre_confidence, notability_score, freshness_score, citations[urls]

Now run with:
GENRES = [Afrobeats, Amapiano, Boom Bap, Deep House]
REGIONS = [Global]
ERA/YRS = 2018–present
DEPTH = quick
LIMIT_PER_GENRE = 40
```

---

# Deep Research / Agent-Mode (thorough)  
**Use this when you want exhaustive coverage and strict citations.**
```
System
You are an Internet-wide Music Research Agent. Use browsing and tools. Be exhaustive, careful, and cite every claim. Prefer primary/authoritative sources. Never invent data.

Objectives
A) Build a deduped list of artists for the target GENRES with strong evidence they belong to those genres.
B) Cover mainstream, indie, legacy, and emerging acts across REGIONS and ERA/YRS.
C) Produce a clean CSV + JSON with citations and confidence scores.

Inputs (set before execution)
GENRES = [<list>]
REGIONS = [<list or 'Global'>]
ERA/YRS = <e.g., 2010–2025>
LIMIT_PER_GENRE = <e.g., 150>
MIN_EVIDENCE = 2  // min distinct sources per artist
LANGS = ["en", "es", "pt", "fr", "de", "ja", "ko"]  // expand if regional focus

Research Plan (execute sequentially)
1) Genre Expansion
   - Build subgenre/synonym map per GENRE; add local terms and transliterations.
   - Produce a “Query Pack” with search patterns (see #Query Patterns).
2) Broad Discovery
   - Crawl first 30–50 relevant results per pattern; prioritize listicles, festival rosters, radio playlists, label rosters, Bandcamp tags, Discogs lists, AllMusic genre pages, RateYourMusic lists, Resident Advisor, The Quietus, Pitchfork/NPR/FADER, regional blogs/zines, academic PDFs (filetype:pdf).
3) Candidate Extraction
   - Parse pages to extract artist names; normalize case/diacritics; capture source URL and snippet.
   - Flag probable aliases; unify via fuzzy match + “aka/also known as” cues.
4) Verification & Evidence
   - For each candidate, find ≥MIN_EVIDENCE corroborating sources tying the artist to GENRE (reviews, tag pages, interviews, release metadata).
   - Disqualify if evidence conflicts or only one weak source exists.
5) Metadata Enrichment
   - Collect: country, city, active_years, notable_releases(≤3), label/collective, official site + socials/streams (Bandcamp/SoundCloud/Spotify if publicly visible), notable press link.
6) Scoring & Ranking
   - genre_confidence: proportion & quality of genre mentions (0–1).
   - notability_score (0–100): releases, label credibility, press, festival lineups, radio plays.
   - freshness_score (0–100): release/activity within ERA/YRS.
7) Output
   - Produce:
     (a) CSV + JSON using the schema below,
     (b) “Top N per genre” ranked,
     (c) “Long tail” appendix,
     (d) A sources index (domain → count of citations).
   - Include 2–5 citations per artist.

Quality Guardrails
- No login-gated scraping. Public pages only. No unverifiable claims.
- Resolve homonyms (e.g., identical artist names) using location/label/release clues.
- Avoid playlist-only creators without evidence of original releases (unless the genre norm dictates otherwise).
- Document uncertainties in a notes field.

Schema (fields)
artist_name, alt_names, primary_genres, subgenres, region, country, city_or_region, active_years, notable_releases(≤3), label_or_collective, official_site, bandcamp, soundcloud, spotify_profile, instagram, press_link, genre_confidence(float), notability_score(int), freshness_score(int), citations[list_of_urls], notes

Query Patterns (generate variations automatically)
- "<genre> artists" OR "<genre> musicians" OR "best/new <genre> artists"
- site:bandcamp.com tag:"<genre>" OR tag:"<subgenre>"
- site:discogs.com "<genre>" "Artist"
- site:allmusic.com "<genre>" "Styles"
- site:rateyourmusic.com list "<genre>"
- site:residentadvisor.net "<genre>" artist OR label
- site:pitchfork.com OR site:npr.org/music OR site:thefader.com "<genre>"
- "festival lineup" "<genre>" <year>
- filetype:pdf "<genre>" report OR white paper OR thesis
- local languages: "<genre_local_term> artistas / artistes / artistas / アーティスト / 아티스트"
```

---

# Output Schema (ready to paste into instructions)
```
Return TWO artifacts:

1) CSV with headers:
artist_name,alt_names,primary_genres,subgenres,country,city_or_region,active_years,notable_releases,label_or_collective,official_site,bandcamp,soundcloud,spotify_profile,instagram,press_link,genre_confidence,notability_score,freshness_score,citations

2) JSON array of objects:
[
  {
    "artist_name": "",
    "alt_names": [],
    "primary_genres": [],
    "subgenres": [],
    "country": "",
    "city_or_region": "",
    "active_years": "YYYY–YYYY/Present",
    "notable_releases": [],
    "label_or_collective": "",
    "official_site": "",
    "bandcamp": "",
    "soundcloud": "",
    "spotify_profile": "",
    "instagram": "",
    "press_link": "",
    "genre_confidence": 0.0,
    "notability_score": 0,
    "freshness_score": 0,
    "citations": [],
    "notes": ""
  }
]
```

---

## Refinement Add-Ons (drop-ins)
- **Geofence:** “Only include artists with origin or activity in: <cities/regions>.”
- **Recency:** “Must have a release or press mention in <last 24 months>.”
- **Stage of career buckets:** “Tag each artist as Emerging / Mid-tier / Established with rationale.”
- **Thresholds:** “Exclude artists with genre_confidence < 0.6 or MIN_EVIDENCE < 2.”
- **Diversity lenses:** “Ensure regional balance: at least 30% from <continent/region>.”
- **Deliverable size:** “Cap Top List at N per genre; keep a Long-Tail appendix.”
- **De-dup + AKA policy:** “Merge diacritic variants and AKAs; keep canonical stage name.”

If you want, tell me your target **genres, regions, and era**, and I’ll run this framework for you—or tailor it tighter for world-music discovery.

**Mike:** Draft a version of the prompt that is a virtual crate digger .  Searching for and locating samples similar to the uploaded file.

**GPT:** Got it — let’s turn this into a **Virtual Crate Digger prompt** that takes your uploaded CSV of Madlib samples as the *seed reference crate*, then goes crate-digging across the web to locate similar samples.  

Here’s the structured prompt:

---

# 🎛 Virtual Crate Digger Prompt

```
Role: Virtual Crate Digger + Sample Researcher

Mission: Search the open web (blogs, forums, YouTube dig communities, Bandcamp, Discogs, WhoSampled, vinyl marketplace listings, obscure music blogs, academic PDFs, playlists, DJ mixes) to locate audio samples and tracks that are sonically, culturally, or historically similar to the reference set provided.

Reference Crate:
- Uploaded CSV: Madlib_WhoSampled_Extracted_Samples.csv
- Contents: metadata of sampled artists/tracks used by Madlib

Inputs
- TARGET STYLE = ["similar to Madlib samples", "jazz-funk breaks", "soul chops", "psychedelic library music", etc.]
- ERA = [1965–1985] (adjustable)
- FORMAT PRIORITY = ["vinyl LPs", "7-inch 45s", "cassette rips", "library music compilations"]
- REGION PRIORITY = ["US", "Brazil", "Nigeria", "Japan", "Europe"]

Digging Process
1. Parse the uploaded CSV → build a genre/era/label/region fingerprint of the Madlib sample pool.
2. Generate expanded queries: artist adjacency, label rosters, subgenres, crate-digger tags (“rare groove,” “deep funk,” “psych soul,” “obscure library”).
3. Crawl:
   - WhoSampled + Discogs for adjacent sample trees.
   - Bandcamp tags + Discogs lists + eBay/Discogs vinyl sales for overlooked artists.
   - DJ mixes (SoundCloud/Mixcloud/YouTube) with crate digger notes.
   - Blogs/zines (Soul Strut, Wax Poetics, Aquarium Drunkard, Now-Again, Vinyl Factory).
4. Extract candidate tracks and albums:
   - Focus on breakbeats, isolated drum hits, soulful horn stabs, obscure jazz loops.
   - Match stylistic DNA to the Madlib reference crate.
5. Verify rarity & sampling history:
   - Is it sampled by others (WhoSampled)?  
   - Is it unmined but sonically prime for sampling?
6. Output structured results with metadata.

Output Schema
- artist_name
- track_title
- album_title
- year
- label
- region/country
- genre_tags
- sample_potential (1–10)
- similarity_to_reference (0–1, cosine style match to CSV fingerprint)
- notes (e.g., “drum break at 1:42,” “lush Fender Rhodes loop,” “horn stabs”)
- citations (Discogs/WhoSampled/blog/YouTube URLs)

Deliverables
1. Curated Top 25 “High-Potential” finds (closest stylistic match).
2. Long-tail list of additional 50+ crate-diggable tracks.
3. Cross-reference tree (graph) showing which new finds connect to artists in the Madlib CSV.
4. Optional: Playlist link (Spotify/YouTube) if available.

Constraints
- Do NOT fabricate track/artist names.
- Always provide at least one citation link.
- Prefer original pressings and authentic sources over reissues.
- Flag uncertain identifications.
```

---

👉 Do you want me to **run this prompt directly on your uploaded Madlib CSV** (so I’ll start analyzing and building that genre/era fingerprint now), or do you prefer I just leave it as a template for you to execute in an Agent-Mode style workflow?

**Mike:** Will this promot be more effective in agent mode or research mode?

**GPT:** Great question. Let me break it down in terms of your **crate-digging use case**:

---

## 🔎 Research Mode (normal ChatGPT + web search)
- **Strengths**
  - I can search Discogs, Bandcamp, blogs, WhoSampled, YouTube, etc. and return structured summaries.
  - Safer if you want **clean lists** with sources and analysis, not automation.
  - Good for when you want **one-time curated answers** or inspiration.

- **Limitations**
  - Can’t maintain long multi-step crawling logic across multiple sites in one run.
  - Doesn’t “remember” across sessions unless you keep prompting.
  - Slower if you need a *very large dataset* (hundreds of entries).

---

## 🤖 Agent Mode (autonomous, workflow-based)
- **Strengths**
  - Can act like a real crate-digger bot:  
    1. Read your uploaded CSV → fingerprint style.  
    2. Launch multiple queries across Discogs, Bandcamp, WhoSampled, vinyl blogs, etc.  
    3. Deduplicate, filter, and cross-link results.  
    4. Continuously expand (“if X sampled Y, find Z in the same label/region”).  
  - Handles **multi-step recursive digging**—like you crate digging for hours.  
  - Can scale up (build JSON/CSV datasets automatically).  
  - Can output cross-reference trees and even keep digging until it hits a “depth limit.”

- **Limitations**
  - Needs careful guardrails (to avoid infinite loops or irrelevant noise).
  - Requires clear schema + stop conditions (otherwise it’ll over-scrape).
  - Sometimes slower upfront because it’s running lots of queries.

---

## 🎛 Which is Better for Your Goal?
- If you want **a few dozen solid sample-ready tracks** → **Research Mode** is enough.  
- If you want **deep crates, cross-referenced trees, hundreds of obscure finds, and automated long runs** → **Agent Mode** will be way more effective.  

Think of it like this:  
- *Research Mode* = you asking a record-store clerk for recommendations.  
- *Agent Mode* = hiring a personal digger who spends hours flipping through crates, Discogs listings, and forums for you.  

---

👉 Do you want me to **refine the prompt specifically for Agent Mode** (recursive digging, schema enforcement, stop conditions), so it runs like a proper crate-digger bot? Or keep it tuned for **Research Mode** quick runs?

**Mike:** We're fine for agent mode.

**GPT:** Perfect 👌 — since we’re going full **Agent Mode**, the prompt needs to be tuned like an autonomous workflow: recursive, schema-driven, and with guardrails so it doesn’t spin off into noise. Here’s the **Agent-Mode Crate Digger Prompt**:

---

# 🎚️ Virtual Crate Digger — Agent Mode Prompt

```
Role: Autonomous Crate Digger Agent

Mission:
Start with the uploaded CSV (Madlib_WhoSampled_Extracted_Samples.csv) as the seed “reference crate.” 
Dig recursively across the web (Discogs, WhoSampled, Bandcamp, YouTube dig channels, vinyl blogs, forums, zines, academic PDFs) to find tracks with high sampling potential and stylistic similarity.

Objectives:
1. Parse the CSV → build a “fingerprint” (genres, years, labels, regions, instrumentation, common stylistic markers).
2. Generate query packs for each fingerprint dimension:
   - Genre + year combos (“1970s Brazilian jazz funk,” “1973 library music drum break”).
   - Label adjacency (e.g., Blue Note, Strata-East, obscure Italian library labels).
   - Artist adjacency (collaborators, same rosters).
   - Region adjacency (Afrobeat Nigeria → Ghana funk, Brazilian Tropicália → MPB obscurities).
3. Crawl multi-source web targets:
   - Discogs: release lists, label catalogs, marketplace.
   - WhoSampled: sample chains, related artists.
   - Bandcamp: tags + obscure digger circles.
   - Blogs/zines: Soul Strut, Wax Poetics, Aquarium Drunkard, Vinyl Factory, Now-Again.
   - Mixcloud/SoundCloud/YouTube: crate-digger mixes, annotated tracklists.
   - Academic PDFs: ethnomusicology papers w/ discographies.
4. Extract candidates:
   - Track/album/artist names + metadata.
   - Match fingerprint similarity to reference crate.
   - Flag sample-ready traits (isolated drum break, Rhodes loop, horn stabs, vocal chops).
5. Recursive digging:
   - For each confirmed candidate, expand queries again via labelmates, era, collaborators.
   - Continue until stop conditions met.
6. Scoring:
   - similarity_score (0–1 vs. reference fingerprint).
   - sample_potential (1–10; based on loops, drums, rarity).
   - rarity_score (0–100; Discogs marketplace mentions, blog obscurity).
7. Guardrails:
   - Minimum 2 citations per candidate.
   - Stop after 200 candidates or no new high-similarity finds for 3 consecutive loops.
   - Discard unverifiable or fabricated entries.

Deliverables:
1. **Top 25 High-Potential Finds**: closest stylistic matches to Madlib’s sample pool.
2. **Extended List (50–200 tracks)**: more exploratory but relevant finds.
3. **Cross-Reference Tree**: show links between new finds and artists/labels in the seed CSV.
4. **Sources Index**: domains + counts for transparency.

Schema (JSON + CSV output):
artist_name,
track_title,
album_title,
year,
label,
region/country,
genre_tags,
sample_potential (1–10),
similarity_score (0–1),
rarity_score (0–100),
notes (e.g., “drum break @1:42,” “horn loop,” “library strings”),
citations [urls]

Constraints:
- Do not fabricate artists or tracks.
- Always provide citation links.
- Prefer obscure but verifiable finds.
- Normalize artist aliases / AKAs.
- Flag uncertainties in notes.
```

---

⚡ This setup makes the Agent act like a **real crate digger digging deeper every loop** — but with clear **stop conditions** (citations + candidate limits) so it doesn’t drift.

Do you want me to **adapt this prompt into a “ready-to-run” command block** (with your Madlib CSV already referenced) so you can drop it directly into Agent Mode and it’ll execute right away?

**Mike:** Yes

**GPT:** Got it ✅ — here’s a **ready-to-run Agent Mode command block** tailored to your uploaded Madlib CSV. Just drop this into Agent Mode and it’ll kick off the autonomous digging loop:  

---

# 🎚️ Agent Mode — Virtual Crate Digger (Madlib Seeded)

```
System Role: Autonomous Crate Digger Agent

Mission:
Use the uploaded CSV (Madlib_WhoSampled_Extracted_Samples.csv) as the seed “reference crate.” 
Perform recursive crate-digging across Discogs, WhoSampled, Bandcamp, YouTube dig channels, vinyl blogs, forums, and academic PDFs to locate sample-ready tracks with stylistic similarity.

Workflow:
1. Parse Madlib_WhoSampled_Extracted_Samples.csv → build fingerprint (genres, eras, labels, regions, instrumentation).
2. Generate query packs:
   - Genre + era: “1970s Brazilian jazz funk,” “1973 library music drum break.”
   - Label adjacency: Blue Note, Strata-East, obscure Italian library labels.
   - Artist adjacency: collaborators, rosters.
   - Region adjacency: Afrobeat → Ghana funk, Tropicália → MPB, Japanese city pop → fusion.
3. Crawl sources:
   - Discogs release lists + label catalogs.
   - WhoSampled sample chains + related artists.
   - Bandcamp tags + digger communities.
   - Blogs/zines (Soul Strut, Wax Poetics, Aquarium Drunkard, Vinyl Factory).
   - Mixcloud/SoundCloud/YouTube annotated mixes.
   - Academic PDFs with discographies.
4. Extract candidate tracks/albums:
   - Capture metadata (artist, track, album, year, label, region).
   - Flag sample traits (drum breaks, Rhodes loops, horn stabs).
5. Recursive expansion:
   - For each verified candidate, expand again by label, roster, era.
   - Continue until stop conditions met.
6. Score:
   - similarity_score (0–1 vs. reference crate).
   - sample_potential (1–10).
   - rarity_score (0–100).
7. Guardrails:
   - ≥2 citations per candidate.
   - Stop at 200 candidates or if no high-similarity finds appear in 3 consecutive loops.
   - Discard unverifiable or fabricated entries.

Deliverables:
1. Top 25 High-Potential Finds — closest stylistic matches.
2. Extended List (50–200) — exploratory but relevant.
3. Cross-Reference Tree — links between new finds and seed CSV.
4. Sources Index — domains + citation counts.

Schema (JSON + CSV):
artist_name,
track_title,
album_title,
year,
label,
region/country,
genre_tags,
sample_potential (1–10),
similarity_score (0–1),
rarity_score (0–100),
notes (e.g., “drum break @1:42,” “library strings”),
citations [urls]

Constraints:
- No fabricated artists or tracks.
- Always provide at least one working source URL per entry.
- Normalize aliases/AKAs.
- Flag uncertain identifications in notes.
```

---

⚡ This block is fully **Agent-Mode optimized**:  
- It knows where to start (your Madlib CSV).  
- It can **loop & recurse** like a true crate digger.  
- It has **stop conditions** so it doesn’t spin forever.  

Do you want me to also write a **lightweight “quick-dig” version** (fewer loops, faster run) so you can use it when you just want 20–30 fresh sample candidates without a long Agent crawl?

**Mike:** write a prompt optimized for :  scraping the site , https://www.whosampled.com/.  find the artist "MF Doom" , and scrape all the samples to the songs he produced.  pull the name of the track , the elements used to make the song (samples) and any further connections associated with it.  put the data into a csv file.

**GPT:** Awesome—here’s a **ready-to-run Agent-Mode prompt** tailored for **WhoSampled** to extract **all samples for tracks produced by “MF DOOM”** (including aliases), and export them to **CSV**. It’s built with strict guardrails (respect robots.txt / TOS, low rate limits, no logins), handles dynamic “show more” buttons, and dedupes results.

---

# 🧪 Agent Mode — WhoSampled Crate Extractor (MF DOOM Producer Credits)

```
System Role: Ethical Web Scraper + Music Data Curator

Scope & Compliance
- Target: https://www.whosampled.com/
- Purpose: Public-page research to build a CSV of samples used in tracks PRODUCED by “MF DOOM” (and aliases).
- Respect robots.txt & TOS, avoid login-gated content, no aggressive crawling. 
- Rate limiting: 1 request every 5–8 seconds, randomized. Back off on 429/5xx.

Primary Entity
- Canonical name: MF DOOM
- Aliases (expand during run): DOOM, Metal Fingers, Viktor Vaughn, King Geedorah, Zev Love X, JJ DOOM (as collaborator), Madvillain (as collaborator; only include tracks where DOOM is credited as producer/co-producer).

Data Goal
For each TRACK that MF DOOM produced/co-produced:
  - track_title
  - primary_artist (who released the track)
  - credited_producer(s) (as shown on WhoSampled page)
  - release_year (if available)
  - album_or_release (if shown)
  - sample_source_title (each element used)
  - sample_source_artist
  - sample_type (e.g., “Sampled,” “Interpolated,” “Remix,” “Cover”—as labeled)
  - sample_timing_notes (e.g., “drum break at 1:12” if listed)
  - further_connections (links to “sampled in,” “sampled by,” related chains)
  - whosampled_track_url
  - whosampled_sample_url(s) (the specific evidence page)
  - evidence_snippet (short text around the claim if present)

Deliverables
1) CSV file named: MF_DOOM_productions_samples.csv
   Headers: track_title,primary_artist,credited_producer,release_year,album_or_release,
            sample_source_title,sample_source_artist,sample_type,sample_timing_notes,
            further_connections,whosampled_track_url,whosampled_sample_url,evidence_snippet
2) JSON dump (same fields) for downstream processing.
3) Log/report of skipped pages and reasons.

High-Level Plan
A) Entry Point Discovery
   1. Search on-site for “MF DOOM” profile page(s). 
   2. Collect/verify alias pages (DOOM, Metal Fingers, Viktor Vaughn, King Geedorah, Zev Love X).
   3. From each relevant profile, locate sections for:
      - “Production Credits” / “Producer” / “Tracks produced by …”
      - If not clearly labeled, use on-site search patterns:
        - site search queries: 
          - "Produced by MF DOOM" 
          - "Production credits MF DOOM"
          - "MF DOOM" + "Produced by"
      - Also follow collaborator discographies (e.g., Madvillain, JJ DOOM) and filter tracks where DOOM is credited as producer/co-producer.

B) Track Page Collection (Producer Filter)
   1. On each candidate list page, paginate/expand (“Show more”, infinite scroll) until no more items appear.
   2. For each listed item, open the track page.
   3. On the track page, **confirm DOOM is producer/co-producer** (parse credit block).
      - If producer credit not found → skip (log reason).

C) Sample Extraction
   1. On each confirmed track page, locate the “Samples” section (and “Interpolations” / “Covers” / “Remixes” tabs as available).
   2. Expand all “Show more”/“See all” controls before parsing.
   3. For each sample row:
      - Extract source artist/title, sample type label, timing/notes, and link to the specific sample evidence page.
      - Capture available year/album/label fields from the track page.

D) Further Connections
   1. From each sample evidence page, collect links to:
      - “Sampled in” / “Sampled by” / “Covers” / “Remixes” chains directly related to the track.
   2. Save those URLs under `further_connections` (comma-separated or JSON array).

E) Normalization & Deduping
   - Normalize whitespace, capitalization, punctuation, diacritics.
   - Deduplicate identical (track_title + primary_artist + sample_source_title + sample_source_artist + sample_type).
   - Preserve aliases in producer field but prefer canonical: “MF DOOM”.

F) Error Handling
   - Retry up to 2x on transient errors with exponential backoff.
   - If a page requires login or is blocked, skip and log URL + reason.
   - If structure differs, fallback to robust text search (headings like “Samples of” / “Contains samples of”).

Extraction Hints (non-binding)
- Producer/credit blocks commonly appear near the top of the track page metadata.
- Sample lists are often under headings like: “Contains samples of,” “Sampled in,” “Cover versions,” “Remixes.”
- Buttons: text contains “Show more,” “See all.”

Stop Conditions
- No new producer-confirmed tracks found after scanning all MF DOOM & alias profiles and first 5 pages of on-site search results.
- Hard cap: 1,000 requests or 200 producer-confirmed tracks visited, whichever comes first.

Rate Limits & Politeness
- 5–8s delay between requests (randomized), 20–30s between page groups.
- Obey robots.txt. Do not bypass protections. Public pages only.

Output Steps
1. Append each parsed sample row to an in-memory table with the CSV headers.
2. After completion, write:
   - /mnt/data/MF_DOOM_productions_samples.csv
   - /mnt/data/MF_DOOM_productions_samples.json
3. Print a short run summary:
   - Producer-confirmed tracks visited
   - Total sample rows extracted
   - Skipped/blocked pages count

Validation
- Randomly sample 10 rows; verify the WhoSampled URLs load and show the same sample claim.
- Ensure every CSV row includes `whosampled_track_url` AND `whosampled_sample_url`.

Now run.
```

---

### Optional: One-click “Quick Pass” Variant (faster, fewer pages)
Use when you want a smaller, faster pull (first 50–80 samples).
```
- Limit to MF DOOM (canonical) page only; skip deep alias expansion.
- Stop after 80 sample rows or 50 producer-confirmed tracks.
- Requests: 1 every 6–8s, no group pauses.
```

If you want, I can also provide a **Python skeleton** (requests + Playwright for dynamic “show more”) that follows this prompt and writes the CSV/JSON to disk.

**Mike:** optimize it for agent mode

**GPT:** Awesome—here’s a **tight, production-grade Agent-Mode prompt** optimized specifically for **WhoSampled → MF DOOM producer samples → CSV export**. It’s schema-driven, recursive, and guardrailed for reliability and compliance.

---

# 🤖 Agent Mode — WhoSampled Extractor (MF DOOM Producer Samples → CSV)

**Paste the block below into your Agent Mode “system/instructions.”**

```
ROLE
You are an Ethical Web Scraper + Music Data Curator. Your task is to extract public information from WhoSampled to build a CSV of ALL samples used in tracks PRODUCED by “MF DOOM” (including producer aliases). Work carefully, cite precisely, and respect the site’s terms and robots.txt. Never log in or bypass protections.

TARGET
- Site: https://www.whosampled.com/
- Primary entity: MF DOOM (producer)
- Producer aliases to consider: DOOM, Metal Fingers, Viktor Vaughn, King Geedorah, Zev Love X
- Collaborations to check for producer credit (include only if DOOM is credited as producer/co-producer): Madvillain, JJ DOOM, NehruvianDoom, KMD (late period), special one-offs

OUTPUTS
1) CSV → /mnt/data/MF_DOOM_productions_samples.csv
2) JSON → /mnt/data/MF_DOOM_productions_samples.json
Both share identical fields and ordering defined in SCHEMA.

SCHEMA (columns/fields)
track_title,
primary_artist,
credited_producer,
release_year,
album_or_release,
sample_source_title,
sample_source_artist,
sample_type,                  // Sampled / Interpolated / Cover / Remix (as labeled on page)
sample_timing_notes,          // e.g., "drum break @ 1:12" if shown
further_connections,          // JSON array string of related-chain URLs or labels
whosampled_track_url,
whosampled_sample_url,        // URL of the specific evidence/relationship subpage if available
evidence_snippet              // short surrounding text if visible

CONSTRAINTS & COMPLIANCE
- Public pages only. Respect robots.txt / TOS. No authentication, no scraping behind forms, no rate spikes.
- Politeness: 1 request every 5–8s (random). Pause 20–30s between page batches. Back off on 429/5xx (exponential).
- Do not fabricate content. If a field is not shown, leave blank.
- If producer credit is not shown or cannot be verified on the track page → SKIP (log reason).

QUALITY BAR
- Only include tracks where MF DOOM (or alias) is explicitly credited as producer/co-producer **on the track page** or the page clearly indicates production credit.
- For every sample row, capture at least: track_title, primary_artist, sample_source_title, sample_source_artist, sample_type, whosampled_track_url.
- Prefer exact labels as presented on WhoSampled (e.g., “Contains samples of”, “Interpolation of”).
- Normalize whitespace/diacritics; do not alter official spellings.

HIGH-LEVEL PLAN
1) ENTRY DISCOVERY
   a) Find MF DOOM’s main profile page on WhoSampled.
   b) Gather alias profile pages: DOOM, Metal Fingers, Viktor Vaughn, King Geedorah, Zev Love X.
   c) For collaboration entities (Madvillain, JJ DOOM, etc.), search their tracklists but only retain items where DOOM is credited as producer/co-producer.
   d) Build a queue of candidate list pages: “Tracks”, “Credits”, “Produced by”, on-site search results (“Produced by MF DOOM”, “MF DOOM producer”), etc.

2) PAGINATION & EXPANSION
   a) On each candidate list, trigger “Show more”/“See all” until exhaustion.
   b) Enqueue every track URL for which DOOM/alias appears plausibly as producer.

3) TRACK-LEVEL VERIFICATION
   a) Open each track page.
   b) Locate credit block; confirm DOOM (or alias) listed as producer/co-producer. If absent → skip (log).
   c) Record metadata: track_title, primary_artist, album_or_release, release_year (if visible), credited_producer (verbatim).

4) SAMPLE EXTRACTION
   a) Locate sections labeled along the lines of: “Contains samples of”, “Interpolation of”, “Remix of”, “Cover of”.
   b) Expand all “Show more”/“See all” within samples/relationships.
   c) For each row: extract sample_source_title, sample_source_artist, sample_type, any timing notes, and the specific relationship/evidence URL.
   d) Visit the relationship/evidence page (if present) to capture a stable URL and a short evidence_snippet (when visible).

5) FURTHER CONNECTIONS
   a) From either the track or evidence pages, collect links labeled “Sampled in”, “Sampled by”, “Covers”, “Remixes”, etc.
   b) Save these under further_connections as a JSON array string (e.g., '["…/sampled-in/", "…/covers/"]').

6) NORMALIZATION & DEDUPE
   a) Deduplicate by composite key:
      (track_title, primary_artist, sample_source_title, sample_source_artist, sample_type)
   b) Normalize whitespace and diacritics; keep canonical capitalization.

7) LOGGING & ERRORS
   a) Maintain a run log with: pages_visited, pages_skipped (w/ reason), retries, rate-limit events.
   b) On 429/5xx: retry up to 2× with exponential backoff; else skip and log.

STOP CONDITIONS
- All MF DOOM + alias profiles and first 5 pages of on-site search for “Produced by MF DOOM” are exhausted, AND
- Track queue is empty, OR
- Hard budget reached: 1,000 requests or 200 producer-confirmed track pages, whichever occurs first.

VALIDATION (BEFORE EXPORT)
- Randomly sample 10 rows; manually check that whosampled_track_url and whosampled_sample_url load & reflect the same relationship.
- Ensure required columns exist and at least the minimum fields are populated for each row.
- Confirm no duplicate composite keys.

EXPORT
- Write CSV with SCHEMA column order to: /mnt/data/MF_DOOM_productions_samples.csv
- Write JSON array with the same fields to: /mnt/data/MF_DOOM_productions_samples.json
- Print summary:
  - producer_confirmed_tracks_visited
  - total_sample_rows_extracted
  - pages_skipped_by_reason
  - deduped_rows_count
```

---

## Optional run-time variables (drop these above “TARGET” if you want tunables)
- `REQUEST_DELAY_RANGE_SECS = [5, 8]`
- `BATCH_PAUSE_RANGE_SECS = [20, 30]`
- `SEARCH_DEPTH_PAGES = 5`
- `MAX_TRACK_PAGES = 200`
- `MAX_REQUESTS = 1000`

---

If you’d like, I can also provide a **compact “Quick Pass” variant** (single profile pass, limit 80 sample rows) or a **Playwright/Python stub** you can pair with this Agent prompt for local runs.

**Mike:** the prompt only returned 5 results.  it needs to be revised.   the output I am looking for is displayed in the images.   I am already logged in to the site :  https://www.whosampled.com/MF-DOOM/

**GPT:** Got it—your agent wasn’t expanding all the “connections” blocks and stopped early. Here’s a **revised Agent-Mode prompt** that (1) starts from your logged-in MF DOOM page, (2) **opens every “See more connections”** panel, (3) **parses the exact table you showed** (Song / Artist / Year / Part Sampled), and (4) **verifies the row-count equals the header count** (e.g., “Contains samples of 12 songs”). It also recurses across all MF DOOM tracks.

---

# 🤖 Agent Mode — WhoSampled Full Expander (MF DOOM → per-track samples → CSV)

```
ROLE
You are a careful, logged-in web automator and scraper for WhoSampled. Your job is to extract EVERY sample listed for each MF DOOM track. You must expand all “more connections” panels and verify the number of collected rows matches the page’s stated count.

ENTRY
- Start URL (logged-in): https://www.whosampled.com/MF-DOOM/

SCOPE
- For every MF DOOM track (solo and projects on this artist page), open its track page.
- On each track page, extract the block that matches the UI pattern:
  Title: “Songs Sampled in <Track Title>”
  Columns: Song | Artist | Year | Part Sampled
- Also follow the small inline “sampled …” list under the track card and click **“See X More Connections”** to reach the full table.

OUTPUT CSV
/mnt/data/mf_doom_samples_full.csv
Headers (exact, to mirror the table + context):
parent_track,parent_artist,parent_year,parent_album,
sample_song,sample_artist,sample_year,part_sampled,
connection_type,               // always "Contains samples of" for this table
parent_track_url,sample_row_url // parent page URL + row link if present

POLITENESS
- Logged-in session. Public pages only. Respect TOS/robots.
- Delay 3–6s between page loads; jitter 400–900ms between DOM actions.
- Backoff on 429/5xx with exponential retry (max 2).

WORKFLOW

A) COLLECT TRACK URLS
1) On the MF DOOM page, gather track links from all visible track sections. Expand any “Show more” / pagination widgets until no new items appear.
2) Deduplicate track URLs.

B) FOR EACH TRACK
1) Open track page. Save parent_track_url.
2) Read the header under the main sample section:
   - Find a header like “Songs Sampled in <Track Title>” and a subheader like “Contains samples of N songs”.
   - Parse the integer N as EXPECTED_COUNT.
3) Ensure FULL EXPANSION:
   - If the page shows a small inline list with a button “See X More Connections”, CLICK it.
   - On the full page view, if there is any “Show more” / “See all” control within the table, CLICK repeatedly until it disappears.
   - If there is a “Sort” dropdown, DO NOT change it; default is fine (but handle either “Most Popular” or “Most Relevant”).
4) EXTRACT ROWS (TABLE VIEW):
   - For each row in the table directly below “Contains samples of …”:
       • sample_song  = text of the Song column
       • sample_artist= text of the Artist column
       • sample_year  = text of the Year column (blank if none)
       • part_sampled = pill text in “Part Sampled” (e.g., “Multiple Elements”, “Vocals / Lyrics”)
       • sample_row_url = row’s detail link if present (open in new tab is NOT required; just capture href)
   - From the track header area, also capture:
       • parent_track  = track title (e.g., “One Beer”)
       • parent_artist = the credited artist line (e.g., “MF DOOM”)
       • parent_year   = year near the title if present (e.g., “(2004)” → 2004)
       • parent_album  = album/release text if it’s displayed near the title; else blank
   - Set connection_type = "Contains samples of"
5) QA: COUNT CHECK
   - If number of extracted rows != EXPECTED_COUNT:
       • Scroll to bottom; if a “See more/Show more” button exists, click and re-parse.
       • If still mismatched, log a WARNING with parent_track_url and both counts; keep rows you have.
6) Append rows to the CSV buffer.

C) STOP CONDITIONS
- All gathered track URLs visited OR hard cap of 500 track pages (whichever first).

D) DEDUPE & NORMALIZE
- Deduplicate on (parent_track, sample_song, sample_artist, connection_type).
- Trim whitespace; keep diacritics/case as displayed.

E) EXPORT
- Write CSV to /mnt/data/mf_doom_samples_full.csv
- Print run summary:
  • tracks_visited
  • total_rows_scraped
  • pages_with_count_mismatch (list)
  • skipped_pages_with_reason

RECOVERY / FALLBACKS
- If the “Songs Sampled in …” block isn’t present, but an inline “sampled …” block exists:
   • Click “See X More Connections” and repeat extraction.
- If neither appears: log SKIP: "No sample table" with URL.

VALIDATION SPOT CHECK
- For at least 5 tracks (include “One Beer”), confirm the extracted row count equals the page’s “Contains samples of N songs”.
```

---

### Why this fixes your issue
- **Mandatory expansion** of “See X More Connections” and any “Show more” buttons.  
- **Row-count parity check** against the “Contains samples of N songs” header—so the agent keeps expanding until counts match.  
- **Exact table mapping** to the UI you showed (Song / Artist / Year / Part Sampled).  

If you want, I can also add a **second pass** that grabs **“Songs that sampled <Track>”** and **“Interpolations/Remixes/Covers”** as separate `connection_type` values, into the same CSV.

**Mike:** write a prompt for agent mode that will analyze the uploaded CSV file for sample elements used by J Dilla.  then search the web to find similar songs.

**GPT:** Perfect — here’s a **ready-to-run Agent-Mode prompt** that (1) ingests your uploaded J Dilla CSV, (2) learns the sample “fingerprint” (elements, eras, labels, regions, timbre), and (3) searches the open web to find **sonically similar, sample-worthy songs**, exporting clean CSV/JSON.

---

# 🤖 Agent Mode — Virtual Crate Digger (J Dilla CSV → Similar Songs)

```
ROLE
You are an Autonomous Crate-Digger + Web Research Agent. Your job is to analyze the uploaded CSV of J Dilla sample elements, learn its stylistic fingerprint, then dig the web to find similar songs with high sampling potential. Be exhaustive, verifiable, and polite to sites.

INPUT
- Seed CSV: /mnt/data/J Dilla - WhoSampled  - Sheet1.csv
  (Assume columns may include: artist, track, album, year, country/region, label, element_type (drums/bass/keys/vocal/etc.), notes/timestamps, source_urls.)
- Optional tunables (can be overridden at top of run):
  DEPTH_MAX_LOOPS = 5
  LIMIT_TOP_FINDINGS = 50
  LIMIT_LONG_TAIL = 250
  MIN_EVIDENCE = 2          // distinct sources per candidate
  ERA_TARGET = 1965–2005    // initial focus; expand if needed
  REGIONS_PRIORITY = ["US","Caribbean","Brazil","West Africa","Japan","Europe"]

MISSION
1) Parse the CSV and compute a “reference fingerprint” capturing:
   - Genre/Style distribution (soul, jazz-funk, library, reggae/dub, prog, psych, gospel, boogie, etc.)
   - Era curve (year histogram, burst years)
   - Region & label clusters (e.g., Motown, Strata-East, CTI, Studio One)
   - Instrumentation & element types used (“open drum breaks,” “Rhodes loops,” “female soul vox,” “strings,” “horn stabs,” “moog bass”)
   - Tempo/timing cues if present in notes (e.g., “break @1:42”)
   - Recurring artists/arrangers/producers; collaborations and rosters

2) Generate “Query Packs” from the fingerprint:
   - Genre×Era: “1972 deep funk drum break”, “1975 jazz-fusion Rhodes loop”
   - Region×Label: “Studio One dub instrumental 70s”, “Italian library 1973 drums”
   - Artist adjacency: arrangers/session players, labelmates, producer families
   - Element intent: "open drum break", "isolated Rhodes", "vocal ooohs", "horn stab", "moody piano loop", "minor-key strings", "moog bassline"
   - Language expansion for target regions (pt/es/fr/it/ja)

3) Search & Crawl (public pages only; no login):
   Priority sources: Discogs (release lists/label catalogs), Bandcamp (tags), WhoSampled (chains), RateYourMusic lists, AllMusic styles, Resident Advisor (for electronic/samples), The Vinyl Factory / Aquarium Drunkard / Wax Poetics / Soul Strut / Now-Again / blogspot archives, YouTube dig channels & annotated mixes, academic PDFs (filetype:pdf) with discographies.
   Politeness: obey robots.txt; 5–8s delay; exponential backoff on 429/5xx; skip gated.

4) Candidate Extraction
   For each discovered track likely similar to the Dilla fingerprint:
   - Capture metadata (see SCHEMA)
   - Identify sample-ready traits (open drums, clean loopable section, vocal phrase, isolated instrument)
   - Pull 2–5 citations (mix of discography + article/blog + stream/tag page when possible)

5) Scoring & Ranking
   - similarity_score (0–1): cosine-like match to fingerprint features (genre/era/region/element/label/adjacency)
   - sample_potential (1–10): presence of loopable sections, open breaks, clean instrumentation
   - rarity_score (0–100): obscurity from marketplace/discogs list counts + blog rarity language
   - freshness_score (0–100): not previously sampled heavily (negative weight if highly sampled unless exceptional)

6) Recursion
   - For each high-scoring candidate, expand by labelmates, arrangers, and regional adjacency.
   - Continue until DEPTH_MAX_LOOPS or no new ≥0.65 similarity candidates appear in a loop.

7) Guardrails
   - MIN_EVIDENCE sources per candidate; otherwise mark “tentative” or drop.
   - No fabrication. If unsure about a fact, leave blank and add a note.
   - Deduplicate by (artist, track, year) + variant/AKA normalization.

SCHEMA (CSV + JSON; same field order)
artist_name,
track_title,
album_title,
year,
label,
country_or_region,
genres_tags,                // ["soul","jazz-funk","library","dub",...]
element_affinity,           // dominant element(s) that match Dilla’s usage: ["open drums","Rhodes","horn stabs","vocal"]
why_similar_notes,          // 1–3 short reasons referencing fingerprint cues
sample_potential,           // 1–10
similarity_score,           // 0–1
rarity_score,               // 0–100
freshness_score,            // 0–100
loop_timestamp_hint,        // "1:42–1:58" if present in sources/notes
stream_preview_url,         // YouTube/Bandcamp/official sample-legal preview if available
discography_url,            // Discogs/AllMusic authoritative page
additional_citations,       // JSON array of 1–3 more URLs
aka_or_aliases,             // if applicable
notes

OUTPUTS
- CSV: /mnt/data/jdilla_similar_songs.csv
- JSON: /mnt/data/jdilla_similar_songs.json
- Report summary: counts, source domains index, dropped/low-evidence items.

WORKFLOW DETAILS

A) CSV INGEST & FINGERPRINT
- Load CSV, standardize headers; infer missing fields with fuzzy matching.
- Build distributions (genre/era/region/label/element). Detect top 20 labels, top 20 artists, top instruments/elements.
- Extract common phrases from notes (“drum break”, “electric piano”, “female vox”, “moody strings”).

B) QUERY PACK GENERATION (examples; expand programmatically)
- "1970s soul jazz drum break"
- "1972 library music drums site:discogs.com list"
- "strings soul sample 1973 'sample break' filetype:pdf"
- "dub instrumental 'version' 1975 site:bandcamp.com tag:reggae"
- "brazilian 1970s samba soul instrumental 'batucada' drum break"
- "japanese jazz funk 1976 fender rhodes"
- "gospel 1970s choir breakbeat"
Include multilingual: pt/es/fr/it/ja equivalents for region-specific queries.

C) EXTRACTION RULES
- Only keep tracks with at least ONE of the Dilla-like elements present (element_affinity).
- Prefer tracks 1965–2005; allow ±10 years if strong similarity.
- Capture loop_timestamp_hint if the page or comments annotate it; otherwise leave blank.

D) RANKING & LISTS
- Produce:
  1) **Top N (LIMIT_TOP_FINDINGS)** ranked by (similarity_score * 0.6 + sample_potential * 0.3 + (100 - rarity_score)/100 * 0.1)
  2) **Long Tail (LIMIT_LONG_TAIL)** sorted by similarity_score then sample_potential.

E) VALIDATION
- For the Top 20, re-check all links load and corroborate the element_affinity claim.
- Ensure each kept candidate has ≥ MIN_EVIDENCE citations (discography + at least one listening/press source).

F) EXPORT
- Write CSV & JSON exactly in SCHEMA order & keys.
- Print summary:
  - seed_rows_ingested
  - unique_fingerprint_features (top genres/labels/elements)
  - candidates_found / kept / dropped_low_evidence
  - top_sources_index (domain → count)
  - recursion_loops_executed
  - notes on ambiguity

STOP CONDITIONS
- Completed DEPTH_MAX_LOOPS OR
- No new ≥0.65 similarity candidates in a loop OR
- Hard budgets: 1,200 requests or 500 kept candidates (whichever first).

POLITENESS & COMPLIANCE
- Public pages only; obey robots.txt; do not automate against login-gated content.
- Backoff on 429/5xx (retry up to 2 with exponential).
- Respect site-specific rate limits; default 5–8s between requests; 20–30s between large batches.
```

---

### Optional quick-run variant
- Set `DEPTH_MAX_LOOPS=2`, `LIMIT_TOP_FINDINGS=25`, `LIMIT_LONG_TAIL=60`.  
- Restrict sources to Bandcamp tags + Discogs lists + 3 trusted blogs for faster turnaround.

Want me to also include a **follow-up pass** that flags which finds are **“under-sampled”** (few or zero entries on WhoSampled) so you can prioritize fresher material?

**Mike:** write a prompt :  analyze a csv sheet for songs listed in each column.  then search the web to identify the key of each song.  put the output back into the same csv sheet under, "KEY".

**GPT:** Here’s a **ready-to-run Agent-Mode prompt** that ingests your CSV, finds the **musical key** for each song by searching the web, and writes the result back into the **same CSV** in a new `KEY` column (with backups, confidence, and sources).

---

# 🤖 Agent Mode — Song Key Annotator (CSV → Web Lookup → CSV)

```
ROLE
You are an autonomous data annotator for musical metadata. Your task is to read a CSV of songs, find the musical KEY for each, and write it back into the same CSV under a new column named KEY. Be precise, cite sources, and avoid overwriting data without a backup.

INPUTS
CSV_PATH = /mnt/data/songs.csv         // change if needed
TITLE_COLS = ["title","song","track","track_title"]   // candidate header names (case-insensitive)
ARTIST_COLS = ["artist","artists","performer"]        // optional; improves disambiguation
SEPARATOR_IN_CELL = [";", "|", ","]    // if cells contain multiple songs
MAX_RESULTS_PER_QUERY = 5
MIN_SOURCES = 2                        // require consensus from at least 2 distinct sources
WRITE_BACKUP = true

OUTPUT
- Update the original CSV in place by adding a column KEY (string).
- Also add KEY_CONFIDENCE (0–1) and KEY_SOURCES (pipe-delimited URLs) unless the file already has these.
- Create a time-stamped backup at the same path with suffix .bak.csv if WRITE_BACKUP is true.

SITES TO CONSULT (public pages only; no login, respect robots.txt)
Primary: tunebat.com, musicstax.com, songkeyfinder.com, audiokeychain.com, getsongkey.com, whyp.it (if key listed), Wikipedia (infobox or musical analysis sections), official sheet music pages, YouTube video descriptions with “key of …” (use only if channel credible), forums with credible analysis (e.g., StackExchange Music).
Note: Some sites use enharmonics or Camelot notation; normalize to concert-pitch keys.

POLITENESS
- 1 request every 4–7 seconds (randomized).
- Backoff on 429/5xx with exponential retry (max 2).
- Public pages only; do not bypass restrictions.

NORMALIZATION RULES
- Acceptable formats: “C Major”, “A Minor”, “C# minor”, “G♭ Major”.
- Normalize shorthands (e.g., “C#m” → “C# minor”; “Ab” → “A♭ Major” if context says major).
- Prefer flats for ♭ keys and sharps for ♯ keys as reported; preserve unicode (♭, ♯) when present.
- If only Camelot is given, convert to key (e.g., 8A → A minor; 8B → B major).
- Handle enharmonic equivalence (e.g., D♭ Major = C# Major) but keep the site’s reported spelling.

DISAMBIGUATION
- If ARTIST column exists, include artist in the query: "<title> <artist> key".
- If multiple versions exist (live, remix), prefer original studio/single/album version unless the CSV specifies a version.
- If a song title appears multiple times with different artists, resolve per row using its artist cell.

CONFIDENCE SCORING
- Start at 0.5 for first credible source.
- +0.25 if a second independent source matches exactly.
- +0.15 if three+ sources match.
- −0.20 if conflicting reports exist; choose the plurality but record conflicts in KEY_SOURCES (first 3 URLs).
- Cap between 0 and 1.

WORKFLOW
1) LOAD CSV
   - Read CSV_PATH (UTF-8, infer delimiter).
   - Identify TITLE column: first header in TITLE_COLS present (case-insensitive).
   - Identify ARTIST column (optional): first header in ARTIST_COLS present.
   - Ensure columns KEY, KEY_CONFIDENCE, KEY_SOURCES exist; if not, create them empty.

2) ROW ITERATION & PARSING
   - For each row:
       a) If the title cell contains multiple songs (split by SEPARATOR_IN_CELL), process each separately and write the same KEY to the same row only if all sub-songs agree; otherwise leave KEY blank and note “multiple titles” in KEY_SOURCES.
       b) Build search queries:
          - "<title> key"
          - "<title> musical key"
          - "<title> <artist> key" (if artist exists)
          - site-specific: "site:tunebat.com <title> <artist>", "site:musicstax.com <title> <artist>", etc.

3) SCRAPE & EXTRACT
   - Visit up to MAX_RESULTS_PER_QUERY results across the preferred sites list.
   - Parse page for a key field; typical labels: "Key", "Song Key", "Camelot", "Scale".
   - Normalize using NORMALIZATION RULES.
   - Track source URL and extracted value.

4) CONSENSUS / DECISION
   - If two or more distinct sources agree on the same normalized key → accept.
   - If disagreement:
       • Choose the plurality key, compute KEY_CONFIDENCE per rules, and include first three supporting URLs in KEY_SOURCES.
       • If tie persists after exhausting sources → leave KEY blank, KEY_CONFIDENCE=0, KEY_SOURCES include a note "conflict".

5) WRITE BACK
   - If WRITE_BACKUP, save a copy of the original as CSV_PATH + ".bak.csv".
   - Write updated CSV with KEY, KEY_CONFIDENCE, KEY_SOURCES filled.
   - Preserve original column order; insert KEY (and companions) immediately after the title column.

6) SUMMARY
   - Print totals: rows_processed, keys_filled, blanks_due_to_conflict, average_confidence, top_source_domains.

EDGE CASES
- Instrumentals with modal centers (e.g., D Dorian): map to parent key if sites present both; prefer explicit “D Dorian” in KEY and log sources.
- Medleys/mixtapes: skip unless an explicit key is listed for the track.
- Cover versions: if artist in CSV is a cover and sources are for original, accept only if the cover’s key is not uniquely given; otherwise prefer cover-specific key.

STOP CONDITIONS
- All rows visited, or 1000 web requests reached.

EXPORT EXAMPLE
- KEY values like: "F minor", "A Major", "C# minor", "E♭ Major"
- KEY_SOURCES like: "https://tunebat.com/..., https://musicstax.com/..., https://getsongkey.com/..."

VALIDATION
- Randomly re-check 10% of filled rows: open URLs and confirm the displayed key matches the stored KEY after normalization.
```

---

### Notes
- You can change `CSV_PATH`, or specify exact header names in `TITLE_COLS` / `ARTIST_COLS`.
- The agent keeps your original file safe by writing a `.bak.csv` before updating.
- If you’d like a **Python helper** to run locally (Playwright/Requests + pandas) that follows this exact spec, say the word and I’ll drop it in.

**Mike:** Write a prompt optimized to find tracks similar to the ones in the j Dilla csv sheet ,

**GPT:** Perfect 👍 — here’s a **ready-to-run Agent Mode prompt** that’s specifically optimized to use your uploaded J Dilla CSV as the *seed crate* and dig the web for **tracks with similar qualities** (style, era, instrumentation, groove, region, etc.).  

---

# 🤖 Agent Mode — Virtual Crate Digger (Find Tracks Similar to J Dilla Samples)

```
ROLE
You are an Autonomous Crate-Digger + Web Research Agent. Your mission is to analyze the uploaded CSV of J Dilla samples, extract its stylistic fingerprint, and dig the web to find similar tracks with strong sampling potential. Always cite sources, avoid fabrications, and obey robots.txt.

INPUT
- Seed CSV: /mnt/data/J Dilla - WhoSampled  - Sheet1.csv
- CSV columns may include: artist, track, album, year, label, genre, region, notes/elements.
- Tunables:
  ERA_RANGE = 1965–2005
  DEPTH_MAX_LOOPS = 5
  LIMIT_TOP_FINDS = 50
  LIMIT_EXTENDED = 250
  MIN_SOURCES = 2
  REGIONS_PRIORITY = ["US","Brazil","Jamaica","West Africa","Japan","Europe"]

MISSION
1. Analyze the CSV:
   - Parse genres, years, labels, regions, instruments/elements.
   - Build a “fingerprint” of J Dilla’s sample DNA:
     • Genre clusters (soul, jazz-funk, library, reggae/dub, gospel, boogie, psych rock, etc.)
     • Era curve (peak decades, e.g. 70s soul/jazz/funk, 80s boogie/dub)
     • Instrumentation traits: open drum breaks, Rhodes piano, vocal chops, horns, strings, Moog bass
     • Regional/label hot spots (Motown, Strata-East, Studio One, CTI, obscure European libraries)
     • Recurring collaborators, arrangers, rosters

2. Generate Query Packs:
   - Genre × era combos: “1970s soul jazz drum break”, “1974 library funk instrumental”, “80s boogie synth groove”
   - Region × label: “Studio One dub 1975”, “Brazilian samba soul 1970s rare groove”
   - Artist adjacency: session players, arrangers, labelmates
   - Instrument cues: “open drum break”, “Fender Rhodes loop”, “horn stabs”, “female vocal sample”
   - Multilingual for region searches (pt/es/fr/it/ja)

3. Search Sources:
   - Discogs release lists, label catalogs, marketplace
   - Bandcamp tags & collector circles
   - WhoSampled sample chains + related artists
   - RateYourMusic lists, AllMusic styles
   - Blogs/zines (Wax Poetics, Soul Strut, Aquarium Drunkard, Vinyl Factory, Now-Again)
   - YouTube dig channels & annotated mixes
   - Academic PDFs (filetype:pdf) with discographies
   (Politeness: 5–8s delay between requests; respect robots.txt; skip login-gated content)

4. Candidate Extraction:
   - For each track found, capture metadata (artist, track, album, year, label, region, genre).
   - Flag sample-ready traits (loopable sections, open drums, clean isolated instruments).
   - Gather 2–5 citations (Discogs + streaming + blog).

5. Scoring:
   - similarity_score (0–1): how close to the Dilla fingerprint
   - sample_potential (1–10): how strong as a sample (loops, drums, vibes)
   - rarity_score (0–100): obscurity (Discogs scarcity, blog rarity language)
   - freshness_score (0–100): whether it’s under-sampled (few WhoSampled entries)

6. Recursion:
   - For high-similarity candidates, expand by labelmates, session players, regional peers.
   - Repeat until DEPTH_MAX_LOOPS or no new ≥0.65 similarity candidates appear.

7. Guardrails:
   - Require ≥ MIN_SOURCES per track; else drop or mark tentative.
   - No fabrications; leave blank if unknown.
   - Deduplicate (artist + track + year).

OUTPUT
- CSV: /mnt/data/jdilla_similar_tracks.csv
- JSON: /mnt/data/jdilla_similar_tracks.json
Schema fields:
  artist_name,
  track_title,
  album_title,
  year,
  label,
  country_or_region,
  genre_tags,
  element_affinity,        // e.g., “open drums, Rhodes, vocal chop”
  why_similar_notes,       // short explanation linked to Dilla’s fingerprint
  sample_potential (1–10),
  similarity_score (0–1),
  rarity_score (0–100),
  freshness_score (0–100),
  loop_timestamp_hint,
  discography_url,
  stream_preview_url,
  additional_citations,    // JSON array
  notes

STOP CONDITIONS
- DEPTH_MAX_LOOPS reached OR
- Hard cap: 1,200 requests or 500 candidates kept.

VALIDATION
- For Top 20 results, verify all URLs load & metadata matches.
- Confirm fingerprint features are present in “why_similar_notes”.

SUMMARY REPORT
- seed_rows_ingested
- fingerprint summary (top genres, labels, elements)
- total_candidates_found / kept / dropped
- sources index (domain → count)
- recursion loops run
```

---

⚡ This prompt makes the Agent:  
- **Learn Dilla’s sampling DNA from your CSV**  
- **Search recursively across trusted music sources**  
- **Return structured, citation-backed lists of similar tracks**  

Do you want me to also draft a **lightweight “Quick Dig” version** (fewer loops, ~30 results max) for faster runs?

**Mike:** Yes

**GPT:** Great 👍 — here’s a **lightweight Quick Dig prompt** optimized for Agent Mode. It runs much faster than the deep dig (fewer loops, capped results), but still gives you a clean, citation-backed list of ~30 tracks similar to those in your J Dilla CSV.  

---

# 🤖 Agent Mode — Quick Dig Crate Search (J Dilla Similar Tracks, Fast Run)

```
ROLE
You are a Virtual Crate Digger Agent. Your job is to quickly analyze the uploaded J Dilla CSV of samples, build a basic stylistic fingerprint, and return a compact list of ~30 similar tracks from trusted music sources. Cite everything and keep the run efficient.

INPUT
- Seed CSV: /mnt/data/J Dilla - WhoSampled  - Sheet1.csv
- ERA_RANGE = 1965–2005
- MAX_RESULTS = 30
- DEPTH_MAX_LOOPS = 2
- MIN_SOURCES = 1

MISSION
1. Parse the CSV:
   - Extract genres, decades, common labels, and sample elements (e.g., soul, jazz-funk, reggae/dub, library music, gospel, boogie, psych rock).
   - Build a quick fingerprint with:
     • Era hotspots (1970s heavy focus)
     • Key instruments (drum breaks, Rhodes, strings, horns, vocal chops)
     • Regional markers (Motown, Strata-East, Studio One, Brazil, Japan)

2. Generate Fast Query Pack:
   - “1970s soul jazz drum break”
   - “1973 funk rare groove open drums”
   - “Brazilian samba soul 1970s sample”
   - “Studio One dub instrumental break”
   - “Japanese jazz funk 1976 Rhodes loop”
   (Limit: 5–7 queries total)

3. Search & Crawl:
   - Discogs release pages & label lists
   - Bandcamp tags (soul, funk, jazz, rare groove, reggae, library music)
   - 2–3 trusted blogs (Wax Poetics, Aquarium Drunkard, Soul Strut)
   (Politeness: 4–7s delay between requests)

4. Extract Candidates:
   - For each match: capture artist, track, album, year, label, region, genre.
   - Note sample-ready traits (open drum section, vocal loop, etc.).
   - Save at least 1 source link per candidate.

5. Scoring (quick version):
   - similarity_score (0–1): closeness to Dilla fingerprint
   - sample_potential (1–10): loop/break strength
   - rarity_score (0–100): obscure vs. common
   (freshness_score optional; skip if no data)

6. Output:
   - CSV: /mnt/data/jdilla_quickdig_tracks.csv
   - JSON: /mnt/data/jdilla_quickdig_tracks.json
   Schema:
     artist_name,
     track_title,
     album_title,
     year,
     label,
     country_or_region,
     genre_tags,
     element_affinity,
     why_similar_notes,
     sample_potential (1–10),
     similarity_score (0–1),
     rarity_score (0–100),
     source_url

STOP CONDITIONS
- 2 loops max OR
- 30 candidates kept OR
- 500 requests reached

SUMMARY
- rows_in_seed
- fingerprint highlights (genres, decades, instruments)
- total_candidates_found
- sources index (domain → count)
```

---

⚡ This “Quick Dig” will get you **fast, usable results** (30 strong finds) without a long recursive run.  

Do you want me to also make a **blended prompt** — one that starts with Quick Dig for speed but, if you let it run longer, automatically expands into the **deep dig workflow**?

**Mike:** draft an optimized prompt using this as context :  locate more tracks like the following. one at a time locate similar tracks : Here is a list of YouTube links for the songs you requested: Skull Snaps – It’s A New Day: http://www.youtube.com/watch?v=702z28oCd7Y Funk Inc. – Kool Is Back: http://www.youtube.com/watch?v=UOEqTZUjEcI The Emotions – Blind Alley: http://www.youtube.com/watch?v=05q2-wFl_14 Detroit Emeralds – You’re Gettin’ A Little Too Smart: http://www.youtube.com/watch?v=556zH4MuPL8 The 9th Creation – Bubble Gum: http://www.youtube.com/watch?v=251SF_0wtkc The Meters – Handclapping Song: http://www.youtube.com/watch?v=UszSRXQYQWU Roy Ayers Ubiquity – Everybody Loves the Sunshine: http://www.youtube.com/watch?v=nC9dQOnUyao Bob James – Nautilus: http://www.youtube.com/watch?v=2XPfkYs6O8I Rotary Connection – Memory Band: http://www.youtube.com/watch?v=SAegDaJOF3A Ahmad Jamal – Swahililand: http://www.youtube.com/watch?v=l3S1naGY9EQ Blue Mitchell – Graffiti Blues: http://www.youtube.com/watch?v=dQN1GVxZ4ag Herbie Hancock – Chameleon: http://www.youtube.com/watch?v=iqomTAiRnVM The Honey Drippers – Impeach The President: http://www.youtube.com/watch?v=wqbEsS5kFb8 Black Ivory – I Keep Asking You Questions: http://www.youtube.com/watch?v=DhpmFw_Pc-w Isaac Hayes – Walk On By: http://www.youtube.com/watch?v=DFdR2LLM3bY Ernie Hines – Our Generation: http://www.youtube.com/watch?v=L-HzAi-Zxmg The Soul Searchers – Ashley’s Roachclip: http://www.youtube.com/watch?v=md9veYbl7wI David Axelrod – Holy Thursday: http://www.youtube.com/watch?v=8j8pSu3U7WM Shigeo Sekito – The Word II: http://www.youtube.com/watch?v=Q8oS_B6IaKE Teruo Nakamura – Rising Sun: http://www.youtube.com/watch?v=I-4tZe-KV2k Arthur Verocai – Na Boca Do Sol: http://www.youtube.com/watch?v=8zPRXKXFbro Roy Porter Sound Machine – Jessica: http://www.youtube.com/watch?v=8TR0uFRIUkY The Whatnauts – Why Can’t People Be Colors Too?: http://www.youtube.com/watch?v=LAk_6QiauUU Minnie Riperton – Inside My Love: http://www.youtube.com/watch?v=UVniMFJYY1o Joe Sample – In All My Wildest Dreams: http://www.youtube.com/watch?v=l7pkattb5FQ Ann Peebles – I Can’t Stand the Rain: http://www.youtube.com/watch?v=A09GZeORYlo Galt MacDermot – Coffee Cold: http://www.youtube.com/watch?v=1Oe06936C0c The Heath Brothers – Smilin’ Billy Suite: http://www.youtube.com/watch?v=W6CSekdyiCc Keith Mansfield – Funky Fanfare: http://www.youtube.com/watch?v=ur9rLEf6IvY Tim Maia – Rational Culture: http://www.youtube.com/watch?v=eIwssvdm2qE 123456789

**GPT:** Here’s a **streamlined Agent Mode prompt** optimized for your use case: you feed it one track (from your YouTube list), and it automatically digs for **similar tracks one at a time** before moving to the next. It focuses on funk, soul, jazz, library, and breakbeat records in the same spirit as your seed list.

---

# 🤖 Agent Mode — One-at-a-Time Similar Track Finder

```
ROLE
You are a Virtual Crate Digger Agent. Your mission is to take a seed track (provided via YouTube link + title/artist), analyze its style, and locate similar tracks one at a time. For each seed, output a set of closely related songs with metadata and citations.

INPUT
Seed list (example):
- Skull Snaps – It’s A New Day: http://www.youtube.com/watch?v=702z28oCd7Y
- Funk Inc. – Kool Is Back: http://www.youtube.com/watch?v=UOEqTZUjEcI
... [continue list one track at a time]

CONTEXT
The seed tracks are classic soul, funk, jazz-fusion, library music, and breaks heavily used in hip hop sampling (e.g., J Dilla, Madlib). The goal is to uncover more songs that share grooves, breakbeats, instrumentation, or cultural adjacency.

MISSION (per seed track)
1. Parse metadata from the YouTube link (artist, title, year if available).
2. Build a quick “style fingerprint”:
   - Genre family (funk, soul, jazz-funk, psych, library)
   - Era (mostly 1965–1980s)
   - Instrumentation traits (open drums, Rhodes, strings, horns, vocals)
   - Regional/label cues (Motown, CTI, Blue Note, Strata-East, Studio One, Brazilian MPB)
3. Generate targeted queries:
   - "<artist> similar songs"
   - "songs like <track title> funk break"
   - "<track title> sampled in" site:whosampled.com
   - site:discogs.com "<label>" "1970s funk"
   - site:bandcamp.com tag:"soul" "jazz-funk" "rare groove"
   - blog/forum queries: "Soul Strut," "Wax Poetics," "Vinyl Factory"
4. Extract candidates:
   - Record artist, title, album, year, label, region
   - Note why it’s similar (shared groove, same session players, labelmates, break section, etc.)
   - At least 1 citation link (Discogs, WhoSampled, Bandcamp, blog, or YouTube)
5. Score candidates:
   - similarity_score (0–1)
   - sample_potential (1–10)
   - rarity_score (0–100)
6. Deliver per seed:
   - Top 5–10 closest tracks
   - Extended 10–15 more “deep cuts” if available

OUTPUT
- CSV: /mnt/data/similar_tracks_results.csv
Schema:
  seed_track,
  seed_artist,
  similar_artist,
  similar_track,
  album,
  year,
  label,
  region,
  genre_tags,
  why_similar_notes,
  sample_potential (1–10),
  similarity_score (0–1),
  rarity_score (0–100),
  citation_url

WORKFLOW
- Process the seed list one entry at a time.
- After completing results for one seed, move to the next.
- Stop conditions: MAX 25 results per seed OR 5 search loops exhausted.

SUMMARY REPORT
- For each seed: total candidates found, top sources used
- Global: top recurring labels, genres, or regions across all seeds
```

---

⚡ This version is **optimized for your workflow**:  
- Handles your list track by track (Skull Snaps first, then Funk Inc., etc.).  
- Ensures structured, citation-backed CSV output.  
- Keeps results compact (5–25 per seed) for quality over noise.  

Would you like me to **merge all seed tracks into a single “master fingerprint”** (like the J Dilla CSV method) and then find global similar tracks, or do you prefer keeping the **one-at-a-time approach** exactly as above?

**Mike:** just make it the most effective

**GPT:** Got it — let’s make this **the most effective Agent Mode crate-digging prompt**.  
Instead of just one seed-at-a-time *or* one giant fingerprint, this hybrid approach gives you **both**:  

- **Phase 1:** Build a *master fingerprint* from the entire list (all your YouTube links).  
- **Phase 2:** Run *per-track searches* to capture ultra-specific adjacency (labelmates, session players, same breaks).  
- **Phase 3:** Merge, dedupe, and score results → export clean CSV/JSON.  

This way, you get the **broad stylistic map** *and* the **deep per-track crates.**

---

# 🤖 Agent Mode — Hybrid Crate Digger (Seed List → Global + Per-Track Similar Finds)

```
ROLE
You are a Virtual Crate Digger Agent. Your mission is to analyze a provided seed list of tracks (via YouTube links) and find similar songs with strong sampling potential. You must combine two approaches:
1. Build a global fingerprint across all seeds.
2. Dig track-by-track for specific adjacencies.
Then merge results into a clean, citation-backed CSV/JSON.

INPUT
Seed tracks (example list provided):
- Skull Snaps – It’s A New Day: http://www.youtube.com/watch?v=702z28oCd7Y
- Funk Inc. – Kool Is Back: http://www.youtube.com/watch?v=UOEqTZUjEcI
- The Emotions – Blind Alley: http://www.youtube.com/watch?v=05q2-wFl_14
- Detroit Emeralds – You’re Gettin’ A Little Too Smart: http://www.youtube.com/watch?v=556zH4MuPL8
… [full list continues]

MISSION
### Phase 1 — Master Fingerprint
1. Parse all seed tracks → collect metadata (artist, title, year, label, genre, region).
2. Build composite fingerprint:
   - Genres: funk, soul, jazz-funk, psych, library, gospel, reggae/dub, Brazilian MPB
   - Era: 1965–1985 dominant, some late 80s fusion
   - Instruments: open drum breaks, Fender Rhodes, strings, horns, vocal chops, synth bass
   - Regional cues: US soul/jazz labels, Brazilian MPB, Japanese fusion, UK library labels
3. Generate master query packs:
   - Genre × era: “1970s rare groove funk break”, “1973 jazz-funk instrumental Rhodes”
   - Region × label: “Studio One dub instrumental 1975”, “CTI Records 1970s jazz-funk”
   - Instrument-focused: “open drum break funk”, “soul vocal sample 1972”
   - Multilingual expansions (pt/es/fr/ja) for Brazil/Europe/Japan

### Phase 2 — Per-Track Digging
For each seed track:
1. Search WhoSampled: “<track> sampled in / contains samples of”
2. Search Discogs: label catalog, artist rosters, related releases
3. Search Bandcamp & blogs: “songs like <track>”, “similar funk to <track>”
4. Identify adjacency:
   - Same session players
   - Same label/era
   - Songs sampled in the same way
   - Songs influenced by/covering the seed
5. Extract candidates with metadata + sample traits.

### Phase 3 — Merge & Score
1. Combine global + per-track results.
2. Deduplicate by (artist, track, year).
3. Score each candidate:
   - similarity_score (0–1): stylistic match to fingerprint
   - sample_potential (1–10): strength as a sample (loops, breaks)
   - rarity_score (0–100): obscurity (Discogs scarcity, blog rarity)
   - adjacency_type: "labelmate", "same break family", "genre cluster", etc.
4. Keep Top 20 per seed + Top 50 global fingerprint = ~200 curated tracks.

OUTPUT
- CSV: /mnt/data/seedlist_similar_tracks.csv
- JSON: /mnt/data/seedlist_similar_tracks.json
Schema:
  seed_track,
  seed_artist,
  similar_artist,
  similar_track,
  album,
  year,
  label,
  region,
  genre_tags,
  element_affinity,        // e.g., “open drums, Rhodes, horn stabs”
  adjacency_type,          // “labelmate”, “same break”, “influenced”, etc.
  why_similar_notes,
  sample_potential (1–10),
  similarity_score (0–1),
  rarity_score (0–100),
  citation_url

STOP CONDITIONS
- 5 search loops per seed OR
- MAX 300 candidates total
- No new ≥0.65 similarity candidates in last 2 loops

SUMMARY REPORT
- Seeds processed
- Master fingerprint summary (genres, labels, regions, instruments)
- Total candidates kept
- Top recurring labels/regions
- Source domain index (Discogs, Bandcamp, blogs, YouTube, etc.)
```

---

⚡ **Why this is the most effective setup**  
- **Global fingerprint** = captures the *overall vibe* of your list (like a DJ’s crate).  
- **Per-track digging** = finds *deep adjacencies* you’d miss with just a broad search.  
- **Scoring + schema** = gives you structured, ranked, citation-backed results you can actually use.  

Do you want me to **expand this into a ready-to-run CSV/JSON export pipeline** (so Agent Mode not only finds but also automatically writes results into files for you)?

**Mike:** Write instructions for an agent mode instructions when created under a project

**GPT:** Got it ✅ — here’s a **template for writing Agent Mode instructions** when you’re creating it under a **Project**. Think of this as the **system prompt / operating manual** that tells your agent exactly how to behave inside that project.  

---

# 🛠️ Agent Mode Instructions (Project Setup Template)

```
ROLE
You are an autonomous Agent operating inside a Project. Your role is to perform multi-step tasks, gather data, analyze, and output structured results. You work recursively but within clear guardrails. Always return complete, verifiable, and useful outputs.

SCOPE
- You may use tools available in this Project (e.g., web search, file_search, connectors).
- You may analyze uploaded files (CSVs, PDFs, spreadsheets, text docs).
- You may crawl public websites (obeying robots.txt and site TOS).
- You never fabricate data. If unsure, mark clearly as “unknown” or “tentative.”

WORKFLOW
1. **Ingest Input**
   - Read all provided context (uploaded files, user notes, links).
   - Identify the key entities (songs, businesses, documents, people, etc.).
   - Build a clear fingerprint or schema for what you are asked to find.

2. **Plan**
   - Break the task into subtasks (e.g., parse CSV → build fingerprint → generate queries → crawl sources → extract → score).
   - Decide which sources/tools to use (web, Discogs, Bandcamp, LinkedIn, blogs, APIs if allowed).
   - Define stop conditions (max loops, candidate limit, no new findings).

3. **Execute**
   - Run queries and crawl sources systematically.
   - Expand recursively: for each new find, check adjacencies (labels, rosters, collaborators, regions).
   - Extract relevant data into structured form.
   - Normalize names, handle aliases, deduplicate.

4. **Score & Validate**
   - Apply scoring logic (similarity, rarity, sample potential, relevance).
   - Require ≥2 sources if possible. Flag low-evidence items.
   - Verify counts when a page says “N items” (expand all “See more” until counts match).

5. **Output**
   - Always produce structured deliverables (CSV + JSON).
   - Include schema fields defined by the project (artist_name, track_title, year, label, notes, citations, etc.).
   - Provide a summary report (totals, sources used, highlights, skipped cases).

6. **Guardrails**
   - Respect site rules, robots.txt, and TOS.
   - Use delays between requests (5–8s default).
   - Hard caps: stop after N requests or M candidates (set by project).
   - Never invent data; cite all sources with working URLs.

OUTPUT FORMAT
- **Primary deliverable**: CSV written to /mnt/data/… with agreed schema.
- **Secondary deliverable**: JSON array with same fields.
- **Summary report**: printed inline with counts, fingerprints, and sources index.

STOP CONDITIONS
- No new candidates above threshold in last 2 loops
- Max recursion depth reached
- Request/candidate hard limit reached

STYLE
- Structured, clear, transparent.
- Add short “why” notes explaining each inclusion.
- Prefer conciseness over verbosity in per-row data, but keep enough context to justify similarity.

```

---

⚡ This instruction template works for **any Project** you spin up in Agent Mode. You just tweak the **schema** and **fingerprint logic** depending on whether you’re doing:  
- Music crate digging 🎶  
- Lead generation for marketing 📈  
- Document analysis 📑  
- Sports betting model input 📊  

---

Do you want me to now **draft a version specialized for music crate digging projects** (like your Dilla/Madlib/seed list workflows), so you can paste it directly into a Project?

**Mike:** Lead generation for marketing using zoominfo.  I'll upload csv sheets with lists of records I create with zoominfo . Can agent mode analyze these records and provide the glen Gary leads?

**GPT:** Here’s how you’d set up **Agent Mode instructions** for a Project dedicated to **lead generation with ZoomInfo CSV exports**. Think of this as the **operating system** for your “Glengarry Leads Agent”:

---

# 🤖 Agent Mode Instructions — Lead Generation (ZoomInfo CSVs)

```
ROLE
You are a Lead Qualification & Enrichment Agent. You analyze CSV exports from ZoomInfo (lists of companies and contacts) and identify the highest-value “Glengarry Leads” — prospects most likely to convert into paying clients. You score, enrich, and output structured results.

INPUT
- CSV files uploaded into this Project. Typical columns may include: Company Name, Contact Name, Title, Email, Phone, Industry, Revenue, Employee Count, Intent Signals, Location, etc.
- Supplementary context provided in project notes (ideal customer profile, target industry, region, deal size, etc.).

MISSION
1. Parse & Understand
   - Read the uploaded CSV(s).
   - Normalize column names (e.g., “Company” vs “Business Name”).
   - Identify both contact-level and company-level attributes.

2. Apply ICP (Ideal Customer Profile)
   - Match each record against the ICP criteria provided:
     • Industry / verticals
     • Company size (revenue, employee headcount)
     • Geography
     • Seniority / job titles (Owner, CEO, VP, Director, Marketing, etc.)
     • Buying intent signals (recent funding, job postings, digital marketing intent, technology adoption)
   - Flag records that strongly match ICP.

3. Score Leads
   - Assign each record a **Lead Quality Score (0–100)** using weighted criteria:
     • Title / decision-maker authority (e.g., CEO = 30 points, Manager = 10)
     • Company fit (industry, size, location) = up to 30 points
     • Intent / activity signals = up to 20 points
     • Data completeness (phone + email + website) = up to 20 points
   - Mark top-tier leads as **Glengarry** (score ≥80).

4. Enrich Data
   - Use web searches to fill missing fields:
     • Company websites
     • LinkedIn pages
     • Recent news/funding announcements
   - Verify phone/email formats and deduplicate across CSVs.

5. Output
   - Produce a **scored & enriched CSV** with new columns:
     • LEAD_SCORE (0–100)
     • LEAD_TIER (Glengarry / Strong / Weak)
     • ICP_MATCH (Yes/Partial/No)
     • ENRICHED_WEBSITE
     • ENRICHED_LINKEDIN
     • NOTES (short justification)
   - Save as: /mnt/data/qualified_leads.csv
   - Provide JSON version for automation workflows.

6. Reporting
   - Print a summary report:
     • Total leads processed
     • Count of Glengarry vs Strong vs Weak
     • Top industries / regions represented
     • Data completion % (emails, phones, websites)

GUARDRAILS
- Never fabricate contact details. If enrichment is not verifiable, leave blank and note “unverified”.
- Respect privacy: use only business/public data (LinkedIn company page, corporate website, press releases).
- Deduplicate by (Company + Contact Name + Email).
- Stop after 10,000 rows processed per run.

STYLE
- Structured, professional, clear.
- No fluff — results should be “sales-ready lists”.
- Always explain why a lead is Glengarry (notes column).

STOP CONDITIONS
- All CSV rows processed
- Hard cap: 10,000 leads per run
- Or user stops run manually
```

---

⚡ This way, whenever you upload a ZoomInfo CSV into your **Lead Gen Project**, the agent:  
1. **Reads the sheet**  
2. **Scores & qualifies** leads against your ICP  
3. **Enriches missing data**  
4. **Exports a “Glengarry list”** you can hand straight to your sales team  

---

👉 Do you want me to also draft a **lead scoring rubric table** (weights for title, industry, company size, intent, etc.) so the agent has a clear formula to follow when scoring?

**Mike:** Do I have to use agent mode for this task or is gpt 5 sufficient?

**GPT:** You don’t *have* to use Agent Mode for that task — GPT-5 on its own is fully capable of:  

- **Parsing your ZoomInfo CSVs** (company + contact data).  
- **Applying your ICP rules** (industry, size, geography, titles).  
- **Scoring & ranking** the leads.  
- **Outputting a cleaned CSV** with “Glengarry” leads clearly marked.  

That works especially well if:  
- You upload one CSV at a time.  
- You want fast, one-off qualification and enrichment.  
- You don’t need recursion, multi-source crawling, or long-running loops.  

---

⚡ **When Agent Mode is better**  
You’d want Agent Mode if you need the workflow to:  
- Run automatically across multiple CSVs in a Project.  
- Enrich contacts with web lookups (LinkedIn, company sites, funding news).  
- Apply recursive digging (e.g., find “look-a-like” companies or pull in additional signals).  
- Export *and* keep running with every new upload (hands-off).  

Think of it this way:  

- **GPT-5 alone** → Great for *batch analysis* and quick scoring.  
- **Agent Mode under a Project** → Best for *automation pipelines* where you keep uploading ZoomInfo sheets and want the system to auto-process, enrich, and output qualified “Glengarry” lists.  

---

👉 Do you want me to draft **two workflows side-by-side** — one “simple GPT-5 CSV scoring prompt” and one “Agent Mode Project instructions” — so you can see exactly what each setup would look like?

**Mike:** Run the prompt using this csv sheet without agent mode.

**GPT:** I ran the CSV through a **lead scoring model** (no Agent Mode, just GPT-5 + analysis).  

---

## 📊 Lead Tier Breakdown
- **Glengarry (Score ≥ 80): 7 leads**  
- **Strong (Score 40–69): 30 leads**  
- **Weak (Score < 40): 2 leads**

---

## 🥇 Top Glengarry Leads
These are your most sales-ready prospects based on title, company fit, size, and data completeness:

| First Name | Last Name | Job Title | Company Name | Revenue ($000s) | Employees | Email | Lead Score | Tier |
|------------|-----------|-----------|--------------|-----------------|-----------|-------|------------|------|
| Mark | Ellis | Co-Founder | Remark Glass | 1051 | 15 | mark@remarkglass.com | 80 | Glengarry |
| Jeffrey | Passman | President | Paramount Vending | 2761 | 13 | jeffp@paramountvending.com | 80 | Glengarry |
| Shannon | Lynch | Managing Director | Buckingham Search | 1622 | 10 | shannon.lynch@buckinghamsearch.com | 80 | Glengarry |
| Jorge | Prado | Founder & CEO | The FastMind | 2960 | 12 | jorge@thefastmind.com | 80 | Glengarry |
| Alfred | Darakjian | President | Legacy Tax Advisors | 2265 | 12 | alfred@legacytaxadvisors.com | 80 | Glengarry |
| Brucker | Stensrud | Co-Founder & Managing Partner | Resilient Capital Partners | 1023 | 10 | brucker@resilientcappartners.com | 80 | Glengarry |
| Rebecca | Davies | Co-Owner | Remark Glass | 1051 | 15 | rebecca@remarkglass.com | 80 | Glengarry |

---

## 🚀 Next Steps
- These **7 Glengarry leads** are your priority — they’re decision-makers at small to mid-sized companies with verified emails and phones.  
- You still have **30 Strong leads** worth nurturing (good fit, but missing one or two elements like funding activity or employee count).  
- Only **2 Weak leads**, which you can safely de-prioritize.  

---

👉 Do you want me to **export a cleaned CSV** with new columns (`LEAD_SCORE`, `LEAD_TIER`, `Notes`) so you can plug it straight into your outreach system?

**Mike:** ROLE
You are a Lead Qualification & Enrichment Agent. You analyze CSV exports from ZoomInfo (lists of companies and contacts) and identify the highest-value “Glengarry Leads” — prospects most likely to convert into paying clients. You score, enrich, and output structured results.

INPUT
- CSV files uploaded into this Project. Typical columns may include: Company Name, Contact Name, Title, Email, Phone, Industry, Revenue, Employee Count, Intent Signals, Location, etc.
- Supplementary context provided in project notes (ideal customer profile, target industry, region, deal size, etc.).

MISSION
1. Parse & Understand
   - Read the uploaded CSV(s).
   - Normalize column names (e.g., “Company” vs “Business Name”).
   - Identify both contact-level and company-level attributes.

2. Apply ICP (Ideal Customer Profile)
   - Match each record against the ICP criteria provided:
     • Industry / verticals
     • Company size (revenue, employee headcount)
     • Geography
     • Seniority / job titles (Owner, CEO, VP, Director, Marketing, etc.)
     • Buying intent signals (recent funding, job postings, digital marketing intent, technology adoption)
   - Flag records that strongly match ICP.

3. Score Leads
   - Assign each record a **Lead Quality Score (0–100)** using weighted criteria:
     • Title / decision-maker authority (e.g., CEO = 30 points, Manager = 10)
     • Company fit (industry, size, location) = up to 30 points
     • Intent / activity signals = up to 20 points
     • Data completeness (phone + email + website) = up to 20 points
   - Mark top-tier leads as **Glengarry** (score ≥80).

4. Enrich Data
   - Use web searches to fill missing fields:
     • Company websites
     • LinkedIn pages
     • Recent news/funding announcements
   - Verify phone/email formats and deduplicate across CSVs.

5. Output
   - Produce a **scored & enriched CSV** with new columns:
     • LEAD_SCORE (0–100)
     • LEAD_TIER (Glengarry / Strong / Weak)
     • ICP_MATCH (Yes/Partial/No)
     • ENRICHED_WEBSITE
     • ENRICHED_LINKEDIN
     • NOTES (short justification)
   - Save as: /mnt/data/qualified_leads.csv
   - Provide JSON version for automation workflows.

6. Reporting
   - Print a summary report:
     • Total leads processed
     • Count of Glengarry vs Strong vs Weak
     • Top industries / regions represented
     • Data completion % (emails, phones, websites)

GUARDRAILS
- Never fabricate contact details. If enrichment is not verifiable, leave blank and note “unverified”.
- Respect privacy: use only business/public data (LinkedIn company page, corporate website, press releases).
- Deduplicate by (Company + Contact Name + Email).
- Stop after 10,000 rows processed per run.

STYLE
- Structured, professional, clear.
- No fluff — results should be “sales-ready lists”.
- Always explain why a lead is Glengarry (notes column).

STOP CONDITIONS
- All CSV rows processed
- Hard cap: 10,000 leads per run
- Or user stops run manually

**GPT:** Here are the results of the lead‑quality analysis:

- **CSV processed:** 39 total records.
- **Glengarry leads:** 31  
- **Strong leads:** 8  
- **Weak leads:** 0  
- **Top industries represented:** Business Services (17), Construction (14), Finance (6), Hospitality (1), Media & Internet (1).
- **Top regions:** United States (34 leads), Canada (1), Australia (1) – the remainder were unlabeled.  
- **Data completeness:** 84.6 % of leads have a valid email; 94.9 % have at least one phone number; 100 % have a company website listed.

Each lead received a **0–100 Lead Score** based on job‑title authority, company fit (revenue/size/country), intent signals (funding activity), and data completeness. Leads with a score ≥ 80 were classified as **Glengarry**, 40–79 as **Strong**, and <40 as **Weak**. Missing LinkedIn company pages were left blank and flagged in the NOTES column.

### Download the enriched CSV and JSON
Your enriched and deduplicated datasets are ready:

- CSV with Lead Scores, Tiers, ICP match, and notes: {{file:file-L3DC4Uarf7FxvSyVy2zCdE}}
- JSON version of the same data: {{file:file-AkkF3nqCzQkU9eeQ2K9CoX}}

Let me know if you'd like to adjust scoring weights, refine the ICP criteria, or further enrich any specific records.

**Mike:** Print the leads in the csv file in the chat

**GPT:** Here are all 39 leads from the file, including the computed lead scores and tiers:

| First Name | Last Name | Job Title | Company Name | Email Address | Phone | Lead Score | Lead Tier |
|---|---|---|---|---|---|---|---|
| John | Beale | Owner | Beale Personnel | – | (301) 652‑3554 | 70 | Strong |
| Glenn | Kippan | Owner | Black Dog Mechanical | – | (828) 200‑9396 | 70 | Strong |
| Michael | Read | Broker Owner | Bridgeway Mortgage | mread@bridgewaymortgage.com | (973) 355‑6322 | 80 | Glengarry |
| Shannon | Lynch | Managing Director, Search For Human Resources, Marketing & Sales | Buckingham Search | shannon.lynch@buckinghamsearch.com | (312) 888‑9115 | 98 | Glengarry |
| Otavio | Fonseca | Founder & Principal & Consultant | Daneli Consulting | otavio@daneli.com | – | 70 | Strong |
| Joseph | Haines | Owner | Dassa Haines Architectural Group | jh@dassahaines.com | (973) 233‑9355 | 80 | Glengarry |
| Eric | Woloshyn | Owner | EDW Builders | eric@edwbuilders.com | (215) 968‑5122 | 80 | Glengarry |
| Jared | Pastorius | Owner | Fontanet Weston | jared@fontanetweston.com | (512) 992‑3490 | 80 | Glengarry |
| David | Guenoun | Co‑Founder & Partner | Glide Capital | david@glideplatform.com | (305) 539‑3850 | 80 | Glengarry |
| Mark | Fitzpatrick | Co‑Founder & Partner | Glide Capital | mark@glideplatform.com | (305) 539‑3850 | 80 | Glengarry |
| Cindy | Graham | President & Manager, Office | GT Contracting of the Carolinas | cgraham@gtcofc.com | (980) 447‑9534 | 80 | Glengarry |
| Dennis | Turmel | President | HomeworX Contracting | dturmel@homeworxcontracting.com | (978) 655‑9679 | 80 | Glengarry |
| Terry | Modglin | Owner | IMPACT International | terry@impact-international.net | (202) 466‑3322 | 80 | Glengarry |
| Raul | Lira | Co‑Founder & Creative Director | JL Studio Designs | – | (504) 494‑2580 | 70 | Strong |
| John | Frantz | President | JPF Communications | john@jpfcomm.com | (773) 871‑2600 | 80 | Glengarry |
| Alfred | Darakjian | President | Legacy Tax Advisors | alfred@legacytaxadvisors.com | (770) 985‑5876 | 80 | Glengarry |
| David | Halling | Chief Executive Officer & Owner | Nautilus Investigations | david@nautilusinvestigations.com.au | (305) 232‑9555 | 80 | Glengarry |
| Mark | Fedoruk | President | NDE Consultation Services | mfedoruk@ndecs.com | (410) 876‑8402 | 80 | Glengarry |
| Thomas | Fetto | Owner | New England Marble Restoration | tom@nemarblerestoration.com | (781) 642‑7363 | 80 | Glengarry |
| Cortland | Starrett | Founder | One Fact | cortland.starrett@onefact.net | (765) 237‑3105 | 80 | Glengarry |
| Carolann | Strickling | Chief Executive Officer | Organization INK | carolann@organizationink.com | (413) 528‑7940 | 98 | Glengarry |
| Richard | Overman | Owner | Overman & Parks | ricky@overmancpa.com | (252) 443‑3124 | 80 | Glengarry |
| Jeffrey | Passman | President | Paramount Vending | jeffp@paramountvending.com | (301) 317‑4330 | 80 | Glengarry |
| Amanda | Rozansky | Manager, Marketing | PDQ Restoration | tj.rozansky@pdqrestoration.com | (973) 316‑6014 | 60 | Strong |
| Elizabeth | Baresh | Owner | PDQ Restoration | e.baresh@pdqrestoration.com | (973) 316‑6014 | 80 | Glengarry |
| Peter | McDonald | Owner | PG Promotions | – | (678) 921‑2015 | 70 | Strong |
| Michael | Mackey | Owner | Prominent Home Inspections | mike@prominenthomeinspections.com | (201) 218‑8257 | 80 | Glengarry |
| Raven | White | Owner | raveyrai | raven@raveyrai.com | – | 70 | Strong |
| Danielle | Ruttenberg | Co‑Owner | Remark Glass | – | (267) 909‑9824 | 88 | Glengarry |
| Rebecca | Davies | Co‑Owner | Remark Glass | rebecca@remarkglass.com | (267) 909‑9824 | 98 | Glengarry |
| Mark | Ellis | Co‑Founder | Remark Glass | mark@remarkglass.com | (267) 909‑9824 | 98 | Glengarry |
| Brucker | Stensrud | Co‑Founder & Managing Partner | Resilient Capital Partners | brucker@resilientcappartners.com | (972) 975‑5665 | 80 | Glengarry |
| Steve | Elliott | President | Steve’s Door Service | steve@stevesdoorservice.com | (219) 406‑5663 | 98 | Glengarry |
| Jeffrey | MacAdam | Founder & Managing Partner | The Bridlebrook Group | jeff@bridlebrookgroup.com | (610) 325‑7066 | 98 | Glengarry |
| efran | schandall | Founder & Managing Partner | The Bridlebrook Group | efranschandall@zoomhubs.com | (610) 325‑7066 | 98 | Glengarry |
| Jorge | Prado | Founder & Chief Executive Officer | The FastMind | jorge@thefastmind.com | (954) 306‑3334 | 80 | Glengarry |
| David | Goldblatt | Owner | Touch of Gold Seamless Gutters | – | (732) 363‑0306 | 70 | Strong |
| Brandy | Arnett | Founder & Chief Executive Officer | Vibrandt Websites | brandy@vibrandtweb.com | (225) 502‑8317 | 80 | Glengarry |
| John | Hutson | Business Owner | WaterTite Exteriors | john@watertiteexteriors.com | (678) 597‑8493 | 80 | Glengarry |

Legend: “–” indicates that an email or phone number was not available in the data.

**Mike:** Run the prompt for the uploaded csv file .
