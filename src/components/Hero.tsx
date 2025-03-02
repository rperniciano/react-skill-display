
import React, { useState, useEffect } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Calculate mouse position as a percentage of the viewport
      const x = event.clientX / window.innerWidth;
      const y = event.clientY / window.innerHeight;
      setMousePosition({ x, y });
      
      // Set absolute cursor position for the glow effect
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Calculate the transform values for parallax effect (only for background)
  const transformX = mousePosition.x * 20; // Max 20px move in X direction
  const transformY = mousePosition.y * 20; // Max 20px move in Y direction

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Custom cursor light effect */}
      <div 
        className="pointer-events-none fixed w-48 h-48 rounded-full bg-white/20 mix-blend-overlay blur-xl z-50"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
          transform: 'translate(-50%, -50%)',
          transition: 'left 0.1s ease-out, top 0.1s ease-out'
        }}
      />
      
      {/* Background video with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <video 
          autoPlay 
          loop 
          muted 
          className="w-full h-full object-cover"
          style={{ 
            transform: `translate(${-transformX}px, ${-transformY}px) scale(1.1)`,
            transition: 'transform 0.2s ease-out'
          }}
        >
          <source src="https://videos.pexels.com/video-files/853750/853750-hd_1920_1080_25fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            React Developer
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-2xl mx-auto mb-8">
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
