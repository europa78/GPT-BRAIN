---
title: "DRM EPUB credentials"
date: 2025-08-09
cluster: "Misc / Uncategorized"
messages: 12
source: chatgpt-export conversations.json (FULL transcript)
---

# DRM EPUB credentials

> 12 messages · 2025-08-09 · cluster: Misc / Uncategorized

**Semantic neighbors:** [[Email subject line suggestions]] · [[Parse city csv]] · [[AI manipulation strategy]] · [[Betting odds analysis]]

## Transcript

**Mike:** For drm protected epub books , where do I find the vendor login id and vendor password ?

**GPT:** For DRM-protected EPUB books (especially those using **Adobe Content Server DRM**, which is the most common), the *vendor login ID* and *vendor password* aren’t something you “find” in the book file itself — they come from the bookstore or library service that sold or loaned you the book.  

Here’s how it works:

---

**1. Where these credentials come from**
- **Vendor Login ID** – This is usually your account identifier for the store/vendor that sold you the ebook (e.g., Kobo, Barnes & Noble, Google Play Books, etc.).
- **Vendor Password** – This is not your normal account password, but an **Adobe Vendor ID–linked password** or an authorization key the vendor provides when you download the book.

---

**2. How to get them**
- If the book is from a **bookstore** (Kobo, Barnes & Noble, etc.):
  - Log in to your account on the vendor’s site.
  - Look for **“Download for Adobe Digital Editions”** or **“ACS Download”**.
  - When prompted in Adobe Digital Editions, enter the email/password you use for that store’s account — ADE will translate this into the correct Vendor ID authorization.
- If the book is from a **library** (OverDrive, Libby, etc.):
  - You authenticate using your library card and PIN.
  - The library system generates a one-time link with the Vendor ID embedded.
- If you purchased from a **smaller ebook retailer**:
  - They may send you the Vendor Login ID and password by email or show it in your order history.

---

**3. Special notes**
- You cannot “extract” these credentials from the EPUB itself — DRM encryption keys are tied to your vendor account or Adobe ID.
- If you’ve already authorized Adobe Digital Editions with your Adobe ID (or vendor account), you can redownload the book without re-entering credentials.
- Some vendors (like Kindle/Amazon) don’t use EPUB+Adobe DRM at all, but instead their own proprietary format — in that case, Vendor Login ID/Password doesn’t apply.

---

If you tell me **which store or library** your DRM-protected EPUB came from, I can give you the exact steps to retrieve the Vendor Login ID and password for that source.

**Mike:** Google books

**GPT:** For **Google Books** DRM-protected EPUBs, the *vendor login ID* and *vendor password* aren’t something you’ll see printed anywhere — they’re generated automatically by Google when you download a book for use in **Adobe Digital Editions (ADE)**.  

Here’s how it works specifically for Google Books:  

---

### **1. Vendor = “Google” in Adobe’s system**
- Google uses **Adobe Content Server DRM** for EPUB downloads.
- In ADE, the vendor is `"Google"`, and your *Vendor Login ID* is linked to the **Google account** you used to purchase the book.
- Your *Vendor Password* is essentially an authorization token Google sends to ADE during download — you never see the raw value.

---

### **2. How to download and authorize**
1. **Go to Google Play Books** on the web: [https://play.google.com/books](https://play.google.com/books)  
2. In your library, click the **three dots** next to your purchased book → **Download EPUB** → choose **"Adobe EPUB"**.  
3. This will download a small `.acsm` file — this isn’t the book yet, but a license file.
4. Open the `.acsm` file in **Adobe Digital Editions**.
5. When prompted, sign in using:
   - **Vendor**: Google
   - **Vendor Login ID**: Your full Google account email address
   - **Vendor Password**: Your Google account password (or an **app password** if you use 2-Step Verification).
6. ADE will then download the actual DRM-protected EPUB, tied to your Google account.

---

### **3. Important**
- If you have **2FA (Two-Factor Authentication)** enabled on your Google account, ADE may not accept your normal password.  
  - In that case, go to your Google Account → **Security** → **App Passwords** → create one for “Adobe Digital Editions” and use that as the Vendor Password.
- Without using ADE with the correct Vendor ID (Google), you can’t open the DRM-protected EPUB outside Google’s system.

---

If you want, I can give you **the exact step-by-step process** Google outlines for setting up ADE with Google Books so you can get past the Vendor Login ID/Password prompt without errors. This process trips up a lot of people.

**Mike:** Yes step by step

**GPT:** Got you—here’s the clean, click-by-click for **Google Play Books → Adobe Digital Editions (ADE)** with Google’s Vendor ID.

# Step-by-step (Google Books → ADE)

1. **Install ADE (current version)**
   - If you don’t have it, install Adobe Digital Editions on the computer you’ll use to read the book.

2. **(If ADE is already authorized, reset it)**
   - Open ADE.
   - Press **Ctrl+Shift+D** (Windows) or **Cmd+Shift+D** (Mac) → **Erase Authorization**.
   - This clears any wrong “Adobe ID” authorization so you can authorize with **Google** instead.

3. **Authorize ADE with the Google Vendor ID**
   - In ADE: **Help → Authorize Computer…**
   - In the **eBook Vendor** drop-down, choose **Google** (not Adobe ID).
   - **Vendor Login ID:** your full **Google account email** (the one you bought the book with).
   - **Vendor Password:** your **Google account password**.  
     - If you use 2-Step Verification (most do), create an **App Password**:
       - Go to your Google Account → **Security** → **App passwords** → pick **Other**, name it “Adobe Digital Editions”, **Generate**.
       - Paste that 16-character app password into ADE as the Vendor Password.

4. **Download the book from Google Play Books**
   - On the web, open **Google Play Books → Library**.
   - Click the **⋮ (three dots)** next to your purchased title → **Download/Export** → choose **Adobe EPUB** (this downloads a small **.acsm** file).
     - The .acsm is the license ticket, not the book itself.

5. **Open the .acsm in ADE**
   - Double-click the **.acsm** file (or in ADE: **File → Add to Library…**).
   - ADE fetches and downloads the actual **DRM-protected EPUB** to your library, now tied to your Google Vendor authorization.

6. **Read or move to other devices (optional)**
   - To use on another computer/device, repeat **Step 3** (authorize ADE with **Google**) using the same Google account (and app password if needed), then open the same **.acsm** or copy the fulfilled EPUB via ADE.

# Quick troubleshooting (common gotchas)

- **“E_ADEPT_xxx” or “E_AUTH” errors:**  
  Deauthorize (Ctrl/Cmd+Shift+D), re-open **Authorize Computer…**, ensure **eBook Vendor = Google**, and use the **app password** if you have 2FA.
- **ADE keeps asking for Adobe ID:**  
  You likely picked the wrong vendor. Re-open the authorization window and switch vendor to **Google**.
- **Book won’t download from .acsm:**  
  Make sure you’re signed into Play Books with the **same Google account** you authorized in ADE.
- **Family Library / different purchaser:**  
  The authorization must match the **purchasing Google account**. Switch if needed.

If you hit an error code, tell me the exact code/message and whether you’re on Windows or Mac—I’ll get you unstuck fast.

**Mike:** I have a kindle reader and want to read it on my kindle device

**GPT:** That’s where things get tricky — Kindle devices **can’t natively read Adobe DRM-protected EPUBs** from Google Play Books.  
Amazon’s Kindle ecosystem uses its **own** DRM format (AZW/KFX) and doesn’t support ADE or Vendor IDs at all.  

So you have **three options**:

---

## **1️⃣ Read it in Google’s apps instead (no conversion)**
- Use the **Google Play Books app** on your phone, tablet, or computer.
- This avoids dealing with DRM entirely, but you won’t be reading it on your Kindle e-ink screen.

---

## **2️⃣ Get a Kindle-compatible version from the source**
- See if Google Play Books offers a **DRM-free PDF** for that title (rare, but sometimes publishers allow it).
- If so, download the PDF and email it to your Kindle’s Send-to-Kindle address.

---

## **3️⃣ Convert it to Kindle format (only works if DRM is removed first)**
> **Important:** Converting a DRM-protected book requires **removing the DRM**, which is not supported by Amazon, Google, or Adobe.  
> It’s legal in some countries for personal use, illegal in others — so check your local laws before proceeding.

The general process people use is:
1. Download the EPUB via ADE using the **Google Vendor ID** steps I gave you.
2. Remove DRM using tools such as **Calibre + DeDRM plugin** (this is the step that may violate DRM laws in your country).
3. Convert the DRM-free EPUB to **MOBI** or **AZW3** in Calibre.
4. Send it to your Kindle via USB or email.

---

💡 If you tell me **whether you’re okay with using Calibre** and **your country’s stance on DRM circumvention**, I can give you a *precise, step-by-step Kindle conversion guide* that starts from your Google Play EPUB and ends with a file your Kindle will open.  

Do you want me to walk you through **that exact Kindle conversion process**?

**Mike:** Yes

**GPT:** Alright — I’ll lay this out step-by-step from the point you download your Google Play Books EPUB to having it open on your Kindle.  

⚠ **Important legal note:** In the U.S. and many countries, bypassing DRM protection may violate copyright laws, even for personal use. In some countries (like Canada, the Netherlands, or parts of the EU) it’s legal for personal backups. **Check your local laws** before continuing.  

---

## **Step-by-Step: Google Play EPUB → Kindle**

### **Step 1 – Install Adobe Digital Editions (ADE) & authorize with Google Vendor ID**
1. Install ADE from: [https://www.adobe.com/solutions/ebook/digital-editions/download.html](https://www.adobe.com/solutions/ebook/digital-editions/download.html)
2. Open ADE → **Help → Erase Authorization** (if already authorized).
3. Go to **Help → Authorize Computer…**
4. In **eBook Vendor**, choose **Google**.
5. **Vendor Login ID:** Your full Google account email (the one you bought the book with).  
   **Vendor Password:**  
   - If you use 2FA → Create an **App Password** at: [https://myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords) → name it "ADE".
   - Use that 16-character password here.
6. Click **Authorize**.

---

### **Step 2 – Download your Google Play Book**
1. Go to [https://play.google.com/books](https://play.google.com/books) → **My Books**.
2. Click the **⋮** (three dots) next to your purchased book → **Download EPUB** → choose **Adobe EPUB**.
3. This gives you a `.acsm` file (the license file).
4. Double-click it → ADE will download the **DRM-protected EPUB** to your PC/Mac (usually in `Documents/My Digital Editions`).

---

### **Step 3 – Install Calibre & DeDRM plugin**
1. Download Calibre: [https://calibre-ebook.com/download](https://calibre-ebook.com/download)
2. Download the **DeDRM tools** ZIP (Google “DeDRM tools GitHub” — it’s maintained by Apprentice Harper).  
3. In Calibre:
   - Go to **Preferences** → **Plugins** → **Load plugin from file**.
   - Select the `DeDRM_plugin.zip` from the tools ZIP.
   - Restart Calibre.
4. In **DeDRM plugin settings**, add your **Adobe Digital Editions key**:  
   - Preferences → Plugins → File type plugins → DeDRM → Customize → eInk Kindle/Adobe Digital Editions → Add your ADE key (usually auto-detected).

---

### **Step 4 – Remove DRM & Convert**
1. In Calibre, **Add books** → select the EPUB from `Documents/My Digital Editions`.
2. Calibre will automatically strip the DRM during import (if the DeDRM plugin is set up right).
3. Select the book → click **Convert books**.
4. In **Output format**, choose **AZW3** (best for modern Kindles) or **MOBI** (for older Kindles).
5. Click **OK** → Calibre creates the Kindle-ready file.

---

### **Step 5 – Send to Kindle**
Option 1 – **USB Cable**
- Connect your Kindle to your computer.
- Copy the `.azw3` or `.mobi` file into the **Documents** folder on the Kindle.

Option 2 – **Email to Kindle**
- Find your Send-to-Kindle email in your Amazon account: [https://www.amazon.com/mysendtokindle](https://www.amazon.com/mysendtokindle)
- Email the converted file to that address.
- In minutes, it appears on your Kindle.

---

### **Quick Troubleshooting**
- If the book imports to Calibre but still won’t open after conversion, it means the **ADE key wasn’t set correctly** in the DeDRM plugin.
- If ADE can’t open the EPUB before conversion, the Vendor ID/password authorization is wrong — repeat **Step 1** carefully.

---

If you want, I can make you a **full illustrated guide with screenshots** so every click is visual — that way, you can follow it exactly without guessing.  
Do you want me to prepare that?
