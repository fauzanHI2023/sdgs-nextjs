import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import PhotoSlot from '@/components/ui/PhotoSlot'
import Label from '@/components/ui/Label'
import Button from '@/components/ui/Button'
import { bigH2 } from '@/lib/styles'

export default function FeaturedStory() {
  return (
    <Section>
      <Container className="grid items-start gap-8 md:grid-cols-[5fr_6fr] md:gap-16">
        <PhotoSlot label="Photo: field consultation (company profile p.23)" alt="Photo placeholder: field consultation in Yogyakarta" className="aspect-[4/5]" />
        <div>
          <Label>Featured story</Label>
          <h2 className={`${bigH2} my-5 max-w-[22ch] text-[length:clamp(26px,3.4vw,36px)]`}>A disaster contingency plan for CSR in D.I. Yogyakarta</h2>
          <p className="max-w-[62ch] text-lg">Our consultation team assisted Pertamina in building a CSR disaster contingency plan for the region, a plan that had not been properly structured before.</p>
          <p className="mt-4 text-muted">Services used: Consultation. Related work: social mapping and conflict management in Lumajang.</p>
          {/* TODO: add measured result (SROI, IKM, beneficiaries), client quote with written consent */}
          <Button variant="outline" href="#" className="mt-7">Read the story →</Button>
        </div>
      </Container>
    </Section>
  )
}
