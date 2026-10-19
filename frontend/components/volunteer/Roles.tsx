import Link from 'next/link'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import SectionHead from '@/components/ui/SectionHead'

// TODO: roles are proposals derived from our services; confirm with management
const roles = [
  { role: 'Field Enumerator', does: 'Help run social mapping and community satisfaction (IKM) surveys.', where: 'On-site', time: 'Per project' },
  { role: 'Community Facilitator Assistant', does: 'Support training and workshops in villages.', where: 'On-site', time: 'Per activity' },
  { role: 'Documentation and Storytelling', does: 'Photograph, film, and write the stories of our programs.', where: 'On-site or remote', time: 'Flexible' },
  { role: 'Data and Reporting Support', does: 'Compile data and help visualize SROI and IKM results.', where: 'Remote', time: 'Flexible' },
  { role: 'Disaster Education Support', does: 'Assist disaster-resilient village and safe school programs.', where: 'On-site', time: 'Per activity' },
  { role: 'Research and ESG Support', does: 'Research regulations and summarize standards for our consultants.', where: 'Remote', time: 'Flexible' },
]
const grid = 'md:grid-cols-[3fr_5fr_2fr_2fr_auto] md:gap-6'

export default function Roles() {
  return (
    <Section>
      <Container>
        <SectionHead title="Ways to contribute">
          <p>Choose the role that matches your skills and time.</p>
        </SectionHead>
        <div className={`mb-3.5 hidden text-sm font-bold text-muted md:grid ${grid}`}>
          <div>Role</div><div>What you do</div><div>Location</div><div>Commitment</div><div />
        </div>
        <div className="border-b border-line">
          {roles.map((r) => (
            <div key={r.role} className={`grid items-start gap-1.5 border-t border-line py-6 ${grid}`}>
              <b>{r.role}</b>
              <span className="text-muted">{r.does}</span>
              <span className="text-muted">{r.where}</span>
              <span className="text-muted">{r.time}</span>
              <Link href="#apply" className="font-bold whitespace-nowrap text-primary hover:underline">Apply →</Link>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
