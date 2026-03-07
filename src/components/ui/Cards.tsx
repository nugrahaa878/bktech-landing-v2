"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
};

export function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="py-4 md:py-12 px-2 md:px-6 flex flex-col justify-center text-center group font-sans">
      <span className="font-light text-2xl md:text-6xl text-white mb-1 md:mb-4 group-hover:text-terracotta transition-colors">{value}</span>
      <span className="text-[8px] md:text-xs font-semibold text-offwhite-400 uppercase tracking-widest">{label}</span>
    </div>
  );
}

export function StructuralCard({ icon, title, desc }: { icon: ReactNode; title: string; desc: string }) {
  return (
    <motion.div variants={fadeUp} className="bg-white p-6 md:p-10 border border-charcoal-900/5 hover:border-charcoal-900/20 group transition-all duration-300 relative z-10 hover:-translate-y-1 shadow-sm hover:shadow-lg font-sans">
      <div className="absolute top-0 left-0 w-1 h-0 bg-terracotta group-hover:h-full transition-all duration-500 ease-out"></div>
      <div className="text-charcoal-900 mb-6 md:mb-8 opacity-80 group-hover:opacity-100 group-hover:text-terracotta transition-colors duration-300">
        {icon}
      </div>
      <h3 className="font-semibold text-lg md:text-xl text-charcoal-900 mb-3 md:mb-4">{title}</h3>
      <p className="text-xs md:text-sm text-charcoal-600 leading-relaxed">{desc}</p>
    </motion.div>
  );
}
