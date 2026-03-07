"use client";

import { motion, Variants } from "framer-motion";
import { ArrowUpRight, MessageCircleCode, CheckCircle2, ChevronRight, BarChart3, Database, Fingerprint, ArrowRight, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const revealUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 1, 0.3, 1] } }
};

const staggerWrap: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function Home() {
  return (
    <main className="min-h-screen bg-sand text-ulin selection:bg-gold selection:text-ulin-light overflow-hidden">

      {/* Header */}
      <nav className="fixed top-0 w-full z-50 mix-blend-difference texture-stone px-6 md:px-12 py-6 flex justify-between items-center transition-all bg-white/10 backdrop-blur-md border-b border-ulin/5">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-ulin text-gold flex items-center justify-center clip-asymmetric font-heading font-black text-xl">
            B
          </div>
          <span className="font-heading font-black text-2xl tracking-tight text-sand">BKTech</span>
        </Link>

        <div className="hidden md:flex gap-10 font-body font-medium text-sm text-stone">
          <Link href="#expertise" className="hover:text-gold transition-colors">Expertise</Link>
          <Link href="#philosophy" className="hover:text-gold transition-colors">Philosophy</Link>
          <Link href="#legacy" className="hover:text-gold transition-colors">Legacy</Link>
        </div>

        <button className="hidden md:flex items-center gap-2 bg-gradient-to-r from-forest to-forest-dark text-sand px-6 py-3 font-semibold text-sm hover:opacity-90 transition-opacity clip-asymmetric shadow-xl shadow-forest/20">
          <MessageCircleCode size={18} className="text-gold" />
          <span>WhatsApp Direct</span>
        </button>
      </nav>

      {/* Hero Section: Asymmetrical Overlaps */}
      <section className="pt-32 lg:pt-48 pb-20 px-6 md:px-12 max-w-[1600px] mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center relative">

          {/* Main Typography Column */}
          <motion.div initial="hidden" animate="visible" variants={staggerWrap} className="lg:col-span-7 z-20 xl:pr-12">
            <motion.div variants={revealUp} className="inline-flex items-center gap-3 bg-stone px-4 py-2 mb-8 border-l-2 border-gold text-sm font-semibold text-stone-deep uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-gold"></span>
              West Sumatra Engineering
            </motion.div>

            <motion.h1 variants={revealUp} className="text-5xl md:text-7xl xl:text-[5.5rem] font-heading font-black leading-[1.05] mb-8 text-ulin">
              Precision <br />
              <span className="text-forest">Architecture.</span><br />
              Solid <span className="text-gradient-gold">Legacy.</span>
            </motion.h1>

            <motion.p variants={revealUp} className="text-lg md:text-xl text-stone-deep max-w-xl mb-12 font-medium leading-relaxed">
              Membangun infrastruktur digital korporat dengan asas <strong className="text-ulin font-bold">Kekeluargaan</strong> yang membumi, dieksekusi dengan <strong className="text-ulin font-bold">Profesionalisme</strong> yang tak tertandingi.
            </motion.p>

            <motion.div variants={revealUp} className="flex flex-col sm:flex-row gap-5 items-start">
              <button className="texture-wood text-sand px-8 py-5 text-sm uppercase tracking-widest font-bold flex items-center gap-4 hover:shadow-2xl hover:shadow-ulin/30 transition-all clip-asymmetric group">
                Mulai Kolaborasi <ArrowUpRight size={18} className="text-gold group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              <div className="flex items-center gap-4 px-6 py-5 cursor-pointer group">
                <div className="w-10 h-10 rounded-full border border-stone-dark flex items-center justify-center group-hover:border-forest transition-colors">
                  <ChevronRight size={18} className="text-stone-deep group-hover:text-forest" />
                </div>
                <span className="font-semibold text-sm uppercase tracking-wider text-ulin group-hover:text-forest transition-colors">Eksplorasi Profil</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Overlapping Image Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="lg:col-span-6 lg:-ml-12 z-10 relative mt-12 lg:mt-0"
          >
            <div className="relative aspect-[4/5] md:aspect-[3/4] lg:aspect-square w-full max-w-2xl ml-auto clip-asymmetric-reverse group">
              <div className="absolute inset-0 bg-forest/20 mix-blend-multiply z-10 group-hover:bg-transparent transition-colors duration-700"></div>
              <Image
                src="/ukir_minang_carving.png"
                alt="Intricate Rumah Gadang Wood Carvings"
                fill
                className="object-cover object-center scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out"
                priority
              />
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-ulin to-transparent z-20"></div>

              {/* Floating Stat Badge */}
              <div className="absolute bottom-8 left-8 z-30 texture-stone p-6 border-l-4 border-gold max-w-xs shadow-2xl backdrop-blur-sm">
                <div className="text-gold font-heading font-black text-4xl mb-1">100%</div>
                <div className="text-xs font-bold uppercase tracking-widest text-ulin">Konstruksi Digital Terpercaya</div>
              </div>
            </div>

            {/* Background Accent Element */}
            <div className="absolute -top-10 -right-10 w-2/3 h-full texture-wood -z-10 clip-asymmetric-reverse opacity-90 translate-y-12 translate-x-12"></div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy / About Section (Asymmetrical overlaps) */}
      <section id="philosophy" className="py-24 md:py-32 relative">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-8 relative items-center">

          {/* Background Text Overlay */}
          <div className="absolute top-0 left-12 font-heading font-black text-[10rem] md:text-[15rem] leading-none text-stone-dark opacity-5 select-none z-0">
            UKIE
          </div>

          <div className="md:col-span-4 z-10 relative">
            <div className="texture-wood p-12 lg:p-16 text-sand clip-asymmetric shadow-2xl">
              <Fingerprint size={48} className="text-gold mb-8 stroke-[1.5]" />
              <h2 className="text-3xl font-heading font-black mb-6 leading-tight">Keakuratan Arsitektur Minang</h2>
              <p className="text-sand/80 font-light leading-relaxed mb-8">
                Seperti pasak kayu ulin pada Rumah Gadang yang mengikat tanpa paku, sistem yang kami bangun merangkai data dengan skalabilitas yang lentur namun kokoh terhadap beban operasional.
              </p>
              <div className="w-12 h-1 bg-gold"></div>
            </div>
          </div>

          <div className="md:col-span-7 col-start-6 z-10 lg:pl-16 mt-8 md:mt-0">
            <div className="flex flex-col gap-6">
              <div className="w-full texture-stone p-8 lg:p-12 border-t-2 border-forest hover:border-gold transition-colors duration-300">
                <h3 className="text-xl font-heading font-bold text-ulin mb-4">Profesionalisme Global</h3>
                <p className="text-stone-deep mb-6">Menerapkan praktik <i>Clean Architecture</i> dan keamanan berlapis (End-to-End Encryption) layaknya standar SaaS di Silicon Valley. Kualitas tanpa kompromi untuk pasar pariwisata yang global.</p>
                <ul className="grid grid-cols-2 gap-3 text-sm font-semibold text-ulin">
                  <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-forest" /> Zero Downtime</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-forest" /> Code Audit</li>
                </ul>
              </div>

              <div className="w-full md:w-[90%] md:ml-auto texture-stone p-8 lg:p-12 border-t-2 border-forest hover:border-gold transition-colors duration-300 shadow-xl relative md:top-[-2rem] md:left-[2rem]">
                <h3 className="text-xl font-heading font-bold text-ulin mb-4">Kekeluargaan Lokal</h3>
                <p className="text-stone-deep">Kami mengawal UMKM bukan sekadar dari layar komputer, melainkan melalui pendampingan tatap muka, edukasi langsung, dan komunikasi yang memecah batas bahasa teknis.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Services Section with distinct column layouts */}
      <section id="expertise" className="py-24 bg-forest text-sand relative overflow-hidden">
        {/* River stone abstract shapes */}
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-forest-dark/50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>

        <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8 border-b border-sand/10 pb-8">
            <h2 className="text-4xl lg:text-7xl font-heading font-black text-sand max-w-3xl">
              FONDASI <span className="text-gold">TEKNOLOGI.</span>
            </h2>
            <p className="text-sand/70 max-w-sm text-lg md:text-right font-light">
              Menangani infrastruktur digital yang kompleks dan menjadikannya solusi bisnis yang elegan.
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-6">
            <div className="md:col-span-5 texture-wood p-10 lg:p-14 group cursor-pointer relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-bl-full scale-0 group-hover:scale-150 transition-transform duration-700"></div>
              <BarChart3 size={40} className="text-gold mb-8" strokeWidth={1} />
              <h3 className="text-3xl font-heading font-bold mb-4">UMKM Point of Sales</h3>
              <p className="text-sand/60 mb-12">Sistem operasional retail yang tahan banting. Manajemen stok multisistem dengan dasbor eksekutif.</p>
              <div className="text-gold font-bold uppercase tracking-widest text-xs flex items-center gap-2 group-hover:gap-4 transition-all">
                Telusuri <ArrowRight size={14} className="text-gold" />
              </div>
            </div>

            <div className="md:col-span-7 flex flex-col gap-6">
              <div className="texture-stone bg-opacity-5 p-10 lg:p-14 border border-sand/10 group cursor-pointer relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-forest-dark/30 rounded-bl-full scale-0 group-hover:scale-150 transition-transform duration-700"></div>
                <Globe size={40} className="text-gold mb-6" strokeWidth={1} />
                <h3 className="text-3xl font-heading font-bold mb-4 text-ulin">Tourism Portals</h3>
                <p className="text-stone-deep mb-6 max-w-xl">Halaman depan visual bagi audiens global. Website pariwisata yang optimal untuk mesin pencari dengan integrasi reservasi instan.</p>
                <div className="text-forest font-bold uppercase tracking-widest text-xs flex items-center gap-2 group-hover:gap-4 transition-all">
                  Telusuri <ArrowRight size={14} className="text-forest" />
                </div>
              </div>

              <div className="texture-stone bg-opacity-5 p-10 lg:p-14 border border-sand/10 group cursor-pointer relative overflow-hidden">
                <Database size={40} className="text-gold mb-6" strokeWidth={1} />
                <h3 className="text-3xl font-heading font-bold mb-4 text-ulin">Enterprise Custom Platform</h3>
                <p className="text-stone-deep mb-6 max-w-xl">Infrastruktur B2B privat. Membangun aplikasi web/mobile yang dirancang presisi sesuai alur kerja perusahaan.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Whatsapp Focus */}
      <section className="py-0 relative">
        <div className="grid md:grid-cols-2 min-h-[50vh]">
          <div className="texture-stone flex flex-col justify-center p-12 lg:p-24 relative overflow-hidden">
            <div className="absolute -left-12 top-1/2 -translate-y-1/2 rotate-90 text-[8rem] font-heading font-black text-ulin/5 select-none whitespace-nowrap">CONTACT</div>
            <h2 className="text-4xl lg:text-5xl font-heading font-black text-ulin mb-6 z-10 leading-tight">
              Akselerasi Pertumbuhan Perusahaan Anda.
            </h2>
            <p className="text-stone-deep max-w-md z-10 mb-12">
              Jadwalkan konsultasi arsitektur sistem secara langsung, tatap muka, dan tanpa komitmen yang mengikat.
            </p>
          </div>
          <div className="texture-wood p-12 lg:p-24 flex items-center justify-center relative shadow-inner">
            <div className="absolute inset-0 bg-[radial-gradient(var(--color-gold)_1px,transparent_1px)] opacity-[0.03] bg-[size:20px_20px]"></div>
            <button className="relative w-full max-w-sm bg-sand hover:bg-white text-ulin p-8 flex flex-col items-center gap-6 group transition-colors shadow-2xl clip-asymmetric">
              <div className="w-16 h-16 bg-forest rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(43,58,50,0.4)] group-hover:scale-110 transition-transform duration-500">
                <MessageCircleCode size={30} className="text-gold" />
              </div>
              <div className="text-center">
                <div className="font-heading font-black text-2xl mb-2">WhatsApp Direct</div>
                <div className="text-sm text-stone-dark tracking-wide">+62 811 0000 0000</div>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gold scale-x-50 group-hover:scale-x-100 transition-transform duration-500"></div>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="texture-wood text-sand/60 py-16 border-t border-sand/10">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center md:items-start gap-12">

          <div className="max-w-sm text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-4 mb-8">
              <Image
                src="/logo-no-bg.png"
                alt="BKTech Logo"
                width={160}
                height={40}
                className="h-8 object-contain w-auto brightness-0 invert opacity-90"
              />
            </div>
            <p className="text-sm font-light leading-loose text-sand/50">
              Menghubungkan filosofi desain alam Minangkabau dengan rekayasa teknologi digital terkini untuk memajukan perekonomian daerah.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-16 text-sm">
            <div>
              <h4 className="text-gold font-bold uppercase tracking-widest text-xs mb-6">Kantor Utama</h4>
              <ul className="space-y-3 font-light">
                <li>Jl. Khatib Sulaiman No. 1</li>
                <li>Padang, Sumatera Barat</li>
                <li>Indonesia 25136</li>
                <li className="mt-8 pt-4 border-t border-sand/20 text-sand">hello@bktech.id</li>
              </ul>
            </div>
            <div>
              <h4 className="text-gold font-bold uppercase tracking-widest text-xs mb-6">Jejaring</h4>
              <ul className="space-y-3 font-light">
                <li><Link href="#layanan" className="hover:text-gold transition-colors">Layanan Sistem</Link></li>
                <li><Link href="#tentang" className="hover:text-gold transition-colors">Portofolio Rilis</Link></li>
                <li><Link href="#klien" className="hover:text-gold transition-colors">Studi Kasus UMKM</Link></li>
                <li><Link href="#klien" className="hover:text-gold transition-colors">Karir & Budaya</Link></li>
              </ul>
            </div>
          </div>

        </div>

        <div className="max-w-[1600px] mx-auto px-6 md:px-12 mt-20 pt-8 border-t border-sand/10 text-xs font-light tracking-widest uppercase flex flex-col md:flex-row justify-between items-center gap-4">
          <span>&copy; {new Date().getFullYear()} BKTech Engineering. All Rights Reserved.</span>
          <div className="flex gap-6 text-sand/40">
            <span>Security by Design</span>
            <span>Local Engineering</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
