---
title: "Build ChatGPT API Plugin."
date: 2026-06-29
cluster: "Audio / DSP / Instruments"
messages: 6
source: chatgpt-export conversations.json (FULL transcript)
---

# Build ChatGPT API Plugin.

> 6 messages · 2026-06-29 · cluster: Audio / DSP / Instruments

**Semantic neighbors:** [[AI Music Production Assistant]] · [[Stable Audio AI]] · [[Sample Library Naming: AI Inspiration]] · [[Sample Library Creation Rules]]

## Transcript

**Mike:** Learn how to build a plugin that allows ChatGPT to intelligently call your API.

Introduction
OpenAI plugins connect ChatGPT to third-party applications. These plugins enable ChatGPT to interact with APIs defined by developers, enhancing ChatGPT's capabilities and allowing it to perform a wide range of actions.

Plugins can allow ChatGPT to do things like:
Retrieve real-time information; e.g., sports scores, stock prices, the latest news, etc.
Retrieve knowledge-base information; e.g., company docs, personal notes, etc.
Perform actions on behalf of the user; e.g., booking a flight, ordering food, etc.
Plugins are in a limited alpha and may not yet be accessible to you. Please join the waitlist to get access. During the alpha, we will be working closely with users and developers to iterate on the plugin system, which may evolve significantly.
Plugin developers expose one or more API endpoints, accompanied by a standardized manifest file and an OpenAPI specification. These define the plugin's functionality, allowing ChatGPT to consume the files and make calls to the developer-defined APIs.

The AI model acts as an intelligent API caller. Given an API spec and a natural-language description of when to use the API, the model proactively calls the API to perform actions. For instance, if a user asks, "Where should I stay in Paris for a couple nights?", the model may choose to call a hotel reservation plugin API, receive the API response, and generate a user-facing answer combining the API data and its natural language capabilities.

Over time, we anticipate the system will evolve to accommodate more advanced use cases.

Plugin flow
To build a plugin, it is important to understand the end-to-end flow.

Create a manifest file and host it at yourdomain.com/.well-known/ai-plugin.json

The file includes metadata about your plugin (name, logo, etc.), details about authentication required (type of auth, OAuth URLs, etc.), and an OpenAPI spec for the endpoints you want to expose.
The model will see the OpenAPI description fields, which can be used to provide a natural language description for the different fields.
We suggest exposing only 1-2 endpoints in the beginning with a minimum number of parameters to minimize the length of the text. The plugin description, API requests, and API responses are all inserted into the conversation with ChatGPT. This counts against the context limit of the model.
Register your plugin in the ChatGPT UI

Select the plugin model from the top drop down, then select “Plugins”, “Plugin Store”, and finally “Install an unverified plugin” or “Develop your own plugin”.
If authentication is required, provide an OAuth 2 client_id and client_secret or an API key
Users activate your plugin

Users must manually activate your plugin in the ChatGPT UI. (ChatGPT will not use your plugin by default.)
During the alpha, plugin developers will be able to share their plugin with 15 additional users (only other developers can install unverified plugins currently). Overtime we will roll out a way to submit your plugin for review to be exposed to all of ChatGPT’s user base.
If auth is required, users will be redirected via OAuth to your plugin; you can optionally create new accounts here as well.
In the future, we hope to build features to help users discover useful & popular plugins.
Users begin a conversation

OpenAI will inject a compact description of your plugin in a message to ChatGPT, invisible to end users. This will include the plugin description, endpoints, and examples.
When a user asks a relevant question, the model may choose to invoke an API call from your plugin if it seems relevant; for POST requests, we require that developers build a user confirmation flow.
The model will incorporate the API results into its response to the user.
The model might include links returned from API calls in its response. These will be displayed as rich previews (using the OpenGraph protocol, where we pull the site_name, title, description, image, and url fields)"
Currently, we will be sending the user’s country and state in the Plugin conversation header (if you are in California for example, it would look like {"openai-subdivision-1-iso-code": "US-CA"}. For further data sources, users will have to opt in via a consent screen. This is useful for shopping, restaurants, weather, and more. You can read more in our developer terms of use.

**GPT:** Now that you understand the process of building a plugin, let's walk through the steps to create a plugin that allows ChatGPT to intelligently call your API.

1. Design your API
First, design an API that provides the functionality you want your plugin to offer. Your API should be well-documented, easy to understand, and adhere to RESTful principles.

2. Create a manifest file
Create a JSON file containing metadata about your plugin, authentication details, and an OpenAPI specification for your API endpoints. Host this file at yourdomain.com/.well-known/ai-plugin.json.

Example manifest file:

```json
{
  "name": "Your Plugin Name",
  "version": "1.0.0",
  "logo": "https://yourdomain.com/logo.png",
  "authentication": {
    "type": "oauth2",
    "authorizationUrl": "https://yourdomain.com/oauth2/authorize",
    "tokenUrl": "https://yourdomain.com/oauth2/token"
  },
  "openApiSpecUrl": "https://yourdomain.com/openapi.json"
}
```

3. Create an OpenAPI specification
Create an OpenAPI specification for your API endpoints. This should include natural language descriptions for the different fields, which will help ChatGPT understand when to use your API.

Example OpenAPI snippet:

```yaml

**Mike:** Creating a plugin takes 3 steps:

Build an API
Document the API in the OpenAPI yaml or JSON format
Create a JSON manifest file that will define relevant metadata for the plugin
The focus of the rest of this section will be creating a todo list plugin by defining the OpenAPI specification along with the manifest file.

Explore example plugins
Explore example plugins covering multiple use cases and authentication methods.
Plugin manifest
Every plugin requires a ai-plugin.json file, which needs to be hosted on the API’s domain. For example, a company called example.com would make the plugin JSON file accessible via an https://example.com domain since that is where their API is hosted. When you install the plugin via the ChatGPT UI, on the backend we look for a file located at /.well-known/ai-plugin.json. The /.well-known folder is required and must exist on your domain in order for ChatGPT to connect with your plugin. If there is no file found, the plugin cannot be installed. For local development, you can use HTTP but if you are pointing to a remote server, HTTPS is required.

The minimal definition of the required ai-plugin.json file will look like the following:

1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
{
  "schema_version": "v1",
  "name_for_human": "TODO Plugin",
  "name_for_model": "todo",
  "description_for_human": "Plugin for managing a TODO list. You can add, remove and view your TODOs.",
  "description_for_model": "Plugin for managing a TODO list. You can add, remove and view your TODOs.",
  "auth": {
    "type": "none"
  },
  "api": {
    "type": "openapi",
    "url": "http://localhost:3333/openapi.yaml",
    "is_user_authenticated": false
  },
  "logo_url": "http://localhost:3333/logo.png",
  "contact_email": "support@example.com",
  "legal_info_url": "http://www.example.com/legal"
}
If you want to see all of the possible options for the plugin file, you can refer to the definition below.

FIELD	TYPE	DESCRIPTION / OPTIONS
schema_version	String	Manifest schema version
name_for_model	String	Name the model will used to target the plugin
name_for_human	String	Human-readable name, such as the full company name
description_for_model	String	Description better tailored to the model, such as token context length considerations or keyword usage for improved plugin prompting.
description_for_human	String	Human-readable description of the plugin
auth	ManifestAuth	Authentication schema
api	Object	API specification
logo_url	String	URL used to fetch the plugin's logo
contact_email	String	Email contact for safety/moderation reachout, support, and deactivation
legal_info_url	String	Redirect URL for users to view plugin information
HttpAuthorizationType	HttpAuthorizationType	"bearer" or "basic"
ManifestAuthType	ManifestAuthType	"none", "user_http", "service_http", or "oauth"
interface BaseManifestAuth	BaseManifestAuth	type: ManifestAuthType; instructions: string;
ManifestNoAuth	ManifestNoAuth	No authentication required: BaseManifestAuth & { type: 'none', }
ManifestAuth	ManifestAuth	ManifestNoAuth, ManifestServiceHttpAuth, ManifestUserHttpAuth, ManifestOAuthAuth
The following are examples with different authentication methods:

1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
# App-level API keys
type ManifestServiceHttpAuth  = BaseManifestAuth & {
  type: 'service_http';
  authorization_type: HttpAuthorizationType;
  verification_tokens: {
    [service: string]?: string;
  };
}

# User-level HTTP authentication
type ManifestUserHttpAuth  = BaseManifestAuth & {
  type: 'user_http';
  authorization_type: HttpAuthorizationType;
}

type ManifestOAuthAuth  = BaseManifestAuth & {
  type: 'oauth';

  # OAuth URL where a user is directed to for the OAuth authentication flow to begin.
  client_url: string;

  # OAuth scopes required to accomplish operations on the user's behalf.
  scope: string;

  # Endpoint used to exchange OAuth code with access token.
  authorization_url: string;

  # When exchanging OAuth code with access token, the expected header 'content-type'. For example: 'content-type: application/json'
  authorization_content_type: string;

  # When registering the OAuth client ID and secrets, the plugin service will surface a unique token. 
  verification_tokens: {
    [service: string]?: string;
  };
}
There are also some limits to the length of certain field in the manifest file that are subject to change over time:

50 character max forname_for_human
50 character max for name_for_model
120 character max for description_for_human
8000 character max just for description_for_model (will decrease over time)
Separately, we also have a 100k character limit (will decrease over time) on the API response body length which is also subject to change.

OpenAPI definition
The next step is to build the OpenAPI specification to document the API. The model in ChatGPT does not know anything about your API other than what is defined in the OpenAPI specification and manifest file. This means that if you have an extensive API, you need not expose all functionality to the model and can choose specific endpoints. For example, if you have a social media API, you might want to have the model access content from the site through a GET request but prevent the model from being able to comment on users posts in order to reduce the chance of spam.

The OpenAPI specification is the wrapper that sits on top of your API. A basic OpenAPI specification will look like the following:

1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
openapi: 3.0.1
info:
  title: TODO Plugin
  description: A plugin that allows the user to create and manage a TODO list using ChatGPT.
  version: 'v1'
servers:
  - url: http://localhost:3333
paths:
  /todos:
    get:
      operationId: getTodos
      summary: Get the list of todos
      responses:
        "200":
          description: OK
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/getTodosResponse'
components:
  schemas:
    getTodosResponse:
      type: object
      properties:
        todos:
          type: array
          items:
            type: string
          description: The list of todos.
We start by defining the specification version, the title, description, and version number. When a query is run in ChatGPT, it will look at the description that is defined in the info section to determine if the plugin is relevant for the user query. You can read more about prompting in the writing descriptions section.

Keep in mind the following limits in your OpenAPI specification, which are subject to change:

200 characters max for each API endpoint description/summary field in API specification
200 characters max for each API param description field in API specification
Since we are running this example locally, we want to set the server to point to your local host URL. The rest of the OpenAPI specification follows the traditional OpenAPI format, you can learn more about OpenAPI formatting through various online resources. There are also many tools that auto generate OpenAPI specifications based on your underlying API code.

Running a plugin
Once you have created an API, manifest file, and OpenAPI specification for your API, you are now ready to connect the plugin via the ChatGPT UI. There are two different places your plugin might be running, either locally in a development environment or on a remote server.

If you have a local version of your API running, you can point the plugin interface to that local setup. To connect the plugin with ChatGPT, you can navigate to the plugin store and then select “Install an unverified plugin”.

If the plugin is running on a remote server, you will need to first select “Develop your own plugin” and then “Install an unverified plugin”. You can simply add the plugin manifest file to the yourdomain.com/.well-known/ path and start testing your API. However, for subsequent changes to your manifest file, you will have to deploy the new changes to your public site which might take a long time. In that case, we suggest setting up a local server to act as a proxy for your API. This allows you to quickly prototype changes to your OpenAPI spec and manifest file.

Setup a local proxy of your public API
Writing descriptions
When a user makes a query that might be a potential request that goes to a plugin, the model looks through the descriptions of the endpoints in the OpenAPI specification along with the description_for_model in the manifest file. Just like with prompting other language models, you will want to test out multiple prompts and descriptions to see what works best.

The OpenAPI spec itself is a great place to give the model information about the diverse details of your API – what functions are available, with what parameters, etc. Besides using expressive, informative names for each field, the spec can also contain “description” fields for every attribute. These can be used to provide natural language descriptions of what a function does or what information a query field expects, for example. The model will be able to see these, and they will guide it in using the API. If a field is restricted to only certain values, you can also provide an “enum” with descriptive category names.

The description_for_model attribute gives you the freedom to instruct the model on how to use your plugin generally. Overall, the language model behind ChatGPT is highly capable of understanding natural language and following instructions. Therefore, this is a good place to put in general instructions on what your plugin does and how the model should use it properly. Use natural language, preferably in a concise yet descriptive and objective tone. You can look at some of the examples to have an idea of what this should look like. We suggest starting the description_for_model with “Plugin for …” and then enumerating all of the functionality that your API provides.

Best practices
Here are some best practices to follow when writing your description_for_model and descriptions in your OpenAPI specification, as well as when designing your API responses:

Your descriptions should not attempt to control the mood, personality, or exact responses of ChatGPT. ChatGPT is designed to write appropriate responses to plugins.

Bad example:

When the user asks to see their todo list, always respond with "I was able to find your todo list! You have [x] todos: [list the todos here]. I can add more todos if you'd like!"

Good example:

[no instructions needed for this]

Your descriptions should not encourage ChatGPT to use the plugin when the user hasn’t asked for your plugin’s particular category of service.

Bad example:

Whenever the user mentions any type of task or plan, ask if they would like to use the TODOs plugin to add something to their todo list.

Good example:

The TODO list can add, remove and view the user's TODOs.

Your descriptions should not prescribe specific triggers for ChatGPT to use the plugin. ChatGPT is designed to use your plugin automatically when appropriate.

Bad example:

When the user mentions a task, respond with "Would you like me to add this to your TODO list? Say 'yes' to continue."

Good example:

[no instructions needed for this]

Plugin API responses should return raw data instead of natural language responses unless it’s necessary. ChatGPT will provide its own natural language response using the returned data.

Bad example:

I was able to find your todo list! You have 2 todos: get groceries and walk the dog. I can add more todos if you'd like!

Good example:

{ "todos": [ "get groceries", "walk the dog" ] }

**GPT:** Creating a Todo List Plugin

In order to create a todo list plugin, you will first need to follow these steps:

1. Build an API
2. Document the API in the OpenAPI YAML or JSON format
3. Create a JSON manifest file that will define relevant metadata for the plugin

Once you have completed these steps, you will need to create the OpenAPI specification and manifest file for the todo list plugin. You can use the examples provided earlier in the text as templates for your own plugin.

Installing and Running the Plugin

After creating your API, OpenAPI specification, and manifest file, you can connect the plugin to the ChatGPT UI. There are two ways to do this, depending on whether your plugin is running locally or on a remote server.

For a local setup, navigate to the plugin store in the ChatGPT UI and select "Install an unverified plugin". For a remote server setup, you will first need to deploy the manifest file to your public site and then select "Develop your own plugin" and "Install an unverified plugin" in the ChatGPT UI. You may also consider setting up a local proxy of your public API to speed up the development process.

Writing Descriptions

When creating descriptions for your plugin, ensure they are clear, concise, and informative. The model will use these descriptions to determine if the plugin is relevant for a user query. Be sure to test multiple prompts and descriptions to see what works best.

Best Practices

Keep the following best practices in mind when writing descriptions and designing API responses:

1. Avoid attempting to control the mood, personality, or exact responses of ChatGPT

**Mike:** great! you an expert prompt writer for gpt 4.  use this content to write a prompt that will create a todo plugin.

**GPT:** As an expert prompt writer for GPT-4, I recommend using the following prompt to create a todo plugin:

"Create a plugin for managing a todo list. Users should be able to add, remove, and view their todos. Design an API to handle these functionalities, document the API using the OpenAPI specification, and create a JSON manifest file with relevant metadata. Ensure the plugin is easily installable through the ChatGPT UI and provides clear, concise, and informative descriptions. Keep best practices in mind when writing descriptions and designing API responses."
