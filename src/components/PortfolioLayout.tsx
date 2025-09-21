// Main layout component that assembles all sections
import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Solutions from "./Solutions";
import AISection from "./AISection";
import WorkExperience from "./WorkExperience";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import { LanguageProvider } from "./LanguageContext";
import { ThemeProvider } from "./theme-provider";

const PortfolioLayout = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <LanguageProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Solutions />
            <AISection />
            <WorkExperience />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default PortfolioLayout;