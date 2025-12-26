import React from "react";
import { Code, Database, Brain, Layout, Shield, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "./LanguageContext";
import { AnimatedSection } from "./AnimatedSection";
import { StaggeredGrid } from "./StaggeredGrid";

const Skills = () => {
  const { language } = useLanguage();

  const technologies = [
    {
      icon: <Code className="h-8 w-8 text-white" />,
      title: "Languages & Frameworks",
      description: language === 'it' ?
        "Frontend: React, Angular, TypeScript, JavaScript ES6+, HTML5, CSS3/SASS" :
        "Frontend: React, Angular, TypeScript, JavaScript ES6+, HTML5, CSS3/SASS",
      details: language === 'it' ?
        "Backend: C# (.NET 9), Node.js, REST APIs, GraphQL, Fastify, Swagger" :
        "Backend: C# (.NET 9), Node.js, REST APIs, GraphQL, Fastify, Swagger",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Database className="h-8 w-8 text-white" />,
      title: "Database & Search",
      description: language === 'it' ?
        "SQL Server, MySQL, Elasticsearch, Supabase, Entity Framework Core" :
        "SQL Server, MySQL, Elasticsearch, Supabase, Entity Framework Core",
      details: language === 'it' ?
        "Query optimization, indicizzazione full-text, multi-tenancy isolation" :
        "Query optimization, full-text indexing, multi-tenancy isolation",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Brain className="h-8 w-8 text-white" />,
      title: "AI & Speech Processing",
      description: language === 'it' ?
        "Azure Cognitive Services, OpenAI GPT, Assembly.AI" :
        "Azure Cognitive Services, OpenAI GPT, Assembly.AI",
      details: language === 'it' ?
        "Speech-to-Text multi-provider, Video & Image Generation, Simple RAG systems" :
        "Speech-to-Text multi-provider, Video & Image Generation, Simple RAG systems",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Shield className="h-8 w-8 text-white" />,
      title: "Cloud & Infrastructure",
      description: language === 'it' ?
        "Microsoft Azure (VMs, Cognitive Services, Foundry), Docker" :
        "Microsoft Azure (VMs, Cognitive Services, Foundry), Docker",
      details: language === 'it' ?
        "DevOps: Git, GitHub, Azure DevOps, Hangfire, Application Insights" :
        "DevOps: Git, GitHub, Azure DevOps, Hangfire, Application Insights",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Layout className="h-8 w-8 text-white" />,
      title: "Architecture & Patterns",
      description: language === 'it' ?
        "DDD, CQRS, ABP.io, Entity Framework Repository Pattern" :
        "DDD, CQRS, ABP.io, Entity Framework Repository Pattern",
      details: language === 'it' ?
        "VR & 3D: Unity, C#, Google VR SDK, Mobile VR Development" :
        "VR & 3D: Unity, C#, Google VR SDK, Mobile VR Development",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Zap className="h-8 w-8 text-white" />,
      title: language === 'it' ? "Testing & Metodologie" : "Testing & Methodologies",
      description: language === 'it' ?
        "Jest, Cypress, Unit Testing" :
        "Jest, Cypress, Unit Testing",
      details: language === 'it' ?
        "Metodologie: Agile (Scrum, Kanban), Jira" :
        "Methodologies: Agile (Scrum, Kanban), Jira",
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-purple-600 to-purple-700 dark:from-purple-700 dark:to-purple-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <AnimatedSection animation="fade-in-up" className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur rounded-full text-white text-sm mb-4">
              {language === 'it' ? 'Competenze Tecniche' : 'Technical Skills'}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {language === 'it' ? 'Stack Tecnologico Completo' : 'Complete Technology Stack'}
            </h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              {language === 'it' ?
                '7+ anni di esperienza con tecnologie enterprise e integrazione AI avanzata' :
                '7+ years of experience with enterprise technologies and advanced AI integration'
              }
            </p>
          </AnimatedSection>

          {/* Technology Cards Grid */}
          <StaggeredGrid className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={100}>
            {technologies.map((tech, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur border-white/20 hover:bg-white/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-center mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${tech.color} shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                      {tech.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center">
                    {tech.title}
                  </h3>
                  <p className="text-purple-100 text-center text-sm leading-relaxed mb-2">
                    {tech.description}
                  </p>
                  {tech.details && (
                    <p className="text-purple-200 text-center text-xs leading-relaxed opacity-90">
                      {tech.details}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </StaggeredGrid>

          {/* Additional Skills Info */}
          <AnimatedSection animation="fade-in-up" delay={200} className="mt-16 text-center">
            <h3 className="text-xl font-bold text-white mb-6">
              {language === 'it' ? 'Metodologie & Tools' : 'Methodologies & Tools'}
            </h3>
            <div className="inline-flex flex-wrap gap-3 justify-center">
              {[
                "Agile", "Scrum", "Kanban", "Jira", "Git", "GitFlow",
                "ABP.io", "Hangfire", "Azure DevOps", "Application Insights",
                "Figma", "Storybook", "GraphQL", "REST APIs", "WebServices",
                "Unity", "Google VR SDK", "Embedded Systems"
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-white/10 backdrop-blur rounded-full text-white text-sm hover:bg-white/20 transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Skills;