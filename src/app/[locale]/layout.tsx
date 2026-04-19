import { Montserrat, Oswald } from 'next/font/google';
import type { Metadata } from 'next';
import ClientLocaleLayout from '@/components/ClientLocaleLayout';
import { JsonLd } from '@/components/JsonLd';
import {
  SITE_URL,
  PAGE_META,
  canonicalUrl,
  buildAlternates,
  type Locale,
} from '@/lib/seo';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
  adjustFontFallback: true,
});

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
  adjustFontFallback: true,
});

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = (params.locale || 'fr') as Locale;
  const meta = PAGE_META.home[locale];
  const canonical = canonicalUrl('', locale);
  const languages = buildAlternates('');

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: meta.title,
      template: '%s | Oz LeIsrael',
    },
    description: meta.description,
    keywords: meta.keywords,
    authors: [{ name: 'Oz LeIsrael', url: SITE_URL }],
    creator: 'Oz LeIsrael',
    publisher: 'Oz LeIsrael',
    formatDetection: { email: false, address: false, telephone: false },
    icons: {
      icon: [{ url: '/cover.ico?v=1', type: 'image/x-icon' }],
      shortcut: ['/cover.ico?v=1'],
    },
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      type: 'website',
      locale: locale === 'fr' ? 'fr_FR' : 'en_US',
      alternateLocale: locale === 'fr' ? 'en_US' : 'fr_FR',
      url: canonical,
      siteName: 'Oz LeIsrael',
      title: meta.title,
      description: meta.description,
      images: [
        {
          url: meta.ogImage || `${SITE_URL}/images/cover.png`,
          width: 1200,
          height: 630,
          alt: 'Oz LeIsrael — Mekhina à Haïfa : Torah et Tsahal',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: [meta.ogImage || `${SITE_URL}/images/cover.png`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
    verification: {
      // Ajouter votre code Google Search Console ici :
      // google: 'VOTRE_CODE_GSC',
    },
  };
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = (params.locale || 'fr') as Locale;

  return (
    <html
      lang={locale}
      className={`${montserrat.variable} ${oswald.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className="font-sans">
        <JsonLd locale={locale} />
        <ClientLocaleLayout locale={locale}>{children}</ClientLocaleLayout>
      </body>
    </html>
  );
}
