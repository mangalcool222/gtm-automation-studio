# 📋 Trello Setup Guide for GTM Technical Studio

This guide explains how to configure your Trello CRM pipeline to work seamlessly with n8n and Apollo.io.

## 📌 Board Structure (The 6 Pipeline Columns)

1. **`1. Scraped Prospects (Apollo/Apify)`**: Raw inbound leads automatically inserted by n8n when Apollo extracts high ad-spend prospects.
2. **`2. Audit & Loom Needed`**: Filtered top 5 leads per day that need a 90-second Loom teardown.
3. **`3. 90-Sec Loom Sent`**: Prospects to whom you sent the email/LinkedIn DM with the 90s video.
4. **`4. Discovery Call Scheduled`**: High-intent prospects who booked a 15-minute diagnostic call.
5. **`5. Proposal / Staging Demo Live`**: Demo stage where you showcase the Next.js live staging portal.
6. **`6. 🎉 CLOSED WON`**: Retainer/Project closed ($1,500 - $3,000 / ₹75k - ₹1.5L).

## ⚡ Butler Automation Rules (Zero-Code Rules in Trello)

- **Rule 1**: When a card is moved to `Audit & Loom Needed`, add red label `Urgent Leak` and set due date to 24 hours from now.
- **Rule 2**: When `Loom Link` custom field is filled, automatically move card to `3. 90-Sec Loom Sent` and trigger Smartlead Webhook.

## 🔗 n8n Integration Webhook Endpoint

- **Webhook URL**: `https://your-n8n.com/webhook/apollo-lead-webhook`
- **Payload Schema**:
  ```json
  {
    "first_name": "John",
    "last_name": "Doe",
    "email": "john@dubairealty.ae",
    "company_name": "Dubai Premier Properties",
    "website_url": "https://dubairealty.ae",
    "estimated_ad_spend_monthly": 3500,
    "niche": "Dubai Real Estate"
  }
  ```
