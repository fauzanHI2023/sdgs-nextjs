"use client";
import { useEffect } from "react";
import Button from "./ui/Button";
import { navLinks } from "../data/nav";

export default function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <>
      <div onClick={onClose} className={`fixed inset-0 z-[99] bg-[rgba(20,4,10,.55)] transition-opacity duration-300 ${open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`} />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        aria-hidden={!open}
        className={`fixed bottom-0 right-0 top-0 z-[100] flex w-[84%] max-w-[360px] flex-col bg-[linear-gradient(165deg,#E5243B_0%,#C5192D_32%,#A21942_66%,#7A1030_100%)] px-[26px] pb-8 pt-[26px] text-white shadow-[-14px_0_44px_rgba(30,4,12,.35)] transition-[transform,visibility] duration-300 ${
          open ? "visible translate-x-0" : "invisible translate-x-full"
        }`}
      >
        <div className="mb-[34px] flex items-center justify-between">
          <img src="/assets/logo-putih-cropped.png" alt="Solusi Dampak Global" className="h-9 w-auto" />
          <button type="button" aria-label="Close menu" onClick={onClose} className="flex h-9 w-9 items-center justify-center rounded-full bg-white/[.16] text-[17px] leading-none text-white hover:bg-white/[.28]">
            ✕
          </button>
        </div>
        <div className="mb-2.5 text-xs font-bold uppercase tracking-[.5px] text-white/65">Menu</div>
        <nav aria-label="Mobile">
          <ul className="flex flex-col">
            {navLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} onClick={onClose} className="flex items-center justify-between border-b border-white/[.16] px-0.5 py-[15px] text-[19px] font-bold text-white hover:text-white/80">
                  {l.label} <span className="font-normal opacity-55">→</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-auto pt-6">
          <Button variant="light" className="w-full justify-center">
            Get a Consultation
          </Button>
          <div className="mt-[18px] text-center text-[13px] text-white/70">info@solusidampakglobal.org</div>
        </div>
      </div>
    </>
  );
}
