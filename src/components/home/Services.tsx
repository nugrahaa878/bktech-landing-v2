"use client";

import { motion, Variants } from "framer-motion";
import { Code, ShieldCheck, Smartphone, UserCheck } from "lucide-react";
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
                <strong className="font-semibold">Arsitektur Digital</strong> yang Mendefinisikan Ulang Standar.
              </h2>
            </div>
          </div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerFade}
            className="grid lg:grid-cols-2 gap-8"
          >
            <StructuralCard
              icon={<Code strokeWidth={1} size={32} />}
              title="Bespoke Software Development"
              desc="Pengembangan aplikasi kustom berbasis web dan mobile untuk entitas bisnis. Dirancang sistematis dari fondasi untuk menangani alur kerja kompleks dan lalu-lintas data tinggi."
            />
            <StructuralCard
              icon={<ShieldCheck strokeWidth={1} size={32} />}
              title="Sistem Manajemen Otomatis"
              desc="Digitalisasi proses Point of Sales (POS) hingga manajemen rantai pasok. Menyediakan analitik komprehensif bagi UMKM untuk keakuratan audit perusahaan."
            />
            <StructuralCard
              icon={<Smartphone strokeWidth={1} size={32} />}
              title="Tourism Experience Portal"
              desc="Etalase interaktif berkinerja tinggi bagi industri perjalanan wisata dan perhotelan Sumatera Barat untuk menyambut standar antarmuka mancanegara."
            />
            <StructuralCard
              icon={<UserCheck strokeWidth={1} size={32} />}
              title="Konsultasi & Kepatuhan Arsitektur"
              desc="Audit basis kode lama dan modernisasi infrastruktur yang ada untuk memastikan pergerakan aplikasi mulus, skalabel, serta bebas cacat kelemahan sistem."
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
