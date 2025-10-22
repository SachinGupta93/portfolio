import { Award, Calendar, ExternalLink, CheckCircle, Star, Trophy, FileText } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    {
      title: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
      issuer: 'Oracle University',
      date: 'August 25, 2025',
      description: 'Oracle Certified Foundations Associate certification recognizing expertise in AI foundations and Oracle Cloud Infrastructure.',
      skills: ['Oracle Cloud', 'AI Foundations', 'Cloud Infrastructure', 'Oracle Certified'],
      status: 'Active',
      color: 'text-red-400',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/30',
      gradient: 'from-red-500/20 to-orange-500/20',
      certificateLink: 'https://drive.google.com/file/d/1KtRDYVkF8WA27MJwg3L9_o8mf_cDU7Ik/view?usp=sharing' // Add your Google Drive link here
    },
    {
      title: 'GenAI Powered Data Analytics Job Simulation',
      issuer: 'Tata & Forage',
      date: 'August 15, 2025',
      description: 'Completed practical tasks in exploratory data analysis, AI-driven predictions, business reporting, and implementing AI-driven collections strategy.',
      skills: ['Data Analytics', 'GenAI', 'Risk Profiling', 'Business Intelligence', 'AI Implementation'],
      status: 'Completed',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30',
      gradient: 'from-blue-500/20 to-cyan-500/20',
      certificateLink: 'https://drive.google.com/file/d/1ewaAanQNBjECOBytpuQ7wokQWRYq0ZP1/view?usp=sharing' // Add your Google Drive link here
    },
    {
      title: 'Zscaler Zero Trust Associate (ZTCA) Certification',
      issuer: 'Zscaler Academy',
      date: 'May 21, 2024 - May 21, 2027',
      description: 'Earned certification in Zero Trust security architecture and network security best practices. CPE Credits: 6.',
      skills: ['Zero Trust Security', 'Network Security', 'Zscaler', 'Cybersecurity', 'Cloud Security'],
      status: 'Active',
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/30',
      gradient: 'from-cyan-500/20 to-blue-500/20',
      certificateLink: 'https://drive.google.com/file/d/1I3F86Ph__No6UqYOHksY1f9xqT2sbcWE/view?usp=sharing' // Add your Google Drive link here
    },
    {
      title: 'Machine Learning with Python Developer Certification',
      issuer: 'freeCodeCamp',
      date: 'February 1, 2025',
      description: 'Successfully completed comprehensive Machine Learning with Python certification, representing approximately 300 hours of work.',
      skills: ['Machine Learning', 'Python', 'Data Science', 'Neural Networks', 'Algorithm Development'],
      status: 'Active',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30',
      gradient: 'from-purple-500/20 to-pink-500/20',
      certificateLink: 'https://drive.google.com/file/d/1S1dFgr-g3xaFXm1LGPmA7Tq7Xn815_aB/view?usp=sharing' // Add your Google Drive link here
    },
    {
      title: 'UDHGAM 24HR Hackathon Participation',
      issuer: 'Woxsen University - Tech Fest 2025',
      date: 'February 19-21, 2025',
      description: 'Participated in the UDHGAM 24-hour hackathon organized by GeeksforGeeks, Bondada Group, and Woxsen University at Tech Fest 2025.',
      skills: ['Hackathon', 'Problem Solving', 'Team Collaboration', 'Innovation'],
      status: 'Completed',
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/30',
      gradient: 'from-orange-500/20 to-yellow-500/20',
      certificateLink: 'https://drive.google.com/file/d/1kJsWdpaU4vHUI2y57Nu7JOpNU_h7hwhD/view?usp=sharing' // Add your Google Drive link here
    },
    {
      title: 'IEEE Xtreme 18.0 Programming Competition',
      issuer: 'IEEE',
      date: 'October 26, 2024',
      description: 'Participated in IEEEXtreme 18.0 Programming Competition with team IEEEVBITSB11, competing with 19,000+ participants worldwide.',
      skills: ['Competitive Programming', 'Algorithm Design', 'Problem Solving', 'Team Collaboration'],
      status: 'Completed',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30',
      gradient: 'from-blue-500/20 to-indigo-500/20',
      certificateLink: 'https://drive.google.com/file/d/11XRybvWWRNB6srKimwgVzDHmzXYGEZY2/view?usp=sharing' // Add your Google Drive link here
    },
    {
      title: 'IGNIS XR-AI Workshop and Hackathon',
      issuer: 'Vignana Bharathi Institute of Technology',
      date: 'November 7-9, 2024',
      description: 'Participated in a 3-day Workshop and Hackathon on XR-AI organized by Data Vedhi.Club in association with the Department of CSE (Data Science).',
      skills: ['XR Technology', 'AI', 'Data Science', 'Hackathon'],
      status: 'Completed',
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/30',
      gradient: 'from-emerald-500/20 to-teal-500/20',
      certificateLink: 'https://drive.google.com/file/d/1zJIZNX45ZnXqOoCmmZ7PoBMO96YQJtt9/view?usp=sharing' // Add your Google Drive link here
    },
    {
      title: 'Agentic AI Hackathon - Student Participation',
      issuer: 'IBC Media, powered by JCurve',
      date: 'October 2025',
      description: 'Successfully built and submitted an AI agent during the Agentic AI Hackathon powered by JCurve. Work reflects the mindset of a true builder, combining curiosity, creativity, and real-world execution to shape the future with AI.',
      skills: ['Agentic AI', 'AI Development', 'Machine Learning', 'Problem Solving', 'Innovation'],
      status: 'Completed',
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/10',
      borderColor: 'border-pink-500/30',
      gradient: 'from-pink-500/20 to-rose-500/20',
      certificateLink: 'https://drive.google.com/file/d/1XkwDRm8TDiHyVolvBfe5ijCy1653P61B/view?usp=sharing'
    }
  ];

  const stats = [
    { label: 'Certifications Earned', value: '8', icon: Award, color: 'text-orange-400' },
    { label: 'Hackathons', value: '4', icon: Trophy, color: 'text-blue-400' },
    { label: 'Training Hours', value: '300+', icon: FileText, color: 'text-emerald-400' },
    { label: 'Active Certifications', value: '4', icon: Calendar, color: 'text-purple-400' }
  ];

  return (
    <section id="certifications" className="py-32 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Floating Certification Icons */}
        <div className="absolute top-20 left-20 text-orange-400/10 animate-float">
          <Award size={48} />
        </div>
        <div className="absolute top-1/3 right-20 text-blue-400/10 animate-float-delayed">
          <Trophy size={40} />
        </div>
        <div className="absolute bottom-1/3 left-1/3 text-emerald-400/10 animate-float-slow">
          <FileText size={36} />
        </div>
        <div className="absolute top-1/2 right-1/3 text-purple-400/10 animate-float">
          <Star size={32} />
        </div>
        <div className="absolute bottom-1/4 left-1/4 text-cyan-400/10 animate-float-delayed">
          <CheckCircle size={28} />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-orange-400 text-sm shadow-lg mb-6">
            <Award size={16} />
            <span>Certifications</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Professional
            <span className="block bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Continuous learning and professional development through hackathons, workshops, and hands-on 
            experience in cutting-edge technologies like XR, AI, and collaborative problem-solving.
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
                  className="group bg-white/5 backdrop-blur-2xl rounded-2xl p-6 shadow-xl border border-white/10 hover:border-orange-500/30 transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:backdrop-blur-3xl"
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

        {/* Certifications Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className="relative bg-white/5 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl border border-white/10 hover:scale-105 transition-all duration-500 hover:bg-white/10 hover:backdrop-blur-3xl">
                  
                  {/* Certificate Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-white/10 backdrop-blur-xl rounded-xl group-hover:scale-110 transition-transform duration-300 border border-white/20">
                      <Award className={cert.color} size={28} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-white">{cert.title}</h3>
                        <span className="px-2 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-emerald-300 text-xs">
                          {cert.status}
                        </span>
                      </div>
                      <p className="text-slate-400 text-sm mb-2">{cert.issuer}</p>
                      <div className="flex items-center gap-2 text-slate-500 text-sm">
                        <Calendar size={14} />
                        <span>{cert.date}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {cert.description}
                  </p>

                  {/* Skills */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Skills Covered:</h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-slate-300 text-xs hover:border-orange-500/50 hover:bg-white/10 transition-all duration-300 shadow-lg"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <a 
                    href={cert.certificateLink || '#'} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full group flex items-center justify-center gap-2 px-4 py-3 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:backdrop-blur-2xl border border-white/10 hover:border-orange-500/50 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    <ExternalLink size={16} className="text-slate-300 group-hover:text-orange-400" />
                    <span className="text-slate-300 group-hover:text-white text-sm font-medium">View Certificate</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-emerald-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative max-w-4xl mx-auto bg-white/5 backdrop-blur-2xl rounded-3xl p-12 shadow-2xl border border-white/10 hover:bg-white/10 hover:backdrop-blur-3xl transition-all duration-500">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20">
                  <Trophy className="text-orange-400" size={40} />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-white mb-6">Always Learning, Always Growing</h3>
              <p className="text-xl text-slate-300 leading-relaxed mb-8">
                I believe in continuous learning and staying updated with the latest technologies through
                hands-on participation in hackathons, workshops, and collaborative projects. These experiences
                represent my commitment to innovation and professional growth in emerging technologies.
              </p>
              <div className="flex justify-center gap-4">
                <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-300"></div>
                <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse delay-700"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

