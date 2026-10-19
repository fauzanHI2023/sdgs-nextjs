import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import CtaBanner from "@/components/shared/CtaBanner";
import SubNav from "@/components/services/SubNav";
import ServiceBlock from "@/components/services/ServiceBlock";
import HowWeWork from "@/components/services/HowWeWork";
import Standards from "@/components/services/Standards";
import ClientVoice from "@/components/services/ClientVoice";
import ServicesFaq from "@/components/services/ServicesFaq";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services — Solusi Dampak Global",
  description: "Five services from Solusi Dampak Global: project implementation, capacity building, consultation, compliance, and recognition.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumb="Services"
        eyebrow="What we do"
        title="Five services, one measurable CSR journey"
        sub="From project implementation to national recognition, each service answers one point in the CSR cycle."
        photoLabel="Photo: consultation session (company profile p.23)"
        photoSrc="/assets/img-028.png"
        stat={{ num: "76+", label: "Projects across five services" }}
      />
      <SubNav />
      {services.map((s, i) => (
        <ServiceBlock key={s.id} service={s} flip={i % 2 === 1} />
      ))}
      <HowWeWork />
      <Standards />
      <ClientVoice />
      <ServicesFaq />
      <CtaBanner intro="Tell us which service you need, and we will shape the rest together." />
    </>
  );
}
