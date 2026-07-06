---
title: "Crate digging workflow"
date: 2025-09-06
cluster: "Misc / Uncategorized"
messages: 111
source: chatgpt-export conversations.json (FULL transcript)
---

# Crate digging workflow

> 111 messages · 2025-09-06 · cluster: Misc / Uncategorized

**Semantic neighbors:** [[Using ZoomInfo for B2B]] · [[Competitor list provided]] · [[Crate digging automation]] · [[Track analysis process]]

## Transcript

**Mike:** Role: Autonomous Crate Digger Agent

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

**GPT:** Here are the deliverables from the recursive crate‑digging mission.  I parsed the seed CSV to establish a “fingerprint” centred on early‑1970s jazz‑funk, soul and library music, then built search query packs around genre/year, label, artist and region adjacency.  Through multi‑source digging I found rare Italian library cuts, UK/De Wolfe/KPM cues, Brazilian funk 45s, Afro‑beat gems and U.S. jazz‑funk grooves.  Each candidate’s metadata, scores and notes are documented and supported by at least two citations (from Discogs, WhoSampled, InSheepsClothing, The Vinyl Factory, etc.).

### Top 25 high‑potential finds
The top‑25 list focuses on tracks with the strongest stylistic overlap and sample‑readiness.  Notable standouts include Remigio Ducros’ **“Pop‑Paraphrenia”** (lush horns and swirling synths【813369323817876†L59-L63】), Franco Chiari’s **“Rio Tu Ed Io”** (haunting synth melody【813369323817876†L75-L78】), Gabriele Ducros’ **“Metropolis Notte”** (smooth, seductive beat and horns【813369323817876†L80-L83】) and 2001 & Beto’s Brazilian funk grail **“Labirinto”**.  UK library classics like John Cameron’s **“49th Street Shakedown”** deliver percussion‑heavy action themes【966541438622701†L231-L239】, while Lafayette Afro Rock Band’s **“Darkest Light”** provides one of the most sampled horn breaks on record【28776614279097†L47-L50】.  Full details (artist, year, label, region, scores, notes and citations) are provided in the CSV.

### Extended list (55 tracks)
An extended list of 55 tracks includes all candidates from Italian library albums, UK/De Wolfe and KPM catalogues, the full Brasileiro Treasure Box of Funk & Soul, the Africafunk compilation and the Pulp Fusion set.  These selections broaden the stylistic palette while maintaining a close match to the fingerprint.  Sample‑potential scores are calibrated (1–10) based on loopability (isolated drum breaks, Rhodes or horn stabs) and historical sampling popularity, while similarity scores (0–1) measure closeness to the seed crate’s genres/years.  Rarity scores consider marketplace scarcity and blog coverage.

### Cross‑reference tree
The cross‑reference JSON maps each new find to any artist overlaps with the seed crate.  It shows whether artists like Fela Kuti, Mulatu Astatke, Azymuth, Tom Zé or The Blackbyrds already appear in the seed dataset, helping prioritise familiar but still sample‑worthy material.

### Sources index
A source index summarises domain usage across all citations (e.g., Discogs, InSheepsClothing, The Vinyl Factory, Music Is My Sanctuary, WhoSampled, etc.), ensuring transparency about where evidence was gathered.

You can download the deliverables below:

- **Top 25 high‑potential candidates (CSV)**: {{file:file-K2hiq3HCKGu6ZQuJStwSRe}}
- **Extended list of candidates (CSV)**: {{file:file-VukFz3JbZDeawbh8y3xiZL}}
- **Cross‑reference tree (JSON)**: {{file:file-3Bj2xto7HEsfiLxxBuRrBV}}
- **Sources index (JSON)**: {{file:file-5ACcTrJkr5tapRgFuvhfBB}}

These files provide a structured, citation‑backed dataset that should accelerate crate digging and sampling exploration.
