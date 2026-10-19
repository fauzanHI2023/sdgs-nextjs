import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import PhotoSlot from "@/components/ui/PhotoSlot";
import ListPanel from "@/components/shared/ListPanel";
import { bigH2 } from "@/lib/styles";

const places = [
  "Sumatra: Aceh, North Sumatra, Riau, South Sumatra",
  "Java: West Java (including Subang), Central Java (Semarang), D.I. Yogyakarta, East Java (including Lumajang)",
  "Kalimantan and Maluku: East Kalimantan (Bontang), Maluku (Ambon, Central Maluku, Tidore)",
  "Beyond Indonesia: Malaysia, Thailand, Uganda, Somalia (Capacity Building)",
];

export default function WhereWeWork() {
  return (
    <Section>
      <Container className="grid items-start gap-8 md:grid-cols-[7fr_5fr] md:gap-[72px]">
        {/* TODO: replace with an Indonesia map (SVG) with red pins */}
        <PhotoSlot src="/assets/img-055.png" label="Map: replace with Indonesia map and red pins" alt="Map placeholder: Indonesia" className="aspect-[4/3]" />
        <div>
          <h2 className={`${bigH2} mb-5`}>Where we work</h2>
          <p className="max-w-[62ch] text-lg text-muted">Social mapping, strategy documents, SROI and IKM surveys, training, and award support, from Aceh to Maluku and beyond.</p>
          <ListPanel title="Locations" items={places} className="mt-6" />
        </div>
      </Container>
    </Section>
  );
}
