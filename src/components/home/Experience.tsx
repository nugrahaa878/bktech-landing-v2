"use client";

import Image from "next/image";

const companies = [
  { name: "Tokopedia", sector: "E-Commerce", logo: "/logo/tokopedia.png" },
  { name: "Gojek", sector: "On-Demand", logo: "/logo/gojek.svg" },
  { name: "Ruang Guru", sector: "EdTech", logo: "/logo/ruangguru.svg" },
  { name: "Xendit", sector: "FinTech", logo: "/logo/xendit.svg" },
  { name: "Mekari", sector: "SaaS", logo: "/logo/mekari.jpeg" },
  { name: "Pashouses", sector: "PropTech", logo: "/logo/pashouses.png" },
];

export function Experience() {
  return (
    <section className="py-12 md:py-24 bg-offwhite-200 border-b border-charcoal-900/10 font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="border-x border-charcoal-900/10 px-4 md:px-12 py-8 md:py-12">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-5">
              <span className="uppercase tracking-widest text-terracotta text-[10px] md:text-xs font-semibold mb-3 md:mb-4 block">Dibangun oleh Ahli</span>
              <h2 className="text-2xl md:text-4xl font-light text-charcoal-900 leading-snug md:leading-tight mb-5 md:mb-6">
                <strong className="font-semibold">Pengalaman Startup Global</strong> <br />
                untuk Bisnis Lokal.
              </h2>
              <p className="text-sm md:text-lg text-charcoal-700 leading-relaxed mb-4 lg:mb-0">
                Tim inti kami adalah praktisi teknologi yang telah berpengalaman di berbagai perusahaan unicorn dan startup ternama Indonesia. Kami membawa standar kualitas, kecepatan, dan skalabilitas ke dalam setiap proyek.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-charcoal-900/10 border border-charcoal-900/10">
                {companies.map((company) => (
                  <div
                    key={company.name}
                    className="bg-offwhite-200 p-6 md:p-8 flex flex-col items-center justify-center group hover:bg-white transition-colors duration-300"
                  >
                    <div className="w-12 h-12 md:w-16 md:h-16 mb-4 rounded-full flex items-center justify-center relative overflow-hidden">
                      <Image
                        src={company.logo}
                        alt={`${company.name} logo`}
                        fill
                        className="object-contain p-2"
                        sizes="(max-width: 768px) 48px, 64px"
                      />
                    </div>

                    <span className="text-charcoal-900 font-bold tracking-tighter text-lg md:text-xl group-hover:text-terracotta transition-colors text-center leading-tight">
                      {company.name}
                    </span>
                    <span className="text-[9px] md:text-[10px] text-charcoal-500 uppercase tracking-widest mt-1">
                      {company.sector}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Structural Weave Element */}
      <div className="absolute bottom-0 right-0 w-32 h-32 opacity-5 pointer-events-none weave-bg"></div>
    </section>
  );
}
