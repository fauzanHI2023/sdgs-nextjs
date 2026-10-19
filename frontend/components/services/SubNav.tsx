"use client";

import { useEffect, useState, type MouseEvent } from "react";
import Container from "@/components/ui/Container";
import { services } from "@/data/services";
import { scrollToSection } from "@/lib/scroll";

export default function SubNav() {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-140px 0px -60% 0px" }
    );
    services.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const go = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setActive(id);
    scrollToSection(id);
  };

  return (
    <nav data-subnav aria-label="Services" className="sticky top-[81px] z-[9] border-b border-line bg-white">
      <Container className="flex gap-8 overflow-x-auto py-4">
        {services.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            onClick={(e) => go(e, s.id)}
            aria-current={active === s.id ? "true" : undefined}
            className={`border-b-2 pb-1 text-[15px] font-bold whitespace-nowrap transition-colors hover:text-primary ${active === s.id ? "border-primary text-primary" : "border-transparent text-muted"}`}
          >
            {s.name}
          </a>
        ))}
      </Container>
    </nav>
  );
}
