
import React from "react";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4">
        <div className="text-center animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-bold text-portfolio-heading mb-6">
            React Developer
          </h1>
          <p className="text-xl md:text-2xl text-portfolio-text max-w-2xl mx-auto mb-8">
            Specializzato nello sviluppo di applicazioni web moderne e performanti
            con React e il suo ecosistema
          </p>
          <a
            href="#skills"
            className="inline-block bg-portfolio-primary text-white px-8 py-3 rounded-lg hover:bg-portfolio-primary/90 transition-colors"
          >
            Scopri le mie competenze
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
