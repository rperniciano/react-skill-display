
import React from "react";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-portfolio-secondary py-10 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-portfolio-heading mb-2">
              Contattami
            </h3>
            <p className="text-portfolio-text">
              Sono disponibile per nuove opportunità e collaborazioni
            </p>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-portfolio-primary" />
              <a 
                href="mailto:ricki.perniciano.work@gmail.com" 
                className="text-portfolio-text hover:text-portfolio-primary transition-colors"
              >
                ricki.perniciano.work@gmail.com
              </a>
            </div>
            
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-portfolio-primary" />
              <a 
                href="tel:+393518745889" 
                className="text-portfolio-text hover:text-portfolio-primary transition-colors"
              >
                +39 351 874 5889
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center text-sm text-portfolio-text">
          <p>© {new Date().getFullYear()} Il tuo nome. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
