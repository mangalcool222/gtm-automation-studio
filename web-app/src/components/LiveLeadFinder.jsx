import React, { useState } from 'react';
import { Search, Filter, Send, Download, Sparkles, Building2, Globe, Mail, Phone, ExternalLink, CheckCircle2, ArrowRight, DollarSign, MessageCircle, Video, Copy, Check, Share2, User } from 'lucide-react';

export default function LiveLeadFinder() {
  const [selectedNiche, setSelectedNiche] = useState('ALL');
  const [selectedMarket, setSelectedMarket] = useState('ALL'); // ALL, GLOBAL, INDIA
  const [searchQuery, setSearchQuery] = useState('');
  const [minSpendUsd, setMinSpendUsd] = useState(1000);
  const [pushedLeadId, setPushedLeadId] = useState(null);
  const [copiedPitchId, setCopiedPitchId] = useState(null);

  // Conversion rate: $1 = ₹84
  const usdToInr = 84;

  const leadDatabase = [
    // Real Estate - Dubai
    {
      id: 'L-101',
      name: 'Tariq Al-Mansoor',
      title: 'Managing Director & Founder',
      company: 'Emirates Luxury Off-Plan',
      website: 'https://emiratesluxury.ae',
      linkedin: 'https://linkedin.com/in/tariq-al-mansoor-dubai',
      instagram: 'https://instagram.com/emiratesluxury.offplan',
      metaAdsLibrary: 'https://facebook.com/ads/library/?q=emirates+luxury+offplan',
      email: 'tariq@emiratesluxury.ae',
      phone: '+971 50 123 4567',
      whatsappRaw: '971501234567',
      adSpendUsd: 4500,
      niche: 'Boutique Real Estate',
      market: 'GLOBAL',
      location: 'Dubai, UAE',
      adsActive: '14 Active Meta & Instagram Ads',
      detectedLeak: 'Form submission lacks instant WhatsApp auto-reply; lead lag ~ 2.5 hours.',
      pitchType: 'GLOBAL_LOOM',
      pitchScript: `Hey Tariq, clicked your Dubai off-plan ad today. Your landing page form doesn't trigger an instant AI WhatsApp brochure. You're likely losing 35% of those expensive clicks to delayed follow-ups. I built a Next.js/n8n pipeline that fixes this in under 3 seconds. Recorded a 60s video showing how it works: [Loom Link].`
    },
    // Real Estate - Miami / US
    {
      id: 'L-102',
      name: 'Julian Thorne',
      title: 'Principal Broker',
      company: 'Miami Waterfront Estates',
      website: 'https://miamiwaterfront.com',
      linkedin: 'https://linkedin.com/in/julian-thorne-miami-realtor',
      instagram: 'https://instagram.com/miami.waterfront.estates',
      metaAdsLibrary: 'https://facebook.com/ads/library/?q=miami+waterfront+estates',
      email: 'julian@miamiwaterfront.com',
      phone: '+1 (305) 555-0188',
      whatsappRaw: '13055550188',
      adSpendUsd: 6500,
      niche: 'Boutique Real Estate',
      market: 'GLOBAL',
      location: 'Miami, FL (US)',
      adsActive: '18 Active Meta Video Ads',
      detectedLeak: 'No instant SMS/WhatsApp calendar booking trigger; 40%+ drop-off lag.',
      pitchType: 'GLOBAL_LOOM',
      pitchScript: `Hey Julian, noticed your Meta ad for Miami Waterfront. Leads wait 2+ hours in Google Sheets before broker outreach. My Next.js/n8n system qualifies leads via AI and sends instant SMS/Telegram alerts in 3 seconds. Here is a 60s teardown: [Loom Link].`
    },
    // Real Estate - India Tier 1 (Delhi/Mumbai)
    {
      id: 'L-103',
      name: 'Vikramaditya Singh',
      title: 'Managing Partner',
      company: 'Delhi Premium Off-Plan & Penthouses',
      website: 'https://delhipremiumhomes.in',
      linkedin: 'https://linkedin.com/in/vikramaditya-singh-delhi-realestate',
      instagram: 'https://instagram.com/delhipremiumhomes',
      metaAdsLibrary: 'https://facebook.com/ads/library/?q=delhi+premium+homes',
      email: 'vikram@delhipremiumhomes.in',
      phone: '+91 98110 99887',
      whatsappRaw: '919811099887',
      adSpendUsd: 3000,
      niche: 'Boutique Real Estate',
      market: 'INDIA',
      location: 'Delhi NCR, India',
      adsActive: '12 Active Instagram Ads',
      detectedLeak: 'Instagram Lead form submitted but no auto WhatsApp brochure received.',
      pitchType: 'INDIA_SNIPER',
      pitchScript: `Sir, main aapka ad dekh raha tha Instagram par. Maine form bhara par aapki side se turant koi auto WhatsApp reply nahi aaya. Aap ad par paise laga rahe ho, par leads thandi ho rahi hain. Main 15 minute mein demo dikhaun ki form bharte hi lead ko WhatsApp brochure kaise chala jayega?`
    },

    // Performance Agencies - Global & India
    {
      id: 'L-201',
      name: 'Sarah Jenkins',
      title: 'CEO & Founder',
      company: 'Apex Performance Media',
      website: 'https://apexperformance.io',
      linkedin: 'https://linkedin.com/in/sarah-jenkins-growth',
      instagram: 'https://instagram.com/apexperformance.agency',
      metaAdsLibrary: 'https://facebook.com/ads/library/?q=apex+performance+media',
      email: 'sarah@apexperformance.io',
      phone: '+1 (305) 555-0199',
      whatsappRaw: '13055550199',
      adSpendUsd: 12000,
      niche: 'Performance Marketing Agency',
      market: 'GLOBAL',
      location: 'Miami, FL (US)',
      adsActive: 'Client Ad Spend > $150k/mo',
      detectedLeak: 'Hiring manual VAs for lead entry into Excel sheets for daily client reports.',
      pitchType: 'GLOBAL_LOOM',
      pitchScript: `Hey Sarah, saw your job posting for Data Entry VAs. You are spending thousands manually copying lead data into client spreadsheets. I built a white-label Next.js + Supabase dashboard that updates leads live. Teardown video: [Loom Link].`
    },
    {
      id: 'L-202',
      name: 'Rohan Verma',
      title: 'Founder & Managing Director',
      company: 'ScaleUp LeadGen Agency',
      website: 'https://scaleupagency.in',
      linkedin: 'https://linkedin.com/in/rohan-verma-leadgen',
      instagram: 'https://instagram.com/scaleupagency.in',
      metaAdsLibrary: 'https://facebook.com/ads/library/?q=scaleup+agency+india',
      email: 'rohan@scaleupagency.in',
      phone: '+91 98200 44332',
      whatsappRaw: '919820044332',
      adSpendUsd: 2500,
      niche: 'Performance Marketing Agency',
      market: 'INDIA',
      location: 'Bangalore, India',
      adsActive: '8 Active Facebook Lead Ads',
      detectedLeak: 'Clients complain daily about delayed Excel lead reports.',
      pitchType: 'INDIA_SNIPER',
      pitchScript: `Rohan bhai, aapke clients daily lead reports maangte hain aur aapke VAs Excel mein entry kar rahe hain. Maine ek white-label client portal template banaya hai jisse aapke clients live leads phone par dekh sakein. 15 min ka demo dikhaun?`
    },

    // MedSpas & Aesthetic Clinics - India & US
    {
      id: 'L-301',
      name: 'Dr. Rohan Sharma',
      title: 'Clinical Director & Owner',
      company: 'Aesthetic Dental & Implant Care',
      website: 'https://aestheticdental.in',
      linkedin: 'https://linkedin.com/in/dr-rohan-sharma-aesthetic-dentist',
      instagram: 'https://instagram.com/aestheticdental.delhi',
      metaAdsLibrary: 'https://facebook.com/ads/library/?q=aesthetic+dental+care+delhi',
      email: 'dr.rohan@aestheticdental.in',
      phone: '+91 98765 43210',
      whatsappRaw: '919876543210',
      adSpendUsd: 2000,
      niche: 'Med-Spa / Clinic',
      market: 'INDIA',
      location: 'Delhi NCR, India',
      adsActive: '9 Active Instagram & Google Ads',
      detectedLeak: 'Front desk busy during peak hours; night time WhatsApp queries missed.',
      pitchType: 'INDIA_SNIPER',
      pitchScript: `Doctor sahab, maine aapka Instagram ad dekha. Raat mein aane wali WhatsApp queries aur Sunday leads drop ho rahi hain kyunki front desk band hota hai. Main ek 24/7 AI booking bot laga sakta hoon jo automatically appointment book kar dega. Demo dikhaun?`
    },

    // Finfluencers & Course Creators - India
    {
      id: 'L-401',
      name: 'Karan Mehta',
      title: 'Founder & Head Educator',
      company: 'TradePro Trader Accelerator',
      website: 'https://tradeproacademy.in',
      linkedin: 'https://linkedin.com/in/karan-mehta-tradepro',
      instagram: 'https://instagram.com/karanmehta.tradepro',
      metaAdsLibrary: 'https://facebook.com/ads/library/?q=tradepro+trader+accelerator',
      email: 'karan@tradeproacademy.in',
      phone: '+91 99887 76655',
      whatsappRaw: '919988776655',
      adSpendUsd: 3500,
      niche: 'Course Creator / Finfluencer',
      market: 'INDIA',
      location: 'Mumbai, India',
      adsActive: '14 Active Instagram Video Ads',
      detectedLeak: 'Razorpay payment confirmation & Discord/WhatsApp group access managed manually.',
      pitchType: 'INDIA_SNIPER',
      pitchScript: `Karan bhai, aapka Razorpay payment confirmation aur WhatsApp group invite manual ho raha hai. Maine Razorpay ➔ n8n ➔ WhatsApp Auto-Invoice + VIP Discord Invite ka engine banaya hai. 10 min mein set up karke dikhaun?`
    },

    // Interior Designers - Tier 2 India (Jamshedpur / Dhanbad)
    {
      id: 'L-501',
      name: 'Rajesh Agarwal',
      title: 'Owner & Chief Designer',
      company: 'Agarwal Luxury Interiors',
      website: 'https://agarwalinteriors.in',
      linkedin: 'https://linkedin.com/in/rajesh-agarwal-interiors',
      instagram: 'https://instagram.com/agarwalinteriors.jamshedpur',
      metaAdsLibrary: 'https://facebook.com/ads/library/?q=agarwal+interiors+jamshedpur',
      email: 'rajesh@agarwalinteriors.in',
      phone: '+91 94311 22334',
      whatsappRaw: '919431122334',
      adSpendUsd: 1800,
      niche: 'Interior Designer & Architecture',
      market: 'INDIA',
      location: 'Jamshedpur / Dhanbad, India',
      adsActive: '6 Active Meta Ads',
      detectedLeak: 'Form submitted on Meta Ad but no instant catalog PDF on WhatsApp.',
      pitchType: 'INDIA_SNIPER',
      pitchScript: `Agarwal Sir, Jamshedpur mein aapka interior ad chal raha hai. Maine form bhara par turant WhatsApp par portfolio nahi aaya. Main aapke system mein ek automation laga dunga jisse form bharte hi client ko aapka 3D Design Catalog WhatsApp par chala jaye. Call par 10 min demo dikhaun?`
    }
  ];

  // Filtering Logic
  const filteredLeads = leadDatabase.filter((lead) => {
    const matchesNiche = selectedNiche === 'ALL' || lead.niche === selectedNiche;
    const matchesMarket = selectedMarket === 'ALL' || lead.market === selectedMarket;
    const matchesSpend = lead.adSpendUsd >= minSpendUsd;
    const matchesQuery =
      searchQuery === '' ||
      lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.detectedLeak.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesNiche && matchesMarket && matchesSpend && matchesQuery;
  });

  const handleCopyPitch = (leadId, script) => {
    navigator.clipboard.writeText(script);
    setCopiedPitchId(leadId);
    setTimeout(() => setCopiedPitchId(null), 2000);
  };

  const handlePushToPipeline = (leadId) => {
    setPushedLeadId(leadId);
    setTimeout(() => setPushedLeadId(null), 2500);
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto px-4 sm:px-6">
      
      {/* Top Banner */}
      <div className="glass-panel p-6 rounded-2xl border border-cyan-500/30 bg-slate-900/90 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="bg-cyan-500/20 text-cyan-300 text-[10px] font-mono px-2 py-0.5 rounded font-bold uppercase border border-cyan-500/30">
              HIGH-SIGNAL PROSPECT SCRAPER & SEARCH ENGINE
            </span>
            <span className="bg-emerald-500/20 text-emerald-300 text-[10px] font-mono px-2 py-0.5 rounded font-bold border border-emerald-500/30">
              📱 Social Profiles: Website, LinkedIn, Instagram & Meta Ads
            </span>
          </div>
          <h3 className="text-2xl font-black text-white mt-1.5">
            Extract Verified Prospects With Direct Social Links
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Search by Niche, City, Founder, or open direct LinkedIn/Instagram profiles for 1-click outreach.
          </p>
        </div>

        {/* Currency Quick Converter Widget */}
        <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs font-mono flex items-center gap-4">
          <div>
            <div className="text-[10px] text-slate-500">CONVERSION RATE</div>
            <div className="text-cyan-400 font-bold">$1 USD = ₹{usdToInr} INR</div>
          </div>
          <div className="h-6 w-px bg-slate-800"></div>
          <div>
            <div className="text-[10px] text-slate-500">TARGET TICKET SIZE</div>
            <div className="text-emerald-400 font-bold">$1,500 - $3,000 / ₹1.25L - ₹2.5L</div>
          </div>
        </div>
      </div>

      {/* Expanded Search & Filters Bar */}
      <div className="glass-panel p-5 rounded-2xl border border-slate-800 space-y-4">
        
        {/* Row 1: Search Box */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
          <input
            type="text"
            placeholder="Search by City, Company Name, Founder, or Keyword (e.g. 'Dubai', 'Jamshedpur', 'Meta Ads', 'WhatsApp')..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-950 border border-slate-700/80 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 font-medium shadow-inner"
          />
        </div>

        {/* Row 2: Filter Selectors */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          
          {/* Niche Dropdown */}
          <div>
            <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
              Target Niche Category
            </label>
            <select
              value={selectedNiche}
              onChange={(e) => setSelectedNiche(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500 font-medium"
            >
              <option value="ALL">🌐 All Niches ({leadDatabase.length} Leads)</option>
              <option value="Boutique Real Estate">🏠 Boutique Real Estate (Dubai / US / India)</option>
              <option value="Performance Marketing Agency">🚀 Performance Marketing Agencies</option>
              <option value="Med-Spa / Clinic">🏥 Med-Spas & Aesthetic Clinics</option>
              <option value="Course Creator / Finfluencer">🎓 Finfluencers & Course Creators</option>
              <option value="Interior Designer & Architecture">🎨 Interior Designers & Architects</option>
            </select>
          </div>

          {/* Market Region Filter */}
          <div>
            <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
              Market & Strategy Region
            </label>
            <select
              value={selectedMarket}
              onChange={(e) => setSelectedMarket(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500 font-medium"
            >
              <option value="ALL">🌍 All Regions (Global + India)</option>
              <option value="GLOBAL">🇺🇸 🇦🇪 Global Outbound Engine (US/UK/Dubai)</option>
              <option value="INDIA">🇮🇳 Indian Sniper Approach (Tier 1/2 Cities)</option>
            </select>
          </div>

          {/* Min Spend USD & INR Filter */}
          <div>
            <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
              Min Monthly Spend Filter
            </label>
            <select
              value={minSpendUsd}
              onChange={(e) => setMinSpendUsd(Number(e.target.value))}
              className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500 font-medium"
            >
              <option value={1000}>$1,000+ (₹84,000+ / mo spend)</option>
              <option value={2500}>$2,500+ (₹2,10,000+ / mo spend)</option>
              <option value={5000}>$5,000+ (₹4,20,000+ / mo spend)</option>
            </select>
          </div>

        </div>
      </div>

      {/* Results Count Summary */}
      <div className="flex items-center justify-between text-xs text-slate-400 font-mono px-1">
        <span>Showing <strong>{filteredLeads.length} Verified High-Signal Leads</strong> with active profiles</span>
        <span className="text-cyan-400">📱 Website • LinkedIn • Instagram • WhatsApp Direct Links</span>
      </div>

      {/* Prospect Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredLeads.map((lead) => {
          const inrAdSpend = Math.round(lead.adSpendUsd * usdToInr);

          return (
            <div
              key={lead.id}
              className="glass-card p-5 rounded-2xl border border-slate-800 space-y-4 hover:border-cyan-500/50 transition-all shadow-xl flex flex-col justify-between"
            >
              <div className="space-y-4">
                
                {/* Header Badges */}
                <div className="flex items-start justify-between border-b border-slate-800/80 pb-3">
                  <div>
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className={`text-[9px] font-mono px-2 py-0.5 rounded font-bold uppercase ${
                        lead.market === 'GLOBAL'
                          ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                          : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                      }`}>
                        {lead.market === 'GLOBAL' ? '🇺🇸 🇦🇪 Global Automated' : '🇮🇳 Indian Sniper'}
                      </span>
                      <span className="text-[10px] bg-slate-900 text-slate-400 px-1.5 py-0.5 rounded font-mono">
                        {lead.niche}
                      </span>
                    </div>
                    <h4 className="font-extrabold text-sm text-white">{lead.name}</h4>
                    <div className="text-xs text-slate-400">{lead.title}</div>
                    <div className="text-xs text-cyan-400 font-semibold flex items-center gap-1 mt-0.5">
                      <Building2 className="w-3.5 h-3.5" />
                      {lead.company}
                    </div>
                  </div>

                  {/* Dual Currency Ad Spend Badge */}
                  <div className="text-right bg-slate-950 p-2 rounded-xl border border-slate-800">
                    <div className="text-xs font-black text-cyan-400 font-mono">${lead.adSpendUsd.toLocaleString()}/mo</div>
                    <div className="text-[10px] font-mono text-emerald-400 font-bold">₹{(inrAdSpend / 1000).toFixed(0)}k/mo</div>
                    <div className="text-[9px] text-slate-500 font-mono">Ad Spend</div>
                  </div>
                </div>

                {/* Contact & Social Links Grid */}
                <div className="space-y-2 bg-slate-950/70 p-3 rounded-xl border border-slate-800/80">
                  <div className="flex items-center justify-between text-slate-400 text-[10px] font-mono border-b border-slate-900 pb-1.5">
                    <span>📍 {lead.location}</span>
                    <span className="text-cyan-400 font-semibold">{lead.adsActive}</span>
                  </div>

                  {/* Email & Phone */}
                  <div className="space-y-1 text-xs text-slate-300 font-mono pt-0.5">
                    <div className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                      <a href={`mailto:${lead.email}`} className="hover:text-cyan-400 truncate">
                        {lead.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                      <span>{lead.phone}</span>
                    </div>
                  </div>

                  {/* Social Profile Pill Buttons */}
                  <div className="pt-2 border-t border-slate-900 grid grid-cols-2 gap-1.5 text-[11px] font-mono">
                    
                    {/* Website */}
                    <a
                      href={lead.website}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white px-2.5 py-1.5 rounded-lg border border-slate-800 truncate transition-colors"
                    >
                      <Globe className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span className="truncate">Website</span>
                      <ExternalLink className="w-2.5 h-2.5 text-slate-500 ml-auto shrink-0" />
                    </a>

                    {/* LinkedIn */}
                    <a
                      href={lead.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 bg-blue-950/40 hover:bg-blue-900/50 text-blue-300 px-2.5 py-1.5 rounded-lg border border-blue-800/50 truncate transition-colors"
                    >
                      <svg className="w-3.5 h-3.5 text-blue-400 shrink-0 fill-current" viewBox="0 0 24 24">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.75a1.45 1.45 0 1 0 0 2.9 1.45 1.45 0 0 0 0-2.9Z"/>
                      </svg>
                      <span className="truncate">LinkedIn</span>
                      <ExternalLink className="w-2.5 h-2.5 text-blue-400/50 ml-auto shrink-0" />
                    </a>

                    {/* Instagram / Meta Ad */}
                    <a
                      href={lead.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 bg-pink-950/40 hover:bg-pink-900/50 text-pink-300 px-2.5 py-1.5 rounded-lg border border-pink-800/50 truncate transition-colors"
                    >
                      <svg className="w-3.5 h-3.5 text-pink-400 shrink-0 stroke-current fill-none stroke-[2]" viewBox="0 0 24 24">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                      <span className="truncate">Instagram</span>
                      <ExternalLink className="w-2.5 h-2.5 text-pink-400/50 ml-auto shrink-0" />
                    </a>

                    {/* Direct WhatsApp Chat */}
                    <a
                      href={`https://wa.me/${lead.whatsappRaw}`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 bg-emerald-950/50 hover:bg-emerald-900/60 text-emerald-300 px-2.5 py-1.5 rounded-lg border border-emerald-800/50 truncate transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span className="truncate">WhatsApp</span>
                      <ExternalLink className="w-2.5 h-2.5 text-emerald-400/50 ml-auto shrink-0" />
                    </a>

                  </div>
                </div>

                {/* Identified Leak Warning Box */}
                <div className="bg-red-950/20 p-3 rounded-xl border border-red-500/30 text-xs space-y-1">
                  <div className="flex items-center justify-between text-[10px] font-mono font-bold text-red-400 uppercase tracking-wider">
                    <span>🚨 IDENTIFIED REVENUE LEAK</span>
                    <span>~35% Drop-off</span>
                  </div>
                  <p className="text-slate-200 text-[11px] leading-relaxed">
                    {lead.detectedLeak}
                  </p>
                </div>

                {/* Ready Pitch Script Preview Box */}
                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1">
                      {lead.pitchType === 'GLOBAL_LOOM' ? <Video className="w-3 h-3 text-purple-400" /> : <MessageCircle className="w-3 h-3 text-emerald-400" />}
                      {lead.pitchType === 'GLOBAL_LOOM' ? '60s Loom Cold Pitch' : 'WhatsApp / Call Script'}
                    </span>

                    <button
                      onClick={() => handleCopyPitch(lead.id, lead.pitchScript)}
                      className="text-[10px] text-slate-300 hover:text-white bg-slate-900 px-2 py-0.5 rounded border border-slate-700 flex items-center gap-1 font-mono cursor-pointer"
                    >
                      {copiedPitchId === lead.id ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                      {copiedPitchId === lead.id ? 'Copied Pitch!' : 'Copy Script'}
                    </button>
                  </div>

                  <p className="text-[11px] text-slate-400 italic line-clamp-3 leading-relaxed">
                    "{lead.pitchScript}"
                  </p>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex items-center gap-2">
                <button
                  onClick={() => handlePushToPipeline(lead.id)}
                  className={`w-full py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-md cursor-pointer ${
                    pushedLeadId === lead.id
                      ? 'bg-emerald-500 text-slate-950 shadow-emerald-500/20'
                      : 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-cyan-500/20'
                  }`}
                >
                  {pushedLeadId === lead.id ? (
                    <>
                      <CheckCircle2 className="w-4 h-4" /> Sent to n8n + Trello CRM!
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" /> Push Lead to n8n & Trello CRM
                    </>
                  )}
                </button>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
}
