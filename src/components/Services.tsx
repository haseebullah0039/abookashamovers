import type { Dictionary } from "@/i18n/dictionaries";

export default function Services({ en, ar }: { en: Dictionary; ar: Dictionary }) {
  return (
    <section id="services" className="py-16 sm:py-20 md:py-24 bg-brand-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_1px_1px,#fff_1px,transparent_0)] bg-[size:24px_24px]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 animate-fade-up">
          <span className="text-brand-red font-semibold tracking-widest text-sm">
            {en.services.kicker} <span className="font-arabic" lang="ar" dir="rtl">/ {ar.services.kicker}</span>
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mt-3 px-2">
            {en.services.title}
          </h2>
          <h3 className="font-arabic text-xl sm:text-2xl md:text-3xl font-extrabold text-white/80 mt-1 px-2" lang="ar" dir="rtl">
            {ar.services.title}
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {en.services.items.map((s, i) => (
            <div
              key={s.title}
              className={`group relative flex flex-col h-full rounded-2xl overflow-hidden bg-white/[0.03] border border-white/10 hover:border-brand-red/60 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl animate-fade-up`}
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              <div className="relative h-52 sm:h-44 md:h-48 overflow-hidden shrink-0">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent" />
              </div>
              <div className="p-6 flex flex-col grow">
                <h3 className="text-white font-bold text-lg mb-1 group-hover:text-brand-red transition-colors duration-300">
                  {s.title}
                </h3>
                <h4 className="font-arabic text-white/80 font-bold text-base mb-2 group-hover:text-brand-red transition-colors duration-300" lang="ar" dir="rtl">
                  {ar.services.items[i].title}
                </h4>
                <p className="text-white/50 text-sm mb-1">{s.desc}</p>
                <p className="font-arabic text-white/40 text-sm mb-4" lang="ar" dir="rtl">
                  {ar.services.items[i].desc}
                </p>
                <a
                  href="#contact"
                  className="mt-auto text-xs font-semibold tracking-widest text-brand-red inline-flex items-center gap-2 group-hover:gap-3 transition-all duration-300"
                >
                  {en.services.learnMore}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
