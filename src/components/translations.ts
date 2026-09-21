// Translation system for portfolio
export const translations = {
  it: {
    // Page-level metadata, read server-side by app/seo.ts. `hero.title` is the
    // on-page H1 and is deliberately the same English job title in every
    // locale, which left /it, /en and /es shipping an identical <title>.
    // These are written per locale and kept to ~50-60 rendered characters so
    // Google does not truncate them.
    meta: {
      title: "Riccardo Perniciano | Solution Architect .NET e sistemi AI"
    },
    nav: {
      home: "Home",
      skills: "Competenze",
      experience: "Esperienza",
      projects: "Progetti",
      about: "Chi Sono",
      contact: "Contatti",
      solutions: "Soluzioni",
      downloadCV: "Scarica CV",
      // Navbar CTA. The long form is hero.bookFreeCall.
      bookCall: "Prenota"
    },
    hero: {
      available: "Disponibile per nuovi progetti",
      yearsExp: "anni di esperienza",
      leadDeveloper: "Lead Developer presso",
      specializedIn: "Specializzato in",
      andArchitectures: "e architetture enterprise",
      explorePortfolio: "Esplora Portfolio",
      downloadCV: "Download CV",
      codeReduction: "Riduzione Codice",
      uptime: "Uptime",
      transcriptionsHour: "Trascrizioni/ora",
      tagline: "Sistemi AI in produzione, costruiti su .NET enterprise.",
      title: "Senior .NET Developer & Solution Architect",
      yearsExperienceIn: "anni di esperienza ·",
      enterpriseSolutions: "Sistemi AI in produzione",
      description: "Specializzato in sistemi AI in produzione: architetture multi-agente, integrazione LLM (Azure OpenAI, Anthropic Claude), pipeline real-time e RAG. Solution Architect & Lead Developer in FEDRO Software, dove ho portato una piattaforma AI per call center dallo zero alla produzione in 3 mesi.",
      bookFreeCall: "Prenota una call gratuita",
      noCommitment: "Senza impegno",
      thirtyMinCall: "Call di 30 minuti",
      legacyReduction: "Riduzione Code Legacy",
      systemUptime: "Uptime Sistemi",
      managedTenants: "Tenant Gestiti"
    },
    skills: {
      title: "Competenze Tecniche",
      subtitle: "anni di esperienza • Full Stack Development • AI Integration",
      currentPosition: "Lead Developer @ FEDRO",
      exTeam: "Ex-Expedia Team",
      viewGrid: "Vista Griglia",
      coreSkills: "Competenze Core",
      experience: "Esperienza",
      distribution: "Distribuzione",
      mainSkills: "Competenze Principali",
      skillLevel: "Livello di padronanza delle tecnologie core",
      yearsExperience: "Anni di Esperienza per Tecnologia",
      topTech: "Top 10 tecnologie per esperienza e livello di competenza",
      skillDistribution: "Distribuzione delle Competenze",
      byArea: "Ripartizione per area di specializzazione",
      technologies: "Tecnologie Padroneggiante",
      years: "Anni di Esperienza",
      avgLevel: "Livello Medio Competenza",
      certifications: "Certificazioni",
      all: "Tutte",
      frontend: "Frontend",
      backend: "Backend",
      aiCloud: "AI & Cloud",
      architecture: "Architettura",
      devops: "DevOps",
      testing: "Testing",
      viewCarousel: "Visualizza come carosello",
      viewColumn: "Visualizza in griglia",
      yearsUnit: "anni",
      // Section copy (moved out of Skills.tsx)
      stackTitle: "Stack Tecnologico Completo",
      stackSubtitle: "7+ anni di esperienza con tecnologie enterprise e integrazione AI avanzata",
      methodologiesTitle: "Metodologie & Tools",
      langFrameworksDesc: "Frontend: React, Angular, TypeScript, JavaScript ES6+, HTML5, CSS3/SASS",
      langFrameworksDetails: "Backend: C# (.NET 9), Node.js, REST APIs, GraphQL, Fastify, Swagger",
      databaseDesc: "SQL Server, MySQL, Elasticsearch, Supabase, Entity Framework Core",
      databaseDetails: "Query optimization, indicizzazione full-text, multi-tenancy isolation",
      aiSpeechDesc: "Azure OpenAI, Anthropic Claude, Assembly.AI, ElevenLabs",
      aiSpeechDetails: "Architetture multi-agente, integrazione LLM, RAG, structured outputs (JSON Schema), Speech-to-Text multi-provider, tooling agentico (MCP custom, Claude Code)",
      cloudDesc: "Microsoft Azure (VMs, Cognitive Services, Foundry), Docker",
      cloudDetails: "DevOps: Git, GitHub, Azure DevOps, Hangfire, Application Insights",
      architectureDesc: "DDD, CQRS, ABP.io, Entity Framework Repository Pattern",
      architectureDetails: "VR & 3D: Unity, C#, Google VR SDK, Mobile VR Development",
      testingMethodologiesTitle: "Testing & Metodologie",
      testingDesc: "Jest, Cypress, Unit Testing",
      testingDetails: "Metodologie: Agile (Scrum, Kanban), Jira",
      // Card labels (moved out of SkillCard.tsx)
      moreInfo: "Maggiori Informazioni",
      clickForDetails: "Clicca per ulteriori dettagli",
      category: "Categoria",
      proficiency: "Competenza"
    },
    ai: {
      badge: "Intelligenza artificiale",
      title: "Integrazione AI per risultati concreti e misurabili",
      intro1: "7+ anni di esperienza nell'integrazione di servizi cognitivi per soluzioni enterprise. Ho implementato sistemi che processano migliaia di trascrizioni all'ora con accuracy superiore al 95%.",
      intro2: "Lead developer della piattaforma FEDRO CognitiveServices: un sistema completo di orchestrazione per acquisizione file audio, trascrizione mediante AI, analisi NLP e indicizzazione full-text.",
      azureTitle: "Azure Cognitive Services Integration",
      azureDesc: "Implementazione completa di Azure AI per speech-to-text, analisi del sentiment e question answering con processing di 1000+ trascrizioni/ora.",
      multiProviderTitle: "OpenAI GPT & Assembly.AI",
      multiProviderDesc: "Abstraction layer multi-provider per switch trasparente tra diversi servizi AI. Integrazione seamless con fallback automatico.",
      nlpTitle: "NLP & Semantic Analysis",
      nlpDesc: "Sistemi avanzati di analisi semantica, question answering e indicizzazione full-text con Elasticsearch per ricerca intelligente."
    },
    solutions: {
      badge: "Soluzioni",
      title: "Soluzioni Enterprise che posso realizzare",
      subtitle: "Focus su architetture scalabili, integrazione AI e ottimizzazione di sistemi complessi.",
      enterpriseTitle: "Piattaforme Enterprise Scalabili",
      enterpriseDesc: "Sviluppo di soluzioni enterprise con architetture DDD, CQRS e microservices. Gestione multi-tenant con RBAC granulare.",
      aiTitle: "Integrazione AI & Cognitive Services",
      aiDesc: "Implementazione di servizi cognitivi Azure, OpenAI GPT e Assembly.AI. Speech-to-text, NLP e analisi semantica avanzata.",
      missionCriticalTitle: "Sistemi Mission-Critical ad Alta Disponibilità",
      missionCriticalDesc: "Progettazione di sistemi con 99.9% uptime, retry policies resilienti e gestione errori avanzata. Monitoring con Application Insights.",
      performanceTitle: "Ottimizzazione Performance & Legacy Code",
      performanceDesc: "Riduzione dell'85% del codice legacy attraverso refactoring strategico. Ottimizzazione performance del 50% con caching multi-livello e query optimization.",
      cta: "Parliamo del tuo progetto"
    },
    experience: {
      title: "Timeline Professionale",
      subtitle: "Il mio percorso professionale include diversi ruoli tecnici, formazione continua e certificazioni",
      all: "Tutto",
      work: "Lavoro",
      education: "Formazione",
      showDetails: "Mostra dettagli",
      hideDetails: "Nascondi dettagli",
      currentPosition: "Posizione Corrente",
      client: "Cliente",
      present: "Presente",
      january: "Gennaio",
      march: "Marzo",
      june: "Giugno",
      september: "Settembre",
      october: "Ottobre",
      december: "Dicembre",
      
      // Job descriptions (non traduciamo i nomi delle aziende)
      fedroDesc: [
        "Architetto e sviluppatore principale di SPRocket, piattaforma enterprise per l'analisi intelligente delle conversazioni telefoniche tramite AI",
        "Progettazione completa dell'architettura applicativa: Clean Architecture, DDD, CQRS su ABP.io",
        "Sviluppo orchestratore unificato con Hangfire per processing asincrono e parallelizzazione",
        "Implementazione multi-tenancy con isolamento dati, RBAC granulare",
        "Design RESTful APIs versionate con compliance OWASP",
        "Architettura provider-agnostic per servizi AI: switch trasparente tra Azure Cognitive Services, Assembly.AI e OpenAI",
        "Pipeline di trascrizione, analisi semantica e question-answering su conversazioni",
        "Dashboard Angular con visualizzazioni real-time dei KPI chiamate",
        "Motore di ricerca fulltext con Elasticsearch per navigazione istantanea su trascrizioni",
        "Ottimizzazione +50% performance con caching multi-livello e query tuning",
        "Sistema di retry policies e circuit breaker per resilienza"
      ],
      altenDesc: [
        "Sviluppatore frontend in team internazionale di 10+ sviluppatori per Expedia Group",
        "Sviluppo componente carosello \"Suggested Homes\" per raccomandazioni personalizzate agli utenti",
        "Implementazione widget meteo interattivo con visualizzazione forecast per date e location selezionate",
        "Sviluppo componenti React riutilizzabili seguendo design system aziendale",
        "Implementazione UI pixel-perfect da specifiche Figma con focus su responsive design",
        "Codebase enterprise servita a 1.000.000+ utenti",
        "Partecipazione attiva a refinement tecnici e definizione dei ticket",
        "Workflow Agile con team distribuito (daily standup, sprint review, retrospective)"
      ],
      softwarelabDesc: [
        "Progettazione e sviluppo da zero di sistema POS embedded per mense universitarie (Cliente: ERSU Cagliari)",
        "Architettura completa del software POS da zero",
        "Integrazione pagamenti carta multi-circuito (Visa, Mastercard, etc.) su hardware embedded",
        "Sviluppo WebServices per comunicazione real-time con sistemi di backend",
        "Gestione database transazionale (MySQL)",
        "Evoluzione da sviluppatore junior a referente tecnico diretto per ERSU e tecnici IT delle facoltà universitarie",
        "Creazione documentazione tecnica e manuali operativi per deployment e manutenzione",
        "Sistema operativo in diverse mense universitarie a Cagliari",
        "10.000+ transazioni/anno gestite"
      ],
      virtuardDesc: [
        "Sviluppatore in team di 3 persone per startup proptech - Piattaforma di Virtual Tour Immobiliare",
        "Co-sviluppo dell'applicazione VR mobile da zero per visualizzazione immersiva di immobili in affitto tramite foto 360° e realtà virtuale",
        "Implementazione sistema di navigazione gesture-based tramite giroscopio e accelerometro",
        "Rendering 3D ottimizzato per dispositivi mobile (60 FPS stabili)",
        "Compatibilità multi-device: Oculus, Google Cardboard, visori generici",
        "Applicazione rilasciata in produzione e tuttora attiva sul mercato"
      ],
      epicodeDesc: [
        "Corso di laurea in Computer Engineering in corso",
        "Focus su architetture software avanzate e best practices",
        "Approfondimento su cloud computing e sistemi distribuiti"
      ],
      reactCourseDesc: [
        "Approfondimento tecniche avanzate React con TypeScript",
        "Redux, Redux Toolkit, Redux Saga per state management",
        "Performance optimization e best practices"
      ],
      cssCourseDesc: [
        "Corso avanzato CSS e SASS",
        "Tecniche di styling moderne e responsive design",
        "Architettura CSS scalabile (BEM, OOCSS)"
      ],
      typescriptCourseDesc: [
        "TypeScript per applicazioni React",
        "Tipizzazione avanzata e generics",
        "Best practices e pattern TypeScript"
      ],
      diplomaDesc: [
        "Diploma in Informatica e Telecomunicazioni",
        "Focus su sviluppo software, reti e database",
        "Progetti pratici in C#, SQL, networking"
      ],
      // Timeline entries whose label is language-dependent (moved out of WorkExperience.tsx)
      altenLocation: "Roma (Remoto)",
      softwarelabTitle: "SOFTWARE DEVELOPER → TECHNICAL REFERENT",
      virtuardTitle: "MOBILE/VR DEVELOPER",
      diplomaTitle: "DIPLOMA IN INFORMATICA E TELECOMUNICAZIONI"
    },
    projects: {
      title: "Progetti & Portfolio",
      subtitle: "Progetti enterprise e personali che dimostrano expertise in architetture scalabili, AI integration e sviluppo full-stack",
      leadDeveloper: "Lead Developer",
      metrics: "Metriche",
      technologies: "Tecnologie",
      features: "Caratteristiche",
      code: "Codice",
      demo: "Demo",
      enterprise: "Enterprise",
      personal: "Personale",
      proprietary: "Proprietario",
      interestedCollab: "Interessato a collaborare?",
      openToProjects: "Sono sempre aperto a nuove sfide e progetti interessanti. Contattami per discutere come posso contribuire al tuo team.",
      contactMe: "Contattami",
      moreOnGithub: "Altri progetti su GitHub",
      
      // Copy for the portfolioData.projects entries, keyed by project id.
      //
      // It lives here rather than in portfolio-data.ts because that module is
      // imported by client components: an `{ it, en, es }` field there would ship
      // all three locales to every visitor, while the dictionary crosses the
      // server -> client boundary one locale at a time (see LanguageContext.tsx).
      projectItems: {
        sprocket: {
          title: "SPRocket - AI Call Analytics Platform",
          description: "Piattaforma enterprise per l'analisi intelligente delle conversazioni telefoniche tramite AI",
          longDescription: "Sistema completo di orchestrazione per acquisizione file audio, trascrizione mediante AI, analisi NLP, indicizzazione full-text e visualizzazione dati con dashboard personalizzabili per tenant. Costruito da zero su ABP.io con deployment in produzione in 3 mesi.",
          features: [
            "Clean Architecture, DDD, CQRS su ABP.io",
            "Multi-tenant con isolamento dati e RBAC granulare",
            "Provider-agnostic AI (Azure, Assembly.AI, OpenAI)",
            "Dashboard Angular con KPI real-time",
            "Motore di ricerca fulltext con Elasticsearch",
            "Sistema di retry policies e circuit breaker"
          ]
        },
        "cisa-automation": {
          title: "C.I.S.A. - Automazione Documentale e AI",
          description: "Automazione documentale e AI per un consorzio: protocollo, compiti, archivio, contabilità e riconciliazione dei pagamenti, con server MCP di dominio e infrastruttura interamente on-premise.",
          longDescription: "Fase 1 — studio di fattibilità e piano operativo — per cinque automazioni: protocollazione assistita della posta in arrivo, smistamento e assegnazione dei compiti ai referenti, riordino e indicizzazione dell'archivio documentale, acquisizione delle fatture con scadenzari e riconciliazione dei pagamenti. Backend C# su ABP Framework con un server MCP di dominio: il database resta l'unica fonte di verità, gli assistenti AI scrivono solo attraverso tool controllati e ogni decisione persistita ne registra l'origine. Progetto in corso.",
          features: [
            "Cinque automazioni: protocollo, compiti, archivio, contabilità, pagamenti",
            "Server MCP di dominio su ABP Framework: l'AI scrive solo tramite tool controllati, mai SQL",
            "Lavoro deterministico nel backend con job Hangfire, interpretativo lato AI, con origine tracciata",
            "Server MCP stdio che legge le share con l'identità dell'utente: le ACL NTFS le applica il file server",
            "Infrastruttura on-premise e governance EU AI Act (policy, registro dei sistemi AI, formazione art. 4)"
          ]
        },
        "expedia-components": {
          title: "Expedia Group - Frontend Components",
          description: "Sistema di design components riutilizzabili con documentazione Storybook, testing completo e ottimizzazioni performance per milioni di utenti.",
          longDescription: "Sviluppo di componenti React riutilizzabili seguendo design system aziendale, con UI pixel-perfect da specifiche Figma. Codebase enterprise servita a 1.000.000+ utenti.",
          features: [
            "Carosello \"Suggested Homes\" per raccomandazioni personalizzate",
            "Widget meteo interattivo con forecast",
            "UI pixel-perfect responsive",
            "Workflow Agile con team distribuito"
          ]
        },
        "pos-system": {
          title: "Sistema POS per Mense Universitarie",
          description: "Soluzione completa per gestione pagamenti POS con integrazione bancaria real-time e sistema di reporting avanzato.",
          longDescription: "Progettazione e sviluppo da zero di sistema POS embedded integrato in macchine automatiche per l'erogazione di buoni pasto universitari. Cliente: ERSU Cagliari.",
          features: [
            "Architettura software POS da zero",
            "Integrazione pagamenti multi-circuito (Visa, Mastercard)",
            "WebServices real-time con backend",
            "Documentazione tecnica e manuali operativi"
          ]
        },
        "react-portfolio": {
          title: "Interactive React Portfolio",
          description: "Portfolio personale con animazioni avanzate e visualizzazioni interattive",
          longDescription: "Portfolio web moderno con animazioni fluide, dark mode, visualizzazioni dati interattive e design responsive.",
          features: [
            "Animazioni fluide",
            "Grafici interattivi con Recharts",
            "Dark/Light mode toggle",
            "Fully responsive design",
            "Performance optimized"
          ]
        }
      },
      
      sprocketMetrics: [
        "ore di chiamate/mese",
        "uptime",
        "file audio in parallelo",
        "tenant enterprise"
      ],
      // Aligned by index with `expedia-components.metrics` in portfolio-data.ts:
      // getProjectMetrics keeps the figure and swaps only the label, so a third
      // label here used to leave the second metric ("code coverage") with no
      // figure at all. The role was React frontend - API latency and coverage
      // were never part of it.
      expediaMetrics: [
        "utenti serviti",
        "sviluppatori nel team"
      ],
      posMetrics: [
        "transazioni/anno",
        "miglioramento response time",
        "Zero downtime critico"
      ]
    },
    about: {
      title: "Chi Sono",
      available: "Disponibile",
      expertiseAreas: "Aree di Expertise",
      // About.tsx <h2>, rendered around the name: prefix + name + suffix.
      greetingPrefix: "Ciao, sono ",
      greetingSuffix: ". Piacere di conoscerti.",
      languages: "Lingue",
      italian: "Italiano",
      english: "Inglese",
      spanish: "Spagnolo",
      native: "Madrelingua",
      professional: "Professionale",
      intermediate: "Intermedio",
      levelB2: "B2 - Intermedio superiore",
      downloadFullCV: "Scarica CV Completo",
      contactMe: "Contattami",
      yearsExperience: "anni esperienza",
      codeReduction: "riduzione",
      codeLegacy: "Codice Legacy",
      transcriptionsHour: "trascrizioni/ora",
      aiProcessing: "AI Processing",
      // Bio paragraphs rendered by About.tsx
      profile1: "Senior .NET Developer & Solution Architect con 7+ anni di esperienza nella progettazione di soluzioni enterprise scalabili, oggi specializzato in AI in produzione: architetture multi-agente, integrazione LLM (Azure OpenAI, Anthropic Claude), pipeline real-time e RAG.",
      profile2: "Come Solution Architect & Technical Lead in FEDRO Software ho progettato e portato in produzione SPRocket e SprocketLive (analisi AI e assistenza live per call center): 2.000+ ore audio/mese, multi-tenant, 99.9% uptime, da zero a produzione in 3 mesi. Stack: .NET 9 · ABP.io (Clean Architecture, DDD, CQRS) · Angular · SignalR.",
      profile3: "Ho ridotto l'85% del codice legacy attraverso refactoring strategico e implementato un sistema di orchestrazione che gestisce il processing parallelo di centinaia di file audio.",
      profile4: "Ho lavorato con team internazionali per clienti come Expedia, sviluppando componenti utilizzati da milioni di utenti. Il mio approccio combina competenze tecniche con una visione strategica per creare soluzioni che risolvono problemi reali.",
      // Soft skills grid
      softSkillsTitle: "Competenze Trasversali",
      softSkillCommunicationTitle: "Comunicazione Tecnica",
      softSkillCommunicationDesc: "Stakeholder Management, referente tecnico verso clienti non-tecnici. Capacità di tradurre requisiti di business in soluzioni tecniche.",
      softSkillOwnershipTitle: "Ownership & Delivery",
      softSkillOwnershipDesc: "Track record di progetti portati da zero a produzione in tempi rapidi (3 mesi per piattaforma enterprise SPRocket).",
      softSkillTeamsTitle: "Team Internazionali",
      softSkillTeamsDesc: "2 anni in team distribuito 10+ sviluppatori per Expedia Group, metodologia Agile.",
      softSkillAutonomyTitle: "Autonomia & Problem Solving",
      softSkillAutonomyDesc: "Abitudine a lavorare con alta autonomia su architetture complesse, prendendo decisioni tecniche in prima persona.",
      languageSkillsTitle: "Competenze Linguistiche"
    },
    contact: {
      title: "Contattami",
      subtitle: "Disponibile per contratti freelance / B2B da remoto su progetti .NET + AI in produzione. Lavoro full-remote e parto veloce dall'idea al software funzionante.",
      contactInfo: "Informazioni di Contatto",
      availableProjects: "Disponibile per nuovi progetti",
      availableDesc: "Attualmente disponibile per opportunità di lavoro full-time o progetti freelance interessanti. Specializzato in sviluppo full-stack, AI integration e architetture enterprise.",
      fullTime: "Full-time",
      freelance: "Freelance",
      consulting: "Consulenza",
      remote: "Remote",
      responseTime: "Tempo di risposta",
      responseDesc: "Generalmente rispondo entro 24-48 ore. Per richieste urgenti, preferisco il contatto telefonico.",
      sendMessage: "Invia un Messaggio",
      name: "Nome",
      email: "Email",
      subject: "Oggetto",
      message: "Messaggio",
      namePlaceholder: "Il tuo nome",
      emailPlaceholder: "tua@email.com",
      subjectPlaceholder: "Di cosa vuoi parlare?",
      messagePlaceholder: "Il tuo messaggio...",
      sending: "Invio in corso...",
      messageSent: "Messaggio Inviato!",
      send: "Invia Messaggio",
      thankYou: "Grazie per il tuo messaggio! Ti risponderò il prima possibile.",
      phone: "Telefono",
      location: "Posizione",
      // Calendly CTA card and the "prefer to write?" card
      calendlyPitch: "Discutiamo del tuo progetto e di come posso aiutarti a realizzare le tue idee. Prenota una chiamata gratuita di 30 minuti senza impegno.",
      bookOnCalendly: "Prenota ora su Calendly",
      freeConsultation: "Consulenza gratuita",
      preferWriting: "Preferisci scrivere?",
      preferWritingDesc: "Puoi contattarmi direttamente via email o LinkedIn per qualsiasi domanda o proposta."
    },
    footer: {
      tagline: "Full Stack Developer con 7+ anni di esperienza nello sviluppo di soluzioni enterprise scalabili.",
      quickLinks: "Link Rapidi",
      // Leading space is intentional: it follows the "(c) <year> <name>." run in Footer.tsx
      rights: " Tutti i diritti riservati."
    }
  },
  
  en: {
    // See the note on `it.meta`.
    meta: {
      title: "Riccardo Perniciano | .NET Solution Architect & AI Systems"
    },
    nav: {
      home: "Home",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      about: "About",
      contact: "Contact",
      solutions: "Solutions",
      downloadCV: "Download CV",
      // Navbar CTA. The long form is hero.bookFreeCall.
      bookCall: "Book a call"
    },
    hero: {
      available: "Available for new projects",
      yearsExp: "years of experience",
      leadDeveloper: "Lead Developer at",
      specializedIn: "Specialized in",
      andArchitectures: "and enterprise architectures",
      explorePortfolio: "Explore Portfolio",
      downloadCV: "Download CV",
      codeReduction: "Code Reduction",
      uptime: "Uptime",
      transcriptionsHour: "Transcriptions/h",
      tagline: "The partner for developing your enterprise ideas.",
      title: "Senior .NET Developer & Solution Architect",
      yearsExperienceIn: "years of experience in",
      enterpriseSolutions: "enterprise solutions",
      description: "Expert in cognitive services integration (Azure AI, OpenAI GPT) and complex architecture optimization. Lead Developer at FEDRO Software with focus on AI-powered solutions.",
      bookFreeCall: "Book a free call",
      noCommitment: "No commitment",
      thirtyMinCall: "30-minute call",
      legacyReduction: "Legacy Code Reduction",
      systemUptime: "System Uptime",
      managedTenants: "Managed Tenants"
    },
    skills: {
      title: "Technical Skills",
      subtitle: "years of experience • Full Stack Development • AI Integration",
      currentPosition: "Lead Developer @ FEDRO",
      exTeam: "Ex-Expedia Team",
      viewGrid: "Grid View",
      coreSkills: "Core Skills",
      experience: "Experience",
      distribution: "Distribution",
      mainSkills: "Main Skills",
      skillLevel: "Proficiency level of core technologies",
      yearsExperience: "Years of Experience by Technology",
      topTech: "Top 10 technologies by experience and skill level",
      skillDistribution: "Skills Distribution",
      byArea: "Distribution by specialization area",
      technologies: "Technologies Mastered",
      years: "Years of Experience",
      avgLevel: "Average Skill Level",
      certifications: "Certifications",
      all: "All",
      frontend: "Frontend",
      backend: "Backend",
      aiCloud: "AI & Cloud",
      architecture: "Architecture",
      devops: "DevOps",
      testing: "Testing",
      viewCarousel: "View as carousel",
      viewColumn: "View as grid",
      yearsUnit: "years",
      // Section copy (moved out of Skills.tsx)
      stackTitle: "Complete Technology Stack",
      stackSubtitle: "7+ years of experience with enterprise technologies and advanced AI integration",
      methodologiesTitle: "Methodologies & Tools",
      langFrameworksDesc: "Frontend: React, Angular, TypeScript, JavaScript ES6+, HTML5, CSS3/SASS",
      langFrameworksDetails: "Backend: C# (.NET 9), Node.js, REST APIs, GraphQL, Fastify, Swagger",
      databaseDesc: "SQL Server, MySQL, Elasticsearch, Supabase, Entity Framework Core",
      databaseDetails: "Query optimization, full-text indexing, multi-tenancy isolation",
      aiSpeechDesc: "Azure OpenAI, Anthropic Claude, Assembly.AI, ElevenLabs",
      aiSpeechDetails: "Multi-agent architectures, LLM integration, RAG, structured outputs (JSON Schema), multi-provider Speech-to-Text, agentic tooling (custom MCP, Claude Code)",
      cloudDesc: "Microsoft Azure (VMs, Cognitive Services, Foundry), Docker",
      cloudDetails: "DevOps: Git, GitHub, Azure DevOps, Hangfire, Application Insights",
      architectureDesc: "DDD, CQRS, ABP.io, Entity Framework Repository Pattern",
      architectureDetails: "VR & 3D: Unity, C#, Google VR SDK, Mobile VR Development",
      testingMethodologiesTitle: "Testing & Methodologies",
      testingDesc: "Jest, Cypress, Unit Testing",
      testingDetails: "Methodologies: Agile (Scrum, Kanban), Jira",
      // Card labels (moved out of SkillCard.tsx)
      moreInfo: "More Information",
      clickForDetails: "Click for more details",
      category: "Category",
      proficiency: "Proficiency"
    },
    ai: {
      badge: "Artificial Intelligence",
      title: "AI Integration for concrete and measurable results",
      intro1: "7+ years of experience integrating cognitive services for enterprise solutions. I've implemented systems that process thousands of transcriptions per hour with over 95% accuracy.",
      intro2: "Lead developer of FEDRO CognitiveServices platform: a complete orchestration system for audio file acquisition, AI transcription, NLP analysis and full-text indexing.",
      azureTitle: "Azure Cognitive Services Integration",
      azureDesc: "Complete Azure AI implementation for speech-to-text, sentiment analysis and question answering with 1000+ transcriptions/hour processing.",
      multiProviderTitle: "OpenAI GPT & Assembly.AI",
      multiProviderDesc: "Multi-provider abstraction layer for transparent switching between different AI services. Seamless integration with automatic fallback.",
      nlpTitle: "NLP & Semantic Analysis",
      nlpDesc: "Advanced semantic analysis systems, question answering and full-text indexing with Elasticsearch for intelligent search."
    },
    solutions: {
      badge: "Solutions",
      title: "Enterprise Solutions I Can Build",
      subtitle: "Focus on scalable architectures, AI integration and complex systems optimization.",
      enterpriseTitle: "Scalable Enterprise Platforms",
      enterpriseDesc: "Development of enterprise solutions with DDD, CQRS and microservices architectures. Multi-tenant management with granular RBAC.",
      aiTitle: "AI & Cognitive Services Integration",
      aiDesc: "Implementation of Azure cognitive services, OpenAI GPT and Assembly.AI. Speech-to-text, NLP and advanced semantic analysis.",
      missionCriticalTitle: "High Availability Mission-Critical Systems",
      missionCriticalDesc: "Design of systems with 99.9% uptime, resilient retry policies and advanced error handling. Monitoring with Application Insights.",
      performanceTitle: "Performance Optimization & Legacy Code",
      performanceDesc: "85% legacy code reduction through strategic refactoring. 50% performance optimization with multi-layer caching and query optimization.",
      cta: "Let's talk about your project"
    },
    experience: {
      title: "Professional Timeline",
      subtitle: "My professional journey includes various technical roles, continuous training and certifications",
      all: "All",
      work: "Work",
      education: "Education",
      showDetails: "Show details",
      hideDetails: "Hide details",
      currentPosition: "Current Position",
      client: "Client",
      present: "Present",
      january: "January",
      march: "March",
      june: "June",
      september: "September",
      october: "October",
      december: "December",
      
      fedroDesc: [
        "Architect and lead developer of SPRocket, enterprise platform for intelligent phone conversation analysis via AI",
        "Complete application architecture design: Clean Architecture, DDD, CQRS on ABP.io",
        "Unified orchestrator development with Hangfire for async processing and parallelization",
        "Multi-tenancy implementation with data isolation, granular RBAC",
        "RESTful APIs design versioned with OWASP compliance",
        "Provider-agnostic architecture for AI services: transparent switch between Azure Cognitive Services, Assembly.AI and OpenAI",
        "Transcription, semantic analysis and question-answering pipeline on conversations",
        "Angular dashboard with real-time call KPI visualizations",
        "Fulltext search engine with Elasticsearch for instant navigation on transcriptions",
        "+50% performance optimization with multi-layer caching and query tuning",
        "Retry policies and circuit breaker system for resilience"
      ],
      altenDesc: [
        "Frontend developer in international team of 10+ developers for Expedia Group",
        "Development of \"Suggested Homes\" carousel component for personalized user recommendations",
        "Implementation of interactive weather widget with forecast visualization for selected dates and locations",
        "Reusable React components development following company design system",
        "Pixel-perfect UI implementation from Figma specs with focus on responsive design",
        "Enterprise codebase serving 1,000,000+ users",
        "Active participation in technical refinements and ticket definition",
        "Agile workflow with distributed team (daily standup, sprint review, retrospective)"
      ],
      softwarelabDesc: [
        "Design and development from scratch of embedded POS system for university canteens (Client: ERSU Cagliari)",
        "Complete POS software architecture from scratch",
        "Multi-circuit card payment integration (Visa, Mastercard, etc.) on embedded hardware",
        "WebServices development for real-time communication with backend systems",
        "Transactional database management (MySQL)",
        "Evolution from junior developer to direct technical referent for ERSU and university faculty IT staff",
        "Technical documentation and operational manuals creation for deployment and maintenance",
        "System operational in various university canteens in Cagliari",
        "10,000+ transactions/year managed"
      ],
      virtuardDesc: [
        "Developer in team of 3 for proptech startup - Real Estate Virtual Tour Platform",
        "Co-development of VR mobile application from scratch for immersive visualization of rental properties via 360° photos and virtual reality",
        "Gesture-based navigation system implementation via gyroscope and accelerometer",
        "3D rendering optimized for mobile devices (stable 60 FPS)",
        "Multi-device compatibility: Oculus, Google Cardboard, generic headsets",
        "Application released to production and still active in the market"
      ],
      epicodeDesc: [
        "Computer Engineering degree in progress",
        "Focus on advanced software architectures and best practices",
        "Deep dive on cloud computing and distributed systems"
      ],
      reactCourseDesc: [
        "Advanced React techniques with TypeScript",
        "Redux, Redux Toolkit, Redux Saga for state management",
        "Performance optimization and best practices"
      ],
      cssCourseDesc: [
        "Advanced CSS and SASS course",
        "Modern styling techniques and responsive design",
        "Scalable CSS architecture (BEM, OOCSS)"
      ],
      typescriptCourseDesc: [
        "TypeScript for React applications",
        "Advanced typing and generics",
        "TypeScript best practices and patterns"
      ],
      diplomaDesc: [
        "Diploma in Computer Science and Telecommunications",
        "Focus on software development, networks and databases",
        "Practical projects in C#, SQL, networking"
      ],
      // Timeline entries whose label is language-dependent (moved out of WorkExperience.tsx)
      altenLocation: "Rome (Remote)",
      softwarelabTitle: "SOFTWARE DEVELOPER → TECHNICAL REFERENT",
      virtuardTitle: "MOBILE/VR DEVELOPER",
      diplomaTitle: "DIPLOMA IN COMPUTER SCIENCE AND TELECOMMUNICATIONS"
    },
    projects: {
      title: "Projects & Portfolio",
      subtitle: "Enterprise and personal projects demonstrating expertise in scalable architectures, AI integration and full-stack development",
      leadDeveloper: "Lead Developer",
      metrics: "Metrics",
      technologies: "Technologies",
      features: "Features",
      code: "Code",
      demo: "Demo",
      enterprise: "Enterprise",
      personal: "Personal",
      proprietary: "Proprietary",
      interestedCollab: "Interested in collaborating?",
      openToProjects: "I'm always open to new challenges and interesting projects. Contact me to discuss how I can contribute to your team.",
      contactMe: "Contact Me",
      moreOnGithub: "More projects on GitHub",
      
      // Copy for the portfolioData.projects entries, keyed by project id.
      //
      // It lives here rather than in portfolio-data.ts because that module is
      // imported by client components: an `{ it, en, es }` field there would ship
      // all three locales to every visitor, while the dictionary crosses the
      // server -> client boundary one locale at a time (see LanguageContext.tsx).
      projectItems: {
        sprocket: {
          title: "SPRocket - AI Call Analytics Platform",
          description: "Enterprise platform for intelligent phone conversation analysis via AI",
          longDescription: "Complete orchestration system for audio file acquisition, AI transcription, NLP analysis, full-text indexing and data visualization with customizable dashboards per tenant. Built from scratch on ABP.io with production deployment in 3 months.",
          features: [
            "Clean Architecture, DDD, CQRS on ABP.io",
            "Multi-tenant with data isolation and granular RBAC",
            "Provider-agnostic AI (Azure, Assembly.AI, OpenAI)",
            "Angular dashboard with real-time KPIs",
            "Fulltext search engine with Elasticsearch",
            "Retry policies and circuit breaker system"
          ]
        },
        "cisa-automation": {
          title: "C.I.S.A. - Document Automation & AI",
          description: "Document automation and AI for a consortium: mail registration, task routing, document archive, accounting and payment reconciliation, with a domain MCP server and fully on-premise infrastructure.",
          longDescription: "Phase 1 — feasibility study and operational plan — for five automations: assisted registration of incoming mail, routing and assignment of tasks to the referents, reorganisation and indexing of the document archive, invoice acquisition with due-date scheduling, and payment reconciliation. C# backend on ABP Framework with a domain MCP server: the database remains the single source of truth, AI assistants write only through controlled tools, and every persisted decision records its origin. Work in progress.",
          features: [
            "Five automations: protocol, tasks, archive, accounting, payments",
            "Domain MCP server on ABP Framework: the AI writes only through controlled tools, never SQL",
            "Deterministic work in the backend as Hangfire jobs, interpretive work in the AI, origin always tracked",
            "stdio MCP server reading the shares as the logged-in user: NTFS ACLs enforced by the file server",
            "On-premise infrastructure and EU AI Act governance (policy, AI systems register, Article 4 training)"
          ]
        },
        "expedia-components": {
          title: "Expedia Group - Frontend Components",
          description: "Reusable design component system with Storybook documentation, complete testing and performance optimizations for millions of users.",
          longDescription: "Development of reusable React components following the company design system, with pixel-perfect UI from Figma specs. Enterprise codebase serving 1,000,000+ users.",
          features: [
            "\"Suggested Homes\" carousel for personalized recommendations",
            "Interactive weather widget with forecast",
            "Pixel-perfect responsive UI",
            "Agile workflow with a distributed team"
          ]
        },
        "pos-system": {
          title: "POS System for University Canteens",
          description: "Complete solution for POS payment management with real-time bank integration and advanced reporting system.",
          longDescription: "Design and development from scratch of an embedded POS system integrated into vending machines for issuing university meal vouchers. Client: ERSU Cagliari.",
          features: [
            "POS software architecture from scratch",
            "Multi-circuit payment integration (Visa, Mastercard)",
            "Real-time WebServices with the backend",
            "Technical documentation and operational manuals"
          ]
        },
        "react-portfolio": {
          title: "Interactive React Portfolio",
          description: "Personal portfolio with advanced animations and interactive visualizations",
          longDescription: "Modern web portfolio with smooth animations, dark mode, interactive data visualizations and responsive design.",
          features: [
            "Smooth animations",
            "Interactive charts with Recharts",
            "Dark/Light mode toggle",
            "Fully responsive design",
            "Performance optimized"
          ]
        }
      },
      
      sprocketMetrics: [
        "hours of calls/month",
        "uptime",
        "audio files in parallel",
        "enterprise tenants"
      ],
      // See the note on `it.projects.expediaMetrics`.
      expediaMetrics: [
        "users served",
        "developers in the team"
      ],
      posMetrics: [
        "transactions/year",
        "response time improvement",
        "Zero critical downtime"
      ]
    },
    about: {
      title: "About Me",
      available: "Available",
      expertiseAreas: "Expertise Areas",
      // About.tsx <h2>, rendered around the name: prefix + name + suffix.
      greetingPrefix: "Hi, I'm ",
      greetingSuffix: ". Nice to meet you.",
      languages: "Languages",
      italian: "Italian",
      english: "English",
      spanish: "Spanish",
      native: "Native",
      professional: "Professional",
      intermediate: "Intermediate",
      levelB2: "B2 - Upper intermediate",
      downloadFullCV: "Download Full CV",
      contactMe: "Contact Me",
      yearsExperience: "years experience",
      codeReduction: "reduction",
      codeLegacy: "Legacy Code",
      transcriptionsHour: "transcriptions/hour",
      aiProcessing: "AI Processing",
      // Bio paragraphs rendered by About.tsx
      profile1: "Senior .NET Developer & Solution Architect with 7+ years of experience designing scalable enterprise solutions, today specialized in production AI: multi-agent architectures, LLM integration (Azure OpenAI, Anthropic Claude), real-time pipelines and RAG.",
      profile2: "As Solution Architect & Technical Lead at FEDRO Software I designed and took to production SPRocket and SprocketLive (AI analysis and live assistance for call centers): 2,000+ audio hours/month, multi-tenant, 99.9% uptime, from zero to production in 3 months. Stack: .NET 9 · ABP.io (Clean Architecture, DDD, CQRS) · Angular · SignalR.",
      profile3: "I reduced 85% of legacy code through strategic refactoring and implemented an orchestration system that manages parallel processing of hundreds of audio files.",
      profile4: "I've worked with international teams for clients like Expedia, developing components used by millions of users. My approach combines technical skills with a strategic vision to create solutions that solve real problems.",
      // Soft skills grid
      softSkillsTitle: "Soft Skills",
      softSkillCommunicationTitle: "Technical Communication",
      softSkillCommunicationDesc: "Stakeholder Management, technical referent for non-technical clients. Ability to translate business requirements into technical solutions.",
      softSkillOwnershipTitle: "Ownership & Delivery",
      softSkillOwnershipDesc: "Track record of projects delivered from zero to production quickly (3 months for SPRocket enterprise platform).",
      softSkillTeamsTitle: "International Teams",
      softSkillTeamsDesc: "2 years in distributed team of 10+ developers for Expedia Group, Agile methodology.",
      softSkillAutonomyTitle: "Autonomy & Problem Solving",
      softSkillAutonomyDesc: "Accustomed to working with high autonomy on complex architectures, making technical decisions firsthand.",
      languageSkillsTitle: "Language Skills"
    },
    contact: {
      title: "Contact Me",
      subtitle: "Available for full-time opportunities, freelance projects and innovative collaborations in software development and AI",
      contactInfo: "Contact Information",
      availableProjects: "Available for new projects",
      availableDesc: "Currently available for full-time job opportunities or interesting freelance projects. Specialized in full-stack development, AI integration and enterprise architectures.",
      fullTime: "Full-time",
      freelance: "Freelance",
      consulting: "Consulting",
      remote: "Remote",
      responseTime: "Response Time",
      responseDesc: "I usually respond within 24-48 hours. For urgent requests, I prefer phone contact.",
      sendMessage: "Send a Message",
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      namePlaceholder: "Your name",
      emailPlaceholder: "your@email.com",
      subjectPlaceholder: "What would you like to discuss?",
      messagePlaceholder: "Your message...",
      sending: "Sending...",
      messageSent: "Message Sent!",
      send: "Send Message",
      thankYou: "Thank you for your message! I'll respond as soon as possible.",
      phone: "Phone",
      location: "Location",
      // Calendly CTA card and the "prefer to write?" card
      calendlyPitch: "Let's talk about your project and how I can help you bring your ideas to life. Book a free 30-minute call, no commitment.",
      bookOnCalendly: "Book now on Calendly",
      freeConsultation: "Free consultation",
      preferWriting: "Prefer to write?",
      preferWritingDesc: "You can reach me directly by email or on LinkedIn for any question or proposal."
    },
    footer: {
      tagline: "Full Stack Developer with 7+ years of experience developing scalable enterprise solutions.",
      quickLinks: "Quick Links",
      // Leading space is intentional: it follows the "(c) <year> <name>." run in Footer.tsx
      rights: " All rights reserved."
    }
  },
  
  es: {
    // See the note on `it.meta`.
    meta: {
      title: "Riccardo Perniciano | Solution Architect .NET y sistemas IA"
    },
    nav: {
      home: "Inicio",
      skills: "Habilidades",
      experience: "Experiencia",
      projects: "Proyectos",
      about: "Sobre Mí",
      contact: "Contacto",
      solutions: "Soluciones",
      downloadCV: "Descargar CV",
      // Navbar CTA. The long form is hero.bookFreeCall.
      bookCall: "Reservar"
    },
    hero: {
      available: "Disponible para nuevos proyectos",
      yearsExp: "años de experiencia",
      leadDeveloper: "Lead Developer en",
      specializedIn: "Especializado en",
      andArchitectures: "y arquitecturas empresariales",
      explorePortfolio: "Explorar Portfolio",
      downloadCV: "Descargar CV",
      codeReduction: "Reducción de Código",
      uptime: "Tiempo Activo",
      transcriptionsHour: "Transcripciones/h",
      tagline: "El socio para el desarrollo de tus ideas empresariales.",
      title: "Senior .NET Developer & Solution Architect",
      yearsExperienceIn: "años de experiencia en",
      enterpriseSolutions: "soluciones empresariales",
      description: "Experto en integración de servicios cognitivos (Azure AI, OpenAI GPT) y optimización de arquitecturas complejas. Lead Developer en FEDRO Software con enfoque en soluciones impulsadas por IA.",
      bookFreeCall: "Reserva una llamada gratuita",
      noCommitment: "Sin compromiso",
      thirtyMinCall: "Llamada de 30 minutos",
      legacyReduction: "Reducción de Código Legacy",
      systemUptime: "Tiempo Activo del Sistema",
      managedTenants: "Inquilinos Gestionados"
    },
    skills: {
      title: "Habilidades Técnicas",
      subtitle: "años de experiencia • Desarrollo Full Stack • Integración IA",
      currentPosition: "Lead Developer @ FEDRO",
      exTeam: "Ex-Equipo Expedia",
      viewGrid: "Vista Cuadrícula",
      coreSkills: "Habilidades Principales",
      experience: "Experiencia",
      distribution: "Distribución",
      mainSkills: "Habilidades Principales",
      skillLevel: "Nivel de dominio de tecnologías principales",
      yearsExperience: "Años de Experiencia por Tecnología",
      topTech: "Top 10 tecnologías por experiencia y nivel de habilidad",
      skillDistribution: "Distribución de Habilidades",
      byArea: "Distribución por área de especialización",
      technologies: "Tecnologías Dominadas",
      years: "Años de Experiencia",
      avgLevel: "Nivel Promedio de Habilidad",
      certifications: "Certificaciones",
      all: "Todas",
      frontend: "Frontend",
      backend: "Backend",
      aiCloud: "IA y Nube",
      architecture: "Arquitectura",
      devops: "DevOps",
      testing: "Testing",
      viewCarousel: "Ver como carrusel",
      viewColumn: "Ver como cuadrícula",
      yearsUnit: "años",
      // Section copy (moved out of Skills.tsx)
      stackTitle: "Stack Tecnológico Completo",
      stackSubtitle: "7+ años de experiencia con tecnologías enterprise e integración avanzada de IA",
      methodologiesTitle: "Metodologías & Tools",
      langFrameworksDesc: "Frontend: React, Angular, TypeScript, JavaScript ES6+, HTML5, CSS3/SASS",
      langFrameworksDetails: "Backend: C# (.NET 9), Node.js, REST APIs, GraphQL, Fastify, Swagger",
      databaseDesc: "SQL Server, MySQL, Elasticsearch, Supabase, Entity Framework Core",
      databaseDetails: "Query optimization, indexación full-text, multi-tenancy isolation",
      aiSpeechDesc: "Azure OpenAI, Anthropic Claude, Assembly.AI, ElevenLabs",
      aiSpeechDetails: "Arquitecturas multiagente, integración LLM, RAG, structured outputs (JSON Schema), Speech-to-Text multi-provider, tooling agéntico (MCP custom, Claude Code)",
      cloudDesc: "Microsoft Azure (VMs, Cognitive Services, Foundry), Docker",
      cloudDetails: "DevOps: Git, GitHub, Azure DevOps, Hangfire, Application Insights",
      architectureDesc: "DDD, CQRS, ABP.io, Entity Framework Repository Pattern",
      architectureDetails: "VR & 3D: Unity, C#, Google VR SDK, Mobile VR Development",
      testingMethodologiesTitle: "Testing & Metodologías",
      testingDesc: "Jest, Cypress, Unit Testing",
      testingDetails: "Metodologías: Agile (Scrum, Kanban), Jira",
      // Card labels (moved out of SkillCard.tsx)
      moreInfo: "Más Información",
      clickForDetails: "Haz clic para más detalles",
      category: "Categoría",
      proficiency: "Competencia"
    },
    ai: {
      badge: "Inteligencia artificial",
      title: "Integración de IA para resultados concretos y medibles",
      intro1: "7+ años de experiencia en la integración de servicios cognitivos para soluciones enterprise. He implementado sistemas que procesan miles de transcripciones por hora con una accuracy superior al 95%.",
      intro2: "Lead developer de la plataforma FEDRO CognitiveServices: un sistema completo de orquestación para la adquisición de archivos de audio, transcripción mediante IA, análisis NLP e indexación full-text.",
      azureTitle: "Azure Cognitive Services Integration",
      azureDesc: "Implementación completa de Azure AI para speech-to-text, análisis del sentiment y question answering con processing de 1000+ transcripciones/hora.",
      multiProviderTitle: "OpenAI GPT & Assembly.AI",
      multiProviderDesc: "Abstraction layer multi-provider para switch transparente entre distintos servicios de IA. Integración seamless con fallback automático.",
      nlpTitle: "NLP & Semantic Analysis",
      nlpDesc: "Sistemas avanzados de análisis semántico, question answering e indexación full-text con Elasticsearch para búsqueda inteligente."
    },
    solutions: {
      badge: "Soluciones",
      title: "Soluciones Enterprise que puedo desarrollar",
      subtitle: "Foco en arquitecturas escalables, integración de IA y optimización de sistemas complejos.",
      enterpriseTitle: "Plataformas Enterprise Escalables",
      enterpriseDesc: "Desarrollo de soluciones enterprise con arquitecturas DDD, CQRS y microservices. Gestión multi-tenant con RBAC granular.",
      aiTitle: "Integración IA & Cognitive Services",
      aiDesc: "Implementación de servicios cognitivos Azure, OpenAI GPT y Assembly.AI. Speech-to-text, NLP y análisis semántico avanzado.",
      missionCriticalTitle: "Sistemas Mission-Critical de Alta Disponibilidad",
      missionCriticalDesc: "Diseño de sistemas con 99.9% uptime, retry policies resilientes y gestión avanzada de errores. Monitoring con Application Insights.",
      performanceTitle: "Optimización de Performance & Legacy Code",
      performanceDesc: "Reducción del 85% del código legacy mediante refactoring estratégico. Optimización del 50% del rendimiento con caching multinivel y query optimization.",
      cta: "Hablemos de tu proyecto"
    },
    experience: {
      title: "Línea de Tiempo Profesional",
      subtitle: "Mi trayectoria profesional incluye varios roles técnicos, formación continua y certificaciones",
      all: "Todo",
      work: "Trabajo",
      education: "Educación",
      showDetails: "Mostrar detalles",
      hideDetails: "Ocultar detalles",
      currentPosition: "Posición Actual",
      client: "Cliente",
      present: "Presente",
      january: "Enero",
      march: "Marzo",
      june: "Junio",
      september: "Septiembre",
      october: "Octubre",
      december: "Diciembre",
      
      fedroDesc: [
        "Arquitecto y desarrollador principal de SPRocket, plataforma enterprise para análisis inteligente de conversaciones telefónicas mediante IA",
        "Diseño completo de la arquitectura aplicativa: Clean Architecture, DDD, CQRS sobre ABP.io",
        "Desarrollo de orquestador unificado con Hangfire para procesamiento asíncrono y paralelización",
        "Implementación de multi-tenancy con aislamiento de datos, RBAC granular",
        "Diseño de APIs RESTful versionadas con cumplimiento OWASP",
        "Arquitectura provider-agnostic para servicios IA: cambio transparente entre Azure Cognitive Services, Assembly.AI y OpenAI",
        "Pipeline de transcripción, análisis semántico y question-answering sobre conversaciones",
        "Dashboard Angular con visualizaciones en tiempo real de KPIs de llamadas",
        "Motor de búsqueda fulltext con Elasticsearch para navegación instantánea en transcripciones",
        "Optimización +50% de rendimiento con caché multicapa y query tuning",
        "Sistema de retry policies y circuit breaker para resiliencia"
      ],
      altenDesc: [
        "Desarrollador frontend en equipo internacional de 10+ desarrolladores para Expedia Group",
        "Desarrollo del componente carrusel \"Suggested Homes\" para recomendaciones personalizadas a usuarios",
        "Implementación de widget meteorológico interactivo con visualización de pronóstico para fechas y ubicaciones seleccionadas",
        "Desarrollo de componentes React reutilizables siguiendo design system empresarial",
        "Implementación de UI pixel-perfect desde especificaciones Figma con enfoque en diseño responsive",
        "Codebase enterprise sirviendo a 1.000.000+ usuarios",
        "Participación activa en refinements técnicos y definición de tickets",
        "Workflow Agile con equipo distribuido (daily standup, sprint review, retrospective)"
      ],
      softwarelabDesc: [
        "Diseño y desarrollo desde cero de sistema POS embebido para comedores universitarios (Cliente: ERSU Cagliari)",
        "Arquitectura completa del software POS desde cero",
        "Integración de pagos con tarjeta multi-circuito (Visa, Mastercard, etc.) en hardware embebido",
        "Desarrollo de WebServices para comunicación en tiempo real con sistemas de backend",
        "Gestión de base de datos transaccional (MySQL)",
        "Evolución de desarrollador junior a referente técnico directo para ERSU y personal IT de facultades universitarias",
        "Creación de documentación técnica y manuales operativos para despliegue y mantenimiento",
        "Sistema operativo en varios comedores universitarios de Cagliari",
        "10.000+ transacciones/año gestionadas"
      ],
      virtuardDesc: [
        "Desarrollador en equipo de 3 personas para startup proptech - Plataforma de Tour Virtual Inmobiliario",
        "Co-desarrollo de aplicación VR móvil desde cero para visualización inmersiva de inmuebles en alquiler mediante fotos 360° y realidad virtual",
        "Implementación de sistema de navegación basado en gestos mediante giroscopio y acelerómetro",
        "Renderizado 3D optimizado para dispositivos móviles (60 FPS estables)",
        "Compatibilidad multi-dispositivo: Oculus, Google Cardboard, visores genéricos",
        "Aplicación lanzada en producción y aún activa en el mercado"
      ],
      epicodeDesc: [
        "Carrera de Ingeniería Informática en curso",
        "Enfoque en arquitecturas de software avanzadas y mejores prácticas",
        "Profundización en cloud computing y sistemas distribuidos"
      ],
      reactCourseDesc: [
        "Técnicas avanzadas de React con TypeScript",
        "Redux, Redux Toolkit, Redux Saga para gestión de estado",
        "Optimización de rendimiento y mejores prácticas"
      ],
      cssCourseDesc: [
        "Curso avanzado de CSS y SASS",
        "Técnicas de estilizado modernas y diseño responsive",
        "Arquitectura CSS escalable (BEM, OOCSS)"
      ],
      typescriptCourseDesc: [
        "TypeScript para aplicaciones React",
        "Tipado avanzado y generics",
        "Mejores prácticas y patrones TypeScript"
      ],
      diplomaDesc: [
        "Diploma en Informática y Telecomunicaciones",
        "Enfoque en desarrollo de software, redes y bases de datos",
        "Proyectos prácticos en C#, SQL, redes"
      ],
      // Timeline entries whose label is language-dependent (moved out of WorkExperience.tsx)
      altenLocation: "Roma (Remoto)",
      softwarelabTitle: "DESARROLLADOR → REFERENTE TÉCNICO",
      virtuardTitle: "DESARROLLADOR MÓVIL/VR",
      diplomaTitle: "DIPLOMA EN INFORMÁTICA Y TELECOMUNICACIONES"
    },
    projects: {
      title: "Proyectos y Portfolio",
      subtitle: "Proyectos empresariales y personales que demuestran experiencia en arquitecturas escalables, integración IA y desarrollo full-stack",
      leadDeveloper: "Desarrollador Principal",
      metrics: "Métricas",
      technologies: "Tecnologías",
      features: "Características",
      code: "Código",
      demo: "Demo",
      enterprise: "Empresarial",
      personal: "Personal",
      proprietary: "Propietario",
      interestedCollab: "¿Interesado en colaborar?",
      openToProjects: "Siempre estoy abierto a nuevos desafíos y proyectos interesantes. Contáctame para discutir cómo puedo contribuir a tu equipo.",
      contactMe: "Contáctame",
      moreOnGithub: "Más proyectos en GitHub",
      
      // Copy for the portfolioData.projects entries, keyed by project id.
      //
      // It lives here rather than in portfolio-data.ts because that module is
      // imported by client components: an `{ it, en, es }` field there would ship
      // all three locales to every visitor, while the dictionary crosses the
      // server -> client boundary one locale at a time (see LanguageContext.tsx).
      projectItems: {
        sprocket: {
          title: "SPRocket - AI Call Analytics Platform",
          description: "Plataforma enterprise para el análisis inteligente de conversaciones telefónicas mediante IA",
          longDescription: "Sistema completo de orquestación para adquisición de archivos de audio, transcripción mediante IA, análisis NLP, indexación de texto completo y visualización de datos con dashboards personalizables por inquilino. Construido desde cero sobre ABP.io con despliegue en producción en 3 meses.",
          features: [
            "Clean Architecture, DDD, CQRS sobre ABP.io",
            "Multi-tenant con aislamiento de datos y RBAC granular",
            "IA provider-agnostic (Azure, Assembly.AI, OpenAI)",
            "Dashboard Angular con KPIs en tiempo real",
            "Motor de búsqueda fulltext con Elasticsearch",
            "Sistema de retry policies y circuit breaker"
          ]
        },
        "cisa-automation": {
          title: "C.I.S.A. - Automatización Documental e IA",
          description: "Automatización documental e IA para un consorcio: protocolo, tareas, archivo, contabilidad y conciliación de pagos, con servidor MCP de dominio e infraestructura íntegramente on-premise.",
          longDescription: "Fase 1 — estudio de viabilidad y plan operativo — para cinco automatizaciones: registro asistido del correo entrante, distribución y asignación de tareas a los referentes, reorganización e indexación del archivo documental, adquisición de facturas con vencimientos y conciliación de pagos. Backend C# sobre ABP Framework con un servidor MCP de dominio: la base de datos sigue siendo la única fuente de verdad, los asistentes de IA escriben solo mediante herramientas controladas y cada decisión persistida registra su origen. Proyecto en curso.",
          features: [
            "Cinco automatizaciones: protocolo, tareas, archivo, contabilidad, pagos",
            "Servidor MCP de dominio sobre ABP Framework: la IA escribe solo mediante herramientas controladas, nunca SQL",
            "Trabajo determinista en el backend con jobs Hangfire, interpretativo en la IA, con el origen siempre trazado",
            "Servidor MCP stdio que lee los recursos compartidos con la identidad del usuario: las ACL NTFS las aplica el servidor de archivos",
            "Infraestructura on-premise y gobernanza del EU AI Act (política, registro de sistemas de IA, formación art. 4)"
          ]
        },
        "expedia-components": {
          title: "Expedia Group - Frontend Components",
          description: "Sistema de componentes de diseño reutilizables con documentación Storybook, testing completo y optimizaciones de rendimiento para millones de usuarios.",
          longDescription: "Desarrollo de componentes React reutilizables siguiendo el design system empresarial, con UI pixel-perfect desde especificaciones Figma. Codebase enterprise sirviendo a 1.000.000+ usuarios.",
          features: [
            "Carrusel \"Suggested Homes\" para recomendaciones personalizadas",
            "Widget meteorológico interactivo con pronóstico",
            "UI pixel-perfect responsive",
            "Workflow Agile con equipo distribuido"
          ]
        },
        "pos-system": {
          title: "Sistema POS para Comedores Universitarios",
          description: "Solución completa para gestión de pagos POS con integración bancaria en tiempo real y sistema de reportes avanzado.",
          longDescription: "Diseño y desarrollo desde cero de un sistema POS embebido integrado en máquinas expendedoras para la emisión de vales de comida universitarios. Cliente: ERSU Cagliari.",
          features: [
            "Arquitectura del software POS desde cero",
            "Integración de pagos multi-circuito (Visa, Mastercard)",
            "WebServices en tiempo real con el backend",
            "Documentación técnica y manuales operativos"
          ]
        },
        "react-portfolio": {
          title: "Interactive React Portfolio",
          description: "Portfolio personal con animaciones avanzadas y visualizaciones interactivas",
          longDescription: "Portfolio web moderno con animaciones fluidas, modo oscuro, visualizaciones de datos interactivas y diseño responsivo.",
          features: [
            "Animaciones fluidas",
            "Gráficos interactivos con Recharts",
            "Dark/Light mode toggle",
            "Fully responsive design",
            "Performance optimized"
          ]
        }
      },
      
      sprocketMetrics: [
        "horas de llamadas/mes",
        "uptime",
        "archivos de audio en paralelo",
        "inquilinos enterprise"
      ],
      // See the note on `it.projects.expediaMetrics`.
      expediaMetrics: [
        "usuarios atendidos",
        "desarrolladores en el equipo"
      ],
      posMetrics: [
        "transacciones/año",
        "mejora tiempo respuesta",
        "Cero tiempo inactivo crítico"
      ]
    },
    about: {
      title: "Sobre Mí",
      available: "Disponible",
      expertiseAreas: "Áreas de Experiencia",
      // About.tsx <h2>, rendered around the name: prefix + name + suffix.
      greetingPrefix: "Hola, soy ",
      greetingSuffix: ". Encantado de conocerte.",
      languages: "Idiomas",
      italian: "Italiano",
      english: "Inglés",
      spanish: "Español",
      native: "Nativo",
      professional: "Profesional",
      intermediate: "Intermedio",
      levelB2: "B2 - Intermedio alto",
      downloadFullCV: "Descargar CV Completo",
      contactMe: "Contáctame",
      yearsExperience: "años experiencia",
      codeReduction: "reducción",
      codeLegacy: "Código Legacy",
      transcriptionsHour: "transcripciones/hora",
      aiProcessing: "Procesamiento IA",
      // Bio paragraphs rendered by About.tsx
      profile1: "Senior .NET Developer & Solution Architect con 7+ años de experiencia en el diseño de soluciones enterprise escalables, hoy especializado en IA en producción: arquitecturas multiagente, integración LLM (Azure OpenAI, Anthropic Claude), pipelines real-time y RAG.",
      profile2: "Como Solution Architect & Technical Lead en FEDRO Software he diseñado y llevado a producción SPRocket y SprocketLive (análisis con IA y asistencia live para call centers): 2.000+ horas de audio/mes, multi-tenant, 99.9% uptime, de cero a producción en 3 meses. Stack: .NET 9 · ABP.io (Clean Architecture, DDD, CQRS) · Angular · SignalR.",
      profile3: "He reducido el 85% del código legacy mediante refactoring estratégico e implementado un sistema de orquestación que gestiona el procesamiento paralelo de cientos de archivos de audio.",
      profile4: "He trabajado con equipos internacionales para clientes como Expedia, desarrollando componentes utilizados por millones de usuarios. Mi enfoque combina competencias técnicas con una visión estratégica para crear soluciones que resuelven problemas reales.",
      // Soft skills grid
      softSkillsTitle: "Competencias Transversales",
      softSkillCommunicationTitle: "Comunicación Técnica",
      softSkillCommunicationDesc: "Gestión de stakeholders, referente técnico para clientes no técnicos. Capacidad de traducir requisitos de negocio en soluciones técnicas.",
      softSkillOwnershipTitle: "Ownership & Delivery",
      softSkillOwnershipDesc: "Historial de proyectos llevados de cero a producción en tiempos rápidos (3 meses para plataforma enterprise SPRocket).",
      softSkillTeamsTitle: "Equipos Internacionales",
      softSkillTeamsDesc: "2 años en equipo distribuido de 10+ desarrolladores para Expedia Group, metodología Agile.",
      softSkillAutonomyTitle: "Autonomía & Problem Solving",
      softSkillAutonomyDesc: "Acostumbrado a trabajar con alta autonomía en arquitecturas complejas, tomando decisiones técnicas de primera mano.",
      languageSkillsTitle: "Competencias Lingüísticas"
    },
    contact: {
      title: "Contáctame",
      subtitle: "Disponible para oportunidades a tiempo completo, proyectos freelance y colaboraciones innovadoras en desarrollo de software e IA",
      contactInfo: "Información de Contacto",
      availableProjects: "Disponible para nuevos proyectos",
      availableDesc: "Actualmente disponible para oportunidades de trabajo a tiempo completo o proyectos freelance interesantes. Especializado en desarrollo full-stack, integración IA y arquitecturas empresariales.",
      fullTime: "Tiempo completo",
      freelance: "Freelance",
      consulting: "Consultoría",
      remote: "Remoto",
      responseTime: "Tiempo de Respuesta",
      responseDesc: "Generalmente respondo dentro de 24-48 horas. Para solicitudes urgentes, prefiero el contacto telefónico.",
      sendMessage: "Enviar un Mensaje",
      name: "Nombre",
      email: "Correo",
      subject: "Asunto",
      message: "Mensaje",
      namePlaceholder: "Tu nombre",
      emailPlaceholder: "tu@correo.com",
      subjectPlaceholder: "¿De qué quieres hablar?",
      messagePlaceholder: "Tu mensaje...",
      sending: "Enviando...",
      messageSent: "¡Mensaje Enviado!",
      send: "Enviar Mensaje",
      thankYou: "¡Gracias por tu mensaje! Responderé lo antes posible.",
      phone: "Teléfono",
      location: "Ubicación",
      // Calendly CTA card and the "prefer to write?" card
      calendlyPitch: "Hablemos de tu proyecto y de cómo puedo ayudarte a hacer realidad tus ideas. Reserva una llamada gratuita de 30 minutos sin compromiso.",
      bookOnCalendly: "Reserva ahora en Calendly",
      freeConsultation: "Consultoría gratuita",
      preferWriting: "¿Prefieres escribir?",
      preferWritingDesc: "Puedes contactarme directamente por correo electrónico o LinkedIn para cualquier pregunta o propuesta."
    },
    footer: {
      tagline: "Full Stack Developer con 7+ años de experiencia en el desarrollo de soluciones enterprise escalables.",
      quickLinks: "Enlaces Rápidos",
      // Leading space is intentional: it follows the "(c) <year> <name>." run in Footer.tsx
      rights: " Todos los derechos reservados."
    }
  }
};