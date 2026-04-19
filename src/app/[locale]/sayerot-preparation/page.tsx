import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { SITE_URL, canonicalUrl, buildAlternates, getJsonLdBreadcrumbs } from '@/lib/seo';

export async function generateMetadata(): Promise<Metadata> {
  const canonical = canonicalUrl('/sayerot-preparation', 'fr');
  const languages = buildAlternates('/sayerot-preparation');
  return {
    title: "Préparation aux Sayerot — Unités d'Élite Tsahal | Oz LeIsrael Haïfa",
    description:
      "Intègre les Sayerot — unités d'élite de Tsahal — grâce à la préparation physique et mentale de la Mekhina Oz LeIsrael à Haïfa. Entraînement Kravi, tests de sélection, Torah et mental d'acier.",
    keywords:
      "sayerot préparation, unités d'élite tsahal, sayeret matkal préparation, golani egoz givati, mekhina sayerot, entraînement kravi, sélection tsahal, oz leisrael sayerot, préparation sayerot francophone",
    alternates: { canonical, languages },
    openGraph: {
      title: "Préparation aux Sayerot (Élite Tsahal) — Oz LeIsrael",
      description: "Prépare-toi aux unités d'élite de Tsahal depuis la Mekhina Oz LeIsrael à Haïfa.",
      url: canonical,
      images: [{ url: `${SITE_URL}/images/cover.png`, width: 1200, height: 630, alt: "Préparation Sayerot — Oz LeIsrael" }],
    },
  };
}

const breadcrumbsData = [
  { name: 'Accueil', url: `${SITE_URL}/fr` },
  { name: 'Préparation Sayerot', url: `${SITE_URL}/fr/sayerot-preparation` },
];

export default function SayerotPreparationPage() {
  const breadcrumbs = getJsonLdBreadcrumbs(breadcrumbsData);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      <div className="min-h-screen pt-20">
        {/* Hero */}
        <section className="relative bg-gray-900 py-24">
          <div className="absolute inset-0 opacity-40">
            <Image
              src="/images/hol-training.jpg"
              alt="Entraînement physique intense à la Mekhina Oz LeIsrael — préparation aux Sayerot"
              fill
              className="object-cover"
            />
          </div>
          <div className="container max-w-4xl mx-auto text-center relative z-10">
            <nav className="text-sm text-gray-300 mb-6" aria-label="Fil d'Ariane">
              <Link href="/fr" className="hover:text-white">Accueil</Link>
              <span className="mx-2">/</span>
              <span className="text-white font-medium">Préparation Sayerot</span>
            </nav>
            <h1 className="text-4xl md:text-6xl font-extrabold font-display text-white mb-6 tracking-tight">
              Prépare-toi aux Sayerot —<br />
              Unités d&apos;Élite de Tsahal
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              La <strong>Mekhina Oz LeIsrael</strong> à Haïfa forge des soldats d&apos;exception.
              Notre programme d&apos;entraînement physique et mental, combiné à l&apos;étude de la
              Torah, prépare directement aux tests de sélection des <strong>Sayerot</strong> —
              les unités d&apos;élite de Tsahal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/fr/contact" className="bg-white text-gray-900 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors text-lg">
                Rejoindre la mekhina
              </Link>
              <a href="https://wa.me/972585767105" target="_blank" rel="noopener noreferrer"
                className="bg-green-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-green-600 transition-colors text-lg">
                WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Qu'est-ce que les Sayerot */}
        <section className="section-padding bg-white">
          <div className="container max-w-4xl mx-auto">
            <h2 className="heading-2 mb-8">Qu&apos;est-ce que les Sayerot ?</h2>
            <div className="prose prose-lg text-gray-700 max-w-none">
              <p>
                Les <strong>Sayerot</strong> (סיירות) sont les unités de reconnaissance et
                d&apos;élite de <strong>Tsahal</strong>. Elles regroupent les soldats les plus
                performants, les mieux sélectionnés et les mieux formés de l&apos;armée
                israélienne. Intégrer une Sayeret est l&apos;objectif ultime de nombreux jeunes
                qui rejoignent Tsahal.
              </p>
              <p>
                Parmi les principales Sayerot :
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {[
                { name: "Sayeret Matkal", desc: "L'unité de reconnaissance générale, l'une des plus prestigieuses de Tsahal. Opérations spéciales, renseignement, anti-terrorisme." },
                { name: "Sayeret Golani", desc: "Unité d'élite de la brigade Golani. Réputée pour sa cohésion, sa dureté et ses valeurs. Très recherchée par les olim." },
                { name: "Sayeret Egoz", desc: "Unité de contre-guérilla des forces terrestres. Expertise en combat en terrain difficile et en milieu urbain." },
                { name: "Sayeret Givati", desc: "Unité d'élite de la brigade Givati. Valeurs fortes, rigueur physique et identité juive affirmée." },
                { name: "Sayeret Tzanhanim", desc: "Unité d'élite des parachutistes. Combat aéroporté et missions spéciales. Niveau physique exceptionnel requis." },
                { name: "Shayetet 13", desc: "Unité navale d'élite, l'équivalent des Navy SEALs. Niveau physique et mental extrêmement élevé." },
              ].map((unit) => (
                <div key={unit.name} className="bg-gray-50 rounded-xl p-6 border-l-4 border-primary-500">
                  <h3 className="font-bold text-lg text-primary-700 mb-2">{unit.name}</h3>
                  <p className="text-gray-700 text-sm">{unit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Notre préparation */}
        <section className="section-padding bg-gray-50">
          <div className="container max-w-4xl mx-auto">
            <h2 className="heading-2 mb-8">Notre préparation physique pour les Sayerot</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="prose prose-lg text-gray-700">
                <p>
                  Le programme d&apos;entraînement de la <strong>Mekhina Oz LeIsrael</strong> est
                  conçu en collaboration avec des instructeurs militaires expérimentés et des
                  anciens des meilleures unités de Tsahal. Il est calibré pour préparer directement
                  aux standards des Sayerot.
                </p>
                <p>
                  L&apos;entraînement quotidien est intense mais progressif. On part de votre
                  niveau actuel — qu&apos;il soit débutant ou avancé — pour vous amener, en 6 à
                  12 mois, à un niveau physique qui ouvre les portes des unités d&apos;élite.
                </p>
                <p>
                  Mais notre approche ne s&apos;arrête pas au physique. La{' '}
                  <strong>préparation mentale</strong> est tout aussi importante : la résilience,
                  la gestion du stress, le leadership, le travail d&apos;équipe sous pression —
                  tout cela se travaille à Oz LeIsrael, à travers l&apos;entraînement physique ET
                  l&apos;étude de la Torah.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { title: "Entraînement cardio-vasculaire", items: ["Course quotidienne progressive (5 à 20 km)", "Natation (Méditerranée et piscine)", "Intervals training et fractionné", "Simulation des tests de Tsahal (test 4/6/8)"] },
                  { title: "Force et Krav Maga", items: ["Musculation fonctionnelle militaire", "Krav Maga — techniques de combat rapproché", "Entraînement en charge (sac à dos)", "Escalade et obstacles"] },
                  { title: "Mental et leadership", items: ["Sorties de terrain nocturnes", "Exercices de prise de décision sous pression", "Gestion du stress et de la fatigue", "Leadership et cohésion d'équipe"] },
                ].map((block) => (
                  <div key={block.title} className="bg-white rounded-xl p-6 shadow-md">
                    <h3 className="font-bold text-lg text-primary-700 mb-3">{block.title}</h3>
                    <ul className="space-y-1">
                      {block.items.map((item) => (
                        <li key={item} className="flex items-start text-gray-700 text-sm">
                          <span className="text-green-500 mr-2 flex-shrink-0">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Torah + Sayerot */}
        <section className="section-padding bg-white">
          <div className="container max-w-4xl mx-auto">
            <h2 className="heading-2 mb-8">La Torah : l&apos;arme secrète du soldat d&apos;élite</h2>
            <div className="prose prose-lg text-gray-700 max-w-none">
              <p>
                On pourrait penser que l&apos;étude de la Torah et la préparation aux Sayerot sont
                deux univers opposés. La réalité est tout autre. Les soldats des unités d&apos;élite
                témoignent régulièrement que leur force mentale, leur résilience et leur motivation
                viennent souvent de leurs convictions spirituelles.
              </p>
              <p>
                À la <strong>Mekhina Oz LeIsrael</strong>, le Kodesh (Torah) n&apos;est pas
                optionnel. Il est au cœur du programme, complémentaire à l&apos;entraînement
                physique. L&apos;étude intensive du Talmud développe des capacités cognitives —
                concentration, mémoire, raisonnement logique — directement utiles dans un contexte
                militaire.
              </p>
              <p>
                Plus profondément, la Torah donne la réponse à la question que tout soldat
                d&apos;élite doit pouvoir se poser : <em>pourquoi est-ce que je fais ça ?</em>
                Quand la réponse est ancrée dans l&apos;identité juive, l&apos;amour d&apos;Israël
                et les valeurs de la Torah — elle tient dans les moments les plus durs.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-primary-50">
          <div className="container max-w-3xl mx-auto text-center">
            <h2 className="heading-2 mb-6">Prêt à viser l&apos;élite de Tsahal ?</h2>
            <p className="text-xl text-gray-700 mb-8">
              Le chemin vers les Sayerot commence ici, à la Mekhina Oz LeIsrael à Haïfa.
              Contacte-nous pour un entretien personnalisé.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Link href="/fr/contact" className="bg-primary-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-primary-700 transition-colors text-lg">
                Candidater maintenant
              </Link>
              <a href="https://wa.me/972585767105" target="_blank" rel="noopener noreferrer"
                className="bg-green-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-green-600 transition-colors text-lg">
                WhatsApp direct
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
              <Link href="/fr/mekhina-armee" className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-primary-600 mb-1">Mekhina armée</h3>
                <p className="text-gray-600 text-sm">Tout sur la mekhina avant Tsahal.</p>
              </Link>
              <Link href="/fr/torah-et-armee" className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-primary-600 mb-1">Torah et armée</h3>
                <p className="text-gray-600 text-sm">La Torah forge les meilleurs soldats.</p>
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
