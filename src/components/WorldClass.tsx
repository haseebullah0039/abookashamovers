const POINTS = [
  { icon: "🌍", title: "Domestic and international Service" },
  { icon: "🚚", title: "Multi model Transport Service" },
  { icon: "🕒", title: "Dedicated & Time Bound deliveries" },
];

export default function WorldClass() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="relative animate-fade-up max-w-md mx-auto md:max-w-none">
          <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 bg-brand-red text-white rounded-2xl px-4 sm:px-5 py-2.5 sm:py-3 shadow-xl z-10 hover:-translate-y-1 transition-transform duration-300">
            <div className="font-extrabold text-lg leading-none">20+</div>
            <div className="text-[10px] tracking-widest mt-1">YEARS EXP</div>
          </div>
          <img
            src="/Trusted movers.png"
            alt="Mover with boxes"
            loading="lazy"
            className="rounded-2xl sm:rounded-3xl shadow-2xl w-full h-64 sm:h-80 md:h-[420px] object-cover hover:scale-[1.02] transition-transform duration-500"
          />
        </div>

        <div className="animate-fade-up delay-200 text-center md:text-left">
          <span className="text-brand-red font-semibold tracking-widest text-sm">TRUSTED MOVER SERVICE</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-dark mt-3 mb-6 leading-snug">
            World class moving &amp; packers services
          </h2>
          <p className="text-slate-500 mb-8">
            All movers and packers that work with us have gone through an exhaustive vetting
            process, ensuring the safety of your possessions.
          </p>

          <div className="space-y-5 mb-8 max-w-sm mx-auto md:max-w-none md:mx-0 text-left">
            {POINTS.map((p) => (
              <div
                key={p.title}
                className="flex items-center gap-4 group cursor-default"
              >
                <span className="w-12 h-12 shrink-0 rounded-full bg-brand-red/10 text-brand-red flex items-center justify-center text-xl group-hover:bg-brand-red group-hover:text-white group-hover:scale-110 transition-all duration-300">
                  {p.icon}
                </span>
                <span className="font-semibold text-brand-dark group-hover:text-brand-red transition-colors duration-300">
                  {p.title}
                </span>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-brand-red text-white font-semibold px-7 py-4 rounded-full hover:bg-brand-dark hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
          >
            CONTACT US →
          </a>
        </div>
      </div>
    </section>
  );
}
