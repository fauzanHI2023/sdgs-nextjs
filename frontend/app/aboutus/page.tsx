import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import CtaBanner from "@/components/shared/CtaBanner";
import OurStory from "@/components/aboutus/OurStory";
import Challenge from "@/components/aboutus/Challenge";
import CiExplained from "@/components/aboutus/CiExplained";
import VisionMission from "@/components/aboutus/VisionMission";
import Quality from "@/components/aboutus/Quality";
import Numbers from "@/components/aboutus/Numbers";

export const metadata: Metadata = {
  title: "About Us — Solusi Dampak Global",
  description: "Solusi Dampak Global bridges corporate CSR and ESG commitments with real community needs, with impact you can measure.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumb="About Us"
        eyebrow="Who we are"
        title="The people behind the measurable impact"
        sub="From social mapping to sustainability reports, we bridge corporate goodwill with real community needs."
        photoLabel="Photo: farmer harvesting chili (company profile p.5)"
        photoSrc="/assets/img-007.png"
        stat={{ num: "76+", label: "Projects completed" }}
      />
      <OurStory />
      <Challenge />
      <CiExplained />
      <VisionMission />
      <Quality />
      <Numbers />
      <CtaBanner />
    </>
  );
}
