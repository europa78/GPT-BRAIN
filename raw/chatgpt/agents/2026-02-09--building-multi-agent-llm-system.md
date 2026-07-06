---
title: "Building Multi-Agent LLM System"
date: 2026-02-09
cluster: "Claude Code / Agents"
messages: 24
source: chatgpt-export conversations.json (FULL transcript)
---

# Building Multi-Agent LLM System

> 24 messages · 2026-02-09 · cluster: Claude Code / Agents

**Semantic neighbors:** [[Claude agentic workflow summary]] · [[Agent mode - prospecting]] · [[OpenClaw Installation Guide]] · [[LangChain_101_models]]

## Transcript

**Mike:** How do I build something like this ? It depicts a multi agent LLM system that acts autonomously.

**GPT:** [Download the interactive multi-agent diagram HTML](sandbox:/mnt/data/multi_agent_diagram.html)

Open it in your browser. You can click agents, “Run loop” to simulate message passing, add agents, and export JSON.

---

## How to build a *real* autonomous multi-agent LLM system like that

Think of that diagram as an **org chart**, but behind each box is:

**Agent = (System prompt + model choice + tool allowlist + memory policy + evaluation rules)**  
…and there’s an **orchestrator** that decides who does what, in what order, with what budget.

### 1) Pick the autonomy pattern (most common)
**A. Manager → Specialists (hierarchical)**
- One “orchestrator” agent decomposes tasks and delegates to specialists (research, code, QA, copy, ops).

**B. Plan → Execute → Replan loop**
- Planner creates a plan → executor runs tools → checker critiques → planner revises → repeat.

**C. Blackboard**
- Agents write findings to a shared “board” (state). Orchestrator reads board and schedules next steps.

For 90% of business use-cases, **A + B combined** is the sweet spot.

---

## 2) The minimum architecture you need (production-ish)
### Core services
- **API** (FastAPI/Express): accepts jobs, returns status/results  
- **Orchestrator**: controls the loop, routing, retries, budgets  
- **Workers**: execute tools (web search, code runner, DB, CRM, etc.)  
- **State store** (Postgres/Redis): task state, messages, artifacts  
- **Memory** (optional): vector store for long-term retrieval + short-term summaries  
- **Observability**: traces, logs, cost, tool-call audit trail  
- **Safety controls**: allowlists, sandboxing, human approval gates

### Data model
- `Task` (goal, constraints, budget, deadlines)
- `Agent` (role, prompt, tools allowlist, model)
- `Message` (from, to, content, metadata)
- `Artifact` (files, drafts, code, citations)
- `ToolCall` (inputs, outputs, latency, errors)

---

## 3) The orchestrator loop (what makes it “autonomous”)
Autonomy isn’t magic—it’s a loop with **state + decisions**:

1. **Intake**: normalize goal + constraints (budget, risk, deadlines)
2. **Plan**: create task graph (subtasks + dependencies)
3. **Route**: assign subtasks to the right agents
4. **Act**: agents call tools and produce artifacts
5. **Critique/Verify**: reviewer agent checks output (facts, tests, policy)
6. **Replan**: if failing checks, revise and retry (bounded)
7. **Finalize**: compile deliverable + change log + “what I did” summary
8. **Escalate** (optional): if risk/uncertainty is high, ask a human

Key point: **bound everything** (steps, cost, retries, tool permissions).

---

## 4) Tooling layer (where the real power comes from)
Agents become useful when they can reliably do actions:
- Web/search (with citations)
- Read/write docs
- Code execution (sandbox)
- GitHub PRs
- CRM updates
- Email drafting (human send)
- DB queries
- Scheduling / ticketing (Jira, Trello, etc.)

**Best practice:** tools are *not* free-form. Define strict schemas and validate inputs/outputs.

---

## 5) A tiny “starter skeleton” in Python (conceptual)
```python
from dataclasses import dataclass
from typing import Any, Callable, Dict, List

@dataclass
class Message:
  frm: str
  to: str
  content: str
  meta: Dict[str, Any]

@dataclass
class Agent:
  id: str
  role: str
  system_prompt: str
  model: str
  tools_allowlist: List[str]

class Orchestrator:
  def __init__(self, agents: Dict[str, Agent], tools: Dict[str, Callable]):
    self.agents = agents
    self.tools = tools
    self.state: Dict[str, Any] = {"messages": [], "artifacts": [], "budget": 25, "steps": 0}

  def run(self, user_goal: str):
    # 1) plan
    plan = self.call_llm("planner", f"Create task graph for: {user_goal}")
    # 2) route + execute
    for task in plan["tasks"]:
      agent_id = task["agent"]
      result = self.call_agent(agent_id, task)
      self.state["artifacts"].append(result)
      # 3) verify
      check = self.call_llm("critic", {"task": task, "result": result})
      if not check["pass"]:
        task = self.call_llm("planner", {"fix": check, "task": task})
        result = self.call_agent(agent_id, task)

    return self.state["artifacts"]

  def call_agent(self, agent_id: str, task: Dict[str, Any]):
    # agent chooses a tool + arguments (or writes output)
    decision = self.call_llm(agent_id, {"task": task, "state": self.state})
    if decision["type"] == "tool":
      tool_name = decision["tool"]
      if tool_name not in self.agents[agent_id].tools_allowlist:
        raise PermissionError("Tool not allowed")
      return self.tools[tool_name](**decision["args"])
    return decision["output"]

  def call_llm(self, agent_id: str, payload: Any) -> Any:
    # plug in your LLM provider here
    ...
```

---

## 6) Guardrails that separate “cool demo” from “real system”
- **Budgets**: max tokens, max tool calls, max wall-clock time
- **Retries**: capped + exponential backoff
- **Idempotency**: tool calls safe to retry
- **Human gates**: approvals for money-moving / destructive actions
- **Sandboxing**: code runs in containers; no raw shell access
- **Audit trail**: every tool call logged (inputs, outputs, who triggered it)
- **Eval suite**: replay tasks; score accuracy + cost + latency

---

## If you tell me ONE thing…
What should your system *do autonomously* first (example: “build landing pages”, “research + write proposals”, “reply to leads”, “update CRM”, etc.)?

I’ll map the exact agent roles, tools, data stores, and the orchestration loop for that use-case (and we can turn it into a real backend next).

**Mike:** The following is a tweet from someone who built out this system.  Identify the software stack he is using and give me clear instructions on how to implement it.  //I'm sick and tired of the people who don't understand why I spent $20,000 on this set up, and plan on spending another $100,000 by the end of the year

IT DOES NOT MATTER THAT LOCAL MODELS AREN'T AS GOOD AS OPUS 4.6

That is not the point. The point is me being able to run a swarm of local AI agents powered by local AI models unlocks a world you can't imagine

A world never discovered by humanity before

Right now, as you read this post, I have multiple local AI models reading thousands of posts on X and Reddit

Hunting for challenges to solve

Those local AI models are feeding hundreds of challenges a day to a manager model

The manager model (Henry) decides what the company (Alex Finn Global Enterprises) will build.

The company is constantly working. Constantly researching. Constantly building. Constantly shipping

If I did this with local models I'd be spending $20,000 a month on API calls.

With my set up, it's free. I have an army on my desk. Never resting. Never eating. Never complaining. Always conquering.

Here is your problem: it's not that you don't understand this. You don't want to understand this. You don't want to think this is possible. Your brain doesn't want to believe this is the world we now live in.

It is. And the faster you can accept this and get on board, the faster you can enter the new society.

Otherwise, you will forever be doomed to the permanent underclass.

Make your choice.//

**GPT:** From that tweet + the “Henry / Opus 4.6” wording, the most likely stack is **OpenClaw** (formerly **Clawdbot/Moltbot**) as the orchestration layer, with **local models served by Ollama** for the swarm, and **Claude Opus 4.6** (cloud) as the “manager” brain. OpenClaw’s own docs explicitly recommend Opus 4.6 for safety/prompt-injection robustness and support **cron jobs**, **multi-agent routing**, **skills**, and **sandboxing**—which matches the “army on my desk, always working” description. citeturn11view0turn8view3turn12view0turn14search0

## 1) The software stack he’s (very likely) using

**Core orchestration / agent runtime**
- **OpenClaw** (gateway + control UI + tools + skills + multi-agent routing). Install and onboarding flow: `openclaw onboard --install-daemon`, gateway runs persistently, has a dashboard UI. citeturn10search2turn10search1turn9view0

**Local model runtime (the “swarm”)**
- **Ollama** running local LLMs, wired into OpenClaw (there’s even a one-command “launch openclaw” integration). Recommended Ollama models include `glm-4.7` and coder models. citeturn11view0  
- OpenClaw also supports other local OpenAI-compatible endpoints (LM Studio / vLLM / etc.), but Ollama is the most “it just works” path. citeturn6view2turn11view0

**Cloud “manager model”**
- **Anthropic Claude Opus 4.6** as the manager/decision-maker (“Henry”). OpenClaw’s security docs call out Opus 4.6 specifically for prompt-injection resistance. citeturn8view3turn6view2

**Autonomy / always-on scheduling**
- **OpenClaw Cron Jobs** (Gateway scheduler) to run scouts hourly/minutely and run the manager daily, plus “isolated” runs to avoid polluting your main chat context. citeturn12view0turn13view2

**“Skills” (tools/plugins)**
- OpenClaw “skills” loaded from `~/.openclaw/skills` and per-agent `<workspace>/skills`, optionally installed from **ClawHub**. citeturn8view1

**Security hardening (important for autonomous agents)**
- Docker sandboxing modes + tool allow/deny profiles to reduce blast radius. citeturn8view2turn9view0turn8view3

---

## 2) Clear implementation instructions (a working “swarm + manager” MVP)

### Step A — Hardware (so it actually feels like a swarm)
- **One always-on host**: a small server/mini PC/Mac mini/VPS to run the OpenClaw Gateway 24/7.
- **One GPU box** (optional but recommended): runs Ollama with bigger models. (This is where the “$20k desk army” usually goes: multiple GPUs, lots of VRAM, big NVMe.)

You *can* run both on one machine for MVP.

---

### Step B — Install OpenClaw (gateway + UI)
Fast path (macOS/Linux/WSL2):
```bash
curl -fsSL https://openclaw.ai/install.sh | bash
openclaw onboard --install-daemon
openclaw gateway status
openclaw dashboard
```
This is the documented “quick setup” path. citeturn10search2turn10search0

---

### Step C — Install Ollama + connect it to OpenClaw (local swarm)
Install Ollama (use their installer for your OS), then:

**One-command OpenClaw + Ollama wiring:**
```bash
ollama launch openclaw
```
This configures OpenClaw to use Ollama and starts the gateway (or reloads config if it’s already running). citeturn11view0

Pull at least one “worker” model:
```bash
ollama pull glm-4.7
# or a smaller fast model if you want higher throughput
```
OpenClaw/Ollama docs list recommended models (including `glm-4.7`). citeturn11view0

---

### Step D — Add your “Henry” manager model (Claude Opus 4.6)
In onboarding you can set cloud providers, or you can add auth after:

1) Put your Anthropic key in env (or use OpenClaw’s auth flow)
2) Set your manager agent to use Opus 4.6

OpenClaw explicitly recommends Opus 4.6 in its security guidance. citeturn8view3turn6view2

---

### Step E — Create the multi-agent roster (scouts + manager + builder)
OpenClaw supports multiple isolated agents with separate workspaces. citeturn14search0turn14search9

Example (create 4 agents):
```bash
openclaw agents add scout-reddit --model "ollama/glm-4.7" --workspace ~/claw/scout-reddit --non-interactive
openclaw agents add scout-x      --model "ollama/glm-4.7" --workspace ~/claw/scout-x      --non-interactive
openclaw agents add henry        --model "anthropic/opus"  --workspace ~/claw/henry        --non-interactive
openclaw agents add builder      --model "ollama/glm-4.7"  --workspace ~/claw/builder      --non-interactive

openclaw agents list --bindings
```
CLI supports `agents add`, per-agent workspace, and per-agent model selection. citeturn14search9turn14search0

*(Model IDs vary depending on how you named/aliased models in OpenClaw; the docs explain model selection + per-agent overrides.)* citeturn14search1turn6view2

---

### Step F — Add “skills” for scouts (how they actually read X/Reddit)
Skills load from:
- bundled
- `~/.openclaw/skills`
- each agent workspace `<workspace>/skills` citeturn8view1

For MVP, do this simple approach:

1) Create a shared folder for outputs:
```bash
mkdir -p ~/claw/shared/inbox
```

2) In each scout’s workspace, create a small script that writes findings to that folder (JSONL or Markdown).  
- **Reddit:** use Reddit’s official API (PRAW) or RSS endpoints.
- **X:** use the official X API if you need scale/reliability; otherwise use RSS-like sources where available. (This is where ToS/rate limits matter.)

3) Teach the agent the workflow in a skill README (so it consistently runs the same steps).

You can also install community skills via ClawHub:
```bash
clawhub install <skill-slug>
```
citeturn8view1

---

### Step G — Make it autonomous with Cron (the “never sleeps” part)
Use OpenClaw cron jobs (persisted in the gateway) to run scouts frequently and Henry on a cadence. citeturn12view0turn13view2

**Run Reddit scout every 10 minutes (isolated run, pinned to that agent):**
```bash
openclaw cron add \
  --name "Reddit scout" \
  --cron "*/10 * * * *" \
  --session isolated \
  --message "Run the reddit scouting skill. Write new candidates into ~/claw/shared/inbox/reddit.jsonl" \
  --agent scout-reddit
```
Agent pinning is supported via `--agent`. citeturn13view2

**Run X scout every 15 minutes:**
```bash
openclaw cron add \
  --name "X scout" \
  --cron "*/15 * * * *" \
  --session isolated \
  --message "Run the X scouting skill. Write new candidates into ~/claw/shared/inbox/x.jsonl" \
  --agent scout-x
```

**Run Henry once per day to decide what to build:**
```bash
openclaw cron add \
  --name "Henry daily decision" \
  --cron "0 7 * * *" \
  --tz "America/New_York" \
  --session isolated \
  --message "Read ~/claw/shared/inbox/*.jsonl, dedupe, score opportunities, and output: (1) top 3 problems (2) recommended build (3) next actions for builder." \
  --agent henry
```

---

## 3) Don’t skip this: safety settings for autonomous agents
If an agent can browse the web, read untrusted text, and execute tools, prompt injection becomes a real risk. OpenClaw’s security docs recommend hard controls: tool policy, allowlists, and sandboxing. citeturn8view3turn9view0turn8view2

Minimum hardening I’d do on day 1:
- Turn on sandboxing for non-main or all sessions (Docker-based). citeturn8view2  
- Give scouts **web + write**, but **no exec** unless absolutely necessary (tool profiles + allow/deny lists). citeturn9view0  
- Keep Henry “decision-only” (no browser/exec) and have scouts summarize raw content before Henry sees it. (This is explicitly recommended as a mitigation pattern.) citeturn8view3

---

## 4) What you’ll have after the MVP
Within a day, you’ll have:
- Multiple local agents continuously collecting “problems worth solving”
- A manager agent that produces a daily “build decision”
- A repeatable pipeline you can expand into: GitHub issue creation, code generation, deployment, etc.

If you want, tell me what machine(s) you’re running (Windows/WSL2 vs Mac vs Linux + what GPU), and I’ll map the exact Ollama model choices + an example “problem scoring rubric” Henry can use so you get high-quality picks instead of noisy ideas.
