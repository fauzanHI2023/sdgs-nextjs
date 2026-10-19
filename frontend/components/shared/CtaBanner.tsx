import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

type Props = {
  intro?: string;
  individualText?: string;
  individualHref?: string;
  individualLabel?: string;
};

/** Banner penutup di setiap halaman: konsultasi (perusahaan) dan relawan (individu) */
export default function CtaBanner({
  intro = "Whether you manage a CSR program or want to help on the ground, there is a place for you.",
  individualText = "Join our field programs as a volunteer, guided by our team and trained in safeguarding first.",
  individualHref = "/volunteer",
  individualLabel = "Become a Volunteer →",
}: Props) {
  return (
    <section className="bg-deep py-14 text-white md:py-24">
      <Container>
        <h2 className="max-w-[20ch] font-extrabold text-5xl text-white before:mb-5 before:block before:h-1 before:w-14 before:bg-white before:content-['']">Every measurable change begins with one conversation.</h2>
        <p className="mt-4 max-w-[56ch] text-white/85">{intro}</p>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <div className="rounded-[20px] bg-white p-8 text-ink">
            <h3 className="text-xl text-primary">For companies</h3>
            <p className="mt-2.5 mb-6 text-muted">Plan, run, and report your CSR and ESG impact with SROI, community satisfaction surveys, and PROPER-ready documents.</p>
            <Button href="/#contact">Consult a Program →</Button>
          </div>
          <div className="rounded-[20px] border border-white/30 bg-white/10 p-8">
            <h3 className="text-xl text-white">For individuals</h3>
            <p className="mt-2.5 mb-6 text-white/85">{individualText}</p>
            <Button variant="ghost" href={individualHref}>
              {individualLabel}
            </Button>
          </div>
        </div>
        <p className="mt-6 text-sm font-light text-white/80">Our team responds within 1 business day · info@solusidampakglobal.org</p>
      </Container>
    </section>
  );
}
