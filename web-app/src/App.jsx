import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import GoogleSheetLiveSync from './components/GoogleSheetLiveSync';
import LiveLeadFinder from './components/LiveLeadFinder';
import LiveLeadSimulator from './components/LiveLeadSimulator';
import ClientLeadDashboard from './components/ClientLeadDashboard';
import RoasCalculator from './components/RoasCalculator';
import BlueprintExporter from './components/BlueprintExporter';
import LoomPitchGenerator from './components/LoomPitchGenerator';
import TrelloApolloSetupGuide from './components/TrelloApolloSetupGuide';

export default function App() {
  const [activeTab, setActiveTab] = useState('finder');

  const handleStartDemo = () => {
    setActiveTab('simulator');
    const contentEl = document.getElementById('tab-content-root');
    if (contentEl) {
      contentEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 font-sans pb-16">
      {/* Header Navigation */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Area */}
      <main className="space-y-8 pt-4">
        {/* Hero Banner */}
        <HeroSection onStartDemo={handleStartDemo} />

        {/* Scroll Target Anchor for Tabs */}
        <div id="tab-content-root" className="pt-4 scroll-mt-24 transition-all duration-300">
          {activeTab === 'sheet' && <GoogleSheetLiveSync />}
          {activeTab === 'finder' && <LiveLeadFinder />}
          {activeTab === 'simulator' && <LiveLeadSimulator />}
          {activeTab === 'dashboard' && <ClientLeadDashboard />}
          {activeTab === 'blueprints' && <BlueprintExporter />}
          {activeTab === 'calculator' && <RoasCalculator />}
          {activeTab === 'loom' && <LoomPitchGenerator />}
          {activeTab === 'trello' && <TrelloApolloSetupGuide />}
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t border-slate-800/80 py-8 text-center text-xs text-slate-500 max-w-7xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="font-bold text-slate-300">GTM Technical Systems Studio</span> • Built with Next.js, n8n, Apollo & Supabase architecture
          </div>
          <div className="font-mono text-[11px] text-cyan-400">
            Target Retainers: $1,500 - $3,000 / month
          </div>
        </div>
      </footer>
    </div>
  );
}
