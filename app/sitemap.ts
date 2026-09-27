import type { MetadataRoute } from "next";
import { siteUrl, sitePages } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return sitePages.map((path) => ({
    url: new URL(path, siteUrl).toString(),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
