import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import Accordion from '@/components/ui/Accordion'
import { bigH2 } from '@/lib/styles'

const faq = [
  { q: 'Who should run a CI² program?', a: 'Any company with social responsibility commitments, state-owned or private, especially those operating where community involvement and social-environmental impact are high.' },
  { q: 'When is the right time to start?', a: 'From the start of a CSR program, when improving its quality, when facing social risk, when aiming to improve PROPER performance, or while preparing a sustainability report.' },
  { q: 'How is impact reported?', a: 'Through the Community Satisfaction Index (IKM), Social Return on Investment (SROI), and an environmental performance summary document, based on ESG and SDGs indicators and PROPER standards.' },
  { q: 'Can you support a PROPER rating or an award?', a: 'Yes. We assist with registration, document completeness, assessment, and awarding for PROPER, as well as national and international CSR awards.' },
  { q: 'Do you train our own team?', a: 'Yes. Capacity Building covers program management topics such as social mapping, MEAL, and feedback mechanisms, and program content such as Child Safeguarding and PSEA.' },
]

export default function ServicesFaq() {
  return (
    <Section>
      <Container className="grid items-start gap-8 md:grid-cols-[5fr_7fr] md:gap-[72px]">
        <div>
          <h2 className={`${bigH2} mb-5`}>Questions before you start</h2>
          <p className="max-w-[62ch] text-lg text-muted">Short answers from our company profile. For anything specific to your program, talk to our team.</p>
        </div>
        <Accordion items={faq} />
      </Container>
    </Section>
  )
}
