import Container from "../ui/Container";

const phases = [
  { title: "Assessment", tint: "bg-tint-1", text: "Social mapping and rapid environmental assessment as the foundation for program planning." },
  { title: "Planning", tint: "bg-tint-3", text: "Developing strategic plans, work plans, and sustainability strategies oriented toward long-term outcomes." },
  { title: "Implementation", tint: "bg-tint-5", text: "Program execution guided by implementation standards that ensure consistent quality." },
  { title: "Reporting", tint: "bg-tint-4", text: "Measurement of community satisfaction index (IKM), SROI, and environmental performance summary documents." },
];

export default function Howwork() {
  return (
    <section className="py-14 md:py-[88px]">
      <Container>
        <h2 className="mb-11 max-w-140 text-3xl text-ink font-black">How We Work</h2>
        <ol className="m-0 grid list-none grid-cols-2 gap-5 p-0 md:grid-cols-4">
          {phases.map((p, i) => (
            <li key={p.title} className={`min-h-[190px] rounded-2xl px-[22px] py-6 ${p.tint}`}>
              <div className="mb-3.5 text-[13px] font-bold text-ink/45">Phase {i + 1}</div>
              <h3 className="mb-2 text-base font-extrabold text-ink">{p.title}</h3>
              <p className="text-[13.5px]">{p.text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
