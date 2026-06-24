"use client";

import { motion, Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { ProjectModal } from "@/components/ui/ProjectModal";
import { projects, type Project } from "@/data/projects";

const staggerFade: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function ProjectsGrid() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="py-12 md:py-24 bg-offwhite-200 border-b border-charcoal-900/10 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <div className="border-x border-charcoal-900/10 px-4 md:px-12 py-8 md:py-12">

          <div className="mb-12 md:mb-16">
            <div className="max-w-2xl">
              <span className="uppercase tracking-widest text-terracotta text-[10px] md:text-xs font-semibold mb-3 md:mb-4 block">Karya Terbaik Kami</span>
              <h2 className="text-2xl md:text-5xl font-light text-charcoal-900 leading-tight">
                <strong className="font-semibold">Portofolio Kami,</strong> <br />
                Dari berbagai sektor
              </h2>
              <p className="text-sm md:text-base text-charcoal-600 leading-relaxed mt-4 md:mt-6 max-w-xl">
                Kumpulan proyek yang membuktikan komitmen kami terhadap rekayasa perangkat lunak yang presisi, andal, dan berdampak lintas industri.
              </p>
            </div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerFade}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
          >
            {projects.map((project) => (
              <motion.div
                key={project.title}
                variants={fadeUp}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative aspect-4/5 bg-charcoal-800 mb-5 md:mb-6 overflow-hidden songket-border-top songket-border-left">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  <div className="absolute top-4 md:top-6 left-4 md:left-6 z-10">
                    <span className="bg-offwhite-200/90 backdrop-blur-sm text-charcoal-900 px-2 md:px-3 py-1 text-[9px] md:text-[10px] font-bold uppercase tracking-widest border border-charcoal-900/10">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-start group">
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-charcoal-900 mb-1 md:mb-2 group-hover:text-terracotta transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs md:text-sm text-charcoal-600 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div className="p-2 border border-charcoal-900/10 group-hover:bg-terracotta group-hover:text-white transition-all duration-300 shrink-0">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
