
import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-portfolio-background">
      <Navbar />
      <Hero />
      <Skills />
      <Footer />
    </div>
  );
};

export default Index;
