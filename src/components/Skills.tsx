
import React, { useState } from "react";
import { Code, Database, Layout, Palette } from "lucide-react";
import SkillCard from "./SkillCard";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Add categories to each skill
const skills = [
  {
    title: "React & Hooks",
    description: "Sviluppo di componenti riutilizzabili e gestione dello stato con React Hooks",
    icon: <Code className="h-6 w-6 text-portfolio-primary" />,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=500&q=60",
    detailedInfo: "Esperienza approfondita con l'ecosistema React, inclusi React Hooks, Context API, e React Router. Sviluppo componenti riutilizzabili, ottimizzati e manutenibili. Implementazione di pattern avanzati per gestire lo stato dell'applicazione e il rendering condizionale.",
    category: "frontend"
  },
  {
    title: "State Management",
    description: "Gestione efficiente dello stato dell'applicazione con Redux e Context API",
    icon: <Database className="h-6 w-6 text-portfolio-primary" />,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=500&q=60",
    detailedInfo: "Competenza nella gestione di stati complessi utilizzando Redux, Redux Toolkit, MobX e Context API. Ottimizzazione delle performance con tecniche come memoization, code splitting e lazy loading. Implementazione di soluzioni scalabili per applicazioni di grandi dimensioni.",
    category: "architecture"
  },
  {
    title: "Responsive Design",
    description: "Creazione di interfacce responsive e adattive per ogni dispositivo",
    icon: <Layout className="h-6 w-6 text-portfolio-primary" />,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=500&q=60",
    detailedInfo: "Sviluppo di interfacce web completamente responsive utilizzando CSS Grid, Flexbox e media queries. Applicazione di principi di Mobile First Design e utilizzo di framework come Tailwind CSS e Bootstrap. Test su diversi dispositivi e dimensioni dello schermo per garantire un'esperienza utente ottimale.",
    category: "design"
  },
  {
    title: "UI/UX Design",
    description: "Design di interfacce utente intuitive e accattivanti",
    icon: <Palette className="h-6 w-6 text-portfolio-primary" />,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500&q=60",
    detailedInfo: "Competenza nella creazione di interfacce utente intuitive e accattivanti con attenzione particolare all'esperienza utente. Conoscenza di strumenti come Figma, Adobe XD e Sketch. Implementazione di principi di accessibilità (WCAG) e design system scalabili.",
    category: "design"
  },
];

// Get unique categories for filter buttons
const categories = ["tutti", ...new Set(skills.map(skill => skill.category))];

const Skills = () => {
  const [isCarousel, setIsCarousel] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("tutti");

  // Filter skills based on selected category
  const filteredSkills = selectedCategory === "tutti" 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  return (
    <section id="skills" className="py-20 bg-portfolio-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold text-portfolio-heading mb-4">
            Le Mie Competenze
          </h2>
          <p className="text-xl text-portfolio-text mb-8">
            Scopri le tecnologie e gli strumenti che utilizzo
          </p>
          
          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className="capitalize"
              >
                {category}
              </Button>
            ))}
          </div>
          
          <Button
            onClick={() => setIsCarousel(!isCarousel)}
            variant="outline"
            className="mb-8"
          >
            {isCarousel ? "Visualizza in colonna" : "Visualizza come carosello"}
          </Button>
        </div>

        {isCarousel ? (
          <Carousel className="max-w-xl mx-auto">
            <CarouselContent>
              {filteredSkills.map((skill, index) => (
                <CarouselItem key={index}>
                  <SkillCard {...skill} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        ) : (
          <div className="grid gap-6 max-w-xl mx-auto">
            {filteredSkills.map((skill, index) => (
              <SkillCard key={index} {...skill} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
