import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { SITE_URL, canonicalUrl, buildAlternates, getJsonLdBreadcrumbs } from '@/lib/seo';

export async function generateMetadata(): Promise<Metadata> {
  const canonical = canonicalUrl('/mekhina-armee', 'fr');
  const languages = buildAlternates('/mekhina-armee');
  return {
    title: "Mekhina pour l'Armée Israélienne (Tsahal) — Oz LeIsrael à Haïfa",
    description:
      "Qu'est-ce qu'une mekhina ? Oz LeIsrael à Haïfa forme des jeunes francophones à intégrer Tsahal et ses unités d'élite grâce à la Torah et la préparation physique. Mekhina armée, mékhina tsahal, mehina armée.",
    keywords:
      "mekhina armée, mekhina tsahal, mékhina armée, mehina armée, mekhinat tsahal, mekhina haïfa, mekhina francophone, qu'est-ce qu'une mekhina, mekhina israël, oz leisrael, programme mekhina",
    alternates: { canonical, languages },
    openGraph: {
      title: "Mekhina pour l'Armée (Tsahal) — Oz LeIsrael Haïfa",
      description: "Mekhina francophone à Haïfa : Torah + préparation physique pour intégrer Tsahal et les Sayerot.",
      url: canonical,
      images: [{ url: `${SITE_URL}/images/cover.png`, width: 1200, height: 630, alt: "Mekhina Oz LeIsrael — Torah et Tsahal" }],
    },
  };
}

const breadcrumbsData = [
  { name: 'Accueil', url: `${SITE_URL}/fr` },
  { name: "Mekhina pour l'armée", url: `${SITE_URL}/fr/mekhina-armee` },
];

export default function MekhinaArmeePage() {
  const breadcrumbs = getJsonLdBreadcrumbs(breadcrumbsData);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "Qu'est-ce qu'une mekhina (מכינה) ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Une mekhina est un programme de préparation en Israël, généralement d'une durée de 6 à 12 mois, combinant étude de la Torah et préparation physique & mentale avant l'intégration à Tsahal (armée israélienne). La mekhina Oz LeIsrael à Haïfa est spécialement conçue pour les jeunes francophones.",
        },
      },
      {
        '@type': 'Question',
        name: "Quelle est la différence entre une mekhina et une yeshiva ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Une yeshiva est axée uniquement sur l'étude de la Torah. Une mekhina (comme Oz LeIsrael) allie l'étude Torah avec une préparation physique et militaire intensive pour Tsahal. La mekhina prépare concrètement à l'armée, là où la yeshiva reste dans le domaine spirituel.",
        },
      },
      {
        '@type': 'Question',
        name: "Pourquoi faire une mekhina avant Tsahal ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "La mekhina avant Tsahal permet d'arriver à l'armée avec un niveau physique, mental et spirituel optimal. Les soldats issus d'une mekhina intègrent plus souvent les unités d'élite (Sayerot), sont mieux préparés aux défis de l'armée, et repartent avec une identité juive plus forte.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen pt-20">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-20">
          <div className="container max-w-4xl mx-auto text-center">
            <nav className="text-sm text-gray-500 mb-6" aria-label="Fil d'Ariane">
              <Link href="/fr" className="hover:text-primary-600">Accueil</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-800 font-medium">Mekhina pour l&apos;armée</span>
            </nav>
            <h1 className="heading-1 mb-6">
              Mekhina pour l&apos;Armée Israélienne (Tsahal)
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              La <strong>mekhina Oz LeIsrael</strong> à <strong>Haïfa</strong> est le programme
              francophone de référence pour préparer les jeunes hommes à intégrer{' '}
              <strong>Tsahal</strong> et viser les <strong>unités d&apos;élite</strong> (Sayerot).
              Torah, entraînement physique, fraternité.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/fr/contact" className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                Rejoindre la mekhina
              </Link>
              <a href="https://wa.me/972585767105" target="_blank" rel="noopener noreferrer"
                className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-600 transition-colors">
                WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Qu'est-ce qu'une mekhina */}
        <section className="section-padding bg-white">
          <div className="container max-w-4xl mx-auto">
            <h2 className="heading-2 mb-8">Qu&apos;est-ce qu&apos;une Mekhina (מכינה) ?</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="prose prose-lg text-gray-700">
                <p>
                  Le mot <strong>mekhina</strong> (מכינה) signifie littéralement «&nbsp;préparation&nbsp;»
                  en hébreu. Une mekhina est un programme pré-militaire israélien, d&apos;une durée
                  de 6 à 12 mois, qui prépare les jeunes à leur service dans{' '}
                  <strong>Tsahal</strong> — à la fois physiquement, mentalement et spirituellement.
                </p>
                <p>
                  La <strong>mekhina armée Oz LeIsrael</strong> à Haïfa est unique car elle est
                  conçue spécifiquement pour les <strong>francophones</strong> (olim de France,
                  Belgique, Suisse, Canada). Elle allie deux éléments essentiels :
                </p>
                <ul>
                  <li>
                    <strong>Le Kodesh</strong> : étude approfondie de la Torah, Talmud, pensée juive
                    et philosophie sous la direction du <strong>Rav Zini</strong>
                  </li>
                  <li>
                    <strong>Le Hol</strong> : entraînement physique intensif (Krav Maga, course,
                    natation, préparation aux tests Sayerot)
                  </li>
                </ul>
                <p>
                  Le résultat : des jeunes qui arrivent à l&apos;armée avec un niveau physique et
                  mental exceptionnel, une identité juive forte, et une motivation claire pour
                  servir Israël.
                </p>
              </div>
              <div className="relative h-80 rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/etude-groupe.jpg"
                  alt="Étudiants en cours de Torah à la Mekhina Oz LeIsrael — préparation armée à Haïfa"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mekhina vs Yeshiva */}
        <section className="section-padding bg-gray-50">
          <div className="container max-w-4xl mx-auto">
            <h2 className="heading-2 mb-8">Mekhina vs Yeshiva : quelle différence ?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Beaucoup de jeunes francophones se posent la question. La différence est fondamentale :
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-md border-l-4 border-primary-500">
                <h3 className="text-xl font-bold mb-4 text-primary-700">Yeshiva classique</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start"><span className="mr-2 text-gray-400">→</span> Étude Torah uniquement</li>
                  <li className="flex items-start"><span className="mr-2 text-gray-400">→</span> Pas de préparation militaire</li>
                  <li className="flex items-start"><span className="mr-2 text-gray-400">→</span> Pas d&apos;entraînement physique structuré</li>
                  <li className="flex items-start"><span className="mr-2 text-gray-400">→</span> Durée longue (plusieurs années)</li>
                  <li className="flex items-start"><span className="mr-2 text-gray-400">→</span> Peut déboucher sur la Hesder ou le service différé</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-md border-l-4 border-green-500">
                <h3 className="text-xl font-bold mb-4 text-green-700">Mekhina Oz LeIsrael</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start"><span className="mr-2 text-green-500">✓</span> Torah + préparation physique & mentale</li>
                  <li className="flex items-start"><span className="mr-2 text-green-500">✓</span> Objectif concret : intégrer Tsahal et les Sayerot</li>
                  <li className="flex items-start"><span className="mr-2 text-green-500">✓</span> Entraînement Kravi quotidien</li>
                  <li className="flex items-start"><span className="mr-2 text-green-500">✓</span> Programme compact (1 an)</li>
                  <li className="flex items-start"><span className="mr-2 text-green-500">✓</span> Conçu pour les <strong>francophones</strong></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Variantes orthographiques — SEO longue traîne */}
        <section className="section-padding bg-white">
          <div className="container max-w-4xl mx-auto">
            <h2 className="heading-2 mb-6">La Mekhina Oz LeIsrael — Tsahal Haïfa</h2>
            <div className="prose prose-lg text-gray-700 max-w-none">
              <p>
                Que vous cherchiez une <strong>mékhina armée</strong>, une{' '}
                <strong>mehina armée</strong>, une <strong>mekhinat Tsahal</strong> ou simplement
                un programme de <strong>préparation à l&apos;armée israélienne</strong> pour
                francophones — vous êtes au bon endroit. Oz LeIsrael est la réponse francophone à
                ces recherches.
              </p>
              <p>
                Situé à <strong>Haïfa</strong>, la troisième ville d&apos;Israël, notre programme
                bénéficie d&apos;un emplacement stratégique : au bord de la Méditerranée, à
                proximité du Technion, dans une ville cosmopolite et dynamique. Le cadre est idéal
                pour l&apos;étude de la Torah et la préparation physique.
              </p>
              <p>
                Notre <strong>mekhina francophone</strong> accueille des jeunes de France, de
                Belgique, de Suisse, du Canada et d&apos;autres pays francophones qui partagent un
                objectif commun : servir Israël dans les meilleures unités de Tsahal, avec les
                valeurs de la Torah chevillées au corps.
              </p>
              <h3>Résultats concrets de la mekhina</h3>
              <p>
                Les anciens élèves de la <strong>mekhina Oz LeIsrael</strong> intègrent
                régulièrement des unités comme Golani, Givati, Egoz, Nahal Haredi, et certains
                Sayerot. Leur niveau physique à l&apos;entrée de l&apos;armée est
                systématiquement supérieur à la moyenne, et leur ancrage spirituel leur permet de
                traverser les moments difficiles du service avec sérénité.
              </p>
            </div>
          </div>
        </section>

        {/* CTA + Links */}
        <section className="section-padding bg-primary-50">
          <div className="container max-w-4xl mx-auto text-center">
            <h2 className="heading-2 mb-6">Prêt à rejoindre la Mekhina Oz LeIsrael ?</h2>
            <p className="text-xl text-gray-700 mb-8">
              Contactez-nous dès maintenant pour un entretien personnalisé avec le Rav Zini.
              Les places sont limitées — n&apos;attendez pas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/fr/contact" className="bg-primary-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-primary-700 transition-colors text-lg">
                Candidater maintenant
              </Link>
              <a href="https://wa.me/972585767105" target="_blank" rel="noopener noreferrer"
                className="bg-green-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-green-600 transition-colors text-lg">
                WhatsApp direct
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <Link href="/fr/torah-et-armee" className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-primary-600 mb-2">Torah et armée</h3>
                <p className="text-gray-600 text-sm">Pourquoi la Torah renforce le soldat de Tsahal.</p>
              </Link>
              <Link href="/fr/sayerot-preparation" className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-primary-600 mb-2">Préparation aux Sayerot</h3>
                <p className="text-gray-600 text-sm">Notre entraînement pour les unités d&apos;élite.</p>
              </Link>
              <Link href="/fr/faq" className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-primary-600 mb-2">FAQ</h3>
                <p className="text-gray-600 text-sm">Toutes les réponses à vos questions sur la mekhina.</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
