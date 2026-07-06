---
title: "Python Function for GPT-3"
date: 2023-10-01
cluster: "Prompt Eng / GPT Building"
messages: 26
source: chatgpt-history (globe snapshot — previews truncated ~280 chars; full text lives in conversations.json export)
---

# Python Function for GPT-3

> 26 messages · 2023-10-01 · cluster: Prompt Eng / GPT Building

**Semantic neighbors:** [[SEO - SEO GPT / AIPRM]] · [[Email Wizard - GPT]] · [[AI Prompts GPT Training]] · [[AI Today GPT]]

## Transcript preview

**Mike:** def get_completion(prompt, model="gpt-3.5-turbo"): messages = [{"role": "user", "content": prompt}] response = openai.ChatCompletion.create( model=model, messages=messages, temperature=0, # this is the degree of randomness of the model's output ) return…

**GPT:** This seems to be a Python function that interfaces with the OpenAI API to get a completion response from a given GPT model, specifically the `gpt-3.5-turbo` model by default. The function takes a `prompt` as input and sends it to the API. The completion is returned without any…

**Mike:** fact_sheet_chair = """ OVERVIEW - Part of a beautiful family of mid-century inspired office furniture, including filing cabinets, desks, bookcases, meeting tables, and more. - Several options of shell color and base finishes. - Available with plastic back and front upholstery…

**GPT:** The provided text is a fact sheet for a chair. It provides detailed information on various aspects of the chair, including its overview, construction details, dimensions, options available, materials used, and its country of origin. Would you like a summary or any specific…

**Mike:** write a prompt that will generate this text

**GPT:** To generate the provided text about the chair, we would want a prompt that describes what we're looking for in broad terms. Here's a possible prompt: "Provide a detailed fact sheet for a mid-century inspired office chair that is part of a larger collection of office furniture.…

**Mike:** write a delimited prompt that is more detailed that will generate this text

**GPT:** To increase the likelihood of generating the exact text you provided, we can craft a more detailed and delimited prompt. Here's an attempt: "Provide a fact sheet on a chair with the following specifications: **Section - OVERVIEW:** 1. Mention that it's part of a mid-century…

**Mike:** here is a prompt : Your task is to help a marketing team create a description for a retail website of a product based on a technical fact sheet. Write a product description based on the information provided in the technical specifications delimited by triple backticks. Use at…

**GPT:** Using your provided prompt, the model would generate a product description based on the fact sheet you've given for the chair. Here's how the model might respond: "Discover our mid-century inspired office chair, crafted in Italy. Featuring adjustable settings, a choice of shell…
