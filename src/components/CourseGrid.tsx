import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { COURSES } from '../data';
import { Category } from '../types';
import { Filter, Info } from 'lucide-react';

const CATEGORIES: (Category | 'Todos')[] = ['Todos', 'Aulões (acesso de 06 meses)', 'Cursos Rápidos (Acesso de 6 meses)', 'Cursos Completos'];

function getCategoryLabel(cat: Category | 'Todos'): string {
  if (cat === 'Todos') return 'Todos';
  if (cat === 'Aulões (acesso de 06 meses)') return 'Aulões';
  if (cat === 'Cursos Rápidos (Acesso de 6 meses)') return 'Cursos Rápidos';
  return 'Cursos Completos';
}

interface CourseGridProps {
  onSelectCourse: (courseId: string) => void;
  activeCategory: Category | 'Todos';
  setActiveCategory: (category: Category | 'Todos') => void;
  lastViewedCourseId: string | null;
  setLastViewedCourseId: (courseId: string | null) => void;
}

export default function CourseGrid({ 
  onSelectCourse, 
  activeCategory, 
  setActiveCategory, 
  lastViewedCourseId,
  setLastViewedCourseId
}: CourseGridProps) {

  // Smoothly scroll back to the recently viewed course card when showcase mounts
  useEffect(() => {
    if (lastViewedCourseId) {
      const scrollTimer = setTimeout(() => {
        const cardRef = document.getElementById(`course-card-${lastViewedCourseId}`);
        if (cardRef) {
          cardRef.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 350);
      return () => clearTimeout(scrollTimer);
    }
  }, [lastViewedCourseId]);

  const filteredCourses = (activeCategory === 'Todos' 
    ? COURSES 
    : COURSES.filter(c => c.category === activeCategory)
  ).slice().sort((a, b) => {
    // course-22 (Combo Vitalício) always remains premier at the very top
    if (a.id === 'course-22') return -1;
    if (b.id === 'course-22') return 1;

    // Move courses with "Mais vendidos" badge to the top of their respective sections
    const aIsBest = a.badge === 'Mais vendidos';
    const bIsBest = b.badge === 'Mais vendidos';
    if (aIsBest && !bIsBest) return -1;
    if (!aIsBest && bIsBest) return 1;

    return 0;
  });

  return (
    <section id="cursos" className="py-12 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-brand-secondary"
          >
            Conheça os meus cursos
          </motion.h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base sm:text-lg">
            Escolha o melhor para você dar o próximo passo e faturar mais com a confeitaria.
          </p>
        </div>

        {/* 3 Caminhos Highlight */}
        <div className="mb-8 md:mb-12 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 mb-6">
            <button
              type="button"
              onClick={() => setActiveCategory('Aulões (acesso de 06 meses)')}
              className={`p-4 sm:p-5 rounded-2xl border text-left transition-all flex flex-col justify-between cursor-pointer ${
                activeCategory === 'Aulões (acesso de 06 meses)'
                  ? 'bg-rose-50/90 border-brand-primary shadow-sm ring-1 ring-brand-primary'
                  : 'bg-brand-cream/60 border-brand-primary/15 hover:border-brand-primary/40 hover:bg-brand-cream'
              }`}
            >
              <div className="mb-2 w-full">
                <span className="font-serif font-bold text-base sm:text-lg text-brand-secondary">Aulões</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                Ideal para quem quer fazer renda extra ou para a confeiteira que quer aprender doces específicos.
              </p>
            </button>

            <button
              type="button"
              onClick={() => setActiveCategory('Cursos Rápidos (Acesso de 6 meses)')}
              className={`p-4 sm:p-5 rounded-2xl border text-left transition-all flex flex-col justify-between cursor-pointer ${
                activeCategory === 'Cursos Rápidos (Acesso de 6 meses)'
                  ? 'bg-rose-50/90 border-brand-primary shadow-sm ring-1 ring-brand-primary'
                  : 'bg-brand-cream/60 border-brand-primary/15 hover:border-brand-primary/40 hover:bg-brand-cream'
              }`}
            >
              <div className="mb-2 w-full">
                <span className="font-serif font-bold text-base sm:text-lg text-brand-secondary">Cursos rápidos</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                Aqui você aprende os doces mais vendidos para incluir no seu cardápio e delivery.
              </p>
            </button>

            <button
              type="button"
              onClick={() => setActiveCategory('Cursos Completos')}
              className={`p-4 sm:p-5 rounded-2xl border text-left transition-all flex flex-col justify-between cursor-pointer ${
                activeCategory === 'Cursos Completos'
                  ? 'bg-rose-50/90 border-brand-primary shadow-sm ring-1 ring-brand-primary'
                  : 'bg-brand-cream/60 border-brand-primary/15 hover:border-brand-primary/40 hover:bg-brand-cream'
              }`}
            >
              <div className="mb-2 w-full">
                <span className="font-serif font-bold text-base sm:text-lg text-brand-secondary">Cursos completos</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                Ideal para quem deseja se tornar confeiteira e aprender além das receitas.
              </p>
            </button>
          </div>

          {/* Filters - elegant touch-snapping horizontal strip for mobile, normal view on desktop */}
          <div className="flex items-center justify-start md:justify-center gap-2.5 overflow-x-auto md:overflow-x-visible pb-2 md:pb-0 scrollbar-none w-auto -mx-4 px-4 md:mx-0 md:px-0 select-none">
            <div className="flex-shrink-0 items-center text-gray-400 mr-1 hidden sm:flex">
              <Filter size={18} />
            </div>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 sm:px-6 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap flex-shrink-0 ${
                  activeCategory === cat 
                    ? 'bg-brand-primary text-white shadow-md shadow-brand-primary/20' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {getCategoryLabel(cat)}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 md:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredCourses.map((course) => {
              const displayImage = course.image;

              return (
                <motion.div
                  key={course.id}
                  id={`course-card-${course.id}`}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className={`group bg-brand-cream rounded-2xl sm:rounded-3xl overflow-hidden border transition-all flex flex-col shadow-sm hover:shadow-xl duration-300 relative ${
                    course.id === 'course-22' 
                      ? 'border-amber-400/70 ring-2 ring-amber-400/40 shadow-md bg-gradient-to-b from-amber-50/40 to-brand-cream' 
                      : course.badge === 'Mais vendidos'
                      ? 'border-brand-primary/20 hover:border-brand-primary/35 shadow-xs'
                      : 'border-brand-primary/5 hover:border-brand-primary/20'
                  }`}
                >
                  {/* Highlight ribbon for Combo Vitalício */}
                  {course.id === 'course-22' && (
                    <div className="bg-gradient-to-r from-amber-500 via-rose-500 to-amber-500 text-white text-[10px] sm:text-xs font-black py-1 px-3 text-center uppercase tracking-wider shadow-sm flex items-center justify-center gap-1.5 z-30">
                      <span>⭐</span>
                      <span>Maior Sucesso • Acesso Vitalício</span>
                    </div>
                  )}

                  {/* Clicking on the image opens details */}
                  <div 
                    onClick={() => onSelectCourse(course.id)}
                    className="aspect-square overflow-hidden relative cursor-pointer bg-[#FFFDF9] p-1.5 sm:p-2 flex items-center justify-center"
                  >
                    {/* Badge on image without star */}
                    {course.badge && course.id !== 'course-22' && (
                      <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 z-30 pointer-events-none">
                        <span className="bg-white/95 backdrop-blur-md text-brand-secondary text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-full shadow-sm border border-brand-primary/20">
                          {course.badge}
                        </span>
                      </div>
                    )}

                    <img 
                      src={displayImage} 
                      alt={course.title}
                      className="w-full h-full object-cover object-center rounded-xl sm:rounded-t-[12px] group-hover:scale-105 transition-transform duration-500 relative z-10"
                      loading="lazy"
                    />
                  {/* Subtle overlay hover effect */}
                  <div className="absolute inset-0 bg-brand-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                    <span className="bg-white/95 text-brand-secondary font-bold px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-lg text-[10px] sm:text-xs flex items-center gap-1.5 sm:gap-2">
                      <Info size={14} className="text-brand-primary sm:w-4 sm:h-4" />
                      Ver Detalhes
                    </span>
                  </div>
                </div>
                
                <div className="p-3 sm:p-6 flex-grow flex flex-col">
                  {/* Title clicking triggers details too */}
                  <h3 
                    onClick={() => onSelectCourse(course.id)}
                    className="font-serif text-sm sm:text-lg md:text-xl font-bold mb-1 sm:mb-2 cursor-pointer group-hover:text-brand-primary transition-colors text-brand-secondary line-clamp-1"
                  >
                    {course.title}
                  </h3>
                  <p className="text-gray-600 text-[10px] sm:text-xs md:text-sm mb-3 sm:mb-6 line-clamp-2 leading-relaxed">
                    {course.description}
                  </p>
                  
                  <div className="mt-auto flex flex-col min-[350px]:flex-row items-stretch min-[350px]:items-center justify-between gap-1.5 sm:gap-4 border-t border-brand-primary/5 pt-3 w-full">
                    <button 
                      onClick={() => onSelectCourse(course.id)}
                      className="text-[10px] sm:text-xs md:text-sm font-bold text-brand-primary hover:text-brand-secondary hover:underline transition-colors cursor-pointer py-1 sm:py-2 text-center min-[350px]:text-left"
                    >
                      Detalhes
                    </button>
                    <a 
                      href={course.linkCheckout}
                      target="_blank"
                      referrerPolicy="no-referrer"
                      className="bg-brand-primary text-white px-2 py-1.5 min-[370px]:px-3 min-[370px]:py-2 sm:px-4 sm:py-2.5 rounded-lg sm:rounded-xl hover:bg-brand-secondary transition-all shadow-md active:scale-95 flex items-center justify-center gap-1 text-[9px] min-[370px]:text-[11px] sm:text-xs font-bold leading-none"
                      title="Comprar Curso"
                    >
                      Aprenda agora
                    </a>
                  </div>
                </div>
              </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        <div className="text-center mt-12 md:mt-16">
          <p className="text-gray-400 text-xs sm:text-sm italic">
            Todos os cursos contam com suporte VIP direto com a Naty e sua equipe dentro da plataforma de aulas.
          </p>
        </div>
      </div>
    </section>
  );
}
