// /components/sections/ServicesSection.tsx
"use client";

import Link from "next/link";
import { useMemo } from "react";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";

type Service = {
  title: string;
  blurb?: string;
  slug: string;
  href: string;
};

const SERVICES_TITLES = [
  "AI Agent Development Services",
  "Offshore Development Services",
  "Software Re-Engineering",
  "CTO as a Service for Startups",
  "Product Discovery & Technical Architecture",
  "Platform Modernization Roadmaps",
  "Data Pipeline Design & Governance",
  "Realtime Interfaces & Motion Systems",
  "Observability & Reliability Readiness",
  "AI-Augmented Operations Automation",
];

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

export default function ServicesSection() {
  const services: Service[] = useMemo(
    () =>
      SERVICES_TITLES.map((t) => {
        const slug = slugify(t);
        return {
          title: t,
          slug,
          href: `/services/${slug}`,
          blurb: getBlurb(t),
        };
      }),
    []
  );

  return (
    <section
      id="services"
      className="relative min-h-[100vh] flex flex-col py-16 sm:py-20 bg-[var(--bg)] overflow-hidden"
      aria-label="Services we offer"
    >
      {/* Background accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(1000px 800px at 10% 15%, rgba(234,179,8,0.08), transparent 70%), radial-gradient(1000px 800px at 90% 85%, rgba(163,230,53,0.08), transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex-1 flex flex-col">
        {/* Eyebrow + heading */}
        <div className="mb-2 sm:mb-2">
          <p className="eyebrow mb-3 text-sm text-[var(--muted)]">Services</p>
          <h2 className="h2 mb-4 text-left">
            Senior teams that ship the critical pieces.
          </h2>
          <p className="mt-3 max-w-2xl text-[15px] sm:text-[16px] text-[var(--muted)] leading-relaxed">
            Ten quick ways we help founders and product teams de-risk launches,
            modernize stacks, and keep momentum high.
          </p>
        </div>

        {/* Grid of 3D cards */}
        <ul
          role="list"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4"
          style={{ gridAutoRows: "1fr" }}
        >
          {services.map((svc, idx) => (
            <li
              key={svc.slug}
              style={{
                animation: `fadeInUp 0.6s ease-out ${idx * 0.05}s both`,
              }}
            >
              {/* containerClassName trims the tall green padding area */}
              <CardContainer
                containerClassName="py-2"
                className="group w-full h-full"
              >
                <Link
                  href={svc.href}
                  className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-2xl h-full"
                >
                  <CardBody className="relative w-full h-full rounded-2xl border border-[var(--border)] bg-[var(--card)] p-3.5 sm:p-4 transition-all duration-300 group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] group-hover:border-[var(--accent)] flex flex-col justify-between">
                    {/* Gradient accent on hover */}
                    <div className="absolute inset-0 rounded-2xl pointer-events-none overflow-hidden">
                      <div className="absolute inset-x-0 -top-1 h-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 bg-[var(--accent)]" />
                    </div>

                    <div className="flex-1 min-h-[120px] flex flex-col">
                      <CardItem translateZ={25} className="flex items-start gap-2">
                        <span className="mt-[4px] inline-block size-2 rounded-full bg-[var(--accent)] flex-shrink-0 shadow-sm" />
                        <h3 className="text-[16px] font-semibold text-[var(--fg)] leading-tight transition-colors duration-200">
                          {svc.title}
                        </h3>
                      </CardItem>

                      {svc.blurb && (
                        <CardItem
                          translateZ={15}
                          className="mt-2 pl-[18px] text-[13px] text-[var(--muted)] leading-relaxed flex-1"
                        >
                          {svc.blurb}
                        </CardItem>
                      )}
                    </div>

                    <CardItem
                      translateZ={30}
                      rotateX={3}
                      className="mt-3 pl-[18px] inline-flex items-center text-[12.5px] font-medium text-[var(--fg)] transition-colors duration-200"
                    >
                      <span>View details</span>
                      <svg
                        className="ml-2 size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M7 17L17 7M17 7H8M17 7v9"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </CardItem>
                  </CardBody>
                </Link>
              </CardContainer>
            </li>
          ))}
        </ul>

        <style jsx>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>
    </section>
  );
}

/** Concise blurbs for text-only cards. */
function getBlurb(title: string): string {
  switch (title) {
    case "AI Agent Development Services":
      return "Task-grounded agents that ship work, not demos: planning, tools, evals, guardrails.";
    case "Offshore Development Services":
      return "Senior pods you can actually trust for delivery, integrated into your cadence.";
    case "Software Re-Engineering":
      return "Lift a legacy codebase into a modern shape without stopping the world.";
    case "CTO as a Service for Startups":
      return "Interim tech leadership: architecture, hiring loops, runway-safe roadmaps.";
    case "Product Discovery & Technical Architecture":
      return "Cut risk upfront with proof-level spikes and crisp domain models.";
    case "Platform Modernization Roadmaps":
      return "Decompose the monolith, sequence the wins, keep incidents boring.";
    case "Data Pipeline Design & Governance":
      return "From event schemas to lineage and SLAs; data that can be trusted.";
    case "Realtime Interfaces & Motion Systems":
      return "Live data, smooth motion, and performance budgets that hold on mobile.";
    case "Observability & Reliability Readiness":
      return "SLIs that matter, alerts that don’t lie, and incident muscle memory.";
    case "AI-Augmented Operations Automation":
      return "Wire AI into ops to kill toil: routing, summaries, RCA drafts.";
    default:
      return "";
  }
}
