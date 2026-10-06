import React from 'react';
import { ArrowRight, ShieldCheck, Zap, MessageSquare, Clock, Sparkles } from 'lucide-react';

export default function HeroSection({ onStartDemo }) {
  return (
    <section className="relative pt-8 pb-4 max-w-7xl mx-auto px-4 sm:px-6">
      
      {/* Background glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-zinc-800/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 text-center space-y-6 max-w-4xl mx-auto">
        
        {/* Sleek Subheading Pill */}
        <div className="inline-flex items-center gap-2 bg-zinc-900/90 border border-zinc-800 px-3.5 py-1.5 rounded-full text-xs font-mono text-zinc-300 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>High-Ticket Lead Automation Engine</span>
          <span className="text-zinc-600">•</span>
          <span className="text-emerald-400 font-bold">&lt; 3-Second Response Guarantee</span>
        </div>

        {/* Main Headline */}
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Eliminate <span className="underline decoration-zinc-600 underline-offset-8">40%+ Lead Drop-Off</span> with Instant Automated 3-Second Routing
        </h2>

        {/* Body Text */}
        <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          High-ticket buyers lose interest when forced to wait hours for a response. Our system intercepts Meta, Google & Website form leads instantly—triggering instant WhatsApp brochures, SMS booking links, and real-time broker Telegram alerts.
        </p>

        {/* Feature Badges */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400 font-mono">
          <div className="flex items-center gap-2 bg-zinc-950/60 px-3 py-1.5 rounded-lg border border-zinc-800/60">
            <MessageSquare className="w-4 h-4 text-emerald-400" /> Instant WhatsApp VIP PDF Brochure
          </div>
          <div className="flex items-center gap-2 bg-zinc-950/60 px-3 py-1.5 rounded-lg border border-zinc-800/60">
            <Zap className="w-4 h-4 text-cyan-400" /> Real-Time Broker Sales Team Alert
          </div>
          <div className="flex items-center gap-2 bg-zinc-950/60 px-3 py-1.5 rounded-lg border border-zinc-800/60">
            <Clock className="w-4 h-4 text-amber-400" /> Google Sheets / CRM Live Auto-Sync
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-2 flex justify-center">
          <button
            onClick={onStartDemo}
            className="bg-white hover:bg-zinc-200 text-zinc-950 font-bold px-6 py-3 rounded-xl text-xs sm:text-sm flex items-center gap-2.5 transition-all duration-200 shadow-lg shadow-white/10 hover:scale-[1.02] cursor-pointer"
          >
            Test Live 3-Second Simulator
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
