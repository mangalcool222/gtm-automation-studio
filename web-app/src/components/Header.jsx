import React from 'react';
import { Cpu, Zap, Radio, Search, LayoutDashboard, Calculator, Network } from 'lucide-react';

export default function Header({ activeTab, setActiveTab }) {
  const tabs = [
    { id: 'workflow', label: '⚡ Live Workflow Diagram', icon: Network },
    { id: 'simulator', label: '📱 Live 3s Lead Simulator', icon: Zap },
    { id: 'finder', label: '🔍 Prospect Finder ($ & ₹)', icon: Search },
    { id: 'dashboard', label: '📊 Live Sheets & Client Portal', icon: LayoutDashboard },
    { id: 'calculator', label: '💰 ROAS Leak Calculator', icon: Calculator },
  ];

  const handleTabClick = (id) => {
    setActiveTab(id);
    const contentEl = document.getElementById('tab-content-root');
    if (contentEl) {
      contentEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#070a12]/80 backdrop-blur-2xl border-b border-white/10 px-4 lg:px-8 py-3.5 transition-all">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Apple Minimalist Brand */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 p-0.5 shadow-lg shadow-cyan-500/20">
            <div className="w-full h-full bg-[#070a12] rounded-[14px] flex items-center justify-center">
              <Cpu className="w-5 h-5 text-cyan-400 animate-pulse" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-black text-lg text-white tracking-tight">
                GTM<span className="gradient-text-cyan">STUDIO</span>
              </h1>
              <span className="bg-white/5 text-cyan-300 text-[9px] font-mono px-2 py-0.5 rounded-full border border-white/10 font-bold uppercase tracking-wider">
                Silicon Valley Studio
              </span>
            </div>
            <p className="text-xs text-slate-400 font-medium">ROAS Revenue Leak & Systems Automation Studio</p>
          </div>
        </div>

        {/* Apple-style Tab Navigation Bar */}
        <nav className="flex items-center gap-1.5 bg-slate-900/60 p-1.5 rounded-2xl border border-white/10 overflow-x-auto max-w-full scrollbar-none backdrop-blur-xl">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white shadow-lg shadow-cyan-500/25 ring-1 ring-cyan-400/50 scale-[1.02]'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                {tab.label}
              </button>
            );
          })}
        </nav>

        {/* Live Status Indicator */}
        <div className="hidden xl:flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1.5 rounded-full text-xs text-emerald-400 font-medium font-mono shadow-inner">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          n8n & Webhooks Online
        </div>

      </div>
    </header>
  );
}
