// /app/page.tsx

import HeroSection from "./sections/hero-section";
import ClientsOnlyRail, { type Client } from "@/components/hero/ClientsOnlyRail";
import ServicesSection from "@/components/sections/ServicesSection";
import SubmitBrief from "@/components/sections/SubmitBrief";
import TeamReliability from "@/components/sections/TeamSection";


// NEW section
import DialDrivenShowcase from "@/components/sections/DialDrivenShowcase";

// ✅ Import the actual data array by name.
// If your file exports a different name, rename it here once and stop suffering.
import { PROJECT_SOLUTIONS as PROJECTS } from "@/lib/whatwedo/projects";
import ProcessScrollDial from "@/components/sections/ProcessScrollDial";
// If your module ALSO had a default export array, you could fallback like this:
// import DEFAULT_PROJECTS from "@/lib/whatwedo/projects";

type Step = {
  id: string;
  index: number;
  title: string;
  blurb: string;
};

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

// 🔒 Single source of truth for case studies.
// If you really do have a different export name, change PROJECTS to that name.
const RAW = Array.isArray(PROJECTS) ? PROJECTS : [];

// Map to the showcase shape
const SHOWCASE_ITEMS = RAW.map((p: any) => ({
  id: p.id,
  project: p.project ?? p.title ?? p.name,
  solution: p.solution ?? p.tagline,
  summary: p.summary ?? p.blurb,
  image: p.coverImage ?? p.image ?? undefined,
  href: p.id ? `/projects/${p.id}` : undefined,
}));

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

      {/* 👇 If SHOWCASE_ITEMS somehow ends up empty, this will still render the frame
          so you can see it exists, instead of silently disappearing. */}
      <DialDrivenShowcase
        items={SHOWCASE_ITEMS.length ? SHOWCASE_ITEMS : [
          {
            id: "sample-1",
            project: "Add projects to /lib/whatwedo/projects",
            solution: "Data missing, showing placeholder",
            summary: "Your dial needs items. Fix the import/export name.",
            image: undefined,
            href: undefined,
          },
        ]}
        mantra={["Scope.", "Design.", "Validate.", "Launch."]}
        accent="#2db7ff"
      />

      <ServicesSection />
      <ProcessScrollDial steps={STEPS} />
      <TeamReliability />
      <SubmitBrief />
    </>
  );
}
