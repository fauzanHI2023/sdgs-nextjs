'use client'

import { useState } from 'react'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import SectionHead from '@/components/ui/SectionHead'
import { projects, serviceFilters, type ServiceName } from '@/data/projects'

type Filter = 'All' | ServiceName

export default function ProjectExplorer() {
  const [filter, setFilter] = useState<Filter>('All')
  const list = filter === 'All' ? projects : projects.filter((p) => p.service === filter)

  return (
    <Section id="explorer">
      <Container>
        <SectionHead title="Our work, by service and place">
          <p>Each card summarizes the scope we delivered in one area. Filter by service.</p>
        </SectionHead>
        <div role="group" aria-label="Filter by service" className="mb-8 flex flex-wrap gap-7">
          {(['All', ...serviceFilters] as Filter[]).map((f) => (
            <button
              key={f}
              type="button"
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
              className={`cursor-pointer border-b-2 py-1.5 text-[15px] font-bold hover:text-primary ${filter === f ? 'border-primary text-primary' : 'border-transparent text-muted'}`}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {list.map((p) => (
            <article key={`${p.service}-${p.place}-${p.title}`} className="flex min-h-[220px] flex-col rounded-[26px] bg-panel p-7 transition-colors hover:bg-panel-hover">
              <small className="text-sm font-bold text-primary">{p.service} · {p.place}</small>
              <h3 className="mt-3.5 mb-2.5 text-xl leading-[1.3]">{p.title}</h3>
              <p className="text-[15px] text-muted">{p.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  )
}
