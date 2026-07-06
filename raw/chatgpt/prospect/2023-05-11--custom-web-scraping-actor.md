---
title: "Custom Web Scraping Actor"
date: 2023-05-11
cluster: "Prospecting / Lead Gen"
messages: 6
source: chatgpt-history (globe snapshot — previews truncated ~280 chars; full text lives in conversations.json export)
---

# Custom Web Scraping Actor

> 6 messages · 2023-05-11 · cluster: Prospecting / Lead Gen

**Semantic neighbors:** [[LinkedIn Message for Prospecting]] · [[Dall-E Baseball card leads]] · [[Datasys leads]] · [[Lead Generation Sources]]

## Transcript preview

**Mike:** this is a google search results scraper from Apify. I want to make my own custom actor , similar to this one. I will provide you with the code. I want you to modify the script to fetch phone numbers and names from the websites instead of the URL. here is the code :…

**GPT:** If you want to scrape phone numbers and names from the websites, the Apify SDK can help. However, it's important to note that each website has its own structure, and thus there may not be a one-size-fits-all selector or method to get phone numbers and names from every website.…

**Mike:** what do you think of this script ? // The "$" property contains the Cheerio object which is useful // for querying DOM elements and extracting data from them. const pageTitle = $('title').first().text(); // A selector to find headlines in h2 tags const headlineSelector = 'h2';…

**GPT:** The script you provided is a straightforward example of how to extract data from a webpage using the Cheerio library. The script focuses on extracting the following information: 1. Page title. 2. Headlines from `<h2>` tags. 3. Summaries from `<p>` tags. 4. Prices in US dollars.…

**Mike:** I want to create an actor that scans finance articles for information on stocks , mostly in the S&P 100. I want to use the data to generate informed trade decisions. can I modify the actor to scrape financial sites only ?

**GPT:** Yes, you can modify an Apify actor to specifically scrape financial sites for information related to stocks, especially those in the S&P 100. However, keep in mind that the structure of these websites can vary greatly, so you might need to create a more complex or specific set…
