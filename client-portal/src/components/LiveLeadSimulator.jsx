import React, { useState } from 'react';
import { ArrowRight, Bot, CheckCircle2, Clock, Cpu, MessageSquare, Play, Send, ShieldCheck, Sparkles, UserCheck, Zap, Radio, Database } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function LiveLeadSimulator() {
  const [formData, setFormData] = useState({
    name: 'Alexander Wright',
    phone: '+971 50 987 6543',
    email: 'alexander@dubai-investor.ae',
    budgetUSD: '$850,000 - $1.5M',
    budgetINR: '₹7.0 Cr - ₹12.5 Cr',
    project: 'Dubai Marina Luxury Off-Plan Penthouse',
  });

  const [currencyMode, setCurrencyMode] = useState('USD');
  const [pipelineState, setPipelineState] = useState('idle'); // idle | processing | complete
  const [activeNodeStep, setActiveNodeStep] = useState(0); // 0: idle, 1: webhook, 2: ai, 3: whatsapp, 4: telegram, 5: sheet
  const [logs, setLogs] = useState([]);

  const handleTriggerPipeline = () => {
    setPipelineState('processing');
    setActiveNodeStep(1);
    setLogs([]);

    const timestamp = new Date().toLocaleTimeString();

    // Step 1: Webhook Ingestion (0.2s)
    setTimeout(() => {
      setActiveNodeStep(1);
      setLogs((prev) => [...prev, `[${timestamp}] ⚡ [0.2s] Meta Ad Webhook Ingested: ${formData.name}`]);
    }, 200);

    // Step 2: GPT-4o Intent Scoring (0.7s)
    setTimeout(() => {
      setActiveNodeStep(2);
      setLogs((prev) => [
        ...prev,
        `[${timestamp}] 🤖 [0.7s] GPT-4o Intent Score: 98/100 (HIGH-INTENT VIP BUYER)`,
      ]);
    }, 700);

    // Step 3: WhatsApp VIP Brochure Trigger (1.4s)
    setTimeout(() => {
      setActiveNodeStep(3);
      setLogs((prev) => [
        ...prev,
        `[${timestamp}] 💬 [1.4s] Meta WhatsApp Cloud API: Delivered PDF Brochure to ${formData.phone}`,
      ]);
    }, 1400);

    // Step 4: Broker Telegram Sound Alert (2.1s)
    setTimeout(() => {
      setActiveNodeStep(4);
      setLogs((prev) => [
        ...prev,
        `[${timestamp}] 📢 [2.1s] Telegram Alert Pushed to Sales Team Channel`,
      ]);
    }, 2100);

    // Step 5: Google Sheet Live Log (2.4s)
    setTimeout(() => {
      setActiveNodeStep(5);
      setLogs((prev) => [
        ...prev,
        `[${timestamp}] 📊 [2.4s] Google Sheets Database Auto-Synced!`,
      ]);
      setPipelineState('complete');

      try {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch (e) {
        // ignore
      }
    }, 2400);
  };

  const handleReset = () => {
    setPipelineState('idle');
    setActiveNodeStep(0);
    setLogs([]);
  };

  const workflowSteps = [
    { id: 1, label: 'Meta Webhook', latency: '0.2s', icon: Radio },
    { id: 2, label: 'GPT-4o Scoring', latency: '0.7s', icon: Sparkles },
    { id: 3, label: 'WhatsApp PDF', latency: '1.4s', icon: MessageSquare },
    { id: 4, label: 'Telegram Alert', latency: '2.1s', icon: Bot },
    { id: 5, label: 'Sheet Auto-Sync', latency: '2.4s', icon: Database },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      
      {/* Top Header / Branding Bar */}
      <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-zinc-950/90 p-4 rounded-2xl border border-zinc-800 shadow-2xl">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-zinc-700 via-zinc-900 to-black p-0.5 shadow-md border border-zinc-700/60 flex items-center justify-center">
            <Cpu className="w-5 h-5 text-white animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-extrabold text-base tracking-wider text-white">
                TRACKKARO <span className="text-zinc-400 font-normal">AI</span>
              </h1>
              <span className="bg-zinc-900 text-zinc-300 text-[9px] font-mono px-2 py-0.5 rounded-full border border-zinc-700 font-bold uppercase tracking-widest">
                SYSTEMS ENGINE
              </span>
            </div>
            <p className="text-[11px] text-zinc-400 font-medium">3-Second Lead Routing & Follow-Up Automation</p>
          </div>
        </div>

        {/* Status Badge & Currency Switcher */}
        <div className="flex items-center gap-3">
          <div className="flex items-center bg-zinc-900 p-1 rounded-xl border border-zinc-800">
            <button
              onClick={() => setCurrencyMode('USD')}
              className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                currencyMode === 'USD' ? 'bg-zinc-800 text-white shadow' : 'text-zinc-400'
              }`}
            >
              🇺🇸 USD ($)
            </button>
            <button
              onClick={() => setCurrencyMode('INR')}
              className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                currencyMode === 'INR' ? 'bg-zinc-800 text-white shadow' : 'text-zinc-400'
              }`}
            >
              🇮🇳 INR (₹)
            </button>
          </div>

          <div className="hidden md:flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full text-xs text-emerald-400 font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            Meta API Online
          </div>
        </div>
      </header>

      {/* Hero Headline Box */}
      <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-zinc-800 bg-zinc-950/90 text-center space-y-3 relative overflow-hidden">
        <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-3.5 py-1 rounded-full text-xs font-mono text-zinc-300">
          <Zap className="w-3.5 h-3.5 text-cyan-400" />
          <span>Real-Time Webhook Automation Engine</span>
          <span className="text-zinc-600">•</span>
          <span className="text-emerald-400 font-bold">&lt; 3-Second Guaranteed Latency</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          3-Second Interactive Lead Simulator
        </h2>
        
        <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          Submit a test lead below to see how our automation engine instantly receives Meta Ad form data, generates WhatsApp VIP brochures, and alerts your sales team on Telegram in under 3 seconds.
        </p>

        {/* Workflow Node Step Progress Bar */}
        <div className="pt-4 max-w-4xl mx-auto grid grid-cols-5 gap-2">
          {workflowSteps.map((step) => {
            const Icon = step.icon;
            const isActive = activeNodeStep >= step.id;
            const isCurrent = activeNodeStep === step.id;

            return (
              <div
                key={step.id}
                className={`p-2.5 rounded-xl border text-center transition-all duration-300 ${
                  isCurrent
                    ? 'border-white bg-zinc-900 shadow-lg scale-105'
                    : isActive
                    ? 'border-emerald-500/40 bg-zinc-950 text-emerald-400'
                    : 'border-zinc-800/80 bg-zinc-950/40 text-zinc-600'
                }`}
              >
                <Icon className={`w-4 h-4 mx-auto mb-1 ${isCurrent ? 'text-cyan-400 animate-bounce' : isActive ? 'text-emerald-400' : 'text-zinc-600'}`} />
                <div className="text-[10px] font-bold truncate text-white">{step.label}</div>
                <div className="text-[9px] font-mono text-zinc-400 mt-0.5">{step.latency}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Grid: Form (4 cols) & Mock Screens (8 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Test Lead Form */}
        <div className="lg:col-span-4 space-y-4">
          <div className="glass-panel p-5 rounded-2xl border border-zinc-800 bg-zinc-950/90 space-y-4">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
              <span className="text-xs font-bold text-white flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-cyan-400" />
                Submit Test Lead (Meta Ad Form)
              </span>
              <span className="text-[10px] font-mono text-zinc-500">Inbound Webhook</span>
            </div>

            <div className="space-y-3">
              <div>
                <label className="text-[11px] font-mono text-zinc-400">Prospect Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full mt-1 bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-white transition-all font-medium"
                />
              </div>

              <div>
                <label className="text-[11px] font-mono text-zinc-400">WhatsApp Phone Number</label>
                <input
                  type="text"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full mt-1 bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-white transition-all font-mono"
                />
              </div>

              <div>
                <label className="text-[11px] font-mono text-zinc-400">Target Project / Interest</label>
                <input
                  type="text"
                  value={formData.project}
                  onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                  className="w-full mt-1 bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-white transition-all font-medium"
                />
              </div>

              <div>
                <label className="text-[11px] font-mono text-zinc-400">Target Investment Budget</label>
                <input
                  type="text"
                  value={currencyMode === 'USD' ? formData.budgetUSD : formData.budgetINR}
                  onChange={(e) =>
                    currencyMode === 'USD'
                      ? setFormData({ ...formData, budgetUSD: e.target.value })
                      : setFormData({ ...formData, budgetINR: e.target.value })
                  }
                  className="w-full mt-1 bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-white transition-all font-mono"
                />
              </div>
            </div>

            {/* Submit Trigger Button */}
            <div className="pt-2">
              {pipelineState === 'processing' ? (
                <button
                  disabled
                  className="w-full bg-zinc-800 text-zinc-400 font-bold py-3 rounded-xl text-xs flex items-center justify-center gap-2 cursor-wait border border-zinc-700"
                >
                  <Zap className="w-4 h-4 text-cyan-400 animate-spin" />
                  Executing 3-Second Workflow...
                </button>
              ) : pipelineState === 'complete' ? (
                <button
                  onClick={handleReset}
                  className="w-full bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-3 rounded-xl text-xs flex items-center justify-center gap-2 transition-all cursor-pointer border border-zinc-700"
                >
                  Reset & Test Again
                </button>
              ) : (
                <button
                  onClick={handleTriggerPipeline}
                  className="w-full bg-white hover:bg-zinc-200 text-zinc-950 font-bold py-3 rounded-xl text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg shadow-white/10"
                >
                  <Play className="w-4 h-4 fill-current" />
                  Trigger 3-Second Automated Pipeline
                </button>
              )}
            </div>
          </div>

          {/* Real-time Execution Logs Card */}
          <div className="glass-panel p-4 rounded-2xl border border-zinc-800 bg-zinc-950/90 space-y-2">
            <div className="text-xs font-bold text-zinc-400 font-mono flex items-center justify-between">
              <span>Execution System Logs:</span>
              <span className="text-emerald-400 text-[10px] font-mono">{pipelineState === 'complete' ? 'COMPLETE (2.4s)' : 'READY'}</span>
            </div>

            <div className="bg-zinc-900 p-3 rounded-xl border border-zinc-800 font-mono text-[11px] text-zinc-300 space-y-1.5 min-h-[110px] max-h-[160px] overflow-y-auto">
              {logs.length === 0 ? (
                <div className="text-zinc-600 text-center py-8">Awaiting form submission trigger...</div>
              ) : (
                logs.map((log, i) => (
                  <div key={i} className="text-emerald-400 leading-snug">
                    {log}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Side-by-Side Live Previews */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* WhatsApp Live Preview Screen */}
          <div className="glass-panel p-5 rounded-2xl border border-zinc-800 bg-zinc-950/90 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                <span className="text-xs font-bold text-emerald-400 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  Client's WhatsApp (&lt; 3s Auto-Reply)
                </span>
                <span className="text-[10px] font-mono text-zinc-500">Official Meta API</span>
              </div>

              {pipelineState === 'complete' ? (
                <div className="mt-4 space-y-3 bg-zinc-900/90 p-4 rounded-xl border border-zinc-800">
                  <div className="text-[10px] font-mono text-zinc-500 text-center">
                    Today • {new Date().toLocaleTimeString()}
                  </div>

                  <div className="bg-emerald-950/40 border border-emerald-500/20 p-3.5 rounded-xl text-xs space-y-2.5 text-zinc-200">
                    <div className="font-bold text-emerald-400 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4" /> VIP Property Brochure Delivered
                    </div>
                    <p className="leading-relaxed">
                      Hello <strong className="text-white">{formData.name}</strong>, thank you for requesting details for{' '}
                      <strong className="text-white">{formData.project}</strong> ({currencyMode === 'USD' ? formData.budgetUSD : formData.budgetINR}).
                    </p>
                    <div className="bg-zinc-900 p-2.5 rounded-lg border border-zinc-800 text-[11px] font-mono flex items-center justify-between">
                      <span className="text-zinc-300">📄 VIP_Brochure_Floorplan_2026.pdf</span>
                      <span className="text-emerald-400 text-[10px] font-bold">DOWNLOAD</span>
                    </div>
                    <p className="text-[11px] text-zinc-400 pt-1">
                      Our Senior Director will connect with you shortly. Or click below to confirm your viewing schedule:
                    </p>
                    <a
                      href={`https://wa.me/?text=Hi%20I%20am%20${encodeURIComponent(formData.name)}%20interested%20in%20${encodeURIComponent(formData.project)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="block text-center bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2 rounded-lg text-xs transition-all mt-2"
                    >
                      💬 Click to Confirm Viewing on WhatsApp
                    </a>
                  </div>
                </div>
              ) : (
                <div className="mt-12 text-center text-zinc-600 py-12 text-xs font-mono">
                  Awaiting test form trigger...
                </div>
              )}
            </div>

            <div className="text-[10px] text-zinc-500 font-mono text-center pt-2 border-t border-zinc-900">
              Trigger Speed: &lt; 1.4s • Zero Manual Work
            </div>
          </div>

          {/* Telegram Live Preview Screen */}
          <div className="glass-panel p-5 rounded-2xl border border-zinc-800 bg-zinc-950/90 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                <span className="text-xs font-bold text-sky-400 flex items-center gap-2">
                  <Bot className="w-4 h-4" />
                  Sales Team Telegram Channel
                </span>
                <span className="text-[10px] font-mono text-zinc-500">Real-Time Alert</span>
              </div>

              {pipelineState === 'complete' ? (
                <div className="mt-4 space-y-3 bg-zinc-900/90 p-4 rounded-xl border border-zinc-800">
                  <div className="text-[10px] font-mono text-sky-400 text-center font-bold">
                    🔔 HOT BUYER ALERT • SOUND NOTIFICATION
                  </div>

                  <div className="bg-sky-950/40 border border-sky-500/20 p-3.5 rounded-xl text-xs space-y-2 text-zinc-200">
                    <div className="font-bold text-white flex items-center justify-between">
                      <span>👤 {formData.name}</span>
                      <span className="bg-emerald-500/20 text-emerald-400 text-[10px] px-2 py-0.5 rounded font-mono font-bold">
                        SCORE: 98/100
                      </span>
                    </div>
                    <div className="text-[11px] font-mono text-zinc-300 space-y-1">
                      <div>📍 Project: {formData.project}</div>
                      <div>💰 Budget: {currencyMode === 'USD' ? formData.budgetUSD : formData.budgetINR}</div>
                      <div>📧 Email: {formData.email}</div>
                      <div>📞 Phone: {formData.phone}</div>
                    </div>
                    <a
                      href={`tel:${formData.phone}`}
                      className="block text-center bg-sky-600 hover:bg-sky-500 text-white font-bold py-2 rounded-lg text-xs transition-all mt-2"
                    >
                      📞 Click to Call Buyer Now
                    </a>
                  </div>
                </div>
              ) : (
                <div className="mt-12 text-center text-zinc-600 py-12 text-xs font-mono">
                  Broker alert idle...
                </div>
              )}
            </div>

            <div className="text-[10px] text-zinc-500 font-mono text-center pt-2 border-t border-zinc-900">
              Pushed to Team Telegram Channel in 2.1s
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
