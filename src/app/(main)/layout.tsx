import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Providers } from "@/components/providers";
import { Toaster } from "@/components/ui/toaster";
import { CenteredContainer } from "@/components/ui/centered-container";
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
        <main className="flex-1">
          <CenteredContainer>
            {children}
          </CenteredContainer>
        </main>
        <SiteFooter />
        <Toaster />
      </div>
    </Providers>
  );
} 