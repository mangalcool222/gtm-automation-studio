import React from 'react';
import { ArrowRight, Zap, Target, DollarSign, Clock, CheckCircle2, Bot, Sparkles, Activity } from 'lucide-react';

export default function HeroSection({ onStartDemo }) {
  return (
    <div className="relative overflow-hidden pt-10 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Background Ambient Glowing Halos */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="text-center max-w-3xl mx-auto space-y-6">
        
        {/* Apple Sleek Top Pill */}
        <div className="inline-flex items-center gap-2 bg-slate-900/80 border border-white/10 px-4 py-1.5 rounded-full shadow-xl backdrop-blur-2xl">
          <Zap className="w-3.5 h-3.5 text-cyan-400" />
          <span className="text-xs font-semibold text-slate-300">
            Engineered for Boutique Real Estate, High-Ticket Agencies & MedSpas
          </span>
          <span className="text-slate-700">|</span>
          <span className="text-xs font-mono text-cyan-400 font-bold">$1.5k–$3k / mo Retainers</span>
        </div>

        {/* Main Title - Apple Optical Hierarchy */}
        <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.1] text-balance">
          Fix Paid Ad Revenue Leaks With{' '}
          <span className="gradient-text-cyan">3-Second AI Lead Routing</span>
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-slate-400 font-normal leading-relaxed text-balance max-w-2xl mx-auto">
          Over <span className="text-slate-200 font-semibold">35% of high-intent ad spend is lost</span> when Meta & Google leads sit un-contacted in spreadsheets. We deploy a zero-latency n8n + AI pipeline that qualifies leads & delivers WhatsApp brochures in under 3 seconds.
        </p>

        {/* Apple-style Metric Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 pt-3">
          <div className="glass-card p-4 rounded-2xl text-center relative overflow-hidden group">
            <div className="text-2xl sm:text-3xl font-black text-cyan-400 font-mono tracking-tight">&lt; 3.0s</div>
            <div className="text-[11px] text-slate-400 font-medium mt-0.5">WhatsApp Delivery</div>
          </div>
          <div className="glass-card p-4 rounded-2xl text-center relative overflow-hidden group">
            <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono tracking-tight">+40%</div>
            <div className="text-[11px] text-slate-400 font-medium mt-0.5">Lead Conversion Boost</div>
          </div>
          <div className="glass-card p-4 rounded-2xl text-center relative overflow-hidden group">
            <div className="text-2xl sm:text-3xl font-black text-purple-400 font-mono tracking-tight">100%</div>
            <div className="text-[11px] text-slate-400 font-medium mt-0.5">Zero Manual Work</div>
          </div>
          <div className="glass-card p-4 rounded-2xl text-center relative overflow-hidden group">
            <div className="text-2xl sm:text-3xl font-black text-amber-400 font-mono tracking-tight">$2,400+</div>
            <div className="text-[11px] text-slate-400 font-medium mt-0.5">Monthly Time Saved</div>
          </div>
        </div>

        {/* Call to Action - Apple Fluid Tactile Button */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onStartDemo}
            className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold px-7 py-3.5 rounded-2xl shadow-xl shadow-cyan-500/20 text-sm cursor-pointer transition-all border border-white/20"
          >
            <Sparkles className="w-4 h-4 text-cyan-200" />
            Launch Interactive Lead Simulator
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

