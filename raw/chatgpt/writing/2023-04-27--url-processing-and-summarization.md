---
title: "URL Processing and Summarization."
date: 2023-04-27
cluster: "Writing / Research / General"
messages: 4
source: chatgpt-export conversations.json (FULL transcript)
---

# URL Processing and Summarization.

> 4 messages · 2023-04-27 · cluster: Writing / Research / General

**Semantic neighbors:** [[Abstract Gray Art Image]] · [[New Book Releases June]] · [[keyword research]] · [[Startup Business Plan Development]]

## Transcript

**Mike:** split this script into 3 sections for better functionality :  import os
import pandas as pd
import requests
from bs4 import BeautifulSoup
import spacy
from concurrent.futures import ProcessPoolExecutor, as_completed
import time
from transformers import BartTokenizer, BartForConditionalGeneration


nlp = spacy.load("en_core_web_lg", disable=['parser', 'tagger'])

def get_html(url):
    try:
        response = requests.get(url)
        if response.status_code != 200:
            print(f"Error retrieving {url}: {response.status_code} {response.reason}")
            return None
        response.raise_for_status()
        return response.text
    except requests.exceptions.RequestException as e:
        print(f"Error retrieving {url}: {e}")
        return None

def extract_metadata(soup):
    title = soup.title.text.strip() if soup.title else ""
    authors = [meta.get("content").strip() for meta in soup.find_all("meta", {"name": "author"})]
    publication_date = soup.find("meta", {"name": "pubdate"}) or soup.find("meta", {"property": "article:published_time"})
    publication_date = publication_date.get("content").strip() if publication_date else ""
    return {"title": title, "authors": authors, "publication_date": publication_date}

def extract_features(text, model, tokenizer):
    """Extract NLP features and summary from the given text."""
    doc = nlp(text)
    entities = [ent.text for ent in doc.ents]
    topics = [token.text for token in doc if not token.is_stop and not token.is_punct and not token.is_space]
    sentiment = 0.0
    summary = summarize(text, model, tokenizer, ratio=0.3)  # Adjust the ratio to control the length of the summary
    return {"entities": entities, "sentiment": sentiment, "topics": topics, "summary": summary}



def summarize(text, model, tokenizer, ratio=0.3):
    inputs = tokenizer([text], max_length=1024, return_tensors="pt", truncation=True)
    summary_ids = model.generate(inputs["input_ids"], num_return_sequences=1, no_repeat_ngram_size=3, max_length=150, min_length=40, early_stopping=True)
    summary = [tokenizer.decode(s, skip_special_tokens=True, clean_up_tokenization_spaces=False) for s in summary_ids]
    return summary[0]


def process_url(url):
    html = get_html(url)
    if html is None:
        return None
    soup = BeautifulSoup(html, "html.parser")
    metadata = extract_metadata(soup)
    content = soup.get_text().strip()
    features = extract_features(content, model, tokenizer)
    return {"url": url, **metadata, **features}


if __name__ == "__main__":
    # Load the BART model and tokenizer
    tokenizer = BartTokenizer.from_pretrained("facebook/bart-large-cnn")
    model = BartForConditionalGeneration.from_pretrained("facebook/bart-large-cnn")

    urls_file_path = "articles_analysis.xlsx"
    output_file_path = "output.csv"
    max_workers = 1
    batch_size = 1

    def process_contents_file(urls_file_path, batch_size=1, max_workers=1):
        # Read the URLs from the input file
        df = pd.read_excel(urls_file_path)
        urls = df["url"].tolist()

        # Process the URLs in batches using a ProcessPoolExecutor
        results = []
        with ProcessPoolExecutor(max_workers=max_workers) as executor:
            for i in range(0, len(urls), batch_size):
                batch_urls = urls[i:i+batch_size]
                futures = [executor.submit(process_url, url) for url in batch_urls]
            for future in as_completed(futures):
                    result = future.result()
                    if result:
                        results.append(result)

        # Convert the results to a DataFrame and save to a CSV file
        df_output = pd.DataFrame.from_records(results)
        df_output.to_csv(output_file_path, index=False)

        return df_output

    df_output = process_contents_file(urls_file_path, batch_size=batch_size, max_workers=max_workers)
    print(f"Saved {len(df_output)} records to {output_file_path}")

**GPT:** Section 1: Imports and Dependencies

```
import os
import pandas as pd
import requests
from bs4 import BeautifulSoup
import spacy
from concurrent.futures import ProcessPoolExecutor, as_completed
import time
from transformers import BartTokenizer, BartForConditionalGeneration

nlp = spacy.load("en_core_web_lg", disable=['parser', 'tagger'])
```

This section imports all the necessary dependencies and initializes the spaCy model for natural language processing.

Section 2: Functions

```
def get_html(url):
    try:
        response = requests.get(url)
        if response.status_code != 200:
            print(f"Error retrieving {url}: {response.status_code} {response.reason}")
            return None
        response.raise_for_status()
        return response.text
    except requests.exceptions.RequestException as e:
        print(f"Error retrieving {url}: {e}")
        return None

def extract_metadata(soup):
    title = soup.title.text.strip() if soup.title else ""
    authors = [meta.get("content").strip() for meta in soup.find_all("meta", {"name": "author"})]
    publication_date = soup.find("meta", {"name": "pubdate"}) or soup.find("meta", {"property": "article:published_time"})
    publication_date = publication_date.get("content").strip() if publication_date else ""
    return {"title": title, "authors": authors, "publication_date": publication_date}

def extract_features(text, model, tokenizer):
    """Extract NLP features and summary from the given text."""
    doc = nlp(text)
    entities = [ent.text for ent in doc.ents]
    topics = [token.text for token in doc if not token.is_stop and not token.is_punct and not token.is_space]
    sentiment = 0.0
    summary = summarize(text, model, tokenizer, ratio=0.3)  # Adjust the ratio to control the length of the summary
    return {"entities": entities, "sentiment": sentiment, "topics": topics, "summary": summary}

def summarize(text, model, tokenizer, ratio=0.3):
    inputs = tokenizer([text], max_length=1024, return_tensors="pt", truncation=True)
    summary_ids = model.generate(inputs["input_ids"], num_return_sequences=1, no_repeat_ngram_size=3, max_length=150, min_length=40, early_stopping=True)
    summary = [tokenizer.decode(s, skip_special_tokens=True, clean_up_tokenization_spaces=False) for s in summary_ids]
    return summary[0]

def process_url(url):
    html = get_html(url)
    if html is None:
        return None
    soup = BeautifulSoup(html, "html.parser")
    metadata = extract_metadata(soup)
    content = soup.get_text().strip()
    features = extract_features(content, model, tokenizer)
    return {"url": url, **metadata, **features}
```

This section contains all the functions required for processing the URLs, extracting metadata and features from the HTML content of the webpages, and summarizing the text.

Section 3: Main Execution

```
if __name__ == "__main__":
    # Load the BART model and tokenizer
    tokenizer = BartTokenizer.from_pretrained("facebook/bart-large-cnn")
    model = BartForConditionalGeneration.from_pretrained("facebook/bart-large-cnn")

    urls_file_path = "articles_analysis.xlsx"
    output_file_path = "output.csv"
    max_workers = 1
    batch_size = 1

    def process_contents_file(urls_file_path, batch_size=1, max_workers=1):
        # Read the URLs from the input file

**Mike:** write section 3 again

**GPT:** Section 3: Main Execution

```
if __name__ == "__main__":
    # Load the BART model and tokenizer
    tokenizer = BartTokenizer.from_pretrained("facebook/bart-large-cnn")
    model = BartForConditionalGeneration.from_pretrained("facebook/bart-large-cnn")

    # Define the input and output file paths, and processing parameters
    urls_file_path = "articles_analysis.xlsx"
    output_file_path = "output.csv"
    max_workers = 1
    batch_size = 1

    # Define the function to process the URLs in parallel
    def process_contents_file(urls_file_path, batch_size=1, max_workers=1):
        # Read the URLs from the input file
        df = pd.read_excel(urls_file_path)
        urls = df["url"].tolist()

        # Process the URLs in batches using a ProcessPoolExecutor
        results = []
        with ProcessPoolExecutor(max_workers=max_workers) as executor:
            for i in range(0, len(urls), batch_size):
                batch_urls = urls[i:i+batch_size]
                futures = [executor.submit(process_url, url) for url in batch_urls]
            for future in as_completed(futures):
                result = future.result()
                if result:
                    results.append(result)

        # Convert the results to a DataFrame and save to a CSV file
        df_output = pd.DataFrame.from_records(results)
        df_output.to_csv(output_file_path, index=False)

        return df_output

    # Process the URLs and save the results to a CSV file
    df_output = process_contents_file(urls_file_path, batch_size=batch_size, max_workers=max_workers)

    # Print the number of records saved
    print(f"Saved {len(df_output)} records to {output_file_path}")
```

This section first loads the BART model and tokenizer required for text summarization. It then defines the input and output file paths, as well as the processing parameters such as the number of workers and batch size. 

The `process_contents_file` function is defined to process the URLs in parallel using a `ProcessPoolExecutor` and the `process_url` function. The URLs are read from the input file, split into batches, and submitted to the executor for processing. The results are then collected and converted into a Pandas DataFrame, which is saved to a CSV file.

Finally, the `process_contents_file` function is called with the specified parameters, and the number of records saved is printed to the console.
