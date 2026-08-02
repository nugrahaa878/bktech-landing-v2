export interface BlogListItem {
  type: "list";
  ordered?: boolean;
  items: string[];
}

export interface BlogHeading {
  type: "heading";
  level: 2 | 3;
  text: string;
}

export interface BlogParagraph {
  type: "paragraph";
  text: string;
}

export type BlogBlock = BlogHeading | BlogParagraph | BlogListItem;

export interface BlogFaqItem {
  question: string;
  answer: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  city: string;
  publishedAt: string;
  coverImage: string;
  keywords: string[];
  content: BlogBlock[];
  faq: BlogFaqItem[];
}
