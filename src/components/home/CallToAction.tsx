"use client";

import { ArrowUpRight } from "lucide-react";

export function CallToAction() {
  return (
    <section className="py-32 relative overflow-hidden bg-offwhite-200 border-b border-charcoal-900/10 font-sans">
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <span className="uppercase tracking-widest text-terracotta text-xs font-semibold mb-6 block">Memulai Interaksi Sistem</span>
        <h2 className="text-4xl md:text-5xl font-semibold mb-8 text-charcoal-900 tracking-tight leading-tight">Inisiasi Infrastruktur Digital Baru.</h2>
        <p className="text-lg text-charcoal-700 mb-12 max-w-2xl mx-auto leading-relaxed">
          Hadirkan kestabilan sistem perangkat lunak untuk ekspansi bisnis Anda. Ajukan proposal pertemuan teknis dengan arsitek pengembangan kami.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-charcoal-900 hover:bg-charcoal-800 text-white px-10 py-5 font-medium text-sm transition-all shadow-sm">
            Jadwalkan Konsultasi Teknis
          </button>
          <button className="bg-offwhite-100 border border-charcoal-900/10 hover:border-charcoal-900/30 text-charcoal-900 px-10 py-5 font-medium text-sm transition-all focus:outline-none shadow-sm">
            Ajukan Tanya Jawab
          </button>
        </div>
      </div>
    </section>
  );
}
