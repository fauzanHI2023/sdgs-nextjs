import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import SectionHead from '@/components/ui/SectionHead'

const rows = [
  { name: 'Project Implementation', projects: '25 projects', value: 'Rp 7.16 B', width: 100 },
  { name: 'Capacity Building', projects: '35 projects', value: 'Rp 2.06 B', width: 28.8 },
  { name: 'Consultation', projects: '2 projects', value: 'Rp 95 M', width: 2 },
  { name: 'Compliance', projects: '8 projects', value: 'Rp 1.39 B', width: 19.5 },
  { name: 'Recognize', projects: '6 projects', value: 'Rp 368 M', width: 5.1 },
]

export default function ImpactNumbers() {
  return (
    <Section>
      <Container>
        <SectionHead title="Impact in numbers">
          <p>Five services, 76 projects, and about Rp 11.08 B in total project value.</p>
        </SectionHead>
        {rows.map((r) => (
          <div key={r.name} className="grid items-center gap-2.5 border-t border-line py-[22px] md:grid-cols-[3fr_6fr_3fr] md:gap-6">
            <b>{r.name}</b>
            <div className="h-3 overflow-hidden rounded-full bg-panel" role="img" aria-label={`${r.value} of total value`}>
              <i className="block h-full rounded-full bg-primary" style={{ width: `${r.width}%` }} />
            </div>
            <div className="font-bold md:text-right">
              {r.value}<small className="block text-[13px] font-normal text-muted">{r.projects}</small>
            </div>
          </div>
        ))}
        <div className="flex flex-wrap justify-between gap-3 border-t-2 border-ink py-6 text-[22px] font-extrabold">
          Total<span className="text-primary">76 projects · Rp 11.08 B</span>
        </div>
      </Container>
    </Section>
  )
}
