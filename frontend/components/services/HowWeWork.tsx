import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import SectionHead from '@/components/ui/SectionHead'
import Staircase from '@/components/shared/Staircase'

const phases = [
  { title: 'Assessment', text: 'Social mapping and rapid environmental assessment as the foundation for program planning.' },
  { title: 'Planning', text: 'Strategic plans, work plans, and sustainability strategies oriented toward long-term outcomes.' },
  { title: 'Implementation', text: 'Program execution guided by implementation standards that keep quality consistent.' },
  { title: 'Reporting', text: 'Community satisfaction index (IKM), SROI, and environmental performance summary documents.' },
]

export default function HowWeWork() {
  return (
    <Section>
      <Container>
        <SectionHead title="How we work">
          <p>Every service follows the same four phases, so the result at the end can be measured against the starting point.</p>
        </SectionHead>
        <Staircase items={phases} />
      </Container>
    </Section>
  )
}
