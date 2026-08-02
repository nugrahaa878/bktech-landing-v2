import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BlogPost } from "@/data/blog-types";

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
      <div className="flex h-full flex-col overflow-hidden border border-charcoal-900/10 bg-offwhite-100 transition-all duration-300 hover:border-terracotta hover:shadow-lg">
        <div className="relative aspect-16/10 w-full overflow-hidden bg-charcoal-800">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <span className="absolute left-4 top-4 bg-charcoal-900 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white">
            {post.city}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-terracotta">
            {formatDate(post.publishedAt)}
          </p>
          <h3 className="mb-3 text-lg font-semibold leading-tight text-charcoal-900 transition-colors group-hover:text-terracotta md:text-xl">
            {post.title}
          </h3>
          <p className="mb-6 flex-1 text-sm leading-relaxed text-charcoal-600 line-clamp-3">
            {post.excerpt}
          </p>

          <div className="mt-auto flex items-center gap-2 border-t border-charcoal-900/10 pt-4 text-sm font-semibold text-terracotta">
            <span>Baca selengkapnya</span>
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
