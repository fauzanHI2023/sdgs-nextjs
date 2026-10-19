import type { ReactNode } from "react";
import { bigH2 } from "@/lib/styles";

/** Header section: judul besar kiri, pengantar/aksi kanan */
export default function SectionHead({ title, children }: { title: string; children?: ReactNode }) {
  return (
    <div className="mb-9 grid gap-5 md:mb-14 md:grid-cols-[7fr_5fr] md:items-end md:gap-12 text-ink">
      <h2 className={bigH2}>{title}</h2>
      {children && <div className="max-w-[44ch] text-muted md:justify-self-end">{children}</div>}
    </div>
  );
}
