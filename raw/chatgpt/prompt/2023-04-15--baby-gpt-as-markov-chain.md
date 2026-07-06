---
title: "Baby GPT as Markov Chain."
date: 2023-04-15
cluster: "Prompt Eng / GPT Building"
messages: 8
source: chatgpt-history (globe snapshot — previews truncated ~280 chars; full text lives in conversations.json export)
---

# Baby GPT as Markov Chain.

> 8 messages · 2023-04-15 · cluster: Prompt Eng / GPT Building

**Semantic neighbors:** [[Python Pal - GPT]] · [[Canva - GPT]] · [[Personalized LinkedIn Message]] · [[Market Analyst GPT]]

## Transcript preview

**Mike:** Explain : This is a baby GPT with two tokens 0/1 and context length of 3, viewing it as a finite state markov chain. It was trained on the sequence "111101111011110" for 50 iterations. The parameters and the architecture of the Transformer modifies the probabilities on the…

**GPT:** In this case, the baby GPT is a very simple version of a language model with only two tokens (0 and 1) and a context length of 3, meaning it can only take into account the three most recent tokens when predicting the next one. This model can be viewed as a finite state Markov…

**Mike:** What is a Markov chain

**GPT:** A Markov chain is a mathematical model that describes a sequence of events, also called states, in which the probability of transitioning from one state to another depends only on the current state and not on the previous states. This property is known as the Markov property or…

**Mike:** Write variation on this script : curl https://api.openai.com/v1/embeddings \ -H "Content-Type: application/json" \ -H "Authorization: Bearer $OPENAI_API_KEY" \ -d '{ "input": "Your text string goes here", "model": "text-embedding-ada-002" }'

**GPT:** You can modify the given `curl` script to use a different model or customize the input text. Here's a variation of the script: ```bash curl https://api.openai.com/v1/embeddings \ -H "Content-Type: application/json" \ -H "Authorization: Bearer $OPENAI_API_KEY" \ -d '{ "input":…

**Mike:** Can you embed this script in a website instead of copying in text?

**GPT:** Certainly! To embed this script in a website, you can create an HTML form and use JavaScript to make an AJAX request to the API. Here's an example of how to do that: 1. Create an HTML file with a form: ```html <!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <meta…
