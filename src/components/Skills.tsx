import { Brain, Server, Monitor, Database, Cloud, Users, Code, Lightbulb, MessageSquare, Award, TrendingUp, Zap } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Machine Learning & AI',
      icon: Brain,
      skills: [
        'TensorFlow',
        'Scikit-learn',
        'PyTorch',
        'ML Algorithms',
        'Neural Networks'
      ],
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/50',
      gradient: 'from-purple-500/20 to-pink-500/20'
    },
    {
      title: 'Backend Development',
      icon: Server,
      skills: [
        'Node.js',
        'Python Flask',
        'Express.js',
        'RESTful APIs',
        'Firebase'
      ],
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/50',
      gradient: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      title: 'Frontend Development',
      icon: Monitor,
      skills: [
        'React.js',
        'TypeScript',
        'JavaScript',
        'HTML/CSS',
        'Tailwind CSS'
      ],
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/50',
      gradient: 'from-cyan-500/20 to-blue-500/20'
    },
    {
      title: 'Database Management',
      icon: Database,
      skills: [
        'MongoDB',
        'PostgreSQL',
        'Firebase',
        'SQL',
        'NoSQL'
      ],
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/50',
      gradient: 'from-emerald-500/20 to-teal-500/20'
    },
    {
      title: 'Cloud Computing',
      icon: Cloud,
      skills: [
        'Google Cloud',
        'Firebase Hosting',
        'Cloud Functions',
        'Docker'
      ],
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/50',
      gradient: 'from-orange-500/20 to-red-500/20'
    },
    {
      title: 'API Development',
      icon: Code,
      skills: [
        'REST APIs',
        'GraphQL',
        'API Integration',
        'Webhook Handling',
        'Authentication'
      ],
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/50',
      gradient: 'from-yellow-500/20 to-orange-500/20'
    },
    {
      title: 'Problem Solving',
      icon: Lightbulb,
      skills: [
        'Algorithm Design',
        'System Design',
        'Debugging',
        'Optimization'
      ],
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/10',
      borderColor: 'border-pink-500/50',
      gradient: 'from-pink-500/20 to-purple-500/20'
    },
    {
      title: 'Leadership',
      icon: Users,
      skills: [
        'Team Management',
        'Mentoring',
        'Project Planning',
        'Workshop Organization',
        'Technical Leadership'
      ],
      color: 'text-red-400',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/50',
      gradient: 'from-red-500/20 to-pink-500/20'
    },
    {
      title: 'Team Collaboration',
      icon: MessageSquare,
      skills: [
        'Git/GitHub',
        'Code Review',
        'Documentation',
        'Communication'
      ],
      color: 'text-teal-400',
      bgColor: 'bg-teal-500/10',
      borderColor: 'border-teal-500/50',
      gradient: 'from-teal-500/20 to-emerald-500/20'
    }
  ];

  const skillStats = [
    { label: 'Technologies Used', value: '20+', icon: Award, color: 'text-blue-400' },
    { label: 'Years Experience', value: '2+', icon: TrendingUp, color: 'text-emerald-400' },
    { label: 'Projects Completed', value: '10+', icon: Code, color: 'text-purple-400' },
    { label: 'Team Members Led', value: '5+', icon: Users, color: 'text-orange-400' }
  ];

  return (
    <section id="skills" className="py-32 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500/5 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-purple-400 text-sm shadow-lg mb-6">
            <Award size={16} />
            <span>Skills & Expertise</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Technical
            <span className="block bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent">
              Arsenal
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            A comprehensive collection of technologies and skills that I've mastered through hands-on experience, 
            continuous learning, and real-world project implementation.
          </p>
        </div>

        {/* Skills Stats */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skillStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="group bg-white/5 backdrop-blur-2xl rounded-2xl p-6 shadow-xl border border-white/10 hover:border-purple-500/30 hover:bg-white/10 hover:backdrop-blur-3xl transition-all duration-300 hover:scale-105"
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

        {/* Skills Grid */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className={`relative bg-white/5 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl border border-white/10 hover:scale-105 transition-all duration-500`}>
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-white/10 backdrop-blur-xl rounded-xl group-hover:scale-110 transition-transform duration-300 border border-white/20">
                      <Icon className={category.color} size={28} />
                    </div>
                    <h3 className={`text-2xl font-bold ${category.color}`}>
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-slate-300 text-sm hover:border-blue-500/50 hover:bg-white/10 transition-all duration-300 shadow-lg"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Section - Learning Philosophy */}
        <div className="text-center mt-20">
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-emerald-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative max-w-4xl mx-auto bg-white/5 backdrop-blur-2xl rounded-3xl p-12 shadow-2xl border border-white/10 hover:bg-white/10 hover:backdrop-blur-3xl transition-all duration-500">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20">
                  <Zap className="text-purple-400" size={40} />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-white mb-6">Continuous Learning</h3>
              <p className="text-xl text-slate-300 leading-relaxed mb-8">
                Technology evolves rapidly, and so do I. I'm committed to staying at the forefront of innovation, 
                constantly learning new technologies and methodologies to deliver cutting-edge solutions.
              </p>
              <div className="flex justify-center gap-4">
                <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse delay-300"></div>
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-700"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
