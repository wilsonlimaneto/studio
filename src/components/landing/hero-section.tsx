
"use client"; // Required for useState and useEffect
import React from 'react';
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
    src: "/gfstartups_resized.jpg",
    alt: "Google for Startups Accelerator",
    title: "Startup selecionada pelo Google",
    hint: "Google for Startups logo"
  },
  {
    src: "/verificado_papel_600x450.jpg",
    alt: "Jurisprudence documents with verification stamp",
    title: "Jurisprudência real e já verificada",
    hint: "Verified documents",
  },

  {
    src: "/ChatGPT Image 15 de mai. de 2025, 11_52_43.png",
    alt: "ChatGPT Image",
    title: "Busca por IA vs. Palavra-chave e Conectivos",
    hint: "ChatGPT"
  }
];

const HeroSection = () => {
  const [currentPlaceholderIndex, setCurrentPlaceholderIndex] = useState(0);
  const [animatedPlaceholder, setAnimatedPlaceholder] = useState('');
  const [inputValue, setInputValue] = React.useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  // Effect for typing animation
  useEffect(() => {
    if (isTypingComplete && inputValue) return;

    const targetText = placeholderTexts[currentPlaceholderIndex];
    if (animatedPlaceholder.length < targetText.length) {
      const typingTimeout = setTimeout(() => {
        setAnimatedPlaceholder(targetText.substring(0, animatedPlaceholder.length + 1));
      }, TYPING_SPEED_MS);
      return () => clearTimeout(typingTimeout);
    } else {
      setIsTypingComplete(true);
    }
  }, [animatedPlaceholder, currentPlaceholderIndex, isTypingComplete, inputValue]);

  // Effect for 10-second rotation
  useEffect(() => {
    if (!isTypingComplete || inputValue) return;

    const rotationTimeout = setTimeout(() => {
      setCurrentPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholderTexts.length);
      setAnimatedPlaceholder('');
      setIsTypingComplete(false);
    }, ROTATION_INTERVAL_MS);

    return () => clearTimeout(rotationTimeout);
  }, [isTypingComplete, inputValue]);

  const imageCarouselRef = useRef<HTMLDivElement>(null);
  const [currentCarouselImageIndex, setCurrentCarouselImageIndex] = useState<number>(0);

  // Effect for image carousel rotation
  useEffect(() => {
    const imageRotationTimer = setInterval(() => {
      setCurrentCarouselImageIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 5000);

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
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Col 1: Text content + search field */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <ScrollReveal className="w-full">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground">
                Encontre <span className="text-primary">Jurisprudência verificada</span>, por meio de um assistente de IA que
                entrega exatamente o que você precisa.
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200} className="w-full">
              <p className="mt-6 text-lg sm:text-xl text-muted-foreground">
                Unimos a facilidade do ChatGPT a julgados <span className="text-primary">verdadeiros e verificados.</span> Experimente o poder de compreensão da busca jurisprudencial <span className="text-primary">semântica:</span>
              </p>
            </ScrollReveal>
            <ScrollReveal delay={400} animationType="fadeIn" className="w-full mt-8">
              <div className="flex flex-col items-center space-y-4 sm:flex-row sm:space-x-2">
                <div className="relative w-full sm:flex-grow">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground z-10" />
                  <textarea
                    rows={4}
                    placeholder={animatedPlaceholder + ((!isTypingComplete && !inputValue) ? '|' : '')}
                    className="relative w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-transparent border-white text-white placeholder:text-gray-300 resize-none text-lg md:text-xl"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onFocus={() => setIsTypingComplete(true)} // Pause animation on focus
                  />
                </div>
                <Button asChild size="lg" className="text-lg px-8 py-3 whitespace-nowrap bg-primary hover:bg-primary/90 w-full sm:w-auto">
                  <Link href="#cta">Buscar</Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>

          {/* Col 2: Contains Carousel */}
          <div className="w-full"> 
            <ScrollReveal delay={600} animationType="fadeIn" className="w-full mt-10 md:mt-0">
              <div
                ref={imageCarouselRef}
                className="relative w-[72%] mx-auto aspect-[4/3] overflow-hidden rounded-lg shadow-lg"
              >
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
                      fill
                      sizes="(max-width: 767px) 72vw, 36vw"
                      className="object-cover"
                      data-ai-hint={image.hint}
                      priority={index === 0}
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 sm:p-3 text-white text-center">
                      <h3 className="text-base sm:text-lg font-semibold">{image.title}</h3>
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
}

export default HeroSection;

