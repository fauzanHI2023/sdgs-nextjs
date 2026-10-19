export interface StrapiCtaButton {
  id: number;
  label: string;
  url: string;
  style: "primary" | "secondary";
}

export interface StrapiMediaAttributes {
  url: string;
  alternativeText: string | null;
  width: number;
  height: number;
}

export interface StrapiNavItem {
  id: number;
  label: string;
  url: string;
}

// Strapi v5: media juga sudah flat (tidak dibungkus { data: { attributes } } lagi)
export type StrapiMedia = StrapiMediaAttributes | null;

// Strapi v5: field entry langsung flat di root object, tidak dibungkus "attributes"
export interface HeroSectionData {
  id: number;
  documentId: string;
  tagline: string;
  titleHero: string;
  subtitleHero: string;
  ctaConsultation: StrapiCtaButton;
  ctaVolunteer: StrapiCtaButton;
  heroImage: StrapiMedia;
}

export interface HeaderData {
  id: number;
  documentId: string;
  locale: string;
  logo: StrapiMedia;
  navItems: StrapiNavItem[];
  ctaButtons: StrapiCtaButton[];
}

export interface HeroSectionResponse {
  data: HeroSectionData | null;
  meta: Record<string, unknown>;
}

export interface HeaderResponse {
  data: HeaderData | null;
  meta: Record<string, unknown>;
}
