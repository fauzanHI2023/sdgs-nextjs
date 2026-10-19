import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import CtaBanner from "@/components/shared/CtaBanner";
import WhyVolunteer from "@/components/volunteer/WhyVolunteer";
import Roles from "@/components/volunteer/Roles";
import Journey from "@/components/volunteer/Journey";
import Safeguarding from "@/components/volunteer/Safeguarding";
import Opportunities from "@/components/volunteer/Opportunities";
import ApplyForm from "@/components/volunteer/ApplyForm";

export const metadata: Metadata = {
  title: "Volunteer — Solusi Dampak Global",
  description: "Volunteer with Solusi Dampak Global and work alongside our team in community programs.",
};

export default function VolunteerPage() {
  return (
    <>
      <PageHero
        primary="volunteer"
        crumb="Volunteer"
        eyebrow="Join the movement"
        title="Bring your skills to the communities that need them"
        sub="Work alongside our team on the ground, and see the impact you help create."
        photoLabel="Photo: mother and child in village barn (company profile p.19)"
        photoSrc="/assets/img-061.png"
        stat={{ num: "1,800+", label: "Training participants" }}
      />
      <WhyVolunteer />
      <Roles />
      <Journey />
      <Safeguarding />
      <Opportunities />
      <ApplyForm />
      <CtaBanner
        intro="You are here. Apply above to join us, or talk to us about your company program."
        individualText="You are here. Send your application and we will guide you from the first conversation."
        individualHref="#apply"
        individualLabel="Apply now →"
      />
    </>
  );
}
