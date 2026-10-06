import React, { useState } from 'react';
import { ArrowRight, Bot, CheckCircle2, Clock, Code, Database, Globe, MessageSquare, Radio, Send, Sparkles, Zap, ShieldCheck, Settings } from 'lucide-react';

export default function InteractiveWorkflowDiagram() {
  const [selectedNode, setSelectedNode] = useState('whatsapp');
  const [animating, setAnimating] = useState(true);

  const nodes = [
    {
      id: 'webhook',
      name: 'Meta Ads Webhook Ingest',
      category: 'Inbound Data Source',
      latency: '0.2s',
      status: 'ACTIVE',
      icon: Radio,
      color: 'from-cyan-500 to-blue-600 text-cyan-300 border-cyan-500/30',
      description: 'Intercepts incoming lead form submissions from Meta Facebook/Instagram Ads, Webflow, WordPress, or custom React forms instantly.',
      config: {
        endpoint: 'https://gtm.trackkaroai.com/api/webhooks/lead-inbound',
        payloadKeys: ['full_name', 'phone_number', 'email', 'ad_campaign_id', 'budget']
      }
    },
    {
      id: 'ai',
      name: 'GPT-4o Lead Qualifier',
      category: 'AI Scoring Engine',
      latency: '0.7s',
      status: 'ACTIVE',
      icon: Sparkles,
      color: 'from-purple-500 to-indigo-600 text-purple-300 border-purple-500/30',
      description: 'Evaluates buyer budget intent, timeline urgency, and project requirements. Scores lead quality from 1-100 to prioritize high-ticket deals.',
      config: {
        model: 'gpt-4o-mini',
        scoringCriteria: 'Budget > $1M or ₹2.5L ➔ HOT Lead Tag'
      }
    },
    {
      id: 'whatsapp',
      name: 'Instant WhatsApp Brochure API',
      category: 'Customer Conversion',
      latency: '1.4s',
      status: 'ACTIVE',
      icon: MessageSquare,
      color: 'from-emerald-500 to-teal-600 text-emerald-300 border-emerald-500/30',
      description: 'Triggers official Meta WhatsApp Business API auto-reply. Delivers digital property PDF brochure, floorplans, or appointment booking link in under 3 seconds.',
      config: {
        template: 'instant_vip_brochure_v2',
        mediaType: 'PDF Document',
        deliverySpeed: '< 2.5s Guaranteed'
      }
    },
    {
      id: 'telegram',
      name: 'Broker Telegram Sales Alert',
      category: 'Internal Sales Routing',
      latency: '2.1s',
      status: 'ACTIVE',
      icon: Bot,
      color: 'from-sky-500 to-blue-600 text-sky-300 border-sky-500/30',
      description: 'Pushes instant sound notification to sales team or broker Telegram chat group with a 1-click "Call Client" button for zero follow-up lag.',
      config: {
        botName: '@gtm_sales_vip_bot',
        actionButton: 'Direct tel: click handler'
      }
    },
    {
      id: 'sheets',
      name: 'Google Sheets Auto-Sync',
      category: 'Database Logging',
      latency: '2.4s',
      status: 'ACTIVE',
      icon: Database,
      color: 'from-amber-500 to-orange-600 text-amber-300 border-amber-500/30',
      description: 'Appends lead row to live Google Sheet (or Supabase PostgreSQL) automatically without downloading any manual CSV files.',
      config: {
        targetSheet: 'Prospect Tracker (CRM)',
        authMethod: '5-Line Free Apps Script Webhook'
      }
    }
  ];

  const activeNodeData = nodes.find((n) => n.id === selectedNode) || nodes[2];

  return (
    <div className="space-y-6 max-w-7xl mx-auto px-4 sm:px-6">
      
      {/* Top Banner */}
      <div className="glass-panel p-6 rounded-2xl border border-white/10 bg-slate-900/80 backdrop-blur-2xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="bg-cyan-500/10 text-cyan-400 text-[10px] font-mono px-2.5 py-1 rounded-full border border-cyan-500/30 uppercase font-bold tracking-wider">
              System Architecture & Live Pipeline
            </span>
            <span className="text-xs text-slate-400 font-mono">2.4s Total Latency • 100% Automated</span>
          </div>
          <h3 className="text-2xl font-black text-white mt-1.5 tracking-tight">
            Interactive System Workflow Diagram
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            Click on any pipeline node to inspect payload keys, latency metrics, and API parameters.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setAnimating(!animating)}
            className="bg-slate-900 hover:bg-slate-800 text-slate-300 px-3.5 py-2 rounded-xl text-xs font-semibold border border-slate-800 flex items-center gap-2 transition-all cursor-pointer"
          >
            <Zap className={`w-3.5 h-3.5 ${animating ? 'text-cyan-400 animate-pulse' : 'text-slate-500'}`} />
            {animating ? 'Data Pulse: Running' : 'Data Pulse: Paused'}
          </button>
        </div>
      </div>

      {/* Workflow Nodes Visual Diagram */}
      <div className="glass-panel p-8 rounded-2xl border border-white/10 bg-slate-950/90 relative overflow-hidden">
        
        {/* Subtle background mesh grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none" />

        {/* Node Pipeline Flow */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
          {nodes.map((node, i) => {
            const Icon = node.icon;
            const isSelected = selectedNode === node.id;

            return (
              <div key={node.id} className="relative flex flex-col items-center">
                
                {/* Node Box */}
                <div
                  onClick={() => setSelectedNode(node.id)}
                  className={`w-full glass-card p-4 rounded-2xl border cursor-pointer transition-all duration-300 text-center relative group ${
                    isSelected
                      ? `border-cyan-400 bg-slate-900/90 shadow-xl shadow-cyan-500/10 ring-2 ring-cyan-500/40 transform -translate-y-1`
                      : 'border-slate-800/80 hover:border-slate-700 bg-slate-900/40'
                  }`}
                >
                  {/* Category Pill */}
                  <div className="text-[9px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                    {node.category}
                  </div>

                  {/* Icon */}
                  <div className={`w-10 h-10 mx-auto rounded-xl bg-slate-950 border flex items-center justify-center mb-2.5 transition-transform group-hover:scale-110 ${node.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Node Name */}
                  <div className="font-bold text-xs text-white line-clamp-1">{node.name}</div>
                  
                  {/* Latency Tag */}
                  <div className="mt-2 inline-flex items-center gap-1 text-[10px] font-mono text-cyan-400 bg-slate-950 px-2 py-0.5 rounded-md border border-slate-800">
                    <Clock className="w-2.5 h-2.5" /> {node.latency}
                  </div>
                </div>

                {/* Arrow Connector (for desktop) */}
                {i < nodes.length - 1 && (
                  <div className="hidden md:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-20">
                    <div className="w-7 h-7 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500 shadow">
                      <ArrowRight className={`w-3.5 h-3.5 ${animating ? 'text-cyan-400 animate-pulse' : 'text-slate-600'}`} />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>

      {/* Selected Node Details Drawer */}
      <div className="glass-panel p-6 rounded-2xl border border-white/10 bg-slate-900/80 space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-cyan-400 bg-slate-950 px-2.5 py-1 rounded-md border border-slate-800 font-bold uppercase">
                Node ID: {activeNodeData.id}
              </span>
              <span className="text-xs text-slate-400 font-mono">Category: {activeNodeData.category}</span>
            </div>
            <h4 className="text-xl font-black text-white mt-1">{activeNodeData.name}</h4>
          </div>

          <div className="text-right">
            <div className="text-sm font-mono text-emerald-400 font-bold">⚡ Latency: {activeNodeData.latency}</div>
            <div className="text-[10px] text-slate-500 font-mono">Status: {activeNodeData.status}</div>
          </div>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-slate-900">
          {activeNodeData.description}
        </p>

        {/* Config Inspector */}
        <div className="space-y-1.5">
          <div className="text-xs font-bold text-slate-400 flex items-center gap-1.5 font-mono">
            <Code className="w-3.5 h-3.5 text-cyan-400" />
            Node API Configuration Parameters:
          </div>
          <pre className="bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-xs text-cyan-300 overflow-x-auto">
{JSON.stringify(activeNodeData.config, null, 2)}
          </pre>
        </div>
      </div>

    </div>
  );
}
