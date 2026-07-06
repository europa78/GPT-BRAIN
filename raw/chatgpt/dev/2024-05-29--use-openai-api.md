---
title: "Use OpenAI API"
date: 2024-05-29
cluster: "Coding / Dev / Infra"
messages: 4
source: chatgpt-export conversations.json (FULL transcript)
---

# Use OpenAI API

> 4 messages · 2024-05-29 · cluster: Coding / Dev / Infra

**Semantic neighbors:** [[Google Sheet Custom Functions]] · [[Economic Calendar for June]] · [[Create Google Sheet Script]] · [[ChatGPT Functions for Sheets]]

## Transcript

**Mike:** How to use OpenAI API?

**GPT:** To use the OpenAI API, follow these steps:

### 1. Account Setup
First, create an OpenAI account or sign in if you already have one. You can do this [here](https://platform.openai.com/signup).

### 2. Generate an API Key
Navigate to the [API keys page](https://platform.openai.com/account/api-keys) and create a new secret key. This key will be used to authenticate your API requests.

### 3. Install the OpenAI SDK
You can interact with the OpenAI API using various programming languages. Here are instructions for Python and Node.js:

#### Python:
Install the OpenAI Python library using pip:
```bash
pip install openai
```

#### Node.js:
Install the OpenAI Node.js library using npm:
```bash
npm install openai
```

### 4. Making Your First API Request
Here is an example of making an API request using Python:

```python
import openai

openai.api_key = 'your-api-key'

response = openai.Completion.create(
  engine="text-davinci-003",
  prompt="Say this is a test",
  max_tokens=5
)

print(response.choices[0].text.strip())
```

And here is an example using Node.js:

```javascript
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

(async () => {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "Say this is a test",
    max_tokens: 5,
  });
  console.log(response.data.choices[0].text.trim());
})();
```

### 5. Understanding the API Response
The response from the API will include various details, but the most important part is the `choices` array, where each choice contains the generated text.

### 6. Handling API Authentication
Make sure to keep your API key secure and do not expose it in client-side code. Use environment variables or a key management service to load the API key securely in your application.

For detailed information and additional functionalities, refer to the [OpenAI API documentation](https://platform.openai.com/docs/api-reference)【10:0†source】【10:2†source】【10:16†source】.

**Mike:** Can I make an API call with a custom GPt?

**GPT:** Yes, you can make API calls with a custom GPT. This involves defining custom actions that your GPT can perform by integrating third-party APIs. Here’s how you can set up and use custom API calls with a custom GPT:

### Steps to Integrate Custom API Calls

#### 1. Define Custom Actions
In the GPT Editor, you can define custom actions that specify how your GPT will interact with third-party APIs. This involves providing details about the endpoints, parameters, and how the GPT should use them.

#### 2. Configure Custom Actions
Go to the `Configure` tab in the GPT Editor and set up your custom actions. Here’s what you need to do:

1. **Action Name:** Provide a name for your custom action.
2. **Description:** Describe what the action does.
3. **Endpoint:** Specify the API endpoint URL.
4. **HTTP Method:** Choose the appropriate HTTP method (GET, POST, etc.).
5. **Parameters:** Define the parameters that will be sent with the API request.

#### Example:
Suppose you want your GPT to fetch weather data. You could define a custom action like this:

- **Action Name:** `get_weather`
- **Description:** Fetches current weather data for a specified location.
- **Endpoint:** `https://api.openweathermap.org/data/2.5/weather`
- **HTTP Method:** `GET`
- **Parameters:**
  - `q`: The city name (e.g., `London`)
  - `appid`: Your API key for the weather service

#### 3. Use the Custom Action in Your GPT
Once the custom action is configured, you can instruct your GPT to use it. Here’s an example of how to prompt the GPT to fetch weather data:

```plaintext
GPT: Can you get the weather for London?

Response:
Sure, I will fetch the weather data for London.
```

#### 4. Handle the Response
The GPT will process the API response and present the relevant information to the user. You can format the response in a user-friendly way.

### Example Code to Integrate Custom API
Here is an example of how you might define a custom action in the GPT's configuration:

```json
{
  "actions": [
    {
      "name": "get_weather",
      "description": "Fetches current weather data for a specified location.",
      "endpoint": "https://api.openweathermap.org/data/2.5/weather",
      "method": "GET",
      "params": {
        "q": "{city}",
        "appid": "your_openweathermap_api_key"
      }
    }
  ]
}
```

### Tips for Custom API Integration
- **Security:** Ensure that API keys and sensitive data are handled securely. Do not hard-code them in the client-side code.
- **Testing:** Test the custom actions thoroughly to ensure they work as expected.
- **Error Handling:** Implement error handling to manage API call failures gracefully.

For more detailed instructions and advanced settings, refer to the [OpenAI Help Center](https://help.openai.com)【7†source】.
