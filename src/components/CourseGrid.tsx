import { useState } from 'react';
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
}

export default function CourseGrid({ onSelectCourse }: CourseGridProps) {
  const [activeCategory, setActiveCategory] = useState<Category | 'Todos'>('Todos');

  const filteredCourses = activeCategory === 'Todos' 
    ? COURSES 
    : COURSES.filter(c => c.category === activeCategory);

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

        {/* Filters - elegant touch-snapping horizontal strip for mobile, normal view on desktop */}
        <div className="flex items-center justify-start md:justify-center gap-2.5 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 mb-8 md:mb-12 scrollbar-none w-auto -mx-4 px-4 md:mx-0 md:px-0 select-none">
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

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 md:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredCourses.map((course) => {
              const savedImage = typeof window !== 'undefined' ? localStorage.getItem(`course-cover-${course.id}`) : null;
              const displayImage = savedImage || course.image;

              return (
                <motion.div
                  key={course.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="group bg-brand-cream rounded-2xl sm:rounded-3xl overflow-hidden border border-brand-primary/5 hover:border-brand-primary/20 transition-all flex flex-col shadow-sm hover:shadow-xl duration-300"
                >
                  {/* Clicking on the image opens details */}
                  <div 
                    onClick={() => onSelectCourse(course.id)}
                    className="aspect-square overflow-hidden relative cursor-pointer bg-[#FFFDF9] p-1.5 sm:p-2 flex items-center justify-center"
                  >
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
            * Todos os cursos contam com suporte VIP direto com a Naty e sua equipe dentro da plataforma de aulas.
          </p>
        </div>
      </div>
    </section>
  );
}
