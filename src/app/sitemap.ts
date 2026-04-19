import { MetadataRoute } from 'next';
import { SITE_URL, LOCALES } from '@/lib/seo';

const changeFreq = (
  path: string
): 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' => {
  if (path === '' || path === '/program') return 'weekly';
  if (path === '/contact') return 'monthly';
  if (path === '/privacy' || path === '/terms') return 'yearly';
  if (path.startsWith('/blog/')) return 'monthly';
  if (path === '/blog') return 'weekly';
  if (['/mekhina-armee', '/torah-et-armee', '/preparation-tsahal-francophone', '/yeshiva-haifa-francophone', '/sayerot-preparation', '/faq'].includes(path)) return 'monthly';
  return 'weekly';
};

const priority = (path: string): number => {
  if (path === '') return 1.0;
  if (path === '/program' || path === '/contact') return 0.9;
  if (['/mekhina-armee', '/torah-et-armee', '/preparation-tsahal-francophone', '/sayerot-preparation', '/faq'].includes(path)) return 0.9;
  if (['/about', '/approach', '/gallery', '/yeshiva-haifa-francophone', '/blog'].includes(path)) return 0.8;
  if (path.startsWith('/blog/')) return 0.7;
  return 0.5;
};

const frOnlyPaths = [
  '/mekhina-armee',
  '/torah-et-armee',
  '/preparation-tsahal-francophone',
  '/yeshiva-haifa-francophone',
  '/sayerot-preparation',
  '/faq',
  '/blog',
  '/blog/mekhina-yeshiva-hesder-quel-parcours',
  '/blog/integrer-sayeret-matkal-francophone',
  '/blog/journee-mekhina-oz-leisrael-haifa',
  '/blog/torah-armee-vision-rav-zini',
  '/blog/olim-france-service-militaire-israel',
];

const bilingualPaths = [
  '',
  '/program',
  '/approach',
  '/about',
  '/gallery',
  '/contact',
  '/privacy',
  '/terms',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const entries: MetadataRoute.Sitemap = [];

  // Pages bilingues FR + EN
  for (const path of bilingualPaths) {
    for (const locale of LOCALES) {
      entries.push({
        url: `${SITE_URL}/${locale}${path}`,
        lastModified,
        changeFrequency: changeFreq(path),
        priority: priority(path),
      });
    }
  }

  // Pages FR uniquement
  for (const path of frOnlyPaths) {
    entries.push({
      url: `${SITE_URL}/fr${path}`,
      lastModified,
      changeFrequency: changeFreq(path),
      priority: priority(path),
    });
  }

  return entries;
}
