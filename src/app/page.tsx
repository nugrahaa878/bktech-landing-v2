"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { StatsDivider } from "@/components/home/StatsDivider";
import { Services } from "@/components/home/Services";
import { Philosophy } from "@/components/home/Philosophy";
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
          <div className="border-x border-charcoal-900/10 min-h-screen pt-12 pb-24">
            <Hero />
          </div>
        </div>
      </div>

      <StatsDivider />

      <Services />

      <Philosophy />

      <CallToAction />

      <Footer />
    </main>
  );
}
