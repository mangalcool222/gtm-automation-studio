import React, { useState } from 'react';
import { ArrowRight, Bot, Clock, Code, Database, MessageSquare, Radio, Sparkles, Zap, ShieldCheck } from 'lucide-react';

export default function InteractiveWorkflowDiagram() {
  const [selectedNode, setSelectedNode] = useState('whatsapp');
  const [isPulseActive, setIsPulseActive] = useState(true);

  const nodes = [
    {
      id: 'webhook',
      name: 'Meta Ads Webhook Ingest',
      category: 'Stage 1: Lead Intercept',
      latency: '0.2s',
      status: 'ONLINE',
      icon: Radio,
      color: 'border-zinc-700 bg-zinc-900 text-cyan-400',
      description: 'Intercepts incoming Meta Facebook & Instagram Ad lead submissions instantly via high-speed n8n webhooks.',
      config: {
        endpoint: 'https://gtm.trackkaroai.com/api/webhooks/lead-inbound',
        interceptSpeed: '0.2 seconds',
        parameters: ['full_name', 'phone_number', 'email', 'budget_range', 'target_project']
      }
    },
    {
      id: 'ai',
      name: 'GPT-4o Intent Qualifier',
      category: 'Stage 2: AI Intent Scoring',
      latency: '0.7s',
      status: 'ONLINE',
      icon: Sparkles,
      color: 'border-zinc-700 bg-zinc-900 text-purple-400',
      description: 'Evaluates lead urgency, target budget, and buyer intent. Scores leads automatically from 1-100 to prioritize high-value prospects.',
      config: {
        aiModel: 'GPT-4o-mini',
        intentScoring: 'Budget > $500k / ₹1Cr ➔ High-Intent VIP Tag',
        evaluationTime: '0.5 seconds'
      }
    },
    {
      id: 'whatsapp',
      name: 'Instant WhatsApp VIP Brochure',
      category: 'Stage 3: Customer Nurture',
      latency: '1.4s',
      status: 'ONLINE',
      icon: MessageSquare,
      color: 'border-zinc-700 bg-zinc-900 text-emerald-400',
      description: 'Sends automated official Meta WhatsApp Business message with digital PDF brochure, floorplans, and direct appointment booking trigger within 3 seconds.',
      config: {
        templateName: 'vip_property_brochure_instant',
        deliveryChannel: 'Meta WhatsApp Business Cloud API',
        latencyTarget: '< 2.5 seconds guaranteed'
      }
    },
    {
      id: 'telegram',
      name: 'Broker Telegram VIP Alert',
      category: 'Stage 4: Sales Team Alert',
      latency: '2.1s',
      status: 'ONLINE',
      icon: Bot,
      color: 'border-zinc-700 bg-zinc-900 text-sky-400',
      description: 'Pushes instant sound notification to sales brokers or telegram channel with 1-click direct call button to call client within 60 seconds.',
      config: {
        channel: 'Broker Sales VIP Bot Channel',
        directAction: 'Clickable tel: phone link',
        leadPriority: 'HOT BUYER'
      }
    },
    {
      id: 'sheets',
      name: 'Google Sheets / CRM Auto-Sync',
      category: 'Stage 5: Database Logging',
      latency: '2.4s',
      status: 'ONLINE',
      icon: Database,
      color: 'border-zinc-700 bg-zinc-900 text-amber-400',
      description: 'Appends lead details directly to your live Google Sheet database without downloading any CSV files manually.',
      config: {
        databaseTarget: 'Master Lead Database (Google Sheets)',
        syncMode: 'Real-time REST Webhook',
        fieldsSynced: 12
      }
    }
  ];

  const activeNode = nodes.find((n) => n.id === selectedNode) || nodes[2];

  return (
    <div className="space-y-6 max-w-7xl mx-auto px-4 sm:px-6">
      
      {/* Title Panel */}
      <div className="glass-panel p-6 rounded-2xl border border-zinc-800 bg-zinc-950/90 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="bg-zinc-900 text-zinc-300 text-[10px] font-mono px-2.5 py-1 rounded-md border border-zinc-800 uppercase font-bold tracking-wider">
              System Architecture & Live Flow
            </span>
            <span className="text-xs text-zinc-400 font-mono">Total Latency: 2.4 Seconds • 100% Automated</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mt-2">
            Interactive 3-Second Technical Workflow
          </h3>
          <p className="text-xs text-zinc-400 mt-1">
            Click on any pipeline node below to inspect parameters, payload keys, and response speeds.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPulseActive(!isPulseActive)}
            className="bg-zinc-900 hover:bg-zinc-800 text-zinc-300 px-3.5 py-2 rounded-xl text-xs font-semibold border border-zinc-800 flex items-center gap-2 transition-all cursor-pointer"
          >
            <Zap className={`w-3.5 h-3.5 ${isPulseActive ? 'text-emerald-400 animate-pulse' : 'text-zinc-500'}`} />
            {isPulseActive ? 'Pipeline: Active' : 'Pipeline: Paused'}
          </button>
        </div>
      </div>

      {/* Nodes Visual Diagram */}
      <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-zinc-800 bg-zinc-950/90 relative overflow-hidden">
        
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
          {nodes.map((node, i) => {
            const Icon = node.icon;
            const isSelected = selectedNode === node.id;

            return (
              <div key={node.id} className="relative flex flex-col items-center">
                
                <div
                  onClick={() => setSelectedNode(node.id)}
                  className={`w-full glass-card p-4 rounded-xl border cursor-pointer transition-all duration-300 text-center relative group ${
                    isSelected
                      ? 'border-white bg-zinc-900 shadow-xl ring-2 ring-white/20 transform -translate-y-1'
                      : 'border-zinc-800/80 hover:border-zinc-700 bg-zinc-950/60'
                  }`}
                >
                  <div className="text-[9px] font-mono text-zinc-400 uppercase tracking-wider mb-2">
                    {node.category}
                  </div>

                  <div className={`w-10 h-10 mx-auto rounded-xl border flex items-center justify-center mb-2.5 transition-transform group-hover:scale-105 ${node.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="font-bold text-xs text-white line-clamp-1">{node.name}</div>
                  
                  <div className="mt-2 inline-flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
                    <Clock className="w-2.5 h-2.5" /> {node.latency}
                  </div>
                </div>

                {i < nodes.length - 1 && (
                  <div className="hidden md:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-20">
                    <div className="w-7 h-7 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 shadow">
                      <ArrowRight className={`w-3.5 h-3.5 ${isPulseActive ? 'text-cyan-400 animate-pulse' : 'text-zinc-600'}`} />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>

      {/* Selected Node Drawer */}
      <div className="glass-panel p-6 rounded-2xl border border-zinc-800 bg-zinc-950/90 space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-zinc-800 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-white bg-zinc-900 px-2.5 py-1 rounded border border-zinc-800 font-bold uppercase">
                NODE ID: {activeNode.id}
              </span>
              <span className="text-xs text-zinc-400 font-mono">{activeNode.category}</span>
            </div>
            <h4 className="text-xl font-bold text-white mt-1">{activeNode.name}</h4>
          </div>

          <div className="text-right">
            <div className="text-sm font-mono text-emerald-400 font-bold">⚡ Latency: {activeNode.latency}</div>
            <div className="text-[10px] text-zinc-400 font-mono">Status: {activeNode.status}</div>
          </div>
        </div>

        <p className="text-xs text-zinc-300 leading-relaxed bg-zinc-900/60 p-4 rounded-xl border border-zinc-800">
          {activeNode.description}
        </p>

        <div className="space-y-1.5">
          <div className="text-xs font-bold text-zinc-400 flex items-center gap-1.5 font-mono">
            <Code className="w-3.5 h-3.5 text-cyan-400" />
            API & Parameter Configuration:
          </div>
          <pre className="bg-zinc-900 p-4 rounded-xl border border-zinc-800 font-mono text-xs text-cyan-300 overflow-x-auto">
{JSON.stringify(activeNode.config, null, 2)}
          </pre>
        </div>
      </div>

    </div>
  );
}
