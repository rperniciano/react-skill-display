# 🚀 Riccardo Perniciano - Portfolio Professionale

[![Next.js](https://img.shields.io/badge/Next.js-16.3-000000?style=for-the-badge&logo=nextdotjs)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.3-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

## 👨‍💻 Chi Sono

Ciao! Sono **Riccardo Perniciano**, un **Mid-Senior Full Stack Developer** con oltre **7 anni di esperienza** nella progettazione e implementazione di soluzioni enterprise scalabili.

Attualmente sono **Lead Developer presso FEDRO Software SRL**, dove guido lo sviluppo di una piattaforma AI-powered per l'analisi delle chiamate che processa **oltre 1000 trascrizioni all'ora**. 

### 🏆 Risultati Principali
- **85% riduzione** del codice legacy attraverso refactoring strategico
- **99.9% uptime** su sistemi mission-critical
- **50+ tenant** gestiti in architettura multi-tenant
- **100k+ transazioni/anno** processate su sistemi POS

### 💼 Esperienza
- **Lead Developer** @ FEDRO Software (2025 - Presente)
- **React Developer** @ ALTEN per Expedia Group (2021 - 2023)
- **Full Stack Developer** @ SOFTWARELAB (2018 - 2021)

### 🛠️ Stack Tecnologico
- **Frontend:** React, Angular, TypeScript, Next.js
- **Backend:** .NET 9, C#, Node.js, ABP.io
- **AI & Cloud:** OpenAI GPT, Azure Cognitive Services, Docker
- **Database:** SQL Server, Elasticsearch, Redis
- **Architecture:** DDD, CQRS, Microservices, Clean Architecture

---

## 🌟 Caratteristiche del Portfolio

Questo portfolio è stato sviluppato con le più moderne tecnologie web per offrire un'esperienza utente eccezionale e dimostrare le mie competenze tecniche.

### ✨ Features Principali

#### 🌍 **Sistema Multi-Lingua**
- Supporto completo per **Italiano**, **English** e **Español**
- Una route per lingua: `/it`, `/en`, `/es` (ognuna prerenderizzata come HTML statico)
- Auto-detect della lingua del browser su `/` tramite `Accept-Language` (redirect 307)
- Cambio lingua come navigazione, quindi l'URL è condivisibile e indicizzabile
- Traduzioni complete di tutti i contenuti

#### 🎨 **Design & UX**
- **Dark/Light Mode** con persistenza delle preferenze (`next-themes`, senza flash al primo paint)
- **Animazioni fluide** con transizioni CSS e IntersectionObserver
- **Fully Responsive** - Ottimizzato per mobile, tablet e desktop
- **Glassmorphism** e gradient moderni
- **Loading animations** e skeleton screens

#### 📊 **Visualizzazioni Dati Interattive**
- **Grafici dinamici** delle competenze (Radar, Pie, Bar charts)
- **Timeline interattiva** dell'esperienza lavorativa
- **Progress bars animate** per skill levels
- **Metriche in tempo reale** con animazioni

#### 🚀 **Performance & SEO**
- **Rendering server-side**: ogni pagina locale è HTML statico completo, non un guscio vuoto
- **Code splitting** automatico (Turbopack)
- **Metadata per lingua**: title, description, canonical e 4 `hreflang` (it/en/es/x-default)
- `sitemap.xml` e `robots.txt` generati dalle route metadata di Next
- Solo il dizionario della lingua attiva attraversa il confine server → client

#### 🔧 **Architettura Tecnica**
- **Next.js 16** con App Router e React Server Components
- **React 19** con Hooks e Context API
- **TypeScript** per type safety
- **Tailwind CSS** per styling utility-first
- **Component-based architecture**
- **Clean code** e best practices

### 📱 Sezioni del Portfolio

1. **Hero Section**
   - Presentazione dinamica con ruoli animati
   - Particelle animate e effetti parallax
   - CTA buttons e social links

2. **Skills & Competenze**
   - 12+ tecnologie con livelli di competenza
   - Visualizzazioni grafiche interattive
   - Filtri per categoria
   - Vista griglia/carousel

3. **Timeline Professionale**
   - Esperienza lavorativa dettagliata
   - Formazione e certificazioni
   - Tecnologie utilizzate per ogni ruolo
   - Descrizioni espandibili

4. **Progetti Portfolio**
   - Case studies dettagliati
   - Metriche e risultati concreti
   - Link a demo e codice sorgente
   - Screenshots e descrizioni

5. **About Me**
   - Bio professionale
   - Aree di expertise
   - Lingue parlate
   - CV scaricabile

6. **Contact Form**
   - Form di contatto funzionante
   - Validazione in tempo reale
   - Informazioni di contatto dirette
   - Disponibilità per progetti

---

## 🚀 Quick Start

### Prerequisiti
- Node.js 20+ (sviluppato su Node 22)
- npm o yarn

### Installazione

```bash
# Clona il repository
git clone https://github.com/rperniciano/react-skill-display.git

# Entra nella directory
cd react-skill-display

# Installa le dipendenze
npm install

# Avvia il development server (next dev) su http://localhost:3000
npm run dev
```

Aprendo `/` si viene rediretti a `/it`, `/en` o `/es` in base all'`Accept-Language`.

### Build per Produzione

```bash
# Crea la build di produzione (next build)
npm run build

# Avvia il server di produzione (next start)
npm run start
```

### Altri comandi

```bash
npm run lint   # ESLint (eslint-config-next). Next 16 non esegue più il lint
               # durante la build, quindi non può bloccare il deploy.
npm run test   # Vitest + React Testing Library
npx tsc --noEmit  # Type-check di app/, src/ e proxy.ts
```

### Deploy

Il sito è ottimizzato per il deploy su:
- **Vercel** (consigliato)
- **Netlify**
- Qualsiasi hosting che sappia eseguire un server Node

> Le tre pagine sono prerenderizzate, ma `proxy.ts` gira a ogni richiesta per il
> redirect su `/`: un hosting puramente statico servirebbe le pagine senza il
> redirect iniziale.

---

## 📦 Tecnologie Utilizzate

### Core
- **Next.js 16.3** - Framework e build tool (App Router, Turbopack)
- **React 19.3** - UI Library
- **TypeScript 5.5** - Type Safety
- **Routing** - File-system routing dell'App Router (`app/[lang]/`)

### Styling
- **Tailwind CSS 3.4** - Utility-first CSS
- **next-themes** - Dark/Light mode senza flash
- **Radix UI** - Headless Components
- **Lucide Icons** - Icon Library

### Data Visualization
- **Recharts** - Grafici e Charts
- **Embla Carousel** - Carousel Component

### Form & Validation
- **React Hook Form** - Form Management
- **Zod** - Schema Validation

### Development
- **ESLint** (`eslint-config-next`) - Linting
- **Vitest** + **React Testing Library** - Testing

---

## 📂 Struttura Progetto

```
react-skill-display/
├── app/                         # App Router
│   ├── [lang]/
│   │   ├── layout.tsx           # ROOT layout: <html lang>, provider, metadata
│   │   ├── page.tsx             # Home page della lingua (tutte le sezioni)
│   │   └── not-found.tsx        # 404 sotto /[lang]
│   ├── globals.css              # Unico foglio di stile globale
│   ├── i18n.ts                  # LANGUAGES, SITE_URL, canonical + hreflang
│   ├── seo.ts                   # pageMetadata() per lingua (solo server)
│   ├── sitemap.ts               # → /sitemap.xml
│   ├── robots.ts                # → /robots.txt
│   └── favicon.ico              # Convenzione metadata: <link rel="icon"> automatico
├── proxy.ts                     # Redirect 307 da / alla lingua (Accept-Language)
├── src/
│   ├── components/              # React components (client)
│   │   ├── Hero.tsx
│   │   ├── Skills.tsx
│   │   ├── WorkExperience.tsx
│   │   ├── Projects.tsx
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── LanguageContext.tsx  # useLanguage(): { language, setLanguage, t }
│   │   ├── translations.ts      # Tutte le stringhe, it/en/es
│   │   ├── portfolio-data.ts    # Dati statici (skill, esperienze, progetti)
│   │   ├── __tests__/           # Test dei componenti
│   │   └── ui/                  # Libreria UI (shadcn/ui)
│   ├── hooks/                   # Custom React hooks
│   ├── lib/                     # Utility
│   └── test/                    # Setup e helper di Vitest
├── public/                      # Asset statici (CV PDF, foto)
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── vitest.config.ts
└── next.config.ts
```

**Non esiste `app/layout.tsx`**: il root layout è `app/[lang]/layout.tsx`. Solo un
root layout può renderizzare `<html>`/`<body>`, e solo un layout dentro `[lang]`
riceve il segmento di lingua — che è ciò che permette un `<html lang>` dinamico.

### Dove stanno le traduzioni

Tutte le stringhe vivono in `src/components/translations.ts`, un oggetto con una
chiave per lingua (`it`, `en`, `es`). Il layout server legge il segmento `[lang]`
e passa **solo quella fetta** a `<LanguageProvider>`; i componenti la leggono con
`const { t } = useLanguage()`. Aggiungendo una stringa va aggiunta in tutte e tre
le lingue.

---

## 🎯 Lighthouse Scores

- **Performance:** 95+
- **Accessibility:** 100
- **Best Practices:** 100
- **SEO:** 100

---

## 📄 Licenza

Questo progetto è rilasciato sotto licenza MIT. Sentiti libero di utilizzare il codice per il tuo portfolio personale.

---

## 🤝 Contatti

- **Email:** ricki.perniciano.work@gmail.com
- **LinkedIn:** [linkedin.com/in/riccardo-perniciano](https://linkedin.com/in/riccardo-perniciano)
- **GitHub:** [github.com/rperniciano](https://github.com/rperniciano)
- **Portfolio:** [riccardo-perniciano.cv](https://riccardo-perniciano-cv.vercel.app/)
- **Telefono:** +39 351 874 5889

---

## 🙏 Ringraziamenti

Un ringraziamento speciale a tutti i colleghi e mentor che hanno contribuito alla mia crescita professionale, e alla community open source per gli strumenti incredibili che rendono possibile questo portfolio.

---

<div align="center">
  <p>
    <a href="https://react-skill-display.vercel.app">🌐 Visita il Portfolio Live</a>
  </p>
</div>
