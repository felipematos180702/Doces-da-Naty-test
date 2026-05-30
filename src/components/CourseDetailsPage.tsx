import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  Check, 
  ShoppingCart, 
  Sparkles, 
  MessageSquare, 
  Award, 
  ShieldCheck, 
  Clock, 
  Users, 
  Star,
  ChevronDown,
  ChevronUp,
  Flame
} from 'lucide-react';
import { Course } from '../types';
import { COURSES } from '../data';

interface CourseDetailsPageProps {
  courseId: string;
  onBack: () => void;
}

export default function CourseDetailsPage({ courseId, onBack }: CourseDetailsPageProps) {
  const course = COURSES.find(c => c.id === courseId);
  
  if (!course) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-brand-cream p-4">
        <p className="text-xl font-bold text-brand-secondary mb-4">Curso não encontrado.</p>
        <button 
          onClick={onBack}
          className="bg-brand-primary text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2"
        >
          <ArrowLeft size={18} />
          Voltar para os Cursos
        </button>
      </div>
    );
  }

  const [activeImage, setActiveImage] = useState(course.image);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedTestimonial, setSelectedTestimonial] = useState<string | null>(null);

  const isDocesDeVitrine = course.id === 'course-19';
  const isBolosDoZero = course.id === 'course-21';
  const isPascoa = course.id === 'course-17';

  const vitrineTestimonials = [
    'https://lh3.googleusercontent.com/d/1DizZNCuRB83GO_4D1C5asch8799BNB9_',
    'https://lh3.googleusercontent.com/d/1_Xp-jIS43BcwvPxIRXFPm3-ZGdnDMjGe',
    'https://lh3.googleusercontent.com/d/1KDExm8DjN5yFzojOfhhVBYFRMWBPbWyb',
    'https://lh3.googleusercontent.com/d/13Cb104qU-pyOAPk77n4kQi9dg7cQ-E8p',
    'https://lh3.googleusercontent.com/d/1-mKiG-OlxGilhfJwdDPrE-6Fp2qFtjyt',
    'https://lh3.googleusercontent.com/d/1HXbs6-9BNBfU8axliHniel5AmN4B79AO',
    'https://lh3.googleusercontent.com/d/1sPg3QrdH0mWVAWfEX5Y20-8dpgMG-k30',
    'https://lh3.googleusercontent.com/d/1L6JCm4dnIoX7KoUZCUMRSz4NuFNIDegk'
  ];

  const bolosDoZeroTestimonials = [
    'https://lh3.googleusercontent.com/d/1cLEFUTMitJSAP7WyiwEb8Y-vv0SZMgp0',
    'https://lh3.googleusercontent.com/d/1d6y1I9uUp0T3mh2klCXJGklX2W-6IF7m',
    'https://lh3.googleusercontent.com/d/1l-Zu0IOb27HNo7dk52CZcjTLpuSkkgfH',
    'https://lh3.googleusercontent.com/d/1IYSRnyh8jZK4mIBBA6MRs0MoL_xfUpfe',
    'https://lh3.googleusercontent.com/d/1uIKNnKEKQVPW7qUwgEYoVTngUzfl7jZG',
    'https://lh3.googleusercontent.com/d/1mF4t8JYZ5Eb-z11VbwI6eSrQwWF6Kr_P',
    'https://lh3.googleusercontent.com/d/1ek6woRzWhVkc-7CIeE3b51OIknouv3WV'
  ];

  const pascoaTestimonials = [
    'https://lh3.googleusercontent.com/d/1pdpcuGoC11VV9EyJkwH-yWKel4S9bUt-',
    'https://lh3.googleusercontent.com/d/1XVeAtfesXlgyivud1nCsJpaKA_M2NQIH',
    'https://lh3.googleusercontent.com/d/1YD8YXR1LhwLltZWeoZ-7l9ydThU6f1dd',
    'https://lh3.googleusercontent.com/d/13nyqfBnQ0UwosARYbd5nUia13aX1nQjW'
  ];

  const testimonials = isDocesDeVitrine 
    ? vitrineTestimonials 
    : (isBolosDoZero 
      ? bolosDoZeroTestimonials 
      : (isPascoa ? pascoaTestimonials : []));

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  }, [courseId]);

  const imageGallery = Array.from(new Set([course.image, ...(course.galeria || [])]));

  const isTwelveMonths = course.category === 'Cursos Completos';
  const faqItems = [
    {
      q: `Qual é o prazo de acesso ao ${course.title}?`,
      a: isTwelveMonths 
        ? "Você terá acesso completo a todas as vídeo-aulas gravadas, apostilas de apoio e futuras atualizações por um período de 12 meses (1 ano)."
        : "Você terá acesso completo a todas as vídeo-aulas gravadas, apostilas de apoio e futuras atualizações por um período de 6 meses."
    },
    {
      q: "Recebo certificado de conclusão?",
      a: "Com certeza. Assim que finalizar todos os módulos, sua área de aluna gera um lindo certificado profissional personalizado, pronto de forma automática."
    },
    {
      q: "Como funciona o suporte para tirar dúvidas?",
      a: "Você terá suporte direto VIP com a Natascha e equipe através do WhatsApp exclusivo de alunas e do portal de membros. Nunca estará sozinha."
    },
    {
      q: "Preciso ter batedeira ou forno industrial?",
      a: "De forma alguma! A Naty ensina você a produzir resultados profissionais maravilhosos utilizando equipamentos simples e domésticos que você já tem na sua cozinha."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="min-h-screen bg-brand-cream text-brand-secondary pt-24 pb-20"
    >
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Navigation Breadcrumb & Back */}
        <div className="mb-8">
          <button
            onClick={onBack}
            className="group inline-flex items-center gap-2 text-brand-primary hover:text-brand-secondary font-bold text-base transition-colors py-2 cursor-pointer"
          >
            <span className="w-9 h-9 rounded-full bg-brand-primary/10 text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all flex items-center justify-center">
              <ArrowLeft size={18} className="group-hover:-translate-x-0.5 transition-transform" />
            </span>
            Voltar para a vitrine de cursos
          </button>
        </div>

        {/* Main Product Section Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: Stunning Visuals & Interactive Gallery */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Displaying Large Active Image */}
            <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-2xl bg-[#FFFDF9] p-2 group select-none flex items-center justify-center">
              <img
                src={activeImage}
                alt={course.title}
                className="w-full h-full object-cover object-center rounded-2xl transition-all duration-500 hover:scale-102 relative z-10"
              />
              <div className="absolute top-4 left-4 z-20">
                <span className="bg-brand-primary text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-md">
                  {course.category}
                </span>
              </div>
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-6 flex items-end justify-between z-25">
                <span className="text-white/90 text-sm font-medium flex items-center gap-1.5 backdrop-blur-sm bg-black/20 px-3 py-1 rounded-full">
                  <Star size={16} className="fill-amber-400 text-amber-400" />
                  Visualização Exclusiva
                </span>
              </div>
            </div>

            {/* Interactive Thumbnail strip */}
            {imageGallery.length > 1 && (
              <div className="space-y-3">
                <p className="text-xs font-bold text-brand-primary uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles size={14} className="fill-brand-primary/20" />
                  Galeria de Inspiração dos Doces (Toque para ver em detalhe)
                </p>
                <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-brand-primary">
                  {imageGallery.map((imgUrl, idx) => {
                    const isSelected = imgUrl === activeImage;
                    return (
                      <button
                        key={idx}
                        onClick={() => setActiveImage(imgUrl)}
                        className={`relative w-24 h-18 md:w-28 md:h-20 rounded-2xl overflow-hidden cursor-pointer flex-shrink-0 transition-all border-3 ${
                          isSelected 
                            ? 'border-brand-primary scale-95 shadow-lg shadow-brand-primary/25' 
                            : 'border-transparent opacity-75 hover:opacity-100 hover:scale-105'
                        }`}
                      >
                        <img 
                          src={imgUrl} 
                          alt={`Minha foto do curso ${idx + 1}`} 
                          className="w-full h-full object-cover"
                        />
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Core Course Manifesto details */}
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-brand-secondary/5 border border-brand-primary/5 space-y-6">
              {(() => {
                const paragraphs = course.description ? course.description.split('\n\n') : [];
                
                // If we have a multi-paragraph descriptive manifesto (like course-1 or course-20)
                if (paragraphs.length >= 2) {
                  const headline = paragraphs[0]; // First paragraph is our striking copywriting headline
                  const bodyParagraphs = paragraphs.slice(1);
                  
                  // Separate the "Para quem é" line if it exists
                  const whoIsItForIndex = bodyParagraphs.findIndex(p => p.toLowerCase().startsWith('para quem é:'));
                  let whoIsItFor = '';
                  let visibleParagraphs = [...bodyParagraphs];
                  
                  if (whoIsItForIndex !== -1) {
                    whoIsItFor = bodyParagraphs[whoIsItForIndex];
                    visibleParagraphs.splice(whoIsItForIndex, 1);
                  }

                  return (
                    <>
                      <h2 className="font-serif text-2xl md:text-3xl font-bold text-brand-secondary leading-snug tracking-tight">
                        {headline}
                      </h2>
                      
                      <div className="text-gray-600 space-y-5 text-base md:text-lg leading-relaxed">
                        {visibleParagraphs.map((para, idx) => (
                          <p key={idx}>{para}</p>
                        ))}
                      </div>

                      {whoIsItFor && (
                        <div className="bg-brand-primary/5 border border-brand-primary/10 rounded-2xl p-5 mt-6">
                          <p className="text-brand-secondary text-base text-gray-700 md:text-lg leading-relaxed">
                            <span className="font-serif font-bold text-brand-primary block text-lg md:text-xl mb-1.5">
                              🎯 Para quem é este curso?
                            </span>
                            {whoIsItFor.replace(/^para quem é:\s*/i, '')}
                          </p>
                        </div>
                      )}
                    </>
                  );
                }

                // Default layout for other courses with simple short descriptions
                return (
                  <>
                    <h2 className="font-serif text-2xl md:text-3xl font-bold text-brand-secondary">
                      O que torna esta especialização única?
                    </h2>
                    
                    <div className="text-gray-600 space-y-4 text-base md:text-lg leading-relaxed">
                      {course.description && (
                        <p className="font-medium text-brand-primary/95 bg-brand-primary/5 p-4 rounded-2xl border-l-4 border-brand-primary">
                          {course.description}
                        </p>
                      )}
                      <p>
                        Diferente de receitas frias da internet, este curso foi criado pela <span className="font-semibold text-brand-secondary">Natascha (Naty)</span> com foco na sua realidade doméstica. Aqui, você aprende a química por trás de cada ingrediente para nunca mais desperdiçar massa ou recheio.
                      </p>
                      <p>
                        Cada aula foi gravada em alta definição com linguagem direta, descomplicada e passo a passo. Você aprenderá como replicar técnicas milenares da confeitaria com utensílios comuns da sua cozinha e ingredientes fáceis de encontrar em supermercados locais.
                      </p>
                    </div>
                  </>
                );
              })()}

              {/* Bento Trust Indicators */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                <div className="bg-brand-cream/60 rounded-2xl p-4 text-center border border-brand-primary/5">
                  <Clock size={20} className="mx-auto text-brand-primary mb-2" />
                  <p className="text-xs font-bold uppercase text-gray-500">Aulas Rápida</p>
                  <p className="text-sm font-bold text-brand-secondary">Assista quando quiser</p>
                </div>
                <div className="bg-brand-cream/60 rounded-2xl p-4 text-center border border-brand-primary/5">
                  <Award size={20} className="mx-auto text-brand-primary mb-2" />
                  <p className="text-xs font-bold uppercase text-gray-500">Nacional</p>
                  <p className="text-sm font-bold text-brand-secondary">Certificado Oficial</p>
                </div>
                <div className="bg-brand-cream/60 rounded-2xl p-4 text-center border border-brand-primary/5">
                  <Users size={20} className="mx-auto text-brand-primary mb-2" />
                  <p className="text-xs font-bold uppercase text-gray-500">Suporte</p>
                  <p className="text-sm font-bold text-brand-secondary">Direto no WhatsApp</p>
                </div>
                <div className="bg-brand-cream/60 rounded-2xl p-4 text-center border border-brand-primary/5">
                  <ShieldCheck size={20} className="mx-auto text-brand-primary mb-2" />
                  <p className="text-xs font-bold uppercase text-gray-500">Garantia</p>
                  <p className="text-sm font-bold text-brand-secondary">7 Dias Incondicional</p>
                </div>
              </div>
            </div>

            {/* Extensive Syllabus List */}
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-brand-secondary/5 border border-brand-primary/5">
              <h3 className="font-serif text-2xl font-bold text-brand-secondary mb-6 flex items-center gap-2">
                <Sparkles className="text-brand-primary fill-brand-primary/10 animate-pulse" size={24} />
                Conteúdo Programático Detalhado
              </h3>
              
              <div className="space-y-4">
                {course.detalhesLongos.map((detail, index) => (
                  <div 
                    key={index}
                    className="flex gap-4 p-4 rounded-2xl hover:bg-brand-accent/30 transition-colors border border-transparent hover:border-brand-primary/10"
                  >
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-primary/15 text-brand-primary flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </span>
                    <div>
                      <p className="font-semibold text-brand-secondary text-base md:text-lg mb-1">
                        Módulo Especial: {detail.split('(')[0].trim()}
                      </p>
                      <p className="text-sm text-gray-500">
                        {detail.includes('(') ? `Aprofundamento em ${detail.split('(')[1].replace(')', '')}` : "Passo a passo completo em vídeo-aulas práticas de alta absorção."}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Depoimentos / Testimonials Section (Exclusiva para Doces de Vitrine, Bolos do Zero e Páscoa Lucrativa) */}
            {(isDocesDeVitrine || isBolosDoZero || isPascoa) && (
              <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-brand-secondary/5 border-2 border-brand-primary/15 space-y-6">
                <div>
                  <span className="inline-flex items-center gap-1.5 bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                    <Sparkles size={12} className="fill-brand-primary/10" />
                    Resultados de Alunas Reais
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-brand-secondary leading-tight">
                    O que as nossas alunas estão conquistando?
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base mt-2 leading-relaxed">
                    {isDocesDeVitrine ? (
                      <>
                        Mais do que apenas receitas passo a passo, o método <strong>Doces de Vitrine</strong> entrega um plano prático para faturar alto e dominar o mercado local. Toque nas mensagens abaixo para ler os depoimentos reais enviados por WhatsApp e Instagram:
                      </>
                    ) : isBolosDoZero ? (
                      <>
                        Veja com seus próprios olhos os resultados incríveis das alunas do método <strong>Bolos do Zero</strong>. Elas perderam o medo, aprenderam a estruturação perfeita e hoje faturam muito vendendo bolos inteiros e fatias:
                      </>
                    ) : (
                      <>
                        Veja os resultados brilhantes das alunas do método <strong>Páscoa Lucrativa</strong>. Elas dominaram a temperagem e montagem perfeitas de ovos de colher e bombons de sucesso, conquistando independência financeira na época mais lucrativa do ano:
                      </>
                    )}
                  </p>
                </div>

                {/* Grid of Testimonials Images */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
                  {testimonials.map((imgUrl, idx) => (
                    <div 
                      key={idx} 
                      onClick={() => setSelectedTestimonial(imgUrl)}
                      className="group relative aspect-[3/4] cursor-pointer rounded-2xl overflow-hidden border border-brand-primary/10 bg-brand-cream/20 shadow-sm hover:shadow-md hover:border-brand-primary/35 transition-all duration-300 transform hover:-translate-y-1 p-1 select-none flex items-center justify-center"
                    >
                      <img 
                        src={imgUrl} 
                        alt={`Depoimento das alunas de ${course.title} ${idx + 1}`} 
                        className="w-full h-full object-cover rounded-xl group-hover:scale-102 transition-transform duration-300"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                      {/* Interactive Hover Overlay */}
                      <div className="absolute inset-0 bg-brand-secondary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-2 rounded-xl">
                        <span className="bg-white/95 text-brand-secondary font-black text-xs py-1.5 px-3 rounded-full shadow-lg scale-90 group-hover:scale-100 transition-transform duration-300 flex items-center gap-1">
                          <Sparkles size={11} className="text-brand-primary fill-brand-primary/10 animate-pulse" />
                          Ampliar Foto
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Dynamic Lightbox Modal for Reading Screenshot Contents (Crucial for Conversion/CRO) */}
                {selectedTestimonial && (
                  <div 
                    className="fixed inset-0 bg-brand-secondary/90 backdrop-blur-md z-50 flex items-center justify-center p-4 transition-all duration-300"
                    onClick={() => setSelectedTestimonial(null)}
                  >
                    <div 
                      className="relative max-w-lg w-full bg-white rounded-3xl p-3 md:p-4 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col items-center animate-in fade-in zoom-in-95 duration-200"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button 
                        onClick={() => setSelectedTestimonial(null)}
                        className="absolute top-4 right-4 bg-brand-cream hover:bg-brand-primary hover:text-white text-brand-secondary w-9 h-9 rounded-full flex items-center justify-center shadow-md transition-colors cursor-pointer font-bold text-lg z-10"
                      >
                        &times;
                      </button>
                      <div className="w-full overflow-y-auto pr-1 max-h-[80vh] flex justify-center">
                        <img 
                          src={selectedTestimonial} 
                          alt="Depoimento Ampliado" 
                          className="max-w-full rounded-2xl object-contain shadow-sm border border-brand-primary/5"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <p className="text-center font-bold text-xs text-brand-primary uppercase tracking-widest mt-3.5 mb-1 flex items-center gap-1">
                        <Sparkles size={12} className="fill-brand-primary/10" />
                        História Real de Sucesso • {course.title}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* FAQ Accordion Section */}
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-brand-secondary/5 border border-brand-primary/5">
              <h3 className="font-serif text-2xl font-bold text-brand-secondary mb-6">
                Perguntas Frequentes
              </h3>
              <div className="space-y-3 font-sans">
                {faqItems.map((item, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div 
                      key={index} 
                      className="border border-brand-primary/10 rounded-2xl overflow-hidden"
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full flex items-center justify-between p-4 bg-brand-cream/30 hover:bg-brand-cream transition-colors text-left font-bold text-sm md:text-base text-brand-secondary select-none cursor-pointer"
                      >
                        <span>{item.q}</span>
                        {isOpen ? <ChevronUp size={18} className="text-brand-primary" /> : <ChevronDown size={18} className="text-brand-primary" />}
                      </button>
                      
                      {isOpen && (
                        <div className="p-4 bg-white border-t border-brand-primary/5 text-gray-600 text-sm md:text-base leading-relaxed">
                          {item.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* RIGHT SIDEBAR: High-Converting Checkout Card & Fast actions (CRO) */}
          <div className="lg:col-span-12 xl:col-span-5 lg:sticky lg:top-28 space-y-6">
            
            {/* Dynamic Sticky Order Box */}
            <div className="bg-[#FFFDF9] rounded-3xl p-6 md:p-8 shadow-2xl border-2 border-brand-primary/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-full translate-x-12 -translate-y-12 blur-2xl pointer-events-none" />
              
              <div className="inline-flex items-center gap-1.5 bg-red-500/10 text-red-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 animate-bounce">
                <Flame size={14} className="fill-red-600/10" />
                <span>ÚLTIMAS VAGAS DISPONÍVEIS</span>
              </div>

              <span className="block text-sm text-gray-400 font-semibold mb-1">Você terá acesso imediato ao:</span>
              <h1 className="font-serif text-2xl md:text-3xl font-bold text-brand-secondary leading-snug mb-3">
                {course.title}
              </h1>

              <div className="flex items-center gap-2 mb-6">
                <div className="flex text-amber-400">
                  <Star size={16} className="fill-current" />
                  <Star size={16} className="fill-current" />
                  <Star size={16} className="fill-current" />
                  <Star size={16} className="fill-current" />
                  <Star size={16} className="fill-current" />
                </div>
                <span className="text-xs text-gray-500 font-bold">(4.9/5 estrelas de 340+ alunas)</span>
              </div>

              {/* Promotional access detail instead of price */}
              <div className="bg-brand-accent/50 rounded-2xl p-5 border border-brand-primary/10 mb-6">
                <p className="text-sm text-brand-secondary font-bold flex items-center gap-2">
                  <Sparkles size={16} className="text-brand-primary fill-brand-primary/10" />
                  Inscrições Abertas com Vagas Limitadas
                </p>
                <p className="text-xs text-emerald-600 font-bold mt-2 flex items-center gap-1">
                  <Check size={14} className="stroke-[3]" />
                  {isTwelveMonths 
                    ? "Acesso completo por 12 meses, Sem Mensalidades!" 
                    : "Acesso completo por 6 meses, Sem Mensalidades!"}
                </p>
              </div>

              {/* Checklist details inside order block */}
              <div className="space-y-3.5 mb-8">
                <div className="flex gap-3 text-sm">
                  <Check size={18} className="text-emerald-500 flex-shrink-0" />
                  <span>Apostilas de Apoio Práticas em PDF</span>
                </div>
                <div className="flex gap-3 text-sm">
                  <Check size={18} className="text-emerald-500 flex-shrink-0" />
                  <span>Acesso VIP ao WhatsApp de Dúvidas da Naty</span>
                </div>
                <div className="flex gap-3 text-sm">
                  <Check size={18} className="text-emerald-500 flex-shrink-0" />
                  <span>Atualizações de recheios e massas incluídas</span>
                </div>
              </div>

              {/* Main checkout buttons */}
              <div className="space-y-3">
                <a
                  href={course.linkCheckout}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="flex items-center justify-center gap-3 bg-brand-primary text-white w-full py-4.5 rounded-2xl font-black text-base hover:bg-brand-primary/95 hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-brand-primary/20 cursor-pointer"
                >
                  <ShoppingCart size={20} className="animate-pulse" />
                  GARANTIR MINHA VAGA AGORA
                </a>

                <a
                  href="https://wa.me/553193476920?text=Tenho%20duvidas%20sobre%20os%20cursos%20de%20confeitaria"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="flex items-center justify-center gap-2 bg-emerald-500 text-white w-full py-3.5 rounded-2xl font-bold text-sm hover:bg-emerald-600 transition-colors cursor-pointer"
                >
                  <MessageSquare size={18} />
                  Falar Conosco no WhatsApp
                </a>
              </div>

              {/* Super Protection reassurance block */}
              <div className="mt-6 pt-6 border-t border-brand-primary/10 flex items-center gap-4 text-left">
                <ShieldCheck className="text-emerald-500 w-12 h-12 flex-shrink-0" />
                <div>
                  <p className="text-xs font-bold uppercase text-brand-secondary">SATISFAÇÃO OU SEU DINHEIRO DE VOLTA</p>
                  <p className="text-xs text-gray-500 mt-0.5">Se em 7 dias você achar que o método não é para você, devolvemos 100% do seu dinheiro sem perguntas.</p>
                </div>
              </div>

            </div>

            {/* Testimonial preview matching this special view */}
            {course.id !== 'course-19' && course.id !== 'course-21' && course.id !== 'course-17' && (
              <div className="bg-brand-primary/5 rounded-3xl p-6 border border-brand-primary/10">
                <div className="flex items-center gap-3 mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop" 
                    alt="Aluna Satisfeita"
                    className="w-11 h-11 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold text-brand-secondary text-sm">Clara Marinho</p>
                    <p className="text-xs text-brand-primary font-bold uppercase">Aluna Oficial</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 italic leading-relaxed">
                  "O suporte da Naty é espetacular. Eu tinha medo de errar o ponto dos recheios, mas com a ajuda dela e a apostila, agora meus doces esgotam todos os finais de semana!"
                </p>
              </div>
            )}

          </div>

        </div>

      </div>
    </motion.div>
  );
}
