import { Mail, MapPin, Phone, Github, Linkedin, MessageCircle, Clock, CheckCircle, Heart, Instagram, ArrowUpRight, Send } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'guptasach8247@gmail.com',
      href: 'mailto:guptasach8247@gmail.com',
      color: '#00F5FF'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91-9381432671',
      href: 'tel:+919381432671',
      color: '#A855F7'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Karimnagar, Telangana, India',
      href: '#',
      color: '#FF3CAC'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/sachingupta9381',
      label: 'LinkedIn',
      color: '#0077B5'
    },
    {
      icon: Github,
      href: 'https://github.com/SachinGupta93',
      label: 'GitHub',
      color: '#FFFFFF'
    },
    {
      icon: Instagram,
      href: 'https://www.instagram.com/sachin8247gupta',
      label: 'Instagram',
      color: '#E4405F'
    }
  ];

  const features = [
    {
      icon: MessageCircle,
      title: 'Quick Response',
      description: 'I typically respond within 24 hours',
      color: '#00F5FF'
    },
    {
      icon: CheckCircle,
      title: 'Available for Work',
      description: 'Open to new opportunities',
      color: '#00FF88'
    },
    {
      icon: Clock,
      title: 'Flexible Schedule',
      description: 'Full-time and freelance projects',
      color: '#A855F7'
    }
  ];

  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-carbon">
      {/* Background Effects */}
      <div className="absolute inset-0 gradient-mesh-dark"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00F5FF]/20 to-transparent"></div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-[#00F5FF]/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/3 left-0 w-[300px] h-[300px] bg-[#A855F7]/10 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-xl mb-6">
            <MessageCircle size={16} className="text-[#00F5FF]" />
            <span className="text-sm font-medium text-white/80">Contact</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Let's Build
            <span className="block text-gradient-cyan">Something Amazing</span>
          </h2>
          <p className="text-xl text-white/50 max-w-3xl mx-auto leading-relaxed">
            Ready to turn your ideas into reality? I'm here to help you build innovative solutions
            that make a real impact.
          </p>
        </div>

        {/* Features */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="card-dark p-6 text-center hover-lift group">
                  <div
                    className="icon-box mx-auto mb-4 group-hover:scale-110 transition-transform"
                    style={{ borderColor: `${feature.color}30`, background: `${feature.color}15` }}
                  >
                    <Icon size={24} style={{ color: feature.color }} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-white/50 text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Main Contact Section */}
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left - Contact Info */}
            <div className="card-dark p-10">
              <h3 className="text-2xl font-bold text-white mb-8">Get In Touch</h3>

              <div className="space-y-4 mb-10">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-center gap-5 p-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 group transition-all"
                    >
                      <div
                        className="icon-box group-hover:scale-110 transition-transform"
                        style={{ borderColor: `${info.color}30`, background: `${info.color}15` }}
                      >
                        <Icon size={24} style={{ color: info.color }} />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-white/40 mb-1">{info.label}</p>
                        <p className="font-semibold text-white">{info.value}</p>
                      </div>
                      <ArrowUpRight size={18} className="text-white/20 group-hover:text-white/50 transition-colors" />
                    </a>
                  );
                })}
              </div>

              <div className="pt-8 border-t border-white/10">
                <h4 className="text-lg font-bold text-white mb-6">Connect with me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 hover:scale-110 transition-all"
                        title={social.label}
                      >
                        <Icon size={24} style={{ color: social.color }} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right - CTA Card */}
            <div className="relative p-10 rounded-[32px] overflow-hidden">
              {/* Background */}
              <div className="absolute inset-0 gradient-cyan opacity-30"></div>
              <div className="absolute inset-0 bg-black/60 backdrop-blur-xl"></div>
              <div className="absolute inset-0 border border-[#00F5FF]/30 rounded-[32px]"></div>

              <div className="relative z-10 h-full flex flex-col justify-center">
                <div className="w-16 h-16 mb-6 rounded-2xl bg-[#00F5FF]/20 border border-[#00F5FF]/30 flex items-center justify-center">
                  <Send className="text-[#00F5FF]" size={32} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h3>
                <p className="text-white/70 text-lg leading-relaxed mb-8">
                  Currently pursuing B.Tech in Computer Science. Open to opportunities in Backend Development,
                  AI Integration, and Full-Stack Development.
                </p>
                <a
                  href="mailto:guptasach8247@gmail.com"
                  className="inline-flex items-center gap-2 px-8 py-4 gradient-cyan text-black font-semibold rounded-full hover:shadow-lg hover:shadow-[#00F5FF]/30 hover:scale-105 transition-all group w-fit"
                >
                  <span>Send an Email</span>
                  <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Footer */}
      <footer className="mt-32 pt-12 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
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

            {/* Center Text */}
            <div className="text-center">
              <p className="text-white/40">
                Built with <Heart size={14} className="inline text-[#FF3CAC] animate-pulse" /> using React, TypeScript & Tailwind CSS
              </p>
            </div>

            {/* Copyright */}
            <div className="text-white/30 text-sm">
              © 2025 Sachin Gupta. All rights reserved.
            </div>
          </div>

          {/* Bottom decoration */}
          <div className="flex justify-center gap-2 mt-8 pb-8">
            <div className="w-2 h-2 bg-[#00F5FF] rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-[#A855F7] rounded-full animate-pulse delay-300"></div>
            <div className="w-2 h-2 bg-[#FF3CAC] rounded-full animate-pulse delay-700"></div>
          </div>
        </div>
      </footer>
    </section>
  );
}
