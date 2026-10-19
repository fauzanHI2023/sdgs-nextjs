import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import PhotoSlot from "@/components/ui/PhotoSlot";
import Accordion from "@/components/ui/Accordion";
import ListPanel from "@/components/shared/ListPanel";
import { bigH2 } from "@/lib/styles";

const faq = [
  {
    q: "What is CI²?",
    a: "A structured strategy that helps companies build harmonious relations with surrounding communities through data-based, participatory, and sustainable social programs, meeting CSR/ESG, PROPER, and SDGs standards in a measurable way.",
  },
  {
    q: "Why CI²?",
    a: "Social and environmental challenges are more complex, so contributions must be more than formalities. CI² covers social mapping, planning, implementation, evaluation, and publication that strengthen brand and Social License to Operate.",
  },
  { q: "Who should run CI²?", a: "Any company with social responsibility commitments, state-owned or private, especially those operating where community involvement and social-environmental impact are high." },
  { q: "What are the benefits?", a: "Stronger reputation and brand, a Social License to Operate, compliance with SDGs, ESG, PROPER, and ISO 26000, measurable impact, and lower social risk and conflict." },
  { q: "When is the right time?", a: "From the start of a CSR program, when improving its quality, when facing social risk, when aiming to improve PROPER performance, or while preparing a sustainability report." },
];
const gets = ["Compliance with CSR, ESG, SDGs, and PROPER", "Structured, participatory, data-based programs", "Stronger reputation through publication and awards", "Measurable social and environmental impact"];

export default function CiExplained() {
  return (
    <Section id="ci2">
      <Container className="grid items-start gap-8 md:grid-cols-[5fr_7fr] md:gap-[72px]">
        <div>
          <h2 className={`${bigH2} mb-5 text-ink`}>Corporate Impact Initiative (CI²)</h2>
          <p className="max-w-[62ch] text-lg text-muted">Our structured program for companies that want social impact backed by data, community participation, and regulatory fit.</p>
          <PhotoSlot src="/assets/img-028.png" label="Photo: consultation session (company profile p.23)" alt="Photo placeholder: CI² consultation session" className="mt-7 aspect-[16/10]" />
          <ListPanel title="What companies get" items={gets} className="mt-6" />
        </div>
        <Accordion items={faq} />
      </Container>
    </Section>
  );
}
