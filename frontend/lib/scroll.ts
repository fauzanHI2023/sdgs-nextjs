export function scrollToSection(id: string, updateHash = true) {
  const el = document.getElementById(id);
  if (!el) return;

  const header = document.querySelector("header")?.getBoundingClientRect().height ?? 0;
  const sub = document.querySelector<HTMLElement>("[data-subnav]")?.getBoundingClientRect().height ?? 0;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  window.scrollTo({
    top: el.getBoundingClientRect().top + window.scrollY - header - sub - 8,
    behavior: reduce ? "auto" : "smooth",
  });
  if (updateHash) history.replaceState(null, "", `#${id}`);
}
