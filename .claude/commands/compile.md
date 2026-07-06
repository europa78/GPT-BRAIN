---
description: Nightly compile — fold new raw/ material into the wiki (run on a cheap model)
---
Read CLAUDE.md and INDEX.md. Then:
1. `git status` + `git log --since=yesterday --stat` to find raw/ files added or
   session notes written since the last compile.
2. For each new raw file: update the relevant entities/ and concepts/ pages
   (update, don't duplicate; one lesson per file; delete what's now wrong).
3. Add `sources:` paths for every claim. Ship every change as a diff.
4. Append one dated line to `raw/compile-log.md` summarizing what changed.
5. Never touch raw/ content. Commit with message "compile: <date>".
