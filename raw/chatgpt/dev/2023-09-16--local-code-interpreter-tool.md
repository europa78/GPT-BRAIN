---
title: "Local Code Interpreter Tool"
date: 2023-09-16
cluster: "Coding / Dev / Infra"
messages: 6
source: chatgpt-export conversations.json (FULL transcript)
---

# Local Code Interpreter Tool

> 6 messages · 2023-09-16 · cluster: Coding / Dev / Infra

**Semantic neighbors:** [[Datasys part deux]] · [[Python Script for URL Summarization.]] · [[Python 4_29]] · [[Economic calendar]]

## Transcript

**Mike:** Explain in detail how open interpreter works using this info about it from GitHub : Open Interpreter lets LLMs run code (Python, Javascript, Shell, and more) locally. You can chat with Open Interpreter through a ChatGPT-like interface in your terminal by running $ interpreter after installing.

This provides a natural-language interface to your computer's general-purpose capabilities:

Create and edit photos, videos, PDFs, etc.
Control a Chrome browser to perform research
Plot, clean, and analyze large datasets
...etc.
⚠️ Note: You'll be asked to approve code before it's run.


Demo
https://github.com/KillianLucas/open-interpreter/assets/63927363/37152071-680d-4423-9af3-64836a6f7b60

An interactive demo is also available on Google Colab:
Open In Colab

Quick Start
pip install open-interpreter
Terminal
After installation, simply run interpreter:

interpreter
Python
import interpreter

interpreter.chat("Plot AAPL and META's normalized stock prices") # Executes a single command
interpreter.chat() # Starts an interactive chat
Comparison to ChatGPT's Code Interpreter
OpenAI's release of Code Interpreter with GPT-4 presents a fantastic opportunity to accomplish real-world tasks with ChatGPT.

However, OpenAI's service is hosted, closed-source, and heavily restricted:

No internet access.
Limited set of pre-installed packages.
100 MB maximum upload, 120.0 second runtime limit.
State is cleared (along with any generated files or links) when the environment dies.
Open Interpreter overcomes these limitations by running on your local environment. It has full access to the internet, isn't restricted by time or file size, and can utilize any package or library.

This combines the power of GPT-4's Code Interpreter with the flexibility of your local development environment.

Commands
Interactive Chat
To start an interactive chat in your terminal, either run interpreter from the command line:

interpreter
Or interpreter.chat() from a .py file:

interpreter.chat()
Programmatic Chat
For more precise control, you can pass messages directly to .chat(message):

interpreter.chat("Add subtitles to all videos in /videos.")

# ... Streams output to your terminal, completes task ...

interpreter.chat("These look great but can you make the subtitles bigger?")

# ...
Start a New Chat
In Python, Open Interpreter remembers conversation history. If you want to start fresh, you can reset it:

interpreter.reset()
Save and Restore Chats
interpreter.chat() returns a List of messages when return_messages=True, which can be used to resume a conversation with interpreter.load(messages):

messages = interpreter.chat("My name is Killian.", return_messages=True) # Save messages to 'messages'
interpreter.reset() # Reset interpreter ("Killian" will be forgotten)

interpreter.load(messages) # Resume chat from 'messages' ("Killian" will be remembered)
Customize System Message
You can inspect and configure Open Interpreter's system message to extend its functionality, modify permissions, or give it more context.

interpreter.system_message += """
Run shell commands with -y so the user doesn't have to confirm them.
"""
print(interpreter.system_message)
Change the Model
For gpt-3.5-turbo, use fast mode:

interpreter --fast
In Python, you will need to set the model manually:

interpreter.model = "gpt-3.5-turbo"
Running Open Interpreter locally
ⓘ Issues running locally? Read our new GPU setup guide and Windows setup guide.

You can run interpreter in local mode from the command line to use Code Llama:

interpreter --local
Or run any Hugging Face model locally by using its repo ID (e.g. "tiiuae/falcon-180B"):

interpreter --model tiiuae/falcon-180B
Local model params
You can easily modify the max_tokens and context_window (in tokens) of locally running models.

Smaller context windows will use less RAM, so we recommend trying a shorter window if GPU is failing.

interpreter --max_tokens 2000 --context_window 16000
Azure Support
To connect to an Azure deployment, the --use-azure flag will walk you through setting this up:

interpreter --use-azure
In Python, set the following variables:

interpreter.use_azure = True
interpreter.api_key = "your_openai_api_key"
interpreter.azure_api_base = "your_azure_api_base"
interpreter.azure_api_version = "your_azure_api_version"
interpreter.azure_deployment_name = "your_azure_deployment_name"
interpreter.azure_api_type = "azure"
Debug mode
To help contributors inspect Open Interpreter, --debug mode is highly verbose.

You can activate debug mode by using it's flag (interpreter --debug), or mid-chat:

$ interpreter
...
> %debug true <- Turns on debug mode

> %debug false <- Turns off debug mode
Interactive Mode Commands
In the interactive mode, you can use the below commands to enhance your experience. Here's a list of available commands:

Available Commands:
• %debug [true/false]: Toggle debug mode. Without arguments or with 'true', it enters debug mode. With 'false', it exits debug mode.
• %reset: Resets the current session.
• %undo: Remove previous messages and its response from the message history.
• %save_message [path]: Saves messages to a specified JSON path. If no path is provided, it defaults to 'messages.json'.
• %load_message [path]: Loads messages from a specified JSON path. If no path
is provided, it defaults to 'messages.json'.
• %help: Show the help message.

Feel free to try out these commands and let us know your feedback!

Configuration with .env
Open Interpreter allows you to set default behaviors using a .env file. This provides a flexible way to configure the interpreter without changing command-line arguments every time.

Here's a sample .env configuration:

INTERPRETER_CLI_AUTO_RUN=False
INTERPRETER_CLI_FAST_MODE=False
INTERPRETER_CLI_LOCAL_RUN=False
INTERPRETER_CLI_DEBUG=False
INTERPRETER_CLI_USE_AZURE=False
You can modify these values in the .env file to change the default behavior of the Open Interpreter.

Safety Notice
Since generated code is executed in your local environment, it can interact with your files and system settings, potentially leading to unexpected outcomes like data loss or security risks.

⚠️ Open Interpreter will ask for user confirmation before executing code.

You can run interpreter -y or set interpreter.auto_run = True to bypass this confirmation, in which case:

Be cautious when requesting commands that modify files or system settings.
Watch Open Interpreter like a self-driving car, and be prepared to end the process by closing your terminal.
Consider running Open Interpreter in a restricted environment like Google Colab or Replit. These environments are more isolated, reducing the risks associated with executing arbitrary code.
How Does it Work?
Open Interpreter equips a function-calling language model with an exec() function, which accepts a language (like "Python" or "JavaScript") and code to run.

We then stream the model's messages, code, and your system's outputs to the terminal as Markdown.

Contributing
Thank you for your interest in contributing! We welcome involvement from the community.

Please see our Contributing Guidelines for more details on how to get involved.

License
Open Interpreter is licensed under the MIT License. You are permitted to use, copy, modify, distribute, sublicense and sell copies of the software.

**GPT:** **Open Interpreter: A Detailed Overview**

**Introduction:**
Open Interpreter is a tool that allows Language Learning Models (LLMs) to execute code in various languages, such as Python, JavaScript, and Shell, directly on your local machine. It offers a ChatGPT-like interface, enabling users to communicate with their computer using natural language.

**Key Features:**
1. **Natural-Language Interface:** By simply running the `$ interpreter` command in the terminal after installation, users can interact with Open Interpreter in a conversational manner.
2. **Versatile Capabilities:** Open Interpreter can:
   - Create and edit multimedia files like photos, videos, and PDFs.
   - Control a Chrome browser for research purposes.
   - Handle large datasets for plotting, cleaning, and analysis.
   - And much more.

3. **Safety Measures:** Before executing any code, Open Interpreter will prompt users for approval, ensuring that unintended commands aren't run accidentally.

**Demo & Quick Start:**
- A demo of Open Interpreter can be found [here](https://github.com/KillianLucas/open-interpreter/assets/63927363/37152071-680d-4423-9af3-64836a6f7b60).
- An interactive version is also available on [Google Colab](https://colab.research.google.com/).
- To get started, users can install Open Interpreter using `pip install open-interpreter` and then run it using the `interpreter` command.

**Comparison to ChatGPT's Code Interpreter:**
While OpenAI's Code Interpreter with GPT-4 offers a great platform for real-world tasks, it has certain limitations:
   - No internet access.
   - Limited pre-installed packages.
   - Restrictions on upload size and runtime.
   - State is cleared after the environment ends.

Open Interpreter addresses these limitations by operating in the user's local environment. This means it can access the internet, isn't bound by time or file size constraints, and can use any available package or library.

**Commands & Usage:**
Open Interpreter offers various commands for both interactive and programmatic chats. Users can:
   - Start an interactive chat using the `interpreter` command or `interpreter.chat()`.
   - Execute specific commands using `interpreter.chat("Command Here")`.
   - Save, load, and reset chat histories.
   - Customize system messages and change the model being used.
   - Run Open Interpreter in local mode or with Azure support.
   - Activate debug mode for detailed insights.

**Configuration:**
Users can set default behaviors for Open Interpreter using a `.env` file, allowing for a more personalized experience without the need to modify command-line arguments each time.

**Safety Notice:**
Given that the generated code runs locally, it can interact with system files and settings. This can lead to potential risks like data loss or security breaches. However, Open Interpreter always seeks user confirmation before executing any code. For those who want to bypass this confirmation, they can use the `interpreter -y` command or set `interpreter.auto_run = True`. It's recommended to monitor Open Interpreter closely and consider using it in more isolated environments like Google Colab or Replit.

**How Does It Work?**
Open Interpreter uses a function-calling language model equipped with an `exec()` function. This function accepts a specified language (e.g., "Python" or "JavaScript") and the code to be executed. The model's messages, code, and system outputs are then streamed to the terminal in Markdown format.

**Contributing & License:**
Open Interpreter welcomes contributions from the community. Those interested can refer to the Contributing Guidelines for more details. The tool is licensed under the MIT License, allowing users to use, modify, and distribute the software freely.

In summary, Open Interpreter is a powerful tool that bridges the gap between natural language processing and code execution, offering users a versatile and interactive way to communicate with their computers.

**Mike:** How do I install it ? Access the web to get current info

**GPT:** Certainly! Here's a summarized guide on how to install and use the Open Interpreter:

### Open Interpreter
Open Interpreter allows language models to run code on your computer. It's an open-source, locally running implementation of OpenAI's Code Interpreter.

#### Installation:
```bash
pip install open-interpreter
```

#### Usage:
After installation, you can start the Open Interpreter in your terminal with:
```bash
interpreter
```

In Python, you can use the interpreter as follows:
```python
import interpreter
interpreter.chat("Plot AAPL and META's normalized stock prices")  # Executes a single command
interpreter.chat()  # Starts an interactive chat
```

#### Safety Notice:
Since the generated code is executed in your local environment, it can interact with your files and system settings. This might lead to unexpected outcomes like data loss or security risks. Open Interpreter will ask for user confirmation before executing code. It's recommended to be cautious when requesting commands that modify files or system settings.

For more detailed information and advanced usage, you can visit the [official repository](https://github.com/KillianLucas/open-interpreter).

Would you like more details or assistance with another topic?

**Mike:** I run the pip installation in my terminal on my windows machine?

**GPT:** Yes, you can run the `pip` installation command in your terminal on a Windows machine. Here's a step-by-step guide:

1. **Open Command Prompt (CMD):**
   - Press `Windows + R` keys together to open the Run dialog.
   - Type `cmd` and press `Enter` or click `OK`.

2. **Check if Python is Installed:**
   Before installing the Open Interpreter, ensure you have Python and `pip` installed. In the Command Prompt, type:
   ```bash
   python --version
   ```
   and
   ```bash
   pip --version
   ```
   If both commands return a version number, it means Python and `pip` are installed.

3. **Install Open Interpreter:**
   In the Command Prompt, type the following command and press `Enter`:
   ```bash
   pip install open-interpreter
   ```

4. **Wait for Installation to Complete:**
   The terminal will display the progress of the installation. Once it's done, you should see a message indicating that the installation was successful.

5. **Run Open Interpreter:**
   After installation, you can start the Open Interpreter by typing:
   ```bash
   interpreter
   ```
   in the Command Prompt and pressing `Enter`.

6. **Interact with Open Interpreter:**
   You can now chat with the Open Interpreter in a natural language interface, similar to ChatGPT.

Remember, always be cautious when running commands, especially if they modify system settings or files. Open Interpreter will typically ask for confirmation before executing code that interacts with your system.

If you encounter any issues or need further assistance, let me know!
