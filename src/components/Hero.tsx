"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { Dictionary } from "@/i18n/dictionaries";

const HERO_IMAGES = ["/hero111.webp", "/hero22.webp", "/hero33.webp"];

export default function Hero({ en, ar }: { en: Dictionary; ar: Dictionary }) {
  const [active, setActive] = useState(0);
  const [videoOpen, setVideoOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!videoOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setVideoOpen(false);
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [videoOpen]);

  return (
    <section className="relative bg-brand-dark overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-red/90 via-brand-dark to-brand-dark" />
      <div className="absolute -right-24 -top-24 w-64 h-64 sm:w-[500px] sm:h-[500px] rounded-full bg-white/5 animate-float" />
      <div className="absolute right-40 bottom-0 w-40 h-40 sm:w-72 sm:h-72 rounded-full bg-white/5 animate-float delay-300" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-14 sm:py-20 md:py-28 grid md:grid-cols-2 items-center gap-8 md:gap-10">
        <div className="animate-fade-up text-center md:text-left">
          <span className="inline-flex flex-col bg-white/10 text-white text-[11px] sm:text-xs font-semibold tracking-widest px-4 py-2 rounded-full mb-5 sm:mb-6 backdrop-blur-sm">
            <span>{en.hero.badge}</span>
            <span className="font-arabic" lang="ar" dir="rtl">
              {ar.hero.badge}
            </span>
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            {en.hero.titleLine1} <br />
            <span className="text-brand-red">{en.hero.titleLine2}</span>
          </h1>
          <h2 className="font-arabic text-2xl sm:text-3xl md:text-4xl font-extrabold text-white/90 leading-snug mt-2" lang="ar" dir="rtl">
            {ar.hero.titleLine1} <span className="text-brand-red">{ar.hero.titleLine2}</span>
          </h2>
          <p className="text-white/70 mt-5 sm:mt-6 max-w-md mx-auto md:mx-0 text-sm sm:text-base">
            {en.hero.desc}
          </p>
          <p className="font-arabic text-white/60 mt-2 max-w-md mx-auto md:mx-0 text-sm sm:text-base" lang="ar" dir="rtl">
            {ar.hero.desc}
          </p>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-7 sm:mt-8">
            <a
              href="#contact"
              className="flex flex-col items-center bg-brand-red text-white font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded-full shadow-lg shadow-red-900/40 hover:bg-white hover:text-brand-red hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
            >
              <span>{en.hero.ctaQuote}</span>
              <span className="font-arabic text-xs" lang="ar" dir="rtl">
                {ar.hero.ctaQuote}
              </span>
            </a>
            <button
              type="button"
              onClick={() => setVideoOpen(true)}
              className="flex items-center gap-3 text-white font-semibold group cursor-pointer"
            >
              <span className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 flex items-center justify-center text-xl group-hover:bg-brand-red group-hover:scale-110 transition-all duration-300 animate-pulse-ring">
                ▶
              </span>
              <span className="flex flex-col text-left">
                <span>{en.hero.ctaWatchVideo}</span>
                <span className="font-arabic text-xs text-white/70" lang="ar" dir="rtl">
                  {ar.hero.ctaWatchVideo}
                </span>
              </span>
            </button>
          </div>
        </div>

        <div className="relative animate-fade-in delay-200 w-full max-w-md mx-auto md:max-w-none">
          <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 h-64 sm:h-80 md:h-[420px]">
            {HERO_IMAGES.map((src, i) => (
              <Image
                key={src}
                src={src}
                alt="Mover carrying boxes"
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                priority={i === 0}
                className={`object-cover transition-opacity duration-1000 ${
                  i === active ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
          <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white rounded-2xl shadow-xl px-4 sm:px-6 py-3 sm:py-4 hidden sm:flex items-center gap-3 animate-float">
            <span className="text-3xl">🚚</span>
            <div>
              <div className="font-bold text-brand-dark text-sm">{en.hero.badgeCard1}</div>
              <div className="text-xs text-slate-500">
                {en.hero.badgeCard2} <span className="font-arabic" lang="ar" dir="rtl">/ {ar.hero.badgeCard2}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* dot indicators */}
      <div className="relative flex justify-center gap-2 pb-8">
        {HERO_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Show slide ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === active ? "w-8 bg-brand-red" : "w-2 bg-white/30"
            }`}
          />
        ))}
      </div>

      {/* Watch-video modal */}
      {videoOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Movers ad video"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-6 animate-fade-in"
          onClick={() => setVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-3xl rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setVideoOpen(false)}
              aria-label="Close video"
              className="absolute -top-3 -right-3 sm:top-3 sm:right-3 z-10 w-9 h-9 rounded-full bg-white text-brand-dark flex items-center justify-center text-lg font-bold shadow-lg hover:bg-brand-red hover:text-white transition-colors duration-300"
            >
              ✕
            </button>
            <video
              src="/Movers%20Ads%20Video.mp4"
              controls
              autoPlay
              playsInline
              className="w-full max-h-[80vh] aspect-video bg-black"
            >
              Sorry, your browser doesn&apos;t support embedded videos.
            </video>
          </div>
        </div>
      )}
    </section>
  );
}
