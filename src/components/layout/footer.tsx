import { Youtube, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-background/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center">
              <img src="/oie_pnD9PzjNbeOy.png" alt="Maestria Logo" className="h-6" />
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              Faça buscas Inteligentes, sem esforço. Ganhe mais causas.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">Links rápidos</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="#features" className="text-muted-foreground hover:text-primary transition-colors">Funcionalidades</Link></li>
              <li><Link href="#tech-stack" className="text-muted-foreground hover:text-primary transition-colors">Tecnologia</Link></li>
              
              
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">Siga nossas redes!</h3>
            <div className="flex space-x-4 mt-4">
              <Link href="https://www.youtube.com/@Maestrialaw" aria-label="YouTube" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-6 w-6" />
              </Link>
              <Link href="https://www.instagram.com/maestrialaw/" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="https://www.linkedin.com/company/maestrialaw/" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Maetria Law. Direitos Reservados 2025</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
