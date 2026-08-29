export function Bi({
  en,
  ar,
  className = "",
  arClassName = "",
}: {
  en: string;
  ar: string;
  className?: string;
  arClassName?: string;
}) {
  return (
    <span className={className}>
      {en}
      <span dir="rtl" className={`font-arabic block ${arClassName}`}>
        {ar}
      </span>
    </span>
  );
}

export function BiInline({
  en,
  ar,
  className = "",
}: {
  en: string;
  ar: string;
  className?: string;
}) {
  return (
    <span className={className}>
      {en} <span dir="rtl" className="font-arabic">/ {ar}</span>
    </span>
  );
}
