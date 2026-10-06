import React, { useState } from 'react';
import { Download, ExternalLink, RefreshCw, Table, CheckCircle2, ShieldCheck, Clock, Search, Filter } from 'lucide-react';

export default function GoogleSheetsDatabaseSync() {
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [filterMarket, setFilterMarket] = useState('ALL'); // ALL | GLOBAL | INDIA

  const liveLeads = [
    {
      id: 'LEAD-9041',
      timestamp: 'Today, 14:32:05',
      name: 'Julian Thorne',
      company: 'Miami Waterfront Estates',
      location: 'Miami, FL (USA)',
      market: 'GLOBAL',
      budget: '$6,500/mo ($1.2M Property)',
      phone: '+1 (305) 555-0188',
      email: 'julian@miamiwaterfront.com',
      whatsappStatus: 'BROCHURE DELIVERED (1.4s)',
      sheetSyncStatus: 'AUTO-SYNCED (2.4s)',
      score: 98,
    },
    {
      id: 'LEAD-9042',
      timestamp: 'Today, 14:28:40',
      name: 'Rajesh Malhotra',
      company: 'Malhotra Luxury Infra',
      location: 'Gurugram / NCR (India)',
      market: 'INDIA',
      budget: '₹12.5 Crore ($1.5M)',
      phone: '+91 98110 44221',
      email: 'rajesh@malhotrainfra.com',
      whatsappStatus: 'BROCHURE DELIVERED (1.2s)',
      sheetSyncStatus: 'AUTO-SYNCED (2.1s)',
      score: 96,
    },
    {
      id: 'LEAD-9043',
      timestamp: 'Today, 14:15:10',
      name: 'Alexander Wright',
      company: 'Apex Sovereign Capital',
      location: 'Dubai (UAE)',
      market: 'GLOBAL',
      budget: '$850,000 - $1.5M',
      phone: '+971 50 987 6543',
      email: 'alexander@dubai-investor.ae',
      whatsappStatus: 'BROCHURE DELIVERED (1.5s)',
      sheetSyncStatus: 'AUTO-SYNCED (2.3s)',
      score: 99,
    },
    {
      id: 'LEAD-9044',
      timestamp: 'Today, 13:54:19',
      name: 'Vikramaditya Singhania',
      company: 'Singhania Heights Developers',
      location: 'Mumbai (India)',
      market: 'INDIA',
      budget: '₹25.0 Crore ($3.0M)',
      phone: '+91 98200 11982',
      email: 'v.singhania@singhaniaheights.in',
      whatsappStatus: 'BROCHURE DELIVERED (1.1s)',
      sheetSyncStatus: 'AUTO-SYNCED (1.9s)',
      score: 97,
    },
    {
      id: 'LEAD-9045',
      timestamp: 'Today, 13:20:00',
      name: 'Sophia Al-Mansoor',
      company: 'Emirates Royal Properties',
      location: 'Abu Dhabi (UAE)',
      market: 'GLOBAL',
      budget: '$2.2 Million',
      phone: '+971 52 443 1199',
      email: 'sophia@royalproperties.ae',
      whatsappStatus: 'BROCHURE DELIVERED (1.3s)',
      sheetSyncStatus: 'AUTO-SYNCED (2.2s)',
      score: 95,
    },
  ];

  const filteredLeads = liveLeads.filter((l) => {
    if (filterMarket === 'GLOBAL') return l.market === 'GLOBAL';
    if (filterMarket === 'INDIA') return l.market === 'INDIA';
    return true;
  });

  const handleDownloadCSV = () => {
    const headers = ['Lead ID', 'Timestamp', 'Name', 'Company', 'Location', 'Budget', 'Phone', 'Email', 'WhatsApp Status', 'Sheet Sync'];
    const rows = filteredLeads.map((l) => [l.id, l.timestamp, l.name, l.company, l.location, l.budget, l.phone, l.email, l.whatsappStatus, l.sheetSyncStatus]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `GTM_Realtime_Leads_Database.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto px-4 sm:px-6">
      
      {/* Header Panel */}
      <div className="glass-panel p-6 rounded-2xl border border-zinc-800 bg-zinc-950/90 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="bg-zinc-900 text-zinc-300 text-[10px] font-mono px-2 py-0.5 rounded border border-zinc-800 uppercase font-bold">
              Real-Time Database Sync Engine
            </span>
            <span className="text-xs text-zinc-400 font-mono">Google Sheets REST Webhook • 0 Manual CSV Work</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
            Live Automated Lead Master Database
          </h3>
          <p className="text-xs text-zinc-400 mt-0.5">
            Every inbound lead from Meta Ads, Webflow, or WordPress form is automatically logged into your Google Sheet / CRM in real-time.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={handleDownloadCSV}
            className="bg-zinc-900 hover:bg-zinc-800 text-white font-mono text-xs px-3.5 py-2 rounded-xl border border-zinc-700 flex items-center gap-2 transition-all cursor-pointer"
          >
            <Download className="w-3.5 h-3.5 text-cyan-400" />
            {downloadSuccess ? 'Downloaded CSV!' : 'Export CSV'}
          </button>

          <a
            href="https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit"
            target="_blank"
            rel="noreferrer"
            className="bg-white hover:bg-zinc-200 text-zinc-950 font-bold text-xs px-4 py-2 rounded-xl flex items-center gap-2 transition-all shadow-md cursor-pointer"
          >
            Open Live Google Sheet
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-between bg-zinc-950/80 p-3 rounded-2xl border border-zinc-800">
        <div className="flex items-center gap-2 text-xs font-mono">
          <Filter className="w-4 h-4 text-zinc-500" />
          <span className="text-zinc-400 font-bold">Filter Market:</span>
          <button
            onClick={() => setFilterMarket('ALL')}
            className={`px-3 py-1 rounded-lg transition-all ${
              filterMarket === 'ALL' ? 'bg-zinc-800 text-white border border-zinc-700 font-bold' : 'text-zinc-400 hover:text-white'
            }`}
          >
            All Markets ({liveLeads.length})
          </button>
          <button
            onClick={() => setFilterMarket('GLOBAL')}
            className={`px-3 py-1 rounded-lg transition-all ${
              filterMarket === 'GLOBAL' ? 'bg-zinc-800 text-white border border-zinc-700 font-bold' : 'text-zinc-400 hover:text-white'
            }`}
          >
            🇺🇸 🇦🇪 Global Outbound ($)
          </button>
          <button
            onClick={() => setFilterMarket('INDIA')}
            className={`px-3 py-1 rounded-lg transition-all ${
              filterMarket === 'INDIA' ? 'bg-zinc-800 text-white border border-zinc-700 font-bold' : 'text-zinc-400 hover:text-white'
            }`}
          >
            🇮🇳 Indian High-Ticket (₹)
          </button>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-[11px] font-mono text-emerald-400 bg-zinc-900 px-3 py-1 rounded-lg border border-zinc-800">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          Live Sync Operational
        </div>
      </div>

      {/* Modern Obsidian Table */}
      <div className="glass-panel rounded-2xl border border-zinc-800 bg-zinc-950/90 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-sans border-collapse">
            <thead className="bg-zinc-900/90 border-b border-zinc-800 text-zinc-400 font-mono uppercase text-[10px] tracking-wider">
              <tr>
                <th className="p-4">Lead ID / Date</th>
                <th className="p-4">Prospect & Company</th>
                <th className="p-4">Target Budget</th>
                <th className="p-4">Contact Info</th>
                <th className="p-4">WhatsApp Status</th>
                <th className="p-4">Google Sheet Sync</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/60">
              {filteredLeads.map((lead) => (
                <tr key={lead.id} className="hover:bg-zinc-900/50 transition-colors">
                  <td className="p-4 font-mono">
                    <div className="font-bold text-white">{lead.id}</div>
                    <div className="text-[10px] text-zinc-500">{lead.timestamp}</div>
                  </td>

                  <td className="p-4">
                    <div className="font-bold text-white">{lead.name}</div>
                    <div className="text-[11px] text-zinc-400">{lead.company} • {lead.location}</div>
                  </td>

                  <td className="p-4 font-mono font-bold text-emerald-400">
                    {lead.budget}
                  </td>

                  <td className="p-4 font-mono text-[11px]">
                    <div className="text-zinc-200">{lead.phone}</div>
                    <div className="text-zinc-500">{lead.email}</div>
                  </td>

                  <td className="p-4">
                    <span className="inline-flex items-center gap-1.5 bg-emerald-950/60 text-emerald-400 border border-emerald-800/60 text-[10px] font-mono font-bold px-2.5 py-1 rounded-md">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      {lead.whatsappStatus}
                    </span>
                  </td>

                  <td className="p-4">
                    <span className="inline-flex items-center gap-1.5 bg-zinc-900 text-cyan-400 border border-zinc-800 text-[10px] font-mono font-bold px-2.5 py-1 rounded-md">
                      <Clock className="w-3 h-3 text-cyan-400" />
                      {lead.sheetSyncStatus}
                    </span>
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
