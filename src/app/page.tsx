"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Code, ShieldCheck, Box, UserCheck, Smartphone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
};

const staggerFade: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function Home() {
  return (
    <main className="min-h-screen bg-offwhite-200 text-charcoal-900 selection:bg-terracotta selection:text-white">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 structural-grid opacity-50 z-0 pointer-events-none"></div>

      {/* Solid Navbar Navbar */}
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

      <div className="relative z-10 pt-24 pb-0">
        <div className="max-w-7xl mx-auto px-6">

          {/* Main Layout Grid Structure */}
          <div className="border-x border-charcoal-900/10 min-h-screen pt-12 pb-24">

            {/* Hero Section */}
            <section className="px-6 md:px-12 grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
              <motion.div
                initial="hidden" animate="visible" variants={staggerFade}
                className="max-w-2xl py-12"
              >
                <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
                  <div className="h-px w-8 bg-terracotta"></div>
                  <span className="uppercase tracking-widest text-terracotta text-xs font-semibold">
                    West Sumatra Digital Foundry
                  </span>
                </motion.div>

                <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-light leading-[1.15] mb-8 text-charcoal-900 tracking-tight">
                  <strong className="font-semibold text-charcoal-900">Rekayasa Terukur.</strong> <br />
                  Solusi Perangkat Lunak untuk Ruang Bisnis Modern.
                </motion.h1>

                <motion.p variants={fadeUp} className="text-lg text-charcoal-700 leading-relaxed mb-12 max-w-lg">
                  Keahlian rekayasa perangkat lunak berskala global, ditempa dengan pemahaman tajam akan ekosistem UMKM dan pariwisata di Sumatera Barat. Kami membangun infrastruktur digital yang solid dan dapat diandalkan.
                </motion.p>

                <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-5">
                  <button className="bg-terracotta hover:bg-terracotta-hover text-white px-8 py-4 font-medium text-sm transition-all flex items-center justify-center gap-3">
                    Pelajari Layanan
                    <ArrowRight size={16} />
                  </button>
                  <button className="bg-transparent border border-charcoal-900/20 text-charcoal-900 hover:border-charcoal-900 px-8 py-4 font-medium text-sm transition-all flex items-center justify-center">
                    Lihat Portofolio
                  </button>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative h-[600px] w-full"
              >
                {/* Structure Borders wrapping the image */}
                <div className="absolute top-4 left-4 w-full h-full border border-charcoal-900/10 weave-bg z-0 hidden md:block"></div>
                <div className="songket-border-left songket-border-top relative w-full h-full bg-charcoal-800 z-10 overflow-hidden shadow-2xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/bukittinggi_workspace.png"
                    alt="Modern Software Engineer Workspace in Bukittinggi"
                    className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-90 hover:opacity-100 transition-opacity duration-700 grayscale hover:grayscale-0"
                  />
                  {/* Subtle tint overlay to keep the grounded, monochromatic feel until hover */}
                  <div className="absolute inset-0 bg-charcoal-900/20 mix-blend-multiply pointer-events-none hover:opacity-0 transition-opacity duration-700"></div>
                </div>
              </motion.div>
            </section>

          </div>
        </div>
      </div>

      {/* Corporate Philosophy / Stat Divider */}
      <section className="bg-charcoal-900 text-offwhite-100 border-y-8 border-terracotta songket-border-top relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-charcoal-800/50">
            <Stat label="Tahun Pengalaman Rekayasa" value="5+" />
            <Stat label="Bisnis Teraselerasi" value="120+" />
            <Stat label="Nilai Kepuasan Klien" value="99%" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="layanan" className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="border-x border-charcoal-900/10 px-6 md:px-12 py-12">

            <div className="mb-16 md:flex justify-between items-end">
              <div className="max-w-2xl">
                <span className="uppercase tracking-widest text-terracotta text-xs font-semibold mb-4 block">Layanan Kami</span>
                <h2 className="text-3xl md:text-5xl font-light text-charcoal-900 leading-tight">
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

      {/* Work Philosophy / Statement Section */}
      <section className="py-24 bg-charcoal-100 border-y border-charcoal-900/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-light mb-6 text-charcoal-900">
                Karya Kami Tidak Diproduksi Massal. <br />
                <strong className="font-semibold">Itu Berdasar Pemahaman Nyata.</strong>
              </h2>
              <p className="text-charcoal-700 leading-relaxed mb-6">
                Di balik setiap implementasi teknologi yang sukses, terdapat metodologi yang dianalisa secara kritis. Kami tidak menawarkan *software* jadi (*out-of-the-box*), melainkan menjahit baris-baris logika pemrograman agar sesuai dengan postur operasional perusahaan Anda.
              </p>
              <Link href="#kontak" className="inline-flex items-center gap-2 text-terracotta font-semibold hover:text-terracotta-hover transition-colors text-sm uppercase tracking-wider">
                Baca Metodologi Kami <ArrowRight size={16} />
              </Link>
            </div>
            <div className="relative p-10 bg-offwhite-200 border border-charcoal-900/10 songket-border-top shadow-lg">
              <Box className="text-terracotta mb-6 opacity-30" size={48} />
              <p className="text-xl font-medium text-charcoal-800 leading-relaxed mb-6">
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

      {/* CTA Built upon Structure */}
      <section className="py-32 relative overflow-hidden bg-offwhite-200 border-b border-charcoal-900/10">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <span className="uppercase tracking-widest text-terracotta text-xs font-semibold mb-6 block">Memulai Interaksi Sistem</span>
          <h2 className="text-4xl md:text-5xl font-semibold mb-8 text-charcoal-900 tracking-tight">Inisiasi Infrastruktur Digital Baru.</h2>
          <p className="text-lg text-charcoal-700 mb-12 max-w-2xl mx-auto leading-relaxed">
            Hadirkan kestabilan sistem perangkat lunak untuk ekspansi bisnis Anda. Ajukan proposal pertemuan teknis dengan arsitek pengembangan kami.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-charcoal-900 hover:bg-charcoal-800 text-white px-10 py-5 font-medium text-sm transition-all">
              Jadwalkan Konsultasi Teknis
            </button>
            <button className="bg-offwhite-100 border border-charcoal-900/10 hover:border-charcoal-900/30 text-charcoal-900 px-10 py-5 font-medium text-sm transition-all focus:outline-none">
              Ajukan Tanya Jawab
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-offwhite-200 text-charcoal-700 pt-20 pb-10">
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
                <li>Jakarta — Padang, Indonesia</li>
                <li><a href="mailto:hello@bktech.id" className="hover:text-terracotta transition-colors">hello@bktech.id</a></li>
                <li>+62 811-0000-0000</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-charcoal-900/10 text-xs px-6 uppercase tracking-widest text-charcoal-600">
            <p>&copy; 2026 BKTech. Desain Klasik Presisi Mutlak.</p>
            <div className="flex items-center gap-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-charcoal-900 transition-colors">Kebijakan Privasi</Link>
              <Link href="#" className="hover:text-charcoal-900 transition-colors">LinkedIn</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

// Utility Components
function Stat({ label, value }: { label: string, value: string }) {
  return (
    <div className="py-12 px-6 flex flex-col justify-center text-center group">
      <span className="font-light text-5xl md:text-6xl text-white mb-4 group-hover:text-terracotta transition-colors">{value}</span>
      <span className="text-xs font-semibold text-offwhite-400 uppercase tracking-widest">{label}</span>
    </div>
  );
}

function StructuralCard({ icon, title, desc }: { icon: ReactNode, title: string, desc: string }) {
  return (
    <motion.div variants={fadeUp} className="bg-white p-10 border border-charcoal-900/5 hover:border-charcoal-900/20 group transition-all duration-300 relative z-10 hover:-translate-y-1 shadow-sm hover:shadow-lg">
      <div className="absolute top-0 left-0 w-1 h-0 bg-terracotta group-hover:h-full transition-all duration-500 ease-out"></div>
      <div className="text-charcoal-900 mb-8 opacity-80 group-hover:opacity-100 group-hover:text-terracotta transition-colors duration-300">
        {icon}
      </div>
      <h3 className="font-semibold text-xl text-charcoal-900 mb-4">{title}</h3>
      <p className="text-sm text-charcoal-600 leading-relaxed">{desc}</p>
    </motion.div>
  );
}
