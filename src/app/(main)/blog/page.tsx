import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarIcon } from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Blog",
    description: "Latest insights, trends, and tips for your business growth. Discover strategies, workplace trends, marketing tips, and technology insights.",
    keywords: ["business blog", "business insights", "marketing tips", "workplace trends", "business strategy", "technology"],
    openGraph: {
      title: "Our Blog - Business Insights & Strategies",
      description: "Latest insights, trends, and tips for your business growth.",
      type: "website",
    },
  };
}

// Placeholder blog data
const blogPosts = [
  {
    id: "example",
    title: "10 Ways to Improve Your Business Efficiency",
    description: "Learn how to streamline your operations and boost productivity.",
    date: "May 15, 2023",
    readTime: "5 min read",
    category: "Business Strategy",
  },
  {
    id: "post-2",
    title: "The Future of Remote Work in 2023",
    description: "Discover the latest trends shaping remote work environments.",
    date: "June 2, 2023",
    readTime: "8 min read",
    category: "Workplace",
  },
  {
    id: "post-3",
    title: "Essential Digital Marketing Strategies for Small Businesses",
    description: "Effective marketing approaches for businesses with limited budgets.",
    date: "July 10, 2023",
    readTime: "6 min read",
    category: "Marketing",
  },
  {
    id: "post-4",
    title: "How to Build a Resilient Supply Chain",
    description: "Key factors to consider when designing your supply chain strategy.",
    date: "August 5, 2023",
    readTime: "7 min read",
    category: "Operations",
  },
  {
    id: "post-5",
    title: "Customer Experience Trends That Will Define 2023",
    description: "Stay ahead by implementing these customer-centric approaches.",
    date: "September 12, 2023",
    readTime: "4 min read",
    category: "Customer Service",
  },
  {
    id: "post-6",
    title: "AI Tools That Can Transform Your Business Today",
    description: "Practical applications of AI for businesses of all sizes.",
    date: "October 20, 2023",
    readTime: "9 min read",
    category: "Technology",
  },
];

export default function BlogPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Our Blog</h1>
          <p className="text-xl text-muted-foreground">
            Insights, strategies, and news to help your business thrive.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`} className="group">
              <Card className="h-full overflow-hidden transition-all duration-200 hover:shadow-md">
                <CardHeader className="p-4">
                  <CardTitle className="line-clamp-2 group-hover:text-brand-600">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="flex items-center gap-2 text-sm">
                    <CalendarIcon className="h-4 w-4" />
                    <span>{post.date} • {post.readTime}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="line-clamp-2 text-muted-foreground">
                    {post.description}
                  </p>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <span className="text-sm text-muted-foreground">{post.category}</span>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 