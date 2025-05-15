"use client";
import { useEffect, useRef, useState, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number; // in ms
  threshold?: number;
  triggerOnce?: boolean;
  animationType?: 'fadeInUp' | 'fadeIn';
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className,
  delay = 0,
  threshold = 0.1,
  triggerOnce = true,
  animationType = 'fadeInUp',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Ensure timeout is cleared if component unmounts or effect re-runs
          const timeoutId = setTimeout(() => {
            setIsVisible(true);
            if (triggerOnce && currentRef) {
              observer.unobserve(currentRef);
            }
          }, delay);
          return () => clearTimeout(timeoutId); // Cleanup timeout
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(currentRef);
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [delay, threshold, triggerOnce]); // Removed ref.current from dependencies

  const animationClasses = {
    fadeInUp: isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
    fadeIn: isVisible ? 'opacity-100' : 'opacity-0',
  };

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-700 ease-out',
        animationClasses[animationType],
        className
      )}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
