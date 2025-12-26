import React from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Calendar, Clock, CheckCircle, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { portfolioData } from "./portfolio-data";
import { useLanguage } from "./LanguageContext";
import { AnimatedSection } from "./AnimatedSection";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <AnimatedSection animation="fade-in-up" className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-purple-100 dark:bg-purple-900/50 rounded-full text-purple-600 dark:text-purple-400 text-sm mb-4">
              {t.contact.title}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {t.contact.title}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {t.contact.subtitle}
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Info Cards */}
            <AnimatedSection animation="fade-in-up" className="space-y-6">
              {/* Main Contact Card */}
              <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                    {t.contact.contactInfo}
                  </h3>
                  
                  {/* Contact Details */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-purple-100 dark:bg-purple-900/50 rounded-lg">
                        <Mail className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{t.contact.email}</p>
                        <a href={`mailto:${portfolioData.personal.email}`} className="text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400">
                          {portfolioData.personal.email}
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-purple-100 dark:bg-purple-900/50 rounded-lg">
                        <Phone className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{t.contact.phone}</p>
                        <a href={`tel:${portfolioData.personal.phone}`} className="text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400">
                          {portfolioData.personal.phone}
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-purple-100 dark:bg-purple-900/50 rounded-lg">
                        <MapPin className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{t.contact.location}</p>
                        <p className="text-gray-900 dark:text-white">{portfolioData.personal.location}</p>
                      </div>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-3 mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <a
                      href={portfolioData.personal.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/50 hover:scale-110 transition-all duration-200"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href={portfolioData.personal.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/50 hover:scale-110 transition-all duration-200"
                      aria-label="GitHub"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a
                      href={`mailto:${portfolioData.personal.email}`}
                      className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/50 hover:scale-110 transition-all duration-200"
                      aria-label="Email"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Response Time Card */}
              <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg">
                      <Clock className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                        {t.contact.responseTime}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {t.contact.responseDesc}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Right Column - Book a Call CTA */}
            <AnimatedSection animation="fade-in-up" delay={150} className="space-y-6">
              {/* Main CTA Card */}
              <Card className="bg-gradient-to-br from-purple-600 to-purple-700 dark:from-purple-700 dark:to-purple-800 text-white hover:shadow-2xl transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-white/20 rounded-full">
                      <Calendar className="h-12 w-12 text-white" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold mb-4">
                    {t.hero.bookFreeCall}
                  </h3>
                  <p className="text-purple-100 mb-6">
                    Discutiamo del tuo progetto e di come posso aiutarti a realizzare le tue idee. 
                    Prenota una chiamata gratuita di 30 minuti senza impegno.
                  </p>
                  
                  <Button
                    size="lg"
                    className="w-full bg-white text-purple-600 hover:bg-gray-100 transition-all duration-200 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]"
                    asChild
                  >
                    <a href="https://calendly.com/riccardo-perniciano/free-call" target="_blank" rel="noopener noreferrer">
                      <Calendar className="h-5 w-5 mr-2" />
                      Prenota ora su Calendly
                    </a>
                  </Button>

                  <div className="mt-6 space-y-2">
                    <div className="flex items-center justify-center gap-2 text-purple-100">
                      <CheckCircle className="h-4 w-4" />
                      <span className="text-sm">{t.hero.noCommitment}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-purple-100">
                      <CheckCircle className="h-4 w-4" />
                      <span className="text-sm">{t.hero.thirtyMinCall}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-purple-100">
                      <CheckCircle className="h-4 w-4" />
                      <span className="text-sm">Consulenza gratuita</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Alternative Contact Methods */}
              <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-purple-100 dark:bg-purple-900/50 rounded-lg">
                      <MessageCircle className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                        Preferisci scrivere?
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        Puoi contattarmi direttamente via email o LinkedIn per qualsiasi domanda o proposta.
                      </p>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          asChild
                          className="transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                        >
                          <a href={`mailto:${portfolioData.personal.email}`}>
                            <Mail className="h-4 w-4 mr-2" />
                            Email
                          </a>
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          asChild
                          className="transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                        >
                          <a href={portfolioData.personal.linkedin} target="_blank" rel="noopener noreferrer">
                            <Linkedin className="h-4 w-4 mr-2" />
                            LinkedIn
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;