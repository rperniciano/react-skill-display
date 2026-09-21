// Centralized Portfolio Data

/**
 * Shape of a `portfolioData.projects` entry.
 *
 * The array below is annotated instead of being left to inference. TypeScript
 * infers an array literal of differing object literals as a union of those
 * literals, and while it does add each literal's *missing siblings* back as
 * optional (which is why `github` / `demo` / `metrics` resolve), a key that no
 * literal carries at all is absent from the union entirely. `Projects.tsx` reads
 * `project.client`, so that key needs to exist on the declared type.
 *
 * Optional members mirror the inferred union exactly; nothing here narrows a
 * property the inference had widened.
 *
 * Title, description and feature list are deliberately absent: they are copy,
 * and copy lives in `translations.ts` under `projects.projectItems`, keyed by
 * this `id`. This module is imported by client components, so a localised
 * field here would ship all three locales to every visitor - the dictionary
 * only crosses the server -> client boundary one locale at a time.
 */
export interface PortfolioProject {
  id: string;
  image: string;
  technologies: string[];
  type: string;
  year: number;
  metrics?: string[];
  github?: string;
  demo?: string;
  client?: string;
}

const projects: PortfolioProject[] = [
  {
    id: "sprocket",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
    technologies: ["ABP.io", ".NET 9", "Angular", "Azure Cognitive Services", "OpenAI GPT", "Assembly.AI", "Elasticsearch", "Hangfire", "Docker"],
    metrics: [
      "2.000+ ore di chiamate/mese",
      "99.9% uptime",
      "100+ file audio in parallelo",
      "2 tenant enterprise"
    ],
    type: "enterprise",
    year: 2025
  },
  {
    // Second position on purpose: Projects.tsx renders `projects[0]` as the
    // featured card with a hardcoded "2025" badge, so the featured slot has to
    // stay on `sprocket`. This is the first card of the grid below it.
    //
    // No `github` / `demo`: the client repository is private (it holds
    // contractual and commercial material), so there is nothing public to link.
    // No `metrics` either - phase 1 is a feasibility study and operational
    // plan, and every figure available today is either confidential or comes
    // from the demo environment. See translations.ts for the copy.
    id: "cisa-automation",
    image: "https://images.unsplash.com/photo-1583521214690-73421a1829a9?auto=format&fit=crop&w=1000&q=80",
    technologies: ["ABP Framework", ".NET 10", "C#", "Angular 22", "PostgreSQL 17", "EF Core 10", "MCP", "Hangfire", "Docker"],
    type: "enterprise",
    year: 2026,
    client: "C.I.S.A."
  },
  {
    id: "expedia-components",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=80",
    technologies: ["React", "TypeScript", "GraphQL", "Jest", "Cypress", "Figma"],
    metrics: [
      "1.000.000+ utenti serviti",
      "10+ sviluppatori nel team"
    ],
    type: "enterprise",
    year: 2022
  },
  {
    id: "pos-system",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=80",
    technologies: ["C#", "MySQL", "REST APIs", "Embedded Systems", "Integrazione POS"],
    metrics: [
      "10.000+ transazioni/anno",
      "Diverse mense universitarie",
      "Centinaia di transazioni/giorno"
    ],
    type: "enterprise",
    year: 2020
  },
  {
    id: "react-portfolio",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Recharts"],
    github: "https://github.com/rperniciano/react-skill-display",
    demo: "https://react-skill-display.vercel.app/",
    type: "personal",
    year: 2024
  }
];

export const portfolioData = {
  personal: {
    name: "Riccardo Perniciano",
    title: "Senior .NET Developer & Solution Architect",
    email: "ricki.perniciano.work@gmail.com",
    phone: "+39 351 8745889",
    location: "09128, Cagliari",
    portfolio: "https://riccardo-perniciano-cv.vercel.app/",
    github: "https://github.com/rperniciano",
    linkedin: "https://linkedin.com/in/riccardo-perniciano",
    yearsOfExperience: 7,
    birthDate: "10/04/1999",
    summary: "Senior .NET Developer & Solution Architect con 7+ anni di esperienza nella progettazione e implementazione di soluzioni enterprise scalabili. Esperto nell'integrazione di servizi cognitivi (Azure AI, OpenAI GPT) e nell'ottimizzazione di architetture complesse."
  },

  achievements: [
    { metric: "2.000+", label: "Hours/month", description: "Ore di chiamate processate mensilmente" },
    { metric: "99.9%", label: "Uptime", description: "Sistema mission-critical" },
    { metric: "100+", label: "Parallel Files", description: "File audio gestiti in parallelo" },
    { metric: "2", label: "Enterprise Tenants", description: "Tenant attivi in produzione" },
    { metric: "10k+", label: "Transactions/year", description: "Transazioni POS gestite" },
    { metric: "+50%", label: "Performance", description: "Ottimizzazione con caching e query tuning" }
  ],

  experience: [
    {
      id: "fedro",
      title: "Solution Architect & Technical Lead",
      company: "FEDRO Software SRL",
      location: "Cagliari",
      period: "Gennaio 2025 - Presente",
      current: true,
      project: "SPRocket",
      description: "Architetto e sviluppatore principale di SPRocket, piattaforma enterprise per l'analisi intelligente delle conversazioni telefoniche tramite AI. Progetto costruito interamente da zero su framework ABP.io — dalla definizione dell'architettura applicativa al deployment in produzione in 3 mesi.",
      achievements: [
        "Progettazione completa dell'architettura applicativa: Clean Architecture, DDD, CQRS su ABP.io",
        "Sviluppo orchestratore unificato con Hangfire per processing asincrono e parallelizzazione",
        "Implementazione multi-tenancy con isolamento dati, RBAC granulare",
        "Design RESTful APIs versionate con compliance OWASP",
        "Architettura provider-agnostic per servizi AI: switch trasparente tra Azure Cognitive Services, Assembly.AI e OpenAI",
        "Pipeline di trascrizione, analisi semantica e question-answering su conversazioni",
        "Dashboard Angular con visualizzazioni real-time dei KPI chiamate",
        "Motore di ricerca fulltext con Elasticsearch per navigazione istantanea su trascrizioni",
        "Sistema di reportistica e CRM tramite AG-GRID",
        "Ottimizzazione +50% performance con caching multi-livello e query tuning",
        "Sistema di retry policies e circuit breaker per resilienza"
      ],
      metrics: {
        hoursProcessed: "2.000+",
        tenants: 2,
        uptime: "99.9%",
        parallelFiles: "100+"
      },
      technologies: ["ABP.io", ".NET 9", "C#", "Angular", "TypeScript", "SQL Server", "Elasticsearch", "Hangfire", "Azure Cognitive Services", "OpenAI GPT", "Assembly.AI", "Docker", "Apache2"]
    },
    {
      id: "alten",
      title: "Frontend Developer",
      company: "ALTEN Italia",
      client: "Expedia Group",
      location: "Roma (Remoto)",
      period: "2021 - 2023",
      description: "Sviluppatore frontend in team internazionale di 10+ sviluppatori per Expedia Group, una delle maggiori piattaforme di prenotazione viaggi al mondo.",
      achievements: [
        "Sviluppo componente carosello \"Suggested Homes\" per raccomandazioni personalizzate agli utenti",
        "Implementazione widget meteo interattivo con visualizzazione forecast per date e location selezionate",
        "Sviluppo componenti React riutilizzabili seguendo design system aziendale",
        "Implementazione UI pixel-perfect da specifiche Figma con focus su responsive design",
        "Codebase enterprise servita a 1.000.000+ utenti",
        "Partecipazione attiva a refinement tecnici e definizione dei ticket",
        "Workflow Agile con team distribuito (daily standup, sprint review, retrospective)"
      ],
      technologies: ["React", "TypeScript", "GraphQL", "Jest", "Cypress", "Figma"]
    },
    {
      id: "softwarelab",
      title: "Software Developer → Technical Referent",
      company: "SOFTWARELAB",
      location: "Cagliari",
      period: "2018 - 2021",
      project: "Sistema POS Embedded per Mense Universitarie",
      client: "ERSU Cagliari (Ente Regionale per il Diritto allo Studio)",
      description: "Progettazione e sviluppo da zero di sistema POS embedded integrato in macchine automatiche per l'erogazione di buoni pasto universitari.",
      achievements: [
        "Architettura completa del software POS da zero",
        "Integrazione pagamenti carta multi-circuito (Visa, Mastercard, etc.) su hardware embedded",
        "Sviluppo WebServices per comunicazione real-time con sistemi di backend",
        "Gestione database transazionale (MySQL)",
        "Evoluzione da sviluppatore junior a referente tecnico diretto per ERSU e tecnici IT delle facoltà universitarie",
        "Creazione documentazione tecnica e manuali operativi per deployment e manutenzione",
        "Sistema operativo in diverse mense universitarie a Cagliari",
        "Centinaia di transazioni giornaliere da parte degli studenti",
        "10.000+ transazioni/anno gestite"
      ],
      technologies: ["C#", "MySQL", "REST APIs", "Embedded Systems", "Integrazione POS"]
    },
    {
      id: "virtuard",
      title: "Mobile/VR Developer",
      company: "Virtuard LTD",
      location: "Cagliari",
      period: "Marzo 2018 - Giugno 2018",
      contractType: "Contratto a progetto",
      project: "Piattaforma di Virtual Tour Immobiliare",
      description: "Sviluppatore in team di 3 persone per startup proptech con l'obiettivo di rivoluzionare il settore booking/hospitality attraverso esperienze immersive VR. Sviluppo da zero di applicazione mobile per visualizzazione immersiva di immobili in affitto tramite foto 360° e realtà virtuale.",
      achievements: [
        "Co-sviluppo dell'applicazione VR mobile da zero in team di 3",
        "Implementazione sistema di navigazione gesture-based tramite giroscopio e accelerometro",
        "Rendering 3D ottimizzato per dispositivi mobile (60 FPS stabili)",
        "Compatibilità multi-device: Oculus, Google Cardboard, visori generici",
        "Applicazione rilasciata in produzione e tuttora attiva sul mercato (versione evoluta)"
      ],
      technologies: ["Unity", "C#", "Google VR SDK", "Mobile Development", "3D Rendering"]
    }
  ],

  projects
};