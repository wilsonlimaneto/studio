import { Brain, Bot, Zap, LayoutGrid, PenTool, BarChart3, Database, Cloud, Code } from 'lucide-react';
import ScrollReveal from './scroll-reveal';
import { Card, CardContent } from '@/components/ui/card';

interface TechItem {
  name: string;
  Icon: React.ElementType;
}

const techStack: TechItem[] = [
  { name: 'Advanced AI Models', Icon: Brain },
  { name: 'Automation Bots', Icon: Bot },
  { name: 'Real-time Processing', Icon: Zap },
  { name: 'Next.js Framework', Icon: Code },
  { name: 'Cloud Infrastructure', Icon: Cloud },
  { name: 'Scalable Databases', Icon: Database },
];

const TechStackSection = () => {
  return (
    <section id="tech-stack" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center tracking-tight">
            Powered by Cutting-Edge Technology
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-center max-w-2xl mx-auto">
            Our platform is built on a robust and scalable infrastructure, ensuring reliability and top performance for your landing pages.
          </p>
        </ScrollReveal>
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {techStack.map((tech, index) => (
            <ScrollReveal key={tech.name} delay={index * 100}>
              <Card className="text-center hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 flex flex-col items-center justify-center aspect-square">
                  <tech.Icon className="h-10 w-10 md:h-12 md:w-12 text-primary mb-3" />
                  <h3 className="text-sm md:text-base font-semibold text-foreground">{tech.name}</h3>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
