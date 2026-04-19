import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL, canonicalUrl, buildAlternates, getJsonLdBreadcrumbs } from '@/lib/seo';

export async function generateMetadata(): Promise<Metadata> {
  const canonical = canonicalUrl('/blog/journee-mekhina-oz-leisrael-haifa', 'fr');
  const languages = buildAlternates('/blog/journee-mekhina-oz-leisrael-haifa');
  return {
    title: "Une Journée à la Mekhina Oz LeIsrael à Haïfa — Torah & Entraînement",
    description:
      "Plongez dans le quotidien de la Mekhina Oz LeIsrael à Haïfa : lever à l'aube, Torah le matin, Krav Maga et course l'après-midi, fraternité le soir. Une journée type en détail.",
    keywords: "journée mekhina oz leisrael haïfa, quotidien mekhina, programme journalier mekhina, torah entraînement journée type",
    alternates: { canonical, languages },
    openGraph: {
      title: "Une Journée à la Mekhina Oz LeIsrael — Torah & Sport",
      description: "Le quotidien de la Mekhina Oz LeIsrael à Haïfa : Torah, Krav Maga, fraternité.",
      url: canonical,
      images: [{ url: `${SITE_URL}/images/cover.png`, width: 1200, height: 630, alt: "Journée type Mekhina Oz LeIsrael" }],
    },
  };
}

const breadcrumbsData = [
  { name: 'Accueil', url: `${SITE_URL}/fr` },
  { name: 'Blog', url: `${SITE_URL}/fr/blog` },
  { name: 'Une journée à la Mekhina', url: `${SITE_URL}/fr/blog/journee-mekhina-oz-leisrael-haifa` },
];

export default function ArticleJourneeMemkhinaPage() {
  const breadcrumbs = getJsonLdBreadcrumbs(breadcrumbsData);
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Une journée à la Mekhina Oz LeIsrael à Haïfa',
    datePublished: '2024-11-05',
    dateModified: '2024-11-05',
    author: { '@type': 'Organization', name: 'Oz LeIsrael', url: SITE_URL },
    publisher: { '@type': 'Organization', name: 'Oz LeIsrael', url: SITE_URL, logo: { '@type': 'ImageObject', url: `${SITE_URL}/images/logo.png` } },
    description: "Découvrez le quotidien de la Mekhina Oz LeIsrael à Haïfa : Torah le matin, entraînement l'après-midi, fraternité le soir.",
    inLanguage: 'fr',
    url: `${SITE_URL}/fr/blog/journee-mekhina-oz-leisrael-haifa`,
  };

  const schedule = [
    { time: '05:30', title: 'Réveil & Shaharit', desc: "La journée commence à 5h30 par la prière du matin (Shaharit). Commencer la journée par la prière est un pilier de la vie à la Mekhina — elle ancre l'esprit avant que le corps s'engage." },
    { time: '06:30', title: 'Petit-déjeuner communautaire', desc: "Le repas du matin est pris ensemble, en communauté. C'est déjà un moment de renforcement des liens — la fraternité se cultive à table autant qu'à l'entraînement." },
    { time: '07:30 – 12:30', title: 'Kodesh — Étude de la Torah', desc: "Le cœur de la matinée : 5 heures d'étude intensive de la Torah. Talmud, Halakha, pensée juive, philosophie — sous la direction du Rav Zini et des rabbins de la Yeshiva Or Vishua. L'objectif n'est pas juste d'apprendre des textes : c'est de former des hommes ancrés dans leurs valeurs." },
    { time: '12:30', title: 'Déjeuner et temps libre', desc: "Une pause méritée. Le déjeuner est l'occasion d'échanger, de partager les apprentissages du matin, de souffler avant l'après-midi physique." },
    { time: '14:00 – 17:30', title: 'Hol — Entraînement physique', desc: "L'après-midi appartient au corps. Sous la direction des instructeurs physiques de la Mekhina, les 3h30 d'entraînement alternent : Krav Maga, course (5 à 15 km selon le niveau), natation, musculation fonctionnelle, simulation des tests des Sayerot. Progressif mais exigeant." },
    { time: '17:30', title: 'Mincha & douche', desc: "Prière de Mincha en groupe. Le corps est épuisé, l'esprit toujours là. Cette transition corps-esprit est fondamentale dans la philosophie d'Oz LeIsrael." },
    { time: '18:30', title: 'Dîner en communauté', desc: "Le dîner est le moment le plus convivial de la journée. Blagues, histoires, débats — en français, en hébreu, parfois dans les deux. La fraternité se construit ici, dans ces moments simples." },
    { time: '19:30 – 21:30', title: 'Cours du soir & Shiur', desc: "La soirée offre des cours de pensée juive, de préparation mentale, ou des discussions thématiques avec le Rav Zini. Parfois aussi du sport complémentaire (stretching, swimming) selon le programme de la semaine." },
    { time: '22:00', title: 'Arvit & temps personnel', desc: "Prière du soir, puis temps personnel pour l'étude individuelle, les appels en famille, ou simplement le repos. Extinction des lumières à 22h30-23h." },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <article className="min-h-screen pt-20">
        <header className="bg-gradient-to-br from-primary-50 to-primary-100 py-16">
          <div className="container max-w-3xl mx-auto">
            <nav className="text-sm text-gray-500 mb-6" aria-label="Fil d'Ariane">
              <Link href="/fr" className="hover:text-primary-600">Accueil</Link>
              <span className="mx-2">/</span>
              <Link href="/fr/blog" className="hover:text-primary-600">Blog</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-800 font-medium">Une journée à la Mekhina</span>
            </nav>
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <span>5 novembre 2024</span>
              <span>·</span>
              <span>7 min de lecture</span>
            </div>
            <h1 className="heading-1 mb-4">Une journée à la Mekhina Oz LeIsrael à Haïfa</h1>
            <p className="text-xl text-gray-700">
              De 5h30 du matin à 22h30, la vie à la Mekhina Oz LeIsrael est intense,
              rythmée, fraternelle. Voici une journée type, minute par minute.
            </p>
          </div>
        </header>

        <div className="section-padding bg-white">
          <div className="container max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-700 mb-12">
              <p>
                On nous demande souvent : &quot;C&apos;est quoi exactement le quotidien à la
                <strong>Mekhina Oz LeIsrael</strong> ?&quot; La réponse tient en quelques mots :
                intense, structuré, et transformateur. Mais les mots ne suffisent pas. Alors
                voici une journée type, telle qu&apos;elle se vit à <strong>Haïfa</strong>,
                bord de Méditerranée, dans notre programme unique de{' '}
                <strong>Torah et préparation à Tsahal</strong>.
              </p>
            </div>

            {/* Timeline */}
            <div className="space-y-0">
              {schedule.map((item, index) => (
                <div key={item.time} className="flex gap-6">
                  {/* Ligne temporelle */}
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-xs font-bold text-center leading-tight flex-shrink-0">
                      {item.time}
                    </div>
                    {index < schedule.length - 1 && (
                      <div className="w-0.5 h-full bg-primary-200 my-2" />
                    )}
                  </div>
                  {/* Contenu */}
                  <div className="pb-8 flex-1">
                    <h2 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h2>
                    <p className="text-gray-700 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 mt-12">
              <h2>Ce que cette journée forge</h2>
              <p>
                Cette journée type de la <strong>Mekhina Oz LeIsrael</strong> n&apos;est pas
                facile. Elle est conçue pour ne pas l&apos;être. Mais elle est aussi portante,
                fraternelle, et profondément significative.
              </p>
              <p>
                En 6 à 12 mois de ce rythme, les transformations sont remarquables :
              </p>
              <ul>
                <li>Niveau physique : de débutant à capable de passer les tests des <strong>Sayerot</strong></li>
                <li>Niveau Torah : des bases solides pour ancrer son identité juive à vie</li>
                <li>Niveau hébreu : un niveau conversationnel militaire opérationnel</li>
                <li>Niveau mental : résilience, discipline, sens du collectif</li>
                <li>Niveau fraternel : des amis pour la vie, forgés dans la même expérience</li>
              </ul>
              <p>
                C&apos;est cela, la <strong>mekhina armée Oz LeIsrael</strong> à Haïfa. Un
                programme unique, francophone, exigeant et transformateur — au service
                d&apos;un objectif clair : intégrer <strong>Tsahal</strong> au meilleur
                niveau possible, avec les valeurs de la Torah chevillées au corps.
              </p>
            </div>

            <div className="mt-12 bg-primary-50 rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Rejoindre cette aventure</h2>
              <p className="text-gray-700 mb-6">Contacte-nous pour vivre cette expérience unique.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/fr/contact" className="bg-primary-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-primary-700 transition-colors">Candidater</Link>
                <a href="https://wa.me/972585767105" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-600 transition-colors">WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
