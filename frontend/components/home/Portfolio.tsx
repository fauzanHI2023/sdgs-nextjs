import Container from "../ui/Container";
import Photo from "../ui/Photo";

const stats = [
  { num: "51+", label: "Projects" },
  { num: "Rp 3.9B+", label: "Total Project Value" },
  { num: "1,800+", label: "Training Participants" },
  { num: "40+", label: "Partner Institutions" },
];

export default function Portfolio() {
  return (
    <section className="bg-tint-bg py-14 md:py-[88px]">
      <Container className="grid items-center gap-14 md:grid-cols-[1.05fr_.95fr]">
        <div>
          <div className="mb-7 max-w-[560px]">
            <h2 className="text-3xl text-ink font-extrabold">
              Our <span className="text-primary">Portfolio</span>
            </h2>
            <p className="mt-3.5 text-[15.5px]">Real numbers drawn directly from our project portfolio across Capacity Building, Consultation, Compliance, and Recognize services.</p>
          </div>
          <dl className="grid grid-cols-2 overflow-hidden rounded-2xl border border-line">
            {stats.map((s, i) => (
              <div key={s.label} className={`border-line px-[26px] py-[30px] ${i % 2 === 0 ? "border-r" : ""} ${i < 2 ? "border-b" : ""}`}>
                <dd className={`m-0 text-[34px] font-extrabold ${i % 2 === 0 ? "text-primary" : "text-burgundy"}`}>{s.num}</dd>
                <dt className="mt-1.5 text-[13.5px] text-body">{s.label}</dt>
              </div>
            ))}
          </dl>
        </div>
        <Photo image="/assets/img-000.png" caption="The communities behind every number in our portfolio" className="min-h-[360px]" />
      </Container>
    </section>
  );
}
