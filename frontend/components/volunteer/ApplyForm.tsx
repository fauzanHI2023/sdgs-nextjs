'use client'

import { useState, type FormEvent, type ReactNode } from 'react'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import { bigH2 } from '@/lib/styles'

const control = 'h-[50px] w-full rounded-xl border border-[#DCCDD1] bg-white px-4 text-base text-ink focus:border-primary focus:outline-3 focus:outline-bright/35'

function Field({ id, label, wide = false, children }: { id: string; label: string; wide?: boolean; children: ReactNode }) {
  return (
    <div className={`grid gap-2 ${wide ? 'sm:col-span-2' : ''}`}>
      <label htmlFor={id} className="text-sm font-bold">{label}</label>
      {children}
    </div>
  )
}

const Select = ({ id, options }: { id: string; options: string[] }) => (
  <select id={id} required defaultValue="" className={control}>
    <option value="" disabled>Select</option>
    {options.map((o) => <option key={o}>{o}</option>)}
  </select>
)

const roles = ['Field Enumerator', 'Community Facilitator Assistant', 'Documentation and Storytelling', 'Data and Reporting Support', 'Disaster Education Support', 'Research and ESG Support', 'Talent pool (any role)']

export default function ApplyForm() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // TODO: send to backend / API route
    setSent(true)
  }

  return (
    <Section id="apply">
      <Container className="grid items-start gap-8 md:grid-cols-[5fr_7fr] md:gap-[72px]">
        <div>
          <h2 className={`${bigH2} mb-5`}>Apply to volunteer</h2>
          <p className="max-w-[62ch] text-lg text-muted">It takes about five minutes. We reply by email or WhatsApp.</p>
          <p className="mt-5 text-muted">Questions first? Write to info@solusidampakglobal.org.</p>
        </div>

        {sent ? (
          <div role="status" className="rounded-[20px] bg-panel p-7 font-bold">Thank you. We have received your application and will reply soon.</div>
        ) : (
          <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
            <Field id="n" label="Full name"><input id="n" required autoComplete="name" className={control} /></Field>
            <Field id="e" label="Email"><input id="e" type="email" required autoComplete="email" className={control} /></Field>
            <Field id="p" label="Phone or WhatsApp"><input id="p" type="tel" required autoComplete="tel" className={control} /></Field>
            <Field id="c" label="City and province"><input id="c" required className={control} /></Field>
            <Field id="a" label="Age range"><Select id="a" options={['18 to 24', '25 to 34', '35 to 44', '45 or older']} /></Field>
            <Field id="r" label="Role of interest"><Select id="r" options={roles} /></Field>
            <Field id="v" label="Availability" wide><Select id="v" options={['Weekdays', 'Weekends', 'Per project', 'Remote only']} /></Field>
            <Field id="s" label="Skills and experience" wide><textarea id="s" className={`${control} h-[120px] resize-y py-3.5`} /></Field>
            <Field id="w" label="Why do you want to join?" wide><textarea id="w" required maxLength={500} className={`${control} h-[120px] resize-y py-3.5`} /></Field>
            <label className="flex items-start gap-3 text-sm text-muted sm:col-span-2">
              <input type="checkbox" required className="mt-0.5 size-5 shrink-0 accent-primary" />
              I agree to the volunteer code of conduct and safeguarding briefing.
            </label>
            <label className="flex items-start gap-3 text-sm text-muted sm:col-span-2">
              <input type="checkbox" required className="mt-0.5 size-5 shrink-0 accent-primary" />
              I consent to my data being processed to review this application.
            </label>
            <div className="sm:col-span-2"><Button type="submit">Send Application</Button></div>
          </form>
        )}
      </Container>
    </Section>
  )
}
