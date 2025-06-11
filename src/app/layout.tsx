import type { Metadata } from "next";
import { DefaultSeo } from 'next-seo';
import { inter, playfair } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Analytics } from "@/components/analytics";
import SEO from "../../next-seo.config";
import "./globals.css";

export const metadata: Metadata = {
  title: "Business Template",
  description: "A professional, SEO-optimized Next.js business site template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <DefaultSeo {...SEO} />
      <body className={cn(inter.variable, playfair.variable, "font-sans antialiased")}>
        {children}
        <Analytics plausibleDomain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN} />
      </body>
    </html>
  );
}
