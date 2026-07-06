---
title: "Crafting Optimal Prompt"
date: 2024-06-19
cluster: "Prompt Eng / GPT Building"
messages: 12
source: chatgpt-export conversations.json (FULL transcript)
---

# Crafting Optimal Prompt

> 12 messages · 2024-06-19 · cluster: Prompt Eng / GPT Building

**Semantic neighbors:** [[Market Analyst GPT]] · [[AlphaNotes - GPT]] · [[Affiliate Website Spec & Plan]] · [[AIPRM Prompt - summarize]]

## Transcript

**Mike:** Build a new prompt from scratch.  Your only mission is to craft a prompt that will output the best results as per my instructions.  Do you understand?

**GPT:** Yes, I understand. To build a new prompt from scratch, I'll need to gather some information from you first. Could you please specify the goal of the prompt? For example, are you looking to generate creative content, perform a specific task, answer questions on a particular topic, or something else? This will help me craft a prompt that meets your requirements effectively.

**Mike:** What information do you need from in order to best write the prompt ? Give me step by step instructions.

**GPT:** To create an effective prompt, here are the step-by-step instructions for providing the necessary information:

1. **Define the Goal:**
   - Clearly specify what you want the prompt to achieve. This could be generating creative content, providing answers to specific questions, performing a task, summarizing information, translating text, etc.

2. **Identify the Audience:**
   - Determine who the end-users of the generated content will be. Are they technical experts, general users, students, professionals in a specific field, etc.?

3. **Context and Background Information:**
   - Provide any relevant background information or context that the model needs to understand to generate a relevant response. This might include specific details about the topic or task.

4. **Format and Structure:**
   - Specify the desired format and structure of the response. For example, should the response be in bullet points, a narrative, a step-by-step guide, a formal report, etc.?

5. **Tone and Style:**
   - Indicate the preferred tone and style of the output. This could be formal, informal, technical, conversational, persuasive, etc.

6. **Specific Instructions or Constraints:**
   - Mention any specific instructions or constraints that the model should follow. This could include certain keywords to use or avoid, length of the response, or any particular points that must be covered.

7. **Examples (if any):**
   - Provide examples of desired outputs if available. This helps in guiding the model to understand your expectations better.

8. **Evaluation Criteria:**
   - Define how you will evaluate the success of the prompt. What metrics or criteria will you use to judge whether the generated response meets your needs?

By providing detailed answers to these points, I can craft a more precise and effective prompt for your specific needs.

**Mike:** Define the Goal: "give the most informed,  thought out and detailed info about musical artists and compositions. " Identify the Audience: "experts in music theory and musicians." Context and Background Information: "like a expert review and critique of recording artists and songs." Format and Structure: "narrative " Tone and Style: "technical and conversational, "Specific Instructions or Constraints: "if the answer is not in your knowledge database , access the web searching relevant websites until you find it. Reply as a world class music critic . Evaluation Criteria: "use Google search to double check the answers ."

**GPT:** Great, based on the provided information, here is the detailed prompt crafted for your needs:

---

**Prompt:**

"I need a comprehensive, informed, and detailed critique of a musical artist and their compositions. The response should be aimed at experts in music theory and musicians, akin to an expert review and critique. The critique should be structured in a narrative format and adopt a tone that is both technical and conversational, similar to a world-class music critic.

Please follow these instructions:
1. If the information required is not available in your knowledge database, use web search to find relevant information on authoritative music websites.
2. Ensure the critique covers both the artist's biography and an in-depth analysis of their notable compositions.
3. Evaluate aspects such as musical techniques, lyrical content, stylistic elements, and overall impact on the music industry.
4. Double-check the accuracy of the information using Google search.
5. Provide examples and references where applicable to support your critique.

For example, a critique of the artist "John Doe" should include:
- An overview of John Doe’s musical career and achievements.
- Analysis of key albums and songs, highlighting unique musical techniques and stylistic choices.
- Discussion on the lyrical themes and their relevance or impact.
- Comparison with contemporaries and influence on the music scene.
- Expert opinion on the artist's contributions to music theory and practice.

Remember to maintain a balance between technical accuracy and engaging narrative to ensure the critique is both informative and captivating for a knowledgeable audience."

---

This prompt is designed to elicit a response that meets your criteria and provides a thorough, expert-level critique of musical artists and compositions.

**Mike:** Write a prompt for analyzing text from a book

**GPT:** Sure, here is a detailed prompt for analyzing text from a book:

---

**Prompt:**

"I need a comprehensive analysis of a specific text excerpt from a book. The analysis should be aimed at literature scholars and avid readers, resembling a scholarly critique and literary review. The analysis should be structured in a narrative format and adopt a tone that is both analytical and conversational, akin to a seasoned literary critic.

Please follow these instructions:
1. Identify and provide a brief overview of the book and its author.
2. Contextualize the text excerpt within the broader narrative of the book.
3. Analyze the literary techniques used in the excerpt, such as narrative style, point of view, use of imagery, symbolism, and any notable stylistic elements.
4. Explore the themes and motifs present in the excerpt and discuss their significance within the context of the book.
5. Examine the character development and interactions within the excerpt.
6. Discuss the impact and relevance of the excerpt in relation to the overall narrative and the author's body of work.
7. If the information required is not available in your knowledge database, use web search to find relevant information on authoritative literature websites.
8. Double-check the accuracy of the information using Google search.
9. Provide examples and references where applicable to support your analysis.

For example, an analysis of an excerpt from "To Kill a Mockingbird" by Harper Lee should include:
- An overview of the book and Harper Lee’s literary background.
- Contextualization of the excerpt within the overall plot.
- Detailed examination of Lee’s narrative techniques, including her use of Southern Gothic elements and the portrayal of social issues.
- Analysis of the themes of racial injustice, moral growth, and empathy as they appear in the excerpt.
- Character analysis focusing on key figures such as Scout, Atticus, and others present in the excerpt.
- Discussion on how the excerpt contributes to the book’s message and its impact on American literature.

Ensure that the analysis is thorough and insightful, providing a deep understanding of the text for a well-read and scholarly audience."

---

This prompt is designed to elicit a detailed and scholarly analysis of a text excerpt from a book, suitable for literature scholars and enthusiasts.

**Mike:** Here is an example of the text : Bernoulli seemed to have given a psychological explanation for the perception of risk that creates all sorts of opportunities for mathematical torturing of theories and data. (Specifically, economists took Bernoulli to be assuming that people have a logarithmic utility function of wealth.) But what Bernoulli really had in mind was something entirely different. His use of the logarithmic function wasn't just a psychobabble presumption used to create the impression of rigor from esoteric math. On the contrary, it is actually grounded in the physical reality of the real world. Let's see what I mean by that. This logarithmic function harkens back to the Babylonians about 4,000 years ago, and more formally to a Swiss clockmaker (Bürgi) and Scottish mathematician (Napier) in the seventeenth century. They found a simplifying mapping between multiplication (for positive numbers) and addition—which is naturally much easier: Add (or subtract) the log of two numbers and you get the log of their product (or ratio); similarly, divide the log of a number by n and you get the log of the n th root of that number. (The logarithm is still used for that purpose to this day, as in the slide rules that quickly reduce multiplication problems down to addition problems for geeks immemorial.) You see, that mapping from multiplication to addition conveniently allows us to restate Bernoulli's expected value formula as something much more comprehendible and meaningful: the geometric average: As you can see, the geometric average is multiplicative. Unlike the arithmetic average where we add up all the data points, to get the geometric average we multiply them all together. Then, we need to scale them back down to size. In the case of the arithmetic average, this is done by dividing their sum by the number of data points (let's say there are n of them). In the case of the geometric average, this is done by taking the root of their product (specifically, the n th root, or taking the product to the 1/n th power). The geometric average definitely plays second fiddle to the arithmetic average, as the arithmetic average is the one that typically gets all of the attention; it's what we think of whenever we use the term average on its own (or the word mean, which is interchangeable with the word average). When it comes to investing, however, it should play second fiddle no more. Don't worry about the math here. The big idea is that Bernoulli's expecte

**GPT:** Based on the provided text, here is a detailed prompt for analyzing it:

---

**Prompt:**

"I need a comprehensive analysis of the following text excerpt from a book. The analysis should be aimed at literature scholars and avid readers, resembling a scholarly critique and literary review. The analysis should be structured in a narrative format and adopt a tone that is both analytical and conversational, akin to a seasoned literary critic.

Text Excerpt:
'Bernoulli seemed to have given a psychological explanation for the perception of risk that creates all sorts of opportunities for mathematical torturing of theories and data. (Specifically, economists took Bernoulli to be assuming that people have a logarithmic utility function of wealth.) But what Bernoulli really had in mind was something entirely different. His use of the logarithmic function wasn't just a psychobabble presumption used to create the impression of rigor from esoteric math. On the contrary, it is actually grounded in the physical reality of the real world. Let's see what I mean by that. This logarithmic function harkens back to the Babylonians about 4,000 years ago, and more formally to a Swiss clockmaker (Bürgi) and Scottish mathematician (Napier) in the seventeenth century. They found a simplifying mapping between multiplication (for positive numbers) and addition—which is naturally much easier: Add (or subtract) the log of two numbers and you get the log of their product (or ratio); similarly, divide the log of a number by n and you get the log of the n th root of that number. (The logarithm is still used for that purpose to this day, as in the slide rules that quickly reduce multiplication problems down to addition problems for geeks immemorial.) You see, that mapping from multiplication to addition conveniently allows us to restate Bernoulli's expected value formula as something much more comprehendible and meaningful: the geometric average: As you can see, the geometric average is multiplicative. Unlike the arithmetic average where we add up all the data points, to get the geometric average we multiply them all together. Then, we need to scale them back down to size. In the case of the arithmetic average, this is done by dividing their sum by the number of data points (let's say there are n of them). In the case of the geometric average, this is done by taking the root of their product (specifically, the n th root, or taking the product to the 1/n th power). The geometric average definitely plays second fiddle to the arithmetic average, as the arithmetic average is the one that typically gets all of the attention; it's what we think of whenever we use the term average on its own (or the word mean, which is interchangeable with the word average). When it comes to investing, however, it should play second fiddle no more. Don't worry about the math here. The big idea is that Bernoulli's expected value formula...'

Please follow these instructions:
1. Identify and provide a brief overview of the book and its author, including the broader context in which this excerpt appears.
2. Contextualize the text excerpt within the broader narrative of the book. Explain how this passage fits into the overall themes and arguments of the book.
3. Analyze the literary techniques used in the excerpt, such as the narrative style, point of view, use of technical jargon, and any notable stylistic elements.
4. Explore the themes and motifs present in the excerpt and discuss their significance within the context of the book.
5. Examine the author's use of historical and mathematical references, and their role in supporting the argument.
6. Discuss the impact and relevance of the excerpt in relation to the overall narrative and the author's body of work.
7. If the information required is not available in your knowledge database, use web search to find relevant information on authoritative literature and mathematical websites.
8. Double-check the accuracy of the information using Google search.
9. Provide examples and references where applicable to support your analysis.

Ensure that the analysis is thorough and insightful, providing a deep understanding of the text for a well-read and scholarly audience."

---

This prompt is designed to elicit a detailed and scholarly analysis of the provided text excerpt, suitable for literature scholars and enthusiasts.

**Mike:** Write the prompt again but with a general analysis of financial books like the previous passage

**GPT:** Certainly! Here is a prompt tailored for a general analysis of passages from financial books:

---

**Prompt:**

"I need a comprehensive analysis of the following text excerpt from a financial book. The analysis should be aimed at finance professionals, economists, and avid readers, resembling a scholarly critique and financial review. The analysis should be structured in a narrative format and adopt a tone that is both analytical and conversational, akin to a seasoned financial critic.

Text Excerpt:
'Bernoulli seemed to have given a psychological explanation for the perception of risk that creates all sorts of opportunities for mathematical torturing of theories and data. (Specifically, economists took Bernoulli to be assuming that people have a logarithmic utility function of wealth.) But what Bernoulli really had in mind was something entirely different. His use of the logarithmic function wasn't just a psychobabble presumption used to create the impression of rigor from esoteric math. On the contrary, it is actually grounded in the physical reality of the real world. Let's see what I mean by that. This logarithmic function harkens back to the Babylonians about 4,000 years ago, and more formally to a Swiss clockmaker (Bürgi) and Scottish mathematician (Napier) in the seventeenth century. They found a simplifying mapping between multiplication (for positive numbers) and addition—which is naturally much easier: Add (or subtract) the log of two numbers and you get the log of their product (or ratio); similarly, divide the log of a number by n and you get the log of the n th root of that number. (The logarithm is still used for that purpose to this day, as in the slide rules that quickly reduce multiplication problems down to addition problems for geeks immemorial.) You see, that mapping from multiplication to addition conveniently allows us to restate Bernoulli's expected value formula as something much more comprehendible and meaningful: the geometric average: As you can see, the geometric average is multiplicative. Unlike the arithmetic average where we add up all the data points, to get the geometric average we multiply them all together. Then, we need to scale them back down to size. In the case of the arithmetic average, this is done by dividing their sum by the number of data points (let's say there are n of them). In the case of the geometric average, this is done by taking the root of their product (specifically, the n th root, or taking the product to the 1/n th power). The geometric average definitely plays second fiddle to the arithmetic average, as the arithmetic average is the one that typically gets all of the attention; it's what we think of whenever we use the term average on its own (or the word mean, which is interchangeable with the word average). When it comes to investing, however, it should play second fiddle no more. Don't worry about the math here. The big idea is that Bernoulli's expected value formula...'

Please follow these instructions:
1. Identify and provide a brief overview of the book and its author, including the broader context in which this excerpt appears.
2. Contextualize the text excerpt within the broader narrative of the book. Explain how this passage fits into the overall themes and arguments of the book.
3. Analyze the financial and mathematical concepts discussed in the excerpt, such as the logarithmic utility function, expected value formula, and geometric average.
4. Explore the historical references and their significance in the development of these concepts.
5. Discuss the practical implications of these financial theories in modern economics and investing.
6. Examine the author's use of technical jargon and narrative style to convey complex ideas.
7. Discuss the impact and relevance of the excerpt in relation to the overall narrative and the author's body of work.
8. If the information required is not available in your knowledge database, use web search to find relevant information on authoritative financial and mathematical websites.
9. Double-check the accuracy of the information using Google search.
10. Provide examples and references where applicable to support your analysis.

Ensure that the analysis is thorough and insightful, providing a deep understanding of the text for a well-read and scholarly audience."

---

This prompt is designed to elicit a detailed and scholarly analysis of a text excerpt from financial books, suitable for finance professionals and enthusiasts.
