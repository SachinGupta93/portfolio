import { Code, Github, Award, TrendingUp, Users, Sparkles, ArrowUpRight } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Heart Disease Prediction Platform',
      description: 'A revolutionary healthcare platform that leverages advanced machine learning algorithms to predict heart disease risk with unprecedented accuracy.',
      achievements: [
        'Achieved 94% prediction accuracy using ensemble learning with Random Forest and SVM models',
        'Developed interactive React dashboard for healthcare professionals',
        'Implemented secure Flask API endpoints with medical data compliance'
      ],
      technologies: ['Python Flask', 'Machine Learning', 'React.js', 'Scikit-learn', 'Medical APIs'],
      color: '#FF3CAC',
      stats: { accuracy: '94%', models: '5' },
      category: 'Healthcare AI',
      githubUrl: 'https://github.com/SachinGupta93/Heart-Disease-Prediction'
    },
    {
      title: 'Parkinson Disease Detection',
      description: 'An innovative AI-driven platform that analyzes voice patterns to detect early-stage Parkinson\'s disease through non-invasive diagnostic capabilities.',
      achievements: [
        'Implemented ML models with 89% accuracy using voice pattern analysis',
        'Developed intuitive React frontend with real-time audio processing',
        'Integrated secure patient data management system'
      ],
      technologies: ['Python Flask', 'React.js', 'TypeScript', 'Machine Learning', 'Audio Processing'],
      color: '#A855F7',
      stats: { accuracy: '89%', models: '4+' },
      category: 'Medical AI',
      githubUrl: 'https://github.com/SachinGupta93/Parkinson-disease-web'
    },
    {
      title: 'Tech News Aggregator',
      description: 'A comprehensive news aggregation platform that curates technology news from multiple sources with personalized content recommendations.',
      achievements: [
        'Built scalable Node.js backend with MongoDB for efficient data retrieval',
        'Created responsive React frontend with advanced filtering',
        'Integrated multiple news APIs with automated content categorization'
      ],
      technologies: ['Node.js', 'React.js', 'MongoDB', 'News APIs', 'Express.js'],
      color: '#00F5FF',
      stats: { articles: '10K+', sources: '10+' },
      category: 'Web Application',
      githubUrl: 'https://github.com/SachinGupta93/tech-trend-nexus'
    }
  ];

  const projectStats = [
    { label: 'Projects Completed', value: '10+', icon: Code, color: '#00F5FF' },
    { label: 'Technologies Used', value: '15+', icon: Award, color: '#A855F7' },
    { label: 'Users Impacted', value: '2K+', icon: Users, color: '#FF3CAC' },
    { label: 'ML Models Built', value: '8+', icon: TrendingUp, color: '#00FF88' }
  ];

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 gradient-mesh-dark"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF3CAC]/20 to-transparent"></div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 right-10 w-[400px] h-[400px] bg-[#FF3CAC]/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 left-10 w-[300px] h-[300px] bg-[#A855F7]/10 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-xl mb-6">
            <Code size={16} className="text-[#FF3CAC]" />
            <span className="text-sm font-medium text-white/80">Projects</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Featured
            <span className="block text-gradient-pink">Projects</span>
          </h2>
          <p className="text-xl text-white/50 max-w-3xl mx-auto leading-relaxed">
            Explore my portfolio of innovative projects that showcase expertise in AI, healthcare technology,
            and full-stack development.
          </p>
        </div>

        {/* Project Stats */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {projectStats.map((stat) => {
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

        {/* Projects Grid */}
        <div className="max-w-7xl mx-auto space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card-dark overflow-hidden hover-lift group"
              style={{ borderColor: `${project.color}20` }}
            >
              <div className="grid lg:grid-cols-3 gap-0">
                {/* Left - Project Info */}
                <div className="lg:col-span-2 p-10">
                  {/* Project Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div
                      className="icon-box-lg border-0 group-hover:scale-110 transition-transform"
                      style={{ background: `linear-gradient(135deg, ${project.color}, ${project.color}80)`, boxShadow: `0 0 40px ${project.color}30` }}
                    >
                      <Code className="text-white" size={32} />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                      </div>
                      <p className="text-white/40 text-sm">{project.category}</p>
                    </div>
                  </div>

                  <p className="text-lg text-white/60 leading-relaxed mb-8">
                    {project.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-8">
                    <h4 className="text-sm font-bold text-white flex items-center gap-2 mb-4">
                      <Award size={14} style={{ color: project.color }} />
                      Key Achievements
                    </h4>
                    <div className="space-y-3">
                      {project.achievements.map((achievement, i) => (
                        <div key={i} className="flex gap-3 p-4 bg-white/5 rounded-xl border border-white/5">
                          <span style={{ color: project.color }} className="mt-0.5 flex-shrink-0">✓</span>
                          <span className="text-white/60 text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h4 className="text-sm font-bold text-white mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="tag">{tech}</span>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 text-black font-semibold rounded-full hover:shadow-lg transition-all group/btn"
                    style={{ background: `linear-gradient(135deg, ${project.color}, ${project.color}80)`, boxShadow: `0 0 20px ${project.color}30` }}
                  >
                    <Github size={18} className="group-hover/btn:rotate-12 transition-transform" />
                    <span>View on GitHub</span>
                    <ArrowUpRight size={16} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                </div>

                {/* Right - Visual Stats */}
                <div className="lg:col-span-1 p-10 flex flex-col justify-center" style={{ background: `linear-gradient(135deg, ${project.color}10, ${project.color}05)` }}>
                  <div className="space-y-6">
                    {Object.entries(project.stats).map(([key, value]) => (
                      <div key={key} className="text-center p-6 bg-black/40 rounded-2xl border border-white/10 backdrop-blur-xl">
                        <div className="text-5xl font-bold mb-2" style={{ color: project.color }}>{value}</div>
                        <div className="text-white/40 text-sm capitalize font-medium">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="relative max-w-4xl mx-auto p-12 md:p-16 rounded-[40px] overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 gradient-pink opacity-20"></div>
            <div className="absolute inset-0 bg-black/70 backdrop-blur-xl"></div>
            <div className="absolute inset-0 border border-[#FF3CAC]/30 rounded-[40px]"></div>

            <div className="relative z-10">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-[#FF3CAC]/20 border border-[#FF3CAC]/30 flex items-center justify-center">
                <Sparkles className="text-[#FF3CAC]" size={40} />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Interested in My Work?</h3>
              <p className="text-xl text-white/70 leading-relaxed mb-8 max-w-2xl mx-auto">
                I'm always excited to discuss new projects and opportunities. Let's collaborate to build
                something innovative that makes a real impact.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 gradient-pink text-white font-semibold rounded-full hover:shadow-lg hover:shadow-[#FF3CAC]/30 hover:scale-105 transition-all group"
              >
                <span>Start a Conversation</span>
                <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
