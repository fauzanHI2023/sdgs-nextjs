import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

type Props = {
  crumb: string;
  eyebrow: string;
  title: string;
  sub: string;
  photoLabel: string;
  photoSrc?: string;
  stat: { num: string; label: string };
  primary?: "consult" | "volunteer";
};

/** Hero bersama semua halaman dalam. Hanya teks, foto, dan urutan CTA yang berbeda. */
export default function PageHero({ crumb, eyebrow, title, sub, photoLabel, photoSrc, stat, primary = "consult" }: Props) {
  const consult = (
    <Button key="c" variant={primary === "consult" ? "light" : "ghost"} href="/#contact">
      Consult a Program →
    </Button>
  );
  const volunteer = (
    <Button key="v" variant={primary === "volunteer" ? "light" : "ghost"} href={primary === "volunteer" ? "#apply" : "/volunteer"}>
      Become a Volunteer →
    </Button>
  );

  return (
    <div className="overflow-hidden bg-[linear-gradient(120deg,#A21942,#C5192D)] pt-12 pb-16 text-white md:py-[72px]">
      <Container className="grid items-center gap-12 md:grid-cols-[7fr_5fr]">
        <div>
          <p className="text-sm font-light opacity-90">
            <Link href="/">Home</Link> / {crumb}
          </p>
          <p className="mt-7 text-sm font-bold">{eyebrow}</p>
          <h1 className="mt-2.5 max-w-[16ch] text-6xl/14 font-extrabold text-white">{title}</h1>
          <p className="mt-5 max-w-[46ch] text-lg opacity-95">{sub}</p>
          <div className="mt-8 flex flex-wrap gap-3">{primary === "consult" ? [consult, volunteer] : [volunteer, consult]}</div>
        </div>

        <div className="relative aspect-[5/5.4] w-full max-w-[380px] md:max-w-[460px] md:justify-self-end">
          <div
            role={photoSrc ? undefined : "img"}
            aria-label={photoSrc ? undefined : `Photo placeholder: ${photoLabel}`}
            className="absolute inset-[6%_4%_0_10%] flex items-end overflow-hidden rounded-[28px_140px_28px_140px] bg-[repeating-linear-gradient(135deg,#C95A74_0_14px,#BC4764_14px_28px)] p-4 text-[13px] font-light motion-safe:animate-rise"
          >
            {photoSrc ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={photoSrc} alt={photoLabel} className="absolute inset-0 size-full object-cover" />
            ) : (
              <span className="relative z-[1] rounded-lg bg-[rgba(94,14,38,.8)] px-2.5 py-1.5 text-white">{photoLabel}</span>
            )}
          </div>
          <svg viewBox="0 0 460 500" className="pointer-events-none absolute inset-0 size-full overflow-visible" aria-hidden="true">
            <path pathLength={1} d="M0 470 C 140 480, 230 420, 300 300 S 400 90, 440 40" fill="none" stroke="#fff" strokeWidth={2.5} strokeLinecap="round" strokeDasharray={1} className="motion-safe:animate-draw" />
            <path d="M418 36 L440 40 L430 62" fill="none" stroke="#fff" strokeWidth={2.5} strokeLinecap="round" />
          </svg>
          <div className="absolute top-[2%] -right-[2%] rounded-[14px] bg-white px-[22px] py-4 text-ink motion-safe:animate-rise-late">
            <b className="block text-[38px] leading-[1.05] font-extrabold text-burgundy">{stat.num}</b>
            <span className="text-[13px] font-light text-muted">{stat.label}</span>
          </div>
        </div>
      </Container>
    </div>
  );
}
