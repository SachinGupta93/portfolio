import { Github, Linkedin, Download, ArrowRight, MapPin, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 gradient-mesh-dark"></div>

      {/* Animated Gradient Orbs */}
      <div className="absolute top-20 right-1/4 w-[500px] h-[500px] bg-[#00F5FF]/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-20 left-1/4 w-[400px] h-[400px] bg-[#A855F7]/10 rounded-full blur-[100px] animate-pulse delay-700"></div>
      <div className="absolute top-1/2 left-10 w-[300px] h-[300px] bg-[#FF3CAC]/5 rounded-full blur-[80px] animate-pulse delay-300"></div>

      {/* Floating Elements */}
      <div className="absolute top-32 left-[10%] w-2 h-2 rounded-full bg-[#00F5FF] animate-float shadow-lg shadow-[#00F5FF]/50"></div>
      <div className="absolute top-1/2 right-[15%] w-3 h-3 rounded-full bg-[#A855F7] animate-float-delayed shadow-lg shadow-[#A855F7]/50"></div>
      <div className="absolute bottom-1/3 left-[20%] w-2 h-2 rounded-full bg-[#FF3CAC] animate-float-slow shadow-lg shadow-[#FF3CAC]/50"></div>
      <div className="absolute top-1/3 right-[30%] w-4 h-4 rounded-lg rotate-45 border border-[#00F5FF]/30 animate-spin-slow"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left space-y-8">
              {/* Status Badge */}
              <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-xl animate-fade-in">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FF88] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00FF88]"></span>
                </span>
                <span className="text-sm font-medium text-white/80">Available for opportunities</span>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05]">
                  <span className="block text-white animate-slide-up">Hello,</span>
                  <span className="block animate-slide-up delay-100">
                    <span className="text-white">I'm </span>
                    <span className="text-gradient-cyan">Sachin</span>
                  </span>
                </h1>

                <div className="flex flex-wrap items-center gap-3 justify-center lg:justify-start animate-slide-up delay-200">
                  <span className="tag tag-cyan">
                    <Sparkles size={14} className="mr-2" />
                    Web Developer
                  </span>
                  <span className="tag tag-purple">AI Specialist</span>
                  <span className="tag tag-pink">Full-Stack</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-xl mx-auto lg:mx-0 animate-slide-up delay-300">
                B.Tech Computer Science student passionate about building innovative solutions.
                I specialize in full-stack development, AI integration, and creating applications
                that solve real-world problems.
              </p>

              {/* Location */}
              <div className="flex items-center gap-2 justify-center lg:justify-start text-white/40 animate-slide-up delay-400">
                <MapPin size={16} />
                <span className="text-sm">Karimnagar, Telangana, India</span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up delay-500">
                <a href="#contact" className="btn-primary group">
                  <span>Let's Work Together</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>

                <div className="flex gap-3 justify-center">
                  <a
                    href="https://www.linkedin.com/in/sachingupta9381"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-[#0077B5]/20 hover:border-[#0077B5]/50 transition-all duration-300 hover:scale-105 group"
                  >
                    <Linkedin size={22} className="text-white/60 group-hover:text-[#0077B5]" />
                  </a>
                  <a
                    href="https://github.com/SachinGupta93"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105 group"
                  >
                    <Github size={22} className="text-white/60 group-hover:text-white" />
                  </a>
                  <a
                    href="/assets/Sachin_Gupta_Resume.pdf"
                    download="Sachin_Gupta_Resume.pdf"
                    className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-[#00FF88]/20 hover:border-[#00FF88]/50 transition-all duration-300 hover:scale-105 group"
                    title="Download Resume"
                  >
                    <Download size={22} className="text-white/60 group-hover:text-[#00FF88]" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Content - Profile Visual */}
            <div className="hidden lg:flex justify-center lg:justify-end animate-fade-in delay-300">
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 gradient-cyan rounded-[40px] blur-[60px] opacity-20"></div>

                {/* Main Image Container */}
                <div className="relative w-[380px] h-[480px] rounded-[40px] overflow-hidden border border-white/10 bg-gradient-to-b from-white/5 to-transparent">
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
                <div className="absolute -top-6 -left-10 p-4 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/10 animate-float">
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

                <div className="absolute -bottom-4 -right-10 p-4 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/10 animate-float-delayed">
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

                <div className="absolute top-1/2 -right-14 p-4 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/10 animate-float-slow">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl gradient-pink flex items-center justify-center">
                      <span className="text-white text-lg font-bold">8</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">Certifications</p>
                      <p className="text-xs text-white/50">Earned</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-3">
          <span className="text-sm font-medium text-white/30">Scroll to explore</span>
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
            <div className="w-1.5 h-3 rounded-full bg-[#00F5FF] animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
