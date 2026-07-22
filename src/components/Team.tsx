const TEAM = [
  {
    name: "Cillian Murphy",
    role: "MANAGER",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&q=80&auto=format&fit=crop",
  },
  {
    name: "Soumya James",
    role: "MOVER",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&q=80&auto=format&fit=crop",
  },
  {
    name: "David Thompson",
    role: "PACKER",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&q=80&auto=format&fit=crop",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-16 sm:py-20 md:py-24 bg-slate-50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="text-center text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tight mb-4 animate-fade-up">
          <span className="text-outline">Mover</span>{" "}
          <span className="text-brand-red">&amp;</span>
          <br />
          <span className="text-brand-dark">Packers</span>
        </h2>

        <div className="text-center mb-10 sm:mb-14 animate-fade-up delay-100">
          <span className="text-brand-red font-semibold tracking-widest text-sm">OUR MEMBERS</span>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-brand-dark mt-2 px-4">
            Meet our most experience team members
          </h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {TEAM.map((m, i) => (
            <div
              key={m.name}
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-up"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <img
                src={m.img}
                alt={m.name}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/10 to-transparent" />
              <span className="absolute top-4 left-4 bg-brand-red text-white text-[10px] font-bold tracking-widest px-3 py-1 rounded-full">
                {m.role}
              </span>
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:translate-y-2 sm:group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="text-white font-bold text-lg">{m.name}</h4>
                <div className="flex gap-2 mt-3 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                  {["f", "x", "in"].map((s) => (
                    <a
                      key={s}
                      href="#"
                      className="w-8 h-8 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center text-white text-xs hover:bg-brand-red transition-colors duration-300"
                    >
                      {s}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
