import * as React from "react";
import Link from "next/link";
import { footerNavItems } from "@/lib/nav";
import { CenteredContainer } from "@/components/ui/centered-container";

export function SiteFooter() {
  return (
    <footer className="border-t bg-background">
      <CenteredContainer className="flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-2">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Business Inc. All rights reserved.
          </p>
        </div>
        <nav className="flex gap-4 sm:gap-6">
          {footerNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </CenteredContainer>
    </footer>
  );
} 