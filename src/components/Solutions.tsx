"use client";

import React from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Brain, Lock, BarChart, Globe, Settings, ArrowRight } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import { AnimatedSection } from "./AnimatedSection";
import { StaggeredGrid } from "./StaggeredGrid";

const Solutions = () => {
  const { t, language } = useLanguage();

  // Contextual links into the two Italian-only /servizi pages (see
  // CLAUDE.md). Only populated for 'it': those pages don't exist under /en
  // or /es, so an English or Spanish visitor sees these cards exactly as
  // before - no dead link, no surprise language switch.
  const isItalian = language === 'it';

  const solutions = [
    {
      icon: <ShoppingCart className="h-8 w-8" />,
      title: t.solutions.enterpriseTitle,
      description: t.solutions.enterpriseDesc,
      link: isItalian
        ? { href: '/it/servizi/automazione-documentale-pa', label: 'Automazione documentale per la PA' }
        : undefined
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: t.solutions.aiTitle,
      description: t.solutions.aiDesc,
      link: isItalian
        ? { href: '/it/servizi/consulenza-ai-dotnet', label: 'Consulenza AI e .NET' }
        : undefined
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: t.solutions.missionCriticalTitle,
      description: t.solutions.missionCriticalDesc,
      link: undefined as { href: string; label: string } | undefined
    }
  ];

  const customSolutions = {
    title: t.solutions.performanceTitle,
    description: t.solutions.performanceDesc
  };

  return (
    <section id="solutions" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <AnimatedSection animation="fade-in-up" className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-purple-100 dark:bg-purple-900/50 rounded-full text-purple-700 dark:text-purple-300 text-sm mb-4">
              {t.solutions.badge}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {t.solutions.title}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {t.solutions.subtitle}
            </p>
          </AnimatedSection>

          {/* Solutions Grid */}
          <StaggeredGrid className="grid md:grid-cols-3 gap-8 mb-12" staggerDelay={150}>
            {solutions.map((solution, index) => (
              <Card key={index} className="border-gray-200 dark:border-gray-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-purple-100 dark:bg-purple-900/50 rounded-lg text-purple-600 dark:text-purple-400 transition-transform duration-300 group-hover:scale-110">
                      {solution.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 text-center">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-center text-sm leading-relaxed">
                    {solution.description}
                  </p>
                  {solution.link && (
                    <Link
                      href={solution.link.href}
                      className="mt-4 flex items-center justify-center gap-1 text-sm font-medium text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
                    >
                      {solution.link.label}
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  )}
                </CardContent>
              </Card>
            ))}
          </StaggeredGrid>

          {/* Custom Solutions Card */}
          <AnimatedSection animation="scale-in" delay={200}>
            <Card className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 border-purple-200 dark:border-purple-700 hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-purple-600 rounded-lg">
                    <Settings className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {customSolutions.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                  {customSolutions.description}
                </p>
                <Button
                  size="lg"
                  className="bg-purple-600 hover:bg-purple-700 text-white transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/25 active:scale-[0.98]"
                  asChild
                >
                  <a href="https://calendly.com/riccardo-perniciano/free-call" target="_blank" rel="noopener noreferrer">
                    {t.solutions.cta}
                  </a>
                </Button>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Solutions;