// Translation system for portfolio
export const translations = {
  it: {
    // Page-level metadata, read server-side by app/seo.ts. `hero.title` is the
    // on-page H1 and is deliberately the same English job title in every
    // locale, which left /it, /en and /es shipping an identical <title>.
    // `title` is written per locale and kept to ~50-65 rendered characters so
    // Google does not truncate it.
    //
    // `description` is the SERP copy, 150-160 characters. It is a key of its
    // own rather than a reuse of `hero.description`: the hero paragraph is
    // on-page copy, written at whatever length reads well, and squeezing it
    // into the SERP budget cost it a clause. Neither constrains the other.
    meta: {
      title: "Riccardo Perniciano | Solution Architect .NET e sistemi AI",
      description: "Solution Architect & Technical Lead in FEDRO Software: architetture multi-agente, integrazione LLM (Azure OpenAI, Anthropic Claude), pipeline real-time e RAG."
    },
    nav: {
      home: "Home",
      skills: "Competenze",
      experience: "Esperienza",
      projects: "Progetti",
      about: "Chi Sono",
      contact: "Contatti",
      solutions: "Soluzioni",
      // Navbar entry for /servizi, rendered only when language === 'it'
      // (Navbar.tsx) because the hub and its two children don't exist under
      // /en or /es. The key exists in all three locales anyway - the
      // symmetry test in translations.test.ts requires it, and this is a
      // label, not a page body, so it isn't the "dead copy" case that keeps
      // full page copy out of this dictionary.
      servizi: "Servizi",
      downloadCV: "Scarica CV",
      // Navbar CTA. The long form is hero.bookFreeCall.
      bookCall: "Prenota"
    },
    hero: {
      available: "Disponibile per nuovi progetti",
      yearsExp: "anni di esperienza",
      leadDeveloper: "Solution Architect & Technical Lead presso",
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
      // On-page hero copy, and only that: the page <meta name="description">
      // is `meta.description`, so this paragraph is free to run as long as it
      // reads well. The role title matches `about.profile2`.
      description: "Specializzato in sistemi AI in produzione: architetture multi-agente, integrazione LLM (Azure OpenAI, Anthropic Claude), pipeline real-time e RAG. Solution Architect & Technical Lead in FEDRO Software, dove ho portato una piattaforma AI per call center dallo zero alla produzione in 3 mesi.",
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
      currentPosition: "Solution Architect & Technical Lead @ FEDRO",
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
      cisaDesc: [
        "Fase 1 in corso: studio di fattibilità e piano operativo per l'automazione documentale e AI del consorzio",
        "Analisi e disegno di cinque automazioni: protocollazione assistita della posta in arrivo, smistamento dei compiti ai referenti, riordino e indicizzazione dell'archivio documentale, acquisizione delle fatture con scadenzari, riconciliazione dei pagamenti",
        "Architettura e sviluppo del backend C# su ABP Framework, con il database come unica fonte di verità e app Angular per la gestione dei compiti",
        "Server MCP di dominio esposto dal backend: gli assistenti AI scrivono solo tramite tool controllati e autorizzati per permesso, mai in SQL diretto",
        "Confine netto tra lavoro deterministico nel backend (API, parsing, job schedulati con Hangfire) e lavoro interpretativo lasciato all'AI: classificazione delle email, centri di costo, abbinamenti bancari",
        "Ogni decisione persistita registra la propria origine, AI o operatore, con conferma umana obbligatoria sui passaggi contabili",
        "Server MCP stdio distribuito come singolo eseguibile, che legge le share con l'identità dell'utente loggato: le ACL NTFS le applica il file server, non il codice applicativo",
        "Infrastruttura interamente on-premise e impianto di governance EU AI Act: policy, registro dei sistemi AI e piano di formazione art. 4"
      ],
      virtuardCurrentDesc: [
        "Pilota tecnico su quattro approcci per rendere i tour \"walkable\": depth estimation monoculare, Gaussian splatting da video walk-through, ricostruzione generativa, fusione multi-vista",
        "Approccio scelto, idea propria: fondere le panoramiche già esistenti dello stesso ambiente riprese da punti diversi, per ricostruire geometria realmente fotografata",
        "Area non ricostruita scesa dal 26.6% al 2.7% a 4.2 m dal punto di ripresa (dal 19.2% al 6.9% a 2.1 m), qualità di allineamento da 0.056 a 0.321",
        "Pipeline che confronta due stime di scala indipendenti e segnala il risultato come inaffidabile quando divergono, invece di restituire in silenzio una stanza sbagliata",
        "Ricostruzione generativa valutata e scartata: introduce geometrie mai fotografate e ha vincoli di licenza sui modelli disponibili",
        "Scala metrica assoluta non ricavabile dalle sole panoramiche: servono planimetrie reali, raccolte tramite un'interfaccia di calibrazione scala/planimetria integrata in piattaforma"
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
      cisaOrganization: "Attività in proprio",
      altenLocation: "Roma (Remoto)",
      softwarelabTitle: "SOFTWARE DEVELOPER → TECHNICAL REFERENT",
      virtuardTitle: "MOBILE/VR DEVELOPER",
      diplomaTitle: "DIPLOMA IN INFORMATICA E TELECOMUNICAZIONI"
    },
    projects: {
      title: "Progetti & Portfolio",
      subtitle: "Progetti enterprise e personali che dimostrano expertise in architetture scalabili, AI integration e sviluppo full-stack",
      // Badge on the SPRocket featured card. The role title is English in all
      // three locales, exactly as `about.profile2` writes it.
      leadDeveloper: "Solution Architect & Technical Lead",
      metrics: "Metriche",
      technologies: "Tecnologie",
      features: "Caratteristiche",
      code: "Codice",
      demo: "Demo",
      enterprise: "Enterprise",
      startup: "Startup",
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
            "Infrastruttura on-premise e governance EU AI Act (policy, registro dei sistemi AI e piano di formazione art. 4)"
          ]
        },
        sprocketlive: {
          title: "SprocketLive - Assistente AI in Tempo Reale per Call Center",
          description: "Modulo in tempo reale della piattaforma SPRocket: trascrive la chiamata mentre è in corso e genera suggerimenti AI per l'operatore attimo per attimo.",
          longDescription: "Distinto da SPRocket (analisi batch sulle registrazioni): SprocketLive cattura l'audio dal centralino telefonico, lo trascrive in tempo reale e usa un modello AI per decidere, mentre la conversazione procede, se e quando suggerire qualcosa all'operatore. Architettura a eventi con bus di messaggistica interno e aggiornamenti push via WebSocket verso il pannello operatore; più agenti AI configurabili possono lavorare in parallelo sulla stessa chiamata (es. vendita e compliance), con un agente di validazione opzionale che rivede i suggerimenti prima che raggiungano l'operatore.",
          features: [
            "Trascrizione live con provider intercambiabili (AssemblyAI, Azure Speech)",
            "Motore di suggerimenti AI event-driven, con più agenti configurabili in parallelo per chiamata",
            "Agente di validazione (Evaluator) opzionale come controllo qualità prima della consegna",
            "Aggiornamenti push via WebSocket verso pannello operatore e vista supervisore per il monitoraggio live",
            "Riproduzione di chiamate registrate per testare il comportamento del sistema senza chiamate reali",
            "Deployment modulare: trascrizione, agenti e registrazione abilitabili come moduli indipendenti"
          ]
        },
        studiapp: {
          title: "StudIApp - Tutor AI per Esami STEM Universitari",
          description: "Piattaforma AI che aiuta gli studenti universitari italiani a superare gli esami STEM, a partire da Analisi 1: test diagnostico adattivo, piano di studio personalizzato e simulazioni d'esame a tempo con feedback in tempo reale.",
          longDescription: "Prodotto personale, live su studiapp.it. Metodologia in tre fasi - test diagnostico adattivo per individuare punti di forza e lacune, piano di studio personalizzato sui contenuti rilevanti per l'esame, simulazioni d'esame a tempo con feedback immediato - affiancata da un tutor AI in chat in tempo reale. Frontend Next.js, gateway Node.js e backend Python per la logica AI, dati su PostgreSQL, containerizzato con Docker.",
          features: [
            "Test diagnostico adattivo per individuare punti di forza e aree di miglioramento",
            "Piano di studio personalizzato sui contenuti rilevanti per l'esame",
            "Simulazioni d'esame a tempo con punteggio e feedback immediato",
            "Tutor AI in chat in tempo reale per rispondere alle domande di studio",
            "Focus iniziale su Analisi 1, primo grande scoglio degli esami STEM universitari"
          ]
        },
        virtuard: {
          title: "Virtuard - Virtual Tour Immersivi e Ricostruzione 3D",
          description: "Collaborazione con la proptech Virtuard, dal 2018: prima l'app VR mobile per virtual tour immobiliari, oggi un pilota R&D che ricostruisce gli ambienti in 3D dalle panoramiche già esistenti dei tour.",
          longDescription: "Due fasi della stessa collaborazione. 2018: co-sviluppo da zero, in team di 3, dell'app VR mobile per virtual tour immobiliari a 360°, con rendering a 60 FPS multi-device. 2026: pilota tecnico per rendere i tour esplorabili in 3D. Su quattro approcci di ricostruzione valutati, ho scelto un'idea propria: fondere le panoramiche già esistenti dello stesso ambiente riprese da punti diversi, per ricostruire geometria realmente fotografata. R&D in corso, non ancora rivolta ai visitatori del sito.",
          features: [
            "2018: co-sviluppo dell'app VR mobile da zero in team di 3, navigazione gesture-based e rendering a 60 FPS multi-device (Oculus, Google Cardboard, visori generici)",
            "2026: quattro tecniche di ricostruzione valutate — depth estimation monoculare da singola panoramica, Gaussian splatting da video walk-through, ricostruzione generativa, fusione multi-vista",
            "2026: approccio scelto, idea propria — fondere le panoramiche già esistenti dello stesso ambiente da punti diversi, ogni scatto copre i punti ciechi dell'altro",
            "2026: area non ricostruita scesa dal 26.6% al 2.7% a 4.2 m dal punto di ripresa (dal 19.2% al 6.9% a 2.1 m), qualità di allineamento da 0.056 a 0.321",
            "2026: la pipeline confronta due stime di scala indipendenti e segnala il risultato come inaffidabile quando divergono, invece di restituire in silenzio una stanza sbagliata — stessa logica del progetto C.I.S.A.",
            "2026: ricostruzione generativa scartata — geometrie mai fotografate e vincoli di licenza; serve una scala metrica reale (planimetrie), raccolta ora tramite un'interfaccia di calibrazione in piattaforma"
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
        }
      },

      // Metric chips, rendered by Projects.tsx. The whole string lives here -
      // figure included - so every locale groups its own digits: it/es write
      // "1.000.000+", en writes "1,000,000+". The figure used to sit in
      // portfolio-data.ts with only the label swapped by index, which shipped
      // Italian grouping to /en ("1.000.000+ users served") and, where a chip
      // opened with a word instead of a number, shifted the labels by one.
      sprocketMetrics: [
        "4.000+ ore di chiamate/mese",
        "99.9% uptime",
        "100+ file audio in parallelo",
        "2 tenant enterprise"
      ],
      expediaMetrics: [
        "1.000.000+ utenti serviti",
        "10+ sviluppatori nel team"
      ],
      posMetrics: [
        "10.000+ transazioni/anno",
        "Diverse mense universitarie",
        "Centinaia di transazioni/giorno"
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
      profile2: "Come Solution Architect & Technical Lead in FEDRO Software ho progettato e portato in produzione SPRocket e SprocketLive (analisi AI e assistenza live per call center): 4.000+ ore audio/mese, multi-tenant, 99.9% uptime, da zero a produzione in 3 mesi. Stack: .NET 9 · ABP.io (Clean Architecture, DDD, CQRS) · Angular · SignalR.",
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
    },
    // Blog chrome (index heading/intro, empty state, article page labels). The
    // article bodies themselves are not here: they are MDX content files under
    // content/blog/<locale>/, one locale each by construction, so there is
    // nothing to keep in sync across it/en/es for that part.
    blog: {
      title: "Blog",
      description: "Note tecniche su architetture AI, integrazione LLM e automazione, dalla pratica quotidiana.",
      empty: "Non ci sono ancora articoli pubblicati. Torna presto.",
      readMore: "Leggi l'articolo",
      backToBlog: "Torna al blog",
      publishedOn: "Pubblicato il"
    }
  },

  en: {
    // See the note on `it.meta`.
    meta: {
      title: "Riccardo Perniciano | .NET Solution Architect & AI Systems",
      description: "Solution Architect & Technical Lead at FEDRO Software: multi-agent architectures, LLM integration (Azure OpenAI, Anthropic Claude), real-time pipelines and RAG."
    },
    nav: {
      home: "Home",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      about: "About",
      contact: "Contact",
      solutions: "Solutions",
      // See the Italian block above: rendered only when language === 'it',
      // kept here for the dictionary symmetry test.
      servizi: "Services",
      downloadCV: "Download CV",
      // Navbar CTA. The long form is hero.bookFreeCall.
      bookCall: "Book a call"
    },
    hero: {
      available: "Available for new projects",
      yearsExp: "years of experience",
      leadDeveloper: "Solution Architect & Technical Lead at",
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
      // See the note on `it.hero.description`.
      description: "Specialized in production AI systems: multi-agent architectures, LLM integration (Azure OpenAI, Anthropic Claude), real-time pipelines and RAG. Solution Architect & Technical Lead at FEDRO Software, where I took an AI platform for call centers from zero to production in 3 months.",
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
      currentPosition: "Solution Architect & Technical Lead @ FEDRO",
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
      cisaDesc: [
        "Phase 1 in progress: feasibility study and operational plan for the consortium's document automation and AI",
        "Analysis and design of five automations: assisted registration of incoming mail, routing of tasks to the referents, reorganisation and indexing of the document archive, invoice acquisition with due-date scheduling, payment reconciliation",
        "Architecture and development of the C# backend on ABP Framework, with the database as the single source of truth and an Angular app for task management",
        "Domain MCP server exposed by the backend: AI assistants write only through controlled tools authorised by permission, never in raw SQL",
        "Clear boundary between deterministic work in the backend (APIs, parsing, Hangfire scheduled jobs) and interpretive work left to the AI: email classification, cost centres, bank matching",
        "Every persisted decision records its own origin, AI or human operator, with mandatory human confirmation on the accounting steps",
        "Separate stdio MCP server shipped as a single executable, reading the shares as the logged-in user: NTFS ACLs enforced by the file server, not by application code",
        "Fully on-premise infrastructure and EU AI Act governance: policy, AI systems register and an Article 4 training plan"
      ],
      virtuardCurrentDesc: [
        "Technical pilot across four approaches to make tours walkable: monocular depth estimation, Gaussian splatting from walk-through video, generative reconstruction, multi-view fusion",
        "Chosen approach, my own idea: fusing the panoramas the tours already have of the same room, shot from different points, to reconstruct geometry that was genuinely photographed",
        "Unreconstructed area down from 26.6% to 2.7% at 4.2 m from the shooting point (from 19.2% to 6.9% at 2.1 m), alignment quality from 0.056 to 0.321",
        "Pipeline that compares two independent scale estimates and flags the result as unreliable when they diverge, instead of silently returning the wrong room",
        "Generative reconstruction evaluated and set aside: it invents geometry never photographed and carries licensing constraints on the available models",
        "Absolute metric scale not recoverable from the panoramas alone: real floor plans are needed, now collected through a scale/floor-plan calibration interface built into the platform"
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
      cisaOrganization: "Freelance",
      altenLocation: "Rome (Remote)",
      softwarelabTitle: "SOFTWARE DEVELOPER → TECHNICAL REFERENT",
      virtuardTitle: "MOBILE/VR DEVELOPER",
      diplomaTitle: "DIPLOMA IN COMPUTER SCIENCE AND TELECOMMUNICATIONS"
    },
    projects: {
      title: "Projects & Portfolio",
      subtitle: "Enterprise and personal projects demonstrating expertise in scalable architectures, AI integration and full-stack development",
      // See the note on `it.projects.leadDeveloper`.
      leadDeveloper: "Solution Architect & Technical Lead",
      metrics: "Metrics",
      technologies: "Technologies",
      features: "Features",
      code: "Code",
      demo: "Demo",
      enterprise: "Enterprise",
      startup: "Startup",
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
            "On-premise infrastructure and EU AI Act governance (policy, AI systems register and an Article 4 training plan)"
          ]
        },
        sprocketlive: {
          title: "SprocketLive - Real-Time AI Call Assistant",
          description: "Real-time module of the SPRocket platform: transcribes the call as it happens and generates AI suggestions for the operator on the fly.",
          longDescription: "Distinct from SPRocket (batch analysis of recordings): SprocketLive captures audio from the phone switchboard, transcribes it in real time, and uses an AI model to decide, as the conversation unfolds, whether and when to suggest something to the operator. Event-driven architecture with an internal message bus and WebSocket push updates to the operator panel; multiple configurable AI agents can run in parallel on the same call (e.g. sales and compliance), with an optional validation agent that reviews suggestions before they reach the operator.",
          features: [
            "Live transcription with interchangeable providers (AssemblyAI, Azure Speech)",
            "Event-driven AI suggestion engine, with multiple configurable agents running in parallel per call",
            "Optional validation agent (Evaluator) as a quality gate before delivery",
            "WebSocket push updates to the operator panel and a supervisor view for live monitoring",
            "Replay of recorded calls to test system behaviour without live calls",
            "Modular deployment: transcription, agents and recording as independently toggleable modules"
          ]
        },
        studiapp: {
          title: "StudIApp - AI Tutor for University STEM Exams",
          description: "AI platform that helps Italian university students pass STEM exams, starting with Calculus 1 (Analisi 1): adaptive diagnostic test, personalized study plan and timed exam simulations with real-time feedback.",
          longDescription: "Personal product, live at studiapp.it. Three-stage methodology - an adaptive diagnostic test to identify strengths and gaps, a personalized study plan built on the exam-relevant content, timed exam simulations with instant feedback - alongside a real-time AI chat tutor. Next.js frontend, Node.js gateway and a Python backend for the AI logic, PostgreSQL for data, containerized with Docker.",
          features: [
            "Adaptive diagnostic test to identify strengths and areas for improvement",
            "Personalized study plan built on exam-relevant content",
            "Timed exam simulations with scoring and instant feedback",
            "Real-time AI chat tutor for study questions",
            "Initial focus on Calculus 1 (Analisi 1), the first major hurdle of university STEM exams"
          ]
        },
        virtuard: {
          title: "Virtuard - Immersive Virtual Tours & 3D Reconstruction",
          description: "Collaboration with the proptech Virtuard, since 2018: first the VR mobile app for real-estate virtual tours, today an R&D pilot that reconstructs the rooms in 3D from the panoramas the tours already have.",
          longDescription: "Two phases of the same collaboration. 2018: co-developed the VR mobile app for real-estate virtual tours from scratch, in a team of 3, with 60 FPS multi-device rendering. 2026: a technical pilot to make tours explorable in 3D. Out of four reconstruction approaches evaluated, I chose an idea of my own: fusing the panoramas the tours already have of the same room, shot from different points, to reconstruct geometry that was genuinely photographed. R&D in progress, not yet facing site visitors.",
          features: [
            "2018: co-developed the VR mobile app from scratch in a team of 3, with gesture-based navigation and 60 FPS multi-device rendering (Oculus, Google Cardboard, generic headsets)",
            "2026: four reconstruction techniques evaluated — monocular depth estimation from a single panorama, Gaussian splatting from walk-through video, generative reconstruction, multi-view fusion",
            "2026: chosen approach, my own idea — fusing the panoramas the tours already have of the same room from different points, each shot filling the other's blind spots",
            "2026: unreconstructed area down from 26.6% to 2.7% at 4.2 m from the shooting point (from 19.2% to 6.9% at 2.1 m), alignment quality from 0.056 to 0.321",
            "2026: the pipeline compares two independent scale estimates and flags the result as unreliable when they diverge, instead of silently returning the wrong room — same provenance logic as the C.I.S.A. project",
            "2026: generative reconstruction set aside — it invents geometry never photographed, plus licensing constraints on the available models; real metric scale needs floor plans, now collected through a calibration interface built into the platform"
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
        }
      },

      // See the note on `it.projects.sprocketMetrics`.
      sprocketMetrics: [
        "4,000+ hours of calls/month",
        "99.9% uptime",
        "100+ audio files in parallel",
        "2 enterprise tenants"
      ],
      expediaMetrics: [
        "1,000,000+ users served",
        "10+ developers in the team"
      ],
      posMetrics: [
        "10,000+ transactions/year",
        "Several university canteens",
        "Hundreds of transactions/day"
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
      profile2: "As Solution Architect & Technical Lead at FEDRO Software I designed and took to production SPRocket and SprocketLive (AI analysis and live assistance for call centers): 4,000+ audio hours/month, multi-tenant, 99.9% uptime, from zero to production in 3 months. Stack: .NET 9 · ABP.io (Clean Architecture, DDD, CQRS) · Angular · SignalR.",
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
    },
    blog: {
      title: "Blog",
      description: "Technical notes on AI architectures, LLM integration and automation, from day-to-day practice.",
      empty: "No articles published yet. Check back soon.",
      readMore: "Read the article",
      backToBlog: "Back to blog",
      publishedOn: "Published on"
    }
  },

  es: {
    // See the note on `it.meta`.
    meta: {
      title: "Riccardo Perniciano | Solution Architect .NET y sistemas de IA",
      description: "Solution Architect & Technical Lead en FEDRO Software: arquitecturas multiagente, integración LLM (Azure OpenAI, Anthropic Claude), pipelines real-time y RAG."
    },
    nav: {
      home: "Inicio",
      skills: "Habilidades",
      experience: "Experiencia",
      projects: "Proyectos",
      about: "Sobre Mí",
      contact: "Contacto",
      solutions: "Soluciones",
      // See the Italian block above: rendered only when language === 'it',
      // kept here for the dictionary symmetry test.
      servizi: "Servicios",
      downloadCV: "Descargar CV",
      // Navbar CTA. The long form is hero.bookFreeCall.
      bookCall: "Reservar"
    },
    hero: {
      available: "Disponible para nuevos proyectos",
      yearsExp: "años de experiencia",
      leadDeveloper: "Solution Architect & Technical Lead en",
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
      // See the note on `it.hero.description`.
      description: "Especializado en sistemas de IA en producción: arquitecturas multiagente, integración LLM (Azure OpenAI, Anthropic Claude), pipelines real-time y RAG. Solution Architect & Technical Lead en FEDRO Software, donde llevé una plataforma de IA para call centers de cero a producción en 3 meses.",
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
      currentPosition: "Solution Architect & Technical Lead @ FEDRO",
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
      cisaDesc: [
        "Fase 1 en curso: estudio de viabilidad y plan operativo para la automatización documental e IA del consorcio",
        "Análisis y diseño de cinco automatizaciones: registro asistido del correo entrante, distribución de tareas a los referentes, reorganización e indexación del archivo documental, adquisición de facturas con vencimientos, conciliación de pagos",
        "Arquitectura y desarrollo del backend C# sobre ABP Framework, con la base de datos como única fuente de verdad y app Angular para la gestión de tareas",
        "Servidor MCP de dominio expuesto por el backend: los asistentes de IA escriben solo mediante herramientas controladas y autorizadas por permiso, nunca en SQL directo",
        "Frontera clara entre el trabajo determinista en el backend (APIs, parsing, jobs programados con Hangfire) y el trabajo interpretativo que queda en la IA: clasificación de correos, centros de coste, conciliación bancaria",
        "Cada decisión persistida registra su origen, IA u operador, con confirmación humana obligatoria en los pasos contables",
        "Servidor MCP stdio distribuido como un único ejecutable, que lee los recursos compartidos con la identidad del usuario conectado: las ACL NTFS las aplica el servidor de archivos, no el código de aplicación",
        "Infraestructura íntegramente on-premise y gobernanza del EU AI Act: política, registro de sistemas de IA y plan de formación art. 4"
      ],
      virtuardCurrentDesc: [
        "Piloto técnico sobre cuatro enfoques para hacer los tours \"walkable\": depth estimation monocular, Gaussian splatting a partir de video walk-through, reconstrucción generativa, fusión multi-vista",
        "Enfoque elegido, idea propia: fusionar las panorámicas que ya existen del mismo ambiente, tomadas desde puntos distintos, para reconstruir una geometría realmente fotografiada",
        "Área no reconstruida bajó del 26.6% al 2.7% a 4.2 m del punto de toma (del 19.2% al 6.9% a 2.1 m), calidad de alineación de 0.056 a 0.321",
        "Pipeline que compara dos estimaciones de escala independientes y marca el resultado como no confiable cuando divergen, en lugar de devolver en silencio una habitación equivocada",
        "Reconstrucción generativa evaluada y descartada: introduce geometrías nunca fotografiadas y tiene restricciones de licencia sobre los modelos disponibles",
        "Escala métrica absoluta no recuperable solo de las panorámicas: se necesitan planos reales, recopilados ahora mediante una interfaz de calibración de escala/plano integrada en la plataforma"
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
      cisaOrganization: "Trabajo autónomo",
      altenLocation: "Roma (Remoto)",
      softwarelabTitle: "DESARROLLADOR → REFERENTE TÉCNICO",
      virtuardTitle: "DESARROLLADOR MÓVIL/VR",
      diplomaTitle: "DIPLOMA EN INFORMÁTICA Y TELECOMUNICACIONES"
    },
    projects: {
      title: "Proyectos y Portfolio",
      subtitle: "Proyectos empresariales y personales que demuestran experiencia en arquitecturas escalables, integración IA y desarrollo full-stack",
      // See the note on `it.projects.leadDeveloper`.
      leadDeveloper: "Solution Architect & Technical Lead",
      metrics: "Métricas",
      technologies: "Tecnologías",
      features: "Características",
      code: "Código",
      demo: "Demo",
      enterprise: "Empresarial",
      startup: "Startup",
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
            "Infraestructura on-premise y gobernanza del EU AI Act (política, registro de sistemas de IA y plan de formación art. 4)"
          ]
        },
        sprocketlive: {
          title: "SprocketLive - Asistente de IA en Tiempo Real para Call Center",
          description: "Módulo en tiempo real de la plataforma SPRocket: transcribe la llamada mientras está en curso y genera sugerencias de IA para el operador momento a momento.",
          longDescription: "A diferencia de SPRocket (análisis batch sobre las grabaciones): SprocketLive captura el audio desde la centralita telefónica, lo transcribe en tiempo real y usa un modelo de IA para decidir, mientras la conversación avanza, si y cuándo sugerir algo al operador. Arquitectura basada en eventos con un bus de mensajería interno y actualizaciones push vía WebSocket hacia el panel del operador; varios agentes de IA configurables pueden trabajar en paralelo sobre la misma llamada (p. ej. ventas y compliance), con un agente de validación opcional que revisa las sugerencias antes de que lleguen al operador.",
          features: [
            "Transcripción en vivo con proveedores intercambiables (AssemblyAI, Azure Speech)",
            "Motor de sugerencias de IA event-driven, con varios agentes configurables en paralelo por llamada",
            "Agente de validación (Evaluator) opcional como control de calidad antes de la entrega",
            "Actualizaciones push vía WebSocket hacia el panel del operador y una vista de supervisor para monitoreo en vivo",
            "Reproducción de llamadas grabadas para probar el comportamiento del sistema sin llamadas reales",
            "Despliegue modular: transcripción, agentes y grabación como módulos activables de forma independiente"
          ]
        },
        studiapp: {
          title: "StudIApp - Tutor de IA para Exámenes STEM Universitarios",
          description: "Plataforma de IA que ayuda a los estudiantes universitarios italianos a aprobar los exámenes STEM, empezando por Análisis 1 (Cálculo 1): test diagnóstico adaptativo, plan de estudio personalizado y simulaciones de examen cronometradas con feedback en tiempo real.",
          longDescription: "Producto personal, en producción en studiapp.it. Metodología en tres fases - un test diagnóstico adaptativo para identificar fortalezas y lagunas, un plan de estudio personalizado sobre el contenido relevante para el examen, simulaciones de examen cronometradas con feedback inmediato - junto con un tutor de IA por chat en tiempo real. Frontend en Next.js, gateway en Node.js y backend en Python para la lógica de IA, datos en PostgreSQL, containerizado con Docker.",
          features: [
            "Test diagnóstico adaptativo para identificar fortalezas y áreas de mejora",
            "Plan de estudio personalizado sobre el contenido relevante para el examen",
            "Simulaciones de examen cronometradas con puntuación y feedback inmediato",
            "Tutor de IA por chat en tiempo real para resolver dudas de estudio",
            "Enfoque inicial en Análisis 1 (Cálculo 1), el primer gran escollo de los exámenes STEM universitarios"
          ]
        },
        virtuard: {
          title: "Virtuard - Tours Virtuales Inmersivos y Reconstrucción 3D",
          description: "Colaboración con la proptech Virtuard, desde 2018: primero la app VR móvil para virtual tours inmobiliarios, hoy un piloto de I+D que reconstruye los ambientes en 3D a partir de las panorámicas que los tours ya tienen.",
          longDescription: "Dos fases de la misma colaboración. 2018: co-desarrollo desde cero, en equipo de 3, de la app VR móvil para virtual tours inmobiliarios a 360°, con renderizado a 60 FPS multi-dispositivo. 2026: piloto técnico para hacer que los tours sean explorables en 3D. De cuatro enfoques de reconstrucción evaluados, elegí una idea propia: fusionar las panorámicas que los tours ya tienen del mismo ambiente, tomadas desde puntos distintos, para reconstruir una geometría realmente fotografiada. I+D en curso, todavía no dirigida a los visitantes del sitio.",
          features: [
            "2018: co-desarrollo de la app VR móvil desde cero en equipo de 3, con navegación gesture-based y renderizado a 60 FPS multi-dispositivo (Oculus, Google Cardboard, visores genéricos)",
            "2026: cuatro técnicas de reconstrucción evaluadas — depth estimation monocular desde una sola panorámica, Gaussian splatting a partir de video walk-through, reconstrucción generativa, fusión multi-vista",
            "2026: enfoque elegido, idea propia — fusionar las panorámicas que ya existen del mismo ambiente tomadas desde puntos distintos, cada toma cubre los puntos ciegos de la otra",
            "2026: área no reconstruida bajó del 26.6% al 2.7% a 4.2 m del punto de toma (del 19.2% al 6.9% a 2.1 m), calidad de alineación de 0.056 a 0.321",
            "2026: la pipeline compara dos estimaciones de escala independientes y marca el resultado como no confiable cuando divergen, en lugar de devolver en silencio una habitación equivocada — misma lógica de procedencia que el proyecto C.I.S.A.",
            "2026: reconstrucción generativa descartada — introduce geometrías nunca fotografiadas y tiene restricciones de licencia; la escala métrica real necesita planos con medidas, recopilados ahora mediante una interfaz de calibración integrada en la plataforma"
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
        }
      },

      // See the note on `it.projects.sprocketMetrics`.
      sprocketMetrics: [
        "4.000+ horas de llamadas/mes",
        "99.9% uptime",
        "100+ archivos de audio en paralelo",
        "2 inquilinos enterprise"
      ],
      expediaMetrics: [
        "1.000.000+ usuarios atendidos",
        "10+ desarrolladores en el equipo"
      ],
      posMetrics: [
        "10.000+ transacciones/año",
        "Varios comedores universitarios",
        "Cientos de transacciones/día"
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
      profile2: "Como Solution Architect & Technical Lead en FEDRO Software he diseñado y llevado a producción SPRocket y SprocketLive (análisis con IA y asistencia live para call centers): 4.000+ horas de audio/mes, multi-tenant, 99.9% uptime, de cero a producción en 3 meses. Stack: .NET 9 · ABP.io (Clean Architecture, DDD, CQRS) · Angular · SignalR.",
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
    },
    blog: {
      title: "Blog",
      description: "Notas técnicas sobre arquitecturas de IA, integración de LLM y automatización, desde la práctica diaria.",
      empty: "Todavía no hay artículos publicados. Vuelve pronto.",
      readMore: "Leer el artículo",
      backToBlog: "Volver al blog",
      publishedOn: "Publicado el"
    }
  }
};