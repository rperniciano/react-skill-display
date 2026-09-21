"use client";

import React from "react";
import { Code, Database, Brain, Layout, Shield, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "./LanguageContext";
import { AnimatedSection } from "./AnimatedSection";
import { StaggeredGrid } from "./StaggeredGrid";

const Skills = () => {
  const { t } = useLanguage();

  const technologies = [
    {
      icon: <Code className="h-8 w-8 text-white" />,
      title: "Languages & Frameworks",
      description: t.skills.langFrameworksDesc,
      details: t.skills.langFrameworksDetails,
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Database className="h-8 w-8 text-white" />,
      title: "Database & Search",
      description: t.skills.databaseDesc,
      details: t.skills.databaseDetails,
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Brain className="h-8 w-8 text-white" />,
      title: "AI & Speech Processing",
      description: t.skills.aiSpeechDesc,
      details: t.skills.aiSpeechDetails,
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Shield className="h-8 w-8 text-white" />,
      title: "Cloud & Infrastructure",
      description: t.skills.cloudDesc,
      details: t.skills.cloudDetails,
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Layout className="h-8 w-8 text-white" />,
      title: "Architecture & Patterns",
      description: t.skills.architectureDesc,
      details: t.skills.architectureDetails,
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Zap className="h-8 w-8 text-white" />,
      title: t.skills.testingMethodologiesTitle,
      description: t.skills.testingDesc,
      details: t.skills.testingDetails,
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
              {t.skills.title}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t.skills.stackTitle}
            </h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              {t.skills.stackSubtitle}
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
              {t.skills.methodologiesTitle}
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