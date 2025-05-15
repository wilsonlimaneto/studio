
"use client"; // Required for useState and useEffect

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from './scroll-reveal';
import { Search } from 'lucide-react';

const placeholderTexts = [
  "Encontre jurisprudência no TRF2 sobre tributação de perdão de dívida em empresa em recuperção judicial, que tenha favorecido o contribuinte",
  "Pesquise julgado no TJES que tenha obrigado plano de saúde cobrir prótese ocular por não ser meramente estético",
  "Encontre decisões sobre razoabilidade na demolição de obra diminuta em grande área de preservação ambiental",
  "Ache jurisprudência sobre exclusão de sócio por meio de documento assinado, mas não levado a registro",
];
const TYPING_SPEED_MS = 50;
const ROTATION_INTERVAL_MS = 10000; // 10 seconds after typing completes

const carouselImages = [
  {
    src: "https://placehold.co/600x450.png",
    alt: "Placeholder Image 1",
    title: "Título da Imagem 1",
    hint: "legal documents"
  },
  {
    src: "https://placehold.co/600x450.png",
    alt: "Placeholder Image 2",
    title: "Título da Imagem 2",
    hint: "courtroom gavel"
  },
  {
    src: "https://placehold.co/600x450.png",
    alt: "Placeholder Image 3",
    title: "Título da Imagem 3",
    hint: "law books"
  },
  {
    src: "https://placehold.co/600x450.png",
    alt: "Placeholder Image 4",
    title: "Título da Imagem 4",
    hint: "justice scale"
  },
];
const HeroSection = () => {
  const [currentPlaceholderIndex, setCurrentPlaceholderIndex] = useState(0);
  const [animatedPlaceholder, setAnimatedPlaceholder] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  // Effect for typing animation
  useEffect(() => {
    if (isTypingComplete) return; // Don't type if we're in the 10s pause or finished

    const targetText = placeholderTexts[currentPlaceholderIndex];
    if (animatedPlaceholder.length < targetText.length) {
      const typingTimeout = setTimeout(() => {
        setAnimatedPlaceholder(targetText.substring(0, animatedPlaceholder.length + 1));
      }, TYPING_SPEED_MS);
      return () => clearTimeout(typingTimeout);
    } else {
      // Typing for current text is complete
      setIsTypingComplete(true);
    }
  }, [animatedPlaceholder, currentPlaceholderIndex, isTypingComplete]);

  // Effect for 10-second rotation
  useEffect(() => {
    if (!isTypingComplete) return; // Only start rotation timer if current text is fully typed

    const rotationTimeout = setTimeout(() => {
      setCurrentPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholderTexts.length);
      setAnimatedPlaceholder(''); // Reset for the next text
      setIsTypingComplete(false); // Allow typing effect to start for the new text
    }, ROTATION_INTERVAL_MS);

    return () => clearTimeout(rotationTimeout);
  }, [isTypingComplete]);

  const imageCarouselRef = useRef<HTMLDivElement>(null);
  const [currentCarouselImageIndex, setCurrentCarouselImageIndex] = useState(0);

  // Effect for image carousel rotation
  useEffect(() => {
    const imageRotationTimer = setInterval(() => {
      setCurrentCarouselImageIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 2000); // Rotate image every 2 seconds

    return () => clearInterval(imageRotationTimer);
  }, []);

  useEffect(() => {
    if (imageCarouselRef.current) {
      imageCarouselRef.current.scrollTo({
        left: currentCarouselImageIndex * imageCarouselRef.current.clientWidth,
        behavior: 'smooth',
      });
    }
  }, [currentCarouselImageIndex]);


  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden min-h-[80vh] flex items-center bg-gradient-to-br from-background to-secondary/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="text-center md:text-left">
            <ScrollReveal>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground">
                Encontre <span className="text-primary">Jurisprudência verificada</span>, por meio de um assistente de IA, que
                entende exatamente o que você precisa.
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="mt-6 text-lg sm:text-xl text-muted-foreground">
                Unimos a facilidade do ChatGPT a julgados <span className="text-primary">verdadeiros e verificados.</span>
              </p>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button asChild size="lg" className="text-lg px-8 py-6 flex items-center">
                  <Link href="#cta">Use Gratuitamente</Link>
                </Button>
                <Button
                  asChild
                  variant="secondary"
                  size="lg"
                  className="text-lg px-8 py-6"
                >
                  <Link href="#features">Entenda mais</Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>

          {/* Search bar section - now occupies the second column on larger screens */}
          <ScrollReveal delay={300} animationType="fadeIn" className="md:col-start-2 md:row-start-1 md:self-end">
            <div className="relative mt-10 md:mt-0 w-full flex justify-center md:justify-start">
              <div className="relative flex items-center group max-w-3xl mx-auto w-full">
                <div
                  className="flex-grow pl-6 pr-16 py-4 bg-background/5 hover:bg-background/10 backdrop-blur-sm border border-white/30 hover:border-white/50 transition-all duration-300 rounded-lg text-muted-foreground text-left shadow-sm focus-within:ring-2 focus-within:ring-primary focus-within:border-primary min-h-[3.5rem] flex items-center w-full"
                >
                  <span className="opacity-75">
                    {animatedPlaceholder || '\u00A0'}{/* \u00A0 is &nbsp; */}
                    {!isTypingComplete && animatedPlaceholder.length < placeholderTexts[currentPlaceholderIndex].length && <span className="typing-cursor"></span>}
                  </span>
                </div>
                <Button
                  variant="default"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full w-11 h-11 p-0 flex items-center justify-center group-hover:shadow-lg group-hover:scale-105 focus:scale-105 focus:shadow-lg transition-all duration-300"
                  aria-label="Search"
                >
                  <Search className="h-6 w-6" />
                </Button>
              </div>
            </div>
          </ScrollReveal>

          {/* Carousel Section - now occupies the second column on larger screens, placed before the search bar in DOM for visual order via row-start */}
          <div className="md:col-start-2 md:row-start-1 flex justify-center md:justify-start items-center mb-8 md:mb-0"> {/* Added mb for spacing on mobile */}
            <ScrollReveal delay={400} animationType="fadeIn">
              <div ref={imageCarouselRef} className="relative w-[400px] h-[300px] overflow-hidden rounded-lg shadow-lg">
                {carouselImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                      index === currentCarouselImageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <Image 
                      src={image.src} 
                      alt={image.alt} 
                      layout="fill" 
                      objectFit="cover" 
                      sizes="(max-width: 768px) 100vw, 400px"
                      data-ai-hint={image.hint}
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-white text-center">
                      <h3 className="text-xl font-semibold">{image.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
