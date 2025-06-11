import { DefaultSeoProps } from 'next-seo';

const config: DefaultSeoProps = {
  titleTemplate: '%s | Business Template',
  defaultTitle: 'Business Template - Professional Services & Solutions',
  description: 'Professional business template built with Next.js, TypeScript, and Tailwind CSS. Perfect for agencies, consultants, and service providers.',
  canonical: 'https://your-domain.com',
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
    handle: '@yourbusiness',
    site: '@yourbusiness',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'theme-color',
      content: '#000000',
    },
    {
      httpEquiv: 'x-ua-compatible',
      content: 'IE=edge',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      sizes: '180x180',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
  ],
};

export default config; 