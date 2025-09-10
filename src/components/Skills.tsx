import React, { useState } from "react";
import { 
  Code, Database, Layout, Palette, Cloud, Brain, 
  GitBranch, Shield, Cpu, Globe, Terminal, Zap, Server
} from "lucide-react";
import SkillCard from "./SkillCard";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, PieChart, Pie, Cell, Legend, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";

// Complete skill set from optimized CV
const skills = [
  // Frontend
  {
    title: "React & Next.js",
    description: "Sviluppo SPA e SSR con React 18+, Hooks avanzati, Context API, Redux",
    icon: <Code className="h-6 w-6" />,
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=500&q=60",
    detailedInfo: "7+ anni di esperienza con React. Sviluppo di applicazioni enterprise per clienti come Expedia. Competenza in React Hooks, Context API, Redux, Next.js per SSR/SSG. Performance optimization e code splitting.",
    category: "frontend",
    level: 90,
    tags: ["React", "Next.js", "Redux", "Zustand", "Context API"],
    years: 5
  },
  {
    title: "Angular",
    description: "Sviluppo enterprise con Angular 15+, RxJS, NgRx, component architecture",
    icon: <Code className="h-6 w-6" />,
    image: "https://images.unsplash.com/photo-1561736778-92e52a7769ef?auto=format&fit=crop&w=500&q=60",
    detailedInfo: "Utilizzo di Angular per la piattaforma FEDRO CognitiveServices. Implementazione di architetture modulari, reactive programming con RxJS, state management con NgRx.",
    category: "frontend",
    level: 85,
    tags: ["Angular", "TypeScript", "RxJS", "NgRx"],
    years: 3
  },
  {
    title: "TypeScript",
    description: "Type-safe development, generics, decorators, advanced patterns",
    icon: <Terminal className="h-6 w-6" />,
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=500&q=60",
    detailedInfo: "Sviluppo type-safe con TypeScript. Utilizzo avanzato di generics, decorators, type guards. Migrazione di codebase JavaScript legacy a TypeScript.",
    category: "frontend",
    level: 88,
    tags: ["TypeScript", "JavaScript ES6+", "Type Guards", "Generics"],
    years: 4
  },
  
  // Backend
  {
    title: ".NET & C#",
    description: ".NET 9, ABP.io framework, Entity Framework Core, Clean Architecture",
    icon: <Server className="h-6 w-6" />,
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=500&q=60",
    detailedInfo: "7 anni di esperienza con C# e .NET. Attualmente utilizzo .NET 9 con ABP.io framework per la piattaforma FEDRO. Implementazione di Clean Architecture, DDD, CQRS patterns.",
    category: "backend",
    level: 85,
    tags: [".NET 9", "C#", "ABP.io", "EF Core", "ASP.NET Core"],
    years: 7
  },
  {
    title: "Node.js & Express",
    description: "RESTful APIs, GraphQL, microservices, real-time applications",
    icon: <Database className="h-6 w-6" />,
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=500&q=60",
    detailedInfo: "Sviluppo di API RESTful e GraphQL con Node.js. Implementazione di microservizi, WebSocket per real-time features, integrazione con database SQL e NoSQL.",
    category: "backend",
    level: 75,
    tags: ["Node.js", "Express", "GraphQL", "Socket.io", "Fastify"],
    years: 3
  },
  {
    title: "Database & Search",
    description: "SQL Server, MySQL, Elasticsearch, query optimization, indexing",
    icon: <Database className="h-6 w-6" />,
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=500&q=60",
    detailedInfo: "Gestione database relazionali e NoSQL. Ottimizzazione query SQL complesse. Implementazione Elasticsearch per ricerca full-text su trascrizioni audio.",
    category: "backend",
    level: 80,
    tags: ["SQL Server", "MySQL", "Elasticsearch", "Redis", "MongoDB"],
    years: 6
  },
  
  // AI & Cloud
  {
    title: "AI Integration",
    description: "OpenAI GPT, Azure Cognitive Services, Assembly.AI, Speech-to-Text",
    icon: <Brain className="h-6 w-6" />,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=500&q=60",
    detailedInfo: "Integrazione di servizi AI per la piattaforma FEDRO. Speech-to-text con Azure e Assembly.AI, analisi semantica con OpenAI GPT, NLP per question answering.",
    category: "ai-cloud",
    level: 82,
    tags: ["OpenAI", "Azure AI", "NLP", "Speech-to-Text", "LLM"],
    years: 2
  },
  {
    title: "Microsoft Azure",
    description: "Azure VMs, Cognitive Services, Application Insights, DevOps",
    icon: <Cloud className="h-6 w-6" />,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=500&q=60",
    detailedInfo: "Deployment e gestione applicazioni su Azure. Utilizzo di Cognitive Services per AI, Application Insights per monitoring, Azure DevOps per CI/CD.",
    category: "ai-cloud",
    level: 78,
    tags: ["Azure", "Cloud Services", "Monitoring", "VM Management"],
    years: 3
  },
  {
    title: "Docker & CI/CD",
    description: "Containerization, orchestration, pipeline automation, DevOps",
    icon: <GitBranch className="h-6 w-6" />,
    image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&w=500&q=60",
    detailedInfo: "Containerizzazione applicazioni con Docker. Implementazione pipeline CI/CD con Azure DevOps e GitHub Actions. Automazione deployment e testing.",
    category: "devops",
    level: 75,
    tags: ["Docker", "CI/CD", "Git", "Azure DevOps", "GitHub Actions"],
    years: 3
  },
  
  // Architecture & Testing
  {
    title: "Architecture Patterns",
    description: "DDD, CQRS, Clean Architecture, Microservices, Event-driven",
    icon: <Shield className="h-6 w-6" />,
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&w=500&q=60",
    detailedInfo: "Progettazione architetture enterprise con Domain-Driven Design, CQRS per separazione comandi/query, Clean Architecture per mantenibilità, pattern Microservizi.",
    category: "architecture",
    level: 83,
    tags: ["DDD", "CQRS", "Clean Architecture", "Microservices", "Event Sourcing"],
    years: 4
  },
  {
    title: "Testing & Quality",
    description: "Jest, Cypress, Unit Testing, E2E, 80%+ code coverage",
    icon: <Zap className="h-6 w-6" />,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=500&q=60",
    detailedInfo: "Testing completo con Jest per unit test, Cypress per E2E. Raggiunto 80%+ code coverage nei progetti. TDD approach per features critiche.",
    category: "testing",
    level: 80,
    tags: ["Jest", "Cypress", "Unit Testing", "TDD", "E2E Testing"],
    years: 4
  },
  {
    title: "Job Orchestration",
    description: "Hangfire, background processing, queue management, retry policies",
    icon: <Cpu className="h-6 w-6" />,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=500&q=60",
    detailedInfo: "Implementazione sistema Hangfire V2 per FEDRO. Gestione job con queue prioritarie, retry policies, processing parallelo di 100+ file simultanei.",
    category: "backend",
    level: 88,
    tags: ["Hangfire", "Queue Management", "Scheduling", "Background Jobs"],
    years: 2
  }
];

// Get unique categories for filter buttons
const categories = ["tutti", ...new Set(skills.map(skill => skill.category))];

// Prepare data for radar chart
const radarData = skills.slice(0, 8).map(skill => ({
  subject: skill.title.split('&')[0].trim(),
  A: skill.level,
  fullMark: 100
}));

// Prepare data for pie chart
const pieData = Array.from(skills.reduce((acc, skill) => {
  const category = skill.category;
  acc.set(category, (acc.get(category) || 0) + 1);
  return acc;
}, new Map())).map(([name, value]) => ({
  name: name.charAt(0).toUpperCase() + name.slice(1),
  value
}));

// Prepare data for bar chart - skills by years of experience
const barData = skills.map(skill => ({
  name: skill.title.split('&')[0].trim(),
  years: skill.years,
  level: skill.level
})).sort((a, b) => b.years - a.years).slice(0, 10);

const COLORS = ['#8B5CF6', '#EC4899', '#3B82F6', '#10B981', '#F59E0B'];

const Skills = () => {
  const [isCarousel, setIsCarousel] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("tutti");

  // Filter skills based on selected category
  const filteredSkills = selectedCategory === "tutti" ? skills : skills.filter(skill => skill.category === selectedCategory);
  
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold text-portfolio-heading dark:text-white mb-4">
            Competenze Tecniche
          </h2>
          <p className="text-xl text-portfolio-text dark:text-gray-300 mb-2">
            7+ anni di esperienza • Full Stack Development • AI Integration
          </p>
          <div className="flex justify-center gap-2 mt-4">
            <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
              Lead Developer @ FEDRO
            </Badge>
            <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
              Ex-Expedia Team
            </Badge>
          </div>
        </div>
          
        <Tabs defaultValue="grid" className="mb-12">
          <TabsList className="mx-auto">
            <TabsTrigger value="grid">Vista Griglia</TabsTrigger>
            <TabsTrigger value="radar">Competenze Core</TabsTrigger>
            <TabsTrigger value="experience">Esperienza</TabsTrigger>
            <TabsTrigger value="distribution">Distribuzione</TabsTrigger>
          </TabsList>
            
          <TabsContent value="grid" className="mt-8">
            {/* Filter buttons */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map(category => (
                <Button 
                  key={category} 
                  onClick={() => setSelectedCategory(category)} 
                  variant={selectedCategory === category ? "default" : "outline"} 
                  className="capitalize"
                >
                  {category === "tutti" ? "Tutte" : category.replace('-', ' & ')}
                </Button>
              ))}
            </div>
              
            <Button 
              onClick={() => setIsCarousel(!isCarousel)} 
              variant="outline" 
              className="mb-8 mx-auto flex"
            >
              {isCarousel ? "Visualizza in griglia" : "Visualizza come carosello"}
            </Button>
              
            {isCarousel ? (
              <Carousel className="max-w-3xl mx-auto">
                <CarouselContent>
                  {filteredSkills.map((skill, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                      <div className="p-1">
                        <SkillCard {...skill} />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
                {filteredSkills.map((skill, index) => (
                  <SkillCard key={index} {...skill} />
                ))}
              </div>
            )}
          </TabsContent>
            
          <TabsContent value="radar" className="mt-8">
            <Card className="max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle>Competenze Principali</CardTitle>
                <CardDescription>Livello di padronanza delle tecnologie core (0-100)</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[500px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                      <PolarGrid stroke="#e5e7eb" />
                      <PolarAngleAxis dataKey="subject" className="text-sm" />
                      <PolarRadiusAxis angle={30} domain={[0, 100]} />
                      <Radar 
                        name="Competenze" 
                        dataKey="A" 
                        stroke="#8B5CF6" 
                        fill="#8B5CF6" 
                        fillOpacity={0.6} 
                      />
                      <Tooltip />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="experience" className="mt-8">
            <Card className="max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle>Anni di Esperienza per Tecnologia</CardTitle>
                <CardDescription>Top 10 tecnologie per esperienza e livello di competenza</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={barData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="years" fill="#8B5CF6" name="Anni di esperienza" />
                      <Bar dataKey="level" fill="#EC4899" name="Livello (%)" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
            
          <TabsContent value="distribution" className="mt-8">
            <Card className="max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle>Distribuzione delle Competenze</CardTitle>
                <CardDescription>Ripartizione per area di specializzazione</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie 
                        data={pieData} 
                        cx="50%" 
                        cy="50%" 
                        labelLine={false}
                        label={({name, percent}) => `${name} (${(percent * 100).toFixed(0)}%)`}
                        outerRadius={120} 
                        fill="#8884d8" 
                        dataKey="value"
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Skills Summary Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">12+</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Tecnologie Padroneggiante</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">7+</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Anni di Esperienza</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400">85%</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Livello Medio Competenza</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">4</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Certificazioni</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;