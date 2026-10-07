import { MetadataRoute } from 'next';

const siteUrl = 'https://studio.demo';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes = [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages: {
          'pt-BR': siteUrl,
          'pt': siteUrl,
          'x-default': siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}#solucoes`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}#demonstracoes`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}#processo`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${siteUrl}#faq`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${siteUrl}#contato`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ];

  return routes;
}