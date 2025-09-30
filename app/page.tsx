// /app/page.tsx

import HeroSection from "./sections/hero-section";
import ClientsOnlyRail, { type Client } from "@/components/hero/ClientsOnlyRail";
import WhatWeDo from "@/components/sections/WhatWeDo";
import ServicesSection from "@/components/sections/ServicesSection";
import ProcessScrollDial, { type Step } from "@/components/sections/ProcessScrollDial";
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

const STEPS: Step[] = [
  {
    id: "step-0",
    index: 0,
    title: "Understand",
    blurb:
      "Align outcomes, constraints, and budget so reality doesn’t surprise us.",
  },
  {
    id: "step-1",
    index: 1,
    title: "Plan",
    blurb:
      "Approve a clear scope, timeline, and investment without fine print.",
  },
  {
    id: "step-2",
    index: 2,
    title: "Design",
    blurb:
      "Map journeys and wireframes that de-risk build and lock clarity.",
  },
  {
    id: "step-3",
    index: 3,
    title: "Build",
    blurb:
      "Ship weekly, review together, and steer with working software.",
  },
  {
    id: "step-4",
    index: 4,
    title: "Migrate & Launch",
    blurb:
      "Dry-run the data, cut over cleanly, and watch live health.",
  },
  {
    id: "step-5",
    index: 5,
    title: "Operate & Improve",
    blurb:
      "Run with SLAs and grow through analytics-led roadmaps.",
  },
];

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <ClientsOnlyRail
        items={CLIENTS}
        railHeight={72}
        speedPxPerSec={66}
        backgroundHex="#F8F7F3"
      />

      <WhatWeDo />
      <ServicesSection />

      {/* New process section (the big number + stacked cards) */}
      <ProcessScrollDial
        steps={STEPS}
        heading="Get your app live in 6 clear steps."
        subheading="Minimal, predictable flow from alignment to operations. No fine print."
        accent="from-amber-300 to-lime-300"
      />
      <TeamSection />
      <SubmitBrief />
      <SiteFooter />
    </>
  );
}
