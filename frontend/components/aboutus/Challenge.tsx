import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHead from "@/components/ui/SectionHead";
import Mark from "@/components/ui/Mark";

const items = [
  { title: "Layered regulation", text: "National and regional rules differ and change quickly: Company Law Article 74, PP 47/2012, POJK 51/2017, PROPER, and ISO 26000." },
  { title: "Limited internal capacity", text: "Few companies have specialists who can set indicators, measure impact, and report transparently." },
  { title: "Limited resources", text: "Time, budget, networks, and local knowledge are often short, especially for monitoring and community involvement." },
  { title: "Trust with stakeholders", text: "Communities judge CSR as a formality when they are not involved, and inconsistent reporting harms reputation." },
  { title: "International alignment", text: "Investors expect ESG, GRI, and ISO 26000 standards, with independent verification." },
];

export default function Challenge() {
  return (
    <Section>
      <Container>
        <SectionHead title="The challenge we solve">
          <p>CSR is meant to help communities, but regulation, capacity, and trust get in the way. These are the five gaps CI² is built to close.</p>
        </SectionHead>
        <div className="grid gap-4 md:grid-cols-3">
          {items.map((it) => (
            <div key={it.title} className="flex min-h-[260px] flex-col rounded-[26px] bg-card-panel px-[30px] pt-8 pb-9 transition-colors hover:bg-card-panel-hover">
              <Mark />
              <h3 className="mt-auto mb-2.5 pt-11 text-2xl leading-[1.25] font-bold text-ink">{it.title}</h3>
              <p className="text-[15px] text-muted">{it.text}</p>
            </div>
          ))}
          <div className="flex min-h-[260px] flex-col rounded-[26px] bg-primary px-[30px] pt-8 pb-9 text-white transition-colors hover:bg-burgundy">
            <Mark onRed />
            <p className="mt-auto pt-11 text-[22px] leading-[1.35] font-bold">Complex regulation is no longer a burden. It becomes an opportunity for partnership.</p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
