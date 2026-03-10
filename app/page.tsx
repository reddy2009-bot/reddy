import React from 'react';
import { Server, Shield, Zap, Check } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans selection:bg-indigo-500 selection:text-white">
      {/* Promo Banner */}
      <div className="bg-indigo-600 text-center py-2 text-sm font-medium tracking-wide">
        ⚡ REDDY X 247 ELITE LAUNCH — Get 20% OFF + Free DDoS Protection for Life | Code: <span className="font-bold">REDDY2026</span>
      </div>

      {/* Navbar */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center border-b border-gray-800">
        <div className="flex items-center space-x-2 text-2xl font-bold">
          <Server className="text-indigo-500" />
          <span>reddy x 247</span>
        </div>
        <div className="hidden md:flex space-x-6 text-gray-300 font-medium">
          <a href="#minecraft" className="hover:text-indigo-400 transition">Minecraft</a>
          <a href="#games" className="hover:text-indigo-400 transition">Games</a>
          <a href="#bots" className="hover:text-indigo-400 transition">Bot Hosting</a>
          <a href="#vps" className="hover:text-indigo-400 transition">VPS</a>
        </div>
        <button className="bg-indigo-600 hover:bg-indigo-700 px-6 py-2 rounded-lg font-bold transition">
          Claim Elite Deal
        </button>
      </nav>

      {/* Hero Section */}
      <header className="container mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-600">
          Host Like a Legend.<br /> Play Without Limits.
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          Where Every Millisecond Matters — Low latency, DDoS protection, Indian servers, 99.9% uptime, Node.js & Python bot support.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-indigo-600 hover:bg-indigo-700 px-8 py-4 rounded-lg font-bold text-lg transition flex items-center">
            🚀 Claim Elite Deal
          </button>
          <button className="bg-gray-800 hover:bg-gray-700 px-8 py-4 rounded-lg font-bold text-lg transition">
            See All Plans
          </button>
        </div>
      </header>

      {/* Features Section */}
      <section className="bg-gray-900 py-20 border-y border-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Elite Hosting for Elite Gamers</h2>
            <p className="text-gray-400">Trusted by Legends. Built for Champions.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Zap className="w-10 h-10 text-yellow-400" />}
              title="Elite Performance"
              desc="AMD Ryzen 9 processors, NVMe SSDs, and enterprise-grade infrastructure for zero-lag gameplay."
            />
            <FeatureCard 
              icon={<Shield className="w-10 h-10 text-green-400" />}
              title="Free DDoS for Life"
              desc="Advanced DDoS mitigation included free forever. Your servers stay online no matter what."
            />
            <FeatureCard 
              icon={<Server className="w-10 h-10 text-indigo-400" />}
              title="Deploy in 30 Seconds"
              desc="One-click server setup with auto-configuration. Go from order to gameplay in under a minute."
            />
          </div>
        </div>
      </section>

      {/* Pricing Section (Minecraft Example) */}
      <section id="minecraft" className="container mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">⛏️ Minecraft Hosting</h2>
          <p className="text-gray-400">Premium Minecraft hosting with one-click modpack installs.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <PricingCard 
            title="🌱 Seed"
            price="₹45"
            ram="1GB"
            cpu="Up to 50%"
            storage="5GB NVMe"
          />
          <PricingCard 
            title="🔥 Blaze"
            price="₹169"
            ram="4GB"
            cpu="Up to 180%"
            storage="20GB NVMe"
            isPopular={true}
          />
          <PricingCard 
            title="💎 Omega"
            price="₹349"
            ram="8GB"
            cpu="Up to 340%"
            storage="50GB NVMe"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 py-12 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center text-gray-500">
          <p>© 2026 reddy x 247. All rights reserved.</p>
          <p className="mt-2">Made for gamers worldwide.</p>
        </div>
      </footer>
    </div>
  );
}

// Reusable Feature Card Component
function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-indigo-500 transition-colors duration-300">
      <div className="mb-6">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{desc}</p>
    </div>
  );
}

// Reusable Pricing Card Component
function PricingCard({ title, price, ram, cpu, storage, isPopular = false }: any) {
  return (
    <div className={`bg-gray-900 p-8 rounded-2xl border relative flex flex-col ${isPopular ? 'border-indigo-500 shadow-[0_0_30px_rgba(99,102,241,0.2)]' : 'border-gray-800'}`}>
      {isPopular && (
        <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide">
          MOST POPULAR
        </span>
      )}
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <div className="mb-6">
        <span className="text-4xl font-extrabold">{price}</span>
        <span className="text-gray-400">/mo</span>
      </div>
      
      <ul className="space-y-4 mb-8 flex-1">
        <li className="flex items-center text-gray-300"><Check className="w-5 h-5 text-indigo-400 mr-3" /> RAM: <strong className="ml-1 text-white">{ram}</strong></li>
        <li className="flex items-center text-gray-300"><Check className="w-5 h-5 text-indigo-400 mr-3" /> CPU: <strong className="ml-1 text-white">{cpu}</strong></li>
        <li className="flex items-center text-gray-300"><Check className="w-5 h-5 text-indigo-400 mr-3" /> Storage: <strong className="ml-1 text-white">{storage}</strong></li>
        <li className="flex items-center text-gray-300"><Check className="w-5 h-5 text-indigo-400 mr-3" /> DDoS Protection: <strong className="ml-1 text-white">Included</strong></li>
      </ul>
      
      <button className={`w-full py-3 rounded-lg font-bold transition ${isPopular ? 'bg-indigo-600 hover:bg-indigo-700 text-white' : 'bg-gray-800 hover:bg-gray-700 text-white'}`}>
        Order Now
      </button>
      <p className="text-center text-xs text-gray-500 mt-4">💰 Use code REDDY2026 for 20% OFF</p>
    </div>
  );
}