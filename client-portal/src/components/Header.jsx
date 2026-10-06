import React from 'react';
import { Cpu, Network, Zap, Table, Calculator, ShieldCheck } from 'lucide-react';

export default function Header({ activeTab, setActiveTab }) {
  const tabs = [
    { id: 'workflow', label: '⚡ Live Workflow Diagram', icon: Network },
    { id: 'simulator', label: '📱 3-Second Lead Simulator', icon: Zap },
    { id: 'database', label: '📊 Real-Time CRM & Sheet Sync', icon: Table },
    { id: 'calculator', label: '💰 ROAS Leak Calculator', icon: Calculator },
  ];

  const handleTabClick = (id) => {
    setActiveTab(id);
    const contentEl = document.getElementById('client-tab-content');
    if (contentEl) {
      contentEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#030712]/90 backdrop-blur-2xl border-b border-zinc-800/80 px-4 lg:px-8 py-3.5 transition-all">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Futuristic Obsidian Brand */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-zinc-700 via-zinc-900 to-black p-0.5 shadow-md shadow-white/5 border border-zinc-700/50 flex items-center justify-center">
            <Cpu className="w-5 h-5 text-white animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-extrabold text-base tracking-wider text-white">
                TRACKKARO <span className="text-zinc-400 font-normal">AI</span>
              </h1>
              <span className="bg-zinc-900 text-zinc-300 text-[9px] font-mono px-2 py-0.5 rounded-full border border-zinc-700 font-bold uppercase tracking-widest">
                CLIENT PORTAL
              </span>
            </div>
            <p className="text-[11px] text-zinc-400 font-medium">High-Ticket Lead Automation & Systems Architecture</p>
          </div>
        </div>

        {/* Apple/Vercel Minimalist Tab Bar */}
        <nav className="flex items-center gap-1.5 bg-zinc-950/80 p-1.5 rounded-xl border border-zinc-800/80 overflow-x-auto max-w-full scrollbar-none">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-zinc-800 text-white shadow-md border border-zinc-700 scale-[1.02]'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/60'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-cyan-400' : 'text-zinc-500'}`} />
                {tab.label}
              </button>
            );
          })}
        </nav>

        {/* Live Systems Badge */}
        <div className="hidden xl:flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full text-xs text-emerald-400 font-mono">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          n8n & Meta WhatsApp API Active
        </div>

      </div>
    </header>
  );
}
