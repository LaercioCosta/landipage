import type { Metadata, Viewport } from 'next';
import { Inter, Manrope } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
  preload: true,
});

const siteUrl = 'https://studio.demo';

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'Studio.',
      url: siteUrl,
      logo: {
        '@type': 'ImageObject',
        '@id': `${siteUrl}/#logo`,
        url: `${siteUrl}/og-image.svg`,
        width: 1200,
        height: 630,
        caption: 'Studio.',
      },
      sameAs: [
        'https://twitter.com/studio',
        'https://linkedin.com/company/studio',
        'https://github.com/studio',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+55-11-99999-9999',
        contactType: 'customer service',
        availableLanguage: ['Portuguese'],
        areaServed: 'BR',
      },
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'BR',
        addressLocality: 'São Paulo',
        addressRegion: 'SP',
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'Studio.',
      publisher: {
        '@id': `${siteUrl}/#organization`,
      },
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${siteUrl}/search?q={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
      },
      inLanguage: 'pt-BR',
    },
    {
      '@type': 'Service',
      '@id': `${siteUrl}/#service`,
      name: 'Criação de Landing Pages Profissionais',
      description: 'Landing Pages modernas, profissionais e personalizadas para médicos, advogados, clínicas, empresas e profissionais que querem transformar sua presença digital.',
      provider: {
        '@id': `${siteUrl}/#organization`,
      },
      serviceType: 'Web Design & Development',
      areaServed: {
        '@type': 'Country',
        name: 'Brasil',
      },
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceUrl: `${siteUrl}/#contato`,
        availableLanguage: {
          '@type': 'Language',
          name: 'Português',
        },
      },
      offers: {
        '@type': 'Offer',
        name: 'Landing Page Personalizada',
        description: 'Design profissional, responsivo, focado em conversão, com SEO e performance otimizados.',
        priceCurrency: 'BRL',
        availability: 'https://schema.org/InStock',
        category: 'Web Development',
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${siteUrl}/#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Início',
          item: siteUrl,
        },
      ],
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Landing Pages Profissionais | Studio.',
    template: '%s | Studio.',
  },
  description:
    'Landing Pages modernas, profissionais e personalizadas para médicos, advogados, clínicas, empresas e profissionais que querem transformar sua presença digital.',
  keywords: [
    'landing page',
    'site profissional',
    'design web',
    'marketing digital',
    'conversão',
    'médicos',
    'advogados',
    'clínicas',
    'empresas',
    'profissionais liberais',
    'web design',
    'desenvolvimento web',
    'SEO',
    'performance web',
  ],
  authors: [{ name: 'Studio.' }],
  creator: 'Studio.',
  publisher: 'Studio.',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
    languages: {
      'pt-BR': '/',
      'pt': '/',
      'x-default': '/',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: '/',
    siteName: 'Studio.',
    title: 'Landing Pages Profissionais | Studio.',
    description:
      'Landing Pages modernas, profissionais e personalizadas para transformar sua presença digital.',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Studio - Landing Pages Profissionais',
        type: 'image/svg+xml',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Landing Pages Profissionais | Studio.',
    description:
      'Landing Pages modernas, profissionais e personalizadas para transformar sua presença digital.',
    images: ['/og-image.svg'],
    creator: '@studio',
    site: '@studio',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
  other: {
    'theme-color': '#ffffff',
    'color-scheme': 'light dark',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#09090b' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" class={`${inter.variable} ${manrope.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="alternate" hrefLang="pt-BR" href={siteUrl} />
        <link rel="alternate" hrefLang="pt" href={siteUrl} />
        <link rel="alternate" hrefLang="x-default" href={siteUrl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-white text-surface-900 antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent-600 focus:text-white focus:rounded-lg focus:font-medium focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2"
        >
          Pular para o conteúdo principal
        </a>
        {children}
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}