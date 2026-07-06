---
title: "FB ad library"
date: 2023-06-13
cluster: "Misc / Uncategorized"
messages: 6
source: chatgpt-export conversations.json (FULL transcript)
---

# FB ad library

> 6 messages · 2023-06-13 · cluster: Misc / Uncategorized

**Semantic neighbors:** [[Flask app enhances text generation.]] · [[call openings 3-10]] · [[Excel Data Management.]] · [[CapCut]]

## Transcript

**Mike:** optimize :  I want to find info on facebook ad spend.  I want to identify newly created ads that are spending in excess of $10,000 a month.  I want to find the products and services being promoted so I can potentially mimic them.

**GPT:** Sure, I can help you with that. However, please note that due to privacy policies and regulations, specific ad spend data for individual companies or ads on platforms like Facebook is not publicly available. 

That being said, there are a few strategies you can use to gather information about successful ads and the products they promote:

1. **Facebook Ad Library**: This is a transparency tool from Facebook where you can search for ads

**Mike:** optimize this prompt p :  I want to find info on facebook ad spend.  I want to identify newly created ads that are spending in excess of $10,000 a month.  I want to find the products and services being promoted so I can potentially mimic them.

**GPT:** Sure, I can guide you on how to gather insights about high-spending ads on Facebook and the products or services they promote. However, it's important to note that due to privacy policies and regulations, specific ad spend data for individual companies or ads on platforms like Facebook is not publicly available. 

Here are some strategies you can use:

1. **Facebook Ad Library**: This is a transparency tool from Facebook where you can search for ads across Facebook apps and services. You can see information like the range of money spent on the ad and its reach. However, it doesn't provide exact figures.

2. **Facebook Page Transparency Section**: On every Facebook page, there's a section called "Page Transparency" where you can see if the page is currently running ads. This can give you an idea of the active campaigns of the page.

3. **Third-party Tools**: There are several third-party tools that provide insights into Facebook ad campaigns. Some of these tools include AdEspresso, SocialPeta, and PowerAdSpy. They can provide information about the ad creative, duration, engagement, and sometimes even the estimated budget.

4. **Industry Reports and Blogs**: Many marketing blogs and companies release reports on ad spend in various industries. These can give you a general idea of how much businesses are spending on Facebook ads.

5. **Competitor Analysis**: Look at the ads of your competitors or businesses in your industry. This can give you an idea of what products and services they are promoting and how they are structuring their ads.

Remember, while it's useful to learn from successful ads, it's also important to understand your unique business needs and audience. What works for one business might not work for another. Always test different strategies and measure their success to find what works best for you.

**Mike:** help me write a python script to access the Facebook API.  I want to make daily requests to the API to get gather insights about high-spending ads and the products or services they promote.

**GPT:** Sure, I can help you get started with a Python script to access the Facebook API. However, please note that due to privacy policies and regulations, Facebook does not provide specific ad spend data for individual companies or ads. You can, however, use the Facebook Marketing API to gather insights about your own ad campaigns.

Here's a basic example of how you might use the Facebook Marketing API with Python:

```python
from facebook_business.api import FacebookAdsApi

# Initialize the API with your access token, ad account id, and app secret
my_app_id = 'your-app-id'
my_app_secret = 'your-app-secret'
my_access_token = 'your-access-token'
FacebookAdsApi.init(my_app_id, my_app_secret, my_access_token)

from facebook_business.adobjects.adaccount import AdAccount
from facebook_business.adobjects.adsinsights import AdsInsights
from facebook_business.adobjects.adreportrun import AdReportRun
from facebook_business.api import FacebookAdsApi

# Replace 'act_<AD_ACCOUNT_ID>' with your Ad Account ID
my_account = AdAccount('act_<AD_ACCOUNT_ID>')
fields = [
    AdsInsights.Field.campaign_name,
    AdsInsights.Field.adset_name,
    AdsInsights.Field.ad_name,
    AdsInsights.Field.spend,
    AdsInsights.Field.impressions,
    AdsInsights.Field.clicks,
]
params = {
    'level': 'ad',
    'date_range': {'since':'2023-06-01','until':'2023-06-30'},
}
async_report = my_account.get_insights(
    fields=fields,
    params=params,
    is_async=True,
)
async_report.api_get()
```

This script will get insights for your ad account, including the campaign name, ad set name, ad name, spend, impressions, and clicks for the specified date range.

Remember to replace `'act_<AD_ACCOUNT_ID>'` with your actual Ad Account ID, and `'your-app-id'`, `'your-app-secret'`, and `'your-access-token'` with your actual app ID, app secret, and access token, respectively.

Please note that you need to have the `facebook_business` Python SDK installed. You can install it using pip:

```bash
pip install facebook_business
```

Also, keep in mind that you need to have the necessary permissions to access the Facebook Marketing API, and you need to comply with Facebook's terms of use.
