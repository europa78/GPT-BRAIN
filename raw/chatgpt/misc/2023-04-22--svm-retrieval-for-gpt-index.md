---
title: "SVM retrieval for @gpt_index"
date: 2023-04-22
cluster: "Misc / Uncategorized"
messages: 12
source: chatgpt-history (globe snapshot — previews truncated ~280 chars; full text lives in conversations.json export)
---

# SVM retrieval for @gpt_index

> 12 messages · 2023-04-22 · cluster: Misc / Uncategorized

**Semantic neighbors:** [[CSV Data Assistance]] · [[Adsense]] · [[Download OpenAI APIs]] · [[AI Chatbot Workflow Analysis]]

## Transcript preview

**Mike:** Explain: You can now use @karpathy’s SVM retrieval idea in @gpt_index (0.5.21)! Instead of doing kNN embedding lookup, you can now fit a hyperplane to separate query from data: - SVM - logistic regression (s/o @dsmilkov) - Linear regression

**GPT:** In version 0.5.21 of the @gpt_index, you can now use @karpathy's Support Vector Machine (SVM) retrieval idea to enhance search and retrieval performance. Previously, the system relied on k-Nearest Neighbors (kNN) embedding lookup to find the closest matches in the index. Now,…

**Mike:** Explain this in lay man terms

**GPT:** Sure! In the newest version of a search tool called @gpt_index, they added a new way to find the information you're looking for, based on an idea by @karpathy. Before, the search tool would find the closest matches to your query by looking at the "neighbors" of the information…

**Mike:** Give a high level explanation with bullet points : import logging import sys logging.basicConfig(stream=sys.stdout, level=logging.INFO) logging.getLogger().addHandler(logging.StreamHandler(stream=sys.stdout)) from gpt_index import GPTSimpleVectorIndex, SimpleDirectoryReader from…

**GPT:** Here's a high-level explanation of the code with bullet points: 1. Import necessary libraries, including logging and gpt_index modules. 2. Set up logging configuration to display information on the screen. 3. Load documents from a folder (in this case, essays by Paul Graham)…

**Mike:** What is a practical application for this

**GPT:** A practical application for this approach is building a custom search engine or information retrieval system. By using GPTSimpleVectorIndex along with different query techniques (like SVM, Linear Regression, or Logistic Regression), you can create a powerful search tool that…

**Mike:** What I Worked On February 2021 Before college the two main things I worked on, outside of school, were writing and programming. I didn't write essays. I wrote what beginning writers were supposed to write then, and probably still are: short stories. My stories were awful. They…

**GPT:** It sounds like your journey has been quite an interesting one, filled with exploration and discovery. Your early experiences with programming on the IBM 1401 and later with microcomputers like the TRS-80 sparked your passion for programming. In college, you initially planned to…
