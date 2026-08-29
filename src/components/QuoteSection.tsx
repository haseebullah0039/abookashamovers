"use client";

import type { Dictionary } from "@/i18n/dictionaries";

const fieldLabel = "block text-xs font-semibold text-slate-500 mb-1.5";
const fieldInput =
  "w-full border border-slate-200 rounded-lg px-4 py-3 text-sm text-brand-dark outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 transition-all duration-300";

export default function QuoteSection({ en, ar }: { en: Dictionary; ar: Dictionary }) {
  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 bg-brand-dark relative overflow-hidden">
      <div className="absolute -left-32 top-10 w-96 h-96 rounded-full bg-brand-red/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        <div className="animate-fade-up">
          <span className="text-brand-red font-semibold tracking-widest text-sm">
            {en.quote.kicker} <span className="font-arabic" dir="rtl">/ {ar.quote.kicker}</span>
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3 mb-1 leading-snug">
            {en.quote.title}
          </h2>
          <h3 className="font-arabic text-2xl md:text-3xl font-extrabold text-white/80 mb-6 leading-snug" dir="rtl">
            {ar.quote.title}
          </h3>
          <p className="text-white/50 mb-2 max-w-md">{en.quote.desc}</p>
          <p className="font-arabic text-white/40 mb-8 max-w-md" dir="rtl">
            {ar.quote.desc}
          </p>

          <ul className="space-y-4 max-w-md mb-10">
            {en.quote.features.map((f, i) => (
              <li key={f} className="flex items-start gap-3 text-white/80 text-sm sm:text-base">
                <span className="shrink-0 w-6 h-6 rounded-full bg-brand-red/15 text-brand-red flex items-center justify-center text-xs mt-0.5">
                  ✓
                </span>
                <span>
                  <span className="block">{f}</span>
                  <span className="font-arabic block text-white/60 text-sm" dir="rtl">
                    {ar.quote.features[i]}
                  </span>
                </span>
              </li>
            ))}
          </ul>

          <div className="grid sm:grid-cols-3 gap-4 max-w-lg items-stretch">
            {en.quote.contactInfo.map((c, i) => (
              <a
                key={c.label}
                href={c.href}
                className="flex flex-col gap-2 min-w-0 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brand-red/40 rounded-xl px-4 py-4 transition-all duration-300"
              >
                <span className="text-xl">{c.icon}</span>
                <span className="min-w-0">
                  <span className="block text-[11px] text-white/40 tracking-wide">{c.label}</span>
                  <span className="block font-arabic text-[11px] text-white/30 tracking-wide" dir="rtl">
                    {ar.quote.contactInfo[i].label}
                  </span>
                  <span className="block text-sm font-semibold text-white break-words mt-1">{c.value}</span>
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="relative animate-fade-up delay-200">
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-5 sm:p-8 md:p-10 relative z-10 border border-slate-100">
            <span className="text-brand-red font-semibold tracking-widest text-xs">
              {en.quote.formKicker} <span className="font-arabic" dir="rtl">/ {ar.quote.formKicker}</span>
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-brand-dark mt-2 mb-1">{en.quote.formTitle}</h3>
            <h4 className="font-arabic text-lg sm:text-xl font-extrabold text-brand-dark/80 mb-1" dir="rtl">
              {ar.quote.formTitle}
            </h4>
            <p className="text-slate-400 text-sm mb-1">{en.quote.formDesc}</p>
            <p className="font-arabic text-slate-400 text-sm mb-6" dir="rtl">
              {ar.quote.formDesc}
            </p>
            <form
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5"
              onSubmit={(e) => e.preventDefault()}
            >
              <div>
                <label className={fieldLabel}>
                  {en.quote.fields.fullName} / <span className="font-arabic" dir="rtl">{ar.quote.fields.fullName}</span>
                </label>
                <input placeholder={`${en.quote.fields.fullNamePh} / ${ar.quote.fields.fullNamePh}`} className={fieldInput} />
              </div>
              <div>
                <label className={fieldLabel}>
                  {en.quote.fields.phone} / <span className="font-arabic" dir="rtl">{ar.quote.fields.phone}</span>
                </label>
                <input placeholder={en.quote.fields.phonePh} className={fieldInput} />
              </div>
              <div>
                <label className={fieldLabel}>
                  {en.quote.fields.email} / <span className="font-arabic" dir="rtl">{ar.quote.fields.email}</span>
                </label>
                <input type="email" placeholder={en.quote.fields.emailPh} className={fieldInput} />
              </div>
              <div>
                <label className={fieldLabel}>
                  {en.quote.fields.city} / <span className="font-arabic" dir="rtl">{ar.quote.fields.city}</span>
                </label>
                <select defaultValue="" className={`${fieldInput} appearance-none bg-white`}>
                  <option value="" disabled>
                    {en.quote.fields.cityPh} / {ar.quote.fields.cityPh}
                  </option>
                  {en.quote.cities.map((city, i) => (
                    <option key={city} value={city}>
                      {city} / {ar.quote.cities[i]}
                    </option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className={fieldLabel}>
                  {en.quote.fields.service} / <span className="font-arabic" dir="rtl">{ar.quote.fields.service}</span>
                </label>
                <select defaultValue="" className={`${fieldInput} appearance-none bg-white`}>
                  <option value="" disabled>
                    {en.quote.fields.servicePh} / {ar.quote.fields.servicePh}
                  </option>
                  {en.quote.services.map((service, i) => (
                    <option key={service} value={service}>
                      {service} / {ar.quote.services[i]}
                    </option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className={fieldLabel}>
                  {en.quote.fields.message} / <span className="font-arabic" dir="rtl">{ar.quote.fields.message}</span>
                </label>
                <textarea
                  placeholder={en.quote.fields.messagePh}
                  rows={4}
                  className={`${fieldInput} resize-none`}
                />
              </div>
              <button className="sm:col-span-2 bg-brand-red text-white font-semibold py-4 rounded-lg hover:bg-brand-dark hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 inline-flex flex-col items-center justify-center gap-0.5">
                <span className="flex items-center gap-2">
                  {en.quote.submit}
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
                <span className="font-arabic text-xs" dir="rtl">
                  {ar.quote.submit}
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
