"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-charcoal-900 text-offwhite-100 py-12 md:py-24 font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Image
                src="/logo-no-bg.png"
                alt="BKTech Logo"
                width={120}
                height={30}
                className="h-6 md:h-7 w-auto invert opacity-90"
              />
            </div>
            <p className="text-xs md:text-sm text-offwhite-400 leading-relaxed max-w-xs">
              Membangun fondasi digital yang kuat untuk UMKM dan Pariwisata Sumatera Barat melalui rekayasa perangkat lunak yang presisi dan filosofi kekeluargaan.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-[10px] md:text-xs mb-6 md:mb-8">Layanan Utama</h4>
            <ul className="space-y-3 md:space-y-4 text-xs md:text-sm text-offwhite-400">
              <li><Link href="#" className="hover:text-terracotta transition-colors">Software Architecture</Link></li>
              <li><Link href="#" className="hover:text-terracotta transition-colors">Digital Transformation</Link></li>
              <li><Link href="#" className="hover:text-terracotta transition-colors">Cloud Infrastructure</Link></li>
              <li><Link href="#" className="hover:text-terracotta transition-colors">Maintenance & Support</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-[10px] md:text-xs mb-6 md:mb-8">Perusahaan</h4>
            <ul className="space-y-3 md:space-y-4 text-xs md:text-sm text-offwhite-400">
              <li><Link href="#" className="hover:text-terracotta transition-colors">Tentang Kami</Link></li>
              <li><Link href="#" className="hover:text-terracotta transition-colors">Metodologi Kerja</Link></li>
              <li><Link href="#" className="hover:text-terracotta transition-colors">Tim Rekayasa</Link></li>
              <li><Link href="#" className="hover:text-terracotta transition-colors">Hubungi Kami</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-[10px] md:text-xs mb-6 md:mb-8">Hubungi</h4>
            <ul className="space-y-3 md:space-y-4 text-xs md:text-sm text-offwhite-400">
              <li className="flex items-center gap-3"><Mail size={14} className="text-terracotta" /> hello@bktech.id</li>
              <li className="flex items-center gap-3"><MapPin size={14} className="text-terracotta" /> Padang, Sumatera Barat</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-charcoal-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-widest text-offwhite-500 font-medium">
            © 2024 BKTECH SYSTEMS. DUKUNGAN LOKAL, KUALITAS GLOBAL.
          </p>
          <div className="flex gap-6 text-offwhite-500">
            <Link href="#" className="hover:text-white transition-colors"><Instagram size={18} /></Link>
            <Link href="#" className="hover:text-white transition-colors"><Linkedin size={18} /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
