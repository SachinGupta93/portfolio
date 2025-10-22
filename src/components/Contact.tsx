import { Mail, MapPin, Phone, Github, Linkedin, Globe, MessageCircle, Clock, CheckCircle, Zap } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'guptasach8247@gmail.com',
      href: 'mailto:guptasach8247@gmail.com',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91-9381432671',
      href: 'tel:+919381432671',
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/30'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Karimnagar, Telangana, India',
      href: '#',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/sachingupta9381',
      label: 'LinkedIn',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      hoverColor: 'hover:bg-blue-500/20'
    },
    {
      icon: Github,
      href: 'https://github.com/SachinGupta93',
      label: 'GitHub',
      color: 'text-slate-300',
      bgColor: 'bg-slate-700/50',
      hoverColor: 'hover:bg-slate-700'
    },
    {
      icon: Globe,
      href: 'https://github.com/SachinGupta93',
      label: 'Portfolio',
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10',
      hoverColor: 'hover:bg-emerald-500/20'
    }
  ];

  const features = [
    {
      icon: MessageCircle,
      title: 'Quick Response',
      description: 'I typically respond within 24 hours'
    },
    {
      icon: CheckCircle,
      title: 'Available for Work',
      description: 'Open to new opportunities and collaborations'
    },
    {
      icon: Clock,
      title: 'Flexible Schedule',
      description: 'Available for both full-time and freelance projects'
    }
  ];

  return (
    <section id="contact" className="py-32 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-2xl animate-pulse delay-500"></div>
                    </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-blue-400 text-sm shadow-lg mb-6">
            <MessageCircle size={16} />
            <span>Contact</span>
                    </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Let's Build
            <span className="block bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Something Amazing
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Ready to turn your ideas into reality? I'm here to help you build innovative solutions 
            that make a real impact. Let's start a conversation about your next project.
          </p>
                  </div>

        {/* Features */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                       <div
                         key={index}
                         className="group bg-white/5 backdrop-blur-2xl rounded-2xl p-6 shadow-xl border border-white/10 hover:border-blue-500/30 hover:bg-white/10 hover:backdrop-blur-3xl transition-all duration-300 hover:scale-105"
                       >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-white/10 backdrop-blur-xl rounded-xl group-hover:scale-110 transition-transform duration-300 border border-white/20">
                      <Icon className="text-blue-400" size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-slate-400 text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Main Contact Section */}
        <div className="max-w-5xl mx-auto">
          {/* Contact Information - Centered */}
          <div className="space-y-8">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-emerald-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white/5 backdrop-blur-2xl rounded-3xl p-10 shadow-2xl border border-white/10 hover:border-blue-500/30 transition-all duration-500">
                <h3 className="text-3xl font-bold text-white mb-8 text-center">Get In Touch</h3>

                <div className="grid md:grid-cols-3 gap-6 mb-10">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <a
                        key={index}
                        href={info.href}
                        className="group flex flex-col items-center text-center gap-4 p-6 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 hover:border-blue-500/50 hover:bg-white/10 transition-all duration-300 hover:scale-105 shadow-lg"
                      >
                        <div className="p-4 bg-white/10 backdrop-blur-xl rounded-xl group-hover:scale-110 transition-transform duration-300 border border-white/20">
                          <Icon className={info.color} size={28} />
                        </div>
                        <div>
                          <p className="text-sm text-slate-400 mb-2">{info.label}</p>
                          <p className="font-medium text-white">{info.value}</p>
                        </div>
                      </a>
                    );
                  })}
                </div>

                <div className="pt-8 border-t border-slate-700">
                  <h4 className="text-xl font-bold text-white mb-6 text-center">Connect with me</h4>
                  <div className="flex justify-center gap-6">
                    {socialLinks.map((social, index) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group p-5 bg-white/5 backdrop-blur-xl hover:bg-white/10 border border-white/10 hover:border-blue-500/50 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-xl"
                          title={social.label}
                        >
                          <Icon className={social.color} size={28} />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="text-center mt-20">
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-emerald-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative max-w-4xl mx-auto bg-white/5 backdrop-blur-2xl rounded-3xl p-12 shadow-2xl border border-white/10 hover:bg-white/10 hover:backdrop-blur-3xl transition-all duration-500">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20">
                  <Zap className="text-blue-400" size={40} />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h3>
              <p className="text-xl text-slate-300 leading-relaxed mb-8">
                Currently pursuing B.Tech in Computer Science at Vignana Bharathi Institute of Technology. 
                Open to opportunities in Backend Development, AI Integration, and Full-Stack Development.
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

      {/* Enhanced Footer */}
      <footer className="mt-20 pt-12 border-t border-slate-800/50">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4">
            <p className="text-slate-400 text-lg">
              Built with <span className="text-red-400">♥</span> using React, TypeScript, and Tailwind CSS
          </p>
            <p className="text-slate-500">
            © 2024 Sachin Gupta. All rights reserved.
          </p>
            <div className="flex justify-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse delay-300"></div>
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-700"></div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
