import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProjectsGrid } from "@/components/projects/ProjectsGrid";

export const metadata: Metadata = {
  title: "Portofolio",
  description: "Kumpulan proyek BKTech dari berbagai sektor industri — rekayasa perangkat lunak yang presisi dan berdampak.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-offwhite-200 text-charcoal-900 selection:bg-terracotta selection:text-white font-sans">
      <div className="fixed inset-0 structural-grid opacity-50 z-0 pointer-events-none"></div>

      <Navbar />

      <div className="relative z-10 pt-24 pb-0">
        <ProjectsGrid />
      </div>

      <Footer />
    </main>
  );
}
