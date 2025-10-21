import React from 'react';

const faqs = [
  {
    q: 'How do I receive my holographic ticket?',
    a: 'Immediately after purchase, your digital ticket is delivered via email and can be added to your mobile wallet. A scannable visual code will glow on entry screens for fast validation.'
  },
  {
    q: 'Is there a minimum age?',
    a: '21+ with valid government-issued ID. Entry staff will verify age before scanning your pass.'
  },
  {
    q: 'Can I transfer my ticket?',
    a: 'Yes. You can securely transfer your ticket to another guest up to 2 hours before doors open.'
  },
  {
    q: 'What is the refund policy?',
    a: 'All sales are final. If the event is postponed, tickets automatically transfer to the new date or can be credited toward a future show.'
  }
];

const FAQItem = ({ q, a }) => (
  <details className="group rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition p-5 open:bg-white/10">
    <summary className="cursor-pointer list-none flex items-center justify-between gap-4">
      <h3 className="font-medium">{q}</h3>
      <span className="ml-4 text-white/50 group-open:rotate-45 transition">+</span>
    </summary>
    <p className="mt-3 text-white/75 text-sm leading-relaxed">{a}</p>
  </details>
);

const FAQ = () => {
  return (
    <section id="faq" className="relative py-20 md:py-28">
      <div className="absolute inset-0 -z-[1]">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
      </div>
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-2xl md:text-4xl font-semibold text-center">Frequently Asked Questions</h2>
        <p className="text-white/70 text-center mt-2 mb-8">All the details you need for a smooth, elevated night.</p>
        <div className="space-y-4">
          {faqs.map((f) => (
            <FAQItem key={f.q} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
