export interface NavItem {
  title: string;
  href: string;
  description?: string;
  external?: boolean;
  icon?: string;
}

export const mainNavItems: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Services",
    href: "/services",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export const footerNavItems: NavItem[] = [
  {
    title: "Privacy",
    href: "/privacy",
  },
  {
    title: "Terms",
    href: "/terms",
  },
  {
    title: "Contact",
    href: "/contact",
  },
]; 