import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'

const nums = [
  { n: '76+', l: 'Projects' },
  { n: 'Rp 11 B+', l: 'Total project value' },
  { n: '1,800+', l: 'Training participants' },
  { n: '40+', l: 'Partner institutions' },
]

export default function Numbers() {
  return (
    <Section className="md:py-[72px]">
      <Container>
        <dl className="grid grid-cols-2 gap-y-7 md:grid-cols-4">
          {nums.map((x, i) => (
            <div key={x.l} className={`px-7 py-2 md:border-l md:border-line ${i === 0 ? 'md:border-l-0 md:pl-0' : ''} ${i % 2 === 0 ? 'pl-0' : ''}`}>
              <dd className="text-[length:clamp(32px,4vw,42px)] leading-[1.1] font-extrabold text-primary">{x.n}</dd>
              <dt className="text-sm text-muted">{x.l}</dt>
            </div>
          ))}
        </dl>
      </Container>
    </Section>
  )
}
