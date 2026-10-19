import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import SectionHead from '@/components/ui/SectionHead'
import Staircase from '@/components/shared/Staircase'

const awards = [
  { title: 'Indonesia CSR Award 2020', text: 'Registration, document completeness, assessment, and awarding support in Bontang.' },
  { title: 'Indonesia Green Award 2021 to 2023', text: 'Support through the same process in Bontang.' },
  { title: 'PROPER Gold', text: 'Assistance in West Java through to the awarding.' },
  { title: 'PROPER Green', text: 'Assistance in East Java and Maluku through to the awarding.' },
]

export default function Recognition() {
  return (
    <Section>
      <Container>
        <SectionHead title="Recognition we helped reach">
          <p>We assisted companies from registration to awarding. The recognition belongs to our partners.</p>
        </SectionHead>
        <Staircase items={awards} />
      </Container>
    </Section>
  )
}
