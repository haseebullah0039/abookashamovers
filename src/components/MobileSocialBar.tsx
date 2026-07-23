const SOCIAL_LINKS = [
  {
    name: "Facebook",
    href: "https://facebook.com",
    color: "#1877F2",
    svg: (
      <path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06C2 17.08 5.66 21.23 10.44 22v-7.02H7.9v-2.92h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.92h-2.34V22C18.34 21.23 22 17.08 22 12.06Z" />
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    color: "url(#instagram-gradient)",
    svg: (
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.919-.058-1.265-.07-1.644-.07-4.849 0-3.204.012-3.584.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.265-.058 1.645-.07 4.849-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    ),
  },
  {
    name: "TikTok",
    href: "https://tiktok.com",
    color: "#000000",
    svg: (
      <path d="M16.6 5.82c-.93-.9-1.5-2.15-1.5-3.54h-3.13v13.66c0 1.5-1.22 2.72-2.72 2.72a2.72 2.72 0 0 1 0-5.44c.27 0 .53.04.78.11V10.2a5.9 5.9 0 0 0-.78-.05A5.85 5.85 0 0 0 3.3 16c0 3.23 2.62 5.85 5.85 5.85S15 19.23 15 16V9.14a7.53 7.53 0 0 0 4.4 1.41V7.42c-.98 0-1.89-.31-2.8-.95Z" />
    ),
  },
];

// Floating vertical social bar, mobile-only (hidden md and up)
export default function MobileSocialBar() {
  return (
    <nav
      aria-label="Social media links"
      className="md:hidden fixed right-0 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-1 rounded-l-lg bg-brand-dark/90 backdrop-blur-sm shadow-lg shadow-black/20 border border-white/10 border-r-0 py-1.5 px-0.5"
    >
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#feda75" />
            <stop offset="30%" stopColor="#d62976" />
            <stop offset="60%" stopColor="#962fbf" />
            <stop offset="100%" stopColor="#4f5bd5" />
          </linearGradient>
        </defs>
      </svg>

      {SOCIAL_LINKS.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Follow us on ${social.name}`}
          className="group flex items-center justify-center w-6 h-6 rounded-full transition-transform duration-300 ease-out hover:scale-110 active:scale-90"
        >
          <span className="flex items-center justify-center w-[22px] h-[22px] rounded-full bg-white shadow-sm shadow-black/30 transition-shadow duration-300 group-hover:shadow-md">
            <svg
              viewBox="0 0 24 24"
              className="w-3.5 h-3.5"
              style={{ fill: social.color }}
              aria-hidden="true"
            >
              {social.svg}
            </svg>
          </span>
        </a>
      ))}
    </nav>
  );
}
