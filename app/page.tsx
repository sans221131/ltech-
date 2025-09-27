import Hero from "@/components/sections/Hero";
import ClientSection from "@/components/sections/ClientSection";
import WhatWeDo from "@/components/sections/WhatWeDo";
import ServicesSection from "@/components/sections/ServicesSection";
import AboutUs from "@/components/sections/AboutUs";
import TeamSection from "@/components/sections/TeamSection";
import SubmitBrief from "@/components/sections/SubmitBrief";
import SiteFooter from "@/components/sections/SiteFooter";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ClientSection />
      <WhatWeDo />
      <ServicesSection />
      <AboutUs />
      <TeamSection />
      <SubmitBrief />
      <SiteFooter />
    </>
  );
}
