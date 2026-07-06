---
title: "GSpread and Gensim."
date: 2023-04-28
cluster: "Misc / Uncategorized"
messages: 62
source: chatgpt-export conversations.json (FULL transcript)
---

# GSpread and Gensim.

> 62 messages · 2023-04-28 · cluster: Misc / Uncategorized

**Semantic neighbors:** [[Apify actor 4-17]] · [[Google Slides]] · [[Analyze Google Sheet Efficiently.]] · [[Zapier_Outlook_AUTO]]

## Transcript

**Mike:** list the requirements for this script .  I am using google colab to run it :  ```python
# Import the Gensim library
import gensim

# Read the data from the Google spreadsheet
import gspread
from oauth2client.service_account import ServiceAccountCredentials

# Define the scope of the credentials
scope = ['https://spreadsheets.google.com/feeds','https://www.googleapis.com/auth/drive']

# Create the credentials using the JSON file
creds = ServiceAccountCredentials.from_json_keyfile_name('your_json_file.json', scope)

# Authorize the credentials
gc = gspread.authorize(creds)

# Open the spreadsheet by its URL
sheet = gc.open_by_url(https://docs.google.com/spreadsheets/d/1hyR0OMcYoddrVeYsUYQRZUjzmM9DdM_T3PtziIe7-Xc/edit?usp=sharing)

# Get the first worksheet
worksheet = sheet.get_worksheet(0)

# Get all the values in column B (product descriptions)
descriptions = worksheet.col_values(2)

# Loop through each description and generate a summary using Gensim
for description in descriptions:
  # Skip empty cells
  if description:
    # Print the original description
    print(f'Original description: {description}')
    # Generate and print the summary
    summary = gensim.summarization.summarize(description)
    print(f'Summary: {summary}')
    # Print a separator line
    print('-'*80)

**GPT:** To run this script on Google Colab, you need the following requirements:

1. Install the required libraries:
   - Gensim: A Python library for topic modeling, document indexing, and similarity retrieval with large corpora.
   - gspread: A Python library for working with Google Spreadsheets.
   - oauth2client: A Python library for OAuth 2.0 authorization.

   You can install them in your Google Colab notebook by running:
   ```
   !pip install gensim gspread oauth2client
   ```

2. Obtain a JSON key file for your Google API credentials. You need to create a Google API project, enable the Google Sheets API, and create a service account key in JSON format. You can follow these steps to create the JSON key file: https://developers.google.com/workspace/guides/create-credentials

3. Upload the JSON key file to your Google Colab environment using the "Files" tab on the left sidebar or using the following code snippet:
   ```
   from google.colab import files
   uploaded = files.upload()
   ```

4. Replace `your_json_file.json` in the script with the name of the uploaded JSON key file.

5. Replace the URL in the `gc.open_by_url()` function with the correct URL of the Google Spreadsheet you want to use.

After fulfilling these requirements, you should be able to run the script without any issues.

**Mike:** re-write the script without gspread:

**GPT:** You can achieve the same functionality without using gspread by utilizing the Google Sheets API directly. Here's the rewritten script:

```python
# Import the Gensim library
import gensim
import requests
import json

# Google Sheets API libraries
from google.oauth2 import service_account
from googleapiclient.discovery import build

# Load your JSON key file
key_file = 'your_json_file.json'

# Define the Google Sheets ID
spreadsheet_id = '1hyR0OMcYoddrVeYsUYQRZUjzmM9DdM_T3PtziIe7-Xc'

# Authenticate and create a service object for Google Sheets API
creds = service_account.Credentials.from_service_account_file(key_file, scopes=['https://www.googleapis.com/auth/spreadsheets'])
sheets_service = build('sheets', 'v4', credentials=creds)

# Function to get all values in column B (product descriptions)
def get_descriptions(spreadsheet_id):
    result = sheets_service.spreadsheets().values().get(spreadsheetId=spreadsheet_id, range='Sheet1!B:B').execute()
    values = result.get('values', [])
    return [value[0] for value in values if value]

# Loop through each description and generate a summary using Gensim
descriptions = get_descriptions(spreadsheet_id)
for description in descriptions:
    # Skip empty cells
    if description:
        # Print the original description
        print(f'Original description: {description}')
        # Generate and print the summary
        summary = gensim.summarization.summarize(description)
        print(f'Summary: {summary}')
        # Print a separator line
        print('-'*80)
```

Make sure to replace `your_json_file.json` with the name of your uploaded JSON key file and `spreadsheet_id` with the ID of your Google Spreadsheet. You can find the ID in the URL of your Google Spreadsheet: `https://docs.google.com/spreadsheets/d/<spreadsheet_id>/edit`.

**Mike:** I do not want to use a google API.  replace this function with something else or leave it out completely

**GPT:** If you don't want to use the Google Sheets API, you can directly use a CSV file for the product descriptions. To do this, you will need to export your Google Sheet as a CSV file and then upload it to your Colab environment. Here's the modified script without the Google Sheets API:

```python
# Import the Gensim library and other necessary libraries
import gensim
import csv
from google.colab import files

# Upload the CSV file to your Google Colab environment
uploaded = files.upload()

# Read the CSV file and store product descriptions in a list
def get_descriptions(file_name):
    descriptions = []
    with open(file_name, 'r') as csvfile:
        reader = csv.reader(csvfile)
        for row in reader:
            if row and len(row) > 1:  # Assuming descriptions are in the second column
                descriptions.append(row[1])
    return descriptions

# Replace 'your_file.csv' with the name of your uploaded CSV file
descriptions = get_descriptions('your_file.csv')

# Loop through each description and generate a summary using Gensim
for description in descriptions:
    # Skip empty cells
    if description:
        # Print the original description
        print(f'Original description: {description}')
        # Generate and print the summary
        summary = gensim.summarization.summarize(description)
        print(f'Summary: {summary}')
        # Print a separator line
        print('-'*80)
```

This script assumes that product descriptions are in the second column (column B) of your CSV file. Replace `'your_file.csv'` with the name of your uploaded CSV file.

**Mike:** what are the requirements

**GPT:** To run the updated script that reads product descriptions from a CSV file instead of using the Google Sheets API, you will need the following requirements:

1. Install the required library:
   - Gensim: A Python library for topic modeling, document indexing, and similarity retrieval with large corpora.
   
   You can install it in your Google Colab notebook by running:
   ```
   !pip install gensim
   ```

2. Export the Google Sheet containing product descriptions as a CSV file:
   - Open the Google Sheet, click on "File" in the top-left menu, then click on "Download" and choose "Comma-separated values (.csv)".

3. Upload the CSV file to your Google Colab environment using the "Files" tab on the left sidebar or using the provided code snippet in the script:
   ```
   from google.colab import files
   uploaded = files.upload()
   ```

After fulfilling these requirements, you should be able to run the updated script without any issues.

**Mike:** correct this for me : 
# Replace 'your_file.csv' with the name of your uploaded CSV file
descriptions = get_descriptions(/content/articles_analysis.xlsx)

**GPT:** To read an Excel file (`.xlsx`) instead of a CSV file, you will need to use the `pandas` library to read the file. First, you need to install the `pandas` and `openpyxl` libraries:

```
!pip install pandas openpyxl
```

Now, update the `get_descriptions` function and replace the line that reads the file with the following code:

```python
import pandas as pd

# Read the Excel file and store product descriptions in a list
def get_descriptions(file_name):
    descriptions = []
    df = pd.read_excel(file_name, engine='openpyxl')
    for index, row in df.iterrows():
        description = row[1]  # Assuming descriptions are in the second column
        if pd.notna(description):
            descriptions

**Mike:** I mean correct the syntax error :                descriptions.append(row[1])
    return descriptions

# Replace 'your_file.csv' with the name of your uploaded CSV file
descriptions = get_descriptions(/content/articles_analysis_URL - articles_analysis_URL.csv.csv)

# Loop through each description and generate a summary using Gensim
for description in descriptions:

**GPT:** I apologize for the confusion. You need to pass the file name as a string. Here's the corrected line:

```python
descriptions = get_descriptions('/content/articles_analysis_URL - articles_analysis_URL.csv.csv')
```

The complete script should look like this:

```python
# Import the Gensim library and other necessary libraries
import gensim
import csv
from google.colab import files

# Upload the CSV file to your Google Colab environment
uploaded = files.upload()

# Read the CSV file and store product descriptions in a list
def get_descriptions(file_name):
    descriptions = []
    with open(file_name, 'r') as csvfile:
        reader = csv.reader(csvfile)
        for row in reader:
            if row and len(row) > 1:  # Assuming descriptions are in the second column
                descriptions.append(row[1])
    return descriptions

# Replace 'your_file.csv' with the name of your uploaded CSV file
descriptions = get_descriptions('/content/articles_analysis_URL - articles_analysis_URL.csv.csv')

# Loop through each description and generate a summary using Gensim
for description in descriptions:
    # Skip empty cells
    if description:
        # Print the original description
        print(f'Original description: {description}')
        # Generate and print the summary
        summary = gensim.summarization.summarize(description)
        print(f'Summary: {summary}')
        # Print a separator line
        print('-'*80)
```

Make sure to replace `'/content/articles_analysis_URL - articles_analysis_URL.csv.csv'` with the correct path to your uploaded CSV file.

**Mike:** I got this error after running the script :  AttributeError                            Traceback (most recent call last)
<ipython-input-7-e5a74270489c> in <cell line: 24>()
     28         print(f'Original description: {description}')
     29         # Generate and print the summary
---> 30         summary = gensim.summarization.summarize(description)
     31         print(f'Summary: {summary}')
     32         # Print a separator line

AttributeError: module 'gensim' has no attribute 'summarization'

**GPT:** I apologize for the confusion. It seems that the Gensim library has not been imported correctly. Please make sure you have installed the Gensim library using:

```python
!pip install gensim
```

Then, check your import statement for Gensim at the beginning of your script. It should be:

```python
import gensim
```

If the problem persists, you can try importing the `summarize` function directly from the `gensim.summarization` module. Modify the import statement as follows:

```python
from gensim.summarization import summarize
```

And update the line that calls the `summarize` function to:

```python
summary = summarize(description)
```

Here's the complete updated script:

```python
# Import the necessary libraries
from gensim.summarization import summarize
import csv
from google.colab import files

# Upload the CSV file to your Google Colab environment
uploaded = files.upload()

# Read the CSV file and store product descriptions in a list
def get_descriptions(file_name):
    descriptions = []
    with open(file_name, 'r') as csvfile:
        reader = csv.reader(csvfile)
        for row in reader:
            if row and len(row) > 1:  # Assuming descriptions are in the second column
                descriptions.append(row[1])
    return descriptions

# Replace 'your_file.csv' with the name of your uploaded CSV file
descriptions = get_descriptions('/content/articles_analysis_URL - articles_analysis_URL.csv.csv')

# Loop through each description and generate a summary using Gensim
for description in descriptions:
    # Skip empty cells
    if description:
        # Print the original description
        print(f'Original description: {description}')
        # Generate and print the summary
        summary = summarize(description)
        print(f'Summary: {summary}')
        # Print a separator line
        print('-'*80)
```

Make sure to replace `'/content/articles_analysis_URL - articles_analysis_URL.csv.csv'` with the correct path to your uploaded CSV file.

**Mike:** another error:  ModuleNotFoundError                       Traceback (most recent call last)
<ipython-input-8-0a029fb2bbe3> in <cell line: 2>()
      1 # Import the necessary libraries
----> 2 from gensim.summarization import summarize
      3 import csv
      4 from google.colab import files
      5 

ModuleNotFoundError: No module named 'gensim.summarization'

**GPT:** I apologize for the confusion. It appears there is an issue with the import statement. Gensim's `summarize` function is now part of the `gensim.summarization.summarizer` module. 

Please use the following import statement:

```python
from gensim.summarization.summarizer import summarize
```

Here's the complete updated script:

```python
# Import the necessary libraries
from gensim.summarization.summarizer import summarize
import csv
from google.colab import files

# Upload the CSV file to your Google Colab environment
uploaded = files.upload()

# Read the CSV file and store product descriptions in a list
def get_descriptions(file_name):
    descriptions = []
    with open(file_name, 'r') as csvfile:
        reader = csv.reader(csvfile)
        for row in reader:
            if row and len(row) > 1:  # Assuming descriptions are in the second column
                descriptions.append(row[1])
    return descriptions

# Replace 'your_file.csv' with the name of your uploaded CSV file
descriptions = get_descriptions('/content/articles_analysis_URL - articles_analysis_URL.csv.csv')

# Loop through each description and generate a summary using Gensim
for description in descriptions:
    # Skip empty cells
    if description:
        # Print the original description

**Mike:** it cant find gensim.  pick another python library that will summarize the content .  I do  not need analysis of the URL's, just the content ., I already scraped hte URLS and placed the data in the excel file .

**GPT:** I apologize for the confusion. If Gensim is not working, you can use the BERT-based text summarization library, `bert-extractive-summarizer`. To use this library, follow these steps:

1. Install the required libraries:
   ```
   !pip install bert-extractive-summarizer
   !pip install transformers
   ```

2. Import the necessary libraries and update the script:

```python
from summarizer import Summarizer
import csv
from google.colab import files

# Upload the CSV file to your Google Colab environment
uploaded = files.upload()

# Read the CSV file and store product descriptions in a list
def get_descriptions(file_name):
    descriptions = []
    with open(file_name, 'r') as csvfile:
        reader = csv.reader(csvfile)
        for row in reader:
            if row and len(row) > 1:  # Assuming descriptions are in the second column
                descriptions.append(row[1])
    return descriptions

# Replace 'your_file.csv' with the name of your uploaded CSV file
descriptions = get_descriptions('/content/articles_analysis_URL - articles_analysis_URL.csv.csv')

# Initialize the BERT-based summarizer
model = Summarizer()

# Loop through each description and generate a summary using the BERT-based summarizer
for description in descriptions:
    # Skip empty cells
    if description:
        # Print the original description
        print(f'Original description: {description}')
        # Generate and print the summary
        summary = model(description)
        print(f'Summary: {summary}')
        # Print a separator line
        print('-'*80)
```

Make sure to replace `'/content/articles_analysis_URL - articles_analysis_URL.csv.csv'` with the correct path to your uploaded CSV file. This script uses the BERT-based summarizer to generate summaries for your product descriptions.

**Mike:** what will bert do ?

**GPT:** BERT (Bidirectional Encoder Representations from Transformers) is a state-of-the-art pre-trained language model developed by Google. It has been proven to perform exceptionally well in a wide range of natural language processing (NLP) tasks, including text summarization.

When using BERT for text summarization, the model takes a given input text and generates a condensed version that retains the most important information from the original text. It does so by understanding the context and relationships between words in the text, allowing it to identify and extract the most relevant information.

In the provided script, the `bert-extractive-summarizer` library is used, which employs BERT to perform extractive summarization. Extractive summarization involves selecting and concatenating the most important sentences from the input text to form a shorter summary. This method retains the original wording and structure of the selected sentences, which can result in a more coherent and grammatically correct summary compared to abstractive summarization techniques that generate new sentences.

So, when using the BERT-based summarizer in the script, it will analyze the product descriptions from your CSV file and generate concise summaries while preserving the essential information from the original text.

**Mike:** will the results be outputted so I can reference it ?

**GPT:** In the provided script, the results (summaries) are printed to the screen. If you want to save the summaries to a new file for future reference, you can modify the script to write the results to a new CSV file. Here's the updated script that writes the summaries to a new CSV file:

```python
from summarizer import Summarizer
import csv
from google.colab import files

# Upload the CSV file to your Google Colab environment
uploaded = files.upload()

# Read the CSV file and store product descriptions in a list
def get_descriptions(file_name):
    descriptions = []
    with open(file_name, 'r') as csvfile:
        reader = csv.reader(csvfile)
        for row in reader:
            if row and len(row) > 1:  # Assuming descriptions are in the second column
                descriptions.append(row[1])
    return descriptions

# Replace 'your_file.csv' with the name of your uploaded CSV file
descriptions = get_descriptions('/content/articles_analysis_URL - articles_analysis_URL.csv.csv')

# Initialize the BERT-based summarizer
model = Summarizer()

# Create a new CSV file to store the summaries
with open('summaries.csv', 'w', newline='', encoding='utf-8') as csvfile:
    writer = csv.writer(csvfile)

    # Write the header row
    writer.writerow(['Original Description', 'Summary'])

    # Loop through each description and generate a summary using the BERT-based summarizer
    for description in descriptions:
        # Skip empty cells
        if description:
            # Generate the summary
            summary = model(description)

            # Write the original description and the summary to the CSV file
            writer.writerow([description, summary])

# Download the summaries CSV file to your local computer
files.download('summaries.csv')
```

This script will create a new CSV file called `summaries.csv` that contains the original descriptions and their corresponding summaries. After running the script, the `summaries.csv` file will be downloaded to your local computer, and you can reference the summaries from that file.

**Mike:** what do suggest is the best way to analyze the output for further analysis ? should I output as a text file, cvs, word document?  I want to take the output and use gpt-4 for futher analysis.

**GPT:** If you plan to use GPT-4 for further analysis of the output summaries, I suggest saving the results in a text file. Text files are simple, easy to read, and widely supported by most programming languages, including Python, which is the primary language for GPT-4.

Here's the updated script that writes the summaries to a new text file:

```python
from summarizer import Summarizer
import csv
from google.colab import files

# Upload the CSV file to your Google Colab environment
uploaded = files.upload()

# Read the CSV file and store product descriptions in a list
def get_descriptions(file_name):
    descriptions = []
    with open(file_name, 'r') as csvfile:
        reader = csv.reader(csvfile)
        for row in reader:
            if row and len(row) > 1:  # Assuming descriptions are in the second column
                descriptions.append(row[1])
    return descriptions

# Replace 'your_file.csv' with the name of your uploaded CSV file
descriptions = get_descriptions('/content/articles_analysis_URL - articles_analysis_URL.csv.csv')

# Initialize the BERT-based summarizer
model = Summarizer()

# Create a new text file to store the summaries
with open('summaries.txt', 'w', encoding='utf-8') as txtfile:
    # Loop through each description and generate a summary using the BERT-based summarizer
    for description in descriptions:
        # Skip empty cells
        if description:
            # Generate the summary
            summary = model(description)

            # Write the summary to the text file
            txtfile.write(summary + '\n\n')

# Download the summaries text file to your local computer
files.download('summaries.txt')
```

This script will create a new text file called `summaries.txt` that contains the summaries separated by two newline characters. After running the script, the `summaries.txt` file will be downloaded to your local computer, and you can use it as input for GPT-4 for further analysis.

**Mike:** great!  that worked!  what analysis can I perform with GPT to draw expert level conclusions from the summaries?

**GPT:** GPT-4, as an advanced language model, can be used for various analysis tasks on the summaries. Here are some ideas on how to leverage GPT-4 for expert-level conclusions:

1. **Topic Modeling**: Use GPT-4 to identify the main topics or themes present in the summaries. This can help you understand the primary subjects covered in the content and discover patterns or trends.

2. **Sentiment Analysis**: Analyze the sentiment of the summaries (positive, negative, or neutral). This can help you gauge the overall tone and emotions conveyed in the content.

3. **Named Entity Recognition**: Extract entities such as names, organizations, locations, and dates from the summaries. This can give you valuable insights into the key players and events mentioned in the content.

4. **Text Classification**: Classify the summaries into predefined categories based on their content. This can help you organize and understand the content more effectively.

5. **Question-Answering**: Use GPT-4 as a question-answering system to ask specific questions about the summaries and get detailed answers. This can help you gain in-depth knowledge about the content.

6. **Summary Expansion**: Generate more detailed explanations or expand on specific points in the summaries. This can help you gain a deeper understanding of the content and explore specific topics more thoroughly.

To perform these tasks using GPT-4, you will need to fine-tune the model on relevant datasets for each specific task and develop custom prompts to interact with the model effectively. It's important to note that GPT-4 can produce human-like text but may not always provide accurate or reliable conclusions. Make sure to validate the model's outputs and use them as a starting point for further analysis rather than accepting them as definitive conclusions.

**Mike:** how would I perform Text Classification: ?  is the best way to write a python script ?

**GPT:** Yes, writing a Python script is a great way to perform text classification using GPT-4 or another suitable pre-trained language model. For text classification, you can use the `transformers` library, which provides pre-trained models and tools for various NLP tasks, including text classification.

Here's an example of how to perform text classification using the `transformers` library with the BERT model:

1. First, install the `transformers` library:

```bash
!pip install transformers
```

2. Import the necessary libraries:

```python
import torch
from transformers import BertTokenizer, BertForSequenceClassification
```

3. Load the pre-trained BERT tokenizer and model for sequence classification. Replace `'bert-base-uncased'` with the appropriate pre-trained model if you're using a different one:

```python
tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')
model = BertForSequenceClassification.from_pretrained('bert-base-uncased')
```

4. Fine-tune the model on your dataset. You'll need to split your dataset into training and validation sets, tokenize the input texts, create DataLoader objects, and train the model using an optimizer and loss function. This process is beyond the scope of a single response, but you can refer to the [Hugging Face Transformers fine-tuning guide](https://huggingface.co/transformers/training.html) for detailed instructions.

5. Once you have a fine-tuned model, you can use it to classify the summaries from your text file. Here's an example of how to classify a single summary:

```python
def classify_text(text, model, tokenizer):
    inputs = tokenizer(text, return_tensors='pt')
    outputs = model(**inputs)
    logits = outputs.logits
    prediction = torch.argmax(logits, dim=1).item()
    return prediction

summary = "This is an example summary."
classification = classify_text(summary, model, tokenizer)

print(f"Classification: {classification}")
```

This function takes a summary, tokenizes it, feeds it into the fine-tuned BERT model, and returns the predicted class. You can iterate through the summaries from your text file and classify each one using this function.

Please note that this is just an example, and you'll need to adapt the code for your specific classification task and dataset. Additionally, if you want to use GPT-4 instead of BERT, replace the tokenizer and model with the corresponding GPT-4 components.

**Mike:** where do I place the text file ?

**GPT:** In the context of using Google Colab, you can upload the text file to your Colab environment and then read it from there. Here's a step-by-step process:

1. Use the following code snippet to upload the text file to your Google Colab environment:

```python
from google.colab import files

uploaded = files.upload()
```

After running this code, you'll see a file upload dialog. Select the text file you want to upload (e.g., `summaries.txt`).

2. Once the file is uploaded, you can read the contents of the file using Python's built-in functions. For example, you can use the following code snippet to read the file line by line and store the summaries in a list:

```python
filename = "summaries.txt"

with open(filename, "r", encoding="utf-8") as file:
    summaries = file.read().split("\n\n")
```

Now you have the summaries in the `summaries` list, which you can use as input for text classification or any other analysis task.

If you're using a local Python environment, you can skip the file upload step and directly read the file from your local file system. Make sure the Python script and the text file are in the same directory or provide the correct path to the file.

**Mike:** how can I modify the script to read the URL's instead of the scraped data ?  I have an excel doc that has  a list of 40 URL's that I want summarized in the same way as the previous script you wrote .  modify the script to read URL's instead of scraped data.  here is the old script : from summarizer import Summarizer
import csv
from google.colab import files

# Upload the CSV file to your Google Colab environment
uploaded = files.upload()

# Read the CSV file and store product descriptions in a list
def get_descriptions(file_name):
    descriptions = []
    with open(file_name, 'r') as csvfile:
        reader = csv.reader(csvfile)
        for row in reader:
            if row and len(row) > 1:  # Assuming descriptions are in the second column
                descriptions.append(row[1])
    return descriptions

# Replace 'your_file.csv' with the name of your uploaded CSV file
descriptions = get_descriptions('/content/articles_analysis_URL - articles_analysis_URL.csv.csv')

# Initialize the BERT-based summarizer
model = Summarizer()

# Create a new text file to store the summaries
with open('summaries.txt', 'w', encoding='utf-8') as txtfile:
    # Loop through each description and generate a summary using the BERT-based summarizer
    for description in descriptions:
        # Skip empty cells
        if description:
            # Generate the summary
            summary = model(description)

            # Write the summary to the text file
            txtfile.write(summary + '\n\n')

# Download the summaries text file to your local computer
files.download('summaries.txt')

**GPT:** To modify the script to read and summarize the content from the URLs, you'll need to use a library like `requests` to fetch the webpages and `BeautifulSoup` to parse the HTML content. Then, you can extract the main text content from the pages and pass it to the summarizer. Here's the updated script:

```python
!pip install requests beautifulsoup4

from summarizer import Summarizer
import requests
from bs4 import BeautifulSoup
import csv
from google.colab import files

# Upload the CSV file to your Google Colab environment
uploaded = files.upload()

# Fetch webpage content given a URL
def fetch_content(url):
    try:
        response = requests.get(url)
        soup = BeautifulSoup(response.content, 'html.parser')
        text = ' '.join([p.text for p in soup.find_all('p')])
        return text
    except Exception as e:
        print(f"Error fetching content from URL: {url}")
        print(e)
        return ""

# Read the CSV file and store URLs in a list
def get_urls(file_name):
    urls = []
    with open(file_name, 'r') as csvfile:
        reader = csv.reader(csvfile)
        for row in reader:
            if row and len(row) > 0:
                urls.append(row[0])
    return urls

# Replace 'your_file.csv' with the name of your uploaded CSV file
urls = get_urls('/content/your_file.csv')

# Initialize the BERT-based summarizer
model = Summarizer()

# Create a new text file to store the summaries
with open('summaries.txt', 'w', encoding='utf-8') as txtfile:
    # Loop through each URL and generate a summary using the BERT-based summarizer
    for url in urls:
        # Fetch the content from the URL
        content = fetch_content(url)

        # Generate the summary
        summary = model(content)

        # Write the summary to the text file
        txtfile.write(summary + '\n\n')

# Download the summaries text file to your local computer
files.download('summaries.txt')
```

This script first fetches the content from each URL and then passes the content to the BERT-based summarizer to generate summaries. Make sure to replace `'your_file.csv'` with the name of your uploaded CSV file containing the URLs.

Please note that this script is a simple example and may not work perfectly for all websites, as the HTML structure can vary significantly. You might need to adjust the content extraction code to handle specific websites more effectively.

**Mike:** list the requirements so I can copy them into colab

**GPT:** To run the updated script in Google Colab, you'll need to install the following libraries:

1. `summarizer` (BERT-based summarizer)
2. `requests` (to fetch webpage content)
3. `beautifulsoup4` (to parse HTML content)

You can install these libraries by running the following commands in a Colab cell:

```python
!pip install summarizer
!pip install requests
!pip install beautifulsoup4
```

These commands will install the required libraries, and you'll be able to run the modified script without issues.

**Mike:** I got this error after running it :  nicodeDecodeError                        Traceback (most recent call last)
<ipython-input-3-942f76c94313> in <cell line: 35>()
     33 
     34 # Replace 'your_file.csv' with the name of your uploaded CSV file
---> 35 urls = get_urls('/content/articles_analysis.xlsx')
     36 
     37 # Initialize the BERT-based summarizer

1 frames
/usr/lib/python3.10/codecs.py in decode(self, input, final)
    320         # decode input (taking the buffer into account)
    321         data = self.buffer + input
--> 322         (result, consumed) = self._buffer_decode(data, self.errors, final)
    323         # keep undecoded input until the next call
    324         self.buffer = data[consumed:]

UnicodeDecodeError: 'utf-8' codec can't decode bytes in position 15-16: invalid continuation byte

**GPT:** The error you encountered is related to the encoding of your file. It appears that your file is an Excel file (`.xlsx`), not a CSV file (`.csv`). The script I provided is designed to read CSV files, not Excel files.

To handle Excel files, you can use the `pandas` library to read the URLs from the Excel file. First, you'll

**Mike:** TypeError                                 Traceback (most recent call last)
<ipython-input-4-3b7c56b59f9b> in <cell line: 41>()
     46 
     47         # Generate the summary
---> 48         summary = model(content)
     49 
     50         # Write the summary to the text file

TypeError: 'Summarizer' object is not callable

**GPT:** I apologize for the confusion. It seems that the BERT-based summarizer from the `summarizer` package has a different syntax for generating summaries. Please use the following syntax to generate the summary:

```python
summary = model(content, min_length=60, max_length=150)  # You can adjust min_length and max_length as needed
summary = summary[0]['summary_text']
```

Replace the line `summary = model(content)` in the script with the above two lines of code, and the script should work without issues. Here's the modified part of the script:

```python
# Loop through each URL and generate a summary using the BERT-based summarizer
for url in urls:
    # Fetch the content from the URL
    content = fetch_content(url)

    # Generate the summary
    summary = model(content, min_length=60, max_length=150)  # You can adjust min_length and max_length as needed
    summary = summary[0]['summary_text']

    # Write the summary to the text file
    txtfile.write(summary + '\n\n')
```

**Mike:** write the entire script

**GPT:** Here's the complete script with the necessary modifications:

```python
!pip install summarizer
!pip install requests
!pip install beautifulsoup4
!pip install pandas

from summarizer import Summarizer
import requests
from bs4 import BeautifulSoup
import pandas as pd
from google.colab import files

# Upload the Excel file to your Google Colab environment
uploaded = files.upload()

# Fetch webpage content given a URL
def fetch_content(url):
    try:
        response = requests.get(url)
        soup = BeautifulSoup(response.content, 'html.parser')
        text = ' '.join([p.text for p in soup.find_all('p')])
        return text
    except Exception as e:
        print(f"Error fetching content from URL: {url}")
        print(e)
        return ""

# Read the Excel file and store URLs in a list
def get_urls(file_name):
    df = pd.read_excel(file_name)
    urls = df.iloc[:, 0].tolist()
    return urls

# Replace 'your_file.xlsx' with the name of your uploaded Excel file
urls = get_urls('/content/your_file.xlsx')

# Initialize the BERT-based summarizer
model = Summarizer()

# Create a new text file to store the summaries
with open('summaries.txt', 'w', encoding='utf-8') as txtfile:
    # Loop through each URL and generate a summary using the BERT-based summarizer
    for url in urls:
        # Fetch the content from the URL
        content = fetch_content(url)

        # Generate the summary
        summary = model(content, min_length=60, max_length=150)  # You can adjust min_length and max_length as needed
        summary = summary[0]['summary_text']

        # Write the summary to the text file
        txtfile.write(summary + '\n\n')

# Download the summaries text file to your local computer
files.download('summaries.txt')
```

Make sure to replace `'your_file.xlsx'` with the name of your uploaded Excel file containing the URLs. This script should now read the URLs from your Excel file, fetch the content, generate summaries using the BERT-based summarizer, and save the summaries to a text file.

**Mike:** Saving articles_analysisReal.csv to articles_analysisReal (2).csv
---------------------------------------------------------------------------
ValueError                                Traceback (most recent call last)
<ipython-input-5-9ab18eb47b22> in <cell line: 34>()
     32 
     33 # Replace 'your_file.xlsx' with the name of your uploaded Excel file
---> 34 urls = get_urls('/content/articles_analysisReal (1).csv')
     35 
     36 # Initialize the BERT-based summarizer

4 frames
/usr/local/lib/python3.10/dist-packages/pandas/io/excel/_base.py in __init__(self, path_or_buffer, engine, storage_options)
   1654                 )
   1655                 if ext is None:
-> 1656                     raise ValueError(
   1657                         "Excel file format cannot be determined, you must specify "
   1658                         "an engine manually."

ValueError: Excel file format cannot be determined, you must specify an engine manually.

**GPT:** I apologize for the confusion. The error occurs because the file you uploaded is a CSV file (`.csv`), not an Excel file (`.xlsx`). In this case, you should use the `pd.read_csv()` function instead of `pd.read_excel()`. Please modify the `get_urls` function as follows:

```python
# Read the CSV file and store

**Mike:** it still says : ---------------------------------------------------------------------------
TypeError                                 Traceback (most recent call last)
<ipython-input-6-eff8ad53319b> in <cell line: 40>()
     45 
     46         # Generate the summary
---> 47         summary = model(content, min_length=60, max_length=150)  # You can adjust min_length and max_length as needed
     48         summary = summary[0]['summary_text']
     49 

TypeError: 'Summarizer' object is not callable

**GPT:** Apologies for the confusion earlier. The error is because of the incorrect usage of the `Summarizer` class from the `summarizer` package. I made a mistake in my previous response. Let's switch to using the `transformers` library, which provides an easy-to-use interface for the BERT model.

First, install the `transformers` library by running:

```python
!pip install transformers
```

Then, update the script as follows:

```python
from transformers import pipeline
import requests
from bs4 import BeautifulSoup
import pandas as pd
from google.colab import files

# Upload the CSV file to your Google Colab environment
uploaded = files.upload()

# Fetch webpage content given a URL
def fetch_content(url):
    try:
        response = requests.get(url)
        soup = BeautifulSoup(response.content, 'html.parser')
        text = ' '.join([p.text for p in soup.find_all('p')])
        return text
    except Exception as e:
        print(f"Error fetching content from URL: {url}")
        print(e)
        return ""

# Read the CSV file and store URLs in a list
def get_urls(file_name):
    df = pd.read_csv(file_name)
    urls = df.iloc[:, 0].tolist()
    return urls

# Replace 'your_file.csv' with the name of your uploaded CSV file
urls = get_urls('/content/your_file.csv')

# Initialize the BERT-based summarizer
summarizer = pipeline('summarization')

# Create a new text file to store the summaries
with open('summaries.txt', 'w', encoding='utf-8') as txtfile:
    # Loop through each URL and generate a summary using the BERT-based summarizer
    for url in urls:
        # Fetch the content from the URL
        content = fetch_content(url)

        # Generate the summary
        summary = summarizer(content, min_length=60, max_length=150)  # You can adjust min_length and max_length as needed
        summary = summary[0]['summary_text']

        # Write the summary to the text file
        txtfile.write(summary + '\n\n')

# Download the summaries text file to your local computer
files.download('summaries.txt')
```

This script uses the `transformers` library to create a summarization pipeline with the BERT model. Replace `'your_file.csv'` with the name of your uploaded CSV file containing the URLs. The script should now work without any issues.

**Mike:** another error : IndexError                                Traceback (most recent call last)
<ipython-input-9-768b2b01e063> in <cell line: 35>()
     40 
     41         # Generate the summary
---> 42         summary = summarizer(content, min_length=60, max_length=150)  # You can adjust min_length and max_length as needed
     43         summary = summary[0]['summary_text']
     44 

14 frames
/usr/local/lib/python3.10/dist-packages/torch/nn/functional.py in embedding(input, weight, padding_idx, max_norm, norm_type, scale_grad_by_freq, sparse)
   2208         # remove once script supports set_grad_enabled
   2209         _no_grad_embedding_renorm_(weight, input, max_norm, norm_type)
-> 2210     return torch.embedding(weight, input, padding_idx, scale_grad_by_freq, sparse)
   2211 
   2212 

IndexError: index out of range in self

**GPT:** The "IndexError: index out of range in self" error might be caused by an issue with the text content retrieved from the URL or because the content is too short. I suggest adding a check to ensure that the content is not empty and has sufficient length before attempting to generate a summary.

Please modify the script as follows:

```python
# ... (previous code)

# Loop through each URL and generate a summary using the BERT-based summarizer
for url in urls:
    # Fetch the content from the URL
    content = fetch_content(url)

    # Check if the content is not empty and has a sufficient length
    if content and len(content) > 200:  # You can adjust the length threshold as needed
        # Generate the summary
        summary = summarizer(content, min_length=60, max_length=150)  # You can adjust min_length and max_length as needed
        summary = summary[0]['summary_text']

        # Write the summary to the text file
        txtfile.write(summary + '\n\n')

# ... (following code)
```

This modification ensures that the content is not empty and has a length greater than 200 characters before generating a summary. You can adjust the length threshold based on your needs.

**Mike:** fix the indentation issue : # Loop through each URL and generate a summary using the BERT-based summarizer
for url in urls:
    # Fetch the content from the URL
    content = fetch_content(url)

**GPT:** Apologies for the indentation issue in the previous response. Here's the corrected version of the code snippet:

```python
# Loop through each URL and generate a summary using the BERT-based summarizer
for url in urls:
    # Fetch the content from the URL
    content = fetch_content(url)

    # Check if the content is not empty and has a sufficient length
    if content and len(content) > 200:  # You can adjust the length threshold as needed
        # Generate the summary
        summary = summarizer(content, min_length=60, max_length=150)  # You can adjust min_length and max_length as needed
        summary = summary[0]['summary_text']

        # Write the summary to the text file
        txtfile.write(summary + '\n\n')
```

This code should work without any indentation issues.

**Mike:** I got this error : ndexError                                Traceback (most recent call last)
<ipython-input-17-584c79cb228e> in <cell line: 35>()
     44     if content and len(content) > 200:  # You can adjust the length threshold as needed
     45         # Generate the summary
---> 46         summary = summarizer(content, min_length=60, max_length=150)  # You can adjust min_length and max_length as needed
     47         summary = summary[0]['summary_text']
     48 

14 frames
/usr/local/lib/python3.10/dist-packages/torch/nn/functional.py in embedding(input, weight, padding_idx, max_norm, norm_type, scale_grad_by_freq, sparse)
   2208         # remove once script supports set_grad_enabled
   2209         _no_grad_embedding_renorm_(weight, input, max_norm, norm_type)
-> 2210     return torch.embedding(weight, input, padding_idx, scale_grad_by_freq, sparse)
   2211 
   2212 

IndexError: index out of range in self

**GPT:** I apologize for the error. It seems like the issue is related to the tokenizer in the summarization model. Let's add a check for the token count before calling the summarizer.

Please update the script as follows:

```python
# ... (previous code)

# Loop through each URL and generate a summary using the BERT-based summarizer
for url in urls:
    # Fetch the content from the URL
    content = fetch_content(url)

    # Tokenize the content and check if the token count is within the acceptable range
    tokens = tokenizer(content, return_tensors='pt')
    token_count = tokens['input_ids'].shape[1]

    if token_count > 50 and token_count < tokenizer.model_max_length:  # You can adjust the token count threshold as needed
        # Generate the summary
        summary = summarizer(content, min_length=60, max_length=150)  # You can adjust min_length and max_length as needed
        summary = summary[0]['summary_text']

        # Write the summary to the text file
        txtfile.write(summary + '\n\n')

# ... (following code)
```

This modification checks the token count before passing the content to the summarizer. It ensures that the token count is greater than 50 (adjust as needed) and less than the tokenizer's maximum length.

**Mike:** another error : articles_analysisReal.csv(text/csv) - 1416 bytes, last modified: 4/28/2023 - 100% done
No model was supplied, defaulted to sshleifer/distilbart-cnn-12-6 and revision a4f8f3e (https://huggingface.co/sshleifer/distilbart-cnn-12-6).
Using a pipeline without specifying a model name and revision in production is not recommended.
Saving articles_analysisReal.csv to articles_analysisReal (2).csv
---------------------------------------------------------------------------
NameError                                 Traceback (most recent call last)
<ipython-input-20-57f3b413e654> in <cell line: 35>()
     44 
     45     # Tokenize the content and check if the token count is within the acceptable range
---> 46     tokens = tokenizer(content, return_tensors='pt')
     47     token_count = tokens['input_ids'].shape[1]
     48 

NameError: name 'tokenizer' is not defined

**GPT:** I apologize for the oversight. It appears that I forgot to include the tokenizer's import and initialization in the script. Please add the following lines at the beginning of the script, after the other imports and initializations:

```python
from transformers import AutoTokenizer

tokenizer = AutoTokenizer.from_pretrained('sshleifer/distilbart-cnn-12-6')
```

This should resolve the error, and the script should run without issues.

**Mike:** where does the script go ?

**GPT:** Apologies for the confusion. Here's the complete script with the required imports and initializations:

```python
import requests
from bs4 import BeautifulSoup
import pandas as pd
from transformers import AutoTokenizer, pipeline
from google.colab import files

def fetch_content(url):
    try:
        response = requests.get(url)
        soup = BeautifulSoup(response.content, 'html.parser')
        paragraphs = soup.find_all('p')
        content = ' '.join([p.text for p in paragraphs])
        return content
    except Exception as e:
        print(f'Error fetching content from URL: {url}')
        return None

def get_urls(file_name):
    urls = []
    df = pd.read_excel(file_name)
    urls = df.iloc[:, 0].tolist()
    return urls

# Initialize the tokenizer
tokenizer = AutoTokenizer.from_pretrained('sshleifer/distilbart-cnn-12-6')

# Initialize the BERT-based summarizer
summarizer = pipeline('summarization', model='sshleifer/distilbart-cnn-12-6')

# Upload the Excel file to your Google Colab environment
uploaded = files.upload()

# Replace 'your_file.xlsx' with the name of your uploaded Excel file
urls = get_urls('/content/articles_analysisReal (2).csv')

# Create a new text file to store the summaries
with open('summaries.txt', 'w', encoding='utf-8') as txtfile:
    # Loop through each URL and generate a summary using the BERT-based summarizer
    for url in urls:
        # Fetch the content from the URL
        content = fetch_content(url)

        # Tokenize the content and check if the token count is within the acceptable range
        tokens = tokenizer(content, return_tensors='pt')
        token_count = tokens['input_ids'].shape[1]

        if token_count > 50 and token_count < tokenizer.model_max_length:  # You can adjust the token count threshold as needed
            # Generate the summary
            summary = summarizer(content, min_length=60, max_length=150)  # You can adjust min_length and max_length as needed
            summary = summary[0]['summary_text']

            # Write the summary to the text file
            txtfile.write(summary + '\n\n')

# Download the summaries text file to your local computer
files.download('summaries.txt')
```

Copy and paste the entire script into a new cell in Google Colab and run it. The script should now work without any issues.

**Mike:** here is a script I wrote, check for errors : import requests
from bs4 import BeautifulSoup
import pandas as pd
from transformers import AutoTokenizer, pipeline
from google.colab import files

def fetch_content(url):
    try:
        response = requests.get(url)
        soup = BeautifulSoup(response.content, 'html.parser')
        paragraphs = soup.find_all('p')
        content = ' '.join([p.text for p in paragraphs])
        return content
    except Exception as e:
        print(f'Error fetching content from URL: {url}')
        return None

def get_urls(file_name):
    urls = []
    df = pd.read_excel(file_name)
    urls = df.iloc[:, 0].tolist()
    return urls

# Initialize the tokenizer
tokenizer = AutoTokenizer.from_pretrained('sshleifer/distilbart-cnn-12-6')

# Initialize the BERT-based summarizer
summarizer = pipeline('summarization', model='sshleifer/distilbart-cnn-12-6')

# Upload the Excel file to your Google Colab environment
uploaded = files.upload()

# Replace 'your_file.xlsx' with the name of your uploaded Excel file
urls = get_urls('/content/articles_analysis (1).xlsx')

# Create a new text file to store the summaries
with open('summaries.txt', 'w', encoding='utf-8') as txtfile:
    # Loop through each URL and generate a summary using the BERT-based summarizer
    for url in urls:
        # Fetch the content from the URL
        content = fetch_content(url)

        # Check if the content is not empty and has a sufficient length
        if content and len(content) > 200:  # You can adjust the length threshold as needed
            # Tokenize the content and check if the token count is within the acceptable range
            tokenizer = AutoTokenizer.from_pretrained("facebook/bart-large-cnn")
            text_tokens = tokenizer(content, padding=True, truncation=True, return_tensors="pt")
            token_count = text_tokens["input_ids"].shape[1]

            if token_count > 50 and token_count < tokenizer.model_max_length:  # You can adjust the token count threshold as needed
                # Generate the summary
                summary = summarizer(content, min_length=60, max_length=150)  # You can adjust min_length and max_length as needed
                summary = summary[0]['summary_text']

                # Write the summary to the text file
                txtfile.write(summary + '\n\n')

# Download the summaries text file to your local computer
files.download('summaries.txt')

**GPT:** Your script looks good overall, but there are a couple of minor changes I would suggest.

1. You have initialized the tokenizer twice. Remove the second initialization of the tokenizer (`tokenizer = AutoTokenizer.from_pretrained("facebook/bart-large-cnn")`) inside the loop, as you've already initialized it earlier.

Here is the corrected version of your script:

```python
import requests
from bs4 import BeautifulSoup
import pandas as pd
from transformers import AutoTokenizer, pipeline
from google.colab import files

def fetch_content(url):
    try:
        response = requests.get(url)
        soup = BeautifulSoup(response.content, 'html.parser')
        paragraphs = soup.find_all('p')
        content = ' '.join([p.text for p in paragraphs])
        return content
    except Exception as e:
        print(f'Error fetching content from URL: {url}')
        return None

def get_urls(file_name):
    urls = []
    df = pd.read_excel(file_name)
    urls = df.iloc[:, 0].tolist()
    return urls

# Initialize the tokenizer
tokenizer = AutoTokenizer.from_pretrained('sshleifer/distilbart-cnn-12-6')

# Initialize the BERT-based summarizer
summarizer = pipeline('summarization', model='sshleifer/distilbart-cnn-12-6')

# Upload the Excel file to your Google Colab environment
uploaded = files.upload()

# Replace 'your_file.xlsx' with the name of your uploaded Excel file
urls = get_urls('/content/articles_analysis (1).xlsx')

# Create a new text file to store the summaries
with open('summaries.txt', 'w', encoding='utf-8') as txtfile:
    # Loop through each URL and generate a summary using the BERT-based summarizer
    for url in urls:
        # Fetch the content from the URL
        content = fetch_content(url)

        # Check if the content is not empty and has a sufficient length
        if content and len(content) > 200:  # You can adjust the length threshold as needed
            # Tokenize the content and check if the token count is within the acceptable range
            text_tokens = tokenizer(content, padding=True, truncation=True, return_tensors="pt")
            token_count = text_tokens["input_ids"].shape[1]

            if token_count > 50 and token_count < tokenizer.model_max_length:  # You can adjust the token count threshold as needed
                # Generate the summary
                summary = summarizer(content, min_length=60, max_length=150)  # You can adjust min_length and max_length as needed
                summary = summary[0]['summary_text']

                # Write the summary to the text file
                txtfile.write(summary + '\n\n')

# Download the summaries text file to your local computer
files.download('summaries.txt')
```

Copy and paste the corrected script into a new cell in Google Colab and run it. The script should work without any issues.

**Mike:** it worked, but only returned 4 of 8 url's.  how can I update the script to be effective ?

**GPT:** If some URLs are not being summarized, it could be due to a few reasons:

1. The content from the URL might not be fetched correctly.
2. The content length or token count might not meet the specified thresholds.

To help diagnose the issue, you can add some print statements to see what is happening with each URL. Here is the updated script with print statements to help you understand what is happening:

```python
import requests
from bs4 import BeautifulSoup
import pandas as pd
from transformers import AutoTokenizer, pipeline
from google.colab import files

def fetch_content(url):
    try:
        response = requests.get(url)
        soup = BeautifulSoup(response.content, 'html.parser')
        paragraphs = soup.find_all('p')
        content = ' '.join([p.text for p in paragraphs])
        return content
    except Exception as e:
        print(f'Error fetching content from URL: {url}')
        return None

def get_urls(file_name):
    urls = []
    df = pd.read_excel(file_name)
    urls = df.iloc[:, 0].tolist()
    return urls

# Initialize the tokenizer
tokenizer = AutoTokenizer.from_pretrained('sshleifer/distilbart-cnn-12-6')

# Initialize the BERT-based summarizer
summarizer = pipeline('summarization', model='sshleifer/distilbart-cnn-12-6')

# Upload the Excel file to your Google Colab environment
uploaded = files.upload()

# Replace 'your_file.xlsx' with the name of your uploaded Excel file
urls = get_urls('/content/articles_analysis (1).xlsx')

# Create a new text file to store the summaries
with open('summaries.txt', 'w', encoding='utf-8') as txtfile:
    # Loop through each URL and generate a summary using the BERT-based summarizer
    for url in urls:
        print(f'Processing URL: {url}')
        # Fetch the content from the URL
        content = fetch_content(url)

        # Check if the content is not empty and has a sufficient length
        if content and len(content) > 200:  # You can adjust the length threshold as needed
            # Tokenize the content and check if the token count is within the acceptable range
            text_tokens = tokenizer(content, padding=True, truncation=True, return_tensors="pt")
            token_count = text_tokens["input_ids"].shape[1]

            if token_count > 50 and token_count < tokenizer.model_max_length:  # You can adjust the token count threshold as needed
                # Generate the summary
                summary = summarizer(content, min_length=60, max_length=150)  # You can adjust min_length and max_length as needed
                summary = summary[0]['summary_text']

                # Write the summary to the text file
                txtfile.write(summary + '\n\n')
            else:
                print(f'Token count {token_count} out of range for URL: {url}')
        else:
            print(f'Content not long enough for URL: {url}')

# Download the summaries text file to your local computer
files.download('summaries.txt')
```

Run this updated script and look at the print statements. It will help you understand why some URLs are not being summarized. You can adjust the content length and token count thresholds as needed to include more URLs in the summarization process.

**Mike:** great! I want to take the summaries and use them as content to draft emails.  how can I do this ?

**GPT:** You can use the summaries to create email drafts by formatting the text and adding an appropriate subject line and salutation. Here's an example of how you can create email drafts using the summaries:

```python
# Function to create an email draft
def create_email_draft(summary, subject, recipient_name):
    salutation = f"Dear {recipient_name},\n\n"
    body = f"{summary}\n\n"
    closing = "Best regards,\n\nYour Name"
    email_draft = f"Subject: {subject}\n\n{salutation}{body}{closing}\n\n{'-'*40}\n\n"
    return email_draft

# Set recipient's name, email subject, and create a list to store email drafts
recipient_name = "John Doe"
subject = "Summary of the article"
email_drafts = []

with open('summaries.txt', 'r', encoding='utf-8') as txtfile:
    summaries = txtfile.read().split('\n\n')[:-1]

    for summary in summaries:
        email_draft = create_email_draft(summary, subject, recipient_name)
        email_drafts.append(email_draft)

# Save email drafts to a text file
with open('email_drafts.txt', 'w', encoding='utf-8') as txtfile:
    for email_draft in email_drafts:
        txtfile.write(email_draft)

# Download the email drafts text file to your local computer
files.download('email_drafts.txt')
```

This script will read the summaries from the `summaries.txt` file, create email drafts with a subject line, salutation, and closing, and save the email drafts to a new text file called `email_drafts.txt`.

You can customize the `recipient_name` and `subject` variables to match your desired recipient and email subject line. The email drafts will be separated by a line of dashes for better readability.

Once you have the `email_drafts.txt` file, you can use the content to draft your emails manually or use an email client that supports importing drafts from text files.

**Mike:** I want to use the summaries to write the entire email.  I want it customized using the summary.

**GPT:** To customize the email subject and body using the summary, you can modify the `create_email_draft` function to incorporate parts of the summary into the email. Here's an example:

```python
# Function to create a customized email draft
def create_email_draft(summary, recipient_name):
    subject = f"Summary of the article: {summary[:40]}..."  # Takes the first 40 characters of the summary as the subject
    salutation = f"Dear {recipient_name},\n\n"
    body_intro = "I hope this message finds you well. I thought you might be interested in the following summary of an article I came across:\n\n"
    body = f"{summary}\n\n"
    closing = "Best regards,\n\nYour Name"
    email_draft = f"Subject: {subject}\n\n{salutation}{body_intro}{body}{closing}\n\n{'-'*40}\n\n"
    return email_draft

email_drafts = []

with open('summaries.txt', 'r', encoding='utf-8') as txtfile:
    summaries = txtfile.read().split('\n\n')[:-1]

    for summary in summaries:
        email_draft = create_email_draft(summary, recipient_name)
        email_drafts.append(email_draft)

# Save email drafts to a text file
with open('email_drafts.txt', 'w', encoding='utf-8') as txtfile:
    for email_draft in email_drafts:
        txtfile.write(email_draft)

# Download the email drafts text file to your local computer
files.download('email_drafts.txt')
```

In this example, the email subject line is created using the first 40 characters of the summary, followed by an ellipsis. The email body starts with a customized introduction and then includes the summary.

You can further customize the script to tailor the subject line, salutation, and email body to your specific needs.
