import { motion } from 'motion/react';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-28 pb-12 md:pt-36 md:pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-brand-primary/10 text-brand-primary px-4 py-2 rounded-full font-semibold text-xs sm:text-sm mb-6 border border-brand-primary/20">
              <Sparkles size={14} className="sm:w-4 sm:h-4" />
              <span>Transforme sua paixão em lucro</span>
            </div>
            
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6 text-brand-secondary">
              Domine a <span className="text-brand-primary italic">Confeitaria</span> Profissional com a Naty
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-10 max-w-lg leading-relaxed">
              Descubra os segredos por trás dos doces que encantam clientes e conquiste sua liberdade financeira com nossos 21 cursos exclusivos.
            </p>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <a 
                href="#cursos" 
                className="flex items-center justify-center gap-2 bg-brand-secondary text-white px-8 py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-brand-secondary/90 transition-all shadow-xl w-full sm:w-auto"
              >
                Ver Todos os Cursos
                <ArrowRight size={20} />
              </a>
              <div className="flex items-center gap-4 px-1 sm:px-4 py-2">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <img 
                      key={i}
                      src={`https://i.pravatar.cc/100?img=${i + 10}`} 
                      alt="Aluna"
                      className="w-10 h-10 rounded-full border-2 border-brand-cream"
                    />
                  ))}
                </div>
                <div className="text-sm">
                  <p className="font-bold text-brand-secondary">+5.000 Alunos</p>
                  <p className="text-gray-500 text-xs sm:text-sm">Satisfeitos em todo o Brasil</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 border-8 border-white bg-brand-cream/40">
              <img 
                src="https://lh3.googleusercontent.com/d/1nlJSCbbRBouRcPCJ9AN4feGMljKcx7c_" 
                alt="Naty na Cozinha"
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decoration */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-secondary/10 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
