import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Brain, Lock, BarChart, Globe, Settings } from "lucide-react";
import { useLanguage } from "./LanguageContext";

const Solutions = () => {
  const { language } = useLanguage();

  const solutions = [
    {
      icon: <ShoppingCart className="h-8 w-8" />,
      title: language === 'it' ? "Piattaforme Enterprise Scalabili" : "Scalable Enterprise Platforms",
      description: language === 'it' ?
        "Sviluppo di soluzioni enterprise con architetture DDD, CQRS e microservices. Gestione multi-tenant con RBAC granulare." :
        "Development of enterprise solutions with DDD, CQRS and microservices architectures. Multi-tenant management with granular RBAC."
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: language === 'it' ? "Integrazione AI & Cognitive Services" : "AI & Cognitive Services Integration",
      description: language === 'it' ?
        "Implementazione di servizi cognitivi Azure, OpenAI GPT e Assembly.AI. Speech-to-text, NLP e analisi semantica avanzata." :
        "Implementation of Azure cognitive services, OpenAI GPT and Assembly.AI. Speech-to-text, NLP and advanced semantic analysis."
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: language === 'it' ? "Sistemi Mission-Critical ad Alta Disponibilità" : "High Availability Mission-Critical Systems",
      description: language === 'it' ?
        "Progettazione di sistemi con 99.9% uptime, retry policies resilienti e gestione errori avanzata. Monitoring con Application Insights." :
        "Design of systems with 99.9% uptime, resilient retry policies and advanced error handling. Monitoring with Application Insights."
    }
  ];

  const customSolutions = {
    title: language === 'it' ? "Ottimizzazione Performance & Legacy Code" : "Performance Optimization & Legacy Code",
    description: language === 'it' ?
      "Riduzione dell'85% del codice legacy attraverso refactoring strategico. Ottimizzazione performance del 50% con caching multi-livello e query optimization." :
      "85% legacy code reduction through strategic refactoring. 50% performance optimization with multi-layer caching and query optimization."
  };

  return (
    <section id="solutions" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-purple-100 dark:bg-purple-900/50 rounded-full text-purple-700 dark:text-purple-300 text-sm mb-4">
              {language === 'it' ? 'Soluzioni' : 'Solutions'}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {language === 'it' ? 'Soluzioni Enterprise che posso realizzare' : 'Enterprise Solutions I Can Build'}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {language === 'it' ?
                'Focus su architetture scalabili, integrazione AI e ottimizzazione di sistemi complessi.' :
                'Focus on scalable architectures, AI integration and complex systems optimization.'
              }
            </p>
          </div>

          {/* Solutions Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {solutions.map((solution, index) => (
              <Card key={index} className="border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-purple-100 dark:bg-purple-900/50 rounded-lg text-purple-600 dark:text-purple-400">
                      {solution.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 text-center">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-center text-sm leading-relaxed">
                    {solution.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Custom Solutions Card */}
          <Card className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 border-purple-200 dark:border-purple-700">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-purple-600 rounded-lg">
                  <Settings className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {customSolutions.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                {customSolutions.description}
              </p>
              <Button 
                size="lg" 
                className="bg-purple-600 hover:bg-purple-700 text-white"
                asChild
              >
                <a href="https://calendly.com/riccardo-perniciano/free-call" target="_blank" rel="noopener noreferrer">
                  {language === 'it' ? 'Parliamo del tuo progetto' : 'Let\'s talk about your project'}
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Solutions;