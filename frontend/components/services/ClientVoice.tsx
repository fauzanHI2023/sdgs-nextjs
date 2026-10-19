import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import PhotoSlot from "@/components/ui/PhotoSlot";
import Label from "@/components/ui/Label";

export default function ClientVoice() {
  return (
    <Section>
      <Container className="grid items-start gap-8 md:grid-cols-[5fr_6fr] md:gap-16">
        <PhotoSlot src="/assets/img-062.png" label="Photo: award ceremony (company profile p.31)" alt="Photo placeholder: award ceremony" className="aspect-[4/5]" />
        <div>
          <Label>Client voice</Label>
          <blockquote className="mt-5 text-[length:clamp(22px,2.6vw,30px)] leading-[1.4] font-bold text-ink">
            &ldquo;CI²&apos;s support helped us build a CSR disaster contingency plan that had never been properly structured before.&rdquo;
          </blockquote>
          <p className="mt-5 font-bold">
            Pertamina CSR Team<span className="block text-sm font-light text-muted">D.I. Yogyakarta Region</span>
          </p>
          <p className="mt-5 text-muted">Our consultation covered assistance on a CSR disaster contingency plan for the region.</p>
          {/* TODO: written client consent for this quote and attribution */}
        </div>
      </Container>
    </Section>
  );
}
