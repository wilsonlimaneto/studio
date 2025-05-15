import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/landing/hero-section';
import FeatureSection from '@/components/landing/feature-section';
import TechStackSection from '@/components/landing/tech-stack-section';
import CTASection from '@/components/landing/cta-section';
import { Brain, PenTool, BarChart3 } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSection />

        <FeatureSection id="features" title="AI-Powered Design Studio"
          description="Our intuitive drag-and-drop editor, supercharged with AI suggestions, helps you create visually stunning layouts that match your brand. Choose from smart templates or build from scratch with AI guidance."
          imageUrl="https://placehold.co/600x450.png"
          imageAlt="AI Design Studio illustration"
          imageHint="design tool interface"
          Icon={LayoutGridIcon} // Using a simple SVG for LayoutGrid as it's common and might not be in Lucide directly
          points={[
            "Smart template suggestions",
            "AI-assisted layout generation",
            "Real-time design feedback",
            "Brand consistency tools"
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

// Simple SVG for LayoutGridIcon as an example if not available or preferred
const LayoutGridIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="3" y="3" width="7" height="7"></rect>
    <rect x="14" y="3" width="7" height="7"></rect>
    <rect x="14" y="14" width="7" height="7"></rect>
    <rect x="3" y="14" width="7" height="7"></rect>
  </svg>
);
