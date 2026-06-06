import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Testimonials() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const vitrinePhotos = [
    { url: 'https://lh3.googleusercontent.com/d/1DizZNCuRB83GO_4D1C5asch8799BNB9_', description: 'Faturamento de aluna com Doces de Vitrine' },
    { url: 'https://lh3.googleusercontent.com/d/1_Xp-jIS43BcwvPxIRXFPm3-ZGdnDMjGe', description: 'Encomendas e vendas do dia de Doces de Vitrine' },
    { url: 'https://lh3.googleusercontent.com/d/1KDExm8DjN5yFzojOfhhVBYFRMWBPbWyb', description: 'Aluna elogiando as técnicas do curso de vitrine' },
    { url: 'https://lh3.googleusercontent.com/d/13Cb104qU-pyOAPk77n4kQi9dg7cQ-E8p', description: 'Resultado irresistível com doces montados na vitrine' },
    { url: 'https://lh3.googleusercontent.com/d/1-mKiG-OlxGilhfJwdDPrE-6Fp2qFtjyt', description: 'Feedback real de cliente enviado por WhatsApp' },
    { url: 'https://lh3.googleusercontent.com/d/1HXbs6-9BNBfU8axliHniel5AmN4B79AO', description: 'Comentário sobre facilidade das técnicas de vitrine' },
    { url: 'https://lh3.googleusercontent.com/d/1sPg3QrdH0mWVAWfEX5Y20-8dpgMG-k30', description: 'Mais faturamento e vitrines lotadas com as técnicas' },
    { url: 'https://lh3.googleusercontent.com/d/1L6JCm4dnIoX7KoUZCUMRSz4NuFNIDegk', description: 'Ampliando vendas e delivery de Doces de Vitrine' }
  ];

  const bolosPhotos = [
    { url: 'https://lh3.googleusercontent.com/d/1cLEFUTMitJSAP7WyiwEb8Y-vv0SZMgp0', description: 'Massa e estruturação perfeita com Bolos do Zero' },
    { url: 'https://lh3.googleusercontent.com/d/1d6y1I9uUp0T3mh2klCXJGklX2W-6IF7m', description: 'Estoque rotativo vendido com as fatias diárias' },
    { url: 'https://lh3.googleusercontent.com/d/1l-Zu0IOb27HNo7dk52CZcjTLpuSkkgfH', description: 'Aluna que perdeu o medo de fazer fatias decoradas' },
    { url: 'https://lh3.googleusercontent.com/d/1IYSRnyh8jZK4mIBBA6MRs0MoL_xfUpfe', description: 'Elogio de clientes sobre o sabor do bolo' },
    { url: 'https://lh3.googleusercontent.com/d/1uIKNnKEKQVPW7qUwgEYoVTngUzfl7jZG', description: 'Ampliando o faturamento diário com a degustação paga' },
    { url: 'https://lh3.googleusercontent.com/d/1mF4t8JYZ5Eb-z11VbwI6eSrQwWF6Kr_P', description: 'Segurança absoluta na massa amanteigada para festas' },
    { url: 'https://lh3.googleusercontent.com/d/1ek6woRzWhVkc-7CIeE3b51OIknouv3WV', description: 'Bolo alto estruturado de pasta e chantininho' }
  ];

  const pascoaPhotos = [
    { url: 'https://lh3.googleusercontent.com/d/1pdpcuGoC11VV9EyJkwH-yWKel4S9bUt-', description: 'Temperagem perfeita de Páscoa sem sofrimento' },
    { url: 'https://lh3.googleusercontent.com/d/1XVeAtfesXlgyivud1nCsJpaKA_M2NQIH', description: 'Produção em massa de ovos de colher estruturados' },
    { url: 'https://lh3.googleusercontent.com/d/1YD8YXR1LhwLltZWeoZ-7l9ydThU6f1dd', description: 'Independência financeira na época de Páscoa' },
    { url: 'https://lh3.googleusercontent.com/d/13nyqfBnQ0UwosARYbd5nUia13aX1nQjW', description: 'Lucro multiplicado trabalhando de casa com chocolate' }
  ];

  const allPhotos = [...vitrinePhotos, ...bolosPhotos, ...pascoaPhotos];

  return (
    <section id="depoimentos" className="py-24 bg-brand-cream/15 relative overflow-hidden">
      {/* Decorative background vectors */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-secondary/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          
          <h2 className="font-serif text-3xl md:text-5xl font-black text-brand-secondary mb-4 tracking-tight leading-tight">
            O que minhas alunas dizem sobre o que aprende comigo.
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Elas aprendem além das receitas, conquistam clientes fiéis e faturam mais.
          </p>
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {allPhotos.map((photo, index) => (
              <motion.div
                layout
                key={photo.url}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25 }}
                viewport={{ once: true }}
                onClick={() => setSelectedImage(photo.url)}
                className="group relative aspect-[3/4] cursor-pointer rounded-2xl overflow-hidden bg-white border-2 border-brand-primary/5 shadow-md hover:shadow-xl hover:border-brand-primary/30 transition-all duration-300 p-1.5 flex items-center justify-center select-none"
              >
                <img 
                  src={photo.url} 
                  alt={photo.description}
                  className="w-full h-full object-cover rounded-xl transition-all duration-300 group-hover:scale-[1.01]"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* Overlying UX Layer */}
                <div className="absolute inset-0 bg-brand-secondary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 rounded-xl">
                  <span className="bg-white text-brand-secondary font-black text-xs py-2 px-4 rounded-full shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-1">
                    <Sparkles size={11} className="text-brand-primary fill-brand-primary/10" />
                    Ler Conversa
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Conversion Trust Badge */}
        <div className="mt-16 flex flex-col items-center justify-center text-center">
          <div className="flex items-center gap-1.5 text-amber-500 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="fill-current" size={18} />
            ))}
          </div>
          <p className="text-brand-secondary font-bold text-sm tracking-wide flex items-center gap-1.5 justify-center">
            <CheckCircle2 size={16} className="text-emerald-500 fill-emerald-50" />
            100% de Histórias Reais Verificadas
          </p>
        </div>

        {/* Fullscale Photo Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-brand-secondary/95 backdrop-blur-md z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div 
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="relative max-w-lg w-full bg-white rounded-3xl p-4 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col items-center"
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 bg-brand-cream hover:bg-brand-primary hover:text-white text-brand-secondary w-9 h-9 rounded-full flex items-center justify-center shadow-md transition-all duration-200 cursor-pointer text-lg font-black z-10 hover:rotate-90"
                >
                  &times;
                </button>
                <div className="w-full overflow-y-auto pr-1 max-h-[80vh] flex justify-center">
                  <img 
                    src={selectedImage} 
                    alt="Depoimento Ampliado" 
                    className="max-w-full rounded-2xl object-contain shadow-sm border border-brand-primary/5"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="text-center mt-3.5 flex flex-col items-center gap-1">
                  <p className="font-extrabold text-xs text-brand-primary uppercase tracking-widest flex items-center gap-1">
                    <Star size={11} className="fill-brand-primary text-brand-primary" />
                    Resultado Oficial de Aluna • Método Confeitaria da Naty
                  </p>
                  <p className="text-xs text-gray-500 max-w-sm">
                    Printscreen recebido diretamente em nossos canais de relacionamento.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
