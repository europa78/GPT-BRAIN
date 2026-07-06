---
title: "GDrive + GPT Tutorial"
date: 2023-05-28
cluster: "Prompt Eng / GPT Building"
messages: 11
source: chatgpt-export conversations.json (FULL transcript)
---

# GDrive + GPT Tutorial

> 11 messages · 2023-05-28 · cluster: Prompt Eng / GPT Building

**Semantic neighbors:** [[Article Analyzer Pro - GPT]] · [[Excel Finance Guru - GPT]] · [[Books - GPT]] · [[ProductGPT - GPT#2]]

## Transcript

**Mike:** https://www.haihai.ai/gpt-gdrive/

**GPT:** The link you provided leads to a blog post on haihai.ai titled "GPT your GDrive with LangChain". The article is a tutorial on how to build a Python app powered by GPT (Generative Pretrained Transformer) and Google Drive (GDrive). This combination is made possible by LangChain's Google Drive document loader, which serves as a foundation for a variety of applications.

The tutorial provides a Python code snippet that uses LangChain to load documents from a Google Drive folder, split the text into manageable chunks, create embeddings of the text, and then use the GPT-3.5-turbo model to answer queries based on the loaded documents. The tutorial also explains how to set up your Python environment and Google Drive API credentials to work with the code.

The author of the post, Greg, argues that the real power of GPT comes when it has access to the information you care about, whether that's up-to-date public data or proprietary documents. He encourages readers to share any cool applications they build using ChatGPT and Google Drive.

The tutorial also discusses the benefits of using LangChain for building complex LLM (Language Model) powered apps. These benefits include:

1. Bringing your own data: LangChain has dozens of Document Loaders to import and transform data so that it's usable with ChatGPT.
2. Taking action with your LLM app: LangChain tools allow your LLM powered app to interact with the outside world.
3. Interoperability: LangChain makes it easy to swap out your current LLM for a new one without rewriting a lot of code.
4. Error handling: LangChain provides retries with exponential backoffs for free, making error handling easier.

The author thanks Logan K for the inspiration and the teams at OpenAI and LangChain for building such powerful, exciting tools.

**Mike:** Give me an in depth explanation and guide about how to build a Python app powered by GPT (Generative Pretrained Transformer) and Google Drive (GDrive). This combination is made possible by LangChain's Google Drive document loader, which serves as a foundation for a variety of applications.

**GPT:** Sure, I'll provide a step-by-step guide based on the tutorial from the link you provided. This guide will show you how to build a Python app powered by GPT and Google Drive using LangChain's Google Drive document loader.

**Step 1: Set up your Python Environment**

First, you need to set up your Python environment to work with Google Drive. Here are the steps:

1. Sign up for an OpenAI account if you haven't already.
2. Set your OpenAI API key as an environment variable.
3. Install the necessary Python dependencies. You can do this by running the following commands in your terminal:

```python
pip install openai
pip install langchain
pip install pypdf2
pip install chroma
pip install tiktoken
pip install --upgrade google-api-python-client google-auth-httplib2 google-auth-oauthlib
```

**Step 2: Set up your Google Drive API Credentials**

Next, you need to configure a Google Cloud project to work with the Google Drive API. Here are the steps:

1. Go to your Google Cloud Console and create a new Google Cloud Project.
2. Enable the Google Drive API.
3. Set up your Google API Credentials. This is a four-step process in which you need to:
   - Authorize credentials for a desktop app.
   - Download your credentials.
   - Configure your consent screen.
   - Add yourself as a test user.

**Step 3: Load Documents from Google Drive**

Now you're ready to start writing your Python app. First, you'll need to load documents from your Google Drive folder. Here's how you can do that:

```python
from langchain.document_loaders import GoogleDriveLoader

folder_id = "YOUR_FOLDER_ID"
loader = GoogleDriveLoader(
    folder_id=folder_id,
    recursive=False
)
docs = loader.load()
```

**Step 4: Split the Texts, Create Embeddings, and Put Them into a Vector Store**

Next, you'll need to split the loaded documents into smaller chunks, turn them into embeddings, and store them into a vector database. Here's how you can do that:

```python
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.embeddings import OpenAIEmbeddings
from langchain.vectorstores import Chroma

text_splitter = RecursiveCharacterTextSplitter(
    chunk_size=4000, chunk_overlap=0, separators=[" ", ",", "\n"]
)
texts = text_splitter.split_documents(docs)
embeddings = OpenAIEmbeddings()
db = Chroma.from_documents(texts, embeddings)
```

**Step 5: Create a Retriever and Query ChatGPT**

Finally, you'll create a retriever from your vector store that retrieves document chunks relevant to your query. You'll also initialize a client to interact with the gpt-3.5-turbo model. Here's how you can do that:

```python
from langchain.chat_models import ChatOpenAI
from langchain.chains import RetrievalQA

retriever = db.as_retriever()
llm = ChatOpenAI(temperature=0, model_name="gpt-3.5-turbo")
qa = RetrievalQA.from_chain_type(llm=llm, chain_type="stuff", retriever=retriever)

while True:
    query = input("> ")
    answer = qa.run(query)
    print(answer)
```

This loop will keep asking you for a query, then run the QA chain and print the answer. You can change this method of interacting with your documents depending on your app.

And that's it! You've built a Python app powered by GPT and Google Drive. The first time you run your

**GPT:** script, a browser will open and ask you to OAuth into your Google account. You need to authenticate the account that you added as a test user in the preparation. After a successful OAuth, your app will download a token.json to your ~/.credentials folder. You will not need to repeat this step again as long as the token remains.

Now, let's break down the code and understand what each part does:

1. **Importing necessary modules from LangChain**: LangChain is a framework for building complex Language Model (LLM) powered apps. The modules you import are specific to the functionalities you need for this project.

2. **Loading documents from Google Drive**: The GoogleDriveLoader instance loads documents from your specified folder. The `recursive=False` argument tells it not to search nested folders – you can set this to `True` if you have nested folders.

3. **Splitting the texts, creating embeddings, and storing them**: The RecursiveCharacterTextSplitter object splits the loaded documents into smaller chunks of no more than 4,000 characters. These chunks are then turned into embeddings using OpenAI's embedding API and stored into Chroma, a vector database.

4. **Creating a Retriever and querying ChatGPT**: A retriever is created from your vector store that retrieves document chunks relevant to your query. A client is initialized to interact with the gpt-3.5-turbo model. The loop asks you for a query, then runs the QA chain and prints the answer.

Remember, the real power of GPT comes when it has access to the information you care about. This could be up-to-date public data or proprietary documents. The combination of GPT and Google Drive allows you to leverage this power in a flexible and customizable way.

**Mike:** Repeat this process but use the article as your guidelines.   Limjt your reply to the context of the article GPT your GDrive with LangChain only

**GPT:** Sure, I'll provide a step-by-step guide based on the tutorial from the article "GPT your GDrive with LangChain".

**Step 1: Prepare your Python Environment**

The first step is to prepare your Python environment. You need to set your OpenAI API key as an environment variable and install the necessary Python dependencies. These dependencies include openai, langchain, pypdf2, chroma, tiktoken, and google-api-python-client, google-auth-httplib2, google-auth-oauthlib.

**Step 2: Set up Google Drive API Credentials**

Next, you need to configure a Google Cloud project to work with the Google Drive API. This involves creating a new Google Cloud Project, enabling the Google Drive API, and setting up your Google API Credentials. You'll need to authorize credentials for a desktop app, download your credentials, configure your consent screen, and add yourself as a test user.

**Step 3: Load Documents from Google Drive**

Now, you're ready to start writing your Python app. First, you'll need to load documents from your Google Drive folder. This is done using the GoogleDriveLoader from LangChain. You'll need to provide the ID of the folder you want to load documents from.

**Step 4: Split the Texts, Create Embeddings, and Store Them in a Vector Store**

Next, you'll need to split the loaded documents into smaller chunks, turn them into embeddings, and store them into a vector database. This is done using the RecursiveCharacterTextSplitter, OpenAIEmbeddings, and Chroma from LangChain.

**Step 5: Create a Retriever and Query ChatGPT**

Finally, you'll create a retriever from your vector store that retrieves document chunks relevant to your query. You'll also initialize a client to interact with the gpt-3.5-turbo model. You'll then create a loop that asks you for a query, runs the QA chain, and prints the answer.

This is a basic overview of the process. The actual Python code and more detailed instructions can be found in the article. The author also discusses the benefits of using LangChain for building complex LLM (Language Model) powered apps, and encourages readers to share any cool applications they build using ChatGPT and Google Drive.

**Mike:** Give me the necessary python scripts to integrate gpt with Google drive according to your 4 parts

**GPT:** Sure, here are the Python scripts according to the four parts mentioned in the tutorial:

**Step 1: Prepare your Python Environment**

You need to install the necessary Python dependencies. You can do this by running the following commands in your terminal:

```python
pip install openai
pip install langchain
pip install pypdf2
pip install chroma
pip install tiktoken
pip install --upgrade google-api-python-client google-auth-httplib2 google-auth-oauthlib
```

**Step 2: Set up Google Drive API Credentials**

This step involves setting up your Google Cloud project and doesn't require a Python script. You'll need to manually create a new Google Cloud Project, enable the Google Drive API, and set up your Google API Credentials.

**Step 3: Load Documents from Google Drive**

Here's how you can load documents from your Google Drive folder:

```python
from langchain.document_loaders import GoogleDriveLoader

folder_id = "YOUR_FOLDER_ID"
loader = GoogleDriveLoader(
    folder_id=folder_id,
    recursive=False
)
docs = loader.load()
```

**Step 4: Split the Texts, Create Embeddings, and Store Them in a Vector Store**

Next, you'll need to split the loaded documents into smaller chunks, turn them into embeddings, and store them into a vector database. Here's how you can do that:

```python
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.embeddings import OpenAIEmbeddings
from langchain.vectorstores import Chroma

text_splitter = RecursiveCharacterTextSplitter(
    chunk_size=4000, chunk_overlap=0, separators=[" ", ",", "\n"]
)
texts = text_splitter.split_documents(docs)
embeddings = OpenAIEmbeddings()
db = Chroma.from_documents(texts, embeddings)
```

**Step 5: Create a Retriever and Query ChatGPT**

Finally, you'll create a retriever from your vector store that retrieves document chunks relevant to your query. You'll also initialize a client to interact with the gpt-3.5-turbo model. Here's how you can do that:

```python
from langchain.chat_models import ChatOpenAI
from langchain.chains import RetrievalQA

retriever = db.as_retriever()
llm = ChatOpenAI(temperature=0, model_name="gpt-3.5-turbo")
qa = RetrievalQA.from_chain_type(llm=llm, chain_type="stuff", retriever=retriever)

while True:
    query = input("> ")
    answer = qa.run(query)
    print(answer)
```

This loop will keep asking you for a query, then run the QA chain and print the answer. You can change this method of interacting with your documents depending on your app.

**Mike:** Can this app analyze multiple docs

**GPT:** Yes, the Python app powered by GPT and Google Drive using LangChain's Google Drive document loader can analyze multiple documents. 

When you load documents from your Google Drive folder using the GoogleDriveLoader, it loads all the documents in the specified folder. The `loader.load()` function returns a list of Documents, which means it can handle multiple documents at once.

The RecursiveCharacterTextSplitter then splits each of these documents into smaller chunks of no more than 4,000 characters. These chunks are turned into embeddings and stored into a vector database.

When you query the model, the retriever retrieves document chunks relevant to your query from all the loaded documents. So, the model can analyze and provide answers based on multiple documents.

Remember to set `recursive=True` in the GoogleDriveLoader if you want to load documents from nested folders within the specified folder.
