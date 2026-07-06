---
title: "Replicating Karpathy's AI Setup"
date: 2026-03-22
cluster: "unassigned"
messages: 2
source: chatgpt-export conversations.json (FULL transcript)
---

# Replicating Karpathy's AI Setup

## Transcript

**Mike:** Explain how I can replicate karpathy's setup with open claw that automates functions at his home and work . It is the following//
Andrej Karpathy, wearing a black sweater and a button-up shirt, talks onstage in front of a white screen.
A former OpenAI founding member says he uses an AI agent to clean his spa and pool. It's named Dobby.  Michael Macor/The San Francisco Chronicle via Getty Images
Mar 22, 2026, 5:09 AM ET
Share
SaveSaved
- Andrej Karpathy said he built an AI claw that helps monitor his home and run some chores.
- He said it controls lights, blinds, security cameras, and the pool. It helped combine six apps into one.
- His system also just got a huge upgrade thanks to Jensen Huang.


- What inspired naming it 'Dobby'?
- What is a GB300 superchip?
- What are 'agentic AI workloads'?

- How do AI agents handle security?
- How does 'Dobby' improve efficiency?

How does a former OpenAI and [Tesla](https://www.businessinsider.com/tesla) researcher and engineer turn off the lights in his house?
He said he connects them to an AI agent and asks a bot to do it, of course.
Andrej Karpathy — the founder at Eureka Labs, an OpenAI cofounder, the former director of AI at Tesla, and the engineer who coined the [term "vibe coding"](https://www.businessinsider.com/vibe-coding-becoming-a-real-job-startups-entrepreneurship-2026-3) — told the "No Priors" podcast he's built a system he calls "Dobby" (like the Harry Potter house elf) to handle some household chores.
"I have a claw basically that takes care of my home, and I call him Dobby the Elf Claw," he said in the interview, which was released on Friday. "It controls all of my lights, my HVAC, my shades, the pool, the spa, and also the security system."
[AI claws](https://www.businessinsider.com/openclaw-moltbook-cybersecurity-risks-researchers-ai-2026-2) are a new wave of autonomous AI agents that can take actions on a user's behalf. Unlike traditional large language models that respond in blocks of text, these systems can operate apps and internet-connected devices directly, handling tasks like research, scheduling, and home automation.
Today
Get our newsletter for the inside scoop on today’s big stories.
Sign up
The tools have gained traction in recent months, with open-source frameworks like OpenClaw helping popularize the approach. Silicon Valley giants and startups are now [racing to build competitors](https://www.businessinsider.com/openclaw-ai-demand-token-use-surge-nvidia-pricing-jumps-2026-2), and OpenAI scooped up OpenClaw and its creator, Peter Steinberger, in February.
Karpathy said he is already using the system for everyday tasks, including tracking his deliveries.
"It sends me a text to my WhatsApp," he said. "It shows an image from the outside, and it says, 'Hey, a FedEx truck just pulled up, and you might want to check it, you got new mail.'"
He said the new system helped remove six separate apps from his phone — Dobby now controls them all.
Karpathy's setup just got a major hardware boost, too. Days before the interview, he posted on X that Nvidia CEO Jensen Huang had [gifted him a DGX Station](https://www.businessinsider.com/jensen-huang-gift-andrej-karpathy-ai-dgx-station-2026-3), powered by a GB300 superchip designed for agentic AI workloads.
"She'll make for a beautiful, spacious home for my Dobby the House Elf claw, among lots of other tinkering," Karpathy posted on Wednesday. Karpathy said he isn't losing any sleep about the system controlling his devices. He told Business Insider that Dobby connects to devices on his home's local network, meaning those systems aren't directly accessible from the internet.
In fact, he said it's helpful for his rest.
"I can ask it, 'Dobby, it's sleepy time,'" he told the podcast. "That just means all of the lights go off."//

**GPT:** What Karpathy built isn’t magic—it’s a very clean integration of **AI agents + home automation + local infrastructure**. You can absolutely replicate a version of it today if you understand the stack.

Let’s break it down into **what he actually built**, then **how you can recreate it step-by-step**.

---

# 🧠 What Karpathy’s “Dobby” Actually Is

At a high level, his system is:

> **An AI agent (OpenClaw-style) that can control real-world devices through APIs on a private network**

Core components:

### 1. 🧩 Agent Layer (The “Brain”)
- An **AI agent framework** like entity["software","OpenClaw","AI agent framework"]  
- Uses an LLM (GPT, Claude, etc.) to:
  - Understand commands (“It’s sleepy time”)
  - Plan actions
  - Execute tasks via tools

This is what makes it “agentic” instead of just a chatbot.

---

### 2. 🏠 Device Control Layer (The “Hands”)
Instead of 6 separate apps, he unified everything into one system:

- Lights → Philips Hue / smart switches
- HVAC → Nest / Ecobee
- Blinds → Smart shades
- Pool / spa → IoT controllers
- Cameras → Security system APIs

Most people use:
- entity["software","Home Assistant","home automation platform"] (VERY important)
  
This acts as the **central API hub** for your house.

---

### 3. 🧠 Local Compute (The “Body”)
Karpathy mentioned a DGX system powered by a:

- entity["technology","GB300 superchip","Nvidia AI hardware"]

This is overkill for most people. It’s designed for:
- **Agentic AI workloads** (multi-step reasoning + action loops)

👉 You can replicate this with:
- A powerful desktop (GPU)
- Or even cloud (AWS / RunPod)

---

### 4. 🔒 Security Model (Critical Insight)
This is key:

> His system runs on a **local network (LAN)**

That means:
- Devices are NOT exposed to the internet
- AI agent runs inside the network
- External access = controlled (VPN or gateway)

This is how he avoids getting hacked.

---

# ⚙️ How to Build Your Own “Dobby” (Step-by-Step)

## Step 1: Set Up a Home Automation Hub
Install:

- entity["software","Home Assistant","home automation platform"]

What it does:
- Connects all smart devices
- Gives you ONE unified API

👉 This replaces:
- 6–10 apps on your phone

---

## Step 2: Connect Your Devices
Integrate:
- Lights (Hue, Lutron)
- Thermostat
- Cameras
- Smart plugs
- Garage / doors

Inside Home Assistant, everything becomes:
```json
turn_on(light.living_room)
set_temperature(72)
```

---

## Step 3: Add an AI Agent Layer
Now plug in an agent framework like:

- entity["software","OpenClaw","AI agent framework"]  
OR alternatives:
- LangChain agents
- AutoGPT-style systems

You give the agent:
- Access to Home Assistant API
- Tool functions like:
  - `turn_off_lights()`
  - `check_camera()`
  - `open_blinds()`

---

## Step 4: Create “Tool Use” Functions
Example:

```python
def sleepy_time():
    turn_off_all_lights()
    close_blinds()
    set_temperature(68)
```

Then your AI maps:

> “Dobby, it’s sleepy time”

➡️ Executes that function.

---

## Step 5: Add Vision + Monitoring (Karpathy’s Trick)

He mentioned:

> “FedEx truck pulled up…”

That requires:

- Camera feeds
- Computer vision model

Stack:
- Camera → RTSP stream
- AI → detects objects (truck, person, package)
- Agent → sends alert

Output:
- WhatsApp message
- Snapshot image

---

## Step 6: Messaging Interface
He uses messaging like WhatsApp.

You can use:
- Telegram bot
- SMS API (Twilio)
- Slack

Example:
```
You: Dobby, did I get mail?
Dobby: Yes — package detected at 2:14 PM (image attached)
```

---

## Step 7: Run It Locally (Important)

For security + speed:

- Run agent on:
  - Local PC
  - Mini server
  - GPU box

Avoid exposing:
- Home Assistant
- Cameras

Use:
- VPN (Tailscale is popular)

---

# 🧠 What “Agentic AI Workloads” Means

This is a key concept.

Instead of:
> Input → Output (chatbot)

You get:

> Goal → Plan → Actions → Feedback → Iterate

Example:
```
Goal: “Check if I got a package”

Agent:
1. Access camera feed
2. Detect objects
3. Analyze result
4. Send message
```

That loop = **agentic behavior**

---

# ⚡ What the GB300 Superchip Actually Is

The entity["technology","GB300 superchip","Nvidia AI hardware"] is:

- Nvidia’s next-gen AI hardware
- Built for:
  - Running large models locally
  - Multi-agent systems
  - Real-time reasoning

👉 Translation:
- Faster decisions
- More complex automation
- Less cloud dependency

---

# 🧩 Why “Dobby” Is So Powerful

Karpathy’s real breakthrough isn’t hardware.

It’s this:

### ❌ Old Way:
- 6 apps
- Manual control
- No intelligence

### ✅ New Way:
- 1 AI agent
- Natural language control
- Autonomous actions

---

# 🔐 How AI Agents Handle Security

Karpathy’s approach (smart):

- Local network only
- No direct internet exposure
- Controlled access layer

Best practices:
- VLAN for IoT devices
- Firewall rules
- API authentication
- No open ports

---

# 🚀 If You Want the Fastest Way to Start

Here’s the simplest version you can build THIS WEEK:

1. Install Home Assistant
2. Connect lights + thermostat
3. Create a few automations
4. Add a GPT-based agent
5. Map commands → actions

Boom — you have a basic “Dobby”

---

# 🧠 Final Insight (This Is the Big One)

What Karpathy built is the **early version of a massive trend**:

> AI becomes the operating system for your physical world

Not just:
- Smart home

But eventually:
- Business ops
- Trading systems
- Personal assistants

---

If you want, I can build you a **complete production-ready architecture (code + stack + deployment plan)** tailored to your house and even your businesses.
