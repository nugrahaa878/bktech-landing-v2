"use client";

import { ArrowRight, Box } from "lucide-react";
import Link from "next/link";

export function Philosophy() {
  return (
    <section className="py-24 bg-charcoal-100 border-y border-charcoal-900/10 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-light mb-6 text-charcoal-900 leading-snug">
              Karya Kami Tidak Diproduksi Massal. <br />
              <strong className="font-semibold">Itu Berdasar Pemahaman Nyata.</strong>
            </h2>
            <p className="text-charcoal-700 leading-relaxed mb-6">
              Di balik setiap implementasi teknologi yang sukses, terdapat metodologi yang dianalisa secara kritis. Kami tidak menawarkan *software* jadi (*out-of-the-box*), melainkan menjahit baris-baris logika pemrograman agar sesuai dengan postur operasional perusahaan Anda.
            </p>
            <Link href="#kontak" className="inline-flex items-center gap-2 text-terracotta font-semibold hover:text-terracotta-hover transition-colors text-sm uppercase tracking-wider">
              Baca Metodologi Kita <ArrowRight size={16} />
            </Link>
          </div>
          <div className="relative p-10 bg-offwhite-200 border border-charcoal-900/10 songket-border-top shadow-lg">
            <Box className="text-terracotta mb-6 opacity-30" size={48} />
            <p className="text-xl font-medium text-charcoal-800 leading-relaxed mb-6 italic">
              "Teknologi terbaik seharusnya tidak terasa seperti teknologi. Itu harus terasa seperti perpanjangan tangan organisasi yang andal dan tanpa friksi sama sekali."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-charcoal-900 flex items-center justify-center text-white text-xs font-bold">BK</div>
              <div>
                <h5 className="font-semibold text-charcoal-900 text-sm">Prinsip Rekayasa BKTech</h5>
                <span className="text-charcoal-600 text-xs">Arsitektur & Logika Implementasi</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
