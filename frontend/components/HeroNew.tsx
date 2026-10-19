"use client";
import { useEffect, useState, type ReactNode } from "react";
import Container from "./ui/Container";
import Button from "./ui/Button";
import Photo from "./ui/Photo";
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

const Hl = ({ children }: { children: ReactNode }) => <span className="text-primary">{children}</span>;

const DURATION = 5000;

const slides: { image: string; caption: string; headline: ReactNode }[] = [
  {
    image: "/assets/img-028.png",
    caption: "Field documentation — CI² program partner farmer support, West Java",
    headline: (
      <>
        Manage your company CSR &amp; ESG impact with a <Hl>data-driven approach</Hl> — while opening the door for volunteers to work on the ground
      </>
    ),
  },
  {
    image: "/assets/img-007.png",
    caption: "Hands-on support for smallholder farmers in our partner communities",
    headline: (
      <>
        From social mapping to SROI reporting — we turn <Hl>CSR obligations</Hl> into programs that change lives
      </>
    ),
  },
  {
    image: "/assets/img-061.png",
    caption: "Capacity-building sessions for corporate CSR and ESG teams",
    headline: (
      <>
        Certified training and hands-on mentorship that build <Hl>lasting capacity</Hl>, not just compliance checklists
      </>
    ),
  },
  {
    image: "/assets/img-000.png",
    caption: "The communities our programs are designed to serve",
    headline: (
      <>
        Real people, real outcomes — join us in building programs <Hl>communities help shape</Hl>
      </>
    ),
  },
];

const trusted = ["PERTAMINA", "PLN INDONESIA POWER", "PETROKIMIA GRESIK", "KALTIM METHANOL", "AQUA", "KORINDO"];

export default function Hero({ data }: HeroProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setIndex((i) => (i + 1) % slides.length), DURATION);
    return () => clearTimeout(t);
  }, [index]);

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
    <section className="pb-14 pt-16 bg-white">
      <Container className="grid items-center gap-14 md:grid-cols-[1.05fr_.95fr]">
        <div>
          <span className="mb-[22px] inline-block rounded-s bg-tint-2 px-3 py-1.5 text-[13px] font-semibold text-burgundy">{tagline}</span>
          <h1 className="text-[34px] tracking-[-0.5px] md:text-[46px]/13 leading-1.5 font-extrabold text-ink">{title}</h1>
          <p className="mt-5 max-w-[480px] text-[17px] text-body">{subtitle}</p>
          <div className="mt-8 flex flex-wrap items-center gap-7">
            <Button>{ctaConsultation.label} →</Button>
            <Button variant="text" href="#">
              {ctaVolunteer.label} →
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -right-6 -top-6 bottom-6 left-6 z-0 rounded-[28px] bg-tint-1" />
          <div className="relative z-[1] min-h-[420px] overflow-hidden rounded-m">
            <div className="absolute inset-x-4 top-4 z-[2] flex gap-1.5">
              {slides.map((_, i) => (
                <button key={i} type="button" aria-label={`Go to slide ${i + 1}`} onClick={() => setIndex(i)} className="h-[3px] flex-1 cursor-pointer overflow-hidden rounded-sm bg-white/35">
                  <span className={`block h-full rounded-sm bg-white ${i < index ? "w-full" : i === index ? "animate-progress" : "w-0"}`} />
                </button>
              ))}
            </div>
            {slides.map((s, i) => (
              <Photo key={s.image} image={s.image} caption={s.caption} className={`absolute inset-0 transition-opacity duration-700 ${i === index ? "opacity-100" : "opacity-0"}`} />
            ))}
          </div>
        </div>
      </Container>

      <Container className="mt-16 border-t border-line pt-7">
        <span className="mb-4 block text-[13px] text-[#8a8a8a]">Trusted by leading companies</span>
        <div className="flex flex-wrap items-center gap-9">
          {trusted.map((n) => (
            <span key={n} className="text-[15px] font-bold tracking-[.3px] text-[#c9c2c0]">
              {n}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
