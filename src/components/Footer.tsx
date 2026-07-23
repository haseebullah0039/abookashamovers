"use client";

const SERVICES = [
  "Residential Moving",
  "Furniture Moving",
  "Packing & Unpacking",
  "Home & Office Relocation",
  "Secure Storage Solutions",
];
const LINKS = ["About Us", "Our Services", "Our Team", "Moving Tips & Guides", "Contact Us"];

export default function Footer() {
  return (
    <footer className="bg-[#070c17] pt-14 sm:pt-20 pb-6 relative overflow-hidden">
      <div className="absolute -left-20 -top-20 w-72 h-72 rounded-full bg-brand-red/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 sm:pb-14 border-b border-white/10 text-center sm:text-left">
        <div>
          <div className="text-2xl font-extrabold text-white mb-4">
            ABO OKASHA <span className="text-brand-red">MOVERS</span>
          </div>
          <p className="text-white/40 text-sm mb-6">
            A trusted local moving company in Dubai, offering professional road-based residential
            and office moving, furniture handling, packing, and secure storage.
          </p>
          <div className="flex gap-3 justify-center sm:justify-start">
            {["f", "x", "in", "ig"].map((s) => (
              <a
                key={s}
                href="#"
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/60 text-xs hover:bg-brand-red hover:text-white hover:border-brand-red hover:-translate-y-1 transition-all duration-300"
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-5">Our Services</h4>
          <ul className="space-y-3">
            {SERVICES.map((s) => (
              <li key={s}>
                <a
                  href="#"
                  className="text-white/40 text-sm hover:text-brand-red hover:pl-2 transition-all duration-300"
                >
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-5">Quick Links</h4>
          <ul className="space-y-3">
            {LINKS.map((s) => (
              <li key={s}>
                <a
                  href="#"
                  className="text-white/40 text-sm hover:text-brand-red hover:pl-2 transition-all duration-300"
                >
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-5">Newsletter</h4>
          <p className="text-white/40 text-sm mb-4">Subscribe for the latest updates & offers.</p>
          <form className="flex" onSubmit={(e) => e.preventDefault()}>
            <input
              placeholder="Your email"
              className="min-w-0 flex-1 bg-white/5 border border-white/15 rounded-l-full px-4 py-3 text-sm text-white outline-none focus:border-brand-red transition-colors duration-300"
            />
            <button className="bg-brand-red text-white px-5 rounded-r-full hover:bg-red-700 transition-colors duration-300">
              →
            </button>
          </form>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-6 flex flex-wrap items-center justify-center sm:justify-between gap-4 text-white/30 text-xs text-center">
        <span>© 2026 ABO Okasha Movers | All Rights Reserved.</span>
        <div className="flex gap-6">
          <a href="#" className="hover:text-brand-red transition-colors duration-300">Privacy Policy</a>
          <a href="#" className="hover:text-brand-red transition-colors duration-300">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
}
