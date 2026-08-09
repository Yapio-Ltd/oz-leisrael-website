/**
 * Configuration SEO centralisée - Oz LeIsrael
 * Base URL, métadonnées par page, schémas JSON-LD
 */

function normalizeSiteUrl(input: string): string {
  return input.replace(/\/+$/, '');
}

export const SITE_URL = normalizeSiteUrl(
  process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    'https://oz-leisrael.com'
);

export type Locale = 'fr' | 'en';

export interface PageMeta {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
}

const defaultOgImage = `${SITE_URL}/images/cover.png`;

/** Métadonnées par page et par locale */
export const PAGE_META: Record<string, Record<Locale, PageMeta>> = {
  home: {
    fr: {
      title: "Oz LeIsrael — Mekhina pour l'armée à Haïfa | Torah, Tsahal, élite",
      description:
        "Oz LeIsrael : mekhina francophone à Haïfa combinant étude de la Torah et préparation physique & mentale pour intégrer Tsahal et viser les unités d'élite (Sayerot). Programme unique en son genre.",
      keywords:
        "oz leisrael, mekhina armée, mekhina tsahal, mékhina armée, mehina armée, mekhinat tsahal, mekhina haïfa, torah et armée, thora armée, préparation tsahal, préparation sayerot, yeshiva avant armée, unités d'élite tsahal, mekhina francophone, programme oz leisrael, rav zini",
      ogImage: defaultOgImage,
    },
    en: {
      title: 'Oz LeIsrael — Torah & Army Preparation in Haifa | Elite Units',
      description:
        'Oz LeIsrael: a unique Mekhina in Haifa combining Torah study with physical & mental preparation to join the IDF and aim for elite units (Sayerot).',
      keywords:
        'oz leisrael, mekhina army, mekhina IDF, torah army, army preparation, IDF preparation, elite units, sayerot, yeshiva haifa, rav zini',
      ogImage: defaultOgImage,
    },
  },
  program: {
    fr: {
      title: "Programme Mekhina Oz LeIsrael : Torah + Préparation Tsahal à Haïfa",
      description:
        "Découvre le programme de la Mekhina Oz LeIsrael à Haïfa : journée type, entraînement Kravi, étude de la Torah, préparation aux Sayerot et unités d'élite de Tsahal.",
      keywords:
        "programme mekhina oz leisrael, haïfa, préparation armée tsahal, yeshiva, étude torah, journée type mekhina, entraînement kravi, préparation physique, préparation mentale, unités d'élite, sayerot",
      ogImage: defaultOgImage,
    },
    en: {
      title: 'Oz LeIsrael Program: Torah + IDF Preparation in Haifa',
      description:
        'Oz LeIsrael program in Haifa: daily schedule, Kravi training, Torah study, physical & mental preparation for IDF elite units.',
      keywords:
        'oz leisrael program, haifa, IDF preparation, yeshiva, torah study, daily schedule, kravi training, elite units, sayerot',
      ogImage: defaultOgImage,
    },
  },
  approach: {
    fr: {
      title: "Torah et Armée : Notre Approche pour Intégrer Tsahal | Oz LeIsrael",
      description:
        "L'approche Oz LeIsrael : alliance unique entre le Kodesh (étude de la Torah) et le Hol (préparation physique & mentale) pour intégrer Tsahal et viser les Sayerot depuis Haïfa.",
      keywords:
        "torah et armée, approche oz leisrael, kodesh hol, mekhina, yeshiva, étude torah, préparation armée, tsahal, sayerot, haïfa, fraternité, excellence",
      ogImage: defaultOgImage,
    },
    en: {
      title: 'Torah and Army: Our Approach to Join the IDF | Oz LeIsrael',
      description:
        "Oz LeIsrael's approach: unique alliance between Kodesh (Torah study) and Hol (physical & mental preparation) to join the IDF and aim for elite units.",
      keywords:
        'torah army approach, oz leisrael, kodesh hol, mekhina, yeshiva, torah study, army preparation, IDF, sayerot, haifa',
      ogImage: defaultOgImage,
    },
  },
  about: {
    fr: {
      title: "La Mekhina Oz LeIsrael à Haïfa — Yeshiva avant l'Armée | Rav Zini",
      description:
        "Présentation de la Mekhina Oz LeIsrael à Haïfa : valeurs, cadre, partenariat avec la Yeshiva Or Vishua. Formation Torah + préparation physique avant l'armée (Tsahal). Sous la direction du Rav Zini.",
      keywords:
        "mekhina oz leisrael, yeshiva haïfa, rav zini, étude torah avant armée, mekhina francophone, or vishua, préparation tsahal, unités d'élite, mekhina programme, haïfa",
      ogImage: defaultOgImage,
    },
    en: {
      title: 'The Oz LeIsrael Mekhina in Haifa — Yeshiva before the Army | Rav Zini',
      description:
        'Discover the Oz LeIsrael Mekhina in Haifa: values, framework, partnership with Yeshiva Or Vishua. Torah study + physical preparation before the IDF, led by Rav Zini.',
      keywords:
        'oz leisrael mekhina, yeshiva haifa, rav zini, torah study before army, mekhina program, or vishua, IDF preparation, elite units',
      ogImage: defaultOgImage,
    },
  },
  gallery: {
    fr: {
      title: "Galerie Photos — Mekhina Oz LeIsrael : Torah, Entraînement, Fraternité",
      description:
        "Galerie photos de la Mekhina Oz LeIsrael à Haïfa : moments de Torah, entraînements physiques, vie en communauté. Découvrez le quotidien de notre programme.",
      keywords:
        "galerie oz leisrael, photos mekhina, torah entraînement, vie communauté haïfa, programme préparation armée",
      ogImage: defaultOgImage,
    },
    en: {
      title: 'Photo Gallery — Oz LeIsrael Mekhina: Torah, Training, Brotherhood',
      description:
        'Photo gallery of the Oz LeIsrael Mekhina in Haifa: Torah moments, physical training, community life. Discover our daily program.',
      keywords:
        'oz leisrael gallery, mekhina photos, torah training, community life haifa, army preparation program',
      ogImage: defaultOgImage,
    },
  },
  contact: {
    fr: {
      title: "Rejoindre la Mekhina Oz LeIsrael — Candidature & Contact | Haïfa",
      description:
        "Contactez Oz LeIsrael pour rejoindre la mekhina à Haïfa. Candidature, renseignements sur le programme Torah + Tsahal, entretien avec le Rav Zini. Rejoins l'élite.",
      keywords:
        "contact oz leisrael, candidature mekhina, rejoindre programme, tsahal, haïfa, rav zini, inscription mekhina",
      ogImage: defaultOgImage,
    },
    en: {
      title: 'Join the Oz LeIsrael Mekhina — Application & Contact | Haifa',
      description:
        'Contact Oz LeIsrael to join the Mekhina in Haifa. Application, program information Torah + IDF, interview with Rav Zini. Join the elite.',
      keywords:
        'oz leisrael contact, mekhina application, join program, IDF, haifa, rav zini',
      ogImage: defaultOgImage,
    },
  },
  privacy: {
    fr: {
      title: 'Politique de Confidentialité | Oz LeIsrael',
      description: 'Politique de confidentialité et protection des données personnelles — Oz LeIsrael, Mekhina à Haïfa.',
      ogImage: defaultOgImage,
    },
    en: {
      title: 'Privacy Policy | Oz LeIsrael',
      description: 'Privacy policy and personal data protection — Oz LeIsrael Mekhina in Haifa.',
      ogImage: defaultOgImage,
    },
  },
  terms: {
    fr: {
      title: "Mentions Légales | Oz LeIsrael",
      description: "Mentions légales et conditions d'utilisation du site Oz LeIsrael — Mekhina à Haïfa.",
      ogImage: defaultOgImage,
    },
    en: {
      title: 'Terms of Use | Oz LeIsrael',
      description: 'Legal notice and terms of use of the Oz LeIsrael Mekhina website in Haifa.',
      ogImage: defaultOgImage,
    },
  },
  mekhinaArmee: {
    fr: {
      title: "Mekhina pour l'Armée Israélienne (Tsahal) — Oz LeIsrael à Haïfa",
      description:
        "Qu'est-ce qu'une mekhina ? Oz LeIsrael à Haïfa forme des jeunes francophones à intégrer Tsahal et ses unités d'élite (Sayerot) grâce à la Torah et la préparation physique.",
      keywords:
        "mekhina armée, mekhina tsahal, mékhina armée, mehina armée, mekhinat tsahal, mekhina haïfa, mekhina francophone, qu'est-ce qu'une mekhina, mekhina israël, oz leisrael",
      ogImage: defaultOgImage,
    },
    en: {
      title: 'Mekhina for the Israeli Army (IDF) — Oz LeIsrael in Haifa',
      description:
        'What is a Mekhina? Oz LeIsrael in Haifa prepares French-speaking youth to join the IDF and its elite units through Torah study and physical training.',
      keywords:
        'mekhina army, mekhina IDF, mekhina haifa, what is a mekhina, mekhina israel, oz leisrael',
      ogImage: defaultOgImage,
    },
  },
  torahEtArmee: {
    fr: {
      title: "Torah et Armée : Étudier la Torah avant Tsahal | Oz LeIsrael",
      description:
        "Pourquoi étudier la Torah avant l'armée ? Oz LeIsrael démontre que la force spirituelle forge les meilleurs soldats. Mekhina à Haïfa pour intégrer Tsahal avec les valeurs de la Torah.",
      keywords:
        "torah et armée, thora armée, torah avant tsahal, étudier torah avant armée, yeshiva avant armée, spiritualité et armée, oz leisrael, mekhina torah, valeurs torah tsahal",
      ogImage: defaultOgImage,
    },
    en: {
      title: 'Torah and Army: Studying Torah before the IDF | Oz LeIsrael',
      description:
        'Why study Torah before the army? Oz LeIsrael demonstrates that spiritual strength forges the best soldiers. Mekhina in Haifa to join the IDF with Torah values.',
      keywords:
        'torah and army, torah before IDF, yeshiva before army, spirituality army, oz leisrael, mekhina torah',
      ogImage: defaultOgImage,
    },
  },
  preparationTsahalFrancophone: {
    fr: {
      title: "Préparation Tsahal pour Francophones — Mekhina Oz LeIsrael à Haïfa",
      description:
        "Tu es francophone et tu veux intégrer Tsahal ? La Mekhina Oz LeIsrael à Haïfa t'accompagne : Torah, entraînement physique, préparation aux Sayerot, en français.",
      keywords:
        "préparation tsahal francophone, mekhina francophone, intégrer tsahal français, olim france israël armée, préparation armée israélienne, sayerot francophone, oz leisrael français",
      ogImage: defaultOgImage,
    },
    en: {
      title: 'IDF Preparation for French Speakers — Oz LeIsrael Mekhina in Haifa',
      description:
        'Are you a French speaker wanting to join the IDF? Oz LeIsrael Mekhina in Haifa guides you: Torah, physical training, Sayerot preparation.',
      keywords:
        'IDF preparation french speakers, mekhina french, join IDF french, olim france israel army, oz leisrael french',
      ogImage: defaultOgImage,
    },
  },
  yeshivaHaifaFrancophone: {
    fr: {
      title: "Yeshiva Francophone à Haïfa — Torah et Préparation Armée | Oz LeIsrael",
      description:
        "La Mekhina Oz LeIsrael est la yeshiva francophone de référence à Haïfa, alliant étude Torah et préparation à Tsahal. En partenariat avec la Yeshiva Or Vishua.",
      keywords:
        "yeshiva haïfa francophone, yeshiva francophone israël, yeshiva torah armée, mekhina yeshiva haïfa, or vishua, oz leisrael haïfa",
      ogImage: defaultOgImage,
    },
    en: {
      title: 'French-Speaking Yeshiva in Haifa — Torah & Army Preparation | Oz LeIsrael',
      description:
        'Oz LeIsrael Mekhina is the French-speaking reference yeshiva in Haifa, combining Torah study and IDF preparation. In partnership with Yeshiva Or Vishua.',
      keywords:
        'yeshiva haifa french, french speaking yeshiva israel, torah army yeshiva, oz leisrael haifa, or vishua',
      ogImage: defaultOgImage,
    },
  },
  sayerotPreparation: {
    fr: {
      title: "Préparation aux Sayerot (Unités d'Élite Tsahal) — Oz LeIsrael",
      description:
        "Intègre les Sayerot — unités d'élite de Tsahal — grâce à la préparation physique et mentale de la Mekhina Oz LeIsrael à Haïfa. Entraînement Kravi, tests de sélection, Torah.",
      keywords:
        "sayerot préparation, unités d'élite tsahal, préparation sayeret matkal, golani, egoz, mekhina sayerot, entraînement kravi, sélection tsahal, oz leisrael",
      ogImage: defaultOgImage,
    },
    en: {
      title: "Preparation for Sayerot (IDF Elite Units) — Oz LeIsrael",
      description:
        "Join the Sayerot — IDF elite units — through the physical and mental preparation of Oz LeIsrael Mekhina in Haifa. Kravi training, selection tests, Torah.",
      keywords:
        "sayerot preparation, IDF elite units, sayeret matkal, golani, egoz, mekhina sayerot, kravi training, oz leisrael",
      ogImage: defaultOgImage,
    },
  },
  faq: {
    fr: {
      title: "FAQ — Questions Fréquentes sur la Mekhina Oz LeIsrael | Torah & Tsahal",
      description:
        "Toutes vos questions sur la Mekhina Oz LeIsrael à Haïfa : qu'est-ce qu'une mekhina, différence avec une yeshiva, comment rejoindre, durée du programme, niveau Torah requis.",
      keywords:
        "faq mekhina, questions mekhina, qu'est-ce qu'une mekhina, mekhina vs yeshiva, rejoindre oz leisrael, programme mekhina durée",
      ogImage: defaultOgImage,
    },
    en: {
      title: 'FAQ — Frequently Asked Questions about Oz LeIsrael Mekhina | Torah & IDF',
      description:
        "All your questions about Oz LeIsrael Mekhina in Haifa: what is a mekhina, difference from a yeshiva, how to join, program duration, Torah level required.",
      keywords:
        'faq mekhina, mekhina questions, what is a mekhina, mekhina vs yeshiva, join oz leisrael',
      ogImage: defaultOgImage,
    },
  },
  blog: {
    fr: {
      title: "Blog — Mekhina, Torah & Tsahal | Oz LeIsrael Haïfa",
      description:
        "Articles et guides sur la Mekhina, la Torah et la préparation à Tsahal pour les francophones souhaitant servir en Israël. Par l'équipe Oz LeIsrael à Haïfa.",
      keywords:
        "blog mekhina, articles torah armée, tsahal francophone, guides préparation armée israël, oz leisrael blog",
      ogImage: defaultOgImage,
    },
    en: {
      title: 'Blog — Mekhina, Torah & IDF | Oz LeIsrael Haifa',
      description:
        "Articles and guides on Mekhina, Torah and IDF preparation for French speakers wanting to serve in Israel. By the Oz LeIsrael team in Haifa.",
      keywords:
        'blog mekhina, torah army articles, IDF french speakers, army preparation guides israel, oz leisrael blog',
      ogImage: defaultOgImage,
    },
  },
};

/** Chemins des pages (sans locale) pour le sitemap et les alternates */
export const PAGE_PATHS = [
  '',
  '/program',
  '/approach',
  '/about',
  '/gallery',
  '/contact',
  '/privacy',
  '/terms',
  '/mekhina-armee',
  '/torah-et-armee',
  '/preparation-tsahal-francophone',
  '/yeshiva-haifa-francophone',
  '/sayerot-preparation',
  '/faq',
  '/blog',
] as const;

export const LOCALES: Locale[] = ['fr', 'en'];

/** Construire l'URL canonique pour une locale et un path */
export function canonicalUrl(path: string, locale: Locale): string {
  return `${SITE_URL}/${locale}${path}`;
}

/** Construire les alternates hreflang avec x-default */
export function buildAlternates(path: string) {
  const languages: Record<string, string> = {};
  LOCALES.forEach((l) => {
    languages[l] = canonicalUrl(path, l);
  });
  languages['x-default'] = canonicalUrl(path, 'fr');
  return languages;
}

/** Données pour le schéma JSON-LD Organization / EducationalOrganization */
export const JSON_LD_ORGANIZATION = {
  '@context': 'https://schema.org',
  '@type': ['EducationalOrganization', 'LocalBusiness'],
  '@id': `${SITE_URL}#organization`,
  name: 'Oz LeIsrael',
  alternateName: [
    'Oz L\'Israel',
    'Oz Le Israel',
    'Oz LeIsrael Haïfa',
    'Mekhina Oz LeIsrael',
    'Oz LeIsrael Mekhina',
    'מכינת עוז לישראל',
    'עוז לישראל',
  ],
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/images/cover.png`,
    width: 1200,
    height: 630,
  },
  image: `${SITE_URL}/images/cover.png`,
  telephone: '+972585767105',
  description:
    "Mekhina à Haïfa combinant étude approfondie de la Torah et préparation physique & mentale pour intégrer l'élite de Tsahal. Programme unique pour jeunes francophones.",
  keywords:
    "mekhina armée, mekhina tsahal, torah et armée, préparation tsahal, yeshiva haïfa, mekhina francophone, sayerot, oz leisrael",
  knowsAbout: [
    'Mekhina',
    'Torah study',
    'Yeshiva',
    'Tsahal / IDF army preparation',
    'Physical preparation',
    'Mental preparation',
    'Sayerot elite units',
    'Haifa Israel',
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Haïfa',
    addressCountry: 'IL',
    addressRegion: 'Haifa District',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 32.794044,
    longitude: 34.989571,
  },
  areaServed: [
    { '@type': 'City', name: 'Haïfa' },
    { '@type': 'Country', name: 'Israël' },
  ],
  audience: {
    '@type': 'EducationalAudience',
    educationalRole: 'student',
    audienceType: 'Jeunes hommes francophones souhaitant intégrer Tsahal',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'informations',
      telephone: '+972585767105',
      availableLanguage: ['fr', 'he', 'en'],
      url: 'https://wa.me/972585767105',
    },
  ],
  sameAs: [
    'https://www.instagram.com/oz_leisrael/',
  ] as string[],
  member: [
    {
      '@type': 'Person',
      '@id': `${SITE_URL}#rav-zini`,
      name: 'Rav Zini',
      jobTitle: 'Directeur spirituel',
      description: 'Rav et fondateur de la Mekhina Oz LeIsrael à Haïfa',
    },
  ],
};

export const JSON_LD_PERSON_RAV_ZINI = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${SITE_URL}#rav-zini`,
  name: 'Rav Zini',
  jobTitle: 'Directeur spirituel et fondateur',
  worksFor: { '@id': `${SITE_URL}#organization` },
  description:
    "Rav et fondateur de la Mekhina Oz LeIsrael à Haïfa. Expert en Torah et accompagnement de jeunes vers l'intégration à Tsahal.",
  knowsAbout: ['Torah', 'Mekhina', 'Tsahal', 'Préparation militaire', 'Yeshiva'],
};

export const JSON_LD_VIDEO_OBJECT = {
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  name: 'Présentation de la Mekhina Oz LeIsrael — Torah et Tsahal à Haïfa',
  description:
    "Vidéo de présentation de la Mekhina Oz LeIsrael à Haïfa : programme unique combinant étude de la Torah et préparation physique & mentale pour intégrer l'élite de Tsahal.",
  thumbnailUrl: `${SITE_URL}/images/cover.png`,
  uploadDate: '2024-09-01',
  contentUrl: `${SITE_URL}/videos/first-presentation.mp4`,
  publisher: { '@id': `${SITE_URL}#organization` },
  inLanguage: 'fr',
};

export function getJsonLdWebSite(locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Oz LeIsrael',
    url: `${SITE_URL}/${locale}`,
    description:
      locale === 'fr'
        ? "Mekhina à Haïfa combinant étude de la Torah et préparation physique & mentale pour intégrer l'élite de Tsahal. Programme pour jeunes francophones."
        : "Mekhina in Haifa combining Torah study with physical & mental preparation to join Tsahal's elite. Program for French-speaking youth.",
    inLanguage: locale === 'fr' ? 'fr-FR' : 'en-US',
    publisher: { '@id': `${SITE_URL}#organization` },
    potentialAction: [
      {
        '@type': 'ContactAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://wa.me/972585767105',
        },
      },
    ],
  };
}

export function getJsonLdBreadcrumbs(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
