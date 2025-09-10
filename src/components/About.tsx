import React from "react";
import { User, FileText, ExternalLink, Trophy, Target, Sparkles, Code, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { portfolioData } from "./portfolio-data";

const About = () => {
  const highlights = [
    { icon: <Code className="h-5 w-5" />, label: "7+ anni esperienza", value: "Full Stack Development" },
    { icon: <Briefcase className="h-5 w-5" />, label: "Lead Developer", value: "FEDRO Software" },
    { icon: <Trophy className="h-5 w-5" />, label: "85% riduzione", value: "Codice Legacy" },
    { icon: <Target className="h-5 w-5" />, label: "1000+ trascrizioni/ora", value: "AI Processing" }
  ];

  const expertise = [
    { area: "Frontend", skills: ["React", "Angular", "TypeScript", "Next.js"] },
    { area: "Backend", skills: [".NET 9", "Node.js", "C#", "ABP.io"] },
    { area: "AI & Cloud", skills: ["OpenAI", "Azure AI", "Docker", "Elasticsearch"] },
    { area: "Architecture", skills: ["DDD", "CQRS", "Microservices", "Clean Architecture"] }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-center mb-8">
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-3 rounded-full">
              <User className="h-8 w-8 text-white" aria-hidden="true" />
            </div>
          </div>
          
          <h2 className="text-4xl font-bold text-portfolio-heading dark:text-white text-center mb-8">
            Chi Sono
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Bio & Image */}
            <div className="space-y-6">
              {/* Profile Image with Overlay */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&q=80" 
                  alt="Developer workspace" 
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {portfolioData.personal.name}
                  </h3>
                  <p className="text-lg text-gray-200 mb-3">
                    {portfolioData.personal.title}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-green-500/20 text-green-300 border-green-500/50">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                      Disponibile
                    </Badge>
                    <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/50">
                      {portfolioData.personal.location}
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Expertise Areas */}
              <Card className="dark:bg-gray-800/50 dark:border-gray-700">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-purple-500" />
                    Aree di Expertise
                  </h3>
                  <div className="space-y-3">
                    {expertise.map((area, i) => (
                      <div key={i}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold text-sm text-gray-700 dark:text-gray-300">
                            {area.area}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {area.skills.map((skill, j) => (
                            <Badge key={j} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Right Column - Content */}
            <div className="space-y-6">
              {/* Bio */}
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-portfolio-text dark:text-gray-300 leading-relaxed">
                  Ciao! Sono <span className="font-semibold text-purple-600 dark:text-purple-400">Riccardo</span>, 
                  un Full Stack Developer con <span className="font-semibold">oltre 7 anni di esperienza</span> nella 
                  progettazione e implementazione di soluzioni enterprise scalabili.
                </p>
                
                <p className="text-portfolio-text dark:text-gray-300 leading-relaxed">
                  Attualmente sono <span className="font-semibold">Lead Developer presso FEDRO Software</span>, dove 
                  guido lo sviluppo di una piattaforma AI-powered per l'analisi delle chiamate che processa 
                  <span className="font-semibold text-blue-600 dark:text-blue-400"> oltre 1000 trascrizioni all'ora</span>. 
                  Ho ridotto l'85% del codice legacy attraverso refactoring strategico e implementato un sistema di 
                  orchestrazione che gestisce il processing parallelo di centinaia di file audio.
                </p>
                
                <p className="text-portfolio-text dark:text-gray-300 leading-relaxed">
                  La mia esperienza spazia dal frontend con <span className="font-semibold">React e Angular</span>, 
                  al backend con <span className="font-semibold">.NET 9 e Node.js</span>, fino all'integrazione 
                  di <span className="font-semibold">servizi AI come OpenAI GPT e Azure Cognitive Services</span>. 
                  Ho lavorato con team internazionali per clienti come Expedia, sviluppando componenti utilizzati 
                  da milioni di utenti.
                </p>
                
                <p className="text-portfolio-text dark:text-gray-300 leading-relaxed">
                  Sono appassionato di <span className="font-semibold text-green-600 dark:text-green-400">Clean Architecture</span>, 
                  pattern DDD e CQRS, e credo fermamente nell'importanza del testing (raggiungendo regolarmente 
                  coverage superiori all'80%). Nel tempo libero, continuo a studiare le ultime tecnologie, 
                  recentemente completando la Machine Learning Specialization di Stanford.
                </p>
              </div>

              {/* Key Highlights */}
              <div className="grid grid-cols-2 gap-4">
                {highlights.map((item, i) => (
                  <Card key={i} className="dark:bg-gray-800/50 dark:border-gray-700">
                    <CardContent className="pt-4 pb-4">
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-purple-100 dark:bg-purple-900/50 rounded-lg text-purple-600 dark:text-purple-400">
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                            {item.label}
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Languages */}
              <Card className="dark:bg-gray-800/50 dark:border-gray-700">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-bold mb-3">Lingue</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Italiano</span>
                      <Badge variant="secondary">Madrelingua</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Inglese</span>
                      <Badge variant="secondary">B2 - Professionale</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Spagnolo</span>
                      <Badge variant="secondary">B2 - Intermedio</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Button 
                  className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white" 
                  asChild
                >
                  <a href="/CV-Riccardo-Perniciano.pdf" target="_blank" rel="noopener noreferrer">
                    <FileText className="h-4 w-4 mr-2" />
                    Scarica CV Completo
                  </a>
                </Button>
                
                <Button className="flex-1" variant="outline" asChild>
                  <a href="#contact">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Contattami
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;