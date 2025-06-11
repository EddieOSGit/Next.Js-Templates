import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import { CompileMDXResult } from "next-mdx-remote/rsc";

export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  author: string;
  authorImage?: string;
  image?: string;
  content: CompileMDXResult<Record<string, unknown>>;
}

const contentDirectory = path.join(process.cwd(), "content");

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const filePath = path.join(contentDirectory, "blog", `${slug}.mdx`);
    
    if (!fs.existsSync(filePath)) {
      return null;
    }
    
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { content, data } = matter(fileContent);
    
    const mdxSource = await compileMDX<Record<string, unknown>>({
      source: content,
      options: { parseFrontmatter: true },
    });
    
    return {
      slug,
      content: mdxSource,
      title: data.title || "",
      description: data.description || "",
      date: data.date ? new Date(data.date).toISOString() : "",
      category: data.category || "",
      author: data.author || "",
      authorImage: data.authorImage || "",
      image: data.image || "",
    };
  } catch (error) {
    console.error(`Error getting post for slug ${slug}:`, error);
    return null;
  }
}

export async function getAllPosts(): Promise<Post[]> {
  try {
    const blogDir = path.join(contentDirectory, "blog");
    
    if (!fs.existsSync(blogDir)) {
      return [];
    }
    
    const files = fs.readdirSync(blogDir).filter(file => file.endsWith(".mdx"));
    
    const posts = await Promise.all(
      files.map(async (file) => {
        const slug = file.replace(/\.mdx$/, "");
        const post = await getPostBySlug(slug);
        return post;
      })
    );
    
    return posts
      .filter((post): post is Post => post !== null)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error("Error getting all posts:", error);
    return [];
  }
} 