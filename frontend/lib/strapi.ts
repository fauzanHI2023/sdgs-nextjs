import type { HeroSectionResponse, HeaderResponse } from "@/types/strapi";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL ?? "http://localhost:1337";

/**
 * Ambil data Hero Section dari Strapi.
 * Menggunakan populate=* agar komponen (CTA button) dan media ikut terambil.
 * revalidate: 60 -> ISR, halaman akan di-refresh tiap 60 detik sekali diakses.
 */
export async function getHeroSection(): Promise<HeroSectionResponse["data"]> {
  try {
    const res = await fetch(`${STRAPI_URL}/api/hero-section?populate=*`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      console.error("Gagal mengambil Hero Section dari Strapi:", res.status);
      return null;
    }

    const json: HeroSectionResponse = await res.json();
    return json.data;
  } catch (error) {
    console.error("Error saat fetch Hero Section:", error);
    return null;
  }
}

export function getStrapiMedia(url?: string | null): string | null {
  if (!url) return null;
  return url.startsWith("http") ? url : `${STRAPI_URL}${url}`;
}

export async function getHeader(locale = "en"): Promise<HeaderResponse["data"]> {
  try {
    const res = await fetch(`${STRAPI_URL}/api/header?populate=*&locale=${locale}`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      console.error("Gagal mengambil Header dari Strapi:", res.status);
      return null;
    }

    const json: HeaderResponse = await res.json();
    return json.data;
  } catch (error) {
    console.error("Error saat fetch Header:", error);
    return null;
  }
}
