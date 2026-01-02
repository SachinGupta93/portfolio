import { Github, Linkedin, Download, ArrowRight, MapPin, Sparkles, Code, Brain, Award, Trophy } from 'lucide-react';

export default function Hero() {
  const quickStats = [
    { icon: Code, value: '10+', label: 'Projects', color: '#00F5FF' },
    { icon: Brain, value: '5+', label: 'ML Models', color: '#A855F7' },
    { icon: Award, value: '8', label: 'Certifications', color: '#FF3CAC' },
    { icon: Trophy, value: '4', label: 'Hackathons', color: '#00FF88' },
  ];

  // Split name into characters for wave animation
  const nameChars = "SACHIN".split('');

  return (
    <section id="home" className="min-h-screen relative overflow-x-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 gradient-mesh-dark"></div>

      {/* Animated Gradient Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00F5FF]/8 rounded-full blur-[150px] animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#A855F7]/8 rounded-full blur-[120px] animate-pulse delay-700"></div>

      {/* Floating particles */}
      <div className="absolute top-20 left-[5%] w-1 h-1 rounded-full bg-[#00F5FF] animate-float shadow-lg shadow-[#00F5FF]/50"></div>
      <div className="absolute top-40 right-[10%] w-2 h-2 rounded-full bg-[#A855F7] animate-float-delayed shadow-lg shadow-[#A855F7]/50"></div>
      <div className="absolute bottom-40 left-[15%] w-1.5 h-1.5 rounded-full bg-[#FF3CAC] animate-float-slow shadow-lg shadow-[#FF3CAC]/50"></div>

      {/* Main Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="max-w-7xl mx-auto">

          {/* Grid Layout: Content + Photo */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">

            {/* Left: Main Content */}
            <div className="text-center lg:text-left">
              {/* Status Badge */}
              <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-xl animate-fade-in mb-8">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FF88] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00FF88]"></span>
                </span>
                <span className="text-sm font-medium text-white/80">Available for opportunities</span>
              </div>

              {/* Main Heading with Wave Animation */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold leading-[0.9] mb-6">
                <span className="block text-white animate-slide-up mb-2">Hello, I'm</span>
                <span className="block wave-text text-gradient-cyan animate-slide-up delay-100">
                  {nameChars.map((char, i) => (
                    <span key={i} className="text-gradient-cyan">{char}</span>
                  ))}
                </span>
                <span className="block text-white animate-slide-up delay-200 mt-2">GUPTA</span>
              </h1>

              {/* Role Tags */}
              <div className="flex flex-wrap items-center gap-3 justify-center lg:justify-start mb-6 animate-slide-up delay-300">
                <span className="tag tag-cyan">
                  <Sparkles size={14} className="mr-2" />
                  Full-Stack Developer
                </span>
                <span className="tag tag-purple">AI Specialist</span>
                <span className="tag tag-pink">Healthcare Tech</span>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 justify-center lg:justify-start text-white/40 mb-8 animate-slide-up delay-400">
                <MapPin size={16} />
                <span className="text-sm">Karimnagar, Telangana, India</span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-slide-up delay-500">
                <a href="#contact" className="btn-primary group">
                  <span>Let's Work Together</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <div className="flex gap-3">
                  <a
                    href="https://www.linkedin.com/in/sachingupta9381"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-[#0077B5]/20 hover:border-[#0077B5]/50 transition-all duration-300 hover:scale-105"
                  >
                    <Linkedin size={22} className="text-white/60 hover:text-[#0077B5]" />
                  </a>
                  <a
                    href="https://github.com/SachinGupta93"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105"
                  >
                    <Github size={22} className="text-white/60 hover:text-white" />
                  </a>
                  <a
                    href="/assets/Sachin_Gupta_Resume.pdf"
                    download="Sachin_Gupta_Resume.pdf"
                    className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-[#00FF88]/20 hover:border-[#00FF88]/50 transition-all duration-300 hover:scale-105"
                  >
                    <Download size={22} className="text-white/60 hover:text-[#00FF88]" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Profile Photo */}
            <div className="hidden lg:flex justify-center lg:justify-end animate-fade-in delay-300">
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 gradient-cyan rounded-[40px] blur-[80px] opacity-30"></div>

                {/* Main Image Container */}
                <div className="relative w-[380px] h-[480px] rounded-[40px] overflow-hidden border-2 border-white/10 bg-gradient-to-b from-white/5 to-transparent card-animated glow-border">
                  {/* Profile Image */}
                  <img
                    src="/assets/github.jpg"
                    alt="Sachin Gupta"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        parent.innerHTML = `
                          <div class="flex items-center justify-center h-full bg-gradient-to-br from-[#00F5FF]/20 to-[#A855F7]/20">
                            <span class="text-[160px] font-bold text-gradient-cyan">SG</span>
                          </div>
                        `;
                      }
                    }}
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

                  {/* Name Card */}
                  <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10">
                    <h3 className="text-xl font-bold text-white">Sachin Gupta</h3>
                    <p className="text-sm text-white/50">Full-Stack Developer & AI Enthusiast</p>
                  </div>
                </div>

                {/* Floating Stat Cards */}
                <div className="absolute -top-6 -left-10 p-4 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/10 animate-float card-shimmer">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl gradient-cyan flex items-center justify-center">
                      <span className="text-black text-lg font-bold">10+</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">Projects</p>
                      <p className="text-xs text-white/50">Completed</p>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -right-10 p-4 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/10 animate-float-delayed card-shimmer">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl gradient-purple flex items-center justify-center">
                      <span className="text-white text-lg font-bold">5+</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">ML Models</p>
                      <p className="text-xs text-white/50">Built</p>
                    </div>
                  </div>
                </div>

                <div className="absolute top-1/2 -right-16 p-4 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/10 animate-float-slow card-shimmer">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl gradient-pink flex items-center justify-center">
                      <span className="text-white text-lg font-bold">8</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">Certs</p>
                      <p className="text-xs text-white/50">Earned</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bento Grid Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in delay-600">
            {quickStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="group relative p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-xl card-animated card-shimmer"
                  style={{ '--glow-color': `${stat.color}40` } as React.CSSProperties}
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div
                      className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110"
                      style={{ backgroundColor: `${stat.color}15`, border: `1px solid ${stat.color}30` }}
                    >
                      <Icon size={20} style={{ color: stat.color }} />
                    </div>
                    <div>
                      <div className="text-xl sm:text-3xl font-bold text-white">{stat.value}</div>
                      <div className="text-xs sm:text-sm text-white/40">{stat.label}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Description */}
          <div className="text-center mt-10 sm:mt-16 max-w-3xl mx-auto animate-fade-in delay-700">
            <p className="text-base sm:text-lg text-white/50 leading-relaxed">
              B.Tech Computer Science student passionate about building innovative solutions.
              I specialize in full-stack development, AI integration, and creating applications
              that solve real-world problems. <span className="text-[#00F5FF]">Always learning, always building.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
