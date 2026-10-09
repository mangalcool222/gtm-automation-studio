import React from 'react';
import { Cpu, Zap, Radio, Search, LayoutDashboard, Calculator, Network } from 'lucide-react';

export default function Header({ activeTab, setActiveTab }) {
  const tabs = [
    { id: 'workflow', label: 'Live Workflow Diagram', icon: Network },
    { id: 'simulator', label: '3s Lead Simulator', icon: Zap },
    { id: 'finder', label: 'Prospect Finder ($ & ₹)', icon: Search },
    { id: 'dashboard', label: 'Live Client Portal', icon: LayoutDashboard },
    { id: 'calculator', label: 'ROAS Leak Calculator', icon: Calculator },
  ];

  const handleTabClick = (id) => {
    setActiveTab(id);
    const contentEl = document.getElementById('tab-content-root');
    if (contentEl) {
      contentEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#05070e]/75 backdrop-blur-3xl border-b border-white/[0.08] px-4 lg:px-8 py-3 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Apple Minimalist Brand */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-400 via-blue-600 to-indigo-600 p-[1px] shadow-lg shadow-cyan-500/20">
            <div className="w-full h-full bg-[#070a14] rounded-[11px] flex items-center justify-center">
              <Cpu className="w-4 h-4 text-cyan-400" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-extrabold text-base text-white tracking-tight">
                GTM<span className="gradient-text-cyan font-black">STUDIO</span>
              </h1>
              <span className="bg-cyan-500/10 text-cyan-300 text-[9px] font-mono px-2 py-0.5 rounded-full border border-cyan-500/20 font-semibold tracking-wider uppercase">
                Enterprise Studio
              </span>
            </div>
            <p className="text-[11px] text-slate-400 font-medium">ROAS Revenue Leak & Systems Automation Studio</p>
          </div>
        </div>

        {/* Apple-style Segmented Control Navigation Bar */}
        <nav className="flex items-center gap-1 bg-slate-950/70 p-1 rounded-2xl border border-white/10 max-w-full overflow-x-auto scrollbar-none backdrop-blur-2xl shadow-inner">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white shadow-md shadow-cyan-500/25 ring-1 ring-white/20 font-bold'
                    : 'text-slate-400 hover:text-slate-100 hover:bg-white/[0.06]'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                {tab.label}
              </button>
            );
          })}
        </nav>

        {/* Live Status Indicator Pill */}
        <div className="hidden xl:flex items-center gap-2 bg-emerald-500/[0.08] border border-emerald-500/20 px-3.5 py-1.5 rounded-full text-xs text-emerald-400 font-medium font-mono shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
          </span>
          n8n Webhook Pipeline Active
        </div>

      </div>
    </header>
  );
}

