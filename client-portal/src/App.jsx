import React from 'react';
import LiveLeadSimulator from './components/LiveLeadSimulator';

export default function App() {
  return (
    <div className="min-h-screen bg-[#030712] text-zinc-100 font-sans pb-12">
      <main className="py-4">
        <LiveLeadSimulator />
      </main>

      <footer className="mt-8 border-t border-zinc-900 py-6 text-center text-xs text-zinc-500 max-w-7xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono">
          <div>
            <span className="font-bold text-zinc-300">TRACKKARO AI</span> • 3-Second Lead Automation Systems
          </div>
          <div className="text-emerald-400 font-bold">
            ⚡ &lt; 3-Second Guaranteed Latency
          </div>
        </div>
      </footer>
    </div>
  );
}
