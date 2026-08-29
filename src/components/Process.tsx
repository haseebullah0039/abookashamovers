import type { Dictionary } from "@/i18n/dictionaries";

export default function Process({ en, ar }: { en: Dictionary; ar: Dictionary }) {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 animate-fade-up">
          <span className="text-brand-red font-semibold tracking-widest text-sm">
            {en.process.kicker} <span className="font-arabic" dir="rtl">/ {ar.process.kicker}</span>
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-dark mt-3 px-2">
            {en.process.title}
          </h2>
          <h3 className="font-arabic text-xl sm:text-2xl md:text-3xl font-extrabold text-brand-dark/80 mt-1 px-2" dir="rtl">
            {ar.process.title}
          </h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-8 gap-y-10 relative">
          <div className="hidden lg:block absolute top-10 left-[12%] right-[12%] h-0.5 border-t-2 border-dashed border-slate-200" />
          {en.process.steps.map((s, i) => (
            <div
              key={s.num}
              className="relative text-center group animate-fade-up"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="relative mx-auto w-20 h-20 rounded-full bg-slate-50 border-2 border-slate-100 flex items-center justify-center text-3xl mb-6 group-hover:bg-brand-red group-hover:border-brand-red group-hover:-translate-y-2 group-hover:shadow-xl transition-all duration-300">
                {s.icon}
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-brand-dark text-white text-xs font-bold flex items-center justify-center group-hover:bg-brand-red transition-colors duration-300">
                  {s.num}
                </span>
              </div>
              <h3 className="font-bold text-brand-dark mb-1 group-hover:text-brand-red transition-colors duration-300">
                {s.title}
              </h3>
              <h4 className="font-arabic font-bold text-brand-dark/80 mb-2 group-hover:text-brand-red transition-colors duration-300" dir="rtl">
                {ar.process.steps[i].title}
              </h4>
              <p className="text-sm text-slate-500 max-w-[220px] mx-auto">{s.desc}</p>
              <p className="font-arabic text-sm text-slate-500 max-w-[220px] mx-auto mt-1" dir="rtl">
                {ar.process.steps[i].desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
