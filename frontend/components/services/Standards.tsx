import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import SectionHead from '@/components/ui/SectionHead'
import Rows from '@/components/ui/Rows'

const standards = [
  { title: 'Company Law No. 40/2007, Art. 74', text: 'Companies operating in or related to natural resources must carry out social and environmental responsibility. For some sectors, CSR is a legal duty.' },
  { title: 'Government Regulation 47/2012', text: 'Sets the technical detail: planning, budgeting, reporting, and approval by commissioners or the general meeting of shareholders.' },
  { title: 'POJK 51/2017', text: 'Public companies and financial institutions must prepare a sustainable finance action plan and an annual sustainability report covering environmental, social, and governance aspects.' },
  { title: 'PROPER', text: 'The Ministry of Environment and Forestry program that rates corporate environmental performance, including beyond-compliance efforts, and publishes the results.' },
  { title: 'SNI ISO 26000', text: 'Voluntary, but widely used as the national benchmark for CSR and SDGs quality.' },
]

export default function Standards() {
  return (
    <Section>
      <Container>
        <SectionHead title="Standards we work with">
          <p>The regulations behind each service, and what they mean for your company.</p>
        </SectionHead>
        <Rows items={standards} />
      </Container>
    </Section>
  )
}
