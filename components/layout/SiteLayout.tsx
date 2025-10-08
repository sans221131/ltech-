import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/sections/SiteFooter";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <span id="top" className="absolute inset-x-0 top-0 h-0" aria-hidden />
      <SiteHeader />
      <div aria-hidden className="h-16" />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </>
  );
}
