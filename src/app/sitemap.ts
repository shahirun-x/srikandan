import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    { path: "/", priority: 1, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.8, changeFrequency: "yearly" as const },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/industries", priority: 0.8, changeFrequency: "yearly" as const },
    { path: "/contact", priority: 0.7, changeFrequency: "yearly" as const },
  ];

  return routes.map((r) => ({
    url: `${SITE_URL}${r.path === "/" ? "" : r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
