"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { ProjectModal } from "@/components/ui/ProjectModal";

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

const projects: Project[] = [
  {
    title: "Sistem Inventori UMKM",
    category: "Software Architecture",
    description: "Digitalisasi stok dan pencatatan transaksi untuk jaringan ritel lokal di Padang.",
    longDescription: "Solusi manajemen stok yang dirancang khusus untuk menangani kompleksitas inventori UMKM retail. Sistem ini mengintegrasikan pemindaian barcode, pelacakan stok real-time, dan laporan audit bulanan otomatis yang membantu pemilik usaha memantau kinerja bisnis dari mana saja.",
    client: "Rantai Ritel Minang",
    date: "2024",
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Docker"],
    image: "https://images.unsplash.com/photo-1586769852044-692d6e3703f0?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Portal Pariwisata Bukittinggi",
    category: "Web Engineering",
    description: "Platform pemesanan dan informasi destinasi wisata dengan standar antarmuka global.",
    longDescription: "Membangun identitas digital untuk pariwisata daerah dengan fokus pada performa dan aksesibilitas internasional. Kami mengimplementasikan sistem optimasi gambar dan CDN global untuk memastikan akses cepat dari berbagai belahan dunia, lengkap dengan sistem manajemen konten (CMS) yang intuitif.",
    client: "Dinas Pariwisata Daerah",
    date: "2023",
    techStack: ["TypeScript", "Next.js", "Prisma", "AWS"],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Aplikasi Logistik Minang",
    category: "Mobile Solutions",
    description: "Infrastruktur pelacakan kiriman barang antar koto berbasis teknologi real-time.",
    longDescription: "Aplikasi mobile yang menghubungkan pengusaha logistik lokal dengan sistem pelacakan armada yang presisi. Menggunakan teknologi WebSockets untuk pembaruan lokasi real-time dan algoritma pencarian rute tercepat untuk mengefisiensi biaya operasional distribusi di medan pegunungan.",
    client: "Logistik Nusantara Padang",
    date: "2024",
    techStack: ["React Native", "Firebase", "Google Maps SDK"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="klien" className="py-12 md:py-24 bg-offwhite-200 border-b border-charcoal-900/10 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <div className="border-x border-charcoal-900/10 px-4 md:px-12 py-8 md:py-12">

          <div className="mb-12 md:mb-16 md:flex justify-between items-end">
            <div className="max-w-2xl">
              <span className="uppercase tracking-widest text-terracotta text-[10px] md:text-xs font-semibold mb-3 md:mb-4 block">Portofolio Terpilih</span>
              <h2 className="text-2xl md:text-5xl font-light text-charcoal-900 leading-tight">
                <strong className="font-semibold">Implementasi Nyata,</strong> <br />
                Hasil yang Terukur.
              </h2>
            </div>
            <button className="hidden md:flex items-center gap-2 text-charcoal-700 hover:text-terracotta transition-colors text-sm font-semibold uppercase tracking-wider mb-2">
              Lihat Semua Proyek <ArrowUpRight size={18} />
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative aspect-4/5 bg-charcoal-800 mb-5 md:mb-6 overflow-hidden songket-border-top songket-border-left">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-charcoal-900/40 group-hover:bg-transparent transition-colors duration-500"></div>

                  {/* Category Tag */}
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
                    <p className="text-xs md:text-sm text-charcoal-600 leading-relaxed max-w-[240px]">
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

          {/* Mobile Only Button */}
          <div className="mt-12 md:hidden">
            <button className="w-full bg-charcoal-900 text-white py-4 font-semibold text-sm uppercase tracking-widest flex items-center justify-center gap-2">
              Semua Proyek <ArrowUpRight size={16} />
            </button>
          </div>
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
