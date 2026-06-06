import { motion } from 'motion/react';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center flex flex-col items-center">
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

          {/* Featured Image - Centered and beautifully framed below Title */}
          <div className="my-6 md:my-8 w-full max-w-xl md:max-w-2xl relative mx-auto">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 md:border-8 border-white bg-brand-cream/40">
              <img 
                src="https://lh3.googleusercontent.com/d/1nlJSCbbRBouRcPCJ9AN4feGMljKcx7c_" 
                alt="Naty na Cozinha"
                className="w-full h-auto object-cover max-h-[350px] sm:max-h-[450px] md:max-h-[500px]"
                referrerPolicy="no-referrer"
              />
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
        </motion.div>
      </div>
    </section>
  );
}

