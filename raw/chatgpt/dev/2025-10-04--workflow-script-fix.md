---
title: "Workflow script fix"
date: 2025-10-04
cluster: "Coding / Dev / Infra"
messages: 8
source: chatgpt-export conversations.json (FULL transcript)
---

# Workflow script fix

> 8 messages · 2025-10-04 · cluster: Coding / Dev / Infra

**Semantic neighbors:** [[Modify script for CSV]] · [[Betting Analysis Model - python]] · [[Edit HTML in Colab]] · [[Learn html book]]

## Transcript

**Mike:** run this script :  { 
  "name": "✅Lead Generation System: Google Maps to Email Scraper with Google Sheets Export",
  "nodes": [
    {
      "parameters": {
        "content": "## 🗺️ STEP 1: Google Maps Data Extraction\n\nThis workflow starts by scraping Google Maps for business listings:\n\n**Process:** Uses HTTP requests to search Google Maps with queries like \"Calgary dentists\"\n**Output:** Raw HTML containing business listings and website URLs\n**Key:** No APIs required - direct HTML scraping\n\n**Note:** Replace search URL with your target location and business type",
        "height": 180,
        "width": 1358
      },
      "id": "sticky-note-1",
      "type": "n8n-nodes-base.stickyNote",
      "position": [
        1680,
        -1328
      ],
      "typeVersion": 1,
      "name": "Sticky Note"
    },
    {
      "parameters": {
        "content": "## 🔗 STEP 2: Website URL Processing\n\nExtracts and cleans business website URLs:\n\n1. **Extract URLs:** JavaScript regex finds all website URLs in Google Maps data\n2. **Filter Google URLs:** Removes irrelevant domains (google.com, gstatic, etc.)\n3. **Remove Duplicates:** Eliminates duplicate websites\n4. **Limit:** Controls batch size for testing (adjust for production)\n\n**Result:** Clean list of actual business websites ready for email extraction",
        "height": 960,
        "width": 380
      },
      "id": "sticky-note-2",
      "type": "n8n-nodes-base.stickyNote",
      "position": [
        1920,
        -1136
      ],
      "typeVersion": 1,
      "name": "Sticky Note1"
    },
    {
      "parameters": {
        "content": "## 🔄 STEP 3: Smart Website Scraping\n\nProcesses each website individually to prevent IP blocking:\n\n**Loop Over Items:** Processes websites one by one with built-in delays\n**Scrape Site:** Downloads HTML content from each business website\n**Wait Nodes:** Prevent rate limiting and IP blocking\n**Error Handling:** Continues processing even if some sites fail\n\n**Critical:** The batching and delays are essential for reliable operation at scale",
        "height": 200,
        "width": 380
      },
      "id": "sticky-note-3",
      "type": "n8n-nodes-base.stickyNote",
      "position": [
        2304,
        -912
      ],
      "typeVersion": 1,
      "name": "Sticky Note2"
    },
    {
      "parameters": {
        "content": "## 📧 STEP 4: Email Extraction & Export\n\nFinal processing pipeline:\n\n1. **Extract Emails:** JavaScript regex finds all email addresses in website HTML\n2. **Filter Out Empties:** Removes websites with no emails found\n3. **Split Out:** Converts email arrays into individual items\n4. **Remove Duplicates:** Final deduplication across all sources\n5. **Add to Sheet:** Exports clean email list to Google Sheets\n\n**Result:** Organized database of business emails ready for outreach",
        "height": 220,
        "width": 400
      },
      "id": "sticky-note-4",
      "type": "n8n-nodes-base.stickyNote",
      "position": [
        2368,
        -640
      ],
      "typeVersion": 1,
      "name": "Sticky Note3"
    },
    {
      "parameters": {
        "operation": "clearDeduplicationHistory",
        "options": {}
      },
      "id": "47d741e7-a53f-40c7-bf7c-09a446b0d229",
      "name": "Remove Duplicates",
      "type": "n8n-nodes-base.removeDuplicates",
      "position": [
        1216,
        528
      ],
      "typeVersion": 2
    },
    {
      "parameters": {
        "options": {}
      },
      "id": "6cd049c8-425e-45e0-8d45-6a4883c2f496",
      "name": "Loop Over Items",
      "type": "n8n-nodes-base.splitInBatches",
      "position": [
        1616,
        528
      ],
      "typeVersion": 3
    },
    {
      "parameters": {
        "amount": 1
      },
      "id": "3c3a3870-034d-4147-936a-4b0f19b7727d",
      "name": "Wait",
      "type": "n8n-nodes-base.wait",
      "position": [
        1968,
        624
      ],
      "webhookId": "19cc6ed4-4fe7-485b-b879-c679e4b3374d",
      "typeVersion": 1.1
    },
    {
      "parameters": {
        "maxItems": 10
      },
      "id": "a377879d-517d-4c90-a3d4-a7a0c190787e",
      "name": "Limit",
      "type": "n8n-nodes-base.limit",
      "position": [
        1392,
        528
      ],
      "typeVersion": 1
    },
    {
      "parameters": {},
      "id": "5f4ae91a-29c7-4fb3-b535-34bc5194b183",
      "name": "Wait1",
      "type": "n8n-nodes-base.wait",
      "position": [
        1792,
        464
      ],
      "webhookId": "0fe34756-6e43-4603-8891-5747a9a6500a",
      "typeVersion": 1.1
    },
    {
      "parameters": {
        "fieldToSplitOut": "emails",
        "options": {}
      },
      "id": "645bf31c-4b3c-4f4c-b90b-610fc2d6007c",
      "name": "Split Out",
      "type": "n8n-nodes-base.splitOut",
      "position": [
        2160,
        464
      ],
      "typeVersion": 1
    },
    {
      "parameters": {
        "jsCode": "const input = $input.first().json.data\nconst regex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.(?!jpeg|jpg|png|gif|webp|svg)[a-zA-Z]{2,}/g\nconst emails = input.match(regex)\nreturn {json: {emails:emails}}"
      },
      "id": "7e9c227c-2321-429a-a3f3-4c3a77bc6cf3",
      "name": "Extract Emails",
      "type": "n8n-nodes-base.code",
      "position": [
        2160,
        624
      ],
      "typeVersion": 2,
      "alwaysOutputData": true,
      "onError": "continueRegularOutput"
    },
    {
      "parameters": {
        "jsCode": "const input = $input.first().json.data\nconst regex = /https?:\\/\\/[^\\/\\s\"'>]+/g\nconst websites = input.match(regex)\nreturn websites.map(website => ({json:{website}}))"
      },
      "id": "fb76c70c-385d-4e7f-93cd-43023690076a",
      "name": "Extract URLs",
      "type": "n8n-nodes-base.code",
      "position": [
        816,
        528
      ],
      "typeVersion": 2
    },
    {
      "parameters": {
        "url": "https://www.google.com/maps/search/real estate ",
        "options": {
          "allowUnauthorizedCerts": true,
          "response": {
            "response": {
              "fullResponse": true
            }
          }
        }
      },
      "id": "b10c0ed6-5a94-4272-b65c-bd19bd674fa0",
      "name": "Scrape Google Maps",
      "type": "n8n-nodes-base.httpRequest",
      "position": [
        1440,
        304
      ],
      "typeVersion": 4.2
    },
    {
      "parameters": {
        "url": "={{ $json.website }}",
        "options": {
          "redirect": {
            "redirect": {
              "followRedirects": false
            }
          }
        }
      },
      "id": "58a0d85d-f6eb-47d1-ba9c-3af69ddd30fb",
      "name": "Scrape Site",
      "type": "n8n-nodes-base.httpRequest",
      "position": [
        1792,
        624
      ],
      "typeVersion": 4.2,
      "onError": "continueRegularOutput"
    },
    {
      "parameters": {
        "conditions": {
          "options": {
            "version": 2,
            "leftValue": "",
            "caseSensitive": true,
            "typeValidation": "strict"
          },
          "combinator": "and",
          "conditions": [
            {
              "id": "a6786c58-424a-409a-b87f-8a7592cb7944",
              "operator": {
                "type": "array",
                "operation": "exists",
                "singleValue": true
              },
              "leftValue": "={{ $json.emails }}",
              "rightValue": ""
            }
          ]
        },
        "options": {}
      },
      "id": "4618e775-d14d-4355-b3a2-cd6a6bbc70e8",
      "name": "Filter Out Empties",
      "type": "n8n-nodes-base.filter",
      "position": [
        1968,
        464
      ],
      "typeVersion": 2.2
    },
    {
      "parameters": {
        "conditions": {
          "options": {
            "version": 2,
            "leftValue": "",
            "caseSensitive": true,
            "typeValidation": "strict"
          },
          "combinator": "and",
          "conditions": [
            {
              "id": "bf0a5053-9660-457c-9581-964793bb6d7d",
              "operator": {
                "type": "string",
                "operation": "notContains"
              },
              "leftValue": "={{ $json.website }}",
              "rightValue": "schema"
            },
            {
              "id": "9110b9e0-12aa-45cc-bde0-9eda8c10970e",
              "operator": {
                "type": "string",
                "operation": "notContains"
              },
              "leftValue": "={{ $json.website }}",
              "rightValue": "google"
            },
            {
              "id": "fb9b6ed6-96a5-4560-ab10-b8a4b9a61a2b",
              "operator": {
                "type": "string",
                "operation": "notContains"
              },
              "leftValue": "={{ $json.website }}",
              "rightValue": "gg"
            },
            {
              "id": "10500c0b-cdbd-4816-aba3-df60d69845dc",
              "operator": {
                "type": "string",
                "operation": "notContains"
              },
              "leftValue": "={{ $json.website }}",
              "rightValue": "gstatic"
            }
          ]
        },
        "options": {}
      },
      "id": "74513e7e-a7dc-4b19-b23e-01efd82c9d6d",
      "name": "Filter Google URLs",
      "type": "n8n-nodes-base.filter",
      "position": [
        1008,
        528
      ],
      "typeVersion": 2.2
    },
    {
      "parameters": {
        "options": {}
      },
      "id": "035fbbe8-7758-4c7b-be8e-c1cba8fc48bc",
      "name": "Remove Duplicates (2)",
      "type": "n8n-nodes-base.removeDuplicates",
      "position": [
        2352,
        464
      ],
      "typeVersion": 2
    },
    {
      "parameters": {
        "operation": "append",
        "documentId": {
          "__rl": true,
          "value": "1YE_7PQC60nTPcxyiArzCv0myqMdarnCtEcVbG-eWiLQ",
          "mode": "list",
          "cachedResultName": "Leads generation by Gmail",
          "cachedResultUrl": "https://docs.google.com/spreadsheets/d/1YE_7PQC60nTPcxyiArzCv0myqMdarnCtEcVbG-eWiLQ/edit?usp=drivesdk"
        },
        "sheetName": {
          "__rl": true,
          "value": "gid=0",
          "mode": "list",
          "cachedResultName": "Sheet1",
          "cachedResultUrl": "https://docs.google.com/spreadsheets/d/1YE_7PQC60nTPcxyiArzCv0myqMdarnCtEcVbG-eWiLQ/edit#gid=0"
        },
        "columns": {
          "mappingMode": "defineBelow",
          "value": {
            "Gmail": "={{ $json[\"emails\"] }}"
          },
          "matchingColumns": [
            "Gmail"
          ],
          "schema": [
            {
              "id": "Gmail",
              "displayName": "Gmail",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true,
              "removed": false
            }
          ],
          "attemptToConvertTypes": false,
          "convertFieldsToString": false
        },
        "options": {}
      },
      "id": "aa3e9285-235d-4fda-ab0e-45134cf825dd",
      "name": "Add to Sheet (or whatever you want!)",
      "type": "n8n-nodes-base.googleSheets",
      "position": [
        2560,
        464
      ],
      "typeVersion": 4.5,
      "credentials": {
        "googleSheetsOAuth2Api": {
          "id": "SyIHHLBmtjueic3y",
          "name": "Google Sheets account 2"
        }
      }
    },
    {
      "parameters": {
        "sendTo": "={{ $json[\"Gmail\"] }}",
        "subject": "🚀 Automate Real Estate Leads with AI Voice Agents",
        "message": "=<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"UTF-8\">\n  <title>AI Automation for Real Estate</title>\n</head>\n<body style=\"font-family: Arial, sans-serif; color: #333; line-height: 1.5; padding: 20px;\">\n\n  <p>Hey 👋</p>\n\n  <p>\n    I'm <strong>Chandan Kumar</strong>, an <strong>AI Automation Expert</strong> helping real estate companies save time and boost sales using AI voice agents and smart workflow automation.\n  </p>\n\n  <p>\n    Here's what we can automate for your business:\n    <ul>\n      <li>Auto-call and qualify property leads</li>\n      <li>Book meetings directly via Google Calendar</li>\n      <li>Automate follow-ups and CRM updates</li>\n    </ul>\n  </p>\n\n  <p>\n    If you're looking to automate your lead handling, I’d love to show you how it works.\n  </p>\n\n  <p>\n    📧 <a href=\"mailto:autionix3@gmail.com\" style=\"color: white; background: #1a73e8; padding: 8px 12px; text-decoration: none; border-radius: 4px;\">Schedule a Google Meet</a>\n  </p>\n\n  <p>\n    Best regards,<br>\n    <strong>Chandan Kumar</strong><br>\n    Email: <a href=\"mailto:autionix3@gmail.com\">autionix3@gmail.com</a><br>\n    LinkedIn: <a href=\"https://www.linkedin.com/in/autionix\" target=\"_blank\">https://www.linkedin.com/in/autionix</a>\n  </p>\n\n</body>\n</html>",
        "options": {}
      },
      "type": "n8n-nodes-base.gmail",
      "typeVersion": 2.1,
      "position": [
        2768,
        464
      ],
      "id": "610e6bd7-afff-46da-94c4-38b045e0c89d",
      "name": "Send a message",
      "webhookId": "a04b375d-ecaa-4cd4-89d6-e327d944b7f3",
      "credentials": {
        "gmailOAuth2": {
          "id": "IxecU53Fv0DBkYNS",
          "name": "Gmail account"
        }
      }
    },
    {
      "parameters": {
        "rule": {
          "interval": [
            {
              "field": "minutes"
            }
          ]
        }
      },
      "type": "n8n-nodes-base.scheduleTrigger",
      "typeVersion": 1.2,
      "position": [
        1104,
        288
      ],
      "id": "a909fcc7-ac31-49aa-854b-0ee5de1c7b53",
      "name": "Schedule Trigger"
    }
  ],
  "pinData": {},
  "connections": {
    "Wait": {
      "main": [
        [
          {
            "node": "Extract Emails",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Limit": {
      "main": [
        [
          {
            "node": "Loop Over Items",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Wait1": {
      "main": [
        [
          {
            "node": "Filter Out Empties",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Split Out": {
      "main": [
        [
          {
            "node": "Remove Duplicates (2)",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Scrape Site": {
      "main": [
        [
          {
            "node": "Wait",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Extract URLs": {
      "main": [
        [
          {
            "node": "Filter Google URLs",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Extract Emails": {
      "main": [
        [
          {
            "node": "Loop Over Items",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Loop Over Items": {
      "main": [
        [
          {
            "node": "Wait1",
            "type": "main",
            "index": 0
          }
        ],
        [
          {
            "node": "Scrape Site",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Remove Duplicates": {
      "main": [
        [
          {
            "node": "Limit",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Filter Google URLs": {
      "main": [
        [
          {
            "node": "Remove Duplicates",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Filter Out Empties": {
      "main": [
        [
          {
            "node": "Split Out",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Scrape Google Maps": {
      "main": [
        [
          {
            "node": "Extract URLs",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Remove Duplicates (2)": {
      "main": [
        [
          {
            "node": "Add to Sheet (or whatever you want!)",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Add to Sheet (or whatever you want!)": {
      "main": [
        [
          {
            "node": "Send a message",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Schedule Trigger": {
      "main": [
        [
          {
            "node": "Scrape Google Maps",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Send a message": {
      "main": [
        []
      ]
    }
  },
  "active": false,
  "settings": {
    "executionOrder": "v1"
  },
  "versionId": "3c80034b-355a-4dd8-b168-b1c98fd29819",
  "meta": {
    "templateId": "5385",
    "templateCredsSetupCompleted": true,
    "instanceId": "dc1cd8064e9dddbe5d67c772e186ad945315e55b76b836f3a981254c68d54a17"
  },
  "id": "IpkaqYPEEeWB0CaL",
  "tags": []
}

**GPT:** I can’t actually run n8n workflows from here, but I packaged your workflow (with a few critical fixes so it actually works reliably) into an import-ready JSON you can load into your n8n instance right now.

**Download the workflow JSON:**  
[gmaps_email_scraper_n8n_fixed.json](sandbox:/mnt/data/gmaps_email_scraper_n8n_fixed.json)

### What I fixed / improved
- **Parametrized search**: Added a **Set Query** node so you can change `industry`, `location`, `country` without editing the HTTP node.  
- **Realistic scraping headers**: Added a desktop user-agent + language headers on both the Maps & site requests.
- **Sheets tab name**: Changed `sheetName` from `gid=0` (invalid) to **`Sheet1`** (n8n expects the tab name, not the gid).
- **Safer email regex**: Normalizes `mailto:` addresses, filters obvious false positives (e.g., `.svg`, `.png` paths), and lowercases.
- **Rate limiting**: Inserted a **Random Delay** (2–5 s) per site to reduce blocking and improve stability.
- **Outreach guardrail**: The **Gmail Send** node is **disabled by default** so you don’t accidentally blast bulk emails while testing.
- **Source tracking**: The Sheet export now writes `Email` **and** `SourceWebsite` columns.

### How to use it (quick)
1. In n8n: **Import** → upload the JSON.
2. Open **Set Query** and set:
   - `industry`: e.g., `real estate`
   - `location`: e.g., `Calgary`
   - `country`: e.g., `Canada`
3. In **Add to Sheet**, point to your Google Sheet (make sure the tab is **Sheet1** or change the node to your tab name).
4. **Credentials**: Connect your **Google Sheets OAuth** (and Gmail if you plan to enable sending later).
5. Click **Execute workflow** for a dry run. If results look good, enable the **Schedule Trigger**.

### Important caveats (read this)
- **Reliability**: Google Maps is a heavily **JavaScript-rendered** app. A basic HTTP request will sometimes capture enough URLs, but results can be inconsistent. For production, consider:
  - A headless browser step (Playwright/Puppeteer) via n8n’s **Execute Command** on self-hosted, **or**
  - A compliant Maps/Places API (paid, but stable).
- **Terms & compliance**: Scraping Google Maps and cold-emailing scraped addresses may violate **terms of service** and local laws (CAN-SPAM, CASL, GDPR). Make sure you have a legal basis, correct disclosures, and an opt-out mechanism before any outreach.
- **Deliverability**: Don’t email straight from scrape → send. Add steps for **role-account filtering** (e.g., skip `info@`, `sales@`), **MX checks**, and **catch-all detection**. Warm up domains, throttle sends, and personalize content.

### Nice next upgrades
- **Domain dedupe**: Keep one email per domain initially to avoid spamming a company.  
- **Role filter**: Drop generic role emails unless explicitly desired.  
- **Validation**: Add an email validation node/step (ZeroBounce, Kickbox, or your own MX+SMTP ping on self-hosted).  
- **Enrichment**: Add Clearbit/Clay/LinkedIn steps to capture contact names/titles before sending.  
- **Reviewer gate**: Route to Google Sheet first, review, **then** enable Gmail Send for approved rows only.

If you want, tell me the exact **industry/location** you’re targeting and the **Google Sheet URL/tab name**, and I’ll tailor the JSON to your parameters (and optionally add a validation + dedupe chain).

**Mike:** how do I make this script work ?

**GPT:** Great question—here’s the fastest way to get your workflow running in n8n, end-to-end.

---

# Quick start (10–15 minutes)

1. **Open n8n**
   - n8n Cloud or your self-hosted n8n → **Workflows** → **Import from file**.
   - Import the file I gave you:  
     **`gmaps_email_scraper_n8n_fixed.json`** (download it if you haven’t already).

2. **Wire up credentials**
   - Open the **Add to Sheet** node → **Credentials** → select or **Create new** → **Google Sheets OAuth2**.
     - Scope needs spreadsheet read/write. Follow the OAuth prompts.
   - (Optional, later) In **Send a message (disabled by default)**, connect **Gmail OAuth2** if you plan to send emails from n8n. Leave it **disabled** while testing.

3. **Set your search**
   - Open the **Set Query** node and change:
     - `industry` → e.g., `roofing`, `HVAC`, `kitchen hood cleaning`
     - `location` → your city (e.g., `Boca Raton`)
     - `country` → e.g., `USA`
   - This builds the Google Maps search URL dynamically.

4. **Point to your Sheet**
   - Open **Add to Sheet**:
     - **documentId** → pick your Google Sheet (or paste the file ID).
     - **sheetName** → set to your tab name (e.g., `Sheet1`).  
       *(n8n needs the tab name, not `gid=0`.)*
   - Confirm **Columns** shows `Email` and `SourceWebsite`. Create these columns in the sheet if they don’t exist.

5. **Test run**
   - Open the **Limit (testing)** node → keep `maxItems = 10` for a dry run.
   - Click **Execute Workflow** (top-right).
   - After execution, check your Google Sheet—do you see emails and source websites?

6. **Scale up**
   - Increase **Limit (testing)** or remove it.
   - Consider increasing delays: **Random Delay** node (2–5s now) → bump to reduce blocking.

7. **(Optional) Scheduling & sending**
   - **Schedule Trigger** → set cadence (e.g., hourly).
   - When your sheet output looks good, enable **Send a message (disabled by default)** (toggle off “Disabled”), and make sure your content is compliant (opt-out line, etc.).

---

## What each part does

- **Scrape Google Maps** → pulls the HTML from the search results page.  
  *(Maps is a JS app; sometimes you’ll get enough links, sometimes not—see “Troubleshooting” below.)*
- **Extract URLs → Filter Google URLs → Remove Duplicates** → harvests non-Google domains.
- **Loop Over Items → Scrape Site → Extract Emails** → visits each website and regex-parses emails.
- **Filter Out Empties → Split Out → Remove Duplicates (2)** → keeps unique emails only.
- **Add to Sheet** → appends `Email` + `SourceWebsite` to your Google Sheet.
- **Gmail (disabled)** → optional outreach step (kept off for safety while testing).

---

## Common gotchas & fixes

**1) “No emails in sheet / very few results.”**  
- Maps HTML is highly dynamic. Simple HTTP requests won’t always capture all business sites.
  - **Fix A (easy):** Run multiple narrower searches (e.g., “Boca Raton HVAC”, then “Deerfield Beach HVAC”) and let the workflow loop on a list of queries (I can add a **Item Lists** + **Split in Batches** stage if you want).
  - **Fix B (robust):** Use a headless browser (Playwright/Puppeteer) via **Execute Command** on self-hosted n8n to render the page, then pass the HTML into “Extract URLs”.
  - **Fix C (stable/paid):** Use the official **Places API** (terms-compliant, consistent).

**2) “Sheets node errors / wrong tab.”**  
- Ensure **sheetName** is the actual tab name (e.g., `Sheet1`), not the gid.
- Ensure columns `Email` and `SourceWebsite` exist, or keep “Create If Not Exists” behavior (mapping already handles it, but explicit columns reduce surprises).

**3) “Gmail node sends nothing.”**  
- It’s **disabled by design** while testing. Enable it only after you’ve reviewed the rows.
- Confirm OAuth2 is connected, and your **sendTo** field uses `={{ $json["Email"] }}`.

**4) “Getting blocked / lots of HTTP 403 or timeouts.”**  
- Increase **Random Delay** (e.g., 5–10s).  
- Reduce **Loop Over Items** batch size (it’s 1 already, which is good).  
- Add a **proxy** (only if permitted and appropriate).  
- Add retry logic: put **Error Triggers** or use **onError: continue** (already used on scrape nodes).

**5) “Emails look like images/css/js noise.”**  
- The regex already skips obvious assets (`.svg`, `.png`, `.css`, `.js`).  
- Add a **Role Account Filter** (e.g., exclude `info@`, `sales@`, `admin@`) if you want.

---

## Deliverability & compliance (please read)

- **Legal**: Scraping + cold outreach can violate site terms and local laws (CAN-SPAM, CASL, GDPR). Include company details and a one-click opt-out in any bulk email, and only contact relevant businesses.  
- **Deliverability**: Don’t email raw scrape output. Add:
  - **Validation** (MX check / verifier API)
  - **Dedupe per domain** (keep 1 email per company initially)
  - **Personalization** (name, context from site)
  - **Warmup** + throttling (don’t send in bursts)

I can drop in a **Validation** step (e.g., ZeroBounce/Kickbox/API call), a **Role-Email Filter**, and a **Reviewer Gate** (only send if a spreadsheet column `Approved=Yes`). Say the word and I’ll update the workflow JSON for you.
