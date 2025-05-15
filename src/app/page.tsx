
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/landing/hero-section';
import FeatureSection from '@/components/landing/feature-section';
import TechStackSection from '@/components/landing/tech-stack-section';
import CTASection from '@/components/landing/cta-section';
import { Brain, PenTool, BarChart3, LucideProps, CircleCheckBig, LayoutGrid } from 'lucide-react';

export default function LandingPage(): JSX.Element {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSection />

        <FeatureSection id="features" title="Jurisprudência verdadeira por meio de um assistente"
          description="O advogado pede ao assistente detalhes sobre um julgado, passando todos os detalhes desejados, e o assistente irá pesquisar e ler os documentos entregando exatamente o que foi solicitado."
          imageUrl="/assist.png"
          imageAlt="AI Design Studio illustration"
          imageHint="design tool interface"
          Icon={LayoutGrid} 
          points={[
            "Pesquise em linguagem natural",
            "Receba julgados reais e já verificados",
            "Em menos de 30 segundos",
            "Não é curso de prompt",
            "Esqueça a busca por palavra-chave"
          ]}
        />

        <FeatureSection
          title="Compelling Content, Instantly"
          description="Never stare at a blank page again. Landing AI generates persuasive headlines, engaging body copy, and effective calls-to-action tailored to your audience and goals."
          imageUrl="https://placehold.co/600x450.png"
          imageAlt="AI Content Generation illustration"
          imageHint="writing assistant document"
          Icon={PenTool}
          reverseOrder={true}
          points={[
            "Automated headline creation",
            "Engaging body copy generation",
            "Targeted call-to-action writing",
            "Multiple tone & style options"
          ]}
        />

        <FeatureSection
          title="Optimization on Autopilot"
          description="Let AI analyze performance and suggest A/B tests to continuously improve your conversion rates. Focus on your business while Landing AI fine-tunes your pages."
          imageUrl="https://placehold.co/600x450.png"
          imageAlt="AI Optimization illustration"
          imageHint="analytics dashboard chart"
          Icon={BarChart3}
          points={[
            "Automated A/B testing suggestions",
            "Performance tracking & insights",
            "Conversion rate optimization",
            "Predictive analytics for trends"
          ]}
        />

        <TechStackSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
