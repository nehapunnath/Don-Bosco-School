import React, { useState, useEffect, useRef } from 'react';
import { 
  FaGraduationCap, 
  FaRocket, 
  FaUserTie, 
  FaMedal, 
  FaBriefcase,
  FaAward,
  FaShieldAlt,
  FaStar,
  FaPlay,
  FaArrowRight,
  FaCamera,
  FaChevronLeft,
  FaChevronRight,
  FaBookOpen,
  FaMicroscope,
  FaGlobeAmericas,
  FaHandsHelping,
  FaQuoteLeft,
  FaRegHeart,
  FaHeart,
  FaLightbulb,
  FaUsers,
  FaChartLine
} from 'react-icons/fa';
import { 
  GiTeacher,
  GiModernCity,
  GiStairsGoal,
  GiGraduateCap,
  GiSpinningRibbons
} from 'react-icons/gi';
import { 
  IoIosRocket,
  IoIosSchool
} from 'react-icons/io';
import { 
  MdEngineering,
  MdHealthAndSafety,
  MdComputer,
  MdLocationOn,
  MdPhone,
  MdEmail
} from 'react-icons/md';
import d2 from '../assets/d2.jpeg';
import d3 from '../assets/d3.jpeg';
import d4 from '../assets/d4.jpeg';
import d1 from '../assets/d1.jpeg';
import d5 from '../assets/d5.jpeg';
import d6 from '../assets/d6.jpeg';
import d7 from '../assets/d7.jpeg';
import d8 from '../assets/d8.jpeg';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [activeProgram, setActiveProgram] = useState(0);
  const [likedCards, setLikedCards] = useState({});
  const [scrollProgress, setScrollProgress] = useState(0);
  const programsRef = useRef(null);

  const carouselImages = [
    {
      id: 1,
      url: d2,
      title: "World-Class Education",
      subtitle: "Excellence in Academics Since 1950",
    },
    {
      id: 2,
      url: d3,
      title: "Modern Infrastructure",
      subtitle: "State-of-the-Art Learning Facilities",
    },
    {
      id: 3,
      url: d4,
      title: "Expert Faculty",
      subtitle: "Learn from the Best Educators",
    },
  ];

  const galleryImages = [
    {
      id: 1,
      url: d1,
      title: "Sports Day",
      likes: 124,
    },
    {
      id: 2,
      url: d5,
      title: "Science Fair",
      likes: 89,
    },
    {
      id: 3,
      url: d6,
      title: "Cultural Event",
      likes: 156,
    },
    {
      id: 4,
      url: d7,
      title: "Lab Work",
      likes: 78,
    },
    {
      id: 5,
      url: d8,
      title: "Classroom",
      likes: 203,
    },
    {
      id: 6,
      url: d2,
      title: "Graduation",
      likes: 312,
    }
  ];

  const testimonials = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Parent of Alumni",
      text: "Don Bosco provided my children with not just education, but values that shaped their character. The holistic approach is truly remarkable.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      rating: 5
    },
    {
      name: "Priya Sharma",
      role: "Class of 2020",
      text: "The faculty's dedication and modern teaching methods helped me secure a seat in my dream engineering college. Forever grateful!",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      rating: 5
    },
    {
      name: "Anil Patel",
      role: "Business Owner",
      text: "As an alumni, I can confidently say Don Bosco builds leaders. The values I learned here continue to guide me in my business.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      rating: 4
    }
  ];

  const stats = [
    { number: "95%", label: "Board Results", icon: <FaAward className="w-8 h-8" />, color: "text-purple-400" },
    { number: "50+", label: "Years Experience", icon: <IoIosSchool className="w-8 h-8" />, color: "text-blue-400" },
    { number: "10k+", label: "Successful Alumni", icon: <GiGraduateCap className="w-8 h-8" />, color: "text-emerald-400" },
    { number: "100+", label: "Expert Faculty", icon: <GiTeacher className="w-8 h-8" />, color: "text-amber-400" }
  ];

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const toggleLike = (id) => {
    setLikedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const scrollToPrograms = () => {
    programsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar 
        key={i} 
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden font-['Inter']">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Scroll Progress Bar */}
      {/* <div className="fixed top-0 left-0 w-full h-1 z-50">
        <div 
          className="h-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div> */}

      {/* Hero Section - Ultra Modern */}
      <section className="relative h-screen overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          {carouselImages.map((image, index) => (
            <div
              key={image.id}
              className={`absolute inset-0 transition-all duration-1000 ease-out ${
                index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
              }`}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transform scale-105"
              />
              <div className={`absolute inset-0 bg-gradient-to-r ${image.gradient}`}></div>
            </div>
          ))}
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-6 h-6 bg-yellow-400 rounded-full animate-bounce opacity-60"></div>
        <div className="absolute top-40 right-32 w-4 h-4 bg-purple-400 rounded-full animate-bounce opacity-60 delay-300"></div>
        <div className="absolute bottom-32 left-32 w-5 h-5 bg-cyan-400 rounded-full animate-bounce opacity-60 delay-700"></div>

        {/* Hero Content */}
        <div className="relative z-20 h-full flex items-center justify-center px-4">
          <div className="text-center text-white max-w-6xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white font-medium mb-8 border border-white/30">
              <FaGraduationCap className="w-4 h-4 mr-2" />
              Excellence in Education Since 1950
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent animate-fadeIn">
              {carouselImages[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-light text-blue-100 max-w-3xl mx-auto leading-relaxed">
              {carouselImages[currentSlide].subtitle}
            </p>
            
          </div>
        </div>

        {/* Enhanced Carousel Controls */}
        <button 
          onClick={prevSlide}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 z-30 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 shadow-xl"
        >
          <FaChevronLeft className="w-5 h-5" />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 z-30 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 shadow-xl"
        >
          <FaChevronRight className="w-5 h-5" />
        </button>

        {/* Enhanced Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-500 transform hover:scale-150 ${
                index === currentSlide 
                  ? 'bg-white scale-150 shadow-lg' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>

        
      </section>

      {/* Stats Section - Modern Design */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 text-white overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="group text-center transform hover:scale-105 transition-all duration-500"
              >
                <div className="relative inline-block mb-6">
                  <div className="absolute inset-0 bg-white/10 rounded-2xl blur-md group-hover:blur-lg transition-all duration-500"></div>
                  <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 group-hover:border-white/20">
                    <div className={stat.color}>
                      {stat.icon}
                    </div>
                  </div>
                </div>
                <div className="text-5xl font-black mb-3 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-blue-200 font-semibold text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Academic Programs Section */}
      <section ref={programsRef} className="relative py-24 bg-transparent overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/50 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-blue-100 text-blue-800 font-semibold mb-6">
              <FaRocket className="w-5 h-5 mr-2" />
              Academic Excellence
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-slate-800 mb-6">
              Our <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Programs</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
              Comprehensive educational pathways designed for success in competitive fields with cutting-edge curriculum
            </p>
          </div>

          {/* Programs Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Engineering Foundation',
                icon: <MdEngineering className="w-12 h-12" />,
                description: 'Comprehensive preparation for JEE, BITSAT, and state engineering entrance exams with expert guidance',
                color: 'from-purple-500 to-purple-600',
                bgColor: 'bg-purple-500/10',
                features: ['JEE Preparation', 'Advanced Mathematics', 'Physics Lab'],
              },
              {
                title: 'Medical Sciences',
                icon: <MdHealthAndSafety className="w-12 h-12" />,
                description: 'NEET-focused curriculum with advanced medical science training and practical exposure',
                color: 'from-emerald-500 to-emerald-600',
                bgColor: 'bg-emerald-500/10',
                features: ['NEET Coaching', 'Biology Labs', 'Medical Workshops'],
              },
              {
                title: 'Science & Research',
                icon: <FaMicroscope className="w-12 h-12" />,
                description: 'Advanced research programs and scientific innovation courses for budding scientists',
                color: 'from-blue-500 to-blue-600',
                bgColor: 'bg-blue-500/10',
                features: ['Research Projects', 'Science Olympiads', 'Innovation Lab'],
              },
              {
                title: 'Commerce & Business',
                icon: <FaBriefcase className="w-12 h-12" />,
                description: 'CA, CS, and business management foundation programs with industry interface',
                color: 'from-amber-500 to-amber-600',
                bgColor: 'bg-amber-500/10',
                features: ['CA Foundation', 'Business Studies', 'Accounting'],
              },
              {
                title: 'Arts & Humanities',
                icon: <FaBookOpen className="w-12 h-12" />,
                description: 'Creative arts, literature, and social sciences programs fostering critical thinking',
                color: 'from-rose-500 to-rose-600',
                bgColor: 'bg-rose-500/10',
                features: ['Literature', 'History', 'Political Science'],
              },
              {
                title: 'Sports Academy',
                icon: <FaMedal className="w-12 h-12" />,
                description: 'Professional sports training combined with academic excellence programs',
                color: 'from-cyan-500 to-cyan-600',
                bgColor: 'bg-cyan-500/10',
                features: ['Athletics', 'Team Sports', 'Fitness Training'],
              }
            ].map((program, index) => (
              <div 
                key={index}
                className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl hover:shadow-3xl transform hover:-translate-y-4 transition-all duration-700 border border-white/50 overflow-hidden"
                onMouseEnter={() => setActiveProgram(index)}
              >
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/5 to-purple-500/5 rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-1000"></div>
                
                {/* Header */}
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-20 h-20 bg-gradient-to-r ${program.color} rounded-2xl flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 transition-transform duration-500`}>
                      {program.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-black text-slate-800 mb-4 group-hover:text-slate-900 transition-colors duration-300">
                    {program.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed mb-6 font-light">
                    {program.description}
                  </p>
                  
                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-slate-700 font-medium">
                        <div className={`w-2 h-2 bg-gradient-to-r ${program.color} rounded-full mr-3 transform group-hover:scale-150 transition-transform duration-300`}></div>
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

      {/* Enhanced Mission & Vision Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          {/* Section Header */}
          <div className="mb-20">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 font-semibold mb-6">
              <FaLightbulb className="w-5 h-5 mr-2" />
              Our Philosophy
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-slate-800 mb-6">
              Mission & <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Vision</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Mission */}
            <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-2xl hover:shadow-3xl transform hover:-translate-y-4 transition-all duration-700 border border-white/50 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 to-blue-500"></div>
              <div className="relative z-10">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl flex items-center justify-center text-white mb-8 mx-auto transform group-hover:scale-110 transition-transform duration-500 shadow-xl">
                  <GiStairsGoal className="w-12 h-12" />
                </div>
                <h3 className="text-4xl font-black text-slate-800 mb-8">
                  Our Mission
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed text-left font-light">
                  To provide <span className="font-bold text-purple-600">quality education</span> that develops intellectual competence, 
                  moral integrity, and social responsibility through innovative teaching methodologies 
                  and holistic development approaches. We strive to create an environment where every 
                  student can discover their potential and develop into well-rounded individuals ready 
                  to face global challenges.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-2xl hover:shadow-3xl transform hover:-translate-y-4 transition-all duration-700 border border-white/50 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
              <div className="relative z-10">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl flex items-center justify-center text-white mb-8 mx-auto transform group-hover:scale-110 transition-transform duration-500 shadow-xl">
                  <FaRocket className="w-12 h-12" />
                </div>
                <h3 className="text-4xl font-black text-slate-800 mb-8">
                  Our Vision
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed text-left font-light">
                  To be a <span className="font-bold text-blue-600">premier educational institution</span> that nurtures global citizens 
                  with strong character, innovative thinking, and leadership qualities. We envision 
                  creating a community of learners who not only excel academically but also contribute 
                  positively to society and make meaningful impacts in their chosen fields through 
                  knowledge, compassion, and ethical values.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm text-white font-semibold mb-6 border border-white/20">
              <FaUsers className="w-5 h-5 mr-2" />
              Testimonials
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
              What <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">People Say</span>
            </h2>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto font-light">
              Hear from our students, parents, and alumni about their Don Bosco experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl hover:shadow-3xl transform hover:-translate-y-4 transition-all duration-700 border border-white/20"
              >
                <div className="flex items-center mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-md"></div>
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="relative w-16 h-16 rounded-full object-cover border-2 border-white/50 group-hover:border-white/80 transition-colors duration-300"
                    />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                    <p className="text-blue-200 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                <div className="relative">
                  <FaQuoteLeft className="text-white/20 text-3xl mb-4" />
                  <p className="text-blue-100 leading-relaxed italic text-lg font-light">
                    "{testimonial.text}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Gallery Section */}
      <section className="relative py-24 bg-gradient-to-br from-white via-slate-50 to-blue-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 font-semibold mb-6">
              <FaCamera className="w-5 h-5 mr-2" />
              School Life
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-slate-800 mb-6">
              School <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Gallery</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
              Glimpses of life at Don Bosco - Where memories are made and futures are shaped
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={image.id}
                className="group relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-700 cursor-pointer"
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-1000"
                />
                
              </div>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Home;