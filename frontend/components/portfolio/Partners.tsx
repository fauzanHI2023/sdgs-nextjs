import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import SectionHead from '@/components/ui/SectionHead'

const partners = [
  'Pertamina', 'Pertamina Hulu Rokan', 'PLN', 'Indonesia Power', 'Petrokimia Gresik', 'PT Kaltim Nitrate Indonesia',
  'Kaltim Methanol Industri', 'AQUA', 'Bank Indonesia', 'Pupuk Indonesia', 'Perkebunan Nusantara', 'Phapros',
]

export default function Partners() {
  return (
    <Section>
      <Container>
        <SectionHead title="Trusted by leading institutions">
          <p>Partners across energy, fertilizer and chemicals, banking, water, and humanitarian organizations.</p>
        </SectionHead>
        {/* TODO: replace names with grayscale logos once usage permission is confirmed */}
        <div className="grid grid-cols-2 gap-x-8 md:grid-cols-4">
          {partners.map((p) => (
            <div key={p} className="border-t border-line py-5 font-bold text-muted">{p}</div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
