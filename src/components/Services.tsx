const SERVICES = [
  {
    icon: "🏠",
    title: "Residential Moving",
    desc: "Trusted house and apartment movers in Dubai — careful handling for every room, delivered safely to your new home.",
    img: "/Residential Moving.png",
  },
  {
    icon: "🛋️",
    title: "Furniture Moving",
    desc: "Specialist furniture movers in Dubai for sofas, wardrobes, and bulky items, dismantled and reassembled with care.",
    img: "/Furniture Moving.png",
  },
  {
    icon: "📦",
    title: "Packing & Unpacking",
    desc: "Professional packing services in Dubai using quality materials to keep your belongings protected in transit.",
    img: "/Packing & Unpacking.png",
  },
  {
    icon: "🏢",
    title: "Home & Office Relocation",
    desc: "Efficient residential and commercial relocation in Dubai, planned to minimise downtime and disruption.",
    img: "/Home & Office Relocation.png",
  },
  {
    icon: "🗄️",
    title: "Secure Storage Solutions",
    desc: "Short and long-term storage in Dubai for your furniture and belongings, kept safe until you're ready.",
    img: "/storage.png",
  },
  {
    icon: "⚡",
    title: "Fast & Reliable Moving Service",
    desc: "On-time, dependable moving trucks and crews across Dubai — book a slot that fits your schedule.",
    img: "/fast and reliable.png",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-20 md:py-24 bg-brand-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_1px_1px,#fff_1px,transparent_0)] bg-[size:24px_24px]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 animate-fade-up">
          <span className="text-brand-red font-semibold tracking-widest text-sm">OUR SERVICES</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mt-3 px-2">
            Professional moving services in Dubai
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {SERVICES.map((s, i) => (
            <div
              key={s.title}
              className={`group relative flex flex-col h-full rounded-2xl overflow-hidden bg-white/[0.03] border border-white/10 hover:border-brand-red/60 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl animate-fade-up`}
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              <div className="relative h-52 sm:h-44 md:h-48 overflow-hidden shrink-0">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent" />
              </div>
              <div className="p-6 flex flex-col grow">
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-brand-red transition-colors duration-300">
                  {s.title}
                </h3>
                <p className="text-white/50 text-sm mb-4">{s.desc}</p>
                <a
                  href="#"
                  className="mt-auto text-xs font-semibold tracking-widest text-brand-red inline-flex items-center gap-2 group-hover:gap-3 transition-all duration-300"
                >
                  LEARN MORE →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
