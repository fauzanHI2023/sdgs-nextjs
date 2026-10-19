import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import CtaBanner from "@/components/shared/CtaBanner";
import ImpactNumbers from "@/components/portfolio/ImpactNumbers";
import WhereWeWork from "@/components/portfolio/WhereWeWork";
import ProjectExplorer from "@/components/portfolio/ProjectExplorer";
import FeaturedStory from "@/components/portfolio/FeaturedStory";
import Partners from "@/components/portfolio/Partners";
import Recognition from "@/components/portfolio/Recognition";

export const metadata: Metadata = {
  title: "Portfolio — Solusi Dampak Global",
  description: "76+ projects across five services, with 40+ partner institutions in Indonesia and beyond.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        crumb="Portfolio"
        eyebrow="Our track record"
        title="Stories from the field, proven by data"
        sub="76+ projects, 40+ partner institutions, and communities across Indonesia and beyond."
        photoLabel="Photo: farmer with chili harvest (company profile p.15)"
        photoSrc="/assets/img-000.png"
        stat={{ num: "Rp 11 B+", label: "Total project value" }}
      />
      <ImpactNumbers />
      <WhereWeWork />
      <ProjectExplorer />
      <FeaturedStory />
      <Partners />
      <Recognition />
      <CtaBanner intro="Your program could be our next story. Let us make it measurable." individualText="Want to be part of the next story on the ground? Join our field programs as a volunteer." />
    </>
  );
}
