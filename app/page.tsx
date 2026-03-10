"use client";

import React, { useState } from 'react';
import { Server, ChevronDown, Rocket, Zap, Activity } from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('games');

  return (
    <div className="min-h-screen bg-[#030712] text-white font-sans relative overflow-hidden pb-20 selection:bg-purple-500 selection:text-white">
      
      {/* --- ADVANCED BACKGROUND --- */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[150px] animate-[pulse_8s_ease-in-out_infinite] pointer-events-none"></div>
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] animate-[pulse_10s_ease-in-out_infinite] pointer-events-none"></div>
      
      <div className="relative z-10">
        
        {/* Elite Promo Banner */}
        <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 border-b border-purple-500/30 text-center py-2 text-sm font-medium flex justify-center items-center gap-3 shadow-[0_0_20px_rgba(168,85,247,0.2)]">
          <Activity size={16} className="text-yellow-400 animate-pulse" />
          <span>REDDY X 247 ELITE LAUNCH — 20% OFF + Free DDoS Protection | Code: <span className="text-yellow-400 font-extrabold uppercase tracking-wider">REDDY2026</span></span>
        </div>

        {/* Premium Navbar */}
        <nav className="container mx-auto px-6 py-4 mt-6">
          <div className="flex justify-between items-center border border-white/10 backdrop-blur-xl bg-white/[0.02] px-6 py-4 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
            <div className="flex items-center space-x-3 text-2xl font-black tracking-tighter">
              <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-2 rounded-xl shadow-[0_0_15px_rgba(124,58,237,0.5)]">
                <Server size={24} />
              </div>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">reddy x 247</span>
            </div>
            
            <div className="hidden lg:flex space-x-8 text-sm text-gray-400 font-semibold">
              <a href="#minecraft" className="hover:text-white transition-colors">Minecraft</a>
              <a href="#games" className="hover:text-white transition-colors flex items-center gap-1">Games <ChevronDown size={14} /></a>
              <a href="#bots" className="hover:text-white transition-colors flex items-center gap-1">Bot Hosting <ChevronDown size={14} /></a>
              <a href="#vps" className="hover:text-white transition-colors">VPS Hosting</a>
            </div>

            <div className="flex items-center gap-4">
              <button className="relative group overflow-hidden rounded-xl p-[1px]">
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-70 group-hover:opacity-100 transition-opacity duration-300"></span>
                <div className="relative bg-[#030712] px-6 py-2.5 rounded-xl flex items-center gap-2 transition-all group-hover:bg-opacity-0">
                  <span className="font-bold text-white text-sm">Client Panel</span>
                </div>
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="container mx-auto px-6 pt-20 pb-24">
          <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
            
            <div className="inline-flex items-center gap-2 border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-bold px-4 py-2 rounded-full mb-8 shadow-[0_0_20px_rgba(168,85,247,0.15)] backdrop-blur-md">
              <Zap size={14} className="text-yellow-400" /> NEXT-GEN INFRASTRUCTURE DEPLOYED IN INDIA
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[1.05]">
              Host Like a <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 drop-shadow-[0_0_40px_rgba(168,85,247,0.4)]">Legend.</span><br />
              Play Without <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 drop-shadow-[0_0_40px_rgba(236,72,153,0.4)]">Limits.</span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-12 max-w-2xl leading-relaxed font-medium">
              Enterprise-grade hardware meets uncompromised performance. Ryzen 9 CPUs, NVMe storage, and built-in DDoS protection.
            </p>
            
            <div className="flex flex-wrap gap-6 justify-center">
              <button className="bg-white text-black px-10 py-5 rounded-2xl font-black text-lg transition-all hover:bg-gray-200 flex items-center gap-3 shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-105 hover:-translate-y-1">
                <Rocket size={24} className="text-purple-600" /> Deploy Server Now
              </button>
              <button className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all backdrop-blur-md hover:border-white/30 hover:-translate-y-1">
                View Pricing
              </button>
            </div>
          </div>
        </header>

        {/* Interactive Pricing Tabs */}
        <section className="container mx-auto px-6 py-12">
          
          <div className="flex justify-center mb-12">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-1.5 rounded-2xl inline-flex gap-2 shadow-2xl flex-wrap justify-center">
              <button 
                onClick={() => setActiveTab('games')}
                className={`px-8 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${activeTab === 'games' ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-[0_0_15px_rgba(124,58,237,0.5)]' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
              >
                🎮 Game Servers
              </button>
              <button 
                onClick={() => setActiveTab('bots')}
                className={`px-8 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${activeTab === 'bots' ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-[0_0_15px_rgba(124,58,237,0.5)]' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
              >
                🤖 Bot Hosting
              </button>
              <button 
                onClick={() => setActiveTab('vps')}
                className={`px-8 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${activeTab === 'vps' ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-[0_0_15px_rgba(124,58,237,0.5)]' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
              >
                💻 Cloud VPS
              </button>
            </div>
          </div>

          {/* Tab Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            
            {activeTab === 'games' && (
              <>
                <AdvancedCard icon="🟩" title="Minecraft" desc="Ryzen 9 7950X / NVMe" price="₹45" delay="0" />
                <AdvancedCard icon="🌍" title="Palworld" desc="High RAM / Low Ping" price="₹129" delay="100" />
                <AdvancedCard icon="🟧" title="FiveM" desc="Custom GTA V Servers" price="₹179" delay="200" />
                <AdvancedCard icon="🟨" title="Hytale" desc="Next-gen Adventure" price="₹89" delay="300" />
              </>
            )}

            {activeTab === 'bots' && (
              <>
                <AdvancedCard icon="🟢" title="Node.js Bot" desc="24/7 Uptime Guarantee" price="₹49" delay="0" />
                <AdvancedCard icon="🐍" title="Python Bot" desc="Automation Ready" price="₹49" delay="100" />
                <AdvancedCard icon="☕" title="Java App" desc="Dedicated Resources" price="₹99" delay="200" />
                <AdvancedCard icon="⚙️" title="Discord App" desc="Music & Utility Bots" price="₹59" delay="300" />
              </>
            )}

            {activeTab === 'vps' && (
              <>
                <AdvancedCard icon="🥉" title="Nova Core" desc="2 vCPU / 4GB RAM" price="₹399" delay="0" />
                <AdvancedCard icon="🥇" title="Phantom Core" desc="4 vCPU / 8GB RAM" price="₹799" delay="100" />
                <AdvancedCard icon="👑" title="Nebula Core" desc="8 vCPU / 16GB RAM" price="₹1499" delay="200" />
                <AdvancedCard icon="🌌" title="Infinity X" desc="16 vCPU / 32GB RAM" price="₹3499" delay="300" />
              </>
            )}

          </div>
        </section>

      </div>
    </div>
  );
}

function AdvancedCard({ icon, title, desc, price, delay }: { icon: string, title: string, desc: string, price: string, delay: string }) {
  return (
    <div 
      className="group relative bg-white/[0.03] border border-white/10 rounded-3xl p-6 hover:bg-white/[0.06] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] overflow-hidden cursor-pointer backdrop-blur-md"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-indigo-500/20 group-hover:via-purple-500/20 group-hover:to-pink-500/20 transition-all duration-500"></div>
      
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-6">
          <div className="text-5xl bg-black/40 border border-white/5 w-16 h-16 flex items-center justify-center rounded-2xl shadow-inner group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
            {icon}
          </div>
          <div className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-md border border-white/5">
            Instant Setup
          </div>
        </div>
        
        <h3 className="font-extrabold text-2xl text-white tracking-tight mb-1">{title}</h3>
        <p className="text-gray-400 text-sm font-medium mb-6 h-5">{desc}</p>
        
        <div className="flex items-end gap-1 mb-6">
          <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">{price}</span>
          <span className="text-gray-500 font-bold mb-1">/mo</span>
        </div>

        <button className="w-full bg-white/5 border border-white/10 text-white py-3 rounded-xl font-bold transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 group-hover:border-transparent group-hover:shadow-[0_0_20px_rgba(124,58,237,0.4)]">
          Configure Plan
        </button>
      </div>
    </div>
  );
}
