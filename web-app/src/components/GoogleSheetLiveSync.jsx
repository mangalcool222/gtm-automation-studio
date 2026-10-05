import React, { useState } from 'react';
import { Table, ExternalLink, RefreshCw, CheckCircle2, Zap, FileSpreadsheet, Lock, Key, Copy, Check, Sparkles } from 'lucide-react';

export default function GoogleSheetLiveSync() {
  const [activeSheetTab, setActiveSheetTab] = useState('crm');
  const [copiedAppsScript, setCopiedAppsScript] = useState(false);

  // User's Google Sheet ID: 1b9xhW3LQLFCXSapKBBuGESZuUzBwdVWd6kXLqIqtMkQ
  const sheetId = '1b9xhW3LQLFCXSapKBBuGESZuUzBwdVWd6kXLqIqtMkQ';
  const googleSheetPublicUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/edit?usp=sharing`;

  const tabs = [
    { id: 'crm', name: '📊 Prospect Tracker (CRM)', gid: '0' },
    { id: 'strategy', name: '🎯 Outreach Strategy', gid: '500754279' },
    { id: 'pricing', name: '💰 Service Packages & Pricing', gid: '376309337' },
    { id: 'qualification', name: '⚖️ Client Qualification Scorecard', gid: '889623209' },
  ];

  const currentGid = tabs.find((t) => t.id === activeSheetTab)?.gid || '0';
  const embedUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/htmlembed?gid=${currentGid}&widget=true&headers=false`;

  const appsScriptCode = `
// 5-Line Google Apps Script Webhook (Zero API Key needed!)
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Prospect Tracker (CRM)");
  var data = JSON.parse(e.postData.contents);
  sheet.appendRow([
    new Date(),
    data.name,
    data.company,
    data.email,
    data.phone,
    data.adSpendUsd,
    data.adSpendInr,
    data.niche,
    data.location,
    data.status || "NEW_LEAD"
  ]);
  return ContentService.createTextOutput(JSON.stringify({"status": "SUCCESS"})).setMimeType(ContentService.MimeType.JSON);
}
`;

  const handleCopyAppsScript = () => {
    navigator.clipboard.writeText(appsScriptCode);
    setCopiedAppsScript(true);
    setTimeout(() => setCopiedAppsScript(false), 2000);
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto px-4 sm:px-6">
      
      {/* Top Banner */}
      <div className="glass-panel p-6 rounded-2xl border border-emerald-500/30 bg-slate-900/90 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="bg-emerald-500/20 text-emerald-300 text-[10px] font-mono px-2 py-0.5 rounded font-bold uppercase border border-emerald-500/30">
              Live Google Sheets Auto-Sync Engine
            </span>
            <span className="text-xs text-slate-400 font-mono">Zero Manual Downloads Needed</span>
          </div>
          <h3 className="text-2xl font-black text-white mt-1">
            Real-Time Google Sheets Sync & Live Viewer
          </h3>
          <p className="text-xs text-slate-400">
            Incoming ad leads automatically append to your live Google Sheet without downloading any CSVs.
          </p>
        </div>

        <a
          href={googleSheetPublicUrl}
          target="_blank"
          rel="noreferrer"
          className="bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold px-4 py-2.5 rounded-xl text-xs flex items-center gap-2 shadow-lg shadow-emerald-500/20 transition-all shrink-0"
        >
          <FileSpreadsheet className="w-4 h-4" />
          Open Live Google Sheet Directly
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Tabs Selector for Google Sheet Tabs */}
      <div className="glass-panel p-4 rounded-2xl border border-slate-800 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3 overflow-x-auto">
          <div className="flex items-center gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveSheetTab(tab.id)}
                className={`px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  activeSheetTab === tab.id
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 shadow-md font-extrabold'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>

          <span className="text-[11px] text-emerald-400 font-mono hidden lg:flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            Syncing: ID {sheetId.slice(0, 10)}...
          </span>
        </div>

        {/* Live Google Sheet Embedded Viewer */}
        <div className="w-full h-[520px] rounded-xl overflow-hidden border border-slate-800 bg-white relative">
          <iframe
            title="Google Sheet Live View"
            src={embedUrl}
            className="w-full h-full border-0"
          />
        </div>
      </div>

      {/* API Explanation & Zero-API Setup Box */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Answer to user's question about API */}
        <div className="lg:col-span-6 glass-panel p-6 rounded-2xl border border-slate-800 space-y-3">
          <h4 className="font-bold text-sm text-slate-200 border-b border-slate-800 pb-3 flex items-center gap-2">
            <Key className="w-4 h-4 text-emerald-400" />
            Bhai API Ki Need Hogi Kya? (The Answer)
          </h4>
          
          <div className="space-y-2 text-xs text-slate-300 leading-relaxed">
            <p>
              <strong className="text-emerald-400">NO API KEY NEEDED (Option 1 - Easiest)</strong>:
              Google Sheets ka 5-line ka free <strong>Google Apps Script Webhook</strong> use kar sakte ho. Isse bina kisi complex Google Cloud API key ke, n8n direct Google Sheet mein new row append kar dega!
            </p>
            <p>
              <strong>Google Sheets Official API (Option 2)</strong>:
              n8n ke andar official Google Sheets node ready hai (`n8n-blueprints/05-google-sheets-excel-lead-auto-sync.json`). Bas Google Account connect karo aur Spreadsheet ID paste kar do.
            </p>
          </div>

          <div className="bg-emerald-950/20 p-3 rounded-xl border border-emerald-500/30 text-xs text-emerald-300 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            Leads live append hongi aur kabhi CSV manual download nahi karna padega!
          </div>
        </div>

        {/* Free Google Apps Script Webhook Code */}
        <div className="lg:col-span-6 glass-panel p-6 rounded-2xl border border-slate-800 space-y-3">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h4 className="font-bold text-sm text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              Free 5-Line Google Apps Script Webhook
            </h4>
            <button
              onClick={handleCopyAppsScript}
              className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-1 rounded-lg text-xs font-semibold border border-slate-700 flex items-center gap-1 font-mono cursor-pointer"
            >
              {copiedAppsScript ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              {copiedAppsScript ? 'Copied Code!' : 'Copy Script'}
            </button>
          </div>

          <pre className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 font-mono text-[11px] text-cyan-300 overflow-x-auto">
{appsScriptCode}
          </pre>
          <p className="text-[10px] text-slate-400 font-mono">
            Google Sheets ➔ Extensions ➔ Apps Script ➔ Paste Code ➔ Deploy as Web App!
          </p>
        </div>

      </div>
    </div>
  );
}
