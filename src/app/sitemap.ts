// app/sitemap.ts
import { MetadataRoute } from 'next'

// Add this line to make it compatible with static export
export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://ghadirli.github.io',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ]
}