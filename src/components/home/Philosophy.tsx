"use client";

import { ArrowRight, Box } from "lucide-react";
import Link from "next/link";

export function Philosophy() {
  return (
    <section className="py-12 md:py-24 bg-charcoal-100 border-y border-charcoal-900/10 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <h2 className="text-xl md:text-3xl font-light mb-4 md:mb-6 text-charcoal-900 leading-snug">
              Setiap Proyek Kami Unik. <br />
              <strong className="font-semibold">Dibangun dengan Pemahaman Mendalam.</strong>
            </h2>
            <p className="text-sm md:text-lg text-charcoal-700 leading-relaxed mb-6">
              Di balik setiap solusi teknologi yang sukses, ada metodologi yang dianalisis dengan cermat. Kami tidak menawarkan software jadi, melainkan merancang setiap baris kode agar sesuai dengan cara kerja bisnis Anda.
            </p>
            <Link href="#kontak" className="inline-flex items-center gap-2 text-terracotta font-semibold hover:text-terracotta-hover transition-colors text-xs md:text-sm uppercase tracking-wider">
              Pelajari Pendekatan Kami <ArrowRight size={14} />
            </Link>
          </div>
          <div className="relative p-6 md:p-10 bg-offwhite-200 border border-charcoal-900/10 songket-border-top shadow-lg">
            <Box className="text-terracotta mb-4 md:mb-6 opacity-30" size={32} />
            <p className="text-lg md:text-xl font-medium text-charcoal-800 leading-relaxed mb-6 italic">
              "Teknologi terbaik seharusnya tidak terasa seperti teknologi. Ia harus terasa seperti perpanjangan tangan tim Anda — andal, efisien, dan tanpa hambatan."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-charcoal-900 flex items-center justify-center text-white text-[10px] font-bold">BK</div>
              <div>
                <h5 className="font-semibold text-charcoal-900 text-xs md:text-sm">Prinsip Rekayasa BKTech</h5>
                <span className="text-charcoal-600 text-[10px]">Arsitektur & Implementasi</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
