import { Briefcase, Calendar, MapPin, Code, Users, Award, TrendingUp, Zap } from 'lucide-react';

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
      technologies: ['TypeScript', 'Serverless Architecture', 'React.js', 'ML/AI Integration', 'RESTful APIs'],
      achievements: ['Serverless deployment', 'Scalable architecture', 'AI-ready backend'],
      color: 'from-blue-500/20 to-cyan-500/20',
      borderColor: 'border-blue-500/30',
      iconColor: 'text-blue-400',
      bgColor: 'bg-blue-500/10'
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
      technologies: ['Research & Development', 'Technical Writing', 'Prototyping', 'Web Development', 'Team Collaboration'],
      achievements: ['Research contributions', 'Technical projects', 'Team collaboration'],
      color: 'from-emerald-500/20 to-teal-500/20',
      borderColor: 'border-emerald-500/30',
      iconColor: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10'
    }
  ];

  const stats = [
    { label: 'Months Experience', value: '3+', icon: Calendar, color: 'text-blue-400' },
    { label: 'Projects Led', value: '2+', icon: Code, color: 'text-emerald-400' },
    { label: 'Team Members', value: '5+', icon: Users, color: 'text-purple-400' },
    { label: 'Technologies', value: '10+', icon: Award, color: 'text-orange-400' }
  ];

  return (
    <section id="experience" className="py-32 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-emerald-400 text-sm shadow-lg mb-6">
            <Briefcase size={16} />
            <span>Experience</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Professional
            <span className="block bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Building innovative solutions and leading teams in the healthcare technology space, 
            with a focus on AI-driven applications that make a real impact.
          </p>
        </div>

        {/* Stats Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                       <div
                         key={stat.label}
                         className="group bg-white/5 backdrop-blur-2xl rounded-2xl p-6 shadow-xl border border-white/10 hover:border-emerald-500/30 hover:bg-white/10 hover:backdrop-blur-3xl transition-all duration-300 hover:scale-105"
                       >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-white/10 backdrop-blur-xl rounded-lg group-hover:scale-110 transition-transform duration-300 border border-white/20">
                      <Icon className={stat.color} size={20} />
                    </div>
                    <div className="text-3xl font-bold text-white">{stat.value}</div>
                  </div>
                  <p className="text-slate-400 text-sm">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-emerald-500 to-purple-500 transform md:-translate-x-0.5"></div>

            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full transform md:-translate-x-2 z-10 border-4 border-slate-950"></div>

                {/* Experience Card */}
                <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <div className="group relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                           <div className={`relative bg-white/5 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl border border-white/10 hover:scale-105 transition-all duration-500`}>
                      {/* Header */}
                      <div className="flex items-start gap-4 mb-6">
                        <div className="p-3 bg-white/10 backdrop-blur-xl rounded-xl group-hover:scale-110 transition-transform duration-300 border border-white/20">
                          <Briefcase className={exp.iconColor} size={28} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                            <span className="px-3 py-1 bg-slate-800/50 border border-slate-700 rounded-full text-slate-300 text-xs">
                              {exp.type}
                            </span>
                          </div>
                          <p className="text-xl text-blue-400 font-semibold mb-3">{exp.company}</p>
                          <div className="flex flex-wrap gap-4 text-slate-400 text-sm">
                            <span className="flex items-center gap-2">
                              <MapPin size={16} />
                              {exp.location}
                            </span>
                            <span className="flex items-center gap-2">
                              <Calendar size={16} />
                              {exp.period}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className="space-y-4 mb-6">
                        <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                          <TrendingUp size={20} className="text-emerald-400" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-3">
                          {exp.highlights.map((highlight, i) => (
                            <li key={i} className="flex gap-3 text-slate-300">
                              <span className="text-emerald-400 mt-1.5 flex-shrink-0">▹</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white flex items-center gap-2 mb-3">
                          <Code size={20} className="text-blue-400" />
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-slate-300 text-sm hover:border-blue-500/50 hover:bg-white/10 transition-all duration-300 shadow-lg"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div className="pt-6 border-t border-slate-700">
                        <h4 className="text-lg font-semibold text-white flex items-center gap-2 mb-3">
                          <Award size={20} className="text-purple-400" />
                          Notable Results
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.achievements.map((achievement, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-purple-300 text-sm shadow-lg"
                            >
                              {achievement}
                            </span>
                          ))}
                        </div>
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
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative max-w-4xl mx-auto bg-white/5 backdrop-blur-2xl rounded-3xl p-12 shadow-2xl border border-white/10 hover:bg-white/10 hover:backdrop-blur-3xl transition-all duration-500">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20">
                  <Zap className="text-emerald-400" size={40} />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-white mb-6">Ready for the Next Challenge</h3>
              <p className="text-xl text-slate-300 leading-relaxed mb-8">
                I'm always excited to take on new projects and opportunities that allow me to push the boundaries 
                of what's possible with technology. Let's build something amazing together.
              </p>
              <div className="flex justify-center gap-4">
                <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-300"></div>
                <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-700"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
