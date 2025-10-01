import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { poppins, lora } from "./lib/font";
import "./globals.css";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/sections/SiteFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LeafWay Tech",
  description: "Architecture-first engineering. Platforms, edge APIs, AI systems.",
  icons: {
    icon: "/file.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={[
          geistSans.variable,
          geistMono.variable,
          poppins.variable,
          lora.variable,
          "antialiased",
        ].join(" ")}
      >
        <div className="relative flex min-h-screen flex-col bg-[var(--bg)] text-[var(--fg)]">
          <span id="top" className="absolute inset-x-0 top-0 h-0" aria-hidden />
          <SiteHeader />
          <div aria-hidden className="h-16" />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
