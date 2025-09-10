
import React, { useState } from "react";
import { Briefcase, Calendar, ChevronDown, ChevronUp, GraduationCap, Star, Building2, Users, TrendingUp, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { portfolioData } from "./portfolio-data";

interface TimelineItem {
  id: number;
  title: string;
  organization: string;
  client?: string;
  period: string;
  location: string;
  description: string[];
  type: "work" | "education" | "certification";
  technologies?: string[];
  highlight?: boolean;
  current?: boolean;
}

const timelineItems: TimelineItem[] = [
  {
    id: 1,
    title: "SOFTWARE ENGINEER - LEAD DEVELOPER",
    organization: "FEDRO Software SRL",
    period: "Gennaio 2025 - Presente",
    location: "Cagliari",
    description: [
      "Lead developer della piattaforma FEDRO CognitiveServices per analisi chiamate con AI",
      "Ridotto l'85% del codice legacy attraverso refactoring con Template Method Pattern",
      "Implementato sistema Hangfire V2 per processing parallelo di 100+ file audio",
      "Raggiunto 99.9% uptime con retry policies e gestione errori resiliente",
      "Sviluppato abstraction layer per multi-provider AI (Azure, Assembly.AI, OpenAI)",
      "Gestione isolata di 50+ tenant con RBAC granulare",
      "Ottimizzato performance del 50% attraverso caching multi-livello e query optimization"
    ],
    type: "work",
    technologies: [".NET 9", "Angular", "ABP.io", "Elasticsearch", "Azure AI", "OpenAI", "Hangfire", "Docker"],
    highlight: true,
    current: true
  },
  {
    id: 2,
    title: "REACT DEVELOPER",
    organization: "ALTEN Italia",
    client: "Expedia Group",
    period: "2021 - 2023",
    location: "Roma (Remoto)",
    description: [
      "Sviluppato componenti React per piattaforma con milioni di utenti",
      "Ottimizzato query GraphQL riducendo latenza API del 40%",
      "Team internazionale di 10+ sviluppatori in metodologia Agile",
      "Implementato testing con Jest e Cypress (coverage 80%+)",
      "Gestione pipeline CI/CD con Spinnaker",
      "Sviluppo di componenti UI fedeli ai design realizzati su Figma"
    ],
    type: "work",
    technologies: ["React", "TypeScript", "GraphQL", "Redux", "Jest", "Cypress"],
    highlight: false
  },
  {
    id: 3,
    title: "SOFTWARE ENGINEER / FULL-STACK DEVELOPER",
    organization: "SOFTWARELAB",
    period: "2018 - 2021",
    location: "Cagliari",
    description: [
      "Progettato sistema POS embedded gestendo 100.000+ transazioni/anno",
      "Sviluppato integrazioni WebServices per comunicazione real-time con sistemi bancari",
      "Ottimizzato database queries migliorando response time del 60%",
      "Creato documentazione tecnica e manuali utente per deployment e manutenzione"
    ],
    type: "work",
    technologies: ["C#", "SQL Server", "MySQL", "REST APIs", "Embedded Systems"]
  },
  {
    id: 4,
    title: "SVILUPPATORE MOBILE",
    organization: "Virtuard LTD",
    period: "Marzo 2018 – Giugno 2018",
    location: "Cagliari",
    description: [
      "Sviluppato app mobile VR per visualizzazione modelli 3D",
      "Implementato gesture recognition con giroscopio e accelerometro",
      "Ottimizzato rendering per 60 FPS stabili su dispositivi mobile"
    ],
    type: "work",
    technologies: ["Unity", "C#", "Google VR SDK"]
  },
  {
    id: 5,
    title: "MACHINE LEARNING SPECIALIZATION",
    organization: "Stanford University via Coursera",
    period: "2023",
    location: "Online",
    description: [
      "Completato corso completo di Machine Learning con Andrew Ng",
      "Studio di algoritmi supervisionati e non supervisionati",
      "Implementazione di neural networks e deep learning"
    ],
    type: "education"
  },
  {
    id: 6,
    title: "REACT ADVANCED + REDUX",
    organization: "Udemy",
    period: "2021",
    location: "Online",
    description: [
      "Approfondimento tecniche avanzate React con TypeScript",
      "Redux, Redux Toolkit, Redux Saga per state management",
      "Performance optimization e best practices"
    ],
    type: "education"
  },
  {
    id: 7,
    title: "DIPLOMA PERITO INFORMATICO",
    organization: "ITIS GIUA",
    period: "2013 - 2018",
    location: "Cagliari",
    description: [
      "Specializzazione in Informatica e Telecomunicazioni",
      "Focus su sviluppo software, reti e database",
      "Progetti pratici in C#, SQL, networking"
    ],
    type: "education"
  }
];

const getIconByType = (type: TimelineItem["type"]) => {
  switch (type) {
    case "work":
      return <Briefcase className="h-5 w-5" />;
    case "education":
      return <GraduationCap className="h-5 w-5" />;
    case "certification":
      return <Award className="h-5 w-5" />;
    default:
      return <Briefcase className="h-5 w-5" />;
  }
};

const getColorByType = (type: TimelineItem["type"]) => {
  switch (type) {
    case "work":
      return "bg-gradient-to-r from-purple-600 to-purple-500 text-white";
    case "education":
      return "bg-gradient-to-r from-blue-600 to-blue-500 text-white";
    case "certification":
      return "bg-gradient-to-r from-green-600 to-green-500 text-white";
    default:
      return "bg-portfolio-primary text-white";
  }
};

const WorkExperience = () => {
  const [openItems, setOpenItems] = useState<number[]>([1]);

  const toggleItem = (id: number) => {
    setOpenItems(prevOpenItems => 
      prevOpenItems.includes(id)
        ? prevOpenItems.filter(itemId => itemId !== id)
        : [...prevOpenItems, id]
    );
  };

  const [filter, setFilter] = useState<TimelineItem["type"] | "all">("all");

  const filteredItems = filter === "all" 
    ? timelineItems 
    : timelineItems.filter(item => item.type === filter);

  return (
    <section id="experience" className="py-20 bg-portfolio-secondary/30 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-portfolio-primary/20 dark:bg-portfolio-primary/10 p-3 rounded-full">
              <Calendar className="h-8 w-8 text-portfolio-primary" aria-hidden="true" />
            </div>
          </div>
          
          <h2 className="text-4xl font-bold text-portfolio-heading dark:text-white text-center mb-4">
            Timeline Professionale
          </h2>
          
          <p className="text-portfolio-text dark:text-gray-300 text-center max-w-2xl mx-auto mb-8">
            Il mio percorso professionale include diversi ruoli tecnici, formazione continua e certificazioni.
          </p>
          
          <div className="flex justify-center gap-2 mb-10">
            <Button 
              variant={filter === "all" ? "default" : "outline"} 
              onClick={() => setFilter("all")}
            >
              Tutto
            </Button>
            <Button 
              variant={filter === "work" ? "default" : "outline"} 
              onClick={() => setFilter("work")}
            >
              Lavoro
            </Button>
            <Button 
              variant={filter === "education" ? "default" : "outline"} 
              onClick={() => setFilter("education")}
            >
              Formazione
            </Button>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-portfolio-primary/30 dark:bg-portfolio-primary/20" />
            
            <div className="space-y-12">
              {filteredItems.map((item, index) => (
                <div key={item.id} className="relative">
                  {/* Timeline dot */}
                  <div className={`absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center ${getColorByType(item.type)}`}>
                    {getIconByType(item.type)}
                  </div>
                  
                  {/* Content card */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'ml-auto pl-8' : 'mr-auto pr-8'}`}>
                    <Collapsible open={openItems.includes(item.id)}>
                      <Card className={`overflow-hidden hover:shadow-xl transition-all ${item.highlight ? 'ring-2 ring-purple-500' : ''} bg-background dark:bg-gray-900 dark:border-gray-700`}>
                        <div className="p-4">
                          <div className="flex justify-between items-start mb-2">
                            <div className="flex-1">
                              {item.current && (
                                <Badge className="mb-2 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                                  Posizione Corrente
                                </Badge>
                              )}
                              <h3 className="text-lg font-bold dark:text-white">{item.title}</h3>
                              <p className="text-purple-600 dark:text-purple-400 font-semibold mt-1">
                                {item.organization}
                              </p>
                              {item.client && (
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                  Cliente: {item.client}
                                </p>
                              )}
                              <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                                {item.location}
                              </p>
                            </div>
                            <div className="flex items-center gap-1 px-3 py-1 bg-portfolio-secondary/20 dark:bg-gray-800 rounded-full text-sm">
                              <Calendar className="h-4 w-4" />
                              <span>{item.period}</span>
                            </div>
                          </div>
                          
                          {item.technologies && (
                            <div className="flex flex-wrap gap-1 mt-3">
                              {item.technologies.slice(0, 4).map((tech, i) => (
                                <Badge key={i} variant="secondary" className="text-xs">
                                  {tech}
                                </Badge>
                              ))}
                              {item.technologies.length > 4 && (
                                <Badge variant="secondary" className="text-xs">
                                  +{item.technologies.length - 4}
                                </Badge>
                              )}
                            </div>
                          )}
                        </div>
                        
                        <CollapsibleTrigger asChild>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="w-full flex items-center justify-center border-t dark:border-gray-700"
                            onClick={() => toggleItem(item.id)}
                          >
                            {openItems.includes(item.id) ? (
                              <>
                                <ChevronUp className="h-4 w-4 mr-1" />
                                <span>Nascondi dettagli</span>
                              </>
                            ) : (
                              <>
                                <ChevronDown className="h-4 w-4 mr-1" />
                                <span>Mostra dettagli</span>
                              </>
                            )}
                          </Button>
                        </CollapsibleTrigger>
                        
                        <CollapsibleContent>
                          <CardContent className="pt-4">
                            <ul className="space-y-2 text-portfolio-text dark:text-gray-300">
                              {item.description.map((desc, i) => (
                                <li key={i} className="pl-6 relative">
                                  <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-portfolio-primary"></span>
                                  {desc}
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </CollapsibleContent>
                      </Card>
                    </Collapsible>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
