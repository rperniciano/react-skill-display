// Centralized Portfolio Data
export const portfolioData = {
  personal: {
    name: "Riccardo Perniciano",
    title: "Mid-Senior Full Stack Developer | AI Integration Specialist",
    email: "ricki.perniciano.work@gmail.com",
    phone: "+39 351 8745889",
    location: "Cagliari, Italia",
    portfolio: "https://react-skill-display.vercel.app/",
    github: "https://github.com/rickyperniciano",
    linkedin: "https://linkedin.com/in/riccardo-perniciano",
    yearsOfExperience: 7,
    summary: "Mid-Senior Full Stack Developer con 7+ anni di esperienza nella progettazione e implementazione di soluzioni enterprise scalabili. Lead developer di piattaforme AI-powered per l'analisi delle chiamate con processing di 1000+ trascrizioni/ora."
  },

  achievements: [
    { metric: "85%", label: "Code Reduction", description: "Riduzione codice legacy attraverso refactoring" },
    { metric: "99.9%", label: "Uptime", description: "Disponibilità sistema con retry policies" },
    { metric: "1000+", label: "Transcriptions/h", description: "Capacità di processing oraria" },
    { metric: "50+", label: "Tenants", description: "Gestione multi-tenant isolata" },
    { metric: "100k+", label: "Transactions/year", description: "Transazioni POS processate" },
    { metric: "10x", label: "Scalability", description: "Aumento capacità di carico" }
  ],

  experience: [
    {
      id: "fedro",
      title: "Software Engineer - Lead Developer",
      company: "Fedro Software SRL",
      location: "Cagliari, Italia",
      period: "Gennaio 2025 - Presente",
      current: true,
      description: "Lead developer della piattaforma enterprise FEDRO CognitiveServices per l'analisi intelligente delle chiamate attraverso AI",
      achievements: [
        "Ridotto l'85% del codice legacy attraverso refactoring con Template Method Pattern",
        "Implementato sistema Hangfire V2 per processing parallelo di 100+ file audio simultanei",
        "Raggiunto 99.9% uptime con retry policies e gestione errori resiliente",
        "Ottimizzato performance del 50% attraverso caching multi-livello",
        "Sviluppato abstraction layer per multi-provider AI (Azure, Assembly.AI, OpenAI)",
        "Gestione isolata di 50+ tenant con RBAC granulare e audit logging"
      ],
      technologies: [".NET 9", "C#", "Angular", "ABP.io", "SQL Server", "Elasticsearch", "Hangfire", "Azure Cognitive Services", "OpenAI GPT", "Docker"]
    },
    {
      id: "alten",
      title: "React Developer",
      company: "ALTEN Italia",
      client: "Expedia Group",
      location: "Roma (Remoto)",
      period: "2021 - 2023",
      description: "Sviluppatore React in team internazionale di 10+ persone per la piattaforma di prenotazioni Expedia",
      achievements: [
        "Sviluppato componenti React riutilizzabili per piattaforma con milioni di utenti",
        "Ottimizzato query GraphQL riducendo latenza API del 40%",
        "Implementato UI pixel-perfect da design Figma",
        "Test coverage 80%+ con Jest e Cypress",
        "Gestione pipeline CI/CD con Spinnaker"
      ],
      technologies: ["React", "TypeScript", "GraphQL", "Redux", "Jest", "Cypress", "Figma"]
    },
    {
      id: "softwarelab",
      title: "Software Engineer / Full-Stack Developer",
      company: "SOFTWARELAB",
      location: "Cagliari, Italia",
      period: "2018 - 2021",
      description: "Sviluppatore full-stack per sistemi embedded e applicazioni enterprise",
      achievements: [
        "Progettato sistema POS embedded gestendo 100.000+ transazioni/anno",
        "Sviluppato integrazioni WebServices per comunicazione real-time con sistemi bancari",
        "Ottimizzato database queries migliorando response time del 60%",
        "Creato documentazione tecnica e manuali utente"
      ],
      technologies: ["C#", "SQL Server", "MySQL", "REST APIs", "Embedded Systems"]
    },
    {
      id: "virtuard",
      title: "Mobile Developer",
      company: "Virtuard LTD",
      location: "Cagliari, Italia",
      period: "Marzo 2018 - Giugno 2018",
      description: "Sviluppatore mobile per applicazioni VR",
      achievements: [
        "Sviluppato app mobile VR per visualizzazione modelli 3D",
        "Implementato gesture recognition con giroscopio e accelerometro",
        "Ottimizzato rendering per 60 FPS stabili su dispositivi mobile"
      ],
      technologies: ["Unity", "C#", "Google VR SDK", "Mobile Development"]
    }
  ],

  projects: [
    {
      id: "fedro-cognitive",
      title: "FEDRO CognitiveServices Platform",
      description: "Piattaforma enterprise AI-powered per l'analisi intelligente delle chiamate",
      longDescription: "Sistema completo di orchestrazione per acquisizione file audio, trascrizione mediante AI, analisi NLP, indicizzazione full-text e visualizzazione dati con dashboard personalizzabili per tenant.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
      technologies: [".NET 9", "Angular", "OpenAI", "Elasticsearch", "Hangfire", "Azure", "Docker"],
      metrics: [
        "85% riduzione codice legacy",
        "99.9% uptime",
        "1000+ trascrizioni/ora",
        "50+ tenant gestiti"
      ],
      features: [
        "Multi-tenant architecture con isolation completo",
        "Processing parallelo con queue prioritarie",
        "Integrazione multi-provider AI",
        "Dashboard analytics real-time",
        "Sistema di billing granulare"
      ],
      type: "enterprise",
      year: 2025
    },
    {
      id: "expedia-components",
      title: "Expedia Component Library",
      description: "Libreria di componenti React enterprise per la piattaforma Expedia",
      longDescription: "Sistema di design components riutilizzabili con documentazione Storybook, testing completo e ottimizzazioni performance per milioni di utenti.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=80",
      technologies: ["React", "TypeScript", "GraphQL", "Storybook", "Jest", "Cypress"],
      metrics: [
        "40% riduzione latenza API",
        "80%+ code coverage",
        "Milioni di utenti serviti"
      ],
      features: [
        "Componenti accessibili WCAG compliant",
        "Theming system dinamico",
        "Performance optimization con code splitting",
        "Documentazione interattiva Storybook"
      ],
      type: "enterprise",
      year: 2022
    },
    {
      id: "pos-system",
      title: "POS Management System",
      description: "Sistema embedded per gestione pagamenti e reporting",
      longDescription: "Soluzione completa per gestione pagamenti POS con integrazione bancaria real-time e sistema di reporting avanzato.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=80",
      technologies: ["C#", "SQL Server", "Embedded Systems", "WebServices", "REST APIs"],
      metrics: [
        "100k+ transazioni/anno",
        "60% miglioramento response time",
        "Zero downtime critico"
      ],
      features: [
        "Processing pagamenti real-time",
        "Integrazione multi-banca",
        "Sistema di reporting automatizzato",
        "Gestione offline con sincronizzazione"
      ],
      type: "enterprise",
      year: 2020
    },
    {
      id: "react-portfolio",
      title: "Interactive React Portfolio",
      description: "Portfolio personale con animazioni avanzate e visualizzazioni interattive",
      longDescription: "Portfolio web moderno con animazioni fluide, dark mode, visualizzazioni dati interattive e design responsive.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Recharts"],
      github: "https://github.com/rickyperniciano/react-skill-display",
      demo: "https://react-skill-display.vercel.app/",
      features: [
        "Animazioni fluide",
        "Grafici interattivi con Recharts",
        "Dark/Light mode toggle",
        "Fully responsive design",
        "Performance optimized"
      ],
      type: "personal",
      year: 2024
    }
  ]
};