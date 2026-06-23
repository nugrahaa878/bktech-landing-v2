"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
};

const staggerFade: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export function Hero() {
  return (
    <section className="px-4 md:px-12 grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
      <motion.div
        initial="hidden" animate="visible" variants={staggerFade}
        className="max-w-2xl py-8 md:py-12"
      >
        <motion.div variants={fadeUp} className="flex items-center gap-4 mb-6 md:mb-8">
          <div className="h-px w-8 bg-terracotta"></div>
          <span className="uppercase tracking-widest text-terracotta text-[10px] md:text-xs font-semibold">
            West Sumatra Digital Foundry
          </span>
        </motion.div>

        <motion.h1 variants={fadeUp} className="text-3xl md:text-5xl lg:text-6xl font-light leading-[1.2] md:leading-[1.15] mb-6 md:mb-8 text-charcoal-900 tracking-tight">
          <strong className="font-semibold text-charcoal-900">Dibangun dengan Presisi.</strong> <br />
          Solusi Digital untuk Bisnis yang Terus Berkembang.
        </motion.h1>

        <motion.p variants={fadeUp} className="text-base md:text-lg text-charcoal-700 leading-relaxed mb-8 md:mb-12 max-w-lg">
          Kami memadukan standar rekayasa kelas dunia dengan pemahaman mendalam terhadap UMKM dan pariwisata Sumatera Barat — menghasilkan produk digital yang kokoh, efisien, dan siap berkembang bersama bisnis Anda.
        </motion.p>

        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 md:gap-5">
          <button className="bg-terracotta hover:bg-terracotta-hover text-white px-7 md:px-8 py-3.5 md:py-4 font-medium text-xs md:text-sm transition-all flex items-center justify-center gap-3 font-sans">
            Jelajahi Layanan
            <ArrowRight size={16} />
          </button>
          <button className="bg-transparent border border-charcoal-900/20 text-charcoal-900 hover:border-charcoal-900 px-7 md:px-8 py-3.5 md:py-4 font-medium text-xs md:text-sm transition-all flex items-center justify-center font-sans">
            Lihat Karya Kami
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative h-[350px] md:h-[500px] lg:h-[600px] w-full"
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
  );
}
