# GTM Technical Systems Studio & Lead Automation Engine

A practical, modular technical systems stack designed for solo technical partners and automation studios. This repository contains end-to-end workflows, client demo assets, and automation blueprints to fix backend lead response latency for paid ad campaigns (Meta Ads / Google Ads).

---

## 🎯 Problem Statement & Core Value

Most boutique real estate agencies, performance marketing firms, and service clinics spend thousands of dollars on paid advertising, but lose **30%–40% of inbound leads** due to slow manual follow-ups (leads sitting in Google Sheets for hours).

This system provides:
1. **Under 3-Second Lead Routing**: Meta Ad Webhook ➔ Instant WhatsApp Brochure API + Telegram Broker Push Alert + Supabase Sync.
2. **Outbound Prospecting Pipeline**: High-signal Apollo/Apify scraper logic combined with a structured 6-column Trello CRM board.
3. **Client Demo & White-Label Portal**: A React/Next.js interface showcasing a live 3-second lead simulator, dual-currency ROAS leak calculator ($ & ₹), and a white-label lead stream dashboard for clients.

---

## 🗂️ Repository Layout

```text
gtm-automation-studio/
├── n8n-blueprints/                  # Production-ready n8n workflow JSON files
│   ├── 01-internal-apollo-trello-outreach.json
│   ├── 02-realestate-whatsapp-telegram-bot.json
│   ├── 03-agency-white-label-lead-routing.json
│   ├── 04-creator-razorpay-onboarding.json
│   └── README.md
│
├── trello-setup/                    # Trello CRM pipeline configuration
│   ├── board-template.json
│   └── trello-setup-guide.md
│
├── scripts/                         # CLI utility scripts
│   ├── apollo-prospect-scraper.js
│   ├── simulate-lead-trigger.js
│   └── generate-loom-pitch-script.js
│
└── web-app/                         # React + Vite + Tailwind CSS Studio & Client Portal
    ├── src/
    │   ├── components/
    │   │   ├── LiveLeadFinder.jsx       # Prospect finder with dual currency ($ & ₹) and social links
    │   │   ├── LiveLeadSimulator.jsx    # Real-time 3s WhatsApp & Telegram trigger test
    │   │   ├── ClientLeadDashboard.jsx  # White-label client lead stream portal
    │   │   ├── RoasCalculator.jsx       # ROAS revenue leak & ROI math calculator
    │   │   ├── BlueprintExporter.jsx    # 1-click n8n blueprint exporter
    │   │   ├── LoomPitchGenerator.jsx   # 90s video teardown script generator
    │   │   └── TrelloApolloSetupGuide.jsx
    │   ├── App.jsx
    │   └── index.css
    ├── Dockerfile                   # Multi-stage Docker build for Coolify / production
    └── nginx.conf                   # Production SPA routing configuration
```

---

## ⚙️ Included n8n Workflows

| Blueprint File | Target Niche | Key Triggers & Actions |
| :--- | :--- | :--- |
| `01-internal-apollo-trello-outreach.json` | Internal Outbound | Ingest prospects ➔ Filter ad spend & titles ➔ Create Trello Card ➔ Smartlead Cold Email |
| `02-realestate-whatsapp-telegram-bot.json` | Boutique Real Estate | Meta Ad Webhook ➔ Instant WhatsApp Brochure (<3s) ➔ Telegram Broker Group Alert ➔ Supabase Log |
| `03-agency-white-label-lead-routing.json` | Performance Marketing | Inbound Webhook ➔ GPT-4o AI Quality Scoring (1-100) ➔ Priority Notification Branch |
| `04-creator-razorpay-onboarding.json` | Finfluencers / Creators | Razorpay Payment Webhook ➔ Instant WhatsApp Invoice + VIP Access Link |

---

## 🚀 Local Development Setup

### Web App (React + Vite)

```bash
cd web-app
npm install
npm run dev
```

The web app will run locally at `http://localhost:5173/`.

### CLI Benchmark Script

To simulate an inbound lead payload and measure pipeline latency:

```bash
node scripts/simulate-lead-trigger.js
```

---

## 🐳 Deployment (Coolify / Docker)

The `web-app/` directory includes a multi-stage `Dockerfile` and `nginx.conf` ready for static deployment on **Coolify**, **Railway**, **Render**, or any Docker host.

### Build & Run locally with Docker:

```bash
cd web-app
docker build -t gtm-studio .
docker run -p 80:80 gtm-studio
```

### Deploy on Coolify:
1. Connect repository `mangalcool222/gtm-automation-studio` to Coolify.
2. Set **Base Directory** to `web-app`.
3. Select **Docker (Dockerfile)** as the buildpack.
4. Click **Deploy**.

---

## 📜 License

MIT License. Free for commercial and agency use.
