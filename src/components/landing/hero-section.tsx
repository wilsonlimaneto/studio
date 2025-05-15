import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from './scroll-reveal';

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden min-h-[80vh] flex items-center bg-gradient-to-br from-background to-secondary">
      {/* Subtle background elements if desired, e.g. grid pattern or shapes */}
      <div
        aria-hidden="true"
        className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-20 dark:opacity-30"
      >
        <div className="blur-[106px] h-32 md:h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
        <div className="blur-[106px] h-16 md:h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
      </div>
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
                <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
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
                data-ai-hint="abstract interface"
                priority
              />
            </ScrollReveal>
            {/* Floating elements example */}
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-pulse hidden md:block" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-secondary rounded-lg transform rotate-12 animate-pulse hidden md:block" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
