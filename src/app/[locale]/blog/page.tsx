import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL, canonicalUrl, buildAlternates, getJsonLdBreadcrumbs } from '@/lib/seo';

export async function generateMetadata(): Promise<Metadata> {
  const canonical = canonicalUrl('/blog', 'fr');
  const languages = buildAlternates('/blog');
  return {
    title: "Blog — Mekhina, Torah & Tsahal | Oz LeIsrael Haïfa",
    description:
      "Articles et guides sur la Mekhina, la Torah et la préparation à Tsahal pour les francophones. Conseils pour intégrer Tsahal, comprendre la mekhina, préparer les Sayerot. Par l'équipe Oz LeIsrael à Haïfa.",
    keywords:
      "blog mekhina, articles torah armée, tsahal francophone, guides préparation armée israël, oz leisrael blog, mekhina guide, sayerot francophone articles",
    alternates: { canonical, languages },
    openGraph: {
      title: "Blog Oz LeIsrael — Mekhina, Torah & Tsahal",
      description: "Guides et articles pour les francophones qui veulent intégrer Tsahal depuis la Mekhina Oz LeIsrael.",
      url: canonical,
      images: [{ url: `${SITE_URL}/images/cover.png`, width: 1200, height: 630, alt: "Blog Oz LeIsrael" }],
    },
  };
}

const articles = [
  {
    slug: 'mekhina-yeshiva-hesder-quel-parcours',
    title: 'Mekhina, Yeshiva, Hesder : quel parcours pour quel profil ?',
    excerpt: 'Comprendre les différences entre une mekhina, une yeshiva classique et un programme Hesder pour choisir le parcours qui correspond à votre profil et vos objectifs dans Tsahal.',
    date: '2024-10-15',
    readTime: '8 min',
    keywords: 'mekhina yeshiva hesder comparaison',
  },
  {
    slug: 'integrer-sayeret-matkal-francophone',
    title: 'Comment intégrer Sayeret Matkal en tant que francophone ?',
    excerpt: 'Le guide complet pour un oleh francophone qui vise Sayeret Matkal ou d\'autres unités d\'élite de Tsahal : préparation physique, niveau hébreu, tests de sélection et conseils pratiques.',
    date: '2024-10-22',
    readTime: '10 min',
    keywords: 'sayeret matkal francophone guide',
  },
  {
    slug: 'journee-mekhina-oz-leisrael-haifa',
    title: 'Une journée à la Mekhina Oz LeIsrael à Haïfa',
    excerpt: 'Plongez dans le quotidien de la Mekhina Oz LeIsrael : lever à l\'aube, étude intensive de la Torah, entraînement physique d\'élite et fraternité le soir. Une journée type en détail.',
    date: '2024-11-05',
    readTime: '7 min',
    keywords: 'journée mekhina oz leisrael haïfa',
  },
  {
    slug: 'torah-armee-vision-rav-zini',
    title: 'Torah et armée : la vision du Rav Zini',
    excerpt: 'Le Rav Zini, fondateur de la Mekhina Oz LeIsrael, partage sa vision profonde du lien entre l\'étude de la Torah et le service militaire dans Tsahal. Un message essentiel pour comprendre Oz LeIsrael.',
    date: '2024-11-18',
    readTime: '9 min',
    keywords: 'rav zini torah armée vision mekhina',
  },
  {
    slug: 'olim-france-service-militaire-israel',
    title: 'Olim de France : préparer son service militaire en Israël',
    excerpt: 'Guide complet pour les olim francophones de France qui veulent servir dans Tsahal : procédures d\'alyah, inscription à Tsahal, préparation physique, langue et intégration. Tout ce qu\'il faut savoir.',
    date: '2024-12-01',
    readTime: '12 min',
    keywords: 'olim france service militaire israël guide tsahal',
  },
];

const breadcrumbsData = [
  { name: 'Accueil', url: `${SITE_URL}/fr` },
  { name: 'Blog', url: `${SITE_URL}/fr/blog` },
];

export default function BlogPage() {
  const breadcrumbs = getJsonLdBreadcrumbs(breadcrumbsData);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      <div className="min-h-screen pt-20">
        <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-16">
          <div className="container max-w-4xl mx-auto text-center">
            <nav className="text-sm text-gray-500 mb-6" aria-label="Fil d'Ariane">
              <Link href="/fr" className="hover:text-primary-600">Accueil</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-800 font-medium">Blog</span>
            </nav>
            <h1 className="heading-1 mb-4">Blog — Mekhina, Torah & Tsahal</h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Guides et articles pour les francophones qui veulent comprendre la mekhina,
              préparer Tsahal et découvrir la vision d&apos;Oz LeIsrael.
            </p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container max-w-4xl mx-auto">
            <div className="grid grid-cols-1 gap-8">
              {articles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/fr/blog/${article.slug}`}
                  className="group bg-gray-50 rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary-200 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span>{article.date}</span>
                    <span>·</span>
                    <span>{article.readTime} de lecture</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors mb-3">
                    {article.title}
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">{article.excerpt}</p>
                  <span className="text-primary-600 font-semibold group-hover:underline">
                    Lire l&apos;article →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-primary-50">
          <div className="container max-w-3xl mx-auto text-center">
            <h2 className="heading-2 mb-6">Rejoindre la Mekhina Oz LeIsrael</h2>
            <p className="text-xl text-gray-700 mb-8">
              Prêt à passer à l&apos;action ? Contacte-nous pour rejoindre le programme.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/fr/contact" className="bg-primary-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-primary-700 transition-colors">
                Candidater
              </Link>
              <a href="https://wa.me/972585767105" target="_blank" rel="noopener noreferrer"
                className="bg-green-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-green-600 transition-colors">
                WhatsApp
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
