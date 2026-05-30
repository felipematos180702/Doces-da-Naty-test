/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CourseGrid from './components/CourseGrid';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Footer from './components/Footer';
import CourseDetailsPage from './components/CourseDetailsPage';

export default function App() {
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-brand-cream/20">
      <Header onNavigateHome={() => setSelectedCourseId(null)} />
      <main className="flex-grow">
        {selectedCourseId ? (
          <CourseDetailsPage 
            courseId={selectedCourseId} 
            onBack={() => setSelectedCourseId(null)} 
          />
        ) : (
          <>
            <Hero />
            <CourseGrid onSelectCourse={(id) => setSelectedCourseId(id)} />
            <About />
            <Testimonials />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
