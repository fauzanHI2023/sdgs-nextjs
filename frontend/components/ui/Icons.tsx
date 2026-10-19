import type { ReactNode } from 'react'

const Svg = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} className={className} aria-hidden="true">
    {children}
  </svg>
)

type P = { className?: string }
export const PinIcon = ({ className }: P) => (<Svg className={className}><path d="M12 21s-7-6.1-7-11.5A7 7 0 0 1 12 2a7 7 0 0 1 7 7.5C19 14.9 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.3" /></Svg>)
export const MailIcon = ({ className }: P) => (<Svg className={className}><path d="M3 6l9 7 9-7" /><rect x="3" y="5" width="18" height="14" rx="2" /></Svg>)
export const PhoneIcon = ({ className }: P) => (<Svg className={className}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8 9.7a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2z" /></Svg>)
export const ClockIcon = ({ className }: P) => (<Svg className={className}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.3 2" /></Svg>)
export const ShieldCheckIcon = ({ className }: P) => (<Svg className={className}><path d="M12 22c5.5-2 9-6.5 9-11V5l-9-3-9 3v6c0 4.5 3.5 9 9 11z" /><path d="m9 12 2 2 4-4" /></Svg>)
export const InstagramIcon = ({ className }: P) => (<Svg className={className}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.3" cy="6.7" r="1" /></Svg>)
export const LinkedinIcon = ({ className }: P) => (<Svg className={className}><rect x="3" y="3" width="18" height="18" rx="2" /><line x1="8" y1="11" x2="8" y2="16" /><line x1="8" y1="8" x2="8" y2="8" /><path d="M12 16v-3a2 2 0 0 1 4 0v3" /></Svg>)
export const YoutubeIcon = ({ className }: P) => (<Svg className={className}><rect x="2" y="6" width="20" height="12" rx="3" /><path d="M10 9.5v5l4-2.5z" /></Svg>)
