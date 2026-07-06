---
title: "Credit deduction explanation"
date: 2025-07-30
cluster: "Misc / Uncategorized"
messages: 4
source: chatgpt-export conversations.json (FULL transcript)
---

# Credit deduction explanation

> 4 messages · 2025-07-30 · cluster: Misc / Uncategorized

**Semantic neighbors:** [[ZoomInfo user query]] · [[Diagram generator]] · [[Email subject line suggestions]] · [[Parse city csv]]

## Transcript

**Mike:** explain this to me in easy to understand terms .  it is a support email from Zoominfo about using workflows and available credits.    //Hello,

My name is Bryn and I work on the Tier II Solutions Team at ZoomInfo, specializing in troubleshooting advanced technical issues. 
I wanted to clarify how credit deduction works with immediate workflows, as this explains the behavior you're experiencing.

Credit Deduction Process: With workflows, credits are deducted at the very end of the processing sequence - specifically after records have been enrolled and contacts discovered, but just before the export action completes.

Why Over-Limit Processing Occurs: With Immediate Workflows, this timing creates a processing window where multiple records can begin their workflow sequence simultaneously before the system has a chance to evaluate whether the credit limit has been reached. Since these records haven't been charged yet during their initial enrollment, the system allows them to continue processing.

Credit Limit Evaluation: The system performs credit limit checks before enrolling new records into the workflow, not during mid-process execution. This means if a batch of records begins processing just before reaching your credit limit, all records in that batch will complete their full workflow cycle. By the time the credits are actually deducted, the workflow may have exceeded the original limit.

This is the expected behavior for immediate workflows due to the technical requirements of when credits are charged.

Let me know if you need any clarification on this process!

 
Sincerely,

Bryn Ellis//

**GPT:** Sure! Here’s a simple explanation of what Bryn from ZoomInfo is saying:

---

### **What They're Explaining:**
They're talking about **how your ZoomInfo credits get used up when you're using "immediate workflows."**

---

### **What’s a Workflow?**
A **workflow** is an automated process. In ZoomInfo, it might look like:
1. Finding new contacts or companies based on your rules.
2. Adding them to a list.
3. Exporting them to your CRM or email tool.

---

### **When Do Credits Get Used?**
Your credits **aren’t used right away** when a workflow starts. Instead, they are used:
- **At the very end** of the workflow — right before the system sends the data out (like exporting the contacts).

---

### **So Why Can You Go Over Your Credit Limit?**
Let’s say you only have **100 credits left**.

If **multiple contacts** start going through the workflow **at the same time**, the system doesn’t check your credit limit for each one right away.

So all of them get processed — even though some of them **shouldn’t be allowed** if the credit check happened earlier.

By the time the system **finally deducts credits at the end**, you might have gone over your credit limit — **but that's expected** with immediate workflows.

---

### **In Plain Terms:**
Think of it like a checkout line at a grocery store. You let 5 people grab groceries and head to the cashier, but you only check their total after they’re all at the register. If you only had money for 3 of them, **too late — all 5 already scanned their stuff.**

---

Let me know if you'd like a visual or if you want to learn how to avoid going over the limit!

**Mike:** so when I set credit limits within Zoominfo , they are only used when exported to my CRM or Salesloft and export as a CSV file ?

**GPT:** Exactly — you're on the right track.

Here’s how it works in **simple terms**:

### ✅ When Are Credits Actually Deducted?
Credits are only deducted **at the final step** of your workflow, when:
- A contact is **exported to your CRM** (like HubSpot, Salesforce, etc.),
- Sent to a platform like **Salesloft**, or
- **Downloaded/exported as a CSV**.

So even if a contact is **found and enrolled** in a workflow, **no credit is used yet**. The system holds off until it’s ready to **deliver that data to you.**

---

### ⚠️ What That Means for Credit Limits:
When you set credit limits, ZoomInfo checks them **before enrolling** new contacts into the workflow — **not during** the middle of the process.

But with **Immediate Workflows**, several contacts can be enrolled at once before credits are actually deducted. That’s why you might **temporarily go over your limit** — because the system didn't subtract the credits until the end.

---

### 🔁 Summary:
- **Credits are used at the export step**, not at the start.
- **Limits help prevent overuse**, but they can be slightly exceeded with “Immediate” workflows due to timing.
- **Viewing or enrolling a contact doesn't cost a credit** — only when you **take it out** of ZoomInfo (CRM, Salesloft, CSV).

---

Let me know if you want to set up guardrails or explore **Scheduled Workflows** to avoid this overlap.
