import React, { lazy, Suspense } from 'react';
import './styles/App.css';

const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const Tools = lazy(() => import('./components/Tools'));

// Simple loading fallback
const SectionFallback = () => (
  <div className="w-full h-64 flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
  </div>
);

function App() {
  return (
    <div className="App">
      <Suspense fallback={<SectionFallback />}>
        <Hero />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <About />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Tools />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Contact />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Footer />
      </Suspense>
    </div>
  );
}
export default App;