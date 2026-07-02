"use client";

import { motion, AnimatePresence, useDragControls } from "framer-motion";
import { X, Calendar, Tag, Layers, UserCheck, ArrowUpRight } from "lucide-react";
import { useEffect } from "react";

interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  longDescription?: string;
  client?: string;
  date?: string;
  techStack?: string[];
  link?: string;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const dragControls = useDragControls();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      {/* Mobile: bottom sheet */}
      <AnimatePresence>
        {isOpen && project && (
          <div className="md:hidden fixed inset-0 z-[100] flex items-end justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="absolute inset-0 bg-charcoal-900/80 backdrop-blur-md"
            />
            <motion.div
              drag="y"
              dragControls={dragControls}
              dragListener={false}
              dragConstraints={{ top: 0, bottom: 0 }}
              dragElastic={{ top: 0, bottom: 0.5 }}
              onDragEnd={(_, info) => {
                if (info.offset.y > 120 || info.velocity.y > 600) onClose();
              }}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
              className="relative w-full max-h-[92vh] bg-offwhite-200 rounded-t-3xl shadow-2xl overflow-hidden flex flex-col"
            >
              {/* Drag handle */}
              <div
                onPointerDown={(e) => dragControls.start(e)}
                className="pt-3 pb-2 flex justify-center shrink-0 cursor-grab active:cursor-grabbing touch-none"
              >
                <div className="w-10 h-1.5 bg-charcoal-900/20 rounded-full" />
              </div>

              {/* Image hero */}
              <div className="relative h-44 shrink-0 bg-charcoal-800 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover grayscale-[0.2]"
                />
                <div className="absolute inset-0 bg-charcoal-900/10 mix-blend-multiply" />
                <button
                  onClick={onClose}
                  className="absolute top-3 right-3 z-50 p-2 bg-charcoal-900 text-white hover:bg-terracotta transition-colors shadow-lg"
                  aria-label="Tutup"
                >
                  <X size={18} />
                </button>
                <div className="absolute bottom-4 left-4 right-4 p-4 border border-white/20 backdrop-blur-sm bg-black/20 text-white">
                  <span className="text-[9px] uppercase tracking-widest font-bold text-white/60 mb-1 block">Visual Overview</span>
                  <h3 className="text-lg font-semibold tracking-tight uppercase">{project.title}</h3>
                </div>
              </div>

              {/* Scrollable details */}
              <div className="overflow-y-auto overscroll-contain p-6 flex-1 min-h-0">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-px bg-terracotta"></div>
                  <span className="text-terracotta font-semibold uppercase text-[11px] tracking-widest">{project.category}</span>
                </div>

                <h2 className="text-2xl font-light text-charcoal-900 mb-4 tracking-tight">
                  {project.title}
                </h2>

                <p className="text-charcoal-700 leading-relaxed mb-8 text-sm">
                  {project.longDescription || project.description}
                </p>

                {/* Primary CTA: visit the live project */}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener"
                    className="group flex items-center justify-center gap-2 w-full bg-terracotta text-white py-4 mb-8 font-bold text-sm uppercase tracking-widest shadow-lg shadow-terracotta/30 hover:bg-charcoal-900 transition-colors"
                  >
                    Kunjungi Website
                    <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                )}

                {/* Meta Info Grid */}
                <div className="grid grid-cols-2 gap-5 py-6 border-y border-charcoal-900/10 mb-8">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-charcoal-400">
                      <UserCheck size={14} className="text-terracotta" />
                      <span className="text-[10px] uppercase font-bold tracking-widest">Klien</span>
                    </div>
                    <p className="font-semibold text-charcoal-800 text-sm">{project.client || "Undisclosed Client"}</p>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-charcoal-400">
                      <Calendar size={14} className="text-terracotta" />
                      <span className="text-[10px] uppercase font-bold tracking-widest">Tahun</span>
                    </div>
                    <p className="font-semibold text-charcoal-800 text-sm">{project.date || "2024"}</p>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-charcoal-400">
                      <Tag size={14} className="text-terracotta" />
                      <span className="text-[10px] uppercase font-bold tracking-widest">Sektor</span>
                    </div>
                    <p className="font-semibold text-charcoal-800 text-sm">{project.category}</p>
                  </div>
                </div>

                {/* Tech Stack */}
                {project.techStack && (
                  <div className="mb-4">
                    <div className="flex items-center gap-2 text-charcoal-400 mb-3">
                      <Layers size={14} className="text-terracotta" />
                      <span className="text-[10px] uppercase font-bold tracking-widest">Teknologi Terapan</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-charcoal-900 text-white text-[10px] font-bold uppercase tracking-wider"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Desktop: centered side-by-side modal */}
      <AnimatePresence>
        {isOpen && project && (
          <div className="hidden md:flex fixed inset-0 z-[100] items-start justify-center p-8 pt-32 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="absolute inset-0 bg-charcoal-900/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
              className="relative w-full max-w-5xl max-h-[calc(100vh-10rem)] mb-8 bg-offwhite-200 shadow-2xl overflow-hidden flex flex-row songket-border-top"
            >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-50 p-2 bg-charcoal-900 text-white hover:bg-terracotta transition-colors shadow-lg"
                aria-label="Tutup"
              >
                <X size={20} />
              </button>

              {/* Left: Project Image */}
              <div className="w-1/2 h-auto relative bg-charcoal-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover grayscale-[0.2]"
                />
                <div className="absolute inset-0 bg-charcoal-900/10 mix-blend-multiply" />
                <div className="absolute bottom-6 left-6 right-6 p-6 border border-white/20 backdrop-blur-sm bg-black/20 text-white">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-white/60 mb-1 block">Visual Overview</span>
                  <h3 className="text-xl font-semibold tracking-tight uppercase">{project.title}</h3>
                </div>
              </div>

              {/* Right: Project Details */}
              <div className="w-1/2 overflow-y-auto p-12 bg-offwhite-200">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-px bg-terracotta"></div>
                  <span className="text-terracotta font-semibold uppercase text-xs tracking-widest">{project.category}</span>
                </div>

                <h2 className="text-4xl font-light text-charcoal-900 mb-6 tracking-tight">
                  {project.title}
                </h2>

                <p className="text-charcoal-700 leading-relaxed mb-10 text-lg">
                  {project.longDescription || project.description}
                </p>

                {/* Primary CTA: visit the live project */}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener"
                    className="group flex items-center justify-center gap-2 w-full bg-terracotta text-white py-4 mb-10 font-bold text-sm uppercase tracking-widest shadow-lg shadow-terracotta/30 hover:bg-charcoal-900 transition-colors"
                  >
                    Kunjungi Website
                    <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                )}

                {/* Meta Info Grid */}
                <div className="grid grid-cols-2 gap-8 py-8 border-y border-charcoal-900/10 mb-10">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-charcoal-400">
                      <UserCheck size={14} className="text-terracotta" />
                      <span className="text-[10px] uppercase font-bold tracking-widest">Klien</span>
                    </div>
                    <p className="font-semibold text-charcoal-800">{project.client || "Undisclosed Client"}</p>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-charcoal-400">
                      <Calendar size={14} className="text-terracotta" />
                      <span className="text-[10px] uppercase font-bold tracking-widest">Tahun</span>
                    </div>
                    <p className="font-semibold text-charcoal-800">{project.date || "2024"}</p>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-charcoal-400">
                      <Tag size={14} className="text-terracotta" />
                      <span className="text-[10px] uppercase font-bold tracking-widest">Sektor</span>
                    </div>
                    <p className="font-semibold text-charcoal-800">{project.category}</p>
                  </div>
                </div>

                {/* Tech Stack */}
                {project.techStack && (
                  <div>
                    <div className="flex items-center gap-2 text-charcoal-400 mb-4">
                      <Layers size={14} className="text-terracotta" />
                      <span className="text-[10px] uppercase font-bold tracking-widest">Teknologi Terapan</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-charcoal-900 text-white text-[10px] font-bold uppercase tracking-wider"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
