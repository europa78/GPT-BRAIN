---
title: "Google Sheet Custom Functions"
date: 2023-08-21
cluster: "Coding / Dev / Infra"
messages: 28
source: chatgpt-history (globe snapshot — previews truncated ~280 chars; full text lives in conversations.json export)
---

# Google Sheet Custom Functions

> 28 messages · 2023-08-21 · cluster: Coding / Dev / Infra

**Semantic neighbors:** [[two fingers album description]] · [[APP SCRIPTS#2]] · [[Economic Calendar for June]] · [[Use OpenAI API]]

## Transcript preview

**Mike:** what does this script represent ? (function onOpen() { var sheet = SpreadsheetApp.getActiveSpreadsheet(); var entries = [{ name : "Refresh", functionName : "refreshLastUpdate" }]; sheet.addMenu("Refresh", entries); }; function refreshLastUpdate() {…

**GPT:** The provided script appears to be written in Google Apps Script, a JavaScript-based language that lets you add functionality to Google Sheets, Docs, Slides, and Forms. Here's a breakdown of what each part of the script does: 1. **onOpen() Function**: - This function is a special…

**Mike:** what does this script represent : (/** * @description Automatically refreshes specified custom functions * @author TheMaster https://stackoverflow.com/users/8404453 * @version 2.0.0 * @changelog * Updated to support all custom functions and arguments * Avoid eternal loops */ /**…

**GPT:** The provided script is written in Google Apps Script, a JavaScript-based language that allows you to add functionality to Google Sheets, Docs, Slides, and Forms. This script is designed to automatically refresh a specific custom function in a Google Sheet when certain changes…

**Mike:** what does this function do : IMPORTRANGE(spreadsheet_url, range_string)

**GPT:** The `IMPORTRANGE` function is a built-in function in Google Sheets that allows you to import a range of cells from one spreadsheet into another spreadsheet. Here's a breakdown of its functionality: ### Parameters: 1. **spreadsheet_url**: The URL of the spreadsheet from which you…

**Mike:** define this function and its purpose : IMPORTDATA Imports data at a given url in .csv (comma-separated value) or .tsv (tab-separated value) format. Sample Usage IMPORTDATA("http://www.census.gov/2010census/csv/pop_change.csv") IMPORTDATA(A2) Syntax IMPORTDATA(url) url - The url…

**GPT:** The `IMPORTDATA` function is a built-in function in Google Sheets that allows users to import data from an external URL, specifically data in `.csv` (comma-separated value) or `.tsv` (tab-separated value) format. ### Purpose: - **Data Integration**: It provides a way for users…

**Mike:** can I use this function to fetch data from an article on the web and put it into a cell ?

**GPT:** No, the `IMPORTDATA` function in Google Sheets is specifically designed to import data from external URLs in `.csv` (comma-separated value) or `.tsv` (tab-separated value) format. It is not designed to fetch or scrape content from general web articles or web pages. If you want…
