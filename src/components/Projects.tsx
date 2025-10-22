import { ExternalLink, Code, Github, Award, TrendingUp, Users, Zap } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Heart Disease Prediction Platform',
      description: 'Built comprehensive heart disease prediction platform using ML algorithms for early detection and risk assessment.',
      longDescription: 'A revolutionary healthcare platform that leverages advanced machine learning algorithms to predict heart disease risk with unprecedented accuracy. The system processes patient data through ensemble learning models to provide healthcare professionals with reliable diagnostic insights.',
      achievements: [
        'Achieved 94% prediction accuracy using ensemble learning with Random Forest and SVM models',
        'Developed interactive React dashboard for healthcare professionals with patient risk assessment tools',
        'Implemented secure Flask API endpoints for patient data processing with medical data compliance'
      ],
      technologies: ['Python Flask', 'Machine Learning', 'React.js', 'Scikit-learn', 'Medical APIs'],
      gradient: 'from-red-500/20 to-pink-500/20',
      borderColor: 'border-red-500/30',
      iconColor: 'text-red-400',
      bgColor: 'bg-red-500/10',
      stats: { accuracy: '94%', users: 'None', models: '5' },
      category: 'Healthcare AI',
      status: 'inactive',
      demoUrl: '#',
      githubUrl: 'https://github.com/SachinGupta93/Heart-Disease-Prediction'
    },
    {
      title: 'Parkinson Disease Detection Web Platform',
      description: 'Created AI-powered Parkinson\'s disease detection platform using voice analysis for early-stage diagnosis.',
      longDescription: 'An innovative AI-driven platform that analyzes voice patterns to detect early-stage Parkinson\'s disease. The system uses advanced machine learning models trained on voice data to provide non-invasive diagnostic capabilities for healthcare providers.',
      achievements: [
        'Implemented ML models for early-stage disease detection with 89% accuracy using voice pattern analysis',
        'Developed intuitive React frontend with real-time audio processing and result visualization',
        'Integrated secure patient data management with comprehensive diagnostic reporting system'
      ],
      technologies: ['Python Flask', 'React.js', 'TypeScript', 'Machine Learning', 'Audio Processing'],
      gradient: 'from-purple-500/20 to-blue-500/20',
      borderColor: 'border-purple-500/30',
      iconColor: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      stats: { accuracy: '89%', users: 'None', models: '4+' },
      category: 'Medical AI',
      status: 'inactive',
      demoUrl: '#',
      githubUrl: 'https://github.com/SachinGupta93/Parkinson-disease-web'
    },
    {
      title: 'Tech News Aggregator Platform',
      description: 'Developed comprehensive tech news aggregation platform with real-time content curation and personalized experience.',
      longDescription: 'A comprehensive news aggregation platform that curates technology news from multiple sources, providing users with personalized content recommendations. The platform features real-time updates, advanced filtering, and intelligent content categorization.',
      achievements: [
        'Built scalable Node.js backend with MongoDB for efficient data storage and retrieval from multiple sources',
        'Created responsive React frontend with advanced filtering and personalized news feed recommendations',
        'Integrated multiple news APIs with automated content categorization and user authentication system'
      ],
      technologies: ['Node.js', 'React.js', 'MongoDB', 'News APIs', 'Express.js'],
      gradient: 'from-emerald-500/20 to-teal-500/20',
      borderColor: 'border-emerald-500/30',
      iconColor: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10',
      stats: { articles: '10K+', users: 'None', sources: '10+' },
      category: 'Web Application',
      status: 'inactive',
      demoUrl: '#',
      githubUrl: 'https://github.com/SachinGupta93/tech-trend-nexus'
    }
  ];

  const projectStats = [
    { label: 'Projects Completed', value: '10+', icon: Code, color: 'text-blue-400' },
    { label: 'Technologies Used', value: '15+', icon: Award, color: 'text-emerald-400' },
    { label: 'Users Impacted', value: '2K+', icon: Users, color: 'text-purple-400' },
    { label: 'ML Models Built', value: '8+', icon: TrendingUp, color: 'text-orange-400' }
  ];

  return (
    <section id="projects" className="py-32 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-purple-400 text-sm shadow-lg mb-6">
            <Code size={16} />
            <span>Projects</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Featured
            <span className="block bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Explore my portfolio of innovative projects that showcase expertise in AI, healthcare technology, 
            and full-stack development. Each project represents a unique solution to real-world challenges.
          </p>
        </div>

        {/* Project Stats */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {projectStats.map((stat, index) => {
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

        {/* Projects Grid */}
        <div className="max-w-7xl mx-auto space-y-16">
          {projects.map((project, index) => (
            <div key={index} className="group relative">
              {/* Project Card */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                     <div className={`relative bg-white/5 backdrop-blur-2xl rounded-3xl p-10 shadow-2xl border border-white/10 hover:scale-[1.02] transition-all duration-500`}>
                {/* Project Header */}
                <div className="flex flex-col lg:flex-row gap-8 mb-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-white/10 backdrop-blur-xl rounded-xl group-hover:scale-110 transition-transform duration-300 border border-white/20">
                        <Code className={project.iconColor} size={32} />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-3xl font-bold text-white">{project.title}</h3>
                                 <span className="px-3 py-1 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-red-300 text-sm shadow-lg">
                            {project.status}
                          </span>
                        </div>
                        <p className="text-slate-400 text-sm">{project.category}</p>
                      </div>
                    </div>
                    <p className="text-lg text-slate-300 leading-relaxed mb-6">
                      {project.longDescription}
                    </p>
                  </div>

                  {/* Project Stats */}
                  <div className="lg:w-80">
                    <div className="grid grid-cols-3 gap-4">
                      {Object.entries(project.stats).map(([key, value], i) => (
                        <div key={key} className="text-center p-4 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 shadow-lg">
                          <div className="text-2xl font-bold text-white mb-1">{value}</div>
                          <div className="text-slate-400 text-xs capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
                    <Award size={24} className="text-emerald-400" />
                    Key Achievements
                  </h4>
                  <div className="grid md:grid-cols-1 gap-4">
                    {project.achievements.map((achievement, i) => (
                      <div key={i} className="flex gap-3 p-4 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 shadow-lg">
                        <span className="text-emerald-400 mt-1 flex-shrink-0">▹</span>
                        <span className="text-slate-300">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies and Actions */}
                <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                                 className="px-4 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-slate-300 text-sm hover:border-blue-500/50 hover:bg-white/10 transition-all duration-300 shadow-lg"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <a
                      href={project.githubUrl}
                      className="group flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/50"
                    >
                      <Github size={20} className="group-hover:rotate-12 transition-transform" />
                      <span>View on GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-emerald-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative max-w-4xl mx-auto bg-white/5 backdrop-blur-2xl rounded-3xl p-12 shadow-2xl border border-white/10 hover:bg-white/10 hover:backdrop-blur-3xl transition-all duration-500">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20">
                  <Zap className="text-purple-400" size={40} />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-white mb-6">Interested in My Work?</h3>
              <p className="text-xl text-slate-300 leading-relaxed mb-8">
                I'm always excited to discuss new projects and opportunities. Let's collaborate to build 
                something innovative that makes a real impact.
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
