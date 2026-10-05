import React from 'react';
import { ArrowRight, Zap, Target, DollarSign, Clock, CheckCircle2, Bot } from 'lucide-react';

export default function HeroSection({ onStartDemo }) {
  return (
    <div className="relative overflow-hidden pt-8 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="text-center max-w-3xl mx-auto space-y-5">
        {/* Pill */}
        <div className="inline-flex items-center gap-2 bg-slate-900/90 border border-slate-700/80 px-4 py-1.5 rounded-full shadow-lg">
          <Zap className="w-4 h-4 text-cyan-400 animate-bounce" />
          <span className="text-xs font-semibold text-slate-300">
            For Boutique Real Estate, Agencies & MedSpas
          </span>
          <span className="text-slate-600">|</span>
          <span className="text-xs font-mono text-cyan-400">Target Ticket: $1,500 - $3,000</span>
        </div>

        {/* Main Title */}
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
          Fix Paid Ad Revenue Leaks With{' '}
          <span className="gradient-text-cyan">3-Second AI Lead Routing</span>
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
          Over <span className="text-slate-200 font-semibold">35% of ad spend is wasted</span> when incoming Meta & Google leads wait hours in Google Sheets. We plug a high-velocity Next.js + n8n pipeline that qualifies leads & sends instant WhatsApp brochures in under 3 seconds.
        </p>

        {/* Metric Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
          <div className="glass-card p-3 rounded-xl border border-slate-800 text-center">
            <div className="text-xl sm:text-2xl font-black text-cyan-400">&lt; 3.0s</div>
            <div className="text-[11px] text-slate-400 font-medium">WhatsApp Speed</div>
          </div>
          <div className="glass-card p-3 rounded-xl border border-slate-800 text-center">
            <div className="text-xl sm:text-2xl font-black text-emerald-400">+40%</div>
            <div className="text-[11px] text-slate-400 font-medium">Lead Conversion Boost</div>
          </div>
          <div className="glass-card p-3 rounded-xl border border-slate-800 text-center">
            <div className="text-xl sm:text-2xl font-black text-purple-400">100%</div>
            <div className="text-[11px] text-slate-400 font-medium">Zero Manual Copy-Paste</div>
          </div>
          <div className="glass-card p-3 rounded-xl border border-slate-800 text-center">
            <div className="text-xl sm:text-2xl font-black text-amber-400">$2,400+</div>
            <div className="text-[11px] text-slate-400 font-medium">Monthly VA Time Saved</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onStartDemo}
            className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold px-6 py-3 rounded-xl shadow-lg shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5 text-sm"
          >
            Launch Interactive Lead Simulator
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
