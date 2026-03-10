import React from 'react';
import { Server, ChevronDown, Rocket, Shield, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0f1c] text-white font-sans selection:bg-purple-500 selection:text-white pb-20">
      
      {/* Promo Banner */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-center py-2 text-sm font-medium tracking-wide flex justify-center items-center gap-2">
        <span>⚡ REDDY X 247 ELITE LAUNCH — Get 20% OFF + Free DDoS Protection for Life | Code: <span className="text-yellow-300 font-bold">REDDY2026</span></span>
        <span className="bg-white/20 px-2 py-0.5 rounded text-xs ml-4 hidden md:inline-block">⏳ 06d : 21h : 59m : 57s</span>
      </div>

      {/* Navbar */}
      <nav className="container mx-auto px-6 py-5 flex justify-between items-center border-b border-slate-800/50">
        <div className="flex items-center space-x-3 text-xl font-bold">
          <div className="bg-white text-black p-1 rounded">
            <Server size={20} />
          </div>
          <span>reddy x 247</span>
        </div>
        
        <div className="hidden lg:flex space-x-8 text-sm text-slate-300 font-medium">
          <a href="#minecraft" className="hover:text-white transition">Minecraft</a>
          <a href="#games" className="hover:text-white transition flex items-center gap-1">Games <ChevronDown size={14} /></a>
          <a href="#bots" className="hover:text-white transition flex items-center gap-1">Bot Hosting <ChevronDown size={14} /></a>
          <a href="#vps" className="hover:text-white transition">VPS Hosting</a>
          <a href="#services" className="hover:text-white transition flex items-center gap-1">Services <ChevronDown size={14} /></a>
        </div>

        <div className="flex items-center gap-4">
          <span className="bg-[#131b2f] border border-slate-700 px-3 py-1.5 rounded-md text-sm font-medium text-slate-300 hidden md:block">₹ INR</span>
          <button className="bg-[#5b61f6] hover:bg-[#4f54d8] text-white px-5 py-2.5 rounded-lg text-sm font-bold transition shadow-[0_0_15px_rgba(91,97,246,0.4)]">
            Claim Elite Deal
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="container mx-auto px-6 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Text */}
          <div>
            <div className="inline-block border border-yellow-500/30 bg-yellow-500/10 text-yellow-500 text-xs font-bold px-3 py-1 rounded-full mb-6">
              🏆 REDDY X 247 ELITE — PREMIUM LAUNCH
            </div>
            
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-[1.1]">
              Host Like a <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Legend.</span><br />
              Play Without <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Limits.</span>
            </h1>
            
            <p className="text-lg text-slate-400 mb-10 max-w-lg leading-relaxed">
              Where Every Millisecond Matters — Low latency, DDoS protection, Indian servers, 99.9% uptime, Node.js & Python bot support.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="bg-white hover:bg-gray-100 text-black px-6 py-3 rounded-lg font-bold text-sm transition flex items-center gap-2">
                <Rocket size={18} className="text-purple-600" /> Claim Elite Deal
              </button>
              <button className="bg-transparent hover:bg-[#131b2f] border border-slate-700 text-white px-6 py-3 rounded-lg font-bold text-sm transition">
                See All Plans
              </button>
            </div>
          </div>

          {/* Right Side: Game Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <GameCard icon="🟩" title="Minecraft" price="₹45/mo" />
            <GameCard icon="🌍" title="Palworld" price="₹129/mo" />
            <GameCard icon="🟧" title="FiveM" price="₹179/mo" />
            <GameCard icon="🟨" title="Hytale" price="₹89/mo" />
            <GameCard icon="🌳" title="Terraria" price="₹45/mo" />
            <GameCard icon="🟢" title="Node.js Bot" price="₹49/mo" />
            <GameCard icon="🐍" title="Python Bot" price="₹49/mo" className="sm:col-span-2 md:col-span-1" />
          </div>

        </div>
      </header>

      {/* Title for next section */}
      <div className="text-center mt-20">
        <div className="inline-block bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full mb-4">
          🏆 REDDY X 247 ELITE
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-2">Elite Hosting for <span className="bg-gradient-to-r from-purple-400 to-indigo-500 text-transparent bg-clip-text">Elite Gamers.</span></h2>
        <p className="text-slate-400">Trusted by Legends. Built for Champions.</p>
      </div>

    </div>
  );
}

// Reusable Small Game Card Component
function GameCard({ icon, title, price, className = "" }: { icon: string, title: string, price: string, className?: string }) {
  return (
    <div className={`bg-[#131b2f] border border-slate-800 hover:border-purple-500/50 p-4 rounded-xl flex items-center gap-4 transition-all cursor-pointer group ${className}`}>
      <div className="text-3xl bg-[#0a0f1c] p-2 rounded-lg group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div>
        <h3 className="font-bold text-white text-base">{title}</h3>
        <p className="text-slate-400 text-xs">Starting at {price}</p>
      </div>
    </div>
  );
}
