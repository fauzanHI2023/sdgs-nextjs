import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import Rows from '@/components/ui/Rows'
import { bigH2 } from '@/lib/styles'

const reasons = [
  { title: 'Work on the ground', text: 'Join community programs, from surveys to training, guided by experienced staff.' },
  { title: 'Learn real methods', text: 'See how social mapping, community satisfaction surveys, SROI, and MEAL are done in practice.' },
  { title: 'See the measured result', text: 'Understand what changed, and how we know.' },
]

export default function WhyVolunteer() {
  return (
    <Section>
      <Container className="grid items-start gap-8 md:grid-cols-[5fr_7fr] md:gap-[72px]">
        <div>
          <h2 className={`${bigH2} mb-5`}>Work on the ground, with a team behind you</h2>
          <p className="max-w-[62ch] text-lg text-muted">We do not only work behind a desk. Volunteers join our field team where programs happen.</p>
        </div>
        <Rows items={reasons} stack />
      </Container>
    </Section>
  )
}
