---
title: "OpenClaw Installation Guide"
date: 2026-02-24
cluster: "Claude Code / Agents"
messages: 33
source: chatgpt-export conversations.json (FULL transcript)
---

# OpenClaw Installation Guide

> 33 messages · 2026-02-24 · cluster: Claude Code / Agents

**Semantic neighbors:** [[Agent mode - prospecting]] · [[Building Multi-Agent LLM System]] · [[LangChain_101_models]] · [[AI Agent Development Platform.]]

## Transcript

**Mike:** analyze this you tube video on instructions to install open claw.    list the steps in a guide :

**GPT:** ## OpenClaw install — step-by-step guide (from the video)

### 0) Pick a safe machine first (do this before installing)
1) **Do NOT install on your main computer** (the one with your accounts, files, passwords). fileciteturn1file4L1-L13  
2) Use a **dedicated device** instead (old laptop/desktop, Mac Mini, Raspberry Pi) or a **VPS**. fileciteturn1file4L15-L25  
3) If using a VPS, avoid **“one-click” prebuilt images**; the video recommends starting from a **blank slate** so you can change configs later. fileciteturn1file4L27-L69  

---

### 1) Run the installer (terminal)
4) On the device you chose, open a **terminal** and **paste the install command from the official OpenClaw install page** (the video says “copy this command,” but the command text itself isn’t included in the transcript). fileciteturn3file1L17-L31  
5) Let the command run—per the video, it:
   - checks prerequisites and installs missing pieces  
   - downloads + installs OpenClaw  
   - finalizes install and launches onboarding fileciteturn3file1L31-L46  

---

### 2) Go through onboarding (recommended “MVP” setup)
6) Don’t overthink the first setup—do the **minimal viable setup** first, then refine later. fileciteturn3file0L1-L23  
7) In onboarding, the video’s path is:
   - confirm you understand security risks  
   - choose **manual onboarding**  
   - keep **local gateway**  
   - accept the default directory fileciteturn3file0L47-L55  

---

### 3) Add your AI model provider (OpenRouter path shown)
8) Choose **OpenRouter** as the provider (video recommendation for getting started). fileciteturn3file0L55-L66  
9) In OpenRouter:
   - create account, add a small amount of credits (video suggests ~$5–$10)  
   - create an **API key** fileciteturn3file2L55-L65  
10) Paste the OpenRouter API key into the onboarding prompt and select your model (the video demonstrates choosing a “Claude Sonnet 4.6” option). fileciteturn3file2L61-L75  
11) Accept (or change) the port if needed (the video changes it when another instance is using the same port). fileciteturn3file2L75-L82  
12) Keep **gateway bind on loopback**, generate the gateway token, and proceed. fileciteturn3file2L83-L90  

---

### 4) Connect Telegram (recommended first channel)
13) Select **Telegram bot** as your first channel. fileciteturn3file2L91-L95  
14) In Telegram, open **BotFather**:
   - run `/newbot`  
   - pick a display name  
   - pick a bot username that ends with `bot`  
   - use **underscores**, not dashes, if you want “spaces” fileciteturn3file2L95-L111  
15) Copy the **bot token** from BotFather and paste it back into onboarding; finish the channel setup. fileciteturn3file3L1-L8  

---

### 5) Lock down who can message your bot (important)
16) Configure DM access policies using an **allow list** so only approved users can chat with the bot. fileciteturn3file3L9-L26  
17) Get your Telegram **user ID** (video tip: pull it from the digits in the profile URL if username copy doesn’t work), then paste only the digits into the allow list. fileciteturn3file3L35-L52  

---

### 6) Finish onboarding (keep it simple)
18) The video suggests **skipping skills** initially (just look around), and skipping extra API keys for now. fileciteturn3file3L53-L71  
19) Enable the hooks, install the gateway service + node, enable bash, and complete onboarding. fileciteturn3file3L73-L85  

---

### 7) Open the dashboard and verify it works
20) Copy the **dashboard URL that includes your token** and paste it into your terminal to open the dashboard. fileciteturn3file3L91-L100  
21) Send a test message (“Hi…”) and confirm you get a response. fileciteturn3file3L101-L105  

> Tip: Treat that URL token like a password—don’t share it.

---

### 8) Do the “first 10 minutes” setup inside the agent
22) Complete the initial “who you are / goals / purpose” conversation (the video emphasizes this first chat matters for how the agent sets itself up). fileciteturn3file3L105-L107  

---

### 9) Run the 2 security hardening prompts (right after it’s working)
23) Ask the agent to run a **security audit** of the device + OpenClaw deployment; read the output, then tell it to fix issues if you agree. fileciteturn2file0L3-L34  
24) Ask it to enable **redaction of sensitive info in logs** (so keys/IDs don’t leak into metadata/logs). fileciteturn2file0L35-L67  

---

### 10) Enable web search (Brave example shown)
25) Get a **Brave Search API key** and then enable Brave web search from the terminal flow shown in the video (enable web search → paste key → enable web fetch). fileciteturn2file2L15-L63  
26) Test the integration by asking the agent to hit the Brave API and confirm it works. fileciteturn2file2L63-L70  

---

### 11) First-day usage (so you don’t burn tokens)
27) Start with something small (video example: schedule a simple daily update like “AI news at 8am”), then iterate and expand. fileciteturn2file2L71-L109  

---

## Optional: “Headless” setup note (if your OpenClaw machine has no GUI)
The video keeps the gateway bound to **loopback** (local-only) fileciteturn3file2L83-L86, so if you want to view the dashboard from another computer, the safer common approach is **SSH port-forwarding** (instead of opening the service publicly). If you tell me what OS you’re using (Ubuntu server, Pi OS, etc.), I’ll give you the exact port-forward commands.

**Mike:** so the best way is to install open claw on a freshly OS installed machine

**GPT:** Yes — that’s the safest *default* approach.

Installing OpenClaw on a **fresh OS install** (or a clean VM/VPS image) is best practice because it:

- **Reduces risk**: no mystery background software, old credentials, browser sessions, or malware already on the box. The video explicitly warns against using your main computer and recommends a dedicated device/VPS. fileciteturn1file4L1-L25  
- **Keeps your “agent machine” isolated** from your personal files/accounts. fileciteturn1file4L1-L13  
- Makes it easier to **lock down access** (allow lists, loopback binding, tokens, etc.) and keep things clean. fileciteturn3file2L83-L90 fileciteturn3file3L9-L26  

If you want the “most secure” version of that idea, here’s the hierarchy (best → acceptable):

1) **Fresh OS on a dedicated machine** (no personal logins, no browsing)  
2) **Fresh VM** on your main machine (still isolated, easier)  
3) **Fresh VPS** from a reputable provider (but configured carefully; avoid “one-click” images if you plan to customize). fileciteturn1file4L27-L69  

If you tell me what you’re planning (old laptop vs VM vs VPS, and Windows/macOS/Linux), I’ll give you a tight “secure install checklist” for that exact setup (accounts, firewall, updates, SSH, port binding, backups).

**Mike:** what does a clean VM image entail ?

**GPT:** A **clean VM image** means a virtual machine that starts from a **fresh, trusted base operating system** with **minimal extras**, and **no leftover data or credentials**—basically the VM equivalent of “new computer, just installed.”

Here’s what that entails in practice:

### What “clean” means
- **Fresh OS install** from an official source (e.g., Ubuntu LTS ISO from Canonical, Debian ISO, Windows ISO from Microsoft).
- **No personal accounts logged in** (no Google, Apple ID, password managers, browser sync).
- **No random preinstalled tools** beyond the OS essentials (avoid “kitchen-sink” images).
- **No prior snapshots** from unknown origins (don’t clone a VM you used for other stuff).
- **Up to date**: security updates applied immediately after install.

### What to avoid (not “clean”)
- “Free VM images” from random blogs or torrents.
- “One-click” VPS images that bundle lots of extras you didn’t choose (the video recommends avoiding these so you can control config later). fileciteturn1file4L27-L69  
- Reusing a VM where you’ve already logged into email, cloud drives, etc.

### What you typically do when creating one
1) **Create a new VM** (VirtualBox / VMware / Hyper-V / Proxmox).
2) Mount an **official OS ISO** and install it like a new computer.
3) On first boot:
   - run OS updates
   - create one non-admin user (or use admin sparingly)
   - enable basic security (firewall on; SSH keys if remote)
4) Then install only what you need for OpenClaw.

### Security “extras” that make it truly solid (recommended)
- **Snapshots**: take one snapshot right after OS updates, *before* installing OpenClaw. If anything gets weird, roll back instantly.
- **Network isolation**:
  - Prefer **NAT** networking (VM can reach the internet, internet can’t reach the VM directly).
  - Avoid “bridged” networking unless you know why you need it.
- **No shared folders/clipboard** (or keep them off until you must use them).
- **Disk encryption** if you’re storing anything sensitive.

### Quick rule of thumb
If you can answer **“Yes”** to all of these, it’s clean:
- “I installed the OS from an official ISO yesterday/today.”
- “No personal logins exist in the VM.”
- “All updates are installed.”
- “It only has the tools I intentionally installed.”

If you tell me what you’re using (VirtualBox vs VMware vs Hyper-V, and Windows/macOS/Linux host), I’ll give you the exact “clean VM” settings to click (NAT vs bridged, shared clipboard off, resource sizing, snapshot timing).

**Mike:** is hostinger a good choice for VPS?  https://www.hostinger.com/vps-hosting

**GPT:** Hostinger can be a **good VPS choice**, especially if you want **low cost + decent specs** and you’re comfortable running an **unmanaged** server (you handle updates, security, and troubleshooting).

### Why Hostinger can work well (pros)
- **Strong value for money (intro pricing):** Their KVM VPS plans are aggressively priced (e.g., KVM 1–8 tiers) with clearly stated RAM/disk/bandwidth. citeturn0search4turn1search6  
- **Modern hardware + basics you need:** They advertise **AMD EPYC + NVMe**, plus features like **firewall management** and **DDoS protection**. citeturn0search4turn1search8  
- **Backups exist (but know the limits):** Weekly backups are included, and they support manual snapshots. citeturn0search1turn0search4  
- **Many datacenter options:** You can choose locations across North America, Europe, Asia, and Brazil (availability depends on plan/type). citeturn1search0  
- **30-day money-back guarantee:** Applies to new VPS purchases/renewals (with some exclusions like crypto payments). citeturn0search0  

### Things to watch out for (cons / “gotchas”)
- **Unmanaged VPS:** You’re responsible for OS patching, firewall rules, SSH hardening, monitoring, etc. Third-party app installs are on you. citeturn1news47turn1search10  
- **Support style:** They emphasize **24/7 chat + tickets/email**; **no phone support** is a recurring note in reviews and their own support docs. citeturn1news47turn1search1  
- **Uptime guarantee is standard, credits are small:** 99.9% monthly uptime guarantee, with a credit described as **5% of the monthly hosting fee** (and lots of exclusions). citeturn1search5turn1search9  
- **Snapshots/backups limitations:** Hostinger’s docs note **only one snapshot stored at a time** and snapshots are **deleted after 20 days** (plus OS reinstall wipes snapshots). That’s fine for “oops” recovery, but not a full backup strategy by itself. citeturn0search1  
- **Renewal pricing jumps:** Their VPS page explicitly shows discounted intro pricing and higher renewal rates after the term. citeturn0search4  

---

## For OpenClaw specifically: would I use Hostinger?
**Yes, if:**
- You want a **fresh, isolated VPS** to run OpenClaw safely (matches the video’s “clean slate” approach).
- You’re fine with **Linux admin tasks** (updates, SSH keys, firewall).
- You’ll keep the gateway/dashboard access **locked down** (loopback binding + SSH tunnel, allowlists, strong tokens).

**I’d consider alternatives if:**
- You want **more managed help** or higher-touch ops.
- You need very specific enterprise controls / more transparent SLAs.
- You want a “cloud platform” experience (managed Kubernetes, easy autoscaling, etc.).

(For cheap VPS alternatives, TechRadar’s list includes Hostinger alongside providers like Hostwinds, Ionos, Alibaba Cloud, Hetzner, OVH, and Liquid Web—useful as a comparison set.) citeturn0news55  

---

## Quick “good setup” recommendation (if you go with Hostinger)
- Pick a datacenter closest to you/your workflow. citeturn1search0  
- For OpenClaw + a bit of headroom: **KVM 2 (8GB RAM)** is usually a comfortable starting point (vs 4GB if you’re running multiple services). citeturn0search4turn1search6  
- Take a **baseline snapshot** right after OS updates, before installing anything (then keep your own off-box backups too). citeturn0search1  
- Assume “unmanaged”: plan to do **automatic security updates, firewall rules, fail2ban (optional), SSH keys only**. citeturn1search10turn1search8  

If you tell me whether you’re running OpenClaw on **Ubuntu** (most common) and whether you want to access the dashboard **locally via SSH tunnel**, I’ll give you a tight hardening checklist + exact commands.

**Mike:** i have a windows machine

**GPT:** Yep — having a **Windows machine** is totally fine. The cleanest way to run OpenClaw on Windows is **WSL2 (Ubuntu)** so OpenClaw runs in a real Linux environment (more compatible + fewer weird issues than “native Windows”). citeturn0search0turn0search6

## Best setup on a Windows PC (recommended): WSL2 + Ubuntu

### 1) Install WSL2
In **PowerShell (Admin)**:
```powershell
wsl --install
```
Then reboot if prompted. (Microsoft’s WSL install flow is the standard approach.) citeturn0search0

### 2) Open Ubuntu (WSL) and install OpenClaw *inside WSL*
Open the **Ubuntu** app / WSL terminal, then run the OpenClaw installer (inside WSL). The official docs emphasize using WSL2 for Windows. citeturn0search0turn0search6

(If you want the exact current install command, use the OpenClaw install docs page so you’re always copying the newest one.) citeturn0search6

### 3) Run onboarding + install the gateway service (inside WSL)
In WSL, the docs list these as the typical commands:
```bash
openclaw onboard --install-daemon
# or
openclaw gateway install
# or
openclaw configure
```
citeturn0search0

### 4) Keep access locked down
WSL runs on its own virtual network. If you need access from outside your machine, the docs mention advanced options like Windows `portproxy`, but the safer common pattern is to keep things local and use tunneling / loopback where possible. citeturn0search0

---

## If you want “clean machine” isolation on Windows
If your goal is **maximum separation** (like the video’s “don’t use your main machine” idea), do one of these:

### Option A: **Fresh Linux VM** on your Windows PC
- Create a new VM (VirtualBox/VMware/Hyper-V)
- Install Ubuntu from an official ISO
- NAT networking, no shared clipboard/folders
- Snapshot after updates, before OpenClaw

### Option B: **VPS (Hostinger or other)**
- You manage it via SSH from Windows
- Install OpenClaw on the VPS (fresh Ubuntu image)
- Access dashboard via SSH tunnel (avoid exposing it publicly)

(Hostinger can work fine as long as you treat it like an unmanaged Linux box and harden it.)

---

## Important security heads-up (worth doing either way)
There have already been reports of **malicious OpenClaw “skills”** being uploaded to public registries, so treat third-party skills like installing executable software: only install trusted ones and review code if possible. citeturn0news36

---

If you tell me which route you want (**WSL2**, **local VM**, or **Hostinger VPS**) and whether you want OpenClaw reachable from your phone (Telegram) but **not** publicly exposed, I’ll give you the exact “secure checklist + commands” for that setup.

**Mike:** how do I Create a new VM (VirtualBox/VMware/Hyper-V)

**GPT:** Here’s how to create a **new VM on a Windows machine**, using **VirtualBox**, **VMware**, or **Hyper-V** (with “clean VM” settings that work well for something like OpenClaw).

## Before you start (quick checks)
1) **Confirm virtualization is enabled**
- Open **Task Manager → Performance → CPU** and look for **“Virtualization: Enabled”**.
- If it’s **Disabled**, enable Intel VT-x / AMD-V in your BIOS/UEFI.

2) **Pick the right VM tool**
- **Windows 11/10 Pro/Enterprise**: you can use **Hyper-V** (built in). Hyper-V is *not* available on Home editions. citeturn1search3  
- **Any edition**: you can use **VirtualBox** or **VMware**.

3) **Download a clean OS ISO**
- For a “clean VM”, use an **official Ubuntu ISO** (Desktop or Server). You’ll attach this ISO to the VM to install the OS.

---

# Option A — VirtualBox (recommended if you want simple + free)
Oracle’s official flow is: **VirtualBox Manager → New → walk the wizard (name/OS → hardware → disk) → start VM and install from ISO**. citeturn0search0turn0search1

### Steps
1) Install **Oracle VirtualBox**, open **VirtualBox Manager**
2) Click **New**
3) **Name/OS**
   - Name: `OpenClaw-Ubuntu`
   - Type: **Linux**
   - Version: **Ubuntu (64-bit)** (or “Other Linux 64-bit” if Ubuntu isn’t listed)
4) **Hardware**
   - RAM: **4096–8192 MB**
   - CPUs: **2–4**
   - (VirtualBox warns not to starve the host OS—good advice.) citeturn0search0
5) **Disk**
   - Create a new virtual hard disk (dynamic is fine)
   - Size: **40–80 GB**
6) **Attach the Ubuntu ISO**
   - VM **Settings → Storage → Optical Drive → Choose a disk file…** → select the Ubuntu `.iso`
7) **Start** the VM and follow the Ubuntu installer

### “Clean VM” security settings (recommended)
- **Network**: NAT (default) is good for isolation (VM can reach internet; internet can’t reach VM directly).
- **Disable** Shared Clipboard / Drag & Drop until you truly need them.
- Avoid mounting your Windows folders into the VM unless necessary.

---

# Option B — Hyper-V (best integration if you have Windows Pro/Enterprise)
### 1) Enable Hyper-V
Microsoft’s requirements include **Windows 11 Pro/Enterprise** (not Home). citeturn1search3  
Then enable Hyper-V via Windows Features / PowerShell per Microsoft’s guide. citeturn1search3

### 2) Create the VM (Hyper-V Manager)
Microsoft’s official steps: **Hyper-V Manager → New → Virtual Machine → wizard → Finish → Connect → Start**. citeturn1search0turn1search1

1) Open **Hyper-V Manager**
2) In the right Actions pane: **New → Virtual Machine**
3) Wizard pages (common choices):
   - **Generation**: choose **Generation 2** for modern Linux installs (unless you have a special reason). citeturn1search2  
   - **Memory**: 4096–8192 MB (Dynamic Memory optional)
   - **Networking**: pick a Virtual Switch (create one if needed)
   - **Virtual disk**: 40–80 GB
   - **Installation Options**: **Install an operating system from a bootable image file (.iso)** → select Ubuntu ISO citeturn1search1
4) Finish → right-click VM → **Connect…** → **Start**
5) Install Ubuntu normally

### “Clean VM” security settings
- Prefer an **Internal** or **NAT** style network if you want maximum isolation.
- Don’t expose services publicly from the VM unless you must.

---

# Option C — VMware Workstation / Player
VMware uses the **New Virtual Machine Wizard**: choose ISO (or install later), choose guest OS, name/location, disk size → Finish. citeturn3search3turn3search1

### Steps (VMware Player / Workstation)
1) Install **VMware Workstation** (Player/Workstation)
2) Open it → **Create a New Virtual Machine** (or **Player → File → New Virtual Machine**) citeturn3search1turn3search3
3) Pick:
   - **Installer disc image file (ISO)** → select Ubuntu ISO citeturn3search3turn3search1
4) Select guest OS:
   - **Linux → Ubuntu**
5) Name + location:
   - `OpenClaw-Ubuntu`
6) Disk:
   - **40–80 GB**, store as a single file (or split if you plan to move it often) citeturn3search3turn3search1
7) Finish → Power on → Install Ubuntu

### “Clean VM” security settings
- Network: NAT
- Keep shared folders/clipboard off initially

---

## Recommended VM sizing for OpenClaw (practical defaults)
- **CPU:** 2–4 vCPUs  
- **RAM:** 8GB if you can (4GB minimum)  
- **Disk:** 60GB+ if you’ll store logs/artifacts/tools  

---

If you tell me which Windows edition you have (**Home vs Pro**) and which tool you want to use (**VirtualBox, VMware, or Hyper-V**), I’ll give you the exact click-by-click settings (including the best network mode for “Telegram works but nothing else is exposed publicly”).

**Mike:** write a mark down file with the explicit instructions that can be executed by agent swarm in Kimi 2.5

**GPT:** Here you go — I created the Markdown playbook as a downloadable file:

[Download the Markdown file](sandbox:/mnt/data/openclaw_clean_vm_agent_swarm_kimi25.md)
