import type { MetadataRoute } from "next";

const BASE = "https://identione.com";

// User-facing URLs (SV privacy is served under the localized /integritet slug).
const paths = ["/en", "/sv", "/en/privacy", "/sv/integritet"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return paths.map((path) => ({
    url: `${BASE}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: path === "/en" || path === "/sv" ? 1 : 0.5,
  }));
}
