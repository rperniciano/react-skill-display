import React, { Children, cloneElement, isValidElement } from 'react';
import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface StaggeredGridProps {
  children: React.ReactNode;
  staggerDelay?: number;
  baseDelay?: number;
  animation?: 'fade-in-up' | 'fade-in-down' | 'scale-in';
  className?: string;
}

export const StaggeredGrid: React.FC<StaggeredGridProps> = ({
  children,
  staggerDelay = 100,
  baseDelay = 0,
  animation = 'fade-in-up',
  className
}) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className={className}>
      {Children.map(children, (child, index) => {
        if (!isValidElement(child)) return child;

        const delay = baseDelay + (index * staggerDelay);

        return cloneElement(child, {
          className: cn(
            child.props.className,
            !isVisible && 'opacity-0',
            isVisible && `animate-${animation}`
          ),
          style: isVisible ? {
            ...child.props.style,
            animationDelay: `${delay}ms`,
            animationFillMode: 'forwards'
          } : child.props.style
        } as React.HTMLAttributes<HTMLElement>);
      })}
    </div>
  );
};

export default StaggeredGrid;
