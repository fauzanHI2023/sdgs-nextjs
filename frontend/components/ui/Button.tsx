import Link from "next/link";
import type { ButtonHTMLAttributes } from "react";

type Variant = "solid" | "outline" | "light" | "ghost" | "text";

const base = "inline-flex cursor-pointer items-center gap-2 text-[15px] font-bold transition-colors";
const styles: Record<Variant, string> = {
  solid: "rounded-soft bg-primary px-[26px] py-[14px] text-white hover:bg-bright",
  outline: "rounded-soft border-[1.5px] border-primary px-[26px] py-[14px] text-primary hover:bg-tint-1",
  light: "rounded-soft bg-white px-[26px] py-[14px] text-burgundy hover:bg-white/90",
  ghost: "rounded-soft border-[1.5px] border-white px-[26px] py-[14px] text-white hover:bg-white/15",
  text: "p-0 text-burgundy hover:text-bright",
};

type Props = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant; href?: string };

export default function Button({ variant = "solid", href, className = "", children, ...rest }: Props) {
  const cls = `${base} ${styles[variant]} ${className}`;
  if (href)
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}
