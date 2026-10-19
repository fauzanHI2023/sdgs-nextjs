import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import SectionHead from '@/components/ui/SectionHead'

// TODO: replace with a list from your data source when activities are available
export default function Opportunities() {
  return (
    <Section>
      <Container>
        <SectionHead title="Open opportunities">
          <p>Current activities and open slots.</p>
        </SectionHead>
        <div className="rounded-[26px] bg-panel px-9 py-10">
          <h3>No open slots listed right now</h3>
          <p className="mt-2 max-w-[56ch] text-muted">Join our talent pool below and we will contact you when an activity fits your role and location.</p>
        </div>
      </Container>
    </Section>
  )
}
