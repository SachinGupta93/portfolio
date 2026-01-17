import { Brain, Server, Monitor, Database, Cloud, Code, Users, Lightbulb, MessageSquare } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    { title: 'ML & AI', icon: Brain, skills: ['TensorFlow', 'Scikit-learn', 'PyTorch'], color: '#A855F7' },
    { title: 'Backend', icon: Server, skills: ['Node.js', 'Python Flask', 'REST APIs'], color: '#00F5FF' },
    { title: 'Frontend', icon: Monitor, skills: ["HTML",'CSS','React.js', 'TypeScript', 'Tailwind CSS'], color: '#FF3CAC' },
    { title: 'Database', icon: Database, skills: ['MySQL', 'MongoDB', 'PostgreSQL', 'Firebase'], color: '#00FF88' },
    { title: 'Cloud & DevOps', icon: Cloud, skills: ['Google Cloud', 'Firebase', 'Docker'], color: '#FF8A00' },
    { title: 'API Dev', icon: Code, skills: ['REST', 'GraphQL', 'Authentication'], color: '#00F5FF' },
  ];

  const softSkills = [
    { title: 'Problem Solving', icon: Lightbulb, color: '#A855F7' },
    { title: 'Leadership', icon: Users, color: '#FF3CAC' },
    { title: 'Communication', icon: MessageSquare, color: '#00FF88' },
  ];

  // All skills for the animated marquee
  const allSkills = [
    'TensorFlow', 'React.js', 'Node.js', 'Python', 'TypeScript', 'MySQL', 'MongoDB', 'PostgreSQL',
    'Docker', 'Flask', 'Firebase', 'Google Cloud', 'Scikit-learn', 'PyTorch', 'GraphQL',
    'Express.js', 'Tailwind CSS', 'JavaScript', 'HTML', 'CSS', 'Git', 'REST APIs'
  ];

  return (
    <section id="skills" className="py-20 sm:py-32 relative overflow-x-hidden bg-carbon">
      {/* Background */}
      <div className="absolute inset-0 gradient-mesh-dark"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#A855F7]/20 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6">
            <Code size={14} className="text-[#A855F7]" />
            <span className="text-sm text-white/60">Skills</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-4">
            Technical <span className="text-gradient-purple">Arsenal</span>
          </h2>
        </div>

        {/* NEW: Animated Skill Marquee */}
        <div className="relative mb-20 overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#111111] to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#111111] to-transparent z-10"></div>

          <div className="flex gap-4 animate-marquee">
            {[...allSkills, ...allSkills].map((skill, i) => (
              <span
                key={i}
                className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white/60 whitespace-nowrap text-sm font-medium hover:bg-white/10 hover:text-white transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* NEW STRUCTURE: Hexagonal/Orbital Style Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              const isLarge = index === 0 || index === 2;

              return (
                <div
                  key={index}
                  className={`group card-dark p-6 md:p-8 hover-lift ${isLarge ? 'md:row-span-1' : ''}`}
                  style={{ borderColor: `${category.color}15` }}
                >
                  {/* Icon & Title Row */}
                  <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div
                      className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform"
                      style={{ background: `linear-gradient(135deg, ${category.color}, ${category.color}80)`, boxShadow: `0 0 30px ${category.color}20` }}
                    >
                      <Icon size={20} className="text-black" />
                    </div>
                    <h3 className="text-base sm:text-xl font-bold text-white">{category.title}</h3>
                  </div>

                  {/* Skills as Pills */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-2 sm:px-3 py-1 sm:py-1.5 bg-white/5 text-white/60 text-xs sm:text-sm rounded-full border border-white/10 hover:bg-white/10 hover:text-white transition-all cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Soft Skills Row */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {softSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className="group text-center p-4 sm:p-6 card-dark hover-lift"
                  style={{ borderColor: `${skill.color}15` }}
                >
                  <div
                    className="w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: `${skill.color}15`, border: `1px solid ${skill.color}30` }}
                  >
                    <Icon size={24} style={{ color: skill.color }} />
                  </div>
                  <h4 className="font-bold text-white text-sm sm:text-base">{skill.title}</h4>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Row */}
        <div className="mt-10 sm:mt-16 max-w-4xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            <div className="text-center p-4 sm:p-6 bg-white/[0.02] border border-white/[0.06] rounded-xl sm:rounded-2xl">
              <div className="text-2xl sm:text-4xl font-bold text-[#00F5FF]">20+</div>
              <div className="text-xs sm:text-sm text-white/40 mt-1">Technologies</div>
            </div>
            <div className="text-center p-4 sm:p-6 bg-white/[0.02] border border-white/[0.06] rounded-xl sm:rounded-2xl">
              <div className="text-2xl sm:text-4xl font-bold text-[#A855F7]">2+</div>
              <div className="text-xs sm:text-sm text-white/40 mt-1">Years</div>
            </div>
            <div className="text-center p-4 sm:p-6 bg-white/[0.02] border border-white/[0.06] rounded-xl sm:rounded-2xl">
              <div className="text-2xl sm:text-4xl font-bold text-[#FF3CAC]">10+</div>
              <div className="text-xs sm:text-sm text-white/40 mt-1">Projects</div>
            </div>
            <div className="text-center p-4 sm:p-6 bg-white/[0.02] border border-white/[0.06] rounded-xl sm:rounded-2xl">
              <div className="text-2xl sm:text-4xl font-bold text-[#00FF88]">5+</div>
              <div className="text-xs sm:text-sm text-white/40 mt-1">Team Led</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
