# 📊 Master Google Sheet CRM Template & Apps Script Guide
> **1-Click Production Template for Automatic Lead Logging**

---

## 📋 Master Google Sheet Column Layout (Row 1 Headers)

Copy and paste these exact column headers into **Row 1** of your client's Google Sheet:

| Column A | Column B | Column C | Column D | Column E | Column F | Column G | Column H | Column I | Column J |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Lead ID** | **Timestamp** | **Prospect Name** | **WhatsApp Phone** | **Email Address** | **Target Project** | **Budget Range** | **WhatsApp Status** | **Sales Rep** | **Lead Status** |

---

## ⚡ 5-Line Free Apps Script Webhook Receiver

If your client does not want to connect Google Drive OAuth in n8n, use this 5-line free Apps Script inside Google Sheets (**Extensions ➔ Apps Script**):

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  
  sheet.appendRow([
    data.lead_id || "LEAD-" + Math.floor(1000 + Math.random() * 9000),
    new Date().toLocaleString(),
    data.full_name || "",
    data.phone_number || "",
    data.email || "",
    data.target_project || "",
    data.budget || "",
    "DELIVERED (< 2.4s)",
    "Unassigned",
    "NEW LEAD"
  ]);
  
  return ContentService.createTextOutput(JSON.stringify({"result": "success"})).setMimeType(ContentService.MimeType.JSON);
}
```

### Setup Instructions:
1. Open Google Sheet ➔ Click **Extensions** ➔ **Apps Script**.
2. Paste the code above ➔ Click **Deploy** ➔ **New Deployment**.
3. Select type **Web App** ➔ Execute as: `Me` ➔ Who has access: `Anyone`.
4. Copy the Webhook URL and paste it into n8n Google Sheet Node!
