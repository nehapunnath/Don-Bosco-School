// About.jsx
import React from 'react';
import { 
  FaHistory,
  FaUsers,
  FaAward,
  FaLightbulb,
  FaHeart,
  FaGraduationCap,
  FaRocket,
  FaChartLine,
  FaHandshake,
  FaGlobeAmericas,
  FaQuoteLeft
} from 'react-icons/fa';
import { 
  GiTeacher,
  GiStairsGoal,
  GiAchievement
} from 'react-icons/gi';

const About = () => {
  const milestones = [
    { year: "1950", title: "Founded", description: "Don Bosco Educational Institution established" },
    { year: "1965", title: "Expansion", description: "Added Science and Commerce streams" },
    { year: "1980", title: "Recognition", description: "Awarded 'Best Educational Institution'" },
    { year: "2000", title: "Modernization", description: "State-of-the-art infrastructure developed" },
    { year: "2015", title: "Digital Era", description: "Integrated technology in education" },
    { year: "2023", title: "Excellence", description: "10,000+ successful alumni" }
  ];

  const values = [
    {
      icon: <FaGraduationCap className="w-8 h-8" />,
      title: "Excellence",
      description: "Commitment to academic excellence and continuous improvement in all endeavors",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <GiTeacher className="w-8 h-8" />,
      title: "Integrity",
      description: "Upholding moral values and ethical standards in education and conduct",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <FaHandshake className="w-8 h-8" />,
      title: "Respect",
      description: "Fostering mutual respect among students, staff, and the community",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: <FaHeart className="w-8 h-8" />,
      title: "Compassion",
      description: "Nurturing empathy and social responsibility in every student",
      color: "from-rose-500 to-rose-600"
    },
    {
      icon: <FaLightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "Encouraging creative thinking and embracing modern teaching methods",
      color: "from-amber-500 to-amber-600"
    },
    {
      icon: <FaGlobeAmericas className="w-8 h-8" />,
      title: "Global Perspective",
      description: "Preparing students for global challenges and opportunities",
      color: "from-cyan-500 to-cyan-600"
    }
  ];

  const leadership = [
    {
      name: "Dr. Ramesh Kumar",
      role: "Principal",
      experience: "25+ years in Education",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      quote: "Education is not just about academics, but about building character and shaping futures."
    },
    {
      name: "Mrs. Priya Sharma",
      role: "Vice Principal",
      experience: "20+ years in Education",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      quote: "Every child has unique potential waiting to be discovered and nurtured."
    },
    {
      name: "Mr. Anil Patel",
      role: "Head of Academics",
      experience: "18+ years in Education",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      quote: "Quality education transforms lives and builds the foundation for a better society."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm text-white font-semibold mb-6 border border-white/20">
              <FaHistory className="w-5 h-5 mr-2" />
              About Our Institution
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              About <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Don Bosco</span>
            </h1>
            <p className="text-2xl md:text-3xl text-blue-100 max-w-4xl mx-auto font-light leading-relaxed">
              Shaping futures through quality education, moral values, and holistic development since 1950
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="relative py-24 bg-transparent overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50">
                <div className="inline-flex items-center px-6 py-3 rounded-full bg-blue-100 text-blue-800 font-semibold mb-6">
                  <FaHistory className="w-5 h-5 mr-2" />
                  Our Legacy
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-6">
                  Our <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Story</span>
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-6 font-light">
                  Founded in 1950, Don Bosco Educational Institution has been at the forefront of providing 
                  quality education for over seven decades. What started as a small school with a vision to 
                  transform lives through education has now grown into a premier institution known for 
                  academic excellence and character building.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed mb-6 font-light">
                  Our journey has been marked by continuous innovation in teaching methodologies, 
                  infrastructure development, and a steadfast commitment to nurturing well-rounded 
                  individuals who contribute positively to society.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <div className="text-3xl font-black text-purple-600">70+</div>
                    <div className="text-sm text-slate-600">Years of Excellence</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black text-blue-600">10k+</div>
                    <div className="text-sm text-slate-600">Successful Alumni</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black text-emerald-600">100+</div>
                    <div className="text-sm text-slate-600">Expert Faculty</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                {milestones.map((milestone, index) => (
                  <div 
                    key={index}
                    className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-white/50"
                  >
                    <div className="text-3xl font-black text-purple-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                      {milestone.year}
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 mb-2">{milestone.title}</h3>
                    <p className="text-slate-600 text-sm font-light">{milestone.description}</p>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 font-semibold mb-6">
              <FaLightbulb className="w-5 h-5 mr-2" />
              Our Core Values
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-slate-800 mb-6">
              What We <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Believe In</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
              Our values are the foundation of everything we do, guiding our approach to education and student development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl hover:shadow-3xl transform hover:-translate-y-4 transition-all duration-700 border border-white/50 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/5 to-purple-500/5 rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-1000"></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center text-white mb-6 transform group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                    {value.icon}
                  </div>
                  
                  <h3 className="text-2xl font-black text-slate-800 mb-4 group-hover:text-slate-900 transition-colors duration-300">
                    {value.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed font-light">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm text-white font-semibold mb-6 border border-white/20">
              <FaUsers className="w-5 h-5 mr-2" />
              Leadership Team
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
              Meet Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Leaders</span>
            </h2>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto font-light">
              Experienced educators and visionaries dedicated to shaping the future of education
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <div 
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl hover:shadow-3xl transform hover:-translate-y-4 transition-all duration-700 border border-white/20"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-md"></div>
                    <img
                      src={leader.avatar}
                      alt={leader.name}
                      className="relative w-24 h-24 rounded-full object-cover border-2 border-white/50 group-hover:border-white/80 transition-colors duration-300"
                    />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{leader.name}</h3>
                  <p className="text-blue-300 font-semibold mb-2">{leader.role}</p>
                  <p className="text-blue-200 text-sm mb-4">{leader.experience}</p>
                  
                  <div className="relative mt-4">
                    <FaQuoteLeft className="text-white/20 text-2xl mb-3 mx-auto" />
                    <p className="text-blue-100 leading-relaxed italic font-light">
                      "{leader.quote}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      {/* <section className="relative py-24 bg-gradient-to-br from-white via-slate-50 to-blue-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 font-semibold mb-6">
              <GiAchievement className="w-5 h-5 mr-2" />
              Our Achievements
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-slate-800 mb-6">
              Celebrating <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Excellence</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "95%", label: "Board Exam Results", icon: <FaChartLine className="w-8 h-8" /> },
              { number: "50+", label: "National Awards", icon: <FaAward className="w-8 h-8" /> },
              { number: "100+", label: "Sports Championships", icon: <GiAchievement className="w-8 h-8" /> },
              { number: "1000+", label: "Scholarships Awarded", icon: <FaGraduationCap className="w-8 h-8" /> }
            ].map((achievement, index) => (
              <div 
                key={index}
                className="group text-center transform hover:scale-105 transition-all duration-500"
              >
                <div className="relative inline-block mb-6">
                  <div className="absolute inset-0 bg-white/50 rounded-2xl blur-md group-hover:blur-lg transition-all duration-500"></div>
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 group-hover:border-purple-200">
                    <div className="text-purple-600">
                      {achievement.icon}
                    </div>
                  </div>
                </div>
                <div className="text-4xl font-black mb-3 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  {achievement.number}
                </div>
                <div className="text-slate-600 font-semibold">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default About;