"use client";

import Link from "next/link";
import Image from "next/image";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-offwhite-200/95 backdrop-blur-sm border-b border-charcoal-900/10 transition-all">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 md:h-24 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 relative z-10 group" onClick={() => setIsOpen(false)}>
            <Image
              src="/logo-no-bg.png"
              alt="BKTech Logo"
              width={160}
              height={40}
              className="h-6 md:h-7 object-contain w-auto opacity-90 group-hover:opacity-100 transition-opacity invert"
            />
          </Link>

          <div className="hidden md:flex items-center gap-10 text-sm font-medium text-charcoal-700 tracking-wide uppercase">
            <Link href="#layanan" className="hover:text-terracotta transition-colors">Layanan Kami</Link>
            <Link href="#klien" className="hover:text-terracotta transition-colors">Portofolio</Link>
            <Link href="#tim" className="hover:text-terracotta transition-colors">Tentang Industri</Link>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://wa.me/6281268529556" target="_blank" rel="noopener noreferrer" className="hidden sm:block bg-charcoal-900 text-white px-5 md:px-6 py-2.5 md:py-3 font-semibold text-xs md:text-sm transition-colors hover:bg-terracotta shadow-sm uppercase tracking-widest">
              Konsultasi
            </a>
            <button
              className="md:hidden p-2 text-charcoal-900 hover:text-terracotta transition-colors relative z-50"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop for extra click-to-close and focus */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-charcoal-900/20 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[80%] max-w-sm z-40 bg-offwhite-200 pt-24 px-6 md:hidden flex flex-col shadow-2xl border-l border-charcoal-900/10"
            >
              <div className="flex flex-col gap-6 text-xl font-medium text-charcoal-900 mt-8">
                <Link
                  href="#layanan"
                  className="hover:text-terracotta transition-colors border-b border-charcoal-900/5 pb-4 flex justify-between items-center group"
                  onClick={() => setIsOpen(false)}
                >
                  Layanan Kami
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </Link>
                <Link
                  href="#klien"
                  className="hover:text-terracotta transition-colors border-b border-charcoal-900/5 pb-4 flex justify-between items-center group"
                  onClick={() => setIsOpen(false)}
                >
                  Portofolio
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </Link>
                <Link
                  href="#tim"
                  className="hover:text-terracotta transition-colors border-b border-charcoal-900/5 pb-4 flex justify-between items-center group"
                  onClick={() => setIsOpen(false)}
                >
                  Tentang Industri
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </Link>
              </div>

              <div className="mt-auto mb-10">
                <a href="https://wa.me/6281268529556" target="_blank" rel="noopener noreferrer" className="w-full bg-charcoal-900 text-white py-4 font-bold text-xs uppercase tracking-[0.2em] shadow-lg hover:bg-terracotta transition-colors text-center">
                  Mulai Konsultasi
                </a>
              </div>

              {/* Background Decorative Weave */}
              <div className="absolute bottom-0 left-0 w-full h-32 opacity-5 weave-bg pointer-events-none transform -scale-x-100"></div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
