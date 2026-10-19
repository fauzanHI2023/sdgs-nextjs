export const serviceFilters = ['Project Implementation', 'Capacity Building', 'Consultation', 'Compliance', 'Recognize'] as const
export type ServiceName = (typeof serviceFilters)[number]

export type Project = { service: ServiceName; place: string; title: string; text: string }

export const projects: Project[] = [
  { service: 'Compliance', place: 'Bontang, East Kalimantan', title: 'Stakeholder Engagement and Social Mapping documents', text: 'Documents prepared for compliance.' },
  { service: 'Compliance', place: 'Ambon, Central Maluku, Tidore', title: 'Social Mapping, SROI, and IKM documents', text: 'Compliance-based impact documents across three areas.' },
  { service: 'Compliance', place: 'Subang, West Java', title: 'Community development governance', text: 'Company governance assistance based on PROPER compliance.' },
  { service: 'Compliance', place: 'Semarang, Central Java', title: 'Social Mapping and IKM documents', text: 'Documents prepared for compliance.' },
  { service: 'Project Implementation', place: 'Riau', title: 'Social mapping, disaster studies, SROI and IKM', text: 'Social mapping in 6 areas, disaster studies in 3, strategy documents in 6, SROI and IKM in 10+.' },
  { service: 'Project Implementation', place: 'South Sumatra', title: 'Social mapping, strategy documents, SROI and IKM', text: 'Social mapping in 6 areas, disaster studies in 3, strategy documents in 6, SROI and IKM in 10+.' },
  { service: 'Project Implementation', place: 'West Java', title: 'Social mapping, strategy documents, SROI and IKM', text: 'Social mapping in 10+ areas, strategy documents in 5, SROI and IKM in 10+.' },
  { service: 'Project Implementation', place: 'D.I. Yogyakarta', title: 'Social mapping, strategy documents, SROI and IKM', text: 'Social mapping in 5 areas, strategy documents in 5, SROI and IKM in 3.' },
  { service: 'Project Implementation', place: 'East Java', title: 'Strategy documents, SROI and IKM', text: 'Strategy documents in 9 areas, social mapping, SROI, and IKM in 3.' },
  { service: 'Project Implementation', place: 'Maluku', title: 'Social mapping to SROI in four program areas', text: 'Social mapping, stakeholder engagement, strategy documents, SROI, and IKM in 4 areas.' },
  { service: 'Consultation', place: 'D.I. Yogyakarta', title: 'CSR disaster contingency plan', text: 'Consultation and assistance on a CSR disaster contingency plan.' },
  { service: 'Consultation', place: 'Lumajang, East Java', title: 'Social mapping and conflict management', text: 'Consultation and assistance on social mapping and conflict management.' },
  { service: 'Recognize', place: 'Bontang, East Kalimantan', title: 'Indonesia CSR Award and Green Award', text: 'Support from registration to awarding for Indonesia CSR Award 2020 and Indonesia Green Award 2021 to 2023.' },
  { service: 'Recognize', place: 'West Java', title: 'PROPER Gold', text: 'Support from registration and documents to assessment and awarding.' },
  { service: 'Recognize', place: 'East Java', title: 'PROPER Green', text: 'Support from registration and documents to assessment and awarding.' },
  { service: 'Recognize', place: 'Maluku', title: 'PROPER Green', text: 'Support from registration and documents to assessment and awarding.' },
  { service: 'Capacity Building', place: 'Indonesia, Malaysia, Thailand, Uganda, Somalia', title: '35 training projects', text: '1,800 participants from 40 corporate, LAZ, NGO, and INGO institutions.' },
]
