const FEATURES = [
  {
    icon: "🚛",
    title: "Local Road Movers",
    desc: "Dedicated moving trucks and trained crews for every home and office move in Dubai.",
  },
  {
    icon: "📦",
    title: "Careful Packing",
    desc: "Quality packing materials and safe handling to protect your furniture and belongings.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="relative animate-fade-up max-w-sm sm:max-w-md mx-auto md:max-w-none">
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <img
              src="/about11.png"
              className="rounded-2xl object-cover h-40 sm:h-64 w-full mt-10 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              alt="Movers team"
              loading="lazy"
            />
            <img
              src="/about 2.jpeg"
              className="rounded-2xl object-cover h-40 sm:h-64 w-full shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              alt="Mover with box"
              loading="lazy"
            />
          </div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative w-28 h-28 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-brand-red/40 animate-spin-slow" />
              <div className="w-20 h-20 rounded-full bg-brand-red text-white flex items-center justify-center text-2xl shadow-xl hover:scale-110 transition-transform duration-300 cursor-pointer">
🚚
              </div>
            </div>
          </div>
        </div>

        <div className="animate-fade-up delay-200 text-center md:text-left">
          <span className="text-brand-red font-semibold tracking-widest text-sm">ABOUT US</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-dark mt-3 mb-6 leading-snug">
            Your trusted local moving <br className="hidden sm:block" /> partner in Dubai.
          </h2>
          <p className="text-slate-500 mb-8">
            ABO Okasha Movers is a Dubai-based moving company focused on one thing: getting your
            home or office moved safely, on time, and without stress. Every move is handled by our
            own trained team using dedicated trucks — no subcontractors, no surprises.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="flex gap-4 p-4 rounded-xl border border-slate-100 hover:border-brand-red/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                  {f.icon}
                </span>
                <div>
                  <h3 className="font-bold text-brand-dark mb-1">{f.title}</h3>
                  <p className="text-sm text-slate-500">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="#"
            className="inline-flex items-center gap-2 bg-brand-dark text-white font-semibold px-7 py-4 rounded-full hover:bg-brand-red hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
          >
            GET YOUR FREE QUOTE →
          </a>
        </div>
      </div>
    </section>
  );
}
