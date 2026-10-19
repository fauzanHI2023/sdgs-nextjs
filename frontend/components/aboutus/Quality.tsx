import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHead from "@/components/ui/SectionHead";
import Button from "@/components/ui/Button";
import PhotoSlot from "@/components/ui/PhotoSlot";
import Staircase from "@/components/shared/Staircase";

const items = [
  { title: "Services that follow regulation", text: "Every service scope is written to answer the regulations that apply." },
  { title: "An experienced team", text: "Team members are matched by expertise and experience to each service." },
  { title: "Standardized implementation", text: "Implementation guides keep quality consistent across projects." },
  { title: "National expert network", text: "Experts with experience running CI² programs at national scale." },
  { title: "A strong partner network", text: "Strategic partners help each service meet the standard." },
];

export default function Quality() {
  return (
    <Section>
      <Container>
        <SectionHead title="How we keep the work to standard">
          <p>Five commitments sit behind every project, so a program in Maluku meets the same bar as one in West Java.</p>
          <Button variant="outline" href="/services" className="mt-5">
            See our services →
          </Button>
        </SectionHead>
        <Staircase items={items} />
        <PhotoSlot src="/assets/img-055.png" label="Photo: training session (company profile p.27)" alt="Photo placeholder: team training session" className="mt-9 aspect-[16/10] md:mt-14 md:aspect-[21/8]" />
      </Container>
    </Section>
  );
}
