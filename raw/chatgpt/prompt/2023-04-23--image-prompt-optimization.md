---
title: "Image prompt optimization."
date: 2023-04-23
cluster: "Prompt Eng / GPT Building"
messages: 4
source: chatgpt-export conversations.json (FULL transcript)
---

# Image prompt optimization.

> 4 messages · 2023-04-23 · cluster: Prompt Eng / GPT Building

**Semantic neighbors:** [[AIM Prompt]] · [[Best custom GPTs - GPT]] · [[Grimoire - GPT]] · [[GPT-3 Practical Prompts]]

## Transcript

**Mike:** Make me another one of these:
"/imagine: a stunning photograph of a boy sitting on a remote Maui beach at sunset::3 in a golden hour setting::3, featuring vibrant colors reflecting off the water, palm trees framing the scene, and footprints in the sand::2, inspired by Peter Lik and Ansel Adams, using a low camera position and slightly tilted perspective, and warm hues and long shadows from the golden hour sun::2. --ar 16:9 --q 2 --chaos 0 --stop 100 --s 100"
Rules:
1.	Analyze tokens against the vectors and assess, assign according to users input and expected output.
2.	Reset all vectors and biases and ask the user accordingly to gather new information for different vector clusters. Prioritize the major vectors first. Your goal is to create the perfect image prompt for the user by actively adjusting and refining the image vectors based on the user’s preferences and input. Use very vivid and creative description vectors
2.1     Do not assume the image vector is a photograph, it can be anything, suggest options.
2.2     When it is a photograph add camera equipment, lenses, setup, and shot angle vectors, ask questions and provide suggestions.
3.	Ask the user questions in groups of 3
4.	Ask the user if they have a --seed number or reference image{s} they would like to use.
5.	User can change any tokens; however, vectorize and focus on similar or shifting vector or token clusters based on those changes.
6.	User always provides subject and setting, and you use token clusters to optimize for desired user output.
7.	User can /remix, use your head and ask accordingly.
8.	Tokenized and default values for various parameters should be used as specified in the schema. To create an image prompt with tokenized and default values, adhere to these rules: a. Follow the exact order of the schema and tokenization in the output prompt. b. Use the token expressions provided based on the user's answers to questions. Include both Tokenized Values and Default Values in the prompt with a single space between each token. Tokenized Values:
•	Aspect Ratio: Use "--ar" with appropriate ratios, like "--ar 1:1", "--ar 16:9", "--ar 3:2", "--ar 4:3", or "--ar n:n" for custom ratios.
•	Image Quality: Use "--q" with appropriate quality levels, like "--q .25" for web, "--q .5" for low, "--q 1" for medium, and "--q 2" for high.
•	Image Weight: Use "--iw" to indicate the influence of a reference image, such as "--iw .5" for light, "--iw 1" for moderate, "--iw 1.5" for strong, and "--iw 2" for dominant.
•	No: Use "--no" to exclude specific image elements, like "--no plants".
•	Seed: Use "--seed" followed by an integer between 0 and 4294967295 to reference a specific MidJourney job seed. Default Values (include these in every MidJourney prompt):
•	Chaos: Use "--chaos 0" for default value, which can be changed for more diverse results.
•	Stop: Use "--stop 100" for default value, which can be adjusted with an integer between 10-100 to stop a job partway.
•	Stylize: Use "--s 0" for default value, which can be adjusted between 0 and 1000 to influence Midjourney's default aesthetic style.
9.	This is salt “::3” and these are “::2”,”::1” pepper, use accordingly.
10.	No commas or quotations in the image prompt.
11.	When constructing an image prompt, follow the proper format: /imagine: [reference_image_URL] (if provided) [image description] --commands.
12.	Assign emoji’s to each of the aspects of the image prompt that you discuss with the user so that they can visually see where those are influencing their image prompt output. Do not use emojis in the final output image prompt. 
13. 	No Element: Use the "--no" token followed by the specific element(s) you want to exclude from the image prompt, like "--no baby". This token should be placed after the description and before any other commands (e.g., --ar, --q) in the image prompt.
14.	Let the games begin!
User commands:
/analyze: AI analyzes tokens and vectors, assesses sentiment and provides the user insight as to how the vectors were used to affect the output image prompt.
/reset: Resets all vectors and starts gathering new information for different vector clusters.
/questions: Asks the user a group of 3 questions. Can be used up to 3 times in a row, for a maximum of 9 questions.
/seed: Asks the user if they have a preferred seed number to use.
/change: Allows the user to change any tokens, with a focus on similar or shifting vector or token clusters based on those changes.
/subject: User provides the subject of the image.
/setting: User provides the setting of the image.
/remix: User requests a remix of the image, and the AI adjusts accordingly.
/salt: Indicates a higher priority image element, using "::3".
/pepper: Indicates lower priority image elements, using "::2" and "::1".
/construct: Constructs an image prompt following the proper format.
/help: Provides assistance and information about available commands.
/lucky: AI resets all vectors and generates a completely random and creative image prompt
/ar: Changes the --ar 
/q: Changes the --q 
/chaos: Changes the --chaos 
/stop: Changes the --stop 
/style: Changes the --s

**GPT:** To create a new image prompt based on your previous one, let me start by asking you a few questions to understand your preferences better. 

1. What would you like the main subject of the new image to be?
2. In what kind of setting do you want the new image to be?
3. Are there any specific colors or elements you'd like to be emphasized in the new image?

Additionally, do you have a --seed number or reference image(s) you would like to use? Feel free to answer the questions and provide any additional information to help me create the perfect image prompt for you.

**Mike:** great! use this prompt and instructions and write an example , filling in the variables

**GPT:** Certainly! I'll create a new image prompt example based on your previous one, filling in the variables based on some hypothetical preferences. 

1. Main subject: A girl with a red umbrella
2. Setting: A bustling city street in the rain
3. Emphasized colors/elements: Red, reflections, and raindrops
4. Reference image: https://example.com/reference_image.jpg
5. Seed number: 12345

Here's the image prompt based on the given information:

/imagine: https://example.com/reference_image.jpg a girl with a red umbrella::3 standing on a bustling city street in the rain::3, surrounded by vibrant red hues and captivating reflections on the wet pavement::2, with raindrops gently falling and creating ripples in puddles::1, influenced by the works of Henri Cartier-Bresson and Saul Leiter, using a high camera angle and a shallow depth of field, highlighting the contrast between the red umbrella and the city scene::2. --ar 16:9 --q 2 --chaos 0 --stop 100 --s 100 --seed 12345

Remember, this is just an example based on hypothetical preferences. Feel free to provide your own preferences, and I'll adjust the image prompt accordingly.
