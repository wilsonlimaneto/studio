import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from './scroll-reveal';

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden min-h-[80vh] flex items-center bg-gradient-to-br from-background to-secondary/80">
      {/* Removed decorative background blur elements */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="text-center md:text-left">
            <ScrollReveal>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground">
                Landing AI: Craft <span className="text-primary">Intelligent</span> Landing Pages, Effortlessly.
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="mt-6 text-lg sm:text-xl text-muted-foreground">
                Leverage the power of AI to design, write, and optimize high-converting landing pages in minutes. No coding required.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={400}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button asChild size="lg" className="text-lg px-8 py-6">
                  <Link href="#cta">Get Started Free</Link>
                </Button>
                <Button
                  asChild
                  variant="secondary"
                  size="lg"
                  className="text-lg px-8 py-6"
                >
                  <Link href="#features">Learn More</Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
          <div className="relative mt-10 md:mt-0 h-64 md:h-auto">
            <ScrollReveal delay={300} animationType="fadeIn">
              <Image
                src="https://placehold.co/600x400.png"
                alt="Landing AI illustrative interface"
                width={600}
                height={400}
                className="rounded-xl shadow-2xl object-cover mx-auto"
                data-ai-hint="abstract interface dark"
                priority
              />
            </ScrollReveal>
            {/* Removed floating elements */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
