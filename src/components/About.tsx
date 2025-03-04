import React from "react";
import { User, FileText, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
const About = () => {
  return <section id="about" className="py-20 bg-portfolio-background dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-portfolio-primary/20 dark:bg-portfolio-primary/10 p-3 rounded-full">
              <User className="h-8 w-8 text-portfolio-primary" aria-hidden="true" />
            </div>
          </div>
          
          <h2 className="text-4xl font-bold text-portfolio-heading dark:text-white text-center mb-8">
            Chi Sono
          </h2>
          
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="aspect-square rounded-2xl overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80" alt="Sviluppatore React al lavoro" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6">
                  <span className="px-3 py-1 bg-portfolio-primary text-white text-sm rounded-full">
                    5+ anni di esperienza
                  </span>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-portfolio-heading dark:text-white">
                Sviluppatore React Specializzato
              </h3>
              
              <p className="text-portfolio-text dark:text-gray-300">Ciao, sono un sviluppatore frontend con più di 5 anni di esperienza, specializzato in React e tecnologie web moderne. La mia carriera comprende lo sviluppo di Single Page Applications (SPA) con React e GraphQL, sistemi embedded per pagamenti POS, e applicazioni mobile in realtà virtuale.</p>
              
              <p className="text-portfolio-text dark:text-gray-300">Oltre alle competenze tecniche in React, ho esperienza con C#, database SQL/MySQL e integrazione di API. Mi piace lavorare in team e affrontare sfide tecniche complesse, trovando il giusto equilibrio tra design innovativo e soluzioni pratiche.</p>
              
              <p className="text-portfolio-text dark:text-gray-300">Nell'ultimo anno mi sono concentrato particolarmente sull'utilizzo di LLM nel mondo dello sviluppo, integrandole in vari miei progetti, e studiando il loro utilizzo in ambito aziendale.</p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button variant="outline" className="flex items-center gap-2 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800" asChild>
                  <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
                    <FileText className="h-4 w-4" />
                    Scarica CV
                  </a>
                </Button>
                
                <Button className="flex items-center gap-2" asChild>
                  <a href="#contact">
                    <ExternalLink className="h-4 w-4" />
                    Contattami
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;