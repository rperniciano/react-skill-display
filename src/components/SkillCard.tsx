
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface SkillCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const SkillCard = ({ title, description, icon }: SkillCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {icon}
          <span>{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-portfolio-text">{description}</p>
      </CardContent>
    </Card>
  );
};

export default SkillCard;
