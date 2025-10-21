import React from 'react';
import Hero from './components/Hero';
import TicketTiers from './components/TicketTiers';
import Highlights from './components/Highlights';
import FAQ from './components/FAQ';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <Hero />
      <main>
        <Highlights />
        <TicketTiers />
        <FAQ />
      </main>
      <footer className="border-t border-white/10 mt-20">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/60">© {new Date().getFullYear()} HoloPass Live. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm text-white/60">
            <a href="#tickets" className="hover:text-white transition">Tickets</a>
            <a href="#highlights" className="hover:text-white transition">Highlights</a>
            <a href="#faq" className="hover:text-white transition">FAQ</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
