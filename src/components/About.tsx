import React from "react";
import { portfolioData } from "./portfolio-data";
import { useLanguage } from "./LanguageContext";

const About = () => {
  const { language } = useLanguage();

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Ciao, sono <span className="text-purple-600 dark:text-purple-400">{portfolioData.personal.name}</span>. 
            Piacere di conoscerti.
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" 
                    alt={portfolioData.personal.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple-600 rounded-full opacity-20 blur-xl"></div>
              </div>
            </div>

            {/* Right Column - Bio */}
            <div className="space-y-6">
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
            </div>
          </div>

          {/* Experience & Skills Section */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-center mb-12">
              {language === 'it' ? 'Competenze Trasversali' : 'Soft Skills'}
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Communication */}
              <div className="space-y-3 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <h4 className="font-bold text-lg text-purple-600 dark:text-purple-400">Comunicazione</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Eccellenti doti comunicative e di public speaking
                </p>
              </div>

              {/* Teamwork */}
              <div className="space-y-3 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <h4 className="font-bold text-lg text-purple-600 dark:text-purple-400">Teamwork</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Forte attitudine al lavoro in team e leadership
                </p>
              </div>

              {/* Stress Management */}
              <div className="space-y-3 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <h4 className="font-bold text-lg text-purple-600 dark:text-purple-400">Gestione Stress</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Capacità di gestione dello stress e delle priorità
                </p>
              </div>

              {/* Strategic Planning */}
              <div className="space-y-3 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <h4 className="font-bold text-lg text-purple-600 dark:text-purple-400">Pianificazione</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Pianificazione strategica e monitoraggio dei risultati
                </p>
              </div>
            </div>

            {/* Languages Section */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-center mb-8">
                {language === 'it' ? 'Competenze Linguistiche' : 'Language Skills'}
              </h3>
              <div className="flex flex-wrap justify-center gap-6">
                <div className="px-6 py-3 bg-purple-100 dark:bg-purple-900/50 rounded-lg">
                  <span className="font-bold text-purple-600 dark:text-purple-400">Italiano:</span>
                  <span className="ml-2 text-gray-700 dark:text-gray-300">Madrelingua</span>
                </div>
                <div className="px-6 py-3 bg-purple-100 dark:bg-purple-900/50 rounded-lg">
                  <span className="font-bold text-purple-600 dark:text-purple-400">Inglese:</span>
                  <span className="ml-2 text-gray-700 dark:text-gray-300">B2 - Intermedio superiore</span>
                </div>
                <div className="px-6 py-3 bg-purple-100 dark:bg-purple-900/50 rounded-lg">
                  <span className="font-bold text-purple-600 dark:text-purple-400">Spagnolo:</span>
                  <span className="ml-2 text-gray-700 dark:text-gray-300">B2 - Intermedio superiore</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;