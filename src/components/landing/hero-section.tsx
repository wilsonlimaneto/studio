import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from './scroll-reveal';
import { Search } from 'lucide-react'; // Added Search icon

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden min-h-[80vh] flex items-center bg-gradient-to-br from-background to-secondary/80">
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

            {/* New Search-like field */}
            <ScrollReveal delay={600} animationType="fadeInUp">
              <div className="mt-12 w-full max-w-xl mx-auto md:mx-0">
                <div className="relative flex items-center group">
                  <div 
                    className="flex-grow pl-6 pr-16 py-4 bg-background/5 hover:bg-background/10 backdrop-blur-sm border border-white/30 hover:border-white/50 transition-all duration-300 rounded-lg text-muted-foreground text-left shadow-sm focus-within:ring-2 focus-within:ring-primary focus-within:border-primary"
                  >
                    <span className="opacity-75">e.g., generate a marketing plan for a new SaaS product</span>
                  </div>
                  <Button
                    variant="default" // Primary blue background
                    size="icon"
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full w-11 h-11 p-0 flex items-center justify-center group-hover:shadow-lg group-hover:scale-105 focus:scale-105 focus:shadow-lg transition-all duration-300"
                    aria-label="Search"
                  >
                    <Search className="h-5 w-5" />
                  </Button>
                </div>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
