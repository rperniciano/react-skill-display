import React from 'react';
import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

type AnimationType = 'fade-in-up' | 'fade-in-down' | 'scale-in';

interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  animation = 'fade-in-up',
  delay = 0,
  className,
  as: Component = 'div'
}) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <Component
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(
        !isVisible && 'opacity-0',
        isVisible && `animate-${animation}`,
        className
      )}
      style={isVisible ? {
        animationDelay: `${delay}ms`,
        animationFillMode: 'forwards'
      } : undefined}
    >
      {children}
    </Component>
  );
};

export default AnimatedSection;
