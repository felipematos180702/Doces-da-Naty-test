import { useState, useEffect, useRef } from 'react';
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
  Flame,
  ChevronLeft,
  ChevronRight
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

  const [activeImage, setActiveImage] = useState(() => course.image);
  const galleryRef = useRef<HTMLDivElement>(null);
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
    setActiveImage(course.image);
  }, [courseId, course.image]);

  const imageGallery = Array.from(new Set([course.image, ...(course.galeria || [])]));

  const isTwelveMonths = course.category === 'Cursos Completos';

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="min-h-screen bg-brand-cream text-brand-secondary pt-20 pb-12 md:pt-28 md:pb-20 w-full max-w-full overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Navigation Breadcrumb & Back */}
        <div className="mb-6 md:mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <button
            onClick={onBack}
            className="group inline-flex items-center gap-2 text-brand-primary hover:text-brand-secondary font-bold text-sm sm:text-base transition-colors py-2 cursor-pointer"
          >
            <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-brand-primary/10 text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all flex items-center justify-center">
              <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
            </span>
            Voltar para a vitrine de cursos
          </button>
        </div>

        {/* Dynamic High-Converting Header */}
        <div className="mb-8 md:mb-10">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-secondary leading-tight">
            {course.title}
          </h1>
          <div className="flex items-center gap-2 mt-3">
            <span className="bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider">
              {course.category}
            </span>
          </div>
        </div>

        {/* Main Product Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start w-full max-w-full">
          
          {/* LEFT: Stunning Visuals & Interactive Gallery */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Displaying Large Active Image */}
            <div className="relative w-full aspect-[4/3] md:aspect-square rounded-3xl overflow-hidden shadow-2xl bg-[#FFFDF9] p-2 group select-none">
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-brand-cream/35">
                <img
                  src={activeImage}
                  alt={course.title}
                  className="absolute inset-0 w-full h-full object-cover object-[center_20%] transition-all duration-500 hover:scale-[1.01] z-10"
                />
              </div>
              <div className="absolute top-4 left-4 z-20">
                <span className="bg-brand-primary text-white px-2 py-0.5 sm:px-4 sm:py-1.5 rounded-full text-[8px] sm:text-xs font-bold uppercase tracking-wider shadow-md">
                  {course.category}
                </span>
              </div>
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-4 sm:p-6 flex items-end justify-between z-25">
                <span className="text-white/90 text-xs sm:text-sm font-medium flex items-center gap-1.5 backdrop-blur-sm bg-black/20 px-2.5 py-1 rounded-full">
                  <Star size={14} className="fill-amber-400 text-amber-400 sm:w-4 sm:h-4" />
                  Visualização Exclusiva
                </span>
              </div>
            </div>

            {/* Interactive Thumbnail strip with beautiful horizontal layout */}
            {imageGallery.length > 1 && (
              <div className="space-y-2 sm:space-y-3 flex flex-col items-center w-full relative">
                <p className="text-[10px] sm:text-xs font-bold text-brand-primary uppercase tracking-wider flex items-center justify-center gap-1.5 px-0.5 text-center">
                  <Sparkles size={12} className="fill-brand-primary/20" />
                  Galeria de Inspiração dos Doces (Toque para ver em detalhe)
                </p>
                <div className="relative w-full group flex items-center px-5 sm:px-8">
                  {/* Left scroll arrow button */}
                  <button
                    onClick={() => {
                      if (galleryRef.current) {
                        galleryRef.current.scrollBy({ left: -220, behavior: 'smooth' });
                      }
                    }}
                    className="absolute left-0 z-30 p-1.5 rounded-full bg-[#FFFDF9]/95 text-brand-primary border border-brand-primary/15 shadow-md hover:bg-brand-primary hover:text-white transition-all active:scale-95 flex items-center justify-center cursor-pointer"
                    aria-label="Anterior"
                  >
                    <ChevronLeft size={16} />
                  </button>

                  <div 
                    ref={galleryRef}
                    className="flex flex-nowrap gap-2 sm:gap-3 overflow-x-auto pb-1.5 scrollbar-none snap-x snap-mandatory w-full max-w-full justify-start scroll-smooth"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                  >
                    {imageGallery.map((imgUrl, idx) => {
                      const isSelected = imgUrl === activeImage;
                      return (
                        <button
                          key={idx}
                          onClick={() => {
                            setActiveImage(imgUrl);
                          }}
                          className={`relative w-[70px] h-[52px] sm:w-[100px] sm:h-[75px] md:w-[110px] md:h-[82px] rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer flex-shrink-0 snap-start transition-all border-2 sm:border-3 ${
                            isSelected 
                              ? 'border-brand-primary scale-95 shadow-md shadow-brand-primary/20' 
                              : 'border-transparent opacity-85 hover:opacity-100 hover:scale-[1.02]'
                          }`}
                        >
                          <img 
                            src={imgUrl} 
                            alt={`Minha foto do curso ${idx + 1}`} 
                            className="w-full h-full object-cover select-none pointer-events-none"
                            loading="lazy"
                            referrerPolicy="no-referrer"
                          />
                        </button>
                      );
                    })}
                  </div>

                  {/* Right scroll arrow button */}
                  <button
                    onClick={() => {
                      if (galleryRef.current) {
                        galleryRef.current.scrollBy({ left: 220, behavior: 'smooth' });
                      }
                    }}
                    className="absolute right-0 z-30 p-1.5 rounded-full bg-[#FFFDF9]/95 text-brand-primary border border-brand-primary/15 shadow-md hover:bg-brand-primary hover:text-white transition-all active:scale-95 flex items-center justify-center cursor-pointer"
                    aria-label="Próximo"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            )}

            {/* Dynamic Sticky Order Box (Below Gallery) - MOBILE ONLY */}
            <div className="lg:hidden bg-[#FFFDF9] rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl border-2 border-brand-primary/20 relative overflow-hidden max-w-xs sm:max-w-md mx-auto w-full">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-full translate-x-12 -translate-y-12 blur-2xl pointer-events-none" />
              
              {/* Main checkout buttons - super responsive height and text targeting CRO touch area */}
              <div className="space-y-2.5">
                <a
                  href={course.linkCheckout}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="flex items-center justify-center gap-2 bg-brand-primary text-white w-full py-2.5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm hover:bg-brand-primary/95 hover:scale-[1.01] active:scale-95 transition-all shadow-md shadow-brand-primary/10 cursor-pointer"
                >
                  GARANTIR MINHA VAGA AGORA
                </a>

                <a
                  href="https://wa.me/553193476920?text=Tenho%20duvidas%20sobre%20os%20cursos%20de%20confeitaria"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="flex items-center justify-center gap-1.5 bg-emerald-500 text-white w-full py-2 rounded-xl font-bold text-[11px] sm:text-xs hover:bg-emerald-600 transition-colors cursor-pointer"
                >
                  Falar Conosco no WhatsApp
                </a>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Sales Copy, Syllabus & Testimonials */}
          <div className="lg:col-span-5 w-full lg:sticky lg:top-28 space-y-6">

            {/* Core Course Manifesto details */}
            <div className="bg-white rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl shadow-brand-secondary/5 border border-brand-primary/5 space-y-5 sm:space-y-6">
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
                      <h2 className={`font-serif ${(course.id === 'course-16' || course.id === 'course-20') ? 'text-[19px]' : 'text-xl sm:text-2xl md:text-3xl'} font-bold text-brand-secondary leading-snug tracking-tight`}>
                        {headline.trim().endsWith('.') || headline.trim().endsWith('!') || headline.trim().endsWith('?') ? headline : `${headline}.`}
                      </h2>
                      
                      <div className="text-gray-600 space-y-4 sm:space-y-5 text-sm sm:text-base md:text-lg leading-relaxed">
                        {visibleParagraphs.map((para, idx) => (
                          <p key={idx}>{para}</p>
                        ))}
                      </div>

                      {whoIsItFor && (
                        <div className="bg-brand-primary/5 border border-brand-primary/10 rounded-2xl p-4 sm:p-5 mt-4 sm:mt-6">
                          <p className="text-brand-secondary text-sm sm:text-base md:text-lg leading-relaxed">
                            <span className="font-serif font-bold text-brand-primary block text-base sm:text-lg md:text-xl mb-1.5">
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
                    <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-brand-secondary">
                      O que torna esta especialização única?
                    </h2>
                    
                    <div className="text-gray-600 space-y-4 text-sm sm:text-base md:text-lg leading-relaxed">
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
              <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-3 sm:pt-4 max-w-md">
                <div className="bg-brand-cream/60 rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center border border-brand-primary/5">
                  <p className="text-[10px] font-bold uppercase text-gray-400">Aulas Rápidas</p>
                  <p className="text-xs sm:text-sm font-bold text-brand-secondary mt-0.5 leading-tight">Assista quando quiser</p>
                </div>
                <div className="bg-brand-cream/60 rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center border border-brand-primary/5">
                  <p className="text-[10px] font-bold uppercase text-gray-400">Suporte</p>
                  <p className="text-xs sm:text-sm font-bold text-brand-secondary mt-0.5 leading-tight">Dentro da plataforma de aula</p>
                </div>
              </div>
            </div>

            {/* Extensive Syllabus List */}
            <div className="bg-white rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl shadow-brand-secondary/5 border border-brand-primary/5">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-brand-secondary mb-4 sm:mb-6 flex items-center gap-2">
                <Sparkles className="text-brand-primary fill-brand-primary/10 animate-pulse" size={22} />
                {course.title.toLowerCase().includes('aulão') || course.category.toLowerCase().includes('aulão') || course.category.toLowerCase().includes('aulõ') ? "Conteúdo do aulão :" : "Conteúdo do curso :"}
              </h3>
              
              <div className="grid grid-cols-1 gap-3 sm:gap-4">
                {course.detalhesLongos.map((detail, index) => {
                  const isObs = detail.trim().toUpperCase().startsWith('OBS:');
                  const hasColon = detail.includes(':') && !isObs;
                  return (
                    <div 
                      key={index}
                      className={`flex gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl hover:bg-brand-accent/30 transition-colors border border-transparent hover:border-brand-primary/10 items-start ${isObs ? 'sm:col-span-2 bg-brand-primary/5 border border-brand-primary/10 py-4' : ''}`}
                    >
                      {isObs ? (
                        <span className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-brand-primary/15 text-brand-primary flex items-center justify-center font-bold text-xs sm:text-base mt-1">
                          💡
                        </span>
                      ) : (
                        <span className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-brand-primary/15 text-brand-primary flex items-center justify-center font-bold text-xs sm:text-sm mt-0.5">
                          {index + 1}
                        </span>
                      )}
                      <div>
                        {hasColon ? (() => {
                          const [title, ...rest] = detail.split(':');
                          const subtitle = rest.join(':').trim();
                          return (
                            <>
                              <p className="font-bold text-brand-secondary text-[17px] leading-snug">
                                {title.trim()}:
                              </p>
                              {subtitle && (
                                <p className="text-sm text-gray-500 font-medium leading-normal mt-1">
                                  {subtitle}
                                </p>
                              )}
                            </>
                          );
                        })() : (
                          <p className={`${(course.id === 'course-20' && index === 0) ? 'font-bold' : 'font-semibold'} text-brand-secondary text-[17px] leading-snug ${isObs ? 'text-brand-secondary' : ''}`}>
                            {detail}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Dynamic Sticky Order Box (DESKTOP ONLY) */}
            <div className="hidden lg:block bg-[#FFFDF9] rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl border-2 border-brand-primary/20 relative overflow-hidden w-full">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-full translate-x-12 -translate-y-12 blur-2xl pointer-events-none" />
              
              {/* Main checkout buttons - super responsive height and text targeting CRO touch area */}
              <div className="space-y-2.5">
                <a
                  href={course.linkCheckout}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="flex items-center justify-center gap-2 bg-brand-primary text-white w-full py-2.5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm hover:bg-brand-primary/95 hover:scale-[1.01] active:scale-95 transition-all shadow-md shadow-brand-primary/10 cursor-pointer text-center"
                >
                  GARANTIR MINHA VAGA AGORA
                </a>

                <a
                  href="https://wa.me/553193476920?text=Tenho%20duvidas%20sobre%20os%20cursos%20de%20confeitaria"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="flex items-center justify-center gap-1.5 bg-emerald-500 text-white w-full py-2 rounded-xl font-bold text-[11px] sm:text-xs hover:bg-emerald-600 transition-colors cursor-pointer text-center"
                >
                  Falar Conosco no WhatsApp
                </a>
              </div>
            </div>

            {/* Depoimentos / Testimonials Section (Exclusiva para Doces de Vitrine, Bolos do Zero e Páscoa Lucrativa) */}
            {(isDocesDeVitrine || isBolosDoZero || isPascoa) && (
              <div className="bg-white rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl shadow-brand-secondary/5 border-2 border-brand-primary/15 space-y-5 sm:space-y-6">
                <div>
                  <span className="inline-flex items-center gap-1.5 bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2 sm:mb-3">
                    Resultados de Alunas Reais
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-brand-secondary leading-snug">
                    O que as nossas alunas estão conquistando?
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base mt-2 leading-relaxed">
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
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-4">
                  {testimonials.map((imgUrl, idx) => (
                    <div 
                      key={idx} 
                      onClick={() => setSelectedTestimonial(imgUrl)}
                      className="group relative aspect-[3/4] cursor-pointer rounded-xl sm:rounded-2xl overflow-hidden border border-brand-primary/10 bg-brand-cream/20 shadow-sm hover:shadow-md hover:border-brand-primary/35 transition-all duration-300 transform hover:-translate-y-0.5 p-1 select-none flex items-center justify-center animate-pulse-once"
                    >
                      <img 
                        src={imgUrl} 
                        alt={`Depoimento das alunas de ${course.title} ${idx + 1}`} 
                        className="w-full h-full object-cover rounded-lg sm:rounded-xl group-hover:scale-102 transition-transform duration-300"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                      {/* Interactive Hover Overlay */}
                      <div className="absolute inset-0 bg-brand-secondary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-2 rounded-lg sm:rounded-xl">
                        <span className="bg-white/95 text-brand-secondary font-black text-[10px] sm:text-xs py-1.5 px-3 rounded-full shadow-lg scale-90 group-hover:scale-100 transition-transform duration-300 flex items-center justify-center">
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
                      <p className="text-center font-bold text-xs text-brand-primary uppercase tracking-widest mt-3.5 mb-1">
                        História Real de Sucesso • {course.title}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}

          </div>

        </div>

      </div>
    </motion.div>
  );
}
