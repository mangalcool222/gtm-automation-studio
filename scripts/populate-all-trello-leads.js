const https = require('https');

const apiKey = "73bfc4ead3175d738d3c8ab2c03220b9";
const token = "ATTA35032be2ecb2dc5ca13e160bd78c1c57611ffa7d39c0aa8d32907cdff56df2bdA8C04EEC";
const boardId = "6ac49f38ef97edc338707340";
const scrapedListId = "6ac49f39e638eb6bfa8111bd"; // List 1: Scraped Prospects
const auditListId = "6ac49f3a9e1ae95b75c1396b";   // List 2: Audit & Loom Needed

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

const allLeads = [
  // Global Leads (US / Dubai)
  {
    listId: auditListId,
    name: "🔥 [GLOBAL OUTBOUND] Tariq Al-Mansoor - Emirates Luxury Off-Plan",
    marketTag: "GLOBAL",
    desc: "👤 Name: Tariq Al-Mansoor (MD & Founder)\n🏢 Company: Emirates Luxury Off-Plan\n📍 Location: Dubai, UAE\n🌍 Strategy: 🇺🇸 🇦🇪 Global Outbound Engine\n💰 Ad Spend: $4,500/mo (₹3,78,000/mo)\n📧 Email: tariq@emiratesluxury.ae\n📞 Phone: +971 50 123 4567\n🌐 Website: https://emiratesluxury.ae\n💼 LinkedIn: https://linkedin.com/in/tariq-al-mansoor-dubai\n📸 Instagram: https://instagram.com/emiratesluxury.offplan\n\n🚨 IDENTIFIED PROCESS LEAK:\nForm submission on Meta Ad lacks instant WhatsApp auto-reply brochure. Response lag ~ 2.5 hours.\n\n🎥 PITCH ANGLE (LOOM SCRIPT):\nHey Tariq, clicked your Dubai off-plan ad today. Your landing page form doesn't trigger an instant AI WhatsApp brochure. You're likely losing 35% of those expensive clicks to delayed follow-ups. Made a 60s video showing how it works."
  },
  {
    listId: auditListId,
    name: "🔥 [GLOBAL OUTBOUND] Julian Thorne - Miami Waterfront Estates",
    marketTag: "GLOBAL",
    desc: "👤 Name: Julian Thorne (Principal Broker)\n🏢 Company: Miami Waterfront Estates\n📍 Location: Miami, FL (US)\n🌍 Strategy: 🇺🇸 🇦🇪 Global Outbound Engine\n💰 Ad Spend: $6,500/mo (₹5,46,000/mo)\n📧 Email: julian@miamiwaterfront.com\n📞 Phone: +1 (305) 555-0188\n🌐 Website: https://miamiwaterfront.com\n💼 LinkedIn: https://linkedin.com/in/julian-thorne-miami-realtor\n📸 Instagram: https://instagram.com/miami.waterfront.estates\n\n🚨 IDENTIFIED PROCESS LEAK:\nNo instant SMS/WhatsApp calendar booking trigger; 40%+ drop-off lag.\n\n🎥 PITCH ANGLE (LOOM SCRIPT):\nHey Julian, noticed your Meta ad for Miami Waterfront. Leads wait 2+ hours in Google Sheets before broker outreach. My Next.js/n8n system qualifies leads via AI and sends instant SMS/Telegram alerts in 3 seconds."
  },
  {
    listId: auditListId,
    name: "🔥 [GLOBAL OUTBOUND] Sarah Jenkins - Apex Performance Media",
    marketTag: "GLOBAL",
    desc: "👤 Name: Sarah Jenkins (CEO & Founder)\n🏢 Company: Apex Performance Media\n📍 Location: Miami, FL (US)\n🌍 Strategy: 🇺🇸 🇦🇪 Global Outbound Engine\n💰 Ad Spend: $12,000/mo (₹10,08,000/mo)\n📧 Email: sarah@apexperformance.io\n📞 Phone: +1 (305) 555-0199\n🌐 Website: https://apexperformance.io\n💼 LinkedIn: https://linkedin.com/in/sarah-jenkins-growth\n📸 Instagram: https://instagram.com/apexperformance.agency\n\n🚨 IDENTIFIED PROCESS LEAK:\nHiring manual VAs for lead entry into Excel spreadsheets for daily client reports.\n\n🎥 PITCH ANGLE (LOOM SCRIPT):\nHey Sarah, saw your job posting for Data Entry VAs. You are spending thousands manually copying lead data into client spreadsheets. I built a white-label Next.js + Supabase dashboard that updates leads live."
  },

  // Indian Market Leads (Tier 1 & Tier 2 Cities)
  {
    listId: scrapedListId,
    name: "🇮🇳 [INDIAN SNIPER] Vikramaditya Singh - Delhi Premium Off-Plan",
    marketTag: "INDIA",
    desc: "👤 Name: Vikramaditya Singh (Managing Partner)\n🏢 Company: Delhi Premium Off-Plan & Penthouses\n📍 Location: Delhi NCR, India\n🌍 Strategy: 🇮🇳 Indian Sniper Approach (Call / WhatsApp)\n💰 Ad Spend: $3,000/mo (₹2,50,000/mo)\n📧 Email: vikram@delhipremiumhomes.in\n📞 Phone: +91 98110 99887\n💬 WhatsApp Direct: https://wa.me/919811099887\n🌐 Website: https://delhipremiumhomes.in\n💼 LinkedIn: https://linkedin.com/in/vikramaditya-singh-delhi-realestate\n📸 Instagram: https://instagram.com/delhipremiumhomes\n\n🚨 IDENTIFIED PROCESS LEAK:\nInstagram Lead form submitted but no auto WhatsApp brochure received.\n\n📱 PITCH ANGLE (WHATSAPP/CALL):\nSir, main aapka ad dekh raha tha Instagram par. Maine form bhara par aapki side se turant koi auto WhatsApp reply nahi aaya. Aap ad par paise laga rahe ho, par leads thandi ho rahi hain. Main 15 minute mein demo dikhaun ki form bharte hi lead ko WhatsApp brochure kaise chala jayega?"
  },
  {
    listId: scrapedListId,
    name: "🇮🇳 [INDIAN SNIPER] Rohan Verma - ScaleUp LeadGen Agency",
    marketTag: "INDIA",
    desc: "👤 Name: Rohan Verma (Founder & MD)\n🏢 Company: ScaleUp LeadGen Agency\n📍 Location: Bangalore, India\n🌍 Strategy: 🇮🇳 Indian Sniper Approach (Call / WhatsApp)\n💰 Ad Spend: $2,500/mo (₹2,10,000/mo)\n📧 Email: rohan@scaleupagency.in\n📞 Phone: +91 98200 44332\n💬 WhatsApp Direct: https://wa.me/919820044332\n🌐 Website: https://scaleupagency.in\n💼 LinkedIn: https://linkedin.com/in/rohan-verma-leadgen\n📸 Instagram: https://instagram.com/scaleupagency.in\n\n🚨 IDENTIFIED PROCESS LEAK:\nClients complain daily about delayed Excel lead reports.\n\n📱 PITCH ANGLE (WHATSAPP/CALL):\nRohan bhai, aapke clients daily lead reports maangte hain aur aapke VAs Excel mein entry kar rahe hain. Maine ek white-label client portal template banaya hai jisse aapke clients live leads phone par dekh sakein. 15 min ka demo dikhaun?"
  },
  {
    listId: scrapedListId,
    name: "🇮🇳 [INDIAN SNIPER] Dr. Rohan Sharma - Aesthetic Dental Care",
    marketTag: "INDIA",
    desc: "👤 Name: Dr. Rohan Sharma (Clinical Director)\n🏢 Company: Aesthetic Dental & Implant Care\n📍 Location: Delhi NCR, India\n🌍 Strategy: 🇮🇳 Indian Sniper Approach (Call / WhatsApp)\n💰 Ad Spend: $2,000/mo (₹1,68,000/mo)\n📧 Email: dr.rohan@aestheticdental.in\n📞 Phone: +91 98765 43210\n💬 WhatsApp Direct: https://wa.me/919876543210\n🌐 Website: https://aestheticdental.in\n💼 LinkedIn: https://linkedin.com/in/dr-rohan-sharma-aesthetic-dentist\n📸 Instagram: https://instagram.com/aestheticdental.delhi\n\n🚨 IDENTIFIED PROCESS LEAK:\nFront desk busy during peak hours; night time WhatsApp queries missed.\n\n📱 PITCH ANGLE (WHATSAPP/CALL):\nDoctor sahab, maine aapka Instagram ad dekha. Raat mein aane wali WhatsApp queries aur Sunday leads drop ho rahi hain kyunki front desk band hota hai. Main ek 24/7 AI booking bot laga sakta hoon jo automatically appointment book kar dega. Demo dikhaun?"
  },
  {
    listId: scrapedListId,
    name: "🇮🇳 [INDIAN SNIPER] Karan Mehta - TradePro Trader Accelerator",
    marketTag: "INDIA",
    desc: "👤 Name: Karan Mehta (Head Educator)\n🏢 Company: TradePro Trader Accelerator\n📍 Location: Mumbai, India\n🌍 Strategy: 🇮🇳 Indian Sniper Approach (Call / WhatsApp)\n💰 Ad Spend: $3,500/mo (₹2,94,000/mo)\n📧 Email: karan@tradeproacademy.in\n📞 Phone: +91 99887 76655\n💬 WhatsApp Direct: https://wa.me/919988776655\n🌐 Website: https://tradeproacademy.in\n💼 LinkedIn: https://linkedin.com/in/karan-mehta-tradepro\n📸 Instagram: https://instagram.com/karanmehta.tradepro\n\n🚨 IDENTIFIED PROCESS LEAK:\nRazorpay payment confirmation & Discord/WhatsApp group access managed manually.\n\n📱 PITCH ANGLE (WHATSAPP/CALL):\nKaran bhai, aapka Razorpay payment confirmation aur WhatsApp group invite manual ho raha hai. Maine Razorpay ➔ n8n ➔ WhatsApp Auto-Invoice + VIP Discord Invite ka engine banaya hai. 10 min mein set up karke dikhaun?"
  },
  {
    listId: scrapedListId,
    name: "🇮🇳 [INDIAN SNIPER] Rajesh Agarwal - Agarwal Luxury Interiors",
    marketTag: "INDIA",
    desc: "👤 Name: Rajesh Agarwal (Owner & Designer)\n🏢 Company: Agarwal Luxury Interiors\n📍 Location: Jamshedpur / Dhanbad, India\n🌍 Strategy: 🇮🇳 Indian Sniper Approach (Call / WhatsApp)\n💰 Ad Spend: $1,800/mo (₹1,50,000/mo)\n📧 Email: rajesh@agarwalinteriors.in\n📞 Phone: +91 94311 22334\n💬 WhatsApp Direct: https://wa.me/919431122334\n🌐 Website: https://agarwalinteriors.in\n💼 LinkedIn: https://linkedin.com/in/rajesh-agarwal-interiors\n📸 Instagram: https://instagram.com/agarwalinteriors.jamshedpur\n\n🚨 IDENTIFIED PROCESS LEAK:\nForm submitted on Meta Ad but no instant catalog PDF on WhatsApp.\n\n📱 PITCH ANGLE (WHATSAPP/CALL):\nAgarwal Sir, Jamshedpur mein aapka interior ad chal raha hai. Maine form bhara par turant WhatsApp par portfolio nahi aaya. Main aapke system mein ek automation laga dunga jisse form bharte hi client ko aapka 3D Design Catalog WhatsApp par chala jaye. Call par 10 min demo dikhaun?"
  }
];

async function setupTrelloBoard() {
  try {
    console.log("🎨 Step 1: Creating Trello Color-Coded Labels...");

    // Create Labels on Board
    const globalLabel = await makeRequest({
      hostname: 'api.trello.com',
      path: `/1/boards/${boardId}/labels?name=${encodeURIComponent('🇺🇸 🇦🇪 Global Outbound (Loom)')}&color=purple&key=${apiKey}&token=${token}`,
      method: 'POST'
    });

    const indiaLabel = await makeRequest({
      hostname: 'api.trello.com',
      path: `/1/boards/${boardId}/labels?name=${encodeURIComponent('🇮🇳 Indian Sniper (WhatsApp/Call)')}&color=green&key=${apiKey}&token=${token}`,
      method: 'POST'
    });

    console.log(`   Label Created: Global Outbound (ID: ${globalLabel.id})`);
    console.log(`   Label Created: Indian Sniper (ID: ${indiaLabel.id})\n`);

    console.log("📌 Step 2: Populating ALL 8 GTM Prospects into Trello Board...");

    for (const lead of allLeads) {
      const labelId = lead.marketTag === 'GLOBAL' ? globalLabel.id : indiaLabel.id;
      const path = `/1/cards?idList=${lead.listId}&name=${encodeURIComponent(lead.name)}&desc=${encodeURIComponent(lead.desc)}&idLabels=${labelId}&key=${apiKey}&token=${token}`;
      
      const card = await makeRequest({
        hostname: 'api.trello.com',
        path: path,
        method: 'POST'
      });
      console.log(`   ✅ Inserted Card: "${card.name}" [Label: ${lead.marketTag}]`);
    }

    console.log("\n🎉 SUCCESS! ALL 8 PROSPECT CARDS POPULATED WITH LABELS!");
    console.log(`👉 Check Trello Board: https://trello.com/b/ce7to7Mk/gtm-prospect-pipeline`);

  } catch (err) {
    console.error("❌ Error setting up board:", err);
  }
}

setupTrelloBoard();
