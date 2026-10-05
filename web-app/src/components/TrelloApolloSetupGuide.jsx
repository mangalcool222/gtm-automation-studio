import React from 'react';
import { Kanban, Zap, Database, ArrowRight, ShieldCheck, CheckCircle2, Code } from 'lucide-react';

export default function TrelloApolloSetupGuide() {
  const trelloLists = [
    { name: '1. Scraped Prospects', desc: 'Auto-populated from Apollo/Apify webhook', color: 'border-cyan-500/40 text-cyan-400' },
    { name: '2. Audit & Loom Needed', desc: 'Top 5 leads selected for daily 90s teardown', color: 'border-purple-500/40 text-purple-400' },
    { name: '3. 90-Sec Loom Sent', desc: 'Outreach email/LinkedIn DM sent with video', color: 'border-blue-500/40 text-blue-400' },
    { name: '4. Discovery Call Booked', desc: '15-min diagnostic call scheduled ($1.5k-$3k)', color: 'border-amber-500/40 text-amber-400' },
    { name: '5. Proposal / Staging Demo', desc: 'Live Next.js staging portal shown to client', color: 'border-indigo-500/40 text-indigo-400' },
    { name: '6. 🎉 CLOSED WON', desc: 'Retainer / Project payment received', color: 'border-emerald-500/40 text-emerald-400' }
  ];

  return (
    <div className="space-y-6 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Header */}
      <div className="glass-panel p-6 rounded-2xl border border-slate-800">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
            <Kanban className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-2xl font-black text-white">Trello CRM & Apollo Integration Blueprint</h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Zero-friction setup guide for your internal lead prospecting and pipeline tracking.
            </p>
          </div>
        </div>
      </div>

      {/* Trello Lists Visual Breakdown */}
      <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <h4 className="font-bold text-sm text-white">The 6 Trello Pipeline Columns</h4>
          <span className="text-[10px] bg-slate-900 text-slate-400 px-2 py-0.5 rounded font-mono">
            Trello Butler Automation Active
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {trelloLists.map((list, i) => (
            <div key={i} className={`glass-card p-4 rounded-xl border ${list.color} space-y-1`}>
              <div className="font-bold text-xs">{list.name}</div>
              <div className="text-[11px] text-slate-400 leading-relaxed">{list.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Integration Code & Setup */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Apollo Search Config */}
        <div className="lg:col-span-6 glass-panel p-6 rounded-2xl border border-slate-800 space-y-3">
          <h4 className="font-bold text-sm text-slate-200 border-b border-slate-800 pb-3 flex items-center gap-2">
            <Database className="w-4 h-4 text-cyan-400" />
            Apollo.io High-Signal Search Filters
          </h4>
          <ul className="space-y-2 text-xs text-slate-300">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span><strong>Job Titles:</strong> Founder, CEO, Managing Director, Owner, Head of Marketing.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span><strong>Company Size:</strong> 5 - 50 employees (micro-agencies & boutique brokers).</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span><strong>Technologies:</strong> Meta Pixel, Google Tag Manager, Facebook Ads.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span><strong>Location:</strong> United Arab Emirates (Dubai), United States, United Kingdom, Tier-1 India.</span>
            </li>
          </ul>
        </div>

        {/* Webhook Payload JSON */}
        <div className="lg:col-span-6 glass-panel p-6 rounded-2xl border border-slate-800 space-y-3">
          <h4 className="font-bold text-sm text-slate-200 border-b border-slate-800 pb-3 flex items-center gap-2">
            <Code className="w-4 h-4 text-emerald-400" />
            n8n ➔ Trello Webhook Payload Schema
          </h4>
          <pre className="bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-xs text-emerald-300 overflow-x-auto">
{`{
  "trello_list_id": "list-prospects-123",
  "card_name": "Alexander Wright - Dubai Luxury Offplan",
  "card_desc": "Email: alexander@dubairealty.ae\\nAd Spend: $4,500/mo\\nLeak: No instant WhatsApp trigger",
  "labels": ["Urgent Leak", "Dubai Real Estate"]
}`}
          </pre>
        </div>

      </div>
    </div>
  );
}
