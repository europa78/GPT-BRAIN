---
title: "GPT4 plugins"
date: 2026-06-29
cluster: "Audio / DSP / Instruments"
messages: 12
source: chatgpt-export conversations.json (FULL transcript)
---

# GPT4 plugins

> 12 messages · 2026-06-29 · cluster: Audio / DSP / Instruments

**Semantic neighbors:** [[Music Promotion - GPT]] · [[Create McA Beat Tape Art]] · [[Eurorack: Ultimate Synth Solution]] · [[Stable Audio AI Review]]

## Transcript

**Mike:** what is the safety concern ?  We’ve created a web browsing plugin which gives a language model access to a web browser, with its design prioritizing both safety and operating as a good citizen of the web. The plugin’s text-based web browser is limited to making GET requests, which reduces (but does not eliminate) certain classes of safety risks. This scopes the browsing plugin to be useful for retrieving information, but excludes “transactional” operations such as form submission which have more surface area for security and safety issues.

Browsing retrieves content from the web using the Bing search API. As a result, we inherit substantial work from Microsoft on (1) source reliability and truthfulness of information and (2) “safe-mode” to prevent the retrieval of problematic content. The plugin operates within an isolated service, so ChatGPT’s browsing activities are separated from the rest of our infrastructure.

To respect content creators and adhere to the web’s norms, our browser plugin’s user-agent token is ChatGPT-User and is configured to honor websites' robots.txt files. This may occasionally result in a “click failed” message, which indicates that the plugin is honoring the website's instruction to avoid crawling it. This user-agent will only be used to take direct actions on behalf of ChatGPT users and is not used for crawling the web in any automatic fashion. We have also published our IP egress ranges. Additionally, rate-limiting measures have been implemented to avoid sending excessive traffic to websites.

Click failed
You can block ChatGPT crawling your site using the robots.txt file, ChatGPT will show this error message when this happens.
Our browsing plugin shows websites visited and cites its sources in ChatGPT’s responses. This added layer of transparency helps users verify the accuracy of the model’s responses and also gives credit back to content creators. We appreciate that this is a new method of interacting with the web, and welcome feedback on additional ways to drive traffic back to sources and add to the overall health of the ecosystem

**GPT:** Although you have implemented various safety measures in your web browsing plugin, there are still potential safety concerns that should be considered:

1. Privacy: Since the plugin retrieves content from the web, it may collect and store user data or browsing history. Ensuring that user privacy is maintained by anonymizing or securely storing this data is crucial to prevent any misuse of personal information.

2. Misinformation: While using the Bing search API helps filter content for reliability and truthfulness, there is still a possibility that the plugin may retrieve inaccurate or misleading information. Regularly updating the plugin to improve its information filtering capabilities is essential.

3. Content manipulation: There is a risk that a malicious actor could manipulate the plugin to retrieve harmful or offensive content. Implementing additional content-filtering features or allowing users to customize filters can help mitigate this risk.

4. Legal and ethical concerns: The plugin may inadvertently access copyrighted or restricted content, which could raise legal or ethical concerns. Ensuring that the plugin respects copyright restrictions and adheres to ethical guidelines is important.

5. Security vulnerabilities: The plugin may have vulnerabilities that could be exploited by malicious actors, potentially putting users' systems at risk. Regularly testing and updating the plugin to address any security vulnerabilities is essential.

6. Over-reliance on a single API: Depending solely on the Bing search API for content retrieval may limit the breadth and diversity of information available to users. Considering additional APIs or search engines can help increase the quality and variety of content retrieved.

To address these safety concerns, continuous monitoring, updating, and improvement of the plugin are necessary. Additionally, engaging with the user community and obtaining feedback can help identify potential safety issues and areas for improvement.

**Mike:** We provide our models with a working Python interpreter in a sandboxed, firewalled execution environment, along with some ephemeral disk space. Code run by our interpreter plugin is evaluated in a persistent session that is alive for the duration of a chat conversation (with an upper-bound timeout) and subsequent calls can build on top of each other. We support uploading files to the current conversation workspace and downloading the results of your work.

JW
a brick weighs 30% of a brick plus five GPUs there are 100 bricks and 200 GPUs in a metric ton how much does a brick weigh?

Let's call the weight of a brick "B" and the weight of a GPU "G". We can set up an equation based on the information given:

B = 0.3 * B + 5 * G

We can also set up another equation based on the total weight of 100 bricks and 200 GPUs being equal to 1 metric ton (1000 kilograms):

100 * B + 200 * G = 1000

We can solve this system of equations to find the weight of a brick (B) and the weight of a GPU (G).

from sympy import symbols, Eq, solve

B, G = symbols('B G')
eq1 = Eq(B, 0.3 * B + 5 * G)
eq2 = Eq(100 * B + 200 * G, 1000)
solution = solve((eq1, eq2), (B, G))
solution[B]
# Result
7.81250000000000

Finished calculating
The weight of a brick is 7.8125 kg.

Code interpreter plugin performing logic calculations
We would like our models to be able to use their programming skills to provide a much more natural interface to most fundamental capabilities of our computers. Having access to a very eager junior programmer working at the speed of your fingertips can make completely new workflows effortless and efficient, as well as open the benefits of programming to new audiences.

From our initial user studies, we’ve identified use cases where using code interpreter is especially useful:

Solving mathematical problems, both quantitative and qualitative
Doing data analysis and visualization
Converting files between formats
We invite users to try the code interpreter integration and discover other useful tasks.

**GPT:** Your web browsing plugin, combined with a Python interpreter in a sandboxed environment, offers a wide range of possibilities for users. It allows them to perform complex calculations, data analysis, file conversions, and other tasks with ease. The example you provided, where the plugin was used to solve a system of equations involving the weights of bricks and GPUs, showcases its potential for solving mathematical problems.

As this technology becomes more widespread, users will likely discover even more use cases that can benefit from the code interpreter integration. Some of these use cases might include:

1. Automating repetitive tasks: Users can write and run scripts to automate tasks they frequently perform, making their workflows more efficient.

2. Web scraping and data extraction: The code interpreter can be used to access and extract data from websites, enabling users to gather information and process it according to their needs.

3. Text processing and manipulation: Users can utilize the interpreter to analyze and manipulate text, such as finding patterns, summarizing content, or generating reports.

4. Educational purposes: The code interpreter can serve as an interactive learning tool, allowing users to practice coding, experiment with new concepts, and get instant feedback on their work.

5. Simulations and modeling: Users can create mathematical models or run simulations to explore complex systems or make predictions.

6. Generating visualizations: The interpreter can be used to create visual representations of data, helping users better understand patterns and trends.

7. Customized recommendations: Users can build personalized recommendation systems that take their preferences and habits into account, enhancing their experience with your service.

By encouraging users to explore the code interpreter's capabilities and provide feedback, you can continue to refine and expand the functionality offered, ultimately creating an even more powerful and versatile tool for a wide range of applications.

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

**GPT:** To build a plugin that allows ChatGPT to intelligently call your API, follow these steps:

1. Design your API: Determine what functionality you want to expose through your API. Design the API endpoints and their input parameters, making sure to keep them simple and easy to understand.

2. Implement your API: Develop your API using a suitable technology stack, ensuring it is scalable, secure, and performant.

3. Create an OpenAPI specification: Write an OpenAPI specification for your API, including detailed descriptions and examples to help ChatGPT understand how to use your API effectively.

4. Create a manifest file: Create a JSON manifest file that includes metadata about your plugin, such as its name, logo, and a brief description. Also include authentication details (if required) and the OpenAPI spec URL for your API. Host this file at `yourdomain.com/.well-known/ai-plugin.json`.

5. Register your plugin with ChatGPT: Log in to the ChatGPT UI, select the plugin model from the top drop-down menu, and navigate to "Plugins" > "Plugin Store" > "Install an unverified plugin" or "Develop your own plugin". Provide the required authentication credentials if needed.

6. Share your plugin with users: During the alpha stage, you can share your plugin with up to 15 additional users. They will need to manually activate your plugin in the ChatGPT UI.

7. Implement user authentication (if needed): If your plugin requires user authentication, implement an OAuth 2 flow or provide API keys for users. Optionally, you can create new accounts during the OAuth process.

8. Monitor and iterate on your plugin: As users interact with your plugin, gather feedback and usage data to improve its functionality and performance. Continuously update the OpenAPI specification and manifest file to reflect any changes you make to your API.

By following these steps, you can create a plugin that allows ChatGPT to intelligently call your API, providing a seamless integration between your service and ChatGPT's natural language capabilities.

**Mike:** reating a plugin takes three steps:

Build an API
Document the API in the OpenAPI yaml or JSON format
Create a JSON manifest file that will define relevant metadata for the plugin
The focus of the rest of this section will be creating a to-do list plugin by defining the OpenAPI specification along with the manifest file.

Plugin manifest
Every plugin requires a ai-plugin.json file, which needs to be hosted on the API’s domain. For example, a company called example.com would make the plugin JSON file accessible via an https://example.com domain since that is where their API is hosted. When you install the plugin via the ChatGPT UI, on the backend we look for a file located at /.well-known/ai-plugin.json. If there is no file found, the plugin cannot be installed.

The minimal definition of a plugin will look like the following:

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
  "logo_url": "https://vsq7s0-5001.preview.csb.app/logo.png",
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
The next step is to build the OpenAPI specification to document the API. The model in ChatGPT does not know anything about your API other than what is defined in the OpenAPI specification and manifest file. This means that if you have an extensive API, you need not expose all functionality to the model and can choose specific endpoints. For example, if you had a social media API, you might want to have the model access content from the site through a GET request but prevent the model from being able to comment on users posts in order to reduce the chance of spam.

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
We start by defining the specification version, the title, description, and version number. When a query is run in ChatGPT, it will look at the description that is defined in the info section to determine if the plugin is relevant for the user query. You can read more about prompting in the prompt engineering section.

Keep in mind the following limits in your OpenAPI specification, which are subject to change:

200 characters max for each API endpoint description/summary field in API specification
200 characters max for each API param description field in API specification
Since we are running this example locally, we want to set the server to point to your local host URL. The rest of the OpenAPI specification follows the traditional OpenAPI format, you can learn more about OpenAPI formatting through various online resources. There are also many tools that auto generate OpenAPI specifications based on your underlying API code.

Running a plugin
Once you have created an API, manifest file, and OpenAPI specification for your API, you are now ready to connect the plugin via the ChatGPT UI. There are two different places your plugin might be running, either locally in a development environment or on a remote server.

If you have a local version of your API running, you can point the plugin interface to that local setup. To connect the plugin with ChatGPT, you can navigate to the plugin store and then select “Install an unverified plugin”.

If the plugin is running on a remote server, you will need to first select “Develop your own plugin” and then “Install an unverified plugin”. You can simply add the plugin manifest file to the ./well-known path and start testing your API. However, for subsequent changes to your manifest file, you will have to deploy the new changes to your public site which might take a long time. In that case, we suggest setting up a local server to act as a proxy for your API. This allows you to quickly prototype changes to your OpenAPI spec and manifest file.

Setup a local proxy of your public API
Writing descriptions
When a user makes a query that might be a potential request that goes to a plugin, the model looks through the descriptions of the endpoints in the OpenAPI specification along with the description_for_model in the manifest file. Just like with prompting other language models, you will want to test out multiple prompts and descriptions to see what works best.

The OpenAPI spec itself is a great place to give the model information about the diverse details of your API – what functions are available, with what parameters, etc. Besides using expressive, informative names for each field, the spec can also contain “description” fields for every attribute. These can be used to provide natural language descriptions of what a function does or what information a query field expects, for example. The model will be able to see these, and they will guide it in using the API. If a field is restricted to only certain values, you can also provide an “enum” with descriptive category names.

The “description_for_model” attribute gives you the freedom to instruct the model on how to use your plugin generally. Overall, the language model behind ChatGPT is highly capable of understanding natural language and following instructions. Therefore, this is a good place to put in general instructions on what your plugin does and how the model should use it properly. Use natural language, preferably in a concise yet descriptive and objective tone. You can look at some of the examples to have an idea of what this should look like. We suggest starting the description_for_model with “Plugin for …” and then enumerating all of the functionality that your API provides.

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

**GPT:** Creating a To-do List Plugin

To create a to-do list plugin, you will need to define the OpenAPI specification along with the manifest file. Here is a step-by-step guide to help you create your plugin:

1. Create an API: Develop an API to handle the to-do list functionality (e.g., add, remove, and view to-dos).

2. Document the API: Write an OpenAPI specification in YAML or JSON format to describe the API's endpoints, parameters, and responses.

3. Create a JSON manifest file: This file will define relevant metadata for the plugin, such as its name, description, and logo URL.

Here is an example of a minimal plugin manifest file for a to-do list plugin:

```json
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
  "logo_url": "https://vsq7s0-5001.preview.csb.app/logo.png",
  "contact_email": "support@example.com",
  "legal_info_url": "http://www.example.com/legal"
}
```

Next, create the OpenAPI specification for your API. An example of a basic OpenAPI specification for a to-do list plugin is as follows:

```yaml
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
```

Once you have created the API, manifest file, and OpenAPI specification, you can connect the plugin via the ChatGPT UI. Follow these steps to run your plugin:

1. If you have a local version of your API running, go to the plugin store in the ChatGPT UI and select "Install an unverified plugin".

2. If the plugin is running on a remote server, first select "Develop your own plugin" and then "Install an unverified plugin". Add the plugin manifest file to the `./well-known` path and start testing your API.

For better results, ensure you write clear and concise descriptions in the manifest file and OpenAPI specification. Follow best practices when designing your API responses to avoid providing natural language responses; instead, return raw data for ChatGPT to process and present in a user-friendly manner.

**Mike:** Our alignment research aims to make artificial general intelligence (AGI) aligned with human values and follow human intent. We take an iterative, empirical approach: by attempting to align highly capable AI systems, we can learn what works and what doesn’t, thus refining our ability to make AI systems safer and more aligned. Using scientific experiments, we study how alignment techniques scale and where they will break.

We tackle alignment problems both in our most capable AI systems as well as alignment problems that we expect to encounter on our path to AGI. Our main goal is to push current alignment ideas as far as possible, and to understand and document precisely how they can succeed or why they will fail. We believe that even without fundamentally new alignment ideas, we can likely build sufficiently aligned AI systems to substantially advance alignment research itself.

Unaligned AGI could pose substantial risks to humanity and solving the AGI alignment problem could be so difficult that it will require all of humanity to work together. Therefore we are committed to openly sharing our alignment research when it’s safe to do so: We want to be transparent about how well our alignment techniques actually work in practice and we want every AGI developer to use the world’s best alignment techniques.

At a high-level, our approach to alignment research focuses on engineering a scalable training signal for very smart AI systems that is aligned with human intent. It has three main pillars:

Training AI systems using human feedback
Training AI systems to assist human evaluation
Training AI systems to do alignment research
Aligning AI systems with human values also poses a range of other significant sociotechnical challenges, such as deciding to whom these systems should be aligned. Solving these problems is important to achieving our mission, but we do not discuss them in this post.

We want to be transparent about how well our alignment techniques actually work in practice and we want every AGI developer to use the world’s best alignment techniques.

Training AI systems to do alignment research
There is currently no known indefinitely scalable solution to the alignment problem. As AI progress continues, we expect to encounter a number of new alignment problems that we don’t observe yet in current systems. Some of these problems we anticipate now and some of them will be entirely new.

We believe that finding an indefinitely scalable solution is likely very difficult. Instead, we aim for a more pragmatic approach: building and aligning a system that can make faster and better alignment research progress than humans can.

As we make progress on this, our AI systems can take over more and more of our alignment work and ultimately conceive, implement, study, and develop better alignment techniques than we have now. They will work together with humans to ensure that their own successors are more aligned with humans.

We believe that evaluating alignment research is substantially easier than producing it, especially when provided with evaluation assistance. Therefore human researchers will focus more and more of their effort on reviewing alignment research done by AI systems instead of generating this research by themselves. Our goal is to train models to be so aligned that we can off-load almost all of the cognitive labor required for alignment research.

Importantly, we only need “narrower” AI systems that have human-level capabilities in the relevant domains to do as well as humans on alignment research. We expect these AI systems are easier to align than general-purpose systems or systems much smarter than humans.

Language models are particularly well-suited for automating alignment research because they come “preloaded” with a lot of knowledge and information about human values from reading the internet. Out of the box, they aren’t independent agents and thus don’t pursue their own goals in the world. To do alignment research they don’t need unrestricted access to the internet. Yet a lot of alignment research tasks can be phrased as natural language or coding tasks.

Future versions of WebGPT, InstructGPT, and Codex can provide a foundation as alignment research assistants, but they aren’t sufficiently capable yet. While we don’t know when our models will be capable enough to meaningfully contribute to alignment research, we think it’s important to get started ahead of time. Once we train a model that could be useful, we plan to make it accessible to the external alignment research community.

Limitations
We’re very excited about this approach towards aligning AGI, but we expect that it needs to be adapted and improved as we learn more about how AI technology develops. Our approach also has a number of important limitations:

The path laid out here underemphasizes the importance of robustness and interpretability research, two areas OpenAI is currently underinvested in. If this fits your profile, please apply for our research scientist positions!
Using AI assistance for evaluation has the potential to scale up or amplify even subtle inconsistencies, biases, or vulnerabilities present in the AI assistant.
Aligning AGI likely involves solving very different problems than aligning today’s AI systems. We expect the transition to be somewhat continuous, but if there are major discontinuities or paradigm shifts, then most lessons learned from aligning models like InstructGPT might not be directly useful.
The hardest parts of the alignment problem might not be related to engineering a scalable and aligned training signal for our AI systems. Even if this is true, such a training signal will be necessary.
It might not be fundamentally easier to align models that can meaningfully accelerate alignment research than it is to align AGI. In other words, the least capable models that can help with alignment research might already be too dangerous if not properly aligned. If this is true, we won’t get much help from our own systems for solving alignment problems.

**GPT:** Summary:

OpenAI's alignment research aims to make artificial general intelligence (AGI) align with human values and intent. Their approach focuses on three main pillars: training AI systems using human feedback, training AI systems to assist human evaluation, and training AI systems to do alignment research.

The goal is to create AI systems that can help improve alignment research more effectively and efficiently than humans can. Language models, such as WebGPT, InstructGPT, and Codex, are well-suited for this task due to their knowledge of human values and ability to perform natural language or coding tasks.

OpenAI acknowledges several limitations, including the need for more focus on robustness and interpretability research, potential risks in AI-assisted evaluation, and the possibility that aligning AGI might involve solving different problems than those faced in aligning current AI systems. Despite these challenges, OpenAI aims to push current alignment ideas as far as possible, openly share their research when safe, and work towards creating AI systems that can advance alignment research.

**Mike:** what does this mean > Conditional logic
Add customized if/then logic to your workflows so they work exactly how you would—but automatically.

**GPT:** "Conditional logic" refers to using if/then statements within a workflow or process to create custom automation. It means that you can set up a system to perform specific actions based on predefined conditions, making the workflow more adaptable and efficient. 

In this context, "conditional logic" allows you to design and implement automated workflows that can make decisions and take appropriate actions depending on certain conditions or criteria. These workflows can mimic how a human would make decisions, but they run automatically, saving time and effort while reducing the risk of errors.
