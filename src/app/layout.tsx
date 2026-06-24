import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#16181b",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "BKTech | Software House",
    template: "%s | BKTech"
  },
  description: "BKTech — jasa pembuatan website di Sumatera Barat (Padang & Bukittinggi). Solusi digital presisi dan andal untuk UMKM, pariwisata, dan bisnis yang siap tumbuh.",
  authors: [{ name: "BKTech Team" }],
  creator: "BKTech",
  publisher: "BKTech",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://bktech.id",
    title: "BKTech | Software House",
    description: "Jasa pembuatan website di Sumatera Barat — Padang & Bukittinggi. Solusi digital presisi dan andal untuk bisnis Anda.",
    siteName: "BKTech",
    images: [
      {
        url: "/og-images-bktech.png",
        width: 1200,
        height: 630,
        alt: "BKTech - Software House",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BKTech | Software House",
    description: "Jasa pembuatan website di Sumatera Barat — Padang & Bukittinggi. Solusi digital presisi dan andal untuk bisnis Anda.",
    images: ["/og-images-bktech.png"],
  },
  metadataBase: new URL("https://bktech.id"),
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://bktech.id/#organization",
      name: "BKTech",
      url: "https://bktech.id",
      logo: "https://bktech.id/logo-no-bg.png",
      email: "hello@bktech.id",
      description:
        "Jasa pembuatan website di Sumatera Barat — melayani Padang, Bukittinggi, dan sekitarnya. Rekayasa perangkat lunak untuk transformasi digital UMKM hingga industri pariwisata.",
      areaServed: [
        { "@type": "City", name: "Padang" },
        { "@type": "City", name: "Bukittinggi" },
        { "@type": "State", name: "Sumatera Barat" },
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Padang",
        addressRegion: "Sumatera Barat",
        addressCountry: "ID",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://bktech.id/#website",
      url: "https://bktech.id",
      name: "BKTech",
      inLanguage: "id-ID",
      publisher: { "@id": "https://bktech.id/#organization" },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${poppins.variable} font-sans bg-offwhite-200 text-charcoal-900 antialiased overflow-x-hidden`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
