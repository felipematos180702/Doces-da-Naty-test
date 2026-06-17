import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

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
      className="fixed top-0 left-0 right-0 z-50 bg-brand-cream/80 backdrop-blur-md border-b border-brand-primary/10"
    >
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between relative">
        <button 
          onClick={handleLogoClick}
          className="flex items-center cursor-pointer focus:outline-none select-none text-left h-full relative overflow-visible z-10"
          id="header-logo-btn"
        >
          <img 
            src="https://lh3.googleusercontent.com/d/15sZIRzIkTCQ_vansHhU7zJSJOdbghmcP" 
            alt="Doces da Naty" 
            className="h-[105px] sm:h-[115px] md:h-[135px] -my-6 sm:-my-7 md:-my-8 w-auto object-contain transition-all duration-300 select-none pointer-events-none"
            referrerPolicy="no-referrer"
          />
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
          <a 
            href="https://wa.me/553193476920" 
            target="_blank"
            referrerPolicy="no-referrer"
            className="hidden sm:flex items-center gap-2 bg-brand-primary text-white px-5 py-2.5 rounded-full font-semibold hover:bg-brand-primary/90 transition-all shadow-lg shadow-brand-primary/20"
          >
            <MessageCircle size={18} />
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </motion.header>
  );
}
