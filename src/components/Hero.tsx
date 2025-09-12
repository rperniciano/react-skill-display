import React, { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ArrowRight } from "lucide-react";
import { portfolioData } from "./portfolio-data";
import { useLanguage } from "./LanguageContext";

const Hero = () => {
  const { t, language } = useLanguage();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [textIndex, setTextIndex] = useState(0);
  
  const roles = [
    "Full Stack Developer",
    "AI Integration Specialist", 
    "Lead Developer @ FEDRO",
    ".NET & React Expert"
  ];

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = event.clientX / window.innerWidth;
      const y = event.clientY / window.innerHeight;
      setMousePosition({ x, y });
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const transformX = mousePosition.x * 20;
  const transformY = mousePosition.y * 20;

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Gradient orbs */}
      <div 
        className="absolute top-20 left-20 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"
        style={{
          transform: `translate(${-transformX}px, ${-transformY}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      />
      <div 
        className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"
        style={{
          transform: `translate(${transformX}px, ${transformY}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      />
      
      {/* Custom cursor light effect */}
      <div 
        className="pointer-events-none fixed w-48 h-48 rounded-full bg-white/10 mix-blend-overlay blur-xl z-50 hidden lg:block"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
          transform: 'translate(-50%, -50%)',
          transition: 'left 0.1s ease-out, top 0.1s ease-out'
        }}
        aria-hidden="true"
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <Badge className="bg-white/10 text-white border-white/20 backdrop-blur">
              {t.hero.available}
            </Badge>
          </div>
          
          {/* Name and Title */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-4">
            {portfolioData.personal.name}
          </h1>
          
          {/* Animated Role */}
          <div className="h-12 mb-6">
            <p className="text-xl sm:text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 font-semibold transition-all duration-500">
              {roles[textIndex]}
            </p>
          </div>
          
          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            <span className="text-purple-400 font-semibold">7+ {t.hero.yearsExp}</span> • 
            {t.hero.leadDeveloper}{" "}
            <span className="text-blue-400 font-semibold">FEDRO CognitiveServices</span> • 
            {t.hero.specializedIn}{" "}
            <span className="text-green-400 font-semibold">AI Integration</span> {t.hero.andArchitectures}
          </p>
          
          {/* Tech Stack */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {[".NET 9", "React", "Angular", "TypeScript", "Azure AI", "OpenAI", "Docker", "Elasticsearch"].map((tech) => (
              <Badge 
                key={tech} 
                variant="outline" 
                className="text-white border-white/30 bg-white/5 backdrop-blur"
              >
                {tech}
              </Badge>
            ))}
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
              asChild
            >
              <a href="#projects" className="flex items-center gap-2">
                {t.hero.explorePortfolio}
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-white border-white/30 hover:bg-white/10"
              asChild
            >
              <a href="/CV-Riccardo-Perniciano.pdf" download className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                {t.hero.downloadCV}
              </a>
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-12">
            <a 
              href={`mailto:${portfolioData.personal.email}`}
              className="p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a 
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
          
          {/* Achievements */}
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
            {portfolioData.achievements.slice(0, 3).map((achievement, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  {achievement.metric}
                </div>
                <div className="text-sm text-gray-400 mt-1">
                  {i === 0 ? t.hero.codeReduction : i === 1 ? t.hero.uptime : t.hero.transcriptionsHour}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;