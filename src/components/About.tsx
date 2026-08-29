import type { Dictionary } from "@/i18n/dictionaries";

export default function About({ en, ar }: { en: Dictionary; ar: Dictionary }) {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="relative animate-fade-up max-w-sm sm:max-w-md mx-auto md:max-w-none">
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <img
              src="/about11.webp"
              className="rounded-2xl object-cover h-40 sm:h-64 w-full mt-10 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              alt="Movers team"
              loading="lazy"
            />
            <img
              src="/about 2.webp"
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
          <span className="text-brand-red font-semibold tracking-widest text-sm">
            {en.about.kicker} <span className="font-arabic" dir="rtl">/ {ar.about.kicker}</span>
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-dark mt-3 mb-1 leading-snug">
            {en.about.titleLine1} <br className="hidden sm:block" /> {en.about.titleLine2}
          </h2>
          <h3 className="font-arabic text-xl sm:text-2xl md:text-3xl font-extrabold text-brand-dark/80 mb-6 leading-snug" dir="rtl">
            {ar.about.titleLine1} {ar.about.titleLine2}
          </h3>
          <p className="text-slate-500 mb-2">{en.about.desc}</p>
          <p className="font-arabic text-slate-500 mb-8" dir="rtl">
            {ar.about.desc}
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            {en.about.features.map((f, i) => (
              <div
                key={f.title}
                className="flex gap-4 p-4 rounded-xl border border-slate-100 hover:border-brand-red/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                  {f.icon}
                </span>
                <div>
                  <h4 className="font-bold text-brand-dark mb-1">{f.title}</h4>
                  <h4 className="font-arabic font-bold text-brand-dark/80 mb-1" dir="rtl">
                    {ar.about.features[i].title}
                  </h4>
                  <p className="text-sm text-slate-500">{f.desc}</p>
                  <p className="font-arabic text-sm text-slate-500 mt-1" dir="rtl">
                    {ar.about.features[i].desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="#"
            className="inline-flex flex-col items-center gap-1 bg-brand-dark text-white font-semibold px-7 py-4 rounded-full hover:bg-brand-red hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
          >
            <span>{en.about.cta}</span>
            <span className="font-arabic text-xs" dir="rtl">
              {ar.about.cta}
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
