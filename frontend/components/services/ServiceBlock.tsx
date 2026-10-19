import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import ListPanel from '@/components/shared/ListPanel'
import { bigH2 } from '@/lib/styles'
import type { Service } from '@/data/services'

/** Satu blok layanan. `flip` menukar posisi kiri dan kanan di desktop. */
export default function ServiceBlock({ service, flip = false }: { service: Service; flip?: boolean }) {
  return (
    <Section id={service.id}>
      <Container className="grid items-start gap-8 md:grid-cols-[5fr_7fr] md:gap-[72px]">
        <div className={flip ? 'md:order-2' : ''}>
          <h2 className={`${bigH2} mb-5`}>{service.name}</h2>
          <p className="max-w-[62ch] text-lg text-muted">{service.desc}</p>
          <p className="my-7 text-[30px] leading-[1.15] font-extrabold text-primary">
            {service.fig}
            <span className="mt-1 block text-sm font-normal text-muted">{service.sub}</span>
          </p>
          <Button variant="outline" href="/#contact">Consult this service →</Button>
        </div>
        <ListPanel title="What you get" items={service.items} />
      </Container>
    </Section>
  )
}
