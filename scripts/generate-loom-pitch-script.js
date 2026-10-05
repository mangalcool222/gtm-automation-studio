/**
 * 90-Second Loom Teardown Pitch Generator
 * 
 * Usage: node scripts/generate-loom-pitch-script.js "Emirates Luxury Off-Plan" "Dubai Real Estate"
 */

const companyName = process.argv[2] || "[Company Name]";
const niche = process.argv[3] || "[Niche]";

const script = `
====================================================================
🎥 90-SECOND LOOM TEARDOWN SCRIPT FOR: ${companyName} (${niche})
====================================================================

[0:00 - 0:20] THE HOOK (Screen showing their Meta Ad & Landing Page)
"Hey [Founder Name], I was browsing Meta Ads today and came across your high-converting ad for ${companyName}. The ad creative is fantastic, but when I filled out your form, I noticed incoming leads go into a standard queue without an instant AI WhatsApp trigger or dynamic calendar booking."

[0:20 - 0:45] THE LEAK & FINANCIAL IMPACT (Screen showing timing comparison)
"In ${niche}, over 35% of high-intent buyers cold out if they don't get an immediate response within 3 minutes. Every minute of delay costs you roughly $300 in wasted ad spend."

[0:45 - 1:15] THE SOLUTION DEMO (Screen showing your live n8n workflow node diagram)
"Here is the Next.js + n8n pipeline I built. As soon as a buyer submits your form, 3 things happen in under 3 seconds:
 1. WhatsApp API delivers your digital brochure directly to their phone.
 2. GPT-4o qualifies their budget tier.
 3. Your sales team gets an instant push alert on Telegram with a 1-click call button."

[1:15 - 1:30] THE CALL TO ACTION
"I've built a live staging demo of this workflow. If you'd like to see how we can plug this into your CRM in 48 hours without changing your current setup, reply to this email or grab 15 minutes on my calendar. Talk soon!"
====================================================================
`;

console.log(script);
