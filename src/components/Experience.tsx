import { Briefcase, Calendar, MapPin, ArrowUpRight, ArrowRight } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'Lead Developer',
      company: 'MedTrack',
      location: 'Hyderabad',
      period: '2024',
      type: 'Project-based',
      description: 'Built serverless medication management platform with TypeScript, React, and AI integration.',
      highlights: ['Serverless Architecture', 'AI Integration', 'Scalable APIs'],
      technologies: ['TypeScript', 'React.js', 'ML/AI', 'Firebase'],
      color: '#00F5FF',
      link: 'https://medtrack.co.in/'
    },
    {
      title: 'IEEE Member',
      company: 'VBIT IEEE Forum',
      location: 'Hyderabad',
      period: '2024 - 2025',
      type: 'Volunteer',
      description: 'Conducted research on emerging tech, built prototypes, and collaborated on development projects.',
      highlights: ['Research & Dev', 'Technical Publications', 'Team Leadership'],
      technologies: ['Research', 'Prototyping', 'Web Dev', 'Collaboration'],
      color: '#A855F7',
      link: 'https://www.linkedin.com/company/ieee-vbit-sb/'
    }
  ];

  return (
    <section id="experience" className="py-20 sm:py-32 relative overflow-x-hidden bg-carbon">
      {/* Background */}
      <div className="absolute inset-0 gradient-mesh-dark"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00F5FF]/20 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header - Left aligned with CTA */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6">
              <Briefcase size={14} className="text-[#00F5FF]" />
              <span className="text-sm text-white/60">Experience</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white">
              Professional <span className="text-gradient-cyan">Journey</span>
            </h2>
          </div>

          <a href="#contact" className="btn-secondary group hidden lg:flex">
            <span>Work With Me</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* NEW STRUCTURE: Horizontal Scrolling Cards */}
        <div className="relative">
          {/* Experience Cards - Horizontal Layout */}
          <div className="grid lg:grid-cols-2 gap-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="group relative card-dark card-animated card-shimmer p-0 overflow-hidden glow-border"
                style={{ borderColor: `${exp.color}20`, '--glow-color': `${exp.color}40` } as React.CSSProperties}
              >
                {/* Top Color Bar */}
                <div className="h-2 w-full" style={{ background: `linear-gradient(90deg, ${exp.color}, ${exp.color}60)` }}></div>

                <div className="p-8">
                  {/* Header Row */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center"
                        style={{ background: `linear-gradient(135deg, ${exp.color}, ${exp.color}80)`, boxShadow: `0 0 30px ${exp.color}30` }}
                      >
                        <Briefcase size={28} className="text-black" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                        <p className="text-lg font-semibold" style={{ color: exp.color }}>{exp.company}</p>
                      </div>
                    </div>
                    <span className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-white/50 text-xs">
                      {exp.type}
                    </span>
                  </div>

                  {/* Meta Row */}
                  <div className="flex gap-6 text-white/40 text-sm mb-6">
                    <span className="flex items-center gap-1.5">
                      <MapPin size={14} />
                      {exp.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} />
                      {exp.period}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-white/60 leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  {/* Highlights - Inline Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {exp.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 text-xs font-medium rounded-full"
                        style={{ backgroundColor: `${exp.color}15`, color: exp.color, border: `1px solid ${exp.color}30` }}
                      >
                        {h}
                      </span>
                    ))}
                  </div>

                  {/* Technologies Row */}
                  <div className="pt-6 border-t border-white/10">
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span key={i} className="tag text-xs">{tech}</span>
                        ))}
                      </div>
                      {exp.company === 'MedTrack' && (
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                          style={{ backgroundColor: `${exp.color}15`, border: `1px solid ${exp.color}30` }}
                        >
                          <ArrowUpRight size={18} style={{ color: exp.color }} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats Bar - NEW ELEMENT */}
        <div className="mt-16 p-8 rounded-3xl bg-white/[0.02] border border-white/[0.06]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#00F5FF]">3+</div>
              <div className="text-sm text-white/40 mt-1">Months Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#A855F7]">2+</div>
              <div className="text-sm text-white/40 mt-1">Projects Led</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#FF3CAC]">5+</div>
              <div className="text-sm text-white/40 mt-1">Team Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#00FF88]">10+</div>
              <div className="text-sm text-white/40 mt-1">Technologies</div>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-16 relative rounded-[40px] overflow-hidden">
          <div className="absolute inset-0 gradient-cyan opacity-15"></div>
          <div className="absolute inset-0 bg-black/70 backdrop-blur-xl"></div>
          <div className="absolute inset-0 border border-[#00F5FF]/20 rounded-[40px]"></div>

          <div className="relative z-10 p-10 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Ready for the Next Challenge</h3>
              <p className="text-white/50">Let's build something amazing together</p>
            </div>
            <a
              href="#contact"
              className="px-8 py-4 gradient-cyan text-black font-semibold rounded-full hover:shadow-lg hover:shadow-[#00F5FF]/30 hover:scale-105 transition-all flex items-center gap-2 group whitespace-nowrap"
            >
              <span>Get in Touch</span>
              <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
