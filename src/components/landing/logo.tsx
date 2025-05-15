import Link from 'next/link';
import { Rocket } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  iconSize?: number;
  textSize?: string;
}

const Logo: React.FC<LogoProps> = ({ className, iconSize = 7, textSize = "text-2xl" }) => {
  return (
    <Link href="/" className={cn("flex items-center space-x-2 font-bold text-foreground hover:text-primary transition-colors", className)}>
      <Rocket className={cn(`h-${iconSize} w-${iconSize} text-primary`, className)} />
      <span className={cn(textSize, className)}>Landing AI</span>
    </Link>
  );
};

export default Logo;
