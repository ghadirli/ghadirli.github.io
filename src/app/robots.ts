// app/robots.ts
import { MetadataRoute } from 'next'

// Add this line to make it compatible with static export
export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://ghadirli.github.io/sitemap.xml',
  }
}