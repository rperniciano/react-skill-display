import React from "react";
import { Briefcase, Github, ExternalLink, TrendingUp, Clock, Code2, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { portfolioData } from "./portfolio-data";
import { useLanguage } from "./LanguageContext";
import { getProjectDescription, getProjectMetrics } from "./translation-utils";

const Projects = () => {
  const { t, language } = useLanguage();
  
  // Map project data with translations
  const projectsWithTranslations = portfolioData.projects.map(project => ({
    ...project,
    description: getProjectDescription(project.id.split('-')[0], t) || project.description,
    metrics: project.metrics ? getProjectMetrics(project.id.split('-')[0], project.metrics, t) : project.metrics
  }));

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-3 rounded-full">
              <Briefcase className="h-8 w-8 text-white" aria-hidden="true" />
            </div>
          </div>
          
          <h2 className="text-4xl font-bold text-portfolio-heading dark:text-white text-center mb-4">
            {t.projects.title}
          </h2>
          
          <p className="text-portfolio-text dark:text-gray-300 text-center max-w-2xl mx-auto mb-12">
            {t.projects.subtitle}
          </p>
          
          {/* Featured Project - FEDRO */}
          <div className="mb-12">
            <Card className="overflow-hidden bg-gradient-to-r from-purple-500/10 to-blue-500/10 border-purple-500/20">
              <div className="md:flex">
                <div className="md:w-2/5">
                  <img 
                    src={projectsWithTranslations[0].image} 
                    alt={projectsWithTranslations[0].title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-3/5 p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge className="bg-purple-600 text-white">{t.projects.leadDeveloper}</Badge>
                    <Badge variant="outline">2025</Badge>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{projectsWithTranslations[0].title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {projectsWithTranslations[0].description}
                  </p>
                  
                  {/* Metrics */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    {projectsWithTranslations[0].metrics?.map((metric, i) => (
                      <div key={i} className="text-center">
                        <div className="text-lg font-bold text-purple-600 dark:text-purple-400">
                          {metric.split(' ')[0]}
                        </div>
                        <div className="text-xs text-gray-500">
                          {metric.split(' ').slice(1).join(' ')}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {projectsWithTranslations[0].technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Features */}
                  <div className="space-y-1 mb-4">
                    {projectsWithTranslations[0].features.slice(0, 3).map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <Code2 className="h-3 w-3" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
          
          {/* Other Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsWithTranslations.slice(1).map((project, index) => (
              <Card key={index} className="overflow-hidden flex flex-col h-full hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant={project.type === "enterprise" ? "default" : "secondary"}>
                      {project.type === "enterprise" ? t.projects.enterprise : t.projects.personal}
                    </Badge>
                    <span className="text-sm text-gray-500">{project.year}</span>
                  </div>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="flex-1">
                  {/* Metrics or Features */}
                  {project.metrics && (
                    <div className="space-y-2 mb-4">
                      {project.metrics.slice(0, 2).map((metric, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <TrendingUp className="h-3 w-3 text-green-500" />
                          <span className="text-gray-600 dark:text-gray-400">{metric}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 4).map((tech, tagIndex) => (
                      <Badge 
                        key={tagIndex} 
                        variant="outline"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 4}
                      </Badge>
                    )}
                  </div>
                </CardContent>
                
                <CardFooter className="flex justify-between mt-auto">
                  {project.github ? (
                    <Button variant="outline" size="sm" asChild>
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1"
                      >
                        <Github className="h-4 w-4" />
                        <span>{t.projects.code}</span>
                      </a>
                    </Button>
                  ) : (
                    <Badge variant="outline" className="text-xs">
                      <Clock className="h-3 w-3 mr-1" />
                      {t.projects.proprietary}
                    </Badge>
                  )}
                  
                  {project.demo && (
                    <Button size="sm" asChild>
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span>{t.projects.demo}</span>
                      </a>
                    </Button>
                  )}
                  
                  {project.client && (
                    <Badge variant="secondary" className="text-xs">
                      <Users className="h-3 w-3 mr-1" />
                      {project.client}
                    </Badge>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
          
          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="inline-flex flex-col items-center">
              <h3 className="text-2xl font-bold mb-4">{t.projects.interestedCollab}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
                {t.projects.openToProjects}
              </p>
              <div className="flex gap-4">
                <Button asChild>
                  <a href="#contact">
                    {t.projects.contactMe}
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a 
                    href="https://github.com/rperniciano" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github className="h-4 w-4" />
                    <span>{t.projects.moreOnGithub}</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;