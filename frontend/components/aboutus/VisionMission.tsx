import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Label from "@/components/ui/Label";
import Rows from "@/components/ui/Rows";
import PhotoSlot from "@/components/ui/PhotoSlot";

const missions = [
  { title: "Empower communities", text: "Run participatory community empowerment programs with lasting impact." },
  { title: "Build capacity", text: "Strengthen communities, implementing partners, and companies through training, mentoring, and stronger program governance." },
  { title: "Advise strategically", text: "Provide consultation on planning, social mapping, risk analysis, impact studies, and sustainability reports." },
  { title: "Meet the standards", text: "Support companies in meeting CSR/ESG standards: PROPER, SDGs, ISO 26000, and other regulations." },
  { title: "Earn recognition", text: "Support recognition of corporate contributions through communication, publication, and award facilitation." },
];

export default function VisionMission() {
  return (
    <Section>
      <Container>
        <div className="grid gap-12 pb-12 md:grid-cols-[3fr_9fr] md:pb-[72px]">
          <Label>Vision</Label>
          <p className="max-w-[22ch] text-[length:clamp(28px,4.2vw,52px)] leading-[1.15] font-extrabold text-ink">Realizing collaboration that improves the quality of life of resilient and sustainable communities.</p>
        </div>
        <Label className="mb-7">Mission</Label>
        <div className="grid items-start gap-8 md:grid-cols-[7fr_5fr] md:gap-14">
          <Rows items={missions} stack />
          <PhotoSlot src="/assets/img-062.png" label="Photo: farmer with chili harvest (company profile p.15)" alt="Photo placeholder: farmer holding chili harvest" className="aspect-[4/3] md:sticky md:top-[110px] md:aspect-[4/5]" />
        </div>
      </Container>
    </Section>
  );
}
