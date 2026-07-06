---
title: "Custom Web Scraping Actor"
date: 2023-05-11
cluster: "Prospecting / Lead Gen"
messages: 6
source: chatgpt-export conversations.json (FULL transcript)
---

# Custom Web Scraping Actor

> 6 messages · 2023-05-11 · cluster: Prospecting / Lead Gen

**Semantic neighbors:** [[LinkedIn Message for Prospecting]] · [[Dall-E Baseball card leads]] · [[Datasys leads]] · [[Lead Generation Sources]]

## Transcript

**Mike:** this is a google search results scraper from Apify.   I want to make my own custom actor , similar to this one.  I will provide you with the code.  I want you to modify the script to fetch phone numbers and names from the websites instead of the URL.    here is the code :  "csvFriendlyOutput": false,
  "customDataFunction": "async ({ input, $, request, response, html }) => {\n  return {\n    pageTitle: $('title').text(),\n  };\n};",
  "includeUnfilteredResults": false,
  "languageCode": "en",
  "maxPagesPerQuery": 10,
  "mobileResults": false,
  "queries": "law firm marketing agency florida ",
  "resultsPerPage": 100,
  "saveHtml": false,
  "saveHtmlToKeyValueStore": false,
  "maxConcurrency": 10

**GPT:** If you want to scrape phone numbers and names from the websites, the Apify SDK can help. However, it's important to note that each website has its own structure, and thus there may not be a one-size-fits-all selector or method to get phone numbers and names from every website. 

Nonetheless, I can provide an example of how to modify the `customDataFunction` to try and extract names and phone numbers from a typical website. The example will use regular expressions to try and match phone numbers and names. 

Here's how you can modify your code:

```json
{
  "csvFriendlyOutput": false,
  "customDataFunction": "async ({ input, $, request, response, html }) => {\n  const phoneNumberRegex = /\\+?([0-9]{1,4}?[-. ]?)(?:(?:\\([0-9]{1,3}?\\)[-. ]?)|(?:[0-9]{1,3}[-. ]?))([0-9]{1,4}[-. ]?){1,2}[0-9]{1,9}/g;\n  const nameRegex = /\\b([A-Z][a-z]+\\s[A-Z][a-z]+)\\b/g;\n  const text = $('body').text();\n  let matches, phoneNumbers = [], names = [];\n  while (matches = phoneNumberRegex.exec(text)) phoneNumbers.push(matches[0]);\n  while (matches = nameRegex.exec(text)) names.push(matches[0]);\n  return {\n    pageTitle: $('title').text(),\n    phoneNumbers: phoneNumbers,\n    names: names,\n  };\n};",
  "includeUnfilteredResults": false,
  "languageCode": "en",
  "maxPagesPerQuery": 10,
  "mobileResults": false,
  "queries": "law firm marketing agency florida ",
  "resultsPerPage": 100,
  "saveHtml": false,
  "saveHtmlToKeyValueStore": false,
  "maxConcurrency": 10
}
```

This script will look for phone numbers and names in the text of the entire webpage. If a match is found, it will be stored in the respective array (`phoneNumbers` or `names`). 

Bear in mind that this method may not be perfect for all websites. Some sites may require more specific selectors or additional logic to correctly find and extract the data you need. Also, make sure you have the necessary permissions to scrape data from these websites, as web scraping is subject to legal and ethical considerations.

**Mike:** what do you think of this script ? // The "$" property contains the Cheerio object which is useful
// for querying DOM elements and extracting data from them.
const pageTitle = $('title').first().text();

// A selector to find headlines in h2 tags
const headlineSelector = 'h2';
// A selector to find summaries in p tags
const summarySelector = 'p';
// A regular expression to match prices in US dollars
const priceRegex = /\\$\\d+(\\.\\d+)?/g;
// A regular expression to match ratings out of 5 stars
const ratingRegex = /\\d\\.\\d\\/5/g;
// Extract all headlines from the h2 tags
const headlines = $(headlineSelector).map((i, el) => $(el).text()).get();
// Extract all summaries from the p tags
const summaries = $(summarySelector).map((i, el) => $(el).text()).get();
// Extract all prices from the html
const prices = $.html().match(priceRegex) || [];
// Extract all ratings from the html
const ratings = $.html().match(ratingRegex) || [];

// The "request" property contains various information about the web page loaded. 
const url = request.url;

// Use "log" object to print information to actor log.
log.info('Page scraped', { url, pageTitle, headlines, summaries, prices, ratings });

// Return an object with the data extracted from the page.
// It will be stored to the resulting dataset.
return {
    url,
    pageTitle,
    headlines,
    summaries,
    prices,
    ratings
};
Copy
}

**GPT:** The script you provided is a straightforward example of how to extract data from a webpage using the Cheerio library. The script focuses on extracting the following information:

1. Page title.
2. Headlines from `<h2>` tags.
3. Summaries from `<p>` tags.
4. Prices in US dollars.
5. Ratings out of 5 stars.

The script uses selectors to extract headlines and summaries, while regular expressions are used to extract prices and ratings. The extracted data is then logged and returned as an object to be stored in the resulting dataset.

The script is well-structured and should work for pages that have the desired information in the specified format. However, it's important to note that this script might not work perfectly on every website, as the structure and format of the data can vary. In such cases, you would need to customize the selectors or regular expressions according to the specific website's structure.

Also, remember that web scraping is subject to legal and ethical considerations, so ensure you have the necessary permissions to scrape data from the websites you target.

**Mike:** I want to create an actor that scans finance articles for information on stocks , mostly in the S&P 100.  I want to use the data to generate informed trade decisions.  can I modify the actor to scrape financial sites only ?

**GPT:** Yes, you can modify an Apify actor to specifically scrape financial sites for information related to stocks, especially those in the S&P 100. However, keep in mind that the structure of these websites can vary greatly, so you might need to create a more complex or specific set of rules for extracting the data.

Here's an example of how you might set up such an actor:

```javascript
// Define a list of S&P 100 stocks
const stocks = ['AAPL', 'MSFT', 'AMZN', /*...other stocks here...*/ ];

// Define the websites to scrape
const financialWebsites = ['https://www.financialsite1.com/', 'https://www.financialsite2.com/', /*...other websites here...*/ ];

// Now, let's define the main function that will do the scraping
const scrapeFinancialData = async ({ $, request }) => {
    const data = [];
    const pageText = $('body').text();
  
    // Loop through each stock
    stocks.forEach(stock => {
        const regex = new RegExp(`\\b${stock}\\b`, 'g');
        const mentions = (pageText.match(regex) || []).length;
        
        if (mentions > 0) {
            data.push({
                url: request.url,
                stock,
                mentions,
            });
        }
    });

    return data;
};

// Now, you would use the Apify SDK to set up your crawler
// You can start with the Apify.basicCrawler() or Apify.cheerioCrawler(), and use the `scrapeFinancialData` as your page function
```

This is a very basic example that counts the number of times each stock is mentioned in the text of each page. It doesn't take into account the context of the mention or any other details. You might want to add more complex logic to better understand the sentiment about each stock or to extract more detailed information.

Also, keep in mind that any automated trading decisions based on scraped data should be approached with caution. There are many factors that can influence stock prices, and the information obtained from web scraping should be just one part of a well-rounded decision-making process.

Finally, always ensure that you are abiding by the terms of service of the websites you are scraping, as well as any relevant data privacy laws.
