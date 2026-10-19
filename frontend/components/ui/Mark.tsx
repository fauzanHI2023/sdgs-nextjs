/** Lingkaran kecil berisi satu garis merah, penanda kartu */
export default function Mark({ onRed = false }: { onRed?: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={`grid size-12 place-items-center rounded-full after:h-[3px] after:w-[18px] after:rounded-sm after:content-[''] ${onRed ? 'bg-white/20 after:bg-white' : 'bg-white after:bg-primary'}`}
    />
  )
}
