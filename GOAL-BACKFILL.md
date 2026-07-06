# /goal — Backfill compile pass

Paste this into Claude Code (run from the vault root) as a /goal.
The judge only sees the conversation, so every claim below demands pasted proof.

---

GOAL: Compile the vault's entity and concept layer from raw/chatgpt/.

DONE means ALL of the following, with proof pasted into the conversation:

1. Every stub in entities/ and concepts/ (currently 13 pages marked
   "status: stub") is upgraded to "status: compiled", and for each one you
   have pasted the full diff of the change into the conversation.

2. At least 15 NEW pages exist (entities or concepts) that were discovered
   from raw/, not seeded — e.g. recurring clients (Mr. Hood Repair, The Rucco
   Group, Incredibowl, BeeSearchable, Datasys, NexCore), tools (ZoomInfo,
   SalesLoft, Clay, GHL, Alpha Vantage, Stable Audio, REAPER), and recurring
   workflows. Paste each new page's full content as proof.

3. Every compiled page has:
   - a one-line summary as the first line under the title
   - a `sources:` frontmatter list with at least 2 real raw/ file paths
     (verify each path exists with ls and paste the output)
   - at least 3 [[wikilinks]] to other pages that exist
   - a `compiled: <today's date>` field

4. INDEX.md is regenerated: every entities/ and concepts/ page listed with
   its one-liner, no stubs remaining, no dead entries. Paste the full new
   INDEX.md as proof.

5. A lint check passes and its output is pasted: a grep proving
   (a) zero pages contain the string "status: stub",
   (b) zero [[wikilinks]] point to nonexistent pages (write a small script,
       run it, paste the output showing 0 broken links).

RULES:
- Never modify anything under raw/. Verify with `git status` (paste output)
  that no raw/ file changed.
- Message previews in raw/ are truncated (~280 chars). Where evidence is
  thin, write `confidence: preview-only` on the claim instead of elaborating.
- Update existing pages instead of creating near-duplicates. Before creating
  any page, grep entities/ and concepts/ for the name.
- Work cluster by cluster in this order: stb, mpwr, audio, agents, prospect,
  prompt, stock, finance, dev, writing, misc.

STOP CLAUSE: If after processing all clusters fewer than 15 new pages
emerged, stop and report what was found rather than padding with weak pages.
