import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import InteractiveWorkflowDiagram from './components/InteractiveWorkflowDiagram';
import LiveLeadSimulator from './components/LiveLeadSimulator';
import GoogleSheetsDatabaseSync from './components/GoogleSheetsDatabaseSync';
import RoasCalculator from './components/RoasCalculator';

export default function App() {
  const [activeTab, setActiveTab] = useState('workflow');

  const handleStartDemo = () => {
    setActiveTab('simulator');
    const contentEl = document.getElementById('client-tab-content');
    if (contentEl) {
      contentEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] text-zinc-100 font-sans pb-16">
      {/* Header Bar */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content */}
      <main className="space-y-8 pt-4">
        {/* Hero Section */}
        <HeroSection onStartDemo={handleStartDemo} />

        {/* Tab Anchor Container */}
        <div id="client-tab-content" className="pt-4 scroll-mt-24 transition-all duration-300">
          {activeTab === 'workflow' && <InteractiveWorkflowDiagram />}
          {activeTab === 'simulator' && <LiveLeadSimulator />}
          {activeTab === 'database' && <GoogleSheetsDatabaseSync />}
          {activeTab === 'calculator' && <RoasCalculator />}
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t border-zinc-800/80 py-8 text-center text-xs text-zinc-500 max-w-7xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="font-bold text-zinc-300">TRACKKARO AI • Technical Systems Studio</span> • High-Ticket Lead Automation Platform
          </div>
          <div className="font-mono text-[11px] text-emerald-400 font-bold">
            Guaranteed &lt; 3-Second Lead Response Time
          </div>
        </div>
      </footer>
    </div>
  );
}
