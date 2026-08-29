export default function Marquee({
  items = ["DELIVERY SERVICE", "MOVERS", "WAREHOUSING"],
  outlined = [1],
}: {
  items?: string[];
  outlined?: number[];
}) {
  const loop = [...items, ...items, ...items, ...items];
  return (
    <div className="relative bg-brand-red py-3 sm:py-5 overflow-hidden shadow-lg">
      <div className="flex whitespace-nowrap animate-marquee w-max">
        {loop.map((item, i) => (
          <span
            key={i}
            className={`mx-4 sm:mx-6 text-lg sm:text-2xl md:text-3xl font-extrabold tracking-wide flex items-center gap-4 sm:gap-6 ${
              outlined.includes(i % items.length) ? "text-outline" : "text-white"
            }`}
          >
            {item} <span className="text-white/70 text-base">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
