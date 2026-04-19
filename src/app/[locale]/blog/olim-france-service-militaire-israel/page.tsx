import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL, canonicalUrl, buildAlternates, getJsonLdBreadcrumbs } from '@/lib/seo';

export async function generateMetadata(): Promise<Metadata> {
  const canonical = canonicalUrl('/blog/olim-france-service-militaire-israel', 'fr');
  const languages = buildAlternates('/blog/olim-france-service-militaire-israel');
  return {
    title: "Olim de France : Préparer son Service Militaire en Israël | Guide Complet",
    description:
      "Guide complet pour les olim francophones de France qui veulent servir dans Tsahal : procédures d'alyah, inscription à Tsahal, Tzav Rishon, préparation physique, langue et intégration via la Mekhina Oz LeIsrael.",
    keywords: "olim france service militaire israël, alyah tsahal, service militaire oleh, guide tsahal francophone, tzav rishon olim, mekhina olim france, oz leisrael olim",
    alternates: { canonical, languages },
    openGraph: {
      title: "Olim de France — Guide Service Militaire Israël",
      description: "Tout ce qu'un oleh de France doit savoir pour préparer son service dans Tsahal.",
      url: canonical,
      images: [{ url: `${SITE_URL}/images/cover.png`, width: 1200, height: 630, alt: "Olim de France — Guide Tsahal" }],
    },
  };
}

const breadcrumbsData = [
  { name: 'Accueil', url: `${SITE_URL}/fr` },
  { name: 'Blog', url: `${SITE_URL}/fr/blog` },
  { name: 'Olim de France et Tsahal', url: `${SITE_URL}/fr/blog/olim-france-service-militaire-israel` },
];

export default function ArticleOlimFrancePage() {
  const breadcrumbs = getJsonLdBreadcrumbs(breadcrumbsData);
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Olim de France : préparer son service militaire en Israël',
    datePublished: '2024-12-01',
    dateModified: '2024-12-01',
    author: { '@type': 'Organization', name: 'Oz LeIsrael', url: SITE_URL },
    publisher: { '@type': 'Organization', name: 'Oz LeIsrael', url: SITE_URL, logo: { '@type': 'ImageObject', url: `${SITE_URL}/images/logo.png` } },
    description: "Guide complet pour les olim de France souhaitant servir dans Tsahal : alyah, procédures, préparation physique et intégration.",
    inLanguage: 'fr',
    url: `${SITE_URL}/fr/blog/olim-france-service-militaire-israel`,
  };

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
              <span className="text-gray-800 font-medium">Olim de France et Tsahal</span>
            </nav>
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <span>1 décembre 2024</span>
              <span>·</span>
              <span>12 min de lecture</span>
              <span>·</span>
              <span>Guide complet</span>
            </div>
            <h1 className="heading-1 mb-4">
              Olim de France : préparer son Service Militaire en Israël
            </h1>
            <p className="text-xl text-gray-700">
              Guide complet et actualisé pour les Juifs français qui font leur alyah et
              veulent intégrer <strong>Tsahal</strong> dans les meilleures conditions.
              Procédures, préparation, conseils pratiques.
            </p>
          </div>
        </header>

        <div className="section-padding bg-white">
          <div className="container max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-700">

              <div className="bg-primary-50 rounded-xl p-6 mb-8 not-prose">
                <h2 className="text-xl font-bold text-primary-800 mb-3">📌 Points clés de ce guide</h2>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start"><span className="mr-2 text-primary-600">✓</span>Qui peut servir dans Tsahal en tant qu&apos;oleh</li>
                  <li className="flex items-start"><span className="mr-2 text-primary-600">✓</span>Le processus d&apos;alyah et son lien avec Tsahal</li>
                  <li className="flex items-start"><span className="mr-2 text-primary-600">✓</span>Le Tzav Rishon : qu&apos;est-ce que c&apos;est et comment s&apos;y préparer</li>
                  <li className="flex items-start"><span className="mr-2 text-primary-600">✓</span>La préparation physique recommandée</li>
                  <li className="flex items-start"><span className="mr-2 text-primary-600">✓</span>Le rôle de la Mekhina Oz LeIsrael dans ce parcours</li>
                  <li className="flex items-start"><span className="mr-2 text-primary-600">✓</span>Conseils pratiques d&apos;anciens olim</li>
                </ul>
              </div>

              <h2>Qui peut servir dans Tsahal en tant qu&apos;oleh ?</h2>
              <p>
                La première question que se posent les Juifs français qui envisagent l&apos;alyah :
                <em>est-ce que je peux vraiment servir dans Tsahal ?</em>
              </p>
              <p>
                La réponse est oui, sous certaines conditions. Tsahal accepte les olim
                (immigrants juifs en Israël) dans la plupart des cas. Voici les critères
                principaux :
              </p>
              <ul>
                <li><strong>Âge</strong> : les olim peuvent servir jusqu&apos;à 26 ans (hommes) ou 24 ans (femmes) pour le service complet</li>
                <li><strong>Santé</strong> : profil médical (Dapar) évalué lors du Tzav Rishon</li>
                <li><strong>Statut juif</strong> : selon la Loi du Retour (être Juif ou avoir un parent/grand-parent juif)</li>
                <li><strong>Citoyenneté</strong> : obtenir la citoyenneté israélienne via l&apos;alyah est la première étape</li>
              </ul>
              <p>
                Les olim bénéficient de dispositions spéciales : service légèrement raccourci
                (selon l&apos;âge et la situation), accompagnement par un officier dédié aux
                olim (le Kaban), et possibilité de report de service pour intégrer une
                mekhina ou yeshiva.
              </p>

              <h2>Le processus d&apos;alyah : les étapes clés</h2>
              <p>
                Avant de parler de Tsahal, parlons d&apos;alyah. C&apos;est la condition
                préalable pour la grande majorité des olim. Voici les étapes :
              </p>
              <ol>
                <li>
                  <strong>Contact avec l&apos;Agence Juive</strong> : premier rendez-vous pour
                  évaluer votre éligibilité à la Loi du Retour. En France, l&apos;Agence Juive
                  a des bureaux à Paris et plusieurs grandes villes.
                </li>
                <li>
                  <strong>Constitution du dossier</strong> : acte de naissance, preuves de
                  judaïté (certificat de mariage religieux des parents/grands-parents, lettre
                  du rabbin de votre communauté, etc.)
                </li>
                <li>
                  <strong>Entretien et validation</strong> : l&apos;Agence Juive valide votre
                  dossier et vous délivre le droit à l&apos;alyah.
                </li>
                <li>
                  <strong>Vol d&apos;alyah et arrivée en Israël</strong> : L&apos;Agence Juive
                  organise souvent des vols collectifs. À l&apos;arrivée, vous recevez votre
                  Teudat Oleh (carte d&apos;immigrant) et commencez les démarches israéliennes.
                </li>
                <li>
                  <strong>Misrad HaKlita</strong> (Ministère de l&apos;Intégration) : vous
                  enregistre officiellement, vous donne la Teudat Zehut (carte d&apos;identité
                  israélienne) et organise vos aides financières d&apos;intégration (kortsuba,
                  s&apos;il et al).
                </li>
              </ol>
              <p>
                <strong>Timing important</strong> : si vous avez l&apos;intention de rejoindre
                une mekhina avant Tsahal, planifiez votre alyah suffisamment en avance —
                idéalement 6 à 12 mois avant votre date d&apos;incorporation prévue dans Tsahal.
              </p>

              <h2>Le Tzav Rishon : votre première convocation à Tsahal</h2>
              <p>
                Le <strong>Tzav Rishon</strong> (צו ראשון — première convocation) est la
                première étape administrative de votre parcours dans Tsahal. C&apos;est ici
                que Tsahal évalue votre profil et commence à définir votre affectation.
              </p>
              <h3>Qu&apos;est-ce qu&apos;il y a au Tzav Rishon ?</h3>
              <ul>
                <li><strong>Évaluation médicale</strong> : profil de santé complet (Dapar de 21 à 97)</li>
                <li><strong>Tests psychométriques</strong> : raisonnement logique, verbal, mathématique</li>
                <li><strong>Entretien général</strong> : motivations, background, langues parlées</li>
                <li><strong>Entretien Kaban</strong> (pour les olim) : officier spécialisé qui accompagne les immigrants dans leur parcours Tsahal</li>
              </ul>
              <h3>Comment se préparer au Tzav Rishon ?</h3>
              <p>
                La Mekhina Oz LeIsrael vous prépare spécifiquement au Tzav Rishon :
              </p>
              <ul>
                <li>Travail de l&apos;hébreu pour comprendre les questions et répondre clairement</li>
                <li>Simulation des entretiens de motivation</li>
                <li>Préparation physique pour être au meilleur niveau lors de l&apos;évaluation médicale</li>
                <li>Accompagnement dans la compréhension du système Tsahal pour les olim</li>
              </ul>

              <h2>La préparation physique : ne pas arriver à Tsahal non préparé</h2>
              <p>
                L&apos;erreur la plus courante des olim français : arriver à Tsahal sans
                préparation physique sérieuse. Le choc est brutal. L&apos;armée israélienne
                n&apos;est pas une colonie de vacances.
              </p>
              <p>
                Les standards minimaux pour Tsahal :
              </p>
              <ul>
                <li>Course 2 km en moins de 8 minutes 30 (pour un service normal)</li>
                <li>30 pompes et 15 tractions minimum</li>
                <li>Résistance physique sur plusieurs jours avec peu de sommeil</li>
                <li>Marche en charge avec sac à dos et équipement</li>
              </ul>
              <p>
                Si vous visez les <strong>Sayerot</strong>, les standards sont bien plus élevés
                (voir notre <Link href="/fr/sayerot-preparation" className="text-primary-600 hover:underline">guide sur la préparation aux Sayerot</Link>).
              </p>
              <p>
                La <strong>Mekhina Oz LeIsrael</strong> vous amène à ces standards en 6 à 12
                mois d&apos;entraînement progressif et quotidien à <strong>Haïfa</strong>.
              </p>

              <h2>La question de l&apos;hébreu</h2>
              <p>
                L&apos;hébreu est LA compétence la plus sous-estimée par les olim francophones.
                Tsahal fonctionne entièrement en hébreu. Les ordres, les formations, les
                entretiens — tout. Un oleh qui ne comprend pas l&apos;hébreu militaire sera
                systématiquement désavantagé dans les affectations et les promotions.
              </p>
              <p>
                La Mekhina Oz LeIsrael vous plonge dans un environnement mixte
                (français/hébreu) qui vous prépare progressivement. Le Ulpan (cours
                d&apos;hébreu intensif) est également recommandé parallèlement.
              </p>

              <h2>Conseils d&apos;anciens olim de France</h2>
              <blockquote>
                <p>
                  &quot;Mon conseil numéro un : rejoignez une mekhina avant l&apos;armée.
                  J&apos;ai fait la Mekhina Oz LeIsrael et la différence avec des amis qui
                  sont rentrés directement dans Tsahal est énorme. J&apos;étais préparé,
                  eux non. J&apos;ai eu des options, ils ont subi.&quot;
                </p>
                <footer>— Raphaël, oleh de Lyon, Golani</footer>
              </blockquote>
              <blockquote>
                <p>
                  &quot;La Torah à la Mekhina m&apos;a donné une raison profonde de servir.
                  Pas juste &quot;parce que c&apos;est comme ça&quot;. Je savais pourquoi.
                  Dans les moments durs de Tsahal, cette conviction a tout changé.&quot;
                </p>
                <footer>— Jonathan, oleh de Paris, Egoz</footer>
              </blockquote>

              <h2>Le rôle de la Mekhina Oz LeIsrael dans votre parcours</h2>
              <p>
                La <strong>Mekhina Oz LeIsrael</strong> à Haïfa est conçue pour résoudre tous
                les défis que nous venons de décrire. En un programme :
              </p>
              <ul>
                <li>Accompagnement dans les démarches d&apos;alyah et Tsahal</li>
                <li>Préparation physique intensive calibrée pour Tsahal</li>
                <li>Hébreu militaire progressif</li>
                <li>Ancrage identitaire par l&apos;étude de la Torah avec le Rav Zini</li>
                <li>Communauté fraternelle de jeunes francophones dans votre situation</li>
                <li>Réseau d&apos;anciens dans les meilleures unités de Tsahal</li>
              </ul>
              <p>
                C&apos;est pour cela que nous recommandons à tous les olim francophones qui
                veulent intégrer Tsahal de passer par la Mekhina Oz LeIsrael avant de prendre
                leur uniforme.
              </p>

              <h2>Conclusion : ne partez pas sans préparation</h2>
              <p>
                L&apos;alyah et le service dans Tsahal sont l&apos;une des expériences les
                plus enrichissantes et transformatrices qu&apos;un Juif francophone puisse
                vivre. Mais ils méritent une préparation sérieuse.
              </p>
              <p>
                N&apos;attendez pas d&apos;être en Israël pour commencer à vous préparer.
                Contactez la <strong>Mekhina Oz LeIsrael</strong> dès aujourd&apos;hui, depuis
                la France. Un entretien en français avec le Rav Zini vous aidera à
                construire votre plan personnalisé.
              </p>
            </div>

            <div className="mt-12 bg-primary-50 rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Commence ton chemin depuis la France</h2>
              <p className="text-gray-700 mb-6">Un entretien gratuit en français avec le Rav Zini pour planifier votre alyah et Tsahal.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/fr/contact" className="bg-primary-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-primary-700 transition-colors">Formulaire de contact</Link>
                <a href="https://wa.me/972585767105" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-600 transition-colors">WhatsApp direct</a>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200 grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/fr/preparation-tsahal-francophone" className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Tsahal francophone</h3>
                <p className="text-gray-600 text-sm">Guide spécial olim de France.</p>
              </Link>
              <Link href="/fr/mekhina-armee" className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Mekhina armée</h3>
                <p className="text-gray-600 text-sm">Tout sur la mekhina avant Tsahal.</p>
              </Link>
              <Link href="/fr/faq" className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">FAQ</h3>
                <p className="text-gray-600 text-sm">Vos questions, nos réponses.</p>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
