import Image from 'next/image';
import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import ScrollReveal from './scroll-reveal';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

interface FeatureSectionProps {
  id?: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  Icon?: LucideIcon;
  reverseOrder?: boolean;
  imageHint?: string;
  points?: string[];
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  id,
  title,
  description,
  imageUrl,
  imageAlt,
  Icon,
  reverseOrder = false,
  imageHint,
  points,
}) => {
  return (
    <section id={id} className="py-16 md:py-24 bg-background even:bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={cn(
          "grid md:grid-cols-2 gap-12 md:gap-16 items-center",
          reverseOrder ? "md:grid-flow-col-dense" : ""
        )}>
          <ScrollReveal className={cn("md:order-1", reverseOrder && "md:order-2")}>
            <Card className="overflow-hidden shadow-xl">
              <Image
                src={imageUrl}
                alt={imageAlt}
 width={480}
 height={360}
                className="object-cover w-full h-auto aspect-[4/3] rounded-t-lg"
                data-ai-hint={imageHint || "feature abstract"}
              />
            </Card>
          </ScrollReveal>
          <ScrollReveal delay={200} className={cn("md:order-2", reverseOrder && "md:order-1")}>
            <div className="max-w-md mx-auto md:mx-0 text-center md:text-left">
              {Icon && <Icon className="h-12 w-12 text-primary mb-4 mx-auto md:mx-0" />}
              <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                {title}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                {description}
              </p>
              {points && points.length > 0 && (
                <ul className="mt-6 space-y-3">
                  {points.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-primary mr-3 shrink-0 mt-1" />
                      <span className="text-muted-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
