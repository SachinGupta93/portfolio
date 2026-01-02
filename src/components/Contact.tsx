import { Mail, MapPin, Phone, Github, Linkedin, MessageCircle, Instagram, ArrowUpRight, Send, Heart } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'guptasach8247@gmail.com', href: 'mailto:guptasach8247@gmail.com', color: '#00F5FF' },
    { icon: Phone, label: 'Phone', value: '+91-9381432671', href: 'tel:+919381432671', color: '#A855F7' },
    { icon: MapPin, label: 'Location', value: 'Karimnagar, Telangana', href: '#', color: '#FF3CAC' }
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/sachingupta9381', label: 'LinkedIn', color: '#0077B5' },
    { icon: Github, href: 'https://github.com/SachinGupta93', label: 'GitHub', color: '#FFFFFF' },
    { icon: Instagram, href: 'https://www.instagram.com/sachin8247gupta', label: 'Instagram', color: '#E4405F' }
  ];

  return (
    <section id="contact" className="py-20 sm:py-32 relative overflow-x-hidden bg-carbon">
      {/* Background */}
      <div className="absolute inset-0 gradient-mesh-dark"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00F5FF]/20 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* NEW STRUCTURE: Full Width Split Layout */}
        <div className="max-w-6xl mx-auto">
          {/* Top: Big headline */}
          <div className="text-center mb-12 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6 sm:mb-8">
              <MessageCircle size={14} className="text-[#00F5FF]" />
              <span className="text-sm text-white/60">Contact</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 sm:mb-6">
              Let's <span className="text-gradient-cyan">Connect</span>
            </h2>
            <p className="text-base sm:text-xl text-white/40 max-w-2xl mx-auto">
              Ready to build something amazing? I'm always open to discussing new projects and opportunities.
            </p>
          </div>

          {/* Main Grid: 3 columns */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
            {/* Contact Cards */}
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <a
                  key={index}
                  href={info.href}
                  className="group card-dark p-5 sm:p-8 hover-lift flex items-center gap-4 sm:gap-6"
                  style={{ borderColor: `${info.color}15` }}
                >
                  <div
                    className="w-12 h-12 sm:w-14 sm:h-14 min-w-[48px] min-h-[48px] sm:min-w-[56px] sm:min-h-[56px] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0"
                    style={{ background: `linear-gradient(135deg, ${info.color}, ${info.color}80)`, boxShadow: `0 0 30px ${info.color}20` }}
                  >
                    <Icon size={24} className="text-black" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm text-white/40 mb-1">{info.label}</p>
                    <p className="text-sm sm:text-lg font-semibold text-white truncate">{info.value}</p>
                  </div>
                  <ArrowUpRight size={18} className="text-white/20 group-hover:text-white/60 transition-colors flex-shrink-0 hidden sm:block" />
                </a>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="relative rounded-[40px] overflow-hidden mb-16">
            <div className="absolute inset-0 gradient-cyan opacity-10"></div>
            <div className="absolute inset-0 bg-black/60 backdrop-blur-xl"></div>
            <div className="absolute inset-0 border border-[#00F5FF]/20 rounded-[40px]"></div>

            <div className="relative z-10 p-10 md:p-16">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left */}
                <div>
                  <div className="w-20 h-20 rounded-3xl bg-[#00F5FF]/20 border border-[#00F5FF]/30 flex items-center justify-center mb-6">
                    <Send className="text-[#00F5FF]" size={40} />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Ready to Get Started?
                  </h3>
                  <p className="text-lg text-white/60 leading-relaxed mb-8">
                    Currently pursuing B.Tech in Computer Science. Open to opportunities in
                    <span className="text-[#00F5FF]"> Backend Development</span>,
                    <span className="text-[#A855F7]"> AI Integration</span>, and
                    <span className="text-[#FF3CAC]"> Full-Stack</span>.
                  </p>

                  <a
                    href="mailto:guptasach8247@gmail.com"
                    className="inline-flex items-center gap-3 px-8 py-4 gradient-cyan text-black font-semibold rounded-full hover:shadow-lg hover:shadow-[#00F5FF]/30 hover:scale-105 transition-all group"
                  >
                    <Mail size={20} />
                    <span>Send an Email</span>
                    <ArrowUpRight size={20} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>

                {/* Right - Social Links */}
                <div className="text-center md:text-right">
                  <h4 className="text-lg font-bold text-white mb-6">Connect with me</h4>
                  <div className="flex gap-4 justify-center md:justify-end">
                    {socialLinks.map((social, index) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 hover:scale-110 transition-all"
                          title={social.label}
                        >
                          <Icon size={28} style={{ color: social.color }} />
                        </a>
                      );
                    })}
                  </div>

                  {/* Quick Response Badge */}
                  <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 bg-[#00FF88]/10 border border-[#00FF88]/30 rounded-full">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FF88] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00FF88]"></span>
                    </span>
                    <span className="text-sm text-[#00FF88]">Usually responds within 24h</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 pt-8 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl gradient-cyan flex items-center justify-center">
                <span className="text-black text-lg font-bold">SG</span>
              </div>
              <div>
                <span className="text-xl font-bold text-white">Sachin </span>
                <span className="text-xl font-bold text-gradient-cyan">Gupta</span>
              </div>
            </div>

            {/* Built with */}
            <p className="text-white/40 text-sm">
              Built with <Heart size={12} className="inline text-[#FF3CAC] animate-pulse" /> using React, TypeScript & Tailwind
            </p>

            {/* Copyright */}
            <p className="text-white/30 text-sm">© 2025 All rights reserved.</p>
          </div>

          {/* Decoration */}
          <div className="flex justify-center gap-2">
            <div className="w-2 h-2 bg-[#00F5FF] rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-[#A855F7] rounded-full animate-pulse delay-300"></div>
            <div className="w-2 h-2 bg-[#FF3CAC] rounded-full animate-pulse delay-700"></div>
          </div>
        </div>
      </footer>
    </section>
  );
}
