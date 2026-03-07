import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BKTech | Rekayasa Perangkat Lunak Sumatera Barat",
  description: "Menghadirkan solusi digital yang presisi, andal, dan kultural untuk UMKM & pariwisata.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${poppins.variable} font-sans bg-offwhite-200 text-charcoal-900 antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
