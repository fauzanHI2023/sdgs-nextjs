import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import SectionHead from '@/components/ui/SectionHead'
import Staircase from '@/components/shared/Staircase'

const steps = [
  { title: 'Apply', text: 'Fill in the short form below.' },
  { title: 'Conversation', text: 'We verify your details and talk about the role.' },
  { title: 'Orientation', text: 'Program briefing and a safeguarding briefing before any assignment.' },
  { title: 'On the ground', text: 'Work with our team and receive a summary of the impact.' },
]

export default function Journey() {
  return (
    <Section>
      <Container>
        <SectionHead title="Your path, step by step">
          <p>From the first form to your first day in the field.</p>
        </SectionHead>
        <Staircase items={steps} />
      </Container>
    </Section>
  )
}
