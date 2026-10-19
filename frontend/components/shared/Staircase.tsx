import type { CSSProperties } from "react";
import Mark from "@/components/ui/Mark";

type Item = { title: string; text: string };

/** Kartu langkah bertingkat (tangga) di desktop, kolom biasa di layar kecil */
export default function Staircase({ items }: { items: Item[] }) {
  const five = items.length === 5;
  return (
    <div className={`grid items-start gap-4 pb-2 sm:grid-cols-2 ${five ? "lg:grid-cols-5" : "lg:grid-cols-4"}`}>
      {items.map((it, i) => (
        <div
          key={it.title}
          style={{ "--i": i } as CSSProperties}
          className={`flex min-h-[200px] w-[200px] flex-col rounded-[26px] bg-card-panel px-[22px] pt-7 pb-[30px] transition-colors hover:bg-card-panel-hover lg:mt-[calc(var(--i)*36px)] ${five && i === 4 ? "sm:max-lg:col-span-2" : ""}`}
        >
          <Mark />
          <h3 className="mt-auto mb-2.5 pt-9 text-xl leading-[1.3] font-bold">{it.title}</h3>
          <p className="text-[15px] text-muted">{it.text}</p>
        </div>
      ))}
    </div>
  );
}
