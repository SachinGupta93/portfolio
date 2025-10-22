import { useState, useEffect } from 'react';
import { Menu, X, Home, User, Briefcase, Code, Award, Mail, Sparkles } from 'lucide-react';

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
    { name: 'Certifications', href: '#certifications', icon: Award },
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
             className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
               scrolled
                 ? 'bg-white/5 backdrop-blur-2xl shadow-2xl shadow-blue-500/10 border-b border-white/10'
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
            className="group flex items-center gap-3 text-2xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent hover:scale-105 transition-all duration-300"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-lg blur-sm opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                     <div className="relative w-10 h-10 bg-white/5 backdrop-blur-xl rounded-lg border border-white/10 flex items-center justify-center group-hover:border-blue-500/50 transition-all duration-300 shadow-lg">
                <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                  SG
                </span>
              </div>
            </div>
            <span className="hidden sm:block">Sachin Gupta</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
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
                         className={`group flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 relative ${
                           isActive
                             ? 'text-white bg-white/10 backdrop-blur-xl border border-white/20'
                             : 'text-slate-300 hover:text-white hover:bg-white/5'
                         }`}
                >
                  <Icon size={16} className="group-hover:scale-110 transition-transform" />
                  <span className="font-medium">{link.name}</span>
                  {isActive && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full"></div>
                  )}
                  {/* Animated line on hover */}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-emerald-400 group-hover:w-full transition-all duration-300 ease-out"></div>
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
            className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-500 hover:to-emerald-500 text-white rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/50 group"
          >
            <Sparkles size={16} className="group-hover:rotate-12 transition-transform" />
            <span>Hire Me</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white transition-all duration-300 hover:scale-110"
          >
            <div className="relative w-6 h-6">
              <span
                className={`absolute top-1 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                  isOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              ></span>
              <span
                className={`absolute top-3 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                  isOpen ? 'opacity-0' : ''
                }`}
              ></span>
              <span
                className={`absolute top-5 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                  isOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
               <div className="bg-white/5 backdrop-blur-2xl border-t border-white/10">
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
                         className={`flex items-center gap-4 px-4 py-4 text-slate-300 hover:text-white rounded-xl transition-all duration-300 ${
                           isActive
                             ? 'bg-white/10 backdrop-blur-xl border border-white/20 text-white'
                             : 'hover:bg-white/5'
                         }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Icon size={20} />
                  <span className="font-medium">{link.name}</span>
                  {isActive && (
                    <div className="ml-auto w-2 h-2 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full"></div>
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
              className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-xl font-medium transition-all duration-300 hover:scale-105 mt-6"
            >
              <Sparkles size={20} />
              <span>Hire Me</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
