import { GraduationCap, Calendar, Target, Heart, Code, Brain, Users, Award, TrendingUp, Lightbulb, Rocket, Shield, Zap } from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'Projects Completed', value: '10+', icon: Code, color: 'text-blue-400' },
    { label: 'ML Models Built', value: '5+', icon: Brain, color: 'text-purple-400' },
    { label: 'Technologies', value: '10+', icon: Award, color: 'text-emerald-400' },
    { label: 'Team Members Mentored', value: '5+', icon: Users, color: 'text-orange-400' }
  ];

  const values = [
    {
      icon: Rocket,
      title: 'Innovation First',
      description: 'Always pushing boundaries to create cutting-edge solutions that make a real impact.',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10'
    },
    {
      icon: Shield,
      title: 'Quality & Security',
      description: 'Building robust, secure systems that users can trust with their most important data.',
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10'
    },
    {
      icon: Zap,
      title: 'Performance Focused',
      description: 'Optimizing every aspect to deliver lightning-fast, scalable applications.',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10'
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
    <section id="about" className="py-32 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-950/50 via-transparent to-slate-950/50"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-40 h-40 border border-blue-500/10 rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-20 w-32 h-32 border border-emerald-500/10 rotate-45 animate-float-delayed"></div>
        <div className="absolute bottom-1/4 left-1/3 w-36 h-36 border border-purple-500/10 rounded-full animate-float-slow"></div>
        
        {/* Floating Icons */}
        <div className="absolute top-32 left-10 text-blue-400/10 animate-float">
          <Code size={32} />
        </div>
        <div className="absolute top-1/2 right-10 text-emerald-400/10 animate-float-delayed">
          <Brain size={28} />
        </div>
        <div className="absolute bottom-1/3 left-1/4 text-purple-400/10 animate-float-slow">
          <Heart size={24} />
        </div>
        <div className="absolute top-1/4 right-1/3 text-cyan-400/10 animate-float">
          <Target size={30} />
        </div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-emerald-400 text-sm shadow-lg mb-6">
            <Target size={16} />
            <span>About Me</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Crafting Digital
            <span className="block bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Excellence
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            A passionate developer dedicated to building intelligent solutions that bridge the gap between 
            cutting-edge technology and real-world impact.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Main Story Section */}
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            {/* Left - Personal Story */}
            <div className="space-y-8">
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-emerald-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white/5 backdrop-blur-2xl rounded-3xl p-10 shadow-2xl border border-white/10 hover:border-blue-500/30 hover:bg-white/10 hover:backdrop-blur-3xl transition-all duration-500">
                  <div className="flex items-start gap-6 mb-8">
                    <div className="p-4 bg-white/10 backdrop-blur-xl rounded-2xl group-hover:scale-110 transition-transform duration-300 border border-white/20">
                      <Heart className="text-blue-400" size={32} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold text-white mb-3">My Story</h3>
                      <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full"></div>
                  </div>
                </div>

                  <div className="space-y-6 text-slate-300 leading-relaxed">
                    <p className="text-xl">
                      My journey into technology began with a simple curiosity about how things work. 
                      What started as a fascination with problem-solving has evolved into a passion for 
                      creating intelligent solutions that make a real difference in people's lives.
                  </p>

                  <p className="text-lg">
                      As a Lead Developer at MedTrack, I've had the privilege of working on projects that 
                      directly impact healthcare outcomes. From building AI models that predict health risks 
                      to developing scalable backend systems, every project is an opportunity to push the 
                      boundaries of what's possible.
                    </p>

                    <div className="flex flex-wrap gap-3">
                      {['Problem Solver', 'Team Leader', 'Innovation Driver', 'Mentor'].map((tag, index) => (
                        <span
                          key={tag}
                          className="px-4 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-slate-300 text-sm hover:border-blue-500/50 hover:bg-white/10 transition-all duration-300 shadow-lg"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                </div>
              </div>

            {/* Right - Journey Timeline */}
            <div className="space-y-8">
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white/5 backdrop-blur-2xl rounded-3xl p-10 shadow-2xl border border-white/10 hover:border-emerald-500/30 transition-all duration-500">
                  <div className="flex items-start gap-6 mb-8">
                    <div className="p-4 bg-white/10 backdrop-blur-xl rounded-2xl group-hover:scale-110 transition-transform duration-300 border border-white/20">
                      <TrendingUp className="text-emerald-400" size={32} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold text-white mb-3">My Journey</h3>
                      <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full"></div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {journey.map((step, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/20 shadow-lg">
                            <span className="text-emerald-400 font-bold text-sm">{step.year}</span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-white mb-2">{step.title}</h4>
                          <p className="text-slate-300 text-sm leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">What Drives Me</h3>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                Core values that guide every project and decision I make
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={index}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-emerald-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative bg-white/5 backdrop-blur-2xl rounded-3xl p-8 shadow-xl border border-white/10 hover:border-blue-500/30 hover:bg-white/10 hover:backdrop-blur-3xl transition-all duration-300 hover:scale-105">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-white/10 backdrop-blur-xl rounded-xl group-hover:scale-110 transition-transform duration-300 border border-white/20">
                          <Icon className={value.color} size={28} />
                        </div>
                        <h4 className="text-xl font-bold text-white">{value.title}</h4>
                      </div>
                      <p className="text-slate-300 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Education & Stats */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {/* Education */}
            <div className="lg:col-span-1">
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white/5 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl border border-white/10 hover:border-blue-500/30 transition-all duration-500 hover:scale-105">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-white/10 backdrop-blur-xl rounded-xl border border-white/20">
                      <GraduationCap className="text-blue-400" size={28} />
                  </div>
                  <div>
                      <h3 className="text-2xl font-bold text-white mb-2">Education</h3>
                      <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full"></div>
                    </div>
                </div>

                  <div className="space-y-6">
                  <div>
                      <h4 className="text-xl text-white font-semibold mb-2">
                      B.Tech in Computer Science
                      </h4>
                      <p className="text-slate-300 mb-3">
                      Vignana Bharathi Institute of Technology
                    </p>
                      <div className="flex items-center gap-2 text-slate-400">
                      <Calendar size={16} />
                      <span className="text-sm">Sep 2022 - Jul 2026</span>
                      </div>
                  </div>

                    <div className="pt-6 border-t border-slate-700">
                      <p className="text-sm font-semibold text-slate-400 mb-4">Key Focus Areas:</p>
                    <div className="flex flex-wrap gap-2">
                        {['Machine Learning', 'Web Development', 'Database Systems', 'AI Integration'].map((course) => (
                        <span
                          key={course}
                            className="px-3 py-1 bg-white/5 backdrop-blur-xl text-slate-300 text-xs rounded-full border border-white/10 hover:border-blue-500/50 hover:bg-white/10 transition-all duration-300 shadow-lg"
                        >
                          {course}
                        </span>
                      ))}
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>

            {/* Stats Grid */}
            <div className="lg:col-span-2 grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                    <div
                      key={stat.label}
                      className="group bg-white/5 backdrop-blur-2xl rounded-2xl p-6 shadow-xl border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:scale-105"
                    >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-white/10 backdrop-blur-xl rounded-xl group-hover:scale-110 transition-transform duration-300 border border-white/20">
                        <Icon className={stat.color} size={24} />
                      </div>
                      <div className="text-3xl font-bold text-white">{stat.value}</div>
                    </div>
                    <p className="text-slate-400 text-sm">{stat.label}</p>
                  </div>
                );
              })}
                  </div>
                  </div>

          {/* Philosophy Section */}
          <div className="text-center">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative max-w-4xl mx-auto bg-white/5 backdrop-blur-2xl rounded-3xl p-12 shadow-2xl border border-white/10 hover:bg-white/10 hover:backdrop-blur-3xl transition-all duration-500">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20">
                    <Lightbulb className="text-purple-400" size={40} />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-white mb-6">My Philosophy</h3>
                <p className="text-xl text-slate-300 leading-relaxed mb-8">
                  "Technology should be a force for good. Every line of code I write, every system I design, 
                  and every solution I create is driven by the belief that we can use technology to solve 
                  real problems and make the world a better place."
                </p>
                <div className="flex justify-center gap-4">
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse delay-300"></div>
                  <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-700"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
