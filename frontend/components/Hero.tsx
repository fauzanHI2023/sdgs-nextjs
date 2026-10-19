import Image from "next/image";
import Link from "next/link";
import type { HeroSectionResponse } from "@/types/strapi";

type HeroProps = {
  data: HeroSectionResponse["data"];
};

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL ?? "http://localhost:1337";

// Konten default dipakai selama Strapi belum diisi, supaya halaman tidak pernah kosong.
const FALLBACK = {
  tagline: "Konsultan Dampak Sosial & Lingkungan",
  titleHero: "Mengubah niat baik menjadi dampak yang terukur",
  subtitleHero: "Solusi Dampak Global mendampingi organisasi, perusahaan, dan komunitas merancang program sosial yang tepat sasaran, lalu mengukur hasilnya secara jujur dan transparan.",
  ctaConsultation: { label: "Konsultasi", url: "/konsultasi", style: "primary" as const },
  ctaVolunteer: { label: "Menjadi Relawan", url: "/relawan", style: "secondary" as const },
};

export default function HeroNew({ data }: HeroProps) {
  // Strapi v5: response API sudah flat, tidak ada pembungkus "attributes" lagi.
  const tagline = data?.tagline ?? FALLBACK.tagline;
  const title = data?.titleHero ?? FALLBACK.titleHero;
  const subtitle = data?.subtitleHero ?? FALLBACK.subtitleHero;
  const ctaConsultation = data?.ctaConsultation ?? FALLBACK.ctaConsultation;
  const ctaVolunteer = data?.ctaVolunteer ?? FALLBACK.ctaVolunteer;

  // heroImage.url dari Strapi berupa path relatif (mis. "/uploads/xxx.png"),
  // jadi perlu digabung dengan base URL Strapi supaya jadi URL absolut.
  const heroImage = data?.heroImage;
  const imageUrl = heroImage ? `${STRAPI_URL}${heroImage.url}` : null;
  const imageAlt = heroImage?.alternativeText || title;

  return (
    <section className="relative overflow-hidden bg-[#0F2B22] text-[#F3EFE6]">
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-24 md:grid-cols-12 md:gap-8 md:py-32">
        {/* Kolom teks */}
        <div className="md:col-span-7">
          <p className="font-sans text-sm font-medium tracking-wide text-[#C9963C]">{tagline}</p>

          <h1 className="mt-5 max-w-xl font-serif text-4xl leading-[1.1] text-white sm:text-5xl md:text-6xl">{title}</h1>

          <p className="mt-6 max-w-md font-sans text-base leading-relaxed text-[#DCD6C6] sm:text-lg">{subtitle}</p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href={ctaConsultation.url}
              className="inline-flex items-center justify-center rounded-sm bg-[#C9963C] px-7 py-3 font-sans text-sm font-semibold text-[#0F2B22] transition-colors hover:bg-[#DDAE5C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9963C]"
            >
              {ctaConsultation.label}
            </Link>

            <Link
              href={ctaVolunteer.url}
              className="inline-flex items-center justify-center rounded-sm border border-[#DCD6C6]/40 px-7 py-3 font-sans text-sm font-semibold text-[#F3EFE6] transition-colors hover:border-[#F3EFE6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F3EFE6]"
            >
              {ctaVolunteer.label}
            </Link>
          </div>
        </div>

        {/* Kolom gambar */}
        <div className="relative md:col-span-5">
          {imageUrl ? (
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm">
              <Image src={imageUrl} alt={imageAlt} fill sizes="(min-width: 768px) 40vw, 100vw" className="object-cover" priority />
            </div>
          ) : (
            // Placeholder pola garis kalau heroImage belum diisi di Strapi
            <div
              aria-hidden
              className="aspect-[4/3] w-full rounded-sm"
              style={{
                backgroundImage: "repeating-linear-gradient(115deg, transparent 0 46px, rgba(201,150,60,0.18) 46px 47px)",
              }}
            />
          )}
        </div>
      </div>
    </section>
  );
}
