import { Metadata } from "next";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import { getPostBySlug } from "@/lib/mdx";
import { CalendarIcon, User } from "lucide-react";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }
  
  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug);
  
  if (!post) {
    notFound();
  }
  
  return (
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
  );
} 