---
title: "Run Dexter Step-by-Step"
date: 2026-01-10
cluster: "Misc / Uncategorized"
messages: 10
source: chatgpt-export conversations.json (FULL transcript)
---

# Run Dexter Step-by-Step

> 10 messages · 2026-01-10 · cluster: Misc / Uncategorized

**Semantic neighbors:** [[Exhibitor list]] · [[ZoomInfo Pain Clinic Search]] · [[Futuristic Image]] · [[FB Posts 1-20-26]]

## Transcript

**Mike:** Walk me through step by step how to run Dexter , an autonomous financial research agent

**GPT:** Below is a clean, step-by-step “do this, then this” walkthrough to run **Dexter** (the autonomous financial research agent) from that GitHub repo.

---

## 1) Install prerequisites

### A) Install **Bun** (required)
**macOS / Linux**
```bash
curl -fsSL https://bun.sh/install | bash
```

**Windows (PowerShell)**
```powershell
powershell -c "irm bun.sh/install.ps1|iex"
```

Then close/reopen your terminal and confirm:
```bash
bun --version
```

### B) Make sure you have **Git**
Check:
```bash
git --version
```
If that fails, install Git (Windows: Git for Windows; macOS: Xcode Command Line Tools; Linux: your package manager).

---

## 2) Get API keys (you’ll need these)

Dexter expects environment variables for API access:

- **OPENAI_API_KEY** (required if you’re using OpenAI models)
- **FINANCIAL_DATASETS_API_KEY** (required for financial statements/data)
- **TAVILY_API_KEY** (optional, only if you want web search inside Dexter)

Keep these keys private. Don’t paste them into code you commit.

---

## 3) Clone the repo and install dependencies

From a folder where you keep projects:

```bash
git clone https://github.com/virattt/dexter.git
cd dexter
bun install
```

If `bun install` errors, jump to the troubleshooting section at the bottom.

---

## 4) Create your `.env` file

Dexter uses a `.env` file.

1) Copy the example env file:
```bash
cp env.example .env
```

> On Windows PowerShell, if `cp` doesn’t work:
```powershell
copy env.example .env
```

2) Open `.env` in a text editor and fill in your keys, for example:
```env
OPENAI_API_KEY=your_openai_key_here
FINANCIAL_DATASETS_API_KEY=your_financial_datasets_key_here
TAVILY_API_KEY=your_tavily_key_here
```

Optional (only if you’re using Ollama locally):
```env
OLLAMA_BASE_URL=http://127.0.0.1:11434
```

---

## 5) Run Dexter

### Option A: Normal interactive run
```bash
bun start
```

### Option B: Dev/watch mode (auto reload for development)
```bash
bun dev
```

You should see a terminal UI (Dexter uses React + Ink). It will prompt you to type a question.

Try something simple first:
- “Compare operating performance of Apple and Microsoft”
- “What was Apple’s revenue growth over the last 4 quarters?”
- “Analyze Tesla’s cash flow trends over the past year”
- “What is Amazon’s debt-to-equity ratio based on recent financials?”

---

## 6) Switch models (inside the CLI)

Dexter supports multiple providers (per the README screenshots). In the CLI, use:
- Type: `/model`
- Choose from options like OpenAI / Anthropic / Google (exact list depends on repo version)

If you switch to a provider, make sure the corresponding API key is present in `.env`.

---

## 7) What Dexter is doing while it runs (so you know it’s “working”)

When you ask a question, Dexter typically:
1) Breaks it into tasks (planning)
2) Fetches financial data (income statement / balance sheet / cash flow)
3) Runs calculations and checks consistency (validation)
4) Writes task outputs to files (you’ll often see “task_1_output.json”, etc.)
5) Produces a final synthesized answer

So it’s normal to see “Task Planning… Executing… Validating…”

---

## 8) Common problems + quick fixes

### “bun: command not found”
- Restart terminal after installing Bun.
- On macOS/Linux, ensure Bun is in PATH (installer usually sets it).
- If still broken, run:
  ```bash
  echo $PATH
  ```
  and confirm Bun’s install path is included.

### API errors / empty data
- Confirm your `.env` exists in the **dexter** folder (same level as package files).
- Double-check key names match what Dexter expects (OPENAI_API_KEY, FINANCIAL_DATASETS_API_KEY, etc.).
- Make sure there are no quotes or extra spaces:
  - ✅ `OPENAI_API_KEY=sk-...`
  - ❌ `OPENAI_API_KEY="sk-..."` (sometimes okay, but avoid)
  - ❌ `OPENAI_API_KEY = sk-...`

### Windows path/line-ending weirdness
- If you hit odd shell issues, run it in **Windows Terminal** or use **WSL** (Ubuntu) for a smoother experience.

### It runs but looks “stuck”
- Some queries take multiple steps (fetching statements + computing + validating).
- Try a shorter prompt to confirm everything works, then scale up.

---

If you tell me what device you’re running on (Windows/macOS/Linux) and whether you want OpenAI, Claude, Gemini, or local Ollama, I’ll tailor the exact `.env` values and the best `/model` choice for your setup.

**Mike:** Windows on an HP laptop. Open AI

**GPT:** Perfect — here’s the **Windows (HP laptop) + OpenAI** path, step by step, using **PowerShell**.

---

## 1) Install the basics

### A) Install Git (if you don’t already have it)
1. Install **Git for Windows**
2. Open **PowerShell** and verify:
```powershell
git --version
```

### B) Install Bun (required)
Open **PowerShell** and run:
```powershell
powershell -c "irm bun.sh/install.ps1|iex"
```

Close PowerShell completely, reopen it, then verify:
```powershell
bun --version
```

> If `bun` still isn’t recognized, jump to **Troubleshooting** at the bottom.

---

## 2) Download Dexter and install dependencies

Pick a folder (example: Desktop) and run:

```powershell
cd $HOME\Desktop
git clone https://github.com/virattt/dexter.git
cd dexter
bun install
```

---

## 3) Create your `.env` file (this is where the API keys go)

Copy the example env file:

```powershell
copy env.example .env
```

Now open `.env` in Notepad:

```powershell
notepad .env
```

Fill in at least these:

```env
OPENAI_API_KEY=your_openai_key_here
FINANCIAL_DATASETS_API_KEY=your_financial_datasets_key_here
```

- **OPENAI_API_KEY** = your OpenAI key
- **FINANCIAL_DATASETS_API_KEY** = required if you want Dexter to fetch statements/data automatically (income statement / balance sheet / cash flow).  
  If you don’t add this key, many “financial data fetch” tasks will fail or be limited.

Save and close Notepad.

---

## 4) Run Dexter

### Normal interactive mode:
```powershell
bun start
```

### Dev mode (auto-reload for development):
```powershell
bun dev
```

You should see a terminal UI. Type a question like:

- `Compare operating performance of AAPL and MSFT`
- `What was AAPL revenue growth over the last 4 quarters?`
- `Analyze TSLA cash flow trends over the past year`

---

## 5) Ensure it’s using OpenAI in the CLI

Inside Dexter’s CLI, type:
- `/model`

Then select an **OpenAI** model option.

(If OpenAI options don’t appear, it usually means the app isn’t seeing `OPENAI_API_KEY` from your `.env`.)

---

# Troubleshooting (Windows)

### Bun installs but `bun` is “not recognized”
1. Close PowerShell and reopen.
2. Check if Bun is here:
   - `%USERPROFILE%\.bun\bin`
3. Temporarily add Bun to PATH in the current PowerShell session:
```powershell
$env:Path += ";$HOME\.bun\bin"
bun --version
```
If that works, you can permanently add it via **System Properties → Environment Variables → Path**.

---

### PowerShell blocks the Bun install script
Run this **once** (CurrentUser only), then retry the Bun install:
```powershell
Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
```

---

### Dexter runs but can’t find API keys
- Confirm `.env` is in the **same folder** as the project (the `dexter` folder you `bun start` from).
- Make sure the lines are exactly like:
  - `OPENAI_API_KEY=...` (no extra spaces)
  - `FINANCIAL_DATASETS_API_KEY=...`

---

If you tell me what you’re seeing when you run `bun start` (even just the last ~10 lines of output), I’ll pinpoint the exact fix.

**Mike:** Explain each line of code and it's meaning : cd $HOME\Desktop
git clone https://github.com/virattt/dexter.git
cd dexter
bun install

**GPT:** Here’s what each line does, in plain English, and what it *means* on Windows PowerShell:

```powershell
cd $HOME\Desktop
```
- **`cd`** = “change directory” (move your terminal to a different folder).
- **`$HOME`** = your Windows user home folder (example: `C:\Users\Michael`).
- **`\Desktop`** = the Desktop folder inside your home folder.
- So this moves you into:  
  `C:\Users\<YourUser>\Desktop`

---

```powershell
git clone https://github.com/virattt/dexter.git
```
- **`git`** = the Git program (version control tool).
- **`clone`** = download a full copy of a repository (project) from the internet.
- **`https://github.com/virattt/dexter.git`** = the exact repo address.
- Result: Git creates a new folder named **`dexter`** in your current directory (Desktop) and downloads all the project files into it.

After this finishes, you’ll have something like:
`C:\Users\<YourUser>\Desktop\dexter\`

---

```powershell
cd dexter
```
- Moves you **into the newly downloaded folder** named `dexter`.
- If you were on the Desktop, this changes location from:
  `C:\Users\<YourUser>\Desktop`
  to:
  `C:\Users\<YourUser>\Desktop\dexter`

---

```powershell
bun install
```
- **`bun`** = the Bun runtime + package manager (similar to Node.js + npm/yarn).
- **`install`** = read the project’s dependency list (usually `package.json` and a lockfile) and download all required libraries.
- This creates a **`node_modules`** folder (or Bun’s equivalent structure) and ensures Dexter has everything it needs to run.

In other words: *“Install all the software pieces this project depends on.”*

---

If you want, run this after `cd dexter` to *confirm where you are* before installing:
```powershell
pwd
```
That prints the full folder path you’re currently in.
