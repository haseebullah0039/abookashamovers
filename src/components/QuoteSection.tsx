"use client";

const SLIDERS = [
  { label: "Road Freight", value: 80 },
  { label: "Train Freight", value: 60 },
  { label: "Ocean Freight", value: 45 },
];

export default function QuoteSection() {
  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 bg-brand-dark relative overflow-hidden">
      <div className="absolute -left-32 top-10 w-96 h-96 rounded-full bg-brand-red/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        <div className="animate-fade-up">
          <span className="text-brand-red font-semibold tracking-widest text-sm">MOVING SAFETY</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3 mb-6 leading-snug">
            Efficient, safe, &amp; swift moving solution!
          </h2>
          <p className="text-white/50 mb-10 max-w-md">
            Move easy up to the big luggage getting rid look at, well then relax with the perfect
            support that suits you for a stress-free, efficiently packaging and dedicated moving.
          </p>

          <div className="space-y-6 max-w-md">
            {SLIDERS.map((s) => (
              <div key={s.label}>
                <div className="flex justify-between text-sm text-white/70 mb-2 font-medium">
                  <span>{s.label}</span>
                  <span>{s.value}%</span>
                </div>
                <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-brand-red transition-all duration-1000 ease-out"
                    style={{ width: `${s.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <p className="text-white/60 mt-10">
            Have Any Question ? Call Us Free:{" "}
            <a href="tel:+971566006415" className="text-brand-red font-bold hover:underline">
              +971 56 600 6415
            </a>
          </p>
        </div>

        <div className="relative animate-fade-up delay-200">
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-5 sm:p-8 relative z-10">
            <span className="text-brand-red font-semibold tracking-widest text-xs">GET IN TOUCH</span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-brand-dark mt-2 mb-6">Request A Quote</h3>
            <form
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                placeholder="Your Name"
                className="sm:col-span-1 border border-slate-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 transition-all duration-300"
              />
              <input
                placeholder="Your Phone"
                className="sm:col-span-1 border border-slate-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 transition-all duration-300"
              />
              <input
                placeholder="Your Email"
                className="sm:col-span-1 border border-slate-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 transition-all duration-300"
              />
              <input
                placeholder="Subject"
                className="sm:col-span-1 border border-slate-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 transition-all duration-300"
              />
              <textarea
                placeholder="Message"
                rows={4}
                className="sm:col-span-2 border border-slate-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 transition-all duration-300 resize-none"
              />
              <button className="sm:col-span-2 bg-brand-red text-white font-semibold py-4 rounded-lg hover:bg-brand-dark hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300">
                GET A QUOTE
              </button>
            </form>
          </div>
          <img
            src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=500&q=80&auto=format&fit=crop"
            alt="Delivery truck"
            loading="lazy"
            className="hidden xl:block absolute -bottom-10 -right-16 w-64 rounded-2xl shadow-2xl border-4 border-white rotate-3 hover:rotate-0 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
}
