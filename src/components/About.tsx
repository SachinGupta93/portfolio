import { GraduationCap, Calendar, Target, Heart, Code, Brain, Users, Award, TrendingUp, Lightbulb, Rocket, Shield, Zap } from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'Projects Completed', value: '10+', icon: Code, color: '#00F5FF' },
    { label: 'ML Models Built', value: '5+', icon: Brain, color: '#A855F7' },
    { label: 'Technologies', value: '10+', icon: Award, color: '#FF3CAC' },
    { label: 'Team Members Mentored', value: '5+', icon: Users, color: '#00FF88' }
  ];

  const values = [
    {
      icon: Rocket,
      title: 'Innovation First',
      description: 'Always pushing boundaries to create cutting-edge solutions that make a real impact.',
      color: '#00F5FF'
    },
    {
      icon: Shield,
      title: 'Quality & Security',
      description: 'Building robust, secure systems that users can trust with their most important data.',
      color: '#A855F7'
    },
    {
      icon: Zap,
      title: 'Performance Focused',
      description: 'Optimizing every aspect to deliver lightning-fast, scalable applications.',
      color: '#FF3CAC'
    }
  ];

  const journey = [
    {
      year: '2022',
      title: 'Started My Journey',
      description: 'Began B.Tech in Computer Science with a passion for solving complex problems through code.'
    },
    {
      year: '2023',
      title: 'First Breakthrough',
      description: 'Developed my first AI model and discovered the power of machine learning in healthcare.'
    },
    {
      year: '2024',
      title: 'Leadership Role',
      description: 'Became Lead Developer at MedTrack, leading a team to build innovative health-tech solutions.'
    }
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 gradient-mesh-dark"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00F5FF]/20 to-transparent"></div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-[#A855F7]/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-[#00F5FF]/10 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-xl mb-6">
            <Target size={16} className="text-[#A855F7]" />
            <span className="text-sm font-medium text-white/80">About Me</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Crafting Digital
            <span className="block text-gradient-purple">Excellence</span>
          </h2>
          <p className="text-xl text-white/50 max-w-3xl mx-auto leading-relaxed">
            A passionate developer dedicated to building intelligent solutions that bridge the gap between
            cutting-edge technology and real-world impact.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Main Story Section */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            {/* Left - Personal Story */}
            <div className="card-dark p-10 hover:card-glow-cyan transition-all duration-500">
              <div className="flex items-start gap-5 mb-8">
                <div className="icon-box" style={{ borderColor: 'rgba(0, 245, 255, 0.3)' }}>
                  <Heart className="text-[#00F5FF]" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">My Story</h3>
                  <div className="w-16 h-1 rounded-full gradient-cyan"></div>
                </div>
              </div>

              <div className="space-y-5 text-white/60 leading-relaxed">
                <p className="text-lg">
                  My journey into technology began with a simple curiosity about how things work.
                  What started as a fascination with problem-solving has evolved into a passion for
                  creating intelligent solutions that make a real difference in people's lives.
                </p>

                <p>
                  As a Lead Developer at MedTrack, I've had the privilege of working on projects that
                  directly impact healthcare outcomes. From building AI models that predict health risks
                  to developing scalable backend systems, every project is an opportunity to push the
                  boundaries of what's possible.
                </p>

                <div className="flex flex-wrap gap-2 pt-4">
                  {['Problem Solver', 'Team Leader', 'Innovation Driver', 'Mentor'].map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right - Journey Timeline */}
            <div className="card-dark p-10 hover:card-glow-purple transition-all duration-500">
              <div className="flex items-start gap-5 mb-8">
                <div className="icon-box" style={{ borderColor: 'rgba(168, 85, 247, 0.3)' }}>
                  <TrendingUp className="text-[#A855F7]" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">My Journey</h3>
                  <div className="w-16 h-1 rounded-full gradient-purple"></div>
                </div>
              </div>

              <div className="space-y-6">
                {journey.map((step, index) => (
                  <div key={index} className="flex gap-4 group">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#A855F7]/50 transition-colors">
                        <span className="text-[#A855F7] font-bold text-sm">{step.year}</span>
                      </div>
                    </div>
                    <div className="flex-1 pt-1">
                      <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
                      <p className="text-white/50 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">What Drives Me</h3>
              <p className="text-lg text-white/50 max-w-2xl mx-auto">
                Core values that guide every project and decision I make
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="card-dark p-8 hover-lift group">
                    <div
                      className="icon-box mb-6 group-hover:scale-110 transition-transform"
                      style={{ borderColor: `${value.color}30`, background: `${value.color}10` }}
                    >
                      <Icon size={28} style={{ color: value.color }} />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3">{value.title}</h4>
                    <p className="text-white/50 leading-relaxed">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Education & Stats */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {/* Education */}
            <div className="card-dark p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="icon-box-sm gradient-cyan">
                  <GraduationCap className="text-black" size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Education</h3>
                  <div className="w-12 h-0.5 rounded-full gradient-cyan"></div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-lg text-white font-semibold mb-1">B.Tech in Computer Science</h4>
                  <p className="text-white/50 text-sm mb-3">Vignana Bharathi Institute of Technology</p>
                  <div className="flex items-center gap-2 text-white/40 text-sm">
                    <Calendar size={14} />
                    <span>Sep 2022 - Jul 2026</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <p className="text-xs font-semibold text-white/40 mb-3 uppercase tracking-wider">Key Focus Areas</p>
                  <div className="flex flex-wrap gap-2">
                    {['Machine Learning', 'Web Dev', 'Databases', 'AI'].map((course) => (
                      <span key={course} className="px-3 py-1.5 bg-white/5 text-white/60 text-xs rounded-full border border-white/10">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="lg:col-span-2 grid grid-cols-2 gap-4">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="card-dark p-6 hover-lift group">
                    <div className="flex items-center gap-4 mb-3">
                      <div
                        className="icon-box-sm group-hover:scale-110 transition-transform"
                        style={{ borderColor: `${stat.color}30`, background: `${stat.color}15` }}
                      >
                        <Icon size={20} style={{ color: stat.color }} />
                      </div>
                      <div className="number-xl" style={{ color: stat.color }}>{stat.value}</div>
                    </div>
                    <p className="text-white/50 text-sm">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Philosophy Section */}
          <div className="text-center">
            <div className="relative max-w-4xl mx-auto p-12 md:p-16 rounded-[40px] overflow-hidden">
              {/* Background */}
              <div className="absolute inset-0 gradient-purple opacity-20"></div>
              <div className="absolute inset-0 bg-black/60 backdrop-blur-xl"></div>
              <div className="absolute inset-0 border border-[#A855F7]/30 rounded-[40px]"></div>

              <div className="relative z-10">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-[#A855F7]/20 border border-[#A855F7]/30 flex items-center justify-center">
                  <Lightbulb className="text-[#A855F7]" size={40} />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">My Philosophy</h3>
                <p className="text-xl text-white/70 leading-relaxed max-w-2xl mx-auto">
                  "Technology should be a force for good. Every line of code I write, every system I design,
                  and every solution I create is driven by the belief that we can use technology to solve
                  real problems and make the world a better place."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
