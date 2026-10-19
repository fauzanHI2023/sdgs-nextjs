import type { ReactNode } from 'react'

type Props = { id?: string; className?: string; children: ReactNode }

/** Section standar: padding konsisten + garis pemisah bila didahului section lain */
export default function Section({ id, className = '', children }: Props) {
  return (
    <section id={id} className={`py-14 md:py-24 [section+&]:border-t [section+&]:border-line ${className}`}>
      {children}
    </section>
  )
}
