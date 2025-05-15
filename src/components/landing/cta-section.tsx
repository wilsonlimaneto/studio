import { Button } from '@/components/ui/button';
import Link from 'next/link';
import ScrollReveal from './scroll-reveal';

const CTASection = () => {
  return (
    <section id="cta" className="py-16 md:py-24 bg-primary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Transform Your Ideas into <span className="text-primary">Reality</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            Start building your next great landing page with Landing AI today. Experience the future of web design, powered by intelligence.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={400}>
          <div className="mt-10">
            <Button asChild size="lg" className="text-lg px-10 py-6">
              <Link href="#">Sign Up - It&apos;s Free!</Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTASection;
