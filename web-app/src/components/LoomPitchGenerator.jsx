import React, { useState } from 'react';
import { Video, Copy, Check, Sparkles, Play, ShieldAlert } from 'lucide-react';

export default function LoomPitchGenerator() {
  const [prospect, setProspect] = useState({
    companyName: 'Emirates Luxury Off-Plan',
    niche: 'Boutique Real Estate (Dubai)',
    adSpend: 4500,
    detectedLeak: 'Form submissions lack instant WhatsApp trigger & lead response lag is 2+ hours'
  });

  const [copied, setCopied] = useState(false);

  const pitchScript = `
🎥 90-SECOND LOOM TEARDOWN SCRIPT FOR: ${prospect.companyName}

[0:00 - 0:20] THE HOOK (Screen showing their Meta Ad & Landing Page)
"Hey [Founder Name], clicked your Meta ad today for ${prospect.companyName}. The ad creative and property visuals are top-tier! But when I filled out your form, I noticed the submissions go into a standard queue without an instant AI WhatsApp trigger or dynamic calendar booking link."

[0:20 - 0:45] THE LEAK & REVENUE IMPACT (Screen showing timing comparison)
"In ${prospect.niche}, over 35% of high-intent buyers go cold if they don't get an immediate WhatsApp response within 3 minutes. With an estimated monthly spend of $${prospect.adSpend.toLocaleString()}, delayed follow-ups are leaking approximately $${Math.round(prospect.adSpend * 0.35).toLocaleString()} of your ad budget every single month."

[0:45 - 1:15] THE SOLUTION DEMO (Screen showing live n8n workflow nodes)
"I built a custom Next.js + n8n pipeline that plugs into your current setup in 48 hours. When a buyer submits your form, 3 things happen in under 3 seconds:
 1. WhatsApp API delivers your digital brochure directly to their phone.
 2. GPT-4o qualifies their budget tier.
 3. Your sales team gets an instant push alert on Telegram with a 1-click call button."

[1:15 - 1:30] THE NO-PRESSURE CTA
"Made a 60-second staging demo of this workflow. If you'd like to see how we can fix this leak without changing your current CRM, reply to this message. Open to seeing the link?"
`;

  const handleCopy = () => {
    navigator.clipboard.writeText(pitchScript);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto px-4 sm:px-6">
      <div className="glass-panel p-6 rounded-2xl border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h3 className="text-2xl font-black text-white flex items-center gap-2">
            <Video className="w-6 h-6 text-purple-400" />
            90-Second Loom Audit Script Generator
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Generate high-converting video teardown scripts targeting high ad-spend prospects.
          </p>
        </div>

        <button
          onClick={handleCopy}
          className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white px-4 py-2 rounded-xl text-xs font-bold shadow-lg shadow-purple-500/20 transition-all"
        >
          {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
          {copied ? 'Script Copied!' : 'Copy Script to Clipboard'}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Input parameters */}
        <div className="lg:col-span-4 glass-panel p-6 rounded-2xl border border-slate-800 space-y-4">
          <h4 className="font-bold text-sm text-slate-200 border-b border-slate-800 pb-3 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-purple-400" />
            Prospect Details
          </h4>

          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1">Company Name</label>
            <input
              type="text"
              value={prospect.companyName}
              onChange={(e) => setProspect({ ...prospect, companyName: e.target.value })}
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-purple-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1">Niche Category</label>
            <select
              value={prospect.niche}
              onChange={(e) => setProspect({ ...prospect, niche: e.target.value })}
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-purple-500"
            >
              <option value="Boutique Real Estate (Dubai)">Boutique Real Estate (Dubai/US)</option>
              <option value="Performance Marketing Agency">Performance Marketing Agency</option>
              <option value="Med-Spa / Dental Clinic">Med-Spa / Dental Clinic</option>
              <option value="Finfluencer & Course Creator">Finfluencer & Course Creator</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1">Estimated Monthly Ad Spend ($)</label>
            <input
              type="number"
              value={prospect.adSpend}
              onChange={(e) => setProspect({ ...prospect, adSpend: Number(e.target.value) })}
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-purple-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1">Detected Process Leak</label>
            <textarea
              rows="3"
              value={prospect.detectedLeak}
              onChange={(e) => setProspect({ ...prospect, detectedLeak: e.target.value })}
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-purple-500 resize-none"
            />
          </div>
        </div>

        {/* Script Viewer */}
        <div className="lg:col-span-8 glass-panel p-6 rounded-2xl border border-slate-800 space-y-3">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <span className="text-xs font-bold text-purple-400 font-mono">GENERATED LOOM TEARDOWN SCRIPT</span>
            <span className="text-[10px] bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded font-mono">
              Target Duration: 90 Seconds
            </span>
          </div>

          <pre className="bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-xs text-purple-200/90 whitespace-pre-wrap leading-relaxed">
            {pitchScript}
          </pre>
        </div>
      </div>
    </div>
  );
}
