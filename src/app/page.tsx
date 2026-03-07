"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code, Store, Globe, MapPin, Zap, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

import { Variants } from "framer-motion";

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 selection:bg-minang selection:text-white">
      {/* Navbar Minimalist */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-minang flex items-center justify-center text-white font-heading font-bold text-xl leading-none pt-1">
              K
            </div>
            <span className="font-heading font-black text-2xl tracking-tight text-slate-900">KitaTech</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <Link href="#layanan" className="hover:text-minang transition-colors">Layanan</Link>
            <Link href="#tentang" className="hover:text-minang transition-colors">Tentang Kita</Link>
            <Link href="#klien" className="hover:text-minang transition-colors">UMKM & Pariwisata</Link>
          </div>
          <button className="bg-slate-900 hover:bg-minang text-white px-5 py-2.5 rounded-full font-medium text-sm transition-all shadow-lg hover:shadow-minang/30">
            Mulai Konsultasi
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 opacity-10 circuit-pattern"></div>
        <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-minang rounded-full blur-[150px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-500 rounded-full blur-[150px] opacity-10 translate-y-1/2 -translate-x-1/2"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 backdrop-blur-sm text-sm font-medium text-slate-300 mb-8">
            <MapPin size={14} className="text-minang" />
            <span>Berbasis di Padang, Sumatera Barat</span>
          </motion.div>

          <motion.h1 initial="hidden" animate="visible" variants={fadeIn} className="text-5xl md:text-7xl font-heading font-black tracking-tight leading-[1.1] mb-6 max-w-4xl text-balance">
            Membangun Masa Depan <span className="text-transparent bg-clip-text bg-linear-to-r from-minang-light to-red-400">Digital Kita</span>
          </motion.h1>

          <motion.p initial="hidden" animate="visible" variants={fadeIn} className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl text-balance">
            Local Support for Global Quality. Kami membantu UMKM dan sektor pariwisata di Sumatera Barat melompat ke era digital dengan solusi teknologi yang aman, cepat, dan profesional.
          </motion.p>

          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="bg-minang hover:bg-minang-dark text-white px-8 py-4 rounded-full font-semibold text-base transition-all flex items-center justify-center gap-2 shadow-xl shadow-minang/20 group">
              Transformasi Sekarang
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-full font-semibold text-base transition-all flex items-center justify-center gap-2">
              Lihat Portofolio
            </button>
          </motion.div>
        </div>

        {/* Rumah Gadang x Circuit Illustration */}
        <div className="max-w-7xl mx-auto px-6 mt-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="w-full flex justify-center"
          >
            <svg viewBox="0 0 1000 400" className="w-full max-w-4xl h-auto drop-shadow-2xl">
              <defs>
                <linearGradient id="minang-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--color-minang-light)" />
                  <stop offset="100%" stopColor="var(--color-minang)" />
                </linearGradient>
                <linearGradient id="slate-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#1e293b" />
                  <stop offset="100%" stopColor="#0f172a" />
                </linearGradient>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="8" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Digital Circuit Lines originating from the house */}
              <g stroke="#334155" strokeWidth="2" fill="none" opacity="0.6">
                {/* Center base lines */}
                <path d="M 500 300 L 500 400" />
                <circle cx="500" cy="400" r="4" fill="var(--color-minang)" />
                <path d="M 450 300 L 450 350 L 400 350 L 400 400" />
                <circle cx="400" cy="400" r="4" fill="#334155" />
                <path d="M 550 300 L 550 350 L 600 350 L 600 400" />
                <circle cx="600" cy="400" r="4" fill="#334155" />

                {/* Left side lines */}
                <path d="M 300 240 L 250 240 L 250 350 L 200 350" />
                <circle cx="200" cy="350" r="4" fill="var(--color-minang)" />
                <path d="M 220 200 L 150 200 L 150 300" />
                <circle cx="150" cy="300" r="4" fill="#334155" />

                {/* Right side lines */}
                <path d="M 700 240 L 750 240 L 750 350 L 800 350" />
                <circle cx="800" cy="350" r="4" fill="var(--color-minang)" />
                <path d="M 780 200 L 850 200 L 850 300" />
                <circle cx="850" cy="300" r="4" fill="#334155" />
              </g>

              {/* Glowing nodes on the house structure */}
              <g fill="var(--color-minang)" className="animate-pulse">
                <circle cx="200" cy="110" r="3" filter="url(#glow)" />
                <circle cx="340" cy="80" r="3" filter="url(#glow)" />
                <circle cx="500" cy="50" r="4" filter="url(#glow)" />
                <circle cx="660" cy="80" r="3" filter="url(#glow)" />
                <circle cx="800" cy="110" r="3" filter="url(#glow)" />
              </g>

              {/* Rumah Gadang Roof Silhouette (Bagonjong) */}
              <g transform="translate(0, 30)">
                {/* Base platform */}
                <path d="M 280 270 L 720 270 L 680 300 L 320 300 Z" fill="url(#slate-grad)" stroke="var(--color-minang)" strokeWidth="2" />

                {/* Inner smaller roof (symmetrical) */}
                <path d="M 500 60 
                         C 450 120, 380 150, 320 120 
                         C 380 160, 450 170, 500 170 
                         C 550 170, 620 160, 680 120 
                         C 620 150, 550 120, 500 60 Z" fill="none" stroke="var(--color-minang-light)" strokeWidth="3" filter="url(#glow)" />

                {/* Outer sweeping roof (left side) */}
                <path d="M 500 40 
                         C 350 120, 200 180, 150 100 
                         C 220 180, 350 200, 500 210" fill="none" stroke="var(--color-minang)" strokeWidth="4" />

                {/* Outer sweeping roof (right side) */}
                <path d="M 500 40 
                         C 650 120, 800 180, 850 100 
                         C 780 180, 650 200, 500 210" fill="none" stroke="var(--color-minang)" strokeWidth="4" />

                {/* Walls */}
                <path d="M 300 200 L 300 270 M 350 205 L 350 270 M 400 208 L 400 270 M 450 210 L 450 270 M 500 210 L 500 270 M 550 210 L 550 270 M 600 208 L 600 270 M 650 205 L 650 270 M 700 200 L 700 270" stroke="#334155" strokeWidth="2" strokeDasharray="4 2" />

                {/* Central solid piece */}
                <path d="M 460 210 L 540 210 L 540 270 L 460 270 Z" fill="url(#slate-grad)" stroke="var(--color-minang)" strokeWidth="1" />

                {/* Tech node on top */}
                <path d="M 495 20 L 505 20 L 500 40 Z" fill="var(--color-minang-light)" filter="url(#glow)" />
              </g>
            </svg>
          </motion.div>
        </div>
      </section>

      {/* Trust & Stats */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-100">
            <Stat label="Tahun Pengalaman" value="5+" />
            <Stat label="UMKM Terbantu" value="120+" />
            <Stat label="Kualitas Sistem" value="Global" />
            <Stat label="Fokus Wilayah" value="Sumbar" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="layanan" className="py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 md:flex justify-between items-end">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-heading font-black text-slate-900 mb-6">
                Solusi Digital <span className="text-minang">Tepat Sasaran</span> untuk Ekosistem Bisnis Kita
              </h2>
              <p className="text-lg text-slate-600">
                Kami memahami tantangan spesifik yang dihadapi pengusaha di Ranah Minang. Solusi kami dirancang untuk mudah digunakan, aman, dan dapat diskalakan seiring pergerakan bisnis Anda.
              </p>
            </div>
            <Link href="#kontak" className="hidden md:flex items-center gap-2 text-minang font-semibold hover:text-minang-dark transition-colors">
              Konsultasi Kebutuhan <ArrowRight size={16} />
            </Link>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-6"
          >
            <ServiceCard
              icon={<Store size={32} />}
              title="Sistem Point of Sales UMKM"
              desc="Aplikasi kasir cerdas dan manajemen inventaris yang terintegrasi. Bantu catat penjualan tanpa ribet, langsung dari HP Anda."
            />
            <ServiceCard
              icon={<Globe size={32} />}
              title="Website Etalase Pariwisata"
              desc="Kami mendesain portal wisata berstandar global. Buat destinasi atau layanan travel Anda dikenal wisatawan domestik maupun mancanegara."
            />
            <ServiceCard
              icon={<Code size={32} />}
              title="Pengembangan Aplikasi Kustom"
              desc="Punya alur kerja unik? Kami buatkan platform digital khusus (Web/Mobile) yang sesuai persis dengan kebutuhan operasional perusahaan Anda."
            />
          </motion.div>
        </div>
      </section>

      {/* Feature / Concept Section */}
      <section id="tentang" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 relative"
          >
            <div className="aspect-square bg-slate-100 rounded-3xl relative overflow-hidden group">
              {/* Abstract structural graphic */}
              <div className="absolute inset-0 circuit-pattern opacity-30"></div>
              <div className="absolute inset-8 bg-white rounded-2xl shadow-xl flex items-center justify-center -rotate-3 group-hover:rotate-0 transition-transform duration-500 ease-out border border-slate-100">
                <div className="text-center p-8">
                  <div className="w-20 h-20 bg-minang/10 rounded-full text-minang flex items-center justify-center mx-auto mb-6">
                    <ShieldCheck size={40} />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-slate-900 mb-4">Lokal Bercita Rasa Global</h3>
                  <p className="text-slate-500 max-w-sm text-balance">
                    Setiap baris kode yang ditulis dikerjakan dengan standar industri Silicon Valley, disesuaikan untuk kebutuhan nyata pasar lokal.
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-minang rounded-full blur-[60px] opacity-20"></div>
          </motion.div>

          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-heading font-black text-slate-900 mb-6 leading-tight">
              Mengapa Memilih <span className="text-minang">KitaTech</span>?
            </h2>
            <div className="space-y-8 mt-10">
              <FeatureItem
                title="Paham Secara Kultural"
                desc="Komunikasi lebih nyambung. Kami adalah putra asli daerah yang mengerti lanskap perekonomian dan dinamika kultural Sumatera Barat."
              />
              <FeatureItem
                title="Performa Tinggi & Keamanan"
                desc="Menggunakan infrastruktur modern (Cloud & arsitektur mikro) yang menjamin sistem anti-lelet walau diakses ribuan konsumen."
              />
              <FeatureItem
                title="Pendampingan Jangka Panjang"
                desc="Bukan sekadar 'buat lalu ditinggal'. Kami pastikan sistem berjalan lancar, dan Anda paham cara memanfaatkannya ke potensi maksimal."
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 opacity-10 circuit-pattern"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-minang mb-8 shadow-xl shadow-minang/30">
            <Zap className="text-white" size={32} />
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-black mb-6">Siap Jadikan UMKM <br />Anda Juara Digital?</h2>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto text-balance">
            Jangan biarkan bisnis Anda tertinggal. Bergabung bersama puluhan pebisnis Sumatera Barat lainnya yang sudah percaya pada kualitas solusi kami.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-minang hover:bg-minang-light text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl shadow-minang/20 hover:-translate-y-1">
              Hubungi Kami Sekarang
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 pt-20 pb-10 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded bg-minang flex items-center justify-center text-white font-heading font-bold text-xl leading-none pt-1">
                  K
                </div>
                <span className="font-heading font-black text-2xl text-white">KitaTech</span>
              </div>
              <p className="max-w-sm mb-6 text-slate-400 text-balance">
                Software house kebanggaan Sumatera Barat. Menghadirkan solusi website dan aplikasi berkualitas tinggi untuk mentransformasi pariwisata dan UMKM di Ranah Minang.
              </p>
            </div>
            <div>
              <h4 className="font-heading font-bold text-white mb-6">Layanan</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="#" className="hover:text-minang transition-colors">Sistem POS UMKM</Link></li>
                <li><Link href="#" className="hover:text-minang transition-colors">Web Profil & Pariwisata</Link></li>
                <li><Link href="#" className="hover:text-minang transition-colors">Pengembangan Aplikasi Kustom</Link></li>
                <li><Link href="#" className="hover:text-minang transition-colors">UI/UX Design</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-bold text-white mb-6">Kontak</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <MapPin size={16} className="text-minang shrink-0 mt-0.5" />
                  <span>Jl. Khatib Sulaiman No. 1, Padang, Sumatera Barat 25136</span>
                </li>
                <li>hello@kitatech.id</li>
                <li>+62 811-0000-0000</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-800 text-sm">
            <p>&copy; 2026 KitaTech Indonesia. All rights reserved.</p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <Link href="#" className="hover:text-white transition-colors">Instagram</Link>
              <Link href="#" className="hover:text-white transition-colors">LinkedIn</Link>
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
    <div className="flex flex-col items-center text-center p-4">
      <span className="font-heading font-black text-4xl text-slate-900 mb-2">{value}</span>
      <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">{label}</span>
    </div>
  );
}

function ServiceCard({ icon, title, desc }: { icon: ReactNode, title: string, desc: string }) {
  return (
    <motion.div variants={fadeIn} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300 group">
      <div className="w-14 h-14 rounded-2xl bg-slate-50 text-slate-700 flex items-center justify-center mb-6 group-hover:bg-minang group-hover:text-white transition-colors">
        {icon}
      </div>
      <h3 className="font-heading font-bold text-xl text-slate-900 mb-4">{title}</h3>
      <p className="text-slate-600 leading-relaxed text-balance">{desc}</p>
    </motion.div>
  );
}

function FeatureItem({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="flex gap-4">
      <div className="w-6 h-6 rounded-full bg-minang/20 text-minang flex items-center justify-center shrink-0 mt-1">
        <ArrowRight size={14} />
      </div>
      <div>
        <h4 className="font-heading font-bold text-xl text-slate-900 mb-2">{title}</h4>
        <p className="text-slate-600 leading-relaxed text-balance">{desc}</p>
      </div>
    </div>
  );
}
