import React from 'react';
import { Ticket } from 'lucide-react';

const tiers = [
  {
    name: 'General Admission',
    price: 79,
    perks: ['Express digital entry', 'Access to main floor', 'Merch pop-up'],
    cta: 'Buy GA'
  },
  {
    name: 'Holo+ Pass',
    price: 129,
    perks: ['Priority line', 'Hologram lounge access', '1 complimentary drink'],
    cta: 'Buy Holo+'
  },
  {
    name: 'Ultra VIP',
    price: 249,
    perks: ['Backstage catwalk', 'Artist meet & greet', 'Exclusive poster'],
    cta: 'Buy Ultra VIP'
  }
];

const TierCard = ({ name, price, perks, cta, featured }) => (
  <div className={`relative rounded-2xl border ${featured ? 'border-cyan-400/40' : 'border-white/10'} bg-white/5 backdrop-blur p-6 flex flex-col`}> 
    {featured && (
      <div className="absolute -top-3 left-6 text-[11px] uppercase tracking-wider px-2 py-1 rounded-md bg-cyan-500 text-black font-semibold">Popular</div>
    )}
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-lg font-medium">{name}</h3>
      <Ticket size={18} className="text-white/70" />
    </div>
    <div className="mb-4">
      <span className="text-3xl font-semibold">${price}</span>
      <span className="text-white/60 ml-1 text-sm">/ticket</span>
    </div>
    <ul className="space-y-2 text-sm text-white/80 mb-6">
      {perks.map((p) => (
        <li key={p} className="flex items-start gap-2">
          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500" />
          <span>{p}</span>
        </li>
      ))}
    </ul>
    <button className={`mt-auto inline-flex items-center justify-center rounded-md px-4 py-2 font-medium transition ${featured ? 'bg-white text-black hover:bg-white/90' : 'border border-white/20 hover:bg-white/10'}`} onClick={() => alert(`Added ${name} to cart`)}>
      {cta}
    </button>
  </div>
);

const TicketTiers = () => {
  return (
    <section id="tickets" className="relative py-20 md:py-28">
      <div className="absolute inset-0 -z-[1]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.15)_0%,transparent_40%),radial-gradient(ellipse_at_bottom_right,rgba(217,70,239,0.12)_0%,transparent_50%)]" />
      </div>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <h2 className="text-2xl md:text-4xl font-semibold">Choose Your Access</h2>
            <p className="text-white/70 mt-2 max-w-2xl">Every ticket is a holographic key. Pick the experience level that matches your energy.</p>
          </div>
          <div className="flex items-center gap-3 text-sm text-white/70">
            <span className="inline-flex h-2 w-2 rounded-full bg-cyan-400" />
            <span>Limited quantities available</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <TierCard key={t.name} featured={i === 1} {...t} />
          ))}
        </div>

        <p className="text-center text-xs text-white/60 mt-6">Prices include fees. Secure checkout. Instant delivery to your wallet or email.</p>
      </div>
    </section>
  );
};

export default TicketTiers;
