import type { Metadata } from 'next';
import { SITE_URL, PAGE_META, canonicalUrl, buildAlternates, type Locale } from '@/lib/seo';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = (params.locale || 'fr') as Locale;
  const meta = PAGE_META.gallery[locale];
  const path = '/gallery';
  const canonical = canonicalUrl(path, locale);
  const languages = buildAlternates(path);

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: { canonical, languages },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: canonical,
      images: [{ url: meta.ogImage || `${SITE_URL}/images/cover.png`, width: 1200, height: 630, alt: 'Galerie Mekhina Oz LeIsrael' }],
    },
    twitter: { title: meta.title, description: meta.description, images: [meta.ogImage || `${SITE_URL}/images/cover.png`] },
  };
}

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
