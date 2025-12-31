import { Briefcase, Calendar, MapPin, Code, Users, Award, TrendingUp, Zap, ArrowUpRight } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'Lead Developer/Web Developer',
      company: 'MedTrack',
      location: 'Hyderabad, Telangana, India',
      period: '2024',
      type: 'Project-based',
      highlights: [
        'Built serverless medication management platform using TypeScript with modern architecture patterns',
        'Designed and developed UI components and structured backend architecture for ML and AI integration',
        'Implemented scalable serverless functions and API endpoints for seamless data flow and processing'
      ],
      technologies: ['TypeScript', 'Serverless', 'React.js', 'ML/AI', 'REST APIs'],
      achievements: ['Serverless deployment', 'Scalable architecture', 'AI-ready backend'],
      color: '#00F5FF',
      gradient: 'gradient-cyan'
    },
    {
      title: 'IEEE Member (Research and Developer)',
      company: 'VBIT IEEE Form',
      location: 'Hyderabad, Telangana, India',
      period: '2024 - 2025',
      type: 'Volunteer',
      highlights: [
        'Conducted research work on emerging technologies and contributed to IEEE technical publications',
        'Participated in building prototypes and proof-of-concept applications for various technical domains',
        'Collaborated with team members on development projects and research initiatives'
      ],
      technologies: ['Research & Dev', 'Technical Writing', 'Prototyping', 'Web Dev', 'Collaboration'],
      achievements: ['Research contributions', 'Technical projects', 'Team collaboration'],
      color: '#A855F7',
      gradient: 'gradient-purple'
    }
  ];

  const stats = [
    { label: 'Months Experience', value: '3+', icon: Calendar, color: '#00F5FF' },
    { label: 'Projects Led', value: '2+', icon: Code, color: '#A855F7' },
    { label: 'Team Members', value: '5+', icon: Users, color: '#FF3CAC' },
    { label: 'Technologies', value: '10+', icon: Award, color: '#00FF88' }
  ];

  return (
    <section id="experience" className="py-32 relative overflow-hidden bg-carbon">
      {/* Background Effects */}
      <div className="absolute inset-0 gradient-mesh-dark"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#A855F7]/20 to-transparent"></div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-[#00F5FF]/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/3 right-0 w-[300px] h-[300px] bg-[#A855F7]/10 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-xl mb-6">
            <Briefcase size={16} className="text-[#00F5FF]" />
            <span className="text-sm font-medium text-white/80">Experience</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Professional
            <span className="block text-gradient-cyan">Journey</span>
          </h2>
          <p className="text-xl text-white/50 max-w-3xl mx-auto leading-relaxed">
            Building innovative solutions and leading teams in the healthcare technology space,
            with a focus on AI-driven applications that make a real impact.
          </p>
        </div>

        {/* Stats Section */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="card-dark p-6 text-center hover-lift group">
                  <div
                    className="icon-box-sm mx-auto mb-4 group-hover:scale-110 transition-transform"
                    style={{ borderColor: `${stat.color}30`, background: `${stat.color}15` }}
                  >
                    <Icon size={20} style={{ color: stat.color }} />
                  </div>
                  <div className="number-xl mb-2" style={{ color: stat.color }}>{stat.value}</div>
                  <p className="text-white/50 text-sm">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00F5FF] via-[#A855F7] to-[#FF3CAC] transform md:-translate-x-0.5"></div>

            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-start mb-16 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline Dot */}
                <div
                  className="absolute left-6 md:left-1/2 w-5 h-5 rounded-full transform md:-translate-x-2.5 z-10 border-4 border-black shadow-lg"
                  style={{ backgroundColor: exp.color, boxShadow: `0 0 20px ${exp.color}50` }}
                ></div>

                {/* Experience Card */}
                <div className={`ml-20 md:ml-0 md:w-[calc(50%-40px)] ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <div className="card-dark p-8 hover-lift group" style={{ borderColor: `${exp.color}20` }}>
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-6">
                      <div
                        className={`icon-box ${exp.gradient} border-0`}
                        style={{ boxShadow: `0 0 30px ${exp.color}30` }}
                      >
                        <Briefcase className="text-black" size={24} />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                          <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/50 text-xs">
                            {exp.type}
                          </span>
                        </div>
                        <p className="text-lg font-semibold mb-2" style={{ color: exp.color }}>{exp.company}</p>
                        <div className="flex flex-wrap gap-4 text-white/40 text-sm">
                          <span className="flex items-center gap-1">
                            <MapPin size={12} />
                            {exp.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar size={12} />
                            {exp.period}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-3 mb-6">
                      <h4 className="text-sm font-bold text-white flex items-center gap-2">
                        <TrendingUp size={14} style={{ color: exp.color }} />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, i) => (
                          <li key={i} className="flex gap-3 text-white/60 text-sm">
                            <span style={{ color: exp.color }} className="mt-1 flex-shrink-0">▹</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-sm font-bold text-white flex items-center gap-2 mb-3">
                        <Code size={14} style={{ color: exp.color }} />
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span key={i} className="tag text-xs">{tech}</span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="pt-6 border-t border-white/10">
                      <div className="flex flex-wrap gap-2">
                        {exp.achievements.map((achievement, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-xs rounded-full font-medium"
                            style={{ backgroundColor: `${exp.color}15`, color: exp.color, border: `1px solid ${exp.color}30` }}
                          >
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="relative max-w-4xl mx-auto p-12 md:p-16 rounded-[40px] overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 gradient-cyan opacity-20"></div>
            <div className="absolute inset-0 bg-black/70 backdrop-blur-xl"></div>
            <div className="absolute inset-0 border border-[#00F5FF]/30 rounded-[40px]"></div>

            <div className="relative z-10">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-[#00F5FF]/20 border border-[#00F5FF]/30 flex items-center justify-center">
                <Zap className="text-[#00F5FF]" size={40} />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready for the Next Challenge</h3>
              <p className="text-xl text-white/70 leading-relaxed mb-8 max-w-2xl mx-auto">
                I'm always excited to take on new projects and opportunities that allow me to push the boundaries
                of what's possible with technology.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 gradient-cyan text-black font-semibold rounded-full hover:shadow-lg hover:shadow-[#00F5FF]/30 hover:scale-105 transition-all group"
              >
                <span>Get in Touch</span>
                <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
