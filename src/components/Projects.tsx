
import { Briefcase, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const projects = [
  {
    title: "E-commerce Dashboard",
    description: "Dashboard per la gestione di un negozio online con analisi delle vendite in tempo reale",
    tags: ["React", "TypeScript", "Chart.js", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1000&q=80",
    github: "https://github.com/username/ecommerce-dashboard",
    demo: "https://demo-ecommerce-dashboard.example.com",
  },
  {
    title: "Social Media App",
    description: "Applicazione social media con funzionalità di chat in tempo reale e condivisione di contenuti",
    tags: ["React", "Firebase", "Redux", "Styled Components"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80",
    github: "https://github.com/username/social-media-app",
    demo: "https://demo-social-app.example.com",
  },
  {
    title: "Gestione Progetti",
    description: "Applicazione per la gestione di progetti e task con funzionalità di drag-and-drop e reportistica",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=1000&q=80",
    github: "https://github.com/username/project-management",
    demo: "https://demo-project-management.example.com",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-portfolio-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-portfolio-primary/20 p-3 rounded-full">
              <Briefcase className="h-8 w-8 text-portfolio-primary" aria-hidden="true" />
            </div>
          </div>
          
          <h2 className="text-4xl font-bold text-portfolio-heading text-center mb-4">
            Progetti & Portfolio
          </h2>
          
          <p className="text-portfolio-text text-center max-w-2xl mx-auto mb-12">
            Una selezione dei miei progetti recenti. Ogni progetto è il risultato di una combinazione di design intuitivo ed esperienza tecnica.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow bg-background">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="text-xs px-2 py-1 rounded-full bg-portfolio-primary/10 text-portfolio-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter className="flex justify-between mt-auto">
                  <Button variant="outline" size="sm" asChild>
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1"
                    >
                      <Github className="h-4 w-4" />
                      <span>Codice</span>
                    </a>
                  </Button>
                  
                  <Button size="sm" asChild>
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Demo</span>
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild variant="outline">
              <a 
                href="https://github.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="h-4 w-4" />
                <span>Altri progetti su GitHub</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
