import { Award, Calendar, ExternalLink, Trophy, FileText, ArrowUpRight } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    {
      title: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
      issuer: 'Oracle University',
      date: 'August 25, 2025',
      description: 'Oracle Certified Foundations Associate certification recognizing expertise in AI foundations.',
      skills: ['Oracle Cloud', 'AI Foundations', 'Cloud Infrastructure'],
      status: 'Active',
      color: '#FF3CAC',
      certificateLink: 'https://drive.google.com/file/d/1KtRDYVkF8WA27MJwg3L9_o8mf_cDU7Ik/view?usp=sharing'
    },
    {
      title: 'GenAI Powered Data Analytics Job Simulation',
      issuer: 'Tata & Forage',
      date: 'August 15, 2025',
      description: 'Completed practical tasks in exploratory data analysis and AI-driven predictions.',
      skills: ['Data Analytics', 'GenAI', 'Business Intelligence'],
      status: 'Completed',
      color: '#00F5FF',
      certificateLink: 'https://drive.google.com/file/d/1ewaAanQNBjECOBytpuQ7wokQWRYq0ZP1/view?usp=sharing'
    },
    {
      title: 'Zscaler Zero Trust Associate (ZTCA)',
      issuer: 'Zscaler Academy',
      date: 'May 2024 - May 2027',
      description: 'Certification in Zero Trust security architecture and network security.',
      skills: ['Zero Trust', 'Network Security', 'Cybersecurity'],
      status: 'Active',
      color: '#A855F7',
      certificateLink: 'https://drive.google.com/file/d/1I3F86Ph__No6UqYOHksY1f9xqT2sbcWE/view?usp=sharing'
    },
    {
      title: 'Machine Learning with Python Developer',
      issuer: 'freeCodeCamp',
      date: 'February 1, 2025',
      description: 'Comprehensive ML certification representing ~300 hours of work.',
      skills: ['Machine Learning', 'Python', 'Data Science'],
      status: 'Active',
      color: '#00FF88',
      certificateLink: 'https://drive.google.com/file/d/1S1dFgr-g3xaFXm1LGPmA7Tq7Xn815_aB/view?usp=sharing'
    },
    {
      title: 'UDHGAM 24HR Hackathon',
      issuer: 'Woxsen University',
      date: 'February 19-21, 2025',
      description: 'Participated in 24-hour hackathon at Tech Fest 2025.',
      skills: ['Hackathon', 'Problem Solving', 'Innovation'],
      status: 'Completed',
      color: '#FF8A00',
      certificateLink: 'https://drive.google.com/file/d/1kJsWdpaU4vHUI2y57Nu7JOpNU_h7hwhD/view?usp=sharing'
    },
    {
      title: 'IEEE Xtreme 18.0 Programming',
      issuer: 'IEEE',
      date: 'October 26, 2024',
      description: 'Competed with 19,000+ participants worldwide.',
      skills: ['Competitive Programming', 'Algorithms', 'Team Work'],
      status: 'Completed',
      color: '#00F5FF',
      certificateLink: 'https://drive.google.com/file/d/11XRybvWWRNB6srKimwgVzDHmzXYGEZY2/view?usp=sharing'
    },
    {
      title: 'IGNIS XR-AI Workshop',
      issuer: 'VBIT',
      date: 'November 7-9, 2024',
      description: '3-day Workshop and Hackathon on XR-AI.',
      skills: ['XR Technology', 'AI', 'Data Science'],
      status: 'Completed',
      color: '#A855F7',
      certificateLink: 'https://drive.google.com/file/d/1zJIZNX45ZnXqOoCmmZ7PoBMO96YQJtt9/view?usp=sharing'
    },
    {
      title: 'Agentic AI Hackathon',
      issuer: 'IBC Media x JCurve',
      date: 'October 2025',
      description: 'Built and submitted an AI agent at the hackathon.',
      skills: ['Agentic AI', 'AI Development', 'Innovation'],
      status: 'Completed',
      color: '#FF3CAC',
      certificateLink: 'https://drive.google.com/file/d/1XkwDRm8TDiHyVolvBfe5ijCy1653P61B/view?usp=sharing'
    }
  ];

  const stats = [
    { label: 'Certifications', value: '8', icon: Award, color: '#00F5FF' },
    { label: 'Hackathons', value: '4', icon: Trophy, color: '#FF3CAC' },
    { label: 'Training Hours', value: '300+', icon: FileText, color: '#A855F7' },
    { label: 'Active Certs', value: '4', icon: Calendar, color: '#00FF88' }
  ];

  return (
    <section id="certifications" className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 gradient-mesh-dark"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF8A00]/20 to-transparent"></div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-[#FF8A00]/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] bg-[#A855F7]/10 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-xl mb-6">
            <Award size={16} className="text-[#FF8A00]" />
            <span className="text-sm font-medium text-white/80">Certifications</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Professional
            <span className="block" style={{ background: 'linear-gradient(135deg, #FF8A00, #FF3CAC)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Certifications
            </span>
          </h2>
          <p className="text-xl text-white/50 max-w-3xl mx-auto leading-relaxed">
            Continuous learning through hackathons, workshops, and hands-on experience in cutting-edge technologies.
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

        {/* Certifications Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="card-dark p-6 hover-lift group"
                style={{ borderColor: `${cert.color}15` }}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="icon-box-sm group-hover:scale-110 transition-transform"
                    style={{ borderColor: `${cert.color}30`, background: `${cert.color}20` }}
                  >
                    <Award size={18} style={{ color: cert.color }} />
                  </div>
                  <span
                    className="px-2.5 py-1 text-xs rounded-full font-medium"
                    style={{
                      backgroundColor: cert.status === 'Active' ? 'rgba(0, 255, 136, 0.15)' : 'rgba(168, 85, 247, 0.15)',
                      color: cert.status === 'Active' ? '#00FF88' : '#A855F7',
                      border: `1px solid ${cert.status === 'Active' ? 'rgba(0, 255, 136, 0.3)' : 'rgba(168, 85, 247, 0.3)'}`
                    }}
                  >
                    {cert.status}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2 line-clamp-2">{cert.title}</h3>
                <p className="text-sm text-white/40 mb-1">{cert.issuer}</p>
                <div className="flex items-center gap-1.5 text-white/30 text-xs mb-3">
                  <Calendar size={10} />
                  <span>{cert.date}</span>
                </div>

                <p className="text-white/50 text-sm leading-relaxed mb-4 line-clamp-2">
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {cert.skills.map((skill, i) => (
                    <span key={i} className="px-2.5 py-1 bg-white/5 text-white/50 text-xs rounded-full border border-white/10">
                      {skill}
                    </span>
                  ))}
                </div>

                {/* View Certificate */}
                <a
                  href={cert.certificateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white/60 hover:text-white text-sm font-medium rounded-xl transition-all group/btn"
                >
                  <ExternalLink size={14} className="group-hover/btn:rotate-12 transition-transform" />
                  <span>View Certificate</span>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="relative max-w-4xl mx-auto p-12 md:p-16 rounded-[40px] overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF8A00]/20 to-[#FF3CAC]/20"></div>
            <div className="absolute inset-0 bg-black/70 backdrop-blur-xl"></div>
            <div className="absolute inset-0 border border-[#FF8A00]/30 rounded-[40px]"></div>

            <div className="relative z-10">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-[#FF8A00]/20 border border-[#FF8A00]/30 flex items-center justify-center">
                <Trophy className="text-[#FF8A00]" size={40} />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Always Learning, Always Growing</h3>
              <p className="text-xl text-white/70 leading-relaxed max-w-2xl mx-auto">
                I believe in continuous learning and staying updated with the latest technologies through
                hands-on participation in hackathons, workshops, and collaborative projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
