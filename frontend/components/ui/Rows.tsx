type Row = { title: string; text: string };

/** Baris judul + deskripsi dengan garis tipis. `stack` = satu kolom (untuk kolom sempit) */
export default function Rows({ items, stack = false }: { items: Row[]; stack?: boolean }) {
  return (
    <div className="border-b border-line">
      {items.map((r) => (
        <div key={r.title} className={`group grid border-t border-line py-[30px] grid-cols-[7fr_8fr] ${stack ? "gap-1.5" : "gap-3 md:grid-cols-[4fr_8fr] md:gap-12"}`}>
          <h3 className="text-[22px] text-ink font-bold transition-colors group-hover:text-primary">{r.title}</h3>
          <p className="max-w-[56ch] text-muted">{r.text}</p>
        </div>
      ))}
    </div>
  );
}
