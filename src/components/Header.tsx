import { motion } from 'motion/react';

interface HeaderProps {
  onNavigateHome?: () => void;
  onNavigateToSection?: (sectionId: string) => void;
}

export default function Header({ onNavigateHome, onNavigateToSection }: HeaderProps) {
  const handleLogoClick = () => {
    if (onNavigateToSection) {
      onNavigateToSection('top');
    } else if (onNavigateHome) {
      onNavigateHome();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="hidden md:block fixed top-0 left-0 right-0 z-50 bg-brand-cream/80 backdrop-blur-md border-b border-brand-primary/10"
    >
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between relative">
        <button 
          onClick={handleLogoClick}
          className="flex items-center cursor-pointer focus:outline-none select-none text-left h-full relative z-10 font-serif text-xl sm:text-2xl font-bold text-brand-secondary"
          id="header-logo-btn"
        >
          Doces da <span className="text-brand-primary ml-1">Naty</span>
        </button>
        
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 font-medium z-0">
          <a 
            href="#cursos" 
            onClick={(e) => {
              e.preventDefault();
              if (onNavigateToSection) {
                onNavigateToSection('cursos');
              } else if (onNavigateHome) {
                onNavigateHome();
                setTimeout(() => {
                  document.getElementById('cursos')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }
            }} 
            className="hover:text-brand-primary transition-colors"
          >
            Cursos
          </a>
          <a 
            href="#sobre" 
            onClick={(e) => {
              e.preventDefault();
              if (onNavigateToSection) {
                onNavigateToSection('sobre');
              } else if (onNavigateHome) {
                onNavigateHome();
                setTimeout(() => {
                  document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }
            }} 
            className="hover:text-brand-primary transition-colors"
          >
            Sobre Naty
          </a>
          <a 
            href="#depoimentos" 
            onClick={(e) => {
              e.preventDefault();
              if (onNavigateToSection) {
                onNavigateToSection('depoimentos');
              } else if (onNavigateHome) {
                onNavigateHome();
                setTimeout(() => {
                  document.getElementById('depoimentos')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }
            }} 
            className="hover:text-brand-primary transition-colors"
          >
            Depoimentos
          </a>
        </nav>

        <div className="flex items-center gap-4 relative z-10">
        </div>
      </div>
    </motion.header>
  );
}
