"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const HERO_IMAGES = ["/hero111.png", "/hero22.png", "/hero33.png"];

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-brand-dark overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-red/90 via-brand-dark to-brand-dark" />
      <div className="absolute -right-24 -top-24 w-64 h-64 sm:w-[500px] sm:h-[500px] rounded-full bg-white/5 animate-float" />
      <div className="absolute right-40 bottom-0 w-40 h-40 sm:w-72 sm:h-72 rounded-full bg-white/5 animate-float delay-300" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-14 sm:py-20 md:py-28 grid md:grid-cols-2 items-center gap-8 md:gap-10">
        <div className="animate-fade-up text-center md:text-left">
          <span className="inline-block bg-white/10 text-white text-[11px] sm:text-xs font-semibold tracking-widest px-4 py-2 rounded-full mb-5 sm:mb-6 backdrop-blur-sm">
            FLEXIBLE MOVER SERVICES
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            CAREFUL MOVES <br />
            <span className="text-brand-red">MADE EASY.</span>
          </h1>
          <p className="text-white/70 mt-5 sm:mt-6 max-w-md mx-auto md:mx-0 text-sm sm:text-base">
            Experience hassle-free premises with our transport service that solves the need for
            unique and organized workflow effortless move.
          </p>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-7 sm:mt-8">
            <a
              href="#contact"
              className="bg-brand-red text-white font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-full shadow-lg shadow-red-900/40 hover:bg-white hover:text-brand-red hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
            >
              GET A QUOTE
            </a>
            <a
              href="#"
              className="flex items-center gap-3 text-white font-semibold group"
            >
              <span className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 flex items-center justify-center text-xl group-hover:bg-brand-red group-hover:scale-110 transition-all duration-300 animate-pulse-ring">
                ▶
              </span>
              DISCOVER
            </a>
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
              <div className="font-bold text-brand-dark text-sm">20+ Years</div>
              <div className="text-xs text-slate-500">of Experience</div>
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
    </section>
  );
}
