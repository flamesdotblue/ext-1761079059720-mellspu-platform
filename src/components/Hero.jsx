import React from 'react';
import Spline from '@splinetool/react-spline';
import { Sparkles, Calendar, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-[100svh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zks9uYILDPSX-UX6/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.35)_40%,rgba(0,0,0,0.75)_75%,rgba(0,0,0,0.9)_100%)] pointer-events-none" />

      <header className="absolute top-0 left-0 right-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-md bg-gradient-to-br from-cyan-400 to-fuchsia-500" />
            <span className="font-semibold tracking-tight">HoloPass Live</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#highlights" className="hover:text-white transition">Highlights</a>
            <a href="#tickets" className="hover:text-white transition">Tickets</a>
            <a href="#faq" className="hover:text-white transition">FAQ</a>
            <a href="#tickets" className="px-4 py-2 rounded-md bg-white text-black font-medium hover:bg-white/90 transition">Get Tickets</a>
          </nav>
        </div>
      </header>

      <div className="relative z-10 h-full max-w-6xl mx-auto px-6 flex flex-col justify-end pb-20 md:pb-28">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur px-3 py-1 text-xs text-white/80 mb-4">
            <Sparkles size={14} className="text-cyan-300" />
            <span>Immersive futuristic ticketed experience</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
            The Future of Events, Unlocked by a Holographic Ticket
          </h1>
          <p className="mt-4 text-white/80 max-w-xl">
            Step into a high-voltage night of performance, light, and sound. Your holographic "ADMIT ONE" is more than a pass—it’s the key to an unforgettable, tech-infused experience.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <a href="#tickets" className="inline-flex items-center justify-center rounded-md px-5 py-3 bg-white text-black font-medium hover:bg-white/90 transition w-full sm:w-auto">
              Secure Your Spot
            </a>
            <a href="#highlights" className="inline-flex items-center justify-center rounded-md px-5 py-3 border border-white/20 bg-white/5 hover:bg-white/10 transition w-full sm:w-auto">
              Explore Highlights
            </a>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-white/70">
            <div className="flex items-center gap-2"><Calendar size={16} /> Sat, Feb 22</div>
            <div className="flex items-center gap-2"><MapPin size={16} /> Pier 27, San Francisco</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
