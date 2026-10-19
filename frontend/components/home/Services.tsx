import Container from "../ui/Container";

const services = [
  { icon: "📋", title: "Project Implementation", tint: "bg-tint-1", text: "Planning, control, monitoring & evaluation, through to CSR project reporting from start to finish." },
  { icon: "🎓", title: "Capacity Building", tint: "bg-tint-2", text: "Training and workshops to strengthen the capacity of corporate CSR teams and implementing community partners." },
  { icon: "🤝", title: "Consultation", tint: "bg-tint-3", text: "Strategic support in fulfilling social responsibility obligations in line with applicable regulations." },
  { icon: "⚖️", title: "Compliance", tint: "bg-tint-4", text: "Education, data reporting, and advocacy for compliance with SDG, ISO 26000, and PROPER standards." },
  { icon: "🏆", title: "Recognize", tint: "bg-tint-5", text: "Support for publication and recognition of best CSR practices, from media coverage to national-level awards." },
];

export default function Services() {
  return (
    <section className="py-14 md:py-[88px]">
      <Container>
        <div className="mb-12 max-w-[560px]">
          <h2 className="text-3xl text-ink font-extrabold">
            Our Five <span className="text-burgundy">Core Services</span>
          </h2>
          <p className="mt-3.5 text-[15.5px]">Each service is designed to address one point in the CSR management cycle — from program execution to public recognition of its impact.</p>
        </div>
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-5">
          {services.map((s) => (
            <article key={s.title} className={`flex min-h-[260px] flex-col rounded-lg px-[22px] py-[26px] ${s.tint}`}>
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[19px]" aria-hidden="true">
                {s.icon}
              </div>
              <h3 className="mb-2 text-base font-bold text-ink">{s.title}</h3>
              <p className="grow text-[13.5px]">{s.text}</p>
              <a href="#" className="mt-4 self-start text-[13.5px] font-bold text-burgundy hover:text-bright">
                Learn More →
              </a>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
