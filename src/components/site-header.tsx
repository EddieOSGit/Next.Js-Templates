"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { mainNavItems } from "@/lib/nav";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-2xl inline-block text-brand-700">
              Business
            </span>
          </Link>
          <nav className="hidden md:flex gap-6">
            {mainNavItems?.map(
              (item) => item.href && (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center text-sm font-medium transition-colors hover:text-foreground/80",
                    pathname === item.href
                      ? "text-foreground"
                      : "text-foreground/60"
                  )}
                >
                  {item.title}
                </Link>
              )
            )}
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <Button asChild>
            <Link href="/contact">
              Get Started
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
} 