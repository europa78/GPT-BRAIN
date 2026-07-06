---
description: Weekly lint — hunt contradictions, duplicates, dead links (cheap model)
---
Read INDEX.md, then:
1. Broken links: script-scan all [[wikilinks]] in entities/ and concepts/ against
   existing page titles; list and fix every dead link.
2. Duplicates: find pages whose titles or one-liners overlap heavily; merge them
   (keep the older filename, redirect links).
3. Contradictions: for each entity, check pages that cite it for conflicting
   claims; flag conflicts in a `## Disputed` section on the page with both sources.
4. Staleness: list pages whose `expires:` has passed or whose newest source is
   >6 months old and topic is AI-tooling; mark `status: stale`.
5. INDEX.md: regenerate so it exactly matches the pages on disk.
Ship everything as diffs. Commit "lint: <date>".
