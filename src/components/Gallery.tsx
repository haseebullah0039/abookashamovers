const ITEMS = [
  {
    title: "Villa Relocation, Dubai",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80&auto=format&fit=crop",
  },
  {
    title: "Office Relocation Setup",
    img: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80&auto=format&fit=crop",
  },
  {
    title: "Secure Storage Facility",
    img: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&q=80&auto=format&fit=crop",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 sm:py-20 md:py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-center sm:justify-between gap-6 mb-12 sm:mb-14 animate-fade-up text-center sm:text-left">
          <div>
            <span className="text-brand-red font-semibold tracking-widest text-sm">OUR PROJECTS</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-dark mt-3">
              Recent moves completed across Dubai
            </h2>
          </div>
          <a
            href="#contact"
            className="bg-brand-red text-white font-semibold px-7 py-4 rounded-full hover:bg-brand-dark hover:-translate-y-1 hover:shadow-xl transition-all duration-300 whitespace-nowrap"
          >
            GET A FREE QUOTE
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {ITEMS.map((it, i) => (
            <div
              key={it.title}
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-up"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <img
                src={it.img}
                alt={it.title}
                loading="lazy"
                className="w-full h-60 sm:h-72 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 flex items-center justify-between">
                <h3 className="text-white font-bold text-lg">{it.title}</h3>
                <span className="w-10 h-10 rounded-full bg-brand-red text-white flex items-center justify-center sm:opacity-0 sm:-translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  ↗
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
