import React, { useState } from "react";
import { Code, Database, Layout, Palette } from "lucide-react";
import SkillCard from "./SkillCard";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChartContainer } from "@/components/ui/chart";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, PieChart, Pie, Cell, Legend, Tooltip } from "recharts";

// Add categories and skill level to each skill
const skills = [{
  title: "React & Hooks",
  description: "Sviluppo di componenti riutilizzabili e gestione dello stato con React Hooks",
  icon: <Code className="h-6 w-6 text-portfolio-primary" />,
  image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=500&q=60",
  detailedInfo: "Esperienza approfondita con l'ecosistema React, inclusi React Hooks, Context API, e React Router. Sviluppo componenti riutilizzabili, ottimizzati e manutenibili. Implementazione di pattern avanzati per gestire lo stato dell'applicazione e il rendering condizionale.",
  category: "frontend",
  level: 90
}, {
  title: "State Management",
  description: "Gestione efficiente dello stato dell'applicazione con Redux e Context API",
  icon: <Database className="h-6 w-6 text-portfolio-primary" />,
  image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=500&q=60",
  detailedInfo: "Competenza nella gestione di stati complessi utilizzando Redux, Redux Toolkit, MobX e Context API. Ottimizzazione delle performance con tecniche come memoization, code splitting e lazy loading. Implementazione di soluzioni scalabili per applicazioni di grandi dimensioni.",
  category: "architecture",
  level: 85
}, {
  title: "Responsive Design",
  description: "Creazione di interfacce responsive e adattive per ogni dispositivo",
  icon: <Layout className="h-6 w-6 text-portfolio-primary" />,
  image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=500&q=60",
  detailedInfo: "Sviluppo di interfacce web completamente responsive utilizzando CSS Grid, Flexbox e media queries. Applicazione di principi di Mobile First Design e utilizzo di framework come Tailwind CSS e Bootstrap. Test su diversi dispositivi e dimensioni dello schermo per garantire un'esperienza utente ottimale.",
  category: "design",
  level: 80
}, {
  title: "UI/UX Design",
  description: "Design di interfacce utente intuitive e accattivanti",
  icon: <Palette className="h-6 w-6 text-portfolio-primary" />,
  image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500&q=60",
  detailedInfo: "Competenza nella creazione di interfacce utente intuitive e accattivanti con attenzione particolare all'esperienza utente. Conoscenza di strumenti come Figma, Adobe XD e Sketch. Implementazione di principi di accessibilità (WCAG) e design system scalabili.",
  category: "design",
  level: 75
}, {
  title: "TypeScript",
  description: "Sviluppo di applicazioni con tipizzazione statica",
  icon: <Code className="h-6 w-6 text-portfolio-primary" />,
  image: "https://images.unsplash.com/photo-1588239034647-25783cbfcfc1?auto=format&fit=crop&w=500&q=60",
  detailedInfo: "Utilizzo di TypeScript per migliorare la qualità del codice e prevenire errori a runtime. Definizione di interfacce, tipi e generics per creare codice robusto e ben documentato. Integrazione con React e altre librerie per un'esperienza di sviluppo ottimale.",
  category: "frontend",
  level: 85
}, {
  title: "Node.js & Express",
  description: "Sviluppo di API RESTful e microservizi",
  icon: <Database className="h-6 w-6 text-portfolio-primary" />,
  image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=500&q=60",
  detailedInfo: "Creazione di backend con Node.js e Express, implementando API RESTful e GraphQL. Gestione di autenticazione, autorizzazione e sicurezza delle applicazioni web. Integrazione con database SQL e NoSQL per la persistenza dei dati.",
  category: "backend",
  level: 70
}];

// Get unique categories for filter buttons
const categories = ["tutti", ...new Set(skills.map(skill => skill.category))];

// Prepare data for radar chart
const radarData = skills.map(skill => ({
  subject: skill.title,
  A: skill.level,
  fullMark: 100
}));

// Prepare data for pie chart
const pieData = Array.from(skills.reduce((acc, skill) => {
  const category = skill.category;
  acc.set(category, (acc.get(category) || 0) + 1);
  return acc;
}, new Map())).map(([name, value]) => ({
  name,
  value
}));
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];
const Skills = () => {
  const [isCarousel, setIsCarousel] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("tutti");

  // Filter skills based on selected category
  const filteredSkills = selectedCategory === "tutti" ? skills : skills.filter(skill => skill.category === selectedCategory);
  return <section id="skills" className="py-20 bg-portfolio-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold text-portfolio-heading mb-4">
            Le Mie Competenze
          </h2>
          <p className="text-xl text-portfolio-text mb-8">Questa sezione serve a esemplificare le mie competenze in ambito REACT, i dati qui sotto sono creati da AI e non veritieri</p>
          
          <Tabs defaultValue="lista" className="mb-12">
            <TabsList className="mx-auto">
              <TabsTrigger value="lista">Lista</TabsTrigger>
              <TabsTrigger value="radar">Grafico a Radar</TabsTrigger>
              <TabsTrigger value="torta">Grafico a Torta</TabsTrigger>
            </TabsList>
            
            <TabsContent value="lista" className="mt-8">
              {/* Filter buttons */}
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {categories.map(category => <Button key={category} onClick={() => setSelectedCategory(category)} variant={selectedCategory === category ? "default" : "outline"} className="capitalize">
                    {category}
                  </Button>)}
              </div>
              
              <Button onClick={() => setIsCarousel(!isCarousel)} variant="outline" className="mb-8">
                {isCarousel ? "Visualizza in colonna" : "Visualizza come carosello"}
              </Button>
              
              {isCarousel ? <Carousel className="max-w-xl mx-auto">
                  <CarouselContent>
                    {filteredSkills.map((skill, index) => <CarouselItem key={index}>
                        <SkillCard {...skill} />
                      </CarouselItem>)}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel> : <div className="grid gap-6 max-w-xl mx-auto">
                  {filteredSkills.map((skill, index) => <SkillCard key={index} {...skill} />)}
                </div>}
            </TabsContent>
            
            <TabsContent value="radar" className="mt-8">
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md max-w-3xl mx-auto">
                <h3 className="text-xl font-bold text-center mb-4">Livello di Competenze</h3>
                <div className="h-[500px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                      <PolarGrid />
                      <PolarAngleAxis dataKey="subject" />
                      <PolarRadiusAxis angle={30} domain={[0, 100]} />
                      <Radar name="Competenze" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                      <Tooltip />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
                <div className="text-center mt-4 text-sm text-gray-500">
                  Il grafico mostra il livello di competenza su una scala da 0 a 100
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="torta" className="mt-8">
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md max-w-3xl mx-auto">
                <h3 className="text-xl font-bold text-center mb-4">Distribuzione delle Competenze</h3>
                <div className="h-[400px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie data={pieData} cx="50%" cy="50%" labelLine={true} label={({
                      name,
                      percent
                    }) => `${name} (${(percent * 100).toFixed(0)}%)`} outerRadius={120} fill="#8884d8" dataKey="value">
                        {pieData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="text-center mt-4 text-sm text-gray-500">
                  La distribuzione mostra la proporzione di competenze per ciascuna categoria
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>;
};
export default Skills;