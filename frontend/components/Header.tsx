"use client";
import { useState } from "react";
import Container from "./ui/Container";
import Button from "./ui/Button";
import MobileMenu from "./MobileMenu";
import { navLinks as fallbackLinks } from "@/data/nav";
import Link from "next/link";
import Image from "next/image";
import { getStrapiMedia } from "@/lib/strapi";
import type { HeaderData } from "@/types/strapi";

export default function Header({ data }: { data: HeaderData | null }) {
  const [open, setOpen] = useState(false);
  const bar = "block h-[2.5px] w-6 rounded-sm bg-ink transition-[transform,opacity] duration-200";
  // Fallback ke data statis kalau Strapi tidak bisa diakses
  const links = data?.navItems?.length
    ? data.navItems.map((n) => ({
        label: n.label,
        href: n.url.startsWith("/") || n.url.startsWith("#") || n.url.startsWith("http") ? n.url : `/${n.url}`,
      }))
    : fallbackLinks;

  const logoSrc = getStrapiMedia(data?.logo?.url) ?? "/assets/Logo dan nama samping PNG (1).png";
  const logoAlt = data?.logo?.alternativeText ?? "Solusi Dampak Global";
  const cta = data?.ctaButtons?.[0];

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur-[6px]">
        <Container className="flex items-center justify-between py-[18px]">
          <Link href="/" aria-label="Solusi Dampak Global">
            <Image src={logoSrc} alt={logoAlt} width={100} height={100} className="h-11 w-auto" />
          </Link>
          <div className="flex items-center gap-10">
            <nav aria-label="Main" className="hidden md:block">
              <ul className="flex gap-[34px]">
                {links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-[14.5px] font-semibold text-ink hover:text-primary">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            {cta && (
              <Link href={cta.url} className="hidden md:inline-flex">
                <Button>{cta.label}</Button>
              </Link>
            )}
            <button type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((v) => !v)} className="flex h-[42px] w-[42px] shrink-0 flex-col items-center justify-center gap-[5px] md:hidden">
              <span className={`${bar} ${open ? "translate-y-[7.5px] rotate-45" : ""}`} />
              <span className={`${bar} ${open ? "opacity-0" : ""}`} />
              <span className={`${bar} ${open ? "-translate-y-[7.5px] -rotate-45" : ""}`} />
            </button>
          </div>
        </Container>
      </header>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
