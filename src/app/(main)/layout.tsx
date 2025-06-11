import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Providers } from "@/components/providers";
import { Toaster } from "@/components/ui/toaster";
import { inter, playfair } from "@/lib/fonts";
import { cn } from "@/lib/utils";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <Providers>
      <div
        className={cn(
          "relative min-h-screen flex flex-col",
          inter.variable,
          playfair.variable,
          "font-sans"
        )}
      >
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <Toaster />
      </div>
    </Providers>
  );
} 