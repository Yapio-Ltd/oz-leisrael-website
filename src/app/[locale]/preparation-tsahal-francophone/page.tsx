import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { SITE_URL, canonicalUrl, buildAlternates, getJsonLdBreadcrumbs } from '@/lib/seo';

export async function generateMetadata(): Promise<Metadata> {
  const canonical = canonicalUrl('/preparation-tsahal-francophone', 'fr');
  const languages = buildAlternates('/preparation-tsahal-francophone');
  return {
    title: "Préparation Tsahal pour Francophones — Mekhina Oz LeIsrael à Haïfa",
    description:
      "Tu es francophone et tu veux intégrer Tsahal et les Sayerot ? La Mekhina Oz LeIsrael à Haïfa t'accompagne en français : Torah, entraînement physique, procédures olim. Préparation armée israélienne francophone.",
    keywords:
      "préparation tsahal francophone, mekhina francophone, intégrer tsahal français, olim france israël armée, préparation armée israélienne, sayerot francophone, oz leisrael français, alyah tsahal, service militaire israël francophone",
    alternates: { canonical, languages },
    openGraph: {
      title: "Préparation Tsahal pour Francophones — Oz LeIsrael",
      description: "La mekhina francophone de référence à Haïfa pour intégrer Tsahal et les Sayerot.",
      url: canonical,
      images: [{ url: `${SITE_URL}/images/cover.png`, width: 1200, height: 630, alt: "Préparation Tsahal pour francophones" }],
    },
  };
}

const breadcrumbsData = [
  { name: 'Accueil', url: `${SITE_URL}/fr` },
  { name: 'Préparation Tsahal francophone', url: `${SITE_URL}/fr/preparation-tsahal-francophone` },
];

export default function PreparationTsahalFrancophonesPage() {
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
              <span className="text-gray-800 font-medium">Préparation Tsahal francophone</span>
            </nav>
            <h1 className="heading-1 mb-6">
              Tu es Francophone et tu veux Intégrer Tsahal ?
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              La <strong>Mekhina Oz LeIsrael</strong> à <strong>Haïfa</strong> est le programme
              de référence pour les jeunes francophones qui veulent servir dans{' '}
              <strong>Tsahal</strong>. Accompagnement en français, Torah, entraînement physique
              d&apos;élite, et soutien administratif pour l&apos;alyah.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/fr/contact" className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                Je veux rejoindre
              </Link>
              <a href="https://wa.me/972585767105" target="_blank" rel="noopener noreferrer"
                className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-600 transition-colors">
                WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Pourquoi c'est difficile pour un francophone */}
        <section className="section-padding bg-white">
          <div className="container max-w-4xl mx-auto">
            <h2 className="heading-2 mb-8">Les défis spécifiques du francophone qui veut intégrer Tsahal</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="prose prose-lg text-gray-700">
                <p>
                  Intégrer <strong>Tsahal</strong> en tant que francophone présente des défis
                  uniques. Entre la barrière de la langue (l&apos;hébreu militaire est très
                  spécifique), les procédures d&apos;alyah et de Tsahal qui peuvent sembler
                  opaques depuis la diaspora, et le choc culturel d&apos;un environnement 100%
                  israélien — beaucoup de jeunes se retrouvent perdus.
                </p>
                <p>
                  Sans préparation adéquate, un oleh francophone risque de se retrouver dans une
                  unité ordinaire, loin de son potentiel réel, sans avoir pu valoriser ses
                  compétences ni ses ambitions. C&apos;est exactement ce problème que la{' '}
                  <strong>Mekhina Oz LeIsrael</strong> résout.
                </p>
                <p>
                  Chez Oz LeIsrael, l&apos;accompagnement est en <strong>français</strong>.
                  Le Rav Zini et l&apos;équipe parlent français et comprennent parfaitement les
                  réalités des jeunes de la diaspora francophone — leurs forces, leurs faiblesses,
                  leurs besoins spécifiques.
                </p>
              </div>
              <div className="relative h-80 rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/train-kravi.jpg"
                  alt="Entraînement Kravi à la Mekhina Oz LeIsrael — préparation Tsahal pour francophones à Haïfa"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Ce qu'on fait pour toi */}
        <section className="section-padding bg-gray-50">
          <div className="container max-w-4xl mx-auto">
            <h2 className="heading-2 mb-10">Ce que la Mekhina Oz LeIsrael fait pour toi</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Hébreu militaire et vie en Israël",
                  text: "Tu apprends l'hébreu du quotidien et le vocabulaire militaire israélien qui te permettront de t'intégrer naturellement dans Tsahal — sans être le 'français' qui ne comprend pas les ordres.",
                },
                {
                  title: "Torah en français",
                  text: "L'étude de la Torah se fait en français avec des rabbins francophones expérimentés. Tu n'as pas besoin d'un niveau hébreu avancé pour tirer le maximum du programme Kodesh.",
                },
                {
                  title: "Procédures Alyah & Tsahal",
                  text: "On t'accompagne dans les démarches de l'Agence Juive, du Misrad HaKlita et du bureau de Tsahal pour les olim. Tu n'es pas seul face à la bureaucratie israélienne.",
                },
                {
                  title: "Préparation physique d'élite",
                  text: "Notre programme d'entraînement quotidien — Krav Maga, course, natation, musculation — te prépare à passer les tests des meilleures unités de Tsahal, y compris les Sayerot.",
                },
                {
                  title: "Réseau de francophones en Israël",
                  text: "Tu rejoins une communauté de jeunes francophones qui ont fait le même chemin. Ce réseau est inestimable pendant et après Tsahal, pour s'intégrer durablement en Israël.",
                },
                {
                  title: "Soutien psychologique et spirituel",
                  text: "Le passage de la diaspora à l'armée israélienne est intense. Le Rav Zini et l'équipe sont là pour t'accompagner dans ta croissance personnelle, spirituelle et psychologique.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="text-xl font-bold mb-3 text-primary-700">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Parcours type */}
        <section className="section-padding bg-white">
          <div className="container max-w-4xl mx-auto">
            <h2 className="heading-2 mb-8">Le parcours type du francophone qui rejoint Oz LeIsrael</h2>
            <div className="space-y-6">
              {[
                { step: '1', title: "Prise de contact depuis la France (ou autre pays)", text: "Tu nous contactes via WhatsApp ou le formulaire. Un entretien en français avec le Rav Zini est organisé. On évalue ensemble ton projet, tes objectifs et on te présente le programme en détail." },
                { step: '2', title: "Préparation avant l'arrivée en Israël", text: "On t'accompagne dans les démarches d'alyah (si tu n'es pas encore oleh) ou d'inscription à Tsahal. On te prépare mentalement à la transition." },
                { step: '3', title: "Intégration à la Mekhina à Haïfa", text: "Tu arrives à Haïfa. La vie à la mekhina commence : Torah le matin, entraînement l'après-midi, fraternité le soir. Tu es entouré de jeunes francophones qui vivent la même aventure." },
                { step: '4', title: "Montée en niveau physique et spirituel", text: "En 6 à 12 mois, ta condition physique, ton niveau d'hébreu et ton ancrage dans la Torah progressent considérablement. Tu te prépares aux tests de Tsahal avec confiance." },
                { step: '5', title: "Intégration à Tsahal — Objectif unités d'élite", text: "Tu arrives à l'armée israélienne prêt — physiquement, mentalement et spirituellement. Les portes des meilleures unités sont ouvertes devant toi." },
              ].map((item) => (
                <div key={item.step} className="flex gap-6 bg-gray-50 rounded-xl p-6">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-700">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-primary-50">
          <div className="container max-w-3xl mx-auto text-center">
            <h2 className="heading-2 mb-6">Commence ton chemin vers Tsahal depuis la France</h2>
            <p className="text-xl text-gray-700 mb-8">
              Des jeunes francophones de Paris, Lyon, Marseille, Bruxelles, Genève et Montréal
              ont déjà fait ce chemin avec Oz LeIsrael. C&apos;est ton tour.
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
                <h3 className="font-bold text-primary-600 mb-1">Qu&apos;est-ce qu&apos;une mekhina ?</h3>
                <p className="text-gray-600 text-sm">Comprendre le concept de la mekhina.</p>
              </Link>
              <Link href="/fr/yeshiva-haifa-francophone" className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-primary-600 mb-1">Yeshiva à Haïfa</h3>
                <p className="text-gray-600 text-sm">Étude Torah francophone à Haïfa.</p>
              </Link>
              <Link href="/fr/blog/olim-france-service-militaire-israel" className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-primary-600 mb-1">Guide olim de France</h3>
                <p className="text-gray-600 text-sm">Notre guide pour préparer votre service militaire.</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
