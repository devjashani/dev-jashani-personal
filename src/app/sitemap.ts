import { MetadataRoute } from "next";
import { siteContent } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteContent.meta.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0
    }
  ];
}
