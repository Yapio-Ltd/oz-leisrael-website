'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useI18n } from '@/lib/i18n';
import Image from 'next/image';
import Link from 'next/link';
import { FaHeart, FaHandshake, FaStar, FaUsers, FaWhatsapp } from 'react-icons/fa';

const values = [
  {
    icon: FaHeart,
    title: 'Amour de la Torah',
    description:
      "Au cœur de notre programme, l'étude et la pratique de la Torah guident chaque aspect de notre formation. La Torah n'est pas seulement un texte : c'est la boussole du soldat d'élite.",
  },
  {
    icon: FaHandshake,
    title: 'Fraternité',
    description:
      "Nous créons des liens indéfectibles entre les participants, formant une véritable famille. La fraternité forgée à la Mekhina Oz LeIsrael dure toute la vie.",
  },
  {
    icon: FaStar,
    title: 'Excellence',
    description:
      "Nous visons l'excellence dans tous les domaines — spirituel, physique et mental. Chaque participant repart avec un niveau supérieur à ce qu'il pensait pouvoir atteindre.",
  },
  {
    icon: FaUsers,
    title: 'Engagement pour Israël',
    description:
      "Un engagement total envers le peuple juif et l'État d'Israël anime notre mission. Servir Tsahal avec les valeurs de la Torah, c'est le cœur d'Oz LeIsrael.",
  },
];

const testimonialQuotes = [
  {
    quote:
      "Oz LeIsrael transforme des jeunes en leaders, prêts à servir Tsahal avec excellence et les valeurs de la Torah. Le programme allie rigueur spirituelle et préparation physique d'élite.",
    author: 'Rav Avraham Journo',
    role: 'Directeur spirituel partenaire',
  },
  {
    quote:
      "L'alliance entre force physique et spirituelle crée des soldats d'élite complets. Les jeunes issus de la Mekhina Oz LeIsrael se distinguent dans les unités les plus exigeantes de Tsahal.",
    author: 'Colonel (rés.) David Levy',
    role: 'Conseiller militaire',
  },
  {
    quote:
      "Nos élèves intègrent les meilleures unités de Tsahal car ils sont préparés dans toutes les dimensions — corps, esprit et âme. La Mekhina Oz LeIsrael est unique en son genre pour les francophones.",
    author: 'Lior Azoulay',
    role: 'Instructeur en chef',
  },
];

export default function AboutPage() {
  const { t } = useI18n();
  const [missionRef, missionInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [partnerRef, partnerInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [testimonialsRef, testimonialsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary-50 to-primary-100 text-gray-900">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/beit-amidrash.jpg"
            alt="Beit Midrash de la Mekhina Oz LeIsrael à Haïfa"
            fill
            className="object-cover"
          />
        </div>
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="heading-1 mb-4">La Mekhina Oz LeIsrael — Yeshiva avant l&apos;Armée</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Programme de mekhina francophone à Haïfa : former les futurs défenseurs d&apos;Israël
              avec les valeurs de la Torah et une préparation physique d&apos;excellence pour Tsahal.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro SEO section */}
      <section className="section-padding bg-white">
        <div className="container max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              <strong>Oz LeIsrael</strong> est une <strong>mekhina</strong> (מכינה) unique, fondée
              à <strong>Haïfa</strong>, Israël, sous la direction du <strong>Rav Zini</strong>. Ce
              programme de préparation à l&apos;armée israélienne (<strong>Tsahal</strong>) est
              pensé pour les jeunes hommes francophones qui souhaitent allier{' '}
              <strong>étude de la Torah</strong> et{' '}
              <strong>préparation physique &amp; mentale de haut niveau</strong> avant leur service
              militaire.
            </p>
            <p>
              La <strong>mekhina Oz LeIsrael</strong> se distingue par son approche holistique : ici,
              la Torah n&apos;est pas séparée de l&apos;engagement national. Au contraire, la force
              spirituelle et la rigueur physique se renforcent mutuellement pour forger un soldat
              d&apos;élite complet, capable d&apos;intégrer les <strong>Sayerot</strong> (unités
              d&apos;élite de Tsahal) avec les valeurs du peuple juif.
            </p>
            <p>
              En partenariat avec la{' '}
              <a
                href="https://orvishua.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:underline font-semibold"
              >
                Yeshiva Or Vishua
              </a>
              , la mekhina offre un cadre d&apos;étude exceptionnel à Haïfa, au bord de la
              Méditerranée, à deux pas du Technion. Chaque journée alterne entre Kodesh (étude
              approfondie du Talmud, de la Halakha et de la pensée juive) et Hol (entraînement
              physique intensif, Krav Maga, préparation mentale et simulation des tests
              d&apos;unités d&apos;élite).
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section ref={missionRef} className="section-padding bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={missionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <h2 className="heading-2 mb-6">{t('about.mission.title')}</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {t('about.mission.description')}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Notre vision est claire : créer une génération de soldats d&apos;élite qui portent
              en eux la force de la Torah et l&apos;engagement absolu envers leur peuple et leur
              terre. Nous croyons qu&apos;un soldat fort spirituellement est invincible sur le
              terrain.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              La <strong>mekhina armée Oz LeIsrael</strong> accueille chaque année des jeunes
              francophones — olim de France, de Belgique, de Suisse, du Canada — qui souhaitent
              réaliser leur alyah et servir Tsahal dans les meilleures conditions. Le programme est
              conçu pour maximiser les chances d&apos;intégration dans les{' '}
              <strong>unités d&apos;élite</strong> : Golani, Egoz, Givati, et les{' '}
              <strong>Sayerot</strong>.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={missionInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={missionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-10 h-10 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Partner Section */}
      <section ref={partnerRef} className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={partnerInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-2 mb-6">{t('about.partner.title')}</h2>
              <p className="text-lg text-gray-700 mb-6">
                Notre partenariat avec la{' '}
                <a
                  href="https://orvishua.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700 font-semibold underline"
                >
                  Yeshiva Or Vishua
                </a>{' '}
                offre à la <strong>mekhina Oz LeIsrael</strong> un cadre d&apos;étude et de
                développement spirituel exceptionnel à Haïfa. Reconnue pour son excellence dans
                l&apos;enseignement de la Torah, Or Vishua accueille des étudiants du monde entier
                dans un environnement moderne et inspirant.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2 font-bold">✓</span>
                  <span>Rabbins de renommée internationale — dont le Rav Zini</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2 font-bold">✓</span>
                  <span>Programme d&apos;étude Torah structuré et intensif (Talmud, Halakha, pensée juive)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2 font-bold">✓</span>
                  <span>Infrastructure moderne à Haïfa, proche du Technion et de la mer</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2 font-bold">✓</span>
                  <span>Communauté chaleureuse de jeunes francophones</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2 font-bold">✓</span>
                  <span>Préparation physique quotidienne pour Tsahal et les Sayerot</span>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors text-center"
                >
                  Rejoindre la mekhina
                </Link>
                <a
                  href="https://wa.me/972585767105"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
                >
                  <FaWhatsapp size={18} />
                  WhatsApp
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={partnerInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/yeshiva-or-vishua.jpg"
                  alt="La Mekhina Oz LeIsrael en partenariat avec la Yeshiva Or Vishua à Haïfa"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="text-center">
                  <p className="font-display text-2xl font-bold text-primary-600">La mekhina</p>
                  <p className="font-display text-2xl font-bold text-primary-600">Oz LeIsrael</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Internal links SEO */}
      <section className="section-padding bg-gray-50">
        <div className="container max-w-4xl mx-auto">
          <h2 className="heading-2 text-center mb-8">En savoir plus sur notre programme</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/fr/mekhina-armee"
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100"
            >
              <h3 className="font-bold text-lg text-primary-600 mb-2">Mekhina pour l&apos;armée</h3>
              <p className="text-gray-600 text-sm">Comprendre ce qu&apos;est une mekhina et pourquoi c&apos;est essentiel avant Tsahal.</p>
            </Link>
            <Link
              href="/fr/torah-et-armee"
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100"
            >
              <h3 className="font-bold text-lg text-primary-600 mb-2">Torah et armée</h3>
              <p className="text-gray-600 text-sm">Pourquoi étudier la Torah avant de servir dans Tsahal renforce votre engagement.</p>
            </Link>
            <Link
              href="/fr/sayerot-preparation"
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100"
            >
              <h3 className="font-bold text-lg text-primary-600 mb-2">Préparation Sayerot</h3>
              <p className="text-gray-600 text-sm">Notre entraînement physique intense pour intégrer les unités d&apos;élite de Tsahal.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="section-padding bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="heading-2">{t('about.testimonials.title')}</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonialQuotes.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-gray-50 p-8 rounded-lg shadow-lg"
              >
                <svg
                  className="w-10 h-10 text-primary-500 mb-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-700 italic mb-6">&quot;{testimonial.quote}&quot;</p>
                <div className="border-t pt-4">
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ rapide */}
      <section className="section-padding bg-primary-50">
        <div className="container max-w-3xl mx-auto">
          <h2 className="heading-2 text-center mb-8">Questions fréquentes sur Oz LeIsrael</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-2">Qu&apos;est-ce qu&apos;une mekhina (מכינה) ?</h3>
              <p className="text-gray-700">
                Une mekhina est un programme de préparation annuel ou biannuel en Israël, combinant étude Torah et préparation physique &amp; mentale avant l&apos;intégration à Tsahal. La Mekhina Oz LeIsrael est spécialement conçue pour les jeunes francophones.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-2">Faut-il être oleh pour rejoindre Oz LeIsrael ?</h3>
              <p className="text-gray-700">
                Non — nous accompagnons aussi les futurs olim dans leur démarche d&apos;alyah. Que vous soyez déjà en Israël ou encore en diaspora, contactez-nous pour discuter de votre situation.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-2">Quel est le niveau de Torah requis ?</h3>
              <p className="text-gray-700">
                Aucun niveau minimum imposé — la motivation et le désir de grandir comptent plus que le niveau actuel. Nous accueillons des profils variés et adaptons l&apos;enseignement.
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link href="/fr/faq" className="text-primary-600 hover:underline font-semibold">
              Voir toutes les questions fréquentes →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
