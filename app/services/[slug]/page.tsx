// /app/services/[slug]/page.tsx
import { notFound } from "next/navigation";

const VALID = new Set([
  "ai-agent-development-services",
  "offshore-development-services",
  "software-re-engineering",
  "cto-as-a-service-for-startups",
  "product-discovery-and-technical-architecture",
  "platform-modernization-roadmaps",
  "data-pipeline-design-and-governance",
  "realtime-interfaces-and-motion-systems",
  "observability-and-reliability-readiness",
  "ai-augmented-operations-automation",
]);

export default function ServicePage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  if (!VALID.has(slug)) notFound();

  const title = slug
    .split("-")
    .map((w) => (w === "ai" ? "AI" : w[0].toUpperCase() + w.slice(1)))
    .join(" ")
    .replace("Cto", "CTO");

  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20">
      <p className="text-sm tracking-wide text-neutral-500">SERVICE</p>
      <h1 className="mt-3 text-3xl sm:text-4xl font-bold text-neutral-900">{title}</h1>
      <p className="mt-3 text-neutral-700">
        One dynamic page, many slugs. Replace this with your actual write-up,
        pricing, deliverables, timeline, and CTA. You’re welcome.
      </p>
    </main>
  );
}
