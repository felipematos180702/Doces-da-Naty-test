import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Play, GraduationCap, Store, Users, Award } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 relative z-10 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center w-full"
        >
          <div className="inline-flex items-center gap-2 bg-brand-primary/10 text-brand-primary px-4 py-2 rounded-full font-semibold text-xs sm:text-sm mb-6 border border-brand-primary/20">
            <Sparkles size={14} className="sm:w-4 sm:h-4" />
            <span>A confeitaria pode ser sua principal fonte de renda</span>
          </div>
          
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6 text-brand-secondary max-w-3xl mx-auto">
            Eu comecei vendendo brigadeiros para fazer renda extra em 2016 e hoje tenho a <span className="text-brand-primary italic">Doces da Naty</span>
          </h1>

          {/* Featured Video (VSL) Area - Centered and beautifully framed below Title */}
          <div className="my-6 md:my-8 w-full max-w-xl md:max-w-2xl relative mx-auto">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 md:border-8 border-white bg-neutral-900 aspect-video flex flex-col items-center justify-center text-center p-6">
              {/* Cinematic background gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-neutral-950 via-neutral-900 to-neutral-800" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.18)_0%,transparent_70%)]" />

              {/* Video placeholder content */}
              <div className="relative z-10 flex flex-col items-center justify-center gap-3 sm:gap-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-brand-primary text-white flex items-center justify-center shadow-xl shadow-brand-primary/30">
                  <Play size={32} className="fill-white translate-x-0.5" />
                </div>
                <div>
                  <span className="inline-block uppercase tracking-wider text-xs sm:text-sm font-semibold text-rose-300 mb-1">
                    Espaço para o Vídeo (VSL)
                  </span>
                  <p className="text-white/80 text-xs sm:text-sm font-normal max-w-md">
                    O player de vídeo oficial será inserido aqui
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 w-32 h-32 bg-brand-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-6 -left-6 sm:-bottom-10 sm:-left-10 w-32 h-32 bg-brand-secondary/10 rounded-full blur-3xl" />
          </div>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-10 max-w-2xl leading-relaxed mx-auto">
            Aprenda todo o método que eu uso para vender doces todos os dias na minha loja e pelo delivery.
          </p>
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 w-full sm:w-auto">
            <a 
              href="#cursos" 
              className="flex items-center justify-center gap-2 bg-brand-secondary text-white px-8 py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-brand-secondary/90 transition-all shadow-xl w-full sm:w-auto"
            >
              Veja todos os meus cursos
              <ArrowRight size={20} />
            </a>
          </div>

          {/* Faixa de Prova de Autoridade (Métricas Rápidas) */}
          <div className="mt-12 md:mt-16 pt-8 md:pt-10 border-t border-brand-primary/10 w-full max-w-4xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
              <div className="bg-white/80 backdrop-blur-sm p-4 sm:p-5 rounded-2xl border border-brand-primary/10 shadow-sm flex flex-col items-center text-center hover:border-brand-primary/30 transition-all hover:-translate-y-0.5">
                <div className="w-10 h-10 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center mb-2.5">
                  <GraduationCap size={20} />
                </div>
                <span className="font-['Times_New_Roman',serif] font-bold text-xl sm:text-2xl text-brand-secondary leading-tight">
                  + de 5 mil
                </span>
                <span className="text-xs sm:text-sm font-medium text-gray-600 mt-0.5 leading-snug">
                  Alunas online pelo mundo
                </span>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-4 sm:p-5 rounded-2xl border border-brand-primary/10 shadow-sm flex flex-col items-center text-center hover:border-brand-primary/30 transition-all hover:-translate-y-0.5">
                <div className="w-10 h-10 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center mb-2.5">
                  <Store size={20} />
                </div>
                <span className="font-['Times_New_Roman',serif] font-bold text-xl sm:text-2xl text-brand-secondary leading-tight">
                  Desde 2021
                </span>
                <span className="text-xs sm:text-sm font-medium text-gray-600 mt-0.5 leading-snug">
                  Loja aberta e delivery ativo
                </span>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-4 sm:p-5 rounded-2xl border border-brand-primary/10 shadow-sm flex flex-col items-center text-center hover:border-brand-primary/30 transition-all hover:-translate-y-0.5">
                <div className="w-10 h-10 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center mb-2.5">
                  <Award size={20} />
                </div>
                <span className="font-['Times_New_Roman',serif] font-bold text-xl sm:text-2xl text-brand-secondary leading-tight">
                  Dezenas
                </span>
                <span className="text-xs sm:text-sm font-medium text-gray-600 mt-0.5 leading-snug">
                  De alunas no presencial
                </span>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-4 sm:p-5 rounded-2xl border border-brand-primary/10 shadow-sm flex flex-col items-center text-center hover:border-brand-primary/30 transition-all hover:-translate-y-0.5">
                <div className="w-10 h-10 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center mb-2.5">
                  <Users size={20} />
                </div>
                <span className="font-['Times_New_Roman',serif] font-bold text-xl sm:text-2xl text-brand-secondary leading-tight">
                  Milhares
                </span>
                <span className="text-xs sm:text-sm font-medium text-gray-600 mt-0.5 leading-snug">
                  De seguidores
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

