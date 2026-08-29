"use client";

import type { Dictionary } from "@/i18n/dictionaries";

export default function Footer({ en, ar }: { en: Dictionary; ar: Dictionary }) {
  return (
    <footer className="bg-[#070c17] pt-14 sm:pt-20 pb-6 relative overflow-hidden">
      <div className="absolute -left-20 -top-20 w-72 h-72 rounded-full bg-brand-red/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 sm:pb-14 border-b border-white/10 text-center sm:text-left">
        <div>
          <div className="text-2xl font-extrabold text-white mb-1">
            {en.footer.brand} <span className="text-brand-red">{en.footer.brandRed}</span>
          </div>
          <div className="font-arabic text-lg font-extrabold text-white/70 mb-4" dir="rtl">
            {ar.footer.brand} <span className="text-brand-red">{ar.footer.brandRed}</span>
          </div>
          <p className="text-white/40 text-sm mb-1">{en.footer.desc}</p>
          <p className="font-arabic text-white/30 text-sm mb-6" dir="rtl">
            {ar.footer.desc}
          </p>
          <div className="flex gap-3 justify-center sm:justify-start">
            {[
              { s: "f", href: "https://www.facebook.com/abookashamovers/", label: "Facebook" },
              { s: "x", href: "#", label: "X" },
              { s: "in", href: "#", label: "LinkedIn" },
              { s: "ig", href: "#", label: "Instagram" },
            ].map(({ s, href, label }) => (
              <a
                key={s}
                href={href}
                target={href !== "#" ? "_blank" : undefined}
                rel={href !== "#" ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/60 text-xs hover:bg-brand-red hover:text-white hover:border-brand-red hover:-translate-y-1 transition-all duration-300"
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-1">
            {en.footer.servicesTitle} <span className="font-arabic text-white/60" dir="rtl">/ {ar.footer.servicesTitle}</span>
          </h4>
          <ul className="space-y-3 mt-4">
            {en.footer.services.map((s, i) => (
              <li key={s}>
                <a
                  href="#"
                  className="text-white/40 text-sm hover:text-brand-red hover:pl-2 transition-all duration-300 block"
                >
                  <span className="block">{s}</span>
                  <span className="font-arabic block text-white/30 text-xs" dir="rtl">
                    {ar.footer.services[i]}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-1">
            {en.footer.linksTitle} <span className="font-arabic text-white/60" dir="rtl">/ {ar.footer.linksTitle}</span>
          </h4>
          <ul className="space-y-3 mt-4">
            {en.footer.links.map((s, i) => (
              <li key={s}>
                <a
                  href="#"
                  className="text-white/40 text-sm hover:text-brand-red hover:pl-2 transition-all duration-300 block"
                >
                  <span className="block">{s}</span>
                  <span className="font-arabic block text-white/30 text-xs" dir="rtl">
                    {ar.footer.links[i]}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-1">
            {en.footer.newsletterTitle} <span className="font-arabic text-white/60" dir="rtl">/ {ar.footer.newsletterTitle}</span>
          </h4>
          <p className="text-white/40 text-sm mb-1 mt-4">{en.footer.newsletterDesc}</p>
          <p className="font-arabic text-white/30 text-sm mb-4" dir="rtl">
            {ar.footer.newsletterDesc}
          </p>
          <form className="flex" onSubmit={(e) => e.preventDefault()}>
            <input
              placeholder={en.footer.newsletterPh}
              className="min-w-0 flex-1 bg-white/5 border border-white/15 rounded-l-full px-4 py-3 text-sm text-white outline-none focus:border-brand-red transition-colors duration-300"
            />
            <button className="bg-brand-red text-white px-5 rounded-r-full hover:bg-red-700 transition-colors duration-300">
              →
            </button>
          </form>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-6 flex flex-wrap items-center justify-center sm:justify-between gap-4 text-white/30 text-xs text-center">
        <span>
          {en.footer.copyright} <span className="font-arabic" dir="rtl">/ {ar.footer.copyright}</span>
        </span>
        <div className="flex gap-6">
          <a href="#" className="hover:text-brand-red transition-colors duration-300">
            {en.footer.privacy} / <span className="font-arabic" dir="rtl">{ar.footer.privacy}</span>
          </a>
          <a href="#" className="hover:text-brand-red transition-colors duration-300">
            {en.footer.terms} / <span className="font-arabic" dir="rtl">{ar.footer.terms}</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
