import { Metadata } from "next";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import Script from "next/script";
import { getPostBySlug } from "@/lib/mdx";
import { CalendarIcon, User } from "lucide-react";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

interface Post {
  title: string;
  description: string;
  author: string;
  date: string;
  category: string;
  content: {
    content: React.ReactElement;
  };
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  
  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }
  
  return {
    title: post.title,
    description: post.description,
    keywords: [post.category, "business", "insights", "tips", "strategy"],
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      section: post.category,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

function generateBreadcrumbJsonLd(post: Post, slug: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://your-domain.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://your-domain.com/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `https://your-domain.com/blog/${slug}`
      }
    ]
  };
}

function generateArticleJsonLd(post: Post, slug: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.description,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "datePublished": post.date,
    "dateModified": post.date,
    "publisher": {
      "@type": "Organization",
      "name": "Business Template",
      "logo": {
        "@type": "ImageObject",
        "url": "https://your-domain.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://your-domain.com/blog/${slug}`
    },
    "articleSection": post.category,
    "url": `https://your-domain.com/blog/${slug}`
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  
  if (!post) {
    notFound();
  }

  const breadcrumbJsonLd = generateBreadcrumbJsonLd(post, slug);
  const articleJsonLd = generateArticleJsonLd(post, slug);
  
  return (
    <>
      <Script
        id="breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />
      <Script
        id="article-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd),
        }}
      />
      
      <div className="container py-12 md:py-20">
        <article className="prose prose-stone dark:prose-invert mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <h1 className="mb-2 text-4xl font-bold tracking-tight sm:text-5xl">
              {post.title}
            </h1>
            <p className="text-xl text-muted-foreground">{post.description}</p>
            <div className="mt-4 flex items-center justify-center gap-x-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <CalendarIcon className="h-4 w-4" />
                <time dateTime={post.date}>
                  {format(new Date(post.date), "MMMM d, yyyy")}
                </time>
              </div>
              <span>{post.category}</span>
            </div>
          </div>
          
          <div className="mdx">
            {post.content.content}
          </div>
        </article>
      </div>
    </>
  );
} 