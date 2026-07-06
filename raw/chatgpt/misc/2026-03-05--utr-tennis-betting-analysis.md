---
title: "UTR Tennis Betting Analysis"
date: 2026-03-05
cluster: "Misc / Uncategorized"
messages: 20
source: chatgpt-export conversations.json (FULL transcript)
---

# UTR Tennis Betting Analysis

> 20 messages · 2026-03-05 · cluster: Misc / Uncategorized

**Semantic neighbors:** [[Betting Analysis +170 Value]] · [[Electra Bridge Loan Analysis]] · [[Pro Tennis Betting Analysis#2]] · [[Tennis Betting Edge Analysis]]

## Transcript

**Mike:** Optimized Betting Analysis Prompt
UTR Pro Tennis Series (Boca Raton)
ROLE

You are an elite professional tennis betting analyst specializing in UTR Pro Tennis Series matches, particularly events held in Boca Raton, Florida.

You focus on identifying high-probability betting opportunities and market inefficiencies for sportsbooks such as Hard Rock Bet.

Your expertise includes:

UTR rating systems and rating gaps

South Florida tennis circuit players

Player familiarity with Boca Raton hard courts

Training partners and academy affiliations

Match format differences in UTR events

Serve dominance and short-set volatility

Probability modeling vs sportsbook implied odds

You evaluate matches like a professional bettor allocating real capital.

OBJECTIVE

For each matchup provided:

Determine the single best betting pick based on:

True win probability

Sportsbook implied probability

Expected value

Your analysis should focus on probabilistic edge, not simply predicting winners.

The final pick should represent the wager you would personally place with your own bankroll.

KEY ANALYSIS FACTORS
1️⃣ UTR Rating Gap

Primary indicator in this circuit.

Approximate probability model:

UTR Gap	Win Probability
0.25	58%
0.5	64%
1.0	75%
1.5	85%
2.0+	92%
2️⃣ Player Level Indicators

Evaluate:

Former ATP / Challenger players

Division 1 college players

Futures tour experience

Recent UTR event performance

3️⃣ Surface Familiarity

Boca Raton UTR events are typically:

Outdoor hard courts

Often windy conditions

Favor strong servers and aggressive baseline players

4️⃣ Match Format Volatility

UTR matches often feature:

Short sets

Fast scoring

Higher upset probability than ATP matches

This increases underdog value opportunities.

5️⃣ Market Inefficiencies

Sportsbooks frequently misprice UTR matches because:

Limited betting liquidity

Incomplete player data

Public bettors rarely follow this circuit

Focus on identifying positive expected value wagers.

BETTING MARKETS

Evaluate the following markets where available:

Match Winner (Moneyline)

Game Handicap

Set Betting

Live Betting Opportunities

PROBABILITY MODEL

Calculate:

Implied Probability

Example:

-145 → 59%
+100 → 50%
+300 → 25%

Then compare with estimated true probability.

If:

True Probability > Implied Probability
→ Positive Expected Value Bet

OUTPUT FORMAT

Return a single JSON array containing analysis for all matches.

Do not include Markdown or commentary outside JSON.

Schema:

[
{
"match": "",
"tournament": "UTR Pro Tennis Series Boca Raton",
"player1": "",
"player2": "",
"odds_player1": "",
"odds_player2": "",
"implied_probability_player1": "",
"implied_probability_player2": "",
"estimated_true_probability_player1": "",
"estimated_true_probability_player2": "",
"value_edge": "",
"recommended_bet": "",
"confidence_rating": "",
"risk_level": ""
}
]
INPUT MATCHES

Example input structure:

Ivan Yatsuk vs Isaac Nortey — +100 / -145

Omar Riazali vs Adrien Burdet — +300 / -500

Matey Stanislavijevic vs Oliver King — +275 / -450

Alexander Boez vs Daniel Cohen — -650 / +350

Blu Baker vs Felix Mischker — -2500 / +850

BETTING PHILOSOPHY

Selections should prioritize:

Highest expected value

Probability edge

Realistic bankroll management

Avoid recommending bets with no mathematical edge, even if the player is likely to win.

**Mike:** do not create an html file .  just give me the analysis

**GPT:** Here’s the **betting analysis for the UTR Pro Tennis Series USA (Boca Raton)** card you posted (moneylines only), using (1) **market math** and (2) **what’s actually happened in this Boca Raton M02 event so far**.

Boca setup note: these matches are **outdoor hard** at the **Rick Macci Tennis Center**. citeturn3view0

---

## Market math (from your odds)
Implied (break-even) probabilities from your screen:

- **Yatsuk +100** → 50.0% | **Nortey -145** → 59.2%  
- **Rhazali +300** → 25.0% | **Burdet -500** → 83.3%  
- **Stanisavljevic +275** → 26.7% | **King -450** → 81.8%  
- **Boez/Baez -650** → 86.7% | **Cohen +350** → 22.2%  
- **Baker -2500** → 96.2% | **Mischker +850** → 10.5%

(Books are holding ~7–9% vig across these.)

---

## Match-by-match edges

### 1) Ivan Yatsuk (+100) vs Isaac Nortey (-145)
**What’s happened in this event:**
- Yatsuk is **3–0** in Boca Raton M02, all **2–0 wins**, including a **straight-sets win over Oliver King**. citeturn8search9  
- Nortey **lost to Oliver King 1–2** (after winning the first set). citeturn8search8  
- Nortey did beat Giovanni Rezk 2–0. citeturn2view1  

**Why the line looks off:**  
Within the same event/conditions: **Yatsuk beat King**, and **King beat Nortey**. That’s not a perfect model, but it’s a strong “same-court, same-week” signal that **Yatsuk shouldn’t be a plus-money underdog**.

**My estimated true win probability:** ~**58–62% Yatsuk** (vs 50% break-even at +100)

✅ **Best bet on the card:** **Yatsuk ML +100**  
- **Confidence:** High (relative to this slate)  
- **Risk level:** Medium (UTR format volatility always exists, but the price is wrong if form holds)

---

### 2) Omar Rhazali (+300) vs Adrien Burdet (-500)
**Event form:**
- Rhazali is **0–2**, both **0–2 losses** in this Boca M02. citeturn7search13  
- Burdet is **2–0**, with two **2–1 wins** (competitive but winning). citeturn7search7  

**Pricing:** -500 requires Burdet to win **>83.3%** to be worth it. Given Rhazali hasn’t taken a set, Burdet is clearly the right side—but **the price is doing most of the work already**.

➡️ **Lean:** Burdet wins, but **pregame ML is thin EV** at -500.  
If you *must* play it, this is more of a **parlay piece** than a standalone value bet.

---

### 3) Mateya Stanisavljevic (+275) vs Oliver King (-450)
**Event form:**
- Stanisavljevic is **0–2**, including a **0–2 loss to Yatsuk** and a **0–2 loss to Rezk**. citeturn8search12  
- King is **1–1**: beat Nortey **2–1**, lost to Yatsuk **0–2**. citeturn8search8turn8search9  

**Pricing:** -450 implies **~82%**. King is the correct favorite, but again **you’re paying a premium**.

➡️ **Lean:** King wins. **No strong pregame ML edge** at -450.

---

### 4) Alexander Baez/Boez (-650) vs Daniel Cohen (+350)
**Event form:**
- Baez is **1–1** (lost 0–2 to Blu Baker, won 2–1 vs Liljekvist). citeturn8search14  
- Cohen is **0–2** (lost 0–2 to Blu Baker, lost 1–2 to Mischker). citeturn8search7turn7search16  

**Why I don’t love -650:**  
-650 implies **~87%**. Nothing in the *actual Boca results* screams “87% mismatch” here—especially since both have been on court with overlapping opponents and Cohen at least took a set off Mischker.

➡️ **Lean/value look:** **Cohen +350** as a **small-stake value poke** *if you’re hunting EV* (not a “safe pick”).  
Otherwise: pass.

---

### 5) Blu Baker (-2500) vs Felix Mischker (+850)
**Event form:**
- Baker has been **dominant**: beat Cohen **2–0 (6–2, 6–1)** and beat Baez **2–0 (6–3, 6–2)**. citeturn8search7turn8search14  
- Mischker beat Cohen **2–1**. citeturn7search16  

**Pricing:**  
-2500 is basically unplayable unless you believe Baker is truly **96%+** in this format.

➡️ **Recommendation:** **No bet pregame** (either side).  
(+850 is only worth it if you think Baker is closer to ~88–90%, but his scorelines suggest he might actually be in the mid-90s.)

---

## The one wager I’d actually place
**Ivan Yatsuk ML +100** — best combination of **pricing error + same-event evidence**. citeturn8search9turn8search8

If you want, paste the **exact match format** (UTR can vary: short sets / tiebreak sets / etc.) and I’ll tighten the true-prob estimates + give a **stake size** (¼ Kelly style) for Yatsuk.

**Mike:** The match between Ivan Gakhov and Ivan Liutarevich (scheduled for today, March 5, 2025) follows the standard professional match format: 
Format: Best of 3 sets.
Set Structure: Standard 6-game sets with a 7-point tiebreak at 6-6 in any set.
Surface: Red Clay (Shymkent, Kazakhstan). 
Match Context for Yatsuk (Probabilities)
While Gakhov is significantly higher ranked (ATP #253 vs. Liutarevich #1653), Liutarevich has historically been a doubles specialist who occasionally plays singles in these ITF/Challenger events

**GPT:** Got it. I’ll treat this as a **standard best-of-3, full sets on red clay in Shymkent** and give you a **true-probability view + what price you need to make it a real bet**.

One important catch: the only Shymkent red-clay singles meeting I can verify between **Gakhov vs Liutarevich** is **April 14, 2021**, where **Gakhov won 6-4, 6-2**. citeturn1view0  
(So I can’t confirm the “March 5, 2025” scheduling from what I pulled—analysis below still holds as a handicap framework.)

---

## Player reality check (why the market will make Gakhov huge)
**Ivan Gakhov**
- Established Challenger-level singles player; TennisAbstract lists him around **rank ~253** with a **career-high 142**, left-handed. citeturn2search10
- Clay isn’t a weakness for him (he’s had notable clay success at Challenger level). citeturn3search1

**Ivan Liutarevich**
- Primarily a **doubles** profile: **career-high doubles rank 114**; singles peak around **693** (and generally not a steady singles schedule). citeturn0search7turn3search0

**Format note (this matters):** Best-of-3 full sets on clay **reduces upset volatility** versus short-set UTR formats. The stronger baseliner usually has more time to separate.

---

## My true probability (singles, clay, best-of-3)
Given the gap in singles level + format + surface:

- **Estimated true win probability: Gakhov 90–94%**
- Midpoint I’d use for pricing: **92% Gakhov / 8% Liutarevich**

### What that means in “fair odds”
Using 92% as the fair number:
- **Gakhov fair ML ≈ -1150**
- **Liutarevich fair ML ≈ +1150**

So…

- If a book hangs **Gakhov -1300 / -1500 / -2000**, you’re *not* getting paid for the risk (negative EV unless you think he’s closer to 94–95%+).  
- If you can somehow get **Gakhov -1000 or better (less negative)**, then you likely have a real edge.

---

## The one bet I’d actually make (value-first)
Because the moneyline is usually priced to death in this kind of mismatch, the best “single pick” is normally:

### ✅ **Gakhov 2–0 in sets (–1.5 sets), ONLY if you can get -250 or better**
Why that threshold:
- My estimated **2–0 probability ~70–75%** (call it **74%** midpoint).
- **74% fair price ≈ -285**.
- So if you’re laying **-250** (or anything better than that), you’re on the right side of fair value.

If the 2–0 price is worse than **-300**, or if you only have an absurd ML like **-1800**, then the correct pro move is simply: **pass**.

---

## Quick live plan (if you’re watching)
If Gakhov starts slow (common on clay) and you see:
- he’s **winning the physical rallies** and
- he’s creating **break chances early** even if he doesn’t convert,

then a **better live ML** can become your best entry (instead of paying the pregame tax).

---

If you paste the **actual Hard Rock line(s)** you’re seeing (ML and/or 2–0 / -1.5 sets / games handicap), I’ll give you the exact:
- implied %
- my true %
- EV%
- and the single best wager at the current prices.
