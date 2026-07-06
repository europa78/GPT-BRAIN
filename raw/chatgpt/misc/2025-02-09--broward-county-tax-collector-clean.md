---
title: "Broward county tax collector clean"
date: 2025-02-09
cluster: "Misc / Uncategorized"
messages: 6
source: chatgpt-export conversations.json (FULL transcript)
---

# Broward county tax collector clean

> 6 messages · 2025-02-09 · cluster: Misc / Uncategorized

**Semantic neighbors:** [[business tax records search]] · [[Types of Diagrams]] · [[Setting Up Payment Link]] · [[Data Cleaning and Structuring]]

## Transcript

**Mike:** The following data is from a Google sheet.  I need the phone numbers to be consistent in every cell.  The output should be 954-667-3333 for example .  The address should have street address , state and zip code in separate columns .  //Year	Business Name	Owner Name	Business Phone	Business Address	Account Status	Business Start Date	Business City	Business State	Business Zip		//

**GPT:** I will format the phone numbers in a consistent format (###-###-####) and split the address into separate columns: **Street Address, State, and Zip Code**. Please upload the Google Sheets file or provide the data so I can process it accordingly.

**GPT:** I have cleaned the data by ensuring that all phone numbers follow the **XXX-XXX-XXXX** format and split the business address into separate columns: **Street Address, State, and Zip Code**. Let me know if you need any additional modifications or if you would like to download the cleaned file.

**Mike:** Write a python script that will clean the entire CSV file.  Tailor it to be used in Google colab

**GPT:** Below is a **Python script** designed for **Google Colab** that will clean the entire CSV file by:

- Formatting phone numbers to **XXX-XXX-XXXX**.
- Splitting **Business Address** into **Street Address, State, and Zip Code**.
- Saving the cleaned data as a **new CSV file**.

### 📌 **Steps to Use in Google Colab**
1. **Upload the CSV file** manually or use Google Drive.
2. **Run the script** to clean the data.
3. **Download the cleaned CSV file**.

---

### 📝 **Python Script for Google Colab**
```python
import pandas as pd
import re

# 📌 Upload CSV file in Google Colab
from google.colab import files
uploaded = files.upload()

# Get file name dynamically
file_name = list(uploaded.keys())[0]

# Load CSV file into DataFrame
df = pd.read_csv(file_name)

# Function to format phone numbers consistently
def format_phone_number(phone):
    phone = re.sub(r'\D', '', str(phone))  # Remove non-numeric characters
    if len(phone) == 10:
        return f"{phone[:3]}-{phone[3:6]}-{phone[6:]}"
    return phone  # Return original if it doesn't match the format

# Apply formatting to Business Phone column
df["Business Phone"] = df["Business Phone"].apply(format_phone_number)

# Function to split address into components
def split_address(address):
    match = re.match(r"(.+?)\s+([A-Z]{2})\s+(\d{5}(-\d{4})?)$", str(address).strip())
    if match:
        street, state, zip_code = match.group(1), match.group(2), match.group(3)
    else:
        street, state, zip_code = address, "", ""
    return pd.Series([street, state, zip_code])

# Split Business Address into separate columns
df[["Street Address", "State", "Zip Code"]] = df["Business Address"].apply(split_address)

# Drop the original Business Address column
df.drop(columns=["Business Address"], inplace=True)

# Save the cleaned file
cleaned_file_name = "cleaned_business_data.csv"
df.to_csv(cleaned_file_name, index=False)

# 📥 Download the cleaned file
files.download(cleaned_file_name)

print("✅ Cleaning complete! Download the cleaned CSV file.")
```

---

### 🎯 **How It Works**
1. Prompts the user to upload a CSV file in **Google Colab**.
2. Cleans **Business Phone Numbers** to ensure they follow the **XXX-XXX-XXXX** format.
3. Splits **Business Address** into **Street Address, State, and Zip Code**.
4. Saves the cleaned data as a **new CSV file**.
5. Automatically prompts a **download** for the cleaned file.

This script ensures **data consistency** and **readability**. Let me know if you need modifications! 🚀
