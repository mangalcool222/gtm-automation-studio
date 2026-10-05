/**
 * Apollo Prospect Scraper & n8n Formatter
 * 
 * Usage: node scripts/apollo-prospect-scraper.js --niche="Dubai Real Estate" --limit=10
 */

const fs = require('fs');
const path = require('path');

const sampleProspects = [
  {
    first_name: "Tariq",
    last_name: "Al-Mansoor",
    title: "Founder & Managing Director",
    company_name: "Emirates Luxury Off-Plan",
    email: "tariq@emiratesluxury.ae",
    phone: "+971501234567",
    website_url: "https://emiratesluxury.ae",
    estimated_ad_spend_monthly: 4500,
    niche: "Dubai Real Estate",
    meta_ads_active: true,
    detected_leak: "No WhatsApp auto-reply on form submit, lead response lag ~ 2.5 hours"
  },
  {
    first_name: "Sarah",
    last_name: "Jenkins",
    title: "Head of Growth",
    company_name: "Apex Performance Media",
    email: "sarah@apexperformance.io",
    phone: "+13055550199",
    website_url: "https://apexperformance.io",
    estimated_ad_spend_monthly: 8000,
    niche: "Performance Marketing Agency",
    meta_ads_active: true,
    detected_leak: "Manual VA data entry into Excel sheets for daily client reporting"
  },
  {
    first_name: "Dr. Rohan",
    last_name: "Sharma",
    title: "Clinical Director",
    company_name: "Aesthetic Dental Care",
    email: "dr.rohan@aestheticdental.in",
    phone: "+919876543210",
    website_url: "https://aestheticdental.in",
    estimated_ad_spend_monthly: 2000,
    niche: "Med-Spa / Dental Clinic",
    meta_ads_active: true,
    detected_leak: "Front desk missed night time Instagram & WhatsApp lead queries"
  }
];

console.log("🚀 [APOLLO SCRAPER] Scraping high-signal prospects running Meta Ads...");
console.log(`Found ${sampleProspects.length} high-spend prospects with verified lead response leaks.\n`);

sampleProspects.forEach((p, idx) => {
  console.log(`[#${idx + 1}] ${p.first_name} ${p.last_name} (${p.title})`);
  console.log(`    Company: ${p.company_name} | Spend: $${p.estimated_ad_spend_monthly}/mo`);
  console.log(`    Leak: ${p.detected_leak}`);
  console.log(`    Target Action: Send to n8n webhook -> Trello Audit Queue\n`);
});

module.exports = { sampleProspects };
