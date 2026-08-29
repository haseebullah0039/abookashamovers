import type { Dictionary } from "@/i18n/dictionaries";

export default function Partners({ en, ar }: { en: Dictionary; ar: Dictionary }) {
  return (
    <section className="py-10 sm:py-14 bg-white border-y border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center mb-8">
          <span className="text-brand-red font-semibold tracking-widest text-sm">
            {en.partners.title} <span className="font-arabic" dir="rtl">/ {ar.partners.title}</span>
          </span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8">
          {en.partners.logos.map((l, i) => (
            <div
              key={l}
              className="flex flex-col items-center text-center max-w-[180px] group cursor-default"
            >
              <span className="text-slate-500 font-bold text-sm sm:text-base tracking-wide grayscale group-hover:grayscale-0 group-hover:text-brand-red group-hover:scale-105 transition-all duration-300">
                {l}
              </span>
              <span
                className="font-arabic text-slate-400 text-xs sm:text-sm mt-1 group-hover:text-brand-red transition-colors duration-300"
                dir="rtl"
              >
                {ar.partners.logos[i]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
