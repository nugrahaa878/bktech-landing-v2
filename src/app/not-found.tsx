import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-offwhite-200 text-charcoal-900 selection:bg-terracotta selection:text-white font-sans">
      <div className="fixed inset-0 structural-grid opacity-50 z-0 pointer-events-none"></div>

      <Navbar />

      <div className="relative z-10 pt-24 pb-0">
        <div className="max-w-7xl mx-auto px-6">
          <div className="border-x border-charcoal-900/10 min-h-[60vh] flex items-center justify-center py-24">
            <div className="text-center max-w-xl px-4">
              <div className="flex items-center justify-center gap-4 mb-6 md:mb-8">
                <div className="h-px w-8 bg-terracotta"></div>
                <span className="uppercase tracking-widest text-terracotta text-[10px] md:text-xs font-semibold">
                  Error 404
                </span>
                <div className="h-px w-8 bg-terracotta"></div>
              </div>

              <h1 className="text-5xl md:text-7xl font-light leading-[1.1] mb-6 text-charcoal-900 tracking-tight">
                <strong className="font-semibold text-charcoal-900">Halaman</strong>
                <br />
                Tidak Ditemukan
              </h1>

              <p className="text-base md:text-lg text-charcoal-700 leading-relaxed mb-8 md:mb-12 max-w-md mx-auto">
                URL yang Anda cari tidak tersedia atau telah dipindahkan. Kembali ke beranda untuk menjelajahi layanan dan karya kami.
              </p>

              <Link
                href="/"
                className="inline-flex items-center gap-3 bg-terracotta hover:bg-terracotta-hover text-white px-7 md:px-8 py-3.5 md:py-4 font-medium text-xs md:text-sm transition-all font-sans"
              >
                <ArrowLeft size={16} />
                Kembali ke Beranda
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
