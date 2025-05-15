import { Brain, Bot, Zap, MessageSquare, Database, Scale } from 'lucide-react';
import ScrollReveal from './scroll-reveal';
import { Card, CardContent } from '@/components/ui/card';

interface TechItem {
  name: string;
  Icon: React.ElementType;
}

const techStack: TechItem[] = [
  { name: 'Modelo de IA específico para advogados', Icon: Brain },
  { name: 'Pesquisa por assistente que entende o contexto jurídico da sua busca', Icon: Bot },
  { name: 'Jurisprudência relevante e verificada em poucos segundos', Icon: Zap },
  { name: 'Pesquisa em linguagem natural', Icon: MessageSquare },
  { name: 'Melhore a fundamentação e maximize a chance de êxito', Icon: Scale }
];

const TechStackSection = () => {
  return (
    <section id="tech-stack" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center tracking-tight">
          Mas por que na Maestria funciona e no ChatGPT não?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-center max-w-2xl mx-auto">
            A Maestria possui <span className="text-primary">modelo próprio e específico treinado para selecionar documentos reais</span> (e não para gerar documentos em resposta a meros prompts)
          </p>
        </ScrollReveal>
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 justify-items-center">
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
