import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import { Code, Database, Cloud, Zap, Brain, Globe, Terminal, Cpu, Rocket, Star } from 'lucide-react';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Floating icons configuration - Distributed across entire page
  const floatingIcons = [
    // Hero Section
    { Icon: Code, top: '5%', left: '8%', color: 'text-blue-400/40', animation: 'animate-float', size: 40 },
    { Icon: Database, top: '12%', right: '10%', color: 'text-emerald-400/40', animation: 'animate-float-delayed', size: 36 },
    { Icon: Cloud, top: '8%', left: '25%', color: 'text-cyan-400/40', animation: 'animate-float-slow', size: 44 },
    { Icon: Zap, top: '15%', right: '30%', color: 'text-yellow-400/40', animation: 'animate-float', size: 32 },
    
    // About Section
    { Icon: Brain, top: '22%', left: '5%', color: 'text-purple-400/40', animation: 'animate-float-delayed', size: 38 },
    { Icon: Globe, top: '28%', right: '8%', color: 'text-pink-400/40', animation: 'animate-float-slow', size: 42 },
    { Icon: Terminal, top: '25%', left: '70%', color: 'text-orange-400/40', animation: 'animate-float', size: 34 },
    { Icon: Star, top: '32%', right: '25%', color: 'text-indigo-400/40', animation: 'animate-float-delayed', size: 28 },
    
    // Experience Section
    { Icon: Rocket, top: '38%', left: '10%', color: 'text-teal-400/40', animation: 'animate-float-slow', size: 36 },
    { Icon: Cpu, top: '42%', right: '12%', color: 'text-red-400/40', animation: 'animate-float', size: 40 },
    { Icon: Code, top: '45%', left: '80%', color: 'text-blue-300/40', animation: 'animate-float-delayed', size: 32 },
    { Icon: Database, top: '48%', right: '75%', color: 'text-emerald-300/40', animation: 'animate-float-slow', size: 38 },
    
    // Projects Section
    { Icon: Cloud, top: '55%', left: '6%', color: 'text-cyan-300/40', animation: 'animate-float', size: 36 },
    { Icon: Zap, top: '58%', right: '15%', color: 'text-yellow-300/40', animation: 'animate-float-delayed', size: 34 },
    { Icon: Brain, top: '62%', left: '85%', color: 'text-purple-300/40', animation: 'animate-float-slow', size: 40 },
    { Icon: Terminal, top: '65%', right: '70%', color: 'text-orange-300/40', animation: 'animate-float', size: 32 },
    
    // Skills Section
    { Icon: Globe, top: '72%', left: '8%', color: 'text-pink-300/40', animation: 'animate-float-delayed', size: 38 },
    { Icon: Rocket, top: '75%', right: '10%', color: 'text-teal-300/40', animation: 'animate-float-slow', size: 36 },
    { Icon: Cpu, top: '78%', left: '75%', color: 'text-red-300/40', animation: 'animate-float', size: 34 },
    { Icon: Star, top: '82%', right: '80%', color: 'text-indigo-300/40', animation: 'animate-float-delayed', size: 30 },
    
    // Certifications Section
    { Icon: Code, top: '88%', left: '12%', color: 'text-blue-400/40', animation: 'animate-float-slow', size: 38 },
    { Icon: Database, top: '90%', right: '18%', color: 'text-emerald-400/40', animation: 'animate-float', size: 36 },
    
    // Contact Section
    { Icon: Globe, top: '95%', left: '20%', color: 'text-pink-400/40', animation: 'animate-float-delayed', size: 40 },
    { Icon: Zap, top: '97%', right: '22%', color: 'text-yellow-400/40', animation: 'animate-float-slow', size: 34 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative">
      {/* Floating Icons Layer - Absolute positioning for full page coverage */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {floatingIcons.map((item, index) => {
          const IconComponent = item.Icon;
          const style: React.CSSProperties = {
            position: 'absolute',
            top: item.top,
            left: item.left,
            right: item.right,
          };
          return (
            <div key={index} style={style} className={`${item.color} ${item.animation}`}>
              <IconComponent size={item.size} />
            </div>
          );
        })}
      </div>

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
