import type { Dictionary } from "@/i18n/dictionaries";

export default function AreasWeServe({ en, ar }: { en: Dictionary; ar: Dictionary }) {
  return (
    <section
      aria-labelledby="areas-we-serve-heading"
      className="py-16 sm:py-20 md:py-24 bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 animate-fade-up max-w-2xl mx-auto">
          <span className="text-brand-red font-semibold tracking-widest text-sm">
            {en.areas.kicker} <span className="font-arabic" lang="ar" dir="rtl">/ {ar.areas.kicker}</span>
          </span>
          <h2
            id="areas-we-serve-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-dark mt-3 mb-4 leading-snug"
          >
            {en.areas.title}
          </h2>
          <h3 className="font-arabic text-xl sm:text-2xl md:text-3xl font-extrabold text-brand-dark/80 mb-4 leading-snug" lang="ar" dir="rtl">
            {ar.areas.title}
          </h3>
          <p className="text-slate-500 text-sm sm:text-base">{en.areas.desc}</p>
          <p className="font-arabic text-slate-500 text-sm sm:text-base mt-1" lang="ar" dir="rtl">
            {ar.areas.desc}
          </p>
        </div>

        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
          {en.areas.cities.map((city, i) => (
            <li
              key={city.name}
              className="group flex flex-col items-center text-center bg-white rounded-2xl p-5 sm:p-6 shadow-md hover:shadow-2xl border border-slate-100 hover:border-brand-red/30 transition-all duration-300 hover:-translate-y-2 animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden shadow-lg ring-4 ring-white group-hover:ring-brand-red/20 transition-all duration-300">
                <img
                  src={city.img}
                  alt={`${city.name} skyline, UAE`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="mt-4 font-bold text-brand-dark text-sm sm:text-base group-hover:text-brand-red transition-colors duration-300">
                {city.name}
              </h3>
              <h4 className="font-arabic text-brand-dark/70 text-sm group-hover:text-brand-red transition-colors duration-300" lang="ar" dir="rtl">
                {ar.areas.cities[i].name}
              </h4>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
