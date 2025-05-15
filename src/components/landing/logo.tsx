import Link from 'next/link';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string; // For the Link element
  svgClassName?: string; // For the SVG element itself
}

const Logo: React.FC<LogoProps> = ({ className, svgClassName }) => {
  return (
    <Link
      href="/"
      className={cn(
        "flex items-center font-bold text-foreground hover:text-primary transition-colors",
        className
      )}
    >
      <svg
        viewBox="0 0 220 50" // Adjusted viewBox for "maestria." text
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("h-6 w-auto", svgClassName)} // Default height matching previous iconSize={6}
      >
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontFamily="var(--font-geist-sans), system-ui, sans-serif"
          fontWeight="bold" // Explicitly set bold for the text within SVG
          fontSize="40" // Font size relative to viewBox
          letterSpacing="-0.5"
        >
          maestria.
        </text>
      </svg>
    </Link>
  );
};

export default Logo;
