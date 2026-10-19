type Item = string | { title: string; text: string };

/** Panel datar berlatar pink berisi daftar bertitik merah */
export default function ListPanel({ title, items, className = "" }: { title: string; items: Item[]; className?: string }) {
  return (
    <div className={`rounded-[26px] bg-card-panel px-[30px] pt-[30px] pb-4 ${className}`}>
      <b className="mb-1.5 block text-base text-primary">{title}</b>
      <ul className="m-0 list-none p-0">
        {items.map((it) => {
          const t = typeof it === "string" ? undefined : it.title;
          const d = typeof it === "string" ? it : it.text;
          return (
            <li
              key={d}
              className="relative border-t border-primary/15 py-[15px] pl-[26px] text-[15px] first:border-t-0 before:absolute before:top-[23px] before:left-0.5 before:size-[9px] before:rounded-full before:bg-primary before:content-['']"
            >
              {t && <b className="text-base text-ink">{t}</b>}
              {t ? <small className="mt-0.5 block text-sm text-muted">{d}</small> : d}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
