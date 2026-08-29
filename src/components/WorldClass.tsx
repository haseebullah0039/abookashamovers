import type { Dictionary } from "@/i18n/dictionaries";

export default function WorldClass({ en, ar }: { en: Dictionary; ar: Dictionary }) {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="relative animate-fade-up max-w-md mx-auto md:max-w-none">
          <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 bg-brand-red text-white rounded-2xl px-4 sm:px-5 py-2.5 sm:py-3 shadow-xl z-10 hover:-translate-y-1 transition-transform duration-300">
            <div className="font-extrabold text-lg leading-none">{en.worldClass.badge1}</div>
            <div className="text-[10px] tracking-widest mt-1">{en.worldClass.badge2}</div>
            <div className="font-arabic text-[10px] tracking-widest" dir="rtl">{ar.worldClass.badge2}</div>
          </div>
          <img
            src="/Trusted movers.webp"
            alt="Mover with boxes"
            loading="lazy"
            className="rounded-2xl sm:rounded-3xl shadow-2xl w-full h-64 sm:h-80 md:h-[420px] object-cover hover:scale-[1.02] transition-transform duration-500"
          />
        </div>

        <div className="animate-fade-up delay-200 text-center md:text-left">
          <span className="text-brand-red font-semibold tracking-widest text-sm">
            {en.worldClass.kicker} <span className="font-arabic" dir="rtl">/ {ar.worldClass.kicker}</span>
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-dark mt-3 mb-1 leading-snug">
            {en.worldClass.title}
          </h2>
          <h3 className="font-arabic text-xl sm:text-2xl md:text-3xl font-extrabold text-brand-dark/80 mb-6 leading-snug" dir="rtl">
            {ar.worldClass.title}
          </h3>
          <p className="text-slate-500 mb-2">{en.worldClass.desc}</p>
          <p className="font-arabic text-slate-500 mb-8" dir="rtl">
            {ar.worldClass.desc}
          </p>

          <div className="space-y-5 mb-8 max-w-sm mx-auto md:max-w-none md:mx-0 text-left">
            {en.worldClass.points.map((p, i) => (
              <div
                key={p.title}
                className="flex items-center gap-4 group cursor-default"
              >
                <span className="w-12 h-12 shrink-0 rounded-full bg-brand-red/10 text-brand-red flex items-center justify-center text-xl group-hover:bg-brand-red group-hover:text-white group-hover:scale-110 transition-all duration-300">
                  {p.icon}
                </span>
                <div>
                  <span className="block font-semibold text-brand-dark group-hover:text-brand-red transition-colors duration-300">
                    {p.title}
                  </span>
                  <span className="block font-arabic text-sm text-brand-dark/70 group-hover:text-brand-red transition-colors duration-300" dir="rtl">
                    {ar.worldClass.points[i].title}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="inline-flex flex-col items-center gap-1 bg-brand-red text-white font-semibold px-7 py-4 rounded-full hover:bg-brand-dark hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
          >
            <span>{en.worldClass.cta}</span>
            <span className="font-arabic text-xs" dir="rtl">
              {ar.worldClass.cta}
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
