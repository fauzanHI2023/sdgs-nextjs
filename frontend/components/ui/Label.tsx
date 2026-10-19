export default function Label({ children, className = '' }: { children: string; className?: string }) {
  return (
    <div className={`text-[15px] font-bold text-primary before:mb-3.5 before:block before:h-[3px] before:w-7 before:bg-primary before:content-[''] ${className}`}>
      {children}
    </div>
  )
}
