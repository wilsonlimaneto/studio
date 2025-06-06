"use client";
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const NavLinks = ({ columnLayout = false }: { columnLayout?: boolean }) => (
  <>
    <Link href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Funcionalidades</Link>
    <Link href="#tech-stack" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Tecnologia</Link>
  </>
)

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // Adjust scroll threshold
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/90 backdrop-blur-sm border-b border-border" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16"> {/* Reduced height */}
          <img src="/oie_pnD9PzjNbeOy.png" alt="Maestria Logo" className="h-6" />
          <nav className="hidden md:flex items-center space-x-6">
            <NavLinks />
            <Button asChild size="sm">
              <Link href="#cta">Use Gratuitamente</Link>
            </Button>
          </nav>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden bg-card shadow-lg absolute top-full left-0 right-0 pb-4 border-t border-border">
          <nav className="flex flex-col items-center space-y-4 pt-4">
            <NavLinks columnLayout={true} />
            <Button asChild className="w-4/5">
              <Link href="#cta" onClick={() => setMobileMenuOpen(false)}>Sign Up</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
