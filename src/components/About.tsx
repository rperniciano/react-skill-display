import React from "react";
import { portfolioData } from "./portfolio-data";
import { useLanguage } from "./LanguageContext";
import { AnimatedSection } from "./AnimatedSection";
import { StaggeredGrid } from "./StaggeredGrid";

const About = () => {
  const { language } = useLanguage();

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <AnimatedSection animation="fade-in-up" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              Ciao, sono <span className="text-purple-600 dark:text-purple-400">{portfolioData.personal.name}</span>.
              Piacere di conoscerti.
            </h2>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Profile Image */}
            <AnimatedSection animation="scale-in" className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700">
                  <img
                    src="/fotoCurriculum.png"
                    alt={portfolioData.personal.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple-600 rounded-full opacity-20 blur-xl"></div>
              </div>
            </AnimatedSection>

            {/* Right Column - Bio */}
            <AnimatedSection animation="fade-in-up" delay={150} className="space-y-6">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {language === 'it' ? 
                    "Mid-Senior Full Stack Developer con 7+ anni di esperienza nella progettazione e implementazione di soluzioni enterprise scalabili." :
                    "Mid-Senior Full Stack Developer with 7+ years of experience in designing and implementing scalable enterprise solutions."
                  }
                </p>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {language === 'it' ?
                    "Esperto nell'integrazione di servizi cognitivi (Azure AI, OpenAI GPT) e nell'ottimizzazione di architetture complesse. Lead Developer presso FEDRO Software." :
                    "Expert in cognitive services integration (Azure AI, OpenAI GPT) and complex architecture optimization. Lead Developer at FEDRO Software."
                  }
                </p>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {language === 'it' ?
                    "Ho ridotto l'85% del codice legacy attraverso refactoring strategico e implementato un sistema di orchestrazione che gestisce il processing parallelo di centinaia di file audio." :
                    "I reduced 85% of legacy code through strategic refactoring and implemented an orchestration system that manages parallel processing of hundreds of audio files."
                  }
                </p>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {language === 'it' ?
                    "Ho lavorato con team internazionali per clienti come Expedia, sviluppando componenti utilizzati da milioni di utenti. Il mio approccio combina competenze tecniche con una visione strategica per creare soluzioni che risolvono problemi reali." :
                    "I've worked with international teams for clients like Expedia, developing components used by millions of users. My approach combines technical skills with a strategic vision to create solutions that solve real problems."
                  }
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Experience & Skills Section */}
          <div className="mt-20">
            <AnimatedSection animation="fade-in-up" className="text-center mb-12">
              <h3 className="text-3xl font-bold">
                {language === 'it' ? 'Competenze Trasversali' : language === 'es' ? 'Competencias Transversales' : 'Soft Skills'}
              </h3>
            </AnimatedSection>

            <StaggeredGrid className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={100}>
              {/* Technical Communication */}
              <div className="space-y-3 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <h4 className="font-bold text-lg text-purple-600 dark:text-purple-400">
                  {language === 'it' ? 'Comunicazione Tecnica' : language === 'es' ? 'Comunicación Técnica' : 'Technical Communication'}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {language === 'it'
                    ? 'Stakeholder Management, referente tecnico verso clienti non-tecnici. Capacità di tradurre requisiti di business in soluzioni tecniche.'
                    : language === 'es'
                    ? 'Gestión de stakeholders, referente técnico para clientes no técnicos. Capacidad de traducir requisitos de negocio en soluciones técnicas.'
                    : 'Stakeholder Management, technical referent for non-technical clients. Ability to translate business requirements into technical solutions.'}
                </p>
              </div>

              {/* Ownership & Delivery */}
              <div className="space-y-3 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <h4 className="font-bold text-lg text-purple-600 dark:text-purple-400">Ownership & Delivery</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {language === 'it'
                    ? 'Track record di progetti portati da zero a produzione in tempi rapidi (3 mesi per piattaforma enterprise SPRocket).'
                    : language === 'es'
                    ? 'Historial de proyectos llevados de cero a producción en tiempos rápidos (3 meses para plataforma enterprise SPRocket).'
                    : 'Track record of projects delivered from zero to production quickly (3 months for SPRocket enterprise platform).'}
                </p>
              </div>

              {/* International Teams */}
              <div className="space-y-3 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <h4 className="font-bold text-lg text-purple-600 dark:text-purple-400">
                  {language === 'it' ? 'Team Internazionali' : language === 'es' ? 'Equipos Internacionales' : 'International Teams'}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {language === 'it'
                    ? '2 anni in team distribuito 10+ sviluppatori per Expedia Group, metodologia Agile.'
                    : language === 'es'
                    ? '2 años en equipo distribuido de 10+ desarrolladores para Expedia Group, metodología Agile.'
                    : '2 years in distributed team of 10+ developers for Expedia Group, Agile methodology.'}
                </p>
              </div>

              {/* Autonomy & Problem Solving */}
              <div className="space-y-3 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <h4 className="font-bold text-lg text-purple-600 dark:text-purple-400">
                  {language === 'it' ? 'Autonomia & Problem Solving' : language === 'es' ? 'Autonomía & Problem Solving' : 'Autonomy & Problem Solving'}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {language === 'it'
                    ? 'Abitudine a lavorare con alta autonomia su architetture complesse, prendendo decisioni tecniche in prima persona.'
                    : language === 'es'
                    ? 'Acostumbrado a trabajar con alta autonomía en arquitecturas complejas, tomando decisiones técnicas de primera mano.'
                    : 'Accustomed to working with high autonomy on complex architectures, making technical decisions firsthand.'}
                </p>
              </div>
            </StaggeredGrid>

            {/* Languages Section */}
            <AnimatedSection animation="fade-in-up" delay={200} className="mt-12">
              <h3 className="text-2xl font-bold text-center mb-8">
                {language === 'it' ? 'Competenze Linguistiche' : 'Language Skills'}
              </h3>
              <div className="flex flex-wrap justify-center gap-6">
                <div className="px-6 py-3 bg-purple-100 dark:bg-purple-900/50 rounded-lg hover:shadow-lg transition-shadow duration-300">
                  <span className="font-bold text-purple-600 dark:text-purple-400">Italiano:</span>
                  <span className="ml-2 text-gray-700 dark:text-gray-300">Madrelingua</span>
                </div>
                <div className="px-6 py-3 bg-purple-100 dark:bg-purple-900/50 rounded-lg hover:shadow-lg transition-shadow duration-300">
                  <span className="font-bold text-purple-600 dark:text-purple-400">Inglese:</span>
                  <span className="ml-2 text-gray-700 dark:text-gray-300">B2 - Intermedio superiore</span>
                </div>
                <div className="px-6 py-3 bg-purple-100 dark:bg-purple-900/50 rounded-lg hover:shadow-lg transition-shadow duration-300">
                  <span className="font-bold text-purple-600 dark:text-purple-400">Spagnolo:</span>
                  <span className="ml-2 text-gray-700 dark:text-gray-300">B2 - Intermedio superiore</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;