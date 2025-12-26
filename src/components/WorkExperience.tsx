import React, { useState } from "react";
import { Briefcase, Calendar, ChevronDown, ChevronUp, GraduationCap, Star, Building2, Users, TrendingUp, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { portfolioData } from "./portfolio-data";
import { useLanguage } from "./LanguageContext";
import { formatPeriod, getJobDescription } from "./translation-utils";
import { AnimatedSection } from "./AnimatedSection";

interface TimelineItem {
  id: number;
  jobId: string;
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

const WorkExperience = () => {
  const { t, language } = useLanguage();
  const [openItems, setOpenItems] = useState<number[]>([1]);
  const [filter, setFilter] = useState<TimelineItem["type"] | "all">("all");

  const timelineItems: TimelineItem[] = [
    {
      id: 1,
      jobId: 'fedro',
      title: "SOLUTION ARCHITECT & TECHNICAL LEAD",
      organization: "FEDRO Software SRL",
      period: "Gennaio 2025 - Presente",
      location: "Cagliari",
      description: getJobDescription('fedro', t),
      type: "work",
      technologies: ["ABP.io", ".NET 9", "Angular", "TypeScript", "Elasticsearch", "Azure AI", "OpenAI", "Assembly.AI", "Hangfire", "Docker"],
      highlight: true,
      current: true
    },
    {
      id: 2,
      jobId: 'alten',
      title: "FRONTEND DEVELOPER",
      organization: "ALTEN Italia",
      client: "Expedia Group",
      period: "2021 - 2023",
      location: language === 'it' ? "Roma (Remoto)" : language === 'es' ? "Roma (Remoto)" : "Rome (Remote)",
      description: getJobDescription('alten', t),
      type: "work",
      technologies: ["React", "TypeScript", "GraphQL", "Jest", "Cypress", "Figma"],
      highlight: false
    },
    {
      id: 3,
      jobId: 'softwarelab',
      title: language === 'it' ? "SOFTWARE DEVELOPER → TECHNICAL REFERENT" : language === 'es' ? "DESARROLLADOR → REFERENTE TÉCNICO" : "SOFTWARE DEVELOPER → TECHNICAL REFERENT",
      organization: "SOFTWARELAB",
      client: "ERSU Cagliari",
      period: "2018 - 2021",
      location: "Cagliari",
      description: getJobDescription('softwarelab', t),
      type: "work",
      technologies: ["C#", "MySQL", "REST APIs", "Embedded Systems", "Integrazione POS"]
    },
    {
      id: 4,
      jobId: 'virtuard',
      title: language === 'it' ? "MOBILE/VR DEVELOPER" : language === 'es' ? "DESARROLLADOR MÓVIL/VR" : "MOBILE/VR DEVELOPER",
      organization: "Virtuard LTD",
      period: "Marzo 2018 – Giugno 2018",
      location: "Cagliari",
      description: getJobDescription('virtuard', t),
      type: "work",
      technologies: ["Unity", "C#", "Google VR SDK", "3D Rendering"]
    },
    {
      id: 5,
      jobId: 'epicode',
      title: "COMPUTER ENGINEERING",
      organization: "Epicode Institute of Technology",
      period: "2025 - Presente",
      location: "Online",
      description: getJobDescription('epicode', t),
      type: "education",
      current: true
    },
    {
      id: 6,
      jobId: 'react-course',
      title: "REACT ADVANCED + REDUX",
      organization: "Udemy",
      period: "2021",
      location: "Online",
      description: getJobDescription('react-course', t),
      type: "education"
    },
    {
      id: 7,
      jobId: 'css-course',
      title: "ADVANCED CSS AND SASS",
      organization: "Udemy",
      period: "2021",
      location: "Online",
      description: getJobDescription('css-course', t),
      type: "education"
    },
    {
      id: 8,
      jobId: 'typescript-course',
      title: "TYPESCRIPT FOR REACT",
      organization: "Udemy",
      period: "2021",
      location: "Online",
      description: getJobDescription('typescript-course', t),
      type: "education"
    },
    {
      id: 9,
      jobId: 'diploma',
      title: language === 'it' ? "DIPLOMA IN INFORMATICA E TELECOMUNICAZIONI" : language === 'es' ? "DIPLOMA EN INFORMÁTICA Y TELECOMUNICACIONES" : "DIPLOMA IN COMPUTER SCIENCE AND TELECOMMUNICATIONS",
      organization: "ITIS GIUA",
      period: "2018",
      location: "Cagliari",
      description: getJobDescription('diploma', t),
      type: "education"
    }
  ];

  const toggleItem = (id: number) => {
    setOpenItems(prevOpenItems => 
      prevOpenItems.includes(id)
        ? prevOpenItems.filter(itemId => itemId !== id)
        : [...prevOpenItems, id]
    );
  };

  const filteredItems = filter === "all" 
    ? timelineItems 
    : timelineItems.filter(item => item.type === filter);

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

  return (
    <section id="experience" className="py-20 bg-portfolio-secondary/30 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection animation="fade-in-up" className="text-center mb-8">
            <div className="flex items-center justify-center mb-8">
              <div className="bg-portfolio-primary/20 dark:bg-portfolio-primary/10 p-3 rounded-full">
                <Calendar className="h-8 w-8 text-portfolio-primary" aria-hidden="true" />
              </div>
            </div>

            <h2 className="text-4xl font-bold text-portfolio-heading dark:text-white mb-4">
              {t.experience.title}
            </h2>

            <p className="text-portfolio-text dark:text-gray-300 max-w-2xl mx-auto">
              {t.experience.subtitle}
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" delay={100} className="flex justify-center gap-2 mb-10">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
              className="transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              {t.experience.all}
            </Button>
            <Button
              variant={filter === "work" ? "default" : "outline"}
              onClick={() => setFilter("work")}
              className="transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              {t.experience.work}
            </Button>
            <Button
              variant={filter === "education" ? "default" : "outline"}
              onClick={() => setFilter("education")}
              className="transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              {t.experience.education}
            </Button>
          </AnimatedSection>
          
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
                  <AnimatedSection
                    animation="fade-in-up"
                    delay={index * 100}
                    className={`w-5/12 ${index % 2 === 0 ? 'ml-auto pl-8' : 'mr-auto pr-8'}`}
                  >
                    <Collapsible open={openItems.includes(item.id)}>
                      <Card className={`overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${item.highlight ? 'ring-2 ring-purple-500' : ''} bg-background dark:bg-gray-900 dark:border-gray-700`}>
                        <div className="p-4">
                          <div className="flex justify-between items-start mb-2">
                            <div className="flex-1">
                              {item.current && (
                                <Badge className="mb-2 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                                  {t.experience.currentPosition}
                                </Badge>
                              )}
                              <h3 className="text-lg font-bold dark:text-white">{item.title}</h3>
                              <p className="text-purple-600 dark:text-purple-400 font-semibold mt-1">
                                {item.organization}
                              </p>
                              {item.client && (
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                  {t.experience.client}: {item.client}
                                </p>
                              )}
                              <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                                {item.location}
                              </p>
                            </div>
                            <div className="flex items-center gap-1 px-3 py-1 bg-portfolio-secondary/20 dark:bg-gray-800 rounded-full text-sm">
                              <Calendar className="h-4 w-4" />
                              <span>{formatPeriod(item.period, language, t)}</span>
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
                                <span>{t.experience.hideDetails}</span>
                              </>
                            ) : (
                              <>
                                <ChevronDown className="h-4 w-4 mr-1" />
                                <span>{t.experience.showDetails}</span>
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
                  </AnimatedSection>
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