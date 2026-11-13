"use client";

import { motion, Variants } from "framer-motion";
import { ArrowUpRight, Code, ShieldCheck, Smartphone, UserCheck } from "lucide-react";
import Link from "next/link";
import { StructuralCard } from "@/components/ui/Cards";

const staggerFade: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export function Services() {
  return (
    <section id="layanan" className="py-12 md:py-24 relative z-10 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <div className="border-x border-charcoal-900/10 px-4 md:px-12 py-8 md:py-12">

          <div className="mb-12 md:mb-16 md:flex justify-between items-end">
            <div className="max-w-2xl">
              <span className="uppercase tracking-widest text-terracotta text-[10px] md:text-xs font-semibold mb-3 md:mb-4 block">Layanan Kami</span>
              <h2 className="text-2xl md:text-5xl font-light text-charcoal-900 leading-tight">
                <strong className="font-semibold">Teman Diskusi Teknologi</strong> untuk Bisnis Anda.
              </h2>
            </div>
          </div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerFade}
            className="grid lg:grid-cols-2 gap-8"
          >
            <StructuralCard
              icon={<UserCheck strokeWidth={1} size={32} />}
              title="Konsultasi & Modernisasi Sistem"
              desc="Belum tahu harus mulai dari mana? Kami bantu memetakan kebutuhan, menimbang pilihan, dan memeriksa sistem lama Anda supaya langkah berikutnya jelas dan aman."
            />
            <StructuralCard
              icon={<Code strokeWidth={1} size={32} />}
              title="Website & Aplikasi Sesuai Kebutuhan"
              desc="Web dan mobile yang dibuat khusus untuk cara kerja bisnis Anda, dari alur sederhana sampai yang rumit."
            />
            <StructuralCard
              icon={<ShieldCheck strokeWidth={1} size={32} />}
              title="Sistem Operasional Bisnis"
              desc="Dari kasir (POS) sampai stok dan rantai pasok. Semuanya tercatat rapi, jadi Anda bisa memantau usaha dengan tenang."
            />
            <StructuralCard
              icon={<Smartphone strokeWidth={1} size={32} />}
              title="Portal Pariwisata & Perhotelan"
              desc="Situs dan platform untuk pelaku wisata dan hotel di Sumatera Barat, tampil menarik dan nyaman dipakai tamu dari mana saja."
            />
          </motion.div>

          <div className="mt-10 md:mt-12 pt-8 border-t border-charcoal-900/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-sm text-charcoal-600 max-w-lg">
              Penasaran cara memilih jasa pembuatan website yang tepat di Sumatera Barat?
            </p>
            <Link
              href="/blog/tips-memilih-jasa-pembuatan-website-di-sumatera-barat"
              className="inline-flex items-center gap-2 text-terracotta hover:text-terracotta-hover transition-colors text-sm font-semibold uppercase tracking-wider shrink-0"
            >
              Baca Panduannya <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
