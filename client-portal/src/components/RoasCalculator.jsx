import React, { useState } from 'react';
import { Calculator, DollarSign, TrendingUp, AlertTriangle, CheckCircle2, ArrowRight } from 'lucide-react';

export default function RoasCalculator() {
  const [currencyMode, setCurrencyMode] = useState('USD');
  const [monthlyAdSpendUSD, setMonthlyAdSpendUSD] = useState(5000);
  const [monthlyAdSpendINR, setMonthlyAdSpendINR] = useState(400000);
  const [avgTicketSizeUSD, setAvgTicketSizeUSD] = useState(250000);
  const [avgTicketSizeINR, setAvgTicketSizeINR] = useState(15000000); // 1.5 Cr
  const [responseDelayHours, setResponseDelayHours] = useState(2);

  // Calculations
  const currentAdSpend = currencyMode === 'USD' ? monthlyAdSpendUSD : monthlyAdSpendINR;
  const currentTicket = currencyMode === 'USD' ? avgTicketSizeUSD : avgTicketSizeINR;

  // Estimated drop off percentage: 2+ hours delay = ~42% drop off
  const dropOffPercent = Math.min(65, Math.round(responseDelayHours * 18));
  
  // Estimated lost deal value per month
  const estimatedLostDealsPerMonth = Math.max(1, Math.round((currentAdSpend / 500) * (dropOffPercent / 100)));
  const totalWastedRevenue = estimatedLostDealsPerMonth * currentTicket;

  return (
    <div className="space-y-6 max-w-7xl mx-auto px-4 sm:px-6">
      
      {/* Header */}
      <div className="glass-panel p-6 rounded-2xl border border-zinc-800 bg-zinc-950/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="bg-zinc-900 text-zinc-300 text-[10px] font-mono px-2 py-0.5 rounded border border-zinc-800 uppercase font-bold">
              ROAS Revenue Leak Calculator
            </span>
            <span className="text-xs text-zinc-400 font-mono">Quantify Slow Follow-Up Losses</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
            How Much Money Are You Losing to Slow Follow-Up Lag?
          </h3>
          <p className="text-xs text-zinc-400 mt-0.5">
            Studies show 40%+ of Meta & Google Ad leads buy from the first broker who responds within 5 minutes.
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

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Sliders (6 cols) */}
        <div className="lg:col-span-6 glass-panel p-6 rounded-2xl border border-zinc-800 bg-zinc-950/90 space-y-6">
          <h4 className="text-sm font-bold text-white flex items-center gap-2 border-b border-zinc-800 pb-3">
            <Calculator className="w-4 h-4 text-cyan-400" />
            1. Input Your Current Campaign Metrics
          </h4>

          {/* Slider 1: Monthly Ad Spend */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-zinc-400">Monthly Meta/Google Ad Spend:</span>
              <span className="text-white font-bold">
                {currencyMode === 'USD' ? `$${monthlyAdSpendUSD.toLocaleString()}/mo` : `₹${monthlyAdSpendINR.toLocaleString()}/mo`}
              </span>
            </div>
            {currencyMode === 'USD' ? (
              <input
                type="range"
                min="1000"
                max="50000"
                step="500"
                value={monthlyAdSpendUSD}
                onChange={(e) => setMonthlyAdSpendUSD(Number(e.target.value))}
                className="w-full accent-white cursor-pointer"
              />
            ) : (
              <input
                type="range"
                min="100000"
                max="5000000"
                step="50000"
                value={monthlyAdSpendINR}
                onChange={(e) => setMonthlyAdSpendINR(Number(e.target.value))}
                className="w-full accent-white cursor-pointer"
              />
            )}
          </div>

          {/* Slider 2: Average Deal / Ticket Size */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-zinc-400">Average High-Ticket Deal Value:</span>
              <span className="text-white font-bold">
                {currencyMode === 'USD' ? `$${avgTicketSizeUSD.toLocaleString()}` : `₹${(avgTicketSizeINR / 100000).toFixed(1)} Lakhs`}
              </span>
            </div>
            {currencyMode === 'USD' ? (
              <input
                type="range"
                min="50000"
                max="2000000"
                step="25000"
                value={avgTicketSizeUSD}
                onChange={(e) => setAvgTicketSizeUSD(Number(e.target.value))}
                className="w-full accent-white cursor-pointer"
              />
            ) : (
              <input
                type="range"
                min="2500000"
                max="100000000"
                step="2500000"
                value={avgTicketSizeINR}
                onChange={(e) => setAvgTicketSizeINR(Number(e.target.value))}
                className="w-full accent-white cursor-pointer"
              />
            )}
          </div>

          {/* Slider 3: Current Lead Response Time Delay */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-zinc-400">Current Lead Follow-up Delay:</span>
              <span className="text-amber-400 font-bold">{responseDelayHours} Hours Lag</span>
            </div>
            <input
              type="range"
              min="0.2"
              max="6"
              step="0.1"
              value={responseDelayHours}
              onChange={(e) => setResponseDelayHours(Number(e.target.value))}
              className="w-full accent-amber-400 cursor-pointer"
            />
            <div className="text-[10px] font-mono text-zinc-500 flex justify-between pt-1">
              <span>Instant (&lt; 3s)</span>
              <span>2 Hours (Industry Avg)</span>
              <span>6+ Hours (Heavy Leak)</span>
            </div>
          </div>
        </div>

        {/* Results Card (6 cols) */}
        <div className="lg:col-span-6 glass-panel p-6 rounded-2xl border border-zinc-800 bg-zinc-950/90 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white flex items-center gap-2 border-b border-zinc-800 pb-3">
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              2. Projected Monthly Revenue Leak
            </h4>

            {/* Drop off Metric Box */}
            <div className="bg-amber-950/30 border border-amber-800/40 p-4 rounded-xl space-y-1">
              <div className="text-[11px] font-mono text-amber-400 font-bold flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4" /> Lead Drop-Off Risk: {dropOffPercent}%
              </div>
              <p className="text-xs text-zinc-300">
                Leads waiting over {responseDelayHours} hours drop off by {dropOffPercent}% before your sales team reaches them.
              </p>
            </div>

            {/* Total Wasted Value Metric Box */}
            <div className="bg-zinc-900 p-5 rounded-xl border border-zinc-800 space-y-1">
              <div className="text-xs font-mono text-zinc-400 uppercase">Estimated Monthly Wasted Revenue</div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                {currencyMode === 'USD' ? `$${totalWastedRevenue.toLocaleString()}` : `₹${(totalWastedRevenue / 100000).toFixed(1)} Lakhs`}
              </div>
              <p className="text-[11px] text-zinc-400 pt-1">
                Equivalent to losing ~{estimatedLostDealsPerMonth} high-ticket closed deal(s) every single month.
              </p>
            </div>
          </div>

          {/* Guaranteed Fix CTA */}
          <div className="bg-emerald-950/30 border border-emerald-800/40 p-4 rounded-xl space-y-2">
            <div className="text-xs font-bold text-emerald-400 flex items-center gap-1.5 font-mono">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Guaranteed Fix with 3-Second Automation Engine:
            </div>
            <p className="text-xs text-zinc-300">
              By deploying our instant WhatsApp VIP Brochure & Telegram Sales Bot, response time drops from {responseDelayHours}h to <strong>&lt; 2.4 seconds</strong>—reclaiming lost lead conversions instantly.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}
