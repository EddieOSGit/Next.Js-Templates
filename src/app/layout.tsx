import type { Metadata } from "next";
import { inter, playfair } from "@/lib/fonts";
import { cn } from "@/lib/utils";
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
      <body className={cn(inter.variable, playfair.variable, "font-sans antialiased")}>
        {children}
      </body>
    </html>
  );
}
