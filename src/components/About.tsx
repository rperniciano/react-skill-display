import React from "react";
import { User, FileText, ExternalLink, Trophy, Target, Sparkles, Code, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { portfolioData } from "./portfolio-data";
import { useLanguage } from "./LanguageContext";

const About = () => {
  const { t } = useLanguage();
  
  const highlights = [
    { icon: <Code className="h-5 w-5" />, label: `7+ ${t.about.yearsExperience}`, value: "Full Stack Development" },
    { icon: <Briefcase className="h-5 w-5" />, label: "Lead Developer", value: "FEDRO Software" },
    { icon: <Trophy className="h-5 w-5" />, label: `85% ${t.about.codeReduction}`, value: t.about.codeLegacy },
    { icon: <Target className="h-5 w-5" />, label: `1000+ ${t.about.transcriptionsHour}`, value: t.about.aiProcessing }
  ];

  const expertise = [
    { area: "Frontend", skills: ["React", "Angular", "TypeScript", "Next.js"] },
    { area: "Backend", skills: [".NET 9", "Node.js", "C#", "ABP.io"] },
    { area: "AI & Cloud", skills: ["OpenAI", "Azure AI", "Docker", "Elasticsearch"] },
    { area: "Architecture", skills: ["DDD", "CQRS", "Microservices", "Clean Architecture"] }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-center mb-8">
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-3 rounded-full">
              <User className="h-8 w-8 text-white" aria-hidden="true" />
            </div>
          </div>
          
          <h2 className="text-4xl font-bold text-portfolio-heading dark:text-white text-center mb-8">
            {t.about.title}
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Bio & Image */}
            <div className="space-y-6">
              {/* Profile Image with Overlay */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&q=80" 
                  alt="Developer workspace" 
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {portfolioData.personal.name}
                  </h3>
                  <p className="text-lg text-gray-200 mb-3">
                    {portfolioData.personal.title}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-green-500/20 text-green-300 border-green-500/50">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                      {t.about.available}
                    </Badge>
                    <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/50">
                      {portfolioData.personal.location}
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Expertise Areas */}
              <Card className="dark:bg-gray-800/50 dark:border-gray-700">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-purple-500" />
                    {t.about.expertiseAreas}
                  </h3>
                  <div className="space-y-3">
                    {expertise.map((area, i) => (
                      <div key={i}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold text-sm text-gray-700 dark:text-gray-300">
                            {area.area}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {area.skills.map((skill, j) => (
                            <Badge key={j} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Right Column - Content */}
            <div className="space-y-6">
              {/* Bio */}
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-portfolio-text dark:text-gray-300 leading-relaxed">
                  {t.about.bio1}
                </p>
                
                <p className="text-portfolio-text dark:text-gray-300 leading-relaxed">
                  {t.about.bio2}
                </p>
                
                <p className="text-portfolio-text dark:text-gray-300 leading-relaxed">
                  {t.about.bio3}
                </p>
                
                <p className="text-portfolio-text dark:text-gray-300 leading-relaxed">
                  {t.about.bio4}
                </p>
              </div>

              {/* Key Highlights */}
              <div className="grid grid-cols-2 gap-4">
                {highlights.map((item, i) => (
                  <Card key={i} className="dark:bg-gray-800/50 dark:border-gray-700">
                    <CardContent className="pt-4 pb-4">
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-purple-100 dark:bg-purple-900/50 rounded-lg text-purple-600 dark:text-purple-400">
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                            {item.label}
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Languages */}
              <Card className="dark:bg-gray-800/50 dark:border-gray-700">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-bold mb-3">{t.about.languages}</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">{t.about.italian}</span>
                      <Badge variant="secondary">{t.about.native}</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">{t.about.english}</span>
                      <Badge variant="secondary">B2 - {t.about.professional}</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">{t.about.spanish}</span>
                      <Badge variant="secondary">B2 - {t.about.intermediate}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Button 
                  className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white" 
                  asChild
                >
                  <a href="/CV-Riccardo-Perniciano.pdf" target="_blank" rel="noopener noreferrer">
                    <FileText className="h-4 w-4 mr-2" />
                    {t.about.downloadFullCV}
                  </a>
                </Button>
                
                <Button className="flex-1" variant="outline" asChild>
                  <a href="#contact">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    {t.about.contactMe}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;