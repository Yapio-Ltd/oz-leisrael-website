import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL, canonicalUrl, buildAlternates, getJsonLdBreadcrumbs } from '@/lib/seo';

export async function generateMetadata(): Promise<Metadata> {
  const canonical = canonicalUrl('/blog/torah-armee-vision-rav-zini', 'fr');
  const languages = buildAlternates('/blog/torah-armee-vision-rav-zini');
  return {
    title: "Torah et Armée : la Vision du Rav Zini | Mekhina Oz LeIsrael",
    description:
      "Le Rav Zini, fondateur de la Mekhina Oz LeIsrael à Haïfa, partage sa vision profonde du lien entre l'étude de la Torah et le service militaire dans Tsahal. Un message essentiel.",
    keywords: "rav zini torah armée, vision mekhina, torah tsahal philosophie, oz leisrael rav, fondateur mekhina haïfa, torah force spirituelle armée",
    alternates: { canonical, languages },
    openGraph: {
      title: "Torah et Armée : la vision du Rav Zini — Oz LeIsrael",
      description: "La philosophie du fondateur de la Mekhina Oz LeIsrael sur le lien profond entre Torah et Tsahal.",
      url: canonical,
      images: [{ url: `${SITE_URL}/images/cover.png`, width: 1200, height: 630, alt: "Rav Zini — Torah et armée" }],
    },
  };
}

const breadcrumbsData = [
  { name: 'Accueil', url: `${SITE_URL}/fr` },
  { name: 'Blog', url: `${SITE_URL}/fr/blog` },
  { name: 'Vision du Rav Zini', url: `${SITE_URL}/fr/blog/torah-armee-vision-rav-zini` },
];

export default function ArticleRavZiniPage() {
  const breadcrumbs = getJsonLdBreadcrumbs(breadcrumbsData);
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Torah et armée : la vision du Rav Zini',
    datePublished: '2024-11-18',
    dateModified: '2024-11-18',
    author: { '@type': 'Person', name: 'Rav Zini', worksFor: { '@type': 'Organization', name: 'Oz LeIsrael', url: SITE_URL } },
    publisher: { '@type': 'Organization', name: 'Oz LeIsrael', url: SITE_URL, logo: { '@type': 'ImageObject', url: `${SITE_URL}/images/logo.png` } },
    description: "Le Rav Zini partage sa vision du lien entre Torah et service militaire dans Tsahal.",
    inLanguage: 'fr',
    url: `${SITE_URL}/fr/blog/torah-armee-vision-rav-zini`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <article className="min-h-screen pt-20">
        <header className="bg-gradient-to-br from-primary-900 to-primary-700 py-16 text-white">
          <div className="container max-w-3xl mx-auto">
            <nav className="text-sm text-primary-300 mb-6" aria-label="Fil d'Ariane">
              <Link href="/fr" className="hover:text-white">Accueil</Link>
              <span className="mx-2">/</span>
              <Link href="/fr/blog" className="hover:text-white">Blog</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Vision du Rav Zini</span>
            </nav>
            <div className="flex items-center gap-4 text-sm text-primary-300 mb-4">
              <span>18 novembre 2024</span>
              <span>·</span>
              <span>9 min de lecture</span>
              <span>·</span>
              <span>Par le Rav Zini</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold font-display mb-4">
              Torah et Armée : ma vision
            </h1>
            <p className="text-xl text-primary-200">
              Par le <strong>Rav Zini</strong>, fondateur et directeur spirituel de la
              Mekhina Oz LeIsrael à Haïfa.
            </p>
          </div>
        </header>

        <div className="section-padding bg-white">
          <div className="container max-w-3xl mx-auto">
            {/* Citation d'ouverture */}
            <blockquote className="border-l-4 border-primary-500 pl-8 py-4 my-8 bg-primary-50 rounded-r-xl">
              <p className="text-2xl font-semibold text-gray-900 italic mb-2">
                &quot;Oz LeIsrael — la force d&apos;Israël. Cette force n&apos;est pas
                uniquement physique. Elle est spirituelle, mentale, et ancrée dans la Torah.
                C&apos;est cela, la vision d&apos;Oz LeIsrael.&quot;
              </p>
              <footer className="text-gray-600 font-semibold">— Rav Zini, fondateur de la Mekhina Oz LeIsrael</footer>
            </blockquote>

            <div className="prose prose-lg max-w-none text-gray-700">
              <h2>D&apos;où vient Oz LeIsrael ?</h2>
              <p>
                La <strong>Mekhina Oz LeIsrael</strong> est née d&apos;une conviction simple
                mais profonde : les jeunes Juifs francophones qui font leur alyah et servent
                dans <strong>Tsahal</strong> méritent un programme qui les prépare dans leur
                totalité — corps, esprit et âme.
              </p>
              <p>
                Pendant des années, j&apos;ai observé des jeunes olim francophones arriver en
                Israël avec une énorme motivation mais sans les outils pour la canaliser. La
                langue, le choc culturel, le manque de préparation physique, et parfois un
                sentiment de vide identitaire les fragilisaient dans les moments les plus
                difficiles de l&apos;armée.
              </p>
              <p>
                La réponse à ce constat, c&apos;est <strong>Oz LeIsrael</strong>.
              </p>

              <h2>Ma vision : la Torah comme fondation du soldat</h2>
              <p>
                Je vais vous dire quelque chose que certains trouveront peut-être surprenant :
                je ne suis pas convaincu qu&apos;un soldat sans Torah soit réellement prêt
                pour Tsahal.
              </p>
              <p>
                Pas parce que la Torah enseigne des techniques militaires. Mais parce qu&apos;un
                soldat a besoin de réponses à des questions fondamentales. <em>Pourquoi est-ce
                que je risque ma vie ?</em> <em>Pour quoi est-ce que je combats ?</em>{' '}
                <em>Qu&apos;est-ce qui me rattache à ce pays, à ce peuple ?</em>
              </p>
              <p>
                Ces réponses, la Torah les donne. Elle les ancre dans l&apos;histoire la plus
                longue du monde, dans un lien indéfectible entre le peuple juif et sa terre,
                dans une vision du monde où servir Israël est une <strong>mitzvah</strong> —
                un commandement sacré.
              </p>
              <p>
                Un soldat qui a internalisé ces réponses tient dans les moments les plus durs.
                Il ne craque pas. Il sait pourquoi il est là.
              </p>

              <h2>L&apos;équilibre Kodesh-Hol : deux ailes du même oiseau</h2>
              <p>
                Chez Oz LeIsrael, nous parlons beaucoup du <strong>Kodesh</strong> (l&apos;étude
                Torah) et du <strong>Hol</strong> (la préparation physique). Certains pensent
                que ce sont deux activités distinctes, parallèles. C&apos;est une erreur.
              </p>
              <p>
                Le Kodesh et le Hol sont les deux ailes du même oiseau. Un oiseau ne peut pas
                voler avec une seule aile. Un soldat ne peut pas atteindre son plein potentiel
                sans les deux dimensions.
              </p>
              <p>
                L&apos;étude de la Torah développe des qualités directement utiles dans
                l&apos;armée : la concentration, la rigueur, la capacité à raisonner sous
                pression, le respect de la hiérarchie, le sens du collectif. Et inversement,
                l&apos;entraînement physique renforce la discipline qui permet d&apos;étudier
                sérieusement. Les deux se nourrissent mutuellement.
              </p>

              <h2>Le défi des jeunes francophones</h2>
              <p>
                J&apos;ai une immense admiration pour les jeunes francophones qui font le
                choix de l&apos;alyah et de Tsahal. C&apos;est un chemin difficile, courageux,
                et souvent solitaire au début.
              </p>
              <p>
                Mais ce qui me frappe, c&apos;est que beaucoup de ces jeunes arrivent sans
                avoir eu l&apos;opportunité de vraiment travailler leur identité juive. La
                France, la Belgique, le Canada — les environnements de diaspora ne favorisent
                pas toujours l&apos;approfondissement Torah. Et arriver à Tsahal sans cet
                ancrage, c&apos;est comme partir en randonnée sans boussole.
              </p>
              <p>
                C&apos;est pour cela que la <strong>Mekhina Oz LeIsrael</strong> est pensée
                spécifiquement pour les <strong>francophones</strong>. En français, dans un
                cadre qui comprend vos réalités, avec des rabbins qui connaissent la diaspora
                aussi bien qu&apos;Israël.
              </p>

              <h2>Ce qui me rend fier chaque jour</h2>
              <p>
                Ce qui me remplit de fierté, ce ne sont pas les statistiques. Ce sont les
                messages que je reçois des anciens de la mekhina qui me disent, depuis leur
                unité dans Tsahal :
              </p>
              <blockquote>
                <p>
                  &quot;Rav, les moments les plus durs de l&apos;armée — je m&apos;accrochais à
                  ce que vous nous aviez enseigné. La Torah m&apos;a tenu debout.&quot;
                </p>
              </blockquote>
              <p>
                C&apos;est cela, la mission d&apos;Oz LeIsrael. Former des soldats qui portent
                la Torah dans leur cœur, même au cœur du combat. Des soldats qui savent
                pourquoi ils se battent. Des soldats qui honorent le peuple juif par leur
                engagement et leur excellence.
              </p>

              <h2>Un appel aux jeunes francophones</h2>
              <p>
                Si vous lisez ces lignes et que vous ressentez quelque chose — une aspiration,
                une interrogation, une flamme — c&apos;est peut-être le signe que la{' '}
                <strong>Mekhina Oz LeIsrael</strong> vous attend.
              </p>
              <p>
                Nous ne promettons pas que ce sera facile. Nous promettons que ce sera
                transformateur. Que vous repartirez avec des bases spirituelles solides, un
                corps entraîné, une communauté fraternelle — et la conviction profonde que
                vous avez fait le bon choix.
              </p>
              <p>
                Contactez-nous. La conversation ne coûte rien. L&apos;hésitation, elle, peut
                vous coûter une opportunité unique.
              </p>
              <p>
                <strong>Oz LeIsrael — la force d&apos;Israël vous attend.</strong>
              </p>
            </div>

            <div className="mt-12 bg-primary-50 rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Rejoindre le Rav Zini à Haïfa</h2>
              <p className="text-gray-700 mb-6">Un entretien en français pour commencer votre chemin.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/fr/contact" className="bg-primary-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-primary-700 transition-colors">Candidater</Link>
                <a href="https://wa.me/972585767105" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-600 transition-colors">WhatsApp</a>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/fr/torah-et-armee" className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Torah et armée</h3>
                <p className="text-gray-600 text-sm">Pourquoi la Torah forge les meilleurs soldats.</p>
              </Link>
              <Link href="/fr/about" className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">La Mekhina Oz LeIsrael</h3>
                <p className="text-gray-600 text-sm">Découvrez notre programme et notre équipe.</p>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
