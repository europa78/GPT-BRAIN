---
title: "Auto-GPT Development Guide."
date: 2023-04-17
cluster: "Claude Code / Agents"
messages: 8
source: chatgpt-export conversations.json (FULL transcript)
---

# Auto-GPT Development Guide.

> 8 messages · 2023-04-17 · cluster: Claude Code / Agents

**Semantic neighbors:** [[LangChain_5-14]] · [[Auto-GPT AI Development]] · [[Sales Agent Agreement Draft]] · [[Sales Agent Job Posting]]

## Transcript

**Mike:** execute as a high level developmental engineer :  What Is Auto-GPT?
Auto-GPT is an experimental open-source project that allows you to define a specific role (e.g., “book market analyst”) and a bunch of goals (e.g., “research the most successful sci-fi novels of 2022”, “summarize them”, “save the summary to a file," etc.) and let GPT-4 automatically create and perform all the necessary tasks that are needed to achieve your goals. That includes:

doing research via search engines
browse websites
scrape data
store files locally
using long-term memory
spawning new instances of GPT-3.5 bots with special roles to accomplish sub-tasks (!)
(No worries, if you don’t have access to GPT-4 you can also run it with your GPT-3.5 API keys)

The results you get are mind-blowing.

AutoGPT is an experimental project, that is, it has its bugs and flaws, especially when faced with new and not-so-common roles and goal descriptions, but it’s already a tremendous showcase of GPT-4’s capabilities and the potential of a modular approach to combine multiple AI agents.

How To Setup Auto-GPT
Prerequisites
a) Python 3.8 or later (here’s how you install Python on Windows, to update your Mac’s preinstalled Python version go here)

b) OpenAI API keys (if you have an account with OpenAI, you’ll find them here; if you don’t have an OpenAI account, follow these instructions)

1. Get the code
EDIT: Make sure you download the “stable” branch! The “master” branch may often be in a broken state.

If you have GIT installed on your computer, simply run this in your terminal:

git clone https://github.com/Torantulino/Auto-GPT.git
Alternatively, you can download the ZIP file of the source code here. In the top right corner, click Code and then Download Zip (make sure you select the “Stable” branch on the left)


Download ZIP from Github
2. Install the libraries
Navigate to the directory where your copy of Auto-GPT resides (it’s called “Auto-GPT”) and run it.

pip install -r requirements.txt
This will install all the required libraries.

3. Add API Keys
Then rename the file

.env.template

to

.env

and fill in your OPENAI_API_KEY.

Optionally, you can also add Pinecone and ElevenLabs API keys for Vectorstore and Speech Mode.

4. Run Auto-GPT
You’re set to take Auto-GPT out for a test run. In the project folder (“Auto-GPT”) type

python -m autogpt
If you do not have access to GPT-4 or don’t want to use it, run the following command instead.

python -m autogpt --gpt3only
The first thing you will be asked is whether you want to continue with the last AI agent you created. Type “y” if you want to give that a try or “n” to create a new one.



Once you decided to create a new one, give it a name and describe its role.


Next, you’ll give it a bunch of goals (up to five).

From this moment on, Auto-GPT will do its thing and occasionally ask you to authorize its next steps.


You can then choose to agree with “y”, agree to run multiple commands without asking for permission with “y -N” (N=number of commands it can run on its own), or type “n” to exit.

If you type anything else, Auto-GPT will consider this as human feedback and evaluate it as such.

5. Check The Results
To check Auto-GPT’s results, you can either have a look at its log files in the folder “/outputs/logs” or check the files it created in “/auto_gpt_workspace”.

**GPT:** It seems that you are interested in the Auto-GPT project, an experimental open-source project that allows you to define specific roles and goals, and let GPT-4 automatically create and perform all the necessary tasks needed to achieve those goals.

To set up Auto-GPT, follow these steps:

1. Ensure you have Python 3.8 or later installed and OpenAI API keys.
2. Get the code: clone the Git repository from https://github.com/Torantulino/Auto-GPT.git or download the ZIP file.
3. Install the required libraries by running `pip install -r requirements.txt` in the Auto-GPT directory.
4. Rename the `.env.template` file to `.env` and fill in your OPENAI_API_KEY. You can also add Pinecone and ElevenLabs API keys if you have them.
5. Run Auto-GPT with the command `python -m autogpt` or `python -m autogpt --gpt3only` if you want to use GPT-3.5.
6. Follow the prompts to create a new AI agent or continue with an existing one, define the agent's role, and set up to five goals.
7. Auto-GPT will start working on the tasks, occasionally asking for authorization for its next steps.
8. Check the results in the `/outputs/logs` folder or the files created in `/auto_gpt_workspace`.

Please note that Auto-GPT is an experimental project, and it may have some bugs and flaws, especially when dealing with new or uncommon roles and goal descriptions. However, it showcases the potential of GPT-4 and a modular approach to combining multiple AI agents.

**Mike:** how long can I run the application using GPT-3.5?

**GPT:** The duration for which you can run the Auto-GPT application using GPT-3.5 depends on several factors, including:

1. The number and complexity of tasks you assign to the AI agent.
2. The rate limits associated with your OpenAI API subscription.

OpenAI offers different subscription tiers, each with its own rate limits. For example, the free trial tier might have limitations in terms of the number of tokens you can process per minute, whereas higher tiers will have more generous limits.

To ensure that you can run the application without interruptions, make sure to monitor your API usage and stay within the limits of your subscription. Keep in mind that the Auto-GPT project is experimental, and your experience may vary depending on the tasks and goals you assign to the AI agent.

**Mike:** how do you monitor your API usage?

**GPT:** To monitor your API usage with OpenAI, you can follow these steps:

1. Log in to your OpenAI account on the OpenAI website (https://beta.openai.com/).

2. Navigate to the Dashboard or API Usage section (depending on the platform's current layout).

3. In the Dashboard or API Usage section, you will typically find details about your API usage, including:

   - The number of tokens processed during a specific time period (e.g., this month, last month).
   - The number of API calls made.
   - A breakdown of usage by endpoint, if applicable.

These metrics will help you track your API consumption and ensure that you stay within the limits of your subscription plan.

Additionally, when you make API calls using the OpenAI Python library, you can often find information about your API usage in the response headers. For example:

```python
import openai

openai.api_key = "your_api_key"

response = openai.Completion.create(engine="text-davinci-002", prompt="example prompt", max_tokens=5)

usage = response["usage"]
print("Usage: ", usage)
```

This code snippet demonstrates how to retrieve the usage details from the API response. The `usage` object contains information such as the number of tokens used in the API call and the total tokens used for the current billing period.

By regularly checking your API usage, you can ensure that you don't exceed your subscription's rate limits while running applications like Auto-GPT with GPT-3.5.

**Mike:** it says I was granted $18 and that it expired.

**GPT:** If you received a message stating that you were granted an amount, like $18, for your OpenAI API usage and that it has expired, it likely means that you had access to a promotional credit or a free trial that provided a specific dollar amount worth of API usage for a limited period. Once the credit is exhausted or the trial period ends, you would need to sign up for a paid subscription to continue using the OpenAI API.

To sign up for a subscription plan, follow these steps:

1. Log in to your OpenAI account on the OpenAI website (https://beta.openai.com/).

2. Navigate to the Billing or Pricing section (depending on the platform's current layout).

3. Choose a subscription plan that fits your needs and budget. Subscription plans may vary in terms of token limits, rate limits, and access to specific features.

4. Enter your payment information and complete the subscription process.

Once you have successfully subscribed to a plan, you can continue using the OpenAI API and run applications like Auto-GPT with GPT-3.5 within the limits of your chosen subscription.
