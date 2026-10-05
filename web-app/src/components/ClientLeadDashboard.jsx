import React, { useState } from 'react';
import { LayoutDashboard, Zap, PhoneCall, CheckCircle, Clock, Filter, ArrowUpRight, TrendingUp, ShieldAlert, Sparkles, UserCheck } from 'lucide-react';

export default function ClientLeadDashboard() {
  const [filter, setFilter] = useState('ALL');

  const [leads, setLeads] = useState([
    {
      id: 'LEAD-901',
      name: 'Alexander Wright',
      phone: '+971 50 987 6543',
      email: 'alexander@dubai-investor.ae',
      project: 'Dubai Marina Luxury Off-Plan Penthouse',
      budget: '$1.2M',
      niche: 'Dubai Real Estate',
      score: 96,
      tier: 'HOT',
      status: 'WhatsApp Brochure Sent',
      responseTime: '2.4s',
      timestamp: '2 mins ago'
    },
    {
      id: 'LEAD-900',
      name: 'Marcus Vance',
      phone: '+1 (305) 555-0188',
      email: 'marcus@vancegrowth.com',
      project: 'B2B Performance Lead Engine',
      budget: '$5,000/mo',
      niche: 'Marketing Agency',
      score: 91,
      tier: 'HOT',
      status: 'Broker Telegram Alert Push',
      responseTime: '1.8s',
      timestamp: '14 mins ago'
    },
    {
      id: 'LEAD-899',
      name: 'Dr. Ananya Roy',
      phone: '+91 98200 11223',
      email: 'dr.ananya@skinclinic.in',
      project: 'Laser Treatment Package',
      budget: '₹85,000',
      niche: 'Med-Spa / Clinic',
      score: 84,
      tier: 'WARM',
      status: 'Automated Calendar Invite',
      responseTime: '3.1s',
      timestamp: '42 mins ago'
    },
    {
      id: 'LEAD-898',
      name: 'Karan Mehta',
      phone: '+91 99887 76655',
      email: 'karan@fincreators.in',
      project: 'VIP Trader Accelerator',
      budget: '₹25,000',
      niche: 'Course Creator',
      score: 78,
      tier: 'WARM',
      status: 'Discord & WhatsApp Invited',
      responseTime: '2.9s',
      timestamp: '1 hour ago'
    },
    {
      id: 'LEAD-897',
      name: 'Julian Thorne',
      phone: '+44 20 7946 0912',
      email: 'julian@thorne-holdings.co.uk',
      project: 'Palm Jumeirah Beachfront Villa',
      budget: '$3.5M',
      niche: 'Dubai Real Estate',
      score: 98,
      tier: 'HOT',
      status: 'WhatsApp Brochure Sent',
      responseTime: '2.1s',
      timestamp: '2 hours ago'
    }
  ]);

  const filteredLeads = filter === 'ALL' ? leads : leads.filter((l) => l.tier === filter);

  return (
    <div className="space-y-6 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Top Banner */}
      <div className="glass-panel p-6 rounded-2xl border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="bg-cyan-500/10 text-cyan-400 text-[10px] font-mono px-2 py-0.5 rounded border border-cyan-500/30 uppercase font-bold">
              White-Label Client Portal Template
            </span>
            <span className="text-xs text-slate-400 font-mono">Live Sync: Supabase + n8n</span>
          </div>
          <h3 className="text-2xl font-black text-white mt-1">
            Real-Time Lead & Conversion Intelligence
          </h3>
          <p className="text-xs text-slate-400">
            This live dashboard is delivered to your client ($1,500 - $3,000 package) so they can monitor live ad lead routing.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button className="bg-slate-900 hover:bg-slate-800 text-slate-300 px-3 py-2 rounded-xl text-xs font-semibold border border-slate-800 flex items-center gap-2">
            <Filter className="w-3.5 h-3.5" />
            Export CSV
          </button>
          <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-4 py-2 rounded-xl text-xs font-bold shadow-lg shadow-cyan-500/20">
            + Connect New Ad Webhook
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="glass-card p-4 rounded-xl border border-slate-800">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400">Total Leads Ingested</span>
            <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
              <Zap className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-black text-white mt-2">1,248</div>
          <div className="text-[11px] text-emerald-400 flex items-center gap-1 mt-1">
            <TrendingUp className="w-3 h-3" /> +28% from last week
          </div>
        </div>

        <div className="glass-card p-4 rounded-xl border border-slate-800">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400">Avg WhatsApp Latency</span>
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
              <Clock className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-black text-emerald-400 mt-2">2.4 Seconds</div>
          <div className="text-[11px] text-emerald-400 flex items-center gap-1 mt-1">
            <CheckCircle className="w-3 h-3" /> Zero Lead Lag Leaks
          </div>
        </div>

        <div className="glass-card p-4 rounded-xl border border-slate-800">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400">AI Qualified Hot Leads</span>
            <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
              <Sparkles className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-black text-purple-400 mt-2">412 (33%)</div>
          <div className="text-[11px] text-purple-300 flex items-center gap-1 mt-1">
            Score &gt; 85/100
          </div>
        </div>

        <div className="glass-card p-4 rounded-xl border border-slate-800">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400">Est. ROAS Savings</span>
            <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-black text-amber-400 mt-2">$4,850/mo</div>
          <div className="text-[11px] text-amber-300 flex items-center gap-1 mt-1">
            Prevented Drop-off Value
          </div>
        </div>
      </div>

      {/* Leads Table */}
      <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <h4 className="text-base font-bold text-white">Live Inbound Lead Stream</h4>
            <p className="text-xs text-slate-400">Real-time webhook events synced with Supabase PostgreSQL</p>
          </div>

          <div className="flex items-center gap-2 bg-slate-900 p-1 rounded-xl border border-slate-800">
            {['ALL', 'HOT', 'WARM'].map((t) => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                  filter === t ? 'bg-cyan-500 text-slate-950 shadow font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                {t} Leads
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-800 text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                <th className="py-3 px-4">Lead ID & Client</th>
                <th className="py-3 px-4">Project / Interest</th>
                <th className="py-3 px-4">AI Score</th>
                <th className="py-3 px-4">Auto-Status</th>
                <th className="py-3 px-4">Response Time</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-xs">
              {filteredLeads.map((lead) => (
                <tr key={lead.id} className="hover:bg-slate-900/50 transition-colors">
                  <td className="py-3.5 px-4">
                    <div className="font-bold text-white flex items-center gap-2">
                      {lead.name}
                      <span className={`text-[9px] px-1.5 py-0.5 rounded font-mono font-bold ${
                        lead.tier === 'HOT' ? 'bg-red-500/20 text-red-400 border border-red-500/30' : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                      }`}>
                        {lead.tier}
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-400 font-mono">{lead.phone} • {lead.email}</div>
                  </td>
                  <td className="py-3.5 px-4 text-slate-300">
                    <div className="font-medium">{lead.project}</div>
                    <div className="text-[11px] text-slate-500 font-mono">Budget: {lead.budget}</div>
                  </td>
                  <td className="py-3.5 px-4 font-mono font-bold text-cyan-400">
                    {lead.score}/100
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="inline-flex items-center gap-1.5 bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 px-2.5 py-1 rounded-full text-[11px] font-medium">
                      <CheckCircle className="w-3 h-3 text-emerald-400" />
                      {lead.status}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 font-mono text-cyan-400 font-bold">
                    ⚡ {lead.responseTime}
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <button className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-1 rounded-lg text-xs font-semibold">
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
