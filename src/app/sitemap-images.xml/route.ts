import { SITE_URL } from '@/lib/seo';
import { NextResponse } from 'next/server';

const images = [
  { url: '/images/cover.jpg', caption: 'Oz LeIsrael — Mekhina Torah et Tsahal à Haïfa', title: 'Mekhina Oz LeIsrael Haïfa' },
  { url: '/images/cover.png', caption: 'Oz LeIsrael — Programme mekhina armée francophone', title: 'Oz LeIsrael Mekhina' },
  { url: '/images/logo.png', caption: 'Logo Oz LeIsrael — Mekhina à Haïfa', title: 'Logo Oz LeIsrael' },
  { url: '/images/kodesh-study.jpg', caption: 'Étude de la Torah à la Mekhina Oz LeIsrael — Kodesh', title: 'Étude Torah Mekhina' },
  { url: '/images/hol-training.jpg', caption: 'Entraînement physique Kravi à la Mekhina Oz LeIsrael — préparation Tsahal', title: 'Entraînement Mekhina' },
  { url: '/images/etude-groupe.jpg', caption: 'Cours de Torah en groupe à la Mekhina Oz LeIsrael à Haïfa', title: 'Cours Torah Oz LeIsrael' },
  { url: '/images/beit-amidrash.jpg', caption: 'Beit Midrash de la Mekhina Oz LeIsrael — Yeshiva Or Vishua Haïfa', title: 'Beit Midrash Oz LeIsrael' },
  { url: '/images/train-kravi.jpg', caption: 'Entraînement Kravi (combat rapproché) à la Mekhina Oz LeIsrael — préparation Sayerot', title: 'Entraînement Kravi Sayerot' },
  { url: '/images/yeshiva-or-vishua.jpg', caption: 'Yeshiva Or Vishua — partenaire de la Mekhina Oz LeIsrael à Haïfa', title: 'Yeshiva Or Vishua Haïfa' },
  { url: '/images/spiritual-preparation.jpg', caption: 'Préparation spirituelle Torah à la Mekhina Oz LeIsrael', title: 'Préparation spirituelle Oz LeIsrael' },
  { url: '/images/physical-preparation.jpg', caption: 'Préparation physique pour Tsahal — Mekhina Oz LeIsrael Haïfa', title: 'Préparation physique Tsahal' },
  { url: '/images/zionism-community.jpg', caption: 'Communauté fraternelle de la Mekhina Oz LeIsrael à Haïfa', title: 'Communauté Oz LeIsrael' },
];

export async function GET() {
  const pageUrls = [
    `${SITE_URL}/fr`,
    `${SITE_URL}/fr/about`,
    `${SITE_URL}/fr/program`,
    `${SITE_URL}/fr/approach`,
    `${SITE_URL}/fr/gallery`,
    `${SITE_URL}/fr/mekhina-armee`,
    `${SITE_URL}/fr/torah-et-armee`,
    `${SITE_URL}/fr/sayerot-preparation`,
  ];

  const imageEntries = images.map((img) => ({
    image: img,
    pages: pageUrls.slice(0, 2),
  }));

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${images.map((img, idx) => {
  const page = pageUrls[Math.min(idx, pageUrls.length - 1)];
  return `  <url>
    <loc>${page}</loc>
    <image:image>
      <image:loc>${SITE_URL}${img.url}</image:loc>
      <image:caption>${img.caption}</image:caption>
      <image:title>${img.title}</image:title>
    </image:image>
  </url>`;
}).join('\n')}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
