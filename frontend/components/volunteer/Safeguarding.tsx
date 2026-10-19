import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import ListPanel from '@/components/shared/ListPanel'
import { bigH2 } from '@/lib/styles'

const rules = [
  'A volunteer code of conduct, agreed before you start',
  'A mandatory Child Safeguarding and PSEA briefing',
  'No volunteer works alone with children',
  'Photos and videos only with consent',
  'A feedback and complaint mechanism with a clear contact',
]

export default function Safeguarding() {
  return (
    <Section>
      <Container className="grid items-start gap-8 md:grid-cols-[5fr_7fr] md:gap-[72px]">
        <div>
          <h2 className={`${bigH2} mb-5`}>Safe and accountable</h2>
          <p className="max-w-[62ch] text-lg text-muted">We train partners in Child Safeguarding and PSEA, so we hold volunteers to the same standard.</p>
        </div>
        <ListPanel title="What we ask and what we provide" items={rules} />
        {/* TODO: link public safeguarding and code of conduct documents; insurance, transport, and accommodation policy */}
      </Container>
    </Section>
  )
}
