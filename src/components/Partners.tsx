const LOGOS = ["Swopping", "AIR EXPRESS", "Fast Shipping", "King Company", "delivery"];

export default function Partners() {
  return (
    <section className="py-10 sm:py-14 bg-white border-y border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 flex flex-wrap items-center justify-center sm:justify-between gap-6 sm:gap-10">
        {LOGOS.map((l) => (
          <span
            key={l}
            className="text-slate-300 font-bold text-base sm:text-xl tracking-wide grayscale hover:grayscale-0 hover:text-brand-red hover:scale-110 transition-all duration-300 cursor-default"
          >
            {l}
          </span>
        ))}
      </div>
    </section>
  );
}
