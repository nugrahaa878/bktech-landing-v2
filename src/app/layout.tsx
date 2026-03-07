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
  title: {
    default: "BKTech | Rekayasa Perangkat Lunak Sumatera Barat",
    template: "%s | BKTech"
  },
  description: "Menghadirkan solusi digital yang presisi, andal, dan kultural untuk UMKM & pariwisata Sumatera Barat.",
  keywords: ["Software Engineer Sumatera Barat", "BKTech", "Rekayasa Perangkat Lunak", "Solusi Digital UMKM", "Pariwisata Sumatera Barat", "Bukittinggi Tech"],
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
    url: "https://bktech-id.netlify.app",
    title: "BKTech | Rekayasa Perangkat Lunak Sumatera Barat",
    description: "Solusi digital presisi dan andal untuk UMKM & pariwisata Sumatera Barat.",
    siteName: "BKTech",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BKTech - Rekayasa Perangkat Lunak Sumatera Barat",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BKTech | Rekayasa Perangkat Lunak Sumatera Barat",
    description: "Solusi digital presisi dan andal untuk UMKM & pariwisata Sumatera Barat.",
    images: ["/og-image.png"],
  },
  metadataBase: new URL("https://bktech-id.netlify.app"),
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
