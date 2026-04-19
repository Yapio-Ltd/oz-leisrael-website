import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL, canonicalUrl, buildAlternates, getJsonLdBreadcrumbs } from '@/lib/seo';

export async function generateMetadata(): Promise<Metadata> {
  const canonical = canonicalUrl('/blog/integrer-sayeret-matkal-francophone', 'fr');
  const languages = buildAlternates('/blog/integrer-sayeret-matkal-francophone');
  return {
    title: "Comment intégrer Sayeret Matkal en tant que Francophone ? | Oz LeIsrael",
    description:
      "Le guide complet pour un oleh francophone qui vise Sayeret Matkal ou d'autres Sayerot de Tsahal : préparation physique, tests de sélection, niveau hébreu, conseils pratiques depuis la Mekhina Oz LeIsrael.",
    keywords: "sayeret matkal francophone, intégrer sayerot francophone, guide sayerot, tests sélection sayerot, mekhina sayerot, oz leisrael sayerot",
    alternates: { canonical, languages },
    openGraph: {
      title: "Intégrer Sayeret Matkal — Guide pour Francophones",
      description: "Comment viser les Sayerot de Tsahal en tant que francophone depuis la Mekhina Oz LeIsrael.",
      url: canonical,
      images: [{ url: `${SITE_URL}/images/cover.png`, width: 1200, height: 630, alt: "Sayeret Matkal francophone guide" }],
    },
  };
}

const breadcrumbsData = [
  { name: 'Accueil', url: `${SITE_URL}/fr` },
  { name: 'Blog', url: `${SITE_URL}/fr/blog` },
  { name: 'Intégrer Sayeret Matkal', url: `${SITE_URL}/fr/blog/integrer-sayeret-matkal-francophone` },
];

export default function ArticleSayerotFrancophonePage() {
  const breadcrumbs = getJsonLdBreadcrumbs(breadcrumbsData);
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Comment intégrer Sayeret Matkal en tant que francophone ?',
    datePublished: '2024-10-22',
    dateModified: '2024-10-22',
    author: { '@type': 'Organization', name: 'Oz LeIsrael', url: SITE_URL },
    publisher: { '@type': 'Organization', name: 'Oz LeIsrael', url: SITE_URL, logo: { '@type': 'ImageObject', url: `${SITE_URL}/images/logo.png` } },
    description: "Guide complet pour un oleh francophone qui vise Sayeret Matkal ou les Sayerot de Tsahal.",
    inLanguage: 'fr',
    url: `${SITE_URL}/fr/blog/integrer-sayeret-matkal-francophone`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <article className="min-h-screen pt-20">
        <header className="bg-gradient-to-br from-gray-900 to-gray-800 py-16 text-white">
          <div className="container max-w-3xl mx-auto">
            <nav className="text-sm text-gray-400 mb-6" aria-label="Fil d'Ariane">
              <Link href="/fr" className="hover:text-white">Accueil</Link>
              <span className="mx-2">/</span>
              <Link href="/fr/blog" className="hover:text-white">Blog</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-200">Intégrer les Sayerot</span>
            </nav>
            <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
              <span>22 octobre 2024</span>
              <span>·</span>
              <span>10 min de lecture</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold font-display mb-4">
              Comment intégrer Sayeret Matkal en tant que Francophone ?
            </h1>
            <p className="text-xl text-gray-300">
              Le guide complet — depuis la préparation physique jusqu&apos;aux tests de sélection
              en passant par l&apos;hébreu militaire — pour un oleh francophone qui vise les
              unités d&apos;élite de Tsahal.
            </p>
          </div>
        </header>

        <div className="section-padding bg-white">
          <div className="container max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-700">

              <h2>Le rêve accessible : un francophone dans les Sayerot</h2>
              <p>
                <strong>Sayeret Matkal</strong>. Egoz. Shayetet 13. Ces noms font rêver de
                nombreux jeunes Juifs francophones qui font leur alyah et s&apos;apprêtent à
                intégrer <strong>Tsahal</strong>. Mais est-ce vraiment possible pour un
                francophone d&apos;intégrer ces unités d&apos;élite ? La réponse courte est : oui.
              </p>
              <p>
                La réponse longue, c&apos;est cet article. Parce que la route est exigeante,
                et qu&apos;il vaut mieux la connaître en détail avant de s&apos;y lancer.
              </p>

              <h2>Comprendre les Sayerot : qu&apos;est-ce qu&apos;on cherche vraiment ?</h2>
              <p>
                Les <strong>Sayerot</strong> (סיירות — unités de reconnaissance) sont les
                unités les plus exigeantes de Tsahal. Elles recherchent des profils spécifiques :
              </p>
              <ul>
                <li><strong>Niveau physique exceptionnel</strong> : les tests physiques des Sayerot sont parmi les plus durs au monde</li>
                <li><strong>Mental d&apos;acier</strong> : capacité à tenir sous pression extrême, fatigue et stress</li>
                <li><strong>Leadership</strong> : initiative, décision, responsabilité même dans les situations les plus difficiles</li>
                <li><strong>Intelligence et adaptabilité</strong> : raisonnement rapide, flexibilité</li>
                <li><strong>Motivation profonde</strong> : pourquoi voulez-vous vraiment y aller ?</li>
              </ul>
              <p>
                La bonne nouvelle : ces qualités se travaillent. Et c&apos;est exactement ce que
                la <strong>Mekhina Oz LeIsrael</strong> fait pendant 6 à 12 mois à Haïfa.
              </p>

              <h2>Les défis spécifiques du francophone</h2>
              <p>
                Intégrer les Sayerot en tant que francophone présente des défis particuliers :
              </p>
              <h3>1. La langue — l&apos;obstacle numéro un</h3>
              <p>
                L&apos;armée israélienne fonctionne entièrement en hébreu. Lors de votre
                entretien avec le <strong>Kaban</strong> (officier en charge des olim), lors
                des <strong>Gibushim</strong> (tests de sélection des unités d&apos;élite),
                lors de chaque ordre reçu ou donné — tout est en hébreu militaire.
              </p>
              <p>
                Un niveau B1-B2 minimum est requis pour espérer intégrer une Sayeret. La
                Mekhina Oz LeIsrael prépare à ce niveau par une immersion progressive dans
                l&apos;environnement israélien.
              </p>
              <h3>2. Le profil médical (Dapar)</h3>
              <p>
                Tsahal évalue chaque soldat via un profil médical (Dapar, de 21 à 97). Les
                Sayerot exigent un Dapar élevé (généralement 82 minimum, souvent 97 pour les
                plus exigeantes). Comprendre ce système et optimiser votre évaluation médicale
                est crucial. La Mekhina vous guide dans cette démarche.
              </p>
              <h3>3. La connexion — le réseau israélien</h3>
              <p>
                Dans les Sayerot, une partie des recrutements passe par des recommandations de
                soldats ou d&apos;anciens. Avoir un réseau en Israël — des anciens de la
                Mekhina Oz LeIsrael dans les unités — est un atout réel.
              </p>

              <h2>La préparation physique pour les Sayerot : les standards</h2>
              <p>
                Voici les standards physiques minimaux généralement requis pour passer les
                <strong>Gibushim</strong> (tests de sélection) des principales Sayerot :
              </p>
              <ul>
                <li><strong>Course 2 km</strong> : moins de 7 minutes 30</li>
                <li><strong>Tractions (pull-ups)</strong> : 15 minimum</li>
                <li><strong>Pompes</strong> : 80 en 2 minutes</li>
                <li><strong>Abdominaux</strong> : 100 en 2 minutes</li>
                <li><strong>Nage</strong> : 400 m en moins de 7 minutes</li>
                <li><strong>Marche en charge</strong> : 80 km en 24h avec sac à dos de 20 kg</li>
              </ul>
              <p>
                Ces standards peuvent paraître terrifiants si vous partez de zéro. Mais avec
                6 à 12 mois d&apos;entraînement intensif à la <strong>Mekhina Oz LeIsrael</strong>,
                la très grande majorité de nos participants atteignent ces standards.
              </p>

              <h2>Le processus de sélection à Tsahal pour les Sayerot</h2>
              <p>
                Voici comment fonctionne le processus de sélection dans Tsahal pour les olim
                qui visent les Sayerot :
              </p>
              <ol>
                <li>
                  <strong>Tzav Rishon</strong> (première convocation) : évaluation médicale,
                  psychologique et de profil général. C&apos;est ici que votre Dapar est fixé.
                </li>
                <li>
                  <strong>Entretien Kaban</strong> : l&apos;officier en charge des olim discute
                  de vos aspirations et objectifs dans Tsahal. La Mekhina vous prépare à cet
                  entretien décisif.
                </li>
                <li>
                  <strong>Gibush / Yom Sayeret</strong> : journée (ou plusieurs jours) de tests
                  de sélection spécifiques à l&apos;unité visée. Physique, mental, leadership.
                </li>
                <li>
                  <strong>Entretien de motivation</strong> : pourquoi voulez-vous cette unité ?
                  Votre réponse doit être authentique, ancrée dans vos valeurs.
                </li>
              </ol>

              <h2>Le rôle de la Torah dans cette préparation</h2>
              <p>
                Il serait tentant de penser que la Torah n&apos;a rien à voir avec la
                préparation aux Sayerot. C&apos;est une erreur fondamentale.
              </p>
              <p>
                Les officiers qui conduisent les entretiens de motivation dans les Sayerot
                recherchent des jeunes hommes avec une motivation <em>authentique</em>. Un
                jeune qui sait pourquoi il veut servir Israël — ancré dans son identité juive,
                sa famille, l&apos;histoire du peuple — est infiniment plus convaincant que
                celui qui veut &quot;faire le meilleur&quot; sans savoir pourquoi.
              </p>
              <p>
                La Torah donne cette réponse. L&apos;étude du Kodesh à la{' '}
                <strong>Mekhina Oz LeIsrael</strong> n&apos;est pas déconnectée de la
                préparation aux Sayerot — elle en est le fondement.
              </p>

              <h2>Témoignage : David, 22 ans, oleh de Paris, aujourd&apos;hui dans Egoz</h2>
              <p>
                <em>
                  &quot;J&apos;ai rejoint la Mekhina Oz LeIsrael depuis Paris à 20 ans, sans parler
                  hébreu correctement et avec un niveau physique moyen. Douze mois plus tard,
                  j&apos;ai intégré Egoz. Le Rav Zini m&apos;a donné les outils spirituels pour
                  savoir pourquoi je voulais y aller. L&apos;entraînement physique à Haïfa m&apos;a
                  donné le niveau pour y arriver. Les deux étaient indispensables.&quot;
                </em>
              </p>

              <h2>Conclusion : c&apos;est possible, avec la bonne préparation</h2>
              <p>
                Intégrer les <strong>Sayerot en tant que francophone</strong> est un objectif
                atteignable. Des dizaines de jeunes de France, Belgique et Suisse l&apos;ont
                fait avant vous. Mais cela demande une préparation sérieuse, complète et
                précoce — physique, mentale, linguistique et spirituelle.
              </p>
              <p>
                C&apos;est exactement ce que la <strong>Mekhina Oz LeIsrael</strong> à Haïfa
                offre. Si vous avez cet objectif, contactez-nous maintenant pour un entretien
                avec le Rav Zini.
              </p>
            </div>

            <div className="mt-12 bg-primary-50 rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Tu vises les Sayerot ? Commençons.</h2>
              <p className="text-gray-700 mb-6">Contacte-nous pour un entretien en français avec le Rav Zini.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/fr/contact" className="bg-primary-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-primary-700 transition-colors">Candidater</Link>
                <a href="https://wa.me/972585767105" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-600 transition-colors">WhatsApp</a>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/fr/sayerot-preparation" className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Préparation aux Sayerot</h3>
                <p className="text-gray-600 text-sm">Notre programme d&apos;entraînement pour les unités d&apos;élite.</p>
              </Link>
              <Link href="/fr/preparation-tsahal-francophone" className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Tsahal pour francophones</h3>
                <p className="text-gray-600 text-sm">Guide complet pour les olim de France.</p>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
