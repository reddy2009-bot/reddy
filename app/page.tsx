import React from 'react';
import { Server, ChevronDown, Rocket } from 'lucide-react';

export default function Home() {
  return (
    {/* Deep Space Background with relative positioning for glowing orbs */}
    <div className="min-h-screen bg-[#030712] text-white font-sans relative overflow-hidden pb-20 selection:bg-purple-500 selection:text-white">
      
      {/* --- BACKGROUND GLOW EFFECTS (The secret to the design) --- */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-700/30 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute top-[20%] right-[-5%] w-[400px] h-[400px] bg-blue-700/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[150px] pointer-events-none"></div>
      {/* --------------------------------------------------------- */}

      <div className="relative z-10">
        {/* Promo Banner */}
        <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 border-b border-purple-500/30 text-center py-2 text-sm font-medium tracking-wide flex justify-center items-center gap-2 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
          <span>⚡ REDDY X 247 ELITE LAUNCH — Get 20% OFF + Free DDoS Protection for Life | Code: <span className="text-yellow-400 font-bold">REDDY2026</span></span>
          <span className="bg-black/40 border border-white/10 px-3 py-1 rounded text-xs ml-4 hidden md:inline-block font-mono">⏳ 06d : 21h : 59m : 57s</span>
        </div>

        {/* Navbar (Glassmorphism) */}
        <nav className="container mx-auto px-6 py-5 flex justify-between items-center border-b border-white/5 backdrop-blur-md bg-black/20 mt-4 rounded-2xl">
          <div className="flex items-center space-x-3 text-2xl font-extrabold tracking-tight">
            <div className="bg-gradient-to-br from-white to-gray-400 text-black p-1.5 rounded-lg">
              <Server size={22} />
            </div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">reddy x 247</span>
          </div>
          
          <div className="hidden lg:flex space-x-8 text-sm text-gray-300 font-medium">
            <a href="#minecraft" className="hover:text-white transition">Minecraft</a>
            <a href="#games" className="hover:text-white transition flex items-center gap-1">Games <ChevronDown size={14} /></a>
            <a href="#bots" className="hover:text-white transition flex items-center gap-1">Bot Hosting <ChevronDown size={14} /></a>
            <a href="#vps" className="hover:text-white transition">VPS Hosting</a>
            <a href="#services" className="hover:text-white transition flex items-center gap-1">Services <ChevronDown size={14} /></a>
          </div>

          <div className="flex items-center gap-4">
            <span className="bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-sm font-medium text-gray-300 hidden md:block">₹ INR</span>
            <button className="bg-gradient-to-r from-[#5b61f6] to-[#7c3aed] hover:from-[#4f54d8] hover:to-[#6d28d9] text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all shadow-[0_0_20px_rgba(124,58,237,0.5)] hover:shadow-[0_0_30px_rgba(124,58,237,0.7)] scale-100 hover:scale-105">
              Claim Elite Deal
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="container mx-auto px-6 pt-24 pb-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Side: Text & CTA */}
            <div>
              <div className="inline-flex items-center gap-2 border border-yellow-500/30 bg-yellow-500/10 text-yellow-500 text-xs font-bold px-4 py-1.5 rounded-full mb-8 shadow-[0_0_15px_rgba(234,179,8,0.15)]">
                🏆 REDDY X 247 ELITE — PREMIUM LAUNCH
              </div>
              
              <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]">
                Host Like a <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 text-transparent bg-clip-text drop-shadow-[0_0_30px_rgba(129,140,248,0.4)]">Legend.</span><br />
                Play Without <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text drop-shadow-[0_0_30px_rgba(232,121,249,0.4)]">Limits.</span>
              </h1>
              
              <p className="text-xl text-gray-400 mb-12 max-w-lg leading-relaxed font-medium">
                Where Every Millisecond Matters — Low latency, DDoS protection, Indian servers, 99.9% uptime, Node.js & Python bot support.
              </p>
              
              <div className="flex flex-wrap gap-5">
                <button className="bg-white text-black px-8 py-4 rounded-xl font-bold text-base transition-all hover:bg-gray-200 flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-105">
                  <Rocket size={20} className="text-[#7c3aed]" /> Claim Elite Deal
                </button>
                <button className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-xl font-bold text-base transition-all backdrop-blur-sm hover:border-white/20">
                  See All Plans
                </button>
              </div>
            </div>

            {/* Right Side: Glassmorphism Game Cards Grid */}
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
      </div>
    </div>
  );
}

// Highly Stylized Glassmorphism Game Card Component
function GameCard({ icon, title, price, className = "" }: { icon: string, title: string, price: string, className?: string }) {
  return (
    <div className={`bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-white/[0.07] p-5 rounded-2xl flex items-center gap-5 transition-all duration-300 cursor-pointer group backdrop-blur-md shadow-lg hover:shadow-[0_0_25px_rgba(168,85,247,0.2)] hover:-translate-y-1 ${className}`}>
      <div className="text-4xl bg-black/40 border border-white/5 p-3 rounded-xl group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-inner">
        {icon}
      </div>
      <div>
        <h3 className="font-extrabold text-white text-lg tracking-wide">{title}</h3>
        <p className="text-gray-400 text-sm font-medium mt-0.5">Starting at <span className="text-purple-400">{price}</span></p>
      </div>
    </div>
  );
}
