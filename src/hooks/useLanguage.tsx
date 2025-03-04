
import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Language = 'it' | 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

// Traduzioni
const translations: Record<Language, Record<string, string>> = {
  it: {
    // Navbar
    'menu': 'Menu',
    'home': 'Home',
    'about': 'Chi Sono',
    'experience': 'Esperienze',
    'skills': 'Competenze',
    'contact': 'Contatti',
    
    // Hero
    'hello': 'Ciao, sono',
    'developer': 'Sviluppatore React',
    'specializing': 'Specializzato in applicazioni web moderne',
    
    // About
    'aboutMe': 'Chi Sono',
    'reactDeveloper': 'Sviluppatore React Specializzato',
    'aboutDescription1': 'Ciao, sono un sviluppatore frontend con più di 5 anni di esperienza, specializzato in React e tecnologie web moderne. La mia carriera comprende lo sviluppo di Single Page Applications (SPA) con React e GraphQL, sistemi embedded per pagamenti POS, e applicazioni mobile in realtà virtuale.',
    'aboutDescription2': 'Oltre alle competenze tecniche in React, ho esperienza con C#, database SQL/MySQL e integrazione di API. Mi piace lavorare in team e affrontare sfide tecniche complesse, trovando il giusto equilibrio tra design innovativo e soluzioni pratiche.',
    'aboutDescription3': 'Nell\'ultimo anno mi sono concentrato particolarmente sull\'utilizzo di LLM nel mondo dello sviluppo, integrandole in vari miei progetti, e studiando il loro utilizzo in ambito aziendale.',
    'downloadCV': 'Scarica CV',
    'contactMe': 'Contattami',
    'experience': '5+ anni di esperienza',
    
    // Skills
    'mySkills': 'Le Mie Competenze',
    'skillsDistribution': 'Distribuzione Competenze',
    'languages': 'Linguaggi',
    'frameworks': 'Framework',
    'tools': 'Strumenti',
    'skillLevel': 'Livello di competenza',
    
    // Experience
    'myExperience': 'Le Mie Esperienze',
    'timeline': 'Timeline',
    'work': 'Lavoro',
    'education': 'Formazione',
    'certificates': 'Certificazioni',
    
    // Footer
    'contactMeFooter': 'Contattami',
    'available': 'Sono disponibile per nuove opportunità e collaborazioni',
    'rights': 'Tutti i diritti riservati.'
  },
  en: {
    // Navbar
    'menu': 'Menu',
    'home': 'Home',
    'about': 'About Me',
    'experience': 'Experience',
    'skills': 'Skills',
    'contact': 'Contact',
    
    // Hero
    'hello': 'Hello, I\'m',
    'developer': 'React Developer',
    'specializing': 'Specializing in modern web applications',
    
    // About
    'aboutMe': 'About Me',
    'reactDeveloper': 'Specialized React Developer',
    'aboutDescription1': 'Hello, I\'m a frontend developer with over 5 years of experience, specializing in React and modern web technologies. My career includes developing Single Page Applications (SPA) with React and GraphQL, embedded systems for POS payments, and virtual reality mobile applications.',
    'aboutDescription2': 'Beyond technical skills in React, I have experience with C#, SQL/MySQL databases, and API integration. I enjoy working in teams and tackling complex technical challenges, finding the right balance between innovative design and practical solutions.',
    'aboutDescription3': 'In the past year, I\'ve focused particularly on using LLMs in development, integrating them into various projects, and studying their use in business contexts.',
    'downloadCV': 'Download CV',
    'contactMe': 'Contact Me',
    'experience': '5+ years of experience',
    
    // Skills
    'mySkills': 'My Skills',
    'skillsDistribution': 'Skills Distribution',
    'languages': 'Languages',
    'frameworks': 'Frameworks',
    'tools': 'Tools',
    'skillLevel': 'Skill Level',
    
    // Experience
    'myExperience': 'My Experience',
    'timeline': 'Timeline',
    'work': 'Work',
    'education': 'Education',
    'certificates': 'Certifications',
    
    // Footer
    'contactMeFooter': 'Contact Me',
    'available': 'I am available for new opportunities and collaborations',
    'rights': 'All rights reserved.'
  },
  es: {
    // Navbar
    'menu': 'Menú',
    'home': 'Inicio',
    'about': 'Sobre Mí',
    'experience': 'Experiencia',
    'skills': 'Habilidades',
    'contact': 'Contacto',
    
    // Hero
    'hello': 'Hola, soy',
    'developer': 'Desarrollador React',
    'specializing': 'Especializado en aplicaciones web modernas',
    
    // About
    'aboutMe': 'Sobre Mí',
    'reactDeveloper': 'Desarrollador React Especializado',
    'aboutDescription1': 'Hola, soy un desarrollador frontend con más de 5 años de experiencia, especializado en React y tecnologías web modernas. Mi carrera incluye el desarrollo de aplicaciones de una sola página (SPA) con React y GraphQL, sistemas integrados para pagos POS y aplicaciones móviles de realidad virtual.',
    'aboutDescription2': 'Además de mis habilidades técnicas en React, tengo experiencia con C#, bases de datos SQL/MySQL e integración de API. Me gusta trabajar en equipo y abordar desafíos técnicos complejos, encontrando el equilibrio adecuado entre diseño innovador y soluciones prácticas.',
    'aboutDescription3': 'En el último año, me he centrado particularmente en el uso de LLM en el mundo del desarrollo, integrándolos en varios de mis proyectos y estudiando su uso en el contexto empresarial.',
    'downloadCV': 'Descargar CV',
    'contactMe': 'Contáctame',
    'experience': '+5 años de experiencia',
    
    // Skills
    'mySkills': 'Mis Habilidades',
    'skillsDistribution': 'Distribución de Habilidades',
    'languages': 'Lenguajes',
    'frameworks': 'Frameworks',
    'tools': 'Herramientas',
    'skillLevel': 'Nivel de habilidad',
    
    // Experience
    'myExperience': 'Mi Experiencia',
    'timeline': 'Cronología',
    'work': 'Trabajo',
    'education': 'Educación',
    'certificates': 'Certificaciones',
    
    // Footer
    'contactMeFooter': 'Contáctame',
    'available': 'Estoy disponible para nuevas oportunidades y colaboraciones',
    'rights': 'Todos los derechos reservados.'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>('it');

  useEffect(() => {
    // Recupera la lingua salvata o usa l'italiano come default
    const savedLanguage = localStorage.getItem('language') as Language | null;
    if (savedLanguage && ['it', 'en', 'es'].includes(savedLanguage)) {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  // Funzione di traduzione
  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  
  return context;
};
