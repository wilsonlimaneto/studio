
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
          description="O advogado pede ao assistente que encontre um julgado, passando todos os detalhes desejados, e o assistente irá pesquisar e ler os documentos entregando exatamente o que foi solicitado."
          imageUrl="/assistente.png"
          imageAlt="Advogado usando assistente de IA"
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
          title="Funcionalidades Inovadoras"
          description="Além de aposentar as ferramentas de busca baseadas em palavra-chave, Maestria supera todas as IAs genéricas com modelos treinados e refinados no conhecimento jurídico."
          imageUrl="/chatbot.png"
          imageAlt="AI Content Generation illustration"
          imageHint="writing assistant document"
          Icon={PenTool}
          reverseOrder={true}
          points={[
            "Economize tempo",
            "Faça perguntas ao Inteiro Teor",
            "Leia o resumo das ìntegras",
            "Encontre os precedentes vinculantes (Art. 927 CPC) "
          ]}
        />



        <TechStackSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
