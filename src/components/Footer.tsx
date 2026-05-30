import { motion } from 'motion/react';
import { Instagram, Send, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-secondary text-brand-cream py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-serif text-3xl font-bold mb-6">
              Doces da <span className="text-brand-primary">Naty</span>
            </h3>
            <p className="text-brand-cream/60 max-w-md mb-8 leading-relaxed">
              Transformando vidas através da confeitaria profissional desde 2017. 
              Nosso compromisso é com o seu sucesso e independência financeira.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/cursosdocesdanaty" className="w-12 h-12 rounded-full border border-brand-cream/20 flex items-center justify-center hover:bg-brand-primary hover:border-brand-primary transition-all">
                <Instagram size={20} />
              </a>
              <a href="https://wa.me/553193476920" className="w-12 h-12 rounded-full border border-brand-cream/20 flex items-center justify-center hover:bg-brand-primary hover:border-brand-primary transition-all">
                <Send size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Navegação</h4>
            <ul className="space-y-4 text-brand-cream/60">
              <li><a href="#cursos" className="hover:text-brand-primary transition-colors">Nossos Cursos</a></li>
              <li><a href="#sobre" className="hover:text-brand-primary transition-colors">Sobre a Naty</a></li>
              <li><a href="#depoimentos" className="hover:text-brand-primary transition-colors">Depoimentos</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Política de Privacidade</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Contato</h4>
            <ul className="space-y-4 text-brand-cream/60">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand-primary" />
                <span>contato@docesdanaty.com</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-brand-primary" />
                <span>Belo Horizonte, MG</span>
              </li>
              <li className="flex items-center gap-3">
                <Instagram size={18} className="text-brand-primary" />
                <span>@cursosdocesdanaty</span>
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
