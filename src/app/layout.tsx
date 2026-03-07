import type { Metadata } from "next";
import { Bricolage_Grotesque, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const headingFont = Bricolage_Grotesque({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const bodyFont = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kita Tech | Software House untuk UMKM Sumatera Barat",
  description: "Dukungan Lokal untuk Kualitas Global. Kami membantu UMKM dan Pariwisata Sumatera Barat Go Digital dengan solusi yang profesional, aman, dan inovatif.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${bodyFont.variable} ${headingFont.variable} font-body bg-white text-slate-900 antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
