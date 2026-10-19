import Hero from "@/components/Hero";
import HeroNew from "@/components/HeroNew";
import Contact from "@/components/home/Contactus";
import Howwork from "@/components/home/Howwork";
import Narrative from "@/components/home/Narrative";
import Portfolio from "@/components/home/Portfolio";
import Services from "@/components/home/Services";
import Testimonial from "@/components/home/Testimonial";
import { getHeroSection } from "@/lib/strapi";

export default async function HomePage() {
  const heroData = await getHeroSection();
  console.log("HERO DATA:", JSON.stringify(heroData, null, 2));

  return (
    <main>
      {/* <Hero data={heroData} /> */}
      <HeroNew data={heroData} />
      <Narrative />
      <Services />
      <Testimonial />
      <Portfolio />
      <Howwork />
      <Contact />
      {/* Section berikutnya (Tentang Kami, Program, dll) menyusul di sini */}
    </main>
  );
}
