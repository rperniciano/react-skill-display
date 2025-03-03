
import React from "react";
import { Briefcase, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  responsibilities: string[];
}

const experiences: Experience[] = [
  {
    company: "ALTEN",
    role: "REACT DEVELOPER",
    period: "2021 - 2023",
    location: "Roma",
    responsibilities: [
      "Progettazione e implementazione di applicazioni Single Page (SPA) utilizzando React e GraphQL, ottimizzando prestazioni e usabilità.",
      "Collaborazione con il team back-end per definire query efficienti e integrare soluzioni personalizzate.",
      "Sviluppo di componenti UI fedeli ai design realizzati su Figma, garantendo una resa visiva impeccabile."
    ]
  },
  {
    company: "SOFTWARELAB",
    role: "SOFTWARE ENGINEER / FULL-STACK DEVELOPER",
    period: "2018 - 2021",
    location: "Cagliari",
    responsibilities: [
      "Progettazione e sviluppo di sistemi embedded per la gestione di pagamenti via POS e stampa di report.",
      "Sviluppo di applicazioni in C# e gestione dei database tramite SQL/MySQL, assicurando comunicazioni fluide con vari WebServices.",
      "Redazione di manuali utente e report analitici per il monitoraggio e la risoluzione di eventuali criticità."
    ]
  },
  {
    company: "Virtuard LTD",
    role: "SVILUPPATORE MOBILE",
    period: "Marzo 2018 – Giugno 2018",
    location: "Cagliari",
    responsibilities: [
      "Progettazione e sviluppo di un'applicazione mobile per il caricamento e la visualizzazione di immagini 3D in realtà virtuale, direttamente da smartphone.",
      "Implementazione di funzionalità avanzate tramite Unity e C#, integrando librerie Google VR per la gestione di giroscopio e oscilloscopio.",
      "Gestione completa del ciclo di sviluppo, inclusi testing e ottimizzazione del software."
    ]
  }
];

const WorkExperience = () => {
  return (
    <section id="experience" className="py-20 bg-portfolio-secondary/30 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-portfolio-primary/20 dark:bg-portfolio-primary/10 p-3 rounded-full">
              <Briefcase className="h-8 w-8 text-portfolio-primary" aria-hidden="true" />
            </div>
          </div>
          
          <h2 className="text-4xl font-bold text-portfolio-heading dark:text-white text-center mb-4">
            Esperienze Lavorative
          </h2>
          
          <p className="text-portfolio-text dark:text-gray-300 text-center max-w-2xl mx-auto mb-12">
            Il mio percorso professionale include diversi ruoli tecnici dove ho potuto sviluppare competenze in React, C#, e sviluppo mobile.
          </p>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow bg-background dark:bg-gray-900 dark:border-gray-700">
                <CardHeader>
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <div>
                      <CardTitle className="text-xl dark:text-white">{exp.role}</CardTitle>
                      <CardDescription className="text-lg text-portfolio-primary font-medium mt-1">
                        {exp.company}, {exp.location}
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-1 px-3 py-1 bg-portfolio-secondary/20 dark:bg-gray-800 rounded-full text-sm">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-2 text-portfolio-text dark:text-gray-300">
                    {exp.responsibilities.map((item, i) => (
                      <li key={i} className="pl-6 relative">
                        <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-portfolio-primary"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
