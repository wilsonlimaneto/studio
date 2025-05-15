import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Label } from '@/components/ui/label';
import ScrollReveal from './scroll-reveal';

const CTASection = () => {
  return (
    <section id="cta" className="py-16 md:py-24 bg-primary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            <span className="text-primary">Não perca mais tempo</span> com tecnologias que inventam julgados. 
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            Cadastre-se para acessar gratuitamente uma IA jurídica criada, por engenheiros e advogados, com inteligência humana (não nos confunda com gurus de prompt!)
          </p>
        </ScrollReveal>
        <ScrollReveal delay={400} className="mt-10">
          <form className="mt-10 flex flex-col items-center space-y-4">
            <div className="w-full max-w-sm text-left">
              <Label htmlFor="name" className="sr-only">Name</Label>
              <input id="name" type="text" required placeholder="Name" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <div className="w-full max-w-sm text-left">
              <Label htmlFor="phone" className="sr-only">Phone</Label>
              <input id="phone" type="tel" required placeholder="Phone" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <div className="w-full max-w-sm text-left">
              <Label htmlFor="email" className="sr-only">Email</Label>
              <input id="email" type="email" required placeholder="Email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <Button type="submit" size="lg" className="text-lg px-10 py-6">
              Submit
            </Button>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
};
export default CTASection;


