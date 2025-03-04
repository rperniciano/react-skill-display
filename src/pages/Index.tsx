
import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";
import Footer from "../components/Footer";
import { ThemeProvider } from "../hooks/useTheme";
import { LanguageProvider } from "../hooks/useLanguage";

const Index = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-portfolio-background dark:bg-gray-900 text-portfolio-text dark:text-gray-300">
          <Navbar />
          <Hero />
          <About />
          <WorkExperience />
          <Skills />
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default Index;
