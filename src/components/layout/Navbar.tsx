"use client";

import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-offwhite-200/95 backdrop-blur-sm border-b border-charcoal-900/10 transition-all">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 relative z-10 group">
          <Image
            src="/logo-no-bg.png"
            alt="BKTech Logo"
            width={160}
            height={40}
            className="h-7 object-contain w-auto opacity-90 group-hover:opacity-100 transition-opacity invert"
          />
        </Link>
        <div className="hidden md:flex items-center gap-10 text-sm font-medium text-charcoal-700 tracking-wide uppercase">
          <Link href="#layanan" className="hover:text-terracotta transition-colors">Layanan Kami</Link>
          <Link href="#klien" className="hover:text-terracotta transition-colors">Portofolio</Link>
          <Link href="#tim" className="hover:text-terracotta transition-colors">Tentang Industri</Link>
        </div>
        <button className="bg-charcoal-900 text-white px-6 py-3 font-semibold text-sm transition-colors hover:bg-terracotta shadow-sm">
          Diskusikan Proyek
        </button>
      </div>
    </nav>
  );
}
