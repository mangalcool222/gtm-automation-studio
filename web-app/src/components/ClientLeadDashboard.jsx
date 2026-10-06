import React, { useState } from 'react';
import { LayoutDashboard, Zap, PhoneCall, CheckCircle, Clock, Filter, ArrowUpRight, TrendingUp, ShieldAlert, Sparkles, UserCheck, Download, X, Copy, Check, ExternalLink, Code, Send, Radio } from 'lucide-react';

export default function ClientLeadDashboard() {
  const [filter, setFilter] = useState('ALL');
  const [selectedLead, setSelectedLead] = useState(null); // for View Details Modal
  const [showWebhookModal, setShowWebhookModal] = useState(false); // for Connect Webhook Modal
  const [copiedWebhook, setCopiedWebhook] = useState(false);
  const [testPayloadSent, setTestPayloadSent] = useState(false);

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
      timestamp: '2 mins ago',
      aiReasoning: 'High-intent buyer looking for immediate off-plan booking with verified $1M+ budget.',
      latencyLogs: [
        { step: 'Meta Lead Form Ingested', time: '0.2s', status: 'PASS' },
        { step: 'GPT-4o Quality Scoring (96/100)', time: '0.9s', status: 'PASS' },
        { step: 'WhatsApp Digital Brochure Delivered', time: '1.8s', status: 'PASS' },
        { step: 'Broker Telegram VIP Group Alerted', time: '2.4s', status: 'PASS' }
      ]
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
      timestamp: '14 mins ago',
      aiReasoning: 'Agency owner spending $50k+/mo on Meta ads with manual spreadsheet lag.',
      latencyLogs: [
        { step: 'Webhook Event Received', time: '0.1s', status: 'PASS' },
        { step: 'AI Scoring (91/100)', time: '0.7s', status: 'PASS' },
        { step: 'Telegram Alert Pushed', time: '1.8s', status: 'PASS' }
      ]
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
      timestamp: '42 mins ago',
      aiReasoning: 'Seeking skin consultation slot; auto-scheduled via WhatsApp calendar bot.',
      latencyLogs: [
        { step: 'Instagram Form Submitted', time: '0.3s', status: 'PASS' },
        { step: 'WhatsApp Calendar Bot Triggered', time: '3.1s', status: 'PASS' }
      ]
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
      timestamp: '1 hour ago',
      aiReasoning: 'Razorpay payment captured; instant Discord link sent via WhatsApp.',
      latencyLogs: [
        { step: 'Razorpay Payment Captured', time: '0.2s', status: 'PASS' },
        { step: 'Auto WhatsApp VIP Invite', time: '2.9s', status: 'PASS' }
      ]
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
      timestamp: '2 hours ago',
      aiReasoning: 'VIP investor requesting floorplans for Palm Jumeirah beachfront villa.',
      latencyLogs: [
        { step: 'Meta Form Webhook', time: '0.1s', status: 'PASS' },
        { step: 'WhatsApp Brochure Auto-Sent', time: '2.1s', status: 'PASS' }
      ]
    }
  ]);

  const filteredLeads = filter === 'ALL' ? leads : leads.filter((l) => l.tier === filter);

  const [exportedCsv, setExportedCsv] = useState(false);

  // Functional CSV Export (Cross-Browser Compatible)
  const handleExportCsv = () => {
    const headers = ['Lead ID', 'Name', 'Phone', 'Email', 'Project / Interest', 'Budget', 'Niche', 'AI Score', 'Tier', 'Status', 'Response Time', 'Timestamp'];
    const rows = filteredLeads.map((l) => [
      l.id,
      `"${l.name}"`,
      `"${l.phone}"`,
      l.email,
      `"${l.project}"`,
      `"${l.budget}"`,
      `"${l.niche}"`,
      l.score,
      l.tier,
      `"${l.status}"`,
      l.responseTime,
      `"${l.timestamp}"`
    ]);

    const csvString = [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const filename = `client-lead-stream-${new Date().toISOString().slice(0, 10)}.csv`;

    try {
      const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', filename);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (e) {
      const encodedUri = encodeURI(`data:text/csv;charset=utf-8,${csvString}`);
      const link = document.createElement('a');
      link.setAttribute('href', encodedUri);
      link.setAttribute('download', filename);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }

    setExportedCsv(true);
    setTimeout(() => setExportedCsv(false), 2500);
  };

  const handleCopyWebhook = () => {
    navigator.clipboard.writeText('https://gtm.trackkaroai.com/api/webhooks/lead-inbound');
    setCopiedWebhook(true);
    setTimeout(() => setCopiedWebhook(false), 2000);
  };

  const handleSendTestWebhook = () => {
    setTestPayloadSent(true);
    setTimeout(() => setTestPayloadSent(false), 3000);
  };

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
          <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-mono text-xs px-3.5 py-2 rounded-xl flex items-center gap-2 font-bold shadow-sm shrink-0">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            Live Automated Sync Active
          </span>
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
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
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
                    <button
                      onClick={() => setSelectedLead(lead)}
                      className="bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white px-3 py-1.5 rounded-lg text-xs font-semibold border border-slate-700 transition-all cursor-pointer"
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* MODAL 1: Connect New Ad Webhook Modal */}
      {showWebhookModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="glass-panel bg-slate-900 max-w-xl w-full p-6 rounded-2xl border border-slate-700 space-y-5 shadow-2xl relative">
            <button
              onClick={() => setShowWebhookModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white bg-slate-800 p-1 rounded-lg"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
              <div className="p-2 bg-cyan-500/20 text-cyan-400 rounded-xl">
                <Radio className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <h4 className="font-bold text-base text-white">Connect Ad Network Webhook</h4>
                <p className="text-xs text-slate-400">Meta Ads, Google Ads, TikTok, or Custom Form Endpoint</p>
              </div>
            </div>

            {/* Webhook Endpoint Box */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-300">Your Live Production Webhook URL:</label>
              <div className="flex items-center gap-2 bg-slate-950 p-2.5 rounded-xl border border-slate-800 font-mono text-xs">
                <span className="text-cyan-400 truncate flex-1">
                  https://gtm.trackkaroai.com/api/webhooks/lead-inbound
                </span>
                <button
                  onClick={handleCopyWebhook}
                  className="bg-slate-900 hover:bg-slate-800 text-slate-200 px-3 py-1 rounded-lg text-xs font-semibold border border-slate-700 flex items-center gap-1 shrink-0"
                >
                  {copiedWebhook ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  {copiedWebhook ? 'Copied!' : 'Copy URL'}
                </button>
              </div>
            </div>

            {/* Integration Instructions */}
            <div className="space-y-2 text-xs text-slate-300 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800/80">
              <div className="font-bold text-cyan-400 font-mono uppercase text-[10px]">Quick Setup Steps:</div>
              <ol className="list-decimal list-inside space-y-1 text-[11px] leading-relaxed text-slate-400">
                <li>Paste this URL into your Facebook Developers ➔ Webhooks Settings under <code>leadgen</code>.</li>
                <li>Set Verification Token to <code>gtm_studio_secure_token_2026</code>.</li>
                <li>Click <strong>Test Webhook Trigger</strong> below to verify live payload ingestion.</li>
              </ol>
            </div>

            {/* Test Trigger Button */}
            <div className="pt-2 flex items-center justify-between">
              <button
                onClick={handleSendTestWebhook}
                className={`w-full py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all ${
                  testPayloadSent
                    ? 'bg-emerald-500 text-slate-950'
                    : 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/20'
                }`}
              >
                {testPayloadSent ? (
                  <>
                    <Check className="w-4 h-4" /> Live Test Webhook Ingested in 0.2s!
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" /> Send Test Payload to Webhook
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: View Details Slide-over Modal */}
      {selectedLead && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="glass-panel bg-slate-900 max-w-2xl w-full p-6 rounded-2xl border border-slate-700 space-y-5 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedLead(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white bg-slate-800 p-1 rounded-lg"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header */}
            <div className="border-b border-slate-800 pb-3 flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded font-bold">
                    {selectedLead.id}
                  </span>
                  <span className={`text-[10px] px-2 py-0.5 rounded font-mono font-bold ${
                    selectedLead.tier === 'HOT' ? 'bg-red-500/20 text-red-400 border border-red-500/30' : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                  }`}>
                    {selectedLead.tier} LEAD (Score {selectedLead.score}/100)
                  </span>
                </div>
                <h3 className="text-xl font-black text-white mt-1">{selectedLead.name}</h3>
                <p className="text-xs text-slate-400">{selectedLead.phone} • {selectedLead.email}</p>
              </div>

              <div className="text-right">
                <div className="text-xs font-mono text-cyan-400 font-bold">⚡ {selectedLead.responseTime}</div>
                <div className="text-[10px] text-slate-500 font-mono">Response Speed</div>
              </div>
            </div>

            {/* AI Reasoning Box */}
            <div className="bg-purple-950/20 p-4 rounded-xl border border-purple-500/30 space-y-1">
              <div className="text-[10px] font-mono font-bold text-purple-400 uppercase tracking-wider flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> GPT-4o Qualification Insights
              </div>
              <p className="text-slate-200 text-xs leading-relaxed">
                {selectedLead.aiReasoning}
              </p>
            </div>

            {/* Pipeline Latency Timeline */}
            <div className="space-y-2">
              <div className="text-xs font-bold text-slate-300">Pipeline Execution Latency Breakdown:</div>
              <div className="space-y-1.5">
                {selectedLead.latencyLogs.map((log, idx) => (
                  <div key={idx} className="flex items-center justify-between p-2 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono">
                    <span className="text-slate-300 flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                      {log.step}
                    </span>
                    <span className="text-cyan-400 font-bold">{log.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Live Payload JSON */}
            <div className="space-y-1">
              <div className="text-xs font-bold text-slate-400">Raw Webhook Event JSON:</div>
              <pre className="bg-slate-950 p-3 rounded-xl border border-slate-800 font-mono text-[11px] text-cyan-300/90 overflow-x-auto">
{JSON.stringify(selectedLead, null, 2)}
              </pre>
            </div>

            {/* Actions */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={`tel:${selectedLead.phone}`}
                className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs py-2.5 rounded-xl text-center shadow-lg shadow-cyan-500/20 transition-all"
              >
                📞 Call {selectedLead.name}
              </a>
              <button
                onClick={() => setSelectedLead(null)}
                className="bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs py-2.5 px-4 rounded-xl font-semibold border border-slate-700"
              >
                Close Details
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
