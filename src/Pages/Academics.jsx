import React from 'react';
import { 
  FaBook,
  FaGraduationCap,
  FaFlask,
  FaPalette,
  FaRunning,
  FaCalendarAlt,
  FaChalkboardTeacher,
  FaUserGraduate,
  FaAward,
  FaRocket
} from 'react-icons/fa';
import { GiChemicalTank } from 'react-icons/gi';
// import { 
//   GiTeacher,
//   GiChemicalTank,
//   GiMathBook
// } from 'react-icons/gi';

const Academics = () => {
  // Academic programs data
  const programs = [
    {
      id: 1,
      title: "Primary Education",
      grade: "Grades 1-5",
      description: "Foundational learning with focus on literacy, numeracy, and holistic development",
      features: ["Interactive Learning", "Basic Computer Skills", "Arts & Crafts", "Physical Education"],
      image: "https://media.istockphoto.com/id/469968322/photo/students-raising-their-hands-during-class.jpg?s=612x612&w=0&k=20&c=8oLItT3JsDGWxnj5f1j6f_bwU3nZ3qeMo1wxTHOgWI8=",
      // icon: <FaBook className="w-6 h-6" />
    },
    {
      id: 2,
      title: "Middle School",
      grade: "Grades 6-8",
      description: "Building strong academic foundation with specialized subject teachers",
      features: ["Science Lab", "Mathematics", "Social Studies", "Language Arts"],
      image: "https://images.unsplash.com/photo-1568667256549-094345857637?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      // icon: <GiMathBook className="w-6 h-6" />
    },
    {
      id: 3,
      title: "High School",
      grade: "Grades 9-12",
      description: "Comprehensive preparation for higher education and career paths",
      features: ["Science & Commerce Streams", "College Preparation", "Career Counseling", "Advanced Placement"],
      image: "https://www.ecoleglobale.com/blog/wp-content/uploads/2024/10/Primary-Education-Elementary-Education.png",
      // icon: <FaGraduationCap className="w-6 h-6" />
    }
  ];

  // Curriculum features
  const curriculumFeatures = [
    {
      icon: <FaBook className="w-8 h-8" />,
      title: "Comprehensive Curriculum",
      description: "Aligned with national education standards and global best practices",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <GiChemicalTank className="w-8 h-8" />,
      title: "Science & Technology",
      description: "State-of-the-art labs and technology integration in learning",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <FaPalette className="w-8 h-8" />,
      title: "Arts & Creativity",
      description: "Encouraging creative expression through various art forms",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: <FaRunning className="w-8 h-8" />,
      title: "Sports & Fitness",
      description: "Physical education and sports for holistic development",
      color: "from-green-500 to-green-600"
    }
  ];

  // Academic calendar
  const academicCalendar = [
    { 
      period: "First Term", 
      duration: "April - June", 
      events: ["Academic Orientation", "Unit Test 1", "Annual Sports Day"],
      icon: <FaRocket className="w-6 h-6" />
    },
    { 
      period: "Second Term", 
      duration: "July - September", 
      events: ["Mid-term Exams", "Science Exhibition", "Independence Day Celebration"],
      icon: <FaFlask className="w-6 h-6" />
    },
    { 
      period: "Third Term", 
      duration: "October - December", 
      events: ["Annual Day", "Final Exams", "Christmas Celebration"],
      icon: <FaAward className="w-6 h-6" />
    },
    { 
      period: "Summer Break", 
      duration: "January - March", 
      events: ["Summer Camp", "Faculty Training", "Infrastructure Upgrade"],
      icon: <FaCalendarAlt className="w-6 h-6" />
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
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm text-white font-semibold mb-6 border border-white/20">
              <FaGraduationCap className="w-5 h-5 mr-2" />
              Academic Excellence
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Academics</span>
            </h1>
            <p className="text-2xl md:text-3xl text-blue-100 max-w-4xl mx-auto font-light leading-relaxed">
              Excellence in Education: Nurturing Minds, Building Futures through Innovative Learning
            </p>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="relative py-24 bg-transparent overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 font-semibold mb-6">
              <FaBook className="w-5 h-5 mr-2" />
              Academic Programs
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-slate-800 mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Programs</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
              Comprehensive educational programs designed to foster intellectual growth, 
              character development, and lifelong learning skills
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <div 
                key={program.id}
                className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl hover:shadow-3xl transform hover:-translate-y-4 transition-all duration-700 border border-white/50 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/5 to-cyan-500/5 rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-1000"></div>
                
                <div className="relative z-10">
                 
                  
                  <div className="h-48 overflow-hidden rounded-xl mb-6">
                    <img 
                      src={program.image} 
                      alt={program.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  <h3 className="text-2xl font-black text-slate-800 mb-2 group-hover:text-slate-900 transition-colors duration-300">
                    {program.title}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-4">{program.grade}</p>
                  <p className="text-slate-600 leading-relaxed font-light mb-6">
                    {program.description}
                  </p>
                  
                  <ul className="space-y-3 mb-6">
                    {program.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-slate-700 font-light">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                 
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Features */}
      <section className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 font-semibold mb-6">
              <FaChalkboardTeacher className="w-5 h-5 mr-2" />
              Our Curriculum Approach
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-slate-800 mb-6">
              Learning <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Methodology</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
              A balanced and innovative approach to education that prepares students for the future
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {curriculumFeatures.map((feature, index) => (
              <div 
                key={index}
                className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl hover:shadow-3xl transform hover:-translate-y-4 transition-all duration-700 border border-white/50 text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center text-white mb-6 mx-auto transform group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-black text-slate-800 mb-4 group-hover:text-slate-900 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed font-light">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Calendar */}
      <section className="relative py-24 bg-transparent overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 font-semibold mb-6">
              <FaCalendarAlt className="w-5 h-5 mr-2" />
              Academic Schedule
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-slate-800 mb-6">
              Academic <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Calendar 2024</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
              Important dates and events throughout the academic year
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {academicCalendar.map((term, index) => (
              <div 
                key={index}
                className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl hover:shadow-3xl transform hover:-translate-y-4 transition-all duration-700 border border-white/50"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white mb-6 transform group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  {term.icon}
                </div>
                
                <h3 className="text-2xl font-black text-blue-600 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                  {term.period}
                </h3>
                <p className="text-slate-500 mb-6 font-semibold">{term.duration}</p>
                
                <ul className="space-y-3">
                  {term.events.map((event, eventIndex) => (
                    <li key={eventIndex} className="flex items-start">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-slate-700 font-light">{event}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm text-white font-semibold mb-6 border border-white/20">
              {/* <GiTeacher className="w-5 h-5 mr-2" /> */}
              Our Faculty
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
              Dedicated <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Educators</span>
            </h2>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto font-light">
              Qualified and experienced educators committed to student success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center shadow-2xl hover:shadow-3xl transform hover:-translate-y-4 transition-all duration-700 border border-white/20">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-500 shadow-lg">
                95%
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Qualified Faculty</h3>
              <p className="text-blue-200 font-light">Postgraduate and doctoral degree holders</p>
            </div>

            <div className="group bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center shadow-2xl hover:shadow-3xl transform hover:-translate-y-4 transition-all duration-700 border border-white/20">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-500 shadow-lg">
                15+
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Years Experience</h3>
              <p className="text-blue-200 font-light">Average teaching experience per faculty</p>
            </div>

            <div className="group bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center shadow-2xl hover:shadow-3xl transform hover:-translate-y-4 transition-all duration-700 border border-white/20">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-500 shadow-lg">
                1:25
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Student Ratio</h3>
              <p className="text-blue-200 font-light">Optimal teacher-student ratio</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;