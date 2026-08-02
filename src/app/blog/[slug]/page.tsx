import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { blogPosts, blogContactLink, getBlogPostBySlug } from "@/data/blog-posts";
import { BlogBlock } from "@/data/blog-types";

const siteUrl = "https://bktech.id";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return { title: "Artikel Tidak Ditemukan" };
  }

  const postUrl = `${siteUrl}/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      url: postUrl,
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.coverImage, width: 1200, height: 630, alt: post.title }],
      publishedTime: post.publishedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function renderBlock(block: BlogBlock, index: number) {
  if (block.type === "heading") {
    const className =
      block.level === 2
        ? "text-2xl md:text-3xl font-semibold text-charcoal-900 mt-10 mb-4"
        : "text-xl md:text-2xl font-semibold text-charcoal-900 mt-8 mb-3";
    return block.level === 2 ? (
      <h2 key={index} className={className}>
        {block.text}
      </h2>
    ) : (
      <h3 key={index} className={className}>
        {block.text}
      </h3>
    );
  }

  if (block.type === "list") {
    const ListTag = block.ordered ? "ol" : "ul";
    return (
      <ListTag
        key={index}
        className={`${block.ordered ? "list-decimal" : "list-disc"} pl-6 space-y-2 mb-6 text-charcoal-700 text-sm md:text-base leading-relaxed`}
      >
        {block.items.map((item, itemIndex) => (
          <li key={itemIndex}>{item}</li>
        ))}
      </ListTag>
    );
  }

  return (
    <p key={index} className="text-charcoal-700 text-sm md:text-base leading-relaxed mb-6">
      {block.text}
    </p>
  );
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const postUrl = `${siteUrl}/blog/${post.slug}`;
  const coverImageUrl = `${siteUrl}${post.coverImage}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    image: [coverImageUrl],
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: [{ "@type": "Organization", name: "BKTech", url: siteUrl }],
    publisher: {
      "@type": "Organization",
      name: "BKTech",
      logo: { "@type": "ImageObject", url: `${siteUrl}/logo-no-bg.png` },
    },
    description: post.excerpt,
    mainEntityOfPage: { "@type": "WebPage", "@id": postUrl },
    keywords: post.keywords.join(", "),
  };

  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <main className="min-h-screen bg-offwhite-200 text-charcoal-900 selection:bg-terracotta selection:text-white font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="fixed inset-0 structural-grid opacity-50 z-0 pointer-events-none"></div>

      <Navbar />

      <div className="relative z-10 pt-24 pb-0">
        <article className="max-w-4xl mx-auto px-6 py-8 md:py-16">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-terracotta hover:text-terracotta-hover font-semibold text-sm mb-8 transition-colors"
          >
            <ArrowLeft size={16} />
            Kembali ke blog
          </Link>

          <div className="relative w-full aspect-video mb-8 overflow-hidden songket-border-top songket-border-left bg-charcoal-800">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover"
            />
          </div>

          <header className="mb-8 pb-6 border-b border-charcoal-900/10">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-terracotta bg-terracotta/10 px-3 py-1">
                {post.city}
              </span>
              <span className="text-xs text-charcoal-600">{formatDate(post.publishedAt)}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-charcoal-900 leading-tight">
              {post.title}
            </h1>
          </header>

          <div className="prose max-w-none">
            {post.content.map((block, index) => renderBlock(block, index))}
          </div>

          <div className="mt-12 border border-charcoal-900/10 bg-charcoal-900 text-white p-8 md:p-10">
            <h3 className="text-xl md:text-2xl font-semibold mb-3">
              Siap membangun website untuk bisnis Anda?
            </h3>
            <p className="text-sm md:text-base text-offwhite-400 leading-relaxed mb-6 max-w-xl">
              Konsultasikan kebutuhan website Anda bersama tim BKTech — gratis dan tanpa
              komitmen.
            </p>
            <a
              href={blogContactLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-terracotta hover:bg-terracotta-hover text-white px-6 py-3 font-semibold text-sm transition-colors uppercase tracking-widest"
            >
              Konsultasi via WhatsApp
              <ArrowUpRight size={16} />
            </a>
          </div>
        </article>

        {otherPosts.length > 0 && (
          <section className="border-t border-charcoal-900/10 py-12 md:py-20">
            <div className="max-w-7xl mx-auto px-6">
              <div className="border-x border-charcoal-900/10 px-4 md:px-12 py-8 md:py-12">
                <h2 className="text-xl md:text-2xl font-semibold text-charcoal-900 mb-8">
                  Artikel Lainnya
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {otherPosts.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/blog/${p.slug}`}
                      className="group block border border-charcoal-900/10 hover:border-terracotta transition-colors p-6"
                    >
                      <p className="text-xs font-semibold uppercase tracking-widest text-terracotta mb-2">
                        {p.city}
                      </p>
                      <h3 className="text-base font-semibold text-charcoal-900 group-hover:text-terracotta transition-colors leading-snug">
                        {p.title}
                      </h3>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
      </div>

      <Footer />
    </main>
  );
}
