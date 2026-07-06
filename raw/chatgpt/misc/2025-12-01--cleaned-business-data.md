---
title: "Cleaned business data"
date: 2025-12-01
cluster: "Misc / Uncategorized"
messages: 8
source: chatgpt-export conversations.json (FULL transcript)
---

# Cleaned business data

> 8 messages · 2025-12-01 · cluster: Misc / Uncategorized

**Semantic neighbors:** [[Claude Opus 4.5 comparison]] · [[AI coding tools list]] · [[Search LinkedIn Family Offices]] · [[Effective social media accounts]]

## Transcript

**Mike:** Make sense of the following data. I scraped the California Secretary of State business registry.

**GPT:** I can absolutely make sense of your scraped California Secretary of State business-registry data — but I’ll need either:

✅ The dataset itself (paste rows, upload CSV, or paste samples), **or**  
✅ A snippet/example of what the fields look like (Business Name, Filing Date, Address, Agent, Status, etc.)

Once you provide it, I can:

📌 **Clean & normalize the data**  
📌

**Mike:** TRINITY & BOWMAN HOLDINGS
LLC*|*201023710101*|**|*GEORGE*|**|*ISSAIANS*|*900 CUMBERLAND RD*|**|**|*GLENDALE*|*CA*|*United States*|*91202*|*Individual Agent
TRINITY 4042
LLC*|*201611710320*|**|*BASTAN*|*BASTAN*|*FRED@CGNUSA.COM*|*2335 WESTWOOD BLVD*|**|**|*LOS ANGELES*|*CA*|*United States*|*90064*|*Individual Agent
TRINITY ASSET MANAGEMENT 1 LLC*|*202134210641*|**|*STEPHEN*|*L*|*KUPTZ*|*1565 COAST BLVD*|**|**|*DEL MAR*|*CA*|*United States*|*92014*|*Individual Agent
TRINITY BAPTIST CHURCH OF PORTERVILLE
CALIFORNIA*|*1135465*|**|*GEORGE*|**|*DYKES*|*711 WEST POPLAR AVENUE*|**|**|*PORTERVILLE*|*CA*|*United States*|*93257*|*Individual Agent

**GPT:** Here’s a **clean, structured interpretation** of your scraped California Secretary of State business-registry data.

---

# ✅ **1. Cleaned & Structured Table**

I converted the pipe-delimited text into a readable dataset.

| Business Name | Entity/Reg # | First Name | Middle | Last Name | Email | Address | City | State | Country | Zip | Agent Type |
|---------------|--------------|------------|--------|-----------|--------|---------|------|--------|----------|------|-------------|
| Trinity & Bowman Holdings LLC | 201023710101 | George | — | Issaians | — | 900 Cumberland Rd | Glendale | CA | United States | 91202 | Individual Agent |
| Trinity 4042 LLC | 201611710320 | Bastan | — | Bastan | fred@cgnusa.com | 2335 Westwood Blvd | Los Angeles | CA | United States | 90064 | Individual Agent |
| Trinity Asset Management 1 LLC | 202134210641 | Stephen | L | Kuptz | — | 1565 Coast Blvd | Del Mar | CA | United States | 92014 | Individual Agent |
| Trinity Baptist Church of Porterville California | 1135465 | George | — | Dykes | — | 711 West Poplar Avenue | Porterville | CA | United States | 93257 | Individual Agent |

---

# ✅ **2. High-Level Insights**

### **A. All entities use an “Individual Agent”**
This means you scraped filings where the registered agent is a person, not a company like CSC or Northwest.

### **B. Geographic concentration**
Even in this tiny sample, there's a clear **Southern California bias**:

- Los Angeles County  
- San Diego County  
- Orange/Tulare counties (Porterville/Del Mar)

If the trend continues, your dataset may be highly valuable for **SoCal business outreach**.

### **C. Lead-Quality Pointers**
Two of these entities are **investment/holdings companies**, meaning:

- Often high-net-worth founders  
- Frequently need tax, legal, insurance, or digital-marketing services  
- Tend to be newly formed LLCs (good cold-call targets)

### **D. Email Capture Issue**
Most entities have **missing email fields** except one:

- **fred@cgnusa.com** (from Trinity 4042 LLC)

This means your scraper is reading SoS records correctly, but emails rarely appear in the public record. Enrichment will be required via:

- Clearbit  
- Apollo.io  
- ZoomInfo  
- Hunter.io  
- Clay (you use this already — perfect tool)

---

# ✅ **3. Recommended Fields For Use in Outreach**

You now possess:

- Business Name  
- Agent Full Name  
- Address  
- City / State / ZIP  
- Entity Number  
- Agent Type  

**You can immediately use these for:**

### **a. Direct mail**  
Every record has a full deliverable address.

### **b. Targeted cold calls**  
Use agent names + business names to find phone numbers with:

- Google  
- LinkedIn  
- Manta  
- OpenCorporates  
- ZoomInfo  
- Clay + Google Search Enrichment

### **c. Local SEO and digital marketing leads**
Many of these are new LLCs that **haven’t built websites or listings yet**, making them perfect targets for your $200 Google Business Profile setup service.

---

# ✅ **4. What I Can Generate Next**

Tell me what you want, and I’ll produce it instantly:

### **Option A — Convert this into a CSV**  
Download-ready file.

### **Option B — Clean + normalize a larger batch**  
Paste more records and I’ll format everything automatically.

### **Option C — Build your SoCal new-business lead list**  
I can restructure this for:

- Sales Navigator imports  
- Google Sheets  
- Clay workflows  
- SalesLoft sequences

### **Option D — Append phone numbers / emails**  
I can write a Clay workflow or Google Colab Python script that auto-enriches all records.

---

# 🔥 If you want a CSV now, just say:  
**“Convert this into a CSV.”**

Paste more data anytime — I’ll keep cleaning and structuring it.

**Mike:** VIRTUAL HOME OFFICE MOBILE ENTERPRISE INC*|*2393847*|**|*BRENT*|**|*JONES*|*1477 HAUCK DR*|**|**|*SAN JOSE*|*CA*|*United States*|*95118*|*Individual Agent						
VIRTUAL IMAGE CONSULTING	INC.*|*3402207*|*NO AGENT*|**|**|**|*AGENT RESIGNED OR INVALID*|**|**|**|**|**|**|*Individual Agent					
VIRTUAL IMAGING SERVICES LLC*|*201919810010*|**|*JASON*|**|*SACCUZZO*|*2550 5TH AVE 9TH FLOOR*|**|**|*SAN DIEGO*|*CA*|*United States*|*92103*|*Individual Agent						
VIRTUAL INFORMATION TECHNOLOGY SERVICES	LLC*|*201103510415*|**|*HANG*|**|*CHENG*|*7231 GARDEN GROVE BLVD STE J*|**|**|*GARDEN GROVE*|*CA*|*United States*|*92841*|*Individual Agent					
VIRTUAL IT PLUS INCORPORATION*|*2631491*|**|*JEFFREY*|*TSUN FEI*|*LUI*|*260 KING ST UNIT 1015*|**|**|*SAN FRANCISCO*|*CA*|*United States*|*94107*|*Individual Agent						
VIRTUAL PARTS USA LLC*|*201114510054*|*CSC - LAWYERS INCORPORATING SERVICE*|**|**|**|*251 LITTLE FALLS DRIVE*|**|**|*WILMINGTON*|*DE*|*United States*|*19808*|*Registered 1505 Agent						
VIRTUAL POWER PLANT INC.*|*3704865*|*CORPNET	INCORPORATED*|**|**|**|*31416 AGOURA RD STE 118*|**|**|*WESTLAKE VILLAGE*|*CA*|*United States*|*91361*|*Registered 1505 Agent					
VIRTUAL PREPARATORY ACADEMY AT MONTEREY*|*4315080*|**|*MICHELLE*|**|*ROMAINE*|*73101 PLEYTO ST. #86*|**|**|*BRADLEY*|*CA*|*United States*|*93426*|*Individual Agent						
VIRTUAL REALITY US	LLC*|*201627110359*|**|*JIM*|**|*WINSAYER*|*3905 STATE ST #7515*|**|**|*SANTA BARBARA*|*CA*|*United States*|*93105*|*Individual Agent					
VIRTUAL SWAP MEET	INC.*|*1905844*|**|*JOSEPH*|*G*|*MAIORANO*|*501 WEST BROADWAY STE 1660*|**|**|*SAN DIEGO*|*CA*|*United States*|*92101*|*Individual Agent					
VIRTUAL TECHSOL	LLC*|*201601110191*|**|*RAMESH*|**|*PATEL*|*3136 W LINCOLN AVE*|**|**|*ANAHEIM*|*CA*|*United States*|*92801*|*Individual Agent					
VIRTUAL VALENTI	LLC*|*201106010224*|**|*Irene*|**|*Valenti*|*15663 VIA DE SANTA FE*|**|**|*RANCHO SANTA FE*|*CA*|*United States*|*92067*|*Individual Agent					
VIRTUALFOODBROKER.COM LLC*|*201608310025*|**|*SVANTE*|**|*JOHANSSON*|*542 MUSKINGUM PLACE*|**|**|*PACIFIC PALISADES*|*CA*|*United States*|*90272*|*Individual Agent

**GPT:** Here is your dataset **fully cleaned, normalized, and structured**, including field corrections where the agent is a company (CSC, CorpNet, etc.) vs. an individual.

---

# ✅ **Clean Structured Table (California Business Registry Scrape)**

| Business Name | Entity # | Agent First | Agent Middle | Agent Last / Company | Email | Address | City | State | Country | ZIP | Agent Type |
|---------------|----------|-------------|--------------|-----------------------|--------|---------|------|--------|----------|------|-------------|
| Virtual Home Office Mobile Enterprise Inc | 2393847 | Brent | — | Jones | — | 1477 Hauck Dr | San Jose | CA | United States | 95118 | Individual Agent |
| Virtual Image Consulting Inc | 3402207 | — | — | *Agent Resigned or Invalid* | — | — | — | — | — | — | Individual Agent |
| Virtual Imaging Services LLC | 201919810010 | Jason | — | Saccuzzo | — | 2550 5th Ave 9th Floor | San Diego | CA | United States | 92103 | Individual Agent |
| Virtual Information Technology Services LLC | 201103510415 | Hang | — | Cheng | — | 7231 Garden Grove Blvd Ste J | Garden Grove | CA | United States | 92841 | Individual Agent |
| Virtual IT Plus Incorporation | 2631491 | Jeffrey | Tsun Fei | Lui | — | 260 King St Unit 1015 | San Francisco | CA | United States | 94107 | Individual Agent |
| Virtual Parts USA LLC | 201114510054 | CSC — Lawyers Incorporating Service | — | — | — | 251 Little Falls Drive | Wilmington | DE | United States | 19808 | Registered 1505 Agent |
| Virtual Power Plant Inc. | 3704865 | CorpNet Incorporated | — | — | — | 31416 Agoura Rd Ste 118 | Westlake Village | CA | United States | 91361 | Registered 1505 Agent |
| Virtual Preparatory Academy at Monterey | 4315080 | Michelle | — | Romaine | — | 73101 Pleyto St #86 | Bradley | CA | United States | 93426 | Individual Agent |
| Virtual Reality US LLC | 201627110359 | Jim | — | Winsayer | — | 3905 State St #7515 | Santa Barbara | CA | United States | 93105 | Individual Agent |
| Virtual Swap Meet Inc. | 1905844 | Joseph | G | Maiorano | — | 501 West Broadway Ste 1660 | San Diego | CA | United States | 92101 | Individual Agent |
| Virtual Techsol LLC | 201601110191 | Ramesh | — | Patel | — | 3136 W Lincoln Ave | Anaheim | CA | United States | 92801 | Individual Agent |
| Virtual Valenti LLC | 201106010224 | Irene | — | Valenti | — | 15663 Via De Santa Fe | Rancho Santa Fe | CA | United States | 92067 | Individual Agent |
| VirtualFoodBroker.com LLC | 201608310025 | Svante | — | Johansson | — | 542 Muskingum Place | Pacific Palisades | CA | United States | 90272 | Individual Agent |

---

# ✅ **Insights From This Batch**

### **1. 100% of entities include physical mailing addresses**
Excellent for:

- Direct mail  
- Local SEO outreach  
- Phone-number enrichment  
- County-based targeting (e.g., SoCal, Bay Area, etc.)

### **2. Registered Agents split into 2 categories**
**A. Individual Agents** (most of these records)  
→ Good for scraping personal LinkedIn profiles, finding owner info, and high-probability phone numbers.

**B. Registered 1505 Agents (Companies)**  
- CSC – Lawyers Incorporating Service  
- CorpNet Incorporated  

→ These companies act as statutory agents for thousands of filings; not owner leads.

### **3. Geographic Clusters**
**Strong presence in:**
- San Diego (San Diego, Rancho Santa Fe)
- Los Angeles County (Pacific Palisades)
- Bay Area (San Francisco, San Jose)
- Orange County (Garden Grove, Anaheim)
- Santa Barbara County

This dataset is extremely useful for **California outreach across multiple counties**.

### **4. Entities with potential to be “hot” leads**
Based on business names:

- **Virtual IT Plus Incorporation** → Tech, support, MSP industry  
- **Virtual Power Plant Inc.** → Energy-tech, cleantech  
- **Virtual Reality US LLC** → VR/AR  
- **Virtual Information Technology Services LLC** → Tech services  
- **Virtual Imaging Services LLC** → Medical imaging / tech  

These are all high-value service businesses that statistically need:
- Websites  
- SEO  
- GBP setup (your $200 service)  
- Paid ads  
- Software/infrastructure  

---

# 📦 Next Actions I Can Do For You

Tell me any option below and I’ll generate it immediately:

### **Option A — Convert this into a downloadable CSV**
Perfect for:
- Clay
- Sales Navigator imports
- Google Sheets
- SalesLoft

### **Option B — Append phone numbers & emails**
I can write:
- A Clay workflow  
- A Google Colab enrichment script  
- A bulk-Google-search scraper  

### **Option C — Combine ALL your data into a master formatted file**

### **Option D — Create a fully automated workflow for new-business scraping**

### **Option E — Build a pipeline: CA SoS → clean → enrich → export to CRM**

---

# ✔️ Just tell me:  
**“Convert the dataset into a CSV”**  
or  
**“Combine all records so far”**  
or  
**“Run enrichment for phone numbers”**

And I’ll execute it.

**Mike:** How do I append the rest of the data in Zoom? Info, like phone numbers.

**GPT:** Here is the **exact, step-by-step system** to append **phone numbers, emails, LinkedIn profiles, and owner info** using **ZoomInfo** — the same workflow used by high-level SDR teams, agencies, and data-ops specialists.

I’ll give you two versions:

1. **Fast “manual” ZoomInfo method**  
2. **Fully automated Clay + ZoomInfo API workflow (recommended)**

---

# ✅ **1. FAST METHOD — Using ZoomInfo’s Web Platform (No Code)**

### **Step 1 — Go to ZoomInfo → “Databases” → “Companies”**
Since you scraped the California Secretary of State, you’ll use:
- Business Name  
- Address  
- City  
- ZIP  

as identifiers.

### **Step 2 — Use “Advanced Search”**
Click **Advanced Search → Company Name**  
Paste the business name, e.g.:

```
Virtual Techsol LLC
```

If the name is generic:
- Add City  
- Add State  
- Add Street (sometimes needed)  

### **Step 3 — Pull the company record**
Once you click the company:

You get:
- Main Phone Number  
- Website  
- Revenue estimate  
- Employee count  
- Owner / Executives  
- LinkedIn page  
- SIC & NAICS  
- Tech stack  

### **Step 4 — Pull the OWNER (not the registered agent)**
Click **“People” → “Leadership”**  
Look for:
- Owner  
- Founder  
- President  
- Managing Member  
- CEO  

If no clear owner:
- Filter by Title = “Owner”  
- Filter by Department = “C-Suite”  

### **Step 5 — Export contact details**
ZoomInfo shows:
- Direct phone number  
- Mobile number (if available)  
- Verified business email  
- LinkedIn profile  

Export options:
- CSV  
- SalesLeads  
- Push to CRM  
- Copy to clipboard  

### **Step 6 — Add to your California Secretary of State record**
Match via:
- Business Name  
- City  
- ZIP Code  

---

# 🔥 **The Problem With ZoomInfo**
ZoomInfo is great, BUT:

- Some small LLCs **won’t exist** in ZoomInfo  
- Many owner numbers won’t appear  
- Agents ≠ owners  

That’s why the **AI-powered enrichment workflow in Clay is far superior**.

---

# ✅ **2. AUTOMATED METHOD — Clay + ZoomInfo API + Google Search (Best for 5,000+ records)**

This is how top-tier agencies like yours do it.

---

# 🔧 **CLAY WORKFLOW — FULLY AUTOMATIC ENRICHMENT PIPELINE**

### **Step A — Import Your CA Secretary of State CSV**
Clay → New Table → “Upload CSV”

Include columns:
- Business Name  
- Agent Name  
- Street  
- City  
- State  
- ZIP  
- Entity #  

---

# **Step B — Add Enrichment Columns**

### **1. ZoomInfo Company Lookup**
Clay → “Enrich Company Details”

Fields to match:
- Company Name  
- Location → City  
- Location → ZIP  
- Industry (optional)  

Return:
- Company Phone  
- Domain  
- Employee Count  
- Revenue  
- Industry  
- Tech stack  

---

### **2. ZoomInfo People Search (Owner Identification)**
Clay → “Find People at Company”

Filters:
- Title Contains: `Owner`, `Managing Member`, `CEO`, `President`  
- Department: `C-Suite`  
- Seniority: `Owner`  

Return:
- Full Name  
- Direct Phone  
- Mobile Phone  
- Email  
- LinkedIn  
- Title  

---

### **3. Google Search Scraper (Essential for small LLCs)**
Clay → “AI Web Search”  

Prompt:

```
Find the phone number for {Business Name} located at {Street}, {City}, {State}. 
Return only phone numbers. If none found, search for the owner name: {Agent Name}.
```

Return:
- Phone number(s)
- Business website
- Google Maps link
- Yelp listing

---

### **4. Google Maps API Enrichment**
Clay → “Find Places”  

Search:
- Business Name  
- ZIP Code  

Return:
- Maps Phone  
- Maps URL  
- Reviews  
- Website  
- Category  

---

### **5. Domain + Email Discovery**
Clay → “Find Email from Domain”  
Inputs:
- Domain from ZoomInfo  
- Or domain scraped by Google Search  

Return:
- Owner email  
- Local-part  
- Verification score  

---

# 💥 The Result
Within **3–10 seconds per row**, every business gets enriched with:

| Business | Domain | Phone | Owner | Owner Email | Owner Phone | Maps URL | LinkedIn |
|---------|---------|---------|--------|--------------|----------------|----------|-----------|

This gives you a **fully dialable, fully usable lead list** for your marketing agency.

---

# 🚀 Want me to automate this for you?
If you want, I can:

### ✔️ Generate the full Clay workflow for you  
### ✔️ Build the table structure  
### ✔️ Provide formulas/prompts  
### ✔️ Output your cleaned CSV ready for Clay import  
### ✔️ Provide enrichment prompts for Google Search  

Just say:

**“Build the Clay workflow for this dataset”**  
or  
**“Generate a CSV from the cleaned records so far”**
