---
title: "FB Advanced Matching Explained"
date: 2026-06-29
cluster: "Writing / Research / General"
messages: 135
source: chatgpt-export conversations.json (FULL transcript)
---

# FB Advanced Matching Explained

> 135 messages · 2026-06-29 · cluster: Writing / Research / General

**Semantic neighbors:** [[Graph Summary: DALL-E Misunderstanding]] · [[BOOK]] · [[Abstract Face Art Design]] · [[The Minority Rule]]

## Transcript

**Mike:** I am studying for facebook blueprint and want you to act like a tutor .  First topic is advanced matching.  How does this work ?

**GPT:** Advanced matching allows advertisers to match their customer data, such as email addresses, with Facebook user accounts. This can help increase the effectiveness of targeted advertising by allowing advertisers to reach specific individuals or groups of individuals who have previously expressed interest in their products or services. Advanced matching works by securely sending a hashed version of the advertiser's customer data to Facebook, which then matches the data against its own user accounts. If a match is found, the advertiser can target ads to that individual or group of individuals on the Facebook platform.

**Mike:** What if a match is not found ?

**GPT:** If a match is not found, it means that the customer data that the advertiser sent to Facebook does not correspond to any user accounts on the platform. This could be because the individual is not a Facebook user, or because the information that the advertiser has is incorrect or outdated. 

In this case, the advertiser will not be able to target ads to that specific individual or group of individuals on Facebook. However, they can still use other targeting methods, such as demographic or interest-based targeting, to reach a broader audience that may be more likely to be interested in their products or services.

**Mike:** How is the hashed file uploaded?

**GPT:** The hashed file can be uploaded through the Facebook Ads API or the Facebook Business Manager. The Ads API allows developers to access and manage advertising data programmatically, while the Business Manager is a tool for managing advertising accounts, assets, and permissions for an organization.

To use advanced matching, advertisers need to pass Facebook a hashed version of their customer data, such as email addresses, using one of the approved hash functions (SHA-256, SHA-384, or SHA-512). Once the hashed file is created, it can be uploaded to Facebook via the Ads API or Business Manager. 

It is important to note that, the advertiser must also pass along the salt value that they used while creating the hash so Facebook can match the information correctly.

Also, it is important to ensure that the hashed data is encrypted while being transmitted to Facebook and also stored securely to protect users' privacy.

**Mike:** Will facebook pixel work without cookies ?

**GPT:** Facebook Pixel is a piece of code that can be placed on a website to track user behavior and collect data for targeted advertising. The pixel uses cookies to track user interactions and collect data, such as website visits, page views, and conversion events. 

If a user has cookies disabled in their browser, the Facebook Pixel will not be able to track their behavior or collect data on their website interactions. This means that the advertiser will not be able to use the data collected by the pixel to target ads to that user.

However, Facebook has introduced a new feature called "server-side tagging" which allows advertisers to track user behavior and collect data for targeted advertising, even if the user has cookies disabled. This feature uses a server-side API to send events data directly to Facebook, bypassing the need for a cookie. This allows advertisers to continue collecting data and running targeted advertising campaigns, even if a user has cookies disabled.

**Mike:** How do I use the server side api

**GPT:** Using the server-side API to track user behavior and collect data for targeted advertising involves a few steps:

1. Set up a Facebook App: You will need to create a Facebook App in the Facebook Developer Dashboard and configure it to use the Marketing API.

2. Create a Facebook Access Token: After setting up the app, you will need to create an access token that will be used to authenticate your server-side requests to the Marketing API.

3. Collect user data: Once you have the access token, you can use the server-side API to collect data on user interactions with your website, such as page views and conversion events. This data will be sent to Facebook in the form of events.

4. Send events to Facebook: You can use the server-side API to send events data to Facebook, which can be used for targeted advertising. You can also use the API to retrieve insights and analytics about the performance of your campaigns.

5. Implementing the API: You can use any server-side programming language that supports HTTP requests to call the server-side API. Facebook provides official libraries for several popular languages like Python, Node.js, Java, PHP, etc.

6. Test and Debug: Once you've implemented the server-side API, you should test it to make sure it's working correctly and debug any issues that you might encounter. Facebook provides tools like the Event Debugger, which can be used to test and debug server-side events.

It is important to note that, you will also need to comply with Facebook's data policy, which includes obtaining proper user consent for data collection and sharing, and ensuring that the data is used in compliance with all applicable laws and regulations.

**Mike:** How can facebook stories be monetized

**GPT:** There are a few ways that Facebook Stories can be monetized:

1. Sponsored Stories: Brands can pay to have their content featured in Stories, allowing them to reach a larger audience and increase brand awareness. Sponsored Stories can include text, images, and videos, and can be targeted to specific demographics or interests.

2. Product tags: Brands can use Facebook's product tagging feature to allow users to purchase products directly from Stories. This allows brands to drive sales and generate revenue directly from their Stories content.

3. Direct Response: Brands can use Stories to drive direct response, such as sales, app installs, lead generation, and more. By including a call-to-action in the story, brands can drive users to their website or landing page to complete a desired action.

4. Influencer Marketing: Brands can partner with influencers to create sponsored Stories that feature their products or services. This allows brands to leverage the influencer's audience and reach a larger audience.

5. In-Story Polls: Brands can use in-story polls to collect information and feedback from users. This data can be used to improve products and services, and can also be used to generate revenue through targeted advertising.

6. Branded filters and lenses: Brands can create custom AR filters and lenses that can be used by users in their stories. These filters and lenses can be branded, which allows brands to reach a large audience and increase brand awareness.

It is important to note that, Facebook has strict guidelines for monetizing stories, which include making sure that the content is clearly labeled as sponsored or promotional, and that it meets the company's community standards. Advertisers should also ensure that they are following all laws and regulations related to advertising and data collection.

**Mike:** How is the audience selected for stories?

**GPT:** The audience for Facebook Stories can be selected using a variety of targeting options:

1. Demographic targeting: Advertisers can target their Stories to specific age ranges, genders, languages, and locations.

2. Interest targeting: Advertisers can target their Stories to users who have expressed an interest in specific topics, such as sports, technology, or travel.

3. Behavioral targeting: Advertisers can target their Stories to users who have demonstrated certain behaviors, such as making a purchase, visiting a website, or engaging with a specific type of content.

4. Custom Audience: Advertisers can target their Stories to a specific list of users who have previously interacted with their business, such as email subscribers or website visitors.

5. Lookalike Audience: Advertisers can create a new audience that is similar to an existing Custom Audience. This allows advertisers to reach new people who are likely to be interested in their products or services.

6. Location targeting: Advertisers can target their Stories to users who are in a specific location, such as a city, region, or country.

It is important to note that, Facebook also uses its own data, such as the pages users like, groups they joined, or events they attend to help target the audience for stories. Also, the audience for stories can be refined over time based on the performance of the story and the engagement it receives.

**Mike:** What us audience overlap

**GPT:** Audience overlap refers to the percentage of people who are in more than one of your audiences. This feature allows you to see how much of your target audience overlaps with other audiences you are targeting, or previously targeted. This can be useful for identifying and eliminating redundant audiences, and also for understanding how your different audiences intersect.

For example, you might be running a campaign targeting two different audiences, one for Women's clothing and another for Men's clothing. Using the Audience Overlap feature, you can see how much of your target audience for Women's clothing also falls into the Men's clothing audience, and make adjustments accordingly.

Audience overlap feature can be found in Facebook Ads Manager. It is located under the Audiences tab. You can select two or more audiences, and the feature will show you the percentage of people in the selected audiences that also belong to other selected audiences.

Knowing your audience overlap can also help you to avoid over-saturating an audience with too many ads, which can lead to ad fatigue and a decrease in performance. It also allows you to identify new potential target audiences and make more informed decisions about your ad campaigns.

**Mike:** What is a 1% lookalike ?

**GPT:** A 1% lookalike audience is a type of audience targeting offered by Facebook that allows advertisers to reach new people who are similar to their existing customers or website visitors. The audience is created by analyzing data from a seed audience, such as a Custom Audience, and identifying people who have similar characteristics.

A 1% lookalike audience is created by identifying the top 1% of people who are most similar to the seed audience, in terms of demographics, interests, behaviors, and other factors. This allows advertisers to reach a new group of people who are likely to be interested in their products or services.

When creating a 1% lookalike audience, Facebook uses its own data, such as the pages users like, groups they joined, or events they attend, to identify people who are similar to the seed audience. This helps to ensure that the new audience is highly relevant and has a high likelihood of engaging with the advertiser's content.

It is important to note that, the 1% lookalike audience is a starting point, and the advertiser can use the Audience Overlap feature to fine-tune the audience and eliminate any overlaps. Also, the advertiser can create a lookalike audience with different percentages than 1% if they desire to have a smaller or larger audience.

**Mike:** What is seed audience?

**GPT:** A seed audience is a group of people that is used as the basis for creating a new audience in Facebook Ads. A seed audience is typically made up of people who have already interacted with a business in some way, such as website visitors, email subscribers, or existing customers.

There are several ways to create a seed audience, including:

1. Custom Audience: A Custom Audience is a group of people who have already interacted with a business, such as website visitors, email subscribers, or existing customers. 

2. Engagement Audience: An Engagement Audience is a group of people who have engaged with a business's Facebook page, such as by liking the page, commenting on a post, or sharing a post.

3. Video Audience: A Video Audience is a group of people who have watched a video on Facebook, Instagram or on the Audience Network.

4. Event Audience: An Event Audience is a group of people who have responded to an event on Facebook, such as indicating that they are going or interested.

5. Lead form Audience: A Lead form Audience is a group of people who have completed a lead form on Facebook, Instagram or the Audience Network.

Once a seed audience is created, it can be used to create a lookalike audience, which is a new audience that is similar to the seed audience in terms of demographics, interests, and behaviors. This allows businesses to reach new people who are likely to be interested in their products or services.

It is important to note that, the larger the seed audience, the more accurate the lookalike audience will be. The seed audience should also be as relevant as possible to the desired target audience to increase the chances of the lookalike audience being relevant too.

**Mike:** Why would audience network be chosen for a campaign

**GPT:** The Audience Network is a way for businesses to expand the reach of their Facebook ads beyond the Facebook platform to other mobile apps and websites. It allows businesses to show their ads to a larger audience, and can be a useful tool for reaching new customers and increasing brand awareness.

There are several reasons why a business might choose to use the Audience Network for a campaign:

1. Larger reach: The Audience Network allows businesses to reach a larger audience than they would be able to on Facebook alone, which can help to increase brand awareness and reach new customers.

2. Access to new demographics: The Audience Network allows businesses to reach users who may not be active on Facebook, such as older users or users who prefer to use other apps or websites.

3. More ad formats: The Audience Network supports a wider range of ad formats than Facebook, including native ads, rewarded video, and in-stream video ads.

4. Greater control over ad placement: The Audience Network allows businesses to choose where their ads appear, such as specific apps or websites, giving them more control over their ad placement.

5. Better targeting: The Audience Network uses the same targeting options as Facebook, such as demographic, interest, and behavior targeting, to ensure that ads are shown to the right people.

6. Cost-effective:  The Audience Network often has a lower cost per impression (CPM) than Facebook, which can be beneficial for businesses with a limited budget.

It is worth noting that, The Audience

**GPT:** Network is a powerful tool that can help businesses to increase their reach and engagement, but it should be used in conjunction with other advertising strategies, such as Facebook ads and other forms of digital marketing, to achieve the best results.

**Mike:** How does meta determine who wins an auction?

**GPT:** In the context of Facebook ads, "meta" refers to the information that is used to determine the winner of an auction. The meta information is used to evaluate ad bids, and it is based on factors such as an advertiser's campaign objectives, targeting, and ad creative.

When a user requests an ad, Facebook conducts an auction to determine which ad to show. The auction is based on the advertiser's bid, the ad's relevance to the user, and the ad's expected performance. 

The meta information that is used to determine the winner of an auction includes:

1. Bid: Advertisers set a bid for their ad, which is the maximum amount they are willing to pay for a click or a thousand impressions. The bid is one of the most important factors in determining the winner of an auction.

2. Ad relevance: Facebook uses a relevance score to determine how well an ad is likely to perform for a particular user. Ads with higher relevance scores are more likely to win auctions.

3. Ad quality: Facebook uses a quality score to determine how well an ad is likely to perform based on factors such as its creative, format, and landing page. Ads with higher quality scores are more likely to win auctions.

4. Ad delivery: Facebook uses a delivery score to determine how well an ad is likely to perform based on factors such as targeting, budget, and ad placements. Ads with higher delivery scores are more likely to win auctions.

5. Advertiser's campaign objectives: Advertisers can set campaign objectives such as website conversions, engagement, brand awareness, and more. Ads that align more with the campaign objective will have a higher chance of winning an auction.

All of these factors, together with other factors, are considered in determining the winner of the auction. Ultimately, the ad that is most likely to perform well for a particular user, while also being cost-effective for the advertiser, will be the one that is shown.

**Mike:** Write an email Subject line for a company that provides hyms to churches to sing along .

**GPT:** "Elevate your worship experience with our new hymn collection"

**Mike:** Write 3 variations

**GPT:** 1. "Enhance your church's singing with our updated hymn collection"
2. "Bring new life to your worship with our latest hymn selection"
3. "Experience the power of collective singing with our new hymn collection"

**Mike:** I have a few questions about taking a static image and creating links from it to a landing page

**GPT:** Sure, I'd be happy to help. What specifically would you like to know about creating links from a static image to a landing page?

**Mike:** How can this be accomplished

**GPT:** There are a few ways to create links from a static image to a landing page. Some of the most common methods include:

1. Using HTML and CSS: You can create a clickable image by using HTML and CSS. This involves wrapping the image in an anchor tag and then using CSS to style the image as a link. For example: 
```
<a href="http://www.example.com">
    <img src="image.jpg" alt="image">
</a>
```

2. Using image maps: An image map is a way to create clickable areas on an image. You can use HTML to create an image map and then use the "map" and "area" tags to define the clickable areas on the image. Each area can be linked to a different landing page.

3. Using JavaScript: You can use JavaScript to create a clickable image. This involves adding an event listener to the image that listens for a click event, and then redirects the user to the desired landing page.

4. Using graphic design software: Some graphic design software like Adobe Photoshop or Illustrator allow you to create a clickable area on an image. You can create a button or a link on the image and then export it as a HTML or an image map.

5. Using a website builder or a platform: Some website builders like Wix or Squarespace have a feature that allows you to create links on an image easily. You can drag and drop the image and then add a link on it. 

You should choose the method that is best suited for your needs and technical abilities.

Please let me know if you have any further questions.

**Mike:** Can it be done in Word press

**GPT:** Yes, it can be done in WordPress. 

1. Using HTML and CSS: You can create a clickable image by using HTML and CSS. This involves wrapping the image in an anchor tag and then using CSS to style the image as a link. For example: 
```
<a href="http://www.example.com">
    <img src="image.jpg" alt="image">
</a>
```
You can use the HTML editor available in the WordPress editor to add the code above

2. Using WordPress Plugins: There are several WordPress plugins available that can help you create clickable images. Some popular plugins include "Image Map Pro," "Simple Image Map," and "Image Map HotSpot." These plugins allow you to create an image map and then assign links to different areas of the image.

3. Using WordPress widgets: Some WordPress widgets like "Image Widget" allow you to add an image and a link to it in the sidebar or footer of your website. 

4. Using WordPress blocks : WordPress has its own built in blocks that allow you to add a image and link it to a landing page.

Please note that some of these options require a certain level of technical knowledge and ability to navigate the WordPress platform.

Please let me know if you have any further questions.

**Mike:** What are creative strategies for facebook ads that are practical for business owners

**GPT:** There are several creative strategies for Facebook ads that can be practical for business owners. Here are a few:

1. Use customer testimonials: Testimonials from satisfied customers can be powerful in building trust and credibility with potential customers. You can use customer testimonials in your ad copy, images, and videos to showcase the positive experiences of others.

2. Use storytelling: Storytelling can be a great way to connect with your audience on an emotional level. You can use storytelling in your ad copy, images, and videos to create a narrative that resonates with your target audience.

3. Use humor: Humor can be a great way to grab the attention of your target audience. You can use humor in your ad copy, images, and videos to make your ads more engaging and memorable.

4. Use scarcity and urgency: Scarcity and urgency are effective in motivating people to take action. You can use scarcity and urgency in your ad copy, images, and videos to create a sense of urgency that motivates people to act now.

5. Use personalization: Personalization can be a powerful way to connect with your target audience. You can use personalization in your ad copy, images, and videos to create a sense of connection with your target audience.

6. Use dynamic creative optimization: dynamic creative optimization is the ability of the ad system to show different ads to different people based on their browsing history, demographic information, or other data points. It increases the chances of showing the right ad to the right person.

7. Use retargeting : Retargeting is a strategy where you show ads to people who have previously interacted with your website, app, or business. This increases the chances of converting a lead into a customer.

These are just a few examples of creative strategies that can be practical for business owners. It is important to test different strategies and see which ones work best for your specific business and audience.

**Mike:** Create a Facebook ad strategy for a tax accountant during tax season with the goal of signing up new clients

**GPT:** Here is a sample Facebook ad strategy for a tax accountant during tax season with the goal of signing up new clients:

1. Define your target audience: Identify your ideal clients, such as small business owners, independent contractors, or high-income individuals. Use Facebook's targeting options, such as demographics, interests, and behaviors, to reach this audience.

2. Use a clear and compelling headline: Your headline should clearly convey the value of your services and grab the attention of your target audience. For example, "Get Your Taxes Done Right - Sign Up for Our Tax Preparation Services Today!"

3. Use a clear call-to-action: Make it easy for people to take action by including a clear call-to-action in your ad. For example, "Sign Up Now" or "Book a Consultation."

4. Use a sense of urgency: Use language and imagery that creates a sense of urgency to motivate people to act now. For example, "Limited Time Offer - Get 15% off Your Tax Preparation Services"

5. Use customer testimonials: Use customer testimonials to build trust and credibility with potential clients. For example, "Don't just take our word for it, see what our satisfied clients have to say."

6. Use retargeting: Retarget people who have previously interacted with your website, app, or business. This increases the chances of converting a lead into a customer.

7. Monitor and optimize: Monitor the performance of your ads and make adjustments as needed. Test different ad copy, images, and targeting options to see what works best for your specific business and audience.

8. Use landing pages: Create a landing page on your website specifically designed for your Facebook Ad campaign. Make sure the page is designed to convert and has a clear call-to-action.

9. Use dynamic creative optimization: Use dynamic creative optimization to show different ads to different people based on their browsing history, demographic information, or other data points. This increases the chances of showing the right ad to the right person.

By following this strategy, you can effectively reach and convert new clients during tax season. It's important to remember that every business is different so you may need to adjust the strategy to suit your needs.

**Mike:** Using these steps, with a budget of $1500,  give me the details of a campaign using targeted ads

**GPT:** Here is a sample campaign using targeted ads with a budget of $1500:

1. Define your target audience: Use Facebook's targeting options to reach small business owners, independent contractors, or high-income individuals. For example, targeting people who are interested in "small business" or "tax preparation" and have an income over $75,000.

2. Set up the campaign: Create a new campaign in Facebook Ads Manager, set the campaign objective to "Conversions" and choose the "Sign Up" event as your conversion.

3. Create the ad: Create a single ad or multiple ads with clear and compelling headlines, a clear call-to-action, and sense of urgency. Also, use customer testimonials, retargeting, dynamic creative optimization as stated in the previous example.

4. Set the budget: Set a daily budget of $50, which will give you 30 days of advertising with a total budget of $1500.

5. Set the schedule: Schedule the campaign to run during tax season, typically from January to April.

6. Monitor and optimize: Monitor the performance of your ads on a regular basis and make adjustments as needed. Test different ad copy, images, and targeting options to see what works best for your specific business and audience.

7. Use landing pages: Create a landing page on your website specifically designed for your Facebook Ad campaign. Make sure the page is designed to convert and has a clear call-to-action.

By following this strategy, you can effectively reach and convert new clients during tax season while staying within your budget. It's important to monitor the campaign's performance and adjust as necessary to make the most out of your budget.

**Mike:** What bid strategy is most effective

**GPT:** The bid strategy that is most effective will depend on the specific goals and objectives of your campaign. Some common bid strategies that are used on Facebook include:

1. Cost-per-click (CPC) bidding: This strategy allows you to pay for each click on your ad. This is a good option if your goal is to drive website traffic or increase brand awareness.

2. Cost-per-impression (CPM) bidding: This strategy allows you to pay for each 1,000 impressions (views) of your ad. This is a good option if your goal is to increase brand awareness or reach a large audience.

3. Cost-per-action (CPA) bidding: This strategy allows you to pay for a specific action, such as a lead or a sale. This is a good option if your goal is to drive conversions or sales.

4. Optimized CPM (oCPM): This strategy allows Facebook's algorithm to optimize your bid to help you get the most out of your budget, by showing your ad to the people who are most likely to convert.

5. Value optimization : This strategy allows you to set a target return on ad spend (ROAS) and Facebook's algorithm optimizes your bid to help you reach that target.

It's important to note that bid strategies that optimize for conversions, like CPA and value optimization, will tend to be more effective for businesses that are looking to drive sales or leads. If your goal is to drive website traffic or increase brand awareness, CPC or CPM bidding may be more appropriate.

**Mike:** I meant for the previous question

**GPT:** I apologize for misunderstanding. In order to create a Facebook ad campaign using targeted ads with a budget of $1500, you can follow these steps:

1. Define your target audience: Identify the demographics, interests, behaviors, and location of your ideal client for a tax accountant.

2. Create ad copy and visuals: Create ad copy that speaks directly to your target audience and includes a clear call-to-action. Use images or videos that will grab their attention and make them want to learn more about your services.

3. Choose ad placements: Select the placements where you want your ads to appear, such as Facebook news feed, Instagram feed, and the right-hand column.

4. Set your budget and bid strategy: Set your budget to $1500 and choose a bid strategy that will optimize your ad delivery, such as CPA bidding or value optimization.

5. Launch your campaign and monitor performance: Launch your campaign and monitor its performance regularly. Use Facebook's analytics tools to track metrics such as click-through rate (CTR), conversion rate, and return on ad spend (ROAS).

6. Optimize your campaign: Optimize your campaign by making changes to your ad copy, visuals, targeting, and bid strategy based on your performance data.

It's also important to note that you should test different ads (ad copy, visuals, etc) to see which one performs the best and use that ad. Also, you should schedule your ads to be shown only during the tax season so you get the most out of your budget.

**Mike:** Where will the be positioned on the user's Facebook page?

**GPT:** Facebook ad placements determine where your ads will appear on the user's Facebook page. The most common ad placements include:

1. Facebook news feed: Your ad will appear in the main news feed of a user's Facebook homepage, where they see updates from friends and pages they follow.

2. Instagram feed: If you select this placement, your ad will appear in the main feed of a user's Instagram account.

3. Right-hand column: This placement shows your ad in the right-hand column of a user's desktop Facebook homepage and in the Stories section on mobile.

4. Stories: Your ad will appear in the Stories section of a user's Facebook or Instagram account.

5. Audience Network: This placement shows your ad on third-party apps and websites that are part of the Facebook Audience Network.

6. Marketplace: Your ad will appear in the Marketplace, the place where people can buy and sell items on Facebook.

You can choose one or multiple placements for your ad. It's recommended to test different placements to see which one performs the best for your business.

**Mike:** Where does the audience network display ads

**GPT:** The Facebook Audience Network (FAN) is a network of third-party apps and websites that display ads to users. When you choose the Audience Network placement for your Facebook ad campaign, your ad will appear on these apps and websites in various formats such as banner ads, interstitial ads, native ads, and rewarded video ads. These placements can include, but not limited to:
- Mobile apps (games, weather, news, etc)
- Mobile websites
- Instant articles
- In-stream video (pre-roll, mid-roll, post-roll)
- In-article

By choosing the Audience Network placement, you can reach users beyond Facebook and Instagram, and expand your reach to a wider audience. It's important to note that ads on Audience Network will be subject to the same policies and guidelines as ads on Facebook and Instagram.

**Mike:** What is the attribution window

**GPT:** The attribution window is the time frame during which conversions are attributed to a specific advertising touchpoint. It refers to the amount of time that elapses between when a user first engages with an ad and when they take the desired action, such as making a purchase or signing up for a service.

The length of the attribution window varies based on the advertising platform, but it's typically set to a specific number of days, such as 1 day, 7 days, 14 days, or 28 days.

For example, if a user sees an ad on Monday and makes a purchase on Wednesday, and the attribution window is set to 7 days, the conversion would be attributed to the ad they saw on Monday.

It's important to choose an attribution window that accurately reflects the time it takes for a user to take the desired action after seeing an ad. This information can help you determine which advertising campaigns and channels are driving the most conversions and making the biggest impact on your business.

**Mike:** What if it was set to 1 day in your example ?

**GPT:** If the attribution window was set to 1 day in the previous example, then the conversion would not be attributed to the ad seen on Monday. Instead, the conversion would only be attributed to the last touchpoint before the conversion, which in this case would be Wednesday. This means that the conversion would not be attributed to any ad seen before Wednesday and would not be considered in evaluating the effectiveness of the Monday ad.

Choosing a 1-day attribution window provides a short-term view of the impact of advertising on conversions and is best suited for campaigns where users take action quickly after seeing an ad. On the other hand, a longer attribution window, such as 7 or 28 days, provides a more comprehensive view of the impact of advertising on conversions and is best suited for campaigns where users take longer to take action after seeing an ad.

It's important to choose an attribution window that accurately reflects the user behavior for your specific advertising campaigns, as this can have a significant impact on the measurement and optimization of your advertising efforts.

**Mike:** What should the window be for a debt consolidation business

**GPT:** The attribution window for a debt consolidation business can vary depending on the specific goals and objectives of the advertising campaign. 

For a debt consolidation business, it's important to consider the typical time frame it takes for a user to take action after seeing an ad. If users typically take several days or weeks to research and make a decision about debt consolidation, then a longer attribution window, such as 7 or 28 days, would be more appropriate. This would give credit to the ad exposure that led to the conversion, even if the conversion happened several days after the ad was seen.

On the other hand, if users take action quickly after seeing an ad, then a shorter attribution window, such as 1 or 3 days, would be more appropriate. This would give credit to the ad exposure that had the most immediate impact on the conversion.

In general, it's recommended to experiment with different attribution windows and monitor the results to determine the best window for your debt consolidation business. It's also important to consider the specific goals and objectives of each advertising campaign, as this can impact the attribution window that is most appropriate.

**Mike:** Mt goal with the debt consolidation business is to drive traffic to a landing page with the goal if filling out an application for credit worthiness and loan approval

**GPT:** In this case, a 7-day attribution window would likely be the most effective for your debt consolidation business. A 7-day window gives enough time for users to research and make a decision about debt consolidation, but also provides a relatively short-term view of the impact of advertising on the goal of filling out an application for creditworthiness and loan approval.

With a budget of $1500, you could consider the following steps for your Facebook ad campaign:

1. Define your target audience: Start by identifying the demographic and psychographic characteristics of your ideal customer. Consider factors such as age, income, education, and interests that are relevant to debt consolidation.

2. Create compelling ad content: Use eye-catching visuals and persuasive copy to grab the attention of your target audience. Make sure your ad content accurately reflects the benefits of debt consolidation and the value that your business offers.

3. Choose an appropriate placement: Consider placing your ads on Facebook, Instagram, and the Audience Network. This will help reach a wider audience and maximize your chances of success.

4. Monitor and adjust: Continuously monitor the performance of your ad campaign and make adjustments as needed. Consider factors such as cost per click, conversion rate, and return on ad spend when optimizing your campaign.

5. Test and optimize: Try different ad variations, such as different images, copy, and calls-to-action, to see what resonates best with your target audience. Regularly test and optimize your ad campaign to drive the best results.

By following these steps, you can effectively use targeted ads to drive traffic to your landing page, increase the number of applications for creditworthiness and loan approval, and grow your debt consolidation business.

**Mike:** We picked a targeted look alike audience with the businesses customer info .  We are not getting enough traffic

**GPT:** If you're not getting enough traffic to your landing page with your current Facebook ad campaign, there are several steps you can take to improve your results:

1. Re-evaluate your target audience: Make sure your lookalike audience is accurately based on your current customer information. Consider expanding the size of your audience if necessary or refining it to better target your ideal customers.

2. Review your ad content: Ensure that your ad copy and visuals are compelling and effectively communicate the benefits of debt consolidation and the value that your business offers. Consider testing different ad variations to see what resonates best with your target audience.

3. Optimize your placement: Make sure your ads are placed in the most effective locations, such as Facebook, Instagram, and the Audience Network. Consider experimenting with different placements to see what works best for your business.

4. Monitor and adjust your bid: Regularly review your bid amount and adjust it if necessary. A higher bid can increase the visibility of your ad, but it can also increase your cost per click. Find a balance that works for your business and budget.

5. Test and optimize: Continuously test and optimize your ad campaign to drive the best results. Try different ad variations, such as different images, copy, and calls-to-action, to see what resonates best with your target audience.

By taking these steps and continually monitoring and adjusting your campaign, you can increase the visibility of your ads and drive more traffic to your landing page, ultimately leading to more applications for creditworthiness and loan approval.

**Mike:** What is the formula for determining who wins an auction?

**GPT:** The formula for determining the winner of a Facebook ad auction is based on a combination of several factors, including the advertiser's bid, ad relevance, and user engagement. The exact formula used by Facebook to determine the winner of an auction is not publicly disclosed, as it is considered a trade secret. However, here's a general overview of how the auction process works:

1. Bid: Advertisers set a maximum bid for each auction, which is the highest amount they are willing to pay for a click, impression, or action. The bid is one of the most important factors in determining the winner of the auction.

2. Ad relevance: The relevance of an ad to its target audience is also taken into consideration during the auction process. Facebook uses a proprietary relevance score to measure the relevance of each ad to its target audience, based on factors such as the ad's engagement history, the target audience, and the ad's overall performance.

3. User engagement: User engagement is also considered during the auction process, as Facebook wants to deliver ads that are relevant and engaging to its users. Ads with higher levels of engagement, such as those with high click-through rates or conversions, will generally perform better in the auction than ads with low engagement.

These three factors are used to determine the winner of an auction in real-time, with the advertiser with the highest bid and the highest relevance and engagement scores winning the auction. The winner's ad is then displayed to the target audience.

**Mike:** Which of the factors is most important?

**GPT:** All three factors are important in determining the winner of a Facebook ad auction. However, bid amount is considered to be the most important factor, as it directly affects the cost of the ad and the advertiser's ability to reach their target audience. A higher bid amount increases the chances of winning the auction, as it signals to Facebook that the advertiser is willing to pay more for each impression, click, or action.

That being said, a higher bid amount alone may not guarantee a win in the auction. Ad relevance and user engagement are also critical in determining the success of an ad campaign. Advertisers must create ads that are relevant and engaging to their target audience in order to generate high engagement and maximize their return on investment.

**Mike:** What are ad relevant diagnostics

**GPT:** Ad relevance diagnostics are metrics provided by Facebook to help advertisers understand the relevance of their ads to their target audience. These metrics give insights into how well an ad resonates with its intended audience and can help advertisers make data-driven decisions about their ad campaigns.

The ad relevance diagnostics include metrics such as relevance score, positive feedback rate, negative feedback rate, and hide rate. These metrics take into account factors such as the number of likes, comments, shares, and hides that an ad receives, as well as the level of engagement it generates.

Relevance score is a scale from 1 to 10 that indicates the overall relevance of an ad to its target audience. A higher relevance score indicates that the ad is resonating well with its target audience, while a lower relevance score may indicate that the ad is not well-received or that the target audience is not the right fit for the ad.

The positive feedback rate and negative feedback rate provide insights into how well the ad is being received by its target audience. The hide rate gives an idea of how many people are hiding the ad, which can be an indicator of poor relevance or engagement.

Advertisers can use these metrics to optimize their ad campaigns, refine their targeting strategies, and create more relevant and engaging ads.

**Mike:** How do you view this metric

**GPT:** You can view ad relevance diagnostics in the Facebook Ads Manager. To do so, follow these steps:

1. Log into Facebook Ads Manager: Go to Facebook Ads Manager and sign in to your account.

2. Navigate to the Ads tab: Once logged in, click on the Ads tab to access your ad campaigns.

3. Select the campaign: Choose the campaign you want to view the ad relevance diagnostics for and click on it.

4. Access the Ad Relevance Diagnostics: In the campaign dashboard, scroll down to the Ads section and click on the ad you want to view the metrics for. Then click on the “Relevance” tab.

5. View the metrics: In the Relevance tab, you will be able to see the ad relevance score, positive feedback rate, negative feedback rate, and hide rate.

You can also view these metrics in the Facebook Ads API. If you’re using a third-party ad management tool, you may be able to access these metrics through the tool as well.

It’s important to regularly check the ad relevance diagnostics and make changes to your campaigns based on the insights you gain from these metrics. This can help you optimize your ad performance and reach your business goals.

**Mike:** What is reach buying ?

**GPT:** Reach buying is a bidding strategy used in Facebook advertising that focuses on maximizing the reach of your ads. The goal of reach buying is to show your ads to as many people in your target audience as possible, regardless of how many times each person sees your ad. This strategy is often used when the primary objective of a campaign is to increase brand awareness, rather than drive conversions or clicks.

When using reach buying, Facebook optimizes your ad delivery to reach the largest possible audience, using its algorithm to determine which people are most likely to see your ad. In this bidding strategy, you set a budget for your campaign and Facebook will automatically bid for ad impressions to deliver your ads to the maximum number of people possible within your budget.

Reach buying can be an effective strategy for businesses that want to get their brand and message in front of as many people as possible, especially if they have a limited budget. However, it's important to monitor the performance of reach campaigns and make adjustments if needed, to ensure that they are delivering the desired results.

**Mike:** I have a question about direct mailers.   Where do they get the customer information from?

**GPT:** Direct mailers typically obtain customer information through a variety of sources, including:

1. Purchase Data: Companies can purchase customer data from data brokers or marketing research firms. This data can include information such as name, address, age, income, and purchasing history.

2. Customer Surveys: Companies can gather information directly from their customers through surveys, either online or in-person.

3. Website and Social Media: Companies can collect information from customers who visit their website or interact with them on social media, such as by signing up for newsletters or filling out contact forms.

4. Public Records: Companies can obtain public records, such as voter registration or property records, which can include information such as name, address, and demographic information.

5. Existing Customer Database: Companies can use information from their existing customer database, such as those who have made a purchase or expressed interest in their products or services.

It's important to note that there are laws and regulations in place to protect consumer privacy, and companies are required to comply with these laws when collecting and using customer data. Some countries also have strict data protection laws, such as the European Union's General Data Protection Regulation (GDPR), that companies must comply with when collecting and using customer information.

**Mike:** I am also doing research on direct mailers I'm Florida to test the accuracy of the data .

**GPT:** To test the accuracy of the customer data used in direct mail campaigns, you can follow these steps:

1. Conduct a sample check: Select a random sample of the customer addresses on the list and send a small test mailing to verify the accuracy of the information.

2. Use data validation tools: There are a variety of data validation tools available that can help you clean and verify customer information. These tools can help you identify invalid addresses, check for duplicates, and correct misspelled names and addresses.

3. Ask for feedback: Encourage customers to provide feedback on the accuracy of the information. This can be done through customer surveys, follow-up phone calls, or by including a response card in the direct mail piece.

4. Update your database regularly: Regularly updating your customer database will help to ensure that the information you have is accurate and up-to-date.

5. Follow privacy regulations: Make sure that you are following privacy regulations, such as the General Data Protection Regulation (GDPR) in the European Union, when collecting and using customer information. This can help to ensure that the information you have is obtained legally and ethically.

Remember, having accurate customer information is critical for the success of a direct mail campaign. If the customer information is inaccurate, the campaign will not reach the intended audience and will not be effective in generating the desired results.

**Mike:** How do I find one I can trust ?

**GPT:** To find a trustworthy direct mailer company, you can follow these steps:

1. Research: Look for companies that specialize in direct mail marketing and have a good reputation. Read online reviews, testimonials and case studies to understand their services.

2. Data sources: Check the sources of customer data used by the direct mailer company. They should be using reliable data sources such as public records, government databases, and surveys.

3. Compliance: Ensure that the direct mailer company is compliant with all relevant laws and regulations, such as the CAN-SPAM Act, which regulates commercial email communications.

4. Experienced: Look for a company with experienced staff who can offer advice and support for your direct mail marketing efforts.

5. Service agreement: Before signing a contract, carefully review the service agreement and make sure you understand

**Mike:** How can I find these companies

**GPT:** To find direct mailer companies, you can use several methods:

1. Search engines: Use a search engine such as Google to search for "direct mail marketing companies" and filter the results based on location (e.g. "direct mail marketing companies in Florida").

2. Industry associations: Look for industry associations such as the Direct Marketing Association or the Data & Marketing Association that have a list of member companies.

3. Online directories: Use online directories such as Yelp, Yellow Pages, or Manta to find direct mailer companies in your area.

4. Referrals: Ask for recommendations from other business owners or colleagues who have used direct mailer companies in the past.

5. Trade shows: Attend trade shows and events related to direct mail marketing to meet and network with potential direct mailer companies.

**Mike:** I 
am a facebook marketer and taking the test to become facebook blueprint certified.  Answer these questions for me to help me study.  Act like you are the study guide.   The first question is :

 

A candy company wants to advertise its new line of gourmet chocolate bars on the Facebook App. The announcement will begin with a brand campaign to increase awareness of the new product. The company then wants to target people who viewed its first campaign to build brand awareness.
 

Brand campaign plan:

Length: Four weeks
Budget: $1 million
Audience: Men and women, ages 18-34, who are interested in chocolate
Creative assets: Two videos, 15 seconds each
Placements: In-stream, News Feed, Stories
What's the best strategy to achieve this goal?

**GPT:** The best strategy to achieve this goal would be to launch a brand campaign to increase awareness of the new product, targeting men and women ages 18-34 who are interested in chocolate. The campaign should last for four weeks and have a budget of $1 million. The creative assets should include two 15-second videos and be placed in In-stream, News Feed, and Stories. After the brand campaign has ended, the company can target people who viewed the first campaign to build brand awareness and drive sales of the new gourmet chocolate bars. This can be done by creating a custom audience of those who engaged with the first campaign and targeting them with ads for the new product.

**Mike:** A new US-based shoe retailer is launching their new website and brand using a campaign on the Facebook App. The brand has never advertised on Facebook and does not have any tracking installed on their website yet. Their primary KPI is to drive as many visitors to their website.

Which strategy should the media buyer use?

**GPT:** For the new US-based shoe retailer, the media buyer should use a website traffic campaign as the primary strategy. This type of campaign is designed to drive traffic to the retailer's website and can be optimized for the "Link Clicks" objective. The media buyer can target the audience based on demographics, interests, behaviors, and other factors that align with the target customer profile. Additionally, the media buyer can use a combination of ad formats, such as photo and video ads, to effectively reach the target audience and drive website traffic. To track the success of the campaign, the media buyer should use Facebook's conversion tracking and pixel to monitor website visitors and conversions.

**Mike:** A client wants to cross-promote two different categories in their brand portfolio. Each category is managed by the same agency, but uses two separate ad accounts.  The client wants to use the same Custom Audience of high-value purchasers to reach new and existing customers across both campaigns, but shares this audience with only one of the two ad accounts.

What must the media buyers do to launch the campaigns?

**GPT:** To launch the cross-promotion campaigns, the media buyers must first create a Custom Audience of high-value purchasers using either one of the two ad accounts. They can use data from the brand's website, such as email addresses or customer IDs, or use Facebook's pixel to track customer behavior on the website. 

Once the Custom Audience is created, the media buyers can share it with the other ad account by using Facebook's Custom Audience sharing feature. This will allow both ad accounts to target the same audience of high-value purchasers. 

The media buyers should then develop a creative strategy for each of the two campaigns, considering the objectives and target audience of each category. They should also determine the target audience for each ad set, and use the shared Custom Audience of high-value purchasers for each ad set.

Finally, the media buyers should monitor the performance of the campaigns and make adjustments as needed to optimize the results. This can include adjusting the targeting, ad placement, or ad budget.

**Mike:** what is this code :  fbq ('init'

**GPT:** fbq('init') is a code used in Facebook Pixel, a piece of code provided by Facebook that can be placed on a website to track website traffic and conversion events. The 'init' function initializes the Facebook Pixel, setting it up to track events on the website. By using the fbq('init') code, advertisers can accurately track the performance of their Facebook ad campaigns, and optimize their ads for better results.

**Mike:** what are the two types of advanced matching ?

**GPT:** The two types of advanced matching in Facebook Ads are client-side advanced matching and server-side advanced matching.

Client-side advanced matching is when advertisers match hashed user data with Facebook's data, using JavaScript code on their website. 

Server-side advanced matching is when advertisers send encrypted user data to Facebook through server-to-server API calls. This method is more secure than client-side matching as it doesn't rely on the user's browser for data collection.

**Mike:** how does iframe relate to this ?

**GPT:** An iFrame is an HTML tag that allows you to embed one HTML document inside another HTML document on a website. In the context of Facebook Ads, iFrames can be used to embed an HTML form or landing page within a Facebook ad. Advanced matching is a feature that allows advertisers to pass certain user data from their website to Facebook to help match the user with their Facebook account. The two types of advanced matching are "parameter-based" and "data file". iFrames can be used to implement parameter-based advanced matching by sending user data as parameters in the URL of the iFrame. The user data is then passed to Facebook through the iFrame when the user clicks on the ad and is redirected to the advertiser's landing page.

**Mike:** what would a campaign look like utilizing advanced matching ?

**GPT:** A campaign utilizing advanced matching would involve collecting and matching data from a variety of sources, such as a website or customer database, to target specific individuals or segments. This data would then be used to create custom audiences that can be targeted with more relevant and personalized ads on Facebook. The campaign may involve using Facebook's advanced matching features, such as the pixel or API, to track and collect data on website visitor behavior and match it with Facebook profiles. This information can be used to target specific audience segments with tailored ad content, offers, or promotions. Ultimately, the goal of a campaign utilizing advanced matching is to drive more conversions, increase customer engagement, and improve the overall effectiveness of the ad campaign.

**Mike:** build the campaign in facebook ads manager with objective , bid strategy and placement

**GPT:** Building a Facebook ad campaign with advanced matching requires a few steps. Here is an example of how you could create a campaign in Facebook Ads Manager:

Objective: Let's say the objective is to drive traffic to a website with the goal of increasing online sales.

Bid strategy: To maximize conversions, the bid strategy could be set to "Lowest cost with bid cap" with a bid cap that is high enough to get the desired amount of impressions, but not too high to be wasteful.

Placement: For this campaign, the placements could be set to "Automatic placements" in order to reach the largest audience on Facebook and the Facebook Audience Network. This allows the campaign to be displayed in the Facebook news feed, Stories, in-stream video, and other placements on the Audience Network.

Next, create the ad sets for the campaign and target the audience using advanced matching. To do this, you would need to implement a Facebook pixel on your website to track website visitors and create a Custom Audience of high-value purchasers. You could then use this Custom Audience as the target audience for your ad sets.

Additionally, to use advanced matching, you would need to provide Facebook with a customer data file that includes information such as email addresses, phone numbers, and other identifying information that can be used to match people to their Facebook profiles.

Finally, create the ads for the campaign and use eye-catching images and compelling copy to attract the attention of the target audience and drive them to the website. Utilizing advanced matching allows you to reach more of your target audience and make more effective use of your advertising budget.

**Mike:** do it for a drop shipping company

**GPT:** For a drop shipping company, a Facebook Ads campaign with the objective "Conversions" would be suitable, with the bid strategy set to "Lowest Cost" and placements targeted to both Facebook and Instagram.

The objective "Conversions" would aim to drive website sales, allowing the company to track and optimize their ad spend to achieve the desired results. The "Lowest Cost" bid strategy would prioritize delivering the ad to people likely to take the desired action at the lowest cost, which is ideal for a drop shipping company looking to maximize their return on investment.

Placements on both Facebook and Instagram would increase the visibility of the ad, reaching a wider audience, and making it easier for the company to reach its target customers. This combined approach of objective, bid strategy, and placement would aim to generate conversions and increase sales for the drop shipping company.

**Mike:** write it like you would for a client proposal

**GPT:** Proposal for Drop Shipping Company Facebook Advertising Campaign

Introduction:
Our team at [Agency Name] would like to offer our services to help [Drop Shipping Company] reach its advertising goals on Facebook. Our team has extensive experience in creating and managing successful Facebook advertising campaigns for e-commerce businesses. In this proposal, we'll outline our recommended approach to achieve your objectives and provide a detailed plan for your review.

Objective:
The primary objective of this campaign is to drive sales and increase brand awareness for [Drop Shipping Company]. To achieve this, we'll create and launch a series of highly-targeted and engaging ads designed to convert Facebook users into paying customers.

Bid Strategy:
For this campaign, we recommend using the "Lowest Cost" bid strategy. This strategy allows Facebook's algorithm to automatically bid the lowest amount needed to deliver your ads to the target audience. This approach can be more cost-effective compared to manual bidding and can

**GPT:** result in a higher return on investment (ROI) for the campaign.

Placement:
To reach the target audience effectively, we recommend placing ads on the Facebook News Feed and Instagram Feed. These placements have proven to be the most successful for e-commerce businesses and will allow for maximum exposure for the drop shipping company. Additionally, we may consider placing ads on Instagram Stories, Facebook Marketplace, and the Facebook Right Column, depending on the results from initial tests and audience engagement metrics.

Target Audience:
We will utilize Facebook's advanced targeting options to reach the most relevant audience for [Drop Shipping Company]. This will include targeting based on demographics, interests, behaviors, and past purchase history. We'll also utilize Facebook's Custom Audience feature to target customers who have previously interacted with the drop shipping company's website or products.

Creative Assets:
To create compelling and effective ads, our team will work with [Drop Shipping Company] to develop a range of high-quality, visually appealing images and videos. These assets will be optimized for each placement and will highlight the key features and benefits of the drop shipping company's products.

Campaign Management and Optimization:
Our team will manage and monitor the campaign daily to ensure it is performing effectively and achieving the desired results. We'll regularly adjust bids, targeting, and creative assets based on performance data and audience insights to optimize the campaign for maximum ROI.

Conclusion:
We believe this campaign will help [Drop Shipping Company] achieve its objectives and drive sales through Facebook advertising. Our team is confident in our ability to deliver effective and cost-efficient advertising solutions, and we're excited about the opportunity to work with [Drop Shipping Company].

If you have any questions or would like to discuss this proposal further, please don't hesitate to contact us.

Best Regards,
[Agency Name]

**Mike:** write it for a $1500 budget

**GPT:** Dear [Client],

We have designed an effective advertising campaign utilizing Facebook Ads Manager to help your drop shipping company reach its target audience. With a budget of $1500, we will use advanced matching techniques to ensure your ads are seen by the right people.

Objective:
Our objective is to drive sales and increase website traffic for your drop shipping company.

Bid Strategy:
We will be using a Conversion Bid Strategy, where Facebook Ads Manager automatically sets bids to help reach your conversion goals at the lowest possible cost.

Placement:
Our campaign will be placed on the Facebook and Instagram platforms, specifically targeting the News Feed, Stories and Marketplace. This will give us maximum visibility and help us reach the largest possible audience.

Please let us know if you have any questions or concerns about this proposal. We look forward to working with you to achieve your advertising goals.

Sincerely,
[Your Name]

**Mike:** write is a marketer , not for the client.  what strategy would a digital marketing agency use ?  reply with just the strategy and numbers

**GPT:** Campaign strategy for a drop-shipping company with a budget of $1500:

Objective: Conversions
Bid strategy: Target Cost per Acquisition (CPA)
Placement: Facebook and Instagram News Feed

This campaign will utilize the "Conversions" objective, which is designed to drive specific actions on the company's website such as purchases or sign-ups. The Target Cost per Acquisition (CPA) bid strategy will automatically optimize bids to achieve a target cost per conversion. The campaign will be placed on Facebook and Instagram News Feed, where the audience is highly engaged and likely to take action.

**Mike:** how many impressions on a cpm basis will 1500 buy?

**GPT:** The number of impressions that $1500 will buy on a CPM (cost per thousand impressions) basis depends on several factors, including the target audience, the bid amount, and competition for ad space. It's difficult to estimate the exact number of impressions without knowing these factors. Generally, the CPM cost can range from $2 to $10 or more, and the number of impressions will vary accordingly.

For example, if the CPM is $5, then $1500 would buy 300,000 impressions (1500 / 5 = 300). However, this is just an estimate, and the actual number of impressions may be higher or lower depending on the factors mentioned above.

**Mike:** targeting a broad audience in the entire united states with the goal of getting sales

**GPT:** As an agency, for a $1500 budget targeting a broad audience in the entire United States with the goal of getting sales, we would recommend using the following strategy:

Objective: Conversion
Bid Strategy: Optimize for Conversions
Placement: Facebook & Instagram Feed, Stories, & Marketplace

Based on historical data, on average, the cost per thousand impressions (CPM) for a broad audience in the US is around $5-$15. However, this can vary depending on various factors such as competition, time of year, audience size, etc. With a budget of $1500, we can expect to receive around 100,000 to 300,000 impressions, assuming an average CPM of $10.

**Mike:** I have additional $1000 for retargeting.  how would you incorporate retargeting into the campaign ?

**GPT:** For the additional $1000 budget allocated for retargeting, we recommend utilizing Facebook's retargeting capabilities to target people who have previously interacted with your website or online store. This could include people who have visited your website, added items to their cart, or made a purchase. By targeting these people, you are more likely to drive conversions as they are already familiar with your brand and have demonstrated interest in your products.

Our retargeting strategy would be to:

1. Set up a Custom Audience in Facebook Ads Manager, using your website's tracking code to create a list of people who have interacted with your website.

2. Create a retargeting ad campaign, with the objective set to "Conversions" and a bid strategy set to "Lowest Cost" or "Target Cost".

3. Use dynamic product ads to show people products they viewed or added to their cart, in an attempt to drive them back to your website to complete their purchase.

4. Place the retargeting ads in the Facebook Feed, Stories, and Right Column. This will ensure that your retargeting ads are shown to people wherever they are on Facebook, increasing the likelihood that they will see and interact with your ads.

5. Monitor the performance of the retargeting campaign regularly and make optimizations as needed to improve performance and maximize your return on investment.

**Mike:** I want to use programmatic for retargeting.   I do not want to use facebook.  what should I do ?

**GPT:** If you want to use programmatic for retargeting and not use Facebook, you will need to partner with a programmatic advertising platform that specializes in retargeting. These platforms use algorithms to automate the buying and selling of online advertising, and can often reach a wider audience than just Facebook. You can find programmatic advertising platforms through online search engines or by reaching out to digital marketing agencies that specialize in programmatic advertising. When choosing a platform, consider the following factors: targeting capabilities, cost, reach, transparency, and user experience.

**Mike:** how would I retarget the facebook audience using programmatic ?

**GPT:** To retarget your Facebook audience using programmatic advertising, you would need to implement a Facebook Pixel on your website, which would allow you to track and collect data on the behavior of visitors to your site. You could then use that data to build custom audiences in Facebook, which could be exported and used as a target audience in programmatic advertising platforms such as Google Display Network, The Trade Desk, AppNexus, or LiveRamp. These platforms would allow you to target your retargeting campaigns across a network of websites and mobile apps, reaching users who have previously visited your site or engaged with your content on Facebook.

**Mike:** what if its an ad I am serving and they do not click on the ad.  can I track them after they click the ad ?

**GPT:** Yes, you can track the audience who did not click on your ad using programmatic advertising and retarget them. One way to do this is by using browser cookies to track their online behavior and show them relevant ads. You can also use a technology like a tag management system or a conversion pixel to track the behavior of users on your website, and then retarget them with programmatic ads based on their actions. It's important to note that the use of cookies is subject to privacy regulations and it's important to obtain consent where required by law.

**Mike:** how do the dsp's target and track the audience ?

**GPT:** DSPs (Demand Side Platforms) target and track audiences by using data and technology to automate the purchasing and placement of digital advertising. They use various data sources, such as cookies and mobile device IDs, to build a profile of the audience and their behavior across different devices and platforms. Based on this profile, DSPs can target the audience with specific ads and track their engagement with those ads in real-time. The DSPs can also use data and algorithms to optimize the ad delivery in real-time, to ensure that the most relevant ads are being shown to the right audience at the right time. The tracking and targeting capabilities of DSPs allow advertisers to improve the efficiency and effectiveness of their digital advertising campaigns.

**Mike:** how can an audience built in facebook be used for retargeting outside of using facebook ?

**GPT:** An audience built in Facebook can be used for retargeting outside of Facebook through the process of audience export. Facebook provides an option to export Custom Audiences, which can be uploaded to other advertising platforms or demand-side platforms (DSPs). This allows advertisers to reach their Facebook audience on other websites, apps, and platforms through programmatic advertising. The DSPs use cookies or device IDs to match the exported audience with their own inventory and display ads to those users as they browse other websites. This allows advertisers to retarget their Facebook audience beyond the Facebook ecosystem, thus expanding the reach of their advertising campaigns.

**Mike:** so the audience is uploaded into the dsp and then retargeted across the web ?

**GPT:** Yes, that's correct. The Facebook audience can be uploaded into a demand-side platform (DSP) and used for retargeting across the web. This process is known as cross-device retargeting. The DSP uses data from the uploaded audience to target the same individuals with advertisements on other websites and mobile apps. The DSP uses cookies, device IDs, and other unique identifiers to track and target the audience.

**Mike:** what are typical cpm rates ?

**GPT:** CPM (cost per thousand impressions) rates vary widely depending on several factors, including the target audience, the type of advertising inventory, the platform and channel being used, the time of day, and the level of competition for ad space. On average, CPM rates for display ads can range from $2 to $20 or more, while CPM rates for video ads can be higher, from $10 to $30 or more. CPM rates for premium, highly sought-after inventory such as high-traffic news websites or popular social media platforms can be even higher. It's important to note that these are rough estimates and actual CPM rates can vary greatly based on the specific circumstances of a campaign.

**Mike:** for linkedin ?

**GPT:** CPM (cost per thousand impressions) rates for LinkedIn ads can vary depending on factors such as target audience, ad format, and competition for ad space. On average, CPM rates for LinkedIn can range from $10 to $40. However, it's worth noting that these are just rough estimates and actual CPM rates can vary greatly depending on specific campaigns and target audiences.

**Mike:** what is the SHA-256 hashing function  ?

**GPT:** SHA-256 is a cryptographic hash function that takes an input (or 'message') and returns a fixed-size output, or 'hash', of 256 bits. It is a one-way function, meaning that it is computationally infeasible to generate the original message from the hash. The output of SHA-256 is deterministic, meaning that the same message will always result in the same hash. The function is widely used for digital signatures, message authentication codes, and other security applications.

**Mike:** how is it used in facebook ads ?

**GPT:** The SHA-256 hashing function is used in Facebook Ads for privacy protection and security purposes. It is used to convert sensitive information, such as email addresses or phone numbers, into a fixed-length string of text known as a hash. The hash is then used to match and retarget users across different devices and platforms. This process helps to protect user privacy, as the original sensitive information is not shared or stored by Facebook. Instead, the hashed information is used to track and target users in a way that maintains their privacy and protects their personal data.

**Mike:** what does the term hashed mean ?

**GPT:** The term "hashed" refers to the process of converting data into a fixed-length, digital representation called a hash value. This process is designed to be one-way and irreversible, meaning that the original data cannot be reconstructed from the hash value. The hash value acts as a unique identifier for the original data, and can be used for data comparison, data validation, and digital signatures, among other uses. In the context of Facebook ads, hashing is used to ensure the privacy and security of customer data by converting sensitive information such as email addresses into a secure, irreversible hash value that can be safely shared with advertisers for ad targeting and measurement purposes.

**Mike:** have cpm's increased since programmatic ads have become more popular

**GPT:** The impact of programmatic advertising on cost per thousand impressions (CPM) is complex and dependent on various factors such as competition, ad inventory, and targeting strategies. In general, programmatic advertising can increase the efficiency of ad buying and targeting, leading to more competitive CPMs. However, the increased demand for programmatic advertising can also drive up CPMs. Ultimately, the impact on CPMs will vary based on the specific circumstances of each individual market and campaign.

**Mike:** during the pandemic did they increase as people were forced to stay home ?  do not reiterate my question , just answer it

**GPT:** During the pandemic, it is possible that CPMs increased as more people were spending time online due to stay-at-home measures, resulting in increased demand for digital advertising. However, it is also possible that CPMs fluctuated due to changes in consumer behavior and the overall state of the economy. The exact impact of the pandemic on CPMs is likely to have varied depending on factors such as industry, target audience, and geographic location.
