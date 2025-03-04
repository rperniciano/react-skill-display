
import React, { useState } from "react";
import { Briefcase, Calendar, ChevronDown, ChevronUp, GraduationCap, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface TimelineItem {
  id: number;
  title: string;
  organization: string;
  period: string;
  location: string;
  description: string[];
  type: "work" | "education" | "certification";
}

const timelineItems: TimelineItem[] = [
  {
    id: 1,
    title: "REACT DEVELOPER",
    organization: "ALTEN",
    period: "2021 - 2023",
    location: "Roma",
    description: [
      "Progettazione e implementazione di applicazioni Single Page (SPA) utilizzando React e GraphQL, ottimizzando prestazioni e usabilità.",
      "Collaborazione con il team back-end per definire query efficienti e integrare soluzioni personalizzate.",
      "Sviluppo di componenti UI fedeli ai design realizzati su Figma, garantendo una resa visiva impeccabile."
    ],
    type: "work"
  },
  {
    id: 2,
    title: "SOFTWARE ENGINEER / FULL-STACK DEVELOPER",
    organization: "SOFTWARELAB",
    period: "2018 - 2021",
    location: "Cagliari",
    description: [
      "Progettazione e sviluppo di sistemi embedded per la gestione di pagamenti via POS e stampa di report.",
      "Sviluppo di applicazioni in C# e gestione dei database tramite SQL/MySQL, assicurando comunicazioni fluide con vari WebServices.",
      "Redazione di manuali utente e report analitici per il monitoraggio e la risoluzione di eventuali criticità."
    ],
    type: "work"
  },
  {
    id: 3,
    title: "CORSO AVANZATO REACT & TYPESCRIPT",
    organization: "Udemy",
    period: "Gennaio 2020 - Marzo 2020",
    location: "Online",
    description: [
      "Approfondimento delle tecniche avanzate di React con TypeScript",
      "Implementazione di pattern moderni per lo state management",
      "Sviluppo di applicazioni React ottimizzate con considerazioni per performance e accessibilità"
    ],
    type: "education"
  },
  {
    id: 4,
    title: "SVILUPPATORE MOBILE",
    organization: "Virtuard LTD",
    period: "Marzo 2018 – Giugno 2018",
    location: "Cagliari",
    description: [
      "Progettazione e sviluppo di un'applicazione mobile per il caricamento e la visualizzazione di immagini 3D in realtà virtale, direttamente da smartphone.",
      "Implementazione di funzionalità avanzate tramite Unity e C#, integrando librerie Google VR per la gestione di giroscopio e oscilloscopio.",
      "Gestione completa del ciclo di sviluppo, inclusi testing e ottimizzazione del software."
    ],
    type: "work"
  },
  {
    id: 5,
    title: "CERTIFICAZIONE AWS DEVELOPER ASSOCIATE",
    organization: "Amazon Web Services",
    period: "Novembre 2019",
    location: "Online",
    description: [
      "Certificazione per lo sviluppo di applicazioni su AWS Cloud",
      "Competenze validate in servizi come Lambda, DynamoDB, e S3",
      "Implementazione di architetture scalabili e sicure"
    ],
    type: "certification"
  }
];

const getIconByType = (type: TimelineItem["type"]) => {
  switch (type) {
    case "work":
      return <Briefcase className="h-5 w-5" />;
    case "education":
      return <GraduationCap className="h-5 w-5" />;
    case "certification":
      return <Star className="h-5 w-5" />;
    default:
      return <Briefcase className="h-5 w-5" />;
  }
};

const getColorByType = (type: TimelineItem["type"]) => {
  switch (type) {
    case "work":
      return "bg-portfolio-primary text-white";
    case "education":
      return "bg-blue-600 text-white";
    case "certification":
      return "bg-amber-500 text-white";
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
            <Button 
              variant={filter === "certification" ? "default" : "outline"} 
              onClick={() => setFilter("certification")}
            >
              Certificazioni
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
                      <Card className="overflow-hidden hover:shadow-lg transition-shadow bg-background dark:bg-gray-900 dark:border-gray-700">
                        <div className="p-4 flex justify-between items-start">
                          <div>
                            <h3 className="text-lg font-semibold dark:text-white">{item.title}</h3>
                            <p className="text-portfolio-primary font-medium mt-1">
                              {item.organization}, {item.location}
                            </p>
                          </div>
                          <div className="flex items-center gap-1 px-3 py-1 bg-portfolio-secondary/20 dark:bg-gray-800 rounded-full text-sm">
                            <Calendar className="h-4 w-4" />
                            <span>{item.period}</span>
                          </div>
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
