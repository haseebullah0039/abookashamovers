"use client";

const FEATURES = [
  "100% Road-Based Moving & Transport",
  "Direct Door-to-Door Delivery Across the UAE",
  "Careful Handling & Fully Insured Loads",
  "On-Time, Scheduled & Same-Day Moves",
];

const CONTACT_INFO = [
  { icon: "📞", label: "Call Us", value: "+971 56 600 6415", href: "tel:+971566006415" },
  { icon: "✉️", label: "Email Us", value: "info@example.com", href: "mailto:info@example.com" },
  { icon: "📍", label: "Service Area", value: "All 7 Emirates, UAE", href: "#" },
];

const CITIES = [
  "Dubai",
  "Abu Dhabi",
  "Sharjah",
  "Ajman",
  "Ras Al Khaimah",
  "Fujairah",
  "Umm Al Quwain",
  "Al Ain",
];

const SERVICES = [
  "Residential Moving",
  "Furniture Moving",
  "Packing & Unpacking",
  "Home & Office Relocation",
  "Storage",
  "Fast & Reliable Service",
];

const fieldLabel = "block text-xs font-semibold text-slate-500 mb-1.5";
const fieldInput =
  "w-full border border-slate-200 rounded-lg px-4 py-3 text-sm text-brand-dark outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 transition-all duration-300";

export default function QuoteSection() {
  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 bg-brand-dark relative overflow-hidden">
      <div className="absolute -left-32 top-10 w-96 h-96 rounded-full bg-brand-red/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        <div className="animate-fade-up">
          <span className="text-brand-red font-semibold tracking-widest text-sm">ROAD MOVING EXPERTS</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3 mb-6 leading-snug">
            Reliable Road Moving Services Across the UAE
          </h2>
          <p className="text-white/50 mb-8 max-w-md">
            We specialize exclusively in professional road transport and relocation — no air or
            sea freight. Every move is handled door-to-door by our own trained team, giving you
            full control, speed, and care from pickup to delivery.
          </p>

          <ul className="space-y-4 max-w-md mb-10">
            {FEATURES.map((f) => (
              <li key={f} className="flex items-start gap-3 text-white/80 text-sm sm:text-base">
                <span className="shrink-0 w-6 h-6 rounded-full bg-brand-red/15 text-brand-red flex items-center justify-center text-xs mt-0.5">
                  ✓
                </span>
                {f}
              </li>
            ))}
          </ul>

          <div className="grid sm:grid-cols-3 gap-4 max-w-lg">
            {CONTACT_INFO.map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="flex flex-col gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brand-red/40 rounded-xl px-4 py-4 transition-all duration-300"
              >
                <span className="text-xl">{c.icon}</span>
                <span>
                  <span className="block text-[11px] text-white/40 tracking-wide">{c.label}</span>
                  <span className="block text-sm font-semibold text-white">{c.value}</span>
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="relative animate-fade-up delay-200">
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-5 sm:p-8 md:p-10 relative z-10 border border-slate-100">
            <span className="text-brand-red font-semibold tracking-widest text-xs">GET IN TOUCH</span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-brand-dark mt-2 mb-1">Request A Quote</h3>
            <p className="text-slate-400 text-sm mb-6">
              Fill in your details and our team will get back to you shortly.
            </p>
            <form
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5"
              onSubmit={(e) => e.preventDefault()}
            >
              <div>
                <label className={fieldLabel}>Full Name</label>
                <input placeholder="John Doe" className={fieldInput} />
              </div>
              <div>
                <label className={fieldLabel}>Phone Number</label>
                <input placeholder="+971 5X XXX XXXX" className={fieldInput} />
              </div>
              <div>
                <label className={fieldLabel}>Email Address</label>
                <input type="email" placeholder="you@example.com" className={fieldInput} />
              </div>
              <div>
                <label className={fieldLabel}>City</label>
                <select defaultValue="" className={`${fieldInput} appearance-none bg-white`}>
                  <option value="" disabled>
                    Select your city
                  </option>
                  {CITIES.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className={fieldLabel}>Service Needed</label>
                <select defaultValue="" className={`${fieldInput} appearance-none bg-white`}>
                  <option value="" disabled>
                    Select the service you need
                  </option>
                  {SERVICES.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className={fieldLabel}>Message</label>
                <textarea
                  placeholder="Tell us more about your move (optional)"
                  rows={4}
                  className={`${fieldInput} resize-none`}
                />
              </div>
              <button className="sm:col-span-2 bg-brand-red text-white font-semibold py-4 rounded-lg hover:bg-brand-dark hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 inline-flex items-center justify-center gap-2">
                GET A QUOTE
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
