import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { SITE_URL, canonicalUrl, buildAlternates, getJsonLdBreadcrumbs } from '@/lib/seo';

export async function generateMetadata(): Promise<Metadata> {
  const canonical = canonicalUrl('/yeshiva-haifa-francophone', 'fr');
  const languages = buildAlternates('/yeshiva-haifa-francophone');
  return {
    title: "Yeshiva Francophone à Haïfa — Torah et Préparation Armée | Oz LeIsrael",
    description:
      "La Mekhina Oz LeIsrael est la yeshiva francophone de référence à Haïfa, alliant étude Torah et préparation à Tsahal. En partenariat avec la Yeshiva Or Vishua. Programme pour jeunes francophones en Israël.",
    keywords:
      "yeshiva haïfa francophone, yeshiva francophone israël, yeshiva torah armée, mekhina yeshiva haïfa, or vishua haïfa, oz leisrael haïfa, yeshiva français haïfa, étude torah haïfa, yeshiva israël francophones",
    alternates: { canonical, languages },
    openGraph: {
      title: "Yeshiva Francophone à Haïfa — Oz LeIsrael",
      description: "La yeshiva/mekhina francophone à Haïfa : Torah + préparation Tsahal. Partenariat Or Vishua.",
      url: canonical,
      images: [{ url: `${SITE_URL}/images/cover.png`, width: 1200, height: 630, alt: "Yeshiva francophone à Haïfa — Oz LeIsrael" }],
    },
  };
}

const breadcrumbsData = [
  { name: 'Accueil', url: `${SITE_URL}/fr` },
  { name: 'Yeshiva francophone Haïfa', url: `${SITE_URL}/fr/yeshiva-haifa-francophone` },
];

export default function YeshivaHaifaFrancophonesPage() {
  const breadcrumbs = getJsonLdBreadcrumbs(breadcrumbsData);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      <div className="min-h-screen pt-20">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-20">
          <div className="container max-w-4xl mx-auto text-center">
            <nav className="text-sm text-gray-500 mb-6" aria-label="Fil d'Ariane">
              <Link href="/fr" className="hover:text-primary-600">Accueil</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-800 font-medium">Yeshiva francophone à Haïfa</span>
            </nav>
            <h1 className="heading-1 mb-6">
              Yeshiva Francophone à Haïfa : Torah + Préparation Tsahal
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              La <strong>Mekhina Oz LeIsrael</strong>, en partenariat avec la{' '}
              <strong>Yeshiva Or Vishua</strong>, est le premier programme{' '}
              <strong>francophone</strong> à <strong>Haïfa</strong> combinant étude approfondie
              de la <strong>Torah</strong> et préparation à <strong>Tsahal</strong>. Un programme
              unique en son genre en Israël.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/fr/contact" className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                Rejoindre le programme
              </Link>
              <a href="https://orvishua.net/" target="_blank" rel="noopener noreferrer"
                className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors border border-primary-200">
                Yeshiva Or Vishua
              </a>
            </div>
          </div>
        </section>

        {/* Présentation */}
        <section className="section-padding bg-white">
          <div className="container max-w-4xl mx-auto">
            <h2 className="heading-2 mb-8">La Mekhina Oz LeIsrael — bien plus qu&apos;une yeshiva</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="prose prose-lg text-gray-700">
                <p>
                  Quand on parle de <strong>yeshiva à Haïfa pour francophones</strong>, on pense
                  naturellement à la <strong>Yeshiva Or Vishua</strong> — un établissement
                  d&apos;excellence reconnu, situé dans la magnifique ville de Haïfa, au nord
                  d&apos;Israël.
                </p>
                <p>
                  C&apos;est précisément sur ce socle exceptionnel que la{' '}
                  <strong>Mekhina Oz LeIsrael</strong> a été construite. Notre programme utilise
                  le cadre et l&apos;enseignement de la Yeshiva Or Vishua pour le Kodesh
                  (l&apos;étude de la Torah), et y ajoute une couche unique : la{' '}
                  <strong>préparation physique et mentale à Tsahal</strong>.
                </p>
                <p>
                  Le résultat est une <strong>mekhina-yeshiva hybride</strong>, unique en Israël,
                  qui répond parfaitement aux besoins des jeunes francophones qui veulent à la fois :
                </p>
                <ul>
                  <li>Approfondir leur étude de la Torah dans un cadre académique sérieux</li>
                  <li>Se préparer physiquement et mentalement pour Tsahal</li>
                  <li>Vivre en communauté avec d&apos;autres jeunes francophones</li>
                  <li>Être accompagnés dans leur intégration en Israël</li>
                </ul>
              </div>
              <div className="relative h-80 rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/beit-amidrash.jpg"
                  alt="Beit Midrash de la Yeshiva Or Vishua — partenaire de la Mekhina Oz LeIsrael à Haïfa"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Haïfa */}
        <section className="section-padding bg-gray-50">
          <div className="container max-w-4xl mx-auto">
            <h2 className="heading-2 mb-8">Pourquoi Haïfa ?</h2>
            <div className="prose prose-lg text-gray-700 max-w-none">
              <p>
                <strong>Haïfa</strong> n&apos;est pas choisie par hasard. Troisième ville
                d&apos;Israël, capitale de la région nord, Haïfa est une ville cosmopolite,
                moderne et accueillante. Elle offre un cadre idéal pour la{' '}
                <strong>mekhina Torah-armée</strong> d&apos;Oz LeIsrael pour plusieurs raisons :
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {[
                {
                  title: "🌊 La mer à portée d'entraînement",
                  text: "La natation fait partie intégrante de notre programme physique. La proximité de la Méditerranée est un atout majeur pour notre préparation Tsahal.",
                },
                {
                  title: "🏫 Le Technion — technologie et excellence",
                  text: "Vivre à côté du Technion (l'équivalent israélien de l'École Polytechnique) inspire l'excellence et rappelle que la rigueur intellectuelle se cultive aussi en dehors de la Torah.",
                },
                {
                  title: "🤝 Une ville ouverte et multiculturelle",
                  text: "Haïfa est connue pour sa coexistence harmonieuse. C'est un environnement sain et enrichissant pour des jeunes francophones en transition vers la société israélienne.",
                },
                {
                  title: "📍 Position stratégique au nord d'Israël",
                  text: "La proximité avec les montagnes du Galil, les paysages naturels d'Israël et les sites historiques offre des opportunités uniques pour les randonnées et sorties de formation.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-700">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Or Vishua */}
        <section className="section-padding bg-white">
          <div className="container max-w-4xl mx-auto">
            <h2 className="heading-2 mb-8">Notre partenariat avec la Yeshiva Or Vishua</h2>
            <div className="prose prose-lg text-gray-700 max-w-none">
              <p>
                La{' '}
                <a href="https://orvishua.net/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline font-semibold">
                  Yeshiva Or Vishua
                </a>{' '}
                est une institution d&apos;excellence à Haïfa, reconnue pour la qualité de son
                enseignement Torah et l&apos;accompagnement exceptionnel de ses étudiants.
                Notre partenariat avec Or Vishua permet aux élèves d&apos;Oz LeIsrael de
                bénéficier de :
              </p>
              <ul>
                <li>L&apos;expertise pédagogique de rabbins de renommée internationale</li>
                <li>Des infrastructures modernes et accueillantes au cœur de Haïfa</li>
                <li>Un programme d&apos;étude Torah structuré, exigeant et adapté au niveau de chacun</li>
                <li>Une communauté chaleureuse d&apos;étudiants du monde entier</li>
                <li>Un accompagnement spirituel personnalisé par le Rav Zini</li>
              </ul>
              <p>
                Ce partenariat fait de la <strong>Mekhina Oz LeIsrael</strong> la{' '}
                <strong>yeshiva francophone à Haïfa</strong> la plus complète pour un jeune qui
                veut combiner Torah et préparation à Tsahal.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-primary-50">
          <div className="container max-w-3xl mx-auto text-center">
            <h2 className="heading-2 mb-6">Rejoins la yeshiva-mekhina de référence à Haïfa</h2>
            <p className="text-xl text-gray-700 mb-8">
              Torah, Tsahal, fraternité, Haïfa — tout commence par un message.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Link href="/fr/contact" className="bg-primary-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-primary-700 transition-colors text-lg">
                Candidater
              </Link>
              <a href="https://wa.me/972585767105" target="_blank" rel="noopener noreferrer"
                className="bg-green-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-green-600 transition-colors text-lg">
                WhatsApp
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
              <Link href="/fr/mekhina-armee" className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-primary-600 mb-1">Mekhina armée</h3>
                <p className="text-gray-600 text-sm">Qu&apos;est-ce qu&apos;une mekhina ?</p>
              </Link>
              <Link href="/fr/torah-et-armee" className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-primary-600 mb-1">Torah et armée</h3>
                <p className="text-gray-600 text-sm">La Torah forge les meilleurs soldats.</p>
              </Link>
              <Link href="/fr/preparation-tsahal-francophone" className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-primary-600 mb-1">Francophones et Tsahal</h3>
                <p className="text-gray-600 text-sm">Guide pour les olim de France.</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
