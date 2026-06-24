"use client";

import { ArrowUpRight } from "lucide-react";

export function CallToAction() {
  return (
    <section className="py-16 md:py-32 relative overflow-hidden bg-offwhite-200 border-b border-charcoal-900/10 font-sans">
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <span className="uppercase tracking-widest text-terracotta text-[10px] md:text-xs font-semibold mb-4 md:mb-6 block">Siap Memulai?</span>
        <h2 className="text-2xl md:text-5xl font-light mb-6 md:mb-8 text-charcoal-900 tracking-tight leading-tight">Bangun Infrastruktur Digital Anda.</h2>
        <p className="text-sm md:text-lg text-charcoal-700 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed">
          Wujudkan sistem perangkat lunak yang stabil dan siap mendukung pertumbuhan bisnis Anda. Jadwalkan pertemuan dengan tim arsitek kami untuk diskusi lebih lanjut.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://wa.me/6281268529556" target="_blank" rel="noopener noreferrer" className="bg-charcoal-900 hover:bg-charcoal-800 text-white px-8 md:px-10 py-4 md:py-5 font-medium text-xs md:text-sm transition-all shadow-sm uppercase tracking-widest">
            Jadwalkan Konsultasi
          </a>
          <button className="bg-white border border-charcoal-900/10 hover:border-charcoal-900/30 text-charcoal-900 px-8 md:px-10 py-4 md:py-5 font-medium text-xs md:text-sm transition-all focus:outline-none shadow-sm uppercase tracking-widest">
            Hubungi Kami
          </button>
        </div>
      </div>

      {/* Decorative Weave Pattern */}
      <div className="absolute bottom-0 right-0 w-64 h-64 opacity-5 weave-bg pointer-events-none"></div>
    </section>
  );
}
