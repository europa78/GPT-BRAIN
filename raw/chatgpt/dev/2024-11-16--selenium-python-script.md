---
title: "Selenium PYTHON script"
date: 2024-11-16
cluster: "Coding / Dev / Infra"
messages: 25
source: chatgpt-export conversations.json (FULL transcript)
---

# Selenium PYTHON script

> 25 messages · 2024-11-16 · cluster: Coding / Dev / Infra

**Semantic neighbors:** [[Video Transcription Request]] · [[JAVA and ChatGPT API]] · [[ReaScript Overview and Languages]] · [[APP SCRIPTS]]

## Transcript

**Mike:** I want to perform consecutive searches on the web.  For example , I want to look up phone numbers for businesses on Google using a query like "van kirk pools , for Lauderdale".   After displaying the phone number for van kirk , I need to perform another search for a separate business, ect..  how do I write a program to do this ?

**GPT:** To automate consecutive web searches for phone numbers or similar information, you can write a program using Python with the **Selenium** library. Selenium allows you to interact with web browsers programmatically.

### Requirements:
1. **Install Python**: Ensure Python is installed on your computer.
2. **Install Selenium**: Install the Selenium library by running `pip install selenium`.
3. **Download WebDriver**: Install a WebDriver for your browser (e.g., ChromeDriver for Chrome).

### Example Code

Here's an example script to perform consecutive searches on Google:

```python
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time

# Initialize the WebDriver (adjust the path to your WebDriver)
driver_path = "path/to/chromedriver"  # Replace with the path to your WebDriver
driver = webdriver.Chrome(driver_path)

def search_and_get_phone_number(query):
    # Open Google
    driver.get("https://www.google.com")
    
    # Find the search box and input the query
    search_box = driver.find_element(By.NAME, "q")
    search_box.clear()
    search_box.send_keys(query + " phone number")
    search_box.send_keys(Keys.RETURN)
    
    # Wait for results to load
    time.sleep(3)
    
    try:
        # Extract phone number (modify this XPath if needed)
        result = driver.find_element(By.XPATH, "//span[contains(text(), 'Phone')]/following-sibling::span")
        phone_number = result.text
        print(f"Phone number for {query}: {phone_number}")
    except:
        print(f"Phone number for {query} not found.")
    
    time.sleep(2)

# List of business queries
businesses = ["Van Kirk Pools, Fort Lauderdale", "Another Business, Another City"]

for business in businesses:
    search_and_get_phone_number(business)

# Close the browser
driver.quit()
```

### How It Works:
1. **Driver Setup**:
   - You initialize the Selenium WebDriver to control a browser (e.g., Chrome).
2. **Google Search**:
   - The script enters a search query like `"Van Kirk Pools, Fort Lauderdale phone number"` into Google’s search bar.
3. **Extract Phone Numbers**:
   - It uses XPath or other selectors to locate and extract the phone number from the results.
4. **Loop Through Businesses**:
   - A list of businesses is iterated through, performing a search for each.

### Considerations:
1. **Web Scraping Ethics**: Google may block your IP if it detects automated scraping. Use this responsibly.
2. **Dynamic Content**: Some phone numbers may be behind dynamically loaded pages. You may need to add more logic to handle such cases.
3. **Error Handling**: Add robust error handling for elements not found.
4. **API Alternative**: If frequent lookups are needed, consider using a paid service or API like Google Maps API for consistent results.

### Tools for Deployment:
- **Run Locally**: Install Python and WebDriver locally to run the script.
- **Cloud Hosting**: Use a service like AWS Lambda or Google Cloud Functions for hosting automation.

Let me know if you need help setting up any part of this!

**Mike:** I have a csv file with a list of search queries , which are the business name and location.  How do I write the python script to read the searches in the csv file and put the answer in another column

**GPT:** To automate the process of reading search queries from a CSV file and saving the phone numbers into a new column, you can use Python's **pandas** library along with **Selenium**. Here's how:

---

### Requirements
1. **Install pandas**:
   ```bash
   pip install pandas
   ```
2. Ensure the **Selenium WebDriver** is installed as per the earlier example.

---

### CSV Structure
The input CSV file (`businesses.csv`) should have the following structure:

| Business Name       | Location        | Phone Number |
|---------------------|-----------------|--------------|
| Van Kirk Pools      | Fort Lauderdale |              |
| Another Business    | Another City    |              |

---

### Python Script

```python
import pandas as pd
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time

# Initialize the WebDriver (adjust the path to your WebDriver)
driver_path = "path/to/chromedriver"  # Replace with the path to your WebDriver
driver = webdriver.Chrome(driver_path)

def search_and_get_phone_number(query):
    """Perform a Google search and extract the phone number."""
    driver.get("https://www.google.com")
    search_box = driver.find_element(By.NAME, "q")
    search_box.clear()
    search_box.send_keys(query + " phone number")
    search_box.send_keys(Keys.RETURN)
    time.sleep(3)  # Allow the page to load

    try:
        # Extract phone number from results (adjust XPath as needed)
        result = driver.find_element(By.XPATH, "//span[contains(text(), 'Phone')]/following-sibling::span")
        return result.text
    except:
        return "Phone number not found"

# Load the CSV file into a pandas DataFrame
input_file = "businesses.csv"
output_file = "businesses_with_phone_numbers.csv"
df = pd.read_csv(input_file)

# Create a new column for phone numbers
df["Phone Number"] = ""

# Loop through each row in the DataFrame
for index, row in df.iterrows():
    business_name = row["Business Name"]
    location = row["Location"]
    query = f"{business_name}, {location}"
    print(f"Searching for: {query}")
    phone_number = search_and_get_phone_number(query)
    df.at[index, "Phone Number"] = phone_number

# Save the updated DataFrame to a new CSV file
df.to_csv(output_file, index=False)

# Close the WebDriver
driver.quit()

print(f"Updated file saved as {output_file}")
```

---

### How It Works:
1. **Read the CSV File**:
   - Use `pandas` to load the CSV file into a DataFrame.
2. **Google Search**:
   - For each row in the DataFrame, construct a query by combining the business name and location.
3. **Extract Phone Number**:
   - Perform the search on Google and attempt to extract the phone number using XPath.
4. **Update DataFrame**:
   - Store the extracted phone number in a new column.
5. **Save to CSV**:
   - Save the updated DataFrame to a new CSV file.

---

### Output File
The output CSV file (`businesses_with_phone_numbers.csv`) will look like this:

| Business Name       | Location        | Phone Number        |
|---------------------|-----------------|---------------------|
| Van Kirk Pools      | Fort Lauderdale | (954) 123-4567      |
| Another Business    | Another City    | Phone number not found |

---

### Notes:
1. **XPath Adjustments**: Depending on the Google results layout, you might need to tweak the XPath in the `search_and_get_phone_number` function.
2. **Delay Management**: Use `time.sleep` to avoid being flagged by Google. Consider a more sophisticated delay strategy (e.g., random delays).
3. **Error Handling**: Ensure robust error handling for missing elements or connectivity issues.
4. **API Alternative**: If frequent usage is needed, consider using Google Maps API to fetch business details programmatically.

Let me know if you need further assistance!

**Mike:** Is there a more effective method to do this ?

**GPT:** Yes, there are more effective and scalable ways to fetch this information without relying on a web scraper like Selenium. Here are some alternatives:

---

### **1. Use an API for Business Information**
APIs like **Google Places API**, **Yelp Fusion API**, or similar services are designed to provide detailed business information programmatically. They are faster, more reliable, and less likely to cause issues like IP bans.

#### Example: Google Places API
- **Steps**:
  1. Create a Google Cloud account.
  2. Enable the Google Places API.
  3. Get your API key.

- **Code Example**:
```python
import pandas as pd
import requests

API_KEY = "your_google_api_key"  # Replace with your API key
BASE_URL = "https://maps.googleapis.com/maps/api/place/textsearch/json"

def get_phone_number(query):
    params = {
        "query": query,
        "key": API_KEY
    }
    response = requests.get(BASE_URL, params=params)
    data = response.json()
    if data.get("results"):
        place_id = data["results"][0]["place_id"]
        return get_place_details(place_id)
    return "Phone number not found"

def get_place_details(place_id):
    details_url = "https://maps.googleapis.com/maps/api/place/details/json"
    params = {
        "place_id": place_id,
        "fields": "formatted_phone_number",
        "key": API_KEY
    }
    response = requests.get(details_url, params=params)
    data = response.json()
    if data.get("result") and "formatted_phone_number" in data["result"]:
        return data["result"]["formatted_phone_number"]
    return "Phone number not found"

# Load the CSV
input_file = "businesses.csv"
output_file = "businesses_with_phone_numbers.csv"
df = pd.read_csv(input_file)

# Add a Phone Number column
df["Phone Number"] = ""

for index, row in df.iterrows():
    query = f"{row['Business Name']} {row['Location']}"
    print(f"Searching for: {query}")
    df.at[index, "Phone Number"] = get_phone_number(query)

# Save the results
df.to_csv(output_file, index=False)
print(f"Updated file saved as {output_file}")
```

- **Advantages**:
  - Reliable results.
  - Structured data (no need to parse raw HTML).
  - No risk of IP bans or CAPTCHA.

- **Disadvantages**:
  - Costs may apply (depending on API usage).

---

### **2. Use Existing Directories or Services**
If you only need phone numbers for businesses in specific regions, using a data provider like Yellow Pages, OpenCorporates, or D&B Hoovers might be better.

#### Example:
- Export a CSV from Yellow Pages or D&B Hoovers with the relevant details.
- Integrate with their APIs for real-time data fetching.

---

### **3. Leverage Specialized Web Scraping Libraries**
If you still want to scrape, libraries like **BeautifulSoup** with **requests** are faster and less resource-intensive compared to Selenium. You can scrape specific directories (e.g., Yellow Pages or Yelp).

#### Example:
```python
import requests
from bs4 import BeautifulSoup

def scrape_phone_number(business, location):
    query = f"{business} {location} phone number"
    url = f"https://www.google.com/search?q={query.replace(' ', '+')}"
    headers = {"User-Agent": "Mozilla/5.0"}
    response = requests.get(url, headers=headers)
    soup = BeautifulSoup(response.text, "html.parser")
    
    # Extract phone number from the Google snippet (update the selector as needed)
    try:
        result = soup.find("span", string="Phone:").find_next("span").text
        return result
    except AttributeError:
        return "Phone number not found"

# Example usage
print(scrape_phone_number("Van Kirk Pools", "Fort Lauderdale"))
```

- **Advantages**:
  - Lighter and faster than Selenium.
  - Works well for specific cases.

- **Disadvantages**:
  - Less robust than APIs.
  - May still trigger anti-scraping mechanisms.

---

### **Recommendation**
- **For Scalability**: Use Google Places API or Yelp Fusion API.
- **For Small-Scale Projects**: Use `requests` and `BeautifulSoup`.
- **Avoid Selenium**: It is resource-heavy and slow for this use case.

Let me know if you’d like assistance implementing any of these approaches!

**Mike:** What is Google places API?

**GPT:** The **Google Places API** is a service provided by Google that allows developers to programmatically retrieve detailed information about places (businesses, landmarks, and geographic locations) using structured queries. It is part of the larger **Google Maps Platform**, and it enables applications to search for places, retrieve details like phone numbers, addresses, and ratings, and even provide autocomplete suggestions.

---

### **Key Features of Google Places API**
1. **Place Search**:
   - Search for places by text (e.g., "Van Kirk Pools, Fort Lauderdale").
   - Search near a geographic location with filters like type or name.

2. **Place Details**:
   - Retrieve specific details about a place, such as:
     - Phone number (formatted and international formats).
     - Address (formatted and component-based).
     - Business hours.
     - Reviews, website, and more.

3. **Place Autocomplete**:
   - Offer location-based suggestions as users type.

4. **Nearby Search**:
   - Search for places within a certain radius of geographic coordinates.

5. **Find Place by Text**:
   - Quickly search for a place using text input and get key details.

---

### **When to Use Google Places API**
- You want structured and reliable data (e.g., phone numbers, addresses).
- You need real-time results for businesses or landmarks.
- You want to enhance your application with location-based services.

---

### **How It Works**
1. **Query Types**:
   - A simple text query (e.g., "Pizza near New York").
   - Search within a radius (e.g., all restaurants within 5 miles).

2. **Place ID**:
   - Each place has a unique identifier called a "Place ID" to retrieve further details.

3. **Requests and Responses**:
   - Send HTTP requests to Google's servers.
   - Receive JSON responses with structured data.

---

### **Pricing**
- The API is billed based on the number of requests:
  - Place Search: $0.017 per request.
  - Place Details: $0.017 per request.
  - Free usage quota: $200 credit per month (enough for small projects).
- Check the [Google Maps Platform Pricing](https://cloud.google.com/maps-platform/pricing) for the latest details.

---

### **Steps to Get Started**
1. **Create a Google Cloud Account**:
   - Visit [Google Cloud Console](https://console.cloud.google.com/).

2. **Enable the Places API**:
   - In the Cloud Console, enable the **Places API** under the "APIs & Services" section.

3. **Get an API Key**:
   - Generate an API key in the "Credentials" section.
   - Restrict the key (e.g., to specific IPs or HTTP referrers) for security.

4. **Make API Requests**:
   - Use the key to query the API endpoints.

---

### **Example Usage**
Here’s an example of how to use the API to search for a place and get its phone number:

#### Python Example:
```python
import requests

# Google Places API Key
API_KEY = "your_google_api_key"

# Base URL for the Places Text Search endpoint
TEXT_SEARCH_URL = "https://maps.googleapis.com/maps/api/place/textsearch/json"
DETAILS_URL = "https://maps.googleapis.com/maps/api/place/details/json"

def get_place_phone_number(query):
    # Search for the place
    search_params = {
        "query": query,
        "key": API_KEY
    }
    search_response = requests.get(TEXT_SEARCH_URL, params=search_params)
    search_results = search_response.json()

    if search_results.get("results"):
        # Get the Place ID of the first result
        place_id = search_results["results"][0]["place_id"]

        # Use the Place ID to get detailed information
        details_params = {
            "place_id": place_id,
            "fields": "formatted_phone_number",
            "key": API_KEY
        }
        details_response = requests.get(DETAILS_URL, params=details_params)
        details_result = details_response.json()

        if details_result.get("result"):
            return details_result["result"].get("formatted_phone_number", "Phone number not found")
    return "Place not found"

# Example query
query = "Van Kirk Pools, Fort Lauderdale"
phone_number = get_place_phone_number(query)
print(f"Phone number for {query}: {phone_number}")
```

---

### **Advantages of Google Places API**
- Reliable and consistent data from Google’s database.
- Structured JSON responses make parsing easy.
- Scalable for small to large projects.
- Multiple features in one service (search, autocomplete, nearby search).

### **Disadvantages**
- Paid usage for high-volume queries.
- Requires an active internet connection.

---

### Use Cases
- **Directory Services**: Building apps or tools to list business details.
- **CRM Integration**: Automatically fetching business details for leads.
- **Travel Apps**: Finding attractions, hotels, or restaurants.

Let me know if you'd like to explore this further or set it up!

**Mike:** Can I configure a custom GPT to make an API call to Google places and display the results in chat GPT?

**GPT:** Yes, you can configure a custom GPT or integrate an API call to the Google Places API and display the results within a chat interface like ChatGPT. Here’s how you can achieve this:

---

### **Steps to Configure Custom GPT with Google Places API**

1. **Set Up Google Places API**
   - Sign up for [Google Cloud](https://cloud.google.com/).
   - Enable the **Google Places API** in the Google Cloud Console.
   - Generate an API Key for authentication.

2. **Prepare the Backend for API Calls**
   - You’ll need a backend server or script to act as a bridge between the Google Places API and your ChatGPT interface.
   - Use a framework like Flask (Python), Express (JavaScript), or FastAPI for rapid API development.

3. **Develop the Google Places API Integration**
   Write a function to fetch place details based on user queries and return results.

   #### Python Example with Flask:
   ```python
   from flask import Flask, request, jsonify
   import requests

   app = Flask(__name__)

   GOOGLE_API_KEY = "your_google_api_key"

   @app.route('/get_place_details', methods=['GET'])
   def get_place_details():
       query = request.args.get('query')
       if not query:
           return jsonify({"error": "Query parameter is required"}), 400
       
       # Google Places Text Search API
       url = "https://maps.googleapis.com/maps/api/place/textsearch/json"
       params = {"query": query, "key": GOOGLE_API_KEY}
       response = requests.get(url, params=params)
       data = response.json()
       
       if data.get("results"):
           place_id = data["results"][0]["place_id"]

           # Get more details about the place
           details_url = "https://maps.googleapis.com/maps/api/place/details/json"
           details_params = {"place_id": place_id, "fields": "formatted_phone_number,name", "key": GOOGLE_API_KEY}
           details_response = requests.get(details_url, params=details_params)
           details_data = details_response.json()
           
           return jsonify(details_data.get("result", {}))
       else:
           return jsonify({"error": "No results found"}), 404

   if __name__ == "__main__":
       app.run(debug=True)
   ```

   - This Flask server takes a `query` parameter, searches for the place, and fetches details like the phone number.

4. **Deploy the Backend**
   - Host your backend on a service like:
     - [Heroku](https://www.heroku.com/)
     - [Google Cloud Run](https://cloud.google.com/run)
     - [AWS Lambda](https://aws.amazon.com/lambda/)
   - Ensure the endpoint is publicly accessible and secured.

5. **Integrate the API with ChatGPT (Custom Tooling)**
   - If you're working within the OpenAI ecosystem:
     - **Add Custom Tools**: OpenAI's API supports external tool integration (like calling your Flask app).
     - Write a function to query your API and display results.

   #### Example with OpenAI's `tools` Configuration:
   ```python
   import openai
   import requests

   def call_google_places_api(query):
       # Your custom backend endpoint
       api_url = "https://your-backend-url.com/get_place_details"
       response = requests.get(api_url, params={"query": query})
       if response.status_code == 200:
           return response.json()
       else:
           return {"error": "Failed to fetch details"}

   def chat_with_places_integration(user_query):
       # Example GPT prompt with API call
       if "find" in user_query.lower():
           result = call_google_places_api(user_query)
           if "error" in result:
               return f"Error: {result['error']}"
           else:
               name = result.get("name", "Unknown")
               phone = result.get("formatted_phone_number", "Phone number not available")
               return f"Business Name: {name}\nPhone Number: {phone}"
       else:
           return "How can I assist you?"

   # Example usage
   user_query = "Find Van Kirk Pools, Fort Lauderdale"
   response = chat_with_places_integration(user_query)
   print(response)
   ```

6. **Deploy the Full System**
   - Host your backend and integrate it with ChatGPT as a connected tool.
   - If using OpenAI’s hosted tools environment, define the tool's behavior to fetch and process results.

---

### **Expected Workflow**
1. **User Query**:
   - User asks, *"Find Van Kirk Pools, Fort Lauderdale."*

2. **API Call**:
   - The custom GPT tool sends the query to your backend.

3. **Response Parsing**:
   - The backend queries Google Places API, retrieves details, and returns them to ChatGPT.

4. **Display Results**:
   - ChatGPT formats the data and responds with:
     ```
     Business Name: Van Kirk Pools
     Phone Number: (954) 123-4567
     ```

---

### **Advantages**
- **Scalability**: Leverage Google’s powerful API for accurate data.
- **Automation**: Fetch real-time details without manual input.
- **Customizability**: Adjust the backend logic to fit specific needs.

### **Considerations**
- **API Costs**: Ensure you monitor Google Places API usage to avoid unexpected charges.
- **Latency**: Depending on backend speed, API calls may introduce slight delays.
- **Error Handling**: Handle cases where Google API does not return results or your backend faces issues.

Would you like guidance on setting up any part of this system?

**Mike:** Do I need a back end ? Can I just use the custom GPT only ?

**GPT:** You can potentially avoid setting up a separate backend and instead configure a **Custom GPT** directly to make API calls, provided your GPT instance supports tools and plugins that allow API integrations.

Here’s how you can do it **without a backend**:

---

### **Using Custom GPT with Tools for API Integration**
Custom GPT models can call APIs directly if the platform allows you to define tools or plugins that interact with external services.

#### **How It Works**
1. Define a custom "tool" that handles HTTP requests to the Google Places API.
2. Integrate the tool into your GPT configuration.
3. The tool makes the API call directly to Google Places, processes the response, and provides the result to the GPT model for output.

---

### **Steps to Configure a Backend-Free Approach**

#### 1. **Obtain Your Google Places API Key**
- Follow [Google’s guide](https://developers.google.com/maps/gmp-get-started) to set up the Places API and get your API key.

#### 2. **Define a Custom Tool in GPT**
Most GPT platforms with tooling support allow you to define tools for external API calls.

- **Example Tool Definition** (Pseudo-code):
  ```python
  from requests import get

  def fetch_place_details(query):
      url = "https://maps.googleapis.com/maps/api/place/textsearch/json"
      api_key = "your_google_api_key"
      params = {
          "query": query,
          "key": api_key,
      }
      response = get(url,

**Mike:** Write a script using the following content : eb Scraping Tutorial Using Selenium & Python (+ examples)
13 May 2024 (updated) | 30 min read
In our previous tutorial, we looked at how to use the Scrapy framework for basic web scraping tasks. Today, we'll dive into using Selenium with Python in a straightforward, detailed guide.

Selenium is a powerful suite of tools designed for automating web browsers. It provides programming interfaces, known as bindings, for all major programming languages, including Python, which we will focus on in this guide.

The Selenium API uses something called the WebDriver protocol to interact with web browsers such as Chrome, Firefox, or Safari. It can manage both browsers installed on your local machine and those running on remote servers.

Originally developed for testing websites across different browsers, Selenium is now widely used for automating web browsers for various tasks such as taking screenshots, managing cookies, and, crucially for us, web scraping.

Selenium is particularly adept at handling websites that use a lot of JavaScript, making it possible to automate tasks that involve:

Clicking buttons
Filling out forms
Scrolling through web pages
Taking screenshots
Executing custom JavaScript commands
This makes Selenium an excellent choice for scraping data from dynamic, JavaScript-heavy websites, often called Single-Page Applications (SPAs). Traditional tools that use simple HTTP requests and HTML parsing might only fetch JavaScript code without accessing the underlying data, whereas Selenium can interact with these pages just like a human user would.Web Scraping Tutorial Using Selenium & Python (+ examples)
13 May 2024 (updated) | 30 min read
In our previous tutorial, we looked at how to use the Scrapy framework for basic web scraping tasks. Today, we'll dive into using Selenium with Python in a straightforward, detailed guide.

Selenium is a powerful suite of tools designed for automating web browsers. It provides programming interfaces, known as bindings, for all major programming languages, including Python, which we will focus on in this guide.

The Selenium API uses something called the WebDriver protocol to interact with web browsers such as Chrome, Firefox, or Safari. It can manage both browsers installed on your local machine and those running on remote servers.

Originally developed for testing websites across different browsers, Selenium is now widely used for automating web browsers for various tasks such as taking screenshots, managing cookies, and, crucially for us, web scraping.

Selenium is particularly adept at handling websites that use a lot of JavaScript, making it possible to automate tasks that involve:

Clicking buttons
Filling out forms
Scrolling through web pages
Taking screenshots
Executing custom JavaScript commands
This makes Selenium an excellent choice for scraping data from dynamic, JavaScript-heavy websites, often called Single-Page Applications (SPAs). Traditional tools that use simple HTTP requests and HTML parsing might only fetch JavaScript code without accessing the underlying data, whereas Selenium can interact with these pages just like a human user would.

Web Scraping using Selenium and Python
Web Scraping using Selenium and Python
Installation
To get started with Selenium, you first need to set up your environment:

Google Chrome: Download and install the latest version from the Chrome download page .
ChromeDriver: Ensure you download a version of ChromeDriver that matches your version of Chrome from the ChromeDriver download page . This is essential as it enables Selenium to communicate with your browser.
Selenium Python Bindings: These allow you to control your browser directly from Python. You can download them from the Selenium downloads page .
Setting up your environment
For package management and virtual environments, I recommend using Poetry . It's efficient and integrates well with your workflow. Here's how to add Selenium to your Python project:

Add Selenium to your pyproject.toml file:
selenium = "^4.20.0"
Install the package using Poetry:
poetry install
To run your Selenium script, use:
poetry run python3 my_script.py
Alternatively, if you prefer a more straightforward method, install Selenium directly with:

pip install selenium
This setup will ensure that you have all necessary tools to start scripting with Selenium. Once you have these components installed, you’re ready to move on to writing your first scraping script.

Quickstart
Once you've installed Chrome and ChromeDriver and have Selenium set up, you're all set to fire up the browser:

from selenium import webdriver

# Set the path to the Chromedriver
DRIVER_PATH = '/path/to/chromedriver'

# Initialize the Chrome driver
driver = webdriver.Chrome(executable_path=DRIVER_PATH)

# Navigate to the URL
driver.get('https://google.com')

# It's a good practice to close the browser when done
driver.quit()
Note that we didn't explicitly configure headless mode, therefore when you run your initial script, a regular Chrome window will be launched. You'll also see an alert banner that says, "Chrome is being controlled by automated testing software." This confirms that Selenium is in control.

Chrome is controller by Selenium banner
Chrome is controller by Selenium banner
Chrome headless mode
Using the visible mode where you can see the browser is great for development because it lets you see exactly what's happening as your script runs. However, for production environments, it's best to switch to headless mode . In headless mode, Chrome operates in the background with no visible interface, saving valuable system resources. This is ideal for servers or systems where graphical output is unnecessary and could be a waste of resources.

Headless mode can be enabled with just a few adjustments in your Selenium setup, allowing Chrome to run silently but fully functional, executing all tasks as it would in a non-headless mode:

from selenium import webdriver
from selenium.webdriver.chrome.options import Options

# Configure Chrome options
options = Options()
options.headless = True  # Enable headless mode
options.add_argument("--window-size=1920,1200")  # Set the window size

# Set the path to the Chromedriver
DRIVER_PATH = '/path/to/chromedriver'

# Initialize the Chrome driver with the specified options
driver = webdriver.Chrome(options=options, executable_path=DRIVER_PATH)

# Your code here to interact with the page
# ...

# It's a good practice to close the driver when you're finished
driver.quit()
We only need to instantiate an Options object, set its headless field to True, and pass it to our WebDriver constructor. Done.

WebDriver page properties
Building on our headless mode example, let's go full Mario and check out Nintendo's website:

from selenium import webdriver
from selenium.webdriver.chrome.options import Options

# Set up options for headless Chrome
options = Options()
options.headless = True  # Enable headless mode for invisible operation
options.add_argument("--window-size=1920,1200")  # Define the window size of the browser

# Set the path to the Chromedriver
DRIVER_PATH = '/path/to/chromedriver'

# Initialize Chrome with the specified options
driver = webdriver.Chrome(options=options, executable_path=DRIVER_PATH)

# Navigate to the Nintendo website
driver.get("https://www.nintendo.com/")

# Output the page source to the console
print(driver.page_source)

# Close the browser session cleanly to free up system resources
driver.quit()
When you execute this script, Selenium will launch Chrome in headless mode, navigate to Nintendo's website, and print the page source. This output allows you to see the complete HTML content of the webpage, which is incredibly useful for scraping or debugging.

Observing the page source is just the start. Selenium provides access to several useful properties that can enhance your scraping tasks:

driver.title: This property fetches the title of the current webpage, which can be helpful for validation checks or when you need to ensure you are on the correct page before proceeding.
driver.current_url: Useful for situations involving redirects, this property allows you to capture the final URL after all redirects have been resolved, ensuring you're working with the correct page.
These properties are especially useful in dynamic web environments where content might change based on user interaction or JavaScript execution. For developers looking to get more out of Selenium, a full list of WebDriver properties and methods can be explored in the official WebDriver documentation .

Locating elements
One of the foundational tasks in web scraping is pinpointing exactly where the data you want is located on a web page. Selenium excels in this area by offering robust tools for locating elements—a critical feature not only for scraping data but also for automating test cases that check for the presence or absence of specific elements.

Selenium provides several strategies for finding elements on a page, such as:

Searching by tag name: Useful for broad searches within the HTML structure.
Using HTML classes or IDs: Ideal for pinpointing specific elements quickly if you know the class or ID.
Employing CSS selectors or XPath expressions: These methods offer precision in navigating complex page structures.
If you're new to XPath, or need a refresher on how it can be used to navigate the DOM, be sure to check out our detailed guide on how XPath expressions can help you filter the DOM tree . It's an excellent resource for understanding how to effectively utilize XPath within your scraping projects.

To locate an element in Chrome, a handy approach is to use the browser's developer tools. You can quickly access the tool you need by hovering over the desired element, then pressing Ctrl + Shift + C (or Cmd + Shift + C on macOS). This shortcut bypasses the usual right-click and select Inspect method, speeding up your workflow.

Steps to scale your web scraping operation with Selenium
To scale your web scraping effectively, consider these strategic steps:

Assess Your Current Needs: Evaluate the amount of data you need to scrape, how often you need to scrape, and the number of target websites. This assessment will guide your scaling strategy.
Infrastructure Planning: Choose between vertical scaling (enhancing your existing machine's capabilities) and horizontal scaling (adding more machines to distribute the workload). Horizontal scaling is generally preferred for its flexibility and scalability.
Implement Selenium Grid: Configure a central hub and multiple nodes. You can set up nodes in various locations or with different configurations to handle a wide range of scraping scenarios.
Optimize Test Scripts: Refine your Selenium scripts for peak performance and reliability. This may involve improving selectors, managing timeouts, and adhering to scripting best practices.
Manage Sessions and Concurrency: Regulate the number of concurrent sessions to prevent any node from being overwhelmed, which could degrade performance and increase error rates.
Incorporate Load Balancing: Use load balancing to evenly distribute requests across all nodes, ensuring no single node becomes a bottleneck.
Continuous Monitoring and Maintenance: Regularly check the performance of your scraping grid, update browsers, drivers, and scripts, and adapt to changes in web technologies.
Legal and Ethical Considerations: Ensure compliance with legal standards and website terms. Adhere to ethical scraping practices, such as respecting robots.txt rules and managing request rates.
Challenges of scaling with Selenium
While Selenium Grid lays the foundation for parallel execution, its setup and ongoing management can be intricate:

Infrastructure Management: Involves setting up and maintaining a server environment capable of supporting multiple nodes.
Resource Allocation: Requires the strategic distribution of tasks to avoid overloading resources.
Cost: The operational expenses can escalate, particularly if managing extensive physical or virtual server infrastructures.
Simplifying scaling with ScrapingBee
For those seeking to scale their web scraping operations without the complexity of infrastructure management, our web scraping API provides a potent solution. We manage all backend infrastructure, allowing you to focus solely on data extraction. Our API automatically adjusts to handle any volume of requests, and our integrated proxy management ensures high reliability and access by circumventing anti-bot measures.

Explore our services at ScrapingBee and let us take on the technical challenges, leaving you to concentrate on analyzing and utilizing your data.

💡 Love web scraping in Python? Check out our expert list of the Best Python web scraping libraries.

Conclusion
I hope you found this guide on using Selenium with Python helpful! You should now have a solid understanding of how to leverage the Selenium API to scrape and interact with JavaScript-heavy websites effectively.

If you're eager to explore more about web scraping with Python, don't miss our comprehensive guide to Python web scraping . It's packed with tips and techniques for beginners and seasoned developers alike.

For those interested in other powerful tools, check out our guide on Puppeteer with Python . Puppeteer, maintained by the Google Chrome team, offers advanced features that go beyond what Selenium can provide, making it a formidable choice for controlling Chrome headlessly.

While Selenium is invaluable for extracting data from dynamic web pages, scaling Selenium or Headless Chrome instances can be challenging. This is where ScrapingBee comes in! Our web scraping API helps you scale your scraping operations efficiently, handling complexities like proxy management and request throttling seamlessly.

Selenium isn’t just for scraping; it’s also an excellent tool for automating virtually any web-based task. Whether you're automating form submissions or managing data behind login pages without an API, Selenium can simplify these processes. Just remember, as the following xkcd comic humorously points out, automation should make your life easier, not more complicated.

**GPT:** Here’s a Python script based on the content of the Selenium tutorial you provided. This script demonstrates how to use Selenium for web scraping by automating a browser to visit a page, locate elements, and extract specific information. It also includes headless browser configuration for efficiency.

### **Python Script: Web Scraping with Selenium**

```python
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
import time

# Configure Chrome options for headless mode
options = Options()
options.headless = True  # Run Chrome in the background
options.add_argument("--window-size=1920,1200")  # Define browser window size

# Set the path to your ChromeDriver
DRIVER_PATH = '/path/to/chromedriver'  # Update with the actual path to chromedriver

# Initialize the Chrome WebDriver
driver = webdriver.Chrome(executable_path=DRIVER_PATH, options=options)

try:
    # Navigate to the desired website
    driver.get("https://www.google.com")
    print(f"Page Title: {driver.title}")

    # Example search for a business
    search_box = driver.find_element(By.NAME, "q")  # Locate the search box
    search_box.send_keys("Van Kirk Pools Fort Lauderdale\n")  # Perform a Google search
    time.sleep(3)  # Allow time for the search results to load

    # Extract the phone number from the search results (example: using XPath)
    try:
        phone_element = driver.find_element(By.XPATH, "//span[contains(text(), 'Phone')]/../following-sibling::span")
        print(f"Phone Number: {phone_element.text}")
    except Exception as e:
        print("Phone number not found:", e)

    # Add additional searches here if needed
    # Repeat the search process for another business or location
    # ...

finally:
    # Clean up and close the browser
    driver.quit()
```

---

### **Explanation of the Script**

1. **Setup Chrome in Headless Mode**:  
   The script runs Chrome without opening a visible window, which is ideal for server environments or large-scale scraping tasks.

2. **Search for Businesses**:  
   Automates Google search using Selenium to locate the search box, type a query, and retrieve the phone number.

3. **Element Location with XPath**:  
   Uses XPath to find and extract the phone number from the search results. This method can be tailored based on the structure of the target page.

4. **Dynamic Loading**:  
   Includes a `time.sleep()` function to handle dynamic content. For more robust handling, you can use Selenium's `WebDriverWait`.

5. **Error Handling**:  
   Wraps the phone number extraction logic in a `try-except` block to handle cases where the number is not found.

---

### **How to Scale It**

1. **Read Queries from a CSV File**:  
   Enhance the script to read business names and locations from a CSV file, perform searches, and save results to another CSV file. Here's an example of adding CSV support:
   ```python
   import csv

   input_file = 'queries.csv'
   output_file = 'results.csv'

   with open(input_file, 'r') as infile, open(output_file, 'w', newline='') as outfile:
       reader = csv.reader(infile)
       writer = csv.writer(outfile)
       writer.writerow(['Business Name', 'Location', 'Phone Number'])

       for row in reader:
           business_name, location = row
           query = f"{business_name} {location}"
           # Perform search using Selenium (adapt code above)
           # Add the extracted phone number to the CSV
           writer.writerow([business_name, location, phone_number])
   ```

2. **Use Proxies for Scalability**:  
   To avoid being blocked by Google, implement proxies or CAPTCHA-solving services.

3. **Optimize XPath Selectors**:  
   Adjust XPath expressions based on the structure of the search result pages to ensure accurate data extraction.

4. **Consider APIs**:  
   For high-scale and reliable results, use the **Google Places API** as mentioned earlier instead of scraping Google directly.

This setup gives you a solid foundation for web scraping tasks using Selenium.

**Mike:** I want to use Google collab to run Python scripts. I need to write a python script that performs multiple Google searches and returns an answer in a CSV file what is the best way to accomplish this

**GPT:** Running a Python script in Google Colab for multiple Google searches and saving results to a CSV file can be efficient, especially when leveraging its cloud environment. Here's a step-by-step guide to help you achieve this:

---

### **Setup Steps in Google Colab**

1. **Environment Setup**:
   - Open Google Colab.
   - Install necessary packages: Selenium and ChromeDriver.

2. **Handle Multiple Searches**:
   - Read search queries from a CSV file.
   - Perform Google searches using Selenium.
   - Extract desired information.
   - Write results back to a CSV file.

3. **Integrate with Colab’s File System**:
   - Upload/download files to/from Google Drive for storage.

---

### **Colab-Compatible Script**

```python
# Install Selenium and ChromeDriver in Colab
!pip install selenium
!apt-get update
!apt-get install -y chromium-chromedriver
!cp /usr/lib/chromium-browser/chromedriver /usr/bin

# Import required libraries
import csv
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
import time

# Configure Chrome options for headless mode in Colab
chrome_options = webdriver.ChromeOptions()
chrome_options.add_argument("--headless")  # Run Chrome in headless mode
chrome_options.add_argument("--no-sandbox")  # Bypass OS security model
chrome_options.add_argument("--disable-dev-shm-usage")  # Overcome limited resource problems

# Function to perform Google search and extract phone number
def search_and_extract(query):
    service = Service('/usr/bin/chromedriver')
    driver = webdriver.Chrome(service=service, options=chrome_options)
    
    # Perform Google search
    driver.get("https://www.google.com")
    search_box = driver.find_element(By.NAME, "q")
    search_box.send_keys(query + "\n")
    time.sleep(2)  # Wait for the page to load

    # Extract phone number (example XPath, modify as needed)
    try:
        phone_element = driver.find_element(By.XPATH, "//span[contains(text(), 'Phone')]/../following-sibling::span")
        phone_number = phone_element.text
    except:
        phone_number = "Not found"
    
    driver.quit()
    return phone_number

# Read input CSV and write output CSV
input_file = 'input_queries.csv'  # Make sure to upload this file in Colab
output_file = 'output_results.csv'

# Process each search query and extract results
results = []
with open(input_file, 'r') as infile:
    reader = csv.reader(infile)
    header = next(reader)  # Skip header if present
    for row in reader:
        business_name, location = row
        query = f"{business_name} {location}"
        phone_number = search_and_extract(query)
        results.append([business_name, location, phone_number])

# Save the results to a CSV file
with open(output_file, 'w', newline='') as outfile:
    writer = csv.writer(outfile)
    writer.writerow(['Business Name', 'Location', 'Phone Number'])
    writer.writerows(results)

# Download the results CSV
from google.colab import files
files.download(output_file)
```

---

### **Steps to Execute This in Colab:**

1. **Upload Your CSV File**:  
   - Click the folder icon on the left sidebar of Colab.
   - Upload your `input_queries.csv` file containing business names and locations.

2. **Modify the Input File Name**:  
   Ensure the variable `input_file` matches your uploaded file name.

3. **Run the Script**:  
   Execute each cell one by one. Colab will install dependencies, run the searches, and generate an output CSV file.

4. **Download the Results**:  
   The script includes a line to download the resulting `output_results.csv` file directly to your local machine.

---

### **Key Considerations:**

- **Google Restrictions**:  
  Frequent or automated searches might trigger Google's anti-bot protection (CAPTCHA). To avoid this:
  - Use delays between searches (`time.sleep()`).
  - Rotate IP addresses or use proxies if scaling up.
  - Limit the number of concurrent searches.

- **XPath Adaptability**:  
  Depending on the Google results structure, you may need to update the XPath for phone number extraction to match real-world elements.

- **Google Colab Resources**:  
  Ensure you don’t exceed Colab’s resource limits. Running large-scale scraping might require a local or dedicated cloud environment.

This setup leverages Google Colab's cloud environment for processing and provides a straightforward way to automate Google searches with Selenium!

**Mike:** Write the script using a different python library

**GPT:** To avoid issues related to Selenium's complexity or Google blocking, a different Python library like **Requests-HTML** or **BeautifulSoup** can simplify web scraping for text-based results. Let's use **Requests-HTML**, which can handle JavaScript execution with less overhead than Selenium.

---

### **Setup Steps for Requests-HTML:**

1. **Install Libraries** in Google Colab or your local environment:
   ```bash
   !pip install requests-html
   ```

2. **Script Overview**:
   - Reads business search queries from a CSV.
   - Fetches Google search results.
   - Parses the response to extract phone numbers (or specific data).

---

### **Python Script:**

```python
# Install Requests-HTML if needed
!pip install requests-html

import csv
import time
from requests_html import HTMLSession

# Function to perform Google search and extract phone number
def search_and_extract(query):
    session = HTMLSession()
    
    # Perform Google search
    response = session.get(f"https://www.google.com/search?q={query}")
    response.html.render(timeout=30)  # Render JavaScript content
    
    # Extract phone number - modify selector based on your need
    try:
        # Search for elements containing phone numbers (example CSS selector)
        phone_element = response.html.find('span', containing='Phone')[0]
        phone_number = phone_element.text
    except Exception as e:
        phone_number = "Not found"
    
    session.close()
    return phone_number

# Read input CSV and write output CSV
input_file = 'input_queries.csv'  # Upload this to Colab
output_file = 'output_results.csv'

results = []
with open(input_file, 'r') as infile:
    reader = csv.reader(infile)
    header = next(reader)  # Skip header if present
    for row in reader:
        business_name, location = row
        query = f"{business_name} {location}"
        phone_number = search_and_extract(query)
        print(f"Processed: {query} -> {phone_number}")
        results.append([business_name, location, phone_number])
        time.sleep(2)  # Pause to avoid rate-limiting

# Save the results to a CSV file
with open(output_file, 'w', newline='') as outfile:
    writer = csv.writer(outfile)
    writer.writerow(['Business Name', 'Location', 'Phone Number'])
    writer.writerows(results)

# Download the results CSV
from google.colab import files
files.download(output_file)
```

---

### **How to Run This in Google Colab:**

1. **Upload Your CSV File**:
   - Click the folder icon in the Colab sidebar.
   - Upload `input_queries.csv` with business names and locations.

2. **Adjust Input File Names**:  
   Ensure `input_file` matches your uploaded file.

3. **Run the Script**:  
   Execute each cell sequentially.

4. **Download Results**:  
   The output CSV will download automatically after processing.

---

### **Why This Approach?**
- **Faster Execution**: Requests-HTML is lightweight and handles JavaScript with fewer resources.
- **Lower Detection Risk**: Simpler requests are less likely to trigger anti-bot measures compared to Selenium.
- **Easy to Modify**: You can adjust CSS selectors or filters to extract different information.

---

### **Important Considerations**:
- **Dynamic Websites**: For highly dynamic sites, Selenium might still be necessary.
- **Anti-Bot Measures**: Include delays (`time.sleep`) and avoid rapid, repeated searches.
- **Extracted Data**: Adjust the CSS selectors to match real search results structure.

This solution balances simplicity and efficiency while remaining flexible for your scraping needs!

**Mike:** My goal is to perform multiple searches on Google using Google collab and python.  I have search terms in a CSV file.  The search terms are business names.  Want to search the web for phone numbers for the business and then put the output into the same csv file . P

**GPT:** To achieve your goal using Google Colab and Python, here's a streamlined approach that involves reading search terms from a CSV file, performing Google searches, extracting phone numbers, and updating the CSV with the results.

---

### **Steps Overview:**

1. **Upload Your CSV** to Google Colab.
2. **Use `Requests-HTML` or `BeautifulSoup`** to scrape search results.
3. **Parse and Extract** phone numbers.
4. **Update and Download** the modified CSV.

---

### **Python Script for Google Colab:**

```python
# Install required libraries
!pip install requests-html pandas

import pandas as pd
import time
from requests_html import HTMLSession

# Function to search Google and extract phone numbers
def get_phone_number(query):
    session = HTMLSession()
    url = f"https://www.google.com/search?q={query} phone number"
    
    try:
        response = session.get(url)
        response.html.render(timeout=30, sleep=2)
        
        # Extract potential phone number
        elements = response.html.find('span')  # Adjust this selector if needed
        for element in elements:
            if any(char.isdigit() for char in element.text):  # Basic digit check
                return element.text
    except Exception as e:
        return "Not found"
    finally:
        session.close()
    
    return "Not found"

# Load your CSV file (ensure it's uploaded to Colab)
input_file = 'business_list.csv'  # Change the file name if different
df = pd.read_csv(input_file)

# Add a new column for phone numbers
df['Phone Number'] = df['Business Name'].apply(lambda name: get_phone_number(name))

# Save the updated CSV
output_file = 'updated_business_list.csv'
df.to_csv(output_file, index=False)

# Download the updated CSV file
from google.colab import files
files.download(output_file)
```

---

### **Steps to Run in Google Colab:**

1. **Upload the CSV**:
   - Click the folder icon in Colab.
   - Upload your `business_list.csv`.

2. **Ensure CSV Format**:
   Your CSV should have a column named `"Business Name"`, but you can modify the script if it’s different.

3. **Run Each Cell**:
   Execute the script by running each cell in Colab sequentially.

4. **Download Results**:
   The script automatically downloads the updated CSV with phone numbers.

---

### **Notes & Considerations:**

- **Google Restrictions**: Excessive searches may trigger Google’s anti-bot measures. Add delays (e.g., `time.sleep(2)`) and consider using proxies for large datasets.
- **Adjust Extraction Logic**: The phone number extraction logic (`find('span')`) may need tweaking based on real search results structure.
- **Alternative APIs**: For more reliable large-scale scraping, consider using the **Google Places API** for business data.

This script provides a solid foundation to automate business phone number lookups using Colab and Python!

**Mike:** How do I avoid google restrictions?

**GPT:** Avoiding Google restrictions during web scraping involves several strategies to minimize the risk of being blocked or flagged. Here’s a detailed breakdown of best practices to follow:

---

### **1. Implement Delays Between Requests:**
   - **Randomize Delays:** Add random intervals between requests to mimic human behavior.
   ```python
   import time
   import random

   time.sleep(random.uniform(5, 10))  # Random delay between 5 to 10 seconds
   ```

---

### **2. Rotate User Agents:**
   Changing the user agent string helps avoid detection as a bot. Use a list of various user agents:
   ```python
   import requests

   user_agents = [
       'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
       'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)',
       'Mozilla/5.0 (X11; Linux x86_64)',
   ]

   headers = {'User-Agent': random.choice(user_agents)}
   response = requests.get(url, headers=headers)
   ```

---

### **3. Use Proxies:**
   Proxies mask your IP address and distribute requests across multiple IPs, reducing the chance of being blocked.

   - **Free vs. Paid Proxies:** Free proxies are unreliable. Consider paid services like:
     - **Bright Data (formerly Luminati)**
     - **ScraperAPI**
     - **ProxyMesh**

   ```python
   proxies = {
       'http': 'http://your_proxy_ip:port',
       'https': 'http://your_proxy_ip:port',
   }

   response = requests.get(url, headers=headers, proxies=proxies)
   ```

---

### **4. Use Headless Browsers Wisely:**
   Headless browsing with **Selenium** is detectable. Implement browser fingerprinting strategies to simulate real user behavior:
   - Use random window sizes.
   - Mimic mouse movements and keyboard inputs.

   ```python
   from selenium.webdriver.chrome.options import Options

   options = Options()
   options.headless = True
   options.add_argument("window-size=1920,1200")
   options.add_argument("user-agent=" + random.choice(user_agents))
   ```

---

### **5. Limit Request Frequency:**
   - **Batch Requests:** Split large tasks into smaller batches.
   - **Exponential Backoff:** Increase wait times between retries if detected.

---

### **6. Use Anti-Captcha Services:**
   Captchas can be a major hurdle. Anti-captcha services like **2Captcha** or **Anti-Captcha.com** can solve captchas programmatically.

---

### **7. Respect `robots.txt`:**
   - Check if the site’s `robots.txt` file disallows scraping.
   - Respect website terms of service to avoid legal issues.

---

### **8. Use APIs Instead of Scraping (Preferred):**
   For reliable, large-scale data collection, consider using **Google Places API** or **ScraperAPI** instead of scraping HTML. This ensures you stay compliant and avoid blocks.

---

### **9. Monitor and Handle Blocks Gracefully:**
   Detect when your requests are blocked and implement fallback strategies:
   - Check for HTTP 429 (Too Many Requests) or 403 (Forbidden) status codes.
   - Pause or switch IPs upon detection.

---

By combining these strategies, you can significantly reduce the likelihood of encountering Google restrictions while scraping business data.

**Mike:** I also want to search the business name to see if it has a Google business profile .

**GPT:** To search for a business's Google Business Profile (GBP) and extract key details, you can use the **Google Places API**. This method is reliable, efficient, and avoids many scraping-related restrictions. Here's how you can approach it:

---

### **Steps to Implement:**

1. **Set Up a Google Cloud Project:**
   - Go to the [Google Cloud Console](https://console.cloud.google.com/).
   - Create a new project or select an existing one.
   - Enable the **Places API**.

2. **Generate an API Key:**
   - Navigate to **APIs & Services** > **Credentials**.
   - Click **Create Credentials** > **API Key**.
   - Restrict the key to specific APIs and IP addresses for security.

3. **Install Required Libraries:**
   Ensure you have the `requests` library installed in your Colab environment.
   ```bash
   !pip install requests
   ```

4. **Write the Python Script:**

   This script reads business names from a CSV file, searches for their Google Business Profiles, and appends details (like phone numbers) to the CSV.

   ```python
   import requests
   import pandas as pd

   # Replace with your Google API Key
   API_KEY = 'YOUR_GOOGLE_API_KEY'

   # Function to search for business details using Google Places API
   def get_business_details(business_name, location):
       url = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json"
       params = {
           'input': f"{business_name}, {location}",
           'inputtype': 'textquery',
           'fields': 'name,formatted_phone_number,place_id',
           'key': API_KEY
       }

       response = requests.get(url, params=params)
       if response.status_code == 200:
           data = response.json()
           if data['candidates']:
               return data['candidates'][0].get('formatted_phone_number', 'Not Found')
       return 'Not Found'

   # Read CSV and process business names
   df = pd.read_csv('/path/to/your/business_list.csv')  # Replace with your CSV file path

   # Add a new column for phone numbers
   df['Phone Number'] = df.apply(lambda row: get_business_details(row['Business Name'], row['Location']), axis=1)

   # Save the updated CSV
   df.to_csv('/path/to/updated_business_list.csv', index=False)
   print("Updated CSV saved!")
   ```

---

### **CSV Format Example:**

Your input CSV (`business_list.csv`) should have at least two columns:
```
Business Name,Location
"Van Kirk Pools","Fort Lauderdale, FL"
"Simply the Best Digital","Boca Raton, FL"
```

---

### **Key Considerations:**

1. **API Limits:** 
   - Free tier: 100,000 requests per month.
   - Monitor usage to avoid unexpected charges.

2. **Field Options:** 
   You can customize `fields` to extract additional details, such as:
   - `formatted_address`
   - `opening_hours`
   - `website`

3. **Error Handling:** 
   Implement retries and exception handling to manage network issues or invalid responses gracefully.

---

This approach leverages the power of the **Places API** to accurately find and validate Google Business Profiles, ensuring you stay within Google's usage policies while automating data collection.
