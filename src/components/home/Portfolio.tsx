"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { ProjectModal } from "@/components/ui/ProjectModal";
import { projects, type Project } from "@/data/projects";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const dragState = useRef({ startX: 0, startY: 0, hasDragged: false });

  const scrollByAmount = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;
    const amount = container.clientWidth * 0.8;
    container.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  };

  // Track touch movement so a swipe-to-scroll doesn't count as a tap.
  const handlePointerDown = (e: React.PointerEvent) => {
    if (e.pointerType === "mouse") return;
    dragState.current = { startX: e.clientX, startY: e.clientY, hasDragged: false };
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (e.pointerType === "mouse") return;
    const dx = e.clientX - dragState.current.startX;
    const dy = e.clientY - dragState.current.startY;
    if (Math.abs(dx) > 5 || Math.abs(dy) > 5) dragState.current.hasDragged = true;
  };

  // Touch: pointerup fires on the card; open only if it was a clean tap.
  const handleCardTap = (e: React.PointerEvent, project: Project) => {
    if (e.pointerType === "mouse") return;
    if (dragState.current.hasDragged) return;
    setSelectedProject(project);
  };

  // Desktop: native click opens the modal (no drag-scroll to guard against).
  const handleCardClick = (project: Project) => {
    setSelectedProject(project);
  };

  return (
    <section id="klien" className="py-12 md:py-24 bg-offwhite-200 border-b border-charcoal-900/10 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <div className="border-x border-charcoal-900/10 px-4 md:px-12 py-8 md:py-12">

          <div className="mb-12 md:mb-16 md:flex justify-between items-end">
            <div className="max-w-2xl">
              <span className="uppercase tracking-widest text-terracotta text-[10px] md:text-xs font-semibold mb-3 md:mb-4 block">Karya Terbaik Kami</span>
              <h2 className="text-2xl md:text-5xl font-light text-charcoal-900 leading-tight">
                <strong className="font-semibold">Portofolio Kami,</strong> <br />
                Dari berbagai sektor
              </h2>
            </div>
            <Link href="/projects" className="hidden md:flex items-center gap-2 text-charcoal-700 hover:text-terracotta transition-colors text-sm font-semibold uppercase tracking-wider mb-2">
              Lihat Semua Proyek <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="relative">
            <button
              onClick={() => scrollByAmount("left")}
              className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 items-center justify-center bg-charcoal-900 text-white hover:bg-terracotta transition-colors border border-charcoal-900/10 shadow-lg cursor-pointer"
              aria-label="Scroll left"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              onClick={() => scrollByAmount("right")}
              className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 items-center justify-center bg-charcoal-900 text-white hover:bg-terracotta transition-colors border border-charcoal-900/10 shadow-lg cursor-pointer"
              aria-label="Scroll right"
            >
              <ArrowRight size={20} />
            </button>

            <div
              ref={scrollRef}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              className="overflow-x-auto overflow-y-hidden -mx-6 px-6 md:-mx-10 md:px-10 scroll-smooth snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
              <div className="flex gap-6 md:gap-8 w-max">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    transition={{ delay: index * 0.05 }}
                    className="group cursor-pointer w-[220px] md:w-[320px] snap-start shrink-0"
                    onPointerUp={(e) => handleCardTap(e, project)}
                    onClick={() => handleCardClick(project)}
                  >
                    <div className="relative aspect-4/5 bg-charcoal-800 mb-5 md:mb-6 overflow-hidden songket-border-top songket-border-left">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="320px"
                        className="object-cover group-hover:scale-105 transition-all duration-700 ease-out"
                      />
                      {/* Category Tag */}
                      <div className="absolute top-4 md:top-6 left-4 md:left-6 z-10">
                        <span className="bg-offwhite-200/90 backdrop-blur-sm text-charcoal-900 px-2 md:px-3 py-1 text-[9px] md:text-[10px] font-bold uppercase tracking-widest border border-charcoal-900/10">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    <div className="flex justify-between items-start group">
                      <div>
                        <h3 className="text-base md:text-xl font-semibold text-charcoal-900 mb-1 md:mb-2 group-hover:text-terracotta transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-[11px] md:text-sm text-charcoal-600 leading-relaxed max-w-[200px] md:max-w-[240px]">
                          {project.description}
                        </p>
                      </div>
                      <div className="p-2 border border-charcoal-900/10 group-hover:bg-terracotta group-hover:text-white transition-all duration-300">
                        <ArrowUpRight size={18} />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Only Button */}
          <div className="mt-12 md:hidden">
            <Link href="/projects" className="w-full bg-charcoal-900 text-white py-4 font-semibold text-sm uppercase tracking-widest flex items-center justify-center gap-2">
              Lihat Semua Proyek <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section >
  );
}
