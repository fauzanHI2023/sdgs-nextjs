import Container from "./ui/Container";

const columns = [
  { title: "Main Menu", links: ["About Us", "Services", "Portfolio", "Become a Volunteer", "Contact"] },
  { title: "Services", links: ["Project Implementation", "Capacity Building", "Consultation", "Compliance", "Recognize"] },
  { title: "Follow Us", links: ["Instagram", "LinkedIn", "Email"] },
];

export default function Footer() {
  return (
    <footer className="bg-ink pb-8 pt-16 text-white">
      <Container>
        <div className="grid grid-cols-2 gap-10 border-b border-white/[.12] pb-11 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <img src="/assets/logo-white.png" alt="Solusi Dampak Global" className="h-12 w-auto" />
            <p className="mt-4 max-w-[260px] text-sm text-white/55">Impact You Can Measure. Bridging corporate goodwill with real, measurable action.</p>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <h4 className="mb-4 text-[13.5px] font-bold text-white/90">{c.title}</h4>
              <ul className="m-0 flex list-none flex-col gap-[11px] p-0">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-white/60 hover:text-white">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-between gap-2 pt-[26px] text-[13px] text-white/40">
          <span>© 2026 Solusi Dampak Global. All rights reserved.</span>
          <span>By AltoStudio</span>
        </div>
      </Container>
    </footer>
  );
}
