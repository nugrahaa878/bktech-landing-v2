import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BlogCard } from "@/components/blog/BlogCard";
import { blogPosts } from "@/data/blog-posts";

const siteUrl = "https://bktech.id";

export const metadata: Metadata = {
  title: "Blog Jasa Pembuatan Website Sumatera Barat",
  description:
    "Artikel dan panduan seputar jasa pembuatan website di Bukittinggi, Padang, Payakumbuh, dan kota-kota lain di Sumatera Barat. Tips digital untuk UMKM dan bisnis lokal.",
  alternates: { canonical: "/blog" },
};

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: blogPosts.map((post, index) => ({
    "@type": "ListItem",
    position: index + 1,
    url: `${siteUrl}/blog/${post.slug}`,
    name: post.title,
  })),
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-offwhite-200 text-charcoal-900 selection:bg-terracotta selection:text-white font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />

      <div className="fixed inset-0 structural-grid opacity-50 z-0 pointer-events-none"></div>

      <Navbar />

      <div className="relative z-10 pt-5 pb-0">
        <section className="py-12 md:py-24 border-b border-charcoal-900/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="border-x border-charcoal-900/10 px-4 md:px-12 py-8 md:py-12">
              <div className="mb-12 md:mb-16 max-w-2xl">
                <span className="uppercase tracking-widest text-terracotta text-[10px] md:text-xs font-semibold mb-3 md:mb-4 block">
                  Blog BKTech
                </span>
                <h1 className="text-2xl md:text-5xl font-light text-charcoal-900 leading-tight">
                  <strong className="font-semibold">Panduan Jasa Pembuatan Website</strong>{" "}
                  <br />
                  untuk Bisnis di Sumatera Barat
                </h1>
                <p className="text-sm md:text-base text-charcoal-600 leading-relaxed mt-4 md:mt-6 max-w-xl">
                  Kumpulan artikel seputar pembuatan website untuk UMKM, pariwisata, dan bisnis
                  lokal di Bukittinggi, Padang, dan kota-kota sekitarnya.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                {blogPosts.map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
