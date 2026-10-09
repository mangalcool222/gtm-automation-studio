import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import InteractiveWorkflowDiagram from './components/InteractiveWorkflowDiagram';
import GoogleSheetLiveSync from './components/GoogleSheetLiveSync';
import LiveLeadFinder from './components/LiveLeadFinder';
import LiveLeadSimulator from './components/LiveLeadSimulator';
import ClientLeadDashboard from './components/ClientLeadDashboard';
import RoasCalculator from './components/RoasCalculator';
import BlueprintExporter from './components/BlueprintExporter';
import LoomPitchGenerator from './components/LoomPitchGenerator';
import TrelloApolloSetupGuide from './components/TrelloApolloSetupGuide';

export default function App() {
  const [activeTab, setActiveTab] = useState('workflow');

  const handleStartDemo = () => {
    setActiveTab('simulator');
    const contentEl = document.getElementById('tab-content-root');
    if (contentEl) {
      contentEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#05070e] text-slate-100 font-sans pb-20 relative overflow-hidden">
      {/* Dynamic Ambient Background Lighting */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-b from-cyan-500/15 via-indigo-600/10 to-transparent blur-[140px] pointer-events-none -z-10 rounded-full animate-float-slow" />
      <div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-t from-purple-900/15 via-blue-900/10 to-transparent blur-[160px] pointer-events-none -z-10 rounded-full" />
      
      {/* Background Subtle Grid Texture */}
      <div className="fixed inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none -z-10" />

      {/* Header Navigation */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Area */}
      <main className="space-y-10 pt-2">
        {/* Hero Banner */}
        <HeroSection onStartDemo={handleStartDemo} />

        {/* Scroll Target Anchor for Tabs */}
        <div id="tab-content-root" className="pt-2 scroll-mt-28 transition-all duration-300">
          {activeTab === 'workflow' && <InteractiveWorkflowDiagram />}
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
      <footer className="mt-24 border-t border-white/10 py-10 text-center text-xs text-slate-500 max-w-7xl mx-auto px-6 backdrop-blur-md bg-slate-950/40 rounded-3xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            <span className="font-bold text-slate-300">GTM Studio</span> • Next.js, n8n, Apollo & Supabase Architecture
          </div>
          <div className="font-mono text-[11px] text-cyan-400 bg-cyan-950/50 px-3 py-1 rounded-full border border-cyan-500/20 font-semibold">
            Target Systems Ticket: $1,500 - $3,000 / month (₹1.25L - ₹2.50L)
          </div>
        </div>
      </footer>
    </div>
  );
}


