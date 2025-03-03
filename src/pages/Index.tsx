
import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import WorkExperience from "../components/WorkExperience";
import Footer from "../components/Footer";
import { ThemeProvider } from "../hooks/useTheme";

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-portfolio-background dark:bg-gray-900 text-portfolio-text dark:text-gray-300">
        <Navbar />
        <Hero />
        <About />
        <WorkExperience />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
