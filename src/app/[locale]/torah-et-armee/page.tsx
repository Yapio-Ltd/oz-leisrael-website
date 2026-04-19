import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { SITE_URL, canonicalUrl, buildAlternates, getJsonLdBreadcrumbs } from '@/lib/seo';

export async function generateMetadata(): Promise<Metadata> {
  const canonical = canonicalUrl('/torah-et-armee', 'fr');
  const languages = buildAlternates('/torah-et-armee');
  return {
    title: "Torah et Armée : Étudier la Torah avant Tsahal | Oz LeIsrael Haïfa",
    description:
      "Pourquoi étudier la Torah avant l'armée ? Oz LeIsrael démontre que la force spirituelle forge les meilleurs soldats de Tsahal. Mekhina Torah-armée à Haïfa pour francophones. Thora armée, torah tsahal.",
    keywords:
      "torah et armée, thora armée, torah avant tsahal, étudier torah avant armée, yeshiva avant armée, torah tsahal, spiritualité armée, oz leisrael, mekhina torah, valeurs torah tsahal, torah mekhina haïfa",
    alternates: { canonical, languages },
    openGraph: {
      title: "Torah et Armée — Oz LeIsrael Haïfa",
      description: "La Torah forge les meilleurs soldats de Tsahal. Mekhina à Haïfa pour jeunes francophones.",
      url: canonical,
      images: [{ url: `${SITE_URL}/images/cover.png`, width: 1200, height: 630, alt: "Torah et armée — Oz LeIsrael" }],
    },
  };
}

const breadcrumbsData = [
  { name: 'Accueil', url: `${SITE_URL}/fr` },
  { name: 'Torah et armée', url: `${SITE_URL}/fr/torah-et-armee` },
];

export default function TorahEtArmeePage() {
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
              <span className="text-gray-800 font-medium">Torah et armée</span>
            </nav>
            <h1 className="heading-1 mb-6">Torah et Armée : la Force qui Forge l&apos;Élite</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              À la <strong>Mekhina Oz LeIsrael</strong> à <strong>Haïfa</strong>, nous croyons
              profondément que la <strong>Torah</strong> et l&apos;<strong>armée</strong> ne
              s&apos;opposent pas — ils se renforcent mutuellement pour former le soldat de Tsahal
              le plus complet, le plus fort, le plus engagé.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/fr/contact" className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                Rejoindre le programme
              </Link>
              <Link href="/fr/mekhina-armee" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors border border-primary-200">
                Qu&apos;est-ce qu&apos;une mekhina ?
              </Link>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="section-padding bg-white">
          <div className="container max-w-4xl mx-auto">
            <h2 className="heading-2 mb-8">Pourquoi étudier la Torah avant l&apos;armée ?</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="prose prose-lg text-gray-700">
                <p>
                  La question peut sembler surprenante de prime abord : pourquoi un jeune homme
                  qui veut intégrer <strong>Tsahal</strong> et viser les{' '}
                  <strong>Sayerot</strong> (unités d&apos;élite) devrait-il consacrer une année à
                  étudier la <strong>Torah</strong> avant d&apos;entrer à l&apos;armée ?
                </p>
                <p>
                  La réponse est simple, et des milliers d&apos;anciens soldats des meilleures
                  unités israéliennes en témoignent : <strong>la Torah forge l&apos;esprit</strong>.
                  Elle développe la capacité de raisonnement, la résistance mentale, la discipline,
                  le sens du collectif et — surtout — la motivation profonde de servir quelque
                  chose de plus grand que soi.
                </p>
                <p>
                  À la <strong>mekhina Oz LeIsrael</strong>, nous avons construit un programme
                  unique à Haïfa qui prouve tous les jours que{' '}
                  <strong>thora et armée</strong>, <strong>torah et Tsahal</strong> — loin
                  d&apos;être opposés — sont les deux faces d&apos;une même médaille. La Torah
                  nourrit le soldat. Le soldat honore la Torah.
                </p>
              </div>
              <div className="relative h-80 rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/kodesh-study.jpg"
                  alt="Étude de la Torah à la Mekhina Oz LeIsrael — programme Torah et armée à Haïfa"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 5 raisons */}
        <section className="section-padding bg-gray-50">
          <div className="container max-w-4xl mx-auto">
            <h2 className="heading-2 mb-10">5 raisons pour lesquelles la Torah renforce le soldat</h2>
            <div className="space-y-8">
              {[
                {
                  number: '01',
                  title: 'La Torah développe la résilience mentale',
                  text: "L'étude intensive du Talmud — raisonnement complexe, contradictions à résoudre, débats à mener — forge une capacité de concentration et de résistance mentale directement applicable dans les situations extrêmes de l'armée. Un soldat qui a étudié la Torah sous pression sait tenir bon quand tout s'effondre autour de lui.",
                },
                {
                  number: '02',
                  title: 'La Torah donne une motivation profonde',
                  text: "Pourquoi risquer sa vie pour Israël ? Cette question, chaque soldat doit y répondre intérieurement. La Torah donne cette réponse : servir le peuple juif sur sa terre est une mitzvah, un acte sacré. Un soldat qui comprend le pourquoi de son service est infiniment plus engagé qu'un soldat qui n'y a jamais réfléchi.",
                },
                {
                  number: '03',
                  title: 'La Torah enseigne la fraternité (ahavat hinam)',
                  text: "L'esprit d'équipe, le sens du sacrifice pour le camarade, la responsabilité collective — toutes ces valeurs militaires fondamentales sont au cœur de l'enseignement de la Torah. Le commandement d'aimer son prochain (ve'ahavta lere'akha kamokha) se traduit concrètement dans chaque mission de Tsahal.",
                },
                {
                  number: '04',
                  title: 'La Torah forge une identité solide',
                  text: "Un soldat qui sait qui il est — un Juif fier, ancré dans son identité et son histoire — résiste mieux aux pressions psychologiques de l'armée, aux moments de doute, aux épreuves du service. La Torah est l'ancre identitaire la plus solide qui soit.",
                },
                {
                  number: '05',
                  title: "La Torah enseigne l'éthique de combat",
                  text: "Le Tohar HaNesheq (pureté des armes) qui guide l'armée israélienne trouve ses racines dans les valeurs de la Torah. Un soldat qui comprend l'éthique juive de la guerre — protéger les innocents, préserver la dignité humaine même de l'ennemi — est un soldat plus juste et plus digne.",
                },
              ].map((item) => (
                <div key={item.number} className="bg-white rounded-xl p-8 shadow-md flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 font-bold text-lg">
                    {item.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Notre approche Torah-Armée */}
        <section className="section-padding bg-white">
          <div className="container max-w-4xl mx-auto">
            <h2 className="heading-2 mb-8">L&apos;approche Torah-Armée chez Oz LeIsrael</h2>
            <div className="prose prose-lg text-gray-700 max-w-none">
              <p>
                La <strong>mekhina Oz LeIsrael</strong> à <strong>Haïfa</strong> est née d&apos;une
                conviction simple mais puissante : les deux plus grands besoins d&apos;un jeune
                Juif francophone qui fait son alyah et intègre <strong>Tsahal</strong> sont
                l&apos;enracinement spirituel et la préparation physique.
              </p>
              <p>
                Sous la direction du <strong>Rav Zini</strong>, notre programme journalier combine :
              </p>
              <ul>
                <li>
                  <strong>Matin</strong> : étude de Torah (Talmud, Halakha, pensée juive) — 4 à 5
                  heures par jour, dans un cadre exigeant mais bienveillant
                </li>
                <li>
                  <strong>Après-midi</strong> : entraînement physique intensif — Krav Maga, course,
                  natation, musculation, simulation des tests des Sayerot
                </li>
                <li>
                  <strong>Soirée</strong> : temps communautaire, cours de pensée juive, préparation
                  spirituelle et mentale, chant et fraternité
                </li>
              </ul>
              <p>
                Cette journée type de la <strong>mekhina Torah-armée</strong> d&apos;Oz LeIsrael
                n&apos;est pas une simple juxtaposition de deux activités. C&apos;est une
                expérience intégrée où la Torah nourrit l&apos;entraînement physique, et où
                l&apos;entraînement physique renforce la capacité d&apos;étude. Les deux se
                parlent, s&apos;enrichissent mutuellement, forment une synthèse unique.
              </p>
              <p>
                Ce modèle a fait ses preuves : nos anciens élèves intègrent régulièrement les
                meilleures unités de Tsahal. Plus important encore, ils y arrivent avec une
                identité forte, une motivation claire, et la capacité de tenir dans les moments
                les plus durs du service.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-primary-50">
          <div className="container max-w-3xl mx-auto text-center">
            <h2 className="heading-2 mb-6">Rejoins la Mekhina Torah-Armée Oz LeIsrael</h2>
            <p className="text-xl text-gray-700 mb-8">
              Tu veux servir Tsahal avec les valeurs de la Torah ? La Mekhina Oz LeIsrael à
              Haïfa t&apos;ouvre ses portes. Contacte-nous pour un entretien avec le Rav Zini.
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
                <p className="text-gray-600 text-sm">Tout sur la mekhina avant Tsahal.</p>
              </Link>
              <Link href="/fr/sayerot-preparation" className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-primary-600 mb-1">Sayerot</h3>
                <p className="text-gray-600 text-sm">Préparation aux unités d&apos;élite.</p>
              </Link>
              <Link href="/fr/faq" className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-primary-600 mb-1">FAQ</h3>
                <p className="text-gray-600 text-sm">Toutes vos questions.</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
