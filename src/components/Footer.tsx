import React from "react";
import { Mail, Phone, Linkedin, FileText, Github, MapPin, Heart } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import { portfolioData } from "./portfolio-data";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-purple-400">
              {t.nav.contact}
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-purple-400" aria-hidden="true" />
                <a
                  href={`mailto:${portfolioData.personal.email}`}
                  className="hover:text-purple-400 transition-colors"
                  aria-label={`Email: ${portfolioData.personal.email}`}
                >
                  {portfolioData.personal.email}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-purple-400" aria-hidden="true" />
                <a
                  href={`tel:${portfolioData.personal.phone.replace(/\s/g, '')}`}
                  className="hover:text-purple-400 transition-colors"
                  aria-label={`${t.contact.phone}: ${portfolioData.personal.phone}`}
                >
                  {portfolioData.personal.phone}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-purple-400" aria-hidden="true" />
                <span className="text-gray-300">
                  {portfolioData.personal.location}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-purple-400">
              Quick Links
            </h3>
            <div className="space-y-2">
              <a
                href="#hero"
                className="block hover:text-purple-400 transition-colors"
              >
                {t.nav.home}
              </a>
              <a
                href="#skills"
                className="block hover:text-purple-400 transition-colors"
              >
                {t.nav.skills}
              </a>
              <a
                href="#experience"
                className="block hover:text-purple-400 transition-colors"
              >
                {t.nav.experience}
              </a>
              <a
                href="#projects"
                className="block hover:text-purple-400 transition-colors"
              >
                {t.nav.projects}
              </a>
              <a
                href="#about"
                className="block hover:text-purple-400 transition-colors"
              >
                {t.nav.about}
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-purple-400">
              Social
            </h3>
            <div className="flex gap-4">
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-purple-600 rounded-full transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-purple-600 rounded-full transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="/CV-Riccardo-Perniciano.pdf"
                download
                className="p-3 bg-gray-800 hover:bg-purple-600 rounded-full transition-colors"
                aria-label={t.nav.downloadCV}
              >
                <FileText className="h-6 w-6" />
              </a>
            </div>
            
            <div className="mt-6">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-lg transition-all"
              >
                <Mail className="h-5 w-5" />
                {t.contact.availableProjects}
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            © 2025 {portfolioData.personal.name}. All rights reserved. 
            <span className="flex items-center gap-1">
              Made with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> in Cagliari
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;