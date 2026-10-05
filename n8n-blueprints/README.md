# 🚀 n8n Production Workflow Blueprints

This directory contains production-ready JSON blueprints for your **Technical Systems Studio & Automation Agency**.

## 📦 Available Blueprints

1. **`01-internal-apollo-trello-outreach.json`**:
   - **Purpose**: Your internal lead prospecting engine.
   - **Flow**: Webhook Ingest ➔ Ad Spend Filter ➔ Trello Card (`Audit Needed`) ➔ Smartlead Cold Email Trigger ➔ Telegram Alert.
   
2. **`02-realestate-whatsapp-telegram-bot.json`**:
   - **Purpose**: High-ticket Real Estate lead routing under 3 seconds.
   - **Flow**: Meta Ads Webhook ➔ Data Normalization ➔ WhatsApp Auto-Brochure (< 3s) ➔ Telegram Broker Group ➔ Supabase Log.

3. **`03-agency-white-label-lead-routing.json`**:
   - **Purpose**: Performance Marketing Agency White-Label lead scoring & qualification.
   - **Flow**: Webhook Ingest ➔ GPT-4o AI Scoring (1-100) ➔ Hot/Warm Routing ➔ Priority Telegram Notification.

4. **`04-creator-razorpay-onboarding.json`**:
   - **Purpose**: Finfluencer & Course Creator instant payment onboarding.
   - **Flow**: Razorpay Webhook ➔ Auto WhatsApp Invoice + Discord Invite Link.

## 🛠️ How to Import into n8n

1. Open your n8n dashboard (`https://your-n8n-instance.com` or local `http://localhost:5678`).
2. Click **Workflows** ➔ **Add Workflow**.
3. Click the **⋮ (Menu)** in the top right ➔ Select **Import from File**.
4. Select any `.json` file from this folder.
5. Replace placeholder API keys (`YOUR_SMARTLEAD_API_KEY`, WhatsApp Token, Telegram Bot Token) in credentials.
6. Click **Activate Workflow**.

---
*Created by Antigravity AI Technical Systems Studio*
