---
title: "GPT_GoogleSheets_Functions"
date: 2023-07-03
cluster: "Coding / Dev / Infra"
messages: 10
source: chatgpt-export conversations.json (FULL transcript)
---

# GPT_GoogleSheets_Functions

> 10 messages · 2023-07-03 · cluster: Coding / Dev / Infra

**Semantic neighbors:** [[call script]] · [[String vs. Python Objects]] · [[Collaboration Opportunity: Fluid-Datasys]] · [[Video Transcription Request]]

## Transcript

**Mike:** give me a detailed synopsis of this youtube video.  the video is technical in nature so be as clear as possible :  https://www.youtube.com/watch?v=0eZ5kJ-IoiY&t=339s

**GPT:** The video titled "Productivity Super Weapon Uncovered: ChatGPT + Google Sheets" is a tutorial by the channel Bardeen. It explains how to use ChatGPT, an AI developed by OpenAI, inside Google Sheets. The video provides a detailed walkthrough of various functions and use cases of ChatGPT in Google Sheets. Here's a detailed breakdown:

1. **Introduction (0:00)**: The video begins with an introduction to the concept of using ChatGPT with Google Sheets. The presenter mentions that ChatGPT can generate tables from scratch, create financial reports, and even create a grocery shopping list.

2. **Enabling GPT for Sheets (1:00)**: The presenter shows how to enable GPT for Sheets by installing a Google Sheets add-on called "GPT for Sheets". The add-on is connected to the user's OpenAI account through an API key.

3. **Pricing Explained (1:58)**: The presenter explains the pricing of using GPT for Sheets. The cost depends on the input length of the prompt and the output length. The presenter shows his own usage costs, which totalled 11 cents for the month.

4. **Functions Overview (3:10)**: The presenter provides an overview of the various functions available in the GPT for Sheets add-on. These include generating tables, correcting grammar, classifying text, summarizing text, and translating text.

5. **Getting Data into Sheets (4:15)**: The presenter explains two ways to get data into Google Sheets for analysis: importing data from web apps and using a web scraper. The presenter demonstrates how to import a list of support emails into Google Sheets using a Chrome extension called Bardeen.

6. **Classifying Emails (5:35)**: The presenter uses the GPT_CLASSIFY function to classify the support emails into positive, negative, or neutral categories. The classified emails can then be filtered for further analysis.

7. **Summarizing Emails (7:05)**: The presenter uses the GPT_SUMMARIZE function to generate one-sentence summaries of the emails, highlighting the main advantage or disadvantage mentioned in each email.

8. **Importing Data with Web Scraper (7:43)**: The presenter demonstrates how to use a web scraper to import data from Amazon product reviews into Google Sheets.

9. **Open Prompting GPT (9:03)**: The presenter shows how to use the GPT function in combination with the CONCATENATE function to generate a prompt that includes the review text, and then extract information from the review.

10. **Building AI Automations for Google Sheets (10:11)**: The presenter demonstrates how to use Bardeen to build AI automations for Google Sheets by typing in a prompt. The example used is scraping LinkedIn profiles and adding them to a Google Sheet.

11. **AI Replicates Your Pattern GPT_FILL (11:40)**: The presenter shows how to use the GPT_FILL function to clean up inconsistent data, such as names, in the Google Sheet.

12. **End Notes (14:15)**: The video concludes with the presenter summarizing the tutorial and providing links to the add-on, pricing table, and individual automations in the video description.

Throughout the video, the presenter uses the Bardeen Chrome extension to automate tasks and import data into Google Sheets. The video is highly technical and provides a detailed guide to using ChatGPT in Google Sheets for productivity and automation tasks.

**Mike:** using the transcript , give me the exact commands for 4 and 7

**GPT:** Sure, here are the exact commands for points 4 and 7 from the transcript:

**4. Functions Overview (3:10)**: 

The presenter provides an overview of the various functions available in the GPT for Sheets add-on. Here are some of the functions mentioned:

- GPT: This function takes a prompt and returns the output. For example, `=GPT("Give me 10 random animals")` would return a list of 10 random animals in a single cell.

- GPT_LIST: This function also takes a prompt but outputs each item as a separate row. For example, `=GPT_LIST("List 10 random animals")` would return a list of 10 random animals, each in a separate row.

- GPT_TABLE: This function generates a table based on the prompt. The presenter demonstrated this function earlier in the video.

- GPT_CLASSIFY: This function classifies the input text into categories. For example, `=GPT_CLASSIFY(B2, "positive, negative, neutral")` would classify the text in cell B2 as either positive, negative, or neutral.

- GPT_SUMMARIZE: This function summarizes the input text. For example, `=GPT_SUMMARIZE(B2, "1 sentence")` would provide a one-sentence summary of the text in cell B2.

- GPT_TRANSLATE: This function translates the input text into a specified language.

**7. Summarizing Emails (7:05)**: 

The presenter uses the GPT_SUMMARIZE function to generate one-sentence summaries of the emails, highlighting the main advantage or disadvantage mentioned in each email. Here's the exact command used:

- `=GPT_SUMMARIZE(B2, "1 sentence")`: This command provides a one-sentence summary of the text in cell B2. The presenter uses this command to summarize the body of the emails.

**Mike:** great!  list every function discussed in the video just like you did in the previous output

**GPT:** Sure, here are all the functions discussed in the video:

1. **GPT**: This function takes a prompt and returns the output. For example, `=GPT("Give me 10 random animals")` would return a list of 10 random animals in a single cell.

2. **GPT_LIST**: This function also takes a prompt but outputs each item as a separate row. For example, `=GPT_LIST("List 10 random animals")` would return a list of 10 random animals, each in a separate row.

3. **GPT_TABLE**: This function generates a table based on the prompt. The presenter demonstrated this function earlier in the video.

4. **GPT_CLASSIFY**: This function classifies the input text into categories. For example, `=GPT_CLASSIFY(B2, "positive, negative, neutral")` would classify the text in cell B2 as either positive, negative, or neutral.

5. **GPT_SUMMARIZE**: This function summarizes the input text. For example, `=GPT_SUMMARIZE(B2, "1 sentence")` would provide a one-sentence summary of the text in cell B2.

6. **GPT_TRANSLATE**: This function translates the input text into a specified language.

7. **GPT_FILL**: This function takes examples and an input, and it tries to replicate the pattern seen in the examples with the input. For example, `=GPT_FILL(A2:B5, C2:C10)` would take the examples in cells A2 to B5 and try to replicate the pattern with the inputs in cells C2 to C10.

8. **GPT_FORMAT**: This function corrects the grammar of the input text. The exact usage was not shown in the video.

9. **GPT_EDIT**: This function edits the input text. The exact usage was not shown in the video.

10. **GPT_TAG**: This function tags the input text. The exact usage was not shown in the video.

**Mike:** great!  here is another video by the same presenter.  list all relevant functions and info

**GPT:** Sure, I'd be happy to help! Could you please provide the link to the video you'd like me to analyze?

**Mike:** https://www.youtube.com/watch?v=DlusIT0ISrg

**GPT:** Here are the functions and relevant information discussed in the video "7 ChatGPT Plugins For Productivity & How To Master Them":

1. **PlaylistAI**: This plugin is used to create Spotify playlists. The presenter demonstrates its use by creating a minimal techno playlist.

2. **KeyMateAI**: This plugin allows ChatGPT to browse the internet. It's used to search the web for information about how ChatGPT plugins work.

3. **Show Me**: This plugin is used to create diagrams and visualize information. The presenter uses it to create a knowledge tree for learning rocket science.

4. **Video Insights**: This plugin provides video summaries and metadata. It's used to analyze a video about web scraping using ChatGPT.

5. **Bardeen**: This is a workflow automation tool. The presenter demonstrates its use by creating an automation to scrape LinkedIn profiles and write personalized outreach messages. Another use case demonstrated is copying all comments from a LinkedIn post into a spreadsheet.

6. **Wolfram**: This plugin adds computation and reasoning capabilities to ChatGPT. It's used to perform financial analysis on a startup listed for sale on acquire.com. It's also used to calculate potential profits from negotiating payment terms.

7. **Instacart**: This plugin is used to create a shopping list for a recipe. The presenter uses it to create a shopping list for pasta bolognese.

The presenter also provides tips on how to effectively prompt plugins, such as giving ChatGPT a role, explicitly stating to use a specific plugin, breaking down requests into individual steps, and understanding what a plugin can do.
