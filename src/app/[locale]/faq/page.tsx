import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL, canonicalUrl, buildAlternates, getJsonLdBreadcrumbs } from '@/lib/seo';

export async function generateMetadata(): Promise<Metadata> {
  const canonical = canonicalUrl('/faq', 'fr');
  const languages = buildAlternates('/faq');
  return {
    title: "FAQ — Questions Fréquentes sur la Mekhina Oz LeIsrael | Torah & Tsahal",
    description:
      "Toutes vos questions sur la Mekhina Oz LeIsrael à Haïfa : qu'est-ce qu'une mekhina, différence avec une yeshiva, comment rejoindre le programme Torah-Tsahal, durée, niveau requis, coût, alyah.",
    keywords:
      "faq mekhina, questions mekhina, qu'est-ce qu'une mekhina, mekhina vs yeshiva, rejoindre oz leisrael, programme mekhina durée, mekhina francophone, oz leisrael contact",
    alternates: { canonical, languages },
    openGraph: {
      title: "FAQ Mekhina Oz LeIsrael — Toutes vos questions",
      description: "Réponses à toutes vos questions sur la Mekhina Oz LeIsrael à Haïfa.",
      url: canonical,
      images: [{ url: `${SITE_URL}/images/cover.png`, width: 1200, height: 630, alt: "FAQ — Mekhina Oz LeIsrael" }],
    },
  };
}

const faqs = [
  {
    question: "Qu'est-ce qu'une mekhina (מכינה) ?",
    answer: "Une mekhina est un programme de préparation pré-militaire en Israël, d'une durée de 6 à 12 mois, combinant étude de la Torah et préparation physique & mentale avant l'intégration à Tsahal (armée israélienne). La Mekhina Oz LeIsrael à Haïfa est spécialement conçue pour les jeunes francophones. Le mot mekhina (מכינה) signifie littéralement « préparation » en hébreu.",
  },
  {
    question: "Quelle est la différence entre une mekhina et une yeshiva ?",
    answer: "Une yeshiva est exclusivement axée sur l'étude de la Torah, sans préparation militaire. Une mekhina comme Oz LeIsrael allie l'étude Torah avec une préparation physique et mentale intensive pour Tsahal. La mekhina a un objectif concret : vous préparer à intégrer l'armée israélienne et à viser les meilleures unités (Sayerot). La Mekhina Oz LeIsrael fonctionne en partenariat avec la Yeshiva Or Vishua à Haïfa.",
  },
  {
    question: "Faut-il être oleh (immigrant en Israël) pour rejoindre Oz LeIsrael ?",
    answer: "Non — nous accompagnons aussi les futurs olim dans leur démarche d'alyah. Si vous êtes encore en diaspora (France, Belgique, Suisse, Canada...), nous vous guidons dans les étapes de l'alyah auprès de l'Agence Juive et des procédures de Tsahal pour les olim. Contactez-nous bien avant votre alyah prévue pour que nous puissions préparer votre intégration ensemble.",
  },
  {
    question: "Quelle est la durée du programme Oz LeIsrael ?",
    answer: "Le programme de la Mekhina Oz LeIsrael dure en général une année complète (10 à 12 mois). Des formules adaptées peuvent être envisagées selon votre situation. La plupart des participants arrivent à la mekhina 6 à 12 mois avant leur date d'incorporation à Tsahal.",
  },
  {
    question: "Quel niveau de Torah faut-il avoir pour rejoindre la mekhina ?",
    answer: "Aucun niveau minimum de Torah n'est imposé. Nous accueillons des profils très variés — de ceux qui n'ont jamais étudié le Talmud à ceux qui sortent d'une yeshiva. Ce qui compte, c'est votre motivation, votre désir de grandir et votre engagement envers Israël. Le programme pédagogique s'adapte à chaque participant.",
  },
  {
    question: "Quel est le niveau physique requis pour intégrer Oz LeIsrael ?",
    answer: "Il n'y a pas de niveau minimum strict. Notre programme physique est progressif et s'adapte à votre niveau de départ. Que vous couriez 5 km ou 20 km, nous vous amènerons au niveau requis pour les tests de Tsahal en 6 à 12 mois. Ce qui compte : la motivation et la discipline.",
  },
  {
    question: "Où se trouve la Mekhina Oz LeIsrael ?",
    answer: "La Mekhina Oz LeIsrael est située à Haïfa, troisième ville d'Israël, au nord du pays. Nous opérons en partenariat avec la Yeshiva Or Vishua, une institution d'excellence à Haïfa. La ville est idéale : mer Méditerranée pour la natation, montagnes du Galil pour les randonnées, environnement multiculturel et moderne.",
  },
  {
    question: "Qu'est-ce que les Sayerot et peut-on vraiment les intégrer depuis Oz LeIsrael ?",
    answer: "Les Sayerot sont les unités de reconnaissance et d'élite de Tsahal (Sayeret Matkal, Sayeret Golani, Egoz, Givati, Shayetet 13...). Oui, des anciens élèves de la Mekhina Oz LeIsrael intègrent régulièrement des unités d'élite grâce à la préparation physique intensive et au mental d'acier forgé pendant le programme. Rien n'est garanti, mais notre programme maximise vos chances.",
  },
  {
    question: "En quelle langue se déroule le programme ?",
    answer: "Le programme est principalement en français, ce qui est un avantage majeur pour les francophones de diaspora. Le cours de Torah (Kodesh) est enseigné en français par des rabbins francophones expérimentés, dont le Rav Zini. L'entraînement physique se fait dans les deux langues (français/hébreu) pour préparer à l'immersion dans Tsahal.",
  },
  {
    question: "Quel est le coût du programme Oz LeIsrael ?",
    answer: "Le coût varie selon les situations (oleh, non-oleh, aide de l'Agence Juive). Contactez-nous directement via WhatsApp ou le formulaire de contact pour obtenir les informations financières détaillées et discuter des possibilités d'aide financière pour votre cas spécifique.",
  },
  {
    question: "Comment postuler à la Mekhina Oz LeIsrael ?",
    answer: "La candidature se fait en 3 étapes : 1) Remplir le formulaire de contact sur notre site ou nous contacter via WhatsApp (+972 58 576 7105). 2) Entretien en français avec le Rav Zini pour discuter de votre projet, vos objectifs et votre situation. 3) Acceptation et préparation de votre arrivée à Haïfa. N'attendez pas — les places sont limitées à chaque promotion.",
  },
  {
    question: "Peut-on rejoindre la mekhina depuis la France, sans être encore en Israël ?",
    answer: "Absolument. Beaucoup de nos participants nous contactent depuis la France, la Belgique, la Suisse ou le Canada, bien avant leur alyah. Nous organisons l'entretien de candidature à distance (via WhatsApp/Zoom) et vous accompagnons dans toutes les démarches avant votre arrivée en Israël.",
  },
  {
    question: "Y a-t-il un hébergement prévu ?",
    answer: "Oui, nous vous aidons à trouver un hébergement adapté à Haïfa pour la durée du programme. Les participants vivent en communauté, ce qui renforce les liens fraternels — une valeur fondamentale de la Mekhina Oz LeIsrael.",
  },
  {
    question: "Qu'est-ce qui différencie Oz LeIsrael des autres mekhinas en Israël ?",
    answer: "Oz LeIsrael est la mekhina francophone de référence à Haïfa. Notre double ancrage — Torah approfondie (avec la Yeshiva Or Vishua) et préparation physique d'élite — combiné à un accompagnement 100% en français et une communauté fraternelle de jeunes olim francophones, en fait un programme unique. Le Rav Zini connaît parfaitement les réalités de la diaspora francophone et du système Tsahal.",
  },
  {
    question: "Comment la mekhina prépare-t-elle spécifiquement aux tests de Tsahal pour olim ?",
    answer: "Tsahal a des procédures spécifiques pour les olim (immigrants). La Mekhina Oz LeIsrael vous prépare à l'entretien avec le Kaban (officier de l'armée pour les olim), au profil médical (Tzav Rishon), et aux tests physiques requis. Nous vous aidons à naviguer dans le système pour obtenir le meilleur placement possible.",
  },
];

const breadcrumbsData = [
  { name: 'Accueil', url: `${SITE_URL}/fr` },
  { name: 'FAQ', url: `${SITE_URL}/fr/faq` },
];

export default function FaqPage() {
  const breadcrumbs = getJsonLdBreadcrumbs(breadcrumbsData);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen pt-20">
        {/* Header */}
        <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-16">
          <div className="container max-w-4xl mx-auto text-center">
            <nav className="text-sm text-gray-500 mb-6" aria-label="Fil d'Ariane">
              <Link href="/fr" className="hover:text-primary-600">Accueil</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-800 font-medium">FAQ</span>
            </nav>
            <h1 className="heading-1 mb-4">Questions Fréquentes — Mekhina Oz LeIsrael</h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Toutes les réponses à vos questions sur la <strong>Mekhina Oz LeIsrael</strong> à
              Haïfa : programme, candidature, niveau requis, Tsahal, Sayerot et alyah.
            </p>
          </div>
        </section>

        {/* FAQ List */}
        <section className="section-padding bg-white">
          <div className="container max-w-3xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-8 border border-gray-100 shadow-sm"
                  itemScope
                  itemType="https://schema.org/Question"
                >
                  <h2
                    className="text-xl font-bold text-gray-900 mb-4 flex items-start gap-3"
                    itemProp="name"
                  >
                    <span className="flex-shrink-0 w-8 h-8 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </span>
                    {faq.question}
                  </h2>
                  <div
                    itemScope
                    itemType="https://schema.org/Answer"
                    itemProp="acceptedAnswer"
                  >
                    <p className="text-gray-700 leading-relaxed pl-11" itemProp="text">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="section-padding bg-primary-50">
          <div className="container max-w-3xl mx-auto text-center">
            <h2 className="heading-2 mb-6">Vous n&apos;avez pas trouvé votre réponse ?</h2>
            <p className="text-xl text-gray-700 mb-8">
              Contactez directement le Rav Zini en français. Un entretien personnalisé est la
              meilleure façon de répondre à toutes vos questions spécifiques.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Link href="/fr/contact" className="bg-primary-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-primary-700 transition-colors text-lg">
                Formulaire de contact
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
              <Link href="/fr/preparation-tsahal-francophone" className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-primary-600 mb-1">Tsahal francophone</h3>
                <p className="text-gray-600 text-sm">Guide pour les olim de France.</p>
              </Link>
              <Link href="/fr/blog" className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-primary-600 mb-1">Notre blog</h3>
                <p className="text-gray-600 text-sm">Articles et guides sur la mekhina.</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
