const https = require('https');
const fs = require('fs');
const path = require('path');

// Auto-load .env if present
const envPath = path.resolve(__dirname, '../.env');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf-8');
  envContent.split('\n').forEach(line => {
    const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
    if (match) {
      const key = match[1];
      let value = match[2] || '';
      if (value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1);
      if (value.startsWith("'") && value.endsWith("'")) value = value.slice(1, -1);
      if (!process.env[key]) process.env[key] = value.trim();
    }
  });
}

const apiKey = process.env.TRELLO_API_KEY;
const token = process.env.TRELLO_TOKEN;

if (!apiKey || !token) {
  console.error("❌ ERROR: Missing TRELLO_API_KEY or TRELLO_TOKEN environment variables.");
  console.error("👉 Please set them in your .env file or export them before running.");
  process.exit(1);
}

const scrapedListId = "6ac49f39e638eb6bfa8111bd"; // List 1
const auditListId = "6ac49f3a9e1ae95b75c1396b";   // List 2

const initialCards = [
  {
    listId: auditListId,
    name: "🔥 [AUDIT NEEDED] Tariq Al-Mansoor - Emirates Luxury Off-Plan",
    desc: "👤 Name: Tariq Al-Mansoor\n🏢 Company: Emirates Luxury Off-Plan\n📍 Location: Dubai, UAE\n💰 Monthly Ad Spend: $4,500/mo (₹3,78,000/mo)\n📧 Email: tariq@emiratesluxury.ae\n📞 Phone: +971 50 123 4567\n🌐 Website: https://emiratesluxury.ae\n\n🚨 IDENTIFIED REVENUE LEAK:\nForm submission on Meta Ad lacks instant WhatsApp auto-reply brochure. Response lag ~ 2.5 hours.\n\n🎯 ACTION ITEM:\nRecord 90-second Loom teardown video using script from GTM Studio App."
  },
  {
    listId: auditListId,
    name: "🔥 [AUDIT NEEDED] Sarah Jenkins - Apex Performance Media",
    desc: "👤 Name: Sarah Jenkins (CEO)\n🏢 Company: Apex Performance Media\n📍 Location: Miami, FL (US)\n💰 Monthly Ad Spend: $12,000/mo (₹10,08,000/mo)\n📧 Email: sarah@apexperformance.io\n📞 Phone: +1 (305) 555-0199\n🌐 Website: https://apexperformance.io\n\n🚨 IDENTIFIED REVENUE LEAK:\nHiring manual VAs for client lead entry into Excel spreadsheets.\n\n🎯 ACTION ITEM:\nSend 60s Loom pitch showing White-Label Next.js Client Portal."
  },
  {
    listId: scrapedListId,
    name: "Vikramaditya Singh - Delhi Premium Off-Plan",
    desc: "👤 Name: Vikramaditya Singh\n🏢 Company: Delhi Premium Off-Plan & Penthouses\n📍 Location: Delhi NCR, India\n💰 Monthly Ad Spend: $3,000/mo (₹2,50,000/mo)\n📧 Email: vikram@delhipremiumhomes.in\n📞 Phone: +91 98110 99887\n\n🚨 IDENTIFIED REVENUE LEAK:\nInstagram lead form submitted; no auto WhatsApp brochure received."
  },
  {
    listId: scrapedListId,
    name: "Rajesh Agarwal - Agarwal Luxury Interiors",
    desc: "👤 Name: Rajesh Agarwal\n🏢 Company: Agarwal Luxury Interiors\n📍 Location: Jamshedpur / Dhanbad, India\n💰 Monthly Ad Spend: $1,800/mo (₹1,50,000/mo)\n📧 Email: rajesh@agarwalinteriors.in\n📞 Phone: +91 94311 22334\n\n🚨 IDENTIFIED REVENUE LEAK:\nAd running on Instagram but no 3D Design Catalog PDF auto-delivered on WhatsApp."
  }
];

function makeRequest(options, postData = null) {
  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          resolve(data);
        }
      });
    });
    req.on('error', reject);
    if (postData) req.write(postData);
    req.end();
  });
}

async function populateCards() {
  console.log("📌 Populating initial prospect cards into Trello Board...");
  for (const cardData of initialCards) {
    const path = `/1/cards?idList=${cardData.listId}&name=${encodeURIComponent(cardData.name)}&desc=${encodeURIComponent(cardData.desc)}&key=${apiKey}&token=${token}`;
    const card = await makeRequest({
      hostname: 'api.trello.com',
      path: path,
      method: 'POST'
    });
    console.log(`   ✅ Created Trello Card: "${card.name}" (ID: ${card.id})`);
  }
  console.log("🎉 All initial cards created in Trello!");
}

populateCards();
