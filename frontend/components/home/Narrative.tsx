import Container from "../ui/Container";
import Photo from "../ui/Photo";

export default function Narrative() {
  return (
    <section className="bg-tint-bg py-14 md:py-[88px]">
      <Container className="grid items-center gap-14 md:grid-cols-[.85fr_1.15fr]">
        <Photo image="/assets/img-055.png" caption="Community program briefing — CI² field documentation" className="min-h-[380px]" />
        <div>
          <h2 className="max-w-[420px] text-3xl text-ink font-extrabold">
            The <span className="text-primary">CI²</span> Solution — Answering the Complexity of CSR Regulation
          </h2>
          <p className="mt-[18px] max-w-[480px] text-[15.5px]">
            Layered CSR/ESG regulation — from Company Law Article 74, POJK 51/2017, to PROPER — often becomes an administrative burden rather than an opportunity. Corporate Impact Initiative (CI²) exists to bridge corporate regulatory
            obligations with social realities on the ground.
          </p>
          <p className="mt-3.5 max-w-[480px] text-[15.5px]">
            We provide support from social mapping, planning, and implementation through to reporting based on ESG and SDG indicators — with community participation at the core of every stage, not just a line in the report.
          </p>
        </div>
      </Container>
    </section>
  );
}
