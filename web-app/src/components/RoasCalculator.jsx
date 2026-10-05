import React, { useState } from 'react';
import { Calculator, DollarSign, TrendingUp, AlertTriangle, CheckCircle2, ArrowRight } from 'lucide-react';

export default function RoasCalculator() {
  const [adSpend, setAdSpend] = useState(5000); // $5,000 / mo
  const [leadCount, setLeadCount] = useState(250); // 250 leads
  const [followupLagHours, setFollowupLagHours] = useState(3); // 3 hours delay
  const [avgCustomerValue, setAvgCustomerValue] = useState(2500); // $2,500 LTV

  const usdToInr = 84;

  // Math Calculations
  const costPerLeadUsd = adSpend / (leadCount || 1);
  const costPerLeadInr = costPerLeadUsd * usdToInr;

  const dropoffPercentage = Math.min(60, 25 + followupLagHours * 5);
  const lostLeadsMonthly = Math.round(leadCount * (dropoffPercentage / 100));
  
  const lostAdSpendUsd = Math.round(lostLeadsMonthly * costPerLeadUsd);
  const lostAdSpendInr = Math.round(lostAdSpendUsd * usdToInr);

  const estimatedLostRevenueUsd = Math.round((lostLeadsMonthly * 0.15) * avgCustomerValue);
  const estimatedLostRevenueInr = Math.round(estimatedLostRevenueUsd * usdToInr);

  const systemCostUsd = 2000;
  const systemCostInr = systemCostUsd * usdToInr;

  const roi = Math.round(((estimatedLostRevenueUsd * 12) / systemCostUsd) * 100);

  return (
    <div className="space-y-6 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Header */}
      <div className="glass-panel p-6 rounded-2xl border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
            <Calculator className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-2xl font-black text-white">ROAS Revenue Leak & ROI Calculator</h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Quantify the exact dollar ($) & rupee (₹) amount your client is burning due to delayed follow-ups.
            </p>
          </div>
        </div>

        <div className="bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800 text-xs font-mono text-cyan-400">
          Exchange Rate: $1 = ₹{usdToInr} INR
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Sliders Input */}
        <div className="lg:col-span-6 glass-panel p-6 rounded-2xl border border-slate-800 space-y-5">
          <h4 className="text-sm font-bold text-slate-200 border-b border-slate-800 pb-3 flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-cyan-400" />
            Client Campaign Parameters (Dual Currency)
          </h4>

          {/* Ad Spend Slider */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-semibold">
              <span className="text-slate-400">Monthly Ad Spend</span>
              <span className="text-cyan-400 font-mono font-bold">
                ${adSpend.toLocaleString()} USD (₹{(adSpend * usdToInr).toLocaleString()} INR)
              </span>
            </div>
            <input
              type="range"
              min="1000"
              max="50000"
              step="500"
              value={adSpend}
              onChange={(e) => setAdSpend(Number(e.target.value))}
              className="w-full accent-cyan-400 bg-slate-900 rounded-lg cursor-pointer"
            />
          </div>

          {/* Lead Count Slider */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-semibold">
              <span className="text-slate-400">Monthly Inbound Leads</span>
              <span className="text-cyan-400 font-mono font-bold">{leadCount} leads</span>
            </div>
            <input
              type="range"
              min="50"
              max="2000"
              step="25"
              value={leadCount}
              onChange={(e) => setLeadCount(Number(e.target.value))}
              className="w-full accent-cyan-400 bg-slate-900 rounded-lg cursor-pointer"
            />
          </div>

          {/* Follow-up Lag Slider */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-semibold">
              <span className="text-slate-400">Average Follow-up Lag (Hours)</span>
              <span className="text-amber-400 font-mono font-bold">{followupLagHours} Hours Lag</span>
            </div>
            <input
              type="range"
              min="0.2"
              max="24"
              step="0.5"
              value={followupLagHours}
              onChange={(e) => setFollowupLagHours(Number(e.target.value))}
              className="w-full accent-amber-400 bg-slate-900 rounded-lg cursor-pointer"
            />
          </div>

          {/* Avg Deal Value Slider */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-semibold">
              <span className="text-slate-400">Avg Deal Value / LTV</span>
              <span className="text-emerald-400 font-mono font-bold">
                ${avgCustomerValue.toLocaleString()} (₹{(avgCustomerValue * usdToInr).toLocaleString()})
              </span>
            </div>
            <input
              type="range"
              min="500"
              max="25000"
              step="500"
              value={avgCustomerValue}
              onChange={(e) => setAvgCustomerValue(Number(e.target.value))}
              className="w-full accent-emerald-400 bg-slate-900 rounded-lg cursor-pointer"
            />
          </div>
        </div>

        {/* Calculated Results */}
        <div className="lg:col-span-6 space-y-4">
          
          {/* Revenue Leak Warning Card */}
          <div className="glass-panel p-6 rounded-2xl border border-red-500/30 bg-red-950/20 space-y-4">
            <div className="flex items-center gap-2 text-red-400 text-xs font-bold font-mono">
              <AlertTriangle className="w-4 h-4 animate-bounce" />
              IDENTIFIED MONTHLY REVENUE LEAK (USD & INR)
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-[11px] text-slate-400">Wasted Ad Spend / Mo</div>
                <div className="text-xl sm:text-2xl font-black text-red-400 font-mono">
                  ${lostAdSpendUsd.toLocaleString()}
                </div>
                <div className="text-xs text-emerald-400 font-mono font-bold">
                  ₹{lostAdSpendInr.toLocaleString()} INR
                </div>
                <div className="text-[10px] text-slate-500">{dropoffPercentage}% lead cold drop-off</div>
              </div>
              <div>
                <div className="text-[11px] text-slate-400">Lost Monthly Sales</div>
                <div className="text-xl sm:text-2xl font-black text-red-400 font-mono">
                  ${estimatedLostRevenueUsd.toLocaleString()}
                </div>
                <div className="text-xs text-emerald-400 font-mono font-bold">
                  ₹{estimatedLostRevenueInr.toLocaleString()} INR
                </div>
                <div className="text-[10px] text-slate-500">Unclosed client deals</div>
              </div>
            </div>
          </div>

          {/* Pitch Anchor Card */}
          <div className="glass-panel p-6 rounded-2xl border border-cyan-500/30 bg-slate-900/80 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-bold text-cyan-400 font-mono">YOUR PITCH ANCHOR MATH</span>
              <span className="bg-cyan-500/20 text-cyan-300 text-[10px] px-2 py-0.5 rounded font-bold">
                1-Time $2,000 / ₹1,68,000 Investment
              </span>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between py-1 border-b border-slate-800/50">
                <span className="text-slate-400">Cost Per Lead (CPL):</span>
                <span className="text-white font-mono font-bold">${costPerLeadUsd.toFixed(1)} (₹{costPerLeadInr.toFixed(0)})</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800/50">
                <span className="text-slate-400">Annual Recoverable Revenue:</span>
                <span className="text-emerald-400 font-mono font-bold">
                  ${(estimatedLostRevenueUsd * 12).toLocaleString()} (₹{(estimatedLostRevenueInr * 12).toLocaleString()})
                </span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-400">Estimated First-Year ROI:</span>
                <span className="text-cyan-400 font-mono font-extrabold">{roi.toLocaleString()}% ROI</span>
              </div>
            </div>

            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-slate-300 text-xs leading-relaxed italic">
              "Sir, you are burning <strong className="text-red-400">${lostAdSpendUsd.toLocaleString()} / ₹{lostAdSpendInr.toLocaleString()}</strong> every month on paid ads because leads sit cold for {followupLagHours} hours. My $2,000 / ₹1.65 Lakh system fixes this leak permanently."
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
