---
title: "CSV Data Summary"
date: 2025-02-21
cluster: "Writing / Research / General"
messages: 20
source: chatgpt-export conversations.json (FULL transcript)
---

# CSV Data Summary

> 20 messages · 2025-02-21 · cluster: Writing / Research / General

**Semantic neighbors:** [[Business Registration Summary]] · [[Gaining Facebook Business Access]] · [[Book Recommendations and Discovery]] · [[New Book Releases 2025]]

## Transcript

**Mike:** I have 1000 records in a cvs file.   the contain business names , state and city.  (A COVERALL HEALTH INSURANCE SERVICES	FL	PLANTATION)

**GPT:** Could you clarify what you’d like to do with these records? For example, are you looking to:

- **Analyze or summarize the data?** (e.g., count how many businesses per state or city)
- **Clean or format the CSV file?** (e.g., ensure consistency in names and fields)
- **Import the data into another system?** (e.g., a database or spreadsheet software)
- **Extract or filter specific information?** (e.g., list all businesses in Florida)

Let me know what you need, and I can help guide you through the process.

**Mike:** I want to use python to perform a google search on each record to return the first search result.

**GPT:** Below is an example of how you might use Python to read your CSV file and perform a Google search for each record to retrieve the first result. One common approach is to use the unofficial [googlesearch-python](https://pypi.org/project/googlesearch-python/) package. Note that automated scraping of Google results might violate their terms of service, so for production purposes you might consider using the official [Google Custom Search JSON API](https://developers.google.com/custom-search/v1/overview), which requires an API key and search engine ID.

### Step 1: Install the Package

You can install the unofficial package using pip:

```bash
pip install googlesearch-python
```

### Step 2: Write the Python Script

Here’s a sample script that:

- Reads the CSV file (assuming each row contains a business name, state, and city).
- Constructs a search query.
- Uses the `googlesearch` library to perform a search.
- Retrieves and prints the first result for each query.

```python
import csv
import time
from googlesearch import search

# Function to get the first result of a search query
def get_first_result(query):
    try:
        # 'stop=1' tells the function to return just the first result
        for result in search(query, num_results=1, pause=2):
            return result
    except Exception as e:
        print(f"Error searching for query '{query}': {e}")
    return None

# Open your CSV file (adjust the filename and delimiter if necessary)
with open('your_file.csv', 'r', encoding='utf-8') as csvfile:
    reader = csv.reader(csvfile)
    # If you have a header row, uncomment the next line to skip it:
    # next(reader, None)
    
    for row in reader:
        # Assuming the CSV columns are: Business Name, State, City
        business_name = row[0]
        state = row[1]
        city = row[2]
        
        # Construct the query (e.g., "A COVERALL HEALTH INSURANCE SERVICES FL PLANTATION")
        query = f"{business_name} {state} {city}"
        
        # Get the first search result
        first_result = get_first_result(query)
        if first_result:
            print(f"Query: {query}\nFirst result: {first_result}\n")
        else:
            print(f"Query: {query}\nNo result found.\n")
        
        # Pause between requests to reduce the risk of being blocked by Google
        time.sleep(2)
```

### Important Considerations

- **Rate Limiting:** The `pause` parameter in the `search` function (and the additional `time.sleep(2)`) helps avoid sending too many requests too quickly.
- **Terms of Service:** Automated scraping of search results may violate Google’s terms. For higher volumes or a production system, use the [Google Custom Search API](https://developers.google.com/custom-search/v1/overview) which is designed for these kinds of tasks.
- **Error Handling:** The script includes basic error handling for search failures. You might want to expand on this based on your specific needs.

This script should serve as a starting point for your project. Feel free to modify it to suit your exact requirements.

**Mike:** I am using google colab to run python

**GPT:** When running in Google Colab, you can still use the same code, but you may need to install the package and handle file uploads differently. Here’s an adapted example for Colab:

### 1. Install the Required Package

Run this cell in Colab to install the package:

```python
!pip install googlesearch-python
```

### 2. Upload Your CSV File

If your CSV file isn’t already on Google Drive, you can upload it using Colab’s file uploader:

```python
from google.colab import files
uploaded = files.upload()  # This will prompt you to select a file from your local computer
```

Make sure your CSV file has a name (e.g., `your_file.csv`) that you will use in the script.

### 3. Python Script to Process the CSV and Search

Here’s an example script that reads your CSV, constructs a search query for each record, and retrieves the first Google search result:

```python
import csv
import time
from googlesearch import search

# Function to get the first result of a search query
def get_first_result(query):
    try:
        # 'stop=1' returns only the first result
        for result in search(query, num_results=1, pause=2):
            return result
    except Exception as e:
        print(f"Error searching for query '{query}': {e}")
    return None

# Open your CSV file (adjust the filename if necessary)
filename = 'your_file.csv'  # Replace with your file name
with open(filename, 'r', encoding='utf-8') as csvfile:
    reader = csv.reader(csvfile)
    # If your CSV includes a header row, uncomment the next line:
    # next(reader, None)
    
    for row in reader:
        # Assuming the CSV columns are: Business Name, State, City
        business_name = row[0]
        state = row[1]
        city = row[2]
        
        # Construct the query (e.g., "A COVERALL HEALTH INSURANCE SERVICES FL PLANTATION")
        query = f"{business_name} {state} {city}"
        
        # Get the first search result
        first_result = get_first_result(query)
        if first_result:
            print(f"Query: {query}\nFirst result: {first_result}\n")
        else:
            print(f"Query: {query}\nNo result found.\n")
        
        # Pause between requests to reduce the risk of being blocked by Google
        time.sleep(2)
```

### Additional Tips for Colab

- **Google Drive Integration:** If your CSV file is stored on Google Drive, mount your drive in Colab with:
  
  ```python
  from google.colab import drive
  drive.mount('/content/drive')
  ```
  
  Then adjust the file path accordingly (e.g., `'/content/drive/My Drive/your_file.csv'`).

- **Rate Limiting & Compliance:** The pauses (via `time.sleep(2)`) help reduce the risk of being blocked by Google. For production or large-scale searches, consider using the [Google Custom Search JSON API](https://developers.google.com/custom-search/v1/overview) with an API key.

This setup should work well in Colab. Feel free to adjust the script to match your CSV structure or any other requirements you might have.

**Mike:** combine the code into one script.  I want to the script to prompt me to upload the csv file

**GPT:** Below is a single Python script you can run in Google Colab. It installs the required package, prompts you to upload your CSV file, and then processes each record to perform a Google search and return the first result.

```python
# Install the googlesearch-python package
!pip install googlesearch-python

# Import necessary modules
from google.colab import files
import io
import csv
import time
from googlesearch import search

# Prompt user to upload the CSV file
print("Please upload your CSV file:")
uploaded = files.upload()

# Get the first file from the uploaded dictionary
filename = next(iter(uploaded))
print("Processing file:", filename)

# Open the CSV file from the uploaded data
f = io.StringIO(uploaded[filename].decode('utf-8'))
reader = csv.reader(f)

# If your CSV file includes a header row, uncomment the next line:
# next(reader, None)

# Iterate over each record in the CSV
for row in reader:
    # Ensure there are at least three columns (Business Name, State, City)
    if len(row) < 3:
        continue
        
    business_name = row[0].strip()
    state = row[1].strip()
    city = row[2].strip()
    
    # Construct the search query (example: "A COVERALL HEALTH INSURANCE SERVICES FL PLANTATION")
    query = f"{business_name} {state} {city}"
    print(f"Searching for: {query}")
    
    # Function to get the first search result
    first_result = None
    try:
        # 'num_results=1' returns just the first result; pause between requests helps avoid being blocked
        for result in search(query, num_results=1, pause=2):
            first_result = result
            break
        if first_result:
            print(f"First result: {first_result}\n")
        else:
            print("No result found.\n")
    except Exception as e:
        print(f"Error during search for query '{query}': {e}\n")
    
    # Extra pause between queries
    time.sleep(2)
```

### How It Works

- **Installation:** The script begins by installing the `googlesearch-python` package.
- **File Upload:** It then prompts you to upload your CSV file using Colab's file uploader.
- **CSV Processing:** The script reads the CSV file, constructs a search query for each record, and uses the `search` function to retrieve the first result.
- **Rate Limiting:** The script includes pauses (`pause=2` in the search and `time.sleep(2)`) to help avoid overwhelming Google with requests.

Feel free to adjust the code (such as skipping a header row or modifying the query format) to suit your specific CSV structure or requirements.

**Mike:** when running the script I get this output :  Searching for: A COVERALL HEALTH INSURANCE SERVICES FL PLANTATION
Error during search for query 'A COVERALL HEALTH INSURANCE SERVICES FL PLANTATION': search() got an unexpected keyword argument 'pause'

Searching for: A S L INVESTMENTS FL LLC FL HOLLYWOOD
Error during search for query 'A S L INVESTMENTS FL LLC FL HOLLYWOOD': search() got an unexpected keyword argument 'pause'

Searching for: A1A WAVERUNNER REPAIRS LLC FL DEERFIELD BEACH
Error during search for query 'A1A WAVERUNNER REPAIRS LLC FL DEERFIELD BEACH': search() got an unexpected keyword argument 'pause'

**GPT:** Below is an updated version of the script that removes the unsupported `pause` parameter from the `search` function call. Instead, the script uses `time.sleep(2)` after each query to introduce a delay between searches.

```python
# Install the googlesearch-python package
!pip install googlesearch-python

# Import necessary modules
from google.colab import files
import io
import csv
import time
from googlesearch import search

# Prompt user to upload the CSV file
print("Please upload your CSV file:")
uploaded = files.upload()

# Get the first file from the uploaded dictionary
filename = next(iter(uploaded))
print("Processing file:", filename)

# Open the CSV file from the uploaded data
f = io.StringIO(uploaded[filename].decode('utf-8'))
reader = csv.reader(f)

# If your CSV file includes a header row, uncomment the next line:
# next(reader, None)

# Iterate over each record in the CSV
for row in reader:
    # Ensure there are at least three columns (Business Name, State, City)
    if len(row) < 3:
        continue
        
    business_name = row[0].strip()
    state = row[1].strip()
    city = row[2].strip()
    
    # Construct the search query (example: "A COVERALL HEALTH INSURANCE SERVICES FL PLANTATION")
    query = f"{business_name} {state} {city}"
    print(f"Searching for: {query}")
    
    # Initialize the first_result variable
    first_result = None
    try:
        # 'num_results=1' returns only the first result
        for result in search(query, num_results=1):
            first_result = result
            break
        if first_result:
            print(f"First result: {first_result}\n")
        else:
            print("No result found.\n")
    except Exception as e:
        print(f"Error during search for query '{query}': {e}\n")
    
    # Pause between queries to reduce the risk of being blocked by Google
    time.sleep(2)
```

### How This Script Works

- **Installation:** The script begins by installing the `googlesearch-python` package.
- **File Upload:** It prompts you to upload a CSV file via Colab’s file uploader.
- **CSV Processing:** It reads the CSV file, constructs a search query for each record (assuming the columns are Business Name, State, City), and then uses the `search` function to retrieve the first Google search result.
- **Rate Limiting:** A delay is introduced between queries using `time.sleep(2)` to help avoid being blocked by Google.

This version should work in Colab without the error regarding the unsupported `pause` parameter.

**Mike:** re-write the script to put the result into an empty column of the same csv file.

**GPT:** Below is a complete Google Colab script that:

1. Installs the required package.
2. Prompts you to upload your CSV file.
3. Reads the CSV file, performs a Google search for each record (using the business name, state, and city), and appends the first search result into a new column.
4. Writes the updated data to a new CSV file that you can download.

```python
# Install the googlesearch-python package
!pip install googlesearch-python

import csv
import time
import io
from google.colab import files
from googlesearch import search

# Prompt user to upload the CSV file
print("Please upload your CSV file:")
uploaded = files.upload()

# Get the filename of the uploaded CSV
filename = next(iter(uploaded))
print("Processing file:", filename)

# Read the CSV file into a list of rows
csv_data = io.StringIO(uploaded[filename].decode('utf-8'))
reader = csv.reader(csv_data)
rows = list(reader)

# Check if the CSV has a header row.
# If your CSV does not have a header, you can remove or modify the following section.
header = rows[0]
if "Google Search Result" not in header:
    header.append("Google Search Result")
    rows[0] = header

# Process each record (skip the header row)
for i, row in enumerate(rows[1:], start=1):
    # Ensure the row has at least three columns: Business Name, State, City.
    if len(row) < 3:
        # If not enough columns, append an empty result column and skip processing.
        row.append("")
        rows[i] = row
        continue

    business_name = row[0].strip()
    state = row[1].strip()
    city = row[2].strip()

    # Construct the query string
    query = f"{business_name} {state} {city}"
    print(f"Searching for: {query}")

    # Initialize search result as an empty string
    result_url = ""
    try:
        # Get only the first result by specifying num_results=1
        for result in search(query, num_results=1):
            result_url = result
            break
    except Exception as e:
        print(f"Error during search for query '{query}': {e}")

    # Append the search result to the row. If the row already has a fourth column, update it.
    if len(row) >= len(header):
        row[len(header)-1] = result_url
    else:
        row.append(result_url)
    rows[i] = row

    # Pause between searches to reduce the risk of being blocked by Google
    time.sleep(2)

# Write the updated rows to a new CSV file
output_filename = "output.csv"
with open(output_filename, "w", newline='', encoding='utf-8') as outfile:
    writer = csv.writer(outfile)
    writer.writerows(rows)

print("Search results have been added to the CSV file. Downloading the updated file...")
files.download(output_filename)
```

### How It Works

- **Installation & Imports:** The script installs `googlesearch-python` and imports necessary modules.
- **File Upload:** It uses Colab’s `files.upload()` to prompt you to select your CSV file.
- **CSV Processing:** The CSV is read into a list; if a header row exists, it appends a new column called `"Google Search Result"`. For each subsequent row, it constructs a search query using the first three columns and uses the `search` function to get the first Google search result.
- **Output File:** The updated rows (with the search result appended as a new column) are written to `output.csv`. The file is then made available for download.

This script will update the CSV by adding the first search result for each record into a new column and allow you to download the updated file directly from Colab.

**Mike:** my goal if this exercise is to find if each business record has a google business profile

**GPT:** Below is an updated Google Colab script that:

1. Prompts you to upload your CSV file.
2. Reads each record (assuming columns for Business Name, State, and City).
3. Performs a Google search for each record.
4. Checks if the first result URL indicates a Google Business Profile (by checking for typical URL patterns such as those from Google Maps).
5. Writes a new column in the CSV ("Google Business Profile") with "Yes" if a profile is found or "No" if not.
6. Saves and downloads the updated CSV file.

```python
# Install the googlesearch-python package
!pip install googlesearch-python

import csv
import time
import io
from google.colab import files
from googlesearch import search

# Prompt user to upload the CSV file
print("Please upload your CSV file:")
uploaded = files.upload()

# Get the filename of the uploaded CSV file
filename = next(iter(uploaded))
print("Processing file:", filename)

# Read the CSV file into a list of rows
csv_data = io.StringIO(uploaded[filename].decode('utf-8'))
reader = csv.reader(csv_data)
rows = list(reader)

# Assume the first row is a header. If the header doesn't already have the column, add it.
header = rows[0]
if "Google Business Profile" not in header:
    header.append("Google Business Profile")
    rows[0] = header

# Process each record (skipping the header)
for i, row in enumerate(rows[1:], start=1):
    # Check that there are at least three columns (Business Name, State, City)
    if len(row) < 3:
        row.append("No")
        rows[i] = row
        continue

    business_name = row[0].strip()
    state = row[1].strip()
    city = row[2].strip()

    # Construct the query string
    query = f"{business_name} {state} {city}"
    print(f"Searching for: {query}")

    profile_url = ""
    try:
        # Get the first search result
        for result in search(query, num_results=1):
            profile_url = result
            break
    except Exception as e:
        print(f"Error during search for query '{query}': {e}")

    # Check if the URL indicates a Google Business Profile.
    # Typically, these are found on Google Maps (e.g., containing "google.com/maps/place" or "maps.google.com")
    if "google.com/maps/place" in profile_url or "maps.google.com" in profile_url:
        profile_found = "Yes"
    else:
        profile_found = "No"

    # Append or update the "Google Business Profile" column in the row
    if len(row) < len(header):
        row.append(profile_found)
    else:
        row[len(header)-1] = profile_found
    rows[i] = row

    # Pause between queries to reduce the risk of being blocked by Google
    time.sleep(2)

# Write the updated rows to a new CSV file
output_filename = "output.csv"
with open(output_filename, "w", newline='', encoding='utf-8') as outfile:
    writer = csv.writer(outfile)
    writer.writerows(rows)

print("Updated CSV written to", output_filename, "Downloading file...")
files.download(output_filename)
```

### How This Script Works

- **File Upload:** It uses Colab’s file uploader to load your CSV file.
- **CSV Processing:** The script reads the CSV and checks (or creates) a header column called "Google Business Profile."
- **Google Search:** For each record, it constructs a query from the Business Name, State, and City and retrieves the first search result.
- **Profile Detection:** It then checks if the resulting URL contains typical patterns from Google Maps (e.g., `"google.com/maps/place"` or `"maps.google.com"`), which usually indicate a Google Business Profile.
- **Output:** The script updates the CSV with "Yes" or "No" for each record and writes the result to a new CSV file available for download.

This should help you determine whether each business record has a Google Business Profile based on the search result URL.

**Mike:** is this script checking the first search result only ?

**GPT:** Yes, the current script is designed to only check the first search result. The `num_results=1` parameter in the search call ensures that only one result is returned, and the script immediately uses that result to determine if it indicates a Google Business Profile.

If you'd like to check more than just the first result, you could adjust the parameter (for example, `num_results=3`) and then iterate over the returned results to see if any of them match your criteria.

**Mike:** modify the script to output the top 3 search results into the same csv file.

**GPT:** Below is a revised script that uploads your CSV file, performs a Google search for each record, retrieves the top 3 results, and writes them into three new columns in the same CSV file.

```python
# Install the googlesearch-python package
!pip install googlesearch-python

import csv
import time
import io
from google.colab import files
from googlesearch import search

# Prompt user to upload the CSV file
print("Please upload your CSV file:")
uploaded = files.upload()

# Get the filename from the uploaded file
filename = next(iter(uploaded))
print("Processing file:", filename)

# Read the CSV data from the uploaded file
csv_data = io.StringIO(uploaded[filename].decode('utf-8'))
reader = csv.reader(csv_data)
rows = list(reader)

# Assume the first row is the header.
# Extend the header with new columns for the top 3 search results.
header = rows[0]
header.extend(["Google Search Result 1", "Google Search Result 2", "Google Search Result 3"])
rows[0] = header

# Process each record (skipping the header row)
for i, row in enumerate(rows[1:], start=1):
    # Check if there are at least three columns (Business Name, State, City)
    if len(row) < 3:
        # Not enough information to form a search query; append empty results.
        row.extend(["", "", ""])
        rows[i] = row
        continue

    # Construct the search query from Business Name, State, and City
    business_name = row[0].strip()
    state = row[1].strip()
    city = row[2].strip()
    query = f"{business_name} {state} {city}"
    print(f"Searching for: {query}")

    # Retrieve the top 3 search results
    results = []
    try:
        for res in search(query, num_results=3):
            results.append(res)
        # Pad the results list if fewer than 3 URLs are returned
        while len(results) < 3:
            results.append("")
    except Exception as e:
        print(f"Error during search for query '{query}': {e}")
        results = ["", "", ""]

    # Append the 3 search results to the row
    row.extend(results)
    rows[i] = row

    # Pause between queries to reduce the risk of being blocked by Google
    time.sleep(2)

# Write the updated rows to a new CSV file
output_filename = "output.csv"
with open(output_filename, "w", newline='', encoding='utf-8') as outfile:
    writer = csv.writer(outfile)
    writer.writerows(rows)

print("Updated CSV written to", output_filename, "Downloading file...")
files.download(output_filename)
```

### How It Works

- **File Upload & CSV Reading:**  
  The script prompts you to upload a CSV file. It then reads the file into a list of rows. The first row is assumed to be a header.

- **Adding New Columns:**  
  The header row is extended with three new columns: `"Google Search Result 1"`, `"Google Search Result 2"`, and `"Google Search Result 3"`.

- **Performing Searches:**  
  For each record (each row after the header), the script constructs a query using the business name, state, and city. It then retrieves the top 3 search results using the `search` function with `num_results=3`. If fewer than 3 results are returned, the missing ones are filled with empty strings.

- **Appending Results & Saving:**  
  The three search result URLs are appended to the end of each row. Finally, the updated data is written to a new CSV file (`output.csv`) and made available for download.

This script outputs the top 3 search results for each record into the new columns of the CSV file.

**Mike:** brainstorm ideas along the same lines as this google search script.   what other python scripts can I utilize to get vital info about a business ?

**GPT:** Below are several ideas and approaches you could explore to gather vital business information using Python:

### 1. **Google Places API**

- **What It Does:**  
  Retrieves detailed information about businesses—including names, addresses, phone numbers, ratings, hours, and reviews—directly from Google’s database.

- **How to Use It:**  
  Use the [Google Places API](https://developers.google.com/maps/documentation/places/web-service/overview) along with Python libraries like `requests`. You’d need to obtain an API key and then build queries based on your business data (name, location, etc.).

- **Example Use-Case:**  
  Given a business name and location, retrieve its official listing, check if it’s verified, and pull current reviews and ratings.

### 2. **Yelp Fusion API**

- **What It Does:**  
  Provides business details such as ratings, reviews, price range, photos, and more from Yelp’s extensive directory.

- **How to Use It:**  
  Register for the [Yelp Fusion API](https://www.yelp.com/developers/documentation/v3) and use Python’s `requests` library to query by business name and location.

- **Example Use-Case:**  
  Aggregate customer sentiment by analyzing ratings and reviews for each business.

### 3. **Web Scraping with BeautifulSoup or Selenium**

- **What It Does:**  
  Scrape data from business directories or review sites where APIs might not be available or sufficient.

- **How to Use It:**  
  - **BeautifulSoup & Requests:** For static pages, parse HTML content to extract business info such as contact details, reviews, or service lists.
  - **Selenium:** For dynamic pages (like those using JavaScript to load content), automate a browser session to retrieve data.

- **Example Use-Case:**  
  Scrape details from Yellow Pages, TripAdvisor, or even the business’s own website for up-to-date information.

### 4. **LinkedIn and Company Data APIs**

- **What It Does:**  
  Provides information on business size, employee counts, industry, and more from professional profiles.

- **How to Use It:**  
  - Some platforms like LinkedIn have restricted APIs, but services like [Clearbit](https://clearbit.com/) or [Crunchbase](https://www.crunchbase.com/) offer business data APIs that can be integrated with Python.

- **Example Use-Case:**  
  Determine company size, funding information, and industry classification to profile businesses for market research.

### 5. **OpenCorporates API**

- **What It Does:**  
  Offers access to global company data including registration details, officer information, and corporate structure.

- **How to Use It:**  
  Use the [OpenCorporates API](https://api.opencorporates.com/documentation/API-Reference) to query by business name and jurisdiction.

- **Example Use-Case:**  
  Verify business registration and retrieve legal information about a company.

### 6. **Social Media and Review Aggregation**

- **What It Does:**  
  Analyzes sentiment and customer feedback from social media platforms (e.g., Twitter, Facebook) and review sites.

- **How to Use It:**  
  - Use libraries like `tweepy` for Twitter to search for mentions of the business.
  - Use Natural Language Processing (NLP) tools like [VADER](https://github.com/cjhutto/vaderSentiment) or [TextBlob](https://textblob.readthedocs.io/en/dev/) to gauge sentiment from reviews.

- **Example Use-Case:**  
  Create a sentiment analysis report to assess overall customer satisfaction and trending topics related to the business.

### 7. **Data Integration and Analysis**

- **What It Does:**  
  Combines data from multiple sources (APIs, web scraping, social media) into a single dataset for further analysis.

- **How to Use It:**  
  Use Python’s `pandas` library to merge, clean, and analyze data collected from various endpoints. Visualize trends using libraries like `matplotlib` or `seaborn`.

- **Example Use-Case:**  
  Build a comprehensive profile report that includes operational data, customer feedback, and online presence analytics.

---

### Bringing It All Together

You might build a pipeline where for each business record you:
1. **Search and Match:**  
   Start with a Google search to verify the business's online presence.
2. **API Lookups:**  
   Query the Google Places API and Yelp Fusion API to gather details.
3. **Supplemental Scraping:**  
   Use web scraping to collect additional data from business websites or directories.
4. **Sentiment Analysis:**  
   Run sentiment analysis on reviews from multiple platforms.
5. **Data Aggregation:**  
   Integrate the results into a single CSV or database, and generate visual reports.

Each step can be implemented as a separate Python script or function, and you can orchestrate them using a tool like Apache Airflow for larger-scale data collection or even simply chaining functions in a single script for smaller projects.

These approaches can give you a robust toolkit for assessing vital business information beyond just verifying a Google Business Profile.
