
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

const skills = [
  {
    title: "React & Hooks",
    description: "Sviluppo di componenti riutilizzabili e gestione dello stato con React Hooks",
    icon: <Code className="h-6 w-6 text-portfolio-primary" />,
  },
  {
    title: "State Management",
    description: "Gestione efficiente dello stato dell'applicazione con Redux e Context API",
    icon: <Database className="h-6 w-6 text-portfolio-primary" />,
  },
  {
    title: "Responsive Design",
    description: "Creazione di interfacce responsive e adattive per ogni dispositivo",
    icon: <Layout className="h-6 w-6 text-portfolio-primary" />,
  },
  {
    title: "UI/UX Design",
    description: "Design di interfacce utente intuitive e accattivanti",
    icon: <Palette className="h-6 w-6 text-portfolio-primary" />,
  },
];

const Skills = () => {
  const [isCarousel, setIsCarousel] = useState(false);

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
              {skills.map((skill, index) => (
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
            {skills.map((skill, index) => (
              <SkillCard key={index} {...skill} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
