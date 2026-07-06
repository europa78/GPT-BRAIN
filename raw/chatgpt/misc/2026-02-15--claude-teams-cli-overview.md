---
title: "Claude Teams CLI Overview"
date: 2026-02-15
cluster: "Misc / Uncategorized"
messages: 2
source: chatgpt-export conversations.json (FULL transcript)
---

# Claude Teams CLI Overview

> 2 messages · 2026-02-15 · cluster: Misc / Uncategorized

**Semantic neighbors:** [[Open Socrates Chapter 1]] · [[Codex Output Explanation]] · [[LinkedIn Message to Techstars]] · [[Recreating LinkedIn Post]]

## Transcript

**Mike:** Explain Claude teams.  How do I use it in the command line including overview , setup (this config, version) sessions(start up , management shut down) and skills .

**GPT:** Below is a **practical operator-level guide** to **Claude Teams + Claude Code CLI workflow** — the way developers actually run it day-to-day (not marketing docs).

---

# 1) What *Claude Teams* actually is
**Claude Teams** = a shared workspace layer on top of Anthropic models that adds:

| Capability | Why it matters |
|---|---|
| Shared usage billing | one org pays for everyone |
| Centralized API keys | no personal keys floating around |
| Permissioned access | control who can run code / tools |
| Shared prompt libraries | reusable workflows across team |
| Long-context collaboration | persistent project memory |
| Audit logs | see who ran what code |
| Tool & MCP integrations | connect repos, dbs, services |

Think of it like:

> GitHub Organization + Slack + AI agents + terminal copilots in one workspace

You don’t “run Teams” — you authenticate your local CLI into a workspace.

---

# 2) Architecture (important to understand before CLI)

```
Claude Desktop / Web UI
        │
Claude Teams Workspace (identity + permissions)
        │
Claude API
        │
Claude Code CLI  ← you run this locally
        │
Your repo / shell / tools
```

So the CLI is **not a separate product** — it is a client authenticated into Teams.

---

# 3) Installing the Claude CLI

Anthropic ships a terminal agent commonly called **Claude Code**.

## Requirements
- Node 18+
- Git
- macOS / Linux / WSL recommended (Windows native works but WSL better)

---

## Install

```bash
npm install -g @anthropic-ai/claude-code
```

Verify:

```bash
claude --version
```

You should see something like:

```
claude-code v1.x.x
```

---

# 4) Logging into a Teams workspace

You DO NOT paste API keys manually anymore (unless scripting CI).

You authenticate to the workspace:

```bash
claude login
```

Browser opens → choose organization → done.

Now your terminal has:

```
~/.claude/
    credentials.json
    org.json
```

This binds your CLI to the team billing + permissions.

---

# 5) Core CLI Modes

There are **three operational modes**.

---

## A) Interactive Session (most important)

Start inside a project folder:

```bash
cd myproject
claude
```

This launches a persistent agent session.

You now have a **stateful coding agent**.

Example:

```
> analyze this repo
> fix all typescript errors
> add authentication middleware
> run the tests and repair failures
```

Claude will:
- read files
- write files
- run shell commands
- remember context

This is NOT stateless chat — it is a live environment.

---

## B) Single-shot command

Good for scripts or CI:

```bash
claude run "summarize this codebase"
```

---

## C) Non-interactive pipeline usage

```bash
echo "refactor this file" | claude run
```

---

# 6) Sessions (very important concept)

Claude CLI sessions behave like **tmux + agent memory**.

Each project gets memory stored locally:

```
.claude/session.json
.claude/embeddings.db
.claude/history/
```

So when you reopen:

```bash
claude
```

It remembers previous work.

---

## Managing sessions

### Show session info
```
/status
```

### Clear memory
```
/reset
```

### Save snapshot
```
/checkpoint "before major refactor"
```

### Restore snapshot
```
/restore before major refactor
```

### Exit
```
/exit
```

No background daemon — session ends when process ends.

---

# 7) Permissions (Teams feature)

Your org controls what Claude can do.

Inside session:

```
/permissions
```

You may see:

```
Filesystem: allowed
Shell: ask
Network: blocked
Git: allowed
```

Admins configure this in the Teams dashboard.

---

# 8) Tool Use (the real power)

Claude CLI is an **agent**, not autocomplete.

It has built-in tools:

| Tool | What it does |
|---|---|
| filesystem | read/write files |
| shell | run commands |
| git | commit / branch |
| tests | execute suites |
| search | semantic repo search |

You can watch tool calls live:

```
Claude: Running tests...
Claude: Editing src/auth.ts...
Claude: Creating migration...
```

---

# 9) Skills (Reusable workflows)

Skills = saved procedures the team shares.

Think:
> prompts that act like commands

Example skill:

```
skill: ship-feature
- run tests
- lint
- update version
- write changelog
- commit
```

Run it:

```
/skill ship-feature
```

Teams can store them centrally so everyone runs identical processes.

---

## Creating a local skill

Create:

```
.claude/skills/refactor.md
```

Example:

```
When invoked:
1) analyze project
2) find dead code
3) remove unused exports
4) update imports
5) run tests
```

Run:

```
/skill refactor
```

---

# 10) Configuration

Global config:

```
~/.claude/config.json
```

Project config:

```
.claude/config.json
```

Example:

```json
{
  "model": "claude-3-7-sonnet",
  "autoRun": true,
  "permissions": {
    "shell": "ask",
    "git": "allow"
  }
}
```

Teams policies override this.

---

# 11) Model selection

Switch model:

```
/model
```

Or config:

```json
{
  "model": "claude-opus"
}
```

Typical usage:

| Model | Usage |
|---|---|
| Haiku | quick scripts |
| Sonnet | daily dev |
| Opus | architecture + debugging |

---

# 12) CI usage (Teams recommended flow)

Create a team service key (not personal key):

Then:

```bash
export ANTHROPIC_API_KEY=team_service_key
claude run "review this PR"
```

---

# 13) Typical daily workflow (realistic)

```
git pull
claude

> what changed since yesterday
> finish implementing webhook retries
> run the test suite and fix failures
> commit clean changes
```

You are basically pairing with an autonomous dev.

---

# 14) Shutdown / cleanup

No daemon — but you may want to clear memory:

```
rm -rf .claude
```

or inside session:

```
/reset
```

---

# 15) Mental model (most important takeaway)

Claude Teams is not a chatbot.

It is:

> A permissioned autonomous coding agent attached to your organization identity

And the CLI is simply the terminal interface to that agent.

---

If you want, next I can show a **real repo workflow example** (like building a feature end-to-end using Claude in terminal) — that’s where it really clicks.
