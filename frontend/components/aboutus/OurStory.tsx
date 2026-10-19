import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import PhotoSlot from "@/components/ui/PhotoSlot";
import { bigH2 } from "@/lib/styles";

export default function OurStory() {
  return (
    <Section>
      <Container className="grid items-start gap-8 md:grid-cols-[5fr_6fr] md:gap-16">
        <PhotoSlot src="/assets/img-055.png" label="Photo: community field work" alt="Photo placeholder: community field work" className="aspect-[4/5]" />
        <div>
          <h2 className={`${bigH2} mb-6 max-w-[22ch] text-[length:clamp(26px,3.4vw,36px)]`}>Good intentions need someone on the ground</h2>
          <p className="max-w-[62ch] text-lg">Many companies want their CSR to matter, yet programs often stop at formality. Communities feel they were never asked, and reports say little about what changed.</p>
          <p className="mt-4">
            Solusi Dampak Global was built to close that gap. We map the social context, plan with the people involved, run the program in the field, and report the results in the standards that regulators, investors, and communities
            understand.
          </p>
          <p className="mt-4">Today that work spans 76+ projects and 40+ partner institutions, from Aceh to Maluku, and training programs reaching Malaysia, Thailand, Uganda, and Somalia.</p>
          <blockquote className="mt-8 border-l-[3px] border-primary pl-5 text-xl leading-[1.4] font-bold">A change-maker that bridges a company&apos;s good intentions with real action for lasting benefit.</blockquote>
          {/* TODO: founding year and founder story are not in the company profile */}
        </div>
      </Container>
    </Section>
  );
}
