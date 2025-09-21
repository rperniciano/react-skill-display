# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Riccardo Perniciano's professional portfolio - a modern React-based web application showcasing a Mid-Senior Full Stack Developer's skills, experience, and projects. The portfolio features multi-language support (Italian, English, Spanish), dark/light theme switching, interactive data visualizations, and a component-based architecture built with modern web technologies.

## Development Commands

### Core Development Commands
- `npm run dev` - Start development server (Vite) on port 8080
- `npm run build` - Create production build
- `npm run build:dev` - Create development build 
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code linting
- `npm run test` - Run tests with Vitest

### Testing Commands
- `npm run test` - Run all tests with Vitest
- Tests are located in `src/components/__tests__/`, `src/hooks/__tests__/`, and `src/pages/__tests__/`
- Test setup configuration in `src/test/setup.ts`

## Architecture & Code Structure

### Tech Stack
- **Frontend**: React 18 with TypeScript, Vite as build tool
- **Styling**: Tailwind CSS with custom design system, Radix UI components
- **State Management**: React Context API for language and theme management
- **Routing**: React Router v6
- **Testing**: Vitest with React Testing Library
- **Data Visualization**: Recharts for interactive charts
- **Icons**: Lucide React
- **Animations**: CSS transitions and transforms

### Key Architectural Patterns

#### Multi-Language System
- **Language Context**: `src/components/LanguageContext.tsx` provides centralized language management
- **Translations**: `src/components/translations.ts` contains all text content in Italian, English, and Spanish
- **Browser Detection**: Automatically detects user's browser language on first visit
- **Type Safety**: Full TypeScript support for translation keys

#### Theme System
- **Theme Provider**: Custom hook-based theme management in `src/hooks/useTheme.tsx`
- **Dark/Light Mode**: Persistent theme switching with local storage
- **Tailwind Integration**: Uses CSS custom properties for theme variables

#### Component Architecture
- **UI Components**: Reusable design system components in `src/components/ui/`
- **Page Components**: Main portfolio sections (Hero, Skills, Experience, Projects, About, Contact)
- **Layout Components**: Navigation, Footer, and layout containers
- **Data Components**: Portfolio data and skill definitions in `src/components/portfolio-data.ts`

### File Structure Conventions
```
src/
├── components/           # React components
│   ├── ui/              # Reusable UI components (buttons, cards, etc.)
│   ├── __tests__/       # Component tests
│   ├── LanguageContext.tsx    # Language management
│   ├── translations.ts        # All translation strings
│   └── [ComponentName].tsx    # Main portfolio sections
├── hooks/               # Custom React hooks
├── pages/               # Route components
├── lib/                 # Utility functions
└── test/                # Test configuration
```

### Component Naming Conventions
- Use PascalCase for component files: `Hero.tsx`, `SkillCard.tsx`
- Use descriptive names that indicate the component's purpose
- UI components follow shadcn/ui naming conventions in lowercase with hyphens

### Styling Conventions
- **Tailwind CSS**: Utility-first approach with custom design tokens
- **Responsive Design**: Mobile-first approach with responsive utilities
- **Dark Mode**: Uses `dark:` prefix for dark mode styles
- **Custom Colors**: Portfolio uses gradient-based color scheme with blue/purple theme

### State Management Patterns
- **Language State**: Global context for language switching
- **Theme State**: Custom hook with localStorage persistence  
- **Local State**: useState for component-specific state
- **No External State Library**: Uses React's built-in state management

### Data Management
- **Static Data**: Portfolio content, skills, and experience data in TypeScript files
- **Type Definitions**: Strong typing for skills, experience items, project data
- **Translation Data**: Structured translation objects with type safety

## Important Notes

### Multi-Language Support
- All user-facing text must be added to `src/components/translations.ts`
- Use the `useLanguage()` hook to access translations: `const { t } = useLanguage()`
- Language switching is handled automatically by the LanguageSelector component

### Theme System Integration
- Components should support both light and dark themes using Tailwind's `dark:` prefix
- Theme switching is handled by the ThemeToggle component in the Navbar

### Performance Considerations
- Components use React.memo() where appropriate for performance optimization
- Images should be optimized and use appropriate loading strategies
- Vite handles code splitting and bundling optimization

### Testing Guidelines
- Tests are set up with Vitest and React Testing Library
- Component tests focus on user interactions and accessibility
- Test files use `.test.tsx` extension

### Portfolio Content Updates
- Skills and experience data can be updated in `src/components/portfolio-data.ts`
- New sections should follow the established component patterns
- Ensure all new content is properly translated in all three languages