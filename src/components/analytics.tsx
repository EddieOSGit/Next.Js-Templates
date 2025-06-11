"use client";

import { Analytics as VercelAnalytics } from '@vercel/analytics/react';
import Script from 'next/script';

interface AnalyticsProps {
  plausibleDomain?: string;
}

export function Analytics({ plausibleDomain }: AnalyticsProps) {
  return (
    <>
      {/* Vercel Analytics */}
      <VercelAnalytics />
      
      {/* Plausible Analytics */}
      {plausibleDomain && (
        <Script
          defer
          data-domain={plausibleDomain}
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
        />
      )}
    </>
  );
} 