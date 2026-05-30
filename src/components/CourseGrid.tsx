import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { COURSES } from '../data';
import { Category } from '../types';
import { ShoppingCart, Filter, Info } from 'lucide-react';

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
    <section id="cursos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl font-bold mb-4 text-brand-secondary"
          >
            Conheça Nossos Cursos
          </motion.h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Escolha a especialidade ideal para dar o próximo passo na sua carreira gastronômica.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <Filter className="text-gray-400 mr-2" size={20} />
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                activeCategory === cat 
                  ? 'bg-brand-primary text-white shadow-lg shadow-brand-primary/30' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {getCategoryLabel(cat)}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredCourses.map((course) => (
              <motion.div
                key={course.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group bg-brand-cream rounded-3xl overflow-hidden border border-brand-primary/5 hover:border-brand-primary/20 transition-all flex flex-col shadow-sm hover:shadow-xl duration-300"
              >
                {/* Clicking on the image opens details */}
                <div 
                  onClick={() => onSelectCourse(course.id)}
                  className="aspect-square overflow-hidden relative cursor-pointer bg-[#FFFDF9] p-2 flex items-center justify-center"
                >
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover object-center rounded-t-[12px] group-hover:scale-105 transition-transform duration-500 relative z-10"
                    loading="lazy"
                  />
                  {/* Subtle overlay hover effect */}
                  <div className="absolute inset-0 bg-brand-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                    <span className="bg-white/95 text-brand-secondary font-bold px-4 py-2 rounded-full shadow-lg text-sm flex items-center gap-2">
                      <Info size={16} className="text-brand-primary" />
                      Ver Detalhes
                    </span>
                  </div>
                </div>
                
                <div className="p-6 flex-grow flex flex-col">
                  {/* Title clicking triggers details too */}
                  <h3 
                    onClick={() => onSelectCourse(course.id)}
                    className="font-serif text-xl font-bold mb-2 cursor-pointer group-hover:text-brand-primary transition-colors text-brand-secondary"
                  >
                    {course.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6 line-clamp-2">
                    {course.description}
                  </p>
                  
                  <div className="mt-auto flex items-center justify-between gap-4 border-t border-brand-primary/5 pt-4 w-full">
                    <button 
                      onClick={() => onSelectCourse(course.id)}
                      className="text-sm font-bold text-brand-primary hover:text-brand-secondary hover:underline transition-colors cursor-pointer py-2"
                    >
                      Ver Detalhes do Curso
                    </button>
                    <a 
                      href={course.linkCheckout}
                      target="_blank"
                      referrerPolicy="no-referrer"
                      className="bg-brand-primary text-white px-4 py-2.5 rounded-xl hover:bg-brand-secondary transition-all shadow-md active:scale-95 flex items-center gap-2 text-xs font-bold"
                      title="Comprar Curso"
                    >
                      <ShoppingCart size={16} />
                      Inscrever-se
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-400 text-sm italic">
            * Todos os cursos contam com suporte VIP direto com a Naty e sua equipe.
          </p>
        </div>
      </div>
    </section>
  );
}
