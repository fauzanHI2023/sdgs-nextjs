import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type Props = { image: string; caption?: string; className?: string; children?: ReactNode };

export default function Photo({ image, caption, className = "", children }: Props) {
  return (
    <div
      style={{ backgroundImage: `url('${image}')` }}
      className={twMerge(
        "relative flex min-h-[280px] items-end overflow-hidden rounded-xl bg-cover bg-center after:absolute after:inset-0 after:z-0 after:bg-gradient-to-b after:from-transparent after:from-[55%] after:to-black/55 after:content-['']",
        className
      )}
    >
      {children}
      {caption && <span className="relative z-[1] px-5 py-[18px] text-[13px] text-white/90">{caption}</span>}
    </div>
  );
}
