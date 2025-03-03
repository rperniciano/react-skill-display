
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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

interface SkillCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  image?: string;
  detailedInfo?: string;
  category?: string;
}

const SkillCard = ({ 
  title, 
  description, 
  icon, 
  image = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500&q=60",
  detailedInfo = "Informazioni dettagliate su questa competenza saranno presto disponibili.",
  category = ""
}: SkillCardProps) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Card className="hover:shadow-lg transition-shadow dark:border-gray-700">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {icon}
          <span>{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="overflow-hidden rounded-md bg-gray-200 dark:bg-gray-700">
          <div className={`relative ${!imageLoaded ? 'aspect-w-16 aspect-h-9 animate-pulse' : ''}`}>
            <img 
              src={image} 
              alt={`${title} skill`} 
              className={`w-full h-40 object-cover transition-all duration-300 ${
                imageLoaded 
                  ? 'hover:scale-105 opacity-100' 
                  : 'opacity-0'
              }`}
              onLoad={() => setImageLoaded(true)}
            />
          </div>
        </div>
        <p className="text-portfolio-text">{description}</p>
        
        {category && (
          <div className="text-xs text-portfolio-primary font-medium uppercase tracking-wider">
            {category}
          </div>
        )}
        
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <DialogTrigger asChild>
                  <Button 
                    variant="outline" 
                    className="w-full hover:bg-portfolio-primary hover:text-white focus:ring-2 focus:ring-portfolio-primary focus:ring-offset-2"
                    aria-label={`Maggiori informazioni su ${title}`}
                  >
                    Maggiori Informazioni
                  </Button>
                </DialogTrigger>
              </TooltipTrigger>
              <TooltipContent>
                <p>Clicca per ulteriori dettagli</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                {icon}
                <span>{title}</span>
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <img 
                src={image} 
                alt={`${title} skill`} 
                className="w-full h-48 object-cover rounded-md" 
              />
              <p className="text-md text-portfolio-text">{detailedInfo}</p>
              {category && (
                <div className="text-sm text-portfolio-primary font-medium uppercase tracking-wider">
                  Categoria: {category}
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
};

export default SkillCard;
