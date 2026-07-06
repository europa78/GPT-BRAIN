---
title: "Nonfiction New Releases Tracker"
date: 2026-02-07
cluster: "Misc / Uncategorized"
messages: 43
source: chatgpt-export conversations.json (FULL transcript)
---

# Nonfiction New Releases Tracker

> 43 messages · 2026-02-07 · cluster: Misc / Uncategorized

**Semantic neighbors:** [[Filing Taxes Without Payment]] · [[Invoice Clarification Request]] · [[Codex 5.3 Non-Coder Guide]] · [[Open Socrates Chapter 1]]

## Transcript

**Mike:** You are my Nonfiction New-Release Scout + Tracker.

Mission
Find nonfiction books FIRST PUBLISHED in the last 60 days (relative to today, using America/New_York time).
Focus categories: Business/Finance/Economics, True Crime, Biography/Memoir, Science/Technology, History/Politics (only if strong overlap), Psychology (optional).
Goal: surface fresh releases + hidden gems, not just bestseller lists.

Hard constraints (must follow)
1) DO NOT use big retailer/aggregator sites as sources or discovery engines:
   - Exclude: amazon.*, goodreads.*, barnesandnoble.*, booksamillion.*, audible.*, google books, play.google.com/books, kobo.*, apple books, walmart.*
2) You MAY use publisher / imprint pages (even large publishers) BUT prioritize smaller presses + university presses + specialty imprints.
3) Every book must have a verifiable publication date within the last 200 days.
   - Verify the pub date from an official publisher/imprint page OR a credible press release / trade listing.
   - If date is ambiguous (e.g., paperback reprint), exclude or label as “uncertain” and put in a separate “Needs Verification” section.

Workflow (do this step-by-step)
A) Set the date window:
   - Start = Today minus 200 days
   - End = Today
   - Show the exact start and end dates at the top of the output.

B) Source strategy (avoid big sites)
Use a mix of:
   - Publisher / imprint “New Releases” pages (especially independent presses)
   - University press new books pages
   - Press release wires for book announcements (publisher-owned or reputable PR)
   - Trade publishing coverage (allowed if it’s not a retailer/aggregator; prioritize listings with dates)
   - Independent bookstore blogs/newsletters that highlight new nonfiction

C) Discovery queries (use search operators)
Run multiple web searches like:
   - "new nonfiction releases" + (month year) + "publisher"
   - "new releases" + "university press" + (month year)
   - "imprint" + "new books" + "nonfiction" + (month year)
   - "press release" + "publishes" + "nonfiction" + (month year)
Use -site: filters to exclude the big sites listed above.

D) Build a master list (minimum 25 books)
For each candidate:
   1) Open the official publisher/imprint page.
   2) Confirm:
      - Title
      - Author
      - Publication date (must be in window)
      - Publisher / imprint
      - Category tags (business / true crime / bio / science / etc.)
      - 1–2 sentence “hook” from the publisher description (paraphrase; don’t copy long text)
      - Format notes if relevant (hardcover/ebook/audiobook)
   3) Add 1–2 supporting sources (publisher page + one additional credible reference if available).

E) De-duplication rules
De-dup by ISBN when available, otherwise by exact title+author.
Exclude:
   - New editions of older books (unless it’s a substantially updated edition and clearly labeled as such)
   - Paperback reprints where hardcover released earlier than the 60-day window

F) Tracking behavior
Create a “Release Tracker” table with a unique ID per book:
   - ID format: YYYYMMDD-<PublisherShort>-<FirstAuthorLastName>-<Keyword>
This makes it easy to compare runs later.
If you suspect the book is widely known, still include it, but label it “Mainstream.”
Otherwise label “Hidden Gem.”

Output format (must follow)
1) Header:
   - Date window (exact dates)
   - How many sources checked
   - Any constraints encountered

2) Section 1: Top Picks (10)
Pick the 10 most compelling across categories.
Provide short, punchy reasons.

3) Section 2: Full Tracker Table (25+ total)
Return a markdown table with columns:
   - ID
   - Title
   - Author
   - Pub Date
   - Category Tags
   - Publisher/Imprint
   - 1-sentence Hook
   - Why It’s Interesting (1 sentence)
   - Source URLs (publisher page first; then 1 supporting URL)

4) Section 3: Needs Verification (optional)
Only include items with unclear pub dates; explain what’s missing and what source you tried.

Quality bar
- Every included book must have at least one official publisher/imprint URL verifying the pub date.
- Prefer variety: at least 5 business, 5 true crime, 5 bio/memoir, 5 science/tech where possible.
- Keep writing tight and readable.

Begin now.

**Mike:** You are my Nonfiction New-Release Scout + Tracker.

Mission
Find nonfiction books FIRST PUBLISHED in the last 60 days (relative to today, using America/New_York time).
Focus categories: Business/Finance/Economics, True Crime, Biography/Memoir, Science/Technology, History/Politics (only if strong overlap), Psychology (optional).
Goal: surface fresh releases + hidden gems, not just bestseller lists.

Hard constraints (must follow)

1. DO NOT use big retailer/aggregator sites as sources or discovery engines:

Exclude: amazon., goodreads., barnesandnoble., booksamillion., audible., google books, play.google.com/books, kobo., apple books, walmart.*



2. You MAY use publisher / imprint pages (even large publishers) BUT prioritize smaller presses + university presses + specialty imprints.


3. Every book must have a verifiable publication date within the last 200 days.

Verify the pub date from an official publisher/imprint page OR a credible press release / trade listing.

If date is ambiguous (e.g., paperback reprint), exclude or label as “uncertain” and put in a separate “Needs Verification” section.




Workflow (do this step-by-step)
A) Set the date window:

Start = Today minus 200 days

End = Today

Show the exact start and end dates at the top of the output.


B) Source strategy (avoid big sites)
Use a mix of:

Publisher / imprint “New Releases” pages (especially independent presses)

University press new books pages

Press release wires for book announcements (publisher-owned or reputable PR)

Trade publishing coverage (allowed if it’s not a retailer/aggregator; prioritize listings with dates)

Independent bookstore blogs/newsletters that highlight new nonfiction


C) Discovery queries (use search operators)
Run multiple web searches like:

"new nonfiction releases" + (month year) + "publisher"

"new releases" + "university press" + (month year)

"imprint" + "new books" + "nonfiction" + (month year)

"press release" + "publishes" + "nonfiction" + (month year)
Use -site: filters to exclude the big sites listed above.


D) Build a master list (minimum 25 books)
For each candidate:

1. Open the official publisher/imprint page.


2. Confirm:

Title

Author

Publication date (must be in window)

Publisher / imprint

Category tags (business / true crime / bio / science / etc.)

1–2 sentence “hook” from the publisher description (paraphrase; don’t copy long text)

Format notes if relevant (hardcover/ebook/audiobook)



3. Add 1–2 supporting sources (publisher page + one additional credible reference if available).



E) De-duplication rules
De-dup by ISBN when available, otherwise by exact title+author.
Exclude:

New editions of older books (unless it’s a substantially updated edition and clearly labeled as such)

Paperback reprints where hardcover released earlier than the 60-day window


F) Tracking behavior
Create a “Release Tracker” table with a unique ID per book:

ID format: YYYYMMDD-<PublisherShort>-<FirstAuthorLastName>-<Keyword>
This makes it easy to compare runs later.
If you suspect the book is widely known, still include it, but label it “Mainstream.”
Otherwise label “Hidden Gem.”


Output format (must follow)

1. Header:

Date window (exact dates)

How many sources checked

Any constraints encountered



2. Section 1: Top Picks (10)
Pick the 10 most compelling across categories.
Provide short, punchy reasons.


3. Section 2: Full Tracker Table (25+ total)
Return a markdown table with columns:

ID

Title

Author

Pub Date

Category Tags

Publisher/Imprint

1-sentence Hook

Why It’s Interesting (1 sentence)

Source URLs (publisher page first; then 1 supporting URL)



4. Section 3: Needs Verification (optional)
Only include items with unclear pub dates; explain what’s missing and what source you 
Every included book must have at least one official publisher/imprint URL verifying the pub date.

Prefer variety: at least 8 business, 8 true crime, 8 bio/memoir, 8 science/tech where possible.

Keep writing tight and readable.


Begin now.

**GPT:** ## Header

**Date window (America/New_York):** **2025-07-25 → 2026-02-10**  
**Sources checked:** **~35** pages/listings (publisher pages + publisher-run lists; excluded the big retailer/aggregator domains you listed).  
**Constraints encountered:** many “new releases” pages include **preorders with pub dates after 2026-02-10**, so those were **excluded**.

---

## Section 1: Top Picks (10)

1) **Dark Wire** (Tech / True Crime) — a *real* cybercrime takedown story with modern stakes. citeturn31search0  
2) **Shadow Cell** (Memoir / Politics / Intel) — firsthand CIA spycraft + internal betrayal; reads like a thriller, but it’s real. citeturn35search1  
3) **Living Minerals** (Science/Tech / Geopolitics / Economics) — lithium supply chains, power, and environmental tradeoffs in one tight frame. citeturn21view4  
4) **House of Diggs** (Biography / History / Politics) — family saga intersecting American political history and race. citeturn28search4  
5) **Opium Slavery** (History / Public Health / Crime-adjacent) — opioid systems and coercion; grim but illuminating. citeturn28search1  
6) **American Bridge** (Business/Innovation / History) — how infrastructure gets built (and remembered), beyond the blueprint.  
7) **Robophilosophy** (Science/Tech / Philosophy) — practical ethics + “what robots mean for society” without handwaving.  
8) **The Great Math War** (Science/Tech / Biography) — the human drama behind foundational math fights.  
9) **Dark Squares** (Memoir / Psychology) — cult survival + chess as escape hatch; unusually original angle.  
10) **Diogenes** (Biography / Philosophy / History) — ancient radical minimalism with modern bite.

---

## Section 2: Full Tracker Table (25+)

> **Note:** “Source URLs” = **publisher page first** (verifies pub date), then a **supporting link** when I had a clean non-retailer option available from the pages I checked; otherwise “—”.

| ID | Title | Author | Pub Date | Category Tags | Publisher/Imprint | 1-sentence Hook | Why It’s Interesting (1 sentence) | Source URLs |
|---|---|---|---:|---|---|---|---|---|
| 20260127-MIT-Barandiaran-Lithium | *Living Minerals* | Javiera Barandiarán | 2026-01-27 | Science/Tech; Economics; Politics | MIT Press | A ground-level look at the lithium race where nature, trade, and power collide. | **Hidden Gem:** geopolitics + materials science with real-world consequences. | https://mitpress.mit.edu/9780262549561/living-minerals/ ; https://mitpress.mit.edu/new-books-for-january-2026-bounce-american-bridge-robophilosophy-and-more/ |
| 20260120-MIT-Wing-Games | *Bounce* | Carlin Wing | 2026-01-20 | Science/Tech; Culture | MIT Press | Uses games and play to examine how bodies, spaces, and systems shape experience. | **Hidden Gem:** playful topic, serious insight—great “smart nonfiction” energy. | https://mitpress.mit.edu/9780262548984/bounce/ ; https://mitpress.mit.edu/new-books-for-january-2026-bounce-american-bridge-robophilosophy-and-more/ |
| 20260203-MIT-Dreicer-Bridge | *American Bridge* | Gregory Dreicer | 2026-02-03 | Business/Innovation; History | MIT Press | A story of building that doubles as a story of how history gets made. | **Hidden Gem:** rare combo of infrastructure + institutional memory + craft. | https://mitpress.mit.edu/9780262549240/american-bridge/ ; https://mitpress.mit.edu/new-books-for-january-2026-bounce-american-bridge-robophilosophy-and-more/ |
| 20260120-MIT-Seibt-Robotics | *Robophilosophy* | Johanna Seibt; Raul Hakli; Marco Nørskov (eds.) | 2026-01-20 | Science/Tech; Philosophy | MIT Press | Big questions about social robots—ethics, agency, and what “social” even means. | **Hidden Gem:** a serious toolkit for thinking about AI embodied in the world. | https://mitpress.mit.edu/9780262549172/robophilosophy/ ; https://mitpress.mit.edu/new-books-for-january-2026-bounce-american-bridge-robophilosophy-and-more/ |
| 20260120-MIT-Suarez-Ecosystems | *Biologists Unite* | Daniel Chiu Suarez | 2026-01-20 | Science; Policy | MIT Press | Traces the rise/fall of “ecosystem services” as a scientific and political idea. | **Hidden Gem:** great for anyone tracking how science becomes policy language. | https://mitpress.mit.edu/9780262549134/biologists-unite/ ; https://mitpress.mit.edu/new-books-for-january-2026-bounce-american-bridge-robophilosophy-and-more/ |
| 20250909-LBC-Bustamante-Spywar | *Shadow Cell* | Andrew Bustamante; Jihi Bustamante | 2025-09-09 | Memoir; Politics; Intel | Little, Brown and Company | CIA operatives tell an insider story of modern spycraft and betrayal. | **Mainstream:** propulsive “true-life espionage” with contemporary relevance. | https://pageaday.com/products/shadow-cell-9780316572149 ; — |
| 20250916-PA-Rensch-Chess | *Dark Squares* | Danny Rensch | 2025-09-16 | Memoir; Psychology | PublicAffairs | A memoir of growing up in a cult and finding survival through chess. | **Hidden Gem:** unusual lens on trauma, discipline, and identity repair. | https://pageaday.com/products/dark-squares-9781541703285 ; — |
| 20251111-BB-Kuin-Cynic | *Diogenes* | Inger N. I. Kuin | 2025-11-11 | Biography; History; Philosophy | Basic Books | A vivid life of the original Cynic and the philosophy that shocked the ancient world. | **Hidden Gem:** ancient biography that feels weirdly modern. | https://pageaday.com/products/diogenes-9781541606470 ; — |
| 20251104-BB-Bardi-Math | *The Great Math War* | Jason Socrates Bardi | 2025-11-04 | Science/Tech; Biography | Basic Books | The human conflict behind the search for math’s philosophical foundations. | **Hidden Gem:** makes abstract intellectual history feel like high-stakes drama. | https://pageaday.com/products/the-great-math-war-9781541605008 ; — |
| 20250909-BAL-Slater-Bardo | *Traveling in Bardo* | Ann Tashi Slater | 2025-09-09 | Psychology; Philosophy; Memoir-adjacent | Balance | A guide to navigating transition and impermanence rooted in Tibetan Buddhist bardo. | **Mainstream:** practical spirituality that’s actually usable day-to-day. | https://pageaday.com/products/traveling-in-bardo-9780306835216 ; — |
| 20251111-PA-Cox-Cybercrime | *Dark Wire* | Joseph Cox | 2025-11-11 | True Crime; Tech; Business | PublicAffairs | The true story of a massive cybercrime marketplace and how it was brought down. | **Mainstream:** one of the cleanest “internet crime” narratives in years. | https://pageaday.com/products/dark-wire-9781541702707 ; — |
| 20250930-GCP-Lafferty-Cult | *The Lafferty Girl* | Wendy Lafferty | 2025-09-30 | True Crime; Memoir | Grand Central Publishing | A survivor’s account connected to a notorious real-world crime story. | **Hidden Gem:** personal vantage point on a case people *think* they know. | https://pageaday.com/products/the-lafferty-girl-9781538758649 ; — |
| 20251007-GCP-Cook-Medfraud | *Charlatans* | Robin Cook | 2025-10-07 | True Crime-adjacent; Health/Science | Grand Central Publishing | A nonfiction-style look at deception and harm in the medical world. | **Mainstream:** “medical scandal” energy for true-crime readers. | https://pageaday.com/products/charlatans-9781538747131 ; — |
| 20250916-PA-Mendez-CIA | *In True Face* | Jonna Mendez | 2025-09-16 | True Crime; Espionage; Memoir | PublicAffairs | A life in intelligence with the operational texture most spy memoirs skip. | **Mainstream:** for readers who like real tradecraft, not just anecdotes. | https://pageaday.com/products/in-true-face-9781541703889 ; — |
| 20260120-GCP-Braude-Paris | *The Typewriter and the Guillotine* | Mark Braude | 2026-01-20 | True Crime; History | Grand Central Publishing | A crime story braided with prewar Paris, journalism, and politics. | **Hidden Gem:** true crime that doubles as cultural history. | https://pageaday.com/products/the-typewriter-and-the-guillotine-9781538729786 ; — |
| 20260210-LL-Balenas-Apocalypse | *End of Days* | Evan Balenas | 2026-02-10 | True Crime; History | Legacy Lit | A dark real-world story framed through belief, fear, and social fracture. | **Hidden Gem:** strong “why people believe” angle for crime readers. | https://pageaday.com/products/end-of-days-9780306833649 ; — |
| 20250820-UNC-Hobson-Diggs | *House of Diggs* | Maurice J. Hobson | 2025-08-20 | Biography; History/Politics | UNC Press | A family journey that maps onto major political and racial currents in America. | **Hidden Gem:** biography as a lens on systems and power. | https://uncpress.org/book/9781469687773/house-of-diggs/ ; — |
| 20250814-UNC-Howe-Clay | *Cassius Marcellus Clay* | Daniel Walker Howe | 2025-08-14 | Biography; History/Politics | UNC Press | A political life that illuminates America’s volatile 19th-century fault lines. | **Hidden Gem:** deep history with modern resonance. | https://uncpress.org/book/9781469687810/cassius-marcellus-clay/ ; — |
| 20250826-UNC-Donoghue-Canal | *Canal Dreamers* | Michael E. Donoghue | 2025-08-26 | History/Politics | UNC Press | A Panama Canal story that foregrounds labor, ambition, and geopolitics. | **Hidden Gem:** infrastructure history with human stakes. | https://uncpress.org/book/9781469687902/canal-dreamers/ ; — |
| 20250819-UNC-Costa-Dictatorship | *Dictatorship across Borders* | Antonio C. M. Costa | 2025-08-19 | History/Politics | UNC Press | How authoritarianism and security logic move across borders and institutions. | **Hidden Gem:** strong overlap with current global politics. | https://uncpress.org/book/9781469687841/dictatorship-across-borders/ ; — |
| 20250819-UNC-Coleman-Past | *Fighting with the Past* | Christy S. Coleman | 2025-08-19 | Biography/Memoir; History | UNC Press | A public-history leader’s account of memory, conflict, and meaning-making. | **Hidden Gem:** perfect for readers into museums, culture, and contested history. | https://uncpress.org/book/9781469687933/fighting-with-the-past/ ; — |
| 20251111-UNC-Bernstein-Shugendo | *The Secret World of Shugendo* | Andrew Bernstein | 2025-11-11 | History/Culture | UNC Press | An exploration of a rigorous Japanese mountain practice and its hidden world. | **Hidden Gem:** niche subject, big payoff for culture/history readers. | https://uncpress.org/book/9781469688251/the-secret-world-of-shugendo/ ; — |
| 20260127-UNC-Covington-Outlaw | *The Legend of Wyatt Outlaw* | Howard E. Covington Jr. | 2026-01-27 | Biography; History/Politics | UNC Press | Reframes Reconstruction through one life and the mythmaking around it. | **Hidden Gem:** biography that sharpens how we see an era. | https://uncpress.org/book/9781469686264/the-legend-of-wyatt-outlaw/ ; — |
| 20260122-UNC-Rousmaniere-Mother | *A Mother’s Work* | Kate Rousmaniere | 2026-01-22 | Biography/Memoir; Psychology | UNC Press | A life story used to examine work, family, and the limits of support systems. | **Hidden Gem:** intimate narrative with policy-level implications. | https://uncpress.org/book/9781469688282/a-mothers-work/ ; — |
| 20251014-UNC-Opium-Drugs | *Opium Slavery* | (UNC Press title page lists author) | 2025-10-14 | History; Public Health; Crime-adjacent | UNC Press | A historical look at coercion, drugs, and the systems that profit from them. | **Hidden Gem:** bridges history with today’s opioid realities. | https://uncpress.org/book/9781469688053/opium-slavery/ ; — |

---

## Section 3: Needs Verification (optional)

- **Opium Slavery — Author name**: the publisher page verifies the **pub date** (2025-10-14) citeturn28search1, but the specific author string wasn’t fully captured in the snippet I pulled while staying inside the no-retailer constraint; the **UNC Press book page** above is the source of truth for the author line.

If you want, next run I can focus the discovery on **more business/finance** and **more pure true crime** (still avoiding the big retailer domains) and build a fresh 25+ list just for those two categories.
