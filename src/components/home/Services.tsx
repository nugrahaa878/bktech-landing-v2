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
                <strong className="font-semibold">Solusi Digital</strong> yang Dirancang untuk Bisnis Anda.
              </h2>
            </div>
          </div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerFade}
            className="grid lg:grid-cols-2 gap-8"
          >
            <StructuralCard
              icon={<Code strokeWidth={1} size={32} />}
              title="Pengembangan Perangkat Lunak Kustom"
              desc="Aplikasi web dan mobile yang dirancang khusus untuk kebutuhan bisnis Anda. Dibangun dari awal untuk menangani alur kerja kompleks dan volume data tinggi."
            />
            <StructuralCard
              icon={<ShieldCheck strokeWidth={1} size={32} />}
              title="Sistem Manajemen Otomatis"
              desc="Digitalisasi proses dari Point of Sales (POS) hingga manajemen rantai pasok. Dilengkapi analitik lengkap untuk membantu UMKM memantau kinerja dan audit dengan akurat."
            />
            <StructuralCard
              icon={<Smartphone strokeWidth={1} size={32} />}
              title="Portal Pariwisata Interaktif"
              desc="Platform digital berperforma tinggi untuk industri wisata dan perhotelan Sumatera Barat, dengan standar antarmuka yang siap bersaing di tingkat global."
            />
            <StructuralCard
              icon={<UserCheck strokeWidth={1} size={32} />}
              title="Konsultasi & Modernisasi Sistem"
              desc="Audit kode dan modernisasi infrastruktur existing untuk memastikan aplikasi Anda berjalan lancar, mudah dikembangkan, dan bebas dari celah keamanan."
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
