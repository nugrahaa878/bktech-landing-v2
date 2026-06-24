export interface Project {
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

export const projects: Project[] = [
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
    date: "2024",
    techStack: ["ReactJS", "Flutter"],
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Nara Quality Management Software",
    category: "Manufacturing",
    description: "Internal Quality Management System built for PT Smart Mitra Solutions in the manufacturing sector.",
    longDescription: "An Internal Quality Management System built for PT Smart Mitra Solutions in the manufacturing sector. Designed to match a Django-templated monolithic architecture using HTML, CSS, and clean JavaScript. Features include a secure user authentication form, and an intricate internal operations dashboard hub with a navigation sidebar for products, approval configurations, multi-level approval history logs, and interactive operational tables for quality control checksheets.",
    client: "PT Smart Mitra Solutions",
    date: "2024-2025",
    techStack: ["Django", "HTML", "CSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "My Integrated Medical Resume",
    category: "Medical & Health Care Management",
    description: "Health monitoring website for Doktoral Fasilkom UI that summarizes medical activities and displays historical records.",
    longDescription: "A health monitoring website designed for Doktoral Fasilkom UI. The dashboard summarizes individual medical activities and displays historical medical records. Includes a clean user login container with integrated Google Sign-In, a personalized health status dashboard displaying key medical vitals, a medication or event scheduler reminder, a main grid navigation menu, and an inline location-based search input to locate nearby health facilities.",
    client: "Doktoral Fasilkom UI",
    date: "2024",
    techStack: ["ReactJS"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "KingExpert Education Landing Page",
    category: "Education Services",
    description: "High-converting landing page for exclusive tutoring services for prospective National Science Olympiad participants.",
    longDescription: "A frontend landing page for kingexpert.id using semantic HTML and clean, responsive CSS. The company offers exclusive tutoring services for prospective National Science Olympiad participants. Features include a striking marketing hero section with the headline 'Be an Expert and The King of Knowledge', an informative profile/about section, a structured grid layout for a portfolio or success showcase, a marquee section for client logos, and a high-visibility email-integrated contact CTA button.",
    client: "KingExpert (kingexpert.id)",
    date: "2025",
    techStack: ["HTML", "CSS"],
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Fanlee Store",
    category: "Game Marketplace",
    description: "Comprehensive e-commerce platform for selling online game items, vouchers, and currencies.",
    longDescription: "A comprehensive e-commerce platform for selling online game items, vouchers, and currencies built on Laravel. Features a dark-themed gaming aesthetic with a top global search navigation bar and order tracking button, a prominent promotional hero banner carousel featuring game artwork, a product grid categorized for Top Up Games and digital Vouchers with item cards for brands like Garena, Steam, and Spotify, and a secure shopping cart checkout interface.",
    client: "Fanlee (fanlee.id)",
    date: "2025",
    techStack: ["Laravel"],
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "RSD Topup",
    category: "Game Marketplace",
    description: "Web-based game marketplace under GCC Play delivering a fast, mobile-responsive secure shopping experience.",
    longDescription: "A web-based game marketplace operating under GCC Play built with Laravel. Delivers a fast, efficient, and mobile-responsive secure shopping experience. Features include a compact global search header, a Popular item grid slider component, an expansive catalog container for game credit top-ups, prominent legal trust badges, and promotional action widgets strategically placed to drive instant checkouts.",
    client: "GCC Play",
    date: "2025",
    techStack: ["Laravel"],
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop",
  },
];
