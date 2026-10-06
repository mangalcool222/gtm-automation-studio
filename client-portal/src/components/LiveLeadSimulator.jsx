import React, { useState } from 'react';
import { ArrowRight, Bot, CheckCircle2, Clock, MessageSquare, Play, Send, ShieldCheck, UserCheck, Zap } from 'lucide-react';
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
  const [logs, setLogs] = useState([]);

  const handleTriggerPipeline = () => {
    setPipelineState('processing');
    setLogs([]);

    const timestamp = new Date().toLocaleTimeString();

    // Step 1: Webhook Ingestion (0.2s)
    setTimeout(() => {
      setLogs((prev) => [...prev, `[${timestamp}] ⚡ [0.2s] Meta Ad Webhook Ingested: ${formData.name}`]);
    }, 200);

    // Step 2: GPT-4o Intent Scoring (0.7s)
    setTimeout(() => {
      setLogs((prev) => [
        ...prev,
        `[${timestamp}] 🤖 [0.7s] GPT-4o Intent Score: 98/100 (HIGH-INTENT VIP BUYER)`,
      ]);
    }, 700);

    // Step 3: WhatsApp VIP Brochure Trigger (1.4s)
    setTimeout(() => {
      setLogs((prev) => [
        ...prev,
        `[${timestamp}] 💬 [1.4s] Meta WhatsApp Cloud API: Sent PDF Brochure to ${formData.phone}`,
      ]);
    }, 1400);

    // Step 4: Broker Telegram Sound Alert (2.1s)
    setTimeout(() => {
      setLogs((prev) => [
        ...prev,
        `[${timestamp}] 📢 [2.1s] Telegram Alert Pushed to Sales Broker Channel`,
      ]);
    }, 2100);

    // Step 5: Google Sheet Live Log (2.4s)
    setTimeout(() => {
      setLogs((prev) => [
        ...prev,
        `[${timestamp}] 📊 [2.4s] Google Sheets Database Synced Successfully!`,
      ]);
      setPipelineState('complete');

      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.6 },
        });
      } catch (e) {
        // ignore
      }
    }, 2400);
  };

  const handleReset = () => {
    setPipelineState('idle');
    setLogs([]);
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto px-4 sm:px-6">
      
      {/* Top Banner */}
      <div className="glass-panel p-6 rounded-2xl border border-zinc-800 bg-zinc-950/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="bg-zinc-900 text-zinc-300 text-[10px] font-mono px-2 py-0.5 rounded border border-zinc-800 uppercase font-bold">
              3-Second Interactive Lead Simulator
            </span>
            <span className="text-xs text-zinc-400 font-mono">Real-Time Webhook Engine</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
            Test Instant Meta Ad Lead Routing
          </h3>
          <p className="text-xs text-zinc-400 mt-0.5">
            Submit a test lead below to see how our 3-second automation triggers live WhatsApp brochures & Telegram alerts.
          </p>
        </div>

        {/* Currency Switcher */}
        <div className="flex items-center bg-zinc-900 p-1 rounded-xl border border-zinc-800">
          <button
            onClick={() => setCurrencyMode('USD')}
            className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all ${
              currencyMode === 'USD' ? 'bg-zinc-800 text-white shadow' : 'text-zinc-400'
            }`}
          >
            🇺🇸 USD ($)
          </button>
          <button
            onClick={() => setCurrencyMode('INR')}
            className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all ${
              currencyMode === 'INR' ? 'bg-zinc-800 text-white shadow' : 'text-zinc-400'
            }`}
          >
            🇮🇳 INR (₹)
          </button>
        </div>
      </div>

      {/* Main Interactive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Input Form (4 cols) */}
        <div className="lg:col-span-4 space-y-4">
          <div className="glass-panel p-5 rounded-2xl border border-zinc-800 bg-zinc-950/90 space-y-4">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
              <span className="text-xs font-bold text-white flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-cyan-400" />
                1. Mock Meta Lead Submission
              </span>
              <span className="text-[10px] font-mono text-zinc-500">Inbound Form</span>
            </div>

            <div className="space-y-3">
              <div>
                <label className="text-[11px] font-mono text-zinc-400">Prospect Full Name</label>
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
                <label className="text-[11px] font-mono text-zinc-400">Investment Budget Range</label>
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
                  Routing Lead in 2.4s...
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
                  Trigger 3-Second Lead Pipeline
                </button>
              )}
            </div>
          </div>

          {/* Execution Logs Card */}
          <div className="glass-panel p-4 rounded-2xl border border-zinc-800 bg-zinc-950/90 space-y-2">
            <div className="text-xs font-bold text-zinc-400 font-mono flex items-center justify-between">
              <span>Execution Logs:</span>
              <span className="text-emerald-400 text-[10px]">{pipelineState === 'complete' ? 'COMPLETE' : 'READY'}</span>
            </div>

            <div className="bg-zinc-900 p-3 rounded-xl border border-zinc-800 font-mono text-[11px] text-zinc-300 space-y-1.5 min-h-[100px] max-h-[160px] overflow-y-auto">
              {logs.length === 0 ? (
                <div className="text-zinc-600 text-center py-6">Awaiting form submission trigger...</div>
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

        {/* Right Column: Live Mock Previews (8 cols) */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* WhatsApp Preview Phone */}
          <div className="glass-panel p-5 rounded-2xl border border-zinc-800 bg-zinc-950/90 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                <span className="text-xs font-bold text-emerald-400 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  Client's WhatsApp (&lt; 3s Trigger)
                </span>
                <span className="text-[10px] font-mono text-zinc-500">Official Meta API</span>
              </div>

              {pipelineState === 'complete' ? (
                <div className="mt-4 space-y-3 bg-zinc-900/90 p-4 rounded-xl border border-zinc-800">
                  <div className="text-[10px] font-mono text-zinc-500 text-center">
                    Today • {new Date().toLocaleTimeString()}
                  </div>

                  <div className="bg-emerald-950/40 border border-emerald-500/20 p-3 rounded-xl text-xs space-y-2 text-zinc-200">
                    <div className="font-bold text-emerald-400 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4" /> VIP Property Brochure Request
                    </div>
                    <p>
                      Hello <strong className="text-white">{formData.name}</strong>, thank you for your interest in{' '}
                      <strong className="text-white">{formData.project}</strong> ({currencyMode === 'USD' ? formData.budgetUSD : formData.budgetINR}).
                    </p>
                    <div className="bg-zinc-900 p-2.5 rounded-lg border border-zinc-800 text-[11px] font-mono flex items-center justify-between">
                      <span className="text-zinc-300">📄 Brochure_Floorplan_2026.pdf</span>
                      <span className="text-emerald-400 text-[10px] font-bold">DOWNLOAD (2.4MB)</span>
                    </div>
                    <p className="text-[11px] text-zinc-400 pt-1">
                      Our Senior Director will call you shortly. Or click below to reserve your private viewing:
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
                <div className="mt-8 text-center text-zinc-600 py-12 text-xs font-mono">
                  Waiting for test lead form trigger...
                </div>
              )}
            </div>

            <div className="text-[10px] text-zinc-500 font-mono text-center pt-2 border-t border-zinc-900">
              Trigger Speed: &lt; 1.4s • Zero Manual Work
            </div>
          </div>

          {/* Telegram Preview Phone */}
          <div className="glass-panel p-5 rounded-2xl border border-zinc-800 bg-zinc-950/90 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                <span className="text-xs font-bold text-sky-400 flex items-center gap-2">
                  <Bot className="w-4 h-4" />
                  Broker Telegram Sales Channel
                </span>
                <span className="text-[10px] font-mono text-zinc-500">Real-Time Alert</span>
              </div>

              {pipelineState === 'complete' ? (
                <div className="mt-4 space-y-3 bg-zinc-900/90 p-4 rounded-xl border border-zinc-800">
                  <div className="text-[10px] font-mono text-sky-400 text-center font-bold">
                    🔔 HOT LEAD ALERT • SOUND NOTIFICATION
                  </div>

                  <div className="bg-sky-950/40 border border-sky-500/20 p-3 rounded-xl text-xs space-y-2 text-zinc-200">
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
                <div className="mt-8 text-center text-zinc-600 py-12 text-xs font-mono">
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
