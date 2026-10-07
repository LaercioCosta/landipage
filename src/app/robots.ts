import { MetadataRoute } from 'next';

const siteUrl = 'https://studio.demo';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/privacidade', '/termos', '/cookies', '/api/'],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}