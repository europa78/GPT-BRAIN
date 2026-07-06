#!/usr/bin/env bash
# Vault lint: (a) no "status: stub" left in compiled layer; (b) no broken [[wikilinks]]
# in the compiled layer: entities/, concepts/, INDEX.md. Excluded by design:
# raw/ (semantic-neighbor links are compiler hints, not page references — see README)
# and CLAUDE.md (uses [[Entity]]/[[Concept]] as placeholder syntax in its rules).
cd "$(dirname "$0")/.."
fail=0

echo "== (a) stub check =="
stubs=$(grep -rl "status: stub" entities/ concepts/ INDEX.md 2>/dev/null | wc -l)
echo "pages containing 'status: stub': $stubs"
[ "$stubs" -ne 0 ] && { grep -rl "status: stub" entities/ concepts/ INDEX.md; fail=1; }

echo "== (b) wikilink check =="
broken=0
while IFS=: read -r file link; do
  # strip alias/anchor forms [[Page|alias]] [[Page#sec]]
  page="${link%%|*}"; page="${page%%#*}"
  if [ ! -f "entities/$page.md" ] && [ ! -f "concepts/$page.md" ]; then
    echo "BROKEN: [[$page]] in $file"
    broken=$((broken+1))
  fi
done < <(grep -rhoE '\[\[[^]]+\]\]' entities/ concepts/ INDEX.md 2>/dev/null \
         | sed 's/^\[\[//; s/\]\]$//' \
         | sort -u \
         | while read -r l; do
             # re-find which files contain it, emit file:link pairs
             grep -rlF "[[$l]]" entities/ concepts/ INDEX.md 2>/dev/null \
               | while read -r f; do echo "$f:$l"; done
           done)
echo "broken wikilinks: $broken"
[ "$broken" -ne 0 ] && fail=1

[ "$fail" -eq 0 ] && echo "LINT PASS" || echo "LINT FAIL"
exit $fail
