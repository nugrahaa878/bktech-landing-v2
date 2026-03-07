"use client";

import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-offwhite-200 text-charcoal-700 pt-20 pb-10 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12 mb-16 px-6">
          <div className="col-span-1 md:col-span-5">
            <Image
              src="/logo-no-bg.png"
              alt="BKTech Logo"
              width={120}
              height={30}
              className="h-6 object-contain w-auto mb-6 opacity-80 invert"
            />
            <p className="text-sm max-w-sm mb-8 leading-relaxed">
              Platform dan perangkat lunak rekayasa industri terukur untuk memajukan fondasi perekonomian lokal Sumatra Barat menuju arena kompetensi global.
            </p>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <h4 className="font-semibold text-charcoal-900 text-sm mb-6 uppercase tracking-wider">Perihal Kami</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="#" className="hover:text-terracotta transition-colors">Portofolio Kerja</Link></li>
              <li><Link href="#" className="hover:text-terracotta transition-colors">Metodologi & Filosofi</Link></li>
              <li><Link href="#" className="hover:text-terracotta transition-colors">Arsitektur Rantai Cerdas</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-semibold text-charcoal-900 text-sm mb-6 uppercase tracking-wider">Hubungi</h4>
            <ul className="space-y-4 text-sm">
              <li>Padang, Sumatera Barat</li>
              <li><a href="mailto:hello@bktech.id" className="hover:text-terracotta transition-colors text-lowercase">hello@bktech.id</a></li>
              <li>+62 811-0000-0000</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-charcoal-900/10 text-xs px-6 uppercase tracking-widest text-charcoal-600">
          <p>&copy; {new Date().getFullYear()} BKTech. Desain Klasik Presisi Mutlak.</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-charcoal-900 transition-colors">Kebijakan Privasi</Link>
            <Link href="#" className="hover:text-charcoal-900 transition-colors">LinkedIn</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
