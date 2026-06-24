"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
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
    description: "Digitalisasi stok dan pencatatan transaksi untuk jaringan ritel lokal",
    longDescription: "Solusi manajemen stok yang dirancang khusus untuk menangani kompleksitas inventori UMKM retail. Sistem ini mengintegrasikan pemindaian barcode, pelacakan stok real-time, dan laporan audit bulanan otomatis yang membantu pemilik usaha memantau kinerja bisnis dari mana saja.",
    client: "Rantai Ritel Minang",
    date: "2024",
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Docker"],
    image: "https://images.unsplash.com/photo-1586769852044-692d6e3703f0?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "University of Indonesia Anesthesia Logbook",
    category: "Medical & Health Care Management",
    description: "Cross-platform solution to assess and monitor residency activities and surgery logs for specialist doctors at FKUI.",
    longDescription: "A cross-platform solution (Mobile app and Website) designed to assess and monitor residency activities and surgery logs for doctors pursuing specialist programs at the Faculty of Medicine, Universitas Indonesia. Features include a dashboard with user profile section, competence level indicator, pending approvals alert, rotation/stase tracking, and reporting modules for Case Reports, Scientific Reports, and Exam Reports.",
    client: "Faculty of Medicine, Universitas Indonesia",
    date: "-",
    techStack: ["ReactJS", "Flutter"],
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "SIBINKAR Polantas Polri",
    category: "Organizational Internal Management",
    description: "Internal web management system tailored for POLANTAS Polri membership management.",
    longDescription: "An internal web management system tailored for POLANTAS Polri membership management. Implements a centralized membership directory, administrative tools for viewing and updating membership status, a dedicated secure Sign-In card layout, and a dynamic placeholder/container optimized to generate and render an organizational membership hierarchy chart.",
    client: "POLANTAS Polri",
    date: "-",
    techStack: ["ReactJS"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Nara Quality Management Software",
    category: "Manufacturing",
    description: "Internal Quality Management System built for PT Smart Mitra Solutions in the manufacturing sector.",
    longDescription: "An Internal Quality Management System built for PT Smart Mitra Solutions in the manufacturing sector. Designed to match a Django-templated monolithic architecture using HTML, CSS, and clean JavaScript. Features include a secure user authentication form, and an intricate internal operations dashboard hub with a navigation sidebar for products, approval configurations, multi-level approval history logs, and interactive operational tables for quality control checksheets.",
    client: "PT Smart Mitra Solutions",
    date: "-",
    techStack: ["Django", "HTML", "CSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "My Integrated Medical Resume",
    category: "Medical & Health Care Management",
    description: "Health monitoring website for Doktoral Fasilkom UI that summarizes medical activities and displays historical records.",
    longDescription: "A health monitoring website designed for Doktoral Fasilkom UI. The dashboard summarizes individual medical activities and displays historical medical records. Includes a clean user login container with integrated Google Sign-In, a personalized health status dashboard displaying key medical vitals, a medication or event scheduler reminder, a main grid navigation menu, and an inline location-based search input to locate nearby health facilities.",
    client: "Doktoral Fasilkom UI",
    date: "-",
    techStack: ["ReactJS"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "KingExpert Education Landing Page",
    category: "Education Services",
    description: "High-converting landing page for exclusive tutoring services for prospective National Science Olympiad participants.",
    longDescription: "A frontend landing page for kingexpert.id using semantic HTML and clean, responsive CSS. The company offers exclusive tutoring services for prospective National Science Olympiad participants. Features include a striking marketing hero section with the headline 'Be an Expert and The King of Knowledge', an informative profile/about section, a structured grid layout for a portfolio or success showcase, a marquee section for client logos, and a high-visibility email-integrated contact CTA button.",
    client: "KingExpert (kingexpert.id)",
    date: "-",
    techStack: ["HTML", "CSS"],
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Fanlee Store",
    category: "Game Marketplace",
    description: "Comprehensive e-commerce platform for selling online game items, vouchers, and currencies.",
    longDescription: "A comprehensive e-commerce platform for selling online game items, vouchers, and currencies built on Laravel. Features a dark-themed gaming aesthetic with a top global search navigation bar and order tracking button, a prominent promotional hero banner carousel featuring game artwork, a product grid categorized for Top Up Games and digital Vouchers with item cards for brands like Garena, Steam, and Spotify, and a secure shopping cart checkout interface.",
    client: "Fanlee (fanlee.id)",
    date: "-",
    techStack: ["Laravel"],
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "RSD Topup",
    category: "Game Marketplace",
    description: "Web-based game marketplace under GCC Play delivering a fast, mobile-responsive secure shopping experience.",
    longDescription: "A web-based game marketplace operating under GCC Play built with Laravel. Delivers a fast, efficient, and mobile-responsive secure shopping experience. Features include a compact global search header, a Popular item grid slider component, an expansive catalog container for game credit top-ups, prominent legal trust badges, and promotional action widgets strategically placed to drive instant checkouts.",
    client: "GCC Play",
    date: "-",
    techStack: ["Laravel"],
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const dragState = useRef({ startX: 0, scrollLeft: 0, isDragging: false, hasDragged: false });

  const scrollByAmount = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;
    const amount = container.clientWidth * 0.8;
    container.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    const container = scrollRef.current;
    if (!container) return;
    dragState.current = {
      startX: e.clientX,
      scrollLeft: container.scrollLeft,
      isDragging: true,
      hasDragged: false,
    };
    container.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    const container = scrollRef.current;
    if (!container || !dragState.current.isDragging) return;
    const dx = e.clientX - dragState.current.startX;
    if (Math.abs(dx) > 5) dragState.current.hasDragged = true;
    container.scrollLeft = dragState.current.scrollLeft - dx;
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    const container = scrollRef.current;
    if (!container) return;
    dragState.current.isDragging = false;
    container.releasePointerCapture(e.pointerId);
  };

  const handleCardClick = (e: React.MouseEvent, project: Project) => {
    if (dragState.current.hasDragged) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
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
            <button className="hidden md:flex items-center gap-2 text-charcoal-700 hover:text-terracotta transition-colors text-sm font-semibold uppercase tracking-wider mb-2">
              Lihat Semua Proyek <ArrowUpRight size={18} />
            </button>
          </div>

          <div className="relative">
            <button
              onClick={() => scrollByAmount("left")}
              className="absolute -left-4 md:-left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-charcoal-900 text-white hover:bg-terracotta transition-colors border border-charcoal-900/10 shadow-lg cursor-pointer"
              aria-label="Scroll left"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              onClick={() => scrollByAmount("right")}
              className="absolute -right-4 md:-right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-charcoal-900 text-white hover:bg-terracotta transition-colors border border-charcoal-900/10 shadow-lg cursor-pointer"
              aria-label="Scroll right"
            >
              <ArrowRight size={20} />
            </button>

            <div
              ref={scrollRef}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerLeave={handlePointerUp}
              className="overflow-x-auto -mx-10 px-10 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] cursor-grab active:cursor-grabbing touch-pan-y select-none"
            >
              <div className="flex gap-10 md:gap-8 w-max">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    transition={{ delay: index * 0.05 }}
                    className="group cursor-pointer w-[200px] md:w-[320px]"
                    onClick={(e) => handleCardClick(e, project)}
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
            <button className="w-full bg-charcoal-900 text-white py-4 font-semibold text-sm uppercase tracking-widest flex items-center justify-center gap-2">
              Lihat Semua Proyek <ArrowUpRight size={16} />
            </button>
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
