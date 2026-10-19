export type Service = {
  id: string
  name: string
  desc: string
  fig: string
  sub: string
  items: { title: string; text: string }[]
}

export const services: Service[] = [
  {
    id: 'implementation', name: 'Project Implementation',
    desc: 'Your CSR and social projects, run end to end: planning, control, monitoring, evaluation, and project reporting.',
    fig: '25 projects', sub: 'Rp 7.16 B total project value',
    items: [
      { title: 'Assessment', text: 'Social mapping, rapid environment assessment (REA), and disaster studies as the basis for planning.' },
      { title: 'Design', text: 'Strategic plan (Renstra), work plan (Renja), and sustainability strategy.' },
      { title: 'Control and evaluation', text: 'Monitoring and evaluation guided by implementation standards.' },
      { title: 'Reporting', text: 'Community Satisfaction Index (IKM), SROI, and an environmental performance summary.' },
    ],
  },
  {
    id: 'capacity', name: 'Capacity Building',
    desc: 'Training and workshops that build insight, understanding, and skills in planning, managing, and controlling CI² programs.',
    fig: '35 projects', sub: 'Rp 2.06 B · 1,800 participants · 40 institutions',
    items: [
      { title: 'Program content', text: 'SPHERE, Disaster-Resilient Village (DESTANA), Safe Schools (SPAB), Child Safeguarding, PSEA, Community Development, and Housing.' },
      { title: 'Program management', text: 'Social Mapping, Program and Project Management, MEAL, Feedback Response Mechanism, and Impact Assessment.' },
    ],
  },
  {
    id: 'consultation', name: 'Consultation',
    desc: 'Guidance for companies, organizations, and communities to meet social responsibility obligations, while building independence among program rights-holders.',
    fig: '2 projects', sub: 'Rp 95 M total project value',
    items: [
      { title: 'PROPER mapping', text: 'Identify your PROPER level and classify programs per level: innovative, sustainable, and community-based.' },
      { title: 'ESG alignment', text: 'Identify company programs in line with ESG.' },
      { title: 'ESG report', text: 'Prepare the ESG report.' },
      { title: 'Recent work', text: 'Disaster contingency plan assistance in D.I. Yogyakarta; social mapping and conflict management in Lumajang.' },
    ],
  },
  {
    id: 'compliance', name: 'Compliance',
    desc: 'Education, assistance, data reporting, and advocacy so the company meets the policies and procedures its standards require.',
    fig: '8 projects', sub: 'Rp 1.39 B total project value',
    items: [
      { title: 'Standards', text: 'SDGs, PROPER, ISO 26000:2010, and Government Regulation 47/2012 on corporate social and environmental responsibility.' },
      { title: 'State-owned enterprises', text: 'Partnership and Community Development Program (PKBL).' },
      { title: 'Regional rules', text: 'Local regulations, depending on the area.' },
      { title: 'Documents', text: 'Stakeholder Engagement, Social Mapping, SROI, and IKM prepared for compliance.' },
    ],
  },
  {
    id: 'recognize', name: 'Recognize',
    desc: 'Recognition for companies that practice CSR well, so stakeholders and shareholders can see it and take it on.',
    fig: '6 projects', sub: 'Rp 368 M total project value',
    items: [
      { title: 'Publication', text: 'Mass media, learning articles in journals or books, and brand strategy.' },
      { title: 'Acknowledgement', text: 'Ministry recognition through officials attending program events, and public figures aligned with the brand.' },
      { title: 'Awards', text: 'Support to raise PROPER performance and to win national and international awards.' },
    ],
  },
]
