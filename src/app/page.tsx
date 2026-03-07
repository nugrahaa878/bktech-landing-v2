import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pakar Solusi Digital Sumatera Barat | BKTech Hub",
  description: "BKTech menghadirkan solusi rekayasa perangkat lunak untuk transformasi digital di Sumatera Barat, mulai dari UMKM hingga industri pariwisata.",
};

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { StatsDivider } from "@/components/home/StatsDivider";
import { Services } from "@/components/home/Services";
import { Portfolio } from "@/components/home/Portfolio";
import { Philosophy } from "@/components/home/Philosophy";
import { Experience } from "@/components/home/Experience";
import { CallToAction } from "@/components/home/CallToAction";

export default function Home() {
  return (
    <main className="min-h-screen bg-offwhite-200 text-charcoal-900 selection:bg-terracotta selection:text-white font-sans">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 structural-grid opacity-50 z-0 pointer-events-none"></div>

      <Navbar />

      <div className="relative z-10 pt-24 pb-0">
        <div className="max-w-7xl mx-auto px-6">
          {/* Main Layout Grid Structure */}
          <div className="border-x border-charcoal-900/10 min-h-screen md:pt-12 pb-24">
            <Hero />
          </div>
        </div>
      </div>

      <StatsDivider />

      <Experience />

      <Services />

      <Portfolio />

      <Philosophy />

      <CallToAction />

      <Footer />
    </main>
  );
}
