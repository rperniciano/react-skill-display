import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger 
} from "@/components/ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useLanguage } from "./LanguageContext";

interface SkillCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  image?: string;
  detailedInfo?: string;
  category?: string;
  level?: number;
  tags?: string[];
  years?: number;
}

const SkillCard = ({ 
  title, 
  description, 
  icon, 
  image = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500&q=60",
  detailedInfo,
  category = "",
  level,
  tags = [],
  years
}: SkillCardProps) => {
  const { t, language } = useLanguage();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Translate category names
  const getCategoryName = (cat: string) => {
    switch(cat) {
      case 'frontend': return t.skills.frontend;
      case 'backend': return t.skills.backend;
      case 'ai-cloud': return t.skills.aiCloud;
      case 'architecture': return t.skills.architecture;
      case 'devops': return t.skills.devops;
      case 'testing': return t.skills.testing;
      default: return cat;
    }
  };

  const moreInfoText = language === 'it' ? "Maggiori Informazioni" : 
                       language === 'es' ? "Más Información" : 
                       "More Information";
  
  const clickForDetails = language === 'it' ? "Clicca per ulteriori dettagli" :
                          language === 'es' ? "Haz clic para más detalles" :
                          "Click for more details";

  const categoryLabel = language === 'it' ? "Categoria" :
                       language === 'es' ? "Categoría" :
                       "Category";

  const competenceLabel = language === 'it' ? "Competenza" :
                         language === 'es' ? "Competencia" :
                         "Proficiency";

  return (
    <Card className="hover:shadow-lg transition-shadow dark:border-gray-700 h-full flex flex-col">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <div className="p-2 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg text-white">
            {icon}
          </div>
          <span className="text-lg">{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 flex-1 flex flex-col">
        <div className="overflow-hidden rounded-md bg-gray-200 dark:bg-gray-700">
          <div className={`relative ${!imageLoaded ? 'aspect-w-16 aspect-h-9 animate-pulse' : ''}`}>
            <img 
              src={image} 
              alt={`${title} skill`} 
              className={`w-full h-32 object-cover transition-all duration-300 ${
                imageLoaded 
                  ? 'hover:scale-105 opacity-100' 
                  : 'opacity-0'
              }`}
              onLoad={() => setImageLoaded(true)}
            />
          </div>
        </div>
        
        <p className="text-portfolio-text dark:text-gray-300 text-sm">{description}</p>
        
        {/* Skills metadata */}
        <div className="space-y-3 flex-1">
          {years && (
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {t.skills.experience}
              </span>
              <Badge variant="secondary">
                {years} {t.skills.yearsUnit}
              </Badge>
            </div>
          )}
          
          {level && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">{competenceLabel}</span>
                <span className="font-bold">{level}%</span>
              </div>
              <Progress value={level} className="h-2" />
            </div>
          )}
          
          {category && (
            <div className="text-xs text-portfolio-primary font-medium uppercase tracking-wider">
              {getCategoryName(category)}
            </div>
          )}
          
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {tags.slice(0, 3).map((tag, i) => (
                <Badge key={i} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
              {tags.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{tags.length - 3}
                </Badge>
              )}
            </div>
          )}
        </div>
        
        {detailedInfo && (
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <DialogTrigger asChild>
                    <Button 
                      variant="outline" 
                      className="w-full hover:bg-portfolio-primary hover:text-white focus:ring-2 focus:ring-portfolio-primary focus:ring-offset-2"
                      aria-label={`${moreInfoText} ${title}`}
                    >
                      {moreInfoText}
                    </Button>
                  </DialogTrigger>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{clickForDetails}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <div className="p-2 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg text-white">
                    {icon}
                  </div>
                  <span>{title}</span>
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <img 
                  src={image} 
                  alt={`${title} skill`} 
                  className="w-full h-48 object-cover rounded-md" 
                />
                <p className="text-md text-portfolio-text dark:text-gray-300">{detailedInfo}</p>
                
                {level && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>{competenceLabel}</span>
                      <span className="font-bold">{level}%</span>
                    </div>
                    <Progress value={level} className="h-2" />
                  </div>
                )}
                
                {years && (
                  <div className="flex items-center justify-between">
                    <span className="text-sm">{t.skills.experience}</span>
                    <Badge variant="secondary">
                      {years} {t.skills.yearsUnit}
                    </Badge>
                  </div>
                )}
                
                {tags && tags.length > 0 && (
                  <div className="space-y-2">
                    <span className="text-sm font-semibold">{t.skills.technologies}:</span>
                    <div className="flex flex-wrap gap-1">
                      {tags.map((tag, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
                
                {category && (
                  <div className="text-sm text-portfolio-primary font-medium uppercase tracking-wider">
                    {categoryLabel}: {getCategoryName(category)}
                  </div>
                )}
              </div>
            </DialogContent>
          </Dialog>
        )}
      </CardContent>
    </Card>
  );
};

export default SkillCard;