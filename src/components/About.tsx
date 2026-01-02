import { GraduationCap, Calendar, Heart, Code, Lightbulb, Rocket, Shield, Zap, ArrowRight } from 'lucide-react';

export default function About() {
  const stats = [
    { value: '10+', label: 'Projects', color: '#00F5FF' },
    { value: '5+', label: 'ML Models', color: '#A855F7' },
    { value: '10+', label: 'Technologies', color: '#FF3CAC' },
    { value: '5+', label: 'Mentored', color: '#00FF88' }
  ];

  const values = [
    { icon: Rocket, title: 'Innovation', description: 'Pushing boundaries with cutting-edge solutions', color: '#00F5FF' },
    { icon: Shield, title: 'Quality', description: 'Building robust, secure systems', color: '#A855F7' },
    { icon: Zap, title: 'Performance', description: 'Lightning-fast, scalable apps', color: '#FF3CAC' }
  ];

  const timeline = [
    { year: '2022', title: 'Started B.Tech', desc: 'Computer Science journey began', color: '#00F5FF' },
    { year: '2023', title: 'First AI Model', desc: 'Discovered ML in healthcare', color: '#A855F7' },
    { year: '2024', title: 'Lead Developer', desc: 'MedTrack health-tech solutions', color: '#FF3CAC' },
    { year: '2025', title: 'Building Future', desc: 'Scaling innovation forward', color: '#00FF88' }
  ];

  return (
    <section id="about" className="py-20 sm:py-32 relative overflow-x-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-mesh-dark"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#A855F7]/20 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6">
              <Heart size={14} className="text-[#A855F7]" />
              <span className="text-sm text-white/60">About Me</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-4">
              Crafting <span className="text-gradient-purple">Digital</span>
            </h2>
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold text-gradient-purple">
              Excellence
            </h2>
          </div>

          {/* Stats Row - NEW HORIZONTAL LAYOUT */}
          <div className="grid grid-cols-2 sm:flex gap-4 sm:gap-6 lg:gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl sm:text-4xl md:text-5xl font-bold" style={{ color: stat.color }}>{stat.value}</div>
                <div className="text-xs sm:text-sm text-white/40 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* NEW STRUCTURE: Two-column layout with different sized cards */}
        <div className="grid lg:grid-cols-12 gap-6 mb-20">
          {/* Left Column - Large Story Card */}
          <div className="lg:col-span-7">
            <div className="h-full card-dark card-animated card-shimmer p-10 hover:card-glow-cyan" style={{ '--glow-color': '#00F5FF40' } as React.CSSProperties}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl gradient-cyan flex items-center justify-center">
                  <Code size={28} className="text-black" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">My Story</h3>
                  <div className="w-20 h-1 rounded-full gradient-cyan mt-2"></div>
                </div>
              </div>

              <div className="space-y-5 text-white/60 text-lg leading-relaxed">
                <p>
                  My journey into technology began with curiosity about <span className="text-white">how things work</span>.
                  What started as fascination with problem-solving has evolved into passion for creating
                  intelligent solutions that make a real difference.
                </p>
                <p>
                  As <span className="text-[#00F5FF]">Lead Developer at MedTrack</span>, I build AI models that predict
                  health risks and develop scalable backend systems. Every project pushes the boundaries
                  of what's possible.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mt-8">
                {['Problem Solver', 'Team Leader', 'Innovator', 'Mentor'].map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Stacked Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Education Card */}
            <div className="card-dark card-animated card-shimmer p-8 hover:card-glow-purple" style={{ '--glow-color': '#A855F740' } as React.CSSProperties}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl gradient-purple flex items-center justify-center">
                  <GraduationCap size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Education</h4>
                  <p className="text-white/40 text-sm">B.Tech Computer Science</p>
                </div>
              </div>
              <p className="text-white/60 mb-3">Vignana Bharathi Institute of Technology</p>
              <div className="flex items-center gap-2 text-white/40 text-sm">
                <Calendar size={14} />
                <span>Sep 2022 - Jul 2026</span>
              </div>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 gap-4">
              {values.map((value, i) => {
                const Icon = value.icon;
                return (
                  <div
                    key={i}
                    className="card-dark p-6 flex items-center gap-4 hover-lift group"
                    style={{ borderColor: `${value.color}15` }}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: `${value.color}15`, border: `1px solid ${value.color}30` }}
                    >
                      <Icon size={20} style={{ color: value.color }} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">{value.title}</h4>
                      <p className="text-sm text-white/40">{value.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* NEW: Horizontal Timeline - COMPLETELY NEW STRUCTURE */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-10 text-center">My Journey</h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-6 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00F5FF] via-[#A855F7] to-[#FF3CAC]"></div>

            {/* Timeline Items */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {timeline.map((item, i) => (
                <div key={i} className="relative pt-12">
                  {/* Dot */}
                  <div
                    className="absolute top-4 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-black z-10"
                    style={{ backgroundColor: item.color, boxShadow: `0 0 20px ${item.color}50` }}
                  ></div>

                  {/* Card */}
                  <div className="text-center p-6 card-dark">
                    <div className="text-2xl font-bold mb-2" style={{ color: item.color }}>{item.year}</div>
                    <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                    <p className="text-sm text-white/40">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Philosophy - Full Width Banner */}
        <div className="relative rounded-[40px] overflow-hidden">
          <div className="absolute inset-0 gradient-purple opacity-20"></div>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-xl"></div>
          <div className="absolute inset-0 border border-[#A855F7]/30 rounded-[40px]"></div>

          <div className="relative z-10 p-12 md:p-16 flex flex-col md:flex-row items-center gap-10">
            <div className="w-24 h-24 rounded-3xl bg-[#A855F7]/20 border border-[#A855F7]/30 flex items-center justify-center flex-shrink-0">
              <Lightbulb className="text-[#A855F7]" size={48} />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-3xl font-bold text-white mb-4">My Philosophy</h3>
              <p className="text-xl text-white/70 leading-relaxed">
                "Technology should be a force for good. Every line of code I write is driven by
                the belief that we can make the world better, one solution at a time."
              </p>
            </div>
            <a href="#contact" className="btn-secondary whitespace-nowrap group">
              <span>Get in Touch</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
