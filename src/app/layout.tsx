import type { Metadata } from "next";
import { inter, playfair } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Analytics } from "@/components/analytics";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: '%s | Business Template',
    default: 'Business Template - Professional Services & Solutions',
  },
  description: "Professional business template built with Next.js, TypeScript, and Tailwind CSS. Perfect for agencies, consultants, and service providers.",
  keywords: ["business template", "next.js", "typescript", "tailwind css", "professional services"],
  authors: [{ name: "Business Template" }],
  creator: "Business Template",
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
    siteName: 'Business Template',
    title: 'Business Template - Professional Services & Solutions',
    description: 'Professional business template built with Next.js, TypeScript, and Tailwind CSS. Perfect for agencies, consultants, and service providers.',
    images: [
      {
        url: 'https://your-domain.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Business Template',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Business Template - Professional Services & Solutions',
    description: 'Professional business template built with Next.js, TypeScript, and Tailwind CSS.',
    creator: '@yourbusiness',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.variable, playfair.variable, "font-sans antialiased")}>
        {children}
        <Analytics plausibleDomain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN} />
      </body>
    </html>
  );
}
