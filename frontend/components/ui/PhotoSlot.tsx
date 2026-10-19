type Props = { label: string; alt: string; src?: string; className?: string }

/** Bingkai foto. Tanpa `src` tampil placeholder; isi `src` untuk memakai foto asli. */
export default function PhotoSlot({ label, alt, src, className = '' }: Props) {
  return (
    <div
      role={src ? undefined : 'img'}
      aria-label={src ? undefined : alt}
      className={`ph-bg relative flex items-end overflow-hidden rounded-3xl p-4 text-[13px] font-light text-muted ${className}`}
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt} className="absolute inset-0 size-full object-cover" />
      ) : (
        <span className="relative z-[1] rounded-lg bg-white px-2.5 py-1.5">{label}</span>
      )}
    </div>
  )
}
