import { Award, Calendar, ExternalLink, Trophy, ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

export default function Certifications() {
  const [activeIndex, setActiveIndex] = useState(0);

  const certifications = [
    {
      title: 'Salesforce AI Agent Developer',
      issuer: 'SmartBridge',
      date: 'Dec 2025',
      skills: ['Salesforce', 'AI Agents', 'CRM'],
      color: '#00F5FF',
      link: 'https://drive.google.com/file/d/1kLkvKmey_8H0azIG6bywyR-DJ_5PtHkd/view?usp=sharing'
    },
    {
      title: 'Oracle Cloud AI Foundations',
      issuer: 'Oracle University',
      date: 'Aug 2025',
      skills: ['Oracle Cloud', 'AI Foundations'],
      color: '#FF3CAC',
      link: 'https://drive.google.com/file/d/1KtRDYVkF8WA27MJwg3L9_o8mf_cDU7Ik/view'
    },
    {
      title: 'GenAI Data Analytics',
      issuer: 'Tata & Forage',
      date: 'Aug 2025',
      skills: ['Data Analytics', 'GenAI'],
      color: '#A855F7',
      link: 'https://drive.google.com/file/d/1ewaAanQNBjECOBytpuQ7wokQWRYq0ZP1/view'
    },
    {
      title: 'Zscaler Zero Trust (ZTCA)',
      issuer: 'Zscaler Academy',
      date: '2024 - 2027',
      skills: ['Zero Trust', 'Cybersecurity'],
      color: '#FF8A00',
      link: 'https://drive.google.com/file/d/1I3F86Ph__No6UqYOHksY1f9xqT2sbcWE/view'
    },
    {
      title: 'ML with Python',
      issuer: 'freeCodeCamp',
      date: 'Feb 2025',
      skills: ['Machine Learning', 'Python'],
      color: '#00FF88',
      link: 'https://drive.google.com/file/d/1S1dFgr-g3xaFXm1LGPmA7Tq7Xn815_aB/view'
    }
  ];

  // SIH 2025 Finalist - Featured Achievement
  const featuredAchievement = {
    title: 'Smart India Hackathon 2025',
    badge: 'FINALIST',
    description: 'Selected among top teams nationwide in India\'s largest hackathon organized by Government of India',
    color: '#FFD700', // Gold color for prestige
    year: '2025'
  };

  const hackathons = [
    { title: 'SIH 2025 Finalist', org: 'Govt. of India', date: '2025', featured: true },
    { title: 'UDHGAM 24HR Hackathon', org: 'Woxsen University', date: 'Feb 2025', featured: false },
    { title: 'IEEE Xtreme 18.0', org: 'IEEE', date: 'Oct 2024', featured: false },
    { title: 'IGNIS XR-AI Workshop', org: 'VBIT', date: 'Nov 2024', featured: false },
    { title: 'Agentic AI Hackathon', org: 'IBC Media', date: 'Oct 2025', featured: false }
  ];

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % certifications.length);
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + certifications.length) % certifications.length);

  return (
    <section id="certifications" className="py-20 sm:py-32 relative overflow-x-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-mesh-dark"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF8A00]/20 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header + Stats Row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6">
              <Award size={14} className="text-[#FF8A00]" />
              <span className="text-sm text-white/60">Certifications</span>
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold text-white">
              Credentials & <span style={{ background: 'linear-gradient(135deg, #FF8A00, #FF3CAC)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Achievements</span>
            </h2>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 sm:flex sm:gap-8">
            <div className="text-center">
              <div className="text-2xl sm:text-5xl font-bold text-[#FF8A00]">9</div>
              <div className="text-xs sm:text-sm text-white/40">Certifications</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-5xl font-bold text-[#FF3CAC]">5</div>
              <div className="text-xs sm:text-sm text-white/40">Hackathons</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-5xl font-bold text-[#A855F7]">300+</div>
              <div className="text-sm text-white/40">Hours</div>
            </div>
          </div>
        </div>

        {/* NEW STRUCTURE: Featured Carousel + Side Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Left - Featured Certificate Carousel */}
          <div className="lg:col-span-2">
            <div className="relative card-dark p-0 overflow-hidden" style={{ borderColor: `${certifications[activeIndex].color}20` }}>
              {/* Color bar */}
              <div className="h-2 w-full" style={{ background: `linear-gradient(90deg, ${certifications[activeIndex].color}, ${certifications[activeIndex].color}60)` }}></div>

              <div className="p-10">
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <span
                      className="inline-block px-3 py-1 text-xs font-medium rounded-full mb-4"
                      style={{ backgroundColor: `${certifications[activeIndex].color}15`, color: certifications[activeIndex].color, border: `1px solid ${certifications[activeIndex].color}30` }}
                    >
                      Active
                    </span>
                    <h3 className="text-3xl font-bold text-white mb-2">{certifications[activeIndex].title}</h3>
                    <p className="text-white/50">{certifications[activeIndex].issuer}</p>
                  </div>
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{ background: `linear-gradient(135deg, ${certifications[activeIndex].color}, ${certifications[activeIndex].color}80)` }}
                  >
                    <Award size={32} className="text-black" />
                  </div>
                </div>

                <div className="flex items-center gap-2 text-white/40 text-sm mb-8">
                  <Calendar size={14} />
                  <span>{certifications[activeIndex].date}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {certifications[activeIndex].skills.map((skill, i) => (
                    <span key={i} className="tag">{skill}</span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <a
                    href={certifications[activeIndex].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-black"
                    style={{ background: `linear-gradient(135deg, ${certifications[activeIndex].color}, ${certifications[activeIndex].color}80)` }}
                  >
                    <ExternalLink size={18} />
                    <span>View Certificate</span>
                  </a>

                  {/* Navigation */}
                  <div className="flex gap-2">
                    <button
                      onClick={prevSlide}
                      className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
                    >
                      <ChevronLeft size={20} className="text-white/60" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
                    >
                      <ChevronRight size={20} className="text-white/60" />
                    </button>
                  </div>
                </div>

                {/* Progress Dots */}
                <div className="flex gap-2 mt-6 justify-center">
                  {certifications.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveIndex(i)}
                      className={`w-2 h-2 rounded-full transition-all ${i === activeIndex ? 'w-8' : 'bg-white/20'}`}
                      style={{ backgroundColor: i === activeIndex ? certifications[activeIndex].color : undefined }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right - Hackathons Stack */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white flex items-center gap-2 mb-4">
              <Trophy size={18} className="text-[#FFD700]" />
              Hackathons & Achievements
            </h4>
            {hackathons.map((hack, i) => (
              <div
                key={i}
                className={`card-dark p-5 hover-lift group flex items-center gap-4 ${hack.featured ? 'border-[#FFD700]/40 bg-[#FFD700]/5' : ''}`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform ${hack.featured
                    ? 'bg-[#FFD700]/20 border border-[#FFD700]/50'
                    : 'bg-[#FF8A00]/15 border border-[#FF8A00]/30'
                    }`}
                  style={hack.featured ? { boxShadow: '0 0 20px rgba(255, 215, 0, 0.3)' } : {}}
                >
                  <Trophy size={20} className={hack.featured ? 'text-[#FFD700]' : 'text-[#FF8A00]'} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h5 className={`font-semibold text-sm ${hack.featured ? 'text-[#FFD700]' : 'text-white'}`}>{hack.title}</h5>
                    {hack.featured && (
                      <span className="px-2 py-0.5 text-[10px] font-bold bg-[#FFD700] text-black rounded-full animate-pulse">
                        FINALIST
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-white/40">{hack.org} • {hack.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Certificates Mini Grid */}
        <div>
          <h4 className="text-base sm:text-lg font-bold text-white mb-4 sm:mb-6">All Certifications</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {certifications.map((cert, i) => (
              <a
                key={i}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`card-dark p-3 sm:p-5 hover-lift group ${i === activeIndex ? '' : ''}`}
                style={{ borderColor: i === activeIndex ? `${cert.color}40` : undefined }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${cert.color}15`, border: `1px solid ${cert.color}30` }}
                  >
                    <Award size={16} style={{ color: cert.color }} />
                  </div>
                  <ArrowUpRight size={14} className="text-white/20 group-hover:text-white/60 transition-colors" />
                </div>
                <h5 className="font-semibold text-white text-sm line-clamp-1">{cert.title}</h5>
                <p className="text-xs text-white/40">{cert.issuer}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
