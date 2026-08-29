"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { Dictionary } from "@/i18n/dictionaries";
import { BiInline } from "@/components/Bi";

export default function Header({ en, ar }: { en: Dictionary; ar: Dictionary }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const NAV_LINKS = [
    { en: en.nav.home, ar: ar.nav.home, href: "#" },
    { en: en.nav.about, ar: ar.nav.about, href: "#about" },
    { en: en.nav.services, ar: ar.nav.services, href: "#services" },
    { en: en.nav.projects, ar: ar.nav.projects, href: "#gallery" },
    { en: en.nav.contact, ar: ar.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="sticky top-0 z-50 w-full bg-white">
      <header
        className={`relative w-full transition-shadow duration-300 ${
          scrolled ? "shadow-lg" : "shadow-sm"
        }`}
      >
        {/* Logo block — overlaps both bars on desktop with an angled right edge */}
        <a
          href="#"
          className="hidden lg:flex absolute left-0 top-0 bottom-0 w-[220px] xl:w-[272px] 2xl:w-80 z-30 items-center pl-6 xl:pl-8 bg-white group"
          style={{ clipPath: "polygon(0 0, 100% 0, 84% 100%, 0 100%)" }}
        >
          <Image
            src="/Main Logo.webp"
            alt="ABO Okasha Movers Logo"
            width={280}
            height={90}
            style={{ height: scrolled ? 60 : 70 }}
            className={`ml-2 xl:ml-5 w-auto group-hover:-translate-y-0.5 transition-all duration-300 ${
              scrolled ? "2xl:!h-[70px]" : "2xl:!h-[80px]"
            }`}
            priority
          />
        </a>

        {/* Top info bar */}
        <div
          className={`hidden lg:block bg-brand-dark text-white/80 text-sm transition-all duration-300 overflow-hidden ${
            scrolled ? "max-h-0 py-0" : "max-h-12 py-3"
          }`}
        >
          <div className="pl-[236px] xl:pl-[292px] 2xl:pl-[21rem] pr-4 xl:pr-6 flex items-center justify-between flex-wrap gap-y-1">
            <div className="flex items-center gap-4 xl:gap-6 2xl:gap-8 flex-wrap text-xs xl:text-sm">
              <span className="flex items-center gap-2 hover:text-white transition-colors">
                <span className="text-brand-red">📍</span>
                <BiInline en={en.topBar.address} ar={ar.topBar.address} />
              </span>
              <span className="hidden xl:flex items-center gap-2 hover:text-white transition-colors">
                <span className="text-brand-red">✉️</span> {en.topBar.email}
              </span>
              <span className="hidden 2xl:flex items-center gap-2 hover:text-white transition-colors">
                <span className="text-brand-red">🕒</span>
                <BiInline en={en.topBar.hours} ar={ar.topBar.hours} />
              </span>
            </div>
            <div className="flex items-center gap-3 -mt-[7px]">
              <a
                href="https://www.facebook.com/abookashamovers/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-md bg-white/10 flex items-center justify-center hover:bg-brand-red transition-all duration-300 hover:-translate-y-0.5"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-white">
                  <path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06C2 17.08 5.66 21.23 10.44 22v-7.02H7.9v-2.92h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.92h-2.34V22C18.34 21.23 22 17.08 22 12.06Z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="TikTok"
                className="w-8 h-8 rounded-md bg-white/10 flex items-center justify-center hover:bg-brand-red transition-all duration-300 hover:-translate-y-0.5"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-white">
                  <path d="M16.6 5.82c-.93-.9-1.5-2.15-1.5-3.54h-3.13v13.66c0 1.5-1.22 2.72-2.72 2.72a2.72 2.72 0 0 1 0-5.44c.27 0 .53.04.78.11V10.2a5.9 5.9 0 0 0-.78-.05A5.85 5.85 0 0 0 3.3 16c0 3.23 2.62 5.85 5.85 5.85S15 19.23 15 16V9.14a7.53 7.53 0 0 0 4.4 1.41V7.42c-.98 0-1.89-.31-2.8-.95Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Main nav row */}
        <div className="relative bg-white">
          <div
            className="hidden lg:block absolute left-0 top-0 bottom-0 w-[220px] xl:w-[272px] 2xl:w-[19rem] bg-slate-100"
            style={{ clipPath: "polygon(0 0, 100% 0, 88% 100%, 0 100%)" }}
          />
          <div className="flex items-center justify-between pl-3 lg:pl-[236px] xl:pl-[292px] 2xl:pl-[21rem] pr-2 sm:pr-4 xl:pr-6 py-0 sm:py-4 h-[73px] sm:h-auto">
            {/* mobile logo */}
            <a href="#" className="flex lg:hidden items-center gap-2 ml-[20px] sm:ml-0">
              <Image
                src="/Main Logo.webp"
                alt="ABO Okasha Movers Logo"
                width={180}
                height={58}
                className={`w-auto transition-all duration-300 ${
                  scrolled ? "h-[50px]" : "h-[60px]"
                }`}
                priority
              />
            </a>

            <nav className="hidden lg:flex items-center gap-3 xl:gap-5 2xl:gap-7">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.en}
                  href={link.href}
                  className={`relative whitespace-nowrap text-xs xl:text-sm 2xl:text-base font-bold tracking-wide py-2 leading-tight after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:bg-brand-red after:transition-all after:duration-300 hover:after:w-full hover:text-brand-red transition-colors text-center ${
                    link.en === en.nav.home
                      ? "text-brand-red after:w-full"
                      : "text-brand-dark after:w-0"
                  }`}
                >
                  <span className="block">{link.en}</span>
                  <span className="block font-arabic text-[10px] xl:text-[11px] 2xl:text-xs" dir="rtl">
                    {link.ar}
                  </span>
                </a>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-2 xl:gap-4 2xl:gap-6">
              <a
                href="tel:+971566006415"
                className="flex items-center gap-3 group mr-1 xl:mr-2 2xl:mr-[35px]"
                aria-label="Call us"
              >
                <span className="relative w-9 h-9 xl:w-11 xl:h-11 2xl:w-12 2xl:h-12 shrink-0 rounded-full bg-brand-red text-white flex items-center justify-center text-lg group-hover:scale-110 transition-transform duration-300 animate-pulse-ring">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 xl:w-5 xl:h-5 fill-white">
                    <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.36 11.36 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.57 1 1 0 0 1-.25 1.02l-2.2 2.2Z" />
                  </svg>
                </span>
                <div className="hidden xl:block leading-tight whitespace-nowrap">
                  <div className="text-xs text-slate-400">
                    <BiInline en={en.nav.callUs} ar={ar.nav.callUs} />
                  </div>
                  <div className="font-bold text-base 2xl:text-xl text-brand-dark">+971 56 600 6415</div>
                </div>
              </a>

              <a
                href="#contact"
                className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-brand-dark pl-4 pr-3 py-2.5 xl:pl-5 xl:pr-4 xl:py-3 2xl:pl-6 2xl:pr-5 2xl:py-3.5 text-[11px] xl:text-xs font-bold text-white shadow-md shadow-red-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 2xl:mr-[30px] text-center whitespace-nowrap"
              >
                <span className="absolute inset-0 -translate-x-full bg-brand-red transition-transform duration-500 ease-out group-hover:translate-x-0" />
                <span className="relative z-10 flex flex-col">
                  <span>{en.nav.getQuote}</span>
                  <span className="font-arabic text-[10px]" dir="rtl">
                    {ar.nav.getQuote}
                  </span>
                </span>
                <span className="relative z-10 inline-flex items-center transition-transform duration-300 ease-out group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>

            <button
              className="lg:hidden text-4xl text-brand-dark mr-[20px]"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 bg-white ${
            open ? "max-h-[520px] border-t border-slate-100" : "max-h-0"
          }`}
        >
          <nav className="flex flex-col px-4 sm:px-6 py-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.en}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-bold text-brand-dark border-b border-slate-100 last:border-none hover:text-brand-red hover:pl-2 transition-all duration-200"
              >
                <span className="block">{link.en}</span>
                <span className="block font-arabic text-sm text-slate-400" dir="rtl">
                  {link.ar}
                </span>
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 mb-2 bg-brand-red text-white text-sm font-bold text-center px-6 py-3.5 rounded-full hover:bg-brand-dark transition-colors duration-300"
            >
              <span className="block">{en.nav.getQuote}</span>
              <span className="block font-arabic text-xs" dir="rtl">
                {ar.nav.getQuote}
              </span>
            </a>
          </nav>
        </div>
      </header>
    </div>
  );
}
