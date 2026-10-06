import { motion } from 'motion/react';
import { Instagram, MessageCircle } from 'lucide-react';

interface FooterProps {
  onNavigateToSection?: (sectionId: string) => void;
  onOpenPrivacy?: () => void;
}

export default function Footer({ onNavigateToSection, onOpenPrivacy }: FooterProps) {
  return (
    <footer className="bg-brand-secondary text-brand-cream py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-serif text-3xl font-bold mb-6">
              Doces da <span className="text-brand-primary">Naty</span>
            </h3>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/cursosdocesdanaty" className="w-12 h-12 rounded-full border border-brand-cream/20 flex items-center justify-center hover:bg-brand-primary hover:border-brand-primary transition-all">
                <Instagram size={20} />
              </a>
              <a href="https://wa.me/553193476920?text=Ol%C3%A1%2C%20Naty!%20Tenho%20uma%20d%C3%BAvida%20sobre%20o%20curso%3A" className="w-12 h-12 rounded-full border border-brand-cream/20 flex items-center justify-center hover:bg-brand-primary hover:border-brand-primary transition-all" title="WhatsApp" target="_blank" rel="noopener noreferrer">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Navegação</h4>
            <ul className="space-y-4 text-brand-cream/60">
              <li>
                <a 
                  href="#cursos" 
                  onClick={(e) => {
                    e.preventDefault();
                    if (onNavigateToSection) {
                      onNavigateToSection('cursos');
                    } else {
                      document.getElementById('cursos')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }} 
                  className="hover:text-brand-primary transition-colors"
                >
                  Nossos Cursos
                </a>
              </li>
              <li>
                <a 
                  href="#sobre" 
                  onClick={(e) => {
                    e.preventDefault();
                    if (onNavigateToSection) {
                      onNavigateToSection('sobre');
                    } else {
                      document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }} 
                  className="hover:text-brand-primary transition-colors"
                >
                  Sobre a Naty
                </a>
              </li>
              <li>
                <a 
                  href="#depoimentos" 
                  onClick={(e) => {
                    e.preventDefault();
                    if (onNavigateToSection) {
                      onNavigateToSection('depoimentos');
                    } else {
                      document.getElementById('depoimentos')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }} 
                  className="hover:text-brand-primary transition-colors"
                >
                  Depoimentos
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    if (onOpenPrivacy) {
                      onOpenPrivacy();
                    } else if (onNavigateToSection) {
                      onNavigateToSection('top');
                    } else {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }} 
                  className="hover:text-brand-primary transition-colors"
                >
                  Política de Privacidade
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Contato</h4>
            <ul className="space-y-4 text-brand-cream/60">
              <li className="flex items-center gap-2.5">
                <Instagram size={20} className="text-brand-primary shrink-0" />
                <a href="https://www.instagram.com/cursosdocesdanaty" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors text-base leading-none">
                  @cursosdocesdanaty
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Instagram size={20} className="text-brand-primary shrink-0" />
                <a href="https://www.instagram.com/docesdanaty___" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors text-base leading-none">
                  @docesdanaty___
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-brand-cream/10 text-center text-brand-cream/40 text-sm">
          <p>© {new Date().getFullYear()} Doces da Naty. Todos os direitos reservados.</p>
          <p className="mt-2">Desenvolvido com carinho para alunas extraordinárias.</p>
        </div>
      </div>
    </footer>
  );
}
