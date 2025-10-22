import { Github, Linkedin, Mail, Globe, Download, ChevronDown, Sparkles, Code, Brain, Zap, ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Dynamic Background with Geometric Patterns */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>
        
        {/* Animated Geometric Shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 border border-blue-500/20 rotate-45 animate-rotate-slow"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-emerald-500/20 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-32 left-32 w-40 h-40 border border-purple-500/20 rotate-12 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 border border-cyan-500/20 rounded-full animate-bounce-slow"></div>
        
        {/* Floating Tech Icons */}
        <div className="absolute top-32 left-1/4 text-blue-400/10 animate-float">
          <Code size={48} />
        </div>
        <div className="absolute top-1/3 right-1/4 text-emerald-400/10 animate-float-delayed">
          <Brain size={40} />
        </div>
        <div className="absolute bottom-1/3 left-1/3 text-purple-400/10 animate-float-slow">
          <Zap size={36} />
        </div>
        <div className="absolute top-1/2 left-10 text-cyan-400/10 animate-float">
          <Github size={32} />
        </div>
        <div className="absolute top-1/4 right-10 text-orange-400/10 animate-float-delayed">
          <Linkedin size={28} />
        </div>
        <div className="absolute bottom-1/4 right-1/3 text-pink-400/10 animate-float-slow">
          <Star size={24} />
        </div>
        <div className="absolute top-3/4 left-1/2 text-yellow-400/10 animate-float">
          <Globe size={30} />
        </div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-emerald-500/5 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left space-y-12">
              {/* Welcome Badge */}
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl animate-fade-in hover:bg-white/10 hover:backdrop-blur-2xl transition-all duration-300">
                <div className="flex gap-1">
                  <Star className="text-yellow-400" size={16} />
                  <Star className="text-yellow-400" size={16} />
                  <Star className="text-yellow-400" size={16} />
                </div>
                <span className="text-blue-400 font-medium">Welcome to my digital space</span>
              </div>

              {/* Main Heading with Typing Effect */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
                    <span className="block animate-slide-up">Hello, I'm</span>
                    <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent animate-slide-up delay-100">
                    Sachin Gupta
                  </span>
                </h1>
                  
                  <div className="flex flex-wrap items-center gap-6 justify-center lg:justify-start animate-slide-up delay-200">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                      <span className="text-2xl md:text-3xl text-slate-200 font-semibold">Web Developer</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse delay-300"></div>
                      <span className="text-2xl md:text-3xl text-emerald-400 font-semibold">AI Specialist</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-6 animate-slide-up delay-300">
                <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  I'm Sachin Gupta, a B.Tech Computer Science student with a passion for building innovative solutions. I specialize in full-stack development, AI integration, and creating scalable applications that solve real-world problems. Always learning, always building.
                </p>
                
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  {['Full-Stack Development', 'AI Integration', 'Scalable Systems', 'Innovation'].map((tag, index) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-slate-300 text-sm shadow-lg hover:border-blue-500/50 hover:bg-white/10 hover:backdrop-blur-2xl transition-all duration-300"
                      style={{ animationDelay: `${400 + index * 100}ms` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start animate-slide-up delay-500">
                <a
                  href="#contact"
                  className="group flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-2xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50"
                >
                  <span>Let's Work Together</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
                
                <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/sachingupta9381"
                  target="_blank"
                  rel="noopener noreferrer"
                    className="group p-4 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:backdrop-blur-2xl border border-white/10 hover:border-blue-500/50 rounded-xl transition-all duration-300 hover:scale-110 shadow-lg"
                >
                    <Linkedin size={24} className="text-slate-300 group-hover:text-blue-400" />
                </a>
                <a
                  href="https://github.com/SachinGupta93"
                  target="_blank"
                  rel="noopener noreferrer"
                    className="group p-4 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:backdrop-blur-2xl border border-white/10 hover:border-slate-400/50 rounded-xl transition-all duration-300 hover:scale-110 shadow-lg"
                  >
                    <Github size={24} className="text-slate-300 group-hover:text-white" />
                  </a>
                  <a
                    href="/assets/resume.pdf" 
                    download="Sachin_Gupta_Resume.pdf"
                    className="group p-4 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:backdrop-blur-2xl border border-white/10 hover:border-emerald-500/50 rounded-xl transition-all duration-300 hover:scale-110 shadow-lg"
                    title="Download Resume"
                  >
                    <Download size={24} className="text-slate-300 group-hover:text-emerald-400" />
                  </a>
              </div>
              </div>
            </div>

            {/* Right Content - Enhanced Visual */}
            <div className="flex justify-center lg:justify-end animate-fade-in delay-300">
              <div className="relative group">
                {/* Outer Glow Ring */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse"></div>
                
                {/* Main Visual Container */}
                <div className="relative w-80 h-80 md:w-96 md:h-96 bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 overflow-hidden shadow-2xl group-hover:border-blue-500/50 transition-all duration-500">
                  
                  {/* Animated Grid Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
                      {Array.from({ length: 64 }).map((_, i) => (
                        <div
                          key={i}
                          className="border border-slate-600 animate-pulse"
                          style={{ animationDelay: `${i * 50}ms` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Central Content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-8">
                      {/* Profile Image */}
                      <div className="relative mx-auto">
                        <div className="w-48 h-48 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border-4 border-white/20 group-hover:border-blue-500/50 transition-all duration-500 shadow-2xl overflow-hidden">
                          <img 
                            src="/assets/profile.jpg" 
                            alt="Sachin Gupta" 
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              // Fallback to initials if image fails to load
                              e.currentTarget.style.display = 'none';
                              const parent = e.currentTarget.parentElement;
                              if (parent) {
                                parent.innerHTML = '<span class="text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">SG</span>';
                              }
                            }}
                          />
                        </div>
                        
                        {/* Orbiting Elements */}
                        <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400 rounded-full animate-bounce-slow"></div>
                        <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-emerald-400 rounded-full animate-bounce-slow delay-1000"></div>
                        <div className="absolute top-1/2 -left-6 w-4 h-4 bg-purple-400 rounded-full animate-bounce-slow delay-500"></div>
                      </div>
                      
                      {/* Status Indicators */}
                      <div className="space-y-3">
                        <div className="flex items-center justify-center gap-2">
                          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                          <span className="text-emerald-400 text-sm font-medium">Available for opportunities</span>
                        </div>
                        <div className="flex justify-center gap-2">
                          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                          <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-300"></div>
                          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse delay-700"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-3">
          <span className="text-sm text-slate-400 font-medium bg-white/5 backdrop-blur-xl px-4 py-2 rounded-full border border-white/10">Discover more</span>
          <div className="w-6 h-10 border-2 border-white/20 bg-white/5 backdrop-blur-xl rounded-full flex justify-center shadow-lg">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
