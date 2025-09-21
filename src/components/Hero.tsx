import React from "react";
import { Button } from "@/components/ui/button";
import { Linkedin, Calendar, CheckCircle, Download } from "lucide-react";
import { portfolioData } from "./portfolio-data";
import { useLanguage } from "./LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Decorative background elements - with z-index 0 */}
      <div className="absolute inset-0 bg-grid-gray-100 dark:bg-grid-gray-800 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] z-0 pointer-events-none" />
      
      {/* Main content with higher z-index */}
      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Tagline */}
          <p className="text-center text-gray-600 dark:text-gray-400 mb-6">
            {t.hero.tagline}
          </p>
          
          {/* Main heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-8">
            <span className="text-gray-900 dark:text-white">{t.hero.title}</span>
            <br />
            <span className="text-gray-900 dark:text-white">7+ {t.hero.yearsExperienceIn} </span>
            <span className="text-purple-600 dark:text-purple-400">{t.hero.enterpriseSolutions}</span>
          </h1>
          
          {/* Description */}
          <p className="text-xl text-center text-gray-600 dark:text-gray-400 max-w-4xl mx-auto mb-12 leading-relaxed">
            {t.hero.description}
          </p>
          
          {/* CTA Buttons - 3 buttons with relative z-index */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 relative z-20">
            <Button 
              size="lg" 
              className="bg-purple-600 hover:bg-purple-700 text-white flex items-center gap-2"
              asChild
            >
              <a href="https://calendly.com/riccardo-perniciano/free-call" target="_blank" rel="noopener noreferrer">
                <Calendar className="h-5 w-5" />
                {t.hero.bookFreeCall}
              </a>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="flex items-center gap-2 border-gray-300 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-800"
              asChild
            >
              <a href={portfolioData.personal.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </a>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="flex items-center gap-2 border-gray-300 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-800"
              asChild
            >
              <a href="/CV-Riccardo-Perniciano.pdf" download>
                <Download className="h-5 w-5" />
                {t.hero.downloadCV}
              </a>
            </Button>
          </div>
          
          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>{t.hero.noCommitment}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>{t.hero.thirtyMinCall}</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Stats section */}
      <div className="bg-purple-600 dark:bg-purple-700 py-16 mt-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                7+
              </div>
              <div className="text-purple-100">
                {t.hero.yearsExp}
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                85%
              </div>
              <div className="text-purple-100">
                {t.hero.legacyReduction}
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                99.9%
              </div>
              <div className="text-purple-100">
                {t.hero.systemUptime}
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                50+
              </div>
              <div className="text-purple-100">
                {t.hero.managedTenants}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;