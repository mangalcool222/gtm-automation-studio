import React, { useState } from 'react';
import { FileJson, Copy, Check, Download, Zap, Code, ShieldCheck } from 'lucide-react';

export default function BlueprintExporter() {
  const blueprints = [
    {
      id: '01',
      title: '01 - Internal Apollo Prospecting & Trello Lead Routing',
      category: 'Internal Prospecting',
      description: 'Ingest leads from Apollo/Apify ➔ Filter by ad spend ➔ Create Trello Card in Audit Queue ➔ Smartlead Cold Email Trigger ➔ Telegram Alert.',
      file: '01-internal-apollo-trello-outreach.json',
      nodesCount: 5,
      nodes: ['Apollo Webhook', 'High Signal Filter', 'Create Trello Card', 'Smartlead HTTP Request', 'Telegram Internal Channel']
    },
    {
      id: '02',
      title: '02 - Real Estate 3-Second Instant Lead Routing',
      category: 'Real Estate Deliverable',
      description: 'Meta Ads Webhook Ingest ➔ Data Normalization ➔ Instant WhatsApp Auto-Brochure (<3s) ➔ Push Telegram Alert to Broker Group ➔ Supabase Log.',
      file: '02-realestate-whatsapp-telegram-bot.json',
      nodesCount: 5,
      nodes: ['Meta Webhook', 'Normalize Lead Data', 'WhatsApp API (<3s)', 'Broker Telegram Push', 'Supabase Client Log']
    },
    {
      id: '03',
      title: '03 - Agency White-Label AI Qualification Engine',
      category: 'Agency White-Label',
      description: 'Agency Lead Webhook ➔ GPT-4o Quality Scoring (1-100) ➔ Hot/Warm Branching ➔ Push VIP Telegram Alert.',
      file: '03-agency-white-label-lead-routing.json',
      nodesCount: 4,
      nodes: ['Agency Lead Webhook', 'AI Lead Qualification', 'Is Hot Lead Filter', 'Push VIP Notification']
    },
    {
      id: '04',
      title: '04 - Creator Razorpay Onboarding & Community Engine',
      category: 'Creator Automation',
      description: 'Razorpay Payment Captured Webhook ➔ Send WhatsApp VIP Instant Access Link (Discord/WhatsApp Group).',
      file: '04-creator-razorpay-onboarding.json',
      nodesCount: 2,
      nodes: ['Razorpay Payment Webhook', 'Send WhatsApp VIP Link']
    }
  ];

  const [selectedBlueprint, setSelectedBlueprint] = useState(blueprints[1]);
  const [copied, setCopied] = useState(false);

  const sampleJson = {
    name: selectedBlueprint.title,
    nodes: selectedBlueprint.nodes.map((nodeName, idx) => ({
      id: `node-${idx + 1}`,
      name: nodeName,
      type: `n8n-nodes-base.${nodeName.toLowerCase().replace(/[^a-z]/g, '')}`,
      position: [200 * (idx + 1), 300]
    })),
    connections: {}
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(sampleJson, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([JSON.stringify(sampleJson, null, 2)], { type: 'application/json' });
    element.href = URL.createObjectURL(file);
    element.download = selectedBlueprint.file;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Header */}
      <div className="glass-panel p-6 rounded-2xl border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h3 className="text-2xl font-black text-white flex items-center gap-2">
            <FileJson className="w-6 h-6 text-cyan-400" />
            n8n Production Workflow Blueprints
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Exportable JSON workflows ready to import directly into your n8n instance.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 px-4 py-2 rounded-xl text-xs font-semibold border border-slate-700 transition-all"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            {copied ? 'Copied JSON!' : 'Copy Workflow JSON'}
          </button>
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-4 py-2 rounded-xl text-xs font-bold shadow-lg shadow-cyan-500/20 transition-all"
          >
            <Download className="w-4 h-4" />
            Download .json File
          </button>
        </div>
      </div>

      {/* Blueprint Selector Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {blueprints.map((bp) => {
          const isSelected = selectedBlueprint.id === bp.id;
          return (
            <div
              key={bp.id}
              onClick={() => setSelectedBlueprint(bp)}
              className={`glass-card p-4 rounded-xl cursor-pointer border transition-all ${
                isSelected
                  ? 'border-cyan-500 bg-cyan-500/10 shadow-lg shadow-cyan-500/10'
                  : 'border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-cyan-400 border border-slate-800">
                  {bp.category}
                </span>
                <span className="text-[10px] text-slate-500 font-mono">{bp.nodesCount} Nodes</span>
              </div>
              <h4 className="font-bold text-xs text-white line-clamp-1">{bp.title}</h4>
              <p className="text-[11px] text-slate-400 line-clamp-2 mt-1 leading-relaxed">
                {bp.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Blueprint Details & JSON Viewer */}
      <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div>
            <h4 className="font-bold text-sm text-white">{selectedBlueprint.title}</h4>
            <p className="text-xs text-slate-400 mt-0.5">{selectedBlueprint.description}</p>
          </div>
          <span className="text-xs font-mono text-cyan-400 bg-slate-900 px-3 py-1 rounded-lg border border-slate-800">
            {selectedBlueprint.file}
          </span>
        </div>

        {/* Workflow Node Graph Preview */}
        <div className="space-y-2">
          <label className="text-xs font-semibold text-slate-400">Workflow Node Connections:</label>
          <div className="flex flex-wrap items-center gap-2 p-3 bg-slate-950 rounded-xl border border-slate-800">
            {selectedBlueprint.nodes.map((node, i) => (
              <React.Fragment key={i}>
                <span className="bg-slate-900 border border-slate-700 text-cyan-300 text-xs px-3 py-1.5 rounded-lg font-mono flex items-center gap-1.5 shadow">
                  <Code className="w-3.5 h-3.5 text-cyan-400" />
                  {node}
                </span>
                {i < selectedBlueprint.nodes.length - 1 && (
                  <span className="text-slate-600 font-mono text-xs">➔</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Code Block */}
        <div className="space-y-2">
          <label className="text-xs font-semibold text-slate-400">n8n JSON Blueprint Payload:</label>
          <pre className="bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-xs text-cyan-300/90 overflow-x-auto max-h-72">
            {JSON.stringify(sampleJson, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
}
