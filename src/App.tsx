import { useState, useEffect, useRef, Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Lazy load non-critical sections
const About = lazy(() => import('./components/About'));
const Experience = lazy(() => import('./components/Experience'));
const Projects = lazy(() => import('./components/Projects'));
const Skills = lazy(() => import('./components/Skills'));
const Certifications = lazy(() => import('./components/Certifications'));
const Contact = lazy(() => import('./components/Contact'));

// Loading Fallback Component
const PageLoader = () => (
  <div className="flex items-center justify-center py-20">
    <div className="w-10 h-10 border-4 border-[#00F5FF] border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  const [scrolled, setScrolled] = useState(false);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorOutlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Custom cursor effect
  useEffect(() => {
    const dot = cursorDotRef.current;
    const outline = cursorOutlineRef.current;

    if (!dot || !outline) return;

    const moveCursor = (e: MouseEvent) => {
      // Use requestAnimationFrame for smoother performance
      requestAnimationFrame(() => {
        dot.style.left = `${e.clientX}px`;
        dot.style.top = `${e.clientY}px`;
      });

      // Smooth follow for outline with slight delay
      setTimeout(() => {
        requestAnimationFrame(() => {
          outline.style.left = `${e.clientX}px`;
          outline.style.top = `${e.clientY}px`;
        });
      }, 50);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
        dot.classList.add('hovering');
        outline.classList.add('hovering');
      }
    };

    const handleMouseOut = () => {
      dot.classList.remove('hovering');
      outline.classList.remove('hovering');
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  // Initialize scroll reveal
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          // Optional: Stop observing once revealed to save resources
          // observer.unobserve(entry.target); 
        }
      });
    }, observerOptions);

    // Delay observation to ensure DOM elements are ready after lazy load
    setTimeout(() => {
      document.querySelectorAll('.scroll-reveal').forEach(el => {
        observer.observe(el);
      });
    }, 100);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-void relative">
      {/* Custom Cursor */}
      <div ref={cursorDotRef} className="cursor-dot hidden md:block"></div>
      <div ref={cursorOutlineRef} className="cursor-outline hidden md:block"></div>

      {/* Noise texture overlay */}
      <div className="noise-overlay"></div>

      {/* Grid background */}
      <div className="fixed inset-0 grid-bg pointer-events-none"></div>

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar scrolled={scrolled} />
        <Hero />

        <Suspense fallback={<PageLoader />}>
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Certifications />
          <Contact />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
