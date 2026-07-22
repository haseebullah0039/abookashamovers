const POSTS = [
  {
    date: "APRIL 26, 2025",
    title: "Load Boosts Show Flat Demand & Higher Rates",
    img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&q=80&auto=format&fit=crop",
  },
  {
    date: "APRIL 25, 2025",
    title: "Steps Involved in Packing The Consignment",
    img: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&q=80&auto=format&fit=crop",
  },
  {
    date: "APRIL 24, 2025",
    title: "Our Home Entertainment Has Evolved Significantly",
    img: "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=600&q=80&auto=format&fit=crop",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-16 sm:py-20 md:py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-center sm:justify-between gap-6 mb-12 sm:mb-14 animate-fade-up text-center sm:text-left">
          <div>
            <span className="text-brand-red font-semibold tracking-widest text-sm">CLICK & NEWS</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-dark mt-3">
              What news do we have today, latest blog
            </h2>
          </div>
          <a
            href="#"
            className="bg-brand-red text-white font-semibold px-7 py-4 rounded-full hover:bg-brand-dark hover:-translate-y-1 hover:shadow-xl transition-all duration-300 whitespace-nowrap"
          >
            VIEW ALL LATEST NEWS
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {POSTS.map((p, i) => (
            <article
              key={p.title}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-up"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="relative overflow-hidden h-52">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <span className="absolute top-4 left-4 bg-brand-red text-white text-xs font-bold px-3 py-1.5 rounded-full">
                  {p.date}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-brand-dark text-lg mb-4 group-hover:text-brand-red transition-colors duration-300">
                  {p.title}
                </h3>
                <a
                  href="#"
                  className="text-xs font-semibold tracking-widest text-brand-red inline-flex items-center gap-2 group-hover:gap-3 transition-all duration-300"
                >
                  READ MORE →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
