'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

type AnimationType = 'fade-in-up' | 'fade-in-down' | 'scale-in';

interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number;
  className?: string;
  // React 19's types no longer declare a global `JSX` namespace; it now lives
  // under the `React` namespace.
  as?: keyof React.JSX.IntrinsicElements;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  animation = 'fade-in-up',
  delay = 0,
  className,
  as = 'div'
}) => {
  const { ref, isVisible } = useScrollAnimation();

  // Collapsed to a single component type for the JSX call below. Left as the raw
  // `keyof React.JSX.IntrinsicElements` union (or `React.ElementType`), TS has to
  // resolve the props below against every one of React 19's ~180 intrinsic
  // elements: that both mismatches the SVG members and overflows into TS2590
  // ("union type too complex"). The assertion is types-only — `as` stays the tag
  // string that `createElement` receives at runtime.
  const Component = as as unknown as React.ComponentType<
    React.HTMLAttributes<HTMLElement> & { ref?: React.Ref<HTMLElement> }
  >;

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
