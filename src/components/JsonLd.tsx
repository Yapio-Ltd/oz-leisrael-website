import {
  getJsonLdWebSite,
  JSON_LD_ORGANIZATION,
  JSON_LD_PERSON_RAV_ZINI,
  JSON_LD_VIDEO_OBJECT,
} from '@/lib/seo';
import type { Locale } from '@/lib/seo';

export function JsonLd({ locale }: { locale: Locale }) {
  const website = getJsonLdWebSite(locale);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD_ORGANIZATION) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD_PERSON_RAV_ZINI) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD_VIDEO_OBJECT) }}
      />
    </>
  );
}
