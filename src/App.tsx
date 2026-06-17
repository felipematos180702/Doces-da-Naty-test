/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import CourseGrid from './components/CourseGrid';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Footer from './components/Footer';
import CourseDetailsPage from './components/CourseDetailsPage';
import PrivacyPolicyModal from './components/PrivacyPolicyModal';
import { Category } from './types';

export default function App() {
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<Category | 'Todos'>('Todos');
  const [lastViewedCourseId, setLastViewedCourseId] = useState<string | null>(null);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  const handleSelectCourse = (id: string) => {
    setLastViewedCourseId(id);
    setSelectedCourseId(id);
  };

  const handleNavigateHome = () => {
    setSelectedCourseId(null);
    setLastViewedCourseId(null);
  };

  const handleNavigateToSection = (sectionId: string) => {
    setSelectedCourseId(null);
    setLastViewedCourseId(null);
    setTimeout(() => {
      if (sectionId === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 100);
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-cream/20 w-full max-w-full overflow-x-hidden">
      <Header onNavigateHome={handleNavigateHome} onNavigateToSection={handleNavigateToSection} />
      <main className="flex-grow w-full max-w-full overflow-x-hidden">
        {selectedCourseId ? (
          <CourseDetailsPage 
            courseId={selectedCourseId} 
            onBack={() => setSelectedCourseId(null)} 
          />
        ) : (
          <>
            <Hero />
            <CourseGrid 
              onSelectCourse={handleSelectCourse} 
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
              lastViewedCourseId={lastViewedCourseId}
              setLastViewedCourseId={setLastViewedCourseId}
            />
            <About />
            <Testimonials />
          </>
        )}
      </main>
      <Footer onNavigateToSection={handleNavigateToSection} onOpenPrivacy={() => setIsPrivacyOpen(true)} />

      <AnimatePresence>
        {isPrivacyOpen && (
          <PrivacyPolicyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}
