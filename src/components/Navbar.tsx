import { useState, useEffect } from 'react';
import { Menu, X, Home, User, Briefcase, Code, Award, Mail, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  scrolled: boolean;
}

export default function Navbar({ scrolled }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Projects', href: '#projects', icon: Code },
    { name: 'Skills', href: '#skills', icon: Award },
    { name: 'Certs', href: '#certifications', icon: Award },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
      setActiveSection(href.substring(1));
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? 'bg-black/80 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
            className="group flex items-center gap-3 hover:scale-105 transition-all duration-300"
          >
            <div className="relative">
              <div className="absolute inset-0 gradient-cyan blur-lg opacity-50 group-hover:opacity-80 transition-opacity"></div>
              <div className="relative w-12 h-12 rounded-xl gradient-cyan flex items-center justify-center">
                <span className="text-black text-lg font-bold">SG</span>
              </div>
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-white">Sachin</span>
              <span className="text-xl font-bold text-gradient-cyan"> Gupta</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className={`relative px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 ${isActive
                      ? 'text-[#00F5FF] bg-[#00F5FF]/10'
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                    }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#00F5FF]"></span>
                  )}
                </a>
              );
            })}
          </div>

          {/* CTA Button */}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#contact');
            }}
            className="hidden lg:flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 gradient-cyan text-black hover:shadow-lg hover:shadow-[#00F5FF]/30 hover:scale-105 group"
          >
            <span>Let's Talk</span>
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl hover:bg-white/5 transition-colors"
          >
            {isOpen ? (
              <X size={24} className="text-white" />
            ) : (
              <Menu size={24} className="text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="bg-black/95 backdrop-blur-xl border-t border-white/5">
          <div className="container mx-auto px-6 py-6 space-y-2">
            {navLinks.map((link, index) => {
              const Icon = link.icon;
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className={`flex items-center gap-4 px-4 py-4 rounded-2xl transition-all duration-300 ${isActive
                      ? 'bg-[#00F5FF]/10 text-[#00F5FF]'
                      : 'text-white/60 hover:bg-white/5 hover:text-white'
                    }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <Icon size={20} />
                  <span className="font-medium">{link.name}</span>
                  {isActive && (
                    <div className="ml-auto w-2 h-2 rounded-full gradient-cyan"></div>
                  )}
                </a>
              );
            })}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#contact');
              }}
              className="flex items-center justify-center gap-2 w-full px-6 py-4 gradient-cyan text-black rounded-2xl font-semibold transition-all duration-300 hover:shadow-lg mt-4"
            >
              <span>Let's Talk</span>
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
