import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, Clock, Smartphone, MessageSquare, Bot, AlertTriangle, Play, Sparkles, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function LiveLeadSimulator() {
  const [formData, setFormData] = useState({
    name: 'Alexander Wright',
    phone: '+971 50 987 6543',
    email: 'alexander@dubai-investor.ae',
    property: 'Dubai Marina Luxury Off-Plan Penthouse',
    budget: '$850,000 - $1.5M',
    niche: 'Dubai Real Estate'
  });

  const [simulating, setSimulating] = useState(false);
  const [stage, setStage] = useState('idle'); // idle -> receiving -> whatsapp -> telegram -> complete
  const [countdown, setCountdown] = useState(3.0);
  const [elapsedTime, setElapsedTime] = useState(0);

  const handleSimulate = (e) => {
    e.preventDefault();
    if (simulating) return;

    setSimulating(true);
    setStage('receiving');
    setCountdown(2.4);
    setElapsedTime(0);

    const timer = setInterval(() => {
      setElapsedTime((prev) => +(prev + 0.1).toFixed(1));
      setCountdown((prev) => {
        if (prev <= 0.1) {
          clearInterval(timer);
          return 0;
        }
        return +(prev - 0.1).toFixed(1);
      });
    }, 100);

    setTimeout(() => {
      setStage('whatsapp');
    }, 800);

    setTimeout(() => {
      setStage('telegram');
    }, 1600);

    setTimeout(() => {
      setStage('complete');
      setSimulating(false);
      try {
        confetti({ particleCount: 60, spread: 70, origin: { y: 0.6 } });
      } catch (err) {}
    }, 2400);
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 glass-panel p-5 rounded-2xl border border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-cyan-400 animate-ping"></span>
            <h3 className="text-xl font-extrabold text-white">Interactive 3-Second Lead Routing Engine</h3>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Test how instant Meta Ad lead triggers eliminate delayed follow-up dropoffs in real time.
          </p>
        </div>

        {/* Live Timer Pill */}
        <div className="flex items-center gap-3 bg-slate-900 px-4 py-2 rounded-xl border border-cyan-500/30">
          <Clock className="w-5 h-5 text-cyan-400" />
          <div>
            <div className="text-[10px] text-slate-400 font-mono uppercase">Processing Latency</div>
            <div className="text-lg font-mono font-bold text-cyan-400">
              {stage === 'complete' ? '2.4s (EXCELLENT)' : `${elapsedTime.toFixed(1)}s`}
            </div>
          </div>
        </div>
      </div>

      {/* Grid: Form (Left) vs Simulator Phone previews (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Form Trigger */}
        <div className="lg:col-span-5 glass-panel p-6 rounded-2xl border border-slate-800 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h4 className="font-bold text-sm text-slate-200 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              1. Submit Mock Lead (Meta Ad Form)
            </h4>
            <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded font-mono">
              Inbound Hook
            </span>
          </div>

          <form onSubmit={handleSimulate} className="space-y-3">
            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1">Full Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-cyan-500 font-medium"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1">Phone (WhatsApp)</label>
                <input
                  type="text"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-cyan-500 font-medium"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-cyan-500 font-medium"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1">Interest / Project</label>
                <input
                  type="text"
                  value={formData.property}
                  onChange={(e) => setFormData({ ...formData, property: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-cyan-500 font-medium"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1">Target Budget</label>
                <input
                  type="text"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-cyan-500 font-medium"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={simulating}
              className={`w-full py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-lg ${
                simulating
                  ? 'bg-slate-800 text-slate-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white shadow-cyan-500/20'
              }`}
            >
              {simulating ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin text-cyan-400" />
                  Routing Payload ({countdown.toFixed(1)}s left)...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Trigger 3-Second Automated Pipeline
                </>
              )}
            </button>
          </form>

          {/* Pipeline Node Status */}
          <div className="space-y-2 pt-2 border-t border-slate-800/80">
            <div className="text-xs font-semibold text-slate-400 mb-2">Live Node Pipeline Logs</div>

            <div className={`flex items-center justify-between p-2 rounded-lg text-xs font-mono border transition-all ${
              stage !== 'idle' ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300' : 'bg-slate-900/50 border-slate-800 text-slate-500'
            }`}>
              <span className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${stage !== 'idle' ? 'bg-emerald-400 animate-pulse' : 'bg-slate-700'}`}></span>
                1. Webhook Ingested
              </span>
              <span>{stage !== 'idle' ? '0.2s' : 'WAITING'}</span>
            </div>

            <div className={`flex items-center justify-between p-2 rounded-lg text-xs font-mono border transition-all ${
              ['whatsapp', 'telegram', 'complete'].includes(stage) ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300' : 'bg-slate-900/50 border-slate-800 text-slate-500'
            }`}>
              <span className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${['whatsapp', 'telegram', 'complete'].includes(stage) ? 'bg-emerald-400 animate-pulse' : 'bg-slate-700'}`}></span>
                2. WhatsApp Auto-Brochure API
              </span>
              <span>{['whatsapp', 'telegram', 'complete'].includes(stage) ? '1.2s' : 'WAITING'}</span>
            </div>

            <div className={`flex items-center justify-between p-2 rounded-lg text-xs font-mono border transition-all ${
              ['telegram', 'complete'].includes(stage) ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300' : 'bg-slate-900/50 border-slate-800 text-slate-500'
            }`}>
              <span className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${['telegram', 'complete'].includes(stage) ? 'bg-emerald-400 animate-pulse' : 'bg-slate-700'}`}></span>
                3. Broker Telegram Push Alert
              </span>
              <span>{['telegram', 'complete'].includes(stage) ? '2.4s' : 'WAITING'}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Live Smartphone & Telegram Alert Mockups */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          {/* WhatsApp Mobile View */}
          <div className="phone-mockup flex flex-col h-[480px]">
            <div className="phone-header">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-emerald-600 flex items-center justify-center font-bold text-xs text-white">
                  WA
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Client's WhatsApp</div>
                  <div className="text-[10px] text-emerald-400 flex items-center gap-1 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Instant Trigger
                  </div>
                </div>
              </div>
              <Smartphone className="w-4 h-4 text-slate-500" />
            </div>

            <div className="p-3 space-y-3 flex-1 overflow-y-auto bg-slate-950/90">
              <div className="text-center my-2">
                <span className="bg-slate-900 text-slate-500 text-[10px] px-2 py-0.5 rounded-full font-mono">
                  Today • {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>

              {['whatsapp', 'telegram', 'complete'].includes(stage) ? (
                <div className="whatsapp-bubble ml-auto">
                  <p className="font-bold text-xs text-emerald-300 mb-1">
                    👋 Hello {formData.name}!
                  </p>
                  <p className="text-xs text-slate-200 leading-relaxed mb-2">
                    Thank you for expressing interest in <strong>{formData.property}</strong> ({formData.budget}).
                  </p>
                  <p className="text-xs text-slate-200 leading-relaxed mb-2">
                    📄 We have attached your VIP Digital Property Portfolio & Instant Floorplan Brochure below:
                  </p>
                  <div className="bg-emerald-950/60 p-2 rounded-lg border border-emerald-500/30 flex items-center justify-between text-[11px] font-mono text-emerald-400 my-1">
                    <span>📑 Dubai_OffPlan_VIP_Portfolio.pdf</span>
                    <span className="bg-emerald-500 text-slate-950 text-[9px] px-1.5 py-0.5 rounded font-bold">2.4 MB</span>
                  </div>
                  <span className="text-[9px] text-emerald-300/70 block text-right mt-1 font-mono">
                    Delivered in 2.4s • ✓✓ Read
                  </span>
                </div>
              ) : (
                <div className="h-full flex items-center justify-center text-center p-6 text-slate-600 text-xs">
                  Awaiting Meta Ad Form submission...
                </div>
              )}
            </div>
          </div>

          {/* Telegram Broker Alert View */}
          <div className="phone-mockup flex flex-col h-[480px]">
            <div className="phone-header bg-slate-900">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-sky-500 flex items-center justify-center font-bold text-xs text-white">
                  TG
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Sales Team Telegram</div>
                  <div className="text-[10px] text-sky-400 font-mono">Real-Time Lead Alert Bot</div>
                </div>
              </div>
              <Bot className="w-4 h-4 text-sky-400" />
            </div>

            <div className="p-3 space-y-3 flex-1 overflow-y-auto bg-slate-950/90">
              <div className="text-center my-2">
                <span className="bg-slate-900 text-slate-500 text-[10px] px-2 py-0.5 rounded-full font-mono">
                  BROKER VIP ALERT CHANNEL
                </span>
              </div>

              {['telegram', 'complete'].includes(stage) ? (
                <div className="telegram-bubble">
                  <div className="flex items-center justify-between text-xs font-bold text-sky-400 mb-1 border-b border-slate-800 pb-1">
                    <span>🚨 NEW HIGH-INTENT LEAD</span>
                    <span className="bg-sky-500/20 text-sky-300 text-[9px] px-1.5 py-0.5 rounded font-mono">HOT (95/100)</span>
                  </div>
                  <div className="text-xs space-y-1 text-slate-200 mt-1">
                    <p>👤 <strong>Client:</strong> {formData.name}</p>
                    <p>📞 <strong>Phone:</strong> {formData.phone}</p>
                    <p>🏢 <strong>Project:</strong> {formData.property}</p>
                    <p>💵 <strong>Budget:</strong> {formData.budget}</p>
                    <p className="text-emerald-400 font-mono text-[10px] pt-1">
                      ⚡ WhatsApp Brochure auto-delivered in 2.4 seconds!
                    </p>
                  </div>
                  <a
                    href={`tel:${formData.phone}`}
                    onClick={(e) => e.preventDefault()}
                    className="mt-2.5 block text-center bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs py-1.5 rounded-lg transition-colors"
                  >
                    📞 Click to Call {formData.name} Directly
                  </a>
                </div>
              ) : (
                <div className="h-full flex items-center justify-center text-center p-6 text-slate-600 text-xs">
                  Broker channel idle. Waiting for live lead trigger...
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
