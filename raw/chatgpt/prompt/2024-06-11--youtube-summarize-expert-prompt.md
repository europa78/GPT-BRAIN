---
title: "YouTube Summarize Expert Prompt"
date: 2024-06-11
cluster: "Prompt Eng / GPT Building"
messages: 16
source: chatgpt-export conversations.json (FULL transcript)
---

# YouTube Summarize Expert Prompt

> 16 messages · 2024-06-11 · cluster: Prompt Eng / GPT Building

**Semantic neighbors:** [[Quantum Politician AI - GPT]] · [[Automation Consultant by Zapier - GPT]] · [[Prompt Painter - GPT (SaucePack)]] · [[Scholar GPT - GPT]]

## Transcript

**Mike:** write an expert level prompt that summarizes in detail you tube videos

**GPT:** To create an expert-level prompt for summarizing YouTube videos in detail, we need to ensure that the prompt guides the model to extract key information, understand the context, and deliver a comprehensive summary. Here’s an advanced prompt designed to achieve this:

---

**Prompt:**

```
You are an expert in summarizing content and extracting key information from multimedia sources. Your task is to watch the following YouTube video and provide a detailed and comprehensive summary. The summary should include the main topics covered, important points discussed, and any conclusions or recommendations made by the presenter. Additionally, highlight any notable quotes or statistics mentioned in the video. Ensure that the summary is structured logically and provides a clear understanding of the video's content.

Video URL: [Insert YouTube Video URL Here]

Instructions:
1. Watch the entire video carefully.
2. Identify and list the main topics covered.
3. Summarize the key points discussed under each topic.
4. Include any conclusions or recommendations provided by the presenter.
5. Highlight notable quotes or statistics mentioned in the video.
6. Ensure the summary is detailed, logically structured, and easy to understand.
```

**Example:**

```
Video URL: [Insert YouTube Video URL Here]

Summary:

1. **Introduction:**
   - The video begins with an introduction to [main topic], explaining its relevance and importance.
   - The presenter outlines the key points that will be covered.

2. **Main Topic 1: [Topic Name]**
   - **Key Point 1:** Description and explanation.
   - **Key Point 2:** Important insights and examples.
   - **Conclusion/Recommendation:** Summarized conclusion or recommendation provided by the presenter.

3. **Main Topic 2: [Topic Name]**
   - **Key Point 1:** Description and explanation.
   - **Key Point 2:** Important insights and examples.
   - **Conclusion/Recommendation:** Summarized conclusion or recommendation provided by the presenter.

4. **Notable Quotes and Statistics:**
   - Quote 1: "[Exact quote from the video]"
   - Quote 2: "[Exact quote from the video]"
   - Statistic 1: "[Statistic mentioned in the video]"

5. **Conclusion:**
   - A summary of the overall content covered in the video.
   - Final thoughts and any additional recommendations by the presenter.

This summary should provide a comprehensive and detailed understanding of the video's content, making it useful for anyone who wants to grasp the key points without watching the entire video.
```

---

**Explanation:**

1. **Contextual Clarity:** The prompt clearly states the task and provides a structured approach to summarizing the video.
2. **Detailed Instructions:** Step-by-step instructions ensure the model focuses on key elements like main topics, key points, conclusions, quotes, and statistics.
3. **Logical Structure:** The example summary format helps maintain a logical flow, making the summary easy to follow and understand.
4. **Comprehensive Coverage:** By specifying that the summary should be detailed and include notable quotes and statistics, the prompt ensures that important details are not missed.

This prompt should help generate detailed and comprehensive summaries for YouTube videos effectively.

**Mike:** Write a world class prompt meant for analyzing the Wall Street journal.  The objective is to find trade ideas based on the articles written in the latest edition and then comparing them to previous editions.  I will upload the Wall Street journal as a PDF.   Structure the trades by giving me the set up , the reasoning behind it and the product the trade references. i.e. stocks, bonds, options, commodities, currencies.

**GPT:** To create a world-class prompt for analyzing the Wall Street Journal to find trade ideas based on the latest edition and comparing them to previous editions, we need to ensure the prompt guides the model to:

1. Extract relevant information from the articles.
2. Identify potential trade ideas.
3. Compare the insights to previous editions for consistency or new trends.
4. Structure the trade setup, reasoning, and the referenced product comprehensively.

Here is the expert-level prompt designed for this purpose:

---

**Prompt:**

```
You are an expert financial analyst tasked with finding trade ideas from the Wall Street Journal. Your objective is to analyze the latest edition and compare the insights with previous editions to identify potential trade opportunities. The analysis should be structured to include the trade setup, the reasoning behind it, and the specific product the trade references (stocks, bonds, options, commodities, currencies).

Instructions:
1. Analyze the latest edition of the Wall Street Journal PDF.
2. Identify and list potential trade ideas discussed in the articles.
3. Compare these trade ideas to those from previous editions (if available) to identify trends, consistencies, or new developments.
4. Structure the trade setup, reasoning, and referenced product for each identified trade idea.

**Trade Analysis Structure:**

1. **Trade Setup:**
   - Description of the trade idea.
   - Specific product referenced (stocks, bonds, options, commodities, currencies).

2. **Reasoning:**
   - Detailed analysis of the rationale behind the trade idea.
   - Key factors and insights derived from the latest edition.
   - Comparison with previous editions to highlight trends or changes.

3. **Product:**
   - Name of the stock, bond, option, commodity, or currency.
   - Any specific details such as ticker symbols, maturity dates, strike prices, etc.

**Example Analysis:**

1. **Trade Setup:**
   - **Description:** Buy XYZ Corporation stock.
   - **Product:** Stock.

2. **Reasoning:**
   - **Latest Edition Analysis:** The article highlights XYZ Corporation’s strong quarterly earnings, new product launches, and favorable market conditions.
   - **Comparison with Previous Editions:** Previous editions have consistently noted XYZ Corporation’s growth trajectory and recent strategic partnerships.
   - **Key Factors:** Strong financial performance, market expansion, positive industry outlook.

3. **Product:**
   - **Name:** XYZ Corporation.
   - **Ticker Symbol:** XYZ.

Repeat this structure for each identified trade idea to provide a comprehensive analysis.

Your task is to create detailed and insightful trade ideas, ensuring each setup, reasoning, and product reference is thoroughly explained and supported by the Wall Street Journal articles.
```

**Explanation:**

1. **Contextual Clarity:** The prompt clearly defines the task and expectations.
2. **Detailed Instructions:** Step-by-step instructions ensure the model focuses on extracting relevant trade ideas and comparing them with previous editions.
3. **Logical Structure:** The structured format for trade analysis helps maintain clarity and comprehensiveness.
4. **Comparative Analysis:** Emphasizing the comparison with previous editions adds depth and context to the analysis.
5. **Comprehensive Coverage:** Ensuring that each trade idea includes a setup, reasoning, and product reference makes the analysis robust and actionable.

This prompt will guide the model to produce detailed, insightful, and structured trade analyses based on the Wall Street Journal articles, aiding in the identification of valuable trade opportunities.

**Mike:** Update the prompt by scanning and parsing this edition of The Wall Street journal to get an outline of the different sections needed for analyzing

**GPT:** Based on the structure and content of the Wall Street Journal from the uploaded PDF, here is an updated prompt that includes specific sections for analyzing and finding trade ideas:

---

**Prompt:**

```
You are an expert financial analyst tasked with finding trade ideas from the Wall Street Journal. Your objective is to analyze the latest edition and compare the insights with previous editions to identify potential trade opportunities. The analysis should be structured to include the trade setup, the reasoning behind it, and the specific product the trade references (stocks, bonds, options, commodities, currencies).

The sections to focus on from the Wall Street Journal include:
1. **Business & Finance**
2. **Markets**
3. **World News**
4. **U.S. News**
5. **Opinion**
6. **Heard on the Street**

Instructions:
1. Analyze the specified sections of the latest edition of the Wall Street Journal PDF.
2. Identify and list potential trade ideas discussed in the articles.
3. Compare these trade ideas to those from previous editions (if available) to identify trends, consistencies, or new developments.
4. Structure the trade setup, reasoning, and referenced product for each identified trade idea.

**Trade Analysis Structure:**

1. **Trade Setup:**
   - Description of the trade idea.
   - Specific product referenced (stocks, bonds, options, commodities, currencies).

2. **Reasoning:**
   - Detailed analysis of the rationale behind the trade idea.
   - Key factors and insights derived from the latest edition.
   - Comparison with previous editions to highlight trends or changes.

3. **Product:**
   - Name of the stock, bond, option, commodity, or currency.
   - Any specific details such as ticker symbols, maturity dates, strike prices, etc.

**Example Analysis:**

1. **Trade Setup:**
   - **Description:** Buy XYZ Corporation stock.
   - **Product:** Stock.

2. **Reasoning:**
   - **Latest Edition Analysis:** The article highlights XYZ Corporation’s strong quarterly earnings, new product launches, and favorable market conditions.
   - **Comparison with Previous Editions:** Previous editions have consistently noted XYZ Corporation’s growth trajectory and recent strategic partnerships.
   - **Key Factors:** Strong financial performance, market expansion, positive industry outlook.

3. **Product:**
   - **Name:** XYZ Corporation.
   - **Ticker Symbol:** XYZ.

Repeat this structure for each identified trade idea to provide a comprehensive analysis.

Your task is to create detailed and insightful trade ideas, ensuring each setup, reasoning, and product reference is thoroughly explained and supported by the Wall Street Journal articles.
```

**Explanation:**

1. **Contextual Clarity:** The prompt clearly defines the task and expectations, focusing on specific sections relevant to trade ideas.
2. **Detailed Instructions:** Step-by-step instructions ensure the model focuses on extracting relevant trade ideas and comparing them with previous editions.
3. **Logical Structure:** The structured format for trade analysis helps maintain clarity and comprehensiveness.
4. **Comparative Analysis:** Emphasizing the comparison with previous editions adds depth and context to the analysis.
5. **Comprehensive Coverage:** Ensuring that each trade idea includes a setup, reasoning, and product reference makes the analysis robust and actionable.

This prompt will guide the model to produce detailed, insightful, and structured trade analyses based on the Wall Street Journal articles, aiding in the identification of valuable trade opportunities.

**Mike:** write another prompt.  put yourself into the role of an expert stock trader and chart technical analysis genius. Summarize financial news by accessing the web for current info,  delivering comprehensive summaries.   focus on reporting on the stocks in the S&P 500 , the bond market and commodities like gold and oil.  the goal of this analysis is to find great trade set ups that have a high probability for success.  give me 3 high quality set ups using stocks in the S&P 500.    



Please write in English language.

**GPT:** Certainly! Here’s an expert-level prompt designed for summarizing financial news with a focus on finding high-probability trade setups in the S&P 500, the bond market, and commodities like gold and oil:

---

**Prompt:**

```
You are an expert stock trader and a technical analysis genius. Your task is to summarize the latest financial news by accessing the web for current information and delivering comprehensive summaries. Focus your analysis on the stocks in the S&P 500, the bond market, and commodities such as gold and oil. The goal of this analysis is to identify high-probability trade setups.

Instructions:
1. Access and review the latest financial news from reputable sources on the web.
2. Summarize the key insights and trends affecting the S&P 500 stocks, the bond market, and commodities (gold and oil).
3. Identify and provide three high-quality trade setups using stocks in the S&P 500. Ensure these setups have a high probability of success.
4. For each trade setup, include the following details:
   - Trade Setup
   - Reasoning
   - Technical Analysis
   - Product (specific stock, bond, or commodity)

**Trade Setup Structure:**

1. **Trade Setup:**
   - Description of the trade idea.
   - Specific product referenced (e.g., stock name, bond type, commodity).

2. **Reasoning:**
   - Detailed analysis of the rationale behind the trade idea.
   - Key financial news and trends supporting the trade.
   - Economic indicators or events influencing the setup.

3. **Technical Analysis:**
   - Key technical indicators and chart patterns supporting the trade.
   - Support and resistance levels.
   - Moving averages, RSI, MACD, or other relevant technical indicators.

4. **Product:**
   - Name of the stock, bond, or commodity.
   - Ticker symbol or specific identifier.
   - Any specific details such as maturity dates (for bonds) or contract months (for commodities).

**Example Analysis:**

1. **Trade Setup:**
   - **Description:** Buy shares of Apple Inc. (AAPL).
   - **Product:** Stock.

2. **Reasoning:**
   - **Financial News:** Recent earnings report showed a significant increase in revenue and profits, beating market expectations.
   - **Trends:** Strong demand for the new iPhone model and growth in the services segment.

3. **Technical Analysis:**
   - **Indicators:** The stock has broken out of a consolidation pattern and is trading above its 50-day and 200-day moving averages.
   - **Support and Resistance Levels:** Support at $170, resistance at $190.
   - **Additional Indicators:** RSI indicates the stock is not yet overbought, suggesting room for further upside.

4. **Product:**
   - **Name:** Apple Inc.
   - **Ticker Symbol:** AAPL.

**Repeat this structure for the remaining two high-quality trade setups.**

Your task is to deliver detailed, insightful, and well-supported trade setups, ensuring each analysis is backed by the latest financial news, trends, and technical indicators.
```

**Explanation:**

1. **Contextual Clarity:** The prompt clearly defines the task and expectations, focusing on the latest financial news and technical analysis.
2. **Detailed Instructions:** Step-by-step instructions ensure the model focuses on extracting relevant trade ideas and providing detailed analysis.
3. **Logical Structure:** The structured format for trade analysis helps maintain clarity and comprehensiveness.
4. **Comprehensive Coverage:** Ensuring that each trade idea includes a setup, reasoning, and technical analysis makes the analysis robust and actionable.

This prompt will guide the model to produce detailed, insightful, and structured trade analyses, aiding in the identification of high-probability trade opportunities.

**Mike:** Create a separate prompt for resume analysis and creation. You are the role of an expert resume writer and optimizer. I will upload my current resume I need you to read it analyze it and rewrite the parts where necessary.

**GPT:** Sure, here’s an expert-level prompt designed for resume analysis and creation:

---

**Prompt:**

```
You are an expert resume writer and optimizer. Your task is to read, analyze, and rewrite the provided resume to enhance its effectiveness and ensure it meets industry standards. Focus on clarity, professionalism, and showcasing the individual's skills and achievements. Make sure the resume is tailored for the specific job or industry the individual is targeting.

Instructions:
1. Read the uploaded resume thoroughly.
2. Analyze the resume for areas that need improvement, such as formatting, content clarity, keyword optimization, and the overall presentation.
3. Rewrite the parts where necessary to improve the resume. Ensure the following aspects are covered:
   - Clear and professional formatting.
   - Strong and relevant summary or objective statement.
   - Detailed work experience with quantifiable achievements.
   - Highlighted skills and qualifications relevant to the target job or industry.
   - Properly formatted education and certifications.
   - Inclusion of relevant keywords for Applicant Tracking Systems (ATS).

**Analysis and Rewrite Structure:**

1. **Summary or Objective Statement:**
   - Ensure it is concise and clearly reflects the candidate’s career goals and strengths.
   - Tailor it to the specific job or industry.

2. **Work Experience:**
   - List work experience in reverse chronological order.
   - Include job titles, company names, and dates of employment.
   - Provide detailed descriptions of responsibilities and achievements, using action verbs and quantifiable results where possible.

3. **Skills and Qualifications:**
   - Highlight key skills relevant to the target job.
   - Ensure the skills section is comprehensive but concise.

4. **Education and Certifications:**
   - Include relevant educational background and certifications.
   - Ensure the formatting is consistent and professional.

5. **Overall Formatting and Presentation:**
   - Use a clean, professional layout with consistent formatting.
   - Ensure the resume is easy to read and free from any grammatical or typographical errors.

**Example Analysis and Rewrite:**

**Original Work Experience:**
```
- Managed a team of sales professionals.
- Increased sales revenue.
- Developed new sales strategies.
```

**Rewritten Work Experience:**
```
Sales Manager, ABC Corporation
January 2020 - Present
- Led a team of 10 sales professionals, providing coaching and mentorship to improve performance.
- Achieved a 25% increase in sales revenue within the first year by implementing targeted sales strategies and enhancing client relationships.
- Developed and executed innovative sales strategies that expanded the customer base by 15%.
```

**Rewritten Summary Statement:**
```
Dynamic and results-driven Sales Manager with over 5 years of experience leading high-performing sales teams and driving revenue growth. Proven ability to develop and implement strategic sales initiatives that boost profitability and enhance client satisfaction. Seeking to leverage expertise in sales leadership and strategic planning to contribute to the success of XYZ Company.
```

Your task is to deliver a revised resume that is professional, well-structured, and tailored to the candidate’s target job or industry. Ensure each section is optimized for clarity, impact, and relevance.
```

**Explanation:**

1. **Contextual Clarity:** The prompt clearly defines the task and expectations, focusing on improving and tailoring the resume.
2. **Detailed Instructions:** Step-by-step instructions ensure the model focuses on critical areas of the resume and provides detailed analysis and rewriting.
3. **Logical Structure:** The structured format for resume analysis and rewriting helps maintain clarity and comprehensiveness.
4. **Comprehensive Coverage:** Ensuring that each aspect of the resume is analyzed and optimized makes the final resume robust and effective.

This prompt will guide the model to produce a detailed and optimized resume, enhancing the candidate’s chances of securing their desired job.

**Mike:** Condensed to prompts while retaining the detail

**GPT:** Here are two condensed prompts for resume analysis and creation while retaining the necessary details:

---

**Prompt for Resume Analysis and Optimization:**

```
You are an expert resume writer and optimizer. Your task is to read, analyze, and rewrite the provided resume to enhance its effectiveness. Focus on clarity, professionalism, and showcasing the individual's skills and achievements. Tailor the resume for the specific job or industry.

Instructions:
1. Read the uploaded resume thoroughly.
2. Analyze the resume for areas that need improvement: formatting, content clarity, keyword optimization, and overall presentation.
3. Rewrite the parts where necessary to improve the resume. Ensure the following:
   - Clear and professional formatting.
   - Strong and relevant summary or objective statement.
   - Detailed work experience with quantifiable achievements.
   - Highlighted skills and qualifications relevant to the target job or industry.
   - Properly formatted education and certifications.
   - Inclusion of relevant keywords for Applicant Tracking Systems (ATS).

**Example Rewritten Work Experience:**
```
Sales Manager, ABC Corporation
January 2020 - Present
- Led a team of 10 sales professionals, providing coaching and mentorship to improve performance.
- Achieved a 25% increase in sales revenue within the first year by implementing targeted sales strategies and enhancing client relationships.
- Developed and executed innovative sales strategies that expanded the customer base by 15%.
```

**Example Rewritten Summary Statement:**
```
Dynamic and results-driven Sales Manager with over 5 years of experience leading high-performing sales teams and driving revenue growth. Proven ability to develop and implement strategic sales initiatives that boost profitability and enhance client satisfaction. Seeking to leverage expertise in sales leadership and strategic planning to contribute to the success of XYZ Company.
```

Your task is to deliver a revised resume that is professional, well-structured, and tailored to the candidate’s target job or industry.
```

---

**Prompt for Creating a High-Probability Trade Setup Analysis:**

```
You are an expert stock trader and technical analysis genius. Your task is to summarize the latest financial news by accessing the web and delivering comprehensive summaries. Focus on the S&P 500 stocks, the bond market, and commodities like gold and oil. Identify high-probability trade setups.

Instructions:
1. Access and review the latest financial news from reputable sources.
2. Summarize key insights and trends affecting the S&P 500 stocks, the bond market, and commodities (gold and oil).
3. Identify three high-quality trade setups using stocks in the S&P 500. Ensure these setups have a high probability of success.
4. For each trade setup, include:
   - Trade Setup
   - Reasoning
   - Technical Analysis
   - Product (specific stock)

**Example Trade Setup:**

1. **Trade Setup:**
   - **Description:** Buy shares of Apple Inc. (AAPL).
   - **Product:** Stock.

2. **Reasoning:**
   - **Financial News:** Recent earnings report showed a significant increase in revenue and profits, beating market expectations.
   - **Trends:** Strong demand for the new iPhone model and growth in the services segment.

3. **Technical Analysis:**
   - **Indicators:** The stock has broken out of a consolidation pattern and is trading above its 50-day and 200-day moving averages.
   - **Support and Resistance Levels:** Support at $170, resistance at $190.
   - **Additional Indicators:** RSI indicates the stock is not yet overbought, suggesting room for further upside.

4. **Product:**
   - **Name:** Apple Inc.
   - **Ticker Symbol:** AAPL.

Repeat this structure for the remaining two high-quality trade setups.
```

These condensed prompts retain the necessary detail and structure for effective resume analysis and creation, as well as for identifying high-probability trade setups.

**Mike:** You are an expert in summarizing content and extracting key information from multimedia sources. Your task is to watch the following YouTube video and provide a detailed and comprehensive summary. The summary should include the main topics covered, important points discussed, and any conclusions or recommendations made by the presenter. Additionally, highlight any notable quotes or statistics mentioned in the video. Ensure that the summary is structured logically and provides a clear understanding of the video's content.

Video URL: [Insert YouTube Video URL Here]

Instructions:
1. Watch the entire video carefully.
2. Identify and list the main topics covered.
3. Summarize the key points discussed under each topic.
4. Include any conclusions or recommendations provided by the presenter.
5. Highlight notable quotes or statistics mentioned in the video.
6. Ensure the summary is detailed, logically structured, and easy to understand.

**GPT:** Here is the revised prompt based on your provided input:

---

**Prompt:**

```
You are an expert in summarizing content and extracting key information from multimedia sources. Your task is to watch the following YouTube video and provide a detailed and comprehensive summary. The summary should include the main topics covered, important points discussed, and any conclusions or recommendations made by the presenter. Additionally, highlight any notable quotes or statistics mentioned in the video. Ensure that the summary is structured logically and provides a clear understanding of the video's content.

Video URL: [Insert YouTube Video URL Here]

Instructions:
1. Watch the entire video carefully.
2. Identify and list the main topics covered.
3. Summarize the key points discussed under each topic.
4. Include any conclusions or recommendations provided by the presenter.
5. Highlight notable quotes or statistics mentioned in the video.
6. Ensure the summary is detailed, logically structured, and easy to understand.
```

---

This prompt ensures clarity, detailed analysis, and logical structuring of the video content to provide a comprehensive summary.

**Mike:** Here is the video : https://www.youtube.com/live/fbq7PXx8rIY?si=aeYNscI05TTzQvjM

**GPT:** I cannot directly access and summarize the content of YouTube videos. However, you can watch the video at [this link](https://www.youtube.com/live/fbq7PXx8rIY?si=aeYNscI05TTzQvjM).

For summarizing it yourself, follow these instructions:
1. Watch the entire video carefully.
2. Identify and list the main topics covered.
3. Summarize the key points discussed under each topic.
4. Include any conclusions or recommendations provided by the presenter.
5. Highlight notable quotes or statistics mentioned.
6. Ensure the summary is detailed, logically structured, and easy to understand.
