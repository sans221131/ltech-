import HeroSection from "./sections/hero-section";
import ClientsOnlyRail, { type Client } from "@/components/hero/ClientsOnlyRail";
import WhatWeDo from "@/components/sections/WhatWeDo";
import ServicesSection from "@/components/sections/ServicesSection";
import AboutUs from "@/components/sections/AboutUs";
import TeamSection from "@/components/sections/TeamSection";
import SubmitBrief from "@/components/sections/SubmitBrief";
import SiteFooter from "@/components/sections/SiteFooter";

const CLIENTS: Client[] = [
  { name: "Acme Bank",    logoSrc: "/logos/acme-bank.svg" },
  { name: "Delta Grid",   logoSrc: "/logos/delta-grid.svg",   scale: 1.05 },
  { name: "Hyundai",      logoSrc: "/logos/hyundai.svg",      scale: 1.15 },
  { name: "Kairo Labs",   logoSrc: "/logos/kairo-labs.svg" },
  { name: "Kia",          logoSrc: "/logos/kia.svg",          scale: 1.2 },
  { name: "Mazda",        logoSrc: "/logos/mazda.svg",        scale: 1.1 },
  { name: "Microsoft",    logoSrc: "/logos/microsoft.svg" },
  { name: "Nimbus Air",   logoSrc: "/logos/nimbus-air.svg" },
  { name: "Orbit Hotels", logoSrc: "/logos/orbit-hotels.svg", scale: 1.25 },
  { name: "Pavilion",     logoSrc: "/logos/pavilion.svg" },
  { name: "Pepsi",        logoSrc: "/logos/pepsi.svg",        scale: 1.18 },
  { name: "Volkswagen",   logoSrc: "/logos/volkswagen.svg",   scale: 1.1 },
];

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ClientsOnlyRail items={CLIENTS} railHeight={72} speedPxPerSec={66} backgroundHex="#F8F7F3" />
      <WhatWeDo />
      <ServicesSection />
      <AboutUs />
      <TeamSection />
      <SubmitBrief />
      <SiteFooter />
    </>
  );
}
