import React from 'react';
import { Search, Zap, ShieldCheck, Cpu, Code2, Calculator, LayoutDashboard, FileJson, Video, Kanban } from 'lucide-react';

export default function Header({ activeTab, setActiveTab }) {
  const tabs = [
    { id: 'finder', label: '🔍 Find Leads Now (Apollo)', icon: Search },
    { id: 'simulator', label: '⚡ Live 3s Lead Simulator', icon: Zap },
    { id: 'dashboard', label: '📊 White-Label Client Portal', icon: LayoutDashboard },
    { id: 'blueprints', label: '📦 n8n Blueprint Exporter', icon: FileJson },
    { id: 'calculator', label: '💰 ROAS Leak Calculator', icon: Calculator },
    { id: 'loom', label: '🎥 90s Loom Script Generator', icon: Video },
    { id: 'trello', label: '📋 Trello & Apollo Setup', icon: Kanban },
  ];

  const handleTabClick = (id) => {
    setActiveTab(id);
    const contentEl = document.getElementById('tab-content-root');
    if (contentEl) {
      contentEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="sticky top-0 z-50 glass-panel border-b border-slate-800 px-4 lg:px-8 py-3.5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-600 p-0.5 shadow-lg shadow-cyan-500/20">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
              <Cpu className="w-5 h-5 text-cyan-400 animate-pulse" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-extrabold text-lg text-white tracking-tight">
                GTM<span className="gradient-text-cyan">STUDIO</span>
              </h1>
              <span className="bg-cyan-500/10 text-cyan-400 text-[10px] font-mono px-2 py-0.5 rounded-full border border-cyan-500/20 font-semibold uppercase tracking-wider">
                v2.0 Hybrid Engine
              </span>
            </div>
            <p className="text-xs text-slate-400 font-medium">ROAS Revenue Leak & Systems Automation Studio</p>
          </div>
        </div>

        {/* Tab Buttons */}
        <nav className="flex items-center gap-1.5 bg-slate-900/90 p-1.5 rounded-xl border border-slate-800 overflow-x-auto max-w-full scrollbar-thin">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white shadow-lg shadow-cyan-500/25 ring-1 ring-cyan-400/50'
                    : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/80'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                {tab.label}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
