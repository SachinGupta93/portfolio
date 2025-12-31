import { Brain, Server, Monitor, Database, Cloud, Users, Code, Lightbulb, MessageSquare, Award, TrendingUp, Zap } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Machine Learning & AI',
      icon: Brain,
      skills: ['TensorFlow', 'Scikit-learn', 'PyTorch', 'ML Algorithms', 'Neural Networks'],
      color: '#A855F7'
    },
    {
      title: 'Backend Development',
      icon: Server,
      skills: ['Node.js', 'Python Flask', 'Express.js', 'RESTful APIs', 'Firebase'],
      color: '#00F5FF'
    },
    {
      title: 'Frontend Development',
      icon: Monitor,
      skills: ['React.js', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Tailwind CSS'],
      color: '#FF3CAC'
    },
    {
      title: 'Database Management',
      icon: Database,
      skills: ['MongoDB', 'PostgreSQL', 'Firebase', 'SQL', 'NoSQL'],
      color: '#00FF88'
    },
    {
      title: 'Cloud Computing',
      icon: Cloud,
      skills: ['Google Cloud', 'Firebase Hosting', 'Cloud Functions', 'Docker'],
      color: '#FF8A00'
    },
    {
      title: 'API Development',
      icon: Code,
      skills: ['REST APIs', 'GraphQL', 'API Integration', 'Authentication'],
      color: '#00F5FF'
    },
    {
      title: 'Problem Solving',
      icon: Lightbulb,
      skills: ['Algorithm Design', 'System Design', 'Debugging', 'Optimization'],
      color: '#A855F7'
    },
    {
      title: 'Leadership',
      icon: Users,
      skills: ['Team Management', 'Mentoring', 'Project Planning', 'Workshops'],
      color: '#FF3CAC'
    },
    {
      title: 'Collaboration',
      icon: MessageSquare,
      skills: ['Git/GitHub', 'Code Review', 'Documentation', 'Communication'],
      color: '#00FF88'
    }
  ];

  const skillStats = [
    { label: 'Technologies Used', value: '20+', icon: Award, color: '#00F5FF' },
    { label: 'Years Experience', value: '2+', icon: TrendingUp, color: '#A855F7' },
    { label: 'Projects Completed', value: '10+', icon: Code, color: '#FF3CAC' },
    { label: 'Team Members Led', value: '5+', icon: Users, color: '#00FF88' }
  ];

  return (
    <section id="skills" className="py-32 relative overflow-hidden bg-carbon">
      {/* Background Effects */}
      <div className="absolute inset-0 gradient-mesh-dark"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00F5FF]/20 to-transparent"></div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-[#A855F7]/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/3 left-0 w-[300px] h-[300px] bg-[#00F5FF]/10 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-xl mb-6">
            <Award size={16} className="text-[#A855F7]" />
            <span className="text-sm font-medium text-white/80">Skills & Expertise</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Technical
            <span className="block text-gradient-purple">Arsenal</span>
          </h2>
          <p className="text-xl text-white/50 max-w-3xl mx-auto leading-relaxed">
            A comprehensive collection of technologies and skills mastered through hands-on experience
            and real-world project implementation.
          </p>
        </div>

        {/* Skills Stats */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skillStats.map((stat) => {
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

        {/* Skills Grid - Bento Box Style */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <div
                key={index}
                className="card-dark p-8 hover-lift group"
                style={{ borderColor: `${category.color}15` }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="icon-box group-hover:scale-110 transition-transform"
                    style={{ borderColor: `${category.color}30`, background: `${category.color}15` }}
                  >
                    <Icon size={24} style={{ color: category.color }} />
                  </div>
                  <h3 className="text-lg font-bold text-white">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-white/5 text-white/60 text-sm rounded-full border border-white/10 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Section - Learning Philosophy */}
        <div className="text-center mt-20">
          <div className="relative max-w-4xl mx-auto p-12 md:p-16 rounded-[40px] overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 gradient-purple opacity-20"></div>
            <div className="absolute inset-0 bg-black/70 backdrop-blur-xl"></div>
            <div className="absolute inset-0 border border-[#A855F7]/30 rounded-[40px]"></div>

            <div className="relative z-10">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-[#A855F7]/20 border border-[#A855F7]/30 flex items-center justify-center">
                <Zap className="text-[#A855F7]" size={40} />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Continuous Learning</h3>
              <p className="text-xl text-white/70 leading-relaxed max-w-2xl mx-auto">
                Technology evolves rapidly, and so do I. I'm committed to staying at the forefront of innovation,
                constantly learning new technologies and methodologies to deliver cutting-edge solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
