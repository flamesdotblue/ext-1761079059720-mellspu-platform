import React from 'react';
import { Sparkles, MapPin, Clock, Shield } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Immersive Visuals',
    desc: 'Holographic set pieces and reactive lighting that evolve with the music.'
  },
  {
    icon: MapPin,
    title: 'Iconic Venue',
    desc: 'Waterfront views and an open layout designed for flow and comfort.'
  },
  {
    icon: Clock,
    title: 'Late-Night Access',
    desc: 'Extended hours with curated sets and surprise guest performances.'
  },
  {
    icon: Shield,
    title: 'Seamless Entry',
    desc: 'Scan your digital ticket—no lines, no stress, maximum hype.'
  }
];

const Highlights = () => {
  return (
    <section id="highlights" className="relative py-20 md:py-28">
      <div className="absolute inset-0 -z-[1]">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-fuchsia-500/5" />
      </div>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-2xl md:text-4xl font-semibold">Event Highlights</h2>
            <p className="text-white/70 mt-2 max-w-2xl">An evening engineered for immersion—where technology and performance collide in a fluid, cinematic experience.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-6 hover:bg-white/10 transition">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-cyan-400/30 to-fuchsia-500/30 flex items-center justify-center mb-4">
                <Icon className="text-white" size={18} />
              </div>
              <h3 className="font-medium mb-1">{title}</h3>
              <p className="text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
