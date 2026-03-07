"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Globe, Tag, Layers } from "lucide-react";
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
  // Prevent scrolling when modal is open
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

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-charcoal-900/80 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
            className="relative w-full max-w-5xl max-h-[90vh] bg-offwhite-200 shadow-2xl overflow-hidden flex flex-col md:flex-row songket-border-top"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-50 p-2 bg-charcoal-900 text-white hover:bg-terracotta transition-colors shadow-lg"
            >
              <X size={20} />
            </button>

            {/* Left: Project Image */}
            <div className="w-full md:w-1/2 h-64 md:h-auto relative bg-charcoal-800">
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover grayscale-[0.2]"
              />
              <div className="absolute inset-0 bg-charcoal-900/10 mix-blend-multiply" />

              {/* Image Border Detail */}
              <div className="absolute bottom-6 left-6 right-6 p-6 border border-white/20 backdrop-blur-sm bg-black/20 text-white">
                <span className="text-[10px] uppercase tracking-widest font-bold text-white/60 mb-1 block">Visual Overview</span>
                <h3 className="text-xl font-semibold tracking-tight uppercase">{project.title}</h3>
              </div>
            </div>

            {/* Right: Project Details */}
            <div className="w-full md:w-1/2 overflow-y-auto p-8 md:p-12 bg-offwhite-200">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-px bg-terracotta"></div>
                <span className="text-terracotta font-semibold uppercase text-xs tracking-widest">{project.category}</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-light text-charcoal-900 mb-6 tracking-tight">
                {project.title}
              </h2>

              <p className="text-charcoal-700 leading-relaxed mb-10 text-lg">
                {project.longDescription || project.description}
              </p>

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
                {project.link && (
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-charcoal-400">
                      <Globe size={14} className="text-terracotta" />
                      <span className="text-[10px] uppercase font-bold tracking-widest">Situs</span>
                    </div>
                    <a href={project.link} target="_blank" rel="noopener" className="font-semibold text-terracotta hover:underline">Kunjungi Proyek</a>
                  </div>
                )}
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
  );
}

// Re-importing missing icons locally for this component to ensure it works
import { UserCheck } from "lucide-react";
