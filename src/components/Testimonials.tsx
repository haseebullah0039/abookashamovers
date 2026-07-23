export default function Testimonials() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-brand-dark relative overflow-hidden">
      <div className="absolute -right-32 -bottom-32 w-96 h-96 rounded-full bg-brand-red/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-12 lg:gap-14 items-center">
        <div className="relative animate-fade-up max-w-md mx-auto lg:max-w-none">
          <img
            src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80&auto=format&fit=crop"
            alt="Delivery truck"
            loading="lazy"
            className="rounded-2xl sm:rounded-3xl shadow-2xl w-full h-64 sm:h-80 lg:h-96 object-cover hover:scale-[1.02] transition-transform duration-500"
          />
          <div className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-brand-red text-white flex items-center justify-center text-xl sm:text-3xl shadow-xl border-4 border-brand-dark animate-pulse-ring">
            📍
          </div>
        </div>

        <div className="animate-fade-up delay-200 text-center lg:text-left">
          <span className="text-brand-red font-semibold tracking-widest text-sm">CUSTOMER FEEDBACK</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mt-3 mb-6">
            What our Dubai customers say about us
          </h2>
          <div className="text-6xl text-brand-red font-serif leading-none mb-4">&quot;</div>
          <p className="text-white/60 text-base sm:text-lg mb-8 max-w-lg mx-auto lg:mx-0">
            The team arrived on time, packed everything carefully, and kept us updated throughout
            the move. Our furniture arrived in perfect condition with zero stress on our end —
            exactly what we needed for a busy relocation across Dubai.
          </p>
          <div className="flex items-center justify-center lg:justify-start gap-4">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=200&q=80&auto=format&fit=crop"
              alt="Ahmed Al Marri, verified customer"
              className="w-14 h-14 rounded-full object-cover border-2 border-brand-red"
            />
            <div>
              <div className="text-white font-bold">Ahmed Al Marri</div>
              <div className="text-white/40 text-sm">DUBAI MARINA CUSTOMER</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
