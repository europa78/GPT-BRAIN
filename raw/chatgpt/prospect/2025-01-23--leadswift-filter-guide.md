---
title: "LeadSwift Filter Guide"
date: 2025-01-23
cluster: "Prospecting / Lead Gen"
messages: 29
source: chatgpt-export conversations.json (FULL transcript)
---

# LeadSwift Filter Guide

> 29 messages · 2025-01-23 · cluster: Prospecting / Lead Gen

**Semantic neighbors:** [[Google Business Profile Checklist]] · [[Industries for GBP DATA AXLE]] · [[LeadSwift]] · [[Lead Generation Strategies#2]]

## Transcript

**Mike:** I need help using a lead gen tool called "lead swift".  use the web for current info and analyze the support info provided on their company website.  here is info about using filters : How can I filter results?
LeadSwift provides you the option to apply granular filters.

This can be done via text-based filters, and/or the dropdown filtering menu for boolean tests.

Text Filters
For any text-based filters, simply use the text search field in your leads report.

By default, searching by keywords will only check these columns:

Name
Address
Website
Phone
However, you can use these prefixes to search other data points:

"mx:" for MX records
"job-location:" for contacts by their location, i.e. "orlando"
"job-title:" for contacts by job titles, i.e. "job-title:owner,founder,president,ceo,manager,executive"
"category:" for within categories, i.e. "category:hvac,heating,plumbing,air conditioning"
"description:" for business descriptions in Google and Facebook
"more-description:" for secondary descriptions on Facebook


Note: You can search multiple keywords in a filter by comma-separating them

You can use semicolon delimeters (";") to apply multiple filters simultaneously.

For example, this will filter leads with a "Toronto" address AND job titles containing "marketing" or "sales":


You can prefix filters with "-" to exclude them, i.e. "-category:manufacturer,wholesaler"

Dropdown Filters
You can also click the filter icon at the top-right corner of the results for additional options.

For example, businesses that don't have certain social profiles, or those with ratings below a certain threshold.



Note:
- Dropdown uses "AND" operator, i.e. "No Facebook" and "Google Rating" <= 4 shows without Facebook "AND" Google Rating <= 4
- Enabling "exclude null values" excludes those without a value, i.e. "Google Rating" <= 4 will exclude businesses with no ratings

**GPT:** LeadSwift offers robust filtering options to help you refine your lead searches effectively. Here's how you can utilize these filters:

**Text-Based Filters:**

Use the text search field in your leads report to apply specific filters. By default, this searches the Name, Address, Website, and Phone columns. To target other data points, use the following prefixes:

- `mx:` for MX records
- `job-location:` for contact locations (e.g., `job-location:orlando`)
- `job-title:` for job titles (e.g., `job-title:owner,founder,president,ceo,manager,executive`)
- `category:` for business categories (e.g., `category:hvac,heating,plumbing,air conditioning`)
- `description:` for business descriptions in Google and Facebook
- `more-description:` for secondary descriptions on Facebook

To search multiple keywords within a filter, separate them with commas. For example, `job-title:owner,founder` will filter leads with either "owner" or "founder" in their job titles.

To apply multiple filters simultaneously, separate them with semicolons. For instance, `job-location:Toronto; job-title:marketing,sales` will filter leads located in Toronto with job titles containing "marketing" or "sales".

To exclude certain criteria, prefix the filter with a minus sign (`-`). For example, `-category:manufacturer,wholesaler` will exclude leads categorized as manufacturers or wholesalers.

**Dropdown Filters:**

Click the filter icon at the top-right corner of the results to access additional filtering options. These allow you to filter businesses based on criteria such as the absence of certain social profiles or ratings below a specific threshold.

Note that dropdown filters use the "AND" operator. For example, selecting "No Facebook" and "Google Rating <= 4" will display businesses without a Facebook profile *and* a Google rating of 4 or lower. Enabling "exclude null values" will exclude businesses without a value in the selected field.

By effectively combining these filters, you can narrow down your search to the most relevant leads for your needs.

**Mike:** more info about performing searches :  How should I perform searches?
As with anything, a little bit of planning can go a long way in terms of the quality of your results.

Before we start, it is important to understand how LeadSwift works. In short, we aggregate leads from various local business sources – including Google Maps, Google Places, YellowPages, Yelp, Bing, and Facebook. While the quality of these sources vary, Google Maps typically reigns supreme. So, let's plan around that.

Assume we are searching for solar-related businesses in New York.

You should:
1. Perform the search manually in Google Maps for the keyword
2. Browse the results to confirm that it has the type and quantity of leads you want
3. If not, look at the business categories for additional keyword ideas:

    

In the above, we can see these additional keywords:
- Solar energy company
- Solar energy equipment supplier

Once you have identified the keywords that yield you the best results, simply perform the same search in LeadSwift. The beauty of LeadSwift is that you can perform searches for custom keywords. The dropdown keywords are only generic suggestions. You can enter any keyword you'd like, and press "enter" to select it:

**GPT:** To perform searches effectively with LeadSwift, follow these steps to maximize the quality of your results:

### **Understanding LeadSwift Search Methodology**
LeadSwift aggregates leads from multiple reputable local business sources, including:
- **Google Maps**
- Google Places
- YellowPages
- Yelp
- Bing
- Facebook

**Key Insight**: Among these, **Google Maps** generally provides the highest quality results. Use it as a benchmark during your planning process.

---

### **Steps to Plan and Perform a Search**

1. **Manual Planning in Google Maps**:
   - Start by manually performing your search on Google Maps for the desired keyword (e.g., "solar-related businesses in New York").
   - **Browse the Results**: Check if the results meet your needs in terms of both type and quantity.

2. **Generate Additional Keyword Ideas**:
   - Examine the business categories displayed in Google Maps for similar keywords or related terms. For example:
     - **Primary Keyword**: Solar-related businesses.
     - **Suggested Keywords**:
       - Solar energy company.
       - Solar energy equipment supplier.
     - These related terms can expand the reach of your search in LeadSwift.

3. **Perform the Search in LeadSwift**:
   - Use the keywords identified in Google Maps and replicate them in LeadSwift’s search tool.
   - **Custom Keywords**: While LeadSwift provides dropdown suggestions, you are not limited to those. Enter any keyword you prefer and press "Enter" to select it.

---

### **Tips for Better Results**
- **Precision Matters**: Be specific with your keywords to minimize irrelevant results.
- **Iterate**: If the results aren’t optimal, refine your keywords by experimenting with alternative terms.
- **Combine Filters**: Enhance your search by applying text-based or dropdown filters for granular control over the results.

By following these strategies, you can ensure a streamlined and efficient search process while leveraging the capabilities of LeadSwift to its fullest potential.

**Mike:** info about database contacts :  What are database contacts?
Most business email addresses can be obtained from public sources - such as company websites, search engines, social profiles, etc. These are always gathered fresh by LeadSwift. When you start a search, we scour the web for email addresses associated with the businesses. There's no outdated databases.

However, public sources are unlikely to contain email addresses of actual employees working at the organization. To capture individuals, we rely on a combination of third-party partners and our own proprietary technology. The process may include identifying patterns for employee email addresses, and then testing such combinations for a match. The email verification process for individuals is more cumbersome and necessitates maintaining a database.

Unless absolutely necessary, we always recommend ignoring database contacts. Unlike generic business email addresses, these are more likely to go stale as individuals frequently change their email addresses or move on to other companies. As well, since LeadSwift always lists the source of every email address, it is much easier to explain how you found their contact when it's through a public source (such as on their website or Google rather than a database).

For most small businesses, the generic business email address is likely monitored by the decision-maker anyway. A mom-and-pop restaurant or HVAC technicians wouldn't have a dedicated customer support channel to monitor inbound queries. In fact, most small businesses likely don't even provide email addresses to their employees, nor would they have professional profiles (i.e. LinkedIn) to connect them to the business. Restricting outreach to individuals would then entirely, and unnecessarily, exclude such businesses.

The goal of LeadSwift is to help you quickly find and reach as many local businesses as possible. These small businesses are the ones that are likely to purchase your product or service. Selling to larger organizations would require a more focused approach than a cold email outreach.

**GPT:** **Database Contacts in LeadSwift: Key Information**

### **Overview of Database Contacts**
- **Business Email Addresses**:
  - These are obtained from **public sources** like company websites, search engines, and social profiles.
  - LeadSwift gathers these emails freshly during searches, ensuring there are no outdated databases.
  
- **Employee-Specific Email Addresses**:
  - These come from **third-party partners** and **proprietary technology**.
  - Techniques include identifying email patterns (e.g., `firstname.lastname@company.com`) and testing combinations for matches.
  - These email addresses are verified but may still go stale as employees change roles or companies.

---

### **Recommendation on Using Database Contacts**
1. **Focus on Generic Business Emails**:
   - These are typically public (e.g., info@company.com or sales@company.com) and tied to the organization rather than individuals.
   - Decision-makers at small businesses often monitor these addresses directly, ensuring your outreach is seen by the right person.

2. **Limit Individual Contacts**:
   - Email addresses tied to specific employees are less reliable due to higher turnover.
   - Such emails can complicate outreach explanations, as they're harder to justify compared to public sources (e.g., "Found your email on your website" vs. a database match).

---

### **Why Focus on Generic Emails for Small Businesses?**
- **Accessibility**:
  - Many small businesses don't assign employees professional email addresses or create employee profiles on platforms like LinkedIn.
  
- **Simplified Outreach**:
  - Contacting a generic email ensures you’re reaching the business rather than risking an undelivered or ignored email sent to an individual no longer with the company.

- **Efficient Lead Generation**:
  - The small businesses targeted by LeadSwift (e.g., local HVAC companies or restaurants) are more likely to engage through their primary, generic contact channels.

---

### **When to Use Database Contacts**
- If targeting **larger organizations** with dedicated employee roles, database contacts might be valuable.
- Such outreach, however, typically requires a **personalized and focused approach**, not the broad cold outreach suited for smaller businesses.

By focusing on generic business emails, you’ll maximize your efficiency and ensure your outreach strategy aligns with LeadSwift’s strengths: quickly identifying and reaching local small businesses.

**Mike:** info about websites :  How can I search for HTML in websites?
As we always gather leads fresh, LeadSwift lets you search for specific HTML in business websites.

This can be used to search for technology footprints (such as "shopify") or text ("Powered by XYZ Competitor"). The HTML to be searched must be provided at the time of search. If you later decide to change what needs to be found, the search must be ran anew.

To search for HTML in websites, enable the "Search leads' websites for custom HTML" checkbox. You can then search for multiple HTML snippets by separating them using a semicolon (";") delimiter:



By default, the leads report will show all leads. To only display leads containing the searched HTML, enable the "HTML Search" column and "Has Custom HTML" checkbox in the filters:



If any of the comma-delimited snippets are found, the "HTML Search" column will list them in their numeric order.

For example, if you search "shopify;woocommerce;magento" - and the latter two are found, the "HTML Search" column will show: 2,3

**GPT:** ### **Searching for HTML in Websites Using LeadSwift**

LeadSwift offers the ability to search for specific HTML elements on business websites. This feature is particularly useful for identifying technology footprints or specific text patterns that indicate the use of certain platforms or services. Here’s how it works:

---

### **How to Search for HTML**
1. **Enable HTML Search**:
   - Check the option: **"Search leads' websites for custom HTML"** before running your search.

2. **Define the HTML Snippets**:
   - Provide the HTML or text snippets you wish to search for.
   - Example snippets:
     - Technology footprints: `shopify`, `woocommerce`, `magento`
     - Text markers: `Powered by XYZ Competitor`

3. **Search Multiple Snippets**:
   - Use a semicolon (`;`) delimiter to include multiple HTML snippets in one search.
   - Example: `shopify;woocommerce;magento`.

---

### **Viewing Results**
1. **Enable the "HTML Search" Column**:
   - After the search is complete, add the **HTML Search** column to your leads report.

2. **Filter Leads with Custom HTML**:
   - Check the box labeled **"Has Custom HTML"** in the filters to display only the leads containing the specified HTML snippets.

3. **Understand the Output**:
   - The **HTML Search** column lists the matching snippets by their numeric order.
   - For example:
     - Input: `shopify;woocommerce;magento`
     - If "woocommerce" and "magento" are found, the column will display: **2,3**.

---

### **Best Practices**
- **Predefine Search Criteria**:
   - Plan your HTML search criteria beforehand, as you’ll need to run a new search if you decide to change the snippets.
   
- **Leverage for Competitive Analysis**:
   - Use this feature to identify businesses using specific competitor platforms or services (e.g., Shopify, Magento).

- **Optimize Searches**:
   - Combine HTML searches with other filters (e.g., business category or location) for highly targeted results.

---

This tool is ideal for identifying potential leads based on the technologies they use or affiliations with competitors, enabling you to refine your outreach strategy effectively.

**Mike:** info about using their API : How can I use the API?
You can use the LeadSwift REST API to automate your tasks.

You can generate and manage your API keys here. A sample PHP file with the below functions can be downloaded here.

CAMPAIGNS
Get all campaigns list:

GET https://leadswift.com/api/campaigns?api_key=[api_key]
Get campaign by ID:

GET https://leadswift.com/api/campaigns/[id]?api_key=[api_key]
Create a campaign:

POST https://leadswift.com/api/campaigns?api_key=[api_key]
Params: title, description (optional)
Edit a campaign:

PUT https://leadswift.com/api/campaigns/[id]?api_key=[api_key]
Params: campaign_id, title, description (optional)
Delete a campaign:

DELETE https://leadswift.com/api/campaigns/[id]?api_key=[api_key]
SEARCH QUERIES
Get searches of a campaign:

GET https://leadswift.com/api/searches/[id]?api_key=[api_key]
Submit a search:

POST https://leadswift.com/api/searches?api_key=[api_key]
Params: campaign_id, keyword, location, search_html_code (optional)
Delete a search:

DELETE https://leadswift.com/api/searches/[id]?api_key=[api_key]
GET LEADS OF A SEARCH
Get leads:

POST https://leadswift.com/api/leads?api_key=[api_key]
Params: search_id, start (Paging offset, the total offset is returned in [recordsFiltered] value), length (Number of leads per page), search[value], search[regex], custom_filter, exact_match_location, exclude_closed_location, merge_by_domain, exact_match_domain_only, social_profiles, whois, free_providers, cols[]
USER INFO, USER PACKAGES
Get user info:

GET https://leadswift.com/api/user_info?api_key=[api_key]
USER SETTINGS
Get current settings:

GET https://leadswift.com/api/user_settings?api_key=[api_key]
Update user settings:

PUT https://leadswift.com/api/user_settings?api_key=[api_key]
Params: notification_email, zerobounce_api_key, neverbounce_api_key, emaillistverify_api_key, mailtester_api_key, hunterio_api_key, debounce_api_key, zerobounce_api_enable, neverbounce_api_enable, emaillistverify_api_enable, mailtester_api_enable, verify_database contacts, hunterio_api_enable, debounce_api_enable, email_verification, email_verification_only_email, email_finder, disable_notification_email, audit_logo, audit_url, unsubscribe_url, trackmail_url, custom_global_blacklist_emails, maximum_emails_per business, maximum_emails_per business export, auto_update_global_blacklist_emails, smtp[0][smtp_id], smtp[0][sender_name], smtp[0][smtp_host], smtp[0][smtp_port], smtp[0][smtp_encryption], smtp[0][smtp_auth], smtp[0][smtp_username], smtp[0][smtp_password], smtp[0][email_signature], smtp[0][maximum_emails_per day], smtp[0][maximum_emails_per hour], smtp[0][delay_between_emails], smtp[0][delay after x_errors]
Note: Change [0] to another number [1] if it's a different SMTP.
EXPORTING LEADS
Get total pages:

POST https://leadswift.com/api/export_leads_count?api_key=[api_key]
Params: search_id (required), export_csv_params (required)
Note: To obtain the export_csv_params, follow these steps:
 
Start an export with your desired filters in the UI
Monitor the network requests to capture the POST request payload containing the export_csv_params
Remove the page and total_pages URL parameters from the payload before using it in the API

The payload will vary depending on your export settings but will look something like this:
export_csv_params=%7B%22draw%22%3A1%2C%22columns%22%3A%5B%7B%22data%22%3A0%2C%22name%22%3A%22%22%2C%22searchable%22%3Atrue%2C%22orderable%22%3Afalse%2C%22search%22%3A%7B%22value%22%3A%22%22%2C%22regex%22%3Afalse%7D%7D%2C%7B%22data%22%3A1%2C%22name%22%3A%22%22%2C%22searchable%22%3Atrue%2C%22orderable%22%3Afalse%2C%22search%22%3A%7B%22value%22%3A%22%22%2C%22regex%22%3Afalse%7D%7D%2C%7B%22data%22%3A2%2C%22name%22%3A%22%22%2C%22searchable%22%3Atrue%2C%22orderable%22%3Atrue%2C%22search%22%3A%7B%22value%22%3A%22%22%2C%22regex%22%3Afalse%7D%7D%2C%7B%22data%22%3A3%2C%22name%22%3A%22%22%2C%22searchable%22%3Atrue%2C%22orderable%22%3Atrue%2C%22search%22%3A%7B%22value%22%3A%22%22%2C%22regex%22%3Afalse%7D%7D%2C%7B%22data%22%3A4%2C%22name%22%3A%22%22%2C%22searchable%22%3Atrue%2C%22orderable%22%3Atrue%2C%22search%22%3A%7B%22value%22%3A%22%22%2C%22regex%22%3Afalse%7D%7D%2C%7B%22data%22%3A5%2C%22name%22%3A%22%22%2C%22searchable%22%3Atrue%2C%22orderable%22%3Afalse%2C%22search%22%3A%7B%22value%22%3A%22%22%2C%22regex%22%3Afalse%7D%7D%2C%7B%22data%22%3A6%2C%22name%22%3A%22%22%2C%22searchable%22%3Atrue%2C%22orderable%22%3Atrue%2C%22search%22%3A%7B%22value%22%3A%22%22%2C%22regex%22%3Afalse%7D%7D%2C%7B%22data%22%3A7%2C%22name%22%3A%22%22%2C%22searchable%22%3Atrue%2C%22orderable%22%3Afalse%2C%22search%22%3A%7B%22value%22%3A%22%22%2C%22regex%22%3Afalse%7D%7D%2C%7B%22data%22%3A8%2C%22name%22%3A%22%22%2C%22searchable%22%3Atrue%2C%22orderable%22%3Atrue%2C%22search%22%3A%7B%22value%22%3A%22%22%2C%22regex%22%3Afalse%7D%7D%2C%7B%22data%22%3A9%2C%22name%22%3A%22%22%2C%22searchable%22%3Atrue%2C%22orderable%22%3Atrue%2C%22search%22%3A%7B%22value%22%3A%22%22%2C%22regex%22%3Afalse%7D%7D%2C%7B%22data%22%3A10%2C%22name%22%3A%22%22%2C%22searchable%22%3Atrue%2C%22orderable%22%3Atrue%2C%22search%22%3A%7B%22value%22%3A%22%22%2C%22regex%22%3Afalse%7D%7D%2C%7B%22data%22%3A11%2C%22name%22%3A%22%22%2C%22searchable%22%3Atrue%2C%22orderable%22%3Atrue%2C%22search%22%3A%7B%22value%22%3A%22%22%2C%22regex%22%3Afalse%7D%7D%2C%7B%22data%22%3A12%2C%22name%22%3A%22%22%2C%22searchable%22%3Atrue%2C%22orderable%22%3Atrue%2C%22search%22%3A%7B%22value%22%3A%22%22%2C%22regex%22%3Afalse%7D%7D%2C%7B%22data%22%3A13%2C%22name%22%3A%22%22%2C%22searchable%22%3Atrue%2C%22orderable%22%3Atrue%2C%22search%22%3A%7B%22value%22%3A%22%22%2C%22regex%22%3Afalse%7D%7D%2C%7B%22data%22%3A14%2C%22name%22%3A%22%22%2C%22searchable%22%3Atrue%2C%22orderable%22%3Atrue%2C%22search%22%3A%7B%22value%22%3A%22%22%2C%22regex%22%3Afalse%7D%7D%2C%7B%22data%22%3A15%2C%22name%22%3A%22%22%2C%22searchable%22%3Atrue%2C%22orderable%22%3Atrue%2C%22search%22%3A%7B%22value%22%3A%22%22%2C%22regex%22%3Afalse%7D%7D%2C%7B%22data%22%3A16%2C%22name%22%3A%22%22%2C%22searchable%22%3Atrue%2C%22orderable%22%3Atrue%2C%22search%22%3A%7B%22value%22%3A%22%22%2C%22regex%22%3Afalse%7D%7D%2C%7B%22data%22%3A17%2C%22name%22%3A%22%22%2C%22searchable%22%3Atrue%2C%22orderable%22%3Afalse%2C%22search%22%3A%7B%22value%22%3A%22%22%2C%22regex%22%3Afalse%7D%7D%2C%7B%22data%22%3A18%2C%22name%22%3A%22%22%2C%22searchable%22%3Atrue%2C%22orderable%22%3Afalse%2C%22search%22%3A%7B%22value%22%3A%22%22%2C%22regex%22%3Afalse%7D%7D%2C%7B%22data%22%3A19%2C%22name%22%3A%22%22%2C%22searchable%22%3Atrue%2C%22orderable%22%3Atrue%2C%22search%22%3A%7B%22value%22%3A%22%22%2C%22regex%22%3Afalse%7D%7D%2C%7B%22data%22%3A20%2C%22name%22%3A%22%22%2C%22searchable%22%3Atrue%2C%22orderable%22%3Atrue%2C%22search%22%3A%7B%22value%22%3A%22%22%2C%22regex%22%3Afalse%7D%7D%2C%7B%22data%22%3A21%2C%22name%22%3A%22%22%2C%22searchable%22%3Atrue%2C%22orderable%22%3Atrue%2C%22search%22%3A%7B%22value%22%3A%22%22%2C%22regex%22%3Afalse%7D%7D%2C%7B%22data%22%3A22%2C%22name%22%3A%22%22%2C%22searchable%22%3Atrue%2C%22orderable%22%3Atrue%2C%22search%22%3A%7B%22value%22%3A%22%22%2C%22regex%22%3Afalse%7D%7D%2C%7B%22data%22%3A23%2C%22name%22%3A%22%22%2C%22searchable%22%3Atrue%2C%22orderable%22%3Atrue%2C%22search%22%3A%7B%22value%22%3A%22%22%2C%22regex%22%3Afalse%7D%7D%2C%7B%22data%22%3A24%2C%22name%22%3A%22%22%2C%22searchable%22%3Atrue%2C%22orderable%22%3Atrue%2C%22search%22%3A%7B%22value%22%3A%22%22%2C%22regex%22%3Afalse%7D%7D%2C%7B%22data%22%3A25%2C%22name%22%3A%22%22%2C%22searchable%22%3Atrue%2C%22orderable%22%3Atrue%2C%22search%22%3A%7B%22value%22%3A%22%22%2C%22regex%22%3Afalse%7D%7D%2C%7B%22data%22%3A26%2C%22name%22%3A%22%22%2C%22searchable%22%3Atrue%2C%22orderable%22%3Atrue%2C%22search%22%3A%7B%22value%22%3A%22%22%2C%22regex%22%3Afalse%7D%7D%2C%7B%22data%22%3A27%2C%22name%22%3A%22%22%2C%22searchable%22%3Atrue%2C%22orderable%22%3Atrue%2C%22search%22%3A%7B%22value%22%3A%22%22%2C%22regex%22%3Afalse%7D%7D%2C%7B%22data%22%3A28%2C%22name%22%3A%22%22%2C%22searchable%22%3Atrue%2C%22orderable%22%3Atrue%2C%22search%22%3A%7B%22value%22%3A%22%22%2C%22regex%22%3Afalse%7D%7D%2C%7B%22data%22%3A29%2C%22name%22%3A%22%22%2C%22searchable%22%3Atrue%2C%22orderable%22%3Atrue%2C%22search%22%3A%7B%22value%22%3A%22%22%2C%22regex%22%3Afalse%7D%7D%2C%7B%22data%22%3A30%2C%22name%22%3A%22%22%2C%22searchable%22%3Atrue%2C%22orderable%22%3Atrue%2C%22search%22%3A%7B%22value%22%3A%22%22%2C%22regex%22%3Afalse%7D%7D%2C%7B%22data%22%3A31%2C%22name%22%3A%22%22%2C%22searchable%22%3Atrue%2C%22orderable%22%3Atrue%2C%22search%22%3A%7B%22value%22%3A%22%22%2C%22regex%22%3Afalse%7D%7D%2C%7B%22data%22%3A32%2C%22name%22%3A%22%22%2C%22searchable%22%3Atrue%2C%22orderable%22%3Atrue%2C%22search%22%3A%7B%22value%22%3A%22%22%2C%22regex%22%3Afalse%7D%7D%2C%7B%22data%22%3A33%2C%22name%22%3A%22%22%2C%22searchable%22%3Atrue%2C%22orderable%22%3Atrue%2C%22search%22%3A%7B%22value%22%3A%22%22%2C%22regex%22%3Afalse%7D%7D%2C%7B%22data%22%3A34%2C%22name%22%3A%22%22%2C%22searchable%22%3Atrue%2C%22orderable%22%3Afalse%2C%22search%22%3A%7B%22value%22%3A%22%22%2C%22regex%22%3Afalse%7D%7D%2C%7B%22data%22%3A35%2C%22name%22%3A%22%22%2C%22searchable%22%3Atrue%2C%22orderable%22%3Afalse%2C%22search%22%3A%7B%22value%22%3A%22%22%2C%22regex%22%3Afalse%7D%7D%2C%7B%22data%22%3A36%2C%22name%22%3A%22%22%2C%22searchable%22%3Atrue%2C%22orderable%22%3Afalse%2C%22search%22%3A%7B%22value%22%3A%22%22%2C%22regex%22%3Afalse%7D%7D%2C%7B%22data%22%3A37%2C%22name%22%3A%22%22%2C%22searchable%22%3Atrue%2C%22orderable%22%3Afalse%2C%22search%22%3A%7B%22value%22%3A%22%22%2C%22regex%22%3Afalse%7D%7D%2C%7B%22data%22%3A38%2C%22name%22%3A%22%22%2C%22searchable%22%3Atrue%2C%22orderable%22%3Afalse%2C%22search%22%3A%7B%22value%22%3A%22%22%2C%22regex%22%3Afalse%7D%7D%2C%7B%22data%22%3A39%2C%22name%22%3A%22%22%2C%22searchable%22%3Atrue%2C%22orderable%22%3Afalse%2C%22search%22%3A%7B%22value%22%3A%22%22%2C%22regex%22%3Afalse%7D%7D%2C%7B%22data%22%3A40%2C%22name%22%3A%22%22%2C%22searchable%22%3Atrue%2C%22orderable%22%3Afalse%2C%22search%22%3A%7B%22value%22%3A%22%22%2C%22regex%22%3Afalse%7D%7D%2C%7B%22data%22%3A41%2C%22name%22%3A%22%22%2C%22searchable%22%3Atrue%2C%22orderable%22%3Afalse%2C%22search%22%3A%7B%22value%22%3A%22%22%2C%22regex%22%3Afalse%7D%7D%2C%7B%22data%22%3A42%2C%22name%22%3A%22%22%2C%22searchable%22%3Atrue%2C%22orderable%22%3Afalse%2C%22search%22%3A%7B%22value%22%3A%22%22%2C%22regex%22%3Afalse%7D%7D%2C%7B%22data%22%3A43%2C%22name%22%3A%22%22%2C%22searchable%22%3Atrue%2C%22orderable%22%3Afalse%2C%22search%22%3A%7B%22value%22%3A%22%22%2C%22regex%22%3Afalse%7D%7D%2C%7B%22data%22%3A44%2C%22name%22%3A%22%22%2C%22searchable%22%3Atrue%2C%22orderable%22%3Afalse%2C%22search%22%3A%7B%22value%22%3A%22%22%2C%22regex%22%3Afalse%7D%7D%2C%7B%22data%22%3A45%2C%22name%22%3A%22%22%2C%22searchable%22%3Atrue%2C%22orderable%22%3Afalse%2C%22search%22%3A%7B%22value%22%3A%22%22%2C%22regex%22%3Afalse%7D%7D%2C%7B%22data%22%3A46%2C%22name%22%3A%22%22%2C%22searchable%22%3Atrue%2C%22orderable%22%3Afalse%2C%22search%22%3A%7B%22value%22%3A%22%22%2C%22regex%22%3Afalse%7D%7D%2C%7B%22data%22%3A47%2C%22name%22%3A%22%22%2C%22searchable%22%3Atrue%2C%22orderable%22%3Afalse%2C%22search%22%3A%7B%22value%22%3A%22%22%2C%22regex%22%3Afalse%7D%7D%2C%7B%22data%22%3A48%2C%22name%22%3A%22%22%2C%22searchable%22%3Atrue%2C%22orderable%22%3Afalse%2C%22search%22%3A%7B%22value%22%3A%22%22%2C%22regex%22%3Afalse%7D%7D%2C%7B%22data%22%3A49%2C%22name%22%3A%22%22%2C%22searchable%22%3Atrue%2C%22orderable%22%3Afalse%2C%22search%22%3A%7B%22value%22%3A%22%22%2C%22regex%22%3Afalse%7D%7D%2C%7B%22data%22%3A50%2C%22name%22%3A%22%22%2C%22searchable%22%3Atrue%2C%22orderable%22%3Afalse%2C%22search%22%3A%7B%22value%22%3A%22%22%2C%22regex%22%3Afalse%7D%7D%2C%7B%22data%22%3A51%2C%22name%22%3A%22%22%2C%22searchable%22%3Atrue%2C%22orderable%22%3Atrue%2C%22search%22%3A%7B%22value%22%3A%22%22%2C%22regex%22%3Afalse%7D%7D%2C%7B%22data%22%3A52%2C%22name%22%3A%22%22%2C%22searchable%22%3Atrue%2C%22orderable%22%3Atrue%2C%22search%22%3A%7B%22value%22%3A%22%22%2C%22regex%22%3Afalse%7D%7D%2C%7B%22data%22%3A53%2C%22name%22%3A%22%22%2C%22searchable%22%3Atrue%2C%22orderable%22%3Atrue%2C%22search%22%3A%7B%22value%22%3A%22%22%2C%22regex%22%3Afalse%7D%7D%2C%7B%22data%22%3A54%2C%22name%22%3A%22%22%2C%22searchable%22%3Atrue%2C%22orderable%22%3Afalse%2C%22search%22%3A%7B%22value%22%3A%22%22%2C%22regex%22%3Afalse%7D%7D%2C%7B%22data%22%3A55%2C%22name%22%3A%22%22%2C%22searchable%22%3Atrue%2C%22orderable%22%3Afalse%2C%22search%22%3A%7B%22value%22%3A%22%22%2C%22regex%22%3Afalse%7D%7D%2C%7B%22data%22%3A56%2C%22name%22%3A%22%22%2C%22searchable%22%3Atrue%2C%22orderable%22%3Afalse%2C%22search%22%3A%7B%22value%22%3A%22%22%2C%22regex%22%3Afalse%7D%7D%2C%7B%22data%22%3A57%2C%22name%22%3A%22%22%2C%22searchable%22%3Atrue%2C%22orderable%22%3Afalse%2C%22search%22%3A%7B%22value%22%3A%22%22%2C%22regex%22%3Afalse%7D%7D%2C%7B%22data%22%3A58%2C%22name%22%3A%22%22%2C%22searchable%22%3Atrue%2C%22orderable%22%3Afalse%2C%22search%22%3A%7B%22value%22%3A%22%22%2C%22regex%22%3Afalse%7D%7D%2C%7B%22data%22%3A59%2C%22name%22%3A%22%22%2C%22searchable%22%3Atrue%2C%22orderable%22%3Afalse%2C%22search%22%3A%7B%22value%22%3A%22%22%2C%22regex%22%3Afalse%7D%7D%2C%7B%22data%22%3A60%2C%22name%22%3A%22%22%2C%22searchable%22%3Atrue%2C%22orderable%22%3Afalse%2C%22search%22%3A%7B%22value%22%3A%22%22%2C%22regex%22%3Afalse%7D%7D%2C%7B%22data%22%3A61%2C%22name%22%3A%22%22%2C%22searchable%22%3Atrue%2C%22orderable%22%3Afalse%2C%22search%22%3A%7B%22value%22%3A%22%22%2C%22regex%22%3Afalse%7D%7D%2C%7B%22data%22%3A62%2C%22name%22%3A%22%22%2C%22searchable%22%3Atrue%2C%22orderable%22%3Afalse%2C%22search%22%3A%7B%22value%22%3A%22%22%2C%22regex%22%3Afalse%7D%7D%2C%7B%22data%22%3A63%2C%22name%22%3A%22%22%2C%22searchable%22%3Atrue%2C%22orderable%22%3Afalse%2C%22search%22%3A%7B%22value%22%3A%22%22%2C%22regex%22%3Afalse%7D%7D%2C%7B%22data%22%3A64%2C%22name%22%3A%22%22%2C%22searchable%22%3Atrue%2C%22orderable%22%3Afalse%2C%22search%22%3A%7B%22value%22%3A%22%22%2C%22regex%22%3Afalse%7D%7D%2C%7B%22data%22%3A65%2C%22name%22%3A%22%22%2C%22searchable%22%3Atrue%2C%22orderable%22%3Afalse%2C%22search%22%3A%7B%22value%22%3A%22%22%2C%22regex%22%3Afalse%7D%7D%2C%7B%22data%22%3A66%2C%22name%22%3A%22%22%2C%22searchable%22%3Atrue%2C%22orderable%22%3Afalse%2C%22search%22%3A%7B%22value%22%3A%22%22%2C%22regex%22%3Afalse%7D%7D%2C%7B%22data%22%3A67%2C%22name%22%3A%22%22%2C%22searchable%22%3Atrue%2C%22orderable%22%3Afalse%2C%22search%22%3A%7B%22value%22%3A%22%22%2C%22regex%22%3Afalse%7D%7D%2C%7B%22data%22%3A68%2C%22name%22%3A%22%22%2C%22searchable%22%3Atrue%2C%22orderable%22%3Afalse%2C%22search%22%3A%7B%22value%22%3A%22%22%2C%22regex%22%3Afalse%7D%7D%2C%7B%22data%22%3A69%2C%22name%22%3A%22%22%2C%22searchable%22%3Atrue%2C%22orderable%22%3Afalse%2C%22search%22%3A%7B%22value%22%3A%22%22%2C%22regex%22%3Afalse%7D%7D%2C%7B%22data%22%3A70%2C%22name%22%3A%22%22%2C%22searchable%22%3Atrue%2C%22orderable%22%3Afalse%2C%22search%22%3A%7B%22value%22%3A%22%22%2C%22regex%22%3Afalse%7D%7D%2C%7B%22data%22%3A71%2C%22name%22%3A%22%22%2C%22searchable%22%3Atrue%2C%22orderable%22%3Afalse%2C%22search%22%3A%7B%22value%22%3A%22%22%2C%22regex%22%3Afalse%7D%7D%2C%7B%22data%22%3A72%2C%22name%22%3A%22%22%2C%22searchable%22%3Atrue%2C%22orderable%22%3Afalse%2C%22search%22%3A%7B%22value%22%3A%22%22%2C%22regex%22%3Afalse%7D%7D%2C%7B%22data%22%3A73%2C%22name%22%3A%22%22%2C%22searchable%22%3Atrue%2C%22orderable%22%3Afalse%2C%22search%22%3A%7B%22value%22%3A%22%22%2C%22regex%22%3Afalse%7D%7D%2C%7B%22data%22%3A74%2C%22name%22%3A%22%22%2C%22searchable%22%3Atrue%2C%22orderable%22%3Afalse%2C%22search%22%3A%7B%22value%22%3A%22%22%2C%22regex%22%3Afalse%7D%7D%2C%7B%22data%22%3A75%2C%22name%22%3A%22%22%2C%22searchable%22%3Atrue%2C%22orderable%22%3Afalse%2C%22search%22%3A%7B%22value%22%3A%22%22%2C%22regex%22%3Afalse%7D%7D%2C%7B%22data%22%3A76%2C%22name%22%3A%22%22%2C%22searchable%22%3Atrue%2C%22orderable%22%3Afalse%2C%22search%22%3A%7B%22value%22%3A%22%22%2C%22regex%22%3Afalse%7D%7D%2C%7B%22data%22%3A77%2C%22name%22%3A%22%22%2C%22searchable%22%3Atrue%2C%22orderable%22%3Afalse%2C%22search%22%3A%7B%22value%22%3A%22%22%2C%22regex%22%3Afalse%7D%7D%2C%7B%22data%22%3A78%2C%22name%22%3A%22%22%2C%22searchable%22%3Atrue%2C%22orderable%22%3Afalse%2C%22search%22%3A%7B%22value%22%3A%22%22%2C%22regex%22%3Afalse%7D%7D%2C%7B%22data%22%3A79%2C%22name%22%3A%22%22%2C%22searchable%22%3Atrue%2C%22orderable%22%3Afalse%2C%22search%22%3A%7B%22value%22%3A%22%22%2C%22regex%22%3Afalse%7D%7D%2C%7B%22data%22%3A80%2C%22name%22%3A%22%22%2C%22searchable%22%3Atrue%2C%22orderable%22%3Afalse%2C%22search%22%3A%7B%22value%22%3A%22%22%2C%22regex%22%3Afalse%7D%7D%2C%7B%22data%22%3A81%2C%22name%22%3A%22%22%2C%22searchable%22%3Atrue%2C%22orderable%22%3Afalse%2C%22search%22%3A%7B%22value%22%3A%22%22%2C%22regex%22%3Afalse%7D%7D%2C%7B%22data%22%3A82%2C%22name%22%3A%22%22%2C%22searchable%22%3Atrue%2C%22orderable%22%3Afalse%2C%22search%22%3A%7B%22value%22%3A%22%22%2C%22regex%22%3Afalse%7D%7D%2C%7B%22data%22%3A83%2C%22name%22%3A%22%22%2C%22searchable%22%3Atrue%2C%22orderable%22%3Afalse%2C%22search%22%3A%7B%22value%22%3A%22%22%2C%22regex%22%3Afalse%7D%7D%2C%7B%22data%22%3A84%2C%22name%22%3A%22%22%2C%22searchable%22%3Atrue%2C%22orderable%22%3Atrue%2C%22search%22%3A%7B%22value%22%3A%22%22%2C%22regex%22%3Afalse%7D%7D%2C%7B%22data%22%3A85%2C%22name%22%3A%22%22%2C%22searchable%22%3Atrue%2C%22orderable%22%3Atrue%2C%22search%22%3A%7B%22value%22%3A%22%22%2C%22regex%22%3Afalse%7D%7D%2C%7B%22data%22%3A86%2C%22name%22%3A%22%22%2C%22searchable%22%3Atrue%2C%22orderable%22%3Afalse%2C%22search%22%3A%7B%22value%22%3A%22%22%2C%22regex%22%3Afalse%7D%7D%2C%7B%22data%22%3A87%2C%22name%22%3A%22%22%2C%22searchable%22%3Atrue%2C%22orderable%22%3Afalse%2C%22search%22%3A%7B%22value%22%3A%22%22%2C%22regex%22%3Afalse%7D%7D%2C%7B%22data%22%3A88%2C%22name%22%3A%22%22%2C%22searchable%22%3Atrue%2C%22orderable%22%3Afalse%2C%22search%22%3A%7B%22value%22%3A%22%22%2C%22regex%22%3Afalse%7D%7D%2C%7B%22data%22%3A89%2C%22name%22%3A%22%22%2C%22searchable%22%3Atrue%2C%22orderable%22%3Afalse%2C%22search%22%3A%7B%22value%22%3A%22%22%2C%22regex%22%3Afalse%7D%7D%2C%7B%22data%22%3A90%2C%22name%22%3A%22%22%2C%22searchable%22%3Atrue%2C%22orderable%22%3Atrue%2C%22search%22%3A%7B%22value%22%3A%22%22%2C%22regex%22%3Afalse%7D%7D%5D%2C%22order%22%3A%5B%7B%22column%22%3A4%2C%22dir%22%3A%22desc%22%7D%5D%2C%22start%22%3A0%2C%22length%22%3A25%2C%22search%22%3A%7B%22value%22%3A%22%22%2C%22regex%22%3Afalse%7D%2C%22custom_filter%22%3A%22%22%2C%22exact_match_location%22%3A0%2C%22exclude_closed_location%22%3A0%2C%22merge_by_domain%22%3A0%2C%22exact_match_domain_only%22%3A0%2C%22social_profiles%22%3A0%2C%22whois%22%3A0%2C%22free_providers%22%3A0%2C%22cols%22%3A%5B0%2C1%2C2%2C3%2C6%2C7%2C8%2C9%2C51%2C52%2C84%2C85%2C86%2C87%2C88%2C89%2C90%5D%7D&page=0&total_pages=19&select_lead=&export_include_contact_details=0&remove_duplicates=0&one_contact_per_row=1
Export each page based on total pages:

POST https://leadswift.com/api/export_leads?api_key=[api_key]
Params: search_id (required), page (required), total_pages (required), export_csv_params (required)
Note: Call the next page if the response data contains done. When finished, it will return file_name in json format, and you can download it at: https://reports.leadswift.com/export/temp/csv/[file_name].csv
GET CONTACTS OF A LEAD
Get leads:

GET https://leadswift.com/api/load_contacts?api_key=[api_key]&id=[business_id]-[keyword_id]-[search_id]&page=1&per_page=20
Params: id, page, per_page, exact_match_domain_only, social_profile, whois, free_provider, q (search keyword),

**GPT:** ### **Using the LeadSwift REST API**

LeadSwift provides a comprehensive REST API for automating tasks such as managing campaigns, submitting searches, and exporting leads. Below is a detailed guide on how to use the API effectively.

---

### **1. API Authentication**
- **Generate and manage API keys** in your LeadSwift account.
- Use your API key in all API requests by appending it as a query parameter (`?api_key=[your_api_key]`).

---

### **2. Campaign Management**
- **Get All Campaigns**:
  ```http
  GET https://leadswift.com/api/campaigns?api_key=[api_key]
  ```
- **Get Campaign by ID**:
  ```http
  GET https://leadswift.com/api/campaigns/[id]?api_key=[api_key]
  ```
- **Create a Campaign**:
  ```http
  POST https://leadswift.com/api/campaigns?api_key=[api_key]
  Params: title, description (optional)
  ```
- **Edit a Campaign**:
  ```http
  PUT https://leadswift.com/api/campaigns/[id]?api_key=[api_key]
  Params: campaign_id, title, description (optional)
  ```
- **Delete a Campaign**:
  ```http
  DELETE https://leadswift.com/api/campaigns/[id]?api_key=[api_key]
  ```

---

### **3. Search Management**
- **Get Searches for a Campaign**:
  ```http
  GET https://leadswift.com/api/searches/[id]?api_key=[api_key]
  ```
- **Submit a Search**:
  ```http
  POST https://leadswift.com/api/searches?api_key=[api_key]
  Params: campaign_id, keyword, location, search_html_code (optional)
  ```
- **Delete a Search**:
  ```http
  DELETE https://leadswift.com/api/searches/[id]?api_key=[api_key]
  ```

---

### **4. Lead Management**
- **Get Leads of a Search**:
  ```http
  POST https://leadswift.com/api/leads?api_key=[api_key]
  Params: search_id, start, length, search[value], search[regex], custom_filter, etc.
  ```
- **Get Contacts for a Lead**:
  ```http
  GET https://leadswift.com/api/load_contacts?api_key=[api_key]&id=[business_id]-[keyword_id]-[search_id]&page=1&per_page=20
  ```

---

### **5. Exporting Leads**
- **Get Total Pages for Export**:
  ```http
  POST https://leadswift.com/api/export_leads_count?api_key=[api_key]
  Params: search_id, export_csv_params
  ```
  - Obtain `export_csv_params` by initiating an export in the LeadSwift UI and capturing the payload.

- **Export Leads Page-by-Page**:
  ```http
  POST https://leadswift.com/api/export_leads?api_key=[api_key]
  Params: search_id, page, total_pages, export_csv_params
  ```
  - Once done, a file name is returned in JSON format. Download the file at:
    ```
    https://reports.leadswift.com/export/temp/csv/[file_name].csv
    ```

---

### **6. User Information and Settings**
- **Get User Info**:
  ```http
  GET https://leadswift.com/api/user_info?api_key=[api_key]
  ```
- **Get Current Settings**:
  ```http
  GET https://leadswift.com/api/user_settings?api_key=[api_key]
  ```
- **Update User Settings**:
  ```http
  PUT https://leadswift.com/api/user_settings?api_key=[api_key]
  Params: notification_email, zerobounce_api_key, debounce_api_key, smtp configurations, etc.
  ```

---

### **7. Notes for API Use**
- **Batch Processing**: Export leads in pages, especially for large datasets.
- **Monitor Network Requests**: Capture export parameters for advanced use cases.
- **Validation**: Ensure parameters are correctly formatted to avoid API errors.

By leveraging LeadSwift’s API, you can automate repetitive tasks, streamline lead management, and integrate LeadSwift functionality directly into your workflows.

**Mike:** analyze the entire chat for the info I inputted.  create a user manual I can peruse as needed.

**GPT:** ### **LeadSwift User Manual**

This manual consolidates all the information provided in the conversation into an organized guide. Use it as a quick reference for performing searches, applying filters, using the API, and managing database contacts with LeadSwift.

---

## **1. Performing Searches**

### **Planning Your Search**
- LeadSwift aggregates leads from multiple sources, including Google Maps, YellowPages, Yelp, Bing, and Facebook. Google Maps provides the most reliable results.
- **Steps to Plan a Search**:
  1. Perform a manual search on Google Maps for your keyword.
  2. Review the results for relevance and quantity.
  3. Identify additional keywords based on business categories in the results (e.g., "solar energy company").

### **Executing a Search**
- Enter keywords directly into LeadSwift. You are not restricted to dropdown suggestions.
- For custom keywords, type them and press "Enter."

---

## **2. Using Filters**

### **Text-Based Filters**
- Use the search field to filter by:
  - **Name, Address, Website, Phone** (default columns).
  - Prefix filters for other data points:
    - `mx:` for MX records.
    - `job-location:` for locations (e.g., `job-location:orlando`).
    - `job-title:` for job titles (e.g., `job-title:owner,manager`).
    - `category:` for business categories (e.g., `category:plumbing`).
    - `description:` for business descriptions.
  - Use commas (`,`) to include multiple terms and semicolons (`;`) for multiple filters.
  - Example: `job-location:Toronto; job-title:marketing,sales`.

### **Dropdown Filters**
- Access additional options by clicking the filter icon at the top-right corner of the results.
- Examples:
  - Filter businesses missing specific social profiles.
  - Filter by rating thresholds (e.g., "Google Rating <= 4").
  - Combine with "exclude null values" to omit missing data.

### **Exclusion Filters**
- Prefix filters with `-` to exclude specific values.
  - Example: `-category:manufacturer`.

---

## **3. Searching for HTML in Websites**
- Enable "Search leads' websites for custom HTML" to find specific HTML snippets.
- Provide HTML/text to search for (e.g., "shopify").
- Separate multiple snippets using semicolons (`;`).
  - Example: `shopify;woocommerce;magento`.
- Add the "HTML Search" column to your leads report to view results.

---

## **4. Database Contacts**

### **Understanding Database Contacts**
- Generic business email addresses are gathered fresh from public sources (e.g., websites, social profiles).
- Individual employee emails are sourced through proprietary technology and third-party partners.
- **Recommendations**:
  - Use generic emails for small businesses (e.g., info@business.com).
  - Avoid relying on database contacts due to higher turnover and the potential for outdated information.

---

## **5. API Usage**

### **Overview**
- Use the LeadSwift REST API for tasks like campaign management, search queries, and exporting leads.
- All requests require an API key (`?api_key=[your_api_key]`).

### **API Endpoints**

#### **Campaigns**
- Get all campaigns:
  ```
  GET https://leadswift.com/api/campaigns?api_key=[api_key]
  ```
- Create a campaign:
  ```
  POST https://leadswift.com/api/campaigns?api_key=[api_key]
  Params: title, description
  ```

#### **Searches**
- Submit a search:
  ```
  POST https://leadswift.com/api/searches?api_key=[api_key]
  Params: campaign_id, keyword, location, search_html_code (optional)
  ```
- Get search results:
  ```
  POST https://leadswift.com/api/leads?api_key=[api_key]
  Params: search_id, start, length, filters, etc.
  ```

#### **Export Leads**
- Get total pages for export:
  ```
  POST https://leadswift.com/api/export_leads_count?api_key=[api_key]
  Params: search_id, export_csv_params
  ```
- Export leads by page:
  ```
  POST https://leadswift.com/api/export_leads?api_key=[api_key]
  Params: search_id, page, total_pages, export_csv_params
  ```

---

## **6. Best Practices**

- **Plan Searches**: Start with Google Maps to identify the best keywords and categories.
- **Combine Filters**: Use text-based and dropdown filters for precise results.
- **Focus on Generic Emails**: Target decision-makers with business emails for small businesses.
- **Monitor API Calls**: Capture network requests in the LeadSwift UI for export tasks.
- **Verify HTML Snippets**: Use the HTML search feature to identify specific technology footprints.

---

This manual ensures efficient use of LeadSwift's features and API for lead generation and outreach. Keep it handy for quick reference!

**Mike:** can I query lead swift for companies that have not claimed their google business profile ?

**GPT:** Identifying businesses that have not claimed their Google Business Profiles can be a valuable strategy for outreach, as these businesses may benefit from assistance in managing their online presence. While LeadSwift offers robust lead generation capabilities, it does not provide a direct filter to identify unclaimed Google Business Profiles. However, you can employ the following approach to approximate this information:

1. **Utilize LeadSwift's Filtering Options**:
   - Leverage LeadSwift's filtering features to narrow down your search results. For instance, you can filter businesses based on the absence of certain social profiles or those with ratings below a specific threshold. This can be done by clicking the filter icon at the top-right corner of the results page. citeturn0search6

2. **Manually Verify Business Profiles**:
   - After filtering, manually check the Google Business Profiles of the remaining businesses. Unclaimed profiles often display a prompt like "Own this business?" or "Claim this business." This indicates that the business has not yet claimed its profile. citeturn0search5

By combining LeadSwift's filtering capabilities with manual verification, you can effectively identify and target businesses that have not claimed their Google Business Profiles, offering them services to enhance their online visibility.

**Mike:** can you check for an absence of a google business profile ?

**GPT:** Yes, you can identify businesses that lack a Google Business Profile (GBP) using **LeadSwift's search and filtering tools**, but this requires indirect methods. LeadSwift does not explicitly provide a filter for businesses without a GBP. However, you can approximate this using the following techniques:

---

### **1. Use the "Search for Custom HTML" Feature**
- **Check for a Lack of GBP Information on Websites**:
  - You can search for common phrases found in unclaimed GBP profiles, such as:
    - `"Own this business?"`
    - `"Claim this business"`.
  - Enable the **"Search leads' websites for custom HTML"** option.
  - Add specific HTML snippets or keywords and perform the search.
  - Leads that show results with these phrases may have unclaimed or incomplete GBPs.

---

### **2. Filter for Missing Social Profiles**
- Use LeadSwift's **dropdown filters** to identify businesses without social profiles.
  - For example, you can filter for businesses without:
    - Facebook pages.
    - Google Reviews.
- While not definitive, businesses lacking these profiles are more likely to not have a GBP.

---

### **3. Manual Verification**
- Once you’ve identified potential businesses:
  - Perform a Google search for their business name or address.
  - Look for prompts like **"Own this business?"** in their Google profile, which indicates an unclaimed GBP.

---

### **4. Reach Out to LeadSwift Support**
If this is a core requirement for your business, consider contacting LeadSwift's support team. They may be able to assist you with advanced strategies or API usage to filter for businesses without GBPs.

---

### **Best Practices**
While indirect, combining these techniques can help you approximate businesses without a GBP, providing a valuable opportunity for outreach and services.

**Mike:** I want to put together marketing proposals using lead swift .  is lead swift an effective tool for this ?

**GPT:** Yes, **LeadSwift** can be an effective tool for creating marketing proposals. Its capabilities make it well-suited for gathering detailed business information, which can be used to craft tailored and compelling proposals for potential clients. Here’s how LeadSwift can support your marketing efforts:

---

### **Why LeadSwift Is Effective for Marketing Proposals**
1. **Detailed Lead Data**:
   - Collect contact information, social profiles, website URLs, and reviews from multiple sources like Google, Yelp, and Facebook.
   - Identify gaps in online presence (e.g., missing reviews, no Google Business Profile).

2. **Custom Searches**:
   - Tailor searches to specific industries or regions.
   - Use filters for granular data, such as businesses lacking a social presence or with low ratings.

3. **Competitor Insights**:
   - Search for specific HTML on websites (e.g., "Powered by XYZ Competitor") to identify businesses using competitor services.
   - Highlight how your offerings can outperform their current tools.

4. **API Integration**:
   - Automate lead generation and data retrieval with the LeadSwift API to save time and scale your efforts.

5. **Unclaimed Google Business Profiles**:
   - Identify businesses with incomplete or unclaimed GBPs to propose optimization services.

6. **Data Freshness**:
   - Unlike static databases, LeadSwift gathers data in real-time, ensuring you’re working with up-to-date business details.

---

### **Steps to Use LeadSwift for Marketing Proposals**
1. **Define Your Target Audience**:
   - Use LeadSwift’s search capabilities to focus on specific industries (e.g., restaurants, HVAC companies) and locations.

2. **Gather Data**:
   - Export lead data, including contact information, website details, and social presence.

3. **Identify Gaps and Opportunities**:
   - Look for businesses with:
     - Missing or outdated GBPs.
     - Poor reviews or lack of customer engagement.
     - No website or social media presence.
   - Highlight these as areas for improvement in your proposal.

4. **Craft Tailored Proposals**:
   - Include specific insights from LeadSwift data (e.g., "Your Google Business Profile is incomplete, which may limit your visibility in local searches").
   - Propose measurable solutions like increasing their reviews, optimizing their website, or creating a GBP.

5. **Track and Measure Results**:
   - Use LeadSwift to monitor changes in their online presence post-implementation (e.g., improved ratings, more reviews).

---

### **Advantages of Using LeadSwift for Proposals**
- **Data-Driven Insights**: Proposals backed by real data increase credibility.
- **Customization**: Tailor proposals to the specific needs of each business.
- **Scalability**: Automate lead generation and filtering to handle multiple clients simultaneously.
- **Cost-Effectiveness**: Identify high-value leads to maximize ROI.

---

### **Potential Limitations**
1. **Manual Review Required**:
   - While LeadSwift can identify opportunities, some manual review is necessary to ensure the insights are actionable.
   
2. **API or Advanced Filters**:
   - For complex data needs, you might require API integration or advanced filters, which could need technical expertise.

---

### **Conclusion**
LeadSwift is an excellent tool for creating effective marketing proposals, especially when targeting small to medium-sized businesses. By leveraging its features, you can identify gaps in a business’s online presence, offer tailored solutions, and demonstrate the value of your marketing services.

**Mike:** What is the most effective way to use lead swift?

**GPT:** The most effective way to use **LeadSwift** depends on your specific goals, such as lead generation, outreach, or building marketing proposals. Below is a structured guide to help you maximize its potential:

---

## **1. Define Your Goals**
Clearly define what you want to achieve:
- Generate leads for outreach campaigns.
- Build marketing proposals by identifying gaps in businesses' online presence.
- Target unclaimed or underperforming Google Business Profiles (GBPs).
- Research competitors or analyze specific industries.

---

## **2. Set Up Searches Strategically**
### **Use Targeted Keywords**
- Perform a manual Google Maps search first to identify effective keywords.
- Examples:
  - **General Keywords**: "HVAC companies," "Plumbing contractors."
  - **Specific Keywords**: "Solar panel installers New York."
- Input these keywords into LeadSwift for a focused search.

### **Leverage Location Targeting**
- Narrow your results by cities, zip codes, or specific areas.
- Use `job-location` prefixes to refine results further.

### **Apply Filters**
- **Text-Based Filters**:
  - Use prefixes for targeted results:
    - `job-title:ceo,owner,manager` to target decision-makers.
    - `category:restaurant,hvac,plumbing` to filter by industry.
  - Exclude irrelevant categories using `-` (e.g., `-category:wholesaler`).
- **Dropdown Filters**:
  - Filter businesses without social profiles, poor reviews, or low ratings.

---

## **3. Use HTML Search for Technology Insights**
- Enable the "Search leads' websites for custom HTML" option to identify technology stacks or competitor mentions.
- Examples:
  - Search for "shopify" to identify e-commerce businesses.
  - Search for "Powered by [competitor]" to find businesses using rival services.

---

## **4. Create Targeted Campaigns**
- Group leads into **campaigns** by industry, location, or specific needs.
- Use the **LeadSwift API** to automate campaign creation and management.

---

## **5. Identify Gaps and Opportunities**
### **Focus on Google Business Profiles (GBPs)**
- Identify businesses that:
  - Don’t have a GBP.
  - Have unclaimed profiles (look for "Own this business?").
  - Lack reviews or customer engagement.

### **Spot Missing Elements**
- Use dropdown filters to identify businesses without:
  - Websites.
  - Facebook or other social media profiles.
  - Adequate reviews.

---

## **6. Build Data-Driven Marketing Proposals**
- Highlight gaps in the business’s online presence:
  - Missing GBPs.
  - Poor reviews or lack of customer interaction.
  - Outdated websites or technology stacks.
- Offer solutions tailored to their needs, such as GBP optimization or social media management.

---

## **7. Automate Tasks with the API**
- Use the API for:
  - Automated searches and filtering.
  - Exporting leads and generating reports.
  - Managing campaigns programmatically.

---

## **8. Export and Organize Data**
- Export leads for offline analysis or to upload into your CRM.
- Use `export_csv_params` via the API for batch exports with advanced filters.

---

## **9. Customize Outreach Campaigns**
- Tailor your outreach emails or calls using the detailed data LeadSwift provides:
  - Mention specific gaps or opportunities (e.g., "We noticed your GBP is unclaimed").
  - Include personalized insights based on reviews, website performance, or social profiles.

---

## **10. Monitor and Iterate**
- Continuously monitor your campaigns to measure effectiveness.
- Refine your search and filter criteria based on past results.

---

## **Pro Tips for Effectiveness**
1. **Combine Filters for Precision**:
   - Use both text-based and dropdown filters to refine your results.
   - Example: `category:hvac; Google Rating <= 3`.

2. **Leverage Custom HTML Search**:
   - Identify businesses using outdated or competitor technology.

3. **Prioritize Fresh Data**:
   - Since LeadSwift gathers real-time data, focus on recent searches for the most accurate leads.

4. **Target Decision-Makers**:
   - Use `job-title:ceo,founder` to identify leads that can act on your proposals.

---

By following these steps and leveraging LeadSwift’s features, you can efficiently generate leads, identify business opportunities, and create high-impact marketing campaigns.

**Mike:** Elaborate on number 3.

**GPT:** ### **3. Use HTML Search for Technology Insights**

One of the most powerful features of LeadSwift is the ability to search for specific **HTML snippets** or **text elements** on a business's website. This feature allows you to uncover valuable insights about the technologies, platforms, or tools a business is using. Here's how you can effectively use it:

---

### **How It Works**
1. **Enable HTML Search**:
   - Check the box for "Search leads' websites for custom HTML" during your search setup in LeadSwift.
   
2. **Input HTML/Text Snippets**:
   - Provide the specific text or HTML code you want to search for. For example:
     - `"Powered by Shopify"` to find e-commerce businesses using Shopify.
     - `"Powered by WordPress"` to identify websites built on WordPress.
     - Competitor mentions like `"Powered by XYZ Competitor"` to spot businesses already using a competitor's services.

3. **Filter Results**:
   - Enable the **HTML Search** column in your leads report.
   - Use the **"Has Custom HTML"** checkbox in the filters to only show businesses that match the HTML snippets.

4. **View Numeric Matches**:
   - If you search multiple snippets (e.g., `shopify;woocommerce;magento`), the **HTML Search** column will display the numeric order of matched snippets (e.g., "2,3" for woocommerce and magento).

---

### **Examples of Insights You Can Gather**

#### **Technology Stacks**
- Search for snippets like:
  - `"shopify"`: Identify businesses using Shopify as their e-commerce platform.
  - `"woocommerce"`: Find small businesses running WooCommerce for their online stores.
  - `"google-analytics"`: Check for businesses tracking website metrics with Google Analytics.

#### **Competitor Research**
- Search for phrases like:
  - `"Powered by XYZ Competitor"` to identify businesses using a competitor’s platform.
  - `"XYZ Marketing"` for mentions of competitor agencies on a business's site.

#### **Outdated Technology**
- Find businesses with older website frameworks or technologies (e.g., `"Joomla"`, `"Drupal"`) to offer modernization services.

#### **Missing Elements**
- Search for:
  - `"meta name='robots'"` to check if businesses have proper SEO tags.
  - `"alt="` tags for missing image descriptions.

#### **E-Commerce Trends**
- Look for payment gateways or cart systems (e.g., `"stripe"`, `"paypal"`).
- Identify businesses ready for expansion or optimization based on their tech stack.

---

### **Practical Applications**

1. **Identify Leads for Specific Services**:
   - Example: If your agency specializes in upgrading websites, search for `"Joomla"` or `"Drupal"` to find leads that may need modern solutions like WordPress or Shopify.

2. **Target Competitor’s Customers**:
   - Example: If you offer a better alternative to Shopify, search for `"Powered by Shopify"` and tailor your pitch to show why your solution is superior.

3. **Focus on Unoptimized Websites**:
   - Example: Search for missing analytics tags (`"google-analytics"`) or SEO metadata to find businesses that need help with tracking or search optimization.

4. **Pitch Modernization**:
   - Example: Search for businesses using outdated platforms or plugins to offer website redesigns or migrations to newer technologies.

---

### **Tips for Effective HTML Search**

1. **Be Specific**:
   - Use precise snippets of code or text. Avoid broad terms to ensure you get actionable results.
   
2. **Combine HTML Search with Other Filters**:
   - Example: Filter by `"Google Rating <= 3"` and then use HTML Search to find businesses with outdated platforms.

3. **Save Frequently Used Snippets**:
   - Keep a list of common technology keywords or HTML patterns that align with your services.

4. **Test HTML Snippets Before Searching**:
   - Use browser developer tools (e.g., right-click > "Inspect" on a website) to verify the exact HTML structure before adding it to LeadSwift.

---

### **Benefits of HTML Search**

- **High Customization**: Allows you to search for virtually any technology or phrase relevant to your services.
- **Uncover Opportunities**: Helps identify businesses using competitors or outdated tools that you can upgrade.
- **Precise Targeting**: Combines well with location and industry filters for hyper-focused results.

By utilizing this feature, you can uncover deeper insights into a business's technology usage and craft proposals tailored to their specific needs.

**Mike:** Can I use the search for identity the presence of a Google business profile?

**GPT:** No, **LeadSwift does not have a direct feature** to identify the **presence or absence of a Google Business Profile (GBP)** automatically. However, you can use indirect methods and strategies within LeadSwift to approximate this information.

---

### **Methods to Use LeadSwift for Identifying Google Business Profiles**

#### **1. HTML Search for GBP Indicators**
While LeadSwift doesn't directly detect a GBP, you can use the **HTML Search feature** to look for elements that are often present on business websites linked to Google Business Profiles. 

- **HTML Snippets to Search**:
  - `"g.page/"` - URLs for GBP short links.
  - `"google.com/maps/place/"` - Common links pointing to a GBP location.
  - `"reviews.google.com"` - Links to Google reviews.

- **Steps**:
  1. Enable the **"Search leads' websites for custom HTML"** option during a search.
  2. Input relevant HTML snippets like those above.
  3. Filter the results using the **"Has Custom HTML"** checkbox to find businesses with these elements.

#### **2. Absence of GBP Indicators**
You can use the same **HTML Search feature** to filter out businesses with no GBP:
- Use negative filters for `"g.page/"` or `"google.com/maps/place/"` to approximate businesses that may not have a GBP.

---

#### **3. Social and Review Filters**
Businesses with Google Business Profiles often have:
- Google reviews linked to their profile.
- A visible rating on Google Maps.

You can use LeadSwift's **dropdown filters** to find:
- Businesses with no reviews.
- Businesses with low ratings (e.g., below 3 stars).

---

#### **4. Manual Verification After Filtering**
After narrowing down potential leads using the above methods:
1. Search for the business on Google to check if they have a GBP.
2. Look for signs of an **unclaimed profile**:
   - Phrases like **"Own this business?"** or **"Claim this business"**.

---

### **Practical Application**
You can create a two-phase approach:
1. Use LeadSwift filters and HTML Search to approximate businesses with or without GBP.
2. Manually verify the filtered leads by checking their Google presence.

---

### **Alternative Suggestion**
If identifying GBP presence is a core requirement, you may need a specialized tool like **BrightLocal**, **Yext**, or manual audits in combination with LeadSwift to accurately determine whether a GBP exists.

By combining LeadSwift's features with strategic manual checks, you can build a highly targeted list of businesses needing Google Business Profile services.

**Mike:** How should I use this searching the html of websites feature to make money ?

**GPT:** Using the HTML search feature in **LeadSwift** can be a powerful way to uncover profitable opportunities and offer targeted services to businesses. Here's a step-by-step guide on how to monetize this feature effectively:

---

### **1. Identify Outdated Technologies**
#### **Opportunity: Offer Website Modernization Services**
- **What to Search**:
  - `"Powered by Joomla"` or `"Powered by Drupal"`: Find websites using outdated CMS platforms.
  - `"meta name='generator'"` to detect old WordPress versions.
- **How to Monetize**:
  - Pitch website redesign or migration services to modern platforms like WordPress, Shopify, or Squarespace.
  - Highlight the SEO, security, and speed benefits of upgrading.

---

### **2. Target Competitors' Customers**
#### **Opportunity: Offer Better Alternatives**
- **What to Search**:
  - `"Powered by [Competitor Name]"`: Find businesses using competitor tools (e.g., Wix, Shopify, HubSpot).
  - `"Designed by [Agency Name]"`: Identify clients of a competitor agency.
- **How to Monetize**:
  - Create a compelling case for switching to your services by showcasing cost savings, improved features, or better ROI.
  - Offer free audits to demonstrate the weaknesses of their current setup.

---

### **3. Spot Missing Google Business Profile Links**
#### **Opportunity: Sell GBP Setup and Optimization Services**
- **What to Search**:
  - `"g.page/"` or `"google.com/maps/place/"`: Detect if a website links to its Google Business Profile.
- **How to Monetize**:
  - Target businesses without GBP links and pitch them the benefits of having one, such as increased local search visibility and customer trust.
  - Offer GBP creation, optimization, and review management services.

---

### **4. Find Businesses Lacking E-commerce Features**
#### **Opportunity: Sell E-commerce Setup Services**
- **What to Search**:
  - `"add-to-cart"`: Detect existing e-commerce setups.
  - `"shopify"` or `"woocommerce"`: Find websites using basic e-commerce platforms.
- **How to Monetize**:
  - Target businesses without e-commerce features or with limited setups and pitch the benefits of scaling their online sales.
  - Offer Shopify, WooCommerce, or other e-commerce platform integration.

---

### **5. Offer SEO and Analytics Services**
#### **Opportunity: Optimize Websites for Better Traffic and Conversions**
- **What to Search**:
  - `"google-analytics"` or `"gtag.js"`: Check for missing or outdated analytics.
  - `"meta name='description'"` or `"meta name='keywords'"`: Detect missing SEO metadata.
- **How to Monetize**:
  - Highlight how missing analytics or metadata hurts their online visibility.
  - Sell SEO audits, metadata implementation, or analytics setup services.

---

### **6. Detect Social Media Gaps**
#### **Opportunity: Sell Social Media Management**
- **What to Search**:
  - `"facebook.com"`, `"instagram.com"`, `"linkedin.com"`: Detect if websites link to their social profiles.
- **How to Monetize**:
  - Reach out to businesses missing social links and offer to set up or optimize their social profiles.
  - Bundle GBP management with social media marketing for a comprehensive package.

---

### **7. Discover Unsecured Websites**
#### **Opportunity: Sell SSL Certificates and Security Upgrades**
- **What to Search**:
  - `"http://"`: Find websites that are not secure (lacking SSL certificates).
- **How to Monetize**:
  - Offer SSL installation services.
  - Pitch security audits and upgrades for outdated or unprotected websites.

---

### **8. Track Competitors’ Clients**
#### **Opportunity: Target Clients of Rival Agencies**
- **What to Search**:
  - `"Designed by [Competitor Name]"` or `"Hosted by [Competitor Name]"`.
- **How to Monetize**:
  - Showcase your services as a better or more cost-effective alternative.
  - Offer free performance audits to reveal gaps in their current provider's offerings.

---

### **9. Create Niche Marketing Campaigns**
#### **Opportunity: Sell Tailored Marketing Services**
- **What to Search**:
  - `"Powered by Shopify"` for e-commerce businesses.
  - `"hvac,plumbing,heating"` for specific industries.
- **How to Monetize**:
  - Craft industry-specific marketing campaigns, such as local SEO, PPC, or content marketing.
  - Use industry data to demonstrate your understanding of their unique needs.

---

### **10. Combine HTML Search with Manual Outreach**
- Use the insights from HTML searches to create highly personalized outreach emails or proposals.
- Highlight the specific gaps or opportunities you identified:
  - Example: "I noticed your website lacks a secure SSL certificate. This could harm customer trust. I’d love to help you upgrade."

---

### **Key Benefits of This Strategy**
1. **Precision Targeting**:
   - HTML search allows you to focus on businesses with specific needs, increasing conversion rates.
2. **Scalability**:
   - Automate searches with LeadSwift’s API and scale your outreach efforts.
3. **High ROI**:
   - Targeting specific gaps ensures your services are relevant and valuable.

---

### **Best Practices for Monetization**
1. **Leverage Data for Personalization**:
   - Use the exact insights from the HTML search in your outreach to show value immediately.
2. **Bundle Services**:
   - Combine offerings like GBP setup, website upgrades, and SEO for a comprehensive solution.
3. **Track Results**:
   - Use LeadSwift’s tools to monitor the impact of your services (e.g., increased traffic or better GBP visibility).

By leveraging the HTML search feature effectively, you can uncover hidden opportunities and offer high-value services that address specific business needs, ensuring a steady revenue stream.

**Mike:** List additional HTML tags identifiable in website

**GPT:** Here’s a list of **additional HTML tags and elements** you can search for using LeadSwift's HTML search feature. These tags can help identify specific website features, technologies, and configurations, allowing you to uncover opportunities for targeted outreach or services.

---

### **1. Website Analytics and Tracking**
- **Google Analytics**:
  - `<script src="https://www.googletagmanager.com/gtag/js">`
  - `"UA-"` (old Google Analytics tracking codes)
  - `"G-"` (Google Analytics 4 tracking codes)
- **Facebook Pixel**:
  - `<script src="https://connect.facebook.net">`
- **Hotjar** (Heatmaps):
  - `"static.hotjar.com/c/hotjar-"`

---

### **2. Content Management Systems (CMS)**
- **WordPress**:
  - `<meta name="generator" content="WordPress">`
  - `"wp-content/"`
- **Shopify**:
  - `<meta name="generator" content="Shopify">`
  - `"cdn.shopify.com"`
- **Wix**:
  - `"wix.com"`
  - `"wixstatic.com"`
- **Squarespace**:
  - `"squarespace.com"`
- **Joomla**:
  - `<meta name="generator" content="Joomla">`
- **Drupal**:
  - `<meta name="generator" content="Drupal">`

---

### **3. E-Commerce Platforms**
- **WooCommerce**:
  - `"woocommerce_cart_hash"`
  - `"woocommerce_items_in_cart"`
- **Magento**:
  - `"Mage.Cookies"`
- **BigCommerce**:
  - `"cdn.bcappassets.com"`
- **PrestaShop**:
  - `<meta name="generator" content="PrestaShop">`

---

### **4. Security and HTTPS**
- **SSL Certificate**:
  - `"https://"`
  - `<meta http-equiv="Content-Security-Policy">`
- **Missing SSL**:
  - `"http://"`

---

### **5. Social Media Integration**
- **Facebook**:
  - `"facebook.com/"`
- **Twitter**:
  - `"twitter.com/"`
- **LinkedIn**:
  - `"linkedin.com/"`
- **Instagram**:
  - `"instagram.com/"`
- **YouTube**:
  - `"youtube.com/"`
- **TikTok**:
  - `"tiktok.com/"`

---

### **6. SEO Tags**
- **Meta Description**:
  - `<meta name="description" content="...">`
- **Keywords**:
  - `<meta name="keywords" content="...">`
- **Title Tag**:
  - `<title>...</title>`
- **H1 Tag**:
  - `<h1>...</h1>`

---

### **7. Structured Data (Schema Markup)**
- **JSON-LD**:
  - `<script type="application/ld+json">`
- **Microdata**:
  - `<div itemscope itemtype="http://schema.org/LocalBusiness">`

---

### **8. Fonts and Design**
- **Google Fonts**:
  - `<link href="https://fonts.googleapis.com">`
- **FontAwesome** (Icons):
  - `<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/">`

---

### **9. Frameworks and Libraries**
- **Bootstrap**:
  - `"bootstrap.min.css"`
- **jQuery**:
  - `<script src="https://code.jquery.com/jquery-">`
- **React**:
  - `"ReactDOM.render"`
- **Vue.js**:
  - `"vue.min.js"`

---

### **10. Advertising and Monetization**
- **Google AdSense**:
  - `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js">`
- **Affiliate Links**:
  - `"amazon-adsystem.com"`

---

### **11. Missing or Broken Features**
- **Broken Links**:
  - Search for `404` or `"Page Not Found"`.
- **Empty Alt Tags**:
  - `<img alt="">`
- **Missing Favicon**:
  - Search for missing `<link rel="icon" href="...">`.

---

### **12. Email Capture and Forms**
- **Contact Forms**:
  - `<form action="contact.php">`
- **Mailchimp Integration**:
  - `"list-manage.com"`

---

### **13. Business Information**
- **Phone Numbers**:
  - `<a href="tel:">`
- **Email Links**:
  - `<a href="mailto:">`
- **Business Hours**:
  - `<meta property="openingHours" content="...">`

---

### **14. Accessibility**
- **Alt Tags for Images**:
  - `<img alt="...">`
- **ARIA Roles**:
  - `<div role="...">`
- **Keyboard Navigation**:
  - `<a tabindex="...">`

---

### **15. Missing Elements**
- **Missing Analytics**:
  - Absence of `"google-analytics"`, `"facebook.net"`, etc.
- **Missing Social Links**:
  - No `<a href>` links to popular social media platforms.
- **Missing Security Tags**:
  - Absence of `<meta http-equiv="Content-Security-Policy">`.

---

### **How to Use This List**
1. **Tailor Searches**: Use these tags to create custom HTML queries in LeadSwift for specific insights.
2. **Identify Gaps**: Look for missing or outdated elements to pitch upgrades or fixes.
3. **Target Industries**: Focus on specific technologies or platforms relevant to the industries you serve.
4. **Bundle Services**: Offer multiple solutions based on the gaps you identify (e.g., SSL installation + SEO + social media links).

By searching for these tags and elements, you can gain valuable insights about a business's website and identify opportunities to offer targeted, high-value services.
