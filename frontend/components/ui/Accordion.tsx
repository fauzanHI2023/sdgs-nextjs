type Item = { q: string; a: string };

export default function Accordion({ items }: { items: Item[] }) {
  return (
    <div className="border-t border-line">
      {items.map((it, i) => (
        <details key={it.q} open={i === 0} className="group border-b border-line">
          <summary className="flex cursor-pointer list-none font-bold text-ink items-center justify-between gap-5 py-6 text-xl leading-[1.3] font-bold transition-colors hover:text-primary [&::-webkit-details-marker]:hidden">
            {it.q}
            <span className="grid size-[38px] shrink-0 place-items-center rounded-[10px] bg-blush text-[22px] font-normal text-primary transition-colors group-open:bg-primary group-open:text-white">
              <span className="group-open:hidden">+</span>
              <span className="hidden group-open:inline">–</span>
            </span>
          </summary>
          <p className="max-w-[60ch] pr-14 pb-6 text-muted">{it.a}</p>
        </details>
      ))}
    </div>
  );
}
