import { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

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
      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;

      // Smooth follow for outline
      setTimeout(() => {
        outline.style.left = `${e.clientX}px`;
        outline.style.top = `${e.clientY}px`;
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
        }
      });
    }, observerOptions);

    document.querySelectorAll('.scroll-reveal').forEach(el => {
      observer.observe(el);
    });

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
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </div>
    </div>
  );
}

export default App;
