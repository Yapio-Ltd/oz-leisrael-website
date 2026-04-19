import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL, canonicalUrl, buildAlternates, getJsonLdBreadcrumbs } from '@/lib/seo';

export async function generateMetadata(): Promise<Metadata> {
  const canonical = canonicalUrl('/blog/mekhina-yeshiva-hesder-quel-parcours', 'fr');
  const languages = buildAlternates('/blog/mekhina-yeshiva-hesder-quel-parcours');
  return {
    title: "Mekhina, Yeshiva, Hesder : quel parcours pour quel profil ? | Oz LeIsrael",
    description:
      "Comprendre les différences entre mekhina, yeshiva classique et programme Hesder pour choisir le bon parcours avant Tsahal. Guide complet pour les francophones souhaitant intégrer l'armée israélienne.",
    keywords: "mekhina yeshiva hesder différence, parcours tsahal, mekhina vs yeshiva, hesder programme, choisir mekhina, oz leisrael",
    alternates: { canonical, languages },
    openGraph: {
      title: "Mekhina, Yeshiva, Hesder : quel parcours choisir ?",
      description: "Guide complet pour choisir entre mekhina, yeshiva et hesder avant Tsahal.",
      url: canonical,
      images: [{ url: `${SITE_URL}/images/cover.png`, width: 1200, height: 630, alt: "Mekhina vs Yeshiva vs Hesder" }],
    },
  };
}

const breadcrumbsData = [
  { name: 'Accueil', url: `${SITE_URL}/fr` },
  { name: 'Blog', url: `${SITE_URL}/fr/blog` },
  { name: 'Mekhina, Yeshiva, Hesder', url: `${SITE_URL}/fr/blog/mekhina-yeshiva-hesder-quel-parcours` },
];

export default function ArticleMekhinaVsYeshivaPage() {
  const breadcrumbs = getJsonLdBreadcrumbs(breadcrumbsData);
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Mekhina, Yeshiva, Hesder : quel parcours pour quel profil ?',
    datePublished: '2024-10-15',
    dateModified: '2024-10-15',
    author: { '@type': 'Organization', name: 'Oz LeIsrael', url: SITE_URL },
    publisher: { '@type': 'Organization', name: 'Oz LeIsrael', url: SITE_URL, logo: { '@type': 'ImageObject', url: `${SITE_URL}/images/logo.png` } },
    description: "Comprendre les différences entre une mekhina, une yeshiva classique et un programme Hesder pour choisir le parcours qui correspond à votre profil avant Tsahal.",
    inLanguage: 'fr',
    url: `${SITE_URL}/fr/blog/mekhina-yeshiva-hesder-quel-parcours`,
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
              <span className="text-gray-800 font-medium">Mekhina, Yeshiva, Hesder</span>
            </nav>
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <span>15 octobre 2024</span>
              <span>·</span>
              <span>8 min de lecture</span>
              <span>·</span>
              <span>Par l&apos;équipe Oz LeIsrael</span>
            </div>
            <h1 className="heading-1 mb-4">Mekhina, Yeshiva, Hesder : quel parcours pour quel profil ?</h1>
            <p className="text-xl text-gray-700">
              Vous voulez intégrer Tsahal avec les valeurs de la Torah mais vous ne savez pas
              quel parcours choisir ? Cet article vous guide pas à pas dans les différences entre
              une mekhina, une yeshiva classique et un programme Hesder.
            </p>
          </div>
        </header>

        <div className="section-padding bg-white">
          <div className="container max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-700">

              <h2>Introduction : trois parcours, trois philosophies</h2>
              <p>
                Quand un jeune homme francophone fait son alyah et se prépare à intégrer
                <strong>Tsahal</strong>, il se retrouve face à plusieurs options. Les trois
                plus courantes sont : la <strong>mekhina</strong>, la <strong>yeshiva
                classique</strong> et le programme <strong>Hesder</strong>. Ces trois
                parcours partagent un point commun — la Torah est au centre — mais ils
                diffèrent radicalement dans leur approche de l&apos;armée, dans leur durée
                et dans les profils auxquels ils correspondent.
              </p>
              <p>
                Comprendre ces différences est essentiel pour faire le bon choix et maximiser
                votre expérience dans Tsahal. Voici notre guide complet.
              </p>

              <h2>1. La Mekhina : préparer Tsahal avec Torah et sport</h2>
              <p>
                Le mot <strong>mekhina</strong> (מכינה) signifie « préparation » en hébreu.
                C&apos;est exactement ce qu&apos;elle fait : elle prépare le jeune homme à
                son service militaire, à la fois physiquement, mentalement et spirituellement.
              </p>
              <h3>Durée et structure</h3>
              <p>
                Une mekhina dure généralement entre 6 et 12 mois, juste avant l&apos;entrée à
                Tsahal. Elle n&apos;est pas intégrée dans le service militaire lui-même —
                c&apos;est une année de préparation en amont.
              </p>
              <h3>La journée type à la mekhina</h3>
              <p>
                À la <strong>Mekhina Oz LeIsrael</strong> à Haïfa, la journée se divise en
                deux grandes parties :
              </p>
              <ul>
                <li>
                  <strong>Le Kodesh (matin)</strong> : 4 à 5 heures d&apos;étude Torah
                  intensive — Talmud, Halakha, pensée juive, sous la direction du
                  <strong>Rav Zini</strong>
                </li>
                <li>
                  <strong>Le Hol (après-midi)</strong> : 2 à 3 heures d&apos;entraînement
                  physique — Krav Maga, course, natation, préparation aux tests des
                  Sayerot
                </li>
              </ul>
              <h3>Profil idéal pour la mekhina</h3>
              <p>
                La mekhina est faite pour vous si :
              </p>
              <ul>
                <li>Vous voulez intégrer Tsahal rapidement (service militaire dans l&apos;année)</li>
                <li>Vous visez les <strong>Sayerot ou unités d&apos;élite</strong></li>
                <li>Vous voulez ancrer votre identité juive avant l&apos;armée</li>
                <li>Vous êtes francophone et souhaitez être accompagné en français</li>
                <li>Vous avez besoin d&apos;une préparation physique sérieuse</li>
              </ul>

              <h2>2. La Yeshiva classique : Torah avant tout</h2>
              <p>
                Une <strong>yeshiva classique</strong> est un établissement d&apos;enseignement
                supérieur juif entièrement dédié à l&apos;étude de la Torah. Contrairement à la
                mekhina, elle n&apos;inclut aucune préparation militaire structurée.
              </p>
              <h3>Durée</h3>
              <p>
                Les yeshivot classiques fonctionnent sur plusieurs années — souvent 2 à 4 ans,
                voire plus. Ce n&apos;est pas un programme de transition vers Tsahal, mais une
                formation spirituelle et intellectuelle en profondeur.
              </p>
              <h3>Rapport à Tsahal</h3>
              <p>
                Selon le type de yeshiva, le rapport à Tsahal varie considérablement. Certaines
                yeshivot sont liées à Tsahal via le programme <strong>Hesder</strong> (voir
                ci-dessous). D&apos;autres n&apos;ont aucun lien avec l&apos;armée.
              </p>
              <h3>Profil idéal pour la yeshiva classique</h3>
              <ul>
                <li>Vous souhaitez consacrer plusieurs années à l&apos;étude Torah sans objectif militaire immédiat</li>
                <li>Votre priorité absolue est l&apos;approfondissement spirituel et intellectuel</li>
                <li>Vous n&apos;avez pas de projet militaire défini à court terme</li>
              </ul>

              <h2>3. La Hesder : Torah ET armée, alternés</h2>
              <p>
                Le programme <strong>Hesder</strong> est un arrangement unique en Israël qui
                permet aux jeunes hommes religieux de combiner service militaire et étude Torah
                sur une période de 5 à 6 ans.
              </p>
              <h3>Structure du Hesder</h3>
              <p>
                Le Hesder fonctionne par alternance : périodes d&apos;étude Torah à la yeshiva
                et périodes de service actif dans Tsahal. La durée totale (Torah + armée) est
                d&apos;environ 5 à 6 ans, pour un service militaire effectif de 16 à 17 mois
                (contre 32 mois pour un service régulier).
              </p>
              <h3>Avantages du Hesder</h3>
              <ul>
                <li>Service militaire intégré dans un cadre de vie Torah</li>
                <li>Unités Hesder au sein de Tsahal avec une atmosphère religieuse</li>
                <li>Formation Torah approfondie avant et après chaque période militaire</li>
              </ul>
              <h3>Limites du Hesder</h3>
              <ul>
                <li>Service militaire raccourci (moins de temps en unité)</li>
                <li>Accès limité aux <strong>Sayerot</strong> (les unités d&apos;élite sont généralement réservées aux soldats du service complet)</li>
                <li>Moins adapté pour les olim francophones sans solide background hébreu</li>
              </ul>

              <h2>Comparatif : quelle option choisir ?</h2>
              <div style={{overflowX: 'auto'}}>
                <table style={{width: '100%', borderCollapse: 'collapse'}}>
                  <thead>
                    <tr style={{backgroundColor: '#f0f0f0'}}>
                      <th style={{padding: '12px', textAlign: 'left', border: '1px solid #ddd'}}>Critère</th>
                      <th style={{padding: '12px', textAlign: 'left', border: '1px solid #ddd'}}>Mekhina</th>
                      <th style={{padding: '12px', textAlign: 'left', border: '1px solid #ddd'}}>Yeshiva</th>
                      <th style={{padding: '12px', textAlign: 'left', border: '1px solid #ddd'}}>Hesder</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{padding: '10px', border: '1px solid #ddd'}}>Durée</td>
                      <td style={{padding: '10px', border: '1px solid #ddd'}}>6-12 mois</td>
                      <td style={{padding: '10px', border: '1px solid #ddd'}}>2-4 ans</td>
                      <td style={{padding: '10px', border: '1px solid #ddd'}}>5-6 ans</td>
                    </tr>
                    <tr style={{backgroundColor: '#f9f9f9'}}>
                      <td style={{padding: '10px', border: '1px solid #ddd'}}>Prépa physique</td>
                      <td style={{padding: '10px', border: '1px solid #ddd'}}>Intensive</td>
                      <td style={{padding: '10px', border: '1px solid #ddd'}}>Nulle</td>
                      <td style={{padding: '10px', border: '1px solid #ddd'}}>Légère</td>
                    </tr>
                    <tr>
                      <td style={{padding: '10px', border: '1px solid #ddd'}}>Service Tsahal</td>
                      <td style={{padding: '10px', border: '1px solid #ddd'}}>Complet (32 mois)</td>
                      <td style={{padding: '10px', border: '1px solid #ddd'}}>Variable</td>
                      <td style={{padding: '10px', border: '1px solid #ddd'}}>Raccourci (17 mois)</td>
                    </tr>
                    <tr style={{backgroundColor: '#f9f9f9'}}>
                      <td style={{padding: '10px', border: '1px solid #ddd'}}>Sayerot accessibles</td>
                      <td style={{padding: '10px', border: '1px solid #ddd'}}>Oui</td>
                      <td style={{padding: '10px', border: '1px solid #ddd'}}>Selon profil</td>
                      <td style={{padding: '10px', border: '1px solid #ddd'}}>Limité</td>
                    </tr>
                    <tr>
                      <td style={{padding: '10px', border: '1px solid #ddd'}}>Francophones</td>
                      <td style={{padding: '10px', border: '1px solid #ddd'}}>Oz LeIsrael ✓</td>
                      <td style={{padding: '10px', border: '1px solid #ddd'}}>Quelques options</td>
                      <td style={{padding: '10px', border: '1px solid #ddd'}}>Non spécialisé</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2>Notre recommandation pour les francophones</h2>
              <p>
                Si vous êtes francophone, que vous souhaitez servir dans les meilleures unités
                de <strong>Tsahal</strong> et que vous voulez ancrer votre identité juive avant
                l&apos;armée, la <strong>Mekhina Oz LeIsrael</strong> est le choix évident.
              </p>
              <p>
                Elle vous offre :
              </p>
              <ul>
                <li>Un accompagnement 100% en <strong>français</strong></li>
                <li>Une préparation physique sérieuse pour les <strong>Sayerot</strong></li>
                <li>Une étude Torah de qualité avec le <strong>Rav Zini</strong></li>
                <li>Une communauté de jeunes francophones partageant les mêmes valeurs</li>
                <li>Un service militaire complet (32 mois), ouvrant toutes les portes</li>
              </ul>
              <p>
                La Mekhina Oz LeIsrael, en partenariat avec la{' '}
                <a href="https://orvishua.net/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">
                  Yeshiva Or Vishua
                </a>{' '}
                à Haïfa, est la solution la plus complète pour un francophone qui veut servir
                Tsahal avec excellence et les valeurs de la Torah.
              </p>

              <h2>Conclusion</h2>
              <p>
                Mekhina, yeshiva ou Hesder — chaque parcours a sa place et sa valeur. Mais si
                votre objectif est de servir Tsahal à temps plein, de viser les unités
                d&apos;élite et de le faire en tant que francophone accompagné dans votre
                langue, la réponse est claire : la <strong>Mekhina Oz LeIsrael</strong> à Haïfa.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-bold mb-6">Articles connexes</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link href="/fr/mekhina-armee" className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                  <h3 className="font-bold text-primary-600 mb-2">Mekhina pour l&apos;armée</h3>
                  <p className="text-gray-600 text-sm">Tout sur la mekhina avant Tsahal.</p>
                </Link>
                <Link href="/fr/blog/olim-france-service-militaire-israel" className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                  <h3 className="font-bold text-primary-600 mb-2">Olim de France et Tsahal</h3>
                  <p className="text-gray-600 text-sm">Guide pour préparer votre service militaire.</p>
                </Link>
              </div>
            </div>

            <div className="mt-12 bg-primary-50 rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Prêt à rejoindre la Mekhina Oz LeIsrael ?</h2>
              <p className="text-gray-700 mb-6">Contacte-nous pour un entretien en français avec le Rav Zini.</p>
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
