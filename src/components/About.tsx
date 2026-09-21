"use client";

import React from "react";
import { portfolioData } from "./portfolio-data";
import { useLanguage } from "./LanguageContext";
import { AnimatedSection } from "./AnimatedSection";
import { StaggeredGrid } from "./StaggeredGrid";

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <AnimatedSection animation="fade-in-up" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              {t.about.greetingPrefix}
              <span className="text-purple-600 dark:text-purple-400">{portfolioData.personal.name}</span>
              {t.about.greetingSuffix}
            </h2>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Profile Image */}
            <AnimatedSection animation="scale-in" className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700">
                  <img
                    src="/fotoCurriculum.png"
                    alt={portfolioData.personal.name}
                    className="w-full h-full object-cover"
                    width={1024}
                    height={1024}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple-600 rounded-full opacity-20 blur-xl"></div>
              </div>
            </AnimatedSection>

            {/* Right Column - Bio */}
            <AnimatedSection animation="fade-in-up" delay={150} className="space-y-6">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {t.about.profile1}
                </p>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {t.about.profile2}
                </p>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {t.about.profile3}
                </p>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {t.about.profile4}
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Experience & Skills Section */}
          <div className="mt-20">
            <AnimatedSection animation="fade-in-up" className="text-center mb-12">
              <h3 className="text-3xl font-bold">
                {t.about.softSkillsTitle}
              </h3>
            </AnimatedSection>

            <StaggeredGrid className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={100}>
              {/* Technical Communication */}
              <div className="space-y-3 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <h4 className="font-bold text-lg text-purple-600 dark:text-purple-400">
                  {t.about.softSkillCommunicationTitle}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {t.about.softSkillCommunicationDesc}
                </p>
              </div>

              {/* Ownership & Delivery */}
              <div className="space-y-3 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <h4 className="font-bold text-lg text-purple-600 dark:text-purple-400">
                  {t.about.softSkillOwnershipTitle}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {t.about.softSkillOwnershipDesc}
                </p>
              </div>

              {/* International Teams */}
              <div className="space-y-3 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <h4 className="font-bold text-lg text-purple-600 dark:text-purple-400">
                  {t.about.softSkillTeamsTitle}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {t.about.softSkillTeamsDesc}
                </p>
              </div>

              {/* Autonomy & Problem Solving */}
              <div className="space-y-3 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <h4 className="font-bold text-lg text-purple-600 dark:text-purple-400">
                  {t.about.softSkillAutonomyTitle}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {t.about.softSkillAutonomyDesc}
                </p>
              </div>
            </StaggeredGrid>

            {/* Languages Section */}
            <AnimatedSection animation="fade-in-up" delay={200} className="mt-12">
              <h3 className="text-2xl font-bold text-center mb-8">
                {t.about.languageSkillsTitle}
              </h3>
              <div className="flex flex-wrap justify-center gap-6">
                <div className="px-6 py-3 bg-purple-100 dark:bg-purple-900/50 rounded-lg hover:shadow-lg transition-shadow duration-300">
                  <span className="font-bold text-purple-600 dark:text-purple-400">{t.about.italian}:</span>
                  <span className="ml-2 text-gray-700 dark:text-gray-300">{t.about.native}</span>
                </div>
                <div className="px-6 py-3 bg-purple-100 dark:bg-purple-900/50 rounded-lg hover:shadow-lg transition-shadow duration-300">
                  <span className="font-bold text-purple-600 dark:text-purple-400">{t.about.english}:</span>
                  <span className="ml-2 text-gray-700 dark:text-gray-300">{t.about.levelB2}</span>
                </div>
                <div className="px-6 py-3 bg-purple-100 dark:bg-purple-900/50 rounded-lg hover:shadow-lg transition-shadow duration-300">
                  <span className="font-bold text-purple-600 dark:text-purple-400">{t.about.spanish}:</span>
                  <span className="ml-2 text-gray-700 dark:text-gray-300">{t.about.levelB2}</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;