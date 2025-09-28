import Hero from "@/components/hero/Hero";


export default function HeroSection() {
  return (
    <Hero
      eyebrow="Architecture-first engineering"
      headline="We build brainy platforms."
      subhead="Clean domain models, edge-first APIs, and motion that respects budgets."
      ctaText="Explore solutions"
      ctaHref="/solutions"
      accent="#101010"
      bg="#F8F7F3"
    />
  );
}
