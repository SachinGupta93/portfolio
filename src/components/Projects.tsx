import { Code, Github, ArrowUpRight } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Heart Disease Prediction',
      description: 'ML platform for heart disease risk prediction with 94% accuracy using ensemble learning.',
      category: 'Healthcare AI',
      stats: { accuracy: '94%', models: '5' },
      technologies: ['Python', 'ML', 'React', 'Flask'],
      color: '#FF3CAC',
      size: 'large',
      githubUrl: 'https://github.com/SachinGupta93/Heart-Disease-Prediction'
    },
    {
      title: 'Parkinson Detection',
      description: 'AI-driven voice pattern analysis for early-stage detection.',
      category: 'Medical AI',
      stats: { accuracy: '89%' },
      technologies: ['Python', 'Audio ML', 'React'],
      color: '#A855F7',
      size: 'medium',
      githubUrl: 'https://github.com/SachinGupta93/Parkinson-disease-web'
    },
    {
      title: 'Tech News Aggregator',
      description: 'News platform with personalized recommendations.',
      category: 'Web App',
      stats: { sources: '10+' },
      technologies: ['Node.js', 'MongoDB', 'React'],
      color: '#00F5FF',
      size: 'medium',
      githubUrl: 'https://github.com/SachinGupta93/tech-trend-nexus'
    }
  ];

  return (
    <section id="projects" className="py-20 sm:py-32 relative overflow-x-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-mesh-dark"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF3CAC]/20 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header - Centered */}
        <div className="text-center mb-12 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6">
            <Code size={14} className="text-[#FF3CAC]" />
            <span className="text-sm text-white/60">Projects</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-4">
            Featured <span className="text-gradient-pink">Work</span>
          </h2>
          <p className="text-base sm:text-xl text-white/40 max-w-2xl mx-auto">
            Innovative solutions in AI, healthcare tech, and full-stack development
          </p>
        </div>

        {/* NEW STRUCTURE: Masonry/Bento Grid Layout */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Large Featured Project */}
            <div className="md:col-span-2">
              <div
                className="group relative card-dark card-animated card-shimmer p-0 overflow-hidden glow-border"
                style={{ borderColor: `${projects[0].color}20`, '--glow-color': `${projects[0].color}40` } as React.CSSProperties}
              >
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Left - Content */}
                  <div className="p-10">
                    <div className="flex items-center gap-2 mb-6">
                      <span
                        className="px-3 py-1 text-xs font-medium rounded-full"
                        style={{ backgroundColor: `${projects[0].color}15`, color: projects[0].color, border: `1px solid ${projects[0].color}30` }}
                      >
                        {projects[0].category}
                      </span>
                      <span className="px-3 py-1 bg-[#00FF88]/15 text-[#00FF88] text-xs font-medium rounded-full border border-[#00FF88]/30">
                        Featured
                      </span>
                    </div>

                    <h3 className="text-3xl font-bold text-white mb-4">{projects[0].title}</h3>
                    <p className="text-lg text-white/60 leading-relaxed mb-8">
                      {projects[0].description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {projects[0].technologies.map((tech, i) => (
                        <span key={i} className="tag text-sm">{tech}</span>
                      ))}
                    </div>

                    <a
                      href={projects[0].githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-black group/btn"
                      style={{ background: `linear-gradient(135deg, ${projects[0].color}, ${projects[0].color}80)` }}
                    >
                      <Github size={18} />
                      <span>View Project</span>
                      <ArrowUpRight size={16} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>

                  {/* Right - Stats Display */}
                  <div
                    className="p-10 flex flex-col justify-center items-center"
                    style={{ background: `linear-gradient(135deg, ${projects[0].color}10, ${projects[0].color}05)` }}
                  >
                    <div className="text-center">
                      <div className="text-8xl font-bold mb-2" style={{ color: projects[0].color }}>
                        {projects[0].stats.accuracy}
                      </div>
                      <div className="text-white/40 text-lg">Prediction Accuracy</div>
                    </div>
                    <div className="mt-8 flex gap-6">
                      <div className="text-center p-4 bg-black/30 rounded-2xl">
                        <div className="text-3xl font-bold text-white">{projects[0].stats.models}</div>
                        <div className="text-sm text-white/40">ML Models</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Smaller Project Cards */}
            {projects.slice(1).map((project, index) => (
              <div
                key={index}
                className="group card-dark card-animated card-shimmer p-8 glow-border"
                style={{ borderColor: `${project.color}20`, '--glow-color': `${project.color}40` } as React.CSSProperties}
              >
                {/* Category Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span
                    className="px-3 py-1 text-xs font-medium rounded-full"
                    style={{ backgroundColor: `${project.color}15`, color: project.color, border: `1px solid ${project.color}30` }}
                  >
                    {project.category}
                  </span>
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: `linear-gradient(135deg, ${project.color}, ${project.color}80)` }}
                  >
                    <Code size={18} className="text-black" />
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-white/50 leading-relaxed mb-6">{project.description}</p>

                {/* Stats */}
                <div className="flex gap-4 mb-6">
                  {Object.entries(project.stats).map(([key, value]) => (
                    <div key={key} className="text-center p-3 bg-white/5 rounded-xl flex-1">
                      <div className="text-2xl font-bold" style={{ color: project.color }}>{value}</div>
                      <div className="text-xs text-white/40 capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tag text-xs">{tech}</span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors group/link"
                >
                  <Github size={16} />
                  <span>View on GitHub</span>
                  <ArrowUpRight size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* View All Projects Link */}
        <div className="text-center mt-16">
          <a
            href="https://github.com/SachinGupta93"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-full text-white/60 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all group"
          >
            <Github size={20} />
            <span className="font-medium">View All Projects on GitHub</span>
            <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
