"use client";

import { Stat } from "@/components/ui/Cards";

export function StatsDivider() {
  return (
    <section className="bg-charcoal-900 text-offwhite-100 border-y-4 md:border-y-8 border-terracotta songket-border-top relative z-20 font-sans">
      <div className="max-w-7xl mx-auto px-2 md:px-6">
        <div className="grid grid-cols-3 divide-x divide-charcoal-800/50">
          <Stat label="Pengalaman" value="5+" />
          <Stat label="Proyek Selesai" value="10+" />
          <Stat label="Sektor Industri" value="8+" />
        </div>
      </div>
    </section>
  );
}
