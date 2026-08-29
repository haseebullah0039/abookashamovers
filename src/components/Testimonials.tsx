"use client";

import { useEffect, useState } from "react";
import type { Dictionary } from "@/i18n/dictionaries";

export default function Testimonials({ en, ar }: { en: Dictionary; ar: Dictionary }) {
  const [active, setActive] = useState(0);
  const items = en.testimonials.items;

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % items.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [items.length]);

  const item = items[active];
  const arItem = ar.testimonials.items[active];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-brand-dark relative overflow-hidden">
      <div className="absolute -right-32 -bottom-32 w-96 h-96 rounded-full bg-brand-red/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-12 lg:gap-14 items-center">
        <div className="relative animate-fade-up max-w-md mx-auto lg:max-w-none">
          <img
            src="/customer%20feedback.webp"
            alt="Happy customer feedback"
            loading="lazy"
            className="rounded-2xl sm:rounded-3xl shadow-2xl w-full h-64 sm:h-80 lg:h-96 object-cover hover:scale-[1.02] transition-transform duration-500"
          />
          <div className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-brand-red text-white flex items-center justify-center text-xl sm:text-3xl shadow-xl border-4 border-brand-dark animate-pulse-ring">
            📍
          </div>
        </div>

        <div className="animate-fade-up delay-200 text-center lg:text-left">
          <span className="text-brand-red font-semibold tracking-widest text-sm">
            {en.testimonials.kicker} <span className="font-arabic" lang="ar" dir="rtl">/ {ar.testimonials.kicker}</span>
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mt-3 mb-1">
            {en.testimonials.title}
          </h2>
          <h3 className="font-arabic text-xl sm:text-2xl md:text-3xl font-extrabold text-white/80 mb-6" lang="ar" dir="rtl">
            {ar.testimonials.title}
          </h3>

          <div className="relative min-h-[220px] sm:min-h-[200px]">
            <div key={active} className="animate-fade-in">
              <div className="text-6xl text-brand-red font-serif leading-none mb-4">&quot;</div>
              <p className="text-white/60 text-base sm:text-lg mb-3 max-w-lg mx-auto lg:mx-0">
                {item.quote}
              </p>
              <p className="font-arabic text-white/50 text-base sm:text-lg mb-8 max-w-lg mx-auto lg:mx-0" lang="ar" dir="rtl">
                {arItem.quote}
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <img
                  src={item.img}
                  alt={item.customerName}
                  className="w-14 h-14 rounded-full object-cover border-2 border-brand-red"
                />
                <div>
                  <div className="text-white font-bold">{item.customerName}</div>
                  <div className="text-white/40 text-sm">{item.customerTag}</div>
                  <div className="font-arabic text-white/40 text-sm" lang="ar" dir="rtl">
                    {arItem.customerName} — {arItem.customerTag}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-start gap-2 mt-8">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Show testimonial ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === active ? "w-8 bg-brand-red" : "w-2 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
