---
title: "Create custom GPTs- Zoominfo"
date: 2025-09-03
cluster: "Prompt Eng / GPT Building"
messages: 10
source: chatgpt-export conversations.json (FULL transcript)
---

# Create custom GPTs- Zoominfo

> 10 messages · 2025-09-03 · cluster: Prompt Eng / GPT Building

**Semantic neighbors:** [[List of documents - GPT]] · [[Custom GPT No API]] · [[Prompt engineering task]] · [[Loveable website prompts / Logo]]

## Transcript

**Mike:** can you help me create custom GPT's ?

**GPT:** Absolutely! I can help you create custom GPTs using **OpenAI's Custom GPTs platform** — and if you’re integrating APIs into a Custom GPT via **Actions**, I can also write your **OpenAPI 3.1.0 spec** for you.

---

### 🚀 What do you need help with?

Here are common things I can assist with:

#### 1. **Creating a Custom GPT (from scratch or modifying)**
- Setting up the **custom instructions** (how it should behave, what it knows, how it talks)
- Choosing tools like **file uploads**, **code interpreter**, or **custom actions**
- Testing and debugging the GPT

#### 2. **Adding Custom Actions to GPT**
- Writing OpenAPI 3.1.0 specs from:
  - API docs
  - cURL commands
  - Example code snippets
  - Your own description of what the API should do
- Debugging specs if something’s not working
- Explaining how to connect the spec in the GPT builder

---

### 🧠 How to get started?

Let me know one of the following:
- Do you want to **start a new Custom GPT** or modify one?
- Do you want to **integrate a specific API** into your GPT? If so, give me:
  - A description of what the API should do
  - OR a link to the API documentation
  - OR a cURL or code snippet

Once I have that, I’ll guide you step-by-step and give you everything you need to paste into the [GPT Builder](https://chat.openai.com/gpts/editor).

Ready when you are!

**Mike:** setting up custom actions.  I want to be able to make API calls or just connect with my google drive

**GPT:** Great — let’s set you up to use **Custom Actions** in your GPT to either:

1. **Call your own API**, or  
2. **Connect with Google Drive** (to read or write files)

Let’s break this down based on your goals:

---

## ✅ Option 1: Call Your Own API (via Custom Actions)

To do this, I’ll write an **OpenAPI 3.1.0 spec** that defines how your GPT can call your API. I just need:

- Your API’s **base URL**
- A sample **endpoint you want to call**
- Authentication method (e.g. API key? OAuth? None?)
- What data you're sending (if POST/PUT)
- A description of the request and expected response

If you don’t have an API yet, I can help you mock one too.

---

## ✅ Option 2: Connect to Google Drive (this is trickier, but possible)

There are **two main approaches**:

---

### 🔁 Option 2A: Use a Third-Party API like [Pipedream](https://pipedream.com), [Zapier](https://zapier.com), or [n8n](https://n8n.io)

These services let you:
- Connect to your **Google Drive account**
- Expose simple, secure **REST APIs** to interact with Google Drive (read, upload, list, etc.)
- Avoid the headache of OAuth 2.0 setup

I can:
- Write the OpenAPI spec that connects to the webhook/endpoint from one of those services
- Guide you in setting it up

**Example use case:**
> List files in a Google Drive folder, return file names to GPT.

---

### 🔐 Option 2B: Direct Google Drive API Access (Advanced)

Google Drive API uses **OAuth 2.0**, which is **not currently supported in Custom GPTs** (as they don’t yet support dynamic OAuth login).

So **you can't directly authenticate users** in a Custom GPT for Google APIs (as of now).

👉 **Workaround**: You can use a **server** (yours or a no-code tool) to do the OAuth + token management and expose your own **REST API** to the GPT.

---

## 🧩 Recommended Path for You

Since direct Google Drive API integration isn't straightforward due to OAuth, the **easiest working solution** today is:

### ✅ Use Pipedream/Zapier to connect GPT to Google Drive

If that sounds good, here's what I can do next:
1. Guide you to set up a **Pipedream workflow** or **Zapier Webhook** to access Google Drive
2. Write a **custom OpenAPI spec** that your GPT can use to call it
3. Walk you through how to connect this spec in the **GPT Builder**

---

### 🔧 Example Setup (Using Pipedream to List Google Drive Files)

Let me know if you want this and I’ll:
- Give you the link to a Pipedream template to copy
- Write the exact OpenAPI 3.1.0 YAML file
- Show you how to paste that into the GPT Builder

---

### ✅ Your Turn: What should we do?

Reply with:
- A short description of what you want the GPT to do with Google Drive (e.g., “List files”, “Download file contents”, “Upload files”, etc.)
- Whether you want to use **Pipedream**, **Zapier**, or something else
- Or if you want to connect to **your own API** instead

Once you give me that, I’ll build your OpenAPI spec!

**Mike:** what are common actions to use when creating a custom GPT for a marketing agency ?

**GPT:** Great question. When building a **Custom GPT for a marketing agency**, you want to empower it to automate or assist with tasks commonly performed by marketers — especially things that benefit from AI: content generation, reporting, research, and client interaction.

If you're adding **Custom Actions**, you’re extending what the GPT can *do* by calling external APIs — e.g., pulling real-time data, posting to services, or automating workflows.

---

## ✅ Common Custom Actions for a Marketing Agency GPT

Here are the most popular categories and actions, grouped by **use case**, with real API integrations you might consider:

---

### 1. 🗓️ **Social Media Management**
Integrate with: Buffer, Hootsuite, Meta Graph API, Twitter/X API, LinkedIn API

**Actions:**
- Schedule a post to Twitter/LinkedIn/Facebook
- Fetch analytics (likes, clicks, shares)
- Retrieve a content calendar
- List recent posts for a brand

💡 **Example**:  
`operationId: postToTwitter`  
Posts content to Twitter via a scheduling API

---

### 2. 📈 **Analytics & Reporting**
Integrate with: Google Analytics, Google Ads, Meta Ads API, HubSpot, Klaviyo, Mailchimp

**Actions:**
- Get website traffic data (e.g., sessions, bounce rate)
- Retrieve ad performance by campaign
- Fetch email open/click rates
- Summarize key KPIs from Google Analytics

💡 **Example**:  
`operationId: getGoogleAdsPerformance`

---

### 3. 📝 **Content Generation & Review**
Most of this is native to GPT, but actions can still help.

**Actions:**
- Fetch content briefs from Airtable/Notion
- Send generated content to an approval API or CMS
- Pull product data from Shopify for blog generation

💡 **Example**:  
`operationId: getProductDetails`  
Fetches product descriptions from an ecommerce backend

---

### 4. 📤 **Client & CRM Management**
Integrate with: HubSpot, Salesforce, Notion, Airtable, Google Sheets

**Actions:**
- Pull client contact info from CRM
- Log meeting notes or campaign results
- Generate or send reports automatically

💡 **Example**:  
`operationId: getClientStatus`  
Returns status of a client’s onboarding or campaigns

---

### 5. ✅ **Approval & Feedback Loops**
Integrate with: Trello, Slack, Notion, Monday.com

**Actions:**
- Post draft copy to Slack for approval
- Create tasks for design teams
- Track feedback or status of deliverables

💡 **Example**:  
`operationId: createApprovalTask`

---

### 6. 📂 **File Management & Collaboration**
Integrate with: Google Drive, Dropbox, Notion, Docs APIs

**Actions:**
- Upload/download marketing assets
- Share or list recent creative files
- Track revisions or file feedback

💡 **Example**:  
`operationId: listClientFiles`

---

## 🧠 AI + Actions = Smart Workflows

Imagine this use case in a Custom GPT:
> “Create an Instagram post for Product X, save it to Notion, schedule it to Buffer, and summarize last week’s ad performance.”

This would involve:
1. Native GPT content generation
2. Action to Notion: `operationId: saveToNotion`
3. Action to Buffer: `operationId: scheduleInstagramPost`
4. Action to Ads API: `operationId: getWeeklyAdSummary`

---

## 🧰 Want a Starter Kit?

I can:
- Suggest specific APIs (Buffer, Google Analytics, etc.)
- Write **ready-to-paste OpenAPI specs** for your GPT’s Actions tab
- Help you connect services like Zapier, Pipedream, or your backend

---

### ✅ Your Turn: What specific tasks or services do you want your GPT to integrate?

Tell me:
- What kind of workflows you're trying to automate (e.g. reporting, social posting)?
- Do you use tools like Notion, Google Sheets, HubSpot, etc.?
- Do you want to start with mock data, or real APIs?

Once you reply, I’ll generate your custom OpenAPI YAML spec.

**Mike:** integrate with Zoominfo

**GPT:** Awesome—here’s a **starter OpenAPI 3.1.0 spec** you can paste into your Custom GPT’s **Actions** to integrate with ZoomInfo-style functionality: authenticate, person/company enrich, and person/company search.

> ⚠️ Note: I can’t browse right now to confirm ZoomInfo’s latest endpoint names/fields. This spec follows the **common ZoomInfo pattern** (JWT via `/authenticate`, then `Authorization: Bearer <token>`) and typical enrich/search payloads. If your account’s docs differ, tell me the exact cURL or docs snippet and I’ll align it precisely.

```yaml
openapi: 3.1.0
info:
  title: ZoomInfo (Starter Integration)
  description: >
    Starter spec to use ZoomInfo-like endpoints for authentication, person/company enrich, and search.
    Uses JWT via POST /authenticate, then Authorization: Bearer <token> for subsequent calls.
  version: 0.1.0
servers:
  - url: https://api.zoominfo.com
    description: ZoomInfo API base (adjust if your tenant uses a different hostname)

paths:
  /authenticate:
    post:
      operationId: authenticate
      summary: Obtain an access token (JWT) using your API key/secret (or username/password).
      description: >
        Exchanges ZoomInfo credentials for a short-lived JWT. Check your account docs
        for the exact credential fields (often "apiKey" + "apiSecret" or "username" + "password").
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              additionalProperties: false
              properties:
                apiKey:
                  type: string
                  description: Your ZoomInfo API Key (or username)
                apiSecret:
                  type: string
                  description: Your ZoomInfo API Secret (or password)
              anyOf:
                - required: [apiKey, apiSecret]
      responses:
        '200':
          description: Authentication success
          content:
            application/json:
              schema:
                type: object
                properties:
                  accessToken:
                    type: string
                    description: Bearer token (JWT)
                  tokenType:
                    type: string
                    example: Bearer
                  expiresIn:
                    type: integer
                    description: Seconds until expiration
        '401':
          description: Invalid credentials
      tags: [Auth]

  /person/enrich:
    post:
      operationId: personEnrich
      summary: Enrich a person by email or name + company hints.
      security:
        - bearerAuth: []
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              additionalProperties: false
              properties:
                email:
                  type: string
                  format: email
                firstName:
                  type: string
                lastName:
                  type: string
                company:
                  type: string
                  description: Company name
                companyDomain:
                  type: string
                  format: hostname
                phone:
                  type: string
              anyOf:
                - required: [email]
                - required: [firstName, lastName, companyDomain]
                - required: [firstName, lastName, company]
      responses:
        '200':
          description: Enriched person profile
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Person'
        '404':
          description: No matching person found
      tags: [Person]

  /company/enrich:
    post:
      operationId: companyEnrich
      summary: Enrich a company by domain or companyId.
      security:
        - bearerAuth: []
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              additionalProperties: false
              properties:
                domain:
                  type: string
                  format: hostname
                companyId:
                  type: string
              anyOf:
                - required: [domain]
                - required: [companyId]
      responses:
        '200':
          description: Enriched company profile
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Company'
        '404':
          description: No matching company found
      tags: [Company]

  /person/search:
    post:
      operationId: personSearch
      summary: Search people with filters (title, company, location, etc.).
      description: >
        Returns a paginated list of person records matching filters. Adjust fields to match your account’s available filters.
      security:
        - bearerAuth: []
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                query:
                  type: string
                  description: Free-text query
                filters:
                  type: object
                  description: Structured filters
                  properties:
                    title:
                      type: string
                    seniority:
                      type: string
                    department:
                      type: string
                    companyDomain:
                      type: string
                    companyName:
                      type: string
                    location:
                      type: string
                    country:
                      type: string
                page:
                  type: integer
                  minimum: 1
                  default: 1
                pageSize:
                  type: integer
                  minimum: 1
                  maximum: 100
                  default: 25
              additionalProperties: false
      responses:
        '200':
          description: Person search results
          content:
            application/json:
              schema:
                type: object
                properties:
                  total:
                    type: integer
                  page:
                    type: integer
                  pageSize:
                    type: integer
                  results:
                    type: array
                    items:
                      $ref: '#/components/schemas/Person'
      tags: [Person]

  /company/search:
    post:
      operationId: companySearch
      summary: Search companies with filters (domain, size, industry, location, etc.).
      security:
        - bearerAuth: []
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                query:
                  type: string
                filters:
                  type: object
                  properties:
                    domain:
                      type: string
                    name:
                      type: string
                    industry:
                      type: string
                    employeeCountMin:
                      type: integer
                    employeeCountMax:
                      type: integer
                    revenueMin:
                      type: integer
                    revenueMax:
                      type: integer
                    location:
                      type: string
                    country:
                      type: string
                page:
                  type: integer
                  minimum: 1
                  default: 1
                pageSize:
                  type: integer
                  minimum: 1
                  maximum: 100
                  default: 25
              additionalProperties: false
      responses:
        '200':
          description: Company search results
          content:
            application/json:
              schema:
                type: object
                properties:
                  total:
                    type: integer
                  page:
                    type: integer
                  pageSize:
                    type: integer
                  results:
                    type: array
                    items:
                      $ref: '#/components/schemas/Company'
      tags: [Company]

components:
  securitySchemes:
    bearerAuth:
      type: http
      scheme: bearer
      bearerFormat: JWT
  schemas:
    Person:
      type: object
      properties:
        id:
          type: string
        firstName:
          type: string
        lastName:
          type: string
        fullName:
          type: string
        email:
          type: string
          format: email
        title:
          type: string
        seniority:
          type: string
        department:
          type: string
        phone:
          type: string
        mobilePhone:
          type: string
        linkedinUrl:
          type: string
          format: uri
        company:
          type: object
          properties:
            id:
              type: string
            name:
              type: string
            domain:
              type: string
            titleAtCompany:
              type: string
            employeeCount:
              type: integer
    Company:
      type: object
      properties:
        id:
          type: string
        name:
          type: string
        legalName:
          type: string
        domain:
          type: string
        website:
          type: string
          format: uri
        linkedinUrl:
          type: string
          format: uri
        industry:
          type: string
        description:
          type: string
        employeeCount:
          type: integer
        revenue:
          type: integer
        headquarters:
          type: object
          properties:
            address:
              type: string
            city:
              type: string
            state:
              type: string
            country:
              type: string
            postalCode:
              type: string
```

### How to use this in your Custom GPT
1. Open your GPT → **Configure** → **Actions** → **Add action** → **Import from file** (paste this YAML).
2. For `/authenticate`, set up a **connection** with fields `apiKey` and `apiSecret` (or enter them in the request body when you call it).
3. The GPT should call `authenticate` first, then include the returned `accessToken` automatically via **bearerAuth** for other endpoints.

### Want me to align it 1:1 with your ZoomInfo account?
Send me:
- A small cURL or endpoint example from your ZoomInfo docs
- The exact auth method (API Key + Secret, or an API token header)
- Any specific filters/response fields you rely on

I’ll update the spec precisely so it works out of the box.
