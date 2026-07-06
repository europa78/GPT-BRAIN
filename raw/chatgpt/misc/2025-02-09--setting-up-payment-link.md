---
title: "Setting Up Payment Link"
date: 2025-02-09
cluster: "Misc / Uncategorized"
messages: 2
source: chatgpt-export conversations.json (FULL transcript)
---

# Setting Up Payment Link

> 2 messages · 2025-02-09 · cluster: Misc / Uncategorized

**Semantic neighbors:** [[Types of Diagrams]] · [[Broward county tax collector clean]] · [[Data Cleaning and Structuring]] · [[ReScale SORA video]]

## Transcript

**Mike:** I want to set up a payment link I can send my customers instead of sending an invoice .  How do I set this up ?

**GPT:** To set up a **payment link** that you can send to your customers instead of an invoice, you can use **DocuSign Payments**. This feature allows you to request payments directly through a DocuSign envelope by integrating with payment processors like Stripe, PayPal, or Authorize.net.

### **Steps to Set Up a Payment Link with DocuSign:**

#### **1. Enable DocuSign Payments**
Before creating a payment link, ensure that **DocuSign Payments** is enabled in your account.

- **Go to DocuSign Admin Panel:**
  1. Log in to your **DocuSign** account.
  2. Click on your profile icon in the top right.
  3. Select **Admin** from the dropdown menu.
  4. Navigate to **Payments** under the Admin settings.

- **Connect a Payment Gateway:**
  5. Click on **"Connect Payment Gateway."**
  6. Choose a provider (**Stripe, PayPal, Authorize.net, Square, etc.**).
  7. Follow the instructions to link your account.

#### **2. Create a Payment Request Template**
Once your payment gateway is connected, you can create a reusable payment request.

- **Create a Payment Template:**
  1. Go to **Templates** in DocuSign.
  2. Click **New Template**.
  3. Name your template (e.g., "Customer Payment Request").
  4. Upload a simple **payment request document** (optional).
  5. Add **Recipient Role** as "Customer."

- **Add a Payment Field:**
  6. Drag and drop the **"Payments" field** from the left panel onto the document.
  7. Set the amount (or allow the customer to enter an amount).
  8. Save the template.

#### **3. Generate and Share a Payment Link**
Now, instead of manually sending an invoice, you can create a **public payment link**.

- **Send a Payment Request:**
  1. Go to **Templates** and select your payment request template.
  2. Click **Use** to generate a new envelope.
  3. Enter the **Customer's Email** and click **Send**.

- **Create a Shareable Link (Alternative Option):**
  - If you want a **self-serve link** customers can access anytime:
    1. Use **PowerForms** (if enabled in your plan).
    2. Convert your **payment template** into a **PowerForm**.
    3. Share the **PowerForm link** via email, website, or social media.

#### **4. Track Payments**
- Once a customer completes the payment, the **status** will update in **DocuSign**.
- You can view **payment history** in the **Payments section**.
- Funds will be processed by your connected payment provider.

---

### **Alternative: Use a Direct Payment Platform**
If you don’t need a signed document, you can use:
- **Stripe Payment Links** (no invoice required).
- **PayPal.me** or **Venmo Business** for quick payments.

Would you like help setting up **PowerForms** for an always-available payment link?
