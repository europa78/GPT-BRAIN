---
type: concept
status: compiled
compiled: 2026-07-06
sources:
  - raw/chatgpt/audio/2024-12-07--reaper.md
  - raw/chatgpt/misc/2025-06-25--clay-enrichment-assistance.md
  - raw/chatgpt/agents/2025-10-01--hood-cleaning-invoice-agent.md
  - raw/chatgpt/audio/2025-11-27--audio-software-development.md
---
# Role-Task Prompting
> One-liner: Mike's signature session-opening pattern — `role: <expert>. task: <answer questions about X when asked>` — adopted deliberately in Dec 2024 after testing whether role-priming raises quality, then used to open nearly every working session since.

## Origin (2024-12-07, the Reaper thread)
Mike asked directly: *"Is putting you in a 'role' conducive to higher quality responses?"* — confirmed yes → immediately instantiated "expert audio engineer specializing in Reaper". From then on the pattern is everywhere.

## The template
```
role: <domain> expert.
task: answer questions related to <domain> when asked[, and <do specific things> when asked].
```
Observed instances: Clay enrichment expert (2025-06), NFPA-96 hood-cleaning expert (2025-10), senior audio software developer (2025-11), Instagram expert (2025-06), digital-marketing senior analyst (2025-09), Harvard/Yale prompt engineer (2026-01).

## Refinements that recurred
- **Escalating credentials** for higher-stakes asks ("highest intellect… attended Harvard and Yale") — the [[Proposal Factory]] master-prompt thread.
- Role + task + *first question* in one message to skip pleasantries.
- Prompt-optimization meta-loops: draft prompt → ask model to optimize it → run optimized version ([[Agent Mode Prospecting]] prompts, sampler build prompt in [[Browser Audio Architecture]]).

## Links
[[Prediction Model Prompting]] · [[Agent Loop Design]] · [[REAPER]].
