import React from "react";
import { Heart, Mail, Phone, MapPin } from "lucide-react";
import { portfolioData } from "./portfolio-data";
import { useLanguage } from "./LanguageContext";

const Footer = () => {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* About Section */}
            <div>
              <h3 className="text-xl font-bold mb-4">{portfolioData.personal.name}</h3>
              <p className="text-gray-400 mb-4">
                {language === 'it' ? 
                  'Full Stack Developer con 7+ anni di esperienza nello sviluppo di soluzioni enterprise scalabili.' :
                  'Full Stack Developer with 7+ years of experience developing scalable enterprise solutions.'
                }
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">
                {language === 'it' ? 'Link Rapidi' : 'Quick Links'}
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                    {language === 'it' ? 'Chi Sono' : 'About'}
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-gray-400 hover:text-white transition-colors">
                    {language === 'it' ? 'Competenze' : 'Skills'}
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-gray-400 hover:text-white transition-colors">
                    {language === 'it' ? 'Progetti' : 'Projects'}
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                    {language === 'it' ? 'Contatti' : 'Contact'}
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">
                {language === 'it' ? 'Contatti' : 'Contact'}
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-400">
                  <Mail className="h-4 w-4" />
                  <a href={`mailto:${portfolioData.personal.email}`} className="hover:text-white transition-colors">
                    {portfolioData.personal.email}
                  </a>
                </li>
                <li className="flex items-center gap-2 text-gray-400">
                  <Phone className="h-4 w-4" />
                  <a href={`tel:${portfolioData.personal.phone}`} className="hover:text-white transition-colors">
                    {portfolioData.personal.phone}
                  </a>
                </li>
                <li className="flex items-center gap-2 text-gray-400">
                  <MapPin className="h-4 w-4" />
                  <span>{portfolioData.personal.location}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 flex items-center justify-center gap-2">
              © {currentYear} {portfolioData.personal.name}. 
              {language === 'it' ? ' Tutti i diritti riservati.' : ' All rights reserved.'}
            </p>
            <p className="text-gray-500 text-sm mt-2 flex items-center justify-center gap-2">
              {language === 'it' ? 'Sviluppato con' : 'Built with'} 
              <Heart className="h-4 w-4 text-red-500" /> 
              {language === 'it' ? 'a' : 'in'} {portfolioData.personal.location}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;