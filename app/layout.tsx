import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { poppins, lora } from "./lib/font";
import "./globals.css";

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
          {children}
        </div>
      </body>
    </html>
  );
}
