import React from "react";
import { Code, Database, Brain, Layout, Shield, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "./LanguageContext";

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
        "Backend: C# (.NET 9), Python, PHP, Node.js, GraphQL, REST APIs" :
        "Backend: C# (.NET 9), Python, PHP, Node.js, GraphQL, REST APIs",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Database className="h-8 w-8 text-white" />,
      title: "Database & Search",
      description: language === 'it' ?
        "SQL Server, MySQL, Elasticsearch, Entity Framework Core" :
        "SQL Server, MySQL, Elasticsearch, Entity Framework Core",
      details: language === 'it' ?
        "Query optimization, indicizzazione full-text, multi-tenancy isolation" :
        "Query optimization, full-text indexing, multi-tenancy isolation",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Brain className="h-8 w-8 text-white" />,
      title: "AI & Machine Learning",
      description: language === 'it' ?
        "Azure Cognitive Services, OpenAI GPT, Assembly.AI" :
        "Azure Cognitive Services, OpenAI GPT, Assembly.AI",
      details: language === 'it' ?
        "Speech-to-Text, NLP, Question answering systems, semantic analysis" :
        "Speech-to-Text, NLP, Question answering systems, semantic analysis",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Shield className="h-8 w-8 text-white" />,
      title: "Cloud & DevOps",
      description: language === 'it' ?
        "Microsoft Azure (VMs, Cognitive Services), Docker" :
        "Microsoft Azure (VMs, Cognitive Services), Docker",
      details: language === 'it' ?
        "CI/CD: Git, Azure DevOps, Hangfire (job orchestration), Application Insights" :
        "CI/CD: Git, Azure DevOps, Hangfire (job orchestration), Application Insights",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Layout className="h-8 w-8 text-white" />,
      title: "Architecture & Patterns",
      description: language === 'it' ?
        "DDD, CQRS, Repository, Template Method, Strategy" :
        "DDD, CQRS, Repository, Template Method, Strategy",
      details: language === 'it' ?
        "ABP.io, Clean Architecture, Microservices patterns" :
        "ABP.io, Clean Architecture, Microservices patterns",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Zap className="h-8 w-8 text-white" />,
      title: language === 'it' ? "Testing & Performance" : "Testing & Performance",
      description: language === 'it' ?
        "Jest, Cypress, Unit Testing (80% code coverage achieved)" :
        "Jest, Cypress, Unit Testing (80% code coverage achieved)",
      details: language === 'it' ?
        "Performance optimization, caching multi-livello, query optimization" :
        "Performance optimization, multi-layer caching, query optimization",
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-purple-600 to-purple-700 dark:from-purple-700 dark:to-purple-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
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
          </div>

          {/* Technology Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <Card 
                key={index} 
                className="bg-white/10 backdrop-blur border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-center mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${tech.color} shadow-lg`}>
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
          </div>

          {/* Additional Skills Info */}
          <div className="mt-16 text-center">
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
                  className="px-3 py-1 bg-white/10 backdrop-blur rounded-full text-white text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;