# 💎 AGENCY MASTER SOP: 3 WHATSAPP CLIENT ONBOARDING SOLUTIONS
> **GTM Technical Systems Studio - Production Client Playbook**  
> *Use this playbook when pitching, onboarding, or deploying 3-second WhatsApp Lead Engines for real estate developers, high-ticket agencies, e-commerce, and SaaS clients.*

---

## 🎯 Executive Overview of the 3 Client Solutions

```
┌─────────────────────────────────────────────────────────────────────────────────────────────┐
│                               3 CLIENT WHATSAPP ARCHITECTURES                               │
├──────────────────────────────┬──────────────────────────────┬───────────────────────────────┤
│ SOLUTION 1: META DIRECT API  │ SOLUTION 2: WATI / AISENSY   │ SOLUTION 3: DEDICATED SALES   │
│ (1-Click Number Migration)   │ (Zero Migration - App Active)│ DESK (Agency Multi-Client)    │
├──────────────────────────────┼──────────────────────────────┼───────────────────────────────┤
│ • Best for: Brand Accounts   │ • Best for: Clients who want │ • Best for: Agencies & High-  │
│ • Migration: 1-Click SMS OTP │   mobile WhatsApp App ACTIVE │   Ticket Sales Teams          │
│ • Monthly Cost: $0 + Meta    │ • Monthly Cost: $20-$40/mo   │ • Monthly Cost: $0 + SIM Card │
│   per-conv cost (1,000 free) │   via WATI/AiSensy plan      │   ($1/mo)                     │
└──────────────────────────────┴──────────────────────────────┴───────────────────────────────┘
```

---

## 💡 SOLUTION 1: Meta Official Direct Cloud API (1-Click Number Migration)

### When to Use:
Use when the client wants their official brand phone number (e.g., `+91 98765 43210`) to serve as the direct Meta WhatsApp Cloud API endpoint without third-party BSP fees.

### Step-by-Step Onboarding Workflow:
1. **Client Backup**: Ask client to perform a 1-click Chat Backup in their WhatsApp Mobile App (`Settings > Account > Chat Backup`).
2. **Meta Business Manager**: Go to `business.facebook.com/settings > Accounts > WhatsApp Accounts > Add`.
3. **Select Migration**: Type Client Display Name (e.g. `Royal Palms Real Estate`) and enter Client Phone Number.
4. **OTP Confirmation**: Click **Migrate Phone Number** ➔ Enter 6-digit SMS OTP received on client's phone.
5. **System User Permanent Token**:
   - Go to `Users > System Users > Add System User` (Admin).
   - Generate New Token ➔ Expiration: **Never**.
   - Permissions: `whatsapp_business_messaging` & `whatsapp_business_management`.
6. **n8n Configuration**:
   - Update WhatsApp Node URL: `https://graph.facebook.com/v21.0/<PHONE_NUMBER_ID>/messages`
   - Update Header: `Authorization: Bearer <PERMANENT_TOKEN>`

---

## 💡 SOLUTION 2: WATI / AiSensy / Interakt Integration (Zero Migration - Mobile App Active)

### When to Use:
Use when the client insists: *"I want my sales manager's phone WhatsApp App to stay logged in while n8n handles auto-replies in the background."*

### Step-by-Step Onboarding Workflow:
1. **Client WATI / AiSensy Account**: Client signs up for a basic WATI or AiSensy account ($20-$30/mo).
2. **API Key Retrieval**: Copy Client's WATI API Endpoint & API Key (`https://live-mt-server.wati.io/api/v1/...`).
3. **n8n Workflow Selection**: Use n8n Blueprint [`06_WATI_AISENSY_INTERAKT_ZERO_MIGRATION_BLUEPRINT.json`](../n8n-blueprints/06_WATI_AISENSY_INTERAKT_ZERO_MIGRATION_BLUEPRINT.json).
4. **Parallel Routing**: Connect WATI Node + Telegram Node + Google Sheets Node in parallel.
5. **Client Result**: Mobile WhatsApp App stays 100% active while n8n auto-replies & logs every lead instantly!

---

## 💡 SOLUTION 3: Dedicated Sales Desk / Agency Portfolio (Recommended for 95% Clients)

### When to Use:
Use when the client wants a dedicated, un-cluttered "Official Sales & AI Desk" phone line (e.g., `+91 98765 00000`) dedicated solely to website lead capture.

### Step-by-Step Onboarding Workflow:
1. **Secondary SIM / Number**: Client or Agency buys a $1/mo secondary SIM card or eSIM.
2. **Meta Setup**: Add the dedicated number under your Meta Business Manager portfolio.
3. **Instant Auto-Reply**: 100% automated 24/7 lead response without mixing personal/casual messages.
4. **Telegram Sound Alert**: Sales team receives instant sound alert in Telegram group with 1-click `[ 📞 Call Buyer Now ]` button (`tel:{{ $json.phone_number }}`).

---

## 🛠️ Verification & Test Protocol (Guaranteed < 3s SLA)

Before handing over to client:
1. Submit test form on client website.
2. Verify **WhatsApp Auto-Reply** delivered in < 1.4s.
3. Verify **Telegram Group Sound Alert** rings in < 1.8s.
4. Verify **Google Sheets Lead Row** appends cleanly in < 2.4s.
5. Confirm zero `#ERROR!` values and 100% parallel execution resiliency!
