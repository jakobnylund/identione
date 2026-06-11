import type { NextConfig } from "next";

// Localized slug rewrites: the user-facing URL uses the SV slug, Next.js
// renders the canonical EN-named page underneath. Keep these in sync with
// src/lib/i18n/routes.ts whenever a new page is added.
const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: "/sv/kontakt", destination: "/sv/contact" },
      { source: "/sv/kontakt/:path*", destination: "/sv/contact/:path*" },
      { source: "/sv/integritet", destination: "/sv/privacy" },
      { source: "/sv/integritet/:path*", destination: "/sv/privacy/:path*" },
    ];
  },
};

export default nextConfig;
