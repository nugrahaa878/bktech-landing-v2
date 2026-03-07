"use client";

import { motion, Variants } from "framer-motion";
import { ArrowUpRight, Hexagon, Shield, Globe2, Briefcase, RefreshCw, ArrowRight, Store, Code } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerFade: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const drawLine: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 2, ease: "easeOut" }
  }
};

export default function Home() {
  return (
    <main className="min-h-screen bg-navy-deep text-gray-soft selection:bg-accent selection:text-navy-deep font-body">
      {/* Background Abstract Skyline Wireframe */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20 flex justify-center items-end overflow-hidden pb-10">
        <svg viewBox="0 0 1440 400" className="w-full min-w-[1440px] h-auto stroke-navy-border fill-none" strokeWidth="0.5">
          {/* Abstract geometric mountains & architecture inspired by Minang skyline */}
          <motion.path
            variants={drawLine} initial="hidden" animate="visible"
            d="M 0 350 L 120 350 L 160 310 L 180 310 L 220 250 L 250 250 L 280 210 L 320 210 L 360 260 L 400 260 L 450 180 L 480 180 L 520 220 L 580 220 L 620 150 L 650 150 L 720 50 L 790 150 L 820 150 L 860 220 L 920 220 L 960 180 L 990 180 L 1040 260 L 1080 260 L 1120 210 L 1160 210 L 1190 250 L 1220 250 L 1260 310 L 1280 310 L 1320 350 L 1440 350"
          />
          {/* Symmetrical Masjid Raya / Bagonjong abstract wireframes */}
          <motion.path
            variants={drawLine} initial="hidden" animate="visible"
            d="M 620 350 L 620 250 L 680 200 L 720 100 L 760 200 L 820 250 L 820 350"
          />
          <motion.path
            variants={drawLine} initial="hidden" animate="visible"
            d="M 640 350 L 640 270 L 690 220 L 720 150 L 750 220 L 800 270 L 800 350"
          />
          {/* Geometric Grid Overlay */}
          <g stroke="rgba(234, 235, 238, 0.05)" strokeWidth="1">
            <line x1="0" y1="100" x2="1440" y2="100" />
            <line x1="0" y1="200" x2="1440" y2="200" />
            <line x1="0" y1="300" x2="1440" y2="300" />
            <line x1="360" y1="0" x2="360" y2="400" />
            <line x1="720" y1="0" x2="720" y2="400" />
            <line x1="1080" y1="0" x2="1080" y2="400" />
          </g>
        </svg>
      </div>

      <div className="ukiran-pattern fixed inset-0 z-0 pointer-events-none mix-blend-overlay"></div>

      {/* Corporate Header */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-navy-deep/80 backdrop-blur-xl border-b border-navy-light uppercase tracking-wider text-xs">
        <div className="max-w-[1440px] mx-auto px-8 md:px-16 h-24 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-4 relative z-10">
            <div className="relative w-10 h-10 border border-navy-border flex items-center justify-center -rotate-45">
              <div className="w-8 h-8 bg-accent/10 border border-accent rotate-45 flex items-center justify-center">
                <span className="font-heading font-black text-lg text-accent -rotate-45 mt-0.5 ml-0.5">B</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-black text-xl tracking-widest text-gray-soft leading-none">BKTech</span>
              <span className="text-[10px] text-gray-dark tracking-widest mt-1">Digital Architecture</span>
            </div>
          </Link>
          <div className="hidden lg:flex items-center gap-12 font-semibold text-gray-dark">
            <Link href="#services" className="hover:text-accent transition-colors flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-navy-border rotate-45"></span> Services
            </Link>
            <Link href="#philosophy" className="hover:text-accent transition-colors flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-navy-border rotate-45"></span> Philosophy
            </Link>
            <Link href="#impact" className="hover:text-accent transition-colors flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-navy-border rotate-45"></span> Impact
            </Link>
          </div>
          <button className="relative group overflow-hidden bg-transparent border border-navy-border text-gray-soft px-8 py-3 uppercase tracking-widest font-bold text-xs transition-all hover:border-accent z-10 clip-angular">
            <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
            <span className="relative z-10 group-hover:text-navy-deep flex items-center gap-2">
              Initiate Project <ArrowUpRight size={14} />
            </span>
          </button>
        </div>
      </nav>

      <div className="relative z-10 pt-40 pb-20">
        <div className="max-w-[1440px] mx-auto px-8 md:px-16">

          {/* Grid Layout Lines */}
          <div className="absolute top-0 bottom-0 left-8 md:left-16 w-px bg-navy-border opacity-50 z-0"></div>
          <div className="absolute top-0 bottom-0 right-8 md:right-16 w-px bg-navy-border opacity-50 z-0"></div>
          <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 w-px bg-navy-border opacity-50 z-0"></div>

          {/* Hero Section */}
          <section className="relative min-h-[70vh] flex flex-col justify-center border-t border-navy-border pt-16">
            <div className="absolute top-0 right-1/4 w-px h-24 bg-accent opacity-50"></div>

            <motion.div initial="hidden" animate="visible" variants={staggerFade} className="max-w-4xl">
              <motion.div variants={fadeUp} className="flex items-center gap-6 mb-12">
                <div className="h-px w-16 bg-accent"></div>
                <span className="uppercase tracking-[0.2em] text-accent text-sm font-bold flex items-center gap-2">
                  <Hexagon size={12} fill="currentColor" /> West Sumatra Base
                </span>
              </motion.div>

              <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl lg:text-[5.5rem] font-heading font-black leading-[1.05] mb-10 text-gray-soft uppercase">
                Bridging <span className="text-gray-dark">Cultural Heritage</span> <br />
                With <span className="text-accent">Digital Excellence</span>
              </motion.h1>

              <motion.div variants={fadeUp} className="grid md:grid-cols-2 gap-12 lg:gap-24 mb-16 relative">
                <div className="text-lg text-gray-dark leading-relaxed font-light">
                  Membangun fondasi digital yang presisi dengan nilai <strong className="text-gray-soft font-semibold">Kekeluargaan</strong> yang kokoh dan eksekusi yang penuh <strong className="text-gray-soft font-semibold">Profesionalisme</strong>.
                </div>
                <div className="flex flex-col gap-6 justify-center">
                  <div className="flex items-center gap-4 text-sm font-semibold tracking-wider uppercase text-gray-soft">
                    <div className="w-12 h-12 flex items-center justify-center border border-navy-border clip-angular rotate-[-9deg]">
                      <Briefcase size={18} className="text-accent" />
                    </div>
                    Corporate Ready
                  </div>
                  <div className="flex items-center gap-4 text-sm font-semibold tracking-wider uppercase text-gray-soft">
                    <div className="w-12 h-12 flex items-center justify-center border border-navy-border clip-angular">
                      <Shield size={18} className="text-accent" />
                    </div>
                    Engineered for Trust
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </section>

          {/* Philosophy Section */}
          <section id="philosophy" className="py-32 border-t border-navy-border relative">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-0">
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  <h2 className="text-sm font-bold tracking-[0.2em] text-accent uppercase mb-4 flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rotate-45"></div> 01. The Paradox
                  </h2>
                  <h3 className="text-4xl font-heading font-bold text-gray-soft uppercase leading-tight mb-8 max-w-sm">
                    Symmetry of Mind & Machine
                  </h3>
                </div>
                <div className="hidden lg:block w-32 h-32 border border-navy-border p-4">
                  <div className="w-full h-full border border-navy-border/50 rotate-45 flex items-center justify-center">
                    <div className="w-8 h-8 bg-navy-border/30 rotate-45"></div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 lg:pl-16 lg:border-l border-navy-border relative">
                <div className="absolute top-1/2 -left-3 w-6 h-6 bg-navy-deep border border-navy-border rotate-45 transform -translate-y-1/2"></div>
                <div className="space-y-12">
                  <motion.div
                    initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
                    className="p-10 border border-navy-border bg-navy-main/30 backdrop-blur-sm relative group overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-bl-full group-hover:scale-150 transition-transform duration-700"></div>
                    <div className="absolute top-4 right-4 text-4xl font-heading font-black text-navy-border/40 select-none">FAM</div>
                    <h4 className="text-2xl font-heading font-bold text-gray-soft mb-4 flex items-center gap-3">
                      Asas Kekeluargaan <span className="w-8 h-px bg-accent"></span>
                    </h4>
                    <p className="text-gray-dark leading-relaxed">
                      Kami berpartner dengan UMKM dan pelaku Pariwisata di Sumatera Barat bukan sekadar vendor, melainkan sebagai keluarga. Memahami visi, melindungi kepentingan, dan bertumbuh bersama secara organik di tanah Minang.
                    </p>
                  </motion.div>

                  <motion.div
                    initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
                    className="p-10 border border-navy-border bg-navy-main/30 backdrop-blur-sm relative group overflow-hidden"
                  >
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/5 rounded-tr-full group-hover:scale-150 transition-transform duration-700"></div>
                    <div className="absolute bottom-4 left-4 text-4xl font-heading font-black text-navy-border/40 select-none">PRO</div>
                    <h4 className="text-2xl font-heading font-bold text-gray-soft mb-4 flex items-center gap-3 justify-end">
                      <span className="w-8 h-px bg-accent"></span> Eksekusi Profesional
                    </h4>
                    <p className="text-gray-dark leading-relaxed text-right">
                      Kehangatan lokal dibalut dengan presisi rekayasa perangkat lunak kelas dunia. Setiap arsitektur sistem, baris kode, dan penyebaran dirancang menggunakan metodologi berstandar industri dengan skala tak terbatas.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          {/* Services Matrix */}
          <section id="services" className="py-32 border-t border-navy-border">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
              <div>
                <h2 className="text-sm font-bold tracking-[0.2em] text-accent uppercase mb-4 flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rotate-45"></div> 02. Capabilities
                </h2>
                <h3 className="text-4xl md:text-5xl font-heading font-bold text-gray-soft uppercase leading-tight max-w-2xl">
                  Strategic Systems Architecture
                </h3>
              </div>
              <div className="flex gap-2">
                <div className="w-12 h-12 border border-navy-border flex items-center justify-center hover:bg-navy-main transition-colors cursor-pointer">
                  <ArrowRight size={20} className="rotate-180" />
                </div>
                <div className="w-12 h-12 border border-navy-light bg-navy-main flex items-center justify-center hover:bg-accent hover:text-navy-deep transition-colors cursor-pointer text-gray-soft">
                  <ArrowRight size={20} />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-0 border border-navy-border">
              <GeometricCard
                icon={<Store size={28} strokeWidth={1.5} />}
                number="P.01"
                title="SME Point of Sales"
                desc="Sistem kasir dan manajemen operasional terintegrasi. Analitik real-time dirancang khusus untuk ritel dan F&B."
              />
              <GeometricCard
                icon={<Globe2 size={28} strokeWidth={1.5} />}
                number="P.02"
                title="Tourism Portals"
                desc="Platform web interaktif berstandar global. Mengangkat nilai destinasi lokal ke mata dunia dengan performa mutlak."
                center
              />
              <GeometricCard
                icon={<Code size={28} strokeWidth={1.5} />}
                number="P.03"
                title="Custom Platforms"
                desc="Rekayasa perangkat lunak spesifik untuk infrastruktur B2B dan alur kerja operasional perusahaan."
              />
            </div>
          </section>

          {/* Call to Action Data-Driven */}
          <section className="py-32 border-y border-navy-border relative overflow-hidden bg-navy-main">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(28,37,65,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(28,37,65,0.4)_1px,transparent_1px)] bg-size-[40px_40px]"></div>
            <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
              <div className="w-16 h-16 border-2 border-accent rotate-45 mx-auto flex items-center justify-center mb-12 bg-navy-deep">
                <RefreshCw size={24} className="text-accent -rotate-45" />
              </div>
              <h2 className="text-4xl lg:text-5xl font-heading font-black text-gray-soft uppercase mb-8">
                Initiate System Architecture
              </h2>
              <p className="text-gray-dark mb-12 text-lg">
                Mari kita diskusikan parameter teknis dan fungsional dari kebutuhan digital UMKM atau perusahaan Anda. Kami siap merancang cetak biru yang presisi.
              </p>
              <div className="inline-block p-1 border border-navy-border bg-navy-deep clip-angular">
                <button className="bg-accent text-navy-deep px-10 py-5 uppercase tracking-widest font-bold text-sm hover:bg-accent-hover transition-colors flex items-center gap-3 clip-angular shadow-[0_0_20px_rgba(255,159,28,0.2)]">
                  Schedule Consultation <ArrowUpRight size={18} />
                </button>
              </div>
            </div>
          </section>

        </div>
      </div>

      {/* Footer Minimal Corporate */}
      <footer className="bg-navy-deep border-t border-navy-light/50 relative z-20">
        <div className="max-w-[1440px] mx-auto px-8 md:px-16 py-20">
          <div className="grid md:grid-cols-12 gap-12 md:gap-8">
            <div className="md:col-span-5">
              <Image
                src="/logo-no-bg.png"
                alt="BKTech Logo"
                width={180}
                height={45}
                className="h-10 object-contain w-auto opacity-70 mb-8 filter grayscale hover:grayscale-0 transition-all duration-500"
              />
              <p className="text-sm text-gray-dark max-w-sm uppercase tracking-wide leading-relaxed">
                INTEGRATING MINANGKABAU CULTURAL HERITAGE WITH DIGITAL ENGINEERING EXCELLENCE.
              </p>
            </div>

            <div className="md:col-span-2 md:col-start-7">
              <h5 className="text-gray-soft font-bold uppercase tracking-widest text-xs mb-6">Directory</h5>
              <ul className="space-y-4 text-sm text-gray-dark">
                <li><Link href="#" className="hover:text-accent transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-accent inline-block"></span> Portfolio</Link></li>
                <li><Link href="#" className="hover:text-accent transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-accent inline-block"></span> Insights</Link></li>
                <li><Link href="#" className="hover:text-accent transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-accent inline-block"></span> Architecture</Link></li>
              </ul>
            </div>

            <div className="md:col-span-4 pl-0 md:pl-8 lg:border-l border-navy-border">
              <h5 className="text-gray-soft font-bold uppercase tracking-widest text-xs mb-6">Headquarters</h5>
              <div className="text-sm text-gray-dark space-y-2 uppercase tracking-wide">
                <p>Jl. Khatib Sulaiman No. 1</p>
                <p>Padang, Sumatera Barat</p>
                <p>Indonesia 25136</p>
                <p className="mt-6 text-accent">INIT@BKTECH.ID</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-navy-border bg-navy-main">
          <div className="max-w-[1440px] mx-auto px-8 md:px-16 py-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-dark tracking-widest uppercase">
            <p>&copy; {new Date().getFullYear()} BKTech Engineering. All Rights Reserved.</p>
            <div className="flex gap-8 mt-4 md:mt-0">
              <Link href="#" className="hover:text-accent">Dribbble</Link>
              <Link href="#" className="hover:text-accent">LinkedIn</Link>
              <Link href="#" className="hover:text-accent">GitHub</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

// Geometric Service Card
function GeometricCard({ icon, title, desc, number, center = false }: { icon: ReactNode, title: string, desc: string, number: string, center?: boolean }) {
  return (
    <motion.div variants={fadeUp} className={`relative p-12 bg-navy-main hover:bg-navy-deep transition-colors duration-500 group ${center ? 'md:border-x border-y md:border-y-0 border-navy-border' : ''}`}>
      <div className="absolute top-0 left-0 w-full h-1 bg-accent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>

      <div className="flex justify-between items-start mb-16">
        <div className="text-accent">
          {icon}
        </div>
        <div className="text-navy-border font-heading font-black text-2xl group-hover:text-navy-light transition-colors">
          {number}
        </div>
      </div>

      <h4 className="font-heading font-bold text-xl text-gray-soft uppercase mb-4 tracking-wide group-hover:text-accent transition-colors">{title}</h4>
      <p className="text-gray-dark text-sm leading-relaxed">{desc}</p>

      <div className="absolute bottom-12 right-12 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
        <ArrowUpRight className="text-accent" />
      </div>
    </motion.div>
  );
}
